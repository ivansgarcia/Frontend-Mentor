import React from 'react';
import data from '../data/data.json';
import CommentForm from './CommentForm';
import Comment from './Comment';

const App = () => {
    const [comments, setComments] = React.useState(data.comments);

    const loadData = async () => {
        const savedData = await JSON.parse(localStorage.getItem('data'));
        savedData
            ? setComments(savedData.comments)
            : setComments(data.comments);
    };

    React.useEffect(() => {
        loadData();
    }, []);

    React.useEffect(() => {
        const saveData = () => {
            let actualData = {
                currentUser: data.currentUser,
                comments: comments,
            };
            localStorage.setItem('data', JSON.stringify(actualData));
        };
        saveData();
    }, [comments]);

    const deleteComment = (id) => {
        let newComments = comments.filter((c) => c.id !== id);

        for (let c of newComments) {
            const updatedReplies = c.replies.filter((r) => r.id !== id);
            c.replies = [...updatedReplies];
        }
        setComments(newComments);
    };

    const addComment = (newComment) => {
        newComment.id = getNextId();
        setComments([...comments, newComment]);
    };

    const addReply = (newReply, originalUser) => {
        const newComments = [...comments];
        newReply.id = getNextId();
        const originalComment = newComments.find(
            (c) => c.user.username === originalUser
        );
        originalComment.replies.push(newReply);
        setComments(newComments);
    };

    const updateComment = (updatedComment) => {
        const newComments = [...comments];
        let oldComment = newComments.find((c) => c.id === updatedComment.id);
        oldComment = updatedComment;
        setComments(newComments);
    };

    const getNextId = () => {
        let maxId = 0;
        comments.forEach((c) => (maxId = maxId <= c.id ? c.id + 1 : maxId));
        comments.forEach((c) =>
            c.replies.forEach((r) => (maxId = maxId <= r.id ? r.id + 1 : maxId))
        );
        return maxId;
    };

    return (
        <div className="w-screen h-full min-h-screen py-10 px-4 flex flex-col items-center gap-4 bg-very-light-gray sm:py-[65px]">
            {comments.map((comment, i) => (
                <Comment
                    key={i}
                    comment={comment}
                    currentUser={data.currentUser}
                    remove={deleteComment}
                    addReply={addReply}
                    update={updateComment}
                />
            ))}
            <CommentForm addComment={addComment} isReply={false} />
        </div>
    );
};

export default App;
