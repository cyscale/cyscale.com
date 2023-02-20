import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

class CSSInjector extends React.Component {
    constructor() {
        super();
        const iframe = document.getElementsByTagName('iframe')[0];
        const iframeHead = iframe.contentDocument.head;
        this.cache = createCache({ key: 'my-prefix-key', container: iframeHead });
    }

    render() {
        return <CacheProvider value={this.cache}>{this.props.children}</CacheProvider>;
    }
}

export default CSSInjector;
