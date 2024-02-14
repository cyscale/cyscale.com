import React, { useState } from 'react';
import Layout from '../components/layout/CleanLayout';
import { Container, Row } from '../components/atoms/Containers';
import { css } from 'twin.macro';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link, useStaticQuery, graphql } from 'gatsby';
import VideoCyscale from '../components/campaigns/cspm-solution/CyscaleVideo';
import { CSSTransition } from 'react-transition-group';
import ArrowRight from '../assets/images/arrow-right-white.svg';
import Carousel from '../components/resources/Carousel';
import ArrowRightBlack from '../assets/images/arrow-right-black.svg';
import PlayButton from '../components/resources/PlayButton';
import FeaturedArticlesCarousel from '../components/resources/FeaturedArticlesCarousel';
import CaseStudiesCarousel from '../components/resources/CaseStudiesCarousel';
import VideosCarousel from '../components/resources/VideosCarousel';
import CarouselCheatSheet from '../components/resources/CarouselCheatSheet';

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

    const [leastPrivilegeModalM, setLeastPrivilegeModalM] = useState(false);
    const [cyscaleModalM, setCyscaleModalM] = useState(false);
    const [teasingModalM, setTeasingModalM] = useState(false);
    const [fundingModalM, setFundingModalM] = useState(false);

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
            firstArticle: file(relativePath: { eq: "cloud-native.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            secondArticle: file(relativePath: { eq: "29_blog-cloud-and-compliance.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            thirdArticle: file(relativePath: { eq: "blog_34-cover.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            forthArticle: file(relativePath: { eq: "securing-iam.webp" }) {
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
            CDSecurity: file(relativePath: { eq: "cds-case-study.png" }) {
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
            demo: file(relativePath: { eq: "book-a-demo-resources.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            mssps: file(relativePath: { eq: "mssps.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            awsCheatSheet: file(relativePath: { eq: "aws-cheat-sheet.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            azureCheatSheet: file(relativePath: { eq: "azure-cheat-sheet.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
            googleCheatSheet: file(relativePath: { eq: "google-cloud-cheat-sheet.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 700, layout: CONSTRAINED)
                }
            }
        }
    `);

    const slides = [
        {
            image: data.baysConsulting.childImageSharp.gatsbyImageData,
            alt: 'Bays Consulting achieves 50% productivity gain with Cyscale',
            text: 'Bays Consulting achieves 50% productivity gain with Cyscale',
            link: '/case-studies/bays-consulting/'
        },
        {
            image: data.smartFintech.childImageSharp.gatsbyImageData,
            alt: 'Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and compliance',
            text: 'Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and compliance',
            link: '/case-studies/smart-fintech/'
        },
        {
            image: data.CDSecurity.childImageSharp.gatsbyImageData,
            alt: 'Data security in a multi-cloud environment',
            text: (
                <>
                    Data security in a<br /> multi-cloud environment
                </>
            ),
            link: '/case-studies/cloud-data-security/'
        },
        {
            image: data.demo.childImageSharp.gatsbyImageData,
            alt: '',
            text: 'RequestDemo',
            link: '/request-demo/',
            cardText: (
                <>
                    Book a demo to discuss
                    <br /> your use case
                </>
            )
        }
    ];

    const videosSlides = [
        {
            image: data.leastPrivilege.childImageSharp.gatsbyImageData,
            alt: 'Check for Least Privilege with Cyscale’s Identity Dashboard',
            text: 'Check for Least Privilege with Cyscale’s Identity Dashboard',
            modal: leastPrivilegeModalM,
            setModal: setLeastPrivilegeModalM,
            videoUrl: 'https://d3n52qn7viv754.cloudfront.net/videos/identity-dashboard.mp4'
        },
        {
            image: data.cyscaleThumbnail.childImageSharp.gatsbyImageData,
            alt: 'Cyscale: The Cloud Visibility & Control Platform',
            text: 'Cyscale: The Cloud Visibility & Control Platform',
            modal: cyscaleModalM,
            setModal: setCyscaleModalM,
            videoUrl: 'https://d3n52qn7viv754.cloudfront.net/videos/cyscale.mp4'
        },
        {
            image: data.teasingVideo.childImageSharp.gatsbyImageData,
            alt: 'Cyscale Teasing Video',
            text: 'Cyscale Teasing Video',
            modal: teasingModalM,
            setModal: setTeasingModalM,
            videoUrl: 'https://d3n52qn7viv754.cloudfront.net/videos/cyscale-short.mp4'
        },
        {
            image: data.fundingVideo.childImageSharp.gatsbyImageData,
            alt: 'Funding Roun',
            text: 'Funding Round',
            modal: fundingModalM,
            setModal: setFundingModalM,
            videoUrl: 'https://d3n52qn7viv754.cloudfront.net/videos/cyscale-search.mp4'
        }
    ];

    return (
        <Layout
            location={location}
            pageName='Resources'
            title='Cloud Security Resources | Datasheets, Case Studies, White Papers - Cyscale'
            description="Dive into Cyscale's resources for expert insights on cloud security. Discover datasheets, case studies, white papers, and best practices to secure your cloud infrastructure."
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /resources
            </div>
            <div className='hidden' data-title>
                Cloud Security Resources | Datasheets, Case Studies, White Papers - Cyscale
            </div>
            <div className='hidden' data-description>
                Dive into Cyscale's resources for expert insights on cloud security. Discover datasheets, case studies,
                white papers, and best practices to secure your cloud infrastructure.
            </div>
            <div className='hidden' data-category>
                website
            </div>
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
                    <Row className='md:pt-12 pb-12'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 hidden md:block'>
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
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-0 hidden md:block'>
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
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 lg:mt-0 hidden md:block'>
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
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 lg:mt-0 hidden md:block'>
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
                        <div className='col-span-12 block md:hidden'>
                            <div
                                className='relative'
                                css={css`
                                    height: 25rem;
                                `}
                            >
                                <FeaturedArticlesCarousel duration={0} />
                            </div>
                        </div>
                    </Row>
                    <div className='flex justify-start sm:justify-end'>
                        <Link to='/blog/' className='flex hover:underline'>
                            <p className='font-hind text-lg font-medium'>VIEW ALL ARTICLES</p>
                            <img src={ArrowRightBlack} alt='' width={18} className='mb-1 ml-1' />
                        </Link>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='pb-10' id='case-studies'>
                    <h2
                        className='font-montserrat font-bold text-blue'
                        css={css`
                            font-size: 2rem;
                        `}
                    >
                        Case Studies
                    </h2>
                    <Row className='pb-16 md:pt-12 md:pb-12'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-0 hidden md:block'>
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
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 hidden md:block'>
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
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 hidden md:block'>
                            <Link to='/case-studies/cloud-data-security/' className='hover:underline'>
                                <GatsbyImage
                                    image={data.CDSecurity.childImageSharp.gatsbyImageData}
                                    alt='Data security in a multi-cloud environment'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>
                                    Data security in a <br />
                                    multi-cloud environment
                                </p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-0 hidden md:block'>
                            <Link to='/request-demo/' className='block relative group'>
                                <GatsbyImage
                                    image={data.demo.childImageSharp.gatsbyImageData}
                                    alt=''
                                    className='rounded-md'
                                    css={cardBorder}
                                />{' '}
                                <p
                                    className='font-hind text-base text-blue text-center group-hover:underline w-72'
                                    css={css`
                                        position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                    `}
                                >
                                    Book a demo to discuss <br /> your use case
                                </p>
                            </Link>
                        </div>
                        <div className='col-span-12 block md:hidden'>
                            <div
                                className='relative'
                                css={css`
                                    height: 15rem;
                                `}
                            >
                                <CaseStudiesCarousel slides={slides} />
                            </div>
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
                                className='font-montserrat font-bold text-white'
                                css={css`
                                    font-size: 2rem;
                                `}
                            >
                                Whitepapers
                                <br /> & guides
                            </h2>
                            <p className='font-hind font-medium text-base mt-2 text-white'>
                                Download additional resources for CIOs, CISOs and security staff to learn more about the
                                risk & dangers of data security breaches, about how to achieve and maintain a healthy
                                cloud security posture and to use as guides on the compliance journey.
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
                                        <a
                                            href='https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKcdzdjs3ubIU5XI1ozY9QJ9YF2yD%2BsoZJAk2vNcR0qYhDoYVmmHNu5VA5Avb9E7Sr%2BRbNjqakYxt0DJ%2B1qbaeIfqdLwOEW0Tl%2FYSlNPTCQfjQ%3D&webInteractiveContentId=127064433808&portalId=5413427'
                                            className='group'
                                        >
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
                                        </a>
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
                    <Row className='pb-6 md:py-12'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 hidden md:block'>
                            <PlayButton modal={leastPrivilegeModal} setModal={setLeastPrivilegeModal}>
                                <GatsbyImage
                                    image={data.leastPrivilege.childImageSharp.gatsbyImageData}
                                    alt='Check for Least Privilege with Cyscale’s Identity Dashboard'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>
                                    Check for Least Privilege with Cyscale’s Identity Dashboard
                                </p>
                            </PlayButton>
                            {leastPrivilegeModal && <div className='modal-overlay'></div>}
                            <CSSTransition in={leastPrivilegeModal} timeout={300} classNames='video' unmountOnExit>
                                <VideoCyscale
                                    setModal={setLeastPrivilegeModal}
                                    videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/identity-dashboard.mp4'
                                />
                            </CSSTransition>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-0 hidden md:block'>
                            <PlayButton modal={cyscaleModal} setModal={setCyscaleModal}>
                                <GatsbyImage
                                    image={data.cyscaleThumbnail.childImageSharp.gatsbyImageData}
                                    alt='Cyscale: The Cloud Visibility & Control Platform'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>
                                    Cyscale: The Cloud Visibility & Control Platform
                                </p>
                            </PlayButton>
                            {cyscaleModal && <div className='modal-overlay'></div>}
                            <CSSTransition in={cyscaleModal} timeout={300} classNames='video' unmountOnExit>
                                <VideoCyscale
                                    setModal={setCyscaleModal}
                                    videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/cyscale.mp4'
                                />
                            </CSSTransition>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 lg:mt-0 hidden md:block'>
                            <PlayButton modal={teasingModal} setModal={setTeasingModal}>
                                <GatsbyImage
                                    image={data.teasingVideo.childImageSharp.gatsbyImageData}
                                    alt='Cyscale Teasing Video'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>Cyscale Teasing Video</p>
                            </PlayButton>
                            {teasingModal && <div className='modal-overlay'></div>}
                            <CSSTransition in={teasingModal} timeout={300} classNames='video' unmountOnExit>
                                <VideoCyscale
                                    setModal={setTeasingModal}
                                    videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/cyscale-short.mp4'
                                />
                            </CSSTransition>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 lg:mt-0 hidden md:block'>
                            <PlayButton modal={fundingModal} setModal={setFundingModal}>
                                <GatsbyImage
                                    image={data.fundingVideo.childImageSharp.gatsbyImageData}
                                    alt='Funding Round'
                                    className='rounded-md'
                                    css={cardBorder}
                                />
                                <p className='font-hind font-medium text-lg mt-2'>Funding Round</p>
                            </PlayButton>

                            {fundingModal && <div className='modal-overlay'></div>}
                            <CSSTransition in={fundingModal} timeout={300} classNames='video' unmountOnExit>
                                <VideoCyscale
                                    setModal={setFundingModal}
                                    videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/cyscale-search.mp4'
                                />
                            </CSSTransition>
                        </div>
                        <div className='col-span-12 block md:hidden'>
                            <div
                                className='relative'
                                css={css`
                                    height: 15rem;
                                `}
                            >
                                <VideosCarousel slides={videosSlides} />
                            </div>
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
                                />
                                <p className='font-hind font-medium text-lg mt-2'>Documentation</p>
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
                                />
                                <p className='font-hind font-medium text-lg mt-2'>Datasheet</p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-0'>
                            <Link to='/resources/empowering-mssps.pdf' className='hover:underline cursor-pointer'>
                                <GatsbyImage
                                    image={data.mssps.childImageSharp.gatsbyImageData}
                                    alt="MSSP's Logo"
                                    className='rounded-md'
                                />
                                <p className='font-hind font-medium text-lg mt-2'>Empowering MSSPs</p>
                            </Link>
                        </div>
                    </Row>
                </div>
            </Container>
            <Container>
                <div
                    className='pb-8 rounded-md'
                    css={css`
                        background: linear-gradient(90deg, #000 0.08%, #0f26aa 19.01%, #68338b 44.53%, #ff4a56 88.03%);
                    `}
                    id='cheat-sheets'
                >
                    <div className='grid grid-cols-12 gap-4 pt-8 px-4 md:px-10'>
                        <div className='col-span-12 gap-20 lg:col-span-4'>
                            <h2
                                className='font-montserrat font-bold text-white'
                                css={css`
                                    font-size: 2rem;
                                `}
                            >
                                Cheat sheets
                            </h2>
                            <p className='font-hind font-medium text-base mt-2 text-white'>
                                Download the cheat sheets for AWS, Azure, and Google Cloud to secure your cloud
                                environment in no time.
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
                                        <Link to='/resources/aws-cloud-security-cheat-sheet.pdf' className='group'>
                                            <div css={whitepaperCard}>
                                                <GatsbyImage
                                                    image={data.awsCheatSheet.childImageSharp.gatsbyImageData}
                                                    alt='AWS Cloud Security Cheat Sheet'
                                                    className='rounded'
                                                />
                                            </div>
                                            <p
                                                css={whipaperParagraph}
                                                className='mt-2 text-white font-hind text-base group-hover:underline'
                                            >
                                                AWS Cloud Security
                                                <br /> Cheat Sheet
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
                                        <Link to='/resources/azure-cloud-security-cheat-sheet.pdf' className='group'>
                                            <div css={whitepaperCard}>
                                                <GatsbyImage
                                                    image={data.azureCheatSheet.childImageSharp.gatsbyImageData}
                                                    alt='Azure Cloud Security Cheat Sheet'
                                                    className='rounded'
                                                />
                                            </div>
                                            <p
                                                css={whipaperParagraph}
                                                className='mt-2 text-white font-hind text-base group-hover:underline'
                                            >
                                                Azure Cloud Security
                                                <br /> Cheat Sheet
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
                                        <Link to='/resources/google-cloud-security-cheat-sheet.pdf' className='group'>
                                            <div className='hover:underline'>
                                                <div css={whitepaperCard}>
                                                    <GatsbyImage
                                                        image={data.googleCheatSheet.childImageSharp.gatsbyImageData}
                                                        alt='Google Cloud Security Cheat Sheet'
                                                        className='rounded'
                                                    />
                                                </div>
                                                <p
                                                    css={whipaperParagraph}
                                                    className='mt-2 text-white font-hind text-base group-hover:underline'
                                                >
                                                    Google Cloud Security
                                                    <br /> Cheat Sheet
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
                                    <CarouselCheatSheet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className='mt-16 lg:mt-24'>
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
                            <Link to='/products/cnapp/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>CNAPP Security</p>
                            </Link>
                            <Link
                                to='/products/cloud-security-posture-management/'
                                className='mt-4 hover:underline block'
                            >
                                <p className='font-montserrat text-sm'>CSPM Tool</p>
                            </Link>
                            <Link to='/products/security-knowledge-graph/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>Security Knowledge Graph</p>
                            </Link>
                            <Link to='/use-cases/cloud-compliance-and-auditing/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>Cloud Security Compliance</p>
                            </Link>
                            <Link to='/use-cases/cloud-native-security/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>Cloud Native Security Platform</p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-4 md:mt-0'>
                            <p className='font-montserrat font-bold text-xl'>Use cases</p>
                            <Link to='/use-cases/cloud-misconfigurations/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>
                                    Automated Remediation for Cloud Misconfiguration
                                </p>
                            </Link>
                            <Link to='/use-cases/iam-security/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>IAM Cloud Security</p>
                            </Link>
                            <Link to='/use-cases/remote-work-security/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>Remote Work Cloud Security</p>
                            </Link>
                            <Link to='/use-cases/cloud-data-security/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>Multi-Cloud Data Security</p>
                            </Link>
                            <Link to='/use-cases/container-security/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>Container Security</p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-4 lg:mt-0'>
                            <p className='font-montserrat font-bold text-xl'>Compliance</p>
                            <Link to='/use-cases/iso-27001-compliance/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>ISO 27001 Cloud Security</p>
                            </Link>
                            <Link to='/use-cases/pci-dss/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>PCI Cloud Compliance</p>
                            </Link>
                            <Link to='/use-cases/soc-2/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>SOC 2 Cloud Security</p>
                            </Link>
                            <Link to='/use-cases/nist-compliance/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>NIST Cloud Compliance</p>
                            </Link>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 mt-4 lg:mt-0'>
                            <p className='font-montserrat font-bold text-xl'>Environments</p>
                            <Link to='/use-cases/aws-cloud-security/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>AWS Cloud Security and Compliance</p>
                            </Link>
                            <Link to='/use-cases/azure-cloud-security/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>Azure Cloud Security and Compliance</p>
                            </Link>
                            <Link to='/use-cases/gcp-cloud-security/' className='mt-4 hover:underline block'>
                                <p className='font-montserrat text-sm'>Google Cloud Security and Compliance</p>
                            </Link>
                        </div>
                    </Row>
                </div>
            </Container>
        </Layout>
    );
};

export default Resources;
