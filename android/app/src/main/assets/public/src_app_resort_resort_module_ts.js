(self["webpackChunkts_sservice"] = self["webpackChunkts_sservice"] || []).push([["src_app_resort_resort_module_ts"],{

/***/ 1273:
/*!*************************************************!*\
  !*** ./src/app/resort/resort-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResortPageRoutingModule": () => (/* binding */ ResortPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _resort_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resort.page */ 8181);




const routes = [
    {
        path: '',
        component: _resort_page__WEBPACK_IMPORTED_MODULE_0__.ResortPage
    }
];
let ResortPageRoutingModule = class ResortPageRoutingModule {
};
ResortPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResortPageRoutingModule);



/***/ }),

/***/ 1138:
/*!*****************************************!*\
  !*** ./src/app/resort/resort.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResortPageModule": () => (/* binding */ ResortPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _resort_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resort-routing.module */ 1273);
/* harmony import */ var _resort_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resort.page */ 8181);







let ResortPageModule = class ResortPageModule {
};
ResortPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _resort_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResortPageRoutingModule
        ],
        declarations: [_resort_page__WEBPACK_IMPORTED_MODULE_1__.ResortPage]
    })
], ResortPageModule);



/***/ }),

/***/ 8181:
/*!***************************************!*\
  !*** ./src/app/resort/resort.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResortPage": () => (/* binding */ ResortPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_resort_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resort.page.html */ 8588);
/* harmony import */ var _resort_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resort.page.scss */ 6578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _resorts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resorts.service */ 7890);






let ResortPage = class ResortPage {
    constructor(ResortService, activatedRoute) {
        this.ResortService = ResortService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        let resortId = this.activatedRoute.snapshot.paramMap.get("id");
        this.Resorts = this.ResortService.getResort(parseInt(resortId));
    }
};
ResortPage.ctorParameters = () => [
    { type: _resorts_service__WEBPACK_IMPORTED_MODULE_2__.ResortsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ResortPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-resort',
        template: _raw_loader_resort_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resort_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResortPage);



/***/ }),

/***/ 6578:
/*!*****************************************!*\
  !*** ./src/app/resort/resort.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-img {\n  max-height: 60vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc29ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6InJlc29ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW1ne1xuICAgIG1heC1oZWlnaHQ6IDYwdnc7XG59Il19 */");

/***/ }),

/***/ 8588:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resort/resort.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n     <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"tabs/resorts\"></ion-back-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title>{{Resorts.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img  src=\"assets/images/Photos/{{Resorts.cover}}.jpg\"></ion-img>  \n  <ion-card>\n    \n  <ion-item lines= \"none\">\n    <ion-card-subtitle color=\"primary\">Weather</ion-card-subtitle>\n   </ion-item> \n   <ion-item lines= \"none\">\n     <ion-grid>\n      <ion-row>\n        <ion-col>\n      <ion-icon size= \"large\" name=\"partly-sunny-outline\"></ion-icon>\n    </ion-col>\n    <ion-col>\n     <ion-text>20C</ion-text>\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n   </ion-item>\n \n</ion-card>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_resort_resort_module_ts.js.map