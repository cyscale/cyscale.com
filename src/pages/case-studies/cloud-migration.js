import React from 'react';
import Layout from '../../components/layout/CleanLayout';
import { Container } from '../../components/atoms/Containers';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css } from 'twin.macro';
import ChallengesIcon from '../../assets/images/challenges-icon.svg';
import ResultsIcon from '../../assets/images/results-icon.svg';
import { topArticles } from '../products/cnapp';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { ctaTransition, hrStyle, Subtitle, subtitleColor, textColor } from '../../assets/css/styles';
import classnames from 'classnames';
import useScrollTrigger from '../../components/scrollTrigger';
import { hoverButtonColorStyle, widthFitStyle } from '../../components/layout/style';
import useStickyElement from '../../hooks/useStickyElement';

const CloudMigration = ({ location }) => {
    const trigger = useScrollTrigger();

    const data = useStaticQuery(graphql`
        query MedicalDevicesCompanyQuery {
            cover: file(relativePath: { eq: "medical-devices-company-cover.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            logo: file(relativePath: { eq: "medical-device-company-logo.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 98, layout: FIXED)
                }
            }
            mobileLogo: file(relativePath: { eq: "medical-device-company-logo.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 58, layout: FIXED)
                }
            }
            quotes: file(relativePath: { eq: "quotes.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 41, layout: CONSTRAINED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
            whitepaperCover: file(relativePath: { eq: "whitepaper-cover-blog.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 111, height: 162, layout: FIXED)
                }
            }
        }
    `);

    const { isTop, parentRef, stickyRef } = useStickyElement();

    return (
        <Layout
            location={location}
            pageName='MedicalDevicesCompany'
            title='Secure Cloud Migration Case Study | Automated Cloud Security | Cyscale'
            description='Cyscale helped a medical devices leader migrate from a complex on-premises infrastructure to the public cloud securely and without specialist skills.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /case-studies/cloud-migration
            </div>
            <div className='hidden' data-title>
                Secure Cloud Migration Case Study | Automated Cloud Security | Cyscale
            </div>
            <div className='hidden' data-description>
                Cyscale helped a medical devices leader migrate from a complex on-premises infrastructure to the public
                cloud securely and without specialist skills.
            </div>
            <div className='hidden' data-category>
                case studies
            </div>
            <div className='pt-28 lg:pt-32 pb-16'>
                <Container>
                    <div className='grid grid-cols-12 lg:gap-12'>
                        <div className='col-span-12 lg:col-span-6'>
                            <p
                                className='font-montserrat font-bold text-sm'
                                css={css`
                                    color: #079bee;
                                `}
                            >
                                CASE STUDY
                            </p>
                            <h1
                                className='font-montserrat font-bold mt-4'
                                css={css`
                                    font-size: 1.875rem;
                                    line-height: 2.313rem;
                                    color: #1d2639;
                                `}
                            >
                                Good Medicine: Securely Migrating <br /> a Medical Devices Leader from On-premises to
                                the Cloud
                            </h1>
                            <div className='flex mt-6'>
                                <GatsbyImage
                                    image={data.logo.childImageSharp.gatsbyImageData}
                                    alt='Medical Devices Company Logo'
                                    className='mt-4 flex-shrink-0 hidden sm:block'
                                />
                                <p className='font-hind text-base font-normal mt-4 sm:ml-5' css={textColor}>
                                    Migrating a complex on-premises infrastructure to the public cloud without
                                    specialist resources is no easy feat. But this medical devices manufacturer was able
                                    to breathe easy and adapt their technical expertise to the new environment while
                                    keeping security at the forefront of the migration.
                                </p>
                            </div>
                            <GatsbyImage
                                image={data.mobileLogo.childImageSharp.gatsbyImageData}
                                alt='Medical Devices Company Logo'
                                className='mt-4 block sm:hidden '
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-6 mt-8 lg:mt-0'>
                            <GatsbyImage
                                image={data.cover.childImageSharp.gatsbyImageData}
                                alt='Cover'
                                className='rounded-xl'
                            />
                        </div>
                    </div>
                </Container>
                <div className='container max-w-7xl mx-auto xl:flex xl:pr-16'>
                    <div className='max-w-4xl xl:max-w-5xl mx-auto xl:mx-0 px-8'>
                        {' '}
                        <div className='grid grid-cols-12 gap-0 lg:gap-12 mt-12 lg:mt-20'>
                            <div className='col-span-12 lg:col-span-6'>
                                <p className='font-montserrat text-lg font-bold' css={subtitleColor}>
                                    Challenges
                                </p>
                                <div className='flex items-start mt-4'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2 mt-1' />
                                    <p className='font-hind text-base mt-1' css={subtitleColor}>
                                        A complex on-premises infrastructure that needs to be migrated to the cloud
                                    </p>
                                </div>
                                <div className='flex items-start mt-3'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        A lack of cloud specialists within the technical team
                                    </p>
                                </div>
                                <div className='flex items-start mt-3'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        IAM (Identity and Access Management) visibility gaps when offboarding users and
                                        managing access control
                                    </p>
                                </div>
                                <p className='font-montserrat text-lg font-bold mt-6' css={subtitleColor}>
                                    Results
                                </p>
                                <div className='flex items-start mt-4'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        A swift migration to a cloud infrastructure in AWS and Azure
                                    </p>
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Integrated cloud security by design from the start
                                    </p>
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Confidence in a secure cloud environment despite having no in-house cloud
                                        expertise
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 mt-4 lg:mt-0'>
                                <div
                                    css={css`
                                        background-color: #fafafb;
                                    `}
                                    className='p-4 rounded-md'
                                >
                                    <p className='text-lg font-hind font-semibold mt-4' css={subtitleColor}>
                                        About the company
                                    </p>
                                    <p className='text-lg font-hind mt-2' css={subtitleColor}>
                                        The medical device company is a leader in the pharmaceutical and medical devices
                                        production industry, with over 20 years of experience and millions of patients.
                                        The company has a strong reputation in the industry due to its dedication to
                                        producing high-quality medical devices and pharmaceutical products widely used
                                        and trusted by healthcare professionals and patients alike.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Subtitle css={subtitleColor}>Problem</Subtitle>
                        <p className='font-hind text-base mt-8' css={textColor}>
                            To take advantage of the scalability of the cloud, our customer aimed to migrate their
                            applications, VMWare virtual machines, databases, and other components of their complex
                            infrastructure to a multi-cloud environment. However, they faced challenges due to lack of
                            cloud security expertise and a small infrastructure team, resulting in reduced confidence
                            and slower progress.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            They needed a plan to “start right”, to ensure maximum efficiency and security by migrating
                            their resources securely from the beginning.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Furthermore, in an environment with highly sensitive data, the customer had concerns
                            regarding offboarding users and managing IAM (Identity and Access Management) permissions.
                            They wanted to make sure that there would be no gaps in their security posture, such as
                            former employees with active permissions after having left the company, or users with overly
                            broad access rights.
                        </p>
                        <Subtitle css={subtitleColor}>Solution</Subtitle>
                        <p className='font-hind text-base mt-8' css={textColor}>
                            Cyscale recognised the customer’s need for cloud expertise and delivered a cloud security
                            platform that automated the security assessment process, inspiring confidence in the new
                            public cloud environment by enabling the team to do more with limited resources.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            The company did not need to hire new personnel to achieve security in the cloud due to our
                            platform, which highlighted any misconfigurations and vulnerabilities present in their
                            infrastructure and helped them remediate the findings:
                        </p>
                        <div
                            className='grid grid-cols-12 gap-1 my-8 p-3 rounded-md'
                            css={css`
                                background-color: #f5f9ff;
                            `}
                        >
                            <div className='col-span-12 lg:col-span-1'>
                                <div className='flex justify-center'>
                                    <GatsbyImage image={data.quotes.childImageSharp.gatsbyImageData} alt='' />
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-11 mt-4 lg:mt-0'>
                                <p className='text-lg font-semibold font-hind' css={subtitleColor}>
                                    I have confidence that whatever we put in our cloud environments is properly
                                    configured.
                                </p>
                                <p className='text-base font-hind mt-4' css={subtitleColor}>
                                    Infrastructure Engineer
                                </p>
                            </div>
                        </div>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Besides this, Cyscale also helped them identify any resources left undeleted after being
                            used to explore settings during this project. This allowed the team to explore the cloud
                            environment within guardrails, gaining confidence and proficiency in managing cloud
                            resources effectively.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Moreover, we promptly responded with excellent customer support with our team of cloud
                            security specialists. We helped them with any questions and issues they had and informed
                            them of best practices. An example of a best practice applied by the company due to our
                            recommendations is assigning permissions to groups instead of users in the cloud.
                        </p>
                        <Subtitle css={subtitleColor}>Results</Subtitle>
                        <p className='font-hind text-base mt-8' css={textColor}>
                            The company found that previous security tools created more work for the small team by
                            bombarding them with dozens of security alerts that contained little context. Cyscale
                            enabled the company to establish its own risk rules, so alerts were only sent out within
                            defined parameters and contained all relevant context to remediate the issue quickly. With
                            Cyscale, the company managed to securely and efficiently migrate their on-premises
                            infrastructure to the cloud.
                            <strong> "I can't imagine being able to manage the project without Cyscale”</strong> says
                            the Infrastructure Engineer.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Cyscale allowed the medical device manufacturer to migrate projects from legacy
                            infrastructure to a multi-cloud architecture, providing increased confidence in the project
                            and allowing the technical team to focus on adapting to the new environment rather than
                            worrying about security. Using security controls that continuously checked the
                            configurations applied, our customer consistently addressed security issues as they arose
                            and kept alerts at zero.{' '}
                            <strong>“Cyscale gave me visibility and confidence in our cloud infrastructure”</strong>,
                            says the VP of Information Technology.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            The technical team was eager to understand how the cloud and its many services work, and
                            Cyscale enabled them to learn and build their multi-cloud infrastructure without worrying
                            about vulnerabilities in their systems.
                        </p>{' '}
                        <p className='font-hind text-base' css={textColor}>
                            Finally, using Cyscale, the company managed to identify offboarded users that still had
                            permissions to access resources, as well as improve access control policies.
                        </p>
                        <Subtitle css={subtitleColor}>Conclusion</Subtitle>
                        <p className='font-hind text-base mt-8 mb-24' css={textColor}>
                            Cyscale helped the customer migrate their on-premises infrastructure to the cloud, secure
                            all cloud assets from the beginning, and manage IAM (Identity and Access Management)
                            permissions. The company's confidence in its infrastructure in the cloud was enhanced
                            drastically, while security and efficiency were top priorities.
                        </p>
                    </div>
                    <div className='flex flex-col self-stretch justify-between mt-20' ref={parentRef}>
                        <div
                            className={classnames({
                                'hidden xl:block w-72 sticky pl-10 font-montserrat': true,
                                'mb-24': true,
                                'top-0': trigger,
                                'top-28': !trigger
                            })}
                            css={ctaTransition}
                            ref={stickyRef}
                        >
                            <p
                                className={classnames({ 'font-montserrat text-xs font-bold': true, 'pt-4': !isTop })}
                                css={css`
                                    color: #818791;
                                `}
                            >
                                DISCOVER THE NEXT CASE STUDY
                            </p>
                            <Link
                                className='font-montserrat font-bold font-lg mt-2 block hover:underline'
                                css={subtitleColor}
                                to='/case-studies/smart-fintech/'
                            >
                                Smart Fintech uses Cyscale to gain IAM visibility and ensure cloud security and
                                compliance
                            </Link>
                            <hr className='mt-8' css={hrStyle} />
                            <p className='font-montserrat text-lg font-bold pt-4' css={subtitleColor}>
                                Ready to get started?
                            </p>
                            <div className='mt-4'>
                                <Link
                                    className='bg-blue text-white rounded cursor-pointer font-medium font-hind'
                                    to='/request-demo/'
                                    css={[
                                        hoverButtonColorStyle,
                                        widthFitStyle,
                                        css`
                                            padding: 0.625rem 2.5rem;
                                        `
                                    ]}
                                >
                                    Contact Sales
                                </Link>
                            </div>
                            <hr className='mt-8' css={hrStyle} />
                            <p className='font-montserrat text-lg font-bold mt-8' css={subtitleColor}>
                                Save for later
                            </p>
                            <p className='font-montserrat font-medium text-xs'>Cloud Migration Case Study</p>
                            <Link
                                to='/resources/case-study-cloud-migration.pdf'
                                className='font-montserrat font-medium text-xs hover:underline cursor-pointer text-blue'
                            >
                                Download Case Study
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className='py-24 flex flex-col items-center'
                    css={css`
                        background-color: #f0f6ff;
                    `}
                >
                    <h2 className='font-bold font-montserrat text-lg lg:text-2xl text-center'>
                        Improve your cloud security posture today
                    </h2>
                    <p className='mt-8 text-base sm:text-lg lg:text-xl text-center px-2 sm:px-0'>
                        Sign up for a custom demo to see how we close security gaps
                        <br /> and help you leverage the cloud with confidence.
                    </p>
                    <div className='mt-10 w-auto inline-block'>
                        <Link
                            className='w-full block text-sm font-medium rounded text-white text-center hover:no-underline no-underline font-hind'
                            css={css`
                                padding: 0.625rem 2.5rem;
                                background-image: linear-gradient(to right, #0f26aa, #ff4a56);

                                &:hover {
                                    background-image: linear-gradient(to left, #0f26aa, #ff4a56);
                                }
                            `}
                            to='/request-demo'
                        >
                            REQUEST LIVE DEMO
                        </Link>
                    </div>
                </div>
                <LinksAndWhitepaper
                    topArticles={topArticles}
                    data={data}
                    title={'News and Insights about CNAPP'}
                    titleCard={'The Complete Guide<br class="hidden lg:block" /> to Cloud Storage Misconfigurations'}
                    textCard={
                        'This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
                    }
                    linkCard={'/whitepaper/cloud-storage-misconfigurations/'}
                    misconfigurationWhitepaper={true}
                />
            </div>
        </Layout>
    );
};

export default CloudMigration;
