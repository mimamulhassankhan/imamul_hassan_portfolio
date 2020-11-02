import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faMailBulk, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Badge, Button, Col, ProgressBar, Row } from 'react-bootstrap';

const MoreAboutMe = () => {
    const expertise = ['React JS', 'React Router', 'React Bootstrap', 'Material UI', 'HTML5', 'CSS3', 'Bootstrap4', 'JavaScript (ES6)', 'React Spring', 'PHP'];
    const comfortable = ['Redux', 'Node', 'MongoDB'];
    const familiar = ['GraphQL', 'C#', 'C++', 'Java', 'Python'];
    const extra = ['Adobe Photoshop', 'Adobe Illustrator', 'Android Studio', 'Unity Engine'];
    const operatingSystems = ['Windows (7, 8 and 10)', 'Linux (Ubuntu, Mint)'];
    const tools = ['Git', 'VS Code', 'Visual Studio', 'Chrome Dev Tools', 'Heroku', 'Netlify', 'Firebase', 'Autocad', 'Latex', 'MS Office', 'Filmora', 'Bangla Typing']
    
    return (
        <div className="px-5 my-5 py-5">
            <h3 className="py-3 text-center">Okay, Let's know more about me</h3>
            <div className="row mt-5 mb-5">
                <div className="col-md-5 d-flex flex-column justify-content-center border-right">
                    <div>
                        <h1 className="heading pb-3"><span style={{ borderBottom: '5px solid #0bc2c2' }} className="">Personal <span style={{ color: '#0bc2c2' }}>Info</span></span></h1>
                        <ul>
                            <li className="mt-3 mb-3">  
                                <h5><FontAwesomeIcon icon={faHome} /><span className="pl-2">Uttara, Dhaka - 1230</span></h5>
                            </li>
                            <li className="mt-3 mb-3">  
                                <h5><FontAwesomeIcon icon={faMailBulk} /><span className="pl-2">pappuhassan440@gmail.com</span></h5>
                            </li>
                            <div className="d-flex justify-content-between">
                                <li className="mt-3 mb-3">  
                                    <h5><FontAwesomeIcon icon={faPhoneSquareAlt} /><span className="pl-2">+8801 682992668</span></h5>
                                </li>
                                <Button variant="danger">Resume</Button>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <h1 className="heading pb-3"><span style={{ borderBottom: '5px solid #0bc2c2' }} className="">My <span style={{ color: '#0bc2c2' }}>Education</span></span></h1>
                        <ul>
                            <li className="mt-3 mb-3">
                                <h4 style={{ color: '#0bc2c2' }}>Under Graduation</h4>
                                <h5>B.Sc Eng. in Computer Science & Engineering,</h5>
                                <h5>Daffodil International University</h5>
                                <h6>2017 - <i>PRESENT</i></h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7">
                    <h1 className="heading pb-3"><span style={{ borderBottom: '5px solid #0bc2c2' }} className="">My Skills<span style={{ color: '#0bc2c2' }}> & Expertise</span></span></h1>
                    <Row>
                        <Col md={6}>
                            <ul>
                                <li>
                                    <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Expertise:</h4>
                                    {
                                        expertise.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                    }
                                </li>
                                <li>
                                    <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Comfortable:</h4>
                                    {
                                        comfortable.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge><ProgressBar className="mb-1" now={60} /></h5>)
                                    }
                                </li>

                                <li>
                                    <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Familiar:</h4>
                                    {
                                        familiar.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                    }
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <ul>
                                <li>
                                    <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Extra Skills:</h4>
                                    {
                                        extra.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                    }
                                </li>
                                <li>
                                    <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Operating Systems:</h4>
                                    {
                                        operatingSystems.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                    }
                                </li>
                                <li>
                                    <h4 className="mt-3 mb-3" style={{ color: '#0bc2c2' }}>Tools & Softwares:</h4>
                                    {
                                        tools.map(skill => <h5 className="d-inline"><Badge className="mr-2 mb-1 p-2" variant="secondary">{skill}</Badge></h5>)
                                    }
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default MoreAboutMe;