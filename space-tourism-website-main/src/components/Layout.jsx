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
            className={`flex max-w-[1440px] mx-auto relative h-full min-h-screen w-screen flex-col ${backgroundImage[background]} bg-cover bg-no-repeat`}
        >
            <Header background={background} />
            <main className="flex h-full flex-1 flex-col justify-self-center">
                {children}
            </main>
        </div>
    );
};

export default Layout;
