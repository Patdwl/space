"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_recorderManager_recorderManager_ts"],{

/***/ "./src/js/plugins/recorderManager/CanvasRecorder.ts":
/*!**********************************************************!*\
  !*** ./src/js/plugins/recorderManager/CanvasRecorder.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasRecorder": () => (/* binding */ CanvasRecorder)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// @ts-nocheck
class CanvasRecorder {
    constructor(videoBitsPerSec) {
        this.checkIfRecording = () => this.isVideoRecording;
        this.setIsRecording = (bool) => {
            this.isVideoRecording = bool;
        };
        let recordedBlobs = [];
        let supportedType = null;
        let mediaRecorder = null;
        const video = document.createElement('video');
        video.style.display = 'none';
        const startCapture = (displayMediaOptions) => {
            displayMediaOptions !== null && displayMediaOptions !== void 0 ? displayMediaOptions : (displayMediaOptions = {
                video: {
                    cursor: 'never',
                },
                audio: false,
            });
            /* istanbul ignore next */
            if (window.location.protocol === 'https:' || settingsManager.offline) {
                if ('getDisplayMedia' in navigator) {
                    return navigator.getDisplayMedia(displayMediaOptions).catch((err) => {
                        console.warn('Error:' + err);
                        return null;
                    });
                }
                else if ('getDisplayMedia' in navigator.mediaDevices) {
                    return navigator.mediaDevices.getDisplayMedia(displayMediaOptions).catch((err) => {
                        console.warn('Error:' + err);
                        return null;
                    });
                }
                else {
                    console.debug('No Recording Support');
                    CanvasRecorder.isVideoRecording = false;
                    $('#menu-record').removeClass('bmenu-item-selected');
                    $('#menu-record').addClass('bmenu-item-disabled');
                    M.toast({
                        html: `Compatibility Error with Recording`,
                    });
                    if (!$('#menu-record:animated').length) {
                        $('#menu-record').effect('shake', { distance: 10 });
                    }
                    return false;
                }
            }
            else {
                console.debug('No Recording Support in Http! Try Https!');
                CanvasRecorder.isVideoRecording = false;
                $('#menu-record').removeClass('bmenu-item-selected');
                $('#menu-record').addClass('bmenu-item-disabled');
                M.toast({
                    html: `Recording Only Available with HTTPS`,
                });
                /* istanbul ignore next */
                if (!$('#menu-record:animated').length) {
                    $('#menu-record').effect('shake', { distance: 10 });
                }
                return false;
            }
        };
        const startRecording = () => {
            let selectCapture = Promise.resolve(startCapture());
            /* istanbul ignore next */
            selectCapture
                .then(function beginRecording(srcObject) {
                if (srcObject == false)
                    return;
                CanvasRecorder.isVideoRecording = true;
                $('#menu-record').addClass('bmenu-item-selected');
                let stream = srcObject;
                video.srcObject = srcObject;
                let types = ['video/webm', 'video/webm,codecs=vp9', 'video/vp8', 'video/webm;codecs=vp8', 'video/webm;codecs=daala', 'video/webm;codecs=h264', 'video/mpeg'];
                for (let i in types) {
                    if (window.MediaRecorder.isTypeSupported(types[i])) {
                        supportedType = types[i];
                        break;
                    }
                }
                if (supportedType == null) {
                    console.log('No supported type found for MediaRecorder');
                }
                let options = {
                    mimeType: supportedType,
                    videoBitsPerSecond: videoBitsPerSec || 30000000, // 30.0Mbps
                    // videoBitsPerSecond: videoBitsPerSec || 10000000, // 10.0Mbps
                    // videoBitsPerSecond: videoBitsPerSec || 5000000 // 5.0Mbps
                    // videoBitsPerSecond: videoBitsPerSec || 2500000 // 2.5Mbps
                };
                recordedBlobs = [];
                try {
                    mediaRecorder = new window.MediaRecorder(stream, options);
                }
                catch (e) {
                    CanvasRecorder.isVideoRecording = false;
                    $('#menu-record').removeClass('bmenu-item-selected');
                    console.warn('Exception while creating MediaRecorder:', e);
                    return;
                }
                console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
                mediaRecorder.onstop = handleStop;
                mediaRecorder.ondataavailable = handleDataAvailable;
                mediaRecorder.start(100); // collect 100ms of data blobs
                console.log('MediaRecorder started', mediaRecorder);
            })
                .catch((err) => {
                console.debug('Error:' + err);
            });
        };
        /* istanbul ignore next */
        const handleDataAvailable = (event) => {
            if (event.data && event.data.size > 0) {
                recordedBlobs.push(event.data);
            }
        };
        /* istanbul ignore next */
        const handleStop = (event) => {
            console.log('Recorder stopped: ', event);
            const superBuffer = new Blob(recordedBlobs, { type: supportedType });
            video.src = window.URL.createObjectURL(superBuffer);
        };
        const stopRecording = () => {
            if (!mediaRecorder)
                throw new Error('MediaRecorder is not initialized');
            mediaRecorder.stop();
            video.controls = true;
        };
        const save = (fileName) => {
            const name = fileName || 'recording.webm';
            const blob = new Blob(recordedBlobs, { type: supportedType });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 100);
        };
        // These have to be at the bottom of the constructor
        this.isVideoRecording = false;
        this.start = startRecording;
        this.stop = stopRecording;
        this.save = save;
    }
}
CanvasRecorder.isVideoRecording = false;


