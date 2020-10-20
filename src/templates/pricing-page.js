import { graphql } from 'gatsby';
import { map } from 'lodash';
import React, { useState } from 'react';
import { Container } from 'react-grid-system';
import styled from 'styled-components';

import Divider from '../components/Divider';
import Layout from '../components/Layout';
import Features from '../components/pricing/Features';
import Plan from '../components/pricing/Plan';
import Waves from '../components/Waves';
import theme from '../utils/theme';

const Root = styled.section`
    position: relative;
`
const BG = styled.div`
    z-index: -1;
    min-height: 400px;
    position: relative;
    background: ${theme.palette.deepOcean};

    @media (max-width: ${theme.bp.lg}) {
        min-height: 300px;
    }
`

const Title = styled.h1`
    margin: 0;
    text-align: center;
    color: ${theme.palette.white};
    margin-bottom: ${theme.spacing(1)};
`
const Subheading = styled.p`
    text-align: center;
    color: ${theme.palette.white};
`

const Content = styled.div`
    display: flex;
    position: relative;
    top: ${theme.spacing(-24)};
    border-radius: ${theme.radius};
    box-shadow: 0 8px 16px 0 rgba(59, 116, 168, 0.2);

    @media (max-width: ${theme.bp.lg}) {
        top: 0;
        box-shadow: none;
        flex-direction: column;
        padding-bottom: ${theme.spacing(8)};
    }
`

export function PricingPageTemplate({ plans, features, title, heading, subheading }) {
    const [yearly, setYearly] = useState(false)

    return (
        <Root>
            <BG>
                <Container>
                    <Divider spacing={4} />
                    <Title>{heading}</Title>
                    <Subheading>{subheading}</Subheading>
                </Container>
                <Waves />
            </BG>
            <Container>
                <Content>
                    <Features onChange={() => setYearly(!yearly)} yearly={yearly} features={features} />
                    {map(plans, (item, key) => (
                        <Plan {...item} yearly={yearly} features={features} />
                    ))}
                </Content>
            </Container>
        </Root>
    )
}

function PricingPage({ data }) {
    const { markdownRemark: post } = data
    const { plans, features, title, heading, subheading, featured, cta } = post.frontmatter

    return (
        <Layout title={title}>
            <PricingPageTemplate
                cta={cta}
                title={title}
                plans={plans}
                heading={heading}
                features={features}
                featured={featured}
                subheading={subheading}
            />
        </Layout>
    )
}

export default PricingPage

export const pricingPageQuery = graphql`
    query PricingPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                heading
                subheading
                plans {
                    name
                    description
                    basePrice
                    offerPrice
                    billing
                    type
                    featured
                    cta {
                        link
                        label
                        extern
                    }
                }
                features {
                    name
                    category
                    description
                    community
                    business
                    pro
                }
            }
        }
    }
`
