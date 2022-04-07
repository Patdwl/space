"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_updateSelectBox_updateSelectBoxCore_ts"],{

/***/ "./src/js/plugins/updateSelectBox/updateSelectBoxCore.ts":
/*!***************************************************************!*\
  !*** ./src/js/plugins/updateSelectBox/updateSelectBoxCore.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateSelectBoxCoreCallback": () => (/* binding */ updateSelectBoxCoreCallback),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/constants */ "./src/js/lib/constants.ts");
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


const updateSelectBoxCoreCallback = (sat) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        const { satellite, missileManager, timeManager, objectManager, sensorManager, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
        if (typeof sat === 'undefined' || sat == null)
            throw new Error('updateSelectBoxCoreCallback: sat is undefined');
        if (!sat.missile) {
            if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.objectManager.isSensorManagerLoaded) {
                sat.getTEARR();
            }
        }
        else {
            satellite.setTEARR(missileManager.getMissileTEARR(sat));
        }
        if (satellite.degreesLong(satellite.currentTEARR.lon) >= 0) {
            $('#sat-longitude').html(satellite.degreesLong(satellite.currentTEARR.lon).toFixed(3) + '°E');
        }
        else {
            $('#sat-longitude').html((satellite.degreesLong(satellite.currentTEARR.lon) * -1).toFixed(3) + '°W');
        }
        if (satellite.degreesLat(satellite.currentTEARR.lat) >= 0) {
            $('#sat-latitude').html(satellite.degreesLat(satellite.currentTEARR.lat).toFixed(3) + '°N');
        }
        else {
            $('#sat-latitude').html((satellite.degreesLat(satellite.currentTEARR.lat) * -1).toFixed(3) + '°S');
        }
        const jday = timeManager.getDayOfYear(timeManager.simulationTimeObj);
        $('#jday').html(jday);
        if (((_a = settingsManager.plugins) === null || _a === void 0 ? void 0 : _a.stereoMap) && _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.mapManager.isMapMenuOpen && timeManager.realTime > settingsManager.lastMapUpdateTime + 30000) {
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.mapManager.updateMap();
            settingsManager.lastMapUpdateTime = timeManager.realTime;
        }
        if (!sat.missile) {
            $('#sat-altitude').html(sat.getAltitude().toFixed(2) + ' km');
            $('#sat-velocity').html(sat.velocity.total.toFixed(2) + ' km/s');
        }
        else {
            $('#sat-altitude').html(satellite.currentTEARR.alt.toFixed(2) + ' km');
        }
        if (objectManager.isSensorManagerLoaded) {
            if (satellite.currentTEARR.inView) {
                $('#sat-azimuth').html(satellite.currentTEARR.az.toFixed(0) + '°'); // Convert to Degrees
                $('#sat-elevation').html(satellite.currentTEARR.el.toFixed(1) + '°');
                $('#sat-range').html(satellite.currentTEARR.rng.toFixed(2) + ' km');
                const beamwidthString = sensorManager.currentSensor[0].beamwidth ? (satellite.currentTEARR.rng * Math.sin(_app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__.DEG2RAD * sensorManager.currentSensor[0].beamwidth)).toFixed(2) + ' km' : 'Unknown';
                $('#sat-beamwidth').html(beamwidthString);
                $('#sat-maxTmx').html(((satellite.currentTEARR.rng / _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__.cKmPerMs) * 2).toFixed(2) + ' ms'); // Time for RF to hit target and bounce back
            }
            else {
                $('#sat-azimuth').html('Out of FOV');
                $('#sat-azimuth').prop('title', 'Azimuth: ' + satellite.currentTEARR.az.toFixed(0) + '°');
                $('#sat-elevation').html('Out of FOV');
                $('#sat-elevation').prop('title', 'Elevation: ' + satellite.currentTEARR.el.toFixed(1) + '°');
                $('#sat-range').html('Out of FOV');
                $('#sat-range').prop('title', 'Range: ' + satellite.currentTEARR.rng.toFixed(2) + ' km');
                const beamwidthString = sensorManager.currentSensor[0].beamwidth ? sensorManager.currentSensor[0].beamwidth + '°' : 'Unknown';
                $('#sat-beamwidth').html('Out of FOV');
                $('#sat-beamwidth').prop('title', beamwidthString);
                $('#sat-maxTmx').html('Out of FOV');
            }
        }
        else {
            $('#sat-azimuth').parent().hide();
            $('#sat-elevation').parent().hide();
            $('#sat-range').parent().hide();
            $('#sat-beamwidth').parent().hide();
            $('#sat-maxTmx').parent().hide();
        }
        if (objectManager.secondarySat !== -1 && ((_c = (_b = document.getElementById('secondary-sat-info')) === null || _b === void 0 ? void 0 : _b.style) === null || _c === void 0 ? void 0 : _c.display) === 'none') {
            $('#secondary-sat-info').show();
        }
        else if (objectManager.secondarySat === -1 && ((_e = (_d = document.getElementById('secondary-sat-info')) === null || _d === void 0 ? void 0 : _d.style) === null || _e === void 0 ? void 0 : _e.display) !== 'none') {
            $('#secondary-sat-info').hide();
        }
        if (objectManager.secondarySat !== -1) {
            const ric = satellite.sat2ric(objectManager.secondarySatObj, sat);
            const dist = satellite.distance(sat, objectManager.secondarySatObj).split(' ')[2];
            $('#sat-sec-dist').html(`${dist} km`);
            $('#sat-sec-rad').html(`${ric.position[0].toFixed(2)}km`);
            $('#sat-sec-intrack').html(`${ric.position[1].toFixed(2)}km`);
            $('#sat-sec-crosstrack').html(`${ric.position[2].toFixed(2)}km`);
        }
        if (objectManager.isSensorManagerLoaded) {
            if (sensorManager.checkSensorSelected()) {
                // If we didn't just calculate next pass time for this satellite and sensor combination do it
                // TODO: Make new logic for this to allow it to be updated while selected
                if (objectManager.selectedSat !== uiManager.lastNextPassCalcSatId && sensorManager.currentSensor[0].shortName !== uiManager.lastNextPassCalcSensorId && !sat.missile) {
                    if (sat.perigee > sensorManager.currentSensor[0].obsmaxrange) {
                        $('#sat-nextpass').html('Beyond Max Range');
                    }
                    else {
                        $('#sat-nextpass').html(satellite.nextpass(sat, sensorManager.currentSensor, 2, 5));
                    }
                    // IDEA: Code isInSun()
                    //sun.getXYZ();
                    //lineManager.create('ref',[sun.sunvar.position.x,sun.sunvar.position.y,sun.sunvar.position.z]);
                }
                uiManager.lastNextPassCalcSatId = objectManager.selectedSat;
                uiManager.lastNextPassCalcSensorId = sensorManager.currentSensor[0].shortName;
            }
            else {
                $('#sat-nextpass').html('Unavailable');
            }
        }
        else {
            $('#sat-nextpass').parent().hide();
        }
    }
    catch (e) {
        console.error(e);
    }
});
const init = () => {
    // Register updateSelectBox
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'updateSelectBox',
        cbName: 'updateSelectBoxCore',
        cb: updateSelectBoxCoreCallback,
    });
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_updateSelectBox_updateSelectBoxCore_ts.4438adfb0899ed8ee0c1.js.map