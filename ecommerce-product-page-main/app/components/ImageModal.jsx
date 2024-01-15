import React from 'react';
import Gallery from './Gallery';

const ImageModal = ({ setZoom, defaultSelected }) => {
    return (
        <dialog
            open
            className="fixed z-10 top-0 w-screen h-screen flex flex-col justify-center items-center bg-black bg-opacity-75"
        >
            <div className="w-[545px] flex justify-end py-6">
                <svg onClick={() => setZoom(false)} className="group scale-150 cursor-pointer" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className="fill-white group-hover:fill-orange-btn transition-colors"
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        fill="#69707D"
                        fillRule="evenodd"
                    />
                </svg>
            </div>
            <Gallery isModal={true} defaultSelected={defaultSelected} />
        </dialog>
    );
};

export default ImageModal;
