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
/* harmony export */   "analysisBptSumbit": () => (/* binding */ analysisBptSumbit)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


/**
 * /////////////////////////////////////////////////////////////////////////////
 *
 * analysis.ts is a plugin for viewing trend data on TLEs and calculating best
 * pass times.
 *
 * http://keeptrack.space
 *
 * @Copyright (C) 2016-2021 Theodore Kruczek
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
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#anal-type').html(`<optgroup label="Orbital Parameters">
                <option value='inc'>Inclination</option>
                <option value='ap'>Apogee</option>
                <option value='pe'>Perigee</option>
                <option value='per'>Period</option>
                <option value='e'>Eccentricity</option>
                <option value='ra'>RAAN</option>
                <option value='all'>All</option>
              </optgroup>
              <optgroup id="anal-look-opt" label="Look Angles">
                <option value='az'>Azimuth</option>
                <option value='el'>Elevation</option>
                <option value='rng'>Range</option>
                <option value='rae'>All</option>
              </optgroup>`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#anal-type').html(`<optgroup label="Orbital Parameters">
                <option value='inc'>Inclination</option>
                <option value='ap'>Apogee</option>
                <option value='pe'>Perigee</option>
                <option value='per'>Period</option>
                <option value='e'>Eccentricity</option>
                <option value='ra'>RAAN</option>
                <option value='all'>All</option>
              </optgroup>`);
                    }
                    // Reinitialize the Material CSS Code
                    const elems = document.querySelectorAll('select');
                    M.FormSelect.init(elems);
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
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="analysis-menu" class="side-menu-parent start-hidden text-select">
          <div id="analysis-inner-menu" class="side-menu">
            <ul>
              <h5 class="center-align">Analysis Menu</h5>
              <li class="divider"></li>
              <div class="row"></div>
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
                      <optgroup label="Orbital Parameters">
                        <option value="inc">Inclination</option>
                        <option value="ap">Apogee</option>
                        <option value="pe">Perigee</option>
                        <option value="per">Period</option>
                        <option value="e">Eccentricity</option>
                        <option value="ra">RAAN</option>
                        <option value="all">All</option>
                      </optgroup>
                      <optgroup id="anal-look-opt" label="Look Angles">
                        <option value="az">Azimuth</option>
                        <option value="el">Elevation</option>
                        <option value="rng">Range</option>
                        <option value="rae">All</option>
                      </optgroup>
                    </select>
                    <label for="disabled">Chart Type</label>
                  </div>
                </div>
                <div class="row">
                  <center>
                    <button id="analysis-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">View Trends &#9658;</button>
                  </center>
                </div>
              </form>
            </ul>
            <div class="row">
              <center>
                <button class="btn btn-ui waves-effect waves-light" onclick="keepTrackApi.programs.satSet.exportTle2Txt(keepTrackApi.programs.satSet.satData);">Export TLEs &#9658;</button>
              </center>
            </div>
            <div class="row">
              <center>
                <button class="btn btn-ui waves-effect waves-light" onclick="keepTrackApi.programs.satSet.exportTle2Csv(keepTrackApi.programs.satSet.satData);">Export Catalog CSV &#9658;</button>
              </center>
            </div>
            <div class="row">
              <center>
                <button id="findCsoBtn" class="btn btn-ui waves-effect waves-light">Find Close Objects &#9658;</button>
              </center>
            </div>
            <div class="row"></div>
            <h5 class="center-align">Best Pass Times</h5>
            <li class="divider"></li>
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
                    <button id="analysis-bpt-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Generate Best Pass Times &#9658;</button>
                  </center>
                </div>
              </form>
            </div>
          </div>
        </div>
      `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="menu-analysis" class="bmenu-item">
          <img
            alt="analysis"
            src=""
            delayedsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFDUlEQVR4nO2cUVMbVRTH/2dDbBBQHxVfWxhLkwBJWh/6MWy0dqyjY9Gh01E/QeknUKdTRqmjY51aTf0YPNiGEEOgHbCvUh9VQFIhe3xJnQzZm92b7O5BPL+33XPv2Qt/9vzvPckAKIqiKIqiKIqiKIqiKIqiKErkkO2E9BJzFAs5KtTzZPU7daJaiBIMFUAYFUAYFUAYFUCYgbAS2br/f52wdoP6BgijAgijAgijAgijAggT2i5Ie0S9oW+AMCqAMCqAMCqAMCqAMNoL6hHtBR0RVABhVABhVABhVABhQtsFSTC1zKP7Ln71CG3W8/Ry7AvqgUPxBmTKPDdZ5RO285qMnNd9Apa7zZus8olMmedsnxcF4gKkKzzDhKvNJpbTFZ6xmux6C+ASlozPW+JzzSbKTLhq/bwIEBUgU+ZTYHzSuhwG44v0Epcmq/xCkPlMyHsHOgUYX+SRTIVvASgBeL417rNsmad6WnxIiAkwvsgjTPgRwLMHQuf2m7ifvcdjAdJMe91MOqi2X2fv8VgyhQoz3jowNOUS7owv8kjwlYeLmADHBnEDwLgpvsP4rdv8qWUeBfCSR2izOk2b7Tf2h7FJwL4h1fgzKXzpt96oEBEgXeEZj7/GpzQSjNcfvUp/dsthMmBmVA7eW5ugbWIUAfxlSFeU8oPYBThQ9zsg4EqtQFVT/F8MBgynUwAAWCnQKggfGfMJ+UGsAkys8TATSuis+wAAJny/kqdA5cDGgJ9Sz9FNBm4ZwimXUDr+Ez8X5PlhEasAiQbmAbxiCG/s7cKmDHgacNPnDOAkMQvggSF8fHAANy3W0DexCeBX910HxfWztBUkVzcDfpinx93mrmRpx3EPjx/EIoBf3Qdhdm2aakHz2RiwF7XTtMaMK8YBMfpB5AL41X0Ad+o5+toqqaUBe7FaoK8AfGMIx+YHkQvg7OJzmOv+A0riknVS8hbA8an/HWmSuIzufjBvuzRbIhXgVJnfBXDBEG64Dt5cydKObV6GtwB7XXZAXrT5gWkNF9IVfsd2fTaIN+Ns6ceADyORCtCqs7cN4ZTj4rtMjYdscvbagvYiU+Mh10EJgGkNt639yZLI3wB3EB8AeGgIn+Q9y313Dy1oE7yHGwBOGsKPdvcxa5vTlsgFCNCHOW9TZ3s5AXvR8qe3DeGGwyj69aPCIBYPaPVhPjYOYMxPLHM2YLqeTsDtZO/zBBGuGwcQPgzUjwqB2Ey4nqMFInxrCKccFyW/vnwYBtxW903nklI9RwtBcoVBrLugZgqzMPvBWHIQXX/wfk/AAODuYR7d6779uaQPYhXAzw+I8UZmid8zJujzBJyu8CUCLhrCsdX9dmI/B/j5AQPXTX2Yfgy41Y/61DggxrrfjshBzM8PmoQfDH2Yngw4QD8q1rrfjthJ+MkuLgNYN8WHCC+2X3cx4Md+BjywjVE2fwlt/e8GzGUvYsQEWD9LW8R4DZ1+cPcYUKidoY32m10M2Lf81M7QBg9iGtxh8g2HcT7o5xBRINoLOuAHW8y4WM9TsZKnPzoG92nAaxO0XS/Q+wCKAH4HIFb32xFvxtVztECMa4kEcqsFMvlCaC3oep7uJhI4TYxrUnW/nUPx5dyVAs35jQmrBQ0AP0/RLwB8nxkHh0KAINTzNCq9higQL0H/d1QAYVQAYVQAYVQAYfT/BQmjb4AwKoAwKoAwKoAwKoCiKIqiKIqiKIqiKIqiKIqiHH3+ARw90MK30gxuAAAAAElFTkSuQmCC"
          />
          <span class="bmenu-title">Analysis</span>
          <div class="status-icon"></div>
        </div>
      `);
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
            href: `analysis/index.htm?sat=${sat}&type=${chartType}`,
            iframe: true,
            width: '60%',
            height: '60%',
            fastIframe: false,
            closeButton: false,
        });
    }
    else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default().colorbox({
            href: `analysis/index.htm?sat=${sat}&type=${chartType}&sensor=${sensor}`,
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


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_analysis_analysis_ts.7ad0d3a67e73d5c43aa0.js.map