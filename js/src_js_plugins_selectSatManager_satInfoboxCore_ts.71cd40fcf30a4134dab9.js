"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_selectSatManager_satInfoboxCore_ts"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/plugins/selectSatManager/satInfoboxCore.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/plugins/selectSatManager/satInfoboxCore.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#sat-info-title {\n  margin-bottom: 5px;\n  font-size: 18px;\n}\n\n.sat-info-title-header {\n  font-size: 24px !important;\n  padding: 5px 0 !important;\n}\n\n.sat-info-section-header {\n  font-size: 18px;\n  text-align: center;\n  background: var(--colorTertiaryDarken1);\n  margin: 0px -10px 5px;\n  padding: 2px 0;\n  width: calc(100% + 20px);\n  color: var(--colorSecondary);\n}\n\n#sat-infobox a {\n  color: white;\n}\n\n.sat-infobox-links {\n  font-size: 12px;\n  margin: 10px 0;\n}\n\n.sat-info-row {\n  margin-bottom: 3px;\n  height: 18px;\n}\n\n#sat-site {\n  max-height: 40px;\n}\n\n#sat-site-row {\n  max-height: 40px;\n}\n\n.sat-info-key,\n.sat-info-value {\n  display: inline-block;\n}\n\n.sat-info-key {\n  font-size: 12px;\n  color: white;\n  float: left;\n}\n", "",{"version":3,"sources":["webpack://./src/js/plugins/selectSatManager/satInfoboxCore.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,uCAAuC;EACvC,qBAAqB;EACrB,cAAc;EACd,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb","sourcesContent":["#sat-info-title {\n  margin-bottom: 5px;\n  font-size: 18px;\n}\n\n.sat-info-title-header {\n  font-size: 24px !important;\n  padding: 5px 0 !important;\n}\n\n.sat-info-section-header {\n  font-size: 18px;\n  text-align: center;\n  background: var(--colorTertiaryDarken1);\n  margin: 0px -10px 5px;\n  padding: 2px 0;\n  width: calc(100% + 20px);\n  color: var(--colorSecondary);\n}\n\n#sat-infobox a {\n  color: white;\n}\n\n.sat-infobox-links {\n  font-size: 12px;\n  margin: 10px 0;\n}\n\n.sat-info-row {\n  margin-bottom: 3px;\n  height: 18px;\n}\n\n#sat-site {\n  max-height: 40px;\n}\n\n#sat-site-row {\n  max-height: 40px;\n}\n\n.sat-info-key,\n.sat-info-value {\n  display: inline-block;\n}\n\n.sat-info-key {\n  font-size: 12px;\n  color: white;\n  float: left;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/js/plugins/selectSatManager/satInfoboxCore.css":
/*!************************************************************!*\
  !*** ./src/js/plugins/selectSatManager/satInfoboxCore.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_satInfoboxCore_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./satInfoboxCore.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/plugins/selectSatManager/satInfoboxCore.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_satInfoboxCore_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_satInfoboxCore_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_satInfoboxCore_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_satInfoboxCore_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/plugins/selectSatManager/satInfoboxCore.ts":
/*!***********************************************************!*\
  !*** ./src/js/plugins/selectSatManager/satInfoboxCore.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sensorInfo": () => (/* binding */ sensorInfo),
/* harmony export */   "launchData": () => (/* binding */ launchData),
/* harmony export */   "nearObjectsLinkClick": () => (/* binding */ nearObjectsLinkClick),
/* harmony export */   "nearOrbitsLink": () => (/* binding */ nearOrbitsLink),
/* harmony export */   "allObjectsLink": () => (/* binding */ allObjectsLink),
/* harmony export */   "orbitalData": () => (/* binding */ orbitalData),
/* harmony export */   "secondaryData": () => (/* binding */ secondaryData),
/* harmony export */   "satMissionData": () => (/* binding */ satMissionData),
/* harmony export */   "intelData": () => (/* binding */ intelData),
/* harmony export */   "objectData": () => (/* binding */ objectData),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _satInfoboxCore_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./satInfoboxCore.css */ "./src/js/plugins/selectSatManager/satInfoboxCore.css");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/api/SpaceObjectType */ "./src/js/api/SpaceObjectType.ts");
/* harmony import */ var _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/js/lib/constants */ "./src/js/lib/constants.ts");
/* harmony import */ var _app_js_lib_suncalc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/js/lib/suncalc.js */ "./src/js/lib/suncalc.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





