"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_gamepad_gamepad_ts"],{

/***/ "./src/js/plugins/gamepad/gamepad.ts":
/*!*******************************************!*\
  !*** ./src/js/plugins/gamepad/gamepad.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "initializeGamepad": () => (/* binding */ initializeGamepad),
/* harmony export */   "updateGamepad": () => (/* binding */ updateGamepad),
/* harmony export */   "updateButtons": () => (/* binding */ updateButtons),
/* harmony export */   "updateZoom": () => (/* binding */ updateZoom),
/* harmony export */   "updateLeftStick": () => (/* binding */ updateLeftStick),
/* harmony export */   "updateRightStick": () => (/* binding */ updateRightStick),
/* harmony export */   "vibrate": () => (/* binding */ vibrate),
/* harmony export */   "gamepadConnected": () => (/* binding */ gamepadConnected),
/* harmony export */   "getController": () => (/* binding */ getController)
/* harmony export */ });
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");

var gamepadSettings = {
    deadzone: 0.15,
};
var init = function () {
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.gamepad = {
        currentState: null,
    };
    window.addEventListener('gamepadconnected', function (evt) {
        if (settingsManager.cruncherReady) {
            gamepadConnected(event);
        }
        else {
            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
                method: 'uiManagerInit',
                cbName: 'gamepad',
                cb: function () { return gamepadConnected(evt); },
            });
        }
    });
    window.addEventListener('gamepaddisconnected', function () {
        var uiManager = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager;
        uiManager.toast('Gamepad disconnected', 'critical');
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.gamepad = {
            currentState: null,
        };
    });
};
var initializeGamepad = function (gamepad) {
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'updateLoop',
        cbName: 'gamepad',
        cb: updateGamepad,
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.gamepad = {
        settings: gamepadSettings,
        index: gamepad.index,
        currentState: null,
        getController: function (index) { return getController(index); },
        vibrate: vibrate,
    };
};
var updateGamepad = function (index) {
    index !== null && index !== void 0 ? index : (index = 0);
    var controller = getController(index);
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.gamepad.currentState = controller;
    updateZoom(controller.buttons[6].value, controller.buttons[7].value);
    updateLeftStick(controller.axes[0], controller.axes[1]);
    updateRightStick(controller.axes[2], controller.axes[3]);
    updateButtons(controller.buttons);
};
var buttonsPressed = [];
var updateButtons = function (buttons) {
    buttons.forEach(function (button, index) {
        // if the button is pressed and wasnt pressed before
        if (button.pressed && !buttonsPressed[index]) {
            // button state is now pressed
            buttonsPressed[index] = true;
            // Perform action
            switch (index) {
                case 0:
                    console.log('A');
                    break;
                case 1:
                    console.log('B');
                    break;
                case 2:
                    console.log('X');
                    break;
                case 3:
                    console.log('Y');
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.keyHandler({ key: 'C' });
                    break;
                case 4:
                    console.log('Left Bumper');
                    break;
                case 5:
                    console.log('Right Bumper');
                    break;
                case 8:
                    console.log('Home');
                    break;
                case 9:
                    console.log('Start');
                    break;
                case 10:
                    console.log('Left Stick');
                    break;
                case 11:
                    console.log('Right Stick');
                    break;
                case 12:
                    console.log('D-Pad Up');
                    break;
                case 13:
                    console.log('D-Pad Down');
                    break;
                case 14:
                    console.log('D-Pad Left');
                    break;
                case 15:
                    console.log('Right');
                    break;
                case 16:
                    console.log('Xbox Button');
                    break;
                default:
                    // console.debug(`Button ${index}`);
                    break;
            }
            // if the button is not pressed and was pressed before
        }
        else if (!button.pressed && buttonsPressed[index]) {
            // button state is now not pressed
            buttonsPressed[index] = false;
        }
    });
};
var updateZoom = function (zoomOut, zoomIn) {
    if (zoomOut === 0 && zoomIn === 0)
        return; // Not Zooming
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs, mainCamera = _a.mainCamera, drawManager = _a.drawManager;
    var zoomTarget = mainCamera.zoomLevel();
    switch (mainCamera.cameraType.current) {
        case mainCamera.cameraType.Default:
        case mainCamera.cameraType.Offset:
        case mainCamera.cameraType.FixedToSat:
            zoomTarget += (zoomOut / 500) * drawManager.dt;
            zoomTarget -= (zoomIn / 500) * drawManager.dt;
            mainCamera.zoomTarget(zoomTarget);
            mainCamera.camZoomSnappedOnSat = false;
            mainCamera.isCamSnapMode = false;
            if (zoomTarget < mainCamera.zoomLevel()) {
                mainCamera.isZoomIn = true;
            }
            else {
                mainCamera.isZoomIn = false;
            }
            break;
        case mainCamera.cameraType.Fps:
        case mainCamera.cameraType.Satellite:
        case mainCamera.cameraType.Planetarium:
        case mainCamera.cameraType.Astronomy:
            if (zoomOut !== 0) {
                mainCamera.fpsVertSpeed += Math.pow((zoomOut * 2), 3) * drawManager.dt * settingsManager.cameraMovementSpeed;
            }
            if (zoomIn !== 0) {
                mainCamera.fpsVertSpeed -= Math.pow((zoomIn * 2), 3) * drawManager.dt * settingsManager.cameraMovementSpeed;
            }
            break;
    }
};
var updateLeftStick = function (x, y) {
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs, mainCamera = _a.mainCamera, drawManager = _a.drawManager;
    if (x > gamepadSettings.deadzone || x < -gamepadSettings.deadzone || y > gamepadSettings.deadzone || y < -gamepadSettings.deadzone) {
        mainCamera.autoRotate(false);
        switch (mainCamera.cameraType.current) {
            case mainCamera.cameraType.Default:
            case mainCamera.cameraType.Offset:
            case mainCamera.cameraType.FixedToSat:
                mainCamera.camAngleSnappedOnSat = false;
                mainCamera.isCamSnapMode = false;
                mainCamera.camPitchSpeed -= (Math.pow(y, 3) / 100) * drawManager.dt * settingsManager.cameraMovementSpeed;
                mainCamera.camYawSpeed += (Math.pow(x, 3) / 100) * drawManager.dt * settingsManager.cameraMovementSpeed;
                break;
            case mainCamera.cameraType.Fps:
            case mainCamera.cameraType.Satellite:
            case mainCamera.cameraType.Planetarium:
            case mainCamera.cameraType.Astronomy:
                if (y > gamepadSettings.deadzone || y < -gamepadSettings.deadzone) {
                    mainCamera.fpsForwardSpeed = -(Math.pow(y, 3)) * drawManager.dt;
                }
                if (x > gamepadSettings.deadzone || x < -gamepadSettings.deadzone) {
                    mainCamera.fpsSideSpeed = Math.pow(x, 3) * drawManager.dt;
                }
                break;
        }
    }
};
var updateRightStick = function (x, y) {
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs, mainCamera = _a.mainCamera, drawManager = _a.drawManager;
    mainCamera.isLocalRotateOverride = false;
    if (y > gamepadSettings.deadzone || y < -gamepadSettings.deadzone || x > gamepadSettings.deadzone || x < -gamepadSettings.deadzone) {
        mainCamera.autoRotate(false);
        switch (mainCamera.cameraType.current) {
            case mainCamera.cameraType.Default:
            case mainCamera.cameraType.Offset:
            case mainCamera.cameraType.FixedToSat:
                mainCamera.isLocalRotateOverride = true;
                mainCamera.localRotateDif.pitch = -y * 200;
                mainCamera.localRotateDif.yaw = -x * 200;
                break;
            case mainCamera.cameraType.Fps:
            case mainCamera.cameraType.Satellite:
            case mainCamera.cameraType.Planetarium:
            case mainCamera.cameraType.Astronomy:
                mainCamera.camPitchSpeed += (y / 50) * drawManager.dt * settingsManager.cameraMovementSpeed;
                mainCamera.camYawSpeed -= (x / 50) * drawManager.dt * settingsManager.cameraMovementSpeed;
                break;
        }
    }
};
var vibrate = function (vibrateTime, gamepad) {
    // If gamepad is not explicit then get the current one
    gamepad !== null && gamepad !== void 0 ? gamepad : (gamepad = getController());
    if (!gamepad)
        return; // No controller - give up
    gamepad.vibrationActuator.playEffect('dual-rumble', {
        duration: vibrateTime || 300,
        strongMagnitude: 1.0,
        weakMagnitude: 1.0,
        startDelay: 0,
    });
};
var gamepadConnected = function (e) {
    var uiManager = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager;
    uiManager.toast('Gamepad connected', 'normal');
    initializeGamepad(e.gamepad);
};
var getController = function (index) {
    // If gamepad not specified then try the first one
    index !== null && index !== void 0 ? index : (index = 0);
    // Get the gamepad or return null if not connected
    return navigator.getGamepads()[index];
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_gamepad_gamepad_ts.00450fba71dc4902b488.js.map