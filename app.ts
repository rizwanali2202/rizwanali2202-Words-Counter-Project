#! /usr/bin/env node

// inport inquirer and chalk package
import inquirer from "inquirer";
import chalk from "chalk";

// Display Wellcome
console.log(chalk.red.bold("\n\t Wellcome to Rizwanali2202 Word Counter \n\t"));
console.log("=".repeat(50));

// prompt the use to inter sentence
let answer = await inquirer.prompt([
    {
        name : "message",
        type : "input",
        message : "Enter your Sentence",
    },
]);

// triming the sentence splitting it into words on "spaces"
let words = answer.message.trim().split(" ");

console.log("=".repeat(50));
console.log(chalk.bold.bgRed("Sentence Words"));
console.log(words);
console.log(`Words Count: ${chalk.bold.bgRedBright(words.length)}`);
console.log("=".repeat(50));
