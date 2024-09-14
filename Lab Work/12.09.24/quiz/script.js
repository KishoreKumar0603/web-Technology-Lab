function nextQuestion(nextQuestionId) {
    const currentQuestion = document.querySelector('.question-container.active');
    currentQuestion.classList.remove('active');
    
    const nextQuestion = document.getElementById(nextQuestionId);
    nextQuestion.classList.add('active');
  }
  
  function endQuiz() {
    const currentQuestion = document.querySelector('.question-container.active');
    currentQuestion.classList.remove('active');
  
    const endScreen = document.getElementById('endQuiz');
    endScreen.style.display = 'block';
  }
  