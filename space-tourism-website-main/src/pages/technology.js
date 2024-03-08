import React, { useState } from 'react';
import Layout from '../components/Layout';
import data from '../utils/data.json';

const Technology = () => {
    const technologyImages = [
        'bg-technology1',
        'bg-technology2',
        'bg-technology3',
    ];
    const [technology, setTechnology] = useState(0);

    const info = data.technology;

    return (
        <Layout background="technology">
            <main className="main-mobile flex-1 gap-8 md:py-10 lg:ml-[10%] lg:w-1/2 lg:justify-center lg:gap-0">
                <h3 className="section-title md:ml-8 md:self-start lg:ml-0">
                    <span className="font-bold opacity-25">03</span>SPACE LAUNCH
                    101
                </h3>
                <div
                    className={`relative h-[170px] w-full overflow-hidden bg-cover bg-bottom bg-no-repeat md:h-[310px] md:w-full lg:absolute lg:right-0 lg:top-[23%] lg:h-[527px] lg:w-[515px] lg:max-w-[40%] lg:bg-contain lg:bg-center ${technologyImages[technology]}`}
                ></div>
                <section className="flex flex-col items-center gap-4 md:gap-12 lg:my-8 lg:flex-1 lg:flex-row lg:gap-16">
                    <ul className="flex gap-4 font-bellefair max-md:mb-[5%] md:text-2xl lg:flex-col lg:gap-8">
                        <li>
                            <button
                                onClick={() => setTechnology(0)}
                                className={`technology-nav lg:pt-1 lg:hover:border-opacity-100 ${
                                    technology === 0
                                        ? 'cursor-default bg-white text-dark lg:hover:bg-white'
                                        : 'text-white'
                                }`}
                            >
                                1
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setTechnology(1)}
                                className={`technology-nav lg:pt-1 lg:hover:border-opacity-100 ${
                                    technology === 1
                                        ? 'cursor-default bg-white text-dark lg:hover:bg-white'
                                        : 'text-white'
                                }`}
                            >
                                2
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setTechnology(2)}
                                className={`technology-nav lg:pt-1 lg:hover:border-opacity-100 ${
                                    technology === 2
                                        ? 'cursor-default bg-white text-dark lg:hover:bg-white'
                                        : 'text-white'
                                }`}
                            >
                                3
                            </button>
                        </li>
                    </ul>
                    <section className="flex flex-col text-center md:gap-2 lg:gap-4 lg:text-left">
                        <h4 className="font-barlow-condensed text-sm tracking-[2.36px] text-text-grey md:text-base md:tracking-[2.7px]">
                            THE TERMINOLOGY...
                        </h4>
                        <h1 className="mt-2 font-bellefair text-2xl md:text-[40px] lg:mt-0 lg:text-[56px] lg:leading-[56px]">
                            {info[technology].name.toUpperCase()}
                        </h1>
                        <p className="section-p mx-8 mb-24 h-36 py-4 text-[15px] md:mx-44 md:mb-auto md:h-auto lg:mx-0 lg:min-h-52  lg:pr-32 lg:text-left lg:text-lg">
                            {info[technology].description}
                        </p>
                    </section>
                </section>
            </main>
        </Layout>
    );
};

export default Technology;

export const Head = () => (
    <>
        <html lang="en"></html>
        <title>Space Travel Technologies</title>;
        <meta name="description" content="Space travels technologies" />
    </>
);
