import React from 'react';
import Layout from '../components/layout/CleanLayout';
import { Container } from '../components/atoms/Containers';
import { Link } from 'gatsby';
import { css } from 'twin.macro';
import PostsPreview from '../components/new-blog/PostsPreview';
import LatestArticlesCarousel from '../components/thank-you/LatestArticlesCarousel';
import EmailIcon from '../assets/images/email-icon.svg';
const ThankYou = ({ location }) => {
    return (
        <Layout
            location={location}
            pageName='ThankYou'
            title={`Thank you! - Cyscale`}
            description={'Thank you!'}
            noIndex={true}
        >
            <div className='pt-24 pb-24 lg:pt-32 lg:pb-32 bg-lightGrey2'>
                <Container>
                    <div className='bg-white rounded-md pt-12 pb-24 px-1'>
                        <img src={EmailIcon} alt='' className={'block mx-auto'} />
                        <h1 className='text-center text-xl lg:text-4xl text-blue font-montserrat font-bold mt-8 lg:mt-10'>
                            Thank you for contacting us, our team will be in touch shortly.
                        </h1>
                        <p className='text-lg lg:text-2xl font-montserrat text-center mt-4'>
                            If you have any further questions in the meantime, you can reach out to us via email:{' '}
                            <a href='mailto:contact@cyscale.com' className='underline text-blue'>
                                contact@cyscale.com
                            </a>
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
        </Layout>
    );
};

export default ThankYou;
