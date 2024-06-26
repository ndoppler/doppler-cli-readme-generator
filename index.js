// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your application?",
        name: "title"
    },
    {
        message: "Please provide a description of your application.",
        name: "appDescription"
    },
    {
        message: "Please provide the installation instructions for your application.",
        name: "appInstallation"
    },
    {
        message: "Please provide the guidelines to contribute to your application.",
        name: "appContributions"
    },
    {
        message: "Please provide the test instructions for your application.",
        name: "appTests"
    },
    {
        type: 'list',
        message: 'Please select a license from the list below, or choose "None" if you would prefer to continue without a license.',
        name: "appLicense",
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License"]
    },
    {
        message: 'What is the GitHub Username associated with your application?',
        name: "appGitHub"
    },
    {
        message: 'What is the e-mail address that you will accept inquiries?',
        name: "appEmail"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log("There is an error.") : console.log("Success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile('README_SUBMISSION.md', generateMarkdown(response))
        )
}

// Function call to initialize app
init();
