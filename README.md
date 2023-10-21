# Cypress Testing Project for Heroku App

![Cypress Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TDjyxWeYk8OVtD1jaNfmsxJ1HhXPImaFAvx71MxahjSv9GHP-_T82XoSYUN4JJj9Cxk&usqp=CAU)

This repository contains a Cypress testing project for automated end-to-end testing of the [Heroku App](https://the-internet.herokuapp.com). It demonstrates how to write and run Cypress tests for web applications.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Tests Locally](#running-tests-locally)
- [Running Tests in Headless Mode](#running-tests-in-headless-mode)
- [Configuration](#configuration)
- [GitHub Actions Integration](#github-actions-integration)
- [Dependencies](#dependencies)

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your local development machine.

### Installation

1. Clone this repository to your local machine:

   ```git clone https://github.com/your-username/heroku-cypress-testing.git```

## Running Tests Locally
To run Cypress tests locally, use the following command:
    ```npx cypress run --e2e```


## Running Tests in Headless Mode
To run Cypress tests in headless mode (non-interactive) for continuous integration (CI) or automation purposes, use the following command:
   
   ```npx cypress run --e2e --headless```

## Configuration
Cypress configuration options can be found in the cypress.json file. Adjust the base URL and other settings as needed.

## GitHub Actions Integration
This project includes a GitHub Actions workflow to automate the execution of Cypress tests. The workflow is defined in the .github/workflows/main.yml file.

When you push changes to your repository, GitHub Actions will automatically run the Cypress tests as specified in the workflow file.

## Dependencies
- Cypress: Cypress
- cypress-downloadfile: cypress-downloadfile
- cypress-file-upload: cypress-file-upload
- cypress-mochawesome-reporter: cypress-mochawesome-reporter
- cypress-real-events: cypress-real-events
