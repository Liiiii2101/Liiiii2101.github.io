const { createRoot } = ReactDOM;
const { ReactTerminal } = window.ReactTerminal;

const commands = {
  whoami: "Liiiii2101 - AI Engineer",
  skills: "Python, PyTorch, D3.js, React, Docker, Bash, Medical Imaging",
  contact: "📧 Email: your.email@example.com",
  help: "Available commands: whoami, skills, contact, help"
};

const App = () => (
  React.createElement('div', { style: { width: "100%", maxWidth: 600, margin: "2rem auto" } },
    React.createElement(ReactTerminal, {
      prompt: ">>>",
      commands: commands,
      welcomeMessage: "Type `help` to see available commands"
    })
  )
);

const container = document.getElementById("terminal-root");
const root = createRoot(container);
root.render(React.createElement(App));
