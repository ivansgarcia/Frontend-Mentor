import { Link } from 'gatsby';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = ({ background }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav className="m-6 md:hidden">
            <AnimatePresence
                initial={false}
                wait={true}
                onExitComplete={() => null}
            >
                {expanded && (
                    <motion.div
                        initial={{ x: 300 }}
                        exit={{ x: 300 }}
                        animate={{ x: 0 }}
                        transition={{ ease: 'linear', duration: '0.3' }}
                        className={`fixed right-0 top-0 z-10 h-screen w-[254px] px-6 py-8 font-barlow-condensed text-lg text-white backdrop-blur-xl`}
                    >
                        <button
                            aria-label="close"
                            className="float-right"
                            onClick={() => setExpanded(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                            >
                                <g fill="#D0D6F9" fillRule="evenodd">
                                    <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                                    <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                                </g>
                            </svg>
                        </button>
                        <ul className="mt-12 text-base tracking-[2.7px] font-barlow-condensed font-normal">
                            <li>
                                <Link
                                    to="/"
                                    className={`${
                                        background === 'home' && 'opacity-50'
                                    } menu-link`}
                                >
                                    <span className="font-bold">00</span>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/destination"
                                    className={`${
                                        background === 'destination' &&
                                        'opacity-50'
                                    } menu-link`}
                                >
                                    <span className="font-bold">01</span>
                                    DESTINATION
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/crew"
                                    className={`${
                                        background === 'crew' && 'opacity-50'
                                    } menu-link`}
                                >
                                    <span className="font-bold">02</span>
                                    CREW
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/technology"
                                    className={`${
                                        background === 'technology' &&
                                        'opacity-50'
                                    } menu-link`}
                                >
                                    <span className="font-bold">03</span>
                                    TECHNOLOGY
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            {!expanded && (
                <button
                    aria-label="show menu"
                    onClick={() => setExpanded(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="21"
                    >
                        <g fill="#D0D6F9" fillRule="evenodd">
                            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                        </g>
                    </svg>
                </button>
            )}
        </nav>
    );
};

export default Menu;
