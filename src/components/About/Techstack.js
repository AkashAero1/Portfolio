import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiFastapi,
  SiPostgresql,
  SiSqlite,
  SiDocker,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiOpenai,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyTorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Scikit-learn">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="FastAPI">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SQLite">
        <SiSqlite />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Streamlit">
        <SiStreamlit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pandas">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NumPy">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="LLM APIs">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
