import React, { useEffect, useState } from 'react'
import LeaderBoardEntry from './LeaderBoardEntry'
import { TopMinersDocument, execute } from '../../.graphclient'
interface Miner {
  id: string,
  kiloBytes: string
}

export default function Miners() {
  const [miners, setMiners] = useState<Miner[]>([]);
  useEffect(() => {
    execute(TopMinersDocument, {}).then((r) => {
      console.log(r);
      setMiners(r.data.miners);
    }).catch(e => console.log(e));
  }, []);
  return (
    <div className='lg:flex justify-center hidden'>
      <div>
        <h1 className='text-center font-orbitron font-semibold mb-3 select-none'>TOP MINERS</h1>
        <div className=' py-1 px-4 rounded-md md:w-80 md:h-80   xl:w-120 xl:h-116 bg-black bg-opacity-5' >
          {miners.map((m, i) => {
            return <LeaderBoardEntry key={i + m.id} place={(i + 1).toString()} kilobytes={m.kiloBytes} address={m.id} />
          })}
        </div>
      </div>
    </div>)
}
