import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
function withImageData(WrappedComponent) {
    return (props) => (
        <StaticQuery
            query={graphql`
                query TeamQuery {
                    ovidiu: file(relativePath: { eq: "ovidiu.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    leaderOvidiu: file(relativePath: { eq: "leader-ovidiu.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    leaderAndy: file(relativePath: { eq: "andy.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    leaderManuela: file(relativePath: { eq: "leader-manuela.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    ovidiuAndManuela: file(relativePath: { eq: "ovidiu-and-manuela.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 720, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    andreiS: file(relativePath: { eq: "andrei-s.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    andreiM: file(relativePath: { eq: "andrei-m.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    virginia: file(relativePath: { eq: "virginia.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    manuela: file(relativePath: { eq: "manuela.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    andreip: file(relativePath: { eq: "andreip.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    gabriel: file(relativePath: { eq: "gabriel.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    mihaiB: file(relativePath: { eq: "mihai-b.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    mihaiM: file(relativePath: { eq: "mihai-m.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    levi: file(relativePath: { eq: "levi.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 256, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    notion: file(relativePath: { eq: "notion.jpg" }) {
                        childImageSharp {
                            fixed(height: 102, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    seedcamp: file(relativePath: { eq: "seedcamp.jpg" }) {
                        childImageSharp {
                            fixed(height: 102, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    gapminder: file(relativePath: { eq: "gapminder.jpg" }) {
                        childImageSharp {
                            fixed(height: 102, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                    seedblink: file(relativePath: { eq: "seedblink.jpg" }) {
                        childImageSharp {
                            fixed(height: 102, quality: 95) {
                                ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                        }
                    }
                }
            `}
            render={(data) => <WrappedComponent {...props} imageData={data} />}
        />
    );
}

export const Ovidiu = withImageData((props) => <Img fluid={props.imageData.ovidiu.childImageSharp.fluid} {...props} />);

export const LeaderOvidiu = withImageData((props) => (
    <Img fluid={props.imageData.leaderOvidiu.childImageSharp.fluid} {...props} />
));
export const LeaderAndy = withImageData((props) => (
    <Img fluid={props.imageData.leaderAndy.childImageSharp.fluid} {...props} />
));
export const LeaderManuela = withImageData((props) => (
    <Img fluid={props.imageData.leaderManuela.childImageSharp.fluid} {...props} />
));
export const OvidiuAndManuela = withImageData((props) => (
    <Img
        fluid={props.imageData.ovidiuAndManuela.childImageSharp.fluid}
        alt='Manuela and Ovidiu leaders of Cyscale'
        {...props}
    />
));
export const AndreiM = withImageData((props) => (
    <Img fluid={props.imageData.andreiM.childImageSharp.fluid} {...props} />
));
export const AndreiS = withImageData((props) => (
    <Img fluid={props.imageData.andreiS.childImageSharp.fluid} {...props} />
));
export const Manuela = withImageData((props) => (
    <Img fluid={props.imageData.manuela.childImageSharp.fluid} {...props} />
));
export const Gabriel = withImageData((props) => (
    <Img fluid={props.imageData.gabriel.childImageSharp.fluid} {...props} />
));
export const AndreiP = withImageData((props) => (
    <Img fluid={props.imageData.andreip.childImageSharp.fluid} {...props} />
));
export const MihaiM = withImageData((props) => <Img fluid={props.imageData.mihaiM.childImageSharp.fluid} {...props} />);
export const MihaiB = withImageData((props) => <Img fluid={props.imageData.mihaiB.childImageSharp.fluid} {...props} />);
export const Levi = withImageData((props) => <Img fluid={props.imageData.levi.childImageSharp.fluid} {...props} />);
export const Virginia = withImageData((props) => (
    <Img fluid={props.imageData.virginia.childImageSharp.fluid} {...props} />
));
export const Notion = withImageData((props) => (
    <Img fixed={props.imageData.notion.childImageSharp.fixed} alt='Notion Capital' {...props} />
));
export const Seedcamp = withImageData((props) => (
    <Img fixed={props.imageData.seedcamp.childImageSharp.fixed} alt='Seedcamp' {...props} />
));
export const Gapminder = withImageData((props) => (
    <Img fixed={props.imageData.gapminder.childImageSharp.fixed} alt='Gapminder' {...props} />
));
export const Seedblink = withImageData((props) => (
    <Img fixed={props.imageData.seedblink.childImageSharp.fixed} alt='Seedblink' {...props} />
));

export const OvidiuAndManuelaBackground = withImageData((props) => (
    <BackgroundImage
        Tag='div'
        className={props.className}
        style={props.style}
        fluid={props.imageData.ovidiuAndManuela.childImageSharp.fluid}
        alt='Manuela and Ovidiu leaders of Cyscale'
    >
        {props.children}
    </BackgroundImage>
));
