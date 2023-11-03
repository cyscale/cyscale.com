import React, { useEffect } from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Helmet } from 'react-helmet';
import { Container, Row } from '../../components/atoms/Containers';
import useHSFormLoaded from '../../hooks/useHSFormLoaded';
import classnames from 'classnames';
import LoaderContainer from '../../components/Loader/LoaderContainer/LoaderContainer';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const TheCompleteGuideToCloudCompliance = ({ location }) => {
    const { loadingForm } = useHSFormLoaded();

    const data = useStaticQuery(graphql`
        query CloudCompliace {
            standards: file(relativePath: { eq: "cloud-compliance-standards.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms?.create({
                    portalId: '5413427',
                    formId: '3a35898d-9962-4b6a-9fc0-90ebd3362875',
                    target: '#cloud-compliance-form'
                });
            }
        }, 600);
    }, []);

    return (
        <>
            <Layout
                location={location}
                pageName='CloudComplianceWhitepaper'
                title='[White Paper] The Complete Guide to Cloud Compliance in 2023 - Cyscale'
                description='This whitepaper presents cloud trends for 2023 along with popular compliance frameworks such as ISO27001, GDPR, HIPAA, PCI-DSS and SOC2.'
            >
                <Helmet>
                    <script charset='utf-8' type='text/javascript' src='//js.hsforms.net/forms/shell.js'></script>
                </Helmet>
                <div className='hidden' data-template-key>
                    hardcoded-pages
                </div>
                <div className='hidden' data-permalink>
                    /whitepaper/cloud-storage-misconfigurations
                </div>
                <div className='hidden' data-title>
                    [White Paper] The Complete Guide to Cloud Compliance in 2023 - Cyscale
                </div>
                <div className='hidden' data-description>
                    This whitepaper presents cloud trends for 2023 along with popular compliance frameworks such as
                    ISO27001, GDPR, HIPAA, PCI-DSS and SOC2.
                </div>
                <div className='hidden' data-category>
                    whitepaper
                </div>
                <div className='bg-storage-misconfigurations pt-8'>
                    <Container>
                        <div className='pt-16 pb-24 lg:py-40'>
                            <Row>
                                <div className='col-span-12 lg:col-span-6 '>
                                    <div className='pt-1 max-w-lg lg:max-w-xl mx-auto lg:mx-0'>
                                        <h1 className='text-left text-blue text-2xl sm:text-4xl leading-normal sm:leading-normal mb-8 sm:mb-10 md:mb-12 lg:mb-16 font-montserrat'>
                                            <strong>The In-Depth Guide</strong>
                                            <br className='hidden lg:block' /> to Cloud Compliance in 2023
                                        </h1>
                                        <div>
                                            <h2 className='text-left text-base leading-normal mb-2 text-gray'>
                                                <strong>
                                                    This whitepaper helps you answer the following questions:
                                                </strong>
                                            </h2>
                                            <ul className='text-base  ml-8 list-disc text-gray'>
                                                <li>Why is compliance important?</li>
                                                <li>
                                                    What standards exist on the market, and who are they destined for?
                                                </li>
                                                <li>How do you achieve compliance in the cloud?</li>
                                            </ul>
                                        </div>
                                        <p className='text-left text-base leading-normal mt-7 sm:mb-8 text-gray'>
                                            Download the whitepaper to read about ISO 27001, SOC 2, PCI-DSS, GDPR,
                                            HIPAA.
                                        </p>
                                        <GatsbyImage
                                            image={data.standards.childImageSharp.gatsbyImageData}
                                            alt='Standards'
                                            className='max-w-sm mt-4 sm:mt-0'
                                        />
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-6' id='apply-now'>
                                    <div
                                        className='rounded-xl shadow-lg mt-6 lg:mt-0 py-4 lg:pt-12 pb-0 px-8 md:px-12 max-w-lg mx-auto lg:mr-0 lg:ml-auto relative'
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                            backdropFilter: 'blur(5px)'
                                        }}
                                    >
                                        <h2 className='font-semibold text-2xl sm:text-3xl lg:text-2xl leading-normal mb-8 mt-8 lg:mt-0'>
                                            Get the Whitepaper
                                        </h2>
                                        {loadingForm && <LoaderContainer minHeight={365} />}
                                        <div
                                            style={{ minHeight: 365 }}
                                            id='cloud-compliance-form'
                                            className={classnames('pb-4', { hidden: loadingForm })}
                                        />
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Layout>
        </>
    );
};

export default TheCompleteGuideToCloudCompliance;
