#! usr/bin/env node
import inquirer from "inquirer";
let firstQuestion = await inquirer.prompt([
  {
    name: "question1",
    type: "input",
    message: "Enter Your Name:",
  },
]);
const id = Math.floor(Math.random() * 20000);

let secondQuestion = await inquirer.prompt([
  {
    name: "question2",
    type: "list",
    message: "Please select the course you want to do",
    choices: [
      "CIT",
      "Web and Graphic Designing",
      "Web Development",
      "Digital Marketing",
      "Freelancing",
      "PowerBI",
      "Business Development",
      "Daraz",
      "Amazon"
    ],
  },
]);

let balance: number = 25000;
let one: number = 100;
let two: number = 500;
let three: number = 1000;
let four: number = 2000;
let thirdQuestion = await inquirer.prompt([
  {
    name: "question3",
    type: "list",
    message: "Please select any one",
    choices: ["Payfees", "Check current balance"],
  },
]);
if (thirdQuestion.question3 === "Payfees") {
  let fourthQuestion = await inquirer.prompt([
    {
      name: "question4",
      type: "list",
      message:
        "Please select the name of course you selected above to pay fee for",
      choices: [
        "CIT '100$'",
        "Web and Graphic Designing '500$'",
        "Web Development '1000$'",
        "Digital Marketing '1000$'",
        "Freelancing '500$'",
        "PowerBI '2000$'",
        "Business Development'100$'",
        "Daraz '500$'",
        "Amazon '2000$"
      ],
    },
  ]);
  if (fourthQuestion.question4 === "CIT '100$'") {
    console.log(
      `You successfully paid the fees of course ${fourthQuestion.question4}`
    );
    balance -= one;
    console.log(`Dear customer your current balance is ${balance}`);
  } else if (fourthQuestion.question4 === "Web and Graphic Designing '500$'") {
    console.log(
      `You successfully paid the fees of course ${fourthQuestion.question4}`
    );
    balance -= two;
    console.log(`Dear customer your current balance is ${balance}`);
  } else if (fourthQuestion.question4 === "Web Development '1000$'") {
    console.log(
      `You successfully paid the fees of course ${fourthQuestion.question4}`
    );
    balance -= three;
    console.log(`Dear customer your current balance is ${balance}`);
  } else if (fourthQuestion.question4 === "Digital Marketing '1000$'") {
    console.log(
      `You successfully paid the fees of course ${fourthQuestion.question4}`
    );
    balance -= three;
    console.log(`Dear customer your current balance is ${balance}`);
  } else if (fourthQuestion.question4 === "Freelancing '500$'") {
    console.log(
      `You successfully paid the fees of course ${fourthQuestion.question4}`
    );
    balance -= two;
    console.log(`Dear customer your current balance is ${balance}`);
  } else if (fourthQuestion.question4 === "PowerBI '2000$'") {
    console.log(
      `You successfully paid the fees of course ${fourthQuestion.question4}`
    );
    balance -= four;
    console.log(`Dear customer your current balance is ${balance}`);
  } else if (fourthQuestion.question4 === "Business Development'100$'") {
    console.log(
      `You successfully paid the fees of course ${fourthQuestion.question4}`
    );
    balance -= one;
    console.log(`Dear customer your current balance is ${balance}`);
  } else if (fourthQuestion.question4 === "Daraz '500$'") {
    console.log(
      `You successfully paid the fees of course ${fourthQuestion.question4}`
    );
    balance -= two;
    console.log(`Dear customer your current balance is ${balance}`);
  } else if (fourthQuestion.question4 === "Amazon '2000$") {
    console.log(
      `You successfully paid the fees of course ${fourthQuestion.question4}`
    );
    balance -= four;
    console.log(`Dear customer your current balance is ${balance}`);
  } else {
    console.log(`Dear customer your balance is ${balance}`);
  }
}

console.log("Student Information");
console.log(`Student Name: ${firstQuestion.question1}`);
console.log(`Student ID: ${id}`);
console.log(`Course: ${secondQuestion.question2}`);
