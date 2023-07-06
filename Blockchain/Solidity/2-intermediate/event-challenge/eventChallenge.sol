//SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

// Solidity version declaration

contract Bank {
    // Mapping to store balances of addresses
    mapping(address => uint) private balances;

     // Event declaration for deposit
    event Deposit(address indexed owner, uint amount);

    // Event declaration for withdrawal
    event Withdraw(address indexed owner, uint amount);

    // Event declaration for transfer
    event Transfer(address indexed from, address indexed to, uint amount);


    // Function to deposit funds
    function deposit(address _account, uint _number) public payable {
        // Increase the balance of the specified account
        balances[_account] += _number;
        // Emit the Deposit event with the owner's address and deposited amount
        emit Deposit(_account, _number);
    }

    // Function to withdraw funds
    function withdraw(address _account, uint _number) public payable {
        // Check if the account has enough funds
        require(balances[_account] > 0, "You're broke!");
        // Decrease the balance of the specified account
        balances[_account] -= _number;
        // Emit the Withdraw event with the owner's address and withdrawn amount
        emit Withdraw(_account, _number);
    }

    // Function to transfer funds from one account to another
    function transfer(address _from, address _to, uint _number) public payable {
        // Check if the sender has enough funds
        require(balances[_from] >= _number, "You do not have enough funds for this transaction");
        // Decrease the balance of the sender
        balances[_from] -= _number;
        // Increase the balance of the recipient
        balances[_to] += _number;
        // Emit the Transfer event with the sender's address, recipient's address, and transferred amount
        emit Transfer(_from, _to, _number);
    }

    // Function to get the balance of an address
    function getBalance(address _address) public view returns(uint) {
        // Return the balance of the specified address
        return balances[_address];
    } 
}
