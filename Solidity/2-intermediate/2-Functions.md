# Functions

Function Syntax
`function <function_name>(<arguments to the function>) <visibility_type> <function_type> <modifiers> returns(<return data type>)`

## Function visibility

    specifies how the function is visible to the caller internally or externally.

    - Public - Can be called inside a contract or outside a contract
    - Private - Can be called only inside it's contract
    - Internal - declaring contracts and other derived contacts
    - External - an be called inside a contract and contracts that inherit from it

## Function Type

    - Pure: No interaction with the blockchain.

```js
    // Promise not to modify or read from the state.
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
```

    - View: only reads from the Blockchain

```js
  // Promise not to modify the state.
function addToX(uint y) public view returns (uint) {
    return x + y;
}
```

    - Payable: have the capability to accept Ether as an input.

```js
contract payableContract {

    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function deposit () external payable {}

    function getBalance () external view returns (uint) {
        return address(this).balance;
    }


}
```

    - Fallback: if there is a call for a function that doesn't exist, this will execute.
