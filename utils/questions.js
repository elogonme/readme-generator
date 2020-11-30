const inquirer = require('inquirer');
// Object with arrays of questions for user depending on sections of README
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
            name: 'developer',
            message: `Please enter developer's Name: `,
        },      
        {
            type: 'input',
            name: 'githubuser',
            message: `Please enter developer's GitHub username: `,
        },      
        {
            type: 'checkbox',
            message: 'Which sections of contents would you like to add to your README?',
            name: 'contents',
            choices: [
              
              {
                name: 'contents',
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
                name: 'testing',
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
                name: 'install',
                message: 'Enter installation instructions: ',
            },        
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
                name: 'repo',
                message: 'Please enter repository URL: ',
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
                value: 0
              },
              {
                name: 'GNU General Public',
                value: 1
              },
              {
                name: 'MIT',
                value: 2
              },
              {
                name: 'BSD 2-Clause "Simplified" License',
                value: 3
              },
              {
                name: 'Boost Software License 1.0',
                value: 4
              },
              {
                name: 'Creative Commons Zero v1.0 Universal',
                value: 5
              },
              {
                name: 'Eclipse Public License',
                value: 6
              },
              {
                name: 'Mozilla Public License',
                value: 7
              },
              {
                name: 'The Unlicense',
                value: 8
              },
              {
                name: 'Other',
                value: 9
              },
              
            ],
          },    
        ],
    contributing: [
            {
                type: 'input',
                name: 'contributing',
                message: 'Please enter contribution guidelines: ',
            },      
        ],
    testing: [
            {
                type: 'input',
                name: 'testing',
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
