// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount; //a variable to hold the number of transactions

    //create an event
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;  // type and name of property
        address receiver; // type and name of property
        uint amount; // amount
        string message; // type and name of property
        uint256 timestamp; // type and name of property
        string keyword; // type and name of property
    }

    // array of different transactions
    TransferStruct[] transactions; // array of different transactions

    // functions to add to blockchain
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1; // increment the number of transactions or transaction count.
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword)); //adding transaction to al list of transactions

        //make transfer
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        // return transactions from memory an array of objects
        return transactions;
    }

    function getAllTransactionCount() public view returns(uint256) {
        // return transacton count in integer/number format
        return transactionCount;

    }
}