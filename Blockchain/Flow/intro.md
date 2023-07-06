# Flow Blockchain

- Layer 1 Blockchain

  - highly scalable without the need of sharding.
  - utilizes a multi-role architecture that makes it unique from other blockchains.
  - allows it to scale **_vertically_**.

- built by**Dapper Labs**, Creators and company behind;
  - CryptoKitties,
  - the ERC-721 standard for NFTs, and
  - NBA Topshot.

## Pipelining

is a common strategy to let your CPU perform faster.
Instead of processing each task one by one, pipelining separates concerns and increases parallelism that results in an increase in speed.

## Multi-Role Architecture

Flow splits up the role of a **_miner_** or **_validator_** node into four different roles:

- Collection Nodes
  enhance network connectivity, and make data available for dApps.

- Consensus Nodes
  used to decide the presence of and order of transactions, and blocks, on the blockchain.

- Execution Nodes
  used to perform the computation associated with each transaction. For example, executing a smart contract function.

- Verification Nodes
  used to keep the execution nodes in check, and make sure no fraudulent transactions.

## Cadence is Flow's Programming Language

## Upgradeable Smart Contract

unlike the **_EVM_**, where contracts can't be upgraded after deployment;
can deploy smart contracts to the mainnet in a "beta state".
While in this state, code can be incrementally updated by the original authors.

> Users are warned about the contract being in the beta state when interacting with it, and can choose to wait until the code is finalized.

Once the authors are confident that their code is safe, they can release control of the contract and it forever becomes non-upgradeable after that.
