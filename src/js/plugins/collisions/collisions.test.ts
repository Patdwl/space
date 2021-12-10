import { keepTrackApiStubs } from '@app/js/api/apiMocks';
import { keepTrackApi } from '@app/js/api/keepTrackApi';
import * as collisions from '@app/js/plugins/collisions/collisions';

keepTrackApi.programs = { ...keepTrackApi.programs, ...keepTrackApiStubs.programs };

// @ponicode
describe('collisions.uiManagerInit', () => {
  test('0', () => {
    let result: any = collisions.uiManagerInit();
    expect(result).toMatchSnapshot();
  });
});

// @ponicode
describe('collisions.adviceReady', () => {
  test('0', () => {
    let result: any = collisions.adviceReady();
    expect(result).toMatchSnapshot();
  });
});

// @ponicode
describe('collisions.hideSideMenus', () => {
  test('0', () => {
    let result: any = collisions.hideSideMenus();
    expect(result).toMatchSnapshot();
  });
});

// @ponicode
describe('collisions.onCruncherMessage', () => {
  test('0', () => {
    let result: any = collisions.onCruncherMessage();
    expect(result).toMatchSnapshot();
  });

  test('1', () => {
    keepTrackApi.programs.socrates = {
      socratesObjOne: [
        ['a b', 'a b', 'a b', 'a b', 'a b'],
        ['a b', 'a b', 'a b', 'a b', 'a b'],
      ],
      socratesObjTwo: [
        ['a b', 'a b', 'a b', 'a b', '2020 Jan 3 12:30:40.50'],
        ['a b', 'a b', 'a b', 'a b', '2020 Jan 3 12:30:40.50'],
      ],
    };
    collisions.socrates(0);
    let result: any = collisions.onCruncherMessage();
    expect(result).toMatchSnapshot();
  });
});

// @ponicode
describe('collisions.init', () => {
  test('0', () => {
    let result: any = collisions.init();
    expect(result).toMatchSnapshot();
  });
});

describe('collisions.bottomMenuClick', () => {
  test('0', () => {
    let result: any = collisions.bottomMenuClick('menu-satellite-collision');
    expect(result).toMatchSnapshot();
  });

  test('1', () => {
    collisions.bottomMenuClick('menu-satellite-collision');
    let result: any = () => {
      collisions.bottomMenuClick('menu-satellite-collision');
    };
    expect(result).toMatchSnapshot();
  });

  test('2', () => {
    let result: any = collisions.bottomMenuClick('');
    expect(result).toMatchSnapshot();
  });
});

// @ponicode
describe('collisions.socrates', () => {
  beforeAll(() => {
    keepTrackApi.programs.socrates = {
      socratesObjOne: [
        ['a b', 'a b', 'a b', 'a b', 'a b'],
        ['a b', 'a b', 'a b', 'a b', 'a b'],
      ],
      socratesObjTwo: [
        ['a b', 'a b', 'a b', 'a b', '2020 Jan 3 12:30:40.50'],
        ['a b', 'a b', 'a b', 'a b', '2020 Jan 3 12:30:40.50'],
      ],
    };
  });
  test('0', () => {
    let result: any = collisions.socrates(1);
    expect(result).toMatchSnapshot();
  });

  test('3', () => {
    let result: any = collisions.socrates(0);
    expect(result).toMatchSnapshot();
  });

  test('4', () => {
    let result: any = collisions.socrates(-1);
    expect(result).toMatchSnapshot();
  });

  test('5', () => {
    let callFunction: any = () => {
      collisions.socrates(NaN);
    };

    expect(callFunction).toThrow();
  });
});

describe('collisions.processSocratesHtm', () => {
  test('0', () => {
    window.document.body.innerHTML = '<table id="socrates-table"></table>';
    const documentHtml = `<html>
      <body>
        <table id="CATNR1">
          <tr>
            <td>
            </td>
          </tr>
        </table>
      </body>
    </html>`;
    let result: any = collisions.processSocratesHtm(documentHtml);
    expect(result).toMatchSnapshot();
  });
});

// @ponicode
describe('collisions.MMMtoInt', () => {
  test('0', () => {
    let result: any = collisions.MMMtoInt('Oct');
    expect(result).toBe(9);
  });

  test('1', () => {
    let result: any = collisions.MMMtoInt('Jan');
    expect(result).toBe(0);
  });

  test('2', () => {
    let result: any = collisions.MMMtoInt('Mar');
    expect(result).toBe(2);
  });

  test('3', () => {
    let result: any = collisions.MMMtoInt('Apr');
    expect(result).toBe(3);
  });

  test('4', () => {
    let result: any = collisions.MMMtoInt('Aug');
    expect(result).toBe(7);
  });

  test('5', () => {
    let result: any = collisions.MMMtoInt('Jul');
    expect(result).toBe(6);
  });

  test('6', () => {
    expect(() => {
      collisions.MMMtoInt('');
    }).toThrow();
  });

  test('7', () => {
    let result: any = collisions.MMMtoInt('Nov');
    expect(result).toBe(10);
  });

  test('8', () => {
    let result: any = collisions.MMMtoInt('Jun');
    expect(result).toBe(5);
  });

  test('9', () => {
    let result: any = collisions.MMMtoInt('Feb');
    expect(result).toBe(1);
  });

  test('10', () => {
    let result: any = collisions.MMMtoInt('May');
    expect(result).toBe(4);
  });

  test('11', () => {
    let result: any = collisions.MMMtoInt('Sep');
    expect(result).toBe(8);
  });

  test('12', () => {
    let result: any = collisions.MMMtoInt('Dec');
    expect(result).toBe(11);
  });
});
