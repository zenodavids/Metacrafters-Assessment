# Arrays

```cadence
// =========================================================> Array

// String Array
var people: [String] = ["Jacob", "Alice", "Damian"]

// AnyStruct Array
// Allow arrays to hold any type
var people: [AnyStruct] = ["Jacob", 0x2, 3]

// Address Array
var addresses: [Address] = [0x1, 0x2, 0x3]
log(addresses[0]) // 0x1
log(addresses[1]) // 0x2
log(addresses[2]) // 0x3

// +++++> Array Functions

// Append (Adds an element to the end of the array.)
// syntax: ArrayName.append(value)
var people: [String] = ["Jacob", "Alice", "Damian"]
people.append("Ochako Unaraka")
log(people) // ["Jacob", "Alice", "Damian", "Ochako Unaraka"]


// remove(Removes an element at the given index)
// syntax: ArrayName.remove(at: index)
var employees: [String] = ["Jacob", "Alice", "Damian"]
employees.remove(at: 1)
log(employees) // ["Jacob", "Damian"]

// length
// Returns the length of the array.
var people: [String] = ["Jacob", "Alice", "Damian"]
log(people.length) // 3


```

---

---

## Using a contract as an example;

### Contract

```cadence
pub contract ADS{

    pub var allNames: [String]

    pub fun addNames(name: String){
        // add names to the array
        self.allNames.append(name)
    }

    init(){
        // initialize the array to an empty one
        self.allNames = []
    }
}

```

### Transaction File

```cadence
import ADS from 0x04

transaction(name : String) {

  prepare(signer: AuthAccount) {}

    // this is where the change is executed
  execute {

    ADS.addName(name: name)
    log(ADS.Number())
  }
}
```
