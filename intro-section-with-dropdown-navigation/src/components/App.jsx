import React from 'react';
import Menu from './Menu';
import databizImg from '../images/client-databiz.svg';
import audiophileImg from '../images/client-audiophile.svg';
import meetImg from '../images/client-meet.svg';
import makerImg from '../images/client-maker.svg';

const App = () => {
    return (
        <div className="w-screen h-screen max-w-[1440px] bg-almost-white max-md:h-full">
            <nav className="py-2 w-full flex justify-between items-center text-medium-gray max-md:items-start max-md:p-0">
                <span className="mx-8 my-4 font-bold text-[35px] text-almost-black">
                    snap
                </span>
                <Menu/>
            </nav>

            <main className="flex justify-center p-8 mt-8 max-md:flex-col-reverse max-md:items-center max-md:justify-start max-md:mt-0 max-md:px-0">
                <div className="w-1/2 ml-[7%] h-5/6 mt-8 flex flex-col items-center max-md:items-center max-md:w-full max-md:px-6 max-md:m-0 max-md:box-border">
                    <div className='flex flex-col justify-center max-md:gap-6'>
                        <h1 className="text-[80px] text-almost-black leading-[80px] my-8 font-bold max-w-xl max-md:m-0 max-md:text-4xl max-md:mt-8 max-md:text-center">
                            Make<br className='max-md:hidden'/> remote work
                        </h1>
                        <p className="max-w-lg my-4 pr-14 text-lg text-medium-gray max-md:p-0 max-md:text-center max-md:text-base">
                            Get your team in sync, no matter your location.
                            Streamline processes, create team rituals, and watch
                            productivity soar.
                        </p>
                        <button className="w-44 my-8 py-[14px] text-lg font-bold rounded-2xl border bg-almost-black text-almost-white hover:bg-almost-white hover:text-almost-black hover:border-almost-black max-md:m-auto">
                            Learn more
                        </button>
                    </div>
                    <div className='text-center w-full mt-16 -ml-10 max-md:mx-0 max-md:self-center'>
                        <img className="inline mr-8 py-2" src={databizImg} alt="databiz"/>
                        <img className="inline mr-8 py-2" src={audiophileImg} alt="audiophile"/>
                        <img className="inline mr-8 py-2" src={meetImg} alt="meet" />
                        <img className="inline mr-8 py-2" src={makerImg} alt="maker" />
                    </div>
                </div>
                <figure className={`w-1/2 ml-[8%] bg-contain bg-no-repeat bg-hero-desktop max-md:bg-mobile-desktop max-md:h-96 max-md:w-full max-md:bg-center`}>
                    
                </figure>
            </main>
        </div>
    );
};

export default App;
