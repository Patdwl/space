"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_photoManager_photoManager_ts"],{

/***/ "./src/js/plugins/photoManager/photoManager.ts":
/*!*****************************************************!*\
  !*** ./src/js/plugins/photoManager/photoManager.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dscovrLoaded": () => (/* binding */ dscovrLoaded),
/* harmony export */   "meteosat11": () => (/* binding */ meteosat11),
/* harmony export */   "meteosat8": () => (/* binding */ meteosat8),
/* harmony export */   "goes1": () => (/* binding */ goes1),
/* harmony export */   "himawari8": () => (/* binding */ himawari8),
/* harmony export */   "colorbox": () => (/* binding */ colorbox),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "discovr": () => (/* binding */ discovr)
/* harmony export */ });
/* harmony import */ var _app_img_icons_photoManager_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/photoManager.png */ "./src/img/icons/photoManager.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let isSatPhotoMenuOpen = false;
const dscovrLoaded = (req) => {
    if (req.status >= 200 && req.status < 400) {
        // Success!
        const response = JSON.parse(req.response);
        const imageUrl = response[0].image;
        const dateStr = response[0].identifier;
        const year = dateStr.slice(0, 4);
        const month = dateStr.slice(4, 6);
        const day = dateStr.slice(6, 8);
        const hour = dateStr.slice(8, 10);
        const min = dateStr.slice(10, 12);
        const sec = dateStr.slice(12, 14);
        // Hours are in EST? Daylight savings time might make this break
        const dateObj = new Date(Date.UTC(year, month - 1, day, hour - 4, min, sec));
        _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera.camSnap(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera.lat2pitch(response[0].centroid_coordinates.lat), _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera.lon2yaw(response[0].centroid_coordinates.lon, dateObj));
        _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera.changeZoom(0.7);
        colorbox(`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageUrl}.png`);
    }
};
const meteosat11 = () => {
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.drawManager.selectSatManager.selectSat(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.getSatFromObjNum(40732).id, _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera);
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera.changeZoom(0.7);
    colorbox(`https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg`);
};
const meteosat8 = () => {
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.drawManager.selectSatManager.selectSat(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.getSatFromObjNum(27509).id, _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera);
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera.changeZoom(0.7);
    colorbox(`https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg`);
};
const goes1 = () => {
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.drawManager.selectSatManager.selectSat(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.getSatFromObjNum(41866).id, _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera);
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera.changeZoom(0.7);
    colorbox(`https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg`);
};
const himawari8 = () => {
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.drawManager.selectSatManager.selectSat(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.getSatFromObjNum(40267).id, _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera);
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera.changeZoom(0.7);
    let propTime = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.timeManager.simulationTimeObj; // Propagation time minus 30 minutes so that the pictures have time to become available
    if (propTime < Date.now()) {
        propTime = new Date(propTime - 1000 * 60 * 30);
    }
    else {
        _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.toast(`Can't load pictures from the future. Loading most recent photos.`, 'caution');
        propTime = new Date(Date.now() - 1000 * 60 * 30);
    }
    const year = propTime.getUTCFullYear();
    const mon = (propTime.getUTCMonth() + 1).toString().padStart(2, '0'); // NOTE:, this function requires months in range 1-12.
    const day = propTime.getUTCDate().toString().padStart(2, '0');
    const hour = propTime.getUTCHours().toString().padStart(2, '0');
    const min = (Math.floor(propTime.getUTCMinutes() / 10) * 10).toString().padStart(2, '0');
    let imgWidth, imgHeight;
    if (window.innerWidth < window.innerHeight) {
        imgWidth = window.innerWidth * 0.8;
        imgHeight = imgWidth;
    }
    else {
        imgHeight = window.innerHeight * 0.8;
        imgWidth = imgHeight;
    }
    settingsManager.isPreventColorboxClose = true;
    setTimeout(function () {
        settingsManager.isPreventColorboxClose = false;
    }, 2000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default().colorbox({
        href: `https://himawari8.nict.go.jp/img/D531106/1d/550/${year}/${mon}/${day}/${hour}${min}00_0_0.png`,
        photo: true,
        width: imgWidth,
        height: imgHeight,
        scalePhotos: true,
        fastIframe: false,
        closeButton: false,
        onComplete: () => {
            const cbImg = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#cboxLoadedContent img')[0];
            cbImg.style.width = '100%';
            cbImg.style.height = '100%';
            cbImg.style.marginTop = '';
        },
    });
};
const colorbox = (url) => {
    settingsManager.isPreventColorboxClose = true;
    setTimeout(function () {
        settingsManager.isPreventColorboxClose = false;
    }, 2000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default().colorbox({
        href: url,
        photo: true,
        scalePhotos: true,
        height: '80%',
        fastIframe: false,
        closeButton: false,
    });
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sat-photo-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-sat-photo').removeClass('bmenu-item-selected');
    isSatPhotoMenuOpen = false;
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-sat-photo') {
        if (isSatPhotoMenuOpen) {
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
            isSatPhotoMenuOpen = false;
            return;
        }
        else {
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sat-photo-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            isSatPhotoMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-sat-photo').addClass('bmenu-item-selected');
            return;
        }
    }
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="sat-photo-menu" class="side-menu-parent start-hidden text-select">
          <div id="sat-photo-menu-content" class="side-menu">
            <ul>
              <h5 class="center-align">Satellites Imagery List</h5>
              <li class="link satPhotoRow" onmouseup="keepTrackApi.programs.photoManager.meteosat8()">MeteoSat 8</li>
              <li class="link satPhotoRow" onmouseup="keepTrackApi.programs.photoManager.meteosat11()">MeteoSat 11</li>
              <li class="link satPhotoRow" onmouseup="keepTrackApi.programs.photoManager.himawari8()">Himawari 8</li>
              <li class="link satPhotoRow" onmouseup="keepTrackApi.programs.photoManager.discovr()">DSCOVR</li>
              <li class="link satPhotoRow" onmouseup="keepTrackApi.programs.photoManager.goes1()">GOES 1</li>
            </ul>
          </div>
        </div>
      `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-sat-photo" class="bmenu-item">
          <img alt="photographs" src="" delayedsrc="${_app_img_icons_photoManager_png__WEBPACK_IMPORTED_MODULE_0__}" />
          <span class="bmenu-title">Satellite Photos</span>
          <div class="status-icon"></div>
        </div>
      `);
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'photoManager',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'photoManager',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'photoManager',
        cb: hideSideMenus,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.photoManager = {
        meteosat8: meteosat8,
        meteosat11: meteosat11,
        goes1: goes1,
        himawari8: himawari8,
        discovr: discovr,
    };
};
const discovr = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://epic.gsfc.nasa.gov/api/natural`, true);
    request.onload = () => {
        dscovrLoaded(request);
    };
    request.onerror = function () {
        console.debug('https://epic.gsfc.nasa.gov/ request failed!');
    };
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.drawManager.selectSatManager.selectSat(-1, _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.mainCamera);
    request.send();
};


/***/ }),

/***/ "./src/img/icons/photoManager.png":
/*!****************************************!*\
  !*** ./src/img/icons/photoManager.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dbeb04d18526db1df83.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_photoManager_photoManager_ts.00005998de6e8529b652.js.map