/***/ }),

/***/ "./src/js/plugins/recorderManager/recorderManager.ts":
/*!***********************************************************!*\
  !*** ./src/js/plugins/recorderManager/recorderManager.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRecorderObject": () => (/* binding */ getRecorderObject),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "uiManagerOnReady": () => (/* binding */ uiManagerOnReady),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_plugins_recorderManager_CanvasRecorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/plugins/recorderManager/CanvasRecorder */ "./src/js/plugins/recorderManager/CanvasRecorder.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let recorder;
const getRecorderObject = () => recorder;
const uiManagerInit = () => {
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
      <div id="menu-record" class="bmenu-item">
        <img alt="video" src="" delayedsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADnElEQVR4nO3cPWwbdRjH8e/jvKA2qHuFCgtUFMcXqGOxgFAkBOUlXdkgEhuDB0AIwQILS8vQEAkWhFo21nRBUBBigcZHsZ2Il04FISQWBhApceyHBZh6vTv73ur8PqvvHv/1//n/v0d3OoOIiIiIiIiIiIiIiIjINLOyB5BUfcfnZ6+zMnKeMjjpcBw4AtyW5/f2l+3/OWp03Mc9N8rsOIMqUrPjh/egzS7tERwFSDULFVfpABpb/uQevAccK3sseamVPYAbcreg429hXGSKJx+quALca42Q9x3Wyh5KESq3AhohZzggkw8V64Iaoa/hfHCTQxzjko34cDhDZ/8vfv7hIfsjk++O6HCSdDKTqMwWtHTZ6yNnI+pzg2vUeL530i4VOa68VSKAoOsLowEfAQsRh3R9npV+YL8XOa4iVOIa4AM2gPtu+BlctTkem8bJhwoE0Ah9jeiL7vUZ55nekv1W3IiKVWoAS5e9zk32fYwXui27UuCQChd5hU9732Na5d0Flb4FHXQKoGSVaENvdUHXFxjwhsOLRPyoo7YyBTChIPRVBrzjcNc45yuAMd1/xe8Z7rPuzqlJ6qQOIO+uoCxJu75mxw8PnFeGQ17FJn8apxWQQhD66p6zgXFnVjUVQAJLX/vx4Qzr7jyedW21oTGCjp8dzbBtJJr8L9PWVwAxHF4C5mIO+9Wc5/pNHklbXwFMZmCwvrvPvb2WXcAs9e2bzK4Bed87qlr3ZfA5TrvXsu1J6uginN4v5rzWa9mFLIopgOQGBu8OD/H6Tt3+zKqoAkjC+NSh3W/ad1mXVgAx3FjdbtrFvOqrC4qR5+RDASsgbfdy0J7EaQWUTAGUTAGUTAGUTAGULPcu6KB1NWlpBZRMAZRMAZRMAZRMAZQssy6oak+sbhVaATEWQ386z/oKIIY5m43QP1kM/UQe9RVAEs6j5nSDjp+r7/jtWZZWAMnNObRru3wfbPmzWRVVAOnd4cb5oOOfBVu+OGkxBTAmhxU3vgk6fu7ur/zIuHUUwGTmHNqHZv/dltxTt+IKIIbB28Ag5rCjbpxvhHyRtr4CiNFbtpdrQxYdPk5w+MNp6yuABLoP2o/by3bKjNPAT1nWVgAp9Jq2OQ8nzHkT+DuLmnpTPkbUPa7/XtLDkr2kF1VHK2BM3z5gV/ste8KM0wbXxq2jACbUa9omc9QNzgKjtOdrC4qhP+uYcgpARERERERERERERERERHL0D2BAC2IfonfQAAAAAElFTkSuQmCC"> <!-- // NO-PIG -->
        <span class="bmenu-title">Record Video</span>
        <div class="status-icon"></div>
      </div>     
    `);
};
const uiManagerOnReady = () => {
    try {
        recorder = new _app_js_plugins_recorderManager_CanvasRecorder__WEBPACK_IMPORTED_MODULE_1__.CanvasRecorder(settingsManager.videoBitsPerSecond);
    }
    catch (e) {
        console.warn(e);
    }
};
/* istanbul ignore next */
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-record') {
        if (recorder.checkIfRecording()) {
            recorder.stop();
            recorder.save('keeptrack.webm');
            recorder.setIsRecording(false);
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-record').removeClass('bmenu-item-selected');
            return;
        }
        else {
            try {
                recorder.start();
            }
            catch (e) {
                window.M.toast({
                    html: `Compatibility Error with Recording`,
                });
                recorder.setIsRecording(false);
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-record').removeClass('bmenu-item-selected');
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-record').addClass('bmenu-item-disabled');
                if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-record:animated').length) {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-record').effect('shake', {
                        distance: 10,
                    });
                }
            }
            return;
        }
    }
};
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'recorderManager',
        cb: uiManagerInit,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerOnReady',
        cbName: 'recorderManager',
        cb: uiManagerOnReady,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'recordVideo',
        cb: bottomMenuClick,
    });
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_recorderManager_recorderManager_ts.73865e191ac79e2dc0e6.js.map