# Logger
[![npm (scoped)](https://img.shields.io/npm/v/%40josephdaw/logger?logo=npm
)](https://www.npmjs.com/package/@josephdaw/logger)
![GitHub](https://img.shields.io/github/license/josephdaw/logger)
[![Node.js CI](https://github.com/josephdaw/logger/actions/workflows/node-testing.yml/badge.svg)](https://github.com/josephdaw/logger/actions/workflows/node-testing.yml)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)


## Table of Contents
- [Description](#description)
- [Features](#features)
- [Issues and Requests](#issues-and-requests)
- [Security](#security)
- [Contributing](#contributing)
- [Changes](#changelog)
- [License](#license)


## Description
A basic logger for Node.js applications. It has three logger transports set up. The first outputs to the console, the second outputs only errors to a file, and the third outputs down to the info level to a log file. 
The level that the console transport logs to is set by the `LOG_LEVEL` environment variable. If no level is set, it will default to 'info'.

## Installation
### Using npm
```bash
npm install @josephdaw/logger
```

## Usage
### Importing
```javascript
const logger = require('@josephdaw/logger');
```


## Issues and Requests
Please report any bugs or feature requests via [GitHub Issues](https://github.com/josephdaw/logger/issues). 

## Security 
Please report any security issues to [dev@josephdaw.com](mailto:dev@josephdaw.com). Find more information in our [Security Policy](.github/SECURITY.md)

## Contributing
All development of this project happens through GitHub. We welcome constructive collaboration from the community to help implement new features or fix bugs. For more information please read our [Contribution Guide](.github/CONTRIBUTING.md)

## Changelog
Every significant change is documented in the [changelog file](CHANGELOG.md). 

## License
This project is released under the [MIT License](LICENSE).
