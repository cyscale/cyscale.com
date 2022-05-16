import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Row } from '../atoms/Containers';
import arrow from '../../assets/images/arrow-left.svg';
import classNames from 'classnames';

const qas = [
    {
        question: 'What is a Cloud Security Posture Management (CSPM) tool?',
        answer: (
            <>
                <p className='mb-4'>
                    CSPM is a group of security tools and technologies that empower security users to identify and
                    remediate risk and misconfigurations in their cloud environments.
                </p>
                <Link className='underline' to='/blog/cloud-security-posture-management-cspm-guide/'>
                    Read more in our guide
                </Link>
                .
            </>
        )
    },
    {
        question: 'What are some key capabilities of a CSPM solution?',
        answer: (
            <ul className='list-disc ml-3 pl-3'>
                <li className='mb-4'>
                    Continuous compliance monitoring of your cloud resources, so you can identify and remediate risk in
                    areas such as storage, encryption, and permissions
                </li>
                <li className='mb-4'>
                    Policy-based definitions and consistent enforcement of who can access what data to help reduce risk
                    and ensure that compliance standards are met.
                </li>
                <li className='mb-4'>
                    Security and threat detection to identify risks that could compromise your cloud network
                </li>

                <li>Remediation, to immediately and intuitively identify risk and resolve compliance violations</li>
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
                    Security teams can assess across multiple cloud environments and accounts while providing it through
                    a centralized dashboard that can give actionable metrics and training behaviors.
                </p>
                <p className='mb-4'>
                    <strong className='text-base'>Evidence.</strong>
                    <br />
                    Provided by the mapping of your cloud's infrastructure to regulatory standards, security control
                    frameworks, as well as internal security policies to help maintain your cloud's compliance.
                </p>
                <p className='mb-4'>
                    <strong className='text-base'>Reporting and alerting.</strong>
                    Insights on your cloud's risk posture, as well as the alerting notifications, brought to your
                    attention to identifying risks to enable investigations or remediation done as soon as possible
                </p>
                <p className='mb-4'>
                    <strong className='text-base'>Automation.</strong>
                    One of the most important features of a CSPM tool. Automated remediation, helps security teams
                    reduce the time and effort required for manual remediation, as well as evidence gathering.
                </p>
                <Link className='underline' to='/blog/cloud-security-posture-management-cspm-guide/'>
                    Read more in our guide
                </Link>
                .
            </>
        )
    }
];

export default function Faqs() {
    const [active, setActive] = useState(0);

    return (
        <div>
            <h2 className='font-semibold  text-3xl leading-normal text-white mb-6'>Frequently asked questions</h2>
            <Row>
                {qas.map((q, key) => (
                    <div
                        className='col-span-12 lg:col-span-8 mb-0 bg-white bg-opacity-40 p-4  rounded-md relative'
                        key={key}
                    >
                        <h3 className='font-semibold  text-base sm:text-lg text-white mb-0 pl-8 leading-snug'>
                            {q.question}
                        </h3>
                        <p className={classNames('text-white mt-4', { block: active === key, hidden: active !== key })}>
                            {q.answer}
                        </p>
                        <button
                            onClick={() => setActive((s) => (s === key ? null : key))}
                            className='bg-white rounded-full w-6 h-6 pt-px flex items-center justify-center absolute top-4 left-4 hover:opacity-80 transition-opacity'
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
