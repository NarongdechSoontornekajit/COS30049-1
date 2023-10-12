// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract SimpleStorage {
    struct Product {
        uint256 userId;
        string email;
        uint256 productId;
        string productName;
        string productDesc;
        uint256 price;
    }
    
    Product public productData;

    function store(
        uint256 _userId,
        string memory _email,
        uint256 _productId,
        string memory _productName,
        string memory _productDesc,
        uint256 _price
    ) public {
        productData.userId = _userId;
        productData.email = _email;
        productData.productId = _productId;
        productData.productName = _productName;
        productData.productDesc = _productDesc;
        productData.price = _price;
    }

    function getProductData() public view returns (
        uint256 userId,
        string memory email,
        uint256 productId,
        string memory productName,
        string memory productDesc,
        uint256 price
    ) {
        userId = productData.userId;
        email = productData.email;
        productId = productData.productId;
        productName = productData.productName;
        productDesc = productData.productDesc;
        price = productData.price;
    }
}
