import React from 'react'
import useCardProvider from '../../../libs/hooks/card'
import Card from './Card';
interface Props {
    display: boolean
}
// 
export default function NextCard({ display }: Props) {
    const {prev} = useCardProvider(); 
    return (
        <div className={`transition-all z-20 duration-200 absolute top-0  ${!display || prev ? `opacity-0 -translate-x-16` : 'opacity-100 translate-x-0'}`}>
            <Card/>
        </div>
    )
}
