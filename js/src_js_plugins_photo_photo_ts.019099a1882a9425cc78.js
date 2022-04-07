"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_photo_photo_ts"],{

/***/ "./src/js/plugins/photo/photo.ts":
/*!***************************************!*\
  !*** ./src/js/plugins/photo/photo.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rightBtnMenuAdd": () => (/* binding */ rightBtnMenuAdd),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "rmbMenuActions": () => (/* binding */ rmbMenuActions),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "saveHiResPhoto": () => (/* binding */ saveHiResPhoto)
/* harmony export */ });
/* harmony import */ var _app_img_icons_camera_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/camera.png */ "./src/img/icons/camera.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/**
 * /////////////////////////////////////////////////////////////////////////////
 *
 * planetarium.ts is a plugin for showing the satellites above from the perspective
 * of a view on the earth.
 *
 * http://keeptrack.space
 *
 * @Copyright (C) 2016-2022 Theodore Kruczek
 *
 * KeepTrack is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * KeepTrack is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with
 * KeepTrack. If not, see <http://www.gnu.org/licenses/>.
 *
 * TESTING: This plugin requires php to be installed on the server. It won't work
 * with the default http npm module.
 *
 * /////////////////////////////////////////////////////////////////////////////
 */



const rightBtnMenuAdd = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#right-btn-menu-ul').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `   
            <li class="rmb-menu-item" id="save-rmb"><a href="#">Save Image &#x27A4;</a></li>
          `);
};
const uiManagerInit = () => {
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-photo" class="bmenu-item">
          <img
            alt="camera"
            src=""
            delayedsrc="${_app_img_icons_camera_png__WEBPACK_IMPORTED_MODULE_0__}"
          />
          <span class="bmenu-title">Take Photo</span>
          <div class="status-icon"></div>
        </div>
      `);
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'rightBtnMenuAdd',
        cbName: 'photo',
        cb: rightBtnMenuAdd,
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#rmb-wrapper').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="save-rmb-menu" class="right-btn-menu">
          <ul class='dropdown-contents'>
            <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
            <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
            <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
          </ul>
        </div>
      `);
};
const rmbMenuActions = (iconName) => {
    switch (iconName) {
        case 'save-hd-rmb':
            saveHiResPhoto('hd');
            break;
        case 'save-4k-rmb':
            saveHiResPhoto('4k');
            break;
        case 'save-8k-rmb':
            saveHiResPhoto('8k');
            break;
    }
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-photo') {
        saveHiResPhoto('4k');
    }
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'photo',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'photo',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'rmbMenuActions',
        cbName: 'editSat',
        cb: rmbMenuActions,
    });
};
const saveHiResPhoto = (resolution) => {
    switch (resolution) {
        case 'hd':
            settingsManager.hiResWidth = 1920;
            settingsManager.hiResHeight = 1080;
            break;
        case '4k':
            settingsManager.hiResWidth = 3840;
            settingsManager.hiResHeight = 2160;
            break;
        case '8k':
            settingsManager.hiResWidth = 7680;
            settingsManager.hiResHeight = 4320;
            break;
    }
    settingsManager.screenshotMode = true;
};


/***/ }),

/***/ "./src/img/icons/camera.png":
/*!**********************************!*\
  !*** ./src/img/icons/camera.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9922067afa8c01637551.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_photo_photo_ts.019099a1882a9425cc78.js.map