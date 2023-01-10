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
        <div className="flex w-full justify-center">
            <div className='flex justify-center '>
                <div onClick={MintOrConnect} className='lg:mt-12 mt-4 lg:w-52 w-32 select-none flex justify-center bg-primaryYellow drop-shadow-lg cursor-pointer py-1 lg:py-3 font-orbitron font-semibold text-lg lg:text-2xl rounded-md '   >
                    <h1>{address ? "MINT" : "CONNECT"}</h1>
                </div>
            </div>
        </div>
    )
}
