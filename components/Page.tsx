import React from 'react'
import Image from 'next/image'
import Graphic from '../public/images/graphic2.png'
import background from '../public/images/background.png'
import { useEffect, useState } from 'react';
import { ImSpinner8 } from 'react-icons/Im'
import Miners from '../components/Landing/Miners';
import VitalikHeader from '../components/Landing/VitalikHeader';
import { execute } from '../.graphclient';
import ButerinCard from './Landing/ButerinCard';
interface MintedCard {
    dateMinted: string,
    id: string,
    Miner: string
}
const query = `
query GetCards($id: ID!) {
  cards(last: 1) {
    id
  }
}
`
interface props {
    tokenId: string
    prev: boolean
}

export default function Page({ tokenId, prev }: props) {
    const [load, setLoad] = useState(false);
    const [mintedCards, setMintedCards] = useState<MintedCard[]>([]);
    
    useEffect(() => {
        execute(query, { id: '0' }).then((r: any) => {
            setMintedCards(r.data.cards as MintedCard[]);
        }).catch((e: any) => console.log(e));
    }, []);

    useEffect(() => {
        setLoad(false); 
    }, [tokenId])
    function setLoadem() {
        setLoad(true); 
    }
    return (
        <div className='overflow-x-hidden'>
            <main className='relative overflow-y-auto h-screen overflow-x-hidden drop-shadow-lg' style={{ minHeight: '850px' }}>
                <div className='absolute w-screen h-screen -z-10 top-0 left-0' >
                    <Image src={Graphic} className='h-screen w-full' style={{ minHeight: '850px' }} alt=''></Image>
                </div>
                {/* Card */}
            
                <VitalikHeader />
                <div className='z-0 lg:px-12 xl:px-72   top-0 flex gap-24 justify-center items-center h-screen w-screen absolute '>
                    {/* <Deck /> */}
                    <ButerinCard tokenId={tokenId} reload={load} setLoaded={setLoadem}></ButerinCard>
                    <Miners />
                </div>
            </main>
            
            {/* About Sections */}
            <div className='font-PS2 py-10' style={{ backgroundImage: `url(${background.src})` }}>
                <section className='bg-transparent'>
                    <div className='text-black flex justify-center'>
                        <ImSpinner8 size={30} className='animate-spin' />
                    </div>

                    <h1 className='text-center' >About</h1>
                    <div className='rounded-lg my-10 mx-10 bg-black bg-opacity-5' style={{ height: '433px' }}>

                    </div>
                </section>

                <section className='bg-transparent'>
                    <h1 className='text-center' >About</h1>
                    <div className='rounded-lg my-10 mx-10 bg-black bg-opacity-5' style={{ height: '433px' }}>

                    </div>
                </section>

                <section className='bg-transparent'>
                    <h1 className='text-center' >About</h1>
                    <div className='rounded-lg my-10 mx-10 bg-black bg-opacity-5' style={{ height: '433px' }}>

                    </div>
                </section>

            </div>

        </div>
    )
}
