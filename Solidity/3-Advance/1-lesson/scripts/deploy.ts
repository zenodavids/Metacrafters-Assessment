import { ethers } from 'hardhat';

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  // parse the ether amount using ethers.utils
  // see more on ethers.utils on https://docs.ethers.org/v4/api-utils.html
  const lockedAmount = ethers.utils.parseEther('0.001');

  // ethers.getContractFactory is one of the helpers that Hardhat added to the ethers object so you need to call it first.
  // see more on helpers on  https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-ethers#helpers
  const Lock = await ethers.getContractFactory('Lock');
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
