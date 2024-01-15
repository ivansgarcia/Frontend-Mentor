import React, { useRef } from 'react';
import Menu from './Menu';
import Image from 'next/image';
import avatar from '../images/image-avatar.png';
import logo from '../images/logo.svg';
import CartContent from './CartContent';

const Header = ({ cartQuantity, setCartQuantity, showCart, setShowCart }) => {
    const cartBtnRef = useRef(null);

    return (
        <>
            <div className="w-full h-full p-5 flex items-center gap-4 sm:py-0 sm:px-0">
                <Menu />
                <Image className="pb-1 sm:w-[145px]" src={logo} alt="logo" />
                <ul className="w-full h-[114px] text-[15px] hidden gap-[4.5%] px-10 items-end text-dark-grayish-blue sm:flex">
                    <li className="h-[68px] cursor-pointer hover:text-black hover:border-b-4 border-orange-btn transition-colors">Collections</li>
                    <li className="h-[68px] cursor-pointer hover:text-black hover:border-b-4 border-orange-btn">Men</li>
                    <li className="h-[68px] cursor-pointer hover:text-black hover:border-b-4 border-orange-btn">Women</li>
                    <li className="h-[68px] cursor-pointer hover:text-black hover:border-b-4 border-orange-btn">About</li>
                    <li className="h-[68px] cursor-pointer hover:text-black hover:border-b-4 border-orange-btn">Contact</li>
                </ul>
                <button
                    ref={cartBtnRef}
                    onClick={() => setShowCart(!showCart)}
                    className="group w-9 relative ml-auto transition-colors"
                >
                    <svg
                        width="22"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="group-active:fill-black sm:group-hover:fill-black"
                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            fill="#69707D"
                            fillRule="nonzero"
                        />
                    </svg>
                    {!!cartQuantity && (
                        <span className="px-2 absolute -top-1.5 text-[10px] leading-[14px] text-white bg-orange-btn rounded-lg">
                            {cartQuantity}
                        </span>
                    )}
                </button>
                <Image
                    className="sm:w-[70px] sm:ml-6 rounded-full cursor-pointer active:outline sm:hover:outline outline-2 outline-orange-btn"
                    src={avatar}
                    alt="avatar"
                    width={24}
                    height="auto"
                />
            </div>
            {showCart && (
                <CartContent
                    cartBtnRef={cartBtnRef}
                    cartQuantity={cartQuantity}
                    setCartQuantity={setCartQuantity}
                    setShowCart={setShowCart}
                />
            )}
            <hr className="w-full mx-5 hidden sm:block sm:mb-[66px]" />
        </>
    );
};

export default Header;
