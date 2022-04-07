"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_shortTermFences_shortTermFences_ts"],{

/***/ "./src/js/plugins/shortTermFences/shortTermFences.ts":
/*!***********************************************************!*\
  !*** ./src/js/plugins/shortTermFences/shortTermFences.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "resetSensor": () => (/* binding */ resetSensor),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "selectSatData": () => (/* binding */ selectSatData),
/* harmony export */   "setSensor": () => (/* binding */ setSensor),
/* harmony export */   "stfFormOnSubmit": () => (/* binding */ stfFormOnSubmit),
/* harmony export */   "stfOnObjectLinkClick": () => (/* binding */ stfOnObjectLinkClick)
/* harmony export */ });
/* harmony import */ var _app_img_icons_search_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/search.png */ "./src/img/icons/search.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sensor_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sensor/sensor */ "./src/js/plugins/sensor/sensor.ts");




let isStfMenuOpen = false;
let stfInfoLinks = false;
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'shortTermFences',
        cb: () => uiManagerInit(),
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'shortTermFences',
        cb: (iconName) => bottomMenuClick(iconName),
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'resetSensor',
        cbName: 'shortTermFences',
        cb: () => resetSensor(),
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'setSensor',
        cbName: 'shortTermFences',
        cb: (sensor, id) => setSensor(sensor, id),
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'shortTermFences',
        cb: () => hideSideMenus(),
    });
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
      <div id="stf-menu" class="side-menu-parent start-hidden text-select">
        <div id="stf-content" class="side-menu">
          <div class="row">
            <h5 class="center-align">Short Term Fence</h5>
            <form id="stfForm">
              <div id="stf-az-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Search Center Azimuth Point in degrees (ex: 50)">
                <input id="stf-az" type="text" value="50" />
                <label for="stf-az" class="active">Center Azimuth</label>
              </div>
              <div id="stf-azExt-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Total Extent Outside of Center Azimuth in degrees (ex: 4)">
                <input id="stf-azExt" type="text" value="4" />
                <label for="stf-azExt" class="active">Azimuth Extent</label>
              </div>
              <div id="stf-el-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Search Center Elevation Point in degrees (ex: 20)">
                <input id="stf-el" type="text" value="20" />
                <label for="stf-el" class="active">Center Elevation</label>
              </div>
              <div id="stf-elExt-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Total Extent Outside of Center Elevation in degrees (ex: 4)">
                <input id="stf-elExt" type="text" value="4" />
                <label for="stf-elExt" class="active">Elevation Extent</label>
              </div>
              <div id="stf-rng-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Search Center Range Point in kilometers (ex: 1000)">
                <input id="stf-rng" type="text" value="1000" />
                <label for="stf-rng" class="active">Center Range</label>
              </div>
              <div id="stf-rngExt-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Total Extent Outside of Center Range in kilometers (ex: 100)">
                <input id="stf-rngExt" type="text" value="100" />
                <label for="stf-rngExt" class="active">Range Extent</label>
              </div>
              <div class="center-align">
                <button id="stf-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Create Short Term Fence &#9658;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
      <div id="menu-stf" class="bmenu-item">
        <img
          alt="stf"
          src="" delayedsrc=${_app_img_icons_search_png__WEBPACK_IMPORTED_MODULE_0__}
        />
        <span class="bmenu-title">Short Term Fence</span>
        <div class="status-icon"></div>
      </div>
    `);
    // Register orbital element data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'stfInfoTopLinks',
        cb: () => {
            selectSatData(stfInfoLinks);
            stfInfoLinks = true;
        },
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stfForm').on('submit', stfFormOnSubmit);
};
const bottomMenuClick = (iconName) => {
    const { sensorManager, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (iconName === 'menu-stf') {
        if (!sensorManager.checkSensorSelected()) {
            // No Sensor Selected
            uiManager.toast(`Select a Sensor First!`, 'caution', true);
            if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-stf:animated').length) {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-stf').effect('shake', {
                    distance: 10,
                });
            }
            return;
        }
        if (isStfMenuOpen) {
            uiManager.hideSideMenus();
            isStfMenuOpen = false;
            return;
        }
        else {
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            isStfMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-stf').addClass('bmenu-item-selected');
            return;
        }
    }
};
const resetSensor = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-stf').addClass('bmenu-item-disabled');
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-stf').removeClass('bmenu-item-selected');
    isStfMenuOpen = false;
};
const selectSatData = (isShowStfLink) => {
    if (!isShowStfLink) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sat-info-top-links').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="stf-on-object-link" class="link sat-infobox-links">Build Short Term Fence on this object...</div>
      `);
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-on-object-link').on('click', stfOnObjectLinkClick);
    }
};
const setSensor = (sensor, id) => {
    if (sensor == null && id == null) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-stf').addClass('bmenu-item-disabled');
    }
    else {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-stf').removeClass('bmenu-item-disabled');
    }
};
const stfFormOnSubmit = (e) => {
    const { sensorManager, satellite, satSet, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    e.preventDefault();
    if (!sensorManager.checkSensorSelected()) {
        uiManager.toast(`Select a Sensor First!`, 'caution', true);
        return;
    }
    const { lat, lon, alt } = sensorManager.currentSensor[0];
    const sensorType = 'Short Range Fence';
    // Multiply everything by 1 to convert string to number
    const az = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-az').val());
    const azExt = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-azExt').val());
    const el = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-el').val());
    const elExt = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-elExt').val());
    const rng = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-rng').val());
    const rngExt = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-rngExt').val());
    const minaz = az - azExt < 0 ? az - azExt + 360 : az - azExt;
    const maxaz = az + azExt > 360 ? az + azExt - 360 : az + azExt;
    const minel = el - elExt;
    const maxel = el + elExt;
    const minrange = rng - rngExt;
    const maxrange = rng + rngExt;
    const stfSensor = {
        lat,
        lon,
        alt,
        obsminaz: minaz,
        obsmaxaz: maxaz,
        obsminel: minel,
        obsmaxel: maxel,
        obsminrange: minrange,
        obsmaxrange: maxrange,
        type: sensorType,
    };
    const customSensors = (0,_sensor_sensor__WEBPACK_IMPORTED_MODULE_3__.addCustomSensor)(stfSensor);
    sensorManager.whichRadar = customSensors.length > 1 ? 'MULTI CUSTOM' : 'CUSTOM';
    satSet.satCruncher.postMessage({
        typ: 'sensor',
        setlatlong: true,
        sensor: customSensors,
        multiSensor: customSensors.length > 1,
    });
    satellite.setobs(customSensors);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sensor-selected').text('Short Term Fence');
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.sensorFov.enableFovView();
};
const stfOnObjectLinkClick = () => {
    const { satellite, uiManager, sensorManager, objectManager, satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (!sensorManager.checkSensorSelected()) {
        // No Sensor Selected
        uiManager.toast(`Select a Sensor First!`, 'caution', true);
        return;
    }
    // Update TEARR
    satellite.getTEARR(satSet.getSat(objectManager.selectedSat));
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-az').val(satellite.currentTEARR.az.toFixed(1));
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-el').val(satellite.currentTEARR.el.toFixed(1));
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-rng').val(satellite.currentTEARR.rng.toFixed(1));
    uiManager.hideSideMenus();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#stf-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
    isStfMenuOpen = true;
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-stf').addClass('bmenu-item-selected');
};


/***/ }),

/***/ "./src/img/icons/search.png":
/*!**********************************!*\
  !*** ./src/img/icons/search.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1710e61256b024a961d3.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_shortTermFences_shortTermFences_ts.4e77f16dd1ef9edd44d9.js.map