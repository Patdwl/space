"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_findSat_findSat_ts"],{

/***/ "./src/js/plugins/findSat/findSat.ts":
/*!*******************************************!*\
  !*** ./src/js/plugins/findSat/findSat.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkInc": () => (/* binding */ checkInc),
/* harmony export */   "checkRaan": () => (/* binding */ checkRaan),
/* harmony export */   "checkArgPe": () => (/* binding */ checkArgPe),
/* harmony export */   "checkPeriod": () => (/* binding */ checkPeriod),
/* harmony export */   "checkRcs": () => (/* binding */ checkRcs),
/* harmony export */   "searchSats": () => (/* binding */ searchSats),
/* harmony export */   "checkInview": () => (/* binding */ checkInview),
/* harmony export */   "checkObjtype": () => (/* binding */ checkObjtype),
/* harmony export */   "checkAz": () => (/* binding */ checkAz),
/* harmony export */   "checkEl": () => (/* binding */ checkEl),
/* harmony export */   "checkRange": () => (/* binding */ checkRange),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "uiManagerFinal": () => (/* binding */ uiManagerFinal),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "findByLooksSubmit": () => (/* binding */ findByLooksSubmit),
/* harmony export */   "limitPossibles": () => (/* binding */ limitPossibles)
/* harmony export */ });
/* harmony import */ var _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/lib/helpers */ "./src/js/lib/helpers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/constants */ "./src/js/lib/constants.ts");
/* harmony import */ var _app_img_icons_find2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/img/icons/find2.png */ "./src/img/icons/find2.png");





