import { useEffect } from 'react';

export default function useHubSpot({ formId, target }) {
    useEffect(() => {
        setTimeout(() => {
            if (typeof window !== 'undefined' && window['hbspt']) {
                window.hbspt.forms.create({
                    portalId: '5413427',
                    formId,
                    target
                });
            }
        }, 600);
    }, [formId, target]);
}
