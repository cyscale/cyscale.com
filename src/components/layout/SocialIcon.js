import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import CrunchbaseIcon from '../../assets/images/cib-crunchbase.svg';
import AngelIcon from '../../assets/images/angel.svg';

export default function SocialIcon({ icon }) {
    switch (icon) {
        case 'linkedin':
            return <FaLinkedin />;
        case 'twitter':
            return <FaTwitter />;
        case 'facebook':
            return <FaFacebook />;
        case 'crunchbase':
            return <img src={CrunchbaseIcon} className='w-16px' alt='crunch base icon' />;
        case 'angel':
            return <img src={AngelIcon} className='w-16px' alt='angel icon' />;
        default:
            return null;
    }
}
