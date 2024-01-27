import React from 'react';
import logo from '../images/logo-bonus.svg';

const Header = ({ points }) => {
    return (
        <div className="w-full max-w-[700px] p-3 flex justify-between items-center border-4 border-header-outline rounded-lg sm:big-screen:rounded-2xl sm:big-screen:px-6 sm:mobile-landscape:scale-50 sm:mobile-landscape:-mt-6 sm:big-screen:py-4">
            <img className="w-14 sm:big-screen:w-28" src={logo} alt="logo" />
            <div className="h-full py-2 px-6 flex flex-col  items-center bg-white rounded sm:big-screen:px-12 sm:big-screen:py-3 sm:big-screen:gap-1 sm:big-screen:rounded-lg">
                <span className="text-[11px] -mb-1 text-score-text tracking-widest sm:big-screen:text-base">
                    SCORE
                </span>
                <span className="text-[42px] leading-[48px] font-bold text-dark-text sm:big-screen:text-6xl sm:big-screen:leading-[64px]">
                    {points}
                </span>
            </div>
        </div>
    );
};

export default Header;
