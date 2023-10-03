import React, { useState, useRef, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Row } from '../atoms/Containers';
import arrow from '../../assets/images/arrow-left-white.svg';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { css } from 'twin.macro';

export default function Faqs({ qas }) {
    const [active, setActive] = useState(null);
    const [heights, setHeights] = useState({});
    const contentRefs = useRef([]);

    useEffect(() => {
        const newHeights = qas(true).map((_, i) => contentRefs.current[i]?.scrollHeight || 0);
        setHeights(newHeights);
        //eslint-disable-next-line
    }, [contentRefs]);

    return (
        <div className='max-w-xl lg:max-w-full mx-auto lg:mx-0'>
            <Helmet>
                <script type='application/ld+json' data-rh='true'>
                    {`
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": ${JSON.stringify(
                    qas(false).map((qa, index) => ({
                        '@type': 'Question',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: ReactDOMServer.renderToStaticMarkup(qa.answer)
                        },
                        name: qa.question
                    }))
                )}
            }
        `}
                </script>
            </Helmet>

            <h2 className='font-semibold text-3xl leading-normal mb-6 font-montserrat text-blue'>
                Frequently asked questions
            </h2>
            <Row>
                {qas(true).map((q, key) => (
                    <div className='col-span-12 lg:col-span-8 mb-0 p-4 rounded-md relative' key={key}>
                        <h3
                            className='font-semibold  text-base sm:text-lg mb-0 pl-8 leading-snug cursor-pointer select-none font-montserrat'
                            onClick={() => setActive((s) => (s === key ? null : key))}
                            role='presentation'
                            tabIndex={-1}
                            onKeyDown={() => {}}
                        >
                            {q.question}
                        </h3>
                        <div
                            ref={(el) => (contentRefs.current[key] = el)}
                            css={css`
                                overflow: hidden;
                                transition: max-height 0.4s ease;
                                max-height: ${active === key ? `${heights[key] / 16}rem` : '0rem'};
                            `}
                        >
                            <span>{q.answer}</span>
                        </div>
                        <button
                            onClick={() => setActive((s) => (s === key ? null : key))}
                            className='rounded-full w-6 h-6 pt-px flex items-center justify-center absolute top-4 left-4 hover:opacity-80 transition-opacity'
                            css={css`
                                background-color: #b4b7bd;
                            `}
                        >
                            <img
                                className={classNames('transform transition-all', {
                                    '-rotate-90': active !== key,
                                    'rotate-90': active === key
                                })}
                                src={arrow}
                                alt='decoration'
                                width={12}
                                height={12}
                                loading='lazy'
                            />
                        </button>
                    </div>
                ))}
            </Row>
        </div>
    );
}
