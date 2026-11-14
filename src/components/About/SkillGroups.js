import React from "react";
import { Row, Col } from "react-bootstrap";

const groups = [
  {
    title: "Generative AI & Agentic Systems",
    skills: [
      "LangGraph",
      "LangChain",
      "Model Context Protocol (MCP)",
      "FastMCP",
      "Google ADK",
      "CrewAI",
      "Multi-Agent Orchestration",
      "Human-in-the-Loop Approval",
      "Autonomous Tool Execution",
    ],
  },
  {
    title: "RAG & LLM Evaluation",
    skills: [
      "Hybrid Retrieval (BM25 + Vector)",
      "Cross-Encoder Reranking",
      "RAGAS",
      "LangSmith Tracing",
      "Langfuse",
      "Faithfulness & Hallucination Scoring",
      "Prompt-Injection Defense",
      "PII Masking",
    ],
  },
  {
    title: "Computer Vision & Multimodal AI",
    skills: [
      "YOLO26",
      "BoT-SORT (Tracking)",
      "SigLIP 2 (Semantic Search)",
      "OSNet (Person Re-ID)",
      "FAISS Vector Indexing",
      "Video Analytics",
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "MLPRegressor",
      "FEA Dataset Modeling",
      "Model Evaluation",
    ],
  },
  {
    title: "LLM APIs & Foundations",
    skills: ["Gemini API", "OpenAI", "Anthropic Claude", "Local LLMs", "Embedding Models"],
  },
  {
    title: "Backend, APIs & Databases",
    skills: [
      "Python",
      "FastAPI",
      "C++",
      "PostgreSQL",
      "pgvector",
      "ChromaDB",
      "MongoDB",
      "SQL",
      "SQLite",
      "Streamlit",
      "REST APIs",
    ],
  },
  {
    title: "Data Science & Developer Tools",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Docker",
      "Git",
      "GitHub",
    ],
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
