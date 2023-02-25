import React, { useEffect, useState } from 'react'
import LeaderBoardEntry from './LeaderBoardEntry'
import { TopMinersDocument, TopMinersQuery, execute } from '../../.graphclient'
interface Miner {
  id: string,
  kiloBytes: string
}

enum LeaderBoardType {
  miners = 0,
  hand = 1
}
export default function Miners() {
  const [type, setType] = useState<LeaderBoardType>(LeaderBoardType.miners)
  const [miners, setMiners] = useState<Miner[]>([]);
  useEffect(() => {
    execute(TopMinersDocument, {}).then((r) => {
      setMiners(r.data.miners);
    })
  }, []);

  return (
    <div className='lg:flex justify-start hidden '>
      <div>
        <div className='flex justify-around'>
          <h1 className={`${type === LeaderBoardType.miners ? '' : ' opacity-60 '} text-center font-PS2 font-semibold mb-3 select-none cursor-pointer`}
            onClick={() => setType(LeaderBoardType.miners)}>Top miners</h1>
          <h1 className={` ${type === LeaderBoardType.hand ? '' : ' opacity-60 '} text-center font-PS2 font-semibold mb-3 select-none cursor-pointer`}
            onClick={() => setType(LeaderBoardType.hand)}>Your hand</h1>
        </div>

        <div className=' py-1 px-4 rounded-md md:w-80 md:h-80   xl:w-120 xl:h-116 bg-black bg-opacity-5 shadow-lg' >
          {type === LeaderBoardType.miners && miners.map((m, i) => {
            return <LeaderBoardEntry key={i + m.id} place={(i + 1).toString()} kilobytes={m.kiloBytes} address={m.id} />
          })}
        </div>
      </div>
    </div>)
}
