import PropTypes from 'prop-types'
import React from 'react'

import { CompliancePageTemplate } from '../../templates/compliance-page'

const CompliancePagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    return (
        <CompliancePageTemplate
            cta={data.cta}
            title={data.title}
            image={data.image}
            heading={data.heading}
            content={widgetFor('body')}
            subheading={data.subheading}
        />
    )
}

CompliancePagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default CompliancePagePreview
