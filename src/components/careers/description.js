import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
const workTypes = {
    hybrid: 'Hybrid (Remote or in Office)',
    remote: 'Only Remote',
    'in-office': 'Only in Office'
};
const employmentTypes = {
    'full-time': 'Full Time (8h)',
    'part-time': 'Part Time (4h)',
    contract: 'As contractor'
};

const Description = ({ data }) => {
    return (
        <div>
            <div className='max-w-7xl jobs m-auto px-8 mt-12'>
                {data.frontmatter.disabled && (
                    <div className='shadow-lg rounded-lg p-6 text-gray'>
                        This job is disabled. Please check the list of{' '}
                        <Link className='text-primary' to='/careers'>
                            available jobs
                        </Link>
                        .
                    </div>
                )}
                <div className='shadow-lg bg-white rounded-lg p-6 mt-6'>
                    <ul>
                        {data.frontmatter.location && <li>Job location: {data.frontmatter.location}</li>}
                        {data.frontmatter.workType && <li>Work type: {workTypes[data.frontmatter.workType]}</li>}
                        {data.frontmatter.department && <li>Department: {data.frontmatter.department}</li>}
                        {data.frontmatter.employmentType && (
                            <li>Employment type: {employmentTypes[data.frontmatter.employmentType]}</li>
                        )}
                        {data.frontmatter.skills && <li>Skills: {data.frontmatter.skills}</li>}
                        {data.frontmatter.experience && <li>Experience: {data.frontmatter.experience}</li>}
                    </ul>
                </div>
                <p className='text-2xl uppercase mb-50px text-blue leading-8'>{data.title}</p>
                <ReactMarkdown skipHtml={true}>{data && data?.rawMarkdownBody}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Description;
