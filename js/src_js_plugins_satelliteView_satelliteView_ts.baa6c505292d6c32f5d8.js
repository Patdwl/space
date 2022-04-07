"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_satelliteView_satelliteView_ts"],{

/***/ "./src/js/plugins/satelliteView/satelliteView.ts":
/*!*******************************************************!*\
  !*** ./src/js/plugins/satelliteView/satelliteView.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_img_icons_sat3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/img/icons/sat3.png */ "./src/img/icons/sat3.png");
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



const init = () => {
    const { adviceManager, objectManager, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'satelliteView',
        cb: () => {
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="menu-satview" class="bmenu-item bmenu-item-disabled">
          <img
            alt="sat3"
            src=""
            delayedsrc="${_app_img_icons_sat3_png__WEBPACK_IMPORTED_MODULE_2__}"
          />
          <span class="bmenu-title">Satellite View</span>
          <div class="status-icon"></div>
        </div>
      `);
        },
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'satelliteView',
        cb: (iconName) => {
            if (iconName === 'menu-satview') {
                const mainCamera = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.mainCamera;
                if (mainCamera.cameraType.current === mainCamera.cameraType.Satellite) {
                    uiManager.hideSideMenus();
                    mainCamera.cameraType.current = mainCamera.cameraType.FixedToSat; // Back to normal Camera Mode
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-satview').removeClass('bmenu-item-selected');
                    return;
                }
                else {
                    if (objectManager.selectedSat !== -1) {
                        mainCamera.cameraType.current = mainCamera.cameraType.Satellite; // Activate Satellite Camera Mode
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-satview').addClass('bmenu-item-selected');
                    }
                    else {
                        uiManager.toast(`Select a Satellite First!`, 'caution');
                        if (settingsManager.plugins.topMenu)
                            adviceManager.adviceList.satViewDisabled();
                        if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-satview:animated').length) {
                            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-satview').effect('shake', {
                                distance: 10,
                            });
                        }
                    }
                    return;
                }
            }
        },
    });
};


/***/ }),

/***/ "./src/img/icons/sat3.png":
/*!********************************!*\
  !*** ./src/img/icons/sat3.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9157de200b7ac2bc65a7.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_satelliteView_satelliteView_ts.baa6c505292d6c32f5d8.js.map