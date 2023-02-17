import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import MintButton from './MintButton';
import Card from './Card/Card';
import { execute } from '../../.graphclient';
import { CardParams } from '../../libs/types';
import { condenseAddress } from '../../libs/helpers';
interface Props {
    tokenId: string
    lastTokenId: string
}

export default function ButerinCard({ tokenId, lastTokenId }: Props) {
    const [params, setParams] = useState<CardParams | undefined>()
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
        if(!tokenId)
            return; 
        execute(query, { id: tokenId }).then(r => {
            const param = r.data.cards[0];
            const params = { ...param, tokenId: 1 }
            setParams(params); 
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tokenId])
    return (
        <div className='flex justify-center mb-20'>

            <div className='relative'>
                <div className='hover:-translate-y-1 transition-transform'>
                    <div className={`transition-all  ease-linear duration-300 select-none `}>
                        {/* Top of Deck */}
                        {/* <Image loading={'eager'} className={`w-56 lg:w-64 xl:w-72 2xl:w-96 `} src={Card1} alt={''}></Image> */}
                        {/* Second Card */}
                        {/* <Image loading={'eager'} className={`w-56 lg:w-64 xl:w-72 2xl:w-96 absolute top-0 left-0 z-30 `} src={Card1} alt={''}></Image> */}
                        {params && <Card {...params} ></Card> }
                    </div>
                </div>

                <div className="absolute w-full mt-2">
                    <div className="flex">
                        <div className='w-7 h-7 bg-white flex justify-center items-center rounded-full cursor-pointer mr-2'>
                            <BiLeftArrowAlt size={25} />
                        </div>
                        <div className={`w-7 h-7 bg-white  flex justify-center items-center rounded-full cursor-pointer`}>
                            <BiRightArrowAlt size={25} />
                        </div>
                        <div>
                            <div className='ml-4 font-plex font-semibold text-xs lg:text-sm select-none'>
                                <h1 >Minted January 02, 2023</h1>
                                <h1>Contributor {condenseAddress(params?.miner)}</h1>
                            </div>
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
