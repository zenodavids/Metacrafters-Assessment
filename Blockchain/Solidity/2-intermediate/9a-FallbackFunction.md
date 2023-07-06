# Fallback Functions

- Called when a **_non-existent function_** is called on the contract.
- Required to be marked **_external_**.
- Has no name, no arguments, no return and **_cannot be marked payable_**.
- Defined **_once_** per contract.
- Throws exception if the contract receives plain Ether without data.
- Limited to 2300 gas when called by another function.

## fallback() external payable

```js
pragma solidity ^0.5.12;

// contract with fallback function
contract fall {
  uint n;
  function set(uint value) external {
    n = value;
  }

  function() external payable {
    n = 0;
  }
}

// contract to interact with contract fall
contract Sendeth {
  function callfall(fall a) public returns (bool) {
     // calling a non-existing function
      (bool success,) = address(a).call(abi.encodeWithSignature("setter()"));
      require(success);

      // sending ether to contract fall
      address payable payableA = address(uint160(address(a)));
      return(payableA.send(2 ether));
   }
}

```

> the above Solidity code snippet is a fallback function. It is declared payable, which allows it to accept transfer value.
>
> It is called in the following scenarios:
> A contract receives only ether and _no data_
> No function calls matched even though the account received data

With this statement `(bool success,) = address(a).call(abi.encodeWithSignature("setter()"));` we are calling a function signature in contract fall that does not exist. That’s why this call would go to the fallback function and be handled by the fallback function.
