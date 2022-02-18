"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_core_ts"],{

/***/ "./src/js/plugins/core.ts":
/*!********************************!*\
  !*** ./src/js/plugins/core.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCorePlugins": () => (/* binding */ loadCorePlugins),
/* harmony export */   "uiManagerFinal": () => (/* binding */ uiManagerFinal),
/* harmony export */   "startGoogleAnalytics": () => (/* binding */ startGoogleAnalytics)
/* harmony export */ });
/* harmony import */ var _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
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

// Register all core modules
const loadCorePlugins = (keepTrackApi, plugins) => __awaiter(void 0, void 0, void 0, function* () {
    plugins !== null && plugins !== void 0 ? plugins : (plugins = {});
    try {
        // Register Catalog Loader
        yield __webpack_require__.e(/*! import() */ "src_js_plugins_catalogLoader_catalogLoader_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/catalogLoader/catalogLoader */ "./src/js/plugins/catalogLoader/catalogLoader.ts")).then((mod) => mod.init());
        // Load Debug Plugins
        if (plugins.debug)
            yield Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_gremlins_js_dist_gremlins_min_js"), __webpack_require__.e("src_js_plugins_debug_debug_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/debug/debug */ "./src/js/plugins/debug/debug.ts")).then((mod) => mod.init());
        // Register selectSatData
        if (plugins.satInfoboxCore)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_selectSatManager_satInfoboxCore_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/selectSatManager/satInfoboxCore */ "./src/js/plugins/selectSatManager/satInfoboxCore.ts")).then((mod) => mod.init());
        // Update Select Box
        if (plugins.updateSelectBoxCore)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_updateSelectBox_updateSelectBoxCore_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/updateSelectBox/updateSelectBoxCore */ "./src/js/plugins/updateSelectBox/updateSelectBoxCore.ts")).then((mod) => mod.init());
        if (plugins.topMenu)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_topMenu_topMenu_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/topMenu/topMenu */ "./src/js/plugins/topMenu/topMenu.ts")).then((mod) => mod.init());
        if (plugins.datetime)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_datetime_datetime_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/datetime/datetime */ "./src/js/plugins/datetime/datetime.ts")).then((mod) => mod.init());
        if (plugins.social)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_social_social_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/social/social */ "./src/js/plugins/social/social.ts")).then((mod) => mod.init());
        // UI Menu
        // Load order determines menu order
        if (plugins.classification)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_classification_classification_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/classification/classification */ "./src/js/plugins/classification/classification.ts")).then((mod) => mod.init());
        if (plugins.sensor)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_sensor_sensor_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sensor/sensor */ "./src/js/plugins/sensor/sensor.ts")).then((mod) => mod.init());
        if (plugins.watchlist)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_watchlist_watchlist_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/watchlist/watchlist */ "./src/js/plugins/watchlist/watchlist.ts")).then((mod) => mod.init());
        if (plugins.nextLaunch)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_nextLaunch_nextLaunch_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/nextLaunch/nextLaunch */ "./src/js/plugins/nextLaunch/nextLaunch.ts")).then((mod) => mod.init());
        if (plugins.findSat)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_findSat_findSat_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/findSat/findSat */ "./src/js/plugins/findSat/findSat.ts")).then((mod) => mod.init());
        if (plugins.shortTermFences)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_shortTermFences_shortTermFences_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/shortTermFences/shortTermFences */ "./src/js/plugins/shortTermFences/shortTermFences.ts")).then((mod) => mod.init());
        if (plugins.orbitReferences)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_orbitReferences_orbitReferences_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/orbitReferences/orbitReferences */ "./src/js/plugins/orbitReferences/orbitReferences.ts")).then((mod) => mod.init());
        if (plugins.collisions)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_collisions_collisions_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/collisions/collisions */ "./src/js/plugins/collisions/collisions.ts")).then((mod) => mod.init());
        if (plugins.breakup)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_breakup_breakup_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/breakup/breakup */ "./src/js/plugins/breakup/breakup.ts")).then((mod) => mod.init());
        if (plugins.editSat)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_editSat_editSat_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/editSat/editSat */ "./src/js/plugins/editSat/editSat.ts")).then((mod) => mod.init());
        if (plugins.newLaunch)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_newLaunch_newLaunch_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/newLaunch/newLaunch */ "./src/js/plugins/newLaunch/newLaunch.ts")).then((mod) => mod.init());
        if (plugins.satChanges)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_satChanges_satChanges_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/satChanges/satChanges */ "./src/js/plugins/satChanges/satChanges.ts")).then((mod) => mod.init());
        if (plugins.initialOrbit)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_initialOrbit_initialOrbit_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/initialOrbit/initialOrbit */ "./src/js/plugins/initialOrbit/initialOrbit.ts")).then((mod) => mod.init());
        if (plugins.missile)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_missile_missile_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/missile/missile */ "./src/js/plugins/missile/missile.ts"))
                .then((mod) => mod.init())
                .catch((err) => {
                // If this fails and it isn't jest then throw an error
                if (!(0,_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.isThisJest)()) {
                    console.debug(err);
                }
            });
        if (plugins.stereoMap)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_stereoMap_stereoMap_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/stereoMap/stereoMap */ "./src/js/plugins/stereoMap/stereoMap.ts")).then((mod) => mod.init());
        if (plugins.sensorFov)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_sensorFov_sensorFov_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sensorFov/sensorFov */ "./src/js/plugins/sensorFov/sensorFov.ts")).then((mod) => mod.init());
        if (plugins.sensorSurv)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_sensorSurv_sensorSurv_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sensorSurv/sensorSurv */ "./src/js/plugins/sensorSurv/sensorSurv.ts")).then((mod) => mod.init());
        if (plugins.satelliteView)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_satelliteView_satelliteView_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/satelliteView/satelliteView */ "./src/js/plugins/satelliteView/satelliteView.ts")).then((mod) => mod.init());
        if (plugins.satelliteFov)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_satelliteFov_satelliteFov_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/satelliteFov/satelliteFov */ "./src/js/plugins/satelliteFov/satelliteFov.ts")).then((mod) => mod.init());
        if (plugins.planetarium)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_planetarium_planetarium_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/planetarium/planetarium */ "./src/js/plugins/planetarium/planetarium.ts")).then((mod) => mod.init());
        if (plugins.astronomy)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_astronomy_astronomy_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/astronomy/astronomy */ "./src/js/plugins/astronomy/astronomy.ts")).then((mod) => mod.init());
        if (plugins.nightToggle)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_nightToggle_nightToggle_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/nightToggle/nightToggle */ "./src/js/plugins/nightToggle/nightToggle.ts")).then((mod) => mod.init());
        if (plugins.dops)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_dops_dops_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/dops/dops */ "./src/js/plugins/dops/dops.ts")).then((mod) => mod.init());
        if (plugins.constellations)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_constellations_constellations_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/constellations/constellations */ "./src/js/plugins/constellations/constellations.ts")).then((mod) => mod.init());
        if (plugins.countries)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_countries_countries_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/countries/countries */ "./src/js/plugins/countries/countries.ts")).then((mod) => mod.init());
        if (plugins.colorsMenu)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_colorsMenu_colorsMenu_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/colorsMenu/colorsMenu */ "./src/js/plugins/colorsMenu/colorsMenu.ts")).then((mod) => mod.init());
        if (plugins.photo)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_photo_photo_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/photo/photo */ "./src/js/plugins/photo/photo.ts")).then((mod) => mod.init());
        if (plugins.launchCalendar)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_launchCalendar_launchCalendar_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/launchCalendar/launchCalendar */ "./src/js/plugins/launchCalendar/launchCalendar.ts")).then((mod) => mod.init());
        if (plugins.timeMachine)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_timeMachine_timeMachine_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/timeMachine/timeMachine */ "./src/js/plugins/timeMachine/timeMachine.ts")).then((mod) => mod.init());
        if (plugins.photoManager)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_photoManager_photoManager_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/photoManager/photoManager */ "./src/js/plugins/photoManager/photoManager.ts")).then((mod) => mod.init());
        if (plugins.recorderManager)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_recorderManager_recorderManager_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/recorderManager/recorderManager */ "./src/js/plugins/recorderManager/recorderManager.ts")).then((mod) => mod.init());
        if (plugins.analysis)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_analysis_analysis_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/analysis/analysis */ "./src/js/plugins/analysis/analysis.ts")).then((mod) => mod.init());
        if (plugins.twitter)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_twitter_twitter_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/twitter/twitter */ "./src/js/plugins/twitter/twitter.ts")).then((mod) => mod.init());
        if (plugins.externalSources)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_externalSources_externalSources_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/externalSources/externalSources */ "./src/js/plugins/externalSources/externalSources.ts")).then((mod) => mod.init());
        if (plugins.aboutManager)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_aboutManager_aboutManager_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/aboutManager/aboutManager */ "./src/js/plugins/aboutManager/aboutManager.ts")).then((mod) => mod.init());
        if (plugins.settingsMenu)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_settingsMenu_settingsMenu_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/settingsMenu/settingsMenu */ "./src/js/plugins/settingsMenu/settingsMenu.ts")).then((mod) => mod.init());
        if (plugins.soundManager)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_sounds_sounds_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sounds/sounds */ "./src/js/plugins/sounds/sounds.ts")).then((mod) => mod.init());
        if (plugins.gamepad)
            yield __webpack_require__.e(/*! import() */ "src_js_plugins_gamepad_gamepad_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/gamepad/gamepad */ "./src/js/plugins/gamepad/gamepad.ts")).then((mod) => mod.init());
        keepTrackApi.register({
            method: 'uiManagerFinal',
            cbName: 'core',
            cb: function () {
                uiManagerFinal(plugins);
            },
        });
    }
    catch (e) {
        console.debug(e);
    }
});
const uiManagerFinal = (plugins) => {
    const bicDom = document.getElementById('bottom-icons-container');
    if (bicDom) {
        const bottomHeight = bicDom.offsetHeight;
        document.documentElement.style.setProperty('--bottom-menu-height', bottomHeight + 'px');
    }
    else {
        document.documentElement.style.setProperty('--bottom-menu-height', '0px');
    }
    if (plugins.topMenu) {
        let topMenuHeight = parseInt(document.documentElement.style.getPropertyValue('--top-menu-height').replace('px', ''));
        if (isNaN(topMenuHeight))
            topMenuHeight = 0;
        document.documentElement.style.setProperty('--top-menu-height', topMenuHeight + 22 + 'px');
    }
    if (document.getElementById('bottom-icons') && document.getElementById('bottom-icons').innerText == '') {
        document.getElementById('nav-footer').style.visibility = 'hidden';
    }
    const bottomContainer = document.getElementById('bottom-icons-container');
    if (bottomContainer) {
        const bottomHeight = bottomContainer.offsetHeight;
        document.documentElement.style.setProperty('--bottom-menu-top', bottomHeight + 'px');
    }
    $('#versionNumber-text').html(`${settingsManager.versionNumber} - ${settingsManager.versionDate}`);
    // Only turn on analytics if on keeptrack.space ()
    if (window.location.hostname === 'keeptrack.space' || window.location.hostname === 'www.keeptrack.space') {
        startGoogleAnalytics();
    }
    const wheel = (dom, deltaY) => {
        const step = 0.15;
        const pos = dom.scrollTop();
        const nextPos = pos + step * deltaY;
        dom.scrollTop(nextPos);
    };
    $('#bottom-icons-container').bind('mousewheel', function (event) {
        wheel($(this), event.originalEvent.deltaY);
        event.preventDefault();
    });
};
/* istanbul ignore next */
const startGoogleAnalytics = () => {
    const newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.setAttribute('async', 'true');
    newScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7');
    document.documentElement.firstChild.appendChild(newScript);
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line no-unused-vars
    const gtag = function (_a, _b) {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', 'G-ENHWK6L0X7');
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_core_ts.ce4d292d2d13c2123af8.js.map