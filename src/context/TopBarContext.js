import { createContext } from 'react';

const TopBarContext = createContext({
    topBar: true,
    setTopBar: () => {},
    topBarHeight: null,
    setTopBarHeight: () => {}
});

export default TopBarContext;
