import { mobileManager } from '@app/js/uiManager/mobileManager';
import { searchBox } from '@app/js/uiManager/searchBox';
import * as glm from 'gl-matrix';
import { SatRec } from 'satellite.js';
import { ColorRuleSet, ColorSchemeManager } from '../colorManager/colorSchemeManager';
import { LineFactory } from '../drawManager/sceneManager/line-factory';
import { SatGroup } from '../groupsManager/sat-group';
import { TleParams } from '../satMath/satMath';
import { toastMsgType } from '../uiManager/uiManager';
import { SpaceObjectType } from './SpaceObjectType';

export enum CameraType {
  current = 0,
  Default = 1,
  Offset = 2,
  FixedToSat = 3,
  Fps = 4,
  Planetarium = 5,
  Satellite = 6,
  Astronomy = 7,
}

export type ZoomValue = 'leo' | 'geo';

export interface SunObject {
  isLoaded: boolean;
  program: any;
  buffers: any;
  vao: WebGLVertexArrayObject;
  now: any;
  sunvar: any;
  pos: any;
  mvMatrix: glm.mat4;
  nMatrix: glm.mat3;
  pMatrix: glm.mat4;
  camMatrix: glm.mat4;
  screenPosition: { x: number; y: number };
  init(): Promise<void>;
  godrays: any;
  update(): void;
  draw(pMatrix: glm.mat4, camMatrix: glm.mat4, frameBuffer: WebGLFramebuffer): void;
  drawGodrays(gl: WebGL2RenderingContext, curBuffer: WebGLBuffer): void;
  initGodrays(gl: WebGL2RenderingContext): void;
  eci: {
    x: number;
    y: number;
    z: number;
  };
}

export interface PostProcessingManager {
  init(gl: WebGL2RenderingContext): void;
}

export interface UiManager {
  lastBoxUpdateTime: number;
  earthClicked: () => void;
  updateNextPassOverlay(arg0: boolean);
  resize2DMap();
  isAnalysisMenuOpen: any;
  lastNextPassCalcSatId: number;
  lastNextPassCalcSensorId: any;
  createClockDOMOnce: boolean;
  toast: (toastText: string, type: toastMsgType, isLong?: boolean) => void;
  uiInput: UiInputInterface;
  searchBox: typeof searchBox;
  mobileManager: typeof mobileManager;
  isCurrentlyTyping: boolean;
  searchToggle: (force?: any) => void;
  hideSideMenus(): void;
  isUiVisible: any;
  hideUi: () => void;
  keyHandler: (evt: any) => void;
  legendMenuChange(arg0: string): void;
  hideLoadingScreen: () => void;
  loadStr(arg0: string): void;
  useCurrentGeolocationAsSensor: () => void;
  legendColorsChange: () => void;
  colorSchemeChangeAlert: (scheme: any) => void;
  lastColorScheme: any;
  updateURL: () => void;
  lookAtLatLon: () => void;
  reloadLastSensor: () => void;
  getsensorinfo(): void;
  doSearch(searchString: string, isPreventDropDown?: boolean): void;
  panToStar: (c: SatObject) => void;
  clearRMBSubMenu: () => void;
  menuController: () => void;
  legendHoverMenuClick: (legendType: any) => void;
  footerToggle(): void;
  bottomIconPress: (evt: any) => any;
  onReady: () => void;
  init: () => void;
  postStart: () => void;
}

/** Array of ECI Coordinates [x, y, z] */
export interface EciArr3 {
  [Symbol.iterator](): IterableIterator<number>;
}

/** Array of ECF Coordinates [x, y, z] */
export interface EcfArr3 {
  [Symbol.iterator](): IterableIterator<number>;
}

export interface TearrData {
  inView?: boolean;
  time?: string;
  alt?: number;
  lat?: number;
  lon?: number;
  az: number;
  el: number;
  rng: number;
  name: string;
}

export interface GroupsManager {
  stopUpdatingInViewSoon: boolean;
  Canada: SatGroup;
  China: SatGroup;
  France: SatGroup;
  India: SatGroup;
  Israel: SatGroup;
  Japan: SatGroup;
  Russia: SatGroup;
  UnitedKingdom: SatGroup;
  UnitedStates: SatGroup;
  debris: SatGroup;
  GPSGroup: SatGroup;
  SpaceStations: SatGroup;
  GlonassGroup: SatGroup;
  GalileoGroup: SatGroup;
  AmatuerRadio: SatGroup;
  aehf: SatGroup;
  wgs: SatGroup;
  starlink: SatGroup;
  sbirs: SatGroup;
  selectedGroup: SatGroup;
  createGroup: (groupType: string, data: any) => SatGroup;
  selectGroup: (group: SatGroup) => void;
  selectGroupNoOverlay: (group: SatGroup) => void;
  updateIsInGroup: (oldGroup: SatGroup, newGroup: SatGroup) => void;
  clearSelect: () => void;
}

export interface SatGroupCollection {
  satId: number;
  isIntlDes?: boolean;
  isObjnum?: boolean;
  missile?: boolean;
}

export interface SatShader {
  largeObjectMinZoom: number;
  largeObjectMaxZoom: number;
  minSize: number;
  minSizePlanetarium: number;
  maxSizePlanetarium: number;
  maxAllowedSize: number;
  isUseDynamicSizing: boolean;
  dynamicSizeScalar: number;
  starSize: string;
  distanceBeforeGrow: string;
  blurFactor1: string;
  blurFactor2: string;
  blurFactor3: string;
  blurFactor4: string;
  maxSize: number;
}

export interface MissileParams {
  missile?: boolean;
  latList?: number[];
  lonList?: number[];
  altList?: number[];
}

