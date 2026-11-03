import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import PharmaScope from "../../Assets/Projects/PharmaScope.png"
import Blog from "../../Assets/Projects/Blog.png"
import Appoint from "../../Assets/Projects/Appoint.png"
import FinTrack from "../../Assets/Projects/FinTrack.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PharmaScope}
              isBlog={false}
              title="PharmaScope AI"
              description="An AI agent pipeline built with LangGraph that maps the competitive landscape for any drug target. It collects data from ClinicalTrials.gov, EUCTR and PubMed, uses GPT to extract structured drug data, normalizes it, and computes a phase-weighted crowding score that flags untapped opportunities. Includes token-aware batching for large datasets and a Streamlit UI."
              ghLink="https://github.com/Ritu84/PharmaScope-AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="CampusChronicle"
              description="A full-stack blogging platform with a block-based rich text editor, drafts, tags, search, a trending feed, nested comments and notifications. Supports JWT authentication with bcrypt-hashed passwords, Google sign-in via Firebase, and direct-to-S3 image uploads using pre-signed URLs."
              ghLink="https://github.com/Ritu84/CampusChronicle"
              demoLink="https://gecr-blogs.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Appoint}
              isBlog={false}
              title="Appoint-Me"
              description="A full-stack doctor appointment platform with separate patient, doctor and admin roles. Patients book appointments after an availability check, doctors manage their profiles and approve requests, and admins approve doctor applications. Built with React, Node.js, Express and MongoDB, secured with JWT."
              ghLink="https://github.com/Ritu84/Appoint-Me"
              demoLink="https://doctorapp-xk2x.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FinTrack}
              isBlog={false}
              title="FinTrack"
              description="A finance analytics dashboard that turns KPIs, products and transactions into area, line, bar, pie and scatter charts plus sortable data grids, with a revenue forecast built on linear regression. Written in TypeScript with React, Redux Toolkit (RTK Query) and MUI, backed by a Node.js and MongoDB API."
              ghLink="https://github.com/Ritu84/FinTrack"
              demoLink="https://fintrack-finance.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
