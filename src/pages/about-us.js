import React from 'react';
import {
    Gapminder,
    LeaderAndy,
    LeaderManuela,
    LeaderOvidiu,
    Notion,
    Seedblink,
    Seedcamp
} from '../components/about/images';
import { FaLinkedin } from 'react-icons/fa';
import { Container, Row, Section } from '../components/atoms/Containers';
import Layout from '../components/layout/CleanLayout';
import History from '../components/about/history';
import GetStarted from '../components/Home/getstarted';
import getStartedIcon from '../assets/images/elemente-vectoriale-07.png';
import data from '../components/careers/data';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'twin.macro';
import CertificationCard from '../components/about/CertificationCard';

const AboutUs = ({ location }) => {
    const dataAboutUs = useStaticQuery(graphql`
        query AboutUsQuery {
            team: file(relativePath: { eq: "team-cyscale.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            awsStartup: file(relativePath: { eq: "aws-startup-program.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 140, layout: CONSTRAINED)
                }
            }
            aws: file(relativePath: { eq: "aws-partner.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 120, layout: CONSTRAINED)
                }
            }
            microsoft: file(relativePath: { eq: "microsoft-partner.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 182, layout: CONSTRAINED)
                }
            }
            azureSolutionsArchitect: file(relativePath: { eq: "azure-solutions-architect-expert.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            azureSecurityEngineer: file(relativePath: { eq: "azure-security-engineer-certificate.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            az303: file(relativePath: { eq: "az-303-certificate.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            az304: file(relativePath: { eq: "az-304-certificate.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            azureFundamentals: file(relativePath: { eq: "azure-fundamentals-certificate.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            azureRed: file(relativePath: { eq: "azure-red-team-certificate.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            awsSolutionsArchitectProfessional: file(relativePath: { eq: "solutions-architect-certificate.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            awsSolutionsArchitectAssociate: file(
                relativePath: { eq: "aws-certified-solutions-architect-associate.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            terraform: file(relativePath: { eq: "terraform-002-certificate.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            googleCloud: file(relativePath: { eq: "google-cloud-certificate.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            neo4j: file(relativePath: { eq: "neo4j-certificate.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            ccna: file(relativePath: { eq: "ccna-certificate.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            securityCompliance: file(relativePath: { eq: "security-compliance-microsoft.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
            kubernetesAdministrator: file(relativePath: { eq: "kubernetes-administrator.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 100, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='aboutUs'
            title='About us - Cyscale'
            description='Together, we draw broad industry expertise to create powerful cybersecurity solutions for our customers that automate and mitigate cloud security issues.'
        >
            <div className='bg-lightGrey'>
                <div className='max-w-7xl m-auto pl-8 pr-8 pt-28 lg:pt-44 pb-12 lg:pb-28'>
                    <Row>
                        <div className='col-span-12 md:col-span-6 '>
                            <div className='xl:ml-auto max-w-full 2xl:ml-0 2xl:mr-0'>
                                <h1 className='font-semibold font-montserrat text-3xl lg:text-5xl leading-normal text-primary mt-2 lg:mt-20'>
                                    Our Mission
                                </h1>
                                <p className='text-base lg:text-lg pt-2 lg:pt-10  leading-loose'>
                                    To help companies of all sizes to start, improve and maintain their Cloud Security
                                    Program based on the industry best practices. Reducing the risk{' '}
                                    <br className='hidden xl:block' /> of security breaches when migrating or developing
                                    solutions in the cloud should be a constant priority and responsibility. We can
                                    ensure that this task will not be overwhelming for you.
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <div className='max-w-xs sm:max-w-none'>
                                <GatsbyImage
                                    image={dataAboutUs.team.childImageSharp.gatsbyImageData}
                                    alt='Cyscale Team'
                                />
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
            <Container>
                <Section>
                    <Row>
                        <div className='col-span-12'>
                            <h2
                                id='start'
                                className='text-blue font-montserrat sm:text-3xl text-4xl font-bold leading-normal mb-6 sectionTitle'
                            >
                                How this story started
                            </h2>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <p className='max-w-lg  leading-loose'>
                                As more companies moved their business applications and data to the cloud, many lacked
                                the knowledge or human resources required to mitigate security risks associated with
                                this accelerated cloud adoption.
                            </p>
                        </div>
                        <div className='col-span-12 md:col-span-6'>
                            <p className='max-w-lg  leading-loose'>
                                Being on the front line as cybersecurity experts, the founders (Ovidiu, Manuela, and
                                Andrei) have realized the struggle these companies face and started working on a
                                solution to help them handle their Cloud Security better and more efficiently. And so...
                                Cyscale was born.
                            </p>
                        </div>
                    </Row>
                </Section>
            </Container>
            <div className='-mt-24 lg:mt-0 lg:pl-8 xl:pl-0'>
                <History />
            </div>
            <div className='gradientBG'>
                <GetStarted
                    description='Start improving your Cloud Security Posture'
                    btnText='TRY CYSCALE FOR FREE'
                    btnLink={'/free-trial/'}
                    icon={getStartedIcon}
                    sectionName='aboutUsGetStarted'
                />
            </div>
            <div className='relative'>
                <div
                    className='bg-gray absolute bottom-0 mb-20 lg:mb-24 left-0 w-full hidden sm:block'
                    style={{ height: 115, zIndex: -1 }}
                ></div>
                <Container id='leadership'>
                    <Section>
                        <div className='mb-10'>
                            <h2 className='font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>
                                Our Leadership
                            </h2>
                        </div>
                        <Row className='max-w-4xl mx-auto md:gap-8'>
                            <div className='col-span-6 sm:col-span-4'>
                                <LeaderOvidiu
                                    className='rounded-md shadow-md mb-4'
                                    alt='Ovidiu Cical - Founder & CEO'
                                />
                                <strong className='text-black sm:text-white'>Ovidiu Cical</strong>
                                <br />
                                <a
                                    href='https://www.linkedin.com/in/ovidiucical'
                                    className='flex text-sm text-black sm:text-white hover:underline'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <FaLinkedin className='text-sm sm:text-lg mt-1 sm:mt-0' />
                                    <span className='ml-1 sm:ml-2'>Founder & CEO</span>
                                </a>
                            </div>
                            <div className='col-span-6 sm:col-span-4'>
                                <LeaderManuela
                                    className='rounded-md shadow-md mb-4'
                                    alt='Manuela Țicudean - Founder & COO'
                                />
                                <strong className='text-black sm:text-white'>Manuela Țicudean</strong>
                                <br />
                                <a
                                    href='https://www.linkedin.com/in/manuela-ticudean-88a01b81/'
                                    className='flex text-sm text-black sm:text-white hover:underline'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <FaLinkedin className='text-sm sm:text-lg mt-1 sm:mt-0' />
                                    <span className='ml-1 sm:ml-2'>Founder & COO</span>
                                </a>
                            </div>
                            <div className='col-span-6 sm:col-span-4'>
                                <LeaderAndy
                                    className='rounded-md shadow-md mb-4'
                                    alt='Andy Leaver - VP Ops in Residence'
                                />
                                <strong className='text-black sm:text-white'>Andy Leaver</strong>
                                <br />
                                <a
                                    href='https://www.linkedin.com/in/aleaver/'
                                    className='flex text-sm text-black sm:text-white hover:underline'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <FaLinkedin className='text-sm sm:text-lg mt-1 sm:mt-0' />
                                    <span className='ml-1 sm:ml-2'>VP Ops in Residence</span>
                                </a>
                            </div>
                        </Row>
                    </Section>
                </Container>
            </div>

            <Container className='relative' id='backed-by'>
                <Section>
                    <h2 className='font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>
                        Backed by
                    </h2>
                    <div className='flex justify-center flex-wrap'>
                        <a
                            className='text-blue'
                            href='https://www.notion.vc/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Notion />
                        </a>
                        <a className='text-blue' href='https://seedcamp.com/' target='_blank' rel='noopener noreferrer'>
                            <Seedcamp />
                        </a>
                        <a className='text-blue' href='https://gapminder.vc/' target='_blank' rel='noopener noreferrer'>
                            <Gapminder />
                        </a>
                        <a
                            className='text-blue'
                            href='https://seedblink.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Seedblink />
                        </a>
                    </div>
                </Section>
            </Container>
            <Container className='relative' id='technical-partners'>
                <div>
                    <h2 className='font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>
                        Technical Partners
                    </h2>
                    <div className='flex justify-center flex-wrap mt-12'>
                        <div className='my-auto'>
                            <a
                                href='https://aws.amazon.com/startups/startup-programs/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <GatsbyImage
                                    image={dataAboutUs.awsStartup.childImageSharp.gatsbyImageData}
                                    alt='AWS Startup Programs'
                                />
                            </a>
                        </div>

                        <div className='ml-12'>
                            <a href='https://aws.amazon.com/partners/' target='_blank' rel='noopener noreferrer'>
                                <GatsbyImage
                                    image={dataAboutUs.aws.childImageSharp.gatsbyImageData}
                                    alt='AWS Partner'
                                />
                            </a>
                        </div>
                        <div
                            css={css`
                                margin-top: 3rem;
                                margin-left: 0;
                                @media (min-width: 520px) {
                                    margin-left: 3rem;
                                }
                                @media (min-width: 570px) {
                                    margin-top: auto;
                                    margin-bottom: auto;
                                }
                            `}
                        >
                            <a
                                href='https://www.microsoft.com/azure/partners'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <GatsbyImage
                                    image={dataAboutUs.microsoft.childImageSharp.gatsbyImageData}
                                    alt='Microsoft Partner'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className='relative' id='team'>
                <Section>
                    <Row className='md:gap-8'>
                        <div className='col-span-12'>
                            <h2 className='font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>
                                Our Team
                            </h2>
                        </div>
                        {data
                            .filter(({ leader, photo }) => !leader && photo)
                            .sort((a, b) => a.order - b.order)
                            .map(({ photo, name, position, linkedin }) => (
                                <div className='col-span-6 md:col-span-4 lg:col-span-3'>
                                    <div className='mx-auto max-w-xs pt-4'>
                                        {React.cloneElement(photo, {
                                            ...photo.props,
                                            alt: `${name} - ${position}`,
                                            className: 'rounded-md shadow-md'
                                        })}
                                        <div className='mt-4'>
                                            <strong>{name}</strong>
                                            <br />
                                            <a
                                                href={linkedin}
                                                className='text-sm flex hover:text-primary mt-1 text-neutral-600'
                                                rel='noopener noreferrer'
                                                target='_blank'
                                            >
                                                <FaLinkedin className='text-lg' />
                                                <span className='ml-2'>{position}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Row>
                </Section>
            </Container>
            <Container className='relative' id='certifications'>
                <h2 className='font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>
                    Our Certifications
                </h2>
                <Row className='mt-12 sm:mt-24'>
                    <CertificationCard
                        imageData={dataAboutUs.azureSolutionsArchitect.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                Microsoft Certified: Azure
                                <br /> Solutions Architect Expert
                            </>
                        }
                        titleLg={
                            <>
                                Microsoft Certified:
                                <br /> Azure Solutions
                                <br /> Architect Expert
                            </>
                        }
                        company='Microsoft'
                    />
                    <CertificationCard
                        imageData={dataAboutUs.azureSecurityEngineer.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                Microsoft Certified: Azure
                                <br /> Security Engineer
                            </>
                        }
                        titleLg={
                            <>
                                Microsoft Certified:
                                <br /> Azure Security
                                <br /> Engineer
                            </>
                        }
                        company={'Microsoft'}
                        classes={'mt-2 sm:mt-0'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.az303.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                {' '}
                                AZ-303: Microsoft: Azure
                                <br /> Architect Technologies
                            </>
                        }
                        titleLg={
                            <>
                                AZ-303: Microsoft
                                <br /> Azure Architect
                                <br /> Technologies
                            </>
                        }
                        company={'Microsoft'}
                        classes={'mt-2 sm:mt-12 lg:mt-0'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.az304.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                AZ-304: Microsoft: Azure
                                <br /> Architect Design
                            </>
                        }
                        titleLg={
                            <>
                                AZ-304: Microsoft
                                <br /> Azure Architect
                                <br /> Design
                            </>
                        }
                        company={'Microsoft'}
                        classes={'mt-2 sm:mt-12'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.azureFundamentals.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                {' '}
                                Microsoft Certified: Azure
                                <br /> Fundamentals
                            </>
                        }
                        titleLg={
                            <>
                                Microsoft Certified:
                                <br /> Azure
                                <br /> Fundamentals
                            </>
                        }
                        company={'Microsoft'}
                        classes={'mt-2 sm:mt-12'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.securityCompliance.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                Security, Compliance,
                                <br /> and Identity Fundamentals
                            </>
                        }
                        titleLg={
                            <>
                                Security, Compliance,
                                <br /> and Identity
                                <br /> Fundamentals
                            </>
                        }
                        company={'Microsoft'}
                        classes={'mt-2 sm:mt-12'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.azureRed.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                Certified Azure Red Team
                                <br /> Professional (CARTP)
                            </>
                        }
                        titleLg={
                            <>
                                Certified Azure Red
                                <br /> Team Professional
                                <br /> (CARTP)
                            </>
                        }
                        company={'Altered Security'}
                        classes={'mt-2 sm:mt-12'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.awsSolutionsArchitectProfessional.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                AWS Certified Solutions
                                <br /> Architect – Professional
                            </>
                        }
                        titleLg={
                            <>
                                AWS Certified
                                <br /> Solutions Architect –
                                <br /> Professional
                            </>
                        }
                        company={
                            <>
                                Amazon Web Services Training
                                <br /> and Certification
                            </>
                        }
                        classes={'mt-2 sm:mt-12'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.awsSolutionsArchitectAssociate.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                AWS Certified Solutions
                                <br /> Architect – Associate
                            </>
                        }
                        titleLg={
                            <>
                                AWS Certified
                                <br /> Solutions Architect –
                                <br /> Associate
                            </>
                        }
                        company={
                            <>
                                Amazon Web Services Training
                                <br /> and Certification
                            </>
                        }
                        classes={'mt-2 sm:mt-12'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.terraform.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                HashiCorp Certified: <br /> Terraform Associate (002)
                            </>
                        }
                        titleLg={
                            <>
                                HashiCorp Certified:
                                <br /> Terraform Associate
                                <br /> (002)
                            </>
                        }
                        company='HashiCorp'
                        classes={'mt-2 sm:mt-12'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.googleCloud.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                Google Cloud Certified
                                <br /> Associate Cloud Engineer
                            </>
                        }
                        titleLg={
                            <>
                                Google Cloud
                                <br /> Certified Associate
                                <br /> Cloud Engineer
                            </>
                        }
                        company='Google Cloud'
                        classes={'mt-2 sm:mt-12'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.neo4j.childImageSharp.gatsbyImageData}
                        titleSm='Neo4j Certified Professional'
                        titleLg={
                            <>
                                Neo4j Certified
                                <br /> Professional
                            </>
                        }
                        company='Neo4j Certification'
                        classes={'mt-2 sm:mt-12'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.ccna.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                CCNA (Cisco Certified
                                <br /> Network Associate)
                            </>
                        }
                        titleLg={
                            <>
                                CCNA (Cisco
                                <br /> Certified Network
                                <br /> Associate)
                            </>
                        }
                        company='Cisco'
                        classes={'mt-2 sm:mt-12'}
                    />
                    <CertificationCard
                        imageData={dataAboutUs.kubernetesAdministrator.childImageSharp.gatsbyImageData}
                        titleSm={
                            <>
                                Certified <br /> Kubernetes Administrator
                            </>
                        }
                        titleLg={
                            <>
                                Certified <br /> Kubernetes <br /> Administrator
                            </>
                        }
                        company='CNCF'
                        classes={'mt-2 sm:mt-12'}
                    />
                </Row>
            </Container>
            <Container>
                <Section>
                    <div className='pb-12'>
                        <Row>
                            <div className='col-span-12'>
                                <h2 className='font-semibold font-montserrat text-blue sm:text-3xl text-4xl leading-normal mb-6 text-center'>
                                    Join the Team
                                </h2>
                            </div>
                            <div className='col-span-12 flex justify-center'>
                                <Link
                                    to='/careers/'
                                    css={css`
                                        padding: 0.625rem 2.5rem;
                                    `}
                                    className='mx-auto bg-gradient-to-r from-[#0F26AA] to-[#FF4A56] hover:from-[#FF4A56] hover:to-[#0F26AA] block font-medium rounded text-white uppercase text-center no-underline hover:no-underline max-w-sm lg:inline-block font-hind'
                                >
                                    See our open positions
                                </Link>
                            </div>
                        </Row>
                    </div>
                </Section>
            </Container>
        </Layout>
    );
};

export default AboutUs;
