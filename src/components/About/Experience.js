import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const jobs = [
  {
    company: "Zocket",
    role: "SDE-1",
    dates: "Sep 2025 – Oct 2026",
    stack: "TypeScript, Python, FastAPI, LangGraph, MCP, React",
    points: [
      "Built multi-agent orchestration with LangGraph Deep Agents: a supervisor agent delegates to specialist sub-agents (Meta Ads, Google Ads, GA4, dashboards) that fetch live data through MCP tools.",
      "Built the Paid Media Overview hub on ReAct AI agents with no-fabrication guardrails and cached fallbacks, turning AI insights across 3 ad platforms into tasks in one click.",
      "Implemented prompt caching and structured tool-error handling for LangGraph sub-agents, enabling recovery from invalid tool arguments and reducing repeated prompt processing.",
      "Built human-in-the-loop approval cards with a custom React tool-UI handler: the agent's tool call pauses on a LangGraph interrupt and resumes on approve/reject.",
      "Extended the LangGraph run webhook to persist chat status to PostgreSQL, recovering chats from missed webhook events.",
      "Engineered the React visualization layer of AI-powered Dashboard Studio (10+ chart types, version history), adopted by 5 organizations (~100 dashboards), reducing dashboard creation from weeks to hours.",
      "Secured Google OAuth 2.0 connectors against cross-user account takeover; built a CRM-to-ClickHouse connector in nightly Airflow ETL, ingesting 671 deals (vs. 50).",
      "Wrote 150+ tests (Vitest, Playwright E2E, pytest); used AI coding agents (Cursor, Claude Code) daily.",
    ],
  },
  {
    company: "Ikyam Solutions",
    role: "Software Developer Intern",
    dates: "Jan 2025 – Aug 2025",
    stack: "React, FastAPI, MongoDB, Redis, AWS",
    points: [
      "Engineered full-stack modules for an algorithmic trading platform: backtesting analytics, capital deployment dashboards and portfolio tracking.",
      "Optimized Redis-backed FastAPI APIs for financial time-series data, reducing response latency from 1.5s to 70ms.",
      "Built automated OHLC validation pipelines reconciling historical and live market data from Zerodha Kite and Redis, with email discrepancy reports.",
    ],
  },
  {
    company: "Finaccru",
    role: "Software Developer Intern",
    dates: "Jun 2024 – Nov 2024",
    stack: "React, Redux Toolkit, Firebase",
    points: [
      "Engineered a secure document management platform for a B2B fintech application, supporting 200+ file uploads, storage and retrieval.",
      "Implemented cross-subdomain SSO using Firebase custom authentication tokens across 3 applications.",
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
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Experience;
