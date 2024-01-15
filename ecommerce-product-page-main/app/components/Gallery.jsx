'use client';

import React, { useState } from 'react';
import imgProduct1 from '../images/image-product-1.jpg';
import imgProduct2 from '../images/image-product-2.jpg';
import imgProduct3 from '../images/image-product-3.jpg';
import imgProduct4 from '../images/image-product-4.jpg';
import imgProduct1Thumb from '../images/image-product-1-thumbnail.jpg';
import imgProduct2Thumb from '../images/image-product-2-thumbnail.jpg';
import imgProduct3Thumb from '../images/image-product-3-thumbnail.jpg';
import imgProduct4Thumb from '../images/image-product-4-thumbnail.jpg';
import iconPrevious from '../images/icon-previous.svg';
import iconNext from '../images/icon-next.svg';
import Image from 'next/image';
import ImageModal from './ImageModal';

const Gallery = ({ isModal, defaultSelected }) => {
    const images = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
    const [zoom, setZoom] = useState(false);

    const [productImage, setProductImage] = useState(defaultSelected ?? 0);

    const nextImage = () => {
        productImage === 3
            ? setProductImage(0)
            : setProductImage(productImage + 1);
    };

    const previousImage = () => {
        productImage === 0
            ? setProductImage(3)
            : setProductImage(productImage - 1);
    };

    return (
        <div
            className={`flex flex-col gap-6 ${
                !isModal ? 'sm:p-6 sm:max-w-[492px]' : 'sm:max-w-[545px]'
            }`}
        >
            {zoom && <ImageModal setZoom={setZoom} defaultSelected={productImage} />}
            <div className="relative">
                <Image
                    onClick={() => setZoom(true)}
                    className="sm:rounded-xl sm:cursor-zoom-in"
                    src={images[productImage]}
                    alt="product"
                />
                <div
                    className={`w-full h-full p-3 absolute flex justify-between items-center top-0 ${
                        !isModal && 'sm:hidden'
                    }`}
                >
                    <button
                        onClick={previousImage}
                        className={`group rounded-full flex justify-center items-center  bg-white scale-[0.85] w-12 h-12 ${
                            isModal && '-ml-9 scale-[1.15]'
                        }`}
                    >
                        <svg
                            width="16"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="group-active:stroke-orange-btn sm:group-hover:stroke-orange-btn transition-colors"
                                d="M11 1 3 9l8 8"
                                stroke="#1D2026"
                                strokeWidth="3"
                                fill="none"
                                fillRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={nextImage}
                        className={`group rounded-full flex justify-center items-center scale-[0.85] bg-white w-12 h-12 ${
                            isModal && '-mr-9 scale-[1.15]'
                        }`}
                    >
                        <svg
                            width="13"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="group-active:stroke-orange-btn sm:group-hover:stroke-orange-btn transition-colors"
                                d="m2 1 8 8-8 8"
                                stroke="#1D2026"
                                strokeWidth="3"
                                fill="none"
                                fillRule="nonzero"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="justify-between gap-8 hidden sm:flex">
                <figure
                    className={`w-full rounded-xl cursor-pointer bg-white transition-opacity ${
                        productImage === 0 && 'outline outline-orange-btn'
                    }`}
                >
                    <Image
                        onClick={() => setProductImage(0)}
                        src={imgProduct1Thumb}
                        className={`rounded-xl hover:opacity-50 ${
                            productImage === 0 && 'opacity-50'
                        }`}
                        alt="image 1"
                    />
                </figure>
                <figure
                    className={`w-full rounded-xl cursor-pointer bg-white transition-opacity ${
                        productImage === 1 && 'outline outline-orange-btn'
                    }`}
                >
                    <Image
                        onClick={() => setProductImage(1)}
                        src={imgProduct2Thumb}
                        className={`rounded-xl hover:opacity-50 ${
                            productImage === 1 && 'opacity-50'
                        }`}
                        alt="image 2"
                    />
                </figure>
                <figure
                    className={`w-full rounded-xl cursor-pointer bg-white ${
                        productImage === 2 && 'outline outline-orange-btn'
                    }`}
                >
                    <Image
                        onClick={() => setProductImage(2)}
                        src={imgProduct3Thumb}
                        className={`rounded-xl hover:opacity-50 transition-opacity ${
                            productImage === 2 && 'opacity-50'
                        }`}
                        alt="image 3"
                    />
                </figure>
                <figure
                    className={`w-full rounded-xl cursor-pointer bg-white transition-opacity ${
                        productImage === 3 && 'outline outline-orange-btn'
                    }`}
                >
                    <Image
                        onClick={() => setProductImage(3)}
                        src={imgProduct4Thumb}
                        className={`rounded-xl hover:opacity-50 ${
                            productImage === 3 && 'opacity-50'
                        }`}
                        alt="image 1"
                    />
                </figure>
            </div>
        </div>
    );
};

export default Gallery;