let isFindByLooksMenuOpen = false;
const checkInc = (possibles, min, max) => possibles.filter((possible) => possible.inclination * _lib_constants__WEBPACK_IMPORTED_MODULE_3__.RAD2DEG < max && possible.inclination * _lib_constants__WEBPACK_IMPORTED_MODULE_3__.RAD2DEG > min);
const checkRaan = (possibles, min, max) => possibles.filter((possible) => possible.raan * _lib_constants__WEBPACK_IMPORTED_MODULE_3__.RAD2DEG < max && possible.raan * _lib_constants__WEBPACK_IMPORTED_MODULE_3__.RAD2DEG > min);
const checkArgPe = (possibles, min, max) => possibles.filter((possible) => possible.argPe * _lib_constants__WEBPACK_IMPORTED_MODULE_3__.RAD2DEG < max && possible.argPe * _lib_constants__WEBPACK_IMPORTED_MODULE_3__.RAD2DEG > min);
const checkPeriod = (possibles, minPeriod, maxPeriod) => possibles.filter((possible) => possible.period > minPeriod && possible.period < maxPeriod);
const checkRcs = (possibles, minRcs, maxRcs) => possibles.filter((possible) => parseFloat(possible.R) > minRcs && parseFloat(possible.R) < maxRcs);
const searchSats = (searchParams) => {
    let { az, el, rng, inc, azMarg, elMarg, rngMarg, incMarg, period, periodMarg, rcs, rcsMarg, objType, raan, raanMarg, argPe, argPeMarg, bus, shape, payload } = searchParams;
    const isValidAz = !isNaN(az) && isFinite(az);
    const isValidEl = !isNaN(el) && isFinite(el);
    const isValidRange = !isNaN(rng) && isFinite(rng);
    const isValidInc = !isNaN(inc) && isFinite(inc);
    const isValidRaan = !isNaN(raan) && isFinite(raan);
    const isValidArgPe = !isNaN(argPe) && isFinite(argPe);
    const isValidPeriod = !isNaN(period) && isFinite(period);
    const isValidRcs = !isNaN(rcs) && isFinite(rcs);
    const isSpecificBus = bus !== 'All';
    const isSpecificShape = shape !== 'All';
    const isSpecificPayload = payload !== 'All';
    azMarg = !isNaN(azMarg) && isFinite(azMarg) ? azMarg : 5;
    elMarg = !isNaN(elMarg) && isFinite(elMarg) ? elMarg : 5;
    rngMarg = !isNaN(rngMarg) && isFinite(rngMarg) ? rngMarg : 200;
    incMarg = !isNaN(incMarg) && isFinite(incMarg) ? incMarg : 1;
    periodMarg = !isNaN(periodMarg) && isFinite(periodMarg) ? periodMarg : 0.5;
    rcsMarg = !isNaN(rcsMarg) && isFinite(rcsMarg) ? rcsMarg : rcs / 10;
    raanMarg = !isNaN(raanMarg) && isFinite(raanMarg) ? raanMarg : 1;
    argPeMarg = !isNaN(argPeMarg) && isFinite(argPeMarg) ? argPeMarg : 1;
    if (!isValidEl &&
        !isValidRange &&
        !isValidAz &&
        !isValidInc &&
        !isValidPeriod &&
        !isValidRcs &&
        !isValidArgPe &&
        !isValidRaan &&
        !isSpecificBus &&
        !isSpecificShape &&
        !isSpecificPayload) {
        throw new Error('No Search Criteria Entered');
    }
    const { satSet, satellite, uiManager } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs;
    const satData = satSet.satData;
    let res = satData
        .filter((sat) => !sat.static && !sat.missile && sat.active)
        .map((sat) => {
        const tearr = satellite.getTEARR(sat);
        return Object.assign(Object.assign({}, sat), { az: tearr.az, el: tearr.el, rng: tearr.rng, inView: tearr.inView });
    });
    res = !isValidInc && !isValidPeriod && (isValidAz || isValidEl || isValidRange) ? checkInview(res) : res;
    res = objType !== 0 ? checkObjtype(res, objType) : res;
    if (isValidAz)
        res = checkAz(res, az - azMarg, az + azMarg);
    if (isValidEl)
        res = checkEl(res, el - elMarg, el + elMarg);
    if (isValidRange)
        res = checkRange(res, rng - rngMarg, rng + rngMarg);
    if (isValidInc)
        res = checkInc(res, inc - incMarg, inc + incMarg);
    if (isValidRaan)
        res = checkRaan(res, raan - raanMarg, raan + raanMarg);
    if (isValidArgPe)
        res = checkArgPe(res, argPe - argPeMarg, argPe + argPeMarg);
    if (isValidPeriod)
        res = checkPeriod(res, period - periodMarg, period + periodMarg);
    if (isValidRcs)
        res = checkRcs(res, rcs - rcsMarg, rcs + rcsMarg);
    if (bus !== 'All')
        res = res.filter((sat) => sat.bus === bus);
    if (shape !== 'All')
        res = res.filter((sat) => sat.shape === shape);
    if (payload !== 'All') {
        res = res.filter((sat) => {
            var _a, _b, _c;
            return ((_c = (_b = (_a = sat.payload) === null || _a === void 0 ? void 0 : _a.split(' ')[0]) === null || _b === void 0 ? void 0 : _b.split('-')[0]) === null || _c === void 0 ? void 0 : _c.replace(/[^a-zA-Z]/gu, '')) === payload;
        });
    }
    res = limitPossibles(res, settingsManager.searchLimit);
    let result = '';
    res.forEach((sat, i) => {
        result += i < res.length - 1 ? `${sat.sccNum},` : `${sat.sccNum}`;
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#search').val(result);
    uiManager.doSearch(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#search').val());
    return res;
};
const checkInview = (posAll) => posAll.filter((pos) => pos.inView);
const checkObjtype = (posAll, objtype) => posAll.filter((pos) => pos.type === objtype);
const checkAz = (posAll, min, max) => posAll.filter((pos) => pos.az >= min && pos.az <= max);
const checkEl = (posAll, min, max) => posAll.filter((pos) => pos.el >= min && pos.el <= max);
const checkRange = (posAll, min, max) => posAll.filter((pos) => pos.rng >= min && pos.rng <= max);
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#left-menus').append(_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html `
        <div id="findByLooks-menu" class="side-menu-parent start-hidden text-select">
          <div id="findByLooks-content" class="side-menu">
            <div class="row">
              <h5 class="center-align">Find By Looks</h5>
              <form id="findByLooks">
                <div class="row">
                  <div class="input-field col s12">
                    <select value=0 id="fbl-type" type="text">
                      <option value=0>All</option>
                      <option value=1>Payload</option>
                      <option value=2>Rocket Body</option>
                      <option value=3>Debris</option>
                    </select>
                    <label for="disabled">Object Type</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <select value=0 id="fbl-bus" type="text">
                      <option value='All'>All</option>
                    </select>
                    <label for="disabled">Satellite Bus</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <select value=0 id="fbl-payload" type="text">
                      <option value='All'>All</option>
                    </select>
                    <label for="disabled">Payload</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <select value=0 id="fbl-shape" type="text">
                      <option value='All'>All</option>
                    </select>
                    <label for="disabled">Shape</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="xxx.x" id="fbl-azimuth" type="text">
                    <label for="fbl-azimuth" class="active">Azimuth</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="5" id="fbl-azimuth-margin" type="text">
                    <label for="fbl-azimuth-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-elevation" type="text">
                    <label for="fbl-elevation "class="active">Elevation</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="5" id="fbl-elevation-margin" type="text">
                    <label for="fbl-elevation-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="xxxx.x" id="fbl-range" type="text">
                    <label for="fbl-range "class="active">Range</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="500" id="fbl-range-margin" type="text">
                    <label for="fbl-range-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-inc" type="text">
                    <label for="fbl-inc "class="active">Inclination</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input value="0.5" placeholder="0.5" id="fbl-inc-margin" type="text">
                    <label for="fbl-inc-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-period" type="text">
                    <label for="fbl-period "class="active">Period</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input value="10" placeholder="10" id="fbl-period-margin" type="text">
                    <label for="fbl-period-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-rcs" type="text">
                    <label for="fbl-rcs "class="active">RCS</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input value="10" placeholder="10" id="fbl-rcs-margin" type="text">
                    <label for="fbl-rcs-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-raan" type="text">
                    <label for="fbl-raan "class="active">Right Ascension</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input value="0.5" placeholder="0.5" id="fbl-raan-margin" type="text">
                    <label for="fbl-raan-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-argPe" type="text">
                    <label for="fbl-argPe "class="active">Arg of Perigee</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input value="0.5" placeholder="0.5" id="fbl-argPe-margin" type="text">
                    <label for="fbl-argPe-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="center-align">
                  <button id="findByLooks-submit" class="btn btn-ui waves-effect waves-light" type="submit"
                    name="action">Find Satellite(s) &#9658;
                  </button>
                </div>
              </form>
              <div class="row center-align" style="margin-top:20px;">
                <span id="fbl-error" class="menu-selectable"></span>
              </div>
            </div>
          </div>
        </div>
      `);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-error').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-error').hide();
    });
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html `
        <div id="menu-find-sat" class="bmenu-item">
          <img alt="find2" src="${_app_img_icons_find2_png__WEBPACK_IMPORTED_MODULE_4__}"/>
          <span class="bmenu-title">Find Satellite</span>
          <div class="status-icon"></div>
        </div>     
      `);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#findByLooks').on('submit', function (e) {
        findByLooksSubmit();
        e.preventDefault();
    });
};
const uiManagerFinal = () => {
    const { satSet } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs;
    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.getUnique)(satSet.satData.filter((obj) => obj.bus).map((obj) => obj.bus))
        // Sort using lower case
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((bus) => {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-bus').append(`<option value="${bus}">${bus}</option>`);
    });
    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.getUnique)(satSet.satData.filter((obj) => obj.shape).map((obj) => obj.shape))
        // Sort using lower case
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((shape) => {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-shape').append(`<option value="${shape}">${shape}</option>`);
    });
    const payloadPartials = satSet.satData
        .filter((obj) => obj.payload)
        .map((obj) => obj.payload
        .split(' ')[0]
        .split('-')[0]
        .replace(/[^a-zA-Z]/gu, ''))
        .filter((obj) => obj.length >= 3);
    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.getUnique)(payloadPartials)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((payload) => {
        if (payload === '')
            return;
        if (payload.length > 3) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-payload').append(`<option value="${payload}">${payload}</option>`);
        }
    });
    // Update MaterialUI with new menu options
    window.M.AutoInit();
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-find-sat') {
        const { uiManager } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs;
        if (isFindByLooksMenuOpen) {
            isFindByLooksMenuOpen = false;
            uiManager.hideSideMenus();
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                uiManager.searchToggle(false);
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#findByLooks-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            isFindByLooksMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-find-sat').addClass('bmenu-item-selected');
            return;
        }
    }
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#findByLooks-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-find-sat').removeClass('bmenu-item-selected');
    isFindByLooksMenuOpen = false;
};
const init = () => {
    // Add HTML
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'findSat',
        cb: uiManagerInit,
    });
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'uiManagerFinal',
        cbName: 'findSat',
        cb: uiManagerFinal,
    });
    // Add JavaScript
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'findSat',
        cb: bottomMenuClick,
    });
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'findSat',
        cb: hideSideMenus,
    });
};
const findByLooksSubmit = () => {
    const az = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-azimuth').val());
    const el = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-elevation').val());
    const rng = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-range').val());
    const inc = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-inc').val());
    const period = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-period').val());
    const rcs = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-rcs').val());
    const azMarg = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-azimuth-margin').val());
    const elMarg = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-elevation-margin').val());
    const rngMarg = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-range-margin').val());
    const incMarg = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-inc-margin').val());
    const periodMarg = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-period-margin').val());
    const rcsMarg = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-rcs-margin').val());
    const objType = parseInt(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-type').val());
    const raan = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-raan').val());
    const raanMarg = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-raan-margin').val());
    const argPe = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-argPe').val());
    const argPeMarg = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-argPe-margin').val());
    const bus = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-bus').val();
    const payload = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-payload').val();
    const shape = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#fbl-shape').val();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#search').val(''); // Reset the search first
    const { uiManager } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs;
    try {
        const searchParams = {
            az: az,
            el: el,
            rng: rng,
            inc: inc,
            azMarg,
            elMarg,
            rngMarg,
            incMarg,
            period,
            periodMarg,
            rcs,
            rcsMarg,
            objType,
            raan,
            raanMarg,
            argPe,
            argPeMarg,
            bus,
            payload,
            shape,
        };
        const res = searchSats(searchParams);
        if (res.length === 0) {
            uiManager.toast(`No Satellites Found`, 'critical');
        }
    }
    catch (e) {
        if (e.message === 'No Search Criteria Entered') {
            uiManager.toast(`No Search Criteria Entered`, 'critical');
        }
    }
};
const limitPossibles = (possibles, limit) => {
    const { uiManager } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs;
    if (possibles.length >= limit)
        uiManager.toast(`Too many results, limited to ${limit}`, 'serious');
    possibles = possibles.slice(0, limit);
    return possibles;
};


/***/ }),

/***/ "./src/img/icons/find2.png":
/*!*********************************!*\
  !*** ./src/img/icons/find2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44a370261eb77f300613.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_findSat_findSat_ts.22a1eb5b4c16b507b66b.js.map