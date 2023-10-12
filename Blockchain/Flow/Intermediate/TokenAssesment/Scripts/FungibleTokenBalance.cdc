import FungibleToken from 0x05


pub fun main(user: Address): {UInt64: UFix64} {

    // user's account
    let authAccount = getAuthAccount(user)
    
    // define a Dictionary to store vault unique identifiers
    var vaults: {UInt64: UFix64} = {}

    authAccount.forEachStored(fun(path: StoragePath, type: Type): Bool {
        
        if type.isSubtype(of: Type<@FungibleToken.Vault>()) {
          
            let vaultRef = authAccount.borrow<&FungibleToken.Vault>(from: path)!
            // Store the vault's unique identifiers and their balances in the dictionary
            vaults[vaultRef.uuid] = vaultRef.balance
        }
        return true
    })

    return vaults
}
