import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

function withImageData(WrappedComponent) {
    return (props) => (
        <StaticQuery
            query={graphql`
                query TeamQuery {
                    ovidiu: file(relativePath: { eq: "ovidiu.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    leaderOvidiu: file(relativePath: { eq: "leader-ovidiu.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 500, layout: CONSTRAINED)
                        }
                    }
                    leaderAndy: file(relativePath: { eq: "andy.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 500, layout: CONSTRAINED)
                        }
                    }
                    leaderManuela: file(relativePath: { eq: "leader-manuela.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 500, layout: CONSTRAINED)
                        }
                    }
                    ovidiuAndManuela: file(relativePath: { eq: "ovidiu-and-manuela.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 720, layout: CONSTRAINED)
                        }
                    }
                    andreiS: file(relativePath: { eq: "andrei-s.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    andreiM: file(relativePath: { eq: "andrei-m.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    manuela: file(relativePath: { eq: "manuela.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    andreip: file(relativePath: { eq: "andreip.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    gabriel: file(relativePath: { eq: "gabriel.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    sabrina: file(relativePath: { eq: "sabrina.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    mihaiB: file(relativePath: { eq: "mihai-b.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    mihaiM: file(relativePath: { eq: "mihai-m.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    levi: file(relativePath: { eq: "levi.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 256, layout: CONSTRAINED)
                        }
                    }
                    notion: file(relativePath: { eq: "notion.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 102, layout: CONSTRAINED)
                        }
                    }
                    seedcamp: file(relativePath: { eq: "seedcamp.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 102, layout: CONSTRAINED)
                        }
                    }
                    gapminder: file(relativePath: { eq: "gapminder.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 102, layout: CONSTRAINED)
                        }
                    }
                    seedblink: file(relativePath: { eq: "seedblink.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 102, layout: CONSTRAINED)
                        }
                    }
                    petru: file(relativePath: { eq: "petru.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 256, layout: CONSTRAINED)
                        }
                    }
                    mihnea: file(relativePath: { eq: "mihnea.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 256, layout: CONSTRAINED)
                        }
                    }
                    norbert: file(relativePath: { eq: "norbert.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 256, layout: CONSTRAINED)
                        }
                    }
                    auras: file(relativePath: { eq: "auras.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 256, layout: CONSTRAINED)
                        }
                    }
                    darius: file(relativePath: { eq: "darius.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 256, layout: CONSTRAINED)
                        }
                    }
                    barry: file(relativePath: { eq: "barry.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 256, layout: CONSTRAINED)
                        }
                    }
                    simona: file(relativePath: { eq: "simona.webp" }) {
                        childImageSharp {
                            gatsbyImageData(height: 256, layout: CONSTRAINED)
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
export const Petru = withImageData((props) => (
    <Img image={props.imageData.petru.childImageSharp.gatsbyImageData} {...props} />
));
export const Mihnea = withImageData((props) => (
    <Img image={props.imageData.mihnea.childImageSharp.gatsbyImageData} {...props} />
));
export const Norbert = withImageData((props) => (
    <Img image={props.imageData.norbert.childImageSharp.gatsbyImageData} {...props} />
));

export const Auras = withImageData((props) => (
    <Img image={props.imageData.auras.childImageSharp.gatsbyImageData} {...props} />
));

export const Darius = withImageData((props) => (
    <Img image={props.imageData.darius.childImageSharp.gatsbyImageData} {...props} />
));

export const Barry = withImageData((props) => (
    <Img image={props.imageData.barry.childImageSharp.gatsbyImageData} {...props} />
));

export const Simona = withImageData((props) => (
    <Img image={props.imageData.simona.childImageSharp.gatsbyImageData} {...props} />
));
