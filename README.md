# groceries app - frontend
This repo holds the front-end code for a simple groceries app. It is written in Angular. 
You can preview it [here](https://hamzeen.github.io/groceries-app).  
Please continue to the next section if you need to set it up locally in your machine.


## Getting Started

NOTE: Please make sure you have NodeJS installed your machine. If this not the case, 
you can download & install it from [here](https://nodejs.org/en/download).

* ```npm install```
* ```npm start```
* browse: <http://localhost:4200>
* unit tests: ```npm test```


## frontend routes
* Grocery List / Search (also the landing page): <http://localhost:4200> or <http://localhost:4200/#/grocery-search>
* Grocery Details: <http://localhost:4200/#/grocery-detail>


## Design Decisions & UI Concerns
* The entire project was done with a `mobile-first` design approach.
* The grocery list page uses `query params`. It allows the last search term to be preserved on browser history. 
* This ensures the last **filter criteira would be intact when the user returns back to ListView from DetailsView**.
* The testing framework, [Jasmine](https://jasmine.github.io) has been employed for `BDD`. 
* Tests have been written to cover all the components.
* The project follows `SOLID principles`, `DRY`


## Screens

![grocery detail landscape](https://raw.githubusercontent.com/hamzeen/groceries-app/main/screens/003_detail_landscape.jpg)
![filter groceries](https://raw.githubusercontent.com/hamzeen/groceries-app/main/screens/002_search.jpg)
![grocery detail portrait](https://raw.githubusercontent.com/hamzeen/groceries-app/main/screens/004_detail_portrait.jpg)

[//]: <> (https://raw.githubusercontent.com/hamzeen/groceries-app/main/screens/001_landing.jpg)

* from top to bottom: landing page, filter groceries, grocery detail landscape, grocery detail portrait


## CREDITS ##
Photos used in this repo are all obtained from [unsplash](http://unsplash.com). I hereby give all credits to their respective owners on unsplash.com


