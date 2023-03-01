import React from 'react'
import background from '../../public/images/background.png'
import aboutCard from '../../public/images/aboutCard.png';
import Image from 'next/image';
export default function About() {
    return (
        <>
            {/* About Sections */}
            < div className='font-PS2 py-10' style={{ backgroundImage: `url(${background.src})` }
            }>
                <section className='bg-transparent'>


                    <h1 className='text-center' >About</h1>

                    <div className='rounded-lg my-10 mx-80 bg-black bg-opacity-5 flex flex-col items-center py-5' >
                        <h2 className='font-mono mt-2 mb-2'>(Hover over areas to learn more)</h2>
                        <Image src={aboutCard} alt='About Card' width={300} height={420} />
                    </div>
                </section>

                <section className='bg-transparent'>
                    <h1 className='text-center' >How does JPEG mining work?</h1>
                    <div className='rounded-lg my-10 mx-80 bg-black bg-opacity-5 font-mono py-10 px-52 text-lg ' style={{ height: '433px' }}>
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
                    <h1 className='text-center' >About</h1>
                    <div className='rounded-lg my-10 mx-80 bg-black bg-opacity-5' style={{ height: '433px' }}>

                    </div>
                </section>

            </div >
        </>

    )
}
