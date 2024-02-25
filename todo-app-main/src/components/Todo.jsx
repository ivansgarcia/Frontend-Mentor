import React from 'react';
import removeIcon from '../images/icon-cross.svg';
import CheckButton from './CheckButton';

const Todo = ({ todo, index, remove, toggleCompleted }) => {
    return (
        <div
            className={`todo-element h-[53px] border-b border-b-dark-theme-light-grayish-blue dark:border-b-light-theme-very-dark-grayish-blue sm:h-[65px]`}
        >
            <CheckButton
                action={() => toggleCompleted(index)}
                completed={todo.completed}
            />
            <p
                className={`text-style max-w-4/5 flex-1 pt-1 sm:-mt-1 ${
                    todo.completed && 'line-through opacity-50'
                }`}
            >
                {todo.text}
            </p>
            <button onClick={() => remove(index)}>
                <img src={removeIcon} alt="delete" width={12} />
            </button>
        </div>
    );
};

export default Todo;
