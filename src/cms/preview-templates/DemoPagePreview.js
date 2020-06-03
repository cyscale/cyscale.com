import PropTypes from 'prop-types'
import React from 'react'

import { DemoPageTemplate } from '../../templates/demo-page'

const DemoPagePreview = ({ entry, widgetFor }) => (
    <DemoPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
)

DemoPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default DemoPagePreview
