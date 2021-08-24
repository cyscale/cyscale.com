import React from 'react';
import Jobs from './jobs';
import Services from '../Home/services';
import ContactForm from './contactForm';
import { useStaticQuery, graphql } from 'gatsby';
const dataService = [
    {
        title: 'Remote Work since day 1',
        description1:
            'Cyscale has been operating as a Remote-first company since day 1, not after lockdowns and pandemics. We developed a remote work-friendly setup that ensures equality and inclusion but also provides guidance and growth opportunities.'
    },
    {
        title: 'Be part of the journey',
        description1:
            'We believe that a strong team is what makes or breaks a company. We are building Cyscale on a unique vision and we look for colleagues that share this vision - and we offer equity in return if they will have an impact on the company.'
    },
    {
        title: 'Competitive salaries and bonuses ',
        description1:
            'If you made the efforts to become a professional at what you are doing, we will definitely take the necessary steps to match your financial expectations and always feel appreciated also on this aspect.'
    }
];
const Index = () => {
    const data = useStaticQuery(graphql`
        query CareersQuery {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { templateKey: { eq: "career-page" } } }
            ) {
                nodes {
                    frontmatter {
                        date
                        description
                        permalink
                        icon
                        templateKey
                        title
                    }
                }
            }
        }
    `);

    let jobs = data.allMarkdownRemark.nodes;
    jobs = jobs.filter(({ frontmatter }) => frontmatter.templateKey === 'career-page');

    return (
        <div>
            <Services headingText='Why join us' sectionName='CSPMServices' data={dataService} />
            <Jobs data={jobs} />
            <ContactForm />
        </div>
    );
};

export default Index;
