"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_topMenu_topMenu_ts"],{

/***/ "./src/js/plugins/topMenu/topMenu.ts":
/*!*******************************************!*\
  !*** ./src/js/plugins/topMenu/topMenu.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_img_icons_find_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/find.png */ "./src/img/icons/find.png");
/* harmony import */ var _app_img_icons_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/img/icons/github.png */ "./src/img/icons/github.png");
/* harmony import */ var _app_img_icons_twitter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/img/icons/twitter.png */ "./src/img/icons/twitter.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'topMenu',
        cb: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                // Bottom Icon
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('#header').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.html `
          <nav>
            <div id="nav-wrapper" class="nav-wrapper">
              <a id="share-icon" class="top-menu-icons"><img src="img/share-icon.png" alt="" /></a>
              <ul id="nav-mobile2" class="right">
                <li>
                  <a id="geolocation-btn" class="start-hidden" href="#!"><i class="material-icons">location_on</i></a>
                </li>
                <li>
                  <a id="legend-menu" class="top-menu-btns">
                    <!-- <span>Legend &#x25BC;</span> -->
                    <div id="legend-icon" class="top-menu-icons">
                      <img src="img/layers-icon.png" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a id="tutorial-btn" class="top-menu-btns">
                    <div id="tutorial-icon" class="top-menu-icons">
                      <img src="img/help.png" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a id="fullscreen-icon" class="top-menu-icons"><img src="img/fullscreen-icon.png" alt="" /></a>
                </li>
                <li>
                  <a id="search-icon" class="top-menu-icons">
                    <img
                      alt="search-icon"
                      src="" delayedsrc="${_app_img_icons_find_png__WEBPACK_IMPORTED_MODULE_0__}" 
                    />
                  </a>
                </li>
                <div id="search-holder" class="menu-item search-slide-up">
                  <input id="search" type="search" name="search" placeholder="Search.." required />
                </div>
              </ul>
            </div>
            <div id="social-alt" class="left">
              <div id="share-icon-container">
                <a id="github-share" class="share-up share-icons" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
                  <img
                    alt="github"
                    width="32"
                    height="32"
                    src="" delayedsrc="${_app_img_icons_github_png__WEBPACK_IMPORTED_MODULE_1__}"
                  />
                </a>
                <a id="twitter-share" class="share-up share-icons" rel="noreferrer" href="https://twitter.com/intent/tweet?text=http://keeptrack.space" target="_blank">
                  <img
                  width="32"
                  height="32"
                    src="" delayedsrc="${_app_img_icons_twitter_png__WEBPACK_IMPORTED_MODULE_2__}" 
                  />
                </a>
              </div>
            </div>
          </nav>        
        `);
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('#main-container').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.html `
          <div id="help-screen" class="valign-wrapper">
            <div id="help-inner-container" class="valign">
              <p>
                <span id="help-header" class="logo-font">TITLE</span>
                <span id="help-close">X</span>
              </p>
              <span id="help-text">ADVICE</span>
            </div>
          </div>
        `);
                yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @app/js/uiManager/adviceManager */ "./src/js/uiManager/adviceManager.ts")).then((mod) => {
                    mod.init();
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.programs.uiManager.menuController();
                });
            }
            catch (e) {
                /* istanbul ignore next */
                console.debug(e);
            }
        }),
    });
};


/***/ }),

/***/ "./src/img/icons/find.png":
/*!********************************!*\
  !*** ./src/img/icons/find.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71fcec3ebc7d429a79bb.png";

/***/ }),

/***/ "./src/img/icons/github.png":
/*!**********************************!*\
  !*** ./src/img/icons/github.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b19bd5173055b273572.png";

/***/ }),

/***/ "./src/img/icons/twitter.png":
/*!***********************************!*\
  !*** ./src/img/icons/twitter.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfaf75a75f28d9de4b6d.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_topMenu_topMenu_ts.e65ab702b8d581dfddc6.js.map