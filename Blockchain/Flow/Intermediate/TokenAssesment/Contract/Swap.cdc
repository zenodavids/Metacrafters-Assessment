// Import the FungibleToken, FlowToken, and ZeeCoin contracts from address 0x05
import FungibleToken from 0x05
import FlowToken from 0x05
import ZeeCoin from 0x05


// Allows users to swap tokens between ZeeCoin and FlowToken
pub contract Swap {

    // Store the most recent timestamp for swaps within the contract
    pub var recentTimestampForSwap: UFix64
    // Store the last swap timestamp per user
    pub var userrecentTimestampForSwaps: {Address: UFix64}

     // Function to exchange tokens between ZeeCoin and FlowToken
    pub fun swapTokens(signer: AuthAccount, swapAmount: UFix64) {

        let ZeeCoinVault = signer.borrow<&ZeeCoin.Vault>(from: /storage/VaultStorage)
            ?? panic("unable to borrow ZeeCoin Vault")

        let flowVault = signer.borrow<&FlowToken.Vault>(from: /storage/FlowVault)
            ?? panic("unable to borrow Flow Token Vault")  

        let minterRef = signer.getCapability<&ZeeCoin.Minter>(/public/Minter).borrow()
            ?? panic("unable to borrow reference to ZeeCoin Minter")

        let autherVault = signer.getCapability<&FlowToken.Vault{FungibleToken.Balance, FungibleToken.Receiver, FungibleToken.Provider}>(/public/FlowVault).borrow()
            ?? panic("unable to borrow reference to Flow Token Vault")  

        let withdrawnAmount <- flowVault.withdraw(amount: swapAmount)
        autherVault.deposit(from: <-withdrawnAmount)

        let userAddress = signer.address
        self.recentTimestampForSwap = self.userrecentTimestampForSwaps[userAddress] ?? 1.0
        let currentTime = getCurrentBlock().timestamp

        // Calculate the time elapsed since the last swap and the minted token amount.
        let timeSinceLastSwap = currentTime - self.recentTimestampForSwap
        let mintedAmount = 2.0 * UFix64(timeSinceLastSwap)

        // Mint new ZeeCoins
        let newZeeCoinVault <- minterRef.mintToken(amount: mintedAmount)
        ZeeCoinVault.deposit(from: <-newZeeCoinVault)
        self.userrecentTimestampForSwaps[userAddress] = timeSinceLastSwap
    }

    // Initialize the contract with default values for the last swap timestamp.
    init() {
        // Set default values for last swap timestamp
        self.recentTimestampForSwap = 1.0
        self.userrecentTimestampForSwaps = {0x01: 1.0}
    }
}
