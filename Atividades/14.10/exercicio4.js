class Quiz {
    constructor(correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(userAnswer) {
        if (userAnswer === null) {
            return 'no-answer';
        }
        return userAnswer === this.correctAnswer;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const quiz = new Quiz('c');
    const feedbackP = document.getElementById('feedback');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        const userAnswerNode = document.querySelector('input[name="resposta"]:checked');
        const userAnswer = userAnswerNode ? userAnswerNode.value : null;

        const result = quiz.checkAnswer(userAnswer);

        if (result === 'no-answer') {
            feedbackP.textContent = "Por favor, escolha uma resposta.";
            feedbackP.style.color = "orange";
        } else if (result) {
            feedbackP.textContent = "Resposta Correta!";
            feedbackP.style.color = "green";
        } else {
            feedbackP.textContent = "Resposta Incorreta. Tente novamente.";
            feedbackP.style.color = "red";
        }
    });
});
