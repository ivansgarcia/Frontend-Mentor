import React from 'react';
import avatar from '../images/image-jeremy.png';

const Header = ({ period, setPeriod }) => {
    return (
        <div className="mx-auto h-52 w-full max-w-80 rounded-xl bg-dark-blue lg:row-span-2 lg:h-full">
            <div className="flex h-32 items-center justify-center gap-4 rounded-xl bg-blue p-4 lg:h-2/3 lg:flex-col lg:items-start lg:justify-start lg:gap-10 lg:p-8">
                <img
                    className="rounded-full border-[3px] border-white lg:w-[82px]"
                    src={avatar}
                    width={65}
                    alt="avatar"
                />
                <div>
                    <p className="text- text-pale-blue">Report for</p>
                    <p className="text-2xl font-light lg:w-36 lg:text-4xl lg:leading-[48px]">
                        Jeremy Robson
                    </p>
                </div>
            </div>
            <nav className="flex h-20 items-center justify-around text-lg text-desaturated-blue lg:h-1/3 lg:flex-col lg:items-start lg:justify-center lg:gap-4 lg:p-8">
                <button
                    onClick={() => setPeriod('daily')}
                    className={`${period === 'daily' && 'text-white'} active:text-white lg:hover:text-white`}
                >
                    Daily
                </button>
                <button
                    onClick={() => setPeriod('weekly')}
                    className={`${period === 'weekly' && 'text-white'} active:text-white lg:hover:text-white`}
                >
                    Weekly
                </button>
                <button
                    onClick={() => setPeriod('monthly')}
                    className={`${period === 'monthly' && 'text-white'} active:text-white lg:hover:text-white`}
                >
                    Monthly
                </button>
            </nav>
        </div>
    );
};

export default Header;
