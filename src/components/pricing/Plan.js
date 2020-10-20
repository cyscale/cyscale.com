import { filter, map } from 'lodash';
import React, { useState } from 'react';
import { useScreenClass } from 'react-grid-system';
import styled from 'styled-components';

import check from '../../img/check-circle-solid.svg';
import theme from '../../utils/theme';
import { Anchor, Link } from '../Anchor';
import Column from './Column';
import FeatureTd from './FeatureTd';

const Title = styled.h2`
    margin-top: 0;
    font-size: ${theme.fontSize(18)};
    padding: 0 ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};
`

const Description = styled.p`
    margin-bottom: auto;
    padding: 0 ${theme.spacing(2)};
    font-size: ${theme.fontSize(14)};
`

const Price = styled.p`
    color: ${theme.palette.black};
    height: ${theme.spacing(8)};
    font-size: ${theme.fontSize(40)};
    & > span {
        font-size: ${theme.fontSize(24)};
        display: inline-block;
        text-indent: -${theme.spacing(3)};
        vertical-align: top;
    }
`

const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0 ${theme.spacing(2)};
    min-height: ${theme.spacing(24)};

    @media (max-width: ${theme.bp.lg}) {
        min-height: ${theme.spacing(20)};
    }
`

const CtaExtern = styled(Anchor)`
    margin-top: auto;
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};
`

const CtaIntern = styled(Link)`
    margin-top: auto;
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};
`
const Check = styled.span`
    margin: auto;
    text-align: center;
    color: ${theme.palette.primary};

    @media (max-width: ${theme.bp.lg}) {
        margin-left: auto;
        margin-right: unset;
    }
`

const FeatureNames = styled.div`
    height: 0;
    overflow: hidden;
    margin-top: ${theme.spacing(7)};
    ${({ open }) => open && `height: unset; overflow: unset;`}

    @media (max-width: ${theme.bp.lg}) {
       margin-top: 0;

       & > * {
        opacity: 0;
        transition: opacity .3s ease-in;
        ${({ open }) => open && `opacity: 1;`}
    }
    }
`

const ToggleFeatures = styled.span`
    cursor: pointer;
    font-weight: 600;
    align-self: center;
    text-transform: uppercase;
    padding: 0 ${theme.spacing(2)};
    margin-top: ${theme.spacing(4)};
    color: ${theme.palette.primary};
    font-size: ${theme.fontSize(12)};
    margin-bottom: ${theme.spacing(4)};
`

export default function Plan({
    name,
    description,
    basePrice,
    offerPrice,
    type,
    featured,
    billing,
    cta,
    yearly,
    features,
}) {
    const screenClass = useScreenClass()
    const [featuresOpen, setFeaturesOpen] = useState(featured)
    const isMobile = ['xs', 'sm', 'md'].includes(screenClass)
    const filteredFeatures = isMobile ? filter(features, (item) => item[type] !== 'none') : features

    return (
        <Column featured={featured}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <PriceWrapper>
                <Price>
                    {basePrice !== 0 && <span>€</span>}
                    <strong>{!yearly ? basePrice || 'Free' : offerPrice || 'Free'}</strong>
                </Price>
                {billing && <small>{billing}</small>}
            </PriceWrapper>
            {cta.extern ? (
                <CtaExtern
                    href={cta.link}
                    target='_blank'
                    border={!featured}
                    contained={featured}
                    rel='noopener noreferrer'
                >
                    {cta.label}
                </CtaExtern>
            ) : (
                <CtaIntern to={cta.link} border={!featured} contained={featured}>
                    {cta.label}
                </CtaIntern>
            )}
            {isMobile && (
                <ToggleFeatures onClick={() => setFeaturesOpen(!featuresOpen)}>
                    {featuresOpen ? 'Hide' : 'Show'} features
                </ToggleFeatures>
            )}
            <FeatureNames open={isMobile ? featuresOpen : true}>
                {map(filteredFeatures, (item, key) => (
                    <FeatureTd key={key} order={key} isFirst={key === 0}>
                        {isMobile && <p>{item.name}</p>}
                        <Check>
                            {item[type] === 'check' && <img alt='check icon' src={check} height='16px' width='16px' />}
                            {item[type] !== 'check' && item[type] !== 'none' && item[type]}
                        </Check>
                    </FeatureTd>
                ))}
            </FeatureNames>
        </Column>
    )
}
