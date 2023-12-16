import * as React from 'react';
import '../styles/global.css';
import Chart from '../components/Chart';
import favicon from '../images/favicon-32x32.png';

const IndexPage = () => {
    return <Chart />;
};

export default IndexPage;

export const Head = () => (
    <>
        <title>Expenses Chart</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700&display=swap"
            rel="stylesheet"
        />
        <link rel="icon" href={favicon} type="image/x-icon" />
    </>
);
