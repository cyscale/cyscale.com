import React from 'react';

const Proposal = ({ headingText, description, poster }) => {
    return (
        <>
            <div className="block w-full bg-lightGrey mt-20 pt-61px proposal">
                <div className="max-w-1366px m-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px">
                    <div className="flex">
                        <div className="flex-initial">
                            <h2 className="text-blue text-24px sm:text-34px leading-9 new-line">{headingText}
                                <small className="block text-12px leading-4 mt-20px xl:mt-153px text-grey2 opacity-60 font-roboto">
                                    <strong>Ovidiu Pop</strong><br />SYMBOLD STUDIO
                                </small>
                            </h2>
                        </div>
                        <div className="flex-initial avatarCon">
                            <div className="imageBox">
                                <img src={poster} className="lg:w-full block float-right" alt={headingText} />
                            </div>
                        </div>
                        <div className="flex-initial description">
                            <p className="italic text-14px text-black leading-6 new-line">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proposal
