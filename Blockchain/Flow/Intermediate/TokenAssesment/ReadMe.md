# ZeeCoin Cadence Contract

The "ZeeCoin" contract is a smart contract implemented on the Flow blockchain, serving as a fungible token using the `FungibleToken` contract as a base. This contract manages the creation and transfer of fungible tokens and features a collection of vaults for token storage. This README provides an overview of the contract's structure and functionality.

## Description

The "ZeeCoin" contract consists of the following components:

### ZeeCoin Contract

- The `ZeeCoin` contract is the main contract responsible for managing the fungible tokens. It extends the `FungibleToken` contract, inheriting its base functionality.

- `vaults` is an array for storing unique vault identifiers (UInt64).

- `totalSupply` is a variable representing the total supply of tokens in the ZeeCoin contract.

- Various events (`TokensInitialized`, `TokensDeposited`, and `TokensWithdrawn`) are defined to track token operations.

### PublicVaultCollection

- `PublicVaultCollection` is a resource interface that defines the functionality and properties of vaults in the contract. It includes the balance, deposit, and withdrawal functions, along with an admin withdrawal function with contract access.

### Vault

- `Vault` is a resource that represents an individual vault in the contract. It implements the `FungibleToken.Provider`, `FungibleToken.Receiver`, `FungibleToken.Balance`, and `PublicVaultCollection` interfaces. Each vault has a balance (UFix64) that can be deposited, withdrawn, or administratively accessed.

- The `init` function initializes the vault's balance.

- The `deposit` function allows the deposit of tokens from another vault.

- The `withdraw` function allows the owner to withdraw tokens and creates a new vault with the withdrawn amount.

- The `adminWithdraw` function is an administrative function to force a token withdrawal from the vault.

- The `destroy` function permanently destroys the vault and updates the total supply.

### Admin

- `Admin` is a resource for administrative purposes within the contract. It includes the `adminGetCoin` function to withdraw ZeeCoin tokens from a sender's vault.

### Minter

- `Minter` is a resource responsible for minting new tokens within the contract. It includes the `mintToken` function to create new tokens and update the total supply.

### Initialization

- In the contract's `init` function, various contract resources and the total supply are initialized.

- An "Admin" resource and a "Minter" resource are created and saved to storage, and the "Minter" resource is linked to the contract's public capability.

- The `createEmptyVault` function is provided to create an empty vault with a zero balance.

## Access Control

- Access control in this contract is achieved through the use of resource interfaces and types. Public functions define access control to specific operations.

## Getting Started

### Prerequisites

- Access to the Flow blockchain development environment.

### Usage

1. Deploy the "ZeeCoin" contract on the Flow blockchain using the appropriate development tools and environment.

2. Once deployed, you can interact with the contract by calling its functions:

   - Use the "Minter" resource to mint new tokens and increase the total supply.

   - Create empty vaults with the `createEmptyVault` function.

   - Deposit and withdraw tokens to and from vaults using the `deposit` and `withdraw` functions.

   - Use the administrative functions within the "Admin" resource for certain operations.

Please ensure that you have the required Flow blockchain development environment set up to deploy and interact with Cadence contracts.

## Author

Chidozie Ezeanekwe

## License

This project is licensed under the MIT License
