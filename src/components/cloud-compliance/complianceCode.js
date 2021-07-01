import React from "react";

export default function ComplianceCode() {
  return (
    <div className="bg-lightGrey gradientWingBg">
      <div className="max-w-1366px m-auto py-12 lg:py-20 pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        <div className="w-full xl:w-1/3 mx-auto">
          <h2 className="text-blue text-34px leading-10 sectionTitle new-line">
            Use Compliance as Code to automate GRC tasks
          </h2>
          <p className="text-base text-black leading-6 mt-12">
            Get developers, security experts, and management on the same page
            and close compliance gaps created by Infrastructure as Code and{" "}
            <a
              href="/use-cases/remote-work"
              className=" text-blue underline text-16px hover:no-underline hover:text-red"
            >
              remote work
            </a>{" "}
            setups.
            <br />
            <br />
            Export existing Cyscale Standards to Github or Gitlab repositories,
            Confluence pages, and even schedule exports as PDF or Word to
            achieve IaC Compliance.
            <br />
            <br />
            Visualize your GRC system as a network of standards, policies,
            procedures, and controls with our{" "}
            <a
              href="/products/security-knowledge-graph"
              className="text-blue underline text-16px hover:no-underline hover:text-red"
            >
              Security Knowledge Graph<sup className="no-underline">TM</sup>
            </a>
            . We make it easy to minimize risk not just for individual cloud
            entities but for their dynamic interactions as well.
          </p>
        </div>
      </div>
    </div>
  );
}
