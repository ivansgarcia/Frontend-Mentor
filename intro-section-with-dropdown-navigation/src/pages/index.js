import * as React from 'react';
import App from '../components/App';
import favicon from '../images/favicon-32x32.png';

const IndexPage = () => {
    return <App />;
};

export default IndexPage;

export const Head = () => (
    <>
        <title>Intro Section</title>
        <link rel="icon" type="image/x-icon" href={favicon}></link>
    </>
);
