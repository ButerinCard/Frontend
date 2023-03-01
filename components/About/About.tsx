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
                    <div className='rounded-lg my-10 mx-80 bg-black bg-opacity-5' style={{ height: '433px' }}>
                        <p></p>
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
