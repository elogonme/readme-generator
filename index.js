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
const askQuestions = () => {
    inquirer
    // Ask initial questions with discription of project and required contents
    .prompt(questions.description)
    .then(answers => askMore(answers))
    .then(answers => {
        console.log(answers.sectionAnswers);
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

// const askMore = async (answers) => {
//     // Ask additional questions based on sections of README selected
//     const allAnswers = await askAboutEachSection(answers); 
//     return allAnswers;
//   };

const askMore = async (answers) => {
    for (let i = 1; i < answers.contents.length; i++){
       const ans = await inquirer.prompt(questions[answers.contents[i]]); 
       console.log(ans);
    }
    
    return answers;
};

// function call to initialize program
init();

