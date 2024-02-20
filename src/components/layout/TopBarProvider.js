import React, { useState, useLayoutEffect } from 'react';
import TopBarContext from '../../context/TopBarContext';

const TopBarProvider = ({ children }) => {
    const [topBar, setTopBar] = useState(() => {
        const storedState = sessionStorage.getItem('topBar');
        return storedState !== null ? JSON.parse(storedState) : true;
    });
    const [topBarHeight, setTopBarHeight] = useState(null);

    useLayoutEffect(() => {
        sessionStorage.setItem('topBar', JSON.stringify(topBar));
    }, [topBar]);

    const value = { topBar, setTopBar, topBarHeight, setTopBarHeight };

    return <TopBarContext.Provider value={value}>{children}</TopBarContext.Provider>;
};

export default TopBarProvider;
