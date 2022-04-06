import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

function withImageData(WrappedComponent) {
    return (props) => (
        <StaticQuery
            query={graphql`
                query TeamQuery {
                    ovidiu: file(relativePath: { eq: "ovidiu.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    leaderOvidiu: file(relativePath: { eq: "leader-ovidiu.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 500, layout: CONSTRAINED)
                        }
                    }
                    leaderAndy: file(relativePath: { eq: "andy.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 500, layout: CONSTRAINED)
                        }
                    }
                    leaderManuela: file(relativePath: { eq: "leader-manuela.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 500, layout: CONSTRAINED)
                        }
                    }
                    ovidiuAndManuela: file(relativePath: { eq: "ovidiu-and-manuela.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 720, layout: CONSTRAINED)
                        }
                    }
                    andreiS: file(relativePath: { eq: "andrei-s.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    andreiM: file(relativePath: { eq: "andrei-m.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    virginia: file(relativePath: { eq: "virginia.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    manuela: file(relativePath: { eq: "manuela.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    andreip: file(relativePath: { eq: "andreip.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    gabriel: file(relativePath: { eq: "gabriel.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    sabrina: file(relativePath: { eq: "sabrina.png" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    mihaiB: file(relativePath: { eq: "mihai-b.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    mihaiM: file(relativePath: { eq: "mihai-m.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    levi: file(relativePath: { eq: "levi.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    notion: file(relativePath: { eq: "notion.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(height: 102, layout: CONSTRAINED)
                        }
                    }
                    seedcamp: file(relativePath: { eq: "seedcamp.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(height: 102, layout: CONSTRAINED)
                        }
                    }
                    gapminder: file(relativePath: { eq: "gapminder.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(height: 102, layout: CONSTRAINED)
                        }
                    }
                    seedblink: file(relativePath: { eq: "seedblink.jpg" }) {
                        childImageSharp {
                            gatsbyImageData(height: 102, layout: CONSTRAINED)
                        }
                    }
                }
            `}
            render={(data) => <WrappedComponent {...props} imageData={data} />}
        />
    );
}

export const Ovidiu = withImageData((props) => (
    <Img image={props.imageData.ovidiu.childImageSharp.gatsbyImageData} {...props} />
));

export const LeaderOvidiu = withImageData((props) => (
    <Img image={props.imageData.leaderOvidiu.childImageSharp.gatsbyImageData} {...props} />
));
export const LeaderAndy = withImageData((props) => (
    <Img image={props.imageData.leaderAndy.childImageSharp.gatsbyImageData} {...props} />
));
export const LeaderManuela = withImageData((props) => (
    <Img image={props.imageData.leaderManuela.childImageSharp.gatsbyImageData} {...props} />
));
export const OvidiuAndManuela = withImageData((props) => (
    <Img
        image={props.imageData.ovidiuAndManuela.childImageSharp.gatsbyImageData}
        alt='Manuela and Ovidiu leaders of Cyscale'
        {...props}
    />
));
export const AndreiM = withImageData((props) => (
    <Img image={props.imageData.andreiM.childImageSharp.gatsbyImageData} {...props} />
));
export const AndreiS = withImageData((props) => (
    <Img image={props.imageData.andreiS.childImageSharp.gatsbyImageData} {...props} />
));
export const Manuela = withImageData((props) => (
    <Img image={props.imageData.manuela.childImageSharp.gatsbyImageData} {...props} />
));
export const Gabriel = withImageData((props) => (
    <Img image={props.imageData.gabriel.childImageSharp.gatsbyImageData} {...props} />
));
export const AndreiP = withImageData((props) => (
    <Img image={props.imageData.andreip.childImageSharp.gatsbyImageData} {...props} />
));
export const Sabrina = withImageData((props) => (
    <Img image={props.imageData.sabrina.childImageSharp.gatsbyImageData} {...props} />
));
export const MihaiM = withImageData((props) => (
    <Img image={props.imageData.mihaiM.childImageSharp.gatsbyImageData} {...props} />
));
export const MihaiB = withImageData((props) => (
    <Img image={props.imageData.mihaiB.childImageSharp.gatsbyImageData} {...props} />
));
export const Levi = withImageData((props) => (
    <Img image={props.imageData.levi.childImageSharp.gatsbyImageData} {...props} />
));
export const Virginia = withImageData((props) => (
    <Img image={props.imageData.virginia.childImageSharp.gatsbyImageData} {...props} />
));
export const Notion = withImageData((props) => (
    <Img image={props.imageData.notion.childImageSharp.gatsbyImageData} alt='Notion Capital' {...props} />
));
export const Seedcamp = withImageData((props) => (
    <Img image={props.imageData.seedcamp.childImageSharp.gatsbyImageData} alt='Seedcamp' {...props} />
));
export const Gapminder = withImageData((props) => (
    <Img image={props.imageData.gapminder.childImageSharp.gatsbyImageData} alt='Gapminder' {...props} />
));
export const Seedblink = withImageData((props) => (
    <Img image={props.imageData.seedblink.childImageSharp.gatsbyImageData} alt='Seedblink' {...props} />
));

export const OvidiuAndManuelaBackground = withImageData((props) => (
    <BackgroundImage
        Tag='div'
        className={props.className}
        style={props.style}
        image={props.imageData.ovidiuAndManuela.childImageSharp.gatsbyImageData}
        alt='Manuela and Ovidiu leaders of Cyscale'
    >
        {props.children}
    </BackgroundImage>
));
