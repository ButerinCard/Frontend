import React from 'react'

export default function VitalikHeader() {
    return (
        <div className="w-full flex justify-center z-40" >
            <div className='flex flex-col items-center px-4'>
                <h1 className='font-orbitron mt-10 lg:text-3xl text-lg'>A homage to Vitalik</h1>
                <h2 className='text-center hidden sm:block font-orbitron text-xs mt-2 opacity-50'>Help us uplaod the largest JPEG on-chain</h2>
                <h2 className='text-center sm:hidden font-orbitron text-xs mt-2 opacity-50' style={{fontSize:'9px'}}>Help us uplaod the largest JPEG on-chain</h2>
            </div>
        </div>
    )
}
