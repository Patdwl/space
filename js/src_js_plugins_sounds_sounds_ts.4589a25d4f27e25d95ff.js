"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_sounds_sounds_ts"],{

/***/ "./src/js/plugins/sounds/sounds.ts":
/*!*****************************************!*\
  !*** ./src/js/plugins/sounds/sounds.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");

const init = () => {
    // const { settingsManager } = keepTrackApi.programs;
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'soundManager',
        cb: () => {
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.soundManager = {
                // Fetch the list of voices and populate the voice options.
                loadVoices: () => {
                    // Fetch the available voices.
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.soundManager.voices = speechSynthesis.getVoices();
                },
                // Create a new utterance for the specified text and add it to
                // the queue.
                speak: (text) => {
                    // Create a new instance of SpeechSynthesisUtterance.
                    const msg = new SpeechSynthesisUtterance();
                    // Set the text.
                    msg.text = text;
                    // Set the attributes.
                    msg.volume = 0.5;
                    msg.rate = 1;
                    msg.pitch = 1;
                    // If a voice has been selected, find the voice and set the
                    // utterance instance's voice attribute.
                    msg.voice = speechSynthesis.getVoices().filter(function (voice) {
                        return voice.name == 'Google UK English Female';
                    })[0];
                    // Queue this utterance.
                    window.speechSynthesis.speak(msg);
                },
                sounds: {
                    standby: new Audio('./audio/Synth-Pop-Small-01.m4a'),
                },
                play: (sound) => {
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.soundManager.sounds[sound].play();
                },
                voices: [],
            };
        },
    });
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_sounds_sounds_ts.4589a25d4f27e25d95ff.js.map