import Image from 'next/image'
import ButerinCard from '../components/Landing/ButerinCard';
import card2 from '../public/images/backOfCard.png';
import card3 from '../public/images/cardBacks/back0.png'
import proto from '../public/images/Proto.png';
import card from '../public/images/Card.png'
import Graphic from '../public/images/graphic2.png'
import background from '../public/images/background.png'
import { useEffect, useState } from 'react';

import Miners from '../components/Landing/Miners';
import VitalikHeader from '../components/Landing/VitalikHeader';
export default function Home() {
  const [i, setI] = useState(1);
  const [goingFoward, setGoingFoward] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!load) {
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
    <div className='overflow-x-hidden'>
      <main className='relative overflow-y-auto h-screen overflow-x-hidden drop-shadow-md' style={{ minHeight: '850px' }}>
        <div className='absolute w-screen h-screen -z-10 top-0 left-0'>
          <Image src={Graphic} className='h-screen w-full' alt=''></Image>
        </div>
        <VitalikHeader/>
        <div className='z-0 lg:px-12 xl:px-44 mt-20 w-screen grid lg:grid-cols-2 justify-center'>
          {/* <Deck /> */}
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

        <Miners/>
        </div>
      </main>
      {/* About Sections */}
      <div className='font-orbitron py-10' style={{backgroundImage:`url(${background.src})`}}>
        <section className='bg-transparent'>
          <h1 className='text-center' >About</h1>
          <div className='rounded-lg my-10 mx-10 bg-black bg-opacity-5' style={{height:'433px'}}>

          </div>
        </section>  
      
        <section className='bg-transparent'>
          <h1 className='text-center' >About</h1>
          <div className='rounded-lg my-10 mx-10 bg-black bg-opacity-5' style={{height:'433px'}}>

          </div>
        </section> 

        <section className='bg-transparent'>
          <h1 className='text-center' >About</h1>
          <div className='rounded-lg my-10 mx-10 bg-black bg-opacity-5' style={{height:'433px'}}>

          </div>
        </section> 
       
      </div>
      
    </div>
  )
}


