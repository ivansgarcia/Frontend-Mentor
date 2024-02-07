import React, { useEffect, useRef, useState } from 'react';

const Navigator = ({ filterBy }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [region, setRegion] = useState(null);
    const [expandDropdown, setExpandDropdown] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 200) {
            setCollapsed(true);
            setExpandDropdown(false);
        }

        window.scrollY < 100 && setCollapsed(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const filterRegion = (region) => {
        setRegion(region);
        filterBy(region ? region : 'all', nameRef.current.value);
        setExpandDropdown(false);
    };

    const nameRef = useRef(null);

    return (
        <div
            className={`fixed left-0 top-[72px] z-10 flex w-full flex-col justify-between bg-light-background p-4 pb-0 sm:px-0 transition-all dark:bg-dark-background sm:h-28 sm:flex-row sm:items-center sm:justify-center 
        ${collapsed ? 'h-14 bg-opacity-0 dark:bg-opacity-0' : 'h-56 bg-opacity-80 dark:bg-opacity-80'}
            `}
        >
            <div
                className={`flex h-full w-full max-w-[1440px] flex-col justify-around sm:flex-row sm:items-center sm:justify-between sm:px-20`}
            >
                {!collapsed ? (
                    <>
                        <div className="background-custom flex h-14 w-full max-w-[450px] cursor-text items-center gap-8 rounded px-8 py-1 shadow-shad transition-colors sm:mt-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 fill-light-input dark:fill-light-background"
                                viewBox="0 0 512 512"
                            >
                                <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
                            </svg>
                            <input
                                onChange={() =>
                                    filterBy(
                                        region ? region : 'all',
                                        nameRef.current.value
                                    )
                                }
                                name="nameFilter"
                                ref={nameRef}
                                type="search"
                                className="w-full py-4 outline-none transition-colors dark:bg-dark-elements dark:text-white sm:h-4"
                                placeholder="Search for a country..."
                            />
                        </div>
                        <button
                            onClick={() => setExpandDropdown(!expandDropdown)}
                            className="background-custom flex w-52 items-center justify-between rounded px-6 py-4 font-semibold text-light-text shadow-shad transition dark:text-white sm:h-14"
                        >
                            {region ?? 'Filter by Region...'}
                            {expandDropdown ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-4"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="48"
                                        d="M112 328l144-144 144 144"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="48"
                                        d="M112 184l144 144 144-144"
                                    />
                                </svg>
                            )}
                        </button>
                        <ul
                            className={`${
                                !expandDropdown && 'hidden'
                            } absolute top-48 w-52 cursor-pointer self-start rounded font-semibold  text-light-text shadow-shad dark:text-white sm:right-48 sm:top-[100px]`}
                        >
                            <li>
                                <button
                                    onClick={() => filterRegion(null)}
                                    className="w-52 bg-white px-8 py-2 pt-6 text-left transition hover:brightness-95 dark:bg-dark-elements"
                                >
                                    All
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => filterRegion('America')}
                                    className="w-52 bg-white px-8 py-2 text-left transition hover:brightness-95 dark:bg-dark-elements"
                                >
                                    America
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => filterRegion('Asia')}
                                    className="w-52 bg-white px-8 py-2 text-left transition hover:brightness-95 dark:bg-dark-elements"
                                >
                                    Asia
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => filterRegion('Europe')}
                                    className="w-52 bg-white px-8 py-2 text-left transition hover:brightness-95 dark:bg-dark-elements"
                                >
                                    Europe
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => filterRegion('Oceania')}
                                    className="w-52 bg-white px-8 py-2 pb-6 text-left transition hover:brightness-95 dark:bg-dark-elements"
                                >
                                    Oceania
                                </button>
                            </li>
                        </ul>
                    </>
                ) : (
                    <button
                        onClick={() => setCollapsed(false)}
                        className="background-custom flex h-12 w-36 items-center justify-center gap-4 rounded shadow-shad transition sm:-mt-12"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 fill-light-text transition dark:fill-white"
                            viewBox="0 0 512 512"
                        >
                            <path d="M16 120h480v48H16zM96 232h320v48H96zM192 344h128v48H192z" />
                        </svg>
                        <span className="font-semibold text-light-text transition dark:text-white">
                            Filter
                        </span>
                    </button>
                )}
            </div>
            <button
                aria-label="scroll to top"
                onClick={() => window.scrollTo(0, 0)}
                className={`${
                    collapsed && 'scale-100'
                } background-custom fixed bottom-4 right-4 flex scale-0 rounded-full shadow-shad transition`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-12 p-2 transition"
                >
                    <path
                        className="stroke-light-text dark:stroke-white"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="48"
                        d="M112 328l144-144 144 144"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Navigator;
