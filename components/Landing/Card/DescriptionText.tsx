import React from 'react'


interface Props {
    lines: string[];
}
export default function DescriptionText({ lines }: Props) {
    const quoteClass = 'font-mono italic opacity-90'

    return (
        <g id="descriptionText" style={{fontSize:'1em'}}>
            {lines.map((l, i) => {
                return <text key={l} id="line1" className={quoteClass} x={'14'} y={(96 + (i * 4)).toString()}>
                    {l} 
                </text>
            })}
        
            {/* <text id="line1" className={quoteClass} x="14" y="96" />
            <text id="line2" className={quoteClass}  x="14" y="100" />
            <text id="line3" className={quoteClass} x="14" y="104" />
            <text id="line4" className={quoteClass} x="14" y="108" />
            <text id="line5" className={quoteClass} x="14" y="112" />
            <text id="line6" className={quoteClass} x="14" y="116" />
            <text id="line7" className={quoteClass} x="14" y="120" /> */}
        </g>
    )
}
