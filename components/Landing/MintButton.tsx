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
        <div className="absolute lg:flex hidden z-20 bottom-0 w-full  justify-center">
            <div className='flex justify-center lg:mb-10 2xl:mb-20'>
                <div onClick={MintOrConnect} className='mt-20 flex justify-center bg-primaryYellow drop-shadow-lg cursor-pointer py-3 font-orbitron font-semibold text-2xl rounded-md w-52'   >
                    <h1>{address ? "MINT" : "CONNECT"}</h1>
                </div>
            </div>
        </div>
    )
}
