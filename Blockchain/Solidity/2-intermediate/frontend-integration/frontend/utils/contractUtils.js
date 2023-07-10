export const OWNER_ADDRESS = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199';
export const SMART_CONTRACT_ADDRESS =
  '0xB581C9264f59BF0289fA76D61B2D0746dCE3C30D';
export const SMART_CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'TransferNGN',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'burnNGN',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'centralBank',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inventory',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'kobo',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'mintNGN',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenSymbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'transferNGN',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// import { useState, useEffect } from 'react';
// import { ethers, utils } from 'ethers';
// import {
//   OWNER_ADDRESS,
//   SMART_CONTRACT_ADDRESS,
//   SMART_CONTRACT_ABI,
// } from '../utils/contractUtils';

// const Home = () => {
//   const [error, setError] = useState(null);
//   const [inputValue, setInputValue] = useState({
//     walletAddress: '',
//     transferAmount: '',
//     burnAmount: '',
//     mintAmount: '',
//   });
//   const [tokenName, setTokenName] = useState('');
//   const [tokenSymbol, setTokenSymbol] = useState('');
//   const [tokenInventory, setTokenInventory] = useState(0);
//   const [isCentralBank, setIsCentralBank] = useState(false);
//   const [yourWalletAddress, setYourWalletAddress] = useState(null);
//   const [isWalletConnected, setIsWalletConnected] = useState(false);
//   const [centralBankAddress, setCentralBankAddress] = useState(null);

//   const checkIfWalletIsConnected = async () => {
//     try {
//       if (window.ethereum) {
//         const accounts = await window.ethereum.request({
//           method: 'eth_requestAccounts',
//         });
//         const account = accounts[0];
//         setIsWalletConnected(true);
//         setYourWalletAddress(account);
//         console.log('Account Connected: ', account);
//       } else {
//         setError('Install a MetaMask wallet to get our token.');
//         console.log('No Metamask detected');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getTokenInfo = async () => {
//     try {
//       if (window.ethereum) {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const NigeriaToken = new ethers.Contract(
//           SMART_CONTRACT_ADDRESS,
//           SMART_CONTRACT_ABI,
//           signer
//         );
//         const [account] = await window.ethereum.request({
//           method: 'eth_requestAccounts',
//         });

//         let tokenName = await NigeriaToken.tokenName();
//         let tokenSymbol = await NigeriaToken.tokenSymbol();
//         let centralBank = await NigeriaToken.centralBank();
//         // let balance = await NigeriaToken.getCustomerBalance()

//         let tokenSupply = await NigeriaToken.inventory();
//         console.log('signer', signer);

//         tokenSupply = utils.formatEther(tokenSupply);
//         // balance = utils.formatEther(balance)

//         setTokenName(`${tokenName} 🦊`);
//         setTokenSymbol(tokenSymbol);
//         setTokenInventory(tokenSupply);
//         setCentralBankAddress(centralBank);

//         if (account.toLowerCase() === centralBank.toLowerCase()) {
//           setIsCentralBank(true);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const transferToken = async (event) => {
//     event.preventDefault();
//     try {
//       if (window.ethereum) {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const NigeriaToken = new ethers.Contract(
//           SMART_CONTRACT_ADDRESS,
//           SMART_CONTRACT_ABI,
//           signer
//         );

//         const txn = await NigeriaToken.transfer(
//           inputValue.walletAddress,
//           utils.parseEther(inputValue.transferAmount)
//         );
//         console.log('Transfering tokens...');
//         await txn.wait();
//         console.log('Tokens Transfered', txn.hash);
//       } else {
//         console.log('Ethereum object not found, install Metamask.');
//         setError('Install a MetaMask wallet to get our token.');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const burnTokens = async (event) => {
//     event.preventDefault();
//     try {
//       if (window.ethereum) {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const NigeriaToken = new ethers.Contract(
//           SMART_CONTRACT_ADDRESS,
//           SMART_CONTRACT_ABI,
//           signer
//         );

//         const txn = await NigeriaToken.burn(
//           utils.parseEther(inputValue.burnAmount)
//         );
//         console.log('Burning tokens...');
//         await txn.wait();
//         console.log('Tokens burned...', txn.hash);

