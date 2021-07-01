import React from "react";
import RightArrow from "../../assets/images/compliance-see-in-action-right-arrow.svg";
import DownArrow from "../../assets/images/compliance-see-in-action-down-arrow.svg";
import PadLock from "../../assets/images/padlock.svg";
import Check from "../../assets/images/check-com.svg";
import Updated from "../../assets/images/updated.svg";
import Combine from "../../assets/images/combine.svg";
import Warning from "../../assets/images/warning.svg";

export default function AutoUpdateFeature() {
  const dataFeatures = [
    {
      icon: PadLock,
      description:
        "We initially defined a Data Security Policy in the dashboard",
    },
    {
      icon: Check,
      description:
        "We validated the included Controls and the Standards this policy is part of",
    },
    {
      icon: Updated,
      description:
        "We connected Cyscale to specific integrations (AWS, Personio, Github, Tenable, and Crowdstrike)",
    },
    {
      icon: Combine,
      description: [
        "We configured the option to automatically update the Data Security Policy page which is a link to “",
        <a
          href="/policies/data-security-policy"
          className="text-blue underline text-16px hover:no-underline hover:text-red break-words"
          key="sia123"
        >
          https://cyscale.com/policies/data-security-policy
        </a>,
        "”",
      ],
    },
    {
      icon: Warning,
      description:
        "We activated Alerts in case of compliance drifts such as misconfigurations or data privacy issues.",
    },
  ];
  return (
    <div className="bg-lightGrey">
      <div className="max-w-1366px m-auto py-12 lg:py-20 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <p className="text-black leading-6 text-xl text-center">
          See it in action
        </p>
        <p className="text-black leading-6 text-base text-center mt-6 lg:max-w-2xl mx-auto">
          At Cyscale, we practice what we preach and use our Power Cloud
          Platform to automatically pull information and update{" "}
          <a
            href="/policies/data-security-policy"
            className="text-blue underline text-16px hover:no-underline hover:text-red"
          >
            our Data Security Policy page
          </a>
          . Here’s how we do it:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-12 mt-12 lg:mt-24 text-center md:text-left">
          {dataFeatures.map((content, index) => (
            <div key={index}>
              <div className="flex flex-row items-center space-x-4">
                <img src={content.icon} className="h-45px w-auto flex-shrink-0 mx-auto md:mx-0" alt="icon" />
                <img src={RightArrow} className="w-153px h-auto flex-shrink-0 hidden md:inline-flex" alt="icon" />
              </div>
              <p className="text-blue leading-6 mt-3 text-base">
                {content.description}
              </p>
              <img src={DownArrow} alt="icon" className="mx-auto mt-2 md:hidden" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
