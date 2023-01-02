import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/header-image.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("https://personal-web-9ohd.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
    };

  return(
      <section className="contact" id="connect">
          <Container>
              <Row className="align-items-center">
                  <Col className="col-12 col-md-6">
                      <TrackVisibility>
                          {({ isVisible }) =>
                              <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                          }
                      </TrackVisibility>
                  </Col>
                  <Col className="col-12 col-md-6">
                      <TrackVisibility>
                          {({ isVisible }) =>
                              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                  <h2>Get In Touch</h2>
                                  <form onSubmit={handleSubmit}>
                                      <Row>
                                          <Col className="px-1 col-12 col-sm-6">
                                              <input type="text" value={formDetails.firstName} placeholder="First Name"
                                                     onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                          </Col>
                                          <Col className="px-1 col-12 col-sm-6">
                                              <input type="text" value={formDetails.lastName} placeholder="Last Name"
                                                     onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                          </Col>
                                          <Col className="px-1 col-12 col-sm-6">
                                              <input type="email" value={formDetails.email} placeholder="Email Address"
                                                     onChange={(e) => onFormUpdate('email', e.target.value)} />
                                          </Col>
                                          <Col className="px-1 col-12 col-sm-6">
                                              <input type="tel" value={formDetails.phone} placeholder="Phone Number"
                                                     onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                          </Col>
                                          <Col className="px-1 col-12">
                                              <textarea rows="6" value={formDetails.message} placeholder="Message"
                                                        onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                              <button type="submit"><span>{buttonText}</span></button>
                                          </Col>
                                          {
                                              status.message &&
                                              <Col>
                                                  <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                              </Col>
                                          }
                                      </Row>
                                  </form>
                              </div>}
                      </TrackVisibility>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}