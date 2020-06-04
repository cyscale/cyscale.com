import PropTypes from 'prop-types'
import React from 'react'

import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <IndexPageTemplate
                title={data.title}
                image={data.image}
                heading={data.heading}
                sections={data.sections}
                providers={data.providers}
                production={data.production}
                subheading={data.subheading}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

IndexPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default IndexPagePreview
