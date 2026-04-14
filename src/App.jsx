import { useState } from 'react'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import TokenLaunchpad from './components/TokenLaunchpad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/oBKzvXfwOXwoO-PsqI7X-"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div className='flex flex-row items-center'>
                  <div className='m-4'><WalletMultiButton></WalletMultiButton></div>
                  <div className='m-4'><WalletDisconnectButton></WalletDisconnectButton></div>
                  </div>
                <TokenLaunchpad />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
      
    </>
  )
}

export default App
