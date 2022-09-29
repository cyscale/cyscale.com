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

const ctaTransition = css`
    transition: all 0.25s ease-in-out 0s;
`;

const ctaWhitepaperTextColor = css`
    color: #474747;
`;

const downloadWhitepaperLinkColor = css`
    color: #0f26aa;
`;

const ctaHeight = css`
    height: 26rem;
`;

export default function PostContent({ data, suggestions, preview = false, pageUri, pageName, dataWhitepaper }) {
    const { emailInput, alert, onChange, onSubmit, onKeyDown } = useSubscribe(pageUri, pageName);
    const trigger = useScrollTrigger();

    return (
        <div>
            <div className='container max-w-7xl mx-auto xl:flex xl:pl-12 xl:pr-16'>
                <div className='max-w-4xl my-auto mx-auto xl:mx-0 px-8'>
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
                                    <GatsbyImage
                                        image={data.featuredimage.childImageSharp.gatsbyImageData}
                                        className='rounded-lg overflow-hidden shadow-md'
                                        alt={data.title}
                                    />
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
                    <div
                        className={`hidden xl:block w-72 sticky pl-10 mt-6 font-montserrat ${
                            trigger ? 'top-0' : 'top-28'
                        }`}
                        css={[ctaTransition, ctaHeight]}
                    >
                        <p className='text-xs font-semibold uppercase mt-4' css={ctaWhitepaperTextColor}>
                            Further reading
                        </p>
                        <p className='text-lg font-bold mt-2'>
                            Cloud Storage <br /> Misconfigurations
                        </p>
                        <GatsbyImage
                            alt='White paper Cover'
                            className='rounded-md mt-4 shadow-2xl'
                            image={dataWhitepaper.whitepaperCover.childImageSharp.gatsbyImageData}
                        />

                        <p className='text-xs mt-2 font-montserrat' css={ctaWhitepaperTextColor}>
                            Build and maintain a strong <br /> Security Program from the start.
                        </p>
                        <Link
                            className='text-xs underline'
                            css={downloadWhitepaperLinkColor}
                            to={'/whitepaper/cloud-storage-misconfigurations/'}
                        >
                            Download Whitepaper
                        </Link>
                        <p className='text-xs font-semibold uppercase mt-10' css={ctaWhitepaperTextColor}>
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
            <div className='container max-w-4xl m-auto px-8'>
                {!preview && (
                    <>
                        <div className='mx_auto mt-16'>
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
                        <div className='mx-auto mt-24'>
                            <div className='grid grid-cols-12 gap-x-5'>
                                <div className='col-span-12 lg:col-span-8 lg:mx-0'>
                                    <div className='mt-6 lg:mt-0 rounded-xl  max-w-lg lg:max-w-2xl mx-auto relative bg-cta-playground h-64 sm:h-56 flex flex-col justify-center px-7'>
                                        <h1 className='text-white text-2xl mb-4 font-semibold'>Product Playground</h1>
                                        <p className='text-white text-md'>
                                            View a fully-populated product demo. All <br className='hidden sm:block' />{' '}
                                            features - no setup, no commitment.
                                        </p>
                                        <div className='mt-6 w-60 inline-block'>
                                            <a
                                                href={`https://app.cyscale.com/playground?source=${pageUri}`}
                                                className='w-full block font-medium rounded bg-white text-center py-3'
                                                target='_blank'
                                                rel='noopener noreferrer nofollow'
                                            >
                                                Access Playground
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-4 lg:mx-0'>
                                    <div className='mt-6 lg:mt-0 rounded-xl  max-w-lg lg:max-w-2xl mx-auto relative h-56 flex flex-col justify-center items-start px-7'>
                                        <div className='w-10 h-10 mb-2'>
                                            <img src={cyscaleMan} className='w-full h-full' alt='' />
                                        </div>
                                        <p className='text-lg font-semibold mb-2'>Schedule a Demo</p>
                                        <p className='text-md mb-2'>
                                            Sign up for a custom demo to see how we close security gaps and help you
                                            move to the cloud.
                                        </p>
                                        <Link to='/request-demo' className='text-lg text-blue font-semibold'>
                                            Request a Demo &gt;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
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
