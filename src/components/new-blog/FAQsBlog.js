import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const FAQsBlog = ({ htmlString }) => {
    const [faqContent, setFaqContent] = useState([]);

    useEffect(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const faqList = doc.querySelector('.faq-list');

        if (faqList) {
            const faqItems = Array.from(faqList.children).filter((child) => child.tagName.toLowerCase() === 'li');

            const faqs = faqItems.map((faqItem) => {
                const questionP = faqItem.querySelector('p.question');
                const answerP = faqItem.querySelector('p.answer');

                return {
                    question: questionP ? questionP.textContent.trim() : '',
                    answer: answerP ? answerP.textContent.trim() : ''
                };
            });

            setFaqContent(faqs);
        }
    }, [htmlString]);

    return (
        <>
            <Helmet>
                {faqContent.length >= 1 && (
                    <script type='application/ld+json' data-rh='true'>
                        {`
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": ${JSON.stringify(
                    faqContent.map((faq) => ({
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
