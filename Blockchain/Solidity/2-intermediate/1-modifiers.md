# Modifiers

    - It always ends with  '_;' before the closing parenthesis
    - '_;' is replaced with the actual function body when the modifier is used
    - use a modifier to automatically check a condition prior to executing the function

## Modifier Example

    ```js
    pragma solidity >=0.7.0 <0.9.0; //solidity version

contract greatestnum{

    uint a;
    uint b;
    uint c;
    uint d;
    address owner;

    constructor(){
        owner = msg.sender;
    }

    // we can have modifiers that don’t pass any parameters or arguments.
    // defined modifier once and used twice in the two functions below
    modifier onlyOwner {
        require (owner == msg.sender, "only owner can access");
        _;
    }

    // syntax: function [functionName] set() [access level] public [modifier name] onlyOwner
    function set (uint _a, uint _b, uint _c, uint _d) public onlyOwner{
        a = _a;
        b = _b;
        c = _c;
        d = _d;
    }

// syntax: function [functionName] get() [access level] public [functionType] view [modifier name] onlyOwner
function get() public view onlyOwner returns(uint){
if ((a > b) && (a > c) && (a > d)){
return(a);
}
else if ((b >c ) && (b > d) && (b > a)){
return(b);
}
else if ((c > d) && (c > a) && (c > b)){
return(c);
}
else {
return(d);
}
}

}

    ```
