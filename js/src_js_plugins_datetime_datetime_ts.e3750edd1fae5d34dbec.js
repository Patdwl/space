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
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


const updateDateTime = (date) => {
    const { timeManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input-tb').datepicker('setDate', date);
    timeManager.synchronize();
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'datetime',
        cb: uiManagerInit,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'updateDateTime',
        cbName: 'datetime',
        cb: updateDateTime,
    });
};
const datetimeTextClick = () => {
    const { timeManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    timeManager.calculateSimulationTime();
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.methods.updateDateTime(new Date(timeManager.calculateSimulationTime()));
    if (!settingsManager.isEditTime) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input').fadeIn();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input-tb').trigger('focus');
        settingsManager.isEditTime = true;
    }
};
const uiManagerInit = () => {
    const { uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#nav-wrapper').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <ul id="nav-mobile">
          <li id="jday"></li>
          <div id="datetime" class="tooltipped" data-position="top" data-delay="50" data-tooltip="Time Menu">
            <div id="datetime-text">Placeholder Text</div>
            <div id="datetime-input">
              <form id="datetime-input-form">
                <input type="text" id="datetime-input-tb" readonly="true" />
              </form>
            </div>
          </div>
        </ul>
      `);
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
const datetimeInputFormChange = (jestOverride) => {
    const { timeManager, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    const selectedDate = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#datetime-input-tb').datepicker('getDate') || jestOverride;
    const today = new Date();
    const jday = timeManager.getDayOfYear(timeManager.calculateSimulationTime());
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#jday').html(jday);
    timeManager.changeStaticOffset(selectedDate.getTime() - today.getTime());
    timeManager.calculateSimulationTime();
    // Reset last update times when going backwards in time
    settingsManager.lastBoxUpdateTime = timeManager.realTime;
    // TODO: Migrate to watchlist.ts
    try {
        _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.watchlist.lastOverlayUpdateTime = timeManager.realTime * 1 - 7000;
        uiManager.updateNextPassOverlay(true);
    }
    catch (_a) {
        // Ignore
    }
    // TODO: Planned feature
    // radarDataManager.findFirstDataTime();
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_datetime_datetime_ts.e3750edd1fae5d34dbec.js.map