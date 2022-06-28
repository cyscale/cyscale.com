import React from 'react';
import { Container, Section, Row } from '../atoms/Containers';

const MisconfigCoverage = ({ id }) => (
    <div className='bg-lightGreyEEE MisconfigurationsPage' id={id}>
        <Container>
            <Section>
                <h2 className='font-semibold  text-blue text-34px leading-normal lg:max-w-md sectionTitle new-line mb-12'>
                    Extensive cloud misconfiguration detection across all of your cloud assets
                </h2>
                <div className='max-w-xl'>
                    <Row>
                        <div className='lg:col-span-6 col-span-12'>
                            <p>
                                <strong>Analyze cloud misconfigurations</strong>
                                <br />
                                Analyze misconfigurations against the most popular industry and regulatory frameworks,
                                including a wide range of CIS control benchmarks, ISO 27001, and SOC 2.
                            </p>
                        </div>
                        <div className='lg:col-span-6 col-span-12'>
                            <p>
                                <strong>Ensure security and compliance</strong>
                                <br />
                                Prove alignment with the highest industry standards, enforce policies consistently
                                across cloud providers and scale compliance efforts without overhead.
                            </p>
                        </div>
                        <div className='lg:col-span-6 col-span-12'>
                            <p>
                                <strong>400+ unique configuration controls</strong>
                                <br />
                                Unique controls across 400+ categories, including authentication, data protection,
                                logging and monitoring, network configurations, system integrity, etc.
                            </p>
                        </div>
                        <div className='lg:col-span-6 col-span-12'>
                            <p>
                                <strong> Prioritize misconfiguration risk</strong>
                                <br />
                                With our Security Knowledge Graph<sup className='no-underline'>TM</sup>, We surface
                                crucial issues based on deep understanding of all your interlinked assets - rather than
                                a mishmash of unrelated assets.
                            </p>
                        </div>
                    </Row>
                </div>
            </Section>
        </Container>
    </div>
);

export default MisconfigCoverage;
