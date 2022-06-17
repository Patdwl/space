import { keepTrackApiStubs } from '../api/apiMocks';
import { keepTrackApi } from '../api/keepTrackApi';
import { KeepTrackPrograms } from '../api/keepTrackTypes';
import '../settingsManager/settingsManager';
import * as httpsOnly from './httpsOnly';

keepTrackApi.programs = <KeepTrackPrograms>(<unknown>{ ...keepTrackApi.programs, ...keepTrackApiStubs.programs });

describe('httpsOnly.useCurrentGeolocationAsSensor', () => {});

describe('httpsOnly.updateUi', () => {
  it('should match the snapshot', () => {
    document.body.innerHTML = `<input id="cs-lat"></input><input id="cs-lon"></input><input id="cs-hei"></input>`;
    settingsManager.geolocation = {
      lat: 41,
      lon: -71,
      alt: 1,
    };
    httpsOnly.updateUi();
    expect((<HTMLInputElement>document.getElementById('cs-lat')).value).toMatchSnapshot();
    expect((<HTMLInputElement>document.getElementById('cs-lon')).value).toMatchSnapshot();
    expect((<HTMLInputElement>document.getElementById('cs-hei')).value).toMatchSnapshot();
  });

  it('should not allow bad values', () => {
    document.body.innerHTML = `<input id="cs-lat"></input>`;
    settingsManager.geolocation = {
      lat: 'asdf',
      lon: -20,
      alt: 100,
    };
    expect(() => httpsOnly.updateUi()).toThrow();
  });
});

describe('httpsOnly.updateSettingsManager', () => {
  it('should not throw an error', () => {
    const result = httpsOnly.updateSettingsManager({
      coords: {
        latitude: 41,
        longitude: -71,
        altitude: 1,
      },
    });
    expect(() => result).not.toThrow();
  });
  it('should update the settingsManager', () => {
    httpsOnly.updateSettingsManager({
      coords: {
        latitude: 41,
        longitude: -71,
        altitude: 1,
      },
    });
    expect(settingsManager.geolocation).toMatchSnapshot();
  });
});

describe('httpsOnly.updateSensorPosition', () => {
  it('should not throw an error', () => {
    const result = httpsOnly.updateSensorPosition({
      coords: {
        latitude: 41,
        longitude: -71,
        altitude: 1,
      },
    });
    expect(() => result).not.toThrow();
  });
});

describe('httpsOnly.useCurrentGeolocationAsSensor', () => {
  it('should not throw an error', () => {
    expect(() => httpsOnly.useCurrentGeolocationAsSensor()).not.toThrow();
  });
  it('should try to get geolocation if configured', () => {
    settingsManager.geolocationUsed = false;
    settingsManager.isMobileModeEnabled = true;
    delete window.location;
    window.location = <any>{
      protocol: 'https:',
    };
    delete window.navigator;
    window.navigator = <any>{
      geolocation: {
        getCurrentPosition: jest.fn(),
      },
    };
    httpsOnly.useCurrentGeolocationAsSensor();
    expect(window.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
});
