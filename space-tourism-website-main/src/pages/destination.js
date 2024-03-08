import React, { useState } from 'react';
import Layout from '../components/Layout';
import moonImage from '../images/destination/image-moon.png';
import marsImage from '../images/destination/image-mars.png';
import europaImage from '../images/destination/image-europa.png';
import titanImage from '../images/destination/image-titan.png';
import data from '../utils/data.json';

const Destination = () => {
    const [target, setTarget] = useState(0);

    const info = data.destinations;
    const images = [moonImage, marsImage, europaImage, titanImage];

    return (
        <Layout background="destination">
            <main className="main-mobile flex-1 gap-4 p-8 pt-2 md:justify-between md:pt-10 lg:flex-row lg:justify-between lg:px-32 lg:p-0 justify-self-end">
                <section className="flex h-full w-full flex-col items-center justify-between gap-4 md:gap-8 lg:w-1/2">
                    <h3 className="section-title md:self-start">
                        <span className="font-bold opacity-25 lg:text-[28px]">
                            01
                        </span>
                        PICK YOUR DESTINATION
                    </h3>
                    <img
                        className="m-4 w-[170px] md:w-[300px] lg:w-[445px] lg:self-center lg:p-0 lg:m-0"
                        src={images[target]}
                        alt="moon"
                        width={200}
                    />
                </section>
                <section className="flex flex-col items-center justify-around gap-4 lg:m-4  lg:w-2/5 lg:items-start">
                    <ul className="flex h-[34px] justify-evenly gap-6 font-barlow-condensed text-[14px] text-text-grey md:gap-[34px] md:text-base">
                        <li>
                            <button
                                className={`border-b-[3px] border-transparent pb-2 tracking-[2.36px] transition-all md:tracking-[2.7px] ${
                                    target === 0
                                        ? 'border-white text-white'
                                        : 'text-text-grey lg:hover:border-white/50'
                                }`}
                                onClick={() => setTarget(0)}
                            >
                                MOON
                            </button>
                        </li>
                        <li>
                            <button
                                className={`border-b-[3px] border-transparent pb-2 tracking-[2.36px] transition-all md:tracking-[2.7px] ${
                                    target === 1
                                        ? 'border-white text-white'
                                        : 'text-text-grey lg:hover:border-white/50'
                                }`}
                                onClick={() => setTarget(1)}
                            >
                                MARS
                            </button>
                        </li>
                        <li>
                            <button
                                className={`border-b-[3px] border-transparent pb-2 tracking-[2.36px] transition-all md:tracking-[2.7px] ${
                                    target === 2
                                        ? 'border-white text-white'
                                        : 'text-text-grey lg:hover:border-white/50'
                                }`}
                                onClick={() => setTarget(2)}
                            >
                                EUROPA
                            </button>
                        </li>
                        <li>
                            <button
                                className={`border-b-[3px] border-transparent pb-2 tracking-[2.36px] transition-all md:tracking-[2.7px] ${
                                    target === 3
                                        ? 'border-white text-white'
                                        : 'text-text-grey lg:hover:border-white/50'
                                }`}
                                onClick={() => setTarget(3)}
                            >
                                TITAN
                            </button>
                        </li>
                    </ul>
                    <h1 className="-mb-4 font-bellefair text-[56px] md:text-[80px] lg:text-[100px]">
                        {info[target].name.toUpperCase()}
                    </h1>
                    <p className="section-p w-full text-[15px] md:w-auto md:px-16 md:text-base lg:mb-4 lg:w-[92%] lg:px-0 lg:text-left lg:text-[18px]">
                        {info[target].description}
                    </p>
                    <hr className="my-4 w-full border-t border-separator md:my-8 md:mb-8 lg:my-4" />
                    <section className="mb-6 flex flex-col justify-center gap-0 md:flex-row md:gap-32 lg:gap-16">
                        <div className="text-center text-[14px]">
                            <h3 className="font-barlow-condensed tracking-[2.36px] text-text-grey lg:text-left">
                                AVG. DISTANCE
                            </h3>
                            <h2 className="my-2 font-bellefair text-[28px] text-white">
                                {info[target].distance.toUpperCase()}
                            </h2>
                        </div>
                        <div className="text-center text-[14px]">
                            <h3 className="font-barlow-condensed tracking-[2.36px] text-text-grey lg:text-left">
                                EST. TRAVEL TIME
                            </h3>
                            <h2 className="my-2 font-bellefair text-[28px] text-white">
                                {info[target].travel.toUpperCase()}
                            </h2>
                        </div>
                    </section>
                </section>
            </main>
        </Layout>
    );
};

export default Destination;

export const Head = () => (
    <>
        <html lang="en"></html>
        <title>Space Travel Distinations</title>;
        <meta name="description" content="Space travels detinations" />
    </>
);
