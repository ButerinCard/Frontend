import React from 'react'
import Image from 'next/image'
import Graphic from '../public/images/graphic2.png'
import { useEffect, useState } from 'react';
import Miners from '../components/Landing/Miners';
import VitalikHeader from '../components/Landing/VitalikHeader';
import { execute } from '../.graphclient';
import ButerinCard from './Landing/ButerinCard';
import { FaDiscord } from 'react-icons/fa';

import Link from 'next/link';
import About from './About/About';
import MintButton from './Landing/MintButton';
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
    lastTokenId: string
 
}

export default function Page({ tokenId, lastTokenId }: props) {
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
                <Link href={'https://discord.com'}>
                    <div className='absolute right-5 top-5 z-20 cursor-pointer'>
                        <FaDiscord size={40} />
                    </div>
                </Link>

                {/* Card */}

                <VitalikHeader />
                <div className='z-0 lg:px-12 xl:px-72  top-0 flex gap-24 justify-center items-center h-screen w-screen absolute ' style={{ minHeight: '850px' }}>
                    {/* <Deck /> */}
                    <ButerinCard tokenId={tokenId} reload={load} setLoaded={setLoadem} lastTokenId={lastTokenId}></ButerinCard>
                
                    <Miners />
                </div>
            </main>

            <About/> 

        </div>
    )
}
