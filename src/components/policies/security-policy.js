import React from "react";
import TopNav from "../layout/topNav";
import heroBG from "../../assets/images/privacy&blog-bg.svg";

const Index = () => {
  return (
    <>
      <div>
        <div
          className={`w-full ContactUs bg-lightGreyEEE bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${heroBG})  ` }}
        >
          <TopNav />
          <div className="max-w-1366px mx-auto pt-72 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <div className="flex">
              <div className="mx-auto w-full xl:w-2/4">
                <h1 className="text-34px text-blue leading-8 font-bold otherPages sectionTitle">
                Security Policy
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-1366px mx-auto mt-88px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
          <div className="flex">
            <div className="mx-auto w-full xl:w-2/4 text-16px font-bold tetx-black leading-6">
              <h2 className="font-bold mb-36px text-24px">This Security Policy applies only to your data on <strong> Cyscale</strong> Platform.</h2>
              <h2 className="font-bold mb-36px text-24px">Data Safety</h2>
              <p className="mb-36px">
              All <strong> Cyscale</strong> Platform data is hosted on Google Cloud Platform (GCP). We take advantage of all the security and privacy features GCP provides, plus our team takes additional pro-active measures to maintain a secure infrastructure and make sure there are always multiple backups for infrastructure disaster recovery purposes (though we can't offer backup in case of user made errors on a per account basis). For more specific details regarding how GCP keeps data secure, please refer to <a href="https://cloud.google.com/security" className="text-blue underline text-16px hover:no-underline hover:text-red" rel="noreferrer" target="_blank">https://cloud.google.com/security</a>. We don't publicize exactly what features, services, and data center we use for security reasons, but we can give you a brief overview of how we make sure your data is safe. We recommend you also review our Terms of Use and Privacy Policy.
              </p>
              <h2 className="font-bold mb-36px text-24px">
              Data center Security
              </h2>
              <p className="mb-36px">
              GCP maintains an impressive list of reports, certifications, and independent assessments to ensure complete and ongoing state-of-the-art data center security. They have many years of experience in designing, constructing, and operating large-scale data centers, which makes them the industry standard when it comes to security. The exact physical location of the data center that stores <strong> Cyscale</strong> Platform's data is private. Only those within Google who have a legitimate business know the actual location of Google’s data centers. Additionally, data centers are secured with a variety of physical controls to prevent unauthorized access.
              </p>
             <h2 className="font-bold mb-36px text-24px">
             Infrastructure Security
              </h2>
              <p className="mb-36px">All <strong> Cyscale</strong> Platform servers are run from own virtual private clouds (VPCs), with rules that prevent unauthorized requests from entering our network. <strong> Cyscale</strong> Platform infrastructure is hosted in a fully redundant, secure VPN environment, with access restricted to operations support staff only. This way we can leverage complete firewall protection, private IP addresses, and other security features. The whole system on which <strong> Cyscale</strong> Platform runs is behind a firewall and only the necessary ports are open to the outside network. Also, only authorized personnel, using SSH keys, have access to the system. Access is enabled only over a VPN connection.</p>
              <h2 className="font-bold mb-36px text-24px">
              Application Security
              </h2>
              <p className="mb-36px">
              All data to and from <strong> Cyscale</strong> Platform is sent securely over HTTPS. The initial connection is established over 2048 bit TLS, and the rest of the communication happens over 256 bit SSL. This is the standard technology for keeping an internet connection secure and prevents anyone from reading and modifying any information. Any data transferred between a user and <strong> Cyscale</strong> Platform is impossible to read or modify. We use the same level of encryption as do banks and financial institutions. All data is encrypted using SHA256withRSA algorithms, which scramble data in transit, preventing hackers from reading it. Your company-specific data inside <strong> Cyscale</strong> Platform is kept separate through a logical separation at the data tier, based on application-level access permissions and roles you set up in your workspaces. Passwords are encrypted so the database doesn't store actual values. Other data is not encrypted at rest.
              </p>
               <h2 className="font-bold mb-36px text-24px">
               Operations Security
              </h2>
              <p className="mb-36px">
              Our system is constantly monitored. We get reports in real time so we can instantly react in case a potential issue arises. All actions taken on production consoles are logged. We constantly monitor security, performance, and availability 24/7. We run automated security testing on an ongoing basis. We prioritize, resolve, and deploy discovered security issues quickly after discovery. Because we follow Continuous Delivery and Deployment (CI/CD) best practices, we can update <strong> Cyscale</strong> Platform on a daily basis and fix things as soon as we see them. We never access your data in <strong> Cyscale</strong> Platform, unless required for support reasons and with your explicit permission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
