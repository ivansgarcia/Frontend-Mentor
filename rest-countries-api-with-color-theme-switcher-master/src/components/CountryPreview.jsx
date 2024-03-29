import React from 'react';

const CountryPreview = ({ country, setShowCountryDetail }) => {
    const { name, population, capital, region, flags } = country;

    return (
        <li>
            <button
                onKeyDown={(e) =>
                    e.key === 'Enter' && setShowCountryDetail(country)
                }
                className="w-full max-w-[350px] overflow-hidden rounded-lg bg-white text-light-text shadow-shad transition-colors hover:brightness-95 dark:bg-dark-elements dark:text-white dark:hover:brightness-110 sm:h-[335px] sm:w-[265px] sm:rounded"
                aria-label={name.common}
                onClick={() => setShowCountryDetail(country)}
            >
                <img
                    loading="lazy"
                    src={flags.png}
                    className="object-fit aspect-flag w-full sm:h-40"
                    alt="flag"
                />
                <div className="px-6 pb-12 pt-3 text-left sm:h-48 sm:pb-6">
                    <h2 className="sm:texl-lg my-3 text-xl font-extrabold sm:my-2.5">
                        {name.common.length > 34
                            ? name.common.substring(0, 34) + '...'
                            : name.common}
                    </h2>
                    <p className="my-0.5 sm:mt-4 sm:text-sm">
                        <span className="font-semibold">Population: </span>
                        {population.toLocaleString('en-US')}
                    </p>
                    <p className="my-0.5 sm:text-sm">
                        <span className="font-semibold">Region: </span>
                        {region}
                    </p>
                    <p className="my-0.5 sm:text-sm">
                        <span className="font-semibold">Capital: </span>
                        {capital}
                    </p>
                </div>
            </button>
        </li>
    );
};

export default CountryPreview;
