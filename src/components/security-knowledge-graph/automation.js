import React from "react";
import { Link } from "gatsby";
import icon1 from "../../assets/images/Group-388.svg";
import icon2 from "../../assets/images/Group-390.svg";
import icon3 from "../../assets/images/Group-389.svg";
import icon4 from "../../assets/images/Group-420.svg";
import feauterImage from "../../assets/images/pricing-banner-image.svg";

const Automation = () => {
  return (
    <>
      <div>
        <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
          <div className="grid xl:grid-cols-3 mt-24 mb-24">
            <div></div>
            <div className="xl:col-span-2">
              <h2 className="text-blue text-24px max-w-full lg:w-9/12 sm:text-34px leading-9 sectionTitle">
                How Security Knowledge Graph™
                delivers knowledge-driven automation
              </h2>
            </div>
          </div>
        </div>
        <div className="block w-full greyBGAfter mb-75px">
          <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 border-b border-lightGrey border-solid pb-88px">
              <div>
                <p className="text-16px text-black new-line">
                  <strong>
                    Get truly contextual insights that incorporate your full
                    range of cloud assets
                  </strong>
                  <br />
                  <br />
                  Cybersecurity tools are often designed for specific issues. So
                  assembling and managing each one creates a lot of overhead and
                  drains your time, energy, and budget. We’ve been there too.
                  <br />
                  <br />
                  It’s time for a new m.o.!
                  <br />
                  <br />
                  When you{" "}
                  <Link to="/pricing" className="text-blue underline text-16px hover:no-underline hover:text-red">
                    start using Cyscale
                  </Link>
                  , we create a micrograph for every cloud system you have. We
                  then connect these micrographs to generate your own Security
                  Knowledge Graph™. That’s how the
                  <br />
                  <Link to="/products/security-knowledge-graph" className=" text-blue underline text-16px hover:no-underline hover:text-red">
                    Cyscale Power Cloud Platform
                  </Link>
                  &nbsp;gives you a truly contextual understanding of your digital
                  assets.
                </p>
              </div>
              <div className="xl:col-span-2 bg-lightGrey">
                <div className="grid xl:grid-cols-3 gap-4">
                  <div className="xl:col-span-2 pt-45px pb-45px pl-76px pr-76px">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <img src={icon1} className="h-45px" alt="Bring all your cloud data under one roof" />
                        <p className="text-16px text-black font-bold mt-22px">
                          Bring all your cloud data under one roof
                        </p>
                      </div>
                      <div>
                        <img src={icon2} className="h-45px" alt="Identify and track all your cloud entities" />
                        <p className="text-16px text-black font-bold mt-22px">
                          Identify and track all your cloud entities
                        </p>
                      </div>
                      <div>
                        <img src={icon3} className="h-45px" alt="Remove the limitations of list-based inventories" />
                        <p className="text-16px text-black font-bold mt-22px">
                          Remove the limitations of list-based inventories
                        </p>
                      </div>
                      <div>
                        <img src={icon4} className="h-45px" alt="Create rich security profiles for each asset" />
                        <p className="text-16px text-black font-bold mt-22px">
                          Create rich security profiles for each asset
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-45px pb-45px">
                    <div className="flex flex-wrap flex-grow h-full justify-center xl:justify-start">
                      <img src={feauterImage} className="w-48" alt="Valuable insights for peace of mind." />
                      <h2 className="text-blue text-24px max-w-full sm:text-34px leading-9 mt-auto text-left text-xl-left">
                        Valuable insights for peace of mind.  :)
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Automation;
