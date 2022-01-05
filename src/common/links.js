export const FFREE_TRIAL_LINK = 'https://app.cyscale.com/#/register';

export const useAppLink = () => {
    const path = typeof window !== 'undefined' ? window.location.pathname || '/home' : '';
    const source = path ? `?source=${path || '/'}` : '';
    return `https://app.cyscale.com/#/register${source}`;
};
