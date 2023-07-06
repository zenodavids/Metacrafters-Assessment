
// Write a smart contract that takes some ether from the user. Find out its value in units of:
// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract EtherReceiver {
    address private owner; // Contract owner address

    // Declare an event to track the amount of ether received
    event EtherReceived(address sender, uint256 amount);

    // Modifier to restrict access to the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function.");
        _;
    }

    // Constructor to set the contract owner
    constructor() {
        owner = msg.sender;
    }

    // Function to receive ether
    function receiveEther() external payable onlyOwner {
        require(msg.value > 0, "Amount sent must be greater than zero.");

        // Emit the event to track the amount of ether received
        emit EtherReceived(msg.sender, msg.value);

        // Perform additional logic or storage operations with the received ether
        // ...
    }
}
