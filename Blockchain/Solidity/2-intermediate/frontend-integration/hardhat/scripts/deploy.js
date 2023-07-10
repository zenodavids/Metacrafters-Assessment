const hre = require('hardhat'); // Import the hardhat library

async function main() {
  const [deployer] = await ethers.getSigners(); // Get the deployer's address
  console.log('Deployed account address:', deployer.address); // Print the deployer's address

  const NigeriaToken = await hre.ethers.deployContract('NigeriaToken'); // Deploy the NigeriaToken contract
  await NigeriaToken.waitForDeployment(); // Wait for the deployment to complete

  console.log('NigeriaToken Contract Address:', await NigeriaToken.target); // Print the contract address
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Deploying contract with the account address: 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
// NigeriaToken Contract Address: 0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f
