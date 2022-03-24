const fs = require('fs');

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license !== 'no license') {
    return ' ';
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Unlicense') {
    return '[Unlicense](http://unlicense.org/)';
  } else if (license === 'GNU GPL v3') {
    return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'none') {
    return '';
  };
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const renderLicenseSection = license => {

  if (license === 'none') {
    return '';
  } else {
    return `
  ## License
   
  This application is covered under the ${renderLicenseLink(license)} license.
    `;
  };
};

// TODO: Create a function to generate markdown for README
module.exports = generateMarkdown => {
  const data = generateMarkdown;

  console.log(data);
  return `# ${data.title}
  
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installations](#installation)
  * [Usage](#usage)
  * [Contributions](#contributionGuidelines)
  * [Test](#test)
  * [Github Username](#username)
  * [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributionGuidelines}
  ## Test
  ${data.test}
  ##Github Username
  ${data.username}
  ## License
  ${data.license}
  This repository follows an ${data.license} . 
  ## Questions
  If you have any questions, please contact me at ${data.email}

`;
};

// module.exports = generateReadme;


