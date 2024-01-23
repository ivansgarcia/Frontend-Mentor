import React, { useState } from 'react';
import rulesImage from '../images/image-rules.svg';
import closeIcon from '../images/icon-close.svg';

const Footer = () => {
    const [showRules, setShowRules] = useState(false);

    return (
        <div className="mb-[15%] flex justify-center sm:big-screen:my-0 sm:self-end sm:mb-0">
            <button
                onClick={() => setShowRules(true)}
                className={`py-2 px-12 text-white border tracking-widest border-white rounded-lg active:scale-110 sm:big-screen:hover:scale-110 transition-transform ${
                    showRules && 'invisible'
                }`}
            >
                RULES
            </button>
            {showRules && (
                <div className="absolute top-0 left-0 w-full h-full min-h-screen bg-white flex justify-center items-center sm:big-screen:bg-opacity-0">
                    <div className="relative w-full h-full p-7 flex flex-col justify-around sm:big-screen:justify-between items-center sm:big-screen:w-[400px] sm:big-screen:h-[415px] sm:big-screen:rounded-lg bg-white">
                        <span className="text-4xl font-bold text-dark-text sm:big-screen:self-start sm:big-screen:text-[32px]">
                            RULES
                        </span>
                        <img
                            className="p-5 pb-2 sm:mobile-landscape:w-1/2"
                            src={rulesImage}
                            width={500}
                            height={500}
                            alt="rules"
                        />
                        <button
                            className="active:scale-110 sm:big-screen:hover:scale-110 sm:big-screen:absolute sm:big-screen:top-10 sm:big-screen:right-8 sm:big-screen:w-5"
                            onClick={() => setShowRules(false)}
                        >
                            <img
                                src={closeIcon}
                                width={25}
                                height={25}
                                alt="close"
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Footer;
