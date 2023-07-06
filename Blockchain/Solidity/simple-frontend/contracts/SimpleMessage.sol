// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleContract {
    string public message;
    uint256 public number;
    
    // Function to set the message
    function setMessage(string memory _message) external {
        message = _message;
    }
    
    // Function to set the number
    function setNumber(uint256 _number) external {
        number = _number;
    }
}
