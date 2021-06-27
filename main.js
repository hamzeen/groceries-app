(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container single-page\">\r\n  <router-outlet></router-outlet>\r\n</div><!-- .container -->\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#btn-logout {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  margin-right: 15px;\n  margin-top: 10px;\n  background: #0077cc;\n  color: #fff;\n  padding: 8px 20px;\n  font-family: 'BeyondTheMountains';\n  letter-spacing: 2px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdXBteXQxL0Rlc2t0b3AvZnJ1aXQtc2VhcmNoL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNidG4tbG9nb3V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDA3N2NjO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnQmV5b25kVGhlTW91bnRhaW5zJztcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/appstate.service */ "./src/app/shared/services/appstate.service.ts");
/* harmony import */ var _grocery_search_grocery_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grocery-search/grocery-search.component */ "./src/app/grocery-search/grocery-search.component.ts");
/* harmony import */ var _grocery_detail_grocery_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grocery-detail/grocery-detail.component */ "./src/app/grocery-detail/grocery-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _grocery_search_grocery_search_component__WEBPACK_IMPORTED_MODULE_11__["GrocerySearchComponent"],
                _grocery_detail_grocery_detail_component__WEBPACK_IMPORTED_MODULE_12__["GroceryDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__["routes"], { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_10__["AppStateService"],
                _shared_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _grocery_search_grocery_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grocery-search/grocery-search.component */ "./src/app/grocery-search/grocery-search.component.ts");
/* harmony import */ var _grocery_detail_grocery_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grocery-detail/grocery-detail.component */ "./src/app/grocery-detail/grocery-detail.component.ts");


