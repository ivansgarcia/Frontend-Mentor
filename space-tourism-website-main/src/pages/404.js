import * as React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
    return (
        <main className="h-screen w-screen p-16 font-barlow text-2xl text-white">
            <h1 className="mb-8 font-bellefair text-5xl text-text-grey">
                SPACE TRAVEL
            </h1>
            <h2 className="mb-4 ml-8 text-2xl">Page not found</h2>
            <p className="ml-8">
                Sorry 😔, we couldn’t find what you were looking for.
                <br />
                {process.env.NODE_ENV === 'development' ? (
                    <>
                        <br />
                        Try creating a page in <code>src/pages/</code>.
                        <br />
                    </>
                ) : null}
                <br />
                <Link
                    className="rounded-lg bg-text-grey px-4 py-2 text-dark transition lg:hover:bg-separator"
                    to="/"
                >
                    Home Page
                </Link>
            </p>
        </main>
    );
};

export default NotFoundPage;

export const Head = () => (
    <>
        <html lang="en"></html>
        <title>Not Found</title>;
        <meta name="description" content="page not found in Space Travels" />
    </>
);
