const inquirer = require('inquirer');
const fs = require('fs');

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
        choices: ['Apache License 2.0','GNU GPLv3','MIT','ISC'],
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
     .then((response) =>
    //  fs.writeFile('README.md',    
     fs.writeFile('Generator-README.md', 
    `# ${response.title} \n\n` +
    `## Description \n\n` +
    `${response.Description}\n\n` +
    `## Table of Contents \n\n` +
    `* [Installation](#installation)\n`+
    `* [Usage](#usage)\n`+
    `* [Credits](#credits)\n`+
    `* [License](#license)\n` +
    `* [Contributing](#contributing)\n`+
    `* [Tests](#tests)\n` +
    `* [Questions](#questions)\n\n` +
    `## Installation\n\n` +
    `This project is installed by using:
         ${response.installation}.\n\n`+
    `## Usage\n\n` +
    `${response.usage}\n\n` +
    `## License\n\n` +
    `${response.license}\n\n` +
    `## Credits\n\n` +
    `The following individual(s) assisted with the creation of this project:
        ${response.credits}\n\n` +
    `## Contributing\n\n` +
    `If you would like to contribute to my application, please follow these guidelines: 
        ${response.contribution}\n\n` +
    `## Tests\n\n` +
    `If applicable, the following testing library was used to test this application: 
        ${response.testing}\n\n`+
    `## Questions\n\n` +
    `Github Page: https://github.com/${response.github}\n`+
    `Email Address: ${response.email}`,
        (err) => err ? console.error(err) : console.log('Success!')));



