import React from 'react';
import { Link } from 'gatsby';
import logo from '../../../../assets/images/logo.svg';
import navBars from '../../../../assets/images/navbars-campaigns.svg';
import { HeaderLogo } from './HomeMobile';
import { css } from 'twin.macro';

const MobileNavbar = ({ showBurgerButton, showMenu, setShowMenu }) => {
    return (
        <>
            <div tw='relative flex block py-4'>
                <Link to='/' className='inline-flex'>
                    <HeaderLogo src={logo} alt='Cyscale' />
                </Link>

                <button
                    type='button'
                    className={`absolute right-0 top-6 xl:hidden ${showBurgerButton ? 'inline-block' : 'hidden'}`}
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <img src={navBars} alt='toggle menu' />
                </button>
            </div>
        </>
    );
};

export default MobileNavbar;
