import React from 'react';
import { Container } from '../atoms/Containers';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { GatsbyImage } from 'gatsby-plugin-image';

const LeftSection = ({ image, alt, subtitle, markdown, preview }) => {
    return (
        <Container>
            <div className='py-8 md:py-12 lg:py-20'>
                <div className='sm:grid sm:grid-cols-12 sm:gap-12'>
                    <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0  hidden lg:block'>
                        <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-2xl'>
                            {preview && <img src={image} alt={alt} />}
                            {!preview && <GatsbyImage alt='' image={image} />}
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                            <ReactMarkdown rehypePlugins={[rehypeRaw]} linkTarget='_blank'>
                                {subtitle}
                            </ReactMarkdown>
                        </div>
                        <div className='mx-auto lg:mx-0 max-w-xl lg:max-w-lg'>
                            <div className='blog-reset'>
                                <ReactMarkdown rehypePlugins={[rehypeRaw]} linkTarget='_blank'>
                                    {markdown}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 mt-8 sm:mt-0 block lg:hidden'>
                        <div className='mx-auto max-w-xl lg:mt-8 lg:mx-0 lg:max-w-2xl'>
                            {preview && <img src={image} alt={alt} />}
                            {!preview && <GatsbyImage alt={alt} image={image} />}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LeftSection;
