
const answerInputs = Array.from({length: 10}, (_, i) => document.getElementById(`answer-${i}`));

const questionTexts = Array.from({length: 10}, (_, i) => document.getElementById(`question-${i}`));

const buttons = Array.from({length: 10}, (_, i) => document.getElementById(`button-${i}`));

const paragraphs = Array.from({length: 10}, (_, i) => document.getElementById(`p-${i}`));

const correctAnswers = {
    1: "LIVERPOOL",
    2: "SADIO MANE",
    3: "MANCHESTER UNITED",
    4: "SHANE LONG",
    5: "BRAZIL",
    6: "STEFAN SCHWARZ",
    7: 9,
    8: 1960,
    9: "HARRY KANE",
    10: "ALAN SHEARER"
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


function answerQuestion(questionNumber) {

    let needText = paragraphs[questionNumber - 1];
    const answerInput = answerInputs[questionNumber - 1];
    const questionText = questionTexts[questionNumber - 1];
    const correctAnswer = correctAnswers[questionNumber];
    

    if(answerInput.value === "") {
        needText.innerHTML = "Du måste fylla i nåt";
        answersDone[questionnNumber] = "N/A"
    } else if(answerInput.value.toUpperCase() == correctAnswer){
        console.log(answerInput.value);
        questionText.classList.remove("red");
        questionText.classList.add("green");
        needText.innerHTML = "Korrekt";
        answersDone[questionNumber] = "Rätt";
        
    } else {
        questionText.classList.add("red");
        needText.innerHTML = "Fel svar"
        answersDone[questionNumber] = "Fel";
    }
    answerInput.value = "";
    console.log(answersDone);
}




buttons[0].addEventListener("click", function(){
    answerQuestion(1);
});
buttons[1].addEventListener("click", function(){
    answerQuestion(2);
});
buttons[2].addEventListener("click", function(){
    answerQuestion(3);
});
buttons[3].addEventListener("click", function(){
    answerQuestion(4);
});
buttons[4].addEventListener("click", function(){
    answerQuestion(5);
});
buttons[5].addEventListener("click", function(){
    answerQuestion(6);
});
buttons[6].addEventListener("click", function(){
    answerQuestion(7);
});
buttons[7].addEventListener("click", function(){
    answerQuestion(8);
});
buttons[8].addEventListener("click", function(){
    answerQuestion(9);
});
buttons[9].addEventListener("click", function(){
    answerQuestion(10);
});


const correcting = function() {
    for(let i = 1; i <= 10; i++) {
        if(answersDone[i]!== "Rätt") {
            return false;
        }
        else {
            return true;
        }
    }
}

if(correcting()) {
    alert("ALLA RÄTT YIPPIE");
}