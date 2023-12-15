import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Original from '../../components/campaigns/cspm-solution/Original';

const CSPMSolution = ({ location }) => {
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

    return <Original location={location} data={data} />;
};

export default CSPMSolution;
