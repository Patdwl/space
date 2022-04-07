"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_sensorSurv_sensorSurv_ts"],{

/***/ "./src/js/plugins/sensorSurv/sensorSurv.ts":
/*!*************************************************!*\
  !*** ./src/js/plugins/sensorSurv/sensorSurv.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick)
/* harmony export */ });
/* harmony import */ var _app_img_icons_fence_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/fence.png */ "./src/img/icons/fence.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/**
 * /////////////////////////////////////////////////////////////////////////////
 *
 * externalSources.ts is a plugin to allow downloading and parsing of external
 * data sources from the internet.
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



const uiManagerInit = () => {
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-surveillance" class="bmenu-item bmenu-item-disabled">
          <img
            alt="fence"
            src=""
            delayedsrc="${_app_img_icons_fence_png__WEBPACK_IMPORTED_MODULE_0__}"
          />
          <span class="bmenu-title">Sesnor Fence</span>
          <div class="status-icon"></div>
        </div>
      `);
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'sensorFov',
        cb: uiManagerInit,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'sensorFov',
        cb: bottomMenuClick,
    });
};
const bottomMenuClick = (iconName) => {
    const { sensorManager, satSet, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (iconName === 'menu-surveillance') {
        if (!sensorManager.checkSensorSelected()) {
            // No Sensor Selected
            if (settingsManager.plugins.topMenu)
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.adviceManager.adviceList.survFenceDisabled();
            uiManager.toast(`Select a Sensor First!`, 'caution');
            if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-surveillance:animated').length) {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-surveillance').effect('shake', {
                    distance: 10,
                });
            }
            return;
        }
        if (settingsManager.isShowSurvFence) {
            settingsManager.isShowSurvFence = false;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-surveillance').removeClass('bmenu-item-selected');
            satSet.satCruncher.postMessage({
                isShowSurvFence: 'disable',
                isShowFOVBubble: 'reset',
            });
            return;
        }
        else {
            // Disable Satellite Overfly
            settingsManager.isSatOverflyModeOn = false;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-sat-fov').removeClass('bmenu-item-selected');
            settingsManager.isShowSurvFence = true;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-surveillance').addClass('bmenu-item-selected');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-fov-bubble').removeClass('bmenu-item-selected');
            satSet.satCruncher.postMessage({
                isShowFOVBubble: 'enable',
                isShowSurvFence: 'enable',
            });
            satSet.satCruncher.postMessage({
                typ: 'isShowSatOverfly',
                isShowSatOverfly: 'reset',
            });
            return;
        }
    }
};


/***/ }),

/***/ "./src/img/icons/fence.png":
/*!*********************************!*\
  !*** ./src/img/icons/fence.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5916baadcc8bf94dd44b.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_sensorSurv_sensorSurv_ts.f6196081c8feebc1be72.js.map