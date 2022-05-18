import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
export const FREE_TRIAL_LINK = 'https://app.cyscale.com/register';

export const useAppLink = (props) => {
    const context = useContext(GlobalContext);
    const location = context?.location || props?.location;
    const source = location?.pathname ? `?source=${location?.pathname || '/'}` : '';
    return `${FREE_TRIAL_LINK}${source}`;
};
