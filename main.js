(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+uQQ":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./amplify-amazon-button_5.entry.js": [
		"pptk",
		0,
		13
	],
	"./amplify-auth-fields_9.entry.js": [
		"5Azo",
		3
	],
	"./amplify-authenticator.entry.js": [
		"HaBs",
		0,
		"common",
		14
	],
	"./amplify-button_3.entry.js": [
		"W1Jz",
		0,
		15
	],
	"./amplify-chatbot.entry.js": [
		"OkRK",
		4
	],
	"./amplify-checkbox.entry.js": [
		"jZr9",
		16
	],
	"./amplify-confirm-sign-in_7.entry.js": [
		"VFVT",
		0,
		"common",
		17
	],
	"./amplify-container.entry.js": [
		"l2YT",
		18
	],
	"./amplify-federated-buttons_2.entry.js": [
		"4pA8",
		0,
		19
	],
	"./amplify-federated-sign-in.entry.js": [
		"GWfx",
		9
	],
	"./amplify-form-field_4.entry.js": [
		"svTr",
		20
	],
	"./amplify-greetings.entry.js": [
		"2uVw",
		0,
		21
	],
	"./amplify-icon-button.entry.js": [
		"5+i5",
		22
	],
	"./amplify-icon.entry.js": [
		"ATNG",
		1,
		23
	],
	"./amplify-link.entry.js": [
		"CLig",
		24
	],
	"./amplify-nav_2.entry.js": [
		"29kL",
		0,
		25
	],
	"./amplify-photo-picker.entry.js": [
		"fEjz",
		10
	],
	"./amplify-picker.entry.js": [
		"TkC1",
		11
	],
	"./amplify-radio-button_2.entry.js": [
		"bVH+",
		0,
		"common",
		26
	],
	"./amplify-s3-album.entry.js": [
		"GV60",
		"common",
		5
	],
	"./amplify-s3-image-picker.entry.js": [
		"V0P2",
		"common",
		6
	],
	"./amplify-s3-image.entry.js": [
		"mwoW",
		"common",
		12
	],
	"./amplify-s3-text-picker.entry.js": [
		"/MiJ",
		"common",
		7
	],
	"./amplify-s3-text.entry.js": [
		"Kukj",
		"common",
		8
	],
	"./amplify-select-mfa-type.entry.js": [
		"oogQ",
		2
	],
	"./amplify-sign-in-button.entry.js": [
		"DW50",
		1,
		27
	],
	"./amplify-toast.entry.js": [
		"QOpS",
		28
	],
	"./amplify-tooltip.entry.js": [
		"vSUa",
		29
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "+uQQ";
module.exports = webpackAsyncContext;

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\intelgicprojects\monumentamerica\monumentamerica\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class SidebarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem('_is_admin_login');
        localStorage.removeItem("login_object");
        this.router.navigate(['/login']);
    }
    uploadCourse(redirectUrl) {
        localStorage.setItem('is_edit', "false");
        localStorage.setItem("edit_object", "");
        this.router.navigate(['/upload-course']);
    }
}
SidebarComponent.??fac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 19, vars: 0, consts: [[1, "left-sidebar"], [1, "scroll-sidebar"], [1, "sidebar-nav"], ["id", "sidebarnav"], ["routerLink", "/dashboard", "routerLinkActive", "router-link-active", 1, "sidebar-item", "active"], ["aria-expanded", "false", 1, "sidebar-link", "waves-effect", "waves-dark", "sidebar-link"], [1, "mdi", "mdi-av-timer"], [1, "hide-menu"], [1, "sidebar-item", 3, "click"], [1, "mdi", "mdi-book"], [1, "mdi", "mdi-logout"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_Template_li_click_9_listener() { return ctx.uploadCourse("upload-course"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Upload Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_Template_li_click_14_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "5dVO":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderService {
    constructor() {
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.loading$ = this._loading.asObservable();
    }
    show() {
        this._loading.next(true);
    }
    hide() {
        this._loading.next(false);
    }
}
LoaderService.??fac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: LoaderService, factory: LoaderService.??fac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C7aP":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../graphql/mutations */ "TGEI");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../graphql/queries */ "xsdW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "Kb4U");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");












function CoursesComponent_div_0_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](item_r4);
} }
function CoursesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "nav", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngSubmit", function CoursesComponent_div_0_Template_form_ngSubmit_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r5.onUpload(ctx_r5.createForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](23, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](28, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](29, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33, "Keywords ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](34, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](36, "tag-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](40, "Organization Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](41, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "datalist", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](43, CoursesComponent_div_0_option_43_Template, 2, 1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](44, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](45, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](47, "Author ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](48, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](49, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](50, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](51, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](52, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](53, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](55, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](56, "Choose...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](57, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](58, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](59, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](60, "French");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](61, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](62, "Spanish");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](63, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](64, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](66, "Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](67, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](68, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](69, "Choose...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](70, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](71, "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](72, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](73, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](74, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](75, "Upload file");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](76, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](77, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](78, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function CoursesComponent_div_0_Template_input_change_78_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r7.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](79, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](81, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](82, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](83, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](84, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](85, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](86, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](87, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](88, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](89, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](90, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](91, "mat-slide-toggle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](92, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](93, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](94, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](95, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r0.page_heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r0.page_heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r0.createForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("placeholder", "Add new keword")("secondaryPlaceholder", "Enter the Keyword");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r0.companies);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r0.file_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx_r0.is_btn_disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r0.btn_text);
} }
function CoursesComponent_ng_template_1_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](item_r9);
} }
function CoursesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "nav", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngSubmit", function CoursesComponent_ng_template_1_Template_form_ngSubmit_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r10.updateCourse(ctx_r10.createForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](23, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](28, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](29, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33, "Keywords ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](34, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](36, "tag-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](40, "Organization Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](41, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "datalist", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](43, CoursesComponent_ng_template_1_option_43_Template, 2, 1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](44, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](45, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](47, "Author ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](48, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](49, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](50, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](51, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](52, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](53, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](55, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](56, "Choose...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](57, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](58, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](59, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](60, "French");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](61, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](62, "Spanish");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](63, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](64, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](66, "Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](67, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](68, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](69, "Choose...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](70, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](71, "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](72, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](73, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](74, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](75, "Upload file");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](76, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](77, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](78, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function CoursesComponent_ng_template_1_Template_input_change_78_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r12.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](79, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](81, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](82, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](83, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](84, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](85, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](86, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](88, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](89, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](90, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](91, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](92, "mat-slide-toggle", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](93, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](94, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](95, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](96, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r2.page_heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r2.page_heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r2.createForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("value", ctx_r2.edit_object.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("value", ctx_r2.edit_object.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("value", ctx_r2.edit_object.keyword);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("placeholder", "Add new keword")("secondaryPlaceholder", "Enter the Keyword");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r2.companies);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("value", ctx_r2.edit_object.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r2.file_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("value", ctx_r2.edit_object.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r2.edit_object.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx_r2.is_edit_btn_disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r2.edit_btn_text);
} }
class CoursesComponent {
    constructor(fb, toastr, router) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.title = 'amplify-angular-app';
        this.files = [];
        this.course_keyword = [];
        this.edit_course_keyword = [];
        this.url = "";
        this.file_name = "Choose File";
        this.companies = [];
        this.check = true;
        // public edit_object = JSON.parse(localStorage.getItem("edit_object")!);
        this.is_edit = localStorage.getItem("is_edit");
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            content_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            content_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            organization_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            premium: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.childGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            files: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.keywordList = ["abab", "ajhgjahgd", "sjhsja"];
        this.is_btn_disabled = false;
        this.btn_text = "Create Course";
        this.is_edit_btn_disabled = false;
        this.edit_btn_text = "Edit Course";
        this.page_heading = "Upload course";
    }
    //--------Pge intialization function----------------------//
    ngOnInit() {
        this.check = true;
        this.getFilter();
        if (this.is_edit == "true") {
            this.edit_object = JSON.parse(localStorage.getItem("edit_object"));
        }
        this.getCompany();
        if (this.is_edit == "true") {
            this.page_heading = "Edit Course";
            this.createForm.controls['title'].setValue(this.edit_object.title);
            this.createForm.controls['keyword'].setValue(this.edit_object.keyword);
            this.createForm.controls['subject'].setValue(this.edit_object.subject);
            this.createForm.controls['title'].setValue(this.edit_object.title);
            this.createForm.controls['author'].setValue(this.edit_object.author);
            this.createForm.controls['organization_name'].setValue(this.edit_object.organization_name, { onlySelf: true });
            this.createForm.controls['language'].setValue(this.edit_object.language, { onlySelf: true });
            this.createForm.controls['content_type'].setValue(this.edit_object.content_type, { onlySelf: true });
            this.createForm.controls['description'].setValue(this.edit_object.description, { onlySelf: true });
            this.createForm.controls['premium'].setValue(this.edit_object.premium, { onlySelf: true });
            this.file_name = this.edit_object.content_name;
        }
        else {
            this.page_heading = "Upload course";
        }
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    //---------------Function called on change file input------------------//
    getFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const getEditObj = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["listFilters"] });
            let f = JSON.parse(getEditObj["data"]["listFilters"]["items"][0]["filter"]);
            this.filter_obj = f;
            // this.filter_version = getEditObj["data"]["listFilters"]["items"][0]["_version"];
            this.filter_id = getEditObj["data"]["listFilters"]["items"][0]["id"];
        });
    }
    handleFileInput(event) {
        this.files = [];
        this.files.push(event);
        this.file_name = this.files[0][0]["name"];
    }
    getCompany() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const companies = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["listCompanies"] });
            this.dropdownList = companies["data"]["listCompanies"]["items"];
            for (var i = 0; i < this.dropdownList.length; i++) {
                this.companies.push(this.dropdownList[i]["name"]);
            }
        });
    }
    addCompany(company) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var flag = 1;
            for (var i = 0; i < this.companies.length; i++) {
                if (this.companies[i] == company) {
                    flag = 0;
                    break;
                }
            }
            if (flag == 1) {
                let obj = { 'name': company };
                const newCompany = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["createCompany"], variables: { input: obj } });
            }
        });
    }
    //---------------------function to create a course---------------------------//
    onUpload(content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let obj = content;
            this.btn_text = "Processing...";
            this.is_btn_disabled = true;
            console.log("content-------------");
            console.log(content);
            if (this.files.length == 0) {
                obj.content_name = "";
            }
            else {
                obj.content_name = this.files[0].name;
            }
            obj.uploaded_by = JSON.parse(localStorage.getItem("login_object")).id;
            obj.status = true;
            obj.deleted = false;
            if (content.title.trim() == "") {
                this.toastr.error("Please enter course title");
                this.btn_text = "Create course";
                this.is_btn_disabled = false;
                return;
            }
            else if (content.subject.trim() == "") {
                this.toastr.error("Please enter the subject");
                this.btn_text = "Create course";
                this.is_btn_disabled = false;
                return;
            }
            else if (content.keyword == "") {
                this.toastr.error("Please enter the keyword");
                this.btn_text = "Create course";
                this.is_btn_disabled = false;
                return;
            }
            else if (content.organization_name == "" || content.organization_name == "Choose...") {
                this.toastr.error("Please select the organization");
                this.btn_text = "Create course";
                this.is_btn_disabled = false;
                return;
            }
            else if (content.author.trim() == "") {
                this.toastr.error("Please enter author name");
                this.btn_text = "Create course";
                this.is_btn_disabled = false;
                return;
            }
            else if (content.language == "" || content.language == "Choose...") {
                this.toastr.error("Please select the language");
                this.btn_text = "Create course";
                this.is_btn_disabled = false;
                return;
            }
            else if (content.content_type == "" || content.content_type == "Choose...") {
                this.toastr.error("Please select content type");
                this.btn_text = "Create course";
                this.is_btn_disabled = false;
                return;
            }
            else if (this.files.length == 0) {
                this.toastr.error("Please select the file to upload");
                this.btn_text = "Create course";
                this.is_btn_disabled = false;
                return;
            }
            else {
                obj.content_name = this.files[0][0]["name"];
                if (this.files[0][0]['type'] == "image/jpeg" || this.files[0][0]['type'] == "image/png" || this.files[0][0]['type'] == "image/jpg") {
                    const result = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Storage"].put(content.title.trim() + "/course/" + this.files[0][0]["name"], this.files[0][0], {
                        level: 'public',
                        contentType: this.files[0][0]['type']
                    });
                    let key = result["key"];
                    const img_url = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Storage"].get(key);
                    for (var i = 0; i < obj.keyword.length; i++) {
                        this.course_keyword.push(obj.keyword[i]["value"]);
                    }
                    obj.keyword = this.course_keyword.toString();
                    // const img_url1 = await Storage.get(this.files[0][0]["name"], { level: 'public' })
                    obj.content_url = img_url.toString();
                    this.addCompany(obj.organization_name);
                    if (this.filter_obj.subject.indexOf(content.subject.trim()) == -1) {
                        this.filter_obj.subject.push(content.subject.trim());
                    }
                    if (this.filter_obj.content_type.indexOf(content.content_type.trim()) == -1) {
                        this.filter_obj.content_type.push(content.content_type.trim());
                    }
                    if (this.filter_obj.language.indexOf(content.language.trim()) == -1) {
                        this.filter_obj.language.push(content.language.trim());
                    }
                    if (this.filter_obj.organization_name.indexOf(content.organization_name.trim()) == -1) {
                        this.filter_obj.organization_name.push(content.organization_name.trim());
                    }
                    let updated_filter_obj = JSON.stringify(this.filter_obj);
                    let edit_filter_obj = {
                        id: this.filter_id,
                        filter: updated_filter_obj,
                        status: true,
                        deleted: false,
                        created: ""
                    };
                    const response = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["updateFilter"], variables: { input: edit_filter_obj } });
                    const newContent = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["createContent"], variables: { input: obj } });
                    this.createForm.reset();
                    this.btn_text = "Create Course";
                    this.is_btn_disabled = false;
                    this.toastr.success('Course created successfully');
                    this.files = [];
                    this.router.navigate(["/dashboard"]);
                }
                else {
                    this.toastr.error('Please upload a valid image file');
                    this.btn_text = "Create Course";
                    this.is_btn_disabled = false;
                }
            }
        });
    }
    setSaving(element, text) {
        element.textContent = text;
        element.disabled = true;
    }
    //----------function to refersh the page------------------//
    refresh(redirectUrl) {
        window.location.href = redirectUrl;
    }
    //--------------------------function to update a particular course------------------------------//
    updateCourse(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let keyword_event = event.keyword;
            this.edit_btn_text = "Processing...";
            this.is_edit_btn_disabled = true;
            event.id = this.edit_object.id.substring(1, this.edit_object.id.length - 1);
            event.uploaded_by = JSON.parse(localStorage.getItem("login_object")).id;
            for (var i = 0; i < event.keyword.length; i++) {
                if (typeof (event.keyword[i]) == "string") {
                    this.edit_course_keyword.push(event.keyword[i]);
                }
                else {
                    this.edit_course_keyword.push(event.keyword[i]["value"]);
                }
            }
            event.keyword = this.edit_course_keyword.toString();
            if (event.title.trim() == "") {
                this.toastr.error("Please enter course title");
                this.edit_btn_text = "Edit Course";
                this.is_edit_btn_disabled = false;
                return;
            }
            else if (event.subject.trim() == "") {
                this.toastr.error("Please enter the subject");
                this.edit_btn_text = "Edit Course";
                this.is_edit_btn_disabled = false;
                return;
            }
            else if (keyword_event.length == 0) {
                this.toastr.error("Please enter the keyword");
                this.edit_btn_text = "Edit Course";
                this.is_edit_btn_disabled = false;
                return;
            }
            else if (event.organization_name == "" || event.organization_name == "Choose...") {
                this.toastr.error("Please select the organization");
                this.edit_btn_text = "Edit Course";
                this.is_edit_btn_disabled = false;
                return;
            }
            else if (event.author.trim() == "") {
                this.toastr.error("Please enter author name");
                this.edit_btn_text = "Edit Course";
                this.is_edit_btn_disabled = false;
                return;
            }
            else if (event.language == "" || event.language == "Choose...") {
                this.toastr.error("Please select the language");
                this.edit_btn_text = "Edit Course";
                this.is_edit_btn_disabled = false;
                return;
            }
            else if (event.content_type == "" || event.content_type == "Choose...") {
                this.toastr.error("Please select content type");
                this.edit_btn_text = "Edit Course";
                this.is_edit_btn_disabled = false;
                return;
            }
            else {
                if (this.files.length == 0) {
                    event.content_name = this.edit_object.content_name;
                    event.content_url = this.edit_object.content_url;
                }
                else {
                    event.content_name = this.files[0][0]["name"];
                    if (this.files[0][0]['type'] == "image/jpeg" || this.files[0][0]['type'] == "image/png" || this.files[0][0]['type'] == "image/jpg") {
                        const result = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Storage"].put(event.title.trim() + "/course/" + this.files[0][0]["name"], this.files[0][0], {
                            level: 'public',
                            contentType: this.files[0][0]['type']
                        });
                        let key = result["key"];
                        const img_url = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Storage"].get(key);
                        event.content_url = img_url.toString();
                    }
                    else {
                        this.toastr.error("Please upload a valid image file");
                        this.edit_btn_text = "Edit Course";
                        this.is_edit_btn_disabled = false;
                        return;
                    }
                }
                let id = this.edit_object.id;
                const edit_obj = {
                    id: this.edit_object.id,
                    title: event.title,
                    subject: event.subject,
                    keyword: event.keyword,
                    author: event.author,
                    language: event.language,
                    content_type: event.content_type,
                    organization_name: event.organization_name,
                    content_name: event.content_name,
                    content_url: event.content_url,
                    premium: event.premium,
                    description: event.description,
                    uploaded_by: event.uploaded_by,
                    upload_time: "",
                    status: true,
                    deleted: false,
                    created: "",
                };
                if (this.filter_obj.subject.indexOf(edit_obj.subject.trim()) == -1) {
                    this.filter_obj.subject.push(edit_obj.subject.trim());
                }
                if (this.filter_obj.content_type.indexOf(edit_obj.content_type.trim()) == -1) {
                    this.filter_obj.content_type.push(edit_obj.content_type.trim());
                }
                if (this.filter_obj.language.indexOf(edit_obj.language.trim()) == -1) {
                    this.filter_obj.language.push(edit_obj.language.trim());
                }
                if (this.filter_obj.organization_name.indexOf(edit_obj.organization_name.trim()) == -1) {
                    this.filter_obj.organization_name.push(edit_obj.organization_name.trim());
                }
                let updated_filter_obj = JSON.stringify(this.filter_obj);
                let edit_filter_obj = {
                    id: this.filter_id,
                    filter: updated_filter_obj,
                    status: true,
                    deleted: false,
                    created: "",
                };
                const res = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["updateFilter"], variables: { input: edit_filter_obj } });
                const response = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["updateContent"], variables: { input: edit_obj } });
                this.edit_btn_text = "Edit Course";
                this.is_edit_btn_disabled = false;
                this.toastr.success("Course Updated Succesfully");
                this.router.navigate(['/dashboard']);
                this.createForm.reset();
                this.files = [];
            }
        });
    }
}
CoursesComponent.??fac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
CoursesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: CoursesComponent, selectors: [["app-courses"]], decls: 3, vars: 2, consts: [["class", "page-wrapper", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "page-wrapper"], [1, "page-breadcrumb"], [1, "row"], [1, "col-9", "align-self-center"], [1, "page-title"], [1, "d-flex", "align-items-center", "justify-content-start"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container-fluid"], [1, "card", "card-body"], [1, "form-horizontal", "mt-4", "w-100", 3, "formGroup", "ngSubmit"], [1, "col-sm-6"], [1, "form-group"], ["for", "example-email"], [1, "help"], ["type", "text", "id", "example-email", "formControlName", "title", "name", "example-email", "placeholder", "", 1, "form-control"], ["type", "text", "id", "example-email", "formControlName", "subject", "name", "example-email", "placeholder", "", 1, "form-control"], [1, "custom_tag"], ["formControlName", "keyword", 3, "placeholder", "secondaryPlaceholder"], ["type", "text", "list", "inlineFormCustomSelect", "formControlName", "organization_name", 1, "form-control"], ["id", "inlineFormCustomSelect"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "example-email", "name", "example-email", "placeholder", "", "formControlName", "author", 1, "form-control"], ["id", "inlineFormCustomSelect", "formControlName", "language", 1, "custom-select", "col-12"], ["value", "", "selected", ""], ["id", "inlineFormCustomSelect", "formControlName", "content_type", 1, "custom-select", "col-12"], [1, "input-group"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile01", "aria-describedby", "inputGroupFileAddon01", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", "id", "file_name", 1, "custom-file-label"], ["name", "", "id", "", "cols", "30", "placeholder", "", "formControlName", "description", 1, "form-control"], ["id", "slide", "color", "primary", "formControlName", "premium"], [1, "col-12"], ["type", "submit", 1, "btn", "waves-effect", "waves-light", "float-right", "btn-rounded", "btn-info", 3, "disabled"], ["type", "text", "id", "example-email", "formControlName", "title", "name", "example-email", "placeholder", "", 1, "form-control", 3, "value"], ["type", "text", "id", "example-email", "formControlName", "subject", "name", "example-email", "placeholder", "", 1, "form-control", 3, "value"], ["formControlName", "keyword", 3, "placeholder", "secondaryPlaceholder", "value"], ["type", "text", "id", "example-email", "name", "example-email", "placeholder", "", "formControlName", "author", 1, "form-control", 3, "value"], ["name", "", "id", "", "cols", "30", "placeholder", "", "formControlName", "description", 1, "form-control", 3, "value"], ["id", "slide", "checked", "", "color", "primary", "formControlName", "premium"]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](0, CoursesComponent_div_0_Template, 97, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, CoursesComponent_ng_template_1_Template, 98, 15, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????templateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.is_edit == "false")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_z"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../graphql/queries */ "xsdW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");










class AuthComponent {
    constructor(fb, router, toastr) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this.login_btn = "Log In";
        this.is_btn_disabled = false;
    }
    // initialization function
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.login_btn = "Log In";
            this.is_btn_disabled = false;
            this.createForm = this.fb.group({
                'username': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        });
    }
    //login function
    loginUser(event) {
        this.getAuthUser(event.username, event.password);
    }
    //Cognito login for admin
    getAuthUser(username, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.login_btn = "Processing...";
                this.is_btn_disabled = true;
                if (username.trim() == "") {
                    this.toastr.error("Username can't be empty");
                    this.login_btn = "Log In";
                    this.is_btn_disabled = false;
                }
                else if (this.createForm.controls.username.invalid) {
                    this.toastr.error("Please enter the valid email");
                    this.login_btn = "Log In";
                    this.is_btn_disabled = false;
                    return;
                }
                else if (password == "") {
                    this.toastr.error("Password can't be empty");
                    this.login_btn = "Log In";
                    this.is_btn_disabled = false;
                }
                else {
                    const user = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn(username, password);
                    if (user != null) {
                        localStorage.setItem("token", user.Session);
                        this.getUser(username, password);
                    }
                }
            }
            catch (error) {
                this.login_btn = "Log In";
                this.is_btn_disabled = false;
                this.toastr.error(error["message"]);
            }
        });
    }
    // Admin login (not cognito login)
    getUser(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.login_btn = "Processing...";
            this.is_btn_disabled = true;
            let filter1 = {
                and: [{ email: { eq: email } },
                    { password: { eq: password } }]
            };
            let result = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__["listAdminUsers"], variables: { filter: filter1 } });
            if (result["data"]["listAdminUsers"]["items"].length > 0) {
                let login_object = {
                    id: result["data"]["listAdminUsers"]["items"][0]['id'],
                    name: result["data"]["listAdminUsers"]["items"][0]['name'],
                    email: result["data"]["listAdminUsers"]["items"][0]['email']
                };
                localStorage.setItem('_is_admin_login', "true");
                localStorage.setItem("login_object", JSON.stringify(login_object));
                this.router.navigate(['/dashboard']);
            }
            else {
                this.toastr.error('Invalid username or password');
                localStorage.setItem('_is_admin_login', "false");
                localStorage.setItem("login_object", "");
                this.login_btn = "Log In";
                this.is_btn_disabled = false;
            }
        });
    }
    //function to hide and show password icon
    showPassword(val) {
        if (val == "0") {
            $("#password").attr("type", "text");
            $("#show_password").attr("hidden", false);
            $("#hide_password").attr("hidden", true);
        }
        else {
            $("#password").attr("type", "password");
            $("#show_password").attr("hidden", true);
            $("#hide_password").attr("hidden", false);
        }
    }
}
AuthComponent.??fac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
AuthComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 58, vars: 3, consts: [["dir", "ltr"], ["charset", "utf-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["name", "description", "content", ""], ["name", "author", "content", ""], ["rel", "canonical", "href", "https://www.wrappixel.com/templates/niceadmin/"], [1, "main-wrapper"], [1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(./assets/images/big/auth-bg.jpg) no-repeat center center"], [1, "auth-box"], ["id", "loginform"], [1, "logo"], [1, "db"], ["src", "./assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], ["id", "loginform", 1, "form-horizontal", "m-t-20", 3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "ti-user"], ["type", "text", "formControlName", "username", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", "form-control-lg"], ["id", "basic-addon2", 1, "input-group-text"], [1, "ti-pencil"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "Password", "aria-label", "Password", "aria-describedby", "basic-addon1", 1, "form-control", "form-control-lg"], ["id", "basic-addon2", "id", "show_password", "hidden", "", 1, "input-group-text", 3, "click"], [1, "fa", "fa-eye"], ["id", "basic-addon2", "id", "hide_password", 1, "input-group-text", 3, "click"], [1, "fa", "fa-eye-slash"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["type", "submit", 1, "btn", "btn-block", "btn-lg", "btn-info", 3, "disabled"], ["id", "recoverform"], [1, "row", "m-t-20"], ["action", "", 1, "col-12"], [1, "form-group", "row"], ["type", "email", "required", "", "placeholder", "Username", 1, "form-control", "form-control-lg"], ["type", "submit", "name", "action", 1, "btn", "btn-block", "btn-lg", "btn-danger"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](5, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](6, "meta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "Nice admin Template - The Ultimate Multipurpose admin template");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](9, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](19, "Sign In to Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_22_listener() { return ctx.loginUser(ctx.createForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](26, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](27, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](31, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](32, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function AuthComponent_Template_span_click_33_listener() { return ctx.showPassword(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](34, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function AuthComponent_Template_span_click_35_listener() { return ctx.showPassword(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](36, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](39, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](44, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](45, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](46, "Recover Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](48, "Enter your Email and instructions will be sent to you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](50, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](53, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](56, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](57, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.createForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx.is_btn_disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.login_btn);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Dir"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../graphql/queries */ "xsdW");
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../graphql/mutations */ "TGEI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _appPipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../appPipes/course-filter.pipe */ "zNG6");











function DashboardComponent_div_21_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", content_r2.title.substring(0, 20), "...");
} }
function DashboardComponent_div_21_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](content_r2.title);
} }
function DashboardComponent_div_21_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function DashboardComponent_div_21_div_11_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r15); const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r13.updateStatus(content_r2.status, content_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx_r7.is_disabled);
} }
function DashboardComponent_div_21_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function DashboardComponent_div_21_ng_template_12_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r18); const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r16.updateStatus(content_r2.status, content_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "span", 40);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx_r9.is_disabled);
} }
function DashboardComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function DashboardComponent_div_21_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r20); const content_r2 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r19.setCourseId(content_r2.id, content_r2.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](6, DashboardComponent_div_21_div_6_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](7, DashboardComponent_div_21_ng_template_7_Template, 2, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](11, DashboardComponent_div_21_div_11_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](12, DashboardComponent_div_21_ng_template_12_Template, 2, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function DashboardComponent_div_21_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r20); const content_r2 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r21.editCourse(content_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](16, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](18, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "swal", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("confirm", function DashboardComponent_div_21_Template_swal_confirm_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r20); const content_r2 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r22.delteCourse(content_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const content_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](8);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](13);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("src", content_r2.content_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", content_r2.title.length > 30)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", content_r2.status)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("swal", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("showCancelButton", true)("focusCancel", true);
} }
function DashboardComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "h1", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "Sorry, No records found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function DashboardComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, DashboardComponent_div_23_div_1_Template, 3, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "courseFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, ctx_r1.contents, ctx_r1.searchName).length === 0);
} }
class DashboardComponent {
    constructor(router, swal, toastr) {
        this.router = router;
        this.swal = swal;
        this.toastr = toastr;
        this.contents = [];
        this.result = [];
        this.is_disabled = false;
        this.searchName = "";
        this.showText = "";
    }
    // client: AWSAppSyncClient<NormalizedCacheObject>  ;
    //-----------------------Page intialization function----------------//
    ngOnInit() {
        this.hideText();
        this.showText = localStorage.getItem("changeText");
        if (localStorage.getItem("login_object")) {
            this.admin_login = JSON.parse(localStorage.getItem("login_object"));
            this.is_login = localStorage.getItem("_is_admin_login");
        }
        this.getContents();
        this.getUser();
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let filter = {
                deleted: {
                    ne: true // filter priority = 1,
                },
                id: {
                    eq: "a7779327-a95f-4a3d-bc39-85448caf64a2"
                }
            };
            const respose = yield aws_amplify__WEBPACK_IMPORTED_MODULE_1__["API"].graphql({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["listAdminUsers"], variables: { filter: filter } });
        });
    }
    //-------------------- function to set localStorage variables--------------------//
    setCourseId(id, title) {
        localStorage.setItem("course_id", id);
        localStorage.setItem("course_name", title);
        this.router.navigate(['/course-detail']);
    }
    inputChange() {
        localStorage.setItem("changeText", "0");
        this.showText = localStorage.getItem("changeText");
    }
    hideText() {
        localStorage.setItem("changeText", "1");
    }
    //---------------------function to get all the non deleted course contents------------------//
    getContents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let filter = {
                deleted: {
                    ne: true // filter priority = 1
                }
            };
            const content = yield aws_amplify__WEBPACK_IMPORTED_MODULE_1__["API"].graphql({
                query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["listContents"],
                variables: { filter: filter }
            });
            this.contents = [];
            this.contents = content["data"]["listContents"]["items"];
            console.log(this.contents);
            for (var i = 0; i < this.contents.length; i++) {
                this.contents[i].content_url = this.contents[i].content_url.split("?")[0];
            }
        });
    }
    //--------------------------function to set course edit object-----------------------//
    editCourse(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cousre = yield aws_amplify__WEBPACK_IMPORTED_MODULE_1__["API"].graphql({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["getContent"], variables: { id: courseId } });
            let edit_object = {
                id: cousre["data"]["getContent"].id,
                title: cousre["data"]["getContent"].title,
                subject: cousre["data"]["getContent"].subject,
                keyword: cousre["data"]["getContent"].keyword.split(","),
                author: cousre["data"]["getContent"].author,
                language: cousre["data"]["getContent"].language,
                organization_name: cousre["data"]["getContent"].organization_name,
                content_type: cousre["data"]["getContent"].content_type,
                content_name: cousre["data"]["getContent"].content_name,
                content_url: cousre["data"]["getContent"].content_url,
                description: cousre["data"]["getContent"].description,
                premium: cousre["data"]["getContent"].premium
            };
            localStorage.setItem('is_edit', "true");
            localStorage.removeItem("edit_object");
            localStorage.setItem("edit_object", JSON.stringify(edit_object));
            this.router.navigate(['/upload-course']);
        });
    }
    refresh(redirectUrl) {
        window.location.href = redirectUrl;
    }
    //--------------function to delete a particular course-------------------//
    delteCourse(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const deleteObj = {
                id: id,
                deleted: true,
                status: false,
                _version: 0
            };
            const deletedRes = yield aws_amplify__WEBPACK_IMPORTED_MODULE_1__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["updateContent"], variables: { input: deleteObj } });
            setTimeout(() => {
                // window.location.reload();
                this.toastr.success("Course deleted succesfuly");
            }, 1000);
            this.getContents();
        });
    }
    //-------------function to update the active status of a particular course---------//
    updateStatus(status, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.is_disabled = true;
            if (status == true) {
                status = false;
            }
            else {
                status = true;
            }
            const updateObj = {
                id: id,
                status: status,
            };
            const statusRes = yield aws_amplify__WEBPACK_IMPORTED_MODULE_1__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["updateContent"], variables: { input: updateObj } });
            this.getContents();
            if (status == true) {
                this.toastr.success("Course activated succesfuly");
            }
            else {
                this.toastr.success("Course deactivated succesfuly");
            }
            this.is_disabled = false;
        });
    }
}
DashboardComponent.??fac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SweetAlert2Module"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 25, vars: 6, consts: [[1, "page-wrapper"], [1, "page-breadcrumb"], [1, "row"], [1, "col-9", "align-self-center"], [1, "page-title"], [1, "d-flex", "align-items-center", "justify-content-start"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-3", "align-self-center"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text", "pt-0", "pb-0", 2, "border-radius", "20px 0 0 20px", "background", "#fff"], [1, "mdi", "mdi-magnify", "font-20"], ["type", "text", "placeholder", "Search..", "aria-describedby", "basic-addon1", 1, "form-control", 2, "border-radius", "0 20px 20px 0", 3, "ngModel", "ngModelChange", "keyup"], [1, "container-fluid"], ["class", "d-inline-block m-2 p-2", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "chat-windows"], [1, "d-inline-block", "m-2", "p-2"], [1, "card"], [2, "cursor", "pointer", 3, "click"], ["alt", "Card image cap", 1, "card-img-top", "img-responsive", 2, "width", "320px", "height", "200px", 3, "src"], [1, "card-body"], [4, "ngIf", "ngIfElse"], ["elseStatement", ""], [1, "d-flex", "no-block", "align-items-center"], [1, "switch", "mb-0"], ["other_content", ""], [1, "ml-auto"], ["href", "javascript:void()", 1, "text-info", "mr-3", 3, "click"], [1, "fas", "fa-edit"], ["href", "javascript:void()", 1, "text-danger", 3, "swal"], [1, "far", "fa-trash-alt"], ["title", "Delete?", "text", "This course will be deleted permanently", "icon", "question", 3, "showCancelButton", "focusCancel", "confirm"], ["deleteSwal", ""], [1, "font-normal"], ["type", "checkbox", "checked", "", 3, "disabled", "click"], [1, "slider"], ["type", "checkbox", 3, "disabled", "click"], ["class", "justify-content-center mx-auto", "style", "text-align: center;", 4, "ngIf"], [1, "justify-content-center", "mx-auto", 2, "text-align", "center"], ["id", "nosearchtext"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](13, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_19_listener($event) { return ctx.searchName = $event; })("keyup", function DashboardComponent_Template_input_keyup_19_listener() { return ctx.inputChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](21, DashboardComponent_div_21_Template, 21, 8, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](22, "courseFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](23, DashboardComponent_div_23_Template, 3, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](24, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.searchName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](22, 3, ctx.contents, ctx.searchName));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.showText == "0");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SwalDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SwalComponent"]], pipes: [_appPipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["CourseFilterPipe"]], styles: [".showClass[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGFBQUE7QUFDQSIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd0NsYXNze1xyXG5kaXNwbGF5OiBub25lO1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/services/loader.service */ "5dVO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "gren");





