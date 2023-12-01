import Notification from '@/components/Notification';
import '../styles/App.scss';
import React from 'react';
import notifications from '../notifications';
import '../../src/styles/Notification.scss';

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
        console.log(newNotificationList);
        setNewNotifications(0);
    };

    const decreaseNotifications = () => {
        let newNots = newNotifications;
        newNots--;
        setNewNotifications(newNots);
    };

    return (
        <>
            <div className="App">
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
                            key={notificationList.indexOf(notification)}
                            props={notification}
                            decreaseNotifications={decreaseNotifications}
                        />
                    ))}
                </ul>
            </div>
            <div className="attribution">
                Challenge by{' '}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Your Name Here</a>.
            </div>
        </>
    );
}
