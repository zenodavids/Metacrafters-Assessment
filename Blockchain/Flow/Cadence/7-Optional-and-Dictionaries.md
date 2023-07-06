# Optional and Dictionaries

## When you access **_elements of a dictionary_**, it returns the value as an optional. How?!

when returning a dictionary in a function, it always return as an **_optional_**.

```cadence
pub fun main(): Int {
    let thing: {String: Int} = {"Hi": 1, "Bonjour": 2, "Hola": 3}
    return thing["Bonjour"] // ERROR: "Mismatched types. expected `Int`, got `Int?`"
}

```

so to properly handle errors, always return a dictionary as an **_optional_**

```cadence
pub fun main(): Int? { // notice the return value is an optional type
    let thing: {String: Int} = {"Hi": 1, "Bonjour": 2, "Hola": 3}
    return thing["Bonjour"] // we leave the optional, this returns the actual value or "nil"
}
```

> when accessing values of a dictionary, you will always get optionals back. So if you want the actual type and not the optional, you must "unwrap" it using the force-unwrap operator !
