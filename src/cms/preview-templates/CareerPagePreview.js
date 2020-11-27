import React from 'react'

import { CareerPageTemplate } from '../../templates/career-page'

function CareerPagePreview({ entry, widgetFor }) {
    const data = entry.getIn(['data']).toJS()
    return (
        <CareerPageTemplate
            content={widgetFor('body')}
            title={entry.getIn(['data', 'title'])}
            description={entry.getIn(['data', 'description'])}
        />
    )
}

export default CareerPagePreview
