"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[694],{3862:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(3835),s=i.n(a),n=i(8645),o=i.n(n)()(s());o.push([e.id,"#reset-sensor-button {\n  margin: 10px 0px;\n}\n\n#reset-sensor-text {\n  text-align: center;\n}\n\n#list-of-sensors li:first-child {\n  display: none;\n}\n\n#sensor-list-content ul li {\n  padding: 2px !important;\n  overflow: hidden !important;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n/* First span goes left */\n#sensor-list-content ul li span:first-child {\n  float: left;\n  text-align: left;\n}\n\n/* Second span is centered */\n#sensor-list-content ul li span:nth-child(2) {\n  text-align: center;\n}\n\n/* Third span goes right */\n#sensor-list-content ul li span:last-child {\n  float: right;\n  text-align: right;\n}\n",""]);const l=o},1986:(e,t,i)=>{i.r(t),i.d(t,{CanvasRecorder:()=>Mi,catalogLoader:()=>tt,loadPlugins:()=>ya,missile:()=>a,startGoogleAnalytics:()=>ka,uiManagerFinal:()=>La});var a={};i.r(a),i.d(a,{bottomMenuClick:()=>_,hideSideMenus:()=>I,init:()=>$,missileChange:()=>R,missileSubmit:()=>D,msAttackerChange:()=>z,msErrorClick:()=>P,msTargetChange:()=>O,onHelpMenuClick:()=>H,searchForRvs:()=>U,uiManagerFinal:()=>B,uiManagerInit:()=>F,updateLoop:()=>N});var s=i(8386),n=i(165),o=i(2833),l=i(3938),r=i(1520),c=i(8104);const d=i.p+"../img/flag.png";var u=i(8475),g=i(9085),p=i(5514);class h extends u.c{constructor(){super(h.PLUGIN_NAME),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=d,this.bottomIconLabel="Countries",this.sideMenuElementHtml=l.b.html`
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
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=l.b.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("country-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){var e;null===(e=l.b.getSoundManager())||void 0===e||e.play(p.p.CLICK),h.countryMenuClick_(this.getAttribute("data-group"))}))})),(0,s.E)((0,n.Gn)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=l.b.getGroupsManager(),i=c.n.getCountryCode(e);if(""===i)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(r.Y.COUNTRY,i,e),h.groupSelected_(e)}static groupSelected_(e){var t;const i=l.b.getGroupsManager(),a=l.b.getCatalogManager(),s=l.b.getUiManager(),o=(0,n.Gn)("search");void 0!==e&&void 0!==i.groupList[e]&&(i.selectGroup(i.groupList[e]),i.groupList[e].ids.length<settingsManager.searchLimit?s.searchManager.doSearch(i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1)):(o.value=i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1),s.searchManager.fillResultBox(i.groupList[e].ids.map((e=>({id:e}))),a)),null===(t=l.b.getPlugin(g.P))||void 0===t||t.selectSat(-1),settingsManager.isMobileModeEnabled&&s.searchManager.closeSearch(),s.hideSideMenus())}}h.PLUGIN_NAME="Countries Menu";const m=new h;var b=i(2376),v=i(3384),S=i(6002);const f=i.p+"../img/find2.png";var M=i(9772),w=i(5347);class y extends u.c{static checkAz(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,w.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.az>=t&&a.az<=i}))}static checkEl(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,w.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.el>=t&&a.el<=i}))}static checkInview(e){const t=l.b.getDotsManager();return e.filter((e=>1===t.inViewData[e.id]))}static checkObjtype(e,t){return e.filter((e=>e.type===t))}static checkRange(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,w.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.rng>=t&&a.rng<=i}))}static limitPossibles(e,t){const i=l.b.getUiManager();return e.length>=t&&i.toast(`Too many results, limited to ${t}`,"serious"),e.slice(0,t)}static searchSats(e){let{az:t,el:i,rng:a,countryCode:s,inc:o,azMarg:r,elMarg:c,rngMarg:d,incMarg:u,period:g,periodMarg:p,rcs:h,rcsMarg:m,objType:b,raan:v,raanMarg:S,argPe:f,argPeMarg:w,bus:C,shape:L,payload:k}=e;const E=!isNaN(t)&&isFinite(t),A=!isNaN(i)&&isFinite(i),T=!isNaN(a)&&isFinite(a),x=!isNaN(o)&&isFinite(o),G=!isNaN(v)&&isFinite(v),N=!isNaN(f)&&isFinite(f),I=!isNaN(g)&&isFinite(g),_=!isNaN(h)&&isFinite(h),R="All"!==s,P="All"!==C,O="All"!==L,D="All"!==k;if(r=!isNaN(r)&&isFinite(r)?r:5,c=!isNaN(c)&&isFinite(c)?c:5,d=!isNaN(d)&&isFinite(d)?d:200,u=!isNaN(u)&&isFinite(u)?u:1,p=!isNaN(p)&&isFinite(p)?p:.5,m=!isNaN(m)&&isFinite(m)?m:h/10,S=!isNaN(S)&&isFinite(S)?S:1,w=!isNaN(w)&&isFinite(w)?w:1,!(A||T||E||x||I||_||N||G||R||P||O||D))throw new Error("No Search Criteria Entered");let F=l.b.getCatalogManager().getSats();if(F=x||I||!(E||A||T)?F:y.checkInview(F),F=0!==b?y.checkObjtype(F,b):F,E&&(F=y.checkAz(F,t-r,t+r)),A&&(F=y.checkEl(F,i-c,i+c)),T&&(F=y.checkRange(F,a-d,a+d)),x&&(F=y.checkInc(F,o-u,o+u)),G&&(F=y.checkRightAscension(F,v-S,v+S)),N&&(F=y.checkArgPe(F,f-w,f+w)),I&&(F=y.checkPeriod(F,g-p,g+p)),_&&(F=y.checkRcs(F,h-m,h+m)),"All"!==s){let e=s.split("|").map((e=>M.Aj[e]));e=e.filter(((t,i)=>t&&e.indexOf(t)===i)),F=F.filter((t=>e.includes(t.country)))}"All"!==C&&(F=F.filter((e=>e.bus===C))),"All"!==L&&(F=F.filter((e=>e.shape===L))),"All"!==k&&(F=F.filter((e=>{var t,i,a;return(null===(a=null===(i=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===i?void 0:i.split("-")[0])||void 0===a?void 0:a.replace(/[^a-zA-Z]/gu,""))===k}))),F=y.limitPossibles(F,settingsManager.searchLimit);let U="";return F.forEach(((e,t)=>{U+=t<F.length-1?`${e.sccNum},`:`${e.sccNum}`})),(0,n.Gn)("search").value=U,l.b.getUiManager().doSearch((0,n.Gn)("search").value),F}findByLooksSubmit(){return e=this,t=void 0,a=function*(){const e=l.b.getUiManager(),t=parseFloat((0,n.Gn)("fbl-azimuth").value),i=parseFloat((0,n.Gn)("fbl-elevation").value),a=parseFloat((0,n.Gn)("fbl-range").value),s=parseFloat((0,n.Gn)("fbl-inc").value),o=parseFloat((0,n.Gn)("fbl-period").value),r=parseFloat((0,n.Gn)("fbl-rcs").value),c=parseFloat((0,n.Gn)("fbl-azimuth-margin").value),d=parseFloat((0,n.Gn)("fbl-elevation-margin").value),u=parseFloat((0,n.Gn)("fbl-range-margin").value),g=parseFloat((0,n.Gn)("fbl-inc-margin").value),p=parseFloat((0,n.Gn)("fbl-period-margin").value),h=parseFloat((0,n.Gn)("fbl-rcs-margin").value),m=parseInt((0,n.Gn)("fbl-type").value),b=parseFloat((0,n.Gn)("fbl-raan").value),v=parseFloat((0,n.Gn)("fbl-raan-margin").value),S=parseFloat((0,n.Gn)("fbl-argPe").value),f=parseFloat((0,n.Gn)("fbl-argPe-margin").value),M=(0,n.Gn)("fbl-country").value,w=(0,n.Gn)("fbl-bus").value,C=(0,n.Gn)("fbl-payload").value,L=(0,n.Gn)("fbl-shape").value;(0,n.Gn)("search").value="";try{const n={az:t,el:i,rng:a,inc:s,azMarg:c,elMarg:d,rngMarg:u,incMarg:g,period:o,periodMarg:p,rcs:r,rcsMarg:h,objType:m,raan:b,raanMarg:v,argPe:S,argPeMarg:f,countryCode:M,bus:w,payload:C,shape:L};this.lastResults=y.searchSats(n),0===this.lastResults.length&&e.toast("No Satellites Found","critical")}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered","critical")}},new((i=void 0)||(i=Promise))((function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}));var e,t,i,a}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerInit,cbName:"findSat",cb:()=>{(0,n.Gn)("fbl-error").addEventListener("click",(function(){(0,n.Gn)("fbl-error").style.display="none"}))}}),l.b.register({event:o.RL.uiManagerFinal,cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}constructor(){super(y.PLUGIN_NAME),this.lastResults=[],this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=l.b.html`
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
              <label for="fbl-azimuth" class="active">Azimuth (deg)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="5" id="fbl-azimuth-margin" type="text">
              <label for="fbl-azimuth-margin "class="active">Margin (deg)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-elevation" type="text">
              <label for="fbl-elevation "class="active">Elevation (deg)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="5" id="fbl-elevation-margin" type="text">
              <label for="fbl-elevation-margin "class="active">Margin (deg)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="xxxx.x" id="fbl-range" type="text">
              <label for="fbl-range "class="active">Range (km)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="500" id="fbl-range-margin" type="text">
              <label for="fbl-range-margin "class="active">Margin (km)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-inc" type="text">
              <label for="fbl-inc "class="active">Inclination (deg)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="0.5" placeholder="0.5" id="fbl-inc-margin" type="text">
              <label for="fbl-inc-margin "class="active">Margin (deg)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-period" type="text">
              <label for="fbl-period "class="active">Period (min)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="10" placeholder="10" id="fbl-period-margin" type="text">
              <label for="fbl-period-margin "class="active">Margin (min)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-rcs" type="text">
              <!-- RCS in meters squared -->
              <label for="fbl-rcs "class="active">RCS (m<sup>2</sup>)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="10" placeholder="10" id="fbl-rcs-margin" type="text">
              <label for="fbl-rcs-margin "class="active">Margin (m<sup>2</sup>)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-raan" type="text">
              <label for="fbl-raan "class="active">Right Ascension (deg)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="0.5" placeholder="0.5" id="fbl-raan-margin" type="text">
              <label for="fbl-raan-margin "class="active">Margin (deg)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-argPe" type="text">
              <label for="fbl-argPe "class="active">Arg of Perigee (deg)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="0.5" placeholder="0.5" id="fbl-argPe-margin" type="text">
              <label for="fbl-argPe-margin "class="active">Margin (deg)</label>
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
  </div>`,this.bottomIconElementName="menu-find-sat",this.bottomIconImg=f,this.bottomIconLabel="Find Satellite",this.helpTitle="Find Satellite Menu",this.helpBody=l.b.html`The Find Satellite Menu is used for finding satellites by orbital parameters or satellite characteristics.
<br><br>
For most parameters, you type in the target value on the left and then a margin of error on the right.
For example, if you wanted to find all satellites in a 51-52 degree inclination, you can type 51.5 in the left box and 0.5 in the right box.
The search will then find all satellites within those inclinations and display them in the search bar.
`}printLastResults(){S.x.info(this.lastResults.map((e=>e.name)).join("\n"))}uiManagerFinal(){const e=l.b.getCatalogManager().objectCache;(0,n.Gn)("findByLooks-form").addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>{this.findByLooksSubmit(),(0,v.Zk)()}))})),(0,b.d)(e.filter((e=>null==e?void 0:e.bus)).map((e=>e.bus))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,n.Gn)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})),M.hA.forEach((e=>{(0,n.Gn)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${M.cs[e]}">${e}</option>`)})),(0,b.d)(e.filter((e=>null==e?void 0:e.shape)).map((e=>e.shape))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,n.Gn)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}));const t=e.filter((e=>null==e?void 0:e.payload)).map((e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,""))).filter((e=>e.length>=3));(0,b.d)(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{""!==e&&e.length>3&&(0,n.Gn)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}))}static checkArgPe(e,t,i){return e.filter((e=>e.argOfPerigee<i&&e.argOfPerigee>t))}static checkInc(e,t,i){return e.filter((e=>e.inclination<i&&e.inclination>t))}static checkPeriod(e,t,i){return e.filter((e=>e.period>t&&e.period<i))}static checkRightAscension(e,t,i){return e.filter((e=>e.rightAscension<i&&e.rightAscension>t))}static checkRcs(e,t,i){return e.filter((e=>e.rcs>t&&e.rcs<i))}}y.PLUGIN_NAME="findSat";var C=i(6633);const L=i.p+"../img/missile.png";var k=i(8437);const E=l.b.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var A=i(2869);let T=!1,x=!1,G=0;const N=()=>{if(void 0!==A.CC&&A.CC.missileArray.length>0){const e=l.b.getOrbitManager();for(G=0;G<A.CC.missileArray.length;G++)e.updateOrbitBuffer(A.CC.missileArray[G].id)}},I=()=>{(0,C.kW)((0,n.Gn)("missile-menu"),1e3),(0,n.Gn)("menu-missile").classList.remove("bmenu-item-selected"),T=!1},_=e=>{if("menu-missile"===e){const e=l.b.getUiManager();return T?(T=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.closeSearch(),e.hideSideMenus(),(0,C.$k)((0,n.Gn)("missile-menu"),1e3),(0,n.Gn)("menu-missile").classList.add("bmenu-item-selected"),void(T=!0))}},R=()=>{0!==parseFloat((0,n.Gn)("ms-type").value)?(0,n.Gn)("ms-custom-opt").style.display="none":(0,n.Gn)("ms-custom-opt").style.display="block"},P=()=>{(0,n.Gn)("ms-error").style.display="none"},O=()=>{-1!==parseInt((0,n.Gn)("ms-target").value)?((0,n.Gn)("ms-tgt-holder-lat").style.display="none",(0,n.Gn)("ms-tgt-holder-lon").style.display="none"):((0,n.Gn)("ms-tgt-holder-lat").style.display="block",(0,n.Gn)("ms-tgt-holder-lon").style.display="block")},D=()=>{(0,v.QP)((()=>{const e=l.b.getTimeManager(),t=l.b.getUiManager();(0,n.Gn)("ms-error").style.display="none";const i=parseFloat((0,n.Gn)("ms-type").value),a=parseFloat((0,n.Gn)("ms-attacker").value);let s=parseFloat((0,n.Gn)("ms-lat-lau").value),o=parseFloat((0,n.Gn)("ms-lon-lau").value);const r=parseFloat((0,n.Gn)("ms-target").value);let c=parseFloat((0,n.Gn)("ms-lat").value),d=parseFloat((0,n.Gn)("ms-lon").value);const u=e.selectedDate.getTime();let g="";if(1===i&&(g="simulation/Russia2USA.json",A.CC.MassRaidPre(u,g)),2===i&&(g="simulation/Russia2USAalt.json",A.CC.MassRaidPre(u,g)),3===i&&(g="simulation/China2USA.json",A.CC.MassRaidPre(u,g)),4===i&&(g="simulation/NorthKorea2USA.json",A.CC.MassRaidPre(u,g)),5===i&&(g="simulation/USA2Russia.json",A.CC.MassRaidPre(u,g)),6===i&&(g="simulation/USA2China.json",A.CC.MassRaidPre(u,g)),7===i&&(g="simulation/USA2NorthKorea.json",A.CC.MassRaidPre(u,g)),0!==i&&t.toast(`${g} Loaded`,"standby",!0),0===i){if(-1===r){if(isNaN(c))return t.toast("Invalid Target Latitude!","critical"),void((0,n.Gn)("loading-screen").style.display="none");if(isNaN(d))return t.toast("Invalid Target Longitude!","critical"),void((0,n.Gn)("loading-screen").style.display="none")}else c=A.CC.globalBMTargets[3*r],d=A.CC.globalBMTargets[3*r+1];if(x){if(isNaN(s))return t.toast("Invalid Launch Latitude!","critical"),void((0,n.Gn)("loading-screen").style.display="none");if(isNaN(o))return t.toast("Invalid Launch Longitude!","critical"),void((0,n.Gn)("loading-screen").style.display="none")}let e,i;const g=l.b.getCatalogManager();if(a<200){e=a-100,i=500-A.CC.missilesInUse;let t=1200;100!=a&&(s=A.CC.UsaICBM[4*e],o=A.CC.UsaICBM[4*e+1],t=1100),A.CC.Missile(s,o,c,d,3,g.missileSats-i,u,A.CC.UsaICBM[4*e+2],30,2.9,.07,A.CC.UsaICBM[4*e+3],"United States",t)}else if(a<300){e=a-200,i=500-A.CC.missilesInUse;const t=1120;213!=a&&214!=a&&215!=a&&(s=A.CC.RussianICBM[4*e],o=A.CC.RussianICBM[4*e+1]),A.CC.Missile(s,o,c,d,3,g.missileSats-i,u,A.CC.RussianICBM[4*e+2],30,2.9,.07,A.CC.RussianICBM[4*e+3],"Russia",t)}else if(a<400){e=a-300,i=500-A.CC.missilesInUse;const t=1120;321!=a&&(s=A.CC.ChinaICBM[4*e],o=A.CC.ChinaICBM[4*e+1]),A.CC.Missile(s,o,c,d,3,g.missileSats-i,u,A.CC.ChinaICBM[4*e+2],30,2.9,.07,A.CC.ChinaICBM[4*e+3],"China",t)}else if(a<500){e=a-400,i=500-A.CC.missilesInUse;const t=1120;400!=a&&(s=A.CC.NorthKoreanBM[4*e],o=A.CC.NorthKoreanBM[4*e+1]),A.CC.Missile(s,o,c,d,3,g.missileSats-i,u,A.CC.NorthKoreanBM[4*e+2],30,2.9,.07,A.CC.NorthKoreanBM[4*e+3],"North Korea",t)}else if(a<600){e=a-500,i=500-A.CC.missilesInUse;const t=1e3;500!=a&&(s=A.CC.FraSLBM[4*e],o=A.CC.FraSLBM[4*e+1]),A.CC.Missile(s,o,c,d,3,g.missileSats-i,u,A.CC.FraSLBM[4*e+2],30,2.9,.07,A.CC.FraSLBM[4*e+3],"France",t)}else if(a<700){e=a-600,i=500-A.CC.missilesInUse;const t=1200;600!=a&&(s=A.CC.ukSLBM[4*e],o=A.CC.ukSLBM[4*e+1]),A.CC.Missile(s,o,c,d,3,g.missileSats-i,u,A.CC.ukSLBM[4*e+2],30,2.9,.07,A.CC.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(A.CC.lastMissileError,A.CC.lastMissileErrorType),t.doSearch("RV_")}(0,n.Gn)("loading-screen").style.display="none"}))},F=()=>{(0,n.Gn)("left-menus").insertAdjacentHTML("beforeend",l.b.html`
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
      `),(0,n.Gn)("bottom-icons").insertAdjacentHTML("beforeend",l.b.html`
        <div id="menu-missile" class="bmenu-item">
          <img
            alt="missile"
            src="" delayedsrc=${L}
          />
          <span class="bmenu-title">Missile</span>
          <div class="status-icon"></div>
        </div>
        `)},U=()=>{l.b.getUiManager().doSearch("RV_")},B=()=>{(0,s.E)((0,n.Gn)("missile-menu")),(0,n.Gn)("missile").addEventListener("submit",(e=>{e.preventDefault(),D()})),(0,n.Gn)("ms-attacker").addEventListener("change",z),(0,n.Gn)("ms-target").addEventListener("change",O),(0,n.Gn)("ms-error").addEventListener("click",P),(0,n.Gn)("missile").addEventListener("change",R),(0,n.Gn)("searchRvBtn").addEventListener("click",U),z(),O()},$=()=>{l.b.register({event:o.RL.uiManagerInit,cbName:"missile",cb:F}),l.b.register({event:o.RL.uiManagerFinal,cbName:"missile",cb:B}),l.b.register({event:o.RL.bottomMenuClick,cbName:"missile",cb:_}),l.b.register({event:o.RL.hideSideMenus,cbName:"missile",cb:I}),l.b.register({event:o.RL.updateLoop,cbName:"updateMissileOrbits",cb:N}),l.b.register({event:o.RL.onHelpMenuClick,cbName:"missile",cb:H})},H=()=>!!T&&(k.v.showAdvice("Missile Menu",E),!0),z=()=>{x=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,n.Gn)("ms-attacker").value)&&(x=!0);x?((0,n.Gn)("ms-lau-holder-lat").style.display="block",(0,n.Gn)("ms-lau-holder-lon").style.display="block"):((0,n.Gn)("ms-lau-holder-lat").style.display="none",(0,n.Gn)("ms-lau-holder-lon").style.display="none")};var j=i(3786),V=i(6731);const K=i.p+"../img/sat3.png";class W extends u.c{constructor(){super(W.PLUGIN_NAME),this.dependencies=[g.P.PLUGIN_NAME],this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=K,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{l.b.getMainCamera().cameraType===V.i.SATELLITE?(l.b.getUiManager().hideSideMenus(),l.b.getMainCamera().cameraType=V.i.FIXED_TO_SAT,(0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected")):-1!==this.selectSatManager_.selectedSat?(l.b.getMainCamera().cameraType=V.i.SATELLITE,(0,n.Gn)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(l.b.getUiManager().toast("Select a Satellite First!","caution"),(0,j.l)((0,n.Gn)(this.bottomIconElementName)))},this.lastLongAudioTime=0,this.selectSatManager_=l.b.getPlugin(g.P)}}W.PLUGIN_NAME="Satellite View";var Y=i(8769);const J=i.p+"../audio/beep1.mp3",X=i.p+"../audio/button.mp3",q=i.p+"../audio/button2.mp3",Q=i.p+"../audio/chatter1.mp3",Z=i.p+"../audio/chatter2.mp3",ee=i.p+"../audio/chatter3.mp3",te=i.p+"../audio/chatter4.mp3",ie=i.p+"../audio/chatter5.mp3",ae=i.p+"../audio/chatter6.mp3",se=i.p+"../audio/chatter7.mp3",ne=i.p+"../audio/chatter8.mp3",oe=i.p+"../audio/click10.mp3",le=i.p+"../audio/click11.mp3",re=i.p+"../audio/click12.mp3",ce=i.p+"../audio/click13.mp3",de=i.p+"../audio/click14.mp3",ue=i.p+"../audio/click15.mp3",ge=i.p+"../audio/click16.mp3",pe=i.p+"../audio/click17.mp3",he=i.p+"../audio/click18.mp3",me=i.p+"../audio/click19.mp3",be=i.p+"../audio/click2.mp3",ve=i.p+"../audio/click20.mp3",Se=i.p+"../audio/click21.mp3",fe=i.p+"../audio/click22.mp3",Me=i.p+"../audio/click23.mp3",we=i.p+"../audio/click24.mp3",ye=i.p+"../audio/click25.mp3",Ce=i.p+"../audio/click26.mp3",Le=i.p+"../audio/click27.mp3",ke=i.p+"../audio/click28.mp3",Ee=i.p+"../audio/click29.mp3",Ae=i.p+"../audio/click3.mp3",Te=i.p+"../audio/click30.mp3",xe=i.p+"../audio/click4.mp3",Ge=i.p+"../audio/click7.mp3",Ne=i.p+"../audio/click8.mp3",Ie=i.p+"../audio/error.mp3",_e=i.p+"../audio/error2.mp3",Re=i.p+"../audio/export.wav",Pe=i.p+"../audio/genericBeep1.mp3",Oe=i.p+"../audio/genericBeep2.mp3",De=i.p+"../audio/genericBeep3.mp3",Fe=i.p+"../audio/liftoff.mp3",Ue=i.p+"../audio/loading.wav",Be=i.p+"../audio/pop.mp3",$e=i.p+"../audio/switch.mp3",He=i.p+"../audio/toggle-off.mp3",ze=i.p+"../audio/toggle-on.mp3",je=i.p+"../audio/whoosh1.mp3",Ve=i.p+"../audio/whoosh2.mp3",Ke=i.p+"../audio/whoosh3.mp3",We=i.p+"../audio/whoosh4.mp3",Ye=i.p+"../audio/whoosh5.mp3",Je=i.p+"../audio/whoosh6.mp3",Xe=i.p+"../audio/whoosh7.mp3",qe=i.p+"../audio/whoosh8.mp3";class Qe extends u.c{constructor(){super("Sound Manager"),this.lastLongAudioTime=0,this.isMute=!1,this.currentChatterClip_=0,this.voices=[],this.maxClickClip_=0,this.sounds={standby:new Audio(Be),error1:new Audio(Ie),error2:new Audio(_e),export:new Audio(Re),click:new Audio($e),beep1:new Audio(J),genericBeep1:new Audio(Pe),genericBeep2:new Audio(Oe),genericBeep3:new Audio(De),whoosh1:new Audio(je),whoosh2:new Audio(Ve),whoosh3:new Audio(Ke),whoosh4:new Audio(We),whoosh5:new Audio(Ye),whoosh6:new Audio(Je),whoosh7:new Audio(Xe),whoosh8:new Audio(qe),click1:new Audio(Te),click2:new Audio(be),click3:new Audio(Ae),click4:new Audio(xe),click5:new Audio(Ee),click6:new Audio(Le),click7:new Audio(Ge),click8:new Audio(Ne),click9:new Audio(ke),click10:new Audio(oe),click11:new Audio(le),click12:new Audio(re),click13:new Audio(ce),click14:new Audio(de),click15:new Audio(ue),click16:new Audio(ge),click17:new Audio(pe),click18:new Audio(he),click19:new Audio(me),click20:new Audio(ve),click21:new Audio(Se),click22:new Audio(fe),click23:new Audio(Me),click24:new Audio(we),click25:new Audio(ye),click26:new Audio(Ce),chatter1:new Audio(Q),chatter2:new Audio(Z),chatter3:new Audio(ee),chatter4:new Audio(te),chatter5:new Audio(ie),chatter6:new Audio(ae),chatter7:new Audio(se),chatter8:new Audio(ne),loading:new Audio(Ue),button:new Audio(X),menuButton:new Audio(q),toggleOn:new Audio(ze),toggleOff:new Audio(He),liftoff:new Audio(Fe)},this.addJs=()=>{super.addJs(),Y.I.registerSingleton(o.Yv.SoundManager,this),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{this.voices=speechSynthesis.getVoices()}}),this.sounds.loading.volume=.25,this.sounds.export.volume=.3,this.sounds.error2.volume=.5},Object.keys(this.sounds).forEach((e=>{if(e.startsWith("click")){const t=parseInt(e.replace("click",""));t>this.maxClickClip_&&(this.maxClickClip_=t)}}))}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter((function(e){return"Google UK English Female"==e.name}))[0],window.speechSynthesis.speak(t)}stop(e,t=!0){if(e===p.p.CHATTER){clearTimeout(this.nextChatter);for(let e=1;e<=8;e++)this.stop(`chatter${e}`,t);return}const i=this.sounds[e];t&&Qe.fadeOut_(i)}static fadeOut_(e,t=1e3){const i=e.volume,a=t/10,s=e.volume/a;let n=0;const o=setInterval((()=>{n++,e.volume>.05&&(e.volume-=s),n===a&&(e.pause(),e.currentTime=0,clearInterval(o),e.volume=i)}),10)}play(e){var t;if(!(null===(t=navigator.userActivation)||void 0===t?void 0:t.hasBeenActive))return;if(this.isMute)return;if((0,n.Gn)("loading-screen").classList.contains("fullscreen"))return;let i,a=1;switch(e){case p.p.BEEP:return a=Math.floor(3*Math.random())+1,i=this.sounds[`genericBeep${a}`],void i.play();case p.p.WHOOSH:return a=Math.floor(8*Math.random())+1,i=this.sounds[`whoosh${a}`],void i.play();case p.p.ERROR:if(this.lastLongAudioTime+12e5>Date.now())return;return this.lastLongAudioTime=Date.now(),a=Math.floor(2*Math.random())+1,i=this.sounds[`error${a}`],void i.play();case p.p.CLICK:return a=Math.floor(Math.random()*this.maxClickClip_)+1,i=this.sounds[`click${a}`],i.volume=.25,void i.play();case p.p.CHATTER:return a=Math.floor(8*Math.random())+1,a===this.currentChatterClip_&&(a++,a>8&&(a=1)),i=this.sounds[`chatter${a}`],i.volume=.15,this.stop(p.p.CHATTER,!1),i.play(),void(this.nextChatter=setTimeout((()=>{this.play(p.p.CHATTER)}),1e3*i.duration+1e4));default:return i=this.sounds[e],void i.play()}}}const Ze=new Qe;var et=i(4601),tt=i(3447),it=i(5459),at=i(1352),st=i(3967);class nt{static exportTle2Csv(e,t=!0){try{const i=[],a=e.filter((e=>e.isSatellite()&&e.tle1));if(0==a.length)return void S.x.info("No TLE data to export");a.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of a)void 0!==e.tle1&&void 0!==e.tle2&&(t&&"ANALSAT"==e.country||i.push({satId:e.sccNum,name:e.name,tle1:e.tle1,tle2:e.tle2,inclination:e.inclination,eccentricity:e.eccentricity,period:e.period,raan:e.rightAscension,apogee:e.apogee,perigee:e.perigee,country:e.country,site:e.launchSite,rocket:e.launchVehicle,rcs:e.rcs,visualMagnitude:e.vmag,user:e.user,mission:e.mission,purpose:e.purpose,contractor:e.manufacturer,dryMass:e.dryMass,liftMass:e.launchMass,lifeExpected:e.lifetime,power:e.power}));(0,at.Eb)(i,"catalogInfo")}catch(e){}}static exportSatInFov2Csv(e){const t=e.filter((e=>{var t;return e.isSatellite()&&e.tle1&&1===(null===(t=l.b.getDotsManager().inViewData)||void 0===t?void 0:t[e.id])})).map((e=>{const t=e;return{satId:t.sccNum,name:t.name,country:t.country,apogee:t.apogee,perigee:t.perigee}}));(0,at.Eb)(t,"satInView")}static exportTle2Txt(e,t=2,i=!0){try{const a=[],s=e.filter((e=>e.isSatellite()&&e.tle1));if(0==s.length)return void S.x.info("No TLE data to export");s.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of s)void 0!==e.tle1&&void 0!==e.tle2&&(i&&"ANALSAT"==e.country||(3==t&&a.push(e.name),e.tle1.includes("NO TLE")&&console.log(e.sccNum),e.tle2.includes("NO TLE")&&console.log(e.sccNum),a.push(e.tle1),a.push(e.tle2)));const n=a.join("\n"),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,st.saveAs)(o,"TLE.txt")}catch(e){}}}var ot=i(9991);const lt=i.p+"../img/analysis.png";class rt extends u.c{addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"analysis",cb:()=>{var e,t,i,a,o,r,c,d,u;null===(e=(0,n.Gn)("analysis-bpt"))||void 0===e||e.addEventListener("submit",(function(e){e.preventDefault(),rt.analysisBptSumbit_()})),null===(t=(0,n.Gn)("findCsoBtn"))||void 0===t||t.addEventListener("click",(()=>{(0,v.QP)(this.findCsoBtnClick_.bind(this))})),null===(i=(0,n.Gn)("findReentries"))||void 0===i||i.addEventListener("click",(()=>{(0,v.QP)(rt.findRaBtnClick_)}));const g=l.b.getCatalogManager().objectCache;null===(a=(0,n.Gn)("export-catalog-csv-btn"))||void 0===a||a.addEventListener("click",(()=>{nt.exportTle2Csv(g)})),null===(o=(0,n.Gn)("export-sat-fov-csv-btn"))||void 0===o||o.addEventListener("click",(()=>{nt.exportSatInFov2Csv(g)})),null===(r=(0,n.Gn)("export-catalog-txt-2a"))||void 0===r||r.addEventListener("click",(()=>{nt.exportTle2Txt(g)})),null===(c=(0,n.Gn)("export-catalog-txt-2b"))||void 0===c||c.addEventListener("click",(()=>{nt.exportTle2Txt(g,2,!1)})),null===(d=(0,n.Gn)("export-catalog-txt-3a"))||void 0===d||d.addEventListener("click",(()=>{nt.exportTle2Txt(g,3)})),null===(u=(0,n.Gn)("export-catalog-txt-3b"))||void 0===u||u.addEventListener("click",(()=>{nt.exportTle2Txt(g,3,!1)})),(0,s.E)((0,n.Gn)("analysis-menu"))}}),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{rt.setSensor_(e)}})}findCloseObjects(){if(this.searchStrCache_)return this.searchStrCache_;let e=rt.getValidSats_();e=(0,b.d)(e),e.sort(((e,t)=>e.position.x-t.position.x));let t=rt.getPossibleCSOs_(e,50),i=(0,b.d)(t);const a=rt.getActualCSOs_(i,50),s=Array.from(new Set(a));let n="";for(let e=0;e<s.length;e++)e==s.length-1?n+=s[e]:n+=s[e]+",";return this.searchStrCache_=n,n}static getActualCSOs_(e,t){const i=[];for(const t of e){let e=t.sat1,i=it.$.getEci(e,new Date(Date.now()+18e5));i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(t.sat1.position=i.position,e=t.sat2,i=it.$.getEci(e,new Date(Date.now()+18e5)),i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(e.position=i.position,t.sat2.position=i.position))}for(const a of e){let e=a.sat1,s=e.position;if(void 0===s)continue;let n=s.x-t,o=s.x+t,l=s.y-t,r=s.y+t,c=s.z-t,d=s.z+t,u=a.sat2,g=u.position;void 0!==g&&g.x<o&&g.x>n&&g.y<r&&g.y>l&&g.z<d&&g.z>c&&(i.push(e.sccNum),i.push(u.sccNum))}return i}static getPossibleCSOs_(e,t){let i=[];for(let a=0;a<e.length;a++){const s=e[a],n=s.position,o=n.x-t,l=n.x+t,r=n.y-t,c=n.y+t,d=n.z-t,u=n.z+t;let g=0;for(g=Math.max(0,a-200);g<e.length;g++){const t=e[g];if(s==t)continue;const a=t.position;if(a.x>l)break;a.x<l&&a.x>o&&a.y<c&&a.y>r&&a.z<u&&a.z>d&&i.push({sat1:s,sat2:t})}}return i}static getValidSats_(){let e=[];for(let t=0;t<l.b.getCatalogManager().orbitalSats;t++){const i=l.b.getCatalogManager().getSat(t);i&&(void 0===i.position&&(i.position=it.$.getEci(i,new Date).position||{x:0,y:0,z:0}),isNaN(i.position.x)||isNaN(i.position.y)||isNaN(i.position.z)||i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||e.push(i))}return e}static findBestPass(e,t){const i=l.b.getTimeManager();if(t.length<=0||!t[0]||void 0===t[0].minAz)return l.b.getUiManager().toast("Sensor's format incorrect. Did you select a sensor first?","critical"),[];const a=t[0];let s=0;const n=l.b.getCatalogManager().calcSatrec(e),o=[];let r=w.rE/(n.no*w.rE/w.gc),c=0,d=null,u=null,g=null,p=null,h=a.maxRng,m=0,b=!1,v=!1;const S=(e,t)=>{let n=it.$.getRae(e,t,a);if(it.$.checkIsInView(a,n)){const o=i.getOffsetTimeObj(s-5e3);let l=it.$.getRae(o,t,a),r=it.$.checkIsInView(a,l);if(r){let o=i.getOffsetTimeObj(s+5e3);if(l=it.$.getRae(o,t,a),r=it.$.checkIsInView(a,l),!r){if(v=n.el<=3.5,null==p)return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null};c=Math.min((e.getTime()-p.getTime())/1e3/60*10/8,10);let i=Math.min(m/50*10,10);i*=b&&v?2:1,c+=i,c+=Math.min(7500/h,10);let a=0;return a=(e.getTime()-p.getTime())/1e3||0,{sortTime:p.getTime(),scc:t.satnum,score:c,startDate:p,startTime:p,startAz:d,startEl:u,startrng:g,stopDate:e,stopTime:e,stopAz:n.az.toFixed(0),stopEl:n.el.toFixed(1),stoprng:n.rng.toFixed(0),tic:a,minrng:h.toFixed(0),passMaxEl:m.toFixed(1)}}}else n.el<=3.5&&(b=!0),p=e,d=n.az.toFixed(0),u=n.el.toFixed(1),g=n.rng.toFixed(0);m<n.el&&(m=n.el),h>n.rng&&(h=n.rng)}return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null}};for(let e=0;e<604800;e+=5){s=1e3*e;const t=i.getOffsetTimeObj(s);if(o.length<=5e3){const i=S(t,n);null!==i.score&&(o.push(i),c=0,d=null,u=null,g=null,p=null,h=a.maxRng,m=0,b=!1,v=!1,e+=60*r*.75)}}return o}static findBestPasses(e,t){const i=(e=e.replace(/ /gu,",")).split(",");let a=[];for(const e of i)try{if(void 0===e||null==e||""===e||" "===e)continue;const i=l.b.getCatalogManager().sccNum2Sat(parseInt(e)),s=rt.findBestPass(i,[t]);for(const e of s)a.push(e)}catch(e){console.debug(e)}a.sort(((e,t)=>t.sortTime-e.sortTime)),a.reverse(),a.forEach((e=>{delete e.sortTime}));for(const e of a)e.startDate=e.startDate.toISOString().split("T")[0],e.startTime=e.startTime.toISOString().split("T")[1].split(".")[0],e.stopDate=e.stopDate.toISOString().split("T")[0],e.stopTime=e.stopTime.toISOString().split("T")[1].split(".")[0];(0,at.Eb)(a,"bestSatTimes")}findCsoBtnClick_(){const e=this.findCloseObjects();l.b.getUiManager().doSearch(e)}static findRaBtnClick_(){const e=ot.w.findReentry(l.b.getCatalogManager().objectCache).join(",");l.b.getUiManager().doSearch(e)}static analysisBptSumbit_(){const e=(0,n.Gn)("analysis-bpt-sats").value,t=l.b.getSensorManager();t.isSensorSelected()?rt.findBestPasses(e,t.currentSensors[0]):l.b.getUiManager().toast("You must select a sensor first!","critical")}static setSensor_(e){const t=(0,n.Gn)("analysis-bpt-submit");e?(t.disabled=!1,t.textContent="Generate Best Pass Times ▶"):(t.disabled=!0,t.textContent="Select Sensor First!")}constructor(){super("Analysis Menu"),this.bottomIconElementName="analysis-bottom-icon",this.bottomIconImg=lt,this.bottomIconLabel="Analysis Menu",this.sideMenuElementName="analysis-menu",this.sideMenuElementHtml=l.b.html`
  <div id="analysis-menu" class="side-menu-parent start-hidden text-select">
    <div id="analysis-inner-menu" class="side-menu">
      <h5 class="center-align">Export Catalog</h5>
      <div class="divider"></div>
      <div class="row"></div>
      <!-- <form id="analysis-form">
        <div class="row">
          <div class="input-field col s12">
            <input value="25544" id="anal-sat" type="text" />
            <label for="anal-sat" class="active">Satellite Number</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <select value="0" id="anal-type" type="text">
              <optgroup label="Orbital Parameters">
                <option value='inc'>Inclination</option>
                <option value='ap'>Apogee</option>
                <option value='pe'>Perigee</option>
                <option value='per'>Period</option>
                <option value='e'>Eccentricity</option>
                <option value='ra'>RAAN</option>
                <option value='all'>All</option>
              </optgroup>
              <optgroup id="anal-look-opt" label="Look Angles">
                <option value='az'>Azimuth</option>
                <option value='el'>Elevation</option>
                <option value='rng'>Range</option>
                <option value='rae'>All</option>
              </optgroup>
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
      </form> -->
      <div class="row">
        <center>
          <button id="export-catalog-txt-2a" class="btn btn-ui waves-effect waves-light">
            Export Official TLEs &#9658;
          </button>
        </center>
      </div>
      <div class="row">
        <center>
          <button id="export-catalog-txt-3a" class="btn btn-ui waves-effect waves-light">
            Export Official 3LEs &#9658;
          </button>
        </center>
      </div>
      <div class="row">
        <center>
          <button id="export-catalog-txt-2b" class="btn btn-ui waves-effect waves-light">
            Export KeepTrack TLEs &#9658;
          </button>
        </center>
      </div>
      <div class="row">
        <center>
        <button id="export-catalog-txt-3b" class="btn btn-ui waves-effect waves-light">
            Export KeepTrack 3LEs &#9658;
          </button>
        </center>
      </div>
      <div class="row">
        <center>
          <button id="export-catalog-csv-btn" class="btn btn-ui waves-effect waves-light">
            Export Catalog CSV &#9658;
        </button>
        </center>
      </div>
      <h5 class="center-align">Find Objects</h5>
      <div class="divider"></div>
      <div class="row"></div>
      <div class="row">
        <center>
          <button id="export-sat-fov-csv-btn" class="btn btn-ui waves-effect waves-light">
            Export Satellites in FOV &#9658;
        </button>
        </center>
      </div>
      <div class="row">
        <center>
          <button id="findCsoBtn" class="btn btn-ui waves-effect waves-light">Find Close Objects &#9658;</button>
        </center>
      </div>
      <div class="row">
        <center>
          <button id="findReentries" class="btn btn-ui waves-effect waves-light">
          Find Reentries &#9658;
          </button>
        </center>
      </div>
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
      </div>
    </div>
  </div>
`,this.helpTitle="Analysis Menu",this.helpBody=l.b.html`The Analysis Menu provides a number of tools to help you analyze the data in the current view. The tools are:
  <ul style="margin-left: 40px;">
    <li>Export Official TLEs - Export real two line element sets.</li>
    <li>Export 3LES - Export three line element sets.</li>
    <li>Export KeepTrack TLEs - Export All KeepTrack two line element sets including analysts.</li>
    <li>Export KeepTrack 3LES - Export All KeepTrack three line element sets including analysts.</li>
    <li>Find Close Objects - Find objects that are close to each other.</li>
    <li>Find Reentries - Find objects that are likely to reenter the atmosphere.</li>
    <li>Best Passes - Find the best passes for a satellite based on the currently selected sensor.</li>
  </ul>`,this.searchStrCache_=null}}const ct=new rt;var dt=i(149);const ut=i.p+"../img/constellation.png",gt=i.p+"../img/planetarium.png";class pt extends u.c{constructor(){super(pt.PLUGIN_NAME),this.bottomIconElementName="menu-planetarium",this.bottomIconLabel="Planetarium View",this.bottomIconImg=gt,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.b.getRenderer(),i=l.b.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;l.b.getMainCamera().cameraType=V.i.PLANETARIUM;try{(0,n.Gn)("cspocAllSensor").style.display="none",(0,n.Gn)("mwAllSensor").style.display="none",(0,n.Gn)("mdAllSensor").style.display="none",(0,n.Gn)("esocAllSensor").style.display="none",(0,n.Gn)("llAllSensor").style.display="none",(0,n.Gn)("rusAllSensor").style.display="none",(0,n.Gn)("prcAllSensor").style.display="none"}catch(e){}dt.j.change("planetarium"),l.b.getCatalogManager().isStarManagerLoaded&&l.b.getStarManager().clearConstellations(),null===(e=l.b.getPlugin(ht))||void 0===e||e.setBottomIconToUnselected()}else l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,t.glInit(),i.hideSideMenus(),l.b.getOrbitManager().clearInViewOrbit(),l.b.getMainCamera().cameraType=V.i.DEFAULT}}addJs(){super.addJs(),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,n.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}pt.PLUGIN_NAME="Planetarium";class ht extends u.c{constructor(){super(ht.PLUGIN_NAME),this.bottomIconElementName="menu-astronomy",this.bottomIconLabel="Astronomy View",this.bottomIconImg=ut,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.b.getCatalogManager(),i=l.b.getOrbitManager(),a=l.b.getRenderer(),s=l.b.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;t.isStarManagerLoaded&&l.b.getStarManager().drawAllConstellations(),i.clearInViewOrbit(),l.b.getMainCamera().cameraType=V.i.ASTRONOMY,dt.j.change("astronomy"),null===(e=l.b.getPlugin(pt))||void 0===e||e.setBottomIconToUnselected()}else l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,a.glInit(),s.hideSideMenus(),l.b.getMainCamera().cameraType=V.i.DEFAULT,dt.j.change("default"),t.isStarManagerLoaded&&l.b.getStarManager().clearConstellations(),(0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}}addJs(){super.addJs(),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,n.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}ht.PLUGIN_NAME="Astronomy";var mt=i(2579);const bt=i.p+"../img/breakup.png";var vt,St,ft=i(5032);!function(e){e[e.MeanAnomaly=1]="MeanAnomaly",e[e.RightAscensionOfAscendingNode=2]="RightAscensionOfAscendingNode",e[e.ArgumentOfPerigee=3]="ArgumentOfPerigee"}(vt||(vt={})),function(e){e[e.Near=0]="Near",e[e.Success=1]="Success",e[e.Error=2]="Error",e[e.Far=3]="Far"}(St||(St={}));class Mt{constructor(e,t,i,a,s,n,o){this.sat=e,this.now=s,this.goalLat=t,this.goalLon=i,this.goalDirection=a,this.newMeana=null,this.newArgPer=null,this.goalAlt=n||null,this.raanOffset=o||0,this.lastLat=null,this.currentDirection=null,this.argPerCalcResults=null,this.meanACalcResults=null,this.raanCalcResults=null}rotateOrbitToLatLon(){return this.parseTle(),this.meanACalcResults=this.meanACalcLoop(this.now,this.goalDirection),this.meanACalcResults!==St.Success?["Error","Failed to find a solution for Mean Anomaly"]:this.goalAlt>0&&this.argPerCalcLoop()!==St.Success?["Error","Failed to find a solution for Argument of Perigee"]:(this.raanCalcResults=this.raanCalcLoop(this.raanOffset,this.now),this.raanCalcResults!==St.Success?["Error","Failed to find a solution for Right Ascension of Ascending Node"]:[this.sat.tle1,this.sat.tle2])}argPerCalcLoop(){this.meanACalcResults=St.Near;for(let e=0;e<3600;e+=1){let t=10*parseFloat(this.argPer)-100+e;if(t>3600&&(t-=3600),this.argPerCalcResults=this.argPerCalc(t.toString(),this.now),this.argPerCalcResults===St.Success&&this.meanACalcResults===St.Success&&this.currentDirection===this.goalDirection)break;if(this.argPerCalcResults===St.Far&&(e+=49),this.argPerCalcResults===St.Error)return St.Error;if(this.meanACalcResults=this.meanACalcLoop2(),this.meanACalcResults===St.Success)if(this.currentDirection!==this.goalDirection)e+=20;else if(this.argPerCalcResults===St.Success)break;if(e=this.meanACalcResults===St.Far?e+100:e,this.meanACalcResults===St.Error)return St.Error}return this.argPerCalcResults}meanACalcLoop2(){for(let e=0;e<5200;e+=1){if(this.meanACalcResults=this.meanACalc(e,this.now),this.meanACalcResults===St.Success){if(this.currentDirection===this.goalDirection)break;e+=20}if(e=this.meanACalcResults===St.Far?e+100:e,this.meanACalcResults===St.Error)return St.Error}return this.meanACalcResults}parseTle(){this.intl=this.sat.tle1.substring(9,17),this.epochyr=this.sat.tle1.substring(18,20),this.epochday=this.sat.tle1.substring(20,32),this.meanmo=this.sat.tle2.substring(52,63),this.argPer=ft.J.pad0(this.sat.argOfPerigee.toFixed(4),8),this.inc=ft.J.pad0(this.sat.inclination.toFixed(4),8),this.ecen=this.sat.eccentricity.toFixed(7).substring(2,9),this.TLE1Ending=this.sat.tle1.substring(32,71)}meanACalcLoop(e,t){let i=St.Near;for(let a=0;a<5200;a+=1){if(i=this.meanACalc(a,e),i===St.Success){if(this.currentDirection===t)break;a+=20}i===St.Far&&(a+=100)}return i}raanCalcLoop(e,t){let i=St.Near;for(let a=0;a<52e3&&(i=this.raanCalc(a,e,t),i!==St.Success);a+=1)i===St.Far&&(a+=1e3);return i}meanACalc(e,t){const i=this.sat;let a=i.satrec||w.t2.createSatrec(i.tle1,i.tle2);e/=10;const s=ft.J.pad0(e.toFixed(4),8),n=ft.J.pad0(i.rightAscension.toFixed(4),8),o=this.newArgPer?ft.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):ft.J.pad0(i.argOfPerigee.toFixed(4),8),l=i.tle1.substring(32,71),r="1 "+i.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+l,c="2 "+i.sccNum+" "+this.inc+" "+n+" "+this.ecen+" "+o+" "+s+" "+this.meanmo+"    10";a=w.t2.createSatrec(r,c);const d=this.getOrbitByLatLonPropagate(t,a,vt.MeanAnomaly);return d===St.Success&&(i.tle1=r,i.tle2=c,this.newMeana=s),d}getOrbitByLatLonPropagate(e,t,i){const{m:a,gmst:s}=it.$.calculateTimeVariables(e,t),n=w.t2.propagate(t,a).position;if(isNaN(n.x)||isNaN(n.y)||isNaN(n.z))return St.Error;const o=(0,w.K7)(n,s);let{lat:l,lon:r,alt:c}=o;if(this.lastLat=this.lastLat?this.lastLat:l,i===vt.MeanAnomaly){if(l===this.lastLat)return 0;l>this.lastLat&&(this.currentDirection="N"),l<this.lastLat&&(this.currentDirection="S"),this.lastLat=l}return i===vt.MeanAnomaly&&l>this.goalLat-Mt.MAX_LAT_ERROR&&l<this.goalLat+Mt.MAX_LAT_ERROR||i===vt.RightAscensionOfAscendingNode&&r>this.goalLon-Mt.MAX_LON_ERROR&&r<this.goalLon+Mt.MAX_LON_ERROR||i===vt.ArgumentOfPerigee&&c>this.goalAlt-Mt.MAX_ALT_ERROR&&c<this.goalAlt+Mt.MAX_ALT_ERROR?St.Success:(i!==vt.MeanAnomaly||l>this.goalLat-11&&l<this.goalLat+11)&&(i!==vt.RightAscensionOfAscendingNode||r>this.goalLon-11&&r<this.goalLon+11)?i===vt.ArgumentOfPerigee&&(c<this.goalAlt-100||c>this.goalAlt+100)?St.Far:St.Near:St.Far}raanCalc(e,t,i){const a=e;e=(e/=100)>360?e-360:e;const s=ft.J.pad0(e.toFixed(4),8),n=this.newArgPer?ft.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):ft.J.pad0(this.sat.argOfPerigee.toFixed(4),8),o="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,l="2 "+this.sat.sccNum+" "+this.inc+" "+s+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10",r=w.t2.createSatrec(o,l),c=this.getOrbitByLatLonPropagate(i,r,vt.RightAscensionOfAscendingNode);if(c===St.Success){e=(e=(e=a/100+t)>360?e-360:e)<0?e+360:e;const i=ft.J.pad0(e.toFixed(4),8),s="2 "+this.sat.sccNum+" "+this.inc+" "+i+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10";this.sat.tle1=o,this.sat.tle2=s}return c}argPerCalc(e,t){const i=this.newMeana,a=ft.J.pad0(this.sat.rightAscension.toFixed(4),8);e=ft.J.pad0((parseFloat(e)/10).toFixed(4),8);const s="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,n="2 "+this.sat.sccNum+" "+this.inc+" "+a+" "+this.ecen+" "+e+" "+i+" "+this.meanmo+"    10",o=w.t2.createSatrec(s,n),l=this.getOrbitByLatLonPropagate(t,o,vt.ArgumentOfPerigee);return l===St.Success&&(this.sat.tle1=s,this.sat.tle2=n,this.newArgPer=e),l}}Mt.MAX_LAT_ERROR=.1,Mt.MAX_LON_ERROR=.1,Mt.MAX_ALT_ERROR=30;var wt=i(2402),yt=i(9508);class Ct extends u.c{constructor(){super(Ct.PLUGIN_NAME),this.dependencies=[g.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=bt,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;if((null==t?void 0:t.apogee)-(null==t?void 0:t.perigee)>this.maxDifApogeeVsPerigee_)return S.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=l.b.html`
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
  </div>`,this.helpTitle="Breakup Menu",this.helpBody=l.b.html`The Breakup Menu is a tool for simulating the breakup of a satellite.
  <br><br>
  By modifying duplicating and modifying a satellite's orbit we can model the breakup of a satellite.
  After selecting a satellite and opening the menu, the user can select:
  <ul style="margin-left: 40px;">
    <li>Inclination Variation</li>
    <li>RAAN Variation</li>
    <li>Period Variation</li>
    <li>Number of Breakup Pieces</li>
  </ul>
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`,this.selectSatManager_=l.b.getPlugin(g.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("breakup").addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onSubmit_()))}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonActive&&(this.closeSideMenu(),S.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonActive&&this.updateSccNumInMenu_()):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}updateSccNumInMenu_(){if(!this.isMenuButtonActive)return;const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);(null==e?void 0:e.isSatellite())&&((0,n.Gn)("hc-scc").value=e.sccNum)}onSubmit_(){const{simulationTimeObj:e}=l.b.getTimeManager(),t=l.b.getCatalogManager(),{satId:i,breakupCount:a,rascVariation:s,incVariation:n,meanmoVariation:o}=Ct.getFormData_(t),r=t.getSat(i),c=r,d=it.$.calculateTimeVariables(e).gmst,u=(0,w.K7)(r.position,d),g=u.lat,p=u.lon,h=it.$.getDirection(r,e);"Error"===h&&S.x.warn("Cannot calculate direction of satellite. Try again later.");const m=wt.l.currentEpoch(e);if(r.tle1=r.tle1.substring(0,18)+m[0]+m[1]+r.tle1.substring(32),l.b.getMainCamera().isAutoPitchYawToTarget=!1,r.apogee-r.perigee>this.maxDifApogeeVsPerigee_)return void S.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const b=r.apogee-r.perigee<300?0:u.alt;let v=new Mt(r,g,p,h,e,b).rotateOrbitToLatLon();const f=v[0],M=v[1],y=new w.oZ(Object.assign(Object.assign({},r),{id:i,tle1:f,tle2:M,active:!0}));t.objectCache[i]=y,t.satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:i,tle1:f,tle2:M});const C=l.b.getOrbitManager();C.changeOrbitBufferData(i,f,M);const L=15e-5,k=r.eccentricity;let E=0;for(let i=0;i<=4&&!(E>=a);i++){const l=w.Ad.convert6DigitToA5((mt.g.ANALYST_START_ID+E).toString()),d=t.sccNum2Id(l);t.getObject(d);let m=c;const b=-s/2+s*(i/4),v=r.apogee-r.perigee<300?0:u.alt;let f=new Mt(m,g,p,h,e,v,b).rotateOrbitToLatLon();if("Error"===f[0]&&(f=new Mt(m,g,p,h,new Date(e.getTime()+1),v,b).rotateOrbitToLatLon(),"Error"===f[0]))return void S.x.error(new Error(f[1]),"breakup.ts","Error creating breakup!");let y=f[0],A=f[1];for(;E<(i+1)*a/4;E++){let i=parseFloat(M.substring(8,16));i=i+Math.random()*n*2-n;const a=i.toFixed(4).padStart(8,"0");if(8!==a.length)throw new Error(`Inclination length is not 8 - ${a} - ${M}`);m.eccentricity=k,m.eccentricity+=Math.random()*L*2-L;let s=parseFloat(A.substring(52,62));s=s+Math.random()*o*2-o;const l=s.toFixed(8).padStart(11,"0");if(11!==l.length)throw new Error(`meanmo length is not 11 - ${l} - ${A}`);const r=w.Ad.convert6DigitToA5((mt.g.ANALYST_START_ID+E).toString()),c=t.sccNum2Id(r);if(y=`1 ${r}`+y.substring(7),A=`2 ${r} ${a} ${A.substring(17,52)}${l}${A.substring(63)}`,69!==y.length)throw new Error(`Invalid tle1: length is not 69 - ${y}`);if(69!==A.length)throw new Error(`Invalid tle1: length is not 69 - ${A}`);let d;try{d=new w.oZ(Object.assign(Object.assign({},t.objectCache[c]),{id:c,tle1:y,tle2:A,active:!0}))}catch(e){return void S.x.error(e,"breakup.ts","Error creating breakup!")}it.$.altitudeCheck(d.satrec,e)>1?(t.objectCache[c]=d,t.satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:c,active:!0,tle1:y,tle2:A}),C.changeOrbitBufferData(c,y,A)):S.x.warn("Breakup Generator Failed")}}a>settingsManager.searchLimit&&(settingsManager.searchLimit=a),l.b.getUiManager().doSearch(`${r.sccNum},Analyst`)}static getFormData_(e){const t=e.sccNum2Id((0,n.Gn)("hc-scc").value),i=parseFloat((0,n.Gn)("hc-per").value),a=parseFloat((0,n.Gn)("hc-inc").value),s=parseFloat((0,n.Gn)("hc-raan").value);return{satId:t,breakupCount:parseInt((0,n.Gn)("hc-count").value),rascVariation:s,incVariation:a,meanmoVariation:i}}}Ct.PLUGIN_NAME="Breakup";class Lt{static getColors(e){let t,i;switch(e){case"Top Secret//SCI":t="#fce93a",i="black";break;case"Top Secret":t="#ff8c00",i="black";break;case"Secret":t="#ff0000",i="white";break;case"Confidential":t="#0033a0",i="white";break;case"CUI":t="#512b85",i="white";break;case"Unclassified":t="#007a33",i="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:i}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class kt extends u.c{constructor(){super("Classification"),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1,this.containerDomId="classification-container",this.textStringDomId="classification-string",this.containerHeight=20}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateString(e=this.classificationString_,t="#ffffff",i="#000000"){this.isClassificationContainerLoaded_||this.createContainer_(),""===e?((0,n.Gn)(this.containerDomId).style.display="none",this.updateTopMenuHeight_(!1)):((0,n.Gn)(this.containerDomId).style.display="flex",this.updateTopMenuHeight_(!0)),(0,n.Gn)(this.textStringDomId).innerHTML=e;const a=(0,n.Gn)(this.containerDomId);if(a.style.fontWeight="500",Lt.isValidClassification(e)){const a=Lt.getColors(e);t=a.backgroundColor,i=a.color}a.style.backgroundColor=t,a.style.color=i,this.classificationString_=e}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:this.uiManagerInit_.bind(this)})}createContainer_(){const e=document.createElement("div");e.innerHTML=l.b.html`<span id="${this.textStringDomId}"></span>`,e.id=this.containerDomId,e.style.cssText=`\n      height: ${this.containerHeight}px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      `,l.b.containerRoot.insertBefore(e,l.b.containerRoot.firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr?(this.createContainer_(),this.updateString()):S.x.log("Classification string is empty so not loading classification bar")}updateTopMenuHeight_(e){if(this.isExpanded_===e)return;if(!l.b.getPlugin(et.F))return;let t=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(t)&&(t=0),document.documentElement.style.setProperty("--top-menu-height",t+(e?this.containerHeight:-this.containerHeight)+"px"),this.isExpanded_=e}}new kt;const Et=i.p+"../img/socrates.png";class At extends u.c{constructor(){super(At.PLUGIN_NAME),this.collisionDataSrc="./tle/SOCRATES.json",this.selectSatIdOnCruncher_=null,this.collisionList_=[],this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=Et,this.bottomIconLabel="Collisions",this.sideMenuElementName="socrates-menu",this.sideMenuElementHtml=l.b.html`
  <div id="socrates-menu" class="side-menu-parent start-hidden text-select">
    <div id="socrates-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible Collisions</h5>
        <table id="socrates-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=l.b.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:650},this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.parseCollisionData_()}}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:this.uiManagerFinal_.bind(this)}),l.b.register({event:o.RL.onCruncherMessage,cbName:this.PLUGIN_NAME,cb:()=>{var e;null!==this.selectSatIdOnCruncher_&&(null===(e=l.b.getPlugin(g.P))||void 0===e||e.selectSat(this.selectSatIdOnCruncher_),this.selectSatIdOnCruncher_=null)}})}uiManagerFinal_(){(0,n.Gn)(this.sideMenuElementName).addEventListener("click",(e=>{(0,v.QP)((()=>{var t;const i=e.target.parentElement;if(!i.classList.contains("socrates-object"))return;const a=null===(t=i.dataset)||void 0===t?void 0:t.row;null!==a&&this.eventClicked_(parseInt(a))}))}))}parseCollisionData_(){0===this.collisionList_.length&&fetch(this.collisionDataSrc).then((e=>{e.json().then((e=>{this.collisionList_=e,this.createTable_(),0===this.collisionList_.length&&S.x.warn("No collisions data found!")}))}))}eventClicked_(e){const t=new Date;l.b.getTimeManager().changeStaticOffset(new Date(this.collisionList_[e].toca).getTime()-t.getTime()-3e4),l.b.getMainCamera().isAutoPitchYawToTarget=!1;const i=this.collisionList_[e].sat1.padStart(5,"0"),a=this.collisionList_[e].sat2.padStart(5,"0");l.b.getUiManager().doSearch(`${i},${a}`);const s=l.b.getCatalogManager();this.selectSatIdOnCruncher_=s.sccNum2Id(parseInt(i))}createTable_(){try{const e=(0,n.Gn)("socrates-table");e.innerHTML="",At.createHeaders_(e),this.createBody_(e)}catch(e){S.x.warn("Error processing SOCRATES data!")}}createBody_(e){for(let t=0;t<this.collisionList_.length;t++)this.createRow_(e,t)}static createHeaders_(e){let t=e.insertRow();const i=["TOCA","#1","#2","Max Prob","Min Range (km)","Rel Speed (km/s)"];for(const e of i){const i=t.insertCell();i.appendChild(document.createTextNode(e)),i.setAttribute("style","text-decoration: underline")}}createRow_(e,t){const i=e.insertRow();return i.setAttribute("class","socrates-object link"),i.setAttribute("data-row",t.toString()),At.createCell_(i,this.collisionList_[t].toca.slice(0,19).replace("T"," ")),At.createCell_(i,this.collisionList_[t].sat1),At.createCell_(i,this.collisionList_[t].sat2),At.createCell_(i,this.collisionList_[t].maxProb.toFixed(3)),At.createCell_(i,this.collisionList_[t].minRng.toString()),At.createCell_(i,this.collisionList_[t].relSpeed.toFixed(2)),i}static createCell_(e,t){e.insertCell().appendChild(document.createTextNode(t))}}At.PLUGIN_NAME="collisions";const Tt=()=>{S.x.info("Cruncher failed to meet requirement after two tries!")},xt=(e,t,i,a=Tt,s=0)=>{e.addEventListener("message",(n=>{i(n.data)?t():s<5?xt(e,t,i,a,s++):a()}),{once:!0})},Gt=i.p+"../img/colors.png";class Nt extends u.c{constructor(){super(Nt.PLUGIN_NAME),this.bottomIconImg=Gt,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=l.b.html`
  <div id="color-scheme-menu" class="side-menu-parent start-hidden text-select">
    <div id="colors-menu" class="side-menu">
      <ul>
        <h5 class="center-align">Color Schemes</h5>
        <li class="divider"></li>
        <li class="menu-selectable" data-color="default">Object Type</li>
        <li class="menu-selectable" data-color="sunlight">Sunlight</li>
        <li class="menu-selectable" data-color="velocity">Velocity</li>
        <li class="menu-selectable" data-color="neighbors">Orbit Density</li>
        <li class="menu-selectable" data-color="confidence">Confidence Level</li>
        <li class="menu-selectable" data-color="rcs">Radar Cross Section</li>
        <li class="menu-selectable" data-color="smallsats">Small Satellites</li>
        <li class="menu-selectable" data-color="countries">Countries</li>
        <li class="menu-selectable" data-color="near-earth">Near Earth</li>
        <li class="menu-selectable" data-color="deep-space">Deep Space</li>
        <li class="menu-selectable" data-color="elset-age">Elset Age</li>
        <li class="menu-selectable" data-color="lost-objects">Lost Objects</li>
      </ul>
    </div>
  </div>`,this.helpTitle="Colors Menu",this.helpBody=l.b.html`The Colors Menu is a place to change the color theme used to render the objects.
<br><br>
The various themes can change the colors based on the objects' orbits, objects' characteristics, or the objects' relation to sun and/or earth.
`,this.rmbL1ElementName="colors-rmb",this.rmbL1Html=l.b.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Color Scheme &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.rmbMenuOrder=50,this.rmbL2ElementName="colors-rmb-menu",this.rmbL2Html=l.b.html`
  <ul class='dropdown-contents'>
    <li id="colors-default-rmb"><a href="#">Object Types</a></li>
    <li id="colors-rcs-rmb"><a href="#">Radar Cross Section</a></li>
    <li id="colors-density-rmb"><a href="#">Orbit Density</a></li>
    <li id="colors-sunlight-rmb"><a href="#">Sunlight Status</a></li>
    <li id="colors-country-rmb"><a href="#">Country</a></li>
    <li id="colors-confidence-rmb"><a href="#">Confidence Level</a></li>
    <li id="colors-velocity-rmb"><a href="#">Velocity</a></li>
    <li id="colors-ageOfElset-rmb"><a href="#">Age of Elset</a></li>
  </ul>`,this.rmbCallback=e=>{switch(e){case"colors-default-rmb":Nt.colorsMenuClick("default");break;case"colors-confidence-rmb":Nt.colorsMenuClick("confidence");break;case"colors-rcs-rmb":Nt.colorsMenuClick("rcs");break;case"colors-density-rmb":Nt.colorsMenuClick("neighbors");break;case"colors-sunlight-rmb":Nt.colorsMenuClick("sunlight");break;case"colors-country-rmb":Nt.colorsMenuClick("countries");break;case"colors-velocity-rmb":Nt.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":Nt.colorsMenuClick("elset-age")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("colors-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){const e=this.dataset.color;Nt.colorsMenuClick(e)}))}))}})}}Nt.PLUGIN_NAME="Color Menu",Nt.colorsMenuClick=e=>{var t;const i=l.b.getCatalogManager(),a=l.b.getColorSchemeManager(),s=l.b.getUiManager();switch(null===(t=l.b.getPlugin(g.P))||void 0===t||t.selectSat(-1),"sunlight"!==e&&i.satCruncher.postMessage({isSunlightView:!1,typ:yt.Bi.SUNLIGHT_VIEW}),e){case"default":dt.j.change("default"),a.setColorScheme(a.default,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"confidence":dt.j.change("confidence"),a.setColorScheme(a.confidence,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"velocity":dt.j.change("velocity"),a.setColorScheme(a.velocity,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"sunlight":i.satCruncher.postMessage({isSunlightView:!0,typ:yt.Bi.SUNLIGHT_VIEW}),dt.j.change("sunlight"),s.colorSchemeChangeAlert(a.sunlight),xt(i.satCruncher,(()=>{a.setColorScheme(a.sunlight,!0)}),(e=>e.satInSun));break;case"near-earth":dt.j.change("near"),a.setColorScheme(a.leo,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"deep-space":dt.j.change("deep"),a.setColorScheme(a.geo,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"elset-age":(0,v.QP)((()=>{dt.j.change("ageOfElset"),a.setColorScheme(a.ageOfElset,!0),s.colorSchemeChangeAlert(a.currentColorScheme)}));break;case"lost-objects":(0,n.Gn)("search").value="",(0,v.QP)((()=>{settingsManager.lostSatStr="",a.setColorScheme(a.lostobjects,!0),(0,n.Gn)("search").value=settingsManager.lostSatStr,s.colorSchemeChangeAlert(a.currentColorScheme),s.doSearch((0,n.Gn)("search").value)}));break;case"rcs":dt.j.change("rcs"),a.setColorScheme(a.rcs,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"smallsats":dt.j.change("small"),a.setColorScheme(a.smallsats,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"neighbors":dt.j.change("neighbors"),a.setColorScheme(a.neighbors,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"countries":dt.j.change("countries"),null!==l.b.getGroupsManager().selectedGroup?a.setColorScheme(a.groupCountries,!0):a.setColorScheme(a.countries,!0),s.colorSchemeChangeAlert(a.currentColorScheme)}l.b.getUiManager().hideSideMenus()};const It=new Nt;var _t=i(3934),Rt=i(6279);const Pt=i.p+"../img/about.png";class Ot extends u.c{constructor(){super(Ot.PLUGIN_NAME),this.dependencies=[g.P.PLUGIN_NAME],this.bottomIconCallback=()=>{if(this.verifySatelliteSelected()&&this.isMenuButtonActive){const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);(0,n.Gn)(`${this.formPrefix_}-scc`).value=e.sccNum}},this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=Pt,this.bottomIconLabel="Debris Screening",this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=l.b.html`
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
              <option value="1" selected>1 Hour</option>
              <option value="4">4 Hours</option>
              <option value="8">8 Hours</option>
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
`,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.helpTitle="Debris Screening",this.helpBody=l.b.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=l.b.html`<img src="${Pt}" />
  `,this.selectSatManager_=l.b.getPlugin(g.P)}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)(`${this.sideMenuElementName}-form`).addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onFormSubmit()))})),(0,n.Gn)(`${this.sideMenuElementName}-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onVisClick()))})),(0,n.Gn)(`${this.sideMenuElementName}-clear-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,v.QP)((()=>Ot.onClearVisClick()))}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled()}})}onVisClick(){const e=parseFloat((0,n.Gn)(`${this.formPrefix_}-u`).value),t=parseFloat((0,n.Gn)(`${this.formPrefix_}-v`).value),i=parseFloat((0,n.Gn)(`${this.formPrefix_}-w`).value);l.b.getScene().searchBox.setCubeSize(e,t,i)}static onClearVisClick(){l.b.getScene().searchBox.setCubeSize(0,0,0)}onFormSubmit(){let e=l.b.getCatalogManager().sccNum2Id(parseInt((0,n.Gn)(`${this.formPrefix_}-scc`).value));const t=parseFloat((0,n.Gn)(`${this.formPrefix_}-u`).value),i=parseFloat((0,n.Gn)(`${this.formPrefix_}-v`).value),a=parseFloat((0,n.Gn)(`${this.formPrefix_}-w`).value),s=parseFloat((0,n.Gn)(`${this.formPrefix_}-time`).value),r=l.b.getCatalogManager().getObject(e,o.C_.SKIP_POS_VEL),c=l.b.getCatalogManager().objectCache.filter((e=>{if(!e.isSatellite())return!1;const t=e;return!(t.perigee>r.apogee||r.perigee>t.apogee)})).map((e=>e.id));let d=0,u=[];for(let e=0;e<60*s;e++){d=1e3*e*60;const s=l.b.getTimeManager().getOffsetTimeObj(d),{m:n}=it.$.calculateTimeVariables(s,r.satrec),g=w.t2.propagate(r.satrec,n);for(let e=0;e<c.length;e++){const n=l.b.getCatalogManager().getObject(c[e],o.C_.SKIP_POS_VEL);if(!(null==n?void 0:n.isSatellite()))continue;const r=n,{m:d}=it.$.calculateTimeVariables(s,r.satrec),p=w.t2.propagate(r.satrec,d);if(!p){c.splice(e,1);break}const h=Rt.x.sat2ric({position:g.position,velocity:g.velocity},{position:p.position,velocity:p.velocity});if(Math.abs(h.position[0])<t&&Math.abs(h.position[1])<i&&Math.abs(h.position[2])<a){console.log(`${r.sccNum} at ${new Date(s)}`),u.push(r.sccNum),c.splice(e,1);break}}}u=u.filter(((e,t,i)=>i.indexOf(e)===t));let g=u.join(",");g=g.replace(/,\s*$/u,""),l.b.getUiManager().doSearch(g)}}Ot.PLUGIN_NAME="Debris Screening";var Dt=i(2809);const Ft=i.p+"../img/gps.png";var Ut=i(8687),Bt=i.n(Ut),$t=i(3268);class Ht{static calculateDops(e){let t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},i=e.length;if(i<4)return t;const a=Bt().rep([i,4],0);for(let t=1;t<=i;t++){const{az:i,el:s}=e[t-1],n=[Math.cos(s*w.qW)*Math.sin(i*w.qW),Math.cos(s*w.qW)*Math.cos(i*w.qW),Math.sin(s*w.qW),1];Bt().setBlock(a,[t-1,0],[t-1,3],[n])}const s=Bt().dot(Bt().transpose(a),a),n=Bt().inv(s),o=Math.sqrt(n[0][0]+n[1][1]+n[2][2]),l=Math.sqrt(n[0][0]+n[1][1]),r=Math.sqrt(n[0][0]+n[1][1]+n[2][2]+n[3][3]),c=Math.sqrt(n[2][2]),d=Math.sqrt(n[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,i,a,s,n=10){if(void 0===i||void 0===a)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};null!=s||(s=0);const{gmst:o}=it.$.calculateTimeVariables(e);let l=[];return t.forEach((e=>{const t=(0,w.yv)({lon:a,lat:i,alt:s},(0,w.eV)(e.position,o)),r={az:t.az,el:t.el};r.el>n&&l.push(r)})),Ht.calculateDops(l)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");let t=(0,n.Gn)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let i=t.insertRow(),a=i.insertCell();a.appendChild(document.createTextNode("Time"));let s=i.insertCell();s.appendChild(document.createTextNode("HDOP"));let o=i.insertCell();o.appendChild(document.createTextNode("PDOP"));let l=i.insertCell();l.appendChild(document.createTextNode("GDOP"));for(let n of e)i=t.insertRow(),a=i.insertCell(),a.appendChild(document.createTextNode((0,$t.v)(n.time,"isoDateTime",!0))),s=i.insertCell(),s.appendChild(document.createTextNode(n.dops.hdop)),o=i.insertCell(),o.appendChild(document.createTextNode(n.dops.pdop)),l=i.insertCell(),l.appendChild(document.createTextNode(n.dops.gdop))}static getDopsList(e,t,i,a,s,n){let o=[];for(let l=0;l<1440;l++){const r=e(60*l*w.s9);let c=Ht.getDops(r,t,i,a,s,n);o.push({time:r,dops:c})}return o}}class zt extends u.c{constructor(){super(zt.PLUGIN_NAME),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=Ft,this.bottomIconCallback=()=>{this.isMenuButtonActive&&(0,v.QP)(zt.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=l.b.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
    <br><br>
    HDOP is the Horizontal Dilution of Precision. It is a measure of the accuracy of the horizontal position.
    <br><br>
    PDOP is the Position Dilution of Precision. It is a measure of the accuracy of the position.
    <br><br>
    GDOP is the Geometric Dilution of Precision. It is a measure of the accuracy of the position.
  `,this.sideMenuElementName="dops-menu",this.sideMenuElementHtml=l.b.html`
  <div id="${this.sideMenuElementName}" class="side-menu-parent start-hidden text-select">
    <div id="dops-content" class="side-menu">
      <form id="dops-form">
        <div class="switch row">
          <h5 class="center-align">DOP Table</h5>
          <div class="input-field col s3" data-position="bottom" data-offset="60" data-tooltip="Latitude in Degrees">
            <input value="41" id="dops-lat" type="text">
            <label for="dops-lat" class="active">Latitude</label>
          </div>
          <div class="input-field col s3" data-position="bottom" data-offset="60" data-tooltip="Longitude in Degrees">
            <input value="-71" id="dops-lon" type="text">
            <label for="dops-lon" class="active">Longitude</label>
          </div>
          <div class="input-field col s3" data-position="bottom" data-offset="60" data-tooltip="Altitude in KM">
            <input value="-71" id="dops-alt" type="text">
            <label for="dops-lon" class="active">Altitude</label>
          </div>
          <div class="input-field col s3" data-position="bottom" data-offset="60" data-tooltip="Minimum Elevation for GPS Lock">
            <input value="15" id="dops-el" type="text">
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
  </div>`,this.rmbL1ElementName="dops-rmb",this.rmbL1Html=l.b.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">DOPs &#x27A4;</a></li>
`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbL2ElementName="dops-rmb-menu",this.rmbL2Html=l.b.html`
  <ul class='dropdown-contents'>
    <li id="dops-curdops-rmb"><a href="#">Current GPS DOPs</a></li>
    <li id="dops-24dops-rmb"><a href="#">24 Hour GPS DOPs</a></li>
  </ul>
`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=l.b.getInputManager().mouse.latLon;const t=l.b.getInputManager().mouse.dragPosition;if(void 0===e||isNaN(e.lat)||isNaN(e.lon)){console.debug("latLon undefined!");const i=it.$.calculateTimeVariables(l.b.getTimeManager().simulationTimeObj).gmst;e=(0,w.K7)({x:t[0],y:t[1],z:t[2]},i)}const i=zt.getGpsSats(l.b.getCatalogManager(),l.b.getGroupsManager()),a=Ht.getDops(l.b.getTimeManager().simulationTimeObj,i,e.lat,e.lon,0,settingsManager.gpsElevationMask);l.b.getUiManager().toast(`HDOP: ${a.hdop}<br/>VDOP: ${a.vdop}<br/>PDOP: ${a.pdop}<br/>GDOP: ${a.gdop}<br/>TDOP: ${a.tdop}`,"normal",!0)}break;case"dops-24dops-rmb":{const e=l.b.getInputManager().mouse.latLon;if(this.isMenuButtonActive){(0,v.QP)(zt.updateSideMenu),this.setBottomIconToEnabled();break}(0,n.Gn)("dops-lat").value=e.lat.toFixed(3),(0,n.Gn)("dops-lon").value=e.lon.toFixed(3),(0,n.Gn)("dops-alt").value="0",(0,n.Gn)("dops-el").value=settingsManager.gpsElevationMask.toString(),l.b.runEvent(o.RL.bottomMenuClick,this.bottomIconElementName)}}}}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("dops-form").addEventListener("submit",(e=>{e.preventDefault(),zt.updateSideMenu()}))}})}static updateSideMenu(){const e=l.b.getGroupsManager(),t=l.b.getCatalogManager(),i=l.b.getTimeManager(),a=parseFloat((0,n.Gn)("dops-lat").value),s=parseFloat((0,n.Gn)("dops-lon").value),o=parseFloat((0,n.Gn)("dops-alt").value),r=parseFloat((0,n.Gn)("dops-el").value);settingsManager.gpsElevationMask=r;const c=zt.getGpsSats(t,e),d=Ht.getDopsList((e=>i.getOffsetTimeObj(e)),c,a,s,o,r);Ht.updateDopsTable(d)}static getGpsSats(e,t){var i,a;const s=null!==(i=(a=t.groupList).GPSGroup)&&void 0!==i?i:a.GPSGroup=t.createGroup(r.Y.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),n=[];return s.ids.forEach((t=>{const i=e.getSat(t);i&&n.push(i)})),n}}zt.PLUGIN_NAME="DOPs Plugin";const jt=new zt,Vt=i.p+"../img/edit.png";class Kt extends u.c{constructor(){super(Kt.PLUGIN_NAME),this.dependencies=[g.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=l.b.html`The Edit Satellite Menu is used to edit the satellite data.
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
    </ul>`,this.sideMenuElementName="editSat-menu",this.sideMenuElementHtml=l.b.html`
    <div id="editSat-menu" class="side-menu-parent start-hidden text-select">
      <div id="editSat-content" class="side-menu">
        <div class="row">
          <h5 class="center-align">Edit Satellite</h5>
          <form id="editSat">
            <div class="input-field col s12">
              <input disabled value="AAAAA" id="${Kt.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${Kt.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${Kt.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${Kt.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${Kt.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Kt.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${Kt.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Kt.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${Kt.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${Kt.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${Kt.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${Kt.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${Kt.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Kt.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${Kt.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Kt.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${Kt.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${Kt.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${Kt.elementPrefix}-per" class="active">Period</label>
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
        <div id="${Kt.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=Vt,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.populateSideMenu_()},this.dragOptions={isDraggable:!0},this.isRmbOnSat=!0,this.rmbMenuOrder=2,this.rmbL1ElementName="edit-rmb",this.rmbL1Html=l.b.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Edit Sat &#x27A4;</a></li>`,this.rmbCallback=(e,t)=>{if(null==t)throw new Error("clickedSat is undefined");switch(e){case"set-pri-sat-rmb":this.selectSatManager_.selectSat(t);break;case"set-sec-sat-rmb":this.selectSatManager_.setSecondarySat(t);break;case"edit-sat-rmb":this.selectSatManager_.selectSat(t),this.isMenuButtonActive||l.b.getUiManager().bottomIconPress({id:this.bottomIconElementName})}},this.rmbL2ElementName="edit-rmb-menu",this.rmbL2Html=l.b.html`
    <ul class='dropdown-contents'>
      <li id="set-pri-sat-rmb"><a href="#">Set as Primary Sat</a></li>
      <li id="set-sec-sat-rmb"><a href="#">Set as Secondary Sat</a></li>
      <li id="edit-sat-rmb"><a href="#">Edit Satellite</a></li>
    </ul>`,this.selectSatManager_=l.b.getPlugin(g.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"editSat",cb:()=>{(0,n.Gn)("editSat-newTLE").addEventListener("click",this.editSatNewTleClick_.bind(this)),(0,n.Gn)("editSat").addEventListener("submit",(function(e){e.preventDefault(),Kt.editSatSubmit()})),(0,n.Gn)(`${Kt.elementPrefix}-per`).addEventListener("change",(function(){const e=(0,n.Gn)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,n.Gn)("es-meanmo").value=t.toFixed(8)})),(0,n.Gn)(`${Kt.elementPrefix}-meanmo`).addEventListener("change",(function(){const e=(0,n.Gn)(`${Kt.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,n.Gn)(`${Kt.elementPrefix}-per`).value=t})),(0,n.Gn)("editSat-save").addEventListener("click",Kt.editSatSaveClick),(0,n.Gn)("editSat-open").addEventListener("click",(function(){l.b.getSoundManager().play(p.p.MENU_BUTTON),(0,n.Gn)("editSat-file").click()})),(0,n.Gn)("editSat-file").addEventListener("change",(function(e){window.FileReader&&(Kt.doReaderActions_(e),e.preventDefault())})),(0,n.Gn)(`${Kt.elementPrefix}-error`).addEventListener("click",(function(){(0,n.Gn)(`${Kt.elementPrefix}-error`).style.display="none"}))}})}addJs(){super.addJs(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e||(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}})}static doReaderActions_(e){try{const t=new FileReader;t.onload=Kt.readerOnLoad_,t.readAsText(e.target.files[0])}catch(e){S.x.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad_(e){if(2!==e.target.readyState)return;if(e.target.error)return void S.x.warn("Error while reading file!");const t=l.b.getTimeManager(),i=l.b.getOrbitManager(),a=l.b.getUiManager(),s=JSON.parse(e.target.result),n=parseInt(ft.J.pad0(s.tle1.substr(2,5).trim(),5)),o=l.b.getCatalogManager().sccNum2Sat(n);let r;try{r=w.t2.createSatrec(s.tle1,s.tle2)}catch(e){return void S.x.error(e,"edit-sat.ts","Error creating satellite record!")}it.$.altitudeCheck(r,t.simulationTimeObj)>1?(l.b.getCatalogManager().satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:o.id,active:!0,tle1:s.tle1,tle2:s.tle2}),i.changeOrbitBufferData(o.id,s.tle1,s.tle2),o.active=!0):a.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}populateSideMenu_(){const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;(0,n.Gn)(`${Kt.elementPrefix}-scc`).value=t.sccNum;const i=t.inclination.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Kt.elementPrefix}-inc`).value=i,(0,n.Gn)(`${Kt.elementPrefix}-year`).value=t.tle1.substr(18,2),(0,n.Gn)(`${Kt.elementPrefix}-day`).value=t.tle1.substr(20,12),(0,n.Gn)(`${Kt.elementPrefix}-meanmo`).value=t.tle2.substr(52,11),(0,n.Gn)(`${Kt.elementPrefix}-per`).value=(1440/parseFloat(t.tle2.substr(52,11))).toFixed(4);const a=t.rightAscension.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Kt.elementPrefix}-rasc`).value=a,(0,n.Gn)(`${Kt.elementPrefix}-ecen`).value=t.eccentricity.toFixed(7).substr(2,7);const s=t.argOfPerigee.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Kt.elementPrefix}-argPe`).value=ft.J.pad0(s,8),(0,n.Gn)(`${Kt.elementPrefix}-meana`).value=t.tle2.substr(43,8)}editSatNewTleClick_(){(0,v.QP)(this.editSatNewTleClickFadeIn_.bind(this))}editSatNewTleClickFadeIn_(){const e=l.b.getTimeManager(),t=l.b.getUiManager();try{const i=l.b.getCatalogManager().sccNum2Id(parseInt((0,n.Gn)(`${Kt.elementPrefix}-scc`).value)),a=l.b.getCatalogManager().getObject(i);if(!a.isSatellite())return;const s=a,r=it.$.calculateTimeVariables(e.simulationTimeObj).gmst,c=(0,w.K7)(s.position,r);let d=c.lon,u=c.lat,g=c.alt;const p=it.$.getDirection(s,e.simulationTimeObj);"Error"===p&&t.toast("Cannot calculate direction of satellite. Try again later.","caution");const h=e.simulationTimeObj,m=wt.l.currentEpoch(h);let b;s.tle1=s.tle1.substr(0,18)+m[0]+m[1]+s.tle1.substr(32),l.b.getMainCamera().isAutoPitchYawToTarget=!1,b=s.apogee-s.perigee<300?new Mt(s,u,d,p,h).rotateOrbitToLatLon():new Mt(s,u,d,p,h,g).rotateOrbitToLatLon();const v=b[0],S=b[1];if("Error"===v)return void t.toast(`${S}`,"critical",!0);l.b.getCatalogManager().satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:i,tle1:v,tle2:S}),l.b.getOrbitManager().changeOrbitBufferData(i,v,S);const f=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!f.isSatellite())return;const M=f;(0,n.Gn)(`${Kt.elementPrefix}-scc`).value=M.sccNum;const y=M.inclination.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Kt.elementPrefix}-inc`).value=ft.J.pad0(y,8),(0,n.Gn)(`${Kt.elementPrefix}-year`).value=M.tle1.substr(18,2),(0,n.Gn)(`${Kt.elementPrefix}-day`).value=M.tle1.substr(20,12),(0,n.Gn)(`${Kt.elementPrefix}-meanmo`).value=M.tle2.substr(52,11),(0,n.Gn)(`${Kt.elementPrefix}-per`).value=(1440/parseFloat(M.tle2.substr(52,11))).toFixed(4);const C=M.rightAscension.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Kt.elementPrefix}-rasc`).value=C,(0,n.Gn)(`${Kt.elementPrefix}-ecen`).value=M.eccentricity.toFixed(7).substr(2,7);const L=M.argOfPerigee.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Kt.elementPrefix}-argPe`).value=L,(0,n.Gn)(`${Kt.elementPrefix}-meana`).value=M.tle2.substr(43,8)}catch(e){S.x.warn(e)}}static editSatSubmit(){l.b.getSoundManager().play(p.p.MENU_BUTTON);const e=l.b.getCatalogManager();(0,n.Gn)(`${Kt.elementPrefix}-error`).style.display="none";const t=(0,n.Gn)(`${Kt.elementPrefix}-scc`).value,i=e.sccNum2Id(parseInt(t));null===i&&S.x.info("Not a Real Satellite");const a=e.getObject(i,o.C_.EXTRA_ONLY);if(!a.isSatellite())return;const s=a,r=s.tle1.substr(9,8);let c=(0,n.Gn)(`${Kt.elementPrefix}-inc`).value,d=(0,n.Gn)(`${Kt.elementPrefix}-meanmo`).value,u=(0,n.Gn)(`${Kt.elementPrefix}-rasc`).value;const g=(0,n.Gn)(`${Kt.elementPrefix}-ecen`).value;let h=(0,n.Gn)(`${Kt.elementPrefix}-argPe`).value,m=(0,n.Gn)(`${Kt.elementPrefix}-meana`).value;const b=(0,n.Gn)(`${Kt.elementPrefix}-year`).value,v=(0,n.Gn)(`${Kt.elementPrefix}-day`).value,{tle1:f,tle2:M}=w.L.createTle({sat:s,inc:c,meanmo:d,rasc:u,argPe:h,meana:m,ecen:g,epochyr:b,epochday:v,intl:r,scc:t}),y=f,C=M;let L;try{L=w.t2.createSatrec(y,C)}catch(e){return void S.x.error(e,"edit-sat.ts","Error creating satellite record!")}it.$.altitudeCheck(L,l.b.getTimeManager().simulationTimeObj)>1?(e.satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:i,active:!0,tle1:y,tle2:C}),l.b.getOrbitManager().changeOrbitBufferData(i,y,C),s.active=!0,s.editTle(y,C),l.b.getMainCamera().zoomTarget=w.$R.GEO):l.b.getUiManager().toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static editSatSaveClick(e){const t=l.b.getCatalogManager();l.b.getSoundManager().play(p.p.EXPORT);try{const e=(0,n.Gn)(`${Kt.elementPrefix}-scc`).value,i=t.sccNum2Id(parseInt(e)),a=t.getObject(i,o.C_.EXTRA_ONLY),s={tle1:a.tle1,tle2:a.tle2},l=JSON.stringify(s),r=new Blob([l],{type:"text/plain;charset=utf-8"});(0,st.saveAs)(r,e+".tle")}catch(e){}e.preventDefault()}}Kt.PLUGIN_NAME="Edit Sat",Kt.elementPrefix="es";class Wt{constructor(){this.PLUGIN_NAME="Gamepad",this.deadzone=.55,this.buttonsPressedHistory=[],this.buttonsPressed=[]}init(){window.addEventListener("gamepadconnected",(e=>{settingsManager.cruncherReady?this.initializeGamepad(e.gamepad):l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>this.initializeGamepad(e.gamepad)})})),window.addEventListener("gamepaddisconnected",(()=>{l.b.getUiManager().toast("Gamepad disconnected","critical"),this.currentController=null}))}initializeGamepad(e){l.b.getUiManager().toast("Gamepad connected","normal"),this.currentController||l.b.register({event:o.RL.updateLoop,cbName:this.PLUGIN_NAME,cb:this.updateGamepad.bind(this)}),this.currentController=e}updateGamepad(e){null!=e||(e=0);const t=Wt.getController(e);null!==t&&(this.currentController=t,this.updateZoom_(),this.updateLeftStick_(),this.updateRightStick_(),this.updateButtons_())}updateButtons_(){this.currentController.buttons.forEach(((e,t)=>{if(e.pressed&&!this.buttonsPressed[t])switch(this.buttonsPressed[t]=!0,this.buttonsPressedHistory.push(t),this.buttonsPressedHistory.length>8&&this.buttonsPressedHistory.shift(),t){case 0:this.btnA_();break;case 1:this.btnB_();break;case 2:this.btnX_();break;case 3:this.btnY_();break;case 4:this.btnLeftBumper();break;case 5:this.btnRightBumper_();break;case 8:this.btnHome_();break;case 9:this.btnStart_();break;case 10:this.btnLeftStick_();break;case 11:this.btnRightStick_();break;case 12:this.btnDpadUp_();break;case 13:this.btnDpadDown_();break;case 14:this.btnDpadLeft_();break;case 15:this.btnDpadRight_();break;case 16:this.btnXbox()}else!e.pressed&&this.buttonsPressed[t]&&(this.buttonsPressed[t]=!1)}))}btnA_(){var e;settingsManager.isLimitedGamepadControls||(console.log("A"),null===(e=l.b.getPlugin(g.P))||void 0===e||e.selectSat(l.b.getHoverManager().hoveringSat))}btnB_(){var e;settingsManager.isLimitedGamepadControls||(console.log("B"),null===(e=l.b.getPlugin(g.P))||void 0===e||e.selectSat(-1),l.b.getMainCamera().zoomTarget=.8)}btnX_(){settingsManager.isLimitedGamepadControls||(console.log("X"),l.b.getMainCamera().autoRotate())}btnY_(){console.log("Y")}btnLeftBumper(){if(settingsManager.isLimitedGamepadControls)return;console.log("Left Bumper");const e=l.b.getPlugin(g.P);if(!e)return;const t=e.selectedSat-1;if(t>=0)e.selectSat(t);else{const t=l.b.getCatalogManager().getActiveSats(),i=t[t.length-1].id;e.selectSat(i)}}btnRightBumper_(){if(settingsManager.isLimitedGamepadControls)return;console.log("Right Bumper");const e=l.b.getPlugin(g.P);if(!e)return;const t=l.b.getCatalogManager().getActiveSats(),i=t[t.length-1].id,a=e.selectedSat+1;a<=i?e.selectSat(a):e.selectSat(0)}btnHome_(){settingsManager.isLimitedGamepadControls||(console.log("Home"),l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,l.b.getMainCamera().ftsRotateReset=!0)}btnXbox(){console.log("Xbox Button")}btnStart_(){console.log("Start")}btnLeftStick_(){console.log("Left Stick")}btnRightStick_(){console.log("Right Stick")}btnDpadUp_(){console.log("D-Pad Up"),settingsManager.isAutoRotateD=!1,settingsManager.isAutoRotateU=!settingsManager.isAutoRotateU,l.b.getMainCamera().autoRotate(!0)}btnDpadDown_(){console.log("D-Pad Down"),settingsManager.isAutoRotateU=!1,settingsManager.isAutoRotateD=!settingsManager.isAutoRotateD,l.b.getMainCamera().autoRotate(!0)}btnDpadLeft_(){console.log("D-Pad Left"),settingsManager.isAutoRotateR=!1,settingsManager.isAutoRotateL=!settingsManager.isAutoRotateL,l.b.getMainCamera().autoRotate(!0)}btnDpadRight_(){console.log("Right"),settingsManager.isAutoRotateL=!1,settingsManager.isAutoRotateR=!settingsManager.isAutoRotateR,l.b.getMainCamera().autoRotate(!0)}updateZoom_(){const e=this.currentController.buttons[6].value,t=this.currentController.buttons[7].value;if(0===e&&0===t)return;const i=l.b.getRenderer();let a=l.b.getMainCamera().zoomLevel();switch(l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:a+=e/500*i.dt,a-=t/500*i.dt,l.b.getMainCamera().zoomTarget=a,l.b.getMainCamera().camZoomSnappedOnSat=!1,l.b.getMainCamera().isAutoPitchYawToTarget=!1,a<l.b.getMainCamera().zoomLevel()?l.b.getMainCamera().isZoomIn=!0:l.b.getMainCamera().isZoomIn=!1;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:0!==e&&(l.b.getMainCamera().fpsVertSpeed+=Math.pow(2*e,3)*i.dt*settingsManager.cameraMovementSpeed),0!==t&&(l.b.getMainCamera().fpsVertSpeed-=Math.pow(2*t,3)*i.dt*settingsManager.cameraMovementSpeed)}}updateLeftStick_(){const e=this.currentController.axes[0],t=this.currentController.axes[1];if(e>this.deadzone||e<-this.deadzone||t>this.deadzone||t<-this.deadzone){l.b.getMainCamera().autoRotate(!1);const i=l.b.getRenderer();switch(settingsManager.lastGamepadMovement=Date.now(),l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:l.b.getMainCamera().camAngleSnappedOnSat=!1,l.b.getMainCamera().isAutoPitchYawToTarget=!1,l.b.getMainCamera().camPitchSpeed-=Math.pow(t,3)/200*i.dt*settingsManager.cameraMovementSpeed,l.b.getMainCamera().camYawSpeed+=Math.pow(e,3)/200*i.dt*settingsManager.cameraMovementSpeed;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:(t>this.deadzone||t<-this.deadzone)&&(l.b.getMainCamera().fpsForwardSpeed=-Math.pow(t,3)*i.dt),(e>this.deadzone||e<-this.deadzone)&&(l.b.getMainCamera().fpsSideSpeed=Math.pow(e,3)*i.dt)}}}updateRightStick_(){if(settingsManager.isLimitedGamepadControls)return;const e=this.currentController.axes[2],t=this.currentController.axes[3],i=l.b.getRenderer();if(l.b.getMainCamera().isLocalRotateOverride=!1,t>this.deadzone||t<-this.deadzone||e>this.deadzone||e<-this.deadzone)switch(l.b.getMainCamera().autoRotate(!1),l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:l.b.getMainCamera().isLocalRotateOverride=!0,l.b.getMainCamera().localRotateDif.pitch=200*-t,l.b.getMainCamera().localRotateDif.yaw=200*-e;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:l.b.getMainCamera().camPitchSpeed+=t/100*i.dt*settingsManager.cameraMovementSpeed,l.b.getMainCamera().camYawSpeed-=e/100*i.dt*settingsManager.cameraMovementSpeed}}vibrate(e){this.currentController&&this.currentController.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})}static getController(e=0){const t=navigator.getGamepads().filter((e=>null!==e));return t.length>e&&null!==t[e]?t[e]:null}}const Yt=new Wt;var Jt=i(2238);const Xt=i.p+"../img/calendar.png";class qt extends u.c{constructor(){super("Launch Menu"),this.bottomIconElementName="menu-launches",this.bottomIconImg=Xt,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonActive){settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3);const e=(new Date).getFullYear();(0,Jt.Us)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonActive&&(this.isMenuButtonActive=!1,(0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const Qt=new qt,Zt=i.p+"../img/rocket.png";var ei=i(8568);class ti extends u.c{constructor(){super(ti.PLUGIN_NAME),this.dependencies=[g.P.PLUGIN_NAME],this.bottomIconCallback=()=>{if(!this.isMenuButtonActive)return;if(!this.verifySatelliteSelected())return;const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);(0,n.Gn)("nl-scc").value=e.sccNum,(0,n.Gn)("nl-inc").value=ft.J.pad0(e.inclination.toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=Zt,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=l.b.html`
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
  `,this.helpTitle="New Launch Menu",this.helpBody=l.b.html`The New Launch Menu is used for generating notional orbital launches by modifying existing satellites with similar parameters.
    <br><br>
    After selecting a satellite, you can select a launch location and a north/south azimuth.
    The selected satellite will be modified to align it with the launch site.
    The clock is then changed to 00:00:00 to represent relative time after the launch.
    This can be helpful in calculating sensor coverage relative to launch time.
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=l.b.getTimeManager(),i=l.b.getCatalogManager(),a=l.b.getUiManager(),s=l.b.getColorSchemeManager();(0,v.wU)();const o=(0,n.Gn)("nl-scc").value,r=i.sccNum2Id(parseInt(o));let c=i.getObject(r);const d=(0,n.Gn)("nl-updown").value,u=(0,n.Gn)("nl-facility").value;let g,h;if(!i.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in i.launchSites)i.launchSites[e].name===u&&(g=i.launchSites[e].lat,h=i.launchSites[e].lon);h>180&&(h-=360);const m=new Date,b=new Date(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate(),0,0,0);b.setUTCHours(0);const f=t.staticOffset;t.changeStaticOffset(b.getTime()-m.getTime()),s.setColorScheme(settingsManager.currentColorScheme,!0),l.b.getMainCamera().isAutoPitchYawToTarget=!1;const M=t.simulationTimeObj,y=new Mt(c,g,h,d,M).rotateOrbitToLatLon(),C=y[0],L=y[1];if("Error"===C||69!==C.length||69!==L.length)return"Error"===C?a.toast(`Failed to Create TLE: ${L}`,"critical"):69!==C.length?a.toast(`Invalid TLE1 Created: length is not 69 - ${C}`,"critical"):69!==L.length&&a.toast(`Invalid TLE2 Created: length is not 69 - ${L}`,"critical"),t.changeStaticOffset(f),this.isDoingCalculations=!1,void(0,v.Zk)();let k;a.toast("Time is now relative to launch time.","standby"),null===(e=l.b.getSoundManager())||void 0===e||e.play(p.p.LIFT_OFF),c.satrec=null;try{k=w.t2.createSatrec(C,L)}catch(e){return void S.x.error(e,"new-launch.ts","Error creating satellite record!")}it.$.altitudeCheck(k,M)>1?(i.satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:r,active:!0,TLE1:C,TLE2:L}),l.b.getOrbitManager().changeOrbitBufferData(r,C,L)):a.toast("Failed Altitude Test - Try a Different Satellite!","critical"),xt(i.satCruncher,(()=>{this.isDoingCalculations=!1,(0,v.Zk)(),l.b.getUiManager().searchManager.doSearch(c.sccNum)}),(e=>void 0!==e.satPos),(()=>{this.isDoingCalculations=!1,(0,v.Zk)(),a.toast("Cruncher failed to meet requirement after multiple tries! Is this launch even possible?","critical")}))},this.selectSatManager_=l.b.getPlugin(g.P)}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)(this.sideMenuElementName+"-form").addEventListener("change",(()=>{const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);e.isSatellite()&&this.preValidate_(e)}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(null==e?void 0:e.isSatellite()){const t=e;(0,n.Gn)("nl-scc").value=t.sccNum,(0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.preValidate_(t)}else(0,n.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0}})}preValidate_(e){const t=(0,n.Gn)("nl-facility").value,i=ei.E[t].lat;let a=e.inclination;a=a>90?180-a:a;const s=(0,n.Gn)(this.sideMenuElementName+"-submit");a<i?(s.disabled=!0,s.textContent="Inclination Too Low!"):(s.disabled=!1,s.textContent="Create Launch Nominal ▶")}}ti.PLUGIN_NAME="New Launch";const ii=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown",ai=i.p+"../img/calendar2.png";class si extends u.c{constructor(){super(si.PLUGIN_NAME),this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.showTable()},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=ai,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=l.b.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=l.b.html`
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
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),i.e(246).then(i.bind(i,6246)).then((e=>e))}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("export-launch-info").addEventListener("click",(()=>{l.b.getSoundManager().play(p.p.EXPORT),(0,at.Eb)(this.launchList,"launchList")}))}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then((e=>e.json())).then((e=>this.processData(e))).catch((()=>S.x.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`))).finally((()=>{const e=(0,n.Gn)("nextLaunch-table");e&&""==e.innerHTML&&(si.initTable(e,this.launchList),(0,n.Gn)("nextLaunch-table").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(0,Jt.Us)(e.href)}))})))}))}}processData(e){var t,i,a,s,n,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(i=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===i?void 0:i.name.split(",",1)[0],c.locationURL=null===(a=r.pad)||void 0===a?void 0:a.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(s=r.rocket)||void 0===s?void 0:s.configuration.full_name,c.rocketConfig=null===(n=r.rocket)||void 0===n?void 0:n.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Launch Window")),i.setAttribute("style","text-decoration: underline; width: 120px;");const a=t.insertCell();a.appendChild(document.createTextNode("Mission")),a.setAttribute("style","text-decoration: underline; width: 140px;");const s=t.insertCell();s.appendChild(document.createTextNode("Location")),s.setAttribute("style","text-decoration: underline");const n=t.insertCell();n.appendChild(document.createTextNode("Agency")),n.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var i,a,s,n,o,l;si.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),u=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":(0,$t.v)(t[r].windowStart,"isoDateTime",!0)+" UTC";d.appendChild(document.createTextNode(u));const g=c.insertCell(),p=(null===(i=t[r])||void 0===i?void 0:i.missionName)||"Unknown",h=(null===(a=t[r])||void 0===a?void 0:a.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${ii(p,15)}</a>`:`${ii(p,15)}`,m=(null===(s=t[r])||void 0===s?void 0:s.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;g.innerHTML=`${h}<br />${m}`;const b=(null===(n=t[r])||void 0===n?void 0:n.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${ii(t[r].location,25)}</a>`:`${ii(t[r].location,25)}`;c.insertCell().innerHTML=b;const v=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${ii(t[r].agency,30)}</a>`:`${ii(t[r].agency,30)}`;c.insertCell().innerHTML=v,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}si.PLUGIN_NAME="Next Launches";const ni=i.p+"../img/day-night.png";class oi extends u.c{constructor(){super("Night Toggle"),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=ni}addJs(){super.addJs(),l.b.register({event:o.RL.nightToggle,cbName:this.PLUGIN_NAME,cb:(e,t,i)=>{this.isMenuButtonActive?e.bindTexture(e.TEXTURE_2D,i):e.bindTexture(e.TEXTURE_2D,t)}})}}var li=i(9974);class ri extends u.c{constructor(){super(ri.PLUGIN_NAME),this.dependencies=[li.s.PLUGIN_NAME,g.P.PLUGIN_NAME],this.doOnce=!1,this.isReferenceSatsActive=!1,this.selectSatManager_=l.b.getPlugin(g.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e&&(this.doOnce||((0,n.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
                <div id="orbit-references-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,n.Gn)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0))}})}orbitReferencesLinkClick(){const e=l.b.getCatalogManager(),t=e.getSat(this.selectSatManager_.selectedSat);if(!t)return;let i="";const a=t.eccentricity.toString(),s=t.rightAscension.toString(),n=t.argOfPerigee.toString(),o=t.inclination.toString(),r=t.meanMotion.toString(),c=t.epochYear.toString(),d=t.epochDay.toString(),u=t.intlDes,g=t.sccNum,p=1440/parseFloat(r);let h=0;for(let l=0;l<360;l++){const m=h.toFixed(4).padStart(8,"0"),{tle1:b,tle2:v}=w.L.createTle({sat:t,inc:o,meanmo:r,rasc:s,argPe:n,meana:m,ecen:a,epochyr:c,epochday:d,intl:u,scc:g}),S=w.Ad.convert6DigitToA5((mt.g.ANALYST_START_ID+l).toString().padStart(5,"0")),f=e.sccNum2Id(S),M=e.addAnalystSat(b,v,f,S);if(M&&(i+=M.sccNum.toString()+","),h+=360/p*4,h>=360)break}i=i.slice(0,-1),l.b.getUiManager().doSearch(i),this.isReferenceSatsActive=!0}}ri.PLUGIN_NAME="Orbit References";var ci=i(5890),di=i(5441);const ui=i.p+"../img/satchng.png";class gi extends u.c{constructor(){super(gi.PLUGIN_NAME),this.bottomIconImg=ui,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=l.b.html`
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
        <li class="menu-selectable" data-group="iridium">Iridium</li>
        <li class="menu-selectable" data-group="orbcomm">Orbcomm</li>
        <li class="menu-selectable" data-group="globalstar">Globalstar</li>
        <li class="menu-selectable" data-group="ses">SES</li>
        <li class="menu-selectable" data-group="aehf">Milstar and AEHF</li>
        <li class="menu-selectable" data-group="wgs">DSCS and WGS</li>
        <li class="menu-selectable" data-group="starlink">Starlink</li>
        <li class="menu-selectable" data-group="sbirs">SBIRS</li>
      </ul>
    </div>
  </div>`,this.helpTitle="Constellations Menu",this.helpBody=l.b.html`The Constellations menu allows you to view groups of satellites.
  <br><br>
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"constellations",cb:()=>{(0,n.Gn)("constellation-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(e){gi.constellationMenuClick(e.target.dataset.group)}))}))}})}static constellationMenuClick(e){const t=l.b.getTimeManager(),i=l.b.getCatalogManager(),a=l.b.getGroupsManager();if(void 0!==a){switch(e){case"SpaceStations":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/NAVSTAR/u,e);break;case"iridium":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/IRIDIUM/u,e);break;case"orbcomm":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/ORBCOMM/u,e);break;case"globalstar":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GLOBALSTAR/u,e);break;case"ses":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/SES \d+/u,e);break;case"AmatuerRadio":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,i.id2satnum(i.satLinkManager.aehf),e),(0,v.QP)((()=>{di.Bz.clear(),i.satLinkManager.showLinks(di.Bz,ci.W6.Aehf,t)}));break;case"wgs":if(!a.groupList[e]){const t=i.satLinkManager.wgs.concat(i.satLinkManager.dscs);a.createGroup(r.Y.SCC_NUM,i.id2satnum(t),e)}(0,v.QP)((()=>{di.Bz.clear(),i.satLinkManager.showLinks(di.Bz,ci.W6.Wgs,t)}));break;case"starlink":a.groupList[e]||a.createGroup(r.Y.NAME_REGEX,/STARLINK/u,e);break;case"sbirs":if(!a.groupList[e]){const t=[...i.satLinkManager.sbirs,...i.satLinkManager.dsp];a.createGroup(r.Y.SCC_NUM,i.id2satnum(t),e)}break;default:throw new Error("Unknown group name: "+e)}gi.groupSelected(e)}}static groupSelected(e){var t;if(void 0===e)return;const i=l.b.getCatalogManager(),a=l.b.getGroupsManager();if(void 0===a.groupList[e])throw new Error("Unknown group name: "+e);const s=(0,n.Gn)("search");a.selectGroup(a.groupList[e]),s.innerHTML=a.groupList[e].ids.reduce(((e,t)=>{var a;return`${e}${null===(a=i.getSat(t))||void 0===a?void 0:a.sccNum},`}),"").slice(0,-1),null===(t=l.b.getPlugin(g.P))||void 0===t||t.selectSat(-1);const o=l.b.getUiManager();o.searchManager.doSearch(a.groupList[e].ids.map((e=>{var t;return null===(t=i.getSat(e))||void 0===t?void 0:t.sccNum})).join(",")),settingsManager.isMobileModeEnabled&&o.searchManager.closeSearch(),o.hideSideMenus()}}gi.PLUGIN_NAME="Sat Constellations";const pi=new gi;var hi=i(1965),mi=i(9696);const bi=i.p+"../img/photoManager.png";class vi extends u.c{constructor(){super(vi.PLUGIN_NAME),this.discvrPhotos_=[],this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="SatellitePhotos",this.bottomIconImg=bi,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=l.b.html`
  <div id="sat-photo-menu" class="side-menu-parent start-hidden text-select">
    <div id="sat-photo-menu-content" class="side-menu">
      <ul id="sat-photo-menu-list">
        <h5 class="center-align">Satellites Imagery List</h5>
        <li id="meteosat9-link" class="link satPhotoRow">MeteoSat 9</li>
        <li id="meteosat11-link" class="link satPhotoRow">MeteoSat 11</li>
        <li id="himawari8-link" class="link satPhotoRow">Himawari 8</li>
        <li id="goes16-link" class="link satPhotoRow">GOES 16</li>
        <li id="goes18-link" class="link satPhotoRow">GOES 18</li>
      </ul>
    </div>
  </div>`,this.helpTitle="Satellite Photos Menu",this.helpBody=l.b.html`The Satellite Photos Menu is used for displaying live photos from select satellites.
  <br><br>
  Note - changes in the image API may cause the wrong satellite to be selected in KeepTrack.`}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("meteosat9-link").addEventListener("click",(()=>{vi.loadPic(28912,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")})),(0,n.Gn)("meteosat11-link").addEventListener("click",(()=>{vi.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")})),(0,n.Gn)("himawari8-link").addEventListener("click",(()=>{vi.himawari8()})),(0,n.Gn)("goes16-link").addEventListener("click",(()=>{vi.loadPic(41866,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")})),(0,n.Gn)("goes18-link").addEventListener("click",(()=>{vi.loadPic(51850,"https://cdn.star.nesdis.noaa.gov/GOES18/ABI/FD/GEOCOLOR/latest.jpg")}))}}),l.b.register({event:o.RL.onKeepTrackReady,cbName:this.PLUGIN_NAME,cb:()=>{this.initDISCOVR_()}})}initDISCOVR_(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{if(e.status>=200&&e.status<400){JSON.parse(e.response).forEach((e=>{const t=e.image,i=e.identifier,a=i.slice(0,4),s=i.slice(4,6),n=i.slice(6,8),o=e.centroid_coordinates.lat,l=e.centroid_coordinates.lon;this.discvrPhotos_.push({imageUrl:`https://epic.gsfc.nasa.gov/archive/natural/${a}/${s}/${n}/png/${t}.png`,lat:o,lon:l})}));for(let e=1;e<this.discvrPhotos_.length+1;e++){const t=`<li id="discovr-link${e}" class="link satPhotoRow">DSCOVR Image ${e}</li>`;(0,n.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",t),(0,n.Gn)(`discovr-link${e}`).addEventListener("click",(()=>{vi.loadPic(-1,this.discvrPhotos_[e-1].imageUrl),l.b.getMainCamera().camSnap((0,mi.Lx)(this.discvrPhotos_[e-1].lat),(0,mi.Zs)(this.discvrPhotos_[e-1].lon,l.b.getTimeManager().simulationTimeObj)),l.b.getMainCamera().changeZoom(.7)}))}}else{S.x.log("https://epic.gsfc.nasa.gov/ request failed!");const e='<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>';(0,n.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",e)}},e.onerror=function(){S.x.log("https://epic.gsfc.nasa.gov/ request failed!"),(0,n.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",'<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>')},e.send()}static loadPic(e,t){var i;l.b.getUiManager().searchManager.hideResults(),null===(i=l.b.getPlugin(g.P))||void 0===i||i.selectSat(l.b.getCatalogManager().sccNum2Id(e)),l.b.getMainCamera().changeZoom(.7),vi.colorbox(t)}static himawari8(){var e;null===(e=l.b.getPlugin(g.P))||void 0===e||e.selectSat(l.b.getCatalogManager().sccNum2Id(40267)),l.b.getMainCamera().changeZoom(.7);let t=l.b.getTimeManager().simulationTimeObj;t.getTime()<Date.now()?t=new Date(t.getTime()-18e5):(l.b.getUiManager().toast("Can't load pictures from the future. Loading most recent photos.","caution"),t=new Date(Date.now()-18e5));const i=t.getUTCFullYear(),a=(t.getUTCMonth()+1).toString().padStart(2,"0"),s=t.getUTCDate().toString().padStart(2,"0"),n=t.getUTCHours().toString().padStart(2,"0"),o=(10*Math.floor(t.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,Jt.Us)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${i}/${a}/${s}/${n}${o}00_0_0.png`,{image:!0})}}vi.PLUGIN_NAME="Satellite Photos",vi.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,Jt.Us)(e,{image:!0})};const Si=new vi,fi=i.p+"../img/video.png";class Mi{constructor(e,t,i,a){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=i,this.onError_=a}static handleError(e){e.message.includes("Permission denied")?S.x.warn('Permission denied! Did you click "Share"?'):S.x.warn("Error:"+e)}getStream(e){return t=this,i=void 0,s=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch((e=>(Mi.handleError(e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch((e=>(Mi.handleError(e),null))):(S.x.warn("Compatibility Error with Recording"),this.onError_(),!1):(S.x.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((a=void 0)||(a=Promise))((function(e,n){function o(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(o,l)}r((s=s.apply(t,i||[])).next())}));var t,i,a,s}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(S.x.debug("Recorder stopped."),this.stream_.getTracks().forEach((e=>e.stop())),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,i=new Blob(this.recordedBlobs,{type:this.supportedType}),a=window.URL.createObjectURL(i),s=document.createElement("a");s.style.display="none",s.href=a,s.download=t,l.b.containerRoot.appendChild(s),s.click(),setTimeout((()=>{l.b.containerRoot.removeChild(s),window.URL.revokeObjectURL(a)}),100)}start(){this.getStream().then((e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;let t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(let e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&S.x.debug("No supported type found for MediaRecorder");let i={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||Mi.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,i)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}S.x.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${i}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),S.x.debug(`Created MediaRecorder ${this.mediaRecorder_}`)})).catch((()=>{}))}}Mi.BIT_RATE_30_MBPS=3e7,Mi.BIT_RATE_20_MBPS=2e7,Mi.BIT_RATE_10_MBPS=1e7,Mi.BIT_RATE_5_MBPS=5e6,Mi.BIT_RATE_2_MBPS=2e6,Mi.BIT_RATE_1_MBPS=1e6;class wi extends u.c{constructor(){super("Screen Recorder"),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return S.x.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){S.x.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=fi,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerOnReady,cbName:this.PLUGIN_NAME,cb:()=>{try{this.streamManagerInstance=new Mi(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save(wi.FILE_NAME),this.setBottomIconToUnselected()}}wi.FILE_NAME="keeptrack.webm";const yi=new wi,Ci=i.p+"../img/camera.png";class Li extends u.c{constructor(){super("Screenshot"),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=Ci,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.rmbL1ElementName="save-rmb",this.rmbL1Html=l.b.html`
    <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Save Image &#x27A4;</a></li>
  `,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.isRmbOnSat=!0,this.rmbL2ElementName="save-rmb-menu",this.rmbL2Html=l.b.html`
    <ul class='dropdown-contents'>
      <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
      <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
      <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
    </ul>
  `,this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),l.b.register({event:o.RL.altCanvasResize,cbName:this.PLUGIN_NAME,cb:()=>this.queuedScreenshot_}),l.b.register({event:o.RL.endOfDraw,cbName:this.PLUGIN_NAME,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){let e=document.createElement("a");e.download="keeptrack.png";let t=(new Date).getUTCFullYear(),i=settingsManager.copyrightOveride?"":`©${t} KEEPTRACK.SPACE`;e.href=Li.watermarkedDataUrl(i),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=l.b.getRenderer().domElement,i=document.createElement("canvas"),a=i.getContext("2d");let s=i.width=t.width,n=i.height=t.height;a.drawImage(t,0,0),a.font="24px nasalization";let o=a.measureText(e).width;a.globalAlpha=1,a.fillStyle="white",a.fillText(e,s-o-30,n-30);const{classificationstr:r,classificationColor:c}=Li.calculateClassificationText();""!==r&&(a.font="24px nasalization",a.globalAlpha=1,a.fillStyle=c,o=a.measureText(r).width,a.fillText(r,s/2-o,n-20),a.fillText(r,s/2-o,34)),l.b.containerRoot.appendChild(i);let d=i.toDataURL();return i.parentNode.removeChild(i),d}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:Lt.getColors(settingsManager.classificationStr).backgroundColor}}}const ki=new Li;var Ei=i(4118),Ai=i(1527),Ti=i(658),xi=i(3443);const Gi=i.p+"../img/radar.png";var Ni=i(5701),Ii=i.n(Ni),_i=i(8236),Ri=i.n(_i),Pi=i(6080),Oi=i.n(Pi),Di=i(6850),Fi=i.n(Di),Ui=i(7182),Bi=i.n(Ui),$i=i(9213),Hi=i.n($i),zi=i(3862),ji={};ji.styleTagTransform=Hi(),ji.setAttributes=Fi(),ji.insert=Oi().bind(null,"head"),ji.domAPI=Ri(),ji.insertStyleElement=Bi(),Ii()(zi.Z,ji),zi.Z&&zi.Z.locals&&zi.Z.locals;class Vi extends u.c{constructor(){super(Vi.PLUGIN_NAME),this.dependencies=[_t.s.PLUGIN_NAME],this.bottomIconCallback=()=>{var e;this.isMenuButtonActive&&((null===(e=l.b.getPlugin(pt))||void 0===e?void 0:e.isMenuButtonActive)?(0,Ti.l)("sensor-top-link").forEach((e=>{e.style.display="none"})):(0,Ti.l)("sensor-top-link").forEach((e=>{e.style.gridTemplateColumns="repeat(2,1fr)",e.style.display=""})))},this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.bottomIconElementName="sensor-list-icon",this.bottomIconLabel="Sensors",this.bottomIconImg=Gi,this.sideMenuElementName="sensor-list-menu",this.sideMenuElementHtml=l.b.html`
    <div id="sensor-list-menu" class="side-menu-parent start-hidden text-select">
        <div id="sensor-list-content" class="side-menu">
        <div class="row">
          <ul id="reset-sensor-text" class="sensor-reset-menu">
            <button id="reset-sensor-button" class="center-align btn btn-ui waves-effect waves-light menu-selectable" type="button">Reset Sensor &#9658;</button>
            <li class="divider"></li>
          </ul>
          <ul id="list-of-sensors">`+Vi.ssnSensors_()+Vi.mwSensors_()+Vi.mdaSensors_()+Vi.leoLabsSensors_()+Vi.esocSensors_()+Vi.russianSensors_()+Vi.chineseSensors_()+Vi.otherSensors_()+l.b.html`
          </ul>
        </div>
      </div>
    </div>`,this.isSensorLinksAdded=!1,this.helpTitle="Sensors Menu",this.helpBody=l.b.html`The Sensors menu allows you to select a sensor for use in calculations and other menu's functions.
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
  If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("nav-mobile").insertAdjacentHTML("beforeend",l.b.html`<div id="sensor-selected" class="waves-effect waves-light"></div>`)}}),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("sensor-selected").addEventListener("click",(()=>{var e;l.b.runEvent(o.RL.bottomMenuClick,this.bottomIconElementName),null===(e=l.b.getSoundManager())||void 0===e||e.play(p.p.CLICK)})),(0,n.Gn)("sensor-list-content").addEventListener("click",(e=>{var t;let i=e.target;if(!(null==i?void 0:i.classList.contains("menu-selectable"))&&(i=null==i?void 0:i.closest(".menu-selectable"),!(null==i?void 0:i.classList.contains("menu-selectable"))))return;if("reset-sensor-button"===i.id)return l.b.getSensorManager().resetSensorSelected(),void l.b.getSoundManager().play(p.p.MENU_BUTTON);null===(t=l.b.getSoundManager())||void 0===t||t.play(p.p.CLICK);const a=i.dataset.sensor;this.sensorListContentClick(a)}))}}),l.b.register({event:o.RL.selectSatData,cbName:"sensor",cb:e=>{null!=e&&(null===l.b.getPlugin(li.s)||this.isSensorLinksAdded||((0,n.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
                  <div id="sensors-in-fov-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                        data-tooltip="Visualize Sensor Coverage">Show All Sensors with FOV...</div>
                `),(0,n.Gn)("sensors-in-fov-link").addEventListener("click",(()=>{l.b.getSoundManager().play(p.p.CLICK);const e=l.b.getPlugin(g.P);if(!e)return;const t=e.getSelectedSat();t.isMissile()||Object.keys(Ai.T).forEach((e=>{const i=Ai.T[e];i.isSatInFov(t,l.b.getTimeManager().simulationTimeObj)&&l.b.getLineManager().create(di.jv.MULTI_SENSORS_TO_SAT,[t.id,l.b.getCatalogManager().getSensorFromSensorName(i.name)],"g")}))})),this.isSensorLinksAdded=!0))}})}addJs(){super.addJs(),l.b.register({event:o.RL.sensorDotSelected,cbName:this.PLUGIN_NAME,cb:e=>{if(settingsManager.isMobileModeEnabled)return;if(!e.isSensor())return;const t=e,i=l.b.getSensorManager();if(i.setSensor(null,t.sensorId),0===i.currentSensors.length)throw new Error("No sensors found");const a=l.b.getTimeManager();l.b.getMainCamera().lookAtLatLon(i.currentSensors[0].lat,i.currentSensors[0].lon,i.currentSensors[0].zoom,a.selectedDate)}}),l.b.register({event:o.RL.onCruncherReady,cbName:this.PLUGIN_NAME,cb:()=>{!settingsManager.disableUI&&settingsManager.isLoadLastSensor&&Vi.reloadLastSensor_()}})}sensorListContentClick(e){var t;if(!this.isMenuButtonActive)return;const i=l.b.getSensorManager();if(void 0!==e){switch(e){case"cspocAll":i.setSensor("SSN");break;case"mwAll":i.setSensor("NATO-MW");break;case"mdAll":i.setSensor("MD-ALL");break;case"esocAll":i.setSensor("ESOC-ALL");break;case"llAll":i.setSensor("LEO-LABS");break;case"rusAll":i.setSensor("RUS-ALL");break;case"prcAll":i.setSensor("PRC-ALL");break;default:i.setSensor(Ai.T[`${e}`])}null===(t=l.b.getPlugin(g.P))||void 0===t||t.selectSat(-1);try{l.b.getMainCamera().lookAtLatLon(i.currentSensors[0].lat,i.currentSensors[0].lon,i.currentSensors[0].zoom,l.b.getTimeManager().selectedDate)}catch(e){S.x.warn("Error in sensorListContentClick: "+e)}settingsManager.currentColorScheme==l.b.getColorSchemeManager().default&&dt.j.change("default")}else S.x.debug("The menu item was clicked but the menu was not defined.")}static createLiForSensor_(e){return l.b.html`
      <li class="menu-selectable" data-sensor="${e.objName}">
        <span>${e.uiName}</span>
        <span>${e.system}</span>
        <span class="badge dark-blue-badge" data-badge-caption="${e.operator}"></span>
      </li>
    `}static ssnSensors_(){return this.createSection_({header:"Space Surveillance Network Sensors",sensors:[Ai.T.EGLAFB,Ai.T.KWAJSPF,Ai.T.GEODDSDGC,Ai.T.GEODDSMAU,Ai.T.GEODDSSOC,Ai.T.KWAJALT,Ai.T.KWAJMMW,Ai.T.KWAJALC,Ai.T.KWAJTDX,Ai.T.MITMIL,Ai.T.RAFASC,Ai.T.GLBII,Ai.T.HOLCBAND,Ai.T.HOLSST],topLinks:[{name:"All SSN Sensors",dataSensor:"ssnAll",badge:"COALITION"}]})}static mwSensors_(){return this.createSection_({header:"US Missile Warning Sensors",sensors:[Ai.T.BLEAFB,Ai.T.CODSFS,Ai.T.CAVSFS,Ai.T.CLRSFS,Ai.T.COBRADANE,Ai.T.RAFFYL,Ai.T.PITSB],topLinks:[{name:"All MW Sensors",dataSensor:"mwAll",badge:"NORAD"}]})}static mdaSensors_(){return this.createSection_({header:"US Missile Defense Agency Sensors",sensors:[Ai.T.HARTPY,Ai.T.QTRTPY,Ai.T.KURTPY,Ai.T.SHATPY,Ai.T.KCSTPY,Ai.T.SBXRDR],topLinks:[{name:"All MDA Sensors",dataSensor:"mdAll",badge:"MDA"}]})}static createSection_(e){return l.b.html`
              <li class="divider"></li>
              <h5 class="center-align">${e.header}</h5>
              <li class="divider"></li>
              ${e.topLinks.map((e=>l.b.html`<li class="menu-selectable sensor-top-link" data-sensor="${e.dataSensor}">
                <span>${e.name}</span>
                <span class="badge dark-blue-badge" data-badge-caption="${e.badge}"></span>
              </li>`)).join("")}
              ${e.sensors.map((e=>Vi.createLiForSensor_(e))).join("")}
              `}static esocSensors_(){return this.createSection_({header:"ESA Space Operations Center Sensors",sensors:[Ai.T.GRV,Ai.T.TIR,Ai.T.GES,Ai.T.NRC,Ai.T.PDM,Ai.T.TRO,Ai.T.Tenerife,Ai.T.ZimLAT,Ai.T.ZimSMART,Ai.T.Tromso,Ai.T.Kiruna,Ai.T.Sodankyla,Ai.T.Svalbard],topLinks:[{name:"All ESOC Sensors",dataSensor:"esocAll",badge:"ESA"}]})}static leoLabsSensors_(){return this.createSection_({header:"Leo Labs Sensors",sensors:[Ai.T.LEOCRSR,Ai.T.LEOAZORES,Ai.T.LEOKSR,Ai.T.LEOPFISR,Ai.T.LEOMSR],topLinks:[{name:"All Leo Labs Sensors",dataSensor:"llAll",badge:"LEOLABS"}]})}static otherSensors_(){return this.createSection_({header:"Other Sensors",sensors:[Ai.T.ROC,Ai.T.MLS,Ai.T.PO,Ai.T.LSO,Ai.T.MAY],topLinks:[]})}static russianSensors_(){return this.createSection_({header:"Russian Sensors",sensors:[Ai.T.OLED,Ai.T.OLEV,Ai.T.PEC,Ai.T.MISD,Ai.T.MISV,Ai.T.LEKV,Ai.T.ARMV,Ai.T.KALV,Ai.T.BARV,Ai.T.YENV,Ai.T.ORSV,Ai.T.STO,Ai.T.NAK],topLinks:[{name:"All Russian Sensors",dataSensor:"rusAll",badge:"RUS"}]})}static chineseSensors_(){return this.createSection_({header:"Chinese Sensors",sensors:[Ai.T.SHD,Ai.T.HEI,Ai.T.ZHE,Ai.T.XIN,Ai.T.PMO],topLinks:[{name:"All Chinese Sensors",dataSensor:"prcAll",badge:"PRC"}]})}static reloadLastSensor_(){const e=xi.p.getInstance().getItem(xi.Q.CURRENT_SENSOR);if(!e)return;const t=JSON.parse(e);if(null!==t)try{const e=l.b.getSensorManager();void 0===t[0]||null==t[0]?(e.setSensor(null,t[1]),dt.j.change("default")):void 0===t[0].objName?(e.setSensor(t[0],t[1]),dt.j.change("default")):(e.setSensor(Ai.T[t[0].objName],t[1]),dt.j.change("default"))}catch(e){xi.p.getInstance().removeItem(xi.Q.CURRENT_SENSOR)}}}Vi.PLUGIN_NAME="Sensor List";var Ki=i(6886);const Wi=e=>{const t=new CustomEvent("customSubmit",{cancelable:!0});e.dispatchEvent(t)};var Yi=i(6616);class Ji{static updateSensorPosition(e){var t;const i=l.b.getTimeManager(),a=l.b.getCatalogManager(),s=l.b.getSensorManager(),{lon:n,lat:o,alt:r,minaz:c,maxaz:d,minel:u,maxel:p,minrange:h,maxrange:m}=Ji.updateSettingsManager(e);s.whichRadar="CUSTOM",Ji.updateCustomSensorUi_();const b={lat:o,lon:n,alt:r,minAz:c,maxAz:d,minEl:u,maxEl:p,minRng:h,maxRng:m};a.satCruncher.postMessage({typ:yt.Bi.SENSOR,sensor:b}),Yi.w.updateSensorUiStyling([b]),null===(t=l.b.getPlugin(g.P))||void 0===t||t.selectSat(-1);const v=l.b.getMainCamera();m>6e3?v.changeZoom(w.$R.GEO):v.changeZoom(w.$R.LEO),v.camSnap((0,mi.Lx)(o),(0,mi.Zs)(n,i.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(Ji.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,n.Gn)("cs-lat"),t=(0,n.Gn)("cs-lon"),i=(0,n.Gn)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),i.value=settingsManager.geolocation.alt.toString(),i.dispatchEvent(new Event("change")),(0,n.Gn)("cs-telescope").checked=!0,(0,n.Gn)("cs-minaz").disabled=!0,(0,n.Gn)("cs-maxaz").disabled=!0,(0,n.Gn)("cs-minel").disabled=!0,(0,n.Gn)("cs-maxel").disabled=!0,(0,n.Gn)("cs-minrange").disabled=!0,(0,n.Gn)("cs-maxrange").disabled=!0,(0,n.Gn)("cs-minaz-div").style.display="none",(0,n.Gn)("cs-maxaz-div").style.display="none",(0,n.Gn)("cs-minel-div").style.display="none",(0,n.Gn)("cs-maxel-div").style.display="none",(0,n.Gn)("cs-minrange-div").style.display="none",(0,n.Gn)("cs-maxrange-div").style.display="none",(0,n.Gn)("cs-minaz").value="0",(0,n.Gn)("cs-maxaz").value="360",(0,n.Gn)("cs-minel").value="10",(0,n.Gn)("cs-maxel").value="90",(0,n.Gn)("cs-minrange").value="100",(0,n.Gn)("cs-maxrange").value="50000",(0,n.Gn)("sensor-type").innerHTML="Telescope",(0,n.Gn)("sensor-info-title").innerHTML="Custom Sensor",(0,n.Gn)("sensor-country").innerHTML="Custom Sensor"}catch(e){S.x.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const Xi=i.p+"../img/custom.png",qi=i.p+"../img/multi-site.png";class Qi extends u.c{constructor(){super(Qi.PLUGIN_NAME),this.dependencies=[g.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!1,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)},this.lookanglesLength=1,this.lookanglesInterval=30,this.disabledSensors=[],this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=qi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=l.b.html`
    The Multi-Site Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a satellite and multiple sensors.
    A satellite must first be selected before the menu can be used.
    <br><br>
    By default the menu will calculate the look angles for all sensors in the Space Surveillance Netowrk.
    If you would like to calculate the look angles for additional sensors, you can export a csv file at the bottom of the menu.
    The csv file will contain look angles for all sensors.
    <br><br>
    Clicking on a row in the table will select the sensor and change the simulation time to the time of the look angle.`,this.sideMenuElementName="multi-site-look-angles-menu",this.sideMenuElementHtml=l.b.html`
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
    </div>`,this.selectSatManager_=l.b.getPlugin(g.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,n.Gn)("multi-site-look-angles-export"))||void 0===e||e.addEventListener("click",(()=>{l.b.getSoundManager().play(p.p.EXPORT);const e=l.b.getSensorManager().lastMultiSiteArray.map((e=>({time:e.time,sensor:e.objName,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)})));(0,at.Eb)(e,"multiSiteLooks")}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&l.b.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.refreshSideMenuData(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}addJs(){super.addJs(),l.b.register({event:o.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)}})}refreshSideMenuData(e){this.isMenuButtonActive&&e&&(0,v.QP)((()=>{const t=(0,n.Gn)("multi-site-look-angles-sensor-list");if(!t)return void S.x.warn("Could not find sensor list dom");t.innerHTML="";const i=[];for(const a of l.b.getSensorManager().sensorListUS){if(!a.shortName)continue;const s=document.createElement("button");s.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors.includes(a)&&s.classList.add("btn-red"),i.push(a),s.innerText=a.shortName,s.addEventListener("click",(()=>{s.classList.contains("btn-red")?(s.classList.remove("btn-red"),this.disabledSensors.splice(this.disabledSensors.indexOf(a),1),l.b.getSoundManager().play(p.p.TOGGLE_ON)):(s.classList.add("btn-red"),this.disabledSensors.push(a),l.b.getSoundManager().play(p.p.TOGGLE_OFF)),this.getlookanglesMultiSite_(e,i.filter((e=>!this.disabledSensors.includes(e))))})),t.appendChild(s),t.appendChild(document.createTextNode(" "))}this.getlookanglesMultiSite_(e,i.filter((e=>!this.disabledSensors.includes(e))))}))}getlookanglesMultiSite_(e,t){const i=l.b.getTimeManager(),a=l.b.getSensorManager(),s=l.b.getCatalogManager().staticSet;if(!t){t=[];for(const e in s){const i=s[e];t.push(i)}}const n=!a.isSensorSelected(),o=[...a.currentSensors],r=w.rE/(e.satrec.no*w.rE/w.gc),c=[];for(const a of t){if(a.maxRng<e.perigee&&(!a.maxRng2||a.maxRng2<e.perigee))continue;Yi.w.updateSensorUiStyling([a]);let t=0;for(let s=0;s<24*this.lookanglesLength*60*60;s+=this.lookanglesInterval){t=1e3*s;let n=i.getOffsetTimeObj(t),o=Qi.propagateMultiSite_(n,e.satrec,a);""!==o.time&&(c.push(o),s+=60*r*.75)}}c.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),a.lastMultiSiteArray=c,n?a.setCurrentSensor(null):a.setCurrentSensor(o),Qi.populateMultiSiteTable_(c)}static propagateMultiSite_(e,t,i){const a=it.$.getRae(e,t,i);return it.$.checkIsInView(i,a)?{time:e.toISOString(),el:a.el,az:a.az,rng:a.rng,objName:i.objName}:{time:"",el:0,az:0,rng:0,objName:""}}static populateMultiSiteTable_(e){var t;const i=l.b.getSensorManager(),a=l.b.getCatalogManager().staticSet,s=(0,n.Gn)("multi-site-look-angles-table");s.innerHTML="";let o=s.insertRow(),r=o.insertCell();r.appendChild(document.createTextNode("Time")),r.setAttribute("style","text-decoration: underline");let c=o.insertCell();c.appendChild(document.createTextNode("El")),c.setAttribute("style","text-decoration: underline");let d=o.insertCell();d.appendChild(document.createTextNode("Az")),d.setAttribute("style","text-decoration: underline");let u=o.insertCell();u.appendChild(document.createTextNode("Rng")),u.setAttribute("style","text-decoration: underline");let g=o.insertCell();g.appendChild(document.createTextNode("Sensor")),g.setAttribute("style","text-decoration: underline");const p=l.b.getTimeManager();for(const n of e){const e=a.find((e=>e.objName===n.objName));e&&(o=s.insertRow(),o.setAttribute("class","link"),r=o.insertCell(),r.appendChild(document.createTextNode((0,$t.v)(n.time,"isoDateTime",!0))),c=o.insertCell(),c.appendChild(document.createTextNode(n.el.toFixed(1))),d=o.insertCell(),d.appendChild(document.createTextNode(n.az.toFixed(0))),u=o.insertCell(),u.appendChild(document.createTextNode(n.rng.toFixed(0))),g=o.insertCell(),g.appendChild(document.createTextNode(null!==(t=e.shortName)&&void 0!==t?t:"")),o.addEventListener("click",(()=>{p.changeStaticOffset(new Date(n.time).getTime()-(new Date).getTime()),i.setSensor(e,e.sensorId)})))}}}Qi.PLUGIN_NAME="Multi Site Look Angles";class Zi extends u.c{constructor(){super(Qi.PLUGIN_NAME),this.bottomIconCallback=()=>{if(this.isMenuButtonActive){const e=l.b.getSensorManager();e.isSensorSelected()&&((0,n.Gn)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,n.Gn)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,n.Gn)("cs-hei").value=e.currentSensors[0].alt.toString())}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=Xi,this.sideMenuElementName="custom-sensor-menu",this.sideMenuElementHtml=l.b.html`
    <div id="custom-sensor-menu" class="side-menu-parent start-hidden text-select">
        <div id="customSensor-content" class="side-menu">
        <div class="row">
            <h5 class="center-align">Custom Sensor</h5>
            <form id="customSensor">
            <div class="input-field col s12" data-position="top" data-delay="50" data-tooltip="Latitude in Decimal Form (ex: 43.283)">
                <input id="cs-lat" type="text" value="0" />
                <label for="cs-lat" class="active">Latitude</label>
            </div>
            <div class="input-field col s12" data-position="top" data-delay="50" data-tooltip="Longitude in Decimal Form (ex: -73.283)">
                <input id="cs-lon" type="text" value="0" />
                <label for="cs-lon" class="active">Longitude</label>
            </div>
            <div class="input-field col s12" data-position="top" data-delay="50" data-tooltip="Elevation in kilometers (ex: 0.645)">
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
            <div class="input-field col s12">
              <div class="switch row" data-position="top" data-delay="50" data-tooltip="Is this Sensor a Telescope?">
                  <label>
                  <input id="cs-telescope" type="checkbox" checked="false" />
                  <span class="lever"></span>
                  Telescope
                  </label>
              </div>
            </div>
            <div id="cs-minaz-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Azimuth in degrees (ex: 50)">
                <input id="cs-minaz" type="text" value="0" />
                <label for="cs-minaz" class="active">Minimum Azimuth</label>
            </div>
            <div id="cs-maxaz-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Azimuth in degrees (ex: 120)">
                <input id="cs-maxaz" type="text" value="360" />
                <label for="cs-maxaz" class="active">Maximum Azimuth</label>
            </div>
            <div id="cs-minel-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Elevation in degrees (ex: 10)">
                <input id="cs-minel" type="text" value="10" />
                <label for="cs-minel" class="active">Minimum Elevation</label>
            </div>
            <div id="cs-maxel-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Elevation in degrees (ex: 90)">
                <input id="cs-maxel" type="text" value="90" />
                <label for="cs-maxel" class="active">Maximum Elevation</label>
            </div>
            <div id="cs-minrange-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Range in kilometers (ex: 500)">
                <input id="cs-minrange" type="text" value="100" />
                <label for="cs-minrange" class="active">Minimum Range</label>
            </div>
            <div id="cs-maxrange-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Range in kilometers (ex: 20000)">
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
    </div>`,this.rmbL1ElementName="create-rmb",this.rmbL1Html=l.b.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Create &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbMenuOrder=10,this.rmbL2ElementName="create-rmb-menu",this.rmbL2Html=l.b.html`
  <ul class='dropdown-contents'>
    <li id="create-observer-rmb"><a href="#">Create Observer Here</a></li>
    <li id="create-sensor-rmb"><a href="#">Create Sensor Here</a></li>
  </ul>`,this.rmbCallback=e=>{const t=l.b.getSensorManager(),i=l.b.getColorSchemeManager(),a=l.b.getUiManager(),s=l.b.getCatalogManager(),o=l.b.getInputManager().mouse;switch(e){case"create-observer-rmb":(0,C.$k)((0,n.Gn)("custom-sensor-menu"),1e3),(0,n.Gn)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,n.Gn)("cs-telescope").checked||(0,n.Gn)("cs-telescope").click(),(0,n.Gn)("cs-lat").value=o.latLon.lat.toString(),(0,n.Gn)("cs-lon").value=o.latLon.lon.toString(),(0,n.Gn)("cs-hei").value="0",(0,n.Gn)("cs-type").value="Observer",Wi((0,n.Gn)("customSensor")),s.satCruncher.postMessage({isSunlightView:!0,typ:yt.Bi.SUNLIGHT_VIEW}),dt.j.change("sunlight"),a.colorSchemeChangeAlert(i.sunlight),xt(s.satCruncher,(()=>{i.setColorScheme(i.sunlight,!0)}),(e=>e.satInSun));break;case"create-sensor-rmb":(0,C.$k)((0,n.Gn)("custom-sensor-menu"),1e3),(0,n.Gn)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,n.Gn)("cs-telescope").checked&&(0,n.Gn)("cs-telescope").click(),(0,n.Gn)("cs-lat").value=o.latLon.lat.toString(),(0,n.Gn)("cs-lon").value=o.latLon.lon.toString(),(0,n.Gn)("cs-hei").value="0",(0,n.Gn)("cs-type").value="Phased Array Radar",(0,n.Gn)("cs-minaz").value="0",(0,n.Gn)("cs-maxaz").value="360",(0,n.Gn)("cs-minel").value="10",(0,n.Gn)("cs-maxel").value="90",(0,n.Gn)("cs-minrange").value="0",(0,n.Gn)("cs-maxrange").value="5556",Wi((0,n.Gn)("customSensor")),dt.j.change("default"),i.setColorScheme(i.default,!0),a.colorSchemeChangeAlert(settingsManager.currentColorScheme),s.satCruncher.postMessage({isSunlightView:!1,typ:yt.Bi.SUNLIGHT_VIEW})}},this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=l.b.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{Zi.httpsCheck_(),Zi.addCustomSensorFormSubmitListener(),Zi.addTelescopeClickListener_(),Zi.addCustomSensorBtnCLickListener_(),Zi.addClearCustomSensorListener_()}})}static httpsCheck_(){"https:"!==location.protocol?(0,n.UT)("cs-geolocation"):Zi.addUseGeolocationListener_()}static addCustomSensorFormSubmitListener(){(0,n.Gn)("customSensor").addEventListener("submit",(e=>{e.preventDefault()}))}static addUseGeolocationListener_(){(0,n.Gn)("cs-geolocation").addEventListener("click",Ji.useCurrentGeolocationAsSensor)}static addClearCustomSensorListener_(){(0,n.Gn)("cs-clear").addEventListener("click",(()=>{l.b.getSensorManager().clearSecondarySensors()}))}static addCustomSensorBtnCLickListener_(){(0,n.Gn)("cs-submit").addEventListener("click",(()=>{Zi.processCustomSensorSubmit_()}))}static processCustomSensorSubmit_(){var e,t,i,a,s;null===(e=(0,n.Gn)("menu-sensor-info"))||void 0===e||e.classList.remove("bmenu-item-disabled"),null===(t=(0,n.Gn)("menu-fov-bubble"))||void 0===t||t.classList.remove("bmenu-item-disabled"),null===(i=(0,n.Gn)("menu-surveillance"))||void 0===i||i.classList.remove("bmenu-item-disabled"),null===(a=(0,n.Gn)("menu-planetarium"))||void 0===a||a.classList.remove("bmenu-item-disabled"),null===(s=(0,n.Gn)("menu-astronomy"))||void 0===s||s.classList.remove("bmenu-item-disabled"),(0,n.Gn)("sensor-type").value=(0,n.Gn)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,n.Gn)("sensor-info-title").innerHTML="Custom Sensor",(0,n.Gn)("sensor-country").innerHTML="Custom Sensor";const o=Zi.str2Deg((0,n.Gn)("cs-lon").value),r=Zi.str2Deg((0,n.Gn)("cs-lat").value),c=(0,n.Gn)("cs-hei").value,d=(0,n.Gn)("cs-type").value,u=(0,n.Gn)("cs-minaz").value,g=(0,n.Gn)("cs-maxaz").value,p=(0,n.Gn)("cs-minel").value,h=(0,n.Gn)("cs-maxel").value,m=(0,n.Gn)("cs-minrange").value,b=(0,n.Gn)("cs-maxrange").value;let v=w.ge.OBSERVER;switch(d){case"Observer":v=w.ge.OBSERVER;break;case"Optical":v=w.ge.OPTICAL;break;case"Mechanical":v=w.ge.MECHANICAL;break;case"Phased Array Radar":v=w.ge.PHASED_ARRAY_RADAR;break;default:S.x.info("Unknown sensor type: "+d),v=w.ge.OBSERVER}l.b.getSensorManager().addSecondarySensor(new w.hs({id:null,lat:r,lon:o,alt:Zi.str2Km(c),minAz:Zi.str2Deg(u),maxAz:Zi.str2Deg(g),minEl:Zi.str2Deg(p),maxEl:Zi.str2Deg(h),minRng:Zi.str2Km(m),maxRng:Zi.str2Km(b),type:v,name:"Custom Sensor",uiName:"Custom Sensor",system:"Custom Sensor",country:"Custom Sensor",objName:"Custom Sensor",operator:"Custom Sensor",zoom:Zi.str2Km(b)>6e3?w.$R.GEO:w.$R.LEO,volume:!1}))}static addTelescopeClickListener_(){(0,n.Gn)("cs-telescope").addEventListener("click",(()=>{if((0,n.Gn)("cs-telescope").checked)(0,n.Gn)("cs-minaz-div").style.display="none",(0,n.Gn)("cs-maxaz-div").style.display="none",(0,n.Gn)("cs-minel-div").style.display="none",(0,n.Gn)("cs-maxel-div").style.display="none",(0,n.Gn)("cs-minrange-div").style.display="none",(0,n.Gn)("cs-maxrange-div").style.display="none",(0,n.Gn)("cs-minaz").value="0",(0,n.Gn)("cs-maxaz").value="360",(0,n.Gn)("cs-minel").value="10",(0,n.Gn)("cs-maxel").value="90",(0,n.Gn)("cs-minrange").value="100",(0,n.Gn)("cs-maxrange").value="1000000";else{(0,n.Gn)("cs-minaz-div").style.display="block",(0,n.Gn)("cs-maxaz-div").style.display="block",(0,n.Gn)("cs-minel-div").style.display="block",(0,n.Gn)("cs-maxel-div").style.display="block",(0,n.Gn)("cs-minrange-div").style.display="block",(0,n.Gn)("cs-maxrange-div").style.display="block";const e=l.b.getSensorManager();e.isSensorSelected()&&((0,n.Gn)("cs-minaz").value=e.currentSensors[0].minAz.toString(),(0,n.Gn)("cs-maxaz").value=e.currentSensors[0].maxAz.toString(),(0,n.Gn)("cs-minel").value=e.currentSensors[0].minEl.toString(),(0,n.Gn)("cs-maxel").value=e.currentSensors[0].maxEl.toString(),(0,n.Gn)("cs-minrange").value=e.currentSensors[0].minRng.toString(),(0,n.Gn)("cs-maxrange").value=e.currentSensors[0].maxRng.toString())}}))}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}Zi.PLUGIN_NAME="Custom Sensor";var ea=i(5058);const ta=i.p+"../img/lookangles.png";class ia extends u.c{constructor(){super(ia.PLUGIN_NAME),this.dependencies=[g.P.PLUGIN_NAME],this.isRiseSetLookangles_=!0,this.lookanglesInterval_=30,this.lookanglesLength_=2,this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconElementName="look-angles-icon",this.bottomIconLabel="Look Angles",this.bottomIconImg=ta,this.bottomIconCallback=()=>{this.refreshSideMenuData_()},this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:450},this.helpTitle="Look Angles Menu",this.helpBody=l.b.html`
    The Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a sensor and a satellite.
    A satellite and sensor must first be selected before the menu can be used.
    <br><br>
    The toggle only rise and set times will only calculate the rise and set times of the satellite.
    This is useful for quickly determining when a satellite will be visible to a sensor.
    <br><br>
    The search range can be modified by changing the length and interval options.`,this.sideMenuElementName="look-angles-menu",this.sideMenuElementHtml=l.b.html`
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
                <input id="look-angles-length" value="2" type="text" data-position="bottom" data-delay="50" data-tooltip="How Many Days of Look Angles Should be Calculated" />
                <label for="look-anglesLength" class="active">Length (Days)</label>
                </div>
                <div class="input-field col s6">
                <input id="look-angles-interval" value="30" type="text" data-position="bottom" data-delay="50" data-tooltip="Seconds Between Each Line of Look Angles" />
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
    </div>`,this.refreshSideMenuData_=()=>{this.isMenuButtonActive&&(0,v.QP)((()=>{const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);e.isSatellite()&&this.getlookangles_(e)}))},this.selectSatManager_=l.b.getPlugin(g.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;(0,n.Gn)("look-angles-length").addEventListener("change",(()=>{this.lookanglesLength_=parseFloat((0,n.Gn)("look-angles-length").value),this.refreshSideMenuData_()})),(0,n.Gn)("look-angles-interval").addEventListener("change",(()=>{this.lookanglesInterval_=parseInt((0,n.Gn)("look-angles-interval").value),this.refreshSideMenuData_()})),null===(e=(0,n.Gn)("export-look-angles"))||void 0===e||e.addEventListener("click",(()=>{l.b.getSoundManager().play(p.p.EXPORT),(0,at.Eb)(this.lastlooksArray_,"Look-Angles")})),(0,n.Gn)("settings-riseset").addEventListener("change",this.settingsRisesetChange_.bind(this));const t=this.selectSatManager_.getSelectedSat();this.checkIfCanBeEnabled_(t)}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}}),l.b.register({event:o.RL.resetSensor,cbName:this.PLUGIN_NAME,cb:()=>{this.checkIfCanBeEnabled_(null)}})}addJs(){super.addJs(),l.b.register({event:o.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData_()}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&l.b.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.getlookangles_(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}getlookangles_(e,t){const i=l.b.getTimeManager();if(!t){const e=l.b.getSensorManager();if(!e.isSensorSelected())return console.debug("satellite.getlookangles requires a sensor to be set!"),[];t=e.currentSensors}let a=this.isRiseSetLookangles_?1:this.lookanglesInterval_,s=[],n=0;for(let o=0;o<24*this.lookanglesLength_*60*60;o+=a){n=1e3*o;let a=i.getOffsetTimeObj(n),l=ea.J.getTearData(a,e.satrec,t,this.isRiseSetLookangles_);if(""!==l.time&&s.push(l),s.length>=1500)break}return s.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),this.lastlooksArray_=s,ia.populateSideMenuTable_(s,i),s}static populateSideMenuTable_(e,t){let i=(0,n.Gn)("looks");i.innerHTML="";let a=i.insertRow(),s=a.insertCell();s.appendChild(document.createTextNode("Time")),s.setAttribute("style","text-decoration: underline");let o=a.insertCell();o.appendChild(document.createTextNode("El")),o.setAttribute("style","text-decoration: underline");let l=a.insertCell();l.appendChild(document.createTextNode("Az")),l.setAttribute("style","text-decoration: underline");let r=a.insertCell();r.appendChild(document.createTextNode("Rng")),r.setAttribute("style","text-decoration: underline");for(const a of e)ia.populateSideMenuRow_(i,s,a,t,o,l,r)}static populateSideMenuRow_(e,t,i,a,s,n,r){if(e.rows.length>0){const s=e.insertRow();s.setAttribute("class","link"),(t=s.insertCell()).appendChild(document.createTextNode((0,$t.v)(i.time,"isoDateTime",!1))),t.addEventListener("click",(()=>{a.changeStaticOffset(new Date((0,$t.v)(i.time,"isoDateTime",!1)+"z").getTime()-a.realTime),a.calculateSimulationTime(),l.b.runEvent(o.RL.updateDateTime,new Date(a.dynamicOffsetEpoch+a.staticOffset))})),s.insertCell().appendChild(document.createTextNode(i.el.toFixed(1))),s.insertCell().appendChild(document.createTextNode(i.az.toFixed(0))),s.insertCell().appendChild(document.createTextNode(i.rng.toFixed(0)))}}settingsRisesetChange_(e,t){if(null==e)throw new Error("e is undefined");null!=t||(t=(0,n.Gn)("settings-riseset").checked),this.isRiseSetLookangles_=!!t,this.refreshSideMenuData_()}}ia.PLUGIN_NAME="Look Angles";const aa=i.p+"../img/radio-tower.png";class sa extends u.c{constructor(){super(sa.PLUGIN_NAME),this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.getSensorInfo(),this.checkIfLinesVisible_(l.b.getLineManager())},this.bottomIconElementName="sensor-info-icon",this.bottomIconLabel="Sensor Info",this.bottomIconImg=aa,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="sensor-info-menu",this.sideMenuElementHtml=l.b.html`
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
        <div class="sensor-info-row">
            <div class="sensor-info-key">Band</div>
            <div class="sensor-info-value" id="sensor-band">UHF</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Beam Width</div>
            <div class="sensor-info-value" id="sensor-beamwidth">10 deg</div>
        </div>
        <div class="center-align row">
            <button id="sensor-sun-btn" class="btn btn-ui waves-effect waves-light" type="button">Draw Line to Sun &#9658;</button>
        </div>
        <div class="center-align row">
            <button id="sensor-moon-btn" class="btn btn-ui waves-effect waves-light" type="button">Draw Line to Moon &#9658;</button>
        </div>
        </div>
    </div>
    </div>`,this.dragOptions={isDraggable:!0},this.isSunLineVisible_=!1,this.isMonnLineVisible_=!1,this.helpTitle="Sensor Info",this.helpBody=l.b.html`
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
    Additionally, lines can be quickly created from the sensor to the sun or moon from this menu.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.addSensorToSunBtnListener_(),this.addSensorToMoonBtnListener()}}),l.b.register({event:o.RL.onLineAdded,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfLinesVisible_(e)}})}checkIfLinesVisible_(e){this.isSunLineVisible_=e.drawLineList.some((e=>e.type===di.jv.SENSOR_TO_SUN)),this.isSunLineVisible_?((0,n.Gn)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0):((0,n.Gn)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1),this.isMonnLineVisible_=e.drawLineList.some((e=>e.type===di.jv.SENSOR_TO_MOON)),this.isMonnLineVisible_?((0,n.Gn)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0):((0,n.Gn)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1)}addSensorToMoonBtnListener(){(0,n.Gn)("sensor-moon-btn").addEventListener("click",(()=>{if(this.isMonnLineVisible_){const e=l.b.getLineManager();for(const t of e.drawLineList)if(t.type===di.jv.SENSOR_TO_MOON)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,n.Gn)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1,void l.b.getSoundManager().play(p.p.TOGGLE_OFF)}else{const e=l.b.getSensorManager().currentSensors;1!==e.length&&l.b.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.b.getScene();l.b.getLineManager().create(di.jv.SENSOR_TO_MOON,[l.b.getCatalogManager().getSensorFromSensorName(e[0].name),t.moon.position[0],t.moon.position[1],t.moon.position[2]],"w"),(0,n.Gn)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0,l.b.getSoundManager().play(p.p.TOGGLE_ON)}}))}addSensorToSunBtnListener_(){(0,n.Gn)("sensor-sun-btn").addEventListener("click",(()=>{if(this.isSunLineVisible_){const e=l.b.getLineManager();for(const t of e.drawLineList)if(t.type===di.jv.SENSOR_TO_SUN)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,n.Gn)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1,void l.b.getSoundManager().play(p.p.TOGGLE_OFF)}else{const e=l.b.getSensorManager().currentSensors;1!==e.length&&l.b.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.b.getScene();l.b.getLineManager().create(di.jv.SENSOR_TO_SUN,[l.b.getCatalogManager().getSensorFromSensorName(e[0].name),t.sun.position[0],t.sun.position[1],t.sun.position[2]],"o"),(0,n.Gn)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0,l.b.getSoundManager().play(p.p.TOGGLE_ON)}}))}getSensorInfo(){if(!this.isHtmlAdded)return;const e=l.b.getSensorManager().currentSensors[0];(0,n.Gn)("sensor-latitude").innerHTML=e.lat>0?`${e.lat.toFixed(2)}° N`:`${Math.abs(e.lat).toFixed(2)}° S`,(0,n.Gn)("sensor-longitude").innerHTML=e.lon>0?`${e.lon.toFixed(2)}° E`:`${Math.abs(e.lon).toFixed(2)}° W`,(0,n.Gn)("sensor-minazimuth").innerHTML=`${e.minAz.toFixed(1).toString()}°`,(0,n.Gn)("sensor-maxazimuth").innerHTML=`${e.maxAz.toFixed(1).toString()}°`,(0,n.Gn)("sensor-minelevation").innerHTML=`${e.minEl.toFixed(1).toString()}°`,(0,n.Gn)("sensor-maxelevation").innerHTML=`${e.maxEl.toFixed(1).toString()}°`,(0,n.Gn)("sensor-minrange").innerHTML=`${e.minRng.toFixed(1).toString()} km`,(0,n.Gn)("sensor-maxrange").innerHTML=`${e.maxRng.toFixed(1).toString()} km`,e.type===w.ge.OPTICAL||e.type===w.ge.OBSERVER?((0,n.UT)((0,n.Gn)("sensor-band").parentElement),(0,n.UT)((0,n.Gn)("sensor-beamwidth").parentElement)):((0,n.K4)((0,n.Gn)("sensor-band").parentElement),(0,n.Gn)("sensor-band").innerHTML=e.freqBand?e.freqBand:"Unknown",e instanceof w.n5?((0,n.K4)((0,n.Gn)("sensor-beamwidth").parentElement),(0,n.Gn)("sensor-beamwidth").innerHTML=e.beamwidth?`${e.beamwidth.toFixed(1).toString()}°`:"Unknown"):(0,n.UT)((0,n.Gn)("sensor-beamwidth").parentElement))}}sa.PLUGIN_NAME="Sensor Info";var na=i(292);const oa=i.p+"../img/settings.png";var la=i(1443),ra=i(320),ca=i.n(ra),da=i(2478);class ua extends u.c{constructor(){super(ua.PLUGIN_NAME),this.bottomIconElementName="settings-menu-icon",this.bottomIconImg=oa,this.bottomIconLabel="Settings Menu",this.sideMenuElementName="settings-menu",this.sideMenuElementHtml=l.b.html`
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
            <div class="row center">
              <button id="settings-reset" class="btn btn-ui waves-effect waves-light" type="button" name="action">Reset to Defaults &#9658;</button>
            </div>
            <h5 class="center-align">General Settings</h5>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide notional satellites">
                <input id="settings-notionalSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show Notional Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide LEO satellites">
                <input id="settings-leoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show LEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide Starlink satellites">
                <input id="settings-starlinkSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show Starlink Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide HEO satellites">
                <input id="settings-heoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show HEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide MEO satellites">
                <input id="settings-meoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show MEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide GEO satellites">
                <input id="settings-geoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show GEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide Payloads">
                <input id="settings-showPayloads" type="checkbox" checked/>
                <span class="lever"></span>
                Show Payloads
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide Rocket Bodies">
                <input id="settings-showRocketBodies" type="checkbox" checked/>
                <span class="lever"></span>
                Show Rocket Bodies
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide Debris">
                <input id="settings-showDebris" type="checkbox" checked/>
                <span class="lever"></span>
                Show Debris
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Planned feature - This will show agencies on the globe.">
                <input id="settings-showAgencies" type="checkbox" disabled/>
                <span class="lever"></span>
                Show Agencies
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable this to hide orbit lines">
                <input id="settings-drawOrbits" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Orbits
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Enable this to show where a satellite was instead of where it is going">
                <input id="settings-drawTrailingOrbits" type="checkbox"/>
                <span class="lever"></span>
                Draw Trailing Orbits
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Orbits will be drawn using ECF vs ECI (Mainly for GEO Orbits)">
                <input id="settings-drawEcf" type="checkbox" />
                <span class="lever"></span>
                Draw Orbits in ECF
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Draw lines from sensor to satellites when in FOV">
                <input id="settings-isDrawInCoverageLines" type="checkbox" checked/>
                <span class="lever"></span>
                Draw FOV Lines
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Draw the Sun">
                <input id="settings-drawSun" type="checkbox" checked/>
                <span class="lever"></span>
                Draw the Sun
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Hides Earth Textures">
                <input id="settings-drawBlackEarth" type="checkbox"/>
                <span class="lever"></span>
                Draw Black Earth
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide the Atmosphere">
                <input id="settings-drawAtmosphere" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Atmosphere
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide the Aurora">
                <input id="settings-drawAurora" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Aurora
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Change the Skybox to Gray">
                <input id="settings-graySkybox" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Gray Background
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Draw Milky Way in Background">
                <input id="settings-drawMilkyWay" type="checkbox" checked/>
                <span class="lever"></span>
                Draw the Milky Way
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Display ECI Coordinates on Hover">
                <input id="settings-eciOnHover" type="checkbox"/>
                <span class="lever"></span>
                Display ECI on Hover
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Non-selectable satellites will be hidden instead of grayed out.">
                <input id="settings-hos" type="checkbox" />
                <span class="lever"></span>
                Hide Other Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Show confidence levels for satellite's element sets.">
                <input id="settings-confidence-levels" type="checkbox" />
                <span class="lever"></span>
                Show Confidence Levels
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Every 3 seconds a new satellite will be selected from FOV">
                <input id="settings-demo-mode" type="checkbox" />
                <span class="lever"></span>
                Enable Demo Mode
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Small text labels will appear next to all satellites in FOV.">
                <input id="settings-sat-label-mode" type="checkbox" checked />
                <span class="lever"></span>
                Enable Satellite Label Mode
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Time will freeze as you rotate the camera.">
                <input id="settings-freeze-drag" type="checkbox" />
                <span class="lever"></span>
                Enable Freeze Time on Click
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Time Machine stop showing toast messages.">
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
              <input value="150" id="maxSearchSats" type="text" data-position="top" data-delay="50" data-tooltip="Maximum satellites to display in search" />
              <label for="maxSearchSats" class="active">Maximum Satellites in Search</label>
            </div>
            <div class="input-field col s12">
              <input value="30" id="satFieldOfView" type="text" data-position="top" data-delay="50" data-tooltip="What is the satellite's field of view in degrees" />
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=l.b.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e,t,i,a,s,o,l;(0,n.Gn)("settings-form").addEventListener("change",ua.onFormChange),(0,n.Gn)("settings-form").addEventListener("submit",ua.onSubmit),(0,n.Gn)("settings-reset").addEventListener("click",ua.resetToDefaults);const r=[(0,na.S)([1,0,0,1]),(0,na.S)([1,.75,0,1]),(0,na.S)([.85,.5,0,1]),(0,na.S)([1,1,0,1]),(0,na.S)([0,1,0,1]),(0,na.S)([.2,1,0,.5]),(0,na.S)([.2,1,1,1]),(0,na.S)([0,0,1,1]),(0,na.S)([.2,.4,1,1]),(0,na.S)([.64,0,.64,1]),(0,na.S)([1,0,.6,1]),(0,na.S)([.5,.5,.5,1]),(0,na.S)([1,1,1,1])],c=this;ca()("#settings-color-payload").colorPick({initialColor:(0,na.S)((null===(e=settingsManager.colors)||void 0===e?void 0:e.payload)||[.2,1,0,.5]),palette:r,onColorSelected:function(){c.onColorSelected(this,"payload")}}),ca()("#settings-color-rocketBody").colorPick({initialColor:(0,na.S)((null===(t=settingsManager.colors)||void 0===t?void 0:t.rocketBody)||[.2,.4,1,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"rocketBody")}}),ca()("#settings-color-debris").colorPick({initialColor:(0,na.S)((null===(i=settingsManager.colors)||void 0===i?void 0:i.debris)||[.5,.5,.5,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"debris")}}),ca()("#settings-color-inview").colorPick({initialColor:(0,na.S)((null===(a=settingsManager.colors)||void 0===a?void 0:a.inFOV)||[.85,.5,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"inview")}}),ca()("#settings-color-missile").colorPick({initialColor:(0,na.S)((null===(s=settingsManager.colors)||void 0===s?void 0:s.missile)||[1,1,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"missile")}}),ca()("#settings-color-missileInview").colorPick({initialColor:(0,na.S)((null===(o=settingsManager.colors)||void 0===o?void 0:o.missileInview)||[1,0,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"missileInview")}}),ca()("#settings-color-special").colorPick({initialColor:(0,na.S)((null===(l=settingsManager.colors)||void 0===l?void 0:l.pink)||[1,0,.6,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"pink")}}),this.isNotColorPickerInitialSetup=!0}})}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{ua.syncOnLoad()}})}onColorSelected(e,t){if(null==e)throw new Error("context is undefined");if(null==t)throw new Error("colorStr is undefined");if(e.element.css("cssText",`background-color: ${e.color} !important; color: ${e.color};`),this.isNotColorPickerInitialSetup){settingsManager.colors[t]=(e=>{let[t,i,a,s]=e.match(/(?<!\w)-?[\d.]+/gu);if(t=parseFloat(t)/255,i=parseFloat(i)/255,a=parseFloat(a)/255,s=parseFloat(s),t<0||t>1||i<0||i>1||a<0||a>1||s<0||s>1||isNaN(t)||isNaN(i)||isNaN(a)||isNaN(s))throw new Error("Invalid rgba input");return[t,i,a,s]})(e.color),dt.j.legendColorsChange();const i=l.b.getColorSchemeManager();i.setColorScheme(i.currentColorScheme,!0),xi.p.getInstance().saveItem(xi.Q.SETTINGS_MANAGER_COLORS,JSON.stringify(settingsManager.colors))}}static onFormChange(e,t,i){var a,s,o;if(null==e)throw new Error("e is undefined");switch(null===(a=e.target)||void 0===a?void 0:a.id){case"settings-notionalSats":case"settings-leoSats":case"settings-starlinkSats":case"settings-heoSats":case"settings-meoSats":case"settings-geoSats":case"settings-showPayloads":case"settings-showRocketBodies":case"settings-showDebris":case"settings-showAgencies":case"settings-drawOrbits":case"settings-drawTrailingOrbits":case"settings-drawEcf":case"settings-isDrawInCoverageLines":case"settings-drawSun":case"settings-drawBlackEarth":case"settings-drawAtmosphere":case"settings-drawAurora":case"settings-drawMilkyWay":case"settings-graySkybox":case"settings-eciOnHover":case"settings-hos":case"settings-confidence-levels":case"settings-demo-mode":case"settings-sat-label-mode":case"settings-freeze-drag":case"settings-time-machine-toasts":case"settings-snp":(0,n.Gn)(e.target.id).checked?null===(s=l.b.getSoundManager())||void 0===s||s.play(p.p.TOGGLE_ON):null===(o=l.b.getSoundManager())||void 0===o||o.play(p.p.TOGGLE_OFF)}null!=t||(t=(0,n.Gn)("settings-demo-mode").checked),null!=i||(i=(0,n.Gn)("settings-sat-label-mode").checked),i&&"settings-demo-mode"===e.target.id&&((0,n.Gn)("settings-sat-label-mode").checked=!1,(0,n.Gn)("settings-demo-mode").classList.remove("lever:after")),t&&"settings-sat-label-mode"===e.target.id&&((0,n.Gn)("settings-demo-mode").checked=!1,(0,n.Gn)("settings-sat-label-mode").classList.remove("lever:after"))}static syncOnLoad(){(0,n.Gn)("settings-notionalSats").checked=settingsManager.isShowNotionalSats,(0,n.Gn)("settings-leoSats").checked=settingsManager.isShowLeoSats,(0,n.Gn)("settings-starlinkSats").checked=settingsManager.isShowStarlinkSats,(0,n.Gn)("settings-heoSats").checked=settingsManager.isShowHeoSats,(0,n.Gn)("settings-meoSats").checked=settingsManager.isShowMeoSats,(0,n.Gn)("settings-geoSats").checked=settingsManager.isShowGeoSats,(0,n.Gn)("settings-showPayloads").checked=settingsManager.isShowPayloads,(0,n.Gn)("settings-showRocketBodies").checked=settingsManager.isShowRocketBodies,(0,n.Gn)("settings-showDebris").checked=settingsManager.isShowDebris,(0,n.Gn)("settings-showAgencies").checked=settingsManager.isShowAgencies,(0,n.Gn)("settings-drawOrbits").checked=settingsManager.isDrawOrbits,(0,n.Gn)("settings-drawTrailingOrbits").checked=settingsManager.isDrawTrailingOrbits,(0,n.Gn)("settings-drawEcf").checked=settingsManager.isOrbitCruncherInEcf,(0,n.Gn)("settings-isDrawInCoverageLines").checked=settingsManager.isDrawInCoverageLines,(0,n.Gn)("settings-drawSun").checked=settingsManager.isDrawSun,(0,n.Gn)("settings-drawBlackEarth").checked=settingsManager.isBlackEarth,(0,n.Gn)("settings-drawAtmosphere").checked=settingsManager.isDrawAtmosphere,(0,n.Gn)("settings-drawAurora").checked=settingsManager.isDrawAurora,(0,n.Gn)("settings-drawMilkyWay").checked=settingsManager.isDrawMilkyWay,(0,n.Gn)("settings-graySkybox").checked=settingsManager.isGraySkybox,(0,n.Gn)("settings-eciOnHover").checked=settingsManager.isEciOnHover,(0,n.Gn)("settings-hos").checked=0===settingsManager.colors.transparent[3],(0,n.Gn)("settings-confidence-levels").checked=settingsManager.isShowConfidenceLevels,(0,n.Gn)("settings-demo-mode").checked=settingsManager.isDemoModeOn,(0,n.Gn)("settings-sat-label-mode").checked=settingsManager.isSatLabelModeOn,(0,n.Gn)("settings-freeze-drag").checked=settingsManager.isFreezePropRateOnDrag,(0,n.Gn)("settings-time-machine-toasts").checked=settingsManager.isDisableTimeMachineToasts,(0,n.Gn)("maxSearchSats").value=settingsManager.searchLimit.toString()}static preserveSettings(){xi.p.getInstance().saveItem(xi.Q.SETTINGS_LEO_SATS,settingsManager.isShowLeoSats.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_STARLINK_SATS,settingsManager.isShowStarlinkSats.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_HEO_SATS,settingsManager.isShowHeoSats.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_MEO_SATS,settingsManager.isShowMeoSats.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_GEO_SATS,settingsManager.isShowGeoSats.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_PAYLOADS,settingsManager.isShowPayloads.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_ROCKET_BODIES,settingsManager.isShowRocketBodies.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DEBRIS,settingsManager.isShowDebris.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_AGENCIES,settingsManager.isShowAgencies.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DRAW_ORBITS,settingsManager.isDrawOrbits.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DRAW_TRAILING_ORBITS,settingsManager.isDrawTrailingOrbits.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DRAW_ECF,settingsManager.isOrbitCruncherInEcf.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DRAW_IN_COVERAGE_LINES,settingsManager.isDrawInCoverageLines.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DRAW_SUN,settingsManager.isDrawSun.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DRAW_BLACK_EARTH,settingsManager.isBlackEarth.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DRAW_ATMOSPHERE,settingsManager.isDrawAtmosphere.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DRAW_AURORA,settingsManager.isDrawAurora.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DRAW_MILKY_WAY,settingsManager.isDrawMilkyWay.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_GRAY_SKYBOX,settingsManager.isGraySkybox.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_ECI_ON_HOVER,settingsManager.isEciOnHover.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_HOS,0===settingsManager.colors.transparent[3]?"true":"false"),xi.p.getInstance().saveItem(xi.Q.SETTINGS_CONFIDENCE_LEVELS,settingsManager.isShowConfidenceLevels.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DEMO_MODE,settingsManager.isDemoModeOn.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_SAT_LABEL_MODE,settingsManager.isSatLabelModeOn.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_FREEZE_PROP_RATE_ON_DRAG,settingsManager.isFreezePropRateOnDrag.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_DISABLE_TIME_MACHINE_TOASTS,settingsManager.isDisableTimeMachineToasts.toString()),xi.p.getInstance().saveItem(xi.Q.SETTINGS_SEARCH_LIMIT,settingsManager.searchLimit.toString())}static resetToDefaults(){settingsManager.isShowLeoSats=!0,settingsManager.isShowHeoSats=!0,settingsManager.isShowMeoSats=!0,settingsManager.isShowGeoSats=!0,settingsManager.isShowPayloads=!0,settingsManager.isShowRocketBodies=!0,settingsManager.isShowDebris=!0,settingsManager.isShowAgencies=!1,settingsManager.isDrawOrbits=!0,settingsManager.isDrawTrailingOrbits=!1,settingsManager.isOrbitCruncherInEcf=!1,settingsManager.isDrawInCoverageLines=!0,settingsManager.isDrawSun=!0,settingsManager.isBlackEarth=!1,settingsManager.isDrawAtmosphere=!0,settingsManager.isDrawAurora=!0,settingsManager.isDrawMilkyWay=!0,settingsManager.isGraySkybox=!1,settingsManager.isEciOnHover=!1,settingsManager.isDemoModeOn=!1,settingsManager.isSatLabelModeOn=!0,settingsManager.isFreezePropRateOnDrag=!1,settingsManager.isDisableTimeMachineToasts=!1,settingsManager.searchLimit=150,ua.preserveSettings(),ua.syncOnLoad()}static onSubmit(e){var t,i;if(null==e)throw new Error("e is undefined");e.preventDefault();const a=l.b.getUiManager(),s=l.b.getColorSchemeManager();null===(t=l.b.getSoundManager())||void 0===t||t.play(p.p.BUTTON_CLICK),settingsManager.isShowNotionalSats=(0,n.Gn)("settings-notionalSats").checked,settingsManager.isShowLeoSats=(0,n.Gn)("settings-leoSats").checked,settingsManager.isShowStarlinkSats=(0,n.Gn)("settings-starlinkSats").checked,settingsManager.isShowHeoSats=(0,n.Gn)("settings-heoSats").checked,settingsManager.isShowMeoSats=(0,n.Gn)("settings-meoSats").checked,settingsManager.isShowGeoSats=(0,n.Gn)("settings-geoSats").checked,settingsManager.isShowPayloads=(0,n.Gn)("settings-showPayloads").checked,settingsManager.isShowRocketBodies=(0,n.Gn)("settings-showRocketBodies").checked,settingsManager.isShowDebris=(0,n.Gn)("settings-showDebris").checked,settingsManager.isShowAgencies=(0,n.Gn)("settings-showAgencies").checked,settingsManager.isOrbitCruncherInEcf=(0,n.Gn)("settings-drawEcf").checked,settingsManager.isDrawInCoverageLines=(0,n.Gn)("settings-isDrawInCoverageLines").checked,settingsManager.isDrawSun=(0,n.Gn)("settings-drawSun").checked;let o=settingsManager.isBlackEarth!==(0,n.Gn)("settings-drawBlackEarth").checked,r=settingsManager.isDrawAtmosphere!==(0,n.Gn)("settings-drawAtmosphere").checked,c=settingsManager.isDrawAurora!==(0,n.Gn)("settings-drawAurora").checked;settingsManager.isBlackEarth=(0,n.Gn)("settings-drawBlackEarth").checked,settingsManager.isDrawAtmosphere=(0,n.Gn)("settings-drawAtmosphere").checked,settingsManager.isDrawAurora=(0,n.Gn)("settings-drawAurora").checked,(o||r||c)&&l.b.getScene().earth.reloadEarthHiResTextures();const d=settingsManager.isDrawOrbits!==(0,n.Gn)("settings-drawOrbits").checked;settingsManager.isDrawOrbits=(0,n.Gn)("settings-drawOrbits").checked,d&&l.b.getOrbitManager().drawOrbitsSettingChanged(),settingsManager.isDrawTrailingOrbits=(0,n.Gn)("settings-drawTrailingOrbits").checked,l.b.getOrbitManager().orbitWorker&&(settingsManager.isDrawTrailingOrbits?l.b.getOrbitManager().orbitWorker.postMessage({typ:la.Mo.CHANGE_ORBIT_TYPE,orbitType:la.x4.TRAIL}):l.b.getOrbitManager().orbitWorker.postMessage({typ:la.Mo.CHANGE_ORBIT_TYPE,orbitType:la.x4.ORBIT}));let u=settingsManager.isDrawMilkyWay!==(0,n.Gn)("settings-drawMilkyWay").checked,g=settingsManager.isGraySkybox!==(0,n.Gn)("settings-graySkybox").checked;settingsManager.isDrawMilkyWay=(0,n.Gn)("settings-drawMilkyWay").checked,settingsManager.isGraySkybox=(0,n.Gn)("settings-graySkybox").checked,(u||g)&&l.b.getScene().skybox.init(settingsManager,l.b.getRenderer().gl),settingsManager.isEciOnHover=(0,n.Gn)("settings-eciOnHover").checked;const h=(0,n.Gn)("settings-hos").checked;settingsManager.colors.transparent=h?[1,1,1,0]:[1,1,1,.1],settingsManager.isShowConfidenceLevels=(0,n.Gn)("settings-confidence-levels").checked,settingsManager.isDemoModeOn=(0,n.Gn)("settings-demo-mode").checked,settingsManager.isSatLabelModeOn=(0,n.Gn)("settings-sat-label-mode").checked,settingsManager.isShowNextPass=(0,n.Gn)("settings-snp").checked,settingsManager.isFreezePropRateOnDrag=(0,n.Gn)("settings-freeze-drag").checked,settingsManager.isDisableTimeMachineToasts=(0,n.Gn)("settings-time-machine-toasts").checked,l.b.getPlugin(da.i)&&(l.b.getPlugin(da.i).isMenuButtonActive=!1),l.b.getGroupsManager().clearSelect(),s.setColorScheme(s.default,!0),null===(i=(0,n.Gn)("menu-time-machine"))||void 0===i||i.classList.remove("bmenu-item-selected"),s.reloadColors();const m=parseInt((0,n.Gn)("satFieldOfView").value);isNaN(m)?((0,n.Gn)("satFieldOfView").value="30",a.toast("Invalid field of view value!","critical")):l.b.getCatalogManager().satCruncher.postMessage({typ:yt.Bi.IS_UPDATE_SATELLITE_OVERFLY,selectedSatFOV:m});const b=parseInt((0,n.Gn)("maxSearchSats").value);isNaN(b)?((0,n.Gn)("maxSearchSats").value=settingsManager.searchLimit.toString(),a.toast("Invalid max search sats value!","critical")):(settingsManager.searchLimit=b,a.searchManager.doSearch(l.b.getUiManager().searchManager.getCurrentSearch())),s.setColorScheme(s.currentColorScheme,!0),ua.preserveSettings()}}ua.PLUGIN_NAME="Settings Menu";const ga=new ua,pa=i.p+"../img/search.png";class ha extends u.c{constructor(){super(ha.PLUGIN_NAME),this.dependencies=[li.s.PLUGIN_NAME,g.P.PLUGIN_NAME],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=pa,this.isRequireSensorSelected=!0,this.isAddStfLinksOnce=!1,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=l.b.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
  <br><br>
  This is unlikely to be very helpful unless you own/operate a sensor with a search box functionality.`,this.sideMenuElementName="stf-menu",this.sideMenuElementHtml=l.b.html`
  <div id="stf-menu" class="side-menu-parent start-hidden text-select">
    <div id="stf-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Short Term Fence</h5>
        <form id="stfForm">
          <div id="stf-az-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Search Center Azimuth Point in degrees (ex: 50)">
            <input id="stf-az" type="text" value="50" />
            <label for="stf-az" class="active">Center Azimuth</label>
          </div>
          <div id="stf-azExt-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Total Extent Outside of Center Azimuth in degrees (ex: 4)">
            <input id="stf-azExt" type="text" value="4" />
            <label for="stf-azExt" class="active">Azimuth Extent (deg)</label>
          </div>
          <div id="stf-azExtKm-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Total Extent Outside of Center Azimuth in kilometers (ex: 120)">
            <input id="stf-azExtKm" type="text" value="4" disabled/>
            <label for="stf-azExtKm" class="active">Azimuth Extent (km)</label>
          </div>
          <div id="stf-el-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Search Center Elevation Point in degrees (ex: 20)">
            <input id="stf-el" type="text" value="20" />
            <label for="stf-el" class="active">Center Elevation</label>
          </div>
          <div id="stf-elExt-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Total Extent Outside of Center Elevation in degrees (ex: 4)">
            <input id="stf-elExt" type="text" value="4" />
            <label for="stf-elExt" class="active">Elevation Extent (deg)</label>
          </div>
          <div id="stf-elExtKm-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Total Extent Outside of Center Elevation in kilometers (ex: 120)">
            <input id="stf-elExtKm" type="text" value="4" disabled/>
            <label for="stf-elExtKm" class="active">Elevation Extent (km)</label>
          </div>
          <div id="stf-rng-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Search Center Range Point in kilometers (ex: 1000)">
            <input id="stf-rng" type="text" value="1000" />
            <label for="stf-rng" class="active">Center Range</label>
          </div>
          <div id="stf-rngExt-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Total Extent Outside of Center Range in kilometers (ex: 100)">
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
  </div>`,this.selectSatManager_=l.b.getPlugin(g.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{null!=e&&l.b.getPlugin(li.s)&&!this.isAddStfLinksOnce&&((0,n.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
            <div id="stf-on-object-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,n.Gn)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0)}})}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("stfForm").addEventListener("submit",(e=>{e.preventDefault(),l.b.getSoundManager().play(p.p.MENU_BUTTON),this.onSubmit.bind(this)()})),(0,n.Gn)("stf-remove-last").addEventListener("click",(()=>{l.b.getSoundManager().play(p.p.MENU_BUTTON),l.b.getSensorManager().removeStf()})),(0,n.Gn)("stf-clear-all").addEventListener("click",(()=>{l.b.getSoundManager().play(p.p.MENU_BUTTON),l.b.getSensorManager().clearStf()})),(0,n.Gn)("stf-azExt").addEventListener("blur",(()=>{const e=parseFloat((0,n.Gn)("stf-az").value),t=parseFloat((0,n.Gn)("stf-el").value),i=parseFloat((0,n.Gn)("stf-rng").value);let a=parseFloat((0,n.Gn)("stf-azExt").value);a>80&&(a=80,(0,n.Gn)("stf-azExt").value=a.toFixed(1));const s=w.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),o=l.b.getSensorManager().currentSensors[0].toGeodetic().toITRF(s).toJ2000(),r=new w.rv(s,i,(e-a/2)*w.qW,t*w.qW).position(o),c=new w.rv(w.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),i,(e+a/2)*w.qW,t*w.qW).position(o),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,n.Gn)("stf-azExtKm").value=d.toFixed(1)})),(0,n.Gn)("stf-elExt").addEventListener("blur",(()=>{const e=parseFloat((0,n.Gn)("stf-az").value),t=parseFloat((0,n.Gn)("stf-el").value),i=parseFloat((0,n.Gn)("stf-rng").value);let a=parseFloat((0,n.Gn)("stf-elExt").value);a>80&&(a=80,(0,n.Gn)("stf-elExt").value=a.toFixed(1));const s=w.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),o=l.b.getSensorManager().currentSensors[0].toGeodetic().toITRF(s).toJ2000(),r=new w.rv(s,i,e*w.qW,(t-a/2)*w.qW).position(o),c=new w.rv(w.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),i,e*w.qW,(t+a/2)*w.qW).position(o),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,n.Gn)("stf-elExtKm").value=d.toFixed(1)}))}}),l.b.register({event:o.RL.resetSensor,cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),l.b.register({event:o.RL.setSensor,cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,C.kW)((0,n.Gn)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonActive=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),l.b.getUiManager().hideSideMenus()}onSubmit(){var e;if(!this.verifySensorSelected())return;const t=parseFloat((0,n.Gn)("stf-az").value),i=parseFloat((0,n.Gn)("stf-azExt").value),a=parseFloat((0,n.Gn)("stf-el").value),s=parseFloat((0,n.Gn)("stf-elExt").value),o=parseFloat((0,n.Gn)("stf-rng").value),r=parseFloat((0,n.Gn)("stf-rngExt").value),c=t-i/2<0?t-i/2+360:t-i/2,d=t+i/2>360?t+i/2-360:t+i/2,u=a-s/2,g=a+s/2,p=o-r/2,h=o+r/2,m=l.b.getSensorManager().currentSensors[0],b=new w.hs({lat:m.lat,lon:m.lon,alt:m.alt,minAz:c,maxAz:d,minEl:u,maxEl:g,minRng:p,maxRng:h,type:w.ge.SHORT_TERM_FENCE,name:"STF",uiName:"STF",zoom:h>6e3?w.$R.GEO:w.$R.LEO,volume:!0});m.isRaeInFov({az:c,el:u,rng:p})&&m.isRaeInFov({az:d,el:g,rng:h})?(l.b.getSensorManager().addStf(b),null===(e=l.b.getPlugin(Ei.n))||void 0===e||e.enableFovView()):S.x.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=l.b.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=l.b.getTimeManager().simulationTimeObj,i=(0,w.Zn)(t,this.selectSatManager_.primarySatObj.position,e.currentSensors[0]);(0,n.Gn)("stf-az").value=i.az.toFixed(1),(0,n.Gn)("stf-el").value=i.el.toFixed(1),(0,n.Gn)("stf-rng").value=i.rng.toFixed(1),l.b.getUiManager().hideSideMenus(),(0,C.$k)((0,n.Gn)("stf-menu"),1e3),this.isMenuButtonActive=!0,this.setBottomIconToSelected()}}ha.PLUGIN_NAME="Short Term Fences";var ma=i(9383);class ba extends u.c{constructor(){super("Social Media"),this.dependencies=["Top Menu"]}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:ba.uiManagerFinal_})}static uiManagerFinal_(){var e;const t=document.createElement("li");t.innerHTML=l.b.html`
          <a id="github-share1" class="top-menu-btns" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            width="22"
            height="22"
            style="margin-top: 1px;"
            src="${ma}"
            />
          </a>
          `,null===(e=(0,n.Gn)("nav-mobile2",!0))||void 0===e||e.insertBefore(t,(0,n.Gn)("nav-mobile2").firstChild)}}var va=i(5957);class Sa extends u.c{constructor(){super(Sa.PLUGIN_NAME),this.isRotateL=!0,this.isRotateR=!1,this.isRotateU=!1,this.isRotateD=!1,this.bottomIconElementName="video-director-icon",this.bottomIconImg=oa,this.bottomIconLabel="Video Director",this.sideMenuElementName="video-director-menu",this.sideMenuElementHtml=l.b.html`
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
              <label data-position="top" data-delay="50" data-tooltip="Rotate Camera to the Left">
                <input id="video-director-rotateL" type="checkbox" checked/>
                <span class="lever"></span>
                Rotate Camera Left
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Rotate Camera to the Right">
                <input id="video-director-rotateR" type="checkbox"/>
                <span class="lever"></span>
                Rotate Camera Right
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Rotate Camera Up">
                <input id="video-director-rotateU" type="checkbox"/>
                <span class="lever"></span>
                Rotate Camera Up
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Rotate Camera Down">
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
              <label data-position="top" data-delay="50" data-tooltip="Pan Camera Left">
                <input id="video-director-panL" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Left
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Pan Camera Right">
                <input id="video-director-panR" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Right
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Pan Camera Up">
                <input id="video-director-panU" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Up
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Pan Camera Down">
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
              <label data-position="top" data-delay="50" data-tooltip="Zoom Camera In">
                <input id="video-director-zoomIn" type="checkbox"/>
                <span class="lever"></span>
                Zoom Camera In
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Zoom Camera Out">
                <input id="video-director-zoomOut" type="checkbox"/>
                <span class="lever"></span>
                Zoom Camera Out
              </label>
          </div>
          <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable Selected Satellite Dot">
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=l.b.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("video-director-form").addEventListener("change",Sa.onFormChange),(0,n.Gn)("video-director-form").addEventListener("submit",Sa.onSubmit),(0,n.Gn)("video-director-rotate").addEventListener("click",(()=>{var e;null===(e=l.b.getSoundManager())||void 0===e||e.play(p.p.BUTTON_CLICK),l.b.getMainCamera().autoRotate(!0)}))}})}static onFormChange(e){var t,i,a;if(null==e)throw new Error("e is undefined");switch(null===(t=e.target)||void 0===t?void 0:t.id){case"video-director-rotateL":case"video-director-rotateR":case"video-director-rotateU":case"video-director-rotateD":case"video-director-panL":case"video-director-panR":case"video-director-panU":case"video-director-panD":case"video-director-zoomIn":case"video-director-zoomOut":(0,n.Gn)(e.target.id).checked?null===(i=l.b.getSoundManager())||void 0===i||i.play(p.p.TOGGLE_ON):null===(a=l.b.getSoundManager())||void 0===a||a.play(p.p.TOGGLE_OFF)}(0,n.Gn)("video-director-selectedColor").checked&&0!==settingsManager.selectedColor[3]?(settingsManager.selectedColorFallback=settingsManager.selectedColor,settingsManager.selectedColor=[0,0,0,0]):settingsManager.selectedColor=settingsManager.selectedColorFallback,settingsManager.autoRotateSpeed=parseFloat((0,n.Gn)("video-director-rotateSpeed").value),settingsManager.autoPanSpeed=parseFloat((0,n.Gn)("video-director-panSpeed").value),settingsManager.autoZoomSpeed=parseFloat((0,n.Gn)("video-director-zoomSpeed").value);const s=(0,n.Gn)("video-director-rotateL").checked,o=(0,n.Gn)("video-director-rotateR").checked,r=(0,n.Gn)("video-director-rotateU").checked,c=(0,n.Gn)("video-director-rotateD").checked,d=(0,n.Gn)("video-director-panL").checked,u=(0,n.Gn)("video-director-panR").checked,g=(0,n.Gn)("video-director-panU").checked,h=(0,n.Gn)("video-director-panD").checked,m=(0,n.Gn)("video-director-zoomIn").checked,b=(0,n.Gn)("video-director-zoomOut").checked;s&&!settingsManager.isAutoRotateL&&((0,n.Gn)("video-director-rotateR").checked=!1),o&&!settingsManager.isAutoRotateR&&((0,n.Gn)("video-director-rotateL").checked=!1),r&&!settingsManager.isAutoRotateU&&((0,n.Gn)("video-director-rotateD").checked=!1),c&&!settingsManager.isAutoRotateD&&((0,n.Gn)("video-director-rotateU").checked=!1),d&&!settingsManager.isAutoPanL&&((0,n.Gn)("video-director-panR").checked=!1),u&&!settingsManager.isAutoPanR&&((0,n.Gn)("video-director-panL").checked=!1),g&&!settingsManager.isAutoPanU&&((0,n.Gn)("video-director-panD").checked=!1),h&&!settingsManager.isAutoPanD&&((0,n.Gn)("video-director-panU").checked=!1),m&&!settingsManager.isAutoZoomIn&&((0,n.Gn)("video-director-zoomOut").checked=!1),b&&!settingsManager.isAutoZoomOut&&((0,n.Gn)("video-director-zoomIn").checked=!1)}static onSubmit(e){var t;if(null==e)throw new Error("e is undefined");e.preventDefault(),null===(t=l.b.getSoundManager())||void 0===t||t.play(p.p.BUTTON_CLICK),settingsManager.isAutoRotateR=(0,n.Gn)("video-director-rotateR").checked,settingsManager.isAutoRotateL=(0,n.Gn)("video-director-rotateL").checked,settingsManager.isAutoRotateU=(0,n.Gn)("video-director-rotateU").checked,settingsManager.isAutoRotateD=(0,n.Gn)("video-director-rotateD").checked,settingsManager.isAutoPanR=(0,n.Gn)("video-director-panR").checked,settingsManager.isAutoPanL=(0,n.Gn)("video-director-panL").checked,settingsManager.isAutoPanU=(0,n.Gn)("video-director-panU").checked,settingsManager.isAutoPanD=(0,n.Gn)("video-director-panD").checked,settingsManager.isAutoZoomIn=(0,n.Gn)("video-director-zoomIn").checked,settingsManager.isAutoZoomOut=(0,n.Gn)("video-director-zoomOut").checked}}Sa.PLUGIN_NAME="Video Director";const fa=new Sa;var Ma=i(195),wa=i(2257);const ya=(e,t)=>{return i=void 0,a=void 0,n=function*(){null!=t||(t={});try{Ca(t),t.classificationBar&&(new kt).init(),t.sensor&&((new Vi).init(),(new sa).init(),(new Zi).init(),(new ia).init(),(new Qi).init()),t.watchlist&&((new Ma.y).init(),(new wa._).init()),t.nextLaunch&&(new si).init(),t.findSat&&(new y).init(),t.shortTermFences&&(new ha).init(),t.orbitReferences&&(new ri).init(),t.collisions&&(new At).init(),t.breakup&&(new Ct).init(),t.debrisScreening&&(new Ot).init(),t.editSat&&(new Kt).init(),t.newLaunch&&(new ti).init(),t.missile&&$(),t.stereoMap&&(new va.k).init(),t.sensorFov&&(new Ei.n).init(),t.sensorSurv&&(new Ki.I).init(),t.satelliteView&&(new W).init(),t.satelliteFov&&(new hi.F).init(),t.planetarium&&(new pt).init(),t.astronomy&&(new ht).init(),t.nightToggle&&(new oi).init(),t.dops&&jt.init(),t.constellations&&pi.init(),t.countries&&m.init(),t.colorsMenu&&It.init(),t.screenshot&&ki.init(),t.launchCalendar&&Qt.init(),t.timeMachine&&da.M.init(),t.photoManager&&Si.init(),t.screenRecorder&&yi.init(),t.analysis&&ct.init(),t.settingsMenu&&ga.init(),t.soundManager&&Ze.init(),t.gamepad&&Yt.init(),t.videoDirector&&fa.init(),e.register({event:o.RL.uiManagerFinal,cbName:"core",cb:()=>{La(t)}})}catch(e){S.x.info("Error loading core plugins:"+e.message)}},new((s=void 0)||(s=Promise))((function(e,t){function o(e){try{r(n.next(e))}catch(e){t(e)}}function l(e){try{r(n.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(o,l)}r((n=n.apply(i,a||[])).next())}));var i,a,s,n},Ca=e=>{e.debug&&(new Dt.s).init(),(new g.P).init(),e.topMenu&&(new et.F).init(),e.satInfoboxCore&&(new li.s).init(),e.datetime&&(new _t.s).init(),e.social&&(new ba).init()},La=e=>{const t=(0,n.Gn)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",e+"px")}else document.documentElement.style.setProperty("--bottom-menu-height","0px");if(e.topMenu){let e=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(e)&&(e=0),settingsManager.isMobileModeEnabled?document.documentElement.style.setProperty("--top-menu-height",e+17+"px"):document.documentElement.style.setProperty("--top-menu-height",e+22+"px")}(0,n.Gn)("bottom-icons")&&""==(0,n.Gn)("bottom-icons").innerText?((0,n.Gn)("nav-footer").style.visibility="hidden",(0,n.UT)("nav-footer")):(0,n.K4)("nav-footer");const i=(0,n.Gn)("bottom-icons-container");if(i){const e=i.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",e+"px")}e.aboutManager&&((0,n.Gn)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"keeptrack.space"!==window.location.hostname&&"www.keeptrack.space"!==window.location.hostname||ka(),(0,n.Gn)("bottom-icons-container").addEventListener("mousewheel",(e=>{e.preventDefault(),((e,t)=>{const i=e.scrollTop+.15*t;e.scrollTop=i})(e.currentTarget,e.deltaY)}),{passive:!1})},ka=()=>{const e=document.createElement("script");e.type="text/javascript",e.setAttribute("async","true"),e.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7"),document.documentElement.firstChild.appendChild(e),window.dataLayer=window.dataLayer||[];const t=function(e,t){window.dataLayer.push(arguments)};t("js",new Date),t("config","G-ENHWK6L0X7")}}}]);