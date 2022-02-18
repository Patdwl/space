/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/external/dateFormat.js":
/*!*******************************************!*\
  !*** ./src/js/lib/external/dateFormat.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateFormat": () => (/* binding */ dateFormat)
/* harmony export */ });
/* eslint-disable */

/* */

/*! Date Format 1.2.4
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by:
 * Scott Trenda <scott.trenda.net>
 * Kris Kowal <cixar.com/~kris.kowal/>
 * Theodore Kruczek
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to formats.masks.default.
 */
var pad = (val, len) => {
  val = String(val);
  len = len || 2;

  while (val.length < len) {
    val = '0' + val;
  }

  return val;
};

var formats = {
  masks: {
    // Common Formats
    default: 'ddd mmm dd yyyy HH:MM:ss',
    shortDate: 'm/d/yy',
    mediumDate: 'mmm d, yyyy',
    longDate: 'mmmm d, yyyy',
    fullDate: 'dddd, mmmm d, yyyy',
    shortTime: 'h:MM TT',
    mediumTime: 'h:MM:ss TT',
    longTime: 'h:MM:ss TT Z',
    isoDate: 'yyyy-mm-dd',
    isoTime: 'HH:MM:ss',
    isoDateTime: "yyyy-mm-dd' 'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
  },
  i18n: {
    // Internationalization strings
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
}; // eslint-disable-next-line prefer-named-capture-group

var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HMThst])\1?|[LSZlo]|"(?:(?!")[\s\S])*"|'(?:(?!')[\s\S])*'/g;
var timezone = /\b(?:[ACEMP][DPS]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[\+\x2D][0-9]{4})?)\b/g;
var timezoneClip = /(?:(?![\+\x2D0-9A-Z])[\s\S])/g;

var dateFormat = function dateFormat(date, mask, utc) {
  // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
  if (arguments.length === 1 && Object.prototype.toString.call(date) === '[object String]' && !/[0-9]/.test(date)) {
    mask = date; // eslint-disable-next-line no-undefined

    date = undefined;
  } // Passing date through Date applies Date.parse, if necessary


  date = date ? new Date(date) : new Date();
  if (Number.isNaN(date)) throw SyntaxError("invalid date - ".concat(date));
  mask = String(formats.masks[mask] || mask || formats.masks['default']); // Allow setting the utc argument via the mask

  if (mask.slice(0, 4) === 'UTC:') {
    mask = mask.slice(4);
    utc = true;
  }

  var _ = utc ? 'getUTC' : 'get';

  var d = date[_ + 'Date']();

  var D = date[_ + 'Day']();

  var m = date[_ + 'Month']();

  var y = date[_ + 'FullYear']();

  var H = date[_ + 'Hours']();

  var M = date[_ + 'Minutes']();

  var s = date[_ + 'Seconds']();

  var L = date[_ + 'Milliseconds']();

  var o = utc ? 0 : date.getTimezoneOffset();
  var flags = {
    d: d,
    dd: pad(d),
    ddd: formats.i18n.dayNames[D],
    dddd: formats.i18n.dayNames[D + 7],
    m: m + 1,
    mm: pad(m + 1),
    mmm: formats.i18n.monthNames[m],
    mmmm: formats.i18n.monthNames[m + 12],
    yy: String(y).slice(2),
    yyyy: y,
    h: H % 12 || 12,
    hh: pad(H % 12 || 12),
    H: H,
    HH: pad(H),
    M: M,
    MM: pad(M),
    s: s,
    ss: pad(s),
    l: pad(L, 3),
    L: pad(L > 99 ? Math.round(L / 10) : L),
    t: H < 12 ? 'a' : 'p',
    tt: H < 12 ? 'am' : 'pm',
    T: H < 12 ? 'A' : 'P',
    TT: H < 12 ? 'AM' : 'PM',
    Z: utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
    o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
    S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
  };
  return mask.replace(token, function ($0) {
    return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
  });
};



/***/ }),

/***/ "./node_modules/satellite.js/dist/satellite.es.js":
/*!********************************************************!*\
  !*** ./node_modules/satellite.js/dist/satellite.es.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constants": () => (/* binding */ constants),
/* harmony export */   "degreesLat": () => (/* binding */ degreesLat),
/* harmony export */   "degreesLong": () => (/* binding */ degreesLong),
/* harmony export */   "degreesToRadians": () => (/* binding */ degreesToRadians),
/* harmony export */   "dopplerFactor": () => (/* binding */ dopplerFactor),
/* harmony export */   "ecfToEci": () => (/* binding */ ecfToEci),
/* harmony export */   "ecfToLookAngles": () => (/* binding */ ecfToLookAngles),
/* harmony export */   "eciToEcf": () => (/* binding */ eciToEcf),
/* harmony export */   "eciToGeodetic": () => (/* binding */ eciToGeodetic),
/* harmony export */   "geodeticToEcf": () => (/* binding */ geodeticToEcf),
/* harmony export */   "gstime": () => (/* binding */ gstime),
/* harmony export */   "invjday": () => (/* binding */ invjday),
/* harmony export */   "jday": () => (/* binding */ jday),
/* harmony export */   "propagate": () => (/* binding */ propagate),
/* harmony export */   "radiansLat": () => (/* binding */ radiansLat),
/* harmony export */   "radiansLong": () => (/* binding */ radiansLong),
/* harmony export */   "radiansToDegrees": () => (/* binding */ radiansToDegrees),
/* harmony export */   "sgp4": () => (/* binding */ sgp4),
/* harmony export */   "twoline2satrec": () => (/* binding */ twoline2satrec)
/* harmony export */ });
/*!
 * satellite-js v4.1.3
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */

var pi = Math.PI;
var twoPi = pi * 2;
var deg2rad = pi / 180.0;
var rad2deg = 180 / pi;
var minutesPerDay = 1440.0;
var mu = 398600.5; // in km3 / s2

var earthRadius = 6378.137; // in km

var xke = 60.0 / Math.sqrt(earthRadius * earthRadius * earthRadius / mu);
var vkmpersec = earthRadius * xke / 60.0;
var tumin = 1.0 / xke;
var j2 = 0.00108262998905;
var j3 = -0.00000253215306;
var j4 = -0.00000161098761;
var j3oj2 = j3 / j2;
var x2o3 = 2.0 / 3.0;

var constants = /*#__PURE__*/Object.freeze({
  __proto__: null,
  pi: pi,
  twoPi: twoPi,
  deg2rad: deg2rad,
  rad2deg: rad2deg,
  minutesPerDay: minutesPerDay,
  mu: mu,
  earthRadius: earthRadius,
  xke: xke,
  vkmpersec: vkmpersec,
  tumin: tumin,
  j2: j2,
  j3: j3,
  j4: j4,
  j3oj2: j3oj2,
  x2o3: x2o3
});

/* -----------------------------------------------------------------------------
 *
 *                           procedure days2mdhms
 *
 *  this procedure converts the day of the year, days, to the equivalent month
 *    day, hour, minute and second.
 *
 *  algorithm     : set up array for the number of days per month
 *                  find leap year - use 1900 because 2000 is a leap year
 *                  loop through a temp value while the value is < the days
 *                  perform int conversions to the correct day and month
 *                  convert remainder into h m s using type conversions
 *
 *  author        : david vallado                  719-573-2600    1 mar 2001
 *
 *  inputs          description                    range / units
 *    year        - year                           1900 .. 2100
 *    days        - julian day of the year         0.0  .. 366.0
 *
 *  outputs       :
 *    mon         - month                          1 .. 12
 *    day         - day                            1 .. 28,29,30,31
 *    hr          - hour                           0 .. 23
 *    min         - minute                         0 .. 59
 *    sec         - second                         0.0 .. 59.999
 *
 *  locals        :
 *    dayofyr     - day of year
 *    temp        - temporary extended values
 *    inttemp     - temporary int value
 *    i           - index
 *    lmonth[12]  - int array containing the number of days per month
 *
 *  coupling      :
 *    none.
 * --------------------------------------------------------------------------- */
function days2mdhms(year, days) {
  var lmonth = [31, year % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var dayofyr = Math.floor(days); //  ----------------- find month and day of month ----------------

  var i = 1;
  var inttemp = 0;

  while (dayofyr > inttemp + lmonth[i - 1] && i < 12) {
    inttemp += lmonth[i - 1];
    i += 1;
  }

  var mon = i;
  var day = dayofyr - inttemp; //  ----------------- find hours minutes and seconds -------------

  var temp = (days - dayofyr) * 24.0;
  var hr = Math.floor(temp);
  temp = (temp - hr) * 60.0;
  var minute = Math.floor(temp);
  var sec = (temp - minute) * 60.0;
  return {
    mon: mon,
    day: day,
    hr: hr,
    minute: minute,
    sec: sec
  };
}
/* -----------------------------------------------------------------------------
 *
 *                           procedure jday
 *
 *  this procedure finds the julian date given the year, month, day, and time.
 *    the julian date is defined by each elapsed day since noon, jan 1, 4713 bc.
 *
 *  algorithm     : calculate the answer in one step for efficiency
 *
 *  author        : david vallado                  719-573-2600    1 mar 2001
 *
 *  inputs          description                    range / units
 *    year        - year                           1900 .. 2100
 *    mon         - month                          1 .. 12
 *    day         - day                            1 .. 28,29,30,31
 *    hr          - universal time hour            0 .. 23
 *    min         - universal time min             0 .. 59
 *    sec         - universal time sec             0.0 .. 59.999
 *
 *  outputs       :
 *    jd          - julian date                    days from 4713 bc
 *
 *  locals        :
 *    none.
 *
 *  coupling      :
 *    none.
 *
 *  references    :
 *    vallado       2007, 189, alg 14, ex 3-14
 *
 * --------------------------------------------------------------------------- */

function jdayInternal(year, mon, day, hr, minute, sec) {
  var msec = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  return 367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor(275 * mon / 9.0) + day + 1721013.5 + ((msec / 60000 + sec / 60.0 + minute) / 60.0 + hr) / 24.0 // ut in days
  // # - 0.5*sgn(100.0*year + mon - 190002.5) + 0.5;
  ;
}

function jday(year, mon, day, hr, minute, sec, msec) {
  if (year instanceof Date) {
    var date = year;
    return jdayInternal(date.getUTCFullYear(), date.getUTCMonth() + 1, // Note, this function requires months in range 1-12.
    date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  }

  return jdayInternal(year, mon, day, hr, minute, sec, msec);
}
/* -----------------------------------------------------------------------------
 *
 *                           procedure invjday
 *
 *  this procedure finds the year, month, day, hour, minute and second
 *  given the julian date. tu can be ut1, tdt, tdb, etc.
 *
 *  algorithm     : set up starting values
 *                  find leap year - use 1900 because 2000 is a leap year
 *                  find the elapsed days through the year in a loop
 *                  call routine to find each individual value
 *
 *  author        : david vallado                  719-573-2600    1 mar 2001
 *
 *  inputs          description                    range / units
 *    jd          - julian date                    days from 4713 bc
 *
 *  outputs       :
 *    year        - year                           1900 .. 2100
 *    mon         - month                          1 .. 12
 *    day         - day                            1 .. 28,29,30,31
 *    hr          - hour                           0 .. 23
 *    min         - minute                         0 .. 59
 *    sec         - second                         0.0 .. 59.999
 *
 *  locals        :
 *    days        - day of year plus fractional
 *                  portion of a day               days
 *    tu          - julian centuries from 0 h
 *                  jan 0, 1900
 *    temp        - temporary double values
 *    leapyrs     - number of leap years from 1900
 *
 *  coupling      :
 *    days2mdhms  - finds month, day, hour, minute and second given days and year
 *
 *  references    :
 *    vallado       2007, 208, alg 22, ex 3-13
 * --------------------------------------------------------------------------- */

function invjday(jd, asArray) {
  // --------------- find year and days of the year -
  var temp = jd - 2415019.5;
  var tu = temp / 365.25;
  var year = 1900 + Math.floor(tu);
  var leapyrs = Math.floor((year - 1901) * 0.25); // optional nudge by 8.64x10-7 sec to get even outputs

  var days = temp - ((year - 1900) * 365.0 + leapyrs) + 0.00000000001; // ------------ check for case of beginning of a year -----------

  if (days < 1.0) {
    year -= 1;
    leapyrs = Math.floor((year - 1901) * 0.25);
    days = temp - ((year - 1900) * 365.0 + leapyrs);
  } // ----------------- find remaing data  -------------------------


  var mdhms = days2mdhms(year, days);
  var mon = mdhms.mon,
      day = mdhms.day,
      hr = mdhms.hr,
      minute = mdhms.minute;
  var sec = mdhms.sec - 0.00000086400;

  if (asArray) {
    return [year, mon, day, hr, minute, Math.floor(sec)];
  }

  return new Date(Date.UTC(year, mon - 1, day, hr, minute, Math.floor(sec)));
}

/* -----------------------------------------------------------------------------
 *
 *                           procedure dpper
 *
 *  this procedure provides deep space long period periodic contributions
 *    to the mean elements.  by design, these periodics are zero at epoch.
 *    this used to be dscom which included initialization, but it's really a
 *    recurring function.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    e3          -
 *    ee2         -
 *    peo         -
 *    pgho        -
 *    pho         -
 *    pinco       -
 *    plo         -
 *    se2 , se3 , sgh2, sgh3, sgh4, sh2, sh3, si2, si3, sl2, sl3, sl4 -
 *    t           -
 *    xh2, xh3, xi2, xi3, xl2, xl3, xl4 -
 *    zmol        -
 *    zmos        -
 *    ep          - eccentricity                           0.0 - 1.0
 *    inclo       - inclination - needed for lyddane modification
 *    nodep       - right ascension of ascending node
 *    argpp       - argument of perigee
 *    mp          - mean anomaly
 *
 *  outputs       :
 *    ep          - eccentricity                           0.0 - 1.0
 *    inclp       - inclination
 *    nodep        - right ascension of ascending node
 *    argpp       - argument of perigee
 *    mp          - mean anomaly
 *
 *  locals        :
 *    alfdp       -
 *    betdp       -
 *    cosip  , sinip  , cosop  , sinop  ,
 *    dalf        -
 *    dbet        -
 *    dls         -
 *    f2, f3      -
 *    pe          -
 *    pgh         -
 *    ph          -
 *    pinc        -
 *    pl          -
 *    sel   , ses   , sghl  , sghs  , shl   , shs   , sil   , sinzf , sis   ,
 *    sll   , sls
 *    xls         -
 *    xnoh        -
 *    zf          -
 *    zm          -
 *
 *  coupling      :
 *    none.
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function dpper(satrec, options) {
  var e3 = satrec.e3,
      ee2 = satrec.ee2,
      peo = satrec.peo,
      pgho = satrec.pgho,
      pho = satrec.pho,
      pinco = satrec.pinco,
      plo = satrec.plo,
      se2 = satrec.se2,
      se3 = satrec.se3,
      sgh2 = satrec.sgh2,
      sgh3 = satrec.sgh3,
      sgh4 = satrec.sgh4,
      sh2 = satrec.sh2,
      sh3 = satrec.sh3,
      si2 = satrec.si2,
      si3 = satrec.si3,
      sl2 = satrec.sl2,
      sl3 = satrec.sl3,
      sl4 = satrec.sl4,
      t = satrec.t,
      xgh2 = satrec.xgh2,
      xgh3 = satrec.xgh3,
      xgh4 = satrec.xgh4,
      xh2 = satrec.xh2,
      xh3 = satrec.xh3,
      xi2 = satrec.xi2,
      xi3 = satrec.xi3,
      xl2 = satrec.xl2,
      xl3 = satrec.xl3,
      xl4 = satrec.xl4,
      zmol = satrec.zmol,
      zmos = satrec.zmos;
  var init = options.init,
      opsmode = options.opsmode;
  var ep = options.ep,
      inclp = options.inclp,
      nodep = options.nodep,
      argpp = options.argpp,
      mp = options.mp; // Copy satellite attributes into local variables for convenience
  // and symmetry in writing formulae.

  var alfdp;
  var betdp;
  var cosip;
  var sinip;
  var cosop;
  var sinop;
  var dalf;
  var dbet;
  var dls;
  var f2;
  var f3;
  var pe;
  var pgh;
  var ph;
  var pinc;
  var pl;
  var sinzf;
  var xls;
  var xnoh;
  var zf;
  var zm; //  ---------------------- constants -----------------------------

  var zns = 1.19459e-5;
  var zes = 0.01675;
  var znl = 1.5835218e-4;
  var zel = 0.05490; //  --------------- calculate time varying periodics -----------

  zm = zmos + zns * t; // be sure that the initial call has time set to zero

  if (init === 'y') {
    zm = zmos;
  }

  zf = zm + 2.0 * zes * Math.sin(zm);
  sinzf = Math.sin(zf);
  f2 = 0.5 * sinzf * sinzf - 0.25;
  f3 = -0.5 * sinzf * Math.cos(zf);
  var ses = se2 * f2 + se3 * f3;
  var sis = si2 * f2 + si3 * f3;
  var sls = sl2 * f2 + sl3 * f3 + sl4 * sinzf;
  var sghs = sgh2 * f2 + sgh3 * f3 + sgh4 * sinzf;
  var shs = sh2 * f2 + sh3 * f3;
  zm = zmol + znl * t;

  if (init === 'y') {
    zm = zmol;
  }

  zf = zm + 2.0 * zel * Math.sin(zm);
  sinzf = Math.sin(zf);
  f2 = 0.5 * sinzf * sinzf - 0.25;
  f3 = -0.5 * sinzf * Math.cos(zf);
  var sel = ee2 * f2 + e3 * f3;
  var sil = xi2 * f2 + xi3 * f3;
  var sll = xl2 * f2 + xl3 * f3 + xl4 * sinzf;
  var sghl = xgh2 * f2 + xgh3 * f3 + xgh4 * sinzf;
  var shll = xh2 * f2 + xh3 * f3;
  pe = ses + sel;
  pinc = sis + sil;
  pl = sls + sll;
  pgh = sghs + sghl;
  ph = shs + shll;

  if (init === 'n') {
    pe -= peo;
    pinc -= pinco;
    pl -= plo;
    pgh -= pgho;
    ph -= pho;
    inclp += pinc;
    ep += pe;
    sinip = Math.sin(inclp);
    cosip = Math.cos(inclp);
    /* ----------------- apply periodics directly ------------ */
    // sgp4fix for lyddane choice
    // strn3 used original inclination - this is technically feasible
    // gsfc used perturbed inclination - also technically feasible
    // probably best to readjust the 0.2 limit value and limit discontinuity
    // 0.2 rad = 11.45916 deg
    // use next line for original strn3 approach and original inclination
    // if (inclo >= 0.2)
    // use next line for gsfc version and perturbed inclination

    if (inclp >= 0.2) {
      ph /= sinip;
      pgh -= cosip * ph;
      argpp += pgh;
      nodep += ph;
      mp += pl;
    } else {
      //  ---- apply periodics with lyddane modification ----
      sinop = Math.sin(nodep);
      cosop = Math.cos(nodep);
      alfdp = sinip * sinop;
      betdp = sinip * cosop;
      dalf = ph * cosop + pinc * cosip * sinop;
      dbet = -ph * sinop + pinc * cosip * cosop;
      alfdp += dalf;
      betdp += dbet;
      nodep %= twoPi; //  sgp4fix for afspc written intrinsic functions
      //  nodep used without a trigonometric function ahead

      if (nodep < 0.0 && opsmode === 'a') {
        nodep += twoPi;
      }

      xls = mp + argpp + cosip * nodep;
      dls = pl + pgh - pinc * nodep * sinip;
      xls += dls;
      xnoh = nodep;
      nodep = Math.atan2(alfdp, betdp); //  sgp4fix for afspc written intrinsic functions
      //  nodep used without a trigonometric function ahead

      if (nodep < 0.0 && opsmode === 'a') {
        nodep += twoPi;
      }

      if (Math.abs(xnoh - nodep) > pi) {
        if (nodep < xnoh) {
          nodep += twoPi;
        } else {
          nodep -= twoPi;
        }
      }

      mp += pl;
      argpp = xls - mp - cosip * nodep;
    }
  }

  return {
    ep: ep,
    inclp: inclp,
    nodep: nodep,
    argpp: argpp,
    mp: mp
  };
}

