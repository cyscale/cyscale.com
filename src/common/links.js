export const FFREE_TRIAL_LINK = 'https://app.cyscale.com/#/register';

export const useAppLink = () => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    return `https://app.cyscale.com/#/register?source=${path}`;
};
