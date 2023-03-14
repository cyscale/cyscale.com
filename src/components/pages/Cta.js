import React from 'react';
import { Container } from '../atoms/Containers';
import cloudIcon from '../../assets/images/cloud-icon.svg';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Cta = ({ markdown }) => {
    return (
        <Container>
            <div className='md:pt-12 pb-24'>
                <div className='flex h-48 flex-col items-center'>
                    <img src={cloudIcon} alt='' />
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} linkTarget='_blank'>
                        {markdown}
                    </ReactMarkdown>
                    <p>Start seeing value & saving money in minutes</p>
                    <div className='mt-10 w-auto inline-block'>
                        <Link
                            className='gradientBgBtn w-full block text-sm font-medium rounded text-white text-center py-4 px-12 hover:no-underline no-underline'
                            to='/request-demo'
                        >
                            Request Live Demo
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Cta;
