import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
export const FREE_TRIAL_LINK = 'https://app.cyscale.com/register';

export const useAppLink = (props) => {
    const context = useContext(GlobalContext);
    const location = context?.location || props?.location;
    const source = location?.pathname ? `?source=${location?.pathname || '/'}` : '';
    return `${FREE_TRIAL_LINK}${source}`;
};

export const IAMTopArticles = [
    {
        text: 'Securing IAM - Best Practices Recommended by AWS, Azure, and Google Cloud',
        link: '/blog/iam-best-practices-from-aws-azure-gcp/'
    },
    {
        text: (
            <>
                IAM Services in AWS, Azure, and <br class='hidden lg:block' /> Google Cloud - A Cloud Industry Overview
            </>
        ),
        link: '/blog/iam-services-in-aws-azure-gcp/'
    },
    {
        text: 'Okta Security Best Practices',
        link: '/blog/iam-okta-security-best-practices/'
    },
    {
        text: (
            <>
                Providing Visibility Over Cloud Access –<br class='hidden lg:block' /> Okta Integration in Cyscale
            </>
        ),
        link: '/blog/provide-visibility-in-cloud-okta-integration/'
    }
];
