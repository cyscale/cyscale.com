import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Container } from '../../components/atoms/Containers';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css } from 'twin.macro';
import ChallengesIcon from '../../assets/images/challenges-icon.svg';
import ResultsIcon from '../../assets/images/results-icon.svg';
import { topArticles } from '../products/cnapp';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { ctaTransition, hrStyle, Subtitle, subtitleColor, textColor } from '../../assets/css/styles';
import classnames from 'classnames';
import useScrollTrigger from '../../components/scrollTrigger';
import { hoverButtonColorStyle, widthFitStyle } from '../../components/layout/style';
import useStickyElement from '../../hooks/useStickyElement';

const BaysConsulting = ({ location }) => {
    const trigger = useScrollTrigger();

    const data = useStaticQuery(graphql`
        query WutInTheWorldQuery {
            cover: file(relativePath: { eq: "bays-consulting-cover.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            logo: file(relativePath: { eq: "bays-logo.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 98, layout: FIXED)
                }
            }
            mobileLogo: file(relativePath: { eq: "bays-logo.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 58, layout: FIXED)
                }
            }
            quotes: file(relativePath: { eq: "quotes.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 41, layout: CONSTRAINED)
                }
            }
            jamesQuotes: file(relativePath: { eq: "james-hawkes.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 75, layout: FIXED)
                }
            }
            jamesQuotesSm: file(relativePath: { eq: "james-hawkes.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 165, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
            whitepaperCover: file(relativePath: { eq: "whitepaper-cover-blog.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 111, height: 162, layout: FIXED)
                }
            }
        }
    `);

    const { isTop, parentRef, stickyRef } = useStickyElement();

    return (
        <Layout
            location={location}
            pageName='BaysConsulting'
            title='Bays Consulting Case Study | Cloud Security & Compliance - Cyscale'
            description="Explore how Cyscale's cloud security platform helped Bays Consulting streamline access reviews, improve cloud security posture, and automate ISO 27001 compliance. Learn from their journey and start yours today!"
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /case-studies/bays-consulting
            </div>
            <div className='hidden' data-title>
                Bays Consulting Case Study | Cloud Security & Compliance - Cyscale
            </div>
            <div className='hidden' data-description>
                Explore how Cyscale's cloud security platform helped Bays Consulting streamline access reviews, improve
                cloud security posture, and automate ISO 27001 compliance. Learn from their journey and start yours
                today!
            </div>
            <div className='hidden' data-category>
                case studies
            </div>
            <div className='pt-28 lg:pt-32 pb-16'>
                <Container>
                    <div className='grid grid-cols-12 lg:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <p
                                className='font-montserrat font-bold text-sm'
                                css={css`
                                    color: #079bee;
                                `}
                            >
                                CASE STUDY
                            </p>
                            <h1
                                className='font-montserrat font-bold mt-4'
                                css={css`
                                    font-size: 1.875rem;
                                    line-height: 2.313rem;
                                    color: #1d2639;
                                `}
                            >
                                “It’s been great at identifying blind spots”: Bays Consulting achieves 50% productivity
                                gain with Cyscale
                            </h1>
                            <div className='flex mt-6'>
                                <GatsbyImage
                                    image={data.logo.childImageSharp.gatsbyImageData}
                                    alt='Bays Consulting Logo'
                                    className='mt-4 flex-shrink-0 hidden sm:block'
                                />
                                <p className='font-hind text-base font-normal mt-4 sm:ml-5' css={textColor}>
                                    Bays Consulting is a data analytics and consulting company who uses AWS to deliver
                                    innovative data solutions and insights to businesses. Securing client data and
                                    automating their ISO 27001 compliance is at the core of their business.
                                </p>
                            </div>
                            <GatsbyImage
                                image={data.mobileLogo.childImageSharp.gatsbyImageData}
                                alt='Bays Consulting Logo'
                                className='mt-4 block sm:hidden '
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 lg:mt-0'>
                            <GatsbyImage
                                image={data.cover.childImageSharp.gatsbyImageData}
                                alt='Cover'
                                className='rounded-xl'
                            />
                        </div>
                    </div>
                </Container>
                <div className='container max-w-7xl mx-auto xl:flex xl:pr-16'>
                    <div className='max-w-4xl xl:max-w-5xl mx-auto xl:mx-0 px-8'>
                        {' '}
                        <div className='grid grid-cols-12 gap-0 lg:gap-12 mt-12 lg:mt-20'>
                            <div className='col-span-12 lg:col-span-6'>
                                <p className='font-montserrat text-lg font-bold' css={subtitleColor}>
                                    Challenges
                                </p>
                                <div className='flex items-start  lg:items-center mt-4'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2 mt-1' />
                                    <p className='font-hind text-base mt-1' css={subtitleColor}>
                                        Tedious and time-consuming cloud access reviews
                                    </p>{' '}
                                </div>
                                <div className='flex items-start mt-3'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Visibility and blind spots in the AWS environment
                                    </p>{' '}
                                </div>
                                <div className='flex items-start mt-3'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Technical barrier from vendor security tools for non-cloud experts
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 mt-4 lg:mt-0'>
                                <p className='font-montserrat text-lg font-bold' css={subtitleColor}>
                                    Results
                                </p>
                                <div className='flex items-start mt-4'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        50% increased productivity: access review time reduced by half{' '}
                                    </p>{' '}
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Enhanced confidence in using the cloud through real-time security monitoring
                                    </p>{' '}
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Cyber hygiene for all the services used in the cloud
                                    </p>
                                </div>{' '}
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Ease of use for all security stakeholders, including non-cloud security experts
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className='px-5 pt-6 pb-14 rounded-md mt-8'
                            css={css`
                                background-color: #fafafb;
                            `}
                        >
                            <p className='font-hind font-semibold text-base' css={subtitleColor}>
                                About Bays
                            </p>
                            <p className='font-hind font-medium text-base mt-4' css={textColor}>
                                Maths, not Magic. Bays Consulting is a maths and data science consultancy that uses
                                mathematical modelling, statistical predictions, and cutting-edge data science to
                                provide actionable insight to its clients. With a skill set including classical
                                statistics, modern machine learning, and innovative artificial intelligence, Bays are
                                dedicated to turning raw data into meaningful information.
                            </p>
                        </div>
                        <Subtitle css={subtitleColor}>Problem</Subtitle>
                        <div className='grid grid-cols-12 gap-0 lg:gap-8 mt-8 rounded-md'>
                            <div className='col-span-12 lg:col-span-6'>
                                <p className='font-hind text-base' css={textColor}>
                                    Bays Consulting faced the challenge of manually conducting access reviews for their
                                    AWS cloud environments, an essential process for ensuring cloud security and
                                    compliance. The task is time-consuming, prone to human error, and laborious. They
                                    needed a way to automate this to identify vulnerabilities and blind spots.
                                </p>
                                <p className='font-hind text-base' css={textColor}>
                                    Moreover, as they were going through the ISO 27001 compliance process, they needed
                                    better visibility into their cloud security posture, to ensure that configurations
                                    are aligned with the requirements of the standard.
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-6 mt-4 lg:mt-0'>
                                <div
                                    css={css`
                                        background-color: #f5f9ff;
                                    `}
                                    className='px-4 py-6 rounded-md'
                                >
                                    <p className='text-base font-hind font-semibold mt-4' css={subtitleColor}>
                                        Exceptionally helpful when doing access reviews; I’m using the platform monthly
                                        and it simply automates my work!
                                    </p>
                                    <div className='grid grid-cols-12 mt-5'>
                                        <div className='col-span-12 lg:col-span-2'>
                                            <div className='block w-24 mx-auto sm:mx-0'>
                                                <GatsbyImage
                                                    alt=''
                                                    image={data.jamesQuotes.childImageSharp.gatsbyImageData}
                                                    className='p-1'
                                                />
                                            </div>
                                        </div>
                                        <div className='col-span-12 lg:col-span-10'>
                                            {' '}
                                            <p className='text-base font-hind lg:ml-4 mt-4' css={subtitleColor}>
                                                <strong>James Hawkes,</strong>
                                                <br /> Head of Delivery at Bays Consulting
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Subtitle css={subtitleColor}>Solutions</Subtitle>
                        <p className='font-hind text-base mt-8' css={textColor}>
                            Cyscale helped Bays Consulting address their challenges and streamlined the access review
                            process: “Exceptionally helpful when doing access reviews; I’m using the platform monthly
                            and it simply automates my work!”, says James Hawkes, Head of Delivery at Bays Consulting.
                            IAM is an essential aspect of cloud security and Cyscale provides the visibility and
                            controls that are required for compliance with ISO 27001.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Furthermore, Cyscale provides contextual, real-time alerts designed to prevent alert fatigue
                            and pinpoint critical vulnerabilities early. The team at Bays appreciates that they are
                            integrated with notification channels such as Slack, aligning perfectly with their working
                            practices. The alerts allow them to give more freedom to members of the team, since
                            misconfigurations are immediately highlighted.
                        </p>{' '}
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Using alerts, Bays Consulting has gained valuable insights into its infrastructure. “Alerts
                            in Slack are a great help, I can see instantly what others are doing, and it's easy to
                            understand what needs to be secured." James has also found the cloud asset graph practical
                            for identifying misconfigurations: “I love it, it’s really useful when troubleshooting
                            issues such as access configuration or networking”.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Cyscale helped Bays with compliance efforts as well, highlighting issues that they might
                            have otherwise missed. Utilizing security controls mapped directly to the ISO 27001
                            standard, they were able to track the compliance score and get ready for the audit with
                            minimal effort.
                        </p>
                        <div
                            className='grid grid-cols-12 gap-1 mt-12 p-3 rounded-md'
                            css={css`
                                background-color: #f5f9ff;
                            `}
                        >
                            <div className='col-span-12 lg:col-span-1'>
                                <div className='flex justify-center'>
                                    <GatsbyImage image={data.quotes.childImageSharp.gatsbyImageData} alt='' />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-11 mt-4 lg:mt-0'>
                                <p className='text-lg font-semibold font-hind' css={subtitleColor}>
                                    Alerts in Slack are a great help, I can see instantly what others are doing, and
                                    it's easy to understand what needs to be secured.
                                </p>{' '}
                                <p className='text-base font-hind mt-4' css={subtitleColor}>
                                    <strong>James Hawkes</strong>, Head of Delivery at Bays Consulting
                                </p>
                            </div>
                        </div>
                        <Subtitle css={subtitleColor}>Results</Subtitle>
                        <p className='font-hind text-base mt-8' css={textColor}>
                            Bays Consulting has doubled its productivity: "Cyscale saves us 50% of the time spent doing
                            access reviews". In addition, using Cyscale’s cloud security platform, Bays Consulting can
                            ensure that IAM is a strong point in their infrastructure and that sensitive data is
                            protected from unwanted access.
                        </p>
                        <p className='font-hind text-base' css={textColor}>
                            With the help of automated cloud misconfiguration checks and real-time alerts delivered on
                            the preferred communication channel, James Hawkes has managed to remove manual work, become
                            more efficient and make significant time savings across the team.
                        </p>{' '}
                        <p className='font-hind text-base' css={textColor}>
                            Bays Consulting can now easily monitor their compliance score, get notified when deviations
                            occur and ensure they have all the relevant information readily available for their future
                            ISO 27001 audits.
                        </p>
                        <Subtitle css={subtitleColor}>Conclusion</Subtitle>
                        <p className='font-hind text-base mt-8 mb-24' css={textColor}>
                            Cyscale streamlined access reviews, improved security posture, and empowered Bays Consulting
                            to address cloud security challenges efficiently, ultimately boosting productivity and
                            achieving peace of mind. To read more about Cyscale and learn about cloud security, check
                            out the{' '}
                            <Link to='/blog' className='underline cursor-pointer'>
                                blog
                            </Link>
                            .
                        </p>
                    </div>
                    <div className='flex flex-col self-stretch justify-between mt-20' ref={parentRef}>
                        <div
                            className={classnames({
                                'hidden xl:block w-72 sticky pl-10 font-montserrat': true,
                                'mb-24': true,
                                'top-0': trigger,
                                'top-28': !trigger
                            })}
                            css={ctaTransition}
                            ref={stickyRef}
                        >
                            <p
                                className={classnames({ 'font-montserrat text-xs font-bold': true, 'pt-4': !isTop })}
                                css={css`
                                    color: #818791;
                                `}
                            >
                                DISCOVER THE NEXT CASE STUDY
                            </p>
                            <Link
                                className='font-montserrat font-bold font-lg mt-2 block hover:underline'
                                css={subtitleColor}
                                to='/case-studies/smart-fintech/'
                            >
                                Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and
                                compliance
                            </Link>
                            <hr className='mt-8' css={hrStyle} />
                            <p className='font-montserrat text-lg font-bold pt-4' css={subtitleColor}>
                                Ready to get started?
                            </p>
                            <div className='mt-4'>
                                <Link
                                    className='bg-blue text-white py-2 px-4 rounded cursor-pointer font-medium font-hind'
                                    to='/request-demo/'
                                    css={[hoverButtonColorStyle, widthFitStyle]}
                                >
                                    CONTACT SALES
                                </Link>
                            </div>
                            <hr className='mt-8' css={hrStyle} />
                            <p className='font-montserrat text-lg font-bold mt-8' css={subtitleColor}>
                                Save for later
                            </p>
                            <p className='font-montserrat font-medium text-xs'>Bays Consulting Case Study</p>
                            <Link
                                to='/resources/case-study-bays-consulting.pdf'
                                className='font-montserrat font-medium text-xs hover:underline cursor-pointer text-blue'
                            >
                                Download Case Study
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className='py-24 flex flex-col items-center'
                    css={css`
                        background-color: #f0f6ff;
                    `}
                >
                    <h2 className='font-bold font-montserrat text-lg lg:text-2xl text-center'>
                        Improve your cloud security posture today
                    </h2>
                    <p className='mt-8 text-base sm:text-lg lg:text-xl text-center px-2 sm:px-0'>
                        Sign up for a custom demo to see how we close security gaps
                        <br /> and help you leverage the cloud with confidence.
                    </p>
                    <div className='mt-10 w-auto inline-block'>
                        <Link
                            className='w-full block text-sm font-medium rounded text-white text-center py-4 px-8 hover:no-underline no-underline font-hind'
                            css={css`
                                background-image: linear-gradient(to right, #0f26aa, #ff4a56);

                                &:hover {
                                    background-image: linear-gradient(to left, #0f26aa, #ff4a56);
                                }
                            `}
                            to='/request-demo'
                        >
                            REQUEST LIVE DEMO
                        </Link>
                    </div>
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
            </div>
        </Layout>
    );
};

export default BaysConsulting;
