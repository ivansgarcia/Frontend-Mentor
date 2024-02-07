import React, { useEffect, useState } from 'react';
import Header from './Header';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';

const App = () => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const savedTheme =
            typeof window !== 'undefined' ? localStorage.getItem('theme') : '';
        setTheme(savedTheme);
    }, []);

    const [showCountryDetail, setShowCountryDetail] = useState(null);

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('') : setTheme('dark');
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div
            className={`h-full w-full font-nunito-sans ${theme} flex flex-col items-center`}
        >
            <Header toggleTheme={toggleTheme} theme={theme} />
            {!showCountryDetail ? (
                <CountryList setShowCountryDetail={setShowCountryDetail} />
            ) : (
                <CountryDetail
                    country={showCountryDetail}
                    setShowCountryDetail={setShowCountryDetail}
                />
            )}
        </div>
    );
};

export default App;
