# _Indexed_ Keyword in Events

This is useful when someone wants to search the history and filter the events on a particular index.

```js
event Transfer(address indexed from, address indexed to, uint amount);

```

> These indexed parameters are stored inside the logs inside a special kind of data structure called 'topics'.

### Deposit event example

```js
// Solidity contract named "Test"
contract Test {

   // Event declaration with two indexed parameters: _from (address) and _id (bytes32),
   // and one non-indexed parameter: _value (uint)
   event Deposit(address indexed _from, bytes32 indexed _id, uint _value);

   // Function named "deposit" with a bytes32 parameter named _id
    //     can receive Ether along with the function call
   function deposit(bytes32 _id) public payable {

      // Emit the Deposit event with the following values:
      // - msg.sender: The address of the caller of the function
      // - _id: The value of the _id parameter passed to the function, ALSO the identifier associated with the deposit.
      // - msg.value: The amount of Ether sent with the function call
      emit Deposit(msg.sender, _id, msg.value);
   }
}

```
