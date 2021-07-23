import React, { useState } from 'react'

import TabsArrow from '../../assets/images/arrow-Down-red.svg'
import f_image from '../../assets/images/Group-398.svg'

const FAQs = () => {
  const [tabActive, setTabActive] = useState(0);
  const dataFAQs = [
    {
      question:
        [
          "01. Do you use AI for your Knowledge Graph?",
        ],
      answer:
        [
          "Cyscale Security Knowledge Graph™ infers each digital asset’s category based on a classification engine. While it is not a fully-fledged AI, we’re building towards it.\n\nSince the knowledge graph is a data model extremely rich in applications and possibilities, we’re constantly tapping into its potential to build features that deliver immense value for your organization. See how it works during the ", <a href="/pricing" className=" text-blue underline text-16px hover:no-underline hover:text-red" key="345d">free trial</a>, " – it speaks for itself!",
        ],
    },
    {
      question: `02. Does your implementation of the knowledge graph model work similarly to the one used by search engines? What’s the difference? `,
      answer:
        [
          "The Security Knowledge Graph™ we built at Cyscale shares many characteristics with other implementations you’re familiar with (such as search engines).\n\nOur long-term roadmap includes developing the platform so you can use everyday language to interact with it and get what you need to do your best work. For example, imagine asking a bot on your Slack or Teams channel “What’s my cloud security posture?” and getting a response with a Security Knowledge Graph™ providing you rich, deep insights.\n\nWe’re building this feature and many more for specialists like you and the organizations they power through their expertise.",
        ],
    },
    {
      question: `03. How reliable is your implementation of the knowledge graph model?`,
      answer:
        [
          "Not a single node in our Security Knowledge Graph™ is created manually, to ensure you get a reliable experience every single time.\n\nThe Cyscale Power Cloud Platform feeds on the data you provide by connecting your cloud accounts, SaaS platforms and other cloud assets and uses that information to help you visualize how all of these entities work together (and cause security, compliance, and performance issues).",
        ],
    },
    {
      question: `04. Why are you the best team to build the Security Knowledge Graph™?`,
      answer: `Because helping our customers enjoy the full capabilities of knowledge graph technology is what drives us! This pursuit incorporates our know-how, skills, and experience. It’s an engineering challenge that we’re solving to both improve your work and life, as a Cyscale customer, and make a meaningful contribution to the field while solving a painful real-life problem.\n\nWe developed a better way to automate cloud security and compliance while supporting IT and security specialists to do more of the work they love and that is by putting our Security Knowledge Graph™ in your capable hands.`,
    },
  ];
  return (
    <>
      <div className="FAQs pt-75px pb-75px">
        <div className="block w-full">
          <div className="max-w-1366px mx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
            <div className="grid grid-cols-1">
              <h2 className="text-blue w-full text-24px sm:text-34px leading-8 lg:max-w-sm sectionTitle">
                FAQs
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="justify-self-start">
                <div className="h-full flex flex-wrap flex-grow">
                  <img
                    src={f_image}
                    alt="FAQs"
                    className="w-162px pt-50px h-auto mt-auto"
                  />
                </div>
              </div>
              <div>
                {dataFAQs.map((content, index) => (
                  <div key={index} className="mb-5">
                    <button type="button" tabIndex={index} onKeyDown={() => setTabActive(index)} onClick={() => setTabActive(index)} className={`block w-full text-left pr-20px text-16px text-black font-bold leading-6 cursor-pointer relative tabTitle border-none outline-none ${index === 0 && tabActive === 0 && ("active")} ${index === tabActive && ("active")}`}>
                      {content.question}
                      <img src={TabsArrow} alt="arrow icon" className="tabsArrow absolute top-8px right-0" alt="" />
                    </button>
                    <p className={`text-16px text-black leading-6 mt-40px new-line ${index === 0 && tabActive === 0 ? ("block") : ("")} ${index === tabActive ? ("block") : ("hidden")}`}>
                      {content.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
