import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed & Built by Akash Sharma</h3>
        </Col>
        <Col md="4" className="footer-copyWright">
          <h3>Copyright © {year} AS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AkashAero1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/akash-sharma-305524304/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://codeforces.com/profile/Avgeek"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="Codeforces"
              >
                <SiCodeforces />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:akashsharma09501@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="Email"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
