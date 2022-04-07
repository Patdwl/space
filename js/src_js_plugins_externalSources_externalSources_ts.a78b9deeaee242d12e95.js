"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_externalSources_externalSources_ts"],{

/***/ "./src/js/plugins/externalSources/externalSources.ts":
/*!***********************************************************!*\
  !*** ./src/js/plugins/externalSources/externalSources.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "n2yoFormSubmit": () => (/* binding */ n2yoFormSubmit),
/* harmony export */   "searchN2yo": () => (/* binding */ searchN2yo),
/* harmony export */   "searchN2yoOnLoad": () => (/* binding */ searchN2yoOnLoad),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "searchCelestrackOnLoad": () => (/* binding */ searchCelestrackOnLoad),
/* harmony export */   "searchCelestrak": () => (/* binding */ searchCelestrak),
/* harmony export */   "celestrakFormSubmit": () => (/* binding */ celestrakFormSubmit)
/* harmony export */ });
/* harmony import */ var _app_img_icons_external_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/external.png */ "./src/img/icons/external.png");
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



let isExternalMenuOpen = false;
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#external-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-external').removeClass('bmenu-item-selected');
    isExternalMenuOpen = false;
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="external-menu" class="side-menu-parent start-hidden text-select">
          <div id="external-inner-menu" class="side-menu">
            <ul>
              <h5 class="center-align">External TLE Menu</h5>
              <li class="divider"></li>
            </ul>
            <h5 class="center-align">N2YO Lookup</h5>
            <li class="divider"></li>
            <div class="row"></div>
            <form id="n2yo-form">
              <div class="row">
                <div class="input-field col s12">
                  <input value="25544" id="ext-n2yo" type="text" />
                  <label for="anal-sat" class="active">Satellite Number</label>
                </div>
              </div>
              <div class="row">
                <center>
                  <button id="n2yo-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Load TLE &#9658;</button>
                </center>
              </div>
            </form>
            <h5 class="center-align">Celestrak Lookup</h5>
            <li class="divider"></li>
            <div class="row"></div>
            <form id="celestrak-form">
              <div class="row">
                <div class="input-field col s12">
                  <input value="25544" id="ext-celestrak" type="text" />
                  <label for="anal-sat" class="active">Satellite Number</label>
                </div>
              </div>
              <div class="row">
                <center>
                  <button id="celestrak-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Load TLE &#9658;</button>
                </center>
              </div>
            </form>
          </div>
        </div>
      `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-external" class="bmenu-item">
          <img
            alt="external"
            src=""
            delayedsrc=${_app_img_icons_external_png__WEBPACK_IMPORTED_MODULE_0__}/>
          <span class="bmenu-title">External Source</span>
          <div class="status-icon"></div>
        </div>
      `);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#n2yo-form').on('submit', function (e) {
        n2yoFormSubmit();
        e.preventDefault();
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#celestrak-form').on('submit', function (e) {
        celestrakFormSubmit();
        e.preventDefault();
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#external-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
};
const init = () => {
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'externalSources',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'externalSources',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'externalSources',
        cb: hideSideMenus,
    });
};
const n2yoFormSubmit = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeIn(1000, function () {
        const satnum = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#ext-n2yo').val());
        searchN2yo(satnum);
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeOut('slow');
    });
};
const searchN2yo = (satNum, analsat) => {
    const { satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    const { satData } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet;
    // If no Analyst Satellite specified find the first unused one
    if (typeof analsat == 'undefined') {
        for (let i = 15000; i < satData.length; i++) {
            if (parseInt(satData[i].sccNum) >= 80000 && !satData[i].active) {
                analsat = i;
                break;
            }
        }
    }
    else {
        // Satnum to Id
        analsat = satSet.getIdFromObjNum(analsat);
    }
    const request = new XMLHttpRequest();
    request.open('GET', `php/get_data.php?type=n&sat=${satNum}`, true);
    request.onload = () => searchN2yoOnLoad(request, analsat);
    request.send();
};
const searchN2yoOnLoad = (request, analsat) => {
    const { satSet, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (request.status >= 200 && request.status < 400) {
        // Success!
        const tles = request.response.split('<div id="tle">')[1].split('<pre>')[1].split('\n');
        const TLE1 = tles[1];
        const TLE2 = tles[2];
        if (TLE1.substr(0, 2) !== '1 ')
            throw new Error('N2YO TLE 1 is not a valid TLE');
        if (TLE2.substr(0, 2) !== '2 ')
            throw new Error('N2YO TLE 2 is not a valid TLE');
        const sat = satSet.insertNewAnalystSatellite(TLE1, TLE2, analsat);
        uiManager.doSearch(sat.sccNum.toString());
    }
    else {
        // We reached our target server, but it returned an error
        // console.debug('N2YO request returned an error!');
    }
};
const bottomMenuClick = (iconName) => {
    const { uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (iconName === 'menu-external') {
        if (isExternalMenuOpen) {
            isExternalMenuOpen = false;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-external').removeClass('bmenu-item-selected');
            uiManager.hideSideMenus();
            return;
        }
        else {
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#external-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.watchlist.updateWatchlist();
            isExternalMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-external').addClass('bmenu-item-selected');
            return;
        }
    }
};
const searchCelestrackOnLoad = (request, analsat) => {
    const { satSet, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (request.status >= 200 && request.status < 400) {
        // Success!
        const tles = JSON.parse(request.response).split('\n');
        const TLE1 = tles[1];
        const TLE2 = tles[2];
        if (TLE1.substr(0, 2) !== '1 ')
            throw new Error(`N2YO TLE 1 is not a valid TLE -- ${TLE1.substr(0, 2)}`);
        if (TLE2.substr(0, 2) !== '2 ')
            throw new Error(`N2YO TLE 2 is not a valid TLE -- ${TLE2.substr(0, 2)}`);
        const sat = satSet.insertNewAnalystSatellite(TLE1, TLE2, analsat);
        uiManager.doSearch(sat.sccNum.toString());
    }
    else {
        // We reached our target server, but it returned an error
        // console.debug('Celestrack request returned an error!');
    }
};
const searchCelestrak = (satNum, analsat) => {
    const { satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    const satData = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.satData;
    // If no Analyst Satellite specified find the first unused one
    if (typeof analsat == 'undefined') {
        for (let i = 15000; i < satData.length; i++) {
            if (parseInt(satData[i].sccNum) >= 80000 && !satData[i].active) {
                analsat = i;
                break;
            }
        }
    }
    else {
        // Satnum to Id
        analsat = satSet.getIdFromObjNum(analsat);
    }
    const request = new XMLHttpRequest();
    request.open('GET', `php/get_data.php?type=c&sat=${satNum}`, true);
    request.onload = () => searchCelestrackOnLoad(request, analsat);
    request.send();
};
const celestrakFormSubmit = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeIn(1000, function () {
        const satnum = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#ext-celestrak').val());
        searchCelestrak(satnum);
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeOut('slow');
    });
};


/***/ }),

/***/ "./src/img/icons/external.png":
/*!************************************!*\
  !*** ./src/img/icons/external.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "deab660266abd2f8425b.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_externalSources_externalSources_ts.a78b9deeaee242d12e95.js.map