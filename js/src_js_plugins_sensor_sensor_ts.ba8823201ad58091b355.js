"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_sensor_sensor_ts"],{

/***/ "./src/js/plugins/sensor/sensor.ts":
/*!*****************************************!*\
  !*** ./src/js/plugins/sensor/sensor.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetSensorButtonClick": () => (/* binding */ resetSensorButtonClick),
/* harmony export */   "clearCustomSensors": () => (/* binding */ clearCustomSensors),
/* harmony export */   "csTelescopeClick": () => (/* binding */ csTelescopeClick),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "resetSensorSelected": () => (/* binding */ resetSensorSelected),
/* harmony export */   "sensorListContentClick": () => (/* binding */ sensorListContentClick),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "selectSatData": () => (/* binding */ selectSatData),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "addCustomSensor": () => (/* binding */ addCustomSensor),
/* harmony export */   "customSensorSubmit": () => (/* binding */ customSensorSubmit)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_img_icons_radio_tower_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/img/icons/radio-tower.png */ "./src/img/icons/radio-tower.png");
/* harmony import */ var _app_img_icons_radar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/img/icons/radar.png */ "./src/img/icons/radar.png");
/* harmony import */ var _app_img_icons_custom_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/img/icons/custom.png */ "./src/img/icons/custom.png");
/* harmony import */ var _app_img_icons_lookangles_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/img/icons/lookangles.png */ "./src/img/icons/lookangles.png");
/* harmony import */ var _app_img_icons_multi_site_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/img/icons/multi-site.png */ "./src/img/icons/multi-site.png");
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







