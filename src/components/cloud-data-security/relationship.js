import React from "react"
import { Link } from "gatsby"
import Owsap from "../../assets/images/owsap-logo.svg"
const Relationship = () => {
  return (
    <div>
      <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6 pb-80px border-b border-solid border-borderGrey">
            <div>
                <p className="new-line text-black text-16px leading-6">
                Make your cloud assets secure and compliant based on the full context they operate in.
                <br />
                <br />
                Our proprietary <Link to="/products/security-knowledge-graph" className="text-blue underline text-16px hover:no-underline hover:text-red">Security Knowledge Graph™</Link> makes it easy to see who has access to individual assets and how they interact with one another. A structure of micrographs represents these complex relationships in a visual, intuitive format anyone can navigate with zero training.
                <br />
                <br />
                No more shadow access, excessive permissions and other security issues cross-cloud interactions create. Know who’s accessing your sensitive data and what they’re doing with it.
                </p>
            </div>
            <div className="hidden lg:inline-flex"></div>
            <div>
                <img src={Owsap} alt="owsap-logo" className="w-384px" />
                <p className="mt-32px mb-38px text-black text-36px leading-6">Data Security Top 10</p>
                <p className="new-line text-black text-16px leading-6">
                    Cyscale is built by the authors of the <a target='_blank' rel="noreferrer" className="text-blue underline text-16px hover:no-underline hover:text-red" href="https://owasp.org/www-project-data-security-top-10/">OWASP Data Security Top 10</a> standard that helps security, IT, and compliance specialists ensure critical data is safe against unauthorized exposure, data breaches, and accidental or malicious misuse.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Relationship;
