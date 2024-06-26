import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from 'react'; // Import useState
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  const [url, setUrl] = useState(''); // Add state for URL

  const handleProjectClick = () => {
    setUrl(projectUrl); // Set the URL state
    window.open(projectUrl); 
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleProjectClick}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Stand Alone Complex",
      description: "Personal Blog",
      imgUrl: projImg1,
      projectUrl: "https://rinderv.github.io/SAC/", 
    },
    {
      title: "Clash Of Heroes",
      description: "Interactive Game",
      imgUrl: projImg4,
      projectUrl: "https://rinderv.github.io/Clash-Of-Heroes/",
    },
    {
      title: "Memory Game",
      description: "Game Development",
      imgUrl: projImg2,
      projectUrl: "https://rinderv.github.io/BopIT/", 
    },
    {
      title: "Dice Game",
      description: "Game Development",
      imgUrl: projImg3,
      projectUrl: "https://rinderv.github.io/Dice-Game/",
    },
  ];
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>With a passion for blending creativity and technology, I have spent the past several months diving into the dynamic world of web and game development. My portfolio showcases a diverse array of projects, each demonstrating my growing expertise and commitment to crafting exceptional digital experiences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More Coming Soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More Coming Soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}