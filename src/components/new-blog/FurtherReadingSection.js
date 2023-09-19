import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Share from '../Share/Share';
import { css } from 'twin.macro';
import useScrollTrigger from '../scrollTrigger';
import classnames from 'classnames';
import { ctaTransition, hrStyle } from '../../assets/css/styles';

const ctaWhitepaperTextColor = css`
    color: #474747;
`;

const downloadWhitepaperLinkColor = css`
    color: #0f26aa;
`;

const FurtherReadingSection = ({ alert, onChange, emailInput, onKeyDown, onSubmit, data, blog, categories }) => {
    const trigger = useScrollTrigger();
    const dataWhitepaper = useStaticQuery(graphql`
        query FurtherQuery {
            compliance: file(relativePath: { eq: "whitepaper-cover-blog.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 111, height: 162, layout: FIXED)
                }
            }
            misconfiguration: file(relativePath: { eq: "whitepaper-cover-misconfigurations.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 111, height: 162, layout: FIXED)
                }
            }
        }
    `);

    return (
        <div className='flex flex-col self-stretch justify-between'>
            <div
                className={classnames({
                    'hidden xl:block w-72 sticky pl-10 font-montserrat': true,
                    'mt-6': blog,
                    'mb-24': !blog,
                    'top-0': trigger,
                    'top-28': !trigger
                })}
                css={[
                    ctaTransition,
                    css`
                        padding-bottom: 14rem;
                    `
                ]}
            >
                <p
                    className={classnames({
                        'text-xs font-semibold uppercase': true,
                        'mt-4': blog || (trigger && !blog)
                    })}
                    css={ctaWhitepaperTextColor}
                >
                    Further reading
                </p>
                {categories[0] === 'Compliance' && (
                    <>
                        <p className='text-lg font-bold mt-2'>
                            Cloud Compliance in
                            <br /> 2023: An In-Depth Guide
                        </p>
                        <GatsbyImage
                            alt='White paper Cover'
                            className='rounded-md mt-2 shadow-2xl'
                            image={dataWhitepaper.compliance.childImageSharp.gatsbyImageData}
                        />

                        <p className='text-xs mt-4 font-montserrat' css={ctaWhitepaperTextColor}>
                            The whitepaper talks about ISO 27001, SOC 2, PCI-DSS, GDPR, HIPAA.
                        </p>
                        <Link
                            className='text-xs underline'
                            css={downloadWhitepaperLinkColor}
                            to={'/whitepaper/the-complete-guide-to-cloud-compliance/'}
                        >
                            Download Whitepaper
                        </Link>
                        <hr className='mt-4' css={hrStyle} />
                        <p className='text-lg font-bold mt-4'>
                            Cloud Storage <br /> Misconfigurations
                        </p>
                        <p className='text-xs mt-4 font-montserrat' css={ctaWhitepaperTextColor}>
                            Build and maintain a strong <br /> Security Program from the start.
                        </p>
                        <Link
                            className='text-xs underline'
                            css={downloadWhitepaperLinkColor}
                            to={'/whitepaper/cloud-storage-misconfigurations/'}
                        >
                            Download Whitepaper
                        </Link>
                    </>
                )}
                {categories[0] !== 'Compliance' && (
                    <>
                        <p className='text-lg font-bold mt-2'>
                            Cloud Storage <br /> Misconfigurations
                        </p>
                        <GatsbyImage
                            alt='White paper Cover'
                            className='rounded-md mt-2 shadow-2xl'
                            image={dataWhitepaper.misconfiguration.childImageSharp.gatsbyImageData}
                        />

                        <p className='text-xs mt-4 font-montserrat' css={ctaWhitepaperTextColor}>
                            Build and maintain a strong <br /> Security Program from the start.
                        </p>
                        <Link
                            className='text-xs underline'
                            css={downloadWhitepaperLinkColor}
                            to={'/whitepaper/cloud-storage-misconfigurations/'}
                        >
                            Download Whitepaper
                        </Link>
                        <hr className='mt-4' css={hrStyle} />
                        <p className='text-lg font-bold mt-4'>
                            Cloud Compliance in
                            <br /> 2023: An In-Depth Guide
                        </p>
                        <p className='text-xs mt-4 font-montserrat' css={ctaWhitepaperTextColor}>
                            The whitepaper talks about ISO 27001, SOC 2, PCI-DSS, GDPR, HIPAA.
                        </p>
                        <Link
                            className='text-xs underline'
                            css={downloadWhitepaperLinkColor}
                            to={'/whitepaper/the-complete-guide-to-cloud-compliance/'}
                        >
                            Download Whitepaper
                        </Link>
                    </>
                )}
                {blog && <hr className='mt-4' css={hrStyle} />}
                {blog && (
                    <p className='text-xs font-semibold uppercase mt-4' css={ctaWhitepaperTextColor}>
                        Share this article
                    </p>
                )}
                {blog && (
                    <div className='w-12'>
                        <Share
                            title={data?.title}
                            permalink={data?.permalink}
                            description={data?.description}
                            blog={true}
                        />
                    </div>
                )}
            </div>
            {blog && (
                <div className='w-72 pl-10 hidden xl:block z-10'>
                    <div className='bg-lightGrey2 rounded-md p-4 mt-4'>
                        <p className='text-lg font-bold font-montserrat mb-4'>Stay Connected </p>
                        <p className='text-xs font-medium font-montserrat mb-2' css={ctaWhitepaperTextColor}>
                            Receive our latest blog posts and product updates.
                        </p>
                        <input
                            type='email'
                            id='email'
                            className={`bg-gray-50 border-element-modal text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                                alert ? 'mb-0' : 'mb-2'
                            } lg:mb-0`}
                            placeholder='Your email'
                            onChange={onChange}
                            value={emailInput}
                            onKeyDown={onKeyDown}
                        />
                        {alert && (
                            <p className={`${alert.alertClass} text-left text-xs inline-block py-2`}>{alert.message}</p>
                        )}
                        <button
                            type='submit'
                            className='text-white mt-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full pb-2.5 pt-3'
                            onClick={onSubmit}
                            css={css`
                                background-color: #0f26aa !important;
                                &:hover {
                                    background-color: #0b175a !important;
                                }
                            `}
                        >
                            Subscribe to newsletter
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default FurtherReadingSection;
