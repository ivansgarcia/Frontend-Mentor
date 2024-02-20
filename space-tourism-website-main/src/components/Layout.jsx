import React from 'react';
import Header from './Header';

const Layout = ({ children, background }) => {
    const backgroundImage = {
        home: 'bg-home',
        destination: 'bg-destination',
        crew: 'bg-crew',
        technology: 'bg-technology',
    };

    return (
        <div
            className={`relative flex h-full min-h-screen w-screen flex-col items-center ${backgroundImage[background]} bg-cover bg-no-repeat`}
        >
            <Header background={background} />
            <div className="flex max-w-[1440px] flex-1 flex-col justify-self-center">
                {children}
            </div>
        </div>
    );
};

export default Layout;
