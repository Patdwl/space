"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_stereoMap_stereoMap_ts"],{

/***/ "./src/js/plugins/stereoMap/stereoMap.ts":
/*!***********************************************!*\
  !*** ./src/js/plugins/stereoMap/stereoMap.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rad": () => (/* binding */ rad),
/* harmony export */   "tan": () => (/* binding */ tan),
/* harmony export */   "deg": () => (/* binding */ deg),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "options": () => (/* binding */ options),
/* harmony export */   "braun": () => (/* binding */ braun),
/* harmony export */   "check": () => (/* binding */ check),
/* harmony export */   "addMeridian": () => (/* binding */ addMeridian),
/* harmony export */   "updateMap": () => (/* binding */ updateMap),
/* harmony export */   "resize2DMap": () => (/* binding */ resize2DMap),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "onCruncherMessage": () => (/* binding */ onCruncherMessage),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "mapMenuClick": () => (/* binding */ mapMenuClick)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_img_icons_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/img/icons/map.png */ "./src/img/icons/map.png");
/*!
  mapManager.js was created by Theodore Kruczek using the work of
  Julius Tens' "projections" library (https://github.com/juliuste/projections).
  This file is exclusively released under the same license as the original author.
  The license only applies to map.js

  The MIT License
  Copyright (c) 2017, Julius Tens

  Permission is hereby granted, free of charge, to any person obtaining a
  copy of this software and associated documentation files (the "Software"),
  to deal in the Software without restriction, including without limitation
  the rights to use, copy, modify, merge, publish, distribute, sublicense,
  and/or sell copies of the Software, and to permit persons to whom the
  Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included
  in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/



const defaults = {
    meridian: 0,
    standardParallel: 0,
    latLimit: 90,
};
const rad = (degIn) => (degIn * Math.PI) / 180;
const tan = (degIn) => Math.tan(rad(degIn));
const deg = (radIn) => (radIn * 180) / Math.PI;
const init = () => {
    const mapManager = {
        options,
        braun,
        check,
        addMeridian,
        updateMap,
        isMapMenuOpen: false,
        mapManager: 0,
    };
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.mapManager = mapManager;
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'stereoMap',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'stereoMap',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'stereoMap',
        cb: hideSideMenus,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'onCruncherMessage',
        cbName: 'stereoMap',
        cb: onCruncherMessage,
    });
};
const options = (opt) => (Object.assign(Object.assign({}, defaults), (opt || {})));
const braun = (point, opt) => {
    point = check(point);
    if (point.wgs) {
        point = addMeridian(point, opt.meridian);
        return {
            x: rad(point.lon) / (2 * Math.PI) + 0.5,
            y: (tan(opt.latLimit / 2) - tan(point.lat / 2)) / Math.PI,
        };
    }
    else {
        const result = {
            lon: deg((2 * point.x - 1) * Math.PI),
            lat: deg(2 * Math.atan(tan(opt.latLimit / 2) - point.y * Math.PI)),
        };
        return addMeridian(result, opt.meridian * -1);
    }
};
const check = (point) => {
    if (typeof point.x !== 'undefined' && point.x >= 0 && point.x <= 1 && typeof point.y !== 'undefined' && typeof point.lon === 'undefined' && typeof point.lat === 'undefined') {
        return { x: point.x, y: point.y, wgs: false };
    }
    if (typeof point.lon !== 'undefined' && typeof point.lat !== 'undefined' && typeof point.x === 'undefined' && typeof point.y === 'undefined') {
        return { lon: point.lon, lat: point.lat, wgs: true };
    }
    throw new Error('Invalid input point.');
};
const addMeridian = (point, meridian) => {
    const pointResults = check(point);
    if (meridian !== 0) {
        return check({
            lon: ((pointResults.lon + 180 + 360 - meridian) % 360) - 180,
            lat: pointResults.lat,
        });
    }
    return pointResults;
};
const updateMap = () => {
    const { sensorManager, satellite, mapManager, objectManager, satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (objectManager.selectedSat === -1)
        return;
    if (!mapManager.isMapMenuOpen)
        return;
    const sat = satSet.getSat(objectManager.selectedSat);
    let map;
    sat.getTEARR();
    map = mapManager.braun({
        lon: satellite.degreesLong(satellite.currentTEARR.lon),
        lat: satellite.degreesLat(satellite.currentTEARR.lat),
    }, { meridian: 0, latLimit: 90 });
    map.x = map.x * settingsManager.mapWidth - 10;
    map.y = (map.y / 0.6366197723675813) * settingsManager.mapHeight - 10;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-sat').attr('style', 'left:' + map.x + 'px;top:' + map.y + 'px;'); // Set to size of the map image (800x600)
    if (sensorManager.checkSensorSelected()) {
        map = mapManager.braun({
            lon: sensorManager.currentSensor[0].lon,
            lat: sensorManager.currentSensor[0].lat,
        }, { meridian: 0, latLimit: 90 });
        map.x = map.x * settingsManager.mapWidth - 10;
        map.y = (map.y / 0.6366197723675813) * settingsManager.mapHeight - 10;
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-sensor').attr('style', 'left:' + map.x + 'px;top:' + map.y + 'px;z-index:11;'); // Set to size of the map image (800x600)
    }
    for (let i = 1; i <= 50; i++) {
        map = mapManager.braun({
            lon: satellite.map(sat, i).lon,
            lat: satellite.map(sat, i).lat,
        }, { meridian: 0, latLimit: 90 });
        map.x = map.x * settingsManager.mapWidth - 3.5;
        map.y = (map.y / 0.6366197723675813) * settingsManager.mapHeight - 3.5;
        if (map.y > settingsManager.mapHeight / 2) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-look' + i).tooltip({
                // delay: 50,
                html: satellite.map(sat, i).time,
                position: 'top',
            });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-look' + i).tooltip({
                // delay: 50,
                html: satellite.map(sat, i).time,
                position: 'bottom',
            });
        }
        if (satellite.map(sat, i).inView) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-look' + i).attr('src', 'img/yellow-square.png'); // If inview then make yellow
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-look' + i).attr('src', 'img/red-square.png'); // If not inview then make red
        }
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-look' + i).attr('style', 'left:' + map.x + 'px;top:' + map.y + 'px;'); // Set to size of the map image (800x600)
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-look' + i).attr('time', satellite.map(sat, i).time);
    }
};
const resize2DMap = function (isForceWidescreen) {
    isForceWidescreen !== null && isForceWidescreen !== void 0 ? isForceWidescreen : (isForceWidescreen = false);
    const mapImageDOM = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-image');
    const mapMenuDOM = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-menu');
    if (isForceWidescreen || jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width() > jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).height()) {
        // If widescreen
        settingsManager.mapWidth = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width();
        mapImageDOM.width(settingsManager.mapWidth);
        settingsManager.mapHeight = (settingsManager.mapWidth * 3) / 4;
        mapImageDOM.height(settingsManager.mapHeight);
        mapMenuDOM.width(jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width());
    }
    else {
        settingsManager.mapHeight = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).height() - 100; // Subtract 100 portrait (mobile)
        mapImageDOM.height(settingsManager.mapHeight);
        settingsManager.mapWidth = (settingsManager.mapHeight * 4) / 3;
        mapImageDOM.width(settingsManager.mapWidth);
        mapMenuDOM.width(jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width());
    }
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-map') {
        const { mapManager, uiManager, objectManager, satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
        if (mapManager.isMapMenuOpen) {
            mapManager.isMapMenuOpen = false;
            uiManager.hideSideMenus();
            return;
        }
        else {
            if (objectManager.selectedSat === -1) {
                // No Satellite Selected
                if (settingsManager.plugins.topMenu)
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.adviceManager.adviceList.mapDisabled();
                uiManager.toast(`Select a Satellite First!`, 'caution');
                if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-map:animated').length) {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-map').effect('shake', {
                        distance: 10,
                    });
                }
                return;
            }
            if (settingsManager.isMobileModeEnabled)
                uiManager.searchToggle(false);
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            mapManager.isMapMenuOpen = true;
            mapManager.updateMap();
            const satData = satSet.getSatExtraOnly(objectManager.selectedSat);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-sat').tooltip({
                // delay: 50,
                html: satData.sccNum,
                position: 'left',
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-map').addClass('bmenu-item-selected');
            return;
        }
    }
};
const uiManagerInit = () => {
    const { uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="map-menu" class="side-menu-parent start-hidden side-menu valign-wrapper">
          <img id="map-image" data-src="img/braun-stereographic.jpg" class="lazyload" width="800px" height="600px">
          <img id="map-sat" class="lazyload map-item map-look" data-src="img/satellite-2.png" width="20px" height="20px">
          <img id="map-sensor" class="lazyload map-item map-look start-hidden" data-src="img/radar-1.png" width="20px"
            height="20px">
          <img id="map-look1" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look2" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look3" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look4" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look5" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look6" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look7" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look8" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look9" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look10" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look11" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look12" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look13" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look14" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look15" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look16" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look17" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look18" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look19" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look20" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look21" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look22" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look23" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look24" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look25" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look26" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look27" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look28" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look29" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look30" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look31" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look32" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look33" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look34" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look35" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look36" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look37" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look38" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look39" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look40" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look41" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look42" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look43" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look44" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look45" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look46" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look47" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look48" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look49" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <img id="map-look50" class="lazyload map-item map-look" data-src="img/red-square.png" width="7px" height="7px">
          <div id="braun-credit" style="position:fixed;right:10px;bottom:10px;z-index:5;color:var(--colorTertiaryDarken2);">
            Braun Stereographic Projection (c) Tobias Jung
          </div>
        </div>
      `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="menu-map" class="bmenu-item bmenu-item-disabled">
          <img alt="map" src="" delayedsrc="${_app_img_icons_map_png__WEBPACK_IMPORTED_MODULE_2__}" />
          <span class="bmenu-title">Stereo Map</span>
          <div class="status-icon"></div>
        </div>
      `);
    resize2DMap();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('resize', function () {
        if (!settingsManager.disableUI) {
            resize2DMap();
        }
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fullscreen-icon').on('click', function () {
        uiManager.resize2DMap();
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-menu').on('click', '.map-look', function (evt) {
        mapMenuClick(evt);
    });
    resize2DMap();
};
const onCruncherMessage = () => {
    const { mapManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (mapManager.isMapMenuOpen || settingsManager.isMapUpdateOverride) {
        mapManager.satCrunchNow = Date.now();
        if (mapManager.satCrunchNow > settingsManager.lastMapUpdateTime + 30000 || settingsManager.isMapUpdateOverride) {
            mapManager.updateMap();
            settingsManager.lastMapUpdateTime = mapManager.satCrunchNow;
            settingsManager.isMapUpdateOverride = false;
        }
    }
};
const hideSideMenus = () => {
    const { mapManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#map-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-map').removeClass('bmenu-item-selected');
    mapManager.isMapMenuOpen = false;
};
const mapMenuClick = (evt) => {
    const { timeManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    settingsManager.isMapUpdateOverride = true;
    // Might be better code for this.
    let time = evt.currentTarget.attributes.time.value;
    if (time !== null) {
        time = time.split(' ');
        time = new Date(time[0] + 'T' + time[1] + 'Z');
        const today = new Date(); // Need to know today for offset calculation
        timeManager.changeStaticOffset(time.getTime() - today.getTime()); // Find the offset from today
    }
};


/***/ }),

/***/ "./src/img/icons/map.png":
/*!*******************************!*\
  !*** ./src/img/icons/map.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "203352f40daf7086b565.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_stereoMap_stereoMap_ts.f8c6daad2cca8c8add9c.js.map