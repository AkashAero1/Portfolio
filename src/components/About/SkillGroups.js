import React from "react";
import { Row, Col } from "react-bootstrap";

const groups = [
  {
    title: "AI / GenAI",
    skills: ["LLMs", "AI Agents (ReAct)", "Multi-Agent Systems", "LangGraph", "LangChain", "MCP", "Tool Calling", "RAG", "Vector DBs (Chroma)", "LLM Evals", "Prompt Caching", "Human-in-the-Loop"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "OAuth 2.0", "JWT", "RBAC"],
  },
  {
    title: "Data & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "Apache Airflow", "AWS (S3)", "Docker"],
  },
  {
    title: "Testing",
    skills: ["Playwright", "Vitest", "pytest"],
  },
];

const chip = {
  display: "inline-block",
  margin: "4px",
  padding: "6px 14px",
  borderRadius: "20px",
  border: "1.7px solid rgba(200, 137, 230, 0.637)",
  color: "white",
  fontSize: "0.95em",
};

function SkillGroups() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      {groups.map((g) => (
        <Col md={10} key={g.title} style={{ paddingBottom: "14px", textAlign: "left" }}>
          <h5 className="purple" style={{ marginBottom: 8 }}>{g.title}</h5>
          <div>
            {g.skills.map((s) => (
              <span key={s} style={chip}>{s}</span>
            ))}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default SkillGroups;
