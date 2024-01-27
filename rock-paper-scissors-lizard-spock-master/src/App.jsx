import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';

const App = () => {
    const [points, setPoints] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const savedPoints =
            typeof window !== 'undefined'
                ? Number(localStorage?.getItem('score'))
                : 0;
        setPoints(savedPoints);
    }, []);

    useEffect(() => {
        localStorage.setItem('score', points);
    }, [points]);

    const backgroundColor =
        'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]  from-radial-gradient-start to-radial-gradient-end';

    return (
        <div
            className={`App w-screen h-screen font-barlow p-6 gap-[5%] flex flex-col items-center justify-between ${backgroundColor} sm:mobile-landscape:pb-12 sm:mobile-landscape:pt-1`}
        >
            <Header points={points} />
            <Table
                result={result}
                setResult={setResult}
                points={points}
                setPoints={setPoints}
            />
            <Footer />
        </div>
    );
};

export default App;
