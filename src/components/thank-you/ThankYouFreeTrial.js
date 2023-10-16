import React, { useEffect, useState } from 'react';
import { Link, navigate } from 'gatsby';
import PostsPreview from '../new-blog/PostsPreview';
import { Container } from '../atoms/Containers';
import EmailIcon from '../../assets/images/email-icon.svg';
import { css } from 'twin.macro';
import LatestArticlesCarousel from './LatestArticlesCarousel';

const ThankYouFreeTrial = ({ email }) => {
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        const redirectUrl = `https://app.cyscale.com/playground?promo_code=TRIAL-FORM&email=${encodeURIComponent(
            email
        )}`;

        const timer =
            counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : email ? navigate(redirectUrl) : null;

        return () => clearTimeout(timer);
        // eslint-disable-next-line
    }, [counter]);

    return (
        <div className='pb-24 pt-32 lg:pb-32 bg-lightGrey2'>
            <Container>
                <div className='bg-white rounded-md pt-12 pb-24 px-1'>
                    <img src={EmailIcon} alt='' className={'block mx-auto'} />
                    <h1 className='text-center text-xl lg:text-4xl text-blue font-montserrat font-bold mt-8 lg:mt-10'>
                        Thank you for contacting us, our team will be in touch shortly.
                    </h1>
                    <p className='text-lg lg:text-2xl font-montserrat text-center mt-4'>
                        Redirecting to playground in {counter} seconds...
                    </p>{' '}
                </div>
                <p className='text-lg lg:text-2xl font-montserrat text-center mt-24'>
                    Stay on top of the fast-moving world of cloud infrastructure security with our guide:{' '}
                </p>
                <Link
                    to='/blog/cloud-security-challenges/'
                    className='text-lg lg:text-2xl font-montserrat text-center underline block mt-2 mb-12 text-blue font-bold'
                >
                    Top 10 Cloud Security Challenges: Threats, Vulnerabilities, and Solutions
                </Link>
                <div className='hidden lg:block'>
                    <PostsPreview bg='transparent' />
                </div>
                <div
                    className='block lg:hidden'
                    css={css`
                        margin-bottom: 27rem;
                    `}
                >
                    <div className='relative'>
                        <LatestArticlesCarousel />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ThankYouFreeTrial;
