# Types of Memory in Solidity

Ethereum has mainly three types of memory:

    - Memory
    - Storage
    - Stack

- ## _Memory_

  - Variables that are declared in _functions_ are stored here and their lifespan lasts until the function executes.
  - Stores data temporarily.
  - Memory is wiped completely once the code is executed
  - Has less gas consumption, and is better for intermediate calculations
  - Holds Functions argument.

### Memory Example

```js
function multiply(uint256 num) external pure returns(uint256) {
uint256 result = num * num;  return result;
}

```

> the `num` variable is stored temporarily and locally in memory and it will be dead as soon as the function call is completed

---

- ## _(Account) Storage_

  - Stores data in between function calls.
  - The data previously placed in the storage area is accessible to each execution of the smart contract.
  - Consumes more gas.
  - Holds **_array_**, **_state_**, and **_local variables of the struct_** **_permanently on the blockchain_**.

### Storage Example

```js
contract StorageC {
  struct LotteryNumber{
    uint256 Lnumber;
    string selection;
  }  mapping(address => LotteryNumber) LotteryNumber;
}

```

> the smart contract’s state struct variable `LotteryNumber` is permanently on the blockchain.

---

- ## _Stack/Calldata_

  - This is a special data location that contains function arguments.
  - A stack is an internal place where temporary variables are stored in 32 bits slots it is usually used for value types.
  - It means the maximum size of the stack is **1024 x 256 bits(262,144bits)**. If you run out of the stack, contract execution will fail.
