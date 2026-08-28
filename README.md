# Phishing Awareness Training

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=111111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![No dependencies](https://img.shields.io/badge/dependencies-none-2ea44f)](#requirements)

An interactive security awareness module that teaches people how to recognize, report, and prevent phishing attacks. The project includes a browser-based presentation and a terminal quiz, so it works without a build step or external dependencies.

## Features

- Responsive training presentation for desktop and mobile browsers
- Practical examples of suspicious and legitimate messages
- Coverage of phishing, smishing, vishing, spear phishing, whaling, and clone phishing
- Interactive ten-question browser quiz with immediate feedback
- Equivalent Python command-line quiz for offline use
- Best-practice checklist for prevention and incident response

## Preview

Open `presentation.html` through a local web server to explore the training module.

## Project Structure

```text
.
├── presentation.html
├── quiz_interactive.py
├── assets/
│   ├── css/style.css
│   └── js/script.js
├── resources/
│   └── best_practices.md
├── test_quiz.sh
├── test_web.sh
└── README.md
```

## Requirements

- A modern browser: Chrome, Firefox, Edge, or Safari
- Python 3.6 or newer for the terminal quiz and local web server
- Bash for the helper scripts
- No package installation is required

## Getting Started

Clone or download the project, then open its directory:

```bash
cd phishing_awareness
chmod +x test_web.sh test_quiz.sh
```

### Web Training

Start the local server:

```bash
./test_web.sh
```

Then visit <http://localhost:8000/presentation.html>. You can also start the server directly with `python3 -m http.server 8000`.

### Terminal Quiz

Run the interactive Python quiz:

```bash
./test_quiz.sh
```

Results are appended to `quiz_results.txt`, which is intentionally ignored by Git.

## Validation

Run the lightweight checks used during development:

```bash
bash -n test_web.sh test_quiz.sh
python3 -m py_compile quiz_interactive.py
```

## Technologies and Tools

| Area | Technology or tool |
| --- | --- |
| Web structure | HTML5 |
| Styling | CSS3, responsive layout, CSS custom properties |
| Interactivity | Vanilla JavaScript and DOM APIs |
| Offline quiz | Python 3 standard library |
| Local serving | Python `http.server` |
| Validation | Bash syntax checks and Python bytecode compilation |
| Documentation | Markdown and Shields.io badges |

## Learning Resources

- [Best practices checklist](resources/best_practices.md)
- [OWASP phishing guidance](https://owasp.org/www-community/attacks/Phishing)
- [CISA phishing guidance](https://www.cisa.gov/topics/cyber-threats-and-advisories/phishing)

## Educational Notice

This project was created for security awareness training as part of the CodeAlfa 2026 internship. The examples are fictional and intended for education only.
