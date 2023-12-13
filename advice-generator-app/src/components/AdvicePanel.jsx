import React from 'react';
import separator from '../images/pattern-divider-desktop.svg';

const AdvicePanel = ({ advice }) => {
    return (
        <>
            <h2 className="text-neon-green my-2 text-[13px] tracking-[.4em]">
                {`ADVICE # ${advice.id}`}
            </h2>
            <p
                className='text-[28px] my-2 flex-1 flex items-center text-center text-light-cyan'
            >
                “{advice.advice}”
            </p>
            <img className="my-6" src={separator} alt="separator" />
        </>
    );
};

export default AdvicePanel;
