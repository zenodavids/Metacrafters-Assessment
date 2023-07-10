# Architecture

The Polygon PoS architecture is broken down into 3 components:

- Staking contracts on Ethereum.
-
- **_Heimdall Node_** - Proof of Stake layer.
  This node is responsible for _aggregating_ or _rolling up blocks produced by the Bor node into a Merkle tree and publishing the Merkle root onto the Ethereum blockchain_ in periodic intervals called **_checkpoints_**

  > **_Checkpointing_** provides finality on the Ethereum network which is used in the withdrawal of assets from Polygon to Ethereum through Proof of Burn proofs.

- **_Bor Node_** - Execution layer.
  This node, also **_a Geth fork_**, is the execution layer of Polygon. It’s **_responsible for processing transactions into blocks and passing those blocks to Heimdall for validation_**.
  > **_Heimdall Node_** _validates_, while **_Bor Node_** _executes_

> Validators **_stake_** on the **_Ethereum contracts_** and **_run_** the **_Heimdall_** & **_Bor_** nodes.
> The validators are rewarded for their contribution to network security by receiving a portion of block rewards from mining
