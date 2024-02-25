import * as React from 'react';
import { useState } from 'react';
import TodoList from '../components/TodoList';
import Header from '../components/Header';
import { useEffect } from 'react';

const IndexPage = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') ?? 'dark';
        } else {
            return 'dark';
        }
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={`${theme === 'dark' && 'dark'}`}>
            <main className="flex min-h-screen flex-col items-center gap-8 bg-light-theme-very-light-grayish-blue font-josefin font-normal transition-colors duration-500 dark:bg-dark-theme-very-dark-blue">
                <Header theme={theme} setTheme={setTheme} />
                <div className="-mt-[148px] w-full p-6 sm:-mt-[198px]">
                    <TodoList />
                </div>
            </main>
        </div>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <html lang="en"></html>
        <title>ToDo App</title>;
        <meta name="description" content="Simple TODO app" />
    </>
);
