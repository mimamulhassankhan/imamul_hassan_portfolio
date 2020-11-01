import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faMicrosoft, faBehance} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './SocialTray.css';

const SocialTray = () => {
    return (
        <>
        <nav class="social">
          <ul>
              <li><a href="https://twitter.com/gian_michelle"><FontAwesomeIcon icon={faTwitter} /> Twitter </a></li>
              <li><a href="https://facebook.com/"><FontAwesomeIcon icon={faFacebook} /> Facebook </a></li>
              <li><a href="http://dribbble.com/gian_michelle"><FontAwesomeIcon icon={faMicrosoft} /> Microsoft </a></li>
              <li><a href="http://behance.net/gianm"><FontAwesomeIcon icon={faBehance} /> Behance </a></li>
          </ul>
        </nav>   
        </>
    );
};

export default SocialTray;