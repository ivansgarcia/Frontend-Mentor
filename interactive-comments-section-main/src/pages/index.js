import * as React from 'react';
import App from '../components/App';

const IndexPage = () => {
    return <App />;
};

export default IndexPage;

export const Head = () => (
    <>
        <title>Interacive comments section</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
            rel="stylesheet"
        />
        <link rel="icon" href='/images/favicon-32x32.png' type="image/x-icon" />
    </>
);
