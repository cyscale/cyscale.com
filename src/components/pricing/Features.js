import { map } from 'lodash';
import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';
import { Switch } from '../Switch';
import Column from './Column';
import FeatureTd from './FeatureTd';

const Title = styled.h2`
    margin-top: 0;
    margin-right: auto;
    font-size: ${theme.fontSize(18)};
    padding: 0 ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};

    @media (max-width: ${theme.bp.lg}) {
        margin-right: unset;
    }
`

const YearlySwitch = styled.div`
    display: flex;
    margin-bottom: auto;
    align-items: center;
    padding: 0 ${theme.spacing(2)};
    color: ${theme.palette.black60};
    font-size: ${theme.fontSize(14)};

    & > span:first-child {
        margin-right: ${theme.spacing(1)};
        ${({ yearly }) => !yearly && `color: ${theme.palette.primary}`};
    }

    & > span:last-child {
        margin-left: ${theme.spacing(1)};
        ${({ yearly }) => yearly && `color: ${theme.palette.primary}`};
    }

    @media (max-width: ${theme.bp.lg}) {
        justify-content: center;
    }
`

const FeatureNames = styled.div`
    @media (max-width: ${theme.bp.lg}) {
        display: none;
    }
`

export default function Features({ onChange, yearly, features }) {
    return (
        <Column pickCol>
            <Title>Pick your plan</Title>
            <YearlySwitch yearly={yearly}>
                <span>Monthly</span>
                <Switch onChange={onChange} />
                <span>Annual (discount)</span>
            </YearlySwitch>
            <FeatureNames>
                {map(features, ({ name }, key) => (
                    <FeatureTd key={key} isFirst={key === 0}>
                        <p>{name}</p>
                    </FeatureTd>
                ))}
            </FeatureNames>
        </Column>
    )
}