var routes = [
    {
        /* intentionally not protected this route to enable easily Singup during assessment evaluation */
        path: 'grocery-search',
        component: _grocery_search_grocery_search_component__WEBPACK_IMPORTED_MODULE_0__["GrocerySearchComponent"]
    },
    {
        path: 'grocery-detail',
        component: _grocery_detail_grocery_detail_component__WEBPACK_IMPORTED_MODULE_1__["GroceryDetailComponent"]
    },
    { path: '', redirectTo: '/grocery-search', pathMatch: 'full' },
    { path: '**', redirectTo: '/grocery-search', pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/grocery-detail/grocery-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/grocery-detail/grocery-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"breadcrumb\">\n  <span class=\"badge-breadcrumb\">&nbsp;you are here&nbsp;</span>\n  <li class=\"breadcrumb-item\"><a href='/groceries-app/#/grocery-search'>Home</a></li>\n  <li class=\"breadcrumb-item\">Grocery Detail</li>\n</div>\n\n<div id=\"timeline-containter\" class=\"row\">\n\n  <div class=\"col-12 col-lg-9\">\n    <h1>&nbsp;</h1>\n\n    <!-- unauthorised //-->\n    <div *ngIf=\"!groceryDetail\">\n\n      <p class=\"notification\">\n        You haven't selected any grocery to view its detail.\n        Please consider visiting our <a href='/'>landing page</a> to make selection.</p>\n    </div>\n\n\n    <!-- a user has been selected //-->\n    <div *ngIf=\"groceryDetail\">\n      <!-- {{groceryDetail | json}}<br/>//-->\n\n      <div class=\"column\">\n\n        <!-- Post-->\n        <div class=\"post-module hover\">\n          <!-- Thumbnail-->\n          <div class=\"thumbnail\">\n            <div class=\"date\">\n              <div class=\"site-title\">{{groceryDetail.name}}</div>\n            </div>\n          </div>\n          <!-- Post Content-->\n          <div class=\"post-content\">\n            <div *ngIf=\"groceryDetail.images\" class=\"category\">Photos</div>\n\n            <h1 class=\"title\">Overview</h1>\n            <p class=\"description\">{{groceryDetail.description}}</p>\n            <br/>\n\n            <!-- additional info in an optional field in the Grocery interface //-->\n            <div *ngIf=\"groceryDetail.additionalInformation\">\n              <h1 class=\"title\">Nutrition Facts</h1>\n              <h2 class=\"notification sub_title\">{{groceryDetail.additionalInformation}}</h2>\n            </div>\n\n            <!-- images are also an optional property in our Grocery interface //-->\n            <div *ngIf=\"groceryDetail.images\">\n\n              <h1 class=\"title\">Photo Gallery</h1>\n              <div class=\"gallery\">\n                <img class=\"photo-item\"\n                     src=\"{{url}}\"\n                     *ngFor=\"let url of groceryDetail.images; let idx = index\">\n              </div>\n            </div><!-- end of grocery detail gallery //-->\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col-12 col-lg-3\">\n    <div class=\"sidebar\">\n      <div class=\"about-me\">\n        <h2>About</h2>\n\n        <p>\n          Our company is a wholesale distributor of organic produce located in\n          Hoofddorp, The Netherlands</p>\n      </div>\n\n      <div class=\"recent-posts\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/grocery-detail/grocery-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/grocery-detail/grocery-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-module {\n  position: relative;\n  z-index: 1;\n  display: block;\n  background: #FFFFFF;\n  min-width: 270px;\n  min-height: 470px;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);\n  transition: all 0.3s linear 0s; }\n\n.post-module:hover, .hover {\n  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.3); }\n\n.post-module:hover .thumbnail img,\n.hover .thumbnail img {\n  transform: scale(1.1);\n  opacity: 0.6; }\n\n.post-module .thumbnail {\n  background: url('grocery_detail.jpeg') #22882f88;\n  background-size: cover;\n  min-height: 380px;\n  overflow: hidden; }\n\n.post-module .thumbnail .date {\n  position: absolute;\n  top: 20px;\n  left: 40px;\n  z-index: 1;\n  padding: 12.5px 12px;\n  color: #FFFFFF;\n  font-weight: 700;\n  text-align: center;\n  -webkti-box-sizing: border-box;\n  box-sizing: border-box;\n  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 6px 1px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.15); }\n\n.post-module .post-content {\n  bottom: 0;\n  background: #FFFFFF;\n  width: 100%;\n  padding: 30px;\n  -webkti-box-sizing: border-box;\n  box-sizing: border-box;\n  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s; }\n\n.post-module .post-content .category {\n  position: absolute;\n  top: 275px;\n  right: 0;\n  background: #e74c3c;\n  padding: 10px 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase; }\n\n.post-module .post-content .title {\n  margin: 0;\n  padding: 0 0 10px;\n  color: #333333;\n  font-family: 'BeyondTheMountains';\n  font-size: 26px;\n  font-weight: 700; }\n\n.post-module .post-content .sub_title {\n  margin: 0;\n  padding: 0 0 20px;\n  font-weight: 400;\n  white-space: pre-line; }\n\n.post-module .post-content .description {\n  display: none;\n  color: #666666;\n  font-size: 14px;\n  line-height: 1.8em; }\n\n.hover .post-content .description {\n  display: block !important;\n  height: auto !important;\n  opacity: 1 !important; }\n\n.container {\n  max-width: 800px;\n  min-width: 640px;\n  margin: 0 auto; }\n\n.container:before,\n.container:after {\n  content: '';\n  display: block;\n  clear: both; }\n\n.container .column {\n  width: 50%;\n  padding: 0 25px;\n  -webkti-box-sizing: border-box;\n  box-sizing: border-box;\n  float: left; }\n\n.container .info {\n  width: 300px;\n  margin: 50px auto;\n  text-align: center; }\n\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 24px;\n  font-weight: bold;\n  color: #333333; }\n\n.container .info span {\n  color: #666666;\n  font-size: 12px; }\n\n.container .info span a {\n  color: #000000;\n  text-decoration: none; }\n\n.container .info span .fa {\n  color: #e74c3c; }\n\n.gallery {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  transition: all .1s; }\n\n.photo-item {\n  flex: 0 0 25%;\n  padding-right: 10px;\n  transition: all .1s; }\n\n@media screen and (max-width: 439px) {\n  .photo-item {\n    flex: 0 0 100%;\n    margin: 0 auto;\n    padding-top: 10px; } }\n\n@media screen and (min-width: 440px) and (max-width: 767px) {\n  .photo-item {\n    flex: 0 0 50%;\n    padding-top: 10px; } }\n\n@media screen and (min-width: 768px) and (max-width: 900px) {\n  .photo-item {\n    flex: 0 0 33.333333%;\n    padding-top: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdXBteXQxL0Rlc2t0b3AvZnJ1aXQtc2VhcmNoL3NyYy9hcHAvZ3JvY2VyeS1kZXRhaWwvZ3JvY2VyeS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUdqQiwrQ0FBK0M7RUFLL0MsOEJBQThCLEVBQUE7O0FBR2hDO0VBR0UsK0NBQStDLEVBQUE7O0FBRWpEOztFQUlFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxnREFBOEQ7RUFDOUQsc0JBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUU5QixzQkFBc0I7RUFDdEIseUdBRzJCLEVBQUE7O0FBSTdCO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUU5QixzQkFBc0I7RUFLdEIsNERBQTRELEVBQUE7O0FBRTlEO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBRWhCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWhCOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUViO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZiw4QkFBOEI7RUFFOUIsc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCLEVBQUEsRUFDbEI7O0FBR0g7RUFDRTtJQUNFLGFBQWE7SUFFYixpQkFBaUIsRUFBQSxFQUNsQjs7QUFHSDtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLGlCQUFpQixFQUFBLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZ3JvY2VyeS1kZXRhaWwvZ3JvY2VyeS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wb3N0LW1vZHVsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIG1pbi13aWR0aDogMjcwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ3MHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbn1cblxuLnBvc3QtbW9kdWxlOmhvdmVyLCAuaG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5wb3N0LW1vZHVsZTpob3ZlciAudGh1bWJuYWlsIGltZyxcbi5ob3ZlciAudGh1bWJuYWlsIGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBvcGFjaXR5OiAwLjY7XG59XG4ucG9zdC1tb2R1bGUgLnRodW1ibmFpbCB7XG4gIGJhY2tncm91bmQ6IHVybCgnYXNzZXRzL2ltYWdlcy9ncm9jZXJ5X2RldGFpbC5qcGVnJykgIzIyODgyZjg4O1xuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBvc3QtbW9kdWxlIC50aHVtYm5haWwgLmRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNDBweDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMTIuNXB4IDEycHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJrdGktYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjY2NjLFxuICAwIDJweCAwICNjOWM5YzksXG4gIDAgNnB4IDFweCByZ2JhKDAsMCwwLC4xKSxcbiAgMCAyMHB4IDIwcHggcmdiYSgwLDAsMCwuMTUpO1xufVxuXG5cbi5wb3N0LW1vZHVsZSAucG9zdC1jb250ZW50IHtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgLXdlYmt0aS1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzcsIDAuNzUsIDAuNjEsIDEuMDUpIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjM3LCAwLjc1LCAwLjYxLCAxLjA1KSAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjM3LCAwLjc1LCAwLjYxLCAxLjA1KSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzcsIDAuNzUsIDAuNjEsIDEuMDUpIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4zNywgMC43NSwgMC42MSwgMS4wNSkgMHM7XG59XG4ucG9zdC1tb2R1bGUgLnBvc3QtY29udGVudCAuY2F0ZWdvcnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjc1cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucG9zdC1tb2R1bGUgLnBvc3QtY29udGVudCAudGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1mYW1pbHk6ICdCZXlvbmRUaGVNb3VudGFpbnMnO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucG9zdC1tb2R1bGUgLnBvc3QtY29udGVudCAuc3ViX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG4ucG9zdC1tb2R1bGUgLnBvc3QtY29udGVudCAuZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS44ZW07XG59XG5cbi5ob3ZlciAucG9zdC1jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWluLXdpZHRoOiA2NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFpbmVyOmJlZm9yZSxcbi5jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuLmNvbnRhaW5lciAuY29sdW1uIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMCAyNXB4O1xuICAtd2Via3RpLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb250YWluZXIgLmluZm8ge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbmZvIGgxIHtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uY29udGFpbmVyIC5pbmZvIHNwYW4ge1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIC5mYSB7XG4gIGNvbG9yOiAjZTc0YzNjO1xufVxuXG5cbi5nYWxsZXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAuMXM7XG59XG5cbi5waG90by1pdGVtIHtcbiAgZmxleDogMCAwIDI1JTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDM5cHgpIHtcbiAgLnBob3RvLWl0ZW0ge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ0MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBob3RvLWl0ZW0ge1xuICAgIGZsZXg6IDAgMCA1MCU7XG5cbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5waG90by1pdGVtIHtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/grocery-detail/grocery-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/grocery-detail/grocery-detail.component.ts ***!
  \************************************************************/
/*! exports provided: GroceryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryDetailComponent", function() { return GroceryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/appstate.service */ "./src/app/shared/services/appstate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroceryDetailComponent = /** @class */ (function () {
    function GroceryDetailComponent(stateService) {
        this.stateService = stateService;
        // nothing here..
    }
    GroceryDetailComponent.prototype.ngOnInit = function () {
        this.renderReviews();
    };
    GroceryDetailComponent.prototype.renderReviews = function () {
        this.groceryDetail = this.stateService.getGroceryDetail() || null;
    };
    GroceryDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grocery-detail',
            template: __webpack_require__(/*! ./grocery-detail.component.html */ "./src/app/grocery-detail/grocery-detail.component.html"),
            styles: [__webpack_require__(/*! ./grocery-detail.component.scss */ "./src/app/grocery-detail/grocery-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_1__["AppStateService"]])
    ], GroceryDetailComponent);
    return GroceryDetailComponent;
}());



