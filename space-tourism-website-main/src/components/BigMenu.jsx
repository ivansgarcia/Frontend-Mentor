import { Link } from 'gatsby';
import React from 'react';

const BigMenu = ({ background }) => {
    return (
        <nav className="h-full text-sm max-md:hidden">
            <ul className="flex h-24 items-center justify-evenly gap-16 bg-white bg-opacity-[4%] px-12 pt-2 font-barlow-condensed tracking-widest text-white backdrop-blur-3xl lg:pl-36 lg:pr-48">
                <li className="h-full">
                    <Link
                        className={`flex h-full items-center gap-2 border-b-[3px] border-transparent transition-all ${
                            background === 'home'
                                ? 'cursor-default border-white/100'
                                : 'lg:hover:border-white/50'
                        }`}
                        to="/"
                    >
                        <span className="font-bold max-lg:hidden">00</span>HOME
                    </Link>
                </li>
                <li className="h-full">
                    <Link
                        className={`flex h-full items-center gap-2 border-b-[3px] border-transparent transition-all ${
                            background === 'destination'
                                ? 'cursor-default border-white/100'
                                : 'lg:hover:border-white/50'
                        }`}
                        to="/destination"
                    >
                        <span className="font-bold max-lg:hidden">01</span>
                        DESTINATION
                    </Link>
                </li>
                <li className="h-full">
                    <Link
                        className={`flex h-full items-center gap-2 border-b-[3px] border-transparent transition-all ${
                            background === 'crew'
                                ? 'cursor-default border-white/100'
                                : 'lg:hover:border-white/50'
                        }`}
                        to="/crew"
                    >
                        <span className="font-bold max-lg:hidden">02</span>CREW
                    </Link>
                </li>
                <li className="h-full">
                    <Link
                        className={`flex h-full items-center gap-2 border-b-[3px] border-transparent transition-all ${
                            background === 'technology'
                                ? 'cursor-default border-white/100'
                                : 'lg:hover:border-white/50'
                        }`}
                        to="/technology"
                    >
                        <span className="font-bold max-lg:hidden">03</span>
                        TECHNOLOGY
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default BigMenu;
