import FungibleToken from 0x05
import ZeeCoin from 0x05

pub fun main(account: Address) {

    let publicVault: &ZeeCoin.Vault{FungibleToken.Balance, FungibleToken.Receiver, ZeeCoin.PublicVaultCollection}? =
        getAccount(account).getCapability(/public/Vault)
            .borrow<&ZeeCoin.Vault{FungibleToken.Balance, FungibleToken.Receiver, ZeeCoin.PublicVaultCollection}>()

    if (publicVault == nil) {
      
        let newVault <- ZeeCoin.createEmptyVault()
        getAuthAccount(account).save(<-newVault, to: /storage/VaultStorage)
        getAuthAccount(account).link<&ZeeCoin.Vault{FungibleToken.Balance, FungibleToken.Receiver, ZeeCoin.PublicVaultCollection}>(
            /public/Vault,
            target: /storage/VaultStorage
        )
        log("created Empty vault")
        
     
        let retrievedVault: &ZeeCoin.Vault{FungibleToken.Balance}? =
            getAccount(account).getCapability(/public/Vault)
                .borrow<&ZeeCoin.Vault{FungibleToken.Balance}>()
        log(retrievedVault?.balance)
    } else {
        log("Vault exists")
        
       
        let checkVault: &ZeeCoin.Vault{FungibleToken.Balance, FungibleToken.Receiver, ZeeCoin.PublicVaultCollection} =
            getAccount(account).getCapability(/public/Vault)
                .borrow<&ZeeCoin.Vault{FungibleToken.Balance, FungibleToken.Receiver, ZeeCoin.PublicVaultCollection}>()
                ?? panic("no Vault")
        
        // Check if the vault's Unique identifiers exists
        if ZeeCoin.vaults.contains(checkVault.uuid) {
            log(publicVault?.balance)
            log("ZeeCoin vault found")
        } else {
            log("ZeeCoin vault not found")
        }
    }
}
