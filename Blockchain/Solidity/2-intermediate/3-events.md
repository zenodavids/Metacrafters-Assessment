# Events

- define an event

  > event <event_name> (<event_parameters>)

- After you have defined an event, you can call it or trigger
  > emit <event_name> (<event_arguments>)

## Basic Exmple

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Event {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters helps you filter the logs by the indexed parameter
    // index an event so it can be searched later

    event messLog(address indexed sender, string message); // event with arguments
    event messLog2(); // event without arguments

    function test() public {
        emit messLog(msg.sender, "Hello World!");
        emit messLog(msg.sender, "Hello EVM!");
        emit messLog2();
    }
}

```
