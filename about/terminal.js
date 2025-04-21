import React from "react";
import { createRoot } from "react-dom/client";
import { ReactTerminal } from "react-terminal";

const commands = {
  whoami: "Liiiii2101 - AI Engineer",
  skills: "Python, PyTorch, D3.js, React, Docker, Bash, Medical Imaging",
  contact: "📧 Email: your.email@example.com",
  help: "Available commands: whoami, skills, contact, help"
};

const App = () => (
  <div style={{ width: "100%", maxWidth: 600, margin: "2rem auto" }}>
    <ReactTerminal
      prompt=">>>"
      commands={commands}
      welcomeMessage={"Type `help` to see available commands"}
    />
  </div>
);

const container = document.getElementById("terminal-root");
createRoot(container).render(<App />);
