import PropTypes from 'prop-types'
import React from 'react'

import { PolicyPageTemplate } from '../../templates/policy-page'

const PolicyPagePreview = ({ entry, widgetFor }) => (
  <PolicyPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PolicyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PolicyPagePreview
