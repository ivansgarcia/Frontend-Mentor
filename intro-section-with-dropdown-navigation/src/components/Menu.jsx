import React from 'react'
import iconTodo from '../images/icon-todo.svg';
import iconCalendar from '../images/icon-calendar.svg';
import iconReminders from '../images/icon-reminders.svg';
import iconPlanning from '../images/icon-planning.svg';

const Menu = () => {

    const [showMenu, setShowMenu] = React.useState(false);

    if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => setShowMenu(false));
    }

    return (
        <div className='w-screen h-full p-2 text-sm max-md:absolute flex flex-col'>
                <div 
                    className={`cursor-pointer z-10 self-end w-10 h-10 m-6 ${showMenu ? 'bg-icon-close-menu' : 'bg-icon-menu'} md:hidden bg-no-repeat max-md:block`}
                    onClick={() => setShowMenu(!showMenu)}
                    onKeyDown={() => setShowMenu(!showMenu)}
                    role='presentation'
                />
                <div
                    className={`max-md:absolute w-full h-full max-md:bg-almost-black/50 ${showMenu ? 'max-md:block' : 'max-md:hidden'}`}
                >
                    <div className='ml-auto w-full max-md:w-2/3 max-md:p-6 bg-almost-white flex items-center max-md:flex-col max-md:h-screen max-md:text-xl max-md:items-start'>
                        <div className='group py-4 hover:text-almost-black cursor-pointer max-md:w-full max-md:mt-12'>
                            <span className="px-3 flex items-center">
                                Features
                                <div className='arrow' alt="down arrow"/>
                            </span>
                            <ul className='absolute hidden -ml-12 mt-3 py-4 px-6 bg-white rounded-lg shadow-2xl  group-hover:block text-medium-gray max-md:m-0 max-md:bg-almost-white max-md:shadow-none max-md:static max-md:pl-10'>
                                <li className='flex items-center py-2 '><img className='pr-4 max-md:w-9' src={iconTodo} alt="todo list" />Todo List</li>
                                <li className='flex items-center py-2 '><img className='pr-4 max-md:w-9' src={iconCalendar} alt="calendar" />Calendar</li>
                                <li className='flex items-center py-2 '><img className='pr-4 max-md:w-9' src={iconReminders} alt="reminders" />Reminders</li>
                                <li className='flex items-center py-2 '><img className='pr-4 max-md:w-9' src={iconPlanning} alt="planning" />Planning</li>
                            </ul>
                        </div>
                        <div className="group py-4 hover:text-almost-black cursor-pointer max-md:w-full">
                            <span className="px-3 flex items-center">
                                Company
                                <div className='arrow' alt="down arrow"/>
                            </span>
                            <ul className='absolute hidden mt-3 py-4 px-6 bg-white rounded-lg shadow-2xl align-middle group-hover:block text-medium-gray max-md:m-0 max-md:bg-almost-white max-md:shadow-none max-md:w-full max-md:align-middle max-md:static max-md:pl-0'>
                                <li className='py-1 max-md:px-10'>History</li>
                                <li className='py-1 max-md:px-10'>Our Team</li>
                                <li className='py-1 max-md:px-10'>Blog</li>
                            </ul>
                        </div>
                        <span className="px-4 max-md:mt-4 hover:text-almost-black cursor-pointer">
                            Careers
                        </span>
                        <span className="px-4 max-md:mt-8 hover:text-almost-black cursor-pointer">
                            About
                        </span>
                        <button className=" py-2 px-5 mr-6 ml-auto hover:text-almost-black max-md:m-0 max-md:w-full max-md:text-xl max-md:mt-12">Login</button>
                        <button className=" py-2 px-5 mr-9 border-2 rounded-2xl border-medium-gray hover:border-almost-black hover:text-almost-black max-md:w-full max-md:text-xl max-md:mt-6 max-md:mx-auto">
                            Register
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default Menu