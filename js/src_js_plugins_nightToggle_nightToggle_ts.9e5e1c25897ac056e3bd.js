"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_nightToggle_nightToggle_ts"],{

/***/ "./src/js/plugins/nightToggle/nightToggle.ts":
/*!***************************************************!*\
  !*** ./src/js/plugins/nightToggle/nightToggle.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_img_icons_day_night_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/day-night.png */ "./src/img/icons/day-night.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'nightToggle',
        cb: () => {
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-day-night" class="bmenu-item">
          <img alt="day-night" src="" delayedsrc=${_app_img_icons_day_night_png__WEBPACK_IMPORTED_MODULE_0__}/>
          <span class="bmenu-title">Night Toggle</span>
          <div class="status-icon"></div>
        </div>
      `);
            settingsManager.isDayNightToggle = false;
        },
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'nightToggle',
        cb: (iconName) => {
            if (iconName === 'menu-day-night') {
                if (settingsManager.isDayNightToggle) {
                    settingsManager.isDayNightToggle = false;
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-day-night').removeClass('bmenu-item-selected');
                    return;
                }
                else {
                    settingsManager.isDayNightToggle = true;
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-day-night').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'nightToggle',
        cbName: 'nightToggle',
        cb: (gl, nightTexture, texture) => {
            if (!settingsManager.isDayNightToggle) {
                gl.bindTexture(gl.TEXTURE_2D, nightTexture);
            }
            else {
                gl.bindTexture(gl.TEXTURE_2D, texture);
            }
        },
    });
};


/***/ }),

/***/ "./src/img/icons/day-night.png":
/*!*************************************!*\
  !*** ./src/img/icons/day-night.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ba33d8ce9ad0e7a825f.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_nightToggle_nightToggle_ts.9e5e1c25897ac056e3bd.js.map