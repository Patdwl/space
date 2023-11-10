"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[719],{6880:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(8081),s=a.n(i),n=a(3645),o=a.n(n)()(s());o.push([e.id,".plot-analysis-menu-maximized {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.plot-analysis-menu-normal {\n  width: 650px;\n}\n\n.plot-analysis-chart {\n  width: 100%;\n  height: 90%;\n  padding: 10px;\n  margin: 0;\n}\n",""]);const l=o},7182:(e,t,a)=>{a.r(t),a.d(t,{CanvasRecorder:()=>as,analysis:()=>i,catalogLoader:()=>Ea,initialOrbit:()=>s,loadCorePlugins:()=>Ys,missile:()=>n,omManager:()=>he,plotAnalysis:()=>o,startGoogleAnalytics:()=>qs,uiManagerFinal:()=>Zs});var i={};a.r(i),a.d(i,{analysisBptSumbit:()=>K,analysisFormSubmit:()=>$,findBestPass:()=>W,findBestPasses:()=>X,findCloseObjects:()=>V,findCsoBtnClick:()=>H,findRaBtnClick:()=>J,init:()=>U,onHelpMenuClick:()=>_,uiManagerFinal:()=>z,uiManagerInit:()=>B});var s={};a.r(s),a.d(s,{bottomMenuClick:()=>we,hideSideMenus:()=>ye,init:()=>fe,obfitFormSubmit:()=>xe,onHelpMenuClick:()=>Se,uiManagerFinal:()=>Ce,uiManagerInit:()=>Me});var n={};a.r(n),a.d(n,{bottomMenuClick:()=>Re,hideSideMenus:()=>Pe,init:()=>He,missileChange:()=>Oe,missileSubmit:()=>_e,msAttackerChange:()=>Ve,msErrorClick:()=>Fe,msTargetChange:()=>Ue,onHelpMenuClick:()=>je,searchForRvs:()=>ze,uiManagerFinal:()=>$e,uiManagerInit:()=>Be,updateLoop:()=>Ie});var o={};a.r(o),a.d(o,{bottomMenuClick:()=>Kt,curChart:()=>Gt,curChart2:()=>It,curChart3:()=>Pt,curChart4:()=>Rt,curChart5:()=>Ot,curChart6:()=>Ft,hideSideMenus:()=>ea,init:()=>jt,isPlotAnalyisMenuOpen:()=>Ut,isPlotAnalyisMenuOpen2:()=>_t,isPlotAnalyisMenuOpen3:()=>Bt,isPlotAnalyisMenuOpen4:()=>zt,isPlotAnalyisMenuOpen5:()=>$t,isPlotAnalyisMenuOpen6:()=>Ht,onEcfPlotBtnClick:()=>Xt,onEciPlotBtnClick:()=>Wt,onHelpMenuClick:()=>Vt,onInc2AltPlotBtnClick:()=>qt,onInc2LonPlotBtnClick:()=>Zt,onRicPlotBtnClick:()=>Yt,onTime2LonPlotBtnClick:()=>Qt,selectSatData:()=>ta,uiManagerInit:()=>Jt});var l=a(9640),r=a(3092),c=a(5460),d=a(7644),u=a(7997),p=a(5179),g=a(2171),m=a(1874),h=a(6382),b=a(6279),v=a(3162),f=a(7047);class S{static exportTle2Csv(e,t=!0){try{const a=[],i=e.filter((e=>e.sccNum&&void 0!==e.TLE1&&void 0!==e.TLE2));if(0==i.length)return void f.x.info("No TLE data to export");i.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(let e=0;e<i.length;e++){const s=i[e];void 0!==s.TLE1&&void 0!==s.TLE2&&(t&&"ANALSAT"==s.country||a.push({satId:s.sccNum,name:s.name,TLE1:s.TLE1,TLE2:s.TLE2,inclination:s.inclination*m.I3,eccentricity:s.eccentricity,period:s.period,raan:s.raan*m.I3,apogee:s.apogee,perigee:s.perigee,country:s.country,site:s.launchSite,rocket:s.launchVehicle,rcs:s.rcs,visualMagnitude:s.vmag,user:s.user,mission:s.mission,purpose:s.purpose,contractor:s.manufacturer,dryMass:s.dryMass,liftMass:s.launchMass,lifeExpected:s.lifetime,power:s.power}))}(0,b.Eb)(a,"catalogInfo")}catch(e){}}static exportTle2Txt(e,t=2,a=!0){try{const i=[],s=e.filter((e=>e.sccNum&&void 0!==e.TLE1&&void 0!==e.TLE2));if(0==s.length)return void f.x.info("No TLE data to export");s.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(let e=0;e<s.length;e++){const n=s[e];void 0!==n.TLE1&&void 0!==n.TLE2&&(a&&"ANALSAT"==n.country||(3==t&&i.push(n.name),n.TLE1.includes("NO TLE")&&console.log(n.sccNum),n.TLE2.includes("NO TLE")&&console.log(n.sccNum),i.push(n.TLE1),i.push(n.TLE2)))}const n=i.join("\n"),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,v.saveAs)(o,"TLE.txt")}catch(e){}}}var y=a(3235);const M=a.p+"../img/analysis.png",C=l.bD.html`
        <div id="menu-analysis" class="bmenu-item">
          <img
            alt="analysis"
            src=""
            delayedsrc="${M}"
          />
          <span class="bmenu-title">Analysis</span>
          <div class="status-icon"></div>
        </div>
      `,w=l.bD.html`
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
</div>`,x=l.bD.html`
  <optgroup label="Orbital Parameters">
    <option value='inc'>Inclination</option>
    <option value='ap'>Apogee</option>
    <option value='pe'>Perigee</option>
    <option value='per'>Period</option>
    <option value='e'>Eccentricity</option>
    <option value='ra'>RAAN</option>
    <option value='all'>All</option>
  </optgroup>`,D=l.bD.html`
  <optgroup id="anal-look-opt" label="Look Angles">
    <option value='az'>Azimuth</option>
    <option value='el'>Elevation</option>
    <option value='rng'>Range</option>
    <option value='rae'>All</option>
  </optgroup>`,L=l.bD.html`
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
          ${D}
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
  </form>`,k=l.bD.html`
  <h5 class="center-align">Analysis Menu</h5>
  <div class="divider"></div>
  <div class="row"></div>`,A=l.bD.html`
  <div class="row">
    <center>
      <button id="export-catalog-txt-2a" class="btn btn-ui waves-effect waves-light">
        Export Official TLEs &#9658;
      </button>
    </center>
  </div>`,E=l.bD.html`
<div class="row">
  <center>
    <button id="export-catalog-txt-3a" class="btn btn-ui waves-effect waves-light">
      Export Official 3LEs &#9658;
    </button>
  </center>
</div>`,T=l.bD.html`
  <div class="row">
    <center>
      <button id="export-catalog-txt-2b" class="btn btn-ui waves-effect waves-light">
        Export KeepTrack TLEs &#9658;
      </button>
    </center>
  </div>`,N=l.bD.html`
<div class="row">
  <center>
  <button id="export-catalog-txt-3b" class="btn btn-ui waves-effect waves-light">
      Export KeepTrack 3LEs &#9658;
    </button>
  </center>
</div>`,G=l.bD.html`
  <div class="row">
    <center>
      <button id="findReentries" class="btn btn-ui waves-effect waves-light">
      Find Reentries &#9658;
      </button>
    </center>
  </div>`,I=l.bD.html`
  <div class="row">
    <center>
      <button id="export-catalog-csv-btn" class="btn btn-ui waves-effect waves-light">
        Export Catalog CSV &#9658;
    </button>
    </center>
  </div>`,P=l.bD.html`
  <div class="row">
    <center>
      <button id="findCsoBtn" class="btn btn-ui waves-effect waves-light">Find Close Objects &#9658;</button>
    </center>
  </div>`,R=l.bD.html`
<div id="analysis-menu" class="side-menu-parent start-hidden text-select">
  <div id="analysis-inner-menu" class="side-menu">
    ${k}
    <!-- ${L} -->
    ${A}
    ${E}
    ${T}
    ${N}
    ${I}
    ${P}
    ${G}
    ${w}
  </div>
</div>`,O=l.bD.html`The Analysis Menu provides a number of tools to help you analyze the data in the current view. The tools are:
<ul style="margin-left: 40px;">
  <li>Export Official TLEs - Export real two line element sets.</li>
  <li>Export 3LES - Export three line element sets.</li>
  <li>Export KeepTrack TLEs - Export All KeepTrack two line element sets including analysts.</li>
  <li>Export KeepTrack 3LES - Export All KeepTrack three line element sets including analysts.</li>
  <li>Find Close Objects - Find objects that are close to each other.</li>
  <li>Find Reentries - Find objects that are likely to reenter the atmosphere.</li>
  <li>Best Passes - Find the best passes for a satellite based on the currently selected sensor.</li>
</ul>`;let F=!1;const U=()=>{l.bD.register({event:"uiManagerInit",cbName:"analysis",cb:B}),l.bD.register({event:"uiManagerFinal",cbName:"analysis",cb:z}),l.bD.register({event:"bottomMenuClick",cbName:"analysis",cb:e=>{if("menu-analysis"===e){const e=l.bD.getUiManager();if(F)return F=!1,(0,c.G)("menu-analysis").classList.remove("bmenu-item-selected"),void e.hideSideMenus();{if(e.hideSideMenus(),F=!0,-1!=l.bD.getCatalogManager().selectedSat){const e=l.bD.getCatalogManager().getSat(l.bD.getCatalogManager().selectedSat),t=(0,c.G)("anal-sat");t&&(t.value=e.sccNum)}const t=document.querySelectorAll("select");return window.M.FormSelect.init(t),(0,u.$k)((0,c.G)("analysis-menu"),1e3),void(0,c.G)("menu-analysis").classList.add("bmenu-item-selected")}}}}),l.bD.register({event:"selectSatData",cbName:"analysis",cb:e=>{l.bD.getUiManager().isAnalysisMenuOpen&&((0,c.G)("anal-sat").value=e.sccNum)}}),l.bD.register({event:"hideSideMenus",cbName:"analysis",cb:()=>{(0,u.kW)((0,c.G)("analysis-menu"),1e3),(0,c.G)("menu-analysis").classList.remove("bmenu-item-selected"),F=!1}}),l.bD.register({event:"onHelpMenuClick",cbName:"analysis",cb:_})},_=()=>!!F&&(p.v.showAdvice("Analysis Menu",O),!0),B=()=>{(0,c.G)("left-menus").insertAdjacentHTML("beforeend",R),(0,c.G)("bottom-icons").insertAdjacentHTML("beforeend",C)},z=()=>{var e,t,a,i,s,n,o,u;null===(e=(0,c.G)("analysis-bpt"))||void 0===e||e.addEventListener("submit",(function(e){e.preventDefault(),K()})),null===(t=(0,c.G)("findCsoBtn"))||void 0===t||t.addEventListener("click",(()=>{(0,d.QP)(H)})),null===(a=(0,c.G)("findReentries"))||void 0===a||a.addEventListener("click",(()=>{(0,d.QP)(J)}));const p=l.bD.getCatalogManager().satData;null===(i=(0,c.G)("export-catalog-csv-btn"))||void 0===i||i.addEventListener("click",(()=>{S.exportTle2Csv(p)})),null===(s=(0,c.G)("export-catalog-txt-2a"))||void 0===s||s.addEventListener("click",(()=>{S.exportTle2Txt(p)})),null===(n=(0,c.G)("export-catalog-txt-2b"))||void 0===n||n.addEventListener("click",(()=>{S.exportTle2Txt(p,2,!1)})),null===(o=(0,c.G)("export-catalog-txt-3a"))||void 0===o||o.addEventListener("click",(()=>{S.exportTle2Txt(p,3)})),null===(u=(0,c.G)("export-catalog-txt-3b"))||void 0===u||u.addEventListener("click",(()=>{S.exportTle2Txt(p,3,!1)})),(0,r.E)((0,c.G)("analysis-menu"))},$=()=>{},H=()=>{const e=V();l.bD.getUiManager().doSearch(e)};let j=null;const V=()=>{if(j)return j;const e=50;let t=[],a=[];for(let e=0;e<l.bD.getCatalogManager().orbitalSats;e++){const t=l.bD.getCatalogManager().getSat(e);void 0!==t.TLE1&&(void 0===t.position&&(t.position=g.$.getEci(t,new Date).position||{x:0,y:0,z:0}),isNaN(t.position.x)||isNaN(t.position.y)||isNaN(t.position.z)||t.position&&"boolean"!=typeof t.position&&0===t.position.x&&0===t.position.y&&0===t.position.z||a.push(t))}a=(0,h.d)(a),a.sort(((e,t)=>e.position.x-t.position.x));let i=0;const s=a.length;for(i=0;i<s;i++){const n=a[i],o=n.position,l=o.x-e,r=o.x+e,c=o.y-e,d=o.y+e,u=o.z-e,p=o.z+e;let g=0;for(g=Math.max(0,i-200);g<s;g++){const e=a[g];if(n==e)continue;const i=e.position;if(i.x>r)break;i.x<r&&i.x>l&&i.y<d&&i.y>c&&i.z<p&&i.z>u&&t.push({sat1:n,sat2:e})}}let n=(0,h.d)(t);const o=[];for(let e=0;e<n.length;e++){let t=n[e].sat1,a=g.$.getEci(t,new Date(Date.now()+18e5));a.position&&"boolean"!=typeof a.position&&0===a.position.x&&0===a.position.y&&0===a.position.z||(n[e].sat1.position=a.position,t=n[e].sat2,a=g.$.getEci(t,new Date(Date.now()+18e5)),a.position&&"boolean"!=typeof a.position&&0===a.position.x&&0===a.position.y&&0===a.position.z||(t.position=a.position,n[e].sat2.position=a.position))}for(let t=0;t<n.length;t++){let a=n[t].sat1,i=a.position;if(void 0===i)continue;let s=i.x-e,l=i.x+e,r=i.y-e,c=i.y+e,d=i.z-e,u=i.z+e,p=n[t].sat2,g=p.position;void 0!==g&&g.x<l&&g.x>s&&g.y<c&&g.y>r&&g.z<u&&g.z>d&&(o.push(a.sccNum),o.push(p.sccNum))}const r=Array.from(new Set(o));let c="";for(let e=0;e<r.length;e++)e==r.length-1?c+=r[e]:c+=r[e]+",";return j=c,c},J=()=>{const e=y.w.findReentry(l.bD.getCatalogManager().satData).join(",");l.bD.getUiManager().doSearch(e)},K=()=>{const e=(0,c.G)("analysis-bpt-sats").value,t=l.bD.getSensorManager();t.isSensorSelected()?X(e,t.currentSensors[0]):l.bD.getUiManager().toast("You must select a sensor first!","critical")},W=(e,t)=>{const a=l.bD.getTimeManager();if(t.length<=0||!t[0]||void 0===t[0].obsminaz)return l.bD.getUiManager().toast("Sensor's format incorrect. Did you select a sensor first?","critical"),[];t[0].observerGd={lat:t[0].lat*m.qW,lon:t[0].lon*m.qW,alt:t[0].alt};const i=t[0];let s=0;var n=l.bD.getCatalogManager().calcSatrec(e),o=[];let r=0,c=null,d=null,u=null,p=null,h=i.obsmaxrange,b=0,v=!1,f=!1,S=m.rE/(n.no*m.rE/m.gc);const y=(e,t)=>{let n=g.$.getRae(e,t,i);if(g.$.checkIsInView(i,n)){const o=a.getOffsetTimeObj(s-5e3);let l=g.$.getRae(o,t,i),m=g.$.checkIsInView(i,l);if(m){let o=a.getOffsetTimeObj(s+5e3);if(l=g.$.getRae(o,t,i),m=g.$.checkIsInView(i,l),!m){if(f=n.el<=3.5,null==p)return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null};r=Math.min((e.getTime()-p.getTime())/1e3/60*10/8,10);let a=Math.min(b/50*10,10);a*=v&&f?2:1,r+=a,r+=Math.min(7500/h,10);let i=0;return i=(e.getTime()-p.getTime())/1e3||0,{sortTime:p.getTime(),scc:t.satnum,score:r,startDate:p,startTime:p,startAz:c,startEl:d,startrng:u,stopDate:e,stopTime:e,stopAz:n.az.toFixed(0),stopEl:n.el.toFixed(1),stoprng:n.rng.toFixed(0),tic:i,minrng:h.toFixed(0),passMaxEl:b.toFixed(1)}}}else n.el<=3.5&&(v=!0),p=e,c=n.az.toFixed(0),d=n.el.toFixed(1),u=n.rng.toFixed(0);b<n.el&&(b=n.el),h>n.rng&&(h=n.rng)}return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null}};for(let e=0;e<604800;e+=5){s=1e3*e;const t=a.getOffsetTimeObj(s);if(o.length<=5e3){const a=y(t,n);null!==a.score&&(o.push(a),r=0,c=null,d=null,u=null,p=null,h=i.obsmaxrange,b=0,v=!1,f=!1,e+=60*S*.75)}}return o},X=(e,t)=>{const a=(e=e.replace(/ /gu,",")).split(",");let i=[];for(let e=0;e<a.length;e++)try{const s=a[e];if(void 0===s||null==s||""===s||" "===s)continue;const n=l.bD.getCatalogManager().getSatFromObjNum(parseInt(s)),o=W(n,[t]);for(let e=0;e<o.length;e++)i.push(o[e])}catch(e){console.debug(e)}i.sort(((e,t)=>t.sortTime-e.sortTime)),i.reverse(),i.forEach((e=>{delete e.sortTime}));for(let e=0;e<i.length;e++)i[e].startDate=i[e].startDate.toISOString().split("T")[0],i[e].startTime=i[e].startTime.toISOString().split("T")[1].split(".")[0],i[e].stopDate=i[e].stopDate.toISOString().split("T")[0],i[e].stopTime=i[e].stopTime.toISOString().split("T")[1].split(".")[0];(0,b.Eb)(i,"bestSatTimes")},Y=a.p+"../img/flag.png";var Z=a(9703),q=a(7374),Q=a(9959);class ee extends Q.c{constructor(){super(ee.PLUGIN_NAME),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=Y,this.bottomIconLabel="Countries",this.sideMenuElementHtml=l.bD.html`
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
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=l.bD.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,c.G)("country-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){var e;null===(e=l.bD.getSoundManager())||void 0===e||e.play("toggleOn"),ee.countryMenuClick_(this.getAttribute("data-group"))}))})),(0,r.E)((0,c.G)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=l.bD.getGroupsManager(),a=q.n.getCountryCode(e);if(""===a)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(Z.Y.COUNTRY,a,e),ee.groupSelected_(e)}static groupSelected_(e){const t=l.bD.getGroupsManager(),a=l.bD.getCatalogManager(),i=l.bD.getUiManager(),s=(0,c.G)("search");void 0!==e&&void 0!==t.groupList[e]&&(t.selectGroup(t.groupList[e]),t.groupList[e].objects.length<settingsManager.searchLimit?i.searchManager.doSearch(t.groupList[e].objects.reduce(((e,t)=>`${e}${a.getSat(t).sccNum},`),"").slice(0,-1)):(s.value=t.groupList[e].objects.reduce(((e,t)=>`${e}${a.getSat(t).sccNum},`),"").slice(0,-1),i.searchManager.fillResultBox(t.groupList[e].objects.map((e=>({satId:e}))),a)),a.setSelectedSat(-1),settingsManager.isMobileModeEnabled&&i.searchManager.searchToggle(!0),i.hideSideMenus())}}ee.PLUGIN_NAME="Countries Menu";const te=new ee,ae=a.p+"../img/iod.png";var ie=a(3991),se=function(e,t,a,i){return new(a||(a=Promise))((function(s,n){function o(e){try{r(i.next(e))}catch(e){n(e)}}function l(e){try{r(i.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}r((i=i.apply(e,t||[])).next())}))};const ne=6371e3,oe=Math.PI,le=2*oe,re=360/le,ce={sat2sv:(e,t)=>[t.simulationTimeObj,e.position.x,e.position.y,e.position.z,e.velocity.x,e.velocity.y,e.velocity.z],sat2kp:(e,t)=>{const a=ce.sat2sv(e,t);return ce.sv2kp(a,t)},sat2tle:(e,t)=>{const a=ce.sat2kp(e,t);return ce.kp2tle(a,null,t)},sv2kp:e=>ue({massPrimary:1,massSecondary:1,vector:e,massPrimaryU:"kg",massSecondaryU:"M_Earth",vectorU:"km",outputU:"km",outputU2:"m"}),kp2tle:(e,t,a)=>{const i=e.inclination,s=e.raan,n=e.eccentricity,o=e.argPe,l=e.mo,r=1440/e.period,c=(t=void 0===t||null==t?new Date(a.calculateSimulationTime()):t).getUTCFullYear()-2e3,d=ge(t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds()),u=parseFloat(d)+1.15741e-8*t.getUTCMilliseconds();return{tle1:`1 80000U 58001A   ${c}${me(u.toFixed(8),12)} 0.00000000 +00000-0 +00000-0 0 99990`,tle2:`2 80000 ${me(i.toFixed(4),8)} ${me(s.toFixed(4),8)} ${n.toFixed(7).substr(2,7)} ${me(parseFloat(o).toFixed(4),8)} ${me(l.toFixed(4),8)} ${me(r.toFixed(8),11)}000010`}},iod:(e,t)=>se(void 0,void 0,void 0,(function*(){try{const a=ce.svs2kps(e);e.sort((function(e,t){return e[0]-t[0]}));const i=new Date(e[0][0]);return ce.fitTles(i,e,a,t)}catch(e){f.x.info(e)}})),svs2analyst:(e,t)=>se(void 0,void 0,void 0,(function*(){const a=l.bD.getCatalogManager();ce.iod(e,t).then((e=>{a.insertNewAnalystSatellite(e.tle1,e.tle2,a.getIdFromObjNum(100500),"100500")})).catch((e=>{f.x.debug(e)}))})),fitTles:(e,t,a,i)=>se(void 0,void 0,void 0,(function*(){try{ce.debug.closestApproach=0;const s=settingsManager.fitTleSteps,n=(a.max.raan-a.min.raan)/s,o=(a.max.argPe-a.min.argPe)/s,l=(a.max.mo-a.min.mo)/s;let r=[1e7];for(let c=-s/2;c<s/2;c++)for(let d=-s;d<s;d++)for(let u=2*-s;u<2*s;u++){const s={inclination:a.avg.inclination,raan:a.avg.raan+n*c,eccentricity:a.avg.eccentricity,argPe:a.avg.argPe+o*d,mo:a.avg.mo+l*u/2,period:a.avg.period},p=ce.kp2tle(s,e,i);let g=0,m=0,h=0,b=0;for(let a=0;a<t.length;a++){let i;try{i=de(p.tle1,p.tle2,new Date(e+(t[a][0]-t[0][0]))),g+=Math.abs(i.position.x-t[a][1]),m+=Math.abs(i.position.y-t[a][2]),h+=Math.abs(i.position.z-t[a][3]),b+=Math.sqrt(Math.pow(g,2)+Math.pow(m,2)+Math.pow(h,2))}catch(e){f.x.info(e)}}b/=t.length,b<r[0]&&(r=[b,c,d,u])}f.x.debug(`Closest Approach: ${r[0]}`),ce.debug.closestApproach+=r[0];const c={inclination:a.avg.inclination,raan:a.avg.raan+n*r[1],eccentricity:a.avg.eccentricity,argPe:a.avg.argPe+o*r[2],mo:a.avg.mo+l*r[3],period:a.avg.period};return ce.kp2tle(c,e)}catch(e){f.x.debug(e)}})),testIod:e=>{fetch("/metObs.json").then((e=>e.json())).then((t=>{for(let a=0;a<t.length;a++){let i=t[a];ce.svs2analyst(i,e)}ce.debug.closestApproach/=t.length,f.x.log(`Average Approach: ${ce.debug.closestApproach}`)})).catch((e=>{f.x.debug(e)}))},svs2kps:e=>{let t=[];for(let a=0;a<e.length;a++)e[a].length<3||t.push(ce.sv2kp(e[a]));let a={max:{apogee:0,argPe:0,eccentricity:0,inclination:0,mo:0,perigee:0,period:0,raan:0,semiMajorAxis:0,ta:0,tl:0},min:{apogee:1e6,argPe:1e6,eccentricity:1e6,inclination:1e6,mo:1e6,perigee:1e6,period:1e6,raan:1e6,semiMajorAxis:1e6,ta:1e6,tl:1e6},avg:{apogee:0,argPe:0,eccentricity:0,inclination:0,mo:0,perigee:0,period:0,raan:0,semiMajorAxis:0,ta:0,tl:0}};for(let e=0;e<t.length;e++)t[e].apogee<a.min.apogee&&(a.min.apogee=t[e].apogee),t[e].apogee>a.max.apogee&&(a.max.apogee=t[e].apogee),a.avg.apogee+=t[e].apogee,t[e].argPe<a.min.argPe&&(a.min.argPe=t[e].argPe),t[e].argPe>a.max.argPe&&(a.max.argPe=t[e].argPe),a.avg.argPe+=t[e].argPe,t[e].eccentricity<a.min.eccentricity&&(a.min.eccentricity=t[e].eccentricity),t[e].eccentricity>a.max.eccentricity&&(a.max.eccentricity=t[e].eccentricity),a.avg.eccentricity+=t[e].eccentricity,t[e].inclination<a.min.inclination&&(a.min.inclination=t[e].inclination),t[e].inclination>a.max.inclination&&(a.max.inclination=t[e].inclination),a.avg.inclination+=t[e].inclination,t[e].mo<a.min.mo&&(a.min.mo=t[e].mo),t[e].mo>a.max.mo&&(a.max.mo=t[e].mo),a.avg.mo+=t[e].mo,t[e].perigee<a.min.perigee&&(a.min.perigee=t[e].perigee),t[e].perigee>a.max.perigee&&(a.max.perigee=t[e].perigee),a.avg.perigee+=t[e].perigee,t[e].period<a.min.period&&(a.min.period=t[e].period),t[e].period>a.max.period&&(a.max.period=t[e].period),a.avg.period+=t[e].period,t[e].raan<a.min.raan&&(a.min.raan=t[e].raan),t[e].raan>a.max.raan&&(a.max.raan=t[e].raan),a.avg.raan+=t[e].raan,t[e].semiMajorAxis<a.min.semiMajorAxis&&(a.min.semiMajorAxis=t[e].semiMajorAxis),t[e].semiMajorAxis>a.max.semiMajorAxis&&(a.max.semiMajorAxis=t[e].semiMajorAxis),a.avg.semiMajorAxis+=t[e].semiMajorAxis,t[e].ta<a.min.ta&&(a.min.ta=t[e].ta),t[e].ta>a.max.ta&&(a.max.ta=t[e].ta),a.avg.ta+=t[e].ta,t[e].tl<a.min.tl&&(a.min.tl=t[e].tl),t[e].tl>a.max.tl&&(a.max.tl=t[e].tl),a.avg.tl+=t[e].tl;return a.avg.apogee/=t.length,a.avg.argPe/=t.length,a.avg.eccentricity/=t.length,a.avg.inclination/=t.length,a.avg.mo/=t.length,a.avg.perigee/=t.length,a.avg.period/=t.length,a.avg.raan/=t.length,a.avg.semiMajorAxis/=t.length,a.avg.ta/=t.length,a.avg.tl/=t.length,a},debug:{closestApproach:0}},de=(e,t,a)=>{const i=ie.Sgp4.createSatrec(e,t);return g.$.getEci({satrec:i},a)},ue=({massPrimary:e,massSecondary:t,vector:a,massPrimaryU:i,massSecondaryU:s,vectorU:n,outputU:o,outputU2:l})=>{if(!a)throw new Error("vector is required");if(e<=0)throw new Error("massPrimary must be greater than 0");if(t<=0)throw new Error("massSecondary must be greater than 0");if(null!=n||(n="km"),"km"!==n&&"m"!==n)throw new Error('vectorU must be either "km" or "m"');const r="km"===n?1e3:1;let c=a[1]*r,d=a[2]*r,u=a[3]*r,p=a[4]*r,g=a[5]*r,h=a[6]*r;if(null!=s||(s="M_Earth"),"M_Earth"!==s)throw new Error("M_Earth is the only value currently supported.");if(t*=597378250603408e10,null!=i||(i="kg"),"kg"!==i)throw new Error("kg is the only value currently supported.");0===c&&(c=1e-15),0===d&&(d=1e-15),0===u&&(u=1e-15),0===p&&(p=1e-15),0===g&&(g=1e-15),0===h&&(h=1e-15);let b=m.fT*(e+t),v=Math.sqrt(c*c+d*d+u*u),f=Math.sqrt(p*p+g*g+h*h),S=1/(2/v-f*f/b),y=d*h-u*g,M=u*p-c*h,C=c*g-d*p,w=Math.sqrt(y*y+M*M+C*C),x=w*w/b,D=c*p+d*g+u*h,L=Math.sqrt(1-x/S),k=1-v/S,A=D/Math.sqrt(S*b),E=Math.acos(C/w),T=0;0!=E&&(T=pe(y,-M));let N=pe(w*D/(v*b),w*w/(v*b)-1),G=(c*Math.cos(T)+d*Math.sin(T))/v,I=0;I=0===E||E===oe?(d*Math.cos(T)-c*Math.sin(T))/v:u/(v*Math.sin(E));let P=pe(I,G)-N;P<0&&(P=le+P);let R=pe(A,k),O=R-L*Math.sin(R),F=P+N+T;for(;F>=le;)F-=le;const U=S*L;let _=S-U-("km"===n?6371:ne),B=S+U-("km"===n?6371:ne),z=le*Math.sqrt(S*S*S/(m.fT*(e+t)));return null!=o||(o="m"),S="km"===o?S/1e3:S,B="km"===o?B/1e3:B,_="km"===o?_/1e3:_,null!=l||(l="s"),z="m"===l?z/60:z,E*=re,T*=re,P*=re,O*=re,N*=re,F*=re,{semiMajorAxis:S,eccentricity:L,inclination:E,raan:T,argPe:P,mo:O,ta:N,tl:F,perigee:_,apogee:B,period:z}},pe=(e,t)=>{let a;return 0!=t?(a=Math.atan(e/t),t<0&&(a+=oe),t>0&&e<0&&(a+=le)):(e<0&&(a=-oe/2),0===e&&(a=0),e>0&&(a=oe/2)),a},ge=(e,t,a,i,s)=>(Math.floor(275*e/9)+t+((s/60+i)/60+a)/24).toFixed(5),me=(e,t)=>(null==e?void 0:e.length)<t?me("0"+e,t):e,he=ce,be=l.bD.html`The Initial Orbit Menu is used for generating TLEs using 1-3 state vectors.
<br><br>
Time is in unix time (seconds since 1970-01-01 00:00:00 UTC).
<br><br>
The first state vector is required. The second and third state vectors are optional.
`;let ve=!1;const fe=()=>{l.bD.register({event:"uiManagerInit",cbName:"initialOrbit",cb:Me}),l.bD.register({event:"uiManagerFinal",cbName:"initialOrbit",cb:Ce}),l.bD.register({event:"bottomMenuClick",cbName:"initialOrbit",cb:we}),l.bD.register({event:"hideSideMenus",cbName:"initialOrbit",cb:ye}),l.bD.register({event:"onHelpMenuClick",cbName:"initialOrbit",cb:Se})},Se=()=>!!ve&&(p.v.showAdvice("Initial Orbit Menu",be),!0),ye=()=>{(0,u.kW)((0,c.G)("obfit-menu"),1e3),(0,c.G)("menu-obfit").classList.remove("bmenu-item-selected"),ve=!1},Me=()=>{(0,c.G)("left-menus").insertAdjacentHTML("beforeend",l.bD.html`
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
  `),(0,c.G)("bottom-icons").insertAdjacentHTML("beforeend",l.bD.html`
    <div id="menu-obfit" class="bmenu-item">
      <img
        alt="obfit"
        src=""
        delayedsrc="${ae}" />
      <span class="bmenu-title">Initial Orbit</span>
      <div class="status-icon"></div>
    </div>
  `)},Ce=()=>{(0,c.G)("obfit-form").addEventListener("submit",(function(e){xe(e)}))},we=e=>{if("menu-obfit"===e){const e=l.bD.getUiManager();return ve?(ve=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.searchToggle(!1),e.hideSideMenus(),(0,u.$k)((0,c.G)("obfit-menu"),1e3),ve=!0,void(0,c.G)("menu-obfit").classList.add("bmenu-item-selected"))}},xe=e=>{const t=l.bD.getTimeManager(),a=l.bD.getUiManager();let i=!1,s=!1;const n=Le("obfit-t1"),o=Le("obfit-x1"),r=Le("obfit-y1"),c=Le("obfit-z1"),d=Le("obfit-xd1"),u=Le("obfit-yd1"),p=Le("obfit-zd1"),g=Le("obfit-t2"),m=Le("obfit-x2"),h=Le("obfit-y2"),b=Le("obfit-z2"),v=Le("obfit-xd2"),f=Le("obfit-yd2"),S=Le("obfit-zd2"),y=Le("obfit-t3"),M=Le("obfit-x3"),C=Le("obfit-y3"),w=Le("obfit-z3"),x=Le("obfit-xd3"),D=Le("obfit-yd3"),L=Le("obfit-zd3"),k=[];let A=[];if(isNaN(n))return a.toast("Time 1 is Invalid!","critical"),!1;if(isNaN(o))return a.toast("X 1 is Invalid!","critical"),!1;if(isNaN(r))return a.toast("Y 1 is Invalid!","critical"),!1;if(isNaN(c))return a.toast("Z 1 is Invalid!","critical"),!1;if(isNaN(d))return a.toast("X Dot 1 is Invalid!","critical"),!1;if(isNaN(u))return a.toast("Y Dot 1 is Invalid!","critical"),!1;if(isNaN(p))return a.toast("Z Dot 1 is Invalid!","critical"),!1;A=[n,o,r,c,d,u,p],k.push(A);const{isOb:E,sv:T}=De({isOb:i,obNum:2,t:g,x:m,y:h,z:b,xd:v,yd:f,zd:S,uiManagerInstance:a});i=E,k.push(T),s=!!i&&s;const{isOb:N,sv:G}=De({isOb:s,obNum:3,t:y,x:M,y:C,z:w,xd:x,yd:D,zd:L,uiManagerInstance:a});return s=N,k.push(G),he.svs2analyst(k,t),e.preventDefault(),!0},De=({isOb:e,obNum:t,t:a,x:i,y:s,z:n,xd:o,yd:l,zd:r,uiManagerInstance:c})=>{let d=[];return e&&isNaN(a)&&(e=!1,c.toast(`Time ${t} is Invalid!`,"caution")),e&&isNaN(i)&&(e=!1,c.toast(`X ${t} is Invalid!`,"caution")),e&&isNaN(s)&&(e=!1,c.toast(`Y ${t} is Invalid!`,"caution")),e&&isNaN(n)&&(e=!1,c.toast(`Z ${t} is Invalid!`,"caution")),e&&isNaN(o)&&(e=!1,c.toast(`X Dot ${t} is Invalid!`,"caution")),e&&isNaN(l)&&(e=!1,c.toast(`Y Dot ${t} is Invalid!`,"caution")),e&&isNaN(r)&&(e=!1,c.toast(`Z Dot ${t} is Invalid!`,"caution")),e&&(d=[a,i,s,n,o,l,r]),{isOb:e,sv:d}},Le=e=>{const t=(0,c.G)(e).value;return t.length>0?parseFloat(t):NaN},ke=a.p+"../img/missile.png",Ae=l.bD.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var Ee=a(4378);let Te=!1,Ne=!1,Ge=0;const Ie=()=>{if(void 0!==Ee.CC&&Ee.CC.missileArray.length>0){const e=l.bD.getOrbitManager();for(Ge=0;Ge<Ee.CC.missileArray.length;Ge++)e.updateOrbitBuffer(Ee.CC.missileArray[Ge].id)}},Pe=()=>{(0,u.kW)((0,c.G)("missile-menu"),1e3),(0,c.G)("menu-missile").classList.remove("bmenu-item-selected"),Te=!1},Re=e=>{if("menu-missile"===e){const e=l.bD.getUiManager();return Te?(Te=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.searchToggle(!1),e.hideSideMenus(),(0,u.$k)((0,c.G)("missile-menu"),1e3),(0,c.G)("menu-missile").classList.add("bmenu-item-selected"),void(Te=!0))}},Oe=()=>{0!==parseFloat((0,c.G)("ms-type").value)?(0,c.G)("ms-custom-opt").style.display="none":(0,c.G)("ms-custom-opt").style.display="block"},Fe=()=>{(0,c.G)("ms-error").style.display="none"},Ue=()=>{-1!==parseInt((0,c.G)("ms-target").value)?((0,c.G)("ms-tgt-holder-lat").style.display="none",(0,c.G)("ms-tgt-holder-lon").style.display="none"):((0,c.G)("ms-tgt-holder-lat").style.display="block",(0,c.G)("ms-tgt-holder-lon").style.display="block")},_e=()=>{(0,d.QP)((()=>{const e=l.bD.getTimeManager(),t=l.bD.getUiManager();(0,c.G)("ms-error").style.display="none";const a=parseFloat((0,c.G)("ms-type").value),i=parseFloat((0,c.G)("ms-attacker").value);let s=parseFloat((0,c.G)("ms-lat-lau").value),n=parseFloat((0,c.G)("ms-lon-lau").value);const o=parseFloat((0,c.G)("ms-target").value);let r=parseFloat((0,c.G)("ms-lat").value),d=parseFloat((0,c.G)("ms-lon").value);const u=e.selectedDate.getTime();let p="";if(1===a&&(p="simulation/Russia2USA.json",Ee.CC.MassRaidPre(u,p)),2===a&&(p="simulation/Russia2USAalt.json",Ee.CC.MassRaidPre(u,p)),3===a&&(p="simulation/China2USA.json",Ee.CC.MassRaidPre(u,p)),4===a&&(p="simulation/NorthKorea2USA.json",Ee.CC.MassRaidPre(u,p)),5===a&&(p="simulation/USA2Russia.json",Ee.CC.MassRaidPre(u,p)),6===a&&(p="simulation/USA2China.json",Ee.CC.MassRaidPre(u,p)),7===a&&(p="simulation/USA2NorthKorea.json",Ee.CC.MassRaidPre(u,p)),0!==a&&t.toast(`${p} Loaded`,"standby",!0),0===a){if(-1===o){if(isNaN(r))return t.toast("Invalid Target Latitude!","critical"),void((0,c.G)("loading-screen").style.display="none");if(isNaN(d))return t.toast("Invalid Target Longitude!","critical"),void((0,c.G)("loading-screen").style.display="none")}else r=Ee.CC.globalBMTargets[3*o],d=Ee.CC.globalBMTargets[3*o+1];if(Ne){if(isNaN(s))return t.toast("Invalid Launch Latitude!","critical"),void((0,c.G)("loading-screen").style.display="none");if(isNaN(n))return t.toast("Invalid Launch Longitude!","critical"),void((0,c.G)("loading-screen").style.display="none")}let e,a;const p=l.bD.getCatalogManager();if(i<200){e=i-100,a=500-Ee.CC.missilesInUse;let t=1200;100!=i&&(s=Ee.CC.UsaICBM[4*e],n=Ee.CC.UsaICBM[4*e+1],t=1100),Ee.CC.Missile(s,n,r,d,3,p.missileSats-a,u,Ee.CC.UsaICBM[4*e+2],30,2.9,.07,Ee.CC.UsaICBM[4*e+3],"United States",t)}else if(i<300){e=i-200,a=500-Ee.CC.missilesInUse;const t=1120;213!=i&&214!=i&&215!=i&&(s=Ee.CC.RussianICBM[4*e],n=Ee.CC.RussianICBM[4*e+1]),Ee.CC.Missile(s,n,r,d,3,p.missileSats-a,u,Ee.CC.RussianICBM[4*e+2],30,2.9,.07,Ee.CC.RussianICBM[4*e+3],"Russia",t)}else if(i<400){e=i-300,a=500-Ee.CC.missilesInUse;const t=1120;321!=i&&(s=Ee.CC.ChinaICBM[4*e],n=Ee.CC.ChinaICBM[4*e+1]),Ee.CC.Missile(s,n,r,d,3,p.missileSats-a,u,Ee.CC.ChinaICBM[4*e+2],30,2.9,.07,Ee.CC.ChinaICBM[4*e+3],"China",t)}else if(i<500){e=i-400,a=500-Ee.CC.missilesInUse;const t=1120;400!=i&&(s=Ee.CC.NorthKoreanBM[4*e],n=Ee.CC.NorthKoreanBM[4*e+1]),Ee.CC.Missile(s,n,r,d,3,p.missileSats-a,u,Ee.CC.NorthKoreanBM[4*e+2],30,2.9,.07,Ee.CC.NorthKoreanBM[4*e+3],"North Korea",t)}else if(i<600){e=i-500,a=500-Ee.CC.missilesInUse;const t=1e3;500!=i&&(s=Ee.CC.FraSLBM[4*e],n=Ee.CC.FraSLBM[4*e+1]),Ee.CC.Missile(s,n,r,d,3,p.missileSats-a,u,Ee.CC.FraSLBM[4*e+2],30,2.9,.07,Ee.CC.FraSLBM[4*e+3],"France",t)}else if(i<700){e=i-600,a=500-Ee.CC.missilesInUse;const t=1200;600!=i&&(s=Ee.CC.ukSLBM[4*e],n=Ee.CC.ukSLBM[4*e+1]),Ee.CC.Missile(s,n,r,d,3,p.missileSats-a,u,Ee.CC.ukSLBM[4*e+2],30,2.9,.07,Ee.CC.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(Ee.CC.lastMissileError,Ee.CC.lastMissileErrorType),t.doSearch("RV_")}(0,c.G)("loading-screen").style.display="none"}))},Be=()=>{(0,c.G)("left-menus").insertAdjacentHTML("beforeend",l.bD.html`
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
      `),(0,c.G)("bottom-icons").insertAdjacentHTML("beforeend",l.bD.html`
        <div id="menu-missile" class="bmenu-item">
          <img
            alt="missile"
            src="" delayedsrc=${ke}
          />
          <span class="bmenu-title">Missile</span>
          <div class="status-icon"></div>
        </div>
        `)},ze=()=>{l.bD.getUiManager().doSearch("RV_")},$e=()=>{(0,r.E)((0,c.G)("missile-menu")),(0,c.G)("missile").addEventListener("submit",(e=>{e.preventDefault(),_e()})),(0,c.G)("ms-attacker").addEventListener("change",Ve),(0,c.G)("ms-target").addEventListener("change",Ue),(0,c.G)("ms-error").addEventListener("click",Fe),(0,c.G)("missile").addEventListener("change",Oe),(0,c.G)("searchRvBtn").addEventListener("click",ze),Ve(),Ue()},He=()=>{l.bD.register({event:"uiManagerInit",cbName:"missile",cb:Be}),l.bD.register({event:"uiManagerFinal",cbName:"missile",cb:$e}),l.bD.register({event:"bottomMenuClick",cbName:"missile",cb:Re}),l.bD.register({event:"hideSideMenus",cbName:"missile",cb:Pe}),l.bD.register({event:"updateLoop",cbName:"updateMissileOrbits",cb:Ie}),l.bD.register({event:"onHelpMenuClick",cbName:"missile",cb:je})},je=()=>!!Te&&(p.v.showAdvice("Missile Menu",Ae),!0),Ve=()=>{Ne=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,c.G)("ms-attacker").value)&&(Ne=!0);Ne?((0,c.G)("ms-lau-holder-lat").style.display="block",(0,c.G)("ms-lau-holder-lon").style.display="block"):((0,c.G)("ms-lau-holder-lat").style.display="none",(0,c.G)("ms-lau-holder-lon").style.display="none")};a(2322);var Je=a(8120),Ke=a(4579),We=a(3845);const Xe=(e,t,a,i)=>{if(!t)return a;Je.JE(i)&&Je.B9(a);const s={config:{xAxis3D:"X",yAxis3D:"Y",zAxis3D:"Z"},configParameters:{}};a=Je.S1(i);const n=[{name:"X",index:0},{name:"Y",index:1},{name:"Z",index:2}],o=n.reduce((function(e,t){return e[t.name]=t.index,e}),{});let l=n.map((e=>e.name));return l=l.slice(2,l.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{s.configParameters[e]={options:l}})),a.setOption({tooltip:{},xAxis3D:{name:s.config.xAxis3D,type:"value"},yAxis3D:{name:s.config.yAxis3D,type:"value"},zAxis3D:{name:s.config.zAxis3D,type:"value"},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[s.config.xAxis3D,s.config.yAxis3D,s.config.yAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[o[s.config.xAxis3D]],t[o[s.config.yAxis3D]],t[o[s.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}),a},Ye=()=>{const e=[],t=l.bD.getCatalogManager();let a=t.getSat(t.selectedSat);e.push({name:a.name,value:We.c.getEcfOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))});const i=t.lastSelectedSat();return-1!==i&&(a=t.getSat(i),e.push({name:a.name,value:We.c.getEcfOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))})),e},Ze=(e,t,a,i)=>{if(!t)return a;Je.JE(i)&&Je.B9(a);const s={config:{xAxis3D:"X",yAxis3D:"Y",zAxis3D:"Z"},configParameters:{}};a=Je.S1(i);const n=[{name:"X",index:0},{name:"Y",index:1},{name:"Z",index:2}],o=n.reduce((function(e,t){return e[t.name]=t.index,e}),{});let l=n.map((e=>e.name));l=l.slice(2,l.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{s.configParameters[e]={options:l}}));const r=e.reduce(((e,t)=>{const a=t.value.reduce(((e,t)=>Math.min(e,t[0])),1/0),i=t.value.reduce(((e,t)=>Math.max(e,t[0])),-1/0),s=t.value.reduce(((e,t)=>Math.min(e,t[1])),1/0),n=t.value.reduce(((e,t)=>Math.max(e,t[1])),-1/0),o=t.value.reduce(((e,t)=>Math.min(e,t[2])),1/0),l=t.value.reduce(((e,t)=>Math.max(e,t[2])),-1/0),r=1e3*Math.round(Math.min(a,s,o)/1e3),c=1e3*Math.round(Math.max(i,n,l)/1e3),d=Math.max(c,Math.abs(r));return Math.max(e,d)}),0);return a.setOption({tooltip:{},xAxis3D:{name:s.config.xAxis3D,type:"value",min:-r,max:r},yAxis3D:{name:s.config.yAxis3D,type:"value",min:-r,max:r},zAxis3D:{name:s.config.zAxis3D,type:"value",min:-r,max:r},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[s.config.xAxis3D,s.config.yAxis3D,s.config.yAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[o[s.config.xAxis3D]],t[o[s.config.yAxis3D]],t[o[s.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}),a},qe=()=>{const e=[],t=l.bD.getCatalogManager();let a=t.getSat(t.selectedSat);e.push({name:a.name,value:We.c.getEciOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))});const i=t.lastSelectedSat();return-1!==i&&(a=t.getSat(i),e.push({name:a.name,value:We.c.getEciOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))})),e};var Qe=a(2349),et=a(2590),tt=a(6349),at=a(7368);const it=(e,t,a,i)=>{if(!t)return a;Je.JE(i)&&Je.B9(a);const s={config:{xAxis3D:"Radial",yAxis3D:"In-Track",zAxis3D:"Cross-Track"},configParameters:{}};a=Je.S1(i);const n=[{name:"Radial",index:0},{name:"In-Track",index:1},{name:"Cross-Track",index:2}],o=n.reduce((function(e,t){return e[t.name]=t.index,e}),{});let l=n.map((e=>e.name));return l=l.slice(2,l.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{s.configParameters[e]={options:l}})),a.setOption({title:{text:"RIC Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis3D:{name:s.config.xAxis3D,type:"value"},yAxis3D:{name:s.config.yAxis3D,type:"value"},zAxis3D:{name:s.config.zAxis3D,type:"value"},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[s.config.xAxis3D,s.config.yAxis3D,s.config.yAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[o[s.config.xAxis3D]],t[o[s.config.yAxis3D]],t[o[s.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}),a},st=()=>{const e=[],t=l.bD.getCatalogManager();if(-1===t.selectedSat||-1===t.secondarySat)return[];const a=t.getSat(t.selectedSat),i=t.secondarySatObj;return e.push({name:a.name,value:[[0,0,0]]}),e.push({name:i.name,value:We.c.getRicOfCurrentOrbit(i,a,500,5).map((e=>[e.x,e.y,e.z]))}),e},nt=a.p+"../img/line-plot.png",ot=a.p+"../img/scatter-plot.png",lt=a.p+"../img/scatter-plot2.png",rt=a.p+"../img/scatter-plot3.png",ct=a.p+"../img/scatter-plot4.png",dt=l.bD.html`
      <div id="menu-plot-analysis" class="bmenu-item bmenu-item-disabled">
        <img
          alt="ECI Plots"
          src="" delayedsrc=${lt}
        />
        <span class="bmenu-title">ECI Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis2" class="bmenu-item bmenu-item-disabled">
        <img
          alt="ECF Plots"
          src="" delayedsrc=${rt}
        />
        <span class="bmenu-title">ECF Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis3" class="bmenu-item bmenu-item-disabled">
        <img
          alt="RIC Plots"
          src="" delayedsrc=${ct}
        />
        <span class="bmenu-title">RIC Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis4" class="bmenu-item">
        <img
          alt="Inc v Lon Plots"
          src="" delayedsrc=${ot}
        />
        <span class="bmenu-title">Inc v Lon Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis5" class="bmenu-item">
        <img
          alt="Time v Lon Plots"
          src="" delayedsrc=${nt}
        />
        <span class="bmenu-title">Time v Lon Plots</span>
        <div class="status-icon"></div>
      </div>
      <div id="menu-plot-analysis6" class="bmenu-item">
        <img
          alt="Inc v Alt Plots"
          src="" delayedsrc=${ot}
        />
        <span class="bmenu-title">Inc v Alt Plots</span>
        <div class="status-icon"></div>
      </div>
    `;var ut=a(3379),pt=a.n(ut),gt=a(7795),mt=a.n(gt),ht=a(569),bt=a.n(ht),vt=a(3565),ft=a.n(vt),St=a(9216),yt=a.n(St),Mt=a(4589),Ct=a.n(Mt),wt=a(6880),xt={};xt.styleTagTransform=Ct(),xt.setAttributes=ft(),xt.insert=bt().bind(null,"head"),xt.domAPI=mt(),xt.insertStyleElement=yt(),pt()(wt.Z,xt),wt.Z&&wt.Z.locals&&wt.Z.locals;const Dt=l.bD.html`
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
    `,Lt=l.bD.html`The ECI Plot Menu is used for plotting the ECI position of a satellite over time.
`,kt=l.bD.html`The ECF Plot Menu is used for plotting the ECF position of a satellite over time.
`,At=l.bD.html`The RIC Plot Menu is used for plotting the RIC position of a satellite over time.
`,Et=l.bD.html`The Inc vs Lon Plot Menu is used for plotting the inclination vs longitude in the GEO belt.
`,Tt=l.bD.html`The Time vs Lon Plot Menu is used for plotting the time vs longitude in the GEO belt.
`,Nt=l.bD.html`The Inc vs Alt Plot Menu is used for plotting the inclination vs altitude.
`;let Gt,It,Pt,Rt,Ot,Ft,Ut=!1,_t=!1,Bt=!1,zt=!1,$t=!1,Ht=!1;const jt=()=>{l.bD.register({event:"uiManagerInit",cbName:"plotAnalysis",cb:()=>Jt()}),l.bD.register({event:"bottomMenuClick",cbName:"plotAnalysis",cb:e=>Kt(e)}),l.bD.register({event:"hideSideMenus",cbName:"plotAnalysis",cb:()=>ea()}),l.bD.register({event:"selectSatData",cbName:"plotAnalysis",cb:ta}),l.bD.register({event:"onHelpMenuClick",cbName:"plotAnalysis",cb:Vt})},Vt=()=>Ut?(p.v.showAdvice("ECI Plot Menu",Lt),!0):_t?(p.v.showAdvice("ECF Plot Menu",kt),!0):Bt?(p.v.showAdvice("RIC Plot Menu",At),!0):zt?(p.v.showAdvice("Inc vs Lon Plot Menu",Et),!0):$t?(p.v.showAdvice("Time vs Lon Plot Menu",Tt),!0):!!Ht&&(p.v.showAdvice("Inc vs Alt Plot Menu",Nt),!0),Jt=()=>{(0,c.G)("left-menus").insertAdjacentHTML("beforeend",Dt),(0,c.G)("bottom-icons").insertAdjacentHTML("beforeend",dt),(0,r.E)((0,c.G)("plot-analysis-menu"),{maxWidth:1200,minWidth:500}),(0,r.E)((0,c.G)("plot-analysis-menu2"),{maxWidth:1200,minWidth:500}),(0,r.E)((0,c.G)("plot-analysis-menu3"),{maxWidth:1200,minWidth:500})},Kt=e=>{switch(e){case"menu-plot-analysis":Wt();break;case"menu-plot-analysis2":Xt();break;case"menu-plot-analysis3":Yt();break;case"menu-plot-analysis4":Zt();break;case"menu-plot-analysis5":Qt();break;case"menu-plot-analysis6":qt()}},Wt=()=>{const e=l.bD.getCatalogManager(),t=l.bD.getUiManager();if(-1===e.selectedSat)return t.toast("Select a Satellite First!","caution"),void(0,Ke.l)((0,c.G)("menu-plot-analysis"));if(Ut)return t.hideSideMenus(),void(Ut=!1);{t.hideSideMenus(),(0,u.$k)((0,c.G)("plot-analysis-menu"),1e3),Ut=!0;const e=(0,c.G)("plot-analysis-chart");return Gt=Ze(qe(),Ut,Gt,e),setTimeout((()=>{Gt.resize()}),1e3),void(0,c.G)("menu-plot-analysis").classList.add("bmenu-item-selected")}},Xt=()=>{const e=l.bD.getCatalogManager(),t=l.bD.getUiManager();if(-1===e.selectedSat)return t.toast("Select a Satellite First!","caution"),void(0,Ke.l)((0,c.G)("menu-plot-analysis2"));if(_t)return t.hideSideMenus(),void(_t=!1);{t.hideSideMenus(),(0,u.$k)((0,c.G)("plot-analysis-menu2"),1e3),_t=!0;const e=(0,c.G)("plot-analysis-chart2");return It=Xe(Ye(),_t,It,e),setTimeout((()=>{It.resize()}),1e3),void(0,c.G)("menu-plot-analysis2").classList.add("bmenu-item-selected")}},Yt=()=>{const e=l.bD.getCatalogManager(),t=l.bD.getUiManager();if(-1===e.secondarySat)return t.toast("Select a Secondary Satellite First!","caution"),void(0,Ke.l)((0,c.G)("menu-plot-analysis3"));if(-1===e.selectedSat||-1===e.lastSelectedSat())return t.toast("Select a Primary Satellite First!","caution"),void(0,Ke.l)((0,c.G)("menu-plot-analysis3"));if(Bt)return t.hideSideMenus(),void(Bt=!1);{t.hideSideMenus(),(0,u.$k)((0,c.G)("plot-analysis-menu3"),1e3),Bt=!0;const e=(0,c.G)("plot-analysis-chart3");return Pt=it(st(),Bt,Pt,e),setTimeout((()=>{Pt.resize()}),1e3),void(0,c.G)("menu-plot-analysis3").classList.add("bmenu-item-selected")}},Zt=()=>{const e=l.bD.getUiManager();if(zt)return e.hideSideMenus(),void(zt=!1);{e.hideSideMenus(),(0,u.$k)((0,c.G)("plot-analysis-menu4"),1e3),zt=!0;const t=(0,c.G)("plot-analysis-chart4");return Je.JE(t)||(Rt=((e,t,a,i)=>t?(Je.JE(i)||((a=Je.S1(i)).on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&l.bD.getCatalogManager().selectSat(e.data.id)})),a.setOption({title:{text:"Inclination vs Longitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis:{name:"Longitude",type:"value",position:"bottom"},yAxis:{name:"Inclination",type:"value",position:"left"},zAxis:{name:"Period",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:65},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:65}],visualMap:[{left:"left",top:"10%",dimension:2,min:1240,max:1640,itemWidth:30,itemHeight:500,calculable:!0,precision:.05,text:["Period (minutes)"],textGap:30,textStyle:{color:"#fff"},inRange:{},outOfRange:{opacity:0,symbol:"none"},controller:{inRange:{color:["#41577c"]},outOfRange:{color:["#999"]}}}],series:e.map((e=>({type:"scatter",name:e.name,data:e.value.map((e=>({name:e[3],id:e[4],value:[e[1],e[0],e[2]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})),a):a)((()=>{const e=[],t=[],a=[],i=[];return l.bD.getCatalogManager().satData.forEach((s=>{if(s.TLE1&&s.type===et.g.PAYLOAD&&!(s.eccentricity>.1||s.period<1240||s.period>1640||s.inclination*m.I3>17))switch(s=l.bD.getCatalogManager().getSat(s.id,Qe.C_.POSITION_ONLY),(s=Object.assign(Object.assign({},s),at.x.eci2lla(s.position,l.bD.getTimeManager().simulationTimeObj))).country){case"United States of America":case"United States":case"US":return void t.push([s.inclination*m.I3,s.lon,s.period,s.name,s.id]);case"Russian Federation":case"CIS":case"Russia":return void a.push([s.inclination*m.I3,s.lon,s.period,s.name,s.id]);case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":return void e.push([s.inclination*m.I3,s.lon,s.period,s.name,s.id]);default:return void i.push([s.inclination*m.I3,s.lon,s.period,s.name,s.id])}})),[{name:"USA",value:t},{name:"Other",value:i},{name:"Russia",value:a},{name:"China",value:e}]})(),zt,Rt,t)),setTimeout((()=>{Rt.resize()}),1e3),void(0,c.G)("menu-plot-analysis4").classList.add("bmenu-item-selected")}},qt=()=>{const e=l.bD.getUiManager();if(Ht)return e.hideSideMenus(),void(Ht=!1);{e.hideSideMenus(),(0,u.$k)((0,c.G)("plot-analysis-menu6"),1e3),Ht=!0;const t=(0,c.G)("plot-analysis-chart6");return Je.JE(t)||(Ft=((e,t,a,i)=>t?(Je.JE(i)||((a=Je.S1(i)).on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&l.bD.getCatalogManager().selectSat(e.data.id)})),a.setOption({title:{text:"Inclination vs Altitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis:{name:"Inclination",type:"value",position:"bottom"},yAxis:{name:"Altitude",type:"value",position:"left"},zAxis:{name:"Period",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:65},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:65}],visualMap:[{left:"left",top:"10%",dimension:2,min:80,max:250,itemWidth:30,itemHeight:500,calculable:!0,precision:.05,text:["Period (min)"],textGap:30,textStyle:{color:"#fff"},inRange:{},outOfRange:{opacity:0,symbol:"none"},controller:{inRange:{color:["#41577c"]},outOfRange:{color:["#999"]}}}],series:e.map((e=>({type:"scatter",name:e.name,data:e.value.map((e=>({name:e[3],id:e[4],value:[e[1],e[0],e[2]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})),a):a)((()=>{const e=l.bD.getCatalogManager().satData,t=[],a=[],i=[],s=[];return e.forEach((e=>{if(!e.TLE1||e.type!==et.g.PAYLOAD)return;if(e.period>250)return;e=l.bD.getCatalogManager().getSat(e.id,Qe.C_.POSITION_ONLY);const n=l.bD.getTimeManager().simulationTimeObj;let o=(0,tt.J0)(n.getUTCFullYear(),n.getUTCMonth()+1,n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds());o+=n.getUTCMilliseconds()*m.c1;const r=ie.Sgp4.gstime(o);if(e=Object.assign(Object.assign({},e),ie.Transforms.eci2lla(e.position,r)),!(g.$.getAlt(e.position,r)<80))switch(e.country){case"United States of America":case"United States":case"US":return void a.push([g.$.getAlt(e.position,r),e.inclination*m.I3,e.period,e.name,e.id]);case"Russian Federation":case"CIS":case"RU":case"SU":case"Russia":return void i.push([g.$.getAlt(e.position,r),e.inclination*m.I3,e.period,e.name,e.id]);case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":case"PRC":case"CN":return void t.push([g.$.getAlt(e.position,r),e.inclination*m.I3,e.period,e.name,e.id]);default:return void s.push([g.$.getAlt(e.position,r),e.inclination*m.I3,e.period,e.name,e.id])}})),[{name:"USA",value:a},{name:"Other",value:s},{name:"Russia",value:i},{name:"China",value:t}]})(),Ht,Ft,t)),setTimeout((()=>{Ft.resize()}),1e3),void(0,c.G)("menu-plot-analysis6").classList.add("bmenu-item-selected")}},Qt=()=>{const e=l.bD.getUiManager();if($t)return e.hideSideMenus(),void($t=!1);{e.hideSideMenus(),(0,u.$k)((0,c.G)("plot-analysis-menu5"),1e3),$t=!0;const t=(0,c.G)("plot-analysis-chart5");return Je.JE(t)||(Ot=((e,t,a,i)=>t?(Je.JE(i)||((a=Je.S1(i)).on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&l.bD.getCatalogManager().selectSat(e.data.id)})),a.setOption({title:{text:"Time vs Longitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{},xAxis:{name:"Longitude",type:"value",position:"bottom"},yAxis:{name:"Time",type:"value",position:"left"},zAxis:{name:"Mean Motion",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:1440},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:1440}],series:e.map((e=>({type:"line",name:e.name,data:e.data.map((t=>({name:e.country,id:e.satId,value:[t[1],t[0]]}))),emphasis:{itemStyle:{color:"#fff"}}})))})),a):a)((()=>{const e=l.bD.getCatalogManager().satData,t=l.bD.getTimeManager().simulationTimeObj.getTime(),a=[];return e.forEach((e=>{if(!e.TLE1||e.type!==et.g.PAYLOAD)return;if(e.eccentricity>.1)return;if(e.period<1240)return;if(e.period>1640)return;switch(e.country){case"United States of America":case"United States":case"US":case"Russian Federation":case"CIS":case"Russia":case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":break;default:return}e=l.bD.getCatalogManager().getSat(e.id,Qe.C_.POSITION_ONLY);const i=We.c.getLlaOfCurrentOrbit(e,24),s=[];i.forEach((e=>{const a=(e.time-t)/1e3/60;a>1440||a<0||s.push([a,e.lon*m.I3])})),a.push({name:e.name,satId:e.id,country:e.country,data:s})})),a})(),$t,Ot,t)),setTimeout((()=>{Ot.resize()}),1e3),void(0,c.G)("menu-plot-analysis5").classList.add("bmenu-item-selected")}},ea=()=>{(0,u.kW)((0,c.G)("plot-analysis-menu"),1e3),(0,c.G)("menu-plot-analysis").classList.remove("bmenu-item-selected"),Ut=!1,(0,u.kW)((0,c.G)("plot-analysis-menu2"),1e3),(0,c.G)("menu-plot-analysis2").classList.remove("bmenu-item-selected"),_t=!1,(0,u.kW)((0,c.G)("plot-analysis-menu3"),1e3),(0,c.G)("menu-plot-analysis3").classList.remove("bmenu-item-selected"),Bt=!1,(0,u.kW)((0,c.G)("plot-analysis-menu4"),1e3),(0,c.G)("menu-plot-analysis4").classList.remove("bmenu-item-selected"),zt=!1,(0,u.kW)((0,c.G)("plot-analysis-menu5"),1e3),(0,c.G)("menu-plot-analysis5").classList.remove("bmenu-item-selected"),$t=!1,(0,u.kW)((0,c.G)("plot-analysis-menu6"),1e3),(0,c.G)("menu-plot-analysis6").classList.remove("bmenu-item-selected"),Ht=!1},ta=(e,t)=>{if(-1!==t){if(Ut){(0,c.G)("menu-plot-analysis").classList.add("bmenu-item-selected");const e=(0,c.G)("plot-analysis-chart");Gt=Ze(qe(),Ut,Gt,e)}if(_t){(0,c.G)("menu-plot-analysis2").classList.add("bmenu-item-selected");const e=(0,c.G)("plot-analysis-chart2");It=Xe(Ye(),_t,It,e)}if(-1!==l.bD.getCatalogManager().secondarySat&&Bt){(0,c.G)("menu-plot-analysis3").classList.add("bmenu-item-selected");const e=(0,c.G)("plot-analysis-chart3");Pt=it(st(),Bt,Pt,e)}}else ea()},aa=a.p+"../img/sat3.png";var ia=a(6156);class sa extends Q.c{constructor(){super("Satellite View"),this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=aa,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{l.bD.getMainCamera().cameraType===ia.i.SATELLITE?(l.bD.getUiManager().hideSideMenus(),l.bD.getMainCamera().cameraType=ia.i.FIXED_TO_SAT,(0,c.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")):-1!==l.bD.getCatalogManager().selectedSat?(l.bD.getMainCamera().cameraType=ia.i.SATELLITE,(0,c.G)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(l.bD.getUiManager().toast("Select a Satellite First!","caution"),(0,Ke.l)((0,c.G)(this.bottomIconElementName)))},this.lastLongAudioTime=0}}const na=new sa,oa=a.p+"../audio/beep1.mp3",la=a.p+"../audio/button.mp3",ra=a.p+"../audio/error.mp3",ca=a.p+"../audio/genericBeep1.mp3",da=a.p+"../audio/genericBeep2.mp3",ua=a.p+"../audio/genericBeep3.mp3",pa=a.p+"../audio/liftoff.mp3",ga=a.p+"../audio/pop.mp3",ma=a.p+"../audio/switch.mp3",ha=a.p+"../audio/toggle-off.mp3",ba=a.p+"../audio/toggle-on.mp3",va=a.p+"../audio/whoosh1.mp3",fa=a.p+"../audio/whoosh2.mp3",Sa=a.p+"../audio/whoosh3.mp3",ya=a.p+"../audio/whoosh4.mp3",Ma=a.p+"../audio/whoosh5.mp3",Ca=a.p+"../audio/whoosh6.mp3",wa=a.p+"../audio/whoosh7.mp3",xa=a.p+"../audio/whoosh8.mp3";var Da=a(8461);class La extends Q.c{constructor(){super("Sound Manager"),this.lastLongAudioTimne=0,this.isMute=!1,this.voices=[],this.sounds={standby:new Audio(ga),error:new Audio(ra),click:new Audio(ma),beep1:new Audio(oa),genericBeep1:new Audio(ca),genericBeep2:new Audio(da),genericBeep3:new Audio(ua),whoosh1:new Audio(va),whoosh2:new Audio(fa),whoosh3:new Audio(Sa),whoosh4:new Audio(ya),whoosh5:new Audio(Ma),whoosh6:new Audio(Ca),whoosh7:new Audio(wa),whoosh8:new Audio(xa),button:new Audio(la),toggleOn:new Audio(ba),toggleOff:new Audio(ha),liftoff:new Audio(pa)},this.addJs=()=>{super.addJs(),Da.I.registerSingleton(Qe.Yv.SoundManager,this),l.bD.register({event:"uiManagerInit",cbName:this.PLUGIN_NAME,cb:()=>{this.voices=speechSynthesis.getVoices()}})}}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter((function(e){return"Google UK English Female"==e.name}))[0],window.speechSynthesis.speak(t)}play(e){if("complete"===document.readyState){if(this.isMute)return;if((0,c.G)("loading-screen").classList.contains("fullscreen"))return;let t=1;switch(e){case"genericBeep":return t=Math.floor(3*Math.random())+1,void this.sounds[`genericBeep${t}`].play();case"whoosh":return t=Math.floor(8*Math.random())+1,void this.sounds[`whoosh${t}`].play();case"error":if(this.lastLongAudioTimne+12e5>Date.now())return;return this.lastLongAudioTimne=Date.now(),void this.sounds.error.play();default:return void this.sounds[e].play()}}}}const ka=new La;var Aa=a(6339),Ea=a(5661);const Ta=a.p+"../img/about.png";class Na extends Q.c{constructor(){super("About Menu"),this.bottomIconElementName="menu-about-icon",this.bottomIconImg=Ta,this.bottomIconLabel="About Menu",this.sideMenuElementName="about-menu",this.sideMenuElementHtml=l.bD.html`
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
`,this.helpTitle="About Menu",this.helpBody=l.bD.html`The About Menu is a place to find information about KeepTrack.
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
  `}}const Ga=new Na,Ia=a.p+"../img/constellation.png";var Pa=a(2972);const Ra=a.p+"../img/planetarium.png";class Oa extends Q.c{constructor(){super("Astronomy"),this.bottomIconElementName="menu-planetarium",this.bottomIconLabel="Planetarium View",this.bottomIconImg=Ra,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.bD.getDrawManager(),a=l.bD.getUiManager();if(this.isMenuButtonEnabled){if(!this.verifySensorSelected())return;l.bD.getMainCamera().cameraType=ia.i.PLANETARIUM;try{(0,c.G)("cspocAllSensor").style.display="none",(0,c.G)("mwAllSensor").style.display="none",(0,c.G)("mdAllSensor").style.display="none",(0,c.G)("llAllSensor").style.display="none",(0,c.G)("rusAllSensor").style.display="none",(0,c.G)("prcAllSensor").style.display="none"}catch(e){}Pa.j.change("planetarium"),l.bD.getCatalogManager().isStarManagerLoaded&&l.bD.getStarManager().clearConstellations(),null===(e=l.bD.getPlugin(Ua))||void 0===e||e.setBottomIconToUnselected()}else l.bD.getMainCamera().isPanReset=!0,l.bD.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,t.glInit(),a.hideSideMenus(),l.bD.getOrbitManager().clearInViewOrbit(),l.bD.getMainCamera().cameraType=ia.i.DEFAULT}}addJs(){super.addJs(),l.bD.register({event:"setSensor",cbName:this.PLUGIN_NAME,cb:e=>{e?((0,c.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,c.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}const Fa=new Oa;class Ua extends Q.c{constructor(){super(Ua.PLUGIN_NAME),this.bottomIconElementName="menu-astronomy",this.bottomIconLabel="Astronomy View",this.bottomIconImg=Ia,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.bD.getCatalogManager(),a=l.bD.getOrbitManager(),i=l.bD.getDrawManager(),s=l.bD.getUiManager();if(this.isMenuButtonEnabled){if(!this.verifySensorSelected())return;t.isStarManagerLoaded&&l.bD.getStarManager().drawAllConstellations(),a.clearInViewOrbit(),l.bD.getMainCamera().cameraType=ia.i.ASTRONOMY,Pa.j.change("astronomy"),null===(e=l.bD.getPlugin(Oa))||void 0===e||e.setBottomIconToUnselected()}else l.bD.getMainCamera().isPanReset=!0,l.bD.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,i.glInit(),s.hideSideMenus(),l.bD.getMainCamera().cameraType=ia.i.DEFAULT,Pa.j.change("default"),t.isStarManagerLoaded&&l.bD.getStarManager().clearConstellations(),(0,c.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}}addJs(){super.addJs(),l.bD.register({event:l.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,c.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,c.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}Ua.PLUGIN_NAME="Astronomy";const _a=new Ua,Ba=a.p+"../img/breakup.png";var za,$a,Ha=a(2575);!function(e){e[e.MeanAnomaly=1]="MeanAnomaly",e[e.RightAscensionOfAscendingNode=2]="RightAscensionOfAscendingNode",e[e.ArgumentOfPerigee=3]="ArgumentOfPerigee"}(za||(za={})),function(e){e[e.Near=0]="Near",e[e.Success=1]="Success",e[e.Error=2]="Error",e[e.Far=3]="Far"}($a||($a={}));class ja{constructor(e,t,a,i,s,n,o){this.sat=e,this.now=s,this.goalLat=t,this.goalLon=a,this.goalDirection=i,this.newMeana=null,this.newArgPer=null,this.goalAlt=n||null,this.raanOffset=o||0,this.lastLat=null,this.currentDirection=null,this.argPerCalcResults=null,this.meanACalcResults=null,this.raanCalcResults=null}rotateOrbitToLatLon(){return this.parseTle(),this.meanACalcResults=this.meanACalcLoop(this.meanACalcResults,this.now,this.goalDirection),this.meanACalcResults!==$a.Success?["Error","Failed to find a solution for Mean Anomaly"]:this.goalAlt>0&&this.argPerCalcLoop()!==$a.Success?["Error","Failed to find a solution for Argument of Perigee"]:(this.raanCalcResults=this.raanCalcLoop(this.raanCalcResults,this.raanOffset,this.now),this.raanCalcResults!==$a.Success?["Error","Failed to find a solution for Right Ascension of Ascending Node"]:[this.sat.TLE1,this.sat.TLE2])}argPerCalcLoop(){this.meanACalcResults=$a.Near;for(let e=0;e<3600;e+=1){let t=10*parseFloat(this.argPer)-100+e;if(t>3600&&(t-=3600),this.argPerCalcResults=this.argPerCalc(t.toString(),this.now),this.argPerCalcResults===$a.Success&&this.meanACalcResults===$a.Success&&this.currentDirection===this.goalDirection)break;if(this.argPerCalcResults===$a.Far&&(e+=49),this.argPerCalcResults===$a.Error)return $a.Error;if(this.meanACalcResults=this.meanACalcLoop2(),this.meanACalcResults===$a.Success)if(this.currentDirection!==this.goalDirection)e+=20;else if(this.argPerCalcResults===$a.Success)break;if(e=this.meanACalcResults===$a.Far?e+100:e,this.meanACalcResults===$a.Error)return $a.Error}return this.argPerCalcResults}meanACalcLoop2(){for(let e=0;e<5200;e+=1){if(this.meanACalcResults=this.meanACalc(e,this.now),this.meanACalcResults===$a.Success){if(this.currentDirection===this.goalDirection)break;e+=20}if(e=this.meanACalcResults===$a.Far?e+100:e,this.meanACalcResults===$a.Error)return $a.Error}return this.meanACalcResults}parseTle(){this.intl=this.sat.TLE1.substring(9,17),this.epochyr=this.sat.TLE1.substring(18,20),this.epochday=this.sat.TLE1.substring(20,32),this.meanmo=this.sat.TLE2.substring(52,63),this.argPer=Ha.J.pad0((this.sat.argPe*m.I3).toFixed(4),8),this.inc=Ha.J.pad0((this.sat.inclination*m.I3).toFixed(4),8),this.ecen=this.sat.eccentricity.toFixed(7).substring(2,9),this.TLE1Ending=this.sat.TLE1.substring(32,71)}meanACalcLoop(e,t,a){for(let i=0;i<5200;i+=1){if((e=this.meanACalc(i,t))===$a.Success){if(this.currentDirection===a)break;i+=20}e===$a.Far&&(i+=100)}return e}raanCalcLoop(e,t,a){for(let i=0;i<52e3&&(e=this.raanCalc(i,t,a))!==$a.Success;i+=1)e===$a.Far&&(i+=1e3);return e}meanACalc(e,t){const a=this.sat;let i=a.satrec||ie.Sgp4.createSatrec(a.TLE1,a.TLE2);e/=10;const s=Ha.J.pad0(e.toFixed(4),8),n=Ha.J.pad0((a.raan*m.I3).toFixed(4),8),o=this.newArgPer?Ha.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):Ha.J.pad0((a.argPe*m.I3).toFixed(4),8),l=a.TLE1.substr(32,39),r="1 "+a.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+l,c="2 "+a.sccNum+" "+this.inc+" "+n+" "+this.ecen+" "+o+" "+s+" "+this.meanmo+"    10";i=ie.Sgp4.createSatrec(r,c);const d=this.getOrbitByLatLonPropagate(t,i,za.MeanAnomaly);return d===$a.Success&&(a.TLE1=r,a.TLE2=c,this.newMeana=s),d}getOrbitByLatLonPropagate(e,t,a){const{m:i,gmst:s}=g.$.calculateTimeVariables(e,t),n=ie.Sgp4.propagate(t,i).position;if(isNaN(n.x)||isNaN(n.y)||isNaN(n.z))return $a.Error;const o=ie.Transforms.eci2lla(n,s);let{lat:l,lon:r,alt:c}=o;const d=ie.Transforms.getDegLat(l),u=ie.Transforms.getDegLon(r);if(this.lastLat=this.lastLat?this.lastLat:d,a===za.MeanAnomaly){if(d===this.lastLat)return 0;d>this.lastLat&&(this.currentDirection="N"),d<this.lastLat&&(this.currentDirection="S"),this.lastLat=d}return a===za.MeanAnomaly&&d>this.goalLat-ja.MAX_LAT_ERROR&&d<this.goalLat+ja.MAX_LAT_ERROR||a===za.RightAscensionOfAscendingNode&&u>this.goalLon-ja.MAX_LON_ERROR&&u<this.goalLon+ja.MAX_LON_ERROR||a===za.ArgumentOfPerigee&&c>this.goalAlt-ja.MAX_ALT_ERROR&&c<this.goalAlt+ja.MAX_ALT_ERROR?$a.Success:(a!==za.MeanAnomaly||d>this.goalLat-11&&d<this.goalLat+11)&&(a!==za.RightAscensionOfAscendingNode||u>this.goalLon-11&&u<this.goalLon+11)?a===za.ArgumentOfPerigee&&(c<this.goalAlt-100||c>this.goalAlt+100)?$a.Far:$a.Near:$a.Far}raanCalc(e,t,a){const i=e;e=(e/=100)>360?e-360:e;const s=Ha.J.pad0(e.toFixed(4),8),n=this.newArgPer?Ha.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):Ha.J.pad0((this.sat.argPe*m.I3).toFixed(4),8),o="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,l="2 "+this.sat.sccNum+" "+this.inc+" "+s+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10",r=ie.Sgp4.createSatrec(o,l),c=this.getOrbitByLatLonPropagate(a,r,za.RightAscensionOfAscendingNode);if(c===$a.Success){e=(e=(e=i/100+t)>360?e-360:e)<0?e+360:e;const a=Ha.J.pad0(e.toFixed(4),8),s="2 "+this.sat.sccNum+" "+this.inc+" "+a+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10";this.sat.TLE1=o,this.sat.TLE2=s}return c}argPerCalc(e,t){const a=this.newMeana,i=Ha.J.pad0((this.sat.raan*m.I3).toFixed(4),8);e=Ha.J.pad0((parseFloat(e)/10).toFixed(4),8);const s="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,n="2 "+this.sat.sccNum+" "+this.inc+" "+i+" "+this.ecen+" "+e+" "+a+" "+this.meanmo+"    10",o=ie.Sgp4.createSatrec(s,n),l=this.getOrbitByLatLonPropagate(t,o,za.ArgumentOfPerigee);return l===$a.Success&&(this.sat.TLE1=s,this.sat.TLE2=n,this.newArgPer=e),l}}ja.MAX_LAT_ERROR=.1,ja.MAX_LON_ERROR=.1,ja.MAX_ALT_ERROR=30;var Va=a(266);class Ja extends Q.c{constructor(){super(Ja.PLUGIN_NAME),this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=Ba,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=l.bD.getCatalogManager().getSat(l.bD.getCatalogManager().selectedSat,Qe.C_.EXTRA_ONLY);if((null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_)return f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=l.bD.html`
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
  </div>`,this.helpTitle="Breakup Menu",this.helpBody=l.bD.html`The Breakup Menu is a tool for simulating the breakup of a satellite.
  <br><br>
  By modifying duplicating and modifying a satellite's orbit we can model the breakup of a satellite.
  After selecting a satellite and opening the menu, the user can select:
  <ul style="margin-left: 40px;">
    <li>Inclination Variation</li>
    <li>RAAN Variation</li>
    <li>Period Variation</li>
    <li>Number of Breakup Pieces</li>
  </ul>
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`}updateSccNumInMenu_(){if(!this.isMenuButtonEnabled)return;const e=l.bD.getCatalogManager().getSat(l.bD.getCatalogManager().selectedSat,Qe.C_.EXTRA_ONLY);(0,c.G)("hc-scc").value=e.sccNum}addHtml(){super.addHtml(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,c.G)("breakup").addEventListener("submit",(e=>{e.preventDefault(),(0,d.QP)((()=>this.onSubmit()))}))}}),l.bD.register({event:l.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.sccNum)?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonEnabled&&(this.closeSideMenu(),f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&this.updateSccNumInMenu_()):(this.isMenuButtonEnabled&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}onSubmit(){const e=l.bD.getTimeManager(),t=l.bD.getCatalogManager();let a=t.getIdFromObjNum(parseInt((0,c.G)("hc-scc").value));const i=t.getSat(a),s=i,n=at.x.eci2lla(i.position,e.simulationTimeObj),o=n.lat,r=n.lon,d=e.simulationTimeObj,u=g.$.getDirection(i,e.simulationTimeObj);"Error"===u&&f.x.warn("Cannot calculate direction of satellite. Try again later.");const p=Va.l.currentEpoch(d);if(i.TLE1=i.TLE1.substr(0,18)+p[0]+p[1]+i.TLE1.substr(32),l.bD.getMainCamera().isAutoPitchYawToTarget=!1,i.apogee-i.perigee>this.maxDifApogeeVsPerigee_)return void f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const m=i.apogee-i.perigee<300?0:n.alt;let h=new ja(i,o,r,u,d,m).rotateOrbitToLatLon();const b=h[0],v=h[1];t.satCruncher.postMessage({typ:"satEdit",id:a,TLE1:b,TLE2:v});const S=l.bD.getOrbitManager();S.changeOrbitBufferData(a,b,v);const y=parseFloat((0,c.G)("hc-per").value),M=parseFloat((0,c.G)("hc-inc").value),C=parseFloat((0,c.G)("hc-raan").value),w=parseInt((0,c.G)("hc-count").value),x=15e-5,D=i.eccentricity;let L=0;for(let l=0;l<=4&&!(L>=w);l++){a=t.getIdFromObjNum(9e4+L),t.getSat(a);let c=s;const p=-C/2+C*(l/4),m=i.apogee-i.perigee<300?0:n.alt;let h=new ja(c,o,r,u,d,m,p).rotateOrbitToLatLon();if("Error"===h[0]&&(h=new ja(c,o,r,u,new Date(d.getTime()+1),m,p).rotateOrbitToLatLon(),"Error"===h[0]))return void f.x.error(new Error(h[1]),"breakup.ts","Error creating breakup!");let b=h[0],k=h[1];for(;L<(l+1)*w/4;L++){let i=parseFloat(v.substr(8,8));i=i+Math.random()*M*2-M;const s=Ha.J.pad0(i.toFixed(4),8);if(8!==s.length)throw new Error(`Inclination length is not 8 - ${s} - ${v}`);c.eccentricity=D,c.eccentricity+=Math.random()*x*2-x;let n=parseFloat(k.substr(52,10));n=n+Math.random()*y*2-y;const o=Ha.J.pad0(n.toFixed(8),11);if(11!==o.length)throw new Error(`meanmo length is not 11 - ${o} - ${k}`);if(a=t.getIdFromObjNum(8e4+L),b=`1 ${8e4+L}`+b.substr(7),k=`2 ${8e4+L} ${s} ${k.substr(17,35)}${o}${k.substr(63)}`,69!==b.length)throw new Error(`Invalid TLE1: length is not 69 - ${b}`);if(69!==k.length)throw new Error(`Invalid TLE1: length is not 69 - ${k}`);let l;c=t.getSat(a),c.TLE1=b,c.TLE2=k,c.active=!0,c.satrec=null;try{l=ie.Sgp4.createSatrec(b,k)}catch(e){return void f.x.error(e,"breakup.ts","Error creating breakup!")}g.$.altitudeCheck(l,e.simulationTimeObj)>1?(t.satCruncher.postMessage({typ:"satEdit",id:a,TLE1:b,TLE2:k}),S.changeOrbitBufferData(a,b,k)):f.x.warn("Breakup Generator Failed")}}l.bD.getUiManager().doSearch(`${i.sccNum},Analyst`)}}Ja.PLUGIN_NAME="Breakup";const Ka=new Ja;class Wa{static getColors(e){let t,a;switch(e){case"Top Secret//SCI":t="#fce93a",a="black";break;case"Top Secret":t="#ff8c00",a="black";break;case"Secret":t="#ff0000",a="white";break;case"Confidential":t="#0033a0",a="white";break;case"CUI":t="#512b85",a="white";break;case"Unclassified":t="#007a33",a="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:a}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class Xa extends Q.c{constructor(){super("Classification"),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateClassificationString(e=this.classificationString_,t="#ffffff",a="#000000"){this.isClassificationContainerLoaded_||this.loadClassificationContainer_(),""===e?((0,c.G)("classification-container").style.display="none",this.updateTopMenuHeight_(!1)):((0,c.G)("classification-container").style.display="flex",this.updateTopMenuHeight_(!0)),(0,c.G)("classification-string").innerHTML=e;const i=(0,c.G)("classification-container");if(i.style.fontWeight="500",Wa.isValidClassification(e)){const i=Wa.getColors(e);t=i.backgroundColor,a=i.color}i.style.backgroundColor=t,i.style.color=a,this.classificationString_=e}addHtml(){super.addHtml(),l.bD.register({event:"uiManagerInit",cbName:this.PLUGIN_NAME,cb:this.uiManagerInit_.bind(this)})}loadClassificationContainer_(){const e=document.createElement("div");e.innerHTML=l.bD.html`<span id="classification-string"></span>`,e.id="classification-container",e.style.cssText="\n      height: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      ",(0,c.G)("keeptrack-main-container").insertBefore(e,(0,c.G)("keeptrack-main-container").firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr&&(this.loadClassificationContainer_(),this.updateClassificationString())}updateTopMenuHeight_(e){if(this.isExpanded_===e)return;let t=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(t)&&(t=0),document.documentElement.style.setProperty("--top-menu-height",t+(e?20:-20)+"px"),this.isExpanded_=e}}const Ya=new Xa,Za=a.p+"../img/socrates.png";class qa extends Q.c{constructor(){super(qa.PLUGIN_NAME),this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=Za,this.bottomIconLabel="Collisions",this.sideMenuElementName="socrates-menu",this.sideMenuElementHtml=l.bD.html`
  <div id="socrates-menu" class="side-menu-parent start-hidden text-select">
    <div id="socrates-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible collisions</h5>
        <table id="socrates-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=l.bD.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.socratesOnSatCruncher=null,this.collisionList=[],this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&this.parseCollisionData_()}}uiManagerFinal(){(0,c.G)("socrates-menu").addEventListener("click",(e=>{(0,d.QP)((()=>{const t=e.target.parentElement;if(!t.classList.contains("socrates-object"))return;const a=t.attributes.hiddenrow.value;null!==a&&this.eventClicked_(a)}))}))}addJs(){super.addJs(),l.bD.register({event:"uiManagerFinal",cbName:"collisions",cb:this.uiManagerFinal.bind(this)}),l.bD.register({event:"onCruncherMessage",cbName:"collisions",cb:()=>{null!==this.socratesOnSatCruncher&&(l.bD.getCatalogManager().setSelectedSat(this.socratesOnSatCruncher),this.socratesOnSatCruncher=null)}})}parseCollisionData_(){0===this.collisionList.length&&fetch("./SOCRATES.html").then((e=>{e.text().then((e=>{const t=(new DOMParser).parseFromString(e,"text/html");this.processSocratesHtm(t),0===this.collisionList.length&&f.x.warn("No collisions data found!")}))}))}eventClicked_(e){const t=new Date;l.bD.getTimeManager().changeStaticOffset(this.collisionList[e].toca.getTime()-t.getTime()-3e4),l.bD.getMainCamera().isAutoPitchYawToTarget=!1,l.bD.getUiManager().doSearch(`${this.collisionList[e].sat1},${this.collisionList[e].sat2}`);const a=l.bD.getCatalogManager();this.socratesOnSatCruncher=a.getIdFromObjNum(parseInt(this.collisionList[e].sat1))}processSocratesHtm(e){try{const t=e.getElementsByClassName("center outline")[0],a=Array.from(t.getElementsByTagName("tr")).filter((e=>!e.classList.contains("header"))),i=a.map((e=>Array.from(e.getElementsByTagName("td")))).map((e=>e.map((e=>e.innerText))));for(let e=0;e<i.length;e+=2){const t={sat1:i[e][1],sat2:i[e+1][1],toca:new Date(i[e][4]),minRng:parseFloat(i[e][5]),maxProb:parseFloat(i[e+1][5]),relSpeed:parseFloat(i[e][6])};this.collisionList.push(t)}const s=(0,c.G)("socrates-table");s.innerHTML="";let n=s.insertRow(),o=n.insertCell();o.appendChild(document.createTextNode("TOCA")),o.setAttribute("style","text-decoration: underline");let l=n.insertCell();l.appendChild(document.createTextNode("#1")),l.setAttribute("style","text-decoration: underline");let r=n.insertCell();r.appendChild(document.createTextNode("#2")),r.setAttribute("style","text-decoration: underline");let d=n.insertCell();d.appendChild(document.createTextNode("Probability")),d.setAttribute("style","text-decoration: underline");for(let e=0;e<this.collisionList.length;e++)n=s.insertRow(),n.setAttribute("class","socrates-object link"),n.setAttribute("hiddenrow",e.toString()),o=n.insertCell(),o.appendChild(document.createTextNode(this.collisionList[e].toca.toISOString().slice(0,19).replace("T"," "))),l=n.insertCell(),l.appendChild(document.createTextNode(this.collisionList[e].sat1)),r=n.insertCell(),r.appendChild(document.createTextNode(this.collisionList[e].sat2)),d=n.insertCell(),d.appendChild(document.createTextNode(this.collisionList[e].minRng.toString()))}catch(e){f.x.warn("Error parsing SOCRATES data!")}}}qa.PLUGIN_NAME="collisions";const Qa=new qa,ei=a.p+"../img/colors.png";var ti=a(3825);class ai extends Q.c{constructor(){super(ai.PLUGIN_NAME),this.bottomIconImg=ei,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=l.bD.html`
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
  </div>`,this.helpTitle="Colors Menu",this.helpBody=l.bD.html`The Colors Menu is a place to change the color theme used to render the objects.
<br><br>
The various themes can change the colors based on the objects' orbits, objects' characteristics, or the objects' relation to sun and/or earth.
`,this.rmbL1ElementName="colors-rmb",this.rmbL1Html=l.bD.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Color Scheme &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.rmbMenuOrder=50,this.rmbL2ElementName="colors-rmb-menu",this.rmbL2Html=l.bD.html`
  <ul class='dropdown-contents'>
    <li id="colors-default-rmb"><a href="#">Object Types</a></li>
    <li id="colors-rcs-rmb"><a href="#">Radar Cross Section</a></li>
    <li id="colors-density-rmb"><a href="#">Orbit Density</a></li>
    <li id="colors-sunlight-rmb"><a href="#">Sunlight Status</a></li>
    <li id="colors-country-rmb"><a href="#">Country</a></li>
    <li id="colors-velocity-rmb"><a href="#">Velocity</a></li>
    <li id="colors-ageOfElset-rmb"><a href="#">Age of Elset</a></li>
  </ul>`,this.rmbCallback=e=>{try{super.rmbCallback(e)}catch(e){}switch(e){case"colors-default-rmb":ai.colorsMenuClick("default");break;case"colors-rcs-rmb":ai.colorsMenuClick("rcs");break;case"colors-density-rmb":ai.colorsMenuClick("neighbors");break;case"colors-sunlight-rmb":ai.colorsMenuClick("sunlight");break;case"colors-country-rmb":ai.colorsMenuClick("countries");break;case"colors-velocity-rmb":ai.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":ai.colorsMenuClick("elset-age")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{document.getElementById("colors-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){const e=this.dataset.color;ai.colorsMenuClick(e)}))}))}})}}ai.PLUGIN_NAME="Color Menu",ai.colorsMenuClick=e=>{const t=l.bD.getCatalogManager(),a=l.bD.getColorSchemeManager(),i=l.bD.getUiManager();switch(t.setSelectedSat(-1),"sunlight"!==e&&t.satCruncher.postMessage({isSunlightView:!1}),e){case"default":Pa.j.change("default"),a.setColorScheme(a.default,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"velocity":Pa.j.change("velocity"),a.setColorScheme(a.velocity,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"sunlight":t.satCruncher.postMessage({isSunlightView:!0}),Pa.j.change("sunlight"),i.colorSchemeChangeAlert(a.sunlight),(0,ti.J)(t.satCruncher,(()=>{a.setColorScheme(a.sunlight,!0)}),(e=>e.satInSun));break;case"near-earth":Pa.j.change("near"),a.setColorScheme(a.leo,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"deep-space":Pa.j.change("deep"),a.setColorScheme(a.geo,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"elset-age":(0,d.QP)((()=>{Pa.j.change("ageOfElset"),a.setColorScheme(a.ageOfElset,!0),i.colorSchemeChangeAlert(a.currentColorScheme)}));break;case"lost-objects":(0,c.G)("search").value="",(0,d.QP)((()=>{settingsManager.lostSatStr="",a.setColorScheme(a.lostobjects,!0),(0,c.G)("search").value=settingsManager.lostSatStr,i.colorSchemeChangeAlert(a.currentColorScheme),i.doSearch((0,c.G)("search").value)}));break;case"rcs":Pa.j.change("rcs"),a.setColorScheme(a.rcs,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"smallsats":Pa.j.change("small"),a.setColorScheme(a.smallsats,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"neighbors":Pa.j.change("neighbors"),a.setColorScheme(a.neighbors,!0),i.colorSchemeChangeAlert(a.currentColorScheme);break;case"countries":Pa.j.change("countries"),null!==l.bD.getGroupsManager().selectedGroup?a.setColorScheme(a.groupCountries,!0):a.setColorScheme(a.countries,!0),i.colorSchemeChangeAlert(a.currentColorScheme)}l.bD.getUiManager().hideSideMenus()};const ii=new ai;var si=a(9522);class ni extends Q.c{constructor(){super("Debris Screening"),this.bottomIconCallback=()=>{if(this.verifySatelliteSelected()&&this.isMenuButtonEnabled){const e=l.bD.getCatalogManager(),t=e.getSat(e.selectedSat,Qe.C_.EXTRA_ONLY);(0,c.G)(`${this.formPrefix_}-scc`).value=t.sccNum}},this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=Ta,this.bottomIconLabel="Debris Screening",this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=l.bD.html`
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
`,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.helpTitle="Debris Screening",this.helpBody=l.bD.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=l.bD.html`<img src="${Ta}" />
  `}addJs(){super.addJs(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,c.G)(`${this.sideMenuElementName}-form`).addEventListener("submit",(e=>{e.preventDefault(),(0,d.QP)((()=>this.onFormSubmit()))})),(0,c.G)(`${this.sideMenuElementName}-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,d.QP)((()=>this.onVisClick()))})),(0,c.G)(`${this.sideMenuElementName}-clear-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,d.QP)((()=>ni.onClearVisClick()))}))}}),l.bD.register({event:l.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled()}})}onVisClick(){const e=l.bD.getDrawManager(),t=parseFloat((0,c.G)(`${this.formPrefix_}-u`).value),a=parseFloat((0,c.G)(`${this.formPrefix_}-v`).value),i=parseFloat((0,c.G)(`${this.formPrefix_}-w`).value);e.sceneManager.searchBox.setCubeSize(t,a,i)}static onClearVisClick(){l.bD.getDrawManager().sceneManager.searchBox.setCubeSize(0,0,0)}onFormSubmit(){let e=l.bD.getCatalogManager().getIdFromObjNum(parseInt((0,c.G)(`${this.formPrefix_}-scc`).value));const t=parseFloat((0,c.G)(`${this.formPrefix_}-u`).value),a=parseFloat((0,c.G)(`${this.formPrefix_}-v`).value),i=parseFloat((0,c.G)(`${this.formPrefix_}-w`).value),s=parseFloat((0,c.G)(`${this.formPrefix_}-time`).value),n=l.bD.getCatalogManager().getSat(e,Qe.C_.SKIP_POS_VEL),o=l.bD.getCatalogManager().satData.filter((e=>!(!e.satrec||e.perigee>n.apogee||n.perigee>e.apogee))).map((e=>e.id));let r=0,d=[];for(let e=0;e<60*s;e++){r=1e3*e*60;const s=l.bD.getTimeManager().getOffsetTimeObj(r),{m:c}=g.$.calculateTimeVariables(s,n.satrec),u=ie.Sgp4.propagate(n.satrec,c);for(let e=0;e<o.length;e++){const n=l.bD.getCatalogManager().getSat(o[e],Qe.C_.SKIP_POS_VEL);if(!n||!n.satrec)continue;const{m:r}=g.$.calculateTimeVariables(s,n.satrec),c=ie.Sgp4.propagate(n.satrec,r);if(!c){o.splice(e,1);break}const p=at.x.sat2ric({position:u.position,velocity:u.velocity},{position:c.position,velocity:c.velocity});if(Math.abs(p.position[0])<t&&Math.abs(p.position[1])<a&&Math.abs(p.position[2])<i){console.log(`${n.sccNum} at ${new Date(s)}`),d.push(n.sccNum),o.splice(e,1);break}}}d=d.filter(((e,t,a)=>a.indexOf(e)===t));const u=d.join(",");u.replace(/,\s*$/u,""),l.bD.getUiManager().doSearch(u)}}const oi=new ni;var li=a(769);const ri=a.p+"../img/gps.png";var ci=a(4032),di=a.n(ci),ui=a(2658);class pi{static calculateDops(e){let t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},a=e.length;if(a<4)return t;const i=di().rep([a,4],0);for(let t=1;t<=a;t++){const{az:a,el:s}=e[t-1],n=[Math.cos(s*m.qW)*Math.sin(a*m.qW),Math.cos(s*m.qW)*Math.cos(a*m.qW),Math.sin(s*m.qW),1];di().setBlock(i,[t-1,0],[t-1,3],[n])}const s=di().dot(di().transpose(i),i),n=di().inv(s),o=Math.sqrt(n[0][0]+n[1][1]+n[2][2]),l=Math.sqrt(n[0][0]+n[1][1]),r=Math.sqrt(n[0][0]+n[1][1]+n[2][2]+n[3][3]),c=Math.sqrt(n[2][2]),d=Math.sqrt(n[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,a,i,s,n=10){if(void 0===a||void 0===i)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};let o=a*m.qW,l=i*m.qW;null!=s||(s=0);const{gmst:r}=g.$.calculateTimeVariables(e);let c=[];return t.forEach((e=>{const t=ie.Transforms.ecf2rae({lon:l,lat:o,alt:s},ie.Transforms.eci2ecf(e.position,r)),a={az:t.az*m.I3,el:t.el*m.I3};a.el>n&&c.push(a)})),pi.calculateDops(c)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");let t=(0,c.G)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let a=t.insertRow(),i=a.insertCell();i.appendChild(document.createTextNode("Time"));let s=a.insertCell();s.appendChild(document.createTextNode("HDOP"));let n=a.insertCell();n.appendChild(document.createTextNode("PDOP"));let o=a.insertCell();o.appendChild(document.createTextNode("GDOP"));for(let l of e)a=t.insertRow(),i=a.insertCell(),i.appendChild(document.createTextNode((0,ui.v)(l.time,"isoDateTime",!0))),s=a.insertCell(),s.appendChild(document.createTextNode(l.dops.hdop)),n=a.insertCell(),n.appendChild(document.createTextNode(l.dops.pdop)),o=a.insertCell(),o.appendChild(document.createTextNode(l.dops.gdop))}static getDopsList(e,t,a,i,s,n){let o=[];for(let l=0;l<1440;l++){const r=e(60*l*m.s9);let c=pi.getDops(r,t,a,i,s,n);o.push({time:r,dops:c})}return o}}class gi extends Q.c{constructor(){super(gi.PLUGIN_NAME),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=ri,this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&(0,d.QP)(gi.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=l.bD.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
    <br><br>
    HDOP is the Horizontal Dilution of Precision. It is a measure of the accuracy of the horizontal position.
    <br><br>
    PDOP is the Position Dilution of Precision. It is a measure of the accuracy of the position.
    <br><br>
    GDOP is the Geometric Dilution of Precision. It is a measure of the accuracy of the position.
  `,this.sideMenuElementName="dops-menu",this.sideMenuElementHtml=l.bD.html`
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
  </div>`,this.rmbL1ElementName="dops-rmb",this.rmbL1Html=l.bD.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">DOPs &#x27A4;</a></li>
`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbL2ElementName="dops-rmb-menu",this.rmbL2Html=l.bD.html`
  <ul class='dropdown-contents'>
    <li id="dops-curdops-rmb"><a href="#">Current GPS DOPs</a></li>
    <li id="dops-24dops-rmb"><a href="#">24 Hour GPS DOPs</a></li>
  </ul>
`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=l.bD.getInputManager().mouse.latLon;const a=l.bD.getInputManager().mouse.dragPosition;(void 0===e||isNaN(e.lat)||isNaN(e.lon))&&(console.debug("latLon undefined!"),e=at.x.eci2lla({x:a[0],y:a[1],z:a[2]},l.bD.getTimeManager().simulationTimeObj));const i=gi.getGpsSats(l.bD.getCatalogManager(),l.bD.getGroupsManager());var t=pi.getDops(l.bD.getTimeManager().simulationTimeObj,i,e.lat,e.lon,0,settingsManager.gpsElevationMask);l.bD.getUiManager().toast(`HDOP: ${t.hdop}<br/>VDOP: ${t.vdop}<br/>PDOP: ${t.pdop}<br/>GDOP: ${t.gdop}<br/>TDOP: ${t.tdop}`,"normal",!0);break}case"dops-24dops-rmb":{const e=l.bD.getInputManager().mouse.latLon;if(this.isMenuButtonEnabled){(0,d.QP)(gi.updateSideMenu),this.setBottomIconToEnabled();break}(0,c.G)("dops-lat").value=e.lat.toFixed(3),(0,c.G)("dops-lon").value=e.lon.toFixed(3),(0,c.G)("dops-alt").value="0",(0,c.G)("dops-el").value=settingsManager.gpsElevationMask.toString(),l.bD.methods.bottomMenuClick(this.bottomIconElementName)}}}}addJs(){super.addJs(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,c.G)("dops-form").addEventListener("submit",(e=>{e.preventDefault(),gi.updateSideMenu()}))}})}static updateSideMenu(){const e=l.bD.getGroupsManager(),t=l.bD.getCatalogManager(),a=l.bD.getTimeManager(),i=parseFloat((0,c.G)("dops-lat").value),s=parseFloat((0,c.G)("dops-lon").value),n=parseFloat((0,c.G)("dops-alt").value),o=parseFloat((0,c.G)("dops-el").value);settingsManager.gpsElevationMask=o;const r=gi.getGpsSats(t,e),d=pi.getDopsList((e=>a.getOffsetTimeObj(e)),r,i,s,n,o);pi.updateDopsTable(d)}static getGpsSats(e,t){var a,i;const s=null!==(a=(i=t.groupList).GPSGroup)&&void 0!==a?a:i.GPSGroup=t.createGroup(Z.Y.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),n=[];return s.objects.forEach((t=>{const a=e.getSat(t);n.push(a)})),n}}gi.PLUGIN_NAME="DOPs Plugin";const mi=new gi,hi=a.p+"../img/edit.png";var bi=a(4790);class vi extends Q.c{constructor(){super(vi.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=l.bD.html`The Edit Satellite Menu is used to edit the satellite data.
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
    </ul>`,this.sideMenuElementName="editSat-menu",this.sideMenuElementHtml=l.bD.html`
    <div id="editSat-menu" class="side-menu-parent start-hidden text-select">
      <div id="editSat-content" class="side-menu">
        <div class="row">
          <h5 class="center-align">Edit Satellite</h5>
          <form id="editSat">
            <div class="input-field col s12">
              <input disabled value="AAAAA" id="${vi.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${vi.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${vi.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${vi.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${vi.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${vi.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${vi.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${vi.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${vi.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${vi.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${vi.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${vi.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${vi.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${vi.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${vi.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${vi.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${vi.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${vi.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${vi.elementPrefix}-per" class="active">Period</label>
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
        <div id="${vi.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=hi,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&vi.populateSideMenu()},this.dragOptions={isDraggable:!0},this.rmbL1ElementName="edit-rmb",this.rmbL1Html=l.bD.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Edit Sat &#x27A4;</a></li>`,this.rmbCallback=(e,t)=>{if(null==t)throw new Error("clickedSat is undefined");const a=l.bD.getUiManager();l.bD.getCatalogManager().setSelectedSat(t),this.isMenuButtonEnabled||a.bottomIconPress({id:"menu-editSat"})},this.rmbL2ElementName="edit-rmb-menu",this.rmbL2Html=l.bD.html`
    <ul class='dropdown-contents'>
      <li id="edit-sat-rmb"><a href="#">Edit Satellite</a></li>
      <li id="set-sec-sat-rmb"><a href="#">Set as Secondary Sat</a></li>
    </ul>`}addHtml(){super.addHtml(),l.bD.register({event:l.RL.uiManagerFinal,cbName:"editSat",cb:()=>{(0,c.G)("editSat-newTLE").addEventListener("click",vi.editSatNewTleClick),(0,c.G)("editSat").addEventListener("submit",(function(e){e.preventDefault(),vi.editSatSubmit()})),(0,c.G)(`${vi.elementPrefix}-per`).addEventListener("change",(function(){const e=(0,c.G)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,c.G)("es-meanmo").value=t.toFixed(8)})),(0,c.G)(`${vi.elementPrefix}-meanmo`).addEventListener("change",(function(){const e=(0,c.G)(`${vi.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,c.G)(`${vi.elementPrefix}-per`).value=t})),(0,c.G)("editSat-save").addEventListener("click",vi.editSatSaveClick),(0,c.G)("editSat-open").addEventListener("click",(function(){(0,c.G)("editSat-file").click()})),(0,c.G)("editSat-file").addEventListener("change",(function(e){window.FileReader&&(vi.doReaderActions(e),e.preventDefault())})),(0,c.G)(`${vi.elementPrefix}-error`).addEventListener("click",(function(){(0,c.G)(`${vi.elementPrefix}-error`).style.display="none"}))}})}static doReaderActions(e){try{const t=new FileReader;t.onload=vi.readerOnLoad,t.readAsText(e.target.files[0])}catch(e){f.x.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad(e){if(2!==e.target.readyState)return;if(e.target.error)return void f.x.warn("Error while reading file!");const t=l.bD.getTimeManager(),a=l.bD.getOrbitManager(),i=l.bD.getUiManager(),s=JSON.parse(e.target.result),n=parseInt(Ha.J.pad0(s.TLE1.substr(2,5).trim(),5)),o=l.bD.getCatalogManager().getIdFromObjNum(n),r=l.bD.getCatalogManager().getSat(o,Qe.C_.EXTRA_ONLY);let c;try{c=ie.Sgp4.createSatrec(s.TLE1,s.TLE2)}catch(e){return void f.x.error(e,"edit-sat.ts","Error creating satellite record!")}g.$.altitudeCheck(c,t.simulationTimeObj)>1?(l.bD.getCatalogManager().satCruncher.postMessage({typ:"satEdit",id:r.id,active:!0,TLE1:s.TLE1,TLE2:s.TLE2}),a.changeOrbitBufferData(r.id,s.TLE1,s.TLE2),r.active=!0):i.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static populateSideMenu(){const e=l.bD.getCatalogManager().getSat(l.bD.getCatalogManager().selectedSat,Qe.C_.EXTRA_ONLY);(0,c.G)(`${vi.elementPrefix}-scc`).value=e.sccNum;const t=Ha.J.pad0((e.inclination*m.I3).toFixed(4),8);(0,c.G)(`${vi.elementPrefix}-inc`).value=Ha.J.pad0(t,8),(0,c.G)(`${vi.elementPrefix}-year`).value=e.TLE1.substr(18,2),(0,c.G)(`${vi.elementPrefix}-day`).value=e.TLE1.substr(20,12),(0,c.G)(`${vi.elementPrefix}-meanmo`).value=e.TLE2.substr(52,11),(0,c.G)(`${vi.elementPrefix}-per`).value=(1440/parseFloat(e.TLE2.substr(52,11))).toFixed(4);const a=Ha.J.pad0((e.raan*m.I3).toFixed(4),8);(0,c.G)(`${vi.elementPrefix}-rasc`).value=Ha.J.pad0(a,8),(0,c.G)(`${vi.elementPrefix}-ecen`).value=e.eccentricity.toFixed(7).substr(2,7);const i=Ha.J.pad0((e.argPe*m.I3).toFixed(4),8);(0,c.G)(`${vi.elementPrefix}-argPe`).value=Ha.J.pad0(i,8),(0,c.G)(`${vi.elementPrefix}-meana`).value=e.TLE2.substr(43,8)}static editSatNewTleClick(){(0,d.QP)(vi.editSatNewTleClickFadeIn)}static editSatNewTleClickFadeIn(){const e=l.bD.getTimeManager(),t=l.bD.getUiManager();try{const a=l.bD.getCatalogManager().getIdFromObjNum(parseInt((0,c.G)(`${vi.elementPrefix}-scc`).value)),i=l.bD.getCatalogManager().getSat(a),s=at.x.eci2lla(i.position,e.simulationTimeObj);let n=s.lon,o=s.lat,r=s.alt;const d=g.$.getDirection(i,e.simulationTimeObj);"Error"===d&&t.toast("Cannot calculate direction of satellite. Try again later.","caution");const u=e.simulationTimeObj,p=Va.l.currentEpoch(u);let h;i.TLE1=i.TLE1.substr(0,18)+p[0]+p[1]+i.TLE1.substr(32),l.bD.getMainCamera().isAutoPitchYawToTarget=!1,h=i.apogee-i.perigee<300?new ja(i,o,n,d,u).rotateOrbitToLatLon():new ja(i,o,n,d,u,r).rotateOrbitToLatLon();const b=h[0],v=h[1];if("Error"===b)return void t.toast(`${v}`,"critical",!0);l.bD.getCatalogManager().satCruncher.postMessage({typ:"satEdit",id:a,TLE1:b,TLE2:v}),l.bD.getOrbitManager().changeOrbitBufferData(a,b,v);const f=l.bD.getCatalogManager().getSat(l.bD.getCatalogManager().selectedSat,Qe.C_.EXTRA_ONLY);(0,c.G)(`${vi.elementPrefix}-scc`).value=f.sccNum;const S=Ha.J.pad0((f.inclination*m.I3).toFixed(4),8);(0,c.G)(`${vi.elementPrefix}-inc`).value=Ha.J.pad0(S,8),(0,c.G)(`${vi.elementPrefix}-year`).value=f.TLE1.substr(18,2),(0,c.G)(`${vi.elementPrefix}-day`).value=f.TLE1.substr(20,12),(0,c.G)(`${vi.elementPrefix}-meanmo`).value=f.TLE2.substr(52,11),(0,c.G)(`${vi.elementPrefix}-per`).value=(1440/parseFloat(f.TLE2.substr(52,11))).toFixed(4);const y=Ha.J.pad0((f.raan*m.I3).toFixed(4),8);(0,c.G)(`${vi.elementPrefix}-rasc`).value=Ha.J.pad0(y,8),(0,c.G)(`${vi.elementPrefix}-ecen`).value=f.eccentricity.toFixed(7).substr(2,7);const M=Ha.J.pad0((f.argPe*m.I3).toFixed(4),8);(0,c.G)(`${vi.elementPrefix}-argPe`).value=Ha.J.pad0(M,8),(0,c.G)(`${vi.elementPrefix}-meana`).value=f.TLE2.substr(43,8)}catch(e){f.x.warn(e)}}static editSatSubmit(){const e=l.bD.getCatalogManager(),t=l.bD.getTimeManager(),a=l.bD.getUiManager();(0,c.G)(`${vi.elementPrefix}-error`).style.display="none";const i=(0,c.G)(`${vi.elementPrefix}-scc`).value,s=e.getIdFromObjNum(parseInt(i));null===s&&f.x.info("Not a Real Satellite");const n=e.getSat(s,Qe.C_.EXTRA_ONLY),o=n.TLE1.substr(9,8);let r=(0,c.G)(`${vi.elementPrefix}-inc`).value,d=(0,c.G)(`${vi.elementPrefix}-meanmo`).value,u=(0,c.G)(`${vi.elementPrefix}-rasc`).value;const p=(0,c.G)(`${vi.elementPrefix}-ecen`).value;let m=(0,c.G)(`${vi.elementPrefix}-argPe`).value,h=(0,c.G)(`${vi.elementPrefix}-meana`).value;const b=(0,c.G)(`${vi.elementPrefix}-year`).value,v=(0,c.G)(`${vi.elementPrefix}-day`).value,{TLE1:S,TLE2:y}=bi.L.createTle({sat:n,inc:r,meanmo:d,rasc:u,argPe:m,meana:h,ecen:p,epochyr:b,epochday:v,intl:o,scc:i});let M;try{M=ie.Sgp4.createSatrec(S,y)}catch(e){return void f.x.error(e,"edit-sat.ts","Error creating satellite record!")}g.$.altitudeCheck(M,t.simulationTimeObj)>1?(e.satCruncher.postMessage({typ:"satEdit",id:s,active:!0,TLE1:S,TLE2:y}),l.bD.getOrbitManager().changeOrbitBufferData(s,S,y),n.active=!0,n.satrec=null):a.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static editSatSaveClick(e){const t=l.bD.getCatalogManager();try{const e=(0,c.G)(`${vi.elementPrefix}-scc`).value,a=t.getIdFromObjNum(parseInt(e)),i=t.getSat(a,Qe.C_.EXTRA_ONLY),s={TLE1:i.TLE1,TLE2:i.TLE2},n=JSON.stringify(s),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,v.saveAs)(o,e+".tle")}catch(e){}e.preventDefault()}}vi.PLUGIN_NAME="Edit Sat",vi.elementPrefix="es";const fi=new vi,Si=a.p+"../img/find2.png";var yi=a(5561),Mi=a(5326);class Ci extends Q.c{static checkAz(e,t,a){return e.filter((e=>e.az>=t&&e.az<=a))}static checkEl(e,t,a){return e.filter((e=>e.el>=t&&e.el<=a))}static checkInview(e){const t=l.bD.getDotsManager();return e.filter((e=>1===t.inViewData[e.id]))}static checkObjtype(e,t){return e.filter((e=>e.type===t))}static checkRange(e,t,a){return e.filter((e=>e.rng>=t&&e.rng<=a))}static limitPossibles(e,t){const a=l.bD.getUiManager();return e.length>=t&&a.toast(`Too many results, limited to ${t}`,"serious"),e.slice(0,t)}static searchSats(e){let{az:t,el:a,rng:i,countryCode:s,inc:n,azMarg:o,elMarg:r,rngMarg:d,incMarg:u,period:p,periodMarg:g,rcs:m,rcsMarg:h,objType:b,raan:v,raanMarg:f,argPe:S,argPeMarg:y,bus:M,shape:C,payload:w}=e;const x=!isNaN(t)&&isFinite(t),D=!isNaN(a)&&isFinite(a),L=!isNaN(i)&&isFinite(i),k=!isNaN(n)&&isFinite(n),A=!isNaN(v)&&isFinite(v),E=!isNaN(S)&&isFinite(S),T=!isNaN(p)&&isFinite(p),N=!isNaN(m)&&isFinite(m),G="All"!==s,I="All"!==M,P="All"!==C,R="All"!==w;if(o=!isNaN(o)&&isFinite(o)?o:5,r=!isNaN(r)&&isFinite(r)?r:5,d=!isNaN(d)&&isFinite(d)?d:200,u=!isNaN(u)&&isFinite(u)?u:1,g=!isNaN(g)&&isFinite(g)?g:.5,h=!isNaN(h)&&isFinite(h)?h:m/10,f=!isNaN(f)&&isFinite(f)?f:1,y=!isNaN(y)&&isFinite(y)?y:1,!(D||L||x||k||T||N||E||A||G||I||P||R))throw new Error("No Search Criteria Entered");let O=l.bD.getCatalogManager().getSatsFromSatData().filter((e=>!e.static&&!e.missile&&e.active)).map((e=>{var t;const a=l.bD.getSensorManager();if((null===(t=a.currentSensors)||void 0===t?void 0:t.length)>0){const t=Mi.J.getTearr(e,a.currentSensors);return Object.assign(Object.assign({},e),{az:t.az,el:t.el,rng:t.rng,inView:t.inView})}return e}));O=k||T||!(x||D||L)?O:Ci.checkInview(O),O=0!==b?Ci.checkObjtype(O,b):O,x&&(O=Ci.checkAz(O,t-o,t+o)),D&&(O=Ci.checkEl(O,a-r,a+r)),L&&(O=Ci.checkRange(O,i-d,i+d)),k&&(O=Ci.checkInc(O,n-u,n+u)),A&&(O=Ci.checkRaan(O,v-f,v+f)),E&&(O=Ci.checkArgPe(O,S-y,S+y)),T&&(O=Ci.checkPeriod(O,p-g,p+g)),N&&(O=Ci.checkRcs(O,m-h,m+h)),"All"!==s&&(O=O.filter((e=>s.split("|").includes(e.country)))),"All"!==M&&(O=O.filter((e=>e.bus===M))),"All"!==C&&(O=O.filter((e=>e.shape===C))),"All"!==w&&(O=O.filter((e=>{var t,a,i;return(null===(i=null===(a=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===a?void 0:a.split("-")[0])||void 0===i?void 0:i.replace(/[^a-zA-Z]/gu,""))===w}))),O=Ci.limitPossibles(O,settingsManager.searchLimit);let F="";return O.forEach(((e,t)=>{F+=t<O.length-1?`${e.sccNum},`:`${e.sccNum}`})),(0,c.G)("search").value=F,l.bD.getUiManager().doSearch((0,c.G)("search").value),O}findByLooksSubmit(){return e=this,t=void 0,i=function*(){const e=l.bD.getUiManager(),t=parseFloat((0,c.G)("fbl-azimuth").value),a=parseFloat((0,c.G)("fbl-elevation").value),i=parseFloat((0,c.G)("fbl-range").value),s=parseFloat((0,c.G)("fbl-inc").value),n=parseFloat((0,c.G)("fbl-period").value),o=parseFloat((0,c.G)("fbl-rcs").value),r=parseFloat((0,c.G)("fbl-azimuth-margin").value),d=parseFloat((0,c.G)("fbl-elevation-margin").value),u=parseFloat((0,c.G)("fbl-range-margin").value),p=parseFloat((0,c.G)("fbl-inc-margin").value),g=parseFloat((0,c.G)("fbl-period-margin").value),m=parseFloat((0,c.G)("fbl-rcs-margin").value),h=parseInt((0,c.G)("fbl-type").value),b=parseFloat((0,c.G)("fbl-raan").value),v=parseFloat((0,c.G)("fbl-raan-margin").value),f=parseFloat((0,c.G)("fbl-argPe").value),S=parseFloat((0,c.G)("fbl-argPe-margin").value),y=(0,c.G)("fbl-country").value,M=(0,c.G)("fbl-bus").value,C=(0,c.G)("fbl-payload").value,w=(0,c.G)("fbl-shape").value;(0,c.G)("search").value="";try{const l={az:t,el:a,rng:i,inc:s,azMarg:r,elMarg:d,rngMarg:u,incMarg:p,period:n,periodMarg:g,rcs:o,rcsMarg:m,objType:h,raan:b,raanMarg:v,argPe:f,argPeMarg:S,countryCode:y,bus:M,payload:C,shape:w};this.lastResults=Ci.searchSats(l),0===this.lastResults.length&&e.toast("No Satellites Found","critical")}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered","critical")}},new((a=void 0)||(a=Promise))((function(s,n){function o(e){try{r(i.next(e))}catch(e){n(e)}}function l(e){try{r(i.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}r((i=i.apply(e,t||[])).next())}));var e,t,a,i}addJs(){super.addJs(),l.bD.register({event:"uiManagerInit",cbName:"findSat",cb:()=>{(0,c.G)("fbl-error").addEventListener("click",(function(){(0,c.G)("fbl-error").style.display="none"}))}}),l.bD.register({event:"uiManagerFinal",cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}constructor(){super(Ci.PLUGIN_NAME),this.lastResults=[],this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=l.bD.html`
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
  </div>`,this.bottomIconElementName="menu-find-sat",this.bottomIconImg=Si,this.bottomIconLabel="Find Satellite",this.helpTitle="Find Satellite Menu",this.helpBody=l.bD.html`The Find Satellite Menu is used for finding satellites by orbital parameters or satellite characteristics.
<br><br>
For most parameters, you type in the target value on the left and then a margin of error on the right.
For example, if you wanted to find all satellites in a 51-52 degree inclination, you can type 51.5 in the left box and 0.5 in the right box.
The search will then find all satellites within those inclinations and display them in the search bar.
`}printLastResults(){f.x.info(this.lastResults.map((e=>e.name)).join("\n"))}uiManagerFinal(){const e=l.bD.getCatalogManager().getSatsFromSatData();(0,c.G)("findByLooks-form").addEventListener("submit",(e=>{e.preventDefault(),(0,d.QP)((()=>{this.findByLooksSubmit(),(0,d.Zk)()}))})),(0,h.d)(e.filter((e=>e.bus)).map((e=>e.bus))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,c.G)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})),yi.hA.forEach((e=>{(0,c.G)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${yi.cs[e]}">${e}</option>`)})),(0,h.d)(e.filter((e=>e.shape)).map((e=>e.shape))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,c.G)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}));const t=e.filter((e=>e.payload)).map((e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,""))).filter((e=>e.length>=3));(0,h.d)(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{""!==e&&e.length>3&&(0,c.G)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}))}static checkArgPe(e,t,a){return e.filter((e=>e.argPe*m.I3<a&&e.argPe*m.I3>t))}static checkInc(e,t,a){return e.filter((e=>e.inclination*m.I3<a&&e.inclination*m.I3>t))}static checkPeriod(e,t,a){return e.filter((e=>e.period>t&&e.period<a))}static checkRaan(e,t,a){return e.filter((e=>e.raan*m.I3<a&&e.raan*m.I3>t))}static checkRcs(e,t,a){return e.filter((e=>parseFloat(e.R)>t&&parseFloat(e.R)<a))}}Ci.PLUGIN_NAME="findSat";const wi=new Ci;class xi{constructor(){this.PLUGIN_NAME="Gamepad",this.deadzone=.55,this.buttonsPressedHistory=[],this.buttonsPressed=[]}init(){window.addEventListener("gamepadconnected",(e=>{settingsManager.cruncherReady?this.initializeGamepad(e.gamepad):l.bD.register({event:l.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>this.initializeGamepad(e.gamepad)})})),window.addEventListener("gamepaddisconnected",(()=>{l.bD.getUiManager().toast("Gamepad disconnected","critical"),this.currentController=null}))}initializeGamepad(e){l.bD.getUiManager().toast("Gamepad connected","normal"),this.currentController||l.bD.register({event:l.RL.updateLoop,cbName:this.PLUGIN_NAME,cb:this.updateGamepad.bind(this)}),this.currentController=e}updateGamepad(e){null!=e||(e=0);const t=xi.getController(e);null!==t&&(this.currentController=t,this.updateZoom_(),this.updateLeftStick_(),this.updateRightStick_(),this.updateButtons_())}updateButtons_(){this.currentController.buttons.forEach(((e,t)=>{if(e.pressed&&!this.buttonsPressed[t])switch(this.buttonsPressed[t]=!0,this.buttonsPressedHistory.push(t),this.buttonsPressedHistory.length>8&&this.buttonsPressedHistory.shift(),t){case 0:this.btnA_();break;case 1:this.btnB_();break;case 2:this.btnX_();break;case 3:this.btnY_();break;case 4:this.btnLeftBumper();break;case 5:this.btnRightBumper_();break;case 8:this.btnHome_();break;case 9:this.btnStart_();break;case 10:this.btnLeftStick_();break;case 11:this.btnRightStick_();break;case 12:this.btnDpadUp_();break;case 13:this.btnDpadDown_();break;case 14:this.btnDpadLeft_();break;case 15:this.btnDpadRight_();break;case 16:this.btnXbox()}else!e.pressed&&this.buttonsPressed[t]&&(this.buttonsPressed[t]=!1)}))}btnA_(){settingsManager.isLimitedGamepadControls||(console.log("A"),l.bD.getCatalogManager().selectSat(l.bD.getHoverManager().hoveringSat))}btnB_(){settingsManager.isLimitedGamepadControls||(console.log("B"),l.bD.getCatalogManager().selectSat(-1),l.bD.getMainCamera().zoomTarget=.8)}btnX_(){settingsManager.isLimitedGamepadControls||(console.log("X"),l.bD.getMainCamera().autoRotate())}btnY_(){console.log("Y")}btnLeftBumper(){if(settingsManager.isLimitedGamepadControls)return;console.log("Left Bumper");const e=l.bD.getCatalogManager(),t=e.selectedSat-1;if(t>=0)e.selectSat(t);else{const t=e.satData.filter((e=>e.TLE1&&e.active)),a=t[t.length-1].id;e.selectSat(a)}}btnRightBumper_(){if(settingsManager.isLimitedGamepadControls)return;console.log("Right Bumper");const e=l.bD.getCatalogManager(),t=e.satData.filter((e=>e.TLE1&&e.active)),a=t[t.length-1].id,i=e.selectedSat+1;i<=a?e.selectSat(i):e.selectSat(0)}btnHome_(){settingsManager.isLimitedGamepadControls||(console.log("Home"),l.bD.getMainCamera().isPanReset=!0,l.bD.getMainCamera().isLocalRotateReset=!0,l.bD.getMainCamera().ftsRotateReset=!0)}btnXbox(){console.log("Xbox Button")}btnStart_(){console.log("Start")}btnLeftStick_(){console.log("Left Stick")}btnRightStick_(){console.log("Right Stick")}btnDpadUp_(){console.log("D-Pad Up"),settingsManager.isAutoRotateD=!1,settingsManager.isAutoRotateU=!settingsManager.isAutoRotateU,l.bD.getMainCamera().autoRotate(!0)}btnDpadDown_(){console.log("D-Pad Down"),settingsManager.isAutoRotateU=!1,settingsManager.isAutoRotateD=!settingsManager.isAutoRotateD,l.bD.getMainCamera().autoRotate(!0)}btnDpadLeft_(){console.log("D-Pad Left"),settingsManager.isAutoRotateR=!1,settingsManager.isAutoRotateL=!settingsManager.isAutoRotateL,l.bD.getMainCamera().autoRotate(!0)}btnDpadRight_(){console.log("Right"),settingsManager.isAutoRotateL=!1,settingsManager.isAutoRotateR=!settingsManager.isAutoRotateR,l.bD.getMainCamera().autoRotate(!0)}updateZoom_(){const e=this.currentController.buttons[6].value,t=this.currentController.buttons[7].value;if(0===e&&0===t)return;const a=l.bD.getDrawManager();let i=l.bD.getMainCamera().zoomLevel();switch(l.bD.getMainCamera().cameraType){case ia.i.DEFAULT:case ia.i.OFFSET:case ia.i.FIXED_TO_SAT:i+=e/500*a.dt,i-=t/500*a.dt,l.bD.getMainCamera().zoomTarget=i,l.bD.getMainCamera().camZoomSnappedOnSat=!1,l.bD.getMainCamera().isAutoPitchYawToTarget=!1,i<l.bD.getMainCamera().zoomLevel()?l.bD.getMainCamera().isZoomIn=!0:l.bD.getMainCamera().isZoomIn=!1;break;case ia.i.FPS:case ia.i.SATELLITE:case ia.i.PLANETARIUM:case ia.i.ASTRONOMY:0!==e&&(l.bD.getMainCamera().fpsVertSpeed+=Math.pow(2*e,3)*a.dt*settingsManager.cameraMovementSpeed),0!==t&&(l.bD.getMainCamera().fpsVertSpeed-=Math.pow(2*t,3)*a.dt*settingsManager.cameraMovementSpeed)}}updateLeftStick_(){const e=this.currentController.axes[0],t=this.currentController.axes[1];if(e>this.deadzone||e<-this.deadzone||t>this.deadzone||t<-this.deadzone){l.bD.getMainCamera().autoRotate(!1);const a=l.bD.getDrawManager();switch(settingsManager.lastGamepadMovement=Date.now(),l.bD.getMainCamera().cameraType){case ia.i.DEFAULT:case ia.i.OFFSET:case ia.i.FIXED_TO_SAT:l.bD.getMainCamera().camAngleSnappedOnSat=!1,l.bD.getMainCamera().isAutoPitchYawToTarget=!1,l.bD.getMainCamera().camPitchSpeed-=Math.pow(t,3)/200*a.dt*settingsManager.cameraMovementSpeed,l.bD.getMainCamera().camYawSpeed+=Math.pow(e,3)/200*a.dt*settingsManager.cameraMovementSpeed;break;case ia.i.FPS:case ia.i.SATELLITE:case ia.i.PLANETARIUM:case ia.i.ASTRONOMY:(t>this.deadzone||t<-this.deadzone)&&(l.bD.getMainCamera().fpsForwardSpeed=-Math.pow(t,3)*a.dt),(e>this.deadzone||e<-this.deadzone)&&(l.bD.getMainCamera().fpsSideSpeed=Math.pow(e,3)*a.dt)}}}updateRightStick_(){if(settingsManager.isLimitedGamepadControls)return;const e=this.currentController.axes[2],t=this.currentController.axes[3],a=l.bD.getDrawManager();if(l.bD.getMainCamera().isLocalRotateOverride=!1,t>this.deadzone||t<-this.deadzone||e>this.deadzone||e<-this.deadzone)switch(l.bD.getMainCamera().autoRotate(!1),l.bD.getMainCamera().cameraType){case ia.i.DEFAULT:case ia.i.OFFSET:case ia.i.FIXED_TO_SAT:l.bD.getMainCamera().isLocalRotateOverride=!0,l.bD.getMainCamera().localRotateDif.pitch=200*-t,l.bD.getMainCamera().localRotateDif.yaw=200*-e;break;case ia.i.FPS:case ia.i.SATELLITE:case ia.i.PLANETARIUM:case ia.i.ASTRONOMY:l.bD.getMainCamera().camPitchSpeed+=t/100*a.dt*settingsManager.cameraMovementSpeed,l.bD.getMainCamera().camYawSpeed-=e/100*a.dt*settingsManager.cameraMovementSpeed}}vibrate(e){this.currentController&&this.currentController.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})}static getController(e=0){const t=navigator.getGamepads().filter((e=>null!==e));return t.length>e&&null!==t[e]?t[e]:null}}const Di=new xi;var Li=a(5999);const ki=a.p+"../img/calendar.png";class Ai extends Q.c{constructor(){super("Launch Menu"),this.bottomIconElementName="menu-launches",this.bottomIconImg=ki,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonEnabled){settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3);const e=(new Date).getFullYear();(0,Li.Us)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonEnabled&&(this.isMenuButtonEnabled=!1,(0,c.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const Ei=new Ai,Ti=a.p+"../img/rocket.png";class Ni extends Q.c{constructor(){super(Ni.PLUGIN_NAME),this.bottomIconCallback=()=>{if(!this.isMenuButtonEnabled)return;if(!this.verifySatelliteSelected())return;const e=l.bD.getCatalogManager().getSat(l.bD.getCatalogManager().selectedSat,Qe.C_.EXTRA_ONLY);(0,c.G)("nl-scc").value=e.sccNum,(0,c.G)("nl-inc").value=Ha.J.pad0((e.inclination*m.I3).toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=Ti,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=l.bD.html`
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
  `,this.helpTitle="New Launch Menu",this.helpBody=l.bD.html`The New Launch Menu is used for generating notional orbital launches by modifying existing satellites with similar parameters.
    <br><br>
    After selecting a satellite, you can select a launch location and a north/south azimuth.
    The selected satellite will be modified to align it with the launch site.
    The clock is then changed to 00:00:00 to represent relative time after the launch.
    This can be helpful in calculating sensor coverage relative to launch time.
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=l.bD.getTimeManager(),a=l.bD.getCatalogManager(),i=l.bD.getUiManager(),s=l.bD.getColorSchemeManager();(0,d.wU)();const n=(0,c.G)("nl-scc").value,o=a.getIdFromObjNum(parseInt(n));let r=a.getSat(o);const u=(0,c.G)("nl-updown").value,p=(0,c.G)("nl-facility").value;let m,h;if(!a.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in a.launchSites)a.launchSites[e].name===p&&(m=a.launchSites[e].lat,h=a.launchSites[e].lon);h>180&&(h-=360);const b=new Date,v=new Date(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate(),0,0,0);v.setUTCHours(0),t.changeStaticOffset(v.getTime()-b.getTime()),i.toast("Time is now relative to launch time.","standby"),null===(e=l.bD.getSoundManager())||void 0===e||e.play("liftoff"),s.setColorScheme(settingsManager.currentColorScheme,!0),l.bD.getMainCamera().isAutoPitchYawToTarget=!1;const S=t.simulationTimeObj,y=new ja(r,m,h,u,S).rotateOrbitToLatLon(),M=y[0],C=y[1];if(69!==M.length)return void i.toast(`Invalid TLE1: length is not 69 - ${M}`,"critical");if(69!==C.length)return void i.toast(`Invalid TLE2: length is not 69 - ${M}`,"critical");let w;r.satrec=null;try{w=ie.Sgp4.createSatrec(M,C)}catch(e){return void f.x.error(e,"new-launch.ts","Error creating satellite record!")}g.$.altitudeCheck(w,S)>1?(a.satCruncher.postMessage({typ:"satEdit",id:o,active:!0,TLE1:M,TLE2:C}),l.bD.getOrbitManager().changeOrbitBufferData(o,M,C)):i.toast("Failed Altitude Test - Try a Different Satellite!","critical"),(0,ti.J)(a.satCruncher,(()=>{this.isDoingCalculations=!1,(0,d.Zk)()}),(e=>void 0!==e.satPos))}}addJs(){super.addJs(),l.bD.register({event:l.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,c.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,c.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}Ni.PLUGIN_NAME="New Launch";const Gi=new Ni,Ii=a.p+"../img/calendar2.png",Pi=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown";class Ri extends Q.c{constructor(){super(Ri.PLUGIN_NAME),this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&("localhost"===window.location.hostname&&l.bD.getUiManager().toast("This feature is a static table when in offline mode.","caution"),this.showTable())},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=Ii,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=l.bD.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=l.bD.html`
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
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),a.e(478).then(a.bind(a,6128)).then((e=>e))}addJs(){super.addJs(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,c.G)("export-launch-info").addEventListener("click",(()=>{(0,b.Eb)(this.launchList,"launchList")}))}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then((e=>e.json())).then((e=>this.processData(e))).catch((()=>f.x.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`))).finally((()=>{const e=(0,c.G)("nextLaunch-table");e&&""==e.innerHTML&&(Ri.initTable(e,this.launchList),(0,c.G)("nextLaunch-table").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(0,Li.Us)(e.href)}))})))}))}}processData(e){var t,a,i,s,n,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(a=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===a?void 0:a.name.split(",",1)[0],c.locationURL=null===(i=r.pad)||void 0===i?void 0:i.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(s=r.rocket)||void 0===s?void 0:s.configuration.full_name,c.rocketConfig=null===(n=r.rocket)||void 0===n?void 0:n.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),a=t.insertCell();a.appendChild(document.createTextNode("Launch Window")),a.setAttribute("style","text-decoration: underline; width: 120px;");const i=t.insertCell();i.appendChild(document.createTextNode("Mission")),i.setAttribute("style","text-decoration: underline; width: 140px;");const s=t.insertCell();s.appendChild(document.createTextNode("Location")),s.setAttribute("style","text-decoration: underline");const n=t.insertCell();n.appendChild(document.createTextNode("Agency")),n.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var a,i,s,n,o,l;Ri.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),u=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":(0,ui.v)(t[r].windowStart,"isoDateTime",!0)+" UTC";d.appendChild(document.createTextNode(u));const p=c.insertCell(),g=(null===(a=t[r])||void 0===a?void 0:a.missionName)||"Unknown",m=(null===(i=t[r])||void 0===i?void 0:i.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${Pi(g,15)}</a>`:`${Pi(g,15)}`,h=(null===(s=t[r])||void 0===s?void 0:s.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;p.innerHTML=`${m}<br />${h}`;const b=(null===(n=t[r])||void 0===n?void 0:n.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${Pi(t[r].location,25)}</a>`:`${Pi(t[r].location,25)}`;c.insertCell().innerHTML=b;const v=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${Pi(t[r].agency,30)}</a>`:`${Pi(t[r].agency,30)}`;c.insertCell().innerHTML=v,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}Ri.PLUGIN_NAME="Next Launches";const Oi=new Ri,Fi=a.p+"../img/day-night.png";class Ui extends Q.c{constructor(){super("Night Toggle"),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=Fi}addJs(){super.addJs(),l.bD.register({event:l.RL.nightToggle,cbName:this.PLUGIN_NAME,cb:(e,t,a)=>{this.isMenuButtonEnabled?e.bindTexture(e.TEXTURE_2D,a):e.bindTexture(e.TEXTURE_2D,t)}})}}const _i=new Ui;var Bi=a(8028),zi=a(5704);class $i extends Q.c{constructor(){super($i.PLUGIN_NAME),this.doOnce=!1,this.isReferenceSatsActive=!1,this.dependencies=[Bi.H.PLUGIN_NAME,zi.P.PLUGIN_NAME]}addHtml(){super.addHtml(),l.bD.register({event:"selectSatData",cbName:"orbitReferences",cb:e=>{null!=e&&(this.doOnce||((0,c.G)("sat-info-top-links").insertAdjacentHTML("beforeend",l.bD.html`
                <div id="orbit-references-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,c.G)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0))}})}orbitReferencesLinkClick(){const e=l.bD.getCatalogManager(),t=e.getSat(e.selectedSat);let a=e.analSatSet[0].id+2e4,i="";const s=ie.Sgp4.createSatrec(t.TLE1,t.TLE2),n=s.ecco.toFixed(7).substr(2,7),o=(s.nodeo*m.I3).toString(),r=(s.argpo*m.I3).toString(),c=t.TLE2.substr(8,8),d=t.TLE2.substr(52,10),u=t.TLE1.substr(18,2),p=t.TLE1.substr(20,12),g=t.TLE1.substr(9,8),h=Ha.J.pad0(t.TLE1.substr(2,5).trim(),5),b=1440/parseFloat(d);let v=0;for(let s=0;s<360;s++){const l=Ha.J.pad0(v.toFixed(4),8),{TLE1:m,TLE2:f}=bi.L.createTle({sat:t,inc:c,meanmo:d,rasc:o,argPe:r,meana:l,ecen:n,epochyr:u,epochday:p,intl:g,scc:h});if(i+=e.insertNewAnalystSatellite(m,f,a+s,(1e5+s).toString()).sccNum.toString()+",",v+=360/b*4,v>=360)break}i=i.substr(0,i.length-1),l.bD.getUiManager().doSearch(i),this.isReferenceSatsActive=!0}}$i.PLUGIN_NAME="Orbit References";const Hi=new $i,ji=a.p+"../img/satchng.png";var Vi=a(6393),Ji=a(7727);class Ki extends Q.c{constructor(){super(Ki.PLUGIN_NAME),this.bottomIconImg=ji,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=l.bD.html`
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
  </div>`,this.helpTitle="Constellations Menu",this.helpBody=l.bD.html`The Constellations menu allows you to view groups of satellites.
  <br><br>
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.bD.register({event:"uiManagerFinal",cbName:"constellations",cb:()=>{(0,c.G)("constellation-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(e){Ki.constellationMenuClick(e.target.dataset.group)}))}))}})}static constellationMenuClick(e){const t=l.bD.getTimeManager(),a=l.bD.getCatalogManager(),i=l.bD.getGroupsManager();if(void 0!==i){switch(e){case"SpaceStations":i.groupList[e]||i.createGroup(Z.Y.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":i.groupList[e]||i.createGroup(Z.Y.NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":i.groupList[e]||i.createGroup(Z.Y.NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":i.groupList[e]||i.createGroup(Z.Y.NAME_REGEX,/NAVSTAR/u,e);break;case"AmatuerRadio":i.groupList[e]||i.createGroup(Z.Y.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":i.groupList[e]||i.createGroup(Z.Y.SCC_NUM,a.id2satnum(a.satLinkManager.aehf),e),(0,d.QP)((()=>{Ji.B.clear(),a.satLinkManager.showLinks(Ji.B,Vi.W6.Aehf,t)}));break;case"wgs":i.groupList[e]||i.createGroup(Z.Y.SCC_NUM,a.id2satnum(a.satLinkManager.wgs.concat(a.satLinkManager.dscs)),e),(0,d.QP)((()=>{Ji.B.clear(),a.satLinkManager.showLinks(Ji.B,Vi.W6.Wgs,t)}));break;case"starlink":i.groupList[e]||i.createGroup(Z.Y.NAME_REGEX,/STARLINK/u,e),(0,d.QP)((()=>{Ji.B.clear(),a.satLinkManager.showLinks(Ji.B,Vi.W6.Starlink,t)}));break;case"sbirs":i.groupList[e]||i.createGroup(Z.Y.SCC_NUM,a.id2satnum(a.satLinkManager.sbirs),e),(0,d.QP)((()=>{Ji.B.clear(),a.satLinkManager.showLinks(Ji.B,Vi.W6.Sbirs,t)}));break;default:throw new Error("Unknown group name: "+e)}Ki.groupSelected(e)}}static groupSelected(e){if(void 0===e)return;const t=l.bD.getCatalogManager(),a=l.bD.getGroupsManager();if(void 0===a.groupList[e])throw new Error("Unknown group name: "+e);const i=(0,c.G)("search");a.selectGroup(a.groupList[e]),i.innerHTML=a.groupList[e].objects.reduce(((e,a)=>`${e}${t.getSat(a).sccNum},`),"").slice(0,-1),t.setSelectedSat(-1);const s=l.bD.getUiManager();s.searchManager.doSearch(a.groupList[e].objects.map((e=>t.getSat(e).sccNum)).join(",")),settingsManager.isMobileModeEnabled&&s.searchManager.searchToggle(!0),s.hideSideMenus()}}Ki.PLUGIN_NAME="Sat Constellations";const Wi=new Ki,Xi=a.p+"../img/sat2.png";class Yi extends Q.c{constructor(){super("Satellite Field of View"),this.bottomIconCallback=()=>{this.isMenuButtonEnabled?(this.enableFovView_(),settingsManager.isSatOverflyModeOn=!0):(this.disableFovView_(),settingsManager.isSatOverflyModeOn=!1)},this.isRequireSatelliteSelected=!0,this.bottomIconElementName="menu-sat-fov",this.bottomIconLabel="Satellite FOV",this.bottomIconImg=Xi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0}addJs(){super.addJs(),l.bD.register({event:l.RL.changeSensorMarkers,cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,c.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}})}disableFovView_(){const e=l.bD.getCatalogManager();settingsManager.isSatOverflyModeOn=!1,this.setBottomIconToUnselected(),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}static getSatFieldOfView_(){const e=(0,c.G)("satFieldOfView",!0);if(!e)return 30;if(""===e.value)return f.x.warn("No Satellite FOV value entered. Using default value of 30 degrees."),30;const t=parseFloat(e.value);return isNaN(t)||t<0||t>180?(f.x.warn("Invalid Satellite FOV value. Using default value of 30 degrees."),30):t}enableFovView_(){const e=l.bD.getCatalogManager(),t=l.bD.getUiManager(),a=l.bD.getColorSchemeManager();l.bD.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isShowSurvFence=!1,settingsManager.isFOVBubbleModeOn=!1,settingsManager.isSatOverflyModeOn=!0,this.setBottomIconToSelected(),""!==(0,c.G)("search").value&&t.doSearch((0,c.G)("search").value);const i=Yi.getSatFieldOfView_();e.satCruncher.postMessage({isShowFOVBubble:"reset",isShowSurvFence:"disable"}),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"enable",selectedSatFOV:i}),a.setColorScheme(settingsManager.currentColorScheme,!0)}}const Zi=new Yi,qi=a.p+"../img/photoManager.png";class Qi extends Q.c{constructor(){super(Qi.PLUGIN_NAME),this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="SatellitePhotos",this.bottomIconImg=qi,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=l.bD.html`
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
  </div>`,this.helpTitle="Satellite Photos Menu",this.helpBody=l.bD.html`The Satellite Photos Menu is used for displaying live photos from select satellites.
  <br><br>
  Note - changes in the image API may cause the wrong satellite to be selected in KeepTrack.`}addJs(){super.addJs(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,c.G)("meteosat8-link").addEventListener("click",(()=>{Qi.loadPic(10489,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")})),(0,c.G)("meteosat11-link").addEventListener("click",(()=>{Qi.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")})),(0,c.G)("himawari8-link").addEventListener("click",(()=>{Qi.himawari8()})),(0,c.G)("discovr-link").addEventListener("click",(()=>{Qi.discovr()})),(0,c.G)("goes1-link").addEventListener("click",(()=>{Qi.loadPic(8366,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")}))}})}static discovr(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{Qi.dscovrLoaded(e)},e.onerror=function(){console.debug("https://epic.gsfc.nasa.gov/ request failed!")},l.bD.getCatalogManager().selectSat(-1),e.send()}static dscovrLoaded(e){if(e.status>=200&&e.status<400){const t=JSON.parse(e.response),a=t[0].image,i=t[0].identifier,s=i.slice(0,4),n=i.slice(4,6),o=i.slice(6,8),r=i.slice(8,10),c=i.slice(10,12),d=i.slice(12,14),u=new Date(Date.UTC(s,n-1,o,r-4,c,d));l.bD.getMainCamera().camSnap((0,tt.Lx)(t[0].centroid_coordinates.lat),(0,tt.Zs)(t[0].centroid_coordinates.lon,u)),l.bD.getMainCamera().changeZoom(.7),Qi.colorbox(`https://epic.gsfc.nasa.gov/archive/natural/${s}/${n}/${o}/png/${a}.png`)}}static loadPic(e,t){l.bD.getCatalogManager().selectSat(l.bD.getCatalogManager().getSatFromObjNum(e).id),l.bD.getMainCamera().changeZoom(.7),Qi.colorbox(t)}static himawari8(){l.bD.getCatalogManager().selectSat(l.bD.getCatalogManager().getSatFromObjNum(40267).id),l.bD.getMainCamera().changeZoom(.7);let e=l.bD.getTimeManager().simulationTimeObj;e.getTime()<Date.now()?e=new Date(e.getTime()-18e5):(l.bD.getUiManager().toast("Can't load pictures from the future. Loading most recent photos.","caution"),e=new Date(Date.now()-18e5));const t=e.getUTCFullYear(),a=(e.getUTCMonth()+1).toString().padStart(2,"0"),i=e.getUTCDate().toString().padStart(2,"0"),s=e.getUTCHours().toString().padStart(2,"0"),n=(10*Math.floor(e.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,Li.Us)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${t}/${a}/${i}/${s}${n}00_0_0.png`,{image:!0})}}Qi.PLUGIN_NAME="Satellite Photos",Qi.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,Li.Us)(e,{image:!0})};const es=new Qi,ts=a.p+"../img/video.png";class as{constructor(e,t,a,i){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=a,this.onError_=i}static handleError(e){e.message.includes("Permission denied")?f.x.warn('Permission denied! Did you click "Share"?'):f.x.warn("Error:"+e)}getStream(e){return t=this,a=void 0,s=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch((e=>(as.handleError(e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch((e=>(as.handleError(e),null))):(f.x.warn("Compatibility Error with Recording"),this.onError_(),!1):(f.x.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((i=void 0)||(i=Promise))((function(e,n){function o(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof i?a:new i((function(e){e(a)}))).then(o,l)}r((s=s.apply(t,a||[])).next())}));var t,a,i,s}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(f.x.debug("Recorder stopped."),this.stream_.getTracks().forEach((e=>e.stop())),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,a=new Blob(this.recordedBlobs,{type:this.supportedType}),i=window.URL.createObjectURL(a),s=document.createElement("a");s.style.display="none",s.href=i,s.download=t,document.body.appendChild(s),s.click(),setTimeout((()=>{document.body.removeChild(s),window.URL.revokeObjectURL(i)}),100)}start(){this.getStream().then((e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;let t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(let e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&f.x.debug("No supported type found for MediaRecorder");let a={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||as.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,a)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}f.x.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${a}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),f.x.debug(`Created MediaRecorder ${this.mediaRecorder_}`)})).catch((()=>{}))}}as.BIT_RATE_30_MBPS=3e7,as.BIT_RATE_20_MBPS=2e7,as.BIT_RATE_10_MBPS=1e7,as.BIT_RATE_5_MBPS=5e6,as.BIT_RATE_2_MBPS=2e6,as.BIT_RATE_1_MBPS=1e6;class is extends Q.c{constructor(){super("Screen Recorder"),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return f.x.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){f.x.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=ts,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),l.bD.register({event:l.RL.uiManagerOnReady,cbName:this.PLUGIN_NAME,cb:()=>{try{this.streamManagerInstance=new as(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save(is.FILE_NAME),this.setBottomIconToUnselected()}}is.FILE_NAME="keeptrack.webm";const ss=new is,ns=a.p+"../img/camera.png";class os extends Q.c{constructor(){super("Screenshot"),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=ns,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.rmbL1ElementName="save-rmb",this.rmbL1Html=l.bD.html`
    <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Save Image &#x27A4;</a></li>
  `,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.isRmbOnSat=!0,this.rmbL2ElementName="save-rmb-menu",this.rmbL2Html=l.bD.html`
    <ul class='dropdown-contents'>
      <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
      <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
      <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
    </ul>
  `,this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),l.bD.register({event:l.RL.altCanvasResize,cbName:this.PLUGIN_NAME,cb:()=>this.queuedScreenshot_}),l.bD.register({event:l.RL.endOfDraw,cbName:this.PLUGIN_NAME,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){let e=document.createElement("a");e.download="keeptrack.png";let t=(new Date).getUTCFullYear(),a=settingsManager.copyrightOveride?"":`©${t} KEEPTRACK.SPACE`;e.href=os.watermarkedDataUrl(a),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=l.bD.getDrawManager().canvas,a=document.createElement("canvas"),i=a.getContext("2d");let s=a.width=t.width,n=a.height=t.height;i.drawImage(t,0,0),i.font="24px nasalization";let o=i.measureText(e).width;i.globalAlpha=1,i.fillStyle="white",i.fillText(e,s-o-30,n-30);const{classificationstr:r,classificationColor:c}=os.calculateClassificationText();""!==r&&(i.font="24px nasalization",i.globalAlpha=1,i.fillStyle=c,o=i.measureText(r).width,i.fillText(r,s/2-o,n-20),i.fillText(r,s/2-o,34)),document.body.appendChild(a);let d=a.toDataURL();return a.parentNode.removeChild(a),d}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:Wa.getColors(settingsManager.classificationStr).backgroundColor}}}const ls=new os,rs=a.p+"../img/fov.png";class cs extends Q.c{constructor(){super("Sensor Field of View"),this.bottomIconCallback=()=>{this.verifySensorSelected()&&(settingsManager.isFOVBubbleModeOn&&!settingsManager.isShowSurvFence?this.disableFovView_():settingsManager.isFOVBubbleModeOn||this.enableFovView())},this.bottomIconElementName="menu-sensor-fov",this.bottomIconLabel="Sensor FOV",this.bottomIconImg=rs,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0}addJs(){super.addJs(),l.bD.register({event:l.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,c.G)(this.bottomIconElementName).classList.remove(Q.c.iconDisabledClassString),this.isIconDisabled=!1):((0,c.G)(this.bottomIconElementName).classList.add(Q.c.iconDisabledClassString),this.isIconDisabled=!0,this.isMenuButtonEnabled=!1,(0,c.G)(this.bottomIconElementName).classList.remove(Q.c.iconSelectedClassString))}}),l.bD.register({event:l.RL.changeSensorMarkers,cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,c.G)(this.bottomIconElementName).classList.remove(Q.c.iconSelectedClassString)}})}disableFovView_(){settingsManager.isFOVBubbleModeOn=!1,this.setBottomIconToUnselected(),l.bD.getCatalogManager().satCruncher.postMessage({isShowFOVBubble:"reset",isShowSurvFence:"disable"})}enableFovView(){l.bD.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isFOVBubbleModeOn=!0,settingsManager.isSatOverflyModeOn=!1,settingsManager.isShowSurvFence=!1,this.setBottomIconToSelected(),l.bD.getCatalogManager().satCruncher.postMessage({isShowFOVBubble:"enable",isShowSurvFence:"disable"}),l.bD.getCatalogManager().satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}}const ds=new cs,us=a.p+"../img/fence.png";class ps extends Q.c{constructor(){super(ps.PLUGIN_NAME),this.bottomIconCallback=()=>{const e=l.bD.getCatalogManager();settingsManager.isShowSurvFence?this.disableSurvView_(e):this.enableSurvView_(e)},this.bottomIconElementName="menu-sensor-surv-fence",this.bottomIconLabel="Sensor Fence",this.bottomIconImg=us,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.isRequireSensorSelected=!0,settingsManager.isShowSurvFence=!1}disableSurvView_(e){settingsManager.isShowSurvFence=!1,(0,c.G)(this.bottomIconElementName).classList.remove(Q.c.iconSelectedClassString),e.satCruncher.postMessage({isShowSurvFence:"disable",isShowFOVBubble:"reset"})}enableSurvView_(e){l.bD.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isShowSurvFence=!0,settingsManager.isSatOverflyModeOn=!1,(0,c.G)(this.bottomIconElementName).classList.add(Q.c.iconSelectedClassString),e.satCruncher.postMessage({isShowFOVBubble:"enable",isShowSurvFence:"enable"}),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}addJs(){super.addJs(),l.bD.register({event:l.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,c.G)(this.bottomIconElementName).classList.remove(Q.c.iconDisabledClassString),this.isIconDisabled=!1):((0,c.G)(this.bottomIconElementName).classList.add(Q.c.iconDisabledClassString),this.isIconDisabled=!0,this.isMenuButtonEnabled=!1,(0,c.G)(this.bottomIconElementName).classList.remove(Q.c.iconSelectedClassString))}}),l.bD.register({event:l.RL.changeSensorMarkers,cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,c.G)(this.bottomIconElementName).classList.remove(Q.c.iconSelectedClassString)}})}}ps.PLUGIN_NAME="Sensor Surveillance Fence";const gs=new ps,ms=a.p+"../img/custom.png";var hs=a(3301);class bs{static updateSensorPosition(e){const t=l.bD.getTimeManager(),a=l.bD.getCatalogManager(),i=l.bD.getSensorManager(),{lon:s,lat:n,alt:o,minaz:r,maxaz:c,minel:d,maxel:u,minrange:p,maxrange:g}=bs.updateSettingsManager(e);i.whichRadar="CUSTOM",bs.updateCustomSensorUi_();const m={lat:n,lon:s,alt:o,obsminaz:r,obsmaxaz:c,obsminel:d,obsmaxel:u,obsminrange:p,obsmaxrange:g};a.satCruncher.postMessage({typ:"sensor",setlatlong:!0,sensor:m}),hs.E.updateSensorUiStyling([m]),a.setSelectedSat(-1);const h=l.bD.getMainCamera();g>6e3?h.changeZoom("geo"):h.changeZoom("leo"),h.camSnap((0,tt.Lx)(n),(0,tt.Zs)(s,t.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(bs.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,c.G)("cs-lat"),t=(0,c.G)("cs-lon"),a=(0,c.G)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),a.value=settingsManager.geolocation.alt.toString(),a.dispatchEvent(new Event("change")),(0,c.G)("cs-telescope").checked=!0,(0,c.G)("cs-minaz").disabled=!0,(0,c.G)("cs-maxaz").disabled=!0,(0,c.G)("cs-minel").disabled=!0,(0,c.G)("cs-maxel").disabled=!0,(0,c.G)("cs-minrange").disabled=!0,(0,c.G)("cs-maxrange").disabled=!0,(0,c.G)("cs-minaz-div").style.display="none",(0,c.G)("cs-maxaz-div").style.display="none",(0,c.G)("cs-minel-div").style.display="none",(0,c.G)("cs-maxel-div").style.display="none",(0,c.G)("cs-minrange-div").style.display="none",(0,c.G)("cs-maxrange-div").style.display="none",(0,c.G)("cs-minaz").value="0",(0,c.G)("cs-maxaz").value="360",(0,c.G)("cs-minel").value="10",(0,c.G)("cs-maxel").value="90",(0,c.G)("cs-minrange").value="100",(0,c.G)("cs-maxrange").value="50000",(0,c.G)("sensor-type").innerHTML="Telescope",(0,c.G)("sensor-info-title").innerHTML="Custom Sensor",(0,c.G)("sensor-country").innerHTML="Custom Sensor"}catch(e){f.x.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const vs=a.p+"../img/multi-site.png";class fs extends Q.c{constructor(){super(fs.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.refreshSideMenuData()},this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=vs,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=l.bD.html`
    The Multi-Site Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a satellite and multiple sensors.
    A satellite must first be selected before the menu can be used.
    <br><br>
    By default the menu will calculate the look angles for all sensors in the Space Surveillance Netowrk.
    If you would like to calculate the look angles for additional sensors, you can export a csv file at the bottom of the menu.
    The csv file will contain look angles for all sensors.
    <br><br>
    Clicking on a row in the table will select the sensor and change the simulation time to the time of the look angle.`,this.sideMenuElementName="multi-site-look-angles-menu",this.sideMenuElementHtml=l.bD.html`
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
    </div>`,this.disabledSensors=[],this.lookanglesLength=1,this.lookanglesInterval=30}addHtml(){super.addHtml(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,c.G)("multi-site-look-angles-export"))||void 0===e||e.addEventListener("click",(()=>{const e=l.bD.getSensorManager().lastMultiSiteArray.map((e=>({time:e.time,sensor:e.name,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)})));(0,b.Eb)(e,"multiSiteLooks")}))}}),l.bD.register({event:l.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(!(!this.isMenuButtonEnabled||(null==e?void 0:e.sccNum)&&l.bD.getSensorManager().isSensorSelected()))return this.setBottomIconToDisabled(),void this.closeSideMenu();this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&this.refreshSideMenuData()}})}addJs(){super.addJs(),l.bD.register({event:l.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData()}})}refreshSideMenuData(){this.isMenuButtonEnabled&&-1!==l.bD.getCatalogManager().selectedSat&&(0,d.QP)((()=>{const e=l.bD.getCatalogManager(),t=(0,c.G)("multi-site-look-angles-sensor-list");t.innerHTML="";const a=[];for(const i of l.bD.getSensorManager().sensorListUS){const s=document.createElement("button");s.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors.includes(i)&&s.classList.add("btn-red"),a.push(i),s.innerText=i.shortName,s.addEventListener("click",(()=>{s.classList.contains("btn-red")?(s.classList.remove("btn-red"),this.disabledSensors.splice(this.disabledSensors.indexOf(i),1)):(s.classList.add("btn-red"),this.disabledSensors.push(i));const t=e.getSat(e.selectedSat,Qe.C_.EXTRA_ONLY);this.getlookanglesMultiSite(t,a.filter((e=>!this.disabledSensors.includes(e))))})),t.appendChild(s),t.appendChild(document.createTextNode(" "))}const i=e.getSat(e.selectedSat,Qe.C_.EXTRA_ONLY);this.getlookanglesMultiSite(i,a.filter((e=>!this.disabledSensors.includes(e))))}))}getlookanglesMultiSite(e,t){const a=l.bD.getTimeManager(),i=l.bD.getSensorManager();if(!t){t=[];for(const e in i.sensors){const a=i.sensors[e];t.push(a)}}const s=!i.isSensorSelected(),n=[...i.currentSensors],o=m.rE/(e.satrec.no*m.rE/m.gc),r=[];for(const i of t){if(i.obsmaxrange<e.perigee&&(!i.obsmaxrange2||i.obsmaxrange2<e.perigee))continue;hs.E.updateSensorUiStyling([i]);let t=0;for(let s=0;s<24*this.lookanglesLength*60*60;s+=this.lookanglesInterval){t=1e3*s;let n=a.getOffsetTimeObj(t),l=fs.propagateMultiSite_(n,e.satrec,i);""!==l.time&&(r.push(l),s+=60*o*.75)}}r.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),i.lastMultiSiteArray=r,s?i.setCurrentSensor(i.defaultSensor):i.setCurrentSensor(n),fs.populateMultiSiteTable(r)}static propagateMultiSite_(e,t,a){const i=g.$.getRae(e,t,a);return g.$.checkIsInView(a,i)?{time:e.toISOString(),el:i.el,az:i.az,rng:i.rng,name:a.shortName}:{time:"",el:0,az:0,rng:0,name:""}}static populateMultiSiteTable(e){const t=l.bD.getSensorManager(),a=(0,c.G)("multi-site-look-angles-table");a.innerHTML="";let i=a.insertRow(),s=i.insertCell();s.appendChild(document.createTextNode("Time")),s.setAttribute("style","text-decoration: underline");let n=i.insertCell();n.appendChild(document.createTextNode("El")),n.setAttribute("style","text-decoration: underline");let o=i.insertCell();o.appendChild(document.createTextNode("Az")),o.setAttribute("style","text-decoration: underline");let r=i.insertCell();r.appendChild(document.createTextNode("Rng")),r.setAttribute("style","text-decoration: underline");let d=i.insertCell();d.appendChild(document.createTextNode("Sensor")),d.setAttribute("style","text-decoration: underline");const u=l.bD.getTimeManager();for(let l=0;l<e.length;l++)t.sensorListUS.includes(t.sensors[e[l].name])&&(i=a.insertRow(),i.setAttribute("class","link"),s=i.insertCell(),s.appendChild(document.createTextNode((0,ui.v)(e[l].time,"isoDateTime",!0))),n=i.insertCell(),n.appendChild(document.createTextNode(e[l].el.toFixed(1))),o=i.insertCell(),o.appendChild(document.createTextNode(e[l].az.toFixed(0))),r=i.insertCell(),r.appendChild(document.createTextNode(e[l].rng.toFixed(0))),d=i.insertCell(),d.appendChild(document.createTextNode(e[l].name)),i.addEventListener("click",(()=>{u.changeStaticOffset(new Date(e[l].time).getTime()-(new Date).getTime());const a=t.sensors[e[l].name];t.setSensor(a,a.staticNum)})))}}fs.PLUGIN_NAME="Multi Site Look Angles";const Ss=new fs;class ys extends Q.c{constructor(){super(fs.PLUGIN_NAME),this.bottomIconCallback=()=>{if(this.isMenuButtonEnabled){const e=l.bD.getSensorManager();e.isSensorSelected()&&((0,c.G)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,c.G)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,c.G)("cs-hei").value=e.currentSensors[0].alt.toString())}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=ms,this.sideMenuElementName="custom-sensor-menu",this.sideMenuElementHtml=l.bD.html`
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
    </div>`,this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=l.bD.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{ys.addCustomSensorFormSubmitListener(),ys.addTelescopeClickListener_(),ys.addCustomSensorBtnCLickListener_(),ys.addClearCustomSensorListener_(),ys.addUseGeolocationListener_()}})}static addCustomSensorFormSubmitListener(){(0,c.G)("customSensor").addEventListener("submit",(e=>{e.preventDefault()}))}static addUseGeolocationListener_(){(0,c.G)("cs-geolocation").addEventListener("click",bs.useCurrentGeolocationAsSensor)}static addClearCustomSensorListener_(){(0,c.G)("cs-clear").addEventListener("click",(()=>{l.bD.getSensorManager().clearSecondarySensors()}))}static addCustomSensorBtnCLickListener_(){(0,c.G)("cs-submit").addEventListener("click",(()=>{ys.processCustomSensorSubmit_()}))}static processCustomSensorSubmit_(){var e,t,a,i,s;null===(e=(0,c.G)("menu-sensor-info"))||void 0===e||e.classList.remove("bmenu-item-disabled"),null===(t=(0,c.G)("menu-fov-bubble"))||void 0===t||t.classList.remove("bmenu-item-disabled"),null===(a=(0,c.G)("menu-surveillance"))||void 0===a||a.classList.remove("bmenu-item-disabled"),null===(i=(0,c.G)("menu-planetarium"))||void 0===i||i.classList.remove("bmenu-item-disabled"),null===(s=(0,c.G)("menu-astronomy"))||void 0===s||s.classList.remove("bmenu-item-disabled"),(0,c.G)("sensor-type").value=(0,c.G)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,c.G)("sensor-info-title").innerHTML="Custom Sensor",(0,c.G)("sensor-country").innerHTML="Custom Sensor";const n=ys.str2Deg((0,c.G)("cs-lon").value),o=ys.str2Deg((0,c.G)("cs-lat").value),r=(0,c.G)("cs-hei").value,d=(0,c.G)("cs-type").value,u=(0,c.G)("cs-minaz").value,p=(0,c.G)("cs-maxaz").value,g=(0,c.G)("cs-minel").value,m=(0,c.G)("cs-maxel").value,h=(0,c.G)("cs-minrange").value,b=(0,c.G)("cs-maxrange").value;let v=ie.SpaceObjectType.OBSERVER;switch(d){case"Observer":v=ie.SpaceObjectType.OBSERVER;break;case"Optical":v=ie.SpaceObjectType.OPTICAL;break;case"Mechanical":v=ie.SpaceObjectType.MECHANICAL;break;case"Phased Array Radar":v=ie.SpaceObjectType.PHASED_ARRAY_RADAR;break;default:f.x.info("Unknown sensor type: "+d),v=ie.SpaceObjectType.OBSERVER}l.bD.getSensorManager().addSecondarySensor({id:null,lat:o,lon:n,alt:ys.str2Km(r),obsminaz:ys.str2Deg(u),obsmaxaz:ys.str2Deg(p),obsminel:ys.str2Deg(g),obsmaxel:ys.str2Deg(m),obsminrange:ys.str2Km(h),obsmaxrange:ys.str2Km(b),type:v,name:"Custom Sensor",country:"Custom Sensor",shortName:"Custom Sensor",sun:"No Impact",zoom:ys.str2Km(b)>6e3?"geo":"leo",volume:!1})}static addTelescopeClickListener_(){(0,c.G)("cs-telescope").addEventListener("click",(()=>{if((0,c.G)("cs-telescope").checked)(0,c.G)("cs-minaz-div").style.display="none",(0,c.G)("cs-maxaz-div").style.display="none",(0,c.G)("cs-minel-div").style.display="none",(0,c.G)("cs-maxel-div").style.display="none",(0,c.G)("cs-minrange-div").style.display="none",(0,c.G)("cs-maxrange-div").style.display="none",(0,c.G)("cs-minaz").value="0",(0,c.G)("cs-maxaz").value="360",(0,c.G)("cs-minel").value="10",(0,c.G)("cs-maxel").value="90",(0,c.G)("cs-minrange").value="100",(0,c.G)("cs-maxrange").value="1000000";else{(0,c.G)("cs-minaz-div").style.display="block",(0,c.G)("cs-maxaz-div").style.display="block",(0,c.G)("cs-minel-div").style.display="block",(0,c.G)("cs-maxel-div").style.display="block",(0,c.G)("cs-minrange-div").style.display="block",(0,c.G)("cs-maxrange-div").style.display="block";const e=l.bD.getSensorManager();e.isSensorSelected()&&((0,c.G)("cs-minaz").value=e.currentSensors[0].obsminaz.toString(),(0,c.G)("cs-maxaz").value=e.currentSensors[0].obsmaxaz.toString(),(0,c.G)("cs-minel").value=e.currentSensors[0].obsminel.toString(),(0,c.G)("cs-maxel").value=e.currentSensors[0].obsmaxel.toString(),(0,c.G)("cs-minrange").value=e.currentSensors[0].obsminrange.toString(),(0,c.G)("cs-maxrange").value=e.currentSensors[0].obsmaxrange.toString())}}))}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}ys.PLUGIN_NAME="Custom Sensor";const Ms=new ys,Cs=a.p+"../img/lookangles.png";class ws extends Q.c{constructor(){super(ws.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.refreshSideMenuData()},this.bottomIconElementName="look-angles-icon",this.bottomIconLabel="Look Angles",this.bottomIconImg=Cs,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:450},this.helpTitle="Look Angles Menu",this.helpBody=l.bD.html`
    The Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a sensor and a satellite.
    A satellite and sensor must first be selected before the menu can be used.
    <br><br>
    The toggle only rise and set times will only calculate the rise and set times of the satellite.
    This is useful for quickly determining when a satellite will be visible to a sensor.
    <br><br>
    The search range can be modified by changing the length and interval options.`,this.isRiseSetLookangles=!0,this.lookanglesInterval=30,this.lookanglesLength=2,this.sideMenuElementName="look-angles-menu",this.sideMenuElementHtml=l.bD.html`
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
    </div>`,this.refreshSideMenuData=()=>{this.isMenuButtonEnabled&&(0,d.QP)((()=>{const e=l.bD.getCatalogManager().getSat(l.bD.getCatalogManager().selectedSat,Qe.C_.EXTRA_ONLY);this.getlookangles(e)}))}}addHtml(){super.addHtml(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;(0,c.G)("look-angles-length").addEventListener("change",(()=>{this.lookanglesLength=parseInt((0,c.G)("look-angles-length").value),this.refreshSideMenuData()})),(0,c.G)("look-angles-interval").addEventListener("change",(()=>{this.lookanglesInterval=parseInt((0,c.G)("look-angles-interval").value),this.refreshSideMenuData()})),null===(e=(0,c.G)("export-look-angles"))||void 0===e||e.addEventListener("click",(()=>{(0,b.Eb)(this.lastlooksArray,"Look-Angles")})),(0,c.G)("settings-riseset").addEventListener("change",this.settingsRisesetChange.bind(this))}}),l.bD.register({event:l.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(!(!this.isMenuButtonEnabled||(null==e?void 0:e.sccNum)&&l.bD.getSensorManager().isSensorSelected()))return this.setBottomIconToDisabled(),void this.closeSideMenu();this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&e&&this.getlookangles(e)}})}addJs(){super.addJs(),l.bD.register({event:l.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData()}})}getlookangles(e,t){const a=l.bD.getTimeManager();if(!t){const e=l.bD.getSensorManager();if(!e.isSensorSelected())return console.debug("satellite.getlookangles requires a sensor to be set!"),[];t=e.currentSensors}let i=this.isRiseSetLookangles?1:this.lookanglesInterval,s=[],n=0;for(let o=0;o<24*this.lookanglesLength*60*60;o+=i){n=1e3*o;let i=a.getOffsetTimeObj(n),l=Mi.J.getTearData(i,e.satrec,t,this.isRiseSetLookangles);if(""!==l.time&&s.push(l),s.length>=1500)break}return s.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),this.lastlooksArray=s,(()=>{let e=(0,c.G)("looks");e.innerHTML="";let t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Time")),i.setAttribute("style","text-decoration: underline");let n=t.insertCell();n.appendChild(document.createTextNode("El")),n.setAttribute("style","text-decoration: underline");let o=t.insertCell();o.appendChild(document.createTextNode("Az")),o.setAttribute("style","text-decoration: underline");let r=t.insertCell();r.appendChild(document.createTextNode("Rng")),r.setAttribute("style","text-decoration: underline");for(let t=0;t<s.length;t++)if(e.rows.length>0){const c=e.insertRow();c.setAttribute("class","link"),i=c.insertCell(),i.appendChild(document.createTextNode((0,ui.v)(s[t].time,"isoDateTime",!1))),i.addEventListener("click",(()=>{a.changeStaticOffset(new Date((0,ui.v)(s[t].time,"isoDateTime",!1)+"z").getTime()-a.realTime),a.calculateSimulationTime(),l.bD.methods.updateDateTime(new Date(a.dynamicOffsetEpoch+a.staticOffset))})),n=c.insertCell(),n.appendChild(document.createTextNode(s[t].el.toFixed(1))),o=c.insertCell(),o.appendChild(document.createTextNode(s[t].az.toFixed(0))),r=c.insertCell(),r.appendChild(document.createTextNode(s[t].rng.toFixed(0)))}})(),s}settingsRisesetChange(e,t){if(null==e)throw new Error("e is undefined");null!=t||(t=(0,c.G)("settings-riseset").checked),this.isRiseSetLookangles=!!t,this.refreshSideMenuData()}}ws.PLUGIN_NAME="Look Angles";const xs=new ws,Ds=a.p+"../img/radio-tower.png";class Ls extends Q.c{constructor(){super(Ls.PLUGIN_NAME),this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.getSensorInfo()},this.bottomIconElementName="sensor-info-icon",this.bottomIconLabel="Sensor Info",this.bottomIconImg=Ds,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="sensor-info-menu",this.sideMenuElementHtml=l.bD.html`
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
    </div>`,this.dragOptions={isDraggable:!0},this.helpTitle="Sensor Info",this.helpBody=l.bD.html`
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
    Additionally, lines can be quickly created from the sensor to the sun or moon from this menu.`}addHtml(){super.addHtml(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{Ls.addSensorToSunBtnListener_(),Ls.addSensorToMoonBtnListener()}})}static addSensorToMoonBtnListener(){(0,c.G)("sensor-moon-btn").addEventListener("click",(()=>{const e=l.bD.getSensorManager().currentSensors;1!==e.length&&l.bD.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.bD.getDrawManager();l.bD.getLineManager().create("sat2",[l.bD.getCatalogManager().getSensorFromSensorName(e[0].name),t.sceneManager.moon.drawPosition[0],t.sceneManager.moon.drawPosition[1],t.sceneManager.moon.drawPosition[2]],"w")}))}static addSensorToSunBtnListener_(){(0,c.G)("sensor-sun-btn").addEventListener("click",(()=>{const e=l.bD.getSensorManager().currentSensors;1!==e.length&&l.bD.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.bD.getDrawManager();l.bD.getLineManager().create("sat2",[l.bD.getCatalogManager().getSensorFromSensorName(e[0].name),t.sceneManager.sun.drawPosition[0],t.sceneManager.sun.drawPosition[1],t.sceneManager.sun.drawPosition[2]],"o")}))}getSensorInfo(){if(!this.isHtmlAdded)return;const e=l.bD.getSensorManager().currentSensors[0];(0,c.G)("sensor-latitude").innerHTML=e.lat.toString(),(0,c.G)("sensor-longitude").innerHTML=e.lon.toString(),(0,c.G)("sensor-minazimuth").innerHTML=e.obsminaz.toString(),(0,c.G)("sensor-maxazimuth").innerHTML=e.obsmaxaz.toString(),(0,c.G)("sensor-minelevation").innerHTML=e.obsminel.toString(),(0,c.G)("sensor-maxelevation").innerHTML=e.obsmaxel.toString(),(0,c.G)("sensor-minrange").innerHTML=e.obsminrange.toString(),(0,c.G)("sensor-maxrange").innerHTML=e.obsmaxrange.toString()}}Ls.PLUGIN_NAME="Sensor Info";const ks=new Ls,As=a.p+"../img/radar.png";class Es extends Q.c{constructor(){super(Es.PLUGIN_NAME),this.dependencies=[si.s.PLUGIN_NAME],this.bottomIconCallback=()=>{var e;this.isMenuButtonEnabled&&((null===(e=l.bD.getPlugin(Oa))||void 0===e?void 0:e.isMenuButtonEnabled)?((0,c.G)("cspocAllSensor").style.display="none",(0,c.G)("mwAllSensor").style.display="none",(0,c.G)("mdAllSensor").style.display="none",(0,c.G)("llAllSensor").style.display="none",(0,c.G)("rusAllSensor").style.display="none",(0,c.G)("prcAllSensor").style.display="none"):((0,c.G)("cspocAllSensor").style.display="block",(0,c.G)("mwAllSensor").style.display="block",(0,c.G)("mdAllSensor").style.display="block",(0,c.G)("llAllSensor").style.display="block",(0,c.G)("rusAllSensor").style.display="block",(0,c.G)("prcAllSensor").style.display="block"))},this.bottomIconElementName="sensor-list-icon",this.bottomIconLabel="Sensors",this.bottomIconImg=As,this.sideMenuElementName="sensor-list-menu",this.sideMenuElementHtml=l.bD.html`
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
    </div>`,this.dragOptions={isDraggable:!0},this.isSensorLinksAdded=!1,this.helpTitle="Sensors Menu",this.helpBody=l.bD.html`The Sensors menu allows you to select a sensor for use in calculations and other menu's functions.
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
  If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.`}addHtml(){super.addHtml(),l.bD.register({event:l.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{(0,c.G)("nav-mobile").insertAdjacentHTML("beforeend",l.bD.html`<div id="sensor-selected"></div>`)}}),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,c.G)("sensor-selected").addEventListener("click",(()=>{l.bD.methods.bottomMenuClick(this.bottomIconElementName)})),(0,c.G)("sensor-list-content").addEventListener("click",(e=>{if(!e.target.classList.contains("menu-selectable"))return;if("reset-sensor-button"===e.target.id)return void l.bD.getSensorManager().resetSensorSelected();const t=e.target.dataset.sensor;this.sensorListContentClick(t)}))}}),l.bD.register({event:"selectSatData",cbName:"sensor",cb:e=>{null!=e&&(null===l.bD.getPlugin(zi.P)||this.isSensorLinksAdded||((0,c.G)("sat-info-top-links").insertAdjacentHTML("beforeend",l.bD.html`
                  <div id="sensors-in-fov-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                        data-tooltip="Visualize Sensor Coverage">Show All Sensors with FOV...</div>
                `),(0,c.G)("sensors-in-fov-link").addEventListener("click",(()=>{const e=l.bD.getCatalogManager(),t=l.bD.getSensorManager();Object.keys(t.sensors).forEach((a=>{const i=t.sensors[a],s=e.getSat(e.selectedSat);Mi.J.getTearr(s,[i]).inView&&l.bD.getLineManager().create("sat6",[s.id,e.getSensorFromSensorName(i.name)],"g")}))})),this.isSensorLinksAdded=!0))}}),l.bD.register({event:l.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{(0,c.G)("reset-sensor-button").style.display=e?"block":"none"}})}sensorListContentClick(e){if(!this.isMenuButtonEnabled)return;const t=l.bD.getSensorManager();if(void 0!==e){switch(e){case"cspocAll":t.setSensor("SSN");break;case"mwAll":t.setSensor("NATO-MW");break;case"mdAll":t.setSensor("MD-ALL");break;case"llAll":t.setSensor("LEO-LABS");break;case"rusAll":t.setSensor("RUS-ALL");break;case"prcAll":t.setSensor("PRC-ALL");break;default:t.setSensor(t.sensors[`${e}`])}l.bD.getCatalogManager().setSelectedSat(-1);try{l.bD.getMainCamera().lookAtLatLon(t.currentSensors[0].lat,t.currentSensors[0].lon,t.currentSensors[0].zoom,l.bD.getTimeManager().selectedDate)}catch(e){f.x.warn("Error in sensorListContentClick: "+e)}settingsManager.currentColorScheme==l.bD.getColorSchemeManager().default&&Pa.j.change("default")}else f.x.debug("The menu item was clicked but the menu was not defined.")}resetSensorButtonClick(){var e,t,a,i,s,n;this.isMenuButtonEnabled&&(null===(e=(0,c.G)("menu-sensor-info"))||void 0===e||e.classList.add("bmenu-item-disabled"),null===(t=(0,c.G)("menu-fov-bubble"))||void 0===t||t.classList.add("bmenu-item-disabled"),null===(a=(0,c.G)("menu-surveillance"))||void 0===a||a.classList.add("bmenu-item-disabled"),null===(i=(0,c.G)("menu-planetarium"))||void 0===i||i.classList.add("bmenu-item-disabled"),null===(s=(0,c.G)("menu-astronomy"))||void 0===s||s.classList.add("bmenu-item-disabled"),l.bD.getMainCamera().cameraType===ia.i.PLANETARIUM)&&(null===(n=l.bD.getPlugin(Oa))||void 0===n||n.setBottomIconToUnselected(),l.bD.getMainCamera().isPanReset=!0,l.bD.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,l.bD.getDrawManager().glInit(),l.bD.getUiManager().hideSideMenus(),l.bD.getOrbitManager().clearInViewOrbit(),l.bD.getMainCamera().cameraType=ia.i.DEFAULT,(0,c.G)("menu-planetarium").classList.remove("bmenu-item-selected"))}}Es.PLUGIN_NAME="Sensor List";const Ts=new Es,Ns=a.p+"../img/settings.png";var Gs=a(3643),Is=a(9755),Ps=a.n(Is),Rs=a(3392);class Os extends Q.c{constructor(){super(Os.PLUGIN_NAME),this.bottomIconElementName="settings-menu-icon",this.bottomIconImg=Ns,this.bottomIconLabel="Settings Menu",this.sideMenuElementName="settings-menu",this.sideMenuElementHtml=l.bD.html`
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=l.bD.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e,t,a,i,s,n,o;(0,c.G)("settings-form").addEventListener("change",Os.onFormChange),(0,c.G)("settings-form").addEventListener("submit",Os.onSubmit);const l=[(0,Gs.S)([1,0,0,1]),(0,Gs.S)([1,.75,0,1]),(0,Gs.S)([.85,.5,0,1]),(0,Gs.S)([1,1,0,1]),(0,Gs.S)([0,1,0,1]),(0,Gs.S)([.2,1,0,.5]),(0,Gs.S)([.2,1,1,1]),(0,Gs.S)([0,0,1,1]),(0,Gs.S)([.2,.4,1,1]),(0,Gs.S)([.64,0,.64,1]),(0,Gs.S)([1,0,.6,1]),(0,Gs.S)([.5,.5,.5,1]),(0,Gs.S)([1,1,1,1])],r=this;Ps()("#settings-color-payload").colorPick({initialColor:(0,Gs.S)((null===(e=settingsManager.colors)||void 0===e?void 0:e.payload)||[.2,1,0,.5]),palette:l,onColorSelected:function(){r.onColorSelected(this,"payload")}}),Ps()("#settings-color-rocketBody").colorPick({initialColor:(0,Gs.S)((null===(t=settingsManager.colors)||void 0===t?void 0:t.rocketBody)||[.2,.4,1,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"rocketBody")}}),Ps()("#settings-color-debris").colorPick({initialColor:(0,Gs.S)((null===(a=settingsManager.colors)||void 0===a?void 0:a.debris)||[.5,.5,.5,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"debris")}}),Ps()("#settings-color-inview").colorPick({initialColor:(0,Gs.S)((null===(i=settingsManager.colors)||void 0===i?void 0:i.inFOV)||[.85,.5,0,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"inview")}}),Ps()("#settings-color-missile").colorPick({initialColor:(0,Gs.S)((null===(s=settingsManager.colors)||void 0===s?void 0:s.missile)||[1,1,0,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"missile")}}),Ps()("#settings-color-missileInview").colorPick({initialColor:(0,Gs.S)((null===(n=settingsManager.colors)||void 0===n?void 0:n.missileInview)||[1,0,0,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"missileInview")}}),Ps()("#settings-color-special").colorPick({initialColor:(0,Gs.S)((null===(o=settingsManager.colors)||void 0===o?void 0:o.pink)||[1,0,.6,1]),palette:l,onColorSelected:function(){r.onColorSelected(this,"pink")}}),this.isNotColorPickerInitialSetup=!0}})}onColorSelected(e,t){if(null==e)throw new Error("context is undefined");if(null==t)throw new Error("colorStr is undefined");if(e.element.css("cssText",`background-color: ${e.color} !important; color: ${e.color};`),this.isNotColorPickerInitialSetup){settingsManager.colors[t]=(e=>{let[t,a,i,s]=e.match(/(?<!\w)-?[\d.]+/gu);if(t=parseFloat(t)/255,a=parseFloat(a)/255,i=parseFloat(i)/255,s=parseFloat(s),t<0||t>1||a<0||a>1||i<0||i>1||s<0||s>1||isNaN(t)||isNaN(a)||isNaN(i)||isNaN(s))throw new Error("Invalid rgba input");return[t,a,i,s]})(e.color),Pa.j.legendColorsChange();const a=l.bD.getColorSchemeManager();a.setColorScheme(a.currentColorScheme,!0);try{localStorage.setItem("settingsManager-colors",JSON.stringify(settingsManager.colors))}catch(e){console.warn("Settings Manager: Unable to save color settings - localStorage issue!")}}}static onFormChange(e,t,a){var i,s,n;if(null==e)throw new Error("e is undefined");switch(null===(i=e.target)||void 0===i?void 0:i.id){case"settings-leoSats":case"settings-heoSats":case"settings-meoSats":case"settings-geoSats":case"settings-showPayloads":case"settings-showRocketBodies":case"settings-showDebris":case"settings-showAgencies":case"settings-drawOrbits":case"settings-drawTrailingOrbits":case"settings-drawEcf":case"settings-isDrawInCoverageLines":case"settings-drawSun":case"settings-drawBlackEarth":case"settings-drawAtmosphere":case"settings-drawAurora":case"settings-drawMilkyWay":case"settings-graySkybox":case"settings-eciOnHover":case"settings-hos":case"settings-demo-mode":case"settings-sat-label-mode":case"settings-freeze-drag":case"settings-time-machine-toasts":case"settings-snp":(0,c.G)(e.target.id).checked?null===(s=l.bD.getSoundManager())||void 0===s||s.play("toggleOn"):null===(n=l.bD.getSoundManager())||void 0===n||n.play("toggleOff")}null!=t||(t=(0,c.G)("settings-demo-mode").checked),null!=a||(a=(0,c.G)("settings-sat-label-mode").checked),a&&"settings-demo-mode"===e.target.id&&((0,c.G)("settings-sat-label-mode").checked=!1,(0,c.G)("settings-demo-mode").classList.remove("lever:after")),t&&"settings-sat-label-mode"===e.target.id&&((0,c.G)("settings-demo-mode").checked=!1,(0,c.G)("settings-sat-label-mode").classList.remove("lever:after"))}static onSubmit(e){var t,a;if(null==e)throw new Error("e is undefined");e.preventDefault();const i=l.bD.getUiManager(),s=l.bD.getColorSchemeManager();null===(t=l.bD.getSoundManager())||void 0===t||t.play("button"),settingsManager.isShowLeoSats=(0,c.G)("settings-leoSats").checked,settingsManager.isShowHeoSats=(0,c.G)("settings-heoSats").checked,settingsManager.isShowMeoSats=(0,c.G)("settings-meoSats").checked,settingsManager.isShowGeoSats=(0,c.G)("settings-geoSats").checked,settingsManager.isShowPayloads=(0,c.G)("settings-showPayloads").checked,settingsManager.isShowRocketBodies=(0,c.G)("settings-showRocketBodies").checked,settingsManager.isShowDebris=(0,c.G)("settings-showDebris").checked,settingsManager.isShowAgencies=(0,c.G)("settings-showAgencies").checked,settingsManager.isOrbitCruncherInEcf=(0,c.G)("settings-drawEcf").checked,settingsManager.isDrawInCoverageLines=(0,c.G)("settings-isDrawInCoverageLines").checked,settingsManager.isDrawSun=(0,c.G)("settings-drawSun").checked;let n=settingsManager.isBlackEarth!==(0,c.G)("settings-drawBlackEarth").checked,o=settingsManager.isDrawAtmosphere!==(0,c.G)("settings-drawAtmosphere").checked,r=settingsManager.isDrawAurora!==(0,c.G)("settings-drawAurora").checked;if(settingsManager.isBlackEarth=(0,c.G)("settings-drawBlackEarth").checked,settingsManager.isDrawAtmosphere=(0,c.G)("settings-drawAtmosphere").checked,settingsManager.isDrawAurora=(0,c.G)("settings-drawAurora").checked,n||o||r){const e=l.bD.getDrawManager();e.sceneManager.earth.init(settingsManager,e.gl),e.sceneManager.earth.loadHiRes(),e.sceneManager.earth.loadHiResNight()}settingsManager.isDrawOrbits=(0,c.G)("settings-drawOrbits").checked,settingsManager.isDrawTrailingOrbits=(0,c.G)("settings-drawTrailingOrbits").checked,l.bD.getOrbitManager().orbitWorker&&(settingsManager.isDrawTrailingOrbits?l.bD.getOrbitManager().orbitWorker.postMessage({orbitType:2}):l.bD.getOrbitManager().orbitWorker.postMessage({orbitType:1}));let d=settingsManager.isDrawMilkyWay!==(0,c.G)("settings-drawMilkyWay").checked,u=settingsManager.isGraySkybox!==(0,c.G)("settings-graySkybox").checked;if(settingsManager.isDrawMilkyWay=(0,c.G)("settings-drawMilkyWay").checked,settingsManager.isGraySkybox=(0,c.G)("settings-graySkybox").checked,d||u){const e=l.bD.getDrawManager();e.sceneManager.skybox.init(settingsManager,e.gl)}settingsManager.isEciOnHover=(0,c.G)("settings-eciOnHover").checked;const p=(0,c.G)("settings-hos").checked;settingsManager.colors.transparent=p?[1,1,1,0]:[1,1,1,.1],settingsManager.isDemoModeOn=(0,c.G)("settings-demo-mode").checked,settingsManager.isSatLabelModeOn=(0,c.G)("settings-sat-label-mode").checked,settingsManager.isShowNextPass=(0,c.G)("settings-snp").checked,settingsManager.isFreezePropRateOnDrag=(0,c.G)("settings-freeze-drag").checked,settingsManager.isDisableTimeMachineToasts=(0,c.G)("settings-time-machine-toasts").checked,l.bD.getPlugin(Rs.i)&&(l.bD.getPlugin(Rs.i).isMenuButtonEnabled=!1),l.bD.getGroupsManager().clearSelect(),s.setColorScheme(s.default,!0),null===(a=(0,c.G)("menu-time-machine"))||void 0===a||a.classList.remove("bmenu-item-selected"),s.reloadColors();const g=parseInt((0,c.G)("satFieldOfView").value);isNaN(g)?((0,c.G)("satFieldOfView").value="30",i.toast("Invalid field of view value!","critical")):l.bD.getCatalogManager().satCruncher.postMessage({typ:"isShowSatOverfly",selectedSatFOV:g});const m=parseInt((0,c.G)("maxSearchSats").value);isNaN(m)?((0,c.G)("maxSearchSats").value=settingsManager.searchLimit.toString(),i.toast("Invalid max search sats value!","critical")):(settingsManager.searchLimit=m,i.searchManager.doSearch(i.searchManager.getCurrentSearch())),s.setColorScheme(s.currentColorScheme,!0)}}Os.PLUGIN_NAME="Settings Menu";const Fs=new Os,Us=a.p+"../img/search.png";class _s extends Q.c{constructor(){super(_s.PLUGIN_NAME),this.dependencies=[Bi.H.PLUGIN_NAME,zi.P.PLUGIN_NAME],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=Us,this.isRequireSensorSelected=!0,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=l.bD.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
  <br><br>
  This is unlikely to be very helpful unless you own/operate a sensor with a search box functionality.`,this.sideMenuElementName="stf-menu",this.sideMenuElementHtml=l.bD.html`
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
  </div>`,this.isAddStfLinksOnce=!1}addHtml(){super.addHtml(),l.bD.register({event:l.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{null!=e&&(this.isAddStfLinksOnce||((0,c.G)("sat-info-top-links").insertAdjacentHTML("beforeend",l.bD.html`
            <div id="stf-on-object-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,c.G)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0))}})}addJs(){super.addJs(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,c.G)("stfForm").addEventListener("submit",(e=>{e.preventDefault(),this.onSubmit.bind(this)()})),(0,c.G)("stf-remove-last").addEventListener("click",(()=>{l.bD.getSensorManager().removeStf()})),(0,c.G)("stf-clear-all").addEventListener("click",(()=>{l.bD.getSensorManager().clearStf()}))}}),l.bD.register({event:"resetSensor",cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),l.bD.register({event:"setSensor",cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,u.kW)((0,c.G)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonEnabled=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),l.bD.getUiManager().hideSideMenus()}onSubmit(){var e;if(!this.verifySensorSelected())return;const t=l.bD.getSensorManager(),{lat:a,lon:i,alt:s}=t.currentSensors[0],n=parseFloat((0,c.G)("stf-az").value),o=parseFloat((0,c.G)("stf-azExt").value),r=parseFloat((0,c.G)("stf-el").value),d=parseFloat((0,c.G)("stf-elExt").value),u=parseFloat((0,c.G)("stf-rng").value),p=parseFloat((0,c.G)("stf-rngExt").value),m=n-o<0?n-o+360:n-o/2,h=n+o>360?n+o-360:n+o/2,b=r-d/2,v=r+d/2,S=u-p/2,y=u+p/2,M={lat:a,lon:i,alt:s,obsminaz:m,obsmaxaz:h,obsminel:b,obsmaxel:v,obsminrange:S,obsmaxrange:y,type:"Short Range Fence"};g.$.checkIsInView(t.currentSensors[0],{az:m,el:b,rng:S})&&g.$.checkIsInView(t.currentSensors[0],{az:h,el:v,rng:y})?(t.addStf(M),null===(e=l.bD.getPlugin(cs))||void 0===e||e.enableFovView()):f.x.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=l.bD.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=l.bD.getCatalogManager(),a=Mi.J.getTearr(t.getSat(t.selectedSat),e.currentSensors);(0,c.G)("stf-az").value=a.az.toFixed(1),(0,c.G)("stf-el").value=a.el.toFixed(1),(0,c.G)("stf-rng").value=a.rng.toFixed(1),l.bD.getUiManager().hideSideMenus(),(0,u.$k)((0,c.G)("stf-menu"),1e3),this.isMenuButtonEnabled=!0,this.setBottomIconToSelected()}}_s.PLUGIN_NAME="Short Term Fences";const Bs=new _s;var zs=a(3067);class $s extends Q.c{constructor(){super("Social Media"),this.dependencies=["Top Menu"]}addHtml(){super.addHtml(),l.bD.register({event:"uiManagerFinal",cbName:this.PLUGIN_NAME,cb:$s.uiManagerFinal_})}static uiManagerFinal_(){const e=document.createElement("li");e.innerHTML=l.bD.html`
          <a id="github-share1" class="top-menu-btns" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            width="22"
            height="22"
            style="margin-top: 1px;"
            src="${zs}"
            />
          </a>
          `,(0,c.G)("nav-mobile2").insertBefore(e,(0,c.G)("nav-mobile2").firstChild)}}const Hs=new $s;var js=a(6492),Vs=a(4427);class Js extends Q.c{constructor(){super(Js.PLUGIN_NAME),this.isRotateL=!0,this.isRotateR=!1,this.isRotateU=!1,this.isRotateD=!1,this.bottomIconElementName="video-director-icon",this.bottomIconImg=Ns,this.bottomIconLabel="Video Director",this.sideMenuElementName="video-director-menu",this.sideMenuElementHtml=l.bD.html`
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=l.bD.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),l.bD.register({event:l.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,c.G)("video-director-form").addEventListener("change",Js.onFormChange),(0,c.G)("video-director-form").addEventListener("submit",Js.onSubmit),(0,c.G)("video-director-rotate").addEventListener("click",(()=>{var e;null===(e=l.bD.getSoundManager())||void 0===e||e.play("button"),l.bD.getMainCamera().autoRotate(!0)}))}})}static onFormChange(e){var t,a,i;if(null==e)throw new Error("e is undefined");switch(null===(t=e.target)||void 0===t?void 0:t.id){case"video-director-rotateL":case"video-director-rotateR":case"video-director-rotateU":case"video-director-rotateD":case"video-director-panL":case"video-director-panR":case"video-director-panU":case"video-director-panD":case"video-director-zoomIn":case"video-director-zoomOut":(0,c.G)(e.target.id).checked?null===(a=l.bD.getSoundManager())||void 0===a||a.play("toggleOn"):null===(i=l.bD.getSoundManager())||void 0===i||i.play("toggleOff")}(0,c.G)("video-director-selectedColor").checked&&0!==settingsManager.selectedColor[3]?(settingsManager.selectedColorFallback=settingsManager.selectedColor,settingsManager.selectedColor=[0,0,0,0]):settingsManager.selectedColor=settingsManager.selectedColorFallback,settingsManager.autoRotateSpeed=parseFloat((0,c.G)("video-director-rotateSpeed").value),settingsManager.autoPanSpeed=parseFloat((0,c.G)("video-director-panSpeed").value),settingsManager.autoZoomSpeed=parseFloat((0,c.G)("video-director-zoomSpeed").value);const s=(0,c.G)("video-director-rotateL").checked,n=(0,c.G)("video-director-rotateR").checked,o=(0,c.G)("video-director-rotateU").checked,r=(0,c.G)("video-director-rotateD").checked,d=(0,c.G)("video-director-panL").checked,u=(0,c.G)("video-director-panR").checked,p=(0,c.G)("video-director-panU").checked,g=(0,c.G)("video-director-panD").checked,m=(0,c.G)("video-director-zoomIn").checked,h=(0,c.G)("video-director-zoomOut").checked;s&&!settingsManager.isAutoRotateL&&((0,c.G)("video-director-rotateR").checked=!1),n&&!settingsManager.isAutoRotateR&&((0,c.G)("video-director-rotateL").checked=!1),o&&!settingsManager.isAutoRotateU&&((0,c.G)("video-director-rotateD").checked=!1),r&&!settingsManager.isAutoRotateD&&((0,c.G)("video-director-rotateU").checked=!1),d&&!settingsManager.isAutoPanL&&((0,c.G)("video-director-panR").checked=!1),u&&!settingsManager.isAutoPanR&&((0,c.G)("video-director-panL").checked=!1),p&&!settingsManager.isAutoPanU&&((0,c.G)("video-director-panD").checked=!1),g&&!settingsManager.isAutoPanD&&((0,c.G)("video-director-panU").checked=!1),m&&!settingsManager.isAutoZoomIn&&((0,c.G)("video-director-zoomOut").checked=!1),h&&!settingsManager.isAutoZoomOut&&((0,c.G)("video-director-zoomIn").checked=!1)}static onSubmit(e){var t;if(null==e)throw new Error("e is undefined");e.preventDefault(),null===(t=l.bD.getSoundManager())||void 0===t||t.play("button"),settingsManager.isAutoRotateR=(0,c.G)("video-director-rotateR").checked,settingsManager.isAutoRotateL=(0,c.G)("video-director-rotateL").checked,settingsManager.isAutoRotateU=(0,c.G)("video-director-rotateU").checked,settingsManager.isAutoRotateD=(0,c.G)("video-director-rotateD").checked,settingsManager.isAutoPanR=(0,c.G)("video-director-panR").checked,settingsManager.isAutoPanL=(0,c.G)("video-director-panL").checked,settingsManager.isAutoPanU=(0,c.G)("video-director-panU").checked,settingsManager.isAutoPanD=(0,c.G)("video-director-panD").checked,settingsManager.isAutoZoomIn=(0,c.G)("video-director-zoomIn").checked,settingsManager.isAutoZoomOut=(0,c.G)("video-director-zoomOut").checked}}Js.PLUGIN_NAME="Video Director";const Ks=new Js;var Ws=a(4677),Xs=a(5474);const Ys=(e,t)=>{return a=void 0,i=void 0,n=function*(){null!=t||(t={});try{t.debug&&li.x.init();const a=new zi.P;a.init(),Da.I.registerSingleton(Qe.Yv.SelectSatManager,a),t.topMenu&&Aa.t.init(),t.satInfoboxCore&&Bi.P.init(),t.updateSelectBoxCore&&Vs.i.init(),t.datetime&&si.t.init(),t.social&&Hs.init(),t.classificationBar&&Ya.init(),t.sensor&&(Ts.init(),ks.init(),Ms.init(),xs.init(),Ss.init()),t.watchlist&&(Ws.P.init(),Xs.n.init()),t.nextLaunch&&Oi.init(),t.findSat&&wi.init(),t.shortTermFences&&Bs.init(),t.orbitReferences&&Hi.init(),t.collisions&&Qa.init(),t.breakup&&Ka.init(),t.debrisScreening&&oi.init(),t.editSat&&fi.init(),t.newLaunch&&Gi.init(),t.initialOrbit&&fe(),t.missile&&He(),t.stereoMap&&js.M.init(),t.sensorFov&&ds.init(),t.sensorSurv&&gs.init(),t.satelliteView&&na.init(),t.satelliteFov&&Zi.init(),t.planetarium&&Fa.init(),t.astronomy&&_a.init(),t.nightToggle&&_i.init(),t.dops&&mi.init(),t.constellations&&Wi.init(),t.countries&&te.init(),t.colorsMenu&&ii.init(),t.screenshot&&ls.init(),t.launchCalendar&&Ei.init(),t.timeMachine&&Rs.M.init(),t.photoManager&&es.init(),t.screenRecorder&&ss.init(),t.analysis&&U(),t.plotAnalysis&&jt(),t.aboutManager&&Ga.init(),t.settingsMenu&&Fs.init(),t.soundManager&&ka.init(),t.gamepad&&Di.init(),t.videoDirector&&Ks.init(),e.register({event:l.RL.uiManagerFinal,cbName:"core",cb:()=>{Zs(t)}})}catch(e){f.x.info("Error loading core plugins:"+e.message)}},new((s=void 0)||(s=Promise))((function(e,t){function o(e){try{r(n.next(e))}catch(e){t(e)}}function l(e){try{r(n.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(o,l)}r((n=n.apply(a,i||[])).next())}));var a,i,s,n},Zs=e=>{const t=(0,c.G)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",e+"px")}else document.documentElement.style.setProperty("--bottom-menu-height","0px");if(e.topMenu){let e=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(e)&&(e=0),settingsManager.isMobileModeEnabled?document.documentElement.style.setProperty("--top-menu-height",e+17+"px"):document.documentElement.style.setProperty("--top-menu-height",e+22+"px")}(0,c.G)("bottom-icons")&&""==(0,c.G)("bottom-icons").innerText&&((0,c.G)("nav-footer").style.visibility="hidden");const a=(0,c.G)("bottom-icons-container");if(a){const e=a.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",e+"px")}e.aboutManager&&((0,c.G)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"keeptrack.space"!==window.location.hostname&&"www.keeptrack.space"!==window.location.hostname||qs(),(0,c.G)("bottom-icons-container").addEventListener("mousewheel",(e=>{e.preventDefault(),((e,t)=>{const a=e.scrollTop+.15*t;e.scrollTop=a})(e.currentTarget,e.deltaY)}),{passive:!1})},qs=()=>{const e=document.createElement("script");e.type="text/javascript",e.setAttribute("async","true"),e.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7"),document.documentElement.firstChild.appendChild(e),window.dataLayer=window.dataLayer||[];const t=function(e,t){window.dataLayer.push(arguments)};t("js",new Date),t("config","G-ENHWK6L0X7")}}}]);