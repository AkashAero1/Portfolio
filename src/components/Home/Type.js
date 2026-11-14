import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Engineer",
          "Agentic AI & MCP Systems",
          "Multimodal Video Intelligence",
          "RAG & LLM Evaluation",
          "Machine Learning Researcher",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
