import React from 'react'
import useWeb3Provider from '../../libs/hooks/web3';

export default function MintButton() {
    const { connect, address, disconnect } = useWeb3Provider();
  function MintOrConnect() {
    if (!address) {
      connect();
    } else {
        disconnect(); 
    }
  }
    return (
        <div className="lg:flex hidden w-full justify-center">
            <div className='flex justify-center '>
                <div onClick={MintOrConnect} className='mt-12 select-none flex justify-center bg-primaryYellow drop-shadow-lg cursor-pointer py-3 font-orbitron font-semibold text-2xl rounded-md w-52'   >
                    <h1>{address ? "MINT" : "CONNECT"}</h1>
                </div>
            </div>
        </div>
    )
}
