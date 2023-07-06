// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');

async function main() {
  // Get the contract factory for the "Bank" contract
  const EventTest = await hre.ethers.getContractFactory('Bank');

  // Deploy an instance of the contract
  const eventTest = await EventTest.deploy();

  // Wait for the contract to be deployed and confirmed
  await eventTest.deployed();

  // Set up event listeners for the "Deposit" event
  eventTest.on('Deposit', (owner, amount) => {
    console.log(`New deposit: ${owner} ${amount} WEI`);
  });

  // Set up event listeners for the "Withdraw" event
  eventTest.on('Withdraw', (owner, amount) => {
    console.log(`New withdraw: ${owner} ${amount} WEI`);
  });

  // Set up event listeners for the "Transfer" event
  eventTest.on('Transfer', (from, to, amount) => {
    console.log(`New transfer: ${from} ${to} ${amount} WEI`);
  });

  // Output the address of the deployed contract
  console.log(`Contract deployed to ${eventTest.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
