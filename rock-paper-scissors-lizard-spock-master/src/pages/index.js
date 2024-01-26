import * as React from 'react';
import App from '../App';
import '../styles/global.css';


const IndexPage = () => {
    return <App />;
};

export default IndexPage;

export const Head = () => (
    <>
        <html lang="en" />
            <meta
                name="description"
                content="Funny Rock, paper, scissors, lizard, spock interactive game"
            />
            <title>Rock Paper Scissors Lizard Spock</title>;
    </>
);
