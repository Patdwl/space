import { keepTrackApi } from '@app/js/api/keepTrackApi';
import { legendMenuChange } from '..';
import { searchBox } from './searchBox';
import { toast } from '../ui/toast';
import { updateURL } from '../url/update-url';

export const doSearch = (searchString: string, isPreventDropDown = false) => {
  if (searchString == '') {
    searchBox.hideResults();
    return;
  }

  const { satSet } = keepTrackApi.programs;

  let idList = searchBox.doSearch(searchString, isPreventDropDown);
  if (idList.length === 0) {
    if (settingsManager.lastSearch?.length > settingsManager.minimumSearchCharacters) {
      toast('No Results Found', 'serious', false);
    }
    searchBox.hideResults();
    return;
  }

  if (settingsManager.isSatOverflyModeOn) {
    satSet.satCruncher.postMessage({
      typ: 'satelliteSelected',
      satelliteSelected: idList,
    });
  }
  // Don't let the search overlap with the legend
  legendMenuChange('clear');
  updateURL();
};
