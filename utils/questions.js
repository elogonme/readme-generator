const inquirer = require('inquirer');
// Object with arrays of questions for user
module.exports = questions = {
    description: [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project: ',
        },
        {
            type: 'input',
            name: 'contributor',
            message: `Please enter developer's Name: `,
        },      
        {
            type: 'input',
            name: 'githubuser',
            message: `Please enter developer's GitHub profile URL: `,
        },      
        {
            type: 'checkbox',
            message: 'Which sections of contents would you like to add to your README?',
            name: 'contents',
            choices: [
              
              {
                name: 'Table of Contents',
              },
              {
                name: 'installation',
              },
              {
                name: 'usage',
              },
              {
                name: 'license',
              },
              {
                name: 'contributing',
              },
              {
                name: 'tests',
              },
              {
                name: 'questions',
              },
              
            ],
            // Check if nothing is selected
            validate: function (answer) {
              if (answer.length < 1) {
                return 'You must choose at least one option.';
              }
      
              return true;
            },
          },
        ],
    installation: [
            {
                type: 'input',
                name: 'website',
                message: 'Please enter URL to access deployed project: ',
            },        
        ],
    usage: [
            {
                type: 'input',
                name: 'usage',
                message: 'Please enter usage instructions:',
            }, 
            {
                type: 'input',
                name: 'website',
                message: 'Please enter URL to access deployed project: ',
            },        
        ],
    license: [
        {
            type: 'list',
            message: 'Please select type of License ',
            name: 'license',
            choices: [
              new inquirer.Separator(' = Choose a License = '),
              {
                name: 'None',
              },
              {
                name: 'GNU General Public',
              },
              {
                name: 'MIT',
              },
              {
                name: 'BSD 2-Clause "Simplified" License',
              },
              {
                name: 'Boost Software License 1.0',
              },
              {
                name: 'Creative Commons Zero v1.0 Universal',
              },
              {
                name: 'Eclipse Public License',
              },
              {
                name: 'Mozilla Public License',
              },
              {
                name: 'The Unlicense',
              },
              {
                name: 'Other',
              },
              
            ],
            // Check if nothing is selected
            validate: function (answer) {
              if (answer.length < 1) {
                return 'You must choose at least one option.';
              }
      
              return true;
            },
          },    
        ],
    contributing: [
            {
                type: 'input',
                name: 'contributing',
                message: 'Please enter Names of other Contributors: ',
            },      
        ],
    tests: [
            {
                type: 'input',
                name: 'tests',
                message: 'Please enter Test instructions: ',
            }
        ],
    questions: [
            {
                type: 'input',
                name: 'email',
                message: 'Please enter email address for contact/questions: ',
            },      
                 
        ],
}
