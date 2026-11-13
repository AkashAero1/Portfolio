import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Girl_Coding from "../../Assets/Girl_Coding.webp"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an AI engineer who builds LLM products end to end, from the
              agent that does the work to the interface people use.
              <br />
              <br />
              At Zocket I built
              <i>
                <b className="purple"> multi-agent systems </b>
              </i>
              with LangGraph: a supervisor agent that delegates to specialist
              sub-agents, which pull live ad data through
              <i>
                <b className="purple"> MCP tools</b>
              </i>
              , plus prompt caching, human-in-the-loop approvals and
              structured tool errors so agents recover on their own.
              <br />
              <br />
              I care about making AI trustworthy:
              <i>
                <b className="purple"> RAG with citations</b>
              </i>
              ,
              <i>
                <b className="purple"> LLM evaluation</b>
              </i>{" "}
              and prompt-injection defenses, measured with real numbers.
              <br />
              <br />
              I'm just as comfortable on the rest of the stack:
              <i>
                <b className="purple"> React, Next.js and TypeScript</b>
              </i>{" "}
              on the frontend,
              <i>
                <b className="purple"> FastAPI and Node.js</b>
              </i>{" "}
              on the backend, and PostgreSQL, Redis, ClickHouse and Airflow
              for data.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Girl_Coding} className="img-fluid w-100px" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ritu84"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/SharmaRitu69"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ritu-sharma-a2580222a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
