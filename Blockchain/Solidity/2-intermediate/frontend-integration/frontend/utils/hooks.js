'use client';
import { ethers, utils } from 'ethers';
import { useState, useEffect } from 'react';
import { SMART_CONTRACT_ADDRESS, SMART_CONTRACT_ABI } from './contractUtils';

export function useWalletConnection() {
  const [userAddress, setUserAddress] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    checkIfWalletIsConnected();

    async function checkIfWalletIsConnected() {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
          const account = accounts[0];
          setIsWalletConnected(true);
          setUserAddress(account);
          console.log('Account Connected:', account);
        } else {
          console.log('No Metamask detected');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return { isWalletConnected, userAddress };
}

export function useTokenInfo() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [tokenInventory, setTokenInventory] = useState(0);
  const [isCentralBank, setIsCentralBank] = useState(false);
  const [centralBankAddress, setCentralBankAddress] = useState(null);

  useEffect(() => {
    getTokenInfo();

    async function getTokenInfo() {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const NigeriaToken = new ethers.Contract(
            SMART_CONTRACT_ADDRESS,
            SMART_CONTRACT_ABI,
            signer
          );
          const [account] = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });

          let tokenName = await NigeriaToken.tokenName();
          let tokenSymbol = await NigeriaToken.tokenSymbol();
          let centralBank = await NigeriaToken.centralBank();

          let NG_Noken_inventory = await NigeriaToken.inventory();
          console.log('signer', signer);

          NG_Noken_inventory = utils.formatEther(NG_Noken_inventory);

          setTokenName(`${tokenName} `);
          setTokenSymbol(tokenSymbol);
          setTokenInventory(NG_Noken_inventory);
          setCentralBankAddress(centralBank);

          if (account.toLowerCase() === centralBank.toLowerCase()) {
            setIsCentralBank(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return {
    tokenName,
    tokenSymbol,
    tokenInventory,
    isCentralBank,
    centralBankAddress,
    setTokenInventory,
  };
}

export function useTransferToken() {
  const transferToken = async (inputValue) => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const NigeriaToken = new ethers.Contract(
          SMART_CONTRACT_ADDRESS,
          SMART_CONTRACT_ABI,
          signer
        );

        const txn = await NigeriaToken.transferNGN(
          inputValue.walletAddress,
          utils.parseEther(inputValue.transferAmount)
        );

        await txn.wait();
      } else {
        console.log('install Metamask.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return transferToken;
}

export function useBurnTokens() {
  const burnTokens = async (inputValue) => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const NigeriaToken = new ethers.Contract(
          SMART_CONTRACT_ADDRESS,
          SMART_CONTRACT_ABI,
          signer
        );

        const txn = await NigeriaToken.burnNGN(
          utils.parseEther(inputValue.burnAmount)
        );

        await txn.wait();

        let NG_Noken_inventory = await NigeriaToken.inventory();
        NG_Noken_inventory = utils.formatEther(NG_Noken_inventory);
        setTokenInventory(NG_Noken_inventory);
      } else {
        setError('Install a MetaMask wallet');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return burnTokens;
}

export function useMintTokens() {
  const mintTokens = async (inputValue) => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const NigeriaToken = new ethers.Contract(
          SMART_CONTRACT_ADDRESS,
          SMART_CONTRACT_ABI,
          signer
        );
        let centralBank = await NigeriaToken.centralBank();
        const amount = utils.parseEther(inputValue.mintAmount);
        const txn = await NigeriaToken.mintNGN(amount);

        await txn.wait();

        let NG_Noken_inventory = await NigeriaToken.inventory();
        NG_Noken_inventory = utils.formatEther(NG_Noken_inventory);
        setTokenInventory(NG_Noken_inventory);
      } else {
        console.error('Ethereum object not found, install Metamask.', error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return mintTokens;
}
