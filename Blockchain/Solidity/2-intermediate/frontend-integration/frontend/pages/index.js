'use client';
import { useState, useEffect } from 'react';
import { ethers, utils } from 'ethers';
import {
  SMART_CONTRACT_ADDRESS,
  SMART_CONTRACT_ABI,
} from '@/utils/contractUtils';

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [inputValue, setInputValue] = useState({
    walletAddress: '',
    transferNGNtoken: '',
    burnAmount: '',
    mintAmount: '',
  });
  const [error, setError] = useState(null);
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [isTokenOwner, setIsTokenOwner] = useState(false);
  const [tokenOwnerAddress, setTokenOwnerAddress] = useState(null);
  const [yourWalletAddress, setYourWalletAddress] = useState(null);
  const [tokenTotalInventory, setTokenTotalInventory] = useState(0);

  const walletConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const account = accounts[0];
        setIsWalletConnected(true);
        setYourWalletAddress(account);
      } else {
        setError(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const callContract = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          SMART_CONTRACT_ADDRESS,
          SMART_CONTRACT_ABI,
          signer
        );
        const [account] = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        let tokenName = await contract.tokenName();
        let tokenSymbol = await contract.tokenSymbol();
        let tokenOwner = await contract.centralBank();
        let inventory = await contract.inventory();

        inventory = utils.formatEther(inventory);

        setTokenName(tokenName);
        setTokenSymbol(tokenSymbol);
        setTokenTotalInventory(inventory);
        // setTokenBalance(balance);
        setTokenOwnerAddress(tokenOwner);

        if (account.toLowerCase() === tokenOwner.toLowerCase()) {
          setIsTokenOwner(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const mint = async (e) => {
    e.preventDefault();
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          SMART_CONTRACT_ADDRESS,
          SMART_CONTRACT_ABI,
          signer
        );

        const amount = utils.parseEther(inputValue.mintAmount);
        const txn = await contract.mintNGN(amount);
        await txn.wait();
        alert('Tokens minted');
        let inventory = await contract.inventory();
        inventory = utils.formatEther(inventory);
        setTokenTotalInventory(inventory);
      } else {
        setError(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const burn = async (event) => {
    event.preventDefault();
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          SMART_CONTRACT_ADDRESS,
          SMART_CONTRACT_ABI,
          signer
        );

        const txn = await contract.burnNGN(
          utils.parseEther(inputValue.burnAmount)
        );

        await txn.wait();
        alert('Tokens burned');

        let inventory = await contract.inventory();
        inventory = utils.formatEther(inventory);
        setTokenTotalInventory(inventory);
      } else {
        setError(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    walletConnected();
    callContract();
  }, []);

  return (
    <div className='relative bg-[#4C4B16]'>
      <div className='absolute inset-x-0 bottom-0'>
        <svg
          viewBox='0 0 224 12'
          fill='white'
          className='w-full -mb-1 text-white'
          preserveAspectRatio='none'
        >
          <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z' />
        </svg>
      </div>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
          <h2 className='mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
            {tokenName}
            <br className='block' />
            <strong>Total Balance:</strong>{' '}
            <span className='relative inline-block px-2'>
              <div className='absolute inset-0 transform -skew-x-12 bg-teal-accent-400' />
              <span className='relative text-[#B5C99A]'>
               
                {tokenTotalInventory}
              </span>
            </span>
          </h2>
          <h3 className='mb-6 font-sans font-bold tracking-tight text-white sm:text-2xl sm:leading-none'>
            Smart Contract Address:
            <br className='block' />
            <span className='relative inline-block px-2'>
              <div className='absolute inset-0 transform -skew-x-12 bg-teal-accent-400' />
              <span className='relative text-[#B5C99A]'>
                {SMART_CONTRACT_ADDRESS}
              </span>
            </span>
          </h3>
          <div>
            {isWalletConnected ? (
              <h4 className='mb-6 font-sans font-bold tracking-tight text-white sm:text-2xl sm:leading-none'>
                Your Wallet Address:
                <br className='block' />
                <span className='relative inline-block px-2'>
                  <div className='absolute inset-0 transform -skew-x-12 bg-teal-accent-400' />
                  <span className='relative text-[#B5C99A]'>
                    {yourWalletAddress}
                  </span>
                </span>
              </h4>
            ) : (
              <button className='btn-connect' onClick={walletConnected}>
                Connect Wallet
              </button>
            )}
          </div>
          {isTokenOwner && (
            <div>
              {/******************** mint tokens ******************/}
              <form className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'>
                <input
                  onChange={handleInputChange}
                  name='mintAmount'
                  placeholder='mint'
                  value={inputValue.mintAmount}
                  type='text'
                  className='flex-grow w-full h-12 px-4 mb-3 text-[#4C4B16] transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline'
                />
                <button
                  onClick={mint}
                  className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-lg md:w-auto bg-[#4C4B16] hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none'
                >
                  Mint
                </button>
              </form>
              {/******************** burn tokens ******************/}
              <form className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'>
                <input
                  onChange={handleInputChange}
                  name='burnAmount'
                  placeholder={'burn Tokens'}
                  value={inputValue.burnAmount}
                  type='text'
                  className='flex-grow w-full h-12 px-4 mb-3 text-[#4C4B16] transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline'
                />
                <button
                  onClick={burn}
                  className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-lg md:w-auto bg-[#4C4B16] hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none'
                >
                  Burn
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
    // //////////////////////////////////////////////
  );
}
