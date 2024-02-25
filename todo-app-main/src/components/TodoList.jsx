import React from 'react';
import { useState } from 'react';
import Todo from './Todo';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import NewTodo from './NewTodo';
import Filter from './Filter';
import { useEffect } from "react";

const TodoList = () => {
    const defaultTodoList = [
        {
            text: 'Complete online JavaScript course',
            completed: true,
        },
        {
            text: 'Jog around the park 3x',
            completed: false,
        },
        {
            text: '10 minutes meditation',
            completed: false,
        },
        {
            text: 'Read for 1 hour',
            completed: false,
        },
        {
            text: 'Pick up groceries',
            completed: false,
        },
        {
            text: 'Complete Todo App on Frontend Mentor',
            completed: false,
        },
    ];
    const [todoList, setTodoList] = useState(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem('savedList')) ?? defaultTodoList;
        } else {
            return defaultTodoList;
        }
    });

    useEffect(() => {
        localStorage.setItem('savedList', JSON.stringify(todoList));
    }, [todoList]);

    const [filter, setFilter] = useState(null);

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const newList = reorder(
            todoList,
            result.source.index,
            result.destination.index
        );

        setTodoList(newList);
    };

    const addTodo = (newTodoText, completed) => {
        const newTodo = {
            text: newTodoText,
            completed: completed,
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };

    const removeTodo = (index) => {
        const newTodoList = todoList.filter(
            (t) => todoList.indexOf(t) !== index
        );
        setTodoList(newTodoList);
    };

    const toggleCompleted = (index) => {
        let newTodoList = [...todoList];
        newTodoList[index].completed = !todoList[index].completed;
        setTodoList(newTodoList);
    };

    const clearCompleted = () => {
        const newTodoList = todoList.filter((t) => !t.completed);
        setTodoList(newTodoList);
    };

    const filteredList = (filter) => {
        switch (filter) {
            case 'completed':
                return [...todoList.filter((t) => t.completed)];
            case 'active':
                return [...todoList.filter((t) => !t.completed)];
            default:
                return [...todoList];
        }
    };

    const onDragUpdate = (result) => {
        if (result.destination === null) {
            console.log('out');
            document.body.style.cursor = 'no-drop';
        } else {
            console.log('in');
            document.body.style.cursor = '';
        }
    };

    return (
        <div className="mx-auto flex max-w-[540px] flex-col items-center">
            <NewTodo addTodo={addTodo} />
            {!filteredList(filter).length ? (
                <p className="todo-element w-full h-[50px] text-center text-style rounded-t-[5px] justify-center">No items...</p>
            )
            :
            (

            <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="flex w-full flex-col overflow-hidden rounded-t-[5px]"
                        >
                            {filteredList(filter).map((todo, index) => (
                                <Draggable
                                    key={index}
                                    draggableId={String(index)}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Todo
                                                todo={todo}
                                                index={index}
                                                remove={removeTodo}
                                                toggleCompleted={
                                                    toggleCompleted
                                                }
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            )
            }
            <div className="flex h-[50px] w-full items-center justify-between rounded-b-[5px] bg-light-theme-very-light-gray px-5 text-xs tracking-tight text-light-theme-dark-grayish-blue transition-colors duration-500 dark:bg-dark-theme-very-dark-desaturated-blue dark:text-dark-theme-dark-grayish-blue sm:h-[50px] sm:px-6 sm:text-sm ">
                <span>
                    {todoList.filter((t) => !t.completed).length} items left
                </span>
                <div className="max-sm:hidden">
                    <Filter filter={filter} setFilter={setFilter} />
                </div>
                <button
                    className="tracking-[-0.01em] transition-colors hover:text-dark-theme-very-dark-blue hover:dark:text-light-theme-very-light-grayish-blue sm:tracking-[-0.02em]"
                    onClick={clearCompleted}
                >
                    Clear Completed
                </button>
            </div>
            <div className="my-4 w-full sm:hidden">
                <Filter filter={filter} setFilter={setFilter} />
            </div>
            <p className="my-[24px] text-[15px] tracking-tighter text-light-theme-dark-grayish-blue dark:text-dark-theme-dark-grayish-blue sm:my-12 sm:text-sm sm:tracking-tight">
                Drag and drop to reorder list
            </p>
        </div>
    );
};

export default TodoList;
