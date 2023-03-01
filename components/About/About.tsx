import React, { useState } from 'react'
import background from '../../public/images/background.png'
import aboutCard from '../../public/images/aboutCard.png';
import Image from 'next/image';
export default function About() {
    const [phase, setPhase] = useState(false);
    const [pic, setPic] = useState(false);
    const [body, setBody] = useState(false);
    const [size, setSize] = useState(false);
    return (
        <>
            {/* About Sections */}
            < div className='font-PS2 py-10' style={{ backgroundImage: `url(${background.src})` }
            }>
                <section className='bg-transparent'>
                    <h1 className='text-center' >About</h1>
                    <div className='rounded-lg relative my-12 2xl:mx-80 bg-black bg-opacity-5 flex justify-center py-5'>

                        {/* <div className={`w-1/3 h-44  transition-opacity `}>
                            <div className={`flex hover:opacity-100 ${pic ? 'opacity-100' : 'opacity-0'}`}>
                                <div className={`pl-10 mt-28`} style={{ fontSize: '10px' }}>
                                    <p >An AI generated image from Vitalik with many crypto references in the background, including DeFi, NFTs and others</p>
                                    <br />
                                    <p>This image will go through different phases as it is uploaded onchain.</p>
                                </div>
                                <h1 className='mt-28 whitespace-nowrap'> -&gt; </h1>
                            </div>
                          

                        </div> */}


                        <div className="flex relative">

                            <div className="absolute -left-96 bottom-0 w-96">
                                <div className={`flex hover:opacity-100 ${size ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className={`pr-2 relative`} style={{ fontSize: '10px' }}>
                                        <p >An AI generated image from Vitalik with many crypto references in the background, including DeFi, NFTs and others</p>
                                        <br />
                                        <p>This image will go through different phases as it is uploaded onchain.</p>
                                    </div>

                                    <h1 className='whitespace-nowrap absolute bottom-0 right-0'> -&gt; </h1>
                                </div>
                            </div>
                            <div className="absolute -left-96 top-20 w-96 pr-5">
                                <div className={`flex hover:opacity-100  ${pic ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className={`pr-2 relative `} style={{ fontSize: '10px' }}>
                                        <p >An AI generated image from Vitalik with many crypto references in the background, including DeFi, NFTs and others</p>
                                        <br />
                                        <p>This image will go through different phases as it is uploaded onchain.</p>
                                    </div>

                                    <h1 className='whitespace-nowrap absolute bottom-0 right-0'> -&gt; </h1>
                                </div>
                            </div>

                            <div>
                                <h2 className='font-mono mb-2'>(Hover over areas to learn more)</h2>
                                <Image src={aboutCard} alt='About Card' width={300} height={420} />
                                <div onMouseOver={() => setPhase(true)} onMouseOut={() => setPhase(false)} className="absolute h-10 w-full bg-opacity-30 top-10"></div>
                                <div onMouseOver={() => setPic(true)} onMouseOut={() => setPic(false)} className="absolute h-48 w-full  bg-opacity-30 top-20"></div>
                                <div onMouseOver={() => setBody(true)} onMouseOut={() => setBody(false)} className="absolute h-32 w-full bg-opacity-30 bottom-10 "></div>
                                <div onMouseOver={() => setSize(true)} onMouseOut={() => setSize(false)} className="absolute h-10 w-full bg-opacity-30  bottom-1"></div>
                            </div>
                        </div>



                    </div>
                </section>

                <section className='bg-transparent'>
                    <h1 className='text-center' >How does JPEG mining work?</h1>
                    <div className='rounded-lg my-10 2xl:mx-80 bg-black bg-opacity-5 font-mono py-10 px-8 lg:px-52 text-sm sm:text-lg ' >
                        <p>This is an NFT, acting as a homage to Vitalik. In total there will be 2015 cards.</p>
                        <br></br>

                        <p>The card itself will be an SVG but the main image will be an embedded JPEG. A JPEG with the size of 16 MB, stored across 2015 contracts. This is the biggest JPEG stored on-chain.</p>
                        <br />
                        <p>The minters will upload 1/2015 chunk of approximately 11kB when minting. In return they will get the card, but as you might see in the image they will all be different even if based on the same image. </p>
                        <br />
                        <p>The point is that I used a tech called progressive JPEG which allows me to output a partially uploaded JPEG. The minter will get a JPEG using the data uploaded up to the time of his/her mint. The last mint will actually be the full image.</p>
                    </div>

                </section>

                <section className='bg-transparent'>
                    <h1 className='text-center' >Team</h1>
                    <div className='rounded-lg my-10 mx-80 bg-black bg-opacity-5' style={{ height: '433px' }}>

                    </div>
                </section>

            </div >
        </>

    )
}
