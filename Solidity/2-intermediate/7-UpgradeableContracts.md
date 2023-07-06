# We make smart contracts upgradeable by using **_proxy contracts_**.

There are two different smart contracts:

- The first one is called the **_implementation_** (or the **_logic_**) contract.
  It contains all the regular functions of the smart contract. (like transfer(), approve(), and so on…).

- second one is called the **_proxy_** contract.
  It contains an address in storage that points to the implementation contract address and a function that delegates call to the implementation contract and the storage of Dapps.

## Implementation (or the logic) contract

The _Twocalled_ contract below is the target contract or the contract whose function is being called by the proxy contract, _OneCall_ using delegatecall.

```js
// NOTE: Deploy this contract first
contract Twocalled {
    // NOTE: storage layout must be the same as contract OneCall
    // Defines the storage layout of the contract, which should be the same as the "OneCall" contract
    uint public num;
    address public sender;
    uint public value;

    // Function to set the state variables of the contract
    function setVars(uint _num) public payable {
        // Assigns the value of _num to the "num" state variable
        num = _num;
        // Assigns the sender address to the "sender" state variable
        sender = msg.sender;
        // Assigns the value of the transaction to the "value" state variable
        value = msg.value;
    }
}

```

## the Proxy Contract

```js

// This is "
contract OneCall {
    // Public state variables of the contract
    uint public num;
    address public sender;
    uint public value;

    // Function to set the state variables of the specified contract using delegatecall
    function setVars(address _contract, uint _num) public payable {
        // Delegatecall to the specified contract's "setVars" function with the given parameters
        (bool success, bytes memory data) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}

```
