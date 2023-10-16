from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from web3 import Web3
from solcx import compile_standard, install_solc
import json
from datetime import datetime
import mysql.connector

app = FastAPI()

# Define your MySQL database configuration
"""
db_config = {
    "host": "localhost",
    "user": "test",
    "password": "1150",
    "database": "etherTradeDB",
}
"""
# Configure CORS to allow requests from your React app
app.add_middleware(
    CORSMiddleware,
    # Replace with your React app's URL
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:7545"))


@app.get("/purchase")
async def purchase_product(
    productId: int,
    productName: str,
    productDesc: str,
    price: int
):
    # Ethereum settings
    chain_id = 1337  # Default chain ID for Ganache
    my_address = "0x3e916ef0122bc3f9168F774b40dD2E6e20167b31"
    private_key = "0xdb2abbf445fa508da3847b9c4d9c6465562e16814a6b52429aa152779a1551de"

    with open("./backend/SimpleStorage.sol", "r") as file:
        simple_storage_file = file.read()

    install_solc("0.6.0")
    compiled_sol = compile_standard(
        {
            "language": "Solidity",
            "sources": {"SimpleStorage.sol": {"content": simple_storage_file}},
            "settings": {
                "outputSelection": {
                    "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
                }
            },
        },
        solc_version="0.6.0",
    )

    # Get bytecode and ABI
    bytecode = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["evm"]["bytecode"]["object"]
    abi = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["abi"]

    SimpleStorage = w3.eth.contract(abi=abi, bytecode=bytecode)

    nonce = w3.eth.get_transaction_count(my_address)

    transaction = SimpleStorage.constructor().build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price,
            "from": my_address,
            "nonce": nonce,
        }
    )
    transaction.pop('to')

    signed_txn = w3.eth.account.sign_transaction(
        transaction, private_key=private_key)
    tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

    simple_storage = w3.eth.contract(
        address=tx_receipt.contractAddress, abi=abi)

    # Extract user information from the request (hardcoded for now)
    _userId = 1
    _email = "john@example.com"

    # Extract product information from the request
    _productId = productId
    _productName = productName
    _productDesc = productDesc
    _price = price

    store_transaction = simple_storage.functions.store(
        _userId, _email, _productId, _productName, _productDesc, _price).build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price,
            "from": my_address,
            "nonce": nonce + 1,
        }
    )

    signed_store_txn = w3.eth.account.sign_transaction(
        store_transaction, private_key=private_key)
    send_store_tx = w3.eth.send_raw_transaction(
        signed_store_txn.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(send_store_tx)

    transaction_hash = send_store_tx.hex()

    # Get the current time
    current_time = datetime.now()
    # Format it as "YYYY-MM-DD HH:MM:SS"
    timestamp = current_time.strftime("%Y-%m-%d %H:%M:%S")

    return {"message": "Purchase successful", "transactionHash": transaction_hash, "timestamp": timestamp}
