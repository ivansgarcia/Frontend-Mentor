import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ props, decreaseNotifications }) => {
    let { avatar, name, target, action, message, readed, date } = props;

    // const [notifi, setNotifi] = React.useState(props);
    const [isReaded, setIsReaded] = React.useState(readed);

    // console.log(target.picture);
    // console.log(target.group);

    React.useEffect(() => {
        setIsReaded(readed);
    }, [readed]);

    const setReaded = () => {
        if (!readed) {
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
                <span className={`target-name ${target.group && 'group'}`}> {target.name} </span>
                {!isReaded && <span className="dot"></span>}
                {target.picture && (
                    <Image
                        className="target-picture"
                        src={target.picture}
                        alt="target image"
                        width={40}
                        height={40}
                    />
                )}
            <p className="date">{date}</p>
            {message && <p className="message">{message}</p>}
            </div>
        </li>
    );
};

export default Notification;
