import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { GenerateCard } from '../../libs/generateCard';
import { CardParams } from '../../libs/types';
type props = CardParams;
export default function Card(props: props | undefined) {
    const [src, setSrc] = useState('');
    useEffect((() => {
        if (props)
            GenerateCard(props).then(r => {
                const base64data = btoa(unescape(encodeURIComponent(r)));
                setSrc(base64data);
            })
    }), [props]);

    return (
        <div>
            <Image width='350' height="250" src={`data:image/svg+xml;base64,${src}`} alt="a" />
        </div>
    )
}
