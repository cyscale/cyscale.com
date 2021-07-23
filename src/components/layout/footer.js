import React from "react";
import { Link } from "gatsby";
import logo from "../../assets/images/logo-footer.svg";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import CrunchbaseIcon from '../../assets/images/cib-crunchbase.svg';
import AngelIcon from '../../assets/images/angel.svg';
const Footer = () => {
  return (
    <div className=" bg-gray  bg-footer-texture">
      <div className=" justify-between md:flex text-white pl-20px pr-20px md:pl-100px pt-68px md:pr-114px lg:pb-82px pb-20px max-w-1366px m-auto">
        <div className="md:flex w-full md:w-6/12 lg:w-4/12 md:flex-col">
          <Link to="/">
            <img src={logo} className="w-162px footerLogo" alt="cyscale logo" />
          </Link>
          <div className="mt-20px text-14px font-light leading-24 text-white pr-20px">
            Cyscale helps companies embrace their digital future by protecting apps and data in the cloud. With the innovative Security Knowledge Graph™ at its core, Cyscale helps you easily track security and compliance across your multi-cloud environment.
          </div>
          <div className="items-center mt-20px md:mt-auto hidden lg:flex">
            <div className="mr-25px">
              <a href="https://www.linkedin.com/company/cyscale" className="text-white" rel="noreferrer" target="_blank">
                  <FaLinkedin />
              </a>
            </div>
            <div className="mr-25px">
              <a href="https://www.twitter.com/cyscale" className="text-white" rel="noreferrer" target="_blank">                
                <FaTwitter />
              </a>
            </div>
            <div className="mr-25px">
              <a href="https://www.facebook.com/cyscale" className="text-white" rel="noreferrer" target="_blank">                
                <FaFacebook />
              </a>
              
            </div>
            <div className="mr-25px">
              <a href="https://www.crunchbase.com/organization/cyscale" className="text-white" rel="noreferrer" target="_blank">                
                  <img src={CrunchbaseIcon} className="w-16px" alt="crunch base icon" />
              </a>
              
            </div>
            <div className="mr-25px">
              <a href=" https://angel.co/company/cyscale" className="text-white" rel="noreferrer" target="_blank">                
                  <img src={AngelIcon} className="w-16px" alt="angel icon" />
              </a>
              
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-8/12 mt-20px md:mt-0">
          <div className="grid-cols-2 lg:grid-cols-4 justify-between hidden sm:grid">
            <div className="">
              <h3 className="text-14px font-bold leading-24 text-white pb-40px ">
                Platform
              </h3>
              <ul>
                <li className="text-12px leading-24 pb-7px">
                   <a href="/products/cloud-security-posture-management" className="font-light text-white no-underline hover:underline">Cloud Security Posture Management</a>
                </li>
                <li className="text-12px leading-24 pb-7px">
                   <a href="/products/security-knowledge-graph" className="font-light text-white no-underline hover:underline">Security Knowledge Graph<sup>TM</sup></a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-14px font-bold leading-24  text-white pb-40px ">
                Use cases
              </h3>
              <ul>
              <li className="text-12px leading-24 pb-7px">
                   <a href="/use-cases/cloud-data-security" className="font-light text-white no-underline hover:underline">Data Security</a>
                </li>
                <li className="text-12px leading-24 pb-7px">
                   <a href="/use-cases/remote-work-security" className="font-light text-white no-underline hover:underline">Remote Work</a>
                </li>
                <li className="text-12px leading-24 pb-7px">
                   <a href="/use-cases/cloud-compliance-and-auditing" className="font-light text-white no-underline hover:underline">Compliance and Auditing</a>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-14px font-bold leading-24  text-white pb-40px ">
                Resources
              </h3>
              <ul>
              <li className="text-12px leading-24 pb-7px">
                   <a href="/blog" className="font-light text-white no-underline hover:underline">Blog</a>
                </li>
                <li className="text-12px leading-24 pb-7px">
                   <a href="https://docs.cyscale.com" target="_blank" className="font-light text-white no-underline hover:underline">Documentation</a>
                </li>
                <li className="text-12px leading-24 pb-7px">
                   <a href="/resources/cyscale-cloud-data-security-datasheet.pdf" download className="font-light text-white no-underline hover:underline">Data Sheet</a>
                </li>
                <li className="text-12px leading-24 pb-7px">
                   <a href="https://docs.cyscale.com" target="_blank" className="font-light text-white no-underline hover:underline">FAQ + Support</a>
                </li>
                <li className="text-12px leading-24 pb-7px">
                   <a href="/pricing" className="font-light text-white no-underline hover:underline">Pricing</a>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-14px font-bold leading-24  text-white pb-40px ">
                Company
              </h3>
              <ul>
              <li className="text-12px leading-24 pb-7px">
                   <a href="/about-us" className="font-light text-white no-underline hover:underline">About us</a>
                </li>
                <li className="text-12px leading-24 pb-7px">
                   <a href="/careers" className="font-light text-white no-underline hover:underline">Careers</a>
                </li>
                <li className="text-12px leading-24 pb-7px">
                   <a href="/contact-us" className="font-light text-white no-underline hover:underline">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:pt-102px">
            <ul className="lg:flex m-0">
              <li className="block lg:inline-block lg:mr-50px text-12px font-light leading-24 text-white ">
                Cyscale &copy; 2018 - 2021. All rights reserved.
              </li>
              <li className="inline-block mr-10px lg:mr-30px  text-12px leading-24  ">
                <a href="/policies/terms-of-use" className="font-light text-white no-underline hover:underline">Terms of use</a>
              </li>
              <li className="inline-block mr-10px lg:mr-30px text-12px leading-24 ">
                <a href="/policies/security-policy" className="font-light text-white no-underline hover:underline">Security Policy</a>
              </li>
              <li className="inline-block mr-10px lg:mr-30px text-12px  leading-24 ">
                <a href="/policies/privacy-policy" className="font-light text-white no-underline hover:underline">Privacy Policy </a>
              </li>
              <li className="inline-block mr-10px text-12px leading-24 ">
                <a href="https://status.cyscale.com" rel="noreferrer" target="_blank" className="font-light text-white no-underline hover:underline">Status</a>
              </li>
            </ul>
          </div>
          <div className="mt-48 items-center md:mt-0 flex lg:hidden">
            <div className="mr-25px">
              <a href="https://www.linkedin.com/company/cyscale" rel="noreferrer" className="text-white" target="_blank">
                  <FaLinkedin />
              </a>
            </div>
            <div className="mr-25px">
              <a href="https://www.twitter.com/cyscale" className="text-white" rel="noreferrer" target="_blank">                
                <FaTwitter />
              </a>
            </div>
            <div className="mr-25px">
              <a href="https://www.facebook.com/cyscale" className="text-white" rel="noreferrer" target="_blank">                
                <FaFacebook />
              </a>
              
            </div>
            <div className="mr-25px">
              <a href="https://www.crunchbase.com/organization/cyscale" className="text-white" rel="noreferrer" target="_blank">                
                  <img src={CrunchbaseIcon} className="w-16px" alt="crunch base icon" />
              </a>
              
            </div>
            <div className="mr-25px">
              <a href=" https://angel.co/company/cyscale" className="text-white" rel="noreferrer" target="_blank">                
                  <img src={AngelIcon} className="w-16px" alt="angel icon" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
