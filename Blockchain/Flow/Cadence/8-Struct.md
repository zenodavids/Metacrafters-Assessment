# Structs (containers for information)

Structs are containers of other types

> Structs can only have the **_pub_** access modifier

```cadence
pub struct Profile {
    pub let firstName: String
    pub let lastName: String
    pub let birthday: String
    pub let account: Address

    // `init()` must be called inside the Struct when created...
    // You have to pass in all 4 arguments when creating this Struct.
    init(_firstName: String, _lastName: String, _birthday: String, _account: Address) {
        self.firstName = _firstName
        self.lastName = _lastName
        self.birthday = _birthday
        self.account = _account
    }
}

```

> make a Struct when we want information to be gathered together in a container. ie; **_Personal Profile_**

## real Life Examples

### The smart Contract

```cadence

pub contract Authentication {

    // a dictionary named 'profiles' that maps an 'Address' Type to a 'Profile' Type
    pub var profiles: {Address: Profile}

    // Struct called Profile that contains 4 fields
    pub struct Profile {
        pub let firstName: String
        pub let lastName: String
        pub let birthday: String
        pub let account: Address

        // You have to pass in all 4 arguments when creating this Struct.
        init(_firstName: String, _lastName: String, _birthday: String, _account: Address) {
            self.firstName = _firstName
            self.lastName = _lastName
            self.birthday = _birthday
            self.account = _account
        }
    }
    //  takes in 4 arguments and...
    pub fun addProfile(firstName: String, lastName: String, birthday: String, account: Address) {

        // ... creates a new Profile with them.
        let newProfile = Profile(_firstName: firstName, _lastName: lastName, _birthday: birthday, _account: account)

        // It then creates a new mapping from account -> the Profile associated with that account
        self.profiles[account] = newProfile
    }

    init() {
        self.profiles = {}
    }

}


```

### Transaction

This is where we interact with the Blockchain

```cadence

import Authentication from 0x05

transaction(firstName: String, lastName: String, birthday: String, account: Address) {

    prepare(signer: AuthAccount) {}

    execute {

        // call the addProfile function with all the arguments
        Authentication.addProfile(firstName: firstName, lastName: lastName, birthday: birthday, account: account)
        log("We're done.")
    }
}


```

### The Script

This helps us read the blockchain, including all the changes being made in the Transaction.

```cadence
import Authentication from 0x05

pub fun main(account: Address): Authentication.Profile {
    return Authentication.profiles[account]!
}

```
