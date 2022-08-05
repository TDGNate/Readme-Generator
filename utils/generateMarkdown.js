// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '`No License`'
  } else {
    const LicenseBadges = [
      {
        lic: 'MIT',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      },
      {
        lic: 'Apache-2.0',
        badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      },
      {
        lic: 'ISC',
        badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
      },
      {
        lic: 'GPL',
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      },
      {
        lic: 'BSD',
        badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
      }
    ]

    // check if the license matches one in array
    for (i = 0; i < LicenseBadges.length; i++) {
      if (license == LicenseBadges[i].lic) {
        return LicenseBadges[i].badge
      }
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  } else {

    const licenseLinks = [
      {
        lic: 'MIT',
        links: 'https://choosealicense.com/licenses/mit/'
      },
      {
        lic: 'Apache-2.0',
        links: 'https://choosealicense.com/licenses/apache-2.0/'
      },
      {
        lic: 'ISC',
        links: 'https://choosealicense.com/licenses/isc/'
      },
      {
        lic: 'GPL',
        links: 'https://choosealicense.com/licenses/gpl-3.0/'
      },
      {
        lic: 'BSD',
        links: 'https://choosealicense.com/licenses/bsd-2-clause/'
      }
    ]
    // check if the license matches one in array
    for (i = 0; i < licenseLinks.length; i++) {
      if (license == licenseLinks[i].lic) {
        return `[${license}](${licenseLinks[i].links})`
      }
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
const {title, description, TOC, install, usage, licenses, contribute, test, user, email} = data
  // create Table of content variable to update 
  let tocData = '';


  // checks if the user wants a Table Of Contents on MD file
  if (TOC) {
    tocData =
`## Table Of Contents
- [Usage](#usage)
- [Install](#install)
- [Contribute](#contributing)
- [Testing](#tests)
- [Questions](#questions)
    `
  }

  return `
${ /* Project Title */ ''}
# ${title}

${ /* Description */ ''} 
${description}

${renderLicenseBadge(licenses)}\n
${renderLicenseLink(licenses)}

${ /* TOC */ ''}
${tocData}

${ /* How To Use Product */ ''}
## Usage
${usage}

${ /* Installation */ ''}
## Install
${install}

${ /* Who Contributed? */ ''}
## Contributing
${contribute}

${ /* How To Test Product */ ''}
## Tests
${test}

${ /* Reach out to User via email or github */ ''}
## Questions
_Reach Out!_\n
Github: [${user}](https://github.com/${user}) \n
Email: ${email}
`;
}

// exporting and importing to index . js 
module.exports = generateMarkdown;
