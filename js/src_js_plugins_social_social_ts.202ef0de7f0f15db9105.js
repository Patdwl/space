"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_social_social_ts"],{

/***/ "./src/js/plugins/social/social.ts":
/*!*****************************************!*\
  !*** ./src/js/plugins/social/social.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_img_icons_github_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/github.png */ "./src/img/icons/github.png");
/* harmony import */ var _app_img_icons_twitter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/img/icons/twitter.png */ "./src/img/icons/twitter.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'uiManagerFinal',
        cbName: 'social',
        cb: () => {
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('#nav-mobile2').prepend(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html `
        <li>
          <a id="github-share1" class="top-menu-btns" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            width="22"
            height="22"
            style="margin-top: 1px;"
            src="" delayedsrc="${_app_img_icons_github_png__WEBPACK_IMPORTED_MODULE_0__}" 
            />
          </a>
        </li>
        <li>
          <a id="twitter-share1" class="top-menu-btns" rel="noreferrer" href="https://twitter.com/intent/tweet?text=http://keeptrack.space" target="_blank">
            <img
            width="25"
            height="25"
            src="" delayedsrc="${_app_img_icons_twitter_png__WEBPACK_IMPORTED_MODULE_1__}" 
            />
          </a>
        </li>
      `);
        },
    });
};


/***/ }),

/***/ "./src/img/icons/github.png":
/*!**********************************!*\
  !*** ./src/img/icons/github.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b19bd5173055b273572.png";

/***/ }),

/***/ "./src/img/icons/twitter.png":
/*!***********************************!*\
  !*** ./src/img/icons/twitter.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfaf75a75f28d9de4b6d.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_social_social_ts.202ef0de7f0f15db9105.js.map