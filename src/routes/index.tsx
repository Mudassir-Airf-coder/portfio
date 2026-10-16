import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mudassir Arif | Agentic AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Mudassir Arif — Agentic AI developer building autonomous LLM systems with LangChain, MCP, and RAG.",
      },
      { property: "og:title", content: "Mudassir Arif | Agentic AI Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Mudassir Arif — Agentic AI developer building autonomous LLM systems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/portfolio.html");
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#a8e8ff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      Loading…
    </div>
  );
}
