import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import road from '../assets/images/hit-the-road.svg';
import Footer from '../components/layout/footer';
import Seo from '../components/Seo';
import NewTopNav from '../components/layout/NewTopNav';
import { css } from 'twin.macro';
import classnames from 'classnames';

const NotFoundPage = ({ location }) => {
    const data = useStaticQuery(graphql`
        query NewTopNavQuery {
            markdownRemark(frontmatter: { slug: { eq: "top-bar" } }) {
                frontmatter {
                    enabled
                }
            }
        }
    `);

    useEffect(() => {
        if (window) {
            window.history.pushState({}, null, '/404');
        }
    }, []);

    return (
        <>
            <NewTopNav pageName='404' scrollable={false} location={location} />
            <Seo title='Cyscale | Not found' description='Not found page' pageName='404' location={location} />
            <Helmet>
                <meta name='robots' content='noindex' />
                <meta name='robots' content='nofollow' />
            </Helmet>
            <div className='text-center height-screen pt-20 pb-32 max-w-xl mx-auto'>
                <h1
                    className={classnames({
                        'font-semibold m-0 text-9xl': true,
                        'mt-20': data.markdownRemark.frontmatter.enabled
                    })}
                >
                    404
                </h1>
                <p className='text-lg'>
                    You just hit the <strong>404 Route</strong> that doesn't exist... Go
                    <Link className='text-blue' to='/'>
                        <strong> Home </strong>
                    </Link>
                    instead.
                </p>
                <div className='border-t border-grey3 mt-10 mb-10' />
                <img className='max-w-md lg:max-w-xl mx-auto mt-6' src={road} alt='' />
            </div>
            <Footer pageUri={location?.pathname} pageName={'404'} />
        </>
    );
};

export default NotFoundPage;
