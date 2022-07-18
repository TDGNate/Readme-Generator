// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    // THEN this is displayed as the title of the README 
    type: 'input',
    message: "What's the title for your project?",
    name: 'title'
  },
  {
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests 
    type: 'input',
    message: "Give your project a description:",
    name: 'description'
  },
  // ask if they want a table of contents 
  {
    type: 'confirm',
    message: 'Do you want a Table Of Contents?',
    default: true,
    name: 'TOC'
  },
  // ask how to install their project 
  {
    type: 'input',
    message: "How to install your project?",
    name: 'install'
  },
  // ask what is this project used for 
  {
    type: 'input',
    message: "What is the usage for this project?",
    name: 'usage'
  },
  // ask what licenses the user wants 
  {
    type: 'list',
    message: "Write your licenses (if applicable):",
    name: 'licenses',
    choices: ['MIT', 'Apache-2.0', 'ISC', 'GPL', 'BSD']
  },
  // ask who is contributing 
  {
    type: 'input',
    message: "Set some contribution guidelines:",
    name: 'contribute'
  },
  // ask to list test instructions 
  {
    type: 'input',
    message: "List test instructions:",
    name: 'test'
  },
  {
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    type: 'input',
    message: 'Enter your Github User name:',
    name: 'user'
  },
  {
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions 
    type: 'input',
    message: 'Enter your email address:',
    name: 'email'
  },
  // ask the user what they want to name the file 
  {
    type: 'input',
    message: 'Do you want to change the file name? (if empty: README.md)',
    name: 'filename'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, 'utf8', (err) => {
    console.log('Error')
  })
}

// TODO: Create a function to initialize app
function init() {
  let userData = []
    inquirer
    .prompt(questions)
      .then((answer) => {
        console.log(answer)
    })
    .catch((error) => {
      console.log(`Error: ${error}`)
      process.exit()
    }); 
}

// Function call to initialize app
init();
