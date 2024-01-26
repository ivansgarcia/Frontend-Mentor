import React, { useEffect } from 'react';

const HouseOption = ({ setHousePick }) => {
    const randomTime = 1000 + Math.random() * 2000;

    useEffect(() => {
        const picks = ['paper', 'scissors', 'rock'];
        setTimeout(() => {
            setHousePick(picks[Math.floor(Math.random() * 3)]);
        }, randomTime);
    }, [setHousePick, randomTime]);

    return (
        <div className="animate-[pulse_1s_ease-in-out_infinite] w-[78px] h-[78px] sm:big-screen:mt-10 sm:mobile-landscape:mt-8 rounded-full bg-dark-text"></div>
    );
};

export default HouseOption;
