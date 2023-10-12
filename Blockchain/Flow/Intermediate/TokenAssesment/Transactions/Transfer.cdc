import FungibleToken from 0x05
import ZeeCoin from 0x05

transaction(receiverAccount: Address, amount: UFix64) {

    // Define references
    let signerVault: &ZeeCoin.Vault
    let receiverVault: &ZeeCoin.Vault{FungibleToken.Receiver}

    prepare(acct: AuthAccount) {
        // Borrow references and handle errors
        self.signerVault = acct.borrow<&ZeeCoin.Vault>(from: /storage/VaultStorage)
            ?? panic("No Vault in ZeeCoin's account")

        self.receiverVault = getAccount(receiverAccount)
            .getCapability(/public/Vault)
            .borrow<&ZeeCoin.Vault{FungibleToken.Receiver}>()
            ?? panic("Reciever has no vault")
    }

    execute {
        // Withdraw tokens from signer's vault and deposit into receiver's vault
        self.receiverVault.deposit(from: <-self.signerVault.withdraw(amount: amount))
        log("Coins has benn transferred successfully")
    }
}
