import React from 'react'

import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()
    
    if (!data) return <div>Loading...</div>
    
    return <IndexPageTemplate data={data} />
}

export default IndexPagePreview
