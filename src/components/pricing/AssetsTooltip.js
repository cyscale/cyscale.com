import React from 'react';
import { css } from 'twin.macro';

const AssetsTooltip = () => {
    return (
        <span
            className='underline'
            css={css`
                &:hover .tooltip-content {
                    opacity: 100;
                    pointer-events: auto;
                }
            `}
        >
            assets
            <span
                className='tooltip-content absolute top-full left-0 w-full mt-1 p-2 bg-black text-white text-sm rounded shadow-lg opacity-0 transition ease-in-out duration-200 font-hind'
                css={css`
                    pointer-events: none;
                `}
            >
                Every cloud resource in your environment counts as an asset and is factored into the Security Knowlege
                Graph. The entire data is used as a basis for security analysis, including IAM entities (users, groups,
                policies, etc.), compute instances, disks, VPCs, storage and more. We will clarify your assets on a
                discovery call before you are charged.
            </span>
        </span>
    );
};

export default AssetsTooltip;
