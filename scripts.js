const questions = [
// {
//     question: "Instructions: Choose the option that best describes why the defense failed. There may be more than one breakdown. Choose the BIGGEST mistake. \n\n1. Who screwed up?",
//     choices: ["Alex Caruso (no. 4). He overhelped.", 
//     "Markieff Morris (no. 88). He didn't contain the drive well and needed help.", 
//     {player: "LeBron (no. 23).", description: "He was supposed to x-out and switch with Caruso."}, 
//     {player: "Kuzma (no. 0).", description: "He's on the weak side of the floor and supposed to bring help."}],
//     answer: 0,
//     link: "https://videos.nba.com/nba/pbp/media/2020/09/06/0041900222/119/93031f93-f900-2e6f-5d26-029a80a8aa65_1280x720.mp4",
//     concept: "overhelping (via Mo Dakhil's Twitter)",
//     conceptLink: "https://twitter.com/MoDakhil_NBA/status/1302775923909865472"
// },
{
  question: "Instructions: Choose the option that best describes why the defense failed. There may be more than one breakdown. Choose the BIGGEST mistake. \n\n1. Who screwed up?",
  choices: ["Alex Caruso (no. 4). He overhelped.", 
  "Markieff Morris (no. 88). He didn't contain the drive well and needed help.", 
  "LeBron (no. 23). He was supposed to x-out and switch with Caruso.", 
  "Kuzma (no. 0). He's on the weak side of the floor and supposed to bring help."],
  answer: 0,
  link: "https://videos.nba.com/nba/pbp/media/2020/09/06/0041900222/119/93031f93-f900-2e6f-5d26-029a80a8aa65_1280x720.mp4",
  concept: "overhelping (via Mo Dakhil's Twitter)",
  conceptLink: "https://twitter.com/MoDakhil_NBA/status/1302775923909865472"
},
{
    question: "2. Who screwed up?",
    choices: ["Austin Rivers (no. 25). He didn't contain the drive well.",
      "Robert Covington (no.33). He overhelped on the first pass, leaving his man open and allowing the shot.",
      "Jeff Green (no. 32). He correctly moved in to protect the paint, but he didn't recover to a shooter (x-out).",
      "Danuel House (no. 4). He's supposed to rotate over the top, but he was late and Green had to try and cover for him."],
    answer: 2,
    link: "./x_out.mp4",
    concept: "x-out",
    conceptLink: "https://medium.com/the-basketball-dictionary/x-out-78e01e2e4c9d"
},
{
    question: "3. Why was Houston able to get such a good shot?",
    choices: ["Rondo (no. 9) was caught in no-man's land. He should have committed to a shooter rather than standing right between them.", 
      "LeBron (no. 23) was supposed to pull over to guard Jeff Green. Kuzma (0) covered for him and forced Rondo into guarding two players, allowing Green to make an easy pass for a 3.", 
      "Morris (no. 88) was way too late in recovering to his man, Green.", 
      "The Lakers brought two defenders to Harden, Green was in excellent position to get the pass, and the Lakers couldn't do much else when they were forced to play 4-on-3."],
    answer: 3,
    link: "./green_middle.mp4",
    concept: "beating a double",
},
{
  question: "4. Why did Houston struggle so much more in this clip when facing a similar defensive alignment?",
  choices: ["The Lakers rotated early and well.",
  "Unlike the previous clip, none of Harden's teammates flashed high and quickly to the middle of the floor to create a good passing angle.",
  "Harden had to hold the ball longer.",
  "All of the above."
],
  answer: 3,
  link: "./good_trap.mp4",
  concept: "beating a double."
},
{
  question: "5. Who screwed up?",
  choices: ["Michael Porter Jr. (no. 1). He was supposed to tag Gobert and he didn't get over to help.", 
  "Jokic (no. 15) was responsible for guarding Gobert and overhelped on the drive.",
  "Monte Morris (no. 11) allowed himself to get screened and took himself out of the play.",
  "Jamal Murray (27) didn't slide over to stop the layup, forcing Jokic to leave his man."],
  answer: 0,
  link: "./mpj_tag.mp4",
  concept: "tag the roller (via Mo Dakhil's Twitter)",
  conceptLink: "https://twitter.com/MoDakhil_NBA/status/1296917374663184386"
},
{  
  question: "6. Who screwed up?",
  choices: ["Maxi Kleber (no. 42). He's the big man on the floor and he should have rotated to protect the rim.", 
  "Doncic (no. 77). He was the low man responsible for trapping the box, and he was way late.",
  "Tim Hardaway Jr. (no. 11). He's supposed to rotate over and take the roll man.",
  "Porzingis (no. 6). He is supposed to recover to Nurkic, and he was way too slow."
  ],
  answer: 1,
  link: "https://videos.nba.com/nba/pbp/media/2020/08/11/0021901300/306/20326e6e-4f23-8df6-67a6-b73e544542e8_1280x720.mp4",
  concept: "trap the box",
  conceptLink: "https://medium.com/the-basketball-dictionary/trap-the-box-c4ebe20d3929"
},
{
  question: "7. Who messed up?",
  link: "https://videos.nba.com/nba/pbp/media/2020/08/15/0051900111/179/be0470b8-8c5e-29d9-8a94-2dd3d88158a1_1280x720.mp4",
  choices: ["Hassan Whiteside (no. 21). He let his man get behind him for the dunk.",
    "Gary Trent Jr. (no. 2). He was guarding the drive, and he should have switched with Whiteside.",
    "Melo (00). He's supposed to trap the box and come down to contest the shot.",
    "Mario Hezonja (no. 44). He was guarding a poor 3-point shooter and should have been closer in so that he could tag the roll man."
  ],
  answer: 3,
  concept: "Tag the roller (via Mo Dakhil's Twitter)",
  conceptLink: "https://twitter.com/MoDakhil_NBA/status/1294715548354277377"
},
{
  question: "8. Who messed up?",
  link: "./help_one_away.mp4",
  choices: ["Wes Matthews (no. 9). Once he sees Lopez helping, he is supposed to peel back and switch onto the shooter.",
    "Brook Lopez (no. 11). Matthews didn't need help, and Lopez helped one pass away.",
    "Giannis (no. 34). He was supposed to bring help on Butler and by being late, he forced Lopez into a tough spot.",
    "Nobody. The play was guarded perfectly."
  ],
  answer: 1,
  concept: "overhelping",
},
{
  question: "9. Assume the Clippers' plan is to send a double when Jokic is in the post. Who screwed up the MOST?",
  link: "https://videos.nba.com/nba/pbp/media/2020/09/07/0041900233/435/bc4cffac-fcf9-abdf-e843-afa0ad15964e_1280x720.mp4",
  choices: ["Shamet (no. 20). He followed the plan by doubling off the weak side, but was supposed to recover to MPJ instead of the corner.",
  "Lou Williams (no. 23). He was zoning up and should have stunted, then recoverd to MPJ.",
  "JaMychal Green (no. 4). His closeout was too late, and he gave MPJ a runway to the hoop.",
  "Montrezl Harrell (no. 5). He should have been able to block that shot on the rotation."],
  answer: 2,
  concept: "rotations off a double team (via Mo Dakhil's twitter)",
  conceptLink: "https://twitter.com/MoDakhil_NBA/status/1303166018034913280"
},
{
  question: "10: Who screwed up the MOST on OFFENSE? (Hint: There are multiple mistakes here. Pick the BEST answer.",
  link: "./bulls.mp4",
  choices: ["Chandler Hutchison (no. 15). He cut to the rim in the middle of a drive, screwing up the spacing", 
    "Cristiano Felicio (no. 6). He should have cleared out of the dunker's spot during Shaq Harrison's (no. 3) drive.",
    "Coby White. He passed up an open 3 early in the possession.",
    "The quizmaster, who watched every single one of these Bulls games."],
  answer: "all",
  concept: "Don't watch the Bulls."
}
]

