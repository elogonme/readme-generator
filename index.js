// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const generateMarkdown = require('./utils/generateMarkdown');

// function to write README file
function writeToFile(fileName, data) {
    fs.readFile(fileName, 'utf8', (error, data1) => {
        // Check if README file existing
        if (!data1) { // if not save new file
            fs.writeFile(fileName, data, (err) =>
            err ? console.error(err) : console.log('generated-readme.md saved!'));
            } else { // if README existing ask for confirmation to overwrite
                inquirer.prompt( {
                    type: 'confirm',
                    name: 'yesNo',
                    message: 'Existing README file will be overwritten! ',
                })
                .then(isYes => {
                    if (isYes.yesNo) {
                        // If confirmed - delete old file and save new
                        fs.unlinkSync(fileName);
                        writeToFile(fileName, data)
                    } else return false;
                });
            }
    });
}
    

// function to initialize program
function init() {
   askQuestions();
};

// Function to ask questions based on input from user
const askQuestions = () => {
    inquirer
    // Ask initial questions with discription of project and required contents
    .prompt(questions.description)
    // Ask more questions based on sections selected
    .then(answers => askMore(answers))
    .then(data => {
        const readMe = generateMarkdown(data);
        writeToFile('generated-readme.md', readMe);
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        throw new Error('Unable to create')
      } else {
        // Something else when wrong
        console.error('Error', error);
      }
    });
}

// Function to ask more questions based on sections selected for README
const askMore = async (answers) => {
    let ansJoined = {};
    for (let i = 1; i < answers.contents.length; i++){
       const ans = await inquirer.prompt(questions[answers.contents[i]]);  // Ask questions related to each section
       ansJoined = {...ansJoined, ...ans}; // put all answers in one object
    }
    
    return {...answers, ...ansJoined}
};

// function call to initialize program
init();
