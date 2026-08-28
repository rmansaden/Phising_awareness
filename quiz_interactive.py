#!/usr/bin/env python3
import random
from datetime import datetime

class PhishingQuiz:
    def __init__(self):
        self.questions = [
            {
                "question": "What is phishing?",
                "options": [
                    "A type of fish",
                    "A fishing technique",
                    "An attack designed to steal personal information",
                    "A video game"
                ],
                "correct": 2,
                "explanation": "Phishing is a fraudulent technique used to obtain personal information."
            },
            {
                "question": "What should you do if you receive a suspicious email?",
                "options": [
                    "Click the link to check it",
                    "Reply to request more information",
                    "Do not click and report it to IT",
                    "Forward it to your colleagues"
                ],
                "correct": 2,
                "explanation": "Always report suspicious emails instead of interacting with them."
            },
            {
                "question": "What is a typical sign of a phishing email?",
                "options": [
                    "Using your first name",
                    "A request for urgent action",
                    "A link to an HTTPS website",
                    "A professional signature"
                ],
                "correct": 1,
                "explanation": "Phishing emails often create a sense of urgency."
            },
            {
                "question": "How can you check whether a link is safe?",
                "options": [
                    "Click it",
                    "Hover over it without clicking",
                    "Copy it into the address bar",
                    "Ask the sender"
                ],
                "correct": 1,
                "explanation": "Always hover over a link to see its real destination."
            },
            {
                "question": "What does the acronym 2FA mean?",
                "options": [
                    "2 Factor Authentication",
                    "2 Fast Algorithms",
                    "2 File Archive",
                    "2 Formula Access"
                ],
                "correct": 0,
                "explanation": "2FA means Two-Factor Authentication."
            },
            {
                "question": "What is the best way to protect your accounts?",
                "options": [
                    "Use the same password everywhere",
                    "Do not use a password",
                    "Use a unique password for each account with 2FA",
                    "Write your passwords on a sticky note"
                ],
                "correct": 2,
                "explanation": "Unique passwords and 2FA provide the best protection."
            },
            {
                "question": "What should you do if you clicked a phishing link?",
                "options": [
                    "Nothing, it is harmless",
                    "Change your passwords immediately",
                    "Wait and see what happens",
                    "Tell nobody"
                ],
                "correct": 1,
                "explanation": "Change your passwords immediately and report the incident."
            },
            {
                "question": "What is spear phishing?",
                "options": [
                    "Generic phishing",
                    "Phishing targeted at a specific person",
                    "A new fishing technique",
                    "A security tool"
                ],
                "correct": 1,
                "explanation": "Spear phishing is a targeted and personalized attack."
            },
            {
                "question": "Which information should NEVER be shared by email?",
                "options": [
                    "Your date of birth",
                    "Your address",
                    "Your password",
                    "Your name"
                ],
                "correct": 2,
                "explanation": "Never share your passwords by email."
            },
            {
                "question": "What does the green padlock in the address bar mean?",
                "options": [
                    "The website is safe",
                    "The website uses HTTPS",
                    "The website is certified",
                    "All of these answers are correct"
                ],
                "correct": 3,
                "explanation": "The padlock indicates an HTTPS connection, but HTTPS alone does not prove a website is legitimate."
            }
        ]
        self.score = 0
        self.total = len(self.questions)
    
    def display_header(self):
        print("\n" + "=" * 50)
        print("            PHISHING QUIZ - 2026")
        print("       Test your security awareness")
        print("=" * 50 + "\n")
    
    def display_question(self, q_index):
        q = self.questions[q_index]
        print(f"\nQuestion {q_index + 1}/{self.total}")
        print("-"*40)
        print(q['question'] + "\n")
        
        for i, option in enumerate(q['options'], 1):
            print(f"  {i}. {option}")
        
        print()
    
    def get_user_answer(self):
        while True:
            try:
                answer = int(input("Your choice (1-4): "))
                if 1 <= answer <= 4:
                    return answer - 1
                print("Please enter a number between 1 and 4.")
            except ValueError:
                print("Please enter a valid number.")
    
    def show_feedback(self, q, user_answer):
        correct = q['correct']
        if user_answer == correct:
            self.score += 1
            print("\n[OK] Correct answer!")
        else:
            print(f"\n[X] Incorrect. The correct answer was: {q['options'][correct]}")
        
        print(f"[INFO] Explanation: {q['explanation']}\n")
        print("-" * 50)
    
    def show_results(self):
        percentage = (self.score / self.total) * 100
        
        print("\n" + "="*50)
        print("                RESULTS")
        print("=" * 50)
        print(f"Score: {self.score}/{self.total}")
        print(f"Percentage: {percentage:.1f}%")
        
        if percentage == 100:
            print("Excellent! You are a security awareness expert!")
        elif percentage >= 80:
            print("Very good! Keep helping others stay aware.")
        elif percentage >= 60:
            print("Not bad! Review the key sections.")
        else:
            print("There is room to improve. Review the training carefully.")
        
        with open("quiz_results.txt", "a", encoding="utf-8") as results_file:
            results_file.write(f"{datetime.now():%Y-%m-%d %H:%M:%S}: Score {self.score}/{self.total} ({percentage:.1f}%)\n")
        
        print("\nResults saved to quiz_results.txt")
        print("=" * 50 + "\n")
    
    def run(self):
        self.display_header()
        
        random.shuffle(self.questions)
        
        for i in range(self.total):
            self.display_question(i)
            user_answer = self.get_user_answer()
            self.show_feedback(self.questions[i], user_answer)
        
        self.show_results()

if __name__ == "__main__":
    quiz = PhishingQuiz()
    quiz.run()
