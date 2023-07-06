// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Functions {
    //////////////////////////////////////////////////////
    // Four types of Functions through "Access Modifiers"
    /////////////////////////////////////////////////////
    /* *
     * Public
     - Functions that can be called from anywhere
     
     * Private
     - Functions that can be called only from its contract
    
     * Internal
     - Functions that can be called only from its contract and from its libraries
     
     * External
     - cant be called internally (in it's smart contract.) but externally.
     */

    ///////////////////////////////////////////////
    //Two types of functions through VIEW and PURE
    //////////////////////////////////////////////
    /* *
     * View
     - You can only view data stored on the blockchain, you cant modify it.

     * Pure
     - all these does is return values only by using the parameters or local variables present in it.
     */

    //* function with the "Payable" modifier ensures that the function can send and recieve ethers
}