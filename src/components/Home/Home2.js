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
              I'm a software engineer who builds products end to end, from
              the interface people use to the data underneath it.
              <br />
              <br />I work mostly in
              <i>
                <b className="purple"> TypeScript and Python</b>
              </i>
              , with
              <i>
                <b className="purple"> React and Next.js</b>
              </i>{" "}
              on the frontend and
              <i>
                <b className="purple"> FastAPI and Node.js</b>
              </i>{" "}
              on the backend.
              <br />
              <br />
              I've built real-time analytics dashboards,
              <i>
                <b className="purple"> OAuth integrations</b>
              </i>{" "}
              and
              <i>
                <b className="purple"> ETL pipelines</b>
              </i>{" "}
              with PostgreSQL, ClickHouse and Airflow.
              <br />
              <br />
              Lately I'm most excited about
              <i>
                <b className="purple"> AI agents and LLM-powered workflows</b>
              </i>{" "}
              built with LangGraph, LangChain and MCP.
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
