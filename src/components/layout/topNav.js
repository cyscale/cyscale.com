import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import featureImage from '../../assets/images/about-us-f-image-yellow-pot.svg';
import ArrowRight from '../../assets/images/arrow-right.svg';
import image2 from '../../assets/images/big_oracle.png';
import heroBG from '../../assets/images/knowledge-graph-hero-image.svg';
import image5 from '../../assets/images/Kubernetes_logo_without_wordmark.svg';
import logo from '../../assets/images/logo.png';
import usescasesImage from '../../assets/images/menu-f-image.svg';
import CloudDataImage from '../../assets/images/resources-icon.svg';
import image6 from '../../assets/images/snyk.png';
import image7 from '../../assets/images/svg_aws.svg';
import image8 from '../../assets/images/svg_azure.svg';
import image9 from '../../assets/images/svg_gcp.svg';
import menuIcon from '../../assets/images/menuIcon.svg';
import menuClsoe from '../../assets/images/menuClose.svg';
// import SearchIcon from '../../assets/images/search_icon.svg';
// import CloseIcon from '../../assets/images/close.png';
import { useStaticQuery, graphql } from 'gatsby';

const TopNav = ({ pageName }) => {
    const [, setSticker] = useState(false);
    const stickyNav = () => {
        if (window.scrollY < 50) {
            !!sticky.current && sticky.current.classList.remove('transparent-bg');
            setSticker(false);
        } else {
            !!sticky.current && sticky.current.classList.add('transparent-bg');
            setSticker(true);
        }
    };
    useEffect(() => {
        stickyNav();
        document.body.classList.add('home-page');
        typeof window !== 'undefined' &&
            (window.onscroll = () => {
                stickyNav();
            });
    }, []);

    const sticky = useRef();
    const [menu, setMenu] = useState({
        Icon: menuIcon,
        menuToggle: 'hidden',
        toggleLogo: '',
        toggleBg: ''
    });

    const toggleMenuIcon = () => {
        if (menu.Icon === menuIcon) {
            setMenu({
                Icon: menuClsoe,
                menuToggle: '',
                toggleLogo: 'hidden',
                toggleBg: 'menuBgMobile'
            });
        } else {
            setMenu({
                Icon: menuIcon,
                menuToggle: 'hidden',
                toggleLogo: '',
                toggleBg: ''
            });
        }
    };

    const data = useStaticQuery(graphql`
        query CareersQueryForMenu {
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
        <div className='fixed top-0 left-0 block w-full mx-auto' ref={sticky}>
            <div
                className={`topNav ${menu.toggleBg} max-w-1366px m-auto pt-10px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px`}
            >
                <nav className='relative '>
                    <div className='mx-auto flex flex-col xl:flex-row justify-between'>
                        <div className='relative flex xl:block pt-4 pb-4 lg:pt-6 lg:pb-6 justify-start'>
                            <Link to='/' className={`${menu.toggleLogo} xl:inline-flex`}>
                                <img className='block headerLogo' src={logo} alt='CYSCALE' />
                            </Link>
                            <button
                                type='button'
                                className='absolute right-0 top-6 inline-block xl:hidden'
                                onClick={toggleMenuIcon}
                            >
                                <img src={menu.Icon} alt='' />
                            </button>
                        </div>
                        <ul className={`flex-col xl:flex-row ${menu.menuToggle} xl:flex`}>
                            <li className='hoverable '>
                                <button
                                    type='button'
                                    className={`${pageName === 'SKGPage' || pageName === 'CSPMPage' ? 'active' : ''
                                        }  relative parentItem block my-6 mx-4 lg:m-8 text-base hover:no-underline leading-6`}
                                >
                                    <span>Products</span>
                                </button>
                                <div className='p-9 mega-menu mb-16 sm:mb-0 shadow-2xl bg-white'>
                                    <div className='mx-auto w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-between'>
                                        <div>
                                            <div className='flex flex-col'>
                                                <Link
                                                    to='/products/cloud-security-posture-management'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6'
                                                >
                                                    Cloud Security Posture Management
                                                </Link>
                                                <Link
                                                    to='/products/security-knowledge-graph'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6 mt-7'
                                                >
                                                    Security Knowledge Graph™
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='hidden lg:inline-block'>
                                            <p className='text-base font-semibold text-black leading-6'>Our Partners</p>
                                            <div className='flex flex-row flex-wrap space-x-4 mt-7'>
                                                <img src={image7} className='w-auto h-8' alt='' />
                                                <img src={image8} className='w-auto h-8' alt='' />
                                                <img src={image9} className='w-auto h-8' alt='' />
                                                <img src={image2} className='w-auto h-8' alt='' />
                                                <img src={image5} className='w-auto h-8' alt='' />
                                                <img src={image6} className='w-auto h-8' alt='' />
                                            </div>
                                            <p className='text-base leading-6 text-black mt-36'>
                                                <strong className='leading-6 text-sm'>
                                                    Built-in Compliance Standards & Security Frameworks
                                                </strong>
                                                <br /> CIS, ISO 27001:2013, SOC 2, NIST 800, NIST CSF, PCIDSS,
                                                <br /> CCPA, GDPR, HITRUST, HIPAA.
                                            </p>
                                        </div>
                                        <div className='hidden lg:inline-block'>
                                            <img src={heroBG} className='w-full h-auto' alt='' />
                                            <p className='text-center mt-5'>
                                                <Link
                                                    to='/products/security-knowledge-graph/'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-blue font-semibold text-base no-underline hover:underline flex flex-row justify-center'
                                                >
                                                    Explore the Knowledge Graph&nbsp;
                                                    <img src={ArrowRight} className='w-5 h-auto' alt='' />
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='hoverable'>
                                <button
                                    type='button'
                                    className={`${pageName === 'Data_Security' || pageName === "RemoteWork" || pageName === "ComplianceAuditing" ? 'active' : ''
                                        } relative parentItem block my-6 mx-4 lg:m-8 text-base no-underline leading-6`}
                                >
                                    <span>Use Cases</span>
                                </button>
                                <div className='mega-menu'>
                                    <div className=' max-w-4xl grid grid-cols-1 lg:grid-cols-2  gap-6 ml-auto justify-end p-6 mb-16 sm:mb-0 shadow-2xl bg-teal-700 bg-white'>
                                        <div>
                                            <div className='flex flex-col'>
                                                <Link
                                                    to='/use-cases/cloud-data-security'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6'
                                                >
                                                    Data Security
                                                </Link>
                                                <Link
                                                    to='/use-cases/remote-work-security'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6 mt-7'
                                                >
                                                    Remote Work
                                                </Link>
                                                <Link
                                                    to='/use-cases/cloud-compliance-and-auditing'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6 mt-7'
                                                >
                                                    Compliance and Auditing
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='hidden lg:inline-block'>
                                            <img src={usescasesImage} className='w-44 mx-auto' alt='' />
                                            <p className='text-center mt-5'>
                                                <Link
                                                    to='/use-cases/cloud-data-security/'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-blue font-semibold text-base no-underline hover:underline flex flex-row justify-center'
                                                >
                                                    Explore Data Security&nbsp;
                                                    <img src={ArrowRight} className='w-5 h-auto' alt='' />
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='hover:bg-teal-700 hover:text-white'>
                                <Link
                                    to='/pricing'
                                    activeClassName='active'
                                    className='relative parentItem block my-6 mx-4 lg:m-8 text-base hover:no-underline leading-6'
                                >
                                    <span>Pricing</span>
                                </Link>
                            </li>
                            <li className='hoverable hover:bg-teal-700 hover:text-white'>
                                <button
                                    type='button'
                                    className={`relative parentItem block my-6 mx-4 lg:m-8 text-base leading-6 ${pageName === "blogs" || pageName === "blog-detail" ? ("active"):null}`}
                                >
                                    <span>Resources</span>
                                </button>
                                <div className='mega-menu'>
                                    <div className='max-w-4xl grid grid-cols-1 lg:grid-cols-2  gap-6 ml-auto justify-end p-6 mb-16 sm:mb-0 shadow-2xl bg-teal-700 bg-white'>
                                        <div>
                                            <div className='flex flex-col'>
                                                <Link
                                                    to='/blog'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6'
                                                >
                                                    Blog
                                                </Link>
                                                <a
                                                    href='https://docs.cyscale.com'
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6 mt-7'
                                                >
                                                    Documentation
                                                </a>
                                                <a
                                                    href='/resources/cyscale-cloud-data-security-datasheet.pdf'
                                                    download
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6 mt-7'
                                                >
                                                    Data Sheet
                                                </a>
                                                <a
                                                    href='https://docs.cyscale.com'
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6 mt-7'
                                                >
                                                    Support
                                                </a>
                                            </div>
                                        </div>
                                        <div className='hidden lg:inline-block'>
                                            <img src={CloudDataImage} className='w-44 mx-auto' height='128px' alt='' />
                                            <p className='text-center mt-5'>
                                                <a
                                                    href='/resources/cyscale-cloud-data-security-datasheet.pdf'
                                                    download
                                                    className='text-blue font-semibold text-base no-underline hover:underline flex flex-row justify-center'
                                                >
                                                    Download Data Sheet&nbsp;
                                                    <img src={ArrowRight} className='w-5 h-auto' alt='' />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={`hoverable hover:bg-teal-700 hover:text-white`}>
                                <button
                                    type='button'
                                    className={`${pageName === 'aboutUs' ||
                                        pageName === 'aboutUs' ||
                                        pageName === 'careers' ||
                                        pageName === 'jobDetails' ||
                                        pageName === 'contact_us'
                                        ? 'active'
                                        : ''
                                        } relative parentItem block my-6 mx-4 lg:m-8 text-base leading-6`}
                                >
                                    <span>Company</span>
                                </button>
                                <div className='mega-menu'>
                                    <div className='max-w-4xl grid grid-cols-1 lg:grid-cols-3  gap-6 ml-auto justify-end p-6 mb-16 sm:mb-0 shadow-2xl bg-teal-700 bg-white'>
                                        <div>
                                            <div className='flex flex-col'>
                                                <Link
                                                    to='/about-us'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className={`text-base text-black hover:text-blue hover:no-underline leading-6`}
                                                >
                                                    About us
                                                </Link>
                                                <Link
                                                    to='/careers'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6 mt-7'
                                                >
                                                    Careers
                                                </Link>
                                                <Link
                                                    to='/contact-us'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-base text-black hover:text-blue hover:no-underline leading-6 mt-7'
                                                >
                                                    Contact us
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='hidden lg:inline-block'>
                                            <p className='text-base font-semibold text-black leading-6'>
                                                Open positions
                                            </p>
                                            <div className='flex flex-col mt-6'>
                                                {jobs.map(({ frontmatter }, index) => {
                                                    const { permalink, title } = frontmatter;
                                                    return (
                                                        <Link
                                                            key={index}
                                                            to={`/careers/${permalink}`}
                                                            activeStyle={{ color: '#0F26AA' }}
                                                            activeClassName='active'
                                                            className='text-base text-black hover:text-blue hover:no-underline leading-6 mb-1'
                                                        >
                                                            <span
                                                                title={title}
                                                                style={{ maxWidth: 250 }}
                                                                className='max-w-xs block whitespace-nowrap overflow-ellipsis overflow-hidden'
                                                            >
                                                                {title}
                                                            </span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className='hidden lg:inline-block'>
                                            <img src={featureImage} className='w-28 mx-auto' alt='' />
                                            <p className='text-center mt-5'>
                                                <Link
                                                    to='/careers'
                                                    activeStyle={{ color: '#0F26AA' }}
                                                    activeClassName='active'
                                                    className='text-blue font-semibold text-base no-underline hover:underline flex flex-row justify-center'
                                                >
                                                    Join the Cyscale Team&nbsp;
                                                    <img src={ArrowRight} className='w-5 h-auto' alt='' />
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='py-6 px-4 lg:py-6 lg:pr-0 lg:pl-26px'>
                                <a
                                    className='bg-gradient-to-r from-blue to-red hover:bg-blue w-153px text-14px border-transparent box-border rounded-31px  h-10 hidden xl:flex justify-center items-center uppercase leading-none text-white transition duration-500 hover:to-blue hover:no-underline'
                                    href='https://app.cyscale.com'
                                >
                                    Start Free Trial
                                </a>
                            </li>
                            <li className='py-6 px-4 lg:py-6 lg:pr-6'>
                                {' '}
                                <a
                                    className='loginBtn text-black hover:text-black mt-0px lg:mt-0 text-14px  uppercase w-84px rounded-31px greyBorder flex h-10 justify-center items-center leading-none transition-all duration-500 hover:bg-grey3 hover:no-underline'
                                    href='https://app.cyscale.com'
                                >
                                    Log in
                                </a>
                            </li>

                        </ul>

                    </div>

                </nav>

            </div>
        </div>
    );
};

export default TopNav;
