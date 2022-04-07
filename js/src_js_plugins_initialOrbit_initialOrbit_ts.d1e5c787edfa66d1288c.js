"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_initialOrbit_initialOrbit_ts"],{

/***/ "./src/js/plugins/initialOrbit/omManager.js":
/*!**************************************************!*\
  !*** ./src/js/plugins/initialOrbit/omManager.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_propagate": () => (/* binding */ _propagate),
/* harmony export */   "_jday": () => (/* binding */ _jday),
/* harmony export */   "_sv2kp": () => (/* binding */ _sv2kp),
/* harmony export */   "_arctan2": () => (/* binding */ _arctan2),
/* harmony export */   "_dayOfYear": () => (/* binding */ _dayOfYear),
/* harmony export */   "_pad0": () => (/* binding */ _pad0),
/* harmony export */   "omManager": () => (/* binding */ omManager)
/* harmony export */ });
/* harmony import */ var _app_js_uiManager_searchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/uiManager/searchBox */ "./src/js/uiManager/searchBox.ts");
/* eslint-disable no-unused-vars */

/* /////////////////////////////////////////////////////////////////////////////

omManager.js Orbit Math Manager handles the conversion of state vector data,
keplerian elements, and two line element sets as well as initial orbit fitting
http://keeptrack.space

Copyright (C) 2016-2022 Theodore Kruczek
Copyright (C) 2020 Heather Kruczek

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

///////////////////////////////////////////////////////////////////////////// */
// sv - State Vectors
// [unixTime, x, y, z, xDot, yDot, zDot]
// TODO: This library needs rewrote in TypeScript
// TODO: Reference older version of this file for possible additional features


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // Constants

var RADIUS_OF_EARTH = 6371000; // Radius of Earth in meters

var G = 6.6725985e-11;
var MILLISECONDS_PER_DAY = 1.15741e-8;
var MINUTES_PER_DAY = 1440;
var PI = Math.PI;
var TAU = 2 * PI;
var RAD2DEG = 360 / TAU; // Make Orbit Math Manager

var om = {}; // Public Functions

om.sat2sv = (sat, timeManager) => [timeManager.calculateSimulationTime(), sat.position.x, sat.position.y, sat.position.z, sat.velocity.x, sat.velocity.y, sat.velocity.z];

om.sat2kp = (sat, timeManager) => {
  var sv = om.sat2sv(sat, timeManager);
  return om.sv2kp(sv, timeManager);
};

om.sat2tle = (sat, timeManager) => {
  var kp = om.sat2kp(sat, timeManager);
  return om.kp2tle(kp, null, timeManager);
};

om.sv2kp = sv => {
  var kepler = _sv2kp(1, 1, sv, 'kg', 'M_Earth', [0, 0, 0, 0, 0, 0], 'km', 'm');

  return kepler;
};

om.kp2tle = (kp, epoch, timeManager) => {
  var inc = kp.inclination;
  var raan = kp.raan;
  var ecc = kp.eccentricity;
  var argpe = kp.argPe;
  var meana = kp.mo;
  var meanmo = 1440 / kp.period;
  epoch = typeof epoch == 'undefined' || epoch == null ? new Date(timeManager.calculateSimulationTime()) : epoch;
  var yy = epoch.getUTCFullYear() - 2000; // This won't work before year 2000, but that shouldn't matter

  var epochd = _dayOfYear(epoch.getUTCMonth(), epoch.getUTCDate(), epoch.getUTCHours(), epoch.getUTCMinutes(), epoch.getUTCSeconds());

  epochd = epochd * 1 + epoch.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
  var tle1 = "1 80000U 58001A   ".concat(yy).concat(_pad0(parseFloat(epochd).toFixed(8), 12), " 0.00000000 +00000-0 +00000-0 0 99990");
  var tle2 = "2 80000 ".concat(_pad0(inc.toFixed(4), 8), " ").concat(_pad0(raan.toFixed(4), 8), " ").concat(ecc.toPrecision(7).substr(2, 7), " ").concat(_pad0(parseFloat(argpe).toFixed(4), 8), " ").concat(_pad0(meana.toFixed(4), 8), " ").concat(_pad0(meanmo.toFixed(8), 11), "000010");
  return {
    tle1: tle1,
    tle2: tle2
  };
}; // State Vectors to Keplerian Min/Max/Avg


