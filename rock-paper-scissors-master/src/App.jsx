import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';

const App = () => {
    let points =
        typeof window !== 'undefined'
            ? Number(localStorage?.getItem('score'))
            : 0;
    const [result, setResult] = useState(null);

    result === 'WIN' && (points = points + 1);
    result === 'LOSE' && (points = points - 1);

    useEffect(() => {
        localStorage.setItem('score', points);
    }, [points]);

    const backgroundColor =
        'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]  from-radial-gradient-start to-radial-gradient-end';

    return (
        <div
            className={`App w-screen h-screen font-barlow p-6 gap-[5%] flex flex-col items-center justify-between ${backgroundColor} sm:mobile-landscape:py-1 `}
        >
            <Header points={points} />
            <Table result={result} setResult={setResult} />
            <Footer />
        </div>
    );
};

export default App;
