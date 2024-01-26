import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const NotFoundPage = () => {
    return (
        <main className="p-8">
            <h1 className="text-3xl mb-8">Page not found</h1>
            <p className="text-xl">
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
                <button className="bg-radial-gradient-start px-8 py-2 text-white rounded-lg hover:scale-110">
                    <Link to="/">Go home</Link>
                </button>
            </p>
        </main>
    );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
