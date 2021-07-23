import React from "react";
import { Link } from "gatsby";
import arrowDOwn from "../../assets/images/arrow-Down.svg";

const Support = ({ title, data, sectionName }) => {
  return (
    <div className="pt-65px pb-65px">
      <div className="max-w-1366px mx-auto pt-50px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
        {!!title && (
          <h2 className="text-blue font-proximaBold text-34px mb-69px">
            {title}
          </h2>
        )}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-50px border-b ${!!sectionName && sectionName === "supportSection" ? ("border-white"):("border-borderGrey")} border-solid`}
        >
          {data.map((content, index) => (
            <div key={index}>
              <p className="text-16px text-black leading-6 mb-30px">
                <strong>{content.title}</strong>
              </p>
              <ul className="list-none text-16px text-black leading-6">
                {content.subItems.map((items, index2) => (
                  <li key={index2}>{items}</li>
                ))}
              </ul>
              {!!content.viewMoreText && !!content.viewMoreLink && (
                <p className="mt-40px">
                  <a
                    href={content.viewMoreLink}
                    target="_blank"
                    className="uppercase text-blue underline text-16px hover:no-underline hover:text-red font-medium"
                  >
                    {content.viewMoreText}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      {!!sectionName && sectionName === "supportSection" ? (
        <div className="max-w-1366px mx-auto mt-62px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-16px text-black leading-6">
                <strong>Don’t see your Data Repo? </strong>
              </p>
            </div>
            <div className="lg:col-span-3">
              <Link
                to="/contact-us"
                className="uppercase text-blue underline text-16px hover:no-underline hover:text-red font-medium"
              >
                Contact us and let’s talk about adding support for it
              </Link>
            </div>
          </div>
        </div>
      ) : (
        sectionName === "securityGaps" && (
          <>
            <div className="max-w-1366px mx-auto mt-40px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
              <a
                href="https://docs.cyscale.com"
                target="_blank"
                className="uppercase text-blue underline text-16px hover:no-underline hover:text-red font-medium"
              >
                <img
                  src={arrowDOwn}
                  alt="arrow icon"
                  className="mx-auto mb-23px w-20px"
                />
                <span className="block w-full text-center">
                  See all supported data types
                </span>
              </a>
            </div>
            <div className="bg-lightGrey2 CSPMServices securityGaps mt-64px">
              <div className="max-w-1366px mx-auto pt-109px pb-109px pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div></div>
                  <div className="col-span-3 md:pl-128px lg:pl-100px">
                    <p className="new-line text-16px text-black leading-6">
                    <Link
                    to="/use-cases/cloud-compliance-and-auditing"
                    className="text-blue underline text-16px hover:no-underline hover:text-red"
                  >
                    Manage your compliance
                  </Link>  obligations with the 500+ ready-to-use security controls and policies you can apply and monitor through automatic, ongoing checks. Get alerts whenever your most valuable cloud assets drift from your initial configuration.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Support;
