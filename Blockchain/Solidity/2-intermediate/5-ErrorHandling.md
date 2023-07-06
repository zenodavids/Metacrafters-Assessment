# Error Handling

There are three methods that constitute the error-handling process in Solidity:

- ### require()

  Used to validate certain conditions before further execution of a function.
  `require(<condition to be validated> , <message to be displayed if the condition fails>);`

- ### assert()

  like `require()`, is a convenience function that checks for conditions. If a condition fails, then the function execution is terminated with an error message
  `assert(<condition to be checked/validated>);`

- ### revert()

  Can be used to flag an error and revert the current call.
  `revert()`

## Basic Example

```js
pragma solidity ^0.8.13;

contract Error {
    function testRequire(uint _i) public pure {
        // Require should be used to validate conditions such as:
        // - inputs
        // - conditions before execution
        // - return values from calls to other functions
        require(_i > 10, "Input must be greater than 10");
    }

    function testRevert(uint _i) public pure {
        // Revert is useful when the condition to check is complex.
        // This code does the exact same thing as the example above
        if (_i <= 10) {
            revert("Input must be greater than 10");
        }
    }

    uint public num;

    function testAssert() public view {
        // Assert should only be used to test for internal errors,
        // and to check invariants.

        // Here we assert that num is always equal to 0
        // since it is impossible to update the value of num
        assert(num == 0);
    }

    // custom error
    error InsufficientBalance(uint balance, uint withdrawAmount);

    function testCustomError(uint _withdrawAmount) public view {
        // Retrieve the balance of the contract address
        uint bal = address(this).balance;
        // Check if the balance is less than the requested withdrawal amount
        if (bal < _withdrawAmount) {
            // Revert the transaction with a custom error and provide   additional information using a revert reason
            revert InsufficientBalance({balance: bal, withdrawAmount:   _withdrawAmount});
        }
    }

}

```
