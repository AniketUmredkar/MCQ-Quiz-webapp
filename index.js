/*****************************************************************/
/*QUESTION BANK*/
/*****************************************************************/

const data = [
  {
    question: "Which type of JavaScript language is ___",
    options: {
      option1: "Object-Oriented",
      option2: "Object-Based",
      option3: "Assembly-language",
      option4: "High-level",
    },
    answer: "2",
  },
  {
    question:
      "Which one of the following also known as Conditional Expression:",
    options: {
      option1: "Alternative to if-else",
      option2: "Switch statement",
      option3: "If-then-else statement",
      option4: "immediate if",
    },
    answer: "4",
  },
  {
    question: "In JavaScript, what is a block of statement?",
    options: {
      option1: "Conditional block",
      option2:
        "block that combines a number of statements into a single compound statement",
      option3: "both conditional block and a single statement",
      option4: "block that contains a single statement",
    },
    answer: "2",
  },
  {
    question:
      "When interpreter encounters an empty statements, what it will do:",
    options: {
      option1: "Shows a warning",
      option2: "Prompts to complete the statement",
      option3: "Throws an error",
      option4: "Ignores the statements",
    },
    answer: "4",
  },
  {
    question: 'The "function" and "var" are known as:',
    options: {
      option1: "Keywords",
      option2: "Data types",
      option3: "Declaration statements",
      option4: "Prototypes",
    },
    answer: "3",
  },
  {
    question:
      "Which of the following variables takes precedence over the others if the names are the same?",
    options: {
      option1: "Global variable",
      option2: "The local element",
      option3: "The two of the above",
      option4: "None of the above",
    },
    answer: "2",
  },
  {
    question:
      "Which one of the following is the correct way for calling the JavaScript code?",
    options: {
      option1: "Preprocessor",
      option2: "Triggering Event",
      option3: "RMI",
      option4: "Function/Method",
    },
    answer: "4",
  },
  {
    question: "Which of the following type of a variable is volatile?",
    options: {
      option1: "Mutable variable",
      option2: "Dynamic variable",
      option3: "Volatile variable",
      option4: "Immutable variable",
    },
    answer: "1",
  },
  {
    question:
      "Which of the following option is used as hexadecimal literal beginning?",
    options: {
      option1: "00",
      option2: "0x",
      option3: "0X",
      option4: "Both 0x and 0X",
    },
    answer: "4",
  },
  {
    question:
      "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
    options: {
      option1: "Prints an exception error",
      option2: "Prints an overflow error",
      option3: 'Displays "Infinity"',
      option4: "Prints the value as such",
    },
    answer: "3",
  },
];

/*********************************************************************** */

var quesNums = [];
const answers = [];
while (quesNums.length < 5) {
  let randomNumber = Math.floor(Math.random() * 10);
  if (!quesNums.includes(randomNumber)) {
    quesNums.push(randomNumber);
    answers.push(data[randomNumber].answer);
  }
}
var score = 0;
const orderedListEl = document.querySelector("ol");
const resultEl = document.querySelector(".result");

orderedListEl.innerHTML = `${quesNums
  .map((value, index) => {
    return `<li>
  <p class="question">${data[value].question}</p>
  <div class="options">
    <input type="radio" name="q${index + 1}" id="${
      data[value].options.option1
    }" value="1"/>
    <label for="${data[value].options.option1}">${
      data[value].options.option1
    }</label><br/>

    <input type="radio" name="q${index + 1}" id="${
      data[value].options.option2
    }" value="2"/>
    <label for="${data[value].options.option2}">${
      data[value].options.option2
    }</label><br/>

    <input type="radio" name="q${index + 1}" id="${
      data[value].options.option3
    }" value="3"/>
    <label for="${data[value].options.option3}">${
      data[value].options.option3
    }</label><br/>

    <input type="radio" name="q${index + 1}" id="${
      data[value].options.option4
    }" value="4"/>
    <label for="${data[value].options.option4}">${
      data[value].options.option4
    }</label>
  </div>
</li>`;
  })
  .join(" ")}`;

/********************************************************************** */

function check(e) {
  e.preventDefault();
  const response = [];
  response.push(document.querySelector("form").q1.value);
  response.push(document.querySelector("form").q2.value);
  response.push(document.querySelector("form").q3.value);
  response.push(document.querySelector("form").q4.value);
  response.push(document.querySelector("form").q5.value);

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
  score = 0;
}