export interface OrbitManager {
  shader: any;
  init();
  isTimeMachineRunning: any;
  isTimeMachineVisible: boolean;
  tempTransColor: [number, number, number, number];
  historyOfSatellitesPlay(): void;
  playNextSatellite: (runCount: number, year: number) => void;
  historyOfSatellitesRunCount: number;
  orbitWorker: any;
  removeInViewOrbit(arg0: any): void;
  draw(pMatrix: any, camMatrix: any, curBuffer: any): void;
  clearSelectOrbit(isSecondary?: boolean): void;
  setSelectOrbit(selectedSat: number, isSecondary?: boolean): void;
  updateOrbitBuffer(satId: number, force?: boolean, TLE1?: string, TLE2?: string, missileParams?: MissileParams): void;
  addInViewOrbit(i: number): void;
  setHoverOrbit(mouseSat: any): void;
  clearHoverOrbit(): void;
  clearInViewOrbit(): void;
}

export interface Colors {
  pink: [number, number, number, number];
  inFOV: [number, number, number, number];
  inFOVAlt: [number, number, number, number];
  sunlight60: [number, number, number, number];
  sunlight80: [number, number, number, number];
  sunlight100: [number, number, number, number];
  length: number;
  version: string;
  facility: [number, number, number, number];
  starHi: [number, number, number, number];
  starMed: [number, number, number, number];
  starLow: [number, number, number, number];
  sensor: [number, number, number, number];
  marker: [number, number, number, number][];
  deselected: [number, number, number, number];
  radarData: [number, number, number, number];
  radarDataMissile: [number, number, number, number];
  radarDataSatellite: [number, number, number, number];
  payload: [number, number, number, number];
  rocketBody: [number, number, number, number];
  debris: [number, number, number, number];
  unknown: [number, number, number, number];
  trusat: [number, number, number, number];
  analyst: [number, number, number, number];
  missile: [number, number, number, number];
  missileInview: [number, number, number, number];
  transparent: [number, number, number, number];
  satHi: [number, number, number, number];
  satMed: [number, number, number, number];
  satLow: [number, number, number, number];
  sunlightInview: [number, number, number, number];
  penumbral: [number, number, number, number];
  umbral: [number, number, number, number];
  gradientAmt: number;
  satSmall: [number, number, number, number];
  rcsSmall: [number, number, number, number];
  rcsMed: [number, number, number, number];
  rcsLarge: [number, number, number, number];
  rcsUnknown: [number, number, number, number];
  ageNew: [number, number, number, number];
  ageMed: [number, number, number, number];
  ageOld: [number, number, number, number];
  ageLost: [number, number, number, number];
  lostobjects: [number, number, number, number];
  satLEO: [number, number, number, number];
  satGEO: [number, number, number, number];
  inGroup: [number, number, number, number];
  countryPRC: [number, number, number, number];
  countryUS: [number, number, number, number];
  countryCIS: [number, number, number, number];
  countryOther: [number, number, number, number];
}

export interface DrawProgram extends WebGLProgram {
  aPos: number;
  aColor: number;
  aStar: number;
  pMvCamMatrix: WebGLUniformLocation;
  minSize: WebGLUniformLocation;
  maxSize: WebGLUniformLocation;
  vertShader: WebGLShader;
  fragShader: WebGLShader;
}

export interface PickingProgram extends WebGLProgram {
  aColor: number;
  aPos: number;
  aPickable: number;
  pMvCamMatrix: WebGLUniformLocation;
  vertShader: WebGLShader;
  fragShader: WebGLShader;
}

export interface DotsManager {
  inViewData: Int8Array;
  inSunData: Int8Array;
  colorBuffer: any;
  pickingBuffer: any;
  init(gl: WebGL2RenderingContext): void;
  createPickingProgram(gl: WebGL2RenderingContext): void;
  updatePositionBuffer(length: number, orbitalSats: number, timeManager: TimeManager): void;
  updatePMvCamMatrix(pMatrix: glm.mat4, mainCamera: Camera): void;
  draw(mainCamera: Camera, colorSchemeManager: ColorSchemeManager, curBuffer: WebGLBuffer): void;
  drawGpuPickingFrameBuffer(mainCamera: Camera, ColorSchemeManager: ColorSchemeManager): void;
  setupPickingBuffer(satDataLen: number): void;
  updateSizeBuffer(bufferLen: number): void;
  pickingDotSize: string;
  gl: WebGL2RenderingContext;
  emptyMat4: import('gl-matrix').mat4;
  positionBuffer: WebGLBuffer;
  sizeBuffer: WebGLBuffer;
  loaded: boolean;
  pMvCamMatrix: import('gl-matrix').mat4;
  drawProgram: DrawProgram;
  positionBufferOneTime: any;
  positionData: Float32Array;
  pickingProgram: PickingProgram;
  pickingColorBuffer: WebGLBuffer;
  drawShaderCode: { frag: string; vert: string };
  pickingShaderCode: { vert: string; frag: string };
  pickingTexture: WebGLTexture;
  pickingRenderBuffer: WebGLRenderbuffer;
  velocityData: Float32Array;
  drawDivisor: number;
  satDataLenInDraw: any;
  satDataLenInDraw3: number;
  orbitalSats3: number;
  drawI: number;
  sizeBufferOneTime: any;
  sizeData: Float32Array;
  starIndex1: number;
  starIndex2: number;
  pickingColorData: any[];
  pickReadPixelBuffer: any;
  pickingFrameBuffer: WebGLFramebuffer;
}

