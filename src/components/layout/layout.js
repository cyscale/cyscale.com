import React from 'react'

import Seo from '../Seo'
import Footer from './footer'
import Header from './header'
import Consent from '../consent'
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
    pageName,
    blogDataTitle
}) => {
    return (
        <div>
            <Seo title={title} description={description} pageName={pageName} />
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
                    blogDataTitle={blogDataTitle}
                />
            )}

            <main>
                <div>{children}</div>
            </main>
            <Footer />
            <Consent/>
        </div>
    );
};

export default TemplateWrapper;
