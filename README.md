# Pixoul Inc. Website
[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

<h1 align="center" style="background-color: white; padding: 25px;">
  <img src="https://pixoulinc.com/static/media/logo.45c36b05.svg" alt="Foco" width="160">
</h1>

<h4 align="center">A cloud-based AWS S3 website built with
  <a href="https://reactjs.org/" target="_blank">ReactJS</a>.
</h4>

Pixoul Inc. is an internet based platform that uses modern and intelligent technology to match industry leaders with top-tier designers, developers, and project managers on demand. This is the marketing website for the platform.

## Installation
[FR]: https://github.com/akashnimare/foco/releases

### Quick Setup

1. Clone the repo to your local machine, wherever you keep git project.
2. Make sure you have Node.JS 10.16.0+ and NPM or Yarn installed on your local machine.
3. Start the app by navigating to the git repo via terminal and type:

`npm install && npm start`


### Step by Step Setup
Use your package manager to install `npm` and `nodejs`.

```sh
$ sudo post install npm nodejs
```
***Depending on your package manager, you may have a different command to install nodejs and npm***

Clone the source locally to your desired git directory:

```sh
$ git clone git@github.com:pixoul/pixoul.git
$ cd pixoul
```

Install project dependencies:

```sh
$ npm install
```
Start the app:

```sh
$ npm start
```

### Build Local Prod

Build production app for development
```sh
$ npm run build
```

## Features

- [x] About Page
- [x] Capabilities Page
- [x] FAQ Page
- [x] Home Page
- [x] Process Page
- [x] Talent Page
- [x] UI Utilities (utils)
- [x] Tawk.IO
- [ ] Google Analytics
- [ ] Blog Page

## Mainly built with
- [ReactJS](https://reactjs.org)
- [React Router](https://reacttraining.com/react-router/)
- [React JSS](https://cssinjs.org/react-jss/)
- [React Spring](https://www.react-spring.io/)
- See package.json for addiitonal packages

## Understanding this project
This project follows a domain driven design approach to development. This means that the project is organized into "domains" of knowledge. Additionally, the code that beneath each domain represents an "interface" or "entry point" into the software. If you have questions, please feel free to reach out to [Ryan Thompson](https://github.com/ryanencoded).

## License

GNU LGPL  © [Pixoul Inc.](https://pixoulinc.com/)
