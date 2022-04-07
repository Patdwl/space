"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_launchCalendar_launchCalendar_ts"],{

/***/ "./src/js/plugins/launchCalendar/launchCalendar.ts":
/*!*********************************************************!*\
  !*** ./src/js/plugins/launchCalendar/launchCalendar.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "cboxClosed": () => (/* binding */ cboxClosed),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit)
/* harmony export */ });
/* harmony import */ var _app_img_icons_calendar_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/calendar.png */ "./src/img/icons/calendar.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* */



let isLaunchMenuOpen = true;
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'launchCalendar',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'launchCalendar',
        cb: bottomMenuClick,
    });
    // Might be unnecessary
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'launchCalendar',
        cb: hideSideMenus,
    });
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-launches') {
        if (isLaunchMenuOpen) {
            isLaunchMenuOpen = false;
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.searchToggle(false);
            settingsManager.isPreventColorboxClose = true;
            setTimeout(function () {
                settingsManager.isPreventColorboxClose = false;
            }, 2000);
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
            try {
                jquery__WEBPACK_IMPORTED_MODULE_2___default().colorbox({
                    href: 'https://space.skyrocket.de/doc_chr/lau2020.htm',
                    iframe: true,
                    width: '80%',
                    height: '80%',
                    fastIframe: false,
                    closeButton: false,
                });
            }
            catch (error) {
                // DEBUG:
                // console.debug(error);
            }
            isLaunchMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-launches').addClass('bmenu-item-selected');
            return;
        }
    }
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-launches').removeClass('bmenu-item-selected');
};
const cboxClosed = () => {
    if (isLaunchMenuOpen) {
        isLaunchMenuOpen = false;
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-launches').removeClass('bmenu-item-selected');
    }
};
const uiManagerInit = () => {
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
    <div id="menu-launches" class="bmenu-item">
      <img alt="calendar2" src="" delayedsrc="${_app_img_icons_calendar_png__WEBPACK_IMPORTED_MODULE_0__}" />
      <span class="bmenu-title">Launch Calendar</span>
      <div class="status-icon"></div>
    </div> 
  `);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('cbox_closed', cboxClosed);
};


/***/ }),

/***/ "./src/img/icons/calendar.png":
/*!************************************!*\
  !*** ./src/img/icons/calendar.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eff3c8a9e9fb37bba6c1.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_launchCalendar_launchCalendar_ts.753103bf18e7ed0538a5.js.map