/*-----------------------------------------------------------------------------
 *
 *                           procedure dscom
 *
 *  this procedure provides deep space common items used by both the secular
 *    and periodics subroutines.  input is provided as shown. this routine
 *    used to be called dpper, but the functions inside weren't well organized.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    epoch       -
 *    ep          - eccentricity
 *    argpp       - argument of perigee
 *    tc          -
 *    inclp       - inclination
 *    nodep       - right ascension of ascending node
 *    np          - mean motion
 *
 *  outputs       :
 *    sinim  , cosim  , sinomm , cosomm , snodm  , cnodm
 *    day         -
 *    e3          -
 *    ee2         -
 *    em          - eccentricity
 *    emsq        - eccentricity squared
 *    gam         -
 *    peo         -
 *    pgho        -
 *    pho         -
 *    pinco       -
 *    plo         -
 *    rtemsq      -
 *    se2, se3         -
 *    sgh2, sgh3, sgh4        -
 *    sh2, sh3, si2, si3, sl2, sl3, sl4         -
 *    s1, s2, s3, s4, s5, s6, s7          -
 *    ss1, ss2, ss3, ss4, ss5, ss6, ss7, sz1, sz2, sz3         -
 *    sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33        -
 *    xgh2, xgh3, xgh4, xh2, xh3, xi2, xi3, xl2, xl3, xl4         -
 *    nm          - mean motion
 *    z1, z2, z3, z11, z12, z13, z21, z22, z23, z31, z32, z33         -
 *    zmol        -
 *    zmos        -
 *
 *  locals        :
 *    a1, a2, a3, a4, a5, a6, a7, a8, a9, a10         -
 *    betasq      -
 *    cc          -
 *    ctem, stem        -
 *    x1, x2, x3, x4, x5, x6, x7, x8          -
 *    xnodce      -
 *    xnoi        -
 *    zcosg  , zsing  , zcosgl , zsingl , zcosh  , zsinh  , zcoshl , zsinhl ,
 *    zcosi  , zsini  , zcosil , zsinil ,
 *    zx          -
 *    zy          -
 *
 *  coupling      :
 *    none.
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function dscom(options) {
  var epoch = options.epoch,
      ep = options.ep,
      argpp = options.argpp,
      tc = options.tc,
      inclp = options.inclp,
      nodep = options.nodep,
      np = options.np;
  var a1;
  var a2;
  var a3;
  var a4;
  var a5;
  var a6;
  var a7;
  var a8;
  var a9;
  var a10;
  var cc;
  var x1;
  var x2;
  var x3;
  var x4;
  var x5;
  var x6;
  var x7;
  var x8;
  var zcosg;
  var zsing;
  var zcosh;
  var zsinh;
  var zcosi;
  var zsini;
  var ss1;
  var ss2;
  var ss3;
  var ss4;
  var ss5;
  var ss6;
  var ss7;
  var sz1;
  var sz2;
  var sz3;
  var sz11;
  var sz12;
  var sz13;
  var sz21;
  var sz22;
  var sz23;
  var sz31;
  var sz32;
  var sz33;
  var s1;
  var s2;
  var s3;
  var s4;
  var s5;
  var s6;
  var s7;
  var z1;
  var z2;
  var z3;
  var z11;
  var z12;
  var z13;
  var z21;
  var z22;
  var z23;
  var z31;
  var z32;
  var z33; // -------------------------- constants -------------------------

  var zes = 0.01675;
  var zel = 0.05490;
  var c1ss = 2.9864797e-6;
  var c1l = 4.7968065e-7;
  var zsinis = 0.39785416;
  var zcosis = 0.91744867;
  var zcosgs = 0.1945905;
  var zsings = -0.98088458; //  --------------------- local variables ------------------------

  var nm = np;
  var em = ep;
  var snodm = Math.sin(nodep);
  var cnodm = Math.cos(nodep);
  var sinomm = Math.sin(argpp);
  var cosomm = Math.cos(argpp);
  var sinim = Math.sin(inclp);
  var cosim = Math.cos(inclp);
  var emsq = em * em;
  var betasq = 1.0 - emsq;
  var rtemsq = Math.sqrt(betasq); //  ----------------- initialize lunar solar terms ---------------

  var peo = 0.0;
  var pinco = 0.0;
  var plo = 0.0;
  var pgho = 0.0;
  var pho = 0.0;
  var day = epoch + 18261.5 + tc / 1440.0;
  var xnodce = (4.5236020 - 9.2422029e-4 * day) % twoPi;
  var stem = Math.sin(xnodce);
  var ctem = Math.cos(xnodce);
  var zcosil = 0.91375164 - 0.03568096 * ctem;
  var zsinil = Math.sqrt(1.0 - zcosil * zcosil);
  var zsinhl = 0.089683511 * stem / zsinil;
  var zcoshl = Math.sqrt(1.0 - zsinhl * zsinhl);
  var gam = 5.8351514 + 0.0019443680 * day;
  var zx = 0.39785416 * stem / zsinil;
  var zy = zcoshl * ctem + 0.91744867 * zsinhl * stem;
  zx = Math.atan2(zx, zy);
  zx += gam - xnodce;
  var zcosgl = Math.cos(zx);
  var zsingl = Math.sin(zx); //  ------------------------- do solar terms ---------------------

  zcosg = zcosgs;
  zsing = zsings;
  zcosi = zcosis;
  zsini = zsinis;
  zcosh = cnodm;
  zsinh = snodm;
  cc = c1ss;
  var xnoi = 1.0 / nm;
  var lsflg = 0;

  while (lsflg < 2) {
    lsflg += 1;
    a1 = zcosg * zcosh + zsing * zcosi * zsinh;
    a3 = -zsing * zcosh + zcosg * zcosi * zsinh;
    a7 = -zcosg * zsinh + zsing * zcosi * zcosh;
    a8 = zsing * zsini;
    a9 = zsing * zsinh + zcosg * zcosi * zcosh;
    a10 = zcosg * zsini;
    a2 = cosim * a7 + sinim * a8;
    a4 = cosim * a9 + sinim * a10;
    a5 = -sinim * a7 + cosim * a8;
    a6 = -sinim * a9 + cosim * a10;
    x1 = a1 * cosomm + a2 * sinomm;
    x2 = a3 * cosomm + a4 * sinomm;
    x3 = -a1 * sinomm + a2 * cosomm;
    x4 = -a3 * sinomm + a4 * cosomm;
    x5 = a5 * sinomm;
    x6 = a6 * sinomm;
    x7 = a5 * cosomm;
    x8 = a6 * cosomm;
    z31 = 12.0 * x1 * x1 - 3.0 * x3 * x3;
    z32 = 24.0 * x1 * x2 - 6.0 * x3 * x4;
    z33 = 12.0 * x2 * x2 - 3.0 * x4 * x4;
    z1 = 3.0 * (a1 * a1 + a2 * a2) + z31 * emsq;
    z2 = 6.0 * (a1 * a3 + a2 * a4) + z32 * emsq;
    z3 = 3.0 * (a3 * a3 + a4 * a4) + z33 * emsq;
    z11 = -6.0 * a1 * a5 + emsq * (-24.0 * x1 * x7 - 6.0 * x3 * x5);
    z12 = -6.0 * (a1 * a6 + a3 * a5) + emsq * (-24.0 * (x2 * x7 + x1 * x8) + -6.0 * (x3 * x6 + x4 * x5));
    z13 = -6.0 * a3 * a6 + emsq * (-24.0 * x2 * x8 - 6.0 * x4 * x6);
    z21 = 6.0 * a2 * a5 + emsq * (24.0 * x1 * x5 - 6.0 * x3 * x7);
    z22 = 6.0 * (a4 * a5 + a2 * a6) + emsq * (24.0 * (x2 * x5 + x1 * x6) - 6.0 * (x4 * x7 + x3 * x8));
    z23 = 6.0 * a4 * a6 + emsq * (24.0 * x2 * x6 - 6.0 * x4 * x8);
    z1 = z1 + z1 + betasq * z31;
    z2 = z2 + z2 + betasq * z32;
    z3 = z3 + z3 + betasq * z33;
    s3 = cc * xnoi;
    s2 = -0.5 * s3 / rtemsq;
    s4 = s3 * rtemsq;
    s1 = -15.0 * em * s4;
    s5 = x1 * x3 + x2 * x4;
    s6 = x2 * x3 + x1 * x4;
    s7 = x2 * x4 - x1 * x3; //  ----------------------- do lunar terms -------------------

    if (lsflg === 1) {
      ss1 = s1;
      ss2 = s2;
      ss3 = s3;
      ss4 = s4;
      ss5 = s5;
      ss6 = s6;
      ss7 = s7;
      sz1 = z1;
      sz2 = z2;
      sz3 = z3;
      sz11 = z11;
      sz12 = z12;
      sz13 = z13;
      sz21 = z21;
      sz22 = z22;
      sz23 = z23;
      sz31 = z31;
      sz32 = z32;
      sz33 = z33;
      zcosg = zcosgl;
      zsing = zsingl;
      zcosi = zcosil;
      zsini = zsinil;
      zcosh = zcoshl * cnodm + zsinhl * snodm;
      zsinh = snodm * zcoshl - cnodm * zsinhl;
      cc = c1l;
    }
  }

  var zmol = (4.7199672 + (0.22997150 * day - gam)) % twoPi;
  var zmos = (6.2565837 + 0.017201977 * day) % twoPi; //  ------------------------ do solar terms ----------------------

  var se2 = 2.0 * ss1 * ss6;
  var se3 = 2.0 * ss1 * ss7;
  var si2 = 2.0 * ss2 * sz12;
  var si3 = 2.0 * ss2 * (sz13 - sz11);
  var sl2 = -2.0 * ss3 * sz2;
  var sl3 = -2.0 * ss3 * (sz3 - sz1);
  var sl4 = -2.0 * ss3 * (-21.0 - 9.0 * emsq) * zes;
  var sgh2 = 2.0 * ss4 * sz32;
  var sgh3 = 2.0 * ss4 * (sz33 - sz31);
  var sgh4 = -18.0 * ss4 * zes;
  var sh2 = -2.0 * ss2 * sz22;
  var sh3 = -2.0 * ss2 * (sz23 - sz21); //  ------------------------ do lunar terms ----------------------

  var ee2 = 2.0 * s1 * s6;
  var e3 = 2.0 * s1 * s7;
  var xi2 = 2.0 * s2 * z12;
  var xi3 = 2.0 * s2 * (z13 - z11);
  var xl2 = -2.0 * s3 * z2;
  var xl3 = -2.0 * s3 * (z3 - z1);
  var xl4 = -2.0 * s3 * (-21.0 - 9.0 * emsq) * zel;
  var xgh2 = 2.0 * s4 * z32;
  var xgh3 = 2.0 * s4 * (z33 - z31);
  var xgh4 = -18.0 * s4 * zel;
  var xh2 = -2.0 * s2 * z22;
  var xh3 = -2.0 * s2 * (z23 - z21);
  return {
    snodm: snodm,
    cnodm: cnodm,
    sinim: sinim,
    cosim: cosim,
    sinomm: sinomm,
    cosomm: cosomm,
    day: day,
    e3: e3,
    ee2: ee2,
    em: em,
    emsq: emsq,
    gam: gam,
    peo: peo,
    pgho: pgho,
    pho: pho,
    pinco: pinco,
    plo: plo,
    rtemsq: rtemsq,
    se2: se2,
    se3: se3,
    sgh2: sgh2,
    sgh3: sgh3,
    sgh4: sgh4,
    sh2: sh2,
    sh3: sh3,
    si2: si2,
    si3: si3,
    sl2: sl2,
    sl3: sl3,
    sl4: sl4,
    s1: s1,
    s2: s2,
    s3: s3,
    s4: s4,
    s5: s5,
    s6: s6,
    s7: s7,
    ss1: ss1,
    ss2: ss2,
    ss3: ss3,
    ss4: ss4,
    ss5: ss5,
    ss6: ss6,
    ss7: ss7,
    sz1: sz1,
    sz2: sz2,
    sz3: sz3,
    sz11: sz11,
    sz12: sz12,
    sz13: sz13,
    sz21: sz21,
    sz22: sz22,
    sz23: sz23,
    sz31: sz31,
    sz32: sz32,
    sz33: sz33,
    xgh2: xgh2,
    xgh3: xgh3,
    xgh4: xgh4,
    xh2: xh2,
    xh3: xh3,
    xi2: xi2,
    xi3: xi3,
    xl2: xl2,
    xl3: xl3,
    xl4: xl4,
    nm: nm,
    z1: z1,
    z2: z2,
    z3: z3,
    z11: z11,
    z12: z12,
    z13: z13,
    z21: z21,
    z22: z22,
    z23: z23,
    z31: z31,
    z32: z32,
    z33: z33,
    zmol: zmol,
    zmos: zmos
  };
}

/*-----------------------------------------------------------------------------
 *
 *                           procedure dsinit
 *
 *  this procedure provides deep space contributions to mean motion dot due
 *    to geopotential resonance with half day and one day orbits.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    cosim, sinim-
 *    emsq        - eccentricity squared
 *    argpo       - argument of perigee
 *    s1, s2, s3, s4, s5      -
 *    ss1, ss2, ss3, ss4, ss5 -
 *    sz1, sz3, sz11, sz13, sz21, sz23, sz31, sz33 -
 *    t           - time
 *    tc          -
 *    gsto        - greenwich sidereal time                   rad
 *    mo          - mean anomaly
 *    mdot        - mean anomaly dot (rate)
 *    no          - mean motion
 *    nodeo       - right ascension of ascending node
 *    nodedot     - right ascension of ascending node dot (rate)
 *    xpidot      -
 *    z1, z3, z11, z13, z21, z23, z31, z33 -
 *    eccm        - eccentricity
 *    argpm       - argument of perigee
 *    inclm       - inclination
 *    mm          - mean anomaly
 *    xn          - mean motion
 *    nodem       - right ascension of ascending node
 *
 *  outputs       :
 *    em          - eccentricity
 *    argpm       - argument of perigee
 *    inclm       - inclination
 *    mm          - mean anomaly
 *    nm          - mean motion
 *    nodem       - right ascension of ascending node
 *    irez        - flag for resonance           0-none, 1-one day, 2-half day
 *    atime       -
 *    d2201, d2211, d3210, d3222, d4410, d4422, d5220, d5232, d5421, d5433    -
 *    dedt        -
 *    didt        -
 *    dmdt        -
 *    dndt        -
 *    dnodt       -
 *    domdt       -
 *    del1, del2, del3        -
 *    ses  , sghl , sghs , sgs  , shl  , shs  , sis  , sls
 *    theta       -
 *    xfact       -
 *    xlamo       -
 *    xli         -
 *    xni
 *
 *  locals        :
 *    ainv2       -
 *    aonv        -
 *    cosisq      -
 *    eoc         -
 *    f220, f221, f311, f321, f322, f330, f441, f442, f522, f523, f542, f543  -
 *    g200, g201, g211, g300, g310, g322, g410, g422, g520, g521, g532, g533  -
 *    sini2       -
 *    temp        -
 *    temp1       -
 *    theta       -
 *    xno2        -
 *
 *  coupling      :
 *    getgravconst
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function dsinit(options) {
  var cosim = options.cosim,
      argpo = options.argpo,
      s1 = options.s1,
      s2 = options.s2,
      s3 = options.s3,
      s4 = options.s4,
      s5 = options.s5,
      sinim = options.sinim,
      ss1 = options.ss1,
      ss2 = options.ss2,
      ss3 = options.ss3,
      ss4 = options.ss4,
      ss5 = options.ss5,
      sz1 = options.sz1,
      sz3 = options.sz3,
      sz11 = options.sz11,
      sz13 = options.sz13,
      sz21 = options.sz21,
      sz23 = options.sz23,
      sz31 = options.sz31,
      sz33 = options.sz33,
      t = options.t,
      tc = options.tc,
      gsto = options.gsto,
      mo = options.mo,
      mdot = options.mdot,
      no = options.no,
      nodeo = options.nodeo,
      nodedot = options.nodedot,
      xpidot = options.xpidot,
      z1 = options.z1,
      z3 = options.z3,
      z11 = options.z11,
      z13 = options.z13,
      z21 = options.z21,
      z23 = options.z23,
      z31 = options.z31,
      z33 = options.z33,
      ecco = options.ecco,
      eccsq = options.eccsq;
  var emsq = options.emsq,
      em = options.em,
      argpm = options.argpm,
      inclm = options.inclm,
      mm = options.mm,
      nm = options.nm,
      nodem = options.nodem,
      irez = options.irez,
      atime = options.atime,
      d2201 = options.d2201,
      d2211 = options.d2211,
      d3210 = options.d3210,
      d3222 = options.d3222,
      d4410 = options.d4410,
      d4422 = options.d4422,
      d5220 = options.d5220,
      d5232 = options.d5232,
      d5421 = options.d5421,
      d5433 = options.d5433,
      dedt = options.dedt,
      didt = options.didt,
      dmdt = options.dmdt,
      dnodt = options.dnodt,
      domdt = options.domdt,
      del1 = options.del1,
      del2 = options.del2,
      del3 = options.del3,
      xfact = options.xfact,
      xlamo = options.xlamo,
      xli = options.xli,
      xni = options.xni;
  var f220;
  var f221;
  var f311;
  var f321;
  var f322;
  var f330;
  var f441;
  var f442;
  var f522;
  var f523;
  var f542;
  var f543;
  var g200;
  var g201;
  var g211;
  var g300;
  var g310;
  var g322;
  var g410;
  var g422;
  var g520;
  var g521;
  var g532;
  var g533;
  var sini2;
  var temp;
  var temp1;
  var xno2;
  var ainv2;
  var aonv;
  var cosisq;
  var eoc;
  var q22 = 1.7891679e-6;
  var q31 = 2.1460748e-6;
  var q33 = 2.2123015e-7;
  var root22 = 1.7891679e-6;
  var root44 = 7.3636953e-9;
  var root54 = 2.1765803e-9;
  var rptim = 4.37526908801129966e-3; // equates to 7.29211514668855e-5 rad/sec

  var root32 = 3.7393792e-7;
  var root52 = 1.1428639e-7;
  var znl = 1.5835218e-4;
  var zns = 1.19459e-5; // -------------------- deep space initialization ------------

  irez = 0;

  if (nm < 0.0052359877 && nm > 0.0034906585) {
    irez = 1;
  }

  if (nm >= 8.26e-3 && nm <= 9.24e-3 && em >= 0.5) {
    irez = 2;
  } // ------------------------ do solar terms -------------------


  var ses = ss1 * zns * ss5;
  var sis = ss2 * zns * (sz11 + sz13);
  var sls = -zns * ss3 * (sz1 + sz3 - 14.0 - 6.0 * emsq);
  var sghs = ss4 * zns * (sz31 + sz33 - 6.0);
  var shs = -zns * ss2 * (sz21 + sz23); // sgp4fix for 180 deg incl

  if (inclm < 5.2359877e-2 || inclm > pi - 5.2359877e-2) {
    shs = 0.0;
  }

  if (sinim !== 0.0) {
    shs /= sinim;
  }

  var sgs = sghs - cosim * shs; // ------------------------- do lunar terms ------------------

  dedt = ses + s1 * znl * s5;
  didt = sis + s2 * znl * (z11 + z13);
  dmdt = sls - znl * s3 * (z1 + z3 - 14.0 - 6.0 * emsq);
  var sghl = s4 * znl * (z31 + z33 - 6.0);
  var shll = -znl * s2 * (z21 + z23); // sgp4fix for 180 deg incl

  if (inclm < 5.2359877e-2 || inclm > pi - 5.2359877e-2) {
    shll = 0.0;
  }

  domdt = sgs + sghl;
  dnodt = shs;

  if (sinim !== 0.0) {
    domdt -= cosim / sinim * shll;
    dnodt += shll / sinim;
  } // ----------- calculate deep space resonance effects --------


  var dndt = 0.0;
  var theta = (gsto + tc * rptim) % twoPi;
  em += dedt * t;
  inclm += didt * t;
  argpm += domdt * t;
  nodem += dnodt * t;
  mm += dmdt * t; // sgp4fix for negative inclinations
  // the following if statement should be commented out
  // if (inclm < 0.0)
  // {
  //   inclm  = -inclm;
  //   argpm  = argpm - pi;
  //   nodem = nodem + pi;
  // }
  // -------------- initialize the resonance terms -------------

  if (irez !== 0) {
    aonv = Math.pow(nm / xke, x2o3); // ---------- geopotential resonance for 12 hour orbits ------

    if (irez === 2) {
      cosisq = cosim * cosim;
      var emo = em;
      em = ecco;
      var emsqo = emsq;
      emsq = eccsq;
      eoc = em * emsq;
      g201 = -0.306 - (em - 0.64) * 0.440;

      if (em <= 0.65) {
        g211 = 3.616 - 13.2470 * em + 16.2900 * emsq;
        g310 = -19.302 + 117.3900 * em - 228.4190 * emsq + 156.5910 * eoc;
        g322 = -18.9068 + 109.7927 * em - 214.6334 * emsq + 146.5816 * eoc;
        g410 = -41.122 + 242.6940 * em - 471.0940 * emsq + 313.9530 * eoc;
        g422 = -146.407 + 841.8800 * em - 1629.014 * emsq + 1083.4350 * eoc;
        g520 = -532.114 + 3017.977 * em - 5740.032 * emsq + 3708.2760 * eoc;
      } else {
        g211 = -72.099 + 331.819 * em - 508.738 * emsq + 266.724 * eoc;
        g310 = -346.844 + 1582.851 * em - 2415.925 * emsq + 1246.113 * eoc;
        g322 = -342.585 + 1554.908 * em - 2366.899 * emsq + 1215.972 * eoc;
        g410 = -1052.797 + 4758.686 * em - 7193.992 * emsq + 3651.957 * eoc;
        g422 = -3581.690 + 16178.110 * em - 24462.770 * emsq + 12422.520 * eoc;

        if (em > 0.715) {
          g520 = -5149.66 + 29936.92 * em - 54087.36 * emsq + 31324.56 * eoc;
        } else {
          g520 = 1464.74 - 4664.75 * em + 3763.64 * emsq;
        }
      }

      if (em < 0.7) {
        g533 = -919.22770 + 4988.6100 * em - 9064.7700 * emsq + 5542.21 * eoc;
        g521 = -822.71072 + 4568.6173 * em - 8491.4146 * emsq + 5337.524 * eoc;
        g532 = -853.66600 + 4690.2500 * em - 8624.7700 * emsq + 5341.4 * eoc;
      } else {
        g533 = -37995.780 + 161616.52 * em - 229838.20 * emsq + 109377.94 * eoc;
        g521 = -51752.104 + 218913.95 * em - 309468.16 * emsq + 146349.42 * eoc;
        g532 = -40023.880 + 170470.89 * em - 242699.48 * emsq + 115605.82 * eoc;
      }

      sini2 = sinim * sinim;
      f220 = 0.75 * (1.0 + 2.0 * cosim + cosisq);
      f221 = 1.5 * sini2;
      f321 = 1.875 * sinim * (1.0 - 2.0 * cosim - 3.0 * cosisq);
      f322 = -1.875 * sinim * (1.0 + 2.0 * cosim - 3.0 * cosisq);
      f441 = 35.0 * sini2 * f220;
      f442 = 39.3750 * sini2 * sini2;
      f522 = 9.84375 * sinim * (sini2 * (1.0 - 2.0 * cosim - 5.0 * cosisq) + 0.33333333 * (-2.0 + 4.0 * cosim + 6.0 * cosisq));
      f523 = sinim * (4.92187512 * sini2 * (-2.0 - 4.0 * cosim + 10.0 * cosisq) + 6.56250012 * (1.0 + 2.0 * cosim - 3.0 * cosisq));
      f542 = 29.53125 * sinim * (2.0 - 8.0 * cosim + cosisq * (-12.0 + 8.0 * cosim + 10.0 * cosisq));
      f543 = 29.53125 * sinim * (-2.0 - 8.0 * cosim + cosisq * (12.0 + 8.0 * cosim - 10.0 * cosisq));
      xno2 = nm * nm;
      ainv2 = aonv * aonv;
      temp1 = 3.0 * xno2 * ainv2;
      temp = temp1 * root22;
      d2201 = temp * f220 * g201;
      d2211 = temp * f221 * g211;
      temp1 *= aonv;
      temp = temp1 * root32;
      d3210 = temp * f321 * g310;
      d3222 = temp * f322 * g322;
      temp1 *= aonv;
      temp = 2.0 * temp1 * root44;
      d4410 = temp * f441 * g410;
      d4422 = temp * f442 * g422;
      temp1 *= aonv;
      temp = temp1 * root52;
      d5220 = temp * f522 * g520;
      d5232 = temp * f523 * g532;
      temp = 2.0 * temp1 * root54;
      d5421 = temp * f542 * g521;
      d5433 = temp * f543 * g533;
      xlamo = (mo + nodeo + nodeo - (theta + theta)) % twoPi;
      xfact = mdot + dmdt + 2.0 * (nodedot + dnodt - rptim) - no;
      em = emo;
      emsq = emsqo;
    } //  ---------------- synchronous resonance terms --------------


    if (irez === 1) {
      g200 = 1.0 + emsq * (-2.5 + 0.8125 * emsq);
      g310 = 1.0 + 2.0 * emsq;
      g300 = 1.0 + emsq * (-6.0 + 6.60937 * emsq);
      f220 = 0.75 * (1.0 + cosim) * (1.0 + cosim);
      f311 = 0.9375 * sinim * sinim * (1.0 + 3.0 * cosim) - 0.75 * (1.0 + cosim);
      f330 = 1.0 + cosim;
      f330 *= 1.875 * f330 * f330;
      del1 = 3.0 * nm * nm * aonv * aonv;
      del2 = 2.0 * del1 * f220 * g200 * q22;
      del3 = 3.0 * del1 * f330 * g300 * q33 * aonv;
      del1 = del1 * f311 * g310 * q31 * aonv;
      xlamo = (mo + nodeo + argpo - theta) % twoPi;
      xfact = mdot + xpidot + dmdt + domdt + dnodt - (no + rptim);
    } //  ------------ for sgp4, initialize the integrator ----------


    xli = xlamo;
    xni = no;
    atime = 0.0;
    nm = no + dndt;
  }

  return {
    em: em,
    argpm: argpm,
    inclm: inclm,
    mm: mm,
    nm: nm,
    nodem: nodem,
    irez: irez,
    atime: atime,
    d2201: d2201,
    d2211: d2211,
    d3210: d3210,
    d3222: d3222,
    d4410: d4410,
    d4422: d4422,
    d5220: d5220,
    d5232: d5232,
    d5421: d5421,
    d5433: d5433,
    dedt: dedt,
    didt: didt,
    dmdt: dmdt,
    dndt: dndt,
    dnodt: dnodt,
    domdt: domdt,
    del1: del1,
    del2: del2,
    del3: del3,
    xfact: xfact,
    xlamo: xlamo,
    xli: xli,
    xni: xni
  };
}

/* -----------------------------------------------------------------------------
 *
 *                           function gstime
 *
 *  this function finds the greenwich sidereal time.
 *
 *  author        : david vallado                  719-573-2600    1 mar 2001
 *
 *  inputs          description                    range / units
 *    jdut1       - julian date in ut1             days from 4713 bc
 *
 *  outputs       :
 *    gstime      - greenwich sidereal time        0 to 2pi rad
 *
 *  locals        :
 *    temp        - temporary variable for doubles   rad
 *    tut1        - julian centuries from the
 *                  jan 1, 2000 12 h epoch (ut1)
 *
 *  coupling      :
 *    none
 *
 *  references    :
 *    vallado       2004, 191, eq 3-45
 * --------------------------------------------------------------------------- */