export interface SettingsManager {
  isDrawConstellationBoundaries: any;
  isDrawNasaConstellations: any;
  isDrawSun: any;
  isDrawInCoverageLines: boolean;
  isDrawOrbits: any;
  isEciOnHover: boolean;
  isDrawMilkyWay: boolean;
  isDragging: boolean;
  isOrbitCruncherInEcf: boolean;
  lastSearch: any;
  db: any;
  isGroupOverlayDisabled: any;
  nearZoomLevel: number;
  isPreventColorboxClose: boolean;
  isDayNightToggle: boolean;
  isUseHigherFOVonMobile: any;
  lostSatStr: string;
  maxOribtsDisplayed: any;
  isOrbitOverlayVisible: boolean;
  classificationStr: string;
  isShowSatNameNotOrbit: any;
  isShowNextPass: boolean;
  dotsOnScreen: number;
  isShowSurvFence: boolean;
  hiResWidth: number;
  hiResHeight: number;
  versionDate: string;
  versionNumber: string;
  geolocation: any;
  trusatMode: any;
  isExtraSatellitesAdded: any;
  altMsgNum: any;
  screenshotMode: any;
  lastBoxUpdateTime: number;
  altLoadMsgs: boolean;
  autoPanSpeed: { x: number; y: number };
  autoRotateSpeed: number;
  blueImages: boolean;
  breakTheLaw: boolean;
  camDistBuffer: number;
  cameraDecayFactor: number;
  cameraMovementSpeed: number;
  cameraMovementSpeedMin: number;
  colors: Colors;
  copyrightOveride: boolean;
  cruncherReady: boolean;
  currentColorScheme: ColorRuleSet;
  currentLegend: string;
  daysUntilObjectLost: number;
  demoModeInterval: number;
  desktopMaxLabels: number;
  desktopMinimumWidth: number;
  disableCameraControls: boolean;
  disableDefaultContextMenu: boolean;
  disableNormalEvents: boolean;
  disableUI: boolean;
  disableWindowScroll: boolean;
  disableWindowTouchMove: boolean;
  disableZoomControls: boolean;
  earthNumLatSegs: number;
  earthNumLonSegs: number;
  enableConstantSelectedSatRedraw: boolean;
  enableHoverOrbits: boolean;
  enableHoverOverlay: boolean;
  enableLimitedUI: boolean;
  fieldOfView: number;
  fieldOfViewMax: number;
  fieldOfViewMin: number;
  fitTleSteps: number;
  fpsForwardSpeed: number;
  fpsPitchRate: number;
  fpsRotateRate: number;
  fpsSideSpeed: number;
  fpsThrottle1: number;
  fpsThrottle2: number;
  fpsVertSpeed: number;
  fpsYawRate: number;
  geolocationUsed: boolean;
  gpsElevationMask: number;
  gpujsMode: string;
  hiresImages: boolean;
  hiresNoCloudsImages: boolean;
  hoverColor: [number, number, number, number];
  init(): void;
  installDirectory: string;
  isAlwaysHidePropRate: boolean;
  isAutoResizeCanvas: boolean;
  isBlackEarth: boolean;
  isBottomMenuOpen: boolean;
  isDemoModeOn: boolean;
  isDisableControlSites: boolean;
  isDisableLaunchSites: boolean;
  isDisableSensors: boolean;
  isDrawLess: boolean;
  isEditTime: boolean;
  isEnableConsole: boolean;
  isEnableGsCatalog: boolean;
  isEnableRadarData: boolean;
  isForceColorScheme: boolean;
  isFOVBubbleModeOn: boolean;
  isLoadLastMap: boolean;
  isMapUpdateOverride: boolean;
  isMobileModeEnabled: boolean;
  isOfficialWebsite: boolean;
  isOnlyFOVChecked: boolean;
  isPropRateChange: boolean;
  isResizing: boolean;
  isSatLabelModeOn: boolean;
  isSatOverflyModeOn: boolean;
  isShowLogo: boolean;
  isUseDebrisCatalog: boolean;
  isZoomStopsRotation: boolean;
  isZoomStopsSnappedOnSat: boolean;
  lastMapUpdateTime: number;
  lastSearchResults: any[];
  legendMenuOpen: boolean;
  limitSats: string;
  lineScanMinEl: number;
  lineScanSpeedRadar: number;
  lineScanSpeedSat: number;
  lkVerify: number;
  lowPerf: boolean;
  lowresImages: boolean;
  mapHeight: number;
  mapWidth: number;
  maxAnalystSats: number;
  maxFieldOfViewMarkers: number;
  maxLabels: number;
  maxMissiles: number;
  maxOrbitsDisplayedMobile: number;
  maxOribtsDisplayedDesktop: number;
  maxRadarData: number;
  maxZoomDistance: number;
  meshOverride: any;
  meshRotation: { x: number; y: number; z: number };
  minimumDrawDt: number;
  minimumSearchCharacters: number;
  minZoomDistance: number;
  mobileMaxLabels: number;
  modelsOnSatelliteViewOverride: boolean;
  nameOfSpecialSats: string;
  nasaImages: boolean;
  nextNPassesCount: number;
  noMeshManager: boolean;
  noStars: boolean;
  offline: boolean;
  offsetCameraModeX: number;
  offsetCameraModeZ: number;
  orbitFadeFactor: number;
  orbitGroupColor: [number, number, number, number];
  orbitHoverColor: [number, number, number, number];
  orbitInViewColor: [number, number, number, number];
  orbitPlanetariumColor: [number, number, number, number];
  orbitSelectColor: [number, number, number, number];
  orbitSelectColor2: [number, number, number, number];
  plugins: any;
  politicalImages: boolean;
  pTime: any[];
  queuedScreenshot: boolean;
  reColorMinimumTime: number;
  retro: boolean;
  satLabelInterval: number;
  satShader: SatShader;
  searchLimit: number;
  selectedColor: [number, number, number, number];
  setCurrentColorScheme: (val: any) => void;
  showOrbitThroughEarth: boolean;
  smallImages: boolean;
  startWithFocus: boolean;
  startWithOrbitsDisplayed: boolean;
  timeMachineDelay: number;
  tleSource: string;
  trusatImages: boolean;
  unofficial: boolean;
  updateHoverDelayLimitBig: number;
  updateHoverDelayLimitSmall: number;
  vectorImages: boolean;
  vertShadersSize: number;
  videoBitsPerSecond: number;
  zFar: number;
  zNear: number;
  zoomSpeed: number;
}

