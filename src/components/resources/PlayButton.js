import React from 'react';

const PlayButton = ({ children, modal, setModal }) => {
    return (
        <div
            onClick={() => {
                setModal(!modal);
            }}
            onKeyPress={() => {}}
            tabIndex='0'
            role='button'
            className='hover:underline'
        >
            {children}
        </div>
    );
};

export default PlayButton;
