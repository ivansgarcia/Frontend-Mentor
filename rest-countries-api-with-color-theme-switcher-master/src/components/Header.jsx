import React from 'react';

const Header = ({ toggleTheme, theme }) => {
    return (
        <div className="fixed z-20 w-full bg-white py-4 text-sm tracking-tight text-light-text shadow-shad transition-colors dark:bg-dark-elements dark:text-white sm:py-3 sm:text-base">
            <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 sm:px-20">
                <span className="text-base font-extrabold sm:text-2xl">
                    Where in the world?
                </span>
                <button
                    onClick={toggleTheme}
                    className="background-custom -mr-4 flex items-center gap-2 rounded-lg p-4 font-semibold transition "
                >
                    {theme === '' ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 stroke-light-text dark:stroke-white"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 stroke-light-text dark:stroke-white"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                                d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                            />
                            <circle
                                cx="256"
                                cy="256"
                                r="80"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                            />
                        </svg>
                    )}
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default Header;
