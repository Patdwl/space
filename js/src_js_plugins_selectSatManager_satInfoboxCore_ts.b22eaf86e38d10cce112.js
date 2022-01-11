"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_selectSatManager_satInfoboxCore_ts"],{

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
/* harmony export */   "satMissionData": () => (/* binding */ satMissionData),
/* harmony export */   "intelData": () => (/* binding */ intelData),
/* harmony export */   "objectData": () => (/* binding */ objectData),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/SpaceObjectType */ "./src/js/api/SpaceObjectType.ts");
/* harmony import */ var _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/lib/constants */ "./src/js/lib/constants.ts");
/* harmony import */ var _app_js_lib_suncalc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/js/lib/suncalc.js */ "./src/js/lib/suncalc.js");
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
    satMissionData: {
        isLoaded: false,
    },
};
const sensorInfo = (sat) => {
    if (!satInfoboxCore.sensorInfo.isLoaded && settingsManager.plugins.sensor) {
        $('#sat-infobox').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
        <div id="sensor-sat-info">
          <li class="divider"></li>
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
        if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.checkSensorSelected()) {
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
    if (!satInfoboxCore.launchData.isLoaded) {
        $('#sat-infobox').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
          <li class="divider"></li>
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
    const country = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.objectManager.extractCountry(sat.country);
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
        site = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.objectManager.extractLaunchSite(sat.launchSite);
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
        satLvString = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.objectManager.extractLiftVehicle(sat.launchVehicle); // Replace with link if available
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
const nearObjectsLinkClick = () => {
    const { uiManager, satSet, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (objectManager.selectedSat === -1) {
        return;
    }
    const sat = objectManager.selectedSat;
    const SCCs = [];
    let pos = satSet.getSatPosOnly(sat).position;
    const posXmin = pos.x - 100;
    const posXmax = pos.x + 100;
    const posYmin = pos.y - 100;
    const posYmax = pos.y + 100;
    const posZmin = pos.z - 100;
    const posZmax = pos.z + 100;
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
    const { satSet, searchBox, satellite } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    // searchBox.doArraySearch(satellite.findNearbyObjectsByOrbit(satSet.getSat(objectManager.selectedSat)));
    const searchStr = searchBox.doArraySearch(satellite.findNearbyObjectsByOrbit(satSet.getSat(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.objectManager.selectedSat)));
    searchBox.doSearch(searchStr, false);
};
const allObjectsLink = () => {
    const { uiManager, satSet, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    if (objectManager.selectedSat === -1) {
        return;
    }
    const intldes = satSet.getSatExtraOnly(objectManager.selectedSat).intlDes;
    const searchStr = intldes.slice(0, 8);
    uiManager.doSearch(searchStr);
    $('#search').val(searchStr);
};
const orbitalData = (sat) => {
    if (!satInfoboxCore.orbitalData.isLoaded) {
        $('#ui-wrapper').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
          <div id="sat-infobox" class="text-select satinfo-fixed">
            <div id="sat-info-top-links">
              <div id="sat-info-title" class="center-text">This is a title</div>
              <div id="all-objects-link" class="link sat-infobox-links sat-only-info">Find all objects from this launch...</div>
              <div id="near-orbits-link" class="link sat-infobox-links sat-only-info">Find all objects near this orbit...</div>
              <div id="near-objects-link" class="link sat-infobox-links">Find all objects near this object...</div>              
            </div>
            <li class="divider"></li>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key">COSPAR</div>
              <div class="sat-info-value" id="sat-intl-des">xxxx-xxxA</div>
            </div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key">NORAD</div>
              <div class="sat-info-value" id="sat-objnum">99999</div>
            </div>          
            <li class="divider"></li>
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
            // console.warn(error);
        }
        $('#sat-apogee').html(sat.apogee.toFixed(0) + ' km');
        $('#sat-perigee').html(sat.perigee.toFixed(0) + ' km');
        $('#sat-inclination').html((sat.inclination * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG).toFixed(2) + '°');
        $('#sat-eccentricity').html(sat.eccentricity.toFixed(3));
        $('#sat-raan').html((sat.raan * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG).toFixed(2) + '°');
        $('#sat-argPe').html((sat.argPe * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG).toFixed(2) + '°');
        $('#sat-period').html(sat.period.toFixed(2) + ' min');
        $('#sat-period').tooltip({
            // delay: 50,
            html: 'Mean Motion: ' + (_app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__.MINUTES_PER_DAY / sat.period).toFixed(2),
            position: 'left',
        });
        // TODO: Error checking on Iframe
        let now = new Date();
        const jday = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.timeManager.getDayOfYear(now);
        now = now.getFullYear();
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
        if (!_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.objectManager.isSensorManagerLoaded) {
            $('#sat-sun').parent().hide();
        }
        else {
            now = new Date(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.timeManager.dynamicOffsetEpoch + _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.timeManager.propOffset);
            const sunTime = _app_js_lib_suncalc_js__WEBPACK_IMPORTED_MODULE_3__.SunCalc.getTimes(now, _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.currentSensor[0].lat, _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.currentSensor[0].lon);
            let satInSun = -1;
            if (typeof sat.isInSun !== 'undefined') {
                satInSun = sat.isInSun();
            }
            // If No Sensor, then Ignore Sun Exclusion
            if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.currentSensor[0].lat === null) {
                $('#sat-sun').hide();
                return;
            }
            else {
                $('#sat-sun').show();
            }
            // If Radar Selected, then Say the Sun Doesn't Matter
            if (_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.currentSensor[0].type !== _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.OPTICAL &&
                _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.sensorManager.currentSensor[0].type !== _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.OBSERVER) {
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
    $('#near-objects-link').on('click', nearObjectsLinkClick);
};
const satMissionData = (sat) => {
    var _a, _b;
    if (!satInfoboxCore.satMissionData.isLoaded) {
        $('#sat-infobox').append(`
        <li class="divider"></li>
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
    $('#sat-info-title').html(sat.name);
    switch (sat.type) {
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.UNKNOWN:
            $('#sat-type').html('TBA');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.PAYLOAD:
            $('#sat-type').html('Payload');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.ROCKET_BODY:
            $('#sat-type').html('Rocket Body');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.DEBRIS:
            $('#sat-type').html('Debris');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.SPECIAL:
            $('#sat-type').html('Special');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.RADAR_MEASUREMENT:
            $('#sat-type').html('Radar Measurement');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.RADAR_TRACK:
            $('#sat-type').html('Radar Track');
            break;
        case _app_js_api_SpaceObjectType__WEBPACK_IMPORTED_MODULE_1__.SpaceObjectType.RADAR_OBJECT:
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
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'orbitalData',
        cb: orbitalData,
    });
    // Register sensor data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'sensorInfo',
        cb: sensorInfo,
    });
    // Register launch data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'launchData',
        cb: launchData,
    });
    // Register mission data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'satMissionData',
        cb: satMissionData,
    });
    // Register intel data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'intelData',
        cb: intelData,
    });
    // Register object data
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'objectData',
        cb: objectData,
    });
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_selectSatManager_satInfoboxCore_ts.b22eaf86e38d10cce112.js.map