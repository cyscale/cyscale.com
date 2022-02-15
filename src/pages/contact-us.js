import React from 'react';

import Contact from '../components/Contact';
import Layout from '../components/layout/layout.js';

const ContactUs = ({ location }) => (
    <Layout
        location={location}
        pageName='ContactUs'
        title='Contact us - Cyscale Cloud Platform'
        description='We are always happy to assist with more information about us or our product which covers cloud security, kubernetes security and hybrid multi-cloud environments.'
    >
        <Contact />
    </Layout>
);

export default ContactUs;
