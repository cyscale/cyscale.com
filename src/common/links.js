import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
export const FREE_TRIAL_LINK = 'https://app.cyscale.com/#/register';

export const useAppLink = () => {
    const context = useContext(GlobalContext);
    const location = context.location;
    const path = location?.href;
    const source = path ? `?source=${path || '/'}` : '';

    return `${FREE_TRIAL_LINK}${source}`;
};
