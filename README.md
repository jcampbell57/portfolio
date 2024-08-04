# Portfolio

## Project Info

A portfolio of projects completed while working through The Odin Project. The purpose of this project is to showcase what I have learned. Project description can be found [here](https://www.theodinproject.com/lessons/getting-hired-building-your-personal-website).


## Live demo

Live demo available [here](https://jasonmichaelcampbell.com)


## Table of Contents

* [Features](#features)
* [Technologies utilized](#technologies-utilized)
* [Behind the Scenes](#behind-the-scenes)
* [Installation](#installation)


## Features

- Projects listed can be filtered by technology used. 
- Dark/light mode toggle persisted in localStorage.
- Custom CSS font


## Technologies utilized

- HTML5
- CSS5
- JavaScript ES6
- Webpack
- ESLint
- Prettier
- Babel


## Behind the scenes

### Improvements

- Refactor project with react

### Project notes

- My previous projects were completed within an ubuntu environment. I worked on this project in OSX and revisited the following lessons to set up an OSX development environment:
    - [this lesson](https://www.theodinproject.com/lessons/foundations-setting-up-git) was helpful for configuring git.
    - [this lesson](https://www.theodinproject.com/lessons/foundations-installing-node-js) was helpful for setting up nvm and node.
    - [this lesson](https://www.theodinproject.com/lessons/node-path-javascript-linting) was helpful for configuring ESLint and Prettier.

- I had previously installed nvm through homebrew when working with another repo. For this project, I had to uninstall the homebrew nvm installation using `brew uninstall nvm`, and remove the relevant lines from `~/.zshrc` in order to follow the steps from the lessons previously mentioned.

- I used [babel-loader](https://github.com/babel/babel-loader) for babel to work with webpack, but this configuration may need to be modified to work with react. 

### Resources

- I referenced [this article](https://dev.to/devdammak/setting-up-eslint-in-your-javascript-project-with-vs-code-2amf) while setting up ESLint
- [Devicon](https://devicon.dev/) is a great source of icons representing programming languages, designing, and development tools.

### Terminal commands used during development

- Webpack setup
    - `npm init`
    - `npm install webpack webpack-cli --save-dev`
    - `npm install --save-dev style-loader css-loader`
    - `npm install --save-dev html-webpack-plugin`
    - `npm install --save-dev webpack-dev-server`

- Babel setup
    - `npm install -D babel-loader @babel/core @babel/preset-env webpack`

- ESLint setup
    - `npm init @eslint/config@latest`

- Prettier setup
    - `npm install prettier -D --save-exact`

- Deployment
    - `npm run deploy`


## Installation

- Clone this repository to your desktop.
- Navigate to the top level of the directory by running `cd naval-warfare`.
- Run `npm install` to install the required dependencies.  
- Open `dist/index.html` in your browser.
- Run `npm run watch:webpack` to update the `dist` folder on save
- Refresh page after saving to see changes
