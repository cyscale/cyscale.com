import React, { useEffect, useState } from 'react'
import { StyleSheetManager } from 'styled-components'

import typography from '../utils/typography'

function StyleInjector({ children }) {
    const [iframeRef, setIframeRef] = useState(null)
    useEffect(() => {
        const iframe = document.getElementsByTagName('iframe')[0]
        const iframeHeadElem = iframe.contentDocument.head
        setIframeRef(iframeHeadElem)
    }, [])

    return (
        iframeRef && (
            <StyleSheetManager target={iframeRef}>
                <div>
                    <style dangerouslySetInnerHTML={{ __html: typography.toString() }} />
                    {children}
                </div>
            </StyleSheetManager>
        )
    )
}

export default function withStyles(Comp) {
    return (props) => (
        <StyleInjector>
            <Comp {...props} />
        </StyleInjector>
    )
}
