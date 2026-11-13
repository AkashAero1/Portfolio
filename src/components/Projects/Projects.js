import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import LedgerLine from "../../Assets/Projects/LedgerLine.png"
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
          AI systems and full-stack products I've built recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LedgerLine}
              isBlog={false}
              title="LedgerLine"
              description="An LLM invoice processing pipeline made safe to pay from: the model extracts fields, deterministic code makes every decision. Adds prompt-injection defenses, bank-account masking before LLM calls and retry-safe server-side approvals. An LLM evaluation exposed a leaky 94% accuracy claim, and the fixes cut missed fraud/duplicate reviews from 7/13 to 0/13 at Rs. 0.09 per document, with a regression test for every fix. Built with Python, FastAPI, Gemini, React and TypeScript."
              ghLink="https://github.com/Ritu84/ledgerline"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PharmaScope}
              isBlog={false}
              title="PharmaScope AI"
              description="An agentic AI pipeline built with LangGraph that maps the competitive landscape for any drug target from ClinicalTrials.gov, EUCTR and PubMed, with LLM-driven normalization and phase-weighted crowding scores. Adds RAG over 960 chunks (495 PubMed abstracts, 64 trials) with Gemini embeddings and Chroma: answers cite PMIDs and trial IDs, scoring 90% hit@5 with 0 hallucinated citations and 99% fewer tokens than sending every source."
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
