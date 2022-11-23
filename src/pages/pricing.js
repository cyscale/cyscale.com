import React, { useEffect, useState } from 'react';
import { Container, Row, Section } from '../components/atoms/Containers';
import Layout from '../components/layout/CleanLayout';
import HeroPricing from '../assets/images/hero-pricing.png';
import checkMarkIcon from '../assets/images/check-mark-icon.svg';
import PlayButton from '../assets/images/play-icon.png';
import { css } from 'twin.macro';
import styled from '@emotion/styled';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import useMediaQuery from '../hooks/useMediaQuery';
import { CSSTransition } from 'react-transition-group';
import VideoCyscale from '../components/campaigns/cspm-solutin/CyscaleVideo';
import VisibilityIcon from '../assets/images/visibility-icon-pricing.svg';
import SecurityIcon from '../assets/images/security-icon-pricing.svg';
import ComplianceIcon from '../assets/images/compliance-icon-pricing.svg';
import { useAppLink } from '../common/links';
import { Link, Element } from 'react-scroll';

const customFontSize = css`
    font-size: 1.75rem;

    @media (max-width: 1024px) {
        font-size: 1.625rem;
    }
`;

const mostPopularCard = css`
    box-shadow: 0px 4px 14px rgba(51, 124, 234, 0.25);
    border-radius: 10px;
`;

const heroBackground = css`
    background-image: url(${HeroPricing});
    background-size: cover;
`;

const featuresTitleFontSize = css`
    font-size: 2.125rem;
    line-height: 2.75rem;

    @media (max-width: 768px) {
        font-size: 1.375rem;
        line-height: 1.676rem;
    }
`;

const PlayIcon = styled.img`
    top: calc((100% / 2) - 1.25rem);
    left: calc((100% / 2) - 1.25rem);
    transform: ${({ isHover }) => (isHover ? 'scale(2.5)' : 'scale(2)')};
`;

const widthFeatureIcon = css`
    width: 3.25rem;
`;

const linkFontSize = css`
    @media (max-width: 1024px) {
        font-size: 0.98rem;
    }
`;

