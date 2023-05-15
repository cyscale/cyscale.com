import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import tw, { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link as GatsbyLink, Link, useStaticQuery } from 'gatsby';
import ChallengesIcon from '../../assets/images/challenges-icon.svg';
import ResultsIcon from '../../assets/images/results-icon.svg';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { topArticles } from '../products/cnapp';
import FurtherReadingSection from '../../components/new-blog/FurtherReadingSection';

const Subtitle = tw.h2`text-xl font-bold font-montserrat mt-12 lg:mt-14`;

const SmartFintech = ({ location }) => {
    const data = useStaticQuery(graphql`
        query Whitepaper {
            whitepaperCover: file(relativePath: { eq: "whitepaper-cover-blog.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 111, height: 162, layout: FIXED)
                }
            }
            cover: file(relativePath: { eq: "smart-fintech-cover.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            logo: file(relativePath: { eq: "smart-fintech-logo.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 206, layout: CONSTRAINED)
                }
            }
            alexQuote: file(relativePath: { eq: "alex-cociu-quote.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 150, layout: CONSTRAINED)
                }
            }
            quotes: file(relativePath: { eq: "quotes.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 41, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='SmartFintech'
            title='Smart Fintech Case Study | Cloud Security & Compliance - Cyscale'
            description={`Discover how Smart Fintech, Romania's first authorized open banking TPP, improved cloud security, IAM visibility, and compliance by leveraging Cyscale's powerful platform for monitoring and alerting on cloud misconfigurations.`}
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /case-studies/smart-fintech
            </div>
            <div className='hidden' data-title>
                Smart Fintech Case Study | Cloud Security & Compliance - Cyscale
            </div>
            <div className='hidden' data-description>
                Discover how Smart Fintech, Romania's first authorized open banking TPP, improved cloud security, IAM
                visibility, and compliance by leveraging Cyscale's powerful platform for monitoring and alerting on
                cloud misconfigurations.
            </div>
            <div className='hidden' data-category>
                case studies
            </div>
            <div className='container max-w-7xl pt-28 sm:pt-44 mx-auto xl:flex xl:pl-12 xl:pr-16'>
                <div className='max-w-4xl mx-auto xl:mx-0 px-8'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 lg:col-span-6'>
                            <p
                                className='font-montserrat font-bold text-base'
                                css={css`
                                    color: #818791;
                                `}
                            >
                                CASE STUDY
                            </p>
                            <h1
                                className='font-montserrat font-bold mt-4'
                                css={css`
                                    font-size: 1.375rem;
                                    line-height: 1.688rem;
                                `}
                            >
                                Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and
                                compliance
                            </h1>
                            <p className='font-hind text-base font-normal mt-4'>
                                Smart Fintech, the first authorized open banking third party provider (TPP) in Romania,
                                seeks to improve its cloud security posture. Cyscale ensures high IAM visibility and a
                                robust alerting mechanism for cloud misconfigurations.
                            </p>
                            <GatsbyImage
                                image={data.logo.childImageSharp.gatsbyImageData}
                                alt='Smart Fintech Logo'
                                className='mt-4'
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <GatsbyImage image={data.cover.childImageSharp.gatsbyImageData} alt='Cover' />
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-1 mt-12 lg:mt-20'>
                        <div className='col-span-12 lg:col-span-6'>
                            <p className='font-montserrat text-lg font-bold'>
                                Challenges
                            </p>
                            <div className='flex items-center mt-4'>
                                <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base mt-1'>
                                    Difficulty identifying permission drifts
                                </p>{' '}
                            </div>
                            <div className='flex items-start mt-2'>
                                <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base'>
                                    Manual configurations checks, which slow down the development team
                                </p>{' '}
                            </div>
                            <div className='flex items-start lg:items-center mt-2'>
                                <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base'>
                                    A time-consuming compliance process
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-4 lg:mt-0'>
                            <p className='font-montserrat text-lg font-bold'>Results</p>
                            <div className='flex items-start lg:items-center mt-4'>
                                <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base mt-0 lg:mt-1'>
                                    Enhanced visibility into users’ roles and privileges
                                </p>{' '}
                            </div>
                            <div className='flex items-start mt-2'>
                                <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base'>
                                    Implementation of a misconfigurations alert system for cloud security
                                </p>{' '}
                            </div>
                            <div className='flex items-start mt-2'>
                                <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                <p className='font-hind text-base'>
                                    Improved compliance through better IAM visibility and control
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='mt-8 p-3 rounded-md'
                        css={css`
                            background-color: #fafafb;
                        `}
                    >
                        <p className='text-base font-medium font-hind'>
                            Smart Fintech is the first open banking third party provider (TPP) in Romania, authorized by
                            the country’s national bank (NBR). They make full use of cloud infrastructure for their
                            products, that focus on the future of Account2Account Payments and Account Interrogation
                            solutions. Currently, the company develops multiple cloud-native applications to serve their
                            partners and end-customers. In a very dynamic environment, they seek to improve their cloud
                            security posture and protect their customer’s data.
                        </p>
                    </div>
                    <Subtitle>Problem</Subtitle>
                    <p className='text-base font-hind mt-8'>
                        The company was looking for a solution to help them achieve compliance and ensure their cloud
                        environment is secure. Identity and access management was a focal point for Smart Fintech, since
                        they identified it as a significant risk area. In addition, they needed an alert system for
                        cloud misconfigurations so that they could leverage the development speed promised by the cloud,
                        without compromising on security.
                    </p>
                    <div
                        className='grid grid-cols-12 gap-1 mt-4 p-3 rounded-md'
                        css={css`
                            background-color: #f5f9ff;
                        `}
                    >
                        <div className='col-span-12 lg:col-span-2'>
                            <div className='mx-auto lg:mx-0 block w-24'>
                                <GatsbyImage image={data.alexQuote.childImageSharp.gatsbyImageData} alt='' />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-10 mt-4 lg:mt-0'>
                            <p className='text-lg font-semibold font-hind'>
                                Cyscale is eliminating the need to ask the team for tedious configuration reports,
                                greatly improving our visibility and helping us understand things we didn’t know.
                            </p>{' '}
                            <p className='text-base font-hind mt-4'>
                                Alex Cociu, Risk and Compliance Officer at Smart Fintech
                            </p>
                        </div>
                    </div>
                    <Subtitle>Solution</Subtitle>
                    <div className='grid grid-cols-12 gap-0 lg:gap-8 mt-8 rounded-md'>
                        <div className='col-span-12 lg:col-span-6'>
                            <p className='font-hind text-base'>
                                Cyscale provided Smart Fintech with a comprehensive overview of users’ roles and
                                privileges across multiple cloud accounts. Moreover, using the Cyscale platform, Smart
                                Fintech can identify users that have too many privileges.{' '}
                                <strong>
                                    “I approve a user’s level of access, and I can see in Cyscale if he is
                                    overprivileged and then work with my team to fix it.”
                                </strong>
                                , adds Alex.
                            </p>
                            <p className='font-hind text-base'>
                                Cyscale improves the visibility of cloud identities and pinpoints vulnerabilities or
                                misconfigurations through a powerful Identity Dashboard. The platform detects each
                                person in the organization and provides valuable information regarding MFA, privileges
                                and access, making it easy to detect when permissions drift from the expected setup.
                            </p>
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-4 lg:mt-0'>
                            <div
                                css={css`
                                    background-color: #f5f9ff;
                                `}
                                className='p-4 rounded-md'
                            >
                                {' '}
                                <GatsbyImage alt='' image={data.quotes.childImageSharp.gatsbyImageData} />
                                <p className='text-lg font-hind font-semibold mt-4'>
                                    The platform helps me with IAM visibility a lot: I can understand who has access and
                                    why. When a person leaves the company, I can detect if their permissions remain
                                    hanging. I don’t have to rely on affirmations that access has been removed, I can
                                    easily see it and confirm it in Cyscale.
                                </p>
                                <p className='text-base font-hind mt-2'>
                                    Alex Cociu
                                </p>
                            </div>
                        </div>
                    </div>
                    <Subtitle>Results</Subtitle>
                    <p className='font-hind text-base mt-8'>
                        The company was able to manage identity and access management effectively, which was one of the
                        focus points when onboarding into Cyscale. As a result, Alex Cociu now confirms that they have
                        the much-needed visibility over users’ permissions.
                    </p>
                    <p className='font-hind text-base'>
                        In addition, after onboarding into Cyscale, the Smart Fintech development team set a goal to
                        achieve zero alerts, which meant ensuring that their cloud environment was always in compliance
                        with their policies. They now know if there are any drifts, and the platform alerts them of
                        deviations from their initial goal.
                    </p>{' '}
                    <p className='font-hind text-base'>
                        Moreover, they can adjust the configurations according to acceptable risk by creating exemptions
                        to exclude certain cloud assets.
                    </p>
                    <Subtitle>Conclusion</Subtitle>
                    <p className='font-hind text-base mt-8'>
                        The platform’s automation capabilities helped the company reduce the time and resources required
                        to manage its cloud environment, which was particularly beneficial for a constrained team with
                        limited resources.
                    </p>
                    <p className='font-hind text-base mb-24'>
                        As Smart Fintech continues to grow, Cyscale is prepared to assist them. Besides IAM and
                        visibility, the platform also provides data security and alerts dashboards, over 400 controls
                        that verify the entire cloud environment, a compliance module, and many others. To read more
                        about Cyscale and learn about cloud security, check out the{' '}
                        <Link to='/blog' className='underline cursor-pointer'>
                            blog
                        </Link>
                        .
                    </p>{' '}
                </div>
                <FurtherReadingSection dataWhitepaper={data} />
            </div>
            <div
                className='py-24 flex flex-col items-center'
                css={css`
                    background-image: linear-gradient(90deg, #0f26aa -1.79%, #ff4a56 165.6%);
                `}
            >
                <h2 className='text-white font-bold font-montserrat text-lg lg:text-2xl'>
                    Close IAM visibility gaps today
                </h2>
                <p className='text-white mt-8 text-base sm:text-lg lg:text-xl text-center px-2 sm:px-0'>
                    Sign up for a custom demo to see how the
                    <br /> Cyscale Platform helps you secure your cloud data.
                </p>
                <GatsbyLink
                    to={'/request-demo/'}
                    className='bg-white text-blue rounded-md font-bold py-2 px-8 mt-8 hover:bg-grey3'
                >
                    REQUEST A DEMO
                </GatsbyLink>
            </div>
            <LinksAndWhitepaper
                topArticles={topArticles}
                data={data}
                title={'News and Insights about CNAPP'}
                titleCard={'The Complete Guide<br class="hidden lg:block" /> to Cloud Storage Misconfigurations'}
                textCard={
                    'This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
                }
                linkCard={'/whitepaper/cloud-storage-misconfigurations/'}
                misconfigurationWhitepaper={true}
            />
        </Layout>
    );
};

export default SmartFintech;
