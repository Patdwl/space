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
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* */


let isLaunchMenuOpen = true;
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'launchCalendar',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'launchCalendar',
        cb: bottomMenuClick,
    });
    // Might be unnecessary
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'launchCalendar',
        cb: hideSideMenus,
    });
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-launches') {
        if (isLaunchMenuOpen) {
            isLaunchMenuOpen = false;
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.hideSideMenus();
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.searchToggle(false);
            settingsManager.isPreventColorboxClose = true;
            setTimeout(function () {
                settingsManager.isPreventColorboxClose = false;
            }, 2000);
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.hideSideMenus();
            try {
                if (location.protocol === 'https:') {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default().colorbox({
                        href: 'https://space.skyrocket.de/doc_chr/lau2020.htm',
                        iframe: true,
                        width: '80%',
                        height: '80%',
                        fastIframe: false,
                        closeButton: false,
                    });
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default().colorbox({
                        href: 'http://space.skyrocket.de/doc_chr/lau2020.htm',
                        iframe: true,
                        width: '80%',
                        height: '80%',
                        fastIframe: false,
                        closeButton: false,
                    });
                }
            }
            catch (error) {
                // console.debug(error);
            }
            isLaunchMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-launches').addClass('bmenu-item-selected');
            return;
        }
    }
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-launches').removeClass('bmenu-item-selected');
};
const cboxClosed = () => {
    if (isLaunchMenuOpen) {
        isLaunchMenuOpen = false;
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-launches').removeClass('bmenu-item-selected');
    }
};
const uiManagerInit = () => {
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
    <div id="menu-launches" class="bmenu-item">
      <img alt="calendar2" src="" delayedsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABRUlEQVR4nO3cQWoCQRBAUQ25Tna5/wmy80BmFXDhgIPp/u343jIEHfhU05YkpxMAAAAA7+I8882+fq7Xez+/fJ+nPsefFZ7nY9YbcZ8AsadGbWuE380zR5YJiAkQEyAmQEyA2OeIF926FazwwefW3ucZceszATEBYkOOoC3VUbNlhecxATEBYkOOIDuix5mAmAAxAWICxASITd0FvTq7oAMSICZATICYALGp6+i9/usbq5W/oTMBMQFiAsQEiAkQW/oWtPc2Mvr3RzABMQFiSx9Bj9i7Il7h2LllAmICxKYeQavtauyCEKAmQEyAmACxpf9AY/RtZIUPZSYgJkDs5XdBKxwjzzABMQFih9oFrbDb2csExASICRATICZA7FC7oJVvO1tMQEyAmAAxAWICxPy/oJgJiAkQEyAmQEwAAAAAAAA4vl/1Vlb9QHsXDQAAAABJRU5ErkJggg==">
      <span class="bmenu-title">Launch Calendar</span>
      <div class="status-icon"></div>
    </div> 
  `);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('cbox_closed', cboxClosed);
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_launchCalendar_launchCalendar_ts.9dba486c5a9d4c952fc8.js.map