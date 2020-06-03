import React from 'react'

import { AboutPageTemplate } from '../../templates/about-page'

function AboutPagePreview({ entry, widgetFor }) {
    const data = entry.getIn(['data']).toJS()
    return (
        <AboutPageTemplate
            title={data.title}
            content={widgetFor('body')}
            founders={data.founders}
            strengths={data.strengths}
        />
    )
}

export default AboutPagePreview
