import FungibleToken from 0x05
import FlowToken from 0x05


pub fun getFlowVaultBalance(account: Address): UFix64? {

    // Borrow the public FlowToken vault from  account
    let publicFlowVault: &FlowToken.Vault{FungibleToken.Balance}?
        = getAccount(account)
            .getCapability(/public/FlowVault)
            .borrow<&FlowToken.Vault{FungibleToken.Balance}>()
            
   
    if let balance = publicFlowVault?.balance {
        return balance
    } else {
      
        return panic("No vault found")
    }
}

pub fun main(_account: Address): UFix64? {

    return getFlowVaultBalance(account: _account)
}
