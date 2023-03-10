import React, { useEffect, useState } from 'react'
import DescriptionText from './DescriptionText';
import Defs from './Defs/Defs';
import { fidenzaPalette } from './helpers';
import useCardProvider from '../../../libs/hooks/card';
import { CardParams } from '../../../libs/types';


// 

export default function Card({tokenIdInPhase, colorId, quoteId, phaseId, }: CardParams) {
 
    let patternId = 0;
    const url = '/jpegs/Buterin042.jpg';
    const kiloBytes = 'abc';
    // const tokenIdWithinPhase = 1;
    
    const subTitleText = 'tesrfds';

    return (
        <div style={{ width: '300px', zIndex:'100' }}>
            {/* <Image alt='' width={'100'} height='100' src={`/cardForContract.svg`}/> */}
            <svg
                viewBox="0 0 100 140"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ fontSize: '23%' }}
            // style="fontSize: 23%"
            >
                <defs>
                    <image href={url} id="vitalikJPEG" x="10" y="16.82842712475" width="80" />
                </defs>
                <Defs colorId={parseInt(colorId)} />


                <rect width="100" height="140" rx="5" fill="black" />

                <path id="frame" fill={`url('#pattern${patternId}')`} d="
                                        M6 4
                                        L4 6
                                        V124
                                        L6 126
                                        H94
                                        L96 124
                                        V6
                                        L94 4
                                        Z" />


                <g filter="url('#shadow')">
                    <use href="#framePath" fill="url('#patternBlurry')" />
                    <use href="#framePath" fill="white" fillOpacity=".7" />
                    <use href="#framePath" fill="none" stroke="white" strokeWidth=".5" strokeOpacity=".2" />
                    <use
                        href="#framePath"
                        fill="none"
                        stroke="white"
                        strokeWidth=".5"
                        strokeOpacity=".1"
                        strokeDasharray="0 219.313708499 219.313708499"
                    />
                </g>
                <g>
                    <use href="#titlePath" filter="url('#glow')" fill={fidenzaPalette[parseInt(colorId)]} />
                    <use href="#titlePath" fill="white" opacity=".9" />
                    <g width="100" height="140" clipPath="url('#titleClip')">
                        <g filter="url('#bevel')">
                            <rect width="100" height="140" clipPath="url('#titleClipOutside')" />
                        </g>
                    </g>
                    <text x="11" y="13" fontSize="1.2em" className='font-orbitron text' style={{ fontSize: '4px' }} fontWeight="bold">Buterin Card</text>

                    <rect
                        id="numberWrap"
                        height="5"
                        rx="1"
                        fill="white"
                        opacity=".9"
                        filter="url('#glow')"
                        transform="translate(83.5 8.8) scale(-1 1)"
                    />
                    <g id="g">
                        <text
                            id="tokenIdWithinPhase"
                            x="82.8"
                            y="13"
                            style={{ filter: `url('#titleShadow')` }}
                            className='font-orbitron'
                            fontSize="1.2em"
                            fontWeight="bold"
                            textAnchor="end"
                        >{tokenIdInPhase + 1}</text>
                    </g>
                    <circle cx="87" cy="11.3" r="2.5" fill="white" opacity=".9" filter="url('#glow')" />
                    <use id="eth_title" href="#eth_diamond" transform="translate(87 9) scale(.0014 .0014)" />
                </g>

                <g>
                    <use id="vitalik" href="#vitalikPencil" />
                    <g width="100" height="140" clipPath="url('#imageClip')">
                        <g filter="url('#bevel')">
                            <rect width="100" height="140" clipPath="url('#imageClipOutside')" />
                        </g>
                    </g>
                </g>
                <g id="vitalikImage" filter="url('#glow')">
                    <g clipPath="url('#imageClip')">
                        <use href="#vitalikJPEG" />
                        <g id="laserEyesImage" visibility="hidden">
                            <use href="#laserEye" transform=" translate(46.6 35.1) scale(.07 .07) rotate(-6)" />
                            <use href="#laserEye" transform=" translate(52.3 34.4) scale(.07 .07) rotate(-6)" />
                        </g>
                        <use href="#speechBubble" transform="translate(-2 -2)" />
                        <use href="#pitchfork" filter="url('#3d')" clipPath="url('#pitchforklip')" />
                    </g>
                </g>

                <g>
                    <use href="#subtitlePath" filter="url('#glow')" fill={fidenzaPalette[parseInt(colorId)]} />
                    <use href="#subtitlePath" fill="white" opacity=".9" />
                    <g width="100" height="140" clipPath="url('#subtitleClip')">
                        <g filter="url('#bevel')">
                            <rect width="100" height="140" clipPath="url('#subtitleClipOutside')" />
                        </g>
                    </g>
                    <text id="subtitleText" x="11" y="87.4" fontSize="1em" className='font-orbitron' style={{ filter: `url('#titleShadow')`, fontFamily: 'Orbitron' }} fontWeight="normal">
                        {subTitleText}
                    </text>
                </g>

                <g filter="url('#glow')">
                    <use

                        href="#descriptionPath"
                        fill={fidenzaPalette[parseInt(colorId)]}
                        clipPath="url('#descriptionWithoutCardNumberClip')"
                    />
                </g>

                <use href="#descriptionPath" fill="white" opacity=".9" clipPath="url('#descriptionWithoutCardNumberClip')" />
                <g width="100" height="140" clipPath="url('#descriptionWithoutCardNumberClip')">
                    <g filter="url('#bevel')">
                        <rect width="100" height="140" clipPath="url('#descriptionClipOutside')" />
                    </g>
                </g>
                <DescriptionText lines={["lorem ipsum is a name", 'lorem ispum']} />

                <text id="lineKB" className='font-ubuntu opacity-90 ' style={{ fontSize: '1em' }} x="20" y="128">{kiloBytes}</text>
                <g transform="translate(1, 1)">
                    <g filter="url('#glow')">
                        <use

                            fill={fidenzaPalette[parseInt(colorId)]}
                            href="#descriptionPath"
                            clipPath="url('#descriptionWithCardNumberClip')"
                        />
                    </g>
                    <use href="#descriptionPath" fill="white" opacity=".9" clipPath="url('#descriptionWithCardNumberClip')" />
                    <g x="54" y="125" width="36" height="7" fill="red" clipPath="url('#descriptionWithCardNumberClip')">
                        <g filter="url('#bevel')">
                            <rect width="100" height="140" clipPath="url('#descriptionClipOutside')" />
                        </g>
                    </g>
                    <text fontWeight="normal" textAnchor="end" x="85" y="129" style={{ filter: `url('#titleShadow')`, fontFamily: 'Orbitron' }}>
                        <tspan id="cardNumber" fontWeight="bold" fontSize="1.2em" />
                        <tspan fontSize=".8em">/ 2015</tspan>
                    </text>
                </g>
            </svg>
        </div>
    )
}


