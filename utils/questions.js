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
            type: 'checkbox',
            message: 'Which sections of contents would you like to add to your README?',
            name: 'contents',
            choices: [
              new inquirer.Separator(' = Table of Contents = '),
              {
                name: 'Description',
              },
              {
                name: 'Installation',
              },
              {
                name: 'Usage',
              },
              {
                name: 'License',
              },
              {
                name: 'Contributing',
              },
              {
                name: 'Tests',
              },
              {
                name: 'Questions',
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
                name: 'website',
                message: 'Please enter URL to access deployed project: ',
            },        
        ],
    license: [
        {
            type: 'checkbox',
            message: 'Please select type of License ',
            name: 'contents',
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
}
