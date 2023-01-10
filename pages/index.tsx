import Image from 'next/image'
import deck from '../public/images/deck.png'
import Navbar from '../components/Navbar';
import MintButton from '../components/Landing/MintButton';
import ButerinCard from '../components/Landing/ButerinCard';
import card2 from '../public/images/backOfCard.png';
import card3 from '../public/images/cardBacks/back0.png'
import proto from '../public/images/Proto.png';
import card from '../public/images/Card.png'
import Graphic from '../public/images/graphic.png'

import { useEffect, useState } from 'react';
import Deck from '../components/Landing/Deck';
export default function Home() {
  const [i, setI] = useState(1);
  const [goingFoward, setGoingFoward] = useState(false);
  const [load, setLoad] = useState(false); 

  useEffect(() => {
    if(!load) {
      setTimeout(() => {
        setLoad(true)
      }, 700); 
    }
  }, [load])
  let cards = [card2, proto, card, card3];

  function goBack() {
    if (i >= cards.length - 1)
      return;
    let inc = i + 1;
    setGoingFoward(false);
    setI(inc);
  }

  function goFoward() {
    console.log(i);
    if (i < 2)
      return;
    let inc = i - 1;
    setGoingFoward(true);
    setI(inc);
  }

  const cardProps = { goBack, goFoward, load }

  return (
    <div className='overflow-x-hidden' style={{ background: '#e3dbcb' }}>
      <Navbar></Navbar>
      <main className='w-screen h-screen relative '  >
        <div className='absolute w-screen h-screen top-0 left-0 overflow-hidden'>
          <Image src={Graphic} className='opacity-10 h-screen ' alt=''></Image>
        </div>
        <MintButton />
        <div className='z-0 absolute lg:px-12 xl:px-20 h-screen w-screen grid lg:grid-cols-3 items-center justify-center'>
          <Deck />
          {cards.map((e, index, arr) => {
            if (i === index) {
              return <ButerinCard
                
                key={e.src}
                prevImg={!goingFoward ? cards[i - 1] : cards[i + 1]}
                currentImg={cards[i]}
                {...cardProps}
              />
            }
          })}


          <div className='flex justify-center'>
            <div>
              <h1 className='text-center font-orbitron font-semibold mb-3 select-none'>TOP MINERS</h1>
              <div className=' py-1 px-4 rounded-md  md:w-96 md:h-96' style={{ background: '#ebe4d8'}}>
                <LeaderBoardEntry />
                <LeaderBoardEntry />
                <LeaderBoardEntry />
                <LeaderBoardEntry />
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
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