# Assets Declaration

# Description

The "Assets Declaration" project aims to facilitate the process of asset declaration by politicians in Nigeria before running for elections. By utilizing the Flow blockchain and Cadence programming language, this project provides a transparent and immutable platform for politicians to register and declare their assets. The purpose is to promote accountability, discourage corruption, and ensure that politicians' financial information is accessible to the public.

---

# Smart Contract - AssetDeclaration

The smart contract **_AssetDeclaration_** is the core component of the project. It contains a dictionary that maps the **_Address_** type to the Politician type, allowing storage and retrieval of **_politician_** information.

### Struct - Politician

The **_Politician_** struct represents the details of a politician's assets declaration. It consists of the following fields:

- **_office_**: Represents the political office the politician is running for.
- **_firstName_**: The first name of the politician.
- **_lastName_**: The last name of the politician.
- **_netWorth_**: The net worth of the politician, represented as a UFix64 type.
- **_numOfLands_**: The number of lands owned by the politician.
- **_numOfHouses_**: The number of houses owned by the politician.
- **_stocksValue_**: The value of stocks owned by the politician.
- **_walletAddress_**: The address of the politician's wallet on the blockchain.

### init function

The **_init_** function is the initializer for the **_Politician_** struct. It takes eight arguments and assigns them to the corresponding fields of the struct.

### addPolitician function

The **_addPolitician_** function is used to add a new politician to the **_politicians_** dictionary.

---

# Script File - struct.cdc

The **_struct.cdc_** file contains the script code for retrieving the details of a politician's assets declaration using their **_walletAddress_**. It imports the **_AssetDeclaration_** contract and defines the **_main_** function, which takes the **_walletAddress_** as an argument and returns the corresponding politician details.

---

# Transaction File - txStruct.cdc

The **_txStruct.cdc_** file contains the transaction code for adding a new politician's assets declaration. It imports the **_AssetDeclaration_** contract and defines a transaction that takes the following arguments:

**_office_**: The political office the politician is running for.
**_firstName_**: The first name of the politician.
**_lastName_**: The last name of the politician.
**_netWorth_**: The net worth of the politician.
**_numOfLands_**: The number of lands owned by the politician.
**_numOfHouses_**: The number of houses owned by the politician.
**_stocksValue_**: The value of stocks owned by the politician.
**_walletAddress_**: The address of the politician's wallet.

> The transaction's **_prepare_** function ensures the signer is authorized, and the **_execute_** block calls the **_addPolitician_** function with the provided arguments. It also logs a message to indicate the successful declaration of assets.

# Getting Started

To interact with the Assets Declaration smart contract, you need a Flow blockchain client and a Cadence development environment. or rather use the [Flow Playground](https://play.flow.com//).

## Executing Program

To run the Assets Declaration smart contract, perform the following steps:

- Deploy the smart contract to the Flow blockchain using the deployed contract's address or account.
- Invoke the addPolitician function, passing in the required arguments to register a politician's asset declaration.
- Verify the successful registration by querying the politicians mapping using the politician's wallet address.

# Author

Chidozie Ezeanekwe;

- [Linkedin](https://www.linkedin.com/in/chidozieezeanekwe/ 'My linkedin Profile').
- [Github](https://github.com/zenodavids 'My Github Profile').
