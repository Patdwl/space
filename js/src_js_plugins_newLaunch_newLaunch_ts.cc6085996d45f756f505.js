"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_newLaunch_newLaunch_ts"],{

/***/ "./src/js/plugins/newLaunch/newLaunch.ts":
/*!***********************************************!*\
  !*** ./src/js/plugins/newLaunch/newLaunch.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newLaunchSubmit": () => (/* binding */ newLaunchSubmit),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "adviceReady": () => (/* binding */ adviceReady)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/constants */ "./src/js/lib/constants.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_img_icons_rocket_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/img/icons/rocket.png */ "./src/img/icons/rocket.png");




let isNewLaunchMenuOpen = false;
const newLaunchSubmit = () => {
    const { timeManager, mainCamera, satellite, satSet, orbitManager, uiManager, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    const scc = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#nl-scc').val();
    const satId = satSet.getIdFromObjNum(scc);
    let sat = satSet.getSat(satId);
    const upOrDown = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#nl-updown').val();
    const launchFac = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#nl-facility').val();
    let launchLat, launchLon;
    if (objectManager.isLaunchSiteManagerLoaded) {
        for (const launchSite in objectManager.launchSiteManager.launchSiteList) {
            if (objectManager.launchSiteManager.launchSiteList[launchSite].name === launchFac) {
                launchLat = objectManager.launchSiteManager.launchSiteList[launchSite].lat;
                launchLon = objectManager.launchSiteManager.launchSiteList[launchSite].lon;
            }
        }
    }
    if (launchLon > 180) {
        // if West not East
        launchLon -= 360; // Convert from 0-360 to -180-180
    }
    // if (sat.inclination * RAD2DEG < launchLat) {
    //   keepTrackApi.programs.uiManager.toast(`Satellite Inclination Lower than Launch Latitude!`, 'critical');
    //   $('#loading-screen').fadeOut('slow');
    //   return;
    // }
    // Set time to 0000z for relative time.
    const today = new Date(); // Need to know today for offset calculation
    const quadZTime = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0); // New Date object of the future collision
    // Date object defaults to local time.
    quadZTime.setUTCHours(0); // Move to UTC Hour
    timeManager.changeStaticOffset(quadZTime.getTime() - today.getTime()); // Find the offset from today
    mainCamera.isCamSnapMode = false;
    const simulationTimeObj = timeManager.calculateSimulationTime();
    const TLEs = satellite.getOrbitByLatLon(sat, launchLat, launchLon, upOrDown, simulationTimeObj);
    const TLE1 = TLEs[0];
    const TLE2 = TLEs[1];
    if (satellite.altitudeCheck(TLE1, TLE2, simulationTimeObj) > 1) {
        satSet.satCruncher.postMessage({
            typ: 'satEdit',
            id: satId,
            active: true,
            TLE1: TLE1,
            TLE2: TLE2,
        });
        orbitManager.updateOrbitBuffer(satId, true, TLE1, TLE2);
    }
    else {
        uiManager.toast(`Failed Altitude Test - Try a Different Satellite!`, 'critical');
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeOut('slow');
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="newLaunch-menu" class="side-menu-parent start-hidden text-select">
          <div id="newLaunch-content" class="side-menu">
            <div class="row">
              <h5 class="center-align">New Launch</h5>
              <form id="newLaunch" class="col s12">
                <div class="input-field col s12">
                  <input disabled value="00005" id="nl-scc" type="text">
                  <label for="disabled" class="active">Satellite SCC#</label>
                </div>
                <div class="input-field col s12">
                  <input disabled value="50.00" id="nl-inc" type="text">
                  <label for="disabled" class="active">Inclination</label>
                </div>
                <div class="input-field col s12">
                  <select value="50.00" id="nl-updown" type="text">
                    <option value="N">North</option>
                    <option value="S">South</option>
                  </select>
                  <label for="disabled">Launching North or South</label>
                </div>
                <div class="input-field col s12" id="nl-launch-menu">
                  <select id="nl-facility">
                    <optgroup label="United States">
                      <option value="CAS">Canary Island Air Space (Pegasus)</option>
                      <option value="AFETR">Cape Canaveral AFS | Kennedy Space Center</option>
                      <option value="ERAS">Eastern Range Air Space (Pegasus)</option>
                      <option value="KODAK">Kodiak Launch Complex</option>
                      <option value="KWAJ">Reagan Test Site</option>
                      <option value="AFWTR">Vandenberg AFB</option>
                      <option value="WLPIS">Wallops Flight Facility</option>
                      <option value="WRAS">Western Range Air Space (Pegasus)</option>
                    </optgroup>
                    <optgroup label="Russia">
                      <option value="KYMTR">Kasputin Yar MSC</option>
                      <option value="PKMTR">Plesetsk MSC</option>
                      <option value="SEAL">Sea Launch Platform</option>
                      <option value="SADOL">Submarine Launch, Barents Sea</option>
                      <option value="TTMTR">Tyuratam MSC | Baikonur Cosmodrome</option>
                      <option value="VOSTO">Vostochny Cosmodrome</option>
                      <option value="OREN">Yasny (Dombarovskiy) Cosmodrome</option>
                    </optgroup>
                    <optgroup label="China">
                      <option value="JSC">Jiuquan SLC</option>
                      <option value="TSC">Taiyuan SLC</option>
                      <option value="WSC">Wenchang SLC</option>
                      <option value="XSC">Xichang SLC</option>
                    </optgroup>
                    <optgroup label="Japan">
                      <option value="TNSTA">Tanegashima Space Center</option>
                      <option value="KSCUT">Uchinoura Space Center</option>
                    </optgroup>
                    <optgroup label="North Korea">
                      <option value="YUN">Sohae Satellite Launch Station</option>
                      <option value="TNGH">Tonghae Satellite Launching Ground</option>
                    </optgroup>
                    <optgroup label="Other">
                      <option value="FRGUI">Guiana Space Centre (Kourou FG)</option>
                      <option value="HGSTR">Hammaguira Space Track Range</option>
                      <option value="NSC">Naro Space Center</option>
                      <option value="YAVNE">Palmachim Air Force Base</option>
                      <option value="RLLC">Rocket Labs Launch Complex</option>
                      <option value="SNMLP">San Marco Launch Platform</option>
                      <option value="SRI">Satish Dhawan Space Centre (Sriharikota IN)</option>
                      <option value="SEM">Semnan Spaceport</option>
                      <option value="WOMRA">Woomera Test Range</option>
                    </optgroup>
                  </select>
                  <label>Launch Facility</label>
                </div>
                <div class="center-align">
                  <button class="btn btn-ui waves-effect waves-light" type="submit" name="action">Create Launch
                    Nominal &#9658;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      `);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#newLaunch').on('submit', function (e) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeIn(1000, newLaunchSubmit);
        e.preventDefault();
    });
    // Allow resizing of the side menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#newLaunch-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="menu-newLaunch" class="bmenu-item bmenu-item-disabled">
          <img alt="rocket" src="" delayedsrc=${_app_img_icons_rocket_png__WEBPACK_IMPORTED_MODULE_3__}/>
          <span class="bmenu-title">New Launch</span>
          <div class="status-icon"></div>
        </div>  
      `);
};
const bottomMenuClick = (iconName) => {
    var _a;
    const aM = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.adviceManager;
    if (iconName === 'menu-newLaunch') {
        if (isNewLaunchMenuOpen) {
            isNewLaunchMenuOpen = false;
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.hideSideMenus();
            return;
        }
        else {
            if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.objectManager.selectedSat !== -1) {
                if (settingsManager.isMobileModeEnabled)
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.searchToggle(false);
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.hideSideMenus();
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#newLaunch-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-newLaunch').addClass('bmenu-item-selected');
                isNewLaunchMenuOpen = true;
                const sat = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.satSet.getSatExtraOnly(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.objectManager.selectedSat);
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#nl-scc').val(sat.sccNum);
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#nl-inc').val((sat.inclination * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RAD2DEG).toPrecision(2));
            }
            else {
                (_a = aM.adviceList) === null || _a === void 0 ? void 0 : _a.newLaunchDisabled();
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.toast(`Select a Satellite First!`, 'caution');
                if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-newLaunch:animated').length) {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-newLaunch').effect('shake', {
                        distance: 10,
                    });
                }
            }
            return;
        }
    }
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'newLaunch',
        cb: uiManagerInit,
    });
    // Add Advice Info
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'adviceReady',
        cbName: 'newLaunch',
        cb: adviceReady,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'newLaunch',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'newLaunch',
        cb: hideSideMenus,
    });
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#newLaunch-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-newLaunch').removeClass('bmenu-item-selected');
    isNewLaunchMenuOpen = false;
};
const adviceReady = () => {
    const aM = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.adviceManager;
    aM.adviceCount.newLaunch = 0;
    aM.adviceCount.newLaunchDisabled = 0;
    aM.adviceList.newLaunchDisabled = function () {
        // Only Do this Twice
        if (aM.adviceCount.newLaunchDisabled >= 3)
            return;
        aM.adviceCount.newLaunchDisabled += 1;
        aM.showAdvice('Create Launch Nominal', 'Creating a Launch Nominal requres a satellite to be selected first. Pick a satellite whose orbit is close to your upcomming launch!', null, 'bottom-right');
    };
    aM.adviceArray.push(aM.adviceList.socrates);
};


/***/ }),

/***/ "./src/img/icons/rocket.png":
/*!**********************************!*\
  !*** ./src/img/icons/rocket.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7422f3e3be7ddb6caf66.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_newLaunch_newLaunch_ts.cc6085996d45f756f505.js.map