const PricingPage = ({ location }) => {
    const appLink = useAppLink({ location });
    const [modal, setModal] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const matches = useMediaQuery('(min-width: 23.438rem) and (max-width: 63.938rem)');

    const data = useStaticQuery(graphql`
        query PricingQuery {
            videoThumbnail: file(relativePath: { eq: "video-thumbnail-pricing.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => document.body.removeChild(script);
    }, []);

    return (
        <Layout
            location={location}
            pageName='Pricing'
            title='Pricing - Cyscale Cloud Platform'
            description="Pay fair for security experts' advice and guidance. Quantifiable ROI for cloud data security and compliance. Reduce cloud costs and consumption."
        >
            <div className='pt-16' css={heroBackground}>
                <Section>
                    <Container>
                        <h1 className='text-center text-blue text-4xl lg:text-5xl font-montserrat font-bold'>
                            Get the Cyscale Platform
                        </h1>
                        <h4 className='text-center font-semibold font-montserrat text-base lg:text-lg mt-8'>
                            Whether you’re at a Fortune 500 company or a startup,
                            <br /> Cyscale can help you with Cloud Visibility, Security and Compliance.
                        </h4>
                        <Row className='mt-16 lg:max-w-5xl mx-auto'>
                            <div className='col-span-12 lg:col-span-4'>
                                <div className='h-40 bg-white rounded-lg flex flex-col justify-between p-4 max-w-lg mx-auto lg:mx-0'>
                                    <Link
                                        to='meetings-calendar'
                                        smooth={true}
                                        duration={500}
                                        className='cursor-pointer'
                                    >
                                        <h2 className='text-blue font-montserrat font-bold' css={customFontSize}>
                                            Pro
                                        </h2>
                                    </Link>
                                    <h4 className='text-blue font-montserrat font-semibold text-base lg:text-lg'>
                                        With up to 1000 assets
                                    </h4>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-4'>
                                <div
                                    className='h-40 bg-white rounded-lg flex flex-col justify-between p-4 max-w-lg mx-auto lg:mx-0'
                                    css={mostPopularCard}
                                >
                                    <div className='flex items-center justify-between'>
                                        <Link
                                            to='meetings-calendar'
                                            smooth={true}
                                            duration={500}
                                            className='cursor-pointer'
                                        >
                                            <h2 className='text-blue font-montserrat font-bold' css={customFontSize}>
                                                Scale
                                            </h2>
                                        </Link>
                                        <p
                                            className='text-blue py-2 px-4 rounded-md'
                                            css={css`
                                                background-color: #d8deff;
                                            `}
                                        >
                                            Most Popular
                                        </p>
                                    </div>
                                    <h4 className='text-blue font-montserrat font-semibold text-base lg:text-lg'>
                                        With up to 5000 assets
                                    </h4>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-4'>
                                <div className='h-40 bg-white rounded-lg flex flex-col justify-between p-4 max-w-lg mx-auto lg:mx-0'>
                                    <Link
                                        to='meetings-calendar'
                                        smooth={true}
                                        duration={500}
                                        className='cursor-pointer'
                                    >
                                        <h2 className='text-blue font-montserrat font-bold' css={customFontSize}>
                                            Enterprise
                                        </h2>
                                    </Link>
                                    <h4 className='text-blue font-montserrat font-semibold text-base lg:text-lg'>
                                        With up to 10000 assets
                                    </h4>
                                </div>
                            </div>
                        </Row>
                        <div className='mt-16'>
                            <p className='text-base font-montserrat font-medium text-center'>
                                Not sure how many assets you want to protect?
                            </p>
                            <p className='text-base font-montserrat text-blue font-medium text-center'>
                                <a href={appLink} target='_blank' rel='noopener noreferrer' className='hover:underline'>
                                    Find out with the Free Trial
                                </a>
                            </p>
                        </div>
                        <div className='flex justify-center mt-8'>
                            <Link
                                to='meetings-calendar'
                                smooth={true}
                                duration={500}
                                className='bg-blue text-white font-bold font-montserrat text-base py-2 px-8 rounded-lg cursor-pointer'
                            >
                                Get Quote
                            </Link>
                        </div>
                        <p
                            className='text-center font-medium font-montserrat mt-16 max-w-5xl mx-auto'
                            css={css`
                                font-size: 13px;
                                line-height: 25px;

                                @media (max-width: 1024px) {
                                    font-size: 0.75rem;
                                    line-height: 1.25rem;
                                }
                            `}
                        >
                            Every resource counts as an asset. The entire knowledge base contributes to the security
                            posture including IAM entities (users, groups, policies, etc.), compute instances, storage
                            disks and buckets, VPCs, etc. The billed number of assets is the average of assets across
                            syncs within the billing period
                        </p>
                    </Container>
                </Section>
            </div>
            <div className='py-24'>
                <h1 className='text-center text-blue font-montserrat' css={featuresTitleFontSize}>
                    {' '}
                    <strong> You get all features included,</strong> <br />
                    regardless of which plan you choose.
                </h1>
                <Container>
                    <Row className='mt-16 gap-0 lg:gap-10'>
                        <div className='col-span-12 lg:col-span-4 mx-auto max-w-lg lg:mx-0'>
                            <img src={VisibilityIcon} alt='' css={widthFeatureIcon} />
                            <h2 className='font-montserrat font-bold mt-3' css={customFontSize}>
                                Visibility
                            </h2>
                            <p className='text-base font-mediun font-montserrat mt-4'>
                                Continuous visibility of multi-cloud environments to identify cloud misconfiguration
                                vulnerabilities. Scan, monitor, and remediate across your cloud...
                            </p>
                            <div className='flex mt-8'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-data-security/'}
                                >
                                    Multi-cloud support (AWS, GCP, Azure)
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <p className='ml-2 text-sm'>Integrations (AWS SSO, Okta, Github)</p>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' /> <p className='ml-2 text-sm'>Asset Inventory</p>
                            </div>
                            <div className='flex mt-2 items-start'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <p className='ml-2 text-sm'>
                                    Powerful dashboards (Global dashboard, Identity, Data Security)
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4 mx-auto max-w-lg lg:mx-0 mt-8 lg:mt-0'>
                            <img src={SecurityIcon} alt='' css={widthFeatureIcon} />
                            <h2 className='font-montserrat font-bold mt-3' css={customFontSize}>
                                Security
                            </h2>
                            <p className='text-base font-mediun font-montserrat mt-4'>
                                Your company’s security posture is properly analyzed, considering signals from several
                                sources and leaving no risk or misconfiguration uncovered.
                            </p>
                            <div className='flex mt-8 items-start'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-misconfigurations/'}
                                >
                                    Misconfigurations (Detection & Remediation)
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2 items-start'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <p className='ml-2 text-sm'>400+ security controls (including contextual analysis)</p>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <p className='ml-2 text-sm'>Custom controls (not available yet)</p>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <p className='ml-2 text-sm'>Alerts & Notifications</p>
                            </div>{' '}
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/products/security-knowledge-graph/'}
                                >
                                    Security Knowledge Graphs
                                </GatsbyLink>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4 mx-auto max-w-lg lg:mx-0 mt-8 lg:mt-0'>
                            <img src={ComplianceIcon} alt='' css={widthFeatureIcon} />
                            <h2 className='font-montserrat font-bold mt-3' css={customFontSize}>
                                Compliance
                            </h2>
                            <p className='text-base font-mediun font-montserrat mt-4'>
                                Technical controls are automatically mapped to your organization’s policies and
                                procedures so that compliance gaps are immediately brought to attention.
                            </p>
                            <div className='flex mt-8'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-compliance-and-auditing/'}
                                >
                                    Policies
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-compliance-and-auditing/'}
                                >
                                    Policy Editor
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-compliance-and-auditing/'}
                                >
                                    Standards
                                </GatsbyLink>
                            </div>
                            <div className='flex mt-2 items-start'>
                                <img src={checkMarkIcon} alt='' />{' '}
                                <GatsbyLink
                                    className='ml-2 text-sm hover:underline'
                                    to={'/use-cases/cloud-compliance-and-auditing/'}
                                >
                                    Inline evidence collection (based on security controls)
                                </GatsbyLink>
                            </div>
                        </div>
                    </Row>
                    <h4 className='text-center lg:text-lg mt-24 font-montserrat font-semibold' css={linkFontSize}>
                        Full technical specifications{' '}
                        <a
                            href='https://docs.cyscale.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue hover:underline font-montserrat font-semibold'
                        >
                            available here
                        </a>
                    </h4>
                    <h4 className='text-center lg:text-lg font-montserrat font-semibold mt-2' css={linkFontSize}>
                        View Cyscale in action{' '}
                        <a
                            href='https://app.cyscale.com/playground'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue hover:underline font-montserrat font-semibold'
                        >
                            on the Playground account
                        </a>
                    </h4>
                </Container>
            </div>
            <div
                className='py-24 flex flex-col items-center'
                css={css`
                    background-image: linear-gradient(90deg, #0f26aa -1.79%, #ff4a56 165.6%);
                `}
            >
                <h2 className='text-white font-bold font-montserrat' css={customFontSize}>
                    Schedule a Demo
                </h2>
                <p className='text-white mt-8'>
                    Sign up for a custom demo to see how we close
                    <br /> security gaps and help you move to the cloud.
                </p>
                <GatsbyLink to={'/request-demo/'} className='bg-white text-blue rounded-lg py-2 px-8 mt-8'>
                    Request Demo
                </GatsbyLink>
            </div>
            <div className='pt-24 pb-32'>
                <Container>
                    <h2 className='text-center text-blue font-montserrat font-bold' css={customFontSize}>
                        See the full power of Cyscale
                    </h2>
                    <div className='max-w-2xl mx-auto mt-8'>
                        <div
                            className='cursor-pointer relative'
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                            onClick={() => setModal(!modal)}
                        >
                            <PlayIcon
                                src={PlayButton}
                                onMouseEnter={() => setIsHover(true)}
                                onClick={() => setModal(!modal)}
                                className='w-10 inline-block absolute cursor-pointer z-10'
                                alt=''
                                isHover={isHover}
                                matches={matches}
                            />
                            <GatsbyImage
                                image={data.videoThumbnail.childImageSharp.gatsbyImageData}
                                alt='Video Thumbnail'
                            />
                        </div>
                    </div>
                    {modal && <div className='modal-overlay'></div>}
                    <CSSTransition in={modal} timeout={300} classNames='video' unmountOnExit>
                        <VideoCyscale setModal={setModal} />
                    </CSSTransition>
                </Container>
            </div>
            <div className='pt-12' css={heroBackground}>
                <Container>
                    <Element name='meetings-calendar' />
                    <h1 className='text-blue text-center text-3xl lg:text-5xl font-bold font-montserrat mt-8'>
                        Let’s make it a win-win!
                    </h1>
                    <p className='my-8 text-center font-medium text-sm lg:text-base font-montserrat'>
                        For custom plans let's talk about your team, about your products, and about your challenges and
                        come <br /> up with a pricing scheme that ultimately brings a positive ROI and helps you move
                        faster.
                    </p>
                </Container>
                <div className='lg:px-8'>
                    <div
                        className='meetings-iframe-container'
                        data-src='https://meetings.hubspot.com/virginia-mitea/get-new-quote?embed=true'
                    ></div>
                </div>
            </div>
        </Layout>
    );
};

export default PricingPage;
