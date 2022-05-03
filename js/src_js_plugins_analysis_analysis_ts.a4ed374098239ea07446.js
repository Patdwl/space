"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_analysis_analysis_ts"],{

/***/ "./src/js/plugins/analysis/analysis.ts":
/*!*********************************************!*\
  !*** ./src/js/plugins/analysis/analysis.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "analysisFormSubmit": () => (/* binding */ analysisFormSubmit),
/* harmony export */   "findCsoBtnClick": () => (/* binding */ findCsoBtnClick),
/* harmony export */   "findRaBtnClick": () => (/* binding */ findRaBtnClick),
/* harmony export */   "analysisBptSumbit": () => (/* binding */ analysisBptSumbit)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AnalysisBottomIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AnalysisBottomIcon */ "./src/js/plugins/analysis/components/AnalysisBottomIcon.ts");
/* harmony import */ var _components_AnalysisSideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AnalysisSideMenu */ "./src/js/plugins/analysis/components/AnalysisSideMenu.ts");
/* harmony import */ var _components_TrendAnalysis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TrendAnalysis */ "./src/js/plugins/analysis/components/TrendAnalysis.ts");





/**
 * /////////////////////////////////////////////////////////////////////////////
 *
 * analysis.ts is a plugin for viewing trend data on TLEs and calculating best
 * pass times.
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
 * /////////////////////////////////////////////////////////////////////////////
 */
const init = () => {
    const { sensorManager, objectManager, satSet, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    let isAnalysisMenuOpen = false;
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'analysis',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'analysis',
        cb: (iconName) => {
            if (iconName === 'menu-analysis') {
                if (isAnalysisMenuOpen) {
                    isAnalysisMenuOpen = false;
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-analysis').removeClass('bmenu-item-selected');
                    uiManager.hideSideMenus();
                    return;
                }
                else {
                    uiManager.hideSideMenus();
                    isAnalysisMenuOpen = true;
                    if (objectManager.selectedSat != -1) {
                        const sat = satSet.getSat(objectManager.selectedSat);
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#anal-sat').val(sat.sccNum);
                    }
                    if (sensorManager.checkSensorSelected()) {
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#anal-type').html(`${_components_TrendAnalysis__WEBPACK_IMPORTED_MODULE_4__.OrbitOptionGroup}${_components_TrendAnalysis__WEBPACK_IMPORTED_MODULE_4__.RaeOptionGroup}`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#anal-type').html(`${_components_TrendAnalysis__WEBPACK_IMPORTED_MODULE_4__.OrbitOptionGroup}`);
                    }
                    // Reinitialize the Material CSS Code
                    const elems = document.querySelectorAll('select');
                    window.M.FormSelect.init(elems);
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#analysis-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-analysis').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'analysis',
        cb: (sat) => {
            if (uiManager.isAnalysisMenuOpen) {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#anal-sat').val(sat.sccNum);
            }
        },
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'analysis',
        cb: () => {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#analysis-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-analysis').removeClass('bmenu-item-selected');
            isAnalysisMenuOpen = false;
        },
    });
};
const uiManagerInit = () => {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#left-menus').append(_components_AnalysisSideMenu__WEBPACK_IMPORTED_MODULE_3__.AnalysisSideMenu);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_components_AnalysisBottomIcon__WEBPACK_IMPORTED_MODULE_2__.AnalysisBottomIcon);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#analysis-form').on('submit', function (e) {
        e.preventDefault();
        analysisFormSubmit();
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#analysis-bpt').on('submit', function (e) {
        e.preventDefault();
        analysisBptSumbit();
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#findCsoBtn').on('click', () => {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading-screen').fadeIn(1000, findCsoBtnClick);
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#findReentries').on('click', () => {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading-screen').fadeIn(1000, findRaBtnClick);
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#analysis-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
};
const analysisFormSubmit = () => {
    const { sensorManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    const chartType = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#anal-type').val();
    const sat = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#anal-sat').val();
    const sensor = sensorManager.currentSensor[0].shortName;
    if (typeof sensor == 'undefined') {
        jquery__WEBPACK_IMPORTED_MODULE_1___default().colorbox({
            href: `analysis/index.html?sat=${sat}&type=${chartType}`,
            iframe: true,
            width: '60%',
            height: '60%',
            fastIframe: false,
            closeButton: false,
        });
    }
    else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default().colorbox({
            href: `analysis/index.html?sat=${sat}&type=${chartType}&sensor=${sensor}`,
            iframe: true,
            width: '60%',
            height: '60%',
            fastIframe: false,
            closeButton: false,
        });
    }
};
const findCsoBtnClick = () => {
    const { satellite, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    const searchStr = satellite.findCloseObjects();
    uiManager.doSearch(searchStr);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading-screen').fadeOut('slow');
};
const findRaBtnClick = () => {
    const { satellite, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    const searchStr = satellite.findReentries();
    uiManager.doSearch(searchStr);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading-screen').fadeOut('slow');
};
const analysisBptSumbit = () => {
    const { satellite, sensorManager, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    const sats = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#analysis-bpt-sats').val();
    if (!sensorManager.checkSensorSelected()) {
        uiManager.toast(`You must select a sensor first!`, 'critical');
    }
    else {
        satellite.findBestPasses(sats, sensorManager.selectedSensor);
    }
};


/***/ }),

/***/ "./src/js/plugins/analysis/components/AnalysisBottomIcon.ts":
/*!******************************************************************!*\
  !*** ./src/js/plugins/analysis/components/AnalysisBottomIcon.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisBottomIcon": () => (/* binding */ AnalysisBottomIcon)
/* harmony export */ });
/* harmony import */ var _app_img_icons_analysis_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/analysis.png */ "./src/img/icons/analysis.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");


