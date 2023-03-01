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
import { useRouter } from 'next/router';
interface Props {
    tokenId: string
    reload: boolean
    lastTokenId: string
    setLoaded: () => void;
}

export default function ButerinCard({ tokenId, reload, setLoaded, lastTokenId }: Props) {
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
    const router = useRouter();
    if (Number.isNaN(parseInt(tokenId)) && lastTokenId !== '-1') {
        router.push('/cards/' + lastTokenId, undefined)
    }
    useEffect(() => {
        if (!reload) {
            setParams(undefined);
        }
    }, [reload])
    useEffect(() => {
        if (!tokenId)
            return;
        execute(query, { id: tokenId }).then(r => {
            if (r.data) {
                const param = r.data.cards[0];
                const params = { ...param, tokenId: 1 }
                setLoaded();
                setParams(params);
            }
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
    console.log(lastTokenId, tokenId);
    for (var i = 0; i < 9; i++) {
        let zIndex = `-${i + 1}`
        if (parseInt(tokenId) > i)
            backCards.push(<Image key={i} src={card1} className={`-translate-x-${i} translate-y-${i} absolute top-0`} style={{ zIndex, width: '300px', height: '420px' }} alt={''}></Image>)
    }
    function PushRouter(page: string) {
        router.push(page, undefined, { scroll: false });
    }
    return (
        <div className='flex justify-end mb-20'>
            <div className='relative'>
                <div className='hover:-translate-y-1 transition-transform '>
                    <div className={`transition-all ease-linear duration-300 select-none relative`}>
                    
                        <LoaderCard />
                        <div style={{ width: '300px', height: '420px' }} >

                            {params && <NextCard display={display} params={params} />}
                            {params && <PrevCard display={display} params={params} />}
                            {(parseInt(lastTokenId) < parseInt(tokenId) && lastTokenId !== '-1') && backCards}
                        </div>

                    </div>
                </div>

                <div className="absolute w-full mt-7 sm:-translate-x-7" >
                    <div className="flex">
                        {parseInt(tokenId) > 0 && <div onClick={() => PushRouter('/cards/' + (parseInt(tokenId) ))}>
                            <div className='cursor-pointer'>
                                <Image src={leftArrow} alt={''}></Image>
                            </div>
                        </div>}
                        {parseInt(tokenId) === 0 && <div className='cursor-not-allowed opacity-50'>
                            <Image src={leftArrow} alt={''}></Image>
                        </div>}
                        {parseInt(lastTokenId) <= parseInt(tokenId) && <div className='cursor-not-allowed opacity-50'>
                            <Image src={rightArrow} alt={''}></Image>
                        </div>}
                        {
                            parseInt(lastTokenId) > parseInt(tokenId) && <div onClick={() => PushRouter('/cards/' + (parseInt(tokenId) + 2))}>
                                <div className='cursor-pointer'>
                                    <Image src={rightArrow} alt={''}></Image>
                                </div>
                            </div>
                        }

                        <div>
                            {params?.miner && <div className='ml-4 font-plex  lg:text-sm select-none ' style={{ fontSize: '12px' }}>
                                <h1 className='leading-4'>Card: {parseInt(params.id) + 1} / 2015</h1>
                                <h1 className='leading-4'>{FormatDate(parseInt(params?.dateMined) * 1000)}</h1>
                                <h1 className='leading-4'>Contributor: {condenseAddress(params?.miner)}</h1>
                            </div>}
                            {!params?.miner &&
                                <div className='flex justify-center items-center  animate-spin w-44' style={{ height: '48px' }}>
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

function FormatDate(timestamp: number | undefined) {
    if (!timestamp) {
        return ''
    }
    let d = new Date(timestamp);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    console.log(`${da}-${mo}-${ye}`);
    return `Minted: ${mo} ${da}, ${ye}`
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