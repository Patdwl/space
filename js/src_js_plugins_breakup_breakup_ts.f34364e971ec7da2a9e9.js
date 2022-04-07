"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_breakup_breakup_ts"],{

/***/ "./src/js/plugins/breakup/breakup.ts":
/*!*******************************************!*\
  !*** ./src/js/plugins/breakup/breakup.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "breakupOnSubmit": () => (/* binding */ breakupOnSubmit),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/helpers */ "./src/js/lib/helpers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_img_icons_breakup_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/img/icons/breakup.png */ "./src/img/icons/breakup.png");




let isBreakupMenuOpen = false;
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'breakup',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'breakup',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'breakup',
        cb: hideSideMenus,
    });
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
      <div id="breakup-menu" class="side-menu-parent start-hidden text-select">
        <div id="breakup-content" class="side-menu">
          <div class="row">
            <h5 class="center-align">Breakup Simulator</h5>
            <form id="breakup" class="col s12">
              <div class="input-field col s12">
                <input disabled value="00005" id="hc-scc" type="text" />
                <label for="disabled" class="active">Satellite SCC#</label>
              </div>
              <div class="input-field col s12">
                <select id="hc-inc">
                  <option value="0">0 Degrees</option>
                  <option value="0.5">0.5 Degrees</option>
                  <option value="0.75">0.75 Degrees</option>
                  <option value="1" selected>1 Degrees</option>
                  <option value="1.25">1.25 Degrees</option>
                  <option value="1.5">1.5 Degrees</option>
                  <option value="1.75">1.75 Degrees</option>
                  <option value="2">2 Degrees</option>
                  <option value="2.25">2.25 Degrees</option>
                  <option value="2.5">2.5 Degrees</option>
                </select>
                <label>Inclination Variation</label>
              </div>
              <div class="input-field col s12">
                <select id="hc-per">
                  <option value="0">0 Percent</option>
                  <option value="0.01">1 Percent</option>
                  <option value="0.02" selected>2 Percent</option>
                  <option value="0.03">3 Percent</option>
                  <option value="0.04">4 Percent</option>
                  <option value="0.05">5 Percent</option>
                </select>
                <label>Period Variation</label>
              </div>
              <div class="input-field col s12">
                <select id="hc-raan">
                  <option value="0">0 Degrees</option>
                  <option value="0.5">0.5 Degrees</option>
                  <option value="0.75">0.75 Degrees</option>
                  <option value="1" selected>1 Degrees</option>
                  <option value="1.25">1.25 Degrees</option>
                  <option value="1.5">1.5 Degrees</option>
                  <option value="1.75">1.75 Degrees</option>
                  <option value="2">2 Degrees</option>
                  <option value="2.25">2.25 Degrees</option>
                  <option value="2.5">2.5 Degrees</option>
                </select>
                <label>Right Ascension Variation</label>
              </div>
              <div class="center-align">
                <button class="btn btn-ui waves-effect waves-light" type="submit" name="action">Create Breakup &#9658;</button>
              </div>
            </form>
          </div>
        </div>
      </div>   
    `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
      <div id="menu-breakup" class="bmenu-item bmenu-item-disabled">
        <img
          alt="breakup"
          src="" delayedsrc=${_app_img_icons_breakup_png__WEBPACK_IMPORTED_MODULE_3__}/>
        <span class="bmenu-title">Breakup</span>
        <div class="status-icon"></div>
      </div>
    `);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#breakup').on('submit', function (e) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeIn(1000, breakupOnSubmit);
        e.preventDefault();
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#breakup-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
};
// This is intentionally complex to reduce object creation and GC
// Splitting it into subfunctions would not be optimal
const breakupOnSubmit = () => {
    const { orbitManager, satellite, timeManager, uiManager, satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    let satId = satSet.getIdFromObjNum(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#hc-scc').val());
    const mainsat = satSet.getSat(satId);
    const origsat = mainsat;
    // Launch Points are the Satellites Current Location
    // TODO: Remove TEARR References
    const TEARR = mainsat.getTEARR();
    const launchLat = satellite.degreesLat(TEARR.lat);
    const launchLon = satellite.degreesLong(TEARR.lon);
    const simulationTimeObj = timeManager.calculateSimulationTime();
    const upOrDown = mainsat.getDirection();
    const currentEpoch = satellite.currentEpoch(simulationTimeObj);
    mainsat.TLE1 = mainsat.TLE1.substr(0, 18) + currentEpoch[0] + currentEpoch[1] + mainsat.TLE1.substr(32);
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.mainCamera.isCamSnapMode = false;
    const alt = mainsat.apogee - mainsat.perigee < 300 ? 0 : TEARR.alt; // Ignore argument of perigee for round orbits OPTIMIZE
    let TLEs = satellite.getOrbitByLatLon(mainsat, launchLat, launchLon, upOrDown, simulationTimeObj, alt);
    const TLE1 = TLEs[0];
    const TLE2 = TLEs[1];
    satSet.satCruncher.postMessage({
        typ: 'satEdit',
        id: satId,
        TLE1: TLE1,
        TLE2: TLE2,
    });
    orbitManager.updateOrbitBuffer(satId, true, TLE1, TLE2);
    const meanmoVariation = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#hc-per').val());
    const incVariation = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#hc-inc').val());
    const rascVariation = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#hc-raan').val());
    // TODO: Is this needed still?
    // const eVariation = 0.001;
    // const origEcc = mainsat.eccentricity;
    // NOTE: Previously we used - settingsManager.maxAnalystSats;
    const breakupCount = 256;
    for (let i = 0; i < breakupCount; i++) {
        for (let incIterat = 0; incIterat <= 4; incIterat++) {
            for (let meanmoIterat = 0; meanmoIterat <= 4; meanmoIterat++) {
                for (let rascIterat = 0; rascIterat <= 4; rascIterat++) {
                    if (i >= breakupCount)
                        break;
                    satId = satSet.getIdFromObjNum(80000 + i);
                    satSet.getSat(satId); // TODO: This may be unnecessary needs tested
                    let sat = origsat;
                    let iTLE1 = '1 ' + (80000 + i) + TLE1.substr(7);
                    const rascOffset = -rascVariation / 2 + rascVariation * (rascIterat / 4);
                    // TODO: Is this needed still?
                    // sat.eccentricity = origEcc;
                    // sat.eccentricity += -eVariation / 2 + eVariation * (eVariation / 4);
                    const newAlt = mainsat.apogee - mainsat.perigee < 300 ? 0 : TEARR.alt; // Ignore argument of perigee for round orbits OPTIMIZE
                    let iTLEs = satellite.getOrbitByLatLon(sat, launchLat, launchLon, upOrDown, simulationTimeObj, newAlt, rascOffset);
                    iTLE1 = iTLEs[0];
                    let iTLE2 = iTLEs[1];
                    // For the first 30
                    let inc = parseFloat(TLE2.substr(8, 8));
                    inc = inc - incVariation / 2 + incVariation * (incIterat / 4);
                    const incStr = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.stringPad.pad0(inc.toPrecision(7), 8);
                    // For the second 30
                    let meanmo = parseFloat(iTLE2.substr(52, 10));
                    meanmo = meanmo - (meanmo * meanmoVariation) / 2 + meanmo * meanmoVariation * (meanmoIterat / 4);
                    const meanmoStr = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.stringPad.pad0(meanmo.toPrecision(10), 8);
                    iTLE2 = `2 ${80000 + i} ${incStr} ${iTLE2.substr(17, 35)}${meanmoStr}${iTLE2.substr(63)}`;
                    sat = satSet.getSat(satId);
                    sat.TLE1 = iTLE1;
                    sat.TLE2 = iTLE2;
                    sat.active = true;
                    if (satellite.altitudeCheck(iTLE1, iTLE2, timeManager.calculateSimulationTime()) > 1) {
                        satSet.satCruncher.postMessage({
                            typ: 'satEdit',
                            id: satId,
                            TLE1: iTLE1,
                            TLE2: iTLE2,
                        });
                        orbitManager.updateOrbitBuffer(satId, true, iTLE1, iTLE2);
                    }
                    else {
                        // DEBUG:
                        // console.debug('Breakup Generator Failed');
                    }
                    // TODO: This is a terrible implementation but removing it crashes everything
                    i++; // NOSONAR
                }
            }
        }
    }
    uiManager.doSearch(`${mainsat.sccNum},Analyst Sat`);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeOut('slow');
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#breakup-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-breakup').removeClass('bmenu-item-selected');
    isBreakupMenuOpen = false;
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-breakup') {
        const { uiManager, satSet, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
        if (isBreakupMenuOpen) {
            isBreakupMenuOpen = false;
            uiManager.hideSideMenus();
            return;
        }
        else {
            if (objectManager.selectedSat !== -1) {
                if (settingsManager.isMobileModeEnabled)
                    uiManager.searchToggle(false);
                uiManager.hideSideMenus();
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#breakup-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-breakup').addClass('bmenu-item-selected');
                isBreakupMenuOpen = true;
                const sat = satSet.getSatExtraOnly(objectManager.selectedSat);
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#hc-scc').val(sat.sccNum);
            }
            else {
                if (settingsManager.plugins.topMenu)
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.adviceManager.adviceList.breakupDisabled();
                uiManager.toast(`Select a Satellite First!`, 'caution');
                if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-breakup:animated').length) {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-breakup').effect('shake', {
                        distance: 10,
                    });
                }
            }
            return;
        }
    }
};


/***/ }),

/***/ "./src/img/icons/breakup.png":
/*!***********************************!*\
  !*** ./src/img/icons/breakup.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d838926e61567ce5ce2.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_breakup_breakup_ts.f34364e971ec7da2a9e9.js.map