
const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const answer5 = document.getElementById("answer-5");
const answer6 = document.getElementById("answer-6");
const answer7 = document.getElementById("answer-7");
const answer8 = document.getElementById("answer-8");
const answer9 = document.getElementById("answer-9");
const answer10 = document.getElementById("answer-10");

const answerArray = [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10];

const qText1 = document.getElementById("question-1")
const qText2 = document.getElementById("question-2")
const qText3 = document.getElementById("question-3")
const qText4 = document.getElementById("question-4")
const qText5 = document.getElementById("question-5")
const qText6 = document.getElementById("question-6")
const qText7 = document.getElementById("question-7")
const qText8 = document.getElementById("question-8")
const qText9 = document.getElementById("question-9")
const qText10 = document.getElementById("question-10")

const qTextArray = [qText1, qText2, qText3, qText4, qText5, qText6, qText7, qText8, qText9, qText10];

let needText = document.getElementById("needtext");

const correctAnswers = {
    1: "SADIO MANE",
    2: "MANCHESTER UNITED",
    3: "SHANE LONG",
    4: "BRAZIL",
    5: "THOMAS SWARTSCH",
    6: 9,
    7: 1960,
    8: "HARRY KANE AND GARY LINEKER",
    9: "ALAN SHEARER",
    10: "LIVERPOOL"
}

const answersDone = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: ""
}

function answerQuestion() {

    if(answer1.value === "") {
        needText.innerHTML = "Du måste fylla i nåt";
    } else if(answer1.value.toUpperCase() == correctAnswers[1]){
        console.log(answer1.value);
        qText1.classList.remove("red");
        qText1.classList.add("green");
        needText.innerText = "";
        answersDone[1] = "Rätt";
        
    } else {
        qText1.classList.add("red");
        needText.innerText = "Fel svar"
        answersDone[1] = "Fel";
    }
    answer1.value = "";
    console.log(answersDone);
}



