import React, { useState } from 'react';
import Layout from '../components/Layout';
import data from '../utils/data.json';
import crew1Image from '../images/crew/image-douglas-hurley.png';
import crew2Image from '../images/crew/image-mark-shuttleworth.png';
import crew3Image from '../images/crew/image-victor-glover.png';
import crew4Image from '../images/crew/image-anousheh-ansari.png';

const Crew = () => {
    const [shipmate, setShipmate] = useState(0);

    const info = data.crew;
    const images = [crew1Image, crew2Image, crew3Image, crew4Image];

    return (
        <Layout background="crew">
            <main className="main-mobile flex-1 gap-8 p-8 pt-2 md:mt-6 md:justify-between md:overflow-hidden md:pb-0 md:pt-0 lg:mt-0 lg:pt-0">
                <section className="flex h-full flex-1 flex-col items-center justify-between gap-8 md:my-8 md:justify-around lg:ml-[10%] lg:w-[45%] lg:items-start lg:justify-around lg:self-start lg:py-4">
                    <h3 className="section-title md:self-start lg:justify-self-start">
                        <span className="font-bold opacity-25">02</span>
                        MEET YOUR CREW
                    </h3>
                    <figure
                        className={`h-[223px] w-full overflow-hidden md:relative md:-bottom-16 md:order-3 md:-mt-12 md:h-[532px] md:w-auto lg:absolute lg:bottom-0 lg:h-[80%] ${!shipmate ? 'lg:max-h-[75%]' : 'lg:max-h-[75%]'} lg:left-[55%] lg:w-auto lg:max-w-[40%]`}
                    >
                        <img
                            className={`mx-auto h-full w-full object-contain object-bottom`}
                            src={images[shipmate]}
                            alt="crew member"
                            width={250}
                        />
                        <hr className="mt-auto w-full border-t border-separator md:hidden" />
                    </figure>
                    <ul className="flex gap-5 md:order-2 lg:gap-6">
                        <li>
                            <button
                                onClick={() => setShipmate(0)}
                                className={`crew-nav ${
                                    shipmate === 0
                                        ? 'cursor-default opacity-100'
                                        : 'opacity-[0.175] lg:hover:opacity-50'
                                }`}
                                aria-label="shipmate 1"
                            ></button>
                        </li>
                        <li>
                            <button
                                onClick={() => setShipmate(1)}
                                className={`crew-nav ${
                                    shipmate === 1
                                        ? 'cursor-default opacity-100'
                                        : 'opacity-[0.175] lg:hover:opacity-50'
                                }`}
                                aria-label="shipmate 2"
                            ></button>
                        </li>
                        <li>
                            <button
                                onClick={() => setShipmate(2)}
                                className={`crew-nav ${
                                    shipmate === 2
                                        ? 'cursor-default opacity-100'
                                        : 'opacity-[0.175] lg:hover:opacity-50'
                                }`}
                                aria-label="shipmate 3"
                            ></button>
                        </li>
                        <li>
                            <button
                                onClick={() => setShipmate(3)}
                                className={`crew-nav ${
                                    shipmate === 3
                                        ? 'cursor-default opacity-100'
                                        : 'opacity-[0.175] lg:hover:opacity-50'
                                }`}
                                aria-label="shipmate 4"
                            ></button>
                        </li>
                    </ul>
                    <section className="mb-16 flex flex-col gap-1 text-center md:mb-0 md:gap-4 lg:gap-8 lg:text-left">
                        <h2 className="font-bellefair opacity-50 md:text-2xl lg:text-[32px]">
                            {info[shipmate].role.toUpperCase()}
                        </h2>
                        <h1 className="font-bellefair text-2xl md:text-[40px] lg:text-[56px] lg:leading-[56px]">
                            {info[shipmate].name.toUpperCase()}
                        </h1>
                        <p className="section-p h-36 pt-4 text-[15px] md:h-auto md:px-14 md:text-base lg:px-0 lg:pr-[30%] lg:text-left lg:text-lg">
                            {info[shipmate].bio}
                        </p>
                    </section>
                </section>
            </main>
        </Layout>
    );
};

export default Crew;

export const Head = () => (
    <>
        <html lang="en"></html>
        <title>Space Travel Crew</title>;
        <meta name="description" content="Space travels crew" />
    </>
);
