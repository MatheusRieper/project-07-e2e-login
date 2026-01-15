Project 07 – Cypress Login Tests
Overview

This project contains automated end-to-end (E2E) tests for validating the login functionality of a web application using Cypress. The test suite covers both successful authentication and multiple invalid login scenarios, following good practices such as custom commands, fixtures, and reusable test logic.

The project was developed with a focus on clarity, maintainability, and alignment with professional QA automation standards.

Technologies and Tools

JavaScript (ES6+)

Cypress – End-to-End Testing Framework

Node.js / npm

Project Structure
project-07/
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js        # Login test scenarios
│   ├── fixtures/
│   │   └── login.json         # Test data for invalid login cases
│   └── support/
│       └── commands.js        # Custom Cypress commands
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
Test Scenarios
Successful Login

Login with valid credentials

URL validation after login

Validation of success message

Validation of visible "Log out" option

Invalid Login (Data-Driven)

The invalid login tests are driven by a fixture file (login.json) and include:

Invalid email

Invalid password

Empty email field

Empty password field

Each scenario validates the expected error message returned by the application.

Custom Commands

To improve reusability and readability, custom Cypress commands were implemented:

openPage: Sets viewport and navigates to the login page

login: Performs login attempts with dynamic handling of empty fields

These commands are located in:

cypress/support/commands.js
Environment Variables

Valid credentials are stored using Cypress environment variables:

ADMIN_USER=your_username
ADMIN_PASS=your_password

They can be configured in:

cypress.env.json (local)

or via terminal / CI pipeline

How to Run the Project
Install Dependencies
npm install
Open Cypress Test Runner
npx cypress open
Run Tests in Headless Mode
npx cypress run
Best Practices Applied

Use of fixtures for data-driven testing

Custom commands to avoid code duplication

Clear test descriptions and logical grouping

Assertions focused on user-visible behavior

Clean and maintainable project structure

Author

Matheus Souza
QA / Test Automation Enthusiast