om.svs2kps = svs => {
  // NOSONAR
  var kpList = [];

  for (var i = 0; i < svs.length; i++) {
    kpList.push(om.sv2kp(svs[i]));
  } // Results


  var r = {};
  {
    r.max = {};
    r.max.apogee = 0;
    r.max.argPe = 0;
    r.max.eccentricity = 0;
    r.max.inclination = 0;
    r.max.mo = 0;
    r.max.perigee = 0;
    r.max.period = 0;
    r.max.raan = 0;
    r.max.semiMajorAxis = 0;
    r.max.ta = 0;
    r.max.tl = 0;
    r.min = {};
    r.min.apogee = 1000000;
    r.min.argPe = 1000000;
    r.min.eccentricity = 1000000;
    r.min.inclination = 1000000;
    r.min.mo = 1000000;
    r.min.perigee = 1000000;
    r.min.period = 1000000;
    r.min.raan = 1000000;
    r.min.semiMajorAxis = 1000000;
    r.min.ta = 1000000;
    r.min.tl = 1000000;
    r.avg = {};
    r.avg.apogee = 0;
    r.avg.argPe = 0;
    r.avg.eccentricity = 0;
    r.avg.inclination = 0;
    r.avg.mo = 0;
    r.avg.perigee = 0;
    r.avg.period = 0;
    r.avg.raan = 0;
    r.avg.semiMajorAxis = 0;
    r.avg.ta = 0;
    r.avg.tl = 0;
  } // deepcode ignore UnusedIterator: false positive

  for (var _i = 0; _i < kpList.length; _i++) {
    if (kpList[_i].apogee < r.min.apogee) r.min.apogee = kpList[_i].apogee;
    if (kpList[_i].apogee > r.max.apogee) r.max.apogee = kpList[_i].apogee;
    r.avg.apogee += kpList[_i].apogee;
    if (kpList[_i].argPe < r.min.argPe) r.min.argPe = kpList[_i].argPe;
    if (kpList[_i].argPe > r.max.argPe) r.max.argPe = kpList[_i].argPe;
    r.avg.argPe += kpList[_i].argPe;
    if (kpList[_i].eccentricity < r.min.eccentricity) r.min.eccentricity = kpList[_i].eccentricity;
    if (kpList[_i].eccentricity > r.max.eccentricity) r.max.eccentricity = kpList[_i].eccentricity;
    r.avg.eccentricity += kpList[_i].eccentricity;
    if (kpList[_i].inclination < r.min.inclination) r.min.inclination = kpList[_i].inclination;
    if (kpList[_i].inclination > r.max.inclination) r.max.inclination = kpList[_i].inclination;
    r.avg.inclination += kpList[_i].inclination;
    if (kpList[_i].mo < r.min.mo) r.min.mo = kpList[_i].mo;
    if (kpList[_i].mo > r.max.mo) r.max.mo = kpList[_i].mo;
    r.avg.mo += kpList[_i].mo;
    if (kpList[_i].perigee < r.min.perigee) r.min.perigee = kpList[_i].perigee;
    if (kpList[_i].perigee > r.max.perigee) r.max.perigee = kpList[_i].perigee;
    r.avg.perigee += kpList[_i].perigee;
    if (kpList[_i].period < r.min.period) r.min.period = kpList[_i].period;
    if (kpList[_i].period > r.max.period) r.max.period = kpList[_i].period;
    r.avg.period += kpList[_i].period;
    if (kpList[_i].raan < r.min.raan) r.min.raan = kpList[_i].raan;
    if (kpList[_i].raan > r.max.raan) r.max.raan = kpList[_i].raan;
    r.avg.raan += kpList[_i].raan;
    if (kpList[_i].semiMajorAxis < r.min.semiMajorAxis) r.min.semiMajorAxis = kpList[_i].semiMajorAxis;
    if (kpList[_i].semiMajorAxis > r.max.semiMajorAxis) r.max.semiMajorAxis = kpList[_i].semiMajorAxis;
    r.avg.semiMajorAxis += kpList[_i].semiMajorAxis;
    if (kpList[_i].ta < r.min.ta) r.min.ta = kpList[_i].ta;
    if (kpList[_i].ta > r.max.ta) r.max.ta = kpList[_i].ta;
    r.avg.ta += kpList[_i].ta;
    if (kpList[_i].tl < r.min.tl) r.min.tl = kpList[_i].tl;
    if (kpList[_i].tl > r.max.tl) r.max.tl = kpList[_i].tl;
    r.avg.tl += kpList[_i].tl;
  }

  r.avg.apogee /= kpList.length;
  r.avg.argPe /= kpList.length;
  r.avg.eccentricity /= kpList.length;
  r.avg.inclination /= kpList.length;
  r.avg.mo /= kpList.length;
  r.avg.perigee /= kpList.length;
  r.avg.period /= kpList.length;
  r.avg.raan /= kpList.length;
  r.avg.semiMajorAxis /= kpList.length;
  r.avg.ta /= kpList.length;
  r.avg.tl /= kpList.length;
  return r;
};

