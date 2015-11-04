# Angular Embryo [![Code Climate](https://codeclimate.com/github/wilsonsilva/angular-embryo/badges/gpa.svg)](https://codeclimate.com/github/wilsonsilva/angular-embryo) [![Build Status](https://travis-ci.org/wilsonsilva/angular-embryo.svg?branch=master)](https://travis-ci.org/wilsonsilva/angular-embryo)

A seed with test, coverage, linting, deployment and automation tools

## Prerequisites

1. Install [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally

    ```bash
    npm install -g bower gulp
    ```

    >Refer to these [instructions on how to not require sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)
    
3. Install the bower and npm dependencies

 - `npm install`
 - `bower install`
 
### Linting
 - Run code analysis using `gulp jshint` or `gulp jscs`.

### Tests
 - Run the unit tests using `gulp test` (via karma and jasmine) and end-to-end tests using `gulp protractor`

### Running in dev mode
 - Run the project with `gulp serve`

 - opens it in a browser and updates the browser with any files changes.

### Building the project
 - Build the optimized project using `gulp build`
 - This create the optimized code for the project and puts it in the dist folder

## Gulp Tasks

### Task Listing

- `gulp tasks`

    Displays all of the available gulp tasks.

### Code Analysis

- `gulp jshint`

    Performs static code analysis on all javascript files using JSHint.

- `gulp jscs`

    Performs static code analysis on all javascript files using JSCS.

### Testing

- `gulp test`

    Runs all unit tests using karma runner and jasmine with phantomjs.
    
- `gulp test:auto`

    Runs a watch to run all unit tests.

- `gulp protractor`

    Runs all end-to-end tests using protractor.

### Cleaning Up

- `gulp clean`

    Remove all files from the dist, coverage and temp folders
    
### Fonts and Images

- `gulp fonts`

    Copy all fonts from src to the dist folder

- `gulp images`

    Copy all images from src to the dist folder

### Styles

- `gulp styles`

    Compile less files to CSS, add vendor prefixes, and copy to the dist or tmp folder

### Bower Files

- `gulp wiredep`

    Looks up all bower components' main files and JavaScript source code, then adds them to the `index.html`.

### Serving Development Code

- `gulp serve`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast 
    as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles 
    sass to css in a tmp folder.

### Building Production Code

- `gulp html`

    Optimize all javascript and styles, move to a dist folder, and inject them into the new index.html

- `gulp build`

    Copies all fonts, copies images and runs `gulp html` to build the production code to the build folder.

### Serving Production Code

- `gulp build`

    Serve the optimized code from the build folder and launch it in a browser.
    
### Deployment

- `shipit production deploy`
    Deployes the dist folder to production server.

## License

MIT
