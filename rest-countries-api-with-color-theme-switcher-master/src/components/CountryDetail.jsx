import React, { useState, useEffect } from 'react';
import { findByCode } from '../controllers/CountryListController';

const CountryDetail = ({ country, setShowCountryDetail }) => {
    const {
        flags,
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders,
    } = country;

    const [borderList, setBorderList] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        borders &&
            findByCode(borders)
                .then((r) => setBorderList(r.data))
                .catch((e) => console.log(e));
    }, [borders]);

    return (
        <div className="flex h-full min-h-screen w-full flex-col bg-light-background px-7 py-32 text-light-text transition-colors dark:bg-dark-background dark:text-white sm:px-0">
            <div className="mx-auto w-full max-w-[1440px] sm:px-16">
                <button
                    onClick={() => setShowCountryDetail(null)}
                    className="background-custom mb-4 flex items-center gap-2 self-start rounded px-8 py-2 text-light-text shadow-shad transition-colors dark:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 text-light-text dark:text-white"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="48"
                            d="M244 400L100 256l144-144M120 256h292"
                        />
                    </svg>
                    Back
                </button>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <img
                        src={flags.png}
                        alt={flags.alt}
                        className="my-10 aspect-flag max-w-[565px] sm:w-1/2"
                    />
                    <div className="sm:p-8 sm:w-[48%]">
                        <h2 className="mb-6 text-xl font-extrabold sm:text-3xl">
                            {name.common}
                        </h2>
                        <div className="flex flex-col items-start sm:flex-row sm:gap-32">
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold">
                                    Native Name:{' '}
                                </span>
                                {
                                    Object.values(name.nativeName)[
                                        Object.values(name.nativeName).length -
                                            1
                                    ].common
                                }
                                <p className="">
                                    <span className="font-semibold">
                                        Population:{' '}
                                    </span>
                                    {population}
                                </p>
                                <p className="">
                                    <span className="font-semibold">
                                        Region:{' '}
                                    </span>
                                    {region}
                                </p>
                                <p className="">
                                    <span className="font-semibold">
                                        Sub Region:{' '}
                                    </span>
                                    {subregion}
                                </p>
                                <p className="">
                                    <span className="font-semibold">
                                        Capital:{' '}
                                    </span>
                                    {capital}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="mt-12 sm:mt-0">
                                    <span className="font-semibold">
                                        Top Level Domain:{' '}
                                    </span>
                                    {tld}
                                </p>
                                <p className="">
                                    <span className="font-semibold">
                                        Currencies:{' '}
                                    </span>
                                    {Object.values(currencies)[0].name}
                                </p>
                                <p className="">
                                    <span className="font-semibold">
                                        Languages:{' '}
                                    </span>
                                    {Object.values(languages).join(', ')}
                                </p>
                            </div>
                        </div>
                        {!!borderList.length && (
                            <div className="mt-12 flex flex-col sm:flex-row ">
                                <h3 className="min-w-36 font-semibold">
                                    Border Countries:
                                </h3>
                                <ul className="mt-4 flex flex-wrap  gap-2 sm:mt-0">
                                    {borderList.map((border, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setShowCountryDetail(border)
                                            }
                                            className="background-custom rounded px-8 py-1.5 text-sm shadow-shad"
                                        >
                                            {border.name.common}
                                        </button>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;