om.iod = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (svs, timeManager, satellite) {
    try {
      var kps = om.svs2kps(svs); // Sort SVs by Time

      svs.sort(function (a, b) {
        return a[0].value - b[0].value;
      }); // Change Time to Relative to the First Observation

      var epoch = new Date(svs[0][0]);
      return om.fitTles(epoch, svs, kps, timeManager, satellite);
    } catch (e) {
      console.debug(e);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

om.fitTles = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (epoch, svs, kps, timeManager, satellite) {
    // NOSONAR
    try {
      om.debug.closestApproach = 0;
      var STEPS = settingsManager.fitTleSteps;
      var raanI = (kps.max.raan - kps.min.raan) / STEPS;
      var argpeI = (kps.max.argPe - kps.min.argPe) / STEPS;
      var meanaI = (kps.max.mo - kps.min.mo) / STEPS; // DEBUG:
      // const incI = (kps.max.inclination - kps.min.inclination) / STEPS;
      // const eccI = (kps.max.eccentricity - kps.min.eccentricity) / STEPS;
      // const periodI = (kps.max.period - kps.min.period) / STEPS;

      var bestIndicies = [10000000]; // Starts Really Large To Ensure First One is Better

      for (var r = -STEPS / 2; r < STEPS / 2; r++) {
        for (var a = -STEPS; a < STEPS; a++) {
          for (var m = -STEPS * 2; m < STEPS * 2; m++) {
            var possibleKp = {};
            possibleKp.inclination = kps.avg.inclination;
            possibleKp.raan = kps.avg.raan + raanI * r;
            possibleKp.eccentricity = kps.avg.eccentricity;
            possibleKp.argPe = kps.avg.argPe + argpeI * a;
            possibleKp.mo = kps.avg.mo + meanaI * m / 2;
            possibleKp.period = kps.avg.period;
            var tles = om.kp2tle(possibleKp, epoch, timeManager);
            var xError = 0;
            var yError = 0;
            var zError = 0;
            var posErrorAvg = 0;

            for (var svI = 0; svI < svs.length; svI++) {
              var eci = void 0;

              try {
                eci = _propagate(tles.tle1, tles.tle2, new Date(epoch + (svs[svI][0] - svs[0][0])), satellite);
                xError += Math.abs(eci.position.x - svs[svI][1]);
                yError += Math.abs(eci.position.y - svs[svI][2]);
                zError += Math.abs(eci.position.z - svs[svI][3]);
                posErrorAvg += Math.sqrt(xError ** 2 + yError ** 2 + zError ** 2);
              } catch (error) {// DEBUG:
                // console.warn(eci);
              }
            }

            posErrorAvg /= svs.length; // TODO: Better Decision on Best Indicies

            if (posErrorAvg < bestIndicies[0]) {
              bestIndicies = [posErrorAvg, r, a, m];
            }
          }
        }
      } // debug


      console.log("Closest Approach: ".concat(bestIndicies[0]));
      om.debug.closestApproach += bestIndicies[0]; // Calculate Best TLE

      var kp = {};
      kp.inclination = kps.avg.inclination;
      kp.raan = kps.avg.raan + raanI * bestIndicies[1];
      kp.eccentricity = kps.avg.eccentricity;
      kp.argPe = kps.avg.argPe + argpeI * bestIndicies[2];
      kp.mo = kps.avg.mo + meanaI * bestIndicies[3];
      kp.period = kps.avg.period;
      return om.kp2tle(kp, epoch);
    } catch (e) {
      console.debug(e);
    }
  });

  return function (_x4, _x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();

om.svs2analyst = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (svs, satSet, timeManager, satellite) {
    om.iod(svs, timeManager, satellite).then(tles => {
      satSet.insertNewAnalystSatellite(tles.tle1, tles.tle2, satSet.getIdFromObjNum(100500), '100500'); // TODO: Calculate unused analyst satellite and use that Instead

      _app_js_uiManager_searchBox__WEBPACK_IMPORTED_MODULE_0__.searchBox.doSearch('100500', true);
    }).catch(error => {
      console.debug(error);
    });
  });

  return function (_x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

om.testIod = satSet => {
  fetch('/metObs.json').then(response => response.json()).then(metObs => {
    for (var i = 0; i < metObs.length; i++) {
      var svs = metObs[i];
      om.svs2analyst(svs, satSet);
    }

    om.debug.closestApproach /= metObs.length;
    console.log("Average Approach: ".concat(om.debug.closestApproach));
  }).catch(error => {
    console.debug(error);
  });
};

om.debug = {};
om.debug.closestApproach = 0;
var _propagate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (tle1, tle2, epoch, satellite) {
    try {
      var satrec = satellite.twoline2satrec(tle1, tle2); // perform and store sat init calcs

      var j = _jday(epoch.getUTCFullYear(), epoch.getUTCMonth() + 1, // NOTE:, this function requires months in range 1-12.
      epoch.getUTCDate(), epoch.getUTCHours(), epoch.getUTCMinutes(), epoch.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)


      j += epoch.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
      var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
      var eci = satellite.sgp4(satrec, m);
      return eci;
    } catch (error) {// intentionally left blank
    }
  });

  return function _propagate(_x13, _x14, _x15, _x16) {
    return _ref4.apply(this, arguments);
  };
}();
var _jday = (year, mon, day, hr, minute, sec) => {
  'use strict';

  return 367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor(275 * mon / 9.0) + day + 1721013.5 + ((sec / 60.0 + minute) / 60.0 + hr) / 24.0 //  ut in days
  ;
}; // Converts State Vectors to Keplerian Elements

