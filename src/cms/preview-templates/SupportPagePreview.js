import PropTypes from 'prop-types'
import React from 'react'

import { SupportPageTemplate } from '../../templates/support-page'

const SupportPagePreview = ({ entry, widgetFor }) => (
    <SupportPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
)

SupportPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default SupportPagePreview
