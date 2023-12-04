import Image from 'next/image';
import React from 'react';

const Notification = ({ notification, setReaded }) => {

    const { avatar, name, target, action, message, readed, date } = notification;

    return (
        <li
            className={`notification ${!readed && 'new'}`}
            onClick={() => setReaded(notification)}
        >
            <figure>
                <Image
                    className="avatar"
                    src={avatar}
                    alt="avatar"
                    width={45}
                    height={45}
                />
            </figure>
            <div className="info">
                <span className="name">{name}</span>
                <span className="action"> {action} </span>
                <span className={`target-name ${target.group && 'group'}`}>
                    {' '}
                    {target.name}{' '}
                </span>
                {!readed && <span className="dot"></span>}
                <p className="date">{date}</p>
                {message && <p className="message">{message}</p>}
            </div>
                {target.picture && (
                    <Image
                        className="target-picture"
                        src={target.picture}
                        alt="target image"
                        width={45}
                        height={45}
                    />
                )}
        </li>
    );
};

export default Notification;
