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

const CDSecurity = ({ location }) => {
    const trigger = useScrollTrigger();

    const data = useStaticQuery(graphql`
        query CDSecurityQuery {
            cover: file(relativePath: { eq: "cds-case-study.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
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
            pageName='CDSecurityPage'
            title='Data security in a multi-cloud environment | Cyscale Case Study'
            description='A US-based data intelligence platform moved away from in-house tools to a single solution for better security posture over a multi-cloud estate.'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /case-studies/cloud-data-security
            </div>
            <div className='hidden' data-title>
                Data security in a multi-cloud environment | Cyscale Case Study
            </div>
            <div className='hidden' data-description>
                A US-based data intelligence platform moved away from in-house tools to a single solution for better
                security posture over a multi-cloud estate.
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
                                Data security in a <br />
                                multi-cloud environment
                            </h1>
                            <div className='mt-6'>
                                <p className='font-hind text-base font-normal' css={textColor}>
                                    This US-based data intelligence platform was experiencing strong growth, resulting
                                    in significantly more customer data being stored in the cloud. As the company
                                    approached the 400-employee mark and began to feel more pressure on its
                                    cybersecurity team, the time came to sunset in-house tools developed on open-source
                                    offerings and deploy a solution that would make it easier to maintain a strong
                                    security posture over a sprawling multi-cloud estate.
                                </p>
                            </div>
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
                        <div className='grid grid-cols-12 gap-0 lg:gap-12 mt-12 lg:mt-20'>
                            <div className='col-span-12 lg:col-span-6'>
                                <p className='font-montserrat text-lg font-bold' css={subtitleColor}>
                                    Challenges
                                </p>
                                <div className='flex items-start mt-4'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2 mt-1' />
                                    <p className='font-hind text-base mt-1' css={subtitleColor}>
                                        Over-reliance on in-house developed tools that needed maintenance and investment
                                    </p>
                                </div>
                                <div className='flex items-start mt-3'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Mix of technical and not-so-technical stakeholders involved in chain of command
                                    </p>
                                </div>
                                <div className='flex items-start mt-3'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Growing multi-cloud environment (AWS, Azure and Google Cloud), including
                                        Kubernetes infrastructure
                                    </p>
                                </div>
                                <div className='flex items-start mt-3'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Increasingly complex data inventory
                                    </p>
                                </div>
                                <div className='flex items-start mt-3'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Rapidly expanding team resulting in tedious and time-consuming cloud access
                                        reviews{' '}
                                    </p>
                                </div>
                                <div className='flex items-start mt-3'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Increasing workload for cybersecurity team – more data to secure, more assets to
                                        manage, more tasks to perform
                                    </p>
                                </div>
                                <div className='flex items-start mt-3'>
                                    <img src={ChallengesIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Additional compliance overheads as the business required more robust
                                        accreditations including ISO 27001 and SOC2 Type 2
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 mt-4 lg:mt-0'>
                                <p className='font-montserrat text-lg font-bold' css={subtitleColor}>
                                    Results
                                </p>
                                <div className='flex items-start mt-4'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Single-pane-of-glass view across the multi-cloud estate, no tool-hopping for
                                        different clouds
                                    </p>
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Visibility of all data stores across all environments and status (e.g. is it
                                        encrypted or publicly accessible?)
                                    </p>
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Intuitive visualization of how data flows, how it is used, and who (users,
                                        applications or machines) has access to it
                                    </p>
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Ability to group infrastructure by different clouds, different customers
                                    </p>
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Automated misconfiguration detection, enhanced confidence through real-time
                                        security monitoring
                                    </p>
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Compliance posture monitoring against CIS Benchmarks, including Kubernetes
                                    </p>
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Exportable reports to be shared with other stakeholders, including remediation
                                        instructions
                                    </p>
                                </div>
                                <div className='flex items-start mt-2'>
                                    <img src={ResultsIcon} alt='' className='inline-block mr-2' />
                                    <p className='font-hind text-base' css={subtitleColor}>
                                        Time back through elimination of bespoke tool development and significantly
                                        improved access reviews
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className='px-5 pt-6 pb-14 rounded-md mt-8'
                            css={css`
                                background-color: #fafafb;
                            `}
                        >
                            <p className='font-hind font-semibold text-base' css={subtitleColor}>
                                About
                            </p>
                            <p className='font-hind font-medium text-base mt-4' css={textColor}>
                                Data security in the cloud became a priority as this data intelligence company was
                                experiencing near 20% year-on-year growth, onboarding customers into a flexible
                                environment including on-premises, hybrid, and multi-cloud, including AWS, Azure and
                                Google Cloud. The company also relied heavily on Kubernetes clusters that needed
                                security and compliance coverage, as it was losing visibility of the relationship
                                between customer-generated data and the associated data security risk.
                            </p>
                        </div>
                        <Subtitle css={subtitleColor}>Problem</Subtitle>
                        <div className='grid grid-cols-12 mt-8 rounded-md'>
                            <div className='col-span-12'>
                                <p className='font-hind text-base' css={textColor}>
                                    As the company ingested more customer data, the cloud estate grew and became
                                    increasingly difficult to monitor from a security perspective. A commercial decision
                                    that added dozens of partners to the company’s cloud ecosystem compounded the
                                    challenge further.
                                </p>
                                <p className='font-hind text-base mt-4' css={textColor}>
                                    The company had been using a combination of cloud provider native security tools and
                                    open-source offerings, but these were becoming increasingly resource intensive to
                                    maintain and manage.
                                </p>
                                <p className='font-hind text-base mt-4' css={textColor}>
                                    In terms of personnel, the company was onboarding (and offboarding) employees and
                                    guest/customer/partner users and services more frequently, creating further
                                    overheads in terms of access management and reviews, which were becoming more
                                    laborious to perform.
                                </p>
                                <p className='font-hind text-base mt-4' css={textColor}>
                                    Furthermore, stakeholders now included a mix of cybersecurity savvy practitioners
                                    and less technical executives who needed a business-focused understanding of the
                                    security and compliance posture.
                                </p>
                            </div>
                        </div>
                        <Subtitle css={subtitleColor}>Solutions</Subtitle>
                        <p className='font-hind text-base mt-8' css={textColor}>
                            Cyscale’s integrations with multiple clouds including AWS, Azure, Google Cloud, and
                            Kubernetes meant a single view into the entire cloud estate, with no need to jump between
                            different provider dashboards.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Automated misconfiguration and vulnerability checks, along with contextual real-time alerts
                            made it easier to manage the security posture of the environment and respond to critical
                            issues early. The company was able to map its controls to various CIS Benchmarks as well as
                            the ISO27001 and SOC2 Type 2 frameworks and stay on top of compliance drift. Automated data
                            security policy management made it easy to pull evidence into the generated reports.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Security practitioners were able to export detailed PDF reports of the security reviews,
                            complete with remediation instructions, to give the company’s CISO and other senior but less
                            technical executives an understanding of the cloud security and compliance posture.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Finally, CIEM and IAM capabilities made access reviews and ex-employee-offboarding an almost
                            completely automated process.
                        </p>
                        <Subtitle css={subtitleColor}>Results</Subtitle>
                        <p className='font-hind text-base mt-8' css={textColor}>
                            The company was able to achieve a single dashboard security view across its entire
                            multi-cloud estate and group infrastructure into useful buckets based on customer footprint
                            and technology using Scopes.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            The reduced need for bespoke solutions lowered costs and returned development and
                            maintenance time to the engineering department. Cyscale also came in cheaper than Lacework,
                            which was also up for consideration.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            The company was able to improve confidence around data security and compliance with both its
                            customers and its expanding ecosystem of technical partners.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Overall security posture improved due to automated misconfiguration and vulnerability
                            scanning, and the company was not slowed down working with customers and partners in
                            multiple cloud environments. Identity and access reviews also become much easier and less
                            time consuming as the company was able to largely automate the process.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Easy-to-understand cloud data security and compliance reports, with controls mapped to
                            chosen benchmarks, were a significant contributor to the company being able to build a
                            ‘culture of cybersecurity’ and get buy-in from stakeholders before actioning significant
                            changes.
                        </p>
                        <Subtitle css={subtitleColor}>Conclusion</Subtitle>
                        <p className='font-hind text-base mt-8' css={textColor}>
                            Data is the most valuable asset a company possesses and in the case of organizations in the
                            data intelligence business, where customer data is at stake, cloud security is critical.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            In these instances, organizations tend to create data stores faster than cybersecurity teams
                            can secure them, resulting in significant cloud data security and compliance risks.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Fortunately, Cyscale is well-versed in data security in the cloud and data security posture
                            management (DSPM) and is even the maintainer of the{' '}
                            <a
                                className='underline'
                                href='https://owasp.org/www-project-data-security-top-10/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {' '}
                                OWASP Data Security Top 10
                            </a>
                            , seen as the essential guide about the major security risks for storing and moving
                            sensitive and PII data, the challenges involved, and how to overcome them.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Using Cyscale, the company was able to get a single interface into its entire cloud estate,
                            along with a comprehensive data inventory and easily digestible reports on security and
                            compliance posture.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            In terms of day-to-day work, Cyscale helped reduce pressure on the security team by
                            automating a lot of the menial tasks associated with access reviews, and misconfiguration
                            identification and remediation.
                        </p>
                        <p className='font-hind text-base mt-4' css={textColor}>
                            The solution also worked out cheaper than both alternative vendor-provided solutions and
                            ongoing development and maintenance of the in-house solution the company had been reliant on
                            previously.
                        </p>{' '}
                        <p className='font-hind text-base mt-4' css={textColor}>
                            Ready to find out how Cyscale can protect your data in the cloud? Watch this video
                        </p>
                        <video width='auto' height='auto' controls tabIndex='2' className='xl:pb-24 mt-4'>
                            <source
                                src='https://d3n52qn7viv754.cloudfront.net/videos/data-security-tour.mp4'
                                type='video/mp4'
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='flex flex-col self-stretch justify-between mt-20' ref={parentRef}>
                        <div
                            className={classnames({
                                'hidden xl:block w-72 sticky pl-10 font-montserrat': true,
                                'pb-12': true,
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
                            to='/request-demo/'
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

export default CDSecurity;
