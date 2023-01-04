import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="absolute z-10 w-full">
      <div className='w-full h-12 bg-white bg-opacity-70 flex justify-between items-center px-20 font-orbitron'>
        <div className='items-center flex font-semibold'>
          <NavLink title={'ABOUT'} url={''}/>
          <NavLink title={'FAQs'} url={''}/>

        </div>

        <div >
          <h1 className='font-semibold bg-primaryYellow px-3 py-1 cursor-pointer rounded-md drop-shadow-lg'>Connect</h1>
        </div>
      </div>

      <div className="w-full bg-black h-20 flex justify-center items-center" style={{ background: '#3b2b20' }}>
        <h1 className='font-orbitron text-white' style={{ fontSize: '40px' }}>a homage to Vitalik : Help us upload the largest JPEG on-chain</h1>
      </div>
    </div>
  )
}


function NavLink({title, url} : {title: string, url: string}) {
  return (
    <div className='mx-3'>
      <Link href={url}>
        <h1>{title}</h1>
      </Link>
    </div>

  )
}