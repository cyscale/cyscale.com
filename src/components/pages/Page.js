import React from 'react';
import Hero from './Hero';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import CloudComplianceSection from './CloudComplianceSection';
import Cta from './Cta';
import AlignTeams from './AlignTeams';
import Features from './Features';

const Page = ({ data }) => {
    return (
        <div>
            {data?.sections?.map((item, index) => {
                if (item === 'hero') {
                    return (
                        <Hero
                            heroBackground={data.hero.heroBackground}
                            heroImage={data.hero.heroImage.childImageSharp.gatsbyImageData}
                            heroImageAlt={data.hero.heroImageAlt}
                            title={data.hero.heroTitle}
                            customComponents={data.hero.customComponents}
                            markdown={data.hero.heroMarkdown}
                            key={index}
                        />
                    );
                }
                if (item === 'textImageRow') {
                    return data?.textImageRow?.map((section, index) => {
                        if (section?.rowImagePosition === 'left') {
                            return (
                                <LeftSection
                                    key={index}
                                    rowStartGridCols={section.rowStartGridCols}
                                    rowEndGridCols={section.rowEndGridCols}
                                    subtitle={section.rowSubtitle}
                                    image={section.rowImage.childImageSharp.gatsbyImageData}
                                    alt={section.rowAlt}
                                    customComponents={section.customComponents}
                                    markdown={section.rowMarkdown}
                                    backgroundColor={section.rowBackground}
                                />
                            );
                        }
                        if (section?.rowImagePosition === 'right') {
                            return (
                                <RightSection
                                    key={index}
                                    rowStartGridCols={section.rowStartGridCols}
                                    rowEndGridCols={section.rowEndGridCols}
                                    subtitle={section.rowSubtitle}
                                    image={section.rowImage.childImageSharp.gatsbyImageData}
                                    alt={section.rowAlt}
                                    customComponents={section.customComponents}
                                    markdown={section.rowMarkdown}
                                    backgroundColor={section.rowBackground}
                                />
                            );
                        }
                        return null;
                    });
                }
                if (item === 'secondTextImageRow') {
                    return data?.secondTextImageRow?.map((section, index) => {
                        if (section?.rowImagePosition === 'left') {
                            return (
                                <LeftSection
                                    key={index}
                                    rowStartGridCols={section.rowStartGridCols}
                                    rowEndGridCols={section.rowEndGridCols}
                                    subtitle={section.rowSubtitle}
                                    image={section.rowImage.childImageSharp.gatsbyImageData}
                                    alt={section.rowAlt}
                                    customComponents={section.customComponents}
                                    markdown={section.rowMarkdown}
                                    backgroundColor={section.rowBackground}
                                />
                            );
                        }
                        if (section?.rowImagePosition === 'right') {
                            return (
                                <RightSection
                                    key={index}
                                    rowStartGridCols={section.rowStartGridCols}
                                    rowEndGridCols={section.rowEndGridCols}
                                    subtitle={section.rowSubtitle}
                                    image={section.rowImage.childImageSharp.gatsbyImageData}
                                    alt={section.rowAlt}
                                    customComponents={section.customComponents}
                                    markdown={section.rowMarkdown}
                                    backgroundColor={section.rowBackground}
                                />
                            );
                        }
                        return null;
                    });
                }
                if (item === 'featuresSection') {
                    return <Features features={data?.featuresSection} />;
                }
                if (item === 'alignTeamsSection') {
                    return <AlignTeams />;
                }
                if (item === 'cloudComplianceSection') {
                    return <CloudComplianceSection key={index} />;
                }
                if (item === 'ctaSection') {
                    return <Cta markdown={data?.ctaSection?.ctaMarkdown} key={index} />;
                }
                return null;
            })}
        </div>
    );
};

export default Page;
