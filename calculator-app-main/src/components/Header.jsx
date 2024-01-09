import React from 'react';

const Header = ({ theme, setTheme }) => {

    const saveTheme = (t) => {
        localStorage.setItem('theme', t);
    }

    const toggleTheme = () => {
        const newTheme = theme < 3 ? theme + 1 : 1;
        saveTheme(newTheme);
        setTheme(newTheme);
    };

    const togglePosition = (t) => {
        switch (t) {
            case 1:
                return 'left-[5px]';
            case 2:
                return 'left-[26px]';
            case 3:
                return 'left-[50px]';
            default:
                return 'left-[5px]';
        }
    };

    return (
        <header className="w-full pb-4 flex justify-between items-end text-text sm:py-1">
            <span className="text-3xl">calc</span>
            <div className="text-xs tracking-widest flex justify-between items-end gap-6">
                <span className="mb-1">THEME</span>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-full flex justify-around text-xs sm:text-base">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <div className="h-[26px] w-[72px] relative rounded-full bg-toggle-keypad-bg">
                        <div
                            tabIndex={0}
                            role="button"
                            aria-label="Change theme"
                            onClick={toggleTheme}
                            onKeyDown={(e) =>
                                e.key === 'Enter' && toggleTheme()
                            }
                            className={`h-[17px] w-[17px] absolute top-1 ${togglePosition(
                                theme
                            )} rounded-full bg-equal-key-toggle-bg transition-all cursor-pointer hover:brightness-150`}
                        ></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
