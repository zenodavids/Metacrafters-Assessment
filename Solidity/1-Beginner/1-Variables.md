# Variables

there are three types;

- _State Variables_;
  their values are permanently stored on the Blockchain.

- _Local Variables_;
  their values are temporary and they live in a function.

- _Global Variables_;
  their values are special keywords that are used to get information in the blockchain.
  > examples are: msg,sender, block.timestamp, msg.value, etc.

---

## Variable Types

| TYPES                             |                                      DESCRIPTION                                      | dEFAULT VALUE |
| :-------------------------------- | :-----------------------------------------------------------------------------------: | ------------: |
| Signed Integer `int`              |              Holds both **_negative_** and **_positive_** whole numbers               |           `0` |
| Unsigned Integer `uint`           |                        Holds **_only positive whole_** numbers                        |           `0` |
| Boolean `bool`                    |                      Holds a value of **_true_** or **_false_**                       |       `false` |
| Address `address`                 |                               Holds an Ethereum Address                               |         `0x0` |
| Address payable `address payable` | Holds an address both also has some built in functions; **_send_** and **_transfer_** |         `0x0` |
| String `String`                   |                                Holds some text values                                 |          `""` |

---

## Writing Variables

```js
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

contract Storage {

    // state variable
   uint number;

    // takes a value _number and assigns it to the state variable number
    function setNumber(uint _number) public {
        number = _number;
    }

    // returns the value of the state variable number
    function getNumber() public view {
        return number;
    }
 }

```
