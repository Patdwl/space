"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[719],{6880:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(8081),s=a.n(i),n=a(3645),o=a.n(n)()(s());o.push([e.id,".plot-analysis-menu-maximized {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.plot-analysis-menu-normal {\n  width: 650px;\n}\n\n.plot-analysis-chart {\n  width: 100%;\n  height: 90%;\n  padding: 10px;\n  margin: 0;\n}\n",""]);const l=o},7182:(e,t,a)=>{a.r(t),a.d(t,{CanvasRecorder:()=>ss,analysis:()=>i,catalogLoader:()=>Na,initialOrbit:()=>s,loadCorePlugins:()=>qs,missile:()=>n,omManager:()=>fe,plotAnalysis:()=>o,startGoogleAnalytics:()=>en,uiManagerFinal:()=>Qs});var i={};a.r(i),a.d(i,{analysisBptSumbit:()=>W,analysisFormSubmit:()=>j,findBestPass:()=>X,findBestPasses:()=>Z,findCloseObjects:()=>J,findCsoBtnClick:()=>Y,findRaBtnClick:()=>K,init:()=>B,onHelpMenuClick:()=>z,uiManagerFinal:()=>H,uiManagerInit:()=>$});var s={};a.r(s),a.d(s,{bottomMenuClick:()=>we,hideSideMenus:()=>Ae,init:()=>ye,obfitFormSubmit:()=>xe,onHelpMenuClick:()=>Me,uiManagerFinal:()=>Ce,uiManagerInit:()=>Te});var n={};a.r(n),a.d(n,{bottomMenuClick:()=>Ue,hideSideMenus:()=>Fe,init:()=>Ve,missileChange:()=>_e,missileSubmit:()=>$e,msAttackerChange:()=>Ke,msErrorClick:()=>Be,msTargetChange:()=>ze,onHelpMenuClick:()=>Je,searchForRvs:()=>je,uiManagerFinal:()=>Ye,uiManagerInit:()=>He,updateLoop:()=>Oe});var o={};a.r(o),a.d(o,{bottomMenuClick:()=>Xt,curChart:()=>Rt,curChart2:()=>Ot,curChart3:()=>Ft,curChart4:()=>Ut,curChart5:()=>_t,curChart6:()=>Bt,hideSideMenus:()=>ia,init:()=>Jt,isPlotAnalyisMenuOpen:()=>zt,isPlotAnalyisMenuOpen2:()=>$t,isPlotAnalyisMenuOpen3:()=>Ht,isPlotAnalyisMenuOpen4:()=>jt,isPlotAnalyisMenuOpen5:()=>Yt,isPlotAnalyisMenuOpen6:()=>Vt,onEcfPlotBtnClick:()=>qt,onEciPlotBtnClick:()=>Zt,onHelpMenuClick:()=>Kt,onInc2AltPlotBtnClick:()=>ta,onInc2LonPlotBtnClick:()=>ea,onRicPlotBtnClick:()=>Qt,onTime2LonPlotBtnClick:()=>aa,selectSatData:()=>sa,uiManagerInit:()=>Wt});var l=a(8461),r=a(2349),c=a(9640),d=a(3092),p=a(5460),u=a(7644),g=a(7997),m=a(5179),h=a(2171),b=a(1874),v=a(6382),f=a(6279),k=a(3162),S=a(7047);class y{static exportTle2Csv(e,t=!0){try{const a=[],i=e.filter((e=>e.sccNum&&void 0!==e.TLE1&&void 0!==e.TLE2));if(0==i.length)return void S.x.info("No TLE data to export");i.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(let e=0;e<i.length;e++){const s=i[e];void 0!==s.TLE1&&void 0!==s.TLE2&&(t&&"ANALSAT"==s.country||a.push({satId:s.sccNum,name:s.name,TLE1:s.TLE1,TLE2:s.TLE2,inclination:s.inclination*b.I3,eccentricity:s.eccentricity,period:s.period,raan:s.raan*b.I3,apogee:s.apogee,perigee:s.perigee,country:s.country,site:s.launchSite,rocket:s.launchVehicle,rcs:s.rcs,visualMagnitude:s.vmag,user:s.user,mission:s.mission,purpose:s.purpose,contractor:s.manufacturer,dryMass:s.dryMass,liftMass:s.launchMass,lifeExpected:s.lifetime,power:s.power}))}(0,f.Eb)(a,"catalogInfo")}catch(e){}}static exportTle2Txt(e,t=2,a=!0){try{const i=[],s=e.filter((e=>e.sccNum&&void 0!==e.TLE1&&void 0!==e.TLE2));if(0==s.length)return void S.x.info("No TLE data to export");s.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(let e=0;e<s.length;e++){const n=s[e];void 0!==n.TLE1&&void 0!==n.TLE2&&(a&&"ANALSAT"==n.country||(3==t&&i.push(n.name),n.TLE1.includes("NO TLE")&&console.log(n.sccNum),n.TLE2.includes("NO TLE")&&console.log(n.sccNum),i.push(n.TLE1),i.push(n.TLE2)))}const n=i.join("\n"),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,k.saveAs)(o,"TLE.txt")}catch(e){}}}var M=a(3235);const A=a.p+"../img/analysis.png",T=c.keepTrackApi.html`
        <div id="menu-analysis" class="bmenu-item">
          <img
            alt="analysis"
            src=""
            delayedsrc="${A}"
          />
          <span class="bmenu-title">Analysis</span>
          <div class="status-icon"></div>
        </div>
      `,C=c.keepTrackApi.html`
<h5 class="center-align">Best Pass Times</h5>
<div class="divider"></div>
<div class="row"></div>
<div class="row">
  <form id="analysis-bpt">
    <div class="row">
      <div class="input-field col s12">
        <input value="25544,00005" id="analysis-bpt-sats" type="text" />
        <label for="analysis-bpt-sats" class="active">Satellite Numbers</label>
      </div>
    </div>
    <div class="row">
      <center>
        <button id="analysis-bpt-submit" class="btn btn-ui waves-effect waves-light" type="submit"
          name="action">Generate Best Pass Times &#9658;</button>
      </center>
    </div>
  </form>
</div>`,w=c.keepTrackApi.html`
  <optgroup label="Orbital Parameters">
    <option value='inc'>Inclination</option>
    <option value='ap'>Apogee</option>
    <option value='pe'>Perigee</option>
    <option value='per'>Period</option>
    <option value='e'>Eccentricity</option>
    <option value='ra'>RAAN</option>
    <option value='all'>All</option>
  </optgroup>`,x=c.keepTrackApi.html`
  <optgroup id="anal-look-opt" label="Look Angles">
    <option value='az'>Azimuth</option>
    <option value='el'>Elevation</option>
    <option value='rng'>Range</option>
    <option value='rae'>All</option>
  </optgroup>`,L=c.keepTrackApi.html`
  <form id="analysis-form">
    <div class="row">
      <div class="input-field col s12">
        <input value="25544" id="anal-sat" type="text" />
        <label for="anal-sat" class="active">Satellite Number</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <select value="0" id="anal-type" type="text">
          ${w}
          ${x}
        </select>
        <label for="disabled">Chart Type</label>
      </div>
    </div>
    <div class="row">
      <center>
        <button id="analysis-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">
          View Trends &#9658;
        </button>
      </center>
    </div>
  </form>`,E=c.keepTrackApi.html`
  <h5 class="center-align">Analysis Menu</h5>
  <div class="divider"></div>
  <div class="row"></div>`,I=c.keepTrackApi.html`
  <div class="row">
    <center>
      <button id="export-catalog-txt-2a" class="btn btn-ui waves-effect waves-light">
        Export Official TLEs &#9658;
      </button>
    </center>
  </div>`,N=c.keepTrackApi.html`
<div class="row">
  <center>
    <button id="export-catalog-txt-3a" class="btn btn-ui waves-effect waves-light">
      Export Official 3LEs &#9658;
    </button>
  </center>
</div>`,G=c.keepTrackApi.html`
  <div class="row">
    <center>
      <button id="export-catalog-txt-2b" class="btn btn-ui waves-effect waves-light">
        Export KeepTrack TLEs &#9658;
      </button>
    </center>
  </div>`,P=c.keepTrackApi.html`
<div class="row">
  <center>
  <button id="export-catalog-txt-3b" class="btn btn-ui waves-effect waves-light">
      Export KeepTrack 3LEs &#9658;
    </button>
  </center>
</div>`,D=c.keepTrackApi.html`
  <div class="row">
    <center>
      <button id="findReentries" class="btn btn-ui waves-effect waves-light">
      Find Reentries &#9658;
      </button>
    </center>
  </div>`,R=c.keepTrackApi.html`
  <div class="row">
    <center>
      <button id="export-catalog-csv-btn" class="btn btn-ui waves-effect waves-light">
        Export Catalog CSV &#9658;
    </button>
    </center>
  </div>`,O=c.keepTrackApi.html`
  <div class="row">
    <center>
      <button id="findCsoBtn" class="btn btn-ui waves-effect waves-light">Find Close Objects &#9658;</button>
    </center>
  </div>`,F=c.keepTrackApi.html`
<div id="analysis-menu" class="side-menu-parent start-hidden text-select">
  <div id="analysis-inner-menu" class="side-menu">
    ${E}
    <!-- ${L} -->
    ${I}
    ${N}
    ${G}
    ${P}
    ${R}
    ${O}
    ${D}
    ${C}
  </div>
</div>`,U=c.keepTrackApi.html`The Analysis Menu provides a number of tools to help you analyze the data in the current view. The tools are:
<ul style="margin-left: 40px;">
  <li>Export Official TLEs - Export real two line element sets.</li>
  <li>Export 3LES - Export three line element sets.</li>
  <li>Export KeepTrack TLEs - Export All KeepTrack two line element sets including analysts.</li>
  <li>Export KeepTrack 3LES - Export All KeepTrack three line element sets including analysts.</li>
  <li>Find Close Objects - Find objects that are close to each other.</li>
  <li>Find Reentries - Find objects that are likely to reenter the atmosphere.</li>
  <li>Best Passes - Find the best passes for a satellite based on the currently selected sensor.</li>
</ul>`;let _=!1;const B=()=>{c.keepTrackApi.register({method:"uiManagerInit",cbName:"analysis",cb:$}),c.keepTrackApi.register({method:"uiManagerFinal",cbName:"analysis",cb:H}),c.keepTrackApi.register({method:"bottomMenuClick",cbName:"analysis",cb:e=>{if("menu-analysis"===e){const e=l.I.get(r.Yv.UiManager);if(_)return _=!1,(0,p.G)("menu-analysis").classList.remove("bmenu-item-selected"),void e.hideSideMenus();{if(e.hideSideMenus(),_=!0,-1!=c.keepTrackApi.getCatalogManager().selectedSat){const e=c.keepTrackApi.getCatalogManager().getSat(c.keepTrackApi.getCatalogManager().selectedSat),t=(0,p.G)("anal-sat");t&&(t.value=e.sccNum)}const t=document.querySelectorAll("select");return window.M.FormSelect.init(t),(0,g.$k)((0,p.G)("analysis-menu"),1e3),void(0,p.G)("menu-analysis").classList.add("bmenu-item-selected")}}}}),c.keepTrackApi.register({method:"selectSatData",cbName:"analysis",cb:e=>{l.I.get(r.Yv.UiManager).isAnalysisMenuOpen&&((0,p.G)("anal-sat").value=e.sccNum)}}),c.keepTrackApi.register({method:"hideSideMenus",cbName:"analysis",cb:()=>{(0,g.kW)((0,p.G)("analysis-menu"),1e3),(0,p.G)("menu-analysis").classList.remove("bmenu-item-selected"),_=!1}}),c.keepTrackApi.register({method:"onHelpMenuClick",cbName:"analysis",cb:z})},z=()=>!!_&&(m.v.showAdvice("Analysis Menu",U),!0),$=()=>{(0,p.G)("left-menus").insertAdjacentHTML("beforeend",F),(0,p.G)("bottom-icons").insertAdjacentHTML("beforeend",T)},H=()=>{var e,t,a,i,s,n,o,l;null===(e=(0,p.G)("analysis-bpt"))||void 0===e||e.addEventListener("submit",(function(e){e.preventDefault(),W()})),null===(t=(0,p.G)("findCsoBtn"))||void 0===t||t.addEventListener("click",(()=>{(0,u.QP)(Y)})),null===(a=(0,p.G)("findReentries"))||void 0===a||a.addEventListener("click",(()=>{(0,u.QP)(K)}));const r=c.keepTrackApi.getCatalogManager().satData;null===(i=(0,p.G)("export-catalog-csv-btn"))||void 0===i||i.addEventListener("click",(()=>{y.exportTle2Csv(r)})),null===(s=(0,p.G)("export-catalog-txt-2a"))||void 0===s||s.addEventListener("click",(()=>{y.exportTle2Txt(r)})),null===(n=(0,p.G)("export-catalog-txt-2b"))||void 0===n||n.addEventListener("click",(()=>{y.exportTle2Txt(r,2,!1)})),null===(o=(0,p.G)("export-catalog-txt-3a"))||void 0===o||o.addEventListener("click",(()=>{y.exportTle2Txt(r,3)})),null===(l=(0,p.G)("export-catalog-txt-3b"))||void 0===l||l.addEventListener("click",(()=>{y.exportTle2Txt(r,3,!1)})),(0,d.E)((0,p.G)("analysis-menu"))},j=()=>{},Y=()=>{const e=l.I.get(r.Yv.UiManager),t=J();e.doSearch(t)};let V=null;const J=()=>{if(V)return V;const e=50;let t=[],a=[];for(let e=0;e<c.keepTrackApi.getCatalogManager().orbitalSats;e++){const t=c.keepTrackApi.getCatalogManager().getSat(e);void 0!==t.TLE1&&(void 0===t.position&&(t.position=h.$.getEci(t,new Date).position||{x:0,y:0,z:0}),isNaN(t.position.x)||isNaN(t.position.y)||isNaN(t.position.z)||t.position&&"boolean"!=typeof t.position&&0===t.position.x&&0===t.position.y&&0===t.position.z||a.push(t))}a=(0,v.d)(a),a.sort(((e,t)=>e.position.x-t.position.x));let i=0;const s=a.length;for(i=0;i<s;i++){const n=a[i],o=n.position,l=o.x-e,r=o.x+e,c=o.y-e,d=o.y+e,p=o.z-e,u=o.z+e;let g=0;for(g=Math.max(0,i-200);g<s;g++){const e=a[g];if(n==e)continue;const i=e.position;if(i.x>r)break;i.x<r&&i.x>l&&i.y<d&&i.y>c&&i.z<u&&i.z>p&&t.push({sat1:n,sat2:e})}}let n=(0,v.d)(t);const o=[];for(let e=0;e<n.length;e++){let t=n[e].sat1,a=h.$.getEci(t,new Date(Date.now()+18e5));a.position&&"boolean"!=typeof a.position&&0===a.position.x&&0===a.position.y&&0===a.position.z||(n[e].sat1.position=a.position,t=n[e].sat2,a=h.$.getEci(t,new Date(Date.now()+18e5)),a.position&&"boolean"!=typeof a.position&&0===a.position.x&&0===a.position.y&&0===a.position.z||(t.position=a.position,n[e].sat2.position=a.position))}for(let t=0;t<n.length;t++){let a=n[t].sat1,i=a.position;if(void 0===i)continue;let s=i.x-e,l=i.x+e,r=i.y-e,c=i.y+e,d=i.z-e,p=i.z+e,u=n[t].sat2,g=u.position;void 0!==g&&g.x<l&&g.x>s&&g.y<c&&g.y>r&&g.z<p&&g.z>d&&(o.push(a.sccNum),o.push(u.sccNum))}const l=Array.from(new Set(o));let r="";for(let e=0;e<l.length;e++)e==l.length-1?r+=l[e]:r+=l[e]+",";return V=r,r},K=()=>{const e=l.I.get(r.Yv.UiManager),t=M.w.findReentry(c.keepTrackApi.getCatalogManager().satData).join(",");e.doSearch(t)},W=()=>{const e=(0,p.G)("analysis-bpt-sats").value,t=l.I.get(r.Yv.SensorManager);t.isSensorSelected()?Z(e,t.currentSensors[0]):l.I.get(r.Yv.UiManager).toast("You must select a sensor first!","critical")},X=(e,t)=>{const a=l.I.get(r.Yv.TimeManager),i=l.I.get(r.Yv.UiManager);if(t.length<=0||!t[0]||void 0===t[0].obsminaz)return i.toast("Sensor's format incorrect. Did you select a sensor first?","critical"),[];t[0].observerGd={lat:t[0].lat*b.qW,lon:t[0].lon*b.qW,alt:t[0].alt};const s=t[0];let n=0;var o=c.keepTrackApi.getCatalogManager().calcSatrec(e),d=[];let p=0,u=null,g=null,m=null,v=null,f=s.obsmaxrange,k=0,S=!1,y=!1,M=b.rE/(o.no*b.rE/b.gc);const A=(e,t)=>{let i=h.$.getRae(e,t,s);if(h.$.checkIsInView(s,i)){const o=a.getOffsetTimeObj(n-5e3);let l=h.$.getRae(o,t,s),r=h.$.checkIsInView(s,l);if(r){let o=a.getOffsetTimeObj(n+5e3);if(l=h.$.getRae(o,t,s),r=h.$.checkIsInView(s,l),!r){if(y=i.el<=3.5,null==v)return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null};p=Math.min((e.getTime()-v.getTime())/1e3/60*10/8,10);let a=Math.min(k/50*10,10);a*=S&&y?2:1,p+=a,p+=Math.min(7500/f,10);let s=0;return s=(e.getTime()-v.getTime())/1e3||0,{sortTime:v.getTime(),scc:t.satnum,score:p,startDate:v,startTime:v,startAz:u,startEl:g,startrng:m,stopDate:e,stopTime:e,stopAz:i.az.toFixed(0),stopEl:i.el.toFixed(1),stoprng:i.rng.toFixed(0),tic:s,minrng:f.toFixed(0),passMaxEl:k.toFixed(1)}}}else i.el<=3.5&&(S=!0),v=e,u=i.az.toFixed(0),g=i.el.toFixed(1),m=i.rng.toFixed(0);k<i.el&&(k=i.el),f>i.rng&&(f=i.rng)}return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null}};for(let e=0;e<604800;e+=5){n=1e3*e;const t=a.getOffsetTimeObj(n);if(d.length<=5e3){const a=A(t,o);null!==a.score&&(d.push(a),p=0,u=null,g=null,m=null,v=null,f=s.obsmaxrange,k=0,S=!1,y=!1,e+=60*M*.75)}}return d},Z=(e,t)=>{const a=(e=e.replace(/ /gu,",")).split(",");let i=[];for(let e=0;e<a.length;e++)try{const s=a[e];if(void 0===s||null==s||""===s||" "===s)continue;const n=c.keepTrackApi.getCatalogManager().getSatFromObjNum(parseInt(s)),o=X(n,[t]);for(let e=0;e<o.length;e++)i.push(o[e])}catch(e){console.debug(e)}i.sort(((e,t)=>t.sortTime-e.sortTime)),i.reverse(),i.forEach((e=>{delete e.sortTime}));for(let e=0;e<i.length;e++)i[e].startDate=i[e].startDate.toISOString().split("T")[0],i[e].startTime=i[e].startTime.toISOString().split("T")[1].split(".")[0],i[e].stopDate=i[e].stopDate.toISOString().split("T")[0],i[e].stopTime=i[e].stopTime.toISOString().split("T")[1].split(".")[0];(0,f.Eb)(i,"bestSatTimes")},q=a.p+"../img/flag.png";var Q=a(9703),ee=a(7374),te=a(9959);class ae extends te.c{constructor(){super(ae.PLUGIN_NAME),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=q,this.bottomIconLabel="Countries",this.sideMenuElementHtml=c.keepTrackApi.html`
    <div id="countries-menu" class="side-menu-parent start-hidden text-select">
      <div id="country-menu" class="side-menu">
        <ul>
          <h5 class="center-align">Countries</h5>
          <li class="divider"></li>
          <li class="menu-selectable country-option" data-group="Argentina">Argentina</li>
          <li class="menu-selectable country-option" data-group="Austria">Austria</li>
          <li class="menu-selectable country-option" data-group="Australia">Australia</li>
          <li class="menu-selectable country-option" data-group="Belgium">Belgium</li>
          <li class="menu-selectable country-option" data-group="Brazil">Brazil</li>
          <li class="menu-selectable country-option" data-group="Canada">Canada</li>
          <li class="menu-selectable country-option" data-group="China">China</li>
          <li class="menu-selectable country-option" data-group="Colombia">Colombia</li>
          <li class="menu-selectable country-option" data-group="Denmark">Denmark</li>
          <li class="menu-selectable country-option" data-group="Egypt">Egypt</li>
          <li class="menu-selectable country-option" data-group="Finland">Finland</li>
          <li class="menu-selectable country-option" data-group="France">France</li>
          <li class="menu-selectable country-option" data-group="Germany">Germany</li>
          <li class="menu-selectable country-option" data-group="Hong Kong">Hong Kong</li>
          <li class="menu-selectable country-option" data-group="Hungary">Hungary</li>
          <li class="menu-selectable country-option" data-group="India">India</li>
          <li class="menu-selectable country-option" data-group="Indonesia">Indonesia</li>
          <li class="menu-selectable country-option" data-group="Iran">Iran</li>
          <li class="menu-selectable country-option" data-group="Ireland">Ireland</li>
          <li class="menu-selectable country-option" data-group="Italy">Italy</li>
          <li class="menu-selectable country-option" data-group="Israel">Israel</li>
          <li class="menu-selectable country-option" data-group="Japan">Japan</li>
          <li class="menu-selectable country-option" data-group="North Korea">North Korea</li>
          <li class="menu-selectable country-option" data-group="South Korea">South Korea</li>
          <li class="menu-selectable country-option" data-group="Mexico">Mexico</li>
          <li class="menu-selectable country-option" data-group="Norway">Norway</li>
          <li class="menu-selectable country-option" data-group="New Zealand">New Zealand</li>
          <li class="menu-selectable country-option" data-group="Philippines">Philippines</li>
          <li class="menu-selectable country-option" data-group="Poland">Poland</li>
          <li class="menu-selectable country-option" data-group="Russia">Russia</li>
          <li class="menu-selectable country-option" data-group="Saudi Arabia">Saudi Arabia</li>
          <li class="menu-selectable country-option" data-group="Singapore">Singapore</li>
          <li class="menu-selectable country-option" data-group="Spain">Spain</li>
          <li class="menu-selectable country-option" data-group="Sweden">Sweden</li>
          <li class="menu-selectable country-option" data-group="Switzerland">Switzerland</li>
          <li class="menu-selectable country-option" data-group="Thailand">Thailand</li>
          <li class="menu-selectable country-option" data-group="Turkey">Turkey</li>
          <li class="menu-selectable country-option" data-group="United Kingdom">United Kingdom</li>
          <li class="menu-selectable country-option" data-group="United States">United States</li>
          <li class="menu-selectable country-option" data-group="Venezuela">Venezuela</li>
          <li class="menu-selectable country-option" data-group="Vietnam">Vietnam</li>
          <li class="menu-selectable country-option" data-group="South Africa">South Africa</li>
        </ul>
      </div>
    </div>
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=c.keepTrackApi.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,p.G)("country-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){var e;null===(e=c.keepTrackApi.getSoundManager())||void 0===e||e.play("toggleOn"),ae.countryMenuClick_(this.getAttribute("data-group"))}))})),(0,d.E)((0,p.G)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=l.I.get(r.Yv.GroupsManager),a=ee.n.getCountryCode(e);if(""===a)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(Q.Y.COUNTRY,a,e),ae.groupSelected_(e)}static groupSelected_(e){const t=l.I.get(r.Yv.GroupsManager),a=l.I.get(r.Yv.CatalogManager),i=l.I.get(r.Yv.UiManager),s=(0,p.G)("search");void 0!==e&&void 0!==t.groupList[e]&&(t.selectGroup(t.groupList[e]),t.groupList[e].objects.length<settingsManager.searchLimit?i.searchManager.doSearch(t.groupList[e].objects.reduce(((e,t)=>`${e}${a.getSat(t).sccNum},`),"").slice(0,-1)):(s.value=t.groupList[e].objects.reduce(((e,t)=>`${e}${a.getSat(t).sccNum},`),"").slice(0,-1),i.searchManager.fillResultBox(t.groupList[e].objects.map((e=>({satId:e}))),a)),a.setSelectedSat(-1),settingsManager.isMobileModeEnabled&&i.searchManager.searchToggle(!0),i.hideSideMenus())}}ae.PLUGIN_NAME="Countries Menu";const ie=new ae,se=a.p+"../img/iod.png";var ne=function(e,t,a,i){return new(a||(a=Promise))((function(s,n){function o(e){try{r(i.next(e))}catch(e){n(e)}}function l(e){try{r(i.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}r((i=i.apply(e,t||[])).next())}))};const oe=6371e3,le=1.15741e-8,re=Math.PI,ce=2*re,de=360/ce,pe={sat2sv:(e,t)=>[t.simulationTimeObj,e.position.x,e.position.y,e.position.z,e.velocity.x,e.velocity.y,e.velocity.z],sat2kp:(e,t)=>{const a=pe.sat2sv(e,t);return pe.sv2kp(a,t)},sat2tle:(e,t)=>{const a=pe.sat2kp(e,t);return pe.kp2tle(a,null,t)},sv2kp:e=>me({massPrimary:1,massSecondary:1,vector:e,massPrimaryU:"kg",massSecondaryU:"M_Earth",vectorU:"km",outputU:"km",outputU2:"m"}),kp2tle:(e,t,a)=>{const i=e.inclination,s=e.raan,n=e.eccentricity,o=e.argPe,l=e.mo,r=1440/e.period,c=(t=void 0===t||null==t?new Date(a.calculateSimulationTime()):t).getUTCFullYear()-2e3,d=be(t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds()),p=parseFloat(d)+t.getUTCMilliseconds()*le;return{tle1:`1 80000U 58001A   ${c}${ve(p.toFixed(8),12)} 0.00000000 +00000-0 +00000-0 0 99990`,tle2:`2 80000 ${ve(i.toFixed(4),8)} ${ve(s.toFixed(4),8)} ${n.toFixed(7).substr(2,7)} ${ve(parseFloat(o).toFixed(4),8)} ${ve(l.toFixed(4),8)} ${ve(r.toFixed(8),11)}000010`}},iod:(e,t,a)=>ne(void 0,void 0,void 0,(function*(){try{const i=pe.svs2kps(e);e.sort((function(e,t){return e[0]-t[0]}));const s=new Date(e[0][0]);return pe.fitTles(s,e,i,t,a)}catch(e){S.x.info(e)}})),svs2analyst:(e,t,a)=>ne(void 0,void 0,void 0,(function*(){const i=l.I.get(r.Yv.CatalogManager);pe.iod(e,t,a).then((e=>{i.insertNewAnalystSatellite(e.tle1,e.tle2,i.getIdFromObjNum(100500),"100500")})).catch((e=>{S.x.debug(e)}))})),fitTles:(e,t,a,i,s)=>ne(void 0,void 0,void 0,(function*(){try{pe.debug.closestApproach=0;const n=settingsManager.fitTleSteps,o=(a.max.raan-a.min.raan)/n,l=(a.max.argPe-a.min.argPe)/n,r=(a.max.mo-a.min.mo)/n;let c=[1e7];for(let d=-n/2;d<n/2;d++)for(let p=-n;p<n;p++)for(let u=2*-n;u<2*n;u++){const n={inclination:a.avg.inclination,raan:a.avg.raan+o*d,eccentricity:a.avg.eccentricity,argPe:a.avg.argPe+l*p,mo:a.avg.mo+r*u/2,period:a.avg.period},g=pe.kp2tle(n,e,i);let m=0,h=0,b=0,v=0;for(let a=0;a<t.length;a++){let i;try{i=ue(g.tle1,g.tle2,new Date(e+(t[a][0]-t[0][0])),s),m+=Math.abs(i.position.x-t[a][1]),h+=Math.abs(i.position.y-t[a][2]),b+=Math.abs(i.position.z-t[a][3]),v+=Math.sqrt(Math.pow(m,2)+Math.pow(h,2)+Math.pow(b,2))}catch(e){S.x.info(e)}}v/=t.length,v<c[0]&&(c=[v,d,p,u])}S.x.debug(`Closest Approach: ${c[0]}`),pe.debug.closestApproach+=c[0];const d={inclination:a.avg.inclination,raan:a.avg.raan+o*c[1],eccentricity:a.avg.eccentricity,argPe:a.avg.argPe+l*c[2],mo:a.avg.mo+r*c[3],period:a.avg.period};return pe.kp2tle(d,e)}catch(e){S.x.debug(e)}})),testIod:e=>{fetch("/metObs.json").then((e=>e.json())).then((t=>{for(let a=0;a<t.length;a++){let i=t[a];pe.svs2analyst(i,e)}pe.debug.closestApproach/=t.length,S.x.log(`Average Approach: ${pe.debug.closestApproach}`)})).catch((e=>{S.x.debug(e)}))},svs2kps:e=>{let t=[];for(let a=0;a<e.length;a++)e[a].length<3||t.push(pe.sv2kp(e[a]));let a={max:{apogee:0,argPe:0,eccentricity:0,inclination:0,mo:0,perigee:0,period:0,raan:0,semiMajorAxis:0,ta:0,tl:0},min:{apogee:1e6,argPe:1e6,eccentricity:1e6,inclination:1e6,mo:1e6,perigee:1e6,period:1e6,raan:1e6,semiMajorAxis:1e6,ta:1e6,tl:1e6},avg:{apogee:0,argPe:0,eccentricity:0,inclination:0,mo:0,perigee:0,period:0,raan:0,semiMajorAxis:0,ta:0,tl:0}};for(let e=0;e<t.length;e++)t[e].apogee<a.min.apogee&&(a.min.apogee=t[e].apogee),t[e].apogee>a.max.apogee&&(a.max.apogee=t[e].apogee),a.avg.apogee+=t[e].apogee,t[e].argPe<a.min.argPe&&(a.min.argPe=t[e].argPe),t[e].argPe>a.max.argPe&&(a.max.argPe=t[e].argPe),a.avg.argPe+=t[e].argPe,t[e].eccentricity<a.min.eccentricity&&(a.min.eccentricity=t[e].eccentricity),t[e].eccentricity>a.max.eccentricity&&(a.max.eccentricity=t[e].eccentricity),a.avg.eccentricity+=t[e].eccentricity,t[e].inclination<a.min.inclination&&(a.min.inclination=t[e].inclination),t[e].inclination>a.max.inclination&&(a.max.inclination=t[e].inclination),a.avg.inclination+=t[e].inclination,t[e].mo<a.min.mo&&(a.min.mo=t[e].mo),t[e].mo>a.max.mo&&(a.max.mo=t[e].mo),a.avg.mo+=t[e].mo,t[e].perigee<a.min.perigee&&(a.min.perigee=t[e].perigee),t[e].perigee>a.max.perigee&&(a.max.perigee=t[e].perigee),a.avg.perigee+=t[e].perigee,t[e].period<a.min.period&&(a.min.period=t[e].period),t[e].period>a.max.period&&(a.max.period=t[e].period),a.avg.period+=t[e].period,t[e].raan<a.min.raan&&(a.min.raan=t[e].raan),t[e].raan>a.max.raan&&(a.max.raan=t[e].raan),a.avg.raan+=t[e].raan,t[e].semiMajorAxis<a.min.semiMajorAxis&&(a.min.semiMajorAxis=t[e].semiMajorAxis),t[e].semiMajorAxis>a.max.semiMajorAxis&&(a.max.semiMajorAxis=t[e].semiMajorAxis),a.avg.semiMajorAxis+=t[e].semiMajorAxis,t[e].ta<a.min.ta&&(a.min.ta=t[e].ta),t[e].ta>a.max.ta&&(a.max.ta=t[e].ta),a.avg.ta+=t[e].ta,t[e].tl<a.min.tl&&(a.min.tl=t[e].tl),t[e].tl>a.max.tl&&(a.max.tl=t[e].tl),a.avg.tl+=t[e].tl;return a.avg.apogee/=t.length,a.avg.argPe/=t.length,a.avg.eccentricity/=t.length,a.avg.inclination/=t.length,a.avg.mo/=t.length,a.avg.perigee/=t.length,a.avg.period/=t.length,a.avg.raan/=t.length,a.avg.semiMajorAxis/=t.length,a.avg.ta/=t.length,a.avg.tl/=t.length,a},debug:{closestApproach:0}},ue=(e,t,a,i)=>ne(void 0,void 0,void 0,(function*(){try{let s=i.twoline2satrec(e,t),n=ge(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds());n+=a.getUTCMilliseconds()*le;let o=1440*(n-s.jdsatepoch);return i.sgp4(s,o)}catch(e){}})),ge=(e,t,a,i,s,n)=>367*e-Math.floor(7*(e+Math.floor((t+9)/12))*.25)+Math.floor(275*t/9)+a+1721013.5+((n/60+s)/60+i)/24,me=({massPrimary:e,massSecondary:t,vector:a,massPrimaryU:i,massSecondaryU:s,vectorU:n,outputU:o,outputU2:l})=>{if(!a)throw new Error("vector is required");if(e<=0)throw new Error("massPrimary must be greater than 0");if(t<=0)throw new Error("massSecondary must be greater than 0");if(null!=n||(n="km"),"km"!==n&&"m"!==n)throw new Error('vectorU must be either "km" or "m"');const r="km"===n?1e3:1;let c=a[1]*r,d=a[2]*r,p=a[3]*r,u=a[4]*r,g=a[5]*r,m=a[6]*r;if(null!=s||(s="M_Earth"),"M_Earth"!==s)throw new Error("M_Earth is the only value currently supported.");if(t*=597378250603408e10,null!=i||(i="kg"),"kg"!==i)throw new Error("kg is the only value currently supported.");0===c&&(c=1e-15),0===d&&(d=1e-15),0===p&&(p=1e-15),0===u&&(u=1e-15),0===g&&(g=1e-15),0===m&&(m=1e-15);let h=b.fT*(e+t),v=Math.sqrt(c*c+d*d+p*p),f=Math.sqrt(u*u+g*g+m*m),k=1/(2/v-f*f/h),S=d*m-p*g,y=p*u-c*m,M=c*g-d*u,A=Math.sqrt(S*S+y*y+M*M),T=A*A/h,C=c*u+d*g+p*m,w=Math.sqrt(1-T/k),x=1-v/k,L=C/Math.sqrt(k*h),E=Math.acos(M/A),I=0;0!=E&&(I=he(S,-y));let N=he(A*C/(v*h),A*A/(v*h)-1),G=(c*Math.cos(I)+d*Math.sin(I))/v,P=0;P=0===E||E===re?(d*Math.cos(I)-c*Math.sin(I))/v:p/(v*Math.sin(E));let D=he(P,G)-N;D<0&&(D=ce+D);let R=he(L,x),O=R-w*Math.sin(R),F=D+N+I;for(;F>=ce;)F-=ce;const U=k*w;let _=k-U-("km"===n?6371:oe),B=k+U-("km"===n?6371:oe),z=ce*Math.sqrt(k*k*k/(b.fT*(e+t)));return null!=o||(o="m"),k="km"===o?k/1e3:k,B="km"===o?B/1e3:B,_="km"===o?_/1e3:_,null!=l||(l="s"),z="m"===l?z/60:z,E*=de,I*=de,D*=de,O*=de,N*=de,F*=de,{semiMajorAxis:k,eccentricity:w,inclination:E,raan:I,argPe:D,mo:O,ta:N,tl:F,perigee:_,apogee:B,period:z}},he=(e,t)=>{let a;return 0!=t?(a=Math.atan(e/t),t<0&&(a+=re),t>0&&e<0&&(a+=ce)):(e<0&&(a=-re/2),0===e&&(a=0),e>0&&(a=re/2)),a},be=(e,t,a,i,s)=>(Math.floor(275*e/9)+t+((s/60+i)/60+a)/24).toFixed(5),ve=(e,t)=>(null==e?void 0:e.length)<t?ve("0"+e,t):e,fe=pe,ke=c.keepTrackApi.html`The Initial Orbit Menu is used for generating TLEs using 1-3 state vectors.
<br><br>
Time is in unix time (seconds since 1970-01-01 00:00:00 UTC).
<br><br>
The first state vector is required. The second and third state vectors are optional.
`;let Se=!1;const ye=()=>{c.keepTrackApi.register({method:"uiManagerInit",cbName:"initialOrbit",cb:Te}),c.keepTrackApi.register({method:"uiManagerFinal",cbName:"initialOrbit",cb:Ce}),c.keepTrackApi.register({method:"bottomMenuClick",cbName:"initialOrbit",cb:we}),c.keepTrackApi.register({method:"hideSideMenus",cbName:"initialOrbit",cb:Ae}),c.keepTrackApi.register({method:"onHelpMenuClick",cbName:"initialOrbit",cb:Me})},Me=()=>!!Se&&(m.v.showAdvice("Initial Orbit Menu",ke),!0),Ae=()=>{(0,g.kW)((0,p.G)("obfit-menu"),1e3),(0,p.G)("menu-obfit").classList.remove("bmenu-item-selected"),Se=!1},Te=()=>{(0,p.G)("left-menus").insertAdjacentHTML("beforeend",c.keepTrackApi.html`
    <div id="obfit-menu" class="side-menu-parent start-hidden text-select">
      <div id="obfit-content" class="side-menu">
        <form id="obfit-form">
          <div class="switch row">
            <h5 class="center-align">Initial Orbit Determination</h5>
          </div>
          <div class="switch row">
            <h6 class="center-align">Observation 1</h5>
            <div class="input-field col s12">
              <input value="1653098333497" id="obfit-t1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Time in Unix Time">
              <label for="obfit-t" class="active">Time</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="1977.3758544921875" id="obfit-x1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="X">
              <label for="obfit-lat" class="active">X</label>
            </div>
            <div class="input-field col s4">
              <input value="5811.54248046875" id="obfit-y1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y">
              <label for="obfit-lat" class="active">Y</label>
            </div><div class="input-field col s4">
              <input value="3240.01123046875" id="obfit-z1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z">
              <label for="obfit-lat" class="active">Z</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="-7.044088363647461" id="obfit-xd1" type="text" class="tooltipped" data-position="right"
              data-delay="50" data-tooltip="X Dot">
              <label for="obfit-lat" class="active">X Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="0.5667343735694885" id="obfit-yd1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y Dot">
              <label for="obfit-lat" class="active">Y Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="2.7424800395965576" id="obfit-zd1" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z Dot">
              <label for="obfit-lat" class="active">Z Dot</label>
            </div>
          </div>
          <div class="switch row">
            <h6 class="center-align">Observation 2 (Optional)</h5>
            <div class="input-field col s12">
              <input value="" id="obfit-t2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Time in Unix Time">
              <label for="obfit-t" class="active">Time</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="" id="obfit-x2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="X">
              <label for="obfit-lat" class="active">X</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-y2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y">
              <label for="obfit-lat" class="active">Y</label>
            </div><div class="input-field col s4">
              <input value="" id="obfit-z2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z">
              <label for="obfit-lat" class="active">Z</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="" id="obfit-xd2" type="text" class="tooltipped" data-position="right"
              data-delay="50" data-tooltip="X Dot">
              <label for="obfit-lat" class="active">X Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-yd2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y Dot">
              <label for="obfit-lat" class="active">Y Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-zd2" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z Dot">
              <label for="obfit-lat" class="active">Z Dot</label>
            </div>
          </div>
          <div class="switch row">
            <h6 class="center-align">Observation 3 (Optional)</h5>
            <div class="input-field col s12">
              <input value="" id="obfit-t3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Time in Unix Time">
              <label for="obfit-t" class="active">Time</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="" id="obfit-x3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="X">
              <label for="obfit-lat" class="active">X</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-y3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y">
              <label for="obfit-lat" class="active">Y</label>
            </div><div class="input-field col s4">
              <input value="" id="obfit-z3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z">
              <label for="obfit-lat" class="active">Z</label>
            </div>
          </div>
          <div class="switch row">
            <div class="input-field col s4">
              <input value="" id="obfit-xd3" type="text" class="tooltipped" data-position="right"
              data-delay="50" data-tooltip="X Dot">
              <label for="obfit-lat" class="active">X Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-yd3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Y Dot">
              <label for="obfit-lat" class="active">Y Dot</label>
            </div>
            <div class="input-field col s4">
              <input value="" id="obfit-zd3" type="text" class="tooltipped" data-position="right"
                data-delay="50" data-tooltip="Z Dot">
              <label for="obfit-lat" class="active">Z Dot</label>
            </div>
          </div>
          <div class="row center">
            <button id="obfit-submit" class="btn btn-ui waves-effect waves-light" type="submit"
              name="action">Create Analyst Satellite &#9658;
            </button>
          </div>
        </form>
        <div class="row">
          <table id="obfit" class="center-align striped-light centered"></table>
        </div>
      </div>
    </div>
  `),(0,p.G)("bottom-icons").insertAdjacentHTML("beforeend",c.keepTrackApi.html`
    <div id="menu-obfit" class="bmenu-item">
      <img
        alt="obfit"
        src=""
        delayedsrc="${se}" />
      <span class="bmenu-title">Initial Orbit</span>
      <div class="status-icon"></div>
    </div>
  `)},Ce=()=>{(0,p.G)("obfit-form").addEventListener("submit",(function(e){xe(e)}))},we=e=>{if("menu-obfit"===e){const e=l.I.get(r.Yv.UiManager);return Se?(Se=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.searchToggle(!1),e.hideSideMenus(),(0,g.$k)((0,p.G)("obfit-menu"),1e3),Se=!0,void(0,p.G)("menu-obfit").classList.add("bmenu-item-selected"))}},xe=e=>{const{satellite:t}=c.keepTrackApi.programs,a=l.I.get(r.Yv.TimeManager),i=l.I.get(r.Yv.UiManager);let s=!1,n=!1;const o=Ee("obfit-t1"),d=Ee("obfit-x1"),p=Ee("obfit-y1"),u=Ee("obfit-z1"),g=Ee("obfit-xd1"),m=Ee("obfit-yd1"),h=Ee("obfit-zd1"),b=Ee("obfit-t2"),v=Ee("obfit-x2"),f=Ee("obfit-y2"),k=Ee("obfit-z2"),S=Ee("obfit-xd2"),y=Ee("obfit-yd2"),M=Ee("obfit-zd2"),A=Ee("obfit-t3"),T=Ee("obfit-x3"),C=Ee("obfit-y3"),w=Ee("obfit-z3"),x=Ee("obfit-xd3"),L=Ee("obfit-yd3"),E=Ee("obfit-zd3"),I=[];let N=[];if(isNaN(o))return i.toast("Time 1 is Invalid!","critical"),!1;if(isNaN(d))return i.toast("X 1 is Invalid!","critical"),!1;if(isNaN(p))return i.toast("Y 1 is Invalid!","critical"),!1;if(isNaN(u))return i.toast("Z 1 is Invalid!","critical"),!1;if(isNaN(g))return i.toast("X Dot 1 is Invalid!","critical"),!1;if(isNaN(m))return i.toast("Y Dot 1 is Invalid!","critical"),!1;if(isNaN(h))return i.toast("Z Dot 1 is Invalid!","critical"),!1;N=[o,d,p,u,g,m,h],I.push(N);const{isOb:G,sv:P}=Le({isOb:s,obNum:2,t:b,x:v,y:f,z:k,xd:S,yd:y,zd:M,uiManagerInstance:i});s=G,I.push(P),n=!!s&&n;const{isOb:D,sv:R}=Le({isOb:n,obNum:3,t:A,x:T,y:C,z:w,xd:x,yd:L,zd:E,uiManagerInstance:i});return n=D,I.push(R),fe.svs2analyst(I,a,t),e.preventDefault(),!0},Le=({isOb:e,obNum:t,t:a,x:i,y:s,z:n,xd:o,yd:l,zd:r,uiManagerInstance:c})=>{let d=[];return e&&isNaN(a)&&(e=!1,c.toast(`Time ${t} is Invalid!`,"caution")),e&&isNaN(i)&&(e=!1,c.toast(`X ${t} is Invalid!`,"caution")),e&&isNaN(s)&&(e=!1,c.toast(`Y ${t} is Invalid!`,"caution")),e&&isNaN(n)&&(e=!1,c.toast(`Z ${t} is Invalid!`,"caution")),e&&isNaN(o)&&(e=!1,c.toast(`X Dot ${t} is Invalid!`,"caution")),e&&isNaN(l)&&(e=!1,c.toast(`Y Dot ${t} is Invalid!`,"caution")),e&&isNaN(r)&&(e=!1,c.toast(`Z Dot ${t} is Invalid!`,"caution")),e&&(d=[a,i,s,n,o,l,r]),{isOb:e,sv:d}},Ee=e=>{const t=(0,p.G)(e).value;return t.length>0?parseFloat(t):NaN},Ie=a.p+"../img/missile.png",Ne=c.keepTrackApi.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var Ge=a(4378);let Pe=!1,De=!1,Re=0;const Oe=()=>{if(void 0!==Ge.CC&&Ge.CC.missileArray.length>0){const e=l.I.get(r.Yv.OrbitManager);for(Re=0;Re<Ge.CC.missileArray.length;Re++)e.updateOrbitBuffer(Ge.CC.missileArray[Re].id)}},Fe=()=>{(0,g.kW)((0,p.G)("missile-menu"),1e3),(0,p.G)("menu-missile").classList.remove("bmenu-item-selected"),Pe=!1},Ue=e=>{if("menu-missile"===e){const e=l.I.get(r.Yv.UiManager);return Pe?(Pe=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.searchToggle(!1),e.hideSideMenus(),(0,g.$k)((0,p.G)("missile-menu"),1e3),(0,p.G)("menu-missile").classList.add("bmenu-item-selected"),void(Pe=!0))}},_e=()=>{0!==parseFloat((0,p.G)("ms-type").value)?(0,p.G)("ms-custom-opt").style.display="none":(0,p.G)("ms-custom-opt").style.display="block"},Be=()=>{(0,p.G)("ms-error").style.display="none"},ze=()=>{-1!==parseInt((0,p.G)("ms-target").value)?((0,p.G)("ms-tgt-holder-lat").style.display="none",(0,p.G)("ms-tgt-holder-lon").style.display="none"):((0,p.G)("ms-tgt-holder-lat").style.display="block",(0,p.G)("ms-tgt-holder-lon").style.display="block")},$e=()=>{(0,u.QP)((()=>{const e=l.I.get(r.Yv.TimeManager),t=l.I.get(r.Yv.UiManager);(0,p.G)("ms-error").style.display="none";const a=parseFloat((0,p.G)("ms-type").value),i=parseFloat((0,p.G)("ms-attacker").value);let s=parseFloat((0,p.G)("ms-lat-lau").value),n=parseFloat((0,p.G)("ms-lon-lau").value);const o=parseFloat((0,p.G)("ms-target").value);let c=parseFloat((0,p.G)("ms-lat").value),d=parseFloat((0,p.G)("ms-lon").value);const u=e.selectedDate.getTime();let g="";if(1===a&&(g="simulation/Russia2USA.json",Ge.CC.MassRaidPre(u,g)),2===a&&(g="simulation/Russia2USAalt.json",Ge.CC.MassRaidPre(u,g)),3===a&&(g="simulation/China2USA.json",Ge.CC.MassRaidPre(u,g)),4===a&&(g="simulation/NorthKorea2USA.json",Ge.CC.MassRaidPre(u,g)),5===a&&(g="simulation/USA2Russia.json",Ge.CC.MassRaidPre(u,g)),6===a&&(g="simulation/USA2China.json",Ge.CC.MassRaidPre(u,g)),7===a&&(g="simulation/USA2NorthKorea.json",Ge.CC.MassRaidPre(u,g)),0!==a&&t.toast(`${g} Loaded`,"standby",!0),0===a){if(-1===o){if(isNaN(c))return t.toast("Invalid Target Latitude!","critical"),void((0,p.G)("loading-screen").style.display="none");if(isNaN(d))return t.toast("Invalid Target Longitude!","critical"),void((0,p.G)("loading-screen").style.display="none")}else c=Ge.CC.globalBMTargets[3*o],d=Ge.CC.globalBMTargets[3*o+1];if(De){if(isNaN(s))return t.toast("Invalid Launch Latitude!","critical"),void((0,p.G)("loading-screen").style.display="none");if(isNaN(n))return t.toast("Invalid Launch Longitude!","critical"),void((0,p.G)("loading-screen").style.display="none")}let e,a;const g=l.I.get(r.Yv.CatalogManager);if(i<200){e=i-100,a=500-Ge.CC.missilesInUse;let t=1200;100!=i&&(s=Ge.CC.UsaICBM[4*e],n=Ge.CC.UsaICBM[4*e+1],t=1100),Ge.CC.Missile(s,n,c,d,3,g.missileSats-a,u,Ge.CC.UsaICBM[4*e+2],30,2.9,.07,Ge.CC.UsaICBM[4*e+3],"United States",t)}else if(i<300){e=i-200,a=500-Ge.CC.missilesInUse;const t=1120;213!=i&&214!=i&&215!=i&&(s=Ge.CC.RussianICBM[4*e],n=Ge.CC.RussianICBM[4*e+1]),Ge.CC.Missile(s,n,c,d,3,g.missileSats-a,u,Ge.CC.RussianICBM[4*e+2],30,2.9,.07,Ge.CC.RussianICBM[4*e+3],"Russia",t)}else if(i<400){e=i-300,a=500-Ge.CC.missilesInUse;const t=1120;321!=i&&(s=Ge.CC.ChinaICBM[4*e],n=Ge.CC.ChinaICBM[4*e+1]),Ge.CC.Missile(s,n,c,d,3,g.missileSats-a,u,Ge.CC.ChinaICBM[4*e+2],30,2.9,.07,Ge.CC.ChinaICBM[4*e+3],"China",t)}else if(i<500){e=i-400,a=500-Ge.CC.missilesInUse;const t=1120;400!=i&&(s=Ge.CC.NorthKoreanBM[4*e],n=Ge.CC.NorthKoreanBM[4*e+1]),Ge.CC.Missile(s,n,c,d,3,g.missileSats-a,u,Ge.CC.NorthKoreanBM[4*e+2],30,2.9,.07,Ge.CC.NorthKoreanBM[4*e+3],"North Korea",t)}else if(i<600){e=i-500,a=500-Ge.CC.missilesInUse;const t=1e3;500!=i&&(s=Ge.CC.FraSLBM[4*e],n=Ge.CC.FraSLBM[4*e+1]),Ge.CC.Missile(s,n,c,d,3,g.missileSats-a,u,Ge.CC.FraSLBM[4*e+2],30,2.9,.07,Ge.CC.FraSLBM[4*e+3],"France",t)}else if(i<700){e=i-600,a=500-Ge.CC.missilesInUse;const t=1200;600!=i&&(s=Ge.CC.ukSLBM[4*e],n=Ge.CC.ukSLBM[4*e+1]),Ge.CC.Missile(s,n,c,d,3,g.missileSats-a,u,Ge.CC.ukSLBM[4*e+2],30,2.9,.07,Ge.CC.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(Ge.CC.lastMissileError,Ge.CC.lastMissileErrorType),t.doSearch("RV_")}(0,p.G)("loading-screen").style.display="none"}))},He=()=>{(0,p.G)("left-menus").insertAdjacentHTML("beforeend",c.keepTrackApi.html`
        <div id="missile-menu" class="side-menu-parent start-hidden text-select">
          <div id="missile-content" class="side-menu">
            <div class="row">
              <h5 class="center-align">Create Missile Attack</h5>
              <form id="missile" class="col s12">
                <div class="input-field col s12">
                  <select id="ms-type">
                    <option value="0">Custom Missile</option>
                    <option value="1">Russia to USA</option>
                    <option value="2">Russia to USA w/ Subs</option>
                    <option value="3">China to USA</option>
                    <option value="4">North Korea to USA</option>
                    <option value="5">USA to Russia</option>
                    <option value="6">USA to China</option>
                    <option value="7">USA to North Korea</option>
                  </select>
                  <label>Type of Attack</label>
                </div>
                <div id="ms-custom-opt">
                  <div class="input-field col s12">
                    <select id="ms-attacker">
                      <optgroup label="Russia">
                        <option value="200">Aleysk</option>
                        <option value="201">Dombarovskiy</option>
                        <option value="202">Uzhur</option>
                        <option value="203">Kartaly</option>
                        <option value="204">Irkutsk</option>
                        <option value="205">Kansk</option>
                        <option value="206">Krasnoyarsk</option>
                        <option value="207">Nizhniy Tagil</option>
                        <option value="208">Novosibirsk</option>
                        <option value="209">Tatischevo (SS-19)</option>
                        <option value="210">Tatischevo (SS-27)</option>
                        <option value="211">Teykovo</option>
                        <option value="212">Yoshkar Ola</option>
                        <option value="213">Borei Sub (Bulava)</option>
                        <option value="214">Delta IV Sub (Sineva)</option>
                        <option value="215">Delta IV Sub (Layner)</option>
                      </optgroup>
                      <optgroup label="China">
                        <option value="321">Type 092 Sub (JL-2)</option>
                        <option value="300">Nanyang</option>
                        <option value="301">Xining</option>
                        <option value="302">Delingha</option>
                        <option value="303">Haiyan</option>
                        <option value="304">Datong</option>
                        <option value="305">Tainshui</option>
                        <option value="306">Xixia</option>
                        <option value="307">Shaoyang</option>
                        <option value="308">Yuxi</option>
                        <option value="309">Luoyang</option>
                        <option value="310">Wuzhai</option>
                        <option value="311">Xuanhua</option>
                        <option value="312">Tongdao</option>
                        <option value="313">Lushi</option>
                        <option value="314">Jingxian A</option>
                        <option value="315">Jingxian B</option>
                        <option value="316">Hunan</option>
                        <option value="317">Daqing City</option>
                        <option value="318">Xinyang City</option>
                        <option value="319">Xinjiang Province</option>
                        <option value="320">Tibet Province</option>
                      </optgroup>
                      <optgroup label="United States">
                        <option value="101">Minot</option>
                        <option value="102">Malmstrom</option>
                        <option value="103">F.E. Warren</option>
                        <option value="100">Ohio Sub (Trident II)</option>
                      </optgroup>
                      <optgroup label="United Kingdom">
                        <option value="600">Vanguard Sub (Trident II)</option>
                        <option value="601">HMNB Clyde (Trident II)</option>
                      </optgroup>
                      <optgroup label="France">
                        <option value="500">Triomphant Sub (M51)</option>
                        <option value="501">Bay of Biscay</option>
                      </optgroup>
                      <optgroup label="North Korea">
                        <option value="400">Sinpo Sub (Pukkŭksŏng-1)</option>
                        <option value="401">Sinpo</option>
                        <option value="402">P'yong'an</option>
                        <option value="403">Pyongyang</option>
                      </optgroup>
                    </select>
                    <label>Launch Location</label>
                  </div>
                  <div id="ms-lau-holder-lat" class="input-field col s12">
                    <input placeholder="00.000" id="ms-lat-lau" type="text" maxlength="8" />
                    <label for="ms-lat-lau" class="active">Custom Launch Latitude</label>
                  </div>
                  <div id="ms-lau-holder-lon" class="input-field col s12">
                    <input placeholder="00.000" id="ms-lon-lau" type="text" maxlength="8" />
                    <label for="ms-lon-lau" class="active">Custom Launch Longitude</label>
                  </div>
                  <div class="input-field col s12">
                    <select id="ms-target">
                      <optgroup label="United States">
                        <option value="0">Washington DC</option>
                        <option value="1">New York City</option>
                        <option value="2">Los Angeles</option>
                        <option value="3">Chicago</option>
                        <option value="4">Boston</option>
                        <option value="5">Seattle</option>
                        <option value="6">Miami</option>
                        <option value="7">Dallas</option>
                        <option value="8">Colorado Springs</option>
                        <option value="9">Omaha</option>
                        <option value="10">Hawaii</option>
                        <option value="11">Guam</option>
                      </optgroup>
                      <option value="-1">Custom Impact</option>
                      <optgroup label="NATO Countries">
                        <option value="12">London</option>
                        <option value="13">Paris</option>
                        <option value="14">French Caribean</option>
                        <option value="15">Madrid</option>
                        <option value="16">Rome</option>
                        <option value="17">Berlin</option>
                        <option value="18">Toronto</option>
                      </optgroup>
                      <optgroup label="Non-NATO Countries">
                        <option value="19">Moscow</option>
                        <option value="20">St. Petersburg</option>
                        <option value="21">Novosibirsk</option>
                        <option value="22">Beijing</option>
                        <option value="23">Pyongyang</option>
                      </optgroup>
                    </select>
                    <label>Target Location</label>
                  </div>
                  <div id="ms-tgt-holder-lat" class="input-field col s12">
                    <input placeholder="00.000" id="ms-lat" type="text" maxlength="8" />
                    <label for="ms-lat" class="active">Custom Target Latitude</label>
                  </div>
                  <div id="ms-tgt-holder-lon" class="input-field col s12">
                    <input placeholder="00.000" id="ms-lon" type="text" maxlength="8" />
                    <label for="ms-lon" class="active">Custom Target Longitude</label>
                  </div>
                </div>
                <div class="center-align">
                  <button class="btn btn-ui waves-effect waves-light" type="submit" name="action">Launch Missile Attack &#9658;</button>
                </div>
              </form>
              <div class="row"></div>
              <div class="center-align">
                <button id="searchRvBtn" class="btn btn-ui waves-effect waves-light" name="search">Show All Missiles &#9658;</button>
              </div>
            </div>
            <div id="ms-error" class="center-align menu-selectable start-hidden">
              <h6 class="center-align">Error</h6>
            </div>
          </div>
        </div>
      `),(0,p.G)("bottom-icons").insertAdjacentHTML("beforeend",c.keepTrackApi.html`
        <div id="menu-missile" class="bmenu-item">
          <img
            alt="missile"
            src="" delayedsrc=${Ie}
          />
          <span class="bmenu-title">Missile</span>
          <div class="status-icon"></div>
        </div>
        `)},je=()=>{l.I.get(r.Yv.UiManager).doSearch("RV_")},Ye=()=>{(0,d.E)((0,p.G)("missile-menu")),(0,p.G)("missile").addEventListener("submit",(e=>{e.preventDefault(),$e()})),(0,p.G)("ms-attacker").addEventListener("change",Ke),(0,p.G)("ms-target").addEventListener("change",ze),(0,p.G)("ms-error").addEventListener("click",Be),(0,p.G)("missile").addEventListener("change",_e),(0,p.G)("searchRvBtn").addEventListener("click",je),Ke(),ze()},Ve=()=>{c.keepTrackApi.register({method:"uiManagerInit",cbName:"missile",cb:He}),c.keepTrackApi.register({method:"uiManagerFinal",cbName:"missile",cb:Ye}),c.keepTrackApi.register({method:"bottomMenuClick",cbName:"missile",cb:Ue}),c.keepTrackApi.register({method:"hideSideMenus",cbName:"missile",cb:Fe}),c.keepTrackApi.register({method:"updateLoop",cbName:"updateMissileOrbits",cb:Oe}),c.keepTrackApi.register({method:"onHelpMenuClick",cbName:"missile",cb:Je})},Je=()=>!!Pe&&(m.v.showAdvice("Missile Menu",Ne),!0),Ke=()=>{De=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,p.G)("ms-attacker").value)&&(De=!0);De?((0,p.G)("ms-lau-holder-lat").style.display="block",(0,p.G)("ms-lau-holder-lon").style.display="block"):((0,p.G)("ms-lau-holder-lat").style.display="none",(0,p.G)("ms-lau-holder-lon").style.display="none")};a(2322);var We=a(8120),Xe=a(4579),Ze=a(3845);const qe=(e,t,a,i)=>{if(!t)return a;We.JE(i)&&We.B9(a);const s={config:{xAxis3D:"X",yAxis3D:"Y",zAxis3D:"Z"},configParameters:{}};a=We.S1(i);const n=[{name:"X",index:0},{name:"Y",index:1},{name:"Z",index:2}],o=n.reduce((function(e,t){return e[t.name]=t.index,e}),{});let l=n.map((e=>e.name));return l=l.slice(2,l.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{s.configParameters[e]={options:l}})),a.setOption({tooltip:{},xAxis3D:{name:s.config.xAxis3D,type:"value"},yAxis3D:{name:s.config.yAxis3D,type:"value"},zAxis3D:{name:s.config.zAxis3D,type:"value"},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[s.config.xAxis3D,s.config.yAxis3D,s.config.yAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[o[s.config.xAxis3D]],t[o[s.config.yAxis3D]],t[o[s.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}),a},Qe=()=>{const e=[],t=l.I.get(r.Yv.CatalogManager);let a=t.getSat(t.selectedSat);e.push({name:a.name,value:Ze.c.getEcfOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))});const i=t.lastSelectedSat();return-1!==i&&(a=t.getSat(i),e.push({name:a.name,value:Ze.c.getEcfOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))})),e},et=(e,t,a,i)=>{if(!t)return a;We.JE(i)&&We.B9(a);const s={config:{xAxis3D:"X",yAxis3D:"Y",zAxis3D:"Z"},configParameters:{}};a=We.S1(i);const n=[{name:"X",index:0},{name:"Y",index:1},{name:"Z",index:2}],o=n.reduce((function(e,t){return e[t.name]=t.index,e}),{});let l=n.map((e=>e.name));l=l.slice(2,l.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{s.configParameters[e]={options:l}}));const r=e.reduce(((e,t)=>{const a=t.value.reduce(((e,t)=>Math.min(e,t[0])),1/0),i=t.value.reduce(((e,t)=>Math.max(e,t[0])),-1/0),s=t.value.reduce(((e,t)=>Math.min(e,t[1])),1/0),n=t.value.reduce(((e,t)=>Math.max(e,t[1])),-1/0),o=t.value.reduce(((e,t)=>Math.min(e,t[2])),1/0),l=t.value.reduce(((e,t)=>Math.max(e,t[2])),-1/0),r=1e3*Math.round(Math.min(a,s,o)/1e3),c=1e3*Math.round(Math.max(i,n,l)/1e3),d=Math.max(c,Math.abs(r));return Math.max(e,d)}),0);return a.setOption({tooltip:{},xAxis3D:{name:s.config.xAxis3D,type:"value",min:-r,max:r},yAxis3D:{name:s.config.yAxis3D,type:"value",min:-r,max:r},zAxis3D:{name:s.config.zAxis3D,type:"value",min:-r,max:r},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[s.config.xAxis3D,s.config.yAxis3D,s.config.yAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[o[s.config.xAxis3D]],t[o[s.config.yAxis3D]],t[o[s.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}),a},tt=()=>{const e=[],t=l.I.get(r.Yv.CatalogManager);let a=t.getSat(t.selectedSat);e.push({name:a.name,value:Ze.c.getEciOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))});const i=t.lastSelectedSat();return-1!==i&&(a=t.getSat(i),e.push({name:a.name,value:Ze.c.getEciOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))})),e};var at=a(2590),it=a(6349),st=a(3991),nt=a(7368);const ot=(e,t,a,i)=>{if(!t)return a;We.JE(i)&&We.B9(a);const s={config:{xAxis3D:"Radial",yAxis3D:"In-Track",zAxis3D:"Cross-Track"},configParameters:{}};a=We.S1(i);const n=[{name:"Radial",index:0},{name:"In-Track",index:1},{name:"Cross-Track",index:2}],o=n.reduce((function(e,t){return e[t.name]=t.index,e}),{});let l=n.map((e=>e.name));return l=l.slice(2,l.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{s.configParameters[e]={options:l}})),a.setOption({title:{text:"RIC Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis3D:{name:s.config.xAxis3D,type:"value"},yAxis3D:{name:s.config.yAxis3D,type:"value"},zAxis3D:{name:s.config.zAxis3D,type:"value"},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[s.config.xAxis3D,s.config.yAxis3D,s.config.yAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[o[s.config.xAxis3D]],t[o[s.config.yAxis3D]],t[o[s.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}),a},lt=()=>{const e=[],t=l.I.get(r.Yv.CatalogManager);if(-1===t.selectedSat||-1===t.secondarySat)return[];const a=t.getSat(t.selectedSat),i=t.secondarySatObj;return e.push({name:a.name,value:[[0,0,0]]}),e.push({name:i.name,value:Ze.c.getRicOfCurrentOrbit(i,a,500,5).map((e=>[e.x,e.y,e.z]))}),e},rt=a.p+"../img/line-plot.png",ct=a.p+"../img/scatter-plot.png",dt=a.p+"../img/scatter-plot2.png",pt=a.p+"../img/scatter-plot3.png",ut=a.p+"../img/scatter-plot4.png",gt=c.keepTrackApi.html`
      <div id="menu-plot-analysis" class="bmenu-item bmenu-item-disabled">
        <img
          alt="ECI Plots"
          src="" delayedsrc=${dt}
        />
        <span class="bmenu-title">ECI Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis2" class="bmenu-item bmenu-item-disabled">
        <img
          alt="ECF Plots"
          src="" delayedsrc=${pt}
        />
        <span class="bmenu-title">ECF Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis3" class="bmenu-item bmenu-item-disabled">
        <img
          alt="RIC Plots"
          src="" delayedsrc=${ut}
        />
        <span class="bmenu-title">RIC Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis4" class="bmenu-item">
        <img
          alt="Inc v Lon Plots"
          src="" delayedsrc=${ct}
        />
        <span class="bmenu-title">Inc v Lon Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis5" class="bmenu-item">
        <img
          alt="Time v Lon Plots"
          src="" delayedsrc=${rt}
        />
        <span class="bmenu-title">Time v Lon Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis6" class="bmenu-item">
        <img
          alt="Inc v Alt Plots"
          src="" delayedsrc=${ct}
        />
        <span class="bmenu-title">Inc v Alt Plots</span>
        <div class="status-icon"></div>
      </div>
    `;var mt=a(3379),ht=a.n(mt),bt=a(7795),vt=a.n(bt),ft=a(569),kt=a.n(ft),St=a(3565),yt=a.n(St),Mt=a(9216),At=a.n(Mt),Tt=a(4589),Ct=a.n(Tt),wt=a(6880),xt={};xt.styleTagTransform=Ct(),xt.setAttributes=yt(),xt.insert=kt().bind(null,"head"),xt.domAPI=vt(),xt.insertStyleElement=At(),ht()(wt.Z,xt),wt.Z&&wt.Z.locals&&wt.Z.locals;const Lt=c.keepTrackApi.html`
      <div id="plot-analysis-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal">
        <div id="plot-analysis-content" class="side-menu">
          <div id="plot-analysis-chart" class="plot-analysis-chart""></div>
        </div>
      </div>
      <div id="plot-analysis-menu2" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal">
        <div id="plot-analysis-content2" class="side-menu">
          <div id="plot-analysis-chart2" class="plot-analysis-chart""></div>
        </div>
      </div>
      <div id="plot-analysis-menu3" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal">
        <div id="plot-analysis-content3" class="side-menu">
          <div id="plot-analysis-chart3" class="plot-analysis-chart""></div>
        </div>
      </div>
      <div id="plot-analysis-menu4" class="side-menu-parent start-hidden text-select plot-analysis-menu-maximized">
        <div id="plot-analysis-content4" class="side-menu">
          <div id="plot-analysis-chart4" class="plot-analysis-chart""></div>
        </div>
      </div>
      <div id="plot-analysis-menu5" class="side-menu-parent start-hidden text-select plot-analysis-menu-maximized">
        <div id="plot-analysis-content5" class="side-menu">
          <div id="plot-analysis-chart5" class="plot-analysis-chart"></div>
        </div>
      </div>
      <div id="plot-analysis-menu6" class="side-menu-parent start-hidden text-select plot-analysis-menu-maximized">
        <div id="plot-analysis-content6" class="side-menu">
          <div id="plot-analysis-chart6" class="plot-analysis-chart"></div>
        </div>
      </div>
    `,Et=c.keepTrackApi.html`The ECI Plot Menu is used for plotting the ECI position of a satellite over time.
`,It=c.keepTrackApi.html`The ECF Plot Menu is used for plotting the ECF position of a satellite over time.
`,Nt=c.keepTrackApi.html`The RIC Plot Menu is used for plotting the RIC position of a satellite over time.
`,Gt=c.keepTrackApi.html`The Inc vs Lon Plot Menu is used for plotting the inclination vs longitude in the GEO belt.
`,Pt=c.keepTrackApi.html`The Time vs Lon Plot Menu is used for plotting the time vs longitude in the GEO belt.
`,Dt=c.keepTrackApi.html`The Inc vs Alt Plot Menu is used for plotting the inclination vs altitude.
`;let Rt,Ot,Ft,Ut,_t,Bt,zt=!1,$t=!1,Ht=!1,jt=!1,Yt=!1,Vt=!1;const Jt=()=>{c.keepTrackApi.register({method:"uiManagerInit",cbName:"plotAnalysis",cb:()=>Wt()}),c.keepTrackApi.register({method:"bottomMenuClick",cbName:"plotAnalysis",cb:e=>Xt(e)}),c.keepTrackApi.register({method:"hideSideMenus",cbName:"plotAnalysis",cb:()=>ia()}),c.keepTrackApi.register({method:"selectSatData",cbName:"plotAnalysis",cb:sa}),c.keepTrackApi.register({method:"onHelpMenuClick",cbName:"plotAnalysis",cb:Kt})},Kt=()=>zt?(m.v.showAdvice("ECI Plot Menu",Et),!0):$t?(m.v.showAdvice("ECF Plot Menu",It),!0):Ht?(m.v.showAdvice("RIC Plot Menu",Nt),!0):jt?(m.v.showAdvice("Inc vs Lon Plot Menu",Gt),!0):Yt?(m.v.showAdvice("Time vs Lon Plot Menu",Pt),!0):!!Vt&&(m.v.showAdvice("Inc vs Alt Plot Menu",Dt),!0),Wt=()=>{(0,p.G)("left-menus").insertAdjacentHTML("beforeend",Lt),(0,p.G)("bottom-icons").insertAdjacentHTML("beforeend",gt),(0,d.E)((0,p.G)("plot-analysis-menu"),{maxWidth:1200,minWidth:500}),(0,d.E)((0,p.G)("plot-analysis-menu2"),{maxWidth:1200,minWidth:500}),(0,d.E)((0,p.G)("plot-analysis-menu3"),{maxWidth:1200,minWidth:500})},Xt=e=>{switch(e){case"menu-plot-analysis":Zt();break;case"menu-plot-analysis2":qt();break;case"menu-plot-analysis3":Qt();break;case"menu-plot-analysis4":ea();break;case"menu-plot-analysis5":aa();break;case"menu-plot-analysis6":ta()}},Zt=()=>{const e=l.I.get(r.Yv.CatalogManager),t=l.I.get(r.Yv.UiManager);if(-1===e.selectedSat)return t.toast("Select a Satellite First!","caution"),void(0,Xe.l)((0,p.G)("menu-plot-analysis"));if(zt)return t.hideSideMenus(),void(zt=!1);{t.hideSideMenus(),(0,g.$k)((0,p.G)("plot-analysis-menu"),1e3),zt=!0;const e=(0,p.G)("plot-analysis-chart");return Rt=et(tt(),zt,Rt,e),setTimeout((()=>{Rt.resize()}),1e3),void(0,p.G)("menu-plot-analysis").classList.add("bmenu-item-selected")}},qt=()=>{const e=l.I.get(r.Yv.CatalogManager),t=l.I.get(r.Yv.UiManager);if(-1===e.selectedSat)return t.toast("Select a Satellite First!","caution"),void(0,Xe.l)((0,p.G)("menu-plot-analysis2"));if($t)return t.hideSideMenus(),void($t=!1);{t.hideSideMenus(),(0,g.$k)((0,p.G)("plot-analysis-menu2"),1e3),$t=!0;const e=(0,p.G)("plot-analysis-chart2");return Ot=qe(Qe(),$t,Ot,e),setTimeout((()=>{Ot.resize()}),1e3),void(0,p.G)("menu-plot-analysis2").classList.add("bmenu-item-selected")}},Qt=()=>{const e=l.I.get(r.Yv.CatalogManager),t=l.I.get(r.Yv.UiManager);if(-1===e.secondarySat)return t.toast("Select a Secondary Satellite First!","caution"),void(0,Xe.l)((0,p.G)("menu-plot-analysis3"));if(-1===e.selectedSat||-1===e.lastSelectedSat())return t.toast("Select a Primary Satellite First!","caution"),void(0,Xe.l)((0,p.G)("menu-plot-analysis3"));if(Ht)return t.hideSideMenus(),void(Ht=!1);{t.hideSideMenus(),(0,g.$k)((0,p.G)("plot-analysis-menu3"),1e3),Ht=!0;const e=(0,p.G)("plot-analysis-chart3");return Ft=ot(lt(),Ht,Ft,e),setTimeout((()=>{Ft.resize()}),1e3),void(0,p.G)("menu-plot-analysis3").classList.add("bmenu-item-selected")}},ea=()=>{const e=l.I.get(r.Yv.UiManager);if(jt)return e.hideSideMenus(),void(jt=!1);{e.hideSideMenus(),(0,g.$k)((0,p.G)("plot-analysis-menu4"),1e3),jt=!0;const t=(0,p.G)("plot-analysis-chart4");return We.JE(t)||(Ut=((e,t,a,i)=>t?(We.JE(i)||((a=We.S1(i)).on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&l.I.get(r.Yv.CatalogManager).selectSat(e.data.id)})),a.setOption({title:{text:"Inclination vs Longitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis:{name:"Longitude",type:"value",position:"bottom"},yAxis:{name:"Inclination",type:"value",position:"left"},zAxis:{name:"Period",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:65},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:65}],visualMap:[{left:"left",top:"10%",dimension:2,min:1240,max:1640,itemWidth:30,itemHeight:500,calculable:!0,precision:.05,text:["Period (minutes)"],textGap:30,textStyle:{color:"#fff"},inRange:{},outOfRange:{opacity:0,symbol:"none"},controller:{inRange:{color:["#41577c"]},outOfRange:{color:["#999"]}}}],series:e.map((e=>({type:"scatter",name:e.name,data:e.value.map((e=>({name:e[3],id:e[4],value:[e[1],e[0],e[2]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})),a):a)((()=>{const e=[],t=[],a=[],i=[];return c.keepTrackApi.getCatalogManager().satData.forEach((s=>{if(s.TLE1&&s.type===at.g.PAYLOAD&&!(s.eccentricity>.1||s.period<1240||s.period>1640||s.inclination*b.I3>17))switch(s=c.keepTrackApi.getCatalogManager().getSat(s.id,r.C_.POSITION_ONLY),(s=Object.assign(Object.assign({},s),nt.x.eci2lla(s.position,c.keepTrackApi.getTimeManager().simulationTimeObj))).country){case"United States of America":case"United States":case"US":return void t.push([s.inclination*b.I3,s.lon,s.period,s.name,s.id]);case"Russian Federation":case"CIS":case"Russia":return void a.push([s.inclination*b.I3,s.lon,s.period,s.name,s.id]);case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":return void e.push([s.inclination*b.I3,s.lon,s.period,s.name,s.id]);default:return void i.push([s.inclination*b.I3,s.lon,s.period,s.name,s.id])}})),[{name:"USA",value:t},{name:"Other",value:i},{name:"Russia",value:a},{name:"China",value:e}]})(),jt,Ut,t)),setTimeout((()=>{Ut.resize()}),1e3),void(0,p.G)("menu-plot-analysis4").classList.add("bmenu-item-selected")}},ta=()=>{const e=l.I.get(r.Yv.UiManager);if(Vt)return e.hideSideMenus(),void(Vt=!1);{e.hideSideMenus(),(0,g.$k)((0,p.G)("plot-analysis-menu6"),1e3),Vt=!0;const t=(0,p.G)("plot-analysis-chart6");return We.JE(t)||(Bt=((e,t,a,i)=>t?(We.JE(i)||((a=We.S1(i)).on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&c.keepTrackApi.getCatalogManager().selectSat(e.data.id)})),a.setOption({title:{text:"Inclination vs Altitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis:{name:"Inclination",type:"value",position:"bottom"},yAxis:{name:"Altitude",type:"value",position:"left"},zAxis:{name:"Period",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:65},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:65}],visualMap:[{left:"left",top:"10%",dimension:2,min:80,max:250,itemWidth:30,itemHeight:500,calculable:!0,precision:.05,text:["Period (min)"],textGap:30,textStyle:{color:"#fff"},inRange:{},outOfRange:{opacity:0,symbol:"none"},controller:{inRange:{color:["#41577c"]},outOfRange:{color:["#999"]}}}],series:e.map((e=>({type:"scatter",name:e.name,data:e.value.map((e=>({name:e[3],id:e[4],value:[e[1],e[0],e[2]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})),a):a)((()=>{const e=c.keepTrackApi.getCatalogManager().satData,t=[],a=[],i=[],s=[];return e.forEach((e=>{if(!e.TLE1||e.type!==at.g.PAYLOAD)return;if(e.period>250)return;e=c.keepTrackApi.getCatalogManager().getSat(e.id,r.C_.POSITION_ONLY);const n=c.keepTrackApi.getTimeManager().simulationTimeObj;let o=(0,it.J0)(n.getUTCFullYear(),n.getUTCMonth()+1,n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds());o+=n.getUTCMilliseconds()*b.c1;const l=st.Sgp4.gstime(o);if(e=Object.assign(Object.assign({},e),st.Transforms.eci2lla(e.position,l)),!(h.$.getAlt(e.position,l)<80))switch(e.country){case"United States of America":case"United States":case"US":return void a.push([h.$.getAlt(e.position,l),e.inclination*b.I3,e.period,e.name,e.id]);case"Russian Federation":case"CIS":case"RU":case"SU":case"Russia":return void i.push([h.$.getAlt(e.position,l),e.inclination*b.I3,e.period,e.name,e.id]);case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":case"PRC":case"CN":return void t.push([h.$.getAlt(e.position,l),e.inclination*b.I3,e.period,e.name,e.id]);default:return void s.push([h.$.getAlt(e.position,l),e.inclination*b.I3,e.period,e.name,e.id])}})),[{name:"USA",value:a},{name:"Other",value:s},{name:"Russia",value:i},{name:"China",value:t}]})(),Vt,Bt,t)),setTimeout((()=>{Bt.resize()}),1e3),void(0,p.G)("menu-plot-analysis6").classList.add("bmenu-item-selected")}},aa=()=>{const e=l.I.get(r.Yv.UiManager);if(Yt)return e.hideSideMenus(),void(Yt=!1);{e.hideSideMenus(),(0,g.$k)((0,p.G)("plot-analysis-menu5"),1e3),Yt=!0;const t=(0,p.G)("plot-analysis-chart5");return We.JE(t)||(_t=((e,t,a,i)=>t?(We.JE(i)||((a=We.S1(i)).on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&l.I.get(r.Yv.CatalogManager).selectSat(e.data.id)})),a.setOption({title:{text:"Time vs Longitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{},xAxis:{name:"Longitude",type:"value",position:"bottom"},yAxis:{name:"Time",type:"value",position:"left"},zAxis:{name:"Mean Motion",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:1440},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:1440}],series:e.map((e=>({type:"line",name:e.name,data:e.data.map((t=>({name:e.country,id:e.satId,value:[t[1],t[0]]}))),emphasis:{itemStyle:{color:"#fff"}}})))})),a):a)((()=>{const e=c.keepTrackApi.getCatalogManager().satData,t=l.I.get(r.Yv.TimeManager).simulationTimeObj.getTime(),a=[];return e.forEach((e=>{if(!e.TLE1||e.type!==at.g.PAYLOAD)return;if(e.eccentricity>.1)return;if(e.period<1240)return;if(e.period>1640)return;switch(e.country){case"United States of America":case"United States":case"US":case"Russian Federation":case"CIS":case"Russia":case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":break;default:return}e=c.keepTrackApi.getCatalogManager().getSat(e.id,r.C_.POSITION_ONLY);const i=Ze.c.getLlaOfCurrentOrbit(e,24),s=[];i.forEach((e=>{const a=(e.time-t)/1e3/60;a>1440||a<0||s.push([a,e.lon*b.I3])})),a.push({name:e.name,satId:e.id,country:e.country,data:s})})),a})(),Yt,_t,t)),setTimeout((()=>{_t.resize()}),1e3),void(0,p.G)("menu-plot-analysis5").classList.add("bmenu-item-selected")}},ia=()=>{(0,g.kW)((0,p.G)("plot-analysis-menu"),1e3),(0,p.G)("menu-plot-analysis").classList.remove("bmenu-item-selected"),zt=!1,(0,g.kW)((0,p.G)("plot-analysis-menu2"),1e3),(0,p.G)("menu-plot-analysis2").classList.remove("bmenu-item-selected"),$t=!1,(0,g.kW)((0,p.G)("plot-analysis-menu3"),1e3),(0,p.G)("menu-plot-analysis3").classList.remove("bmenu-item-selected"),Ht=!1,(0,g.kW)((0,p.G)("plot-analysis-menu4"),1e3),(0,p.G)("menu-plot-analysis4").classList.remove("bmenu-item-selected"),jt=!1,(0,g.kW)((0,p.G)("plot-analysis-menu5"),1e3),(0,p.G)("menu-plot-analysis5").classList.remove("bmenu-item-selected"),Yt=!1,(0,g.kW)((0,p.G)("plot-analysis-menu6"),1e3),(0,p.G)("menu-plot-analysis6").classList.remove("bmenu-item-selected"),Vt=!1},sa=(e,t)=>{if(-1!==t){if(zt){(0,p.G)("menu-plot-analysis").classList.add("bmenu-item-selected");const e=(0,p.G)("plot-analysis-chart");Rt=et(tt(),zt,Rt,e)}if($t){(0,p.G)("menu-plot-analysis2").classList.add("bmenu-item-selected");const e=(0,p.G)("plot-analysis-chart2");Ot=qe(Qe(),$t,Ot,e)}if(-1!==l.I.get(r.Yv.CatalogManager).secondarySat&&Ht){(0,p.G)("menu-plot-analysis3").classList.add("bmenu-item-selected");const e=(0,p.G)("plot-analysis-chart3");Ft=ot(lt(),Ht,Ft,e)}}else ia()},na=a.p+"../img/sat3.png";var oa=a(6156);class la extends te.c{constructor(){super("Satellite View"),this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=na,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{c.keepTrackApi.getMainCamera().cameraType===oa.i.SATELLITE?(l.I.get(r.Yv.UiManager).hideSideMenus(),c.keepTrackApi.getMainCamera().cameraType=oa.i.FIXED_TO_SAT,(0,p.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")):-1!==l.I.get(r.Yv.CatalogManager).selectedSat?(c.keepTrackApi.getMainCamera().cameraType=oa.i.SATELLITE,(0,p.G)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(l.I.get(r.Yv.UiManager).toast("Select a Satellite First!","caution"),(0,Xe.l)((0,p.G)(this.bottomIconElementName)))},this.lastLongAudioTime=0}}const ra=new la,ca=a.p+"../audio/beep1.mp3",da=a.p+"../audio/button.mp3",pa=a.p+"../audio/error.mp3",ua=a.p+"../audio/genericBeep1.mp3",ga=a.p+"../audio/genericBeep2.mp3",ma=a.p+"../audio/genericBeep3.mp3",ha=a.p+"../audio/liftoff.mp3",ba=a.p+"../audio/pop.mp3",va=a.p+"../audio/switch.mp3",fa=a.p+"../audio/toggle-off.mp3",ka=a.p+"../audio/toggle-on.mp3",Sa=a.p+"../audio/whoosh1.mp3",ya=a.p+"../audio/whoosh2.mp3",Ma=a.p+"../audio/whoosh3.mp3",Aa=a.p+"../audio/whoosh4.mp3",Ta=a.p+"../audio/whoosh5.mp3",Ca=a.p+"../audio/whoosh6.mp3",wa=a.p+"../audio/whoosh7.mp3",xa=a.p+"../audio/whoosh8.mp3";class La extends te.c{constructor(){super("Sound Manager"),this.lastLongAudioTimne=0,this.isMute=!1,this.voices=[],this.sounds={standby:new Audio(ba),error:new Audio(pa),click:new Audio(va),beep1:new Audio(ca),genericBeep1:new Audio(ua),genericBeep2:new Audio(ga),genericBeep3:new Audio(ma),whoosh1:new Audio(Sa),whoosh2:new Audio(ya),whoosh3:new Audio(Ma),whoosh4:new Audio(Aa),whoosh5:new Audio(Ta),whoosh6:new Audio(Ca),whoosh7:new Audio(wa),whoosh8:new Audio(xa),button:new Audio(da),toggleOn:new Audio(ka),toggleOff:new Audio(fa),liftoff:new Audio(ha)},this.addJs=()=>{super.addJs(),l.I.registerSingleton(r.Yv.SoundManager,this),c.keepTrackApi.register({method:"uiManagerInit",cbName:this.PLUGIN_NAME,cb:()=>{this.voices=speechSynthesis.getVoices()}})}}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter((function(e){return"Google UK English Female"==e.name}))[0],window.speechSynthesis.speak(t)}play(e){if(this.isMute)return;if((0,p.G)("loading-screen").classList.contains("fullscreen"))return;let t=1;switch(e){case"genericBeep":return t=Math.floor(3*Math.random())+1,void this.sounds[`genericBeep${t}`].play();case"whoosh":return t=Math.floor(8*Math.random())+1,void this.sounds[`whoosh${t}`].play();case"error":if(this.lastLongAudioTimne+12e5>Date.now())return;return this.lastLongAudioTimne=Date.now(),void this.sounds.error.play();default:return void this.sounds[e].play()}}}const Ea=new La;var Ia=a(6339),Na=a(5661);const Ga=a.p+"../img/about.png";class Pa extends te.c{constructor(){super("About Menu"),this.bottomIconElementName="menu-about-icon",this.bottomIconImg=Ga,this.bottomIconLabel="About Menu",this.sideMenuElementName="about-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="about-menu" class="side-menu-parent start-hidden text-select">
    <div id="about-content" class="side-menu">
      <div class="row">
        <div id="mobile-warning" class="center-align">
          You are using the mobile version. Please try the desktop version for full functionality.
        </div>
        <br>
        <div class="row">
          <h5 class="center-align">About</h5>
          <div class="col s12">
            <p>KeepTrack is the only Astrodynamics software designed specifically for non-engineers.
            It only takes 20 megabytes of space (half of which is the satellite information), can run on a cellphone, and is available without installation - even offline.</p>
            <p>KeepTrack follows the design guidelines laid out by the <a style="color: #48f3e3 !important;" href="https://www.astrouxds.com/" target="_blank">
              United States Space Force Space and Missiles Center</a>. With most of the features you would expect out of software costing thousands of dollars, KeepTrack is completely free under the GNU General Public License!</p>
          </div>
        </div>
        <div class="row">
          <h5 class="center-align">Version</h5>
          <div id="versionNumber-text" class="col s12">
          </div>
        </div>
        <div class="row">
          <h5 class="center-align">Author</h5>
          <div class="col s12">
            Created by <a style="color: #48f3e3 !important;" href="https://github.com/thkruz/" target="_blank">Theodore Kruczek</a>
            to help visualize orbital calculations for application to Ground Based Radars and Optical
            Telescopes. Substantial help with the user interface was provided by <a style="color: #48f3e3 !important;" href="https://www.linkedin.com/in/leroiclaassen-webdev/" target="_blank">Le-Roi Claassen</a>.
            Based on the original work of <a style="color: #48f3e3 !important;" href="https://github.com/jeyoder/" target="_blank">James Yoder</a>
          </div>
        </div>
        <div class="row">
          <h5 class="center-align">Featured Users</h5>
          <div class="col s12">
            Used at the <a style="color: #48f3e3 !important;" href="https://www.youtube.com/embed/OfvkKBNup5A?autoplay=0&start=521&modestbranding=1" target="_blank">Combined Space Operations Center</a><br>
            Displayed in <a style="color: #48f3e3 !important;" href="https://espace.epfl.ch/event/cosmos-archaeology/" target="_blank">Cosmos Archaeology</a> at the University of Lausanne<br>
            Powering the ESA sponsored <a style="color: #48f3e3 !important;" href="https://clearspace.today" target="_blank">ClearSpace-1 Website</a><br>
            Used in Studio Roosegaarde's <a style="color: #48f3e3 !important;" href="https://www.studioroosegaarde.net/project/space-waste-lab" target="_blank">Space Waste Lab</a><br>
            Shown on <a style="color: #48f3e3 !important;" href="https://www.youtube.com/watch?v=gRhOkDapSGM" target="_blank">HBO's Vice Season 6 Episode 13</a><br>
            <br>
            Is my code aiding your project? <a style="color: #48f3e3 !important;" href="mailto: theodore.kruczek@gmail.com" target="_blank">Let me know!</a>
          </div>
        </div>
        <div class="row">
          <h5 class="center-align">Issues</h5>
          <div class="col s12">
            Please contribute to development by posting your ideas/issues/bugs to the
            <a style="color: #48f3e3 !important;" href="https://github.com/thkruz/keeptrack.space" target="_blank">public github repository</a>.
          </div>
        </div>
        <div class="row">
          <h5 class="center-align">Sources</h5>
          <div class="col s12">
            All information is open source and publically available information. Orbits are derived from
            TLEs found on public websites. Payload information is compiled from various
            public sources. US Sensor data was derived from MDA reports on enviromental impacts and
            congressional budget reports.
          </div>
        </div>
      </div>
    </div>
  </div>
`,this.helpTitle="About Menu",this.helpBody=c.keepTrackApi.html`The About Menu is a place to find information about KeepTrack.
  <br><br>
  Links to contributors and the source code are available here.
  Additionally you can find information about other projects that are currently using KeepTrack.
  If you have any questions or comments, please contact me at <a href="mailto:theodore.kruczek@gmail.com" target="_blank">
    theodore.kruczek@gmail.com
  </a>. If you would like to contribute to KeepTrack, please visit the <a href="https://github.com/thkruz/keeptrack.space" target="_blank">https://github.com/thkruz/keeptrack.space</a>
  <br><br>
  Frequently Asked Questions:<br>
  <br>
  Q: How is this different from stuffin.space?<br>
  A: KeepTrack is a complete rewrite of stuffin.space. It is written in TypeScript, uses WebGL 2.0 and new shaders, has a new rendering pipeline, has substantially more analysis features, and uses the <a href="https://github.com/thkruz/ootk/" target="_blank">Orbital Object Toolkit</a> for propagation. There isn't a single line of the original code remaining, but the core concept of two web workers for orbits and propagation remains...for now...<br>
  <br>
  Q: Why would a normal person use some of these features?<br>
  A: Many of the features were developed for specific individuals/agencies. They may not be very useful for the general public, but are included just in case.<br>
  <br>
  Q: Why is the mobile version so limited?<br>
  A: The mobile version is limited because it is not possible to run a full desktop application on a mobile device.<br>
  <br>
  Q: Why do the dots jitter sometimes?<br>
  A: The dots jitter because the orbit is being propagated once a second and interpolated between updates. If your PC becomes busy or the time changes the propagation thread will become out of sync for a moment from the main thread.<br>
  `}}const Da=new Pa,Ra=a.p+"../img/constellation.png";var Oa=a(2972);const Fa=a.p+"../img/planetarium.png";class Ua extends te.c{constructor(){super("Astronomy"),this.bottomIconElementName="menu-planetarium",this.bottomIconLabel="Planetarium View",this.bottomIconImg=Fa,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const{starManager:t}=c.keepTrackApi.programs,a=l.I.get(r.Yv.DrawManager),i=l.I.get(r.Yv.UiManager);if(this.isMenuButtonEnabled){if(!this.verifySensorSelected())return;c.keepTrackApi.getMainCamera().cameraType=oa.i.PLANETARIUM;try{(0,p.G)("cspocAllSensor").style.display="none",(0,p.G)("mwAllSensor").style.display="none",(0,p.G)("mdAllSensor").style.display="none",(0,p.G)("llAllSensor").style.display="none",(0,p.G)("rusAllSensor").style.display="none",(0,p.G)("prcAllSensor").style.display="none"}catch(e){}Oa.j.change("planetarium"),l.I.get(r.Yv.CatalogManager).isStarManagerLoaded&&t.clearConstellations(),null===(e=c.keepTrackApi.getPlugin(Ba))||void 0===e||e.setBottomIconToUnselected()}else c.keepTrackApi.getMainCamera().isPanReset=!0,c.keepTrackApi.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,a.glInit(),i.hideSideMenus(),l.I.get(r.Yv.OrbitManager).clearInViewOrbit(),c.keepTrackApi.getMainCamera().cameraType=oa.i.DEFAULT}}addJs(){super.addJs(),c.keepTrackApi.register({method:"setSensor",cbName:this.PLUGIN_NAME,cb:e=>{e?((0,p.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,p.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}const _a=new Ua;class Ba extends te.c{constructor(){super(Ba.PLUGIN_NAME),this.bottomIconElementName="menu-astronomy",this.bottomIconLabel="Astronomy View",this.bottomIconImg=Ra,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const{starManager:t}=c.keepTrackApi.programs,a=c.keepTrackApi.getCatalogManager(),i=l.I.get(r.Yv.OrbitManager),s=l.I.get(r.Yv.DrawManager),n=l.I.get(r.Yv.UiManager);if(this.isMenuButtonEnabled){if(!this.verifySensorSelected())return;a.isStarManagerLoaded&&t.drawAllConstellations(),i.clearInViewOrbit(),c.keepTrackApi.getMainCamera().cameraType=oa.i.ASTRONOMY,Oa.j.change("astronomy"),null===(e=c.keepTrackApi.getPlugin(Ua))||void 0===e||e.setBottomIconToUnselected()}else c.keepTrackApi.getMainCamera().isPanReset=!0,c.keepTrackApi.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,s.glInit(),n.hideSideMenus(),c.keepTrackApi.getMainCamera().cameraType=oa.i.DEFAULT,Oa.j.change("default"),a.isStarManagerLoaded&&t.clearConstellations(),(0,p.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}}addJs(){super.addJs(),c.keepTrackApi.register({method:"setSensor",cbName:this.PLUGIN_NAME,cb:e=>{e?((0,p.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,p.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}Ba.PLUGIN_NAME="Astronomy";const za=new Ba,$a=a.p+"../img/breakup.png";var Ha,ja,Ya=a(2575);!function(e){e[e.MeanAnomaly=1]="MeanAnomaly",e[e.RightAscensionOfAscendingNode=2]="RightAscensionOfAscendingNode",e[e.ArgumentOfPerigee=3]="ArgumentOfPerigee"}(Ha||(Ha={})),function(e){e[e.Near=0]="Near",e[e.Success=1]="Success",e[e.Error=2]="Error",e[e.Far=3]="Far"}(ja||(ja={}));class Va{constructor(e,t,a,i,s,n,o){this.sat=e,this.now=s,this.goalLat=t,this.goalLon=a,this.goalDirection=i,this.newMeana=null,this.newArgPer=null,this.goalAlt=n||null,this.raanOffset=o||0,this.lastLat=null,this.currentDirection=null,this.argPerCalcResults=null,this.meanACalcResults=null,this.raanCalcResults=null}rotateOrbitToLatLon(){return this.parseTle(),this.meanACalcResults=this.meanACalcLoop(this.meanACalcResults,this.now,this.goalDirection),this.meanACalcResults!==ja.Success?["Error","Failed to find a solution for Mean Anomaly"]:this.goalAlt>0&&this.argPerCalcLoop()!==ja.Success?["Error","Failed to find a solution for Argument of Perigee"]:(this.raanCalcResults=this.raanCalcLoop(this.raanCalcResults,this.raanOffset,this.now),this.raanCalcResults!==ja.Success?["Error","Failed to find a solution for Right Ascension of Ascending Node"]:[this.sat.TLE1,this.sat.TLE2])}argPerCalcLoop(){this.meanACalcResults=ja.Near;for(let e=0;e<3600;e+=1){let t=10*parseFloat(this.argPer)-100+e;if(t>3600&&(t-=3600),this.argPerCalcResults=this.argPerCalc(t.toString(),this.now),this.argPerCalcResults===ja.Success&&this.meanACalcResults===ja.Success&&this.currentDirection===this.goalDirection)break;if(this.argPerCalcResults===ja.Far&&(e+=49),this.argPerCalcResults===ja.Error)return ja.Error;if(this.meanACalcResults=this.meanACalcLoop2(),this.meanACalcResults===ja.Success)if(this.currentDirection!==this.goalDirection)e+=20;else if(this.argPerCalcResults===ja.Success)break;if(e=this.meanACalcResults===ja.Far?e+100:e,this.meanACalcResults===ja.Error)return ja.Error}return this.argPerCalcResults}meanACalcLoop2(){for(let e=0;e<5200;e+=1){if(this.meanACalcResults=this.meanACalc(e,this.now),this.meanACalcResults===ja.Success){if(this.currentDirection===this.goalDirection)break;e+=20}if(e=this.meanACalcResults===ja.Far?e+100:e,this.meanACalcResults===ja.Error)return ja.Error}return this.meanACalcResults}parseTle(){this.intl=this.sat.TLE1.substring(9,17),this.epochyr=this.sat.TLE1.substring(18,20),this.epochday=this.sat.TLE1.substring(20,32),this.meanmo=this.sat.TLE2.substring(52,63),this.argPer=Ya.J.pad0((this.sat.argPe*b.I3).toFixed(4),8),this.inc=Ya.J.pad0((this.sat.inclination*b.I3).toFixed(4),8),this.ecen=this.sat.eccentricity.toFixed(7).substring(2,9),this.TLE1Ending=this.sat.TLE1.substring(32,71)}meanACalcLoop(e,t,a){for(let i=0;i<5200;i+=1){if((e=this.meanACalc(i,t))===ja.Success){if(this.currentDirection===a)break;i+=20}e===ja.Far&&(i+=100)}return e}raanCalcLoop(e,t,a){for(let i=0;i<52e3&&(e=this.raanCalc(i,t,a))!==ja.Success;i+=1)e===ja.Far&&(i+=1e3);return e}meanACalc(e,t){const a=this.sat;let i=a.satrec||st.Sgp4.createSatrec(a.TLE1,a.TLE2);e/=10;const s=Ya.J.pad0(e.toFixed(4),8),n=Ya.J.pad0((a.raan*b.I3).toFixed(4),8),o=this.newArgPer?Ya.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):Ya.J.pad0((a.argPe*b.I3).toFixed(4),8),l=a.TLE1.substr(32,39),r="1 "+a.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+l,c="2 "+a.sccNum+" "+this.inc+" "+n+" "+this.ecen+" "+o+" "+s+" "+this.meanmo+"    10";i=st.Sgp4.createSatrec(r,c);const d=this.getOrbitByLatLonPropagate(t,i,Ha.MeanAnomaly);return d===ja.Success&&(a.TLE1=r,a.TLE2=c,this.newMeana=s),d}getOrbitByLatLonPropagate(e,t,a){const{m:i,gmst:s}=h.$.calculateTimeVariables(e,t),n=st.Sgp4.propagate(t,i).position;if(isNaN(n.x)||isNaN(n.y)||isNaN(n.z))return ja.Error;const o=st.Transforms.eci2lla(n,s);let{lat:l,lon:r,alt:c}=o;const d=st.Transforms.getDegLat(l),p=st.Transforms.getDegLon(r);if(this.lastLat=this.lastLat?this.lastLat:d,a===Ha.MeanAnomaly){if(d===this.lastLat)return 0;d>this.lastLat&&(this.currentDirection="N"),d<this.lastLat&&(this.currentDirection="S"),this.lastLat=d}return a===Ha.MeanAnomaly&&d>this.goalLat-Va.MAX_LAT_ERROR&&d<this.goalLat+Va.MAX_LAT_ERROR||a===Ha.RightAscensionOfAscendingNode&&p>this.goalLon-Va.MAX_LON_ERROR&&p<this.goalLon+Va.MAX_LON_ERROR||a===Ha.ArgumentOfPerigee&&c>this.goalAlt-Va.MAX_ALT_ERROR&&c<this.goalAlt+Va.MAX_ALT_ERROR?ja.Success:(a!==Ha.MeanAnomaly||d>this.goalLat-11&&d<this.goalLat+11)&&(a!==Ha.RightAscensionOfAscendingNode||p>this.goalLon-11&&p<this.goalLon+11)?a===Ha.ArgumentOfPerigee&&(c<this.goalAlt-100||c>this.goalAlt+100)?ja.Far:ja.Near:ja.Far}raanCalc(e,t,a){const i=e;e=(e/=100)>360?e-360:e;const s=Ya.J.pad0(e.toFixed(4),8),n=this.newArgPer?Ya.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):Ya.J.pad0((this.sat.argPe*b.I3).toFixed(4),8),o="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,l="2 "+this.sat.sccNum+" "+this.inc+" "+s+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10",r=st.Sgp4.createSatrec(o,l),c=this.getOrbitByLatLonPropagate(a,r,Ha.RightAscensionOfAscendingNode);if(c===ja.Success){e=(e=(e=i/100+t)>360?e-360:e)<0?e+360:e;const a=Ya.J.pad0(e.toFixed(4),8),s="2 "+this.sat.sccNum+" "+this.inc+" "+a+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10";this.sat.TLE1=o,this.sat.TLE2=s}return c}argPerCalc(e,t){const a=this.newMeana,i=Ya.J.pad0((this.sat.raan*b.I3).toFixed(4),8);e=Ya.J.pad0((parseFloat(e)/10).toFixed(4),8);const s="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,n="2 "+this.sat.sccNum+" "+this.inc+" "+i+" "+this.ecen+" "+e+" "+a+" "+this.meanmo+"    10",o=st.Sgp4.createSatrec(s,n),l=this.getOrbitByLatLonPropagate(t,o,Ha.ArgumentOfPerigee);return l===ja.Success&&(this.sat.TLE1=s,this.sat.TLE2=n,this.newArgPer=e),l}}Va.MAX_LAT_ERROR=.1,Va.MAX_LON_ERROR=.1,Va.MAX_ALT_ERROR=30;var Ja=a(266);class Ka extends te.c{constructor(){super(Ka.PLUGIN_NAME),this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=$a,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=c.keepTrackApi.getCatalogManager().getSat(c.keepTrackApi.getCatalogManager().selectedSat,r.C_.EXTRA_ONLY);if((null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_)return S.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="breakup-menu" class="side-menu-parent start-hidden text-select">
    <div id="breakup-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Breakup Simulator</h5>
        <form id="breakup" class="col s12">
          <div class="input-field col s12">
            <input disabled value="00005" id="hc-scc" type="text" />
            <label for="disabled" class="active">Satellite SCC#</label>
          </div>
          <div class="input-field col s12">
            <select id="hc-inc">
              <option value="0">0 Degrees</option>
              <option value="0.1">0.1 Degrees</option>
              <option value="0.2" selected>0.2 Degrees</option>
              <option value="0.3">0.3 Degrees</option>
              <option value="0.4">0.4 Degrees</option>
              <option value="0.5">0.5 Degrees</option>
              <option value="0.6">0.6 Degrees</option>
              <option value="0.7">0.7 Degrees</option>
              <option value="0.8">0.8 Degrees</option>
              <option value="0.9">0.9 Degrees</option>
              <option value="1">1 Degrees</option>
            </select>
            <label>Inclination Variation</label>
          </div>
          <div class="input-field col s12">
            <select id="hc-per">
              <option value="0">0 Percent</option>
              <option value="0.005">0.5 Percent</option>
              <option value="0.01">1 Percent</option>
              <option value="0.015">1.5 Percent</option>
              <option value="0.02" selected>2 Percent</option>
              <option value="0.025">2.5 Percent</option>
              <option value="0.03">3 Percent</option>
              <option value="0.035">3.5 Percent</option>
              <option value="0.04">4 Percent</option>
              <option value="0.045">4.5 Percent</option>
              <option value="0.05">5 Percent</option>
            </select>
            <label>Period Variation</label>
          </div>
          <div class="input-field col s12">
            <select id="hc-raan">
            <option value="0">0 Degrees</option>
              <option value="0.1">0.1 Degrees</option>
              <option value="0.2" selected>0.2 Degrees</option>
              <option value="0.3">0.3 Degrees</option>
              <option value="0.4">0.4 Degrees</option>
              <option value="0.5">0.5 Degrees</option>
              <option value="0.6">0.6 Degrees</option>
              <option value="0.7">0.7 Degrees</option>
              <option value="0.8">0.8 Degrees</option>
              <option value="0.9">0.9 Degrees</option>
              <option value="1">1 Degrees</option>
            </select>
            <label>Right Ascension Variation</label>
          </div>
          <div class="input-field col s12">
            <select id="hc-count">
              <option value="10">10</option>
              <option value="25" selected>25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select>
            <label>Pieces</label>
          </div>
          <div class="center-align">
            <button class="btn btn-ui waves-effect waves-light" type="submit" name="action">Create Breakup &#9658;</button>
          </div>
        </form>
      </div>
    </div>
  </div>`,this.helpTitle="Breakup Menu",this.helpBody=c.keepTrackApi.html`The Breakup Menu is a tool for simulating the breakup of a satellite.
  <br><br>
  By modifying duplicating and modifying a satellite's orbit we can model the breakup of a satellite.
  After selecting a satellite and opening the menu, the user can select:
  <ul style="margin-left: 40px;">
    <li>Inclination Variation</li>
    <li>RAAN Variation</li>
    <li>Period Variation</li>
    <li>Number of Breakup Pieces</li>
  </ul>
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`}updateSccNumInMenu_(){if(!this.isMenuButtonEnabled)return;const e=c.keepTrackApi.getCatalogManager().getSat(c.keepTrackApi.getCatalogManager().selectedSat,r.C_.EXTRA_ONLY);(0,p.G)("hc-scc").value=e.sccNum}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,p.G)("breakup").addEventListener("submit",(e=>{e.preventDefault(),(0,u.QP)((()=>this.onSubmit()))}))}}),c.keepTrackApi.register({method:c.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.sccNum)?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonEnabled&&(this.closeSideMenu(),S.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&this.updateSccNumInMenu_()):(this.isMenuButtonEnabled&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}onSubmit(){const e=c.keepTrackApi.getTimeManager(),t=c.keepTrackApi.getCatalogManager();let a=t.getIdFromObjNum(parseInt((0,p.G)("hc-scc").value));const i=t.getSat(a),s=i,n=nt.x.eci2lla(i.position,e.simulationTimeObj),o=n.lat,d=n.lon,u=e.simulationTimeObj,g=h.$.getDirection(i,e.simulationTimeObj);"Error"===g&&S.x.warn("Cannot calculate direction of satellite. Try again later.");const m=Ja.l.currentEpoch(u);if(i.TLE1=i.TLE1.substr(0,18)+m[0]+m[1]+i.TLE1.substr(32),c.keepTrackApi.getMainCamera().isAutoPitchYawToTarget=!1,i.apogee-i.perigee>this.maxDifApogeeVsPerigee_)return void S.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const b=i.apogee-i.perigee<300?0:n.alt;let v=new Va(i,o,d,g,u,b).rotateOrbitToLatLon();const f=v[0],k=v[1];t.satCruncher.postMessage({typ:"satEdit",id:a,TLE1:f,TLE2:k});const y=l.I.get(r.Yv.OrbitManager);y.changeOrbitBufferData(a,f,k);const M=parseFloat((0,p.G)("hc-per").value),A=parseFloat((0,p.G)("hc-inc").value),T=parseFloat((0,p.G)("hc-raan").value),C=parseInt((0,p.G)("hc-count").value),w=15e-5,x=i.eccentricity;let L=0;for(let l=0;l<=4&&!(L>=C);l++){a=t.getIdFromObjNum(9e4+L),t.getSat(a);let r=s;const c=-T/2+T*(l/4),p=i.apogee-i.perigee<300?0:n.alt;let m=new Va(r,o,d,g,u,p,c).rotateOrbitToLatLon();if("Error"===m[0]&&(m=new Va(r,o,d,g,new Date(u.getTime()+1),p,c).rotateOrbitToLatLon(),"Error"===m[0]))return void S.x.error(new Error(m[1]),"breakup.ts","Error creating breakup!");let b=m[0],v=m[1];for(;L<(l+1)*C/4;L++){let i=parseFloat(k.substr(8,8));i=i+Math.random()*A*2-A;const s=Ya.J.pad0(i.toFixed(4),8);if(8!==s.length)throw new Error(`Inclination length is not 8 - ${s} - ${k}`);r.eccentricity=x,r.eccentricity+=Math.random()*w*2-w;let n=parseFloat(v.substr(52,10));n=n+Math.random()*M*2-M;const o=Ya.J.pad0(n.toFixed(8),11);if(11!==o.length)throw new Error(`meanmo length is not 11 - ${o} - ${v}`);if(a=t.getIdFromObjNum(8e4+L),b=`1 ${8e4+L}`+b.substr(7),v=`2 ${8e4+L} ${s} ${v.substr(17,35)}${o}${v.substr(63)}`,69!==b.length)throw new Error(`Invalid TLE1: length is not 69 - ${b}`);if(69!==v.length)throw new Error(`Invalid TLE1: length is not 69 - ${v}`);let l;r=t.getSat(a),r.TLE1=b,r.TLE2=v,r.active=!0,r.satrec=null;try{l=st.Sgp4.createSatrec(b,v)}catch(e){return void S.x.error(e,"breakup.ts","Error creating breakup!")}h.$.altitudeCheck(l,e.simulationTimeObj)>1?(t.satCruncher.postMessage({typ:"satEdit",id:a,TLE1:b,TLE2:v}),y.changeOrbitBufferData(a,b,v)):S.x.warn("Breakup Generator Failed")}}c.keepTrackApi.getUiManager().doSearch(`${i.sccNum},Analyst`)}}Ka.PLUGIN_NAME="Breakup";const Wa=new Ka;class Xa{static getColors(e){let t,a;switch(e){case"Top Secret//SCI":t="#fce93a",a="black";break;case"Top Secret":t="#ff8c00",a="black";break;case"Secret":t="#ff0000",a="white";break;case"Confidential":t="#0033a0",a="white";break;case"CUI":t="#512b85",a="white";break;case"Unclassified":t="#007a33",a="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:a}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class Za extends te.c{constructor(){super("Classification"),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateClassificationString(e=this.classificationString_,t="#ffffff",a="#000000"){this.isClassificationContainerLoaded_||this.loadClassificationContainer_(),""===e?((0,p.G)("classification-container").style.display="none",this.updateTopMenuHeight_(!1)):((0,p.G)("classification-container").style.display="flex",this.updateTopMenuHeight_(!0)),(0,p.G)("classification-string").innerHTML=e;const i=(0,p.G)("classification-container");if(i.style.fontWeight="500",Xa.isValidClassification(e)){const i=Xa.getColors(e);t=i.backgroundColor,a=i.color}i.style.backgroundColor=t,i.style.color=a,this.classificationString_=e}addHtml(){super.addHtml(),c.keepTrackApi.register({method:"uiManagerInit",cbName:this.PLUGIN_NAME,cb:this.uiManagerInit_.bind(this)})}loadClassificationContainer_(){const e=document.createElement("div");e.innerHTML=c.keepTrackApi.html`<span id="classification-string"></span>`,e.id="classification-container",e.style.cssText="\n      height: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      ",(0,p.G)("keeptrack-main-container").insertBefore(e,(0,p.G)("keeptrack-main-container").firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr&&(this.loadClassificationContainer_(),this.updateClassificationString())}updateTopMenuHeight_(e){if(this.isExpanded_===e)return;let t=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(t)&&(t=0),document.documentElement.style.setProperty("--top-menu-height",t+(e?20:-20)+"px"),this.isExpanded_=e}}const qa=new Za,Qa=a.p+"../img/socrates.png";class ei extends te.c{constructor(){super(ei.PLUGIN_NAME),this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=Qa,this.bottomIconLabel="Collisions",this.sideMenuElementName="socrates-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="socrates-menu" class="side-menu-parent start-hidden text-select">
    <div id="socrates-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible collisions</h5>
        <table id="socrates-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=c.keepTrackApi.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.socratesOnSatCruncher=null,this.collisionList=[],this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&this.parseCollisionData_()}}uiManagerFinal(){(0,p.G)("socrates-menu").addEventListener("click",(e=>{(0,u.QP)((()=>{const t=e.target.parentElement;if(!t.classList.contains("socrates-object"))return;const a=t.attributes.hiddenrow.value;null!==a&&this.eventClicked_(a)}))}))}addJs(){super.addJs(),c.keepTrackApi.register({method:"uiManagerFinal",cbName:"collisions",cb:this.uiManagerFinal.bind(this)}),c.keepTrackApi.register({method:"onCruncherMessage",cbName:"collisions",cb:()=>{null!==this.socratesOnSatCruncher&&(c.keepTrackApi.getCatalogManager().setSelectedSat(this.socratesOnSatCruncher),this.socratesOnSatCruncher=null)}})}parseCollisionData_(){0===this.collisionList.length&&fetch("./SOCRATES.html").then((e=>{e.text().then((e=>{const t=(new DOMParser).parseFromString(e,"text/html");this.processSocratesHtm(t),0===this.collisionList.length&&S.x.warn("No collisions data found!")}))}))}eventClicked_(e){const t=new Date;c.keepTrackApi.getTimeManager().changeStaticOffset(this.collisionList[e].toca.getTime()-t.getTime()-3e4),c.keepTrackApi.getMainCamera().isAutoPitchYawToTarget=!1,c.keepTrackApi.getUiManager().doSearch(`${this.collisionList[e].sat1},${this.collisionList[e].sat2}`);const a=l.I.get(r.Yv.CatalogManager);this.socratesOnSatCruncher=a.getIdFromObjNum(parseInt(this.collisionList[e].sat1))}processSocratesHtm(e){try{const t=e.getElementsByClassName("center outline")[0],a=Array.from(t.getElementsByTagName("tr")).filter((e=>!e.classList.contains("header"))),i=a.map((e=>Array.from(e.getElementsByTagName("td")))).map((e=>e.map((e=>e.innerText))));for(let e=0;e<i.length;e+=2){const t={sat1:i[e][1],sat2:i[e+1][1],toca:new Date(i[e][4]),minRng:parseFloat(i[e][5]),maxProb:parseFloat(i[e+1][5]),relSpeed:parseFloat(i[e][6])};this.collisionList.push(t)}const s=(0,p.G)("socrates-table");s.innerHTML="";let n=s.insertRow(),o=n.insertCell();o.appendChild(document.createTextNode("TOCA")),o.setAttribute("style","text-decoration: underline");let l=n.insertCell();l.appendChild(document.createTextNode("#1")),l.setAttribute("style","text-decoration: underline");let r=n.insertCell();r.appendChild(document.createTextNode("#2")),r.setAttribute("style","text-decoration: underline");let c=n.insertCell();c.appendChild(document.createTextNode("Probability")),c.setAttribute("style","text-decoration: underline");for(let e=0;e<this.collisionList.length;e++)n=s.insertRow(),n.setAttribute("class","socrates-object link"),n.setAttribute("hiddenrow",e.toString()),o=n.insertCell(),o.appendChild(document.createTextNode(this.collisionList[e].toca.toISOString().slice(0,19).replace("T"," "))),l=n.insertCell(),l.appendChild(document.createTextNode(this.collisionList[e].sat1)),r=n.insertCell(),r.appendChild(document.createTextNode(this.collisionList[e].sat2)),c=n.insertCell(),c.appendChild(document.createTextNode(this.collisionList[e].minRng.toString()))}catch(e){S.x.warn("Error parsing SOCRATES data!")}}}ei.PLUGIN_NAME="collisions";const ti=new ei,ai=a.p+"../img/colors.png";var ii=a(3825);class si extends te.c{constructor(){super(si.PLUGIN_NAME),this.bottomIconImg=ai,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="color-scheme-menu" class="side-menu-parent start-hidden text-select">
    <div id="colors-menu" class="side-menu">
      <ul>
        <h5 class="center-align">Color Schemes</h5>
        <li class="divider"></li>
        <li class="menu-selectable" data-color="default">Object Type</li>
        <li class="menu-selectable" data-color="sunlight">Sunlight</li>
        <li class="menu-selectable" data-color="velocity">Velocity</li>
        <li class="menu-selectable" data-color="neighbors">Orbit Density</li>
        <li class="menu-selectable" data-color="rcs">Radar Cross Section</li>
        <li class="menu-selectable" data-color="smallsats">Small Satellites</li>
        <li class="menu-selectable" data-color="countries">Countries</li>
        <li class="menu-selectable" data-color="near-earth">Near Earth</li>
        <li class="menu-selectable" data-color="deep-space">Deep Space</li>
        <li class="menu-selectable" data-color="elset-age">Elset Age</li>
        <li class="menu-selectable" data-color="lost-objects">Lost Objects</li>
      </ul>
    </div>
  </div>`,this.helpTitle="Colors Menu",this.helpBody=c.keepTrackApi.html`The Colors Menu is a place to change the color theme used to render the objects.
<br><br>
The various themes can change the colors based on the objects' orbits, objects' characteristics, or the objects' relation to sun and/or earth.
`,this.rmbL1ElementName="colors-rmb",this.rmbL1Html=c.keepTrackApi.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Color Scheme &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.rmbMenuOrder=50,this.rmbL2ElementName="colors-rmb-menu",this.rmbL2Html=c.keepTrackApi.html`
  <ul class='dropdown-contents'>
    <li id="colors-default-rmb"><a href="#">Object Types</a></li>
    <li id="colors-rcs-rmb"><a href="#">Radar Cross Section</a></li>
    <li id="colors-density-rmb"><a href="#">Orbit Density</a></li>
    <li id="colors-sunlight-rmb"><a href="#">Sunlight Status</a></li>
    <li id="colors-country-rmb"><a href="#">Country</a></li>
    <li id="colors-velocity-rmb"><a href="#">Velocity</a></li>
    <li id="colors-ageOfElset-rmb"><a href="#">Age of Elset</a></li>
  </ul>`,this.rmbCallback=e=>{try{super.rmbCallback(e)}catch(e){}switch(e){case"colors-default-rmb":si.colorsMenuClick("default");break;case"colors-rcs-rmb":si.colorsMenuClick("rcs");break;case"colors-density-rmb":si.colorsMenuClick("neighbors");break;case"colors-sunlight-rmb":si.colorsMenuClick("sunlight");break;case"colors-country-rmb":si.colorsMenuClick("countries");break;case"colors-velocity-rmb":si.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":si.colorsMenuClick("elset-age")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{document.getElementById("colors-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){const e=this.dataset.color;si.colorsMenuClick(e)}))}))}})}}si.PLUGIN_NAME="Color Menu",si.colorsMenuClick=e=>{const t=c.keepTrackApi.getCatalogManager(),a=c.keepTrackApi.getColorSchemeManager(),i=c.keepTrackApi.getUiManager();switch(t.setSelectedSat(-1),"sunlight"!==e&&t.satCruncher.postMessage({isSunlightView:!1}),e){case"default":Oa.j.change("default"),a.setColorScheme(a.default,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"velocity":Oa.j.change("velocity"),a.setColorScheme(a.velocity,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"sunlight":t.satCruncher.postMessage({isSunlightView:!0}),Oa.j.change("sunlight"),i.colorSchemeChangeAlert(a.sunlight),(0,ii.J)(t.satCruncher,(()=>{a.setColorScheme(a.sunlight,!0)}),(e=>e.satInSun));break;case"near-earth":Oa.j.change("near"),a.setColorScheme(a.leo,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"deep-space":Oa.j.change("deep"),a.setColorScheme(a.geo,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"elset-age":(0,u.QP)((()=>{Oa.j.change("ageOfElset"),a.setColorScheme(a.ageOfElset,!0),i.colorSchemeChangeAlert(a.currentColorScheme)}));break;case"lost-objects":(0,p.G)("search").value="",(0,u.QP)((()=>{settingsManager.lostSatStr="",a.setColorScheme(a.lostobjects,!0),(0,p.G)("search").value=settingsManager.lostSatStr,i.colorSchemeChangeAlert(a.currentColorScheme),i.doSearch((0,p.G)("search").value)}));break;case"rcs":Oa.j.change("rcs"),a.setColorScheme(a.rcs,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"smallsats":Oa.j.change("small"),a.setColorScheme(a.smallsats,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"neighbors":Oa.j.change("neighbors"),a.setColorScheme(a.neighbors,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"countries":Oa.j.change("countries"),null!==c.keepTrackApi.getGroupsManager().selectedGroup?a.setColorScheme(a.groupCountries,!0):a.setColorScheme(a.countries,!0),i.colorSchemeChangeAlert(a.currentColorScheme)}c.keepTrackApi.getUiManager().hideSideMenus()};const ni=new si;var oi=a(9522);class li extends te.c{constructor(){super("Debris Screening"),this.bottomIconCallback=()=>{if(this.verifySatelliteSelected()&&this.isMenuButtonEnabled){const e=l.I.get(r.Yv.CatalogManager),t=e.getSat(e.selectedSat,r.C_.EXTRA_ONLY);(0,p.G)(`${this.formPrefix_}-scc`).value=t.sccNum}},this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=Ga,this.bottomIconLabel="Debris Screening",this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="${this.sideMenuElementName}" class="side-menu-parent start-hidden text-select">
    <div id="${this.sideMenuElementName}-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Debris Screening</h5>
        <form id="${this.sideMenuElementName}-form" class="col s12">
          <div class="input-field col s12">
            <input disabled value="00005" id="${this.formPrefix_}-scc" type="text" />
            <label for="disabled" class="active">Satellite SCC#</label>
          </div>
          <div class="input-field col s12">
            <select id="${this.formPrefix_}-u">
              <option value="0.25">0.25 Km</option>
              <option value="0.5" selected>0.5 Km</option>
              <option value="0.75">0.75 Km</option>
              <option value="1">1 Km</option>
              <option value="1.25">1.25 Km</option>
              <option value="1.5">1.5 Km</option>
            </select>
            <label>U (Radial)</label>
          </div>
          <div class="input-field col s12">
            <select id="${this.formPrefix_}-v">
              <option value="10">10 Km</option>
              <option value="15">15 Km</option>
              <option value="20">20 Km</option>
              <option value="25" selected>25 Km</option>
              <option value="30">30 Km</option>
              <option value="35">35 Km</option>
              <option value="40">40 Km</option>
            </select>
            <label>V (Velocity Vector)</label>
          </div>
          <div class="input-field col s12">
            <select id="${this.formPrefix_}-w">
              <option value="10">10 Km</option>
              <option value="15">15 Km</option>
              <option value="20">20 Km</option>
              <option value="25" selected>25 Km</option>
              <option value="30">30 Km</option>
              <option value="35">35 Km</option>
              <option value="40">40 Km</option>
            </select>
            <label>W (Out-of-Plane)</label>
          </div>
          <div class="input-field col s12">
            <select id="${this.formPrefix_}-time">
              <option value="1">1 Hour</option>
              <option value="4">4 Hours</option>
              <option value="8" selected>8 Hours</option>
              <option value="24">24 Hours</option>
              <option value="48">48 Hours</option>
              <option value="72">72 Hours</option>
            </select>
            <label>Assessment Length</label>
          </div>
          <div class="row">
            <div class="center-align">
              <button id="${this.sideMenuElementName}-vis" class="btn btn-ui waves-effect waves-light">Draw Search Box &#9658;</button>
            </div>
          </div>
          <div class="row">
            <div class="center-align">
              <button id="${this.sideMenuElementName}-clear-vis" class="btn btn-ui waves-effect waves-light">Clear Search Box &#9658;</button>
            </div>
          </div>
          <div class="row">
            <div class="center-align">
              <button class="btn btn-ui waves-effect waves-light" type="submit" name="action">Screen for Debris &#9658;</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
`,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.helpTitle="Debris Screening",this.helpBody=c.keepTrackApi.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=c.keepTrackApi.html`<img src="${Ga}" />
  `}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,p.G)(`${this.sideMenuElementName}-form`).addEventListener("submit",(e=>{e.preventDefault(),(0,u.QP)((()=>this.onFormSubmit()))})),(0,p.G)(`${this.sideMenuElementName}-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,u.QP)((()=>this.onVisClick()))})),(0,p.G)(`${this.sideMenuElementName}-clear-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,u.QP)((()=>li.onClearVisClick()))}))}}),c.keepTrackApi.register({method:c.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled()}})}onVisClick(){const e=l.I.get(r.Yv.DrawManager),t=parseFloat((0,p.G)(`${this.formPrefix_}-u`).value),a=parseFloat((0,p.G)(`${this.formPrefix_}-v`).value),i=parseFloat((0,p.G)(`${this.formPrefix_}-w`).value);e.sceneManager.searchBox.setCubeSize(t,a,i)}static onClearVisClick(){l.I.get(r.Yv.DrawManager).sceneManager.searchBox.setCubeSize(0,0,0)}onFormSubmit(){let e=c.keepTrackApi.getCatalogManager().getIdFromObjNum(parseInt((0,p.G)(`${this.formPrefix_}-scc`).value));const t=parseFloat((0,p.G)(`${this.formPrefix_}-u`).value),a=parseFloat((0,p.G)(`${this.formPrefix_}-v`).value),i=parseFloat((0,p.G)(`${this.formPrefix_}-w`).value),s=parseFloat((0,p.G)(`${this.formPrefix_}-time`).value),n=c.keepTrackApi.getCatalogManager().getSat(e,r.C_.SKIP_POS_VEL),o=c.keepTrackApi.getCatalogManager().satData.filter((e=>!(!e.satrec||e.perigee>n.apogee||n.perigee>e.apogee))).map((e=>e.id));let l=0,d=[];for(let e=0;e<60*s;e++){l=1e3*e*60;const s=c.keepTrackApi.getTimeManager().getOffsetTimeObj(l),{m:p}=h.$.calculateTimeVariables(s,n.satrec),u=st.Sgp4.propagate(n.satrec,p);for(let e=0;e<o.length;e++){const n=c.keepTrackApi.getCatalogManager().getSat(o[e],r.C_.SKIP_POS_VEL);if(!n||!n.satrec)continue;const{m:l}=h.$.calculateTimeVariables(s,n.satrec),p=st.Sgp4.propagate(n.satrec,l);if(!p){o.splice(e,1);break}const g=nt.x.sat2ric({position:u.position,velocity:u.velocity},{position:p.position,velocity:p.velocity});if(Math.abs(g.position[0])<t&&Math.abs(g.position[1])<a&&Math.abs(g.position[2])<i){console.log(`${n.sccNum} at ${new Date(s)}`),d.push(n.sccNum),o.splice(e,1);break}}}d=d.filter(((e,t,a)=>a.indexOf(e)===t));const u=d.join(",");u.replace(/,\s*$/u,""),c.keepTrackApi.getUiManager().doSearch(u)}}const ri=new li;var ci=a(769);const di=a.p+"../img/gps.png";var pi=a(4032),ui=a.n(pi),gi=a(2658);class mi{static calculateDops(e){let t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},a=e.length;if(a<4)return t;const i=ui().rep([a,4],0);for(let t=1;t<=a;t++){const{az:a,el:s}=e[t-1],n=[Math.cos(s*b.qW)*Math.sin(a*b.qW),Math.cos(s*b.qW)*Math.cos(a*b.qW),Math.sin(s*b.qW),1];ui().setBlock(i,[t-1,0],[t-1,3],[n])}const s=ui().dot(ui().transpose(i),i),n=ui().inv(s),o=Math.sqrt(n[0][0]+n[1][1]+n[2][2]),l=Math.sqrt(n[0][0]+n[1][1]),r=Math.sqrt(n[0][0]+n[1][1]+n[2][2]+n[3][3]),c=Math.sqrt(n[2][2]),d=Math.sqrt(n[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,a,i,s,n=10){if(void 0===a||void 0===i)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};let o=a*b.qW,l=i*b.qW;null!=s||(s=0);const{gmst:r}=h.$.calculateTimeVariables(e);let c=[];return t.forEach((e=>{const t=st.Transforms.ecf2rae({lon:l,lat:o,alt:s},st.Transforms.eci2ecf(e.position,r)),a={az:t.az*b.I3,el:t.el*b.I3};a.el>n&&c.push(a)})),mi.calculateDops(c)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");let t=(0,p.G)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let a=t.insertRow(),i=a.insertCell();i.appendChild(document.createTextNode("Time"));let s=a.insertCell();s.appendChild(document.createTextNode("HDOP"));let n=a.insertCell();n.appendChild(document.createTextNode("PDOP"));let o=a.insertCell();o.appendChild(document.createTextNode("GDOP"));for(let l of e)a=t.insertRow(),i=a.insertCell(),i.appendChild(document.createTextNode((0,gi.v)(l.time,"isoDateTime",!0))),s=a.insertCell(),s.appendChild(document.createTextNode(l.dops.hdop)),n=a.insertCell(),n.appendChild(document.createTextNode(l.dops.pdop)),o=a.insertCell(),o.appendChild(document.createTextNode(l.dops.gdop))}static getDopsList(e,t,a,i,s,n){let o=[];for(let l=0;l<1440;l++){const r=e(60*l*b.s9);let c=mi.getDops(r,t,a,i,s,n);o.push({time:r,dops:c})}return o}}class hi extends te.c{constructor(){super(hi.PLUGIN_NAME),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=di,this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&(0,u.QP)(hi.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=c.keepTrackApi.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
    <br><br>
    HDOP is the Horizontal Dilution of Precision. It is a measure of the accuracy of the horizontal position.
    <br><br>
    PDOP is the Position Dilution of Precision. It is a measure of the accuracy of the position.
    <br><br>
    GDOP is the Geometric Dilution of Precision. It is a measure of the accuracy of the position.
  `,this.sideMenuElementName="dops-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="${this.sideMenuElementName}" class="side-menu-parent start-hidden text-select">
    <div id="dops-content" class="side-menu">
      <form id="dops-form">
        <div class="switch row">
          <h5 class="center-align">DOP Table</h5>
          <div class="input-field col s3">
            <input value="41" id="dops-lat" type="text" class="tooltipped" data-position="right"
              data-delay="50" data-tooltip="Latitude in Degrees">
            <label for="dops-lat" class="active">Latitude</label>
          </div>
          <div class="input-field col s3">
            <input value="-71" id="dops-lon" type="text" class="tooltipped" data-position="right"
              data-delay="50" data-tooltip="Longitude in Degrees">
            <label for="dops-lon" class="active">Longitude</label>
          </div>
          <div class="input-field col s3">
            <input value="-71" id="dops-alt" type="text" class="tooltipped" data-position="right"
              data-delay="50" data-tooltip="Altitude in KM">
            <label for="dops-lon" class="active">Altitude</label>
          </div>
          <div class="input-field col s3">
            <input value="15" id="dops-el" type="text" class="tooltipped" data-position="right"
              data-delay="50" data-tooltip="Minimum Elevation for GPS Lock">
            <label for="dops-el" class="active">Mask</label>
          </div>
        </div>
        <div class="row center">
          <button id="dops-submit" class="btn btn-ui waves-effect waves-light" type="submit"
            name="action">Update DOP Data &#9658;
          </button>
        </div>
      </form>
    <div class="row">
      <table id="dops" class="center-align striped-light centered"></table>
    </div>
  </div>`,this.rmbL1ElementName="dops-rmb",this.rmbL1Html=c.keepTrackApi.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">DOPs &#x27A4;</a></li>
`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbL2ElementName="dops-rmb-menu",this.rmbL2Html=c.keepTrackApi.html`
  <ul class='dropdown-contents'>
    <li id="dops-curdops-rmb"><a href="#">Current GPS DOPs</a></li>
    <li id="dops-24dops-rmb"><a href="#">24 Hour GPS DOPs</a></li>
  </ul>
`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=c.keepTrackApi.getInputManager().mouse.latLon;const a=c.keepTrackApi.getInputManager().mouse.dragPosition;(void 0===e||isNaN(e.lat)||isNaN(e.lon))&&(console.debug("latLon undefined!"),e=nt.x.eci2lla({x:a[0],y:a[1],z:a[2]},c.keepTrackApi.getTimeManager().simulationTimeObj));const i=hi.getGpsSats(c.keepTrackApi.getCatalogManager(),c.keepTrackApi.getGroupsManager());var t=mi.getDops(c.keepTrackApi.getTimeManager().simulationTimeObj,i,e.lat,e.lon,0,settingsManager.gpsElevationMask);c.keepTrackApi.getUiManager().toast(`HDOP: ${t.hdop}<br/>VDOP: ${t.vdop}<br/>PDOP: ${t.pdop}<br/>GDOP: ${t.gdop}<br/>TDOP: ${t.tdop}`,"normal",!0);break}case"dops-24dops-rmb":{const e=c.keepTrackApi.getInputManager().mouse.latLon;if(this.isMenuButtonEnabled){(0,u.QP)(hi.updateSideMenu),this.setBottomIconToEnabled();break}(0,p.G)("dops-lat").value=e.lat.toFixed(3),(0,p.G)("dops-lon").value=e.lon.toFixed(3),(0,p.G)("dops-alt").value="0",(0,p.G)("dops-el").value=settingsManager.gpsElevationMask.toString(),c.keepTrackApi.methods.bottomMenuClick(this.bottomIconElementName)}}}}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,p.G)("dops-form").addEventListener("submit",(e=>{e.preventDefault(),hi.updateSideMenu()}))}})}static updateSideMenu(){const e=l.I.get(r.Yv.GroupsManager),t=l.I.get(r.Yv.CatalogManager),a=l.I.get(r.Yv.TimeManager),i=parseFloat((0,p.G)("dops-lat").value),s=parseFloat((0,p.G)("dops-lon").value),n=parseFloat((0,p.G)("dops-alt").value),o=parseFloat((0,p.G)("dops-el").value);settingsManager.gpsElevationMask=o;const c=hi.getGpsSats(t,e),d=mi.getDopsList((e=>a.getOffsetTimeObj(e)),c,i,s,n,o);mi.updateDopsTable(d)}static getGpsSats(e,t){var a,i;const s=null!==(a=(i=t.groupList).GPSGroup)&&void 0!==a?a:i.GPSGroup=t.createGroup(Q.Y.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),n=[];return s.objects.forEach((t=>{const a=e.getSat(t);n.push(a)})),n}}hi.PLUGIN_NAME="DOPs Plugin";const bi=new hi,vi=a.p+"../img/edit.png";var fi=a(4790);class ki extends te.c{constructor(){super(ki.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=c.keepTrackApi.html`The Edit Satellite Menu is used to edit the satellite data.
    <br><br>
    <ul>
       <li>
           Satellite SCC# - A unique number assigned to each satellite by the US Space Force.
       </li>
         <li>
            Epoch Year - The year of the satellite's last orbital update.
        </li>
        <li>
            Epoch Day - The day of the year of the satellite's last orbital update.
        </li>
        <li>
            Inclination - The angle between the satellite's orbital plane and the equatorial plane.
        </li>
        <li>
            Right Ascension - The angle between the ascending node and the satellite's position at the time of the last orbital update.
        </li>
        <li>
            Eccentricity - The amount by which the satellite's orbit deviates from a perfect circle.
        </li>
        <li>
            Argument of Perigee - The angle between the ascending node and the satellite's closest point to the earth.
        </li>
        <li>
            Mean Anomaly - The angle between the satellite's position at the time of the last orbital update and the satellite's closest point to the earth.
        </li>
        <li>
            Mean Motion - The rate at which the satellite's mean anomaly changes.
        </li>
    </ul>`,this.sideMenuElementName="editSat-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
    <div id="editSat-menu" class="side-menu-parent start-hidden text-select">
      <div id="editSat-content" class="side-menu">
        <div class="row">
          <h5 class="center-align">Edit Satellite</h5>
          <form id="editSat">
            <div class="input-field col s12">
              <input disabled value="AAAAA" id="${ki.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${ki.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${ki.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${ki.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${ki.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ki.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${ki.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ki.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${ki.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${ki.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${ki.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${ki.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${ki.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ki.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${ki.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ki.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${ki.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${ki.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${ki.elementPrefix}-per" class="active">Period</label>
            </div>
            <div class="center-align row">
              <button id="editSat-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Update Satellite &#9658;</button>
            </div>
            <div class="center-align row">
              <button id="editSat-newTLE" class="btn btn-ui waves-effect waves-light" type="button" name="action">Update Epoch to Now &#9658;</button>
            </div>
            <div class="center-align row">
              <button id="editSat-save" class="btn btn-ui waves-effect waves-light" type="button" name="action">Save TLE &#9658;</button>
            </div>
            <div class="center-align row">
              <button id="editSat-open" class="btn btn-ui waves-effect waves-light" type="button" name="action">Load TLE &#9658;</button>
              <input id="editSat-file" class="start-hidden" type="file" name="files[]" />
            </div>
          </form>
        </div>
        <div id="${ki.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=vi,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&ki.populateSideMenu()},this.dragOptions={isDraggable:!0},this.rmbL1ElementName="edit-rmb",this.rmbL1Html=c.keepTrackApi.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Edit Sat &#x27A4;</a></li>`,this.rmbCallback=(e,t)=>{if(null==t)throw new Error("clickedSat is undefined");const a=l.I.get(r.Yv.UiManager);c.keepTrackApi.getCatalogManager().setSelectedSat(t),this.isMenuButtonEnabled||a.bottomIconPress({id:"menu-editSat"})},this.rmbL2ElementName="edit-rmb-menu",this.rmbL2Html=c.keepTrackApi.html`
    <ul class='dropdown-contents'>
      <li id="edit-sat-rmb"><a href="#">Edit Satellite</a></li>
      <li id="set-sec-sat-rmb"><a href="#">Set as Secondary Sat</a></li>
    </ul>`}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:"editSat",cb:()=>{(0,p.G)("editSat-newTLE").addEventListener("click",ki.editSatNewTleClick),(0,p.G)("editSat").addEventListener("submit",(function(e){e.preventDefault(),ki.editSatSubmit()})),(0,p.G)(`${ki.elementPrefix}-per`).addEventListener("change",(function(){const e=(0,p.G)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,p.G)("es-meanmo").value=t.toFixed(8)})),(0,p.G)(`${ki.elementPrefix}-meanmo`).addEventListener("change",(function(){const e=(0,p.G)(`${ki.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,p.G)(`${ki.elementPrefix}-per`).value=t})),(0,p.G)("editSat-save").addEventListener("click",ki.editSatSaveClick),(0,p.G)("editSat-open").addEventListener("click",(function(){(0,p.G)("editSat-file").click()})),(0,p.G)("editSat-file").addEventListener("change",(function(e){window.FileReader&&(ki.doReaderActions(e),e.preventDefault())})),(0,p.G)(`${ki.elementPrefix}-error`).addEventListener("click",(function(){(0,p.G)(`${ki.elementPrefix}-error`).style.display="none"}))}})}static doReaderActions(e){try{const t=new FileReader;t.onload=ki.readerOnLoad,t.readAsText(e.target.files[0])}catch(e){S.x.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad(e){if(2!==e.target.readyState)return;if(e.target.error)return void S.x.warn("Error while reading file!");const t=l.I.get(r.Yv.TimeManager),a=l.I.get(r.Yv.OrbitManager),i=l.I.get(r.Yv.UiManager),s=JSON.parse(e.target.result),n=parseInt(Ya.J.pad0(s.TLE1.substr(2,5).trim(),5)),o=c.keepTrackApi.getCatalogManager().getIdFromObjNum(n),d=c.keepTrackApi.getCatalogManager().getSat(o,r.C_.EXTRA_ONLY);let p;try{p=st.Sgp4.createSatrec(s.TLE1,s.TLE2)}catch(e){return void S.x.error(e,"edit-sat.ts","Error creating satellite record!")}h.$.altitudeCheck(p,t.simulationTimeObj)>1?(c.keepTrackApi.getCatalogManager().satCruncher.postMessage({typ:"satEdit",id:d.id,active:!0,TLE1:s.TLE1,TLE2:s.TLE2}),a.changeOrbitBufferData(d.id,s.TLE1,s.TLE2),d.active=!0):i.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static populateSideMenu(){const e=c.keepTrackApi.getCatalogManager().getSat(c.keepTrackApi.getCatalogManager().selectedSat,r.C_.EXTRA_ONLY);(0,p.G)(`${ki.elementPrefix}-scc`).value=e.sccNum;const t=Ya.J.pad0((e.inclination*b.I3).toFixed(4),8);(0,p.G)(`${ki.elementPrefix}-inc`).value=Ya.J.pad0(t,8),(0,p.G)(`${ki.elementPrefix}-year`).value=e.TLE1.substr(18,2),(0,p.G)(`${ki.elementPrefix}-day`).value=e.TLE1.substr(20,12),(0,p.G)(`${ki.elementPrefix}-meanmo`).value=e.TLE2.substr(52,11),(0,p.G)(`${ki.elementPrefix}-per`).value=(1440/parseFloat(e.TLE2.substr(52,11))).toFixed(4);const a=Ya.J.pad0((e.raan*b.I3).toFixed(4),8);(0,p.G)(`${ki.elementPrefix}-rasc`).value=Ya.J.pad0(a,8),(0,p.G)(`${ki.elementPrefix}-ecen`).value=e.eccentricity.toFixed(7).substr(2,7);const i=Ya.J.pad0((e.argPe*b.I3).toFixed(4),8);(0,p.G)(`${ki.elementPrefix}-argPe`).value=Ya.J.pad0(i,8),(0,p.G)(`${ki.elementPrefix}-meana`).value=e.TLE2.substr(43,8)}static editSatNewTleClick(){(0,u.QP)(ki.editSatNewTleClickFadeIn)}static editSatNewTleClickFadeIn(){const e=l.I.get(r.Yv.TimeManager),t=l.I.get(r.Yv.UiManager);try{const a=c.keepTrackApi.getCatalogManager().getIdFromObjNum(parseInt((0,p.G)(`${ki.elementPrefix}-scc`).value)),i=c.keepTrackApi.getCatalogManager().getSat(a),s=nt.x.eci2lla(i.position,e.simulationTimeObj);let n=s.lon,o=s.lat,d=s.alt;const u=h.$.getDirection(i,e.simulationTimeObj);"Error"===u&&t.toast("Cannot calculate direction of satellite. Try again later.","caution");const g=e.simulationTimeObj,m=Ja.l.currentEpoch(g);let v;i.TLE1=i.TLE1.substr(0,18)+m[0]+m[1]+i.TLE1.substr(32),c.keepTrackApi.getMainCamera().isAutoPitchYawToTarget=!1,v=i.apogee-i.perigee<300?new Va(i,o,n,u,g).rotateOrbitToLatLon():new Va(i,o,n,u,g,d).rotateOrbitToLatLon();const f=v[0],k=v[1];if("Error"===f)return void t.toast(`${k}`,"critical",!0);c.keepTrackApi.getCatalogManager().satCruncher.postMessage({typ:"satEdit",id:a,TLE1:f,TLE2:k}),l.I.get(r.Yv.OrbitManager).changeOrbitBufferData(a,f,k);const S=c.keepTrackApi.getCatalogManager().getSat(c.keepTrackApi.getCatalogManager().selectedSat,r.C_.EXTRA_ONLY);(0,p.G)(`${ki.elementPrefix}-scc`).value=S.sccNum;const y=Ya.J.pad0((S.inclination*b.I3).toFixed(4),8);(0,p.G)(`${ki.elementPrefix}-inc`).value=Ya.J.pad0(y,8),(0,p.G)(`${ki.elementPrefix}-year`).value=S.TLE1.substr(18,2),(0,p.G)(`${ki.elementPrefix}-day`).value=S.TLE1.substr(20,12),(0,p.G)(`${ki.elementPrefix}-meanmo`).value=S.TLE2.substr(52,11),(0,p.G)(`${ki.elementPrefix}-per`).value=(1440/parseFloat(S.TLE2.substr(52,11))).toFixed(4);const M=Ya.J.pad0((S.raan*b.I3).toFixed(4),8);(0,p.G)(`${ki.elementPrefix}-rasc`).value=Ya.J.pad0(M,8),(0,p.G)(`${ki.elementPrefix}-ecen`).value=S.eccentricity.toFixed(7).substr(2,7);const A=Ya.J.pad0((S.argPe*b.I3).toFixed(4),8);(0,p.G)(`${ki.elementPrefix}-argPe`).value=Ya.J.pad0(A,8),(0,p.G)(`${ki.elementPrefix}-meana`).value=S.TLE2.substr(43,8)}catch(e){S.x.warn(e)}}static editSatSubmit(){const e=c.keepTrackApi.getCatalogManager(),t=l.I.get(r.Yv.TimeManager),a=l.I.get(r.Yv.UiManager);(0,p.G)(`${ki.elementPrefix}-error`).style.display="none";const i=(0,p.G)(`${ki.elementPrefix}-scc`).value,s=e.getIdFromObjNum(parseInt(i));null===s&&S.x.info("Not a Real Satellite");const n=e.getSat(s,r.C_.EXTRA_ONLY),o=n.TLE1.substr(9,8);let d=(0,p.G)(`${ki.elementPrefix}-inc`).value,u=(0,p.G)(`${ki.elementPrefix}-meanmo`).value,g=(0,p.G)(`${ki.elementPrefix}-rasc`).value;const m=(0,p.G)(`${ki.elementPrefix}-ecen`).value;let b=(0,p.G)(`${ki.elementPrefix}-argPe`).value,v=(0,p.G)(`${ki.elementPrefix}-meana`).value;const f=(0,p.G)(`${ki.elementPrefix}-year`).value,k=(0,p.G)(`${ki.elementPrefix}-day`).value,{TLE1:y,TLE2:M}=fi.L.createTle({sat:n,inc:d,meanmo:u,rasc:g,argPe:b,meana:v,ecen:m,epochyr:f,epochday:k,intl:o,scc:i});let A;try{A=st.Sgp4.createSatrec(y,M)}catch(e){return void S.x.error(e,"edit-sat.ts","Error creating satellite record!")}h.$.altitudeCheck(A,t.simulationTimeObj)>1?(e.satCruncher.postMessage({typ:"satEdit",id:s,active:!0,TLE1:y,TLE2:M}),l.I.get(r.Yv.OrbitManager).changeOrbitBufferData(s,y,M),n.active=!0,n.satrec=null):a.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static editSatSaveClick(e){const t=c.keepTrackApi.getCatalogManager();try{const e=(0,p.G)(`${ki.elementPrefix}-scc`).value,a=t.getIdFromObjNum(parseInt(e)),i=t.getSat(a,r.C_.EXTRA_ONLY),s={TLE1:i.TLE1,TLE2:i.TLE2},n=JSON.stringify(s),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,k.saveAs)(o,e+".tle")}catch(e){}e.preventDefault()}}ki.PLUGIN_NAME="Edit Sat",ki.elementPrefix="es";const Si=new ki,yi=a.p+"../img/find2.png";var Mi=a(5561),Ai=a(5326);class Ti extends te.c{static checkAz(e,t,a){return e.filter((e=>e.az>=t&&e.az<=a))}static checkEl(e,t,a){return e.filter((e=>e.el>=t&&e.el<=a))}static checkInview(e){const t=l.I.get(r.Yv.DotsManager);return e.filter((e=>1===t.inViewData[e.id]))}static checkObjtype(e,t){return e.filter((e=>e.type===t))}static checkRange(e,t,a){return e.filter((e=>e.rng>=t&&e.rng<=a))}static limitPossibles(e,t){const a=l.I.get(r.Yv.UiManager);return e.length>=t&&a.toast(`Too many results, limited to ${t}`,"serious"),e.slice(0,t)}static searchSats(e){let{az:t,el:a,rng:i,countryCode:s,inc:n,azMarg:o,elMarg:d,rngMarg:u,incMarg:g,period:m,periodMarg:h,rcs:b,rcsMarg:v,objType:f,raan:k,raanMarg:S,argPe:y,argPeMarg:M,bus:A,shape:T,payload:C}=e;const w=!isNaN(t)&&isFinite(t),x=!isNaN(a)&&isFinite(a),L=!isNaN(i)&&isFinite(i),E=!isNaN(n)&&isFinite(n),I=!isNaN(k)&&isFinite(k),N=!isNaN(y)&&isFinite(y),G=!isNaN(m)&&isFinite(m),P=!isNaN(b)&&isFinite(b),D="All"!==s,R="All"!==A,O="All"!==T,F="All"!==C;if(o=!isNaN(o)&&isFinite(o)?o:5,d=!isNaN(d)&&isFinite(d)?d:5,u=!isNaN(u)&&isFinite(u)?u:200,g=!isNaN(g)&&isFinite(g)?g:1,h=!isNaN(h)&&isFinite(h)?h:.5,v=!isNaN(v)&&isFinite(v)?v:b/10,S=!isNaN(S)&&isFinite(S)?S:1,M=!isNaN(M)&&isFinite(M)?M:1,!(x||L||w||E||G||P||N||I||D||R||O||F))throw new Error("No Search Criteria Entered");let U=c.keepTrackApi.getCatalogManager().getSatsFromSatData().filter((e=>!e.static&&!e.missile&&e.active)).map((e=>{var t;const a=c.keepTrackApi.getSensorManager();if((null===(t=a.currentSensors)||void 0===t?void 0:t.length)>0){const t=Ai.J.getTearr(e,a.currentSensors);return Object.assign(Object.assign({},e),{az:t.az,el:t.el,rng:t.rng,inView:t.inView})}return e}));U=E||G||!(w||x||L)?U:Ti.checkInview(U),U=0!==f?Ti.checkObjtype(U,f):U,w&&(U=Ti.checkAz(U,t-o,t+o)),x&&(U=Ti.checkEl(U,a-d,a+d)),L&&(U=Ti.checkRange(U,i-u,i+u)),E&&(U=Ti.checkInc(U,n-g,n+g)),I&&(U=Ti.checkRaan(U,k-S,k+S)),N&&(U=Ti.checkArgPe(U,y-M,y+M)),G&&(U=Ti.checkPeriod(U,m-h,m+h)),P&&(U=Ti.checkRcs(U,b-v,b+v)),"All"!==s&&(U=U.filter((e=>s.split("|").includes(e.country)))),"All"!==A&&(U=U.filter((e=>e.bus===A))),"All"!==T&&(U=U.filter((e=>e.shape===T))),"All"!==C&&(U=U.filter((e=>{var t,a,i;return(null===(i=null===(a=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===a?void 0:a.split("-")[0])||void 0===i?void 0:i.replace(/[^a-zA-Z]/gu,""))===C}))),U=Ti.limitPossibles(U,settingsManager.searchLimit);let _="";return U.forEach(((e,t)=>{_+=t<U.length-1?`${e.sccNum},`:`${e.sccNum}`})),(0,p.G)("search").value=_,l.I.get(r.Yv.UiManager).doSearch((0,p.G)("search").value),U}findByLooksSubmit(){return e=this,t=void 0,i=function*(){const e=l.I.get(r.Yv.UiManager),t=parseFloat((0,p.G)("fbl-azimuth").value),a=parseFloat((0,p.G)("fbl-elevation").value),i=parseFloat((0,p.G)("fbl-range").value),s=parseFloat((0,p.G)("fbl-inc").value),n=parseFloat((0,p.G)("fbl-period").value),o=parseFloat((0,p.G)("fbl-rcs").value),c=parseFloat((0,p.G)("fbl-azimuth-margin").value),d=parseFloat((0,p.G)("fbl-elevation-margin").value),u=parseFloat((0,p.G)("fbl-range-margin").value),g=parseFloat((0,p.G)("fbl-inc-margin").value),m=parseFloat((0,p.G)("fbl-period-margin").value),h=parseFloat((0,p.G)("fbl-rcs-margin").value),b=parseInt((0,p.G)("fbl-type").value),v=parseFloat((0,p.G)("fbl-raan").value),f=parseFloat((0,p.G)("fbl-raan-margin").value),k=parseFloat((0,p.G)("fbl-argPe").value),S=parseFloat((0,p.G)("fbl-argPe-margin").value),y=(0,p.G)("fbl-country").value,M=(0,p.G)("fbl-bus").value,A=(0,p.G)("fbl-payload").value,T=(0,p.G)("fbl-shape").value;(0,p.G)("search").value="";try{const l={az:t,el:a,rng:i,inc:s,azMarg:c,elMarg:d,rngMarg:u,incMarg:g,period:n,periodMarg:m,rcs:o,rcsMarg:h,objType:b,raan:v,raanMarg:f,argPe:k,argPeMarg:S,countryCode:y,bus:M,payload:A,shape:T};this.lastResults=Ti.searchSats(l),0===this.lastResults.length&&e.toast("No Satellites Found","critical")}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered","critical")}},new((a=void 0)||(a=Promise))((function(s,n){function o(e){try{r(i.next(e))}catch(e){n(e)}}function l(e){try{r(i.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}r((i=i.apply(e,t||[])).next())}));var e,t,a,i}addJs(){super.addJs(),c.keepTrackApi.register({method:"uiManagerInit",cbName:"findSat",cb:()=>{(0,p.G)("fbl-error").addEventListener("click",(function(){(0,p.G)("fbl-error").style.display="none"}))}}),c.keepTrackApi.register({method:"uiManagerFinal",cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}constructor(){super(Ti.PLUGIN_NAME),this.lastResults=[],this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="findByLooks-menu" class="side-menu-parent start-hidden text-select">
    <div id="findByLooks-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Find Satellite</h5>
        <form id="findByLooks-form">
          <div class="row">
            <div class="input-field col s12">
              <select value=0 id="fbl-type" type="text">
                <option value=0>All</option>
                <option value=1>Payload</option>
                <option value=2>Rocket Body</option>
                <option value=3>Debris</option>
              </select>
              <label for="disabled">Object Type</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select value=0 id="fbl-country" type="text">
                <option value='All'>All</option>
              </select>
              <label for="disabled">Country</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select value=0 id="fbl-bus" type="text">
                <option value='All'>All</option>
              </select>
              <label for="disabled">Satellite Bus</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select value=0 id="fbl-payload" type="text">
                <option value='All'>All</option>
              </select>
              <label for="disabled">Payload</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select value=0 id="fbl-shape" type="text">
                <option value='All'>All</option>
              </select>
              <label for="disabled">Shape</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="xxx.x" id="fbl-azimuth" type="text">
              <label for="fbl-azimuth" class="active">Azimuth</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="5" id="fbl-azimuth-margin" type="text">
              <label for="fbl-azimuth-margin "class="active">Margin</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-elevation" type="text">
              <label for="fbl-elevation "class="active">Elevation</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="5" id="fbl-elevation-margin" type="text">
              <label for="fbl-elevation-margin "class="active">Margin</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="xxxx.x" id="fbl-range" type="text">
              <label for="fbl-range "class="active">Range</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="500" id="fbl-range-margin" type="text">
              <label for="fbl-range-margin "class="active">Margin</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-inc" type="text">
              <label for="fbl-inc "class="active">Inclination</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="0.5" placeholder="0.5" id="fbl-inc-margin" type="text">
              <label for="fbl-inc-margin "class="active">Margin</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-period" type="text">
              <label for="fbl-period "class="active">Period</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="10" placeholder="10" id="fbl-period-margin" type="text">
              <label for="fbl-period-margin "class="active">Margin</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-rcs" type="text">
              <label for="fbl-rcs "class="active">RCS</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="10" placeholder="10" id="fbl-rcs-margin" type="text">
              <label for="fbl-rcs-margin "class="active">Margin</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-raan" type="text">
              <label for="fbl-raan "class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="0.5" placeholder="0.5" id="fbl-raan-margin" type="text">
              <label for="fbl-raan-margin "class="active">Margin</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-argPe" type="text">
              <label for="fbl-argPe "class="active">Arg of Perigee</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="0.5" placeholder="0.5" id="fbl-argPe-margin" type="text">
              <label for="fbl-argPe-margin "class="active">Margin</label>
            </div>
          </div>
          <div class="center-align">
            <button id="findByLooks-submit" class="btn btn-ui waves-effect waves-light" type="submit"
              name="action">Find Satellite(s) &#9658;
            </button>
          </div>
        </form>
        <div class="row center-align" style="margin-top:20px;">
          <span id="fbl-error" class="menu-selectable"></span>
        </div>
      </div>
    </div>
  </div>`,this.bottomIconElementName="menu-find-sat",this.bottomIconImg=yi,this.bottomIconLabel="Find Satellite",this.helpTitle="Find Satellite Menu",this.helpBody=c.keepTrackApi.html`The Find Satellite Menu is used for finding satellites by orbital parameters or satellite characteristics.
<br><br>
For most parameters, you type in the target value on the left and then a margin of error on the right.
For example, if you wanted to find all satellites in a 51-52 degree inclination, you can type 51.5 in the left box and 0.5 in the right box.
The search will then find all satellites within those inclinations and display them in the search bar.
`}printLastResults(){S.x.info(this.lastResults.map((e=>e.name)).join("\n"))}uiManagerFinal(){const e=c.keepTrackApi.getCatalogManager().getSatsFromSatData();(0,p.G)("findByLooks-form").addEventListener("submit",(e=>{e.preventDefault(),(0,u.QP)((()=>{this.findByLooksSubmit(),(0,u.Zk)()}))})),(0,v.d)(e.filter((e=>e.bus)).map((e=>e.bus))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,p.G)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})),Mi.hA.forEach((e=>{(0,p.G)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${Mi.cs[e]}">${e}</option>`)})),(0,v.d)(e.filter((e=>e.shape)).map((e=>e.shape))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,p.G)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}));const t=e.filter((e=>e.payload)).map((e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,""))).filter((e=>e.length>=3));(0,v.d)(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{""!==e&&e.length>3&&(0,p.G)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}))}static checkArgPe(e,t,a){return e.filter((e=>e.argPe*b.I3<a&&e.argPe*b.I3>t))}static checkInc(e,t,a){return e.filter((e=>e.inclination*b.I3<a&&e.inclination*b.I3>t))}static checkPeriod(e,t,a){return e.filter((e=>e.period>t&&e.period<a))}static checkRaan(e,t,a){return e.filter((e=>e.raan*b.I3<a&&e.raan*b.I3>t))}static checkRcs(e,t,a){return e.filter((e=>parseFloat(e.R)>t&&parseFloat(e.R)<a))}}Ti.PLUGIN_NAME="findSat";const Ci=new Ti;class wi{constructor(){this.deadzone=.55,this.buttonsPressedHistory=[],this.buttonsPressed=[]}init(){window.addEventListener("gamepadconnected",(e=>{settingsManager.cruncherReady?this.initializeGamepad(e.gamepad):c.keepTrackApi.register({method:"uiManagerInit",cbName:"gamepad",cb:()=>this.initializeGamepad(e.gamepad)})})),window.addEventListener("gamepaddisconnected",(()=>{c.keepTrackApi.getUiManager().toast("Gamepad disconnected","critical"),this.currentController=null}))}initializeGamepad(e){c.keepTrackApi.getUiManager().toast("Gamepad connected","normal"),this.currentController||c.keepTrackApi.register({method:"updateLoop",cbName:"gamepad",cb:this.updateGamepad.bind(this)}),this.currentController=e}updateGamepad(e){null!=e||(e=0);const t=wi.getController(e);null!==t&&(this.currentController=t,this.updateZoom_(),this.updateLeftStick_(),this.updateRightStick_(),this.updateButtons_())}updateButtons_(){this.currentController.buttons.forEach(((e,t)=>{if(e.pressed&&!this.buttonsPressed[t])switch(this.buttonsPressed[t]=!0,this.buttonsPressedHistory.push(t),this.buttonsPressedHistory.length>8&&this.buttonsPressedHistory.shift(),t){case 0:this.btnA_();break;case 1:this.btnB_();break;case 2:this.btnX_();break;case 3:this.btnY_();break;case 4:this.btnLeftBumper();break;case 5:this.btnRightBumper_();break;case 8:this.btnHome_();break;case 9:this.btnStart_();break;case 10:this.btnLeftStick_();break;case 11:this.btnRightStick_();break;case 12:this.btnDpadUp_();break;case 13:this.btnDpadDown_();break;case 14:this.btnDpadLeft_();break;case 15:this.btnDpadRight_();break;case 16:this.btnXbox()}else!e.pressed&&this.buttonsPressed[t]&&(this.buttonsPressed[t]=!1)}))}btnA_(){settingsManager.isLimitedGamepadControls||(console.log("A"),c.keepTrackApi.getCatalogManager().selectSat(c.keepTrackApi.getHoverManager().hoveringSat))}btnB_(){settingsManager.isLimitedGamepadControls||(console.log("B"),c.keepTrackApi.getCatalogManager().selectSat(-1),c.keepTrackApi.getMainCamera().zoomTarget=.8)}btnX_(){settingsManager.isLimitedGamepadControls||(console.log("X"),c.keepTrackApi.getMainCamera().autoRotate())}btnY_(){console.log("Y")}btnLeftBumper(){if(settingsManager.isLimitedGamepadControls)return;console.log("Left Bumper");const e=c.keepTrackApi.getCatalogManager(),t=e.selectedSat-1;t>=0?e.selectSat(t):e.selectSat(e.satData.length-1)}btnRightBumper_(){if(settingsManager.isLimitedGamepadControls)return;console.log("Right Bumper");const e=c.keepTrackApi.getCatalogManager(),t=e.selectedSat+1;t<=e.satData.length-1?e.selectSat(t):e.selectSat(0)}btnHome_(){settingsManager.isLimitedGamepadControls||(console.log("Home"),c.keepTrackApi.getMainCamera().isPanReset=!0,c.keepTrackApi.getMainCamera().isLocalRotateReset=!0,c.keepTrackApi.getMainCamera().ftsRotateReset=!0)}btnXbox(){console.log("Xbox Button")}btnStart_(){console.log("Start")}btnLeftStick_(){console.log("Left Stick")}btnRightStick_(){console.log("Right Stick")}btnDpadUp_(){console.log("D-Pad Up"),settingsManager.isAutoRotateD=!1,settingsManager.isAutoRotateU=!settingsManager.isAutoRotateU,c.keepTrackApi.getMainCamera().autoRotate(!0)}btnDpadDown_(){console.log("D-Pad Down"),settingsManager.isAutoRotateU=!1,settingsManager.isAutoRotateD=!settingsManager.isAutoRotateD,c.keepTrackApi.getMainCamera().autoRotate(!0)}btnDpadLeft_(){console.log("D-Pad Left"),settingsManager.isAutoRotateR=!1,settingsManager.isAutoRotateL=!settingsManager.isAutoRotateL,c.keepTrackApi.getMainCamera().autoRotate(!0)}btnDpadRight_(){console.log("Right"),settingsManager.isAutoRotateL=!1,settingsManager.isAutoRotateR=!settingsManager.isAutoRotateR,c.keepTrackApi.getMainCamera().autoRotate(!0)}updateZoom_(){const e=this.currentController.buttons[6].value,t=this.currentController.buttons[7].value;if(0===e&&0===t)return;const a=c.keepTrackApi.getDrawManager();let i=c.keepTrackApi.getMainCamera().zoomLevel();switch(c.keepTrackApi.getMainCamera().cameraType){case oa.i.DEFAULT:case oa.i.OFFSET:case oa.i.FIXED_TO_SAT:i+=e/500*a.dt,i-=t/500*a.dt,c.keepTrackApi.getMainCamera().zoomTarget=i,c.keepTrackApi.getMainCamera().camZoomSnappedOnSat=!1,c.keepTrackApi.getMainCamera().isAutoPitchYawToTarget=!1,i<c.keepTrackApi.getMainCamera().zoomLevel()?c.keepTrackApi.getMainCamera().isZoomIn=!0:c.keepTrackApi.getMainCamera().isZoomIn=!1;break;case oa.i.FPS:case oa.i.SATELLITE:case oa.i.PLANETARIUM:case oa.i.ASTRONOMY:0!==e&&(c.keepTrackApi.getMainCamera().fpsVertSpeed+=Math.pow(2*e,3)*a.dt*settingsManager.cameraMovementSpeed),0!==t&&(c.keepTrackApi.getMainCamera().fpsVertSpeed-=Math.pow(2*t,3)*a.dt*settingsManager.cameraMovementSpeed)}}updateLeftStick_(){const e=this.currentController.axes[0],t=this.currentController.axes[1];if(e>this.deadzone||e<-this.deadzone||t>this.deadzone||t<-this.deadzone){c.keepTrackApi.getMainCamera().autoRotate(!1);const a=c.keepTrackApi.getDrawManager();switch(settingsManager.lastGamepadMovement=Date.now(),c.keepTrackApi.getMainCamera().cameraType){case oa.i.DEFAULT:case oa.i.OFFSET:case oa.i.FIXED_TO_SAT:c.keepTrackApi.getMainCamera().camAngleSnappedOnSat=!1,c.keepTrackApi.getMainCamera().isAutoPitchYawToTarget=!1,c.keepTrackApi.getMainCamera().camPitchSpeed-=Math.pow(t,3)/200*a.dt*settingsManager.cameraMovementSpeed,c.keepTrackApi.getMainCamera().camYawSpeed+=Math.pow(e,3)/200*a.dt*settingsManager.cameraMovementSpeed;break;case oa.i.FPS:case oa.i.SATELLITE:case oa.i.PLANETARIUM:case oa.i.ASTRONOMY:(t>this.deadzone||t<-this.deadzone)&&(c.keepTrackApi.getMainCamera().fpsForwardSpeed=-Math.pow(t,3)*a.dt),(e>this.deadzone||e<-this.deadzone)&&(c.keepTrackApi.getMainCamera().fpsSideSpeed=Math.pow(e,3)*a.dt)}}}updateRightStick_(){if(settingsManager.isLimitedGamepadControls)return;const e=this.currentController.axes[2],t=this.currentController.axes[3],a=c.keepTrackApi.getDrawManager();if(c.keepTrackApi.getMainCamera().isLocalRotateOverride=!1,t>this.deadzone||t<-this.deadzone||e>this.deadzone||e<-this.deadzone)switch(c.keepTrackApi.getMainCamera().autoRotate(!1),c.keepTrackApi.getMainCamera().cameraType){case oa.i.DEFAULT:case oa.i.OFFSET:case oa.i.FIXED_TO_SAT:c.keepTrackApi.getMainCamera().isLocalRotateOverride=!0,c.keepTrackApi.getMainCamera().localRotateDif.pitch=200*-t,c.keepTrackApi.getMainCamera().localRotateDif.yaw=200*-e;break;case oa.i.FPS:case oa.i.SATELLITE:case oa.i.PLANETARIUM:case oa.i.ASTRONOMY:c.keepTrackApi.getMainCamera().camPitchSpeed+=t/100*a.dt*settingsManager.cameraMovementSpeed,c.keepTrackApi.getMainCamera().camYawSpeed-=e/100*a.dt*settingsManager.cameraMovementSpeed}}vibrate(e){this.currentController&&this.currentController.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})}static getController(e=0){const t=navigator.getGamepads();return t.length>e&&null!==t[e]?t[e]:null}}const xi=new wi;var Li=a(5999);const Ei=a.p+"../img/calendar.png";class Ii extends te.c{constructor(){super("Launch Menu"),this.bottomIconElementName="menu-launches",this.bottomIconImg=Ei,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonEnabled){settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3);const e=(new Date).getFullYear();(0,Li.Us)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonEnabled&&(this.isMenuButtonEnabled=!1,(0,p.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const Ni=new Ii,Gi=a.p+"../img/rocket.png";class Pi extends te.c{constructor(){super(Pi.PLUGIN_NAME),this.bottomIconCallback=()=>{if(!this.isMenuButtonEnabled)return;if(!this.verifySatelliteSelected())return;const e=c.keepTrackApi.getCatalogManager().getSat(c.keepTrackApi.getCatalogManager().selectedSat,r.C_.EXTRA_ONLY);(0,p.G)("nl-scc").value=e.sccNum,(0,p.G)("nl-inc").value=Ya.J.pad0((e.inclination*b.I3).toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=Gi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="newLaunch-menu" class="side-menu-parent start-hidden text-select">
    <div id="newLaunch-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">New Launch</h5>
        <form id="${this.sideMenuElementName}-form" class="col s12">
          <div class="input-field col s12">
            <input disabled value="00005" id="nl-scc" type="text">
            <label for="disabled" class="active">Satellite SCC#</label>
          </div>
          <div class="input-field col s12">
            <input disabled value="50.00" id="nl-inc" type="text">
            <label for="disabled" class="active">Inclination</label>
          </div>
          <div class="input-field col s12">
            <select value="50.00" id="nl-updown" type="text">
              <option value="N">North</option>
              <option value="S">South</option>
            </select>
            <label for="disabled">Launching North or South</label>
          </div>
          <div class="input-field col s12" id="nl-launch-menu">
            <select id="nl-facility">
              <optgroup label="United States">
                <option value="CAS">Canary Island Air Space (Pegasus)</option>
                <option value="AFETR">Cape Canaveral AFS | Kennedy Space Center</option>
                <option value="ERAS">Eastern Range Air Space (Pegasus)</option>
                <option value="KODAK">Kodiak Launch Complex</option>
                <option value="KWAJ">Reagan Test Site</option>
                <option value="AFWTR">Vandenberg AFB</option>
                <option value="WLPIS">Wallops Flight Facility</option>
                <option value="WRAS">Western Range Air Space (Pegasus)</option>
              </optgroup>
              <optgroup label="Russia">
                <option value="KYMTR">Kasputin Yar MSC</option>
                <option value="PKMTR">Plesetsk MSC</option>
                <option value="SEAL">Sea Launch Platform</option>
                <option value="SADOL">Submarine Launch, Barents Sea</option>
                <option value="TTMTR">Tyuratam MSC | Baikonur Cosmodrome</option>
                <option value="VOSTO">Vostochny Cosmodrome</option>
                <option value="OREN">Yasny (Dombarovskiy) Cosmodrome</option>
              </optgroup>
              <optgroup label="China">
                <option value="JSC">Jiuquan SLC</option>
                <option value="TSC">Taiyuan SLC</option>
                <option value="WSC">Wenchang SLC</option>
                <option value="XSC">Xichang SLC</option>
              </optgroup>
              <optgroup label="Japan">
                <option value="TNSTA">Tanegashima Space Center</option>
                <option value="KSCUT">Uchinoura Space Center</option>
              </optgroup>
              <optgroup label="North Korea">
                <option value="YUN">Sohae Satellite Launch Station</option>
                <option value="TNGH">Tonghae Satellite Launching Ground</option>
              </optgroup>
              <optgroup label="Other">
                <option value="FRGUI">Guiana Space Centre (Kourou FG)</option>
                <option value="HGSTR">Hammaguira Space Track Range</option>
                <option value="NSC">Naro Space Center</option>
                <option value="YAVNE">Palmachim Air Force Base</option>
                <option value="RLLC">Rocket Labs Launch Complex</option>
                <option value="SNMLP">San Marco Launch Platform</option>
                <option value="SRI">Satish Dhawan Space Centre (Sriharikota IN)</option>
                <option value="SEM">Semnan Spaceport</option>
                <option value="WOMRA">Woomera Test Range</option>
              </optgroup>
            </select>
            <label>Launch Facility</label>
          </div>
          <div class="center-align">
            <button
            id="${this.sideMenuElementName}-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Create Launch
              Nominal &#9658;
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  `,this.helpTitle="New Launch Menu",this.helpBody=c.keepTrackApi.html`The New Launch Menu is used for generating notional orbital launches by modifying existing satellites with similar parameters.
    <br><br>
    After selecting a satellite, you can select a launch location and a north/south azimuth.
    The selected satellite will be modified to align it with the launch site.
    The clock is then changed to 00:00:00 to represent relative time after the launch.
    This can be helpful in calculating sensor coverage relative to launch time.
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=c.keepTrackApi.getTimeManager(),a=c.keepTrackApi.getCatalogManager(),i=c.keepTrackApi.getUiManager(),s=c.keepTrackApi.getColorSchemeManager();(0,u.wU)();const n=(0,p.G)("nl-scc").value,o=a.getIdFromObjNum(parseInt(n));let d=a.getSat(o);const g=(0,p.G)("nl-updown").value,m=(0,p.G)("nl-facility").value;let b,v;if(!a.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in a.launchSites)a.launchSites[e].name===m&&(b=a.launchSites[e].lat,v=a.launchSites[e].lon);v>180&&(v-=360);const f=new Date,k=new Date(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate(),0,0,0);k.setUTCHours(0),t.changeStaticOffset(k.getTime()-f.getTime()),i.toast("Time is now relative to launch time.","standby"),null===(e=c.keepTrackApi.getSoundManager())||void 0===e||e.play("liftoff"),s.setColorScheme(settingsManager.currentColorScheme,!0),c.keepTrackApi.getMainCamera().isAutoPitchYawToTarget=!1;const y=t.simulationTimeObj,M=new Va(d,b,v,g,y).rotateOrbitToLatLon(),A=M[0],T=M[1];if(69!==A.length)return void i.toast(`Invalid TLE1: length is not 69 - ${A}`,"critical");if(69!==T.length)return void i.toast(`Invalid TLE2: length is not 69 - ${A}`,"critical");let C;d.satrec=null;try{C=st.Sgp4.createSatrec(A,T)}catch(e){return void S.x.error(e,"new-launch.ts","Error creating satellite record!")}h.$.altitudeCheck(C,y)>1?(a.satCruncher.postMessage({typ:"satEdit",id:o,active:!0,TLE1:A,TLE2:T}),l.I.get(r.Yv.OrbitManager).changeOrbitBufferData(o,A,T)):i.toast("Failed Altitude Test - Try a Different Satellite!","critical"),(0,ii.J)(a.satCruncher,(()=>{this.isDoingCalculations=!1,(0,u.Zk)()}),(e=>void 0!==e.satPos))}}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,p.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,p.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}Pi.PLUGIN_NAME="New Launch";const Di=new Pi,Ri=a.p+"../img/calendar2.png",Oi=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown";class Fi extends te.c{constructor(){super(Fi.PLUGIN_NAME),this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&("localhost"===window.location.hostname&&c.keepTrackApi.getUiManager().toast("This feature is a static table when in offline mode.","caution"),this.showTable())},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=Ri,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=c.keepTrackApi.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="nextLaunch-menu" class="side-menu-parent start-hidden text-select">
    <div id="nextLaunch-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Next Launches</h5>
        <table id="nextLaunch-table" class="center-align striped-light centered"></table>
      </div>
      <div class="row">
        <center>
          <button id="export-launch-info" class="btn btn-ui waves-effect waves-light">Export Launch Info &#9658;</button>
        </center>
      </div>
    </div>
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),a.e(478).then(a.bind(a,6128)).then((e=>e))}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,p.G)("export-launch-info").addEventListener("click",(()=>{(0,f.Eb)(this.launchList,"launchList")}))}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then((e=>e.json())).then((e=>this.processData(e))).catch((()=>S.x.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`))).finally((()=>{const e=(0,p.G)("nextLaunch-table");e&&""==e.innerHTML&&(Fi.initTable(e,this.launchList),(0,p.G)("nextLaunch-table").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(0,Li.Us)(e.href)}))})))}))}}processData(e){var t,a,i,s,n,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(a=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===a?void 0:a.name.split(",",1)[0],c.locationURL=null===(i=r.pad)||void 0===i?void 0:i.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(s=r.rocket)||void 0===s?void 0:s.configuration.full_name,c.rocketConfig=null===(n=r.rocket)||void 0===n?void 0:n.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),a=t.insertCell();a.appendChild(document.createTextNode("Launch Window")),a.setAttribute("style","text-decoration: underline; width: 120px;");const i=t.insertCell();i.appendChild(document.createTextNode("Mission")),i.setAttribute("style","text-decoration: underline; width: 140px;");const s=t.insertCell();s.appendChild(document.createTextNode("Location")),s.setAttribute("style","text-decoration: underline");const n=t.insertCell();n.appendChild(document.createTextNode("Agency")),n.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var a,i,s,n,o,l;Fi.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),p=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":(0,gi.v)(t[r].windowStart,"isoDateTime",!0)+" UTC";d.appendChild(document.createTextNode(p));const u=c.insertCell(),g=(null===(a=t[r])||void 0===a?void 0:a.missionName)||"Unknown",m=(null===(i=t[r])||void 0===i?void 0:i.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${Oi(g,15)}</a>`:`${Oi(g,15)}`,h=(null===(s=t[r])||void 0===s?void 0:s.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;u.innerHTML=`${m}<br />${h}`;const b=(null===(n=t[r])||void 0===n?void 0:n.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${Oi(t[r].location,25)}</a>`:`${Oi(t[r].location,25)}`;c.insertCell().innerHTML=b;const v=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${Oi(t[r].agency,30)}</a>`:`${Oi(t[r].agency,30)}`;c.insertCell().innerHTML=v,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}Fi.PLUGIN_NAME="Next Launches";const Ui=new Fi,_i=a.p+"../img/day-night.png";class Bi extends te.c{constructor(){super("Night Toggle"),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=_i}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.nightToggle,cbName:this.PLUGIN_NAME,cb:(e,t,a)=>{this.isMenuButtonEnabled?e.bindTexture(e.TEXTURE_2D,a):e.bindTexture(e.TEXTURE_2D,t)}})}}const zi=new Bi;var $i=a(8028),Hi=a(5704);class ji extends te.c{constructor(){super(ji.PLUGIN_NAME),this.doOnce=!1,this.isReferenceSatsActive=!1,this.dependencies=[$i.H.PLUGIN_NAME,Hi.P.PLUGIN_NAME]}addHtml(){super.addHtml(),c.keepTrackApi.register({method:"selectSatData",cbName:"orbitReferences",cb:e=>{null!=e&&(this.doOnce||((0,p.G)("sat-info-top-links").insertAdjacentHTML("beforeend",c.keepTrackApi.html`
                <div id="orbit-references-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,p.G)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0))}})}orbitReferencesLinkClick(){const e=l.I.get(r.Yv.CatalogManager),t=e.getSat(e.selectedSat);let a=e.analSatSet[0].id+2e4,i="";const s=st.Sgp4.createSatrec(t.TLE1,t.TLE2),n=s.ecco.toFixed(7).substr(2,7),o=(s.nodeo*b.I3).toString(),c=(s.argpo*b.I3).toString(),d=t.TLE2.substr(8,8),p=t.TLE2.substr(52,10),u=t.TLE1.substr(18,2),g=t.TLE1.substr(20,12),m=t.TLE1.substr(9,8),h=Ya.J.pad0(t.TLE1.substr(2,5).trim(),5),v=1440/parseFloat(p);let f=0;for(let s=0;s<360;s++){const l=Ya.J.pad0(f.toFixed(4),8),{TLE1:r,TLE2:b}=fi.L.createTle({sat:t,inc:d,meanmo:p,rasc:o,argPe:c,meana:l,ecen:n,epochyr:u,epochday:g,intl:m,scc:h});if(i+=e.insertNewAnalystSatellite(r,b,a+s,(1e5+s).toString()).sccNum.toString()+",",f+=360/v*4,f>=360)break}i=i.substr(0,i.length-1),l.I.get(r.Yv.UiManager).doSearch(i),this.isReferenceSatsActive=!0}}ji.PLUGIN_NAME="Orbit References";const Yi=new ji,Vi=a.p+"../img/satchng.png";var Ji=a(6393),Ki=a(7727);class Wi extends te.c{constructor(){super(Wi.PLUGIN_NAME),this.bottomIconImg=Vi,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="constellations-menu" class="side-menu-parent start-hidden text-select">
    <div id="constellation-menu" class="side-menu">
      <ul>
        <h5 class="center-align">Constellations</h5>
        <li class="divider"></li>
        <li class="menu-selectable" data-group="SpaceStations">Space Stations</li>
        <li class="menu-selectable" data-group="AmatuerRadio">Amateur Radio</li>
        <li class="menu-selectable" data-group="GPSGroup">GPS Satellites</li>
        <li class="menu-selectable" data-group="GalileoGroup">Galileo Satellites</li>
        <li class="menu-selectable" data-group="GlonassGroup">Glonass Satellites</li>
        <li class="menu-selectable" data-group="aehf">Milstar and AEHF</li>
        <li class="menu-selectable" data-group="wgs">DSCS and WGS</li>
        <!-- <li class="menu-selectable" data-group="starlink">Starlink</li> -->
        <li class="menu-selectable" data-group="sbirs">SBIRS</li>
      </ul>
    </div>
  </div>`,this.helpTitle="Constellations Menu",this.helpBody=c.keepTrackApi.html`The Constellations menu allows you to view groups of satellites.
  <br><br>
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),c.keepTrackApi.register({method:"uiManagerFinal",cbName:"constellations",cb:()=>{(0,p.G)("constellation-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(e){Wi.constellationMenuClick(e.target.dataset.group)}))}))}})}static constellationMenuClick(e){const t=c.keepTrackApi.getTimeManager(),a=c.keepTrackApi.getCatalogManager(),i=c.keepTrackApi.getGroupsManager();if(void 0!==i){switch(e){case"SpaceStations":i.groupList[e]||i.createGroup(Q.Y.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":i.groupList[e]||i.createGroup(Q.Y.NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":i.groupList[e]||i.createGroup(Q.Y.NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":i.groupList[e]||i.createGroup(Q.Y.NAME_REGEX,/NAVSTAR/u,e);break;case"AmatuerRadio":i.groupList[e]||i.createGroup(Q.Y.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":i.groupList[e]||i.createGroup(Q.Y.SCC_NUM,a.id2satnum(a.satLinkManager.aehf),e),(0,u.QP)((()=>{Ki.B.clear(),a.satLinkManager.showLinks(Ki.B,Ji.W6.Aehf,t)}));break;case"wgs":i.groupList[e]||i.createGroup(Q.Y.SCC_NUM,a.id2satnum(a.satLinkManager.wgs.concat(a.satLinkManager.dscs)),e),(0,u.QP)((()=>{Ki.B.clear(),a.satLinkManager.showLinks(Ki.B,Ji.W6.Wgs,t)}));break;case"starlink":i.groupList[e]||i.createGroup(Q.Y.NAME_REGEX,/STARLINK/u,e),(0,u.QP)((()=>{Ki.B.clear(),a.satLinkManager.showLinks(Ki.B,Ji.W6.Starlink,t)}));break;case"sbirs":i.groupList[e]||i.createGroup(Q.Y.SCC_NUM,a.id2satnum(a.satLinkManager.sbirs),e),(0,u.QP)((()=>{Ki.B.clear(),a.satLinkManager.showLinks(Ki.B,Ji.W6.Sbirs,t)}));break;default:throw new Error("Unknown group name: "+e)}Wi.groupSelected(e)}}static groupSelected(e){if(void 0===e)return;const t=c.keepTrackApi.getCatalogManager(),a=c.keepTrackApi.getGroupsManager();if(void 0===a.groupList[e])throw new Error("Unknown group name: "+e);const i=(0,p.G)("search");a.selectGroup(a.groupList[e]),i.innerHTML=a.groupList[e].objects.reduce(((e,a)=>`${e}${t.getSat(a).sccNum},`),"").slice(0,-1),t.setSelectedSat(-1);const s=c.keepTrackApi.getUiManager();s.searchManager.doSearch(a.groupList[e].objects.map((e=>t.getSat(e).sccNum)).join(",")),settingsManager.isMobileModeEnabled&&s.searchManager.searchToggle(!0),s.hideSideMenus()}}Wi.PLUGIN_NAME="Sat Constellations";const Xi=new Wi,Zi=a.p+"../img/sat2.png";class qi extends te.c{constructor(){super("Satellite Field of View"),this.bottomIconCallback=()=>{this.isMenuButtonEnabled?(this.enableFovView_(),settingsManager.isSatOverflyModeOn=!0):(this.disableFovView_(),settingsManager.isSatOverflyModeOn=!1)},this.isRequireSatelliteSelected=!0,this.bottomIconElementName="menu-sat-fov",this.bottomIconLabel="Satellite FOV",this.bottomIconImg=Zi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.changeSensorMarkers,cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,p.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}})}disableFovView_(){const e=l.I.get(r.Yv.CatalogManager);settingsManager.isSatOverflyModeOn=!1,this.setBottomIconToUnselected(),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}static getSatFieldOfView_(){const e=(0,p.G)("satFieldOfView",!0);if(!e)return 30;if(""===e.value)return S.x.warn("No Satellite FOV value entered. Using default value of 30 degrees."),30;const t=parseFloat(e.value);return isNaN(t)||t<0||t>180?(S.x.warn("Invalid Satellite FOV value. Using default value of 30 degrees."),30):t}enableFovView_(){const e=l.I.get(r.Yv.CatalogManager),t=l.I.get(r.Yv.UiManager),a=l.I.get(r.Yv.ColorSchemeManager);c.keepTrackApi.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isShowSurvFence=!1,settingsManager.isFOVBubbleModeOn=!1,settingsManager.isSatOverflyModeOn=!0,this.setBottomIconToSelected(),""!==(0,p.G)("search").value&&t.doSearch((0,p.G)("search").value);const i=qi.getSatFieldOfView_();e.satCruncher.postMessage({isShowFOVBubble:"reset",isShowSurvFence:"disable"}),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"enable",selectedSatFOV:i}),a.setColorScheme(settingsManager.currentColorScheme,!0)}}const Qi=new qi,es=a.p+"../img/photoManager.png";class ts extends te.c{constructor(){super(ts.PLUGIN_NAME),this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="SatellitePhotos",this.bottomIconImg=es,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="sat-photo-menu" class="side-menu-parent start-hidden text-select">
    <div id="sat-photo-menu-content" class="side-menu">
      <ul>
        <h5 class="center-align">Satellites Imagery List</h5>
        <li id="meteosat8-link" class="link satPhotoRow">MeteoSat 8</li>
        <li id="meteosat11-link" class="link satPhotoRow">MeteoSat 11</li>
        <li id="himawari8-link" class="link satPhotoRow">Himawari 8</li>
        <li id="discovr-link" class="link satPhotoRow">DSCOVR</li>
        <li id="goes1-link" class="link satPhotoRow">GOES 1</li>
      </ul>
    </div>
  </div>`,this.helpTitle="Satellite Photos Menu",this.helpBody=c.keepTrackApi.html`The Satellite Photos Menu is used for displaying live photos from select satellites.
  <br><br>
  Note - changes in the image API may cause the wrong satellite to be selected in KeepTrack.`}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,p.G)("meteosat8-link").addEventListener("click",(()=>{ts.loadPic(10489,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")})),(0,p.G)("meteosat11-link").addEventListener("click",(()=>{ts.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")})),(0,p.G)("himawari8-link").addEventListener("click",(()=>{ts.himawari8()})),(0,p.G)("discovr-link").addEventListener("click",(()=>{ts.discovr()})),(0,p.G)("goes1-link").addEventListener("click",(()=>{ts.loadPic(8366,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")}))}})}static discovr(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{ts.dscovrLoaded(e)},e.onerror=function(){console.debug("https://epic.gsfc.nasa.gov/ request failed!")},c.keepTrackApi.getCatalogManager().selectSat(-1),e.send()}static dscovrLoaded(e){if(e.status>=200&&e.status<400){const t=JSON.parse(e.response),a=t[0].image,i=t[0].identifier,s=i.slice(0,4),n=i.slice(4,6),o=i.slice(6,8),l=i.slice(8,10),r=i.slice(10,12),d=i.slice(12,14),p=new Date(Date.UTC(s,n-1,o,l-4,r,d));c.keepTrackApi.getMainCamera().camSnap((0,it.Lx)(t[0].centroid_coordinates.lat),(0,it.Zs)(t[0].centroid_coordinates.lon,p)),c.keepTrackApi.getMainCamera().changeZoom(.7),ts.colorbox(`https://epic.gsfc.nasa.gov/archive/natural/${s}/${n}/${o}/png/${a}.png`)}}static loadPic(e,t){c.keepTrackApi.getCatalogManager().selectSat(c.keepTrackApi.getCatalogManager().getSatFromObjNum(e).id),c.keepTrackApi.getMainCamera().changeZoom(.7),ts.colorbox(t)}static himawari8(){c.keepTrackApi.getCatalogManager().selectSat(c.keepTrackApi.getCatalogManager().getSatFromObjNum(40267).id),c.keepTrackApi.getMainCamera().changeZoom(.7);let e=c.keepTrackApi.getTimeManager().simulationTimeObj;e.getTime()<Date.now()?e=new Date(e.getTime()-18e5):(l.I.get(r.Yv.UiManager).toast("Can't load pictures from the future. Loading most recent photos.","caution"),e=new Date(Date.now()-18e5));const t=e.getUTCFullYear(),a=(e.getUTCMonth()+1).toString().padStart(2,"0"),i=e.getUTCDate().toString().padStart(2,"0"),s=e.getUTCHours().toString().padStart(2,"0"),n=(10*Math.floor(e.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,Li.Us)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${t}/${a}/${i}/${s}${n}00_0_0.png`,{image:!0})}}ts.PLUGIN_NAME="Satellite Photos",ts.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,Li.Us)(e,{image:!0})};const as=new ts,is=a.p+"../img/video.png";class ss{constructor(e,t,a,i){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=a,this.onError_=i}static handleError(e){e.message.includes("Permission denied")?S.x.warn('Permission denied! Did you click "Share"?'):S.x.warn("Error:"+e)}getStream(e){return t=this,a=void 0,s=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch((e=>(ss.handleError(e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch((e=>(ss.handleError(e),null))):(S.x.warn("Compatibility Error with Recording"),this.onError_(),!1):(S.x.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((i=void 0)||(i=Promise))((function(e,n){function o(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof i?a:new i((function(e){e(a)}))).then(o,l)}r((s=s.apply(t,a||[])).next())}));var t,a,i,s}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(S.x.debug("Recorder stopped."),this.stream_.getTracks().forEach((e=>e.stop())),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,a=new Blob(this.recordedBlobs,{type:this.supportedType}),i=window.URL.createObjectURL(a),s=document.createElement("a");s.style.display="none",s.href=i,s.download=t,document.body.appendChild(s),s.click(),setTimeout((()=>{document.body.removeChild(s),window.URL.revokeObjectURL(i)}),100)}start(){this.getStream().then((e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;let t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(let e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&S.x.debug("No supported type found for MediaRecorder");let a={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||ss.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,a)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}S.x.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${a}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),S.x.debug(`Created MediaRecorder ${this.mediaRecorder_}`)})).catch((()=>{}))}}ss.BIT_RATE_30_MBPS=3e7,ss.BIT_RATE_20_MBPS=2e7,ss.BIT_RATE_10_MBPS=1e7,ss.BIT_RATE_5_MBPS=5e6,ss.BIT_RATE_2_MBPS=2e6,ss.BIT_RATE_1_MBPS=1e6;class ns extends te.c{constructor(){super("Screen Recorder"),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return S.x.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){S.x.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=is,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.uiManagerOnReady,cbName:this.PLUGIN_NAME,cb:()=>{try{this.streamManagerInstance=new ss(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save(ns.FILE_NAME),this.setBottomIconToUnselected()}}ns.FILE_NAME="keeptrack.webm";const os=new ns,ls=a.p+"../img/camera.png";class rs extends te.c{constructor(){super("Screenshot"),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=ls,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.rmbL1ElementName="save-rmb",this.rmbL1Html=c.keepTrackApi.html`
    <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Save Image &#x27A4;</a></li>
  `,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.isRmbOnSat=!0,this.rmbL2ElementName="save-rmb-menu",this.rmbL2Html=c.keepTrackApi.html`
    <ul class='dropdown-contents'>
      <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
      <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
      <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
    </ul>
  `,this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.altCanvasResize,cbName:this.PLUGIN_NAME,cb:()=>this.queuedScreenshot_}),c.keepTrackApi.register({method:c.M8.endOfDraw,cbName:this.PLUGIN_NAME,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){let e=document.createElement("a");e.download="keeptrack.png";let t=(new Date).getUTCFullYear(),a=settingsManager.copyrightOveride?"":`©${t} KEEPTRACK.SPACE`;e.href=rs.watermarkedDataUrl(a),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=l.I.get(r.Yv.DrawManager).canvas,a=document.createElement("canvas"),i=a.getContext("2d");let s=a.width=t.width,n=a.height=t.height;i.drawImage(t,0,0),i.font="24px nasalization";let o=i.measureText(e).width;i.globalAlpha=1,i.fillStyle="white",i.fillText(e,s-o-30,n-30);const{classificationstr:c,classificationColor:d}=rs.calculateClassificationText();""!==c&&(i.font="24px nasalization",i.globalAlpha=1,i.fillStyle=d,o=i.measureText(c).width,i.fillText(c,s/2-o,n-20),i.fillText(c,s/2-o,34)),document.body.appendChild(a);let p=a.toDataURL();return a.parentNode.removeChild(a),p}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:Xa.getColors(settingsManager.classificationStr).backgroundColor}}}const cs=new rs,ds=a.p+"../img/fov.png";class ps extends te.c{constructor(){super("Sensor Field of View"),this.bottomIconCallback=()=>{this.verifySensorSelected()&&(settingsManager.isFOVBubbleModeOn&&!settingsManager.isShowSurvFence?this.disableFovView_():settingsManager.isFOVBubbleModeOn||this.enableFovView())},this.bottomIconElementName="menu-sensor-fov",this.bottomIconLabel="Sensor FOV",this.bottomIconImg=ds,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,p.G)(this.bottomIconElementName).classList.remove(te.c.iconDisabledClassString),this.isIconDisabled=!1):((0,p.G)(this.bottomIconElementName).classList.add(te.c.iconDisabledClassString),this.isIconDisabled=!0,this.isMenuButtonEnabled=!1,(0,p.G)(this.bottomIconElementName).classList.remove(te.c.iconSelectedClassString))}}),c.keepTrackApi.register({method:c.M8.changeSensorMarkers,cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,p.G)(this.bottomIconElementName).classList.remove(te.c.iconSelectedClassString)}})}disableFovView_(){settingsManager.isFOVBubbleModeOn=!1,this.setBottomIconToUnselected(),c.keepTrackApi.getCatalogManager().satCruncher.postMessage({isShowFOVBubble:"reset",isShowSurvFence:"disable"})}enableFovView(){c.keepTrackApi.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isFOVBubbleModeOn=!0,settingsManager.isSatOverflyModeOn=!1,settingsManager.isShowSurvFence=!1,this.setBottomIconToSelected(),c.keepTrackApi.getCatalogManager().satCruncher.postMessage({isShowFOVBubble:"enable",isShowSurvFence:"disable"}),c.keepTrackApi.getCatalogManager().satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}}const us=new ps,gs=a.p+"../img/fence.png";class ms extends te.c{constructor(){super(ms.PLUGIN_NAME),this.bottomIconCallback=()=>{const e=c.keepTrackApi.getCatalogManager();settingsManager.isShowSurvFence?this.disableSurvView_(e):this.enableSurvView_(e)},this.bottomIconElementName="menu-sensor-surv-fence",this.bottomIconLabel="Sensor Fence",this.bottomIconImg=gs,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.isRequireSensorSelected=!0,settingsManager.isShowSurvFence=!1}disableSurvView_(e){settingsManager.isShowSurvFence=!1,(0,p.G)(this.bottomIconElementName).classList.remove(te.c.iconSelectedClassString),e.satCruncher.postMessage({isShowSurvFence:"disable",isShowFOVBubble:"reset"})}enableSurvView_(e){c.keepTrackApi.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isShowSurvFence=!0,settingsManager.isSatOverflyModeOn=!1,(0,p.G)(this.bottomIconElementName).classList.add(te.c.iconSelectedClassString),e.satCruncher.postMessage({isShowFOVBubble:"enable",isShowSurvFence:"enable"}),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,p.G)(this.bottomIconElementName).classList.remove(te.c.iconDisabledClassString),this.isIconDisabled=!1):((0,p.G)(this.bottomIconElementName).classList.add(te.c.iconDisabledClassString),this.isIconDisabled=!0,this.isMenuButtonEnabled=!1,(0,p.G)(this.bottomIconElementName).classList.remove(te.c.iconSelectedClassString))}}),c.keepTrackApi.register({method:c.M8.changeSensorMarkers,cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,p.G)(this.bottomIconElementName).classList.remove(te.c.iconSelectedClassString)}})}}ms.PLUGIN_NAME="Sensor Surveillance Fence";const hs=new ms,bs=a.p+"../img/custom.png";var vs=a(3301);class fs{static updateSensorPosition(e){const t=l.I.get(r.Yv.TimeManager),a=l.I.get(r.Yv.CatalogManager),i=l.I.get(r.Yv.SensorManager),{lon:s,lat:n,alt:o,minaz:d,maxaz:p,minel:u,maxel:g,minrange:m,maxrange:h}=fs.updateSettingsManager(e);i.whichRadar="CUSTOM",fs.updateCustomSensorUi_();const b={lat:n,lon:s,alt:o,obsminaz:d,obsmaxaz:p,obsminel:u,obsmaxel:g,obsminrange:m,obsmaxrange:h};a.satCruncher.postMessage({typ:"sensor",setlatlong:!0,sensor:b}),vs.E.updateSensorUiStyling([b]),a.setSelectedSat(-1);const v=c.keepTrackApi.getMainCamera();h>6e3?v.changeZoom("geo"):v.changeZoom("leo"),v.camSnap((0,it.Lx)(n),(0,it.Zs)(s,t.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(fs.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,p.G)("cs-lat"),t=(0,p.G)("cs-lon"),a=(0,p.G)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),a.value=settingsManager.geolocation.alt.toString(),a.dispatchEvent(new Event("change")),(0,p.G)("cs-telescope").checked=!0,(0,p.G)("cs-minaz").disabled=!0,(0,p.G)("cs-maxaz").disabled=!0,(0,p.G)("cs-minel").disabled=!0,(0,p.G)("cs-maxel").disabled=!0,(0,p.G)("cs-minrange").disabled=!0,(0,p.G)("cs-maxrange").disabled=!0,(0,p.G)("cs-minaz-div").style.display="none",(0,p.G)("cs-maxaz-div").style.display="none",(0,p.G)("cs-minel-div").style.display="none",(0,p.G)("cs-maxel-div").style.display="none",(0,p.G)("cs-minrange-div").style.display="none",(0,p.G)("cs-maxrange-div").style.display="none",(0,p.G)("cs-minaz").value="0",(0,p.G)("cs-maxaz").value="360",(0,p.G)("cs-minel").value="10",(0,p.G)("cs-maxel").value="90",(0,p.G)("cs-minrange").value="100",(0,p.G)("cs-maxrange").value="50000",(0,p.G)("sensor-type").innerHTML="Telescope",(0,p.G)("sensor-info-title").innerHTML="Custom Sensor",(0,p.G)("sensor-country").innerHTML="Custom Sensor"}catch(e){S.x.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const ks=a.p+"../img/multi-site.png";class Ss extends te.c{constructor(){super(Ss.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.refreshSideMenuData()},this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=ks,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=c.keepTrackApi.html`
    The Multi-Site Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a satellite and multiple sensors.
    A satellite must first be selected before the menu can be used.
    <br><br>
    By default the menu will calculate the look angles for all sensors in the Space Surveillance Netowrk.
    If you would like to calculate the look angles for additional sensors, you can export a csv file at the bottom of the menu.
    The csv file will contain look angles for all sensors.
    <br><br>
    Clicking on a row in the table will select the sensor and change the simulation time to the time of the look angle.`,this.sideMenuElementName="multi-site-look-angles-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
    <div id="${this.sideMenuElementName}" class="side-menu-parent start-hidden text-select">
        <div id="multi-site-look-angles-content" class="side-menu">
        <div class="row">
            <h5 class="center-align">Multi-Sensor Look Angles</h5>
            <div id="multi-site-look-angles-sensor-list">
            </div>
            <table id="multi-site-look-angles-table" class="center-align striped-light centered"></table>
            <br />
            <center>
            <button id="multi-site-look-angles-export" class="btn btn-ui waves-effect waves-light">Export &#9658;</button>
            </center>
        </div>
        </div>
    </div>`,this.disabledSensors=[],this.lookanglesLength=1,this.lookanglesInterval=30}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,p.G)("multi-site-look-angles-export"))||void 0===e||e.addEventListener("click",(()=>{const e=c.keepTrackApi.getSensorManager().lastMultiSiteArray.map((e=>({time:e.time,sensor:e.name,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)})));(0,f.Eb)(e,"multiSiteLooks")}))}}),c.keepTrackApi.register({method:c.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(!(!this.isMenuButtonEnabled||(null==e?void 0:e.sccNum)&&c.keepTrackApi.getSensorManager().isSensorSelected()))return this.setBottomIconToDisabled(),void this.closeSideMenu();this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&this.refreshSideMenuData()}})}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData()}})}refreshSideMenuData(){this.isMenuButtonEnabled&&-1!==c.keepTrackApi.getCatalogManager().selectedSat&&(0,u.QP)((()=>{const e=c.keepTrackApi.getCatalogManager(),t=(0,p.G)("multi-site-look-angles-sensor-list");t.innerHTML="";const a=[];for(const i of c.keepTrackApi.getSensorManager().sensorListUS){const s=document.createElement("button");s.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors.includes(i)&&s.classList.add("btn-red"),a.push(i),s.innerText=i.shortName,s.addEventListener("click",(()=>{s.classList.contains("btn-red")?(s.classList.remove("btn-red"),this.disabledSensors.splice(this.disabledSensors.indexOf(i),1)):(s.classList.add("btn-red"),this.disabledSensors.push(i));const t=e.getSat(e.selectedSat,r.C_.EXTRA_ONLY);this.getlookanglesMultiSite(t,a.filter((e=>!this.disabledSensors.includes(e))))})),t.appendChild(s),t.appendChild(document.createTextNode(" "))}const i=e.getSat(e.selectedSat,r.C_.EXTRA_ONLY);this.getlookanglesMultiSite(i,a.filter((e=>!this.disabledSensors.includes(e))))}))}getlookanglesMultiSite(e,t){const a=c.keepTrackApi.getTimeManager(),i=c.keepTrackApi.getSensorManager();if(!t){t=[];for(const e in i.sensors){const a=i.sensors[e];t.push(a)}}const s=!i.isSensorSelected(),n=[...i.currentSensors],o=b.rE/(e.satrec.no*b.rE/b.gc),l=[];for(const i of t){if(i.obsmaxrange<e.perigee&&(!i.obsmaxrange2||i.obsmaxrange2<e.perigee))continue;vs.E.updateSensorUiStyling([i]);let t=0;for(let s=0;s<24*this.lookanglesLength*60*60;s+=this.lookanglesInterval){t=1e3*s;let n=a.getOffsetTimeObj(t),r=Ss.propagateMultiSite_(n,e.satrec,i);""!==r.time&&(l.push(r),s+=60*o*.75)}}l.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),i.lastMultiSiteArray=l,s?i.setCurrentSensor(i.defaultSensor):i.setCurrentSensor(n),Ss.populateMultiSiteTable(l)}static propagateMultiSite_(e,t,a){const i=h.$.getRae(e,t,a);return h.$.checkIsInView(a,i)?{time:e.toISOString(),el:i.el,az:i.az,rng:i.rng,name:a.shortName}:{time:"",el:0,az:0,rng:0,name:""}}static populateMultiSiteTable(e){const t=c.keepTrackApi.getSensorManager(),a=(0,p.G)("multi-site-look-angles-table");a.innerHTML="";let i=a.insertRow(),s=i.insertCell();s.appendChild(document.createTextNode("Time")),s.setAttribute("style","text-decoration: underline");let n=i.insertCell();n.appendChild(document.createTextNode("El")),n.setAttribute("style","text-decoration: underline");let o=i.insertCell();o.appendChild(document.createTextNode("Az")),o.setAttribute("style","text-decoration: underline");let l=i.insertCell();l.appendChild(document.createTextNode("Rng")),l.setAttribute("style","text-decoration: underline");let r=i.insertCell();r.appendChild(document.createTextNode("Sensor")),r.setAttribute("style","text-decoration: underline");const d=c.keepTrackApi.getTimeManager();for(let c=0;c<e.length;c++)t.sensorListUS.includes(t.sensors[e[c].name])&&(i=a.insertRow(),i.setAttribute("class","link"),s=i.insertCell(),s.appendChild(document.createTextNode((0,gi.v)(e[c].time,"isoDateTime",!0))),n=i.insertCell(),n.appendChild(document.createTextNode(e[c].el.toFixed(1))),o=i.insertCell(),o.appendChild(document.createTextNode(e[c].az.toFixed(0))),l=i.insertCell(),l.appendChild(document.createTextNode(e[c].rng.toFixed(0))),r=i.insertCell(),r.appendChild(document.createTextNode(e[c].name)),i.addEventListener("click",(()=>{d.changeStaticOffset(new Date(e[c].time).getTime()-(new Date).getTime());const a=t.sensors[e[c].name];t.setSensor(a,a.staticNum)})))}}Ss.PLUGIN_NAME="Multi Site Look Angles";const ys=new Ss;class Ms extends te.c{constructor(){super(Ss.PLUGIN_NAME),this.bottomIconCallback=()=>{if(this.isMenuButtonEnabled){const e=c.keepTrackApi.getSensorManager();e.isSensorSelected()&&((0,p.G)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,p.G)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,p.G)("cs-hei").value=e.currentSensors[0].alt.toString())}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=bs,this.sideMenuElementName="custom-sensor-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
    <div id="custom-sensor-menu" class="side-menu-parent start-hidden text-select">
        <div id="customSensor-content" class="side-menu">
        <div class="row">
            <h5 class="center-align">Custom Sensor</h5>
            <form id="customSensor">
            <div class="input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Latitude in Decimal Form (ex: 43.283)">
                <input id="cs-lat" type="text" value="0" />
                <label for="cs-lat" class="active">Latitude</label>
            </div>
            <div class="input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Longitude in Decimal Form (ex: -73.283)">
                <input id="cs-lon" type="text" value="0" />
                <label for="cs-lon" class="active">Longitude</label>
            </div>
            <div class="input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Elevation in kilometers (ex: 0.645)">
                <input id="cs-hei" type="text" value="0" />
                <label for="cs-hei" class="active">Elevation Above Sea Level (Km)</label>
            </div>
            <div class="input-field col s12">
                <select id="cs-type">
                <option value="Observer">Observer</option>
                <option value="Optical">Optical</option>
                <option value="Phased Array Radar">Phased Array Radar</option>
                <option value="Mechanical">Mechanical</option>
                </select>
                <label>Type of Sensor</label>
            </div>
            <div class="switch row tooltipped" data-position="right" data-delay="50" data-tooltip="Is this Sensor a Telescope?">
                <label>
                <input id="cs-telescope" type="checkbox" checked="false" />
                <span class="lever"></span>
                Telescope
                </label>
            </div>
            <div id="cs-minaz-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Azimuth in degrees (ex: 50)">
                <input id="cs-minaz" type="text" value="0" />
                <label for="cs-minaz" class="active">Minimum Azimuth</label>
            </div>
            <div id="cs-maxaz-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Azimuth in degrees (ex: 120)">
                <input id="cs-maxaz" type="text" value="360" />
                <label for="cs-maxaz" class="active">Maximum Azimuth</label>
            </div>
            <div id="cs-minel-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Elevation in degrees (ex: 10)">
                <input id="cs-minel" type="text" value="10" />
                <label for="cs-minel" class="active">Minimum Elevation</label>
            </div>
            <div id="cs-maxel-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Elevation in degrees (ex: 90)">
                <input id="cs-maxel" type="text" value="90" />
                <label for="cs-maxel" class="active">Maximum Elevation</label>
            </div>
            <div id="cs-minrange-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Range in kilometers (ex: 500)">
                <input id="cs-minrange" type="text" value="100" />
                <label for="cs-minrange" class="active">Minimum Range</label>
            </div>
            <div id="cs-maxrange-div" class="start-hidden input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Range in kilometers (ex: 20000)">
                <input id="cs-maxrange" type="text" value="50000" />
                <label for="cs-maxrange" class="active">Maximum Range</label>
            </div>
            <div class="center-align">
                <button id="cs-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Add Custom Sensor &#9658;</button>
                <br />
                <br />
                <button id="cs-clear" class="btn btn-ui waves-effect waves-light" name="action">Clear Custom Sensors &#9658;</button>
                <br />
                <br />
                <button id="cs-geolocation" class="btn btn-ui waves-effect waves-light" name="search">Use Geolocation &#9658;</button>
            </div>
            </form>
        </div>
        </div>
    </div>`,this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=c.keepTrackApi.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{Ms.addCustomSensorFormSubmitListener(),Ms.addTelescopeClickListener_(),Ms.addCustomSensorBtnCLickListener_(),Ms.addClearCustomSensorListener_(),Ms.addUseGeolocationListener_()}})}static addCustomSensorFormSubmitListener(){(0,p.G)("customSensor").addEventListener("submit",(e=>{e.preventDefault()}))}static addUseGeolocationListener_(){(0,p.G)("cs-geolocation").addEventListener("click",fs.useCurrentGeolocationAsSensor)}static addClearCustomSensorListener_(){(0,p.G)("cs-clear").addEventListener("click",(()=>{c.keepTrackApi.getSensorManager().clearSecondarySensors()}))}static addCustomSensorBtnCLickListener_(){(0,p.G)("cs-submit").addEventListener("click",(()=>{Ms.processCustomSensorSubmit_()}))}static processCustomSensorSubmit_(){var e,t,a,i,s;null===(e=(0,p.G)("menu-sensor-info"))||void 0===e||e.classList.remove("bmenu-item-disabled"),null===(t=(0,p.G)("menu-fov-bubble"))||void 0===t||t.classList.remove("bmenu-item-disabled"),null===(a=(0,p.G)("menu-surveillance"))||void 0===a||a.classList.remove("bmenu-item-disabled"),null===(i=(0,p.G)("menu-planetarium"))||void 0===i||i.classList.remove("bmenu-item-disabled"),null===(s=(0,p.G)("menu-astronomy"))||void 0===s||s.classList.remove("bmenu-item-disabled"),(0,p.G)("sensor-type").value=(0,p.G)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,p.G)("sensor-info-title").innerHTML="Custom Sensor",(0,p.G)("sensor-country").innerHTML="Custom Sensor";const n=Ms.str2Deg((0,p.G)("cs-lon").value),o=Ms.str2Deg((0,p.G)("cs-lat").value),l=(0,p.G)("cs-hei").value,r=(0,p.G)("cs-type").value,d=(0,p.G)("cs-minaz").value,u=(0,p.G)("cs-maxaz").value,g=(0,p.G)("cs-minel").value,m=(0,p.G)("cs-maxel").value,h=(0,p.G)("cs-minrange").value,b=(0,p.G)("cs-maxrange").value;let v=st.SpaceObjectType.OBSERVER;switch(r){case"Observer":v=st.SpaceObjectType.OBSERVER;break;case"Optical":v=st.SpaceObjectType.OPTICAL;break;case"Mechanical":v=st.SpaceObjectType.MECHANICAL;break;case"Phased Array Radar":v=st.SpaceObjectType.PHASED_ARRAY_RADAR;break;default:S.x.info("Unknown sensor type: "+r),v=st.SpaceObjectType.OBSERVER}c.keepTrackApi.getSensorManager().addSecondarySensor({id:null,lat:o,lon:n,alt:Ms.str2Km(l),obsminaz:Ms.str2Deg(d),obsmaxaz:Ms.str2Deg(u),obsminel:Ms.str2Deg(g),obsmaxel:Ms.str2Deg(m),obsminrange:Ms.str2Km(h),obsmaxrange:Ms.str2Km(b),type:v,name:"Custom Sensor",country:"Custom Sensor",shortName:"Custom Sensor",sun:"No Impact",zoom:Ms.str2Km(b)>6e3?"geo":"leo",volume:!1})}static addTelescopeClickListener_(){(0,p.G)("cs-telescope").addEventListener("click",(()=>{if((0,p.G)("cs-telescope").checked)(0,p.G)("cs-minaz-div").style.display="none",(0,p.G)("cs-maxaz-div").style.display="none",(0,p.G)("cs-minel-div").style.display="none",(0,p.G)("cs-maxel-div").style.display="none",(0,p.G)("cs-minrange-div").style.display="none",(0,p.G)("cs-maxrange-div").style.display="none",(0,p.G)("cs-minaz").value="0",(0,p.G)("cs-maxaz").value="360",(0,p.G)("cs-minel").value="10",(0,p.G)("cs-maxel").value="90",(0,p.G)("cs-minrange").value="100",(0,p.G)("cs-maxrange").value="1000000";else{(0,p.G)("cs-minaz-div").style.display="block",(0,p.G)("cs-maxaz-div").style.display="block",(0,p.G)("cs-minel-div").style.display="block",(0,p.G)("cs-maxel-div").style.display="block",(0,p.G)("cs-minrange-div").style.display="block",(0,p.G)("cs-maxrange-div").style.display="block";const e=c.keepTrackApi.getSensorManager();e.isSensorSelected()&&((0,p.G)("cs-minaz").value=e.currentSensors[0].obsminaz.toString(),(0,p.G)("cs-maxaz").value=e.currentSensors[0].obsmaxaz.toString(),(0,p.G)("cs-minel").value=e.currentSensors[0].obsminel.toString(),(0,p.G)("cs-maxel").value=e.currentSensors[0].obsmaxel.toString(),(0,p.G)("cs-minrange").value=e.currentSensors[0].obsminrange.toString(),(0,p.G)("cs-maxrange").value=e.currentSensors[0].obsmaxrange.toString())}}))}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}Ms.PLUGIN_NAME="Custom Sensor";const As=new Ms,Ts=a.p+"../img/lookangles.png";class Cs extends te.c{constructor(){super(Cs.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.refreshSideMenuData()},this.bottomIconElementName="look-angles-icon",this.bottomIconLabel="Look Angles",this.bottomIconImg=Ts,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:450},this.helpTitle="Look Angles Menu",this.helpBody=c.keepTrackApi.html`
    The Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a sensor and a satellite.
    A satellite and sensor must first be selected before the menu can be used.
    <br><br>
    The toggle only rise and set times will only calculate the rise and set times of the satellite.
    This is useful for quickly determining when a satellite will be visible to a sensor.
    <br><br>
    The search range can be modified by changing the length and interval options.`,this.isRiseSetLookangles=!0,this.lookanglesInterval=30,this.lookanglesLength=2,this.sideMenuElementName="look-angles-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
    <div id="look-angles-menu" class="side-menu-parent start-hidden text-select">
        <div id="look-angles-content" class="side-menu">
            <div class="row">
            <h5 class="center-align">Sensor Look Angles</h5>
            <div class="row light-blue darken-3" style="height:4px; display:block;"></div>
            <div id="settings-look-angles">
                <h5 class="center-align">Look Angles Settings</h5>
                <div class="switch row">
                <label>
                    <input id="settings-riseset" type="checkbox" checked="true" />
                    <span class="lever"></span>
                    Show Only Rise and Set Times
                </label>
                </div>
                <div class="input-field col s6">
                <input id="look-angles-length" value="2" type="text" class="tooltipped" data-position="right" data-delay="50" data-tooltip="How Many Days of Look Angles Should be Calculated" />
                <label for="look-anglesLength" class="active">Length (Days)</label>
                </div>
                <div class="input-field col s6">
                <input id="look-angles-interval" value="30" type="text" class="tooltipped" data-position="right" data-delay="50" data-tooltip="Seconds Between Each Line of Look Angles" />
                <label for="look-anglesInterval" class="active">Interval</label>
                </div>
                <div class="row"></div>
            </div>
            <table id="looks" class="center-align striped-light centered"></table>
            <br />
            <center>
                <button id="export-look-angles" class="btn btn-ui waves-effect waves-light">Export &#9658;</button>
            </center>
            </div>
        </div>
    </div>`,this.refreshSideMenuData=()=>{this.isMenuButtonEnabled&&(0,u.QP)((()=>{const e=c.keepTrackApi.getCatalogManager().getSat(c.keepTrackApi.getCatalogManager().selectedSat,r.C_.EXTRA_ONLY);this.getlookangles(e)}))}}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;(0,p.G)("look-angles-length").addEventListener("change",(()=>{this.lookanglesLength=parseInt((0,p.G)("look-angles-length").value),this.refreshSideMenuData()})),(0,p.G)("look-angles-interval").addEventListener("change",(()=>{this.lookanglesInterval=parseInt((0,p.G)("look-angles-interval").value),this.refreshSideMenuData()})),null===(e=(0,p.G)("export-look-angles"))||void 0===e||e.addEventListener("click",(()=>{(0,f.Eb)(this.lastlooksArray,"Look-Angles")})),(0,p.G)("settings-riseset").addEventListener("change",this.settingsRisesetChange.bind(this))}}),c.keepTrackApi.register({method:c.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(!(!this.isMenuButtonEnabled||(null==e?void 0:e.sccNum)&&c.keepTrackApi.getSensorManager().isSensorSelected()))return this.setBottomIconToDisabled(),void this.closeSideMenu();this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&e&&this.getlookangles(e)}})}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData()}})}getlookangles(e,t){const a=c.keepTrackApi.getTimeManager();if(!t){const e=c.keepTrackApi.getSensorManager();if(!e.isSensorSelected())return console.debug("satellite.getlookangles requires a sensor to be set!"),[];t=e.currentSensors}let i=this.isRiseSetLookangles?1:this.lookanglesInterval,s=[],n=0;for(let o=0;o<24*this.lookanglesLength*60*60;o+=i){n=1e3*o;let i=a.getOffsetTimeObj(n),l=Ai.J.getTearData(i,e.satrec,t,this.isRiseSetLookangles);if(""!==l.time&&s.push(l),s.length>=1500)break}return s.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),this.lastlooksArray=s,(()=>{let e=(0,p.G)("looks");e.innerHTML="";let t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Time")),i.setAttribute("style","text-decoration: underline");let n=t.insertCell();n.appendChild(document.createTextNode("El")),n.setAttribute("style","text-decoration: underline");let o=t.insertCell();o.appendChild(document.createTextNode("Az")),o.setAttribute("style","text-decoration: underline");let l=t.insertCell();l.appendChild(document.createTextNode("Rng")),l.setAttribute("style","text-decoration: underline");for(let t=0;t<s.length;t++)if(e.rows.length>0){const r=e.insertRow();r.setAttribute("class","link"),i=r.insertCell(),i.appendChild(document.createTextNode((0,gi.v)(s[t].time,"isoDateTime",!1))),i.addEventListener("click",(()=>{a.changeStaticOffset(new Date((0,gi.v)(s[t].time,"isoDateTime",!1)+"z").getTime()-a.realTime),a.calculateSimulationTime(),c.keepTrackApi.methods.updateDateTime(new Date(a.dynamicOffsetEpoch+a.staticOffset))})),n=r.insertCell(),n.appendChild(document.createTextNode(s[t].el.toFixed(1))),o=r.insertCell(),o.appendChild(document.createTextNode(s[t].az.toFixed(0))),l=r.insertCell(),l.appendChild(document.createTextNode(s[t].rng.toFixed(0)))}})(),s}settingsRisesetChange(e,t){if(null==e)throw new Error("e is undefined");null!=t||(t=(0,p.G)("settings-riseset").checked),this.isRiseSetLookangles=!!t,this.refreshSideMenuData()}}Cs.PLUGIN_NAME="Look Angles";const ws=new Cs,xs=a.p+"../img/radio-tower.png";class Ls extends te.c{constructor(){super(Ls.PLUGIN_NAME),this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.getSensorInfo()},this.bottomIconElementName="sensor-info-icon",this.bottomIconLabel="Sensor Info",this.bottomIconImg=xs,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="sensor-info-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
    <div id="sensor-info-menu" class="side-menu-parent start-hidden text-select">
    <div id="sensor-content" class="side-menu">
        <div class="row">
        <h5 id="sensor-info-title" class="center-align">Sensor Name</h5>
        <div class="sensor-info-row" style="margin-top: 0px;">
            <div class="sensor-info-key">Country</div>
            <div class="sensor-info-value" id="sensor-country">USA</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Sensor Type</div>
            <div class="sensor-info-value" id="sensor-type">Unknown</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Latitude</div>
            <div class="sensor-info-value" id="sensor-latitude">0</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Longitude</div>
            <div class="sensor-info-value" id="sensor-longitude">0</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Min Azimuth</div>
            <div class="sensor-info-value" id="sensor-minazimuth">30 deg</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Max Azimuth</div>
            <div class="sensor-info-value" id="sensor-maxazimuth">30 deg</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Min Elevation</div>
            <div class="sensor-info-value" id="sensor-minelevation">60 deg</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Max Elevation</div>
            <div class="sensor-info-value" id="sensor-maxelevation">60 deg</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Min Range</div>
            <div class="sensor-info-value" id="sensor-minrange">1000 km</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Max Range</div>
            <div class="sensor-info-value" id="sensor-maxrange">1000 km</div>
        </div>
        <div class="center-align row">
            <button id="sensor-sun-btn" class="btn btn-ui waves-effect waves-light" type="button">Draw Line to Sun &#9658;</button>
        </div>
        <div class="center-align row">
            <button id="sensor-moon-btn" class="btn btn-ui waves-effect waves-light" type="button">Draw Line to Moon &#9658;</button>
        </div>
        </div>
    </div>
    </div>`,this.dragOptions={isDraggable:!0},this.helpTitle="Sensor Info",this.helpBody=c.keepTrackApi.html`
    Sensor Info provides information about the currently selected sensor.
    The information is based on publicly available data and may not always be 100% accurate.
    If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.
    <br><br>
    The information provided includes:
    <ul style="margin-left: 40px;">
      <li>
        Sensor Name
      </li>
      <li>
        Sensor Owner
      </li>
      <li>
        Sensor Type
      </li>
      <li>
        Sensor Field of View
      </li>
    </ul>
    <br>
    Additionally, lines can be quickly created from the sensor to the sun or moon from this menu.`}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{Ls.addSensorToSunBtnListener_(),Ls.addSensorToMoonBtnListener()}})}static addSensorToMoonBtnListener(){(0,p.G)("sensor-moon-btn").addEventListener("click",(()=>{const e=c.keepTrackApi.getSensorManager().currentSensors;1!==e.length&&c.keepTrackApi.getUiManager().toast("Please Select Only One Sensor","caution");const t=c.keepTrackApi.getDrawManager();c.keepTrackApi.getLineManager().create("sat2",[c.keepTrackApi.getCatalogManager().getSensorFromSensorName(e[0].name),t.sceneManager.moon.drawPosition[0],t.sceneManager.moon.drawPosition[1],t.sceneManager.moon.drawPosition[2]],"w")}))}static addSensorToSunBtnListener_(){(0,p.G)("sensor-sun-btn").addEventListener("click",(()=>{const e=c.keepTrackApi.getSensorManager().currentSensors;1!==e.length&&c.keepTrackApi.getUiManager().toast("Please Select Only One Sensor","caution");const t=c.keepTrackApi.getDrawManager();c.keepTrackApi.getLineManager().create("sat2",[c.keepTrackApi.getCatalogManager().getSensorFromSensorName(e[0].name),t.sceneManager.sun.drawPosition[0],t.sceneManager.sun.drawPosition[1],t.sceneManager.sun.drawPosition[2]],"o")}))}getSensorInfo(){if(!this.isHtmlAdded)return;const e=c.keepTrackApi.getSensorManager().currentSensors[0];(0,p.G)("sensor-latitude").innerHTML=e.lat.toString(),(0,p.G)("sensor-longitude").innerHTML=e.lon.toString(),(0,p.G)("sensor-minazimuth").innerHTML=e.obsminaz.toString(),(0,p.G)("sensor-maxazimuth").innerHTML=e.obsmaxaz.toString(),(0,p.G)("sensor-minelevation").innerHTML=e.obsminel.toString(),(0,p.G)("sensor-maxelevation").innerHTML=e.obsmaxel.toString(),(0,p.G)("sensor-minrange").innerHTML=e.obsminrange.toString(),(0,p.G)("sensor-maxrange").innerHTML=e.obsmaxrange.toString()}}Ls.PLUGIN_NAME="Sensor Info";const Es=new Ls,Is=a.p+"../img/radar.png";class Ns extends te.c{constructor(){super(Ns.PLUGIN_NAME),this.dependencies=[oi.s.PLUGIN_NAME],this.bottomIconCallback=()=>{var e;this.isMenuButtonEnabled&&((null===(e=c.keepTrackApi.getPlugin(Ua))||void 0===e?void 0:e.isMenuButtonEnabled)?((0,p.G)("cspocAllSensor").style.display="none",(0,p.G)("mwAllSensor").style.display="none",(0,p.G)("mdAllSensor").style.display="none",(0,p.G)("llAllSensor").style.display="none",(0,p.G)("rusAllSensor").style.display="none",(0,p.G)("prcAllSensor").style.display="none"):((0,p.G)("cspocAllSensor").style.display="block",(0,p.G)("mwAllSensor").style.display="block",(0,p.G)("mdAllSensor").style.display="block",(0,p.G)("llAllSensor").style.display="block",(0,p.G)("rusAllSensor").style.display="block",(0,p.G)("prcAllSensor").style.display="block"))},this.bottomIconElementName="sensor-list-icon",this.bottomIconLabel="Sensors",this.bottomIconImg=Is,this.sideMenuElementName="sensor-list-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
    <div id="sensor-list-menu" class="side-menu-parent start-hidden text-select">
        <div id="sensor-list-content" class="side-menu">
        <div class="row">
            <ul id="reset-sensor-text" class="sensor-reset-menu">
            <h5 id="reset-sensor-button" class="center-align menu-selectable">Reset Sensor</h5>
            <li class="divider"></li>
            </ul>
            <ul>
            <h5 class="center-align">CSpOC Sensors</h5>
            <li class="divider"></li>
            <li id="cspocAllSensor" class="menu-selectable" data-sensor="cspocAll">All CSpOC Sensors<span class="badge dark-blue-badge"
                data-badge-caption="Coalition"></span></li>
            <li id="mwAllSensor" class="menu-selectable" data-sensor="mwAll">All MW Sensors<span class="badge dark-blue-badge"
                data-badge-caption="Coalition"></span></li>
            <li class="menu-selectable" data-sensor="BLE">Beale<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="menu-selectable" data-sensor="COD">Cape Cod<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="menu-selectable" data-sensor="CAV">Cavalier<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="menu-selectable" data-sensor="CLR">Clear<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="menu-selectable" data-sensor="CDN">Cobra Dane<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="menu-selectable" data-sensor="EGL">Eglin<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="menu-selectable" data-sensor="FYL">Fylingdales<span class="badge dark-blue-badge"
                data-badge-caption="RAF"></span></li>
            <li class="menu-selectable" data-sensor="GLB">Globus II<span class="badge dark-blue-badge"
                data-badge-caption="NOR"></span></li>
            <li class="menu-selectable" data-sensor="MIL">Millstone<span class="badge dark-blue-badge"
                data-badge-caption="MIT"></span></li>
            <li class="menu-selectable" data-sensor="THL">Thule<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="menu-selectable" data-sensor="ASC">Ascension<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="menu-selectable" data-sensor="ALT">ALTAIR<span class="badge dark-blue-badge"
                data-badge-caption="USA"></span></li>
            <li class="menu-selectable" data-sensor="MMW">Millimeter Wave<span class="badge dark-blue-badge"
                data-badge-caption="USA"></span></li>
            <li class="menu-selectable" data-sensor="ALC">ALCOR<span class="badge dark-blue-badge"
                data-badge-caption="USA"></span></li>
            <li class="menu-selectable" data-sensor="TDX">TRADEX<span class="badge dark-blue-badge"
                data-badge-caption="USA"></span></li>
            <li class="menu-selectable" data-sensor="DGC">Diego Garcia<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="menu-selectable" data-sensor="MAU">Maui<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="menu-selectable" data-sensor="SOC">Socorro<span class="badge dark-blue-badge"
                data-badge-caption="USSF"></span></li>
            <li class="divider"></li>
            <h5 class="center-align">MDA Sensors</h5>
            <li class="divider"></li>
            <li id="mdAllSensor" class="menu-selectable" data-sensor="mdAll">All Sensors<span class="badge dark-blue-badge"
                data-badge-caption="Coalition"></span></li>
            <li class="menu-selectable" data-sensor="HAR">Har Keren<span class="badge dark-blue-badge"
                data-badge-caption="ISR"></span></li>
            <li class="menu-selectable" data-sensor="QTR">CENTCOM<span class="badge dark-blue-badge"
                data-badge-caption="USA"></span></li>
            <li class="menu-selectable" data-sensor="KUR">Kürecik<span class="badge dark-blue-badge"
                data-badge-caption="USA"></span></li>
            <li class="menu-selectable" data-sensor="SHA">Shariki<span class="badge dark-blue-badge"
                data-badge-caption="USA"></span></li>
            <li class="menu-selectable" data-sensor="KCS">Kyogamisaki<span class="badge dark-blue-badge"
                data-badge-caption="USA"></span></li>
            <li class="menu-selectable" data-sensor="SBX">Sea-Based X-Band<span class="badge dark-blue-badge"
                data-badge-caption="USN"></span></li>
            <li class="menu-selectable" data-sensor="TAI">Taiwan SRP<span class="badge dark-blue-badge"
                data-badge-caption="TAI"></span></li>
            <li class="divider"></li>
            <h5 class="center-align">LeoLabs Sensors</h5>
            <li class="divider"></li>
            <li id="llAllSensor" class="menu-selectable" data-sensor="llAll">All Sensors<span class="badge dark-blue-badge"
                data-badge-caption="Comm"></span></li>
            <li class="menu-selectable" data-sensor="CRSR">Costa Rica Space Radar<span class="badge dark-blue-badge"
                data-badge-caption="Comm"></span></li>
            <li class="menu-selectable" data-sensor="MSR">Midland Space Radar<span class="badge dark-blue-badge"
                data-badge-caption="Comm"></span></li>
            <li class="menu-selectable" data-sensor="PFISR">PFIS Radar<span class="badge dark-blue-badge"
                data-badge-caption="Comm"></span></li>
            <li class="menu-selectable" data-sensor="KSR">Kiwi Space Radar<span class="badge dark-blue-badge"
                data-badge-caption="Comm"></span></li>
            <li class="divider"></li>
            <h5 class="center-align">ESOC Sensors</h5>
            <li class="divider"></li>
            <li class="menu-selectable" data-sensor="GRV">GRAVES<span class="badge dark-blue-badge"
                data-badge-caption="FRA"></span></li>
            <li class="menu-selectable" data-sensor="FYL">Fylingdales<span class="badge dark-blue-badge"
                data-badge-caption="RAF"></span></li>
            <li class="menu-selectable" data-sensor="TIR">TIRA<span class="badge dark-blue-badge"
                data-badge-caption="GER"></span></li>
            <li class="menu-selectable" data-sensor="NRC">Northern Cross<span
                class="badge dark-blue-badge" data-badge-caption="ITA"></span></li>
            <li class="menu-selectable" data-sensor="TRO">Troodos<span class="badge dark-blue-badge"
                data-badge-caption="RAF"></span></li>
            <li class="menu-selectable" data-sensor="SDT">Space Debris Telescope<span
                class="badge dark-blue-badge" data-badge-caption="ESA"></span></li>
                <!-- GALILEO GROUND SENSOR STATION -->
            <li class="menu-selectable" data-sensor="GGS">GSS Fucino<span
                class="badge dark-blue-badge" data-badge-caption="ITA"></span></li>
                <!-- GALILEO GROUND SENSOR STATION -->
            <li class="divider"></li>
            <h5 class="center-align">Russian Sensors</h5>
            <li class="divider"></li>
            <li id="rusAllSensor" class="menu-selectable" data-sensor="rusAll">All Russian Sensors<span
                class="badge dark-blue-badge" data-badge-caption="RUS"></span></li>
            <li class="menu-selectable" data-sensor="ARM">Armavir<span class="badge dark-blue-badge"
                data-badge-caption="RUS"></span></li>
            <li class="menu-selectable" data-sensor="BAL">Balkhash<span class="badge dark-blue-badge"
                data-badge-caption="RUS"></span></li>
            <li class="menu-selectable" data-sensor="GAN">Gantsevichi<span class="badge dark-blue-badge"
                data-badge-caption="RUS"></span></li>
            <li class="menu-selectable" data-sensor="LEK">Lekhtusi<span class="badge dark-blue-badge"
                data-badge-caption="RUS"></span></li>
            <li class="menu-selectable" data-sensor="MIS">Mishelevka<span class="badge dark-blue-badge"
                data-badge-caption="RUS"></span></li>
            <li class="menu-selectable" data-sensor="OLE">Olenegorsk<span class="badge dark-blue-badge"
                data-badge-caption="RUS"></span></li>
            <li class="menu-selectable" data-sensor="PEC">Pechora<span class="badge dark-blue-badge"
                data-badge-caption="RUS"></span></li>
            <li class="menu-selectable" data-sensor="PIO">Pionersky<span class="badge dark-blue-badge"
                data-badge-caption="RUS"></span></li>
            <li class="divider"></li>
            <h5 class="center-align">Chinese Sensors</h5>
            <li class="divider"></li>
            <li id="prcAllSensor" class="menu-selectable" data-sensor="prcAll">All Chinese Sensors<span
                class="badge dark-blue-badge" data-badge-caption="PRC"></span></li>
            <li class="menu-selectable" data-sensor="XIN">Xingjiang<span class="badge dark-blue-badge"
                data-badge-caption="PRC"></span></li>
            <li class="menu-selectable" data-sensor="ZHE">Zhejiang<span class="badge dark-blue-badge"
                data-badge-caption="PRC"></span></li>
            <li class="menu-selectable" data-sensor="HEI">Heilongjiang<span class="badge dark-blue-badge"
                data-badge-caption="PRC"></span></li>
            <li class="menu-selectable" data-sensor="SHD">Shadong<span class="badge dark-blue-badge"
                data-badge-caption="PRC"></span></li>
            <li class="menu-selectable" data-sensor="PMO">Purple Mountain<span class="badge dark-blue-badge"
                data-badge-caption="PRC"></span></li>
            </ul>
        </div>
        </div>
    </div>`,this.dragOptions={isDraggable:!0},this.isSensorLinksAdded=!1,this.helpTitle="Sensors Menu",this.helpBody=c.keepTrackApi.html`The Sensors menu allows you to select a sensor for use in calculations and other menu's functions.
  Sensors are in groups based on the networks they primarily support.
  On the left side of the menu is the name of the sensor and on the right side is the country/organization that owns it.
  <br><br>
  Selecting an "All...Sensors" option will select all sensors in that group.
  This is useful for visualizing the networks coverage, but currently does not work for all calculations.
  If you are trying to calculate look angles for a network it is best to use the multi-site look angles tool or
  to use look angles for each of the individual sensors in the network.
  <br><br>
  Sensors on this list include Mechanical and Phased Array Radars, in addition to Optical sensors:
  <ul style="margin-left: 40px;">
    <li>
      Phased Array Radars typically are limited to Low Earth Orbit (LEO).
    </li>
    <li>
      Mechanical Radars can be used for both LEO and Geostationary Orbit (GEO).
    </li>
    <li>
      Optical sensors are typically used for GEO, but can also be used for LEO.
    </li>
    <li>
      Optical sensors are limited to night time observations in clear skies, whereas radars can be used for both day and night.
    </li>
  </ul>
  <br>
  Sensor information is based on publicly available data and can be verified in the Sensor Info menu.
  If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.`}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{(0,p.G)("nav-mobile").insertAdjacentHTML("beforeend",c.keepTrackApi.html`<div id="sensor-selected"></div>`)}}),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,p.G)("sensor-selected").addEventListener("click",(()=>{c.keepTrackApi.methods.bottomMenuClick(this.bottomIconElementName)})),(0,p.G)("sensor-list-content").addEventListener("click",(e=>{if(!e.target.classList.contains("menu-selectable"))return;if("reset-sensor-button"===e.target.id)return void c.keepTrackApi.getSensorManager().resetSensorSelected();const t=e.target.dataset.sensor;this.sensorListContentClick(t)}))}}),c.keepTrackApi.register({method:"selectSatData",cbName:"sensor",cb:e=>{null!=e&&(null===c.keepTrackApi.getPlugin(Hi.P)||this.isSensorLinksAdded||((0,p.G)("sat-info-top-links").insertAdjacentHTML("beforeend",c.keepTrackApi.html`
                  <div id="sensors-in-fov-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                        data-tooltip="Visualize Sensor Coverage">Show All Sensors with FOV...</div>
                `),(0,p.G)("sensors-in-fov-link").addEventListener("click",(()=>{const e=c.keepTrackApi.getCatalogManager(),t=c.keepTrackApi.getSensorManager();Object.keys(t.sensors).forEach((a=>{const i=t.sensors[a],s=e.getSat(e.selectedSat);Ai.J.getTearr(s,[i]).inView&&c.keepTrackApi.getLineManager().create("sat6",[s.id,e.getSensorFromSensorName(i.name)],"g")}))})),this.isSensorLinksAdded=!0))}}),c.keepTrackApi.register({method:c.M8.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{(0,p.G)("reset-sensor-button").style.display=e?"block":"none"}})}sensorListContentClick(e){if(!this.isMenuButtonEnabled)return;const t=c.keepTrackApi.getSensorManager();if(void 0!==e){switch(e){case"cspocAll":t.setSensor("SSN");break;case"mwAll":t.setSensor("NATO-MW");break;case"mdAll":t.setSensor("MD-ALL");break;case"llAll":t.setSensor("LEO-LABS");break;case"rusAll":t.setSensor("RUS-ALL");break;case"prcAll":t.setSensor("PRC-ALL");break;default:t.setSensor(t.sensors[`${e}`])}c.keepTrackApi.getCatalogManager().setSelectedSat(-1);try{c.keepTrackApi.getMainCamera().lookAtLatLon(t.currentSensors[0].lat,t.currentSensors[0].lon,t.currentSensors[0].zoom,c.keepTrackApi.getTimeManager().selectedDate)}catch(e){S.x.warn("Error in sensorListContentClick: "+e)}settingsManager.currentColorScheme==c.keepTrackApi.getColorSchemeManager().default&&Oa.j.change("default")}else S.x.debug("The menu item was clicked but the menu was not defined.")}resetSensorButtonClick(){var e,t,a,i,s,n;this.isMenuButtonEnabled&&(null===(e=(0,p.G)("menu-sensor-info"))||void 0===e||e.classList.add("bmenu-item-disabled"),null===(t=(0,p.G)("menu-fov-bubble"))||void 0===t||t.classList.add("bmenu-item-disabled"),null===(a=(0,p.G)("menu-surveillance"))||void 0===a||a.classList.add("bmenu-item-disabled"),null===(i=(0,p.G)("menu-planetarium"))||void 0===i||i.classList.add("bmenu-item-disabled"),null===(s=(0,p.G)("menu-astronomy"))||void 0===s||s.classList.add("bmenu-item-disabled"),c.keepTrackApi.getMainCamera().cameraType===oa.i.PLANETARIUM)&&(null===(n=c.keepTrackApi.getPlugin(Ua))||void 0===n||n.setBottomIconToUnselected(),c.keepTrackApi.getMainCamera().isPanReset=!0,c.keepTrackApi.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,c.keepTrackApi.getDrawManager().glInit(),l.I.get(r.Yv.UiManager).hideSideMenus(),l.I.get(r.Yv.OrbitManager).clearInViewOrbit(),c.keepTrackApi.getMainCamera().cameraType=oa.i.DEFAULT,(0,p.G)("menu-planetarium").classList.remove("bmenu-item-selected"))}}Ns.PLUGIN_NAME="Sensor List";const Gs=new Ns,Ps=a.p+"../img/settings.png";var Ds=a(3643),Rs=a(9755),Os=a.n(Rs),Fs=a(3392);class Us extends te.c{constructor(){super(Us.PLUGIN_NAME),this.bottomIconElementName="settings-menu-icon",this.bottomIconImg=Ps,this.bottomIconLabel="Settings Menu",this.sideMenuElementName="settings-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="settings-menu" class="side-menu-parent start-hidden text-select">
    <div id="settings-content" class="side-menu">
      <div class="row">
        <form id="settings-form">
          <div id="settings-general">
            <div class="row center"></div>
            </br>
            <div class="row center">
              <button id="settings-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Update Settings &#9658;</button>
            </div>
            <h5 class="center-align">General Settings</h5>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide LEO satellites">
                <input id="settings-leoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show LEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide HEO satellites">
                <input id="settings-heoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show HEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide MEO satellites">
                <input id="settings-meoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show MEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide GEO satellites">
                <input id="settings-geoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show GEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide Payloads">
                <input id="settings-showPayloads" type="checkbox" checked/>
                <span class="lever"></span>
                Show Payloads
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide Rocket Bodies">
                <input id="settings-showRocketBodies" type="checkbox" checked/>
                <span class="lever"></span>
                Show Rocket Bodies
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide Debris">
                <input id="settings-showDebris" type="checkbox" checked/>
                <span class="lever"></span>
                Show Debris
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide Agencies">
                <input id="settings-showAgencies" type="checkbox"/>
                <span class="lever"></span>
                Show Agencies
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable this to hide orbit lines">
                <input id="settings-drawOrbits" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Orbits
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Enable this to show where a satellite was instead of where it is going">
                <input id="settings-drawTrailingOrbits" type="checkbox"/>
                <span class="lever"></span>
                Draw Trailing Orbits
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Orbits will be drawn using ECF vs ECI (Mainly for GEO Orbits)">
                <input id="settings-drawEcf" type="checkbox" />
                <span class="lever"></span>
                Draw Orbits in ECF
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Draw lines from sensor to satellites when in FOV">
                <input id="settings-isDrawInCoverageLines" type="checkbox" checked/>
                <span class="lever"></span>
                Draw FOV Lines
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Draw the Sun">
                <input id="settings-drawSun" type="checkbox" checked/>
                <span class="lever"></span>
                Draw the Sun
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Hides Earth Textures">
                <input id="settings-drawBlackEarth" type="checkbox"/>
                <span class="lever"></span>
                Draw Black Earth
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide the Atmosphere">
                <input id="settings-drawAtmosphere" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Atmosphere
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide the Aurora">
                <input id="settings-drawAurora" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Aurora
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Change the Skybox to Gray">
                <input id="settings-graySkybox" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Gray Background
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Draw Milky Way in Background">
                <input id="settings-drawMilkyWay" type="checkbox" checked/>
                <span class="lever"></span>
                Draw the Milky Way
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Display ECI Coordinates on Hover">
                <input id="settings-eciOnHover" type="checkbox"/>
                <span class="lever"></span>
                Display ECI on Hover
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Non-selectable satellites will be hidden instead of grayed out.">
                <input id="settings-hos" type="checkbox" />
                <span class="lever"></span>
                Hide Other Satellites
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Every 3 seconds a new satellite will be selected from FOV">
                <input id="settings-demo-mode" type="checkbox" />
                <span class="lever"></span>
                Enable Demo Mode
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Small text labels will appear next to all satellites in FOV.">
                <input id="settings-sat-label-mode" type="checkbox" checked />
                <span class="lever"></span>
                Enable Satellite Label Mode
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Time will freeze as you rotate the camera.">
                <input id="settings-freeze-drag" type="checkbox" />
                <span class="lever"></span>
                Enable Freeze Time on Click
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Time Machine stop showing toast messages.">
                <input id="settings-time-machine-toasts" type="checkbox" />
                <span class="lever"></span>
                Disable Time Machine Toasts
              </label>
            </div>
          </div>
          <div class="row light-blue darken-3" style="height:4px; display:block;"></div>
          <div id="settings-colors">
            <h5 class="center-align">Color Settings</h5>
            <div class="input-field col s6">
              <center>
                <p>Payload</p>
                <button id="settings-color-payload" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>Rocket Body</p>
                <button id="settings-color-rocketBody" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>Debris</p>
                <button id="settings-color-debris" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>In View</p>
                <button id="settings-color-inview" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>Missile</p>
                <button id="settings-color-missile" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>Missile (FOV)</p>
                <button id="settings-color-missileInview" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>Special Sats</p>
                <button id="settings-color-special" class="btn waves-effect waves-light"></button>
              </center>
            </div>
          </div>
          <div class="row"></div>
          <div id="settings-opt">
            <h5 class="center-align">Settings Overrides</h5>
            <div class="input-field col s12">
              <input value="150" id="maxSearchSats" type="text" class="tooltipped" data-position="right" data-delay="50" data-tooltip="Maximum satellites to display in search" />
              <label for="maxSearchSats" class="active">Maximum Satellites in Search</label>
            </div>
            <div class="input-field col s12">
              <input value="30" id="satFieldOfView" type="text" class="tooltipped" data-position="right" data-delay="50" data-tooltip="What is the satellite's field of view in degrees" />
              <label for="satFieldOfView" class="active">Satellite Field of View</label>
            </div>
            <div class="row"></div>
          </div>
          <div id="fastCompSettings">
            <h5 class="center-align">Fast CPU Required</h5>
            <div class="switch row">
              <label>
                <input id="settings-snp" type="checkbox" />
                <span class="lever"></span>
                Show Next Pass on Hover
              </label>
            </div>
          </div>
          <!-- <div id="settings-lowperf" class="row center">
            <button class="red btn waves-effect waves-light" onclick="uiManagerInstance.startLowPerf();">Low End PC Version &#9658;</button>
          </div> -->
        </form>
      </div>
    </div>
  </div>`,this.helpTitle="Settings Menu",this.helpBody=c.keepTrackApi.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e,t,a,i,s,n,o;(0,p.G)("settings-form").addEventListener("change",Us.onFormChange),(0,p.G)("settings-form").addEventListener("submit",Us.onSubmit);const l=[(0,Ds.S)([1,0,0,1]),(0,Ds.S)([1,.75,0,1]),(0,Ds.S)([.85,.5,0,1]),(0,Ds.S)([1,1,0,1]),(0,Ds.S)([0,1,0,1]),(0,Ds.S)([.2,1,0,.5]),(0,Ds.S)([.2,1,1,1]),(0,Ds.S)([0,0,1,1]),(0,Ds.S)([.2,.4,1,1]),(0,Ds.S)([.64,0,.64,1]),(0,Ds.S)([1,0,.6,1]),(0,Ds.S)([.5,.5,.5,1]),(0,Ds.S)([1,1,1,1])],r=this;Os()("#settings-color-payload").colorPick({initialColor:(0,Ds.S)((null===(e=settingsManager.colors)||void 0===e?void 0:e.payload)||[.2,1,0,.5]),palette:l,onColorSelected:function(){r.onColorSelected(this,"payload")}}),Os()("#settings-color-rocketBody").colorPick({initialColor:(0,Ds.S)((null===(t=settingsManager.colors)||void 0===t?void 0:t.rocketBody)||[.2,.4,1,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"rocketBody")}}),Os()("#settings-color-debris").colorPick({initialColor:(0,Ds.S)((null===(a=settingsManager.colors)||void 0===a?void 0:a.debris)||[.5,.5,.5,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"debris")}}),Os()("#settings-color-inview").colorPick({initialColor:(0,Ds.S)((null===(i=settingsManager.colors)||void 0===i?void 0:i.inFOV)||[.85,.5,0,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"inview")}}),Os()("#settings-color-missile").colorPick({initialColor:(0,Ds.S)((null===(s=settingsManager.colors)||void 0===s?void 0:s.missile)||[1,1,0,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"missile")}}),Os()("#settings-color-missileInview").colorPick({initialColor:(0,Ds.S)((null===(n=settingsManager.colors)||void 0===n?void 0:n.missileInview)||[1,0,0,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"missileInview")}}),Os()("#settings-color-special").colorPick({initialColor:(0,Ds.S)((null===(o=settingsManager.colors)||void 0===o?void 0:o.pink)||[1,0,.6,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"pink")}}),this.isNotColorPickerInitialSetup=!0}})}onColorSelected(e,t){if(null==e)throw new Error("context is undefined");if(null==t)throw new Error("colorStr is undefined");if(e.element.css("cssText",`background-color: ${e.color} !important; color: ${e.color};`),this.isNotColorPickerInitialSetup){settingsManager.colors[t]=(e=>{let[t,a,i,s]=e.match(/(?<!\w)-?[\d.]+/gu);if(t=parseFloat(t)/255,a=parseFloat(a)/255,i=parseFloat(i)/255,s=parseFloat(s),t<0||t>1||a<0||a>1||i<0||i>1||s<0||s>1||isNaN(t)||isNaN(a)||isNaN(i)||isNaN(s))throw new Error("Invalid rgba input");return[t,a,i,s]})(e.color),Oa.j.legendColorsChange();const a=l.I.get(r.Yv.ColorSchemeManager);a.setColorScheme(a.currentColorScheme,!0);try{localStorage.setItem("settingsManager-colors",JSON.stringify(settingsManager.colors))}catch(e){console.warn("Settings Manager: Unable to save color settings - localStorage issue!")}}}static onFormChange(e,t,a){var i,s,n;if(null==e)throw new Error("e is undefined");switch(null===(i=e.target)||void 0===i?void 0:i.id){case"settings-leoSats":case"settings-heoSats":case"settings-meoSats":case"settings-geoSats":case"settings-showPayloads":case"settings-showRocketBodies":case"settings-showDebris":case"settings-showAgencies":case"settings-drawOrbits":case"settings-drawTrailingOrbits":case"settings-drawEcf":case"settings-isDrawInCoverageLines":case"settings-drawSun":case"settings-drawBlackEarth":case"settings-drawAtmosphere":case"settings-drawAurora":case"settings-drawMilkyWay":case"settings-graySkybox":case"settings-eciOnHover":case"settings-hos":case"settings-demo-mode":case"settings-sat-label-mode":case"settings-freeze-drag":case"settings-time-machine-toasts":case"settings-snp":(0,p.G)(e.target.id).checked?null===(s=c.keepTrackApi.getSoundManager())||void 0===s||s.play("toggleOn"):null===(n=c.keepTrackApi.getSoundManager())||void 0===n||n.play("toggleOff")}null!=t||(t=(0,p.G)("settings-demo-mode").checked),null!=a||(a=(0,p.G)("settings-sat-label-mode").checked),a&&"settings-demo-mode"===e.target.id&&((0,p.G)("settings-sat-label-mode").checked=!1,(0,p.G)("settings-demo-mode").classList.remove("lever:after")),t&&"settings-sat-label-mode"===e.target.id&&((0,p.G)("settings-demo-mode").checked=!1,(0,p.G)("settings-sat-label-mode").classList.remove("lever:after"))}static onSubmit(e){var t,a;if(null==e)throw new Error("e is undefined");e.preventDefault();const i=c.keepTrackApi.getUiManager(),s=c.keepTrackApi.getColorSchemeManager();null===(t=c.keepTrackApi.getSoundManager())||void 0===t||t.play("button"),settingsManager.isShowLeoSats=(0,p.G)("settings-leoSats").checked,settingsManager.isShowHeoSats=(0,p.G)("settings-heoSats").checked,settingsManager.isShowMeoSats=(0,p.G)("settings-meoSats").checked,settingsManager.isShowGeoSats=(0,p.G)("settings-geoSats").checked,settingsManager.isShowPayloads=(0,p.G)("settings-showPayloads").checked,settingsManager.isShowRocketBodies=(0,p.G)("settings-showRocketBodies").checked,settingsManager.isShowDebris=(0,p.G)("settings-showDebris").checked,settingsManager.isShowAgencies=(0,p.G)("settings-showAgencies").checked,settingsManager.isOrbitCruncherInEcf=(0,p.G)("settings-drawEcf").checked,settingsManager.isDrawInCoverageLines=(0,p.G)("settings-isDrawInCoverageLines").checked,settingsManager.isDrawSun=(0,p.G)("settings-drawSun").checked;let n=settingsManager.isBlackEarth!==(0,p.G)("settings-drawBlackEarth").checked,o=settingsManager.isDrawAtmosphere!==(0,p.G)("settings-drawAtmosphere").checked,d=settingsManager.isDrawAurora!==(0,p.G)("settings-drawAurora").checked;if(settingsManager.isBlackEarth=(0,p.G)("settings-drawBlackEarth").checked,settingsManager.isDrawAtmosphere=(0,p.G)("settings-drawAtmosphere").checked,settingsManager.isDrawAurora=(0,p.G)("settings-drawAurora").checked,n||o||d){const e=l.I.get(r.Yv.DrawManager);e.sceneManager.earth.init(settingsManager,e.gl),e.sceneManager.earth.loadHiRes(),e.sceneManager.earth.loadHiResNight()}settingsManager.isDrawOrbits=(0,p.G)("settings-drawOrbits").checked,settingsManager.isDrawTrailingOrbits=(0,p.G)("settings-drawTrailingOrbits").checked,c.keepTrackApi.getOrbitManager().orbitWorker&&(settingsManager.isDrawTrailingOrbits?c.keepTrackApi.getOrbitManager().orbitWorker.postMessage({orbitType:2}):c.keepTrackApi.getOrbitManager().orbitWorker.postMessage({orbitType:1}));let u=settingsManager.isDrawMilkyWay!==(0,p.G)("settings-drawMilkyWay").checked,g=settingsManager.isGraySkybox!==(0,p.G)("settings-graySkybox").checked;if(settingsManager.isDrawMilkyWay=(0,p.G)("settings-drawMilkyWay").checked,settingsManager.isGraySkybox=(0,p.G)("settings-graySkybox").checked,u||g){const e=c.keepTrackApi.getDrawManager();e.sceneManager.skybox.init(settingsManager,e.gl)}settingsManager.isEciOnHover=(0,p.G)("settings-eciOnHover").checked;const m=(0,p.G)("settings-hos").checked;settingsManager.colors.transparent=m?[1,1,1,0]:[1,1,1,.1],settingsManager.isDemoModeOn=(0,p.G)("settings-demo-mode").checked,settingsManager.isSatLabelModeOn=(0,p.G)("settings-sat-label-mode").checked,settingsManager.isShowNextPass=(0,p.G)("settings-snp").checked,settingsManager.isFreezePropRateOnDrag=(0,p.G)("settings-freeze-drag").checked,settingsManager.isDisableTimeMachineToasts=(0,p.G)("settings-time-machine-toasts").checked,c.keepTrackApi.getPlugin(Fs.i)&&(c.keepTrackApi.getPlugin(Fs.i).isMenuButtonEnabled=!1),c.keepTrackApi.getGroupsManager().clearSelect(),s.setColorScheme(s.default,!0),null===(a=(0,p.G)("menu-time-machine"))||void 0===a||a.classList.remove("bmenu-item-selected"),s.reloadColors();const h=parseInt((0,p.G)("satFieldOfView").value);isNaN(h)?((0,p.G)("satFieldOfView").value="30",i.toast("Invalid field of view value!","critical")):c.keepTrackApi.getCatalogManager().satCruncher.postMessage({typ:"isShowSatOverfly",selectedSatFOV:h});const b=parseInt((0,p.G)("maxSearchSats").value);isNaN(b)?((0,p.G)("maxSearchSats").value=settingsManager.searchLimit.toString(),i.toast("Invalid max search sats value!","critical")):(settingsManager.searchLimit=b,i.searchManager.doSearch(i.searchManager.getCurrentSearch())),s.setColorScheme(s.currentColorScheme,!0)}}Us.PLUGIN_NAME="Settings Menu";const _s=new Us,Bs=a.p+"../img/search.png";class zs extends te.c{constructor(){super(zs.PLUGIN_NAME),this.dependencies=[$i.H.PLUGIN_NAME,Hi.P.PLUGIN_NAME],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=Bs,this.isRequireSensorSelected=!0,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=c.keepTrackApi.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
  <br><br>
  This is unlikely to be very helpful unless you own/operate a sensor with a search box functionality.`,this.sideMenuElementName="stf-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="stf-menu" class="side-menu-parent start-hidden text-select">
    <div id="stf-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Short Term Fence</h5>
        <form id="stfForm">
          <div id="stf-az-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Search Center Azimuth Point in degrees (ex: 50)">
            <input id="stf-az" type="text" value="50" />
            <label for="stf-az" class="active">Center Azimuth</label>
          </div>
          <div id="stf-azExt-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Total Extent Outside of Center Azimuth in degrees (ex: 4)">
            <input id="stf-azExt" type="text" value="4" />
            <label for="stf-azExt" class="active">Azimuth Extent</label>
          </div>
          <div id="stf-el-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Search Center Elevation Point in degrees (ex: 20)">
            <input id="stf-el" type="text" value="20" />
            <label for="stf-el" class="active">Center Elevation</label>
          </div>
          <div id="stf-elExt-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Total Extent Outside of Center Elevation in degrees (ex: 4)">
            <input id="stf-elExt" type="text" value="4" />
            <label for="stf-elExt" class="active">Elevation Extent</label>
          </div>
          <div id="stf-rng-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Search Center Range Point in kilometers (ex: 1000)">
            <input id="stf-rng" type="text" value="1000" />
            <label for="stf-rng" class="active">Center Range</label>
          </div>
          <div id="stf-rngExt-div" class=" input-field col s12 tooltipped" data-position="right" data-delay="50" data-tooltip="Total Extent Outside of Center Range in kilometers (ex: 100)">
            <input id="stf-rngExt" type="text" value="100" />
            <label for="stf-rngExt" class="active">Range Extent</label>
          </div>
          <div class="center-align">
            <button id="stf-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Create New STF &#9658;</button>
          </div>
        </form>
        <br>
        <div class="center-align">
          <button id="stf-remove-last" class="btn btn-ui waves-effect waves-light" type="button" name="action">Remove Last &#9658;</button>
        </div>
        <br>
        <div class="center-align">
          <button id="stf-clear-all" class="btn btn-ui waves-effect waves-light" type="button" name="action">Clear All STFs &#9658;</button>
        </div>
      </div>
    </div>
  </div>`,this.isAddStfLinksOnce=!1}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{null!=e&&(this.isAddStfLinksOnce||((0,p.G)("sat-info-top-links").insertAdjacentHTML("beforeend",c.keepTrackApi.html`
            <div id="stf-on-object-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,p.G)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0))}})}addJs(){super.addJs(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,p.G)("stfForm").addEventListener("submit",(e=>{e.preventDefault(),this.onSubmit.bind(this)()})),(0,p.G)("stf-remove-last").addEventListener("click",(()=>{c.keepTrackApi.getSensorManager().removeStf()})),(0,p.G)("stf-clear-all").addEventListener("click",(()=>{c.keepTrackApi.getSensorManager().clearStf()}))}}),c.keepTrackApi.register({method:"resetSensor",cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),c.keepTrackApi.register({method:"setSensor",cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,g.kW)((0,p.G)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonEnabled=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),c.keepTrackApi.getUiManager().hideSideMenus()}onSubmit(){var e;if(!this.verifySensorSelected())return;const t=c.keepTrackApi.getSensorManager(),{lat:a,lon:i,alt:s}=t.currentSensors[0],n=parseFloat((0,p.G)("stf-az").value),o=parseFloat((0,p.G)("stf-azExt").value),l=parseFloat((0,p.G)("stf-el").value),r=parseFloat((0,p.G)("stf-elExt").value),d=parseFloat((0,p.G)("stf-rng").value),u=parseFloat((0,p.G)("stf-rngExt").value),g=n-o<0?n-o+360:n-o/2,m=n+o>360?n+o-360:n+o/2,b=l-r/2,v=l+r/2,f=d-u/2,k=d+u/2,y={lat:a,lon:i,alt:s,obsminaz:g,obsmaxaz:m,obsminel:b,obsmaxel:v,obsminrange:f,obsmaxrange:k,type:"Short Range Fence"};h.$.checkIsInView(t.currentSensors[0],{az:g,el:b,rng:f})&&h.$.checkIsInView(t.currentSensors[0],{az:m,el:v,rng:k})?(t.addStf(y),null===(e=c.keepTrackApi.getPlugin(ps))||void 0===e||e.enableFovView()):S.x.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=c.keepTrackApi.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=l.I.get(r.Yv.CatalogManager),a=Ai.J.getTearr(t.getSat(t.selectedSat),e.currentSensors);(0,p.G)("stf-az").value=a.az.toFixed(1),(0,p.G)("stf-el").value=a.el.toFixed(1),(0,p.G)("stf-rng").value=a.rng.toFixed(1),c.keepTrackApi.getUiManager().hideSideMenus(),(0,g.$k)((0,p.G)("stf-menu"),1e3),this.isMenuButtonEnabled=!0,this.setBottomIconToSelected()}}zs.PLUGIN_NAME="Short Term Fences";const $s=new zs;var Hs=a(3067);class js extends te.c{constructor(){super("Social Media"),this.dependencies=["Top Menu"]}addHtml(){super.addHtml(),c.keepTrackApi.register({method:"uiManagerFinal",cbName:this.PLUGIN_NAME,cb:js.uiManagerFinal_})}static uiManagerFinal_(){const e=document.createElement("li");e.innerHTML=c.keepTrackApi.html`
          <a id="github-share1" class="top-menu-btns" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            width="22"
            height="22"
            style="margin-top: 1px;"
            src="${Hs}"
            />
          </a>
          `,(0,p.G)("nav-mobile2").insertBefore(e,(0,p.G)("nav-mobile2").firstChild)}}const Ys=new js;var Vs=a(6492),Js=a(4427);class Ks extends te.c{constructor(){super(Ks.PLUGIN_NAME),this.isRotateL=!0,this.isRotateR=!1,this.isRotateU=!1,this.isRotateD=!1,this.bottomIconElementName="video-director-icon",this.bottomIconImg=Ps,this.bottomIconLabel="Video Director",this.sideMenuElementName="video-director-menu",this.sideMenuElementHtml=c.keepTrackApi.html`
  <div id="video-director-menu" class="side-menu-parent start-hidden text-select">
    <div id="video-director-content" class="side-menu">
      <div class="row">
        <form id="video-director-form">
          <div id="video-director-general">
            <div class="row center"></div>
            </br>
            <div class="row center">
              <button id="video-director-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Update video-director &#9658;</button>
            </div>
            <h5 class="center-align">General video-director</h5>
            <div class="input-field col s12">
              <input value="0.000075" id="video-director-rotateSpeed" type="text" maxlength="9" />
              <label for="video-director-rotateSpeed" class="active">Rotate Speed</label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Rotate Camera to the Left">
                <input id="video-director-rotateL" type="checkbox" checked/>
                <span class="lever"></span>
                Rotate Camera Left
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Rotate Camera to the Right">
                <input id="video-director-rotateR" type="checkbox"/>
                <span class="lever"></span>
                Rotate Camera Right
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Rotate Camera Up">
                <input id="video-director-rotateU" type="checkbox"/>
                <span class="lever"></span>
                Rotate Camera Up
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Rotate Camera Down">
                <input id="video-director-rotateD" type="checkbox"/>
                <span class="lever"></span>
                Rotate Camera Down
              </label>
            </div>
            <div class="input-field col s12">
              <input value="0.05" id="video-director-panSpeed" type="text" maxlength="9" />
              <label for="video-director-panSpeed" class="active">Pan Speed</label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Pan Camera Left">
                <input id="video-director-panL" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Left
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Pan Camera Right">
                <input id="video-director-panR" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Right
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Pan Camera Up">
                <input id="video-director-panU" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Up
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Pan Camera Down">
                <input id="video-director-panD" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Down
              </label>
            </div>
            <div class="input-field col s12">
              <input value="0.0005" id="video-director-zoomSpeed" type="text" maxlength="9" />
              <label for="video-director-zoomSpeed" class="active">Zoom Speed</label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Zoom Camera In">
                <input id="video-director-zoomIn" type="checkbox"/>
                <span class="lever"></span>
                Zoom Camera In
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Zoom Camera Out">
                <input id="video-director-zoomOut" type="checkbox"/>
                <span class="lever"></span>
                Zoom Camera Out
              </label>
          </div>
          <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable Selected Satellite Dot">
                <input id="video-director-selectedColor" type="checkbox"/>
                <span class="lever"></span>
                Disable Selected Satellite Dot
              </label>
          </div>
          <div class="center-align row">
            <button id="video-director-rotate" class="btn btn-ui waves-effect waves-light" type="button" name="action">Start Auto Rotate &#9658;</button>
          </div>
        </form>
      </div>
    </div>
  </div>`,this.helpTitle="Settings Menu",this.helpBody=c.keepTrackApi.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),c.keepTrackApi.register({method:c.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,p.G)("video-director-form").addEventListener("change",Ks.onFormChange),(0,p.G)("video-director-form").addEventListener("submit",Ks.onSubmit),(0,p.G)("video-director-rotate").addEventListener("click",(()=>{var e;null===(e=c.keepTrackApi.getSoundManager())||void 0===e||e.play("button"),c.keepTrackApi.getMainCamera().autoRotate(!0)}))}})}static onFormChange(e){var t,a,i;if(null==e)throw new Error("e is undefined");switch(null===(t=e.target)||void 0===t?void 0:t.id){case"video-director-rotateL":case"video-director-rotateR":case"video-director-rotateU":case"video-director-rotateD":case"video-director-panL":case"video-director-panR":case"video-director-panU":case"video-director-panD":case"video-director-zoomIn":case"video-director-zoomOut":(0,p.G)(e.target.id).checked?null===(a=c.keepTrackApi.getSoundManager())||void 0===a||a.play("toggleOn"):null===(i=c.keepTrackApi.getSoundManager())||void 0===i||i.play("toggleOff")}(0,p.G)("video-director-selectedColor").checked&&0!==settingsManager.selectedColor[3]?(settingsManager.selectedColorFallback=settingsManager.selectedColor,settingsManager.selectedColor=[0,0,0,0]):settingsManager.selectedColor=settingsManager.selectedColorFallback,settingsManager.autoRotateSpeed=parseFloat((0,p.G)("video-director-rotateSpeed").value),settingsManager.autoPanSpeed=parseFloat((0,p.G)("video-director-panSpeed").value),settingsManager.autoZoomSpeed=parseFloat((0,p.G)("video-director-zoomSpeed").value);const s=(0,p.G)("video-director-rotateL").checked,n=(0,p.G)("video-director-rotateR").checked,o=(0,p.G)("video-director-rotateU").checked,l=(0,p.G)("video-director-rotateD").checked,r=(0,p.G)("video-director-panL").checked,d=(0,p.G)("video-director-panR").checked,u=(0,p.G)("video-director-panU").checked,g=(0,p.G)("video-director-panD").checked,m=(0,p.G)("video-director-zoomIn").checked,h=(0,p.G)("video-director-zoomOut").checked;s&&!settingsManager.isAutoRotateL&&((0,p.G)("video-director-rotateR").checked=!1),n&&!settingsManager.isAutoRotateR&&((0,p.G)("video-director-rotateL").checked=!1),o&&!settingsManager.isAutoRotateU&&((0,p.G)("video-director-rotateD").checked=!1),l&&!settingsManager.isAutoRotateD&&((0,p.G)("video-director-rotateU").checked=!1),r&&!settingsManager.isAutoPanL&&((0,p.G)("video-director-panR").checked=!1),d&&!settingsManager.isAutoPanR&&((0,p.G)("video-director-panL").checked=!1),u&&!settingsManager.isAutoPanU&&((0,p.G)("video-director-panD").checked=!1),g&&!settingsManager.isAutoPanD&&((0,p.G)("video-director-panU").checked=!1),m&&!settingsManager.isAutoZoomIn&&((0,p.G)("video-director-zoomOut").checked=!1),h&&!settingsManager.isAutoZoomOut&&((0,p.G)("video-director-zoomIn").checked=!1)}static onSubmit(e){var t;if(null==e)throw new Error("e is undefined");e.preventDefault(),null===(t=c.keepTrackApi.getSoundManager())||void 0===t||t.play("button"),settingsManager.isAutoRotateR=(0,p.G)("video-director-rotateR").checked,settingsManager.isAutoRotateL=(0,p.G)("video-director-rotateL").checked,settingsManager.isAutoRotateU=(0,p.G)("video-director-rotateU").checked,settingsManager.isAutoRotateD=(0,p.G)("video-director-rotateD").checked,settingsManager.isAutoPanR=(0,p.G)("video-director-panR").checked,settingsManager.isAutoPanL=(0,p.G)("video-director-panL").checked,settingsManager.isAutoPanU=(0,p.G)("video-director-panU").checked,settingsManager.isAutoPanD=(0,p.G)("video-director-panD").checked,settingsManager.isAutoZoomIn=(0,p.G)("video-director-zoomIn").checked,settingsManager.isAutoZoomOut=(0,p.G)("video-director-zoomOut").checked}}Ks.PLUGIN_NAME="Video Director";const Ws=new Ks;var Xs=a(4677),Zs=a(5474);const qs=(e,t)=>{return a=void 0,i=void 0,n=function*(){null!=t||(t={});try{t.debug&&ci.x.init();const a=new Hi.P;a.init(),l.I.registerSingleton(r.Yv.SelectSatManager,a),t.topMenu&&Ia.t.init(),t.satInfoboxCore&&$i.P.init(),t.updateSelectBoxCore&&Js.i.init(),t.datetime&&oi.t.init(),t.social&&Ys.init(),t.classificationBar&&qa.init(),t.sensor&&(Gs.init(),Es.init(),As.init(),ws.init(),ys.init()),t.watchlist&&(Xs.P.init(),Zs.n.init()),t.nextLaunch&&Ui.init(),t.findSat&&Ci.init(),t.shortTermFences&&$s.init(),t.orbitReferences&&Yi.init(),t.collisions&&ti.init(),t.breakup&&Wa.init(),t.debrisScreening&&ri.init(),t.editSat&&Si.init(),t.newLaunch&&Di.init(),t.initialOrbit&&ye(),t.missile&&Ve(),t.stereoMap&&Vs.M.init(),t.sensorFov&&us.init(),t.sensorSurv&&hs.init(),t.satelliteView&&ra.init(),t.satelliteFov&&Qi.init(),t.planetarium&&_a.init(),t.astronomy&&za.init(),t.nightToggle&&zi.init(),t.dops&&bi.init(),t.constellations&&Xi.init(),t.countries&&ie.init(),t.colorsMenu&&ni.init(),t.screenshot&&cs.init(),t.launchCalendar&&Ni.init(),t.timeMachine&&Fs.M.init(),t.photoManager&&as.init(),t.screenRecorder&&os.init(),t.analysis&&B(),t.plotAnalysis&&Jt(),t.aboutManager&&Da.init(),t.settingsMenu&&_s.init(),t.soundManager&&Ea.init(),t.gamepad&&xi.init(),t.videoDirector&&Ws.init(),e.register({method:"uiManagerFinal",cbName:"core",cb:function(){Qs(t)}})}catch(e){S.x.info("Error loading core plugins:"+e.message)}},new((s=void 0)||(s=Promise))((function(e,t){function o(e){try{r(n.next(e))}catch(e){t(e)}}function l(e){try{r(n.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(o,l)}r((n=n.apply(a,i||[])).next())}));var a,i,s,n},Qs=e=>{const t=(0,p.G)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",e+"px")}else document.documentElement.style.setProperty("--bottom-menu-height","0px");if(e.topMenu){let e=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(e)&&(e=0),settingsManager.isMobileModeEnabled?document.documentElement.style.setProperty("--top-menu-height",e+17+"px"):document.documentElement.style.setProperty("--top-menu-height",e+22+"px")}(0,p.G)("bottom-icons")&&""==(0,p.G)("bottom-icons").innerText&&((0,p.G)("nav-footer").style.visibility="hidden");const a=(0,p.G)("bottom-icons-container");if(a){const e=a.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",e+"px")}e.aboutManager&&((0,p.G)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"keeptrack.space"!==window.location.hostname&&"www.keeptrack.space"!==window.location.hostname||en(),(0,p.G)("bottom-icons-container").addEventListener("mousewheel",(e=>{e.preventDefault(),((e,t)=>{const a=e.scrollTop+.15*t;e.scrollTop=a})(e.currentTarget,e.deltaY)}),{passive:!1})},en=()=>{const e=document.createElement("script");e.type="text/javascript",e.setAttribute("async","true"),e.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7"),document.documentElement.firstChild.appendChild(e),window.dataLayer=window.dataLayer||[];const t=function(e,t){window.dataLayer.push(arguments)};t("js",new Date),t("config","G-ENHWK6L0X7")}}}]);