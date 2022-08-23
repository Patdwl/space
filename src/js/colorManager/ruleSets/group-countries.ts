import { ColorInformation, Pickable, colorSchemeManager } from '../colorSchemeManager';

import { SatObject } from '@app/js/api/keepTrackTypes';
import { keepTrackApi } from '@app/js/api/keepTrackApi';

// This is intentionally complex to reduce object creation and GC
// Splitting it into subfunctions would not be optimal
// prettier-ignore
export const groupCountriesRules = (sat: SatObject): ColorInformation => { // NOSONAR
  const { mainCamera } = keepTrackApi.programs;
  if (mainCamera.cameraType.current === mainCamera.cameraType.Planetarium) {
    return {
      color: colorSchemeManager.colorTheme.deselected,
      pickable: Pickable.No,
    };
  }  

  if (sat.isInGroup) {
  switch (sat.country) {
    case 'United States of America':
    case 'United States':
    case 'US':
      if (colorSchemeManager.objectTypeFlags.countryUS === false) {
        return {
          color: colorSchemeManager.colorTheme.deselected,
          pickable: Pickable.No,
        };
      } else {
        return {
          color: colorSchemeManager.colorTheme.countryUS,
          pickable: Pickable.Yes,
        };
      }
    case 'Russian Federation':
    case 'CIS':
    case 'RU':
    case 'SU':
    case 'Russia':
      if (colorSchemeManager.objectTypeFlags.countryCIS === false) {
        return {
          color: colorSchemeManager.colorTheme.deselected,
          pickable: Pickable.No,
        };
      } else {
        return {
          color: colorSchemeManager.colorTheme.countryCIS,
          pickable: Pickable.Yes,
        };
      }
    case 'China':
    case `China, People's Republic of`:
    case `Hong Kong Special Administrative Region, China`:
    case 'China (Republic)':
    case 'PRC':
    case 'CN':
      if (colorSchemeManager.objectTypeFlags.countryPRC === false) {
        return {
          color: colorSchemeManager.colorTheme.deselected,
          pickable: Pickable.No,
        };
      } else {
        return {
          color: colorSchemeManager.colorTheme.countryPRC,
          pickable: Pickable.Yes,
        };
      }
    default:        
      if (colorSchemeManager.objectTypeFlags.countryOther === false || !sat.TLE1 || mainCamera.cameraType.current === mainCamera.cameraType.Planetarium) {
        return {
          color: colorSchemeManager.colorTheme.deselected,
          pickable: Pickable.No,
        };
      }
      return {
        color: colorSchemeManager.colorTheme.countryOther,
        pickable: Pickable.Yes,
      };
    }
  }

  // Show Markers But Don't Allow Them To Be Selected
  if (sat.marker) {
    return {
      color: colorSchemeManager.colorTheme.marker[0],
      marker: true,
      pickable: Pickable.No,
    };
  }  

  return {
    color: colorSchemeManager.colorTheme.deselected,
    pickable: Pickable.No,
  };
};
