import React, { useEffect, useState } from 'react';

const Screen = ({ number, equation }) => {

    const [num, setNum] = useState('');

    useEffect(() => {
        setNum('');
        const timer = setTimeout(() => {
            setNum(number); 
        }, 50);
        return () => {
            clearTimeout(timer);
        };
    }, [equation, number]);

    const formatNumber = (n) => {
        if (String(n).length > 12) {
            n = Number(n).toExponential(2);
        }
        return String(n).replaceAll('.', ',');
    }
    return (
        <div className="w-full h-[92px] px-6 text-[40px] text-text bg-screen-bg flex justify-end items-center rounded-xl sm:h-[128px] sm:text-[56px]">{formatNumber(num)}</div>
    );
};

export default Screen;
