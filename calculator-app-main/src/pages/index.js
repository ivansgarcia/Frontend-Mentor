import * as React from 'react';
import App from '../App';

const IndexPage = () => {
    return <App />;
};

export default IndexPage;

export const Head = () => (
    <>
        <title>Calculator App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap"
            rel="stylesheet"
        />
    </>
);
