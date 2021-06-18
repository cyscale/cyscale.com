import React from "react";
import TopNav from "../layout/topNav";
import Sectionheader from "../layout/sectionheader";
import Jobs from "./jobs";
import ContactForm from "./contactForm";
import fullStackImage from "../../images/full-stack-engineer.svg";
import UXUI from "../../images/UX-UI.svg";
import PM from "../../images/project-manager.svg";
import BannerImage from "../../images/careers-banner-bg.svg";

const Index = () => {
    const dataJobs = [
        {
            jobTitle : `FULLSTACK \nENGINEER`,
            linkText : "see job description and apply",
            jobLink : "",
            icon : fullStackImage
        },
        {
            jobTitle : `UI/UX \n DESIGNER`,
            linkText : "see job description and apply",
            jobLink : "",
            icon : UXUI
        },
        {
            jobTitle : `PROJECT \nMANAGER`,
            linkText : "see job description and apply",
            jobLink : "",
            icon : PM
        }
    ]
  return (
    <>
      <div className={`w-full careers bg-lightGreyEEE bg-contain bg-no-repeat relative`}>
        <img src={BannerImage} className="absolute top-80px right-0 w-full h-auto bannerImage" alt="" />
        <TopNav
            pageName = "careers"
        />
        <div className="block w-full bannerBG mt-20px">
          <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <h1 className="text-30px pt-390px md:text-30px xl:text-60px new-line text-blue font-proximaBold">
              Join the <br />Cyscale Team
            </h1>
          </div>
          <div className="max-w-1366px mx-auto pt-195px pb-104px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <Sectionheader
              headingText={`Together, we can make the world a safer place!`}
            />
          </div>
          <Jobs
            data = {dataJobs}
        />
        </div>
       
        <ContactForm />
      </div>
    </>
  );
};

export default Index;
