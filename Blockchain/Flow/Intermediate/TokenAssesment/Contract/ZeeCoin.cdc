// Import the FungibleToken contract from address 0x05
import FungibleToken from 0x05

// ZeeCoin smart contract implementing a fungible token on the Flow blockchain
pub contract ZeeCoin: FungibleToken {

    // An array for storing unique vault identifiers.
    pub var vaults: [UInt64]

    // The total supply of tokens in the ZeeCoin contract.
    pub var totalSupply: UFix64

   // Define various events to track token operations.
    pub event TokensInitialized(initialSupply: UFix64)
    pub event TokensDeposited(amount: UFix64, to: Address?)
    pub event TokensWithdrawn(amount: UFix64, from: Address?)

    // Public resource interface for the vault collection.
    pub resource interface PublicVaultCollection {
        pub var balance: UFix64
        pub fun deposit(from: @FungibleToken.Vault)
        pub fun withdraw(amount: UFix64): @FungibleToken.Vault
        access(contract) fun adminWithdraw(amount: UFix64): @FungibleToken.Vault
    }

     // Resource representing an individual vault in the contract.
    pub resource Vault: FungibleToken.Provider, FungibleToken.Receiver, FungibleToken.Balance, PublicVaultCollection {
        pub var balance: UFix64

         // Initialize the balance of the vault.
        init(balance: UFix64) {
            self.balance = balance
        }


        // public function to Deposit tokens into the vault
        pub fun deposit(from: @FungibleToken.Vault) {
            let vault <- from as! @ZeeCoin.Vault
            emit TokensDeposited(amount: vault.balance, to: self.owner?.address)
            self.balance = self.balance + vault.balance
            vault.balance = 0.0
            destroy vault
        }


         // public function to Perform a token withdrawal from the vault.
        pub fun withdraw(amount: UFix64): @FungibleToken.Vault {
            self.balance = self.balance - amount            
            emit TokensWithdrawn(amount: amount, from: self.owner?.address)
            return <-create Vault(balance: amount)
        }

          // Administrative access to Force token withdrawal.
        access(contract) fun adminWithdraw(amount: UFix64): @FungibleToken.Vault {
            self.balance = self.balance - amount
            return <-create Vault(balance: amount)
        }

        // Permanently destroy the vault and update the total supply.
        destroy() {
            ZeeCoin.totalSupply = ZeeCoin.totalSupply - self.balance
        }
    }

      // Resource for administrative purposes within the contract.
    pub resource Admin {
        // Withdraw ZeeCoin tokens from the sender's vault
        pub fun adminGetCoin(senderVault: &Vault{PublicVaultCollection}, amount: UFix64): @FungibleToken.Vault {
            return <-senderVault.adminWithdraw(amount: amount)
        }
    }

    // Resource for minting new tokens within the contract.
    pub resource Minter {
        // Mint new tokens and update the total supply.
        pub fun mintToken(amount: UFix64): @FungibleToken.Vault {
            ZeeCoin.totalSupply = ZeeCoin.totalSupply + amount
            
            return <-create Vault(balance: amount)
        }
    }

    init() {
        // Initialize various contract resources and the total supply.
        self.vaults = []
        self.totalSupply = 0.0
        emit TokensInitialized(initialSupply: self.totalSupply)
        self.account.save(<-create Admin(), to: /storage/AdminStorage)
        self.account.save(<-create Minter(), to: /storage/MinterStorage)
        self.account.link<&ZeeCoin.Minter>(/public/Minter, target: /storage/MinterStorage)
    }

    // Create an empty vault with zero balance.
    pub fun createEmptyVault(): @FungibleToken.Vault {
        let instance <- create Vault(balance: 0.0)
        self.vaults.append(instance.uuid)
        return <-instance
    }
}
