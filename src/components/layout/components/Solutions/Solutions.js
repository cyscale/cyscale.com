import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import {
    caretMenuWhiteStyle,
    fontNavLinkStyle,
    montserratFontStyle,
    paddingLeftStyle,
    sectionTitleColorStyle
} from '../../style';
import { solutions } from '../../nav';
import { css } from 'twin.macro';
import { isAnimatedNavbarPage } from '../../../../common/utils';
import { GatsbyImage } from 'gatsby-plugin-image';

const descriptionMaxWidth = css`
    max-width: 13.25rem;
`;

const caretSolutions = (isAnimatedNavbarPage) => css`
    :before {
        ${caretMenuWhiteStyle};
        left: ${isAnimatedNavbarPage ? '33.5rem' : '35.9rem'};
    }
`;

const Solutions = ({ pathname, activeLinks, setActiveLinks, kModal, setKModal, platformModal, setPlatformModal }) => {
    const data = useStaticQuery(graphql`
        query SolutionsQuery {
            k8s: file(relativePath: { eq: "k8s-thumbnail-solutions.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 261, layout: CONSTRAINED)
                }
            }
            csp: file(relativePath: { eq: "csp-thumbnail-solutions.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 261, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <div
            className='w-full grid grid-cols-12 gap-2 ml-auto shadow-2xl bg-white'
            style={{ width: '76rem' }}
            css={caretSolutions(isAnimatedNavbarPage(pathname))}
            onMouseEnter={() => setActiveLinks({ ...activeLinks, solutions: true })}
            onMouseLeave={() => setActiveLinks({ ...activeLinks, solutions: false })}
            tabIndex='-1'
            onClick={() => {}}
            onKeyPress={() => {}}
            role='presentation'
        >
            <div className='col-span-3 bg-selago p-6'>
                <h1 css={montserratFontStyle} className='text-2xl font-semibold mb-3'>
                    Product Tours
                </h1>
                <p className='mb-2 text-blue text-base font-bold'>Cloud Security Platform</p>
                <p className='mb-2 text-sm'>
                    A single-pane-of-glass view and security for AWS, Azure, Google Cloud, Kubernetes, Okta, containers,
                    and more
                </p>
                <div
                    onClick={() => {
                        setPlatformModal(!platformModal);
                    }}
                    onKeyPress={() => {}}
                    tabIndex='0'
                    role='button'
                >
                    <GatsbyImage
                        image={data.csp.childImageSharp.gatsbyImageData}
                        alt='Cloud Security Platform Thumbnail Product Tour'
                        className='hover:cursor-pointer'
                        css={css`
                            &:hover {
                                scale: 1.08;
                            }
                        `}
                    />
                </div>
                <p className='mb-2 mt-4 text-blue text-base font-bold'>Kubernetes Security</p>
                <p className='mb-2 text-sm'>Understand at a glance the security posture for your K8s clusters</p>
                <div
                    onClick={() => {
                        setKModal(!kModal);
                    }}
                    onKeyPress={() => {}}
                    tabIndex='0'
                    role='button'
                >
                    <GatsbyImage
                        image={data.k8s.childImageSharp.gatsbyImageData}
                        alt='Kubernetes Security Thumbnail Product Tour'
                        className='hover:cursor-pointer'
                        css={css`
                            &:hover {
                                scale: 1.08;
                            }
                        `}
                    />
                </div>
            </div>
            <div className='col-span-9'>
                <div className='p-6 grid grid-cols-12 gap-2'>
                    {solutions.map((solution, key) => {
                        return (
                            <div className='col-span-4' key={key}>
                                <img src={solution.icon} className='mb-1' alt='' css={paddingLeftStyle} />
                                <p
                                    className='mb-2 text-base font-light uppercase'
                                    css={[sectionTitleColorStyle, paddingLeftStyle]}
                                >
                                    {solution.title}
                                </p>
                                <p
                                    className='text-sm mb-4 text-grey2 max-w-xs'
                                    css={[descriptionMaxWidth, paddingLeftStyle]}
                                >
                                    {solution.description}
                                </p>
                                {solution.links.map((link, key) => {
                                    if (solution.title === 'Environments' || solution.title === 'Compliance') {
                                        return (
                                            <div className='mb-2' key={key}>
                                                <Link
                                                    className='p-2 hover:font-medium flex items-center'
                                                    to={link.link}
                                                    css={fontNavLinkStyle}
                                                    activeClassName='active'
                                                >
                                                    <img
                                                        src={link.icon}
                                                        width={32}
                                                        css={css`
                                                            height: 24px;
                                                        `}
                                                        alt=''
                                                    />
                                                    <span className='ml-2'>{link.text}</span>
                                                </Link>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className='mb-2' key={key}>
                                                <Link
                                                    className='px-2 pt-2 pb-3 hover:font-medium flex items-center'
                                                    to={link.link}
                                                    css={fontNavLinkStyle}
                                                    activeClassName='active'
                                                >
                                                    {link.text}
                                                </Link>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
