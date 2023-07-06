// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Arrays {
    // Array types - dynamic and fixed
    
// ! All elements must be of same type 

    // initialization
    uint[] public nums = [1,2,3]; // dynamic
    uint[3] public numsFixed = [1,2,3]; // fixed

// insert (push), get, update, delete, pop, length
    function examples() external {
        // push
        nums.push(4); // [1,2,3,4]

        // get index
        uint x = nums[1]; // 2

        // update
        nums[2] = 7; // [1,2,7,4]

        // delete
       delete nums[2]; // [1,2,0,4]
        // delete converts he value to its default type
        // it does not remove the vale

        // pop
        nums.pop(); // [1,2,0]
        // removes the last element

        // length
        uint len = nums.length; // 3
        
        // Creating array in memory
        uint[] memory a = new uint[](5);
        a[1] = 5;
    }

    // retuning array from function
    function returnArray() external view returns (uint[] memory){
        return nums;
    }


}

