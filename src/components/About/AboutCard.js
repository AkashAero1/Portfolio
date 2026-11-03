import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritu Sharma </span>
            from <span className="purple"> India</span>.
            <br />
            I'm a software engineer with experience building full-stack
            products, data pipelines and AI-powered features. I hold a
            B.E. in Computer Engineering from GEC Rajkot.
            <br />
            <br />
            I love problem-solving: I'm a{" "}
            <a href="https://leetcode.com/u/Ritu84/" target="_blank" rel="noreferrer">
              LeetCode Knight
            </a>{" "}
            with 700+ problems solved, 3-star on CodeChef, and I led my
            college's Google Developer Student Club in 2023.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ritu Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
