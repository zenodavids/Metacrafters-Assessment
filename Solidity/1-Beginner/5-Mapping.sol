// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract Mapping {

    // mapping is used to store and retrieve values based on a key. The key acts as the label, and the value is what you want to store.

    // *====================> Simple Mapping
    // syntax: mapping (key => value) variableName;
    mapping (address => uint) public balances;
    // represents the balance of each address
    // if you give me an address, i'll return the balance

    // *====================> nested Mapping
    mapping (address => mapping (address => bool)) isFriend;
    // checks if the first address is friend to the second address

    function examples() external {

    // * ====================> Set, Get, Delete

    // Set

        // set a key to a certain value in a mapping using "balances"
        // set balance of msg.sender is '123'
        balances[msg.sender] = 123;

    // Get

        // syntax to get the value stored in a maaping is similiar to how we access arrays
        // get the balance of msg.sender stored in balances
        uint bal = balances[msg.sender];

        // Get the value for our mapping(not set yet)
        uint getBalFromaddress1 = balances[address(1)];
        // gets the balance of the first address in the mapping
        // returns 0 since we've not set it

    // Update

        // update the value of the msg.sender's balance
        balances[msg.sender] += 456; // 123 + 456 = 579

    // Delete

        // delete the value of the msg.sender's balance
        delete balances[msg.sender]; // resets the value to 0


    // * Check if the msg.sender is a friend of this contract
        isFriend[msg.sender][address(this)] = true;

    }
}