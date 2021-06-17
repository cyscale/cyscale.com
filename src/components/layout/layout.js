import React from 'react'

import SEO from '../SEO/SEO'
import Footer from './footer'
import Header from './header'

const TemplateWrapper = ({
    children,
    title,
    description,
    heroBG,
    bannerTitle,
    bannerDescription,
    bannerBtn1Text,
    bannerBtn1Link,
    bannerBtn2Text,
    bannerBtn2Link,
    pageName
}) => {
    return (
        <div>
            <SEO title={title} description={description} pageName={pageName} />
            {!!pageName && pageName === 'ContactUs' ? (
                <></>
            ) : pageName === 'Pricing' ||
                pageName === 'aboutUs' ||
                pageName === 'careers' ||
                pageName === 'privacyPolicy' ||
                pageName === 'termsOfUse' ||
                pageName === 'SecurityPolicy' ||
                pageName === 'dataSecurity' || pageName === "blog" ? (
                <></>
            ) : (
                <Header
                    heroBG={heroBG}
                    bannerTitle={bannerTitle}
                    bannerDescription={bannerDescription}
                    bannerBtn1Text={bannerBtn1Text}
                    bannerBtn1Link={bannerBtn1Link}
                    bannerBtn2Text={bannerBtn2Text}
                    bannerBtn2Link={bannerBtn2Link}
                    pageName={pageName}
                />
            )}

            <main>
                <div>{children}</div>
            </main>
            <Footer />
        </div>
    );
};

export default TemplateWrapper;