function gstimeInternal(jdut1) {
  var tut1 = (jdut1 - 2451545.0) / 36525.0;
  var temp = -6.2e-6 * tut1 * tut1 * tut1 + 0.093104 * tut1 * tut1 + (876600.0 * 3600 + 8640184.812866) * tut1 + 67310.54841; // # sec

  temp = temp * deg2rad / 240.0 % twoPi; // 360/86400 = 1/240, to deg, to rad
  //  ------------------------ check quadrants ---------------------

  if (temp < 0.0) {
    temp += twoPi;
  }

  return temp;
}

function gstime() {
  if ((arguments.length <= 0 ? undefined : arguments[0]) instanceof Date || arguments.length > 1) {
    return gstimeInternal(jday.apply(void 0, arguments));
  }

  return gstimeInternal.apply(void 0, arguments);
}

/*-----------------------------------------------------------------------------
 *
 *                           procedure initl
 *
 *  this procedure initializes the sgp4 propagator. all the initialization is
 *    consolidated here instead of having multiple loops inside other routines.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    ecco        - eccentricity                           0.0 - 1.0
 *    epoch       - epoch time in days from jan 0, 1950. 0 hr
 *    inclo       - inclination of satellite
 *    no          - mean motion of satellite
 *    satn        - satellite number
 *
 *  outputs       :
 *    ainv        - 1.0 / a
 *    ao          - semi major axis
 *    con41       -
 *    con42       - 1.0 - 5.0 cos(i)
 *    cosio       - cosine of inclination
 *    cosio2      - cosio squared
 *    eccsq       - eccentricity squared
 *    method      - flag for deep space                    'd', 'n'
 *    omeosq      - 1.0 - ecco * ecco
 *    posq        - semi-parameter squared
 *    rp          - radius of perigee
 *    rteosq      - square root of (1.0 - ecco*ecco)
 *    sinio       - sine of inclination
 *    gsto        - gst at time of observation               rad
 *    no          - mean motion of satellite
 *
 *  locals        :
 *    ak          -
 *    d1          -
 *    del         -
 *    adel        -
 *    po          -
 *
 *  coupling      :
 *    getgravconst
 *    gstime      - find greenwich sidereal time from the julian date
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function initl(options) {
  var ecco = options.ecco,
      epoch = options.epoch,
      inclo = options.inclo,
      opsmode = options.opsmode;
  var no = options.no; // sgp4fix use old way of finding gst
  // ----------------------- earth constants ---------------------
  // sgp4fix identify constants and allow alternate values
  // ------------- calculate auxillary epoch quantities ----------

  var eccsq = ecco * ecco;
  var omeosq = 1.0 - eccsq;
  var rteosq = Math.sqrt(omeosq);
  var cosio = Math.cos(inclo);
  var cosio2 = cosio * cosio; // ------------------ un-kozai the mean motion -----------------

  var ak = Math.pow(xke / no, x2o3);
  var d1 = 0.75 * j2 * (3.0 * cosio2 - 1.0) / (rteosq * omeosq);
  var delPrime = d1 / (ak * ak);
  var adel = ak * (1.0 - delPrime * delPrime - delPrime * (1.0 / 3.0 + 134.0 * delPrime * delPrime / 81.0));
  delPrime = d1 / (adel * adel);
  no /= 1.0 + delPrime;
  var ao = Math.pow(xke / no, x2o3);
  var sinio = Math.sin(inclo);
  var po = ao * omeosq;
  var con42 = 1.0 - 5.0 * cosio2;
  var con41 = -con42 - cosio2 - cosio2;
  var ainv = 1.0 / ao;
  var posq = po * po;
  var rp = ao * (1.0 - ecco);
  var method = 'n'; //  sgp4fix modern approach to finding sidereal time

  var gsto;

  if (opsmode === 'a') {
    //  sgp4fix use old way of finding gst
    //  count integer number of days from 0 jan 1970
    var ts70 = epoch - 7305.0;
    var ds70 = Math.floor(ts70 + 1.0e-8);
    var tfrac = ts70 - ds70; //  find greenwich location at epoch

    var c1 = 1.72027916940703639e-2;
    var thgr70 = 1.7321343856509374;
    var fk5r = 5.07551419432269442e-15;
    var c1p2p = c1 + twoPi;
    gsto = (thgr70 + c1 * ds70 + c1p2p * tfrac + ts70 * ts70 * fk5r) % twoPi;

    if (gsto < 0.0) {
      gsto += twoPi;
    }
  } else {
    gsto = gstime(epoch + 2433281.5);
  }

  return {
    no: no,
    method: method,
    ainv: ainv,
    ao: ao,
    con41: con41,
    con42: con42,
    cosio: cosio,
    cosio2: cosio2,
    eccsq: eccsq,
    omeosq: omeosq,
    posq: posq,
    rp: rp,
    rteosq: rteosq,
    sinio: sinio,
    gsto: gsto
  };
}

/*-----------------------------------------------------------------------------
 *
 *                           procedure dspace
 *
 *  this procedure provides deep space contributions to mean elements for
 *    perturbing third body.  these effects have been averaged over one
 *    revolution of the sun and moon.  for earth resonance effects, the
 *    effects have been averaged over no revolutions of the satellite.
 *    (mean motion)
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    d2201, d2211, d3210, d3222, d4410, d4422, d5220, d5232, d5421, d5433 -
 *    dedt        -
 *    del1, del2, del3  -
 *    didt        -
 *    dmdt        -
 *    dnodt       -
 *    domdt       -
 *    irez        - flag for resonance           0-none, 1-one day, 2-half day
 *    argpo       - argument of perigee
 *    argpdot     - argument of perigee dot (rate)
 *    t           - time
 *    tc          -
 *    gsto        - gst
 *    xfact       -
 *    xlamo       -
 *    no          - mean motion
 *    atime       -
 *    em          - eccentricity
 *    ft          -
 *    argpm       - argument of perigee
 *    inclm       - inclination
 *    xli         -
 *    mm          - mean anomaly
 *    xni         - mean motion
 *    nodem       - right ascension of ascending node
 *
 *  outputs       :
 *    atime       -
 *    em          - eccentricity
 *    argpm       - argument of perigee
 *    inclm       - inclination
 *    xli         -
 *    mm          - mean anomaly
 *    xni         -
 *    nodem       - right ascension of ascending node
 *    dndt        -
 *    nm          - mean motion
 *
 *  locals        :
 *    delt        -
 *    ft          -
 *    theta       -
 *    x2li        -
 *    x2omi       -
 *    xl          -
 *    xldot       -
 *    xnddt       -
 *    xndt        -
 *    xomi        -
 *
 *  coupling      :
 *    none        -
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function dspace(options) {
  var irez = options.irez,
      d2201 = options.d2201,
      d2211 = options.d2211,
      d3210 = options.d3210,
      d3222 = options.d3222,
      d4410 = options.d4410,
      d4422 = options.d4422,
      d5220 = options.d5220,
      d5232 = options.d5232,
      d5421 = options.d5421,
      d5433 = options.d5433,
      dedt = options.dedt,
      del1 = options.del1,
      del2 = options.del2,
      del3 = options.del3,
      didt = options.didt,
      dmdt = options.dmdt,
      dnodt = options.dnodt,
      domdt = options.domdt,
      argpo = options.argpo,
      argpdot = options.argpdot,
      t = options.t,
      tc = options.tc,
      gsto = options.gsto,
      xfact = options.xfact,
      xlamo = options.xlamo,
      no = options.no;
  var atime = options.atime,
      em = options.em,
      argpm = options.argpm,
      inclm = options.inclm,
      xli = options.xli,
      mm = options.mm,
      xni = options.xni,
      nodem = options.nodem,
      nm = options.nm;
  var fasx2 = 0.13130908;
  var fasx4 = 2.8843198;
  var fasx6 = 0.37448087;
  var g22 = 5.7686396;
  var g32 = 0.95240898;
  var g44 = 1.8014998;
  var g52 = 1.0508330;
  var g54 = 4.4108898;
  var rptim = 4.37526908801129966e-3; // equates to 7.29211514668855e-5 rad/sec

  var stepp = 720.0;
  var stepn = -720.0;
  var step2 = 259200.0;
  var delt;
  var x2li;
  var x2omi;
  var xl;
  var xldot;
  var xnddt;
  var xndt;
  var xomi;
  var dndt = 0.0;
  var ft = 0.0; //  ----------- calculate deep space resonance effects -----------

  var theta = (gsto + tc * rptim) % twoPi;
  em += dedt * t;
  inclm += didt * t;
  argpm += domdt * t;
  nodem += dnodt * t;
  mm += dmdt * t; // sgp4fix for negative inclinations
  // the following if statement should be commented out
  // if (inclm < 0.0)
  // {
  //   inclm = -inclm;
  //   argpm = argpm - pi;
  //   nodem = nodem + pi;
  // }

  /* - update resonances : numerical (euler-maclaurin) integration - */

  /* ------------------------- epoch restart ----------------------  */
  //   sgp4fix for propagator problems
  //   the following integration works for negative time steps and periods
  //   the specific changes are unknown because the original code was so convoluted
  // sgp4fix take out atime = 0.0 and fix for faster operation

  if (irez !== 0) {
    //  sgp4fix streamline check
    if (atime === 0.0 || t * atime <= 0.0 || Math.abs(t) < Math.abs(atime)) {
      atime = 0.0;
      xni = no;
      xli = xlamo;
    } // sgp4fix move check outside loop


    if (t > 0.0) {
      delt = stepp;
    } else {
      delt = stepn;
    }

    var iretn = 381; // added for do loop

    while (iretn === 381) {
      //  ------------------- dot terms calculated -------------
      //  ----------- near - synchronous resonance terms -------
      if (irez !== 2) {
        xndt = del1 * Math.sin(xli - fasx2) + del2 * Math.sin(2.0 * (xli - fasx4)) + del3 * Math.sin(3.0 * (xli - fasx6));
        xldot = xni + xfact;
        xnddt = del1 * Math.cos(xli - fasx2) + 2.0 * del2 * Math.cos(2.0 * (xli - fasx4)) + 3.0 * del3 * Math.cos(3.0 * (xli - fasx6));
        xnddt *= xldot;
      } else {
        // --------- near - half-day resonance terms --------
        xomi = argpo + argpdot * atime;
        x2omi = xomi + xomi;
        x2li = xli + xli;
        xndt = d2201 * Math.sin(x2omi + xli - g22) + d2211 * Math.sin(xli - g22) + d3210 * Math.sin(xomi + xli - g32) + d3222 * Math.sin(-xomi + xli - g32) + d4410 * Math.sin(x2omi + x2li - g44) + d4422 * Math.sin(x2li - g44) + d5220 * Math.sin(xomi + xli - g52) + d5232 * Math.sin(-xomi + xli - g52) + d5421 * Math.sin(xomi + x2li - g54) + d5433 * Math.sin(-xomi + x2li - g54);
        xldot = xni + xfact;
        xnddt = d2201 * Math.cos(x2omi + xli - g22) + d2211 * Math.cos(xli - g22) + d3210 * Math.cos(xomi + xli - g32) + d3222 * Math.cos(-xomi + xli - g32) + d5220 * Math.cos(xomi + xli - g52) + d5232 * Math.cos(-xomi + xli - g52) + 2.0 * d4410 * Math.cos(x2omi + x2li - g44) + d4422 * Math.cos(x2li - g44) + d5421 * Math.cos(xomi + x2li - g54) + d5433 * Math.cos(-xomi + x2li - g54);
        xnddt *= xldot;
      } //  ----------------------- integrator -------------------
      //  sgp4fix move end checks to end of routine


      if (Math.abs(t - atime) >= stepp) {
        iretn = 381;
      } else {
        ft = t - atime;
        iretn = 0;
      }

      if (iretn === 381) {
        xli += xldot * delt + xndt * step2;
        xni += xndt * delt + xnddt * step2;
        atime += delt;
      }
    }

    nm = xni + xndt * ft + xnddt * ft * ft * 0.5;
    xl = xli + xldot * ft + xndt * ft * ft * 0.5;

    if (irez !== 1) {
      mm = xl - 2.0 * nodem + 2.0 * theta;
      dndt = nm - no;
    } else {
      mm = xl - nodem - argpm + theta;
      dndt = nm - no;
    }

    nm = no + dndt;
  }

  return {
    atime: atime,
    em: em,
    argpm: argpm,
    inclm: inclm,
    xli: xli,
    mm: mm,
    xni: xni,
    nodem: nodem,
    dndt: dndt,
    nm: nm
  };
}

/*----------------------------------------------------------------------------
 *
 *                             procedure sgp4
 *
 *  this procedure is the sgp4 prediction model from space command. this is an
 *    updated and combined version of sgp4 and sdp4, which were originally
 *    published separately in spacetrack report //3. this version follows the
 *    methodology from the aiaa paper (2006) describing the history and
 *    development of the code.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    satrec  - initialised structure from sgp4init() call.
 *    tsince  - time since epoch (minutes)
 *
 *  outputs       :
 *    r           - position vector                     km
 *    v           - velocity                            km/sec
 *  return code - non-zero on error.
 *                   1 - mean elements, ecc >= 1.0 or ecc < -0.001 or a < 0.95 er
 *                   2 - mean motion less than 0.0
 *                   3 - pert elements, ecc < 0.0  or  ecc > 1.0
 *                   4 - semi-latus rectum < 0.0
 *                   5 - epoch elements are sub-orbital
 *                   6 - satellite has decayed
 *
 *  locals        :
 *    am          -
 *    axnl, aynl        -
 *    betal       -
 *    cosim   , sinim   , cosomm  , sinomm  , cnod    , snod    , cos2u   ,
 *    sin2u   , coseo1  , sineo1  , cosi    , sini    , cosip   , sinip   ,
 *    cosisq  , cossu   , sinsu   , cosu    , sinu
 *    delm        -
 *    delomg      -
 *    dndt        -
 *    eccm        -
 *    emsq        -
 *    ecose       -
 *    el2         -
 *    eo1         -
 *    eccp        -
 *    esine       -
 *    argpm       -
 *    argpp       -
 *    omgadf      -
 *    pl          -
 *    r           -
 *    rtemsq      -
 *    rdotl       -
 *    rl          -
 *    rvdot       -
 *    rvdotl      -
 *    su          -
 *    t2  , t3   , t4    , tc
 *    tem5, temp , temp1 , temp2  , tempa  , tempe  , templ
 *    u   , ux   , uy    , uz     , vx     , vy     , vz
 *    inclm       - inclination
 *    mm          - mean anomaly
 *    nm          - mean motion
 *    nodem       - right asc of ascending node
 *    xinc        -
 *    xincp       -
 *    xl          -
 *    xlm         -
 *    mp          -
 *    xmdf        -
 *    xmx         -
 *    xmy         -
 *    nodedf      -
 *    xnode       -
 *    nodep       -
 *    np          -
 *
 *  coupling      :
 *    getgravconst-
 *    dpper
 *    dspace
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report //3 1980
 *    hoots, norad spacetrack report //6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function sgp4(satrec, tsince) {
  /* eslint-disable no-param-reassign */
  var coseo1;
  var sineo1;
  var cosip;
  var sinip;
  var cosisq;
  var delm;
  var delomg;
  var eo1;
  var argpm;
  var argpp;
  var su;
  var t3;
  var t4;
  var tc;
  var tem5;
  var temp;
  var tempa;
  var tempe;
  var templ;
  var inclm;
  var mm;
  var nm;
  var nodem;
  var xincp;
  var xlm;
  var mp;
  var nodep;
  /* ------------------ set mathematical constants --------------- */
  // sgp4fix divisor for divide by zero check on inclination
  // the old check used 1.0 + cos(pi-1.0e-9), but then compared it to
  // 1.5 e-12, so the threshold was changed to 1.5e-12 for consistency

  var temp4 = 1.5e-12; // --------------------- clear sgp4 error flag -----------------

  satrec.t = tsince;
  satrec.error = 0; //  ------- update for secular gravity and atmospheric drag -----

  var xmdf = satrec.mo + satrec.mdot * satrec.t;
  var argpdf = satrec.argpo + satrec.argpdot * satrec.t;
  var nodedf = satrec.nodeo + satrec.nodedot * satrec.t;
  argpm = argpdf;
  mm = xmdf;
  var t2 = satrec.t * satrec.t;
  nodem = nodedf + satrec.nodecf * t2;
  tempa = 1.0 - satrec.cc1 * satrec.t;
  tempe = satrec.bstar * satrec.cc4 * satrec.t;
  templ = satrec.t2cof * t2;

  if (satrec.isimp !== 1) {
    delomg = satrec.omgcof * satrec.t; //  sgp4fix use mutliply for speed instead of pow

    var delmtemp = 1.0 + satrec.eta * Math.cos(xmdf);
    delm = satrec.xmcof * (delmtemp * delmtemp * delmtemp - satrec.delmo);
    temp = delomg + delm;
    mm = xmdf + temp;
    argpm = argpdf - temp;
    t3 = t2 * satrec.t;
    t4 = t3 * satrec.t;
    tempa = tempa - satrec.d2 * t2 - satrec.d3 * t3 - satrec.d4 * t4;
    tempe += satrec.bstar * satrec.cc5 * (Math.sin(mm) - satrec.sinmao);
    templ = templ + satrec.t3cof * t3 + t4 * (satrec.t4cof + satrec.t * satrec.t5cof);
  }

  nm = satrec.no;
  var em = satrec.ecco;
  inclm = satrec.inclo;

  if (satrec.method === 'd') {
    tc = satrec.t;
    var dspaceOptions = {
      irez: satrec.irez,
      d2201: satrec.d2201,
      d2211: satrec.d2211,
      d3210: satrec.d3210,
      d3222: satrec.d3222,
      d4410: satrec.d4410,
      d4422: satrec.d4422,
      d5220: satrec.d5220,
      d5232: satrec.d5232,
      d5421: satrec.d5421,
      d5433: satrec.d5433,
      dedt: satrec.dedt,
      del1: satrec.del1,
      del2: satrec.del2,
      del3: satrec.del3,
      didt: satrec.didt,
      dmdt: satrec.dmdt,
      dnodt: satrec.dnodt,
      domdt: satrec.domdt,
      argpo: satrec.argpo,
      argpdot: satrec.argpdot,
      t: satrec.t,
      tc: tc,
      gsto: satrec.gsto,
      xfact: satrec.xfact,
      xlamo: satrec.xlamo,
      no: satrec.no,
      atime: satrec.atime,
      em: em,
      argpm: argpm,
      inclm: inclm,
      xli: satrec.xli,
      mm: mm,
      xni: satrec.xni,
      nodem: nodem,
      nm: nm
    };
    var dspaceResult = dspace(dspaceOptions);
    em = dspaceResult.em;
    argpm = dspaceResult.argpm;
    inclm = dspaceResult.inclm;
    mm = dspaceResult.mm;
    nodem = dspaceResult.nodem;
    nm = dspaceResult.nm;
  }

  if (nm <= 0.0) {
    // printf("// error nm %f\n", nm);
    satrec.error = 2; // sgp4fix add return

    return [false, false];
  }

  var am = Math.pow(xke / nm, x2o3) * tempa * tempa;
  nm = xke / Math.pow(am, 1.5);
  em -= tempe; // fix tolerance for error recognition
  // sgp4fix am is fixed from the previous nm check

  if (em >= 1.0 || em < -0.001) {
    // || (am < 0.95)
    // printf("// error em %f\n", em);
    satrec.error = 1; // sgp4fix to return if there is an error in eccentricity

    return [false, false];
  } //  sgp4fix fix tolerance to avoid a divide by zero


  if (em < 1.0e-6) {
    em = 1.0e-6;
  }

  mm += satrec.no * templ;
  xlm = mm + argpm + nodem;
  nodem %= twoPi;
  argpm %= twoPi;
  xlm %= twoPi;
  mm = (xlm - argpm - nodem) % twoPi; // ----------------- compute extra mean quantities -------------

  var sinim = Math.sin(inclm);
  var cosim = Math.cos(inclm); // -------------------- add lunar-solar periodics --------------

  var ep = em;
  xincp = inclm;
  argpp = argpm;
  nodep = nodem;
  mp = mm;
  sinip = sinim;
  cosip = cosim;

  if (satrec.method === 'd') {
    var dpperParameters = {
      inclo: satrec.inclo,
      init: 'n',
      ep: ep,
      inclp: xincp,
      nodep: nodep,
      argpp: argpp,
      mp: mp,
      opsmode: satrec.operationmode
    };
    var dpperResult = dpper(satrec, dpperParameters);
    ep = dpperResult.ep;
    nodep = dpperResult.nodep;
    argpp = dpperResult.argpp;
    mp = dpperResult.mp;
    xincp = dpperResult.inclp;

    if (xincp < 0.0) {
      xincp = -xincp;
      nodep += pi;
      argpp -= pi;
    }

    if (ep < 0.0 || ep > 1.0) {
      //  printf("// error ep %f\n", ep);
      satrec.error = 3; //  sgp4fix add return

      return [false, false];
    }
  } //  -------------------- long period periodics ------------------


  if (satrec.method === 'd') {
    sinip = Math.sin(xincp);
    cosip = Math.cos(xincp);
    satrec.aycof = -0.5 * j3oj2 * sinip; //  sgp4fix for divide by zero for xincp = 180 deg

    if (Math.abs(cosip + 1.0) > 1.5e-12) {
      satrec.xlcof = -0.25 * j3oj2 * sinip * (3.0 + 5.0 * cosip) / (1.0 + cosip);
    } else {
      satrec.xlcof = -0.25 * j3oj2 * sinip * (3.0 + 5.0 * cosip) / temp4;
    }
  }

  var axnl = ep * Math.cos(argpp);
  temp = 1.0 / (am * (1.0 - ep * ep));
  var aynl = ep * Math.sin(argpp) + temp * satrec.aycof;
  var xl = mp + argpp + nodep + temp * satrec.xlcof * axnl; // --------------------- solve kepler's equation ---------------

  var u = (xl - nodep) % twoPi;
  eo1 = u;
  tem5 = 9999.9;
  var ktr = 1; //    sgp4fix for kepler iteration
  //    the following iteration needs better limits on corrections

  while (Math.abs(tem5) >= 1.0e-12 && ktr <= 10) {
    sineo1 = Math.sin(eo1);
    coseo1 = Math.cos(eo1);
    tem5 = 1.0 - coseo1 * axnl - sineo1 * aynl;
    tem5 = (u - aynl * coseo1 + axnl * sineo1 - eo1) / tem5;

    if (Math.abs(tem5) >= 0.95) {
      if (tem5 > 0.0) {
        tem5 = 0.95;
      } else {
        tem5 = -0.95;
      }
    }

    eo1 += tem5;
    ktr += 1;
  } //  ------------- short period preliminary quantities -----------


  var ecose = axnl * coseo1 + aynl * sineo1;
  var esine = axnl * sineo1 - aynl * coseo1;
  var el2 = axnl * axnl + aynl * aynl;
  var pl = am * (1.0 - el2);

  if (pl < 0.0) {
    //  printf("// error pl %f\n", pl);
    satrec.error = 4; //  sgp4fix add return

    return [false, false];
  }

  var rl = am * (1.0 - ecose);
  var rdotl = Math.sqrt(am) * esine / rl;
  var rvdotl = Math.sqrt(pl) / rl;
  var betal = Math.sqrt(1.0 - el2);
  temp = esine / (1.0 + betal);
  var sinu = am / rl * (sineo1 - aynl - axnl * temp);
  var cosu = am / rl * (coseo1 - axnl + aynl * temp);
  su = Math.atan2(sinu, cosu);
  var sin2u = (cosu + cosu) * sinu;
  var cos2u = 1.0 - 2.0 * sinu * sinu;
  temp = 1.0 / pl;
  var temp1 = 0.5 * j2 * temp;
  var temp2 = temp1 * temp; // -------------- update for short period periodics ------------

  if (satrec.method === 'd') {
    cosisq = cosip * cosip;
    satrec.con41 = 3.0 * cosisq - 1.0;
    satrec.x1mth2 = 1.0 - cosisq;
    satrec.x7thm1 = 7.0 * cosisq - 1.0;
  }

  var mrt = rl * (1.0 - 1.5 * temp2 * betal * satrec.con41) + 0.5 * temp1 * satrec.x1mth2 * cos2u; // sgp4fix for decaying satellites

  if (mrt < 1.0) {
    // printf("// decay condition %11.6f \n",mrt);
    satrec.error = 6;
    return {
      position: false,
      velocity: false
    };
  }

  su -= 0.25 * temp2 * satrec.x7thm1 * sin2u;
  var xnode = nodep + 1.5 * temp2 * cosip * sin2u;
  var xinc = xincp + 1.5 * temp2 * cosip * sinip * cos2u;
  var mvt = rdotl - nm * temp1 * satrec.x1mth2 * sin2u / xke;
  var rvdot = rvdotl + nm * temp1 * (satrec.x1mth2 * cos2u + 1.5 * satrec.con41) / xke; // --------------------- orientation vectors -------------------

  var sinsu = Math.sin(su);
  var cossu = Math.cos(su);
  var snod = Math.sin(xnode);
  var cnod = Math.cos(xnode);
  var sini = Math.sin(xinc);
  var cosi = Math.cos(xinc);
  var xmx = -snod * cosi;
  var xmy = cnod * cosi;
  var ux = xmx * sinsu + cnod * cossu;
  var uy = xmy * sinsu + snod * cossu;
  var uz = sini * sinsu;
  var vx = xmx * cossu - cnod * sinsu;
  var vy = xmy * cossu - snod * sinsu;
  var vz = sini * cossu; // --------- position and velocity (in km and km/sec) ----------

  var r = {
    x: mrt * ux * earthRadius,
    y: mrt * uy * earthRadius,
    z: mrt * uz * earthRadius
  };
  var v = {
    x: (mvt * ux + rvdot * vx) * vkmpersec,
    y: (mvt * uy + rvdot * vy) * vkmpersec,
    z: (mvt * uz + rvdot * vz) * vkmpersec
  };
  return {
    position: r,
    velocity: v
  };
  /* eslint-enable no-param-reassign */
}

