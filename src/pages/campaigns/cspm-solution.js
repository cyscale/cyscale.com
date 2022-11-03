import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Original from '../../components/campaigns/cspm-solutin/Original';
import Variant from '../../components/campaigns/cspm-solutin/Variant';

const CSPMSolution = ({ location }) => {
    const [isExperimentLoaded, setIsExperimentLoaded] = useState(false);
    const [experimentType, setExperimentType] = useState('0');

    const data = useStaticQuery(graphql`
        query CSPMSolutionCampaignQuery {
            dashboard: file(relativePath: { eq: "dashboard-cspm-solution.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            alerts: file(relativePath: { eq: "alerts-cspm-solution.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            policies: file(relativePath: { eq: "policies-cspm-solution.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
            dash: file(relativePath: { eq: "video-thumbnail.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 300, layout: CONSTRAINED)
                }
            }
        }
    `);

    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'optimize.activate' });
        if (window && window.dataLayer && !isExperimentLoaded) {
            window.dataLayer.push({
                event: 'cpsm-solution-as-many-per-session',
                eventCallback: () => {
                    const experimentType =
                        window.google_optimize && window.google_optimize.get('URs5J6UKRtaSq2Adtp2hRQ');
                    if (experimentType) {
                        setExperimentType(experimentType);
                        setIsExperimentLoaded(true);
                    }
                }
            });
        }
    }, []);

    return (
        <>
            {experimentType === '0' && isExperimentLoaded && <Original location={location} data={data} />}
            {experimentType === '1' && isExperimentLoaded && <Variant location={location} data={data} />}
        </>
    );
};

export default CSPMSolution;
