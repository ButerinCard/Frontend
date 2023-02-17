import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import { textChangeRangeIsUnchanged } from 'typescript';
import useWeb3Provider from '../../libs/hooks/web3';
import artifact from '../../public/JPEGminer.json'
import inputs from '../../public/miningInputs.json';
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

  async function mint() {
    try {
      if (!web3Provider || !inputs)
        return;
      const Contract = new ethers.Contract('0xF25E991bC9564903daa08d75EA8B2b848A2F6058', artifact.abi, web3Provider.getSigner());
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
  let boxStyles = 'blur-lg w-full h-full'
  let hoverBoxStyles = 'blur-lg w-full h-full'
  return (
    <div className="flex w-full justify-center ">
      <div className='flex justify-center '>
        <div onClick={MintOrConnect} className={'shadowBox relative lg:mt-12 mt-4 lg:w-52 w-32 select-none flex justify-center bg-primaryYellow cursor-pointer py-1 lg:py-3 font-PS2' +
          ' font-semibold text-lg  lg:text-xl rounded-md'}   >
          <div className='absolute h-full w-full -z-10 top-0 grid grid-rows-6' style={{ width: '105%', height: '120%' }}>
            {colors.map(c => <div key={c} className={`${c} ` + boxStyles}></div>)}
          </div>
          <h1>{address ? "MINE" : "CONNECT"}</h1>
        </div>
      </div>
    </div>
  )
}
