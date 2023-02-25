import React, { useEffect, useState } from 'react'
import useCardProvider from '../../../libs/hooks/card'
import Card from './Card';
interface Props {
    display: boolean
}
// 
export default function PrevCard({ display }: Props) {
    const { prev } = useCardProvider();
    const [n, setN] = useState(false);
    useEffect(() => {
        if (!display) {
            setN(true)
            setTimeout(() => { setN(false) }, 500)
        } else {
            setN(false)
        }
    }, [display])
    return (
        <div className={`transition-all top-0 z-20 duration-500 absolute  ${!display || !prev ? `opacity-0` : 'opacity-100 '}`}>
            <Card />
        </div>
    )
}
