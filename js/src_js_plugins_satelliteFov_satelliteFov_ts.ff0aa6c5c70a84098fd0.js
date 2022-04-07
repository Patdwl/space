"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_satelliteFov_satelliteFov_ts"],{

/***/ "./src/js/plugins/satelliteFov/satelliteFov.ts":
/*!*****************************************************!*\
  !*** ./src/js/plugins/satelliteFov/satelliteFov.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_img_icons_sat2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/img/icons/sat2.png */ "./src/img/icons/sat2.png");
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
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
    <div id="menu-sat-fov" class="bmenu-item bmenu-item-disabled">
      <img
        alt="sat2"
        src="" delayedsrc=${_app_img_icons_sat2_png__WEBPACK_IMPORTED_MODULE_2__}/>
      <span class="bmenu-title">Satellite FOV</span>
      <div class="status-icon"></div>
    </div>
  `);
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'satelliteFov',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'satelliteFov',
        cb: bottomMenuClick,
    });
};
const bottomMenuClick = (iconName) => {
    const { satSet, objectManager, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (iconName === 'menu-sat-fov') {
        if (objectManager.selectedSat === -1 && jquery__WEBPACK_IMPORTED_MODULE_1___default()('#search').val() === '') {
            // No Sat Selected and No Search Present
            if (settingsManager.plugins.topMenu)
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.adviceManager.adviceList.satFovDisabled();
            uiManager.toast(`Select a Satellite First!`, 'caution');
            if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sat-fov:animated').length) {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sat-fov').effect('shake', {
                    distance: 10,
                });
            }
            return;
        }
        if (settingsManager.isSatOverflyModeOn) {
            settingsManager.isSatOverflyModeOn = false;
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sat-fov').removeClass('bmenu-item-selected');
            satSet.satCruncher.postMessage({
                typ: 'isShowSatOverfly',
                isShowSatOverfly: 'reset',
            });
            return;
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-fov-bubble').removeClass('bmenu-item-selected');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-surveillance').removeClass('bmenu-item-selected');
            settingsManager.isShowSurvFence = false;
            settingsManager.isFOVBubbleModeOn = false;
            settingsManager.isSatOverflyModeOn = true;
            if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#search').val() !== '') {
                // If Group Selected
                uiManager.doSearch(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#search').val());
            }
            const satFieldOfView = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#satFieldOfView').val());
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sat-fov').addClass('bmenu-item-selected');
            satSet.satCruncher.postMessage({
                isShowFOVBubble: 'reset',
                isShowSurvFence: 'disable',
            });
            satSet.satCruncher.postMessage({
                typ: 'isShowSatOverfly',
                isShowSatOverfly: 'enable',
                selectedSatFOV: satFieldOfView,
            });
            satSet.setColorScheme(settingsManager.currentColorScheme, true);
            return;
        }
    }
};


/***/ }),

/***/ "./src/img/icons/sat2.png":
/*!********************************!*\
  !*** ./src/img/icons/sat2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37fcf00a14f720b50457.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_satelliteFov_satelliteFov_ts.ff0aa6c5c70a84098fd0.js.map