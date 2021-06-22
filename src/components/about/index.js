import React from "react";
import TopNav from "../layout/topNav";
import Hero from "../pricing/hero";
import History from "./history";
import GetStarted from "../Home/getstarted";
import OurMission from "../layout/sectionheader";
import MeetTeam from "../layout/sectionheader";
import Team from "../about/team";
import feauterImage from "../../assets/images/about-us-f-image.svg";
import iconOne from "../../assets/images/getStartedICon.svg";
import ScrollButton from "../ScrollButton/ScrollButton";

const Index = () => {
  const pageName = "aboutUs";
  return (
    <>
      <div>
        <div
          className={`w-full pb-20px aboutUs bg-lightGreyEEE bg-contain bg-no-repeat`}
        >
          <TopNav pageName={pageName} />
          <Hero
            title={`How this story started:`}
            description="As more and more companies were moving their business applications and data in the cloud, many of them were lacking the knowledge or manpower required to mitigate security risks associated with this accelerated cloud adoption."
            description2="Being on the front line as cybersecurity experts, the founders (Ovidiu, Manuela and Andrei) have realized the struggle faced by these companies and started working on a solution to help them handle better and more efficiently their Cloud Security. And so… Cyscale was born."
            fimage={feauterImage}
            pageName={pageName}
          />
          <div className="w-full text-center hidden sm:inline-block relative py-2 mt-10">
            <ScrollButton to="start" />
          </div>
        </div>
        <div id="start">
          <History />
        </div>
        <div className="max-w-1366px m-auto pt-67px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
          <OurMission
            headingText="Our Mission:"
            description={`To help companies of all sizes to start, improve and maintain their Cloud Security Program based on the industry best practices, to ensure continuous security and compliance. Reducing the risk of security breaches when migrating or developing solutions in the cloud should be a continues priority and responsibility, and we can make sure that this task will not be overwhelming for you.\n\nUsing the unique power of our Security Knowledge Graph™, we can generate precise correlations between all cloud assets and data repositories so we can offer to our customers full visibility over their infrastructure. This allows them to immediately detect and fix potential misconfigurations, policy violations or compliance risks that could lead to data breaches.`}
            pageName={pageName}
          />
        </div>
        <div className="gradientBG">
          <GetStarted
            description="Let us help you improve your Cloud Security Posture"
            btnText="Try Cyscale for free and see for yourself"
            btnLink="/"
            icon={iconOne}
            sectionName="aboutUsGetStarted"
          />
        </div>
        <div className="max-w-1366px m-auto pt-67px pb-67px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
          <MeetTeam
            headingText="Meet the team:"
            description={`Together, we draw broad industry expertise to create powerful cybersecurity solutions for our customers `}
            pageName={pageName}
          />
        </div>
        <Team />
      </div>
    </>
  );
};

export default Index;
