"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_colorsMenu_colorsMenu_ts"],{

/***/ "./src/js/plugins/colorsMenu/colorsMenu.ts":
/*!*************************************************!*\
  !*** ./src/js/plugins/colorsMenu/colorsMenu.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "rightBtnMenuAdd": () => (/* binding */ rightBtnMenuAdd),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "colorsMenuClick": () => (/* binding */ colorsMenuClick)
/* harmony export */ });
/* harmony import */ var _app_img_icons_colors_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/colors.png */ "./src/img/icons/colors.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let isColorSchemeMenuOpen = false;
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#color-scheme-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-color-scheme').removeClass('bmenu-item-selected');
    isColorSchemeMenuOpen = false;
};
const rightBtnMenuAdd = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#right-btn-menu-ul').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `   
        <li class="rmb-menu-item" id="colors-rmb"><a href="#">Colors &#x27A4;</a></li>
      `);
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'colorsMenu',
        cb: uiManagerInit,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'rightBtnMenuAdd',
        cbName: 'photo',
        cb: rightBtnMenuAdd,
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#rmb-wrapper').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
    <div id="colors-rmb-menu" class="right-btn-menu">
      <ul class='dropdown-contents'>
        <li id="colors-default-rmb"><a href="#">Object Types</a></li>
        <li id="colors-sunlight-rmb"><a href="#">Sunlight Status</a></li>
        <li id="colors-country-rmb"><a href="#">Country</a></li>
        <li id="colors-velocity-rmb"><a href="#">Velocity</a></li>
        <li id="colors-ageOfElset-rmb"><a href="#">Age of Elset</a></li>
      </ul>
    </div>
  `);
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'colorsMenu',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'colorsMenu',
        cb: hideSideMenus,
    });
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="color-scheme-menu" class="side-menu-parent start-hidden text-select">
          <div id="colors-menu" class="side-menu">
            <ul>
              <h5 class="center-align">Color Schemes</h5>
              <li class="divider"></li>
              <li class="menu-selectable" data-color="default">Object Type</li>
              <li class="menu-selectable" data-color="sunlight">Sunlight</li>
              <li class="menu-selectable" data-color="velocity">Velocity</li>
              <li class="menu-selectable" data-color="rcs">Radar Cross Section</li>
              <li class="menu-selectable" data-color="smallsats">Small Satellites</li>
              <li class="menu-selectable" data-color="countries">Countries</li>
              <li class="menu-selectable" data-color="near-earth">Near Earth</li>
              <li class="menu-selectable" data-color="deep-space">Deep Space</li>
              <li class="menu-selectable" data-color="elset-age">Elset Age</li>
              <li class="menu-selectable" data-color="lost-objects">Lost Objects</li>
            </ul>
          </div>
        </div>
      `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-color-scheme" class="bmenu-item">
          <img
            alt="colors"
            src=""
            delayedsrc=${_app_img_icons_colors_png__WEBPACK_IMPORTED_MODULE_0__}/>
          <span class="bmenu-title">Color Schemes</span>
          <div class="status-icon"></div>
        </div>
      `);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#colors-menu>ul>li').on('click', function () {
        const colorName = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('color');
        colorsMenuClick(colorName);
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#color-scheme-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
};
const bottomMenuClick = (iconName) => {
    const { uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (iconName === 'menu-color-scheme') {
        if (isColorSchemeMenuOpen) {
            uiManager.hideSideMenus();
            isColorSchemeMenuOpen = false;
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                uiManager.searchToggle(false);
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#color-scheme-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            isColorSchemeMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-color-scheme').addClass('bmenu-item-selected');
            return;
        }
    }
};
const colorsMenuClick = (colorName) => {
    const { colorSchemeManager, satSet, objectManager, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    objectManager.setSelectedSat(-1); // clear selected sat
    if (colorName !== 'sunlight') {
        satSet.satCruncher.postMessage({
            isSunlightView: false,
        });
    }
    switch (colorName) {
        case 'default':
            uiManager.legendMenuChange('default');
            satSet.setColorScheme(colorSchemeManager.default, true);
            uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
            break;
        case 'velocity':
            uiManager.legendMenuChange('velocity');
            satSet.setColorScheme(colorSchemeManager.velocity);
            uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
            break;
        case 'sunlight':
            uiManager.legendMenuChange('sunlight');
            satSet.setColorScheme(colorSchemeManager.sunlight, true);
            uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
            settingsManager.isForceColorScheme = true;
            satSet.satCruncher.postMessage({
                isSunlightView: true,
            });
            break;
        case 'near-earth':
            uiManager.legendMenuChange('near');
            satSet.setColorScheme(colorSchemeManager.leo);
            uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
            break;
        case 'deep-space':
            uiManager.legendMenuChange('deep');
            satSet.setColorScheme(colorSchemeManager.geo);
            uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
            break;
        case 'elset-age':
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeIn(1000, function () {
                uiManager.legendMenuChange('ageOfElset');
                satSet.setColorScheme(colorSchemeManager.ageOfElset);
                uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeOut('slow');
            });
            break;
        case 'lost-objects':
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search').val('');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeIn(1000, function () {
                settingsManager.lostSatStr = '';
                satSet.setColorScheme(colorSchemeManager.lostobjects);
                document.getElementById('search').value = settingsManager.lostSatStr;
                uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                uiManager.doSearch(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search').val());
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeOut('slow');
            });
            break;
        case 'rcs':
            uiManager.legendMenuChange('rcs');
            satSet.setColorScheme(colorSchemeManager.rcs);
            uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
            break;
        case 'smallsats':
            uiManager.legendMenuChange('small');
            satSet.setColorScheme(colorSchemeManager.smallsats);
            uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
            break;
        case 'countries':
            uiManager.legendMenuChange('countries');
            satSet.setColorScheme(colorSchemeManager.countries);
            uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
            break;
    }
    // Close Open Menus
    if (settingsManager.isMobileModeEnabled)
        uiManager.searchToggle(false);
    uiManager.hideSideMenus();
};


/***/ }),

/***/ "./src/img/icons/colors.png":
/*!**********************************!*\
  !*** ./src/img/icons/colors.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "feb5fa934ee7cdb45512.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_colorsMenu_colorsMenu_ts.e63271aa53adb69a0033.js.map