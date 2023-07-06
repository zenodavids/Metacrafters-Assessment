# Front-End Integration with Solidity

> after deploying the smart contract, get the abi and the contract address and save it in the `next.config.js`.
> If you decide to deploy another contract, then that contract address and ABI should be available in this file.

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    ...

  env: {
    // first contract
    CONTRACT_ADDRESS: '0x3705218BC1Ee772B484a2a429EdeDFE29d9c7788',
    ABI: [...abi],

    // second contract
    Another_CONTRACT_ADDRESS: '0x3705218BC1Ee772B484a2a429EdeDFE29d9c7788',
    Another_ABI: [...abi],
  },
  ...
};

module.exports = nextConfig;
```
