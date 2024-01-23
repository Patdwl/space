"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[426],{3862:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(3835),s=i.n(a),n=i(8645),o=i.n(n)()(s());o.push([e.id,"#reset-sensor-button {\n  margin: 10px 0px;\n}\n\n#reset-sensor-text {\n  text-align: center;\n}\n\n#list-of-sensors li:first-child {\n  display: none;\n}\n\n#sensor-list-content ul li {\n  padding: 2px !important;\n  overflow: hidden !important;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n/* First span goes left */\n#sensor-list-content ul li span:first-child {\n  float: left;\n  text-align: left;\n}\n\n/* Second span is centered */\n#sensor-list-content ul li span:nth-child(2) {\n  text-align: center;\n}\n\n/* Third span goes right */\n#sensor-list-content ul li span:last-child {\n  float: right;\n  text-align: right;\n}\n",""]);const l=o},1812:(e,t,i)=>{i.r(t),i.d(t,{CanvasRecorder:()=>zi,catalogLoader:()=>tt,loadPlugins:()=>Ha,missile:()=>a,startGoogleAnalytics:()=>Ka,uiManagerFinal:()=>Va});var a={};i.r(a),i.d(a,{bottomMenuClick:()=>_,hideSideMenus:()=>G,init:()=>z,missileChange:()=>P,missileSubmit:()=>D,msAttackerChange:()=>H,msErrorClick:()=>R,msTargetChange:()=>O,onHelpMenuClick:()=>$,searchForRvs:()=>U,uiManagerFinal:()=>B,uiManagerInit:()=>F,updateLoop:()=>N});var s=i(8386),n=i(165),o=i(2833),l=i(3938),r=i(1520),c=i(8104);const d=i.p+"../img/flag.png";var u=i(8475),p=i(9085),h=i(5514);class g extends u.c{constructor(){super(g.PLUGIN_NAME),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=d,this.bottomIconLabel="Countries",this.sideMenuElementHtml=l.b.html`
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
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=l.b.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("country-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){var e;null===(e=l.b.getSoundManager())||void 0===e||e.play(h.p.CLICK),g.countryMenuClick_(this.getAttribute("data-group"))}))})),(0,s.E)((0,n.Gn)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=l.b.getGroupsManager(),i=c.n.getCountryCode(e);if(""===i)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(r.Y.COUNTRY,i,e),g.groupSelected_(e)}static groupSelected_(e){var t;const i=l.b.getGroupsManager(),a=l.b.getCatalogManager(),s=l.b.getUiManager(),o=(0,n.Gn)("search");void 0!==e&&void 0!==i.groupList[e]&&(i.selectGroup(i.groupList[e]),i.groupList[e].ids.length<settingsManager.searchLimit?s.searchManager.doSearch(i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1)):(o.value=i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1),s.searchManager.fillResultBox(i.groupList[e].ids.map((e=>({id:e}))),a)),null===(t=l.b.getPlugin(p.P))||void 0===t||t.selectSat(-1),settingsManager.isMobileModeEnabled&&s.searchManager.closeSearch(),s.hideSideMenus())}}g.PLUGIN_NAME="Countries Menu";const m=new g;var b=i(2376),v=i(3384),f=i(6002);const S=i.p+"../img/find2.png";var M=i(9772),y=i(7948);class w extends u.c{static checkAz(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,y.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.az>=t&&a.az<=i}))}static checkEl(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,y.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.el>=t&&a.el<=i}))}static checkInview(e){const t=l.b.getDotsManager();return e.filter((e=>1===t.inViewData[e.id]))}static checkObjtype(e,t){return e.filter((e=>e.type===t))}static checkRange(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,y.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.rng>=t&&a.rng<=i}))}static limitPossibles(e,t){const i=l.b.getUiManager();return e.length>=t&&i.toast(`Too many results, limited to ${t}`,"serious"),e.slice(0,t)}static searchSats(e){let{az:t,el:i,rng:a,countryCode:s,inc:o,azMarg:r,elMarg:c,rngMarg:d,incMarg:u,period:p,periodMarg:h,rcs:g,rcsMarg:m,objType:b,raan:v,raanMarg:f,argPe:S,argPeMarg:y,bus:C,shape:L,payload:A}=e;const x=!isNaN(t)&&isFinite(t),k=!isNaN(i)&&isFinite(i),E=!isNaN(a)&&isFinite(a),T=!isNaN(o)&&isFinite(o),I=!isNaN(v)&&isFinite(v),N=!isNaN(S)&&isFinite(S),G=!isNaN(p)&&isFinite(p),_=!isNaN(g)&&isFinite(g),P="All"!==s,R="All"!==C,O="All"!==L,D="All"!==A;if(r=!isNaN(r)&&isFinite(r)?r:5,c=!isNaN(c)&&isFinite(c)?c:5,d=!isNaN(d)&&isFinite(d)?d:200,u=!isNaN(u)&&isFinite(u)?u:1,h=!isNaN(h)&&isFinite(h)?h:.5,m=!isNaN(m)&&isFinite(m)?m:g/10,f=!isNaN(f)&&isFinite(f)?f:1,y=!isNaN(y)&&isFinite(y)?y:1,!(k||E||x||T||G||_||N||I||P||R||O||D))throw new Error("No Search Criteria Entered");let F=l.b.getCatalogManager().getSats();if(F=T||G||!(x||k||E)?F:w.checkInview(F),F=0!==b?w.checkObjtype(F,b):F,x&&(F=w.checkAz(F,t-r,t+r)),k&&(F=w.checkEl(F,i-c,i+c)),E&&(F=w.checkRange(F,a-d,a+d)),T&&(F=w.checkInc(F,o-u,o+u)),I&&(F=w.checkRightAscension(F,v-f,v+f)),N&&(F=w.checkArgPe(F,S-y,S+y)),G&&(F=w.checkPeriod(F,p-h,p+h)),_&&(F=w.checkRcs(F,g-m,g+m)),"All"!==s){let e=s.split("|").map((e=>M.Aj[e]));e=e.filter(((t,i)=>t&&e.indexOf(t)===i)),F=F.filter((t=>e.includes(t.country)))}"All"!==C&&(F=F.filter((e=>e.bus===C))),"All"!==L&&(F=F.filter((e=>e.shape===L))),"All"!==A&&(F=F.filter((e=>{var t,i,a;return(null===(a=null===(i=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===i?void 0:i.split("-")[0])||void 0===a?void 0:a.replace(/[^a-zA-Z]/gu,""))===A}))),F=w.limitPossibles(F,settingsManager.searchLimit);let U="";return F.forEach(((e,t)=>{U+=t<F.length-1?`${e.sccNum},`:`${e.sccNum}`})),(0,n.Gn)("search").value=U,l.b.getUiManager().doSearch((0,n.Gn)("search").value),F}findByLooksSubmit(){return e=this,t=void 0,a=function*(){const e=l.b.getUiManager(),t=parseFloat((0,n.Gn)("fbl-azimuth").value),i=parseFloat((0,n.Gn)("fbl-elevation").value),a=parseFloat((0,n.Gn)("fbl-range").value),s=parseFloat((0,n.Gn)("fbl-inc").value),o=parseFloat((0,n.Gn)("fbl-period").value),r=parseFloat((0,n.Gn)("fbl-rcs").value),c=parseFloat((0,n.Gn)("fbl-azimuth-margin").value),d=parseFloat((0,n.Gn)("fbl-elevation-margin").value),u=parseFloat((0,n.Gn)("fbl-range-margin").value),p=parseFloat((0,n.Gn)("fbl-inc-margin").value),h=parseFloat((0,n.Gn)("fbl-period-margin").value),g=parseFloat((0,n.Gn)("fbl-rcs-margin").value),m=parseInt((0,n.Gn)("fbl-type").value),b=parseFloat((0,n.Gn)("fbl-raan").value),v=parseFloat((0,n.Gn)("fbl-raan-margin").value),f=parseFloat((0,n.Gn)("fbl-argPe").value),S=parseFloat((0,n.Gn)("fbl-argPe-margin").value),M=(0,n.Gn)("fbl-country").value,y=(0,n.Gn)("fbl-bus").value,C=(0,n.Gn)("fbl-payload").value,L=(0,n.Gn)("fbl-shape").value;(0,n.Gn)("search").value="";try{const n={az:t,el:i,rng:a,inc:s,azMarg:c,elMarg:d,rngMarg:u,incMarg:p,period:o,periodMarg:h,rcs:r,rcsMarg:g,objType:m,raan:b,raanMarg:v,argPe:f,argPeMarg:S,countryCode:M,bus:y,payload:C,shape:L};this.lastResults=w.searchSats(n),0===this.lastResults.length&&e.toast("No Satellites Found","critical")}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered","critical")}},new((i=void 0)||(i=Promise))((function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}));var e,t,i,a}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerInit,cbName:"findSat",cb:()=>{(0,n.Gn)("fbl-error").addEventListener("click",(function(){(0,n.Gn)("fbl-error").style.display="none"}))}}),l.b.register({event:o.RL.uiManagerFinal,cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}constructor(){super(w.PLUGIN_NAME),this.lastResults=[],this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=l.b.html`
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
  </div>`,this.bottomIconElementName="menu-find-sat",this.bottomIconImg=S,this.bottomIconLabel="Find Satellite",this.helpTitle="Find Satellite Menu",this.helpBody=l.b.html`The Find Satellite Menu is used for finding satellites by orbital parameters or satellite characteristics.
<br><br>
For most parameters, you type in the target value on the left and then a margin of error on the right.
For example, if you wanted to find all satellites in a 51-52 degree inclination, you can type 51.5 in the left box and 0.5 in the right box.
The search will then find all satellites within those inclinations and display them in the search bar.
`}printLastResults(){f.x.info(this.lastResults.map((e=>e.name)).join("\n"))}uiManagerFinal(){const e=l.b.getCatalogManager().objectCache;(0,n.Gn)("findByLooks-form").addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>{this.findByLooksSubmit(),(0,v.Zk)()}))})),(0,b.d)(e.filter((e=>null==e?void 0:e.bus)).map((e=>e.bus))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,n.Gn)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})),M.hA.forEach((e=>{(0,n.Gn)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${M.cs[e]}">${e}</option>`)})),(0,b.d)(e.filter((e=>null==e?void 0:e.shape)).map((e=>e.shape))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,n.Gn)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}));const t=e.filter((e=>null==e?void 0:e.payload)).map((e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,""))).filter((e=>e.length>=3));(0,b.d)(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{""!==e&&e.length>3&&(0,n.Gn)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}))}static checkArgPe(e,t,i){return e.filter((e=>e.argOfPerigee<i&&e.argOfPerigee>t))}static checkInc(e,t,i){return e.filter((e=>e.inclination<i&&e.inclination>t))}static checkPeriod(e,t,i){return e.filter((e=>e.period>t&&e.period<i))}static checkRightAscension(e,t,i){return e.filter((e=>e.rightAscension<i&&e.rightAscension>t))}static checkRcs(e,t,i){return e.filter((e=>e.rcs>t&&e.rcs<i))}}w.PLUGIN_NAME="findSat";var C=i(6633);const L=i.p+"../img/missile.png";var A=i(8437);const x=l.b.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var k=i(2869);let E=!1,T=!1,I=0;const N=()=>{if(void 0!==k.CC&&k.CC.missileArray.length>0){const e=l.b.getOrbitManager();for(I=0;I<k.CC.missileArray.length;I++)e.updateOrbitBuffer(k.CC.missileArray[I].id)}},G=()=>{(0,C.kW)((0,n.Gn)("missile-menu"),1e3),(0,n.Gn)("menu-missile").classList.remove("bmenu-item-selected"),E=!1},_=e=>{if("menu-missile"===e){const e=l.b.getUiManager();return E?(E=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.closeSearch(),e.hideSideMenus(),(0,C.$k)((0,n.Gn)("missile-menu"),1e3),(0,n.Gn)("menu-missile").classList.add("bmenu-item-selected"),void(E=!0))}},P=()=>{0!==parseFloat((0,n.Gn)("ms-type").value)?(0,n.Gn)("ms-custom-opt").style.display="none":(0,n.Gn)("ms-custom-opt").style.display="block"},R=()=>{(0,n.Gn)("ms-error").style.display="none"},O=()=>{-1!==parseInt((0,n.Gn)("ms-target").value)?((0,n.Gn)("ms-tgt-holder-lat").style.display="none",(0,n.Gn)("ms-tgt-holder-lon").style.display="none"):((0,n.Gn)("ms-tgt-holder-lat").style.display="block",(0,n.Gn)("ms-tgt-holder-lon").style.display="block")},D=()=>{(0,v.QP)((()=>{const e=l.b.getTimeManager(),t=l.b.getUiManager();(0,n.Gn)("ms-error").style.display="none";const i=parseFloat((0,n.Gn)("ms-type").value),a=parseFloat((0,n.Gn)("ms-attacker").value);let s=parseFloat((0,n.Gn)("ms-lat-lau").value),o=parseFloat((0,n.Gn)("ms-lon-lau").value);const r=parseFloat((0,n.Gn)("ms-target").value);let c=parseFloat((0,n.Gn)("ms-lat").value),d=parseFloat((0,n.Gn)("ms-lon").value);const u=e.selectedDate.getTime();let p="";if(1===i&&(p="simulation/Russia2USA.json",k.CC.MassRaidPre(u,p)),2===i&&(p="simulation/Russia2USAalt.json",k.CC.MassRaidPre(u,p)),3===i&&(p="simulation/China2USA.json",k.CC.MassRaidPre(u,p)),4===i&&(p="simulation/NorthKorea2USA.json",k.CC.MassRaidPre(u,p)),5===i&&(p="simulation/USA2Russia.json",k.CC.MassRaidPre(u,p)),6===i&&(p="simulation/USA2China.json",k.CC.MassRaidPre(u,p)),7===i&&(p="simulation/USA2NorthKorea.json",k.CC.MassRaidPre(u,p)),0!==i&&t.toast(`${p} Loaded`,"standby",!0),0===i){if(-1===r){if(isNaN(c))return t.toast("Invalid Target Latitude!","critical"),void((0,n.Gn)("loading-screen").style.display="none");if(isNaN(d))return t.toast("Invalid Target Longitude!","critical"),void((0,n.Gn)("loading-screen").style.display="none")}else c=k.CC.globalBMTargets[3*r],d=k.CC.globalBMTargets[3*r+1];if(T){if(isNaN(s))return t.toast("Invalid Launch Latitude!","critical"),void((0,n.Gn)("loading-screen").style.display="none");if(isNaN(o))return t.toast("Invalid Launch Longitude!","critical"),void((0,n.Gn)("loading-screen").style.display="none")}let e,i;const p=l.b.getCatalogManager();if(a<200){e=a-100,i=500-k.CC.missilesInUse;let t=1200;100!=a&&(s=k.CC.UsaICBM[4*e],o=k.CC.UsaICBM[4*e+1],t=1100),k.CC.Missile(s,o,c,d,3,p.missileSats-i,u,k.CC.UsaICBM[4*e+2],30,2.9,.07,k.CC.UsaICBM[4*e+3],"United States",t)}else if(a<300){e=a-200,i=500-k.CC.missilesInUse;const t=1120;213!=a&&214!=a&&215!=a&&(s=k.CC.RussianICBM[4*e],o=k.CC.RussianICBM[4*e+1]),k.CC.Missile(s,o,c,d,3,p.missileSats-i,u,k.CC.RussianICBM[4*e+2],30,2.9,.07,k.CC.RussianICBM[4*e+3],"Russia",t)}else if(a<400){e=a-300,i=500-k.CC.missilesInUse;const t=1120;321!=a&&(s=k.CC.ChinaICBM[4*e],o=k.CC.ChinaICBM[4*e+1]),k.CC.Missile(s,o,c,d,3,p.missileSats-i,u,k.CC.ChinaICBM[4*e+2],30,2.9,.07,k.CC.ChinaICBM[4*e+3],"China",t)}else if(a<500){e=a-400,i=500-k.CC.missilesInUse;const t=1120;400!=a&&(s=k.CC.NorthKoreanBM[4*e],o=k.CC.NorthKoreanBM[4*e+1]),k.CC.Missile(s,o,c,d,3,p.missileSats-i,u,k.CC.NorthKoreanBM[4*e+2],30,2.9,.07,k.CC.NorthKoreanBM[4*e+3],"North Korea",t)}else if(a<600){e=a-500,i=500-k.CC.missilesInUse;const t=1e3;500!=a&&(s=k.CC.FraSLBM[4*e],o=k.CC.FraSLBM[4*e+1]),k.CC.Missile(s,o,c,d,3,p.missileSats-i,u,k.CC.FraSLBM[4*e+2],30,2.9,.07,k.CC.FraSLBM[4*e+3],"France",t)}else if(a<700){e=a-600,i=500-k.CC.missilesInUse;const t=1200;600!=a&&(s=k.CC.ukSLBM[4*e],o=k.CC.ukSLBM[4*e+1]),k.CC.Missile(s,o,c,d,3,p.missileSats-i,u,k.CC.ukSLBM[4*e+2],30,2.9,.07,k.CC.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(k.CC.lastMissileError,k.CC.lastMissileErrorType),t.doSearch("RV_")}(0,n.Gn)("loading-screen").style.display="none"}))},F=()=>{(0,n.Gn)("left-menus").insertAdjacentHTML("beforeend",l.b.html`
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
        `)},U=()=>{l.b.getUiManager().doSearch("RV_")},B=()=>{(0,s.E)((0,n.Gn)("missile-menu")),(0,n.Gn)("missile").addEventListener("submit",(e=>{e.preventDefault(),D()})),(0,n.Gn)("ms-attacker").addEventListener("change",H),(0,n.Gn)("ms-target").addEventListener("change",O),(0,n.Gn)("ms-error").addEventListener("click",R),(0,n.Gn)("missile").addEventListener("change",P),(0,n.Gn)("searchRvBtn").addEventListener("click",U),H(),O()},z=()=>{l.b.register({event:o.RL.uiManagerInit,cbName:"missile",cb:F}),l.b.register({event:o.RL.uiManagerFinal,cbName:"missile",cb:B}),l.b.register({event:o.RL.bottomMenuClick,cbName:"missile",cb:_}),l.b.register({event:o.RL.hideSideMenus,cbName:"missile",cb:G}),l.b.register({event:o.RL.updateLoop,cbName:"updateMissileOrbits",cb:N}),l.b.register({event:o.RL.onHelpMenuClick,cbName:"missile",cb:$})},$=()=>!!E&&(A.v.showAdvice("Missile Menu",x),!0),H=()=>{T=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,n.Gn)("ms-attacker").value)&&(T=!0);T?((0,n.Gn)("ms-lau-holder-lat").style.display="block",(0,n.Gn)("ms-lau-holder-lon").style.display="block"):((0,n.Gn)("ms-lau-holder-lat").style.display="none",(0,n.Gn)("ms-lau-holder-lon").style.display="none")};var j=i(3786),V=i(6731);const K=i.p+"../img/sat3.png";class W extends u.c{constructor(){super(W.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=K,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{l.b.getMainCamera().cameraType===V.i.SATELLITE?(l.b.getUiManager().hideSideMenus(),l.b.getMainCamera().cameraType=V.i.FIXED_TO_SAT,(0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected")):-1!==this.selectSatManager_.selectedSat?(l.b.getMainCamera().cameraType=V.i.SATELLITE,(0,n.Gn)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(l.b.getUiManager().toast("Select a Satellite First!","caution"),(0,j.l)((0,n.Gn)(this.bottomIconElementName)))},this.lastLongAudioTime=0,this.selectSatManager_=l.b.getPlugin(p.P)}}W.PLUGIN_NAME="Satellite View";var Y=i(8769);const X=i.p+"../audio/beep1.mp3",J=i.p+"../audio/button.mp3",q=i.p+"../audio/button2.mp3",Q=i.p+"../audio/chatter1.mp3",Z=i.p+"../audio/chatter2.mp3",ee=i.p+"../audio/chatter3.mp3",te=i.p+"../audio/chatter4.mp3",ie=i.p+"../audio/chatter5.mp3",ae=i.p+"../audio/chatter6.mp3",se=i.p+"../audio/chatter7.mp3",ne=i.p+"../audio/chatter8.mp3",oe=i.p+"../audio/click10.mp3",le=i.p+"../audio/click11.mp3",re=i.p+"../audio/click12.mp3",ce=i.p+"../audio/click13.mp3",de=i.p+"../audio/click14.mp3",ue=i.p+"../audio/click15.mp3",pe=i.p+"../audio/click16.mp3",he=i.p+"../audio/click17.mp3",ge=i.p+"../audio/click18.mp3",me=i.p+"../audio/click19.mp3",be=i.p+"../audio/click2.mp3",ve=i.p+"../audio/click20.mp3",fe=i.p+"../audio/click21.mp3",Se=i.p+"../audio/click22.mp3",Me=i.p+"../audio/click23.mp3",ye=i.p+"../audio/click24.mp3",we=i.p+"../audio/click25.mp3",Ce=i.p+"../audio/click26.mp3",Le=i.p+"../audio/click27.mp3",Ae=i.p+"../audio/click28.mp3",xe=i.p+"../audio/click29.mp3",ke=i.p+"../audio/click3.mp3",Ee=i.p+"../audio/click30.mp3",Te=i.p+"../audio/click4.mp3",Ie=i.p+"../audio/click7.mp3",Ne=i.p+"../audio/click8.mp3",Ge=i.p+"../audio/error.mp3",_e=i.p+"../audio/error2.mp3",Pe=i.p+"../audio/export.wav",Re=i.p+"../audio/genericBeep1.mp3",Oe=i.p+"../audio/genericBeep2.mp3",De=i.p+"../audio/genericBeep3.mp3",Fe=i.p+"../audio/liftoff.mp3",Ue=i.p+"../audio/loading.wav",Be=i.p+"../audio/pop.mp3",ze=i.p+"../audio/switch.mp3",$e=i.p+"../audio/toggle-off.mp3",He=i.p+"../audio/toggle-on.mp3",je=i.p+"../audio/whoosh1.mp3",Ve=i.p+"../audio/whoosh2.mp3",Ke=i.p+"../audio/whoosh3.mp3",We=i.p+"../audio/whoosh4.mp3",Ye=i.p+"../audio/whoosh5.mp3",Xe=i.p+"../audio/whoosh6.mp3",Je=i.p+"../audio/whoosh7.mp3",qe=i.p+"../audio/whoosh8.mp3";class Qe extends u.c{constructor(){super("Sound Manager"),this.lastLongAudioTime=0,this.isMute=!1,this.currentChatterClip_=0,this.voices=[],this.maxClickClip_=0,this.sounds={standby:new Audio(Be),error1:new Audio(Ge),error2:new Audio(_e),export:new Audio(Pe),click:new Audio(ze),beep1:new Audio(X),genericBeep1:new Audio(Re),genericBeep2:new Audio(Oe),genericBeep3:new Audio(De),whoosh1:new Audio(je),whoosh2:new Audio(Ve),whoosh3:new Audio(Ke),whoosh4:new Audio(We),whoosh5:new Audio(Ye),whoosh6:new Audio(Xe),whoosh7:new Audio(Je),whoosh8:new Audio(qe),click1:new Audio(Ee),click2:new Audio(be),click3:new Audio(ke),click4:new Audio(Te),click5:new Audio(xe),click6:new Audio(Le),click7:new Audio(Ie),click8:new Audio(Ne),click9:new Audio(Ae),click10:new Audio(oe),click11:new Audio(le),click12:new Audio(re),click13:new Audio(ce),click14:new Audio(de),click15:new Audio(ue),click16:new Audio(pe),click17:new Audio(he),click18:new Audio(ge),click19:new Audio(me),click20:new Audio(ve),click21:new Audio(fe),click22:new Audio(Se),click23:new Audio(Me),click24:new Audio(ye),click25:new Audio(we),click26:new Audio(Ce),chatter1:new Audio(Q),chatter2:new Audio(Z),chatter3:new Audio(ee),chatter4:new Audio(te),chatter5:new Audio(ie),chatter6:new Audio(ae),chatter7:new Audio(se),chatter8:new Audio(ne),loading:new Audio(Ue),button:new Audio(J),menuButton:new Audio(q),toggleOn:new Audio(He),toggleOff:new Audio($e),liftoff:new Audio(Fe)},this.addJs=()=>{super.addJs(),Y.I.registerSingleton(o.Yv.SoundManager,this),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{this.voices=speechSynthesis.getVoices()}}),this.sounds.loading.volume=.25,this.sounds.export.volume=.3,this.sounds.error2.volume=.5},Object.keys(this.sounds).forEach((e=>{if(e.startsWith("click")){const t=parseInt(e.replace("click",""));t>this.maxClickClip_&&(this.maxClickClip_=t)}}))}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter((function(e){return"Google UK English Female"==e.name}))[0],window.speechSynthesis.speak(t)}stop(e,t=!0){if(e===h.p.CHATTER){clearTimeout(this.nextChatter);for(let e=1;e<=8;e++)this.stop(`chatter${e}`,t);return}const i=this.sounds[e];t&&Qe.fadeOut_(i)}static fadeOut_(e,t=1e3){const i=e.volume,a=t/10,s=e.volume/a;let n=0;const o=setInterval((()=>{n++,e.volume>.05&&(e.volume-=s),n===a&&(e.pause(),e.currentTime=0,clearInterval(o),e.volume=i)}),10)}play(e){if(!navigator.userActivation.hasBeenActive)return;if(this.isMute)return;if((0,n.Gn)("loading-screen").classList.contains("fullscreen"))return;let t,i=1;switch(e){case h.p.BEEP:return i=Math.floor(3*Math.random())+1,t=this.sounds[`genericBeep${i}`],void t.play();case h.p.WHOOSH:return i=Math.floor(8*Math.random())+1,t=this.sounds[`whoosh${i}`],void t.play();case h.p.ERROR:if(this.lastLongAudioTime+12e5>Date.now())return;return this.lastLongAudioTime=Date.now(),i=Math.floor(2*Math.random())+1,t=this.sounds[`error${i}`],void t.play();case h.p.CLICK:return i=Math.floor(Math.random()*this.maxClickClip_)+1,t=this.sounds[`click${i}`],t.volume=.25,void t.play();case h.p.CHATTER:return i=Math.floor(8*Math.random())+1,i===this.currentChatterClip_&&(i++,i>8&&(i=1)),t=this.sounds[`chatter${i}`],t.volume=.15,this.stop(h.p.CHATTER,!1),t.play(),void(this.nextChatter=setTimeout((()=>{this.play(h.p.CHATTER)}),1e3*t.duration+1e4));default:return t=this.sounds[e],void t.play()}}}const Ze=new Qe;var et=i(4601),tt=i(3447);const it=i.p+"../img/about.png";class at extends u.c{constructor(){super("About Menu"),this.bottomIconElementName="menu-about-icon",this.bottomIconImg=it,this.bottomIconLabel="About Menu",this.sideMenuElementName="about-menu",this.sideMenuElementHtml=l.b.html`
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
`,this.helpTitle="About Menu",this.helpBody=l.b.html`The About Menu is a place to find information about KeepTrack.
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
  `}}const st=new at;var nt=i(5459),ot=i(1352),lt=i(3967);class rt{static exportTle2Csv(e,t=!0){try{const i=[],a=e.filter((e=>e.isSatellite()&&e.tle1));if(0==a.length)return void f.x.info("No TLE data to export");a.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of a)void 0!==e.tle1&&void 0!==e.tle2&&(t&&"ANALSAT"==e.country||i.push({satId:e.sccNum,name:e.name,tle1:e.tle1,tle2:e.tle2,inclination:e.inclination,eccentricity:e.eccentricity,period:e.period,raan:e.rightAscension,apogee:e.apogee,perigee:e.perigee,country:e.country,site:e.launchSite,rocket:e.launchVehicle,rcs:e.rcs,visualMagnitude:e.vmag,user:e.user,mission:e.mission,purpose:e.purpose,contractor:e.manufacturer,dryMass:e.dryMass,liftMass:e.launchMass,lifeExpected:e.lifetime,power:e.power}));(0,ot.Eb)(i,"catalogInfo")}catch(e){}}static exportSatInFov2Csv(e){const t=e.filter((e=>{var t;return e.isSatellite()&&e.tle1&&1===(null===(t=l.b.getDotsManager().inViewData)||void 0===t?void 0:t[e.id])})).map((e=>{const t=e;return{satId:t.sccNum,name:t.name,country:t.country,apogee:t.apogee,perigee:t.perigee}}));(0,ot.Eb)(t,"satInView")}static exportTle2Txt(e,t=2,i=!0){try{const a=[],s=e.filter((e=>e.isSatellite()&&e.tle1));if(0==s.length)return void f.x.info("No TLE data to export");s.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of s)void 0!==e.tle1&&void 0!==e.tle2&&(i&&"ANALSAT"==e.country||(3==t&&a.push(e.name),e.tle1.includes("NO TLE")&&console.log(e.sccNum),e.tle2.includes("NO TLE")&&console.log(e.sccNum),a.push(e.tle1),a.push(e.tle2)));const n=a.join("\n"),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,lt.saveAs)(o,"TLE.txt")}catch(e){}}}var ct=i(9991);const dt=i.p+"../img/analysis.png";class ut extends u.c{addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"analysis",cb:()=>{var e,t,i,a,o,r,c,d,u;null===(e=(0,n.Gn)("analysis-bpt"))||void 0===e||e.addEventListener("submit",(function(e){e.preventDefault(),ut.analysisBptSumbit_()})),null===(t=(0,n.Gn)("findCsoBtn"))||void 0===t||t.addEventListener("click",(()=>{(0,v.QP)(this.findCsoBtnClick_.bind(this))})),null===(i=(0,n.Gn)("findReentries"))||void 0===i||i.addEventListener("click",(()=>{(0,v.QP)(ut.findRaBtnClick_)}));const p=l.b.getCatalogManager().objectCache;null===(a=(0,n.Gn)("export-catalog-csv-btn"))||void 0===a||a.addEventListener("click",(()=>{rt.exportTle2Csv(p)})),null===(o=(0,n.Gn)("export-sat-fov-csv-btn"))||void 0===o||o.addEventListener("click",(()=>{rt.exportSatInFov2Csv(p)})),null===(r=(0,n.Gn)("export-catalog-txt-2a"))||void 0===r||r.addEventListener("click",(()=>{rt.exportTle2Txt(p)})),null===(c=(0,n.Gn)("export-catalog-txt-2b"))||void 0===c||c.addEventListener("click",(()=>{rt.exportTle2Txt(p,2,!1)})),null===(d=(0,n.Gn)("export-catalog-txt-3a"))||void 0===d||d.addEventListener("click",(()=>{rt.exportTle2Txt(p,3)})),null===(u=(0,n.Gn)("export-catalog-txt-3b"))||void 0===u||u.addEventListener("click",(()=>{rt.exportTle2Txt(p,3,!1)})),(0,s.E)((0,n.Gn)("analysis-menu"))}}),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{ut.setSensor_(e)}})}findCloseObjects(){if(this.searchStrCache_)return this.searchStrCache_;let e=ut.getValidSats_();e=(0,b.d)(e),e.sort(((e,t)=>e.position.x-t.position.x));let t=ut.getPossibleCSOs_(e,50),i=(0,b.d)(t);const a=ut.getActualCSOs_(i,50),s=Array.from(new Set(a));let n="";for(let e=0;e<s.length;e++)e==s.length-1?n+=s[e]:n+=s[e]+",";return this.searchStrCache_=n,n}static getActualCSOs_(e,t){const i=[];for(const t of e){let e=t.sat1,i=nt.$.getEci(e,new Date(Date.now()+18e5));i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(t.sat1.position=i.position,e=t.sat2,i=nt.$.getEci(e,new Date(Date.now()+18e5)),i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(e.position=i.position,t.sat2.position=i.position))}for(const a of e){let e=a.sat1,s=e.position;if(void 0===s)continue;let n=s.x-t,o=s.x+t,l=s.y-t,r=s.y+t,c=s.z-t,d=s.z+t,u=a.sat2,p=u.position;void 0!==p&&p.x<o&&p.x>n&&p.y<r&&p.y>l&&p.z<d&&p.z>c&&(i.push(e.sccNum),i.push(u.sccNum))}return i}static getPossibleCSOs_(e,t){let i=[];for(let a=0;a<e.length;a++){const s=e[a],n=s.position,o=n.x-t,l=n.x+t,r=n.y-t,c=n.y+t,d=n.z-t,u=n.z+t;let p=0;for(p=Math.max(0,a-200);p<e.length;p++){const t=e[p];if(s==t)continue;const a=t.position;if(a.x>l)break;a.x<l&&a.x>o&&a.y<c&&a.y>r&&a.z<u&&a.z>d&&i.push({sat1:s,sat2:t})}}return i}static getValidSats_(){let e=[];for(let t=0;t<l.b.getCatalogManager().orbitalSats;t++){const i=l.b.getCatalogManager().getSat(t);i&&(void 0===i.position&&(i.position=nt.$.getEci(i,new Date).position||{x:0,y:0,z:0}),isNaN(i.position.x)||isNaN(i.position.y)||isNaN(i.position.z)||i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||e.push(i))}return e}static findBestPass(e,t){const i=l.b.getTimeManager();if(t.length<=0||!t[0]||void 0===t[0].minAz)return l.b.getUiManager().toast("Sensor's format incorrect. Did you select a sensor first?","critical"),[];const a=t[0];let s=0;const n=l.b.getCatalogManager().calcSatrec(e),o=[];let r=y.rE/(n.no*y.rE/y.gc),c=0,d=null,u=null,p=null,h=null,g=a.maxRng,m=0,b=!1,v=!1;const f=(e,t)=>{let n=nt.$.getRae(e,t,a);if(nt.$.checkIsInView(a,n)){const o=i.getOffsetTimeObj(s-5e3);let l=nt.$.getRae(o,t,a),r=nt.$.checkIsInView(a,l);if(r){let o=i.getOffsetTimeObj(s+5e3);if(l=nt.$.getRae(o,t,a),r=nt.$.checkIsInView(a,l),!r){if(v=n.el<=3.5,null==h)return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null};c=Math.min((e.getTime()-h.getTime())/1e3/60*10/8,10);let i=Math.min(m/50*10,10);i*=b&&v?2:1,c+=i,c+=Math.min(7500/g,10);let a=0;return a=(e.getTime()-h.getTime())/1e3||0,{sortTime:h.getTime(),scc:t.satnum,score:c,startDate:h,startTime:h,startAz:d,startEl:u,startrng:p,stopDate:e,stopTime:e,stopAz:n.az.toFixed(0),stopEl:n.el.toFixed(1),stoprng:n.rng.toFixed(0),tic:a,minrng:g.toFixed(0),passMaxEl:m.toFixed(1)}}}else n.el<=3.5&&(b=!0),h=e,d=n.az.toFixed(0),u=n.el.toFixed(1),p=n.rng.toFixed(0);m<n.el&&(m=n.el),g>n.rng&&(g=n.rng)}return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null}};for(let e=0;e<604800;e+=5){s=1e3*e;const t=i.getOffsetTimeObj(s);if(o.length<=5e3){const i=f(t,n);null!==i.score&&(o.push(i),c=0,d=null,u=null,p=null,h=null,g=a.maxRng,m=0,b=!1,v=!1,e+=60*r*.75)}}return o}static findBestPasses(e,t){const i=(e=e.replace(/ /gu,",")).split(",");let a=[];for(const e of i)try{if(void 0===e||null==e||""===e||" "===e)continue;const i=l.b.getCatalogManager().sccNum2Sat(parseInt(e)),s=ut.findBestPass(i,[t]);for(const e of s)a.push(e)}catch(e){console.debug(e)}a.sort(((e,t)=>t.sortTime-e.sortTime)),a.reverse(),a.forEach((e=>{delete e.sortTime}));for(const e of a)e.startDate=e.startDate.toISOString().split("T")[0],e.startTime=e.startTime.toISOString().split("T")[1].split(".")[0],e.stopDate=e.stopDate.toISOString().split("T")[0],e.stopTime=e.stopTime.toISOString().split("T")[1].split(".")[0];(0,ot.Eb)(a,"bestSatTimes")}findCsoBtnClick_(){const e=this.findCloseObjects();l.b.getUiManager().doSearch(e)}static findRaBtnClick_(){const e=ct.w.findReentry(l.b.getCatalogManager().objectCache).join(",");l.b.getUiManager().doSearch(e)}static analysisBptSumbit_(){const e=(0,n.Gn)("analysis-bpt-sats").value,t=l.b.getSensorManager();t.isSensorSelected()?ut.findBestPasses(e,t.currentSensors[0]):l.b.getUiManager().toast("You must select a sensor first!","critical")}static setSensor_(e){const t=(0,n.Gn)("analysis-bpt-submit");e?(t.disabled=!1,t.textContent="Generate Best Pass Times ▶"):(t.disabled=!0,t.textContent="Select Sensor First!")}constructor(){super("Analysis Menu"),this.bottomIconElementName="analysis-bottom-icon",this.bottomIconImg=dt,this.bottomIconLabel="Analysis Menu",this.sideMenuElementName="analysis-menu",this.sideMenuElementHtml=l.b.html`
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
  </ul>`,this.searchStrCache_=null}}const pt=new ut;var ht=i(149);const gt=i.p+"../img/constellation.png",mt=i.p+"../img/planetarium.png";class bt extends u.c{constructor(){super(bt.PLUGIN_NAME),this.bottomIconElementName="menu-planetarium",this.bottomIconLabel="Planetarium View",this.bottomIconImg=mt,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.b.getRenderer(),i=l.b.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;l.b.getMainCamera().cameraType=V.i.PLANETARIUM;try{(0,n.Gn)("cspocAllSensor").style.display="none",(0,n.Gn)("mwAllSensor").style.display="none",(0,n.Gn)("mdAllSensor").style.display="none",(0,n.Gn)("esocAllSensor").style.display="none",(0,n.Gn)("llAllSensor").style.display="none",(0,n.Gn)("rusAllSensor").style.display="none",(0,n.Gn)("prcAllSensor").style.display="none"}catch(e){}ht.j.change("planetarium"),l.b.getCatalogManager().isStarManagerLoaded&&l.b.getStarManager().clearConstellations(),null===(e=l.b.getPlugin(vt))||void 0===e||e.setBottomIconToUnselected()}else l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,t.glInit(),i.hideSideMenus(),l.b.getOrbitManager().clearInViewOrbit(),l.b.getMainCamera().cameraType=V.i.DEFAULT}}addJs(){super.addJs(),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,n.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}bt.PLUGIN_NAME="Planetarium";class vt extends u.c{constructor(){super(vt.PLUGIN_NAME),this.bottomIconElementName="menu-astronomy",this.bottomIconLabel="Astronomy View",this.bottomIconImg=gt,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.b.getCatalogManager(),i=l.b.getOrbitManager(),a=l.b.getRenderer(),s=l.b.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;t.isStarManagerLoaded&&l.b.getStarManager().drawAllConstellations(),i.clearInViewOrbit(),l.b.getMainCamera().cameraType=V.i.ASTRONOMY,ht.j.change("astronomy"),null===(e=l.b.getPlugin(bt))||void 0===e||e.setBottomIconToUnselected()}else l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,a.glInit(),s.hideSideMenus(),l.b.getMainCamera().cameraType=V.i.DEFAULT,ht.j.change("default"),t.isStarManagerLoaded&&l.b.getStarManager().clearConstellations(),(0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}}addJs(){super.addJs(),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,n.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}vt.PLUGIN_NAME="Astronomy";var ft=i(2579);const St=i.p+"../img/breakup.png";var Mt,yt,wt=i(5032);!function(e){e[e.MeanAnomaly=1]="MeanAnomaly",e[e.RightAscensionOfAscendingNode=2]="RightAscensionOfAscendingNode",e[e.ArgumentOfPerigee=3]="ArgumentOfPerigee"}(Mt||(Mt={})),function(e){e[e.Near=0]="Near",e[e.Success=1]="Success",e[e.Error=2]="Error",e[e.Far=3]="Far"}(yt||(yt={}));class Ct{constructor(e,t,i,a,s,n,o){this.sat=e,this.now=s,this.goalLat=t,this.goalLon=i,this.goalDirection=a,this.newMeana=null,this.newArgPer=null,this.goalAlt=n||null,this.raanOffset=o||0,this.lastLat=null,this.currentDirection=null,this.argPerCalcResults=null,this.meanACalcResults=null,this.raanCalcResults=null}rotateOrbitToLatLon(){return this.parseTle(),this.meanACalcResults=this.meanACalcLoop(this.now,this.goalDirection),this.meanACalcResults!==yt.Success?["Error","Failed to find a solution for Mean Anomaly"]:this.goalAlt>0&&this.argPerCalcLoop()!==yt.Success?["Error","Failed to find a solution for Argument of Perigee"]:(this.raanCalcResults=this.raanCalcLoop(this.raanOffset,this.now),this.raanCalcResults!==yt.Success?["Error","Failed to find a solution for Right Ascension of Ascending Node"]:[this.sat.tle1,this.sat.tle2])}argPerCalcLoop(){this.meanACalcResults=yt.Near;for(let e=0;e<3600;e+=1){let t=10*parseFloat(this.argPer)-100+e;if(t>3600&&(t-=3600),this.argPerCalcResults=this.argPerCalc(t.toString(),this.now),this.argPerCalcResults===yt.Success&&this.meanACalcResults===yt.Success&&this.currentDirection===this.goalDirection)break;if(this.argPerCalcResults===yt.Far&&(e+=49),this.argPerCalcResults===yt.Error)return yt.Error;if(this.meanACalcResults=this.meanACalcLoop2(),this.meanACalcResults===yt.Success)if(this.currentDirection!==this.goalDirection)e+=20;else if(this.argPerCalcResults===yt.Success)break;if(e=this.meanACalcResults===yt.Far?e+100:e,this.meanACalcResults===yt.Error)return yt.Error}return this.argPerCalcResults}meanACalcLoop2(){for(let e=0;e<5200;e+=1){if(this.meanACalcResults=this.meanACalc(e,this.now),this.meanACalcResults===yt.Success){if(this.currentDirection===this.goalDirection)break;e+=20}if(e=this.meanACalcResults===yt.Far?e+100:e,this.meanACalcResults===yt.Error)return yt.Error}return this.meanACalcResults}parseTle(){this.intl=this.sat.tle1.substring(9,17),this.epochyr=this.sat.tle1.substring(18,20),this.epochday=this.sat.tle1.substring(20,32),this.meanmo=this.sat.tle2.substring(52,63),this.argPer=wt.J.pad0(this.sat.argOfPerigee.toFixed(4),8),this.inc=wt.J.pad0(this.sat.inclination.toFixed(4),8),this.ecen=this.sat.eccentricity.toFixed(7).substring(2,9),this.TLE1Ending=this.sat.tle1.substring(32,71)}meanACalcLoop(e,t){let i=yt.Near;for(let a=0;a<5200;a+=1){if(i=this.meanACalc(a,e),i===yt.Success){if(this.currentDirection===t)break;a+=20}i===yt.Far&&(a+=100)}return i}raanCalcLoop(e,t){let i=yt.Near;for(let a=0;a<52e3&&(i=this.raanCalc(a,e,t),i!==yt.Success);a+=1)i===yt.Far&&(a+=1e3);return i}meanACalc(e,t){const i=this.sat;let a=i.satrec||y.t2.createSatrec(i.tle1,i.tle2);e/=10;const s=wt.J.pad0(e.toFixed(4),8),n=wt.J.pad0(i.rightAscension.toFixed(4),8),o=this.newArgPer?wt.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):wt.J.pad0(i.argOfPerigee.toFixed(4),8),l=i.tle1.substring(32,71),r="1 "+i.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+l,c="2 "+i.sccNum+" "+this.inc+" "+n+" "+this.ecen+" "+o+" "+s+" "+this.meanmo+"    10";a=y.t2.createSatrec(r,c);const d=this.getOrbitByLatLonPropagate(t,a,Mt.MeanAnomaly);return d===yt.Success&&(i.tle1=r,i.tle2=c,this.newMeana=s),d}getOrbitByLatLonPropagate(e,t,i){const{m:a,gmst:s}=nt.$.calculateTimeVariables(e,t),n=y.t2.propagate(t,a).position;if(isNaN(n.x)||isNaN(n.y)||isNaN(n.z))return yt.Error;const o=(0,y.K7)(n,s);let{lat:l,lon:r,alt:c}=o;if(this.lastLat=this.lastLat?this.lastLat:l,i===Mt.MeanAnomaly){if(l===this.lastLat)return 0;l>this.lastLat&&(this.currentDirection="N"),l<this.lastLat&&(this.currentDirection="S"),this.lastLat=l}return i===Mt.MeanAnomaly&&l>this.goalLat-Ct.MAX_LAT_ERROR&&l<this.goalLat+Ct.MAX_LAT_ERROR||i===Mt.RightAscensionOfAscendingNode&&r>this.goalLon-Ct.MAX_LON_ERROR&&r<this.goalLon+Ct.MAX_LON_ERROR||i===Mt.ArgumentOfPerigee&&c>this.goalAlt-Ct.MAX_ALT_ERROR&&c<this.goalAlt+Ct.MAX_ALT_ERROR?yt.Success:(i!==Mt.MeanAnomaly||l>this.goalLat-11&&l<this.goalLat+11)&&(i!==Mt.RightAscensionOfAscendingNode||r>this.goalLon-11&&r<this.goalLon+11)?i===Mt.ArgumentOfPerigee&&(c<this.goalAlt-100||c>this.goalAlt+100)?yt.Far:yt.Near:yt.Far}raanCalc(e,t,i){const a=e;e=(e/=100)>360?e-360:e;const s=wt.J.pad0(e.toFixed(4),8),n=this.newArgPer?wt.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):wt.J.pad0(this.sat.argOfPerigee.toFixed(4),8),o="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,l="2 "+this.sat.sccNum+" "+this.inc+" "+s+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10",r=y.t2.createSatrec(o,l),c=this.getOrbitByLatLonPropagate(i,r,Mt.RightAscensionOfAscendingNode);if(c===yt.Success){e=(e=(e=a/100+t)>360?e-360:e)<0?e+360:e;const i=wt.J.pad0(e.toFixed(4),8),s="2 "+this.sat.sccNum+" "+this.inc+" "+i+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10";this.sat.tle1=o,this.sat.tle2=s}return c}argPerCalc(e,t){const i=this.newMeana,a=wt.J.pad0(this.sat.rightAscension.toFixed(4),8);e=wt.J.pad0((parseFloat(e)/10).toFixed(4),8);const s="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,n="2 "+this.sat.sccNum+" "+this.inc+" "+a+" "+this.ecen+" "+e+" "+i+" "+this.meanmo+"    10",o=y.t2.createSatrec(s,n),l=this.getOrbitByLatLonPropagate(t,o,Mt.ArgumentOfPerigee);return l===yt.Success&&(this.sat.tle1=s,this.sat.tle2=n,this.newArgPer=e),l}}Ct.MAX_LAT_ERROR=.1,Ct.MAX_LON_ERROR=.1,Ct.MAX_ALT_ERROR=30;var Lt=i(2402),At=i(6279),xt=i(9508);class kt extends u.c{constructor(){super(kt.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=St,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;if((null==t?void 0:t.apogee)-(null==t?void 0:t.perigee)>this.maxDifApogeeVsPerigee_)return f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=l.b.html`
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
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("breakup").addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onSubmit_()))}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonActive&&(this.closeSideMenu(),f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonActive&&this.updateSccNumInMenu_()):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}updateSccNumInMenu_(){if(!this.isMenuButtonActive)return;const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);(null==e?void 0:e.isSatellite())&&((0,n.Gn)("hc-scc").value=e.sccNum)}onSubmit_(){const{simulationTimeObj:e}=l.b.getTimeManager(),t=l.b.getCatalogManager(),{satId:i,breakupCount:a,rascVariation:s,incVariation:n,meanmoVariation:o}=kt.getFormData_(t),r=t.getSat(i),c=r,d=At.x.eci2lla(r.position,e),u=d.lat,p=d.lon,h=nt.$.getDirection(r,e);"Error"===h&&f.x.warn("Cannot calculate direction of satellite. Try again later.");const g=Lt.l.currentEpoch(e);if(r.tle1=r.tle1.substring(0,18)+g[0]+g[1]+r.tle1.substring(32),l.b.getMainCamera().isAutoPitchYawToTarget=!1,r.apogee-r.perigee>this.maxDifApogeeVsPerigee_)return void f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const m=r.apogee-r.perigee<300?0:d.alt;let b=new Ct(r,u,p,h,e,m).rotateOrbitToLatLon();const v=b[0],S=b[1],M=new y.oZ(Object.assign(Object.assign({},r),{id:i,tle1:v,tle2:S,active:!0}));t.objectCache[i]=M,t.satCruncher.postMessage({typ:xt.Bi.SAT_EDIT,id:i,tle1:v,tle2:S});const w=l.b.getOrbitManager();w.changeOrbitBufferData(i,v,S);const C=15e-5,L=r.eccentricity;let A=0;for(let i=0;i<=4&&!(A>=a);i++){const l=y.Ad.convert6DigitToA5((ft.g.ANALYST_START_ID+A).toString()),g=t.sccNum2Id(l);t.getObject(g);let m=c;const b=-s/2+s*(i/4),v=r.apogee-r.perigee<300?0:d.alt;let M=new Ct(m,u,p,h,e,v,b).rotateOrbitToLatLon();if("Error"===M[0]&&(M=new Ct(m,u,p,h,new Date(e.getTime()+1),v,b).rotateOrbitToLatLon(),"Error"===M[0]))return void f.x.error(new Error(M[1]),"breakup.ts","Error creating breakup!");let x=M[0],k=M[1];for(;A<(i+1)*a/4;A++){let i=parseFloat(S.substring(8,16));i=i+Math.random()*n*2-n;const a=i.toFixed(4).padStart(8,"0");if(8!==a.length)throw new Error(`Inclination length is not 8 - ${a} - ${S}`);m.eccentricity=L,m.eccentricity+=Math.random()*C*2-C;let s=parseFloat(k.substring(52,62));s=s+Math.random()*o*2-o;const l=s.toFixed(8).padStart(11,"0");if(11!==l.length)throw new Error(`meanmo length is not 11 - ${l} - ${k}`);const r=y.Ad.convert6DigitToA5((ft.g.ANALYST_START_ID+A).toString()),c=t.sccNum2Id(r);if(x=`1 ${r}`+x.substring(7),k=`2 ${r} ${a} ${k.substring(17,52)}${l}${k.substring(63)}`,69!==x.length)throw new Error(`Invalid tle1: length is not 69 - ${x}`);if(69!==k.length)throw new Error(`Invalid tle1: length is not 69 - ${k}`);let d;try{d=new y.oZ(Object.assign(Object.assign({},t.objectCache[c]),{id:c,tle1:x,tle2:k,active:!0}))}catch(e){return void f.x.error(e,"breakup.ts","Error creating breakup!")}nt.$.altitudeCheck(d.satrec,e)>1?(t.objectCache[c]=d,t.satCruncher.postMessage({typ:xt.Bi.SAT_EDIT,id:c,active:!0,tle1:x,tle2:k}),w.changeOrbitBufferData(c,x,k)):f.x.warn("Breakup Generator Failed")}}a>settingsManager.searchLimit&&(settingsManager.searchLimit=a),l.b.getUiManager().doSearch(`${r.sccNum},Analyst`)}static getFormData_(e){const t=e.sccNum2Id((0,n.Gn)("hc-scc").value),i=parseFloat((0,n.Gn)("hc-per").value),a=parseFloat((0,n.Gn)("hc-inc").value),s=parseFloat((0,n.Gn)("hc-raan").value);return{satId:t,breakupCount:parseInt((0,n.Gn)("hc-count").value),rascVariation:s,incVariation:a,meanmoVariation:i}}}kt.PLUGIN_NAME="Breakup";class Et{static getColors(e){let t,i;switch(e){case"Top Secret//SCI":t="#fce93a",i="black";break;case"Top Secret":t="#ff8c00",i="black";break;case"Secret":t="#ff0000",i="white";break;case"Confidential":t="#0033a0",i="white";break;case"CUI":t="#512b85",i="white";break;case"Unclassified":t="#007a33",i="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:i}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class Tt extends u.c{constructor(){super("Classification"),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1,this.containerDomId="classification-container",this.textStringDomId="classification-string",this.containerHeight=20}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateString(e=this.classificationString_,t="#ffffff",i="#000000"){this.isClassificationContainerLoaded_||this.createContainer_(),""===e?((0,n.Gn)(this.containerDomId).style.display="none",this.updateTopMenuHeight_(!1)):((0,n.Gn)(this.containerDomId).style.display="flex",this.updateTopMenuHeight_(!0)),(0,n.Gn)(this.textStringDomId).innerHTML=e;const a=(0,n.Gn)(this.containerDomId);if(a.style.fontWeight="500",Et.isValidClassification(e)){const a=Et.getColors(e);t=a.backgroundColor,i=a.color}a.style.backgroundColor=t,a.style.color=i,this.classificationString_=e}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:this.uiManagerInit_.bind(this)})}createContainer_(){const e=document.createElement("div");e.innerHTML=l.b.html`<span id="${this.textStringDomId}"></span>`,e.id=this.containerDomId,e.style.cssText=`\n      height: ${this.containerHeight}px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      `,l.b.containerRoot.insertBefore(e,l.b.containerRoot.firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr?(this.createContainer_(),this.updateString()):f.x.log("Classification string is empty so not loading classification bar")}updateTopMenuHeight_(e){if(this.isExpanded_===e)return;if(!l.b.getPlugin(et.F))return;let t=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(t)&&(t=0),document.documentElement.style.setProperty("--top-menu-height",t+(e?this.containerHeight:-this.containerHeight)+"px"),this.isExpanded_=e}}new Tt;const It=i.p+"../img/socrates.png";class Nt extends u.c{constructor(){super(Nt.PLUGIN_NAME),this.collisionDataSrc="./tle/SOCRATES.json",this.selectSatIdOnCruncher_=null,this.collisionList_=[],this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=It,this.bottomIconLabel="Collisions",this.sideMenuElementName="socrates-menu",this.sideMenuElementHtml=l.b.html`
  <div id="socrates-menu" class="side-menu-parent start-hidden text-select">
    <div id="socrates-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible Collisions</h5>
        <table id="socrates-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=l.b.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:650},this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.parseCollisionData_()}}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:this.uiManagerFinal_.bind(this)}),l.b.register({event:o.RL.onCruncherMessage,cbName:this.PLUGIN_NAME,cb:()=>{var e;null!==this.selectSatIdOnCruncher_&&(null===(e=l.b.getPlugin(p.P))||void 0===e||e.selectSat(this.selectSatIdOnCruncher_),this.selectSatIdOnCruncher_=null)}})}uiManagerFinal_(){(0,n.Gn)(this.sideMenuElementName).addEventListener("click",(e=>{(0,v.QP)((()=>{var t;const i=e.target.parentElement;if(!i.classList.contains("socrates-object"))return;const a=null===(t=i.dataset)||void 0===t?void 0:t.row;null!==a&&this.eventClicked_(parseInt(a))}))}))}parseCollisionData_(){0===this.collisionList_.length&&fetch(this.collisionDataSrc).then((e=>{e.json().then((e=>{this.collisionList_=e,this.createTable_(),0===this.collisionList_.length&&f.x.warn("No collisions data found!")}))}))}eventClicked_(e){const t=new Date;l.b.getTimeManager().changeStaticOffset(new Date(this.collisionList_[e].toca).getTime()-t.getTime()-3e4),l.b.getMainCamera().isAutoPitchYawToTarget=!1;const i=this.collisionList_[e].sat1.padStart(5,"0"),a=this.collisionList_[e].sat2.padStart(5,"0");l.b.getUiManager().doSearch(`${i},${a}`);const s=l.b.getCatalogManager();this.selectSatIdOnCruncher_=s.sccNum2Id(parseInt(i))}createTable_(){try{const e=(0,n.Gn)("socrates-table");e.innerHTML="",Nt.createHeaders_(e),this.createBody_(e)}catch(e){f.x.warn("Error processing SOCRATES data!")}}createBody_(e){for(let t=0;t<this.collisionList_.length;t++)this.createRow_(e,t)}static createHeaders_(e){let t=e.insertRow();const i=["TOCA","#1","#2","Max Prob","Min Range (km)","Rel Speed (km/s)"];for(const e of i){const i=t.insertCell();i.appendChild(document.createTextNode(e)),i.setAttribute("style","text-decoration: underline")}}createRow_(e,t){const i=e.insertRow();return i.setAttribute("class","socrates-object link"),i.setAttribute("data-row",t.toString()),Nt.createCell_(i,this.collisionList_[t].toca.slice(0,19).replace("T"," ")),Nt.createCell_(i,this.collisionList_[t].sat1),Nt.createCell_(i,this.collisionList_[t].sat2),Nt.createCell_(i,this.collisionList_[t].maxProb.toFixed(3)),Nt.createCell_(i,this.collisionList_[t].minRng.toString()),Nt.createCell_(i,this.collisionList_[t].relSpeed.toFixed(2)),i}static createCell_(e,t){e.insertCell().appendChild(document.createTextNode(t))}}Nt.PLUGIN_NAME="collisions";const Gt=()=>{f.x.info("Cruncher failed to meet requirement after two tries!")},_t=(e,t,i,a=Gt,s=0)=>{e.addEventListener("message",(n=>{i(n.data)?t():s<5?_t(e,t,i,a,s++):a()}),{once:!0})},Pt=i.p+"../img/colors.png";class Rt extends u.c{constructor(){super(Rt.PLUGIN_NAME),this.bottomIconImg=Pt,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=l.b.html`
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
  </ul>`,this.rmbCallback=e=>{switch(e){case"colors-default-rmb":Rt.colorsMenuClick("default");break;case"colors-confidence-rmb":Rt.colorsMenuClick("confidence");break;case"colors-rcs-rmb":Rt.colorsMenuClick("rcs");break;case"colors-density-rmb":Rt.colorsMenuClick("neighbors");break;case"colors-sunlight-rmb":Rt.colorsMenuClick("sunlight");break;case"colors-country-rmb":Rt.colorsMenuClick("countries");break;case"colors-velocity-rmb":Rt.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":Rt.colorsMenuClick("elset-age")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("colors-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){const e=this.dataset.color;Rt.colorsMenuClick(e)}))}))}})}}Rt.PLUGIN_NAME="Color Menu",Rt.colorsMenuClick=e=>{var t;const i=l.b.getCatalogManager(),a=l.b.getColorSchemeManager(),s=l.b.getUiManager();switch(null===(t=l.b.getPlugin(p.P))||void 0===t||t.selectSat(-1),"sunlight"!==e&&i.satCruncher.postMessage({isSunlightView:!1,typ:xt.Bi.SUNLIGHT_VIEW}),e){case"default":ht.j.change("default"),a.setColorScheme(a.default,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"confidence":ht.j.change("confidence"),a.setColorScheme(a.confidence,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"velocity":ht.j.change("velocity"),a.setColorScheme(a.velocity,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"sunlight":i.satCruncher.postMessage({isSunlightView:!0,typ:xt.Bi.SUNLIGHT_VIEW}),ht.j.change("sunlight"),s.colorSchemeChangeAlert(a.sunlight),_t(i.satCruncher,(()=>{a.setColorScheme(a.sunlight,!0)}),(e=>e.satInSun));break;case"near-earth":ht.j.change("near"),a.setColorScheme(a.leo,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"deep-space":ht.j.change("deep"),a.setColorScheme(a.geo,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"elset-age":(0,v.QP)((()=>{ht.j.change("ageOfElset"),a.setColorScheme(a.ageOfElset,!0),s.colorSchemeChangeAlert(a.currentColorScheme)}));break;case"lost-objects":(0,n.Gn)("search").value="",(0,v.QP)((()=>{settingsManager.lostSatStr="",a.setColorScheme(a.lostobjects,!0),(0,n.Gn)("search").value=settingsManager.lostSatStr,s.colorSchemeChangeAlert(a.currentColorScheme),s.doSearch((0,n.Gn)("search").value)}));break;case"rcs":ht.j.change("rcs"),a.setColorScheme(a.rcs,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"smallsats":ht.j.change("small"),a.setColorScheme(a.smallsats,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"neighbors":ht.j.change("neighbors"),a.setColorScheme(a.neighbors,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"countries":ht.j.change("countries"),null!==l.b.getGroupsManager().selectedGroup?a.setColorScheme(a.groupCountries,!0):a.setColorScheme(a.countries,!0),s.colorSchemeChangeAlert(a.currentColorScheme)}l.b.getUiManager().hideSideMenus()};const Ot=new Rt;var Dt=i(3934);class Ft extends u.c{constructor(){super(Ft.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconCallback=()=>{if(this.verifySatelliteSelected()&&this.isMenuButtonActive){const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);(0,n.Gn)(`${this.formPrefix_}-scc`).value=e.sccNum}},this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=it,this.bottomIconLabel="Debris Screening",this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=l.b.html`
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
`,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.helpTitle="Debris Screening",this.helpBody=l.b.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=l.b.html`<img src="${it}" />
  `,this.selectSatManager_=l.b.getPlugin(p.P)}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)(`${this.sideMenuElementName}-form`).addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onFormSubmit()))})),(0,n.Gn)(`${this.sideMenuElementName}-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onVisClick()))})),(0,n.Gn)(`${this.sideMenuElementName}-clear-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,v.QP)((()=>Ft.onClearVisClick()))}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled()}})}onVisClick(){const e=parseFloat((0,n.Gn)(`${this.formPrefix_}-u`).value),t=parseFloat((0,n.Gn)(`${this.formPrefix_}-v`).value),i=parseFloat((0,n.Gn)(`${this.formPrefix_}-w`).value);l.b.getScene().searchBox.setCubeSize(e,t,i)}static onClearVisClick(){l.b.getScene().searchBox.setCubeSize(0,0,0)}onFormSubmit(){let e=l.b.getCatalogManager().sccNum2Id(parseInt((0,n.Gn)(`${this.formPrefix_}-scc`).value));const t=parseFloat((0,n.Gn)(`${this.formPrefix_}-u`).value),i=parseFloat((0,n.Gn)(`${this.formPrefix_}-v`).value),a=parseFloat((0,n.Gn)(`${this.formPrefix_}-w`).value),s=parseFloat((0,n.Gn)(`${this.formPrefix_}-time`).value),r=l.b.getCatalogManager().getObject(e,o.C_.SKIP_POS_VEL),c=l.b.getCatalogManager().objectCache.filter((e=>{if(!e.isSatellite())return!1;const t=e;return!(t.perigee>r.apogee||r.perigee>t.apogee)})).map((e=>e.id));let d=0,u=[];for(let e=0;e<60*s;e++){d=1e3*e*60;const s=l.b.getTimeManager().getOffsetTimeObj(d),{m:n}=nt.$.calculateTimeVariables(s,r.satrec),p=y.t2.propagate(r.satrec,n);for(let e=0;e<c.length;e++){const n=l.b.getCatalogManager().getObject(c[e],o.C_.SKIP_POS_VEL);if(!(null==n?void 0:n.isSatellite()))continue;const r=n,{m:d}=nt.$.calculateTimeVariables(s,r.satrec),h=y.t2.propagate(r.satrec,d);if(!h){c.splice(e,1);break}const g=At.x.sat2ric({position:p.position,velocity:p.velocity},{position:h.position,velocity:h.velocity});if(Math.abs(g.position[0])<t&&Math.abs(g.position[1])<i&&Math.abs(g.position[2])<a){console.log(`${r.sccNum} at ${new Date(s)}`),u.push(r.sccNum),c.splice(e,1);break}}}u=u.filter(((e,t,i)=>i.indexOf(e)===t));let p=u.join(",");p=p.replace(/,\s*$/u,""),l.b.getUiManager().doSearch(p)}}Ft.PLUGIN_NAME="Debris Screening";var Ut=i(2809);const Bt=i.p+"../img/gps.png";var zt=i(8687),$t=i.n(zt),Ht=i(3268);class jt{static calculateDops(e){let t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},i=e.length;if(i<4)return t;const a=$t().rep([i,4],0);for(let t=1;t<=i;t++){const{az:i,el:s}=e[t-1],n=[Math.cos(s*y.qW)*Math.sin(i*y.qW),Math.cos(s*y.qW)*Math.cos(i*y.qW),Math.sin(s*y.qW),1];$t().setBlock(a,[t-1,0],[t-1,3],[n])}const s=$t().dot($t().transpose(a),a),n=$t().inv(s),o=Math.sqrt(n[0][0]+n[1][1]+n[2][2]),l=Math.sqrt(n[0][0]+n[1][1]),r=Math.sqrt(n[0][0]+n[1][1]+n[2][2]+n[3][3]),c=Math.sqrt(n[2][2]),d=Math.sqrt(n[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,i,a,s,n=10){if(void 0===i||void 0===a)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};null!=s||(s=0);const{gmst:o}=nt.$.calculateTimeVariables(e);let l=[];return t.forEach((e=>{const t=(0,y.yv)({lon:a,lat:i,alt:s},(0,y.eV)(e.position,o)),r={az:t.az,el:t.el};r.el>n&&l.push(r)})),jt.calculateDops(l)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");let t=(0,n.Gn)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let i=t.insertRow(),a=i.insertCell();a.appendChild(document.createTextNode("Time"));let s=i.insertCell();s.appendChild(document.createTextNode("HDOP"));let o=i.insertCell();o.appendChild(document.createTextNode("PDOP"));let l=i.insertCell();l.appendChild(document.createTextNode("GDOP"));for(let n of e)i=t.insertRow(),a=i.insertCell(),a.appendChild(document.createTextNode((0,Ht.v)(n.time,"isoDateTime",!0))),s=i.insertCell(),s.appendChild(document.createTextNode(n.dops.hdop)),o=i.insertCell(),o.appendChild(document.createTextNode(n.dops.pdop)),l=i.insertCell(),l.appendChild(document.createTextNode(n.dops.gdop))}static getDopsList(e,t,i,a,s,n){let o=[];for(let l=0;l<1440;l++){const r=e(60*l*y.s9);let c=jt.getDops(r,t,i,a,s,n);o.push({time:r,dops:c})}return o}}class Vt extends u.c{constructor(){super(Vt.PLUGIN_NAME),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=Bt,this.bottomIconCallback=()=>{this.isMenuButtonActive&&(0,v.QP)(Vt.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=l.b.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
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
`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=l.b.getInputManager().mouse.latLon;const t=l.b.getInputManager().mouse.dragPosition;(void 0===e||isNaN(e.lat)||isNaN(e.lon))&&(console.debug("latLon undefined!"),e=At.x.eci2lla({x:t[0],y:t[1],z:t[2]},l.b.getTimeManager().simulationTimeObj));const i=Vt.getGpsSats(l.b.getCatalogManager(),l.b.getGroupsManager()),a=jt.getDops(l.b.getTimeManager().simulationTimeObj,i,e.lat,e.lon,0,settingsManager.gpsElevationMask);l.b.getUiManager().toast(`HDOP: ${a.hdop}<br/>VDOP: ${a.vdop}<br/>PDOP: ${a.pdop}<br/>GDOP: ${a.gdop}<br/>TDOP: ${a.tdop}`,"normal",!0)}break;case"dops-24dops-rmb":{const e=l.b.getInputManager().mouse.latLon;if(this.isMenuButtonActive){(0,v.QP)(Vt.updateSideMenu),this.setBottomIconToEnabled();break}(0,n.Gn)("dops-lat").value=e.lat.toFixed(3),(0,n.Gn)("dops-lon").value=e.lon.toFixed(3),(0,n.Gn)("dops-alt").value="0",(0,n.Gn)("dops-el").value=settingsManager.gpsElevationMask.toString(),l.b.runEvent(o.RL.bottomMenuClick,this.bottomIconElementName)}}}}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("dops-form").addEventListener("submit",(e=>{e.preventDefault(),Vt.updateSideMenu()}))}})}static updateSideMenu(){const e=l.b.getGroupsManager(),t=l.b.getCatalogManager(),i=l.b.getTimeManager(),a=parseFloat((0,n.Gn)("dops-lat").value),s=parseFloat((0,n.Gn)("dops-lon").value),o=parseFloat((0,n.Gn)("dops-alt").value),r=parseFloat((0,n.Gn)("dops-el").value);settingsManager.gpsElevationMask=r;const c=Vt.getGpsSats(t,e),d=jt.getDopsList((e=>i.getOffsetTimeObj(e)),c,a,s,o,r);jt.updateDopsTable(d)}static getGpsSats(e,t){var i,a;const s=null!==(i=(a=t.groupList).GPSGroup)&&void 0!==i?i:a.GPSGroup=t.createGroup(r.Y.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),n=[];return s.ids.forEach((t=>{const i=e.getSat(t);i&&n.push(i)})),n}}Vt.PLUGIN_NAME="DOPs Plugin";const Kt=new Vt,Wt=i.p+"../img/edit.png";class Yt extends u.c{constructor(){super(Yt.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=l.b.html`The Edit Satellite Menu is used to edit the satellite data.
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
              <input disabled value="AAAAA" id="${Yt.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${Yt.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${Yt.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${Yt.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${Yt.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Yt.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${Yt.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Yt.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${Yt.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${Yt.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${Yt.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${Yt.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${Yt.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Yt.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${Yt.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Yt.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${Yt.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${Yt.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${Yt.elementPrefix}-per" class="active">Period</label>
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
        <div id="${Yt.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=Wt,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.populateSideMenu_()},this.dragOptions={isDraggable:!0},this.isRmbOnSat=!0,this.rmbMenuOrder=2,this.rmbL1ElementName="edit-rmb",this.rmbL1Html=l.b.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Edit Sat &#x27A4;</a></li>`,this.rmbCallback=(e,t)=>{if(null==t)throw new Error("clickedSat is undefined");switch(e){case"set-pri-sat-rmb":this.selectSatManager_.selectSat(t);break;case"set-sec-sat-rmb":this.selectSatManager_.setSecondarySat(t);break;case"edit-sat-rmb":this.selectSatManager_.selectSat(t),this.isMenuButtonActive||l.b.getUiManager().bottomIconPress({id:this.bottomIconElementName})}},this.rmbL2ElementName="edit-rmb-menu",this.rmbL2Html=l.b.html`
    <ul class='dropdown-contents'>
      <li id="set-pri-sat-rmb"><a href="#">Set as Primary Sat</a></li>
      <li id="set-sec-sat-rmb"><a href="#">Set as Secondary Sat</a></li>
      <li id="edit-sat-rmb"><a href="#">Edit Satellite</a></li>
    </ul>`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"editSat",cb:()=>{(0,n.Gn)("editSat-newTLE").addEventListener("click",this.editSatNewTleClick_.bind(this)),(0,n.Gn)("editSat").addEventListener("submit",(function(e){e.preventDefault(),Yt.editSatSubmit()})),(0,n.Gn)(`${Yt.elementPrefix}-per`).addEventListener("change",(function(){const e=(0,n.Gn)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,n.Gn)("es-meanmo").value=t.toFixed(8)})),(0,n.Gn)(`${Yt.elementPrefix}-meanmo`).addEventListener("change",(function(){const e=(0,n.Gn)(`${Yt.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,n.Gn)(`${Yt.elementPrefix}-per`).value=t})),(0,n.Gn)("editSat-save").addEventListener("click",Yt.editSatSaveClick),(0,n.Gn)("editSat-open").addEventListener("click",(function(){l.b.getSoundManager().play(h.p.MENU_BUTTON),(0,n.Gn)("editSat-file").click()})),(0,n.Gn)("editSat-file").addEventListener("change",(function(e){window.FileReader&&(Yt.doReaderActions_(e),e.preventDefault())})),(0,n.Gn)(`${Yt.elementPrefix}-error`).addEventListener("click",(function(){(0,n.Gn)(`${Yt.elementPrefix}-error`).style.display="none"}))}})}addJs(){super.addJs(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e||(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}})}static doReaderActions_(e){try{const t=new FileReader;t.onload=Yt.readerOnLoad_,t.readAsText(e.target.files[0])}catch(e){f.x.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad_(e){if(2!==e.target.readyState)return;if(e.target.error)return void f.x.warn("Error while reading file!");const t=l.b.getTimeManager(),i=l.b.getOrbitManager(),a=l.b.getUiManager(),s=JSON.parse(e.target.result),n=parseInt(wt.J.pad0(s.tle1.substr(2,5).trim(),5)),o=l.b.getCatalogManager().sccNum2Sat(n);let r;try{r=y.t2.createSatrec(s.tle1,s.tle2)}catch(e){return void f.x.error(e,"edit-sat.ts","Error creating satellite record!")}nt.$.altitudeCheck(r,t.simulationTimeObj)>1?(l.b.getCatalogManager().satCruncher.postMessage({typ:xt.Bi.SAT_EDIT,id:o.id,active:!0,tle1:s.tle1,tle2:s.tle2}),i.changeOrbitBufferData(o.id,s.tle1,s.tle2),o.active=!0):a.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}populateSideMenu_(){const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;(0,n.Gn)(`${Yt.elementPrefix}-scc`).value=t.sccNum;const i=t.inclination.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Yt.elementPrefix}-inc`).value=i,(0,n.Gn)(`${Yt.elementPrefix}-year`).value=t.tle1.substr(18,2),(0,n.Gn)(`${Yt.elementPrefix}-day`).value=t.tle1.substr(20,12),(0,n.Gn)(`${Yt.elementPrefix}-meanmo`).value=t.tle2.substr(52,11),(0,n.Gn)(`${Yt.elementPrefix}-per`).value=(1440/parseFloat(t.tle2.substr(52,11))).toFixed(4);const a=t.rightAscension.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Yt.elementPrefix}-rasc`).value=a,(0,n.Gn)(`${Yt.elementPrefix}-ecen`).value=t.eccentricity.toFixed(7).substr(2,7);const s=t.argOfPerigee.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Yt.elementPrefix}-argPe`).value=wt.J.pad0(s,8),(0,n.Gn)(`${Yt.elementPrefix}-meana`).value=t.tle2.substr(43,8)}editSatNewTleClick_(){(0,v.QP)(this.editSatNewTleClickFadeIn_.bind(this))}editSatNewTleClickFadeIn_(){const e=l.b.getTimeManager(),t=l.b.getUiManager();try{const i=l.b.getCatalogManager().sccNum2Id(parseInt((0,n.Gn)(`${Yt.elementPrefix}-scc`).value)),a=l.b.getCatalogManager().getObject(i);if(!a.isSatellite())return;const s=a,r=At.x.eci2lla(s.position,e.simulationTimeObj);let c=r.lon,d=r.lat,u=r.alt;const p=nt.$.getDirection(s,e.simulationTimeObj);"Error"===p&&t.toast("Cannot calculate direction of satellite. Try again later.","caution");const h=e.simulationTimeObj,g=Lt.l.currentEpoch(h);let m;s.tle1=s.tle1.substr(0,18)+g[0]+g[1]+s.tle1.substr(32),l.b.getMainCamera().isAutoPitchYawToTarget=!1,m=s.apogee-s.perigee<300?new Ct(s,d,c,p,h).rotateOrbitToLatLon():new Ct(s,d,c,p,h,u).rotateOrbitToLatLon();const b=m[0],v=m[1];if("Error"===b)return void t.toast(`${v}`,"critical",!0);l.b.getCatalogManager().satCruncher.postMessage({typ:xt.Bi.SAT_EDIT,id:i,tle1:b,tle2:v}),l.b.getOrbitManager().changeOrbitBufferData(i,b,v);const f=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!f.isSatellite())return;const S=f;(0,n.Gn)(`${Yt.elementPrefix}-scc`).value=S.sccNum;const M=S.inclination.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Yt.elementPrefix}-inc`).value=wt.J.pad0(M,8),(0,n.Gn)(`${Yt.elementPrefix}-year`).value=S.tle1.substr(18,2),(0,n.Gn)(`${Yt.elementPrefix}-day`).value=S.tle1.substr(20,12),(0,n.Gn)(`${Yt.elementPrefix}-meanmo`).value=S.tle2.substr(52,11),(0,n.Gn)(`${Yt.elementPrefix}-per`).value=(1440/parseFloat(S.tle2.substr(52,11))).toFixed(4);const y=S.rightAscension.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Yt.elementPrefix}-rasc`).value=y,(0,n.Gn)(`${Yt.elementPrefix}-ecen`).value=S.eccentricity.toFixed(7).substr(2,7);const w=S.argOfPerigee.toFixed(4).padStart(8,"0");(0,n.Gn)(`${Yt.elementPrefix}-argPe`).value=w,(0,n.Gn)(`${Yt.elementPrefix}-meana`).value=S.tle2.substr(43,8)}catch(e){f.x.warn(e)}}static editSatSubmit(){l.b.getSoundManager().play(h.p.MENU_BUTTON);const e=l.b.getCatalogManager(),t=l.b.getTimeManager(),i=l.b.getUiManager();(0,n.Gn)(`${Yt.elementPrefix}-error`).style.display="none";const a=(0,n.Gn)(`${Yt.elementPrefix}-scc`).value,s=e.sccNum2Id(parseInt(a));null===s&&f.x.info("Not a Real Satellite");const r=e.getObject(s,o.C_.EXTRA_ONLY);if(!r.isSatellite())return;const c=r,d=c.tle1.substr(9,8);let u=(0,n.Gn)(`${Yt.elementPrefix}-inc`).value,p=(0,n.Gn)(`${Yt.elementPrefix}-meanmo`).value,g=(0,n.Gn)(`${Yt.elementPrefix}-rasc`).value;const m=(0,n.Gn)(`${Yt.elementPrefix}-ecen`).value;let b=(0,n.Gn)(`${Yt.elementPrefix}-argPe`).value,v=(0,n.Gn)(`${Yt.elementPrefix}-meana`).value;const S=(0,n.Gn)(`${Yt.elementPrefix}-year`).value,M=(0,n.Gn)(`${Yt.elementPrefix}-day`).value,{tle1:w,tle2:C}=y.L.createTle({sat:c,inc:u,meanmo:p,rasc:g,argPe:b,meana:v,ecen:m,epochyr:S,epochday:M,intl:d,scc:a});let L;try{L=y.t2.createSatrec(w,C)}catch(e){return void f.x.error(e,"edit-sat.ts","Error creating satellite record!")}nt.$.altitudeCheck(L,t.simulationTimeObj)>1?(e.satCruncher.postMessage({typ:xt.Bi.SAT_EDIT,id:s,active:!0,tle1:w,tle2:C}),l.b.getOrbitManager().changeOrbitBufferData(s,w,C),c.active=!0,c.satrec=null):i.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static editSatSaveClick(e){const t=l.b.getCatalogManager();l.b.getSoundManager().play(h.p.EXPORT);try{const e=(0,n.Gn)(`${Yt.elementPrefix}-scc`).value,i=t.sccNum2Id(parseInt(e)),a=t.getObject(i,o.C_.EXTRA_ONLY),s={tle1:a.tle1,tle2:a.tle2},l=JSON.stringify(s),r=new Blob([l],{type:"text/plain;charset=utf-8"});(0,lt.saveAs)(r,e+".tle")}catch(e){}e.preventDefault()}}Yt.PLUGIN_NAME="Edit Sat",Yt.elementPrefix="es";class Xt{constructor(){this.PLUGIN_NAME="Gamepad",this.deadzone=.55,this.buttonsPressedHistory=[],this.buttonsPressed=[]}init(){window.addEventListener("gamepadconnected",(e=>{settingsManager.cruncherReady?this.initializeGamepad(e.gamepad):l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>this.initializeGamepad(e.gamepad)})})),window.addEventListener("gamepaddisconnected",(()=>{l.b.getUiManager().toast("Gamepad disconnected","critical"),this.currentController=null}))}initializeGamepad(e){l.b.getUiManager().toast("Gamepad connected","normal"),this.currentController||l.b.register({event:o.RL.updateLoop,cbName:this.PLUGIN_NAME,cb:this.updateGamepad.bind(this)}),this.currentController=e}updateGamepad(e){null!=e||(e=0);const t=Xt.getController(e);null!==t&&(this.currentController=t,this.updateZoom_(),this.updateLeftStick_(),this.updateRightStick_(),this.updateButtons_())}updateButtons_(){this.currentController.buttons.forEach(((e,t)=>{if(e.pressed&&!this.buttonsPressed[t])switch(this.buttonsPressed[t]=!0,this.buttonsPressedHistory.push(t),this.buttonsPressedHistory.length>8&&this.buttonsPressedHistory.shift(),t){case 0:this.btnA_();break;case 1:this.btnB_();break;case 2:this.btnX_();break;case 3:this.btnY_();break;case 4:this.btnLeftBumper();break;case 5:this.btnRightBumper_();break;case 8:this.btnHome_();break;case 9:this.btnStart_();break;case 10:this.btnLeftStick_();break;case 11:this.btnRightStick_();break;case 12:this.btnDpadUp_();break;case 13:this.btnDpadDown_();break;case 14:this.btnDpadLeft_();break;case 15:this.btnDpadRight_();break;case 16:this.btnXbox()}else!e.pressed&&this.buttonsPressed[t]&&(this.buttonsPressed[t]=!1)}))}btnA_(){var e;settingsManager.isLimitedGamepadControls||(console.log("A"),null===(e=l.b.getPlugin(p.P))||void 0===e||e.selectSat(l.b.getHoverManager().hoveringSat))}btnB_(){var e;settingsManager.isLimitedGamepadControls||(console.log("B"),null===(e=l.b.getPlugin(p.P))||void 0===e||e.selectSat(-1),l.b.getMainCamera().zoomTarget=.8)}btnX_(){settingsManager.isLimitedGamepadControls||(console.log("X"),l.b.getMainCamera().autoRotate())}btnY_(){console.log("Y")}btnLeftBumper(){if(settingsManager.isLimitedGamepadControls)return;console.log("Left Bumper");const e=l.b.getPlugin(p.P);if(!e)return;const t=e.selectedSat-1;if(t>=0)e.selectSat(t);else{const t=l.b.getCatalogManager().getActiveSats(),i=t[t.length-1].id;e.selectSat(i)}}btnRightBumper_(){if(settingsManager.isLimitedGamepadControls)return;console.log("Right Bumper");const e=l.b.getPlugin(p.P);if(!e)return;const t=l.b.getCatalogManager().getActiveSats(),i=t[t.length-1].id,a=e.selectedSat+1;a<=i?e.selectSat(a):e.selectSat(0)}btnHome_(){settingsManager.isLimitedGamepadControls||(console.log("Home"),l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,l.b.getMainCamera().ftsRotateReset=!0)}btnXbox(){console.log("Xbox Button")}btnStart_(){console.log("Start")}btnLeftStick_(){console.log("Left Stick")}btnRightStick_(){console.log("Right Stick")}btnDpadUp_(){console.log("D-Pad Up"),settingsManager.isAutoRotateD=!1,settingsManager.isAutoRotateU=!settingsManager.isAutoRotateU,l.b.getMainCamera().autoRotate(!0)}btnDpadDown_(){console.log("D-Pad Down"),settingsManager.isAutoRotateU=!1,settingsManager.isAutoRotateD=!settingsManager.isAutoRotateD,l.b.getMainCamera().autoRotate(!0)}btnDpadLeft_(){console.log("D-Pad Left"),settingsManager.isAutoRotateR=!1,settingsManager.isAutoRotateL=!settingsManager.isAutoRotateL,l.b.getMainCamera().autoRotate(!0)}btnDpadRight_(){console.log("Right"),settingsManager.isAutoRotateL=!1,settingsManager.isAutoRotateR=!settingsManager.isAutoRotateR,l.b.getMainCamera().autoRotate(!0)}updateZoom_(){const e=this.currentController.buttons[6].value,t=this.currentController.buttons[7].value;if(0===e&&0===t)return;const i=l.b.getRenderer();let a=l.b.getMainCamera().zoomLevel();switch(l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:a+=e/500*i.dt,a-=t/500*i.dt,l.b.getMainCamera().zoomTarget=a,l.b.getMainCamera().camZoomSnappedOnSat=!1,l.b.getMainCamera().isAutoPitchYawToTarget=!1,a<l.b.getMainCamera().zoomLevel()?l.b.getMainCamera().isZoomIn=!0:l.b.getMainCamera().isZoomIn=!1;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:0!==e&&(l.b.getMainCamera().fpsVertSpeed+=Math.pow(2*e,3)*i.dt*settingsManager.cameraMovementSpeed),0!==t&&(l.b.getMainCamera().fpsVertSpeed-=Math.pow(2*t,3)*i.dt*settingsManager.cameraMovementSpeed)}}updateLeftStick_(){const e=this.currentController.axes[0],t=this.currentController.axes[1];if(e>this.deadzone||e<-this.deadzone||t>this.deadzone||t<-this.deadzone){l.b.getMainCamera().autoRotate(!1);const i=l.b.getRenderer();switch(settingsManager.lastGamepadMovement=Date.now(),l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:l.b.getMainCamera().camAngleSnappedOnSat=!1,l.b.getMainCamera().isAutoPitchYawToTarget=!1,l.b.getMainCamera().camPitchSpeed-=Math.pow(t,3)/200*i.dt*settingsManager.cameraMovementSpeed,l.b.getMainCamera().camYawSpeed+=Math.pow(e,3)/200*i.dt*settingsManager.cameraMovementSpeed;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:(t>this.deadzone||t<-this.deadzone)&&(l.b.getMainCamera().fpsForwardSpeed=-Math.pow(t,3)*i.dt),(e>this.deadzone||e<-this.deadzone)&&(l.b.getMainCamera().fpsSideSpeed=Math.pow(e,3)*i.dt)}}}updateRightStick_(){if(settingsManager.isLimitedGamepadControls)return;const e=this.currentController.axes[2],t=this.currentController.axes[3],i=l.b.getRenderer();if(l.b.getMainCamera().isLocalRotateOverride=!1,t>this.deadzone||t<-this.deadzone||e>this.deadzone||e<-this.deadzone)switch(l.b.getMainCamera().autoRotate(!1),l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:l.b.getMainCamera().isLocalRotateOverride=!0,l.b.getMainCamera().localRotateDif.pitch=200*-t,l.b.getMainCamera().localRotateDif.yaw=200*-e;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:l.b.getMainCamera().camPitchSpeed+=t/100*i.dt*settingsManager.cameraMovementSpeed,l.b.getMainCamera().camYawSpeed-=e/100*i.dt*settingsManager.cameraMovementSpeed}}vibrate(e){this.currentController&&this.currentController.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})}static getController(e=0){const t=navigator.getGamepads().filter((e=>null!==e));return t.length>e&&null!==t[e]?t[e]:null}}const Jt=new Xt;var qt=i(2238);const Qt=i.p+"../img/calendar.png";class Zt extends u.c{constructor(){super("Launch Menu"),this.bottomIconElementName="menu-launches",this.bottomIconImg=Qt,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonActive){settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3);const e=(new Date).getFullYear();(0,qt.Us)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonActive&&(this.isMenuButtonActive=!1,(0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const ei=new Zt,ti=i.p+"../img/rocket.png";var ii=i(8568);class ai extends u.c{constructor(){super(ai.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconCallback=()=>{if(!this.isMenuButtonActive)return;if(!this.verifySatelliteSelected())return;const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);(0,n.Gn)("nl-scc").value=e.sccNum,(0,n.Gn)("nl-inc").value=wt.J.pad0(e.inclination.toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=ti,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=l.b.html`
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
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=l.b.getTimeManager(),i=l.b.getCatalogManager(),a=l.b.getUiManager(),s=l.b.getColorSchemeManager();(0,v.wU)();const o=(0,n.Gn)("nl-scc").value,r=i.sccNum2Id(parseInt(o));let c=i.getObject(r);const d=(0,n.Gn)("nl-updown").value,u=(0,n.Gn)("nl-facility").value;let p,g;if(!i.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in i.launchSites)i.launchSites[e].name===u&&(p=i.launchSites[e].lat,g=i.launchSites[e].lon);g>180&&(g-=360);const m=new Date,b=new Date(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate(),0,0,0);b.setUTCHours(0);const S=t.staticOffset;t.changeStaticOffset(b.getTime()-m.getTime()),s.setColorScheme(settingsManager.currentColorScheme,!0),l.b.getMainCamera().isAutoPitchYawToTarget=!1;const M=t.simulationTimeObj,w=new Ct(c,p,g,d,M).rotateOrbitToLatLon(),C=w[0],L=w[1];if("Error"===C||69!==C.length||69!==L.length)return"Error"===C?a.toast(`Failed to Create TLE: ${L}`,"critical"):69!==C.length?a.toast(`Invalid TLE1 Created: length is not 69 - ${C}`,"critical"):69!==L.length&&a.toast(`Invalid TLE2 Created: length is not 69 - ${L}`,"critical"),t.changeStaticOffset(S),this.isDoingCalculations=!1,void(0,v.Zk)();let A;a.toast("Time is now relative to launch time.","standby"),null===(e=l.b.getSoundManager())||void 0===e||e.play(h.p.LIFT_OFF),c.satrec=null;try{A=y.t2.createSatrec(C,L)}catch(e){return void f.x.error(e,"new-launch.ts","Error creating satellite record!")}nt.$.altitudeCheck(A,M)>1?(i.satCruncher.postMessage({typ:xt.Bi.SAT_EDIT,id:r,active:!0,TLE1:C,TLE2:L}),l.b.getOrbitManager().changeOrbitBufferData(r,C,L)):a.toast("Failed Altitude Test - Try a Different Satellite!","critical"),_t(i.satCruncher,(()=>{this.isDoingCalculations=!1,(0,v.Zk)(),l.b.getUiManager().searchManager.doSearch(c.sccNum)}),(e=>void 0!==e.satPos),(()=>{this.isDoingCalculations=!1,(0,v.Zk)(),a.toast("Cruncher failed to meet requirement after multiple tries! Is this launch even possible?","critical")}))},this.selectSatManager_=l.b.getPlugin(p.P)}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)(this.sideMenuElementName+"-form").addEventListener("change",(()=>{const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);e.isSatellite()&&this.preValidate_(e)}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(null==e?void 0:e.isSatellite()){const t=e;(0,n.Gn)("nl-scc").value=t.sccNum,(0,n.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.preValidate_(t)}else(0,n.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0}})}preValidate_(e){const t=(0,n.Gn)("nl-facility").value,i=ii.E[t].lat;let a=e.inclination;a=a>90?180-a:a;const s=(0,n.Gn)(this.sideMenuElementName+"-submit");a<i?(s.disabled=!0,s.textContent="Inclination Too Low!"):(s.disabled=!1,s.textContent="Create Launch Nominal ▶")}}ai.PLUGIN_NAME="New Launch";const si=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown",ni=i.p+"../img/calendar2.png";class oi extends u.c{constructor(){super(oi.PLUGIN_NAME),this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.showTable()},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=ni,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=l.b.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=l.b.html`
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
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),i.e(246).then(i.bind(i,6246)).then((e=>e))}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("export-launch-info").addEventListener("click",(()=>{l.b.getSoundManager().play(h.p.EXPORT),(0,ot.Eb)(this.launchList,"launchList")}))}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then((e=>e.json())).then((e=>this.processData(e))).catch((()=>f.x.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`))).finally((()=>{const e=(0,n.Gn)("nextLaunch-table");e&&""==e.innerHTML&&(oi.initTable(e,this.launchList),(0,n.Gn)("nextLaunch-table").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(0,qt.Us)(e.href)}))})))}))}}processData(e){var t,i,a,s,n,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(i=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===i?void 0:i.name.split(",",1)[0],c.locationURL=null===(a=r.pad)||void 0===a?void 0:a.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(s=r.rocket)||void 0===s?void 0:s.configuration.full_name,c.rocketConfig=null===(n=r.rocket)||void 0===n?void 0:n.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Launch Window")),i.setAttribute("style","text-decoration: underline; width: 120px;");const a=t.insertCell();a.appendChild(document.createTextNode("Mission")),a.setAttribute("style","text-decoration: underline; width: 140px;");const s=t.insertCell();s.appendChild(document.createTextNode("Location")),s.setAttribute("style","text-decoration: underline");const n=t.insertCell();n.appendChild(document.createTextNode("Agency")),n.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var i,a,s,n,o,l;oi.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),u=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":(0,Ht.v)(t[r].windowStart,"isoDateTime",!0)+" UTC";d.appendChild(document.createTextNode(u));const p=c.insertCell(),h=(null===(i=t[r])||void 0===i?void 0:i.missionName)||"Unknown",g=(null===(a=t[r])||void 0===a?void 0:a.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${si(h,15)}</a>`:`${si(h,15)}`,m=(null===(s=t[r])||void 0===s?void 0:s.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;p.innerHTML=`${g}<br />${m}`;const b=(null===(n=t[r])||void 0===n?void 0:n.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${si(t[r].location,25)}</a>`:`${si(t[r].location,25)}`;c.insertCell().innerHTML=b;const v=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${si(t[r].agency,30)}</a>`:`${si(t[r].agency,30)}`;c.insertCell().innerHTML=v,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}oi.PLUGIN_NAME="Next Launches";const li=i.p+"../img/day-night.png";class ri extends u.c{constructor(){super("Night Toggle"),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=li}addJs(){super.addJs(),l.b.register({event:o.RL.nightToggle,cbName:this.PLUGIN_NAME,cb:(e,t,i)=>{this.isMenuButtonActive?e.bindTexture(e.TEXTURE_2D,i):e.bindTexture(e.TEXTURE_2D,t)}})}}var ci=i(9974);class di extends u.c{constructor(){super(di.PLUGIN_NAME),this.dependencies=[ci.s.PLUGIN_NAME,p.P.PLUGIN_NAME],this.doOnce=!1,this.isReferenceSatsActive=!1,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e&&(this.doOnce||((0,n.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
                <div id="orbit-references-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,n.Gn)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0))}})}orbitReferencesLinkClick(){const e=l.b.getCatalogManager(),t=e.getSat(this.selectSatManager_.selectedSat);if(!t)return;let i="";const a=t.eccentricity.toString(),s=t.rightAscension.toString(),n=t.argOfPerigee.toString(),o=t.inclination.toString(),r=t.meanMotion.toString(),c=t.epochYear.toString(),d=t.epochDay.toString(),u=t.intlDes,p=t.sccNum,h=1440/parseFloat(r);let g=0;for(let l=0;l<360;l++){const m=g.toFixed(4).padStart(8,"0"),{tle1:b,tle2:v}=y.L.createTle({sat:t,inc:o,meanmo:r,rasc:s,argPe:n,meana:m,ecen:a,epochyr:c,epochday:d,intl:u,scc:p}),f=y.Ad.convert6DigitToA5((ft.g.ANALYST_START_ID+l).toString().padStart(5,"0")),S=e.sccNum2Id(f),M=e.addAnalystSat(b,v,S,f);if(M&&(i+=M.sccNum.toString()+","),g+=360/h*4,g>=360)break}i=i.slice(0,-1),l.b.getUiManager().doSearch(i),this.isReferenceSatsActive=!0}}di.PLUGIN_NAME="Orbit References";class ui{static getEcfOfCurrentOrbit(e,t){return nt.$.getEcfOfCurrentOrbit(e,t,(e=>l.b.getTimeManager().getOffsetTimeObj(e)))}static getEciOfCurrentOrbit(e,t){return nt.$.getEciOfCurrentOrbit(e,t,(e=>l.b.getTimeManager().getOffsetTimeObj(e)))}static getLlaOfCurrentOrbit(e,t){return nt.$.getLlaOfCurrentOrbit(e,t,(e=>l.b.getTimeManager().getOffsetTimeObj(e)))}static getRicOfCurrentOrbit(e,t,i,a=1){return nt.$.getRicOfCurrentOrbit(e,t,i,(e=>l.b.getTimeManager().getOffsetTimeObj(e)),a)}}new ui;const pi=i.p+"../img/scatter-plot3.png";var hi=i(8523);i(114);class gi extends u.c{constructor(){super(gi.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconElementName="ecf-plots-bottom-icon",this.bottomIconLabel="ECF Plots",this.bottomIconImg=pi,this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.createPlot(this.getPlotData(),(0,n.Gn)(this.plotCanvasId))},this.plotCanvasId="plot-analysis-chart-ecf",this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="ECF Plots Menu",this.helpBody=l.b.html`
  <p>
    The ECF Plots menu allows you to plot the position of a satellite in Earth Centered Fixed (ECF) coordinates.
    This is useful for visualizing the position of a satellite in space.
  </p>`,this.sideMenuElementName="ecf-plots-menu",this.sideMenuElementHtml=l.b.html`
  <div id="ecf-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`,this.dragOptions={minWidth:500,maxWidth:1200},this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled(),this.isMenuButtonActive&&(e?this.createPlot(this.getPlotData(),(0,n.Gn)(this.plotCanvasId)):this.hideSideMenus())}})}createPlot(e,t){if(!this.isMenuButtonActive)return;this.chart&&hi.B9(this.chart),this.chart=hi.S1(t);const i=gi.updateAppObject_("X","Y","Z");this.chart.setOption({title:{text:"Earth Centered Fixed (ECF) Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{formatter:e=>{const t=e.value;return`\n            <div style="display: flex; flex-direction: column; align-items: flex-start;">\n              <div style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: flex-end;">\n                <div style="width: 10px; height: 10px; background-color: ${e.color}; border-radius: 50%; margin-bottom: 5px;"></div>\n                <div style="font-weight: bold;"> ${e.seriesName}</div>\n              </div>\n              <div>X: ${t[0].toFixed(2)} km</div>\n              <div>Y: ${t[1].toFixed(2)} km</div>\n              <div>Z: ${t[2].toFixed(2)} km</div>\n            </div>\n          `}},legend:{show:!0,textStyle:{color:"#fff"}},xAxis3D:{name:i.config.xAxis3D,type:"value"},yAxis3D:{name:i.config.yAxis3D,type:"value"},zAxis3D:{name:i.config.zAxis3D,type:"value"},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:5,distance:200,zoomSensitivity:2}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[i.config.xAxis3D,i.config.yAxis3D,i.config.zAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[i.fieldIndices[i.config.xAxis3D]],t[i.fieldIndices[i.config.yAxis3D]],t[i.fieldIndices[i.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})}static updateAppObject_(e,t,i){const a={config:{xAxis3D:e,yAxis3D:t,zAxis3D:i},fieldIndices:{},configParameters:{}},s=[{name:e,index:0},{name:t,index:1},{name:i,index:2}],n=s.reduce((function(e,t){return e[t.name]=t.index,e}),{});let o=s.map((e=>e.name));return o=o.slice(2,o.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{a.configParameters[e]={options:o}})),a.fieldIndices=n,a}getPlotData(){const e=[],t=l.b.getCatalogManager(),i=t.getObject(this.selectSatManager_.selectedSat);e.push({name:i.name,value:ui.getEcfOfCurrentOrbit(i,100).map((e=>[e.x,e.y,e.z]))});const a=this.selectSatManager_.secondarySatObj;a&&e.push({name:a.name,value:ui.getEcfOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))});const s=this.selectSatManager_.lastSelectedSat();if(-1!==s){const i=t.getObject(s);e.push({name:i.name,value:ui.getEcfOfCurrentOrbit(i,100).map((e=>[e.x,e.y,e.z]))})}return e}}gi.PLUGIN_NAME="ECF Plots";const mi=new gi,bi=i.p+"../img/scatter-plot2.png";class vi extends u.c{constructor(){super(vi.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconElementName="eci-plots-bottom-icon",this.bottomIconLabel="ECI Plots",this.bottomIconImg=bi,this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.createPlot(this.getPlotData(),(0,n.Gn)(this.plotCanvasId))},this.plotCanvasId="plot-analysis-chart-eci",this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="ECI Plots Menu",this.helpBody=l.b.html`
  <p>
    The ECI Plots menu allows you to plot the position of a satellite in Earth Centered Inertial (ECI) coordinates.
    This is useful for visualizing the position of a satellite in space.
  </p>`,this.sideMenuElementName="eci-plots-menu",this.sideMenuElementHtml=l.b.html`
  <div id="eci-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`,this.dragOptions={minWidth:500,maxWidth:1200},this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(e?this.setBottomIconToEnabled():this.setBottomIconToDisabled(),this.isMenuButtonActive)if(e){const e=(0,n.Gn)(this.plotCanvasId);this.createPlot(this.getPlotData(),e)}else this.hideSideMenus()}})}createPlot(e,t){if(!this.isMenuButtonActive)return;this.chart&&hi.B9(this.chart),this.chart=hi.S1(t);const i=vi.updateAppObject_("X","Y","Z"),a=e.reduce(((e,t)=>{const i=t.value.reduce(((e,t)=>Math.min(e,t[0])),1/0),a=t.value.reduce(((e,t)=>Math.max(e,t[0])),-1/0),s=t.value.reduce(((e,t)=>Math.min(e,t[1])),1/0),n=t.value.reduce(((e,t)=>Math.max(e,t[1])),-1/0),o=t.value.reduce(((e,t)=>Math.min(e,t[2])),1/0),l=t.value.reduce(((e,t)=>Math.max(e,t[2])),-1/0),r=1e3*Math.round(Math.min(i,s,o)/1e3),c=1e3*Math.round(Math.max(a,n,l)/1e3),d=Math.max(c,Math.abs(r));return Math.max(e,d)}),0);this.chart.setOption({title:{text:"Earth Centered Inertial (ECI) Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{formatter:e=>{const t=e.value;return`\n            <div style="display: flex; flex-direction: column; align-items: flex-start;">\n              <div style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: flex-end;">\n                <div style="width: 10px; height: 10px; background-color: ${e.color}; border-radius: 50%; margin-bottom: 5px;"></div>\n                <div style="font-weight: bold;"> ${e.seriesName}</div>\n              </div>\n              <div>X: ${t[0].toFixed(2)} km</div>\n              <div>Y: ${t[1].toFixed(2)} km</div>\n              <div>Z: ${t[2].toFixed(2)} km</div>\n            </div>\n          `}},legend:{show:!0,textStyle:{color:"#fff"}},xAxis3D:{name:i.config.xAxis3D,type:"value",min:-a,max:a},yAxis3D:{name:i.config.yAxis3D,type:"value",min:-a,max:a},zAxis3D:{name:i.config.zAxis3D,type:"value",min:-a,max:a},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:[5,15],zoomSensitivity:2}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[i.config.xAxis3D,i.config.yAxis3D,i.config.zAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[i.fieldIndices[i.config.xAxis3D]],t[i.fieldIndices[i.config.yAxis3D]],t[i.fieldIndices[i.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})}static updateAppObject_(e,t,i){const a={config:{xAxis3D:e,yAxis3D:t,zAxis3D:i},fieldIndices:{},configParameters:{}},s=[{name:e,index:0},{name:t,index:1},{name:i,index:2}],n=s.reduce((function(e,t){return e[t.name]=t.index,e}),{});let o=s.map((e=>e.name));return o=o.slice(2,o.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{a.configParameters[e]={options:o}})),a.fieldIndices=n,a}getPlotData(){const e=[],t=l.b.getCatalogManager(),i=t.getObject(this.selectSatManager_.selectedSat);e.push({name:i.name,value:ui.getEciOfCurrentOrbit(i,100).map((e=>[e.x,e.y,e.z]))});const a=this.selectSatManager_.secondarySatObj;a&&e.push({name:a.name,value:ui.getEciOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))});const s=this.selectSatManager_.lastSelectedSat();if(-1!==s){const i=t.getObject(s);e.push({name:i.name,value:ui.getEciOfCurrentOrbit(i,100).map((e=>[e.x,e.y,e.z]))})}return e}}vi.PLUGIN_NAME="ECI Plots";const fi=new vi,Si=i.p+"../img/scatter-plot.png";class Mi extends u.c{constructor(){super(Mi.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconElementName="inc2alt-plots-bottom-icon",this.bottomIconLabel="Inc vs Alt Plot",this.bottomIconImg=Si,this.bottomIconCallback=()=>{const e=(0,n.Gn)(this.plotCanvasId);this.createPlot(Mi.getPlotData(),e)},this.plotCanvasId="plot-analysis-chart-inc2alt",this.helpTitle="Inc vs Alt Plot Menu",this.helpBody=l.b.html`
  <p>
  The Inc vs Alt Plot Menu is used for plotting the inclination vs altitude.
  </p>`,this.sideMenuElementName="inc2alt-plots-menu",this.sideMenuElementHtml=l.b.html`
  <div id="inc2alt-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml()}createPlot(e,t){this.isMenuButtonActive&&(this.chart||(this.chart=hi.S1(t),this.chart.on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&this.selectSatManager_.selectSat(e.data.id)}))),this.chart.setOption({title:{text:"Inclination vs Altitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis:{name:"Inclination",type:"value",position:"bottom"},yAxis:{name:"Altitude",type:"value",position:"left"},zAxis:{name:"Period",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:65},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:65}],visualMap:[{left:"left",top:"10%",dimension:2,min:80,max:250,itemWidth:30,itemHeight:500,calculable:!0,precision:.05,text:["Period (min)"],textGap:30,textStyle:{color:"#fff"},inRange:{},outOfRange:{opacity:0,symbol:"none"},controller:{inRange:{color:["#41577c"]},outOfRange:{color:["#999"]}}}],series:e.map((e=>({type:"scatter",name:e.name,data:e.value.map((e=>({name:e[3],id:e[4],value:[e[1],e[0],e[2]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}))}static getPlotData(){const e=[],t=[],i=[],a=[];return l.b.getCatalogManager().objectCache.forEach((s=>{if(s.type!==y.ge.PAYLOAD)return;let n=s;if(n.period>250)return;n=l.b.getCatalogManager().getSat(n.id,o.C_.POSITION_ONLY);const r=l.b.getTimeManager().simulationTimeObj;if(!(n.lla(r).alt<80))switch(n.country){case"United States of America":case"United States":case"US":return void t.push([n.lla(r).alt,n.inclination,n.period,n.name,n.id]);case"Russian Federation":case"CIS":case"RU":case"SU":case"Russia":return void i.push([n.lla(r).alt,n.inclination,n.period,n.name,n.id]);case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":case"PRC":case"CN":return void e.push([n.lla(r).alt,n.inclination,n.period,n.name,n.id]);default:return void a.push([n.lla(r).alt,n.inclination,n.period,n.name,n.id])}})),[{name:"USA",value:t},{name:"Other",value:a},{name:"Russia",value:i},{name:"China",value:e}]}}Mi.PLUGIN_NAME="Time vs Lon Plots";const yi=new Mi;class wi extends u.c{constructor(){super(wi.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconElementName="inc2lon-plots-bottom-icon",this.bottomIconLabel="Inc Vs Lon Plot",this.bottomIconImg=Si,this.bottomIconCallback=()=>{const e=(0,n.Gn)(this.plotCanvasId);this.createPlot(wi.getPlotData(),e)},this.plotCanvasId="plot-analysis-chart-inc2lon",this.helpTitle="Inc Vs Lon Plot Menu",this.helpBody=l.b.html`
  <p>
    The Inc Vs Lon Plot Menu is used for plotting the inclination vs longitude in the GEO belt.
  </p>`,this.sideMenuElementName="inc2lon-plots-menu",this.sideMenuElementHtml=l.b.html`
  <div id="inc2lon-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml()}createPlot(e,t){this.isMenuButtonActive&&(this.chart||(this.chart=hi.S1(t),this.chart.on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&this.selectSatManager_.selectSat(e.data.id)}))),this.chart.setOption({title:{text:"Inclination vs Longitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis:{name:"Longitude",type:"value",position:"bottom"},yAxis:{name:"Inclination",type:"value",position:"left"},zAxis:{name:"Period",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:65},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:65}],visualMap:[{left:"left",top:"10%",dimension:2,min:1240,max:1640,itemWidth:30,itemHeight:500,calculable:!0,precision:.05,text:["Period (minutes)"],textGap:30,textStyle:{color:"#fff"},inRange:{},outOfRange:{opacity:0,symbol:"none"},controller:{inRange:{color:["#41577c"]},outOfRange:{color:["#999"]}}}],series:e.map((e=>({type:"scatter",name:e.name,data:e.value.map((e=>({name:e[3],id:e[4],value:[e[1],e[0],e[2]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}))}static getPlotData(){const e=[],t=[],i=[],a=[];return l.b.getCatalogManager().objectCache.forEach((s=>{if(s.type!==y.ge.PAYLOAD)return;const n=s;if(n.eccentricity>.1)return;if(n.period<1240)return;if(n.period>1640)return;if(n.inclination>17)return;const o=l.b.getTimeManager().simulationTimeObj,r=n.lla(o);switch(n.country){case"United States of America":case"United States":case"US":return void t.push([n.inclination,r.lon,n.period,n.name,n.id]);case"Russian Federation":case"CIS":case"Russia":return void i.push([n.inclination,r.lon,n.period,n.name,n.id]);case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":return void e.push([n.inclination,r.lon,n.period,n.name,n.id]);default:return void a.push([n.inclination,r.lon,n.period,n.name,n.id])}})),[{name:"USA",value:t},{name:"Other",value:a},{name:"Russia",value:i},{name:"China",value:e}]}}wi.PLUGIN_NAME="Inc Vs Lon Plots";const Ci=new wi,Li=i.p+"../img/scatter-plot4.png";class Ai extends u.c{constructor(){super(Ai.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconElementName="ric-plots-bottom-icon",this.bottomIconLabel="RIC Plot",this.bottomIconImg=Li,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{-1!==this.selectSatManager_.selectedSat?this.selectSatManager_.secondarySatObj?this.isMenuButtonActive&&this.createPlot(this.getPlotData(),(0,n.Gn)(this.plotCanvasId)):l.b.getUiManager().toast("Select a Secondary Satellite First!","critical"):l.b.getUiManager().toast("Select a Satellite First!","critical")},this.plotCanvasId="plot-analysis-chart-ric",this.helpTitle="RIC Plot Menu",this.helpBody=l.b.html`
  <p>
  The RIC Plot Menu is used for plotting the RIC position of a satellite over time.
  </p>`,this.sideMenuElementName="ric-plots-menu",this.sideMenuElementHtml=l.b.html`
  <div id="ric-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.setSecondarySat,cbName:this.PLUGIN_NAME,cb:e=>{e&&-1!==this.selectSatManager_.selectedSat?this.setBottomIconToEnabled():(this.isMenuButtonActive&&this.hideSideMenus(),this.setBottomIconToDisabled())}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e&&-1!==this.selectSatManager_.secondarySat?this.setBottomIconToEnabled():(this.isMenuButtonActive&&this.hideSideMenus(),this.setBottomIconToDisabled())}})}createPlot(e,t){if(!this.isMenuButtonActive)return;this.chart&&hi.B9(this.chart),this.chart=hi.S1(t);const i="Radial",a="In-Track",s="Cross-Track",n=Ai.updateAppObject_(i,a,s);this.chart.setOption({title:{text:"RIC Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{formatter:e=>{const t=e.value;return`\n            <div style="display: flex; flex-direction: column; align-items: flex-start;">\n              <div style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: flex-end;">\n                <div style="width: 10px; height: 10px; background-color: ${e.color}; border-radius: 50%; margin-bottom: 5px;"></div>\n                <div style="font-weight: bold;"> ${e.seriesName}</div>\n              </div>\n              <div>${i}: ${t[0].toFixed(2)} km</div>\n              <div>${a}: ${t[1].toFixed(2)} km</div>\n              <div>${s}: ${t[2].toFixed(2)} km</div>\n            </div>\n          `}},legend:{show:!0,textStyle:{color:"#fff"}},xAxis3D:{name:n.config.xAxis3D,type:"value"},yAxis3D:{name:n.config.yAxis3D,type:"value"},zAxis3D:{name:n.config.zAxis3D,type:"value"},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[n.config.xAxis3D,n.config.yAxis3D,n.config.zAxis3D],data:e.value.map(((t,i)=>({itemStyle:{opacity:1-i/e.value.length},value:[t[n.fieldIndices[n.config.xAxis3D]],t[n.fieldIndices[n.config.yAxis3D]],t[n.fieldIndices[n.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})}static updateAppObject_(e,t,i){const a={config:{xAxis3D:e,yAxis3D:t,zAxis3D:i},fieldIndices:{},configParameters:{}},s=[{name:e,index:0},{name:t,index:1},{name:i,index:2}],n=s.reduce((function(e,t){return e[t.name]=t.index,e}),{});let o=s.map((e=>e.name));return o=o.slice(2,o.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{a.configParameters[e]={options:o}})),a.fieldIndices=n,a}getPlotData(){const e=[];if(-1===this.selectSatManager_.selectedSat||-1===this.selectSatManager_.secondarySat)return[];const t=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat),i=this.selectSatManager_.secondarySatObj;return e.push({name:t.name,value:[[0,0,0]]}),e.push({name:i.name,value:ui.getRicOfCurrentOrbit(i,t,100,1).map((e=>[e.x,e.y,e.z]))}),e}}Ai.PLUGIN_NAME="RIC Plot";const xi=new Ai,ki=i.p+"../img/line-plot.png";class Ei extends u.c{constructor(){super(Ei.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconElementName="time2lon-plots-bottom-icon",this.bottomIconLabel="Time vs Lon Plot",this.bottomIconImg=ki,this.bottomIconCallback=()=>{const e=(0,n.Gn)(this.plotCanvasId);this.createPlot(Ei.getPlotData(),e)},this.plotCanvasId="plot-analysis-chart-time2lon",this.helpTitle="Time Vs Lon Plot Menu",this.helpBody=l.b.html`
  <p>
    The Time vs Lon Plot Menu is used for plotting the time vs longitude in the GEO belt.
  </p>`,this.sideMenuElementName="time2lon-plots-menu",this.sideMenuElementHtml=l.b.html`
  <div id="time2lon-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml()}createPlot(e,t){this.isMenuButtonActive&&(this.chart||(this.chart=hi.S1(t),this.chart.on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&this.selectSatManager_.selectSat(e.data.id)}))),this.chart.setOption({title:{text:"Time vs Longitude Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{},xAxis:{name:"Longitude",type:"value",position:"bottom"},yAxis:{name:"Time",type:"value",position:"left"},zAxis:{name:"Mean Motion",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:1440},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:1440}],series:e.map((e=>({type:"line",name:e.name,data:e.data.map((t=>({name:e.country,id:e.satId,value:[t[1],t[0]]}))),emphasis:{itemStyle:{color:"#fff"}}})))}))}static getPlotData(){const e=l.b.getCatalogManager().objectCache,t=l.b.getTimeManager().simulationTimeObj.getTime(),i=[];return e.forEach((e=>{if(e.type!==y.ge.PAYLOAD)return;let a=e;if(a.eccentricity>.1)return;if(a.period<1240)return;if(a.period>1640)return;switch(a.country){case"United States of America":case"United States":case"US":case"Russian Federation":case"CIS":case"Russia":case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":break;default:return}a=l.b.getCatalogManager().getObject(a.id,o.C_.POSITION_ONLY);const s=ui.getLlaOfCurrentOrbit(a,24),n=[];s.forEach((e=>{const i=(e.time-t)/1e3/60;i>1440||i<0||n.push([i,e.lon])})),i.push({name:a.name,satId:a.id,country:a.country,data:n})})),i}}Ei.PLUGIN_NAME="Time vs Lon Plots";const Ti=new Ei;var Ii=i(5890),Ni=i(5441);const Gi=i.p+"../img/satchng.png";class _i extends u.c{constructor(){super(_i.PLUGIN_NAME),this.bottomIconImg=Gi,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=l.b.html`
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
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"constellations",cb:()=>{(0,n.Gn)("constellation-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(e){_i.constellationMenuClick(e.target.dataset.group)}))}))}})}static constellationMenuClick(e){const t=l.b.getTimeManager(),i=l.b.getCatalogManager(),a=l.b.getGroupsManager();if(void 0!==a){switch(e){case"SpaceStations":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/NAVSTAR/u,e);break;case"iridium":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/IRIDIUM/u,e);break;case"orbcomm":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/ORBCOMM/u,e);break;case"globalstar":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GLOBALSTAR/u,e);break;case"ses":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/SES \d+/u,e);break;case"AmatuerRadio":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,i.id2satnum(i.satLinkManager.aehf),e),(0,v.QP)((()=>{Ni.Bz.clear(),i.satLinkManager.showLinks(Ni.Bz,Ii.W6.Aehf,t)}));break;case"wgs":if(!a.groupList[e]){const t=i.satLinkManager.wgs.concat(i.satLinkManager.dscs);a.createGroup(r.Y.SCC_NUM,i.id2satnum(t),e)}(0,v.QP)((()=>{Ni.Bz.clear(),i.satLinkManager.showLinks(Ni.Bz,Ii.W6.Wgs,t)}));break;case"starlink":a.groupList[e]||a.createGroup(r.Y.NAME_REGEX,/STARLINK/u,e);break;case"sbirs":if(!a.groupList[e]){const t=[...i.satLinkManager.sbirs,...i.satLinkManager.dsp];a.createGroup(r.Y.SCC_NUM,i.id2satnum(t),e)}break;default:throw new Error("Unknown group name: "+e)}_i.groupSelected(e)}}static groupSelected(e){var t;if(void 0===e)return;const i=l.b.getCatalogManager(),a=l.b.getGroupsManager();if(void 0===a.groupList[e])throw new Error("Unknown group name: "+e);const s=(0,n.Gn)("search");a.selectGroup(a.groupList[e]),s.innerHTML=a.groupList[e].ids.reduce(((e,t)=>{var a;return`${e}${null===(a=i.getSat(t))||void 0===a?void 0:a.sccNum},`}),"").slice(0,-1),null===(t=l.b.getPlugin(p.P))||void 0===t||t.selectSat(-1);const o=l.b.getUiManager();o.searchManager.doSearch(a.groupList[e].ids.map((e=>{var t;return null===(t=i.getSat(e))||void 0===t?void 0:t.sccNum})).join(",")),settingsManager.isMobileModeEnabled&&o.searchManager.closeSearch(),o.hideSideMenus()}}_i.PLUGIN_NAME="Sat Constellations";const Pi=new _i;var Ri=i(1965),Oi=i(9696);const Di=i.p+"../img/photoManager.png";class Fi extends u.c{constructor(){super(Fi.PLUGIN_NAME),this.discvrPhotos_=[],this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="SatellitePhotos",this.bottomIconImg=Di,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=l.b.html`
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
  Note - changes in the image API may cause the wrong satellite to be selected in KeepTrack.`}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("meteosat9-link").addEventListener("click",(()=>{Fi.loadPic(28912,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")})),(0,n.Gn)("meteosat11-link").addEventListener("click",(()=>{Fi.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")})),(0,n.Gn)("himawari8-link").addEventListener("click",(()=>{Fi.himawari8()})),(0,n.Gn)("goes16-link").addEventListener("click",(()=>{Fi.loadPic(41866,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")})),(0,n.Gn)("goes18-link").addEventListener("click",(()=>{Fi.loadPic(51850,"https://cdn.star.nesdis.noaa.gov/GOES18/ABI/FD/GEOCOLOR/latest.jpg")}))}}),l.b.register({event:o.RL.onKeepTrackReady,cbName:this.PLUGIN_NAME,cb:()=>{this.initDISCOVR_()}})}initDISCOVR_(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{if(e.status>=200&&e.status<400){JSON.parse(e.response).forEach((e=>{const t=e.image,i=e.identifier,a=i.slice(0,4),s=i.slice(4,6),n=i.slice(6,8),o=e.centroid_coordinates.lat,l=e.centroid_coordinates.lon;this.discvrPhotos_.push({imageUrl:`https://epic.gsfc.nasa.gov/archive/natural/${a}/${s}/${n}/png/${t}.png`,lat:o,lon:l})}));for(let e=1;e<this.discvrPhotos_.length+1;e++){const t=`<li id="discovr-link${e}" class="link satPhotoRow">DSCOVR Image ${e}</li>`;(0,n.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",t),(0,n.Gn)(`discovr-link${e}`).addEventListener("click",(()=>{Fi.loadPic(-1,this.discvrPhotos_[e-1].imageUrl),l.b.getMainCamera().camSnap((0,Oi.Lx)(this.discvrPhotos_[e-1].lat),(0,Oi.Zs)(this.discvrPhotos_[e-1].lon,l.b.getTimeManager().simulationTimeObj)),l.b.getMainCamera().changeZoom(.7)}))}}else{f.x.log("https://epic.gsfc.nasa.gov/ request failed!");const e='<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>';(0,n.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",e)}},e.onerror=function(){f.x.log("https://epic.gsfc.nasa.gov/ request failed!"),(0,n.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",'<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>')},e.send()}static loadPic(e,t){var i;l.b.getUiManager().searchManager.hideResults(),null===(i=l.b.getPlugin(p.P))||void 0===i||i.selectSat(l.b.getCatalogManager().sccNum2Id(e)),l.b.getMainCamera().changeZoom(.7),Fi.colorbox(t)}static himawari8(){var e;null===(e=l.b.getPlugin(p.P))||void 0===e||e.selectSat(l.b.getCatalogManager().sccNum2Id(40267)),l.b.getMainCamera().changeZoom(.7);let t=l.b.getTimeManager().simulationTimeObj;t.getTime()<Date.now()?t=new Date(t.getTime()-18e5):(l.b.getUiManager().toast("Can't load pictures from the future. Loading most recent photos.","caution"),t=new Date(Date.now()-18e5));const i=t.getUTCFullYear(),a=(t.getUTCMonth()+1).toString().padStart(2,"0"),s=t.getUTCDate().toString().padStart(2,"0"),n=t.getUTCHours().toString().padStart(2,"0"),o=(10*Math.floor(t.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,qt.Us)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${i}/${a}/${s}/${n}${o}00_0_0.png`,{image:!0})}}Fi.PLUGIN_NAME="Satellite Photos",Fi.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,qt.Us)(e,{image:!0})};const Ui=new Fi,Bi=i.p+"../img/video.png";class zi{constructor(e,t,i,a){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=i,this.onError_=a}static handleError(e){e.message.includes("Permission denied")?f.x.warn('Permission denied! Did you click "Share"?'):f.x.warn("Error:"+e)}getStream(e){return t=this,i=void 0,s=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch((e=>(zi.handleError(e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch((e=>(zi.handleError(e),null))):(f.x.warn("Compatibility Error with Recording"),this.onError_(),!1):(f.x.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((a=void 0)||(a=Promise))((function(e,n){function o(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(o,l)}r((s=s.apply(t,i||[])).next())}));var t,i,a,s}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(f.x.debug("Recorder stopped."),this.stream_.getTracks().forEach((e=>e.stop())),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,i=new Blob(this.recordedBlobs,{type:this.supportedType}),a=window.URL.createObjectURL(i),s=document.createElement("a");s.style.display="none",s.href=a,s.download=t,l.b.containerRoot.appendChild(s),s.click(),setTimeout((()=>{l.b.containerRoot.removeChild(s),window.URL.revokeObjectURL(a)}),100)}start(){this.getStream().then((e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;let t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(let e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&f.x.debug("No supported type found for MediaRecorder");let i={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||zi.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,i)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}f.x.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${i}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),f.x.debug(`Created MediaRecorder ${this.mediaRecorder_}`)})).catch((()=>{}))}}zi.BIT_RATE_30_MBPS=3e7,zi.BIT_RATE_20_MBPS=2e7,zi.BIT_RATE_10_MBPS=1e7,zi.BIT_RATE_5_MBPS=5e6,zi.BIT_RATE_2_MBPS=2e6,zi.BIT_RATE_1_MBPS=1e6;class $i extends u.c{constructor(){super("Screen Recorder"),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return f.x.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){f.x.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=Bi,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerOnReady,cbName:this.PLUGIN_NAME,cb:()=>{try{this.streamManagerInstance=new zi(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save($i.FILE_NAME),this.setBottomIconToUnselected()}}$i.FILE_NAME="keeptrack.webm";const Hi=new $i,ji=i.p+"../img/camera.png";class Vi extends u.c{constructor(){super("Screenshot"),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=ji,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.rmbL1ElementName="save-rmb",this.rmbL1Html=l.b.html`
    <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Save Image &#x27A4;</a></li>
  `,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.isRmbOnSat=!0,this.rmbL2ElementName="save-rmb-menu",this.rmbL2Html=l.b.html`
    <ul class='dropdown-contents'>
      <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
      <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
      <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
    </ul>
  `,this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),l.b.register({event:o.RL.altCanvasResize,cbName:this.PLUGIN_NAME,cb:()=>this.queuedScreenshot_}),l.b.register({event:o.RL.endOfDraw,cbName:this.PLUGIN_NAME,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){let e=document.createElement("a");e.download="keeptrack.png";let t=(new Date).getUTCFullYear(),i=settingsManager.copyrightOveride?"":`©${t} KEEPTRACK.SPACE`;e.href=Vi.watermarkedDataUrl(i),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=l.b.getRenderer().domElement,i=document.createElement("canvas"),a=i.getContext("2d");let s=i.width=t.width,n=i.height=t.height;a.drawImage(t,0,0),a.font="24px nasalization";let o=a.measureText(e).width;a.globalAlpha=1,a.fillStyle="white",a.fillText(e,s-o-30,n-30);const{classificationstr:r,classificationColor:c}=Vi.calculateClassificationText();""!==r&&(a.font="24px nasalization",a.globalAlpha=1,a.fillStyle=c,o=a.measureText(r).width,a.fillText(r,s/2-o,n-20),a.fillText(r,s/2-o,34)),l.b.containerRoot.appendChild(i);let d=i.toDataURL();return i.parentNode.removeChild(i),d}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:Et.getColors(settingsManager.classificationStr).backgroundColor}}}const Ki=new Vi;var Wi=i(4118),Yi=i(1527),Xi=i(658),Ji=i(3443);const qi=i.p+"../img/radar.png";var Qi=i(5701),Zi=i.n(Qi),ea=i(8236),ta=i.n(ea),ia=i(6080),aa=i.n(ia),sa=i(6850),na=i.n(sa),oa=i(7182),la=i.n(oa),ra=i(9213),ca=i.n(ra),da=i(3862),ua={};ua.styleTagTransform=ca(),ua.setAttributes=na(),ua.insert=aa().bind(null,"head"),ua.domAPI=ta(),ua.insertStyleElement=la(),Zi()(da.Z,ua),da.Z&&da.Z.locals&&da.Z.locals;class pa extends u.c{constructor(){super(pa.PLUGIN_NAME),this.dependencies=[Dt.s.PLUGIN_NAME],this.bottomIconCallback=()=>{var e;this.isMenuButtonActive&&((null===(e=l.b.getPlugin(bt))||void 0===e?void 0:e.isMenuButtonActive)?(0,Xi.l)("sensor-top-link").forEach((e=>{e.style.display="none"})):(0,Xi.l)("sensor-top-link").forEach((e=>{e.style.gridTemplateColumns="repeat(2,1fr)",e.style.display=""})))},this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.bottomIconElementName="sensor-list-icon",this.bottomIconLabel="Sensors",this.bottomIconImg=qi,this.sideMenuElementName="sensor-list-menu",this.sideMenuElementHtml=l.b.html`
    <div id="sensor-list-menu" class="side-menu-parent start-hidden text-select">
        <div id="sensor-list-content" class="side-menu">
        <div class="row">
          <ul id="reset-sensor-text" class="sensor-reset-menu">
            <button id="reset-sensor-button" class="center-align btn btn-ui waves-effect waves-light menu-selectable" type="button">Reset Sensor &#9658;</button>
            <li class="divider"></li>
          </ul>
          <ul id="list-of-sensors">`+pa.ssnSensors_()+pa.mwSensors_()+pa.mdaSensors_()+pa.leoLabsSensors_()+pa.esocSensors_()+pa.russianSensors_()+pa.chineseSensors_()+pa.otherSensors_()+l.b.html`
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
  If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("nav-mobile").insertAdjacentHTML("beforeend",l.b.html`<div id="sensor-selected" class="waves-effect waves-light"></div>`)}}),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("sensor-selected").addEventListener("click",(()=>{var e;l.b.runEvent(o.RL.bottomMenuClick,this.bottomIconElementName),null===(e=l.b.getSoundManager())||void 0===e||e.play(h.p.CLICK)})),(0,n.Gn)("sensor-list-content").addEventListener("click",(e=>{var t;let i=e.target;if(!(null==i?void 0:i.classList.contains("menu-selectable"))&&(i=null==i?void 0:i.closest(".menu-selectable"),!(null==i?void 0:i.classList.contains("menu-selectable"))))return;if("reset-sensor-button"===i.id)return l.b.getSensorManager().resetSensorSelected(),void l.b.getSoundManager().play(h.p.MENU_BUTTON);null===(t=l.b.getSoundManager())||void 0===t||t.play(h.p.CLICK);const a=i.dataset.sensor;this.sensorListContentClick(a)}))}}),l.b.register({event:o.RL.selectSatData,cbName:"sensor",cb:e=>{null!=e&&(null===l.b.getPlugin(ci.s)||this.isSensorLinksAdded||((0,n.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
                  <div id="sensors-in-fov-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                        data-tooltip="Visualize Sensor Coverage">Show All Sensors with FOV...</div>
                `),(0,n.Gn)("sensors-in-fov-link").addEventListener("click",(()=>{l.b.getSoundManager().play(h.p.CLICK);const e=l.b.getPlugin(p.P);if(!e)return;const t=e.getSelectedSat();t.isMissile()||Object.keys(Yi.T).forEach((e=>{const i=Yi.T[e];i.isSatInFov(t,l.b.getTimeManager().simulationTimeObj)&&l.b.getLineManager().create(Ni.jv.MULTI_SENSORS_TO_SAT,[t.id,l.b.getCatalogManager().getSensorFromSensorName(i.name)],"g")}))})),this.isSensorLinksAdded=!0))}})}addJs(){super.addJs(),l.b.register({event:o.RL.sensorDotSelected,cbName:this.PLUGIN_NAME,cb:e=>{if(settingsManager.isMobileModeEnabled)return;if(!e.isSensor())return;const t=e,i=l.b.getSensorManager();if(i.setSensor(null,t.sensorId),0===i.currentSensors.length)throw new Error("No sensors found");const a=l.b.getTimeManager();l.b.getMainCamera().lookAtLatLon(i.currentSensors[0].lat,i.currentSensors[0].lon,i.currentSensors[0].zoom,a.selectedDate)}}),l.b.register({event:o.RL.onCruncherReady,cbName:this.PLUGIN_NAME,cb:()=>{!settingsManager.disableUI&&settingsManager.isLoadLastSensor&&pa.reloadLastSensor_()}})}sensorListContentClick(e){var t;if(!this.isMenuButtonActive)return;const i=l.b.getSensorManager();if(void 0!==e){switch(e){case"cspocAll":i.setSensor("SSN");break;case"mwAll":i.setSensor("NATO-MW");break;case"mdAll":i.setSensor("MD-ALL");break;case"esocAll":i.setSensor("ESOC-ALL");break;case"llAll":i.setSensor("LEO-LABS");break;case"rusAll":i.setSensor("RUS-ALL");break;case"prcAll":i.setSensor("PRC-ALL");break;default:i.setSensor(Yi.T[`${e}`])}null===(t=l.b.getPlugin(p.P))||void 0===t||t.selectSat(-1);try{l.b.getMainCamera().lookAtLatLon(i.currentSensors[0].lat,i.currentSensors[0].lon,i.currentSensors[0].zoom,l.b.getTimeManager().selectedDate)}catch(e){f.x.warn("Error in sensorListContentClick: "+e)}settingsManager.currentColorScheme==l.b.getColorSchemeManager().default&&ht.j.change("default")}else f.x.debug("The menu item was clicked but the menu was not defined.")}static createLiForSensor_(e){return l.b.html`
      <li class="menu-selectable" data-sensor="${e.objName}">
        <span>${e.uiName}</span>
        <span>${e.system}</span>
        <span class="badge dark-blue-badge" data-badge-caption="${e.operator}"></span>
      </li>
    `}static ssnSensors_(){return this.createSection_({header:"Space Surveillance Network Sensors",sensors:[Yi.T.EGLAFB,Yi.T.KWAJSPF,Yi.T.GEODDSDGC,Yi.T.GEODDSMAU,Yi.T.GEODDSSOC,Yi.T.KWAJALT,Yi.T.KWAJMMW,Yi.T.KWAJALC,Yi.T.KWAJTDX,Yi.T.MITMIL,Yi.T.RAFASC,Yi.T.GLBII,Yi.T.HOLCBAND,Yi.T.HOLSST],topLinks:[{name:"All SSN Sensors",dataSensor:"ssnAll",badge:"COALITION"}]})}static mwSensors_(){return this.createSection_({header:"US Missile Warning Sensors",sensors:[Yi.T.BLEAFB,Yi.T.CODSFS,Yi.T.CAVSFS,Yi.T.CLRSFS,Yi.T.COBRADANE,Yi.T.RAFFYL,Yi.T.PITSB],topLinks:[{name:"All MW Sensors",dataSensor:"mwAll",badge:"NORAD"}]})}static mdaSensors_(){return this.createSection_({header:"US Missile Defense Agency Sensors",sensors:[Yi.T.HARTPY,Yi.T.QTRTPY,Yi.T.KURTPY,Yi.T.SHATPY,Yi.T.KCSTPY,Yi.T.SBXRDR],topLinks:[{name:"All MDA Sensors",dataSensor:"mdAll",badge:"MDA"}]})}static createSection_(e){return l.b.html`
              <li class="divider"></li>
              <h5 class="center-align">${e.header}</h5>
              <li class="divider"></li>
              ${e.topLinks.map((e=>l.b.html`<li class="menu-selectable sensor-top-link" data-sensor="${e.dataSensor}">
                <span>${e.name}</span>
                <span class="badge dark-blue-badge" data-badge-caption="${e.badge}"></span>
              </li>`)).join("")}
              ${e.sensors.map((e=>pa.createLiForSensor_(e))).join("")}
              `}static esocSensors_(){return this.createSection_({header:"ESA Space Operations Center Sensors",sensors:[Yi.T.GRV,Yi.T.TIR,Yi.T.GES,Yi.T.NRC,Yi.T.PDM,Yi.T.TRO,Yi.T.Tenerife,Yi.T.ZimLAT,Yi.T.ZimSMART,Yi.T.Tromso,Yi.T.Kiruna,Yi.T.Sodankyla,Yi.T.Svalbard],topLinks:[{name:"All ESOC Sensors",dataSensor:"esocAll",badge:"ESA"}]})}static leoLabsSensors_(){return this.createSection_({header:"Leo Labs Sensors",sensors:[Yi.T.LEOCRSR,Yi.T.LEOAZORES,Yi.T.LEOKSR,Yi.T.LEOPFISR,Yi.T.LEOMSR],topLinks:[{name:"All Leo Labs Sensors",dataSensor:"llAll",badge:"LEOLABS"}]})}static otherSensors_(){return this.createSection_({header:"Other Sensors",sensors:[Yi.T.ROC,Yi.T.MLS,Yi.T.PO,Yi.T.LSO,Yi.T.MAY],topLinks:[]})}static russianSensors_(){return this.createSection_({header:"Russian Sensors",sensors:[Yi.T.OLED,Yi.T.OLEV,Yi.T.PEC,Yi.T.MISD,Yi.T.MISV,Yi.T.LEKV,Yi.T.ARMV,Yi.T.KALV,Yi.T.BARV,Yi.T.YENV,Yi.T.ORSV,Yi.T.STO,Yi.T.NAK],topLinks:[{name:"All Russian Sensors",dataSensor:"rusAll",badge:"RUS"}]})}static chineseSensors_(){return this.createSection_({header:"Chinese Sensors",sensors:[Yi.T.SHD,Yi.T.HEI,Yi.T.ZHE,Yi.T.XIN,Yi.T.PMO],topLinks:[{name:"All Chinese Sensors",dataSensor:"prcAll",badge:"PRC"}]})}static reloadLastSensor_(){const e=Ji.p.getInstance().getItem(Ji.Q.CURRENT_SENSOR);if(!e)return;const t=JSON.parse(e);if(null!==t)try{const e=l.b.getSensorManager();void 0===t[0]||null==t[0]?(e.setSensor(null,t[1]),ht.j.change("default")):void 0===t[0].objName?(e.setSensor(t[0],t[1]),ht.j.change("default")):(e.setSensor(Yi.T[t[0].objName],t[1]),ht.j.change("default"))}catch(e){Ji.p.getInstance().removeItem(Ji.Q.CURRENT_SENSOR)}}}pa.PLUGIN_NAME="Sensor List";var ha=i(6886);const ga=e=>{const t=new CustomEvent("customSubmit",{cancelable:!0});e.dispatchEvent(t)};var ma=i(6616);class ba{static updateSensorPosition(e){var t;const i=l.b.getTimeManager(),a=l.b.getCatalogManager(),s=l.b.getSensorManager(),{lon:n,lat:o,alt:r,minaz:c,maxaz:d,minel:u,maxel:h,minrange:g,maxrange:m}=ba.updateSettingsManager(e);s.whichRadar="CUSTOM",ba.updateCustomSensorUi_();const b={lat:o,lon:n,alt:r,minAz:c,maxAz:d,minEl:u,maxEl:h,minRng:g,maxRng:m};a.satCruncher.postMessage({typ:xt.Bi.SENSOR,sensor:b}),ma.w.updateSensorUiStyling([b]),null===(t=l.b.getPlugin(p.P))||void 0===t||t.selectSat(-1);const v=l.b.getMainCamera();m>6e3?v.changeZoom(y.$R.GEO):v.changeZoom(y.$R.LEO),v.camSnap((0,Oi.Lx)(o),(0,Oi.Zs)(n,i.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(ba.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,n.Gn)("cs-lat"),t=(0,n.Gn)("cs-lon"),i=(0,n.Gn)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),i.value=settingsManager.geolocation.alt.toString(),i.dispatchEvent(new Event("change")),(0,n.Gn)("cs-telescope").checked=!0,(0,n.Gn)("cs-minaz").disabled=!0,(0,n.Gn)("cs-maxaz").disabled=!0,(0,n.Gn)("cs-minel").disabled=!0,(0,n.Gn)("cs-maxel").disabled=!0,(0,n.Gn)("cs-minrange").disabled=!0,(0,n.Gn)("cs-maxrange").disabled=!0,(0,n.Gn)("cs-minaz-div").style.display="none",(0,n.Gn)("cs-maxaz-div").style.display="none",(0,n.Gn)("cs-minel-div").style.display="none",(0,n.Gn)("cs-maxel-div").style.display="none",(0,n.Gn)("cs-minrange-div").style.display="none",(0,n.Gn)("cs-maxrange-div").style.display="none",(0,n.Gn)("cs-minaz").value="0",(0,n.Gn)("cs-maxaz").value="360",(0,n.Gn)("cs-minel").value="10",(0,n.Gn)("cs-maxel").value="90",(0,n.Gn)("cs-minrange").value="100",(0,n.Gn)("cs-maxrange").value="50000",(0,n.Gn)("sensor-type").innerHTML="Telescope",(0,n.Gn)("sensor-info-title").innerHTML="Custom Sensor",(0,n.Gn)("sensor-country").innerHTML="Custom Sensor"}catch(e){f.x.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const va=i.p+"../img/custom.png",fa=i.p+"../img/multi-site.png";class Sa extends u.c{constructor(){super(Sa.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!1,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)},this.lookanglesLength=1,this.lookanglesInterval=30,this.disabledSensors=[],this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=fa,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=l.b.html`
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
    </div>`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,n.Gn)("multi-site-look-angles-export"))||void 0===e||e.addEventListener("click",(()=>{l.b.getSoundManager().play(h.p.EXPORT);const e=l.b.getSensorManager().lastMultiSiteArray.map((e=>({time:e.time,sensor:e.objName,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)})));(0,ot.Eb)(e,"multiSiteLooks")}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&l.b.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.refreshSideMenuData(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}addJs(){super.addJs(),l.b.register({event:o.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)}})}refreshSideMenuData(e){this.isMenuButtonActive&&e&&(0,v.QP)((()=>{const t=(0,n.Gn)("multi-site-look-angles-sensor-list");if(!t)return void f.x.warn("Could not find sensor list dom");t.innerHTML="";const i=[];for(const a of l.b.getSensorManager().sensorListUS){if(!a.shortName)continue;const s=document.createElement("button");s.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors.includes(a)&&s.classList.add("btn-red"),i.push(a),s.innerText=a.shortName,s.addEventListener("click",(()=>{s.classList.contains("btn-red")?(s.classList.remove("btn-red"),this.disabledSensors.splice(this.disabledSensors.indexOf(a),1),l.b.getSoundManager().play(h.p.TOGGLE_ON)):(s.classList.add("btn-red"),this.disabledSensors.push(a),l.b.getSoundManager().play(h.p.TOGGLE_OFF)),this.getlookanglesMultiSite_(e,i.filter((e=>!this.disabledSensors.includes(e))))})),t.appendChild(s),t.appendChild(document.createTextNode(" "))}this.getlookanglesMultiSite_(e,i.filter((e=>!this.disabledSensors.includes(e))))}))}getlookanglesMultiSite_(e,t){const i=l.b.getTimeManager(),a=l.b.getSensorManager(),s=l.b.getCatalogManager().staticSet;if(!t){t=[];for(const e in s){const i=s[e];t.push(i)}}const n=!a.isSensorSelected(),o=[...a.currentSensors],r=y.rE/(e.satrec.no*y.rE/y.gc),c=[];for(const a of t){if(a.maxRng<e.perigee&&(!a.maxRng2||a.maxRng2<e.perigee))continue;ma.w.updateSensorUiStyling([a]);let t=0;for(let s=0;s<24*this.lookanglesLength*60*60;s+=this.lookanglesInterval){t=1e3*s;let n=i.getOffsetTimeObj(t),o=Sa.propagateMultiSite_(n,e.satrec,a);""!==o.time&&(c.push(o),s+=60*r*.75)}}c.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),a.lastMultiSiteArray=c,n?a.setCurrentSensor(null):a.setCurrentSensor(o),Sa.populateMultiSiteTable_(c)}static propagateMultiSite_(e,t,i){const a=nt.$.getRae(e,t,i);return nt.$.checkIsInView(i,a)?{time:e.toISOString(),el:a.el,az:a.az,rng:a.rng,objName:i.objName}:{time:"",el:0,az:0,rng:0,objName:""}}static populateMultiSiteTable_(e){var t;const i=l.b.getSensorManager(),a=l.b.getCatalogManager().staticSet,s=(0,n.Gn)("multi-site-look-angles-table");s.innerHTML="";let o=s.insertRow(),r=o.insertCell();r.appendChild(document.createTextNode("Time")),r.setAttribute("style","text-decoration: underline");let c=o.insertCell();c.appendChild(document.createTextNode("El")),c.setAttribute("style","text-decoration: underline");let d=o.insertCell();d.appendChild(document.createTextNode("Az")),d.setAttribute("style","text-decoration: underline");let u=o.insertCell();u.appendChild(document.createTextNode("Rng")),u.setAttribute("style","text-decoration: underline");let p=o.insertCell();p.appendChild(document.createTextNode("Sensor")),p.setAttribute("style","text-decoration: underline");const h=l.b.getTimeManager();for(const n of e){const e=a.find((e=>e.objName===n.objName));e&&(o=s.insertRow(),o.setAttribute("class","link"),r=o.insertCell(),r.appendChild(document.createTextNode((0,Ht.v)(n.time,"isoDateTime",!0))),c=o.insertCell(),c.appendChild(document.createTextNode(n.el.toFixed(1))),d=o.insertCell(),d.appendChild(document.createTextNode(n.az.toFixed(0))),u=o.insertCell(),u.appendChild(document.createTextNode(n.rng.toFixed(0))),p=o.insertCell(),p.appendChild(document.createTextNode(null!==(t=e.shortName)&&void 0!==t?t:"")),o.addEventListener("click",(()=>{h.changeStaticOffset(new Date(n.time).getTime()-(new Date).getTime()),i.setSensor(e,e.sensorId)})))}}}Sa.PLUGIN_NAME="Multi Site Look Angles";class Ma extends u.c{constructor(){super(Sa.PLUGIN_NAME),this.bottomIconCallback=()=>{if(this.isMenuButtonActive){const e=l.b.getSensorManager();e.isSensorSelected()&&((0,n.Gn)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,n.Gn)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,n.Gn)("cs-hei").value=e.currentSensors[0].alt.toString())}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=va,this.sideMenuElementName="custom-sensor-menu",this.sideMenuElementHtml=l.b.html`
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
  </ul>`,this.rmbCallback=e=>{const t=l.b.getSensorManager(),i=l.b.getColorSchemeManager(),a=l.b.getUiManager(),s=l.b.getCatalogManager(),o=l.b.getInputManager().mouse;switch(e){case"create-observer-rmb":(0,C.$k)((0,n.Gn)("custom-sensor-menu"),1e3),(0,n.Gn)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,n.Gn)("cs-telescope").checked||(0,n.Gn)("cs-telescope").click(),(0,n.Gn)("cs-lat").value=o.latLon.lat.toString(),(0,n.Gn)("cs-lon").value=o.latLon.lon.toString(),(0,n.Gn)("cs-hei").value="0",(0,n.Gn)("cs-type").value="Observer",ga((0,n.Gn)("customSensor")),s.satCruncher.postMessage({isSunlightView:!0,typ:xt.Bi.SUNLIGHT_VIEW}),ht.j.change("sunlight"),a.colorSchemeChangeAlert(i.sunlight),_t(s.satCruncher,(()=>{i.setColorScheme(i.sunlight,!0)}),(e=>e.satInSun));break;case"create-sensor-rmb":(0,C.$k)((0,n.Gn)("custom-sensor-menu"),1e3),(0,n.Gn)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,n.Gn)("cs-telescope").checked&&(0,n.Gn)("cs-telescope").click(),(0,n.Gn)("cs-lat").value=o.latLon.lat.toString(),(0,n.Gn)("cs-lon").value=o.latLon.lon.toString(),(0,n.Gn)("cs-hei").value="0",(0,n.Gn)("cs-type").value="Phased Array Radar",(0,n.Gn)("cs-minaz").value="0",(0,n.Gn)("cs-maxaz").value="360",(0,n.Gn)("cs-minel").value="10",(0,n.Gn)("cs-maxel").value="90",(0,n.Gn)("cs-minrange").value="0",(0,n.Gn)("cs-maxrange").value="5556",ga((0,n.Gn)("customSensor")),ht.j.change("default"),i.setColorScheme(i.default,!0),a.colorSchemeChangeAlert(settingsManager.currentColorScheme),s.satCruncher.postMessage({isSunlightView:!1,typ:xt.Bi.SUNLIGHT_VIEW})}},this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=l.b.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{Ma.httpsCheck_(),Ma.addCustomSensorFormSubmitListener(),Ma.addTelescopeClickListener_(),Ma.addCustomSensorBtnCLickListener_(),Ma.addClearCustomSensorListener_()}})}static httpsCheck_(){"https:"!==location.protocol?(0,n.UT)("cs-geolocation"):Ma.addUseGeolocationListener_()}static addCustomSensorFormSubmitListener(){(0,n.Gn)("customSensor").addEventListener("submit",(e=>{e.preventDefault()}))}static addUseGeolocationListener_(){(0,n.Gn)("cs-geolocation").addEventListener("click",ba.useCurrentGeolocationAsSensor)}static addClearCustomSensorListener_(){(0,n.Gn)("cs-clear").addEventListener("click",(()=>{l.b.getSensorManager().clearSecondarySensors()}))}static addCustomSensorBtnCLickListener_(){(0,n.Gn)("cs-submit").addEventListener("click",(()=>{Ma.processCustomSensorSubmit_()}))}static processCustomSensorSubmit_(){var e,t,i,a,s;null===(e=(0,n.Gn)("menu-sensor-info"))||void 0===e||e.classList.remove("bmenu-item-disabled"),null===(t=(0,n.Gn)("menu-fov-bubble"))||void 0===t||t.classList.remove("bmenu-item-disabled"),null===(i=(0,n.Gn)("menu-surveillance"))||void 0===i||i.classList.remove("bmenu-item-disabled"),null===(a=(0,n.Gn)("menu-planetarium"))||void 0===a||a.classList.remove("bmenu-item-disabled"),null===(s=(0,n.Gn)("menu-astronomy"))||void 0===s||s.classList.remove("bmenu-item-disabled"),(0,n.Gn)("sensor-type").value=(0,n.Gn)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,n.Gn)("sensor-info-title").innerHTML="Custom Sensor",(0,n.Gn)("sensor-country").innerHTML="Custom Sensor";const o=Ma.str2Deg((0,n.Gn)("cs-lon").value),r=Ma.str2Deg((0,n.Gn)("cs-lat").value),c=(0,n.Gn)("cs-hei").value,d=(0,n.Gn)("cs-type").value,u=(0,n.Gn)("cs-minaz").value,p=(0,n.Gn)("cs-maxaz").value,h=(0,n.Gn)("cs-minel").value,g=(0,n.Gn)("cs-maxel").value,m=(0,n.Gn)("cs-minrange").value,b=(0,n.Gn)("cs-maxrange").value;let v=y.ge.OBSERVER;switch(d){case"Observer":v=y.ge.OBSERVER;break;case"Optical":v=y.ge.OPTICAL;break;case"Mechanical":v=y.ge.MECHANICAL;break;case"Phased Array Radar":v=y.ge.PHASED_ARRAY_RADAR;break;default:f.x.info("Unknown sensor type: "+d),v=y.ge.OBSERVER}l.b.getSensorManager().addSecondarySensor(new y.hs({id:null,lat:r,lon:o,alt:Ma.str2Km(c),minAz:Ma.str2Deg(u),maxAz:Ma.str2Deg(p),minEl:Ma.str2Deg(h),maxEl:Ma.str2Deg(g),minRng:Ma.str2Km(m),maxRng:Ma.str2Km(b),type:v,name:"Custom Sensor",uiName:"Custom Sensor",system:"Custom Sensor",country:"Custom Sensor",objName:"Custom Sensor",operator:"Custom Sensor",zoom:Ma.str2Km(b)>6e3?y.$R.GEO:y.$R.LEO,volume:!1}))}static addTelescopeClickListener_(){(0,n.Gn)("cs-telescope").addEventListener("click",(()=>{if((0,n.Gn)("cs-telescope").checked)(0,n.Gn)("cs-minaz-div").style.display="none",(0,n.Gn)("cs-maxaz-div").style.display="none",(0,n.Gn)("cs-minel-div").style.display="none",(0,n.Gn)("cs-maxel-div").style.display="none",(0,n.Gn)("cs-minrange-div").style.display="none",(0,n.Gn)("cs-maxrange-div").style.display="none",(0,n.Gn)("cs-minaz").value="0",(0,n.Gn)("cs-maxaz").value="360",(0,n.Gn)("cs-minel").value="10",(0,n.Gn)("cs-maxel").value="90",(0,n.Gn)("cs-minrange").value="100",(0,n.Gn)("cs-maxrange").value="1000000";else{(0,n.Gn)("cs-minaz-div").style.display="block",(0,n.Gn)("cs-maxaz-div").style.display="block",(0,n.Gn)("cs-minel-div").style.display="block",(0,n.Gn)("cs-maxel-div").style.display="block",(0,n.Gn)("cs-minrange-div").style.display="block",(0,n.Gn)("cs-maxrange-div").style.display="block";const e=l.b.getSensorManager();e.isSensorSelected()&&((0,n.Gn)("cs-minaz").value=e.currentSensors[0].minAz.toString(),(0,n.Gn)("cs-maxaz").value=e.currentSensors[0].maxAz.toString(),(0,n.Gn)("cs-minel").value=e.currentSensors[0].minEl.toString(),(0,n.Gn)("cs-maxel").value=e.currentSensors[0].maxEl.toString(),(0,n.Gn)("cs-minrange").value=e.currentSensors[0].minRng.toString(),(0,n.Gn)("cs-maxrange").value=e.currentSensors[0].maxRng.toString())}}))}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}Ma.PLUGIN_NAME="Custom Sensor";var ya=i(5058);const wa=i.p+"../img/lookangles.png";class Ca extends u.c{constructor(){super(Ca.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.isRiseSetLookangles_=!0,this.lookanglesInterval_=30,this.lookanglesLength_=2,this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconElementName="look-angles-icon",this.bottomIconLabel="Look Angles",this.bottomIconImg=wa,this.bottomIconCallback=()=>{this.refreshSideMenuData_()},this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:450},this.helpTitle="Look Angles Menu",this.helpBody=l.b.html`
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
    </div>`,this.refreshSideMenuData_=()=>{this.isMenuButtonActive&&(0,v.QP)((()=>{const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);e.isSatellite()&&this.getlookangles_(e)}))},this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;(0,n.Gn)("look-angles-length").addEventListener("change",(()=>{this.lookanglesLength_=parseFloat((0,n.Gn)("look-angles-length").value),this.refreshSideMenuData_()})),(0,n.Gn)("look-angles-interval").addEventListener("change",(()=>{this.lookanglesInterval_=parseInt((0,n.Gn)("look-angles-interval").value),this.refreshSideMenuData_()})),null===(e=(0,n.Gn)("export-look-angles"))||void 0===e||e.addEventListener("click",(()=>{l.b.getSoundManager().play(h.p.EXPORT),(0,ot.Eb)(this.lastlooksArray_,"Look-Angles")})),(0,n.Gn)("settings-riseset").addEventListener("change",this.settingsRisesetChange_.bind(this));const t=this.selectSatManager_.getSelectedSat();this.checkIfCanBeEnabled_(t)}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}}),l.b.register({event:o.RL.resetSensor,cbName:this.PLUGIN_NAME,cb:()=>{this.checkIfCanBeEnabled_(null)}})}addJs(){super.addJs(),l.b.register({event:o.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData_()}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&l.b.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.getlookangles_(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}getlookangles_(e,t){const i=l.b.getTimeManager();if(!t){const e=l.b.getSensorManager();if(!e.isSensorSelected())return console.debug("satellite.getlookangles requires a sensor to be set!"),[];t=e.currentSensors}let a=this.isRiseSetLookangles_?1:this.lookanglesInterval_,s=[],n=0;for(let o=0;o<24*this.lookanglesLength_*60*60;o+=a){n=1e3*o;let a=i.getOffsetTimeObj(n),l=ya.J.getTearData(a,e.satrec,t,this.isRiseSetLookangles_);if(""!==l.time&&s.push(l),s.length>=1500)break}return s.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),this.lastlooksArray_=s,Ca.populateSideMenuTable_(s,i),s}static populateSideMenuTable_(e,t){let i=(0,n.Gn)("looks");i.innerHTML="";let a=i.insertRow(),s=a.insertCell();s.appendChild(document.createTextNode("Time")),s.setAttribute("style","text-decoration: underline");let o=a.insertCell();o.appendChild(document.createTextNode("El")),o.setAttribute("style","text-decoration: underline");let l=a.insertCell();l.appendChild(document.createTextNode("Az")),l.setAttribute("style","text-decoration: underline");let r=a.insertCell();r.appendChild(document.createTextNode("Rng")),r.setAttribute("style","text-decoration: underline");for(const a of e)Ca.populateSideMenuRow_(i,s,a,t,o,l,r)}static populateSideMenuRow_(e,t,i,a,s,n,r){if(e.rows.length>0){const s=e.insertRow();s.setAttribute("class","link"),(t=s.insertCell()).appendChild(document.createTextNode((0,Ht.v)(i.time,"isoDateTime",!1))),t.addEventListener("click",(()=>{a.changeStaticOffset(new Date((0,Ht.v)(i.time,"isoDateTime",!1)+"z").getTime()-a.realTime),a.calculateSimulationTime(),l.b.runEvent(o.RL.updateDateTime,new Date(a.dynamicOffsetEpoch+a.staticOffset))})),s.insertCell().appendChild(document.createTextNode(i.el.toFixed(1))),s.insertCell().appendChild(document.createTextNode(i.az.toFixed(0))),s.insertCell().appendChild(document.createTextNode(i.rng.toFixed(0)))}}settingsRisesetChange_(e,t){if(null==e)throw new Error("e is undefined");null!=t||(t=(0,n.Gn)("settings-riseset").checked),this.isRiseSetLookangles_=!!t,this.refreshSideMenuData_()}}Ca.PLUGIN_NAME="Look Angles";const La=i.p+"../img/radio-tower.png";class Aa extends u.c{constructor(){super(Aa.PLUGIN_NAME),this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.getSensorInfo(),this.checkIfLinesVisible_(l.b.getLineManager())},this.bottomIconElementName="sensor-info-icon",this.bottomIconLabel="Sensor Info",this.bottomIconImg=La,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="sensor-info-menu",this.sideMenuElementHtml=l.b.html`
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
    Additionally, lines can be quickly created from the sensor to the sun or moon from this menu.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.addSensorToSunBtnListener_(),this.addSensorToMoonBtnListener()}}),l.b.register({event:o.RL.onLineAdded,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfLinesVisible_(e)}})}checkIfLinesVisible_(e){this.isSunLineVisible_=e.drawLineList.some((e=>e.type===Ni.jv.SENSOR_TO_SUN)),this.isSunLineVisible_?((0,n.Gn)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0):((0,n.Gn)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1),this.isMonnLineVisible_=e.drawLineList.some((e=>e.type===Ni.jv.SENSOR_TO_MOON)),this.isMonnLineVisible_?((0,n.Gn)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0):((0,n.Gn)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1)}addSensorToMoonBtnListener(){(0,n.Gn)("sensor-moon-btn").addEventListener("click",(()=>{if(this.isMonnLineVisible_){const e=l.b.getLineManager();for(const t of e.drawLineList)if(t.type===Ni.jv.SENSOR_TO_MOON)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,n.Gn)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1,void l.b.getSoundManager().play(h.p.TOGGLE_OFF)}else{const e=l.b.getSensorManager().currentSensors;1!==e.length&&l.b.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.b.getScene();l.b.getLineManager().create(Ni.jv.SENSOR_TO_MOON,[l.b.getCatalogManager().getSensorFromSensorName(e[0].name),t.moon.position[0],t.moon.position[1],t.moon.position[2]],"w"),(0,n.Gn)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0,l.b.getSoundManager().play(h.p.TOGGLE_ON)}}))}addSensorToSunBtnListener_(){(0,n.Gn)("sensor-sun-btn").addEventListener("click",(()=>{if(this.isSunLineVisible_){const e=l.b.getLineManager();for(const t of e.drawLineList)if(t.type===Ni.jv.SENSOR_TO_SUN)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,n.Gn)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1,void l.b.getSoundManager().play(h.p.TOGGLE_OFF)}else{const e=l.b.getSensorManager().currentSensors;1!==e.length&&l.b.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.b.getScene();l.b.getLineManager().create(Ni.jv.SENSOR_TO_SUN,[l.b.getCatalogManager().getSensorFromSensorName(e[0].name),t.sun.position[0],t.sun.position[1],t.sun.position[2]],"o"),(0,n.Gn)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0,l.b.getSoundManager().play(h.p.TOGGLE_ON)}}))}getSensorInfo(){if(!this.isHtmlAdded)return;const e=l.b.getSensorManager().currentSensors[0];(0,n.Gn)("sensor-latitude").innerHTML=e.lat>0?`${e.lat.toFixed(2)}° N`:`${Math.abs(e.lat).toFixed(2)}° S`,(0,n.Gn)("sensor-longitude").innerHTML=e.lon>0?`${e.lon.toFixed(2)}° E`:`${Math.abs(e.lon).toFixed(2)}° W`,(0,n.Gn)("sensor-minazimuth").innerHTML=`${e.minAz.toFixed(1).toString()}°`,(0,n.Gn)("sensor-maxazimuth").innerHTML=`${e.maxAz.toFixed(1).toString()}°`,(0,n.Gn)("sensor-minelevation").innerHTML=`${e.minEl.toFixed(1).toString()}°`,(0,n.Gn)("sensor-maxelevation").innerHTML=`${e.maxEl.toFixed(1).toString()}°`,(0,n.Gn)("sensor-minrange").innerHTML=`${e.minRng.toFixed(1).toString()} km`,(0,n.Gn)("sensor-maxrange").innerHTML=`${e.maxRng.toFixed(1).toString()} km`,e.type===y.ge.OPTICAL||e.type===y.ge.OBSERVER?((0,n.UT)((0,n.Gn)("sensor-band").parentElement),(0,n.UT)((0,n.Gn)("sensor-beamwidth").parentElement)):((0,n.K4)((0,n.Gn)("sensor-band").parentElement),(0,n.K4)((0,n.Gn)("sensor-beamwidth").parentElement),(0,n.Gn)("sensor-band").innerHTML=e.band?e.band:"Unknown",(0,n.Gn)("sensor-beamwidth").innerHTML=e.beamwidth?`${e.beamwidth.toFixed(1).toString()}°`:"Unknown")}}Aa.PLUGIN_NAME="Sensor Info";var xa=i(292);const ka=i.p+"../img/settings.png";var Ea=i(1443),Ta=i(320),Ia=i.n(Ta),Na=i(2478);class Ga extends u.c{constructor(){super(Ga.PLUGIN_NAME),this.bottomIconElementName="settings-menu-icon",this.bottomIconImg=ka,this.bottomIconLabel="Settings Menu",this.sideMenuElementName="settings-menu",this.sideMenuElementHtml=l.b.html`
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=l.b.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e,t,i,a,s,o,l;(0,n.Gn)("settings-form").addEventListener("change",Ga.onFormChange),(0,n.Gn)("settings-form").addEventListener("submit",Ga.onSubmit),(0,n.Gn)("settings-reset").addEventListener("click",Ga.resetToDefaults);const r=[(0,xa.S)([1,0,0,1]),(0,xa.S)([1,.75,0,1]),(0,xa.S)([.85,.5,0,1]),(0,xa.S)([1,1,0,1]),(0,xa.S)([0,1,0,1]),(0,xa.S)([.2,1,0,.5]),(0,xa.S)([.2,1,1,1]),(0,xa.S)([0,0,1,1]),(0,xa.S)([.2,.4,1,1]),(0,xa.S)([.64,0,.64,1]),(0,xa.S)([1,0,.6,1]),(0,xa.S)([.5,.5,.5,1]),(0,xa.S)([1,1,1,1])],c=this;Ia()("#settings-color-payload").colorPick({initialColor:(0,xa.S)((null===(e=settingsManager.colors)||void 0===e?void 0:e.payload)||[.2,1,0,.5]),palette:r,onColorSelected:function(){c.onColorSelected(this,"payload")}}),Ia()("#settings-color-rocketBody").colorPick({initialColor:(0,xa.S)((null===(t=settingsManager.colors)||void 0===t?void 0:t.rocketBody)||[.2,.4,1,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"rocketBody")}}),Ia()("#settings-color-debris").colorPick({initialColor:(0,xa.S)((null===(i=settingsManager.colors)||void 0===i?void 0:i.debris)||[.5,.5,.5,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"debris")}}),Ia()("#settings-color-inview").colorPick({initialColor:(0,xa.S)((null===(a=settingsManager.colors)||void 0===a?void 0:a.inFOV)||[.85,.5,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"inview")}}),Ia()("#settings-color-missile").colorPick({initialColor:(0,xa.S)((null===(s=settingsManager.colors)||void 0===s?void 0:s.missile)||[1,1,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"missile")}}),Ia()("#settings-color-missileInview").colorPick({initialColor:(0,xa.S)((null===(o=settingsManager.colors)||void 0===o?void 0:o.missileInview)||[1,0,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"missileInview")}}),Ia()("#settings-color-special").colorPick({initialColor:(0,xa.S)((null===(l=settingsManager.colors)||void 0===l?void 0:l.pink)||[1,0,.6,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"pink")}}),this.isNotColorPickerInitialSetup=!0}})}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{Ga.syncOnLoad()}})}onColorSelected(e,t){if(null==e)throw new Error("context is undefined");if(null==t)throw new Error("colorStr is undefined");if(e.element.css("cssText",`background-color: ${e.color} !important; color: ${e.color};`),this.isNotColorPickerInitialSetup){settingsManager.colors[t]=(e=>{let[t,i,a,s]=e.match(/(?<!\w)-?[\d.]+/gu);if(t=parseFloat(t)/255,i=parseFloat(i)/255,a=parseFloat(a)/255,s=parseFloat(s),t<0||t>1||i<0||i>1||a<0||a>1||s<0||s>1||isNaN(t)||isNaN(i)||isNaN(a)||isNaN(s))throw new Error("Invalid rgba input");return[t,i,a,s]})(e.color),ht.j.legendColorsChange();const i=l.b.getColorSchemeManager();i.setColorScheme(i.currentColorScheme,!0),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_MANAGER_COLORS,JSON.stringify(settingsManager.colors))}}static onFormChange(e,t,i){var a,s,o;if(null==e)throw new Error("e is undefined");switch(null===(a=e.target)||void 0===a?void 0:a.id){case"settings-notionalSats":case"settings-leoSats":case"settings-starlinkSats":case"settings-heoSats":case"settings-meoSats":case"settings-geoSats":case"settings-showPayloads":case"settings-showRocketBodies":case"settings-showDebris":case"settings-showAgencies":case"settings-drawOrbits":case"settings-drawTrailingOrbits":case"settings-drawEcf":case"settings-isDrawInCoverageLines":case"settings-drawSun":case"settings-drawBlackEarth":case"settings-drawAtmosphere":case"settings-drawAurora":case"settings-drawMilkyWay":case"settings-graySkybox":case"settings-eciOnHover":case"settings-hos":case"settings-confidence-levels":case"settings-demo-mode":case"settings-sat-label-mode":case"settings-freeze-drag":case"settings-time-machine-toasts":case"settings-snp":(0,n.Gn)(e.target.id).checked?null===(s=l.b.getSoundManager())||void 0===s||s.play(h.p.TOGGLE_ON):null===(o=l.b.getSoundManager())||void 0===o||o.play(h.p.TOGGLE_OFF)}null!=t||(t=(0,n.Gn)("settings-demo-mode").checked),null!=i||(i=(0,n.Gn)("settings-sat-label-mode").checked),i&&"settings-demo-mode"===e.target.id&&((0,n.Gn)("settings-sat-label-mode").checked=!1,(0,n.Gn)("settings-demo-mode").classList.remove("lever:after")),t&&"settings-sat-label-mode"===e.target.id&&((0,n.Gn)("settings-demo-mode").checked=!1,(0,n.Gn)("settings-sat-label-mode").classList.remove("lever:after"))}static syncOnLoad(){(0,n.Gn)("settings-notionalSats").checked=settingsManager.isShowNotionalSats,(0,n.Gn)("settings-leoSats").checked=settingsManager.isShowLeoSats,(0,n.Gn)("settings-starlinkSats").checked=settingsManager.isShowStarlinkSats,(0,n.Gn)("settings-heoSats").checked=settingsManager.isShowHeoSats,(0,n.Gn)("settings-meoSats").checked=settingsManager.isShowMeoSats,(0,n.Gn)("settings-geoSats").checked=settingsManager.isShowGeoSats,(0,n.Gn)("settings-showPayloads").checked=settingsManager.isShowPayloads,(0,n.Gn)("settings-showRocketBodies").checked=settingsManager.isShowRocketBodies,(0,n.Gn)("settings-showDebris").checked=settingsManager.isShowDebris,(0,n.Gn)("settings-showAgencies").checked=settingsManager.isShowAgencies,(0,n.Gn)("settings-drawOrbits").checked=settingsManager.isDrawOrbits,(0,n.Gn)("settings-drawTrailingOrbits").checked=settingsManager.isDrawTrailingOrbits,(0,n.Gn)("settings-drawEcf").checked=settingsManager.isOrbitCruncherInEcf,(0,n.Gn)("settings-isDrawInCoverageLines").checked=settingsManager.isDrawInCoverageLines,(0,n.Gn)("settings-drawSun").checked=settingsManager.isDrawSun,(0,n.Gn)("settings-drawBlackEarth").checked=settingsManager.isBlackEarth,(0,n.Gn)("settings-drawAtmosphere").checked=settingsManager.isDrawAtmosphere,(0,n.Gn)("settings-drawAurora").checked=settingsManager.isDrawAurora,(0,n.Gn)("settings-drawMilkyWay").checked=settingsManager.isDrawMilkyWay,(0,n.Gn)("settings-graySkybox").checked=settingsManager.isGraySkybox,(0,n.Gn)("settings-eciOnHover").checked=settingsManager.isEciOnHover,(0,n.Gn)("settings-hos").checked=0===settingsManager.colors.transparent[3],(0,n.Gn)("settings-confidence-levels").checked=settingsManager.isShowConfidenceLevels,(0,n.Gn)("settings-demo-mode").checked=settingsManager.isDemoModeOn,(0,n.Gn)("settings-sat-label-mode").checked=settingsManager.isSatLabelModeOn,(0,n.Gn)("settings-freeze-drag").checked=settingsManager.isFreezePropRateOnDrag,(0,n.Gn)("settings-time-machine-toasts").checked=settingsManager.isDisableTimeMachineToasts,(0,n.Gn)("maxSearchSats").value=settingsManager.searchLimit.toString()}static preserveSettings(){Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_LEO_SATS,settingsManager.isShowLeoSats.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_STARLINK_SATS,settingsManager.isShowStarlinkSats.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_HEO_SATS,settingsManager.isShowHeoSats.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_MEO_SATS,settingsManager.isShowMeoSats.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_GEO_SATS,settingsManager.isShowGeoSats.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_PAYLOADS,settingsManager.isShowPayloads.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_ROCKET_BODIES,settingsManager.isShowRocketBodies.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DEBRIS,settingsManager.isShowDebris.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_AGENCIES,settingsManager.isShowAgencies.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DRAW_ORBITS,settingsManager.isDrawOrbits.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DRAW_TRAILING_ORBITS,settingsManager.isDrawTrailingOrbits.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DRAW_ECF,settingsManager.isOrbitCruncherInEcf.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DRAW_IN_COVERAGE_LINES,settingsManager.isDrawInCoverageLines.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DRAW_SUN,settingsManager.isDrawSun.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DRAW_BLACK_EARTH,settingsManager.isBlackEarth.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DRAW_ATMOSPHERE,settingsManager.isDrawAtmosphere.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DRAW_AURORA,settingsManager.isDrawAurora.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DRAW_MILKY_WAY,settingsManager.isDrawMilkyWay.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_GRAY_SKYBOX,settingsManager.isGraySkybox.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_ECI_ON_HOVER,settingsManager.isEciOnHover.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_HOS,0===settingsManager.colors.transparent[3]?"true":"false"),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_CONFIDENCE_LEVELS,settingsManager.isShowConfidenceLevels.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DEMO_MODE,settingsManager.isDemoModeOn.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_SAT_LABEL_MODE,settingsManager.isSatLabelModeOn.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_FREEZE_PROP_RATE_ON_DRAG,settingsManager.isFreezePropRateOnDrag.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_DISABLE_TIME_MACHINE_TOASTS,settingsManager.isDisableTimeMachineToasts.toString()),Ji.p.getInstance().saveItem(Ji.Q.SETTINGS_SEARCH_LIMIT,settingsManager.searchLimit.toString())}static resetToDefaults(){settingsManager.isShowLeoSats=!0,settingsManager.isShowHeoSats=!0,settingsManager.isShowMeoSats=!0,settingsManager.isShowGeoSats=!0,settingsManager.isShowPayloads=!0,settingsManager.isShowRocketBodies=!0,settingsManager.isShowDebris=!0,settingsManager.isShowAgencies=!1,settingsManager.isDrawOrbits=!0,settingsManager.isDrawTrailingOrbits=!1,settingsManager.isOrbitCruncherInEcf=!1,settingsManager.isDrawInCoverageLines=!0,settingsManager.isDrawSun=!0,settingsManager.isBlackEarth=!1,settingsManager.isDrawAtmosphere=!0,settingsManager.isDrawAurora=!0,settingsManager.isDrawMilkyWay=!0,settingsManager.isGraySkybox=!1,settingsManager.isEciOnHover=!1,settingsManager.isDemoModeOn=!1,settingsManager.isSatLabelModeOn=!0,settingsManager.isFreezePropRateOnDrag=!1,settingsManager.isDisableTimeMachineToasts=!1,settingsManager.searchLimit=150,Ga.preserveSettings(),Ga.syncOnLoad()}static onSubmit(e){var t,i;if(null==e)throw new Error("e is undefined");e.preventDefault();const a=l.b.getUiManager(),s=l.b.getColorSchemeManager();null===(t=l.b.getSoundManager())||void 0===t||t.play(h.p.BUTTON_CLICK),settingsManager.isShowNotionalSats=(0,n.Gn)("settings-notionalSats").checked,settingsManager.isShowLeoSats=(0,n.Gn)("settings-leoSats").checked,settingsManager.isShowStarlinkSats=(0,n.Gn)("settings-starlinkSats").checked,settingsManager.isShowHeoSats=(0,n.Gn)("settings-heoSats").checked,settingsManager.isShowMeoSats=(0,n.Gn)("settings-meoSats").checked,settingsManager.isShowGeoSats=(0,n.Gn)("settings-geoSats").checked,settingsManager.isShowPayloads=(0,n.Gn)("settings-showPayloads").checked,settingsManager.isShowRocketBodies=(0,n.Gn)("settings-showRocketBodies").checked,settingsManager.isShowDebris=(0,n.Gn)("settings-showDebris").checked,settingsManager.isShowAgencies=(0,n.Gn)("settings-showAgencies").checked,settingsManager.isOrbitCruncherInEcf=(0,n.Gn)("settings-drawEcf").checked,settingsManager.isDrawInCoverageLines=(0,n.Gn)("settings-isDrawInCoverageLines").checked,settingsManager.isDrawSun=(0,n.Gn)("settings-drawSun").checked;let o=settingsManager.isBlackEarth!==(0,n.Gn)("settings-drawBlackEarth").checked,r=settingsManager.isDrawAtmosphere!==(0,n.Gn)("settings-drawAtmosphere").checked,c=settingsManager.isDrawAurora!==(0,n.Gn)("settings-drawAurora").checked;settingsManager.isBlackEarth=(0,n.Gn)("settings-drawBlackEarth").checked,settingsManager.isDrawAtmosphere=(0,n.Gn)("settings-drawAtmosphere").checked,settingsManager.isDrawAurora=(0,n.Gn)("settings-drawAurora").checked,(o||r||c)&&l.b.getScene().earth.reloadEarthHiResTextures();const d=settingsManager.isDrawOrbits!==(0,n.Gn)("settings-drawOrbits").checked;settingsManager.isDrawOrbits=(0,n.Gn)("settings-drawOrbits").checked,d&&l.b.getOrbitManager().drawOrbitsSettingChanged(),settingsManager.isDrawTrailingOrbits=(0,n.Gn)("settings-drawTrailingOrbits").checked,l.b.getOrbitManager().orbitWorker&&(settingsManager.isDrawTrailingOrbits?l.b.getOrbitManager().orbitWorker.postMessage({typ:Ea.Mo.CHANGE_ORBIT_TYPE,orbitType:Ea.x4.TRAIL}):l.b.getOrbitManager().orbitWorker.postMessage({typ:Ea.Mo.CHANGE_ORBIT_TYPE,orbitType:Ea.x4.ORBIT}));let u=settingsManager.isDrawMilkyWay!==(0,n.Gn)("settings-drawMilkyWay").checked,p=settingsManager.isGraySkybox!==(0,n.Gn)("settings-graySkybox").checked;settingsManager.isDrawMilkyWay=(0,n.Gn)("settings-drawMilkyWay").checked,settingsManager.isGraySkybox=(0,n.Gn)("settings-graySkybox").checked,(u||p)&&l.b.getScene().skybox.init(settingsManager,l.b.getRenderer().gl),settingsManager.isEciOnHover=(0,n.Gn)("settings-eciOnHover").checked;const g=(0,n.Gn)("settings-hos").checked;settingsManager.colors.transparent=g?[1,1,1,0]:[1,1,1,.1],settingsManager.isShowConfidenceLevels=(0,n.Gn)("settings-confidence-levels").checked,settingsManager.isDemoModeOn=(0,n.Gn)("settings-demo-mode").checked,settingsManager.isSatLabelModeOn=(0,n.Gn)("settings-sat-label-mode").checked,settingsManager.isShowNextPass=(0,n.Gn)("settings-snp").checked,settingsManager.isFreezePropRateOnDrag=(0,n.Gn)("settings-freeze-drag").checked,settingsManager.isDisableTimeMachineToasts=(0,n.Gn)("settings-time-machine-toasts").checked,l.b.getPlugin(Na.i)&&(l.b.getPlugin(Na.i).isMenuButtonActive=!1),l.b.getGroupsManager().clearSelect(),s.setColorScheme(s.default,!0),null===(i=(0,n.Gn)("menu-time-machine"))||void 0===i||i.classList.remove("bmenu-item-selected"),s.reloadColors();const m=parseInt((0,n.Gn)("satFieldOfView").value);isNaN(m)?((0,n.Gn)("satFieldOfView").value="30",a.toast("Invalid field of view value!","critical")):l.b.getCatalogManager().satCruncher.postMessage({typ:xt.Bi.IS_UPDATE_SATELLITE_OVERFLY,selectedSatFOV:m});const b=parseInt((0,n.Gn)("maxSearchSats").value);isNaN(b)?((0,n.Gn)("maxSearchSats").value=settingsManager.searchLimit.toString(),a.toast("Invalid max search sats value!","critical")):(settingsManager.searchLimit=b,a.searchManager.doSearch(l.b.getUiManager().searchManager.getCurrentSearch())),s.setColorScheme(s.currentColorScheme,!0),Ga.preserveSettings()}}Ga.PLUGIN_NAME="Settings Menu";const _a=new Ga,Pa=i.p+"../img/search.png";class Ra extends u.c{constructor(){super(Ra.PLUGIN_NAME),this.dependencies=[ci.s.PLUGIN_NAME,p.P.PLUGIN_NAME],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=Pa,this.isRequireSensorSelected=!0,this.isAddStfLinksOnce=!1,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=l.b.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
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
  </div>`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{null!=e&&l.b.getPlugin(ci.s)&&!this.isAddStfLinksOnce&&((0,n.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
            <div id="stf-on-object-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,n.Gn)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0)}})}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("stfForm").addEventListener("submit",(e=>{e.preventDefault(),l.b.getSoundManager().play(h.p.MENU_BUTTON),this.onSubmit.bind(this)()})),(0,n.Gn)("stf-remove-last").addEventListener("click",(()=>{l.b.getSoundManager().play(h.p.MENU_BUTTON),l.b.getSensorManager().removeStf()})),(0,n.Gn)("stf-clear-all").addEventListener("click",(()=>{l.b.getSoundManager().play(h.p.MENU_BUTTON),l.b.getSensorManager().clearStf()})),(0,n.Gn)("stf-azExt").addEventListener("blur",(()=>{const e=parseFloat((0,n.Gn)("stf-az").value),t=parseFloat((0,n.Gn)("stf-el").value),i=parseFloat((0,n.Gn)("stf-rng").value);let a=parseFloat((0,n.Gn)("stf-azExt").value);a>80&&(a=80,(0,n.Gn)("stf-azExt").value=a.toFixed(1));const s=y.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),o=l.b.getSensorManager().currentSensors[0].toGeodetic().toITRF(s).toJ2000(),r=new y.rv(s,i,(e-a/2)*y.qW,t*y.qW).position(o),c=new y.rv(y.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),i,(e+a/2)*y.qW,t*y.qW).position(o),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,n.Gn)("stf-azExtKm").value=d.toFixed(1)})),(0,n.Gn)("stf-elExt").addEventListener("blur",(()=>{const e=parseFloat((0,n.Gn)("stf-az").value),t=parseFloat((0,n.Gn)("stf-el").value),i=parseFloat((0,n.Gn)("stf-rng").value);let a=parseFloat((0,n.Gn)("stf-elExt").value);a>80&&(a=80,(0,n.Gn)("stf-elExt").value=a.toFixed(1));const s=y.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),o=l.b.getSensorManager().currentSensors[0].toGeodetic().toITRF(s).toJ2000(),r=new y.rv(s,i,e*y.qW,(t-a/2)*y.qW).position(o),c=new y.rv(y.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),i,e*y.qW,(t+a/2)*y.qW).position(o),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,n.Gn)("stf-elExtKm").value=d.toFixed(1)}))}}),l.b.register({event:o.RL.resetSensor,cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),l.b.register({event:o.RL.setSensor,cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,C.kW)((0,n.Gn)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonActive=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),l.b.getUiManager().hideSideMenus()}onSubmit(){var e;if(!this.verifySensorSelected())return;const t=parseFloat((0,n.Gn)("stf-az").value),i=parseFloat((0,n.Gn)("stf-azExt").value),a=parseFloat((0,n.Gn)("stf-el").value),s=parseFloat((0,n.Gn)("stf-elExt").value),o=parseFloat((0,n.Gn)("stf-rng").value),r=parseFloat((0,n.Gn)("stf-rngExt").value),c=t-i/2<0?t-i/2+360:t-i/2,d=t+i/2>360?t+i/2-360:t+i/2,u=a-s/2,p=a+s/2,h=o-r/2,g=o+r/2,m=l.b.getSensorManager().currentSensors[0],b=new y.hs({lat:m.lat,lon:m.lon,alt:m.alt,minAz:c,maxAz:d,minEl:u,maxEl:p,minRng:h,maxRng:g,type:y.ge.SHORT_TERM_FENCE,name:"STF",uiName:"STF",zoom:g>6e3?y.$R.GEO:y.$R.LEO,volume:!0});m.isRaeInFov({az:c,el:u,rng:h})&&m.isRaeInFov({az:d,el:p,rng:g})?(l.b.getSensorManager().addStf(b),null===(e=l.b.getPlugin(Wi.n))||void 0===e||e.enableFovView()):f.x.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=l.b.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=l.b.getTimeManager().simulationTimeObj,i=(0,y.Zn)(t,this.selectSatManager_.primarySatObj.position,e.currentSensors[0]);(0,n.Gn)("stf-az").value=i.az.toFixed(1),(0,n.Gn)("stf-el").value=i.el.toFixed(1),(0,n.Gn)("stf-rng").value=i.rng.toFixed(1),l.b.getUiManager().hideSideMenus(),(0,C.$k)((0,n.Gn)("stf-menu"),1e3),this.isMenuButtonActive=!0,this.setBottomIconToSelected()}}Ra.PLUGIN_NAME="Short Term Fences";var Oa=i(9383);class Da extends u.c{constructor(){super("Social Media"),this.dependencies=["Top Menu"]}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:Da.uiManagerFinal_})}static uiManagerFinal_(){var e;const t=document.createElement("li");t.innerHTML=l.b.html`
          <a id="github-share1" class="top-menu-btns" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            width="22"
            height="22"
            style="margin-top: 1px;"
            src="${Oa}"
            />
          </a>
          `,null===(e=(0,n.Gn)("nav-mobile2",!0))||void 0===e||e.insertBefore(t,(0,n.Gn)("nav-mobile2").firstChild)}}var Fa=i(5957);class Ua extends u.c{constructor(){super(Ua.PLUGIN_NAME),this.isRotateL=!0,this.isRotateR=!1,this.isRotateU=!1,this.isRotateD=!1,this.bottomIconElementName="video-director-icon",this.bottomIconImg=ka,this.bottomIconLabel="Video Director",this.sideMenuElementName="video-director-menu",this.sideMenuElementHtml=l.b.html`
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=l.b.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.Gn)("video-director-form").addEventListener("change",Ua.onFormChange),(0,n.Gn)("video-director-form").addEventListener("submit",Ua.onSubmit),(0,n.Gn)("video-director-rotate").addEventListener("click",(()=>{var e;null===(e=l.b.getSoundManager())||void 0===e||e.play(h.p.BUTTON_CLICK),l.b.getMainCamera().autoRotate(!0)}))}})}static onFormChange(e){var t,i,a;if(null==e)throw new Error("e is undefined");switch(null===(t=e.target)||void 0===t?void 0:t.id){case"video-director-rotateL":case"video-director-rotateR":case"video-director-rotateU":case"video-director-rotateD":case"video-director-panL":case"video-director-panR":case"video-director-panU":case"video-director-panD":case"video-director-zoomIn":case"video-director-zoomOut":(0,n.Gn)(e.target.id).checked?null===(i=l.b.getSoundManager())||void 0===i||i.play(h.p.TOGGLE_ON):null===(a=l.b.getSoundManager())||void 0===a||a.play(h.p.TOGGLE_OFF)}(0,n.Gn)("video-director-selectedColor").checked&&0!==settingsManager.selectedColor[3]?(settingsManager.selectedColorFallback=settingsManager.selectedColor,settingsManager.selectedColor=[0,0,0,0]):settingsManager.selectedColor=settingsManager.selectedColorFallback,settingsManager.autoRotateSpeed=parseFloat((0,n.Gn)("video-director-rotateSpeed").value),settingsManager.autoPanSpeed=parseFloat((0,n.Gn)("video-director-panSpeed").value),settingsManager.autoZoomSpeed=parseFloat((0,n.Gn)("video-director-zoomSpeed").value);const s=(0,n.Gn)("video-director-rotateL").checked,o=(0,n.Gn)("video-director-rotateR").checked,r=(0,n.Gn)("video-director-rotateU").checked,c=(0,n.Gn)("video-director-rotateD").checked,d=(0,n.Gn)("video-director-panL").checked,u=(0,n.Gn)("video-director-panR").checked,p=(0,n.Gn)("video-director-panU").checked,g=(0,n.Gn)("video-director-panD").checked,m=(0,n.Gn)("video-director-zoomIn").checked,b=(0,n.Gn)("video-director-zoomOut").checked;s&&!settingsManager.isAutoRotateL&&((0,n.Gn)("video-director-rotateR").checked=!1),o&&!settingsManager.isAutoRotateR&&((0,n.Gn)("video-director-rotateL").checked=!1),r&&!settingsManager.isAutoRotateU&&((0,n.Gn)("video-director-rotateD").checked=!1),c&&!settingsManager.isAutoRotateD&&((0,n.Gn)("video-director-rotateU").checked=!1),d&&!settingsManager.isAutoPanL&&((0,n.Gn)("video-director-panR").checked=!1),u&&!settingsManager.isAutoPanR&&((0,n.Gn)("video-director-panL").checked=!1),p&&!settingsManager.isAutoPanU&&((0,n.Gn)("video-director-panD").checked=!1),g&&!settingsManager.isAutoPanD&&((0,n.Gn)("video-director-panU").checked=!1),m&&!settingsManager.isAutoZoomIn&&((0,n.Gn)("video-director-zoomOut").checked=!1),b&&!settingsManager.isAutoZoomOut&&((0,n.Gn)("video-director-zoomIn").checked=!1)}static onSubmit(e){var t;if(null==e)throw new Error("e is undefined");e.preventDefault(),null===(t=l.b.getSoundManager())||void 0===t||t.play(h.p.BUTTON_CLICK),settingsManager.isAutoRotateR=(0,n.Gn)("video-director-rotateR").checked,settingsManager.isAutoRotateL=(0,n.Gn)("video-director-rotateL").checked,settingsManager.isAutoRotateU=(0,n.Gn)("video-director-rotateU").checked,settingsManager.isAutoRotateD=(0,n.Gn)("video-director-rotateD").checked,settingsManager.isAutoPanR=(0,n.Gn)("video-director-panR").checked,settingsManager.isAutoPanL=(0,n.Gn)("video-director-panL").checked,settingsManager.isAutoPanU=(0,n.Gn)("video-director-panU").checked,settingsManager.isAutoPanD=(0,n.Gn)("video-director-panD").checked,settingsManager.isAutoZoomIn=(0,n.Gn)("video-director-zoomIn").checked,settingsManager.isAutoZoomOut=(0,n.Gn)("video-director-zoomOut").checked}}Ua.PLUGIN_NAME="Video Director";const Ba=new Ua;var za=i(195),$a=i(2257);const Ha=(e,t)=>{return i=void 0,a=void 0,n=function*(){null!=t||(t={});try{ja(t),t.classificationBar&&(new Tt).init(),t.sensor&&((new pa).init(),(new Aa).init(),(new Ma).init(),(new Ca).init(),(new Sa).init()),t.watchlist&&((new za.y).init(),(new $a._).init()),t.nextLaunch&&(new oi).init(),t.findSat&&(new w).init(),t.shortTermFences&&(new Ra).init(),t.orbitReferences&&(new di).init(),t.collisions&&(new Nt).init(),t.breakup&&(new kt).init(),t.debrisScreening&&(new Ft).init(),t.editSat&&(new Yt).init(),t.newLaunch&&(new ai).init(),t.missile&&z(),t.stereoMap&&(new Fa.k).init(),t.sensorFov&&(new Wi.n).init(),t.sensorSurv&&(new ha.I).init(),t.satelliteView&&(new W).init(),t.satelliteFov&&(new Ri.F).init(),t.planetarium&&(new bt).init(),t.astronomy&&(new vt).init(),t.nightToggle&&(new ri).init(),t.dops&&Kt.init(),t.constellations&&Pi.init(),t.countries&&m.init(),t.colorsMenu&&Ot.init(),t.screenshot&&Ki.init(),t.launchCalendar&&ei.init(),t.timeMachine&&Na.M.init(),t.photoManager&&Ui.init(),t.screenRecorder&&Hi.init(),t.analysis&&pt.init(),t.plotAnalysis&&fi.init(),t.plotAnalysis&&mi.init(),t.plotAnalysis&&xi.init(),t.plotAnalysis&&Ti.init(),t.plotAnalysis&&yi.init(),t.plotAnalysis&&Ci.init(),t.aboutManager&&st.init(),t.settingsMenu&&_a.init(),t.soundManager&&Ze.init(),t.gamepad&&Jt.init(),t.videoDirector&&Ba.init(),e.register({event:o.RL.uiManagerFinal,cbName:"core",cb:()=>{Va(t)}})}catch(e){f.x.info("Error loading core plugins:"+e.message)}},new((s=void 0)||(s=Promise))((function(e,t){function o(e){try{r(n.next(e))}catch(e){t(e)}}function l(e){try{r(n.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(o,l)}r((n=n.apply(i,a||[])).next())}));var i,a,s,n},ja=e=>{e.debug&&(new Ut.s).init(),(new p.P).init(),e.topMenu&&(new et.F).init(),e.satInfoboxCore&&(new ci.s).init(),e.datetime&&(new Dt.s).init(),e.social&&(new Da).init()},Va=e=>{const t=(0,n.Gn)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",e+"px")}else document.documentElement.style.setProperty("--bottom-menu-height","0px");if(e.topMenu){let e=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(e)&&(e=0),settingsManager.isMobileModeEnabled?document.documentElement.style.setProperty("--top-menu-height",e+17+"px"):document.documentElement.style.setProperty("--top-menu-height",e+22+"px")}(0,n.Gn)("bottom-icons")&&""==(0,n.Gn)("bottom-icons").innerText?((0,n.Gn)("nav-footer").style.visibility="hidden",(0,n.UT)("nav-footer")):(0,n.K4)("nav-footer");const i=(0,n.Gn)("bottom-icons-container");if(i){const e=i.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",e+"px")}e.aboutManager&&((0,n.Gn)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"keeptrack.space"!==window.location.hostname&&"www.keeptrack.space"!==window.location.hostname||Ka(),(0,n.Gn)("bottom-icons-container").addEventListener("mousewheel",(e=>{e.preventDefault(),((e,t)=>{const i=e.scrollTop+.15*t;e.scrollTop=i})(e.currentTarget,e.deltaY)}),{passive:!1})},Ka=()=>{const e=document.createElement("script");e.type="text/javascript",e.setAttribute("async","true"),e.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7"),document.documentElement.firstChild.appendChild(e),window.dataLayer=window.dataLayer||[];const t=function(e,t){window.dataLayer.push(arguments)};t("js",new Date),t("config","G-ENHWK6L0X7")}}}]);