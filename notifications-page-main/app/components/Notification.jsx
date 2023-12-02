import Image from 'next/image';
import React from 'react';
import '../styles/notification.scss'

const Notification = ({ props, decreaseNotifications }) => {
    let { avatar, name, target, action, message, readed, date } = props;

    const [isReaded, setIsReaded] = React.useState(readed);

    const setReaded = () => {
        if (!isReaded) {
            setIsReaded(true);
            decreaseNotifications();
        }
    };

    return (
        <li
            className={`notification ${!isReaded && 'new'}`}
            onClick={() => setReaded()}
        >
            <figure>
                <Image
                    className="avatar"
                    src={avatar}
                    alt="avatar"
                    width={40}
                    height={40}
                />
            </figure>
            <div className="info">
                <span className="name">{name}</span>
                <span className="action"> {action} </span>
                <span className={`target-name ${target.group && 'group'}`}>
                    {' '}
                    {target.name}{' '}
                </span>
                {!isReaded && <span className="dot"></span>}
                <p className="date">{date}</p>
                {message && <p className="message">{message}</p>}
            </div>
                {target.picture && (
                    <Image
                        className="target-picture"
                        src={target.picture}
                        alt="target image"
                        width={40}
                        height={40}
                    />
                )}
        </li>
    );
};

export default Notification;
