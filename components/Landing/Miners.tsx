import React from 'react'
import LeaderBoardEntry from './LeaderBoardEntry'

export default function Miners() {
  return (
    <div className='flex justify-center'>
    <div>
      <h1 className='text-center font-orbitron font-semibold mb-3 select-none'>TOP MINERS</h1>
      <div className=' py-1 px-4 rounded-md md:w-60 md:h-80   xl:w-96 xl:h-96 bg-black bg-opacity-5' >
        <LeaderBoardEntry />
        <LeaderBoardEntry />
        <LeaderBoardEntry />
        <LeaderBoardEntry />
      </div>
    </div>
  </div>  )
}
