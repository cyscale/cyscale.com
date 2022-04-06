import React from 'react';
import Cloud from '../Home/cloud';
import GetStarted from '../Home/getstarted';
import Automation from './automation';
import IdentifyIssues from './identifyIssues';
import CSPMgetStarted from '../cloud-security-posture-management/CSPMgetStarted';
import FAQs from './faqs';
import Video from './video';
import getStartedICon from '../../assets/images/getStartedIconCPSM.svg';
import SKG_F_image from '../../assets/images/skg_f_image.png';
import SKG_F_image_2 from '../../assets/images/Group-421.svg';
import Icon1 from '../../assets/images/feature_icon_1.inline.svg';
import Icon2 from '../../assets/images/feature_icon_2.inline.svg';
import Icon3 from '../../assets/images/feature_icon_3.inline.svg';
import Icon4 from '../../assets/images/feature_icon_4.inline.svg';
import Icon5 from '../../assets/images/feature_icon_5.inline.svg';
import Icon6 from '../../assets/images/feature_icon_6.inline.svg';
import { useAppLink } from '../../common/links';
import { Link } from 'gatsby';
import { Container, Row, Section } from '../atoms/Containers';

const Index = () => {
    const appLink = useAppLink();

    const dataFeatures = [
        {
            icon: <Icon1 />,
            description: 'All-inclusive graph of all your digital assets.'
        },
        {
            icon: <Icon2 />,
            description: ' Instant correlations across all cloud accounts, SaaS platforms, and assets'
        },
        {
            icon: <Icon3 />,
            description: 'Deep understanding of their relationships and interactions'
        },
        {
            icon: <Icon4 />,
            description: ' Semantic interpretations that cover all assets, no matter how diverse'
        },
        {
            icon: <Icon5 />,
            description: 'Resource-intensive data collection and analysis done for you'
        },
        {
            icon: <Icon6 />,
            description:
                'Automatically pinpoints data security issues with deep visibility through infrastructure layers'
        }
    ];

    const dataSKGBenifits = [
        {
            title: `Because it's difficult and expensive.`,
            description: `\nCybersecurity encompasses many heterogeneous systems which produce complex knowledge that is difficult to orchestrate and represent accurately and completely. \n\nKnowledge graph technology can do that but the data model needs to be customized to the specific needs of specialists working in information security.`
        },
        {
            description: `\n\nTo enable this flexibility, we merged the knowledge graph model with our cloud security expertise to help our customers effectively manage the escalating risk of losing and damaging cloud data. \n\nWe do the heavy lifting because we enjoy the challenge of building a solution to a big problem that's not going away anytime soon.`
        }
    ];
    const dataSystemGov = [
        {
            title: `Close visibility gaps in your Governance, Risk and Compliance system`,
            description: [
                '\n\nSetting up a reliable ',
                <Link
                    to='/use-cases/cloud-compliance-and-auditing/'
                    key='link123'
                    className=' text-blue underline text-16px hover:no-underline hover:text-red'
                >
                    GRC (Governance, Risk and Compliance system)
                </Link>,
                " system doesn't have to take ages and more in-house resources than you can ever afford. \n\nThe Cyscale Cloud Platform is a GRC tool you can truly count on!\n\nIt packs rich, customizable features you can use to build and manage a competitive governance process that gets technical teams and management on the same page. "
            ]
        },
        {
            description: [
                '\n\n\n\nThe Security Knowledge Graph™ brings an orchestrated approach to cybersecurity and policy enforcement. Edit and customize standards across all your cloud providers in a single dashboard, tracking implementation and consolidating your data-rich archive as you go.'
            ]
        }
    ];
    const dataTopRisks = [
        {
            title: `Tackle OWASP Cloud Top 10 security risks with a steady hand`
        },
        {
            description: [
                'Use the built-in OWASP Cloud Top 10 security policy to automatically check for alignment with this respected industry standard. ',
                <span key='11a'>
                    <br />
                    <br />
                </span>,
                ' Offset risks associated with SaaS providers and complex cloud infrastructures by using the Cyscale Cloud Platform. Banking on the robust capabilities of our Security Knowledge Graph™, it instantly checks on how your cloud assets fare in terms of user privacy, multi-tenancy, exposure of non-production environments, and all other top cloud security issues OWASP prioritizes.',
                <strong key='2a' className='text-blue'>
                    <br />
                    <br />
                    We do it so you don't have to.
                </strong>
            ]
        }
    ];
    const dataPayCloud = [
        {
            title: `Pay-per-use and scale your cloud security program as you grow`
        },
        {
            description: `Would it be cheaper to build this in-house?” It's a common dilemma but does your organization have what it takes to become a security company? \n\nImplementing the knowledge graph model is a resource-intensive process that requires industry-specific know-how, specialized technical components, and broad security expertise. It also takes time, the most invaluable resource of all. \n\nWith Cyscale, you pay for what you use and nothing more. As your business grows, you remain fully in control of how you scale your security program, as our Cloud Platform adapts to your changing needs.`
        }
    ];

    return (
        <>
            <div>
                <div id='start'>
                    <Section>
                        <Container>
                            <h2 className='font-semibold  text-blue text-2xl md:text-4xl max-w-sm leading-normal sectionTitle mb-10'>
                                What is a Security
                                <br /> Knowledge Graph™
                            </h2>
                            <Row>
                                <div className='col-span-12 lg:col-span-4  mb-12 md:mb-0'>
                                    <img className='max-w-xs' src={SKG_F_image} alt='decoration' />
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                                    <p className='mb-6'>
                                        Cyscale Security Knowledge Graph™ uses a data model that maps networks of cloud
                                        entities in an exhaustive graph which supports automated reasoning across
                                        multi-cloud infrastructures.
                                    </p>
                                    <p>
                                        When applied to cloud security, the knowledge graph model charts the full scale
                                        of your cloud assets, including their type, properties, and the relationships
                                        between them. Based on deep understanding, it makes semantic interpretations
                                        that factor in both the complexity and diversity of assets that generate
                                        security issues
                                    </p>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                                    <p className='mb-6'>
                                        For example, the Cyscale Cloud Platform can interrelate dissimilar entities such
                                        as user identity, endpoints, code repositories, production environments, VMs,
                                        and production databases.
                                    </p>
                                    <p>
                                        Cyscale Security Knowledge Graph™ enables machines to understand these complex
                                        relations and derive new knowledge that human specialists can use without having
                                        to perform effort-intensive analyses themselves.
                                    </p>
                                </div>
                            </Row>
                        </Container>
                    </Section>
                </div>
                <Video />
                <Section className='block w-full bg-white'>
                    <Container>
                        <p className='text-black text-base my-16'>
                            <strong>The Cyscale Security Knowledge Graph in a nutshell</strong>
                        </p>
                        <div className='border-t border-b border-borderGrey py-4'>
                            <Row>
                                {dataFeatures.map((content, index) => (
                                    <div key={index} className='col-span-12 sm:col-span-6 md:col-span-4 py-6 lg:py-0 lg:col-span-2'>
                                        {React.cloneElement(content.icon, {
                                            alt: 'decoration',
                                            className: 'h-8 block'
                                        })}
                                        <p className='mt-5 text-black text-base leading-normal'>
                                            {content.description}
                                        </p>
                                    </div>
                                ))}
                            </Row>
                        </div>

                        <div className='max-w-lg mt-16'>
                            <p className=' text-black text-base leading-normal'>
                                No cloud security vendor leverages the power of the knowledge graph technology to
                                deliver precise correlations between cloud resources and data loss risks.
                            </p>
                        </div>
                    </Container>
                </Section>
                <Cloud
                    title={`If knowledge graph tech is this useful, why hasn't anyone used it before?`}
                    sectionName='SKGBeneifts'
                    data={dataSKGBenifits}
                />
            </div>
            <div className='gradientBGCSPM'>
                <GetStarted
                    description='Ready to give it a try and see how it works?'
                    btnText='START YOUR FREE TRIAL'
                    btnLink={appLink}
                    ExternalLink
                    icon={getStartedICon}
                />
            </div>
            <div className='automation'>
                <Automation />
            </div>
            <div className='identifIssues'>
                <IdentifyIssues />
            </div>
            <div className='gradientBGCSPM-2'>
                <CSPMgetStarted
                    title={`Discover the most flexible pricing in the cloud security industry`}
                    btnText='SEE PRICING OPTIONS'
                    btnLink='/pricing/'
                />
            </div>
            <Cloud f_image={SKG_F_image_2} sectionName='systemGov' data={dataSystemGov} />
            <div className='bg-lightGrey topRisks'>
                <Cloud sectionName='topRisks' data={dataTopRisks} />
            </div>
            <Cloud sectionName='systemGov' data={dataPayCloud} />
            <div className='gradientBGCSPM pt-60px pb-60px'>
                <GetStarted
                    description={`Accurate. Real-time. Context-aware.`}
                    btnText='TRY CYSCALE FOR FREE'
                    btnLink={appLink}
                    ExternalLink
                    sectionName='dataSecFoot'
                />
            </div>
            <FAQs />
        </>
    );
};

export default Index;
