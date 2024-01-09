import React from 'react';
import { useState } from 'react';

const Keyboard = ({ number, setNumber, equation, setEquation }) => {
    const [accumulator, setAccumulator] = useState([]);

    const addNumber = (n) => {
        const isNumber = (i) => /^\d/.test(i);

        if (equation.length === 0) {
            if (isNumber(n) && n !== '0') {
                setNumber(n);
                setEquation([n]);
            } else if (n === '.') {
                setNumber('0.');
                setEquation(['0.']);
            } else {
                setNumber('0');
                n !== '0' && setEquation(['0', n]);
            }
        }

        if (equation.length === 1) {
            if (isNumber(n) || n === '.') {
                if (n === '.' && accumulator.length) {
                    setEquation(['0.']);
                    setNumber('0.');
                    setAccumulator([]);
                } else if (accumulator.length || equation[0] === '0') {
                    setEquation([n]);
                    setNumber(n);
                    setAccumulator([]);
                } else {
                    setEquation([number + n]);
                    setNumber(number + n);
                }
            } else {
                if (number.endsWith('.')) {
                    setNumber(number.substring(0, number.length - 1));
                }
                if (n !== '=' && n !== '.') {
                    setEquation([...equation, n]);
                }
                if (n === '=' && !!accumulator.length) {
                    equation.push(accumulator[0]);
                    equation.push(accumulator[1]);
                    const result = computeEquation();
                    setNumber(result);
                    setEquation([result]);
                }
            }
        }

        if (equation.length === 2) {
            if (isNumber(n)) {
                n !== 0 && setEquation([...equation, n]);
                setNumber(n);
            }
            if (n === '.') {
                setEquation([...equation, '0.']);
                setNumber('0.');
            }
        }

        if (equation.length === 3) {
            if (isNumber(n) || n === '.') {
                equation[2] = equation[2] === '0' ? n : equation[2] + n;
                setEquation(equation);
                setNumber(equation[2]);
            } else {
                const result = computeEquation();
                setNumber(result);
                if (n === '=') {
                    setAccumulator([equation[1], equation[2]]);
                    setEquation([result]);
                } else {
                    setEquation([result, n]);
                }
            }
        }
    };
    const delNumber = () => {
        const length = equation.length;
        if (length !== 2) {
            if (number.length === 1) {
                setNumber('0');
                equation[length - 1] = '0';
                setEquation(equation);
            } else {
                setNumber(number.substring(0, String(number).length - 1));
                equation[length - 1] = number.substring(
                    0,
                    String(number).length - 1
                );
                setEquation(equation);
            }
        }
    };
    const deleteAll = () => {
        setNumber('0');
        setEquation([]);
        setAccumulator([]);
    };
    const computeEquation = () => {
        let result = 0;
        switch (equation[1]) {
            case '+':
                result = Number(equation[0]) + Number(equation[2]);
                break;
            case '-':
                result = Number(equation[0]) - Number(equation[2]);
                break;
            case '*':
                result = Number(equation[0]) * Number(equation[2]);
                break;
            case '/':
                result = Number(equation[0]) / Number(equation[2]);
                break;
            default:
                result = 0;
        }
        return String(Math.round(result * 1e12) / 1e12);
    };

    return (
        <div className="w-full h-[420px] p-[6%] grid gap-[5%] grid-cols-4 grid-rows-5 bg-toggle-keypad-bg rounded-xl sm:p-[32px] sm:gap-[28px] sm:h-[480px]">
            <button className="key key-normal" onClick={() => addNumber('7')}>
                7
            </button>
            <button className="key key-normal" onClick={() => addNumber('8')}>
                8
            </button>
            <button className="key key-normal" onClick={() => addNumber('9')}>
                9
            </button>
            <button className="key key-del" onClick={() => !accumulator.length && delNumber()}>
                DEL
            </button>
            <button className="key key-normal" onClick={() => addNumber('4')}>
                4
            </button>
            <button className="key key-normal" onClick={() => addNumber('5')}>
                5
            </button>
            <button className="key key-normal" onClick={() => addNumber('6')}>
                6
            </button>
            <button className="key key-normal" onClick={() => addNumber('+')}>
                +
            </button>
            <button className="key key-normal" onClick={() => addNumber('1')}>
                1
            </button>
            <button className="key key-normal" onClick={() => addNumber('2')}>
                2
            </button>
            <button className="key key-normal" onClick={() => addNumber('3')}>
                3
            </button>
            <button className="key key-normal" onClick={() => addNumber('-')}>
                -
            </button>
            <button
                className="key key-normal"
                onClick={() =>
                    (!number.includes('.') ||
                        equation.length === 2 ||
                        accumulator.length) &&
                    addNumber('.')
                }
            >
                .
            </button>
            <button className="key key-normal" onClick={() => addNumber('0')}>
                0
            </button>
            <button className="key key-normal" onClick={() => addNumber('/')}>
                /
            </button>
            <button className="key key-normal" onClick={() => addNumber('*')}>
                x
            </button>
            <button className="key key-del col-span-2" onClick={deleteAll}>
                RESET
            </button>
            <button
                className="key key-equal col-span-2"
                onClick={() => addNumber('=')}
            >
                =
            </button>
        </div>
    );
};

export default Keyboard;
