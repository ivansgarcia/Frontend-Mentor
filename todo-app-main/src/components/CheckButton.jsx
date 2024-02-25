import React from 'react';
import checkIcon from '../images/icon-check.svg';

const CheckButton = ({ action, completed }) => {
    return (
        <button
            aria-label="check completed"
            onClick={action}
            className={`${completed ? 'bg-gradient-to-br' : 'bg-dark-theme-light-grayish-blue hover:bg-gradient-to-br hover:duration-150 dark:bg-light-theme-very-dark-grayish-blue'} flex h-5 w-5 items-center justify-center rounded-full from-check-background-start to-check-background-end transition-colors duration-500 sm:h-6 sm:w-6`}
        >
            <div
                className={`${completed ? 'bg-gradient-to-br from-check-background-start to-check-background-end' : 'bg-light-theme-very-light-gray dark:bg-dark-theme-very-dark-desaturated-blue'} flex h-[18px] w-[18px] rounded-full p-[5.4px] transition-colors duration-500 hover:duration-150 sm:h-[22px] sm:w-[22px]`}
            >
                {completed && (
                    <img src={checkIcon} alt="completed" width={14} />
                )}
            </div>
        </button>
    );
};

export default CheckButton;
