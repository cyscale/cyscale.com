import React from 'react';

import { PricingPageTemplate } from '../../templates/pricing-page';

function PricingPagePreview({ entry, widgetFor }) {
    const data = entry.getIn(['data']).toJS()
    return (
        <PricingPageTemplate
            title={data.title}
            cta={data.cta}
            plans={data.plans}
            heading={data.heading}
            featured={data.featured}
            features={data.features}
            subheading={data.subheading}
        />
    )
}

export default PricingPagePreview
