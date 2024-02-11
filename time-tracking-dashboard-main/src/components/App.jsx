import React, { useState } from 'react';
import Header from './Header';
import data from '../../data.json';
import Card from './Card';

const App = () => {
    const [period, setPeriod] = useState('weekly');

    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-very-dark-blue px-6 py-20 font-rubik text-white lg:justify-center">
            <main className="grid w-full max-w-[1110px] grid-cols-1 gap-8 lg:h-[518px] lg:grid-cols-4">
                <Header period={period} setPeriod={setPeriod} />
                {data.map((card, index) => (
                    <Card key={index} card={card} period={period} />
                ))}
            </main>
        </div>
    );
};

export default App;
