'use client';
import React, { useState } from 'react';
import {
  useWalletConnection,
  useTokenInfo,
  useTransferToken,
  useBurnTokens,
  useMintTokens,
} from '../utils/hooks';

import { SMART_CONTRACT_ADDRESS } from '../utils/contractUtils';

const Home = () => {
  const { isWalletConnected, userAddress, checkIfWalletIsConnected } =
    useWalletConnection();
  const {
    tokenName,
    tokenSymbol,
    tokenInventory,
    isCentralBank,
    centralBankAddress,
    setTokenInventory,
  } = useTokenInfo();
  const transferToken = useTransferToken();
  const burnTokens = useBurnTokens();
  const mintTokens = useMintTokens();
  const [inputValue, setInputValue] = React.useState({
    walletAddress: '',
    transferAmount: '',
    burnAmount: '',
    mintAmount: '',
  });
  const [error, setError] = React.useState(null);

  const handleInputChange = (event) => {
    setInputValue((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTransferToken = (event) => {
    event.preventDefault();
    transferToken(inputValue);
  };

  const handleBurnTokens = (event) => {
    event.preventDefault();
    burnTokens(inputValue);
  };

  const handleMintTokens = (event) => {
    event.preventDefault();
    mintTokens(inputValue);
  };

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
          {error && <p className='text-2xl text-red-700'>{error}</p>}
          <h2 className='mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
            {tokenName}
            <br className='block' />
            <strong>Total Balance:</strong>{' '}
            <span className='relative inline-block px-2'>
              <div className='absolute inset-0 transform -skew-x-12 bg-teal-accent-400' />
              <span className='relative text-[#B5C99A]'>{tokenInventory} </span>
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
          <h4 className='mb-6 font-sans font-bold tracking-tight text-white sm:text-2xl sm:leading-none'>
            Your Wallet Address:
            <br className='block' />
            <span className='relative inline-block px-2'>
              <div className='absolute inset-0 transform -skew-x-12 bg-teal-accent-400' />
              <span className='relative text-[#B5C99A]'>{userAddress}</span>
            </span>
          </h4>
          {/*************************** send tokens ***************************/}
          <form className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'>
            <input
              onChange={handleInputChange}
              name='walletAddress'
              placeholder='Receiver Address'
              value={inputValue.walletAddress}
              type='text'
              className='flex-grow w-full h-12 px-4 mb-3 text-[#4C4B16] transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline'
            />
            <input
              onChange={handleInputChange}
              name='transferAmount'
              placeholder={`0.0000 ${tokenSymbol}`}
              value={inputValue.transferAmount}
              type='text'
              className='flex-grow w-full h-12 px-4 mb-3 text-[#4C4B16] transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline'
            />
            <button
              onClick={handleTransferToken}
              className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-lg md:w-auto bg-[#4C4B16] hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none'
            >
              Send
            </button>
          </form>
          {/******************************************************/}
          {/******************** burn tokens ******************/}
          {isCentralBank && (
            <div>
              <form className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'>
                <input
                  onChange={handleInputChange}
                  name='burnAmount'
                  placeholder={`0.0000 ${tokenSymbol}`}
                  value={inputValue.burnAmount}
                  type='text'
                  className='flex-grow w-full h-12 px-4 mb-3 text-[#4C4B16] transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline'
                />
                <button
                  onClick={handleBurnTokens}
                  className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-lg md:w-auto bg-[#4C4B16] hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none'
                >
                  Burn
                </button>
              </form>
              <form className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'>
                <input
                  onChange={handleInputChange}
                  name='mintAmount'
                  placeholder={`0.0000 ${tokenSymbol}`}
                  value={inputValue.mintAmount}
                  type='text'
                  className='flex-grow w-full h-12 px-4 mb-3 text-[#4C4B16] transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline'
                />
                <button
                  onClick={handleMintTokens}
                  className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-lg md:w-auto bg-[#4C4B16] hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none'
                >
                  Mint
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
