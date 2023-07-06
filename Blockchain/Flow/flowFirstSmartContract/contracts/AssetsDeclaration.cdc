pub contract AssetDeclaration {

    // a dictionary that maps an 'Address' Type to a 'Politician' Type
    pub var politicians: {Address: Politician}

    // Struct called Politician that contains 8 fields
    pub struct Politician {
        pub let office: String
        pub let firstName: String
        pub let lastName: String
        pub let netWorth: UFix64
        pub let numOfLands: Int
        pub let numOfHouses: Int
        pub let stocksValue: Int
        pub let walletAddress: Address

        // pass in 8 arguments when creating this Struct.
        init(_office: String, _firstName: String, _lastName: String, _netWorth: UFix64, _numOfLands: Int, _numOfHouses: Int, _stocksValue: Int, _walletAddress: Address) {
            self.office = _office
            self.firstName = _firstName
            self.lastName = _lastName
            self.netWorth = _netWorth
            self.numOfLands = _numOfLands
            self.numOfHouses = _numOfHouses
            self.stocksValue = _stocksValue
            self.walletAddress = _walletAddress
        }
    }
    //  takes in 8 arguments and... 
    pub fun addPolitician(office: String, firstName: String, lastName: String, netWorth: UFix64, numOfLands: Int, numOfHouses: Int, stocksValue: Int, walletAddress: Address) {

        // ... creates a new Politician.
        let newPolitician = Politician(_office: office,_firstName: firstName, _lastName: lastName, _netWorth: netWorth, _numOfLands: numOfLands,_numOfHouses: numOfHouses,_stocksValue: stocksValue, _walletAddress: walletAddress)
        
        // creates a new mapping from account
        self.politicians[walletAddress] = newPolitician
    }

    init() {
        self.politicians = {}
    }

}
