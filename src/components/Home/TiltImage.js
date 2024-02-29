import React, { useState, useEffect, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import PulsingCircles from './PulsingCircles';
import { css } from 'twin.macro';
import { isSafari } from '../../common/utils';

const TiltImage = () => {
    const data = useStaticQuery(graphql`
        query TiltImageQuery {
            heroImage: file(relativePath: { eq: "new-dashboard.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);

    const [scrollY, setScrollY] = useState(0);
    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [animationRan, setAnimationRan] = useState(false);
    const requestRef = useRef();

    useEffect(() => {
        if (isSafari) {
            setAnimationsEnabled(false);
        }

        const animate = () => {
            if (!animationRan) {
                requestRef.current = requestAnimationFrame(animate);
                handleScroll();
            }
        };

        if (!animationRan) {
            requestRef.current = requestAnimationFrame(animate);
        }

        return () => cancelAnimationFrame(requestRef.current);
    }, [animationRan]);

    const handleScroll = () => {
        const newScrollY = window.scrollY;
        setScrollY(newScrollY);
        if (newScrollY >= scrollThreshold && !animationRan) {
            setAnimationRan(true);
            cancelAnimationFrame(requestRef.current);
        }
    };

    const scrollThreshold = 1000;
    const progress = Math.min(1, scrollY / scrollThreshold);

    const scale = animationsEnabled ? 0.5 + 0.5 * progress : 1;
    const rotateX = animationsEnabled ? 90 * (1 - progress) : 0;

    return (
        <div
            css={css`
                perspective: ${animationsEnabled ? '1000px' : 'none'};
                -webkit-perspective: ${animationsEnabled ? '1000px' : 'none'};
                perspective-origin: 50%;
                -webkit-perspective-origin: 50%;
                position: relative;
            `}
        >
            <div
                css={css`
                    will-change: transform;
                    transform: scale(${scale}) rotateX(${rotateX}deg);
                    transform-style: preserve-3d;
                    transition: ${animationsEnabled ? 'transform 0.7s ease-out' : 'none'};
                    position: relative;
                `}
            >
                <GatsbyImage
                    className='w-full h-auto rounded-2xl shadow-2xl'
                    image={data.heroImage.childImageSharp.gatsbyImageData}
                    alt='Interactive Cyscale Dashboard'
                />
                <div
                    css={css`
                        position: absolute;
                        top: 12%;
                        left: 30%;
                    `}
                >
                    <PulsingCircles
                        tooltipText={
                            <>
                                <span className='text-base px-1 mb-2 inline-block'>Security score</span>
                                <span className='px-1 inline-block'>
                                    At-a-glance understanding of your current cloud security posture
                                </span>
                            </>
                        }
                    />
                </div>
                <div
                    css={css`
                        position: absolute;
                        top: 24%;
                        right: 36%;
                    `}
                >
                    <PulsingCircles
                        tooltipText={
                            <>
                                <span className='text-base px-1 mb-2 inline-block'>Attack path graph</span>
                                <span className='px-1 inline-block'>
                                    Visual representation of attack paths and vulnerable assets
                                </span>
                            </>
                        }
                    />
                </div>
                <div
                    css={css`
                        position: absolute;
                        top: 25%;
                        right: 8%;
                    `}
                >
                    <PulsingCircles
                        tooltipText={
                            <>
                                <span className='text-base px-1 mb-2 inline-block'>High-risk misconfigurations</span>
                                <span className='px-1 inline-block'>
                                    Automatically fix high-risk misconfigurations affecting multiple assets. Fix these
                                    and fix 80% of your issues!
                                </span>
                            </>
                        }
                        position='right'
                    />
                </div>
                <div
                    css={css`
                        position: absolute;
                        top: 65%;
                        left: 38%;
                    `}
                >
                    <PulsingCircles
                        tooltipText={
                            <>
                                <span className='text-base px-1 mb-2 inline-block'>Compliance</span>
                                <span className='px-1 inline-block'>
                                    Out of the box support for a wide range of compliance frameworks and customizable
                                    policies
                                </span>
                            </>
                        }
                    />
                </div>
                <div
                    css={css`
                        position: absolute;
                        top: 65%;
                        right: 8%;
                    `}
                >
                    <PulsingCircles
                        tooltipText={
                            <>
                                <span className='text-base px-1 mb-2 inline-block'>Public resources</span>
                                <span className='px-1 inline-block'>
                                    Keep track of publicly accessible resources. Some are supposed to be public. Some
                                    aren’t!
                                </span>
                            </>
                        }
                        position='right'
                    />
                </div>
            </div>
        </div>
    );
};

export default TiltImage;
