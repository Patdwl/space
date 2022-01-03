"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_orbitReferences_orbitReferences_ts"],{

/***/ "./src/js/plugins/orbitReferences/orbitReferences.ts":
/*!***********************************************************!*\
  !*** ./src/js/plugins/orbitReferences/orbitReferences.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "selectSatData": () => (/* binding */ selectSatData),
/* harmony export */   "orbitReferencesLinkClick": () => (/* binding */ orbitReferencesLinkClick)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/constants */ "./src/js/lib/constants.ts");
/* harmony import */ var _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/lib/helpers */ "./src/js/lib/helpers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




let doOnce = false;
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'orbitReferences',
        cb: () => uiManagerInit(),
    });
};
const uiManagerInit = () => {
    // Register orbital element data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'orbitReferences',
        cb: selectSatData,
    });
};
const selectSatData = () => {
    if (!doOnce) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#sat-info-top-links').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="orbit-references-link" class="link sat-infobox-links">Generate Orbit Reference Satellites...</div>
      `);
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#orbit-references-link').on('click', orbitReferencesLinkClick);
        doOnce = true;
    }
};
const orbitReferencesLinkClick = () => {
    const { satSet, objectManager, uiManager, satellite } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    // Determine which satellite is selected
    const sat = satSet.getSat(objectManager.selectedSat);
    let satNum = objectManager.analSatSet[0].id + 20000; // Find Analyst satellite 10,000
    let searchStr = '';
    // Add the satellites
    const satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2);
    const ecen = satrec.ecco.toPrecision(7).substr(2, 7);
    const rasc = (satrec.nodeo * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RAD2DEG).toString();
    const argPe = (satrec.argpo * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RAD2DEG).toString();
    const inc = sat.TLE2.substr(8, 8);
    const meanmo = sat.TLE2.substr(52, 10);
    const epochyr = sat.TLE1.substr(18, 2);
    const epochday = sat.TLE1.substr(20, 12);
    const intl = sat.TLE1.substr(9, 8);
    const sccNum = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(sat.TLE1.substr(2, 5).trim(), 5);
    const period = 1440.0 / parseFloat(meanmo);
    let j = 0;
    for (let i = 0; i < 360; i++) {
        const meana = j.toPrecision(10);
        const { TLE1, TLE2 } = satellite.createTle({ sat, inc, meanmo, rasc, argPe, meana, ecen, epochyr, epochday, intl, scc: sccNum });
        searchStr += satSet.insertNewAnalystSatellite(TLE1, TLE2, satNum + i, (100000 + i).toString()).sccNum.toString() + ',';
        j += (360 / period) * 4;
        if (j >= 360)
            break;
    }
    // Remove the last comma
    searchStr = searchStr.substr(0, searchStr.length - 1);
    uiManager.doSearch(searchStr);
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_orbitReferences_orbitReferences_ts.22236e6dd63937bd954b.js.map