/*-----------------------------------------------------------------------------
 *
 *                             procedure sgp4init
 *
 *  this procedure initializes variables for sgp4.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    opsmode     - mode of operation afspc or improved 'a', 'i'
 *    satn        - satellite number
 *    bstar       - sgp4 type drag coefficient              kg/m2er
 *    ecco        - eccentricity
 *    epoch       - epoch time in days from jan 0, 1950. 0 hr
 *    argpo       - argument of perigee (output if ds)
 *    inclo       - inclination
 *    mo          - mean anomaly (output if ds)
 *    no          - mean motion
 *    nodeo       - right ascension of ascending node
 *
 *  outputs       :
 *    rec      - common values for subsequent calls
 *    return code - non-zero on error.
 *                   1 - mean elements, ecc >= 1.0 or ecc < -0.001 or a < 0.95 er
 *                   2 - mean motion less than 0.0
 *                   3 - pert elements, ecc < 0.0  or  ecc > 1.0
 *                   4 - semi-latus rectum < 0.0
 *                   5 - epoch elements are sub-orbital
 *                   6 - satellite has decayed
 *
 *  locals        :
 *    cnodm  , snodm  , cosim  , sinim  , cosomm , sinomm
 *    cc1sq  , cc2    , cc3
 *    coef   , coef1
 *    cosio4      -
 *    day         -
 *    dndt        -
 *    em          - eccentricity
 *    emsq        - eccentricity squared
 *    eeta        -
 *    etasq       -
 *    gam         -
 *    argpm       - argument of perigee
 *    nodem       -
 *    inclm       - inclination
 *    mm          - mean anomaly
 *    nm          - mean motion
 *    perige      - perigee
 *    pinvsq      -
 *    psisq       -
 *    qzms24      -
 *    rtemsq      -
 *    s1, s2, s3, s4, s5, s6, s7          -
 *    sfour       -
 *    ss1, ss2, ss3, ss4, ss5, ss6, ss7         -
 *    sz1, sz2, sz3
 *    sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33        -
 *    tc          -
 *    temp        -
 *    temp1, temp2, temp3       -
 *    tsi         -
 *    xpidot      -
 *    xhdot1      -
 *    z1, z2, z3          -
 *    z11, z12, z13, z21, z22, z23, z31, z32, z33         -
 *
 *  coupling      :
 *    getgravconst-
 *    initl       -
 *    dscom       -
 *    dpper       -
 *    dsinit      -
 *    sgp4        -
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function sgp4init(satrec, options) {
  /* eslint-disable no-param-reassign */
  var opsmode = options.opsmode,
      satn = options.satn,
      epoch = options.epoch,
      xbstar = options.xbstar,
      xecco = options.xecco,
      xargpo = options.xargpo,
      xinclo = options.xinclo,
      xmo = options.xmo,
      xno = options.xno,
      xnodeo = options.xnodeo;
  var cosim;
  var sinim;
  var cc1sq;
  var cc2;
  var cc3;
  var coef;
  var coef1;
  var cosio4;
  var em;
  var emsq;
  var eeta;
  var etasq;
  var argpm;
  var nodem;
  var inclm;
  var mm;
  var nm;
  var perige;
  var pinvsq;
  var psisq;
  var qzms24;
  var s1;
  var s2;
  var s3;
  var s4;
  var s5;
  var sfour;
  var ss1;
  var ss2;
  var ss3;
  var ss4;
  var ss5;
  var sz1;
  var sz3;
  var sz11;
  var sz13;
  var sz21;
  var sz23;
  var sz31;
  var sz33;
  var tc;
  var temp;
  var temp1;
  var temp2;
  var temp3;
  var tsi;
  var xpidot;
  var xhdot1;
  var z1;
  var z3;
  var z11;
  var z13;
  var z21;
  var z23;
  var z31;
  var z33;
  /* ------------------------ initialization --------------------- */
  // sgp4fix divisor for divide by zero check on inclination
  // the old check used 1.0 + Math.cos(pi-1.0e-9), but then compared it to
  // 1.5 e-12, so the threshold was changed to 1.5e-12 for consistency

  var temp4 = 1.5e-12; // ----------- set all near earth variables to zero ------------

  satrec.isimp = 0;
  satrec.method = 'n';
  satrec.aycof = 0.0;
  satrec.con41 = 0.0;
  satrec.cc1 = 0.0;
  satrec.cc4 = 0.0;
  satrec.cc5 = 0.0;
  satrec.d2 = 0.0;
  satrec.d3 = 0.0;
  satrec.d4 = 0.0;
  satrec.delmo = 0.0;
  satrec.eta = 0.0;
  satrec.argpdot = 0.0;
  satrec.omgcof = 0.0;
  satrec.sinmao = 0.0;
  satrec.t = 0.0;
  satrec.t2cof = 0.0;
  satrec.t3cof = 0.0;
  satrec.t4cof = 0.0;
  satrec.t5cof = 0.0;
  satrec.x1mth2 = 0.0;
  satrec.x7thm1 = 0.0;
  satrec.mdot = 0.0;
  satrec.nodedot = 0.0;
  satrec.xlcof = 0.0;
  satrec.xmcof = 0.0;
  satrec.nodecf = 0.0; // ----------- set all deep space variables to zero ------------

  satrec.irez = 0;
  satrec.d2201 = 0.0;
  satrec.d2211 = 0.0;
  satrec.d3210 = 0.0;
  satrec.d3222 = 0.0;
  satrec.d4410 = 0.0;
  satrec.d4422 = 0.0;
  satrec.d5220 = 0.0;
  satrec.d5232 = 0.0;
  satrec.d5421 = 0.0;
  satrec.d5433 = 0.0;
  satrec.dedt = 0.0;
  satrec.del1 = 0.0;
  satrec.del2 = 0.0;
  satrec.del3 = 0.0;
  satrec.didt = 0.0;
  satrec.dmdt = 0.0;
  satrec.dnodt = 0.0;
  satrec.domdt = 0.0;
  satrec.e3 = 0.0;
  satrec.ee2 = 0.0;
  satrec.peo = 0.0;
  satrec.pgho = 0.0;
  satrec.pho = 0.0;
  satrec.pinco = 0.0;
  satrec.plo = 0.0;
  satrec.se2 = 0.0;
  satrec.se3 = 0.0;
  satrec.sgh2 = 0.0;
  satrec.sgh3 = 0.0;
  satrec.sgh4 = 0.0;
  satrec.sh2 = 0.0;
  satrec.sh3 = 0.0;
  satrec.si2 = 0.0;
  satrec.si3 = 0.0;
  satrec.sl2 = 0.0;
  satrec.sl3 = 0.0;
  satrec.sl4 = 0.0;
  satrec.gsto = 0.0;
  satrec.xfact = 0.0;
  satrec.xgh2 = 0.0;
  satrec.xgh3 = 0.0;
  satrec.xgh4 = 0.0;
  satrec.xh2 = 0.0;
  satrec.xh3 = 0.0;
  satrec.xi2 = 0.0;
  satrec.xi3 = 0.0;
  satrec.xl2 = 0.0;
  satrec.xl3 = 0.0;
  satrec.xl4 = 0.0;
  satrec.xlamo = 0.0;
  satrec.zmol = 0.0;
  satrec.zmos = 0.0;
  satrec.atime = 0.0;
  satrec.xli = 0.0;
  satrec.xni = 0.0; // sgp4fix - note the following variables are also passed directly via satrec.
  // it is possible to streamline the sgp4init call by deleting the "x"
  // variables, but the user would need to set the satrec.* values first. we
  // include the additional assignments in case twoline2rv is not used.

  satrec.bstar = xbstar;
  satrec.ecco = xecco;
  satrec.argpo = xargpo;
  satrec.inclo = xinclo;
  satrec.mo = xmo;
  satrec.no = xno;
  satrec.nodeo = xnodeo; //  sgp4fix add opsmode

  satrec.operationmode = opsmode; // ------------------------ earth constants -----------------------
  // sgp4fix identify constants and allow alternate values

  var ss = 78.0 / earthRadius + 1.0; // sgp4fix use multiply for speed instead of pow

  var qzms2ttemp = (120.0 - 78.0) / earthRadius;
  var qzms2t = qzms2ttemp * qzms2ttemp * qzms2ttemp * qzms2ttemp;
  satrec.init = 'y';
  satrec.t = 0.0;
  var initlOptions = {
    satn: satn,
    ecco: satrec.ecco,
    epoch: epoch,
    inclo: satrec.inclo,
    no: satrec.no,
    method: satrec.method,
    opsmode: satrec.operationmode
  };
  var initlResult = initl(initlOptions);
  var ao = initlResult.ao,
      con42 = initlResult.con42,
      cosio = initlResult.cosio,
      cosio2 = initlResult.cosio2,
      eccsq = initlResult.eccsq,
      omeosq = initlResult.omeosq,
      posq = initlResult.posq,
      rp = initlResult.rp,
      rteosq = initlResult.rteosq,
      sinio = initlResult.sinio;
  satrec.no = initlResult.no;
  satrec.con41 = initlResult.con41;
  satrec.gsto = initlResult.gsto;
  satrec.error = 0; // sgp4fix remove this check as it is unnecessary
  // the mrt check in sgp4 handles decaying satellite cases even if the starting
  // condition is below the surface of te earth
  // if (rp < 1.0)
  // {
  //   printf("// *** satn%d epoch elts sub-orbital ***\n", satn);
  //   satrec.error = 5;
  // }

  if (omeosq >= 0.0 || satrec.no >= 0.0) {
    satrec.isimp = 0;

    if (rp < 220.0 / earthRadius + 1.0) {
      satrec.isimp = 1;
    }

    sfour = ss;
    qzms24 = qzms2t;
    perige = (rp - 1.0) * earthRadius; // - for perigees below 156 km, s and qoms2t are altered -

    if (perige < 156.0) {
      sfour = perige - 78.0;

      if (perige < 98.0) {
        sfour = 20.0;
      } // sgp4fix use multiply for speed instead of pow


      var qzms24temp = (120.0 - sfour) / earthRadius;
      qzms24 = qzms24temp * qzms24temp * qzms24temp * qzms24temp;
      sfour = sfour / earthRadius + 1.0;
    }

    pinvsq = 1.0 / posq;
    tsi = 1.0 / (ao - sfour);
    satrec.eta = ao * satrec.ecco * tsi;
    etasq = satrec.eta * satrec.eta;
    eeta = satrec.ecco * satrec.eta;
    psisq = Math.abs(1.0 - etasq);
    coef = qzms24 * Math.pow(tsi, 4.0);
    coef1 = coef / Math.pow(psisq, 3.5);
    cc2 = coef1 * satrec.no * (ao * (1.0 + 1.5 * etasq + eeta * (4.0 + etasq)) + 0.375 * j2 * tsi / psisq * satrec.con41 * (8.0 + 3.0 * etasq * (8.0 + etasq)));
    satrec.cc1 = satrec.bstar * cc2;
    cc3 = 0.0;

    if (satrec.ecco > 1.0e-4) {
      cc3 = -2.0 * coef * tsi * j3oj2 * satrec.no * sinio / satrec.ecco;
    }

    satrec.x1mth2 = 1.0 - cosio2;
    satrec.cc4 = 2.0 * satrec.no * coef1 * ao * omeosq * (satrec.eta * (2.0 + 0.5 * etasq) + satrec.ecco * (0.5 + 2.0 * etasq) - j2 * tsi / (ao * psisq) * (-3.0 * satrec.con41 * (1.0 - 2.0 * eeta + etasq * (1.5 - 0.5 * eeta)) + 0.75 * satrec.x1mth2 * (2.0 * etasq - eeta * (1.0 + etasq)) * Math.cos(2.0 * satrec.argpo)));
    satrec.cc5 = 2.0 * coef1 * ao * omeosq * (1.0 + 2.75 * (etasq + eeta) + eeta * etasq);
    cosio4 = cosio2 * cosio2;
    temp1 = 1.5 * j2 * pinvsq * satrec.no;
    temp2 = 0.5 * temp1 * j2 * pinvsq;
    temp3 = -0.46875 * j4 * pinvsq * pinvsq * satrec.no;
    satrec.mdot = satrec.no + 0.5 * temp1 * rteosq * satrec.con41 + 0.0625 * temp2 * rteosq * (13.0 - 78.0 * cosio2 + 137.0 * cosio4);
    satrec.argpdot = -0.5 * temp1 * con42 + 0.0625 * temp2 * (7.0 - 114.0 * cosio2 + 395.0 * cosio4) + temp3 * (3.0 - 36.0 * cosio2 + 49.0 * cosio4);
    xhdot1 = -temp1 * cosio;
    satrec.nodedot = xhdot1 + (0.5 * temp2 * (4.0 - 19.0 * cosio2) + 2.0 * temp3 * (3.0 - 7.0 * cosio2)) * cosio;
    xpidot = satrec.argpdot + satrec.nodedot;
    satrec.omgcof = satrec.bstar * cc3 * Math.cos(satrec.argpo);
    satrec.xmcof = 0.0;

    if (satrec.ecco > 1.0e-4) {
      satrec.xmcof = -x2o3 * coef * satrec.bstar / eeta;
    }

    satrec.nodecf = 3.5 * omeosq * xhdot1 * satrec.cc1;
    satrec.t2cof = 1.5 * satrec.cc1; // sgp4fix for divide by zero with xinco = 180 deg

    if (Math.abs(cosio + 1.0) > 1.5e-12) {
      satrec.xlcof = -0.25 * j3oj2 * sinio * (3.0 + 5.0 * cosio) / (1.0 + cosio);
    } else {
      satrec.xlcof = -0.25 * j3oj2 * sinio * (3.0 + 5.0 * cosio) / temp4;
    }

    satrec.aycof = -0.5 * j3oj2 * sinio; // sgp4fix use multiply for speed instead of pow

    var delmotemp = 1.0 + satrec.eta * Math.cos(satrec.mo);
    satrec.delmo = delmotemp * delmotemp * delmotemp;
    satrec.sinmao = Math.sin(satrec.mo);
    satrec.x7thm1 = 7.0 * cosio2 - 1.0; // --------------- deep space initialization -------------

    if (2 * pi / satrec.no >= 225.0) {
      satrec.method = 'd';
      satrec.isimp = 1;
      tc = 0.0;
      inclm = satrec.inclo;
      var dscomOptions = {
        epoch: epoch,
        ep: satrec.ecco,
        argpp: satrec.argpo,
        tc: tc,
        inclp: satrec.inclo,
        nodep: satrec.nodeo,
        np: satrec.no,
        e3: satrec.e3,
        ee2: satrec.ee2,
        peo: satrec.peo,
        pgho: satrec.pgho,
        pho: satrec.pho,
        pinco: satrec.pinco,
        plo: satrec.plo,
        se2: satrec.se2,
        se3: satrec.se3,
        sgh2: satrec.sgh2,
        sgh3: satrec.sgh3,
        sgh4: satrec.sgh4,
        sh2: satrec.sh2,
        sh3: satrec.sh3,
        si2: satrec.si2,
        si3: satrec.si3,
        sl2: satrec.sl2,
        sl3: satrec.sl3,
        sl4: satrec.sl4,
        xgh2: satrec.xgh2,
        xgh3: satrec.xgh3,
        xgh4: satrec.xgh4,
        xh2: satrec.xh2,
        xh3: satrec.xh3,
        xi2: satrec.xi2,
        xi3: satrec.xi3,
        xl2: satrec.xl2,
        xl3: satrec.xl3,
        xl4: satrec.xl4,
        zmol: satrec.zmol,
        zmos: satrec.zmos
      };
      var dscomResult = dscom(dscomOptions);
      satrec.e3 = dscomResult.e3;
      satrec.ee2 = dscomResult.ee2;
      satrec.peo = dscomResult.peo;
      satrec.pgho = dscomResult.pgho;
      satrec.pho = dscomResult.pho;
      satrec.pinco = dscomResult.pinco;
      satrec.plo = dscomResult.plo;
      satrec.se2 = dscomResult.se2;
      satrec.se3 = dscomResult.se3;
      satrec.sgh2 = dscomResult.sgh2;
      satrec.sgh3 = dscomResult.sgh3;
      satrec.sgh4 = dscomResult.sgh4;
      satrec.sh2 = dscomResult.sh2;
      satrec.sh3 = dscomResult.sh3;
      satrec.si2 = dscomResult.si2;
      satrec.si3 = dscomResult.si3;
      satrec.sl2 = dscomResult.sl2;
      satrec.sl3 = dscomResult.sl3;
      satrec.sl4 = dscomResult.sl4;
      sinim = dscomResult.sinim;
      cosim = dscomResult.cosim;
      em = dscomResult.em;
      emsq = dscomResult.emsq;
      s1 = dscomResult.s1;
      s2 = dscomResult.s2;
      s3 = dscomResult.s3;
      s4 = dscomResult.s4;
      s5 = dscomResult.s5;
      ss1 = dscomResult.ss1;
      ss2 = dscomResult.ss2;
      ss3 = dscomResult.ss3;
      ss4 = dscomResult.ss4;
      ss5 = dscomResult.ss5;
      sz1 = dscomResult.sz1;
      sz3 = dscomResult.sz3;
      sz11 = dscomResult.sz11;
      sz13 = dscomResult.sz13;
      sz21 = dscomResult.sz21;
      sz23 = dscomResult.sz23;
      sz31 = dscomResult.sz31;
      sz33 = dscomResult.sz33;
      satrec.xgh2 = dscomResult.xgh2;
      satrec.xgh3 = dscomResult.xgh3;
      satrec.xgh4 = dscomResult.xgh4;
      satrec.xh2 = dscomResult.xh2;
      satrec.xh3 = dscomResult.xh3;
      satrec.xi2 = dscomResult.xi2;
      satrec.xi3 = dscomResult.xi3;
      satrec.xl2 = dscomResult.xl2;
      satrec.xl3 = dscomResult.xl3;
      satrec.xl4 = dscomResult.xl4;
      satrec.zmol = dscomResult.zmol;
      satrec.zmos = dscomResult.zmos;
      nm = dscomResult.nm;
      z1 = dscomResult.z1;
      z3 = dscomResult.z3;
      z11 = dscomResult.z11;
      z13 = dscomResult.z13;
      z21 = dscomResult.z21;
      z23 = dscomResult.z23;
      z31 = dscomResult.z31;
      z33 = dscomResult.z33;
      var dpperOptions = {
        inclo: inclm,
        init: satrec.init,
        ep: satrec.ecco,
        inclp: satrec.inclo,
        nodep: satrec.nodeo,
        argpp: satrec.argpo,
        mp: satrec.mo,
        opsmode: satrec.operationmode
      };
      var dpperResult = dpper(satrec, dpperOptions);
      satrec.ecco = dpperResult.ep;
      satrec.inclo = dpperResult.inclp;
      satrec.nodeo = dpperResult.nodep;
      satrec.argpo = dpperResult.argpp;
      satrec.mo = dpperResult.mp;
      argpm = 0.0;
      nodem = 0.0;
      mm = 0.0;
      var dsinitOptions = {
        cosim: cosim,
        emsq: emsq,
        argpo: satrec.argpo,
        s1: s1,
        s2: s2,
        s3: s3,
        s4: s4,
        s5: s5,
        sinim: sinim,
        ss1: ss1,
        ss2: ss2,
        ss3: ss3,
        ss4: ss4,
        ss5: ss5,
        sz1: sz1,
        sz3: sz3,
        sz11: sz11,
        sz13: sz13,
        sz21: sz21,
        sz23: sz23,
        sz31: sz31,
        sz33: sz33,
        t: satrec.t,
        tc: tc,
        gsto: satrec.gsto,
        mo: satrec.mo,
        mdot: satrec.mdot,
        no: satrec.no,
        nodeo: satrec.nodeo,
        nodedot: satrec.nodedot,
        xpidot: xpidot,
        z1: z1,
        z3: z3,
        z11: z11,
        z13: z13,
        z21: z21,
        z23: z23,
        z31: z31,
        z33: z33,
        ecco: satrec.ecco,
        eccsq: eccsq,
        em: em,
        argpm: argpm,
        inclm: inclm,
        mm: mm,
        nm: nm,
        nodem: nodem,
        irez: satrec.irez,
        atime: satrec.atime,
        d2201: satrec.d2201,
        d2211: satrec.d2211,
        d3210: satrec.d3210,
        d3222: satrec.d3222,
        d4410: satrec.d4410,
        d4422: satrec.d4422,
        d5220: satrec.d5220,
        d5232: satrec.d5232,
        d5421: satrec.d5421,
        d5433: satrec.d5433,
        dedt: satrec.dedt,
        didt: satrec.didt,
        dmdt: satrec.dmdt,
        dnodt: satrec.dnodt,
        domdt: satrec.domdt,
        del1: satrec.del1,
        del2: satrec.del2,
        del3: satrec.del3,
        xfact: satrec.xfact,
        xlamo: satrec.xlamo,
        xli: satrec.xli,
        xni: satrec.xni
      };
      var dsinitResult = dsinit(dsinitOptions);
      satrec.irez = dsinitResult.irez;
      satrec.atime = dsinitResult.atime;
      satrec.d2201 = dsinitResult.d2201;
      satrec.d2211 = dsinitResult.d2211;
      satrec.d3210 = dsinitResult.d3210;
      satrec.d3222 = dsinitResult.d3222;
      satrec.d4410 = dsinitResult.d4410;
      satrec.d4422 = dsinitResult.d4422;
      satrec.d5220 = dsinitResult.d5220;
      satrec.d5232 = dsinitResult.d5232;
      satrec.d5421 = dsinitResult.d5421;
      satrec.d5433 = dsinitResult.d5433;
      satrec.dedt = dsinitResult.dedt;
      satrec.didt = dsinitResult.didt;
      satrec.dmdt = dsinitResult.dmdt;
      satrec.dnodt = dsinitResult.dnodt;
      satrec.domdt = dsinitResult.domdt;
      satrec.del1 = dsinitResult.del1;
      satrec.del2 = dsinitResult.del2;
      satrec.del3 = dsinitResult.del3;
      satrec.xfact = dsinitResult.xfact;
      satrec.xlamo = dsinitResult.xlamo;
      satrec.xli = dsinitResult.xli;
      satrec.xni = dsinitResult.xni;
    } // ----------- set variables if not deep space -----------


    if (satrec.isimp !== 1) {
      cc1sq = satrec.cc1 * satrec.cc1;
      satrec.d2 = 4.0 * ao * tsi * cc1sq;
      temp = satrec.d2 * tsi * satrec.cc1 / 3.0;
      satrec.d3 = (17.0 * ao + sfour) * temp;
      satrec.d4 = 0.5 * temp * ao * tsi * (221.0 * ao + 31.0 * sfour) * satrec.cc1;
      satrec.t3cof = satrec.d2 + 2.0 * cc1sq;
      satrec.t4cof = 0.25 * (3.0 * satrec.d3 + satrec.cc1 * (12.0 * satrec.d2 + 10.0 * cc1sq));
      satrec.t5cof = 0.2 * (3.0 * satrec.d4 + 12.0 * satrec.cc1 * satrec.d3 + 6.0 * satrec.d2 * satrec.d2 + 15.0 * cc1sq * (2.0 * satrec.d2 + cc1sq));
    }
    /* finally propogate to zero epoch to initialize all others. */
    // sgp4fix take out check to let satellites process until they are actually below earth surface
    // if(satrec.error == 0)

  }

  sgp4(satrec, 0);
  satrec.init = 'n';
  /* eslint-enable no-param-reassign */
}

