import React, { useState, useEffect } from 'react';
import Option from './Option';
import Result from './Result';
import HouseOption from './HouseOption';
import { calculateResult } from '../utils/calculateResult';

const Table = ({ result, setResult, points, setPoints }) => {
    const [selection, setSelection] = useState(null);
    const [housePick, setHousePick] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            const newResult = calculateResult(selection, housePick);
            setResult(newResult);
        }, 300);
    }, [selection, housePick, setResult]);

    return (
        <>
            <div
                className={`h-64 w-64 relative -top-8 flex bg-contain justify-center items-center drop-shadow-lg bg-no-repeat transition-transform duration-500 sm:big-screen:top-8 sm:big-screen:scale-150 sm:mobile-landscape:scale-75 sm:mobile-landscape:top-10 sm:mobile-landscape:-m-20 sm:mobile-landscape:-mb-10 ${
                    !selection
                        ? 'bg-[url("../images/bg-pentagon.svg")]'
                        : 'sm:big-screen:translate-y-32 sm:mobile-landscape:top-24 sm:mobile-landscape:mb-4'
                } `}
            >
                <div
                    className={`absolute -top-8 flex flex-col gap-4 sm:mobile-landscape:gap-2 items-center transition-transform ${
                        selection &&
                        (selection === 'scissors'
                            ? '-translate-x-[85px] translate-y-2 scale-150 duration-500 sm:scale-[1.9] sm:flex-col-reverse'
                            : 'invisible')
                    } ${
                        result
                            ? 'sm:-translate-x-[194px]'
                            : selection && 'sm:-translate-x-32'
                    }`}
                >
                    <Option
                        type="scissors"
                        selection={selection}
                        setSelection={setSelection}
                        clickable={!selection}
                        isWinner={result && result === 'WIN'}
                    />
                    <p className="text-white text-xs tracking-wider sm:text-[9px]">
                        {selection && 'YOU PICKED'}
                    </p>
                </div>
                {selection && (
                    <div
                        className={`absolute -z-10 -top-6 -right-2 scale-150 flex flex-col gap-4 sm:mobile-landscape:gap-2 items-center transition-transform duration-500 sm:scale-[1.9] sm:flex-col-reverse ${
                            result
                                ? 'sm:translate-x-[106px]'
                                : 'sm:translate-x-10'
                        }`}
                    >
                        {!housePick ? (
                            <HouseOption setHousePick={setHousePick} />
                        ) : (
                            <>
                                <Option
                                    type={housePick}
                                    clickable={false}
                                    isWinner={result && result === 'LOSE'}
                                />
                                <p className="text-white text-xs tracking-wider sm:text-[9px]">
                                    THE HOUSE PICKED
                                </p>
                            </>
                        )}
                    </div>
                )}
                <div
                    className={`absolute top-12 -left-8 flex flex-col gap-4 sm:mobile-landscape:gap-2 items-center transition-transform ${
                        selection &&
                        (selection === 'spock'
                            ? '-translate-y-[72px] translate-x-7 scale-150 duration-500 sm:scale-[1.9] sm:flex-col-reverse'
                            : 'invisible')
                    } ${
                        result
                            ? 'sm:-translate-x-[84px]'
                            : selection && 'sm:-translate-x-4'
                    }`}
                >
                    <Option
                        type="spock"
                        selection={selection}
                        setSelection={setSelection}
                        clickable={!selection}
                        isWinner={result && result === 'WIN'}
                    />
                    <p className="text-white text-xs tracking-wider sm:text-[9px]">
                        {selection && 'YOU PICKED'}
                    </p>
                </div>
                <div
                    className={`absolute top-12 -right-8 flex flex-col gap-4 sm:mobile-landscape:gap-2 items-center transition-transform ${
                        selection &&
                        (selection === 'paper'
                            ? '-translate-x-[196px] -translate-y-[72px] scale-150 duration-500 sm:scale-[1.9] sm:flex-col-reverse'
                            : 'invisible')
                    } ${
                        result
                            ? 'sm:-translate-x-[306px]'
                            : selection && 'sm:-translate-x-60'
                    }`}
                >
                    <Option
                        type="paper"
                        selection={selection}
                        setSelection={setSelection}
                        clickable={!selection}
                        isWinner={result && result === 'WIN'}
                    />
                    <p className="text-white text-xs tracking-wider sm:text-[9px]">
                        {selection && 'YOU PICKED'}
                    </p>
                </div>
                <div
                    className={`absolute -bottom-8 left-2 flex flex-col gap-4 sm:mobile-landscape:gap-2 items-center transition-transform ${
                        selection &&
                        (selection === 'lizard'
                            ? '-translate-x-3 -translate-y-[184px] scale-150 duration-500 sm:scale-[1.9] sm:flex-col-reverse'
                            : 'invisible')
                    } ${
                        result
                            ? 'sm:-translate-x-[124px]'
                            : selection && 'sm:-translate-x-14'
                    }`}
                >
                    <Option
                        type="lizard"
                        selection={selection}
                        setSelection={setSelection}
                        clickable={!selection}
                        isWinner={result && result === 'WIN'}
                    />
                    <p className="text-white text-xs tracking-wider sm:text-[9px]">
                        {selection && 'YOU PICKED'}
                    </p>
                </div>
                <div
                    className={`absolute -bottom-8 right-2 flex flex-col gap-4 sm:mobile-landscape:gap-2 items-center transition-transform ${
                        selection &&
                        (selection === 'rock'
                            ? '-translate-x-[156px] -translate-y-[184px] scale-150 duration-500 sm:scale-[1.9] sm:flex-col-reverse'
                            : 'invisible')
                    } ${
                        result
                            ? 'sm:-translate-x-[266px]'
                            : selection && 'sm:-translate-x-[200px]'
                    }`}
                >
                    <Option
                        type="rock"
                        selection={selection}
                        setSelection={setSelection}
                        clickable={!selection}
                        isWinner={result && result === 'WIN'}
                    />
                    <p className="text-white text-xs tracking-wider sm:text-[9px]">
                        {selection && 'YOU PICKED'}
                    </p>
                </div>
            </div>
            {result && (
                <Result
                    result={result}
                    setResult={setResult}
                    setHousePick={setHousePick}
                    setSelection={setSelection}
                    points={points}
                    setPoints={setPoints}
                />
            )}
        </>
    );
};

export default Table;
