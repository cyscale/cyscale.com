import React from 'react';
import Hero from './Hero';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import CloudComplianceSection from './CloudComplianceSection';
import Cta from './Cta';

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
                                    subtitle={section.rowSubtitle}
                                    image={section.rowImage.childImageSharp.gatsbyImageData}
                                    alt={section.rowAlt}
                                    markdown={section.rowMarkdown}
                                    backgroundColor={section.rowBackground}
                                />
                            );
                        }
                        if (section?.rowImagePosition === 'right') {
                            return (
                                <RightSection
                                    key={index}
                                    subtitle={section.rowSubtitle}
                                    image={section.rowImage.childImageSharp.gatsbyImageData}
                                    alt={section.rowAlt}
                                    markdown={section.rowMarkdown}
                                    backgroundColor={section.rowBackground}
                                />
                            );
                        }
                        return null;
                    });
                }
                if (item === 'cloudComplianceSection') {
                    return <CloudComplianceSection key={index} />;
                }
                if (item === 'cta') {
                    return <Cta markdown={data?.cta?.ctaMarkdown} key={index} />;
                }
                return null;
            })}
        </div>
    );
};

export default Page;
