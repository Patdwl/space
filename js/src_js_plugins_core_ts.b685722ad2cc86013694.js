"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_core_ts"],{

/***/ "./src/js/plugins/core.ts":
/*!********************************!*\
  !*** ./src/js/plugins/core.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCorePlugins": () => (/* binding */ loadCorePlugins)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Register all core modules
var loadCorePlugins = function (keepTrackApi) { return __awaiter(void 0, void 0, void 0, function () {
    var plugins, Atmosphere;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                plugins = keepTrackApi.programs.settingsManager.plugins;
                // Load Debug Plugins
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_debug_debug_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/debug/debug */ "./src/js/plugins/debug/debug.ts")).then(function (mod) { return mod.init(); })];
            case 1:
                // Load Debug Plugins
                _c.sent();
                if (!plugins.satInfoboxCore) return [3 /*break*/, 3];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_selectSatManager_satInfoboxCore_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/selectSatManager/satInfoboxCore */ "./src/js/plugins/selectSatManager/satInfoboxCore.ts")).then(function (mod) { return mod.init(); })];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                if (!plugins.updateSelectBoxCore) return [3 /*break*/, 5];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_updateSelectBox_updateSelectBoxCore_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/updateSelectBox/updateSelectBoxCore */ "./src/js/plugins/updateSelectBox/updateSelectBoxCore.ts")).then(function (mod) { return mod.init(); })];
            case 4:
                _c.sent();
                _c.label = 5;
            case 5:
                if (!plugins.atmosphere) return [3 /*break*/, 7];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_atmosphere_atmosphere_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/atmosphere/atmosphere */ "./src/js/plugins/atmosphere/atmosphere.ts"))];
            case 6:
                Atmosphere = (_c.sent()).Atmosphere;
                keepTrackApi.programs.sceneManager.registerAtmoshpere(Atmosphere);
                _c.label = 7;
            case 7:
                if (!plugins.topMenu) return [3 /*break*/, 9];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_topMenu_topMenu_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/topMenu/topMenu */ "./src/js/plugins/topMenu/topMenu.ts")).then(function (mod) { return mod.init(); })];
            case 8:
                _c.sent();
                _c.label = 9;
            case 9:
                if (!plugins.datetime) return [3 /*break*/, 11];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_datetime_datetime_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/datetime/datetime */ "./src/js/plugins/datetime/datetime.ts")).then(function (mod) { return mod.init(); })];
            case 10:
                _c.sent();
                _c.label = 11;
            case 11:
                if (!plugins.social) return [3 /*break*/, 13];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_social_social_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/social/social */ "./src/js/plugins/social/social.ts")).then(function (mod) { return mod.init(); })];
            case 12:
                _c.sent();
                _c.label = 13;
            case 13:
                if (!plugins.classification) return [3 /*break*/, 15];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_classification_classification_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/classification/classification */ "./src/js/plugins/classification/classification.ts")).then(function (mod) { return mod.init(); })];
            case 14:
                _c.sent();
                _c.label = 15;
            case 15:
                if (!plugins.sensor) return [3 /*break*/, 17];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_sensor_sensor_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sensor/sensor */ "./src/js/plugins/sensor/sensor.ts")).then(function (mod) { return mod.init(); })];
            case 16:
                _c.sent();
                _c.label = 17;
            case 17:
                if (!plugins.watchlist) return [3 /*break*/, 19];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_watchlist_watchlist_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/watchlist/watchlist */ "./src/js/plugins/watchlist/watchlist.ts")).then(function (mod) { return mod.init(); })];
            case 18:
                _c.sent();
                _c.label = 19;
            case 19:
                if (!plugins.nextLaunch) return [3 /*break*/, 21];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_nextLaunch_nextLaunch_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/nextLaunch/nextLaunch */ "./src/js/plugins/nextLaunch/nextLaunch.ts")).then(function (mod) { return mod.init(); })];
            case 20:
                _c.sent();
                _c.label = 21;
            case 21:
                if (!plugins.findSat) return [3 /*break*/, 23];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_findSat_findSat_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/findSat/findSat */ "./src/js/plugins/findSat/findSat.ts")).then(function (mod) { return mod.init(); })];
            case 22:
                _c.sent();
                _c.label = 23;
            case 23:
                if (!plugins.shortTermFences) return [3 /*break*/, 25];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_shortTermFences_shortTermFences_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/shortTermFences/shortTermFences */ "./src/js/plugins/shortTermFences/shortTermFences.ts")).then(function (mod) { return mod.init(); })];
            case 24:
                _c.sent();
                _c.label = 25;
            case 25:
                if (!plugins.collisions) return [3 /*break*/, 27];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_collisions_collisions_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/collisions/collisions */ "./src/js/plugins/collisions/collisions.ts")).then(function (mod) { return mod.init(); })];
            case 26:
                _c.sent();
                _c.label = 27;
            case 27:
                if (!plugins.breakup) return [3 /*break*/, 29];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_breakup_breakup_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/breakup/breakup */ "./src/js/plugins/breakup/breakup.ts")).then(function (mod) { return mod.init(); })];
            case 28:
                _c.sent();
                _c.label = 29;
            case 29:
                if (!plugins.editSat) return [3 /*break*/, 31];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_editSat_editSat_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/editSat/editSat */ "./src/js/plugins/editSat/editSat.ts")).then(function (mod) { return mod.init(); })];
            case 30:
                _c.sent();
                _c.label = 31;
            case 31:
                if (!plugins.newLaunch) return [3 /*break*/, 33];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_newLaunch_newLaunch_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/newLaunch/newLaunch */ "./src/js/plugins/newLaunch/newLaunch.ts")).then(function (mod) { return mod.init(); })];
            case 32:
                _c.sent();
                _c.label = 33;
            case 33:
                if (!plugins.satChanges) return [3 /*break*/, 35];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_satChanges_satChanges_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/satChanges/satChanges */ "./src/js/plugins/satChanges/satChanges.ts")).then(function (mod) { return mod.init(); })];
            case 34:
                _c.sent();
                _c.label = 35;
            case 35:
                if (!plugins.initialOrbit) return [3 /*break*/, 37];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_initialOrbit_initialOrbit_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/initialOrbit/initialOrbit */ "./src/js/plugins/initialOrbit/initialOrbit.ts")).then(function (mod) { return mod.init(); })];
            case 36:
                _c.sent();
                _c.label = 37;
            case 37:
                if (!plugins.missile) return [3 /*break*/, 39];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_missile_missile_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/missile/missile */ "./src/js/plugins/missile/missile.ts")).then(function (mod) { return mod.init(); })];
            case 38:
                _c.sent();
                _c.label = 39;
            case 39:
                if (!plugins.stereoMap) return [3 /*break*/, 41];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_stereoMap_stereoMap_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/stereoMap/stereoMap */ "./src/js/plugins/stereoMap/stereoMap.ts")).then(function (mod) { return mod.init(); })];
            case 40:
                _c.sent();
                _c.label = 41;
            case 41:
                if (!plugins.sensorFov) return [3 /*break*/, 43];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_sensorFov_sensorFov_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sensorFov/sensorFov */ "./src/js/plugins/sensorFov/sensorFov.ts")).then(function (mod) { return mod.init(); })];
            case 42:
                _c.sent();
                _c.label = 43;
            case 43:
                if (!plugins.sensorSurv) return [3 /*break*/, 45];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_sensorSurv_sensorSurv_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sensorSurv/sensorSurv */ "./src/js/plugins/sensorSurv/sensorSurv.ts")).then(function (mod) { return mod.init(); })];
            case 44:
                _c.sent();
                _c.label = 45;
            case 45:
                if (!plugins.satelliteView) return [3 /*break*/, 47];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_satelliteView_satelliteView_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/satelliteView/satelliteView */ "./src/js/plugins/satelliteView/satelliteView.ts")).then(function (mod) { return mod.init(); })];
            case 46:
                _c.sent();
                _c.label = 47;
            case 47:
                if (!plugins.satelliteFov) return [3 /*break*/, 49];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_satelliteFov_satelliteFov_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/satelliteFov/satelliteFov */ "./src/js/plugins/satelliteFov/satelliteFov.ts")).then(function (mod) { return mod.init(); })];
            case 48:
                _c.sent();
                _c.label = 49;
            case 49:
                if (!plugins.planetarium) return [3 /*break*/, 51];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_planetarium_planetarium_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/planetarium/planetarium */ "./src/js/plugins/planetarium/planetarium.ts")).then(function (mod) { return mod.init(); })];
            case 50:
                _c.sent();
                _c.label = 51;
            case 51:
                if (!plugins.astronomy) return [3 /*break*/, 53];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_astronomy_astronomy_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/astronomy/astronomy */ "./src/js/plugins/astronomy/astronomy.ts")).then(function (mod) { return mod.init(); })];
            case 52:
                _c.sent();
                _c.label = 53;
            case 53:
                if (!plugins.nightToggle) return [3 /*break*/, 55];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_nightToggle_nightToggle_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/nightToggle/nightToggle */ "./src/js/plugins/nightToggle/nightToggle.ts")).then(function (mod) { return mod.init(); })];
            case 54:
                _c.sent();
                _c.label = 55;
            case 55:
                if (!plugins.dops) return [3 /*break*/, 57];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_dops_dops_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/dops/dops */ "./src/js/plugins/dops/dops.ts")).then(function (mod) { return mod.init(); })];
            case 56:
                _c.sent();
                _c.label = 57;
            case 57:
                if (!plugins.constellations) return [3 /*break*/, 59];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_constellations_constellations_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/constellations/constellations */ "./src/js/plugins/constellations/constellations.ts")).then(function (mod) { return mod.init(); })];
            case 58:
                _c.sent();
                _c.label = 59;
            case 59:
                if (!plugins.countries) return [3 /*break*/, 61];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_countries_countries_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/countries/countries */ "./src/js/plugins/countries/countries.ts")).then(function (mod) { return mod.init(); })];
            case 60:
                _c.sent();
                _c.label = 61;
            case 61:
                if (!plugins.colorsMenu) return [3 /*break*/, 63];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_colorsMenu_colorsMenu_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/colorsMenu/colorsMenu */ "./src/js/plugins/colorsMenu/colorsMenu.ts")).then(function (mod) { return mod.init(); })];
            case 62:
                _c.sent();
                _c.label = 63;
            case 63:
                if (!plugins.photo) return [3 /*break*/, 65];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_photo_photo_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/photo/photo */ "./src/js/plugins/photo/photo.ts")).then(function (mod) { return mod.init(); })];
            case 64:
                _c.sent();
                _c.label = 65;
            case 65:
                if (!plugins.launchCalendar) return [3 /*break*/, 67];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_launchCalendar_launchCalendar_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/launchCalendar/launchCalendar */ "./src/js/plugins/launchCalendar/launchCalendar.ts")).then(function (mod) { return mod.init(); })];
            case 66:
                _c.sent();
                _c.label = 67;
            case 67:
                if (!plugins.timeMachine) return [3 /*break*/, 69];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_timeMachine_timeMachine_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/timeMachine/timeMachine */ "./src/js/plugins/timeMachine/timeMachine.ts")).then(function (mod) { return mod.init(); })];
            case 68:
                _c.sent();
                _c.label = 69;
            case 69:
                if (!plugins.photoManager) return [3 /*break*/, 71];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_photoManager_photoManager_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/photoManager/photoManager */ "./src/js/plugins/photoManager/photoManager.ts")).then(function (mod) { return mod.init(); })];
            case 70:
                _c.sent();
                _c.label = 71;
            case 71:
                if (!plugins.recorderManager) return [3 /*break*/, 73];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_recorderManager_recorderManager_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/recorderManager/recorderManager */ "./src/js/plugins/recorderManager/recorderManager.ts")).then(function (mod) { return mod.init(); })];
            case 72:
                _c.sent();
                _c.label = 73;
            case 73:
                if (!plugins.analysis) return [3 /*break*/, 75];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_analysis_analysis_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/analysis/analysis */ "./src/js/plugins/analysis/analysis.ts")).then(function (mod) { return mod.init(); })];
            case 74:
                _c.sent();
                _c.label = 75;
            case 75:
                if (!plugins.twitter) return [3 /*break*/, 77];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_twitter_twitter_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/twitter/twitter */ "./src/js/plugins/twitter/twitter.ts")).then(function (mod) { return mod.init(); })];
            case 76:
                _c.sent();
                _c.label = 77;
            case 77:
                if (!plugins.externalSources) return [3 /*break*/, 79];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_externalSources_externalSources_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/externalSources/externalSources */ "./src/js/plugins/externalSources/externalSources.ts")).then(function (mod) { return mod.init(); })];
            case 78:
                _c.sent();
                _c.label = 79;
            case 79:
                if (!plugins.aboutManager) return [3 /*break*/, 81];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_aboutManager_aboutManager_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/aboutManager/aboutManager */ "./src/js/plugins/aboutManager/aboutManager.ts")).then(function (mod) { return mod.init(); })];
            case 80:
                _c.sent();
                _c.label = 81;
            case 81:
                if (!plugins.settingsMenu) return [3 /*break*/, 83];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_settingsMenu_settingsMenu_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/settingsMenu/settingsMenu */ "./src/js/plugins/settingsMenu/settingsMenu.ts")).then(function (mod) { return mod.init(); })];
            case 82:
                _c.sent();
                _c.label = 83;
            case 83:
                if (!plugins.soundManager) return [3 /*break*/, 85];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_sounds_sounds_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sounds/sounds */ "./src/js/plugins/sounds/sounds.ts")).then(function (mod) { return mod.init(); })];
            case 84:
                _c.sent();
                _c.label = 85;
            case 85:
                keepTrackApi.register({
                    method: 'uiManagerFinal',
                    cbName: 'core',
                    cb: function () {
                        var bicDom = document.getElementById('bottom-icons-container');
                        if (bicDom) {
                            var bottomHeight = bicDom.offsetHeight;
                            document.documentElement.style.setProperty('--bottom-menu-height', bottomHeight + 'px');
                        }
                        else {
                            document.documentElement.style.setProperty('--bottom-menu-height', '0px');
                        }
                        if (plugins.topMenu) {
                            var topMenuHeight = parseInt(document.documentElement.style.getPropertyValue('--top-menu-height').replace('px', ''));
                            if (isNaN(topMenuHeight))
                                topMenuHeight = 0;
                            document.documentElement.style.setProperty('--top-menu-height', topMenuHeight + 25 + 'px');
                        }
                        if (document.getElementById('bottom-icons') && document.getElementById('bottom-icons').innerText == '') {
                            document.getElementById('nav-footer').style.visibility = 'hidden';
                        }
                        var bottomContainer = document.getElementById('bottom-icons-container');
                        if (bottomContainer) {
                            var bottomHeight = bottomContainer.offsetHeight;
                            document.documentElement.style.setProperty('--bottom-menu-top', bottomHeight + 'px');
                        }
                        $('#versionNumber-text').html(keepTrackApi.programs.settingsManager.versionNumber + " - " + keepTrackApi.programs.settingsManager.versionDate);
                        // Only turn on analytics if on keeptrack.space ()
                        if (window.location.hostname === 'keeptrack.space' || window.location.hostname === 'www.keeptrack.space') {
                            var newScript = document.createElement('script');
                            newScript.type = 'text/javascript';
                            newScript.setAttribute('async', 'true');
                            newScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7');
                            document.documentElement.firstChild.appendChild(newScript);
                            window.dataLayer = window.dataLayer || [];
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            var gtag = function (_a, _b) {
                                // eslint-disable-next-line prefer-rest-params
                                window.dataLayer.push(arguments);
                            };
                            gtag('js', new Date());
                            gtag('config', 'G-ENHWK6L0X7');
                        }
                    },
                });
                return [2 /*return*/];
        }
    });
}); };


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_core_ts.b685722ad2cc86013694.js.map