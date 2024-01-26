import React from 'react';

//TODO: pasar Result a absolute para no redimensionar Table

const Result = ({ result, setSelection, setHousePick, setResult }) => {
    const restart = () => {
        setTimeout(() => {
            setSelection(null);
            setHousePick(null);
            setResult(null);
        }, 150);
    };

    return (
        <div
            className={`absolute animate-result top-[65%] mb-6 flex flex-col gap-4 justify-center items-center sm:big-screen:top-[45%] sm:mt-24 transition-transform ${
                result && 'sm:absolute sm:top-80'
            }   sm:mobile-landscape:top-12 sm:mobile-landscape:gap-2`}
        >
            <p className="text-6xl tracking-wide font-bold text-white sm:mobile-landscape:text-2xl">
                YOU {result}
            </p>
            <button
                onClick={restart}
                className="bg-white py-3 px-16 text-lg text-dark-text tracking-widest rounded-lg active:scale-110 sm:hover:scale-110 transition-transform sm:mobile-landscape:text-xs sm:mobile-landscape:py-2 sm:mobile-landscape:px-6"
            >
                PLAY AGAIN
            </button>
        </div>
    );
};

export default Result;
