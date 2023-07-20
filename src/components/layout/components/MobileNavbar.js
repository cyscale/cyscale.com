import React from 'react';
import { Link } from 'gatsby';
import logo from '../../../assets/images/logo.svg';
import navBars from '../icons/navbars-campaigns.svg';
import { HeaderLogo } from '../style';
// eslint-disable-next-line
import { css } from 'twin.macro';
import searchIcon from '../../../assets/images/search-icon.svg';

const MobileNavbar = ({ showBurgerButton, showMenu, setShowMenu, searchBar, setSearchBar }) => {
    return (
        <>
            <div tw='relative flex block py-4'>
                <div className='flex justify-between'>
                    <Link to='/' className='inline-flex'>
                        <HeaderLogo src={logo} alt='Cyscale' />
                    </Link>

                    <img
                        src={searchIcon}
                        className='pb-2.5 cursor-pointer mr-10 inline-block'
                        alt=''
                        tabIndex='0'
                        onClick={() => setSearchBar(!searchBar)}
                        role='button'
                        aria-label='Search'
                        onKeyPress={() => {}}
                        width={22}
                    />
                </div>
                <button
                    type='button'
                    className='absolute right-0 top-6 xl:hidden inline-block'
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <img src={navBars} alt='toggle menu' />
                </button>
            </div>
        </>
    );
};

export default MobileNavbar;
