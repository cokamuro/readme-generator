// Create an array of questions for user input
module.exports = [
    // {
    //     type: "input",
    //     message: "What is the name of your repository?",
    //     name: "github-repo",
    // },
    {
        type: "input",
        message: "What is your Github username?",
        name: "githubUsername",
        //default: "cokamuro",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "emailAddress",
        //default: "cokamuro@gmail.com",
    },
    {
        type: "input",
        message: "What is the project title?",
        name: "projectTitle",
        //default: "Professional README Generator",
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "projectDescription",
        //default: "The program prompts the user for a number of inputs, and then it generates a high-quality README file, including well-formatted markdown, and working links."
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installationInstructions",
        default: "There are no installation instructions for this project",
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usageInformation",
        default: "There is no usage information for this project",
    },
    {
        type: "list",
        message: "What license applies to this project?",
        choices: ["none", "Apache License 2.0", "GNU GPL v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 1.0", "GNU Affero GPL V3.0", "GNU GPL v2.0", "GNU Lesser GPL v3", "Mozilla Public License 2.0", "The Unlicense"],
        name: "licenseName",
        default: "none"
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contributionGuidelines",
        default: "There are no contribution guidelines for this project",
    },
    {
        type: "input",
        message: "What are the test instructions for this project?",
        name: "testInstructions",
        default: "There are no test instructions for this project",
    },
];