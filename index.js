var readlineSync = require("readline-sync");
var score = 0;

var questionAndAnswer = [{
  question: "What's the full and original name of Rocky?",
  answer: "Rama krishna Bheriya"
}, {
  question: "What is the name of th Gun that was brought from Inayadh khalid?",
  answer: "Khalashnikav"
},
{
  question: "How is Adheera related to suryavardhan?",
  answer: "Brother"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Hi " + userName + " Welcome to quiz on KGF");
}
function quiz(question,answer){
  var userAnswer=readlineSync.question(question);
  
  if(userAnswer.toLowerCase()===answer.toLowerCase()){
    console.log("whoooop! Right Answer")
    score++;
  }
  else{
    console.log("WRONG ANSWER")
    console.log("Correct answer is: "+answer);
  }
  console.log("current score ="+ score);
  
}


function game() {
  var questionnumber=1;
  for (var i = 0; i < questionAndAnswer.length;i++){
    console.log("-------------Question."+ questionnumber++ +" -------------")
    var Question=questionAndAnswer[i];
    quiz(Question.question,Question.answer);
  }
}

welcome();
game();
console.log("Congratulations your Final score is "+score+" Out of 3")