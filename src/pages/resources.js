import React, { useState } from 'react';
import Layout from '../components/layout/CleanLayout';
import { Container, Row } from '../components/atoms/Containers';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link, useStaticQuery, graphql } from 'gatsby';
import VideoCyscale from '../components/campaigns/cspm-solutin/CyscaleVideo';
import { CSSTransition } from 'react-transition-group';
import ArrowRight from '../assets/images/arrow-right-white.svg';
import Carousel from '../components/resources/Carousel';
import ArrowRightBlack from '../assets/images/arrow-right-black.svg';

const heroBackground = css`
    @media (max-width: 1024px) {
        height: 27rem;
    }

    height: 30rem;
    background-image: linear-gradient(#eeeeee, #e4edfc);

    @media (min-width: 1560px) {
        height: 35rem;
    }

    @media (min-width: 2561px) {
    }
`;

const cardBorder = css`
    border: 1px solid #f0f1f2;
`;

const whitepaperCard = css`
    width: 12rem;
    height: 17rem;
`;

const whipaperParagraph = css`
    width: 12rem;
`;

const Resources = ({ location }) => {
    const [leastPrivilegeModal, setLeastPrivilegeModal] = useState(false);
    const [cyscaleModal, setCyscaleModal] = useState(false);
    const [teasingModal, setTeasingModal] = useState(false);
    const [fundingModal, setFundingModal] = useState(false);

    const data = useStaticQuery(graphql`
        query resourcesQuery {
            heroImage: file(relativePath: { eq: "hero-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            resourcesIcon: file(relativePath: { eq: "icon-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 146, layout: FIXED)
                }
            }
            firstArticle: file(relativePath: { eq: "cloud-native.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            secondArticle: file(relativePath: { eq: "29_blog-cloud-and-compliance.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            thirdArticle: file(relativePath: { eq: "blog_34-cover.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            forthArticle: file(relativePath: { eq: "securing-iam.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            leastPrivilege: file(relativePath: { eq: "least-privilege-video-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            cyscaleThumbnail: file(relativePath: { eq: "cyscale-video-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            teasingVideo: file(relativePath: { eq: "teasing-video-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            fundingVideo: file(relativePath: { eq: "funding-video-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            smartFintech: file(relativePath: { eq: "smart-fintech-cover.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            baysConsulting: file(relativePath: { eq: "bays-consulting-cover.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            csm: file(relativePath: { eq: "csm-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            cc: file(relativePath: { eq: "cc-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            ebook: file(relativePath: { eq: "ebook-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            documentation: file(relativePath: { eq: "documentation-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            datasheet: file(relativePath: { eq: "datasheet-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='Resources'
            title='Cloud Security Resources | Datasheets, Case Studies, White Papers - Cyscale'
            description="Dive into Cyscale's resources for expert insights on cloud security. Discover datasheets, case studies, white papers, and best practices to secure your cloud infrastructure."
        >
            <div css={heroBackground} className='pt-8 relative'>
                <div className='py-16 lg:pt-24 lg:pb-16'>
                    <Container>
                        <Row>
                            <div className='col-span-12 lg:col-span-7 order-last lg:order-first'>
                                <div className='lg:mt-4 pt-4 max-w-2xl mx-auto lg:mx-0'>
                                    <div className='flex'>
                                        <GatsbyImage
                                            image={data.resourcesIcon.childImageSharp.gatsbyImageData}
                                            className='flex-shrink-0 hidden sm:block mt-10'
                                            alt=''
                                        />
                                        <div className='sm:ml-6 lg:ml-12'>
                                            <h1
                                                className='text-left text-blue leading-normal lg:leading-normal mb-8 font-montserrat font-bold'
                                                css={css`
                                                    font-size: 3.25rem;
                                                `}
                                            >
                                                Resources
                                            </h1>
                                            <p className='text-left text-base mb-8 leading-relaxed font-hind'>
                                                Explore our Resources page to gain insightful knowledge about the latest
                                                trends, best practices, and cutting-edge solutions in cloud security,
                                                helping you safeguard your digital assets effectively.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
                <div className='absolute bottom-0 right-0'>
                    <div className='hidden lg:block lg:max-w-xl xl:max-max-w-2xl'>
                        <GatsbyImage image={data.heroImage.childImageSharp.gatsbyImageData} alt='' />
                    </div>
                </div>
            </div>
            <Container>
                <div className='pb-10 pt-16'>
                    <h2
                        className='font-montserrat font-bold text-blue'
                        css={css`
                            font-size: 2rem;
                        `}
                    >
                        Featured Articles
                    </h2>
                    <Row className='py-12'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                            <Link to='/blog/cloud-native-security-guide/' className='hover:underline'>
                                <GatsbyImage
                                    image={data.firstArticle.childImageSharp.gatsbyImageData}
                                    alt='Cloud-Native Security: A Comprehensive Guide to Securing Your Technology Stack'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>
                                    Cloud-Native Security: A Comprehensive Guide to Securing Your Technology Stack
                                </p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-0'>
                            <Link to='/blog/cloud-security-and-compliance/' className='hover:underline'>
                                <GatsbyImage
                                    image={data.secondArticle.childImageSharp.gatsbyImageData}
                                    alt='Cloud Security and Compliance: A Guide for Your Cloud Infrastructure'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>
                                    Cloud Security and Compliance: A Guide for Your Cloud Infrastructure
                                </p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 lg:mt-0'>
                            <Link to='/blog/cnapp-secure-native-applications/' className='hover:underline'>
                                <GatsbyImage
                                    image={data.thirdArticle.childImageSharp.gatsbyImageData}
                                    alt='CNAPP: The Key to Cloud-Native Applications Security'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>
                                    CNAPP: The Key to Cloud-Native Applications Security
                                </p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 lg:mt-0'>
                            <Link to='/blog/iam-best-practices-from-aws-azure-gcp/' className='hover:underline'>
                                <GatsbyImage
                                    image={data.forthArticle.childImageSharp.gatsbyImageData}
                                    alt='Securing IAM - Best Practices Recommended by AWS, Azure, and GCP'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>
                                    Securing IAM - Best Practices Recommended by AWS, Azure, and GCP
                                </p>
                            </Link>
                        </div>
                    </Row>
                    <div className='flex justify-end'>
                        <Link to='/blog/' className='flex hover:underline'>
                            <p className='font-hind text-lg font-medium'>VIEW ALL ARTICLES</p>
                            <img src={ArrowRightBlack} alt='' width={18} className='mb-1 ml-1' />
                        </Link>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-10'>
                    <h2
                        className='font-montserrat font-bold text-blue'
                        css={css`
                            font-size: 2rem;
                        `}
                    >
                        Case Studies
                    </h2>
                    <Row className='py-12'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                            <Link to='/case-studies/smart-fintech/' className='hover:underline'>
                                <GatsbyImage
                                    image={data.smartFintech.childImageSharp.gatsbyImageData}
                                    alt='Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and
                                    compliance'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>
                                    Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and
                                    compliance
                                </p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-0'>
                            <Link to='/case-studies/bays-consulting/' className='hover:underline'>
                                <GatsbyImage
                                    image={data.baysConsulting.childImageSharp.gatsbyImageData}
                                    alt='Bays Consulting achieves 50% productivity gain with Cyscale'
                                    className='rounded-md'
                                    css={cardBorder}
                                />{' '}
                                <p className='font-hind font-medium text-lg mt-2 hover:underline'>
                                    Bays Consulting achieves 50% productivity gain with Cyscale
                                </p>
                            </Link>
                        </div>
                    </Row>
                </div>
            </Container>
            <Container>
                <div
                    className='pb-8 rounded-md'
                    css={css`
                        background-image: linear-gradient(180deg, #079bee 0%, #122ba3 100%);
                    `}
                >
                    <div className='grid grid-cols-12 gap-4 pt-8 px-4 md:px-10'>
                        <div className='col-span-12 gap-20 lg:col-span-4'>
                            <h2
                                className='font-montserrat font-hind font-bold text-white'
                                css={css`
                                    font-size: 2rem;
                                `}
                            >
                                Whitepapers
                                <br /> & guides
                            </h2>
                            <p className='font-hind font-medium text-base mt-2 text-white'>
                                This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data
                                security breaches and the importance of a secure cloud <br /> storage infrastructure.
                            </p>
                        </div>
                        <div
                            className='col-span-12 lg:col-span-8'
                            css={css`
                                @media (max-width: 768px) {
                                    height: 390px;
                                }
                                height: 100%;
                            `}
                        >
                            <div className='hidden md:block'>
                                <div className='grid grid-cols-12 gap-4'>
                                    <div className='col-span-12 sm:col-span-4 flex justify-center lg:justify-end mt-4 sm:mt-0'>
                                        <Link to='/whitepaper/cloud-storage-misconfigurations/' className='group'>
                                            <div css={whitepaperCard}>
                                                <GatsbyImage
                                                    image={data.csm.childImageSharp.gatsbyImageData}
                                                    alt='Cloud Storage Misconfigurations'
                                                />
                                            </div>
                                            <p
                                                css={whipaperParagraph}
                                                className='mt-2 text-white font-hind text-base group-hover:underline'
                                            >
                                                Cloud Storage Misconfigurations
                                            </p>
                                            <div className='flex mt-1'>
                                                <img src={ArrowRight} alt='' width={15} />
                                                <p className='font-montserrat text-xs text-white font-bold ml-2 group-hover:underline'>
                                                    Download
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-span-12 sm:col-span-4 flex justify-center lg:justify-end mt-4 sm:mt-0'>
                                        <Link
                                            to='/whitepaper/the-complete-guide-to-cloud-compliance/'
                                            className='group'
                                        >
                                            <div css={whitepaperCard}>
                                                <GatsbyImage
                                                    image={data.cc.childImageSharp.gatsbyImageData}
                                                    alt='Cloud Compliance in 2023 An In-depth Guide'
                                                />
                                            </div>
                                            <p
                                                css={whipaperParagraph}
                                                className='mt-2 text-white font-hind text-base group-hover:underline'
                                            >
                                                Cloud Compliance in 2023 An In-depth Guide
                                            </p>
                                            <div className='flex mt-1'>
                                                <img src={ArrowRight} alt='' width={15} />
                                                <p className='font-montserrat text-xs text-white font-bold ml-2 group-hover:underline'>
                                                    Download
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-span-12 sm:col-span-4 flex justify-center lg:justify-end mt-4 sm:mt-0'>
                                        <Link to='/resources/data-security-e-book.pdf/' className='group'>
                                            <div className='hover:underline'>
                                                <div css={whitepaperCard}>
                                                    <GatsbyImage
                                                        image={data.ebook.childImageSharp.gatsbyImageData}
                                                        alt='Data Security in the Cloud A Comprehensive Guide'
                                                    />
                                                </div>
                                                <p
                                                    css={whipaperParagraph}
                                                    className='mt-2 text-white font-hind text-base group-hover:underline'
                                                >
                                                    Data Security in the Cloud A Comprehensive Guide
                                                </p>
                                                <div className='flex mt-1'>
                                                    <img src={ArrowRight} alt='' width={15} />
                                                    <p className='font-montserrat text-xs text-white font-bold ml-2 group-hover:underline'>
                                                        Download
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='block md:hidden'>
                                <div className='relative'>
                                    <Carousel />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='mt-16'>
                    <h2
                        className='font-montserrat font-bold text-blue'
                        css={css`
                            font-size: 2rem;
                        `}
                        id='media-kit'
                    >
                        Videos
                    </h2>
                    <Row className='py-12'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                            <div
                                onClick={() => {
                                    setLeastPrivilegeModal(!leastPrivilegeModal);
                                }}
                                onKeyPress={() => {}}
                                tabIndex='0'
                                role='button'
                                className='hover:underline'
                            >
                                <GatsbyImage
                                    image={data.leastPrivilege.childImageSharp.gatsbyImageData}
                                    alt='Check for Least Privilege with Cyscale’s Identity Dashboard'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>
                                    Check for Least Privilege with Cyscale’s Identity Dashboard
                                </p>
                            </div>
                            {leastPrivilegeModal && <div className='modal-overlay'></div>}
                            <CSSTransition in={leastPrivilegeModal} timeout={300} classNames='video' unmountOnExit>
                                <VideoCyscale
                                    setModal={setLeastPrivilegeModal}
                                    videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/identity-dashboard.mp4'
                                />
                            </CSSTransition>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-0'>
                            <div
                                onClick={() => {
                                    setCyscaleModal(!cyscaleModal);
                                }}
                                onKeyPress={() => {}}
                                tabIndex='0'
                                role='button'
                                className='hover:underline'
                            >
                                <GatsbyImage
                                    image={data.cyscaleThumbnail.childImageSharp.gatsbyImageData}
                                    alt='Cyscale: The Cloud Visibility & Control Platform'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>
                                    Cyscale: The Cloud Visibility & Control Platform
                                </p>
                            </div>
                            {cyscaleModal && <div className='modal-overlay'></div>}
                            <CSSTransition in={cyscaleModal} timeout={300} classNames='video' unmountOnExit>
                                <VideoCyscale
                                    setModal={setCyscaleModal}
                                    videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/cyscale.mp4'
                                />
                            </CSSTransition>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 lg:mt-0'>
                            <div
                                onClick={() => {
                                    setTeasingModal(!teasingModal);
                                }}
                                onKeyPress={() => {}}
                                tabIndex='0'
                                role='button'
                                className='hover:underline'
                            >
                                <GatsbyImage
                                    image={data.teasingVideo.childImageSharp.gatsbyImageData}
                                    alt='Cyscale Teasing Video'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>Cyscale Teasing Video</p>
                            </div>
                            {teasingModal && <div className='modal-overlay'></div>}
                            <CSSTransition in={teasingModal} timeout={300} classNames='video' unmountOnExit>
                                <VideoCyscale
                                    setModal={setTeasingModal}
                                    videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/cyscale-short.mp4'
                                />
                            </CSSTransition>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 lg:mt-0'>
                            <div
                                onClick={() => {
                                    setFundingModal(!fundingModal);
                                }}
                                onKeyPress={() => {}}
                                tabIndex='0'
                                role='button'
                                className='hover:underline'
                            >
                                <GatsbyImage
                                    image={data.fundingVideo.childImageSharp.gatsbyImageData}
                                    alt='Funding Round'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>Funding Round</p>
                            </div>
                            {fundingModal && <div className='modal-overlay'></div>}
                            <CSSTransition in={fundingModal} timeout={300} classNames='video' unmountOnExit>
                                <VideoCyscale
                                    setModal={setFundingModal}
                                    videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/cyscale-search.mp4'
                                />
                            </CSSTransition>
                        </div>
                    </Row>
                </div>
            </Container>
            <Container>
                <div className='pb-10 lg:pb-24 mt-16'>
                    <h2
                        className='font-montserrat font-bold text-blue'
                        css={css`
                            font-size: 2rem;
                        `}
                        id='media-kit'
                    >
                        More
                    </h2>
                    <Row className='py-12'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                            <a
                                className='hover:underline cursor-pointer block'
                                href='https://docs.cyscale.com/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <GatsbyImage
                                    image={data.documentation.childImageSharp.gatsbyImageData}
                                    alt='Documentation Logo'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>Dcoumentation</p>
                            </a>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-0'>
                            <Link
                                to='/resources/cyscale-cloud-data-security-datasheet.pdf'
                                className='hover:underline cursor-pointer'
                            >
                                <GatsbyImage
                                    image={data.datasheet.childImageSharp.gatsbyImageData}
                                    alt='Datasheet Logo'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>Datasheet</p>
                            </Link>
                        </div>
                    </Row>
                </div>
            </Container>
            <Container>
                <div className='pb-10 lg:pb-32'>
                    <h2
                        className='font-montserrat font-bold text-blue'
                        css={css`
                            font-size: 2rem;
                        `}
                    >
                        Useful Links
                    </h2>
                    <Row className='py-12'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                            <p className='font-montserrat font-bold text-xl'>Platform</p>
                            <Link to='/products/cnapp/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>CNAPP Security</p>
                            </Link>
                            <Link
                                to='/products/cloud-security-posture-management/'
                                className='flex mt-4 hover:underline'
                            >
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>CSPM Tool</p>
                            </Link>
                            <Link to='/products/security-knowledge-graph/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>Security Knowledge Graph</p>
                            </Link>
                            <Link to='/use-cases/cloud-compliance-and-auditing/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>Cloud Security Compliance</p>
                            </Link>
                            <Link
                                to='/use-cases/cloud-native-security/'
                                className='flex items-start mt-4 hover:underline'
                            >
                                <img src={ArrowRightBlack} alt='' width={15} className='mt-1' />
                                <p className='font-montserrat text-sm ml-1'>Cloud Native Security Platform</p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-4 md:mt-0'>
                            <p className='font-montserrat font-bold text-xl'>Use cases</p>
                            <Link
                                to='/use-cases/cloud-misconfigurations/'
                                className='flex items-start mt-4 hover:underline'
                            >
                                <img src={ArrowRightBlack} alt='' width={15} className='mt-1' />
                                <p className='font-montserrat text-sm ml-1'>
                                    Automated Remediation for Cloud Misconfiguration
                                </p>
                            </Link>
                            <Link to='/use-cases/iam-security/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>IAM Cloud Security</p>
                            </Link>
                            <Link to='/use-cases/remote-work-security/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>Remote Work Cloud Security</p>
                            </Link>
                            <Link to='/use-cases/cloud-data-security/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>Multi-Cloud Data Security</p>
                            </Link>
                            <Link to='/use-cases/container-security/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>Container Security</p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-4 lg:mt-0'>
                            <p className='font-montserrat font-bold text-xl'>Compliance</p>
                            <Link to='/use-cases/iso-27001-compliance/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>ISO 27001 Cloud Security</p>
                            </Link>
                            <Link to='/use-cases/pci-dss/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>PCI Cloud Compliance</p>
                            </Link>
                            <Link to='/use-cases/soc-2/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>SOC 2 Cloud Security</p>
                            </Link>
                            <Link to='/use-cases/nist-compliance/' className='flex mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} />
                                <p className='font-montserrat text-sm ml-1'>NIST Cloud Compliance</p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-4 lg:mt-0'>
                            <p className='font-montserrat font-bold text-xl'>Environments</p>
                            <Link to='/use-cases/aws-cloud-security/' className='flex items-start mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} className='mt-1' />
                                <p className='font-montserrat text-sm ml-1'>AWS Cloud Security and Compliance</p>
                            </Link>
                            <Link
                                to='/use-cases/azure-cloud-security/'
                                className='flex items-start mt-4 hover:underline'
                            >
                                <img src={ArrowRightBlack} alt='' width={15} className='mt-1' />
                                <p className='font-montserrat text-sm ml-1'>Azure Cloud Security and Compliance</p>
                            </Link>
                            <Link to='/use-cases/gcp-cloud-security/' className='flex items-start mt-4 hover:underline'>
                                <img src={ArrowRightBlack} alt='' width={15} className='mt-1' />
                                <p className='font-montserrat text-sm ml-1'>Google Cloud Security and Compliance</p>
                            </Link>
                        </div>
                    </Row>
                </div>
            </Container>
        </Layout>
    );
};

export default Resources;
