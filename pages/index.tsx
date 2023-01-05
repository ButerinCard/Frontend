import Image from 'next/image'
import deck from '../public/images/deck.png'
import Navbar from '../components/Navbar';
import MintButton from '../components/Landing/MintButton';
import ButerinCard from '../components/Landing/ButerinCard';
import card2 from '../public/images/backOfCard.png';
import proto from '../public/images/Proto.png';
import card from '../public/images/Card.png'

import { useState } from 'react';
import Deck from '../components/Landing/Deck';
export default function Home() {
  const [i, setI] = useState(1);
  const [goingFoward, setGoingFoward] = useState(false);
  let cards = [card2, proto, card];

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

  const directFuncs = { goBack, goFoward }

  return (
    <>
      <Navbar></Navbar>
      <main className='w-screen h-screen relative bg-black' style={{ background: '#e3dbcb' }} >
        <MintButton />
        <div className='z-0 absolute px-20 h-screen w-screen grid grid-cols-3 items-center justify-center'>
          <Deck />
          {cards.map((e, index, arr) => {
            if (i === index) {
              return <ButerinCard
                key={e.src}
                prevImg={!goingFoward ? cards[i - 1] : cards[i + 1]}
                currentImg={cards[i]}
                {...directFuncs}
              />
            }
          })}


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