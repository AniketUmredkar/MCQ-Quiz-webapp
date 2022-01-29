var answers = ["object-based", "if", "triple-equals", "code1", "declarations"];
var score = 0;

const resultEl = document.querySelector(".result");

function check(e) {
  e.preventDefault();
  const response = [];
  response.push(document.querySelector("form").q1.value);
  response.push(document.querySelector("form").q2.value);
  response.push(document.querySelector("form").q3.value);
  response.push(document.querySelector("form").q4.value);
  response.push(document.querySelector("form").q5.value);
  console.log(response);

  for (let i = 0; i < 5; i++) {
    if (response[i] === answers[i]) {
      score++;
    }
  }
  let message = "NO";
  if (score >= 4) {
    message = "YES";
  } else if (score == 3) {
    message = "MAYBE";
  }
  resultEl.innerHTML = `<p>Your score is : ${score}/5</p>
                        <p>Selection : ${message}</p>`;
}