export type RocketUrl = {
  rocket: string;
  url: string;
};

export interface ObjectManager {
  secondarySatObj: SatObject;
  secondarySat: number;
  switchPrimarySecondary: () => void;
  init: () => void;
  rocketUrls: RocketUrl[];
  satLinkManager: any;
  extractLiftVehicle(LV: string): any;
  setSelectedSat(arg0: number);
  selectedSatData(sat: any, selectedSatData: any);
  isLaunchSiteManagerLoaded: any;
  launchSiteManager: any;
  setHoveringSat(i: number): void;
  setSecondarySat(i: number): void;
  setLasthoveringSat(hoveringSat: number): void;
  lastSelectedSat(id?: number): number;
  extractLaunchSite(name: string): {
    site: string;
    sitec: string;
  };
  lasthoveringSat: number;
  extractCountry(C: string): string;
  fieldOfViewSet: any;
  starIndex1: number;
  starIndex2: number;
  staticSet: any;
  analSatSet: SatObject[];
  radarDataSet: any;
  missileSet: any;
  isStarManagerLoaded: any;
  hoveringSat: any;
  selectedSat: number;
  isSensorManagerLoaded: boolean;
  _lastSelectedSat: number;
}

export interface SensorManager {
  isLookanglesMenuOpen: any;
  isCustomSensorMenuOpen: any;
  sensorTitle: string;
  whichRadar: string;
  drawFov: (val: SensorObject) => void;
  setCurrentSensor: (val: SensorObject[] | null) => void;
  curSensorPositon: [number, number, number];
  currentSensorList: any;
  currentSensorMultiSensor: boolean;
  tempSensor: SensorObject[];
  sensorListUS: any;
  sensorListLength: () => number;
  setSensor(sensor: any, id?: number): void;
  selectedSensor: any;
  sensorList: { [key: string]: SensorObject };
  currentSensor: SensorObject[];
  defaultSensor: SensorObject[];
  checkSensorSelected(): boolean;
}

export interface LaunchInfoObject {
  name: string;
  updated: Date;
  windowStart: Date;
  windowEnd: Date;
  location: string;
  locationURL: string;
  agency: string;
  agencyURL: string;
  country: string;
  mission: string;
  missionName: string;
  missionType: string;
  missionURL: string;
  rocket: string;
  rocketConfig: string;
  rocketFamily: string;
  rocketURL: string;
}

export interface MediaRecorderOptions {
  video: {
    cursor: string;
  };
  audio: boolean;
}

export type LineTypes = 'sat' | 'sat2' | 'sat3' | 'sat4' | 'sat5' | 'sat6' | 'scan' | 'scan2' | 'misl' | 'ref' | 'ref2';
export type LineColors = 'r' | 'o' | 'y' | 'g' | 'b' | 'c' | 'p' | 'w' | [number, number, number, number];

export interface AdviceList {
  welcome: any;
  useLegend: any;
  showSensors: any;
  findIss: any;
  missileMenu: any;
  toggleNight: any;
  colorScheme: any;
  customSensors: any;
  countries: any;
  breakupDisabled?: () => void;
  bubbleDisabled?: () => void;
  cspocSensors?: () => void;
  editSatDisabled?: () => void;
  lookanglesDisabled?: () => void;
  mapDisabled?: () => void;
  mwSensors?: () => void;
  planetariumDisabled?: () => void;
  satelliteSelected?: () => void;
  satFovDisabled?: () => void;
  satViewDisabled?: () => void;
  sensor?: () => void;
  sensorInfoDisabled?: () => void;
  ssnLookanglesDisabled?: () => void;
  survFenceDisabled?: () => void;
}
export interface AdviceCounter {
  welcome: any;
  findIss: any;
  showSensors: any;
  useLegend: any;
  toggleNight: any;
  missileMenu: any;
  satelliteView: any;
  newLaunch?: any;
  breakup: any;
  editSat: any;
  colorScheme: any;
  countries: any;
  cspocSensors: any;
  mwSensors: any;
  customSensors: any;
  planetariumDisabled: any;
  satViewDisabled: any;
  mapDisabled: any;
  lookanglesDisabled: any;
  ssnLookanglesDisabled: any;
  survFenceDisabled: any;
  bubbleDisabled: any;
  sensorInfoDisabled: any;
  editSatDisabled: any;
  breakupDisabled: any;
  satFovDisabled: any;
  sensorFOV: any;
  sensorSurv: any;
}

export interface UiInputInterface {
  isMouseMoving: boolean;
  isStartedOnCanvas: boolean;
  isAsyncWorking: boolean;
  unProject: any;
  clientWaitAsync: any;
  getBufferSubDataAsync: any;
  readPixelsAsync: any;
  init: any;
  canvasWheel: any;
  canvasClick: any;
  canvasMouseDown: any;
  canvasTouchStart: any;
  canvasMouseUp: any;
  mouseMoveTimeout: any;
  getEarthScreenPoint: any;
  mouseSat: any;
  getSatIdFromCoord: any;
  getSatIdFromCoordAlt: any;
  openRmbMenu: any;
  rmbMenuActions: any;
  canvasMouseMove: any;
  canvasTouchMove: any;
  canvasTouchEnd: any;
}

