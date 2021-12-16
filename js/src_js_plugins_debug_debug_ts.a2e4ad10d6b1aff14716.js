"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_debug_debug_ts"],{

/***/ "./src/js/plugins/debug/debug.ts":
/*!***************************************!*\
  !*** ./src/js/plugins/debug/debug.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "defaultPositionSelector": () => (/* binding */ defaultPositionSelector),
/* harmony export */   "canClick": () => (/* binding */ canClick),
/* harmony export */   "startGremlins": () => (/* binding */ startGremlins),
/* harmony export */   "runGremlins": () => (/* binding */ runGremlins),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var gremlins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gremlins.js */ "./node_modules/gremlins.js/dist/gremlins.min.js");
/* harmony import */ var gremlins_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gremlins_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
// @ts-ignore-next-line


/*
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
    min = Number.isNaN(min) ? 0 : Math.ceil(min);
    max = Number.isNaN(max) ? 100 : Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const defaultPositionSelector = () => {
    const x = getRandomInt(0, Math.max(0, document.documentElement.clientWidth - 1));
    const y = getRandomInt(Math.max(0, document.documentElement.clientHeight - 100), Math.max(0, document.documentElement.clientHeight - 1));
    return [x, y];
};
const canClick = (element) => {
    if (typeof element.parentElement == 'undefined' || element.parentElement == null)
        return null;
    return element.parentElement.className === 'bmenu-item';
};
const startGremlins = () => {
    const bottomMenuGremlinClicker = gremlins_js__WEBPACK_IMPORTED_MODULE_0__.species.clicker({
        // Click only if parent is has class test-class
        canClick: canClick,
        defaultPositionSelector: defaultPositionSelector,
    });
    const bottomMenuGremlinScroller = gremlins_js__WEBPACK_IMPORTED_MODULE_0__.species.toucher({
        touchTypes: ['gesture'],
        defaultPositionSelector: defaultPositionSelector,
    });
    const distributionStrategy = gremlins_js__WEBPACK_IMPORTED_MODULE_0__.strategies.distribution({
        distribution: [0.3, 0.3, 0.1, 0.1, 0.1, 0.1],
        delay: 5, // wait 5 ms between each action
    });
    gremlins_js__WEBPACK_IMPORTED_MODULE_0__.createHorde({
        species: [
            bottomMenuGremlinClicker,
            bottomMenuGremlinScroller,
            gremlins_js__WEBPACK_IMPORTED_MODULE_0__.species.clicker(),
            gremlins_js__WEBPACK_IMPORTED_MODULE_0__.species.toucher(),
            gremlins_js__WEBPACK_IMPORTED_MODULE_0__.species.formFiller(),
            gremlins_js__WEBPACK_IMPORTED_MODULE_0__.species.typer(),
        ],
        mogwais: [gremlins_js__WEBPACK_IMPORTED_MODULE_0__.mogwais.alert(), gremlins_js__WEBPACK_IMPORTED_MODULE_0__.mogwais.fps(), gremlins_js__WEBPACK_IMPORTED_MODULE_0__.mogwais.gizmo({ maxErrors: 1000 })],
        strategies: [distributionStrategy],
    })
        .unleash();
};
const runGremlins = () => {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#nav-footer').height(200);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#nav-footer-toggle').hide();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons-container').height(200);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').height(200);
    startGremlins();
};
//Global Debug Manager
const init = () => {
    const db = {
        gremlinsSettings: {
            nb: 100000,
            delay: 5,
        },
        gremlins: runGremlins,
    };
    settingsManager.db = db;
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_debug_debug_ts.a2e4ad10d6b1aff14716.js.map