var _sv2kp = (massPrimary, massSecondary, vector, massPrimaryU, massSecondaryU, vectorU, outputU, outputU2) => {
  // NOSONAR
  var rx = vector[1] * 1000;
  var ry = vector[2] * 1000;
  var rz = vector[3] * 1000;
  var vx = vector[4] * 1000;
  var vy = vector[5] * 1000;
  var vz = vector[6] * 1000;

  if (massSecondaryU === 'M_Earth') {
    massSecondary = massSecondary * 5.97378250603408e24;
  } // Prevent divide by 0 errors


  if (rx === 0) {
    rx = 0.000000000000001;
  }

  if (ry === 0) {
    ry = 0.000000000000001;
  }

  if (rz === 0) {
    rz = 0.000000000000001;
  }

  if (vx === 0) {
    vx = 0.000000000000001;
  }

  if (vy === 0) {
    vy = 0.000000000000001;
  }

  if (vz === 0) {
    vz = 0.000000000000001;
  }

  var mu = G * (massPrimary + massSecondary);
  var r = Math.sqrt(rx * rx + ry * ry + rz * rz);
  var v = Math.sqrt(vx * vx + vy * vy + vz * vz);
  var a = 1 / (2 / r - v * v / mu); //  semi-major axis

  var hx = ry * vz - rz * vy;
  var hy = rz * vx - rx * vz;
  var hz = rx * vy - ry * vx;
  var h = Math.sqrt(hx * hx + hy * hy + hz * hz);
  var p = h * h / mu;
  var q = rx * vx + ry * vy + rz * vz; // dot product of r*v

  var e = Math.sqrt(1 - p / a); // eccentricity

  var ex = 1 - r / a;
  var ey = q / Math.sqrt(a * mu);
  var i = Math.acos(hz / h);
  var lan = 0;

  if (i != 0) {
    lan = _arctan2(hx, -hy);
  }

  var tax = h * h / (r * mu) - 1;
  var tay = h * q / (r * mu);

  var ta = _arctan2(tay, tax);

  var cw = (rx * Math.cos(lan) + ry * Math.sin(lan)) / r;
  var sw = 0;

  if (i === 0 || i === PI) {
    sw = (ry * Math.cos(lan) - rx * Math.sin(lan)) / r;
  } else {
    sw = rz / (r * Math.sin(i));
  }

  var w = _arctan2(sw, cw) - ta;

  if (w < 0) {
    w = TAU + w;
  }

  var u = _arctan2(ey, ex); // eccentric anomoly


  var m = u - e * Math.sin(u); // Mean anomoly

  var tl = w + ta + lan; // True longitude

  while (tl >= TAU) {
    tl = tl - TAU;
  }

  var PlusMinus = a * e;
  var periapsis = a - PlusMinus - RADIUS_OF_EARTH;
  var apoapsis = a + PlusMinus - RADIUS_OF_EARTH;
  var period = TAU * Math.sqrt(a * a * a / (G * (massPrimary + massSecondary))); // toDegrees

  i = RAD2DEG * i;
  lan = RAD2DEG * lan;
  w = RAD2DEG * w;
  m = RAD2DEG * m;
  ta = RAD2DEG * ta;
  tl = RAD2DEG * tl;
  return {
    semiMajorAxis: a,
    eccentricity: e,
    inclination: i,
    raan: lan,
    argPe: w,
    mo: m,
    ta,
    tl,
    perigee: periapsis,
    apogee: apoapsis,
    period
  };
}; // Internal Functions