/* -----------------------------------------------------------------------------
 *
 *                           function twoline2rv
 *
 *  this function converts the two line element set character string data to
 *    variables and initializes the sgp4 variables. several intermediate varaibles
 *    and quantities are determined. note that the result is a structure so multiple
 *    satellites can be processed simultaneously without having to reinitialize. the
 *    verification mode is an important option that permits quick checks of any
 *    changes to the underlying technical theory. this option works using a
 *    modified tle file in which the start, stop, and delta time values are
 *    included at the end of the second line of data. this only works with the
 *    verification mode. the catalog mode simply propagates from -1440 to 1440 min
 *    from epoch and is useful when performing entire catalog runs.
 *
 *  author        : david vallado                  719-573-2600    1 mar 2001
 *
 *  inputs        :
 *    longstr1    - first line of the tle
 *    longstr2    - second line of the tle
 *    typerun     - type of run                    verification 'v', catalog 'c',
 *                                                 manual 'm'
 *    typeinput   - type of manual input           mfe 'm', epoch 'e', dayofyr 'd'
 *    opsmode     - mode of operation afspc or improved 'a', 'i'
 *    whichconst  - which set of constants to use  72, 84
 *
 *  outputs       :
 *    satrec      - structure containing all the sgp4 satellite information
 *
 *  coupling      :
 *    getgravconst-
 *    days2mdhms  - conversion of days to month, day, hour, minute, second
 *    jday        - convert day month year hour minute second into julian date
 *    sgp4init    - initialize the sgp4 variables
 *
 *  references    :
 *    norad spacetrack report #3
 *    vallado, crawford, hujsak, kelso  2006
 --------------------------------------------------------------------------- */

/**
 * Return a Satellite imported from two lines of TLE data.
 *
 * Provide the two TLE lines as strings `longstr1` and `longstr2`,
 * and select which standard set of gravitational constants you want
 * by providing `gravity_constants`:
 *
 * `sgp4.propagation.wgs72` - Standard WGS 72 model
 * `sgp4.propagation.wgs84` - More recent WGS 84 model
 * `sgp4.propagation.wgs72old` - Legacy support for old SGP4 behavior
 *
 * Normally, computations are made using letious recent improvements
 * to the algorithm.  If you want to turn some of these off and go
 * back into "afspc" mode, then set `afspc_mode` to `True`.
 */

function twoline2satrec(longstr1, longstr2) {
  var opsmode = 'i';
  var xpdotp = 1440.0 / (2.0 * pi); // 229.1831180523293;

  var year = 0;
  var satrec = {};
  satrec.error = 0;
  satrec.satnum = longstr1.substring(2, 7);
  satrec.epochyr = parseInt(longstr1.substring(18, 20), 10);
  satrec.epochdays = parseFloat(longstr1.substring(20, 32));
  satrec.ndot = parseFloat(longstr1.substring(33, 43));
  satrec.nddot = parseFloat(".".concat(parseInt(longstr1.substring(44, 50), 10), "E").concat(longstr1.substring(50, 52)));
  satrec.bstar = parseFloat("".concat(longstr1.substring(53, 54), ".").concat(parseInt(longstr1.substring(54, 59), 10), "E").concat(longstr1.substring(59, 61))); // satrec.satnum = longstr2.substring(2, 7);

  satrec.inclo = parseFloat(longstr2.substring(8, 16));
  satrec.nodeo = parseFloat(longstr2.substring(17, 25));
  satrec.ecco = parseFloat(".".concat(longstr2.substring(26, 33)));
  satrec.argpo = parseFloat(longstr2.substring(34, 42));
  satrec.mo = parseFloat(longstr2.substring(43, 51));
  satrec.no = parseFloat(longstr2.substring(52, 63)); // ---- find no, ndot, nddot ----

  satrec.no /= xpdotp; //   rad/min
  // satrec.nddot= satrec.nddot * Math.pow(10.0, nexp);
  // satrec.bstar= satrec.bstar * Math.pow(10.0, ibexp);
  // ---- convert to sgp4 units ----

  satrec.a = Math.pow(satrec.no * tumin, -2.0 / 3.0);
  satrec.ndot /= xpdotp * 1440.0; // ? * minperday

  satrec.nddot /= xpdotp * 1440.0 * 1440; // ---- find standard orbital elements ----

  satrec.inclo *= deg2rad;
  satrec.nodeo *= deg2rad;
  satrec.argpo *= deg2rad;
  satrec.mo *= deg2rad;
  satrec.alta = satrec.a * (1.0 + satrec.ecco) - 1.0;
  satrec.altp = satrec.a * (1.0 - satrec.ecco) - 1.0; // ----------------------------------------------------------------
  // find sgp4epoch time of element set
  // remember that sgp4 uses units of days from 0 jan 1950 (sgp4epoch)
  // and minutes from the epoch (time)
  // ----------------------------------------------------------------
  // ---------------- temp fix for years from 1957-2056 -------------------
  // --------- correct fix will occur when year is 4-digit in tle ---------

  if (satrec.epochyr < 57) {
    year = satrec.epochyr + 2000;
  } else {
    year = satrec.epochyr + 1900;
  }

  var mdhmsResult = days2mdhms(year, satrec.epochdays);
  var mon = mdhmsResult.mon,
      day = mdhmsResult.day,
      hr = mdhmsResult.hr,
      minute = mdhmsResult.minute,
      sec = mdhmsResult.sec;
  satrec.jdsatepoch = jday(year, mon, day, hr, minute, sec); //  ---------------- initialize the orbit at sgp4epoch -------------------

  sgp4init(satrec, {
    opsmode: opsmode,
    satn: satrec.satnum,
    epoch: satrec.jdsatepoch - 2433281.5,
    xbstar: satrec.bstar,
    xecco: satrec.ecco,
    xargpo: satrec.argpo,
    xinclo: satrec.inclo,
    xmo: satrec.mo,
    xno: satrec.no,
    xnodeo: satrec.nodeo
  });
  return satrec;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function propagate() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Return a position and velocity vector for a given date and time.
  var satrec = args[0];
  var date = Array.prototype.slice.call(args, 1);
  var j = jday.apply(void 0, _toConsumableArray(date));
  var m = (j - satrec.jdsatepoch) * minutesPerDay;
  return sgp4(satrec, m);
}

function dopplerFactor(location, position, velocity) {
  var mfactor = 7.292115E-5;
  var c = 299792.458; // Speed of light in km/s

  var range = {
    x: position.x - location.x,
    y: position.y - location.y,
    z: position.z - location.z
  };
  range.w = Math.sqrt(Math.pow(range.x, 2) + Math.pow(range.y, 2) + Math.pow(range.z, 2));
  var rangeVel = {
    x: velocity.x + mfactor * location.y,
    y: velocity.y - mfactor * location.x,
    z: velocity.z
  };

  function sign(value) {
    return value >= 0 ? 1 : -1;
  }

  var rangeRate = (range.x * rangeVel.x + range.y * rangeVel.y + range.z * rangeVel.z) / range.w;
  return 1 + rangeRate / c * sign(rangeRate);
}

function radiansToDegrees(radians) {
  return radians * rad2deg;
}
function degreesToRadians(degrees) {
  return degrees * deg2rad;
}
function degreesLat(radians) {
  if (radians < -pi / 2 || radians > pi / 2) {
    throw new RangeError('Latitude radians must be in range [-pi/2; pi/2].');
  }

  return radiansToDegrees(radians);
}
function degreesLong(radians) {
  if (radians < -pi || radians > pi) {
    throw new RangeError('Longitude radians must be in range [-pi; pi].');
  }

  return radiansToDegrees(radians);
}
function radiansLat(degrees) {
  if (degrees < -90 || degrees > 90) {
    throw new RangeError('Latitude degrees must be in range [-90; 90].');
  }

  return degreesToRadians(degrees);
}
function radiansLong(degrees) {
  if (degrees < -180 || degrees > 180) {
    throw new RangeError('Longitude degrees must be in range [-180; 180].');
  }

  return degreesToRadians(degrees);
}
function geodeticToEcf(geodetic) {
  var longitude = geodetic.longitude,
      latitude = geodetic.latitude,
      height = geodetic.height;
  var a = 6378.137;
  var b = 6356.7523142;
  var f = (a - b) / a;
  var e2 = 2 * f - f * f;
  var normal = a / Math.sqrt(1 - e2 * (Math.sin(latitude) * Math.sin(latitude)));
  var x = (normal + height) * Math.cos(latitude) * Math.cos(longitude);
  var y = (normal + height) * Math.cos(latitude) * Math.sin(longitude);
  var z = (normal * (1 - e2) + height) * Math.sin(latitude);
  return {
    x: x,
    y: y,
    z: z
  };
}
function eciToGeodetic(eci, gmst) {
  // http://www.celestrak.com/columns/v02n03/
  var a = 6378.137;
  var b = 6356.7523142;
  var R = Math.sqrt(eci.x * eci.x + eci.y * eci.y);
  var f = (a - b) / a;
  var e2 = 2 * f - f * f;
  var longitude = Math.atan2(eci.y, eci.x) - gmst;

  while (longitude < -pi) {
    longitude += twoPi;
  }

  while (longitude > pi) {
    longitude -= twoPi;
  }

  var kmax = 20;
  var k = 0;
  var latitude = Math.atan2(eci.z, Math.sqrt(eci.x * eci.x + eci.y * eci.y));
  var C;

  while (k < kmax) {
    C = 1 / Math.sqrt(1 - e2 * (Math.sin(latitude) * Math.sin(latitude)));
    latitude = Math.atan2(eci.z + a * C * e2 * Math.sin(latitude), R);
    k += 1;
  }

  var height = R / Math.cos(latitude) - a * C;
  return {
    longitude: longitude,
    latitude: latitude,
    height: height
  };
}
function ecfToEci(ecf, gmst) {
  // ccar.colorado.edu/ASEN5070/handouts/coordsys.doc
  //
  // [X]     [C -S  0][X]
  // [Y]  =  [S  C  0][Y]
  // [Z]eci  [0  0  1][Z]ecf
  //
  var X = ecf.x * Math.cos(gmst) - ecf.y * Math.sin(gmst);
  var Y = ecf.x * Math.sin(gmst) + ecf.y * Math.cos(gmst);
  var Z = ecf.z;
  return {
    x: X,
    y: Y,
    z: Z
  };
}
function eciToEcf(eci, gmst) {
  // ccar.colorado.edu/ASEN5070/handouts/coordsys.doc
  //
  // [X]     [C -S  0][X]
  // [Y]  =  [S  C  0][Y]
  // [Z]eci  [0  0  1][Z]ecf
  //
  //
  // Inverse:
  // [X]     [C  S  0][X]
  // [Y]  =  [-S C  0][Y]
  // [Z]ecf  [0  0  1][Z]eci
  var x = eci.x * Math.cos(gmst) + eci.y * Math.sin(gmst);
  var y = eci.x * -Math.sin(gmst) + eci.y * Math.cos(gmst);
  var z = eci.z;
  return {
    x: x,
    y: y,
    z: z
  };
}

function topocentric(observerGeodetic, satelliteEcf) {
  // http://www.celestrak.com/columns/v02n02/
  // TS Kelso's method, except I'm using ECF frame
  // and he uses ECI.
  var longitude = observerGeodetic.longitude,
      latitude = observerGeodetic.latitude;
  var observerEcf = geodeticToEcf(observerGeodetic);
  var rx = satelliteEcf.x - observerEcf.x;
  var ry = satelliteEcf.y - observerEcf.y;
  var rz = satelliteEcf.z - observerEcf.z;
  var topS = Math.sin(latitude) * Math.cos(longitude) * rx + Math.sin(latitude) * Math.sin(longitude) * ry - Math.cos(latitude) * rz;
  var topE = -Math.sin(longitude) * rx + Math.cos(longitude) * ry;
  var topZ = Math.cos(latitude) * Math.cos(longitude) * rx + Math.cos(latitude) * Math.sin(longitude) * ry + Math.sin(latitude) * rz;
  return {
    topS: topS,
    topE: topE,
    topZ: topZ
  };
}
/**
 * @param {Object} tc
 * @param {Number} tc.topS Positive horizontal vector S due south.
 * @param {Number} tc.topE Positive horizontal vector E due east.
 * @param {Number} tc.topZ Vector Z normal to the surface of the earth (up).
 * @returns {Object}
 */


function topocentricToLookAngles(tc) {
  var topS = tc.topS,
      topE = tc.topE,
      topZ = tc.topZ;
  var rangeSat = Math.sqrt(topS * topS + topE * topE + topZ * topZ);
  var El = Math.asin(topZ / rangeSat);
  var Az = Math.atan2(-topE, topS) + pi;
  return {
    azimuth: Az,
    elevation: El,
    rangeSat: rangeSat // Range in km

  };
}

function ecfToLookAngles(observerGeodetic, satelliteEcf) {
  var topocentricCoords = topocentric(observerGeodetic, satelliteEcf);
  return topocentricToLookAngles(topocentricCoords);
}




/***/ }),

/***/ "./src/js/api/SpaceObjectType.ts":
/*!***************************************!*\
  !*** ./src/js/api/SpaceObjectType.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpaceObjectType": () => (/* binding */ SpaceObjectType)
/* harmony export */ });
var SpaceObjectType;
(function (SpaceObjectType) {
    SpaceObjectType[SpaceObjectType["UNKNOWN"] = 0] = "UNKNOWN";
    SpaceObjectType[SpaceObjectType["PAYLOAD"] = 1] = "PAYLOAD";
    SpaceObjectType[SpaceObjectType["ROCKET_BODY"] = 2] = "ROCKET_BODY";
    SpaceObjectType[SpaceObjectType["DEBRIS"] = 3] = "DEBRIS";
    SpaceObjectType[SpaceObjectType["SPECIAL"] = 4] = "SPECIAL";
    SpaceObjectType[SpaceObjectType["RADAR_MEASUREMENT"] = 5] = "RADAR_MEASUREMENT";
    SpaceObjectType[SpaceObjectType["RADAR_TRACK"] = 6] = "RADAR_TRACK";
    SpaceObjectType[SpaceObjectType["RADAR_OBJECT"] = 7] = "RADAR_OBJECT";
    SpaceObjectType[SpaceObjectType["BALLISTIC_MISSILE"] = 8] = "BALLISTIC_MISSILE";
    SpaceObjectType[SpaceObjectType["STAR"] = 9] = "STAR";
    SpaceObjectType[SpaceObjectType["INTERGOVERNMENTAL_ORGANIZATION"] = 10] = "INTERGOVERNMENTAL_ORGANIZATION";
    SpaceObjectType[SpaceObjectType["SUBORBITAL_PAYLOAD_OPERATOR"] = 11] = "SUBORBITAL_PAYLOAD_OPERATOR";
    SpaceObjectType[SpaceObjectType["PAYLOAD_OWNER"] = 12] = "PAYLOAD_OWNER";
    SpaceObjectType[SpaceObjectType["METEOROLOGICAL_ROCKET_LAUNCH_AGENCY_OR_MANUFACTURER"] = 13] = "METEOROLOGICAL_ROCKET_LAUNCH_AGENCY_OR_MANUFACTURER";
    SpaceObjectType[SpaceObjectType["PAYLOAD_MANUFACTURER"] = 14] = "PAYLOAD_MANUFACTURER";
    SpaceObjectType[SpaceObjectType["LAUNCH_AGENCY"] = 15] = "LAUNCH_AGENCY";
    SpaceObjectType[SpaceObjectType["LAUNCH_SITE"] = 16] = "LAUNCH_SITE";
    SpaceObjectType[SpaceObjectType["LAUNCH_POSITION"] = 17] = "LAUNCH_POSITION";
    SpaceObjectType[SpaceObjectType["LAUNCH_FACILITY"] = 18] = "LAUNCH_FACILITY";
    SpaceObjectType[SpaceObjectType["CONTROL_FACILITY"] = 19] = "CONTROL_FACILITY";
    SpaceObjectType[SpaceObjectType["GROUND_SENSOR_STATION"] = 20] = "GROUND_SENSOR_STATION";
    SpaceObjectType[SpaceObjectType["OPTICAL"] = 21] = "OPTICAL";
    SpaceObjectType[SpaceObjectType["MECHANICAL"] = 22] = "MECHANICAL";
    SpaceObjectType[SpaceObjectType["PHASED_ARRAY_RADAR"] = 23] = "PHASED_ARRAY_RADAR";
    SpaceObjectType[SpaceObjectType["OBSERVER"] = 24] = "OBSERVER";
    SpaceObjectType[SpaceObjectType["BISTATIC_RADIO_TELESCOPE"] = 25] = "BISTATIC_RADIO_TELESCOPE";
    SpaceObjectType[SpaceObjectType["COUNTRY"] = 26] = "COUNTRY";
    SpaceObjectType[SpaceObjectType["LAUNCH_VEHICLE_MANUFACTURER"] = 27] = "LAUNCH_VEHICLE_MANUFACTURER";
    SpaceObjectType[SpaceObjectType["ENGINE_MANUFACTURER"] = 28] = "ENGINE_MANUFACTURER";
})(SpaceObjectType || (SpaceObjectType = {}));


/***/ }),

/***/ "./src/js/lib/constants.ts":
/*!*********************************!*\
  !*** ./src/js/lib/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZOOM_EXP": () => (/* binding */ ZOOM_EXP),
