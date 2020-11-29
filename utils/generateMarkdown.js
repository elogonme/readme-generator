// function to generate markdown for README
function generateMarkdown(data) {
  let sectionsText = '';
  for (sections of data.contents){
    sectionsText += '## ' + sections + '\n';
  }

  return `# ${data.title} \n

  ${data.description} \n

  ${sectionsText}
`;
}

module.exports = generateMarkdown;
