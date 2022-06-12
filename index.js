// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your repository?",
      name: "repo",
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "github-username",
      default: "cokamuro",
    },
    {
      type: "input",
      message: "What is the project title?",
      name: "project-title",
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "project-description",
      },
      {
        type: "input",
        message: "What are the installation instructions?",
        name: "install-instructions",
      },
      {
        type: "input",
        message: "What is the usage information?",
        name: "usage-information",
      },
      {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributors",
        default: "Chris Okamuro",
      },
      {
        type: "input",
        message: "What are the test instructions for this project?",
        name: "test-instructions",
      },
      {
        type: "list",
        message: "What license applies to this project?",
        choices: ["none","MIT","Apache 2.0", "BSD", "GPL","LGPL"],
        name: "license",
        default: "none"
      },
  ])
  .then((response) => {
    console.log("test")
  }
    // response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!')
  );

const questions = [,


                ,
                ,
                ];
                // WHEN I enter my email address
                // WHEN I am prompted for information about my application repository
                // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
                // WHEN I choose a license for my application from a list of options
                // WHEN I enter my GitHub username

                // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
                // THEN this is displayed as the title of the README
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
