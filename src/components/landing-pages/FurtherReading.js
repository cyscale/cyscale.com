import React from 'react';
import classnames from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { css } from 'twin.macro';
import useScrollTrigger from '../scrollTrigger';

const ctaTransition = css`
    transition: all 0.25s ease-in-out 0s;
`;

const ctaWhitepaperTextColor = css`
    color: #474747;
`;

const downloadWhitepaperLinkColor = css`
    color: #0f26aa;
`;

const hrStyle = css`
    color: #e3e3e3;
    width: 13.5rem;
`;

const FurtherReading = () => {
    const data = useStaticQuery(graphql`
        query FurtherReadingQuery {
            whitepaperCover: file(relativePath: { eq: "whitepaper-cover-blog.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 111, height: 162, layout: FIXED)
                }
            }
        }
    `);

    const trigger = useScrollTrigger();

    return (
        <div className='flex flex-col self-stretch justify-between'>
            <div
                className={`hidden xl:block w-72 sticky pl-10 font-montserrat pb-16  ${trigger ? 'top-0' : 'top-28'}`}
                css={ctaTransition}
            >
                <p
                    className={classnames({ 'text-xs font-semibold uppercase': true, 'mt-4': trigger })}
                    css={ctaWhitepaperTextColor}
                >
                    Further reading
                </p>
                <p className='text-lg font-bold mt-2'>
                    Cloud Compliance in
                    <br /> 2023: An In-Depth Guide
                </p>
                <GatsbyImage
                    alt='White paper Cover'
                    className='rounded-md mt-2 shadow-2xl'
                    image={data.whitepaperCover.childImageSharp.gatsbyImageData}
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
            </div>
        </div>
    );
};

export default FurtherReading;
