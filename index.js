const inquirer = require('inquirer');
const fs = require('fs');


// controlls what is put into the README
const readmeContent = (userInput, licenseInfo) =>

    `
# ${userInput.title}
${licenseChoice(userInput)}
<br>
<br>

## **Description**
* ${userInput.description}
<br>
<br>

## **Table of Contents**
- [Installation](#Installation) <br>
- [Usage](#Usage) <br>
- [License](#License) <br>
- [Contributing](#Contributing) <br>
- [Tests](#Tests) <br>
- [Questions](#Questions) <br>
<br>
<br>

## **Installation**
* ${userInput.installation}
<br>
<br>

## **Usage**
* ${userInput.usage}
<br>
<br>

## **License**
${licenseDetails(userInput)}
<br>

## **Contributing**
* ${userInput.contributing}
<br>
<br>

## **Tests**
    
* ${userInput.tests} 
<br>
<br>

## **Questions**
* GitHub: https://github.com/${userInput.github}

* For more questions you can reach me at my Email:(${userInput.email})

    `;


// where the questions are generated and the options are provided
inquirer.prompt([
    // asks for the users input for title
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
    // gives the user a choice between 8 different options of licenses
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license.',
        choices: ['AGPL v3', 'GPL v3', 'LGPL v3', 'MPL 2.0', 'Apache 2.0', 'MIT', 'Boost 1.0', 'Unlicense']
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
// takes the input from the user and feeds it into the README file
.then((userInput) => {

    const readmeDoc = readmeContent(userInput);

    licenseDetails(userInput)
    licenseChoice(userInput)

    // if an error is presented then the word error will be logged to the console 
    fs.writeFile('README.md', readmeDoc, (error) =>
    error ? console.log(error) : console.log('Your README file is ready!'));
});


// checks which license the user chose and which one it matches with, then returns the license badge string
function licenseChoice(userInput) {

    switch (userInput.license) {
        case 'AGPL v3':
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
            break;

        case 'GPL v3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;

        case 'LGPL v3':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
            break;

        case 'MPL 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;

        case 'Apache 2.0':
            return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;

        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;

        case 'Boost 1.0':
            return '[![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            break;

        case 'Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
            break;
    
        default:
            break;
    }
}


// checks which license the user chose and which one it matches and then returns the license discription
function licenseDetails(userInput) {

    switch (userInput.license) {
        case 'AGPL v3': 
                return `### *AGPL v3* <br>
        Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`;
            break;
        
        case "GPL v3": 
                return `### *GPL v3* <br>
        Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
            break;
        
        case "LGPL v3": 
                return `### *LGPL v3* <br>
        Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.`;
            break;
        
        case "MPL 2.0": 
                return `### *MPL 2.0* <br>
        Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`;
            break;
        
        case 'Apache 2.0':
                return `### *Apache 2.0* <br>
        A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
            break;
       
        case "MIT":
                return `### *MIT* <br>
        A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
            break;
        
        case "Boost 1.0":
                return `### *Boost 1.0* <br>
        A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
            break;
        
        case "Unlicense":
                return `### *Unlicense* <br>
        A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`;
            break;
    
        default:
            break;
    }
}
