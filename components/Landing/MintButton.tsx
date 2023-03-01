import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import useWeb3Provider from '../../libs/hooks/web3';
import artifact from '../../public/JPEGminer.json'
import inputs from '../../public/miningInputs.json';
import Image from 'next/image';
import rainbow from '../../public/rainbow.webp';
interface miningChunk {
  dataChunk: string,
  phaseId: number
  tokenIdInPhase: number
  lastTokenIdInScan: number
  proof: string[]
}
type inputsData = { miningInputs: miningChunk[] }
export default function MintButton() {
  const { connect, address, disconnect, web3Provider } = useWeb3Provider();
  const [hover, setHover] = useState(false)
  const [colors, setColors] = useState(['bg-red-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400'])
  useEffect(() => {
    setTimeout(() => {
      const arrCopy = [...colors];
      const lastItem = arrCopy[arrCopy.length - 1]
      arrCopy.pop();
      arrCopy.unshift(lastItem)
      setColors(arrCopy);
    }, 300)
  }, [colors])
  const properChainId = 5
  async function mint() {
    try {
      if (!web3Provider || !inputs)
        return;
      if (web3Provider.network.chainId !== properChainId) {
          (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{
              chainId: '0x5',
              // nativeCurrency: {
              //   name: "Hardhat",
              //   symbol: "GO",
              //   decimals: 18
              // }
            }]
          });
          return;
        }
      const Contract = new ethers.Contract('0x9361AA1c97e0c66B9E1e17c7F3cC19Bd75771359', artifact.abi, web3Provider.getSigner());
      const chunks = (inputs as inputsData).miningInputs as miningChunk[]
      const rawTotalSupply = await Contract.totalSupply();
      const totalSupply = rawTotalSupply.toString();
      const i = parseInt(totalSupply);
      const tx = await Contract.mine(chunks[i].dataChunk,
        chunks[i].phaseId,
        chunks[i].tokenIdInPhase,
        chunks[i].lastTokenIdInScan,
        chunks[i].proof);
      await tx.wait();
    } catch (e) {
      console.log(e);
    }
  }

  function MintOrConnect() {
    if (!address) {
      connect();
    } else {
      mint();
    }
  }
  let boxStyles = 'blur-lg w-full h-4'
  let hoverBoxStyles = 'blur-lg w-full h-full'
  return (
    <div className="flex w-full justify-center ">
      <div className='flex justify-center '>
        <div onClick={MintOrConnect} className={'shadowBox relative lg:mt-8 h-16 lg:w-52 w-32 select-none flex justify-center items-center bg-white cursor-pointer py-1 lg:py-3 font-PS2' +
          ' font-semibold text-lg  lg:text-xl rounded-md'}   >

          <div className='absolute h-full w-full flex -z-10 top-0  grid-rows-6 ' style={{filter:'blur(8px)'}} >
           <Rainbow/>
          </div>
          
          <h1 className='font-medium' style={{ fontSize: '24px' }}>{address ? "Mine" : "Connect"}</h1>
        </div>
      </div>
    </div>
  )
}

const Rainbow = React.memo(function Rainbow() {
  return <Image src={rainbow} alt={''}></Image>
})