const AnalysisBottomIcon = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-analysis" class="bmenu-item">
          <img
            alt="analysis"
            src=""
            delayedsrc="${_app_img_icons_analysis_png__WEBPACK_IMPORTED_MODULE_0__}"
          />
          <span class="bmenu-title">Analysis</span>
          <div class="status-icon"></div>
        </div>
      `;


/***/ }),

/***/ "./src/js/plugins/analysis/components/AnalysisSideMenu.ts":
/*!****************************************************************!*\
  !*** ./src/js/plugins/analysis/components/AnalysisSideMenu.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisMenuHeader": () => (/* binding */ AnalysisMenuHeader),
/* harmony export */   "ExportTleButton": () => (/* binding */ ExportTleButton),
/* harmony export */   "FindReentries": () => (/* binding */ FindReentries),
/* harmony export */   "ExportCatalogCsvButton": () => (/* binding */ ExportCatalogCsvButton),
/* harmony export */   "FindCsoButton": () => (/* binding */ FindCsoButton),
/* harmony export */   "AnalysisSideMenu": () => (/* binding */ AnalysisSideMenu)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _BestPassTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestPassTime */ "./src/js/plugins/analysis/components/BestPassTime.ts");
/* harmony import */ var _TrendAnalysis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrendAnalysis */ "./src/js/plugins/analysis/components/TrendAnalysis.ts");



const AnalysisMenuHeader = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
  <h5 class="center-align">Analysis Menu</h5>
  <div class="divider"></div>
  <div class="row"></div>`;
const ExportTleButton = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
  <div class="row">
    <center>
      <button class="btn btn-ui waves-effect waves-light" 
      onclick="keepTrackApi.programs.satSet.exportTle2Txt(keepTrackApi.programs.satSet.satData);">
        Export TLEs &#9658;
      </button>
    </center>
  </div>`;
const FindReentries = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
  <div class="row">
    <center>
      <button id="findReentries" class="btn btn-ui waves-effect waves-light">
      Find Reentries &#9658;
      </button>
    </center>
  </div>`;
