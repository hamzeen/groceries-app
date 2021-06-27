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

module.exports = "#btn-logout {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  margin-right: 15px;\n  margin-top: 10px;\n  background: #0077cc;\n  color: #fff;\n  padding: 8px 20px;\n  font-family: 'BeyondTheMountains';\n  letter-spacing: 2px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdXBteXQxL0Rlc2t0b3AvZ3JvY2VyaWVzLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnRuLWxvZ291dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogIzAwNzdjYztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBmb250LWZhbWlseTogJ0JleW9uZFRoZU1vdW50YWlucyc7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

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

module.exports = "\n\n<div class=\"breadcrumb\">\n  <span class=\"badge-breadcrumb\">&nbsp;you are here&nbsp;</span>\n  <li class=\"breadcrumb-item\"><a href='/grocery-search'>Home</a></li>\n  <li class=\"breadcrumb-item\">Grocery Detail</li>\n</div>\n\n<div id=\"timeline-containter\" class=\"row\">\n\n  <div class=\"col-12 col-lg-9\">\n    <h1>&nbsp;</h1>\n\n    <!-- unauthorised //-->\n    <div *ngIf=\"!groceryDetail\">\n\n      <p class=\"notification\">\n        You haven't selected any grocery to view its detail.\n        Please consider visiting our <a href='/'>landing page</a> to make selection.</p>\n    </div>\n\n\n    <!-- a user has been selected //-->\n    <div *ngIf=\"groceryDetail\">\n      <!-- {{groceryDetail | json}}<br/>//-->\n\n      <div class=\"column\">\n\n        <!-- Post-->\n        <div class=\"post-module hover\">\n          <!-- Thumbnail-->\n          <div class=\"thumbnail\">\n            <div class=\"date\">\n              <div class=\"site-title\">{{groceryDetail.name}}</div>\n            </div>\n          </div>\n          <!-- Post Content-->\n          <div class=\"post-content\">\n            <div *ngIf=\"groceryDetail.images\" class=\"category\">Photos</div>\n\n            <h1 class=\"title\">Overview</h1>\n            <p class=\"description\">{{groceryDetail.description}}</p>\n            <br/>\n\n            <!-- additional info in an optional field in the Grocery interface //-->\n            <div *ngIf=\"groceryDetail.additionalInformation\">\n              <h1 class=\"title\">Nutrition Facts</h1>\n              <h2 class=\"notification sub_title\">{{groceryDetail.additionalInformation}}</h2>\n            </div>\n\n            <!-- images are also an optional property in our Grocery interface //-->\n            <div *ngIf=\"groceryDetail.images\">\n\n              <h1 class=\"title\">Photo Gallery</h1>\n              <div class=\"gallery\">\n                <img class=\"photo-item\"\n                     src=\"{{url}}\"\n                     *ngFor=\"let url of groceryDetail.images; let idx = index\">\n              </div>\n            </div><!-- end of grocery detail gallery //-->\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col-12 col-lg-3\">\n    <div class=\"sidebar\">\n      <div class=\"about-me\">\n        <h2>About</h2>\n\n        <p>\n          Our company is a wholesale distributor of organic produce located in\n          Hoofddorp, The Netherlands</p>\n      </div>\n\n      <div class=\"recent-posts\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/grocery-detail/grocery-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/grocery-detail/grocery-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-module {\n  position: relative;\n  z-index: 1;\n  display: block;\n  background: #FFFFFF;\n  min-width: 270px;\n  min-height: 470px;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);\n  transition: all 0.3s linear 0s; }\n\n.post-module:hover, .hover {\n  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.3); }\n\n.post-module:hover .thumbnail img,\n.hover .thumbnail img {\n  transform: scale(1.1);\n  opacity: 0.6; }\n\n.post-module .thumbnail {\n  background: url('grocery_detail.jpeg') #22882f88;\n  background-size: cover;\n  min-height: 380px;\n  overflow: hidden; }\n\n.post-module .thumbnail .date {\n  position: absolute;\n  top: 20px;\n  left: 40px;\n  z-index: 1;\n  padding: 12.5px 12px;\n  color: #FFFFFF;\n  font-weight: 700;\n  text-align: center;\n  -webkti-box-sizing: border-box;\n  box-sizing: border-box;\n  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 6px 1px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.15); }\n\n.post-module .post-content {\n  bottom: 0;\n  background: #FFFFFF;\n  width: 100%;\n  padding: 30px;\n  -webkti-box-sizing: border-box;\n  box-sizing: border-box;\n  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s; }\n\n.post-module .post-content .category {\n  position: absolute;\n  top: 275px;\n  right: 0;\n  background: #e74c3c;\n  padding: 10px 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase; }\n\n.post-module .post-content .title {\n  margin: 0;\n  padding: 0 0 10px;\n  color: #333333;\n  font-family: 'BeyondTheMountains';\n  font-size: 26px;\n  font-weight: 700; }\n\n.post-module .post-content .sub_title {\n  margin: 0;\n  padding: 0 0 20px;\n  font-weight: 400;\n  white-space: pre-line; }\n\n.post-module .post-content .description {\n  display: none;\n  color: #666666;\n  font-size: 14px;\n  line-height: 1.8em; }\n\n.hover .post-content .description {\n  display: block !important;\n  height: auto !important;\n  opacity: 1 !important; }\n\n.container {\n  max-width: 800px;\n  min-width: 640px;\n  margin: 0 auto; }\n\n.container:before,\n.container:after {\n  content: '';\n  display: block;\n  clear: both; }\n\n.container .column {\n  width: 50%;\n  padding: 0 25px;\n  -webkti-box-sizing: border-box;\n  box-sizing: border-box;\n  float: left; }\n\n.container .info {\n  width: 300px;\n  margin: 50px auto;\n  text-align: center; }\n\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 24px;\n  font-weight: bold;\n  color: #333333; }\n\n.container .info span {\n  color: #666666;\n  font-size: 12px; }\n\n.container .info span a {\n  color: #000000;\n  text-decoration: none; }\n\n.container .info span .fa {\n  color: #e74c3c; }\n\n.gallery {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  transition: all .1s; }\n\n.photo-item {\n  flex: 0 0 25%;\n  padding-right: 10px;\n  transition: all .1s; }\n\n@media screen and (max-width: 439px) {\n  .photo-item {\n    flex: 0 0 100%;\n    margin: 0 auto;\n    padding-top: 10px; } }\n\n@media screen and (min-width: 440px) and (max-width: 767px) {\n  .photo-item {\n    flex: 0 0 50%;\n    padding-top: 10px; } }\n\n@media screen and (min-width: 768px) and (max-width: 900px) {\n  .photo-item {\n    flex: 0 0 33.333333%;\n    padding-top: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdXBteXQxL0Rlc2t0b3AvZ3JvY2VyaWVzLWFwcC9zcmMvYXBwL2dyb2NlcnktZGV0YWlsL2dyb2NlcnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFHakIsK0NBQStDO0VBSy9DLDhCQUE4QixFQUFBOztBQUdoQztFQUdFLCtDQUErQyxFQUFBOztBQUVqRDs7RUFJRSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZ0RBQThEO0VBQzlELHNCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFFOUIsc0JBQXNCO0VBQ3RCLHlHQUcyQixFQUFBOztBQUk3QjtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFFOUIsc0JBQXNCO0VBS3RCLDREQUE0RCxFQUFBOztBQUU5RDtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUVoQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUVoQjs7RUFFRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsOEJBQThCO0VBRTlCLHNCQUFzQjtFQUN0QixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsY0FBYyxFQUFBOztBQUloQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQixFQUFBLEVBQ2xCOztBQUdIO0VBQ0U7SUFDRSxhQUFhO0lBRWIsaUJBQWlCLEVBQUEsRUFDbEI7O0FBR0g7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixpQkFBaUIsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2dyb2NlcnktZGV0YWlsL2dyb2NlcnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucG9zdC1tb2R1bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBtaW4td2lkdGg6IDI3MHB4O1xuICBtaW4taGVpZ2h0OiA0NzBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG59XG5cbi5wb3N0LW1vZHVsZTpob3ZlciwgLmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4ucG9zdC1tb2R1bGU6aG92ZXIgLnRodW1ibmFpbCBpbWcsXG4uaG92ZXIgLnRodW1ibmFpbCBpbWcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgb3BhY2l0eTogMC42O1xufVxuLnBvc3QtbW9kdWxlIC50aHVtYm5haWwge1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvZ3JvY2VyeV9kZXRhaWwuanBlZycpICMyMjg4MmY4ODtcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICBtaW4taGVpZ2h0OiAzODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wb3N0LW1vZHVsZSAudGh1bWJuYWlsIC5kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDQwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDEyLjVweCAxMnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via3RpLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2NjYyxcbiAgMCAycHggMCAjYzljOWM5LFxuICAwIDZweCAxcHggcmdiYSgwLDAsMCwuMSksXG4gIDAgMjBweCAyMHB4IHJnYmEoMCwwLDAsLjE1KTtcbn1cblxuXG4ucG9zdC1tb2R1bGUgLnBvc3QtY29udGVudCB7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIC13ZWJrdGktYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjM3LCAwLjc1LCAwLjYxLCAxLjA1KSAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4zNywgMC43NSwgMC42MSwgMS4wNSkgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4zNywgMC43NSwgMC42MSwgMS4wNSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjM3LCAwLjc1LCAwLjYxLCAxLjA1KSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzcsIDAuNzUsIDAuNjEsIDEuMDUpIDBzO1xufVxuLnBvc3QtbW9kdWxlIC5wb3N0LWNvbnRlbnQgLmNhdGVnb3J5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI3NXB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI2U3NGMzYztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnBvc3QtbW9kdWxlIC5wb3N0LWNvbnRlbnQgLnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMTBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtZmFtaWx5OiAnQmV5b25kVGhlTW91bnRhaW5zJztcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnBvc3QtbW9kdWxlIC5wb3N0LWNvbnRlbnQgLnN1Yl90aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuLnBvc3QtbW9kdWxlIC5wb3N0LWNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xufVxuXG4uaG92ZXIgLnBvc3QtY29udGVudCAuZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1pbi13aWR0aDogNjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lcjpiZWZvcmUsXG4uY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cbi5jb250YWluZXIgLmNvbHVtbiB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgLXdlYmt0aS1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29udGFpbmVyIC5pbmZvIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5mbyBoMSB7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIHtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmluZm8gc3BhbiBhIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250YWluZXIgLmluZm8gc3BhbiAuZmEge1xuICBjb2xvcjogI2U3NGMzYztcbn1cblxuXG4uZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xufVxuXG4ucGhvdG8taXRlbSB7XG4gIGZsZXg6IDAgMCAyNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMXM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzOXB4KSB7XG4gIC5waG90by1pdGVtIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5waG90by1pdGVtIHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucGhvdG8taXRlbSB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMyU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbn1cblxuXG4iXX0= */"

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

