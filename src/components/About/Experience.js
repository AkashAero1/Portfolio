import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const jobs = [
  {
    company: "Drishti: Intelligent CCTV Search System",
    role: "AI Engineer",
    dates: "May 2026 – July 2026",
    stack: "Python, YOLO26, BoT-SORT, SigLIP 2, OSNet, FAISS, PostgreSQL",
    demoLink: "https://drive.google.com/file/d/1JKpT5FpQCT2jOlJHH2TE9EKImZD84SpZ/view",
    ghLink: "https://github.com/AkashAero1/Drishti",
    points: [
      "Designed an AI-powered CCTV intelligence system enabling natural-language search across surveillance footage, reducing reliance on time-consuming manual video investigations.",
      "Integrated YOLO26 and BoT-SORT for object detection and multi-object tracking, transforming video frames into searchable object tracklets.",
      "Developed a multimodal retrieval architecture using SigLIP 2 for text-image semantic search, OSNet for appearance-based person re-identification, and FAISS for similarity-based retrieval.",
      "Architected a PostgreSQL-backed metadata layer connecting visual search results with camera, location, and investigation records.",
    ],
  },
  {
    company: "Structural ML Research · SVNIT Surat",
    role: "Machine Learning Researcher",
    dates: "2024 – Present",
    stack: "Python, Scikit-learn, XGBoost, MLPRegressor, FEA, Pandas, NumPy",
    ghLink: "https://github.com/AkashAero1",
    points: [
      "Developed MLPRegressor and XGBoost machine learning models to predict elastic buckling loads of cellular steel beams using FEA-generated datasets, achieving an R² score of 99.8%.",
      "Automated feature extraction and data preparation from complex finite element simulations, enabling rapid structural performance assessment.",
      "Conducted comparative benchmarking across deep neural regression and gradient-boosted ensembles to ensure optimal generalization on structural load variations.",
    ],
  },
  {
    company: "Open Source & Competitions",
    role: "Contributor & Hackathon Winner",
    dates: "2024 – Present",
    stack: "LangGraph, FastMCP, Python, C++, Docker, Git",
    ghLink: "https://github.com/AkashAero1",
    points: [
      "Secured 2nd Place in the prestigious e-Rakshak Hackathon conducted by Surat City Police for building innovative security and surveillance intelligence tools.",
      "Contributor at Google Winter of Code (GWOC), collaborating on open-source software projects and developer ecosystems.",
      "Active competitive programmer on Codeforces (handle: Avgeek), practicing advanced algorithms and data structures.",
    ],
  },
];

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {jobs.map((job) => (
        <Col md={10} key={job.company} style={{ paddingBottom: "20px" }}>
          <Card className="quote-card-view" style={{ textAlign: "left" }}>
            <Card.Body>
              <h4 style={{ marginBottom: 4 }}>
                <span className="purple">{job.company}</span> · {job.role}
              </h4>
              <p style={{ color: "rgb(155 126 172)", marginBottom: 12 }}>
                {job.dates} · {job.stack}
              </p>
              <ul style={{ paddingLeft: "1.2em", marginBottom: 0 }}>
                {job.points.map((p) => (
                  <li key={p} style={{ paddingBottom: 6 }}>
                    {p}
                  </li>
                ))}
              </ul>
              {(job.ghLink || job.demoLink) && (
                <div style={{ marginTop: "14px" }}>
                  {job.demoLink && (
                    <Button
                      variant="primary"
                      href={job.demoLink}
                      target="_blank"
                      size="sm"
                      style={{ marginRight: "10px" }}
                    >
                      <CgWebsite /> &nbsp;Demo
                    </Button>
                  )}
                  {job.ghLink && (
                    <Button
                      variant="primary"
                      href={job.ghLink}
                      target="_blank"
                      size="sm"
                    >
                      <BsGithub /> &nbsp;GitHub
                    </Button>
                  )}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Experience;
