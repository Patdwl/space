"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_twitter_twitter_ts"],{

/***/ "./src/js/plugins/twitter/twitter.ts":
/*!*******************************************!*\
  !*** ./src/js/plugins/twitter/twitter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_img_icons_twitter_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/img/icons/twitter.png */ "./src/img/icons/twitter.png");
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



const init = () => {
    let isTwitterMenuOpen = false;
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'twitterManager',
        cb: () => {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="twitter-menu" class="side-menu-parent start-hidden text-select"></div>
      `);
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-twitter" class="bmenu-item">
          <img alt="twitter" src="" delayedsrc=${_app_img_icons_twitter_png__WEBPACK_IMPORTED_MODULE_0__}/>
          <span class="bmenu-title">Twitter</span>
          <div class="status-icon"></div>
        </div>
      `);
        },
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'twitter',
        cb: (iconName) => {
            if (iconName === 'menu-twitter') {
                if (isTwitterMenuOpen) {
                    isTwitterMenuOpen = false;
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
                    return;
                }
                else {
                    if (settingsManager.isMobileModeEnabled)
                        _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.searchToggle(false);
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#twitter-menu').html() == '') {
                        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#twitter-menu').html('<a class="twitter-timeline" data-theme="dark" data-link-color="#2B7BB9" href="https://twitter.com/RedKosmonaut/lists/space-news">A Twitter List by RedKosmonaut</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>');
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#twitter-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    isTwitterMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-twitter').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'twitter',
        cb: () => {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#twitter-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-twitter').removeClass('bmenu-item-selected');
            isTwitterMenuOpen = false;
        },
    });
};


/***/ }),

/***/ "./src/img/icons/twitter.png":
/*!***********************************!*\
  !*** ./src/img/icons/twitter.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfaf75a75f28d9de4b6d.png";

/***/ })

}]);
//# sourceMappingURL=src_js_plugins_twitter_twitter_ts.76aa6307eea8488da244.js.map