import Img from 'gatsby-image'
import React from 'react'

const PreviewCompatibleImage = ({ imageInfo }) => {
    const { alt = '', childImageSharp, image } = imageInfo

    if (!!image && !!image.childImageSharp) {
        return <Img fluid={image.childImageSharp.fluid} alt={alt} />
    }

    if (!!childImageSharp) {
        return <Img fluid={childImageSharp.fluid} alt={alt} />
    }

    if (!!image && typeof image === 'string') return <img src={image} alt={alt} />

    return null
}

export default PreviewCompatibleImage