export interface Camera {
  startMouseY: number;
  startMouseX: number;
  isCtrlPressed: boolean;
  fpsPitch: number;
  fpsYaw: number;
  fpsRotate: number;
  fpsPos: glm.vec3;
  camMatrix: glm.mat4;
  camAngleSnappedOnSat: boolean;
  camZoomSnappedOnSat: boolean;
  isScreenPan: boolean;
  isWorldPan: boolean;
  isPanReset: boolean;
  isLocalRotateRoll: boolean;
  isLocalRotateYaw: boolean;
  isLocalRotateOverride: boolean;
  ftsRotateReset: boolean;
  isRayCastingEarth: boolean;
  cameraType: {
    current: CameraType;
    Default: number;
    FixedToSat: number;
    Offset: number;
    Fps: number;
    Astronomy: number;
    Planetarium: number;
    Satellite: number;
    set: any;
  };
  fpsLastTime: number;
  isFPSForwardSpeedLock: boolean;
  fpsForwardSpeed: number;
  isFPSSideSpeedLock: boolean;
  fpsSideSpeed: number;
  isFPSVertSpeedLock: boolean;
  fpsVertSpeed: number;
  fpsRun: number;
  fpsPitchRate: number;
  fpsYawRate: number;
  fpsRotateRate: number;
  _zoomLevel: number;
  isAutoRotate: boolean;
  isAutoPan: boolean;
  _zoomTarget: number;
  isLocalRotateReset: boolean;
  camPitchTarget: number;
  camYawTarget: number;
  ecPitch: number;
  ecYaw: number;
  isCamSnapMode: boolean;
  camSnapToSat: any;
  ecLastZoom: number;
  camPitch: number;
  camYaw: number;
  isShiftPressed: boolean;
  speedModifier: number;
  camPitchSpeed: number;
  camYawSpeed: number;
  panDif: any;
  screenDragPoint: any;
  mouseX: number;
  mouseY: number;
  panTarget: any;
  panStartPosition: any;
  panMovementSpeed: number;
  panCurrent: any;
  panSpeed: any;
  localRotateCurrent: any;
  localRotateTarget: any;
  localRotateSpeed: any;
  localRotateStartPosition: any;
  localRotateMovementSpeed: number;
  localRotateDif: any;
  isDragging: boolean;
  dragStartYaw: number;
  dragStartPitch: number;
  ftsPitch: number;
  camRotateSpeed: number;
  chaseSpeed: number;
  yawErr: number;
  isZoomIn: boolean;
  ftsYaw: number;
  camMatrixEmpty: glm.mat4;
  alt2zoom: any;
  autoPan: any;
  autoRotate: any;
  calculate: any;
  camSnap: any;
  changeCameraType: any;
  changeZoom: any;
  earthHitTest: any;
  fpsMovement: any;
  fts2default: any;
  getCamDist: any;
  getCamPos: any;
  getDistFromEarth: any;
  getForwardVector: any;
  keyDownHandler: any;
  keyUpHandler: any;
  lat2pitch: any;
  lookAtLatLon: (lat: number, long: number, zoom?: ZoomValue | number, date?: Date) => void;
  lookAtObject: (sat: SatObject, isFaceEarth: boolean) => void;
  lon2yaw: (long: number, selectedDate: Date) => number;
  normalizeAngle: any;
  resetFpsPos: any;
  snapToSat: any;
  update: any;
  zoomLevel: any;
  zoomTarget: any;
}

export interface SatCruncherMessage {
  data: {
    typ?: string;
    time?: number;
    propRate?: number;
    staticOffset?: number;
    dynamicOffsetEpoch?: number;
    satId?: number;
    extraData?: string; // JSON string
    extraUpdate?: boolean;
    satPos: number[];
    satVel: number[];
    satInView?: number[];
    satInSun?: number[];
    sensorMarkerArray?: number[];
  };
}

export interface TimeManager {
  propOffset: number;
  propRate: number;
  dynamicOffsetEpoch: number;
  staticOffset: number;
  dateObject: Date;
  simulationTimeObj: any;
  datetimeInputDOM: any;
  timeTextStr: string;
  timeTextStrEmpty: string;
  propFrozen: number;
  realTime: any;
  dt: number;
  drawDt: number;
  calculateSimulationTime: (newSimulationTime?: Date) => Date;
  getOffsetTimeObj: (offset: number, timeObj: Date) => Date;
  setNow: (now: any, dt: number) => void;
  setLastTime(simulationTimeObj: Date): void;
  setSelectedDate(simulationTimeObj: Date): void;
  lastTime: Date;
  selectedDate: any;
  tDS: any;
  iText: number;
  propRate0: any;
  dateDOM: any;
  getDayOfYear(arg0: Date): number;
  getPropOffset: () => number;
  changePropRate: any;
  changeStaticOffset: any;
  synchronize: any;
  init: any;
}
export declare interface SatObject {
  pname?: string;
  bf?: string;
  active: boolean;
  apogee: number;
  argPe: number;
  associates?: any;
  az: number;
  bus?: string;
  configuration?: string;
  constellation?: any;
  country?: string;
  dec: any;
  desc?: string;
  diameter?: string;
  dryMass?: string;
  eccentricity: number;
  el: number;
  equipment?: string;
  FMISSED?: any;
  getAltitude?: any;
  getDirection?: any;
  getTEARR?: (
    propTime?: Date,
    sensors?: SensorObject[]
  ) => {
    lat: number;
    lon: number;
    alt: number;
    inView: boolean;
    rng?: number;
    az?: number;
    el?: number;
  };
  id: number;
  inclination: number;
  inSun?: any;
  inSunChange: boolean;
  intlDes?: string;
  inView: number;
  inViewChange: boolean;
  isInGroup?: boolean;
  isInSun?: any;
  isRadarData?: boolean;
  launchDate?: string;
  launchMass?: string;
  launchSite?: string;
  launchVehicle?: string;
  length?: string;
  lifetime?: string | number;
  lon: number;
  maneuver?: any;
  manufacturer?: string;
  marker?: boolean;
  meanMotion: number;
  missile?: boolean;
  missileComplex?: number;
  mission?: string;
  motor?: string;
  name?: string;
  NOTES?: any;
  ORPO?: any;
  owner?: string;
  payload?: string;
  perigee: number;
  period: number;
  power?: string;
  purpose?: string;
  ra: number;
  raan: number;
  rae: any;
  rcs?: string;
  satrec: any;
  sccNum?: string;
  semiMajorAxis: any;
  semiMinorAxis: any;
  setRAE: any;
  shape?: string;
  span?: string;
  static?: boolean;
  staticNum: any;
  status?: string;
  TLE1: string;
  TLE2: string;
  TTP?: any;
  type: SpaceObjectType;
  user?: string;
  vmag?: number;