var _arctan2 = (y, x) => {
  var u;

  if (x != 0) {
    u = Math.atan(y / x);
    if (x < 0) u = u + PI;
    if (x > 0 && y < 0) u = u + TAU;
  } else {
    if (y < 0) u = -PI / 2;
    if (y === 0) u = 0;
    if (y > 0) u = PI / 2;
  }

  return u;
};
var _dayOfYear = (mon, day, hr, minute, sec) => // eslint-disable-next-line implicit-arrow-linebreak
(Math.floor(275 * mon / 9.0) + day + ((sec / 60.0 + minute) / 60.0 + hr) / 24.0 //  ut in days
).toFixed(5);
var _pad0 = (str, max) => (str === null || str === void 0 ? void 0 : str.length) < max ? _pad0('0' + str, max) : str;
var omManager = om;

/***/ }),

/***/ "./src/js/plugins/initialOrbit/initialOrbit.ts":
/*!*****************************************************!*\
  !*** ./src/js/plugins/initialOrbit/initialOrbit.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "obfitFormSubmit": () => (/* binding */ obfitFormSubmit)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_plugins_initialOrbit_omManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/plugins/initialOrbit/omManager.js */ "./src/js/plugins/initialOrbit/omManager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_img_icons_iod_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/img/icons/iod.png */ "./src/img/icons/iod.png");




