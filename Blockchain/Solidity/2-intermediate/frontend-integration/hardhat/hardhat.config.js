require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
const { PRIVATE_KEY, QUICKNODE_HTTP_URL } = process.env;

module.exports = {
  solidity: '0.8.18',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337,
      accounts: [PRIVATE_KEY],
    },
  },
  mumbai: {
    url: QUICKNODE_HTTP_URL,
    accounts: [PRIVATE_KEY],
  },
};
