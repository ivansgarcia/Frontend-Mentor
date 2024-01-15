import React, { useRef, useState } from 'react';
import Gallery from './Gallery';
import Image from 'next/image';
import plusIcon from '../images/icon-plus.svg';
import minusIcon from '../images/icon-minus.svg';
import CartContent from './CartContent';

const Product = ({ addToCart }) => {
    const [quantity, setQuantity] = useState(0);

    const tooltipRef = useRef(null);

    const sendToCart = () => {
        if (!quantity) {
            tooltipRef.current.classList.remove('hidden');
            setTimeout(() => {
                tooltipRef.current.classList.add('hidden');
            }, 1500);
        } else {
            addToCart(quantity);
            setQuantity(0);
        }
    };

    return (
        <div className="w-full flex flex-col items-center sm:flex-row sm:justify-evenly sm:gap-10 sm:-ml-4">
            <Gallery isModal={false} />
            <div className="sm:max-w-[480px]">
                <div className="p-6 flex flex-col gap-4 sm:gap-6 sm:-mt-10">
                    <h3 className="text-sm -mb-1 tracking-wider text-orange-btn font-bold">
                        SNEAKER COMPANY
                    </h3>
                    <h2 className="text-3xl font-bold sm:text-[46px] sm:mb-0 sm:leading-[46px]">
                        Fall Limited Edition Sneakers
                    </h2>
                    <p className="text-dark-grayish-blue sm:leading-7">
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole,
                        they&apos;ll withstand everything the weather can offer.
                    </p>
                </div>
                <div className="w-full px-4 flex flex-col items-center gap-4 sm:mt-1 sm:pr-4">
                    <div className="w-full flex items-center gap-4 sm:flex-wrap">
                        <h2 className="text-3xl font-bold">$125.00</h2>
                        <h3 className="font-bold py-0.5 text-orange-btn bg-pale-orange px-2 rounded">
                            50%
                        </h3>
                        <h4 className="ml-auto font-bold text-grayish-blue line-through sm:w-full sm:-mt-2">
                            $250.00
                        </h4>
                    </div>
                    <div className="w-full flex flex-col gap-4 sm:flex-row sm:gap-4 sm:mt-3">
                        <div className="w-full p-2 flex justify-between items-center bg-light-grayish-blue sm:w-[52%] rounded-lg">
                            <button
                                className="active:opacity-50 p-2 sm:hover:opacity-50 transition-opacity"
                                onClick={() =>
                                    quantity > 0 && setQuantity(quantity - 1)
                                }
                            >
                                <Image
                                    src={minusIcon}
                                    alt="minus"
                                    width={15}
                                    height="auto"
                                />
                            </button>
                            <span className="font-bold">
                                {quantity}
                            </span>
                            <button
                                className="active:opacity-50 p-2 sm:hover:opacity-50 transition-opacity"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <Image
                                    src={plusIcon}
                                    alt="plus"
                                    width={15}
                                    height="auto"
                                />
                            </button>
                        </div>
                        <button
                            onClick={() => sendToCart()}
                            className="w-full relative py-4 font-bold flex justify-center items-center gap-2 bg-orange-btn text-white rounded-lg shadow-[0_10px_10px_0px_hsla(26,100%,55%,0.3)] active:bg-opacity-50 sm:hover:bg-opacity-50 transition-opacity"
                        >
                            <div ref={tooltipRef} className="animate-[scale-in-center_0.15s] absolute hidden py-2 px-4 -top-12 bg-pale-orange rounded text-orange-btn">
                                Select number of items
                            </div>
                            <svg
                                className="scale-[0.8]"
                                width="22"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                    fill="#FFFFFF"
                                    fillRule="nonzero"
                                />
                            </svg>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
