const quizDB = [
    {
        question: "Q1: what is the full form of HTML",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Makeup Language",
        ans: "ans3"
    },
    {
        question: "Q2: what is the full form of CSS",
        a: "Cascading Style Sheet",
        b: "Hey Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "Cascading styyle sheep",
        ans: "ans1"
    },
    {
        question: "Q3: what is the full form of HTTP",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "HyperText transfer protocol",
        ans: "ans4"
    },
    {
        question: "Q4: what is the full form of JS",
        a: "java Script",
        b: "Hey Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Makeup Language",
        ans: "ans1"
    },
    {
        question: "Q5: Which is the part of the computer system that one can physically touch",
        a: "data",
        b: "operating systems",
        c: " hardware",
        d: " software",
        ans: "ans3"
    },
    {
        question: "Q6:Which of the following is not an example of an Operating System",
        a: "Windows 98",
        b: "BSD Unix",
        c: " Microsoft Office XP",
        d: " Red Hat Linux",
        ans: "ans3"
    },
    {
        question: "Q7:Which of the following is an example of non-volatile memory",
        a: " Cache memory",
        b: "RAM",
        c: "ROM",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q8:File extensions are used in order to ………",
        a: " Name the file",
        b: "Ensure the filename is not lost",
        c: "Identify the file",
        d: " Identify the file type",
        ans: "ans4"
    },
    {
        question: "Q9:bit stands for",
        a: " binary information term",
        b: "binary digit",
        c: " binary tree",
        d: "Bivariate Theory",
        ans: "ans2"
    },
    {
        question: "Q10:Which one of the following is different from other members",
        a: "GOOGLE",
        b: "WINDOWS",
        c: "LINUX",
        d: "MAC OS",
        ans: "ans1"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')
const showscore = document.querySelector('#showscore');

let questioncount = 0;
let score = 0;
const loadquestion = () => {

    const questionlist = quizDB[questioncount];
    question.innerText = questionlist.question;
    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}

loadquestion();

const getCheckedAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedanswer = getCheckedAnswer();
    console.log(checkedanswer);

    if(checkedanswer === quizDB[questioncount].ans){
        score++;
    };

    questioncount++;

    deselectAll();

    if(questioncount < quizDB.length){
        loadquestion();
    }else{
        showscore.innerHTML = `
        <h3> you scored ${score}/${quizDB.length}hurray</h3>
        <button class="btn" onclick="location.reload()" > PLAY AGAIN</button>
        `;
        showscore.classList.remove('scorearea');

    }
});