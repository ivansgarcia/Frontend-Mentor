import React from 'react';
import button from '../images/icon-dice.svg';
import { getAdvice } from '../controller/AxiosAdviceController';
import AdvicePanel from '../components/AdvicePanel';

const IndexPage = () => {
    const [advice, setAdvice] = React.useState({ id: '', advice: '' });
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        loadAdvice();
    }, []);

    const loadAdvice = () => {
        setLoading(true);
        getAdvice().then((r) => {
            setAdvice(r);
            setLoading(false);
        });
    };

    return (
        <div className="font-manrope h-screen w-screen p-4 flex flex-col justify-center items-center bg-dark-blue text-white">
            <div className="w-full max-w-[540px] relative pt-10 pb-12 px-12 flex flex-col items-center bg-dark-grayish-blue rounded-2xl max-sm:-mt-32">
                <AdvicePanel advice={advice} />
                <button
                    className="p-5 absolute -bottom-8 bg-neon-green rounded-full hover:shadow-[0_0_30px_hsl(150,100%,66%)]"
                    onClick={loadAdvice}
                >
                    <img
                        className={`${
                            loading && 'animate-spin'
                        } duration-1000 transition-transform`}
                        src={button}
                        alt="button"
                    />
                </button>
            </div>
        </div>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <title>Advice Generator</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"
            rel="stylesheet"
        />
    </>
);
