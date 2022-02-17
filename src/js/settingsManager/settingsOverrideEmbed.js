/**
// /////////////////////////////////////////////////////////////////////////////

Copyright (C) 2016-2022 Theodore Kruczek
Copyright (C) 2020 Heather Kruczek

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

// /////////////////////////////////////////////////////////////////////////////
*/

const settingsManagerOverride = {
  // /////////////////////////////////////////////////////////////////////////////
  // NOTE: Tweak these settings for your own needs.
  //       All colors are in RGBA format and must be between 0.0 and 1.0
  // /////////////////////////////////////////////////////////////////////////////
  enableHoverOrbits: true, // Show orbits when mouse hovers over
  startWithOrbitsDisplayed: false, // Start with orbits displayed
  orbitHoverColor: [1.0, 0.5, 0.5, 1.0], // Color of orbits when mouse hovers over

  minZoomDistance: 38900, // Minimum zoom distance - 39000 shows GEO satellites up close
  installDirectory: './keepTrack/', // Directory where keepTrack is installed

  colors: {
    debris: [0.8, 0.8, 0.0, 0.4], // Color of debris
    starHi: [1.0, 1.0, 1.0, 0.0], // Color of bright stars
    starMed: [1.0, 1.0, 1.0, 0.0], // Color of medium stars
    starLow: [1.0, 1.0, 1.0, 0.0], // Color of dim stars

    // /////////////////////////////////////////////////////////////////////////////
    // NOTE: These are the required settings for allowing KeepTrack to be embedded
    //       in other applications. Changing them may cause KeepTrack to break.
    // /////////////////////////////////////////////////////////////////////////////
    facility: [0.64, 0.0, 0.64, 1.0],
    sensor: [1.0, 0.0, 0.0, 1.0],
    deselected: [1.0, 1.0, 1.0, 0],
    inView: [0.85, 0.5, 0.0, 1.0],
    inviewAlt: [0.2, 0.4, 1.0, 1],
    radarData: [0.0, 1.0, 1.0, 1.0],
    radarDataMissile: [1.0, 0.0, 0.0, 1.0],
    radarDataSatellite: [0.0, 1.0, 0.0, 1.0],
    payload: [0.2, 1.0, 0.0, 0.5],
    rocketBody: [0.2, 0.4, 1.0, 1],
    unknown: [0.5, 0.5, 0.5, 0.85],
    trusat: [1.0, 0.0, 0.6, 1.0],
    analyst: [1.0, 1.0, 1.0, 0.8],
    missile: [1.0, 1.0, 0.0, 1.0],
    missileInview: [1.0, 0.0, 0.0, 1.0],
    transparent: [1.0, 1.0, 1.0, 0.1],
    satHi: [1.0, 1.0, 1.0, 1.0],
    satMed: [1.0, 1.0, 1.0, 0.8],
    satLow: [1.0, 1.0, 1.0, 0.6],
    sunlightInview: [0.85, 0.5, 0.0, 1.0],
    penumbral: [1.0, 1.0, 1.0, 0.3],
    umbral: [1.0, 1.0, 1.0, 0.1],
    gradientAmt: 0,
    satSmall: [0.2, 1.0, 0.0, 0.65],
    rcsSmall: [1.0, 0, 0, 0.6],
    rcsMed: [0.2, 0.4, 1.0, 1],
    rcsLarge: [0, 1.0, 0, 0.6],
    rcsUnknown: [1.0, 1.0, 0, 0.6],
    ageNew: [0, 1.0, 0, 0.9],
    ageMed: [1.0, 1.0, 0.0, 0.9],
    ageOld: [1.0, 0.6, 0, 0.9],
    ageLost: [1.0, 0.0, 0, 0.9],
    lostobjects: [0.2, 1.0, 0.0, 0.65],
    satLEO: [0.2, 1.0, 0.0, 0.65],
    satGEO: [0.2, 1.0, 0.0, 0.65],
    inGroup: [1.0, 0.0, 0.0, 1.0],
    countryPRC: [1.0, 0, 0, 0.6],
    countryUS: [0.2, 0.4, 1.0, 1],
    countryCIS: [1.0, 1.0, 1.0, 1.0],
    countryOther: [0, 1.0, 0, 0.6],
  },
  noMeshManager: true,
  isUseDebrisCatalog: true,
  isDisableSensors: true,
  isDisableLaunchSites: true,
  isDisableControlSites: true,
  disableUI: true,
  disableCameraControls: true,
  disableNormalEvents: false,
  disableDefaultContextMenu: false,
  disableWindowScroll: false,
  disableZoomControls: false,
  disableWindowTouchMove: false,
  isAutoResizeCanvas: false,
  isEnableGsCatalog: false,
  isDisableAsciiCatalog: true,
  isLoadLastMap: false,

  plugins: {
    debug: false,
    satInfoboxCore: false,
    updateSelectBoxCore: false,
    aboutManager: false,
    collisions: false,
    dops: false,
    findSat: false,
    launchCalendar: false,
    newLaunch: false,
    nextLaunch: false,
    nightToggle: false,
    photoManager: false,
    recorderManager: false,
    satChanges: false,
    stereoMap: false,
    timeMachine: false,
    twitter: false,
    initialOrbit: false,
    missile: false,
    breakup: false,
    editSat: false,
    constellations: false,
    countries: false,
    colorsMenu: false,
    shortTermFences: false,
    orbitReferences: false,
    externalSources: false,
    analysis: false,
    sensorFov: false,
    sensorSurv: false,
    satelliteView: false,
    satelliteFov: false,
    planetarium: false,
    astronomy: false,
    photo: false,
    watchlist: false,
    sensor: false,
    settingsMenu: false,
    datetime: false,
    social: false,
    topMenu: false,
    classification: false,
    soundManager: false,
    gamepad: false,
  },
};

// Expose these to the console
window.settingsManagerOverride = settingsManagerOverride;
