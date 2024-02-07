import React, { useEffect, useState } from 'react';
import Navigator from './Navigator';
import CountryPreview from './CountryPreview';
import { getCountryList } from '../controllers/CountryListController';

const CountryList = ({ setShowCountryDetail }) => {
    const [loadedList, setLoadedList] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadList();
    }, []);

    const loadList = () => {
        getCountryList()
            .then((response) => {
                setLoadedList(response.data);
                setCurrentList(response.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    };

    const filterBy = (region, name) => {
        setLoading(true);
        let filteredList = loadedList;
        if (region !== 'all') {
            region === 'America' && (region = 'Americas');
            filteredList = filteredList.filter((c) => c.region === region);
        }
        if (name) {
            filteredList = filteredList.filter((c) =>
                c.name.common.toLowerCase().includes(name.toLowerCase())
            );
        }
        setCurrentList(filteredList);
        setLoading(false);
    };

    return loading ? (
        <div className="flex h-screen w-full items-center justify-center rounded-lg bg-light-background dark:bg-dark-background">
            <div className="h-12 w-12 animate-spin  rounded-full border-8 border-b-light-background border-l-dark-background border-r-light-background border-t-dark-background transition-colors"></div>
        </div>
    ) : (
        <div className="h-full min-h-screen w-full bg-light-background py-8 text-light-text transition-colors dark:bg-dark-background dark:text-white">
            <Navigator filterBy={filterBy} setLoading={setLoading} />
            {!!currentList.length ? (
                <ul className="mx-auto mt-72 flex h-full w-full max-w-[1440px] flex-col items-center gap-12 px-12 sm:mt-48 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[73px] sm:px-20">
                    {currentList.map((country, index) => (
                        <CountryPreview
                            key={index}
                            country={country}
                            setShowCountryDetail={setShowCountryDetail}
                        />
                    ))}
                </ul>
            ) : (
                <p className="mx-auto mt-96 w-64 text-center text-light-text dark:text-white">
                    No countries found
                </p>
            )}
        </div>
    );
};

export default CountryList;
