// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract NigeriaToken {
    address public centralBank; // Address of the central bank
    string public tokenName; // Name of the token
    string public tokenSymbol; // Symbol of the token
    uint256 public inventory; // Total token inventory
    uint8 public kobo; // Decimal places for the token

    mapping(address => uint256) public balanceOf; // Balance of each address

    event TransferNGN(address indexed from, address indexed to, uint256 value); // Event for token transfer
    event Burn(address indexed from, uint256 value); // Event for token burn

    constructor() {
        centralBank = msg.sender; // Set the deployer's address as the central bank
        tokenName = "NG-Noken"; // Set the token name
        tokenSymbol = "NGN"; // Set the token symbol
        kobo = 18; // Set the number of decimal places for the token
        inventory = 1000000 * (10**uint256(kobo)); // Set the initial token inventory
    }

    function mintNGN(uint256 _value) public returns (bool success) {
        require(msg.sender == centralBank, "Only centralBank can mint tokens"); // Only the central bank can mint   tokens

        balanceOf[msg.sender] += _value; // Increase the balance of the central bank
        inventory += _value; // Increase the total inventory
        emit TransferNGN(address(0), msg.sender, _value); // Emit the transfer event
        return true;
    }

    function transferNGN(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance"); // Check if the sender has sufficient     balance

        balanceOf[msg.sender] -= _value; // Deduct the transferred amount from the sender's balance
        balanceOf[_to] += _value; // Add the transferred amount to the recipient's balance
        emit TransferNGN(msg.sender, _to, _value); // Emit the transfer event
        return true;
    }

    function burnNGN(uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance"); // Check if the sender has sufficient balance

        balanceOf[msg.sender] -= _value; // Deduct the burned amount from the sender's balance
        inventory -= _value; // Deduct the burned amount from the total inventory
        emit Burn(msg.sender, _value); // Emit the burn event
        return true;
    }
}
