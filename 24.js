(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "CLig":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-link.entry.js ***!
  \********************************************************************************/
/*! exports provided: amplify_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_link", function() { return AmplifyLink; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");


const amplifyLinkCss = ":host{--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade)}.link{color:var(--link-color);cursor:pointer}.link:link{color:var(--link-color);text-decoration:none}.link:hover{color:var(--link-hover);text-decoration:underline}.link:active{color:var(--link-active);text-decoration:underline}";

const AmplifyLink = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The link role is used to identify an element that creates a hyperlink to a resource that is in the application or external */
        this.role = 'navigation';
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "link", role: this.role }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    get el() { return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
AmplifyLink.style = amplifyLinkCss;




/***/ })

}]);
//# sourceMappingURL=24.js.map