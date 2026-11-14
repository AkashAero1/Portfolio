
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I'm an AI Engineer passionate about building intelligent
              systems that go beyond experimentation and solve real-world
              problems.

              <br />
              <br />

              My work focuses on
              <i>
                <b className="purple">
                  {" "}Generative AI, Agentic Systems, and LLM Engineering
                </b>
              </i>
              {" "}— from designing autonomous agents and MCP-based tool
              integrations to building RAG pipelines and reliable
              LLM-powered applications.

              <br />
              <br />

              I'm particularly interested in making AI systems more
              dependable through
              <i>
                <b className="purple">
                  {" "}guardrails, evaluation, observability, and
                  human-in-the-loop workflows.
                </b>
              </i>

              <br />
              <br />

              Beyond LLMs, I've also explored
              <i>
                <b className="purple">
                  {" "}Computer Vision and Applied Machine Learning
                </b>
              </i>
              , building systems for multimodal retrieval, object tracking,
              and predictive modelling.

              <br />
              <br />

              I believe great AI engineering isn't just about choosing
              the right model; it's about engineering the entire system
              around it — making it useful, reliable, and scalable.

              <br />
              <br />

              Currently pursuing my B.Tech at
              <i>
                <b className="purple"> NIT Surat</b>
              </i>
              , I'm constantly learning, experimenting, and building
              towards what's next.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Akash's avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AkashAero1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akash-sharma-305524304/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://codeforces.com/profile/Avgeek"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Codeforces"
                  aria-label="Codeforces"
                >
                  <SiCodeforces />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:akashsharma09501@gmail.com"
                  className="icon-colour home-social-icons"
                  title="Email"
                  aria-label="Email"
                >
                  <AiOutlineMail />
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
