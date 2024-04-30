const questions = [
    {
      question: "Qual é o nome do protagonista de 'Naruto'?",
      options: ["Naruto Uzumaki", "Sasuke Uchiha", "Ichigo Kurosaki", "Monkey D. Luffy"],
      answer: "Naruto Uzumaki"
    },
    {
      question: "Quem é o autor de 'One Piece'?",
      options: ["Masashi Kishimoto", "Eiichiro Oda", "Tite Kubo", "Hiro Mashima"],
      answer: "Eiichiro Oda"
    },
    {
      question: "Qual é o nome do personagem principal de 'Dragon Ball Z'?",
      options: ["Goku", "Vegeta", "Piccolo", "Gohan"],
      answer: "Goku"
    },
    {
      question: "Em 'Death Note', quem é o protagonista que encontra o Death Note?",
      options: ["L", "Misa Amane", "Ryuk", "Light Yagami"],
      answer: "Light Yagami"
    },
    {
      question: "Qual é o nome do protagonista de 'Attack on Titan'?",
      options: ["Levi Ackerman", "Eren Yeager", "Mikasa Ackerman", "Armin Arlert"],
      answer: "Eren Yeager"
    },
    {
      question: "Em 'Sword Art Online', qual é o nome do jogo em que os personagens ficam presos?",
      options: ["Gun Gale Online", "Alfheim Online", "Underworld", "Sword Art Online"],
      answer: "Sword Art Online"
    },
    {
      question: "Quem é o autor de 'Fullmetal Alchemist'?",
      options: ["Hirohiko Araki", "Yoshihiro Togashi", "Kentaro Miura", "Hiromu Arakawa"],
      answer: "Hiromu Arakawa"
    },
    {
      question: "Em 'My Hero Academia', qual é o nome do protagonista que quer se tornar o maior herói?",
      options: ["Katsuki Bakugo", "Shoto Todoroki", "Izuku Midoriya", "Ochaco Uraraka"],
      answer: "Izuku Midoriya"
    },
    {
      question: "Qual é o nome do grupo de protagonistas em 'Naruto'?",
      options: ["Time 7", "Akatsuki", "Os Sete Espadachins da Névoa", "Time 10"],
      answer: "Time 7"
    },
    {
      question: "Quem é o autor de 'Hunter x Hunter'?",
      options: ["Tite Kubo", "Yoshihiro Togashi", "Naoko Takeuchi", "Akira Toriyama"],
      answer: "Yoshihiro Togashi"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options-container');
  const resultElement = document.getElementById('result');
  const submitButton = document.getElementById('submit-btn');
  
  function showQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    optionsContainer.innerHTML = '';
    currentQ.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.textContent = option;
      optionElement.addEventListener('click', () => {
        checkAnswer(option);
      });
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function checkAnswer(answer) {
    const currentQ = questions[currentQuestion];
    if (answer === currentQ.answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    submitButton.style.display = 'none';
  }
  
  showQuestion();
  