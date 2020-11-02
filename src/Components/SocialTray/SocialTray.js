import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faMicrosoft, faBehance} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './SocialTray.css';

const SocialTray = () => {
    return (
        <>
        <nav className="social">
          <ul>
                <a className="text-decoration-none text-warning font-weight-bold" href="https://twitter.com/Imamul_hk" target="_blank" rel="noopener noreferrer"><li><FontAwesomeIcon icon={faTwitter} /> Twitter </li></a>
                <a className="text-decoration-none text-warning font-weight-bold" href="https://www.facebook.com/m.imamulhassan/" target="_blank" rel="noopener noreferrer"><li><FontAwesomeIcon icon={faFacebook} /> Facebook </li></a>
                <a className="text-decoration-none text-warning font-weight-bold" href="https://answers.microsoft.com/en-us/profile/f4fed35f-1f30-480d-ba62-a12e672b40cb?sort=LastReplyDate&dir=Desc&tab=Threads&forum=allcategories&meta=&status=&mod=&advFil=&postedAfter=undefined&postedBefore=undefined&threadType=All&page=1" target="_blank" rel="noopener noreferrer"><li><FontAwesomeIcon icon={faMicrosoft} /> Microsoft </li></a>
                <a className="text-decoration-none text-warning font-weight-bold" href="https://www.behance.net/mimamulhassan" target="_blank" rel="noopener noreferrer"><li><FontAwesomeIcon icon={faBehance} /> Behance </li></a>
          </ul>
        </nav>   
        </>
    );
};

export default SocialTray;