const satInfoboxCore = {
    sensorInfo: {
        isLoaded: false,
    },
    launchData: {
        isLoaded: false,
    },
    orbitalData: {
        isLoaded: false,
    },
    secondaryData: {
        isLoaded: false,
    },
    satMissionData: {
        isLoaded: false,
    },
};
const sensorInfo = (sat) => {
    if (sat === null || typeof sat === "undefined")
        return;
    if (!satInfoboxCore.sensorInfo.isLoaded && settingsManager.plugins.sensor) {
        $('#sat-infobox').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="sensor-sat-info">
        <div class="sat-info-section-header">Sensor Data</div>
          <div class="sat-info-row">
            <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="Distance from the Sensor">
              Range
            </div>
            <div class="sat-info-value" id="sat-range">xxxx km</div>
          </div>
          <div class="sat-info-row">
            <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="Angle (Left/Right) from the Sensor">
              Azimuth
            </div>
            <div class="sat-info-value" id="sat-azimuth">XX deg</div>
          </div>
          <div class="sat-info-row">
            <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="Angle (Up/Down) from the Sensor">
              Elevation
            </div>
            <div class="sat-info-value" id="sat-elevation">XX deg</div>
          </div>
          <div class="sat-info-row">
            <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="Linear Width at Target's Range">
              Beam Width
            </div>
            <div class="sat-info-value" id="sat-beamwidth">xxxx km</div>
          </div>
          <div class="sat-info-row">
            <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="Time for RF/Light to Reach Target">
              Max Tmx Time
            </div>
            <div class="sat-info-value" id="sat-maxTmx">xxxx ms</div>
          </div>
          <div class="sat-info-row sat-only-info">
            <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="Is the Sun Affected the Sensor">
              Sun
            </div>
            <div class="sat-info-value" id="sat-sun">Sun Stuff</div>
          </div>
          <div id="sat-info-nextpass-row" class="sat-info-row sat-only-info">
            <div id="sat-info-nextpass" class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="Next Time in Coverage">
              Next Pass
            </div>
            <div id="sat-nextpass" class="sat-info-value">00:00:00z</div>
          </div>
        </div> 
        `);
        satInfoboxCore.sensorInfo.isLoaded = true;
    }
    // If we are using the sensor manager plugin then we should hide the sensor to satellite
    // info when there is no sensor selected
    if (settingsManager.plugins.sensor) {
        if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.sensorManager.checkSensorSelected()) {
            $('#sensor-sat-info').show();
        }
        else {
            $('#sensor-sat-info').hide();
        }
    }
    if (!sat.missile) {
        $('.sat-only-info').show();
    }
    else {
        $('.sat-only-info').hide();
    }
};
const launchData = (sat) => {
    if (sat === null || typeof sat === "undefined")
        return;
    if (!satInfoboxCore.launchData.isLoaded) {
        $('#sat-infobox').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
          <div class="sat-info-section-header">Object Data</div>
          <div class="sat-info-row">
            <div class="sat-info-key">Type</div>
            <div class="sat-info-value" id="sat-type">PAYLOAD</div>
          </div>
          <div class="sat-info-row sat-only-info">
            <div class="sat-info-key">Country</div>
            <div class="sat-info-value" id="sat-country">COUNTRY</div>
          </div>
          <div class="sat-info-row" id="sat-site-row">
            <div class="sat-info-key">Site</div>
            <div class="sat-info-value" id="sat-site">SITE</div>
            </div>
          <div class="sat-info-row">
            <div class="sat-info-key"></div>
            <div class="sat-info-value" id="sat-sitec">LAUNCH COUNTRY</div>
          </div>
          <div class="sat-info-row">
            <div class="sat-info-key">Rocket</div>
            <div class="sat-info-value" id="sat-vehicle">VEHICLE</div>
          </div>
          <div class="sat-info-row sat-only-info">
            <div class="sat-info-key">RCS</div>
            <div class="sat-info-value" id="sat-rcs">NO DATA</div>
          </div>  
        `);
        satInfoboxCore.launchData.isLoaded = true;
    }
    // /////////////////////////////////////////////////////////////////////////
    // Country Correlation Table
    // /////////////////////////////////////////////////////////////////////////
    const country = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.objectManager.extractCountry(sat.country);
    $('#sat-country').html(country);
    // /////////////////////////////////////////////////////////////////////////
    // Launch Site Correlation Table
    // /////////////////////////////////////////////////////////////////////////
    let siteArr = [];
    let site = {};
    let missileLV;
    let missileOrigin;
    let satLvString;
    if (sat.missile) {
        siteArr = sat.desc.split('(');
        missileOrigin = siteArr[0].substr(0, siteArr[0].length - 1);
        missileLV = sat.desc.split('(')[1].split(')')[0]; // Remove the () from the booster type
        site.site = missileOrigin;
        site.sitec = sat.country;
    }
    else {
        site = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.objectManager.extractLaunchSite(sat.launchSite);
    }
    $('#sat-site').html(site.site);
    $('#sat-sitec').html(site.sitec);
    // /////////////////////////////////////////////////////////////////////////
    // Launch Vehicle Correlation Table
    // /////////////////////////////////////////////////////////////////////////
    if (sat.missile) {
        sat.launchVehicle = missileLV;
        $('#sat-vehicle').html(sat.launchVehicle);
    }
    else {
        $('#sat-vehicle').html(sat.launchVehicle); // Set to JSON record
        if (sat.launchVehicle === 'U') {
            $('#sat-vehicle').html('Unknown');
        } // Replace with Unknown if necessary
        satLvString = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.objectManager.extractLiftVehicle(sat.launchVehicle); // Replace with link if available
        $('#sat-vehicle').html(satLvString);
    }
    $('#sat-configuration').html(sat.configuration !== '' ? sat.configuration : 'Unknown');
    $('a.iframe').colorbox({
        iframe: true,
        width: '80%',
        height: '80%',
        fastIframe: false,
        closeButton: false,
    });
};
const nearObjectsLinkClick = (distance = 100) => {
    const { uiManager, satSet, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (objectManager.selectedSat === -1) {
        return;
    }
    const sat = objectManager.selectedSat;
    const SCCs = [];
    let pos = satSet.getSatPosOnly(sat).position;
    const posXmin = pos.x - distance;
    const posXmax = pos.x + distance;
    const posYmin = pos.y - distance;
    const posYmax = pos.y + distance;
    const posZmin = pos.z - distance;
    const posZmax = pos.z + distance;
    $('#search').val('');
    for (let i = 0; i < satSet.numSats; i++) {
        pos = satSet.getSatPosOnly(i).position;
        if (pos.x < posXmax && pos.x > posXmin && pos.y < posYmax && pos.y > posYmin && pos.z < posZmax && pos.z > posZmin) {
            SCCs.push(satSet.getSatExtraOnly(i).sccNum);
        }
    }
    for (let i = 0; i < SCCs.length; i++) {
        if (i < SCCs.length - 1) {
            $('#search').val($('#search').val() + SCCs[i] + ',');
        }
        else {
            $('#search').val($('#search').val() + SCCs[i]);
        }
    }
    uiManager.doSearch($('#search').val().toString());
};
const nearOrbitsLink = () => {
    const { satSet, searchBox, satellite } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    const searchStr = searchBox.doArraySearch(satellite.findNearbyObjectsByOrbit(satSet.getSat(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.objectManager.selectedSat)));
    searchBox.doSearch(searchStr, false);
};
const allObjectsLink = () => {
    const { uiManager, satSet, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (objectManager.selectedSat === -1) {
        return;
    }
    const intldes = satSet.getSatExtraOnly(objectManager.selectedSat).intlDes;
    const searchStr = intldes.slice(0, 8);
    uiManager.doSearch(searchStr);
    $('#search').val(searchStr);
};
const orbitalData = (sat) => {
    // Only show orbital data if it is available
    if (sat === null || typeof sat === "undefined")
        return;
    if (!satInfoboxCore.orbitalData.isLoaded) {
        $('#ui-wrapper').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
          <div id="sat-infobox" class="text-select satinfo-fixed">
            <div id="sat-info-top-links">
              <div id="sat-info-title" class="center-text sat-info-section-header sat-info-title-header">This is a title</div>
              <div id="all-objects-link" class="link sat-infobox-links sat-only-info">Find all objects from this launch...</div>
              <div id="near-orbits-link" class="link sat-infobox-links sat-only-info">Find all objects near this orbit...</div>
              <div id="near-objects-link1" class="link sat-infobox-links">Find all objects within 100km...</div>
              <div id="near-objects-link2" class="link sat-infobox-links">Find all objects within 200km...</div>
              <div id="near-objects-link4" class="link sat-infobox-links">Find all objects within 400km...</div>
              <div id="sun-angle-link" class="link sat-infobox-links">Draw sat to sun line...</div>
              <div id="nadir-angle-link" class="link sat-infobox-links">Draw sat to nadir line...</div>
              <div id="sec-angle-link" class="link sat-infobox-links">Draw sat to second sat line...</div>
            </div>
            <div class="sat-info-section-header">Identifiers</div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key">COSPAR</div>
              <div class="sat-info-value" id="sat-intl-des">xxxx-xxxA</div>
            </div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key">NORAD</div>
              <div class="sat-info-value" id="sat-objnum">99999</div>
            </div>          
            <div class="sat-info-section-header">Orbit Data</div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key tooltipped" data-position="left" data-delay="50"
                data-tooltip="Highest Point in the Orbit">
                Apogee
              </div>
              <div class="sat-info-value" id="sat-apogee">xxx km</div>
            </div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key tooltipped" data-position="left" data-delay="50"
                data-tooltip="Lowest Point in the Orbit">
                Perigee
              </div>
              <div class="sat-info-value" id="sat-perigee">xxx km</div>
            </div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key tooltipped" data-position="left" data-delay="50"
                data-tooltip="Angle Measured from Equator on the Ascending Node">
                Inclination
              </div>
              <div class="sat-info-value" id="sat-inclination">xxx.xx</div>
            </div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
                data-tooltip="How Circular the Orbit Is (0 is a Circle)">
                Eccentricity
              </div>
              <div class="sat-info-value" id="sat-eccentricity">x.xx</div>
            </div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
                data-tooltip="Where it Rises Above the Equator">
                Right Asc.
              </div>
              <div class="sat-info-value" id="sat-raan">x.xx</div>
            </div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
                data-tooltip="Where the Lowest Part of the Orbit Is">
                Arg of Perigee
              </div>
              <div class="sat-info-value" id="sat-argPe">x.xx</div>
            </div>
            <div class="sat-info-row">
              <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
                data-tooltip="Current Latitude Over Earth">
                Latitude
              </div>
              <div class="sat-info-value" id="sat-latitude">x.xx</div>
            </div>
            <div class="sat-info-row">
              <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
                data-tooltip="Current Longitude Over Earth">
                Longitude
              </div>
              <div class="sat-info-value" id="sat-longitude">x.xx</div>
            </div>
            <div class="sat-info-row">
              <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
                data-tooltip="Current Altitude Above Sea Level">
                Altitude
              </div>
              <div class="sat-info-value" id="sat-altitude">xxx km</div>
            </div> 
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
                data-tooltip="Time for One Complete Revolution Around Earth">
                Period
              </div>
              <div class="sat-info-value" id="sat-period">xxx min</div>
            </div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
                data-tooltip="Current Velocity of the Satellite (Higher the Closer to Earth it Is)">
                Velocity
              </div>
              <div class="sat-info-value" id="sat-velocity">xxx km/s</div>
            </div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
                data-tooltip="Time Since Official Orbit Calculated (Older ELSETs are Less Accuarate Usually)">
                Age of ELSET
              </div>
              <div class="sat-info-value" id="sat-elset-age">xxx.xxxx</div>
            </div>
          </div>
        `);
        // Create a Sat Info Box Initializing Script
        $('#sat-infobox').draggable({
            containment: 'window',
            drag: () => {
                $('#sat-infobox').height(600);
                $('#sat-infobox').removeClass('satinfo-fixed');
            },
        });
        // If right click kill and reinit
        $('#sat-infobox').on('mousedown', (e) => {
            if (e.button === 2) {
                $('#sat-infobox').removeClass().removeAttr('style');
                $('#sat-infobox').addClass('satinfo-fixed');
            }
        });
        satInfoboxCore.orbitalData.isLoaded = true;
        // Give the DOM time load and then redo
        setTimeout(() => {
            orbitalData(sat);
        }, 500);
        return;
    }
    if (!sat.missile) {
        try {
            $('a.iframe').colorbox({
                iframe: true,
                width: '80%',
                height: '80%',
                fastIframe: false,
                closeButton: false,
            });
        }
        catch (error) {
            // Intentionally left blank
        }
        $('#sat-apogee').html(sat.apogee.toFixed(0) + ' km');
        $('#sat-perigee').html(sat.perigee.toFixed(0) + ' km');
        $('#sat-inclination').html((sat.inclination * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_3__.RAD2DEG).toFixed(2) + '°');
        $('#sat-eccentricity').html(sat.eccentricity.toFixed(3));
        $('#sat-raan').html((sat.raan * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_3__.RAD2DEG).toFixed(2) + '°');
        $('#sat-argPe').html((sat.argPe * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_3__.RAD2DEG).toFixed(2) + '°');
        $('#sat-period').html(sat.period.toFixed(2) + ' min');
        $('#sat-period').tooltip({
            // delay: 50,
            html: 'Mean Motion: ' + (_app_js_lib_constants__WEBPACK_IMPORTED_MODULE_3__.MINUTES_PER_DAY / sat.period).toFixed(2),
            position: 'left',
        });
        // TODO: Error checking on Iframe
        let now = new Date();
        const jday = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.timeManager.getDayOfYear(now);
        now = now.getUTCFullYear();
        now = now.toString().substr(2, 2);
        let daysold;
        if (sat.TLE1.substr(18, 2) === now) {
            daysold = jday - parseInt(sat.TLE1.substr(20, 3));
        }
        else {
            daysold = jday + parseInt(now) * 365 - (parseInt(sat.TLE1.substr(18, 2)) * 365 + parseInt(sat.TLE1.substr(20, 3)));
        }
        $('#sat-elset-age').html(daysold + ' Days');
        $('#sat-elset-age').tooltip({
            // delay: 50,
            html: 'Epoch Year: ' + sat.TLE1.substr(18, 2).toString() + ' Day: ' + sat.TLE1.substr(20, 8).toString(),
            position: 'left',
        });
        if (!_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.objectManager.isSensorManagerLoaded) {
            $('#sat-sun').parent().hide();
        }
        else {
            now = new Date(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.timeManager.dynamicOffsetEpoch + _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.timeManager.propOffset);
            const sunTime = _app_js_lib_suncalc_js__WEBPACK_IMPORTED_MODULE_4__.SunCalc.getTimes(now, _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.sensorManager.currentSensor[0].lat, _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.sensorManager.currentSensor[0].lon);
            let satInSun = -1;
            if (typeof sat.isInSun !== 'undefined') {
                satInSun = sat.isInSun();
            }
            // If No Sensor, then Ignore Sun Exclusion
            if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.sensorManager.currentSensor[0].lat === null) {
                $('#sat-sun').hide();
                return;
            }
            else {
                $('#sat-sun').show();
            }
            // If Radar Selected, then Say the Sun Doesn't Matter
            if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.sensorManager.currentSensor[0].type !== _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__.SpaceObjectType.OPTICAL &&
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.sensorManager.currentSensor[0].type !== _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__.SpaceObjectType.OBSERVER) {
                $('#sat-sun').html('No Effect');
                // If Dawn Dusk Can be Calculated then show if the satellite is in the sun
            }
            else if (sunTime.dawn.getTime() - now.getTime() > 0 || sunTime.dusk.getTime() - now.getTime() < 0) {
                if (satInSun == 0)
                    $('#sat-sun').html('No Sunlight');
                if (satInSun == 1)
                    $('#sat-sun').html('Limited Sunlight');
                if (satInSun == 2)
                    $('#sat-sun').html('Direct Sunlight');
                // If Optical Sesnor but Dawn Dusk Can't Be Calculated, then you are at a
                // high latitude and we need to figure that out
            }
            else if (sunTime.night != 'Invalid Date' && (sunTime.dawn == 'Invalid Date' || sunTime.dusk == 'Invalid Date')) {
                // TODO: Figure out how to calculate this
                console.debug('No Dawn or Dusk');
                if (satInSun == 0)
                    $('#sat-sun').html('No Sunlight');
                if (satInSun == 1)
                    $('#sat-sun').html('Limited Sunlight');
                if (satInSun == 2)
                    $('#sat-sun').html('Direct Sunlight');
            }
            else {
                // Unless you are in sun exclusion
                $('#sat-sun').html('Sun Exclusion');
            }
            if (satInSun == -1)
                $('#sat-sun').html('Unable to Calculate');
        }
    }
    $('#all-objects-link').on('click', allObjectsLink);
    $('#near-orbits-link').on('click', nearOrbitsLink);
    $('#near-objects-link1').on('click', () => nearObjectsLinkClick(100));
    $('#near-objects-link2').on('click', () => nearObjectsLinkClick(200));
    $('#near-objects-link4').on('click', () => nearObjectsLinkClick(400));
    $('#sun-angle-link').on('click', drawLineToSun);
    $('#nadir-angle-link').on('click', drawLineToEarth);
    $('#sec-angle-link').on('click', drawLineToSat);
};
const drawLineToSun = () => {
    const { lineManager, objectManager, drawManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    lineManager.create('sat2', [objectManager.selectedSat, drawManager.sceneManager.sun.pos[0], drawManager.sceneManager.sun.pos[1], drawManager.sceneManager.sun.pos[2]], 'o');
};
const drawLineToEarth = () => {
    const { lineManager, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    lineManager.create('sat', objectManager.selectedSat, 'p');
};
const drawLineToSat = () => {
    const { lineManager, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    lineManager.create('sat5', [objectManager.selectedSat, objectManager.secondarySat], 'b');
};
const secondaryData = (sat) => {
    if (sat === null || typeof sat === "undefined")
        return;
    if (!satInfoboxCore.secondaryData.isLoaded) {
        $('#sat-infobox').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="secondary-sat-info">
          <div class="sat-info-section-header">Secondary Satellite</div>
          <div class="sat-info-row">
            <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="Linear Distance from Secondary Satellite">
              Linear
            </div>
            <div class="sat-info-value" id="sat-sec-dist">xxxx km</div>
          </div>
          <div class="sat-info-row">
            <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="Radial Distance">
              Radial
            </div>
            <div class="sat-info-value" id="sat-sec-rad">XX deg</div>
          </div>
          <div class="sat-info-row">
            <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="In-Track Distance from Secondary Satellite">
              In-Track
            </div>
            <div class="sat-info-value" id="sat-sec-intrack">XX deg</div>
          </div>
          <div class="sat-info-row">
            <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
              data-tooltip="Cross-Track Distance from Secondary Satellite">
              Cross-Track
            </div>
            <div class="sat-info-value" id="sat-sec-crosstrack">xxxx km</div>
          </div>
        </div> 
        `);
        satInfoboxCore.secondaryData.isLoaded = true;
    }
};
const satMissionData = (sat) => {
    var _a, _b;
    if (sat === null || typeof sat === "undefined")
        return;
    if (!satInfoboxCore.satMissionData.isLoaded) {
        $('#sat-infobox').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
      <div class="sat-info-section-header">Mission</div>
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Visual Magnitude - Smaller Numbers Are Brighter">
            Visual Mag
          </div>
          <div class="sat-info-value" id="sat-vmag">
            NO DATA
          </div>
        </div>
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Primary User of the Satellite">
            User
          </div>
          <div class="sat-info-value" id="sat-user">
            NO DATA
          </div>
        </div>
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Main Function of the Satellite">
            Purpose
          </div>
          <div class="sat-info-value" id="sat-purpose">
            NO DATA
          </div>
        </div>
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Contractor Who Built the Satellite">
            Contractor
          </div>
          <div class="sat-info-value" id="sat-contractor">
            NO DATA
          </div>
        </div>
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Mass at Lift Off">
            Lift Mass
          </div>
          <div class="sat-info-value" id="sat-launchMass">
            NO DATA
          </div>
        </div>
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50" data-tooltip="Unfueled Mass">
            Dry Mass
          </div>
          <div class="sat-info-value" id="sat-dryMass">
            NO DATA
          </div>
        </div>
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="How Long the Satellite was Expected to be Operational">
            Life Expectancy
          </div>
          <div class="sat-info-value" id="sat-lifetime">
            NO DATA
          </div>
        </div>
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Satellite Bus">
            Bus
          </div>
          <div class="sat-info-value" id="sat-bus">
            NO DATA
          </div>
        </div>
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Primary Payload">
            Payload
          </div>
          <div class="sat-info-value" id="sat-payload">
            NO DATA
          </div>
        </div>    
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Primary Motor">
            Motor
          </div>
          <div class="sat-info-value" id="sat-motor">
            NO DATA
          </div>
        </div>      
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Length in Meters">
            Length
          </div>
          <div class="sat-info-value" id="sat-length">
            NO DATA
          </div>
        </div>      
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Diameter in Meters">
            Diameter
          </div>
          <div class="sat-info-value" id="sat-diameter">
            NO DATA
          </div>
        </div>   
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Span in Meters">
            Span
          </div>
          <div class="sat-info-value" id="sat-span">
            NO DATA
          </div>
        </div>         
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Description of Shape">
            Shape
          </div>
          <div class="sat-info-value" id="sat-shape">
            NO DATA
          </div>
        </div>      
        <div class="sat-info-row sat-only-info">
          <div class="sat-info-key  tooltipped" data-position="left" data-delay="50"
            data-tooltip="Power of the Satellite">
            Power
          </div>
          <div class="sat-info-value" id="sat-power">
            NO DATA
          </div>
        </div>
        `);
        satInfoboxCore.satMissionData.isLoaded = true;
    }
    if (!sat.missile) {
        $('.sat-only-info').show();
    }
    else {
        $('.sat-only-info').hide();
    }
    if (!sat.missile) {
        $('#sat-user').html((sat === null || sat === void 0 ? void 0 : sat.owner) && (sat === null || sat === void 0 ? void 0 : sat.owner) !== '' ? sat === null || sat === void 0 ? void 0 : sat.owner : 'Unknown');
        $('#sat-purpose').html((sat === null || sat === void 0 ? void 0 : sat.purpose) && (sat === null || sat === void 0 ? void 0 : sat.purpose) !== '' ? sat === null || sat === void 0 ? void 0 : sat.purpose : 'Unknown');
        $('#sat-contractor').html((sat === null || sat === void 0 ? void 0 : sat.manufacturer) && (sat === null || sat === void 0 ? void 0 : sat.manufacturer) !== '' ? sat === null || sat === void 0 ? void 0 : sat.manufacturer : 'Unknown');
        // Update with other mass options
        $('#sat-launchMass').html((sat === null || sat === void 0 ? void 0 : sat.launchMass) && (sat === null || sat === void 0 ? void 0 : sat.launchMass) !== '' ? (sat === null || sat === void 0 ? void 0 : sat.launchMass) + ' kg' : 'Unknown');
        $('#sat-dryMass').html((sat === null || sat === void 0 ? void 0 : sat.dryMass) && (sat === null || sat === void 0 ? void 0 : sat.dryMass) !== '' ? (sat === null || sat === void 0 ? void 0 : sat.dryMass) + ' kg' : 'Unknown');
        $('#sat-lifetime').html((sat === null || sat === void 0 ? void 0 : sat.lifetime) && (sat === null || sat === void 0 ? void 0 : sat.lifetime) !== '' ? (sat === null || sat === void 0 ? void 0 : sat.lifetime) + ' yrs' : 'Unknown');
        $('#sat-power').html((sat === null || sat === void 0 ? void 0 : sat.power) && (sat === null || sat === void 0 ? void 0 : sat.power) !== '' ? (sat === null || sat === void 0 ? void 0 : sat.power) + ' w' : 'Unknown');
        $('#sat-vmag').html((sat === null || sat === void 0 ? void 0 : sat.vmag) && ((_a = sat === null || sat === void 0 ? void 0 : sat.vmag) === null || _a === void 0 ? void 0 : _a.toString()) !== '' ? (_b = sat === null || sat === void 0 ? void 0 : sat.vmag) === null || _b === void 0 ? void 0 : _b.toString() : 'Unknown');
        $('#sat-bus').html((sat === null || sat === void 0 ? void 0 : sat.bus) && (sat === null || sat === void 0 ? void 0 : sat.bus) !== '' ? sat === null || sat === void 0 ? void 0 : sat.bus : 'Unknown');
        $('#sat-configuration').html((sat === null || sat === void 0 ? void 0 : sat.configuration) && (sat === null || sat === void 0 ? void 0 : sat.configuration) !== '' ? sat === null || sat === void 0 ? void 0 : sat.configuration : 'Unknown');
        $('#sat-payload').html((sat === null || sat === void 0 ? void 0 : sat.payload) && (sat === null || sat === void 0 ? void 0 : sat.payload) !== '' ? sat === null || sat === void 0 ? void 0 : sat.payload : 'Unknown');
        $('#sat-motor').html((sat === null || sat === void 0 ? void 0 : sat.motor) && (sat === null || sat === void 0 ? void 0 : sat.motor) !== '' ? sat === null || sat === void 0 ? void 0 : sat.motor : 'Unknown');
        $('#sat-length').html((sat === null || sat === void 0 ? void 0 : sat.length) && (sat === null || sat === void 0 ? void 0 : sat.length) !== '' ? (sat === null || sat === void 0 ? void 0 : sat.length) + ' m' : 'Unknown');
        $('#sat-diameter').html((sat === null || sat === void 0 ? void 0 : sat.diameter) && (sat === null || sat === void 0 ? void 0 : sat.diameter) !== '' ? (sat === null || sat === void 0 ? void 0 : sat.diameter) + ' m' : 'Unknown');
        $('#sat-span').html((sat === null || sat === void 0 ? void 0 : sat.span) && (sat === null || sat === void 0 ? void 0 : sat.span) !== '' ? (sat === null || sat === void 0 ? void 0 : sat.span) + ' m' : 'Unknown');
        $('#sat-shape').html((sat === null || sat === void 0 ? void 0 : sat.shape) && (sat === null || sat === void 0 ? void 0 : sat.shape) !== '' ? sat === null || sat === void 0 ? void 0 : sat.shape : 'Unknown');
        $('#sat-configuration').html((sat === null || sat === void 0 ? void 0 : sat.configuration) && (sat === null || sat === void 0 ? void 0 : sat.configuration) !== '' ? sat === null || sat === void 0 ? void 0 : sat.configuration : 'Unknown');
        $('a.iframe').colorbox({
            iframe: true,
            width: '80%',
            height: '80%',
            fastIframe: false,
            closeButton: false,
        });
    }
};
const intelData = (sat, satId) => {
    if (satId !== -1) {
        if (typeof sat.TTP != 'undefined') {
            $('#sat-ttp-wrapper').show();
            $('#sat-ttp').html(sat.TTP);
        }
        else {
            $('#sat-ttp-wrapper').hide();
        }
        if (typeof sat.NOTES != 'undefined') {
            $('#sat-notes-wrapper').show();
            $('#sat-notes').html(sat.NOTES);
        }
        else {
            $('#sat-notes-wrapper').hide();
        }
        if (typeof sat.FMISSED != 'undefined') {
            $('#sat-fmissed-wrapper').show();
            $('#sat-fmissed').html(sat.FMISSED);
        }
        else {
            $('#sat-fmissed-wrapper').hide();
        }
        if (typeof sat.ORPO != 'undefined') {
            $('#sat-oRPO-wrapper').show();
            $('#sat-oRPO').html(sat.ORPO);
        }
        else {
            $('#sat-oRPO-wrapper').hide();
        }
        if (typeof sat.constellation != 'undefined') {
            $('#sat-constellation-wrapper').show();
            $('#sat-constellation').html(sat.constellation);
        }
        else {
            $('#sat-constellation-wrapper').hide();
        }
        if (typeof sat.maneuver != 'undefined') {
            $('#sat-maneuver-wrapper').show();
            $('#sat-maneuver').html(sat.maneuver);
        }
        else {
            $('#sat-maneuver-wrapper').hide();
        }
        if (typeof sat.associates != 'undefined') {
            $('#sat-associates-wrapper').show();
            $('#sat-associates').html(sat.associates);
        }
        else {
            $('#sat-associates-wrapper').hide();
        }
    }
};
const objectData = (sat) => {
    if (sat === null || typeof sat === "undefined")
        return;
    $('#sat-info-title').html(sat.name);
    switch (sat.type) {
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__.SpaceObjectType.UNKNOWN:
            $('#sat-type').html('TBA');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__.SpaceObjectType.PAYLOAD:
            $('#sat-type').html('Payload');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__.SpaceObjectType.ROCKET_BODY:
            $('#sat-type').html('Rocket Body');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__.SpaceObjectType.DEBRIS:
            $('#sat-type').html('Debris');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__.SpaceObjectType.SPECIAL:
            $('#sat-type').html('Special');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__.SpaceObjectType.RADAR_MEASUREMENT:
            $('#sat-type').html('Radar Measurement');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__.SpaceObjectType.RADAR_TRACK:
            $('#sat-type').html('Radar Track');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_2__.SpaceObjectType.RADAR_OBJECT:
            $('#sat-type').html('Radar Object');
            break;
        default:
            if (sat.missile)
                $('#sat-type').html('Ballistic Missile');
    }
    $('#edit-satinfo-link').html("<a class='iframe' href='editor.htm?scc=" + sat.sccNum + "&popup=true'>Edit Satellite Info</a>");
    $('a.iframe').colorbox({
        iframe: true,
        width: '80%',
        height: '80%',
        fastIframe: false,
        closeButton: false,
    });
    $('#sat-intl-des').html(sat.intlDes);
    if (sat.type > 4) {
        $('#sat-objnum').html(1 + sat.TLE2.substr(2, 7).toString());
    }
    else {
        $('#sat-objnum').html(sat.sccNum);
    }
    // /////////////////////////////////////////////////////////////////////////
    // RCS Correlation Table
    // /////////////////////////////////////////////////////////////////////////
    if (sat.rcs === null || typeof sat.rcs == 'undefined') {
        $('#sat-rcs').html('Unknown');
    }
    else {
        $('#sat-rcs').html(sat.rcs);
    }
};
const init = () => {
    // NOTE: This has to go first.
    // Register orbital element data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'orbitalData',
        cb: orbitalData,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'secondaryData',
        cb: secondaryData,
    });
    // Register sensor data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'sensorInfo',
        cb: sensorInfo,
    });
    // Register launch data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'launchData',
        cb: launchData,
    });
    // Register mission data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'satMissionData',
        cb: satMissionData,
    });
    // Register intel data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'intelData',
        cb: intelData,
    });
    // Register object data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'objectData',
        cb: objectData,
    });
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_selectSatManager_satInfoboxCore_ts.71cd40fcf30a4134dab9.js.map