const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const questions = require('./utils/questions')

function writeToFile(data) {
    fs.writeFile('./output/README.md', data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md, you can view it in the output folder')
    )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
