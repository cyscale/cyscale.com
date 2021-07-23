import React from "react";
import Sectionheader from "../layout/sectionheader";
import Services from "./remoteWorkServices";
import SecureRemoteAccess from "./secureRemoteAccess";
import GetStarted from "../Home/getstarted";
import CSPMtestamonials from "../cloud-security-posture-management/CSPMtestamonials";
import Shield from "../../assets/images/shield.svg";
import workFromHome from "../../assets/images/work-from-home.svg";
import CodeAnalysis from "../../assets/images/graph-viewer-code-analysis.svg";
import EmployeeAccessFootprint from "../../assets/images/employee-access-footprint.svg";
import getStartedICon from "../../assets/images/getStartedIconCPSM.svg";
import image3 from "../../assets/images/Group-379.svg";
import SuperChargeCloudSecurityImage from "../../assets/images/supercharge-cloud-security.svg";
import CloudSecuirtyConfigurationImage from "../../assets/images/cloud-secuity-configuration.svg";

export default function RemoteWorkContent() {
  const dataWFHServices = [
    {
      icon: Shield,
      title: "Solve pressing WFH security issues",
      subItems: [
        ["Limited cloud usage visibility"],
        ["Misconfigured cloud controls"],
        ["Overly permissive rights"],
        ["Additional risks employee workarounds introduce "],
        ["+	plenty others"],
      ],
    },
    {
      icon: workFromHome,
      title: "Safely support remote work",
      subItems: [
        ["Built-in Remote Work policy"],
        ["Multi-cloud security controls"],
        ["Real-time access evidence collection"],
        [
          "In-depth scans of sensitive data across cloud storage, tools & repos",
        ],
        ["+	loads more!"],
      ],
    },
  ];
  const dataCSPMtestamonials = [
    {
      image: image3,
      title: "“Cyscale Power Cloud Platform is a life-saver for companies requiring reliable protection and access”",
      description: `“We really enjoy the quick deployment and scalability and fully functional CSPM available in the cloud. We were able to scale as required based on load and performance.\n\nWith Covid-19, our users, including our Customer Center agents, are completely remote and we use Cyscale to make sure they have secure and appropriate access to all the resources they need.”`,
      author: "Ovidiu Pop",
      designation: "SYMBOLD STUDIO",
    },
  ];
  return (
    <>
      <div
        id="start"
        className="max-w-1366px m-auto pt-24 pb-24 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px"
      >
        <Sectionheader
          headingText="Use the Cyscale Power Cloud Platform to"
          pageName="RemoteWork"
        />
      </div>
      <Services data={dataWFHServices} />

      <SecureRemoteAccess
        image={CodeAnalysis}
        headingFirst="Protect remote teams & their work"
        headingSecond="Ensure secure remote access from day one"
        description={`Onboard remote team members fast and provide the secure setup they need to be productive with substantially less effort.\n\nUse our Power Cloud Platform to correctly configure permissions and avoid errors that expose your environment to additional vulnerabilities. \n\nWe provide a ready-to-use Remote Work policy that includes safety provisions for equipment (including mobile and BYOD), communications, and security layers.\n\nKeep the risks employee workarounds introduce to a minimum and make sure workflows stay compliant during digital transformation projects. `}
      />
      <div className="max-w-1366px m-auto pt-12 lg:pt-32 pb-12 lg:pb-16 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <Sectionheader
          headingText="See every employee’s access footprint in full"
          description={`Use Cyscale to automatically document access for all employees to every cloud entity in your organization. Cloud storage, collaboration tools, data repos – you name it, we scan it and give you the full picture in real time.\n\nOur Power Cloud Platform runs ongoing Identity and Access Management checks, building an auditable trail of compliance data in the process. You can also use it to manage permissions and revoke them as you need.\n\nFrom logical security to account management and beyond, we constantly audit your cloud environments and notify you when assets drift from compliance.`}
        />
      </div>
      <div className="max-w-1366px m-auto mb-12 lg:mb-24 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <img src={EmployeeAccessFootprint} className="w-full h-auto" alt="employee-access-footprint" />
      </div>
      <div className="max-w-1366px m-auto pt-12 lg:pt-24 pb-12 lg:pb-24 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <Sectionheader
          headingText="Keep intellectual property safe across clouds"
          description={[
            "Avoid inadvertent data leaks that expose business-critical trade secrets, patents, and other copyright-protected data.\n\nOur in-depth ",
            <a
              href="/use-cases/cloud-data-security"
              key="ip123"
              className=" text-blue underline text-16px hover:no-underline hover:text-red"
            >
              sensitive data scanning engine
            </a>,
            " identifies intellectual property spread across cloud storage, collaboration tools, and cloud source repositories.\n\nAutomating this essential task for your multi-cloud environment gives you more time to solve security issues that put confidential data at risk.",
          ]}
        />
      </div>
      <div className="gradientBG">
        <GetStarted
          description="Support productive, secure & compliant remote workflows"
          btnText="START YOUR FREE TRIAL"
          btnLink="https://app.cyscale.com/"
          ExternalLink
          icon={getStartedICon}
          sectionName="RemoteWork"
        />
      </div>
      <div className="CSPMtestamonials bg-lightGrey pt-116px pb-158px">
        <CSPMtestamonials data={dataCSPMtestamonials} />
      </div>
      <div className="max-w-1366px m-auto pt-12 lg:pt-24 pb-12 lg:pb-24 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <Sectionheader
          headingText={[
            "Supercharge cloud security for WFH",
            <span key="scw123" className="block w-full font-normal">
              Stay compliant with automated checks{" "}
            </span>,
          ]}
          description={[
            "Always know ",
            <strong key="who1">who</strong>,
            " has access to ",
            <strong key="which1">which</strong>,
            " cloud resources, ",
            <strong key="how1">how</strong>,
            " they are using them, and ",
            <strong key="why1">why</strong>,
            ".\n\nKeep track of cloud users’ activity across your entire range of cloud accounts, SaaS platforms, and cloud assets with Cyscale. Our self-generated ",
            <a
              href="/products/security-knowledge-graph"
              key="skg123"
              className=" text-blue underline text-16px hover:no-underline hover:text-red"
            >
              Security Knowledge Graph™
            </a>,
            " provides a map of cross-cloud interactions anyone can navigate to get insights and context.\n\nThat's why IT, HR, and other teams tasked with remote work security and productivity rely on us to achieve, prove, and maintain compliance with ISO 27001, SOC 2, and other standards.",
          ]}
          pageName="dataSecurity"
        />
      </div>
      <div className="block w-full greyBgImage pb-12 lg:pb-16 mt-12 lg:mt-20">
        <div className="max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
          <img
            src={SuperChargeCloudSecurityImage}
            alt="Supercharge cloud security for WFH"
            className="mx-auto w-auto h-auto"
          />
        </div>
      </div>
      <SecureRemoteAccess
        image={CloudSecuirtyConfigurationImage}
        headingFirst="Simplify cloud security configurations"
        description={[
          "Full integration, clarity, and accuracy overlap to create the holy grail of cloud security. And our Power Cloud Platform sits right in the middle, delivering on all fronts.\n\nReplace separate logins, complex configurations, and disparate security settings with a dashboard so simple anyone in your team can use it.\n\nZoom out to see the ",
          <a
            href="/products/cloud-security-posture-management"
            key="sp123"
            className="text-blue underline text-16px hover:no-underline hover:text-red"
          >
            security posture
          </a>,
          " of your remote teams and solve issues with a deep understanding of their impact and context.",
        ]}
        sectionName="cloudSecurityConfig"
      />
      <div className="max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <div className="border-t border-1px border-aboutBorder pt-12 lg:pt-24 pb-12 lg:pb-24">
          <Sectionheader
            headingText="Reduce your attack surface"
            description={[
              "Cybercriminals love insecure cloud services, especially when packed with confidential data. So when you curb overly permissive access rights and keep publicly available data in check from a single dashboard – or through ",
              <a
                href="https://api-reference.cyscale.com/"
                key="api123"
                className=" text-blue underline text-16px hover:no-underline hover:text-red"
              >
                our API
              </a>,
              " – you make their life hard and yours much easier. \n\nAvoid privilege misuse, malware outbreaks, and other threats to cloud data security by fixing misconfigurations as soon as they appear.\n\nWe help you promote a security-first culture by offering learning paths IT and security staff can use in the form of remediation guidance.",
            ]}
          />
        </div>
      </div>
      <div className="gradientBGCSPM pt-60px pb-60px">
        <GetStarted
        icon={getStartedICon}
          description={`Prevent cloud data spills and keep remote work incident-free`}
          btnText="Start your free trial"
          btnLink="https://app.cyscale.com/"
          ExternalLink
        />
      </div>
    </>
  );
}
