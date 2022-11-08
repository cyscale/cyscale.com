import React from 'react';

const onRenderBody = ({ setHeadComponents, pathname }) => {
    if (pathname === '/campaigns/cspm-solution/') {
        setHeadComponents([<script src='https://www.googleoptimize.com/optimize.js?id=OPT-WDWQG73'></script>]);
    }
};

export { onRenderBody };
