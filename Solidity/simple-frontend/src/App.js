import './App.css';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import SimpleContract from './contracts/SimpleContract.json';

function App() {
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    connectToContract();
  }, []);

  async function connectToContract() {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          'CONTRACT_ADDRESS', // Replace with your contract address
          SimpleContract.abi,
          signer
        );
        getMessage(contract);
        getNumber(contract);
      } else {
        console.log('Please install MetaMask to use this application');
      }
    } catch (error) {
      console.error('Error connecting to contract:', error);
    }
  }

  async function getMessage(contract) {
    try {
      const message = await contract.message();
      setMessage(message);
    } catch (error) {
      console.error('Error getting message:', error);
    }
  }

  async function getNumber(contract) {
    try {
      const number = await contract.number();
      setNumber(number.toNumber());
    } catch (error) {
      console.error('Error getting number:', error);
    }
  }

  return (
    <div className='App'>
      <h1>Simple Contract Frontend</h1>
      <h2>Message: {message}</h2>
      <h2>Number: {number}</h2>
    </div>
  );
}

export default App;
