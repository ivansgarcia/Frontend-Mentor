import React from 'react';

const Card = ({ period, card }) => {
    const backgroundColor = {
        Work: 'bg-work',
        Play: 'bg-play',
        Study: 'bg-study',
        Exercise: 'bg-exercise',
        Social: 'bg-social',
        'Self Care': 'bg-self-care',
    };

    const currentHours = card.timeframes[period].current;
    const previousHours = card.timeframes[period].previous;

    const periodTime = {
        daily: 'Day',
        weekly: 'Week',
        monthly: 'Month',
    };

    const backgroundImages = {
        Work: "bg-[url('../images/icon-work.svg')]",
        Play: "bg-[url('../images/icon-play.svg')]",
        Study: "bg-[url('../images/icon-study.svg')]",
        Exercise: "bg-[url('../images/icon-exercise.svg')]",
        Social: "bg-[url('../images/icon-social.svg')]",
        'Self Care': "bg-[url('../images/icon-self-care.svg')]",
    };

    return (
        <div
            className={`${
                backgroundColor[card.title]
            } mx-auto h-[162px] w-full max-w-80 list-none rounded-xl ${
                backgroundImages[card.title]
            } flex flex-col justify-end bg-auto bg-[right_1rem_top_-0.7rem] bg-no-repeat lg:h-full`}
        >
            <main className="grid cursor-pointer grid-cols-2 rounded-xl bg-dark-blue p-6 active:bg-dark-blue-hover lg:h-[81%] lg:px-8 lg:hover:bg-dark-blue-hover">
                <p className="text-left text-lg font-medium">{card.title}</p>
                <button className="group" aria-label="options">
                    <svg
                        className="ml-auto fill-pale-blue group-active:fill-white lg:group-hover:fill-white"
                        width="21"
                        height="5"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
                <p className="text-left text-[32px] font-light lg:col-span-2 lg:-mb-2 lg:mt-3 lg:text-[56px]">
                    {currentHours}hrs
                </p>
                <p className="-ml-4 pt-3 text-right font-light text-pale-blue lg:col-span-2 lg:ml-0 lg:pt-0 lg:text-left">
                    Last {periodTime[period]} - {previousHours}hrs
                </p>
            </main>
        </div>
    );
};

export default Card;
