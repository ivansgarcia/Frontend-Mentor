import React from 'react';

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
            className={`animate-result mt-auto mb-6 flex flex-col gap-4 justify-center items-center sm:big-screen:mt-20 transition-transform ${
                result && 'sm:big-screen:absolute sm:big-screen:top-[45%]'
            } sm:mobile-landscape:scale-50 sm:mobile-landscape:absolute sm:mobile-landscape:-bottom-8 sm:mobile-landscape:mb-0`}
        >
            <p className="text-6xl tracking-wide font-bold text-white">
                YOU {result}
            </p>
            <button
                onClick={restart}
                className="bg-white py-3 px-16 text-lg text-dark-text tracking-widest rounded-lg active:scale-110 sm:big-screen:hover:scale-110 transition-transform"
            >
                PLAY AGAIN
            </button>
        </div>
    );
};

export default Result;
