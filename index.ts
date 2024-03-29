#! /usr/bin/env node


import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("welcome to number guessing game !");
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number 1-6:",
  },
]);
if (answers.userGuessedNumber === randomNumber) {
  console.log("congratulations you  guessed a right number");
} else {
  console.log("you guessed a wrong number");
}
