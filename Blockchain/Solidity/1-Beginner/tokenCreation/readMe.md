# Project Title
### MyToken Contract

## Description
The MyToken contract is a Solidity implementation of a basic token contract. It allows minting and burning of tokens. This contract serves as a starting point for creating custom token contracts on the Ethereum blockchain.

# Getting Started
## Installing
To use this contract, you need to have a Solidity development environment set up. You can install Solidity by following the official Solidity documentation at https://soliditylang.org/.

## Executing program
Once you have Solidity installed, follow the steps below to execute the contract:

1. Create a new Solidity file (e.g., `MyToken.sol`) in your preferred code editor.
2. Copy and paste the following code into the file:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {
    // public variables here
    string public tokenName = "Zeno";
    string public tokenAbbrev = "ZEN";
    uint public totalSupply = 0;

    // mapping variable here
    mapping (address => uint) public balances;

    // mint function
    function mint(address _to, uint _value) public {
        // in real use cases, you MUST use the require function here
        balances[_to] += _value;
        totalSupply += _value;
    }

    // burn function
    function burn(address _from, uint _value) public {
        if (balances[_from] >= _value) {
            totalSupply -= _value;
            balances[_from] -= _value;
        }
    }
}
```

3. Save the file.

To compile the contract, you can use a Solidity compiler such as Remix or the Solidity command-line compiler (`solc`). Refer to the documentation of your chosen Solidity development environment for instructions on how to compile contracts.

## Help
If you encounter any issues or have questions regarding this contract, feel free to reach out to the author.

## Authors
Chidozie Ezeanekwe
@zenodavids

## License
This project is licensed under the MIT License.
