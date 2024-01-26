import React from 'react';
import paperImage from '../images/icon-paper.svg';
import scissorsImage from '../images/icon-scissors.svg';
import rockImage from '../images/icon-rock.svg';
import spockImage from '../images/icon-spock.svg';
import lizardImage from '../images/icon-lizard.svg';

const Option = ({ type, selection, setSelection, clickable, isWinner }) => {
    const borderColorVariants = {
        scissors:
            'bg-gradient-to-b from-scissors-gradient-end to-scissors-gradient-start',
        spock: 'bg-gradient-to-b from-spock-gradient-end to-spock-gradient-start',
        paper: 'bg-gradient-to-b from-paper-gradient-end to-paper-gradient-start',
        lizard: 'bg-gradient-to-b from-lizard-gradient-end to-lizard-gradient-start',
        rock: 'bg-gradient-to-b from-rock-gradient-end to-rock-gradient-start',
    };

    const shadowColor = {
        scissors: 'shadow-[0_10px_0_-5px_hsl(39_89%_35%/1)]',
        spock: 'shadow-[0_10px_0_-5px_hsl(189_59%_38%/1)]',
        paper: 'shadow-[0_10px_0_-5px_hsl(230_89%_54%/1)]',
        lizard: 'shadow-[0_10px_0_-5px_hsl(261_73%_45%/1)]',
        rock: 'shadow-[0_10px_0_-5px_hsl(349_71%_36%/1)]',
    };

    const winnerShadow =
        'shadow-[0_0_0_20px_hsl(0_0%_80%/0.05),0_0_0_50px_hsl(0_0%_80%/0.05),0_0_0_80px_hsl(0_0%_80%/0.05)]';

    const handImage = {
        scissors: scissorsImage,
        spock: spockImage,
        paper: paperImage,
        lizard: lizardImage,
        rock: rockImage,
    };

    const selectHand = (hand) => {
        setTimeout(() => {
            setSelection(hand);
        }, 150);
    };

    return (
        <button
            onClick={() => clickable && !selection && selectHand(type)}
            className={`${handImage[type]}
            ${
                clickable
                    ? 'cursor-pointer active:scale-110 sm:big-screen:hover:scale-110'
                    : 'cursor-default'
            } ${borderColorVariants[type]} ${
                shadowColor[type]
            } w-24 h-24 flex justify-center items-center rounded-full transition-transform`}
        >
            <div
                className={`absolute w-24 h-24 rounded-full animate-winner sm:mobile-landscape:scale-75 ${
                    isWinner && winnerShadow
                }`}
            ></div>
            <div className="shadow-[inset_0_10px_0_-5px_hsl(0_0%_75%/0.6)] w-[75px] h-[75px] flex justify-center items-center bg-white rounded-full">
                <img src={handImage[type]} width={35} height={35} alt="hand" />
            </div>
        </button>
    );
};

export default Option;
