import React from 'react';

const CustomConfirmDialog = ({ id, onClose, remove }) => {
    const confirmDelete = () => {
        remove(id);
        onClose(false);
    };

    React.useEffect(() => {
        document.querySelector('body').style = "overflow: hidden";
        return () => {
            document.querySelector('body').style = "overflow: auto";            
        };
    }, []);

    return (
        <div
            id="static-modal"
            data-modal-backdrop="static"
            tabIndex="-1"
            backdrop="static"
            className="flex overflow-y-auto overflow-x-hidden bg-black bg-opacity-60 fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen"
        >
            <div className="w-full max-w-[400px] mx-4 px-7 py-6 bg-white flex flex-col justify-around gap-4 rounded-lg">
                <h3 className="text-[22px] font-medium text-dark-blue">
                    Delete comment
                </h3>
                <p className="text-grayish-blue font-normal pr-4">
                    Are yu sure yu want to delete this comment? This will remove
                    the comment and can't be undone.
                </p>
                <div className="flex w-full justify-between gap-4 text-white">
                    <button
                        className="w-full px-2 py-3 rounded-lg bg-grayish-blue hover:brightness-300"
                        onClick={() => onClose(false)}
                    >
                        NO, CANCEL
                    </button>
                    <button
                        className="w-full px-2 py-3 rounded-lg bg-soft-red hover:brightness-200"
                        onClick={confirmDelete}
                    >
                        YES, DELETE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomConfirmDialog;
