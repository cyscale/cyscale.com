import React from 'react';
import { CSSTransition } from 'react-transition-group';
import StorylaneModal from '../full-platform-tour/StorylaneModal';

const PlatformTours = ({ kModal, setKModal, platformModal, setPlatformModal }) => {
    return (
        <>
            {kModal && <div className='modal-overlay'></div>}
            <CSSTransition in={kModal} timeout={300} classNames='video' unmountOnExit>
                <StorylaneModal setModal={setKModal} src='https://app.storylane.io/demo/hucyibzvndsj' />
            </CSSTransition>
            {platformModal && <div className='modal-overlay'></div>}
            <CSSTransition in={platformModal} timeout={300} classNames='video' unmountOnExit>
                <StorylaneModal setModal={setPlatformModal} src='https://app.storylane.io/demo/xiaviyvpr3sd' />
            </CSSTransition>
        </>
    );
};

export default PlatformTours;
