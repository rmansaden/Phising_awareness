const quizData = [
    {
        question: "What is phishing?",
        options: [
            "A type of fish",
            "A fishing technique",
            "An attack designed to steal personal information",
            "A video game"
        ],
        correct: 2,
        explanation: "Phishing is a fraudulent technique used to obtain personal information."
    },
    {
        question: "What should you do if you receive a suspicious email?",
        options: [
            "Click the link to check it",
            "Reply to request more information",
            "Do not click and report it to IT",
            "Forward it to your colleagues"
        ],
        correct: 2,
        explanation: "Always report suspicious emails instead of interacting with them."
    },
    {
        question: "What is a typical sign of a phishing email?",
        options: [
            "Using your first name",
            "A request for urgent action",
            "A link to an HTTPS website",
            "A professional signature"
        ],
        correct: 1,
        explanation: "Phishing emails often create a sense of urgency."
    },
    {
        question: "How can you check whether a link is safe?",
        options: [
            "Click it",
            "Hover over it without clicking",
            "Copy it into the address bar",
            "Ask the sender"
        ],
        correct: 1,
        explanation: "Always hover over a link to see its real destination."
    },
    {
        question: "What does the acronym 2FA mean?",
        options: [
            "2 Factor Authentication",
            "2 Fast Algorithms",
            "2 File Archive",
            "2 Formula Access"
        ],
        correct: 0,
        explanation: "2FA = Authentification a deux facteurs (Two-Factor Authentication)."
    },
    {
        question: "What is the best way to protect your accounts?",
        options: [
            "Use the same password everywhere",
            "Do not use a password",
            "Use a unique password for each account with 2FA",
            "Write your passwords on a sticky note"
        ],
        correct: 2,
        explanation: "Unique passwords and 2FA provide the best protection."
    },
    {
        question: "What should you do if you clicked a phishing link?",
        options: [
            "Nothing, it is harmless",
            "Change your passwords immediately",
            "Wait and see what happens",
            "Tell nobody"
        ],
        correct: 1,
        explanation: "Change your passwords immediately and report the incident."
    },
    {
        question: "What is spear phishing?",
        options: [
            "Generic phishing",
            "Phishing targeted at a specific person",
            "A new fishing technique",
            "A security tool"
        ],
        correct: 1,
        explanation: "Spear phishing is a targeted and personalized attack."
    },
    {
        question: "Which information should NEVER be shared by email?",
        options: [
            "Your date of birth",
            "Your address",
            "Your password",
            "Your name"
        ],
        correct: 2,
        explanation: "Never share your passwords by email."
    },
    {
        question: "What does the green padlock in the address bar mean?",
        options: [
            "The website is safe",
            "The website uses HTTPS",
            "The website is certified",
            "All of these answers are correct"
        ],
        correct: 3,
        explanation: "The padlock indicates an HTTPS connection, but HTTPS alone does not prove a website is legitimate."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function startTraining() {
    const typesSection = document.getElementById('types');
    if (typesSection) {
        typesSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    alert('Welcome to the Phishing Awareness training!\n\nExplore each section, then complete the final quiz to test your knowledge.');
    
    const firstCard = document.querySelector('.type-card');
    if (firstCard) {
        firstCard.style.borderColor = '#6C63FF';
        firstCard.style.boxShadow = '0 0 20px rgba(108,99,255,0.3)';
        setTimeout(() => {
            firstCard.style.borderColor = 'transparent';
            firstCard.style.boxShadow = '';
        }, 3000);
    }
}

function loadQuestion() {
    const progressBar = document.querySelector('.progress-bar');
    const counter = document.getElementById('question-counter');
    
    if (currentQuestion >= quizData.length) {
        showResult();
        return;
    }
    
    const q = quizData[currentQuestion];
    document.getElementById('question-text').textContent = q.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(btn);
    });
    
    const progress = ((currentQuestion) / quizData.length) * 100;
    progressBar.style.setProperty('--progress', progress + '%');
    counter.textContent = (currentQuestion + 1) + '/' + quizData.length;
    
    answered = false;
}

function selectOption(index) {
    if (answered) return;
    answered = true;
    
    const q = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach((btn, i) => {
        btn.style.cursor = 'default';
        if (i === q.correct) {
            btn.classList.add('correct');
        } else if (i === index && i !== q.correct) {
            btn.classList.add('incorrect');
        }
        
        if (i === index) {
            if (i === q.correct) {
                score++;
            }
        }
    });
    
    const explanation = document.createElement('p');
    explanation.style.marginTop = '1rem';
    explanation.style.padding = '1rem';
    explanation.style.background = '#F3F4F6';
    explanation.style.borderRadius = '8px';
    explanation.textContent = 'Explanation: ' + q.explanation;
    
    const container = document.getElementById('options-container');
    container.appendChild(explanation);
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn-primary';
    nextBtn.textContent = currentQuestion === quizData.length - 1 ? 'View results' : 'Next question';
    nextBtn.style.marginTop = '1rem';
    nextBtn.onclick = () => {
        currentQuestion++;
        loadQuestion();
    };
    container.appendChild(nextBtn);
}

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    const percentage = (score / quizData.length) * 100;
    document.getElementById('score').textContent = score;
    
    let icon, title, message;
    if (percentage === 100) {
        icon = 'Trophee';
        title = 'Perfect!';
        message = 'You are a security awareness expert. Keep helping others stay aware.';
    } else if (percentage >= 80) {
        icon = 'Etoile';
        title = 'Very good!';
        message = 'You have a strong understanding of phishing. Stay vigilant!';
    } else if (percentage >= 60) {
        icon = 'Livre';
        title = 'Not bad!';
        message = 'Review the sections about recognizing phishing.';
    } else {
        icon = 'Avertissement';
        title = 'Room to improve';
        message = 'We recommend reviewing the training carefully.';
    }
    
    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-message').textContent = message;
    
    document.querySelector('.progress-bar').style.width = '100%';
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestion);
