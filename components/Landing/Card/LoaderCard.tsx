import React from 'react'
import Image from 'next/image';
import Blank from '../../../public/loader.png';
export default function LoaderCard() {
  return (
    <div className='z-10 absolute  top-0' style={{ zIndex: '3',  }}>
      <div className="" >
        {/* <div className="absolute z-10 top-72 left-10">
          <div className="w-48 h-6 animate-pulse rounded-sm bg-slate-400"></div>
        </div>
        <div className="absolute z-10 top-80 left-10">
          <div className="w-40 h-6 animate-pulse rounded-sm bg-slate-400"></div>
        </div>
     
        <div className="absolute z-10 bottom-8 left-20">
          <div className="w-10 h-4 animate-pulse rounded-sm bg-slate-400"></div>
        </div>
        <div className="absolute z-10 bottom-6 right-20">
          <div className="w-10 h-4 animate-pulse rounded-sm bg-slate-400"></div>
        </div> */}
        <Image src={Blank} height={300} width={420} alt="Loading Card..."></Image>

      </div>

    </div>
  )
}
