"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_datetime_datetime_ts"],{

/***/ "./src/js/plugins/datetime/datetime.ts":
/*!*********************************************!*\
  !*** ./src/js/plugins/datetime/datetime.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateDateTime": () => (/* binding */ updateDateTime),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "datetimeTextClick": () => (/* binding */ datetimeTextClick),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "datetimeInputFormChange": () => (/* binding */ datetimeInputFormChange)
/* harmony export */ });
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var updateDateTime = function (date) {
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs, satSet = _a.satSet, timeManager = _a.timeManager;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input-tb').datepicker('setDate', date);
    satSet.satCruncher.postMessage({
        typ: 'offset',
        dat: timeManager.propOffset.toString() + ' ' + timeManager.propRate.toString(),
    });
};
var init = function () {
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'datetime',
        cb: uiManagerInit,
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'updateDateTime',
        cbName: 'datetime',
        cb: updateDateTime,
    });
};
var datetimeTextClick = function () {
    var timeManager = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.timeManager;
    timeManager.propRealTime = Date.now();
    timeManager.propTime();
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.methods.updateDateTime(new Date(timeManager.propTime()));
    if (!settingsManager.isEditTime) {
        // $('#datetime-text').fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input').fadeIn();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input-tb').trigger('focus');
        settingsManager.isEditTime = true;
    }
};
var uiManagerInit = function () {
    var uiManager = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager;
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#nav-wrapper').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <ul id=\"nav-mobile\">\n          <li id=\"jday\"></li>\n          <div id=\"datetime\" class=\"tooltipped\" data-position=\"top\" data-delay=\"50\" data-tooltip=\"Time Menu\">\n            <div id=\"datetime-text\">Placeholder Text</div>\n            <div id=\"datetime-input\">\n              <form id=\"datetime-input-form\">\n                <input type=\"text\" id=\"datetime-input-tb\" readonly=\"true\" />\n              </form>\n            </div>\n          </div>\n        </ul>\n      "], ["\n        <ul id=\"nav-mobile\">\n          <li id=\"jday\"></li>\n          <div id=\"datetime\" class=\"tooltipped\" data-position=\"top\" data-delay=\"50\" data-tooltip=\"Time Menu\">\n            <div id=\"datetime-text\">Placeholder Text</div>\n            <div id=\"datetime-input\">\n              <form id=\"datetime-input-form\">\n                <input type=\"text\" id=\"datetime-input-tb\" readonly=\"true\" />\n              </form>\n            </div>\n          </div>\n        </ul>\n      "]))));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-text').on('click', datetimeTextClick);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input-form').on('change', function (e) {
        datetimeInputFormChange();
        e.preventDefault();
    });
    // Initialize the date/time picker
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input-tb')
        .datetimepicker({
        dateFormat: 'yy-mm-dd',
        timeFormat: 'HH:mm:ss',
        timezone: '+0000',
        gotoCurrent: true,
        addSliderAccess: true,
        // minDate: -14, // No more than 7 days in the past
        // maxDate: 14, // or 7 days in the future to make sure ELSETs are valid
        sliderAccessArgs: { touchonly: false },
    })
        .on('change.dp', function () {
        // This code gets called when the done button is pressed or the time sliders are closed
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input').fadeOut();
        // TODO: Migrate to watchlist.ts
        try {
            uiManager.updateNextPassOverlay(true);
        }
        catch (_a) {
            // Intentionally ignored
        }
        settingsManager.isEditTime = false;
    });
};
var datetimeInputFormChange = function (jestOverride) {
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs, timeManager = _a.timeManager, satSet = _a.satSet, uiManager = _a.uiManager;
    var selectedDate = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input-tb').datepicker('getDate') || jestOverride;
    var today = new Date();
    var jday = timeManager.getDayOfYear(timeManager.propTime());
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#jday').html(jday);
    timeManager.propOffset = selectedDate.getTime() - today.getTime();
    satSet.satCruncher.postMessage({
        typ: 'offset',
        dat: timeManager.propOffset.toString() + ' ' + timeManager.propRate.toString(),
    });
    timeManager.propRealTime = Date.now();
    timeManager.propTime();
    // Reset last update times when going backwards in time
    settingsManager.lastBoxUpdateTime = timeManager.now;
    // TODO: Migrate to watchlist.ts
    try {
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.watchlist.lastOverlayUpdateTime = timeManager.now * 1 - 7000;
        uiManager.updateNextPassOverlay(true);
    }
    catch (_b) {
        // Ignore
    }
    // radarDataManager.findFirstDataTime();
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_datetime_datetime_ts.a8410eae218573707bca.js.map