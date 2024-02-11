import * as React from 'react';
import App from '../components/App';

const IndexPage = () => {
    return <App />;
};

export default IndexPage;

export const Head = () => (
    <>
        <html lang="en" />
        <title>Time Tracking Dashboard</title>
        <meta name="description" content="Time tracking dashboard" />
    </>
);
