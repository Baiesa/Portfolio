import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a project I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify} // Update with Regalooo image path
              isBlog={false}
              title="Regalooo"
              description="Developed the frontend with React, Redux, and Tailwind CSS, enabling seamless gifting via email without recipient addresses. Integrated Axios for efficient API communication and real-time updates. Collaborated with backend developers using Flask and PostgreSQL to ensure secure data flow and responsive design."
              ghLink="https://github.com/Baiesa/Regalooooooooooooooo"
              demoLink="https://regalooooooooooooooo.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
