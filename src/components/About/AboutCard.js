import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Sharma </span>
            from <span className="purple">Surat, Gujarat, India</span>.
            <br />
            I am an AI Engineer pursuing my <b>B.Tech at Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat</b> (2024 – 2028) with a <b>CGPA of 8.1</b>.
            <br />
            <br />
            I specialize in multimodal AI, computer vision, agentic workflows, and production LLM systems.
            As an AI Engineer, I built <b>Drishti</b>, an intelligent CCTV search system enabling natural-language
            video search across surveillance feeds using YOLO26, BoT-SORT, SigLIP 2, OSNet, and FAISS.
            <br />
            <br />
            My engineering work spans autonomous agent platforms using <b>LangGraph and MCP</b> (Agent Nexus),
            automated evaluation frameworks using <b>RAGAS and LangSmith</b> (EvalForge), and secure LLM financial
            automation pipelines (InvoiceIQ). I have also published ML research predicting structural buckling loads
            with <b>99.8% R² accuracy</b> using XGBoost and MLPRegressor.
            <br />
            <br />
            Key Achievements & Community:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🥈 <b>2nd Place</b> in the <b>e-Rakshak Hackathon</b> conducted by Surat City Police
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌐 Open-Source Contributor at <b>Google Winter of Code (GWOC)</b>
            </li>
            <li className="about-activity">
              <ImPointRight /> ⚡ Competitive Programmer on{" "}
              <a href="https://codeforces.com/profile/Avgeek" target="_blank" rel="noreferrer" className="purple">
                Codeforces (Avgeek)
              </a>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Strive to engineer reliable, scalable, and auditable AI systems that make an impact!"
          </p>
          <footer className="blockquote-footer">Akash Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
