// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Storage {
    uint storedNumber;

    // write a value on to the blockchain through the front end
    function writeNum(uint _num) public {
        storedNumber = _num;
    }

    // to read a value from the blockchain and display on the front end.
    function readNum() public view returns(uint){
        return storedNumber;
    }

}
