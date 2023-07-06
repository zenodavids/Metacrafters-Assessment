import AssetDeclaration from 0x02

pub fun main(walletAddress: Address): AssetDeclaration.Politician {
    return AssetDeclaration.politicians[walletAddress]!
}
