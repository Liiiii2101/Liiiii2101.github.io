const commands = {
  help:     "Available commands: whoami, skills, education, experience, contact, linkedin, github, pwd, clear",
  whoami:   "Lishan Cai — AI Engineer & Researcher. Specializing in Deep Learning and Medical Image Analysis.",
  skills:   "Languages: Python, C++, SQL\nFrameworks: PyTorch, TensorFlow, nnU-Net, MONAI, Scikit-learn\nTools: Docker, Git, Linux, CI/CD",
  education: "PhD in AI for Medical Image Analysis (NKI)\nM.Sc. in Bioinformatics (Copenhagen University)",
  experience: "AI Medical Analyst @ Amsterdam UMC\nPhD Candidate @ Netherlands Cancer Institute",
  contact:  "Email: lishancai21@gmail.com",
  linkedin: '<a href="https://www.linkedin.com/in/lishan-cai-851b20178/" target="_blank" rel="noopener" style="color:#2997ff">linkedin.com/in/lishan-cai-851b20178</a>',
  github:   '<a href="https://github.com/Liiiii2101" target="_blank" rel="noopener" style="color:#2997ff">github.com/Liiiii2101</a>',
  pwd:      "/home/lishancai/portfolio",
  ls:       "about.txt  skills.txt  projects/  publications/",
  clear:    "(Clears the screen)",
};

const terminal = document.getElementById('terminal');
const input    = document.getElementById('commandInput');

function appendLine(html, cls = 'output') {
  const div = document.createElement('div');
  div.className = 'terminal-line ' + cls;
  div.innerHTML = html.replace(/\n/g, '<br>');
  terminal.appendChild(div);
  terminal.scrollTop = terminal.scrollHeight;
}

input.addEventListener('keydown', function(event) {
  if (event.key !== 'Enter') return;
  const value = input.value.trim().toLowerCase();
  if (!value) return;

  appendLine(`<span class="prompt">lishan@portfolio:~$</span> ${value}`);

  if (value === 'clear') {
    terminal.innerHTML = '<div class="terminal-line output">Screen cleared. Type <b>help</b> for commands.</div>';
  } else if (value === 'ls') {
     appendLine(commands.ls);
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
