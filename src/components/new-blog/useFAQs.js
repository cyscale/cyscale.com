import { useEffect, useState } from 'react';

const useFAQs = (htmlString) => {
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

    return { faqContent };
};

export default useFAQs;