const ExportCatalogCsvButton = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
  <div class="row">
    <center>
      <button class="btn btn-ui waves-effect waves-light" 
      onclick="keepTrackApi.programs.satSet.exportTle2Csv(keepTrackApi.programs.satSet.satData);">
        Export Catalog CSV &#9658;
    </button>
    </center>
  </div>`;
const FindCsoButton = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `      
  <div class="row">
    <center>
      <button id="findCsoBtn" class="btn btn-ui waves-effect waves-light">Find Close Objects &#9658;</button>
    </center>
  </div>`;
const AnalysisSideMenu = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
<div id="analysis-menu" class="side-menu-parent start-hidden text-select">
  <div id="analysis-inner-menu" class="side-menu">
    ${AnalysisMenuHeader}
    ${settingsManager.isOfficialWebsite ? _TrendAnalysis__WEBPACK_IMPORTED_MODULE_2__.TrendAnalysis : ''}
    ${ExportTleButton}
    ${ExportCatalogCsvButton}
    ${FindCsoButton}
    ${FindReentries}
    ${_BestPassTime__WEBPACK_IMPORTED_MODULE_1__.BestPassTime}       
  </div>
</div>`;


/***/ }),

/***/ "./src/js/plugins/analysis/components/BestPassTime.ts":
/*!************************************************************!*\
  !*** ./src/js/plugins/analysis/components/BestPassTime.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestPassTime": () => (/* binding */ BestPassTime)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");

const BestPassTime = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
<h5 class="center-align">Best Pass Times</h5>
<div class="divider"></div>
<div class="row"></div>
<div class="row">
  <form id="analysis-bpt">
    <div class="row">
      <div class="input-field col s12">
        <input value="25544,00005" id="analysis-bpt-sats" type="text" />
        <label for="analysis-bpt-sats" class="active">Satellite Numbers</label>
      </div>
    </div>
    <div class="row">
      <center>
        <button id="analysis-bpt-submit" class="btn btn-ui waves-effect waves-light" type="submit"
          name="action">Generate Best Pass Times &#9658;</button>
      </center>
    </div>
  </form>
</div>`;


/***/ }),

/***/ "./src/js/plugins/analysis/components/TrendAnalysis.ts":
/*!*************************************************************!*\
  !*** ./src/js/plugins/analysis/components/TrendAnalysis.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrbitOptionGroup": () => (/* binding */ OrbitOptionGroup),
/* harmony export */   "RaeOptionGroup": () => (/* binding */ RaeOptionGroup),
/* harmony export */   "TrendAnalysis": () => (/* binding */ TrendAnalysis)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");

const OrbitOptionGroup = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
  <optgroup label="Orbital Parameters">
    <option value='inc'>Inclination</option>
    <option value='ap'>Apogee</option>
    <option value='pe'>Perigee</option>
    <option value='per'>Period</option>
    <option value='e'>Eccentricity</option>
    <option value='ra'>RAAN</option>
    <option value='all'>All</option>
  </optgroup>`;
const RaeOptionGroup = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
  <optgroup id="anal-look-opt" label="Look Angles">
    <option value='az'>Azimuth</option>
    <option value='el'>Elevation</option>
    <option value='rng'>Range</option>
    <option value='rae'>All</option>
  </optgroup>`;
const TrendAnalysis = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `    
  <form id="analysis-form">
    <div class="row">
      <div class="input-field col s12">
        <input value="25544" id="anal-sat" type="text" />
        <label for="anal-sat" class="active">Satellite Number</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <select value="0" id="anal-type" type="text">
          ${OrbitOptionGroup}
          ${RaeOptionGroup}
        </select>
        <label for="disabled">Chart Type</label>
      </div>
    </div>
    <div class="row">
      <center>
        <button id="analysis-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">
          View Trends &#9658;
        </button>
      </center>
    </div>
  </form>`;


/***/ }),

/***/ "./src/img/icons/analysis.png":
/*!************************************!*\
  !*** ./src/img/icons/analysis.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81acf2ce1fe6261098b7.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_analysis_analysis_ts.a4ed374098239ea07446.js.map