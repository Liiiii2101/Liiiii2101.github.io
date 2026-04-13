const commands = {
  help:     "Available commands: whoami, skills, contact, linkedin, pwd, ls, clear, help",
  ls:       "Available commands: whoami, skills, contact, linkedin, pwd, ls, clear, help",
  whoami:   "Lishan Cai — AI Engineer | Deep Learning | Medical Image Analysis",
  skills:   "Python, PyTorch, Deep Learning, Medical Imaging, D3.js, React, Docker, Bash",
  contact:  "Email: shanshancai@hotmail.com",
  linkedin: '<a href="https://www.linkedin.com/in/lishan-cai-851b20178/" target="_blank" rel="noopener" style="color:#ff963b">linkedin.com/in/lishan-cai-851b20178</a>',
  pwd:      "/home/lishan/portfolio",
  cd:       "You are already in the right place.",
};

const terminal = document.getElementById('terminal');
const input    = document.getElementById('commandInput');

function appendLine(html, cls = 'output') {
  const div = document.createElement('div');
  div.className = 'terminal-line ' + cls;
  div.innerHTML = html;
  terminal.appendChild(div);
  terminal.scrollTop = terminal.scrollHeight;
}

input.addEventListener('keydown', function(event) {
  if (event.key !== 'Enter') return;
  const value = input.value.trim();
  if (!value) return;

  appendLine(`<span class="prompt">lishan@portfolio:~$</span> ${value}`);

  if (value === 'clear') {
    terminal.innerHTML = '';
  } else {
    const response = commands[value];
    if (response) {
      appendLine(response);
    } else {
      appendLine(`Command not found: ${value}. Type <b>help</b> for available commands.`, 'error');
    }
  }

  input.value = '';
});