/* harmony export */   "PI": () => (/* binding */ PI),
/* harmony export */   "TAU": () => (/* binding */ TAU),
/* harmony export */   "DEG2RAD": () => (/* binding */ DEG2RAD),
/* harmony export */   "RAD2DEG": () => (/* binding */ RAD2DEG),
/* harmony export */   "MILLISECONDS_PER_DAY": () => (/* binding */ MILLISECONDS_PER_DAY),
/* harmony export */   "MINUTES_PER_DAY": () => (/* binding */ MINUTES_PER_DAY),
/* harmony export */   "PLANETARIUM_DIST": () => (/* binding */ PLANETARIUM_DIST),
/* harmony export */   "RADIUS_OF_DRAW_SUN": () => (/* binding */ RADIUS_OF_DRAW_SUN),
/* harmony export */   "SUN_SCALAR_DISTANCE": () => (/* binding */ SUN_SCALAR_DISTANCE),
/* harmony export */   "RADIUS_OF_DRAW_MOON": () => (/* binding */ RADIUS_OF_DRAW_MOON),
/* harmony export */   "MOON_SCALAR_DISTANCE": () => (/* binding */ MOON_SCALAR_DISTANCE),
/* harmony export */   "cMPerSec": () => (/* binding */ cMPerSec),
/* harmony export */   "cKmPerSec": () => (/* binding */ cKmPerSec),
/* harmony export */   "cKmPerMs": () => (/* binding */ cKmPerMs),
/* harmony export */   "RADIUS_OF_EARTH": () => (/* binding */ RADIUS_OF_EARTH),
/* harmony export */   "GROUND_BUFFER_DISTANCE": () => (/* binding */ GROUND_BUFFER_DISTANCE),
/* harmony export */   "RADIUS_OF_SUN": () => (/* binding */ RADIUS_OF_SUN),
/* harmony export */   "STAR_DISTANCE": () => (/* binding */ STAR_DISTANCE),
/* harmony export */   "DISTANCE_TO_SUN": () => (/* binding */ DISTANCE_TO_SUN)
/* harmony export */ });
const ZOOM_EXP = 3;
const PI = Math.PI;
const TAU = 2 * Math.PI;
const DEG2RAD = TAU / 360;
const RAD2DEG = 360 / TAU;
// export const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
// TODO: this is really MILLISECONDS_TO_DAYS
const MILLISECONDS_PER_DAY = 1.15741e-8;
const MINUTES_PER_DAY = 1440;
const PLANETARIUM_DIST = 3;
const RADIUS_OF_DRAW_SUN = 9000;
const SUN_SCALAR_DISTANCE = 250000;
const RADIUS_OF_DRAW_MOON = 4000;
const MOON_SCALAR_DISTANCE = 200000;
const cMPerSec = 299792458;
const cKmPerSec = 299792458 / 1000;
const cKmPerMs = 299792458 / 1000 / 1000;
const RADIUS_OF_EARTH = 6371; // Radius of Earth in kilometers
const GROUND_BUFFER_DISTANCE = 1; // Distance objects are placed above earth to avoid z-buffer fighting
const RADIUS_OF_SUN = 695700; // Radius of the Sun in kilometers
const STAR_DISTANCE = 250000; // Artificial Star Distance - Lower numberrReduces webgl depth buffer
const DISTANCE_TO_SUN = 149597870; // Distance from Earth to the Sun in kilometers


/***/ }),

