"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_sensorFov_sensorFov_ts"],{

/***/ "./src/js/plugins/sensorFov/sensorFov.ts":
/*!***********************************************!*\
  !*** ./src/js/plugins/sensorFov/sensorFov.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "enableFovView": () => (/* binding */ enableFovView),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick)
/* harmony export */ });
/* harmony import */ var _app_img_icons_fov_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/fov.png */ "./src/img/icons/fov.png");
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
        <div id="menu-fov-bubble" class="bmenu-item bmenu-item-disabled">
          <img
            alt="fov"
            src=""
            delayedsrc=${_app_img_icons_fov_png__WEBPACK_IMPORTED_MODULE_0__}/>
          <span class="bmenu-title">Sensor FOV</span>
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
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.sensorFov = {
        enableFovView,
    };
};
const enableFovView = () => {
    const { satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    // Disable Satellite Overfly
    settingsManager.isSatOverflyModeOn = false;
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-sat-fov').removeClass('bmenu-item-selected');
    settingsManager.isFOVBubbleModeOn = true;
    settingsManager.isShowSurvFence = false;
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-fov-bubble').addClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-surveillance').removeClass('bmenu-item-selected');
    satSet.satCruncher.postMessage({
        isShowFOVBubble: 'enable',
        isShowSurvFence: 'disable',
    });
    satSet.satCruncher.postMessage({
        typ: 'isShowSatOverfly',
        isShowSatOverfly: 'reset',
    });
};
const bottomMenuClick = (iconName) => {
    const { sensorManager, satSet, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (iconName === 'menu-fov-bubble') {
        if (!sensorManager.checkSensorSelected()) {
            // No Sensor Selected
            if (settingsManager.plugins.topMenu)
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.adviceManager.adviceList.bubbleDisabled();
            uiManager.toast(`Select a Sensor First!`, 'caution');
            if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-fov-bubble:animated').length) {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-fov-bubble').effect('shake', {
                    distance: 10,
                });
            }
            return;
        }
        if (settingsManager.isFOVBubbleModeOn && !settingsManager.isShowSurvFence) {
            settingsManager.isFOVBubbleModeOn = false;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-fov-bubble').removeClass('bmenu-item-selected');
            satSet.satCruncher.postMessage({
                isShowFOVBubble: 'reset',
                isShowSurvFence: 'disable',
            });
            return;
        }
        else {
            enableFovView();
            return;
        }
    }
};


/***/ }),

/***/ "./src/img/icons/fov.png":
/*!*******************************!*\
  !*** ./src/img/icons/fov.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4cac6790c8787082082.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_sensorFov_sensorFov_ts.f3d7581b01692caf7955.js.map