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
        <div className="animate-[pulse_1s_ease-in-out_infinite] w-24 h-24 mt-4 sm:big-screen:mt-14 rounded-full bg-dark-text"></div>
    );
};

export default HouseOption;