/***/ "./src/js/lib/external/meuusjs.ts":
/*!****************************************!*\
  !*** ./src/js/lib/external/meuusjs.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A)
/* harmony export */ });
/* eslint-disable */
// @ts-nocheck
const A = {
    JMod: 2400000.5,
    J2000: 2451545,
    J1900: 2415020,
    B1900: 2415020.3135,
    B1950: 2433282.4235,
    JulianYear: 365.25,
    JulianCentury: 36525,
    BesselianYear: 365.2421988,
    AU: 149597870,
};
A.EclCoord = function (a, b, c) {
    if (isNaN(a) || isNaN(b))
        throw Error('Invalid EclCoord object: (' + a + ', ' + b + ')');
    this.lat = a;
    this.lng = b;
    void 0 !== c && (this.h = c);
};
A.EclCoord.prototype = {
    toWgs84String: function () {
        return A.Math.formatNum((180 * this.lat) / Math.PI) + ', ' + A.Math.formatNum((180 * -this.lng) / Math.PI);
    },
};
A.EclCoordfromWgs84 = function (a, b, c) {
    return new A.EclCoord((a * Math.PI) / 180, (-b * Math.PI) / 180, c);
};
A.EqCoord = function (a, b) {
    if (isNaN(a) || isNaN(b))
        throw Error('Invalid EqCoord object: (' + a + ', ' + b + ')');
    this.ra = a;
    this.dec = b;
};
A.EqCoord.prototype = {
    toString: function () {
        return 'ra:' + A.Math.formatNum((180 * this.ra) / Math.PI) + ', dec:' + A.Math.formatNum((180 * this.dec) / Math.PI);
    },
};
A.HzCoord = function (a, b) {
    if (isNaN(a) || isNaN(b))
        throw Error('Invalid HzCoord object: (' + a + ', ' + b + ')');
    this.az = a;
    this.alt = b;
};
A.HzCoord.prototype = {
    toString: function () {
        return 'azi:' + A.Math.formatNum((180 * this.az) / Math.PI) + ', alt:' + A.Math.formatNum((180 * this.alt) / Math.PI);
    },
};
A.Coord = {
    dmsToDeg: function (a, b, c, d) {
        d = (60 * (60 * b + c) + d) / 3600;
        return a ? -d : d;
    },
    calcAngle: function (a, b, c, d) {
        return (A.Coord.dmsToDeg(a, b, c, d) * Math.PI) / 180;
    },
    calcRA: function (a, b, c) {
        return ((A.Coord.dmsToDeg(!1, a, b, c) % 24) * 15 * Math.PI) / 180;
    },
    secondsToHMSStr: function (a) {
        var b = Math.floor(a / 86400);
        a = A.Math.pMod(a, 86400);
        var c = Math.floor(a / 3600) % 24, d = Math.floor(a / 60) % 60;
        a = Math.floor(a % 60);
        return (0 !== b ? b + 'd ' : '') + (10 > c ? '0' : '') + c + ':' + (10 > d ? '0' : '') + d + ':' + (10 > a ? '0' : '') + a;
    },
    secondsToHMStr: function (a) {
        var b = Math.floor(a / 86400);
        a = A.Math.pMod(a, 86400);
        var c = Math.floor(a / 3600) % 24;
        a = Math.floor(a / 60) % 60;
        return (0 !== b ? b + 'd ' : '') + (10 > c ? '0' : '') + c + ':' + (10 > a ? '0' : '') + a;
    },
    eqToEcl: function (a, b) {
        var c = Math.sin(a.ra), d = Math.sin(a.dec), e = Math.cos(a.dec), f = Math.sin(b);
        b = Math.cos(b);
        return new A.EclCoord(Math.atan2(c * b + (d / e) * f, Math.cos(a.ra)), Math.asin(d * b - e * f * c));
    },
    eclToEq: function (a, b) {
        var c = Math.sin(a.lat), d = Math.sin(a.lng), e = Math.cos(a.lng), f = Math.sin(b);
        b = Math.cos(b);
        let a2 = Math.atan2(c * b - (d / e) * f, Math.cos(a.lat));
        0 > a2 && (a2 += 2 * Math.PI);
        return new A.EqCoord(a2, Math.asin(d * b + e * f * c));
    },
    eqToHz: function (a, b, c) {
        c = c - b.lng - a.ra;
        var d = Math.cos(c), e = Math.sin(b.lat);
        b = Math.cos(b.lat);
        var f = Math.sin(a.dec);
        a = Math.cos(a.dec);
        return new A.HzCoord(Math.atan2(Math.sin(c), d * e - (f / a) * b), Math.asin(e * f + b * a * d));
    },
};
A.DeltaT = {
    jdToJde: function (a, b) {
        b || (b = A.DeltaT.estimate(a));
        return a + b / 86400;
    },
    jdeToJd: function (a, b) {
        b || (b = A.DeltaT.estimate(a));
        return a - b / 86400;
    },
    decimalYear: function (a) {
        a = A.JulianDay.jdToCalendar(a);
        return a.y + (a.m - 0.5) / 12;
    },
    estimate: function (a) {
        var b = A.DeltaT.decimalYear(a);
        a = Math.pow;
        return -500 > b
            ? -20 + 32 * a((b - 1820) / 100, 2)
            : 500 > b
                ? ((b /= 100), 10583.6 - 1014.41 * b + 33.78311 * a(b, 2) - 5.952053 * a(b, 3) - 0.1798452 * a(b, 4) + 0.022174192 * a(b, 5) + 0.0090316521 * a(b, 6))
                : 1600 > b
                    ? ((b = (b - 1e3) / 100), 1574.2 - 556.01 * b + 71.23472 * a(b, 2) + 0.319781 * a(b, 3) - 0.8503463 * a(b, 4) - 0.005050998 * a(b, 5) + 0.0083572073 * a(b, 6))
                    : 1700 > b
                        ? ((b -= 1600), 120 - 0.9808 * b - 0.01532 * a(b, 2) + a(b, 3) / 7129)
                        : 1800 > b
                            ? ((b -= 1700), 8.83 + 0.1603 * b - 0.0059285 * a(b, 2) + 1.3336e-4 * a(b, 3) - a(b, 4) / 1174e3)
                            : 1860 > b
                                ? ((b -= 1800), 13.72 - 0.332447 * b + 0.0068612 * a(b, 2) + 0.0041116 * a(b, 3) - 3.7436e-4 * a(b, 4) + 1.21272e-5 * a(b, 5) - 1.699e-7 * a(b, 6) + 8.75e-10 * a(b, 7))
                                : 1900 > b
                                    ? ((b -= 1860), 7.62 + 0.5737 * b - 0.251754 * a(b, 2) + 0.01680668 * a(b, 3) - 4.473624e-4 * a(b, 4) + a(b, 5) / 233174)
                                    : 1920 > b
                                        ? ((b -= 1900), -2.79 + 1.494119 * b - 0.0598939 * a(b, 2) + 0.0061966 * a(b, 3) - 1.97e-4 * a(b, 4))
                                        : 1941 > b
                                            ? ((b -= 1920), 21.2 + 0.84493 * b - 0.0761 * a(b, 2) + 0.0020936 * a(b, 3))
                                            : 1961 > b
                                                ? ((b -= 1950), 29.07 + 0.407 * b - a(b, 2) / 233 + a(b, 3) / 2547)
                                                : 1986 > b
                                                    ? ((b -= 1975), 45.45 + 1.067 * b - a(b, 2) / 260 - a(b, 3) / 718)
                                                    : 2005 > b
                                                        ? ((b -= 2e3), 63.86 + 0.3345 * b - 0.060374 * a(b, 2) + 0.0017275 * a(b, 3) + 6.51814e-4 * a(b, 4) + 2.373599e-5 * a(b, 5))
                                                        : 2050 > b
                                                            ? ((b -= 2e3), 62.92 + 0.32217 * b + 0.005589 * a(b, 2))
                                                            : 2150 > b
                                                                ? -20 + 32 * a((b - 1820) / 100, 2) - 0.5628 * (2150 - b)
                                                                : -20 + 32 * a((b - 1820) / 100, 2);
    },
};
A.Globe = {
    Er: 6378.14,
    Fl: 1 / 298.257,
    parallaxConstants: function (a, b) {
        b || (b = 0);
        var c = 1 - A.Globe.Fl;
        b = (0.001 * b) / A.Globe.Er;
        return { rhoslat: Math.sin(Math.atan(c * Math.tan(a))) * c + b * Math.sin(a), rhoclat: Math.cos(Math.atan(c * Math.tan(a))) + b * Math.cos(a) };
    },
};
A.Interp = {
    newLen3: function (a, b, c) {
        if (3 != c.length)
            throw 'Error not 3';
        if (b == a)
            throw 'Error no x range';
        var d = c[1] - c[0], e = c[2] - c[1];
        return { x1: a, x3: b, y: c, a: d, b: e, c: e - d, abSum: d + e, xSum: b + a, xDiff: b - a };
    },
    interpolateX: function (a, b) {
        return A.Interp.interpolateN(a, (2 * b - a.xSum) / a.xDiff);
    },
    interpolateN: function (a, b) {
        return a.y[1] + 0.5 * b * (a.abSum + b * a.c);
    },
};
A.JulianDay = function (a, b) {
    a instanceof Date && (a = A.JulianDay.dateToJD(a));
    this.jd = a;
    this.deltaT = b ? b : A.DeltaT.estimate(this.jd);
    this.jde = A.DeltaT.jdToJde(this.jd, this.deltaT);
};
A.JulianDay.prototype = {
    toCalendar: function () {
        return A.JulianDay.jdToCalendar(this.jd);
    },
    toDate: function () {
        return A.JulianDay.jdToDate(this.jd);
    },
    jdJ2000Century: function () {
        return (this.jd - A.J2000) / A.JulianCentury;
    },
    jdeJ2000Century: function () {
        return (this.jde - A.J2000) / A.JulianCentury;
    },
    startOfDay: function () {
        return new A.JulianDay(Math.floor(this.jde - 0.5) + 0.5, this.deltaT);
    },
};
A.JulianDay.gregorianTimeStart = Date.UTC(1582, 9, 4);
A.JulianDay.jdFromGregorian = function (a, b, c) {
    return new A.JulianDay(A.JulianDay.jdFromGregorian(a, b, c));
};
A.JulianDay.jdFromJulian = function (a, b, c) {
    return new A.JulianDay(A.JulianDay.calendarJulianToJD(a, b, c));
};
A.JulianDay.jdFromJDE = function (a) {
    var b = A.DeltaT.estimate(a);
    a = A.DeltaT.jdeToJd(a, b);
    return new A.JulianDay(a, b);
};
A.JulianDay.dateToJD = function (a) {
    var b = a.getUTCDate() + A.JulianDay.secondsFromHMS(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds()) / 86400;
    return a.getTime() < A.JulianDay.gregorianTimeStart
        ? A.JulianDay.calendarJulianToJD(a.getUTCFullYear(), a.getUTCMonth() + 1, b)
        : A.JulianDay.calendarGregorianToJD(a.getUTCFullYear(), a.getUTCMonth() + 1, b);
};
A.JulianDay.calendarGregorianToJD = function (a, b, c) {
    if (1 == b || 2 == b)
        a--, (b += 12);
    var d = Math.floor(a / 100);
    return Math.floor((36525 * (a + 4716)) / 100) + Math.floor((306 * (b + 1)) / 10) + (2 - d + Math.floor(d / 4)) + c - 1524.5;
};
A.JulianDay.calendarJulianToJD = function (a, b, c) {
    if (1 == b || 2 == b)
        a--, (b += 12);
    return Math.floor((36525 * (a + 4716)) / 100) + Math.floor((306 * (b + 1)) / 10) + c - 1524.5;
};
A.JulianDay.secondsFromHMS = function (a, b, c) {
    return 3600 * a + 60 * b + c;
};
A.JulianDay.jdToDate = function (a) {
    var b = A.JulianDay.jdToCalendar(a);
    a = A.Math.modF(a + 0.5)[1];
    a = Math.round(86400 * a);
    return new Date(Date.UTC(b.y, b.m - 1, Math.floor(b.d), Math.floor(a / 3600) % 24, Math.floor(a / 60) % 60, Math.floor(a % 60)));
};
A.JulianDay.jdToCalendar = function (a) {
    a = A.Math.modF(a + 0.5);
    var b = a[0], c = b;
    2299151 <= b && ((c = Math.floor((100 * b - 186721625) / 3652425)), (c = b + 1 + c - Math.floor(c / 4)));
    var d = c + 1524;
    b = Math.floor((100 * d - 12210) / 36525);
    var e = Math.floor((36525 * b) / 100);
    c = Math.floor((1e4 * (d - e)) / 306001);
    a = d - e - Math.floor((306001 * c) / 1e4) + a[1];
    c = 14 == c || 15 == c ? c - 13 : c - 1;
    return { y: 1 == c || 2 == c ? Math.floor(b) - 4715 : Math.floor(b) - 4716, m: c, d: a };
};
A.JulianDay.leapYearGregorian = function (a) {
    return (0 === a % 4 && 0 !== a % 100) || 0 === a % 400;
};
A.JulianDay.dayOfYear = function (a, b, c, d) {
    a = 2;
    d && a--;
    return A.JulianDay._wholeMonths(b, a) + c;
};
A.JulianDay._wholeMonths = function (a, b) {
    return Math.round((275 * a) / 9 - ((a + 9) / 12) * b - 30);
};
A.Math = {
    pMod: function (a, b) {
        a %= b;
        0 > a && (a += b);
        return a;
    },
    modF: function (a) {
        return 0 > a ? ((a = -a), [-Math.floor(a), -(a % 1)]) : [Math.floor(a), a % 1];
    },
    horner: function (a, b) {
        var c = b.length - 1;
        if (0 >= c)
            throw 'empty array not supported';
        for (var d = b[c]; 0 < c;)
            c--, (d = d * a + b[c]);
        return d;
    },
    formatNum: function (a, b) {
        b = Math.pow(10, b | 4);
        return Math.round(a * b) / b;
    },
};
A.Moon = {
    parallax: function (a) {
        return Math.asin(6378.14 / a);
    },
    apparentEquatorial: function (a) {
        var b = A.Moon.geocentricPosition(a), c = A.Nutation.nutation(a);
        a = A.Nutation.meanObliquityLaskar(a) + c.deltaobliquity;
        return { eq: A.Coord.eclToEq(new A.EclCoord(b.lng + c.deltalng, b.lat), a), delta: b.delta };
    },
    apparentTopocentric: function (a, b, c) {
        var d = A.Moon.apparentEquatorial(a), e = A.Globe.parallaxConstants(b.lat, b.h), f = A.Moon.parallax(d.delta);
        c || (c = A.Sidereal.apparentInRa(a));
        return { eq: A.Parallax.topocentric(d.eq, f, e.rhoslat, e.rhoclat, b.lng, c), delta: d.delta };
    },
    topocentricPosition: function (a, b, c) {
        var d = A.Sidereal.apparentInRa(a);
        a = A.Moon.apparentTopocentric(a, b, d);
        var e = A.Coord.eqToHz(a.eq, b, d);
        !0 === c && (e.alt += A.Refraction.bennett2(e.alt));
        b = A.Moon.parallacticAngle(b.lat, d - (b.lng + a.eq.ra), a.eq.dec);
        return { hz: e, eq: a.eq, delta: a.delta, q: b };
    },
    approxTransit: function (a, b) {
        a = a.startOfDay();
        return A.Rise.approxTransit(b, A.Sidereal.apparent0UT(a), A.Moon.apparentTopocentric(a, b).eq);
    },
    approxTimes: function (a, b) {
        a = a.startOfDay();
        var c = A.Moon.apparentTopocentric(a, b), d = A.Moon.parallax(c.delta);
        d = A.Rise.stdh0Lunar(d);
        a = A.Sidereal.apparent0UT(a);
        return A.Rise.approxTimes(b, d, a, c.eq);
    },
    times: function (a, b) {
        a = a.startOfDay();
        var c = A.Moon.apparentTopocentric(new A.JulianDay(a.jd - 1, a.deltaT), b), d = A.Moon.apparentTopocentric(a, b), e = A.Moon.apparentTopocentric(new A.JulianDay(a.jd + 1, a.deltaT), b), f = A.Moon.parallax(d.delta);
        f = A.Rise.stdh0Lunar(f);
        var g = A.Sidereal.apparent0UT(a);
        return A.Rise.times(b, a.deltaT, f, g, [c.eq, d.eq, e.eq]);
    },
    parallacticAngle: function (a, b, c) {
        return Math.atan2(Math.sin(b), Math.tan(a) * Math.cos(c) - Math.sin(c) * Math.cos(b));
    },
    geocentricPosition: function (a) {
        var b = Math.PI / 180, c = a.jdeJ2000Century();
        a = A.Math.pMod(A.Math.horner(c, [218.3164477 * b, 481267.88123421 * b, -0.0015786 * b, b / 538841, -b / 65194e3]), 2 * Math.PI);
        var d = A.Math.pMod(A.Math.horner(c, [297.8501921 * b, 445267.1114034 * b, -0.0018819 * b, b / 545868, -b / 113065e3]), 2 * Math.PI), e = A.Math.pMod(A.Math.horner(c, [357.5291092 * b, 35999.0502909 * b, -1.535e-4 * b, b / 2449e4]), 2 * Math.PI), f = A.Math.pMod(A.Math.horner(c, [134.9633964 * b, 477198.8675055 * b, 0.0087414 * b, b / 69699, -b / 14712e3]), 2 * Math.PI), g = A.Math.pMod(A.Math.horner(c, [93.272095 * b, 483202.0175233 * b, -0.0036539 * b, -b / 3526e3, b / 86331e4]), 2 * Math.PI), l = 119.75 * b + 131.849 * b * c, m = 53.09 * b + 479264.29 * b * c, h = 313.45 * b + 481266.484 * b * c;
        c = A.Math.horner(c, [1, -0.002516, -7.4e-6]);
        var p = c * c;
        m = 3958 * Math.sin(l) + 1962 * Math.sin(a - g) + 318 * Math.sin(m);
        var n = 0;
        l = -2235 * Math.sin(a) + 382 * Math.sin(h) + 175 * Math.sin(l - g) + 175 * Math.sin(l + g) + 127 * Math.sin(a - f) - 115 * Math.sin(a + f);
        for (h = 0; h < A.Moon.ta.length; h++) {
            var k = A.Moon.ta[h];
            var r = d * k[0] + e * k[1] + f * k[2] + g * k[3], q = Math.sin(r);
            r = Math.cos(r);
            switch (k[1]) {
                case 0:
                    m += k[4] * q;
                    n += k[5] * r;
                    break;
                case 1:
                case -1:
                    m += k[4] * q * c;
                    n += k[5] * r * c;
                    break;
                case 2:
                case -2:
                    m += k[4] * q * p;
                    n += k[5] * r * p;
                    break;
                default:
                    throw 'error';
            }
        }
        for (h = 0; h < A.Moon.tb.length; h++)
            switch (((k = A.Moon.tb[h]), (q = Math.sin(d * k[0] + e * k[1] + f * k[2] + g * k[3])), k[1])) {
                case 0:
                    l += k[4] * q;
                    break;
                case 1:
                case -1:
                    l += k[4] * q * c;
                    break;
                case 2:
                case -2:
                    l += k[4] * q * p;
                    break;
                default:
                    throw 'error';
            }
        return { lng: A.Math.pMod(a, 2 * Math.PI) + 1e-6 * m * b, lat: 1e-6 * l * b, delta: 385000.56 + 0.001 * n };
    },
    ta: [
        [0, 0, 1, 0, 6288774, -20905355],
        [2, 0, -1, 0, 1274027, -3699111],
        [2, 0, 0, 0, 658314, -2955968],
        [0, 0, 2, 0, 213618, -569925],
        [0, 1, 0, 0, -185116, 48888],
        [0, 0, 0, 2, -114332, -3149],
        [2, 0, -2, 0, 58793, 246158],
        [2, -1, -1, 0, 57066, -152138],
        [2, 0, 1, 0, 53322, -170733],
        [2, -1, 0, 0, 45758, -204586],
        [0, 1, -1, 0, -40923, -129620],
        [1, 0, 0, 0, -34720, 108743],
        [0, 1, 1, 0, -30383, 104755],
        [2, 0, 0, -2, 15327, 10321],
        [0, 0, 1, 2, -12528, 0],
        [0, 0, 1, -2, 10980, 79661],
        [4, 0, -1, 0, 10675, -34782],
        [0, 0, 3, 0, 10034, -23210],
        [4, 0, -2, 0, 8548, -21636],
        [2, 1, -1, 0, -7888, 24208],
        [2, 1, 0, 0, -6766, 30824],
        [1, 0, -1, 0, -5163, -8379],
        [1, 1, 0, 0, 4987, -16675],
        [2, -1, 1, 0, 4036, -12831],
        [2, 0, 2, 0, 3994, -10445],
        [4, 0, 0, 0, 3861, -11650],
        [2, 0, -3, 0, 3665, 14403],
        [0, 1, -2, 0, -2689, -7003],
        [2, 0, -1, 2, -2602, 0],
        [2, -1, -2, 0, 2390, 10056],
        [1, 0, 1, 0, -2348, 6322],
        [2, -2, 0, 0, 2236, -9884],
        [0, 1, 2, 0, -2120, 5751],
        [0, 2, 0, 0, -2069, 0],
        [2, -2, -1, 0, 2048, -4950],
        [2, 0, 1, -2, -1773, 4130],
        [2, 0, 0, 2, -1595, 0],
        [4, -1, -1, 0, 1215, -3958],
        [0, 0, 2, 2, -1110, 0],
        [3, 0, -1, 0, -892, 3258],
        [2, 1, 1, 0, -810, 2616],
        [4, -1, -2, 0, 759, -1897],
        [0, 2, -1, 0, -713, -2117],
        [2, 2, -1, 0, -700, 2354],
        [2, 1, -2, 0, 691, 0],
        [2, -1, 0, -2, 596, 0],
        [4, 0, 1, 0, 549, -1423],
        [0, 0, 4, 0, 537, -1117],
        [4, -1, 0, 0, 520, -1571],
        [1, 0, -2, 0, -487, -1739],
        [2, 1, 0, -2, -399, 0],
        [0, 0, 2, -2, -381, -4421],
        [1, 1, 1, 0, 351, 0],
        [3, 0, -2, 0, -340, 0],
        [4, 0, -3, 0, 330, 0],
        [2, -1, 2, 0, 327, 0],
        [0, 2, 1, 0, -323, 1165],
        [1, 1, -1, 0, 299, 0],
        [2, 0, 3, 0, 294, 0],
        [2, 0, -1, -2, 0, 8752],
    ],
    tb: [
        [0, 0, 0, 1, 5128122],
        [0, 0, 1, 1, 280602],
        [0, 0, 1, -1, 277693],
        [2, 0, 0, -1, 173237],
        [2, 0, -1, 1, 55413],
        [2, 0, -1, -1, 46271],
        [2, 0, 0, 1, 32573],
        [0, 0, 2, 1, 17198],
        [2, 0, 1, -1, 9266],
        [0, 0, 2, -1, 8822],
        [2, -1, 0, -1, 8216],
        [2, 0, -2, -1, 4324],
        [2, 0, 1, 1, 4200],
        [2, 1, 0, -1, -3359],
        [2, -1, -1, 1, 2463],
        [2, -1, 0, 1, 2211],
        [2, -1, -1, -1, 2065],
        [0, 1, -1, -1, -1870],
        [4, 0, -1, -1, 1828],
        [0, 1, 0, 1, -1794],
        [0, 0, 0, 3, -1749],
        [0, 1, -1, 1, -1565],
        [1, 0, 0, 1, -1491],
        [0, 1, 1, 1, -1475],
        [0, 1, 1, -1, -1410],
        [0, 1, 0, -1, -1344],
        [1, 0, 0, -1, -1335],
        [0, 0, 3, 1, 1107],
        [4, 0, 0, -1, 1021],
        [4, 0, -1, 1, 833],
        [0, 0, 1, -3, 777],
        [4, 0, -2, 1, 671],
        [2, 0, 0, -3, 607],
        [2, 0, 2, -1, 596],
        [2, -1, 1, -1, 491],
        [2, 0, -2, 1, -451],
        [0, 0, 3, -1, 439],
        [2, 0, 2, 1, 422],
        [2, 0, -3, -1, 421],
        [2, 1, -1, 1, -366],
        [2, 1, 0, 1, -351],
        [4, 0, 0, 1, 331],
        [2, -1, 1, 1, 315],
        [2, -2, 0, -1, 302],
        [0, 0, 1, 3, -283],
        [2, 1, 1, -1, -229],
        [1, 1, 0, -1, 223],
        [1, 1, 0, 1, 223],
        [0, 1, -2, -1, -220],
        [2, 1, -1, -1, -220],
        [1, 0, 1, 1, -185],
        [2, -1, -2, -1, 181],
        [0, 1, 2, 1, -177],
        [4, 0, -2, -1, 176],
        [4, -1, -1, -1, 166],
        [1, 0, 1, -1, -164],
        [4, 0, 1, -1, 132],
        [1, 0, -1, -1, -119],
        [4, -1, 0, -1, 115],
        [2, -2, 0, 1, 107],
    ],
};
A.MoonIllum = {
    phaseAngleEq: function (a, b, c, d) {
        a = A.MoonIllum._coselong(a, c);
        return Math.atan2(d * Math.sin(Math.acos(a)), b - d * a);
    },
    phaseAngleEq2: function (a, b) {
        return Math.acos(-A.MoonIllum._coselong(a, b));
    },
    illuminated: function (a) {
        return (1 + Math.cos(a)) / 2;
    },
    positionAngle: function (a, b) {
        var c = Math.cos(b.dec);
        return Math.atan2(c * Math.sin(b.ra - a.ra), Math.sin(b.dec) * Math.cos(a.dec) - c * Math.sin(a.dec) * Math.cos(b.ra - a.ra));
    },
    _coselong: function (a, b) {
        return Math.sin(b.dec) * Math.sin(a.dec) + Math.cos(b.dec) * Math.cos(a.dec) * Math.cos(b.ra - a.ra);
    },
};
A.Nutation = {
    nutation: function (a) {
        a = a.jdeJ2000Century();
        for (var b = (A.Math.horner(a, [297.85036, 445267.11148, -0.0019142, 1 / 189474]) * Math.PI) / 180, c = (A.Math.horner(a, [357.52772, 35999.05034, -1.603e-4, -1 / 3e5]) * Math.PI) / 180, d = (A.Math.horner(a, [134.96298, 477198.867398, 0.0086972, 1 / 5620]) * Math.PI) / 180, e = (A.Math.horner(a, [93.27191, 483202.017538, -0.0036825, 1 / 327270]) * Math.PI) / 180, f = (A.Math.horner(a, [125.04452, -1934.136261, 0.0020708, 1 / 45e4]) * Math.PI) / 180, g = 0, l = 0, m = A.Nutation.table22A.length - 1; 0 <= m; m--) {
            var h = A.Nutation.table22A[m], p = h[0] * b + h[1] * c + h[2] * d + h[3] * e + h[4] * f, n = Math.cos(p);
            g += Math.sin(p) * (h[5] + h[6] * a);
            l += n * (h[7] + h[8] * a);
        }
        return { deltalng: (1e-4 / 3600) * g * (Math.PI / 180), deltaobliquity: (1e-4 / 3600) * l * (Math.PI / 180) };
    },
    nutationInRA: function (a) {
        var b = A.Nutation.meanObliquityLaskar(a);
        a = A.Nutation.nutation(a);
        return a.deltalng * Math.cos(b + a.deltaobliquity);
    },
    trueObliquity: function (a) {
        var b = A.Nutation.meanObliquityLaskar(a);
        a = A.Nutation.nutation(a);
        return b + a.deltaobliquity;
    },
    meanObliquity: function (a) {
        return A.Math.horner(a.jdeJ2000Century(), [
            (84381.448 / 3600) * (Math.PI / 180),
            (-46.815 / 3600) * (Math.PI / 180),
            (-5.9e-4 / 3600) * (Math.PI / 180),
            (0.001813 / 3600) * (Math.PI / 180),
        ]);
    },
    meanObliquityLaskar: function (a) {
        return A.Math.horner(0.01 * a.jdeJ2000Century(), [
            (84381.448 / 3600) * (Math.PI / 180),
            (-4680.93 / 3600) * (Math.PI / 180),
            (-1.55 / 3600) * (Math.PI / 180),
            (1999.25 / 3600) * (Math.PI / 180),
            (-51.38 / 3600) * (Math.PI / 180),
            (-249.67 / 3600) * (Math.PI / 180),
            (-39.05 / 3600) * (Math.PI / 180),
            (7.12 / 3600) * (Math.PI / 180),
            (27.87 / 3600) * (Math.PI / 180),
            (5.79 / 3600) * (Math.PI / 180),
            (2.45 / 3600) * (Math.PI / 180),
        ]);
    },
    table22A: [
        [0, 0, 0, 0, 1, -171996, -174.2, 92025, 8.9],
        [-2, 0, 0, 2, 2, -13187, -1.6, 5736, -3.1],
        [0, 0, 0, 2, 2, -2274, -0.2, 977, -0.5],
        [0, 0, 0, 0, 2, 2062, 0.2, -895, 0.5],
        [0, 1, 0, 0, 0, 1426, -3.4, 54, -0.1],
        [0, 0, 1, 0, 0, 712, 0.1, -7, 0],
        [-2, 1, 0, 2, 2, -517, 1.2, 224, -0.6],
        [0, 0, 0, 2, 1, -386, -0.4, 200, 0],
        [0, 0, 1, 2, 2, -301, 0, 129, -0.1],
        [-2, -1, 0, 2, 2, 217, -0.5, -95, 0.3],
        [-2, 0, 1, 0, 0, -158, 0, 0, 0],
        [-2, 0, 0, 2, 1, 129, 0.1, -70, 0],
        [0, 0, -1, 2, 2, 123, 0, -53, 0],
        [2, 0, 0, 0, 0, 63, 0, 0, 0],
        [0, 0, 1, 0, 1, 63, 0.1, -33, 0],
        [2, 0, -1, 2, 2, -59, 0, 26, 0],
        [0, 0, -1, 0, 1, -58, -0.1, 32, 0],
        [0, 0, 1, 2, 1, -51, 0, 27, 0],
        [-2, 0, 2, 0, 0, 48, 0, 0, 0],
        [0, 0, -2, 2, 1, 46, 0, -24, 0],
        [2, 0, 0, 2, 2, -38, 0, 16, 0],
        [0, 0, 2, 2, 2, -31, 0, 13, 0],
        [0, 0, 2, 0, 0, 29, 0, 0, 0],
        [-2, 0, 1, 2, 2, 29, 0, -12, 0],
        [0, 0, 0, 2, 0, 26, 0, 0, 0],
        [-2, 0, 0, 2, 0, -22, 0, 0, 0],
        [0, 0, -1, 2, 1, 21, 0, -10, 0],
        [0, 2, 0, 0, 0, 17, -0.1, 0, 0],
        [2, 0, -1, 0, 1, 16, 0, -8, 0],
        [-2, 2, 0, 2, 2, -16, 0.1, 7, 0],
        [0, 1, 0, 0, 1, -15, 0, 9, 0],
        [-2, 0, 1, 0, 1, -13, 0, 7, 0],
        [0, -1, 0, 0, 1, -12, 0, 6, 0],
        [0, 0, 2, -2, 0, 11, 0, 0, 0],
        [2, 0, -1, 2, 1, -10, 0, 5, 0],
        [2, 0, 1, 2, 2, -8, 0, 3, 0],
        [0, 1, 0, 2, 2, 7, 0, -3, 0],
        [-2, 1, 1, 0, 0, -7, 0, 0, 0],
        [0, -1, 0, 2, 2, -7, 0, 3, 0],
        [2, 0, 0, 2, 1, -7, 0, 3, 0],
        [2, 0, 1, 0, 0, 6, 0, 0, 0],
        [-2, 0, 2, 2, 2, 6, 0, -3, 0],
        [-2, 0, 1, 2, 1, 6, 0, -3, 0],
        [2, 0, -2, 0, 1, -6, 0, 3, 0],
        [2, 0, 0, 0, 1, -6, 0, 3, 0],
        [0, -1, 1, 0, 0, 5, 0, 0, 0],
        [-2, -1, 0, 2, 1, -5, 0, 3, 0],
        [-2, 0, 0, 0, 1, -5, 0, 3, 0],
        [0, 0, 2, 2, 1, -5, 0, 3, 0],
        [-2, 0, 2, 0, 1, 4, 0, 0, 0],
        [-2, 1, 0, 2, 1, 4, 0, 0, 0],
        [0, 0, 1, -2, 0, 4, 0, 0, 0],
        [-1, 0, 1, 0, 0, -4, 0, 0, 0],
        [-2, 1, 0, 0, 0, -4, 0, 0, 0],
        [1, 0, 0, 0, 0, -4, 0, 0, 0],
        [0, 0, 1, 2, 0, 3, 0, 0, 0],
        [0, 0, -2, 2, 2, -3, 0, 0, 0],
        [-1, -1, 1, 0, 0, -3, 0, 0, 0],
        [0, 1, 1, 0, 0, -3, 0, 0, 0],
        [0, -1, 1, 2, 2, -3, 0, 0, 0],
        [2, -1, -1, 2, 2, -3, 0, 0, 0],
        [0, 0, 3, 2, 2, -3, 0, 0, 0],
        [2, -1, 0, 2, 2, -3, 0, 0, 0],
    ],
};
A.Parallax = {
    earthsunParallax: ((8.794 / 60 / 60) * Math.PI) / 180,
    horizontal: function (a) {
        return ((8.794 / 60 / 60) * Math.PI) / 180 / a;
    },
    topocentric: function (a, b, c, d, e, f) {
        e = A.Math.pMod(f - e - a.ra, 2 * Math.PI);
        b = Math.sin(b);
        f = Math.cos(e);
        var g = Math.cos(a.dec);
        e = Math.atan2(-d * b * Math.sin(e), g - d * b * f);
        return new A.EqCoord(a.ra + e, Math.atan2((Math.sin(a.dec) - c * b) * Math.cos(e), g - d * b * f));
    },
    topocentric2: function (a, b, c, d, e, f) {
        e = A.Math.pMod(f - e - a.ra, 2 * Math.PI);
        f = Math.cos(a.dec);
        return new A.EqCoord(a.ra + (-b * d * Math.sin(e)) / f, a.dec + -b * (c * f - d * Math.cos(e) * Math.sin(a.dec)));
    },
};
A.Refraction = {
    bennett: function (a) {
        0 > a && (a = 0);
        var b = Math.PI / 180;
        return b / 60 / Math.tan(a + (7.31 * b * b) / (a + 4.4 * b));
    },
    bennett2: function (a) {
        var b = Math.PI / 180, c = 60 / b, d = 0.06 / c;
        c = 14.7 * c * b;
        b *= 13;
        a = A.Refraction.bennett(a);
        return a - d * Math.sin(c * a + b);
    },
    saemundsson: function (a) {
        var b = Math.PI / 180;
        return (1.02 * b) / 60 / Math.tan(a + (10.3 * b * b) / (a + 5.11 * b));
    },
};
A.Rise = {
    meanRefraction: (0.5667 * Math.PI) / 180,
    stdh0Stellar: (-0.5667 * Math.PI) / 180,
    stdh0Solar: (-0.8333 * Math.PI) / 180,
    stdh0LunarMean: (0.125 * Math.PI) / 180,
    stdh0Lunar: function (a) {
        return 0.7275 * a - A.Rise.meanRefraction;
    },
    circumpolar: function (a, b, c) {
        a = (Math.sin(b) - Math.sin(a) * Math.sin(c)) / (Math.cos(a) * Math.cos(c));
        return -1 > a || 1 < a ? null : a;
    },
    approxTransit: function (a, b, c) {
        return (43200 * (c.ra + a.lng)) / Math.PI - b;
    },
    approxTimes: function (a, b, c, d) {
        b = A.Rise.circumpolar(a.lat, b, d.dec);
        if (!b)
            return null;
        b = (43200 * Math.acos(b)) / Math.PI;
        a = (43200 * (d.ra + a.lng)) / Math.PI - c;
        return {
            transit: A.Math.pMod(a, 86400),
            transitd: Math.floor(a / 86400),
            rise: A.Math.pMod(a - b, 86400),
            rised: Math.floor((a - b) / 86400),
            set: A.Math.pMod(a + b, 86400),
            setd: Math.floor((a + b) / 86400),
        };
    },
    times: function (a, b, c, d, e) {
        function f(e) {
            var f = A.Math.pMod(d + (360.985647 * e) / 360, 86400), g = e + b, h = A.Interp.interpolateX(l, g);
            g = A.Interp.interpolateX(m, g);
            f = (f * Math.PI) / 43200 - (a.lng + h);
            h = Math.cos(g);
            return A.Math.pMod(e + (((p * Math.sin(g) + n * h * Math.cos(f) - c) / (h * n * Math.sin(f))) * 43200) / Math.PI, 86400);
        }
        var g = A.Rise.approxTimes(a, c, d, e[1]);
        if (!g)
            return null;
        var l = A.Interp.newLen3(-86400, 86400, [e[0].ra, e[1].ra, e[2].ra]), m = A.Interp.newLen3(-86400, 86400, [e[0].dec, e[1].dec, e[2].dec]);
        e = d + (360.985647 * g.transit) / 360;
        var h = A.Interp.interpolateX(l, g.transit + b);
        g.transit = A.Math.pMod(g.transit - (e - (43200 * (a.lng + h)) / Math.PI), 86400);
        var p = Math.sin(a.lat), n = Math.cos(a.lat);
        g.rise = f(g.rise);
        g.set = f(g.set);
        return g;
    },
};
A.Sidereal = {
    iau82: [24110.54841, 8640184.812866, 0.093104, 6.2e-6],
    jdToCFrac: function (a) {
        a = A.Math.modF(a.jd + 0.5);
        return [new A.JulianDay(a[0] - 0.5).jdJ2000Century(), a[1]];
    },
    mean: function (a) {
        return A.Math.pMod(A.Sidereal._mean(a), 86400);
    },
    _mean: function (a) {
        a = A.Sidereal._mean0UT(a);
        return a.s + 86636.55536784 * a.f;
    },
    _meanInRA: function (a) {
        a = A.Sidereal._mean0UT(a);
        return (a.s * Math.PI) / 43200 + 2.0054758187 * a.f * Math.PI;
    },
    mean0UT: function (a) {
        a = A.Sidereal._mean0UT(a);
        return A.Math.pMod(a.s, 86400);
    },
    _mean0UT: function (a) {
        a = A.Sidereal.jdToCFrac(a);
        return { s: A.Math.horner(a[0], A.Sidereal.iau82), f: a[1] };
    },
    apparentInRa: function (a) {
        var b = A.Sidereal._meanInRA(a);
        a = A.Nutation.nutationInRA(a);
        return A.Math.pMod(b + a, 2 * Math.PI);
    },
    apparent: function (a) {
        var b = A.Sidereal._mean(a);
        a = (648e3 * A.Nutation.nutationInRA(a)) / Math.PI / 15;
        return A.Math.pMod(b + a, 86400);
    },
    apparentLocal: function (a, b) {
        a = A.Sidereal.apparent(a);
        return A.Math.pMod(a - (43200 * b) / Math.PI, 86400);
    },
    apparent0UT: function (a) {
        var b = A.Math.modF(a.jd + 0.5);
        a = A.Math.modF(a.jde + 0.5);
        b = A.Math.horner((b[0] - 0.5 - A.J2000) / 36525, A.Sidereal.iau82) + 86636.55536784 * b[1];
        a = (648e3 * A.Nutation.nutationInRA(new A.JulianDay(a[0]))) / Math.PI / 15;
        return A.Math.pMod(b + a, 86400);
    },
};
A.Solar = {
    earthsunDelta: 149597870,
    apparentEquatorial: function (a) {
        var b = a.jdJ2000Century(), c = A.Solar.node(b);
        b = A.Solar.apparentLongitude(b, c);
        a = A.Nutation.meanObliquityLaskar(a) + ((0.00256 * Math.PI) / 180) * Math.cos(c);
        c = Math.sin(b);
        return new A.EqCoord(Math.atan2(Math.cos(a) * c, Math.cos(b)), Math.asin(Math.sin(a) * c));
    },
    apparentTopocentric: function (a, b, c) {
        var d = A.Solar.apparentEquatorial(a), e = A.Globe.parallaxConstants(b.lat, b.h);
        c || (c = A.Sidereal.apparentInRa(a));
        return A.Parallax.topocentric2(d, A.Parallax.earthsunParallax, e.rhoslat, e.rhoclat, b.lng, c);
    },
    topocentricPosition: function (a, b, c) {
        var d = A.Sidereal.apparentInRa(a);
        a = A.Solar.apparentTopocentric(a, b, d);
        b = A.Coord.eqToHz(a, b, d);
        !0 === c && (b.alt += A.Refraction.bennett2(b.alt));
        return { hz: b, eq: a };
    },
    approxTransit: function (a, b) {
        a = a.startOfDay();
        return A.Rise.approxTransit(b, A.Sidereal.apparent0UT(a), A.Solar.apparentTopocentric(a, b));
    },
    approxTimes: function (a, b) {
        var c = a.startOfDay();
        a = A.Solar.apparentTopocentric(c, b);
        var d = A.Rise.stdh0Solar;
        c = A.Sidereal.apparent0UT(c);
        return A.Rise.approxTimes(b, d, c, a);
    },
    times: function (a, b) {
        a = a.startOfDay();
        var c = A.Solar.apparentTopocentric(new A.JulianDay(a.jd - 1, a.deltaT), b), d = A.Solar.apparentTopocentric(a, b), e = A.Solar.apparentTopocentric(new A.JulianDay(a.jd + 1, a.deltaT), b), f = A.Rise.stdh0Solar, g = A.Sidereal.apparent0UT(a);
        return A.Rise.times(b, a.deltaT, f, g, [c, d, e]);
    },
    meanAnomaly: function (a) {
        return (A.Math.horner(a, [357.52911, 35999.05029, -1.537e-4]) * Math.PI) / 180;
    },
    trueLongitude: function (a) {
        var b = (A.Math.horner(a, [280.46646, 36000.76983, 3.032e-4]) * Math.PI) / 180, c = A.Solar.meanAnomaly(a);
        a = ((A.Math.horner(a, [1.914602, -0.004817, -1.4e-5]) * Math.sin(c) + (0.019993 - 1.01e-4 * a) * Math.sin(2 * c) + 2.89e-4 * Math.sin(3 * c)) * Math.PI) / 180;
        return { s: A.Math.pMod(b + a, 2 * Math.PI), v: A.Math.pMod(c + a, 2 * Math.PI) };
    },
    apparentLongitude: function (a, b) {
        b || (b = A.Solar.node(a));
        return A.Solar.trueLongitude(a).s - (0.00569 * Math.PI) / 180 - ((0.00478 * Math.PI) / 180) * Math.sin(b);
    },
    node: function (a) {
        return ((125.04 - 1934.136 * a) * Math.PI) / 180;
    },
};
A.Solistice = {
    march: function (a) {
        return 1e3 > a ? A.Solistice._eq(a, A.Solistice.mc0) : A.Solistice._eq(a - 2e3, A.Solistice.mc2);
    },
    june: function (a) {
        return 1e3 > a ? A.Solistice._eq(a, A.Solistice.jc0) : A.Solistice._eq(a - 2e3, A.Solistice.jc2);
    },
    september: function (a) {
        return 1e3 > a ? A.Solistice._eq(a, A.Solistice.sc0) : A.Solistice._eq(a - 2e3, A.Solistice.sc2);
    },
    december: function (a) {
        return 1e3 > a ? A.Solistice._eq(a, A.Solistice.dc0) : A.Solistice._eq(a - 2e3, A.Solistice.dc2);
    },
    _eq: function (a, b) {
        a = A.Math.horner(0.001 * a, b);
        b = (a - A.J2000) / A.JulianCentury;
        var c = ((35999.373 * Math.PI) / 180) * b - (2.47 * Math.PI) / 180;
        c = 1 + 0.0334 * Math.cos(c) + 7e-4 * Math.cos(2 * c);
        for (var d = 0, e = this.terms.length - 1; 0 <= e; e--) {
            var f = this.terms[e];
            d += f[0] * Math.cos(((f[1] + f[2] * b) * Math.PI) / 180);
        }
        return a + (1e-5 * d) / c;
    },
    mc0: [1721139.29189, 365242.1374, 0.06134, 0.00111, -7.1e-4],
    jc0: [1721233.25401, 365241.72562, -0.05232, 0.00907, 2.5e-4],
    sc0: [1721325.70455, 365242.49558, -0.11677, -0.00297, 7.4e-4],
    dc0: [1721414.39987, 365242.88257, -0.00769, -0.00933, -6e-5],
    mc2: [2451623.80984, 365242.37404, 0.05169, -0.00411, -5.7e-4],
    jc2: [2451716.56767, 365241.62603, 0.00325, 0.00888, -3e-4],
    sc2: [2451810.21715, 365242.01767, -0.11575, 0.00337, 7.8e-4],
    dc2: [2451900.05952, 365242.74049, -0.06223, -0.00823, 3.2e-4],
    terms: [
        [485, 324.96, 1934.136],
        [203, 337.23, 32964.467],
        [199, 342.08, 20.186],
        [182, 27.85, 445267.112],
        [156, 73.14, 45036.886],
        [136, 171.52, 22518.443],
        [77, 222.54, 65928.934],
        [74, 296.72, 3034.906],
        [70, 243.58, 9037.513],
        [58, 119.81, 33718.147],
        [52, 297.17, 150.678],
        [50, 21.02, 2281.226],
        [45, 247.54, 29929.562],
        [44, 325.15, 31555.956],
        [29, 60.93, 4443.417],
        [18, 155.12, 67555.328],
        [17, 288.79, 4562.452],
        [16, 198.04, 62894.029],
        [14, 199.76, 31436.921],
        [12, 95.39, 14577.848],
        [12, 287.11, 31931.756],
        [12, 320.81, 34777.259],
        [9, 227.73, 1222.114],
        [8, 15.45, 16859.074],
    ],
};



