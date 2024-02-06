import * as React from 'react';
import App from '../components/App';

const IndexPage = () => {
    return (
        <App />
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <html lang="en" />
        <title>Rest Countries API</title>
        <link rel="logo" href="images/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Rest API example that shows countries of the world." />

    </>
);
