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
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");

const gamepadSettings = {
    deadzone: 0.15,
};
const init = () => {
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.gamepad = {
        currentState: null,
    };
    // NOTE: This is note a message event and sonarqube should ignore it
    window.addEventListener('gamepadconnected', (evt) => {
        if (settingsManager.cruncherReady) {
            gamepadConnected(event);
        }
        else {
            _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
                method: 'uiManagerInit',
                cbName: 'gamepad',
                cb: () => gamepadConnected(evt),
            });
        }
    });
    window.addEventListener('gamepaddisconnected', () => {
        const { uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
        uiManager.toast('Gamepad disconnected', 'critical');
        _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.gamepad = {
            currentState: null,
        };
    });
};
const initializeGamepad = (gamepad) => {
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'updateLoop',
        cbName: 'gamepad',
        cb: updateGamepad,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.gamepad = {
        settings: gamepadSettings,
        index: gamepad.index,
        currentState: null,
        getController: (index) => getController(index),
        vibrate: vibrate,
    };
};
const updateGamepad = (index) => {
    index !== null && index !== void 0 ? index : (index = 0);
    const controller = getController(index);
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.gamepad.currentState = controller;
    updateZoom(controller.buttons[6].value, controller.buttons[7].value);
    updateLeftStick(controller.axes[0], controller.axes[1]);
    updateRightStick(controller.axes[2], controller.axes[3]);
    updateButtons(controller.buttons);
};
const buttonsPressed = [];
const updateButtons = (buttons) => {
    buttons.forEach((button, index) => {
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
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.uiManager.keyHandler({ key: 'C' });
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
                    // DEBUG:
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
const updateZoom = (zoomOut, zoomIn) => {
    if (zoomOut === 0 && zoomIn === 0)
        return; // Not Zooming
    const { mainCamera, drawManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    let zoomTarget = mainCamera.zoomLevel();
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
const updateLeftStick = (x, y) => {
    const { mainCamera, drawManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
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
const updateRightStick = (x, y) => {
    const { mainCamera, drawManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
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
const vibrate = (vibrateTime, gamepad) => {
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
const gamepadConnected = (e) => {
    const { uiManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    uiManager.toast('Gamepad connected', 'normal');
    initializeGamepad(e.gamepad);
};
const getController = (index) => {
    // If gamepad not specified then try the first one
    index !== null && index !== void 0 ? index : (index = 0);
    // Get the gamepad or return null if not connected
    return navigator.getGamepads()[index];
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_gamepad_gamepad_ts.e1e29293b0bbfa447705.js.map