/* eslint-disable no-unreachable */
/**
 * /*! /////////////////////////////////////////////////////////////////////////////
 *
 * main.js is the primary javascript file for keeptrack.space. It manages all user
 * interaction with the application.
 * http://keeptrack.space
 *
 * @Copyright (C) 2016-2022 Theodore Kruczek
 * @Copyright (C) 2020-2022 Heather Kruczek
 * @Copyright (C) 2015-2016, James Yoder
 *
 * Original source code released by James Yoder at https://github.com/jeyoder/ThingsInSpace/
 * under the MIT License. Please reference http://keeptrack.space/license/thingsinspace.txt
 *
 * KeepTrack is free software: you can redistribute it and/or modify it under the
 * terms of the GNU Affero General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * KeepTrack is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with
 * KeepTrack. If not, see <http://www.gnu.org/licenses/>.
 *
 * /////////////////////////////////////////////////////////////////////////////
 */

import { isThisJest, keepTrackApi } from './api/keepTrackApi';

import eruda from 'eruda';
import erudaFps from 'eruda-fps';
import { importCss } from './css';
import { getEl } from './lib/helpers';

export const showErrorCode = (error: Error & { lineNumber: number }): void => {
  let errorHtml = '';
  errorHtml += error?.message ? `${error.message}<br>` : '';
  errorHtml += error?.lineNumber ? `Line: ${error.lineNumber}<br>` : '';
  errorHtml += error?.stack ? `${error.stack}<br>` : '';
  getEl('loader-text').innerHTML = errorHtml;
  // istanbul ignore next
  if (!isThisJest()) console.warn(error);
};

export const loadAfterStart = () => {
  if (settingsManager.cruncherReady) {
    // Create Container Div
    // NOTE: This needs to be done before uiManagerFinal
    getEl('ui-wrapper').innerHTML += '<div id="eruda"></div>';

    // Update any CSS now that we know what is loaded
    keepTrackApi.methods.uiManagerFinal();
    // Update MaterialUI with new menu options
    window.M.AutoInit();

    eruda.init({
      autoScale: false,
      container: getEl('eruda'),
      useShadowDom: false,
      tool: ['console', 'elements'],
    });
    eruda.add(erudaFps);

    // Hide Eruda
    (<HTMLDivElement>(<unknown>document.getElementsByClassName('eruda-entry-btn')[0])).style.display = 'none';
    (<HTMLDivElement>(<unknown>document.getElementById('eruda'))).style.top = 'var(--top-menu-height)';
    (<HTMLDivElement>(<unknown>document.getElementById('eruda'))).style.height = '80%';
    (<HTMLDivElement>(<unknown>document.getElementById('eruda'))).style.width = '60%';
    (<HTMLDivElement>(<unknown>document.getElementById('eruda'))).style.left = '20%';

    try {
      settingsManager.onLoadCb();
    } catch (error) {
      // Intentionally Blank
    }
  } else {
    setTimeout(loadAfterStart, 100);
  }
};

// Load the CSS
if (!isThisJest()) importCss();

// Load the main website
import('./initalizeKeepTrack').then(({ initalizeKeepTrack }) => {
  if (!isThisJest()) {
    console.log(`
      _  __            _______             _       _____                       
      | |/ /           |__   __|           | |     / ____|                     
      | ' / ___  ___ _ __ | |_ __ __ _  ___| | __ | (___  _ __   __ _  ___ ___ 
      |  < / _ \\/ _ | '_ \\| | '__/ _\` |/ __| |/ /  \\___ \\| '_ \\ / _\` |/ __/ _ \\ 
      | . |  __|  __| |_) | | | | (_| | (__|   < _ ____) | |_) | (_| | (_|  __/
      |_|\\_\\___|\\___| .__/|_|_|  \\__,_|\\___|_|\\_(_|_____/| .__/ \\__,_|\\___\\___|
                    | |                                  | |                   
                    |_|                                  |_|                   
      #########################################################################
      Trying to figure out how the code works? Check out 
      https://github.com/thkruz/keeptrack.space/ or send me an email at
      theodore.kruczek at gmail dot com.
    `);
    initalizeKeepTrack();
  }
});
