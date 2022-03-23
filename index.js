// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your name.");
                return false;
            }
        }
    }, 
    {    
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project in a short paragraph.",
        name: "description"
    },
    {
        type: "input",
        message: "List your installation instructions.",
        name: "installation"
    },
    {
        type: "input",
        message: "What is your usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are your contribution guidelines.",
        name: "contributionGuidelines"
    },
    {
        type: "input",
        message: "Describe your test instructions.",
        name: "test"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "list",
        message: "What license do you need for your project?",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "MPL",
            "GNU",
            "BSD",
            "CC-BY",
            "Unlicense"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    questions().then(answers => 
        {
            console.log(answers);
            writeToFile('./createdReadmeFile/README.md', generateMarkdown(answers));
        });
}


// Function call to initialize app
init();
