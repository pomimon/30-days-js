//MINIMUM
//  2 input fields
// needs to check answer
// textContent - what is ${randomnumber} x ${randomnumber} to update prompt
// submit button
//
const questionText = document.getElementById("question");
let firstNum = Math.floor(Math.random() * 10);
let secondNum = Math.floor(Math.random() * 10);
let correctAnswer = firstNum * secondNum;
questionText.textContent = `What is ${firstNum} x ${secondNum}?`;

const input = document.getElementById("input");

form.addEventListener("submit", function checkAnswer() {
  const userAnswer = input.value;
  if (userAnswer == correctAnswer) {
    alert("Correct! ~~(^._.^)~~");
  } else {
    alert("Incorrect! <(o.O)>");
  }
});
