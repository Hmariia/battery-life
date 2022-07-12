# Bamomas Frontend test assignment
This app shows list of batteries and detailed information about each of them. The app provides some additional functionality like filtering by battery id, location, capacity, conection status and state of charge. This software is Single Page Application built in React.
Chart on the home page displays dynamic the state of charge over the time.
Each card on the home page displays some basic information about batteries. 
By selecting one displays detailed information of selected battery.

Live preview link: https://bamomas-batterylife.netlify.app/


![Mobile Screenshot](https://github.com/Hmariia/battery-life/blob/main/screenshots/mobile-view2.jpg)    


![Mobile Screenshot](https://github.com/Hmariia/battery-life/blob/main/screenshots/mobile-view1.jpg)


![Desktop Screenshot](https://github.com/Hmariia/battery-life/blob/main/screenshots/web-view.png)

## Features supported
Following features were implemented in the application:
 * Display a list of pre-defined batteries
 * Filtering batteries by battery id, location, capacity, conection status and state of charge in ascending order
 * Interactive live search by any of listed indicators on the sidebar

## Layouts
Front-end supports three types of screens:
 * Mobile - screen width from 320 up to 519 px
 * Tablet - screen width from 520px up to 799px
 * Desktop - screen width from 800px

## Technologies
Following tech stack was used in this project:
 * HTML / CSS
 * JavaScript
 * React + Bootstrap icons

## Getting started
Make sure you have installed NPM on your machine: [How to Install Node.js and NPM on a Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac)

Install dependecies in the root directory of the project:
```
npm install
```

## Development Evironment
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and supports all the commands from the bootstrap.

Run the app in the development mode:
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

Launch the test runner in the interactive watch mode:
```
npm test

```
## Production Enviroment
Build the app for production to the `build` folder:
```
npm build
```
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
