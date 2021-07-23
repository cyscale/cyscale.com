import React from "react";
import Services from "./complianceServices";
import Sectionheader from "../layout/sectionheader";
import AutoUpdateFeature from "./autoUpdateFeature";
import SecurityControlsandPolicies from "./securityControlsAndPolicies";
import GetStarted from "../Home/getstarted";
import CSPMtestamonials from "../cloud-security-posture-management/CSPMtestamonials";
import ComplianceCode from "./complianceCode";
import MaintainThirdPartyData from "./maintainThirdPartyData";
import CheckSquareIcon from "../../assets/images/check-square.svg";
import AchieveClarityConsistencyImage from "../../assets/images/Achieve-clarity-consistency-image.svg";
import getStartedICon from "../../assets/images/getStartedICon.svg";
import image3 from "../../assets/images/Group-379.svg";

export default function CloudComplianceContent() {
    const dataServices = [
        {
            icon: CheckSquareIcon,
            description: "Set and forget compliance policies you only need to configure once "
        },
        {
            icon: CheckSquareIcon,
            description: "Instant notifications for compliance drifts with built-in remediation advice "
        },
        {
            icon: CheckSquareIcon,
            description: "Real-time evidence collection that keeps the organization audit-ready "
        },
        {
            icon: CheckSquareIcon,
            description: "Automated, ongoing checks for all major security frameworks   "
        }
    ]
    const dataComplianceTestamonials = [
      {
        image: image3,
        title: "“Cyscale makes an otherwise daunting task a snap!”",
        description: `“I had been a customer of another compliance automation platform for years. When I first heard about Cyscale, I was hesitant to switch, but heard great things and knew there had to be a better solution out there than what we were using.\n\nFrom the initial demo, I thought ‘Wow, this is what I’ve been looking for.’\n\nWith the other platform, I’d wake up to so many failed control tests that weren’t actually real failures - the false negatives gave me fatigue and I never received much help from their support email. With Cyscale, the tests are so well designed that I trust when it says we have a gap and then we use their recommendations to take action and be more secure and compliant.”`,
        author: "Xulescu Smith,",
        designation: "IT Director @ Famous Company",
      },
    ];
  return (
    <>
      <div id="start">
        <Services
            title = "Cope with the growing complexity of your multi-cloud estate with:"
            data = {dataServices}
        />
      </div>
     <div className="complianceGetStartedGreyBg pt-12 lg:pt-28 pb-12 lg:pb-28">
     <div className="max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <Sectionheader
          headingText={[
            "Achieve clarity & consistency",
            <span key="acw123" className="block w-full font-normal">
              Set ongoing compliance checks on autopilot
            </span>,
          ]}
          description={[
            "Get all the help you need to run regular tests on security systems, policies, and processes.\n\nMake better use of your time while the cloud compliance checks continue to run in the background. Act on alerts when ",
            <a
              href="/use-cases/cloud-data-security"
              key="ds123"
              className=" text-blue underline text-16px hover:no-underline hover:text-red"
            >
              data security
            </a>,
            " risks emerge along and follow ready-to-use recommendations to avoid breaches.\n\nTrim complexity from your workflow with automated evaluations for CIS Cloud Benchmarks, ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, and many more security frameworks.",
          ]}
          pageName ="cloudCompliance"
        />
      </div>
      <div className="max-w-1366px mt-16 m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
          <img
            src={AchieveClarityConsistencyImage}
            alt="Achieve clarity & consistency"
            className="mx-auto w-auto h-auto"
          />
        </div>
     </div>
     <div className="max-w-1366px m-auto pt-6 pb-12 lg:pb-14 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <Sectionheader
          headingText= "Automate updates to Data Security & Privacy Policies"
          description={[
            "Keep website pages dedicated to ",
            <a
              href="/use-cases/cloud-data-security"
              key="au123"
              className=" text-blue underline text-16px hover:no-underline hover:text-red"
            >
              data security
            </a>,
            " and privacy policies up to date with zero manual work. Use the real-time data gathering built into the Cyscale Governance, Risk Management, and Compliance system and push cloud compliance information straight to them.\n\nConsolidate your reputation as a transparent, data-focused organization that proves to customers, auditors, and regulatory compliance bodies how robustly it protects Personally Identifiable information.",
          ]}
          pageName ="cloudCompliance"
          section = "complianceAutoUpdates"
        />
      </div>
      <AutoUpdateFeature />
      <div className="max-w-1366px m-auto pt-12 lg:pt-32 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <Sectionheader
          headingText= "Minimize overlap between cloud compliance and security"
          description= {`Avoid duplicate work and solve two issues at the same time with the Cyscale Power Cloud Platform.\n\nOnboard teams in 30 minutes and coordinate efforts to apply 500+ out-of-the-box security controls and policies. Baked into the platform, they underpin key areas where you need to prove cloud compliance: `}
       />
      </div>
      <SecurityControlsandPolicies />
      <div className="gradientBG py-12 lg:py-20">
        <GetStarted
          description="Easier compliance is just a login away! Leave the heavy lifting to us"
          btnText="START YOUR FREE TRIAL"
          btnLink="https://app.cyscale.com/"
          ExternalLink
          icon={getStartedICon}
          sectionName="RemoteWork"
        />
      </div>
      <div className="CSPMtestamonials bg-lightGrey py-12 lg:py-24">
        <CSPMtestamonials data={dataComplianceTestamonials} />
      </div>
      <div className="max-w-1366px m-auto py-12 lg:py-32 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <Sectionheader
           headingText={[
            "Align teams & tasks ",
            <span key="ali123" className="block w-full font-normal">
              Govern all cloud entities from a single dashboard
            </span>,
          ]}
          description={[
            "Consolidate all the key elements of cloud compliance in an easy-to-use dashboard. Replace cloud portals with our Power Cloud Platform – the hub for a sweeping overview of your ",
            <a
              href="/products/cloud-security-posture-management"
              key="csp123"
              className=" text-blue underline text-16px hover:no-underline hover:text-red"
            >
              cloud security posture
            </a>,
            ".\n\nImplement, manage, and monitor security policies and controls for single cloud, multi-cloud, and hybrid environments through reliable automation.\n\nDemonstrate compliance for multiple projects with read-only dashboard access or reports (CSV, PDF) you can share with internal stakeholders, prospects, or customers.",
          ]}
          section = "complianceGovern"
      />
      </div>
      <ComplianceCode />
      <div className="max-w-1366px m-auto py-12 lg:py-24 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <Sectionheader
           headingText= "Maintain a 3rd-party, fully auditable data trail"
      />
      <MaintainThirdPartyData />
      </div>
      <div className="gradientBG py-12 lg:py-20">
        <GetStarted
          description="Explore the full toolbox for your GRC system"
          btnText="START YOUR FREE TRIAL"
          btnLink="https://app.cyscale.com/"
          ExternalLink
          icon={getStartedICon}
          sectionName="RemoteWork"
        />
      </div>
    </>
  );
}
