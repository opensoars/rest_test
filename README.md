rest_test
=========

Testing a RESTful API against [Travis-ci](https://travis-ci.org/).


---

### Description
This project is a simple RESTful server written in Node.js. The goal of this project is finding a method to test RESTful API's against Travis-ci. The tests are written with Mocha.

### What does the server serve?
It is the back-end of my [poll](https://github.com/opensoars/poll) repository.
* GET /polls
* POST /polls
* GET /polls/:id
* GET /vote/:id
* POST /vote/:id

### Run tests
`npm run localTest`