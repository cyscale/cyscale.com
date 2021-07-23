import React from "react";
import Cloud from "../Home/cloud";
import Features from "./features";
import GetStarted from "../Home/getstarted";
import Automation from "./automation";
import IdentifyIssues from "./identifyIssues";
import CSPMgetStarted from "../cloud-security-posture-management/CSPMgetStarted";
import CSPMtestamonials from '../cloud-security-posture-management/CSPMtestamonials';
import FAQs from './faqs'
import Video from "./video";
import getStartedICon from "../../assets/images/getStartedIconCPSM.svg";
import SKG_F_image from "../../assets/images/skg_f_image.svg";
import SKG_F_image_2 from "../../assets/images/Group-421.svg";
import icon1 from "../../assets/images/feature_icon_1.svg";
import icon2 from "../../assets/images/feature_icon_2.svg";
import icon3 from "../../assets/images/feature_icon_3.svg";
import icon4 from "../../assets/images/feature_icon_4.svg";
import icon5 from "../../assets/images/feature_icon_5.svg";
import icon6 from "../../assets/images/feature_icon_6.svg";

const Index = () => {
  const dataCloud = [
    {
      description: 
      [
        "Cyscale Security Knowledge Graph™ uses a data model that maps networks of cloud entities in an exhaustive graph which supports automated reasoning across multi-cloud infrastructures.\n\nWhen applied to cloud security, the knowledge graph model charts the full scale of your cloud assets, including their type, properties, and the relationships between them. Based on deep understanding, it makes semantic interpretations that factor in both the complexity and diversity of assets that generate security issues",
      
        "",
      ],
    },
    {
      description: 
      [
        "For example, the Cyscale Power Cloud Platform can interrelate dissimilar entities such as user identity, endpoints, code repositories, production environments, VMs, and production databases. \n\nCyscale Security Knowledge Graph™ enables machines to understand these complex relations and derive new knowledge that human specialists can use without having to perform effort-intensive analyses themselves.",
      
        "",
      ],
    },
  ];
  const dataFeatures = [
    {
      icon: icon1,
      description: "All-inclusive graph of all your digital assets.",
    },
    {
      icon: icon2,
      description:
        " Instant correlations across all cloud accounts, SaaS platforms, and assets",
    },
    {
      icon: icon3,
      description: "Deep understanding of their relationships and interactions",
    },
    {
      icon: icon4,
      description:
        " Semantic interpretations that cover all assets, no matter how diverse",
    },
    {
      icon: icon5,
      description:
        "Resource-intensive data collection and analysis done for you",
    },
    {
      icon: icon6,
      description:
        "Automatically pinpoints data security issues with deep visibility through infrastructure layers",
    },
  ];

  const dataSKGBenifits = [
    {
      title: `Because it’s difficult and expensive.`,
      description: `\nCybersecurity encompasses many heterogeneous systems which produce complex knowledge that is difficult to orchestrate and represent accurately and completely. \n\nKnowledge graph technology can do that but the data model needs to be customized to the specific needs of specialists working in information security.`,
    },
    {
      description: `\n\nTo enable this flexibility, we merged the knowledge graph model with our cloud security expertise to help our customers effectively manage the escalating risk of losing and damaging cloud data. \n\nWe do the heavy lifting because we enjoy the challenge of building a solution to a big problem that’s not going away anytime soon.`,
    },
  ];
  const dataSystemGov = [
    {
      title: `Close visibility gaps in your Governance, Risk and Compliance system`,
      description: [
        "\n\nSetting up a reliable ",
        <a href="/use-cases/cloud-compliance-and-auditing" key="link123" className=" text-blue underline text-16px hover:no-underline hover:text-red">
          GRC (Governance, Risk and Compliance system)
        </a>,
        " system doesn’t have to take ages and more in-house resources than you can ever afford. \n\nThe Cyscale Power Cloud Platform is a GRC tool you can truly count on!\n\nIt packs rich, customizable features you can use to build and manage a competitive governance process that gets technical teams and management on the same page. "
      ]
    },
    {
      description:
      [
        "\n\n\n\nThe Security Knowledge Graph™ brings an orchestrated approach to cybersecurity and policy enforcement. Edit and customize standards across all your cloud providers in a single dashboard, tracking implementation and consolidating your data-rich archive as you go.",
      
        "",
      ]
    },
  ];
  const dataTopRisks = [
    {
      title: `Tackle OWASP Cloud Top 10 security risks with a steady hand `,
    },
    {
      description: [
        "Use the built-in OWASP Cloud Top 10 security policy to automatically check for alignment with this respected industry standard. ",
        <span key="11a">
          <br />
          <br />
        </span>,
        " Offset risks associated with SaaS providers and complex cloud infrastructures by using the Cyscale Power Cloud Platform. Banking on the robust capabilities of our Security Knowledge Graph™, it instantly checks on how your cloud assets fare in terms of user privacy, multi-tenancy, exposure of non-production environments, and all other top cloud security issues OWASP prioritizes.",
        <strong key="2a" className="text-blue">
          <br />
          <br />
          We do it so you don’t have to.
        </strong>,
        "",
      ],
    },
  ];
  const dataPayCloud = [
    {
      title: ` Pay-per-use and scale your cloud security program as you grow`,
    },
    {
      description: `Would it be cheaper to build this in-house?” It’s a common dilemma but does your organization have what it takes to become a security company? \n\nImplementing the knowledge graph model is a resource-intensive process that requires industry-specific know-how, specialized technical components, and broad security expertise. It also takes time, the most invaluable resource of all. \n\nWith Cyscale, you pay for what you use and nothing more. As your business grows, you remain fully in control of how you scale your security program, as our Power Cloud Platform adapts to your changing needs.`,
    },
  ];
  const dataSecuritytestamonials = [
    {
      title: "Cyscale makes it easy to holistically view your security posture and maintain awareness of it.",
      description: `With just a few clicks, I can register my AWS environment and get a comprehensive inventory of all the resources we have, then evaluate all of those resources.\n\nThen, as an added bonus, the ongoing evaluation of our environment helps me understand if we’ve had configuration drift.`,
      author: "Ovidiu Pop",
      designation: "SYMBOLD STUDIO"
    }
  ]
  return (
    <>
      <div>
        <div id="start">
          <Cloud
            title={`What is a Security Knowledge Graph™`}
            f_image={SKG_F_image}
            sectionName="SKGSection"
            data={dataCloud}
          />
        </div>
        <Video />
        <div className="block w-full bg-white">
          <Features
            title={`The Cyscale Security Knowledge Graph in a nutshell`}
            bottomDescripton="No cloud security vendor leverages the power of the knowledge graph technology to deliver precise correlations between cloud resources and data loss risks."
            data={dataFeatures}
          />
        </div>
        <Cloud
          title={`If knowledge graph tech is this useful, why hasn’t anyone used it before?`}
          sectionName="SKGBeneifts"
          data={dataSKGBenifits}
        />
      </div>
      <div className="gradientBGCSPM">
        <GetStarted
          description="Ready to give it a try and see how it works?"
          btnText="START YOUR FREE TRIAL"
          btnLink="https://app.cyscale.com"
          ExternalLink
          icon={getStartedICon}
        />
      </div>
      <div className="automation">
        <Automation />
      </div>
      <div className="identifIssues">
        <IdentifyIssues />
      </div>
      <div className="gradientBGCSPM-2">
        <CSPMgetStarted
          title={`Discover the most flexible pricing in the cloud security industry`}
          btnText="SEE PRICING OPTIONS"
          btnLink="/pricing"
        />
      </div>
      <Cloud
        f_image={SKG_F_image_2}
        sectionName="systemGov"
        data={dataSystemGov}
      />
      <div className="bg-lightGrey topRisks">
        <Cloud sectionName="topRisks" data={dataTopRisks} />
      </div>
      <Cloud sectionName="systemGov" data={dataPayCloud} />
      <div className="gradientBGCSPM pt-60px pb-60px">
        <GetStarted
          description={`Accurate. Real-time. Context-aware.`}
          btnText="TRY CYSCALE FOR FREE"
          btnLink="https://app.cyscale.com"
          ExternalLink
          sectionName = "dataSecFoot"
        />
      </div>
      <div className="CSPMtestamonials bg-lightGrey pt-162px pb-162px">
         <CSPMtestamonials
          data = {dataSecuritytestamonials}
          sectionName = "dataSecurityTest"
         />
      </div>
      <FAQs />
    </>
  );
};

export default Index;
