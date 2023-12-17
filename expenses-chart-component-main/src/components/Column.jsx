import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ day, amount, isMax }) => {
    const colHeight = Math.floor(amount * 1.25);
    const [height, setHeight] = React.useState(0);
    React.useEffect(() => {
        setHeight(colHeight);
        console.log('cosa');
    }, [colHeight])

    return (
        <div className="h-[230px] text-xs w-12 flex flex-col items-center justify-end group cursor-pointer max-sm:w-[10%]">
            <div className="hidden z-10 text-white text-lg bg-dark-brown px-2 py-1.5 mb-2 rounded-lg group-hover:inline max-sm:text-base">{`$${amount}`}</div>
            <div
                className={`${
                    isMax ? 'bg-cyan' : 'bg-soft-red'
                }  w-[50px] rounded group-hover:opacity-75 transition-all duration-500 max-sm:w-[100%]`}
                style={{ height: `${height}%` }}
            ></div>
            <p className="text-base text-medium-brown mt-1 max-sm:text-sm">{day}</p>
        </div>
    );
};

Column.propTypes = {
    day: PropTypes.string,
    amount: PropTypes.number,
    isMax: PropTypes.bool,
};

export default Column;
