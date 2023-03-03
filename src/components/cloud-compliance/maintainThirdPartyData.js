import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function MaintainThirdPartyData() {
    const data = useStaticQuery(graphql`
        query MaintainThirdPartyDataQuery {
            maintain: file(relativePath: { eq: "new-maintain-3rd-party-data-image.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);
    return (
        <div className='block w-full mt-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-24'>
                <div className='xl:col-span-2'>
                    <GatsbyImage
                        image={data.maintain.childImageSharp.gatsbyImageData}
                        alt='Maintain a 3rd-party, fully auditable data trail'
                        className='w-full max-w-full'
                    />
                </div>
                <div>
                    <p className='text-base text-black leading-normal font-normal'>
                        Achieve third-party validation for global security frameworks and compliance requirements with
                        the Cyscale Cloud Platform.
                        <br />
                        <br />
                        Easily demonstrate implementation for must-have cloud security controls and policies for every
                        entity in your environment. We keep a fully auditable data trail for up to 1 year that includes
                        identity, access, changes, application and system logs, and operations.
                        <br />
                        <br />
                        As your organization matures, use Cyscale to simplify and keep effort and costs low with a setup
                        that keeps you always prepared for audits additional regulations require.
                    </p>
                </div>
            </div>
        </div>
    );
}
