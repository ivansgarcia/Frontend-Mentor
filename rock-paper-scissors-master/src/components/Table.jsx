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
                className={`absolute top-[40%] h-48 w-52 bg-center flex bg-contain justify-center drop-shadow-lg sm:big-screen:big-screen:top-[50%] ${
                    !selection
                        ? 'bg-[url("../images/bg-triangle-small.svg")] sm:big-screen:bg-[url("../images/bg-triangle.svg")] sm:big-screen:scale-[1.5]'
                        : 'sm:big-screen:scale-[2.3] sm:big-screen:translate-y-32 delay-500'
                } bg-no-repeat bg-center transition-transform duration-500 sm:mobile-landscape:scale-75 sm:mobile-landscape:top-[35%] `}
            >
                <div
                    className={`absolute -top-14 -left-12  flex flex-col gap-4 items-center sm:big-screen:gap-6 sm:big-screen:flex-col-reverse transition-transform ${
                        selection &&
                        (selection === 'paper'
                            ? '-translate-x-2 duration-500'
                            : 'invisible')
                    } ${result && 'sm:big-screen:-translate-x-16'}`}
                >
                    <Option
                        type="paper"
                        selection={selection}
                        setSelection={setSelection}
                        clickable={!selection}
                        isWinner={result && result === 'WIN'}
                    />
                    {selection === 'paper' && (
                        <p className="text-white tracking-wider sm:big-screen:text-xs">
                            YOU PICKED
                        </p>
                    )}
                </div>
                <div
                    className={`absolute -top-14 -right-12 flex flex-col gap-4 items-center sm:big-screen:flex-col-reverse sm:big-screen:gap-6 ${
                        selection &&
                        (selection === 'scissors'
                            ? '-translate-x-[184px] transition-transform duration-500'
                            : 'invisible')
                    } ${result && 'sm:big-screen:-translate-x-[248px]'}`}
                >
                    <Option
                        type="scissors"
                        selection={selection}
                        setSelection={setSelection}
                        clickable={!selection}
                        isWinner={result && result === 'WIN'}
                    />
                    {selection === 'scissors' && (
                        <p className="text-white tracking-wider sm:big-screen:text-xs ">
                            YOU PICKED
                        </p>
                    )}
                </div>
                {selection && (
                    <div
                        className={`absolute -z-10 -top-14 -right-14 flex flex-col gap-4 items-center transition-transform duration-500 sm:big-screen:gap-6 sm:big-screen:flex-col-reverse ${
                            result && 'sm:big-screen:translate-x-16'
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
                                <p className="text-white tracking-wider sm:big-screen:text-xs">
                                    THE HOUSE PICKED
                                </p>
                            </>
                        )}
                    </div>
                )}
                <div
                    className={`absolute top-24 flex flex-col gap-4 items-center sm:big-screen:flex-col-reverse sm:big-screen:gap-6 ${
                        selection &&
                        (selection === 'rock'
                            ? '-translate-x-24 -translate-y-[152px] transition-transform duration-500'
                            : 'invisible')
                    } ${result && 'sm:big-screen:-translate-x-40'}`}
                >
                    <Option
                        type="rock"
                        selection={selection}
                        setSelection={setSelection}
                        clickable={!selection}
                        isWinner={result && result === 'WIN'}
                    />
                    {selection === 'rock' && (
                        <p className="text-white tracking-wider sm:big-screen:text-xs">
                            YOU PICKED
                        </p>
                    )}
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
