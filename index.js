const inquirer = require('inquirer');
const fs = require('fs');
var badgeLicenseLink;

inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Tell me about your project.',
        name: 'Description',
    },
    {
        type: 'input',
        message:'How do you install this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the guidelines to contribute to this application? (Separate multiple guidelines with a comma)',
        name: 'contribution',
    },
    {
        type: 'input',
        message:'What testing library did you use for this application?',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'What license do want to you use for this application?',
        choices: ['Apache 2.0','Boost Software','BSD 3-Clause','Eclipse','GNU GPL v3', 'IBM','ISC','MIT','Mozilla','WTFPL'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: "input",
        message: 'What is your email address',
        name: 'email',
    },
    {
        type: "input",
        message: 'List the name of your collobators if any (Separate with a comma)',
        name: 'credits',
    },
    ])
 
     .then(response => {
        
         function licensePicker (){
             if(response.license == 'Apache 2.0'){
                 badgeLicenseLink =  '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                } else if(response.license == 'Boost Software') {
                    badgeLicenseLink = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
                } else if(response.license == 'BSD 3-Clause'){
                    badgeLicenseLink = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
                } else if(response.license == 'Eclipse') {
                    badgeLicenseLink = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
                } else if(response.license == 'GNU GPL v3') {
                    badgeLicenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
                } else if(response.license == 'IBM') {
                    badgeLicenseLink = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
                } else if(response.license == 'ISC') {
                    badgeLicenseLink = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
                } else if(response.license == 'MIT') {
                    badgeLicenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                } else if(response.license == 'Mozilla') {
                    badgeLicenseLink = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
                } else {badgeLicenseLink = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/   about/)'
                }
                return badgeLicenseLink;
            }
             
       
        fs.writeFile('Generator-README.md', 

        licensePicker() +
        `\n\n\n# ${response.title} \n\n\n` +

        `## Description \n\n` +
        `${response.Description}\n\n\n` +
    
        `## Table of Contents \n\n` +
        `* [Installation](#installation)\n`+
        `* [Usage](#usage)\n`+
        `* [Credits](#credits)\n`+
        `* [License](#license)\n` +
        `* [Contributing](#contributing)\n`+
        `* [Tests](#tests)\n` +
        `* [Questions](#questions)\n\n\n` +
        
        `## Installation\n\n` +
        `This project is installed by using:
         ${response.installation}.\n\n\n`+
    
        `## Usage\n\n` +
        `${response.usage}\n\n\n` +
    
        `## License\n\n` +
        `${response.license}\n\n\n` +
    
        `## Credits\n\n` +
        `The following individual(s) assisted with the creation of this project:
        ${response.credits}\n\n\n` +
    
        `## Contributing\n\n` +
        `If you would like to contribute to my application, please follow these guidelines: 
        ${response.contribution}\n\n\n` +
    
        `## Tests\n\n` +
        `If applicable, the following testing library was used to test this application: 
        ${response.testing}\n\n\n`+
    
        `## Questions\n\n` +
        `Github Page: https://github.com/${response.github}\n`+
        `Email Address: ${response.email}`,
        (err) => err ? console.error(err) : console.log('Success!'))});

