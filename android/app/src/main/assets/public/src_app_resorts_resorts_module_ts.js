(self["webpackChunkts_sservice"] = self["webpackChunkts_sservice"] || []).push([["src_app_resorts_resorts_module_ts"],{

/***/ 3112:
/*!***************************************************!*\
  !*** ./src/app/resorts/resorts-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResortsPageRoutingModule": () => (/* binding */ ResortsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _resorts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resorts.page */ 6085);




const routes = [
    {
        path: '',
        component: _resorts_page__WEBPACK_IMPORTED_MODULE_0__.ResortsPage
    }
];
let ResortsPageRoutingModule = class ResortsPageRoutingModule {
};
ResortsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResortsPageRoutingModule);



/***/ }),

/***/ 6426:
/*!*******************************************!*\
  !*** ./src/app/resorts/resorts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResortsPageModule": () => (/* binding */ ResortsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _resorts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resorts-routing.module */ 3112);
/* harmony import */ var _resorts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resorts.page */ 6085);







let ResortsPageModule = class ResortsPageModule {
};
ResortsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _resorts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResortsPageRoutingModule
        ],
        declarations: [_resorts_page__WEBPACK_IMPORTED_MODULE_1__.ResortsPage]
    })
], ResortsPageModule);



/***/ }),

/***/ 6085:
/*!*****************************************!*\
  !*** ./src/app/resorts/resorts.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResortsPage": () => (/* binding */ ResortsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_resorts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resorts.page.html */ 7202);
/* harmony import */ var _resorts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resorts.page.scss */ 481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_resorts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/resorts.service */ 7881);





let ResortsPage = class ResortsPage {
    constructor(ResortsService) {
        this.ResortsService = ResortsService;
    }
    ngOnInit() {
        this.Resorts = this.ResortsService.getResorts();
    }
};
ResortsPage.ctorParameters = () => [
    { type: _services_resorts_service__WEBPACK_IMPORTED_MODULE_2__.ResortsService }
];
ResortsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-resorts',
        template: _raw_loader_resorts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resorts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResortsPage);



/***/ }),

/***/ 481:
/*!*******************************************!*\
  !*** ./src/app/resorts/resorts.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-img {\n  max-width: 30vw;\n  height: 15vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc29ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJyZXNvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWcge1xuICAgIG1heC13aWR0aDogMzB2dztcbiAgICBoZWlnaHQ6IDE1dnc7XG59Il19 */");

/***/ }),

/***/ 7202:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resorts/resorts.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Resorts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-cards *ngFor=\"let resorts of Resorts\">\n  <ion-card>\n      <ion-item  lines=\"none\" [routerLink]=\"['/tabs/resorts', resorts.id]\">\n        <ion-img  src=\"assets/images/logos/{{resorts.logo}}.png\"></ion-img>\n      <ion-card-subtitle slot=\"end\">{{resorts.name}}</ion-card-subtitle>\n    </ion-item>\n  </ion-card>\n</ion-cards>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_resorts_resorts_module_ts.js.map