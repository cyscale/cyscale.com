import PropTypes from 'prop-types'
import React from 'react'

import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, widgetFor }) => (
    <ContactPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
)

ContactPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default ContactPagePreview
