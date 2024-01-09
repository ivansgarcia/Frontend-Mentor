import React, { useEffect, useState } from 'react';
import Screen from './components/Screen';
import Keyboard from './components/Keyboard';
import Header from './components/Header';

const App = () => {

    const preferredScheme = window.matchMedia('(prefers-color-scheme: light)').matches;

    const [number, setNumber] = useState('0');
    const [equation, setEquation] = useState([]);
    const [theme, setTheme] = useState(preferredScheme ? 2 : 1);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        savedTheme && setTheme(Number(savedTheme));
    }, [])

    return (
        <main
            data-theme={`theme-${theme}`}
            className="font-league-spartan w-screen h-full min-h-screen px-6 flex flex-col justify-center items-center bg-main-bg">
            <div className="w-full max-w-[540px] flex flex-col justify-center items-center gap-6">
                <Header theme={theme} setTheme={setTheme}/>
                <Screen number={number} equation={equation} />
                <Keyboard number={number} setNumber={setNumber} equation={equation} setEquation={setEquation} />
            </div>
        </main>
    );
};

export default App;
