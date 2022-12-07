import { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';

const useHSFormDisplayAndSubmit = ({ formId, target }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const hubspotHandler = (event) => {
        if (
            event.data.type === 'hsFormCallback' &&
            event.data.eventName === 'onFormSubmitted' &&
            event.data.id === formId
        ) {
            setFormSubmitted(!formSubmitted);
            animateScroll.scrollToTop();
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId,
                    target
                });
            }
        }, 600);

        window.addEventListener('message', hubspotHandler);

        return () => {
            window.removeEventListener('message', hubspotHandler);
        };
        // eslint-disable-next-line
    }, []);

    return { formSubmitted };
};

export default useHSFormDisplayAndSubmit;
