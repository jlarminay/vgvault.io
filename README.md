# VGvault.io

## About

This is where the description should go.

## Requirements

* `node ^17.8.0`
* `npm ^8.5.5`

## Project Setup

This project has 2 main components, the front application and the backend API. You can `cd` into individual folders and run commands, but the main folder has a set of commands to run most frequent actions.

```sh
# this will run `npm i` on both folders
npm run install

# This will start dev for both fodlers
npm run dev
```

### Frontend Specific Commands

```sh
# Compile and Hot-Reload for Development
npm run front:dev

# Compile and minify for production
npm run front:build

# Run unit testing with Vitest
npm run front:test:unit

# Run unit testing and generate coverage report with Vitest
npm run front:test:unit:coverage

# Run end-to-end tests with Cypress in headless mode
npm run front:test:e2e 

# Run end-to-end tests with Cypress in UI mode
npm run front:test:e2e:ui

# Lint with ESLint and Prettier
npm run front:lint
```
