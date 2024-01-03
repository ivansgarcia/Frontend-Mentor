import React from 'react';
import ConfirmDialog from './ConfirmDialog';
import CommentForm from './CommentForm';
import { timeSince } from "../data/TimeCalculator";

const Comment = ({ comment, currentUser, remove, addReply, update }) => {
    const { content, createdAt, id, score, liked, user, replyingTo } = comment;
    const [open, setOpen] = React.useState(false);
    const [replying, setReplying] = React.useState(false);
    const [editing, setEditing] = React.useState(false);
    const [newCommentText, setNewCommentText] = React.useState(content);
    const [isLiked, setIsLiked] = React.useState(liked);

    const commentRef = React.useRef(null);

    React.useEffect(() => {
        setNewCommentText(content);
        setIsLiked(isLiked);
        const clickListener = (e) => {
            if (commentRef && !commentRef.current.contains(e.target)) {
                setEditing(false);
                document.removeEventListener('mousedown', clickListener);
            }
        };
        if (editing) {
            document.addEventListener('mousedown', clickListener);
        } else {
            document.removeEventListener('mousedown', clickListener);
        }
    }, [editing, content, isLiked]);

    const updateCommentText = () => {
        const updatedComment = comment;
        updatedComment.content = newCommentText;
        updatedComment.createdAt = Date.now();
        update(updatedComment);
        setEditing(false);
    };

    const toggleLiked = () => {
        const updatedComment = comment;
        updatedComment.liked = !liked;
        setIsLiked(!liked);
        update(updatedComment);
    }

    return (
        <div className="w-full sm:max-w-[730px]" ref={commentRef}>
            <main className="p-4 flex flex-wrap gap-6 justify-between items-center bg-white rounded-lg sm:justify-end sm:p-6 sm:items-start sm:flex-nowrap">
                <div className="flex flex-col gap-4 self-start w-full">
                    <header className="w-full flex items-center gap-4">
                        <img src={user.image.webp} width={32} alt="avatar" />
                        <h2 className="font-medium">{user.username}</h2>
                        {currentUser.username === user.username && (
                            <p className="px-1.5 pb-0.5 text-xs align-middle text-white bg-moderate-blue rounded-sm">
                                you
                            </p>
                        )}
                        <p className="text-grayish-blue">{timeSince(createdAt)}</p>
                    </header>
                    {!editing ? (
                        <p className="text-grayish-blue break-words w-full sm:-mr-8 sm:w-auto">
                            <span className="text-moderate-blue font-bold">
                                {replyingTo ? '@' + replyingTo : ''}{' '}
                            </span>
                            {content}
                        </p>
                    ) : (
                        <textarea
                            className="text-grayish-blue w-full p-4 rounded-lg resize-none border focus:outline-none focus:border-black"
                            onChange={(e) => setNewCommentText(e.target.value)}
                            value={newCommentText}
                            rows={3}
                            autoFocus
                            onKeyDown={e => e.key === 'Enter' && updateCommentText()}
                        ></textarea>
                    )}
                </div>
                <div className="flex gap-1 justify-evenly items-center bg-very-light-gray rounded-lg sm:flex-col sm:-order-1 sm:gap-1 sm:w-[45px]">
                    <button onClick={() => !liked && toggleLiked()}>
                        <img
                            className={`score-btn p-3.5 ${
                                !liked && 'score-btn-hover'
                            } min-w-max`}
                            src="/images/icon-plus.svg"
                            alt="plus"
                        />
                    </button>
                    <p
                        className={`${
                            liked ? 'text-soft-red' : 'text-moderate-blue'
                        } font-medium sm:text-[17px]`}
                    >
                        {liked ? score + 1 : score}
                    </p>
                    <button onClick={() => liked && toggleLiked()}>
                        <img
                            className={`score-btn p-3.5 ${
                                liked && 'score-btn-hover'
                            } min-w-max`}
                            src="/images/icon-minus.svg"
                            alt="minus"
                        />
                    </button>
                </div>
                {currentUser.username === user.username ? (
                    <div
                        className={`flex min-w-max gap-4 font-medium sm:-ml-32 ${
                            editing && 'self-end mt-44'
                        }`}
                    >
                        {!editing ? (
                            <>
                                <button
                                    className="flex items-center gap-2 text-soft-red hover:brightness-200"
                                    onClick={() => setOpen(true)}
                                >
                                    <img
                                        src="/images/icon-delete.svg"
                                        alt="delete"
                                        width="13px"
                                    />
                                    Delete
                                </button>
                                {open && (
                                    <ConfirmDialog
                                        id={id}
                                        remove={remove}
                                        onClose={setOpen}
                                    />
                                )}
                                <button
                                    className="flex items-center gap-2 text-moderate-blue hover:brightness-200"
                                    onClick={() => setEditing(true)}
                                >
                                    <img
                                        src="/images/icon-edit.svg"
                                        alt="edit"
                                        width="15px"
                                    />
                                    Edit
                                </button>
                            </>
                        ) : (
                            <button
                                className="text-white px-7 py-3 font-medium bg-moderate-blue rounded-lg hover:enabled:brightness-200 disabled:bg-light-gray transition-colors"
                                onClick={updateCommentText}
                                disabled={!newCommentText}
                            >
                                UPDATE
                            </button>
                        )}
                    </div>
                ) : (
                    <button
                        className="flex justify-end items-center gap-2 text-moderate-blue font-medium hover:brightness-200 sm:-ml-12"
                        onClick={() => setReplying(true)}
                    >
                        <img src="/images/icon-reply.svg" alt="reply" />
                        Reply
                    </button>
                )}
            </main>
            {replying && (
                <CommentForm
                    addComment={addReply}
                    replying={replying}
                    setReplying={setReplying}
                    replyingTo={user.username}
                    originalCommentUser={replyingTo ?? user.username}
                    isReply={true}
                />
            )}
            {comment.replies && comment.replies.length > 0 && (
                <div
                    className={`mt-4 flex flex-col gap-4 ${
                        replyingTo ??
                        'pl-4 border-l-2 border-light-gray sm:pl-10 sm:ml-10'
                    }`}
                >
                    {comment.replies.map((r, i) => (
                        <Comment
                            key={i}
                            comment={r}
                            currentUser={currentUser}
                            remove={remove}
                            addReply={addReply}
                            update={update}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment;
