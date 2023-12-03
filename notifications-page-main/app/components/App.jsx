"use client"; 
import Notification from './Notification';
import notifications from '../notifications';
import React from "react";
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
    weight: ['500', '800'],
    subsets: ['latin'],
})

export default function App() {
    const [notificationList, setNotificationList] =
        React.useState(notifications);
    const [newNotifications, setNewNotifications] = React.useState(
        notificationList.filter((x) => !x.readed).length
    );

    const setAllRead = () => {
        let newNotificationList = [...notificationList];
        newNotificationList.forEach((x) => (x.readed = true));
        setNotificationList([...newNotificationList]);
        setNewNotifications(0);
    };

    const decreaseNotifications = () => {
        let newNots = newNotifications;
        newNots--;
        setNewNotifications(newNots);
    };

    return (
        <>
            <div className={`App ${jakarta.className}`}>
                <header>
                    <h3 className="title">Notifications</h3>
                    <span className="notification-count">
                        {newNotifications}
                    </span>
                    <button id="all-read" onClick={() => setAllRead()}>
                        Mark all as read
                    </button>
                </header>
                <div className="clear"></div>
                <ul>
                    {notificationList.map((notification, index) => (
                        <Notification
                            key={index}
                            props={notification}
                            readed = {notification.readed}
                            decreaseNotifications={decreaseNotifications}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}
