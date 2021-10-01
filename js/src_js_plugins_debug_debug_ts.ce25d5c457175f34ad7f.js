"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_debug_debug_ts"],{

/***/ "./src/js/plugins/debug/debug.ts":
/*!***************************************!*\
  !*** ./src/js/plugins/debug/debug.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

//Global Debug Manager
var init = function () {
    var db = {};
    try {
        db = JSON.parse(localStorage.getItem('db'));
        if (db == null)
            throw new Error('Reload Debug Manager');
        if (typeof db.enabled == 'undefined')
            throw new Error('Reload Debug Manager');
    }
    catch (e) {
        db = {};
        db.enabled = false;
        db.verbose = false;
        localStorage.setItem('db', JSON.stringify(db));
    }
    db.init = (function () {
        db.log = function (message, isVerbose) {
            // Don't Log Verbose Stuff Normally
            if (isVerbose && !db.verbose)
                return;
            // If Logging is Enabled - Log It
            if (db.enabled) {
                console.log(message);
            }
        };
        db.on = function () {
            db.enabled = true;
            console.log('db is now on!');
            localStorage.setItem('db', JSON.stringify(db));
        };
        db.off = function () {
            db.enabled = false;
            console.log('db is now off!');
            localStorage.setItem('db', JSON.stringify(db));
        };
    })();
    db.gremlinsSettings = {};
    db.gremlinsSettings.nb = 100000;
    db.gremlinsSettings.delay = 5;
    db.gremlins = function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nav-footer').height(200);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nav-footer-toggle').hide();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons-container').height(200);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').height(200);
        var startGremlins = function () {
            var bottomMenuGremlinClicker = window.gremlins.species.clicker({
                // Click only if parent is has class test-class
                canClick: function (element) {
                    if (typeof element.parentElement == 'undefined' || element.parentElement == null)
                        return null;
                    return element.parentElement.className === 'bmenu-item';
                },
                defaultPositionSelector: function () {
                    [
                        window.randomizer.natural({
                            max: Math.max(0, document.documentElement.clientWidth - 1),
                        }),
                        window.randomizer.natural({
                            min: Math.max(0, document.documentElement.clientHeight - 100),
                            max: Math.max(0, document.documentElement.clientHeight - 1),
                        }),
                    ];
                },
            });
            var bottomMenuGremlinScroller = window.gremlins.species.toucher({
                touchTypes: ['gesture'],
                defaultPositionSelector: function () {
                    [
                        window.randomizer.natural({
                            max: Math.max(0, document.documentElement.clientWidth - 1),
                        }),
                        window.randomizer.natural({
                            min: Math.max(0, document.documentElement.clientHeight - 100),
                            max: Math.max(0, document.documentElement.clientHeight - 1),
                        }),
                    ];
                },
            });
            var distributionStrategy = window.gremlins.strategies.distribution({
                distribution: [0.3, 0.3, 0.1, 0.1, 0.1, 0.1],
                delay: 5, // wait 5 ms between each action
            });
            window.gremlins
                .createHorde({
                species: [
                    bottomMenuGremlinClicker,
                    bottomMenuGremlinScroller,
                    // gremlins.species.scroller(),
                    window.gremlins.species.clicker(),
                    window.gremlins.species.toucher(),
                    window.gremlins.species.formFiller(),
                    window.gremlins.species.typer(),
                ],
                mogwais: [window.gremlins.mogwais.alert(), window.gremlins.mogwais.fps(), window.gremlins.mogwais.gizmo({ maxErrors: 1000 })],
                strategies: [distributionStrategy],
            })
                .unleash();
            return;
        };
        if (typeof window.gremlins == 'undefined') {
            var s = document.createElement('script');
            s.src = 'https://unpkg.com/gremlins.js';
            if (s.addEventListener) {
                s.addEventListener('load', startGremlins, false);
            }
            else if (s.readyState) {
                s.onreadystatechange = startGremlins;
            }
            document.body.appendChild(s);
        }
        else {
            startGremlins();
        }
    };
    settingsManager.db = db;
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_debug_debug_ts.ce25d5c457175f34ad7f.js.map