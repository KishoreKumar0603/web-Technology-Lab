function nextQuestion(nextQuestionId) {
    // Hide current question
    const currentQuestion = document.querySelector('.question-container.active');
    currentQuestion.classList.remove('active');
    
    // Show next question with animation
    const nextQuestion = document.getElementById(nextQuestionId);
    nextQuestion.classList.add('active');
  }
  
  function endQuiz() {
    // Hide the last question
    const currentQuestion = document.querySelector('.question-container.active');
    currentQuestion.classList.remove('active');
  
    // Show end screen
    const endScreen = document.getElementById('endQuiz');
    endScreen.style.display = 'block';
  }
  