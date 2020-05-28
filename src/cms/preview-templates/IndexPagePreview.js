import PropTypes from 'prop-types'
import React from 'react'

import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()
    console.log(getAsset(data.image))
    if (data) {
        return (
            <IndexPageTemplate
                image={getAsset(data.image)}
                title={data.title}
                heading={data.heading}
                subheading={data.subheading}
                sections={data.sections || []}
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
