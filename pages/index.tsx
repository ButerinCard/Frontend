import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import background from '../public/images/cityscape.jpg';
import proto from '../public/images/Proto.png';
import Navbar from '../components/Navbar';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [gray, setGray] = useState(100);
  const handleMint = () => {
    if (gray > 0) {
      setGray(gray - 10);
    }

  }
  return (
    <>
      <main className='w-screen h-screen relative bg-black' style={{}} >
        <Navbar></Navbar>
        <div className="fixed h-screen w-screen overflow-hidden z-0" style={{ filter: `blur(40px) grayscale(${gray}%)` }}>
          <Image src={background} alt={''}></Image>
        </div>

        <div className='z-10 absolute h-screen w-screen flex items-center justify-center'>
          <div>
            <Image style={{ filter: `grayscale(${gray}%)` }} className='w-64' src={proto} alt={''}></Image>

            <div onClick={handleMint} className='border-red-400 cursor-pointer border-4 flex items-center justify-center rounded-md mt-5 py-4 '>
              <h1>Mint</h1>
            </div>

          </div>

        </div>
      </main>

    </>
  )
}
