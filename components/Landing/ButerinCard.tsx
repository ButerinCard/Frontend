import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

interface Props {
    prevImg: StaticImageData,
    currentImg: StaticImageData,
    dontFlip: boolean,
    goBack: () => void;
    goFoward: () => void;
    direction: boolean;
}

export default function ButerinCard({ prevImg, currentImg, dontFlip, goBack, goFoward, direction }: Props) {
    const [flip, setFlip] = useState(false);
    const [flip2, setFlip2] = useState(false);
    useEffect(() => {
        startFlip()
    }, [dontFlip, prevImg])
    function startFlip() {
        setFlip(true);
        setTimeout(() => { setFlip2(true); }, 150);
    }
    return (
        <div className='flex justify-center'>
            <div className='relative'>

                <div className={`transition-all ease-linear duration-300  ${flip ? 'rotate-y ' : ''}`}>
                    {/* Top of Deck */}
                    <Image className={`w-80 ${flip2 ? 'opacity-0' : ''}`} src={prevImg} alt={''}></Image>
                    {/* Second Card */}
                    <Image className={`w-80 absolute top-0 left-0 z-30 ${flip2 ? 'rotate-y' : 'hidden'}`} src={currentImg} alt={''}></Image>
                </div>

                <div className="absolute w-full flex -bottom-9">
                    <div onClick={goBack} className='w-6 h-6 bg-white flex justify-center items-center rounded-full cursor-pointer mr-2'>
                        <BiLeftArrowAlt size={20} />
                    </div>
                    <div onClick={goFoward} className={`w-6 h-6 bg-white ${!flip ? 'bg-opacity-50 cursor-default' : ''} flex justify-center items-center rounded-full cursor-pointer`}>
                        <BiRightArrowAlt size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}