import React, { useRef, useState } from 'react';
import { Container } from '../atoms/Containers';
import { Link } from 'gatsby';
import { css } from 'twin.macro';
import RightArrow from '../sharedComponent/RightArrow';
import Carousel from './Carousel';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useMediaQuery from '../../hooks/useMediaQuery';

const blogSectionStyle = css`
    background-color: #f5f9ff;
    height: 55rem;
    @media (min-width: 1024px) {
        height: 44rem;
    }
`;

const sectionSubtitleColor = css`
    color: #38aff1;
`;

const titleSection = css`
    font-size: 2rem;
`;

const sectionTextColor = css`
    color: #0d1d3d;
`;

const BlogSection = () => {
    const [isHover, setIsHover] = useState(false);
    const containerRef = useRef(null);

    const isDesktop = useMediaQuery('(max-width: 1024px)');

    const scrollLeft = () => {
        containerRef.current.scrollLeft -= isDesktop ? 320 : 420;
    };
    const scrollRight = () => {
        containerRef.current.scrollLeft += isDesktop ? 320 : 420;
    };

    return (
        <div css={blogSectionStyle} className='py-16 relative'>
            <Container>
                <div className='grid grid-cols-12 gap-x-5 mt-12'>
                    <div className='col-span-12 lg:col-span-4  mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                        {' '}
                        <p className='font-montserrat text-base font-bold' css={sectionSubtitleColor}>
                            LATEST ARTICLES
                        </p>{' '}
                        <h2 className='font-montserrat text-blue font-bold mt-3' css={titleSection}>
                            What we’re up to
                        </h2>
                        <p className='text-base font-hind mt-5' css={sectionTextColor}>
                            Cyscale is an agentless CNAPP solution that
                            <br className='hidden lg:block' /> helps your organization map, secure and
                            <br className='hidden lg:block' />
                            monitor cloud assets across multiple public cloud providers.
                        </p>
                        <Link
                            to={'/blog/'}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                            className='font-hind text-base font-bold mt-6 hover:underline block'
                            css={css`
                                color: #0f26aa;
                                &:hover {
                                    color: #0b175a;
                                }
                            `}
                        >
                            <RightArrow fillColor={isHover ? '#0b175a' : '#0F26AA'} marginTop={'-0.1rem'} />
                            Read more about cloud security
                        </Link>
                    </div>
                    <div
                        className='col-span-12 lg:col-span-8'
                        css={css`
                            overflow: hidden;
                        `}
                    >
                        <Carousel ref={containerRef} />
                    </div>
                    <div className='col-span-12 w-full h-72 lg:h-80 relative'>
                        <div className='absolute -bottom-56 lg:-bottom-2 right-0'>
                            <button onClick={scrollLeft} className='p-2 m-2 rounded-full bg-white'>
                                <FiChevronLeft />
                            </button>
                            <button onClick={scrollRight} className='p-2 m-2 rounded-full bg-white'>
                                <FiChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogSection;
