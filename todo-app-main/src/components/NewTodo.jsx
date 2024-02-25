import React from 'react';
import { useState } from 'react';
import CheckButton from './CheckButton';

const NewTodo = ({ addTodo }) => {
    const [newTodoText, setNewTodoText] = useState('');
    const [completed, setCompleted] = useState(false);

    const addNewTodo = () => {
        addTodo(newTodoText, completed);
        setNewTodoText('');
        setCompleted(false);
    };

    return (
        <div className="todo-element mb-4 h-[48px] rounded-[5px] sm:mb-6 sm:h-16">
            <CheckButton
                action={() => setCompleted(!completed)}
                completed={completed}
            />
            <input
                maxLength={70}
                className="text-style mt-[4px] flex-1 bg-transparent outline-none"
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Create a new todo..."
                onKeyDown={(e) =>
                    e.key === 'Enter' && newTodoText && addNewTodo()
                }
            />
        </div>
    );
};

export default NewTodo;
