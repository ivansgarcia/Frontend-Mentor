import * as React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <Layout background="home">
            <main className="main-mobile px-6 md:justify-between md:p-24 lg:flex-row lg:items-end lg:p-36">
                <section className="flex flex-col items-center justify-center text-white lg:w-2/5 lg:items-start lg:self-end">
                    <h3 className="font-barlow-condensed text-base tracking-[2.7px] text-text-grey md:text-xl md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]">
                        SO, YOU WANT TO TRAVEL TO
                    </h3>
                    <h1 className="font-bellefair text-[80px] md:text-[150px] lg:text-[10rem]">
                        SPACE
                    </h1>
                    <p className="section-p text-base md:w-[77%] md:text-base lg:w-[95%] lg:text-left lg:text-lg">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </section>
                <Link
                    to="/destination"
                    className="m-8 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white pt-2 font-bellefair text-xl text-dark outline-white/10 transition-all md:h-[242px] md:w-[242px] md:text-[32px] lg:h-[274px] lg:w-[274px] lg:outline-[88px] lg:hover:outline"
                >
                    EXPLORE
                </Link>
            </main>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <html lang="en"></html>
        <title>Space Travels</title>;
        <meta name="description" content="Space travels Web page" />
    </>
);