  position: { x: number; y: number; z: number };
  velocity: {
    total: number;
    x: number;
    y: number;
    z: number;
  };
}

export interface MissileObject extends SatObject {
  latList: number[];
  lonList: number[];
  altList: number[];
  startTime: number;
  maxAlt: number;
}

export interface RadarDataObject extends SatObject {
  isRadarData: boolean;
  missileComplex: number;
}

export interface SensorObject {
  static?: boolean;
  linkIridium?: any;
  linkGalileo?: any;
  linkStarlink?: any;
  obsmaxel2?: any;
  obsmaxrange2?: any;
  obsminrange2?: any;
  obsminel2?: any;
  obsmaxaz2?: any;
  obsminaz2?: any;
  alt: number;
  beamwidth?: number;
  changeObjectInterval?: number;
  country: string;
  lat: number;
  linkAehf?: boolean;
  linkWgs?: boolean;
  lon: number;
  name: string;
  observerGd?: {
    lat: number;
    lon: number;
    alt: number;
  };
  obsmaxaz: number;
  obsmaxel: number;
  obsmaxrange: number;
  obsminaz: number;
  obsminel: number;
  obsminrange: number;
  shortName: string;
  staticNum?: number;
  sun: string;
  type?: SpaceObjectType;
  url?: string;
  volume: boolean;
  zoom: ZoomValue;
}

export interface SensorObjectCruncher {
  obsmaxel2?: any;
  obsmaxrange2?: any;
  obsminrange2?: any;
  obsminel2?: any;
  obsmaxaz2?: any;
  obsminaz2?: any;
  alt: number;
  beamwidth?: number;
  changeObjectInterval?: number;
  country: string;
  lat: number;
  linkAehf?: boolean;
  linkWgs?: boolean;
  lon: number;
  name: string;
  observerGd: {
    latitude: number;
    longitude: number;
    height: number;
  };
  obsmaxaz: number;
  obsmaxel: number;
  obsmaxrange: number;
  obsminaz: number;
  obsminel: number;
  obsminrange: number;
  shortName: string;
  staticNum: number;
  sun: string;
  type?: SpaceObjectType;
  url?: string;
  volume: boolean;
  zoom: string;
}
export interface Lla {
  lat: number;
  lon: number;
  alt: number;
}

export interface Rae {
  rng: number;
  az: number;
  el: number;
}

export interface InView {
  inView: boolean;
}

export interface EarthObject {
  init: (gl: WebGL2RenderingContext) => Promise<void>;
  draw: any;
  program: any;
  update: any;
  drawOcclusion: any;
  earthJ: number;
  earthEra: number;
  pos: [number, number, number];
  loaded: boolean;
  sunvar: any;
  shader: any;
  specularMap: any;
  imgHiRes: any;
  isHiResReady: boolean;
  nightImgHiRes: any;
  nightImg: any;
  bumpMap: any;
  loadHiResNight: any;
  loadHiRes: any;
  isUseHiRes: boolean;
  lightDirection: [number, number, number];
}

export interface CatalogManager {
  resetSatInView(): void;
  convertIdArrayToSatnumArray(aehf: any): any;
  init(): Promise<number>;
  gotExtraData: boolean;
  convertSatnumArrayToIdArray: any;
  exportTle2Csv: any;
  exportTle2Txt: any;
  getIdFromEci: (eci: any) => number;
  getSatInSun(): Int8Array;
  getSatInView(): Int8Array;
  getSatInViewOnly: (i: number) => any;
  getSatVel(): Float32Array;
  mergeSat: any;
  resetSatInSun: any;
  satExtraData: any;
  selectSat: (i: number) => any;
  onCruncherReady(): void;
  gsInfo: any;
  queryStr: any;
  getIdFromIntlDes(intlDes: string): number;
  insertNewAnalystSatellite(TLE1: string, TLE2: string, id: number, sccNum?: string);
  setSat(x: number, arg1: any);
  getSatFromObjNum(objNum: number): SatObject;
  getIdFromStarName(pname: string): number;
  satSensorMarkerArray: any;
  setColorScheme: (currentColorScheme: ColorRuleSet, force?: boolean) => void;
  sunECI: { x: number; y: number; z: number };
  getSensorFromSensorName(name: any): number;
  getSatPosOnly(i: number): any;
  getScreenCoords: any;
  setHover(mouseSat: any);
  getSatExtraOnly: (satId: any) => SatObject;
  satData: SatObject[];
  numSats: any;
  satCruncher: any;
  getSat: (id: number) => SatObject;
  getIdFromObjNum(objNum: number, isExtensiveSearch?: boolean): number;
  sccIndex: { [key: string]: number };
  cosparIndex: { [key: string]: number };
  orbitalSats: number;
  missileSats: number;
  search: CatalogSearches;
}