/***/ }),

/***/ "./src/app/grocery-search/grocery-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/grocery-search/grocery-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"breadcrumb\">\n    <span class=\"badge-breadcrumb\">&nbsp;you are here&nbsp;</span>\n    <li class=\"breadcrumb-item\">Home</li>\n  </div>\n\n  <!--<h2 class=\"site-title margin-top-20\">Fruits Lookup</h2>//-->\n\n\n  <div>\n\n    <!-- Form: search fruit(s) //-->\n    <form [formGroup]=\"formContact\" (ngSubmit)=\"onSubmit()\" class=\"well\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-9\">\n          <input type=\"text\" formControlName=\"criteria\" class=\"form-control\" id=\"criteria\" autocomplete=\"on\"\n             placeholder=\"search fruit (ex: 'apple')\">\n        </div>\n        <div class=\"form-group col-md-3\">\n          <button class=\"btn btn-primary btn-create-user\" type=\"submit\">Search</button>\n        </div>\n      </div>\n    </form>\n\n    <br/><br/>\n\n  </div>\n\n\n\n  <div class=\"row\">\n    <div class=\"col-12 col-md-12 col-xl-12\">\n\n      <h5>Fruits List</h5>\n\n      <div *ngIf=\"filteredFruits.length > 0\" class=\"accordion\">\n        <div *ngFor=\"let grocery of filteredFruits; let i = index\" class=\"accordion__item\">\n          <div style=\"display: flex\" class=\"accordion-header \">\n            <div class=\"grocery-id\" style=\"flex: 2;\"># {{i+1}}</div>\n            <div style=\"flex: 5;\">{{grocery.name}}</div>\n            <div style=\"flex: 2;\" (click)=\"onReviewsByEmployee(grocery)\">view details</div>\n          </div>\n        </div><!-- end of accordion item -->\n      </div><!-- end of accordion -->\n\n      <div *ngIf=\"!filteredFruits || filteredFruits.length <= 0\" class=\"accordion\">\n        <p class=\"notification\">\n          Oops, there weren't any grocery to match your search criteria.\n          Perhaps you can try searching for a different fruit..\n        </p>\n      </div><!-- end of accordion -->\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/grocery-search/grocery-search.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/grocery-search/grocery-search.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-size: 62.5%;\n  background: #dadada;\n  font-family: 'Open Sans', sans-serif;\n  line-height: 2;\n  padding: 2em; }\n\n.accordion {\n  font-size: 19px;\n  margin: 0 auto;\n  background: #f8f8f8; }\n\n.accordion-header {\n  padding: 1.5em 1.5em;\n  color: #000;\n  cursor: pointer;\n  font-size: .8em;\n  letter-spacing: .1em;\n  transition: all .3s; }\n\n.accordion-header:hover {\n  position: relative;\n  z-index: 5;\n  background: #ee0; }\n\n.grocery-id {\n  transition: .2s ease; }\n\n.accordion-header:hover .stud-name {\n  margin-left: 8px; }\n\n/* Accordion Item */\n\n.accordion__item {\n  border-bottom: 1px solid #efefe0; }\n\n.accordion__item:last-child {\n  border-bottom: none; }\n\n/* Header */\n\n.accordion__item.active .accordion-header {\n  background: #ee0; }\n\n.accordion-body {\n  color: #3f3c3c;\n  display: none; }\n\n.accordion-body__contents {\n  padding: 1.5em 1.5em; }\n\n@media screen and (max-width: 1000px) {\n  body {\n    padding: 1em; }\n  .accordion {\n    width: 100%; } }\n\n.flex-container {\n  padding: 15px 0;\n  margin: 0; }\n\n.flex-item-70 {\n  flex: 4;\n  padding: 5px 5px 5px 10px;\n  text-align: left;\n  font-family: 'Open Sans', sans-serif; }\n\n.flex-item-30 {\n  flex: 1;\n  padding: 5px 5px 5px 10px;\n  text-align: right;\n  font-family: 'Open Sans', sans-serif; }\n\n.flex-item {\n  flex-basis: 100%;\n  padding: 5px 5px 5px 10px;\n  text-align: left;\n  font-family: 'Open Sans', sans-serif; }\n\n.gravity {\n  margin: auto 0; }\n\n.flex-item:first-child,\n.flex-item:last-child {\n  border: none; }\n\n@media screen and (min-width: 640px) {\n  .flex-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap; }\n  .flex-item {\n    flex: 1; }\n  .flex-item:first-child {\n    border-right: 1px dotted #ccc; }\n  .flex-item:last-child {\n    border-left: 1px dotted #ccc; } }\n\n.flex-item-30 h2,\n.flex-item-70 h2,\n.flex-item h2 {\n  color: #3d5;\n  font-size: 25px;\n  font-weight: 400;\n  margin: 0px;\n  padding: 0px;\n  margin-left: 36px; }\n\n.flex-item-30 h5,\n.flex-item-70 h5,\n.flex-item h5 {\n  color: #888898b0;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 21px;\n  margin: 0px;\n  padding: 0px;\n  left: 20px; }\n\n.flex-item-30 h5:before,\n.flex-item-70 h5:before,\n.flex-item h5:before {\n  padding-right: 10px;\n  font-size: 24px;\n  vertical-align: middle; }\n\n.flex-item-30 p,\n.flex-item-70 p,\n.flex-item p {\n  color: #210;\n  font-size: 19px;\n  margin: 0px;\n  margin-left: 34px;\n  padding: 0px; }\n\n.margin-top20 {\n  margin-top: 20px; }\n\n.well {\n  background-color: #FAFAFA; }\n\n.well .btn-create-user {\n    margin-top: 0px;\n    padding: 20px 70px;\n    background: #337ab7;\n    color: #fff;\n    font-size: 19px;\n    font-weight: 200;\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"; }\n\n/* -----------------------\n  Form Group\n----------------------- */\n\n.btn-primary {\n  padding-top: 10px;\n  margin: 10px 0px;\n  outline: none;\n  outline: none; }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red; }\n\n.form-control {\n  border-radius: 0;\n  box-shadow: none; }\n\n.form-control:focus {\n  box-shadow: none; }\n\n.form-group {\n  position: relative;\n  margin-bottom: 25px; }\n\n.form-group > label {\n  text-transform: uppercase;\n  font-size: 10px;\n  color: #a1a2a3;\n  transform-origin: 0 0;\n  transform: scale(1.4);\n  pointer-events: none;\n  position: relative;\n  z-index: 5; }\n\n.form-group > input {\n  width: 100%; }\n\n.form-group > label {\n  transition: transform 0.4s;\n  transform-origin: 0 0;\n  transform: scale(1.3) translateY(5px); }\n\n.form-group.not-empty > label {\n  transform: none; }\n\n/*------------------------------\n\tForm Controls\n------------------------------*/\n\n.form-control {\n  border: 0;\n  border-bottom: 1px solid #bcd0e0; }\n\n.form-control,\n.form-control:focus,\n.form-control:focus:hover {\n  color: #000;\n  background: none;\n  outline: none;\n  font-size: 24px; }\n\n.form-control:focus,\n.form-control:focus:hover {\n  border-bottom: 1px solid #008dff; }\n\n.btn {\n  box-shadow: -3px 4px 2px -1px rgba(0, 0, 0, 0.3);\n  transition: all .1s ease;\n  -ms-transition: all .1s ease;\n  -o-transition: all .1s ease; }\n\n.btn:hover {\n  box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1); }\n\n.btn.focus, .btn:focus, .btn:hover {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdXBteXQxL0Rlc2t0b3AvZnJ1aXQtc2VhcmNoL3NyYy9hcHAvZ3JvY2VyeS1zZWFyY2gvZ3JvY2VyeS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyb2Nlcnktc2VhcmNoL2dyb2Nlcnktc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQixtQkFBQTs7QUFDQTtFQUNFLGdDQUFnQyxFQUFBOztBQUVsQztFQUNFLG1CQUFtQixFQUFBOztBQUdyQixXQUFBOztBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFFZjtFQUNFLG9CQUFvQixFQUFBOztBQUl0QjtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxXQUFXLEVBQUEsRUFDWjs7QUFJSDtFQUNFLGVBQWU7RUFDZixTQUFTLEVBQUE7O0FBRVg7RUFDRSxPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDRSxPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOztFQUVFLFlBQVksRUFBQTs7QUFHZDtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtFQUVuQjtJQUNFLE9BQU8sRUFBQTtFQUVUO0lBQ0UsNkJBQTZCLEVBQUE7RUFFL0I7SUFDRSw0QkFBNEIsRUFBQSxFQUM3Qjs7QUFJSDs7O0VBR0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHbkI7OztFQUdFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHWjs7O0VBR0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0IsRUFBQTs7QUFJeEI7OztFQUdFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFEM0I7SUFJSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3SkFBd0osRUFBQTs7QUFNNUo7O3lCQ2xDeUI7O0FEc0N6QjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBRWY7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsY0FBYztFQUVkLHFCQUFxQjtFQUVyQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFFRSwwQkFBMEI7RUFHMUIscUJBQXFCO0VBRXJCLHFDQUFxQyxFQUFBOztBQUV2QztFQUVFLGVBQWUsRUFBQTs7QUFHakI7OytCQ3JDK0I7O0FEd0MvQjtFQUNFLFNBQVM7RUFDVCxnQ0FBZ0MsRUFBQTs7QUFFbEM7OztFQUdFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFFakI7O0VBRUUsZ0NBQWdDLEVBQUE7O0FBSWxDO0VBQ0UsZ0RBQWdEO0VBR2hELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsK0NBQStDLEVBQUE7O0FBRWpEO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ3JvY2VyeS1zZWFyY2gvZ3JvY2VyeS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbiAgYmFja2dyb3VuZDogI2RhZGFkYTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjtcbiAgcGFkZGluZzogMmVtO1xufVxuXG4uYWNjb3JkaW9uIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLmFjY29yZGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAxLjVlbSAxLjVlbTtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAuOGVtO1xuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cblxuLmFjY29yZGlvbi1oZWFkZXI6aG92ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQ6ICNlZTA7XG59XG5cbi5ncm9jZXJ5LWlkIHtcbiAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XG59XG4uYWNjb3JkaW9uLWhlYWRlcjpob3ZlciAuc3R1ZC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLyogQWNjb3JkaW9uIEl0ZW0gKi9cbi5hY2NvcmRpb25fX2l0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlMDtcbn1cbi5hY2NvcmRpb25fX2l0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi8qIEhlYWRlciAqL1xuLmFjY29yZGlvbl9faXRlbS5hY3RpdmUgLmFjY29yZGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZWUwO1xufVxuXG5cbi5hY2NvcmRpb24tYm9keSB7XG4gIGNvbG9yOiAjM2YzYzNjO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFjY29yZGlvbi1ib2R5X19jb250ZW50cyB7XG4gIHBhZGRpbmc6IDEuNWVtIDEuNWVtO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cbiAgLmFjY29yZGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuXG4uZmxleC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5mbGV4LWl0ZW0tNzAge1xuICBmbGV4OiA0O1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG4uZmxleC1pdGVtLTMwIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmdyYXZpdHkge1xuICBtYXJnaW46IGF1dG8gMDtcbn1cblxuLmZsZXgtaXRlbTpmaXJzdC1jaGlsZCxcbi5mbGV4LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLmZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cbiAgLmZsZXgtaXRlbSB7XG4gICAgZmxleDogMTtcbiAgfVxuICAuZmxleC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkb3R0ZWQgI2NjYztcbiAgfVxuICAuZmxleC1pdGVtOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkICNjY2M7XG4gIH1cbn1cblxuXG4uZmxleC1pdGVtLTMwIGgyLFxuLmZsZXgtaXRlbS03MCBoMixcbi5mbGV4LWl0ZW0gaDIge1xuICBjb2xvcjogIzNkNTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tbGVmdDogMzZweDtcbn1cblxuLmZsZXgtaXRlbS0zMCBoNSxcbi5mbGV4LWl0ZW0tNzAgaDUsXG4uZmxleC1pdGVtIGg1IHtcbiAgY29sb3I6ICM4ODg4OThiMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGVmdDogMjBweDtcbn1cblxuLmZsZXgtaXRlbS0zMCBoNTpiZWZvcmUsXG4uZmxleC1pdGVtLTcwIGg1OmJlZm9yZSxcbi5mbGV4LWl0ZW0gaDU6YmVmb3JlIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5cbi5mbGV4LWl0ZW0tMzAgcCxcbi5mbGV4LWl0ZW0tNzAgcCxcbi5mbGV4LWl0ZW0gcCB7XG4gIGNvbG9yOiAjMjEwO1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tbGVmdDozNHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYXJnaW4tdG9wMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5cbi53ZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcblxuICAuYnRuLWNyZWF0ZS11c2VyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZzogMjBweCA3MHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMzdhYjc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICB9XG59XG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBGb3JtIEdyb3VwXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uYnRuLXByaW1hcnkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luOjEwcHggMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVke1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjYTFhMmEzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xufVxuLmZvcm0tZ3JvdXAgPiBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cywgLXdlYmtpdC10cmFuc2Zvcm0gMC40cztcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMykgdHJhbnNsYXRlWSg1cHgpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgdHJhbnNsYXRlWSg1cHgpO1xufVxuLmZvcm0tZ3JvdXAubm90LWVtcHR5ID4gbGFiZWwge1xuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRGb3JtIENvbnRyb2xzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiY2QwZTA7XG59XG4uZm9ybS1jb250cm9sLFxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLWNvbnRyb2w6Zm9jdXM6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLWNvbnRyb2w6Zm9jdXM6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwOGRmZjtcbn1cblxuXG4uYnRuIHtcbiAgYm94LXNoYWRvdzogLTNweCA0cHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xufVxuLmJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmJ0bi5mb2N1cywgLmJ0bjpmb2N1cywgLmJ0bjpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4iLCJib2R5IHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbiAgYmFja2dyb3VuZDogI2RhZGFkYTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjtcbiAgcGFkZGluZzogMmVtOyB9XG5cbi5hY2NvcmRpb24ge1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4OyB9XG5cbi5hY2NvcmRpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMS41ZW0gMS41ZW07XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cblxuLmFjY29yZGlvbi1oZWFkZXI6aG92ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQ6ICNlZTA7IH1cblxuLmdyb2NlcnktaWQge1xuICB0cmFuc2l0aW9uOiAuMnMgZWFzZTsgfVxuXG4uYWNjb3JkaW9uLWhlYWRlcjpob3ZlciAuc3R1ZC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDsgfVxuXG4vKiBBY2NvcmRpb24gSXRlbSAqL1xuLmFjY29yZGlvbl9faXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmUwOyB9XG5cbi5hY2NvcmRpb25fX2l0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuLyogSGVhZGVyICovXG4uYWNjb3JkaW9uX19pdGVtLmFjdGl2ZSAuYWNjb3JkaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNlZTA7IH1cblxuLmFjY29yZGlvbi1ib2R5IHtcbiAgY29sb3I6ICMzZjNjM2M7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmFjY29yZGlvbi1ib2R5X19jb250ZW50cyB7XG4gIHBhZGRpbmc6IDEuNWVtIDEuNWVtOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAxZW07IH1cbiAgLmFjY29yZGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7IH0gfVxuXG4uZmxleC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIG1hcmdpbjogMDsgfVxuXG4uZmxleC1pdGVtLTcwIHtcbiAgZmxleDogNDtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XG5cbi5mbGV4LWl0ZW0tMzAge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XG5cbi5mbGV4LWl0ZW0ge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cblxuLmdyYXZpdHkge1xuICBtYXJnaW46IGF1dG8gMDsgfVxuXG4uZmxleC1pdGVtOmZpcnN0LWNoaWxkLFxuLmZsZXgtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwOyB9XG4gIC5mbGV4LWl0ZW0ge1xuICAgIGZsZXg6IDE7IH1cbiAgLmZsZXgtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkICNjY2M7IH1cbiAgLmZsZXgtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCAjY2NjOyB9IH1cblxuLmZsZXgtaXRlbS0zMCBoMixcbi5mbGV4LWl0ZW0tNzAgaDIsXG4uZmxleC1pdGVtIGgyIHtcbiAgY29sb3I6ICMzZDU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7IH1cblxuLmZsZXgtaXRlbS0zMCBoNSxcbi5mbGV4LWl0ZW0tNzAgaDUsXG4uZmxleC1pdGVtIGg1IHtcbiAgY29sb3I6ICM4ODg4OThiMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGVmdDogMjBweDsgfVxuXG4uZmxleC1pdGVtLTMwIGg1OmJlZm9yZSxcbi5mbGV4LWl0ZW0tNzAgaDU6YmVmb3JlLFxuLmZsZXgtaXRlbSBoNTpiZWZvcmUge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLmZsZXgtaXRlbS0zMCBwLFxuLmZsZXgtaXRlbS03MCBwLFxuLmZsZXgtaXRlbSBwIHtcbiAgY29sb3I6ICMyMTA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNHB4O1xuICBwYWRkaW5nOiAwcHg7IH1cblxuLm1hcmdpbi10b3AyMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLndlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyB9XG4gIC53ZWxsIC5idG4tY3JlYXRlLXVzZXIge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDcwcHg7XG4gICAgYmFja2dyb3VuZDogIzMzN2FiNztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCI7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgRm9ybSBHcm91cFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5idG4tcHJpbWFyeSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBvdXRsaW5lOiBub25lOyB9XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4uZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ExYTJhMztcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTsgfVxuXG4uZm9ybS1ncm91cCA+IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cywgLXdlYmtpdC10cmFuc2Zvcm0gMC40cztcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMykgdHJhbnNsYXRlWSg1cHgpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgdHJhbnNsYXRlWSg1cHgpOyB9XG5cbi5mb3JtLWdyb3VwLm5vdC1lbXB0eSA+IGxhYmVsIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTsgfVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRGb3JtIENvbnRyb2xzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiY2QwZTA7IH1cblxuLmZvcm0tY29udHJvbCxcbi5mb3JtLWNvbnRyb2w6Zm9jdXMsXG4uZm9ybS1jb250cm9sOmZvY3VzOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDsgfVxuXG4uZm9ybS1jb250cm9sOmZvY3VzLFxuLmZvcm0tY29udHJvbDpmb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA4ZGZmOyB9XG5cbi5idG4ge1xuICBib3gtc2hhZG93OiAtM3B4IDRweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2U7IH1cblxuLmJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi5idG4uZm9jdXMsIC5idG46Zm9jdXMsIC5idG46aG92ZXIge1xuICBvdXRsaW5lOiBub25lOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/grocery-search/grocery-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/grocery-search/grocery-search.component.ts ***!
  \************************************************************/
/*! exports provided: GrocerySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrocerySearchComponent", function() { return GrocerySearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/appstate.service */ "./src/app/shared/services/appstate.service.ts");
/* harmony import */ var _shared_data_groceries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/data/groceries */ "./src/app/shared/data/groceries.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GrocerySearchComponent = /** @class */ (function () {
    function GrocerySearchComponent(http, stateService, formBuilder, router) {
        this.http = http;
        this.stateService = stateService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.lastSearch = '';
        this.groceries = _shared_data_groceries__WEBPACK_IMPORTED_MODULE_5__["groceries"];
        this.createForm();
    }
    GrocerySearchComponent.prototype.ngOnInit = function () {
        this.filteredFruits = this.groceries;
    };
    GrocerySearchComponent.prototype.onReviewsByEmployee = function (selected) {
        // set the grocery selection on state service
        this.stateService.setGroceryDetail(selected);
        // take the user to grocery detail route
        this.router.navigateByUrl('/grocery-detail');
    };
    GrocerySearchComponent.prototype.createForm = function () {
        var _this = this;
        var formFields = { criteria: '' };
        this.formContact = this.formBuilder.group(formFields);
        // observe changes on search input field
        this.formContact.controls['criteria']
            .valueChanges
            .subscribe(function (value) {
            var tempCriteria = value.trim().toLocaleLowerCase();
            _this.filterFruits(tempCriteria);
        });
    };
    GrocerySearchComponent.prototype.onSubmit = function () {
        // markFormTouched(this.formContact);
        var tempCriteria = this.formContact.value
            .criteria.trim().toLocaleLowerCase();
        this.filterFruits(tempCriteria);
    };
    GrocerySearchComponent.prototype.filterFruits = function (criteria) {
        if (this.lastSearch !== criteria) {
            var filtered = this.groceries.filter(function (el) {
                return el.name.toLocaleLowerCase().indexOf(criteria) > -1;
            });
            this.filteredFruits = filtered;
            this.lastSearch = criteria;
        }
    };
    GrocerySearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grocery-search',
            template: __webpack_require__(/*! ./grocery-search.component.html */ "./src/app/grocery-search/grocery-search.component.html"),
            styles: [__webpack_require__(/*! ./grocery-search.component.scss */ "./src/app/grocery-search/grocery-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_appstate_service__WEBPACK_IMPORTED_MODULE_4__["AppStateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GrocerySearchComponent);
    return GrocerySearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/data/groceries.ts":
/*!******************************************!*\
  !*** ./src/app/shared/data/groceries.ts ***!
  \******************************************/
/*! exports provided: groceries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groceries", function() { return groceries; });
var groceries = [
    {
        name: 'Apple',
        description: 'An apple is an edible fruit produced by an apple tree (Malus domestica). ' +
            'Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. ' +
            'The tree originated in Central Asia, where its wild ancestor, Malus sieversii, ' +
            'is still found today. Apples have been grown for thousands of years in Asia and ' +
            'Europe and were brought to North America by European colonists. Apples have religious and ' +
            'mythological significance in many cultures, including Norse, Greek, and European Christian tradition. ' +
            'Apple trees are large if grown from seed. Generally, apple cultivars are propagated ' +
            'by grafting onto rootstocks, which control the size of the resulting tree. ' +
            'There are more than 7,500 known cultivars of apples, resulting in a range of' +
            'desired characteristics. Different cultivars are bred for various tastes and use, ' +
            'including cooking, eating raw and cider production. Trees and fruit are prone ' +
            'to a number of fungal, bacterial and pest problems, which can be controlled by a ' +
            'number of organic and non-organic means. In 2010, the fruit\'s genome was sequenced ' +
            'as part of research on disease control and selective breeding in apple production. ' +
            'Worldwide production of apples in 2018 was 86 million tonnes, with China accounting ' +
            'for nearly half of the total.',
        additionalInformation: 'Nutritional value per 100g\nEnergy: 218 kJ (52 kcal)\n' +
            'Carbohydrates: 13.81g\nSugars: 10.39g\nDietary fiber: 2.4 g\nFat: 0.17 g\n' +
            'Protein: 0.26 g'
    },
    {
        name: 'Avocado',
        description: 'Ripe, soft fruit. Avoid fruit with dark sunken spots or bruises. Colour and texture depend on variety.',
        additionalInformation: 'A serving of 1/5 of a medium Haas avocado has 50 calories and ' +
            '4.5g of fat. The good news is that most of the fat is monounsaturated and ' +
            'polyunsaturated fat, which are both healthy fats.\nAvocados provide a source of fibre and folate.'
    },
    {
        name: 'Blackberries',
        description: 'Blackberries are available in July and August, though you will see ' +
            'imported varieties in supermarkets most of the year.',
        additionalInformation: 'Blackberries provide an excellent source of fibre and a good source of Vitamin C.'
    },
    {
        name: 'Cherimoya',
        description: 'Cherimoyas will ripen at room temperature for a few days until softened. ' +
            'They can then be tightly wrapped and refrigerated for up to 4 days.',
        additionalInformation: 'Very high in Vitamin C (60% Recommended Daily Intake per serving)\n' +
            'Very high in Vitamin B6 (37% Recommended Daily Intake per serving)' +
            '\nHigh in magnesium (20% Recommended Daily Intake per serving)\nSource of ' +
            'manganese (13% Recommended Daily Intake per serving)\nSource of copper ' +
            '(11% Recommended Daily Intake per serving)\nSource of iron (7% Recommended ' +
            'Daily Intake per serving)\nSource of phosphorus (7% Recommended Daily Intake per serving)\n' +
            'Source of zinc (6% Recommended Daily Intake per serving)'
    },
    {
        name: 'Cranberries',
        description: 'Cranberries are very versatile. They can be used in sauces, muffins, salads and desserts',
        additionalInformation: 'Nutritional value per 100g\nEnergy: 218 kJ (52 kcal)\n' +
            'Carbohydrates: 13.81g\nSugars: 10.39g\nDietary ' +
            'fiber: 2.4 g\nFat: 0.17 g\nProtein: 0.26 g'
    },
    {
        name: 'Elderberries',
        description: 'Best are firm berries with a deep colour. Avoid decaying, mushy or bruised fruits.',
        additionalInformation: '1 serving = 77 g (125 ml)\n\nHigh in Vitamin C ' +
            '(46% Recommended Daily Intake per serving)\nSource of Vitamin B6 ' +
            '(10% Recommended Daily Intake per serving)\nSource of iron ' +
            '(9% Recommended Daily Intake per serving)\nSource of potassium ' +
            '(214 mg per serving)\nHigh in fibre (5 g per serving)\nFat-free (0.4 g per serving)\n'
    },
    {
        name: 'Feijoa',
        description: 'Ripe feijoas normally last about 3 to 5 days. Feijoas peeled and cooked into a puree and frozen.',
        additionalInformation: '1 serving = 100 g (2 fruits)\n\nHigh in Vitamin C ' +
            '(34% Recommended Daily Intake per serving)\nSodium-free (3 mg per serving)'
    },
    {
        name: 'Grapefruit',
        description: 'Keep at cool room temperature for up to one week or refrigerate for up to one month.',
        images: [
            'https://picsum.photos/seed/gf1/150',
            'https://picsum.photos/seed/gf2/150',
            'https://picsum.photos/seed/gf3/150'
        ]
    },
    {
        name: 'Kumquat',
        description: 'Kumquats will keep for a few days at room temperature. You can refrigerate them in a plastic bag for up to a month.',
        images: [
            'https://picsum.photos/seed/kq1/150',
            'https://picsum.photos/seed/kq2/150',
            'https://picsum.photos/seed/kq3/150'
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/services/appstate.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/appstate.service.ts ***!
  \*****************************************************/
/*! exports provided: AppStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStateService", function() { return AppStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppStateService = /** @class */ (function () {
    function AppStateService(http) {
        this.http = http;
    }
    AppStateService.prototype.getGroceryDetail = function () {
        return this.groceryDetail;
    };
    AppStateService.prototype.setGroceryDetail = function (userSelection) {
        this.groceryDetail = userSelection;
    };
    AppStateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppStateService);
    return AppStateService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: TOKEN_NAME, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function() { return TOKEN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TOKEN_NAME = 'jwt_token';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
    }
    AuthService_1 = AuthService;
    AuthService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN_NAME, token);
    };
    /**
     * Call this and navigate to Login when the user wants to logout
     */
    AuthService.prototype.removeToken = function () {
        localStorage.removeItem(TOKEN_NAME);
    };
    AuthService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthService.prototype.isTokenExpired = function (token) {
        // use this to run locally w/out login apis
        /*if (!token) token = this.getToken();
        if (!token) return true;
        return false;*/
        if (!token) {
            token = this.getToken();
        }
        if (!token) {
            return true;
        }
        var date = this.getTokenExpirationDate(token);
        if (date === undefined) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthService.prototype.setUsername = function (username) {
        this.username = username;
    };
    AuthService.prototype.getUsername = function () {
        return this.username;
    };
    AuthService.prototype.setSessionUserId = function (id) {
        this.userId = id;
    };
    AuthService.prototype.getSessionUserId = function () {
        return this.userId;
    };
    /**
     * this should return a JWT token
     * upon username and secret is correct
     */
    AuthService.prototype.login = function (email, password) {
        return this.http
            .post(AuthService_1.API_BASE_PATH + "/login", { name: email, password: password });
    };
    var AuthService_1;
    AuthService.API_BASE_PATH = 'http://localhost:4201/api/v1';
    AuthService = AuthService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserService = /** @class */ (function () {
    function UserService() {
        /**
         * The functions of this class could be moved to Auth service
         */
        this.users = [];
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserService.prototype.findUser = function (searchId, searchPass) {
        var res = this.users.find(function (user) {
            return (user.id === searchId && user.password === searchPass);
        });
        return res ? true : false;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lupmyt1/Desktop/fruit-search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
