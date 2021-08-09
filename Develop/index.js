// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please input project title.',
    },
    {
        type: 'input',
        name: 'description', 
        message: 'Please input project description.',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How is your project installed?',
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'How is this project used?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please list the contributors to this project.',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How is your project tested?',
    },
    {
        type: 'input', 
        name: 'license',
        message: 'Enter licenses for your project.',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input', 
        name: 'Email', 
        message: 'Enter email address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.err(error);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("ReadMe.md", generateMarkdown(response));
        });
}

// Function call to initialize app
init();
