const user1 =  {
    avatar: '/images/avatar-mark-webber.webp',
    name: 'Mark Webber',
    action: 'reacted to your recent post',
    target: {
        name: 'My first tournament today!',
        picture: '',
        group: false,
    },
    readed: false,
    message: '',
    date: '1m ago'
}
const user2 = {
    avatar: '/images/avatar-angela-gray.webp',
    name: 'Angela Gray',
    action: 'followed you',
    target: {
        name: '',
        picture: '',
    },
    readed: false,
    message: '',
    date: '5m ago'
}
const user3 = {
    avatar: '/images/avatar-jacob-thompson.webp',
    name: 'Jacob Thompson',
    action: 'has joined your group',
    target: {
        name: 'Chess Club',
        picture: '',
        group: true,
    },
    readed: false,
    message: '',
    date: '1 day ago'
}
const user4 = {
    avatar: '/images/avatar-rizky-hasanuddin.webp',
    name: 'Rizky Hasanuddin',
    action: 'sent yout a private message',
    target: {
        name: '',
        picture: '',
    },
    readed: true,
    message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
        date: '5 days ago'
}
const user5 = {
    avatar: '/images/avatar-kimberly-smith.webp',
    name: 'Kimberly Smith',
    action: 'commented on your picture',
    target: {
        name: '',
        picture: '/images/image-chess.webp',
    },
    readed: true,
    message: '',
    date: '1 week ago'
}
const user6 = {
    avatar: '/images/avatar-nathan-peterson.webp',
    name: 'Nathan Peterson',
    action: 'reacted to your recent post',
    target: {
        name: '5 end-game strategies to increase your win rate',
        picture: '',
    },
    readed: true,
    message: '',
    date: '2 weeks ago'
}
const user7 = {
    avatar: '/images/avatar-anna-kim.webp',
    name: 'Anna Kim',
    action: 'left the group',
    target: {
        name: 'Chess Club',
        picture: '',
        group: true,
    },
    readed: true,
    message: '',
    date: '2 weeks ago'
}

const notifications = [user1, user2, user3, user4, user5, user6, user7];

export default notifications;