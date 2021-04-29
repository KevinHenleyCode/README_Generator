const inquirer = require('inquirer');
const fs = require('fs');



const readmeContent = (userInput) =>
    `
# ${userInput.title}
<br>

## Description
    ${userInput.description}
<br>

## Table of Contents
<br>

## Installation
    ${userInput.installation}
<br>

## Usage
    ${userInput.usage}
<br>

## License
<br>

## Contribution
    ${userInput.contribution}
<br>

## Tests
    ${userInput.test}
<br>

## Questions
<br>

    `;


inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this programs intended perpose?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can you test this program?'
    }
])
.then((userInput) => {

    const readmeDoc = readmeContent(userInput);

    fs.writeFile('README.md', readmeDoc, (error) =>
    error ? console.log(error) : console.log('Your README file is ready!'));
});