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
                    gatsbyImageData(width: 380, layout: CONSTRAINED)
                }
            }
        }
    `);

    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'optimize.activate' });
        if (window && !isExperimentLoaded) {
            if (window.google_optimize) {
                window.dataLayer.push({
                    event: 'cpsm-solution-campaign',
                    eventCallback: () => {
                        const experimentType = window.google_optimize.get('t5RUziexT6yX_516snKa-A');
                        if (experimentType) {
                            setExperimentType(experimentType);
                            setIsExperimentLoaded(true);
                        }
                    }
                });
            } else {
                setIsExperimentLoaded(true);
            }
        }

    }, [isExperimentLoaded]);

    return (
        <>
            {experimentType === '0' && isExperimentLoaded && <Original location={location} data={data} />}
            {experimentType === '1' && isExperimentLoaded && <Variant location={location} data={data} />}
        </>
    );
};

export default CSPMSolution;
