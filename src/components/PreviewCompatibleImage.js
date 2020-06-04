import Img from 'gatsby-image'
import React from 'react'

const PreviewCompatibleImage = ({ imageInfo, alt }) => {
    const { childImageSharp, image } = imageInfo

    if (!!image && !!image.childImageSharp) {
        return <Img fluid={image.childImageSharp.fluid} alt={alt || imageInfo.alt} />
    }

    if (!!childImageSharp) {
        return <Img fluid={childImageSharp.fluid} alt={alt || imageInfo.alt} />
    }

    if (!!imageInfo && typeof imageInfo === 'string') return <img src={imageInfo} alt={alt || imageInfo.alt} />

    return null
}

export default PreviewCompatibleImage
