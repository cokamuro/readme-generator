// Including the packages needed for this application
const { prompt } = require("inquirer");
const fs = require("fs");
const questions = require('./questions.js');
const utils = require("./utils.js");
const mdHelper = require("./utils/generateMarkdown.js");

const init = async () => {
    // prompt the user for all of the data to integrate into the template
    const data = await prompt(questions);
    // read the template README
    const template=utils.readTemplate();
    // perform the wildcard substitutions in the template
    let body=template.replace("%%%project-title%%%",data.projectTitle)
    body=body.replace("%%%project-description%%%",data.projectDescription)
    body=body.replace("%%%installation-instructions%%%",data.installationInstructions)
    body=body.replace("%%%usage-information%%%",data.usageInformation)
    if(data.licenseName=="none"){
        body=body.replace("%%%license-name%%%","There is no usage license for this project.")
    } else {
        body=body.replace("%%%license-name%%%","This project is licensed under "+data.licenseName+".  Click the badge below to see the terms of this license.")
    }
    body=body.replace("%%%license-badge%%%",mdHelper.lookupLicenseMarkup(data.licenseName))
    body=body.replace("%%%contribution-instructions%%%",data.contributionGuidelines)
    body=body.replace("%%%test-instructions%%%",data.testInstructions)
    body=body.replaceAll("%%%email-address%%%",data.emailAddress)
    body=body.replace("%%%github-id%%%",data.githubUsername)
    // write the string to the README.md file in the output directory
    utils.writeToFile("./output/README.md", body);
  };

// Function call to initialize app
init();
