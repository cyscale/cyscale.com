import React from 'react';
import { Row, Container } from '../atoms/Containers';
import PostAuthor from './PostAuthor';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Categories from './Categories';
import Post from './Post';
import { map, filter, slice } from 'lodash';
import Share from '../Share/Share';
import { Link as ScrollLink, Element } from 'react-scroll';
import { GatsbyImage } from 'gatsby-plugin-image';
import cyscaleMan from '../../assets/images/cyscale-man.svg';
import arrowRight from '../../assets/images/arrow-right-1-white.svg';
import { Link } from 'gatsby';
import useSubscribe from '../../hooks/useSubscribe';
import useScrollTrigger from '../scrollTrigger';
import { css } from 'twin.macro';
import ComplianceToolbox from '../../assets/images/compliance-toolbox-blog.png';
import ArrowRight from '../../assets/images/arrow-right-white.svg';

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

export default function PostContent({ data, suggestions, preview = false, pageUri, pageName, dataWhitepaper }) {
    const { emailInput, alert, onChange, onSubmit, onKeyDown } = useSubscribe(pageUri, pageName);
    const trigger = useScrollTrigger();

    return (
        <div>
            <div className='container max-w-7xl mx-auto xl:flex xl:pl-12 xl:pr-16'>
                <div className='max-w-4xl mx-auto xl:mx-0 px-8'>
                    <div className='py-10  border-b border-lightGrey2 lg:border-0'>
                        <Row>
                            <div className='col-span-12 lg:col-span-6 flex flex-col justify-between'>
                                {data.categories && (
                                    <div>
                                        <Categories categories={data.categories} />
                                    </div>
                                )}
                                <h1 className='text-2xl my-4 font-medium'>{data.title}</h1>
                                {data.authors && (
                                    <PostAuthor preview={preview} date={data.date} author={data.authors} />
                                )}
                            </div>
                            <div className='mt-8 lg:mt-0 col-span-12 lg:col-span-6'>
                                {!preview ? (
                                    data.permalink === 'whitepaper-cloud-compliance-in-2023' ? (
                                        <Link to='/whitepaper/the-complete-guide-to-cloud-compliance/'>
                                            {' '}
                                            <GatsbyImage
                                                image={data.featuredimage.childImageSharp.gatsbyImageData}
                                                className='rounded-lg overflow-hidden shadow-md'
                                                alt={data.title}
                                            />
                                        </Link>
                                    ) : (
                                        <GatsbyImage
                                            image={data.featuredimage.childImageSharp.gatsbyImageData}
                                            className='rounded-lg overflow-hidden shadow-md'
                                            alt={data.title}
                                        />
                                    )
                                ) : (
                                    <img src={data.featuredimage.publicURL} className='rounded-lg' alt={data.title} />
                                )}
                            </div>
                        </Row>
                    </div>
                    <div className='blog-reset'>
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            linkTarget='_blank'
                            components={{
                                toc({ node, className, href, target, children, ...props }) {
                                    return (
                                        <ScrollLink
                                            className={`${className} cursor-pointer`}
                                            {...props}
                                            smooth={true}
                                            duration={500}
                                            target={target}
                                            to={href}
                                        >
                                            {children}
                                        </ScrollLink>
                                    );
                                },
                                el({ node, name, children, ...props }) {
                                    return (
                                        <Element name={name} {...props}>
                                            {children}
                                        </Element>
                                    );
                                },
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <div style={{ fontSize: '0.875rem' }}>
                                            <SyntaxHighlighter
                                                children={String(children).replace(/\n$/, '')}
                                                language={match[1]}
                                                PreTag='div'
                                                {...props}
                                            />
                                        </div>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                }
                            }}
                        >
                            {data.rawMarkdownBody}
                        </ReactMarkdown>
                    </div>
                </div>
                {!preview && (
                    <div className='flex flex-col self-stretch justify-between'>
                        <div
                            className={`hidden xl:block w-72 sticky pl-10 mt-6 font-montserrat mb-52 ${
                                trigger ? 'top-0' : 'top-28'
                            }`}
                            css={ctaTransition}
                        >
                            <p className='text-xs font-semibold uppercase mt-4' css={ctaWhitepaperTextColor}>
                                Further reading
                            </p>
                            <p className='text-lg font-bold mt-2'>
                                Cloud Compliance in
                                <br /> 2023: An In-Depth Guide
                            </p>
                            <GatsbyImage
                                alt='White paper Cover'
                                className='rounded-md mt-2 shadow-2xl'
                                image={dataWhitepaper.whitepaperCover.childImageSharp.gatsbyImageData}
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
                            <hr className='mt-4' css={hrStyle} />
                            <p className='text-xs font-semibold uppercase mt-4' css={ctaWhitepaperTextColor}>
                                Share this article
                            </p>
                            <div className='w-12'>
                                <Share
                                    title={data?.title}
                                    permalink={data?.permalink}
                                    description={data?.description}
                                    blog={true}
                                />
                            </div>
                        </div>
                        <div className='w-72 pl-10 hidden xl:block'>
                            <div className='bg-lightGrey2 rounded-md p-4 mt-4'>
                                <p className='text-lg font-bold font-montserrat mb-4'>Stay Connected</p>
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
                                    <p className={`${alert.alertClass} text-left text-xs inline-block py-2`}>
                                        {alert.message}
                                    </p>
                                )}
                                <button
                                    type='submit'
                                    className='text-white mt-2 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full pb-2.5 pt-3'
                                    onClick={onSubmit}
                                    css={css`
                                        background-color: #0f26aa;
                                    `}
                                >
                                    Subscribe to newsletter
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {!preview && (
                    <div className='max-w-4xl my-auto mx-auto xl:hidden px-8'>
                        <div className='flex items-center '>
                            <p className='text-sm mt-2'>Interesting? Share it</p>
                            <div className='mt-2'>
                                <Share
                                    title={data?.title}
                                    permalink={data?.permalink}
                                    description={data?.description}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='container max-w-4xl m-auto px-4'>
                {!preview && (
                    <>
                        <div className='mx_auto mt-16 hidden lg:block xl:hidden'>
                            <div
                                className='grid grid-cols-12 gap-x-1 rounded-xl px-7 max-w-lg lg:max-w-full mx-auto'
                                style={{ backgroundColor: '#EEEEEE' }}
                            >
                                <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                    <div className='mt-2 lg:mt-0  max-w-lg lg:max-w-2xl mx-auto relative h-20 flex flex-col justify-center'>
                                        <p className='text-lg font-semibold'>Stay connected</p>
                                        <p className='text-sm'>
                                            Receive new blog posts and product updates from Cyscale
                                        </p>
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                    <div
                                        className={`mt-2 mb-8 lg:mt-0 max-w-lg ${
                                            alert ? 'lg:mb-0' : 'lg:mb-5'
                                        } lg:max-w-2xl mx-auto relative lg:h-16 flex flex-col lg:flex-row lg:items-end lg:px-0`}
                                    >
                                        <input
                                            type='email'
                                            id='email'
                                            className={`bg-gray-50 border-element-modal text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                                                alert ? 'mb-0' : 'mb-2'
                                            } lg:mb-0`}
                                            placeholder='Your email'
                                            onChange={onChange}
                                            value={emailInput}
                                            onKeyDown={onKeyDown}
                                        />
                                        {alert && (
                                            <p
                                                className={`${alert.alertClass} text-left text-xs inline-block lg:hidden py-2`}
                                            >
                                                {alert.message}
                                            </p>
                                        )}
                                        <button
                                            type='submit'
                                            className='text-white gradientBgBtn hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full lg:w-20 lg:ml-3 pb-2.5 pt-3'
                                            onClick={onSubmit}
                                        >
                                            <img src={arrowRight} className='mx-auto w-5 h-auto' alt='' />
                                        </button>
                                    </div>
                                    {alert && (
                                        <div className='hidden lg:block py-2'>
                                            <p className={`${alert.alertClass} text-xs`}> {alert.message}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='bg-lightGrey2 rounded-md p-4 mt-16 max-w-lg mx-auto block lg:hidden'>
                            <p className='text-lg font-bold font-montserrat mb-4'>Stay Connected</p>
                            <p className='text-xs font-medium font-montserrat mb-2' css={ctaWhitepaperTextColor}>
                                Receive our latest blog posts and product updates.
                            </p>
                            <input
                                type='email'
                                id='email'
                                className={`bg-gray-50 border-element-modal text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                                    alert ? 'mb-0' : 'mb-2'
                                } lg:mb-0`}
                                placeholder='Your email'
                                onChange={onChange}
                                value={emailInput}
                                onKeyDown={onKeyDown}
                            />
                            {alert && (
                                <p className={`${alert.alertClass} text-left text-xs inline-block py-2`}>
                                    {alert.message}
                                </p>
                            )}
                            <button
                                type='submit'
                                className='text-white mt-2 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full pb-2.5 pt-3'
                                onClick={onSubmit}
                                css={css`
                                    background-color: #0f26aa;
                                `}
                            >
                                Subscribe to newsletter
                            </button>
                        </div>
                    </>
                )}
            </div>
            {!preview && (
                <Container>
                    <div className='mt-24 grid grid-cols-12  md:gap-10'>
                        <div className='col-span-12 lg:col-span-4 px-4 sm:px-0 sm:mx-auto lg:mx-0 max-w-xs sm:max-w-lg lg:max-w-lg '>
                            <p
                                className='text-base font-bold font-montserrat'
                                css={css`
                                    color: #38aff1;
                                `}
                            >
                                TOP ARTICLES
                            </p>
                            <h2
                                className='font-bold font-montserrat'
                                css={css`
                                    font-size: 2rem;
                                `}
                            >
                                Compliance
                            </h2>
                            <div className='flex flex-col'>
                                {' '}
                                <Link
                                    to='/blog/AWS-SOC-2-Compliance-Checklist-A-Detailed-Guide/'
                                    className='text-base font-medium font-montserrat inline-block mt-4'
                                >
                                    AWS SOC 2 Compliance Checklist:
                                    <br className='hidden lg:block' /> A Detailed Guide
                                </Link>{' '}
                                <Link
                                    to='/blog/cloud-security-and-compliance/'
                                    className='text-base font-medium font-montserrat inline-block mt-4'
                                >
                                    Cloud Security and Compliance: A <br className='hidden lg:block' /> guide for Your
                                    Cloud Infrastructure
                                </Link>{' '}
                                <Link
                                    to='/blog/pci-dss-compliance-in-cloud/'
                                    className='text-base font-medium font-montserrat inline-block mt-4'
                                >
                                    PCI-DSS Compliance in the Cloud
                                </Link>{' '}
                                <Link
                                    to='/blog/nist-compliance-in-the-cloud/'
                                    className='text-base font-medium font-montserrat inline-block mt-4'
                                >
                                    NIST Compliance in the Cloud
                                </Link>{' '}
                                <Link
                                    to='/blog/hipaa-compliance-in-cloud/'
                                    className='text-base font-medium font-montserrat inline-block mt-4'
                                >
                                    HIPAA Compliance in the Cloud
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-8 sm:max-w-lg md:max-w-lg lg:max-w-4xl mx-auto lg:mx-0'>
                            <div
                                className='mt-6 lg:mt-0 rounded-xl py-6 relative flex'
                                style={{
                                    backgroundImage:
                                        'linear-gradient(to bottom, #4a85eb, #326fe3, #1b58d8, #073fcc, #0623be)'
                                }}
                            >
                                <div className='pl-8 pr-8 xl:pr-0 lg:max-w-md'>
                                    <h2
                                        className='text-white font-bold font-montserrat'
                                        css={css`
                                            font-size: 2rem;
                                        `}
                                    >
                                        Our Compliance toolbox
                                    </h2>
                                    <p className='text-base text-white'>
                                        Check out our compliance platform for cloud-native and cloud-first
                                        organizations:
                                    </p>
                                    <Link to='/' className='flex mt-4'>
                                        <img src={ArrowRight} alt='' width={24} />
                                        <span className='text-base text-white font-montserrat font-bold ml-3'>
                                            Cloud Security Compliance
                                        </span>
                                    </Link>{' '}
                                    <Link to='/' className='flex mt-4'>
                                        <img src={ArrowRight} alt='' width={24} />
                                        <span className='text-base text-white font-montserrat font-bold ml-3'>
                                            SOC Cloud Security
                                        </span>
                                    </Link>{' '}
                                    <Link to='/' className='flex mt-4'>
                                        <img src={ArrowRight} alt='' width={24} />
                                        <span className='text-base text-white font-montserrat font-bold ml-3'>
                                            PCI Cloud Compliance
                                        </span>
                                    </Link>{' '}
                                    <Link to='/' className='flex mt-4'>
                                        <img src={ArrowRight} alt='' width={24} />
                                        <span className='text-base text-white font-montserrat font-bold ml-3'>
                                            NIST Cloud Compliance
                                        </span>
                                    </Link>{' '}
                                    <Link to='/' className='flex mt-4'>
                                        <img src={ArrowRight} alt='' width={24} />
                                        <span className='text-base text-white font-montserrat font-bold ml-3'>
                                            ISO 27001 Cloud Compliance
                                        </span>
                                    </Link>
                                </div>

                                <div className='hidden lg:block'>
                                    <img src={ComplianceToolbox} alt="" width={310} className="absolute bottom-0 right-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            )}
            {!preview && suggestions && (
                <div className='bg-lightGrey2 mt-12 py-12'>
                    <Container>
                        <Row className='gap-4 lg:gap-8'>
                            {map(
                                slice(
                                    filter(suggestions, ({ node }) => node.frontmatter.permalink !== data.permalink),
                                    0,
                                    3
                                ),
                                (post, key) => (
                                    <div className='col-span-12 md:col-span-6 lg:col-span-4' key={key}>
                                        {post?.node && <Post {...post.node.frontmatter} />}
                                    </div>
                                )
                            )}
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    );
}
