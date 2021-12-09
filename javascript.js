

{const questions = [{
    question: "What is Anela's hobby?",
    a: "Rock climbing",
    b: "DIY projects",
    c:"Gaming",
    correct:"b",
},{
    question: "What did Anela want to become when she was in elementary school?",
    a: "An english teacher",
    b: "A programmer",
    c: "A singer",
    correct:"a",
},{
    question: "In her free time, in how many amateur short films did Anela star?",
    a: "2",
    b: "1",
    c: "3",
    correct:"c",
},]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const submitButton = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = questions[currentQuiz]
    questionEl.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>(
        answerEl.checked = false
    ))
}

function getSelected(){
    let answer

    answerEls.forEach((answerEl)=>{ 
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

submitButton.addEventListener('click',()=>{
    const answer = getSelected()

    if(answer===questions[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    
    if(currentQuiz < questions.length){
        loadQuiz();
    }else{
        
        quiz.innerHTML = `<h2 class="question">You Answered ${score}/${questions.length} Questions correct</h2>
        <div class="text" id="demo"></div>
        <h2 class="question"> Correct answers:</h2>
        <div class="text"> I enjoy working on DIY projects, usually making things for friends and family, as a
        child I wanted to become an English teacher and there are 3 short films on YouTube with me starring in them.</div>
        <button class="submit" onclick="location.reload()">Do it Again</button> `
        myFunction()
}
})
function myFunction() {
    var text;
    switch(score) {
        case 0:
          text = "You didnt try at all! :(";
          break;
        case 1:
          text = "Nice!!";
          break;
        case 2:
          text = "Great!";
          break;
        case 3:
            text = "AMAZING!!";
            break;
        default:
          text = Oops;
      }
      document.getElementById("demo").innerHTML = text;
}
};

var panel = jsPanel.create({
    headerTitle: 'Welcome!',
    boxShadow: 5,
    opacity:0.9,
    theme:'config',
    position: 'center',
    panelSize: '800 450',
    callback: function() {
        this.content.innerHTML = '<p class="p-4"> Welcome to Anela Coković`s resume. Thank you for taking the time to read it!</p>'
    }
    ,animateIn: 'jsPanelFadeIn',
    animateOut: 'jsPanelFadeOut'
});

window.setTimeout(() => {panel.close(() => {});}, 3000);





