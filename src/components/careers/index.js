import React from "react";
import TopNav from "../layout/topNav";
import Sectionheader from "../layout/sectionheader";
import Jobs from "./jobs";
import Services from "../Home/services";
import ContactForm from "./contactForm";
import { useStaticQuery, graphql } from "gatsby";
import ScrollButton from "../ScrollButton/ScrollButton";
import BannerImage from "../../assets/images/careers-banner-bg.svg";

const dataService = [
  {
    title: "Remote Work since day 1",
    description1:
      "Cyscale has been operating as a Remote-first company since day 1, not after lockdowns and pandemics. We developed a remote work-friendly setup that ensures equality and inclusion but also provides guidance and growth opportunities.",
  },
  {
    title: "Be part of the journey",
    description1:
      "We believe that a strong team is what makes or breaks a company. We are building Cyscale on a unique vision and we look for colleagues that share this vision - and we offer equity in return if they will have an impact on the company.",
  },
  {
    title: "Competitive salaries and bonuses ",
    description1:
      "If you made the efforts to become a professional at what you are doing, we will definitely take the necessary steps to match your financial expectations and always feel appreciated also on this aspect.",
  },
];
const Index = () => {
  const data = useStaticQuery(graphql`
    query CareersQuery {
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
  jobs = jobs.filter(
    ({ frontmatter }) => frontmatter.templateKey === "career-page"
  );

  return (
    <>
      <div
        className={`w-full careers bg-lightGreyEEE bg-contain bg-no-repeat relative`}
      >
        <div className="absolute top-153px left-0 w-full bannerImage">
          <img src={BannerImage} className=" mx-auto" alt="Join the Cyscale Team" />
        </div>
        <TopNav pageName="careers" />
        <div className="block w-full bannerBG pt-120px">
          <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <h1 className="text-30px pt-255px lg:pt-364px xl:pt-390px md:text-30px xl:text-60px xl:w-96 new-line text-blue font-proximaBold">
              Join the Cyscale Team
            </h1>
          </div>
          <div className="w-full text-center hidden sm:inline-block relative">
            <ScrollButton to="start" />
          </div>
          <div id="start" className="max-w-1366px mx-auto lg:mt-10 xl:mt-48 pt-195px pb-104px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <Sectionheader
              headingText={`Together, we can make the world a safer place!`}
            />
          </div>
          <div className="block w-full bg-white pt-10">
            <Services
              headingText="Why join us"
              sectionName="CSPMServices"
              data={dataService}
            />
          </div>
          <Jobs data={jobs} />
        </div>

        <ContactForm />
      </div>
    </>
  );
};

export default Index;
