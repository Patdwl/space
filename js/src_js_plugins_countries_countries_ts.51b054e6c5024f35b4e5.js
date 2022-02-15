"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_countries_countries_ts"],{

/***/ "./src/js/plugins/countries/countries.ts":
/*!***********************************************!*\
  !*** ./src/js/plugins/countries/countries.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "countryMenuClick": () => (/* binding */ countryMenuClick),
/* harmony export */   "groupSelected": () => (/* binding */ groupSelected)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


let isCountriesMenuOpen = false;
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#countries-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-countries').removeClass('bmenu-item-selected');
    isCountriesMenuOpen = false;
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'countries',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'countries',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'countries',
        cb: hideSideMenus,
    });
};
const bottomMenuClick = (iconName) => {
    const { uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (iconName === 'menu-countries') {
        if (isCountriesMenuOpen) {
            uiManager.hideSideMenus();
            isCountriesMenuOpen = false;
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                uiManager.searchToggle(false);
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#countries-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            isCountriesMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-countries').addClass('bmenu-item-selected');
            return;
        }
    }
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="countries-menu" class="side-menu-parent start-hidden text-select">
          <div id="country-menu" class="side-menu">
            <ul>
              <h5 class="center-align">Countries</h5>
              <li class="divider"></li>
              <li class="menu-selectable country-option" data-group="Canada">Canadian</li>
              <li class="menu-selectable country-option" data-group="China">Chinese</li>
              <li class="menu-selectable country-option" data-group="France">French</li>
              <li class="menu-selectable country-option" data-group="India">Indian</li>
              <li class="menu-selectable country-option" data-group="Israel">Israeli</li>
              <li class="menu-selectable country-option" data-group="Japan">Japanese</li>
              <li class="menu-selectable country-option" data-group="Russia">Russian / USSR</li>
              <li class="menu-selectable country-option" data-group="UnitedKingdom">British</li>
              <li class="menu-selectable country-option" data-group="UnitedStates">American</li>
            </ul>
          </div>
        </div>
      `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="menu-countries" class="bmenu-item">
          <img
            alt="flag"
            src=""
            delayedsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABc0lEQVR4nO3aT26CQBzF8QdOTO/gGdy1x+k52k1ddKW9Rf8cx523IQS6M0ZDCpMZH0O/n53kZ0J8GeQxSAAAAAAAAAAAAAAAIItqzND22Pe5T2SJTo/Vn79vfY8TwTACMIsJoFGvl1BrE2ptJL1KaozzRQsR39mdnqqPi8+H7bGXpL1pvmiTV0ArfV0f6zp9uuZLN3kFPNS3d05hrVXXeuYvjbnrmJvpK6DT8/Wxrr09dq/50sX0gEbSLtT6ls4/2Luk9cDXc8+flbgCFlXESgyAHmBGAGYpL0GNer2FlX6kkdf6vPN2Yy6JMUVsCAUtQrJLEAUtTrIAhgqUa74U6VYABS1K2j/hmRY0lzF/whQxM3qAGQGYsSNmxo6YGTtiZovaEZvb3VqW94IoXGktakdsbv5dEZsbXk0sAAEAAADAgCKWEUWsAARgRgBmBGBGAAAAADDgWVBGPAsqAAGYEYAZAZgRAAAAAAAAAAAAAAAAWKZfZIMQFE8x07MAAAAASUVORK5CYII="/> <!-- // NO-PIG -->
          <span class="bmenu-title">Countries</span>
          <div class="status-icon"></div>
        </div>
      `);
    // NOTE: Must use function not arrow function to access 'this'
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#country-menu>ul>li').on('click', function () {
        countryMenuClick(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('group'));
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#countries-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
};
const countryMenuClick = (groupName) => {
    const { groupsManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    switch (groupName) {
        case 'Canada':
            if (!groupsManager.Canada)
                groupsManager.Canada = groupsManager.createGroup('countryRegex', /CA/u);
            break;
        case 'China':
            if (!groupsManager.China)
                groupsManager.China = groupsManager.createGroup('countryRegex', /PRC/u);
            break;
        case 'France':
            if (!groupsManager.France)
                groupsManager.France = groupsManager.createGroup('countryRegex', /FR/u);
            break;
        case 'India':
            if (!groupsManager.India)
                groupsManager.India = groupsManager.createGroup('countryRegex', /IND/u);
            break;
        case 'Israel':
            if (!groupsManager.Israel)
                groupsManager.Israel = groupsManager.createGroup('countryRegex', /ISRA/u);
            break;
        case 'Japan':
            if (!groupsManager.Japan)
                groupsManager.Japan = groupsManager.createGroup('countryRegex', /JPN/u);
            break;
        case 'Russia':
            if (!groupsManager.Russia)
                groupsManager.Russia = groupsManager.createGroup('countryRegex', /CIS/u);
            break;
        case 'UnitedKingdom':
            if (!groupsManager.UnitedKingdom)
                groupsManager.UnitedKingdom = groupsManager.createGroup('countryRegex', /UK/u);
            break;
        case 'UnitedStates':
            if (!groupsManager.UnitedStates)
                groupsManager.UnitedStates = groupsManager.createGroup('countryRegex', /US/u);
            break;
        default:
            throw new Error('Unknown country group');
    }
    groupSelected(groupName);
};
const groupSelected = (groupName) => {
    const { groupsManager, satSet, searchBox, objectManager, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    const searchDOM = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#search');
    if (typeof groupName == 'undefined')
        return;
    if (typeof groupsManager[groupName] == 'undefined')
        return;
    groupsManager.selectGroup(groupsManager[groupName]);
    // Populate searchDOM with a search string separated by commas - minus the last one
    searchDOM.val(groupsManager[groupName].sats.reduce((acc, obj) => `${acc}${satSet.getSat(obj.satId).sccNum},`, '').slice(0, -1));
    searchBox.fillResultBox(groupsManager[groupName].sats, satSet);
    objectManager.setSelectedSat(-1); // Clear selected sat
    // Close Menus
    if (settingsManager.isMobileModeEnabled)
        uiManager.searchToggle(true);
    uiManager.hideSideMenus();
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_countries_countries_ts.51b054e6c5024f35b4e5.js.map