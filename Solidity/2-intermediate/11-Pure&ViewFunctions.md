# View and Pure Functions

## view functions

    - Display the data.
    - Do not modify the state variable,
    - Are good for reading data operations

## Pure functions

    - Do not access data from the blockchain
    - Do not allow to read or write operations
    - No access to state data or transaction data
    - Return type based on the data from a function

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ViewPure {
    uint public x = 1;

    // Promise not to modify the state.
    function sumX(uint y) public view returns (uint) {
        return x + y;
    }

    // Promise not to modify or read from the state.
    function sumI(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}


```
