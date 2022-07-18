// TODO: Include packages needed for this application

// file system module 
const fs = require('fs');

// inquirer module 
const inquirer = require('inquirer');

// 2nd js file to generate md file 
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    // THEN this is displayed as the title of the README 
    type: 'input',
    message: "What's the title for this project?",
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
    message: "How to install?",
    name: 'install'
  },
  // ask what is this project used for 
  {
    type: 'input',
    message: "What is the usage?",
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
    message: "How to make contributions?",
    name: 'contribute'
  },
  // ask to list test instructions 
  {
    type: 'input',
    message: "Test instructions:",
    name: 'test'
  },
  {
    // gets the user's Github User name 
    type: 'input',
    message: 'Enter your Github User name:',
    name: 'user'
  },
  {
    // also gets the user's email
    type: 'input',
    message: 'Enter your email address:',
    name: 'email'
  },
  // ask the user what they want to name the file 
  {
    type: 'input',
    message: 'Keep README.md or change file name:',
    default: 'README.md',
    name: 'filename'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, userName) {
  fs.writeFile(fileName, data, 'utf8', (err) => {
    if (err) {
      console.log(`oops ${userName}, error: ${err}`)
    } else {
      console.log(`ayyy ${userName}, markdown created!`)
    }
  })
}

// TODO: Create a function to initialize app
function init() {

    // prompt the user 
    inquirer
    .prompt(questions)
      .then((answer) => {

        // store the File Name from user 
        let fileName = answer.filename;

        // if user added but removed, change to READ.md
        if (JSON.stringify(fileName) === '') {
          fileName = "README.md";
        }

        // check if the user added .md at the end 
        if (JSON.stringify(fileName).includes('.md') === false) {
          // if user did not add .md it will add 
          fileName = `${fileName}.md`;
        }  else {
          // else do nothing 
          fileName = answer.filename;
        }

        // sending answers to 2nd file to then get returned the generated read me file 
        const mdLayout = generateMarkdown(answer)
        console.log(mdLayout)

        // send the generated MD into writeToFIle Function 
        writeToFile(fileName, mdLayout, answer.user)
    })
    .catch((error) => {
      console.log(`uh oh, we have an Error... ${error}`)
      process.exit()
    }); 
}

// Function call to initialize app
init();
