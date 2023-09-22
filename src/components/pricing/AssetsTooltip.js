import React from 'react';

const AssetsTooltip = () => {
    return (
        <span className='group underline'>
            assets
            <span className='absolute top-full left-0 w-full mt-1 p-2 bg-black text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 font-hind'>
                Every cloud resource in your environment counts as an asset and is factored into the Security Knowlege
                Graph. The entire data is used as a basis for security analysis, including IAM entities (users, groups,
                policies, etc.), compute instances, disks, VPCs, storage and more. We will clarify your assets on a
                discovery call before you are charged.
            </span>
        </span>
    );
};

export default AssetsTooltip;
