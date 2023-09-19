import React from 'react';
import { Container, Row, Section } from '../../components/atoms/Containers';
import Layout from '../../components/layout/CleanLayout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import GradientButton from '../../components/buttons/GradientButton';
import LinksAndWhitepaper from '../../components/products/LinksAndWhitepaper';
import { css } from 'twin.macro';
import IconId from '../../assets/images/id-icon-okta.svg';
import IconIdentity from '../../assets/images/identity-icon-okta.svg';
import IconCompliance from '../../assets/images/compliance-icon-okta.svg';
import { IAMTopArticles } from '../../common/links';

const subtitleColor = css`
    color: #079bee;
`;

const cartTitleSize = css`
    font-size: 1.375rem;
`;

const cardTextColor = css`
    color: #4f5765;
`;

const subtitleFontSize = css`
    font-size: 1.625rem;
    line-height: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

const OktaCyscaleIntegration = ({ location }) => {
    const data = useStaticQuery(graphql`
        query OktaQuery {
            heroImage: file(relativePath: { eq: "okta-hero.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 500, layout: FIXED)
                }
            }
            heroImageMobile: file(relativePath: { eq: "okta-cyscale-icon.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 180, layout: FIXED)
                }
            }
            card: file(relativePath: { eq: "csm-whitepaper-bluebird.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 386, layout: FIXED)
                }
            }
        }
    `);

    return (
        <Layout
            location={location}
            pageName='OktaIntegration'
            title='Integrate Okta + Cyscale | Simple Cloud Security'
            description='See how Cyscale + Okta integration strengthens your cloud Identity and Access Management strategy'
        >
            <div className='hidden' data-template-key>
                hardcoded-pages
            </div>
            <div className='hidden' data-permalink>
                /use-cases/okta-cyscale-integration/
            </div>
            <div className='hidden' data-title>
                Integrate Okta + Cyscale | Simple Cloud Security
            </div>
            <div className='hidden' data-description>
                See how Cyscale + Okta integration strengthens your cloud Identity and Access Management strategy
            </div>
            <div className='hidden' data-category>
                solutions
            </div>
            <div style={{ backgroundColor: '#eeeeee' }}>
                <Container>
                    <Row>
                        <div className='col-span-12 lg:col-span-6 order-last lg:order-first lg:mt-28'>
                            <div className='lg:mt-16 pt-4 max-w-xl mx-auto lg:mx-0'>
                                <h1 className='font-bold font-montserrat text-left text-4xl lg:text-5xl leading-normal lg:leading-normal text-primary mb-10'>
                                    Integrate OKTA <br />
                                    with Cyscale
                                </h1>
                                <p className='text-left text-base lg:text-lg mb-6 leading-relaxed font-hind'>
                                    Identity & Access Management is the new perimeter. Your cloud is only as safe as
                                    your IAM security posture, since your cloud attack surface is impacted by the way
                                    you’ve configured or misconfigured your identities.
                                </p>
                                <p className='text-left text-base lg:text-lg leading-relaxed font-hind'>
                                    Onboard your Okta account into Cyscale and get full visiblity over identities in
                                    your organization and cloud permissions, along with a contextual analysis of access,
                                    cloud assets and sensitive data to reveal toxic combinations that put your
                                    organization at risk.
                                </p>
                                <div className='flex mt-8 justify-start mb-20'>
                                    <Link to='/request-demo/'>
                                        <GradientButton text='BOOK A DEMO' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='block lg:hidden mt-28 max-w-xl mx-auto'>
                                <GatsbyImage image={data.heroImageMobile.childImageSharp.gatsbyImageData} alt='' />
                            </div>
                            <div className='relative hidden lg:block'>
                                <div className='mt-48 xl:ml-24'>
                                    <div className='hidden lg:block lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl'>
                                        <GatsbyImage image={data.heroImage.childImageSharp.gatsbyImageData} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div
                css={css`
                    background: linear-gradient(0deg, #e9eef6 0%, #fff 100%), #e9eef6;
                `}
            >
                <Container>
                    <Section>
                        <p className='font-montserrat font-bold text-center' css={subtitleColor}>
                            LEVERAGE THE BEST SECURITY TOOLS FOR
                            <br /> CLOUD-NATIVE APPLICATIONS
                        </p>
                        <h2 className='font-montserrat font-bold text-blue text-center mt-8' css={subtitleFontSize}>
                            How the Cyscale + Okta integration helps you strengthen
                            <br /> your cloud Identity and Access Management strategy
                        </h2>
                        <Row className='mt-20'>
                            <div className='col-span-12 lg:col-span-4 py-6 px-7 bg-white rounded-2xl mx-auto lg:mx-0 max-w-xl lg:max-w-xl'>
                                <img src={IconId} alt='' />
                                <h3 className='font-montserrat font-bold text-blue mt-4' css={cartTitleSize}>
                                    Contextual visibility over identities
                                </h3>
                                <p className='font-hind text-base mt-6' css={cardTextColor}>
                                    By connecting your Okta account to Cyscale, you gain visibility over your users and
                                    their effective permissions across your cloud accounts. We correlate highly
                                    privileged Okta Identities with business-critical cloud assets, giving accurate
                                    insights of risk in Identity and Access Management (IAM).
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-4 py-6 px-7 bg-white rounded-2xl mx-auto lg:mx-0 max-w-xl lg:max-w-xl'>
                                <img src={IconIdentity} alt='' />
                                <h3 className='font-montserrat font-bold text-blue mt-4' css={cartTitleSize}>
                                    Identity & Access Management security insights
                                </h3>
                                <p className='font-hind text-base mt-6' css={cardTextColor}>
                                    Cyscale looks at Okta assets such as users, groups, applications, and assignments,
                                    and is able to provide security recommendations for your Okta account aligned with
                                    best practices such as: configuring MFA, separation of duties, least privilege,
                                    strong password policies and many others.
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-4 py-6 px-7 bg-white rounded-2xl mx-auto lg:mx-0 max-w-xl lg:max-w-xl'>
                                <img src={IconCompliance} alt='' />
                                <h3 className='font-montserrat font-bold text-blue mt-4' css={cartTitleSize}>
                                    Compliance with standards and Identity Policies
                                </h3>
                                <p className='font-hind text-base mt-6' css={cardTextColor}>
                                    Identity and Access Management (IAM) is a vital area in all security frameworks and
                                    standards. They require companies to have healthy access policies in place, guided
                                    by the least privilege principle, and to demonstrate that policies are enforced
                                    across systems in scope. Cyscale helps you achieve this by mapping Okta security
                                    controls to compliance standards and policies and tracking drifts.
                                </p>
                            </div>
                        </Row>
                    </Section>
                </Container>
            </div>
            <Container>
                <Section>
                    <div
                        className='py-24 flex flex-col items-center rounded-2xl'
                        css={css`
                            background-image: linear-gradient(90deg, #0f26aa -1.79%, #ff4a56 165.6%);
                        `}
                    >
                        <h2 className='text-white font-montserrat text-base text-center'>
                            Identity & Access Management security
                            <br /> See Cyscale and Okta in action
                        </h2>

                        <Link
                            to={'/request-demo/'}
                            className='bg-white text-base font-medium rounded mt-8 hover:bg-transparent font-hind'
                            css={css`
                                padding: 0.625rem 2.5rem;
                                border: thin solid #ffffff;
                                color: #0f26aa;

                                &:hover {
                                    color: #ffffff;
                                }
                            `}
                        >
                            BOOK A DEMO
                        </Link>
                    </div>
                </Section>
            </Container>
            <LinksAndWhitepaper
                topArticles={IAMTopArticles}
                data={data}
                title={'IAM'}
                titleCard={'The Complete Guide<br class="hidden lg:block" /> to Cloud Storage Misconfigurations'}
                textCard={
                    'This guide helps CIOs, CISOs and security staff to understand the risk & dangers of data security breaches and the importance of a secure cloud storage infrastructure.'
                }
                linkCard={'/whitepaper/cloud-storage-misconfigurations/'}
                misconfigurationWhitepaper={true}
            />
        </Layout>
    );
};

export default OktaCyscaleIntegration;
