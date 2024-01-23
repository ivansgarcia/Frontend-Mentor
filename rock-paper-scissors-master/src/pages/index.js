import * as React from 'react';
import App from '../App';
import '../styles/global.css';

const IndexPage = () => {
    return <App />;
};

export default IndexPage;

export const Head = () => (
    <>
        <html lang="en">
            <meta
                name="description"
                content="Funney Rock, paper, scissors interactive game"
            />
            <title>Rock Paper Scissors</title>;
        </html>
    </>
);
