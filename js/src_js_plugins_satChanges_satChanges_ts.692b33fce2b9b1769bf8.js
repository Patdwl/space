"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_satChanges_satChanges_ts"],{

/***/ "./src/js/plugins/satChanges/satChanges.ts":
/*!*************************************************!*\
  !*** ./src/js/plugins/satChanges/satChanges.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "satChng": () => (/* binding */ satChng),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "getSatChngJson": () => (/* binding */ getSatChngJson)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_timeManager_transforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/timeManager/transforms */ "./src/js/timeManager/transforms.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_img_icons_sats_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/img/icons/sats.png */ "./src/img/icons/sats.png");




let issatChngMenuOpen = false;
_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.satChange = {
    satChngTable: null,
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'satChanges',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'satChanges',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'satChanges',
        cb: hideSideMenus,
    });
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="satChng-menu" class="side-menu-parent start-hidden text-select">
          <div id="satChng-content" class="side-menu">
            <div class="row">
              <h5 class="center-align">Interesting Movements</h5>
              <table id="satChng-table" class="center-align"></table>
            </div>
          </div>
        </div>
      `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="menu-satChng" class="bmenu-item">
          <img alt="satchng" src="" delayedsrc=${_app_img_icons_sats_png__WEBPACK_IMPORTED_MODULE_3__}/>
          <span class="bmenu-title">Satellite Changes</span>
          <div class="status-icon"></div>
        </div>
      `);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#satChng-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#satChng-menu').on('click', '.satChng-object', function (evt) {
        // Might be better code for this.
        const hiddenRow = evt.currentTarget.attributes.hiddenrow.value;
        if (hiddenRow !== null) {
            satChng(parseInt(hiddenRow));
        }
    });
};
const satChng = (row) => {
    const { satChange, uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    let satChngTable = satChange.satChngTable;
    if (typeof row !== 'number')
        throw new Error('Row must be a number');
    if (row !== -1 && typeof satChngTable[row] === 'undefined')
        throw new Error('Row does not exist');
    if (row === -1 && (satChngTable === null || satChngTable === void 0 ? void 0 : satChngTable.length) === 0) {
        // Only generate the table if receiving the -1 argument for the first time
        jquery__WEBPACK_IMPORTED_MODULE_2___default().get('./analysis/satchng.json?v=' + settingsManager.versionNumber).done((resp) => {
            ({ satChngTable } = getSatChngJson(resp));
            satChange.satChngTable = satChngTable;
        });
    }
    if (row !== -1) {
        // If an object was selected from the menu
        if (!satChngTable[row].SCC)
            return;
        uiManager.doSearch(satChngTable[row].SCC.toString()); // Actually perform the search of the two objects
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#anal-sat').val(satChngTable[row].SCC.toString());
    } // If a row was selected
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#satChng-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-satChng').removeClass('bmenu-item-selected');
    issatChngMenuOpen = false;
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-satChng') {
        const { uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
        if (issatChngMenuOpen) {
            issatChngMenuOpen = false;
            uiManager.hideSideMenus();
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                uiManager.searchToggle(false);
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#satChng-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            issatChngMenuOpen = true;
            satChng(-1);
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-satChng').addClass('bmenu-item-selected');
            return;
        }
    }
};
const getSatChngJson = (resp) => {
    resp = [...new Set(resp)];
    const { satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    for (let i = 0; i < resp.length; i++) {
        const prefix = resp[i].year > 50 ? '19' : '20';
        const year = parseInt(prefix + resp[i].year.toString());
        let date = (0,_app_js_timeManager_transforms__WEBPACK_IMPORTED_MODULE_1__.dateFromJday)(year, resp[i].day);
        date = new Date(date.getTime() + (resp[i].day % 1) * 1440 * 60000);
        resp[i].date = date;
    }
    const satChngTable = resp;
    // satChng Menu
    const tbl = document.getElementById('satChng-table'); // Identify the table to update
    tbl.innerHTML = ''; // Clear the table from old object data
    let tr = tbl.insertRow();
    let tdT = tr.insertCell();
    tdT.appendChild(document.createTextNode('Time'));
    tdT.setAttribute('style', 'text-decoration: underline');
    let tdSat = tr.insertCell();
    tdSat.appendChild(document.createTextNode('Sat'));
    tdSat.setAttribute('style', 'text-decoration: underline');
    let tdInc = tr.insertCell();
    tdInc.appendChild(document.createTextNode('Inc'));
    tdInc.setAttribute('style', 'text-decoration: underline');
    let tdPer = tr.insertCell();
    tdPer.appendChild(document.createTextNode('Per'));
    tdPer.setAttribute('style', 'text-decoration: underline');
    // 20 rows max
    for (let i = 0; i < Math.min(satChngTable.length, 20); i++) {
        const sat = satSet.getSat(satSet.getIdFromObjNum(satChngTable[i].SCC));
        // Skip Decays
        if (sat === null)
            continue;
        tr = tbl.insertRow();
        tr.setAttribute('class', 'satChng-object link');
        tr.setAttribute('hiddenrow', i.toString());
        tdT = tr.insertCell();
        const dateStr = satChngTable[i].date.toJSON();
        let timeTextStr = '';
        for (let iText = 0; iText < 20; iText++) {
            if (iText < 10)
                timeTextStr += dateStr[iText];
            if (iText === 10)
                timeTextStr += ' ';
            if (iText > 11)
                timeTextStr += dateStr[iText - 1];
        }
        tdT.appendChild(document.createTextNode(timeTextStr));
        tdSat = tr.insertCell();
        tdSat.appendChild(document.createTextNode(satChngTable[i].SCC.toString()));
        tdInc = tr.insertCell();
        tdInc.appendChild(document.createTextNode(satChngTable[i].inc.toFixed(2)));
        tdPer = tr.insertCell();
        const deltaMeanMo = satChngTable[i].meanmo;
        const origPer = 1440 / (sat.meanMotion + deltaMeanMo);
        const perDelta = 1440 / sat.meanMotion - origPer;
        tdPer.appendChild(document.createTextNode(perDelta.toFixed(2)));
    }
    return { resp, satChngTable };
};


/***/ }),

/***/ "./src/img/icons/sats.png":
/*!********************************!*\
  !*** ./src/img/icons/sats.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f67aa543b38a3841eece.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_satChanges_satChanges_ts.692b33fce2b9b1769bf8.js.map