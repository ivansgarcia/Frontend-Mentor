import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import productImageThumb from '../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../images/icon-delete.svg';

const CartContent = ({ cartQuantity, setCartQuantity, setShowCart, cartBtnRef }) => {
    const cartRef = useRef(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const clickAction = (e) => {
            (!cartRef.current.contains(e.target) && !cartBtnRef.current.contains(e.target) ) && setShowCart(false);
        };
        document.addEventListener('mousedown', clickAction);
        return () => {
            document.removeEventListener('mousedown', clickAction);
        };
    }, [setShowCart, cartBtnRef]);

    return (
        <div
            ref={cartRef}
            className="absolute px-6 py-8 top-20 z-10 w-[95%] flex flex-col gap-6 bg-white rounded-lg shadow-[0_10px_10px_0px_hsla(0,0%,0%,0.3)] sm:w-96 sm:right-[4%] sm:top-24"
        >
            <h5 className="font-bold -mt-2">Cart</h5>
            <hr className="-mx-6" />
            {!cartQuantity ? (
                <p>Your Cart is empty</p>
            ) : (
                <div className="flex justify-between items-center gap-3">
                    <Image
                        className="rounded"
                        src={productImageThumb}
                        alt="product"
                        width={50}
                        height="auto"
                    ></Image>
                    <div className="flex flex-col text-dark-grayish-blue">
                        <p>Fall Limited Edition Sneakers</p>
                        <p>
                            $125.00 x {cartQuantity}{' '}
                            <strong className="text-black ml-1">
                                ${(cartQuantity * 125.0).toFixed(2)}
                            </strong>
                        </p>
                    </div>
                    <button
                        onClick={() => setCartQuantity(cartQuantity - 1)}
                        className="active:opacity-50 sm:hover:opacity-50"
                    >
                        <Image
                            src={deleteIcon}
                            alt="delete"
                            width={14}
                            height="auto"
                        ></Image>
                    </button>
                </div>
            )}
            <button className="w-full py-4 text-white font-bold bg-orange-btn rounded-lg active:opacity-50 sm:hover:opacity-50">
                Checkout
            </button>
        </div>
    );
};

export default CartContent;