export interface CatalogSearches {
  year(satData: SatObject[], yr: number): SatObject[];
  yearOrLess(satData: SatObject[], yr: number): SatObject[];
  name(satData: SatObject[], regex: RegExp): SatObject[];
  shape(satData: SatObject[], text: string): SatObject[];
  bus(satData: SatObject[], text: string): SatObject[];
  type(satData: SatObject[], type: SpaceObjectType): SatObject[];
}

export type Kilometers = number;
export type Radians = number;
export type Degrees = number;
export type EciPos = { x: Kilometers; y: Kilometers; z: Kilometers };
export type EciVel = { x: Kilometers; y: Kilometers; z: Kilometers };
export type Eci = { position: EciPos; velocity: EciVel };

export type lookanglesRow = {
  sortTime: number;
  scc: string;
  score: number;
  startDate: Date;
  startTime: Date;
  startAz: string;
  startEl: string;
  startrng: string;
  stopDate: Date;
  stopTime: Date;
  stopAz: string;
  stopEl: string;
  stoprng: string;
  tic: number;
  minrng: string;
  passMaxEl: string;
};

export interface SatMath {
  getAngleBetweenTwoSatellites(sat1: SatObject, sat2: SatObject): { az: number; el: number };
  getLlaOfCurrentOrbit(sat: SatObject, points: number): { lat: number; lon: number; alt: number; time: number }[];
  getRicOfCurrentOrbit(sat: SatObject, sat2: SatObject, points: number, orbits?: number);
  getEcfOfCurrentOrbit(sat: SatObject, points: number);
  getEciOfCurrentOrbit(sat: SatObject, points: number): { x: number; y: number; z: number }[];
  altitudeCheck(iTLE1: string, iTLE2: any, arg2: any);
  calculateDops: (satList: { az: number; el: number }[]) => { pdop: string; hdop: string; gdop: string; vdop: string; tdop: string };
  calculateLookAngles: (sat: SatObject, sensors: SensorObject[]) => boolean[];
  calculateSensorPos: (sensor?: SensorObject[]) => { x: number; y: number; z: number; lat: number; lon: number; gmst: number };
  calculateVisMag: (sat: SatObject, sensor: SensorObject, propTime: Date, sun: SunObject) => number;
  checkIsInView(sensor: SensorObject, aer: any): boolean;
  createTle: (tleParams: TleParams) => { TLE1: string; TLE2: string };
  currentEpoch(arg0: any);
  currentTEARR: TearrData;
  degreesLat(lat: Radians): Degrees;
  degreesLong(lon: Radians): Degrees;
  distance: (hoverSat: SatObject, selectedSat: SatObject) => string;
  ecfToEci: (ecf: { x: number; y: number; z: number }, gmst: number) => { x: number; y: number; z: number };
  ecfToLookAngles(observerGd: { lat: number; lon: number; alt: number }, positionEcf: any);
  eci2ll: (x: number, y: number, z: number) => { lat: number; lon: number; alt: number };
  eci2Rae: (now: Date, eci: EciArr3, sensor: SensorObject) => { az: number; el: number; rng: any };
  eciToEcf(position: any, gmst: any);
  eciToGeodetic(position: EciPos, gmst: number): { lat: Radians; lon: Radians; alt: Kilometers };
  findBestPass(sat: SatObject, sensors: SensorObject[]): lookanglesRow[];
  findBestPasses: (sats: string, sensor: SensorObject) => void;
  findCloseObjects: () => string;
  findReentries: () => string;
  findClosestApproachTime: (
    sat1: SatObject,
    sat2: SatObject,
    propLength: number
  ) => {
    offset: number;
    dist: number;
    ric: { position: [number, number, number]; velocity: [number, number, number] };
  };
  findNearbyObjectsByOrbit: (sat: SatObject) => any[];
  geodeticToEcf(geodeticCoords: any);
  getDops(lat: number, lon: number, alt?: number, now?: any);
  getEci(sat1: SatObject, now: any);
  getlookangles: (sat: SatObject) => TearrData[];
  getlookanglesMultiSite: (sat: SatObject) => void;
  getOrbitByLatLon(at: SatObject, goalLat: number, goalLon: number, upOrDown: string, now: Date, goalAlt?: number, rascOffset?: number): [string, string];
  getRae(now: Date, satrec: SatRec, sensor: SensorObject);
  getSunTimes: (sat: SatObject, sensors?: SensorObject[], searchLength?: number, interval?: number) => void;
  getTearData: any;
  populateMultiSiteTable: (multiSiteArray: TearrData[], sat: SatObject) => void;
  getTEARR: (sat?: SatObject, sensors?: SensorObject[], propTime?: Date) => any;
  gstime(j: number);
  isRiseSetLookangles: any;
  lastlooksArray: TearrData[];
  lastMultiSiteArray: TearrData[];
  lookAngles2Ecf: (az: number, el: number, rng: number, lat: number, lon: number, alt: number) => { x: number; y: number; z: number };
  lookanglesInterval: number;
  lookanglesLength: number;
  map: (sat: SatObject, i: number, pointPerOrbit?: number) => { time: string; lat: number; lon: number; inView: boolean };
  nextNpasses: (sat: SatObject, sensors: SensorObject[], searchLength: number, interval: number, numPasses: number) => any[];
  nextpass: (sat: SatObject, sensors?: SensorObject[], searchLength?: number, interval?: number) => any;
  nextpassList: (satArray: SatObject[]) => { sccNum: string; time: any }[];
  obsmaxrange: number;
  obsminrange: number;
  sat2ric: (sat: SatObject, reference: SatObject) => { position: glm.vec3; velocity: glm.vec3 };
  setobs(sensors: SensorObject[]);
  setTEARR: (currentTEARR: any) => void;
  sgp4(satrec: SatRec, m: number): Eci;
  twoline2satrec(TLE1: string, TLE2: string);
  updateDopsTable: (lat: number, lon: number, alt: number) => void;
}

