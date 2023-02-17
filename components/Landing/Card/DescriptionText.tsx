import React from 'react'


interface Props {
    lines: string[];
}
export default function DescriptionText({ lines }: Props) {
    return (
        <g id="descriptionText">
            {lines.map((l, i) => {
                return <text key={l} id="line1" className="fontQuote" x={'14'} y={(96 + (i * 4)).toString()}>
                    {l} 
                </text>
            })}
            <text id="line1" className="fontQuote" x="14" y="96" />
            <text id="line2" className="fontQuote" x="14" y="100" />
            <text id="line3" className="fontQuote" x="14" y="104" />
            <text id="line4" className="fontQuote" x="14" y="108" />
            <text id="line5" className="fontQuote" x="14" y="112" />
            <text id="line6" className="fontQuote" x="14" y="116" />
            <text id="line7" className="fontQuote" x="14" y="120" />
        </g>
    )
}
