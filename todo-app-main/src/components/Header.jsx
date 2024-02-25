import React from 'react';
import sunIcon from '../images/icon-sun.svg';
import moonIcon from '../images/icon-moon.svg';

const Header = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };

    return (
        <header className="h-[201px] w-full bg-[url('../images/bg-mobile-light.jpg')] bg-cover bg-no-repeat px-[25px] py-9 dark:bg-[url('../images/bg-mobile-dark.jpg')] sm:h-[300px] sm:bg-[url('../images/bg-desktop-light.jpg')] sm:py-[62px] dark:sm:bg-[url('../images/bg-desktop-dark.jpg')]">
            <div className="mx-auto flex max-w-[540px] items-center justify-between">
                <span className="pt-[7px] text-[25px] font-bold tracking-[0.45em] text-light-theme-very-light-gray sm:text-[38px]">
                    TODO
                </span>
                <button aria-label="theme" onClick={toggleTheme}>
                    <img
                        className="sm:w-[26px]"
                        src={`${theme === 'light' ? moonIcon : sunIcon}`}
                        alt="theme"
                        width={19}
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
