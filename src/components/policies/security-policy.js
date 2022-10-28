import React from 'react';
import heroBG from '../../assets/images/privacy&blog-bg.svg';
import NewTopNav from '../layout/NewTopNav';

const Index = ({ location, pageName }) => {
    return (
        <>
            <div>
                <div
                    className={`w-full ContactUs bg-lightGreyEEE bg-cover bg-no-repeat`}
                    style={{ backgroundImage: `url(${heroBG})` }}
                >
                    <NewTopNav location={location} pageName={pageName} />
                    <div className='max-w-1366px mx-auto pt-72 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                        <div className='flex'>
                            <div className='mx-auto w-full xl:w-2/4'>
                                <h1 className='font-semibold text-34px text-blue leading-normal otherPages sectionTitle'>
                                    Security Policy
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-1366px mx-auto mt-88px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px'>
                    <div className='flex'>
                        <div className='mx-auto w-full xl:w-2/4 text-16px font-bold tetx-black leading-normal'>
                            <h2 className='font-semibold mb-36px text-24px'>
                                This Security Policy applies only to your data on <strong> Cyscale</strong> Platform.
                            </h2>
                            <h2 className='font-semibold mb-36px text-24px'>Data Safety</h2>
                            <p className='mb-36px'>
                                All <strong> Cyscale Platform</strong> data is hosted on Microsoft Azure cloud. We 
                                take advantage of all the security and privacy features Microsoft Azure provides, plus 
                                our team takes additional pro-active measures to maintain a secure infrastructure and 
                                make sure there are always multiple backups for infrastructure disaster recovery purposes 
                                (though we can't offer backup in case of user made errors on a per account basis). 
                                For more specific details regarding how Microsoft Azure keeps data secure, please refer to{' '}
                                <a
                                    href='https://azure.microsoft.com/en-us/explore/trusted-cloud/privacy/'
                                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                                    rel='noreferrer'
                                    target='_blank'
                                >
                                    https://azure.microsoft.com/en-us/explore/trusted-cloud/privacy/
                                </a>
                                . We don't publicize exactly what features, services, and data center we use for
                                security reasons, but we can give you a brief overview of how we make sure your data is
                                safe. We recommend you also review our Terms of Use and Privacy Policy.
                            </p>
                            <h2 className='font-semibold mb-36px text-24px'>Data center Security</h2>
                            <p className='mb-36px'>
                                Microsoft Azure maintains an impressive list of reports, certifications, and independent assessments 
                                to ensure complete and ongoing state-of-the-art data center security. They have many years of 
                                experience in designing, constructing, and operating large-scale data centers, which makes them 
                                the industry standard when it comes to security. The exact physical location of the data center 
                                that stores <strong>Cyscale Platform's</strong> data is private. Only required personnel within Microsoft are 
                                authorized to access Microsoft data centers. Additionally, data centers are secured with a variety 
                                of physical controls to prevent unauthorized access. For more specific details regarding data center security, 
                                please refer to{' '}
                                <a
                                    href='https://learn.microsoft.com/en-us/compliance/assurance/assurance-datacenter-security'
                                    className='text-blue underline text-16px hover:no-underline hover:text-red'
                                    rel='noreferrer'
                                    target='_blank'
                                >
                                    https://learn.microsoft.com/en-us/compliance/assurance/assurance-datacenter-security
                                </a>
                            </p>
                            <h2 className='font-semibold mb-36px text-24px'>Cloud Infrastructure Security</h2>
                            <p className='mb-36px'>
                                <strong>Cyscale Platform’s</strong> cloud infrastructure is hosted in a fully redundant, secure environment, with strictly 
                                controlled access using role-based access management and restrictions applied following the principle of least
                                privilege. In addition, we leverage security features from the cloud provider such as firewall protection, 
                                making sure that only necessary ports are open to the outside network. 
                            </p>
                            <h2 className='font-semibold mb-36px text-24px'>Application Security</h2>
                            <p className='mb-36px'>
                                All data to and from <strong>Cyscale Platform</strong> is sent securely over HTTPS. The
                                initial connection is established over 2048 bit TLS, and the rest of the communication
                                happens over 256 bit SSL. This is the standard technology for keeping an internet
                                connection secure and prevents anyone from reading and modifying any information. Any
                                data transferred between a user and <strong> Cyscale</strong> Platform is impossible to
                                read or modify. We use the same level of encryption as do banks and financial
                                institutions. All data is encrypted using SHA256withRSA algorithms, which scramble data
                                in transit, preventing hackers from reading it. Your company-specific data inside{' '}
                                <strong>Cyscale Platform</strong> is kept separate through a logical separation at the
                                data tier, based on application-level access permissions and roles you set up in your
                                workspaces. Passwords and other credentials are encrypted so the database doesn't store actual values. 
                            </p>
                            <h2 className='font-semibold mb-36px text-24px'>Operations Security</h2>
                            <p className='mb-36px'>
                                Our system is constantly monitored. We get reports in real time so we can instantly
                                react in case a potential issue arises. All actions taken on production consoles are
                                logged. We constantly monitor security, performance, and availability 24/7. We run
                                automated security testing on an ongoing basis. We prioritize, resolve, and deploy
                                discovered security issues quickly after discovery. Because we follow Continuous
                                Delivery and Deployment (CI/CD) best practices, we can update <strong>Cyscale Platform</strong>{' '}
                                on a daily basis and fix things as soon as we see them. We never access your
                                data in <strong> Cyscale</strong> Platform, unless required for support reasons and with
                                your explicit permission.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
