# Validators

Validators are at the **heart of the Polygon PoS** chain by taking on the responsibility of _producing_ blocks.

Let’s take a look at the Validator flow for producing blocks:

- Validators deposit Matic tokens (the Polygon token) on the Ethereum mainnet staking contracts.
- Validators are chosen based on vacancy in the validator set.
  > If the set is full, they must wait for validators to unbound
- Once Validators are in the validator set, they can be chosen to become **block** producers. The probability of becoming a block producer is proportional to the amount of Matic staked.

> Validators are based on: `Validator Rewards = Staking Rewards + Transaction Fees`
