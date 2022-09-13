import React, { useEffect } from 'react';
import { Row, Container } from '../atoms/Containers';
import PostAuthor from './PostAuthor';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Categories from './Categories';
import Post from './Post';
import { map, filter, slice } from 'lodash';
import Share from '../Share/Share';
import { Link as ScrollLink } from 'react-scroll';
import { GatsbyImage as Img } from 'gatsby-plugin-image';
import cyscaleMan from '../../assets/images/cyscale-man.svg';
import arrowRight from '../../assets/images/arrow-right-1-white.svg';
import { Link } from 'gatsby';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function PostContent({ data, suggestions, preview = false, pageUri, pageName }) {
    const [emailInput, setEmailInput] = React.useState('');
    const [cookies] = useCookies();
    const [alert, setAlert] = React.useState(null);

    const onChange = (e) => {
        setEmailInput(e.target.value);
    };

    const isValidEmail = (email) => {
        const tester =
            /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        if (!email) return false;

        const emailParts = email.split('@');

        if (emailParts.length !== 2) return false;

        const account = emailParts[0];
        const address = emailParts[1];

        if (account.length > 64) return false;
        else if (address.length > 255) return false;

        const domainParts = address.split('.');
        if (
            domainParts.some(function (part) {
                return part.length > 63;
            })
        )
            return false;

        if (!tester.test(email)) return false;

        return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (emailInput === '') {
            return null;
        }

        if (!isValidEmail(emailInput)) {
            setAlert({ message: 'Please enter a valid email address.', alertClass: 'text-red' });
            return null;
        }

        let context;

        if (cookies.hubspotutk || cookies.hubspotutk === '') {
            context = {
                hutk: cookies.hubspotutk,
                pageName,
                pageUri
            };
        } else {
            context = {
                pageName,
                pageUri
            };
        }

        const data = {
            submittedAt: new Date().getTime(),
            fields: [
                {
                    objectTypeId: '0-1',
                    name: 'email',
                    value: emailInput
                }
            ],
            context,
            legalConsentOptions: {
                consent: {
                    consentToProcess: true,
                    text: 'I agree to allow Cyscale Company to store and process my personal data.',
                    communications: [
                        {
                            value: true,
                            subscriptionTypeId: 8270486,
                            text: 'I agree to receive marketing communications from Cyscale Company.'
                        }
                    ]
                }
            }
        };

        await axios
            .post(
                'https://api.hsforms.com/submissions/v3/integration/submit/5413427/428b1f63-f8fc-4bb0-bdd2-7243a829205a',
                data,
                {
                    headers: {
                        contentType: 'application/json'
                    }
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    setAlert({ message: "You're all set up!", alertClass: 'text-blue' });
                }
            })
            .catch((err) => {
                setAlert({ message: 'Something went wrong!', alertClass: 'text-red' });
            });

        setEmailInput('');
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit(e);
        }
    };

    useEffect(() => {
        if (alert) {
            const alertTimer = setTimeout(() => setAlert(null), 3000);
            return () => clearTimeout(alertTimer);
        }
    }, [alert]);

    return (
        <div>
            <div className='container max-w-4xl m-auto px-8 '>
                <div className='py-10  border-b border-lightGrey2 lg:border-0'>
                    <Row>
                        <div className='col-span-12 lg:col-span-6 flex flex-col justify-between'>
                            {data.categories && (
                                <div>
                                    <Categories categories={data.categories} />
                                </div>
                            )}
                            <h1 className='text-2xl my-4 font-medium'>{data.title}</h1>
                            {data.authors && <PostAuthor preview={preview} date={data.date} author={data.authors} />}
                        </div>
                        <div className='mt-8 lg:mt-0 col-span-12 lg:col-span-6'>
                            {!preview ? (
                                <Img
                                    image={data.featuredimage.childImageSharp.gatsbyImageData}
                                    className='rounded-lg overflow-hidden shadow-md'
                                    alt={data.title}
                                />
                            ) : (
                                <img src={data.featuredimage.publicURL} className='rounded-lg' alt={data.title} />
                            )}
                        </div>
                    </Row>
                </div>
                <div className='blog-reset'>
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        linkTarget='_blank'
                        components={{
                            toc({ node, className, children, ...props }) {
                                return (
                                    <ScrollLink className={className} {...props} smooth={true} duration={500}>
                                        {children}
                                    </ScrollLink>
                                );
                            },
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <div style={{ fontSize: '0.875rem' }}>
                                        <SyntaxHighlighter
                                            children={String(children).replace(/\n$/, '')}
                                            language={match[1]}
                                            PreTag='div'
                                            {...props}
                                        />
                                    </div>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            }
                        }}
                    >
                        {data.rawMarkdownBody}
                    </ReactMarkdown>
                </div>

                {!preview && (
                    <>
                        <div className='mx_auto mt-16'>
                            <div
                                className='grid grid-cols-12 gap-x-1 rounded-xl px-7 max-w-lg lg:max-w-full mx-auto'
                                style={{ backgroundColor: '#EEEEEE' }}
                            >
                                <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                    <div className='mt-2 lg:mt-0  max-w-lg lg:max-w-2xl mx-auto relative h-20 flex flex-col justify-center'>
                                        <p className='text-lg font-semibold'>Stay connected</p>
                                        <p className='text-sm'>
                                            Receive new blog posts and product updates from Cyscale
                                        </p>
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                    <div
                                        className={`mt-2 mb-8 lg:mt-0 max-w-lg ${
                                            alert ? 'lg:mb-0' : 'lg:mb-5'
                                        } lg:max-w-2xl mx-auto relative lg:h-16 flex flex-col lg:flex-row lg:items-end lg:px-0`}
                                    >
                                        <input
                                            type='email'
                                            id='email'
                                            className={`bg-gray-50 border-element-modal text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                                                alert ? 'mb-0' : 'mb-2'
                                            } lg:mb-0`}
                                            placeholder='Your email'
                                            onChange={onChange}
                                            value={emailInput}
                                            onKeyDown={onKeyDown}
                                        />
                                        {alert && (
                                            <p
                                                className={`${alert.alertClass} text-left text-xs inline-block lg:hidden py-2`}
                                            >
                                                {alert.message}
                                            </p>
                                        )}
                                        <button
                                            type='submit'
                                            className='text-white gradientBgBtn hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full lg:w-20 lg:ml-3 pb-2.5 pt-3'
                                            onClick={onSubmit}
                                        >
                                            <img src={arrowRight} className='mx-auto w-5 h-auto' alt='' />
                                        </button>
                                    </div>
                                    {alert && (
                                        <div className='hidden lg:block py-2'>
                                            <p className={`${alert.alertClass} text-xs`}> {alert.message}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto'>
                            <div className='grid grid-cols-12 gap-x-1 px-7 md:px-0 max-w-lg lg:max-w-full mx-auto'>
                                <div className='col-span-12 lg:col-span-6 lg:mx-0'>
                                    <div className='flex items-center '>
                                        <p className='text-sm mt-2'>Interesting? Share it</p>
                                        <div className='mt-2'>
                                            <Share
                                                title={data?.title}
                                                permalink={data?.permalink}
                                                description={data?.description}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto mt-24'>
                            <div className='grid grid-cols-12 gap-x-5'>
                                <div className='col-span-12 lg:col-span-8 lg:mx-0'>
                                    <div className='mt-6 lg:mt-0 rounded-xl  max-w-lg lg:max-w-2xl mx-auto relative bg-cta-playground h-64 sm:h-56 flex flex-col justify-center px-7'>
                                        <h1 className='text-white text-2xl mb-4 font-semibold'>Product Playground</h1>
                                        <p className='text-white text-md'>
                                            View a fully-populated product demo. All <br className='hidden sm:block' />{' '}
                                            features - no setup, no commitment.
                                        </p>
                                        <div className='mt-6 w-60 inline-block'>
                                            <a
                                                href={`https://app.cyscale.com/playground?source=${pageUri}`}
                                                className='w-full block font-medium rounded bg-white text-center py-3'
                                                target='_blank'
                                                rel='noopener noreferrer nofollow'
                                            >
                                                Access Playground
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-4 lg:mx-0'>
                                    <div className='mt-6 lg:mt-0 rounded-xl  max-w-lg lg:max-w-2xl mx-auto relative h-56 flex flex-col justify-center items-start px-7'>
                                        <div className='w-10 h-10 mb-2'>
                                            <img src={cyscaleMan} className='w-full h-full' alt='' />
                                        </div>
                                        <p className='text-lg font-semibold mb-2'>Schedule a Demo</p>
                                        <p className='text-md mb-2'>
                                            Sign up for a custom demo to see how we close security gaps and help you
                                            move to the cloud.
                                        </p>
                                        <Link to='/request-demo' className='text-lg text-blue font-semibold'>
                                            Request a Demo &gt;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            {!preview && suggestions && (
                <div className='bg-lightGrey2 mt-12 py-12'>
                    <Container>
                        <Row className='gap-4 lg:gap-8'>
                            {map(
                                slice(
                                    filter(suggestions, ({ node }) => node.frontmatter.permalink !== data.permalink),
                                    0,
                                    3
                                ),
                                (post, key) => (
                                    <div className='col-span-12 md:col-span-6 lg:col-span-4' key={key}>
                                        {post?.node && <Post {...post.node.frontmatter} />}
                                    </div>
                                )
                            )}
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    );
}
