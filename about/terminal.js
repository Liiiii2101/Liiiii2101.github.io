const commands = {
  whoami: "Lishan - AI Engineer",
  skills: "Python, PyTorch, D3.js, React, Docker, Bash, Medical Imaging",
  contact: "📧 Email: shanshancai@hotmail.com",
  pwd: "You are in the terminal of Lishan's portfolio.",
  cd: "You are already in the terminal of Lishan's portfolio.",
  ls: "Available commands: whoami, skills, contact, help",  
  help: "Available commands: whoami, skills, contact, help"
};

const terminal = document.getElementById('terminal');
const input = document.getElementById('commandInput');

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const value = input.value.trim();
    if (value) {
      const output = commands[value] || `Command not found: ${value}`;
      terminal.innerHTML += `<div class="terminal-line"><span class="prompt">>></span> ${value}</div>`;
      terminal.innerHTML += `<div class="terminal-line">${output}</div>`;
      terminal.scrollTop = terminal.scrollHeight;
      input.value = '';
    }
  }
});
