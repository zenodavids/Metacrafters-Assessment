// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;


contract MyToken {

    // public variables here
    string public tokenName = "Zeno";
    string public tokenAbbrev = "ZEN";
    uint public totalSupply = 0;

    // mapping variable here
    mapping (address => uint) public balances;

    // mint function
    function mint(address _to, uint _value) public {
        // in real  usecases, you MUST use the required function here
        balances[_to] += _value;
        totalSupply += _value;
    }


    // burn function
    function burn(address _from, uint _value) public {
        if (balances[_from] >= _value) {
            totalSupply -= _value;
            balances[_from] -= _value;
        }

    }
}
