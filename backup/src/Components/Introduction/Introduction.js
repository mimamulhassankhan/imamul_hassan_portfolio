import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import {faLinkedin, faGithub, faSkype} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
const ReactRotatingText = require('react-rotating-text');

const Introduction = () => {
    
    return (
        <>
            <div className="text-white d-flex align-items-center" style={{height: '615px'}}>
                <Row>
                    <Col md={12} className="text-center">
                        <Image src="/images/main.png" width={280}  fluid />
                        <h5 className="pt-2">Hi, I'm</h5>
                        <h2 className="display-4">IMAMUL <strong>HASSAN</strong></h2>
                        <ReactRotatingText style={{fontSize:'20px'}}  items={['Full Stack Web Engineer', 'MERN Stack', 'Microsoft Stack']} />
                        <p className="w-75 mx-auto">I am a web development engineer, I use react and Node.js to develop pages and also Blazor webassembly for large scale application development. I can Integrate ML.NET/TensorFlow.js for machine learining.</p>
                        <div style={{fontSize: '30px'}} className=" my-2 d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/m-imamul-hassan-khan-91a92540/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://github.com/mimamulhassankhan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="mx-3" icon={faGithub} /></a>
                            <a href="https://join.skype.com/invite/xIyMlpUzT2Mn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSkype} /></a>
                        </div>
                        <Link to="contactme" className="btn btn-success"  smooth={true} duration={500} offset={50}>
                            Hire Me
                        </Link>
                    </Col>
                </Row>
            </div>
            
        </>
    );
};

export default Introduction;