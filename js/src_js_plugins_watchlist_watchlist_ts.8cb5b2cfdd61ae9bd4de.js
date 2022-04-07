"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_watchlist_watchlist_ts"],{

/***/ "./src/js/plugins/watchlist/watchlist.ts":
/*!***********************************************!*\
  !*** ./src/js/plugins/watchlist/watchlist.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "updateWatchlist": () => (/* binding */ updateWatchlist),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "updateLoop": () => (/* binding */ updateLoop),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "onCruncherReady": () => (/* binding */ onCruncherReady),
/* harmony export */   "pushOverlayElement": () => (/* binding */ pushOverlayElement),
/* harmony export */   "infoOverlayContentClick": () => (/* binding */ infoOverlayContentClick),
/* harmony export */   "watchlistListClick": () => (/* binding */ watchlistListClick),
/* harmony export */   "watchlistContentEvent": () => (/* binding */ watchlistContentEvent),
/* harmony export */   "watchlistSaveClick": () => (/* binding */ watchlistSaveClick),
/* harmony export */   "watchlistFileChange": () => (/* binding */ watchlistFileChange),
/* harmony export */   "watchListReaderOnLoad": () => (/* binding */ watchListReaderOnLoad),
/* harmony export */   "menuSelectableClick": () => (/* binding */ menuSelectableClick)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/external/dateFormat.js */ "./src/js/lib/external/dateFormat.js");
/* harmony import */ var _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/lib/helpers */ "./src/js/lib/helpers.ts");
/* harmony import */ var _app_img_remove_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/img/remove.png */ "./src/img/remove.png");
/* harmony import */ var _app_img_add_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/img/add.png */ "./src/img/add.png");
/* harmony import */ var _app_img_icons_watchlist_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/img/icons/watchlist.png */ "./src/img/icons/watchlist.png");
/* harmony import */ var _app_img_icons_info_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/img/icons/info.png */ "./src/img/icons/info.png");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/**
 * /////////////////////////////////////////////////////////////////////////////
 *
 * watchlist.ts is a plugin for creating a list of satellites to actively monitor
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








let watchlistList = [];
let watchlistInViewList = [];
let isWatchlistChanged = null;
let isWatchlistMenuOpen = false;
let nextPassEarliestTime;
let nextPassArray = [];
let isInfoOverlayMenuOpen = false;
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#info-overlay-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-watchlist').removeClass('bmenu-item-selected');
    isInfoOverlayMenuOpen = false;
    isWatchlistMenuOpen = false;
};
const init = () => {
    const { satSet, objectManager, uiManager, timeManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.watchlist = {};
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.watchlist.lastOverlayUpdateTime = 0;
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'watchlist',
        cb: uiManagerInit,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.watchlist.updateWatchlist = updateWatchlist;
    let infoOverlayDOM = [];
    uiManager.updateNextPassOverlay = (nextPassArrayIn, isForceUpdate) => {
        if (nextPassArrayIn.length <= 0 && !isInfoOverlayMenuOpen)
            return;
        const { mainCamera } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
        // TODO: This should auto update the overlay when the time changes outside the original search window
        // Update once every 10 seconds
        if ((timeManager.realTime > _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.watchlist.lastOverlayUpdateTime * 1 + 10000 &&
            objectManager.selectedSat === -1 &&
            !mainCamera.isDragging &&
            mainCamera.zoomLevel === mainCamera.zoomTarget) ||
            isForceUpdate) {
            const propTime = timeManager.calculateSimulationTime();
            infoOverlayDOM = [];
            infoOverlayDOM.push('<div>');
            for (let s = 0; s < nextPassArrayIn.length; s++) {
                pushOverlayElement(satSet, nextPassArrayIn, s, propTime, infoOverlayDOM);
            }
            infoOverlayDOM.push('</div>');
            document.getElementById('info-overlay-content').innerHTML = infoOverlayDOM.join('');
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.watchlist.lastOverlayUpdateTime = timeManager.realTime;
        }
    };
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'updateLoop',
        cbName: 'watchlist',
        cb: updateLoop,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'watchlist',
        cb: (iconName) => bottomMenuClick(iconName),
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'onCruncherReady',
        cbName: 'watchlist',
        cb: onCruncherReady,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'watchlist',
        cb: hideSideMenus,
    });
};
const updateWatchlist = (updateWatchlistList, updateWatchlistInViewList, isSkipSearch = false) => {
    const settingsManager = window.settingsManager;
    const { satSet, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (typeof updateWatchlistList !== 'undefined') {
        watchlistList = updateWatchlistList;
    }
    if (typeof updateWatchlistInViewList !== 'undefined') {
        watchlistInViewList = updateWatchlistInViewList;
    }
    if (!watchlistList)
        return;
    settingsManager.isThemesNeeded = true;
    isWatchlistChanged = isWatchlistChanged != null;
    let watchlistString = '';
    let watchlistListHTML = '';
    let sat;
    for (let i = 0; i < watchlistList.length; i++) {
        sat = satSet.getSatExtraOnly(watchlistList[i]);
        if (sat == null) {
            watchlistList.splice(i, 1);
        }
        else {
            watchlistListHTML += `
      <div class="row">
        <div class="col s3 m3 l3">
          ${sat.sccNum}
        </div>
        <div class="col s7 m7 l7">
          ${sat.name || 'Unknown'}
        </div>
        <div class="col s2 m2 l2 center-align remove-icon">
          <img class="watchlist-remove" data-sat-id="${sat.id}" src="img/remove.png"></img>
        </div>
      </div>`;
        }
    }
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-list').html(watchlistListHTML);
    for (let i = 0; i < watchlistList.length; i++) {
        // No duplicates
        watchlistString += satSet.getSatExtraOnly(watchlistList[i]).sccNum;
        if (i !== watchlistList.length - 1)
            watchlistString += ',';
    }
    if (!isSkipSearch)
        uiManager.doSearch(watchlistString, true);
    satSet.setColorScheme(settingsManager.currentColorScheme, true); // force color recalc
    const saveWatchlist = [];
    for (let i = 0; i < watchlistList.length; i++) {
        sat = satSet.getSatExtraOnly(watchlistList[i]);
        saveWatchlist[i] = sat.sccNum;
    }
    const variable = JSON.stringify(saveWatchlist);
    try {
        localStorage.setItem('watchlistList', variable);
    }
    catch (_a) {
        // DEBUG:
        // console.warn('Watchlist Plugin: Unable to save watchlist - localStorage issue!');
    }
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
  <div id="watchlist-menu" class="side-menu-parent start-hidden text-select">
    <div id="watchlist-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Satellite Watchlist</h5>
        <div id="watchlist-list">
          <div class="row">
            <div class="col s3 m3 l3">25544</div>
            <div class="col s7 m7 l7">ISS (ZARYA)</div>
            <div class="col s2 m2 l2 center-align remove-icon">
              <img
                alt="remove"
                src="" delayedsrc="${_app_img_remove_png__WEBPACK_IMPORTED_MODULE_3__}" />
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="input-field col s10 m10 l10">
            <form id="watchlist-submit">
              <input placeholder="xxxxx" id="watchlist-new" type="text" />
              <label for="watchlist-new">New Satellite</label>
            </form>
          </div>
          <div class="col s2 m2 l2 center-align add-icon">
            <img
              class="watchlist-add"
              src="" delayedsrc="${_app_img_add_png__WEBPACK_IMPORTED_MODULE_4__}" />
          </div>
        </div>
        <div class="center-align row">
          <button id="watchlist-save" class="btn btn-ui waves-effect waves-light" type="button" name="action">Save List &#9658;</button>
        </div>
        <div class="center-align row">
          <button id="watchlist-open" class="btn btn-ui waves-effect waves-light" type="button" name="action">Load List &#9658;</button>
          <input id="watchlist-file" type="file" name="files[]" style="display: none;" />
        </div>
      </div>
    </div>
  </div>
  <div id="info-overlay-menu" class="start-hidden text-select">
    <div id="info-overlay-content"></div>
  </div>
`);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `  
  <div id="menu-watchlist" class="bmenu-item">
    <img
      alt="watchlist"
      src="" delayedsrc="${_app_img_icons_watchlist_png__WEBPACK_IMPORTED_MODULE_5__}" />
    <span class="bmenu-title">Watchlist</span>
    <div class="status-icon"></div>
  </div>    
  <div id="menu-info-overlay" class="bmenu-item bmenu-item-disabled">
    <img
      alt="info"
      src="" delayedsrc="${_app_img_icons_info_png__WEBPACK_IMPORTED_MODULE_6__}" />
    <span class="bmenu-title">Overlay</span>
    <div class="status-icon"></div>
  </div>
`);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('.menu-selectable').on('click', menuSelectableClick);
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#info-overlay-content').on('click', '.watchlist-object', function (evt) {
        infoOverlayContentClick(evt);
    });
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-list').on('click', '.watchlist-remove', function () {
        const satId = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).data('sat-id');
        watchlistListClick(satId);
    });
    // Add button selected on watchlist menu
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-content').on('click', '.watchlist-add', watchlistContentEvent);
    // Enter pressed/selected on watchlist menu
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-content').on('submit', function (evt) {
        watchlistContentEvent(evt);
    });
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-save').on('click', function (evt) {
        watchlistSaveClick(evt);
    });
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-open').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-file').trigger('click');
    });
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-file').on('change', function (evt) {
        watchlistFileChange(evt);
    });
};
const updateLoop = () => {
    const { satellite, satSet, orbitManager, uiManager, sensorManager, timeManager, } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    uiManager.updateNextPassOverlay(nextPassArray);
    if (watchlistList.length <= 0)
        return;
    for (let i = 0; i < watchlistList.length; i++) {
        const sat = satSet.getSat(watchlistList[i]);
        if (sensorManager.currentSensorMultiSensor) {
            orbitManager.removeInViewOrbit(watchlistList[i]);
            for (let j = 0; j < sensorManager.currentSensorList.length; j++) {
                const satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs
                const sensor = sensorManager.currentSensorList[j];
                const rae = satellite.getRae(timeManager.dateObject, satrec, sensor);
                const isInFov = satellite.checkIsInView(sensor, rae);
                if (!isInFov)
                    continue;
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.lineManager.create('sat3', [sat.id, satSet.getSensorFromSensorName(sensor.name)], 'g');
            }
        }
        else {
            if (sat.inView === 1 && watchlistInViewList[i] === false) {
                // Is inview and wasn't previously
                watchlistInViewList[i] = true;
                uiManager.toast(`Satellite ${sat.sccNum} is In Field of View!`, 'normal');
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.lineManager.create('sat3', [sat.id, satSet.getSensorFromSensorName(sensorManager.currentSensor[0].name)], 'g');
                orbitManager.addInViewOrbit(watchlistList[i]);
            }
            if (sat.inView === 0 && watchlistInViewList[i] === true) {
                // Isn't inview and was previously
                watchlistInViewList[i] = false;
                uiManager.toast(`Satellite ${sat.sccNum} left Field of View!`, 'standby');
                orbitManager.removeInViewOrbit(watchlistList[i]);
            }
        }
    }
    for (let i = 0; i < watchlistInViewList.length; i++) {
        if (watchlistInViewList[i] === true) {
            return;
        }
    }
};
const bottomMenuClick = (iconName) => {
    const { satellite, satSet, uiManager, sensorManager, timeManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (iconName === 'menu-info-overlay') {
        if (!sensorManager.checkSensorSelected()) {
            // No Sensor Selected
            uiManager.toast(`Select a Sensor First!`, 'caution', true);
            if (!jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay:animated').length) {
                jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay').effect('shake', {
                    distance: 10,
                });
            }
            return;
        }
        if (isInfoOverlayMenuOpen) {
            isInfoOverlayMenuOpen = false;
            uiManager.hideSideMenus();
            return;
        }
        else {
            if (watchlistList.length === 0 && !isWatchlistChanged) {
                uiManager.toast(`Add Satellites to Watchlist!`, 'caution');
                if (!jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay:animated').length) {
                    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay').effect('shake', {
                        distance: 10,
                    });
                }
                nextPassArray = [];
                return;
            }
            uiManager.hideSideMenus();
            if (nextPassArray.length === 0 ||
                nextPassEarliestTime > timeManager.realTime ||
                new Date(nextPassEarliestTime * 1 + 1000 * 60 * 60 * 24) < timeManager.realTime ||
                isWatchlistChanged) {
                jquery__WEBPACK_IMPORTED_MODULE_7___default()('#loading-screen').fadeIn(1000, function () {
                    nextPassArray = [];
                    for (let x = 0; x < watchlistList.length; x++) {
                        nextPassArray.push(satSet.getSatExtraOnly(watchlistList[x]));
                    }
                    nextPassArray = satellite.nextpassList(nextPassArray);
                    nextPassArray.sort(function (a, b) {
                        return new Date(a.time).getTime() - new Date(b.time).getTime();
                    });
                    nextPassEarliestTime = timeManager.realTime;
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.watchlist.lastOverlayUpdateTime = 0;
                    uiManager.updateNextPassOverlay(nextPassArray, true);
                    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#loading-screen').fadeOut('slow');
                    isWatchlistChanged = false;
                });
            }
            else {
                uiManager.updateNextPassOverlay(nextPassArray, true);
            }
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#info-overlay-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay').addClass('bmenu-item-selected');
            isInfoOverlayMenuOpen = true;
            return;
        }
    }
    if (iconName === 'menu-watchlist') {
        if (isWatchlistMenuOpen) {
            isWatchlistMenuOpen = false;
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-watchlist').removeClass('bmenu-item-selected');
            uiManager.hideSideMenus();
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                uiManager.searchToggle(false);
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            updateWatchlist();
            isWatchlistMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-watchlist').addClass('bmenu-item-selected');
            return;
        }
    }
};
const onCruncherReady = () => __awaiter(void 0, void 0, void 0, function* () {
    const { satSet, sensorManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    let watchlistJSON;
    try {
        watchlistJSON = localStorage.getItem('watchlistList');
    }
    catch (_a) {
        watchlistJSON = null;
    }
    if (watchlistJSON === null || watchlistJSON === '[]') {
        try {
            watchlistJSON = yield jquery__WEBPACK_IMPORTED_MODULE_7___default().get(`${settingsManager.installDirectory}tle/watchlist.json`);
        }
        catch (_b) {
            watchlistJSON = null;
        }
    }
    if (watchlistJSON !== null && watchlistJSON !== '[]' && watchlistJSON.length > 0) {
        const newWatchlist = JSON.parse(watchlistJSON);
        const _watchlistInViewList = [];
        for (let i = 0; i < newWatchlist.length; i++) {
            const sat = satSet.getSatExtraOnly(satSet.getIdFromObjNum(newWatchlist[i]));
            if (sat !== null) {
                newWatchlist[i] = sat.id;
                _watchlistInViewList.push(false);
            }
            else {
                // DEBUG:
                // console.debug('Watchlist File Format Incorret');
                return;
            }
        }
        if (sensorManager.checkSensorSelected() && newWatchlist.length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay').removeClass('bmenu-item-disabled');
        }
        updateWatchlist(newWatchlist, _watchlistInViewList, true);
    }
});
const pushOverlayElement = (satSet, nextPassArrayIn, s, propTime, infoOverlayDOM) => {
    if (typeof (satSet === null || satSet === void 0 ? void 0 : satSet.getSatInViewOnly) !== 'function')
        throw new Error('satSet is not proper satSet Object');
    const satInView = satSet.getSatInViewOnly(satSet.getIdFromObjNum(nextPassArrayIn[s].sccNum)).inView;
    // If old time and not in view, skip it
    if (nextPassArrayIn[s].time - propTime < -1000 * 60 * 5 && !satInView)
        return;
    // Get the pass Time
    const time = (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(nextPassArrayIn[s].time, 'isoTime', true);
    // Yellow - In View and Time to Next Pass is +/- 30 minutes
    if (satInView && nextPassArrayIn[s].time - propTime < 1000 * 60 * 30 && propTime - nextPassArrayIn[s].time < 1000 * 60 * 30) {
        infoOverlayDOM.push('<div class="row"><h5 class="center-align watchlist-object link" style="color: yellow">' + nextPassArrayIn[s].sccNum + ': ' + time + '</h5></div>');
        return;
    }
    // Blue - Time to Next Pass is between 10 minutes before and 20 minutes after the current time
    // This makes recent objects stay at the top of the list in blue
    if (nextPassArrayIn[s].time - propTime < 1000 * 60 * 10 && propTime - nextPassArrayIn[s].time < 1000 * 60 * 20) {
        infoOverlayDOM.push('<div class="row"><h5 class="center-align watchlist-object link" style="color: blue">' + nextPassArrayIn[s].sccNum + ': ' + time + '</h5></div>');
        return;
    }
    // White - Any future pass not fitting the above requirements
    if (nextPassArrayIn[s].time - propTime > 0) {
        infoOverlayDOM.push('<div class="row"><h5 class="center-align watchlist-object link" style="color: white">' + nextPassArrayIn[s].sccNum + ': ' + time + '</h5></div>');
    }
};
const infoOverlayContentClick = (evt) => {
    const { satSet, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    let objNum = evt.currentTarget.textContent.split(':');
    objNum = objNum[0];
    const satId = satSet.getIdFromObjNum(objNum);
    if (satId !== null) {
        objectManager.setSelectedSat(satId);
    }
};
const watchlistListClick = (satId) => {
    const { orbitManager, uiManager, satSet, colorSchemeManager, sensorManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    for (let i = 0; i < watchlistList.length; i++) {
        if (watchlistList[i] === satId) {
            orbitManager.removeInViewOrbit(watchlistList[i]);
            watchlistList.splice(i, 1);
            watchlistInViewList.splice(i, 1);
        }
    }
    updateWatchlist();
    if (watchlistList.length <= 0) {
        uiManager.doSearch('');
        satSet.setColorScheme(colorSchemeManager.default, true);
        uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
    }
    if (!sensorManager.checkSensorSelected() || watchlistList.length <= 0) {
        isWatchlistChanged = false;
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay').addClass('bmenu-item-disabled');
    }
};
const watchlistContentEvent = (e, satId) => {
    const { satSet, sensorManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    satId !== null && satId !== void 0 ? satId : (satId = satSet.getIdFromObjNum(jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-new').val()));
    let duplicate = false;
    for (let i = 0; i < watchlistList.length; i++) {
        // No duplicates
        if (watchlistList[i] === satId)
            duplicate = true;
    }
    if (!duplicate) {
        watchlistList.push(satId);
        watchlistInViewList.push(false);
        updateWatchlist();
    }
    if (sensorManager.checkSensorSelected()) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay').removeClass('bmenu-item-disabled');
    }
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('#watchlist-new').val(''); // Clear the search box after enter pressed/selected
    if (typeof e !== 'undefined' && e !== null)
        e.preventDefault();
};
const watchlistSaveClick = (evt) => {
    const { satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    const saveWatchlist = [];
    for (let i = 0; i < watchlistList.length; i++) {
        const sat = satSet.getSatExtraOnly(watchlistList[i]);
        saveWatchlist[i] = sat.sccNum;
    }
    const variable = JSON.stringify(saveWatchlist);
    const blob = new Blob([variable], {
        type: 'text/plain;charset=utf-8',
    });
    try {
        (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.saveAs)(blob, 'watchlist.json');
    }
    catch (e) {
        _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.toast('Error saving watchlist', 'critical');
    }
    evt.preventDefault();
};
const watchlistFileChange = (evt) => {
    if (evt === null)
        throw new Error('evt is null');
    if (!window.FileReader)
        return; // Browser is not compatible
    const reader = new FileReader();
    reader.onload = function (e) {
        watchListReaderOnLoad(e);
    };
    reader.readAsText(evt.target.files[0]);
    evt.preventDefault();
};
const watchListReaderOnLoad = (evt) => {
    const { satSet, uiManager, sensorManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (evt.target.readyState !== 2)
        return;
    if (evt.target.error) {
        _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.toast('Error reading watchlist', 'critical');
        return;
    }
    let newWatchlist;
    try {
        newWatchlist = JSON.parse(evt.target.result);
    }
    catch (_a) {
        uiManager.toast('Watchlist file format incorrect!', 'critical');
        return;
    }
    if (newWatchlist.length === 0) {
        uiManager.toast('Watchlist file format incorrect!', 'critical');
        return;
    }
    watchlistInViewList = [];
    for (let i = 0; i < newWatchlist.length; i++) {
        const sat = satSet.getSatExtraOnly(satSet.getIdFromObjNum(newWatchlist[i]));
        if (sat !== null && sat.id > 0) {
            newWatchlist[i] = sat.id;
            watchlistInViewList.push(false);
        }
        else {
            uiManager.toast('Sat ' + newWatchlist[i] + ' not found!', 'caution');
            continue;
        }
    }
    watchlistList = newWatchlist;
    updateWatchlist();
    if (sensorManager.checkSensorSelected()) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay').removeClass('bmenu-item-disabled');
    }
};
const menuSelectableClick = () => {
    if (watchlistList.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('#menu-info-overlay').removeClass('bmenu-item-disabled');
    }
};


/***/ }),

/***/ "./src/img/add.png":
/*!*************************!*\
  !*** ./src/img/add.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cbf7f1f75d04be1202b.png";

/***/ }),

/***/ "./src/img/icons/info.png":
/*!********************************!*\
  !*** ./src/img/icons/info.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "109614bf17ac9274b860.png";

/***/ }),

/***/ "./src/img/icons/watchlist.png":
/*!*************************************!*\
  !*** ./src/img/icons/watchlist.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "deea45c04e8d7f59d012.png";

/***/ }),

/***/ "./src/img/remove.png":
/*!****************************!*\
  !*** ./src/img/remove.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1940e17415631cd11167.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_watchlist_watchlist_ts.8cb5b2cfdd61ae9bd4de.js.map