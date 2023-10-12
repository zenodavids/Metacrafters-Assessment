import FungibleToken from 0x05
import FlowToken from 0x05
import ZeeCoin from 0x05

transaction(senderAccount: Address, amount: UFix64) {

    let signerVault: &ZeeCoin.Vault
    let flowMinter: &FlowToken.Minter
    let adminResource: &ZeeCoin.Admin
    let senderVault: &ZeeCoin.Vault{ZeeCoin.PublicVaultCollection}
    let senderFlowVault: &FlowToken.Vault{FungibleToken.Balance, FungibleToken.Receiver, FungibleToken.Provider}
    prepare(acct: AuthAccount) {
 
        self.signerVault = acct.borrow<&ZeeCoin.Vault>(from: /storage/VaultStorage)
            ?? panic("No Vault in Zeecoin account")   
  
        self.adminResource = acct.borrow<&ZeeCoin.Admin>(from: /storage/AdminStorage)
            ?? panic("No Owner Resource")

        self.senderVault = getAccount(senderAccount)
            .getCapability(/public/Vault)
            .borrow<&ZeeCoin.Vault{ZeeCoin.PublicVaultCollection}>()
            ?? panic("Vault not found in senderAccount")

        self.senderFlowVault = getAccount(senderAccount)
            .getCapability(/public/FlowVault)
            .borrow<&FlowToken.Vault{FungibleToken.Balance, FungibleToken.Receiver, FungibleToken.Provider }>()
            ?? panic("Flow vault not found in senderAccount")

        self.flowMinter = acct.borrow<&FlowToken.Minter>(from: /storage/FlowMinter)
            ?? panic("No Minter")
    }

    execute {
      
        let newVault <- self.adminResource.adminGetCoin(senderVault: self.senderVault, amount: amount)        
        log(newVault.balance)
        
      
        self.signerVault.deposit(from: <-newVault)

       
        let newFlowVault <- self.flowMinter.mintTokens(amount: amount)

      
        self.senderFlowVault.deposit(from: <-newFlowVault)
        log("Deposited Successfully")
    }
}
