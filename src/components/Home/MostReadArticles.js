import React from 'react';
import BlogLink from './BlogLink';
import { graphql, useStaticQuery } from 'gatsby';

const MostReadArticles = () => {
    const data = useStaticQuery(graphql`
        query MostReadArticlesQuery {
            cloudNativeIcon: file(relativePath: { eq: "cloud-native-icon.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            cloudIcon: file(relativePath: { eq: "cloud-security-icon.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            dataSecurityIcon: file(relativePath: { eq: "data-security-home-icon.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            cnappIcon: file(relativePath: { eq: "cnapp-home-icon.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            iamIcon: file(relativePath: { eq: "iam-home-icon.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            bucketIcon: file(relativePath: { eq: "bucket-home-icon.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
            nativeInfrastructureIcon: file(relativePath: { eq: "native-infrastucture-icon.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: FIXED)
                }
            }
        }
    `);

    return (
        <div className='grid grid-cols-12 gap-x-5 mt-12'>
            <BlogLink
                link={'/blog/cloud-native-security-guide/'}
                categories={['cspm']}
                text={[
                    'Cloud-Native Security: A',
                    <br key='br1' />,
                    'Comprehensive Guide to',
                    <br key='br2' />,
                    'Your Technology Stack'
                ]}
                image={data.cloudNativeIcon.childImageSharp.gatsbyImageData}
            />
            <BlogLink
                link={'/blog/cloud-security-and-compliance/'}
                categories={['cspm', 'compliance']}
                text={[
                    'Cloud Security and',
                    <br key='br1' />,
                    'Compliance: A Guide for',
                    <br key='br2' />,
                    'Your Cloud Infrastructure'
                ]}
                image={data.cloudIcon.childImageSharp.gatsbyImageData}
                classNames={'mt-10 md:mt-0'}
            />
            <BlogLink
                link={'/blog/cnapp-secure-native-applications/'}
                categories={['cnapp']}
                text={[
                    'CNAPP: The Key',
                    <br key='br1' />,
                    'to Cloud-Native',
                    <br key='br2' />,
                    'Applications Security'
                ]}
                image={data.cnappIcon.childImageSharp.gatsbyImageData}
                classNames={'mt-10 lg:mt-0'}
            />
            <BlogLink
                link={'/blog/iam-best-practices-from-aws-azure-gcp/'}
                categories={['cspm']}
                text={[
                    'Securing IAM - Best',
                    <br key='br1' />,
                    'Practices Recommended by',
                    <br key='br2' />,
                    'AWS, Azure, and Google Cloud'
                ]}
                image={data.iamIcon.childImageSharp.gatsbyImageData}
                classNames={'mt-10'}
            />
            <BlogLink
                link={'/blog/s3-bucket-security/'}
                categories={['cspm']}
                text={[
                    'Understanding S3',
                    <br key='br1' />,
                    ' Bucket Security',
                    <br key='br2' />,
                    'A Contextual Approach'
                ]}
                image={data.bucketIcon.childImageSharp.gatsbyImageData}
                classNames={'mt-10 hidden lg:block'}
            />
            <BlogLink
                link={'/blog/cloud-native-infrastructure'}
                categories={['cspm']}
                text={[
                    'Cloud-Native Infrastructure:',
                    <br key='br1' />,
                    'How to Build a',
                    <br key='br2' />,
                    'Comprehensive Security Plan'
                ]}
                image={data.nativeInfrastructureIcon.childImageSharp.gatsbyImageData}
                classNames={'mt-10 hidden lg:block'}
            />
        </div>
    );
};

export default MostReadArticles;
