import React, { useEffect, useRef, useState } from 'react';
import { Row } from '../atoms/Containers';
import PostAuthor from './PostAuthor';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Categories from './Categories';
import Share from '../Share/Share';
import { Link as ScrollLink, Element } from 'react-scroll';
import { GatsbyImage } from 'gatsby-plugin-image';
import arrowRight from '../../assets/images/arrow-right-1-white.svg';
import { Link } from 'gatsby';
import useSubscribe from '../../hooks/useSubscribe';
import { css } from 'twin.macro';
import ComplianceLinks from './ComplianceLinks';
import CSPMLinks from './CSPMLinks';
import OtherLinks from './OtherLinks';
import FurtherReadingSection from './FurtherReadingSection';
import ScrollIndicator from './ScrollbarIndicator';
import classnames from 'classnames';
import useScrollTrigger from '../scrollTrigger';
import { createSlug, headingRenderer } from '../../common/utils';

const ctaWhitepaperTextColor = css`
    color: #474747;
`;

const ctaTransition = css`
    transition: all 0.25s ease-in-out 0s;
`;

export default function PostContent({
    data,
    suggestions,
    preview = false,
    pageUri,
    pageName,
    dataWhitepaper,
    dataBlueBird,
    dataCompliceToolbox,
    tableOfContents
}) {
    const { emailInput, alert, onChange, onSubmit, onKeyDown } = useSubscribe(pageUri, pageName);
    const { categories } = data;
    const trigger = useScrollTrigger();

    const [toc, setToc] = useState([]);
    const scrollRef = useRef(null);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        let headings = [];

        for (const match of data.rawMarkdownBody.matchAll(/(#{1,6})\s(.+?)(?=\n|$)/g)) {
            const depth = match[1].length;
            const value = match[2].trim();
            const slug = createSlug(value);
            headings.push({ type: `h${depth}`, slug, value });
        }

        setToc(headings);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        const targets = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        targets.forEach((target) => observer.observe(target));

        return () => {
            targets.forEach((target) => observer.unobserve(target));
        };
    }, []);

    return (
        <div className='relative'>
            <ScrollIndicator ref={scrollRef} />
            <div
                className={classnames({
                    'container mx-auto xl:flex': true,
                    'xl:pl-8': tableOfContents,
                    'xl:pl-12 xl:pr-16': !tableOfContents
                })}
                css={css`
                    max-width: ${tableOfContents ? '90rem' : '80rem'};
                `}
            >
                {tableOfContents && (
                    <div
                        className={classnames({
                            'hidden xl:block sticky h-96': true,
                            'top-0': trigger,
                            'top-28': !trigger
                        })}
                        css={[
                            css`
                                width: 20rem;
                            `,
                            ctaTransition
                        ]}
                    >
                        <p
                            className='font-montserrat text-xs font-semibold pr-2 mb-2'
                            css={css`
                                margin-top: ${!trigger ? '2.5rem' : '0.938rem'};
                            `}
                        >
                            CONTENTS
                        </p>

                        {toc.map((heading, index) => {
                            const words = heading.value.replace(/\u00A0/g, '').split(' ');
                            const displayText = words.slice(0, 6).join(' ') + (words.length > 6 ? '...' : '');

                            const level = parseInt(heading.type.charAt(1));
                            const indent = level > 2 ? (level - 3) * 20 : 0;

                            return (
                                <p
                                    key={index}
                                    className='font-montserrat text-xs font-semibold px-2 py-2 hover:text-blue'
                                    css={css`
                                        padding-left: calc(${(indent + 8) / 16}rem);
                                        color: ${activeId === heading.slug ? '#0f26aa' : 'inherit'};
                                        font-weight: ${activeId === heading.slug && activeId !== '' ? '700' : '500'};
                                        border-left: 0.063rem solid
                                            ${activeId === heading.slug ? '#0f26aa' : 'rgba(0, 0, 0, 0.1)'};
                                        &:hover {
                                            border-left: 0.063rem solid #0f26aa;
                                        }
                                    `}
                                >
                                    <ScrollLink
                                        className='cursor-pointer'
                                        to={`${heading.slug}`}
                                        smooth={true}
                                        duration={500}
                                        offset={-100}
                                    >
                                        {displayText}
                                    </ScrollLink>
                                </p>
                            );
                        })}
                    </div>
                )}
                <div
                    className='max-w-4xl xl:max-w-7xl mx-auto xl:mx-0 px-8'
                    ref={scrollRef}
                    css={css`
                        height: 100%;
                        width: 100%;
                        overflow: auto;
                    `}
                >
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
                                },
                                h1: headingRenderer,
                                h2: headingRenderer,
                                h3: headingRenderer,
                                h4: headingRenderer,
                                h5: headingRenderer,
                                h6: headingRenderer
                            }}
                        >
                            {data.rawMarkdownBody}
                        </ReactMarkdown>
                    </div>
                </div>
                {!preview && (
                    <FurtherReadingSection
                        alert={alert}
                        onChange={onChange}
                        emailInput={emailInput}
                        onKeyDown={onKeyDown}
                        onSubmit={onSubmit}
                        data={data}
                        dataWhitepaper={dataWhitepaper}
                        blog={true}
                    />
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
            {!preview &&
                categories.includes('CSPM') &&
                categories.includes('Compliance') &&
                categories.indexOf('Compliance') < categories.indexOf('CSPM') && (
                    <ComplianceLinks dataCompliceToolbox={dataCompliceToolbox} />
                )}
            {!preview &&
                categories.includes('CSPM') &&
                categories.includes('Compliance') &&
                categories.indexOf('CSPM') < categories.indexOf('Compliance') && (
                    <CSPMLinks dataBlueBird={dataBlueBird} />
                )}{' '}
            {!preview && categories.includes('CSPM') && !categories.includes('Compliance') && (
                <CSPMLinks dataBlueBird={dataBlueBird} />
            )}
            {!preview && !categories.includes('CSPM') && categories.includes('Compliance') && (
                <ComplianceLinks dataCompliceToolbox={dataCompliceToolbox} />
            )}
            {!preview && !categories.includes('Compliance') && !categories.includes('CSPM') && (
                <OtherLinks dataBlueBird={dataBlueBird} />
            )}
        </div>
    );
}
