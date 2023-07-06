# The Transaction File

> **_This Changes the State the blockchain._**

- views or edits/modifies the State of the Blockchain.
- can return something
- **cost gas** to modify.

# The Syntax

```cadence

//===================================================> Syntax

// import ContractName from contract Address that deployed it

transaction(parameter: parameterType) {

    // prepare phase: to access the information/data in the user account.
  prepare(signer: AuthAccount) {}

    //  execute phase: call functions and do stuff to change the data on the blockchain.
  execute {

  }
}
// =======================================================

```

## An example of a transaction file

```cadence


// import the smart contract from the address it was deployed with
import HelloWorld from 0x01

transaction(txGreeting: String) {
    // the "signer" is basically the person calling this function
    // this call will change the state of the blockchain"changing the hello wold" to any new string the signer desires
    // this will cost a fee, so the signer pays for that fee
    // "AuthAccount" is the wallet address/account of the signer
  prepare(signer: AuthAccount) {}

    // this is where the change is executed
  execute {
    // "HelloWorld" => contract name
    // "changeGreeting" => function in contract that allows for state change
    // "newGreeting" => parameter passed in the changeGreeting function
    // "txGreeting" parameter passed in the Transaction function
    HelloWorld.changeGreeting(newGreeting: txGreeting)
    log(HelloWorld.hello())
  }
}

```