class AppComponent {
    constructor(loader, http) {
        this.loader = loader;
        this.http = http;
        this.title = 'MONUMENTANERICA';
        this.loading$ = this.loader.loading$;
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "ngx-ui-loader");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["??b"]], styles: ["mat-progress-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  color: cadetblue;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb2xvcjogY2FkZXRibHVlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "TGEI":
/*!**********************************!*\
  !*** ./src/graphql/mutations.ts ***!
  \**********************************/
/*! exports provided: createUser, updateUser, deleteUser, createContent, updateContent, deleteContent, createAdminUser, updateAdminUser, deleteAdminUser, createCompany, updateCompany, deleteCompany, createFilter, updateFilter, deleteFilter, createContentUnit, updateContentUnit, deleteContentUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContent", function() { return createContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContent", function() { return updateContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContent", function() { return deleteContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAdminUser", function() { return createAdminUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAdminUser", function() { return updateAdminUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAdminUser", function() { return deleteAdminUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompany", function() { return createCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCompany", function() { return updateCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCompany", function() { return deleteCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilter", function() { return updateFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFilter", function() { return deleteFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContentUnit", function() { return createContentUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContentUnit", function() { return updateContentUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContentUnit", function() { return deleteContentUnit; });
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      login_type
      full_name
      email
      phone
      password
      otp
      email_validation_token
      login_with
      email_validation_token_timestamp
      forgot_password_token
      forgot_password_token_timestamp
      selected_filters
      subscription_type
      subscription_date
      subscription_expire
      subscription_id
      is_email_valid
      is_phone_valid
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      login_type
      full_name
      email
      phone
      password
      otp
      email_validation_token
      login_with
      email_validation_token_timestamp
      forgot_password_token
      forgot_password_token_timestamp
      selected_filters
      subscription_type
      subscription_date
      subscription_expire
      subscription_id
      is_email_valid
      is_phone_valid
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      login_type
      full_name
      email
      phone
      password
      otp
      email_validation_token
      login_with
      email_validation_token_timestamp
      forgot_password_token
      forgot_password_token_timestamp
      selected_filters
      subscription_type
      subscription_date
      subscription_expire
      subscription_id
      is_email_valid
      is_phone_valid
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
      id
      title
      subject
      keyword
      author
      language
      organization_name
      content_type
      content_name
      content_url
      uploaded_by
      upload_time
      description
      premium
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
      id
      title
      subject
      keyword
      author
      language
      organization_name
      content_type
      content_name
      content_url
      uploaded_by
      upload_time
      description
      premium
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
      id
      title
      subject
      keyword
      author
      language
      organization_name
      content_type
      content_name
      content_url
      uploaded_by
      upload_time
      description
      premium
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const createAdminUser = /* GraphQL */ `
  mutation CreateAdminUser(
    $input: CreateAdminUserInput!
    $condition: ModelAdminUserConditionInput
  ) {
    createAdminUser(input: $input, condition: $condition) {
      id
      name
      email
      phone
      password
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const updateAdminUser = /* GraphQL */ `
  mutation UpdateAdminUser(
    $input: UpdateAdminUserInput!
    $condition: ModelAdminUserConditionInput
  ) {
    updateAdminUser(input: $input, condition: $condition) {
      id
      name
      email
      phone
      password
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const deleteAdminUser = /* GraphQL */ `
  mutation DeleteAdminUser(
    $input: DeleteAdminUserInput!
    $condition: ModelAdminUserConditionInput
  ) {
    deleteAdminUser(input: $input, condition: $condition) {
      id
      name
      email
      phone
      password
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      name
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      name
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      name
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const createFilter = /* GraphQL */ `
  mutation CreateFilter(
    $input: CreateFilterInput!
    $condition: ModelFilterConditionInput
  ) {
    createFilter(input: $input, condition: $condition) {
      id
      filter
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const updateFilter = /* GraphQL */ `
  mutation UpdateFilter(
    $input: UpdateFilterInput!
    $condition: ModelFilterConditionInput
  ) {
    updateFilter(input: $input, condition: $condition) {
      id
      filter
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const deleteFilter = /* GraphQL */ `
  mutation DeleteFilter(
    $input: DeleteFilterInput!
    $condition: ModelFilterConditionInput
  ) {
    deleteFilter(input: $input, condition: $condition) {
      id
      filter
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const createContentUnit = /* GraphQL */ `
  mutation CreateContentUnit(
    $input: CreateContentUnitInput!
    $condition: ModelContentUnitConditionInput
  ) {
    createContentUnit(input: $input, condition: $condition) {
      id
      course_id
      unit_no
      title
      keyword
      language
      content_type
      content_name
      content_url
      uploaded_by
      upload_time
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const updateContentUnit = /* GraphQL */ `
  mutation UpdateContentUnit(
    $input: UpdateContentUnitInput!
    $condition: ModelContentUnitConditionInput
  ) {
    updateContentUnit(input: $input, condition: $condition) {
      id
      course_id
      unit_no
      title
      keyword
      language
      content_type
      content_name
      content_url
      uploaded_by
      upload_time
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const deleteContentUnit = /* GraphQL */ `
  mutation DeleteContentUnit(
    $input: DeleteContentUnitInput!
    $condition: ModelContentUnitConditionInput
  ) {
    deleteContentUnit(input: $input, condition: $condition) {
      id
      course_id
      unit_no
      title
      keyword
      language
      content_type
      content_name
      content_url
      uploaded_by
      upload_time
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/ui-angular */ "Z63c");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-details/course-details.component */ "hLKW");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses/courses.component */ "C7aP");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-select2 */ "eSIH");
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ "jcQU");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-chips */ "Kb4U");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _appPipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./appPipes/filter.pipe */ "nklq");
/* harmony import */ var _appPipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./appPipes/course-filter.pipe */ "zNG6");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./default/default.component */ "ptTY");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-filter-pipe */ "VADE");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "dEEo");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_network_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/network.interceptor */ "crDv");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ "fXoL");






































class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_33__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_33__["????defineInjector"]({ providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HTTP_INTERCEPTORS"], useClass: _services_network_interceptor__WEBPACK_IMPORTED_MODULE_30__["NetworkInterceptor"], multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_1__["AmplifyUIAngularModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__["NgxDropzoneModule"],
            ng_select2__WEBPACK_IMPORTED_MODULE_14__["NgSelect2Module"],
            _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__["MultiSelectAllModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            ngx_chips__WEBPACK_IMPORTED_MODULE_19__["TagInputModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__["SweetAlert2Module"].forRoot(),
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_24__["FilterPipeModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_31__["NgxUiLoaderModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_31__["NgxUiLoaderHttpModule"].forRoot({ showForeground: true }),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_31__["NgxUiLoaderRouterModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_5__["CourseDetailsComponent"],
        _courses_courses_component__WEBPACK_IMPORTED_MODULE_6__["CoursesComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
        _appPipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPipe"],
        _appPipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_22__["CourseFilterPipe"],
        _default_default_component__WEBPACK_IMPORTED_MODULE_23__["DefaultComponent"],
        _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_25__["PrivacyPolicyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_1__["AmplifyUIAngularModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__["NgxDropzoneModule"],
        ng_select2__WEBPACK_IMPORTED_MODULE_14__["NgSelect2Module"],
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__["MultiSelectAllModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        ngx_chips__WEBPACK_IMPORTED_MODULE_19__["TagInputModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__["SweetAlert2Module"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_24__["FilterPipeModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
        ngx_ui_loader__WEBPACK_IMPORTED_MODULE_31__["NgxUiLoaderModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_31__["NgxUiLoaderHttpModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_31__["NgxUiLoaderRouterModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"]] }); })();


/***/ }),

/***/ "crDv":
/*!*************************************************!*\
  !*** ./src/app/services/network.interceptor.ts ***!
  \*************************************************/
/*! exports provided: NetworkInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkInterceptor", function() { return NetworkInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader.service */ "5dVO");



class NetworkInterceptor {
    constructor(loader) {
        this.loader = loader;
    }
    intercept(request, next) {
        this.loader.show();
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => {
            this.loader.hide();
        }));
    }
}
NetworkInterceptor.??fac = function NetworkInterceptor_Factory(t) { return new (t || NetworkInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
NetworkInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: NetworkInterceptor, factory: NetworkInterceptor.??fac });


/***/ }),

/***/ "dEEo":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyPolicyComponent.??fac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
PrivacyPolicyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 202, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "wrapper"], ["href", "https://gdpr.eu."], ["href", "https://www.ftc.gov/tips-advice/business\u0002center/guidance/childrens-online-privacy-protection-rule-six-step-compliance."]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "privacy-policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "ONLINE PRIVACY POLICY AGREEMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "June 12, 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Enlightened Grove LLC values its users\u2019 privacy. This privacy policy (\u201CPolicy\u201D) will help you understand how we collect and use personal information from those who visit our Website or make use of our online facilities and services, and what we will and will not do with the information we collect. Our Policy has been designed and created to ensure those affiliated with Enlightened Grove LLC of our commitment and realization of our obligation not only to meet , but to exceed, most existing privacy standards.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "We reserve the right to make changes to this Policy at any given time. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page. If at any point in time Enlightened Grove LLC decides to make use of any personally identifiable information on file, in a manner vastly different from that which was stated when this information was initially collected, the user or users shall be promptly notified by email. Users at that time shall have the option as to whether to permit the use of their information in this separate manner.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "This Policy applies to Enlightened Grove LLC, and it governs any and all data collection and usage by us. Through the use of www.enlightenedgrove.com, you are therefore consenting to the data collection procedures expressed in this Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Please note that this Policy does not govern the collection and use of information by companies that Enlightened Grove LLC does not control, nor by individuals not employed or managed by us. If you visit a website that we mention or link to, be sure to review its privacy policy before providing the site with information. It is highly recommended and suggested that you review the privacy policy and statement of any website you choose to use or frequent to better understand the way in which website garner, make use of and share the information collected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Specifically, this Policy will inform you of the following ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "What personally identifiable information is collected from you through our website;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Why we collect personally identifiable information and the legal basis for such collection;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " How we use the collected information and with whom it may be shared;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " What choices are available to you regarding the use of your data; and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "The security procedures in place to protect the misuse of your information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Information We Collect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "It is always up to you whether to disclose personally identifiable information to us, although if you elect not to do so, we reserve the right not to register you as a user or provide you with any products or services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "In addition, Enlightened Grove LLC may have the occasion to collect non-personal anonymous demographic information, such as age, gender, household income, political affiliation, race and religion, as well as the type of browser you are using, IP address, or type of operating system, which will assist us in providing and maintaining superior quality service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Why We Collect Information and For How Long");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "We are collecting your data for several reasons: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "To better understand your needs and provide you with the services you have requested;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "To fulfill our legitimate interest in improving our services and products;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "To send you promotional emails containing information we think you may like when we have your consent to do so;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "To contact you to fill out surveys or participate in other types of market research, when we have your consent to do so;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "To customize our website according to your online behavior and personal preferences.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "The data we collect from you will be stored for no longer than necessary. The length of time we retain said information will be determined based upon the following criteria: the length of time your personal information remains relevant; the length of time it is reasonable to keep records to demonstrate that we have fulfilled our duties and obligations; any limitation periods within which claims might be made; any retention periods prescribed by law or recommended by regulators, professional bodies or associations; the type of contract we have with you, the existence of your consent, and our legitimate interest in keeping such information as stated in this Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Use of Information Collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Enlightened Grove LLC does not now, nor will it in the future, sell, rent or lease any of its customer lists and/or names to any third parties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Enlightened Grove LLC may collect and may make use of personal information to assist in the operation of our website and to ensure delivery of the services you need and request. At times, we may find it necessary to use personally identifiable information as a means to keep you informed of other possible products and/or services that may be available to you from www.enlightenedgrove.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Enlightened Grove LLC may also be in contact with you with regards to completing surveys and/or research questionnaires related to your opinion of current or potential future services that may be offered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Enlightened Grove LLCuses various third-party social media features including but not limited to Facebook and other interactive programs. These may collect your IP address and require cookies to work properly. These services are governed by the privacy policies of the providersand are not within Enlightened Grove LLC's control.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Disclosure of Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Enlightened Grove LLC may not use or disclose the information provided by you except under the following circumstances: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "as necessary to provide services or products you have ordered;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "in other ways described in this Policy or to which you have otherwise consented;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "in the aggregate with other information in such a way so that your identity cannot reasonably be determined;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "as required by law, or in response to a subpoena or search warrant;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "to outside auditors who have agreed to keep the information confidential;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "as necessary to enforce the Terms of Service;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " as necessary to maintain, safeguard and preserve all the rights and property of Enlightened Grove LLC.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Non-Marketing Purposes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Enlightened Grove LLC greatly respects your privacy. We do maintain and reserve the right to contact you if needed for non-marketing purposes (such as bug alerts, security breaches, account issues, and/or changes in Enlightened Grove LLC products and services). In certain circumstances, we may use our website, newspapers, or other public means to post a notice. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Children under the age of 13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Enlightened Grove LLC's website is not directed to, and does not knowingly collect personal identifiable information from, children under the age of thirteen (13). If it is determined that such information has been inadvertently collected on anyone under the age of thirteen (13), we shall immediately take the necessary steps to ensure that such information is deleted from our system's database, or in the alternative, that verifiable parental consent is obtained for the use and storage of such information. Anyone under the age of thirteen (13) must seek and obtain parent or guardian permission to use this website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Unsubscribe or Opt-Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "All users and visitors to our website have the option to discontinue receiving communications from us by way of email or newsletters. To discontinue or unsubscribe from our website please send an email that you wish to unsubscribe to contact@enlightenedgrove.com. If you wish to unsubscribe or opt-out from any third-party websites, you must go to that specific website to unsubscribe or opt-out. Enlightened Grove LLC will continue to adhere to this Policy with respect to any personal information previously collected.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Links to Other Websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Our website does contain links to affiliate and other websites. Enlightened Grove LLC does not claim nor accept responsibility for any privacy policies, practices and/or procedures of other such websites. Therefore, we encourage all users and visitors to be aware when they leave our website and to read the privacy statements of every website that collects personally identifiable information. This Privacy Policy Agreement applies only and solely to the information collected by our website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Notice to European Union Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Enlightened Grove LLC's operations are located primarily in the United States. If you provide information to us, the information will be transferred out of the European Union (EU) and sent to the United States. (The adequacy decision on the EU-US Privacy became operational on August 1, 2016. This framework protects the fundamental rights of anyone in the EU whose personal data is transferred to the United States for commercial purposes. It allows the free transfer of data to companies that are certified in the US under the Privacy Shield.) By providing personal information to us, you are consenting to its storage and use as described in this Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Your Rights as a Data Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Under the regulations of the General Data Protection Regulation (\"GDPR\") of the EU you have certain rights as a Data Subject. These rights are as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "The right to be informed:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " this means we must inform you of how we intend to use your personal data and we do this through the terms of this Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "The right of access: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " this means you have the right to request access to the data we hold about you and we must respond to those requests within one month. You can do this by sending an email to contact@enlightenedgrove.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "The right to rectification:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, " this means that if you believe some of the date, we hold is incorrect, you have the right to have it corrected. You can do this by logging into your account with us, or by sending us an email with your request.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "The right to erasure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, " this means you can request that the information we hold be deleted, and we will comply unless we have a compelling reason not to, in which case you will be informed of same. You can do this by sending an email to contact@enlightenedgrove.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "The right to restrict processing:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " this means you can change your communication preferences or opt-out of certain communications. You can do this by sending an email to contact@enlightenedgrove.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "The right of data portability:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, " this means you can obtain and use the data we hold for your own purposes without explanation. If you wish to request a copy of your information, contact us at contact@enlightenedgrove.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "The right to object:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, " this means you can file a formal objection with us regarding our use of your information with regard to third parties, or its processing where our legal basis is our legitimate interest in it. To do this, please send an email to contact@enlightenedgrove.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "In addition to the rights above, please rest assured that we will always aim to encrypt and anonymize your personal information whenever possible. We also have protocols in place in the unlikely event that we suffer a data breach and we will contact you if your personal information is ever at risk. For more details regarding our security protections see the section below or visit our website at www.enlightenedgrove.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Enlightened Grove LLC takes precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. Wherever we collect sensitive information (e.g. credit card information), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for \"https\" at the beginning of the address of the webpage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers and servers in which we store personally identifiable information are kept in a secure environment. This is all done to prevent any loss, misuse, unauthorized access, disclosure or modification of the user's personal information under our control.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "The company also uses Secure Socket Layer (SSL) for authentication and private communications to build users' trust and confidence in the internet and website use by providing simple and secure access and communication of credit card and personal information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Acceptance of Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "By using this website, you are hereby accepting the terms and conditions stipulated within the Privacy Policy Agreement. If you are not in agreement with our terms and conditions, then you should refrain from further use of our sites. In addition, your continued use of our website following the posting of any updates or changes to our terms and conditions shall mean that you agree and acceptance of such changes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "How to Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "If you have any questions or concerns regarding the Privacy Policy Agreement related to our website, please feel free to contact us at the following email, telephone number or mailing address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " contact@enlightenedgrove.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Telephone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, " +1-801-205-5437");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Mailing Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " Enlightened Grove LLC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, " 928 Ledgestone Ln");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, " Heber City, Utah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, " 84032");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "The data controller responsible for your personal information for the purposes of GDPR compliance is:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Michael A. Neider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " mn@miroind.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " +1-801-870-7602");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, " 928 Ledgestone Lane, Heber City, Utah 84032");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "GDPR Disclosure: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "If you answered \"yes\" to the question Does your website comply with the General Data Protection Regulation (\"GDPR\")? then the Privacy Policy above includes language that is meant to account for such compliance. Nevertheless, in order to be fully compliant with GDPR regulations your company must fulfill other requirements such as: (i) doing an assessment of data processing activities to improve security; (ii) have a data processing agreement with any third party vendors; (iii) appoint a data protection officer for the company to monitor GDPR compliance; (iv) designate a representative based in the EU under certain circumstances; and (v) have a protocol in place to handle a potential data breach. For more details on how to make sure your company is fully compliant with GDPR, please visit the official website at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "https://gdpr.eu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " FormSwift and its subsidiaries are in no way responsible for determining whether or not your company is in fact compliant with GDPR and takes no responsibility for the use you make of this Privacy Policy or for any potential liability your company may face in relation to any GDPR compliance issues.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "COPPA Compliance Disclosure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "This Privacy Policy presumes that your website is not directed at children under the age of 13 and does not knowingly collect personal identifiable information from them or allow others to do the same through your site. If this is not true for your website or online service and you do collect such information (or allow others to do so), please be aware that you must be compliant with all COPPA regulations and guidelines in order to avoid violations which could lead to law enforcement actions, including civil penalties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "In order to be fully compliant with COPPA your website or online service must fulfill other requirements such as: (i) posting a privacy policy which describes not only your practices, but also the practices of any others collecting personal information on your site or service \u2014 for example, plug-ins or ad networks; (ii) include a prominent link to your privacy policy anywhere you collect personal information from children; (iii) include a description of parental rights (e.g. that you won't require a child to disclose more information than is reasonably necessary, that they can review their child's personal information, direct you to delete it, and refuse to allow any further collection or use of the child's information, and the procedures to exercise their rights); (iv) give parents \"direct notice\" of your information practices before collecting information from their children; and (v) obtain the parents' \"verifiable consent\" before collecting, using or disclosing personal information from a child. For more information on the definition of these terms and how to make sure your website or online service is fully compliant with COPPA please visit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "https://www.ftc.gov/tips-advice/business\u0002center/guidance/childrens-online-privacy-protection-rule-six-step-compliance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, " FormSwift and its subsidiaries are in no way responsible for determining whether or not your company is in fact compliant with COPPA and takes no responsibility for the use you make of this Privacy Policy or for any potential liability your company may face in relation to any COPPA compliance issues");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyJ9 */", "body[_ngcontent-%COMP%] {\n      font-family: Arial, Helvetica, sans-serif;\n      font-size: 15px;\n      line-height: 22px;\n      color: rgb(49, 49, 49);\n    }\n\n    .wrapper[_ngcontent-%COMP%] {\n      width: 95%;\n      margin: 0 auto;\n    }\n\n    h2[_ngcontent-%COMP%] {\n      text-align: center;\n      font-size: 20px;\n    }\n\n    h3[_ngcontent-%COMP%] {\n      font-size: 18px;\n    }"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.username = "";
    }
    logout() {
        localStorage.removeItem('_is_admin_login');
        localStorage.removeItem("login_object");
        this.router.navigate(['/login']);
    }
    ngOnInit() {
        this.username = JSON.parse(localStorage.getItem("login_object")).name;
    }
    privacyPolicy() {
        this.router.navigate(['/privacy-policy']);
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 29, vars: 1, consts: [[1, "topbar"], [1, "navbar", "top-navbar", "navbar-expand-md", "navbar-dark"], [1, "navbar-header"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-md-none"], [1, "ti-menu", "ti-close"], [1, "navbar-brand"], ["href", "index.html", 1, "logo"], [1, "logo-text"], [1, "light-logo", 2, "color", "white"], [1, "logo-icon"], ["href", "javascript:void(0)", "data-sidebartype", "mini-sidebar", 1, "sidebartoggler", "d-none", "d-md-block"], [1, "mdi", "mdi-toggle-switch", "mdi-toggle-switch-off", "font-20"], ["href", "javascript:void(0)", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "topbartoggler", "d-block", "d-md-none", "waves-effect", "waves-light"], [1, "ti-more"], ["id", "navbarSupportedContent", 1, "navbar-collapse", "collapse"], [1, "navbar-nav", "float-left", "mr-auto"], [1, "navbar-nav", "float-right"], [1, "nav-item", "dropdown"], ["href", "#", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark", "pro-pic"], ["src", "./assets/images/users/default_img.jpg", "alt", "user", "width", "40", 1, "rounded-circle"], [1, "m-l-5", "font-medium", "d-none", "d-sm-inline-block", "ml-2"], [1, "mdi", "mdi-chevron-down"], [1, "dropdown-menu", "dropdown-menu-right", "user-dd", "animated", "flipInY"], [1, "profile-dis", "scrollable"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "MONUMENTAMERICA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "b", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_a_click_26_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.username, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "footer", "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "hLKW":
/*!************************************************************!*\
  !*** ./src/app/course-details/course-details.component.ts ***!
  \************************************************************/
/*! exports provided: CourseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsComponent", function() { return CourseDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../graphql/mutations */ "TGEI");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../graphql/queries */ "xsdW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-filter-pipe */ "VADE");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "Kb4U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _appPipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../appPipes/filter.pipe */ "nklq");














function CourseDetailsComponent_tbody_101_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function CourseDetailsComponent_tbody_101_div_11_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r11); const content_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r9.updateUnitStatus(content_r3.status, content_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx_r5.is_disabled);
} }
function CourseDetailsComponent_tbody_101_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function CourseDetailsComponent_tbody_101_ng_template_12_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r14); const content_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r12.updateUnitStatus(content_r3.status, content_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "span", 65);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx_r7.is_disabled);
} }
function CourseDetailsComponent_tbody_101_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](11, CourseDetailsComponent_tbody_101_div_11_Template, 3, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](12, CourseDetailsComponent_tbody_101_ng_template_12_Template, 2, 1, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function CourseDetailsComponent_tbody_101_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r16); const content_r3 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r15.updateUnit(content_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](16, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](18, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "swal", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("confirm", function CourseDetailsComponent_tbody_101_Template_swal_confirm_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r16); const content_r3 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r17.deleteUnit(content_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const content_r3 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](13);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](content_r3.unit_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](content_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", content_r3.status)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("swal", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("showCancelButton", true)("focusCancel", true);
} }
function CourseDetailsComponent_div_103_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, " No unit found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function CourseDetailsComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, CourseDetailsComponent_div_103_div_1_Template, 3, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind2"](2, 1, ctx_r1.content_units, ctx_r1.nameSearch).length === 0);
} }
function CourseDetailsComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
class CourseDetailsComponent {
    constructor(fb, toastr, router, filterPipe) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.filterPipe = filterPipe;
        this.dropdownList = [];
        this.selectedItems = [];
        this.files = [];
        this.url = "";
        this.content_unit_keyword = [];
        this.edit_unit_keyword = [];
        this.content_units = [];
        this.all_units = [];
        this.is_disabled = false;
        this.course_name = "";
        this.unit_file_name = "Choose File";
        this.nameSearch = "";
        this.showText = "";
        this.userFilter = { title: '', unit_no: '', keyword: '' };
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            unit_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            content_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            content_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.is_btn_disabled = false;
        this.btn_text = "Create Unit";
        this.model_title = "Add Unit";
        this.course_id = localStorage.getItem("course_id");
        //--------------Page Initialization function-------------------- 
        this.showMe = false;
    }
    ngOnInit() {
        this.showMe = false;
        this.hideText();
        this.noDatafound();
        this.showText = localStorage.getItem("changeText");
        // const course_id = localStorage.getItem("course_id");
        this.course_name = localStorage.getItem("course_name");
        this.getContentUnit(this.course_id);
        this.dropdownList = ["IT", "Software development", "BCA", "Mechnaical"];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    noDatafound() {
        setTimeout(() => {
            this.showMe = true;
        }, 2000);
    }
    hideText() {
        localStorage.setItem("changeText", "1");
    }
    inputChange() {
        localStorage.setItem("changeText", "0");
        this.showText = localStorage.getItem("changeText");
    }
    //------------------function called on onchange event of file upload----------------------------------
    handleFileInput(event) {
        this.files = [];
        this.files.push(event);
        $("#unit_file_name").html(this.files[0][0]["name"]);
        this.unit_file_name = this.files[0][0]["name"];
    }
    //------------------function to get all the non deleted course unit of a particular course----------------------------
    getContentUnit(course_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let filter1 = {
                deleted: {
                    eq: false // filter priority = 1
                },
                course_id: {
                    eq: course_id
                }
            };
            const units = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["listContentUnits"], variables: { filter: filter1, limit: 1000, sortDirection: 'ASC' } });
            this.content_units = units["data"]["listContentUnits"]["items"];
            this.all_units = units["data"]["listContentUnits"]["items"];
        });
    }
    //--------------function to create and update a course unit---------------------------
    onCreate(content_unit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let is_exits = this.dounitNumberExists(content_unit.unit_no);
            if (localStorage.getItem("is_edit_unit") == "true") {
                this.is_btn_disabled = true;
                this.btn_text = "Saving...";
                let unit_num = Number(String(content_unit.unit_no));
                let prev_unit_number = localStorage.getItem("unit_number");
                if (String(content_unit.unit_no) == "") {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter unit number");
                    return;
                }
                else if (content_unit.unit_no == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter unit number");
                    return;
                }
                else if (Number.isInteger(unit_num) == false) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Unit number must be a Number");
                    return;
                }
                else if (this.dounitNumberForEditExists(prev_unit_number, content_unit.unit_no) == 1) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Unit number already exists");
                    return;
                }
                else if (content_unit.title == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter unit title");
                    return;
                }
                else if (content_unit.title.trim() == "") {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter unit title");
                    return;
                }
                else if (content_unit.language == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please select the language");
                    return;
                }
                else if (content_unit.language == "") {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please select the language");
                    return;
                }
                else if (content_unit.keyword == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter keyword");
                    return;
                }
                else if (content_unit.keyword == "") {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter keyword");
                    return;
                }
                else if (content_unit.content_type == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please select content type");
                    return;
                }
                else if (content_unit.content_type == "") {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please select content type");
                    return;
                }
                else {
                    for (var i = 0; i < content_unit.keyword.length; i++) {
                        if (typeof (content_unit.keyword[i]) == "string") {
                            this.edit_unit_keyword.push(content_unit.keyword[i]);
                        }
                        else {
                            this.edit_unit_keyword.push(content_unit.keyword[i]["value"]);
                        }
                    }
                    content_unit.keyword = this.edit_unit_keyword.toString();
                    let edit_obj = JSON.parse(localStorage.getItem("edit_unit_object"));
                    if (this.files.length == 0) {
                        content_unit.content_name = edit_obj.content_name,
                            content_unit.content_url = edit_obj.content_url;
                    }
                    else if (this.files[0][0]['size'] > 100000000) {
                        this.is_btn_disabled = false;
                        this.btn_text = "Save";
                        this.toastr.error("Maximum file size allowed is 100MB");
                        return;
                    }
                    else if (this.files[0][0]['type'] == "image/jpeg" || this.files[0][0]['type'] == "image/png" || this.files[0][0]['type'] == "image/jpg" || this.files[0][0]['type'] == "application/pdf" || this.files[0][0]['type'] == "video/mp4" || this.files[0][0]['type'] == "video/mp4") {
                        content_unit.content_name = this.files[0][0]["name"];
                        const result = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Storage"].put(this.course_name.trim() + "/course_units/unit_" + content_unit.unit_no + "/" + this.files[0][0]["name"], this.files[0][0], {
                            level: 'public',
                            contentType: this.files[0][0]['type']
                        });
                        let key = result["key"];
                        const img_url = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Storage"].get(key);
                        content_unit.content_url = img_url.toString();
                    }
                    else {
                        this.is_btn_disabled = false;
                        this.btn_text = "Save";
                        this.toastr.error("Please upload a valid file");
                        return;
                    }
                    let update_unit_object = {
                        id: edit_obj.id,
                        content_name: content_unit.content_name,
                        content_type: content_unit.content_type,
                        content_url: content_unit.content_url,
                        keyword: content_unit.keyword,
                        title: content_unit.title,
                        unit_no: content_unit.unit_no,
                        language: content_unit.language,
                    };
                    const updatedobj = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["updateContentUnit"], variables: { input: update_unit_object } });
                    this.createForm.reset();
                    this.is_btn_disabled = true;
                    this.btn_text = "Edit Unit";
                    $("#addunitModal").modal('hide');
                    this.toastr.success("Unit Updated Successfully");
                    this.router.navigate([this.router.url]);
                    // window.location.reload();
                    this.getContentUnit(this.course_id);
                }
            }
            else {
                let unit_num = Number(String(content_unit.unit_no));
                if (content_unit.unit_no == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter unit number");
                    return;
                }
                else if (content_unit.unit_no == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter unit number");
                    return;
                }
                else if (String(content_unit.unit_no) == "") {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter unit number");
                    return;
                }
                else if (Number.isInteger(unit_num) == false) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Unit number must be a Number");
                    return;
                }
                else if (this.dounitNumberExists(content_unit.unit_no) == 1) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Unit number already exists");
                    return;
                }
                else if (content_unit.title == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter unit title");
                    return;
                }
                else if (content_unit.title.trim() == "") {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter unit title");
                    return;
                }
                else if (content_unit.language == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please select the language");
                    return;
                }
                else if (content_unit.language == "") {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please select the language");
                    return;
                }
                else if (content_unit.keyword == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter keyword");
                    return;
                }
                else if (content_unit.keyword == "") {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please enter keyword");
                    return;
                }
                else if (content_unit.content_type == null) {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please select content type");
                    return;
                }
                else if (content_unit.content_type == "") {
                    this.is_btn_disabled = false;
                    this.btn_text = "Save";
                    this.toastr.error("Please select content type");
                    return;
                }
                else {
                    if (this.files.length == 0) {
                        this.toastr.error("PLease select the file");
                        this.is_btn_disabled = false;
                        this.btn_text = "Save";
                        return;
                    }
                    else if (this.files[0][0]['size'] > 100000000) {
                        this.is_btn_disabled = false;
                        this.btn_text = "Save";
                        this.toastr.error("Maximum file size allowed is 100MB");
                        return;
                    }
                    else if (this.files[0][0]['type'] == "image/jpeg" || this.files[0][0]['type'] == "image/png" || this.files[0][0]['type'] == "image/jpg" || this.files[0][0]['type'] == "application/pdf" || this.files[0][0]['type'] == "video/mp4" || this.files[0][0]['type'] == "video/avi" || this.files[0][0]['type'] == "PDF") {
                        this.is_btn_disabled = true;
                        this.btn_text = "Saving...";
                        var cousre_id1 = JSON.stringify(localStorage.getItem("course_id"));
                        cousre_id1 = cousre_id1.substring(1, cousre_id1.length - 1);
                        content_unit.course_id = cousre_id1;
                        content_unit.uploaded_by = JSON.parse(localStorage.getItem("login_object")).id;
                        content_unit.status = true;
                        content_unit.deleted = false;
                        content_unit.content_name = this.files[0][0]["name"];
                        const result = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Storage"].put(this.course_name.trim() + "/course_units/unit_" + content_unit.unit_no + "/" + this.files[0][0]["name"], this.files[0][0], {
                            level: 'public',
                            contentType: this.files[0][0]['type']
                        });
                        let key = result["key"];
                        const img_url = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Storage"].get(key);
                        content_unit.content_url = img_url.toString();
                        for (var i = 0; i < content_unit.keyword.length; i++) {
                            this.content_unit_keyword.push(content_unit.keyword[i]["value"]);
                        }
                        content_unit.keyword = this.content_unit_keyword.toString();
                        const newContent = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["createContentUnit"], variables: { input: content_unit } });
                        this.createForm.reset();
                        this.btn_text = "Create Unit";
                        this.is_btn_disabled = false;
                        $("#addunitModal").modal('hide');
                        this.toastr.success("Unit Created Successfully");
                        // window.location.reload();
                        this.getContentUnit(this.course_id);
                    }
                    else {
                        this.is_btn_disabled = false;
                        this.btn_text = "Save";
                        this.toastr.error("Please upload a valid file");
                    }
                }
            }
        });
    }
    dounitNumberExists(unit_num) {
        var flag = 0;
        for (var i = 0; i < this.content_units.length; i++) {
            if (this.content_units[i]["unit_no"] == unit_num) {
                flag = 1;
                return flag;
            }
        }
        return flag;
    }
    dounitNumberForEditExists(prev_unit_num, unit_num) {
        var flag = 0;
        if (prev_unit_num == unit_num) {
            return flag;
        }
        for (var i = 0; i < this.content_units.length; i++) {
            if (this.content_units[i]["unit_no"] == unit_num) {
                flag = 1;
                return flag;
            }
        }
        return flag;
    }
    //---------------function to open a add unit modal section------------------
    openModal() {
        this.model_title = "Add Unit";
        this.btn_text = "Save ";
        $("#unit_file_name").html("Choose File");
        this.createForm.reset();
        localStorage.setItem("is_edit_unit", "false");
        $("#addunitModal").modal('show');
    }
    //---------------function to open a close unit modal section------------------
    closeModal() {
        this.createForm.reset();
        this.files = [];
    }
    //-----------function to set is_edit_unit variable which is used to identify if a new course unit is added or a course is updated------
    setStatus(status) {
        if (status == "true") {
            localStorage.setItem("is_edit_unit", "true");
        }
        else {
            localStorage.setItem("is_edit_unit", "false");
        }
    }
    //-----------------function to set all the feilds of a course unit that has to be updated-----------
    updateUnit(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.setStatus("true");
            this.model_title = "Edit unit";
            this.btn_text = "Save ";
            localStorage.setItem("is_edit_unit", "true");
            const res = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["getContentUnit"], variables: { id } });
            let key = res["data"]["getContentUnit"]["keyword"].split(",");
            // -------------Setting edit object---------------------------
            let edit_object = {
                "content_name": res["data"]["getContentUnit"]["content_name"],
                "content_type": res["data"]["getContentUnit"]["content_type"],
                "content_url": res["data"]["getContentUnit"]["content_url"],
                "id": res["data"]["getContentUnit"]["id"],
                "version": res["data"]["getContentUnit"]["_version"]
            };
            localStorage.setItem("edit_unit_object", JSON.stringify(edit_object));
            this.createForm.controls['title'].setValue(res["data"]["getContentUnit"]["title"]);
            this.createForm.controls['keyword'].setValue(key);
            this.createForm.controls['content_type'].setValue(res["data"]["getContentUnit"]["content_type"]);
            this.createForm.controls['language'].setValue(res["data"]["getContentUnit"]["language"]);
            this.createForm.controls['unit_no'].setValue(res["data"]["getContentUnit"]["unit_no"]);
            localStorage.setItem("unit_number", res["data"]["getContentUnit"]["unit_no"]);
            $("#unit_file_name").html(res["data"]["getContentUnit"]["content_name"]);
            $("#addunitModal").modal('show');
        });
    }
    // function to delete a particular course unit
    deleteUnit(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const deleteObj = {
                id: id,
                deleted: true,
                status: false,
            };
            const deletedRes = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["updateContentUnit"], variables: { input: deleteObj } });
            if (deletedRes["data"]["updateContentUnit"]["deleted"]) {
                this.toastr.success("Course deleted succesfuly");
            }
            else {
                this.toastr.error("Something went wrong");
            }
            this.getContentUnit(this.course_id);
        });
    }
    // function to update the active status of a particular course unit
    updateUnitStatus(status, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.is_disabled = true;
            if (status == true) {
                status = false;
            }
            else {
                status = true;
            }
            const getRes = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["getContentUnit"], variables: { id: id } });
            const updateObj = {
                id: id,
                status: status
            };
            const statusRes = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["API"].graphql({ query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["updateContentUnit"], variables: { input: updateObj } });
            this.getContentUnit(getRes["data"]["getContentUnit"]["course_id"]);
            if (status == true) {
                this.toastr.success("Unit activated succesfuly");
            }
            else {
                this.toastr.success("Unit deactivated succesfuly");
            }
            this.is_disabled = false;
        });
    }
}
CourseDetailsComponent.??fac = function CourseDetailsComponent_Factory(t) { return new (t || CourseDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"])); };
CourseDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: CourseDetailsComponent, selectors: [["app-course-details"]], decls: 106, vars: 15, consts: [[1, "page-wrapper"], [1, "page-breadcrumb"], [1, "row"], [1, "col-9", "align-self-center"], [1, "page-title"], [1, "d-flex", "align-items-center", "justify-content-start"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/dashboard"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-3", "align-self-center"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text", "pt-0", "pb-0", 2, "border-radius", "20px 0 0 20px", "background", "#fff"], [1, "mdi", "mdi-magnify", "font-20"], ["type", "text", "placeholder", "Search..", "aria-describedby", "basic-addon1", 1, "form-control", 2, "border-radius", "0 20px 20px 0", 3, "ngModel", "ngModelChange", "keyup"], [1, "container-fluid"], ["id", "addunitModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "example-email"], [1, "help"], ["type", "text", "id", "example-email", "name", "example-email", "placeholder", "", "formControlName", "unit_no", 1, "form-control"], ["type", "text", "id", "example-email", "name", "example-email", "placeholder", "", "formControlName", "title", 1, "form-control"], ["id", "inlineFormCustomSelect", "formControlName", "language", 1, "custom-select", "col-12"], ["selected", ""], [1, "custom_tag"], ["formControlName", "keyword", 3, "placeholder", "secondaryPlaceholder"], ["id", "inlineFormCustomSelect", "formControlName", "content_type", 1, "custom-select", "col-12"], [1, "custom-file"], ["type", "file", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", "id", "unit_file_name", 1, "custom-file-label"], ["type", "submit", 1, "btn", "btn-info", "float-right", "border", 3, "disabled"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "float-left"], ["type", "button", 1, "btn", "waves-effect", "waves-light", "float-right", "btn-rounded", "btn-info", 3, "click"], [1, "fa", "fas", "fa-plus"], [1, "table-responsive"], [1, "table", "v-middle"], [1, "border-top-0"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "justify-content-center mx-auto", "style", "text-align: center;", 4, "ngIf"], [1, "chat-windows"], ["href", "javascript:void(0)", 1, "link"], [1, "switch", "mb-0"], [4, "ngIf", "ngIfElse"], ["other_content", ""], ["href", "javascript:void(0)", 1, "text-info", "mr-3", 3, "click"], [1, "fas", "fa-edit"], ["href", "javascript:void(0)", 1, "text-danger", 3, "swal"], [1, "far", "fa-trash-alt", "remove-note"], ["title", "Delete?", "text", "This unit will be deleted permanently", "icon", "question", 3, "showCancelButton", "focusCancel", "confirm"], ["deleteSwal", ""], ["type", "checkbox", "checked", "", 3, "disabled", "click"], [1, "slider"], ["type", "checkbox", 3, "disabled", "click"], [1, "justify-content-center", "mx-auto", 2, "text-align", "center"]], template: function CourseDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "Course Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13, "Course Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function CourseDetailsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.nameSearch = $event; })("keyup", function CourseDetailsComponent_Template_input_keyup_19_listener() { return ctx.inputChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function CourseDetailsComponent_Template_button_click_27_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](29, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngSubmit", function CourseDetailsComponent_Template_form_ngSubmit_31_listener() { return ctx.onCreate(ctx.createForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](34, "Unit No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](35, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](36, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](38, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](39, "Unit Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](40, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](41, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](44, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](45, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](47, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](49, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](50, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](51, "Hindi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](52, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](53, "Spanish");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](55, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](56, "Keywords ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](57, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](59, "tag-input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](62, "Content Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](63, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](64, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](65, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](66, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](67, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](68, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](69, "IMAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](70, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](71, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](73, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](74, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function CourseDetailsComponent_Template_input_change_74_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](75, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](78, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](81, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](83, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](84, "h4", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](86, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function CourseDetailsComponent_Template_button_click_86_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](87, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](88, " Add Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](89, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](90, "table", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](91, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](92, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](93, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](94, "Course Unit No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](95, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](96, "Unit Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](97, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](98, "Enable/Disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](99, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](100, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](101, CourseDetailsComponent_tbody_101_Template, 21, 7, "tbody", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](102, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](103, CourseDetailsComponent_div_103_Template, 3, 4, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](104, CourseDetailsComponent_div_104_Template, 3, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](105, "div", 53);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.nameSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.model_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.createForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("placeholder", "Add new keword")("secondaryPlaceholder", "Enter the Keyword");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.unit_file_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx.is_btn_disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.btn_text);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.course_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind2"](102, 12, ctx.content_units, ctx.nameSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.showText == "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.content_units.length == 0 && ctx.showMe);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_z"], ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_11__["SwalDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_11__["SwalComponent"]], pipes: [_appPipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "nklq":
/*!*****************************************!*\
  !*** ./src/app/appPipes/filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(value, searchTerm) {
        return value.filter(function (search) {
            return search.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || search.keyword.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
}
FilterPipe.??fac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "filter", type: FilterPipe, pure: true });


/***/ }),

/***/ "ptTY":
/*!**********************************************!*\
  !*** ./src/app/default/default.component.ts ***!
  \**********************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DefaultComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefaultComponent.??fac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(); };
DefaultComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 2, vars: 0, template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "default works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "rzrB":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_appsync_graphqlEndpoint": "https://vupmeplv5jdqxan6lo3qkkcjme.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-uc7shrnrkfgkpmjutlbg2gcvbq",
    "aws_cognito_identity_pool_id": "us-east-1:de98985e-4b16-4eb6-8745-408d28694e8e",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_gQCDitNln",
    "aws_user_pools_web_client_id": "71fmu4t3r25snilftstrfdvc7k",
    "oauth": {
        "domain": "monumentamericasnewbe05d254-be05d254-dev.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "myapp://callback/",
        "redirectSignOut": "myapp://signout/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [
        "FACEBOOK",
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "monumentamericasnew5e37c959ac06467795da774fcbbb150826-dev",
    "aws_user_files_s3_bucket_region": "us-east-1"
};
/* harmony default export */ __webpack_exports__["default"] = (awsmobile);


/***/ }),

/***/ "uswQ":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");





class LayoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.login_object = localStorage.getItem("login_object");
        console.log("-----------------");
        console.log(this.login_object);
        console.log([this.router.url]);
        console.log("-----------------");
        if (!this.login_object) {
            this.router.navigate(['/login']);
        }
        else if (this.router.url == "/") {
            this.router.navigate(['/dashboard']);
        }
        else {
            this.router.navigate([this.router.url]);
        }
    }
}
LayoutComponent.??fac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LayoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 5, vars: 0, consts: [["id", "main-wrapper"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-details/course-details.component */ "hLKW");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses/courses.component */ "C7aP");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "dEEo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [{
        path: "login",
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"],
    },
    // {
    //   path : "**",path : "**",
    //   redirectTo: 'login',
    //   pathMatch: 'full'
    // },
    { path: "privacy-policy", component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyComponent"] },
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'upload-course', component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_3__["CoursesComponent"] },
            { path: 'course-detail', component: _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_2__["CourseDetailsComponent"] },
        ]
    }];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xsdW":
/*!********************************!*\
  !*** ./src/graphql/queries.ts ***!
  \********************************/
/*! exports provided: getUser, listUsers, getContent, listContents, getAdminUser, listAdminUsers, getCompany, listCompanies, getFilter, listFilters, getContentUnit, listContentUnits, getContentByUnitNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listUsers", function() { return listUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return getContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listContents", function() { return listContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminUser", function() { return getAdminUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAdminUsers", function() { return listAdminUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompany", function() { return getCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listCompanies", function() { return listCompanies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilter", function() { return getFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listFilters", function() { return listFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentUnit", function() { return getContentUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listContentUnits", function() { return listContentUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentByUnitNumber", function() { return getContentByUnitNumber; });
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      login_type
      full_name
      email
      phone
      password
      otp
      email_validation_token
      login_with
      email_validation_token_timestamp
      forgot_password_token
      forgot_password_token_timestamp
      selected_filters
      subscription_type
      subscription_date
      subscription_expire
      subscription_id
      is_email_valid
      is_phone_valid
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        login_type
        full_name
        email
        phone
        password
        otp
        email_validation_token
        login_with
        email_validation_token_timestamp
        forgot_password_token
        forgot_password_token_timestamp
        selected_filters
        subscription_type
        subscription_date
        subscription_expire
        subscription_id
        is_email_valid
        is_phone_valid
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      title
      subject
      keyword
      author
      language
      organization_name
      content_type
      content_name
      content_url
      uploaded_by
      upload_time
      description
      premium
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subject
        keyword
        author
        language
        organization_name
        content_type
        content_name
        content_url
        uploaded_by
        upload_time
        description
        premium
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
const getAdminUser = /* GraphQL */ `
  query GetAdminUser($id: ID!) {
    getAdminUser(id: $id) {
      id
      name
      email
      phone
      password
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const listAdminUsers = /* GraphQL */ `
  query ListAdminUsers(
    $filter: ModelAdminUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        password
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
const getFilter = /* GraphQL */ `
  query GetFilter($id: ID!) {
    getFilter(id: $id) {
      id
      filter
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const listFilters = /* GraphQL */ `
  query ListFilters(
    $filter: ModelFilterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        filter
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
const getContentUnit = /* GraphQL */ `
  query GetContentUnit($id: ID!) {
    getContentUnit(id: $id) {
      id
      course_id
      unit_no
      title
      keyword
      language
      content_type
      content_name
      content_url
      uploaded_by
      upload_time
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
const listContentUnits = /* GraphQL */ `
  query ListContentUnits(
    $filter: ModelContentUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        course_id
        unit_no
        title
        keyword
        language
        content_type
        content_name
        content_url
        uploaded_by
        upload_time
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
const getContentByUnitNumber = /* GraphQL */ `
  query GetContentByUnitNumber(
    $course_id: String
    $unit_no: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContentUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getContentByUnitNumber(
      course_id: $course_id
      unit_no: $unit_no
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        course_id
        unit_no
        title
        keyword
        language
        content_type
        content_name
        content_url
        uploaded_by
        upload_time
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;


/***/ }),

/***/ "zNG6":
/*!************************************************!*\
  !*** ./src/app/appPipes/course-filter.pipe.ts ***!
  \************************************************/
/*! exports provided: CourseFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseFilterPipe", function() { return CourseFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CourseFilterPipe {
    transform(value, searchTerm) {
        return value.filter(function (search) {
            return search.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
}
CourseFilterPipe.??fac = function CourseFilterPipe_Factory(t) { return new (t || CourseFilterPipe)(); };
CourseFilterPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "courseFilter", type: CourseFilterPipe, pure: true });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aws-exports */ "rzrB");






aws_amplify__WEBPACK_IMPORTED_MODULE_4__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Amplify.configure(aws_exports);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map