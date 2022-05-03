"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_settingsMenu_settingsMenu_ts"],{

/***/ "./src/js/plugins/settingsMenu/settingsMenu.ts":
/*!*****************************************************!*\
  !*** ./src/js/plugins/settingsMenu/settingsMenu.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "onColorSelected": () => (/* binding */ onColorSelected),
/* harmony export */   "settingsFormChange": () => (/* binding */ settingsFormChange),
/* harmony export */   "settingsFormSubmit": () => (/* binding */ settingsFormSubmit),
/* harmony export */   "settingsRisesetChange": () => (/* binding */ settingsRisesetChange)
/* harmony export */ });
/* harmony import */ var _app_img_icons_settings_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/settings.png */ "./src/img/icons/settings.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/lib/helpers */ "./src/js/lib/helpers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




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
let isSettingsMenuOpen = false;
let isNotColorPickerInitialSetup = false;
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'settingsMenu',
        cb: () => uiManagerInit(),
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'settingsMenu',
        cb: (iconName) => bottomMenuClick(iconName),
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'sensor',
        cb: () => hideSideMenus(),
    });
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
    <div id="settings-menu" class="side-menu-parent start-hidden text-select">
      <div id="settings-content" class="side-menu">
        <div class="row">
          <form id="settings-form">
            <div id="settings-general">
              <h5 class="center-align">General Settings</h5>
              <div class="switch row">
                <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Orbits will be drawn using ECF vs ECI (Mainly for GEO Orbits)">
                  <input id="settings-drawEcf" type="checkbox" />
                  <span class="lever"></span>
                  Draw Orbits in ECF
                </label>
              </div>
              <div class="switch row">
                <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Non-selectable satellites will be hidden instead of grayed out.">
                  <input id="settings-hos" type="checkbox" />
                  <span class="lever"></span>
                  Hide Other Satellites
                </label>
              </div>
              <div class="switch row">
                <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Every 3 seconds a new satellite will be selected from FOV">
                  <input id="settings-demo-mode" type="checkbox" />
                  <span class="lever"></span>
                  Enable Demo Mode
                </label>
              </div>
              <div class="switch row">
                <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Small text labels will appear next to all satellites in FOV.">
                  <input id="settings-sat-label-mode" type="checkbox" checked />
                  <span class="lever"></span>
                  Enable Satellite Label Mode
                </label>
              </div>
            </div>
            <div class="row light-blue darken-3" style="height:4px; display:block;"></div>
            <div id="settings-colors">
              <h5 class="center-align">Color Settings</h5>
              <div class="input-field col s6">
                <center>
                  <p>Payload</p>
                  <button id="settings-color-payload" class="btn waves-effect waves-light"></button>
                </center>
              </div>
              <div class="input-field col s6">
                <center>
                  <p>Rocket Body</p>
                  <button id="settings-color-rocketBody" class="btn waves-effect waves-light"></button>
                </center>
              </div>
              <div class="input-field col s6">
                <center>
                  <p>Debris</p>
                  <button id="settings-color-debris" class="btn waves-effect waves-light"></button>
                </center>
              </div>
              <div class="input-field col s6">
                <center>
                  <p>In View</p>
                  <button id="settings-color-inview" class="btn waves-effect waves-light"></button>
                </center>
              </div>
              <div class="input-field col s6">
                <center>
                  <p>Missile</p>
                  <button id="settings-color-missile" class="btn waves-effect waves-light"></button>
                </center>
              </div>
              <div class="input-field col s6">
                <center>
                  <p>Missile (FOV)</p>
                  <button id="settings-color-missileInview" class="btn waves-effect waves-light"></button>
                </center>
              </div>
              <div class="input-field col s6">
                <center>
                  <p>TruSat</p>
                  <button id="settings-color-trusat" class="btn waves-effect waves-light"></button>
                </center>
              </div>
            </div>
            <div class="row"></div>
            <div class="row light-blue darken-3" style="height:4px; display:block;"></div>
            <div id="satOverfly-opt">
              <h5 class="center-align">Satellite Overfly Settings</h5>
              <div class="input-field col s12">
                <input value="30" id="satFieldOfView" type="text" class="tooltipped" data-position="right" data-delay="50" data-tooltip="What is the satellite's field of view in degrees" />
                <label for="satFieldOfView" class="active">Satellite Field of View</label>
              </div>
              <div class="row"></div>
            </div>
            <div id="settings-opt">
              <h5 class="center-align">Settings Overrides</h5>
              <div class="input-field col s12">
                <input value="150" id="maxSearchSats" type="text" class="tooltipped" data-position="right" data-delay="50" data-tooltip="Maximum satellites to display in search" />
                <label for="maxSearchSats" class="active">Maximum Satellites in Search</label>
              </div>
              <div class="row"></div>
            </div>
            <div class="row light-blue darken-3" style="height:4px; display:block;"></div>
            <div id="fastCompSettings">
              <h5 class="center-align">Fast CPU Required</h5>
              <div class="switch row">
                <label>
                  <input id="settings-snp" type="checkbox" />
                  <span class="lever"></span>
                  Show Next Pass on Hover
                </label>
              </div>
              <div class="row"></div>
              <br />
              <div class="row center">
                <button id="settings-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Update Settings &#9658;</button>
              </div>
            </div>
            <!-- <div id="settings-lowperf" class="row center">
              <button class="red btn waves-effect waves-light" onclick="uiManager.startLowPerf();">Low End PC Version &#9658;</button>
            </div> -->
          </form>
        </div>
      </div>
    </div>
  `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
    <div id="menu-settings" class="bmenu-item">
      <img
        alt="settings"
        src=""
        delayedsrc="${_app_img_icons_settings_png__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <span class="bmenu-title">Settings</span>
      <div class="status-icon"></div>
    </div>
  `);
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-form').on('change', settingsFormChange);
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-riseset').on('change', settingsRisesetChange);
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-form').on('submit', settingsFormSubmit);
    (() => {
        var _a, _b, _c, _d, _e, _f, _g;
        const colorPalette = [
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([1.0, 0.0, 0.0, 1.0]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([1.0, 0.75, 0.0, 1.0]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([0.85, 0.5, 0.0, 1.0]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([1.0, 1.0, 0.0, 1.0]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([0, 1, 0, 1]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([0.2, 1.0, 0.0, 0.5]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([0.2, 1.0, 1.0, 1.0]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([0, 0, 1, 1]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([0.2, 0.4, 1.0, 1]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([0.64, 0.0, 0.64, 1.0]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([1.0, 0.0, 0.6, 1.0]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([0.5, 0.5, 0.5, 1]),
            (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)([1, 1, 1, 1]), // White
        ];
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-color-payload').colorPick({
            initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)(((_a = settingsManager.colors) === null || _a === void 0 ? void 0 : _a.payload) || [0.2, 1.0, 0.0, 0.5]),
            palette: colorPalette,
            onColorSelected: function () {
                onColorSelected(this, 'payload');
            },
        });
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-color-rocketBody').colorPick({
            initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)(((_b = settingsManager.colors) === null || _b === void 0 ? void 0 : _b.rocketBody) || [0.2, 0.4, 1.0, 1]),
            palette: colorPalette,
            onColorSelected: function () {
                onColorSelected(this, 'rocketBody');
            },
        });
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-color-debris').colorPick({
            initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)(((_c = settingsManager.colors) === null || _c === void 0 ? void 0 : _c.debris) || [0.5, 0.5, 0.5, 1]),
            palette: colorPalette,
            onColorSelected: function () {
                onColorSelected(this, 'debris');
            },
        });
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-color-inview').colorPick({
            initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)(((_d = settingsManager.colors) === null || _d === void 0 ? void 0 : _d.inView) || [0.85, 0.5, 0.0, 1.0]),
            palette: colorPalette,
            onColorSelected: function () {
                onColorSelected(this, 'inview');
            },
        });
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-color-missile').colorPick({
            initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)(((_e = settingsManager.colors) === null || _e === void 0 ? void 0 : _e.missile) || [1.0, 1.0, 0.0, 1.0]),
            palette: colorPalette,
            onColorSelected: function () {
                onColorSelected(this, 'missile');
            },
        });
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-color-missileInview').colorPick({
            initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)(((_f = settingsManager.colors) === null || _f === void 0 ? void 0 : _f.missileInview) || [1.0, 0.0, 0.0, 1.0]),
            palette: colorPalette,
            onColorSelected: function () {
                onColorSelected(this, 'missileInview');
            },
        });
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-color-trusat').colorPick({
            initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.rgbCss)(((_g = settingsManager.colors) === null || _g === void 0 ? void 0 : _g.trusat) || [1.0, 0.0, 0.6, 1.0]),
            palette: colorPalette,
            onColorSelected: function () {
                onColorSelected(this, 'trusat');
            },
        });
        isNotColorPickerInitialSetup = true;
    })();
};
const bottomMenuClick = (iconName) => {
    const { uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (iconName === 'menu-settings') {
        if (isSettingsMenuOpen) {
            isSettingsMenuOpen = false;
            uiManager.hideSideMenus();
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                uiManager.searchToggle(false);
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            isSettingsMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('#menu-settings').addClass('bmenu-item-selected');
            return;
        }
    }
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#menu-settings').removeClass('bmenu-item-selected');
    isSettingsMenuOpen = false;
};
const onColorSelected = (context, colorStr) => {
    const { satSet, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (typeof context === 'undefined' || context === null)
        throw new Error('context is undefined');
    if (typeof colorStr === 'undefined' || colorStr === null)
        throw new Error('colorStr is undefined');
    context.element.css('cssText', `background-color: ${context.color} !important; color: ${context.color};`);
    if (isNotColorPickerInitialSetup) {
        settingsManager.colors[colorStr] = (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.parseRgba)(context.color);
        uiManager.legendColorsChange();
        satSet.setColorScheme(settingsManager.currentColorScheme, true);
        try {
            localStorage.setItem('settingsManager-colors', JSON.stringify(settingsManager.colors));
        }
        catch (_a) {
            console.warn('Settings Manager: Unable to save color settings - localStorage issue!');
        }
    }
};
const settingsFormChange = (e, isDMChecked, isSLMChecked) => {
    if (typeof e === 'undefined' || e === null)
        throw new Error('e is undefined');
    isDMChecked !== null && isDMChecked !== void 0 ? isDMChecked : (isDMChecked = document.getElementById('settings-demo-mode').checked);
    isSLMChecked !== null && isSLMChecked !== void 0 ? isSLMChecked : (isSLMChecked = document.getElementById('settings-sat-label-mode').checked);
    if (isSLMChecked && e.target.id === 'settings-demo-mode') {
        document.getElementById('settings-sat-label-mode').checked = false;
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-demo-mode').removeClass('lever:after');
    }
    if (isDMChecked && e.target.id === 'settings-sat-label-mode') {
        document.getElementById('settings-demo-mode').checked = false;
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#settings-sat-label-mode').removeClass('lever:after');
    }
};
const settingsFormSubmit = (e, isHOSChecked, isDMChecked, isSLMChecked, isSNPChecked, isDrawEcfChecked) => {
    if (typeof e === 'undefined' || e === null)
        throw new Error('e is undefined');
    const { satSet, colorSchemeManager, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    isDrawEcfChecked !== null && isDrawEcfChecked !== void 0 ? isDrawEcfChecked : (isDrawEcfChecked = document.getElementById('settings-drawEcf').checked);
    isHOSChecked !== null && isHOSChecked !== void 0 ? isHOSChecked : (isHOSChecked = document.getElementById('settings-hos').checked);
    isDMChecked !== null && isDMChecked !== void 0 ? isDMChecked : (isDMChecked = document.getElementById('settings-demo-mode').checked);
    isSLMChecked !== null && isSLMChecked !== void 0 ? isSLMChecked : (isSLMChecked = document.getElementById('settings-sat-label-mode').checked);
    isSNPChecked !== null && isSNPChecked !== void 0 ? isSNPChecked : (isSNPChecked = document.getElementById('settings-snp').checked);
    settingsManager.isSatLabelModeOn = isSLMChecked;
    settingsManager.isDemoModeOn = isDMChecked;
    settingsManager.colors.transparent = isHOSChecked ? [1.0, 1.0, 1.0, 0] : [1.0, 1.0, 1.0, 0.1];
    settingsManager.isOrbitCruncherInEcf = isDrawEcfChecked;
    colorSchemeManager.reloadColors();
    settingsManager.isShowNextPass = isSNPChecked;
    const newFieldOfView = parseInt(jquery__WEBPACK_IMPORTED_MODULE_3___default()('#satFieldOfView').val());
    if (isNaN(newFieldOfView)) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#satFieldOfView').val('30');
        uiManager.toast('Invalid field of view value!', 'critical');
    }
    else {
        satSet.satCruncher.postMessage({
            typ: 'isShowSatOverfly',
            selectedSatFOV: newFieldOfView,
        });
    }
    const maxSearchSats = parseInt(jquery__WEBPACK_IMPORTED_MODULE_3___default()('#maxSearchSats').val());
    if (isNaN(maxSearchSats)) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#maxSearchSats').val(settingsManager.searchLimit);
        uiManager.toast('Invalid max search sats value!', 'critical');
    }
    else {
        settingsManager.searchLimit = maxSearchSats;
        uiManager.searchBox.doSearch(uiManager.searchBox.getCurrentSearch());
    }
    settingsManager.isForceColorScheme = true;
    satSet.setColorScheme(settingsManager.currentColorScheme); // force color recalc
    e.preventDefault();
};
const settingsRisesetChange = (e, isRiseSetChecked) => {
    const { satellite } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (typeof e === 'undefined' || e === null)
        throw new Error('e is undefined');
    isRiseSetChecked !== null && isRiseSetChecked !== void 0 ? isRiseSetChecked : (isRiseSetChecked = document.getElementById('settings-riseset').checked);
    if (isRiseSetChecked) {
        satellite.isRiseSetLookangles = true;
    }
    else {
        satellite.isRiseSetLookangles = false;
    }
};


/***/ }),

/***/ "./src/img/icons/settings.png":
/*!************************************!*\
  !*** ./src/img/icons/settings.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f36e9ef43fb8b6ea007.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_settingsMenu_settingsMenu_ts.e3c8a159a91ebb939a03.js.map