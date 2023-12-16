import React from 'react';
import Column from './Column';
import data from '../../data.json';
import logo from '../images/logo.svg';

const Chart = () => {

    const maxValue = Math.max(...data.map(o => o.amount));

    return (
        <div className="flex flex-col justify-center gap-5 items-center h-screen px-4 font-dm-sans">
            <section className="w-full max-w-[540px] px-8 py-[27px] mb-1 bg-soft-red rounded-3xl flex justify-between max-sm:rounded-xl max-sm:p-5">
                <div className="text-white flex flex-col justify-center gap-0 max-sm:gap-2">
                    <p className="max-sm:text-sm">My balance</p>
                    <p className="text-[30px] font-bold max-sm:text-2xl">$921.48</p>
                </div>
                <img
                    className="w-[72px] max-sm:w-16"
                    src={logo}
                    alt="logo"
                />
            </section>
            <section className="w-full max-w-[540px] px-10 pt-7 pb-12 flex flex-col gap-9 justify-around bg-very-pale-orange rounded-3xl max-sm:rounded-xl max-sm:px-6">
                <h2 className="text-[33px] text-dark-brown font-bold max-sm:text-2xl">Spending - Last 7 days</h2>
                <div className="flex justify-between -mt-7">
                    {data.map((col, index) => (
                        <Column
                            key={index}
                            day={col.day}
                            amount={col.amount}
                            isMax={col.amount === maxValue}
                        />
                    ))}
                </div>
                <hr className="h-0.5 bg-cream border-0" />
                <div className="flex justify-between items-end -mt-3">
                    <div>
                        <p className="text-lg text-medium-brown py-1.5 max-sm:text-base">Total this month</p>
                        <p className="text-5xl text-dark-brown font-bold max-sm:text-3xl">$478.33</p>
                    </div>
                    <div className='text-right'>
                        <p className="text-lg text-dark-brown font-bold max-sm:text-base">+2.4%</p>
                        <p className="text-lg text-medium-brown max-sm:text-base">from last month</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chart;
