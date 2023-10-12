import FungibleToken from 0x05
import ZeeCoin from 0x05

transaction(receiver: Address, amount: UFix64) {

    prepare(signer: AuthAccount) {
        // Borrow the ZeeCoin Minter reference
        let minter = signer.borrow<&ZeeCoin.Minter>(from: /storage/MinterStorage)
            ?? panic("Only ZeeCoin Owner has acess")
        
        // Borrow the receiver's ZeeCoin Vault capability
        let receiverVault = getAccount(receiver)
            .getCapability<&ZeeCoin.Vault{FungibleToken.Receiver}>(/public/Vault)
            .borrow()
            ?? panic("Check your Vault status")
        
        // Minted tokens reference
        let mintedTokens <- minter.mintToken(amount: amount)

        // Deposit minted tokens into the receiver's ZeeCoin Vault
        receiverVault.deposit(from: <-mintedTokens)
    }

    execute {
        log("Coins minted and deposited successfully")
        log(amount.toString().concat(" Coins sucessfully minted"))
    }
}
