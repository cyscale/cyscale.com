import React, { useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useSubscribe = (pageUri, pageName) => {
    const [emailInput, setEmailInput] = React.useState('');
    const [alert, setAlert] = React.useState(null);
    const [cookies] = useCookies();

    const onChange = (e) => {
        setEmailInput(e.target.value);
    };

    const isValidEmail = (email) => {
        const tester =
            /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        if (!email) return false;

        const emailParts = email.split('@');

        if (emailParts.length !== 2) return false;

        const account = emailParts[0];
        const address = emailParts[1];

        if (account.length > 64) return false;
        else if (address.length > 255) return false;

        const domainParts = address.split('.');
        if (
            domainParts.some(function (part) {
                return part.length > 63;
            })
        )
            return false;

        if (!tester.test(email)) return false;

        return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (emailInput === '') {
            return null;
        }

        if (!isValidEmail(emailInput)) {
            setAlert({ message: 'Please enter a valid email address.', alertClass: 'text-red' });
            return null;
        }

        let context;

        if (cookies.hubspotutk || cookies.hubspotutk === '') {
            context = {
                hutk: cookies.hubspotutk,
                pageName,
                pageUri
            };
        } else {
            context = {
                pageName,
                pageUri
            };
        }

        const data = {
            submittedAt: new Date().getTime(),
            fields: [
                {
                    objectTypeId: '0-1',
                    name: 'email',
                    value: emailInput
                }
            ],
            context,
            legalConsentOptions: {
                consent: {
                    consentToProcess: true,
                    text: 'I agree to allow Cyscale Company to store and process my personal data.',
                    communications: [
                        {
                            value: true,
                            subscriptionTypeId: 8270486,
                            text: 'I agree to receive marketing communications from Cyscale Company.'
                        }
                    ]
                }
            }
        };

        await axios
            .post(
                'https://api.hsforms.com/submissions/v3/integration/submit/5413427/428b1f63-f8fc-4bb0-bdd2-7243a829205a',
                data,
                {
                    headers: {
                        contentType: 'application/json'
                    }
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    setAlert({ message: "You're all set up!", alertClass: 'text-blue' });
                }
            })
            .catch((err) => {
                setAlert({ message: 'Something went wrong!', alertClass: 'text-red' });
            });

        setEmailInput('');
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit(e);
        }
    };

    useEffect(() => {
        if (alert) {
            const alertTimer = setTimeout(() => setAlert(null), 3000);
            return () => clearTimeout(alertTimer);
        }
    }, [alert]);

    return { emailInput, alert, onChange, onSubmit, onKeyDown };
};

export default useSubscribe;