module.exports = "\n  <div class=\"breadcrumb\">\n    <span class=\"badge-breadcrumb\">&nbsp;you are here&nbsp;</span>\n    <li class=\"breadcrumb-item\">Home</li>\n  </div>\n\n  <!--<h2 class=\"site-title margin-top-20\">Fruits Lookup</h2>//-->\n\n\n  <div>\n\n    <!-- Form: search fruit(s) //-->\n    <form [formGroup]=\"formSearch\" (ngSubmit)=\"onSubmit()\" class=\"well\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-9\">\n          <input type=\"text\" formControlName=\"filter\" class=\"form-control\" id=\"filter\" autocomplete=\"on\"\n             placeholder=\"search fruit (ex: 'apple')\">\n        </div>\n        <div class=\"form-group col-md-3\">\n          <button class=\"btn btn-primary btn-create-user\" type=\"submit\">Search</button>\n        </div>\n      </div>\n    </form>\n\n    <br/><br/>\n\n  </div>\n\n\n\n  <div class=\"row\">\n    <div class=\"col-12 col-md-12 col-xl-12\">\n\n      <h5>Grocery List</h5>\n\n      <div *ngIf=\"filteredFruits.length > 0\" class=\"accordion\">\n        <div *ngFor=\"let grocery of filteredFruits; let i = index\" class=\"accordion__item\">\n          <div style=\"display: flex\" class=\"accordion-header \">\n            <div class=\"grocery-id\" style=\"flex: 2;\"># {{i+1}}</div>\n            <div style=\"flex: 5;\">{{grocery.name}}</div>\n            <div style=\"flex: 2;\" (click)=\"onClickDetail(grocery)\">view details</div>\n          </div>\n        </div><!-- end of accordion item -->\n      </div><!-- end of accordion -->\n\n      <div *ngIf=\"!filteredFruits || filteredFruits.length <= 0\" class=\"accordion\">\n        <p class=\"notification\">\n          Oops, there weren't any grocery to match your search criteria.\n          Perhaps you can try searching for a different fruit..\n        </p>\n      </div><!-- end of accordion -->\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/grocery-search/grocery-search.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/grocery-search/grocery-search.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-size: 62.5%;\n  background: #dadada;\n  font-family: 'Open Sans', sans-serif;\n  line-height: 2;\n  padding: 2em; }\n\n.accordion {\n  font-size: 19px;\n  margin: 0 auto;\n  background: #f8f8f8; }\n\n.accordion-header {\n  padding: 1.5em 1.5em;\n  color: #000;\n  cursor: pointer;\n  font-size: .8em;\n  letter-spacing: .1em;\n  transition: all .3s; }\n\n.accordion-header:hover {\n  position: relative;\n  z-index: 5;\n  background: #ee0; }\n\n.grocery-id {\n  transition: .2s ease; }\n\n.accordion-header:hover .stud-name {\n  margin-left: 8px; }\n\n/* Accordion Item */\n\n.accordion__item {\n  border-bottom: 1px solid #efefe0; }\n\n.accordion__item:last-child {\n  border-bottom: none; }\n\n/* Header */\n\n.accordion__item.active .accordion-header {\n  background: #ee0; }\n\n.accordion-body {\n  color: #3f3c3c;\n  display: none; }\n\n.accordion-body__contents {\n  padding: 1.5em 1.5em; }\n\n@media screen and (max-width: 1000px) {\n  body {\n    padding: 1em; }\n  .accordion {\n    width: 100%; } }\n\n.flex-container {\n  padding: 15px 0;\n  margin: 0; }\n\n.flex-item-70 {\n  flex: 4;\n  padding: 5px 5px 5px 10px;\n  text-align: left;\n  font-family: 'Open Sans', sans-serif; }\n\n.flex-item-30 {\n  flex: 1;\n  padding: 5px 5px 5px 10px;\n  text-align: right;\n  font-family: 'Open Sans', sans-serif; }\n\n.flex-item {\n  flex-basis: 100%;\n  padding: 5px 5px 5px 10px;\n  text-align: left;\n  font-family: 'Open Sans', sans-serif; }\n\n.gravity {\n  margin: auto 0; }\n\n.flex-item:first-child,\n.flex-item:last-child {\n  border: none; }\n\n@media screen and (min-width: 640px) {\n  .flex-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap; }\n  .flex-item {\n    flex: 1; }\n  .flex-item:first-child {\n    border-right: 1px dotted #ccc; }\n  .flex-item:last-child {\n    border-left: 1px dotted #ccc; } }\n\n.flex-item-30 h2,\n.flex-item-70 h2,\n.flex-item h2 {\n  color: #3d5;\n  font-size: 25px;\n  font-weight: 400;\n  margin: 0px;\n  padding: 0px;\n  margin-left: 36px; }\n\n.flex-item-30 h5,\n.flex-item-70 h5,\n.flex-item h5 {\n  color: #888898b0;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 21px;\n  margin: 0px;\n  padding: 0px;\n  left: 20px; }\n\n.flex-item-30 h5:before,\n.flex-item-70 h5:before,\n.flex-item h5:before {\n  padding-right: 10px;\n  font-size: 24px;\n  vertical-align: middle; }\n\n.flex-item-30 p,\n.flex-item-70 p,\n.flex-item p {\n  color: #210;\n  font-size: 19px;\n  margin: 0px;\n  margin-left: 34px;\n  padding: 0px; }\n\n.margin-top20 {\n  margin-top: 20px; }\n\n.well {\n  background-color: #FAFAFA; }\n\n.well .btn-create-user {\n    margin-top: 0px;\n    padding: 20px 70px;\n    background: #337ab7;\n    color: #fff;\n    font-size: 19px;\n    font-weight: 200;\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"; }\n\n/* -----------------------\n  Form Group\n----------------------- */\n\n.btn-primary {\n  padding-top: 10px;\n  margin: 10px 0px;\n  outline: none;\n  outline: none; }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red; }\n\n.form-control {\n  border-radius: 0;\n  box-shadow: none; }\n\n.form-control:focus {\n  box-shadow: none; }\n\n.form-group {\n  position: relative;\n  margin-bottom: 25px; }\n\n.form-group > label {\n  text-transform: uppercase;\n  font-size: 10px;\n  color: #a1a2a3;\n  transform-origin: 0 0;\n  transform: scale(1.4);\n  pointer-events: none;\n  position: relative;\n  z-index: 5; }\n\n.form-group > input {\n  width: 100%; }\n\n.form-group > label {\n  transition: transform 0.4s;\n  transform-origin: 0 0;\n  transform: scale(1.3) translateY(5px); }\n\n.form-group.not-empty > label {\n  transform: none; }\n\n/*------------------------------\n\tForm Controls\n------------------------------*/\n\n.form-control {\n  border: 0;\n  border-bottom: 1px solid #bcd0e0; }\n\n.form-control,\n.form-control:focus,\n.form-control:focus:hover {\n  color: #000;\n  background: none;\n  outline: none;\n  font-size: 24px; }\n\n.form-control:focus,\n.form-control:focus:hover {\n  border-bottom: 1px solid #008dff; }\n\n.btn {\n  box-shadow: -3px 4px 2px -1px rgba(0, 0, 0, 0.3);\n  transition: all .1s ease;\n  -ms-transition: all .1s ease;\n  -o-transition: all .1s ease; }\n\n.btn:hover {\n  box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1); }\n\n.btn.focus, .btn:focus, .btn:hover {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdXBteXQxL0Rlc2t0b3AvZ3JvY2VyaWVzLWFwcC9zcmMvYXBwL2dyb2Nlcnktc2VhcmNoL2dyb2Nlcnktc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ncm9jZXJ5LXNlYXJjaC9ncm9jZXJ5LXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEIsbUJBQUE7O0FBQ0E7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFFbEM7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckIsV0FBQTs7QUFDQTtFQUNFLGdCQUFnQixFQUFBOztBQUlsQjtFQUNFLGNBQWM7RUFDZCxhQUFhLEVBQUE7O0FBRWY7RUFDRSxvQkFBb0IsRUFBQTs7QUFJdEI7RUFDRTtJQUNFLFlBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVyxFQUFBLEVBQ1o7O0FBSUg7RUFDRSxlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUVYO0VBQ0UsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsb0NBQW9DLEVBQUE7O0FBRXRDO0VBQ0UsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7RUFFRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7RUFFbkI7SUFDRSxPQUFPLEVBQUE7RUFFVDtJQUNFLDZCQUE2QixFQUFBO0VBRS9CO0lBQ0UsNEJBQTRCLEVBQUEsRUFDN0I7O0FBSUg7OztFQUdFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25COzs7RUFHRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBR1o7OztFQUdFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysc0JBQXNCLEVBQUE7O0FBSXhCOzs7RUFHRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRDNCO0lBSUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0pBQXdKLEVBQUE7O0FBTTVKOzt5QkNsQ3lCOztBRHNDekI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYSxFQUFBOztBQUVmO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7RUFFZCxxQkFBcUI7RUFFckIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUVaO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBRUUsMEJBQTBCO0VBRzFCLHFCQUFxQjtFQUVyQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFFRSxlQUFlLEVBQUE7O0FBR2pCOzsrQkNyQytCOztBRHdDL0I7RUFDRSxTQUFTO0VBQ1QsZ0NBQWdDLEVBQUE7O0FBRWxDOzs7RUFHRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBRWpCOztFQUVFLGdDQUFnQyxFQUFBOztBQUlsQztFQUNFLGdEQUFnRDtFQUdoRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLCtDQUErQyxFQUFBOztBQUVqRDtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dyb2Nlcnktc2VhcmNoL2dyb2Nlcnktc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHBhZGRpbmc6IDJlbTtcbn1cblxuLmFjY29yZGlvbiB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG5cbi5hY2NvcmRpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMS41ZW0gMS41ZW07XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG5cbi5hY2NvcmRpb24taGVhZGVyOmhvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kOiAjZWUwO1xufVxuXG4uZ3JvY2VyeS1pZCB7XG4gIHRyYW5zaXRpb246IC4ycyBlYXNlO1xufVxuLmFjY29yZGlvbi1oZWFkZXI6aG92ZXIgLnN0dWQtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi8qIEFjY29yZGlvbiBJdGVtICovXG4uYWNjb3JkaW9uX19pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZTA7XG59XG4uYWNjb3JkaW9uX19pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4vKiBIZWFkZXIgKi9cbi5hY2NvcmRpb25fX2l0ZW0uYWN0aXZlIC5hY2NvcmRpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2VlMDtcbn1cblxuXG4uYWNjb3JkaW9uLWJvZHkge1xuICBjb2xvcjogIzNmM2MzYztcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hY2NvcmRpb24tYm9keV9fY29udGVudHMge1xuICBwYWRkaW5nOiAxLjVlbSAxLjVlbTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG4gIC5hY2NvcmRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBtYXJnaW46IDA7XG59XG4uZmxleC1pdGVtLTcwIHtcbiAgZmxleDogNDtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuLmZsZXgtaXRlbS0zMCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5ncmF2aXR5IHtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbi5mbGV4LWl0ZW06Zmlyc3QtY2hpbGQsXG4uZmxleC1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIC5mbGV4LWl0ZW0ge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgLmZsZXgtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkICNjY2M7XG4gIH1cbiAgLmZsZXgtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCAjY2NjO1xuICB9XG59XG5cblxuLmZsZXgtaXRlbS0zMCBoMixcbi5mbGV4LWl0ZW0tNzAgaDIsXG4uZmxleC1pdGVtIGgyIHtcbiAgY29sb3I6ICMzZDU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG5cbi5mbGV4LWl0ZW0tMzAgaDUsXG4uZmxleC1pdGVtLTcwIGg1LFxuLmZsZXgtaXRlbSBoNSB7XG4gIGNvbG9yOiAjODg4ODk4YjA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbi5mbGV4LWl0ZW0tMzAgaDU6YmVmb3JlLFxuLmZsZXgtaXRlbS03MCBoNTpiZWZvcmUsXG4uZmxleC1pdGVtIGg1OmJlZm9yZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuXG4uZmxleC1pdGVtLTMwIHAsXG4uZmxleC1pdGVtLTcwIHAsXG4uZmxleC1pdGVtIHAge1xuICBjb2xvcjogIzIxMDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6MzRweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubWFyZ2luLXRvcDIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG4ud2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG5cbiAgLmJ0bi1jcmVhdGUtdXNlciB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggNzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzM3YWI3O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgfVxufVxuXG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgRm9ybSBHcm91cFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmJ0bi1wcmltYXJ5IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbjoxMHB4IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmZvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ExYTJhMztcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTtcbn1cbi5mb3JtLWdyb3VwID4gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjRzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMsIC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHRyYW5zbGF0ZVkoNXB4KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHRyYW5zbGF0ZVkoNXB4KTtcbn1cbi5mb3JtLWdyb3VwLm5vdC1lbXB0eSA+IGxhYmVsIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Rm9ybSBDb250cm9sc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmNkMGUwO1xufVxuLmZvcm0tY29udHJvbCxcbi5mb3JtLWNvbnRyb2w6Zm9jdXMsXG4uZm9ybS1jb250cm9sOmZvY3VzOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsXG4uZm9ybS1jb250cm9sOmZvY3VzOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDhkZmY7XG59XG5cblxuLmJ0biB7XG4gIGJveC1zaGFkb3c6IC0zcHggNHB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbn1cbi5idG46aG92ZXIge1xuICBib3gtc2hhZG93OiAtMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5idG4uZm9jdXMsIC5idG46Zm9jdXMsIC5idG46aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xufVxuIiwiYm9keSB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHBhZGRpbmc6IDJlbTsgfVxuXG4uYWNjb3JkaW9uIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODsgfVxuXG4uYWNjb3JkaW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEuNWVtIDEuNWVtO1xuICBjb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IC44ZW07XG4gIGxldHRlci1zcGFjaW5nOiAuMWVtO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XG5cbi5hY2NvcmRpb24taGVhZGVyOmhvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kOiAjZWUwOyB9XG5cbi5ncm9jZXJ5LWlkIHtcbiAgdHJhbnNpdGlvbjogLjJzIGVhc2U7IH1cblxuLmFjY29yZGlvbi1oZWFkZXI6aG92ZXIgLnN0dWQtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7IH1cblxuLyogQWNjb3JkaW9uIEl0ZW0gKi9cbi5hY2NvcmRpb25fX2l0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlMDsgfVxuXG4uYWNjb3JkaW9uX19pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lOyB9XG5cbi8qIEhlYWRlciAqL1xuLmFjY29yZGlvbl9faXRlbS5hY3RpdmUgLmFjY29yZGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZWUwOyB9XG5cbi5hY2NvcmRpb24tYm9keSB7XG4gIGNvbG9yOiAjM2YzYzNjO1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5hY2NvcmRpb24tYm9keV9fY29udGVudHMge1xuICBwYWRkaW5nOiAxLjVlbSAxLjVlbTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZzogMWVtOyB9XG4gIC5hY2NvcmRpb24ge1xuICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBtYXJnaW46IDA7IH1cblxuLmZsZXgtaXRlbS03MCB7XG4gIGZsZXg6IDQ7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxuXG4uZmxleC1pdGVtLTMwIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxuXG4uZmxleC1pdGVtIHtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XG5cbi5ncmF2aXR5IHtcbiAgbWFyZ2luOiBhdXRvIDA7IH1cblxuLmZsZXgtaXRlbTpmaXJzdC1jaGlsZCxcbi5mbGV4LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAuZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDsgfVxuICAuZmxleC1pdGVtIHtcbiAgICBmbGV4OiAxOyB9XG4gIC5mbGV4LWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IGRvdHRlZCAjY2NjOyB9XG4gIC5mbGV4LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgI2NjYzsgfSB9XG5cbi5mbGV4LWl0ZW0tMzAgaDIsXG4uZmxleC1pdGVtLTcwIGgyLFxuLmZsZXgtaXRlbSBoMiB7XG4gIGNvbG9yOiAjM2Q1O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4OyB9XG5cbi5mbGV4LWl0ZW0tMzAgaDUsXG4uZmxleC1pdGVtLTcwIGg1LFxuLmZsZXgtaXRlbSBoNSB7XG4gIGNvbG9yOiAjODg4ODk4YjA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxlZnQ6IDIwcHg7IH1cblxuLmZsZXgtaXRlbS0zMCBoNTpiZWZvcmUsXG4uZmxleC1pdGVtLTcwIGg1OmJlZm9yZSxcbi5mbGV4LWl0ZW0gaDU6YmVmb3JlIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi5mbGV4LWl0ZW0tMzAgcCxcbi5mbGV4LWl0ZW0tNzAgcCxcbi5mbGV4LWl0ZW0gcCB7XG4gIGNvbG9yOiAjMjEwO1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tbGVmdDogMzRweDtcbiAgcGFkZGluZzogMHB4OyB9XG5cbi5tYXJnaW4tdG9wMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbi53ZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsgfVxuICAud2VsbCAuYnRuLWNyZWF0ZS11c2VyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZzogMjBweCA3MHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMzdhYjc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEZvcm0gR3JvdXBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uYnRuLXByaW1hcnkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLmZvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cblxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNhMWEyYTM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7IH1cblxuLmZvcm0tZ3JvdXAgPiBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjRzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMsIC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHRyYW5zbGF0ZVkoNXB4KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHRyYW5zbGF0ZVkoNXB4KTsgfVxuXG4uZm9ybS1ncm91cC5ub3QtZW1wdHkgPiBsYWJlbCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICB0cmFuc2Zvcm06IG5vbmU7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Rm9ybSBDb250cm9sc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmNkMGUwOyB9XG5cbi5mb3JtLWNvbnRyb2wsXG4uZm9ybS1jb250cm9sOmZvY3VzLFxuLmZvcm0tY29udHJvbDpmb2N1czpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7IH1cblxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLWNvbnRyb2w6Zm9jdXM6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwOGRmZjsgfVxuXG4uYnRuIHtcbiAgYm94LXNoYWRvdzogLTNweCA0cHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlOyB9XG5cbi5idG46aG92ZXIge1xuICBib3gtc2hhZG93OiAtMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG4uYnRuLmZvY3VzLCAuYnRuOmZvY3VzLCAuYnRuOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTsgfVxuIl19 */"

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
    function GrocerySearchComponent(http, stateService, formBuilder, router, activatedRoute) {
        this.http = http;
        this.stateService = stateService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.lastSearch = '';
        this.groceries = _shared_data_groceries__WEBPACK_IMPORTED_MODULE_5__["groceries"];
        this.createForm();
    }
    GrocerySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredFruits = this.groceries;
        this.activatedRoute.queryParams.subscribe(function (params) {
            var filter = params['filter'];
            if (filter && filter !== '') {
                // perform search ..
                _this.formSearch.controls['filter'].setValue(filter);
                _this.filterFruits(filter);
            }
        });
    };
    GrocerySearchComponent.prototype.onClickDetail = function (selected) {
        // set the grocery selection on state service
        this.stateService.setGroceryDetail(selected);
        // take the user to grocery detail route
        this.router.navigateByUrl('/grocery-detail');
    };
    GrocerySearchComponent.prototype.createForm = function () {
        var _this = this;
        var formFields = { filter: '' };
        this.formSearch = this.formBuilder.group(formFields);
        // observe changes on search input field
        this.formSearch.controls['filter']
            .valueChanges
            .subscribe(function (value) {
            var tempFilter = value.trim().toLocaleLowerCase();
            _this.filterFruits(tempFilter);
            // update query param so that the search term can be preserved
            _this.router.navigate([], { queryParams: { filter: tempFilter } });
        });
    };
    GrocerySearchComponent.prototype.onSubmit = function () {
        // markFormTouched(this.formContact);
        var tempFilter = this.formSearch.value
            .filter.trim().toLocaleLowerCase();
        this.filterFruits(tempFilter);
    };
    GrocerySearchComponent.prototype.filterFruits = function (filter) {
        if (this.lastSearch !== filter) {
            this.filteredFruits = this.groceries.filter(function (el) {
                return el.name.toLocaleLowerCase().indexOf(filter) > -1;
            });
            this.lastSearch = filter;
            return true;
        }
        return false;
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = __webpack_require__(/*! /Users/lupmyt1/Desktop/groceries-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map