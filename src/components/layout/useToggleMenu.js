import React, { useState } from 'react';
import navBars from '../../assets/images/navbars-campaigns.svg';
import menuIcon from '../../assets/images/menuIcon.svg';
import menuClsoe from '../../assets/images/menuClose.svg';

const dynamicNavPages = [
    'Identity and Access Management Security for Cloud',
    'AWSCloudSecurityCampaign',
    'CSPMSolutionCampaign'
];

const initMenu = (pageName) => {
    return {
        Icon: dynamicNavPages.includes(pageName) ? navBars : menuIcon,
        menuToggle: 'hidden',
        toggleLogo: '',
        toggleBg: ''
    };
};

const useToggleMenu = (pageName) => {
    const [menu, setMenu] = useState(initMenu(pageName));

    const toggleMenuIcon = () => {
        if (menu.Icon === menuIcon || menu.Icon === navBars) {
            setMenu({
                Icon: menuClsoe,
                menuToggle: '',
                toggleLogo: 'hidden',
                toggleBg: 'menuBgMobile'
            });
        } else {
            setMenu({
                Icon: dynamicNavPages.includes(pageName) ? navBars : menuIcon,
                menuToggle: 'hidden',
                toggleLogo: '',
                toggleBg: ''
            });
        }
    };

    return {
        menu,
        toggleMenuIcon
    };
};

export default useToggleMenu;
