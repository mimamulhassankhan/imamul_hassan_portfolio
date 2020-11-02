import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactMe = () => {

    const [resStatus, setResStatus] = useState('');

    const handleHireMe = e => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setResStatus('Thanks for choosing me');
            } else {
                setResStatus(xhr.response);
            }
        };
        xhr.send(data);
        console.log(xhr);
    }
    return (
        <section className="px-5 d-flex align-items-center" style={{height: '100vh'}}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>Let me handle your<br/>project, professionally.</h1>
                        <p className="py-2">
                        <small>With well written codes,we build amazing apps for all platforms,<br/>mobile and web apps in general.</small>
                        </p>
                    </Col>
                    <Col md={6}>
                        <Form onSubmit={handleHireMe} action="https://formspree.io/f/xqkgbbjd"  method="POST">
                            <Form.Group>
                                <Form.Control name="email" type="email" placeholder="Your email" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control name="name" type="text" placeholder="Your name/company name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="message"  as="textarea" rows="5" placeholder="Your message" />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                <div className="px-4">Send</div>
                            </Button>
                            <p className="text-danger">{resStatus}</p>
                        </Form>
                    </Col>
                </Row>
                <p className="mt-5 align-self-end text-center pb-2 pt-5">
                    <small>Design & Develop By @Imamul Hassan Khan</small>
                </p>
            </Container>
        </section>
    );
};

export default ContactMe;