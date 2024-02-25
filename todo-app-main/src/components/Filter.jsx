import React from 'react';

const Filter = ({ filter, setFilter }) => {
    return (
        <div className="bg-colors flex h-[48px] w-full justify-center gap-5 rounded-[5px] py-4 text-sm font-bold text-light-theme-dark-grayish-blue transition-colors duration-500 dark:text-dark-theme-dark-grayish-blue sm:ml-5 sm:gap-5">
            <button
                className={`${!filter && 'text-bright-blue'}`}
                onClick={() => setFilter(null)}
            >
                <span
                    className={`${filter ? 'hover:text-dark-theme-very-dark-blue hover:dark:text-light-theme-very-light-grayish-blue' : 'cursor-default'} transition-colors`}
                >
                    All
                </span>
            </button>
            <button
                className={`${filter === 'active' && 'text-bright-blue'}`}
                onClick={() => setFilter('active')}
            >
                <span
                    className={`${filter !== 'active' ? 'hover:text-dark-theme-very-dark-blue hover:dark:text-light-theme-very-light-grayish-blue' : 'cursor-default'} transition-colors`}
                >
                    Active
                </span>
            </button>
            <button
                className={`${filter === 'completed' && 'text-bright-blue'}`}
                onClick={() => setFilter('completed')}
            >
                <span
                    className={`${filter !== 'completed' ? 'hover:text-dark-theme-very-dark-blue hover:dark:text-light-theme-very-light-grayish-blue' : 'cursor-default'} transition-colors`}
                >
                    Completed
                </span>
            </button>
        </div>
    );
};

export default Filter;
