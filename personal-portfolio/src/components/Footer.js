import {Col, Container, Row} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const Footer = () => {
  return(
      <footer className="footer">
          <Container>
              <Row className="align-items-center">
                  <Col className="col-12 col-sm-6">
                      <img src={logo} alt="Logo" />
                  </Col>
                  <Col className="col-12 col-sm-6 text-center text-sm-end">
                      <div className="social-icon">
                          <a href="https://www.linkedin.com/in/yingrui-fifi-yang/"><img src={navIcon1} alt="Icon" /></a>
                          <a href="https://github.com/andyfifi6"><img src={navIcon2} alt="Icon" /></a>
                      </div>
                      <p>Copyright 2022. All Rights Reserved</p>
                  </Col>
              </Row>
          </Container>
      </footer>
  )
}