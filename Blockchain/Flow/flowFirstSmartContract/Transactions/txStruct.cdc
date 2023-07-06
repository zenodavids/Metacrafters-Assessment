import AssetDeclaration from 0x02

transaction(office: String, firstName: String, lastName: String, netWorth: UFix64, numOfLands: Int, numOfHouses: Int, stocksValue: Int, walletAddress: Address) {
    
    // ensures the signer is authorized
    prepare(signer: AuthAccount) {}

    execute {

        // call the addPolitician function with all the arguments
        AssetDeclaration.addPolitician(office: office,firstName: firstName, lastName: lastName, netWorth: netWorth, numOfLands: numOfLands,numOfHouses: numOfHouses,stocksValue: stocksValue, walletAddress: walletAddress)
        log("Another politician declared Assets!!!.")
    }
}