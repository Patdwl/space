"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_collisions_collisions_ts"],{

/***/ "./src/js/plugins/collisions/collisions.ts":
/*!*************************************************!*\
  !*** ./src/js/plugins/collisions/collisions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "adviceReady": () => (/* binding */ adviceReady),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "onCruncherMessage": () => (/* binding */ onCruncherMessage),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "MMMtoInt": () => (/* binding */ MMMtoInt),
/* harmony export */   "findFutureDate": () => (/* binding */ findFutureDate),
/* harmony export */   "socrates": () => (/* binding */ socrates),
/* harmony export */   "processSocratesHtm": () => (/* binding */ processSocratesHtm)
/* harmony export */ });
/* harmony import */ var _app_img_icons_socrates_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/socrates.png */ "./src/img/icons/socrates.png");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/helpers */ "./src/js/lib/helpers.ts");




let isSocratesMenuOpen = false;
let socratesOnSatCruncher = null;
_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.socrates = {
    socratesObjOne: [],
    socratesObjTwo: [], // Array for tr containing CATNR2
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#left-menus').append(_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html `
        <div id="socrates-menu" class="side-menu-parent start-hidden text-select">
          <div id="socrates-content" class="side-menu">
            <div class="row">
              <h5 class="center-align">Possible collisions</h5>
              <table id="socrates-table" class="center-align"></table>
            </div>
          </div>
        </div>
      `);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#socrates-menu').on('click', '.socrates-object', (evt) => {
        // Might be better code for this.
        const hiddenRow = evt.currentTarget.attributes.hiddenrow.value;
        if (hiddenRow !== null) {
            socrates(hiddenRow);
        }
    });
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html `
        <div id="menu-satellite-collision" class="bmenu-item">
          <img alt="socrates" src="" delayedsrc="${_app_img_icons_socrates_png__WEBPACK_IMPORTED_MODULE_0__}" />
          <span class="bmenu-title">Collisions</span>
          <div class="status-icon"></div>
        </div>
      `);
    // Allow resizing of the side menu
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#socrates-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 290,
    });
};
const adviceReady = () => {
    const aM = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.adviceManager;
    aM.adviceCount.socrates = 0;
    aM.adviceList.socrates = () => {
        // Only Do this Twice
        if (aM.adviceCount.socrates >= 3)
            return;
        aM.adviceCount.socrates += 1;
        aM.showAdvice('SOCRATES Near Conjunction List', 'Did you know that objects frequently come close to colliding? Using data from Center for Space Standards and Innovation you can find upcoming possible collisions.', jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-satellite-collision'), 'bottom');
    };
    aM.adviceArray.push(aM.adviceList.socrates);
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-satellite-collision') {
        if (isSocratesMenuOpen) {
            isSocratesMenuOpen = false;
            _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.hideSideMenus();
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.searchToggle(false);
            _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#socrates-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            isSocratesMenuOpen = true;
            socrates(-1);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-satellite-collision').addClass('bmenu-item-selected');
            return;
        }
    }
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#socrates-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-satellite-collision').removeClass('bmenu-item-selected');
    isSocratesMenuOpen = false;
};
const onCruncherMessage = () => {
    if (socratesOnSatCruncher !== null) {
        _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.setSelectedSat(socratesOnSatCruncher);
        socratesOnSatCruncher = null;
    }
};
const init = () => {
    // Add HTML
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'collisions',
        cb: uiManagerInit,
    });
    // Add Advice Info
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'adviceReady',
        cbName: 'Collisions',
        cb: adviceReady,
    });
    // Add JavaScript
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'collisions',
        cb: bottomMenuClick,
    });
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'collisions',
        cb: hideSideMenus,
    });
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'onCruncherMessage',
        cbName: 'collisions',
        cb: onCruncherMessage,
    });
};
const MMMtoInt = (month) => {
    switch (month) {
        case 'Jan':
            return 0;
        case 'Feb':
            return 1;
        case 'Mar':
            return 2;
        case 'Apr':
            return 3;
        case 'May':
            return 4;
        case 'Jun':
            return 5;
        case 'Jul':
            return 6;
        case 'Aug':
            return 7;
        case 'Sep':
            return 8;
        case 'Oct':
            return 9;
        case 'Nov':
            return 10;
        case 'Dec':
            return 11;
        default:
            throw new Error('Invalid Month');
    }
};
const findFutureDate = (socratesObjTwo, row) => {
    const socratesDate = socratesObjTwo[row][4].split(' '); // Date/time is on the second line 5th column
    const socratesTime = socratesDate[3].split(':'); // Split time from date for easier management
    const sYear = parseInt(socratesDate[0]); // UTC Year
    const sMon = MMMtoInt(socratesDate[1]); // UTC Month in MMM prior to converting
    const sDay = parseInt(socratesDate[2]); // UTC Day
    const sHour = parseInt(socratesTime[0]); // UTC Hour
    const sMin = parseInt(socratesTime[1]); // UTC Min
    const sSec = parseInt(socratesTime[2]); // UTC Sec - This is a decimal, but when we convert to int we drop those
    const selectedDate = new Date(sYear, sMon, sDay, sHour, sMin, sSec); // New Date object of the future collision
    // Date object defaults to local time.
    selectedDate.setUTCDate(sDay); // Move to UTC day.
    selectedDate.setUTCHours(sHour); // Move to UTC Hour
    const today = new Date();
    // Find the offset from today 60 seconds before possible collision
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.timeManager.changeStaticOffset(selectedDate.getTime() - today.getTime() - 1000 * 30);
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.mainCamera.isCamSnapMode = false;
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.timeManager.calculateSimulationTime();
}; // Allows passing -1 argument to socrates function to skip these steps
const socrates = (row) => {
    if (isNaN(row))
        throw new Error('SOCRATES: Row is not a number');
    // SOCRATES Variables
    const { socratesObjOne, socratesObjTwo } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.socrates;
    /* SOCRATES.htm is a 20 row .pl script pulled from celestrak.com/cgi-bin/searchSOCRATES.pl
      If it ever becomes unavailable a similar, but less accurate (maybe?) cron job could be
      created using satCruncer.
  
      The variable row determines which set of objects on SOCRATES.htm we are using. First
      row is 0 and last one is 19. */
    if (row === -1 && socratesObjOne.length === 0 && socratesObjTwo.length === 0) {
        // Only generate the table if receiving the -1 argument for the first time
        jquery__WEBPACK_IMPORTED_MODULE_1___default().get('/SOCRATES.htm', (socratesHTM) => processSocratesHtm(socratesHTM));
    }
    if (row !== -1) {
        // If an object was selected from the menu
        findFutureDate(socratesObjTwo, row); // Jump to the date/time of the collision
        _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.doSearch(socratesObjOne[row][1] + ',' + socratesObjTwo[row][0]); // Actually perform the search of the two objects
        socratesOnSatCruncher = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satSet.getIdFromObjNum(socratesObjOne[row][1]);
    } // If a row was selected
};
const processSocratesHtm = (socratesHTM) => {
    const { socratesObjOne, socratesObjTwo } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.socrates;
    // Load SOCRATES.htm so we can use it instead of index.html
    const tableRowOne = jquery__WEBPACK_IMPORTED_MODULE_1___default()("[name='CATNR1']", socratesHTM).closest('tr'); // Find the row(s) containing the hidden input named CATNR1
    const tableRowTwo = jquery__WEBPACK_IMPORTED_MODULE_1___default()("[name='CATNR2']", socratesHTM).closest('tr'); // Find the row(s) containing the hidden input named CATNR2
    // eslint-disable-next-line no-unused-vars
    tableRowOne.each(function (_rowIndex, _r) {
        const cols = [];
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this)
            .find('td')
            .each(function (_colIndex, c) {
            cols.push(c.textContent);
        });
        socratesObjOne.push(cols);
    });
    // eslint-disable-next-line no-unused-vars
    tableRowTwo.each(function (_rowIndex, _r) {
        const cols = [];
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this)
            .find('td')
            .each(function (_colIndex, c) {
            cols.push(c.textContent);
        });
        socratesObjTwo.push(cols);
    });
    // SOCRATES Menu
    const tbl = document.getElementById('socrates-table'); // Identify the table to update
    tbl.innerHTML = ''; // Clear the table from old object data
    let tr = tbl.insertRow();
    let tdT = tr.insertCell();
    tdT.appendChild(document.createTextNode('Time'));
    tdT.setAttribute('style', 'text-decoration: underline');
    let tdS1 = tr.insertCell();
    tdS1.appendChild(document.createTextNode('#1'));
    tdS1.setAttribute('style', 'text-decoration: underline');
    let tdS2 = tr.insertCell();
    tdS2.appendChild(document.createTextNode('#2'));
    tdS2.setAttribute('style', 'text-decoration: underline');
    for (let i = 0; i < 20; i++) {
        if (typeof socratesObjTwo[i] == 'undefined')
            break;
        // 20 rows
        if (typeof socratesObjTwo[i][4] == 'undefined')
            continue;
        tr = tbl.insertRow();
        tr.setAttribute('class', 'socrates-object link');
        tr.setAttribute('hiddenrow', i.toString());
        tdT = tr.insertCell();
        const socratesDate = socratesObjTwo[i][4].split(' '); // Date/time is on the second line 5th column
        const socratesTime = socratesDate[3].split(':'); // Split time from date for easier management
        const socratesTimeS = socratesTime[2].split('.'); // Split time from date for easier management
        tdT.appendChild(document.createTextNode(socratesDate[2] +
            ' ' +
            socratesDate[1] +
            ' ' +
            socratesDate[0] +
            ' - ' +
            _lib_helpers__WEBPACK_IMPORTED_MODULE_3__.stringPad.pad0(socratesTime[0], 2) +
            ':' +
            _lib_helpers__WEBPACK_IMPORTED_MODULE_3__.stringPad.pad0(socratesTime[1], 2) +
            ':' +
            _lib_helpers__WEBPACK_IMPORTED_MODULE_3__.stringPad.pad0(socratesTimeS[0], 2) +
            'Z'));
        tdS1 = tr.insertCell();
        tdS1.appendChild(document.createTextNode(socratesObjOne[i][1]));
        tdS2 = tr.insertCell();
        tdS2.appendChild(document.createTextNode(socratesObjTwo[i][0]));
    }
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.socrates = { socratesObjOne, socratesObjTwo };
};


/***/ }),

/***/ "./src/img/icons/socrates.png":
/*!************************************!*\
  !*** ./src/img/icons/socrates.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7dba1e8b60fda834ffb.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_collisions_collisions_ts.d0d59b5262f42a97431f.js.map