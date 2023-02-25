import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import MintButton from './MintButton';
import rightArrow from '../../public/images/arrowRight.png';
import leftArrow from '../../public/images/arrowLeft.png';
import { RiLoader4Line } from 'react-icons/ri'
import Card from './Card/Card';
import { execute } from '../../.graphclient';
import { CardParams } from '../../libs/types';
import { condenseAddress } from '../../libs/helpers';
import card1 from '../../public/images/card1.png'
import Link from 'next/link';
import NextCard from './Card/NextCard';
import PrevCard from './Card/PrevCard';
import LoaderCard from './Card/LoaderCard';
interface Props {
    tokenId: string
    reload: boolean
    setLoaded: () => void;
}

export default function ButerinCard({ tokenId, reload, setLoaded }: Props) {
    const [params, setParams] = useState<CardParams | undefined>()
    const [display, setDisplay] = useState(false)
    const [leave, setLeave] = useState(false);
    const query = `
    query GetCards($id: ID!) {
      cards(where: {id: $id}) {
        id
        dateMined
        miner
        colorId
        phaseId
        tokenIdInPhase
        quoteId
        seed
        lastTokenIdInScan
      }
    }
    `
    useEffect(() => {
        if (!reload) {
            setParams(undefined);
        }
    }, [reload])
    useEffect(() => {
        if (!tokenId)
            return;
        execute(query, { id: tokenId }).then(r => {
            const param = r.data.cards[0];
            const params = { ...param, tokenId: 1 }
            setLoaded();
            setParams(params);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tokenId])
    useEffect(() => {
        if (params) {
            setLeave(true);
            setTimeout(() => { setDisplay(true) }, 200);
        } else {
            setDisplay(false)
            // setTimeout(() => {setDisplay(false)}, 200); 
            setLeave(false);
        }
    }, [params])
    let backCards = [];
    for (var i = 0; i < 9; i++) {
        let zIndex = `-${i+1}`
        if(parseInt(tokenId) > i)
            backCards.push(<Image key={i} src={card1} className={`-translate-x-${i} translate-y-${i} absolute top-0`} style={{ zIndex, width: '300px', height: '420px' }} alt={''}></Image>)
    }
    return (
        <div className='flex justify-end mb-20'>

            <div className='relative'>
                <div className='hover:-translate-y-1 transition-transform '>
                    <div className={`transition-all ease-linear duration-300 select-none relative`}>
                        {/* Top of Deck */}
                        {/* <Image loading={'eager'} className={`w-56 lg:w-64 xl:w-72 2xl:w-96 `} src={Card1} alt={''}></Image> */}
                        {/* Second Card */}
                        {/* <Image loading={'eager'} className={`w-56 lg:w-64 xl:w-72 2xl:w-96 absolute top-0 left-0 z-30 `} src={Card1} alt={''}></Image> */}
                        <div style={{width:'300px', height:'420px'}}  onClick={() => { setParams(undefined) }}>
                            <NextCard display={display} />
                            <PrevCard display={display} />
                            <LoaderCard/>
                        </div>
                        {backCards}
                        {/* <Image src={card1} className='-translate-x-1 translate-y-1 absolute top-0 ' style={{ zIndex: '-1', width: '300px', height: '420px' }} alt={''}></Image>
                        <Image src={card1} className='-translate-x-2 translate-y-2 absolute top-0 ' style={{ zIndex: '-2', width: '300px', height: '420px' }} alt={''}></Image>
                        <Image src={card1} className='-translate-x-3 translate-y-3 absolute top-0 ' style={{ zIndex: '-3', width: '300px', height: '420px' }} alt={''}></Image>
                        <Image src={card1} className='-translate-x-4 translate-y-4 absolute top-0 ' style={{ zIndex: '-4', width: '300px', height: '420px' }} alt={''}></Image>
                        <Image src={card1} className='-translate-x-5 translate-y-5 absolute top-0 ' style={{ zIndex: '-5', width: '300px', height: '420px' }} alt={''}></Image>
                        <Image src={card1} className='-translate-x-6 translate-y-6 absolute top-0 ' style={{ zIndex: '-6', width: '300px', height: '420px' }} alt={''}></Image> */}
                    </div>
                </div>

                <div className="absolute w-full mt-7 -translate-x-7" >
                    <div className="flex">
                        {parseInt(tokenId) > 0 && <Link href={'/cards/' + (parseInt(tokenId) - 1) + "?prev=true"}>
                            <div className='cursor-pointer'>
                                <Image src={leftArrow} alt={''}></Image>
                            </div>
                        </Link>}
                        {parseInt(tokenId) === 0 && <div className='cursor-not-allowed opacity-50'>
                            <Image src={leftArrow} alt={''}></Image>
                        </div>}
                        <Link href={'/cards/' + (parseInt(tokenId) + 1)}>
                            <div className='cursor-pointer'>
                                <Image src={rightArrow} alt={''}></Image>
                            </div>
                        </Link>
                        <div>
                            {params?.miner && <div className='ml-4 font-plex  lg:text-sm select-none ' style={{fontSize:'12px'}}>
                                <h1 className='leading-4'>Card: 456 / 2015</h1>
                                <h1 className='leading-4'>Minted: January 02, 2023</h1>
                                <h1 className='leading-4'>Contributor: {condenseAddress(params?.miner)}</h1>
                            </div>}
                            {!params?.miner &&
                                <div className='flex justify-center items-center  animate-spin w-44' style={{height:'48px'}}>
                                    <RiLoader4Line size={30} />
                                </div>}

                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <MintButton />
                    </div>
                </div>
            </div>
        </div>
    )
}


// translate-x-1 translate-y-1
// VM15476:2 -translate-x-2 translate-y-2
// VM15476:2 -translate-x-3 translate-y-3
// VM15476:2 -translate-x-4 translate-y-4
// VM15476:2 -translate-x-5 translate-y-5
// VM15476:2 -translate-x-6 translate-y-6
// VM15476:2 -translate-x-7 translate-y-7
// VM15476:2 -translate-x-8 translate-y-8
// VM15476:2 -translate-x-9 translate-y-9
// VM15476:2 -translate-x-10 translate-y-10
// VM15476:2 -translate-x-11 translate-y-11
// VM15476:2 -translate-x-12 translate-y-12
// VM15476:2 -translate-x-13 translate-y-13
// VM15476:2 -translate-x-14 translate-y-14
// VM15476:2 -translate-x-15 translate-y-15
// VM15476:2 -translate-x-16 translate-y-16
// VM15476:2 -translate-x-17 translate-y-17
// VM15476:2 -translate-x-18 translate-y-18
// VM15476:2 -translate-x-19 translate-y-19