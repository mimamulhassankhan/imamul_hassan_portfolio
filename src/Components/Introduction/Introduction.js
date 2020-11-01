import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import {faLinkedin, faGithub, faSkype} from '@fortawesome/free-brands-svg-icons';
const ReactRotatingText = require('react-rotating-text');

const Introduction = () => {
    
    return (
        <div className="text-white">
            <Row>
                <Col md={12} className="text-center">
                    <Image src="/images/main.png" width={350}  fluid />
                    <h5>Hi, I'm</h5>
                    <h2>IMAMUL <strong>HASSAN</strong></h2>
                    <ReactRotatingText className="font-weight-bold" items={['Full Stack Web Developer', 'MERN Stack', 'Microsoft Stack']} />
                    <p>I am a web development engineer and I use react and python to develop pages. This project is a resume template that can be used as the project home page or resume page.</p>
                    <Row style={{fontSize: '24px'}} className="justify-content-between">
                        <Col md={4}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Col>
                        <Col md={4}>
                            <FontAwesomeIcon icon={faGithub} />
                        </Col>
                        <Col md={4}>
                            <FontAwesomeIcon icon={faSkype} />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    );
};

export default Introduction;