export interface Watchlist {
  lastOverlayUpdateTime: number;
  updateWatchlist: (updateWatchlistList?: any[], updateWatchlistInViewList?: any) => void;
}

export interface SearchBox {
  isResultBoxOpen;
  getLastResultGroup;
  getCurrentSearch: () => string | null;
  isHovering;
  setHoverSat;
  getHoverSat;
  hideResults;
  doArraySearch;
  doSearch: (searchString: string, isPreventDropDown?: boolean) => number[];
  fillResultBox;
}
export interface SoundManager {
  play(arg0: string);
  loadVoices(): void;
  voices: any[];
  speak(arg0: string): void;
  sounds: any;
}
export interface StarManager {
  isConstellationVisible: boolean;
  findStarsConstellation(name: any);
  drawConstellations(constellationName: any);
  drawAllConstellations();
  clearConstellations: any;
  isAllConstellationVisible: boolean;
}

export interface MissileManager {
  getMissileTEARR(sat: any): any;
}

export interface SatChngObject {
  SCC: number;
  inc: number;
  meanmo: number;
  date: Date;
}

export interface SatChangePlugin {
  satChngTable: SatChngObject[];
}

export interface PhotoManager {}

export interface MapManager {
  options: any;
  isMapMenuOpen: any;
  braun(arg0: { lon: any; lat: any }, arg1: { meridian: number; latLimit: number }): any;
  updateMap();
  satCrunchNow: number;
}

export interface SensorFovPlugin {
  enableFovView: any;
}
export interface AdviceManager {
  adviceCount: any;
  showAdvice(header: string, text: string, focusDOM: HTMLElement, setLocation: string);
  adviceArray: any;
  adviceList: any;
}

export interface GamepadPlugin {
  settings: any;
  index: number;
  currentState: any;
  getController: any;
  vibrate: any;
}

export interface DrawManager {
  dotsManager: any;
  init: any;
  glInit: any;
  createDotsManager: any;
  loadScene: any;
  loadHiRes: any;
  resizeCanvas: any;
  calculatePMatrix: any;
  startWithOrbits: any;
  drawLoop: any;
  updateLoop: any;
  demoMode: any;
  hoverBoxOnSat: any;
  drawOptionalScenery: any;
  onDrawLoopComplete: any;
  updateHover: any;
  isDrawOrbitsAbove: boolean;
  orbitsAbove: any;
  screenShot: any;
  satCalculate: any;
  watermarkedDataUrl: any;
  resizePostProcessingTexture: any;
  clearFrameBuffers: any;
  selectSatManager: any;
  i: number;
  updateHoverI: number;
  demoModeSatellite: number;
  demoModeLastTime: number;
  demoModeLast: number;
  dt: number;
  t0: number;
  isShowFPS: boolean;
  drawLoopCallback: any;
  gaussianAmt: number;
  setDrawLoopCallback: any;
  sat: SatObject;
  canvas: HTMLCanvasElement;
  sceneManager: any;
  gl: WebGL2RenderingContext;
  isNeedPostProcessing: boolean;
  isRotationEvent: boolean;
  pMatrix: glm.mat4;
  postProcessingManager: any;
  isPostProcessingResizeNeeded: boolean;
  isUpdateTimeThrottle: boolean;
  sensorPos: any;
  lastSelectedSat: number;
  isHoverBoxVisible: boolean;
  isShowDistance: boolean;
  sat2: SatObject;
}

export interface SocratesPlugin {
  socratesObjOne: any;
  socratesObjTwo: any;
}
export interface KeepTrackPrograms {
  satCruncher: any; // depricated
  adviceManager: AdviceManager;
  earth: EarthObject;
  satellite: SatMath;
  mainCamera: Camera;
  orbitManager: OrbitManager;
  sensorManager: SensorManager;
  uiManager: UiManager;
  drawManager: DrawManager;
  // starManager: StarManager;
  astronomy: any;
  planetarium: any;
  objectManager: ObjectManager;
  lineManager: LineFactory;
  dotsManager: DotsManager;
  groupsManager: GroupsManager;
  satSet: CatalogManager;
  timeManager: TimeManager;
  colorSchemeManager: ColorSchemeManager;
  watchlist: Watchlist;
  searchBox: SearchBox;
  soundManager: SoundManager;
  starManager: StarManager;
  missileManager: MissileManager;
  photoManager: PhotoManager;
  satChange: SatChangePlugin;
  sensorFov: SensorFovPlugin;
  mapManager: MapManager;
  gamepad: GamepadPlugin;
  socrates: SocratesPlugin;
}

export interface KeepTrackApi {
  html: (strings: TemplateStringsArray, ...placeholders: any[]) => string;
  register: (params: { method: string; cbName: string; cb: any }) => void;
  unregister: (params: { method: string; cbName: string }) => void;
  callbacks: any;
  methods: any;
  programs: KeepTrackPrograms;
}
