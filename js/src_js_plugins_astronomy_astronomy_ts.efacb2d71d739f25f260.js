"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_astronomy_astronomy_ts"],{

/***/ "./src/js/plugins/astronomy/astronomy.ts":
/*!***********************************************!*\
  !*** ./src/js/plugins/astronomy/astronomy.ts ***!
  \***********************************************/
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
/* harmony import */ var _app_img_icons_constellation_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/img/icons/constellation.png */ "./src/img/icons/constellation.png");
/**
 * /////////////////////////////////////////////////////////////////////////////
 *
 * astronomy.ts is a plugin for showing the stars above from the perspective
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



const uiManagerInit = () => {
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="menu-astronomy" class="bmenu-item bmenu-item-disabled">
          <img
            alt="telescope"
            src=""
            delayedsrc="${_app_img_icons_constellation_png__WEBPACK_IMPORTED_MODULE_2__}"
          />
          <span class="bmenu-title">Astronomy View</span>
          <div class="status-icon"></div>
        </div>
      `);
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'astronomy',
        cb: uiManagerInit,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.astronomy = {};
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.astronomy.isAstronomyView = false;
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'astronomy',
        cb: bottomMenuClick,
    });
};
const bottomMenuClick = (iconName) => {
    const { drawManager, starManager, objectManager, uiManager, orbitManager, sensorManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (iconName === 'menu-astronomy') {
        const mainCamera = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.mainCamera;
        if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.astronomy.isAstronomyView) {
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.astronomy.isAstronomyView = false;
            mainCamera.isPanReset = true;
            mainCamera.isLocalRotateReset = true;
            settingsManager.fieldOfView = 0.6;
            drawManager.glInit();
            uiManager.hideSideMenus();
            mainCamera.cameraType.current = mainCamera.cameraType.Default; // Back to normal Camera Mode
            uiManager.legendMenuChange('default');
            if (objectManager.isStarManagerLoaded) {
                starManager.clearConstellations();
            }
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fov-text').html('');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-astronomy').removeClass('bmenu-item-selected');
            return;
        }
        else {
            if (sensorManager.checkSensorSelected()) {
                if (objectManager.isStarManagerLoaded) {
                    // TODO: This takes way too long trying to find the star's
                    // satellite id from its name. The ids should be predetermined.
                    starManager.drawAllConstellations();
                }
                orbitManager.clearInViewOrbit();
                mainCamera.cameraType.current = mainCamera.cameraType.Astronomy; // Activate Astronomy Camera Mode
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fov-text').html('FOV: ' + (settingsManager.fieldOfView * 100).toFixed(2) + ' deg');
                uiManager.legendMenuChange('astronomy');
                if (typeof _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.planetarium !== 'undefined') {
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.planetarium.isPlanetariumView = false;
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-planetarium').removeClass('bmenu-item-selected');
                }
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.astronomy.isAstronomyView = true;
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-astronomy').addClass('bmenu-item-selected');
            }
            else {
                uiManager.toast(`Select a Sensor First!`, 'caution');
                if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-astronomy:animated').length) {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-astronomy').effect('shake', {
                        distance: 10,
                    });
                }
            }
            return;
        }
    }
};


/***/ }),

/***/ "./src/img/icons/constellation.png":
/*!*****************************************!*\
  !*** ./src/img/icons/constellation.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f28cc1a1fa69efd485e9.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_astronomy_astronomy_ts.efacb2d71d739f25f260.js.map