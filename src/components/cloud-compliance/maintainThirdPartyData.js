import React from "react";
import image from "../../assets/images/maintain-3rd-party-data-image.svg"

export default function MaintainThirdPartyData() {
  return (
    <div className="block w-full mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-24">
            <div className="xl:col-span-2">
                <img src={image} className="w-full max-w-full" alt="Maintain a 3rd-party, fully auditable data trail" />
            </div>
            <div>
                <p className="text-base text-black leading-6 font-normal">
                    Achieve third-party validation for global security frameworks and compliance requirements with the Cyscale Power Cloud Platform. 
                    <br />
                    <br />
                    Easily demonstrate implementation for must-have cloud security controls and policies for every entity in your environment. We keep a fully auditable data trail for up to 1 year that includes identity, access, changes, application and system logs, and operations. 
                    <br />
                    <br />
                    As your organization matures, use Cyscale to simplify and keep effort and costs low with a setup that keeps you always prepared for audits additional regulations require.
                </p>
            </div>
        </div>
    </div>
  );
}
