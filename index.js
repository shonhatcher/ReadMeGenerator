const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const title = `${response.title}`;

inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
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
        message: 'What are the guidelines to contribute to this application?',
        name: 'contribution',
    },
    {
        type: 'input',
        message:'Testing',
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

    ])
     .then((response) =>
    //  fs.writeFile('README.txt',    
     fs.writeFile('README.txt', 
    `${response.title}`+`\n\n`+
    '## Description'+`\n\n` +
    `${response.Description}\n\n`+
     '## Table of Contents',


     
     //'Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions';

        (err) => err ? console.error(err) : console.log('Success!')));



