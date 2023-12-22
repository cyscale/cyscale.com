import React, { useState } from 'react';
import { Container } from '../atoms/Containers';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';
import { CSSTransition } from 'react-transition-group';
import VideoCyscale from '../campaigns/cspm-solution/CyscaleVideo';
import { graphql, useStaticQuery } from 'gatsby';

const customFontSize = css`
    font-size: 1.75rem;

    @media (max-width: 1024px) {
        font-size: 1.625rem;
    }
`;

const TourVideo = () => {
    const [modal, setModal] = useState(false);

    const data = useStaticQuery(graphql`
        query TourVideoQuery {
            videoThumbnail: file(relativePath: { eq: "hero-image-homepage.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1920, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <div className='pt-24 pb-24 lg:pt-32 lg:pb-0'>
            <Container>
                <h2 className='text-center text-blue font-montserrat font-bold' css={customFontSize}>
                    Take the 2 minute tour
                </h2>
                <div
                    className='max-w-2xl mx-auto mt-8'
                    onClick={() => {
                        setModal(!modal);
                    }}
                    onKeyPress={() => {}}
                    tabIndex='0'
                    role='button'
                >
                    <GatsbyImage
                        image={data.videoThumbnail.childImageSharp.gatsbyImageData}
                        css={css`
                            &:hover {
                                scale: 1.025;
                            }
                        `}
                        className='rounded-xl'
                        alt='Video Thumbnail'
                    />
                </div>
                {modal && <div className='modal-overlay'></div>}
                <CSSTransition in={modal} timeout={300} classNames='video' unmountOnExit>
                    <VideoCyscale
                        setModal={setModal}
                        videoUrl='https://d3n52qn7viv754.cloudfront.net/videos/Cyscale-explainer-video-2023-12-Dec.mp4'
                        greyCloseButton
                    />
                </CSSTransition>
            </Container>
        </div>
    );
};

export default TourVideo;
