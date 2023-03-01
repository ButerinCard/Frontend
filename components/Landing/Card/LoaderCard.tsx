import React from 'react'
import Image from 'next/image'; 
import Blank from '../../../public/blank.svg'; 
export default function LoaderCard() {
  return (
    <div className='z-10 absolute  top-0' style={{height:'420px', zIndex:'3', width:'300px', }}>
        <Blank></Blank>
    </div>
  )
}
