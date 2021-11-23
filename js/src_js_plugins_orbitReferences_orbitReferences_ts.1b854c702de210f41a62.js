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
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
/* harmony import */ var _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/constants */ "./src/js/lib/constants.js");
/* harmony import */ var _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/lib/helpers */ "./src/js/lib/helpers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};




var doOnce = false;
var init = function () {
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'orbitReferences',
        cb: function () { return uiManagerInit(); },
    });
};
var uiManagerInit = function () {
    // Register orbital element data
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'orbitReferences',
        cb: function () {
            selectSatData(doOnce);
            doOnce = true;
        },
    });
};
var selectSatData = function (doOnce) {
    if (!doOnce) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#sat-info-top-links').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"orbit-references-link\" class=\"link sat-infobox-links\">Generate Orbit Reference Satellites...</div>\n      "], ["\n        <div id=\"orbit-references-link\" class=\"link sat-infobox-links\">Generate Orbit Reference Satellites...</div>\n      "]))));
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#orbit-references-link').on('click', orbitReferencesLinkClick);
    }
};
var orbitReferencesLinkClick = function () {
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs, satSet = _a.satSet, objectManager = _a.objectManager, uiManager = _a.uiManager, satellite = _a.satellite;
    // Determine which satellite is selected
    var sat = satSet.getSat(objectManager.selectedSat);
    var satNum = objectManager.analSatSet[0].id + 20000; // Find Analyst satellite 10,000
    var searchStr = '';
    // Add the satellites
    for (var i = 0; i < 360; i++) {
        var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2);
        var ecen = satrec.ecco.toPrecision(7).substr(2, 7);
        var rasc = (satrec.nodeo * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RAD2DEG).toPrecision(7);
        var rascA = rasc.split('.');
        rascA[0] = rascA[0].substr(-3, 3);
        rascA[1] = rascA[1].substr(0, 4);
        rasc = (rascA[0] + '.' + rascA[1]).toString();
        var argPe = (satrec.argpo * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RAD2DEG).toPrecision(7);
        var argPeA = argPe.split('.');
        argPeA[0] = argPeA[0].substr(-3, 3);
        argPeA[1] = argPeA[1].substr(0, 4);
        argPe = (argPeA[0] + '.' + argPeA[1]).toString();
        var meana = i.toPrecision(10); // sat.TLE2.substr(44 - 1, 7 + 1);
        var meanaA = meana.split('.');
        meanaA[0] = meanaA[0].substr(-3, 3);
        meanaA[1] = meanaA[1].substr(0, 4);
        meana = (meanaA[0] + '.' + meanaA[1]).toString();
        meana = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(meana, 8);
        var inc = sat.TLE2.substr(8, 8);
        var meanmo = sat.TLE2.substr(52, 10);
        var epochyr = sat.TLE1.substr(18, 2);
        var epochday = sat.TLE1.substr(20, 12);
        var intl = sat.TLE1.substr(9, 8);
        var sccNum = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(sat.TLE1.substr(2, 5).trim(), 5);
        var _b = satellite.createTle(sat, inc, meanmo, rasc, argPe, meana, ecen, epochyr, epochday, intl, sccNum), TLE1 = _b.TLE1, TLE2 = _b.TLE2;
        searchStr += satSet.insertNewAnalystSatellite(TLE1, TLE2, satNum + i, (100000 + i).toString()).SCC_NUM.toString();
        if (i !== 359)
            searchStr += ',';
    }
    uiManager.doSearch(searchStr);
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_orbitReferences_orbitReferences_ts.1b854c702de210f41a62.js.map