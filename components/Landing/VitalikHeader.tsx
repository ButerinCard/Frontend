import React from 'react'
import Image from 'next/image';
import gradient from '../../public/gradient.png';
export default function VitalikHeader() {
    return (
        <div className="w-full flex justify-center z-40" >

            <div className='flex flex-col items-center px-4'>
                <div className='relative '>
                    <div className='absolute h-full mt-4'>
                        <Image src={gradient} className=' h-full' style={{height:'124px'}} alt={''}></Image>
                    </div>
                    <h1 className='font-PS2 lg:text-4xl text-lg px-10 pt-16'>A homage to Vitalik</h1>
                </div>

                <h2 className='text-center hidden sm:block font-PS2 text-sm mt-2 opacity-50'>Help us upload the largest JPEG on-chain</h2>
                <h2 className='text-center sm:hidden font-PS2 text-xs mt-2 opacity-50' style={{ fontSize: '9px' }}>Help us uplaod the largest JPEG on-chain</h2>
            </div>
        </div>
    )
}