let sensorLinks = false;
let isSensorListMenuOpen = false;
let isSensorInfoMenuOpen = false;
let isLookanglesMultiSiteMenuOpen = false;
let customSensors = [];
const resetSensorButtonClick = () => {
    settingsManager.isForceColorScheme = false;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sensor-info').addClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-fov-bubble').addClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-surveillance').addClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-planetarium').addClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-astronomy').addClass('bmenu-item-disabled');
    resetSensorSelected();
};
const clearCustomSensors = () => {
    const { sensorManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    customSensors = [];
    if (sensorManager.whichRadar === 'MULTI CUSTOM' || sensorManager.whichRadar === 'CUSTOM') {
        resetSensorButtonClick();
    }
};
const csTelescopeClick = () => {
    const { sensorManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-telescope').is(':checked')) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minaz-div').hide();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxaz-div').hide();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minel-div').hide();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxel-div').hide();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minrange-div').hide();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxrange-div').hide();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minaz').val(0);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxaz').val(360);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minel').val(10);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxel').val(90);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minrange').val(100);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxrange').val(1000000);
    }
    else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minaz-div').show();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxaz-div').show();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minel-div').show();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxel-div').show();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minrange-div').show();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxrange-div').show();
        if (sensorManager.checkSensorSelected()) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minaz').val(sensorManager.currentSensor[0].obsminaz);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxaz').val(sensorManager.currentSensor[0].obsmaxaz);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minel').val(sensorManager.currentSensor[0].obsminel);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxel').val(sensorManager.currentSensor[0].obsmaxel);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minrange').val(sensorManager.currentSensor[0].obsminrange);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxrange').val(sensorManager.currentSensor[0].obsmaxrange);
        }
    }
};
const uiManagerInit = () => {
    const { satellite, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#nav-mobile').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
    <div id="sensor-selected"></div>
  `);
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="sensor-list-menu" class="side-menu-parent start-hidden text-select">
          <div id="sensor-list-content" class="side-menu">                  
            <div class="row">
              <ul id="reset-sensor-text" class="sensor-reset-menu">
                <h5 id="reset-sensor-button" class="center-align menu-selectable">Reset Sensor</h5>
                <li class="divider"></li>
              </ul>
              <ul>
                <h5 class="center-align">CSpOC Sensors</h5>
                <li class="divider"></li>
                <li class="menu-selectable" data-sensor="cspocAll">All CSpOC Sensors<span class="badge dark-blue-badge"
                    data-badge-caption="Coalition"></span></li>
                <li class="menu-selectable" data-sensor="mwAll">All MW Sensors<span class="badge dark-blue-badge"
                    data-badge-caption="Coalition"></span></li>
                <li class="menu-selectable" data-sensor="BLE">Beale<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="menu-selectable" data-sensor="COD">Cape Cod<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="menu-selectable" data-sensor="CAV">Cavalier<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="menu-selectable" data-sensor="CLR">Clear<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="menu-selectable" data-sensor="CDN">Cobra Dane<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="menu-selectable" data-sensor="EGL">Eglin<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="menu-selectable" data-sensor="FYL">Fylingdales<span class="badge dark-blue-badge"
                    data-badge-caption="RAF"></span></li>
                <li class="menu-selectable" data-sensor="GLB">Globus II<span class="badge dark-blue-badge"
                    data-badge-caption="NOR"></span></li>
                <li class="menu-selectable" data-sensor="MIL">Millstone<span class="badge dark-blue-badge"
                    data-badge-caption="MIT"></span></li>
                <li class="menu-selectable" data-sensor="THL">Thule<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="menu-selectable" data-sensor="ASC">Ascension<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="menu-selectable" data-sensor="ALT">ALTAIR<span class="badge dark-blue-badge"
                    data-badge-caption="USA"></span></li>
                <li class="menu-selectable" data-sensor="MMW">Millimeter Wave<span class="badge dark-blue-badge"
                    data-badge-caption="USA"></span></li>
                <li class="menu-selectable" data-sensor="ALC">ALCOR<span class="badge dark-blue-badge"
                    data-badge-caption="USA"></span></li>
                <li class="menu-selectable" data-sensor="TDX">TRADEX<span class="badge dark-blue-badge"
                    data-badge-caption="USA"></span></li>
                <li class="menu-selectable" data-sensor="DGC">Diego Garcia<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="menu-selectable" data-sensor="MAU">Maui<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="menu-selectable" data-sensor="SOC">Socorro<span class="badge dark-blue-badge"
                    data-badge-caption="USSF"></span></li>
                <li class="divider"></li>
                <h5 class="center-align">MDA Sensors</h5>
                <li class="divider"></li>
                <li class="menu-selectable" data-sensor="mdAll">All Sensors<span class="badge dark-blue-badge"
                    data-badge-caption="Coalition"></span></li>
                <li class="menu-selectable" data-sensor="HAR">Har Keren<span class="badge dark-blue-badge"
                    data-badge-caption="ISR"></span></li>
                <li class="menu-selectable" data-sensor="QTR">CENTCOM<span class="badge dark-blue-badge"
                    data-badge-caption="USA"></span></li>
                <li class="menu-selectable" data-sensor="KUR">Kürecik<span class="badge dark-blue-badge"
                    data-badge-caption="USA"></span></li>
                <li class="menu-selectable" data-sensor="SHA">Shariki<span class="badge dark-blue-badge"
                    data-badge-caption="USA"></span></li>
                <li class="menu-selectable" data-sensor="KCS">Kyogamisaki<span class="badge dark-blue-badge"
                    data-badge-caption="USA"></span></li>
                <li class="menu-selectable" data-sensor="SBX">Sea-Based X-Band<span class="badge dark-blue-badge"
                    data-badge-caption="USN"></span></li>
                <li class="menu-selectable" data-sensor="TAI">Taiwan SRP<span class="badge dark-blue-badge"
                    data-badge-caption="TAI"></span></li>
                <li class="divider"></li>
                <h5 class="center-align">LeoLabs Sensors</h5>
                <li class="divider"></li>
                <li class="menu-selectable" data-sensor="llAll">All Sensors<span class="badge dark-blue-badge"
                    data-badge-caption="Comm"></span></li>
                <li class="menu-selectable" data-sensor="MSR">Mdata-sensorland Radar<span class="badge dark-blue-badge"
                    data-badge-caption="Comm"></span></li>
                <li class="menu-selectable" data-sensor="PFISR">PFIS Radar<span class="badge dark-blue-badge"
                    data-badge-caption="Comm"></span></li>
                <li class="menu-selectable" data-sensor="KSR">Kiwi Space Radar<span class="badge dark-blue-badge"
                    data-badge-caption="Comm"></span></li>
                <li class="divider"></li>
                <h5 class="center-align">ESOC Sensors</h5>
                <li class="divider"></li>
                <li class="menu-selectable" data-sensor="GRV">GRAVES<span class="badge dark-blue-badge"
                    data-badge-caption="FRA"></span></li>
                <li class="menu-selectable" data-sensor="FYL">Fylingdales<span class="badge dark-blue-badge"
                    data-badge-caption="RAF"></span></li>
                <li class="menu-selectable" data-sensor="TIR">TIRA<span class="badge dark-blue-badge"
                    data-badge-caption="GER"></span></li>
                <li class="menu-selectable" data-sensor="NRC">Northern Cross<span
                    class="badge dark-blue-badge" data-badge-caption="ITA"></span></li>
                <li class="menu-selectable" data-sensor="TRO">Troodos<span class="badge dark-blue-badge"
                    data-badge-caption="RAF"></span></li>
                <li class="menu-selectable" data-sensor="SDT">Space Debris Telescope<span
                    class="badge dark-blue-badge" data-badge-caption="ESA"></span></li>
                    <!-- GALILEO GROUND SENSOR STATION -->
                <li class="menu-selectable" data-sensor="GGS">GSS Fucino<span
                    class="badge dark-blue-badge" data-badge-caption="ITA"></span></li>
                    <!-- GALILEO GROUND SENSOR STATION -->
                <li class="divider"></li>
                <h5 class="center-align">Russian Sensors</h5>
                <li class="divider"></li>
                <li class="menu-selectable" data-sensor="rusAll">All Russian Sensors<span
                    class="badge dark-blue-badge" data-badge-caption="RUS"></span></li>
                <li class="menu-selectable" data-sensor="ARM">Armavir<span class="badge dark-blue-badge"
                    data-badge-caption="RUS"></span></li>
                <li class="menu-selectable" data-sensor="BAL">Balkhash<span class="badge dark-blue-badge"
                    data-badge-caption="RUS"></span></li>
                <li class="menu-selectable" data-sensor="GAN">Gantsevichi<span class="badge dark-blue-badge"
                    data-badge-caption="RUS"></span></li>
                <li class="menu-selectable" data-sensor="LEK">Lekhtusi<span class="badge dark-blue-badge"
                    data-badge-caption="RUS"></span></li>
                <li class="menu-selectable" data-sensor="MIS">Mishelevka<span class="badge dark-blue-badge"
                    data-badge-caption="RUS"></span></li>
                <li class="menu-selectable" data-sensor="OLE">Olenegorsk<span class="badge dark-blue-badge"
                    data-badge-caption="RUS"></span></li>
                <li class="menu-selectable" data-sensor="PEC">Pechora<span class="badge dark-blue-badge"
                    data-badge-caption="RUS"></span></li>
                <li class="menu-selectable" data-sensor="PIO">Pionersky<span class="badge dark-blue-badge"
                    data-badge-caption="RUS"></span></li>
                <li class="divider"></li>
                <h5 class="center-align">Chinese Sensors</h5>
                <li class="divider"></li>
                <li class="menu-selectable" data-sensor="XUA">Xuanhua<span class="badge dark-blue-badge"
                    data-badge-caption="PRC"></span></li>
                <li class="menu-selectable" data-sensor="PMO">Purple Mountain<span class="badge dark-blue-badge"
                    data-badge-caption="PRC"></span></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="customSensor-menu" class="side-menu-parent start-hidden text-select">
          <div id="customSensor-content" class="side-menu">
            <div class="row">
              <h5 class="center-align">Custom Sensor</h5>
              <form id="customSensor">
                <div class="input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Latitude in Decimal Form (ex: 43.283)">
                  <input id="cs-lat" type="text" value="0" />
                  <label for="cs-lat" class="active">Latitude</label>
                </div>
                <div class="input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Longitude in Decimal Form (ex: -73.283)">
                  <input id="cs-lon" type="text" value="0" />
                  <label for="cs-lon" class="active">Longitude</label>
                </div>
                <div class="input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Elevation in kilometers (ex: 0.645)">
                  <input id="cs-hei" type="text" value="0" />
                  <label for="cs-hei" class="active">Elevation Above Sea Level (Km)</label>
                </div>
                <div class="input-field col s12">
                  <select id="cs-type">
                    <option value="Observer">Observer</option>
                    <option value="Optical">Optical</option>
                    <option value="Phased Array Radar">Phased Array Radar</option>
                    <option value="Mechanical">Mechanical</option>
                  </select>
                  <label>Type of Sensor</label>
                </div>
                <div class="switch row tooltipped" data-position="right" data-delay="50" data-tooltip="Is this Sensor a Telescope?">
                  <label>
                    <input id="cs-telescope" type="checkbox" checked="false" />
                    <span class="lever"></span>
                    Telescope
                  </label>
                </div>
                <div id="cs-minaz-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Azimuth in degrees (ex: 50)">
                  <input id="cs-minaz" type="text" value="0" />
                  <label for="cs-minaz" class="active">Minimum Azimuth</label>
                </div>
                <div id="cs-maxaz-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Azimuth in degrees (ex: 120)">
                  <input id="cs-maxaz" type="text" value="360" />
                  <label for="cs-maxaz" class="active">Maximum Azimuth</label>
                </div>
                <div id="cs-minel-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Elevation in degrees (ex: 10)">
                  <input id="cs-minel" type="text" value="10" />
                  <label for="cs-minel" class="active">Minimum Elevation</label>
                </div>
                <div id="cs-maxel-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Elevation in degrees (ex: 90)">
                  <input id="cs-maxel" type="text" value="90" />
                  <label for="cs-maxel" class="active">Maximum Elevation</label>
                </div>
                <div id="cs-minrange-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Range in kilometers (ex: 500)">
                  <input id="cs-minrange" type="text" value="100" />
                  <label for="cs-minrange" class="active">Minimum Range</label>
                </div>
                <div id="cs-maxrange-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Range in kilometers (ex: 20000)">
                  <input id="cs-maxrange" type="text" value="50000" />
                  <label for="cs-maxrange" class="active">Maximum Range</label>
                </div>
                <div class="center-align">
                  <button id="cs-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Add Custom Sensor &#9658;</button>
                  <br />
                  <br />
                  <button id="cs-clear" class="btn btn-ui waves-effect waves-light" name="action">Clear Custom Sensors &#9658;</button>
                  <br />
                  <br />
                  <button id="cs-geolocation" class="btn btn-ui waves-effect waves-light" name="search">Use Geolocation &#9658;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="sensor-info-menu" class="side-menu-parent start-hidden text-select">
          <div id="sensor-content" class="side-menu">
            <div class="row">
              <h5 id="sensor-info-title" class="center-align">Sensor Name</h5>
              <div class="sensor-info-row" style="margin-top: 0px;">
                <div class="sensor-info-key">Country</div>
                <div class="sensor-info-value" id="sensor-country">USA</div>
              </div>
              <div class="sensor-info-row">
                <div class="sensor-info-key">Sensor Type</div>
                <div class="sensor-info-value" id="sensor-type">Unknown</div>
              </div>
              <div class="sensor-info-row">
                <div class="sensor-info-key">Latitude</div>
                <div class="sensor-info-value" id="sensor-latitude">0</div>
              </div>
              <div class="sensor-info-row">
                <div class="sensor-info-key">Longitude</div>
                <div class="sensor-info-value" id="sensor-longitude">0</div>
              </div>
              <div class="sensor-info-row">
                <div class="sensor-info-key">Min Azimuth</div>
                <div class="sensor-info-value" id="sensor-minazimuth">30 deg</div>
              </div>
              <div class="sensor-info-row">
                <div class="sensor-info-key">Max Azimuth</div>
                <div class="sensor-info-value" id="sensor-maxazimuth">30 deg</div>
              </div>
              <div class="sensor-info-row">
                <div class="sensor-info-key">Min Elevation</div>
                <div class="sensor-info-value" id="sensor-minelevation">60 deg</div>
              </div>
              <div class="sensor-info-row">
                <div class="sensor-info-key">Max Elevation</div>
                <div class="sensor-info-value" id="sensor-maxelevation">60 deg</div>
              </div>
              <div class="sensor-info-row">
                <div class="sensor-info-key">Min Range</div>
                <div class="sensor-info-value" id="sensor-minrange">1000 km</div>
              </div>
              <div class="sensor-info-row">
                <div class="sensor-info-key">Max Range</div>
                <div class="sensor-info-value" id="sensor-maxrange">1000 km</div>
              </div>
            </div>
          </div>
        </div>
        <div id="lookangles-menu" class="side-menu-parent start-hidden text-select">
          <div id="lookangles-content" class="side-menu">
            <div class="row">
              <h5 class="center-align">Sensor Look Angles</h5>
              <div class="row light-blue darken-3" style="height:4px; display:block;"></div>
              <div id="settings-lookangles">
                <h5 class="center-align">Lookangles Settings</h5>
                <div class="switch row">
                  <label>
                    <input id="settings-riseset" type="checkbox" />
                    <span class="lever"></span>
                    Show Only Rise and Set Times
                  </label>
                </div>
                <div class="input-field col s6">
                  <input value="7" id="lookanglesLength" type="text" class="tooltipped" data-position="right" data-delay="50" data-tooltip="How Many Days of Lookangles Should be Calculated" />
                  <label for="lookanglesLength" class="active">Length (Days)</label>
                </div>
                <div class="input-field col s6">
                  <input value="30" id="lookanglesInterval" type="text" class="tooltipped" data-position="right" data-delay="50" data-tooltip="Seconds Between Each Line of Lookangles" />
                  <label for="lookanglesInterval" class="active">Interval</label>
                </div>
                <div class="row"></div>
              </div>
              <table id="looks" class="center-align striped-light centered"></table>
              <br />
              <center>
                <button id="export-lookangles" class="btn btn-ui waves-effect waves-light">Export &#9658;</button>
              </center>
            </div>
          </div>
        </div>
        <div id="lookanglesmultisite-menu" class="side-menu-parent start-hidden text-select">
          <div id="lookanglesmultisite-content" class="side-menu">
            <div class="row">
              <h5 class="center-align">Multi-Sensor Look Angles</h5>
              <table id="looksmultisite" class="center-align striped-light centered"></table>
              <br />
              <center>
                <button id="export-multiSiteArray" class="btn btn-ui waves-effect waves-light">Export &#9658;</button>
              </center>
            </div>
          </div>
        </div>
      `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="menu-sensor-list" class="bmenu-item">
          <img
            alt="radar"
            src="" delayedsrc="${_app_img_icons_radar_png__WEBPACK_IMPORTED_MODULE_3__}" 
          />
          <span class="bmenu-title">Sensors</span>
          <div class="status-icon"></div>
        </div>
        <div id="menu-customSensor" class="bmenu-item">
          <img
            alt="custom"
            src="" delayedsrc="${_app_img_icons_custom_png__WEBPACK_IMPORTED_MODULE_4__}"
          />
          <span class="bmenu-title">Custom Sensor</span>
          <div class="status-icon"></div>
        </div>
        <div id="menu-sensor-info" class="bmenu-item bmenu-item-disabled">
          <img
            alt="radiotower"
            src="" delayedsrc="${_app_img_icons_radio_tower_png__WEBPACK_IMPORTED_MODULE_2__}"
          />
          <span class="bmenu-title">Sensor Info</span>
          <div class="status-icon"></div>
        </div>
        <div id="menu-lookangles" class="bmenu-item bmenu-item-disabled">
          <img
            alt="lookangles"
            src="" delayedsrc="${_app_img_icons_lookangles_png__WEBPACK_IMPORTED_MODULE_5__}"
          />
          <span class="bmenu-title">Look Angles</span>
          <div class="status-icon"></div>
        </div>
        <div id="menu-lookanglesmultisite" class="bmenu-item bmenu-item-disabled">
          <img
            alt="multisite"
            src="" delayedsrc="${_app_img_icons_multi_site_png__WEBPACK_IMPORTED_MODULE_6__}"
          />
          <span class="bmenu-title">Multi-Site Looks</span>
          <div class="status-icon"></div>
        </div>
      `);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#lookanglesLength').on('change', function () {
        satellite.lookanglesLength = parseInt(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#lookanglesLength').val());
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#lookanglesInterval').on('change', function () {
        satellite.lookanglesInterval = parseInt(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#lookanglesInterval').val());
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sensor-list-content > div > ul > .menu-selectable').on('click', (e) => {
        if (e.target.id === 'reset-sensor-button')
            return;
        const sensorClick = e.currentTarget.dataset.sensor;
        sensorListContentClick(sensorClick);
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#customSensor').on('submit', (e) => {
        e.preventDefault();
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#reset-sensor-button').on('click', resetSensorButtonClick);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-telescope').on('click', csTelescopeClick);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-submit').on('click', customSensorSubmit);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-clear').on('click', clearCustomSensors);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-geolocation').on('click', uiManager.useCurrentGeolocationAsSensor);
};
const resetSensorSelected = () => {
    const { satellite, sensorManager, colorSchemeManager, uiManager, satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    // Return to default settings with nothing 'inview'
    satellite.setobs(null);
    sensorManager.setSensor(null, null); // Pass staticNum to identify which sensor the user clicked
    // uiManager.getsensorinfo();
    if (settingsManager.currentColorScheme == colorSchemeManager.default) {
        uiManager.legendMenuChange('default');
    }
    satSet.satCruncher.postMessage({
        typ: 'sensor',
        setlatlong: true,
        resetObserverGd: true,
        sensor: [sensorManager.defaultSensor],
    });
    satSet.satCruncher.postMessage({
        isShowFOVBubble: 'reset',
        isShowSurvFence: 'disable',
    });
    settingsManager.isFOVBubbleModeOn = false;
    settingsManager.isShowSurvFence = false;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sensor-info').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-fov-bubble').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-surveillance').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-lookangles').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-planetarium').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-astronomy').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sensor-info').addClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-fov-bubble').addClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-surveillance').addClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-lookangles').addClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-planetarium').addClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-astronomy').addClass('bmenu-item-disabled');
    setTimeout(() => {
        satSet.resetSatInView();
        satSet.setColorScheme(settingsManager.currentColorScheme, true);
    }, 2000);
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.methods.resetSensor();
};
const sensorListContentClick = (sensorClick) => {
    const { adviceManager, sensorManager, uiManager, colorSchemeManager, mainCamera, timeManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (settingsManager.plugins.topMenu)
        adviceManager.adviceList.sensor();
    if (typeof sensorClick == 'undefined') {
        console.warn('The menu item was clicked but the menu was not defined.');
        return;
    }
    switch (sensorClick) {
        case 'cspocAll':
            if (settingsManager.plugins.topMenu)
                adviceManager.adviceList.cspocSensors();
            sensorManager.setSensor('SSN');
            break;
        case 'mwAll':
            if (settingsManager.plugins.topMenu)
                adviceManager.adviceList.mwSensors();
            sensorManager.setSensor('NATO-MW');
            break;
        case 'mdAll':
            sensorManager.setSensor('MD-ALL');
            break;
        case 'llAll':
            sensorManager.setSensor('LEO-LABS');
            break;
        case 'rusAll':
            sensorManager.setSensor('RUS-ALL');
            break;
        default:
            sensorManager.setSensor(sensorManager.sensorList[`${sensorClick}`]);
            break;
    }
    uiManager.getsensorinfo();
    try {
        mainCamera.lookAtLatLon(sensorManager.selectedSensor.lat, sensorManager.selectedSensor.lon, sensorManager.selectedSensor.zoom, timeManager.selectedDate);
    }
    catch (_a) {
        // TODO: More intentional conditional statement
        // Multi-sensors break this
    }
    if (settingsManager.currentColorScheme == colorSchemeManager.default) {
        uiManager.legendMenuChange('default');
    }
};
const bottomMenuClick = (iconName) => {
    const { uiManager, sensorManager, satSet, objectManager, satellite } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    switch (iconName) {
        case 'menu-sensor-list': // No Keyboard Commands
            if (isSensorListMenuOpen) {
                uiManager.hideSideMenus();
                isSensorListMenuOpen = false;
                break;
            }
            else {
                if (settingsManager.isMobileModeEnabled)
                    uiManager.searchToggle(false);
                uiManager.hideSideMenus();
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sensor-list-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                isSensorListMenuOpen = true;
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sensor-list').addClass('bmenu-item-selected');
                break;
            }
        case 'menu-sensor-info': // No Keyboard Commands
            if (!sensorManager.checkSensorSelected()) {
                // No Sensor Selected
                if (settingsManager.plugins.topMenu)
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.adviceManager.adviceList.sensorInfoDisabled();
                uiManager.toast(`Select a Sensor First!`, 'caution');
                if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sensor-info:animated').length) {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sensor-info').effect('shake', {
                        distance: 10,
                    });
                }
                break;
            }
            if (isSensorInfoMenuOpen) {
                uiManager.hideSideMenus();
                isSensorInfoMenuOpen = false;
                break;
            }
            else {
                if (settingsManager.isMobileModeEnabled)
                    uiManager.searchToggle(false);
                uiManager.hideSideMenus();
                uiManager.getsensorinfo();
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sensor-info-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                isSensorInfoMenuOpen = true;
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sensor-info').addClass('bmenu-item-selected');
                break;
            }
        case 'menu-lookangles': // S
            if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.isLookanglesMenuOpen) {
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.isLookanglesMenuOpen = false;
                uiManager.hideSideMenus();
                break;
            }
            else {
                const sat = satSet.getSatExtraOnly(objectManager.selectedSat);
                if (!sensorManager.checkSensorSelected() || sat == null || sat.static || sat.missile || objectManager.selectedSat === -1) {
                    // No Sensor or Satellite Selected
                    if (settingsManager.plugins.topMenu)
                        _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.adviceManager.adviceList.lookanglesDisabled();
                    uiManager.toast(`Select a Satellite First!`, 'caution');
                    if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-lookangles:animated').length) {
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-lookangles').effect('shake', {
                            distance: 10,
                        });
                    }
                    break;
                }
                if (settingsManager.isMobileModeEnabled)
                    uiManager.searchToggle(false);
                uiManager.hideSideMenus();
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.isLookanglesMenuOpen = true;
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading-screen').fadeIn(1000, () => {
                    satellite.getlookangles(sat);
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-lookangles').addClass('bmenu-item-selected');
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading-screen').fadeOut('slow');
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#lookangles-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                });
                break;
            }
        case 'menu-lookanglesmultisite':
            if (isLookanglesMultiSiteMenuOpen) {
                isLookanglesMultiSiteMenuOpen = false;
                uiManager.hideSideMenus();
                break;
            }
            else {
                if (objectManager.selectedSat === -1) {
                    // No Satellite Selected
                    if (settingsManager.plugins.topMenu)
                        _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.adviceManager.adviceList.ssnLookanglesDisabled();
                    uiManager.toast(`Select a Satellite First!`, 'caution');
                    if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-lookanglesmultisite:animated').length) {
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-lookanglesmultisite').effect('shake', {
                            distance: 10,
                        });
                    }
                    break;
                }
                if (settingsManager.isMobileModeEnabled)
                    uiManager.searchToggle(false);
                uiManager.hideSideMenus();
                isLookanglesMultiSiteMenuOpen = true;
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-lookanglesmultisite').addClass('bmenu-item-selected');
                if (objectManager.selectedSat !== -1) {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading-screen').fadeIn(1000, () => {
                        const sat = satSet.getSatExtraOnly(objectManager.selectedSat);
                        satellite.getlookanglesMultiSite(sat);
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading-screen').fadeOut('slow');
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#lookanglesmultisite-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    });
                }
                break;
            }
        case 'menu-customSensor': // T
            if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.isCustomSensorMenuOpen) {
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.isCustomSensorMenuOpen = false;
                uiManager.hideSideMenus();
                break;
            }
            else {
                if (settingsManager.isMobileModeEnabled)
                    uiManager.searchToggle(false);
                uiManager.hideSideMenus();
                if (sensorManager.checkSensorSelected()) {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-lat').val(sensorManager.currentSensor[0].lat);
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-lon').val(sensorManager.currentSensor[0].lon);
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-hei').val(sensorManager.currentSensor[0].alt);
                }
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#customSensor-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.isCustomSensorMenuOpen = true;
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-customSensor').addClass('bmenu-item-selected');
                break;
            }
    }
};
const init = () => {
    const { sensorManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    sensorManager.isCustomSensorMenuOpen = false;
    sensorManager.isCustomSensorMenuOpen = false;
    sensorManager.isLookanglesMenuOpen = false;
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'sensor',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'sensor',
        cb: bottomMenuClick,
    });
    // Register satinfobox links
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'sensor',
        cb: selectSatData,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'sensor',
        cb: hideSideMenus,
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sensor-list-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).css('height', '');
        },
        maxWidth: 400,
        minWidth: 280,
    });
};
const selectSatData = () => {
    const { satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (!sensorLinks) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sat-info-top-links').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="sensors-in-fov-link" class="link sat-infobox-links">Show All Sensors with FOV...</div>
      `);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sensors-in-fov-link').on('click', () => {
            Object.keys(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.sensorList).forEach((key) => {
                const sensor = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.sensorList[key];
                const sat = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.satSet.getSat(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.objectManager.selectedSat);
                const tearr = sat.getTEARR(null, [sensor]);
                if (tearr.inView) {
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.lineManager.create('sat6', [sat.id, satSet.getSensorFromSensorName(sensor.name)], 'g');
                }
            });
        });
        sensorLinks = true;
    }
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#customSensor-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sensor-list-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sensor-info-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#lookangles-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#lookanglesmultisite-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-customSensor').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sensor-list').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sensor-info').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-lookangles').removeClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-lookanglesmultisite').removeClass('bmenu-item-selected');
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.isCustomSensorMenuOpen = false;
    isSensorListMenuOpen = false;
    isSensorInfoMenuOpen = false;
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.isLookanglesMenuOpen = false;
    isLookanglesMultiSiteMenuOpen = false;
};
const addCustomSensor = (sensor) => {
    customSensors.push(sensor);
    return customSensors;
};
const customSensorSubmit = () => {
    const { sensorManager, satSet, satellite, mainCamera, timeManager, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-sensor-info').removeClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-fov-bubble').removeClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-surveillance').removeClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-planetarium').removeClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-astronomy').removeClass('bmenu-item-disabled');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sensor-type').html(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-type').val().replace(/</gu, '&lt;').replace(/>/gu, '&gt;'));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sensor-info-title').html('Custom Sensor');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sensor-country').html('Custom Sensor');
    const lon = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-lon').val());
    const lat = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-lat').val());
    const alt = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-hei').val();
    const sensorType = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-type').val();
    const minaz = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minaz').val();
    const maxaz = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxaz').val();
    const minel = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minel').val();
    const maxel = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxel').val();
    const minrange = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-minrange').val();
    const maxrange = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#cs-maxrange').val();
    addCustomSensor({
        lat,
        lon,
        alt: parseFloat(alt),
        obsminaz: parseFloat(minaz),
        obsmaxaz: parseFloat(maxaz),
        obsminel: parseFloat(minel),
        obsmaxel: parseFloat(maxel),
        obsminrange: parseFloat(minrange),
        obsmaxrange: parseFloat(maxrange),
        type: sensorType,
    });
    sensorManager.whichRadar = customSensors.length > 1 ? 'MULTI CUSTOM' : 'CUSTOM';
    satSet.satCruncher.postMessage({
        typ: 'sensor',
        setlatlong: true,
        sensor: customSensors,
        multiSensor: customSensors.length > 1,
    });
    satellite.setobs(customSensors);
    objectManager.setSelectedSat(-1);
    satSet.setColorScheme(settingsManager.currentColorScheme, true);
    if (customSensors.length === 1) {
        if (maxrange > 6000) {
            mainCamera.changeZoom('geo');
        }
        else {
            mainCamera.changeZoom('leo');
        }
        mainCamera.camSnap(mainCamera.lat2pitch(lat), mainCamera.lon2yaw(lon, timeManager.selectedDate));
    }
};


/***/ }),

/***/ "./src/img/icons/custom.png":
/*!**********************************!*\
  !*** ./src/img/icons/custom.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2368b3300792dfd8f578.png";

/***/ }),

/***/ "./src/img/icons/lookangles.png":
/*!**************************************!*\
  !*** ./src/img/icons/lookangles.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd68321e8d9d418bef8d.png";

/***/ }),

/***/ "./src/img/icons/multi-site.png":
/*!**************************************!*\
  !*** ./src/img/icons/multi-site.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56bac3789fa035e7af6b.png";

/***/ }),

/***/ "./src/img/icons/radar.png":
/*!*********************************!*\
  !*** ./src/img/icons/radar.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bd5e54affe77e1ff263.png";

/***/ }),

/***/ "./src/img/icons/radio-tower.png":
/*!***************************************!*\
  !*** ./src/img/icons/radio-tower.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2373d7c5554bd597887e.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_sensor_sensor_ts.ba8823201ad58091b355.js.map