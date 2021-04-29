const inquirer = require('inquirer');
const fs = require('fs');




const readmeContent = (userInput) =>

    `
# ${userInput.title}
${userInput.license}
<br>

## Description
    ${userInput.description}
<br>

## Table of Contents
- [Installation](#Installation) <br>
- [Usage](#Usage) <br>
- [License](#License) <br>
- [Contributing](#Contributing) <br>
- [Tests](#Tests) <br>
- [Questions](#Questions) <br>
<br>

## Installation
    ${userInput.installation}
<br>

## Usage
    ${userInput.usage}
<br>

## License
${licenseInfo}
<br>

## Contributing
    ${userInput.contribution}
<br>

## Tests
    ${userInput.test}
<br>

## Questions
GitHub: https://github.com/${userInput.github}

For more questions you can reach me at my Email:(${userInput.email})

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
        type: 'list',
        name: 'license',
        message: 'Choose your license.',
        choices: [
            {
                key: 'AGPL v3', 
                value: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
            }, 
            {
                key:'GPL v3',
                value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            },
            {
                key: 'LGPL v3',
                value: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
            }, 
            {
                key: 'MPL 2.0',
                value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            }, 
            {
                key: 'Apache 2.0',
                value: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            }, 
            {
                key: 'MIT',
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            }, 
            {
                key: 'Boost 1.0',
                value: "[![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
            }, 
            {
                key: 'Unlicense',
                value: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            }],
           
    
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can you test this program?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
])
.then((userInput) => {

    const readmeDoc = readmeContent(userInput);

    if (userInput.license == '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)') {
        let licenseInfo = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an 
        express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
    }


    fs.writeFile('README.md', readmeDoc, (error) =>
    error ? console.log(error) : console.log('Your README file is ready!'));
});


