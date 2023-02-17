import React, { useEffect, useState } from 'react'
import LeaderBoardEntry from './LeaderBoardEntry'
import { TopMinersDocument, TopMinersQuery, execute } from '../../.graphclient'
interface Miner {
  id: string,
  kiloBytes: string
}

export default function Miners() {
  const [miners, setMiners] = useState<Miner[]>([]);
  useEffect(() => {
    execute(TopMinersDocument, {}).then((r) => {
      setMiners(r.data.miners);
    })
  }, []);
  return (
    <div className='lg:flex justify-center hidden '>
      <div>
        <div className='flex justify-around'>
          <h1 className='text-center font-PS2 font-semibold mb-3 select-none cursor-pointer'>Top miners</h1>
          <h1 className='text-center font-PS2 font-semibold mb-3 select-none opacity-60 cursor-pointer'>Your hand</h1>

        </div>

        <div className=' py-1 px-4 rounded-md md:w-80 md:h-80   xl:w-120 xl:h-116 bg-black bg-opacity-5 shadow-lg' >
          {miners.map((m, i) => {
            return <LeaderBoardEntry key={i + m.id} place={(i + 1).toString()} kilobytes={m.kiloBytes} address={m.id} />
          })}
        </div>
      </div>
    </div>)
}