let isObfitMenuOpen = false;
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'initialOrbit',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'initialOrbit',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'initialOrbit',
        cb: hideSideMenus,
    });
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#obfit-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-obfit').removeClass('bmenu-item-selected');
    isObfitMenuOpen = false;
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
    <div id="obfit-menu" class="side-menu-parent start-hidden text-select">
      <div id="obfit-content" class="side-menu">
        <form id="obfit-form">
          <div class="switch row">
            <h5 class="center-align">Initial Orbit Determination</h5>
          </div>
          <div class="switch row">
            <h6 class="center-align">Observation 1</h5>
            <div class="input-field col s12">
              <input value="1606439414717" id="obfit-t1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Time in Unix Time">
              <label for="obfit-t" class="active">Time</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="-3323.62939453125" id="obfit-x1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="X">
              <label for="obfit-lat" class="active">X</label>
            </div>
            <div class="input-field col s4">
              <input value="-4930.19384765625" id="obfit-y1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y">
              <label for="obfit-lat" class="active">Y</label>
            </div><div class="input-field col s4">
              <input value="-3303.053955078125" id="obfit-z1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z">
              <label for="obfit-lat" class="active">Z</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="3.2059669494628906" id="obfit-xd1" type="text" class="tooltipped" data-position="right"
              data-delay="50" data-tooltip="X Dot">
              <label for="obfit-lat" class="active">X Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="-4.953164100646973" id="obfit-yd1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y Dot">
              <label for="obfit-lat" class="active">Y Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="4.8763322830200195" id="obfit-zd1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z Dot">
              <label for="obfit-lat" class="active">Z Dot</label>
            </div>
          </div>
          <div class="switch row">
            <h6 class="center-align">Observation 2 (Optional)</h5>
            <div class="input-field col s12">
              <input value="" id="obfit-t2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Time in Unix Time">
              <label for="obfit-t" class="active">Time</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="" id="obfit-x2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="X">
              <label for="obfit-lat" class="active">X</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-y2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y">
              <label for="obfit-lat" class="active">Y</label>
            </div><div class="input-field col s4">
              <input value="" id="obfit-z2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z">
              <label for="obfit-lat" class="active">Z</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="" id="obfit-xd2" type="text" class="tooltipped" data-position="right"
              data-delay="50" data-tooltip="X Dot">
              <label for="obfit-lat" class="active">X Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-yd2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y Dot">
              <label for="obfit-lat" class="active">Y Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-zd2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z Dot">
              <label for="obfit-lat" class="active">Z Dot</label>
            </div>
          </div>
          <div class="switch row">
            <h6 class="center-align">Observation 3 (Optional)</h5>
            <div class="input-field col s12">
              <input value="" id="obfit-t3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Time in Unix Time">
              <label for="obfit-t" class="active">Time</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="" id="obfit-x3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="X">
              <label for="obfit-lat" class="active">X</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-y3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y">
              <label for="obfit-lat" class="active">Y</label>
            </div><div class="input-field col s4">
              <input value="" id="obfit-z3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z">
              <label for="obfit-lat" class="active">Z</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="" id="obfit-xd3" type="text" class="tooltipped" data-position="right"
              data-delay="50" data-tooltip="X Dot">
              <label for="obfit-lat" class="active">X Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-yd3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y Dot">
              <label for="obfit-lat" class="active">Y Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-zd3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z Dot">
              <label for="obfit-lat" class="active">Z Dot</label>
            </div>
          </div>
          <div class="row center">
            <button id="obfit-submit" class="btn btn-ui waves-effect waves-light" type="submit"
              name="action">Create Analyst Satellite &#9658;
            </button>
          </div>
        </form>
        <div class="row">
          <table id="obfit" class="center-align striped-light centered"></table>
        </div>
      </div>
    </div>     
  `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
    <div id="menu-obfit" class="bmenu-item">
      <img
        alt="obfit"
        src=""
        delayedsrc="${_app_img_icons_iod_png__WEBPACK_IMPORTED_MODULE_3__}" />
      <span class="bmenu-title">Initial Orbit</span>
      <div class="status-icon"></div>
    </div>
  `);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#obfit-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css('height', '');
        },
        maxWidth: 650,
        minWidth: 400,
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#obfit-form').on('submit', function (e) {
        obfitFormSubmit(e);
    });
};
const bottomMenuClick = (iconName) => {
    const { uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (iconName === 'menu-obfit') {
        if (isObfitMenuOpen) {
            isObfitMenuOpen = false;
            uiManager.hideSideMenus();
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                uiManager.searchToggle(false);
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#obfit-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            isObfitMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-obfit').addClass('bmenu-item-selected');
            return;
        }
    }
};
const obfitFormSubmit = (e) => {
    const { uiManager, satSet, timeManager, satellite } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    let t1v, x1v, y1v, z1v, xd1v, yd1v, zd1v;
    let t2v, x2v, y2v, z2v, xd2v, yd2v, zd2v;
    let t3v, x3v, y3v, z3v, xd3v, yd3v, zd3v;
    let isOb2 = true;
    let isOb3 = true;
    const t1 = document.getElementById('obfit-t1').value;
    if (t1.length > 0) {
        t1v = parseFloat(t1);
    }
    else {
        t1v = NaN;
    }
    const x1 = document.getElementById('obfit-x1').value;
    if (x1.length > 0) {
        x1v = parseFloat(x1);
    }
    else {
        x1v = NaN;
    }
    const y1 = document.getElementById('obfit-y1').value;
    if (y1.length > 0) {
        y1v = parseFloat(y1);
    }
    else {
        y1v = NaN;
    }
    const z1 = document.getElementById('obfit-z1').value;
    if (z1.length > 0) {
        z1v = parseFloat(z1);
    }
    else {
        z1v = NaN;
    }
    const xd1 = document.getElementById('obfit-xd1').value;
    if (xd1.length > 0) {
        xd1v = parseFloat(xd1);
    }
    else {
        xd1v = NaN;
    }
    const yd1 = document.getElementById('obfit-yd1').value;
    if (yd1.length > 0) {
        yd1v = parseFloat(yd1);
    }
    else {
        yd1v = NaN;
    }
    const zd1 = document.getElementById('obfit-zd1').value;
    if (zd1.length > 0) {
        zd1v = parseFloat(zd1);
    }
    else {
        zd1v = NaN;
    }
    const t2 = document.getElementById('obfit-t2').value;
    if (t2.length > 0) {
        t2v = parseFloat(t2);
    }
    else {
        isOb2 = false;
    }
    const x2 = document.getElementById('obfit-x2').value;
    if (x2.length > 0) {
        x2v = parseFloat(x2);
    }
    else {
        isOb2 = false;
    }
    const y2 = document.getElementById('obfit-y2').value;
    if (y2.length > 0) {
        y2v = parseFloat(y2);
    }
    else {
        isOb2 = false;
    }
    const z2 = document.getElementById('obfit-z2').value;
    if (z2.length > 0) {
        z2v = parseFloat(z2);
    }
    else {
        isOb2 = false;
    }
    const xd2 = document.getElementById('obfit-xd2').value;
    if (xd2.length > 0) {
        xd2v = parseFloat(xd2);
    }
    else {
        isOb2 = false;
    }
    const yd2 = document.getElementById('obfit-yd2').value;
    if (yd2.length > 0) {
        yd2v = parseFloat(yd2);
    }
    else {
        isOb2 = false;
    }
    const zd2 = document.getElementById('obfit-zd2').value;
    if (zd2.length > 0) {
        zd2v = parseFloat(zd2);
    }
    else {
        isOb2 = false;
    }
    const t3 = document.getElementById('obfit-t3').value;
    if (t3.length > 0) {
        t3v = parseFloat(t3);
    }
    else {
        isOb3 = false;
    }
    const x3 = document.getElementById('obfit-x3').value;
    if (x3.length > 0) {
        x3v = parseFloat(x3);
    }
    else {
        isOb3 = false;
    }
    const y3 = document.getElementById('obfit-y3').value;
    if (y3.length > 0) {
        y3v = parseFloat(y3);
    }
    else {
        isOb3 = false;
    }
    const z3 = document.getElementById('obfit-z3').value;
    if (z3.length > 0) {
        z3v = parseFloat(z3);
    }
    else {
        isOb3 = false;
    }
    const xd3 = document.getElementById('obfit-xd3').value;
    if (xd3.length > 0) {
        xd3v = parseFloat(xd3);
    }
    else {
        isOb3 = false;
    }
    const yd3 = document.getElementById('obfit-yd3').value;
    if (yd3.length > 0) {
        yd3v = parseFloat(yd3);
    }
    else {
        isOb3 = false;
    }
    const zd3 = document.getElementById('obfit-zd3').value;
    if (zd3.length > 0) {
        zd3v = parseFloat(zd3);
    }
    else {
        isOb3 = false;
    }
    const svs = [];
    let sv1 = [];
    {
        if (isNaN(parseFloat(t1))) {
            uiManager.toast(`Time 1 is Invalid!`, 'critical');
            return false;
        }
        if (isNaN(parseFloat(x1))) {
            uiManager.toast(`X 1 is Invalid!`, 'critical');
            return false;
        }
        if (isNaN(parseFloat(y1))) {
            uiManager.toast(`Y 1 is Invalid!`, 'critical');
            return false;
        }
        if (isNaN(parseFloat(z1))) {
            uiManager.toast(`Z 1 is Invalid!`, 'critical');
            return false;
        }
        if (isNaN(parseFloat(xd1))) {
            uiManager.toast(`X Dot 1 is Invalid!`, 'critical');
            return false;
        }
        if (isNaN(parseFloat(yd1))) {
            uiManager.toast(`Y Dot 1 is Invalid!`, 'critical');
            return false;
        }
        if (isNaN(parseFloat(zd1))) {
            uiManager.toast(`Z Dot 1 is Invalid!`, 'critical');
            return false;
        }
        sv1 = [t1v, x1v, y1v, z1v, xd1v, yd1v, zd1v];
        svs.push(sv1);
    }
    let sv2 = [];
    {
        if (isOb2 && isNaN(parseFloat(t2))) {
            isOb2 = false;
            uiManager.toast(`Time 2 is Invalid!`, 'caution');
        }
        if (isOb2 && isNaN(parseFloat(x2))) {
            isOb2 = false;
            uiManager.toast(`X 2 is Invalid!`, 'caution');
        }
        if (isOb2 && isNaN(parseFloat(y2))) {
            isOb2 = false;
            uiManager.toast(`Y 2 is Invalid!`, 'caution');
        }
        if (isOb2 && isNaN(parseFloat(z2))) {
            isOb2 = false;
            uiManager.toast(`Z 2 is Invalid!`, 'caution');
        }
        if (isOb2 && isNaN(parseFloat(xd2))) {
            isOb2 = false;
            uiManager.toast(`X Dot 2 is Invalid!`, 'caution');
        }
        if (isOb2 && isNaN(parseFloat(yd2))) {
            isOb2 = false;
            uiManager.toast(`Y Dot 2 is Invalid!`, 'caution');
        }
        if (isOb2 && isNaN(parseFloat(zd2))) {
            isOb2 = false;
            uiManager.toast(`Z Dot 2 is Invalid!`, 'caution');
        }
        if (isOb2) {
            sv2 = [t2v, x2v, y2v, z2v, xd2v, yd2v, zd2v];
            svs.push(sv2);
        }
    }
    isOb3 = !isOb2 ? false : isOb3;
    let sv3 = [];
    {
        if (isOb3 && isNaN(parseFloat(t3))) {
            isOb3 = false;
            uiManager.toast(`Time 3 is Invalid!`, 'caution');
        }
        if (isOb3 && isNaN(parseFloat(x3))) {
            isOb3 = false;
            uiManager.toast(`X 3 is Invalid!`, 'caution');
        }
        if (isOb3 && isNaN(parseFloat(y3))) {
            isOb3 = false;
            uiManager.toast(`Y 3 is Invalid!`, 'caution');
        }
        if (isOb3 && isNaN(parseFloat(z3))) {
            isOb3 = false;
            uiManager.toast(`Z 3 is Invalid!`, 'caution');
        }
        if (isOb3 && isNaN(parseFloat(xd3))) {
            isOb3 = false;
            uiManager.toast(`X Dot 3 is Invalid!`, 'caution');
        }
        if (isOb3 && isNaN(parseFloat(yd3))) {
            isOb3 = false;
            uiManager.toast(`Y Dot 3 is Invalid!`, 'caution');
        }
        if (isOb3 && isNaN(parseFloat(zd3))) {
            isOb3 = false;
            uiManager.toast(`Z Dot 3 is Invalid!`, 'caution');
        }
        if (isOb3) {
            sv3 = [t3v, x3v, y3v, z3v, xd3v, yd3v, zd3v];
            svs.push(sv3);
        }
    }
    console.log(svs);
    _app_js_plugins_initialOrbit_omManager_js__WEBPACK_IMPORTED_MODULE_1__.omManager.svs2analyst(svs, satSet, timeManager, satellite);
    e.preventDefault();
    return true;
};


/***/ }),

/***/ "./src/img/icons/iod.png":
/*!*******************************!*\
  !*** ./src/img/icons/iod.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9800d6ae9d69cd630cc9.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_initialOrbit_initialOrbit_ts.d1e5c787edfa66d1288c.js.map