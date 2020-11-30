// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadges = [
    '- free license', 
    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
    '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    '- Other license'
  ];

  let sectionsText = '';
  let readmeText = '';
  // Run loop to generate text based on README sections selected by user
  for (sections of data.contents){
    switch (sections) {
      case 'contents':
        data.contents.forEach((element, i) => {
          sectionsText += `\r${i+1}. [${(element.capitalize())}](#${element})`
        });
        sectionsText = `\r## Contents\r${sectionsText}\n`
        break;
      case 'installation':
        sectionsText = `\r\n## ${sections.capitalize()}\n\r${data.install}  \rWeb Application can be accessed at [${data.website}](${data.website})\r`;
        break;
      case 'usage':
        sectionsText = `\r\n## ${sections.capitalize()}\n\r${data.usage}  \rAll web app code is available at repository [${data.repo}](${data.repo})\r`;
        break;
      case 'license':
        sectionsText = `\r\n## ${sections.capitalize()}\n\rLicensed under the ${licenseBadges[data.license]}\r`;
        break;
      case 'contributing':
        sectionsText = `\r\n## ${sections.capitalize()}\n\rSee contribution guidlines below:  \r${data.contributing}\r`;
        break;
      case 'testing':
        sectionsText = `\r\n## ${sections.capitalize()}\n\rFor testing follow guidlines below:  \r${data.testing}\r`;
        break;
      case 'questions':
        sectionsText = `\r\n## ${sections.capitalize()}\n\rFor any questions use contacts below:  \r
        :construction_worker: Developer: ${data.developer}  
        :email: Email: ${data.email}  
        :boom: GitHub: [https://github.com/${data.githubuser}](https://github.com/${data.githubuser})
        `;
        break;
      }
    // Form Readme text by adding all section texts
    readmeText += sectionsText;
    sectionsText = '';
  };
  // Return README markdown text
  return `# ${data.title}  ${licenseBadges[data.license]}\n
  ${data.description}
  ${readmeText}`;
};

// Function to capitalize string
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
};

module.exports = generateMarkdown;
