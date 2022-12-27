import {Col, Container, Nav, Row, TabContainer, Tab} from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import fullstack from "../assets/img/fullstack.png"
import android from "../assets/img/android.PNG"
import sql from "../assets/img/sql.png"
import {ProjectItems} from "./ProjectItems";

export const Projects = () => {
    const fullstackProj = [
        {
            title: "JavaScript: Full-Stack",
            description: "E-Commerce Pets Shopping Website: Node JS and Express set up a server API, stored backend data in MongoDB",
            imgUrl: fullstack,
        }
    ]

    const androidProj = [
        {
            title: "Android App: Mobile Application",
            description: "Productivity Social Study App: Java Android Studio that allows users to create notes and in-app share them with friends",
            imgUrl: android,
        }
    ]

    const sqlProj = [
        {
            title: "SQL: Backend Database",
            description: "A coffee bean shop database for customers ordering coffee beans online: Relational Database to create order history, customer information, billing address, etc.",
            imgUrl: sql,
        }
    ]

  return(
      <section className="project" id="project">
          <Container>
              <Row>
                  <Col className="col-12">
                      <TrackVisibility>
                          {({ isVisible }) =>
                          <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                              <h2>Projects</h2>
                              <p> Projects that I have done, please checkout my Github for more information</p>
                              <TabContainer id="projects-tabs" defaultActiveKey="first">
                                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                      <Nav.Item>
                                          <Nav.Link eventKey="first">JavaScript: Full-Stack</Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                          <Nav.Link eventKey="second">Java: Mobile App </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                          <Nav.Link eventKey="third">SQL: Backend Database</Nav.Link>
                                      </Nav.Item>
                                  </Nav>
                                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                      <Tab.Pane eventKey="first">
                                          <Row>
                                              {
                                                  fullstackProj.map((fullstackProj, index) => {
                                                      return (
                                                          // <p>{fullstackProj.title}</p>
                                                          <ProjectItems
                                                              key={index}
                                                              {...fullstackProj}
                                                          />
                                                      )
                                                  })
                                              }
                                          </Row>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="second">
                                          <Row>
                                              {
                                                  androidProj.map((androidProj, index) => {
                                                      return (
                                                          // <p>{androidProj.title}</p>
                                                          <ProjectItems
                                                              key={index}
                                                              {...androidProj}
                                                          />
                                                      )
                                                  })
                                              }
                                          </Row>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="third">
                                          <Row>
                                              {
                                                  sqlProj.map((sqlProj, index) => {
                                                      return (
                                                          // <p>{sqlProj.title}</p>
                                                          <ProjectItems
                                                              key={index}
                                                              {...sqlProj}
                                                          />
                                                      )
                                                  })
                                              }
                                          </Row>
                                      </Tab.Pane>
                                  </Tab.Content>
                              </TabContainer>
                          </div>}
                      </TrackVisibility>
                  </Col>
              </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
      </section>
  )
}