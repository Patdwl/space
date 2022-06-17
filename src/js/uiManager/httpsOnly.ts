import $ from 'jquery';
import { keepTrackApi } from '../api/keepTrackApi';
import { SensorObject } from '../api/keepTrackTypes';
import { getEl } from '../lib/helpers';

export type GeolocationPosition = {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number;
  };
};

export interface SensorGeolocation {
  lat: number;
  lon: number;
  alt: number;
  minaz: number;
  maxaz: number;
  minel: number;
  maxel: number;
  minrange: number;
  maxrange: number;
}

export const updateSettingsManager = (position: GeolocationPosition): SensorGeolocation => {
  settingsManager.geolocation.lat = position.coords.latitude;
  settingsManager.geolocation.lon = position.coords.longitude;
  settingsManager.geolocation.alt = 0;
  settingsManager.geolocation.minaz = 0;
  settingsManager.geolocation.maxaz = 360;
  settingsManager.geolocation.minel = 30;
  settingsManager.geolocation.maxel = 90;
  settingsManager.geolocation.minrange = 0;
  settingsManager.geolocation.maxrange = 100000;
  return settingsManager.geolocation;
};

export const updateUi = (): void => {
  if (!settingsManager.geolocation) throw new Error('geolocation is not defined');
  if (typeof settingsManager.geolocation.lat !== 'number') throw new Error('geolocation.lat is not valid');
  if (typeof settingsManager.geolocation.lon !== 'number') throw new Error('geolocation.lon is not valid');
  if (typeof settingsManager.geolocation.alt !== 'number') throw new Error('geolocation.alt is not valid');

  const csLat = <HTMLInputElement>getEl('cs-lat');
  const csLon = <HTMLInputElement>getEl('cs-lon');
  const csHei = <HTMLInputElement>getEl('cs-hei');
  csLat.value = settingsManager.geolocation.lat;
  csLat.dispatchEvent(new Event('change'));
  csLon.value = settingsManager.geolocation.lon;
  csLon.dispatchEvent(new Event('change'));
  csHei.value = settingsManager.geolocation.alt;
  csHei.dispatchEvent(new Event('change'));

  $('#cs-telescope').attr('checked', 'checked');
  $('#cs-minaz').attr('disabled', true.toString());
  $('#cs-maxaz').attr('disabled', true.toString());
  $('#cs-minel').attr('disabled', true.toString());
  $('#cs-maxel').attr('disabled', true.toString());
  $('#cs-minrange').attr('disabled', true.toString());
  $('#cs-maxrange').attr('disabled', true.toString());
  getEl('cs-minaz-div').style.display = 'none';
  getEl('cs-maxaz-div').style.display = 'none';
  getEl('cs-minel-div').style.display = 'none';
  getEl('cs-maxel-div').style.display = 'none';
  getEl('cs-minrange-div').style.display = 'none';
  getEl('cs-maxrange-div').style.display = 'none';
  (<HTMLInputElement>getEl('cs-minaz')).value = '0';
  (<HTMLInputElement>getEl('cs-maxaz')).value = '360';
  (<HTMLInputElement>getEl('cs-minel')).value = '10';
  (<HTMLInputElement>getEl('cs-maxel')).value = '90';
  (<HTMLInputElement>getEl('cs-minrange')).value = '100';
  (<HTMLInputElement>getEl('cs-maxrange')).value = '50000';

  $('#sensor-type').html('Telescope');
  $('#sensor-info-title').html('Custom Sensor');
  $('#sensor-country').html('Custom Sensor');
};

export const updateSensorPosition = (position: GeolocationPosition): void => {
  const { objectManager, sensorManager, timeManager, satellite, satSet, mainCamera } = keepTrackApi.programs;
  const { lon, lat, alt, minaz, maxaz, minel, maxel, minrange, maxrange } = updateSettingsManager(position);

  sensorManager.whichRadar = 'CUSTOM';
  updateUi();

  const sensorInfo = {
    lat,
    lon,
    alt,
    obsminaz: minaz,
    obsmaxaz: maxaz,
    obsminel: minel,
    obsmaxel: maxel,
    obsminrange: minrange,
    obsmaxrange: maxrange,
  };

  satSet.satCruncher.postMessage({
    typ: 'sensor',
    setlatlong: true,
    sensor: sensorInfo,
  });

  satellite.setobs(<SensorObject[]>[sensorInfo]);

  objectManager.setSelectedSat(-1);
  maxrange > 6000 ? mainCamera.changeZoom('geo') : mainCamera.changeZoom('leo');
  mainCamera.camSnap(mainCamera.lat2pitch(lat), mainCamera.lon2yaw(lon, timeManager.selectedDate));
};

export const useCurrentGeolocationAsSensor = () => {
  if (location.protocol === 'https:' && !settingsManager.geolocationUsed && settingsManager.isMobileModeEnabled) {
    // Access to the users geolocation is explicitly for allowing them to use the
    // lat lon information when creating a custom sensor.
    navigator.geolocation.getCurrentPosition(updateSensorPosition); // NOSONAR
  }
};
