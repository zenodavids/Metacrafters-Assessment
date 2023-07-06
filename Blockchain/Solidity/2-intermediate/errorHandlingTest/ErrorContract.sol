// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ErrorContract {
    uint public value;

    // The following function updates the contract's value
    function updateValue(uint _newValue) public {
        // The require() statement checks a condition and reverts if it evaluates to false
        require(_newValue > 0, "New value must be greater than zero");

        // The assert() statement checks a condition and throws an exception if it evaluates to false
        assert(_newValue != value);

        // The contract's value is updated if the conditions are met
        value = _newValue;

        // The revert() statement throws an exception, reverting the changes if executed
        revert("Value update failed");
    }
}
