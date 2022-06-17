import $ from 'jquery';
import { getEl } from '../lib/helpers';

export const allowPeriod = (e: KeyboardEvent) => {
  if (e.code === 'Period' || e.code === 'NumpadDecimal') e.preventDefault();
};
export const esDay366 = () => {
  if (parseInt((<HTMLInputElement>getEl('es-day')).value) < 0) (<HTMLInputElement>getEl('es-day')).value = '000.00000000';
  if (parseInt((<HTMLInputElement>getEl('es-day')).value) >= 367) (<HTMLInputElement>getEl('es-day')).value = '366.00000000';
};
export const esInc180 = function (): void {
  if (parseInt((<HTMLInputElement>getEl('es-inc')).value) < 0) (<HTMLInputElement>getEl('es-inc')).value = '000.0000';
  if (parseInt((<HTMLInputElement>getEl('es-inc')).value) > 180) (<HTMLInputElement>getEl('es-inc')).value = '180.0000';
};
export const esRasc360 = function (): void {
  if (parseInt((<HTMLInputElement>getEl('es-rasc')).value) < 0) (<HTMLInputElement>getEl('es-rasc')).value = '000.0000';
  if (parseInt((<HTMLInputElement>getEl('es-rasc')).value) > 360) (<HTMLInputElement>getEl('es-rasc')).value = '360.0000';
};
export const esMeanmo18 = function (): void {
  if (parseInt((<HTMLInputElement>getEl('es-meanmo')).value) < 0) (<HTMLInputElement>getEl('es-meanmo')).value = '00.00000000';
  if (parseInt((<HTMLInputElement>getEl('es-meanmo')).value) > 18) (<HTMLInputElement>getEl('es-meanmo')).value = '18.00000000';
};
export const esArgPe360 = function (): void {
  if (parseInt((<HTMLInputElement>getEl('es-argPe')).value) < 0) (<HTMLInputElement>getEl('es-argPe')).value = '000.0000';
  if (parseInt((<HTMLInputElement>getEl('es-argPe')).value) > 360) (<HTMLInputElement>getEl('es-argPe')).value = '360.0000';
};
export const esMeana360 = function (): void {
  if (parseInt((<HTMLInputElement>getEl('es-meana')).value) < 0) (<HTMLInputElement>getEl('es-meana')).value = '000.0000';
  if (parseInt((<HTMLInputElement>getEl('es-meana')).value) > 360) (<HTMLInputElement>getEl('es-meana')).value = '360.0000';
};
export const msLat90 = function (): void {
  if (parseInt((<HTMLInputElement>getEl('ms-lat')).value) < -90) (<HTMLInputElement>getEl('ms-lat')).value = '-90.000';
  if (parseInt((<HTMLInputElement>getEl('ms-lat')).value) > 90) (<HTMLInputElement>getEl('ms-lat')).value = '90.000';
};
export const msLon180 = function (): void {
  if (parseInt((<HTMLInputElement>getEl('ms-lon')).value) < -180) (<HTMLInputElement>getEl('ms-lon')).value = '-180.000';
  if (parseInt((<HTMLInputElement>getEl('ms-lon')).value) > 180) (<HTMLInputElement>getEl('ms-lon')).value = '180.000';
};
export const initUiValidation = () => {
  getEl('editSat')
    .querySelectorAll('input')
    .forEach((el: HTMLInputElement) => {
      el.addEventListener('keydown', validateNumOnly);
    });
  getEl('es-ecen').addEventListener('keydown', allowPeriod);
  getEl('es-day').addEventListener('keyup', esDay366);
  getEl('es-inc').addEventListener('keyup', esInc180);
  getEl('es-rasc').addEventListener('keyup', esRasc360);
  getEl('es-meanmo').addEventListener('keyup', esMeanmo18);
  getEl('es-argPe').addEventListener('keyup', esArgPe360);
  getEl('es-meana').addEventListener('keyup', esMeana360);
  getEl('ms-lat').addEventListener('keyup', msLat90);
  getEl('ms-lon').addEventListener('keyup', msLon180);
};
export const validateNumOnly = (e: KeyboardEvent) => {
  if (
    // Allow: backspace, delete, tab, escape, enter and .
    $.inArray(e.code, ['Delete', 'Backspace', 'Tab', 'Escape', 'NumpadEnter', 'Enter', 'NumpadEnter', 'Period']) !== -1 ||
    // Allow: Ctrl+A, Command+A
    (e.code === 'KeyA' && (e.ctrlKey === true || e.metaKey === true)) ||
    // Allow: home, end, left, right, down, up
    $.inArray(e.code, ['Home', 'End', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']) !== -1
  ) {
    // let it happen, don't do anything
    return;
  }
  // Ensure that it is a number and stop the keypress
  if (
    $.inArray(e.code, ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0']) !== -1 ||
    $.inArray(e.code, ['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9', 'Numpad0']) !== -1
  ) {
    e.preventDefault();
  }
};
