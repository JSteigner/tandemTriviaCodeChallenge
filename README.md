# Tandem Trivia Trainer

Training application for improving your trivia skills

# Description

Trivia Trainer provides users a way to enhance their trivia knowledge. A user can play up to two rounds before answering repeated questions. The user's current score is shown after each answer is attempted. The user's final answer is shown after a ten question round is completed.

# Dependencies

- bootstrap
- react-bootstrap
- express
- parcel-bundler
- react
- react-dom
- prop-types
- underscore
- jest

```javascript
 "dependencies": {
    "bootstrap": "^4.5.3",
    "express": "^4.17.1",
    "node-forge": ">=0.10.0",
    "parcel-bundler": "^1.12.4",
    "prop-types": "^15.7.2",
    "react": "^17.0.1",
    "react-bootstrap": "^1.4.0",
    "react-dom": "^17.0.1",
    "underscore": "^1.11.0"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.12.1",
    "@babel/preset-react": "^7.12.1",
    "@testing-library/react": "^11.1.0",
    "babel-jest": "^26.6.1",
    "concurrently": "^5.3.0",
    "eslint": "^7.12.1",
    "eslint-config-airbnb-base": "^14.2.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-react": "^7.21.5",
    "jest": "^26.6.1",
    "nodemon": "^2.0.6",
    "react-test-renderer": "^17.0.1"
  },
```

# Installation

 Use `node -v` to check your current version of Node. Upgrade to 12, if not currently on version 12.

 Development:

 ```
 npm install                         // installs dependencies
 npm install parcel-bundler -g       // parcel-bundler needs to be installed globally
 npm run dev                         // starts back-end express server and builds parcel front-end bundle in one terminal,
                                        // express is serving up the bundled files from the dist/ folder
 (npm start)                         // alternatively you can run the server in its own terminal with this command
 (npm run parcel:watch)              // alternatively you can run the parcel-bundler in its own terminal with this command
 npm run test                        // runs jest test runner
 npm run test:watch                  // runs test whenever files change (watches)
 ```

# About

  This application was built for the Apprentice Software Engineer Tandem Code Challenge October 2020.
  
  https://madeintandem.com/

  Acceptance Criteria

- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

Assumptions

- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

# extra features I would like to have added

- more unit tests
- fun gifs for when round ends/answer question
- back-end with database to store previous round scores

# Contact

- ioctosteigner@gmail.com