import React, { useState, useEffect, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import PulsingCircles from './PulsingCircles';
import { css } from 'twin.macro';
import { isSafari } from '../../common/utils';
import useMediaQuery from '../../hooks/useMediaQuery';

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

    const initialScale = 0.8505;
    const initialRotateX = 11.96;

    const [scale, setScale] = useState(initialScale);
    const [rotateX, setRotateX] = useState(initialRotateX);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const imageRef = useRef();
    const isMobile = useMediaQuery('(max-width: 1280px)');

    useEffect(() => {
        if (isSafari || isMobile) {
            setAnimationCompleted(true);
            setScale(1);
            setRotateX(0);
            return;
        }

        const handleScroll = () => {
            if (animationCompleted) return;

            const boundingClientRect = imageRef.current.getBoundingClientRect();
            let visiblePercentage = Math.max(
                0,
                Math.min(1, (window.innerHeight - boundingClientRect.top) / window.innerHeight)
            );

            const animationSpeedMultiplier = 1.5;
            visiblePercentage = Math.min(1, visiblePercentage * animationSpeedMultiplier);

            const newScale = Math.min(1, initialScale + (1 - initialScale) * visiblePercentage);
            const newRotateX = initialRotateX * (1 - visiblePercentage);

            setScale(newScale);
            setRotateX(newRotateX);

            if (newScale === 1) {
                setAnimationCompleted(true);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [animationCompleted]);

    const transformStyle = `scale(${scale}) rotateX(${rotateX}deg)`;

    return (
        <div
            ref={imageRef}
            css={css`
                perspective: 1000px;
                -webkit-perspective: 1000px;
                perspective-origin: center;
                -webkit-perspective-origin: center;
                position: relative;
            `}
        >
            <div
                css={css`
                    will-change: transform;
                    transform: ${transformStyle};
                    transform-style: preserve-3d;
                    transition: transform 0.7s ease-out;
                    position: relative;
                `}
            >
                <GatsbyImage
                    className='w-full h-auto rounded-2xl shadow-2xl'
                    image={data.heroImage.childImageSharp.gatsbyImageData}
                    alt='Interactive Cyscale Dashboard'
                    css={css`
                        border: 1px solid #f0f1f2;
                    `}
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
                <PulsingCircles
                    tooltipText={
                        <>
                            <span className='text-base px-1 mb-2 inline-block'>Attack path graph</span>
                            <span className='px-1 inline-block'>
                                Visual representation of attack paths and vulnerable assets
                            </span>
                        </>
                    }
                    wrapperStyle={css`
                        position: absolute;
                        top: 24%;
                        right: 36%;
                        padding: 0.625rem;
                    `}
                />
                <PulsingCircles
                    tooltipText={
                        <>
                            <span className='text-base px-1 mb-2 inline-block'>High-risk misconfigurations</span>
                            <span className='px-1 inline-block'>
                                Automatically fix high-risk misconfigurations affecting multiple assets. Fix these and
                                fix 80% of your issues!
                            </span>
                        </>
                    }
                    position='right'
                    wrapperStyle={css`
                        position: absolute;
                        top: 25%;
                        right: 8%;
                        padding: 0.625rem;
                    `}
                />
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
                    wrapperStyle={css`
                        position: absolute;
                        top: 65%;
                        left: 38%;
                        z-index: 100;
                        padding: 0.625rem;
                    `}
                    useDebounce={true}
                />
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
                    wrapperStyle={css`
                        position: absolute;
                        top: 65%;
                        right: 8%;
                        z-index: 100;
                        padding: 0.625rem;
                    `}
                    useDebounce={true}
                />
            </div>
        </div>
    );
};

export default TiltImage;
