import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Drishti from "../../Assets/Projects/Drishti.png";
import InvoiceIQ from "../../Assets/Projects/InvoiceIQ.png";
import AgentNexus from "../../Assets/Projects/AgentNexus.png";
import EvalForge from "../../Assets/Projects/EvalForge.png";
import SteelBeamML from "../../Assets/Projects/SteelBeamML.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          AI systems, multimodal search, agentic platforms, and machine learning research I've built.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drishti}
              isBlog={false}
              title="Drishti : Intelligent CCTV Search System"
              description="An AI-powered CCTV intelligence system enabling natural-language search across surveillance footage, transforming raw video into searchable tracklets. Integrates YOLO26 & BoT-SORT for object tracking, SigLIP 2 for multimodal text-image semantic retrieval, OSNet for appearance-based person re-identification, FAISS for high-speed similarity search, and a PostgreSQL metadata layer connecting visual results with camera, location, and investigation logs."
              ghLink="https://github.com/AkashAero1/Drishti"
              demoLink="https://drive.google.com/file/d/1JKpT5FpQCT2jOlJHH2TE9EKImZD84SpZ/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InvoiceIQ}
              isBlog={false}
              title="InvoiceIQ : Invoice Processing & Approval Automation"
              description="A secure LLM-powered financial document processing pipeline with prompt-injection defenses, PII masking, and retry-safe approval workflows. Evaluated across 100 invoices and 800 field values targeting 90% field-level accuracy. Engineered a deterministic policy engine flagging duplicate invoices, missing POs, and payment-limit violations with human-in-the-loop exception routing and complete audit trails."
              ghLink="https://github.com/AkashAero1/InvoiceIQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AgentNexus}
              isBlog={false}
              title="Agent Nexus : Agentic AI Platform with MCP & RAG"
              description="A multi-agent platform orchestrated via LangGraph integrating multiple Model Context Protocol (MCP) servers for tool discovery, multi-step execution, and document-grounded question answering. Features hybrid RAG with BM25 + dense vector embeddings, cross-encoder reranking, source citations, permission-controlled tool execution, human-in-the-loop approvals, persistent agent state, and execution tracing."
              ghLink="https://github.com/AkashAero1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EvalForge}
              isBlog={false}
              title="EvalForge : LLM Evaluation & Regression Testing"
              description="An automated LLM evaluation framework scoring model outputs on faithfulness, relevance, correctness, and hallucination across 100 test cases using RAGAS metrics orchestrated via LangGraph. Implements synthetic test-data generation pipelines for systematic stress testing and integrates LangSmith for granular tracing, prompt versioning, and side-by-side benchmarking."
              ghLink="https://github.com/AkashAero1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SteelBeamML}
              isBlog={false}
              title="Cellular Steel Beam Buckling Load Prediction"
              description="Applied Machine Learning research developing MLPRegressor neural network and XGBoost models to predict elastic buckling loads of cellular steel beams using FEA-generated datasets, achieving an exceptional R² score of 99.8%. Replaces hours of computationally intensive finite element simulations with instantaneous, accurate structural performance predictions."
              ghLink="https://github.com/AkashAero1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
