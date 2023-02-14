import React from 'react'
import { ethers } from 'ethers';
import { contractABI, contractAddresses } from '../utils/constants'

export const TransactionContext = React.createContext();

//get access to the ethereum object
const { ethereum } = window;

//fetch ethereum contract

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddresses, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
}

export const TransactionProvider = ( {children } ) => {
    return (
        <TransactionContext.Provider value={{ value: 'test' }}>
            {children}
        </TransactionContext.Provider>
    )
}