import Image from 'next/image'
import { Inter } from '@next/font/google'
import proto from '../public/images/Proto.png';
import deck from '../public/images/deck.png'
import Navbar from '../components/Navbar';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Navbar></Navbar>
      <main className='w-screen h-screen relative bg-black' style={{ background: '#e3dbcb' }} >

        <div className="absolute z-20 bottom-0 w-full flex justify-center">
          <div className='flex justify-center mb-20'>
            <div className='mt-20 bg-primaryYellow px-20 drop-shadow-lg cursor-pointer py-3 font-orbitron font-semibold text-2xl rounded-md'   >
              <h1>MINT</h1>
            </div>
          </div>
        </div>

        <div className='z-0 absolute px-20 h-screen w-screen grid grid-cols-3 items-center justify-center'>
          <div className='flex justify-center'>
            <div className='flex flex-col items-center'>
              <h1 className='text-center font-orbitron mb-2 font-semibold'>651 Left</h1>
              <Image className='w-64' src={deck} alt={''}></Image>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='relative'>
              <Image className='w-80' src={proto} alt={''}></Image>
              <div className="absolute w-full flex -bottom-9">
                <div className='w-6 h-6 bg-white flex justify-center items-center rounded-full cursor-pointer mr-2'>
                  <BiLeftArrowAlt size={20} />
                </div>
                <div className='w-6 h-6 bg-white flex justify-center items-center rounded-full cursor-pointer'>
                  <BiRightArrowAlt size={20} />
                </div>

              </div>
            </div>

          </div>

          <div className='flex justify-center'>
            <div>
              <h1 className='text-center font-orbitron font-semibold mb-3'>TOP MINERS</h1>
              <div className=' py-1 px-4 rounded-md' style={{ background: '#ebe4d8', width: '352px', height: '389px' }}>
                <LeaderBoardEntry />
                <LeaderBoardEntry />
                <LeaderBoardEntry />
                <LeaderBoardEntry />
              </div>
            </div>

          </div>

        </div>
      </main>

    </>
  )
}


function LeaderBoardEntry() {
  return (
    <div className='flex justify-between font-libre text-sm my-2' >

      <div className='flex'>
        <h1 className='mr-2 opacity-70'>#1</h1>
        <h1>This is a name</h1>
      </div>

      <h2 className='opacity-70'>0000 KB</h2>
    </div>
  )
}