let correctAnswers = 0

const startButton = document.getElementById('start-btn')
const otherButton = document.getElementById('other-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const videoElement = document.getElementById('video')
const finalScore = document.getElementById("final-score")
const intro = document.querySelector(".intro")

let currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    correctAnswers = 0
    startButton.classList.add('hide')
    otherButton.classList.add('hide')
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    finalScore.classList.add("hide")
    intro.classList.add("hide")
    setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    videoElement.innerHTML = `<video controls>
    <source src="${question.link}" type="video/mp4">
    Your browser does not support the video tag.
    </video>`
    answerButtonsElement.classList.remove('disable')
    let i = 0
    if (question.hasOwnProperty("conceptLink")) {
        document.getElementById("missed-concepts").innerHTML = `<a href="${question.conceptLink}" target="_blank">${question.concept}</a>`
    }
    else {
        document.getElementById("missed-concepts").innerText = question.concept
    }
    question.choices.forEach(answer => {
    const button = document.createElement('button')
    // if (document.getElementById("difficulty_normal").checked) {
    //   button.innerText = answer.player + answer.description
    // }
    // else {
    //   button.innerText = answer.player 
    // } FIX THIS

    button.innerHTML = answer 
    button.classList.add('btn')
    if (i == question.answer || question.answer == "all") {
        button.dataset.correct = answer.correct
        }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    i++
    })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  document.getElementById('missed-concepts-id').classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    document.getElementById('missed-concepts-id').classList.remove('hide')
    answerButtonsElement.classList.add('disable')
  } else {
    startButton.innerText = 'Restart Quiz'
    startButton.classList.remove('hide')
    document.getElementById('missed-concepts-id').classList.remove('hide')
    finalScore.classList.remove('hide')
    otherButton.classList.remove('hide')
    if (selectedButton.dataset = correct) {
        correctAnswers++;}
    finalScore.innerHTML=
    `<div style="font-weight:bold;">Final Score: ${correctAnswers} correct out of ${questions.length}.</div>
    <hr>
    <div>0-3 correct: Average NBA fan. Retake the quiz and click on the links to learn the concepts you're missing.</div>
    <div>4-7 correct: You're a student of the game!</div>
    <div>8+ correct: Congrats, you're an expert!</div>`
  }
  if (selectedButton.dataset = correct) {
    correctAnswers++;
 }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}