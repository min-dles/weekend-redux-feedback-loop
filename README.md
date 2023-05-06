# Feedback Survey

This project is a feedback survey modeled after Prime Digital Academy's student "Reflections" form. The feedback survey is collected in four separate views, or routes, along the way and includes a final review page before the user submits the data. The information collected will be stored in a database.

## Technologies

- React
- PostgreSQL
- Redux
- HTML/CSS
- JavaScript

## Description

1. `What problem did you solve?` This project aims to be a fully looped design for the user to completely fill out the survey, and start over again. Data needs to be entered on certain parts of the survey, and using Redux to keep track of the data collected from one part to another until the user "submits" the final package to the database in the end. 
2. `How did you solve it?` Using Redux, I will keep track of the state and store pieces of data in the store to ultimately combine it all and send it in a POST route to the database on the last step of the survey form. 

## Tasks

- ✅ Initial setup: 
    - ✅ Set up the database in Postico using `data.sql` file provided 
    - ✅ Install required dependencies with `npm install`
    - ✅ Run the server with `npm run server`
    - ✅ Run the react client app to see DOM with `npm run client`
- Home page:
    - Create a component for the user to start the survey 
    - Need a NEXT button to proceed with survey
- First view: How are you feeling today?
    - Require user to choose a number response indicating a score of how they are feeling. User needs to choose an option before proceeding to next question!
    - Dropdown list?
- Second view: How well are you understanding the content?
    - Require user to choose a number response indicating a score of how well they understand content.
- Third view: How well are you being supported? 
    - Require user to rate with a number how well they feel supported. 
- Fourth view: Any comments you want to leave?
    - Text area, user is NOT required to fill this out. SQL form shows this is not required already. 
- Review component:
    - User can review (but not edit) their responses before hitting "submit". After submit has been pressed, user is rerouted back to home page and can go thru the survey again if they want. 
