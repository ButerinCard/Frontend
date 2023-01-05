import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import deck from '../../public/images/cardBacks/back0.png'
import back1 from '../../public/images/cardBacks/backOne.png'
import back2 from '../../public/images/cardBacks/back2.png'
import back3 from '../../public/images/cardBacks/back3.png'
export default function Deck() {
    const [hover, setHover] = useState(true); 
    const [load, setLoad] = useState(false); 
    useEffect(() => {
        if(!load) {
            setTimeout(() => {setHover(false)}, 200); 
            setLoad(false)
        }
    }, [load])
    
    return (
        <div className='flex justify-center' >
            <div className='flex flex-col items-center' >
                <h1 className='text-center font-orbitron mb-1 font-semibold'>651 Left</h1>
                <div className='relative z-30 ease-in' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Image className={`w-64 transition-all translate-y-3  ${hover ? 'translate-y-0' : ''} `} src={deck} alt={''}></Image>
                    <Image className={`absolute top-4 right-4 delay-30 transition-all translate-y-3 ${hover ? 'translate-y-0' : ''} `} src={back1} alt={'back1'}></Image>
                    <Image className={`absolute top-8 right-8 delay-60 transition-all translate-y-3 ${hover ? 'translate-y-0' : ''} `} src={back2} alt={'back2'}></Image>
                    <Image className={`absolute top-12 right-12 delay-90 transition-all translate-y-3 ${hover ? 'translate-y-0' : ''} `} src={back3} alt={'back3'}></Image>
                </div>

            </div>
        </div>
    )
}
