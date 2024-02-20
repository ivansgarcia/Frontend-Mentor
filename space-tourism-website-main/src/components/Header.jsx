import React from 'react';
import Menu from './Menu';
import { Link } from 'gatsby';
import BigMenu from './BigMenu';
import logo from '../images/shared/logo.svg';

const Header = ({ background }) => {
    return (
        <header className="flex h-[75px] w-full max-w-[1440px] items-center justify-between md:h-[96px] lg:mt-10 lg:pl-4">
            <Link
                to="/"
                className="m-4 rounded-full bg-white md:ml-8"
                aria-label="home"
            >
                <img className="md:w-12" src={logo} alt="logo" width={40} />
            </Link>
            <Menu background={background} />
            <hr className="z-10 -mr-12 ml-12 flex-1 border-t-2 border-separator max-lg:hidden" />
            <BigMenu background={background} />
        </header>
    );
};

export default Header;
