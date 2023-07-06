# Constants

The idea of using constants is to save **_gas_**.

- we only use constants when we wont change the supposed state variable.
- Constants variables are al in uppercase letters.

```js
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

contract Storage {

    // state variable
   uint public constant FIGURE = 123

 }
```
