# Abstract Contracts

```js
pragma solidity ^0.5.0;

contract CalciAbstract {
   function getResult() public view returns(uint);
}

// "is CalciAbstract" is the best way to use an abstract.
contract Compute is CalciAbstract {
   function getResult() public view returns(uint) {
      uint a = 1;
      uint b = 2;
      uint result = a + b;
      return result;
   }
}
```

> we have abstract contract with name **_CalciAbstract_** that has function `getResult()` which is not implemented in **_CalciAbstract_** contract. This function is rather inherited and implemented in the child contract **_Compute_**

# Interface

Interfaces can have only unimplemented functions. they are neither _compiled_ nor _deployed_. They are also called _pure abstract_ contracts.

### Properties of an Interface

    - Cannot implement any of their functions. All interface functions are implicitly virtual
    - Are defined with the keyword interface
    - Cannot inherit other contracts or interfaces (after solidity 6.0.0 interfaces can inherit from interfaces) but other contracts can inherit from interfaces.
    - Function state mutability can be pure , view , payable or default(blank).
    - Fallback functions cannot be defined in an Interface.
    - Interface functions are implicitly "virtual".
    - Cannot define a constructor.
    - Functions can be defined external only.
    - Cannot have state variables but local variables definition is allowed.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface ICounter {
    function count() external view returns (uint);
    // This line declares a function called 'count' in the interface,
    // which returns an unsigned integer and can be called externally.

    function increment() external;
    // This line declares a function called 'increment' in the interface,
    // which doesn't return anything and can be called externally.
}

contract MyContract {
    // This line defines a new contract called 'MyContract'.

    function incrementCounter(address _counter) external {
        ICounter(_counter).increment();
        // This line casts the '_counter' address to the 'ICounter' interface
        // and calls the 'increment' function on the contract at that address.
    }

    function getCount(address _counter) external view returns (uint) {
        return ICounter(_counter).count();
        // This line casts the '_counter' address to the 'ICounter' interface
        // and calls the 'count' function on the contract at that address,
        // returning the result.
    }
}

```

## Difference between Abstract and Interface

    - Interface only declares functions, cannot implement them
    - Abstract class can declare functions (same as interface) as well as implement them.
    - Both cannot be instantiated
    - Both need to be implemented/inherited from other contract
