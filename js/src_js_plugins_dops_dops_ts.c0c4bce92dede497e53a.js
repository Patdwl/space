"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_dops_dops_ts"],{

/***/ "./src/js/plugins/dops/dops.ts":
/*!*************************************!*\
  !*** ./src/js/plugins/dops/dops.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dopsFormSubmit": () => (/* binding */ dopsFormSubmit),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "adviceReady": () => (/* binding */ adviceReady),
/* harmony export */   "loadingScreenFadeIn": () => (/* binding */ loadingScreenFadeIn),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_img_icons_gps_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/gps.png */ "./src/img/icons/gps.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let isDOPMenuOpen = false;
const dopsFormSubmit = () => {
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
    isDOPMenuOpen = true;
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeIn(1000, function () {
        loadingScreenFadeIn();
    });
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="dops-menu" class="side-menu-parent start-hidden text-select">
          <div id="dops-content" class="side-menu">
            <form id="dops-form">
              <div class="switch row">
                <h5 class="center-align">DOP Table</h5>
                <div class="input-field col s3">
                  <input value="41" id="dops-lat" type="text" class="tooltipped" data-position="right"
                    data-delay="50" data-tooltip="Latitude in Degrees">
                  <label for="dops-lat" class="active">Latitude</label>
                </div>
                <div class="input-field col s3">
                  <input value="-71" id="dops-lon" type="text" class="tooltipped" data-position="right"
                    data-delay="50" data-tooltip="Longitude in Degrees">
                  <label for="dops-lon" class="active">Longitude</label>
                </div>
                <div class="input-field col s3">
                  <input value="-71" id="dops-alt" type="text" class="tooltipped" data-position="right"
                    data-delay="50" data-tooltip="Altitude in KM">
                  <label for="dops-lon" class="active">Altitude</label>
                </div>
                <div class="input-field col s3">
                  <input value="15" id="dops-el" type="text" class="tooltipped" data-position="right"
                    data-delay="50" data-tooltip="Minimum Elevation for GPS Lock">
                  <label for="dops-el" class="active">Mask</label>
                </div>
              </div>
              <div class="row center">
                <button id="dops-submit" class="btn btn-ui waves-effect waves-light" type="submit"
                  name="action">Update DOP Data &#9658;
                </button>
              </div>
            </form>
            <div class="row">
              <table id="dops" class="center-align striped-light centered"></table>
            </div>
          </div>
        </div>
      `);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#dops-form').on('submit', function (e) {
        dopsFormSubmit();
        e.preventDefault();
    });
    // Allow resizing of the side menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#dops-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-dops" class="bmenu-item">
          <img alt="gps" src="" delayedsrc="${_app_img_icons_gps_png__WEBPACK_IMPORTED_MODULE_0__}" />
          <span class="bmenu-title">DOPs</span>
          <div class="status-icon"></div>
        </div>      
      `);
};
const adviceReady = () => {
    const aM = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.adviceManager;
    aM.adviceCount.socrates = 0;
    aM.adviceList.socrates = () => {
        // Only Do this Twice
        if (aM.adviceCount.socrates >= 3)
            return;
        aM.adviceCount.socrates += 1;
        aM.showAdvice('SOCRATES Near Conjunction List', 'Did you know that objects frequently come close to colliding? Using data from Center for Space Standars and Innovation you can find upcomming possible collisions.', jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-satellite-collision'), 'bottom');
    };
    aM.adviceArray.push(aM.adviceList.socrates);
};
const loadingScreenFadeIn = () => {
    const lat = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#dops-lat').val());
    const lon = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#dops-lon').val());
    const alt = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#dops-alt').val());
    const el = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#dops-el').val());
    settingsManager.gpsElevationMask = el;
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satellite.updateDopsTable(lat, lon, alt);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-dops').addClass('bmenu-item-selected');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeOut('slow');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#dops-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-dops') {
        if (isDOPMenuOpen) {
            isDOPMenuOpen = false;
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
            return;
        }
        else {
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
            isDOPMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeIn(1000, loadingScreenFadeIn);
            return;
        }
    }
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#dops-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-dops').removeClass('bmenu-item-selected');
    isDOPMenuOpen = false;
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'dops',
        cb: uiManagerInit,
    });
    // Add Advice Info
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'adviceReady',
        cbName: 'dops',
        cb: adviceReady,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'dops',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'dops',
        cb: hideSideMenus,
    });
};


/***/ }),

/***/ "./src/img/icons/gps.png":
/*!*******************************!*\
  !*** ./src/img/icons/gps.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc4c1ff9ae7602c23023.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_dops_dops_ts.c0c4bce92dede497e53a.js.map