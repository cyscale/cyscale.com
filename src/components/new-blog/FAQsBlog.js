import React from 'react';
import { Helmet } from 'react-helmet';

const FAQsBlog = ({ faqs }) => {
    return (
        <>
            <Helmet>
                {faqs.length >= 1 && (
                    <script type='application/ld+json' data-rh='true'>
                        {`
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": ${JSON.stringify(
                    faqs.map((faq) => ({
                        '@type': 'Question',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: faq.answer
                        },
                        name: faq.question
                    }))
                )}
            }
        `}
                    </script>
                )}
            </Helmet>
        </>
    );
};

export default FAQsBlog;
