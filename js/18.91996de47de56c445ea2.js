"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[18],{6880:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(8081),s=a.n(i),n=a(3645),o=a.n(n)()(s());o.push([e.id,".plot-analysis-menu-maximized {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.plot-analysis-menu-normal {\n  width: 650px;\n}\n\n.plot-analysis-chart {\n  width: 100%;\n  height: 90%;\n  padding: 10px;\n  margin: 0;\n}\n",""]);const l=o},440:(e,t,a)=>{a.r(t),a.d(t,{CanvasRecorder:()=>hs,analysis:()=>i,catalogLoader:()=>ja,gamepad:()=>s,initialOrbit:()=>n,loadCorePlugins:()=>rn,missile:()=>o,omManager:()=>Pe,plotAnalysis:()=>l,uiManagerFinal:()=>cn});var i={};a.r(i),a.d(i,{analysisBptSumbit:()=>X,analysisFormSubmit:()=>j,findBestPass:()=>q,findBestPasses:()=>Z,findCloseObjects:()=>K,findCsoBtnClick:()=>V,findRaBtnClick:()=>W,init:()=>z,onHelpMenuClick:()=>$,uiManagerFinal:()=>Y,uiManagerInit:()=>H});var s={};a.r(s),a.d(s,{gamepadConnected:()=>ve,getController:()=>fe,init:()=>re,initializeGamepad:()=>ce,updateButtons:()=>ue,updateGamepad:()=>de,updateLeftStick:()=>ge,updateRightStick:()=>he,updateZoom:()=>me,vibrate:()=>be});var n={};a.r(n),a.d(n,{bottomMenuClick:()=>ze,hideSideMenus:()=>Ue,init:()=>Re,obfitFormSubmit:()=>$e,onHelpMenuClick:()=>Fe,uiManagerFinal:()=>Be,uiManagerInit:()=>_e});var o={};a.r(o),a.d(o,{bottomMenuClick:()=>Qe,hideSideMenus:()=>Ze,init:()=>lt,missileChange:()=>et,missileSubmit:()=>it,msAttackerChange:()=>ct,msErrorClick:()=>tt,msTargetChange:()=>at,onHelpMenuClick:()=>rt,searchForRvs:()=>nt,uiManagerFinal:()=>ot,uiManagerInit:()=>st,updateLoop:()=>qe});var l={};a.r(l),a.d(l,{bottomMenuClick:()=>pa,curChart:()=>Xt,curChart2:()=>qt,curChart3:()=>Zt,curChart4:()=>Qt,curChart5:()=>ea,curChart6:()=>ta,hideSideMenus:()=>fa,init:()=>ra,isPlotAnalyisMenuOpen:()=>aa,isPlotAnalyisMenuOpen2:()=>ia,isPlotAnalyisMenuOpen3:()=>sa,isPlotAnalyisMenuOpen4:()=>na,isPlotAnalyisMenuOpen5:()=>oa,isPlotAnalyisMenuOpen6:()=>la,onEcfPlotBtnClick:()=>ma,onEciPlotBtnClick:()=>ua,onHelpMenuClick:()=>ca,onInc2AltPlotBtnClick:()=>ba,onInc2LonPlotBtnClick:()=>ha,onRicPlotBtnClick:()=>ga,onTime2LonPlotBtnClick:()=>va,selectSatData:()=>ka,uiManagerInit:()=>da});var r=a(8461),c=a(2349),d=a(9640),p=a(3092),u=a(5460),m=a(7644),g=a(7997),h=a(5179),b=a(2171),v=a(1874),f=a(6382),k=a(6279),S=a(3162),y=a(7047);class M{static exportTle2Csv(e,t=!0){try{const a=[],i=e.filter((e=>e.sccNum&&void 0!==e.TLE1&&void 0!==e.TLE2));if(0==i.length)return void y.x.info("No TLE data to export");i.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(let e=0;e<i.length;e++){const s=i[e];void 0!==s.TLE1&&void 0!==s.TLE2&&(t&&"ANALSAT"==s.country||a.push({satId:s.sccNum,name:s.name,TLE1:s.TLE1,TLE2:s.TLE2,inclination:s.inclination*v.I3,eccentricity:s.eccentricity,period:s.period,raan:s.raan*v.I3,apogee:s.apogee,perigee:s.perigee,country:s.country,site:s.launchSite,rocket:s.launchVehicle,rcs:s.rcs,visualMagnitude:s.vmag,user:s.user,mission:s.mission,purpose:s.purpose,contractor:s.manufacturer,dryMass:s.dryMass,liftMass:s.launchMass,lifeExpected:s.lifetime,power:s.power}))}(0,k.Eb)(a,"catalogInfo")}catch(e){}}static exportTle2Txt(e,t=2,a=!0){try{const i=[],s=e.filter((e=>e.sccNum&&void 0!==e.TLE1&&void 0!==e.TLE2));if(0==s.length)return void y.x.info("No TLE data to export");s.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(let e=0;e<s.length;e++){const n=s[e];void 0!==n.TLE1&&void 0!==n.TLE2&&(a&&"ANALSAT"==n.country||(3==t&&i.push(n.name),n.TLE1.includes("NO TLE")&&console.log(n.sccNum),n.TLE2.includes("NO TLE")&&console.log(n.sccNum),i.push(n.TLE1),i.push(n.TLE2)))}const n=i.join("\n"),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,S.saveAs)(o,"TLE.txt")}catch(e){}}}var A=a(3235);const T=a.p+"../img/analysis.png",w=d.keepTrackApi.html`
        <div id="menu-analysis" class="bmenu-item">
          <img
            alt="analysis"
            src=""
            delayedsrc="${T}"
          />
          <span class="bmenu-title">Analysis</span>
          <div class="status-icon"></div>
        </div>
      `,C=d.keepTrackApi.html`
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
</div>`,x=d.keepTrackApi.html`
  <optgroup label="Orbital Parameters">
    <option value='inc'>Inclination</option>
    <option value='ap'>Apogee</option>
    <option value='pe'>Perigee</option>
    <option value='per'>Period</option>
    <option value='e'>Eccentricity</option>
    <option value='ra'>RAAN</option>
    <option value='all'>All</option>
  </optgroup>`,E=d.keepTrackApi.html`
  <optgroup id="anal-look-opt" label="Look Angles">
    <option value='az'>Azimuth</option>
    <option value='el'>Elevation</option>
    <option value='rng'>Range</option>
    <option value='rae'>All</option>
  </optgroup>`,L=d.keepTrackApi.html`
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
          ${x}
          ${E}
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
  </form>`,I=d.keepTrackApi.html`
  <h5 class="center-align">Analysis Menu</h5>
  <div class="divider"></div>
  <div class="row"></div>`,N=d.keepTrackApi.html`
  <div class="row">
    <center>
      <button id="export-catalog-txt-2a" class="btn btn-ui waves-effect waves-light">
        Export Official TLEs &#9658;
      </button>
    </center>
  </div>`,G=d.keepTrackApi.html`
<div class="row">
  <center>
    <button id="export-catalog-txt-3a" class="btn btn-ui waves-effect waves-light">
      Export Official 3LEs &#9658;
    </button>
  </center>
</div>`,P=d.keepTrackApi.html`
  <div class="row">
    <center>
      <button id="export-catalog-txt-2b" class="btn btn-ui waves-effect waves-light">
        Export KeepTrack TLEs &#9658;
      </button>
    </center>
  </div>`,O=d.keepTrackApi.html`
<div class="row">
  <center>
  <button id="export-catalog-txt-3b" class="btn btn-ui waves-effect waves-light">
      Export KeepTrack 3LEs &#9658;
    </button>
  </center>
</div>`,D=d.keepTrackApi.html`
  <div class="row">
    <center>
      <button id="findReentries" class="btn btn-ui waves-effect waves-light">
      Find Reentries &#9658;
      </button>
    </center>
  </div>`,R=d.keepTrackApi.html`
  <div class="row">
    <center>
      <button id="export-catalog-csv-btn" class="btn btn-ui waves-effect waves-light">
        Export Catalog CSV &#9658;
    </button>
    </center>
  </div>`,F=d.keepTrackApi.html`
  <div class="row">
    <center>
      <button id="findCsoBtn" class="btn btn-ui waves-effect waves-light">Find Close Objects &#9658;</button>
    </center>
  </div>`,U=d.keepTrackApi.html`
<div id="analysis-menu" class="side-menu-parent start-hidden text-select">
  <div id="analysis-inner-menu" class="side-menu">
    ${I}
    <!-- ${L} -->
    ${N}
    ${G}
    ${P}
    ${O}
    ${R}
    ${F}
    ${D}
    ${C}
  </div>
</div>`,_=d.keepTrackApi.html`The Analysis Menu provides a number of tools to help you analyze the data in the current view. The tools are:
<ul style="margin-left: 40px;">
  <li>Export Official TLEs - Export real two line element sets.</li>
  <li>Export 3LES - Export three line element sets.</li>
  <li>Export KeepTrack TLEs - Export All KeepTrack two line element sets including analysts.</li>
  <li>Export KeepTrack 3LES - Export All KeepTrack three line element sets including analysts.</li>
  <li>Find Close Objects - Find objects that are close to each other.</li>
  <li>Find Reentries - Find objects that are likely to reenter the atmosphere.</li>
  <li>Best Passes - Find the best passes for a satellite based on the currently selected sensor.</li>
</ul>`;let B=!1;const z=()=>{d.keepTrackApi.register({method:"uiManagerInit",cbName:"analysis",cb:H}),d.keepTrackApi.register({method:"uiManagerFinal",cbName:"analysis",cb:Y}),d.keepTrackApi.register({method:"bottomMenuClick",cbName:"analysis",cb:e=>{if("menu-analysis"===e){const e=r.I.get(c.Yv.UiManager);if(B)return B=!1,(0,u.G)("menu-analysis").classList.remove("bmenu-item-selected"),void e.hideSideMenus();{if(e.hideSideMenus(),B=!0,-1!=d.keepTrackApi.getCatalogManager().selectedSat){const e=d.keepTrackApi.getCatalogManager().getSat(d.keepTrackApi.getCatalogManager().selectedSat),t=(0,u.G)("anal-sat");t&&(t.value=e.sccNum)}const t=document.querySelectorAll("select");return window.M.FormSelect.init(t),(0,g.$k)((0,u.G)("analysis-menu"),1e3),void(0,u.G)("menu-analysis").classList.add("bmenu-item-selected")}}}}),d.keepTrackApi.register({method:"selectSatData",cbName:"analysis",cb:e=>{r.I.get(c.Yv.UiManager).isAnalysisMenuOpen&&((0,u.G)("anal-sat").value=e.sccNum)}}),d.keepTrackApi.register({method:"hideSideMenus",cbName:"analysis",cb:()=>{(0,g.kW)((0,u.G)("analysis-menu"),1e3),(0,u.G)("menu-analysis").classList.remove("bmenu-item-selected"),B=!1}}),d.keepTrackApi.register({method:"onHelpMenuClick",cbName:"analysis",cb:$})},$=()=>!!B&&(h.v.showAdvice("Analysis Menu",_),!0),H=()=>{(0,u.G)("left-menus").insertAdjacentHTML("beforeend",U),(0,u.G)("bottom-icons").insertAdjacentHTML("beforeend",w)},Y=()=>{var e,t,a,i,s,n,o,l;null===(e=(0,u.G)("analysis-bpt"))||void 0===e||e.addEventListener("submit",(function(e){e.preventDefault(),X()})),null===(t=(0,u.G)("findCsoBtn"))||void 0===t||t.addEventListener("click",(()=>{(0,m.QP)(V)})),null===(a=(0,u.G)("findReentries"))||void 0===a||a.addEventListener("click",(()=>{(0,m.QP)(W)})),null===(i=(0,u.G)("export-catalog-csv-btn"))||void 0===i||i.addEventListener("click",(()=>{M.exportTle2Csv(d.keepTrackApi.getCatalogManager().satData)})),null===(s=(0,u.G)("export-catalog-txt-2a"))||void 0===s||s.addEventListener("click",(()=>{M.exportTle2Txt(d.keepTrackApi.getCatalogManager().satData)})),null===(n=(0,u.G)("export-catalog-txt-2b"))||void 0===n||n.addEventListener("click",(()=>{M.exportTle2Txt(d.keepTrackApi.getCatalogManager().satData,2,!1)})),null===(o=(0,u.G)("export-catalog-txt-3a"))||void 0===o||o.addEventListener("click",(()=>{M.exportTle2Txt(d.keepTrackApi.getCatalogManager().satData,3)})),null===(l=(0,u.G)("export-catalog-txt-3b"))||void 0===l||l.addEventListener("click",(()=>{M.exportTle2Txt(d.keepTrackApi.getCatalogManager().satData,3,!1)})),(0,p.E)((0,u.G)("analysis-menu"))},j=()=>{},V=()=>{const e=r.I.get(c.Yv.UiManager),t=K();e.doSearch(t)};let J=null;const K=()=>{if(J)return J;const e=50;let t=[],a=[];for(let e=0;e<d.keepTrackApi.getCatalogManager().orbitalSats;e++){const t=d.keepTrackApi.getCatalogManager().getSat(e);void 0!==t.TLE1&&(void 0===t.position&&(t.position=b.$.getEci(t,new Date).position||{x:0,y:0,z:0}),isNaN(t.position.x)||isNaN(t.position.y)||isNaN(t.position.z)||t.position&&"boolean"!=typeof t.position&&0===t.position.x&&0===t.position.y&&0===t.position.z||a.push(t))}a=(0,f.d)(a),a.sort(((e,t)=>e.position.x-t.position.x));let i=0;const s=a.length;for(i=0;i<s;i++){const n=a[i],o=n.position,l=o.x-e,r=o.x+e,c=o.y-e,d=o.y+e,p=o.z-e,u=o.z+e;let m=0;for(m=Math.max(0,i-200);m<s;m++){const e=a[m];if(n==e)continue;const i=e.position;if(i.x>r)break;i.x<r&&i.x>l&&i.y<d&&i.y>c&&i.z<u&&i.z>p&&t.push({sat1:n,sat2:e})}}let n=(0,f.d)(t);const o=[];for(let e=0;e<n.length;e++){let t=n[e].sat1,a=b.$.getEci(t,new Date(Date.now()+18e5));a.position&&"boolean"!=typeof a.position&&0===a.position.x&&0===a.position.y&&0===a.position.z||(n[e].sat1.position=a.position,t=n[e].sat2,a=b.$.getEci(t,new Date(Date.now()+18e5)),a.position&&"boolean"!=typeof a.position&&0===a.position.x&&0===a.position.y&&0===a.position.z||(t.position=a.position,n[e].sat2.position=a.position))}for(let t=0;t<n.length;t++){let a=n[t].sat1,i=a.position;if(void 0===i)continue;let s=i.x-e,l=i.x+e,r=i.y-e,c=i.y+e,d=i.z-e,p=i.z+e,u=n[t].sat2,m=u.position;void 0!==m&&m.x<l&&m.x>s&&m.y<c&&m.y>r&&m.z<p&&m.z>d&&(o.push(a.sccNum),o.push(u.sccNum))}const l=Array.from(new Set(o));let r="";for(let e=0;e<l.length;e++)e==l.length-1?r+=l[e]:r+=l[e]+",";return J=r,r},W=()=>{const e=r.I.get(c.Yv.UiManager),t=A.w.findReentry(d.keepTrackApi.getCatalogManager().satData).join(",");e.doSearch(t)},X=()=>{const e=(0,u.G)("analysis-bpt-sats").value,t=r.I.get(c.Yv.SensorManager);t.isSensorSelected()?Z(e,t.currentSensors[0]):r.I.get(c.Yv.UiManager).toast("You must select a sensor first!","critical")},q=(e,t)=>{const a=r.I.get(c.Yv.TimeManager),i=r.I.get(c.Yv.UiManager);if(t.length<=0||!t[0]||void 0===t[0].obsminaz)return i.toast("Sensor's format incorrect. Did you select a sensor first?","critical"),[];t[0].observerGd={lat:t[0].lat*v.qW,lon:t[0].lon*v.qW,alt:t[0].alt};const s=t[0];let n=0;var o=d.keepTrackApi.getCatalogManager().calcSatrec(e),l=[];let p=0,u=null,m=null,g=null,h=null,f=s.obsmaxrange,k=0,S=!1,y=!1,M=v.rE/(o.no*v.rE/v.gc);const A=(e,t)=>{let i=b.$.getRae(e,t,s);if(b.$.checkIsInView(s,i)){const o=a.getOffsetTimeObj(n-5e3);let l=b.$.getRae(o,t,s),r=b.$.checkIsInView(s,l);if(r){let o=a.getOffsetTimeObj(n+5e3);if(l=b.$.getRae(o,t,s),r=b.$.checkIsInView(s,l),!r){if(y=i.el<=3.5,null==h)return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null};p=Math.min((e.getTime()-h.getTime())/1e3/60*10/8,10);let a=Math.min(k/50*10,10);a*=S&&y?2:1,p+=a,p+=Math.min(7500/f,10);let s=0;return s=(e.getTime()-h.getTime())/1e3||0,{sortTime:h.getTime(),scc:t.satnum,score:p,startDate:h,startTime:h,startAz:u,startEl:m,startrng:g,stopDate:e,stopTime:e,stopAz:i.az.toFixed(0),stopEl:i.el.toFixed(1),stoprng:i.rng.toFixed(0),tic:s,minrng:f.toFixed(0),passMaxEl:k.toFixed(1)}}}else i.el<=3.5&&(S=!0),h=e,u=i.az.toFixed(0),m=i.el.toFixed(1),g=i.rng.toFixed(0);k<i.el&&(k=i.el),f>i.rng&&(f=i.rng)}return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null}};for(let e=0;e<604800;e+=5){n=1e3*e;const t=a.getOffsetTimeObj(n);if(l.length<=5e3){const a=A(t,o);null!==a.score&&(l.push(a),p=0,u=null,m=null,g=null,h=null,f=s.obsmaxrange,k=0,S=!1,y=!1,e+=60*M*.75)}}return l},Z=(e,t)=>{const a=(e=e.replace(/ /gu,",")).split(",");let i=[];for(let e=0;e<a.length;e++)try{const s=a[e];if(void 0===s||null==s||""===s||" "===s)continue;const n=d.keepTrackApi.getCatalogManager().getSatFromObjNum(parseInt(s)),o=q(n,[t]);for(let e=0;e<o.length;e++)i.push(o[e])}catch(e){console.debug(e)}i.sort(((e,t)=>t.sortTime-e.sortTime)),i.reverse(),i.forEach((e=>{delete e.sortTime}));for(let e=0;e<i.length;e++)i[e].startDate=i[e].startDate.toISOString().split("T")[0],i[e].startTime=i[e].startTime.toISOString().split("T")[1].split(".")[0],i[e].stopDate=i[e].stopDate.toISOString().split("T")[0],i[e].stopTime=i[e].stopTime.toISOString().split("T")[1].split(".")[0];(0,k.Eb)(i,"bestSatTimes")},Q=a.p+"../img/flag.png";var ee=a(9703),te=a(7374),ae=a(9959);class ie extends ae.c{constructor(){super(ie.PLUGIN_NAME),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=Q,this.bottomIconLabel="Countries",this.sideMenuElementHtml=d.keepTrackApi.html`
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
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=d.keepTrackApi.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,u.G)("country-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){var e;null===(e=d.keepTrackApi.getSoundManager())||void 0===e||e.play("toggleOn"),ie.countryMenuClick_(this.getAttribute("data-group"))}))})),(0,p.E)((0,u.G)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=r.I.get(c.Yv.GroupsManager),a=te.n.getCountryCode(e);if(""===a)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(ee.Y.COUNTRY,a,e),ie.groupSelected_(e)}static groupSelected_(e){const t=r.I.get(c.Yv.GroupsManager),a=r.I.get(c.Yv.CatalogManager),i=r.I.get(c.Yv.UiManager),s=(0,u.G)("search");void 0!==e&&void 0!==t.groupList[e]&&(t.selectGroup(t.groupList[e]),t.groupList[e].objects.length<settingsManager.searchLimit?i.searchManager.doSearch(t.groupList[e].objects.reduce(((e,t)=>`${e}${a.getSat(t).sccNum},`),"").slice(0,-1)):(s.value=t.groupList[e].objects.reduce(((e,t)=>`${e}${a.getSat(t).sccNum},`),"").slice(0,-1),i.searchManager.fillResultBox(t.groupList[e].objects.map((e=>({satId:e}))),a)),a.setSelectedSat(-1),settingsManager.isMobileModeEnabled&&i.searchManager.searchToggle(!0),i.hideSideMenus())}}ie.PLUGIN_NAME="Countries Menu";const se=new ie;var ne=a(6156),oe=a(3071);const le={deadzone:.15},re=()=>{d.keepTrackApi.programs.gamepad={currentState:null},window.addEventListener("gamepadconnected",(e=>{settingsManager.cruncherReady?ve(event):d.keepTrackApi.register({method:"uiManagerInit",cbName:"gamepad",cb:()=>ve(e)})})),window.addEventListener("gamepaddisconnected",(()=>{r.I.get(c.Yv.UiManager).toast("Gamepad disconnected","critical"),d.keepTrackApi.programs.gamepad={currentState:null}}))},ce=e=>{r.I.get(c.Yv.UiManager).toast("Gamepad connected","normal"),d.keepTrackApi.register({method:"updateLoop",cbName:"gamepad",cb:de}),d.keepTrackApi.programs.gamepad={settings:le,index:e.index,currentState:null,getController:e=>fe(e),vibrate:be,buttonsPressedHistory:[]}},de=e=>{null!=e||(e=0);const t=fe(e);d.keepTrackApi.programs.gamepad.currentState=t,me(t.buttons[6].value,t.buttons[7].value),ge(t.axes[0],t.axes[1]),he(t.axes[2],t.axes[3]),ue(t.buttons)},pe=[],ue=e=>{const{gamepad:t}=d.keepTrackApi.programs,a=r.I.get(c.Yv.CatalogManager);e.forEach(((e,i)=>{if(e.pressed&&!pe[i]){let e;switch(pe[i]=!0,t.buttonsPressedHistory.push(i),t.buttonsPressedHistory.length>8&&t.buttonsPressedHistory.shift(),i){case 0:if(settingsManager.isLimitedGamepadControls)break;console.log("A"),a.selectSat(oe.t.hoveringSat);break;case 1:if(settingsManager.isLimitedGamepadControls)break;console.log("B"),a.selectSat(-1),ne.tE.zoomTarget=.8;break;case 2:if(settingsManager.isLimitedGamepadControls)break;console.log("X"),ne.tE.autoRotate();break;case 3:console.log("Y");break;case 4:if(settingsManager.isLimitedGamepadControls)break;console.log("Left Bumper"),e=a.selectedSat-1,e>=0?a.selectSat(e):a.selectSat(a.satData.length-1);break;case 5:if(settingsManager.isLimitedGamepadControls)break;console.log("Right Bumper"),e=a.selectedSat+1,e<=a.satData.length-1?a.selectSat(e):a.selectSat(0);break;case 8:if(settingsManager.isLimitedGamepadControls)break;console.log("Home"),ne.tE.isPanReset=!0,ne.tE.isLocalRotateReset=!0,ne.tE.ftsRotateReset=!0;break;case 9:console.log("Start");break;case 10:console.log("Left Stick");break;case 11:console.log("Right Stick");break;case 12:console.log("D-Pad Up");break;case 13:console.log("D-Pad Down");break;case 14:console.log("D-Pad Left");break;case 15:console.log("Right");break;case 16:console.log("Xbox Button")}}else!e.pressed&&pe[i]&&(pe[i]=!1)}))},me=(e,t)=>{if(0===e&&0===t)return;const a=r.I.get(c.Yv.DrawManager);let i=ne.tE.zoomLevel();switch(ne.tE.cameraType){case ne.iM.DEFAULT:case ne.iM.OFFSET:case ne.iM.FIXED_TO_SAT:i+=e/500*a.dt,i-=t/500*a.dt,ne.tE.zoomTarget=i,ne.tE.camZoomSnappedOnSat=!1,ne.tE.isCamSnapMode=!1,i<ne.tE.zoomLevel()?ne.tE.isZoomIn=!0:ne.tE.isZoomIn=!1;break;case ne.iM.FPS:case ne.iM.SATELLITE:case ne.iM.PLANETARIUM:case ne.iM.ASTRONOMY:0!==e&&(ne.tE.fpsVertSpeed+=Math.pow(2*e,3)*a.dt*settingsManager.cameraMovementSpeed),0!==t&&(ne.tE.fpsVertSpeed-=Math.pow(2*t,3)*a.dt*settingsManager.cameraMovementSpeed)}},ge=(e,t)=>{if(e>le.deadzone||e<-le.deadzone||t>le.deadzone||t<-le.deadzone){ne.tE.autoRotate(!1);const a=r.I.get(c.Yv.DrawManager);switch(settingsManager.lastGamepadMovement=Date.now(),ne.tE.cameraType){case ne.iM.DEFAULT:case ne.iM.OFFSET:case ne.iM.FIXED_TO_SAT:ne.tE.camAngleSnappedOnSat=!1,ne.tE.isCamSnapMode=!1,ne.tE.camPitchSpeed-=Math.pow(t,3)/200*a.dt*settingsManager.cameraMovementSpeed,ne.tE.camYawSpeed+=Math.pow(e,3)/200*a.dt*settingsManager.cameraMovementSpeed;break;case ne.iM.FPS:case ne.iM.SATELLITE:case ne.iM.PLANETARIUM:case ne.iM.ASTRONOMY:(t>le.deadzone||t<-le.deadzone)&&(ne.tE.fpsForwardSpeed=-Math.pow(t,3)*a.dt),(e>le.deadzone||e<-le.deadzone)&&(ne.tE.fpsSideSpeed=Math.pow(e,3)*a.dt)}}},he=(e,t)=>{if(settingsManager.isLimitedGamepadControls)return;const a=r.I.get(c.Yv.DrawManager);if(ne.tE.isLocalRotateOverride=!1,t>le.deadzone||t<-le.deadzone||e>le.deadzone||e<-le.deadzone)switch(ne.tE.autoRotate(!1),ne.tE.cameraType){case ne.iM.DEFAULT:case ne.iM.OFFSET:case ne.iM.FIXED_TO_SAT:ne.tE.isLocalRotateOverride=!0,ne.tE.localRotateDif.pitch=200*-t,ne.tE.localRotateDif.yaw=200*-e;break;case ne.iM.FPS:case ne.iM.SATELLITE:case ne.iM.PLANETARIUM:case ne.iM.ASTRONOMY:ne.tE.camPitchSpeed+=t/100*a.dt*settingsManager.cameraMovementSpeed,ne.tE.camYawSpeed-=e/100*a.dt*settingsManager.cameraMovementSpeed}},be=(e,t)=>{null!=t||(t=fe()),t&&t.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})},ve=e=>{r.I.get(c.Yv.UiManager).toast("Gamepad connected","normal"),ce(e.gamepad)},fe=e=>(null!=e||(e=0),navigator.getGamepads()[e]),ke=a.p+"../img/iod.png";var Se=function(e,t,a,i){return new(a||(a=Promise))((function(s,n){function o(e){try{r(i.next(e))}catch(e){n(e)}}function l(e){try{r(i.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}r((i=i.apply(e,t||[])).next())}))};const ye=6371e3,Me=1.15741e-8,Ae=Math.PI,Te=2*Ae,we=360/Te,Ce={sat2sv:(e,t)=>[t.simulationTimeObj,e.position.x,e.position.y,e.position.z,e.velocity.x,e.velocity.y,e.velocity.z],sat2kp:(e,t)=>{const a=Ce.sat2sv(e,t);return Ce.sv2kp(a,t)},sat2tle:(e,t)=>{const a=Ce.sat2kp(e,t);return Ce.kp2tle(a,null,t)},sv2kp:e=>Le({massPrimary:1,massSecondary:1,vector:e,massPrimaryU:"kg",massSecondaryU:"M_Earth",vectorU:"km",outputU:"km",outputU2:"m"}),kp2tle:(e,t,a)=>{const i=e.inclination,s=e.raan,n=e.eccentricity,o=e.argPe,l=e.mo,r=1440/e.period,c=(t=void 0===t||null==t?new Date(a.calculateSimulationTime()):t).getUTCFullYear()-2e3,d=Ne(t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds()),p=parseFloat(d)+t.getUTCMilliseconds()*Me;return{tle1:`1 80000U 58001A   ${c}${Ge(p.toFixed(8),12)} 0.00000000 +00000-0 +00000-0 0 99990`,tle2:`2 80000 ${Ge(i.toFixed(4),8)} ${Ge(s.toFixed(4),8)} ${n.toFixed(7).substr(2,7)} ${Ge(parseFloat(o).toFixed(4),8)} ${Ge(l.toFixed(4),8)} ${Ge(r.toFixed(8),11)}000010`}},iod:(e,t,a)=>Se(void 0,void 0,void 0,(function*(){try{const i=Ce.svs2kps(e);e.sort((function(e,t){return e[0]-t[0]}));const s=new Date(e[0][0]);return Ce.fitTles(s,e,i,t,a)}catch(e){y.x.info(e)}})),svs2analyst:(e,t,a)=>Se(void 0,void 0,void 0,(function*(){const i=r.I.get(c.Yv.CatalogManager);Ce.iod(e,t,a).then((e=>{i.insertNewAnalystSatellite(e.tle1,e.tle2,i.getIdFromObjNum(100500),"100500")})).catch((e=>{y.x.debug(e)}))})),fitTles:(e,t,a,i,s)=>Se(void 0,void 0,void 0,(function*(){try{Ce.debug.closestApproach=0;const n=settingsManager.fitTleSteps,o=(a.max.raan-a.min.raan)/n,l=(a.max.argPe-a.min.argPe)/n,r=(a.max.mo-a.min.mo)/n;let c=[1e7];for(let d=-n/2;d<n/2;d++)for(let p=-n;p<n;p++)for(let u=2*-n;u<2*n;u++){const n={inclination:a.avg.inclination,raan:a.avg.raan+o*d,eccentricity:a.avg.eccentricity,argPe:a.avg.argPe+l*p,mo:a.avg.mo+r*u/2,period:a.avg.period},m=Ce.kp2tle(n,e,i);let g=0,h=0,b=0,v=0;for(let a=0;a<t.length;a++){let i;try{i=xe(m.tle1,m.tle2,new Date(e+(t[a][0]-t[0][0])),s),g+=Math.abs(i.position.x-t[a][1]),h+=Math.abs(i.position.y-t[a][2]),b+=Math.abs(i.position.z-t[a][3]),v+=Math.sqrt(Math.pow(g,2)+Math.pow(h,2)+Math.pow(b,2))}catch(e){y.x.info(e)}}v/=t.length,v<c[0]&&(c=[v,d,p,u])}y.x.debug(`Closest Approach: ${c[0]}`),Ce.debug.closestApproach+=c[0];const d={inclination:a.avg.inclination,raan:a.avg.raan+o*c[1],eccentricity:a.avg.eccentricity,argPe:a.avg.argPe+l*c[2],mo:a.avg.mo+r*c[3],period:a.avg.period};return Ce.kp2tle(d,e)}catch(e){y.x.debug(e)}})),testIod:e=>{fetch("/metObs.json").then((e=>e.json())).then((t=>{for(let a=0;a<t.length;a++){let i=t[a];Ce.svs2analyst(i,e)}Ce.debug.closestApproach/=t.length,y.x.log(`Average Approach: ${Ce.debug.closestApproach}`)})).catch((e=>{y.x.debug(e)}))},svs2kps:e=>{let t=[];for(let a=0;a<e.length;a++)e[a].length<3||t.push(Ce.sv2kp(e[a]));let a={max:{apogee:0,argPe:0,eccentricity:0,inclination:0,mo:0,perigee:0,period:0,raan:0,semiMajorAxis:0,ta:0,tl:0},min:{apogee:1e6,argPe:1e6,eccentricity:1e6,inclination:1e6,mo:1e6,perigee:1e6,period:1e6,raan:1e6,semiMajorAxis:1e6,ta:1e6,tl:1e6},avg:{apogee:0,argPe:0,eccentricity:0,inclination:0,mo:0,perigee:0,period:0,raan:0,semiMajorAxis:0,ta:0,tl:0}};for(let e=0;e<t.length;e++)t[e].apogee<a.min.apogee&&(a.min.apogee=t[e].apogee),t[e].apogee>a.max.apogee&&(a.max.apogee=t[e].apogee),a.avg.apogee+=t[e].apogee,t[e].argPe<a.min.argPe&&(a.min.argPe=t[e].argPe),t[e].argPe>a.max.argPe&&(a.max.argPe=t[e].argPe),a.avg.argPe+=t[e].argPe,t[e].eccentricity<a.min.eccentricity&&(a.min.eccentricity=t[e].eccentricity),t[e].eccentricity>a.max.eccentricity&&(a.max.eccentricity=t[e].eccentricity),a.avg.eccentricity+=t[e].eccentricity,t[e].inclination<a.min.inclination&&(a.min.inclination=t[e].inclination),t[e].inclination>a.max.inclination&&(a.max.inclination=t[e].inclination),a.avg.inclination+=t[e].inclination,t[e].mo<a.min.mo&&(a.min.mo=t[e].mo),t[e].mo>a.max.mo&&(a.max.mo=t[e].mo),a.avg.mo+=t[e].mo,t[e].perigee<a.min.perigee&&(a.min.perigee=t[e].perigee),t[e].perigee>a.max.perigee&&(a.max.perigee=t[e].perigee),a.avg.perigee+=t[e].perigee,t[e].period<a.min.period&&(a.min.period=t[e].period),t[e].period>a.max.period&&(a.max.period=t[e].period),a.avg.period+=t[e].period,t[e].raan<a.min.raan&&(a.min.raan=t[e].raan),t[e].raan>a.max.raan&&(a.max.raan=t[e].raan),a.avg.raan+=t[e].raan,t[e].semiMajorAxis<a.min.semiMajorAxis&&(a.min.semiMajorAxis=t[e].semiMajorAxis),t[e].semiMajorAxis>a.max.semiMajorAxis&&(a.max.semiMajorAxis=t[e].semiMajorAxis),a.avg.semiMajorAxis+=t[e].semiMajorAxis,t[e].ta<a.min.ta&&(a.min.ta=t[e].ta),t[e].ta>a.max.ta&&(a.max.ta=t[e].ta),a.avg.ta+=t[e].ta,t[e].tl<a.min.tl&&(a.min.tl=t[e].tl),t[e].tl>a.max.tl&&(a.max.tl=t[e].tl),a.avg.tl+=t[e].tl;return a.avg.apogee/=t.length,a.avg.argPe/=t.length,a.avg.eccentricity/=t.length,a.avg.inclination/=t.length,a.avg.mo/=t.length,a.avg.perigee/=t.length,a.avg.period/=t.length,a.avg.raan/=t.length,a.avg.semiMajorAxis/=t.length,a.avg.ta/=t.length,a.avg.tl/=t.length,a},debug:{closestApproach:0}},xe=(e,t,a,i)=>Se(void 0,void 0,void 0,(function*(){try{let s=i.twoline2satrec(e,t),n=Ee(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds());n+=a.getUTCMilliseconds()*Me;let o=1440*(n-s.jdsatepoch);return i.sgp4(s,o)}catch(e){}})),Ee=(e,t,a,i,s,n)=>367*e-Math.floor(7*(e+Math.floor((t+9)/12))*.25)+Math.floor(275*t/9)+a+1721013.5+((n/60+s)/60+i)/24,Le=({massPrimary:e,massSecondary:t,vector:a,massPrimaryU:i,massSecondaryU:s,vectorU:n,outputU:o,outputU2:l})=>{if(!a)throw new Error("vector is required");if(e<=0)throw new Error("massPrimary must be greater than 0");if(t<=0)throw new Error("massSecondary must be greater than 0");if(null!=n||(n="km"),"km"!==n&&"m"!==n)throw new Error('vectorU must be either "km" or "m"');const r="km"===n?1e3:1;let c=a[1]*r,d=a[2]*r,p=a[3]*r,u=a[4]*r,m=a[5]*r,g=a[6]*r;if(null!=s||(s="M_Earth"),"M_Earth"!==s)throw new Error("M_Earth is the only value currently supported.");if(t*=597378250603408e10,null!=i||(i="kg"),"kg"!==i)throw new Error("kg is the only value currently supported.");0===c&&(c=1e-15),0===d&&(d=1e-15),0===p&&(p=1e-15),0===u&&(u=1e-15),0===m&&(m=1e-15),0===g&&(g=1e-15);let h=v.fT*(e+t),b=Math.sqrt(c*c+d*d+p*p),f=Math.sqrt(u*u+m*m+g*g),k=1/(2/b-f*f/h),S=d*g-p*m,y=p*u-c*g,M=c*m-d*u,A=Math.sqrt(S*S+y*y+M*M),T=A*A/h,w=c*u+d*m+p*g,C=Math.sqrt(1-T/k),x=1-b/k,E=w/Math.sqrt(k*h),L=Math.acos(M/A),I=0;0!=L&&(I=Ie(S,-y));let N=Ie(A*w/(b*h),A*A/(b*h)-1),G=(c*Math.cos(I)+d*Math.sin(I))/b,P=0;P=0===L||L===Ae?(d*Math.cos(I)-c*Math.sin(I))/b:p/(b*Math.sin(L));let O=Ie(P,G)-N;O<0&&(O=Te+O);let D=Ie(E,x),R=D-C*Math.sin(D),F=O+N+I;for(;F>=Te;)F-=Te;const U=k*C;let _=k-U-("km"===n?6371:ye),B=k+U-("km"===n?6371:ye),z=Te*Math.sqrt(k*k*k/(v.fT*(e+t)));return null!=o||(o="m"),k="km"===o?k/1e3:k,B="km"===o?B/1e3:B,_="km"===o?_/1e3:_,null!=l||(l="s"),z="m"===l?z/60:z,L*=we,I*=we,O*=we,R*=we,N*=we,F*=we,{semiMajorAxis:k,eccentricity:C,inclination:L,raan:I,argPe:O,mo:R,ta:N,tl:F,perigee:_,apogee:B,period:z}},Ie=(e,t)=>{let a;return 0!=t?(a=Math.atan(e/t),t<0&&(a+=Ae),t>0&&e<0&&(a+=Te)):(e<0&&(a=-Ae/2),0===e&&(a=0),e>0&&(a=Ae/2)),a},Ne=(e,t,a,i,s)=>(Math.floor(275*e/9)+t+((s/60+i)/60+a)/24).toFixed(5),Ge=(e,t)=>(null==e?void 0:e.length)<t?Ge("0"+e,t):e,Pe=Ce,Oe=d.keepTrackApi.html`The Initial Orbit Menu is used for generating TLEs using 1-3 state vectors.
<br><br>
Time is in unix time (seconds since 1970-01-01 00:00:00 UTC).
<br><br>
The first state vector is required. The second and third state vectors are optional.
`;let De=!1;const Re=()=>{d.keepTrackApi.register({method:"uiManagerInit",cbName:"initialOrbit",cb:_e}),d.keepTrackApi.register({method:"uiManagerFinal",cbName:"initialOrbit",cb:Be}),d.keepTrackApi.register({method:"bottomMenuClick",cbName:"initialOrbit",cb:ze}),d.keepTrackApi.register({method:"hideSideMenus",cbName:"initialOrbit",cb:Ue}),d.keepTrackApi.register({method:"onHelpMenuClick",cbName:"initialOrbit",cb:Fe})},Fe=()=>!!De&&(h.v.showAdvice("Initial Orbit Menu",Oe),!0),Ue=()=>{(0,g.kW)((0,u.G)("obfit-menu"),1e3),(0,u.G)("menu-obfit").classList.remove("bmenu-item-selected"),De=!1},_e=()=>{(0,u.G)("left-menus").insertAdjacentHTML("beforeend",d.keepTrackApi.html`
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
  `),(0,u.G)("bottom-icons").insertAdjacentHTML("beforeend",d.keepTrackApi.html`
    <div id="menu-obfit" class="bmenu-item">
      <img
        alt="obfit"
        src=""
        delayedsrc="${ke}" />
      <span class="bmenu-title">Initial Orbit</span>
      <div class="status-icon"></div>
    </div>
  `)},Be=()=>{(0,u.G)("obfit-form").addEventListener("submit",(function(e){$e(e)}))},ze=e=>{if("menu-obfit"===e){const e=r.I.get(c.Yv.UiManager);return De?(De=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.searchToggle(!1),e.hideSideMenus(),(0,g.$k)((0,u.G)("obfit-menu"),1e3),De=!0,void(0,u.G)("menu-obfit").classList.add("bmenu-item-selected"))}},$e=e=>{const{satellite:t}=d.keepTrackApi.programs,a=r.I.get(c.Yv.TimeManager),i=r.I.get(c.Yv.UiManager);let s=!1,n=!1;const o=Ye("obfit-t1"),l=Ye("obfit-x1"),p=Ye("obfit-y1"),u=Ye("obfit-z1"),m=Ye("obfit-xd1"),g=Ye("obfit-yd1"),h=Ye("obfit-zd1"),b=Ye("obfit-t2"),v=Ye("obfit-x2"),f=Ye("obfit-y2"),k=Ye("obfit-z2"),S=Ye("obfit-xd2"),y=Ye("obfit-yd2"),M=Ye("obfit-zd2"),A=Ye("obfit-t3"),T=Ye("obfit-x3"),w=Ye("obfit-y3"),C=Ye("obfit-z3"),x=Ye("obfit-xd3"),E=Ye("obfit-yd3"),L=Ye("obfit-zd3"),I=[];let N=[];if(isNaN(o))return i.toast("Time 1 is Invalid!","critical"),!1;if(isNaN(l))return i.toast("X 1 is Invalid!","critical"),!1;if(isNaN(p))return i.toast("Y 1 is Invalid!","critical"),!1;if(isNaN(u))return i.toast("Z 1 is Invalid!","critical"),!1;if(isNaN(m))return i.toast("X Dot 1 is Invalid!","critical"),!1;if(isNaN(g))return i.toast("Y Dot 1 is Invalid!","critical"),!1;if(isNaN(h))return i.toast("Z Dot 1 is Invalid!","critical"),!1;N=[o,l,p,u,m,g,h],I.push(N);const{isOb:G,sv:P}=He({isOb:s,obNum:2,t:b,x:v,y:f,z:k,xd:S,yd:y,zd:M,uiManagerInstance:i});s=G,I.push(P),n=!!s&&n;const{isOb:O,sv:D}=He({isOb:n,obNum:3,t:A,x:T,y:w,z:C,xd:x,yd:E,zd:L,uiManagerInstance:i});return n=O,I.push(D),Pe.svs2analyst(I,a,t),e.preventDefault(),!0},He=({isOb:e,obNum:t,t:a,x:i,y:s,z:n,xd:o,yd:l,zd:r,uiManagerInstance:c})=>{let d=[];return e&&isNaN(a)&&(e=!1,c.toast(`Time ${t} is Invalid!`,"caution")),e&&isNaN(i)&&(e=!1,c.toast(`X ${t} is Invalid!`,"caution")),e&&isNaN(s)&&(e=!1,c.toast(`Y ${t} is Invalid!`,"caution")),e&&isNaN(n)&&(e=!1,c.toast(`Z ${t} is Invalid!`,"caution")),e&&isNaN(o)&&(e=!1,c.toast(`X Dot ${t} is Invalid!`,"caution")),e&&isNaN(l)&&(e=!1,c.toast(`Y Dot ${t} is Invalid!`,"caution")),e&&isNaN(r)&&(e=!1,c.toast(`Z Dot ${t} is Invalid!`,"caution")),e&&(d=[a,i,s,n,o,l,r]),{isOb:e,sv:d}},Ye=e=>{const t=(0,u.G)(e).value;return t.length>0?parseFloat(t):NaN},je=a.p+"../img/missile.png",Ve=d.keepTrackApi.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var Je=a(4378);let Ke=!1,We=!1,Xe=0;const qe=()=>{if(void 0!==Je.CC&&Je.CC.missileArray.length>0){const e=r.I.get(c.Yv.OrbitManager);for(Xe=0;Xe<Je.CC.missileArray.length;Xe++)e.updateOrbitBuffer(Je.CC.missileArray[Xe].id)}},Ze=()=>{(0,g.kW)((0,u.G)("missile-menu"),1e3),(0,u.G)("menu-missile").classList.remove("bmenu-item-selected"),Ke=!1},Qe=e=>{if("menu-missile"===e){const e=r.I.get(c.Yv.UiManager);return Ke?(Ke=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.searchToggle(!1),e.hideSideMenus(),(0,g.$k)((0,u.G)("missile-menu"),1e3),(0,u.G)("menu-missile").classList.add("bmenu-item-selected"),void(Ke=!0))}},et=()=>{0!==parseFloat((0,u.G)("ms-type").value)?(0,u.G)("ms-custom-opt").style.display="none":(0,u.G)("ms-custom-opt").style.display="block"},tt=()=>{(0,u.G)("ms-error").style.display="none"},at=()=>{-1!==parseInt((0,u.G)("ms-target").value)?((0,u.G)("ms-tgt-holder-lat").style.display="none",(0,u.G)("ms-tgt-holder-lon").style.display="none"):((0,u.G)("ms-tgt-holder-lat").style.display="block",(0,u.G)("ms-tgt-holder-lon").style.display="block")},it=()=>{(0,m.QP)((()=>{const e=r.I.get(c.Yv.TimeManager),t=r.I.get(c.Yv.UiManager);(0,u.G)("ms-error").style.display="none";const a=parseFloat((0,u.G)("ms-type").value),i=parseFloat((0,u.G)("ms-attacker").value);let s=parseFloat((0,u.G)("ms-lat-lau").value),n=parseFloat((0,u.G)("ms-lon-lau").value);const o=parseFloat((0,u.G)("ms-target").value);let l=parseFloat((0,u.G)("ms-lat").value),d=parseFloat((0,u.G)("ms-lon").value);const p=e.selectedDate.getTime();let m="";if(1===a&&(m="simulation/Russia2USA.json",Je.CC.MassRaidPre(p,m)),2===a&&(m="simulation/Russia2USAalt.json",Je.CC.MassRaidPre(p,m)),3===a&&(m="simulation/China2USA.json",Je.CC.MassRaidPre(p,m)),4===a&&(m="simulation/NorthKorea2USA.json",Je.CC.MassRaidPre(p,m)),5===a&&(m="simulation/USA2Russia.json",Je.CC.MassRaidPre(p,m)),6===a&&(m="simulation/USA2China.json",Je.CC.MassRaidPre(p,m)),7===a&&(m="simulation/USA2NorthKorea.json",Je.CC.MassRaidPre(p,m)),0!==a&&t.toast(`${m} Loaded`,"standby",!0),0===a){if(-1===o){if(isNaN(l))return t.toast("Invalid Target Latitude!","critical"),void((0,u.G)("loading-screen").style.display="none");if(isNaN(d))return t.toast("Invalid Target Longitude!","critical"),void((0,u.G)("loading-screen").style.display="none")}else l=Je.CC.globalBMTargets[3*o],d=Je.CC.globalBMTargets[3*o+1];if(We){if(isNaN(s))return t.toast("Invalid Launch Latitude!","critical"),void((0,u.G)("loading-screen").style.display="none");if(isNaN(n))return t.toast("Invalid Launch Longitude!","critical"),void((0,u.G)("loading-screen").style.display="none")}let e,a;const m=r.I.get(c.Yv.CatalogManager);if(i<200){e=i-100,a=500-Je.CC.missilesInUse;let t=1200;100!=i&&(s=Je.CC.UsaICBM[4*e],n=Je.CC.UsaICBM[4*e+1],t=1100),Je.CC.Missile(s,n,l,d,3,m.missileSats-a,p,Je.CC.UsaICBM[4*e+2],30,2.9,.07,Je.CC.UsaICBM[4*e+3],"United States",t)}else if(i<300){e=i-200,a=500-Je.CC.missilesInUse;const t=1120;213!=i&&214!=i&&215!=i&&(s=Je.CC.RussianICBM[4*e],n=Je.CC.RussianICBM[4*e+1]),Je.CC.Missile(s,n,l,d,3,m.missileSats-a,p,Je.CC.RussianICBM[4*e+2],30,2.9,.07,Je.CC.RussianICBM[4*e+3],"Russia",t)}else if(i<400){e=i-300,a=500-Je.CC.missilesInUse;const t=1120;321!=i&&(s=Je.CC.ChinaICBM[4*e],n=Je.CC.ChinaICBM[4*e+1]),Je.CC.Missile(s,n,l,d,3,m.missileSats-a,p,Je.CC.ChinaICBM[4*e+2],30,2.9,.07,Je.CC.ChinaICBM[4*e+3],"China",t)}else if(i<500){e=i-400,a=500-Je.CC.missilesInUse;const t=1120;400!=i&&(s=Je.CC.NorthKoreanBM[4*e],n=Je.CC.NorthKoreanBM[4*e+1]),Je.CC.Missile(s,n,l,d,3,m.missileSats-a,p,Je.CC.NorthKoreanBM[4*e+2],30,2.9,.07,Je.CC.NorthKoreanBM[4*e+3],"North Korea",t)}else if(i<600){e=i-500,a=500-Je.CC.missilesInUse;const t=1e3;500!=i&&(s=Je.CC.FraSLBM[4*e],n=Je.CC.FraSLBM[4*e+1]),Je.CC.Missile(s,n,l,d,3,m.missileSats-a,p,Je.CC.FraSLBM[4*e+2],30,2.9,.07,Je.CC.FraSLBM[4*e+3],"France",t)}else if(i<700){e=i-600,a=500-Je.CC.missilesInUse;const t=1200;600!=i&&(s=Je.CC.ukSLBM[4*e],n=Je.CC.ukSLBM[4*e+1]),Je.CC.Missile(s,n,l,d,3,m.missileSats-a,p,Je.CC.ukSLBM[4*e+2],30,2.9,.07,Je.CC.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(Je.CC.lastMissileError,Je.CC.lastMissileErrorType),t.doSearch("RV_")}(0,u.G)("loading-screen").style.display="none"}))},st=()=>{(0,u.G)("left-menus").insertAdjacentHTML("beforeend",d.keepTrackApi.html`
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
                      <optgroup label="United States">
                        <option value="100">Ohio Sub (Trident II)</option>
                        <option value="101">Minot</option>
                        <option value="102">Malmstrom</option>
                        <option value="103">F.E. Warren</option>
                      </optgroup>
                      <optgroup label="United Kingdom">
                        <option value="600">Vanguard Sub (Trident II)</option>
                        <option value="601">HMNB Clyde (Trident II)</option>
                      </optgroup>
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
                        <option value="319">Xinjiang Province</option> <!-- // NO-PIG -->
                        <option value="320">Tibet Province</option>
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
                      <option value="-1">Custom Impact</option>
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
      `),(0,u.G)("bottom-icons").insertAdjacentHTML("beforeend",d.keepTrackApi.html`
        <div id="menu-missile" class="bmenu-item">
          <img
            alt="missile"
            src="" delayedsrc=${je}
          />
          <span class="bmenu-title">Missile</span>
          <div class="status-icon"></div>
        </div>
        `)},nt=()=>{r.I.get(c.Yv.UiManager).doSearch("RV_")},ot=()=>{(0,p.E)((0,u.G)("missile-menu")),(0,u.G)("missile").addEventListener("submit",(e=>{e.preventDefault(),it()})),(0,u.G)("ms-attacker").addEventListener("change",ct),(0,u.G)("ms-target").addEventListener("change",at),(0,u.G)("ms-error").addEventListener("click",tt),(0,u.G)("missile").addEventListener("change",et),(0,u.G)("searchRvBtn").addEventListener("click",nt)},lt=()=>{d.keepTrackApi.register({method:"uiManagerInit",cbName:"missile",cb:st}),d.keepTrackApi.register({method:"uiManagerFinal",cbName:"missile",cb:ot}),d.keepTrackApi.register({method:"bottomMenuClick",cbName:"missile",cb:Qe}),d.keepTrackApi.register({method:"hideSideMenus",cbName:"missile",cb:Ze}),d.keepTrackApi.register({method:"updateLoop",cbName:"updateMissileOrbits",cb:qe}),d.keepTrackApi.register({method:"onHelpMenuClick",cbName:"missile",cb:rt})},rt=()=>!!Ke&&(h.v.showAdvice("Missile Menu",Ve),!0),ct=()=>{We=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,u.G)("ms-attacker").value)&&(We=!0);We?((0,u.G)("ms-lau-holder-lat").style.display="block",(0,u.G)("ms-lau-holder-lon").style.display="block"):((0,u.G)("ms-lau-holder-lat").style.display="none",(0,u.G)("ms-lau-holder-lon").style.display="none")};a(2322);var dt=a(8120),pt=a(4579),ut=a(3845);const mt=(e,t,a,i)=>{if(!t)return a;dt.JE(i)&&dt.B9(a);const s={config:{xAxis3D:"X",yAxis3D:"Y",zAxis3D:"Z"},configParameters:{}};a=dt.S1(i);const n=[{name:"X",index:0},{name:"Y",index:1},{name:"Z",index:2}],o=n.reduce((function(e,t){return e[t.name]=t.index,e}),{});let l=n.map((e=>e.name));return l=l.slice(2,l.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{s.configParameters[e]={options:l}})),a.setOption({tooltip:{},xAxis3D:{name:s.config.xAxis3D,type:"value"},yAxis3D:{name:s.config.yAxis3D,type:"value"},zAxis3D:{name:s.config.zAxis3D,type:"value"},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[s.config.xAxis3D,s.config.yAxis3D,s.config.yAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[o[s.config.xAxis3D]],t[o[s.config.yAxis3D]],t[o[s.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}),a},gt=()=>{const e=[],t=r.I.get(c.Yv.CatalogManager);let a=t.getSat(t.selectedSat);e.push({name:a.name,value:ut.c.getEcfOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))});const i=t.lastSelectedSat();return-1!==i&&(a=t.getSat(i),e.push({name:a.name,value:ut.c.getEcfOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))})),e},ht=(e,t,a,i)=>{if(!t)return a;dt.JE(i)&&dt.B9(a);const s={config:{xAxis3D:"X",yAxis3D:"Y",zAxis3D:"Z"},configParameters:{}};a=dt.S1(i);const n=[{name:"X",index:0},{name:"Y",index:1},{name:"Z",index:2}],o=n.reduce((function(e,t){return e[t.name]=t.index,e}),{});let l=n.map((e=>e.name));l=l.slice(2,l.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{s.configParameters[e]={options:l}}));const r=e.reduce(((e,t)=>{const a=t.value.reduce(((e,t)=>Math.min(e,t[0])),1/0),i=t.value.reduce(((e,t)=>Math.max(e,t[0])),-1/0),s=t.value.reduce(((e,t)=>Math.min(e,t[1])),1/0),n=t.value.reduce(((e,t)=>Math.max(e,t[1])),-1/0),o=t.value.reduce(((e,t)=>Math.min(e,t[2])),1/0),l=t.value.reduce(((e,t)=>Math.max(e,t[2])),-1/0),r=1e3*Math.round(Math.min(a,s,o)/1e3),c=1e3*Math.round(Math.max(i,n,l)/1e3),d=Math.max(c,Math.abs(r));return Math.max(e,d)}),0);return a.setOption({tooltip:{},xAxis3D:{name:s.config.xAxis3D,type:"value",min:-r,max:r},yAxis3D:{name:s.config.yAxis3D,type:"value",min:-r,max:r},zAxis3D:{name:s.config.zAxis3D,type:"value",min:-r,max:r},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[s.config.xAxis3D,s.config.yAxis3D,s.config.yAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[o[s.config.xAxis3D]],t[o[s.config.yAxis3D]],t[o[s.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}),a},bt=()=>{const e=[],t=r.I.get(c.Yv.CatalogManager);let a=t.getSat(t.selectedSat);e.push({name:a.name,value:ut.c.getEciOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))});const i=t.lastSelectedSat();return-1!==i&&(a=t.getSat(i),e.push({name:a.name,value:ut.c.getEciOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))})),e};var vt=a(2590),ft=a(6349),kt=a(3991),St=a(7368);const yt=(e,t,a,i)=>{if(!t)return a;dt.JE(i)&&dt.B9(a);const s={config:{xAxis3D:"Radial",yAxis3D:"In-Track",zAxis3D:"Cross-Track"},configParameters:{}};a=dt.S1(i);const n=[{name:"Radial",index:0},{name:"In-Track",index:1},{name:"Cross-Track",index:2}],o=n.reduce((function(e,t){return e[t.name]=t.index,e}),{});let l=n.map((e=>e.name));return l=l.slice(2,l.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{s.configParameters[e]={options:l}})),a.setOption({title:{text:"RIC Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis3D:{name:s.config.xAxis3D,type:"value"},yAxis3D:{name:s.config.yAxis3D,type:"value"},zAxis3D:{name:s.config.zAxis3D,type:"value"},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[s.config.xAxis3D,s.config.yAxis3D,s.config.yAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[o[s.config.xAxis3D]],t[o[s.config.yAxis3D]],t[o[s.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}),a},Mt=()=>{const e=[],t=r.I.get(c.Yv.CatalogManager);if(-1===t.selectedSat||-1===t.secondarySat)return[];const a=t.getSat(t.selectedSat),i=t.secondarySatObj;return e.push({name:a.name,value:[[0,0,0]]}),e.push({name:i.name,value:ut.c.getRicOfCurrentOrbit(i,a,500,5).map((e=>[e.x,e.y,e.z]))}),e},At=a.p+"../img/line-plot.png",Tt=a.p+"../img/scatter-plot.png",wt=a.p+"../img/scatter-plot2.png",Ct=a.p+"../img/scatter-plot3.png",xt=a.p+"../img/scatter-plot4.png",Et=d.keepTrackApi.html`
      <div id="menu-plot-analysis" class="bmenu-item bmenu-item-disabled">
        <img
          alt="ECI Plots"
          src="" delayedsrc=${wt}
        />
        <span class="bmenu-title">ECI Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis2" class="bmenu-item bmenu-item-disabled">
        <img
          alt="ECF Plots"
          src="" delayedsrc=${Ct}
        />
        <span class="bmenu-title">ECF Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis3" class="bmenu-item bmenu-item-disabled">
        <img
          alt="RIC Plots"
          src="" delayedsrc=${xt}
        />
        <span class="bmenu-title">RIC Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis4" class="bmenu-item">
        <img
          alt="Inc v Lon Plots"
          src="" delayedsrc=${Tt}
        />
        <span class="bmenu-title">Inc v Lon Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis5" class="bmenu-item">
        <img
          alt="Time v Lon Plots"
          src="" delayedsrc=${At}
        />
        <span class="bmenu-title">Time v Lon Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis6" class="bmenu-item">
        <img
          alt="Inc v Alt Plots"
          src="" delayedsrc=${Tt}
        />
        <span class="bmenu-title">Inc v Alt Plots</span>
        <div class="status-icon"></div>
      </div>
    `;var Lt=a(3379),It=a.n(Lt),Nt=a(7795),Gt=a.n(Nt),Pt=a(569),Ot=a.n(Pt),Dt=a(3565),Rt=a.n(Dt),Ft=a(9216),Ut=a.n(Ft),_t=a(4589),Bt=a.n(_t),zt=a(6880),$t={};$t.styleTagTransform=Bt(),$t.setAttributes=Rt(),$t.insert=Ot().bind(null,"head"),$t.domAPI=Gt(),$t.insertStyleElement=Ut(),It()(zt.Z,$t),zt.Z&&zt.Z.locals&&zt.Z.locals;const Ht=d.keepTrackApi.html`
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
    `,Yt=d.keepTrackApi.html`The ECI Plot Menu is used for plotting the ECI position of a satellite over time.
`,jt=d.keepTrackApi.html`The ECF Plot Menu is used for plotting the ECF position of a satellite over time.
`,Vt=d.keepTrackApi.html`The RIC Plot Menu is used for plotting the RIC position of a satellite over time.
`,Jt=d.keepTrackApi.html`The Inc vs Lon Plot Menu is used for plotting the inclination vs longitude in the GEO belt.
`,Kt=d.keepTrackApi.html`The Time vs Lon Plot Menu is used for plotting the time vs longitude in the GEO belt.
`,Wt=d.keepTrackApi.html`The Inc vs Alt Plot Menu is used for plotting the inclination vs altitude.
`;let Xt,qt,Zt,Qt,ea,ta,aa=!1,ia=!1,sa=!1,na=!1,oa=!1,la=!1;const ra=()=>{d.keepTrackApi.register({method:"uiManagerInit",cbName:"plotAnalysis",cb:()=>da()}),d.keepTrackApi.register({method:"bottomMenuClick",cbName:"plotAnalysis",cb:e=>pa(e)}),d.keepTrackApi.register({method:"hideSideMenus",cbName:"plotAnalysis",cb:()=>fa()}),d.keepTrackApi.register({method:"selectSatData",cbName:"plotAnalysis",cb:ka}),d.keepTrackApi.register({method:"onHelpMenuClick",cbName:"plotAnalysis",cb:ca})},ca=()=>aa?(h.v.showAdvice("ECI Plot Menu",Yt),!0):ia?(h.v.showAdvice("ECF Plot Menu",jt),!0):sa?(h.v.showAdvice("RIC Plot Menu",Vt),!0):na?(h.v.showAdvice("Inc vs Lon Plot Menu",Jt),!0):oa?(h.v.showAdvice("Time vs Lon Plot Menu",Kt),!0):!!la&&(h.v.showAdvice("Inc vs Alt Plot Menu",Wt),!0),da=()=>{(0,u.G)("left-menus").insertAdjacentHTML("beforeend",Ht),(0,u.G)("bottom-icons").insertAdjacentHTML("beforeend",Et),(0,p.E)((0,u.G)("plot-analysis-menu"),{maxWidth:1200,minWidth:500}),(0,p.E)((0,u.G)("plot-analysis-menu2"),{maxWidth:1200,minWidth:500}),(0,p.E)((0,u.G)("plot-analysis-menu3"),{maxWidth:1200,minWidth:500})},pa=e=>{switch(e){case"menu-plot-analysis":ua();break;case"menu-plot-analysis2":ma();break;case"menu-plot-analysis3":ga();break;case"menu-plot-analysis4":ha();break;case"menu-plot-analysis5":va();break;case"menu-plot-analysis6":ba()}},ua=()=>{const e=r.I.get(c.Yv.CatalogManager),t=r.I.get(c.Yv.UiManager);if(-1===e.selectedSat)return t.toast("Select a Satellite First!","caution"),void(0,pt.l)((0,u.G)("menu-plot-analysis"));if(aa)return t.hideSideMenus(),void(aa=!1);{t.hideSideMenus(),(0,g.$k)((0,u.G)("plot-analysis-menu"),1e3),aa=!0;const e=(0,u.G)("plot-analysis-chart");return Xt=ht(bt(),aa,Xt,e),setTimeout((()=>{Xt.resize()}),1e3),void(0,u.G)("menu-plot-analysis").classList.add("bmenu-item-selected")}},ma=()=>{const e=r.I.get(c.Yv.CatalogManager),t=r.I.get(c.Yv.UiManager);if(-1===e.selectedSat)return t.toast("Select a Satellite First!","caution"),void(0,pt.l)((0,u.G)("menu-plot-analysis2"));if(ia)return t.hideSideMenus(),void(ia=!1);{t.hideSideMenus(),(0,g.$k)((0,u.G)("plot-analysis-menu2"),1e3),ia=!0;const e=(0,u.G)("plot-analysis-chart2");return qt=mt(gt(),ia,qt,e),setTimeout((()=>{qt.resize()}),1e3),void(0,u.G)("menu-plot-analysis2").classList.add("bmenu-item-selected")}},ga=()=>{const e=r.I.get(c.Yv.CatalogManager),t=r.I.get(c.Yv.UiManager);if(-1===e.secondarySat)return t.toast("Select a Secondary Satellite First!","caution"),void(0,pt.l)((0,u.G)("menu-plot-analysis3"));if(-1===e.selectedSat||-1===e.lastSelectedSat())return t.toast("Select a Primary Satellite First!","caution"),void(0,pt.l)((0,u.G)("menu-plot-analysis3"));if(sa)return t.hideSideMenus(),void(sa=!1);{t.hideSideMenus(),(0,g.$k)((0,u.G)("plot-analysis-menu3"),1e3),sa=!0;const e=(0,u.G)("plot-analysis-chart3");return Zt=yt(Mt(),sa,Zt,e),setTimeout((()=>{Zt.resize()}),1e3),void(0,u.G)("menu-plot-analysis3").classList.add("bmenu-item-selected")}},ha=()=>{const e=r.I.get(c.Yv.UiManager);if(na)return e.hideSideMenus(),void(na=!1);{e.hideSideMenus(),(0,g.$k)((0,u.G)("plot-analysis-menu4"),1e3),na=!0;const t=(0,u.G)("plot-analysis-chart4");return dt.JE(t)||(Qt=((e,t,a,i)=>t?(dt.JE(i)||((a=dt.S1(i)).on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&r.I.get(c.Yv.CatalogManager).selectSat(e.data.id)})),a.setOption({title:{text:"Inclination vs Longitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis:{name:"Longitude",type:"value",position:"bottom"},yAxis:{name:"Inclination",type:"value",position:"left"},zAxis:{name:"Period",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:65},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:65}],visualMap:[{left:"left",top:"10%",dimension:2,min:1240,max:1640,itemWidth:30,itemHeight:500,calculable:!0,precision:.05,text:["Period (minutes)"],textGap:30,textStyle:{color:"#fff"},inRange:{},outOfRange:{opacity:0,symbol:"none"},controller:{inRange:{color:["#41577c"]},outOfRange:{color:["#999"]}}}],series:e.map((e=>({type:"scatter",name:e.name,data:e.value.map((e=>({name:e[3],id:e[4],value:[e[1],e[0],e[2]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})),a):a)((()=>{const e=r.I.get(c.Yv.TimeManager),t=r.I.get(c.Yv.CatalogManager),a=[],i=[],s=[],n=[];return t.satData.forEach((o=>{if(o.TLE1&&o.type===vt.g.PAYLOAD&&!(o.eccentricity>.1||o.period<1240||o.period>1640||o.inclination*v.I3>17))switch(o=t.getSat(o.id,c.C_.POSITION_ONLY),(o=Object.assign(Object.assign({},o),St.x.eci2lla(o.position,e.simulationTimeObj))).country){case"United States of America":case"United States":case"US":return void i.push([o.inclination*v.I3,o.lon,o.period,o.name,o.id]);case"Russian Federation":case"CIS":case"Russia":return void s.push([o.inclination*v.I3,o.lon,o.period,o.name,o.id]);case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":return void a.push([o.inclination*v.I3,o.lon,o.period,o.name,o.id]);default:return void n.push([o.inclination*v.I3,o.lon,o.period,o.name,o.id])}})),[{name:"USA",value:i},{name:"Other",value:n},{name:"Russia",value:s},{name:"China",value:a}]})(),na,Qt,t)),setTimeout((()=>{Qt.resize()}),1e3),void(0,u.G)("menu-plot-analysis4").classList.add("bmenu-item-selected")}},ba=()=>{const e=r.I.get(c.Yv.UiManager);if(la)return e.hideSideMenus(),void(la=!1);{e.hideSideMenus(),(0,g.$k)((0,u.G)("plot-analysis-menu6"),1e3),la=!0;const t=(0,u.G)("plot-analysis-chart6");return dt.JE(t)||(ta=((e,t,a,i)=>t?(dt.JE(i)||((a=dt.S1(i)).on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&r.I.get(c.Yv.CatalogManager).selectSat(e.data.id)})),a.setOption({title:{text:"Inclination vs Altitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis:{name:"Inclination",type:"value",position:"bottom"},yAxis:{name:"Altitude",type:"value",position:"left"},zAxis:{name:"Period",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:65},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:65}],visualMap:[{left:"left",top:"10%",dimension:2,min:80,max:250,itemWidth:30,itemHeight:500,calculable:!0,precision:.05,text:["Period (min)"],textGap:30,textStyle:{color:"#fff"},inRange:{},outOfRange:{opacity:0,symbol:"none"},controller:{inRange:{color:["#41577c"]},outOfRange:{color:["#999"]}}}],series:e.map((e=>({type:"scatter",name:e.name,data:e.value.map((e=>({name:e[3],id:e[4],value:[e[1],e[0],e[2]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})),a):a)((()=>{const e=r.I.get(c.Yv.TimeManager),t=r.I.get(c.Yv.CatalogManager),a=[],i=[],s=[],n=[];return t.satData.forEach((o=>{if(!o.TLE1||o.type!==vt.g.PAYLOAD)return;if(o.period>250)return;o=t.getSat(o.id,c.C_.POSITION_ONLY);const l=e.simulationTimeObj;let r=(0,ft.J0)(l.getUTCFullYear(),l.getUTCMonth()+1,l.getUTCDate(),l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds());r+=l.getUTCMilliseconds()*v.c1;const d=kt.Sgp4.gstime(r);if(o=Object.assign(Object.assign({},o),kt.Transforms.eci2lla(o.position,d)),!(b.$.getAlt(o.position,d)<80))switch(o.country){case"United States of America":case"United States":case"US":return void i.push([b.$.getAlt(o.position,d),o.inclination*v.I3,o.period,o.name,o.id]);case"Russian Federation":case"CIS":case"RU":case"SU":case"Russia":return void s.push([b.$.getAlt(o.position,d),o.inclination*v.I3,o.period,o.name,o.id]);case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":case"PRC":case"CN":return void a.push([b.$.getAlt(o.position,d),o.inclination*v.I3,o.period,o.name,o.id]);default:return void n.push([b.$.getAlt(o.position,d),o.inclination*v.I3,o.period,o.name,o.id])}})),[{name:"USA",value:i},{name:"Other",value:n},{name:"Russia",value:s},{name:"China",value:a}]})(),la,ta,t)),setTimeout((()=>{ta.resize()}),1e3),void(0,u.G)("menu-plot-analysis6").classList.add("bmenu-item-selected")}},va=()=>{const e=r.I.get(c.Yv.UiManager);if(oa)return e.hideSideMenus(),void(oa=!1);{e.hideSideMenus(),(0,g.$k)((0,u.G)("plot-analysis-menu5"),1e3),oa=!0;const t=(0,u.G)("plot-analysis-chart5");return dt.JE(t)||(ea=((e,t,a,i)=>t?(dt.JE(i)||((a=dt.S1(i)).on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&r.I.get(c.Yv.CatalogManager).selectSat(e.data.id)})),a.setOption({title:{text:"Time vs Longitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{},xAxis:{name:"Longitude",type:"value",position:"bottom"},yAxis:{name:"Time",type:"value",position:"left"},zAxis:{name:"Mean Motion",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:1440},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:1440}],series:e.map((e=>({type:"line",name:e.name,data:e.data.map((t=>({name:e.country,id:e.satId,value:[t[1],t[0]]}))),emphasis:{itemStyle:{color:"#fff"}}})))})),a):a)((()=>{const e=r.I.get(c.Yv.CatalogManager),t=r.I.get(c.Yv.TimeManager).simulationTimeObj.getTime(),a=[];return e.satData.forEach((i=>{if(!i.TLE1||i.type!==vt.g.PAYLOAD)return;if(i.eccentricity>.1)return;if(i.period<1240)return;if(i.period>1640)return;switch(i.country){case"United States of America":case"United States":case"US":case"Russian Federation":case"CIS":case"Russia":case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":break;default:return}i=e.getSat(i.id,c.C_.POSITION_ONLY);const s=ut.c.getLlaOfCurrentOrbit(i,24),n=[];s.forEach((e=>{const a=(e.time-t)/1e3/60;a>1440||a<0||n.push([a,e.lon*v.I3])})),a.push({name:i.name,satId:i.id,country:i.country,data:n})})),a})(),oa,ea,t)),setTimeout((()=>{ea.resize()}),1e3),void(0,u.G)("menu-plot-analysis5").classList.add("bmenu-item-selected")}},fa=()=>{(0,g.kW)((0,u.G)("plot-analysis-menu"),1e3),(0,u.G)("menu-plot-analysis").classList.remove("bmenu-item-selected"),aa=!1,(0,g.kW)((0,u.G)("plot-analysis-menu2"),1e3),(0,u.G)("menu-plot-analysis2").classList.remove("bmenu-item-selected"),ia=!1,(0,g.kW)((0,u.G)("plot-analysis-menu3"),1e3),(0,u.G)("menu-plot-analysis3").classList.remove("bmenu-item-selected"),sa=!1,(0,g.kW)((0,u.G)("plot-analysis-menu4"),1e3),(0,u.G)("menu-plot-analysis4").classList.remove("bmenu-item-selected"),na=!1,(0,g.kW)((0,u.G)("plot-analysis-menu5"),1e3),(0,u.G)("menu-plot-analysis5").classList.remove("bmenu-item-selected"),oa=!1,(0,g.kW)((0,u.G)("plot-analysis-menu6"),1e3),(0,u.G)("menu-plot-analysis6").classList.remove("bmenu-item-selected"),la=!1},ka=(e,t)=>{if(-1!==t){if(aa){(0,u.G)("menu-plot-analysis").classList.add("bmenu-item-selected");const e=(0,u.G)("plot-analysis-chart");Xt=ht(bt(),aa,Xt,e)}if(ia){(0,u.G)("menu-plot-analysis2").classList.add("bmenu-item-selected");const e=(0,u.G)("plot-analysis-chart2");qt=mt(gt(),ia,qt,e)}if(-1!==r.I.get(c.Yv.CatalogManager).secondarySat&&sa){(0,u.G)("menu-plot-analysis3").classList.add("bmenu-item-selected");const e=(0,u.G)("plot-analysis-chart3");Zt=yt(Mt(),sa,Zt,e)}}else fa()},Sa=a.p+"../img/sat3.png";class ya extends ae.c{constructor(){super("Satellite View"),this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=Sa,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{if(ne.tE.cameraType===ne.iM.SATELLITE)return r.I.get(c.Yv.UiManager).hideSideMenus(),ne.tE.cameraType=ne.iM.FIXED_TO_SAT,void(0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected");-1!==r.I.get(c.Yv.CatalogManager).selectedSat?(ne.tE.cameraType=ne.iM.SATELLITE,(0,u.G)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(r.I.get(c.Yv.UiManager).toast("Select a Satellite First!","caution"),(0,pt.l)((0,u.G)(this.bottomIconElementName)))},this.lastLongAudioTime=0}}const Ma=new ya,Aa=a.p+"../audio/beep1.mp3",Ta=a.p+"../audio/button.mp3",wa=a.p+"../audio/error.mp3",Ca=a.p+"../audio/genericBeep1.mp3",xa=a.p+"../audio/genericBeep2.mp3",Ea=a.p+"../audio/genericBeep3.mp3",La=a.p+"../audio/liftoff.mp3",Ia=a.p+"../audio/pop.mp3",Na=a.p+"../audio/switch.mp3",Ga=a.p+"../audio/toggle-off.mp3",Pa=a.p+"../audio/toggle-on.mp3",Oa=a.p+"../audio/whoosh1.mp3",Da=a.p+"../audio/whoosh2.mp3",Ra=a.p+"../audio/whoosh3.mp3",Fa=a.p+"../audio/whoosh4.mp3",Ua=a.p+"../audio/whoosh5.mp3",_a=a.p+"../audio/whoosh6.mp3",Ba=a.p+"../audio/whoosh7.mp3",za=a.p+"../audio/whoosh8.mp3";class $a extends ae.c{constructor(){super("Sound Manager"),this.lastLongAudioTimne=0,this.isMute=!1,this.voices=[],this.sounds={standby:new Audio(Ia),error:new Audio(wa),click:new Audio(Na),beep1:new Audio(Aa),genericBeep1:new Audio(Ca),genericBeep2:new Audio(xa),genericBeep3:new Audio(Ea),whoosh1:new Audio(Oa),whoosh2:new Audio(Da),whoosh3:new Audio(Ra),whoosh4:new Audio(Fa),whoosh5:new Audio(Ua),whoosh6:new Audio(_a),whoosh7:new Audio(Ba),whoosh8:new Audio(za),button:new Audio(Ta),toggleOn:new Audio(Pa),toggleOff:new Audio(Ga),liftoff:new Audio(La)},this.addJs=()=>{super.addJs(),r.I.registerSingleton(c.Yv.SoundManager,this),d.keepTrackApi.register({method:"uiManagerInit",cbName:this.PLUGIN_NAME,cb:()=>{this.voices=speechSynthesis.getVoices()}})}}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter((function(e){return"Google UK English Female"==e.name}))[0],window.speechSynthesis.speak(t)}play(e){if(this.isMute)return;if((0,u.G)("loading-screen").classList.contains("fullscreen"))return;let t=1;switch(e){case"genericBeep":return t=Math.floor(3*Math.random())+1,void this.sounds[`genericBeep${t}`].play();case"whoosh":return t=Math.floor(8*Math.random())+1,void this.sounds[`whoosh${t}`].play();case"error":if(this.lastLongAudioTimne+12e5>Date.now())return;return this.lastLongAudioTimne=Date.now(),void this.sounds.error.play();default:return void this.sounds[e].play()}}}const Ha=new $a;var Ya=a(6339),ja=a(5661);const Va=a.p+"../img/about.png";class Ja extends ae.c{constructor(){super("About Menu"),this.bottomIconElementName="menu-about-icon",this.bottomIconImg=Va,this.bottomIconLabel="About Menu",this.sideMenuElementName="about-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
`,this.helpTitle="About Menu",this.helpBody=d.keepTrackApi.html`The About Menu is a place to find information about KeepTrack.
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
  `}}const Ka=new Ja,Wa=a.p+"../img/constellation.png";var Xa=a(2972);const qa=a.p+"../img/planetarium.png";class Za extends ae.c{constructor(){super("Astronomy"),this.bottomIconElementName="menu-planetarium",this.bottomIconLabel="Planetarium View",this.bottomIconImg=qa,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const{starManager:t}=d.keepTrackApi.programs,a=r.I.get(c.Yv.DrawManager),i=r.I.get(c.Yv.UiManager);if(this.isMenuButtonEnabled){if(!this.verifySensorSelected())return;ne.tE.cameraType=ne.iM.PLANETARIUM;try{(0,u.G)("cspocAllSensor").style.display="none",(0,u.G)("mwAllSensor").style.display="none",(0,u.G)("mdAllSensor").style.display="none",(0,u.G)("llAllSensor").style.display="none",(0,u.G)("rusAllSensor").style.display="none",(0,u.G)("prcAllSensor").style.display="none"}catch(e){}Xa.j.change("planetarium"),r.I.get(c.Yv.CatalogManager).isStarManagerLoaded&&t.clearConstellations(),null===(e=d.keepTrackApi.getPlugin(ei))||void 0===e||e.setBottomIconToUnselected()}else ne.tE.isPanReset=!0,ne.tE.isLocalRotateReset=!0,settingsManager.fieldOfView=.6,a.glInit(),i.hideSideMenus(),r.I.get(c.Yv.OrbitManager).clearInViewOrbit(),ne.tE.cameraType=ne.iM.DEFAULT}}addJs(){super.addJs(),d.keepTrackApi.register({method:"setSensor",cbName:this.PLUGIN_NAME,cb:e=>{e?((0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,u.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}const Qa=new Za;class ei extends ae.c{constructor(){super(ei.PLUGIN_NAME),this.bottomIconElementName="menu-astronomy",this.bottomIconLabel="Astronomy View",this.bottomIconImg=Wa,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const{starManager:t}=d.keepTrackApi.programs,a=d.keepTrackApi.getCatalogManager(),i=r.I.get(c.Yv.OrbitManager),s=r.I.get(c.Yv.DrawManager),n=r.I.get(c.Yv.UiManager);if(this.isMenuButtonEnabled){if(!this.verifySensorSelected())return;a.isStarManagerLoaded&&t.drawAllConstellations(),i.clearInViewOrbit(),ne.tE.cameraType=ne.iM.ASTRONOMY,Xa.j.change("astronomy"),null===(e=d.keepTrackApi.getPlugin(Za))||void 0===e||e.setBottomIconToUnselected()}else ne.tE.isPanReset=!0,ne.tE.isLocalRotateReset=!0,settingsManager.fieldOfView=.6,s.glInit(),n.hideSideMenus(),ne.tE.cameraType=ne.iM.DEFAULT,Xa.j.change("default"),a.isStarManagerLoaded&&t.clearConstellations(),(0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}}addJs(){super.addJs(),d.keepTrackApi.register({method:"setSensor",cbName:this.PLUGIN_NAME,cb:e=>{e?((0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,u.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}ei.PLUGIN_NAME="Astronomy";const ti=new ei,ai=a.p+"../img/breakup.png";var ii,si,ni=a(2575);!function(e){e[e.MeanAnomaly=1]="MeanAnomaly",e[e.RightAscensionOfAscendingNode=2]="RightAscensionOfAscendingNode",e[e.ArgumentOfPerigee=3]="ArgumentOfPerigee"}(ii||(ii={})),function(e){e[e.Near=0]="Near",e[e.Success=1]="Success",e[e.Error=2]="Error",e[e.Far=3]="Far"}(si||(si={}));class oi{constructor(e,t,a,i,s,n,o){this.sat=e,this.now=s,this.goalLat=t,this.goalLon=a,this.goalDirection=i,this.newMeana=null,this.newArgPer=null,this.goalAlt=n||null,this.raanOffset=o||0,this.lastLat=null,this.currentDirection=null,this.argPerCalcResults=null,this.meanACalcResults=null,this.raanCalcResults=null}rotateOrbitToLatLon(){return this.parseTle(),this.meanACalcResults=this.meanACalcLoop(this.meanACalcResults,this.now,this.goalDirection),this.meanACalcResults!==si.Success?["Error","Failed to find a solution for Mean Anomaly"]:this.goalAlt>0&&this.argPerCalcLoop()!==si.Success?["Error","Failed to find a solution for Argument of Perigee"]:(this.raanCalcResults=this.raanCalcLoop(this.raanCalcResults,this.raanOffset,this.now),this.raanCalcResults!==si.Success?["Error","Failed to find a solution for Right Ascension of Ascending Node"]:[this.sat.TLE1,this.sat.TLE2])}argPerCalcLoop(){this.meanACalcResults=si.Near;for(let e=0;e<3600;e+=1){let t=10*parseFloat(this.argPer)-100+e;if(t>3600&&(t-=3600),this.argPerCalcResults=this.argPerCalc(t.toString(),this.now),this.argPerCalcResults===si.Success&&this.meanACalcResults===si.Success&&this.currentDirection===this.goalDirection)break;if(this.argPerCalcResults===si.Far&&(e+=49),this.argPerCalcResults===si.Error)return si.Error;if(this.meanACalcResults=this.meanACalcLoop2(),this.meanACalcResults===si.Success)if(this.currentDirection!==this.goalDirection)e+=20;else if(this.argPerCalcResults===si.Success)break;if(e=this.meanACalcResults===si.Far?e+100:e,this.meanACalcResults===si.Error)return si.Error}return this.argPerCalcResults}meanACalcLoop2(){for(let e=0;e<5200;e+=1){if(this.meanACalcResults=this.meanACalc(e,this.now),this.meanACalcResults===si.Success){if(this.currentDirection===this.goalDirection)break;e+=20}if(e=this.meanACalcResults===si.Far?e+100:e,this.meanACalcResults===si.Error)return si.Error}return this.meanACalcResults}parseTle(){this.intl=this.sat.TLE1.substring(9,17),this.epochyr=this.sat.TLE1.substring(18,20),this.epochday=this.sat.TLE1.substring(20,32),this.meanmo=this.sat.TLE2.substring(52,63),this.argPer=ni.J.pad0((this.sat.argPe*v.I3).toFixed(4),8),this.inc=ni.J.pad0((this.sat.inclination*v.I3).toFixed(4),8),this.ecen=this.sat.eccentricity.toFixed(7).substring(2,9),this.TLE1Ending=this.sat.TLE1.substring(32,71)}meanACalcLoop(e,t,a){for(let i=0;i<5200;i+=1){if((e=this.meanACalc(i,t))===si.Success){if(this.currentDirection===a)break;i+=20}e===si.Far&&(i+=100)}return e}raanCalcLoop(e,t,a){for(let i=0;i<52e3&&(e=this.raanCalc(i,t,a))!==si.Success;i+=1)e===si.Far&&(i+=1e3);return e}meanACalc(e,t){const a=this.sat;let i=a.satrec||kt.Sgp4.createSatrec(a.TLE1,a.TLE2);e/=10;const s=ni.J.pad0(e.toFixed(4),8),n=ni.J.pad0((a.raan*v.I3).toFixed(4),8),o=this.newArgPer?ni.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):ni.J.pad0((a.argPe*v.I3).toFixed(4),8),l=a.TLE1.substr(32,39),r="1 "+a.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+l,c="2 "+a.sccNum+" "+this.inc+" "+n+" "+this.ecen+" "+o+" "+s+" "+this.meanmo+"    10";i=kt.Sgp4.createSatrec(r,c);const d=this.getOrbitByLatLonPropagate(t,i,ii.MeanAnomaly);return d===si.Success&&(a.TLE1=r,a.TLE2=c,this.newMeana=s),d}getOrbitByLatLonPropagate(e,t,a){const{m:i,gmst:s}=b.$.calculateTimeVariables(e,t),n=kt.Sgp4.propagate(t,i).position;if(isNaN(n.x)||isNaN(n.y)||isNaN(n.z))return si.Error;const o=kt.Transforms.eci2lla(n,s);let{lat:l,lon:r,alt:c}=o;const d=kt.Transforms.getDegLat(l),p=kt.Transforms.getDegLon(r);if(this.lastLat=this.lastLat?this.lastLat:d,a===ii.MeanAnomaly){if(d===this.lastLat)return 0;d>this.lastLat&&(this.currentDirection="N"),d<this.lastLat&&(this.currentDirection="S"),this.lastLat=d}return a===ii.MeanAnomaly&&d>this.goalLat-oi.MAX_LAT_ERROR&&d<this.goalLat+oi.MAX_LAT_ERROR||a===ii.RightAscensionOfAscendingNode&&p>this.goalLon-oi.MAX_LON_ERROR&&p<this.goalLon+oi.MAX_LON_ERROR||a===ii.ArgumentOfPerigee&&c>this.goalAlt-oi.MAX_ALT_ERROR&&c<this.goalAlt+oi.MAX_ALT_ERROR?si.Success:(a!==ii.MeanAnomaly||d>this.goalLat-11&&d<this.goalLat+11)&&(a!==ii.RightAscensionOfAscendingNode||p>this.goalLon-11&&p<this.goalLon+11)?a===ii.ArgumentOfPerigee&&(c<this.goalAlt-100||c>this.goalAlt+100)?si.Far:si.Near:si.Far}raanCalc(e,t,a){const i=e;e=(e/=100)>360?e-360:e;const s=ni.J.pad0(e.toFixed(4),8),n=this.newArgPer?ni.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):ni.J.pad0((this.sat.argPe*v.I3).toFixed(4),8),o="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,l="2 "+this.sat.sccNum+" "+this.inc+" "+s+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10",r=kt.Sgp4.createSatrec(o,l),c=this.getOrbitByLatLonPropagate(a,r,ii.RightAscensionOfAscendingNode);if(c===si.Success){e=(e=(e=i/100+t)>360?e-360:e)<0?e+360:e;const a=ni.J.pad0(e.toFixed(4),8),s="2 "+this.sat.sccNum+" "+this.inc+" "+a+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10";this.sat.TLE1=o,this.sat.TLE2=s}return c}argPerCalc(e,t){const a=this.newMeana,i=ni.J.pad0((this.sat.raan*v.I3).toFixed(4),8);e=ni.J.pad0((parseFloat(e)/10).toFixed(4),8);const s="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,n="2 "+this.sat.sccNum+" "+this.inc+" "+i+" "+this.ecen+" "+e+" "+a+" "+this.meanmo+"    10",o=kt.Sgp4.createSatrec(s,n),l=this.getOrbitByLatLonPropagate(t,o,ii.ArgumentOfPerigee);return l===si.Success&&(this.sat.TLE1=s,this.sat.TLE2=n,this.newArgPer=e),l}}oi.MAX_LAT_ERROR=.1,oi.MAX_LON_ERROR=.1,oi.MAX_ALT_ERROR=30;var li=a(266);class ri extends ae.c{constructor(){super(ri.PLUGIN_NAME),this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=ai,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=d.keepTrackApi.getCatalogManager().getSat(d.keepTrackApi.getCatalogManager().selectedSat,c.C_.EXTRA_ONLY);if((null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_)return y.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
  </div>`,this.helpTitle="Breakup Menu",this.helpBody=d.keepTrackApi.html`The Breakup Menu is a tool for simulating the breakup of a satellite.
  <br><br>
  By modifying duplicating and modifying a satellite's orbit we can model the breakup of a satellite.
  After selecting a satellite and opening the menu, the user can select:
  <ul style="margin-left: 40px;">
    <li>Inclination Variation</li>
    <li>RAAN Variation</li>
    <li>Period Variation</li>
    <li>Number of Breakup Pieces</li>
  </ul>
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`}updateSccNumInMenu_(){if(!this.isMenuButtonEnabled)return;const e=d.keepTrackApi.getCatalogManager().getSat(d.keepTrackApi.getCatalogManager().selectedSat,c.C_.EXTRA_ONLY);(0,u.G)("hc-scc").value=e.sccNum}addHtml(){super.addHtml(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,u.G)("breakup").addEventListener("submit",(e=>{e.preventDefault(),(0,m.QP)((()=>this.onSubmit()))}))}}),d.keepTrackApi.register({method:d.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.sccNum)?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonEnabled&&(this.closeSideMenu(),y.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&this.updateSccNumInMenu_()):(this.isMenuButtonEnabled&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}onSubmit(){const e=d.keepTrackApi.getTimeManager(),t=d.keepTrackApi.getCatalogManager();let a=t.getIdFromObjNum(parseInt((0,u.G)("hc-scc").value));const i=t.getSat(a),s=i,n=St.x.eci2lla(i.position,e.simulationTimeObj),o=n.lat,l=n.lon,p=e.simulationTimeObj,m=b.$.getDirection(i,e.simulationTimeObj);"Error"===m&&y.x.warn("Cannot calculate direction of satellite. Try again later.");const g=li.l.currentEpoch(p);if(i.TLE1=i.TLE1.substr(0,18)+g[0]+g[1]+i.TLE1.substr(32),ne.tE.isCamSnapMode=!1,i.apogee-i.perigee>this.maxDifApogeeVsPerigee_)return void y.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const h=i.apogee-i.perigee<300?0:n.alt;let v=new oi(i,o,l,m,p,h).rotateOrbitToLatLon();const f=v[0],k=v[1];t.satCruncher.postMessage({typ:"satEdit",id:a,TLE1:f,TLE2:k});const S=r.I.get(c.Yv.OrbitManager);S.changeOrbitBufferData(a,f,k);const M=parseFloat((0,u.G)("hc-per").value),A=parseFloat((0,u.G)("hc-inc").value),T=parseFloat((0,u.G)("hc-raan").value),w=parseInt((0,u.G)("hc-count").value),C=15e-5,x=i.eccentricity;let E=0;for(let r=0;r<=4&&!(E>=w);r++){a=t.getIdFromObjNum(9e4+E),t.getSat(a);let c=s;const d=-T/2+T*(r/4),u=i.apogee-i.perigee<300?0:n.alt;let g=new oi(c,o,l,m,p,u,d).rotateOrbitToLatLon();if("Error"===g[0]&&(g=new oi(c,o,l,m,new Date(p.getTime()+1),u,d).rotateOrbitToLatLon(),"Error"===g[0]))return void y.x.error(new Error(g[1]),"breakup.ts","Error creating breakup!");let h=g[0],v=g[1];for(;E<(r+1)*w/4;E++){let i=parseFloat(k.substr(8,8));i=i+Math.random()*A*2-A;const s=ni.J.pad0(i.toFixed(4),8);if(8!==s.length)throw new Error(`Inclination length is not 8 - ${s} - ${k}`);c.eccentricity=x,c.eccentricity+=Math.random()*C*2-C;let n=parseFloat(v.substr(52,10));n=n+Math.random()*M*2-M;const o=ni.J.pad0(n.toFixed(8),11);if(11!==o.length)throw new Error(`meanmo length is not 11 - ${o} - ${v}`);if(a=t.getIdFromObjNum(8e4+E),h=`1 ${8e4+E}`+h.substr(7),v=`2 ${8e4+E} ${s} ${v.substr(17,35)}${o}${v.substr(63)}`,69!==h.length)throw new Error(`Invalid TLE1: length is not 69 - ${h}`);if(69!==v.length)throw new Error(`Invalid TLE1: length is not 69 - ${v}`);let l;c=t.getSat(a),c.TLE1=h,c.TLE2=v,c.active=!0,c.satrec=null;try{l=kt.Sgp4.createSatrec(h,v)}catch(e){return void y.x.error(e,"breakup.ts","Error creating breakup!")}b.$.altitudeCheck(l,e.simulationTimeObj)>1?(t.satCruncher.postMessage({typ:"satEdit",id:a,TLE1:h,TLE2:v}),S.changeOrbitBufferData(a,h,v)):y.x.warn("Breakup Generator Failed")}}d.keepTrackApi.getUiManager().doSearch(`${i.sccNum},Analyst`)}}ri.PLUGIN_NAME="Breakup";const ci=new ri;class di{static getColors(e){let t,a;switch(e){case"Top Secret//SCI":t="#fce93a",a="black";break;case"Top Secret":t="#ff8c00",a="black";break;case"Secret":t="#ff0000",a="white";break;case"Confidential":t="#0033a0",a="white";break;case"CUI":t="#512b85",a="white";break;case"Unclassified":t="#007a33",a="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:a}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class pi extends ae.c{constructor(){super("Classification"),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateClassificationString(e=this.classificationString_,t="#ffffff",a="#000000"){this.isClassificationContainerLoaded_||this.loadClassificationContainer_(),""===e?((0,u.G)("classification-container").style.display="none",this.updateTopMenuHeight_(!1)):((0,u.G)("classification-container").style.display="flex",this.updateTopMenuHeight_(!0)),(0,u.G)("classification-string").innerHTML=e;const i=(0,u.G)("classification-container");if(i.style.fontWeight="500",di.isValidClassification(e)){const i=di.getColors(e);t=i.backgroundColor,a=i.color}i.style.backgroundColor=t,i.style.color=a,this.classificationString_=e}addHtml(){super.addHtml(),d.keepTrackApi.register({method:"uiManagerInit",cbName:this.PLUGIN_NAME,cb:this.uiManagerInit_.bind(this)})}loadClassificationContainer_(){const e=document.createElement("div");e.innerHTML=d.keepTrackApi.html`<span id="classification-string"></span>`,e.id="classification-container",e.style.cssText="\n      height: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      ",(0,u.G)("keeptrack-main-container").insertBefore(e,(0,u.G)("keeptrack-main-container").firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr&&(this.loadClassificationContainer_(),this.updateClassificationString())}updateTopMenuHeight_(e){if(this.isExpanded_===e)return;let t=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(t)&&(t=0),document.documentElement.style.setProperty("--top-menu-height",t+(e?20:-20)+"px"),this.isExpanded_=e}}const ui=new pi,mi=a.p+"../img/socrates.png";class gi extends ae.c{constructor(){super(gi.PLUGIN_NAME),this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=mi,this.bottomIconLabel="Collisions",this.sideMenuElementName="socrates-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
  <div id="socrates-menu" class="side-menu-parent start-hidden text-select">
    <div id="socrates-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible collisions</h5>
        <table id="socrates-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=d.keepTrackApi.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.socratesOnSatCruncher=null,this.collisionList=[],this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&this.parseCollisionData_()}}uiManagerFinal(){(0,u.G)("socrates-menu").addEventListener("click",(e=>{(0,m.QP)((()=>{const t=e.target.parentElement;if(!t.classList.contains("socrates-object"))return;const a=t.attributes.hiddenrow.value;null!==a&&this.eventClicked_(a)}))}))}addJs(){super.addJs(),d.keepTrackApi.register({method:"uiManagerFinal",cbName:"collisions",cb:this.uiManagerFinal.bind(this)}),d.keepTrackApi.register({method:"onCruncherMessage",cbName:"collisions",cb:()=>{null!==this.socratesOnSatCruncher&&(d.keepTrackApi.getCatalogManager().setSelectedSat(this.socratesOnSatCruncher),this.socratesOnSatCruncher=null)}})}parseCollisionData_(){0===this.collisionList.length&&fetch("./SOCRATES.html").then((e=>{e.text().then((e=>{const t=(new DOMParser).parseFromString(e,"text/html");this.processSocratesHtm(t),0===this.collisionList.length&&y.x.warn("No collisions data found!")}))}))}eventClicked_(e){const t=new Date;d.keepTrackApi.getTimeManager().changeStaticOffset(this.collisionList[e].toca.getTime()-t.getTime()-3e4),ne.tE.isCamSnapMode=!1,d.keepTrackApi.getUiManager().doSearch(`${this.collisionList[e].sat1},${this.collisionList[e].sat2}`);const a=r.I.get(c.Yv.CatalogManager);this.socratesOnSatCruncher=a.getIdFromObjNum(parseInt(this.collisionList[e].sat1))}processSocratesHtm(e){try{const t=e.getElementsByClassName("center outline")[0],a=Array.from(t.getElementsByTagName("tr")).filter((e=>!e.classList.contains("header"))),i=a.map((e=>Array.from(e.getElementsByTagName("td")))).map((e=>e.map((e=>e.innerText))));for(let e=0;e<i.length;e+=2){const t={sat1:i[e][1],sat2:i[e+1][1],toca:new Date(i[e][4]),minRng:parseFloat(i[e][5]),maxProb:parseFloat(i[e+1][5]),relSpeed:parseFloat(i[e][6])};this.collisionList.push(t)}const s=(0,u.G)("socrates-table");s.innerHTML="";let n=s.insertRow(),o=n.insertCell();o.appendChild(document.createTextNode("TOCA")),o.setAttribute("style","text-decoration: underline");let l=n.insertCell();l.appendChild(document.createTextNode("#1")),l.setAttribute("style","text-decoration: underline");let r=n.insertCell();r.appendChild(document.createTextNode("#2")),r.setAttribute("style","text-decoration: underline");let c=n.insertCell();c.appendChild(document.createTextNode("Probability")),c.setAttribute("style","text-decoration: underline");for(let e=0;e<this.collisionList.length;e++)n=s.insertRow(),n.setAttribute("class","socrates-object link"),n.setAttribute("hiddenrow",e.toString()),o=n.insertCell(),o.appendChild(document.createTextNode(this.collisionList[e].toca.toISOString().slice(0,19).replace("T"," "))),l=n.insertCell(),l.appendChild(document.createTextNode(this.collisionList[e].sat1)),r=n.insertCell(),r.appendChild(document.createTextNode(this.collisionList[e].sat2)),c=n.insertCell(),c.appendChild(document.createTextNode(this.collisionList[e].minRng.toString()))}catch(e){y.x.warn("Error parsing SOCRATES data!")}}}gi.PLUGIN_NAME="collisions";const hi=new gi,bi=a.p+"../img/colors.png";var vi=a(3825);class fi extends ae.c{constructor(){super(fi.PLUGIN_NAME),this.bottomIconImg=bi,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
  </div>`,this.helpTitle="Colors Menu",this.helpBody=d.keepTrackApi.html`The Colors Menu is a place to change the color theme used to render the objects.
<br><br>
The various themes can change the colors based on the objects' orbits, objects' characteristics, or the objects' relation to sun and/or earth.
`,this.rmbL1ElementName="colors-rmb",this.rmbL1Html=d.keepTrackApi.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Color Scheme &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.rmbMenuOrder=50,this.rmbL2ElementName="colors-rmb-menu",this.rmbL2Html=d.keepTrackApi.html`
  <ul class='dropdown-contents'>
    <li id="colors-default-rmb"><a href="#">Object Types</a></li>
    <li id="colors-rcs-rmb"><a href="#">Radar Cross Section</a></li>
    <li id="colors-density-rmb"><a href="#">Orbit Density</a></li>
    <li id="colors-sunlight-rmb"><a href="#">Sunlight Status</a></li>
    <li id="colors-country-rmb"><a href="#">Country</a></li>
    <li id="colors-velocity-rmb"><a href="#">Velocity</a></li>
    <li id="colors-ageOfElset-rmb"><a href="#">Age of Elset</a></li>
  </ul>`,this.rmbCallback=e=>{try{super.rmbCallback(e)}catch(e){}switch(e){case"colors-default-rmb":fi.colorsMenuClick("default");break;case"colors-rcs-rmb":fi.colorsMenuClick("rcs");break;case"colors-density-rmb":fi.colorsMenuClick("neighbors");break;case"colors-sunlight-rmb":fi.colorsMenuClick("sunlight");break;case"colors-country-rmb":fi.colorsMenuClick("countries");break;case"colors-velocity-rmb":fi.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":fi.colorsMenuClick("elset-age")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{document.getElementById("colors-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){const e=this.dataset.color;fi.colorsMenuClick(e)}))}))}})}}fi.PLUGIN_NAME="Color Menu",fi.colorsMenuClick=e=>{const t=d.keepTrackApi.getCatalogManager(),a=d.keepTrackApi.getColorSchemeManager(),i=d.keepTrackApi.getUiManager();switch(t.setSelectedSat(-1),"sunlight"!==e&&t.satCruncher.postMessage({isSunlightView:!1}),e){case"default":Xa.j.change("default"),a.setColorScheme(a.default,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"velocity":Xa.j.change("velocity"),a.setColorScheme(a.velocity,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"sunlight":t.satCruncher.postMessage({isSunlightView:!0}),Xa.j.change("sunlight"),i.colorSchemeChangeAlert(a.sunlight),(0,vi.J)(t.satCruncher,(()=>{a.setColorScheme(a.sunlight,!0)}),(e=>e.satInSun));break;case"near-earth":Xa.j.change("near"),a.setColorScheme(a.leo,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"deep-space":Xa.j.change("deep"),a.setColorScheme(a.geo,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"elset-age":(0,m.QP)((()=>{Xa.j.change("ageOfElset"),a.setColorScheme(a.ageOfElset,!0),i.colorSchemeChangeAlert(a.currentColorScheme)}));break;case"lost-objects":(0,u.G)("search").value="",(0,m.QP)((()=>{settingsManager.lostSatStr="",a.setColorScheme(a.lostobjects,!0),(0,u.G)("search").value=settingsManager.lostSatStr,i.colorSchemeChangeAlert(a.currentColorScheme),i.doSearch((0,u.G)("search").value)}));break;case"rcs":Xa.j.change("rcs"),a.setColorScheme(a.rcs,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"smallsats":Xa.j.change("small"),a.setColorScheme(a.smallsats,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"neighbors":Xa.j.change("neighbors"),a.setColorScheme(a.neighbors,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"countries":Xa.j.change("countries"),null!==d.keepTrackApi.getGroupsManager().selectedGroup?a.setColorScheme(a.groupCountries,!0):a.setColorScheme(a.countries,!0),i.colorSchemeChangeAlert(a.currentColorScheme)}d.keepTrackApi.getUiManager().hideSideMenus()};const ki=new fi;var Si=a(9522);class yi extends ae.c{constructor(){super("Debris Screening"),this.bottomIconCallback=()=>{if(this.verifySatelliteSelected()&&this.isMenuButtonEnabled){const e=r.I.get(c.Yv.CatalogManager),t=e.getSat(e.selectedSat,c.C_.EXTRA_ONLY);(0,u.G)(`${this.formPrefix_}-scc`).value=t.sccNum}},this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=Va,this.bottomIconLabel="Debris Screening",this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
`,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.helpTitle="Debris Screening",this.helpBody=d.keepTrackApi.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=d.keepTrackApi.html`<img src="${Va}" />
  `}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,u.G)(`${this.sideMenuElementName}-form`).addEventListener("submit",(e=>{e.preventDefault(),(0,m.QP)((()=>this.onFormSubmit()))})),(0,u.G)(`${this.sideMenuElementName}-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,m.QP)((()=>this.onVisClick()))})),(0,u.G)(`${this.sideMenuElementName}-clear-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,m.QP)((()=>yi.onClearVisClick()))}))}}),d.keepTrackApi.register({method:d.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled()}})}onVisClick(){const e=r.I.get(c.Yv.DrawManager),t=parseFloat((0,u.G)(`${this.formPrefix_}-u`).value),a=parseFloat((0,u.G)(`${this.formPrefix_}-v`).value),i=parseFloat((0,u.G)(`${this.formPrefix_}-w`).value);e.sceneManager.searchBox.setCubeSize(t,a,i)}static onClearVisClick(){r.I.get(c.Yv.DrawManager).sceneManager.searchBox.setCubeSize(0,0,0)}onFormSubmit(){const e=r.I.get(c.Yv.CatalogManager),t=r.I.get(c.Yv.UiManager),a=r.I.get(c.Yv.TimeManager);let i=e.getIdFromObjNum(parseInt((0,u.G)(`${this.formPrefix_}-scc`).value));const s=parseFloat((0,u.G)(`${this.formPrefix_}-u`).value),n=parseFloat((0,u.G)(`${this.formPrefix_}-v`).value),o=parseFloat((0,u.G)(`${this.formPrefix_}-w`).value),l=parseFloat((0,u.G)(`${this.formPrefix_}-time`).value),d=e.getSat(i,c.C_.SKIP_POS_VEL),p=e.satData.filter((e=>!(!e.satrec||e.perigee>d.apogee||d.perigee>e.apogee))).map((e=>e.id));let m=0,g=[];for(let t=0;t<60*l;t++){m=1e3*t*60;const i=a.getOffsetTimeObj(m),{m:l}=b.$.calculateTimeVariables(i,d.satrec),r=kt.Sgp4.propagate(d.satrec,l);for(let t=0;t<p.length;t++){const a=e.getSat(p[t],c.C_.SKIP_POS_VEL);if(!a||!a.satrec)continue;const{m:l}=b.$.calculateTimeVariables(i,a.satrec),d=kt.Sgp4.propagate(a.satrec,l);if(!d){p.splice(t,1);break}const u=St.x.sat2ric({position:r.position,velocity:r.velocity},{position:d.position,velocity:d.velocity});if(Math.abs(u.position[0])<s&&Math.abs(u.position[1])<n&&Math.abs(u.position[2])<o){console.log(`${a.sccNum} at ${new Date(i)}`),g.push(a.sccNum),p.splice(t,1);break}}}g=g.filter(((e,t,a)=>a.indexOf(e)===t));const h=g.join(",");h.replace(/,\s*$/u,""),t.doSearch(h)}}const Mi=new yi,Ai=a.p+"../img/gps.png";var Ti=a(4032),wi=a.n(Ti),Ci=a(2658);class xi{static calculateDops(e){let t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},a=e.length;if(a<4)return t;const i=wi().rep([a,4],0);for(let t=1;t<=a;t++){const{az:a,el:s}=e[t-1],n=[Math.cos(s*v.qW)*Math.sin(a*v.qW),Math.cos(s*v.qW)*Math.cos(a*v.qW),Math.sin(s*v.qW),1];wi().setBlock(i,[t-1,0],[t-1,3],[n])}const s=wi().dot(wi().transpose(i),i),n=wi().inv(s),o=Math.sqrt(n[0][0]+n[1][1]+n[2][2]),l=Math.sqrt(n[0][0]+n[1][1]),r=Math.sqrt(n[0][0]+n[1][1]+n[2][2]+n[3][3]),c=Math.sqrt(n[2][2]),d=Math.sqrt(n[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,a,i,s,n=10){if(void 0===a||void 0===i)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};let o=a*v.qW,l=i*v.qW;null!=s||(s=0);const{gmst:r}=b.$.calculateTimeVariables(e);let c=[];return t.forEach((e=>{const t=kt.Transforms.ecf2rae({lon:l,lat:o,alt:s},kt.Transforms.eci2ecf(e.position,r)),a={az:t.az*v.I3,el:t.el*v.I3};a.el>n&&c.push(a)})),xi.calculateDops(c)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");let t=(0,u.G)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let a=t.insertRow(),i=a.insertCell();i.appendChild(document.createTextNode("Time"));let s=a.insertCell();s.appendChild(document.createTextNode("HDOP"));let n=a.insertCell();n.appendChild(document.createTextNode("PDOP"));let o=a.insertCell();o.appendChild(document.createTextNode("GDOP"));for(let l of e)a=t.insertRow(),i=a.insertCell(),i.appendChild(document.createTextNode((0,Ci.v)(l.time,"isoDateTime",!0))),s=a.insertCell(),s.appendChild(document.createTextNode(l.dops.hdop)),n=a.insertCell(),n.appendChild(document.createTextNode(l.dops.pdop)),o=a.insertCell(),o.appendChild(document.createTextNode(l.dops.gdop))}static getDopsList(e,t,a,i,s,n){let o=[];for(let l=0;l<1440;l++){const r=e(60*l*v.s9);let c=xi.getDops(r,t,a,i,s,n);o.push({time:r,dops:c})}return o}}class Ei extends ae.c{constructor(){super(Ei.PLUGIN_NAME),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=Ai,this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&(0,m.QP)(Ei.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=d.keepTrackApi.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
    <br><br>
    HDOP is the Horizontal Dilution of Precision. It is a measure of the accuracy of the horizontal position.
    <br><br>
    PDOP is the Position Dilution of Precision. It is a measure of the accuracy of the position.
    <br><br>
    GDOP is the Geometric Dilution of Precision. It is a measure of the accuracy of the position.
  `,this.sideMenuElementName="dops-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
  </div>`,this.rmbL1ElementName="dops-rmb",this.rmbL1Html=d.keepTrackApi.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">DOPs &#x27A4;</a></li>
`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbL2ElementName="dops-rmb-menu",this.rmbL2Html=d.keepTrackApi.html`
  <ul class='dropdown-contents'>
    <li id="dops-curdops-rmb"><a href="#">Current GPS DOPs</a></li>
    <li id="dops-24dops-rmb"><a href="#">24 Hour GPS DOPs</a></li>
  </ul>
`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=d.keepTrackApi.getInputManager().Mouse.latLon;const a=d.keepTrackApi.getInputManager().Mouse.dragPosition;(void 0===e||isNaN(e.lat)||isNaN(e.lon))&&(console.debug("latLon undefined!"),e=St.x.eci2lla({x:a[0],y:a[1],z:a[2]},d.keepTrackApi.getTimeManager().simulationTimeObj));const i=Ei.getGpsSats(d.keepTrackApi.getCatalogManager(),d.keepTrackApi.getGroupsManager());var t=xi.getDops(d.keepTrackApi.getTimeManager().simulationTimeObj,i,e.lat,e.lon,0,settingsManager.gpsElevationMask);d.keepTrackApi.getUiManager().toast(`HDOP: ${t.hdop}<br/>VDOP: ${t.vdop}<br/>PDOP: ${t.pdop}<br/>GDOP: ${t.gdop}<br/>TDOP: ${t.tdop}`,"normal",!0);break}case"dops-24dops-rmb":{const e=d.keepTrackApi.getInputManager().Mouse.latLon;if(this.isMenuButtonEnabled){(0,m.QP)(Ei.updateSideMenu),this.setBottomIconToEnabled();break}(0,u.G)("dops-lat").value=e.lat.toFixed(3),(0,u.G)("dops-lon").value=e.lon.toFixed(3),(0,u.G)("dops-alt").value="0",(0,u.G)("dops-el").value=settingsManager.gpsElevationMask.toString(),d.keepTrackApi.methods.bottomMenuClick(this.bottomIconElementName)}}}}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,u.G)("dops-form").addEventListener("submit",(e=>{e.preventDefault(),Ei.updateSideMenu()}))}})}static updateSideMenu(){const e=r.I.get(c.Yv.GroupsManager),t=r.I.get(c.Yv.CatalogManager),a=r.I.get(c.Yv.TimeManager),i=parseFloat((0,u.G)("dops-lat").value),s=parseFloat((0,u.G)("dops-lon").value),n=parseFloat((0,u.G)("dops-alt").value),o=parseFloat((0,u.G)("dops-el").value);settingsManager.gpsElevationMask=o;const l=Ei.getGpsSats(t,e),d=xi.getDopsList((e=>a.getOffsetTimeObj(e)),l,i,s,n,o);xi.updateDopsTable(d)}static getGpsSats(e,t){var a,i;const s=null!==(a=(i=t.groupList).GPSGroup)&&void 0!==a?a:i.GPSGroup=t.createGroup(ee.Y.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),n=[];return s.objects.forEach((t=>{const a=e.getSat(t);n.push(a)})),n}}Ei.PLUGIN_NAME="DOPs Plugin";const Li=new Ei,Ii=a.p+"../img/edit.png";class Ni{static createTle(e){let{sat:t,inc:a,meanmo:i,rasc:s,argPe:n,meana:o,ecen:l,epochyr:r,epochday:c,intl:d,scc:p}=e;const u=ni.J.pad0(r,2),m=ni.J.pad0(parseFloat(c).toFixed(8),12),g=Ni.inclination(a),h=Ni.meanMotion(i),b=Ni.rightAscension(s),v=Ni.argumentOfPerigee(n),f=Ni.meanAnomaly(o),k=Ni.eccentricity(l);let S=t?t.TLE1.substring(32,71):" +.00000000 +00000+0 +00000-0 0  9990";return S=" "===S[1]?Ni.setCharAt(S,1,"+"):S,S=" "===S[12]?Ni.setCharAt(S,12,"+"):S,S=" "===S[21]?Ni.setCharAt(S,21,"+"):S,S=" "===S[32]?Ni.setCharAt(S,32,"0"):S,{TLE1:"1 "+p+"U "+d+" "+u+m+S,TLE2:"2 "+p+" "+g+" "+b+" "+k+" "+v+" "+f+" "+h+" 00010"}}static setCharAt(e,t,a){return t>e.length-1?e:`${e.substring(0,t)}${a}${e.substring(t+1)}`}static argumentOfPerigee(e){const t=parseFloat(e).toFixed(4),a=ni.J.pad0(t,8);if(8!==a.length)throw new Error("argPe length is not 8");return a}static eccentricity(e){let t=ni.J.trail0(e,9);if(t="."===t[1]?t.substring(2):t.substring(0,7),7!==t.length)throw new Error("ecen length is not 7");return t}static inclination(e){const t=parseFloat(e).toFixed(4),a=ni.J.pad0(t,8);if(8!==a.length)throw new Error("inc length is not 8");return a}static meanAnomaly(e){const t=parseFloat(e).toFixed(4),a=ni.J.pad0(t,8);if(8!==a.length)throw new Error("meana length is not 8");return a}static meanMotion(e){const t=parseFloat(e).toFixed(8),a=ni.J.pad0(t,11);if(11!==a.length)throw new Error("meanmo length is not 11");return a}static rightAscension(e){const t=parseFloat(e).toFixed(4),a=ni.J.pad0(t,8);if(8!==a.length)throw new Error("rasc length is not 8");return a}}class Gi extends ae.c{constructor(){super(Gi.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=d.keepTrackApi.html`The Edit Satellite Menu is used to edit the satellite data.
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
    </ul>`,this.sideMenuElementName="editSat-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
    <div id="editSat-menu" class="side-menu-parent start-hidden text-select">
      <div id="editSat-content" class="side-menu">
        <div class="row">
          <h5 class="center-align">Edit Satellite</h5>
          <form id="editSat">
            <div class="input-field col s12">
              <input disabled value="AAAAA" id="${Gi.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${Gi.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${Gi.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${Gi.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${Gi.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Gi.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${Gi.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Gi.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${Gi.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${Gi.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${Gi.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${Gi.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${Gi.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Gi.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${Gi.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Gi.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${Gi.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${Gi.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${Gi.elementPrefix}-per" class="active">Period</label>
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
        <div id="${Gi.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=Ii,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&Gi.populateSideMenu()},this.dragOptions={isDraggable:!0},this.rmbL1ElementName="edit-rmb",this.rmbL1Html=d.keepTrackApi.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Edit Sat &#x27A4;</a></li>`,this.rmbCallback=(e,t)=>{if(null==t)throw new Error("clickedSat is undefined");const a=r.I.get(c.Yv.UiManager);d.keepTrackApi.getCatalogManager().setSelectedSat(t),this.isMenuButtonEnabled||a.bottomIconPress({id:"menu-editSat"})},this.rmbL2ElementName="edit-rmb-menu",this.rmbL2Html=d.keepTrackApi.html`
    <ul class='dropdown-contents'>
      <li id="edit-sat-rmb"><a href="#">Edit Satellite</a></li>
      <li id="set-sec-sat-rmb"><a href="#">Set as Secondary Sat</a></li>
    </ul>`}addHtml(){super.addHtml(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:"editSat",cb:()=>{(0,u.G)("editSat-newTLE").addEventListener("click",Gi.editSatNewTleClick),(0,u.G)("editSat").addEventListener("submit",(function(e){e.preventDefault(),Gi.editSatSubmit()})),(0,u.G)(`${Gi.elementPrefix}-per`).addEventListener("change",(function(){const e=(0,u.G)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,u.G)("es-meanmo").value=t.toFixed(8)})),(0,u.G)(`${Gi.elementPrefix}-meanmo`).addEventListener("change",(function(){const e=(0,u.G)(`${Gi.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,u.G)(`${Gi.elementPrefix}-per`).value=t})),(0,u.G)("editSat-save").addEventListener("click",Gi.editSatSaveClick),(0,u.G)("editSat-open").addEventListener("click",(function(){(0,u.G)("editSat-file").click()})),(0,u.G)("editSat-file").addEventListener("change",(function(e){window.FileReader&&(Gi.doReaderActions(e),e.preventDefault())})),(0,u.G)(`${Gi.elementPrefix}-error`).addEventListener("click",(function(){(0,u.G)(`${Gi.elementPrefix}-error`).style.display="none"}))}})}static doReaderActions(e){try{const t=new FileReader;t.onload=Gi.readerOnLoad,t.readAsText(e.target.files[0])}catch(e){y.x.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad(e){if(2!==e.target.readyState)return;if(e.target.error)return void y.x.warn("Error while reading file!");const t=r.I.get(c.Yv.TimeManager),a=r.I.get(c.Yv.OrbitManager),i=r.I.get(c.Yv.UiManager),s=JSON.parse(e.target.result),n=parseInt(ni.J.pad0(s.TLE1.substr(2,5).trim(),5)),o=d.keepTrackApi.getCatalogManager().getIdFromObjNum(n),l=d.keepTrackApi.getCatalogManager().getSat(o,c.C_.EXTRA_ONLY);let p;try{p=kt.Sgp4.createSatrec(s.TLE1,s.TLE2)}catch(e){return void y.x.error(e,"edit-sat.ts","Error creating satellite record!")}b.$.altitudeCheck(p,t.simulationTimeObj)>1?(d.keepTrackApi.getCatalogManager().satCruncher.postMessage({typ:"satEdit",id:l.id,active:!0,TLE1:s.TLE1,TLE2:s.TLE2}),a.changeOrbitBufferData(l.id,s.TLE1,s.TLE2),l.active=!0):i.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static populateSideMenu(){const e=d.keepTrackApi.getCatalogManager().getSat(d.keepTrackApi.getCatalogManager().selectedSat,c.C_.EXTRA_ONLY);(0,u.G)(`${Gi.elementPrefix}-scc`).value=e.sccNum;const t=ni.J.pad0((e.inclination*v.I3).toFixed(4),8);(0,u.G)(`${Gi.elementPrefix}-inc`).value=ni.J.pad0(t,8),(0,u.G)(`${Gi.elementPrefix}-year`).value=e.TLE1.substr(18,2),(0,u.G)(`${Gi.elementPrefix}-day`).value=e.TLE1.substr(20,12),(0,u.G)(`${Gi.elementPrefix}-meanmo`).value=e.TLE2.substr(52,11),(0,u.G)(`${Gi.elementPrefix}-per`).value=(1440/parseFloat(e.TLE2.substr(52,11))).toFixed(4);const a=ni.J.pad0((e.raan*v.I3).toFixed(4),8);(0,u.G)(`${Gi.elementPrefix}-rasc`).value=ni.J.pad0(a,8),(0,u.G)(`${Gi.elementPrefix}-ecen`).value=e.eccentricity.toFixed(7).substr(2,7);const i=ni.J.pad0((e.argPe*v.I3).toFixed(4),8);(0,u.G)(`${Gi.elementPrefix}-argPe`).value=ni.J.pad0(i,8),(0,u.G)(`${Gi.elementPrefix}-meana`).value=e.TLE2.substr(43,8)}static editSatNewTleClick(){(0,m.QP)(Gi.editSatNewTleClickFadeIn)}static editSatNewTleClickFadeIn(){const e=r.I.get(c.Yv.TimeManager),t=r.I.get(c.Yv.UiManager);try{const a=d.keepTrackApi.getCatalogManager().getIdFromObjNum(parseInt((0,u.G)(`${Gi.elementPrefix}-scc`).value)),i=d.keepTrackApi.getCatalogManager().getSat(a),s=St.x.eci2lla(i.position,e.simulationTimeObj);let n=s.lon,o=s.lat,l=s.alt;const p=b.$.getDirection(i,e.simulationTimeObj);"Error"===p&&t.toast("Cannot calculate direction of satellite. Try again later.","caution");const m=e.simulationTimeObj,g=li.l.currentEpoch(m);let h;i.TLE1=i.TLE1.substr(0,18)+g[0]+g[1]+i.TLE1.substr(32),ne.tE.isCamSnapMode=!1,h=i.apogee-i.perigee<300?new oi(i,o,n,p,m).rotateOrbitToLatLon():new oi(i,o,n,p,m,l).rotateOrbitToLatLon();const f=h[0],k=h[1];if("Error"===f)return void t.toast(`${k}`,"critical",!0);d.keepTrackApi.getCatalogManager().satCruncher.postMessage({typ:"satEdit",id:a,TLE1:f,TLE2:k}),r.I.get(c.Yv.OrbitManager).changeOrbitBufferData(a,f,k);const S=d.keepTrackApi.getCatalogManager().getSat(d.keepTrackApi.getCatalogManager().selectedSat,c.C_.EXTRA_ONLY);(0,u.G)(`${Gi.elementPrefix}-scc`).value=S.sccNum;const y=ni.J.pad0((S.inclination*v.I3).toFixed(4),8);(0,u.G)(`${Gi.elementPrefix}-inc`).value=ni.J.pad0(y,8),(0,u.G)(`${Gi.elementPrefix}-year`).value=S.TLE1.substr(18,2),(0,u.G)(`${Gi.elementPrefix}-day`).value=S.TLE1.substr(20,12),(0,u.G)(`${Gi.elementPrefix}-meanmo`).value=S.TLE2.substr(52,11),(0,u.G)(`${Gi.elementPrefix}-per`).value=(1440/parseFloat(S.TLE2.substr(52,11))).toFixed(4);const M=ni.J.pad0((S.raan*v.I3).toFixed(4),8);(0,u.G)(`${Gi.elementPrefix}-rasc`).value=ni.J.pad0(M,8),(0,u.G)(`${Gi.elementPrefix}-ecen`).value=S.eccentricity.toFixed(7).substr(2,7);const A=ni.J.pad0((S.argPe*v.I3).toFixed(4),8);(0,u.G)(`${Gi.elementPrefix}-argPe`).value=ni.J.pad0(A,8),(0,u.G)(`${Gi.elementPrefix}-meana`).value=S.TLE2.substr(43,8)}catch(e){y.x.warn(e)}}static editSatSubmit(){const e=d.keepTrackApi.getCatalogManager(),t=r.I.get(c.Yv.TimeManager),a=r.I.get(c.Yv.UiManager);(0,u.G)(`${Gi.elementPrefix}-error`).style.display="none";const i=(0,u.G)(`${Gi.elementPrefix}-scc`).value,s=e.getIdFromObjNum(parseInt(i));null===s&&y.x.info("Not a Real Satellite");const n=e.getSat(s,c.C_.EXTRA_ONLY),o=n.TLE1.substr(9,8);let l=(0,u.G)(`${Gi.elementPrefix}-inc`).value,p=(0,u.G)(`${Gi.elementPrefix}-meanmo`).value,m=(0,u.G)(`${Gi.elementPrefix}-rasc`).value;const g=(0,u.G)(`${Gi.elementPrefix}-ecen`).value;let h=(0,u.G)(`${Gi.elementPrefix}-argPe`).value,v=(0,u.G)(`${Gi.elementPrefix}-meana`).value;const f=(0,u.G)(`${Gi.elementPrefix}-year`).value,k=(0,u.G)(`${Gi.elementPrefix}-day`).value,{TLE1:S,TLE2:M}=Ni.createTle({sat:n,inc:l,meanmo:p,rasc:m,argPe:h,meana:v,ecen:g,epochyr:f,epochday:k,intl:o,scc:i});let A;try{A=kt.Sgp4.createSatrec(S,M)}catch(e){return void y.x.error(e,"edit-sat.ts","Error creating satellite record!")}b.$.altitudeCheck(A,t.simulationTimeObj)>1?(e.satCruncher.postMessage({typ:"satEdit",id:s,active:!0,TLE1:S,TLE2:M}),r.I.get(c.Yv.OrbitManager).changeOrbitBufferData(s,S,M),n.active=!0,n.satrec=null):a.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static editSatSaveClick(e){const t=d.keepTrackApi.getCatalogManager();try{const e=(0,u.G)(`${Gi.elementPrefix}-scc`).value,a=t.getIdFromObjNum(parseInt(e)),i=t.getSat(a,c.C_.EXTRA_ONLY),s={TLE1:i.TLE1,TLE2:i.TLE2},n=JSON.stringify(s),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,S.saveAs)(o,e+".tle")}catch(e){}e.preventDefault()}}Gi.PLUGIN_NAME="Edit Sat",Gi.elementPrefix="es";const Pi=new Gi,Oi=a.p+"../img/find2.png";var Di=a(5561),Ri=a(5326);class Fi extends ae.c{static checkAz(e,t,a){return e.filter((e=>e.az>=t&&e.az<=a))}static checkEl(e,t,a){return e.filter((e=>e.el>=t&&e.el<=a))}static checkInview(e){const t=r.I.get(c.Yv.DotsManager);return e.filter((e=>1===t.inViewData[e.id]))}static checkObjtype(e,t){return e.filter((e=>e.type===t))}static checkRange(e,t,a){return e.filter((e=>e.rng>=t&&e.rng<=a))}static limitPossibles(e,t){const a=r.I.get(c.Yv.UiManager);return e.length>=t&&a.toast(`Too many results, limited to ${t}`,"serious"),e.slice(0,t)}static searchSats(e){let{az:t,el:a,rng:i,countryCode:s,inc:n,azMarg:o,elMarg:l,rngMarg:d,incMarg:p,period:m,periodMarg:g,rcs:h,rcsMarg:b,objType:v,raan:f,raanMarg:k,argPe:S,argPeMarg:y,bus:M,shape:A,payload:T}=e;const w=!isNaN(t)&&isFinite(t),C=!isNaN(a)&&isFinite(a),x=!isNaN(i)&&isFinite(i),E=!isNaN(n)&&isFinite(n),L=!isNaN(f)&&isFinite(f),I=!isNaN(S)&&isFinite(S),N=!isNaN(m)&&isFinite(m),G=!isNaN(h)&&isFinite(h),P="All"!==s,O="All"!==M,D="All"!==A,R="All"!==T;if(o=!isNaN(o)&&isFinite(o)?o:5,l=!isNaN(l)&&isFinite(l)?l:5,d=!isNaN(d)&&isFinite(d)?d:200,p=!isNaN(p)&&isFinite(p)?p:1,g=!isNaN(g)&&isFinite(g)?g:.5,b=!isNaN(b)&&isFinite(b)?b:h/10,k=!isNaN(k)&&isFinite(k)?k:1,y=!isNaN(y)&&isFinite(y)?y:1,!(C||x||w||E||N||G||I||L||P||O||D||R))throw new Error("No Search Criteria Entered");let F=r.I.get(c.Yv.CatalogManager).satData.filter((e=>!e.static&&!e.missile&&e.active)).map((e=>{var t;const a=r.I.get(c.Yv.SensorManager);if((null===(t=a.currentSensors)||void 0===t?void 0:t.length)>0){const t=Ri.J.getTearr(e,a.currentSensors);return Object.assign(Object.assign({},e),{az:t.az,el:t.el,rng:t.rng,inView:t.inView})}return e}));F=E||N||!(w||C||x)?F:Fi.checkInview(F),F=0!==v?Fi.checkObjtype(F,v):F,w&&(F=Fi.checkAz(F,t-o,t+o)),C&&(F=Fi.checkEl(F,a-l,a+l)),x&&(F=Fi.checkRange(F,i-d,i+d)),E&&(F=Fi.checkInc(F,n-p,n+p)),L&&(F=Fi.checkRaan(F,f-k,f+k)),I&&(F=Fi.checkArgPe(F,S-y,S+y)),N&&(F=Fi.checkPeriod(F,m-g,m+g)),G&&(F=Fi.checkRcs(F,h-b,h+b)),"All"!==s&&(F=F.filter((e=>s.split("|").includes(e.country)))),"All"!==M&&(F=F.filter((e=>e.bus===M))),"All"!==A&&(F=F.filter((e=>e.shape===A))),"All"!==T&&(F=F.filter((e=>{var t,a,i;return(null===(i=null===(a=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===a?void 0:a.split("-")[0])||void 0===i?void 0:i.replace(/[^a-zA-Z]/gu,""))===T}))),F=Fi.limitPossibles(F,settingsManager.searchLimit);let U="";return F.forEach(((e,t)=>{U+=t<F.length-1?`${e.sccNum},`:`${e.sccNum}`})),(0,u.G)("search").value=U,r.I.get(c.Yv.UiManager).doSearch((0,u.G)("search").value),F}findByLooksSubmit(){return e=this,t=void 0,i=function*(){const e=r.I.get(c.Yv.UiManager),t=parseFloat((0,u.G)("fbl-azimuth").value),a=parseFloat((0,u.G)("fbl-elevation").value),i=parseFloat((0,u.G)("fbl-range").value),s=parseFloat((0,u.G)("fbl-inc").value),n=parseFloat((0,u.G)("fbl-period").value),o=parseFloat((0,u.G)("fbl-rcs").value),l=parseFloat((0,u.G)("fbl-azimuth-margin").value),d=parseFloat((0,u.G)("fbl-elevation-margin").value),p=parseFloat((0,u.G)("fbl-range-margin").value),m=parseFloat((0,u.G)("fbl-inc-margin").value),g=parseFloat((0,u.G)("fbl-period-margin").value),h=parseFloat((0,u.G)("fbl-rcs-margin").value),b=parseInt((0,u.G)("fbl-type").value),v=parseFloat((0,u.G)("fbl-raan").value),f=parseFloat((0,u.G)("fbl-raan-margin").value),k=parseFloat((0,u.G)("fbl-argPe").value),S=parseFloat((0,u.G)("fbl-argPe-margin").value),y=(0,u.G)("fbl-country").value,M=(0,u.G)("fbl-bus").value,A=(0,u.G)("fbl-payload").value,T=(0,u.G)("fbl-shape").value;(0,u.G)("search").value="";try{const r={az:t,el:a,rng:i,inc:s,azMarg:l,elMarg:d,rngMarg:p,incMarg:m,period:n,periodMarg:g,rcs:o,rcsMarg:h,objType:b,raan:v,raanMarg:f,argPe:k,argPeMarg:S,countryCode:y,bus:M,payload:A,shape:T};this.lastResults=Fi.searchSats(r),0===this.lastResults.length&&e.toast("No Satellites Found","critical")}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered","critical")}},new((a=void 0)||(a=Promise))((function(s,n){function o(e){try{r(i.next(e))}catch(e){n(e)}}function l(e){try{r(i.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}r((i=i.apply(e,t||[])).next())}));var e,t,a,i}addJs(){super.addJs(),d.keepTrackApi.register({method:"uiManagerInit",cbName:"findSat",cb:()=>{(0,u.G)("fbl-error").addEventListener("click",(function(){(0,u.G)("fbl-error").style.display="none"}))}}),d.keepTrackApi.register({method:"uiManagerFinal",cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}constructor(){super(Fi.PLUGIN_NAME),this.lastResults=[],this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
  </div>`,this.bottomIconElementName="menu-find-sat",this.bottomIconImg=Oi,this.bottomIconLabel="Find Satellite",this.helpTitle="Find Satellite Menu",this.helpBody=d.keepTrackApi.html`The Find Satellite Menu is used for finding satellites by orbital parameters or satellite characteristics.
<br><br>
For most parameters, you type in the target value on the left and then a margin of error on the right.
For example, if you wanted to find all satellites in a 51-52 degree inclination, you can type 51.5 in the left box and 0.5 in the right box.
The search will then find all satellites within those inclinations and display them in the search bar.
`}printLastResults(){y.x.info(this.lastResults.map((e=>e.name)).join("\n"))}uiManagerFinal(){const e=r.I.get(c.Yv.CatalogManager);(0,u.G)("findByLooks-form").addEventListener("submit",(e=>{e.preventDefault(),(0,m.QP)((()=>{this.findByLooksSubmit(),(0,m.Zk)()}))})),(0,f.d)(e.satData.filter((e=>e.bus)).map((e=>e.bus))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,u.G)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})),Di.hA.forEach((e=>{(0,u.G)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${Di.cs[e]}">${e}</option>`)})),(0,f.d)(e.satData.filter((e=>e.shape)).map((e=>e.shape))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,u.G)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}));const t=e.satData.filter((e=>e.payload)).map((e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,""))).filter((e=>e.length>=3));(0,f.d)(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{""!==e&&e.length>3&&(0,u.G)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}))}static checkArgPe(e,t,a){return e.filter((e=>e.argPe*v.I3<a&&e.argPe*v.I3>t))}static checkInc(e,t,a){return e.filter((e=>e.inclination*v.I3<a&&e.inclination*v.I3>t))}static checkPeriod(e,t,a){return e.filter((e=>e.period>t&&e.period<a))}static checkRaan(e,t,a){return e.filter((e=>e.raan*v.I3<a&&e.raan*v.I3>t))}static checkRcs(e,t,a){return e.filter((e=>parseFloat(e.R)>t&&parseFloat(e.R)<a))}}Fi.PLUGIN_NAME="findSat";const Ui=new Fi;var _i=a(5999);const Bi=a.p+"../img/calendar.png";class zi extends ae.c{constructor(){super("Launch Menu"),this.bottomIconElementName="menu-launches",this.bottomIconImg=Bi,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonEnabled){settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3);const e=(new Date).getFullYear();(0,_i.Us)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonEnabled&&(this.isMenuButtonEnabled=!1,(0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const $i=new zi,Hi=a.p+"../img/rocket.png";class Yi extends ae.c{constructor(){super(Yi.PLUGIN_NAME),this.bottomIconCallback=()=>{if(!this.isMenuButtonEnabled)return;if(!this.verifySatelliteSelected())return;const e=d.keepTrackApi.getCatalogManager().getSat(d.keepTrackApi.getCatalogManager().selectedSat,c.C_.EXTRA_ONLY);(0,u.G)("nl-scc").value=e.sccNum,(0,u.G)("nl-inc").value=ni.J.pad0((e.inclination*v.I3).toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=Hi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
  `,this.helpTitle="New Launch Menu",this.helpBody=d.keepTrackApi.html`The New Launch Menu is used for generating notional orbital launches by modifying existing satellites with similar parameters.
    <br><br>
    After selecting a satellite, you can select a launch location and a north/south azimuth.
    The selected satellite will be modified to align it with the launch site.
    The clock is then changed to 00:00:00 to represent relative time after the launch.
    This can be helpful in calculating sensor coverage relative to launch time.
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=d.keepTrackApi.getTimeManager(),a=d.keepTrackApi.getCatalogManager(),i=d.keepTrackApi.getUiManager(),s=d.keepTrackApi.getColorSchemeManager();(0,m.wU)();const n=(0,u.G)("nl-scc").value,o=a.getIdFromObjNum(parseInt(n));let l=a.getSat(o);const p=(0,u.G)("nl-updown").value,g=(0,u.G)("nl-facility").value;let h,v;if(!a.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in a.launchSites)a.launchSites[e].name===g&&(h=a.launchSites[e].lat,v=a.launchSites[e].lon);v>180&&(v-=360);const f=new Date,k=new Date(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate(),0,0,0);k.setUTCHours(0),t.changeStaticOffset(k.getTime()-f.getTime()),i.toast("Time is now relative to launch time.","standby"),null===(e=d.keepTrackApi.getSoundManager())||void 0===e||e.play("liftoff"),s.setColorScheme(settingsManager.currentColorScheme,!0),ne.tE.isCamSnapMode=!1;const S=t.simulationTimeObj,M=new oi(l,h,v,p,S).rotateOrbitToLatLon(),A=M[0],T=M[1];if(69!==A.length)return void i.toast(`Invalid TLE1: length is not 69 - ${A}`,"critical");if(69!==T.length)return void i.toast(`Invalid TLE2: length is not 69 - ${A}`,"critical");let w;l.satrec=null;try{w=kt.Sgp4.createSatrec(A,T)}catch(e){return void y.x.error(e,"new-launch.ts","Error creating satellite record!")}b.$.altitudeCheck(w,S)>1?(a.satCruncher.postMessage({typ:"satEdit",id:o,active:!0,TLE1:A,TLE2:T}),r.I.get(c.Yv.OrbitManager).changeOrbitBufferData(o,A,T)):i.toast("Failed Altitude Test - Try a Different Satellite!","critical"),(0,vi.J)(a.satCruncher,(()=>{this.isDoingCalculations=!1,(0,m.Zk)()}),(e=>void 0!==e.satPos))}}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,u.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}Yi.PLUGIN_NAME="New Launch";const ji=new Yi,Vi=a.p+"../img/calendar2.png",Ji=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown";class Ki extends ae.c{constructor(){super(Ki.PLUGIN_NAME),this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&("localhost"===window.location.hostname&&d.keepTrackApi.getUiManager().toast("This feature is a static table when in offline mode.","caution"),this.showTable())},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=Vi,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=d.keepTrackApi.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),a.e(478).then(a.bind(a,6128)).then((e=>e))}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,u.G)("export-launch-info").addEventListener("click",(()=>{(0,k.Eb)(this.launchList,"launchList")}))}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then((e=>e.json())).then((e=>this.processData(e))).catch((()=>y.x.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`))).finally((()=>{const e=(0,u.G)("nextLaunch-table");e&&""==e.innerHTML&&(Ki.initTable(e,this.launchList),(0,u.G)("nextLaunch-table").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(0,_i.Us)(e.href)}))})))}))}}processData(e){var t,a,i,s,n,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(a=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===a?void 0:a.name.split(",",1)[0],c.locationURL=null===(i=r.pad)||void 0===i?void 0:i.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(s=r.rocket)||void 0===s?void 0:s.configuration.full_name,c.rocketConfig=null===(n=r.rocket)||void 0===n?void 0:n.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),a=t.insertCell();a.appendChild(document.createTextNode("Launch Window")),a.setAttribute("style","text-decoration: underline; width: 120px;");const i=t.insertCell();i.appendChild(document.createTextNode("Mission")),i.setAttribute("style","text-decoration: underline; width: 140px;");const s=t.insertCell();s.appendChild(document.createTextNode("Location")),s.setAttribute("style","text-decoration: underline");const n=t.insertCell();n.appendChild(document.createTextNode("Agency")),n.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var a,i,s,n,o,l;Ki.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),p=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":(0,Ci.v)(t[r].windowStart,"isoDateTime",!0)+" UTC";d.appendChild(document.createTextNode(p));const u=c.insertCell(),m=(null===(a=t[r])||void 0===a?void 0:a.missionName)||"Unknown",g=(null===(i=t[r])||void 0===i?void 0:i.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${Ji(m,15)}</a>`:`${Ji(m,15)}`,h=(null===(s=t[r])||void 0===s?void 0:s.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;u.innerHTML=`${g}<br />${h}`;const b=(null===(n=t[r])||void 0===n?void 0:n.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${Ji(t[r].location,25)}</a>`:`${Ji(t[r].location,25)}`;c.insertCell().innerHTML=b;const v=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${Ji(t[r].agency,30)}</a>`:`${Ji(t[r].agency,30)}`;c.insertCell().innerHTML=v,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}Ki.PLUGIN_NAME="Next Launches";const Wi=new Ki,Xi=a.p+"../img/day-night.png";class qi extends ae.c{constructor(){super("Night Toggle"),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=Xi}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.nightToggle,cbName:this.PLUGIN_NAME,cb:(e,t,a)=>{this.isMenuButtonEnabled?e.bindTexture(e.TEXTURE_2D,a):e.bindTexture(e.TEXTURE_2D,t)}})}}const Zi=new qi;var Qi=a(8028),es=a(5704);class ts extends ae.c{constructor(){super(ts.PLUGIN_NAME),this.doOnce=!1,this.isReferenceSatsActive=!1,this.dependencies=[Qi.H.PLUGIN_NAME,es.P.PLUGIN_NAME]}addHtml(){super.addHtml(),d.keepTrackApi.register({method:"selectSatData",cbName:"orbitReferences",cb:e=>{null!=e&&(this.doOnce||((0,u.G)("sat-info-top-links").insertAdjacentHTML("beforeend",d.keepTrackApi.html`
                <div id="orbit-references-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,u.G)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0))}})}orbitReferencesLinkClick(){const e=r.I.get(c.Yv.CatalogManager),t=e.getSat(e.selectedSat);let a=e.analSatSet[0].id+2e4,i="";const s=kt.Sgp4.createSatrec(t.TLE1,t.TLE2),n=s.ecco.toFixed(7).substr(2,7),o=(s.nodeo*v.I3).toString(),l=(s.argpo*v.I3).toString(),d=t.TLE2.substr(8,8),p=t.TLE2.substr(52,10),u=t.TLE1.substr(18,2),m=t.TLE1.substr(20,12),g=t.TLE1.substr(9,8),h=ni.J.pad0(t.TLE1.substr(2,5).trim(),5),b=1440/parseFloat(p);let f=0;for(let s=0;s<360;s++){const r=ni.J.pad0(f.toFixed(4),8),{TLE1:c,TLE2:v}=Ni.createTle({sat:t,inc:d,meanmo:p,rasc:o,argPe:l,meana:r,ecen:n,epochyr:u,epochday:m,intl:g,scc:h});if(i+=e.insertNewAnalystSatellite(c,v,a+s,(1e5+s).toString()).sccNum.toString()+",",f+=360/b*4,f>=360)break}i=i.substr(0,i.length-1),r.I.get(c.Yv.UiManager).doSearch(i),this.isReferenceSatsActive=!0}}ts.PLUGIN_NAME="Orbit References";const as=new ts,is=a.p+"../img/satchng.png";var ss=a(6393),ns=a(7727);class os extends ae.c{constructor(){super(os.PLUGIN_NAME),this.bottomIconImg=is,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
  </div>`,this.helpTitle="Constellations Menu",this.helpBody=d.keepTrackApi.html`The Constellations menu allows you to view groups of satellites.
  <br><br>
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),d.keepTrackApi.register({method:"uiManagerFinal",cbName:"constellations",cb:()=>{(0,u.G)("constellation-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(e){os.constellationMenuClick(e.target.dataset.group)}))}))}})}static constellationMenuClick(e){const t=d.keepTrackApi.getTimeManager(),a=d.keepTrackApi.getCatalogManager(),i=d.keepTrackApi.getGroupsManager();if(void 0!==i){switch(e){case"SpaceStations":i.groupList[e]||i.createGroup(ee.Y.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":i.groupList[e]||i.createGroup(ee.Y.NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":i.groupList[e]||i.createGroup(ee.Y.NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":i.groupList[e]||i.createGroup(ee.Y.NAME_REGEX,/NAVSTAR/u,e);break;case"AmatuerRadio":i.groupList[e]||i.createGroup(ee.Y.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":i.groupList[e]||i.createGroup(ee.Y.SCC_NUM,a.id2satnum(a.satLinkManager.aehf),e),(0,m.QP)((()=>{ns.B.clear(),a.satLinkManager.showLinks(ns.B,ss.W6.Aehf,t)}));break;case"wgs":i.groupList[e]||i.createGroup(ee.Y.SCC_NUM,a.id2satnum(a.satLinkManager.wgs.concat(a.satLinkManager.dscs)),e),(0,m.QP)((()=>{ns.B.clear(),a.satLinkManager.showLinks(ns.B,ss.W6.Wgs,t)}));break;case"starlink":i.groupList[e]||i.createGroup(ee.Y.NAME_REGEX,/STARLINK/u,e),(0,m.QP)((()=>{ns.B.clear(),a.satLinkManager.showLinks(ns.B,ss.W6.Starlink,t)}));break;case"sbirs":i.groupList[e]||i.createGroup(ee.Y.SCC_NUM,a.id2satnum(a.satLinkManager.sbirs),e),(0,m.QP)((()=>{ns.B.clear(),a.satLinkManager.showLinks(ns.B,ss.W6.Sbirs,t)}));break;default:throw new Error("Unknown group name: "+e)}os.groupSelected(e)}}static groupSelected(e){if(void 0===e)return;const t=d.keepTrackApi.getCatalogManager(),a=d.keepTrackApi.getGroupsManager();if(void 0===a.groupList[e])throw new Error("Unknown group name: "+e);const i=(0,u.G)("search");a.selectGroup(a.groupList[e]),i.innerHTML=a.groupList[e].objects.reduce(((e,a)=>`${e}${t.getSat(a).sccNum},`),"").slice(0,-1),t.setSelectedSat(-1);const s=d.keepTrackApi.getUiManager();s.searchManager.doSearch(a.groupList[e].objects.map((e=>t.getSat(e).sccNum)).join(",")),settingsManager.isMobileModeEnabled&&s.searchManager.searchToggle(!0),s.hideSideMenus()}}os.PLUGIN_NAME="Sat Constellations";const ls=new os,rs=a.p+"../img/sat2.png";class cs extends ae.c{constructor(){super("Satellite Field of View"),this.bottomIconCallback=()=>{this.isMenuButtonEnabled?(this.enableFovView_(),settingsManager.isSatOverflyModeOn=!0):(this.disableFovView_(),settingsManager.isSatOverflyModeOn=!1)},this.isRequireSatelliteSelected=!0,this.bottomIconElementName="menu-sat-fov",this.bottomIconLabel="Satellite FOV",this.bottomIconImg=rs,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.changeSensorMarkers,cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}})}disableFovView_(){const e=r.I.get(c.Yv.CatalogManager);settingsManager.isSatOverflyModeOn=!1,this.setBottomIconToUnselected(),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}static getSatFieldOfView_(){const e=(0,u.G)("satFieldOfView",!0);if(!e)return 30;if(""===e.value)return y.x.warn("No Satellite FOV value entered. Using default value of 30 degrees."),30;const t=parseFloat(e.value);return isNaN(t)||t<0||t>180?(y.x.warn("Invalid Satellite FOV value. Using default value of 30 degrees."),30):t}enableFovView_(){const e=r.I.get(c.Yv.CatalogManager),t=r.I.get(c.Yv.UiManager),a=r.I.get(c.Yv.ColorSchemeManager);d.keepTrackApi.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isShowSurvFence=!1,settingsManager.isFOVBubbleModeOn=!1,settingsManager.isSatOverflyModeOn=!0,this.setBottomIconToSelected(),""!==(0,u.G)("search").value&&t.doSearch((0,u.G)("search").value);const i=cs.getSatFieldOfView_();e.satCruncher.postMessage({isShowFOVBubble:"reset",isShowSurvFence:"disable"}),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"enable",selectedSatFOV:i}),a.setColorScheme(settingsManager.currentColorScheme,!0)}}const ds=new cs,ps=a.p+"../img/photoManager.png";class us extends ae.c{constructor(){super(us.PLUGIN_NAME),this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="SatellitePhotos",this.bottomIconImg=ps,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
  </div>`,this.helpTitle="Satellite Photos Menu",this.helpBody=d.keepTrackApi.html`The Satellite Photos Menu is used for displaying live photos from select satellites.
  <br><br>
  Note - changes in the image API may cause the wrong satellite to be selected in KeepTrack.`}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,u.G)("meteosat8-link").addEventListener("click",(()=>{us.loadPic(10489,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")})),(0,u.G)("meteosat11-link").addEventListener("click",(()=>{us.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")})),(0,u.G)("himawari8-link").addEventListener("click",(()=>{us.himawari8()})),(0,u.G)("discovr-link").addEventListener("click",(()=>{us.discovr()})),(0,u.G)("goes1-link").addEventListener("click",(()=>{us.loadPic(8366,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")}))}})}static discovr(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{us.dscovrLoaded(e)},e.onerror=function(){console.debug("https://epic.gsfc.nasa.gov/ request failed!")},d.keepTrackApi.getCatalogManager().selectSat(-1),e.send()}static dscovrLoaded(e){if(e.status>=200&&e.status<400){const t=JSON.parse(e.response),a=t[0].image,i=t[0].identifier,s=i.slice(0,4),n=i.slice(4,6),o=i.slice(6,8),l=i.slice(8,10),r=i.slice(10,12),c=i.slice(12,14),d=new Date(Date.UTC(s,n-1,o,l-4,r,c));ne.tE.camSnap((0,ft.Lx)(t[0].centroid_coordinates.lat),(0,ft.Zs)(t[0].centroid_coordinates.lon,d)),ne.tE.changeZoom(.7),us.colorbox(`https://epic.gsfc.nasa.gov/archive/natural/${s}/${n}/${o}/png/${a}.png`)}}static loadPic(e,t){d.keepTrackApi.getCatalogManager().selectSat(d.keepTrackApi.getCatalogManager().getSatFromObjNum(e).id),ne.tE.changeZoom(.7),us.colorbox(t)}static himawari8(){d.keepTrackApi.getCatalogManager().selectSat(d.keepTrackApi.getCatalogManager().getSatFromObjNum(40267).id),ne.tE.changeZoom(.7);let e=d.keepTrackApi.getTimeManager().simulationTimeObj;e.getTime()<Date.now()?e=new Date(e.getTime()-18e5):(r.I.get(c.Yv.UiManager).toast("Can't load pictures from the future. Loading most recent photos.","caution"),e=new Date(Date.now()-18e5));const t=e.getUTCFullYear(),a=(e.getUTCMonth()+1).toString().padStart(2,"0"),i=e.getUTCDate().toString().padStart(2,"0"),s=e.getUTCHours().toString().padStart(2,"0"),n=(10*Math.floor(e.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,_i.Us)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${t}/${a}/${i}/${s}${n}00_0_0.png`,{image:!0})}}us.PLUGIN_NAME="Satellite Photos",us.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,_i.Us)(e,{image:!0})};const ms=new us,gs=a.p+"../img/video.png";class hs{constructor(e,t,a,i){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=a,this.onError_=i}static handleError(e){e.message.includes("Permission denied")?y.x.warn('Permission denied! Did you click "Share"?'):y.x.warn("Error:"+e)}getStream(e){return t=this,a=void 0,s=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch((e=>(hs.handleError(e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch((e=>(hs.handleError(e),null))):(y.x.warn("Compatibility Error with Recording"),this.onError_(),!1):(y.x.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((i=void 0)||(i=Promise))((function(e,n){function o(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof i?a:new i((function(e){e(a)}))).then(o,l)}r((s=s.apply(t,a||[])).next())}));var t,a,i,s}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(y.x.debug("Recorder stopped."),this.stream_.getTracks().forEach((e=>e.stop())),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,a=new Blob(this.recordedBlobs,{type:this.supportedType}),i=window.URL.createObjectURL(a),s=document.createElement("a");s.style.display="none",s.href=i,s.download=t,document.body.appendChild(s),s.click(),setTimeout((()=>{document.body.removeChild(s),window.URL.revokeObjectURL(i)}),100)}start(){this.getStream().then((e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;let t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(let e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&y.x.debug("No supported type found for MediaRecorder");let a={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||hs.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,a)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}y.x.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${a}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),y.x.debug(`Created MediaRecorder ${this.mediaRecorder_}`)})).catch((()=>{}))}}hs.BIT_RATE_30_MBPS=3e7,hs.BIT_RATE_20_MBPS=2e7,hs.BIT_RATE_10_MBPS=1e7,hs.BIT_RATE_5_MBPS=5e6,hs.BIT_RATE_2_MBPS=2e6,hs.BIT_RATE_1_MBPS=1e6;class bs extends ae.c{constructor(){super("Screen Recorder"),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return y.x.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){y.x.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=gs,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.uiManagerOnReady,cbName:this.PLUGIN_NAME,cb:()=>{try{this.streamManagerInstance=new hs(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save(bs.FILE_NAME),this.setBottomIconToUnselected()}}bs.FILE_NAME="keeptrack.webm";const vs=new bs,fs=a.p+"../img/camera.png";class ks extends ae.c{constructor(){super("Screenshot"),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=fs,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.rmbL1ElementName="save-rmb",this.rmbL1Html=d.keepTrackApi.html`
    <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Save Image &#x27A4;</a></li>
  `,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.isRmbOnSat=!0,this.rmbL2ElementName="save-rmb-menu",this.rmbL2Html=d.keepTrackApi.html`
    <ul class='dropdown-contents'>
      <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
      <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
      <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
    </ul>
  `,this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.altCanvasResize,cbName:this.PLUGIN_NAME,cb:()=>this.queuedScreenshot_}),d.keepTrackApi.register({method:d.M8.endOfDraw,cbName:this.PLUGIN_NAME,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){let e=document.createElement("a");e.download="keeptrack.png";let t=(new Date).getUTCFullYear(),a=settingsManager.copyrightOveride?"":`©${t} KEEPTRACK.SPACE`;e.href=ks.watermarkedDataUrl(a),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=r.I.get(c.Yv.DrawManager).canvas,a=document.createElement("canvas"),i=a.getContext("2d");let s=a.width=t.width,n=a.height=t.height;i.drawImage(t,0,0),i.font="24px nasalization";let o=i.measureText(e).width;i.globalAlpha=1,i.fillStyle="white",i.fillText(e,s-o-30,n-30);const{classificationstr:l,classificationColor:d}=ks.calculateClassificationText();""!==l&&(i.font="24px nasalization",i.globalAlpha=1,i.fillStyle=d,o=i.measureText(l).width,i.fillText(l,s/2-o,n-20),i.fillText(l,s/2-o,34)),document.body.appendChild(a);let p=a.toDataURL();return a.parentNode.removeChild(a),p}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:di.getColors(settingsManager.classificationStr).backgroundColor}}}const Ss=new ks,ys=a.p+"../img/fov.png";class Ms extends ae.c{constructor(){super("Sensor Field of View"),this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&this.verifySensorSelected()&&(settingsManager.isFOVBubbleModeOn&&!settingsManager.isShowSurvFence?this.disableFovView_():settingsManager.isFOVBubbleModeOn||this.enableFovView())},this.bottomIconElementName="menu-sensor-fov",this.bottomIconLabel="Sensor FOV",this.bottomIconImg=ys,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0}addJs(){super.addJs(),d.keepTrackApi.register({method:"setSensor",cbName:this.PLUGIN_NAME,cb:e=>{e?((0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,u.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}}),d.keepTrackApi.register({method:"changeSensorMarkers",cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}})}disableFovView_(){const e=r.I.get(c.Yv.CatalogManager);settingsManager.isFOVBubbleModeOn=!1,this.setBottomIconToUnselected(),e.satCruncher.postMessage({isShowFOVBubble:"reset",isShowSurvFence:"disable"})}enableFovView(){const e=r.I.get(c.Yv.CatalogManager);d.keepTrackApi.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isFOVBubbleModeOn=!0,settingsManager.isSatOverflyModeOn=!1,settingsManager.isShowSurvFence=!1,this.setBottomIconToSelected(),e.satCruncher.postMessage({isShowFOVBubble:"enable",isShowSurvFence:"disable"}),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}}const As=new Ms,Ts=a.p+"../img/fence.png";class ws extends ae.c{constructor(){super(ws.PLUGIN_NAME),this.bottomIconCallback=()=>{if(!this.isMenuButtonEnabled)return;const e=d.keepTrackApi.getCatalogManager();settingsManager.isShowSurvFence?this.disableSurvView_(e):this.enableSurvView_(e)},this.bottomIconElementName="menu-sensor-surv-fence",this.bottomIconLabel="Sensor Fence",this.bottomIconImg=Ts,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.isRequireSensorSelected=!0,settingsManager.isShowSurvFence=!1}disableSurvView_(e){settingsManager.isShowSurvFence=!1,(0,u.G)(this.bottomIconElementName).classList.remove(ae.c.iconSelectedClassString),e.satCruncher.postMessage({isShowSurvFence:"disable",isShowFOVBubble:"reset"})}enableSurvView_(e){d.keepTrackApi.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isShowSurvFence=!0,settingsManager.isSatOverflyModeOn=!1,(0,u.G)(this.bottomIconElementName).classList.add(ae.c.iconSelectedClassString),e.satCruncher.postMessage({isShowFOVBubble:"enable",isShowSurvFence:"enable"}),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,u.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}}),d.keepTrackApi.register({method:"changeSensorMarkers",cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,u.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}})}}ws.PLUGIN_NAME="Sensor Surveillance Fence";const Cs=new ws,xs=a.p+"../img/custom.png";var Es=a(3301);class Ls{static updateSensorPosition(e){const t=r.I.get(c.Yv.TimeManager),a=r.I.get(c.Yv.CatalogManager),i=r.I.get(c.Yv.SensorManager),{lon:s,lat:n,alt:o,minaz:l,maxaz:d,minel:p,maxel:u,minrange:m,maxrange:g}=Ls.updateSettingsManager(e);i.whichRadar="CUSTOM",Ls.updateCustomSensorUi_();const h={lat:n,lon:s,alt:o,obsminaz:l,obsmaxaz:d,obsminel:p,obsmaxel:u,obsminrange:m,obsmaxrange:g};a.satCruncher.postMessage({typ:"sensor",setlatlong:!0,sensor:h}),Es.E.updateSensorUiStyling([h]),a.setSelectedSat(-1),g>6e3?ne.tE.changeZoom("geo"):ne.tE.changeZoom("leo"),ne.tE.camSnap((0,ft.Lx)(n),(0,ft.Zs)(s,t.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(Ls.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,u.G)("cs-lat"),t=(0,u.G)("cs-lon"),a=(0,u.G)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),a.value=settingsManager.geolocation.alt.toString(),a.dispatchEvent(new Event("change")),(0,u.G)("cs-telescope").checked=!0,(0,u.G)("cs-minaz").disabled=!0,(0,u.G)("cs-maxaz").disabled=!0,(0,u.G)("cs-minel").disabled=!0,(0,u.G)("cs-maxel").disabled=!0,(0,u.G)("cs-minrange").disabled=!0,(0,u.G)("cs-maxrange").disabled=!0,(0,u.G)("cs-minaz-div").style.display="none",(0,u.G)("cs-maxaz-div").style.display="none",(0,u.G)("cs-minel-div").style.display="none",(0,u.G)("cs-maxel-div").style.display="none",(0,u.G)("cs-minrange-div").style.display="none",(0,u.G)("cs-maxrange-div").style.display="none",(0,u.G)("cs-minaz").value="0",(0,u.G)("cs-maxaz").value="360",(0,u.G)("cs-minel").value="10",(0,u.G)("cs-maxel").value="90",(0,u.G)("cs-minrange").value="100",(0,u.G)("cs-maxrange").value="50000",(0,u.G)("sensor-type").innerHTML="Telescope",(0,u.G)("sensor-info-title").innerHTML="Custom Sensor",(0,u.G)("sensor-country").innerHTML="Custom Sensor"}catch(e){y.x.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const Is=a.p+"../img/multi-site.png";class Ns extends ae.c{constructor(){super(Ns.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.refreshSideMenuData()},this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=Is,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=d.keepTrackApi.html`
    The Multi-Site Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a satellite and multiple sensors.
    A satellite must first be selected before the menu can be used.
    <br><br>
    By default the menu will calculate the look angles for all sensors in the Space Surveillance Netowrk.
    If you would like to calculate the look angles for additional sensors, you can export a csv file at the bottom of the menu.
    The csv file will contain look angles for all sensors.
    <br><br>
    Clicking on a row in the table will select the sensor and change the simulation time to the time of the look angle.`,this.sideMenuElementName="multi-site-look-angles-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
    </div>`,this.disabledSensors=[],this.lookanglesLength=1,this.lookanglesInterval=30}addHtml(){super.addHtml(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,u.G)("multi-site-look-angles-export"))||void 0===e||e.addEventListener("click",(()=>{const e=d.keepTrackApi.getSensorManager().lastMultiSiteArray.map((e=>({time:e.time,sensor:e.name,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)})));(0,k.Eb)(e,"multiSiteLooks")}))}}),d.keepTrackApi.register({method:d.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(!(!this.isMenuButtonEnabled||(null==e?void 0:e.sccNum)&&d.keepTrackApi.getSensorManager().isSensorSelected()))return this.setBottomIconToDisabled(),void this.closeSideMenu();this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&this.refreshSideMenuData()}})}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData()}})}refreshSideMenuData(){this.isMenuButtonEnabled&&-1!==d.keepTrackApi.getCatalogManager().selectedSat&&(0,m.QP)((()=>{const e=d.keepTrackApi.getCatalogManager(),t=(0,u.G)("multi-site-look-angles-sensor-list");t.innerHTML="";const a=[];for(const i of d.keepTrackApi.getSensorManager().sensorListUS){const s=document.createElement("button");s.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors.includes(i)&&s.classList.add("btn-red"),a.push(i),s.innerText=i.shortName,s.addEventListener("click",(()=>{s.classList.contains("btn-red")?(s.classList.remove("btn-red"),this.disabledSensors.splice(this.disabledSensors.indexOf(i),1)):(s.classList.add("btn-red"),this.disabledSensors.push(i));const t=e.getSat(e.selectedSat,c.C_.EXTRA_ONLY);this.getlookanglesMultiSite(t,a.filter((e=>!this.disabledSensors.includes(e))))})),t.appendChild(s),t.appendChild(document.createTextNode(" "))}const i=e.getSat(e.selectedSat,c.C_.EXTRA_ONLY);this.getlookanglesMultiSite(i,a.filter((e=>!this.disabledSensors.includes(e))))}))}getlookanglesMultiSite(e,t){const a=d.keepTrackApi.getTimeManager(),i=d.keepTrackApi.getSensorManager();if(!t){t=[];for(const e in i.sensors){const a=i.sensors[e];t.push(a)}}const s=!i.isSensorSelected(),n=[...i.currentSensors],o=v.rE/(e.satrec.no*v.rE/v.gc),l=[];for(const i of t){if(i.obsmaxrange<e.perigee&&(!i.obsmaxrange2||i.obsmaxrange2<e.perigee))continue;Es.E.updateSensorUiStyling([i]);let t=0;for(let s=0;s<24*this.lookanglesLength*60*60;s+=this.lookanglesInterval){t=1e3*s;let n=a.getOffsetTimeObj(t),r=Ns.propagateMultiSite_(n,e.satrec,i);""!==r.time&&(l.push(r),s+=60*o*.75)}}l.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),i.lastMultiSiteArray=l,s?i.setCurrentSensor(i.defaultSensor):i.setCurrentSensor(n),Ns.populateMultiSiteTable(l)}static propagateMultiSite_(e,t,a){const i=b.$.getRae(e,t,a);return b.$.checkIsInView(a,i)?{time:e.toISOString(),el:i.el,az:i.az,rng:i.rng,name:a.shortName}:{time:"",el:0,az:0,rng:0,name:""}}static populateMultiSiteTable(e){const t=d.keepTrackApi.getSensorManager(),a=(0,u.G)("multi-site-look-angles-table");a.innerHTML="";let i=a.insertRow(),s=i.insertCell();s.appendChild(document.createTextNode("Time")),s.setAttribute("style","text-decoration: underline");let n=i.insertCell();n.appendChild(document.createTextNode("El")),n.setAttribute("style","text-decoration: underline");let o=i.insertCell();o.appendChild(document.createTextNode("Az")),o.setAttribute("style","text-decoration: underline");let l=i.insertCell();l.appendChild(document.createTextNode("Rng")),l.setAttribute("style","text-decoration: underline");let r=i.insertCell();r.appendChild(document.createTextNode("Sensor")),r.setAttribute("style","text-decoration: underline");const c=d.keepTrackApi.getTimeManager();for(let d=0;d<e.length;d++)t.sensorListUS.includes(t.sensors[e[d].name])&&(i=a.insertRow(),i.setAttribute("class","link"),s=i.insertCell(),s.appendChild(document.createTextNode((0,Ci.v)(e[d].time,"isoDateTime",!0))),n=i.insertCell(),n.appendChild(document.createTextNode(e[d].el.toFixed(1))),o=i.insertCell(),o.appendChild(document.createTextNode(e[d].az.toFixed(0))),l=i.insertCell(),l.appendChild(document.createTextNode(e[d].rng.toFixed(0))),r=i.insertCell(),r.appendChild(document.createTextNode(e[d].name)),i.addEventListener("click",(()=>{c.changeStaticOffset(new Date(e[d].time).getTime()-(new Date).getTime());const a=t.sensors[e[d].name];t.setSensor(a,a.staticNum)})))}}Ns.PLUGIN_NAME="Multi Site Look Angles";const Gs=new Ns;class Ps extends ae.c{constructor(){super(Ns.PLUGIN_NAME),this.bottomIconCallback=()=>{if(this.isMenuButtonEnabled){const e=d.keepTrackApi.getSensorManager();e.isSensorSelected()&&((0,u.G)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,u.G)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,u.G)("cs-hei").value=e.currentSensors[0].alt.toString())}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=xs,this.sideMenuElementName="custom-sensor-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
    </div>`,this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=d.keepTrackApi.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{Ps.addCustomSensorFormSubmitListener(),Ps.addTelescopeClickListener_(),Ps.addCustomSensorBtnCLickListener_(),Ps.addClearCustomSensorListener_(),Ps.addUseGeolocationListener_()}})}static addCustomSensorFormSubmitListener(){(0,u.G)("customSensor").addEventListener("submit",(e=>{e.preventDefault(),Ps.processCustomSensorSubmit_()}))}static addUseGeolocationListener_(){(0,u.G)("cs-geolocation").addEventListener("click",Ls.useCurrentGeolocationAsSensor)}static addClearCustomSensorListener_(){(0,u.G)("cs-clear").addEventListener("click",(()=>{r.I.get(c.Yv.SensorManager).clearCustomSensors()}))}static addCustomSensorBtnCLickListener_(){(0,u.G)("cs-submit").addEventListener("click",(()=>{Ps.processCustomSensorSubmit_()}))}static processCustomSensorSubmit_(){var e,t,a,i,s;null===(e=(0,u.G)("menu-sensor-info"))||void 0===e||e.classList.remove("bmenu-item-disabled"),null===(t=(0,u.G)("menu-fov-bubble"))||void 0===t||t.classList.remove("bmenu-item-disabled"),null===(a=(0,u.G)("menu-surveillance"))||void 0===a||a.classList.remove("bmenu-item-disabled"),null===(i=(0,u.G)("menu-planetarium"))||void 0===i||i.classList.remove("bmenu-item-disabled"),null===(s=(0,u.G)("menu-astronomy"))||void 0===s||s.classList.remove("bmenu-item-disabled"),(0,u.G)("sensor-type").value=(0,u.G)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,u.G)("sensor-info-title").innerHTML="Custom Sensor",(0,u.G)("sensor-country").innerHTML="Custom Sensor";const n=Ps.str2Deg((0,u.G)("cs-lon").value),o=Ps.str2Deg((0,u.G)("cs-lat").value),l=(0,u.G)("cs-hei").value,r=(0,u.G)("cs-type").value,c=(0,u.G)("cs-minaz").value,p=(0,u.G)("cs-maxaz").value,m=(0,u.G)("cs-minel").value,g=(0,u.G)("cs-maxel").value,h=(0,u.G)("cs-minrange").value,b=(0,u.G)("cs-maxrange").value;let v=kt.SpaceObjectType.OBSERVER;switch(r){case"Observer":v=kt.SpaceObjectType.OBSERVER;break;case"Optical":v=kt.SpaceObjectType.OPTICAL;break;case"Mechanical":v=kt.SpaceObjectType.MECHANICAL;break;case"Phased Array Radar":v=kt.SpaceObjectType.PHASED_ARRAY_RADAR;break;default:y.x.info("Unknown sensor type: "+r),v=kt.SpaceObjectType.OBSERVER}d.keepTrackApi.getSensorManager().addSecondarySensor({id:null,lat:o,lon:n,alt:Ps.str2Km(l),obsminaz:Ps.str2Deg(c),obsmaxaz:Ps.str2Deg(p),obsminel:Ps.str2Deg(m),obsmaxel:Ps.str2Deg(g),obsminrange:Ps.str2Km(h),obsmaxrange:Ps.str2Km(b),type:v,name:"Custom Sensor",country:"Custom Sensor",shortName:"Custom Sensor",sun:"No Impact",zoom:Ps.str2Km(b)>6e3?"geo":"leo",volume:!1})}static addTelescopeClickListener_(){(0,u.G)("cs-telescope").addEventListener("click",(()=>{if((0,u.G)("cs-telescope").checked)(0,u.G)("cs-minaz-div").style.display="none",(0,u.G)("cs-maxaz-div").style.display="none",(0,u.G)("cs-minel-div").style.display="none",(0,u.G)("cs-maxel-div").style.display="none",(0,u.G)("cs-minrange-div").style.display="none",(0,u.G)("cs-maxrange-div").style.display="none",(0,u.G)("cs-minaz").value="0",(0,u.G)("cs-maxaz").value="360",(0,u.G)("cs-minel").value="10",(0,u.G)("cs-maxel").value="90",(0,u.G)("cs-minrange").value="100",(0,u.G)("cs-maxrange").value="1000000";else{(0,u.G)("cs-minaz-div").style.display="block",(0,u.G)("cs-maxaz-div").style.display="block",(0,u.G)("cs-minel-div").style.display="block",(0,u.G)("cs-maxel-div").style.display="block",(0,u.G)("cs-minrange-div").style.display="block",(0,u.G)("cs-maxrange-div").style.display="block";const e=d.keepTrackApi.getSensorManager();e.isSensorSelected()&&((0,u.G)("cs-minaz").value=e.currentSensors[0].obsminaz.toString(),(0,u.G)("cs-maxaz").value=e.currentSensors[0].obsmaxaz.toString(),(0,u.G)("cs-minel").value=e.currentSensors[0].obsminel.toString(),(0,u.G)("cs-maxel").value=e.currentSensors[0].obsmaxel.toString(),(0,u.G)("cs-minrange").value=e.currentSensors[0].obsminrange.toString(),(0,u.G)("cs-maxrange").value=e.currentSensors[0].obsmaxrange.toString())}}))}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}Ps.PLUGIN_NAME="Custom Sensor";const Os=new Ps,Ds=a.p+"../img/lookangles.png";class Rs extends ae.c{constructor(){super(Rs.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.refreshSideMenuData()},this.bottomIconElementName="look-angles-icon",this.bottomIconLabel="Look Angles",this.bottomIconImg=Ds,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:450},this.helpTitle="Look Angles Menu",this.helpBody=d.keepTrackApi.html`
    The Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a sensor and a satellite.
    A satellite and sensor must first be selected before the menu can be used.
    <br><br>
    The toggle only rise and set times will only calculate the rise and set times of the satellite.
    This is useful for quickly determining when a satellite will be visible to a sensor.
    <br><br>
    The search range can be modified by changing the length and interval options.`,this.isRiseSetLookangles=!0,this.lookanglesInterval=30,this.lookanglesLength=2,this.sideMenuElementName="look-angles-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
    </div>`,this.refreshSideMenuData=()=>{this.isMenuButtonEnabled&&(0,m.QP)((()=>{const e=d.keepTrackApi.getCatalogManager().getSat(d.keepTrackApi.getCatalogManager().selectedSat,c.C_.EXTRA_ONLY);this.getlookangles(e)}))}}addHtml(){super.addHtml(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;(0,u.G)("look-angles-length").addEventListener("change",(()=>{this.lookanglesLength=parseInt((0,u.G)("look-angles-length").value),this.refreshSideMenuData()})),(0,u.G)("look-angles-interval").addEventListener("change",(()=>{this.lookanglesInterval=parseInt((0,u.G)("look-angles-interval").value),this.refreshSideMenuData()})),null===(e=(0,u.G)("export-look-angles"))||void 0===e||e.addEventListener("click",(()=>{(0,k.Eb)(this.lastlooksArray,"Look-Angles")})),(0,u.G)("settings-riseset").addEventListener("change",this.settingsRisesetChange.bind(this))}}),d.keepTrackApi.register({method:d.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(!(!this.isMenuButtonEnabled||(null==e?void 0:e.sccNum)&&d.keepTrackApi.getSensorManager().isSensorSelected()))return this.setBottomIconToDisabled(),void this.closeSideMenu();this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&e&&this.getlookangles(e)}})}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData()}})}getlookangles(e,t){const a=d.keepTrackApi.getTimeManager();if(!t){const e=d.keepTrackApi.getSensorManager();if(!e.isSensorSelected())return console.debug("satellite.getlookangles requires a sensor to be set!"),[];t=e.currentSensors}let i=this.isRiseSetLookangles?1:this.lookanglesInterval,s=[],n=0;for(let o=0;o<24*this.lookanglesLength*60*60;o+=i){n=1e3*o;let i=a.getOffsetTimeObj(n),l=Ri.J.getTearData(i,e.satrec,t,this.isRiseSetLookangles);if(""!==l.time&&s.push(l),s.length>=1500)break}return s.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),this.lastlooksArray=s,(()=>{let e=(0,u.G)("looks");e.innerHTML="";let t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Time")),i.setAttribute("style","text-decoration: underline");let n=t.insertCell();n.appendChild(document.createTextNode("El")),n.setAttribute("style","text-decoration: underline");let o=t.insertCell();o.appendChild(document.createTextNode("Az")),o.setAttribute("style","text-decoration: underline");let l=t.insertCell();l.appendChild(document.createTextNode("Rng")),l.setAttribute("style","text-decoration: underline");for(let t=0;t<s.length;t++)if(e.rows.length>0){const r=e.insertRow();r.setAttribute("class","link"),i=r.insertCell(),i.appendChild(document.createTextNode((0,Ci.v)(s[t].time,"isoDateTime",!1))),i.addEventListener("click",(()=>{a.changeStaticOffset(new Date((0,Ci.v)(s[t].time,"isoDateTime",!1)+"z").getTime()-a.realTime),a.calculateSimulationTime(),d.keepTrackApi.methods.updateDateTime(new Date(a.dynamicOffsetEpoch+a.staticOffset))})),n=r.insertCell(),n.appendChild(document.createTextNode(s[t].el.toFixed(1))),o=r.insertCell(),o.appendChild(document.createTextNode(s[t].az.toFixed(0))),l=r.insertCell(),l.appendChild(document.createTextNode(s[t].rng.toFixed(0)))}})(),s}settingsRisesetChange(e,t){if(null==e)throw new Error("e is undefined");null!=t||(t=(0,u.G)("settings-riseset").checked),this.isRiseSetLookangles=!!t,this.refreshSideMenuData()}}Rs.PLUGIN_NAME="Look Angles";const Fs=new Rs,Us=a.p+"../img/radio-tower.png";class _s extends ae.c{constructor(){super(_s.PLUGIN_NAME),this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.getSensorInfo()},this.bottomIconElementName="sensor-info-icon",this.bottomIconLabel="Sensor Info",this.bottomIconImg=Us,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="sensor-info-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
    </div>`,this.dragOptions={isDraggable:!0},this.helpTitle="Sensor Info",this.helpBody=d.keepTrackApi.html`
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
    Additionally, lines can be quickly created from the sensor to the sun or moon from this menu.`}addHtml(){super.addHtml(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{_s.addSensorToSunBtnListener_(),_s.addSensorToMoonBtnListener()}})}static addSensorToMoonBtnListener(){(0,u.G)("sensor-moon-btn").addEventListener("click",(()=>{const e=d.keepTrackApi.getSensorManager().currentSensors;1!==e.length&&d.keepTrackApi.getUiManager().toast("Please Select Only One Sensor","caution");const t=d.keepTrackApi.getDrawManager();d.keepTrackApi.getLineManager().create("sat2",[d.keepTrackApi.getCatalogManager().getSensorFromSensorName(e[0].name),t.sceneManager.moon.drawPosition[0],t.sceneManager.moon.drawPosition[1],t.sceneManager.moon.drawPosition[2]],"w")}))}static addSensorToSunBtnListener_(){(0,u.G)("sensor-sun-btn").addEventListener("click",(()=>{const e=d.keepTrackApi.getSensorManager().currentSensors;1!==e.length&&d.keepTrackApi.getUiManager().toast("Please Select Only One Sensor","caution");const t=d.keepTrackApi.getDrawManager();d.keepTrackApi.getLineManager().create("sat2",[d.keepTrackApi.getCatalogManager().getSensorFromSensorName(e[0].name),t.sceneManager.sun.drawPosition[0],t.sceneManager.sun.drawPosition[1],t.sceneManager.sun.drawPosition[2]],"o")}))}getSensorInfo(){if(!this.isHtmlAdded)return;const e=d.keepTrackApi.getSensorManager().currentSensors[0];(0,u.G)("sensor-latitude").innerHTML=e.lat.toString(),(0,u.G)("sensor-longitude").innerHTML=e.lon.toString(),(0,u.G)("sensor-minazimuth").innerHTML=e.obsminaz.toString(),(0,u.G)("sensor-maxazimuth").innerHTML=e.obsmaxaz.toString(),(0,u.G)("sensor-minelevation").innerHTML=e.obsminel.toString(),(0,u.G)("sensor-maxelevation").innerHTML=e.obsmaxel.toString(),(0,u.G)("sensor-minrange").innerHTML=e.obsminrange.toString(),(0,u.G)("sensor-maxrange").innerHTML=e.obsmaxrange.toString()}}_s.PLUGIN_NAME="Sensor Info";const Bs=new _s,zs=a.p+"../img/radar.png";class $s extends ae.c{constructor(){super($s.PLUGIN_NAME),this.dependencies=[Si.s.PLUGIN_NAME],this.bottomIconCallback=()=>{var e;this.isMenuButtonEnabled&&((null===(e=d.keepTrackApi.getPlugin(Za))||void 0===e?void 0:e.isMenuButtonEnabled)?((0,u.G)("cspocAllSensor").style.display="none",(0,u.G)("mwAllSensor").style.display="none",(0,u.G)("mdAllSensor").style.display="none",(0,u.G)("llAllSensor").style.display="none",(0,u.G)("rusAllSensor").style.display="none",(0,u.G)("prcAllSensor").style.display="none"):((0,u.G)("cspocAllSensor").style.display="block",(0,u.G)("mwAllSensor").style.display="block",(0,u.G)("mdAllSensor").style.display="block",(0,u.G)("llAllSensor").style.display="block",(0,u.G)("rusAllSensor").style.display="block",(0,u.G)("prcAllSensor").style.display="block"))},this.bottomIconElementName="sensor-list-icon",this.bottomIconLabel="Sensors",this.bottomIconImg=zs,this.sideMenuElementName="sensor-list-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
    </div>`,this.dragOptions={isDraggable:!0},this.isSensorLinksAdded=!1,this.helpTitle="Sensors Menu",this.helpBody=d.keepTrackApi.html`The Sensors menu allows you to select a sensor for use in calculations and other menu's functions.
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
  If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.`}addHtml(){super.addHtml(),d.keepTrackApi.register({method:d.M8.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{(0,u.G)("nav-mobile").insertAdjacentHTML("beforeend",d.keepTrackApi.html`<div id="sensor-selected"></div>`)}}),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,u.G)("sensor-selected").addEventListener("click",(()=>{d.keepTrackApi.methods.bottomMenuClick(this.bottomIconElementName)})),(0,u.G)("sensor-list-content").addEventListener("click",(e=>{if(!e.target.classList.contains("menu-selectable"))return;if("reset-sensor-button"===e.target.id)return void d.keepTrackApi.getSensorManager().resetSensorSelected();const t=e.target.dataset.sensor;this.sensorListContentClick(t)}))}}),d.keepTrackApi.register({method:"selectSatData",cbName:"sensor",cb:e=>{null!=e&&(null===d.keepTrackApi.getPlugin(es.P)||this.isSensorLinksAdded||((0,u.G)("sat-info-top-links").insertAdjacentHTML("beforeend",d.keepTrackApi.html`
                  <div id="sensors-in-fov-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                        data-tooltip="Visualize Sensor Coverage">Show All Sensors with FOV...</div>
                `),(0,u.G)("sensors-in-fov-link").addEventListener("click",(()=>{const e=d.keepTrackApi.getCatalogManager(),t=d.keepTrackApi.getSensorManager();Object.keys(t.sensors).forEach((a=>{const i=t.sensors[a],s=e.getSat(e.selectedSat);Ri.J.getTearr(s,[i]).inView&&d.keepTrackApi.getLineManager().create("sat6",[s.id,e.getSensorFromSensorName(i.name)],"g")}))})),this.isSensorLinksAdded=!0))}}),d.keepTrackApi.register({method:d.M8.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{(0,u.G)("reset-sensor-button").style.display=e?"block":"none"}})}sensorListContentClick(e){if(!this.isMenuButtonEnabled)return;const t=d.keepTrackApi.getSensorManager();if(void 0!==e){switch(e){case"cspocAll":t.setSensor("SSN");break;case"mwAll":t.setSensor("NATO-MW");break;case"mdAll":t.setSensor("MD-ALL");break;case"llAll":t.setSensor("LEO-LABS");break;case"rusAll":t.setSensor("RUS-ALL");break;case"prcAll":t.setSensor("PRC-ALL");break;default:t.setSensor(t.sensors[`${e}`])}d.keepTrackApi.getCatalogManager().setSelectedSat(-1);try{ne.tE.lookAtLatLon(t.currentSensors[0].lat,t.currentSensors[0].lon,t.currentSensors[0].zoom,d.keepTrackApi.getTimeManager().selectedDate)}catch(e){y.x.warn("Error in sensorListContentClick: "+e)}settingsManager.currentColorScheme==d.keepTrackApi.getColorSchemeManager().default&&Xa.j.change("default")}else y.x.debug("The menu item was clicked but the menu was not defined.")}resetSensorButtonClick(){var e,t,a,i,s,n;this.isMenuButtonEnabled&&(null===(e=(0,u.G)("menu-sensor-info"))||void 0===e||e.classList.add("bmenu-item-disabled"),null===(t=(0,u.G)("menu-fov-bubble"))||void 0===t||t.classList.add("bmenu-item-disabled"),null===(a=(0,u.G)("menu-surveillance"))||void 0===a||a.classList.add("bmenu-item-disabled"),null===(i=(0,u.G)("menu-planetarium"))||void 0===i||i.classList.add("bmenu-item-disabled"),null===(s=(0,u.G)("menu-astronomy"))||void 0===s||s.classList.add("bmenu-item-disabled"),ne.tE.cameraType===ne.iM.PLANETARIUM)&&(null===(n=d.keepTrackApi.getPlugin(Za))||void 0===n||n.setBottomIconToUnselected(),ne.tE.isPanReset=!0,ne.tE.isLocalRotateReset=!0,settingsManager.fieldOfView=.6,d.keepTrackApi.getDrawManager().glInit(),r.I.get(c.Yv.UiManager).hideSideMenus(),r.I.get(c.Yv.OrbitManager).clearInViewOrbit(),ne.tE.cameraType=ne.iM.DEFAULT,(0,u.G)("menu-planetarium").classList.remove("bmenu-item-selected"))}}$s.PLUGIN_NAME="Sensor List";const Hs=new $s,Ys=a.p+"../img/settings.png";var js=a(3643),Vs=a(9755),Js=a.n(Vs),Ks=a(3392);class Ws extends ae.c{constructor(){super(Ws.PLUGIN_NAME),this.bottomIconElementName="settings-menu-icon",this.bottomIconImg=Ys,this.bottomIconLabel="Settings Menu",this.sideMenuElementName="settings-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=d.keepTrackApi.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e,t,a,i,s,n,o;(0,u.G)("settings-form").addEventListener("change",Ws.onFormChange),(0,u.G)("settings-form").addEventListener("submit",Ws.onSubmit);const l=[(0,js.S)([1,0,0,1]),(0,js.S)([1,.75,0,1]),(0,js.S)([.85,.5,0,1]),(0,js.S)([1,1,0,1]),(0,js.S)([0,1,0,1]),(0,js.S)([.2,1,0,.5]),(0,js.S)([.2,1,1,1]),(0,js.S)([0,0,1,1]),(0,js.S)([.2,.4,1,1]),(0,js.S)([.64,0,.64,1]),(0,js.S)([1,0,.6,1]),(0,js.S)([.5,.5,.5,1]),(0,js.S)([1,1,1,1])],r=this;Js()("#settings-color-payload").colorPick({initialColor:(0,js.S)((null===(e=settingsManager.colors)||void 0===e?void 0:e.payload)||[.2,1,0,.5]),palette:l,onColorSelected:function(){r.onColorSelected(this,"payload")}}),Js()("#settings-color-rocketBody").colorPick({initialColor:(0,js.S)((null===(t=settingsManager.colors)||void 0===t?void 0:t.rocketBody)||[.2,.4,1,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"rocketBody")}}),Js()("#settings-color-debris").colorPick({initialColor:(0,js.S)((null===(a=settingsManager.colors)||void 0===a?void 0:a.debris)||[.5,.5,.5,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"debris")}}),Js()("#settings-color-inview").colorPick({initialColor:(0,js.S)((null===(i=settingsManager.colors)||void 0===i?void 0:i.inFOV)||[.85,.5,0,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"inview")}}),Js()("#settings-color-missile").colorPick({initialColor:(0,js.S)((null===(s=settingsManager.colors)||void 0===s?void 0:s.missile)||[1,1,0,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"missile")}}),Js()("#settings-color-missileInview").colorPick({initialColor:(0,js.S)((null===(n=settingsManager.colors)||void 0===n?void 0:n.missileInview)||[1,0,0,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"missileInview")}}),Js()("#settings-color-special").colorPick({initialColor:(0,js.S)((null===(o=settingsManager.colors)||void 0===o?void 0:o.pink)||[1,0,.6,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"pink")}}),this.isNotColorPickerInitialSetup=!0}})}onColorSelected(e,t){if(null==e)throw new Error("context is undefined");if(null==t)throw new Error("colorStr is undefined");if(e.element.css("cssText",`background-color: ${e.color} !important; color: ${e.color};`),this.isNotColorPickerInitialSetup){settingsManager.colors[t]=(e=>{let[t,a,i,s]=e.match(/(?<!\w)-?[\d.]+/gu);if(t=parseFloat(t)/255,a=parseFloat(a)/255,i=parseFloat(i)/255,s=parseFloat(s),t<0||t>1||a<0||a>1||i<0||i>1||s<0||s>1||isNaN(t)||isNaN(a)||isNaN(i)||isNaN(s))throw new Error("Invalid rgba input");return[t,a,i,s]})(e.color),Xa.j.legendColorsChange();const a=r.I.get(c.Yv.ColorSchemeManager);a.setColorScheme(a.currentColorScheme,!0);try{localStorage.setItem("settingsManager-colors",JSON.stringify(settingsManager.colors))}catch(e){console.warn("Settings Manager: Unable to save color settings - localStorage issue!")}}}static onFormChange(e,t,a){var i,s,n;if(null==e)throw new Error("e is undefined");switch(null===(i=e.target)||void 0===i?void 0:i.id){case"settings-leoSats":case"settings-heoSats":case"settings-meoSats":case"settings-geoSats":case"settings-showPayloads":case"settings-showRocketBodies":case"settings-showDebris":case"settings-showAgencies":case"settings-drawOrbits":case"settings-drawTrailingOrbits":case"settings-drawEcf":case"settings-isDrawInCoverageLines":case"settings-drawSun":case"settings-drawBlackEarth":case"settings-drawAtmosphere":case"settings-drawAurora":case"settings-drawMilkyWay":case"settings-graySkybox":case"settings-eciOnHover":case"settings-hos":case"settings-demo-mode":case"settings-sat-label-mode":case"settings-freeze-drag":case"settings-time-machine-toasts":case"settings-snp":(0,u.G)(e.target.id).checked?null===(s=d.keepTrackApi.getSoundManager())||void 0===s||s.play("toggleOn"):null===(n=d.keepTrackApi.getSoundManager())||void 0===n||n.play("toggleOff")}null!=t||(t=(0,u.G)("settings-demo-mode").checked),null!=a||(a=(0,u.G)("settings-sat-label-mode").checked),a&&"settings-demo-mode"===e.target.id&&((0,u.G)("settings-sat-label-mode").checked=!1,(0,u.G)("settings-demo-mode").classList.remove("lever:after")),t&&"settings-sat-label-mode"===e.target.id&&((0,u.G)("settings-demo-mode").checked=!1,(0,u.G)("settings-sat-label-mode").classList.remove("lever:after"))}static onSubmit(e){var t,a;if(null==e)throw new Error("e is undefined");e.preventDefault();const i=d.keepTrackApi.getUiManager(),s=d.keepTrackApi.getColorSchemeManager();null===(t=d.keepTrackApi.getSoundManager())||void 0===t||t.play("button"),settingsManager.isShowLeoSats=(0,u.G)("settings-leoSats").checked,settingsManager.isShowHeoSats=(0,u.G)("settings-heoSats").checked,settingsManager.isShowMeoSats=(0,u.G)("settings-meoSats").checked,settingsManager.isShowGeoSats=(0,u.G)("settings-geoSats").checked,settingsManager.isShowPayloads=(0,u.G)("settings-showPayloads").checked,settingsManager.isShowRocketBodies=(0,u.G)("settings-showRocketBodies").checked,settingsManager.isShowDebris=(0,u.G)("settings-showDebris").checked,settingsManager.isShowAgencies=(0,u.G)("settings-showAgencies").checked,settingsManager.isOrbitCruncherInEcf=(0,u.G)("settings-drawEcf").checked,settingsManager.isDrawInCoverageLines=(0,u.G)("settings-isDrawInCoverageLines").checked,settingsManager.isDrawSun=(0,u.G)("settings-drawSun").checked;let n=settingsManager.isBlackEarth!==(0,u.G)("settings-drawBlackEarth").checked,o=settingsManager.isDrawAtmosphere!==(0,u.G)("settings-drawAtmosphere").checked,l=settingsManager.isDrawAurora!==(0,u.G)("settings-drawAurora").checked;if(settingsManager.isBlackEarth=(0,u.G)("settings-drawBlackEarth").checked,settingsManager.isDrawAtmosphere=(0,u.G)("settings-drawAtmosphere").checked,settingsManager.isDrawAurora=(0,u.G)("settings-drawAurora").checked,n||o||l){const e=r.I.get(c.Yv.DrawManager);e.sceneManager.earth.init(settingsManager,e.gl),e.sceneManager.earth.loadHiRes(),e.sceneManager.earth.loadHiResNight()}settingsManager.isDrawOrbits=(0,u.G)("settings-drawOrbits").checked,settingsManager.isDrawTrailingOrbits=(0,u.G)("settings-drawTrailingOrbits").checked,settingsManager.isDrawTrailingOrbits?d.keepTrackApi.getOrbitManager().orbitWorker.postMessage({orbitType:2}):d.keepTrackApi.getOrbitManager().orbitWorker.postMessage({orbitType:1});let p=settingsManager.isDrawMilkyWay!==(0,u.G)("settings-drawMilkyWay").checked,m=settingsManager.isGraySkybox!==(0,u.G)("settings-graySkybox").checked;if(settingsManager.isDrawMilkyWay=(0,u.G)("settings-drawMilkyWay").checked,settingsManager.isGraySkybox=(0,u.G)("settings-graySkybox").checked,p||m){const e=d.keepTrackApi.getDrawManager();e.sceneManager.skybox.init(settingsManager,e.gl)}settingsManager.isEciOnHover=(0,u.G)("settings-eciOnHover").checked;const g=(0,u.G)("settings-hos").checked;settingsManager.colors.transparent=g?[1,1,1,0]:[1,1,1,.1],settingsManager.isDemoModeOn=(0,u.G)("settings-demo-mode").checked,settingsManager.isSatLabelModeOn=(0,u.G)("settings-sat-label-mode").checked,settingsManager.isShowNextPass=(0,u.G)("settings-snp").checked,settingsManager.isFreezePropRateOnDrag=(0,u.G)("settings-freeze-drag").checked,settingsManager.isDisableTimeMachineToasts=(0,u.G)("settings-time-machine-toasts").checked,d.keepTrackApi.getPlugin(Ks.i)&&(d.keepTrackApi.getPlugin(Ks.i).isMenuButtonEnabled=!1),d.keepTrackApi.getGroupsManager().clearSelect(),s.setColorScheme(s.default,!0),null===(a=(0,u.G)("menu-time-machine"))||void 0===a||a.classList.remove("bmenu-item-selected"),s.reloadColors();const h=parseInt((0,u.G)("satFieldOfView").value);isNaN(h)?((0,u.G)("satFieldOfView").value="30",i.toast("Invalid field of view value!","critical")):d.keepTrackApi.getCatalogManager().satCruncher.postMessage({typ:"isShowSatOverfly",selectedSatFOV:h});const b=parseInt((0,u.G)("maxSearchSats").value);isNaN(b)?((0,u.G)("maxSearchSats").value=settingsManager.searchLimit.toString(),i.toast("Invalid max search sats value!","critical")):(settingsManager.searchLimit=b,i.searchManager.doSearch(i.searchManager.getCurrentSearch())),s.setColorScheme(s.currentColorScheme,!0)}}Ws.PLUGIN_NAME="Settings Menu";const Xs=new Ws,qs=a.p+"../img/search.png";class Zs extends ae.c{constructor(){super(Zs.PLUGIN_NAME),this.dependencies=[Qi.H.PLUGIN_NAME,es.P.PLUGIN_NAME],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=qs,this.isRequireSensorSelected=!0,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=d.keepTrackApi.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
  <br><br>
  This is unlikely to be very helpful unless you own/operate a sensor with a search box functionality.`,this.sideMenuElementName="stf-menu",this.sideMenuElementHtml=d.keepTrackApi.html`
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
  </div>`,this.isAddStfLinksOnce=!1}addHtml(){super.addHtml(),d.keepTrackApi.register({method:d.M8.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{null!=e&&(this.isAddStfLinksOnce||((0,u.G)("sat-info-top-links").insertAdjacentHTML("beforeend",d.keepTrackApi.html`
            <div id="stf-on-object-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,u.G)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0))}})}addJs(){super.addJs(),d.keepTrackApi.register({method:d.M8.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,u.G)("stfForm").addEventListener("submit",(e=>{e.preventDefault(),this.onSubmit.bind(this)()})),(0,u.G)("stf-remove-last").addEventListener("click",(()=>{d.keepTrackApi.getSensorManager().removeStf()})),(0,u.G)("stf-clear-all").addEventListener("click",(()=>{d.keepTrackApi.getSensorManager().clearStf()}))}}),d.keepTrackApi.register({method:"resetSensor",cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),d.keepTrackApi.register({method:"setSensor",cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,g.kW)((0,u.G)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonEnabled=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),d.keepTrackApi.getUiManager().hideSideMenus()}onSubmit(){var e;if(!this.verifySensorSelected())return;const t=d.keepTrackApi.getSensorManager(),{lat:a,lon:i,alt:s}=t.currentSensors[0],n=parseFloat((0,u.G)("stf-az").value),o=parseFloat((0,u.G)("stf-azExt").value),l=parseFloat((0,u.G)("stf-el").value),r=parseFloat((0,u.G)("stf-elExt").value),c=parseFloat((0,u.G)("stf-rng").value),p=parseFloat((0,u.G)("stf-rngExt").value),m=n-o<0?n-o+360:n-o/2,g=n+o>360?n+o-360:n+o/2,h=l-r/2,v=l+r/2,f=c-p/2,k=c+p/2,S={lat:a,lon:i,alt:s,obsminaz:m,obsmaxaz:g,obsminel:h,obsmaxel:v,obsminrange:f,obsmaxrange:k,type:"Short Range Fence"};b.$.checkIsInView(t.currentSensors[0],{az:m,el:h,rng:f})&&b.$.checkIsInView(t.currentSensors[0],{az:g,el:v,rng:k})?(t.addStf(S),null===(e=d.keepTrackApi.getPlugin(Ms))||void 0===e||e.enableFovView()):y.x.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=d.keepTrackApi.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=r.I.get(c.Yv.CatalogManager),a=Ri.J.getTearr(t.getSat(t.selectedSat),e.currentSensors);(0,u.G)("stf-az").value=a.az.toFixed(1),(0,u.G)("stf-el").value=a.el.toFixed(1),(0,u.G)("stf-rng").value=a.rng.toFixed(1),d.keepTrackApi.getUiManager().hideSideMenus(),(0,g.$k)((0,u.G)("stf-menu"),1e3),this.isMenuButtonEnabled=!0,this.setBottomIconToSelected()}}Zs.PLUGIN_NAME="Short Term Fences";const Qs=new Zs;var en=a(3067);class tn extends ae.c{constructor(){super("Social Media"),this.dependencies=["Top Menu"]}addHtml(){super.addHtml(),d.keepTrackApi.register({method:"uiManagerFinal",cbName:this.PLUGIN_NAME,cb:tn.uiManagerFinal_})}static uiManagerFinal_(){const e=document.createElement("li");e.innerHTML=d.keepTrackApi.html`
          <a id="github-share1" class="top-menu-btns" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            width="22"
            height="22"
            style="margin-top: 1px;"
            src="${en}"
            />
          </a>
          `,(0,u.G)("nav-mobile2").insertBefore(e,(0,u.G)("nav-mobile2").firstChild)}}const an=new tn;var sn=a(6492),nn=a(4427),on=a(4677),ln=a(5474);const rn=(e,t)=>{return a=void 0,i=void 0,n=function*(){null!=t||(t={});try{const a=new es.P;a.init(),r.I.registerSingleton(c.Yv.SelectSatManager,a),t.topMenu&&Ya.t.init(),t.satInfoboxCore&&Qi.P.init(),t.updateSelectBoxCore&&nn.i.init(),t.datetime&&Si.t.init(),t.social&&an.init(),t.classificationBar&&ui.init(),t.sensor&&(Hs.init(),Bs.init(),Os.init(),Fs.init(),Gs.init()),t.watchlist&&(on.P.init(),ln.n.init()),t.nextLaunch&&Wi.init(),t.findSat&&Ui.init(),t.shortTermFences&&Qs.init(),t.orbitReferences&&as.init(),t.collisions&&hi.init(),t.breakup&&ci.init(),t.debrisScreening&&Mi.init(),t.editSat&&Pi.init(),t.newLaunch&&ji.init(),t.initialOrbit&&Re(),t.missile&&lt(),t.stereoMap&&sn.M.init(),t.sensorFov&&As.init(),t.sensorSurv&&Cs.init(),t.satelliteView&&Ma.init(),t.satelliteFov&&ds.init(),t.planetarium&&Qa.init(),t.astronomy&&ti.init(),t.nightToggle&&Zi.init(),t.dops&&Li.init(),t.constellations&&ls.init(),t.countries&&se.init(),t.colorsMenu&&ki.init(),t.screenshot&&Ss.init(),t.launchCalendar&&$i.init(),t.timeMachine&&Ks.M.init(),t.photoManager&&ms.init(),t.screenRecorder&&vs.init(),t.analysis&&z(),t.plotAnalysis&&ra(),t.aboutManager&&Ka.init(),t.settingsMenu&&Xs.init(),t.soundManager&&Ha.init(),t.gamepad&&re(),e.register({method:"uiManagerFinal",cbName:"core",cb:function(){cn(t)}})}catch(e){y.x.info("Error loading core plugins:"+e.message)}},new((s=void 0)||(s=Promise))((function(e,t){function o(e){try{r(n.next(e))}catch(e){t(e)}}function l(e){try{r(n.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(o,l)}r((n=n.apply(a,i||[])).next())}));var a,i,s,n},cn=e=>{const t=(0,u.G)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",e+"px")}else document.documentElement.style.setProperty("--bottom-menu-height","0px");if(e.topMenu){let e=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(e)&&(e=0),settingsManager.isMobileModeEnabled?document.documentElement.style.setProperty("--top-menu-height",e+17+"px"):document.documentElement.style.setProperty("--top-menu-height",e+22+"px")}(0,u.G)("bottom-icons")&&""==(0,u.G)("bottom-icons").innerText&&((0,u.G)("nav-footer").style.visibility="hidden");const a=(0,u.G)("bottom-icons-container");if(a){const e=a.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",e+"px")}e.aboutManager&&((0,u.G)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"keeptrack.space"===window.location.hostname||window.location.hostname,(0,u.G)("bottom-icons-container").addEventListener("mousewheel",(e=>{e.preventDefault(),((e,t)=>{const a=e.scrollTop+.15*t;e.scrollTop=a})(e.currentTarget,e.deltaY)}),{passive:!1})}}}]);