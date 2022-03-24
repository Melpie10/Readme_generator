// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
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
    ]);
}

//promptUser().then(answers => console.log(answers));

async function init() {
    try {
        // Ask user questions and generate responses
        const data = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md, check teh dist folder');
    }   catch(err) {
        console.log(err);
    }
}

// // // TODO: Create a function to write README file
// const writeToFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/README.md', fileContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }

//             resolve({
//                 ok: true,
//                 message: 'File created, check the dist folder!'
//             });
//         });
//     });
// };


// // TODO: Create a function to initialize app
init();
    // .then(readmeData => {
    //     return generateMarkdown(readmeData);
    // })
    // .then(readmeMarkdown => {
    //     return writeToFile(readmeMarkdown);
    // })
    // .then(writeToFileResponse => {
    //     console.log(writeToFileResponse);
    // })
    // // Error handling
    // .catch(err => {
    //     console.log(err);
    // });