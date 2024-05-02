import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "WEB-Development",
      imgUrl: projImg1,
    },
    {
      title: "Art & Business",
      description: "WEB-Development",
      imgUrl: projImg2,
    },
    {
      title: "Сryptocurrency",
      description: "UI/UX Development",
      imgUrl: projImg3,
    },
    {
      title: "Art & Photo Studio",
      description: "WEB-Development",
      imgUrl: projImg4,
    },
    {
      title: "Business & Medicine",
      description: "WEB-Development",
      imgUrl: projImg5,
    },
    {
      title: "Restaurant Business",
      description: "UI/UX Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here you can see and familiarize yourself with the web
                    applications in which I participated, as well as see a list
                    of the technologies used in them
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Work Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Technologies</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Completed several freelance orders. Mainly simple
                          landing pages, but also participated in work on online
                          gallery and online stores.
                        </p>
                        <p>
                          While working at Webtronics as a React developer.
                          Worked with several projects related to
                          cryptocurrency, where he was directly involved in the
                          development of the user interface.
                        </p>
                        <p>
                          {" "}
                          After finishing his work at Webtronics, he returned to
                          freelancing. During this time, I performed several
                          landings, as well as on the development of the user
                          interface for a private clinic.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          HTML: A markup language used to create the structure
                          of web pages.
                        </p>
                        <p>
                          CSS: Style Language, used to define the appearance of
                          web page elements such as colors, fonts, sizes, etc.{" "}
                        </p>
                        <p>
                          Gulp: This is a tool for automating routine tasks in
                          web development, such as compiling SCSS to CSS,
                          optimizing images, and more.{" "}
                        </p>
                        <p>
                          SCSS: An extension of CSS with support for variables,
                          nested rules, mixins, and more, making it easier to
                          write and organize styles.{" "}
                        </p>
                        <p>
                          JavaScript ES6: The latest version of the JavaScript
                          language, which has many new features and improvements
                          for developers.
                        </p>
                        <p>
                          ReactJS: A JavaScript library for developing user
                          interfaces that allows you to create efficient and
                          scalable web applications.
                        </p>
                        <p>
                          React-hook-form, yup: Libraries for working with forms
                          in React, allowing convenient validation and
                          processing of data.{" "}
                        </p>
                        <p>
                          TypeScript: An extension to JavaScript with support
                          for strict types, which allows you to detect and
                          correct errors at the stage of writing code.{" "}
                        </p>
                        <p>
                          Redux, Redux-Toolkit: Tools for managing application
                          state in React, which allow you to efficiently
                          organize and manage application state.
                        </p>
                        <p>
                          GIT: A version control system that allows you to store
                          and manage the history of changes in a project's code.
                        </p>
                        <p>
                          Node JS: A JavaScript runtime that allows you to run
                          server-side code, develop web applications, and
                          perform various server-side operations.{" "}
                        </p>
                        <p>
                          Styled Component: A library for React that allows you
                          to write CSS as JavaScript code, making it easier to
                          work with styles and manage them in components.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
