// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return ''
  } else {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return ''
  } else {
    return `\n* [License](#license)\n`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  } else {
    return `## License
    
This project is licensed under the ${license} license`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Credits](#credits)

* [Contribute](#contribute)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install any necessary dependencies, run the following command in the terminal:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}

## Contribute

${data.contribute}

## Tests

To run any tests, run the following command in the terminal:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions or have found a bug, feel free to open an issue or contact me at ${data.email}

To see more of my work go to [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
