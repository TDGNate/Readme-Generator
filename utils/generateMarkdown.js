// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // create Table of content variable to update 
  let tocData = '';

  // checks if the user wants a Table Of Contents on MD file
  if (data.TOC) {
    tocData =
`## Table Of Contents
- [Usage](#usage)
- [Install](#install)
- [Contribute](#contributing)
- [Testing](#tests)
- [Licenses](#licenses)
- [Questions](#questions)
    `
  }

  return `
${ /* Project Title */ ''}
# ${data.title}

${ /* Description */ ''} 
${data.description}

${ /* TOC */ ''}
${tocData}

${ /* How To Use Product */ ''}
## Usage
${data.usage}

${ /* Installation */ ''}
## Install
${data.install}

${ /* Who Contributed? */ ''}
## Contributing
${data.contribute}

${ /* How To Test Product */ ''}
## Tests
${data.test}

${ /* Reach out to User via email or github */ ''}
## Questions
_Reach Out!_\n
${data.user}\n
${data.email}
`;
}

// exporting and importing to index . js 
module.exports = generateMarkdown;
