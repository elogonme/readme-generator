// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const questions = require('./utils/questions')

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
   askQuestions();
}

// Function to ask questions based on input from user
function askQuestions(){
    inquirer
    .prompt(questions.description)
    .then(answers => {
      console.log(answers);
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

// function call to initialize program
init();
