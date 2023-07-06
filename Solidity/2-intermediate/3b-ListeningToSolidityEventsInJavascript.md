# Capturing events in Javascript

```js
// Declaration of contract_abi variable, which should contain the ABI (Application Binary Interface) JSON code
let contract_abi = abi_json_code_during_contract_compilation;
let contract_address = ontract_address_during_contract_compilation;

// Creation of EventTest object using the Web3.js eth.contract() method and passing the contract_abi as the parameter
let EventTest = web3.eth.contract(contract_abi);

// Retrieval of an existing contract instance using its contract address ("0x98...") and assigning it to the EventTestContract variable
let EventTestContract = EventTest.at(contract_address);

// Calling the "transfer" function of the EventTestContract instance, and providing a callback function with "err" and "data" as parameters
EventTestContract.transfer(function (err, data) {
  // Checking if there was no error during the transfer function call
  if (!err)
    // Outputting the "data" to the console
    console.log(data);
});
```
