// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Static Badge](https://img.shields.io/badge/${license}-blue)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return '\n- [License](#license)'
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `\n\n## License \nThis application is covered under the ${license}.`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(encodeURIComponent(data.license))}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributions}

## Tests
${data.tests}${renderLicenseSection(data.license)}

## Questions
For any questions about this application please feel free to email me at ${data.email}.\n\n
Check out my [GitHub profile](https://github.com/${data.github}) and follow me if you like my work!
`;
}

module.exports = generateMarkdown;
