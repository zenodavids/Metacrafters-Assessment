import FungibleToken from 0x05
import ZeeCoin from 0x05

pub fun main(account: Address) {

   
    let publicVault = getAccount(account)
        .getCapability(/public/Vault)
        .borrow<&ZeeCoin.Vault{FungibleToken.Balance}>()
        ?? panic("Vault not found")

    log("Vault exists")
}
