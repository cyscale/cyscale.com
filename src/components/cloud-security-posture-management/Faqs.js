import { Link } from 'gatsby';
import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Row } from '../atoms/Containers';
import arrow from '../../assets/images/arrow-left-white.svg';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { css } from 'twin.macro';

const qas = (useReactComponent) => {
    return [
        {
            question: 'What is a Cloud Security Posture Management (CSPM) tool?',
            answer: (
                <>
                    <p className='mb-4'>
                        CSPM is a group of security tools and technologies that empower security users to identify and
                        remediate risk and misconfigurations in their cloud environments.
                    </p>
                    {useReactComponent ? (
                        <Link className='underline' to='/blog/cloud-security-posture-management-cspm-guide/'>
                            Read more in our guide
                        </Link>
                    ) : (
                        <a href='https://cyscale.com/blog/cloud-security-posture-management-cspm-guide/'>
                            Read more in our guide
                        </a>
                    )}
                    .
                </>
            )
        },
        {
            question: 'What are some key capabilities of a CSPM solution?',
            answer: (
                <ul className='list-disc ml-3 pl-3'>
                    <li className='mb-4'>
                        Continuous compliance monitoring of your cloud resources, so you can identify and remediate risk
                        in areas such as storage, encryption, and permissions
                    </li>
                    <li className='mb-4'>
                        Technical security controls and visibility over IAM (Identity and Access Management)
                        configuration, to help provide risk assessment and ensure that compliance standards are met
                    </li>
                    <li className='mb-4'>
                        Easily identify risks that could compromise your cloud network across cloud providers, such as
                        GCP (Google Cloud), AWS and Microsoft Azure
                    </li>

                    <li>
                        Remediation guidance, to quickly solve misconfigurations leading to compliance violations for
                        Saas (Software as a Service), Iaas (Infrastructure as a Service) and Paas (Platform as a
                        Service)
                    </li>
                </ul>
            )
        },
        {
            question: 'What are some benefits of utilizing a CSPM tool?',
            answer: (
                <>
                    <p className='mb-4'>
                        <strong className='text-base'>
                            Visibility into your company's cloud infrastructure and security configurations.
                        </strong>
                        <br />
                        Security teams can assess posture across multiple cloud environments and accounts through a
                        centralized dashboard that can give actionable metrics.
                    </p>
                    <p className='mb-4'>
                        <strong className='text-base'>Evidence.</strong>
                        <br />
                        Violations in your cloud infrastructure are mapped to regulatory standards, security frameworks,
                        as well as internal security policies, resulting in evidence collection that enables audits.
                    </p>
                    <p className='mb-4'>
                        <strong className='text-base'>Reporting and alerting.</strong>
                        Insights on your cloud's risk posture, as well as alerts and notifications bring risk to your
                        attention, enabling investigation and in-time remediation.
                    </p>
                    <p className='mb-4'>
                        <strong className='text-base'>Automation.</strong>
                        One of the most important features of a CSPM tool. Automated remediation, helps security teams
                        reduce the time and effort required by manual remediation, at the same time enabling evidence
                        collection.
                    </p>
                    {useReactComponent ? (
                        <Link className='underline' to='/blog/cloud-security-posture-management-cspm-guide/'>
                            Read more in our guide
                        </Link>
                    ) : (
                        <a href='https://cyscale.com/blog/cloud-security-posture-management-cspm-guide/'>
                            Read more in our guide
                        </a>
                    )}
                    .
                </>
            )
        }
    ];
};

export default function Faqs() {
    const [active, setActive] = useState(0);

    return (
        <div className='max-w-xl lg:max-w-full mx-auto lg:mx-0'>
            <Helmet>
                <script type='application/ld+json' data-rh='true'>{`{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": ${JSON.stringify(ReactDOMServer.renderToStaticMarkup(qas(false)[0].answer))}
                                },
                                "name": "${qas(false)[0].question}"
                            },
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": ${JSON.stringify(ReactDOMServer.renderToStaticMarkup(qas(false)[1].answer))}
                                },
                                "name": "${qas(false)[1].question}"
                            },
                            {
                                "@type": "Question",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": ${JSON.stringify(ReactDOMServer.renderToStaticMarkup(qas(false)[2].answer))}
                                },
                                "name": "${qas(false)[2].question}"
                            }
                        ]
                    }`}</script>
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
                        <p className={classNames('mt-4', { block: active === key, hidden: active !== key })}>
                            {q.answer}
                        </p>
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
                            />
                        </button>
                    </div>
                ))}
            </Row>
        </div>
    );
}
