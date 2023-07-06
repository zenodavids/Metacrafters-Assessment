# Address

> variable of the data type `address` can use the global functions defined below;

- ### Balance

  Returns the balance of the address in **_Wei_**.

  > For an address **_mycontract_**, the function call is defined as `mycontract.balance;`. This will return the balance of _mycontract_ in Wei.
  > The return type is uint256.

- ### transfer()

  Sends the given amount of Wei from the current account to the address mentioned.

  > to send x amount of Wei from the current account to an address **_mycontract_**, the function call will be: `mycontract.transfer(uint256 x);`.
  > **_The problem with the transfer function is if an error occurs during the transaction, the transaction fails._**

- ### send()

  Sends the given amount of Wei from the current account to the address mentioned.

  > to send x amount of Wei from the current account to an address mycontract, the function call will be: `mycontract.send(uint256 x);`.
  > The return type is _bool_.
  > **_whenever a transaction encounters an error, the send function returns false. Based on this, appropriate action can be taken. This is what differentiates the send function from the transfer function._**

- ### _call()_, _staticcall()_ and _delegatecall()_

  > **_it is not advised not to use them unless absolutely necessary._**
  > The **_call_** and **_staticcall_** functions work in a similar manner as the **_transfer_** or **_send_** function. However, **_delegatecall_** works differently.
  > If A invokes B who makes a **_delegatecall_** to C, then the msg.sender in the **_delegatecall_** will be A and not B. This way we can preserve the original sender of the message.