//         let tokenSupply = await NigeriaToken.totalSupply();
//         tokenSupply = utils.formatEther(tokenSupply);
//         setTokenInventory(tokenSupply);
//       } else {
//         console.log('Ethereum object not found, install Metamask.');
//         setError('Install a MetaMask wallet to get our token.');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const mintTokens = async (event) => {
//     event.preventDefault();
//     try {
//       if (window.ethereum) {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const NigeriaToken = new ethers.Contract(
//           SMART_CONTRACT_ADDRESS,
//           SMART_CONTRACT_ABI,
//           signer
//         );
//         let centralBank = await NigeriaToken.centralBank();
//         const amount = utils.parseEther(inputValue.mintAmount);
//         const txn = await NigeriaToken.mint(amount);
//         console.log('Amount', amount);
//         console.log('Minting tokens...');
//         await txn.wait();
//         console.log('Tokens minted...', txn.hash);

//         let tokenSupply = await NigeriaToken.totalSupply();
//         tokenSupply = utils.formatEther(tokenSupply);
//         setTokenInventory(tokenSupply);
//       } else {
//         console.log('Ethereum object not found, install Metamask.');
//         setError('Install a MetaMask wallet to get our token.');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     setInputValue((prevFormData) => ({
//       ...prevFormData,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   useEffect(() => {
//     checkIfWalletIsConnected();
//     getTokenInfo();
//   }, []);

//   return (
//     <main className='main-container'>
//       <h2 className='headline'>
//         <span className='headline-gradient'>BazuToken Coin</span>
//         <img
//           className='inline p-3 ml-2'
//           src='https://i.imgur.com/5JfHKHU.png'
//           alt='BazuToken coin'
//           width='60'
//           height='30'
//         />
//       </h2>
//       <section className='customer-section px-10 pt-5 pb-10'>
//         {error && <p className='text-2xl text-red-700'>{error}</p>}
//         <div className='mt-5'>
//           <span className='mr-5'>
//             <strong>Coin:</strong> {tokenName}{' '}
//           </span>
//           <span className='mr-5'>
//             <strong>Ticker:</strong> {tokenSymbol}{' '}
//           </span>
//           <span className='mr-5'>
//             <strong>Total Supply:</strong> {tokenInventory}
//           </span>
//         </div>
//         <div className='mt-7 mb-9'>
//           <form className='form-style'>
//             <input
//               type='text'
//               className='input-double'
//               onChange={handleInputChange}
//               name='walletAddress'
//               placeholder='Wallet Address'
//               value={inputValue.walletAddress}
//             />
//             <input
//               type='text'
//               className='input-double'
//               onChange={handleInputChange}
//               name='transferAmount'
//               placeholder={`0.0000 ${tokenSymbol}`}
//               value={inputValue.transferAmount}
//             />
//             <button className='btn-purple' onClick={transferToken}>
//               Transfer Tokens
//             </button>
//           </form>
//         </div>
//         {isCentralBank && (
//           <section>
//             <div className='mt-10 mb-10'>
//               <form className='form-style'>
//                 <input
//                   type='text'
//                   className='input-style'
//                   onChange={handleInputChange}
//                   name='burnAmount'
//                   placeholder={`0.0000 ${tokenSymbol}`}
//                   value={inputValue.burnAmount}
//                 />
//                 <button className='btn-purple' onClick={burnTokens}>
//                   Burn Tokens
//                 </button>
//               </form>
//             </div>
//             <div className='mt-10 mb-10'>
//               <form className='form-style'>
//                 <input
//                   type='text'
//                   className='input-style'
//                   onChange={handleInputChange}
//                   name='mintAmount'
//                   placeholder={`0.0000 ${tokenSymbol}`}
//                   value={inputValue.mintAmount}
//                 />
//                 <button className='btn-purple' onClick={mintTokens}>
//                   Mint Tokens
//                 </button>
//               </form>
//             </div>
//           </section>
//         )}
//         <div className='mt-5'>
//           <p>
//             <span className='font-bold'>Contract Address: </span>
//             {SMART_CONTRACT_ADDRESS}
//           </p>
//         </div>
//         <div className='mt-5'>
//           <p>
//             <span className='font-bold'>Token Owner Address: </span>
//             {centralBankAddress}
//           </p>
//         </div>
//         <div className='mt-5'>
//           {isWalletConnected && (
//             <p>
//               <span className='font-bold'>Your Wallet Address: </span>
//               {yourWalletAddress}
//             </p>
//           )}
//           <button className='btn-connect' onClick={checkIfWalletIsConnected}>
//             {isWalletConnected ? 'Wallet Connected 🔒' : 'Connect Wallet 🔑'}
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;
