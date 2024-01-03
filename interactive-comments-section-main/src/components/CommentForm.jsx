import React from 'react';
import data from '../data/data.json';

const CommentForm = ({
    addComment,
    isReply,
    setReplying,
    replyingTo,
    originalCommentUser,
}) => {
    const [newCommentText, setNewCommentText] = React.useState('');
    const replyRef = React.useRef(null);

    const clickAction = React.useCallback((e) => {
        if (replyRef.current && !replyRef.current.contains(e.target)) {
            if(replyingTo) {
                setReplying(false);
            } else {
                setNewCommentText('');
                document.removeEventListener('mousedown', clickAction);
            }
        }
    }, [replyingTo, setReplying]);

    React.useEffect(() => {
        isReply && document.addEventListener('mousedown', clickAction);
        return () => {
            document.removeEventListener('mousedown', clickAction);
        };
    }, [replyRef, isReply, clickAction]);

    const add = (e) => {
        e.preventDefault();
        const newComment = {
            content: newCommentText,
            createdAt: Date.now(),
            score: 0,
            user: data.currentUser,
            replies: [],
        };
        if (isReply) {
            newComment.replyingTo = replyingTo;
        }
        addComment(newComment, originalCommentUser);
        setNewCommentText('');
        replyingTo && setReplying(false);
    };

    return (
        <form
            ref={replyRef}
            onSubmit={add}
            className="bg-white w-full p-4 mt-2 flex flex-wrap justify-between items-center rounded-lg sm:items-start sm:gap-5 sm:p-5 sm:max-w-[730px] sm:flex-nowrap"
        >
            <textarea
                onClick={() =>
                    !isReply &&
                    document.addEventListener('mousedown', clickAction)
                }
                autoFocus={isReply}
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                className="w-full mb-4 px-4 py-2 rounded-lg resize-none border focus:outline-none focus:border-black"
                name=""
                id=""
                rows="3"
                placeholder={`${
                    isReply ? 'Add a reply...' : 'Add a comment...'
                }`}
                required
                onKeyDown={e => e.key === 'Enter' && !newCommentText.match(/^\s*$/) && add(e)}
            ></textarea>
            <img
                className="sm:w-9 sm:-order-1"
                src={data.currentUser.image.png}
                alt="user"
                width={35}
            />
            <button
                type="submit"
                className="text-white px-7 py-3 font-medium bg-moderate-blue rounded-lg hover:enabled:brightness-200 disabled:bg-light-gray transition-colors"
                disabled={newCommentText.match(/^\s*$/)}
            >
                {isReply ? 'REPLY' : 'SEND'}
            </button>
        </form>
    );
};

export default CommentForm;
