# Deploying your first smart contract

## Smart contract

Lets start with the smart contract

- Smart contracts are stored in your account
- Two main component of a smart contract are **_state_** and **_logic_**

```cadence

pub contract HelloWorld {
    // ///////////////////////////////////////////////
    // state => variables that lives in the blockchain
    // /////////////////////////////////////////////

    // in cadence, "let" is immutable. ie; "let" is like "const" in javascript
    // "var" on the other hand is mutable, just like "let" in javascript
    // "pub" (PUBLIC) means we can access the value from EVERYWHERE...
    // ... but only WRITEABLE to the scope it is defined in.
    // variable syntax: [access modifier] [var/let] [variable name]: [type]
    pub var greeting: String

    // //////////////////////////////////////////////
    // Logic => functions and logic of the blockchain
    // //////////////////////////////////////////////

    // All variables MUST be in the init() function...
    // because that is how you set the initial values for any variables you have.
    // only run once when the contract is initially deployed.
    init(){
        // set the initial value of the "greeting" variable to "Hello, World"
        self.greeting = "Hello, World"
    }

    // Public function that returns our friendly greeting!
    pub fun hello(): String {
        return self.greeting
    }

    // this allows us to change the value of the greeting variable
    // function syntax: [access modifier] fun [function name](parameter1: Type, parameter2: Type, ...): [return type] {}
    pub fun changeGreeting(newGreeting: String){
        self.greeting = newGreeting

        //  Logs are like console.log in Javascript
        log("Greeting updated!")
    }

}
```

## The Script File (Reading the Blockchain)

> **_Script doesn't Change the State the blockchain, it only allow us to view data._**

- views the State of the Blockchain, **_Does not modify or change the state_**.
- can return something
- its **free**, cost nothing.

```cadence
//===================================================> Syntax

// import ContractName from contract Address that deployed it

pub fun main(parameters): ReturnType {
    return ...
}
// =======================================================


// import the smart contract from the address it was deployed with
// import a contract by doing import [contract name] from [address of that contract]...
// ...Because we deployed HelloWorld to 0x01,
//  syntax:
import HelloWorld from 0x01

// syntax: [access modifier] fun [function name](): [return type] { ... }
pub fun main(): String {
    return HelloWorld.greeting
}

```

## The Transaction File

> **_This Changes the State the blockchain._**

- views or edits/modifies the State of the Blockchain.
- can return something
- **cost gas** to modify.

```cadence

//===================================================> Syntax

// import ContractName from contract Address that deployed it

transaction(parameter: parameterType) {

  prepare(signer: AuthAccount) {}

  execute {

  }
}
// =======================================================


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
