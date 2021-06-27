# groceries app - frontend
This repo holds the front-end code for a simple groceries app. It is written in Angular. 
You can preview it [here](https://hamzeen.github.io/groceries-app).  
Please continue to the next section if you need to set it up locally in your machine.

## Pre-Requisites ##
Please skip this section if you already have Node.js.  
If this is not the case, please [download](https://nodejs.org/en/download) and install Node.JS.


## Setup

1. `npm install` to install dependencies
2. `npm start` starts the app
3.  see the magic at: <http://localhost:4200/>



## Running Front-End
* ```npm install```
* ```npm start```
* browse: <http://localhost:4200>
* NOTE: Please make sure you have NodeJS installed your machine. If this not the case, 
you can download & install it from [here](https://nodejs.org/en/download).


## Front-end routes
* Login Page for Users: <http://localhost:4200/#/login>
* Landing page for Employees: <http://localhost:4200/#/landing>
* Admin Dashboard: <http://localhost:4200/#/dashboard/employees> or 
simply, <http://localhost:4200/#/admin>
* Above route will lead to following route to create/assign new performance reviews for a selected user: <http://localhost:4200/#/dashboard/reviews>



The entire project was done with a `mobile-first` design approach.
Angular `AuthGuards` are used to protect routes that require authentication.
`JWT` tokens are used for authentication. **Passwords** are `hashed` before they are inserted to the DB.

> For the most part the project uses actual service calls (no service returns mock data) & 
real data coming from the DB. The only feature which doesn't employ actual api call is the 
updates to performance reviews.

Instructions for setting up the project can be found below. 


## Screens

* landing page for employees
![employee landing](https://raw.githubusercontent.com/hamzeen/FullStackEngineerChallenge/master/screenshots/003_landing_page_employees.png)

* admin dashboard: managing employees
![dashboard manage employees](https://raw.githubusercontent.com/hamzeen/FullStackEngineerChallenge/master/screenshots/004_dashboard_admin.png)


## Improvements
* introduce user `role` in `JWT payload`. Then it could used to distinguish employees and admin. 
Currently this is done by looking at the username, `admin`. 
This will help if we decide to have multiple admin users.
* Create a common component to display error messages. Backend errors could be translated into friendly messages & shown in UI.
* The above component could be designed to accept:
    * `severity levels`: (ex: `info, warning, success, error`) & 
    * `Soft` or `Hard` notifications. Soft would disappear on its own; Hard notifications needs to be closed by user.
    * example: <https://hamzeen.github.io/ngToast/>
* following types of testing needs to be added, `unit tests`, `api tests` & `integration`/UI automation `tests`.
    * Some Recommendations: 
        * unit tests: Jasmine
        * api tests: postman scripts
        * UI Automation/Integration tests: Codecept / Protractor


## CREDITS ##
Photos used in this repo are all obtained from [unsplash](http://unsplash.com). I hereby give all credits to their respective owners on unsplash.com