/***/ }),

/***/ "./src/js/timeManager/transforms.ts":
/*!******************************************!*\
  !*** ./src/js/timeManager/transforms.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDayOfYear": () => (/* binding */ getDayOfYear),
/* harmony export */   "jday": () => (/* binding */ jday),
/* harmony export */   "localToZulu": () => (/* binding */ localToZulu),
/* harmony export */   "dateFromJday": () => (/* binding */ dateFromJday),
/* harmony export */   "dateToLocalInIso": () => (/* binding */ dateToLocalInIso)
/* harmony export */ });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/constants */ "./src/js/lib/constants.ts");
/* harmony import */ var _lib_external_dateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/external/dateFormat */ "./src/js/lib/external/dateFormat.js");


const getDayOfYear = (date) => {
    date = date || new Date();
    const _isLeapYear = (dateIn) => {
        const year = dateIn.getUTCFullYear();
        if ((year & 3) !== 0)
            return false;
        return year % 100 !== 0 || year % 400 === 0;
    };
    const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    const mn = date.getMonth();
    const dn = date.getUTCDate();
    let dayOfYear = dayCount[mn] + dn;
    if (mn > 1 && _isLeapYear(date))
        dayOfYear++;
    return dayOfYear;
};
const jday = (year, mon, day, hr, minute, sec) => {
    if (!year) {
        const now = new Date();
        const jDayStart = new Date(now.getUTCFullYear(), 0, 0);
        const jDayDiff = now.getDate() - jDayStart.getDate();
        return Math.floor(jDayDiff / _lib_constants__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_PER_DAY);
    }
    else {
        return (367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor((275 * mon) / 9.0) + day + 1721013.5 + ((sec / 60.0 + minute) / 60.0 + hr) / 24.0);
    }
};
const localToZulu = (date) => {
    const dateStr = (0,_lib_external_dateFormat__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(date, 'isoDateTime', true);
    const dateArr = dateStr.split(' ');
    date = new Date(dateArr[0] + 'T' + dateArr[1] + 'Z');
    return date;
};
const dateFromJday = (year, day) => {
    const date = new Date(year, 0); // initialize a date in `year-01-01`
    return new Date(date.setDate(day));
};
const dateToLocalInIso = (date) => {
    const offsetMs = date.getTimezoneOffset() * 60 * 1000;
    const msLocal = date.getTime() - offsetMs;
    const dateLocal = new Date(msLocal);
    let iso = dateLocal.toISOString();
    iso = iso.replace('T', ' ');
    const isoLocal = iso.slice(0, 19) + ' ' + dateLocal.toString().slice(25, 31);
    return isoLocal;
};


/***/ }),

/***/ "./src/js/webworker/constants.ts":
/*!***************************************!*\
  !*** ./src/js/webworker/constants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultGd": () => (/* binding */ defaultGd),
/* harmony export */   "emptySensor": () => (/* binding */ emptySensor)
/* harmony export */ });
// //////////////////////////////////////////////////////////////////////////////
// Code
// //////////////////////////////////////////////////////////////////////////////
const defaultGd = {
    latitude: null,
    longitude: 0,
    height: 0,
};
const emptySensor = {
    observerGd: {
        latitude: null,
        longitude: 0,
        height: 0,
    },
    alt: null,
    country: '',
    lat: null,
    lon: null,
    name: '',
    obsmaxaz: 0,
    obsmaxel: 0,
    obsmaxrange: 0,
    obsminaz: 0,
    obsminel: 0,
    obsminrange: 0,
    shortName: '',
    staticNum: 0,
    sun: '',
    volume: false,
    zoom: '',
};


/***/ }),

/***/ "./src/js/webworker/positionCruncher/calculations.ts":
/*!***********************************************************!*\
  !*** ./src/js/webworker/positionCruncher/calculations.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lookAnglesToEcf": () => (/* binding */ lookAnglesToEcf),
/* harmony export */   "propTime": () => (/* binding */ propTime),
/* harmony export */   "checkSunExclusion": () => (/* binding */ checkSunExclusion),
/* harmony export */   "isInFov": () => (/* binding */ isInFov),
/* harmony export */   "setupTimeVariables": () => (/* binding */ setupTimeVariables),
/* harmony export */   "createLatLonHei": () => (/* binding */ createLatLonHei),
/* harmony export */   "isInValidElevation": () => (/* binding */ isInValidElevation),
/* harmony export */   "isSensorDeepSpace": () => (/* binding */ isSensorDeepSpace)
/* harmony export */ });
/* harmony import */ var satellite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! satellite.js */ "./node_modules/satellite.js/dist/satellite.es.js");
/* harmony import */ var _api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/SpaceObjectType */ "./src/js/api/SpaceObjectType.ts");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constants */ "./src/js/lib/constants.ts");
/* harmony import */ var _lib_external_meuusjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/external/meuusjs */ "./src/js/lib/external/meuusjs.ts");
/* harmony import */ var _timeManager_transforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../timeManager/transforms */ "./src/js/timeManager/transforms.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/js/webworker/constants.ts");






// TODO: create a way to determine if observerGd is using old satellite.js naming or lon,lat,alt
// so that we can import satMath.ts instead
const lookAnglesToEcf = (azDeg, elDeg, rng, obsLat, obsLong, obsAlt) => {
    // site ecef in meters
    const geodeticCoords = {
        latitude: obsLat,
        longitude: obsLong,
        height: obsAlt,
    };
    const ecf = satellite_js__WEBPACK_IMPORTED_MODULE_0__.geodeticToEcf(geodeticCoords);
    // some needed calculations
    const slat = Math.sin(obsLat);
    const slon = Math.sin(obsLong);
    const clat = Math.cos(obsLat);
    const clon = Math.cos(obsLong);
    const azRad = _lib_constants__WEBPACK_IMPORTED_MODULE_2__.DEG2RAD * azDeg;
    const elRad = _lib_constants__WEBPACK_IMPORTED_MODULE_2__.DEG2RAD * elDeg;
    // az,el,range to sez convertion
    const south = -rng * Math.cos(elRad) * Math.cos(azRad);
    const east = rng * Math.cos(elRad) * Math.sin(azRad);
    const zenith = rng * Math.sin(elRad);
    const x = slat * clon * south + -slon * east + clat * clon * zenith + ecf.x;
    const y = slat * slon * south + clon * east + clat * slon * zenith + ecf.y;
    const z = -clat * south + slat * zenith + ecf.z;
    return { x, y, z };
};
/* Returns Current Propagation Time */
const propTime = (dynamicOffsetEpoch, staticOffset, propRate) => {
    const now = new Date();
    const dynamicPropOffset = now.getTime() - dynamicOffsetEpoch;
    now.setTime(dynamicOffsetEpoch + staticOffset + dynamicPropOffset * propRate);
    return now;
};
const checkSunExclusion = (sensor, j, gmst, now) => {
    var jdo = new _lib_external_meuusjs__WEBPACK_IMPORTED_MODULE_3__.A.JulianDay(j); // now
    var coord = _lib_external_meuusjs__WEBPACK_IMPORTED_MODULE_3__.A.EclCoordfromWgs84(0, 0, 0);
    var coord2 = _lib_external_meuusjs__WEBPACK_IMPORTED_MODULE_3__.A.EclCoordfromWgs84(sensor.observerGd.latitude * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG, sensor.observerGd.longitude * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG, sensor.observerGd.height);
    // AZ / EL Calculation
    var tp = _lib_external_meuusjs__WEBPACK_IMPORTED_MODULE_3__.A.Solar.topocentricPosition(jdo, coord, false);
    var tpRel = _lib_external_meuusjs__WEBPACK_IMPORTED_MODULE_3__.A.Solar.topocentricPosition(jdo, coord2, false);
    const sunAz = tp.hz.az * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG + (180 % 360);
    const sunEl = (tp.hz.alt * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG) % 360;
    const sunElRel = (tpRel.hz.alt * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG) % 360;
    // Range Calculation
    var T = new _lib_external_meuusjs__WEBPACK_IMPORTED_MODULE_3__.A.JulianDay(_lib_external_meuusjs__WEBPACK_IMPORTED_MODULE_3__.A.JulianDay.dateToJD(now)).jdJ2000Century();
    let sunG = (_lib_external_meuusjs__WEBPACK_IMPORTED_MODULE_3__.A.Solar.meanAnomaly(T) * 180) / _lib_constants__WEBPACK_IMPORTED_MODULE_2__.PI;
    sunG = sunG % 360.0;
    const sunR = 1.00014 - 0.01671 * Math.cos(sunG) - 0.00014 * Math.cos(2 * sunG);
    const sunRange = (sunR * 149597870700) / 1000; // au to km conversion
    // RAE to ECI
    const sunECI = satellite_js__WEBPACK_IMPORTED_MODULE_0__.ecfToEci(lookAnglesToEcf(sunAz, sunEl, sunRange, 0, 0, 0), gmst);
    return sensor.observerGd !== _constants__WEBPACK_IMPORTED_MODULE_5__.defaultGd && (sensor.type === _api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.OPTICAL || sensor.type === _api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.OBSERVER) && sunElRel > -6
        ? [true, sunECI]
        : [false, sunECI];
};
const isInFov = (lookangles, sensor) => {
    const azimuth = lookangles.azimuth * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG;
    const elevation = lookangles.elevation * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG;
    const rangeSat = lookangles.rangeSat;
    if (sensor.obsminaz > sensor.obsmaxaz) {
        if (((azimuth >= sensor.obsminaz || azimuth <= sensor.obsmaxaz) &&
            elevation >= sensor.obsminel &&
            elevation <= sensor.obsmaxel &&
            rangeSat <= sensor.obsmaxrange &&
            rangeSat >= sensor.obsminrange) ||
            ((azimuth >= sensor.obsminaz2 || azimuth <= sensor.obsmaxaz2) &&
                elevation >= sensor.obsminel2 &&
                elevation <= sensor.obsmaxel2 &&
                rangeSat <= sensor.obsmaxrange2 &&
                rangeSat >= sensor.obsminrange2)) {
            return 1;
        }
    }
    else {
        if ((azimuth >= sensor.obsminaz &&
            azimuth <= sensor.obsmaxaz &&
            elevation >= sensor.obsminel &&
            elevation <= sensor.obsmaxel &&
            rangeSat <= sensor.obsmaxrange &&
            rangeSat >= sensor.obsminrange) ||
            (azimuth >= sensor.obsminaz2 &&
                azimuth <= sensor.obsmaxaz2 &&
                elevation >= sensor.obsminel2 &&
                elevation <= sensor.obsmaxel2 &&
                rangeSat <= sensor.obsmaxrange2 &&
                rangeSat >= sensor.obsminrange2)) {
            return 1;
        }
    }
    return 0;
};
const setupTimeVariables = (dynamicOffsetEpoch, staticOffset, propRate, isSunlightView, isMultiSensor, sensor) => {
    const now = propTime(dynamicOffsetEpoch, staticOffset, propRate);
    const j = (0,_timeManager_transforms__WEBPACK_IMPORTED_MODULE_4__.jday)(now.getUTCFullYear(), now.getUTCMonth() + 1, // Note, this function requires months in range 1-12.
    now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()) +
        now.getUTCMilliseconds() * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.MILLISECONDS_PER_DAY;
    const gmst = satellite_js__WEBPACK_IMPORTED_MODULE_0__.gstime(j);
    let isSunExclusion = false;
    let sunEci = { x: 0, y: 0, z: 0 };
    if (isSunlightView && !isMultiSensor) {
        [isSunExclusion, sunEci] = checkSunExclusion(sensor, j, gmst, now);
    }
    const j2 = (0,_timeManager_transforms__WEBPACK_IMPORTED_MODULE_4__.jday)(now.getUTCFullYear(), now.getUTCMonth() + 1, // Note, this function requires months in range 1-12.
    now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds() + 1) +
        now.getUTCMilliseconds() * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.MILLISECONDS_PER_DAY;
    const gmstNext = satellite_js__WEBPACK_IMPORTED_MODULE_0__.gstime(j2);
    return {
        now,
        j,
        gmst,
        gmstNext,
        isSunExclusion,
        sunEci,
    };
};
const createLatLonHei = (lat, lon, hei) => ({
    longitude: lon,
    latitude: lat,
    height: hei,
});
const isInValidElevation = (lookangles, selectedSatFOV) => lookangles.elevation * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG > 0 && 90 - lookangles.elevation * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG < selectedSatFOV;
const isSensorDeepSpace = (mSensor, sensor) => {
    // TODO: This should use the sensors max range instead of sensor type
    if (mSensor.length > 1 && sensor.type === _api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.OPTICAL)
        return true;
    if (mSensor.length > 1 && sensor.type === _api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.OBSERVER)
        return true;
    if (mSensor.length > 1 && sensor.type === _api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.MECHANICAL)
        return true;
    return false;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./src/js/webworker/orbitCruncher.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onmessageProcessing": () => (/* binding */ onmessageProcessing),
/* harmony export */   "postMessageProcessing": () => (/* binding */ postMessageProcessing)
/* harmony export */ });
/* harmony import */ var satellite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! satellite.js */ "./node_modules/satellite.js/dist/satellite.es.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/constants */ "./src/js/lib/constants.ts");
/* harmony import */ var _timeManager_transforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timeManager/transforms */ "./src/js/timeManager/transforms.ts");
/* harmony import */ var _positionCruncher_calculations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./positionCruncher/calculations */ "./src/js/webworker/positionCruncher/calculations.ts");




let dynamicOffsetEpoch;
let staticOffset = 0;
let propRate = 1.0;
/** CONSTANTS */
const satCache = [];
let NUM_SEGS;
let orbitFadeFactor = 1.0;
// Handles Incomming Messages to sat-cruncher from main thread
try {
    onmessage = (m) => onmessageProcessing(m);
}
catch (e) {
    // If Jest isn't running then throw the error
    if (!process)
        throw e;
}
const onmessageProcessing = (m) => {
    var _a;
    if (m.data.isUpdate) {
        // Add Satellites
        if (!m.data.missile && m.data.satId < 99999) {
            satCache[m.data.satId] = satellite_js__WEBPACK_IMPORTED_MODULE_0__.twoline2satrec(m.data.TLE1, m.data.TLE2);
        }
        // Add Missiles
        if (m.data.missile) {
            satCache[m.data.satId] = m.data;
        }
        // Don't Add Anything Else
    }
    dynamicOffsetEpoch = typeof m.data.dynamicOffsetEpoch !== 'undefined' ? m.data.dynamicOffsetEpoch : dynamicOffsetEpoch;
    staticOffset = typeof m.data.staticOffset !== 'undefined' ? m.data.staticOffset : staticOffset;
    propRate = typeof m.data.propRate !== 'undefined' ? m.data.propRate : propRate;
    if (m.data.isInit) {
        const satData = JSON.parse(m.data.satData);
        orbitFadeFactor = JSON.parse(m.data.orbitFadeFactor);
        const sLen = satData.length - 1;
        let i = -1;
        while (i < sLen) {
            i++;
            delete satData[i]['id'];
            if (satData[i].static || satData[i].missile) {
                satCache[i] = satData[i];
            }
            else {
                satCache[i] = satellite_js__WEBPACK_IMPORTED_MODULE_0__.twoline2satrec(satData[i].TLE1, satData[i].TLE2);
            }
        }
        NUM_SEGS = m.data.numSegs;
    }
    // NOTE: Without "typeof" vanguard 1 is falsly
    if (typeof m.data.satId !== 'undefined') {
        // TODO: figure out how to calculate the orbit points on constant
        // position slices, not timeslices (ugly perigees on HEOs)
        const satId = m.data.satId;
        const pointsOut = new Float32Array((NUM_SEGS + 1) * 4);
        const nowDate = (0,_positionCruncher_calculations__WEBPACK_IMPORTED_MODULE_3__.propTime)(dynamicOffsetEpoch, staticOffset, propRate);
        const nowJ = (0,_timeManager_transforms__WEBPACK_IMPORTED_MODULE_2__.jday)(nowDate.getUTCFullYear(), nowDate.getUTCMonth() + 1, nowDate.getUTCDate(), nowDate.getUTCHours(), nowDate.getUTCMinutes(), nowDate.getUTCSeconds()) +
            nowDate.getUTCMilliseconds() * 1.15741e-8; // days per millisecond
        const now = (nowJ - satCache[satId].jdsatepoch) * 1440.0; // in minutes
        const len = NUM_SEGS + 1;
        let i = 0;
        if (satCache[satId].missile) {
            while (i < len) {
                const missile = satCache[satId];
                const x = Math.round(missile.altList.length * (i / NUM_SEGS));
                const missileTime = (0,_positionCruncher_calculations__WEBPACK_IMPORTED_MODULE_3__.propTime)(dynamicOffsetEpoch, staticOffset, propRate);
                const j = (0,_timeManager_transforms__WEBPACK_IMPORTED_MODULE_2__.jday)(missileTime.getUTCFullYear(), missileTime.getUTCMonth() + 1, // Note, this function requires months in range 1-12.
                missileTime.getUTCDate(), missileTime.getUTCHours(), missileTime.getUTCMinutes(), missileTime.getUTCSeconds()) +
                    missileTime.getUTCMilliseconds() * 1.15741e-8; // days per millisecond
                const gmst = satellite_js__WEBPACK_IMPORTED_MODULE_0__.gstime(j);
                const cosLat = Math.cos(missile.latList[x] * _lib_constants__WEBPACK_IMPORTED_MODULE_1__.DEG2RAD);
                const sinLat = Math.sin(missile.latList[x] * _lib_constants__WEBPACK_IMPORTED_MODULE_1__.DEG2RAD);
                const cosLon = Math.cos(missile.lonList[x] * _lib_constants__WEBPACK_IMPORTED_MODULE_1__.DEG2RAD + gmst);
                const sinLon = Math.sin(missile.lonList[x] * _lib_constants__WEBPACK_IMPORTED_MODULE_1__.DEG2RAD + gmst);
                pointsOut[i * 4] = (_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RADIUS_OF_EARTH + missile.altList[x]) * cosLat * cosLon;
                pointsOut[i * 4 + 1] = (_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RADIUS_OF_EARTH + missile.altList[x]) * cosLat * sinLon;
                pointsOut[i * 4 + 2] = (_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RADIUS_OF_EARTH + missile.altList[x]) * sinLat;
                pointsOut[i * 4 + 3] = Math.min(orbitFadeFactor * (len / (i + 1)), 1.0);
                i++;
            }
        }
        else {
            const period = (2 * Math.PI) / satCache[satId].no; // convert rads/min to min
            const timeslice = period / NUM_SEGS;
            while (i < len) {
                const t = now + i * timeslice;
                const p = (_a = satellite_js__WEBPACK_IMPORTED_MODULE_0__.sgp4(satCache[satId], t)) === null || _a === void 0 ? void 0 : _a.position;
                if (p.x && p.y && p.z) {
                    pointsOut[i * 4] = p.x;
                    pointsOut[i * 4 + 1] = p.y;
                    pointsOut[i * 4 + 2] = p.z;
                    pointsOut[i * 4 + 3] = Math.min(orbitFadeFactor * (len / (i + 1)), 1.0);
                }
                else {
                    pointsOut[i * 4] = 0;
                    pointsOut[i * 4 + 1] = 0;
                    pointsOut[i * 4 + 2] = 0;
                    pointsOut[i * 4 + 3] = 0;
                }
                i++;
            }
        }
        // TODO: figure out how this transferable buffer works
        postMessageProcessing({ pointsOut, satId });
    }
};
const postMessageProcessing = (data) => {
    const { pointsOut, satId } = data;
    try {
        postMessage({
            pointsOut: pointsOut.buffer,
            satId,
        }, [pointsOut.buffer]);
    }
    catch (e) {
        // If Jest isn't running then throw the error
        if (!process)
            throw e;
    }
};

})();

/******/ })()
;
//# sourceMappingURL=orbitCruncher.js.map