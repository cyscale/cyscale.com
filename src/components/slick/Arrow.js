import React from 'react';
import arrowLeft from '../../assets/images/arrow-left.svg';

export default function Arrow({ direction = 'left', ...rest }) {
    return (
        <button
            {...rest}
            style={{ padding: 2 }}
            disabled={!rest.onClick}
            className={`rounded-full bg-gradient-primary  absolute top-full right-0 left-none
            ${direction === 'right' ? 'mr-8' : 'mr-20'}
            ${!rest.onClick ? 'opacity-60' : ''}
            `}
        >
            <div
                className={`bg-white rounded-full transition-colors w-6 h-6 p-1
            ${rest.onClick ? 'hover:bg-lightGreyEEE' : ''}
            `}
            >
                <img
                    alt=""
                    width={16}
                    height={16}
                    src={arrowLeft}
                    className={direction === 'right' && 'transform rotate-180'}
                />
            </div>
        </button>
    );
}
