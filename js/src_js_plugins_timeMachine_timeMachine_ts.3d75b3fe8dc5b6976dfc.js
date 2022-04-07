"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_timeMachine_timeMachine_ts"],{

/***/ "./src/js/plugins/timeMachine/timeMachine.ts":
/*!***************************************************!*\
  !*** ./src/js/plugins/timeMachine/timeMachine.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "orbitManagerInit": () => (/* binding */ orbitManagerInit),
/* harmony export */   "timeMachineIconClick": () => (/* binding */ timeMachineIconClick),
/* harmony export */   "timeMachineRemoveSatellite": () => (/* binding */ timeMachineRemoveSatellite)
/* harmony export */ });
/* harmony import */ var _app_img_icons_time_machine_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/time-machine.png */ "./src/img/icons/time-machine.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'timeMachine',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'timeMachine',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'orbitManagerInit',
        cbName: 'timeMachine',
        cb: orbitManagerInit,
    });
};
const uiManagerInit = () => {
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-time-machine" class="bmenu-item">
          <img alt="time-machine" src="" delayedsrc="${_app_img_icons_time_machine_png__WEBPACK_IMPORTED_MODULE_0__}" />
          <span class="bmenu-title">Time Machine</span>
          <div class="status-icon"></div>
        </div>
      `);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#time-machine-icon').on('click', timeMachineIconClick);
};
const bottomMenuClick = (iconName) => {
    const { orbitManager, groupsManager, satSet, colorSchemeManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (iconName === 'menu-time-machine') {
        if (orbitManager.isTimeMachineRunning) {
            // Merge to one variable?
            orbitManager.isTimeMachineRunning = false;
            orbitManager.isTimeMachineVisible = false;
            settingsManager.colors.transparent = orbitManager.tempTransColor;
            groupsManager.clearSelect();
            satSet.setColorScheme(colorSchemeManager.default, true); // force color recalc
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-time-machine').removeClass('bmenu-item-selected');
            return;
        }
        else {
            // Merge to one variable?
            orbitManager.isTimeMachineRunning = true;
            orbitManager.isTimeMachineVisible = true;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-time-machine').addClass('bmenu-item-selected');
            orbitManager.historyOfSatellitesPlay();
            return;
        }
    }
};
const orbitManagerInit = () => {
    const { orbitManager, satSet, colorSchemeManager, groupsManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    orbitManager.playNextSatellite = (runCount, year) => {
        if (!_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.orbitManager.isTimeMachineVisible)
            return;
        // Kill all old async calls if run count updates
        if (runCount !== orbitManager.historyOfSatellitesRunCount)
            return;
        const yearGroup = groupsManager.createGroup('yearOrLess', year);
        groupsManager.selectGroup(yearGroup);
        yearGroup.updateOrbits(orbitManager, orbitManager);
        satSet.setColorScheme(colorSchemeManager.group, true); // force color recalc
        if (year >= 59 && year < 100) {
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.toast(`Time Machine In Year 19${year}!`, 'normal');
        }
        else {
            const yearStr = year < 10 ? `0${year}` : `${year}`;
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.toast(`Time Machine In Year 20${yearStr}!`, 'normal');
        }
        if (year == parseInt(new Date().getUTCFullYear().toString().slice(2, 4))) {
            setTimeout(function () {
                timeMachineRemoveSatellite(runCount, orbitManager, groupsManager, satSet, colorSchemeManager);
            }, 10000); // Linger for 10 seconds
        }
    };
    // Used to kill old async calls
    orbitManager.historyOfSatellitesRunCount = 0;
    orbitManager.historyOfSatellitesPlay = () => {
        orbitManager.historyOfSatellitesRunCount++;
        orbitManager.isTimeMachineRunning = true;
        orbitManager.tempTransColor = settingsManager.colors.transparent;
        settingsManager.colors.transparent = [0, 0, 0, 0];
        for (let yy = 0; yy <= 200; yy++) {
            let year = 59 + yy;
            if (year >= 100)
                year = year - 100;
            setTimeout(
            // eslint-disable-next-line no-loop-func
            function (runCount) {
                orbitManager.playNextSatellite(runCount, year);
            }, settingsManager.timeMachineDelay * yy, orbitManager.historyOfSatellitesRunCount);
            if (year == 20)
                break;
        }
    };
};
const timeMachineIconClick = () => {
    const { searchBox, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#time-machine-menu').css('display') === 'block') {
        uiManager.legendMenuChange('clear');
    }
    else {
        uiManager.legendMenuChange('timeMachine');
        searchBox.hideResults();
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results').hide();
    }
};
const timeMachineRemoveSatellite = (runCount, orbitManager, groupsManager, satSet, colorSchemeManager) => {
    if (runCount !== orbitManager.historyOfSatellitesRunCount)
        return;
    if (!orbitManager.isTimeMachineVisible)
        return;
    settingsManager.colors.transparent = orbitManager.tempTransColor;
    orbitManager.isTimeMachineRunning = false;
    groupsManager.clearSelect();
    satSet.setColorScheme(colorSchemeManager.default, true);
};


/***/ }),

/***/ "./src/img/icons/time-machine.png":
/*!****************************************!*\
  !*** ./src/img/icons/time-machine.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a04efb1b9707c6f4b44b.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_timeMachine_timeMachine_ts.3d75b3fe8dc5b6976dfc.js.map