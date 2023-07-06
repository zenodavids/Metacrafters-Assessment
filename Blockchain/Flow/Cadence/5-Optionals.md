# Optionals

> Used Most times because of dictionaries.

```cadence
// Optional types -> "?" -> this value is "nil" or the value we put in there
// var d: int? = nil
// cant call or reuse this, wont work because "nil" is a zero value.

var name: String? = nil


```

# Force-unwrap Operator

> This operator "unwraps" an optional type by saying: "If this thing is nil, PANIC! If it's not nil, we're fine, but get rid of the optional type."

```cadence

// force-unwrap Operator -> ! -> gets the non-zero value we put in optional

// forces to get the value(anything other than "nil")...
// ...using from the optional type above.

var name1: String? = "Jacob"
var unwrappedName1: String = name1! // Notice it removes the optional type

var name2: String? = nil
var unwrappedName2: String = name2! // PANICS! The entire program will abort because it found a problem. It tried to unwrap a nil, which isn't allowed
```
