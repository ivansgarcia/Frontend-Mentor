import React, { useEffect, useState } from 'react';
import menuIcon from '../images/icon-menu.svg';
import menuCloseIcon from '../images/icon-close.svg';
import Image from 'next/image';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        showMenu ? document.body.classList.add('overflow-y-hidden')
            :
            document.body.classList.remove('overflow-y-hidden');
    }, [showMenu])

    return (
        <div
            className={`z-20 flex flex-col sm:hidden ${
                showMenu &&
                'w-screen h-screen bg-black top-0 left-0 z-20 bg-opacity-75 absolute overscroll-contain'
            }`}
        >
            <div
                className={`cursor-pointer ${showMenu && 'w-72 h-full bg-white px-6 py-7'}`}
            >
                <Image
                    className="active:opacity-50"
                    onClick={() => setShowMenu(!showMenu)}
                    src={showMenu ? menuCloseIcon : menuIcon}
                    alt="menu"
                    width={15}
                    height="auto"
                ></Image>
            {showMenu && (
                <ul className="font-bold text-xl p-6 flex flex-col gap-4">
                    <li className="active:opacity-50">Collections</li>
                    <li className="active:opacity-50">Men</li>
                    <li className="active:opacity-50">Women</li>
                    <li className="active:opacity-50">About</li>
                    <li className="active:opacity-50">Contact</li>
                </ul>
            )}
            </div>
        </div>
    );
};

export default Menu;
