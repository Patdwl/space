"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[114],{2378:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(3835),n=i.n(a),s=i(8645),o=i.n(s)()(n());o.push([e.id,"#collisions-table {\n  line-height: 0.05;\n  font-size: 13px;\n}\n\n#collisions-table td {\n  text-align: center;\n}\n",""]);const l=o},3862:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(3835),n=i.n(a),s=i(8645),o=i.n(s)()(n());o.push([e.id,"#reset-sensor-button {\n  margin: 10px 0px;\n}\n\n#reset-sensor-text {\n  text-align: center;\n}\n\n#list-of-sensors li:first-child {\n  display: none;\n}\n\n#sensor-list-content ul li {\n  padding: 2px !important;\n  overflow: hidden !important;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n/* First span goes left */\n#sensor-list-content ul li span:first-child {\n  float: left;\n  text-align: left;\n}\n\n/* Second span is centered */\n#sensor-list-content ul li span:nth-child(2) {\n  text-align: center;\n}\n\n/* Third span goes right */\n#sensor-list-content ul li span:last-child {\n  float: right;\n  text-align: right;\n}\n",""]);const l=o},1253:(e,t,i)=>{i.r(t),i.d(t,{CanvasRecorder:()=>Hi,catalogLoader:()=>tt,loadPlugins:()=>Ga,missile:()=>a,startGoogleAnalytics:()=>Ra,uiManagerFinal:()=>Ia});var a={};i.r(a),i.d(a,{bottomMenuClick:()=>I,hideSideMenus:()=>G,init:()=>B,missileChange:()=>R,missileSubmit:()=>D,msAttackerChange:()=>H,msErrorClick:()=>P,msTargetChange:()=>O,onHelpMenuClick:()=>z,searchForRvs:()=>$,uiManagerFinal:()=>U,uiManagerInit:()=>F,updateLoop:()=>k});var n=i(8386),s=i(165),o=i(2833),l=i(3938),r=i(1520),c=i(8104);const d=i.p+"../img/flag.png";var u=i(8475),h=i(9085),g=i(5514);class m extends u.c{constructor(){super(m.PLUGIN_NAME),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=d,this.bottomIconLabel="Countries",this.sideMenuElementHtml=l.b.html`
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
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=l.b.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("country-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>{var t;null===(t=l.b.getSoundManager())||void 0===t||t.play(g.p.CLICK),m.countryMenuClick_(e.getAttribute("data-group"))}))})),(0,n.E)((0,s.Gn)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=l.b.getGroupsManager(),i=c.n.getCountryCode(e);if(""===i)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(r.Y.COUNTRY,i,e),m.groupSelected_(e)}static groupSelected_(e){var t;const i=l.b.getGroupsManager(),a=l.b.getCatalogManager(),n=l.b.getUiManager(),o=(0,s.Gn)("search");void 0!==e&&void 0!==i.groupList[e]&&(i.selectGroup(i.groupList[e]),i.groupList[e].ids.length<settingsManager.searchLimit?n.searchManager.doSearch(i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1)):(o.value=i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1),n.searchManager.fillResultBox(i.groupList[e].ids.map((e=>({id:e}))),a)),null===(t=l.b.getPlugin(h.P))||void 0===t||t.selectSat(-1),settingsManager.isMobileModeEnabled&&n.searchManager.closeSearch(),n.hideSideMenus())}}m.PLUGIN_NAME="Countries Menu";const p=new m;var b=i(2376),v=i(3384),f=i(6002);const S=i.p+"../img/find2.png";var M=i(9772),_=i(5347);class y extends u.c{static checkAz(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,_.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.az>=t&&a.az<=i}))}static checkEl(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,_.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.el>=t&&a.el<=i}))}static checkInview(e){const t=l.b.getDotsManager();return e.filter((e=>1===t.inViewData[e.id]))}static checkObjtype(e,t){return e.filter((e=>e.type===t))}static checkRange(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,_.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.rng>=t&&a.rng<=i}))}static limitPossibles(e,t){const i=l.b.getUiManager();return e.length>=t&&i.toast(`Too many results, limited to ${t}`,"serious"),e.slice(0,t)}static searchSats(e){let{az:t,el:i,rng:a,countryCode:n,inc:o,azMarg:r,elMarg:c,rngMarg:d,incMarg:u,period:h,periodMarg:g,rcs:m,rcsMarg:p,objType:b,raan:v,raanMarg:f,argPe:S,argPeMarg:_,bus:x,shape:L,payload:C}=e;const w=!isNaN(t)&&isFinite(t),E=!isNaN(i)&&isFinite(i),T=!isNaN(a)&&isFinite(a),A=!isNaN(o)&&isFinite(o),N=!isNaN(v)&&isFinite(v),k=!isNaN(S)&&isFinite(S),G=!isNaN(h)&&isFinite(h),I=!isNaN(m)&&isFinite(m),R="All"!==n,P="All"!==x,O="All"!==L,D="All"!==C;if(r=!isNaN(r)&&isFinite(r)?r:5,c=!isNaN(c)&&isFinite(c)?c:5,d=!isNaN(d)&&isFinite(d)?d:200,u=!isNaN(u)&&isFinite(u)?u:1,g=!isNaN(g)&&isFinite(g)?g:.5,p=!isNaN(p)&&isFinite(p)?p:m/10,f=!isNaN(f)&&isFinite(f)?f:1,_=!isNaN(_)&&isFinite(_)?_:1,!(E||T||w||A||G||I||k||N||R||P||O||D))throw new Error("No Search Criteria Entered");let F=l.b.getCatalogManager().getSats();if(F=A||G||!(w||E||T)?F:y.checkInview(F),F=0!==b?y.checkObjtype(F,b):F,w&&(F=y.checkAz(F,t-r,t+r)),E&&(F=y.checkEl(F,i-c,i+c)),T&&(F=y.checkRange(F,a-d,a+d)),A&&(F=y.checkInc(F,o-u,o+u)),N&&(F=y.checkRightAscension(F,v-f,v+f)),k&&(F=y.checkArgPe(F,S-_,S+_)),G&&(F=y.checkPeriod(F,h-g,h+g)),I&&(F=y.checkRcs(F,m-p,m+p)),"All"!==n){let e=n.split("|").map((e=>M.Aj[e]));e=e.filter(((t,i)=>t&&e.indexOf(t)===i)),F=F.filter((t=>e.includes(t.country)))}"All"!==x&&(F=F.filter((e=>e.bus===x))),"All"!==L&&(F=F.filter((e=>e.shape===L))),"All"!==C&&(F=F.filter((e=>{var t,i,a;return(null===(a=null===(i=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===i?void 0:i.split("-")[0])||void 0===a?void 0:a.replace(/[^a-zA-Z]/gu,""))===C}))),F=y.limitPossibles(F,settingsManager.searchLimit);let $="";return F.forEach(((e,t)=>{$+=t<F.length-1?`${e.sccNum},`:`${e.sccNum}`})),(0,s.Gn)("search").value=$,l.b.getUiManager().doSearch((0,s.Gn)("search").value),F}findByLooksSubmit(){return e=this,t=void 0,a=function*(){const e=l.b.getUiManager(),t=parseFloat((0,s.Gn)("fbl-azimuth").value),i=parseFloat((0,s.Gn)("fbl-elevation").value),a=parseFloat((0,s.Gn)("fbl-range").value),n=parseFloat((0,s.Gn)("fbl-inc").value),o=parseFloat((0,s.Gn)("fbl-period").value),r=parseFloat((0,s.Gn)("fbl-rcs").value),c=parseFloat((0,s.Gn)("fbl-azimuth-margin").value),d=parseFloat((0,s.Gn)("fbl-elevation-margin").value),u=parseFloat((0,s.Gn)("fbl-range-margin").value),h=parseFloat((0,s.Gn)("fbl-inc-margin").value),g=parseFloat((0,s.Gn)("fbl-period-margin").value),m=parseFloat((0,s.Gn)("fbl-rcs-margin").value),p=parseInt((0,s.Gn)("fbl-type").value),b=parseFloat((0,s.Gn)("fbl-raan").value),v=parseFloat((0,s.Gn)("fbl-raan-margin").value),f=parseFloat((0,s.Gn)("fbl-argPe").value),S=parseFloat((0,s.Gn)("fbl-argPe-margin").value),M=(0,s.Gn)("fbl-country").value,_=(0,s.Gn)("fbl-bus").value,x=(0,s.Gn)("fbl-payload").value,L=(0,s.Gn)("fbl-shape").value;(0,s.Gn)("search").value="";try{const s={az:t,el:i,rng:a,inc:n,azMarg:c,elMarg:d,rngMarg:u,incMarg:h,period:o,periodMarg:g,rcs:r,rcsMarg:m,objType:p,raan:b,raanMarg:v,argPe:f,argPeMarg:S,countryCode:M,bus:_,payload:x,shape:L};this.lastResults=y.searchSats(s),0===this.lastResults.length&&e.toast("No Satellites Found","critical")}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered","critical")}},new((i=void 0)||(i=Promise))((function(n,s){function o(e){try{r(a.next(e))}catch(e){s(e)}}function l(e){try{r(a.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}));var e,t,i,a}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerInit,cbName:"findSat",cb:()=>{(0,s.Gn)("fbl-error").addEventListener("click",(()=>{(0,s.Gn)("fbl-error").style.display="none"}))}}),l.b.register({event:o.RL.uiManagerFinal,cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}constructor(){super(y.PLUGIN_NAME),this.lastResults=[],this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=l.b.html`
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
`}printLastResults(){f.x.info(this.lastResults.map((e=>e.name)).join("\n"))}uiManagerFinal(){const e=l.b.getCatalogManager().objectCache;(0,s.Gn)("findByLooks-form").addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>{this.findByLooksSubmit(),(0,v.Zk)()}))})),(0,b.d)(e.filter((e=>null==e?void 0:e.bus)).map((e=>e.bus))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,s.Gn)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})),M.hA.forEach((e=>{(0,s.Gn)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${M.cs[e]}">${e}</option>`)})),(0,b.d)(e.filter((e=>null==e?void 0:e.shape)).map((e=>e.shape))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,s.Gn)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}));const t=e.filter((e=>null==e?void 0:e.payload)).map((e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,""))).filter((e=>e.length>=3));(0,b.d)(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{""!==e&&e.length>3&&(0,s.Gn)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}))}static checkArgPe(e,t,i){return e.filter((e=>e.argOfPerigee<i&&e.argOfPerigee>t))}static checkInc(e,t,i){return e.filter((e=>e.inclination<i&&e.inclination>t))}static checkPeriod(e,t,i){return e.filter((e=>e.period>t&&e.period<i))}static checkRightAscension(e,t,i){return e.filter((e=>e.rightAscension<i&&e.rightAscension>t))}static checkRcs(e,t,i){return e.filter((e=>e.rcs>t&&e.rcs<i))}}y.PLUGIN_NAME="findSat";var x=i(6633);const L=i.p+"../img/missile.png";var C=i(8437);const w=l.b.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var E=i(2869);let T=!1,A=!1,N=0;const k=()=>{if(void 0!==E.CC&&E.CC.missileArray.length>0){const e=l.b.getOrbitManager();for(N=0;N<E.CC.missileArray.length;N++)e.updateOrbitBuffer(E.CC.missileArray[N].id)}},G=()=>{(0,x.kW)((0,s.Gn)("missile-menu"),1e3),(0,s.Gn)("menu-missile").classList.remove("bmenu-item-selected"),T=!1},I=e=>{if("menu-missile"===e){const e=l.b.getUiManager();T?(T=!1,e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.closeSearch(),e.hideSideMenus(),(0,x.$k)((0,s.Gn)("missile-menu"),1e3),(0,s.Gn)("menu-missile").classList.add("bmenu-item-selected"),T=!0)}},R=()=>{0!==parseFloat((0,s.Gn)("ms-type").value)?(0,s.Gn)("ms-custom-opt").style.display="none":(0,s.Gn)("ms-custom-opt").style.display="block"},P=()=>{(0,s.Gn)("ms-error").style.display="none"},O=()=>{-1!==parseInt((0,s.Gn)("ms-target").value)?((0,s.Gn)("ms-tgt-holder-lat").style.display="none",(0,s.Gn)("ms-tgt-holder-lon").style.display="none"):((0,s.Gn)("ms-tgt-holder-lat").style.display="block",(0,s.Gn)("ms-tgt-holder-lon").style.display="block")},D=()=>{(0,v.QP)((()=>{const e=l.b.getTimeManager(),t=l.b.getUiManager();(0,s.Gn)("ms-error").style.display="none";const i=parseFloat((0,s.Gn)("ms-type").value),a=parseFloat((0,s.Gn)("ms-attacker").value);let n=parseFloat((0,s.Gn)("ms-lat-lau").value),o=parseFloat((0,s.Gn)("ms-lon-lau").value);const r=parseFloat((0,s.Gn)("ms-target").value);let c=parseFloat((0,s.Gn)("ms-lat").value),d=parseFloat((0,s.Gn)("ms-lon").value);const u=e.selectedDate.getTime();let h="";if(1===i&&(h="simulation/Russia2USA.json",E.CC.MassRaidPre(u,h)),2===i&&(h="simulation/Russia2USAalt.json",E.CC.MassRaidPre(u,h)),3===i&&(h="simulation/China2USA.json",E.CC.MassRaidPre(u,h)),4===i&&(h="simulation/NorthKorea2USA.json",E.CC.MassRaidPre(u,h)),5===i&&(h="simulation/USA2Russia.json",E.CC.MassRaidPre(u,h)),6===i&&(h="simulation/USA2China.json",E.CC.MassRaidPre(u,h)),7===i&&(h="simulation/USA2NorthKorea.json",E.CC.MassRaidPre(u,h)),0!==i&&t.toast(`${h} Loaded`,"standby",!0),0===i){if(-1===r){if(isNaN(c))return t.toast("Invalid Target Latitude!","critical"),void((0,s.Gn)("loading-screen").style.display="none");if(isNaN(d))return t.toast("Invalid Target Longitude!","critical"),void((0,s.Gn)("loading-screen").style.display="none")}else c=E.CC.globalBMTargets[3*r],d=E.CC.globalBMTargets[3*r+1];if(A){if(isNaN(n))return t.toast("Invalid Launch Latitude!","critical"),void((0,s.Gn)("loading-screen").style.display="none");if(isNaN(o))return t.toast("Invalid Launch Longitude!","critical"),void((0,s.Gn)("loading-screen").style.display="none")}let e,i;const h=l.b.getCatalogManager();if(a<200){e=a-100,i=500-E.CC.missilesInUse;let t=1200;100!=a&&(n=E.CC.UsaICBM[4*e],o=E.CC.UsaICBM[4*e+1],t=1100),E.CC.createMissile(n,o,c,d,3,h.missileSats-i,u,E.CC.UsaICBM[4*e+2],30,2.9,.07,E.CC.UsaICBM[4*e+3],"United States",t)}else if(a<300){e=a-200,i=500-E.CC.missilesInUse;const t=1120;213!=a&&214!=a&&215!=a&&(n=E.CC.RussianICBM[4*e],o=E.CC.RussianICBM[4*e+1]),E.CC.createMissile(n,o,c,d,3,h.missileSats-i,u,E.CC.RussianICBM[4*e+2],30,2.9,.07,E.CC.RussianICBM[4*e+3],"Russia",t)}else if(a<400){e=a-300,i=500-E.CC.missilesInUse;const t=1120;321!=a&&(n=E.CC.ChinaICBM[4*e],o=E.CC.ChinaICBM[4*e+1]),E.CC.createMissile(n,o,c,d,3,h.missileSats-i,u,E.CC.ChinaICBM[4*e+2],30,2.9,.07,E.CC.ChinaICBM[4*e+3],"China",t)}else if(a<500){e=a-400,i=500-E.CC.missilesInUse;const t=1120;400!=a&&(n=E.CC.NorthKoreanBM[4*e],o=E.CC.NorthKoreanBM[4*e+1]),E.CC.createMissile(n,o,c,d,3,h.missileSats-i,u,E.CC.NorthKoreanBM[4*e+2],30,2.9,.07,E.CC.NorthKoreanBM[4*e+3],"North Korea",t)}else if(a<600){e=a-500,i=500-E.CC.missilesInUse;const t=1e3;500!=a&&(n=E.CC.FraSLBM[4*e],o=E.CC.FraSLBM[4*e+1]),E.CC.createMissile(n,o,c,d,3,h.missileSats-i,u,E.CC.FraSLBM[4*e+2],30,2.9,.07,E.CC.FraSLBM[4*e+3],"France",t)}else if(a<700){e=a-600,i=500-E.CC.missilesInUse;const t=1200;600!=a&&(n=E.CC.ukSLBM[4*e],o=E.CC.ukSLBM[4*e+1]),E.CC.createMissile(n,o,c,d,3,h.missileSats-i,u,E.CC.ukSLBM[4*e+2],30,2.9,.07,E.CC.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(E.CC.lastMissileError,E.CC.lastMissileErrorType),t.doSearch("RV_")}(0,s.Gn)("loading-screen").style.display="none"}))},F=()=>{(0,s.Gn)("left-menus").insertAdjacentHTML("beforeend",l.b.html`
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
      `),(0,s.Gn)("bottom-icons").insertAdjacentHTML("beforeend",l.b.html`
        <div id="menu-missile" class="bmenu-item">
          <img
            alt="missile"
            src="" delayedsrc=${L}
          />
          <span class="bmenu-title">Missile</span>
          <div class="status-icon"></div>
        </div>
        `)},$=()=>{l.b.getUiManager().doSearch("RV_")},U=()=>{(0,n.E)((0,s.Gn)("missile-menu")),(0,s.Gn)("missile").addEventListener("submit",(e=>{e.preventDefault(),D()})),(0,s.Gn)("ms-attacker").addEventListener("change",H),(0,s.Gn)("ms-target").addEventListener("change",O),(0,s.Gn)("ms-error").addEventListener("click",P),(0,s.Gn)("missile").addEventListener("change",R),(0,s.Gn)("searchRvBtn").addEventListener("click",$),H(),O()},B=()=>{l.b.register({event:o.RL.uiManagerInit,cbName:"missile",cb:F}),l.b.register({event:o.RL.uiManagerFinal,cbName:"missile",cb:U}),l.b.register({event:o.RL.bottomMenuClick,cbName:"missile",cb:I}),l.b.register({event:o.RL.hideSideMenus,cbName:"missile",cb:G}),l.b.register({event:o.RL.updateLoop,cbName:"updateMissileOrbits",cb:k}),l.b.register({event:o.RL.onHelpMenuClick,cbName:"missile",cb:z})},z=()=>!!T&&(C.v.showAdvice("Missile Menu",w),!0),H=()=>{A=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,s.Gn)("ms-attacker").value)&&(A=!0);A?((0,s.Gn)("ms-lau-holder-lat").style.display="block",(0,s.Gn)("ms-lau-holder-lon").style.display="block"):((0,s.Gn)("ms-lau-holder-lat").style.display="none",(0,s.Gn)("ms-lau-holder-lon").style.display="none")};var j=i(3786),V=i(6905);const K=i.p+"../img/sat3.png";class X extends u.c{constructor(){super(X.name),this.dependencies=[h.P.name],this.isRequireSatelliteSelected=!0,this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=K,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{l.b.getMainCamera().cameraType===V.i.SATELLITE?(l.b.getUiManager().hideSideMenus(),l.b.getMainCamera().cameraType=V.i.FIXED_TO_SAT,(0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected")):-1!==this.selectSatManager_.selectedSat?(l.b.getMainCamera().cameraType=V.i.SATELLITE,(0,s.Gn)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(l.b.getUiManager().toast("Select a Satellite First!","caution"),(0,j.l)((0,s.Gn)(this.bottomIconElementName)))},this.lastLongAudioTime=0,this.selectSatManager_=l.b.getPlugin(h.P)}}var Y=i(8769);const W=i.p+"../audio/beep1.mp3",J=i.p+"../audio/button.mp3",q=i.p+"../audio/button2.mp3",Z=i.p+"../audio/chatter1.mp3",Q=i.p+"../audio/chatter2.mp3",ee=i.p+"../audio/chatter3.mp3",te=i.p+"../audio/chatter4.mp3",ie=i.p+"../audio/chatter5.mp3",ae=i.p+"../audio/chatter6.mp3",ne=i.p+"../audio/chatter7.mp3",se=i.p+"../audio/chatter8.mp3",oe=i.p+"../audio/click10.mp3",le=i.p+"../audio/click11.mp3",re=i.p+"../audio/click12.mp3",ce=i.p+"../audio/click13.mp3",de=i.p+"../audio/click14.mp3",ue=i.p+"../audio/click15.mp3",he=i.p+"../audio/click16.mp3",ge=i.p+"../audio/click17.mp3",me=i.p+"../audio/click18.mp3",pe=i.p+"../audio/click19.mp3",be=i.p+"../audio/click2.mp3",ve=i.p+"../audio/click20.mp3",fe=i.p+"../audio/click21.mp3",Se=i.p+"../audio/click22.mp3",Me=i.p+"../audio/click23.mp3",_e=i.p+"../audio/click24.mp3",ye=i.p+"../audio/click25.mp3",xe=i.p+"../audio/click26.mp3",Le=i.p+"../audio/click27.mp3",Ce=i.p+"../audio/click28.mp3",we=i.p+"../audio/click29.mp3",Ee=i.p+"../audio/click3.mp3",Te=i.p+"../audio/click30.mp3",Ae=i.p+"../audio/click4.mp3",Ne=i.p+"../audio/click7.mp3",ke=i.p+"../audio/click8.mp3",Ge=i.p+"../audio/error.mp3",Ie=i.p+"../audio/error2.mp3",Re=i.p+"../audio/export.wav",Pe=i.p+"../audio/genericBeep1.mp3",Oe=i.p+"../audio/genericBeep2.mp3",De=i.p+"../audio/genericBeep3.mp3",Fe=i.p+"../audio/liftoff.mp3",$e=i.p+"../audio/loading.wav",Ue=i.p+"../audio/pop.mp3",Be=i.p+"../audio/switch.mp3",ze=i.p+"../audio/toggle-off.mp3",He=i.p+"../audio/toggle-on.mp3",je=i.p+"../audio/whoosh1.mp3",Ve=i.p+"../audio/whoosh2.mp3",Ke=i.p+"../audio/whoosh3.mp3",Xe=i.p+"../audio/whoosh4.mp3",Ye=i.p+"../audio/whoosh5.mp3",We=i.p+"../audio/whoosh6.mp3",Je=i.p+"../audio/whoosh7.mp3",qe=i.p+"../audio/whoosh8.mp3";class Ze extends u.c{constructor(){super("Sound Manager"),this.lastLongAudioTime=0,this.isMute=!1,this.currentChatterClip_=0,this.voices=[],this.maxClickClip_=0,this.sounds={standby:new Audio(Ue),error1:new Audio(Ge),error2:new Audio(Ie),export:new Audio(Re),click:new Audio(Be),beep1:new Audio(W),genericBeep1:new Audio(Pe),genericBeep2:new Audio(Oe),genericBeep3:new Audio(De),whoosh1:new Audio(je),whoosh2:new Audio(Ve),whoosh3:new Audio(Ke),whoosh4:new Audio(Xe),whoosh5:new Audio(Ye),whoosh6:new Audio(We),whoosh7:new Audio(Je),whoosh8:new Audio(qe),click1:new Audio(Te),click2:new Audio(be),click3:new Audio(Ee),click4:new Audio(Ae),click5:new Audio(we),click6:new Audio(Le),click7:new Audio(Ne),click8:new Audio(ke),click9:new Audio(Ce),click10:new Audio(oe),click11:new Audio(le),click12:new Audio(re),click13:new Audio(ce),click14:new Audio(de),click15:new Audio(ue),click16:new Audio(he),click17:new Audio(ge),click18:new Audio(me),click19:new Audio(pe),click20:new Audio(ve),click21:new Audio(fe),click22:new Audio(Se),click23:new Audio(Me),click24:new Audio(_e),click25:new Audio(ye),click26:new Audio(xe),chatter1:new Audio(Z),chatter2:new Audio(Q),chatter3:new Audio(ee),chatter4:new Audio(te),chatter5:new Audio(ie),chatter6:new Audio(ae),chatter7:new Audio(ne),chatter8:new Audio(se),loading:new Audio($e),button:new Audio(J),menuButton:new Audio(q),toggleOn:new Audio(He),toggleOff:new Audio(ze),liftoff:new Audio(Fe)},this.addJs=()=>{super.addJs(),Y.I.registerSingleton(o.Yv.SoundManager,this),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{this.voices=speechSynthesis.getVoices()}}),this.sounds.loading.volume=.25,this.sounds.export.volume=.3,this.sounds.error2.volume=.5},Object.keys(this.sounds).forEach((e=>{if(e.startsWith("click")){const t=parseInt(e.replace("click",""));t>this.maxClickClip_&&(this.maxClickClip_=t)}}))}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter((e=>"Google UK English Female"==e.name))[0],window.speechSynthesis.speak(t)}stop(e,t=!0){if(e===g.p.CHATTER){clearTimeout(this.nextChatter);for(let e=1;e<=8;e++)this.stop(`chatter${e}`,t);return}const i=this.sounds[e];t&&Ze.fadeOut_(i)}static fadeOut_(e,t=1e3){const i=e.volume,a=t/10,n=e.volume/a;let s=0;const o=setInterval((()=>{s++,e.volume>.05&&(e.volume-=n),s===a&&(e.pause(),e.currentTime=0,clearInterval(o),e.volume=i)}),10)}play(e){var t;if(!(null===(t=navigator.userActivation)||void 0===t?void 0:t.hasBeenActive))return;if(this.isMute)return;if((0,s.Gn)("loading-screen").classList.contains("fullscreen"))return;let i,a=1;switch(e){case g.p.BEEP:return a=Math.floor(3*Math.random())+1,i=this.sounds[`genericBeep${a}`],void i.play();case g.p.WHOOSH:return a=Math.floor(8*Math.random())+1,i=this.sounds[`whoosh${a}`],void i.play();case g.p.ERROR:if(this.lastLongAudioTime+12e5>Date.now())return;return this.lastLongAudioTime=Date.now(),a=Math.floor(2*Math.random())+1,i=this.sounds[`error${a}`],void i.play();case g.p.CLICK:return a=Math.floor(Math.random()*this.maxClickClip_)+1,i=this.sounds[`click${a}`],i.volume=.25,void i.play();case g.p.CHATTER:return a=Math.floor(8*Math.random())+1,a===this.currentChatterClip_&&(a++,a>8&&(a=1)),i=this.sounds[`chatter${a}`],i.volume=.15,this.stop(g.p.CHATTER,!1),i.play(),void(this.nextChatter=setTimeout((()=>{this.play(g.p.CHATTER)}),1e3*i.duration+1e4));default:i=this.sounds[e],i.play()}}}const Qe=new Ze;var et=i(6450),tt=i(3447),it=i(5459),at=i(1352),nt=i(3967);class st{static exportTle2Csv(e,t=!0){try{const i=[],a=e.filter((e=>e.isSatellite()&&e.tle1));if(0===a.length)return void f.x.info("No TLE data to export");a.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of a)void 0!==e.tle1&&void 0!==e.tle2&&(t&&"ANALSAT"===e.country||i.push({satId:e.sccNum,name:e.name,tle1:e.tle1,tle2:e.tle2,inclination:e.inclination,eccentricity:e.eccentricity,period:e.period,raan:e.rightAscension,apogee:e.apogee,perigee:e.perigee,country:e.country,site:e.launchSite,rocket:e.launchVehicle,rcs:e.rcs,visualMagnitude:e.vmag,user:e.user,mission:e.mission,purpose:e.purpose,contractor:e.manufacturer,dryMass:e.dryMass,liftMass:e.launchMass,lifeExpected:e.lifetime,power:e.power}));(0,at.Eb)(i,"catalogInfo")}catch(e){}}static exportSatInFov2Csv(e){const t=e.filter((e=>{var t;return e.isSatellite()&&e.tle1&&1===(null===(t=l.b.getDotsManager().inViewData)||void 0===t?void 0:t[e.id])})).map((e=>{const t=e;return{satId:t.sccNum,name:t.name,country:t.country,apogee:t.apogee,perigee:t.perigee}}));(0,at.Eb)(t,"satInView")}static exportTle2Txt(e,t=2,i=!0){try{const a=[],n=e.filter((e=>e.isSatellite()&&e.tle1));if(0===n.length)return void f.x.info("No TLE data to export");n.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of n)void 0!==e.tle1&&void 0!==e.tle2&&(i&&"ANALSAT"===e.country||(3===t&&a.push(e.name),e.tle1.includes("NO TLE")&&console.log(e.sccNum),e.tle2.includes("NO TLE")&&console.log(e.sccNum),a.push(e.tle1),a.push(e.tle2)));const s=a.join("\n"),o=new Blob([s],{type:"text/plain;charset=utf-8"});(0,nt.saveAs)(o,"TLE.txt")}catch(e){}}}var ot=i(9991);const lt=i.p+"../img/analysis.png";class rt extends u.c{addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"analysis",cb:()=>{var e,t,i,a,o,r,c,d,u;null===(e=(0,s.Gn)("analysis-bpt"))||void 0===e||e.addEventListener("submit",(e=>{e.preventDefault(),rt.analysisBptSumbit_()})),null===(t=(0,s.Gn)("findCsoBtn"))||void 0===t||t.addEventListener("click",(()=>{(0,v.QP)(this.findCsoBtnClick_.bind(this))})),null===(i=(0,s.Gn)("findReentries"))||void 0===i||i.addEventListener("click",(()=>{(0,v.QP)(rt.findRaBtnClick_)}));const h=l.b.getCatalogManager().objectCache;null===(a=(0,s.Gn)("export-catalog-csv-btn"))||void 0===a||a.addEventListener("click",(()=>{st.exportTle2Csv(h)})),null===(o=(0,s.Gn)("export-sat-fov-csv-btn"))||void 0===o||o.addEventListener("click",(()=>{st.exportSatInFov2Csv(h)})),null===(r=(0,s.Gn)("export-catalog-txt-2a"))||void 0===r||r.addEventListener("click",(()=>{st.exportTle2Txt(h)})),null===(c=(0,s.Gn)("export-catalog-txt-2b"))||void 0===c||c.addEventListener("click",(()=>{st.exportTle2Txt(h,2,!1)})),null===(d=(0,s.Gn)("export-catalog-txt-3a"))||void 0===d||d.addEventListener("click",(()=>{st.exportTle2Txt(h,3)})),null===(u=(0,s.Gn)("export-catalog-txt-3b"))||void 0===u||u.addEventListener("click",(()=>{st.exportTle2Txt(h,3,!1)})),(0,n.E)((0,s.Gn)("analysis-menu"))}}),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{rt.setSensor_(e)}})}findCloseObjects(){if(this.searchStrCache_)return this.searchStrCache_;let e=rt.getValidSats_();e=(0,b.d)(e),e.sort(((e,t)=>e.position.x-t.position.x));const t=rt.getPossibleCSOs_(e,50),i=(0,b.d)(t),a=rt.getActualCSOs_(i,50),n=Array.from(new Set(a));let s="";for(let e=0;e<n.length;e++)e==n.length-1?s+=n[e]:s+=`${n[e]},`;return this.searchStrCache_=s,s}static getActualCSOs_(e,t){const i=[];for(const t of e){let e=t.sat1,i=it.$.getEci(e,new Date(Date.now()+18e5));i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(t.sat1.position=i.position,e=t.sat2,i=it.$.getEci(e,new Date(Date.now()+18e5)),i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(e.position=i.position,t.sat2.position=i.position))}for(const a of e){const e=a.sat1,n=e.position;if(void 0===n)continue;const s=n.x-t,o=n.x+t,l=n.y-t,r=n.y+t,c=n.z-t,d=n.z+t,u=a.sat2,h=u.position;void 0!==h&&h.x<o&&h.x>s&&h.y<r&&h.y>l&&h.z<d&&h.z>c&&(i.push(e.sccNum),i.push(u.sccNum))}return i}static getPossibleCSOs_(e,t){const i=[];for(let a=0;a<e.length;a++){const n=e[a],s=n.position,o=s.x-t,l=s.x+t,r=s.y-t,c=s.y+t,d=s.z-t,u=s.z+t;let h=0;for(h=Math.max(0,a-200);h<e.length;h++){const t=e[h];if(n==t)continue;const a=t.position;if(a.x>l)break;a.x<l&&a.x>o&&a.y<c&&a.y>r&&a.z<u&&a.z>d&&i.push({sat1:n,sat2:t})}}return i}static getValidSats_(){const e=[];for(let t=0;t<l.b.getCatalogManager().orbitalSats;t++){const i=l.b.getCatalogManager().getSat(t);i&&(void 0===i.position&&(i.position=it.$.getEci(i,new Date).position||{x:0,y:0,z:0}),isNaN(i.position.x)||isNaN(i.position.y)||isNaN(i.position.z)||i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||e.push(i))}return e}static findBestPass(e,t){const i=l.b.getTimeManager();if(t.length<=0||!t[0]||void 0===t[0].minAz)return l.b.getUiManager().toast("Sensor's format incorrect. Did you select a sensor first?","critical"),[];const a=t[0];let n=0;const s=l.b.getCatalogManager().calcSatrec(e),o=[],r=_.rE/(s.no*_.rE/_.gc);let c=0,d=null,u=null,h=null,g=null,m=a.maxRng,p=0,b=!1,v=!1;const f=(e,t)=>{const s=it.$.getRae(e,t,a);if(it.$.checkIsInView(a,s)){const o=i.getOffsetTimeObj(n-5e3);let r=it.$.getRae(o,t,a),f=it.$.checkIsInView(a,r);if(f){const o=i.getOffsetTimeObj(n+5e3);if(r=it.$.getRae(o,t,a),f=it.$.checkIsInView(a,r),!f){if(v=s.el<=3.5,null==g)return{sortTime:null,SATELLITE_ID:null,PASS_SCORE:null,START_DATE:null,START_TIME:null,START_AZIMUTH:null,START_ELEVATION:null,START_RANGE:null,STOP_DATE:null,STOP_TIME:null,STOP_AZIMTUH:null,STOP_ELEVATION:null,STOP_RANGE:null,TIME_IN_COVERAGE_SECONDS:null,MINIMUM_RANGE:null,MAXIMUM_ELEVATION:null,SENSOR_TO_SUN_AZIMUTH:null,SENSOR_TO_SUN_ELEVATION:null};c=Math.min((e.getTime()-g.getTime())/1e3/60*10/8,10);let i=Math.min(p/50*10,10);i*=b&&v?2:1,c+=i,c+=Math.min(7500/m,10);let n=0;n=(e.getTime()-g.getTime())/1e3||0;const o=l.b.getScene(),r=(0,_.Zn)(e,{x:o.sun.position[0],y:o.sun.position[1],z:o.sun.position[2]},a);return{sortTime:g.getTime(),SATELLITE_ID:parseInt(t.satnum).toString(),PASS_SCORE:c.toFixed(1),START_DATE:g,START_TIME:g,START_AZIMUTH:d,START_ELEVATION:u,START_RANGE:h,STOP_DATE:e,STOP_TIME:e,STOP_AZIMTUH:s.az.toFixed(0),STOP_ELEVATION:s.el.toFixed(1),STOP_RANGE:s.rng.toFixed(0),TIME_IN_COVERAGE_SECONDS:n,MINIMUM_RANGE:m.toFixed(0),MAXIMUM_ELEVATION:p.toFixed(1),SENSOR_TO_SUN_AZIMUTH:r.az.toFixed(1),SENSOR_TO_SUN_ELEVATION:r.el.toFixed(1)}}}else s.el<=3.5&&(b=!0),g=e,d=s.az.toFixed(0),u=s.el.toFixed(1),h=s.rng.toFixed(0);p<s.el&&(p=s.el),m>s.rng&&(m=s.rng)}return{sortTime:null,SATELLITE_ID:null,PASS_SCORE:null,START_DATE:null,START_TIME:null,START_AZIMUTH:null,START_ELEVATION:null,START_RANGE:null,STOP_DATE:null,STOP_TIME:null,STOP_AZIMTUH:null,STOP_ELEVATION:null,STOP_RANGE:null,TIME_IN_COVERAGE_SECONDS:null,MINIMUM_RANGE:null,MAXIMUM_ELEVATION:null,SENSOR_TO_SUN_AZIMUTH:null,SENSOR_TO_SUN_ELEVATION:null}};for(let e=0;e<604800;e+=5){n=1e3*e;const t=i.getOffsetTimeObj(n);if(o.length<=5e3){const i=f(t,s);null!==i.PASS_SCORE&&(o.push(i),c=0,d=null,u=null,h=null,g=null,m=a.maxRng,p=0,b=!1,v=!1,e+=60*r*.75)}}return o}static findBestPasses(e,t){const i=(e=e.replace(/ /gu,",")).split(","),a=[];for(const e of i)try{if(void 0===e||null==e||""===e||" "===e)continue;const i=l.b.getCatalogManager().sccNum2Sat(parseInt(e)),n=rt.findBestPass(i,[t]);for(const e of n)a.push(e)}catch(e){console.debug(e)}a.sort(((e,t)=>t.sortTime-e.sortTime)),a.reverse(),a.forEach((e=>{delete e.sortTime}));for(const e of a)e.START_DATE=e.START_DATE.toISOString().split("T")[0],e.START_TIME=e.START_TIME.toISOString().split("T")[1].split(".")[0],e.STOP_DATE=e.STOP_DATE.toISOString().split("T")[0],e.STOP_TIME=e.STOP_TIME.toISOString().split("T")[1].split(".")[0];(0,at.Eb)(a,"bestSatTimes")}findCsoBtnClick_(){const e=this.findCloseObjects();l.b.getUiManager().doSearch(e)}static findRaBtnClick_(){const e=ot.w.findReentry(l.b.getCatalogManager().objectCache).join(",");l.b.getUiManager().doSearch(e)}static analysisBptSumbit_(){const e=(0,s.Gn)("analysis-bpt-sats").value,t=l.b.getSensorManager();t.isSensorSelected()?rt.findBestPasses(e,t.getSensor()):l.b.getUiManager().toast("You must select a sensor first!","critical")}static setSensor_(e){const t=(0,s.Gn)("analysis-bpt-submit");e?(t.disabled=!1,t.textContent="Generate Best Pass Times ▶"):(t.disabled=!0,t.textContent="Select Sensor First!")}constructor(){super("Analysis Menu"),this.bottomIconElementName="analysis-bottom-icon",this.bottomIconImg=lt,this.bottomIconLabel="Analysis Menu",this.sideMenuElementName="analysis-menu",this.sideMenuElementHtml=l.b.html`
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
  </ul>`,this.searchStrCache_=null}}const ct=new rt;var dt=i(149);const ut=i.p+"../img/constellation.png",ht=i.p+"../img/planetarium.png";class gt extends u.c{constructor(){super(gt.PLUGIN_NAME),this.bottomIconElementName="menu-planetarium",this.bottomIconLabel="Planetarium View",this.bottomIconImg=ht,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.b.getRenderer(),i=l.b.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;l.b.getMainCamera().cameraType=V.i.PLANETARIUM;try{(0,s.Gn)("cspocAllSensor").style.display="none",(0,s.Gn)("mwAllSensor").style.display="none",(0,s.Gn)("mdAllSensor").style.display="none",(0,s.Gn)("esocAllSensor").style.display="none",(0,s.Gn)("llAllSensor").style.display="none",(0,s.Gn)("rusAllSensor").style.display="none",(0,s.Gn)("prcAllSensor").style.display="none"}catch(e){}dt.j.change("planetarium"),l.b.getCatalogManager().isStarManagerLoaded&&l.b.getStarManager().clearConstellations(),null===(e=l.b.getPlugin(mt))||void 0===e||e.setBottomIconToUnselected()}else l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,t.glInit(),i.hideSideMenus(),l.b.getOrbitManager().clearInViewOrbit(),l.b.getMainCamera().cameraType=V.i.DEFAULT}}addJs(){super.addJs(),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,s.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}gt.PLUGIN_NAME="Planetarium";class mt extends u.c{constructor(){super(mt.PLUGIN_NAME),this.bottomIconElementName="menu-astronomy",this.bottomIconLabel="Astronomy View",this.bottomIconImg=ut,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.b.getCatalogManager(),i=l.b.getOrbitManager(),a=l.b.getRenderer(),n=l.b.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;t.isStarManagerLoaded&&l.b.getStarManager().drawAllConstellations(),i.clearInViewOrbit(),l.b.getMainCamera().cameraType=V.i.ASTRONOMY,dt.j.change("astronomy"),null===(e=l.b.getPlugin(gt))||void 0===e||e.setBottomIconToUnselected()}else l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,a.glInit(),n.hideSideMenus(),l.b.getMainCamera().cameraType=V.i.DEFAULT,dt.j.change("default"),t.isStarManagerLoaded&&l.b.getStarManager().clearConstellations(),(0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}}addJs(){super.addJs(),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,s.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}mt.PLUGIN_NAME="Astronomy";var pt=i(2579);const bt=i.p+"../img/breakup.png";var vt,ft,St=i(5032);!function(e){e[e.MeanAnomaly=1]="MeanAnomaly",e[e.RightAscensionOfAscendingNode=2]="RightAscensionOfAscendingNode",e[e.ArgumentOfPerigee=3]="ArgumentOfPerigee"}(vt||(vt={})),function(e){e[e.Near=0]="Near",e[e.Success=1]="Success",e[e.Error=2]="Error",e[e.Far=3]="Far"}(ft||(ft={}));class Mt{constructor(e,t,i,a,n,s,o){this.sat=e,this.now=n,this.goalLat=t,this.goalLon=i,this.goalDirection=a,this.newMeana=null,this.newArgPer=null,this.goalAlt=s||null,this.raanOffset=o||0,this.lastLat=null,this.currentDirection=null,this.argPerCalcResults=null,this.meanACalcResults=null,this.raanCalcResults=null}rotateOrbitToLatLon(){return this.parseTle(),this.meanACalcResults=this.meanACalcLoop(this.now,this.goalDirection),this.meanACalcResults!==ft.Success?["Error","Failed to find a solution for Mean Anomaly"]:this.goalAlt>0&&this.argPerCalcLoop()!==ft.Success?["Error","Failed to find a solution for Argument of Perigee"]:(this.raanCalcResults=this.raanCalcLoop(this.raanOffset,this.now),this.raanCalcResults!==ft.Success?["Error","Failed to find a solution for Right Ascension of Ascending Node"]:[this.sat.tle1,this.sat.tle2])}argPerCalcLoop(){this.meanACalcResults=ft.Near;for(let e=0;e<3600;e+=1){let t=10*parseFloat(this.argPer)-100+e;if(t>3600&&(t-=3600),this.argPerCalcResults=this.argPerCalc(t.toString(),this.now),this.argPerCalcResults===ft.Success&&this.meanACalcResults===ft.Success&&this.currentDirection===this.goalDirection)break;if(this.argPerCalcResults===ft.Far&&(e+=49),this.argPerCalcResults===ft.Error)return ft.Error;if(this.meanACalcResults=this.meanACalcLoop2(),this.meanACalcResults===ft.Success)if(this.currentDirection!==this.goalDirection)e+=20;else if(this.argPerCalcResults===ft.Success)break;if(e=this.meanACalcResults===ft.Far?e+100:e,this.meanACalcResults===ft.Error)return ft.Error}return this.argPerCalcResults}meanACalcLoop2(){for(let e=0;e<5200;e+=1){if(this.meanACalcResults=this.meanACalc(e,this.now),this.meanACalcResults===ft.Success){if(this.currentDirection===this.goalDirection)break;e+=20}if(e=this.meanACalcResults===ft.Far?e+100:e,this.meanACalcResults===ft.Error)return ft.Error}return this.meanACalcResults}parseTle(){this.intl=this.sat.tle1.substring(9,17),this.epochyr=this.sat.tle1.substring(18,20),this.epochday=this.sat.tle1.substring(20,32),this.meanmo=this.sat.tle2.substring(52,63),this.argPer=St.J.pad0(this.sat.argOfPerigee.toFixed(4),8),this.inc=St.J.pad0(this.sat.inclination.toFixed(4),8),this.ecen=this.sat.eccentricity.toFixed(7).substring(2,9),this.TLE1Ending=this.sat.tle1.substring(32,71)}meanACalcLoop(e,t){let i=ft.Near;for(let a=0;a<5200;a+=1){if(i=this.meanACalc(a,e),i===ft.Success){if(this.currentDirection===t)break;a+=20}i===ft.Far&&(a+=100)}return i}raanCalcLoop(e,t){let i=ft.Near;for(let a=0;a<52e3&&(i=this.raanCalc(a,e,t),i!==ft.Success);a+=1)i===ft.Far&&(a+=1e3);return i}meanACalc(e,t){const i=this.sat;let a=i.satrec||_.t2.createSatrec(i.tle1,i.tle2);e/=10;const n=St.J.pad0(e.toFixed(4),8),s=St.J.pad0(i.rightAscension.toFixed(4),8),o=this.newArgPer?St.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):St.J.pad0(i.argOfPerigee.toFixed(4),8),l=i.tle1.substring(32,71),r=`1 ${i.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${l}`,c=`2 ${i.sccNum} ${this.inc} ${s} ${this.ecen} ${o} ${n} ${this.meanmo}    10`;a=_.t2.createSatrec(r,c);const d=this.getOrbitByLatLonPropagate(t,a,vt.MeanAnomaly);return d===ft.Success&&(i.tle1=r,i.tle2=c,this.newMeana=n),d}getOrbitByLatLonPropagate(e,t,i){const{m:a,gmst:n}=it.$.calculateTimeVariables(e,t),s=_.t2.propagate(t,a).position;if(isNaN(s.x)||isNaN(s.y)||isNaN(s.z))return ft.Error;const o=(0,_.K7)(s,n),{lat:l,lon:r,alt:c}=o;if(this.lastLat=this.lastLat?this.lastLat:l,i===vt.MeanAnomaly){if(l===this.lastLat)return 0;l>this.lastLat&&(this.currentDirection="N"),l<this.lastLat&&(this.currentDirection="S"),this.lastLat=l}return i===vt.MeanAnomaly&&l>this.goalLat-Mt.MAX_LAT_ERROR&&l<this.goalLat+Mt.MAX_LAT_ERROR||i===vt.RightAscensionOfAscendingNode&&r>this.goalLon-Mt.MAX_LON_ERROR&&r<this.goalLon+Mt.MAX_LON_ERROR||i===vt.ArgumentOfPerigee&&c>this.goalAlt-Mt.MAX_ALT_ERROR&&c<this.goalAlt+Mt.MAX_ALT_ERROR?ft.Success:(i!==vt.MeanAnomaly||l>this.goalLat-11&&l<this.goalLat+11)&&(i!==vt.RightAscensionOfAscendingNode||r>this.goalLon-11&&r<this.goalLon+11)?i===vt.ArgumentOfPerigee&&(c<this.goalAlt-100||c>this.goalAlt+100)?ft.Far:ft.Near:ft.Far}raanCalc(e,t,i){const a=e;e=(e/=100)>360?e-360:e;const n=St.J.pad0(e.toFixed(4),8),s=this.newArgPer?St.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):St.J.pad0(this.sat.argOfPerigee.toFixed(4),8),o=`1 ${this.sat.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${this.TLE1Ending}`,l=`2 ${this.sat.sccNum} ${this.inc} ${n} ${this.ecen} ${s} ${this.newMeana} ${this.meanmo}    10`,r=_.t2.createSatrec(o,l),c=this.getOrbitByLatLonPropagate(i,r,vt.RightAscensionOfAscendingNode);if(c===ft.Success){e=(e=(e=a/100+t)>360?e-360:e)<0?e+360:e;const i=St.J.pad0(e.toFixed(4),8),n=`2 ${this.sat.sccNum} ${this.inc} ${i} ${this.ecen} ${s} ${this.newMeana} ${this.meanmo}    10`;this.sat.tle1=o,this.sat.tle2=n}return c}argPerCalc(e,t){const i=this.newMeana,a=St.J.pad0(this.sat.rightAscension.toFixed(4),8);e=St.J.pad0((parseFloat(e)/10).toFixed(4),8);const n=`1 ${this.sat.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${this.TLE1Ending}`,s=`2 ${this.sat.sccNum} ${this.inc} ${a} ${this.ecen} ${e} ${i} ${this.meanmo}    10`,o=_.t2.createSatrec(n,s),l=this.getOrbitByLatLonPropagate(t,o,vt.ArgumentOfPerigee);return l===ft.Success&&(this.sat.tle1=n,this.sat.tle2=s,this.newArgPer=e),l}}Mt.MAX_LAT_ERROR=.1,Mt.MAX_LON_ERROR=.1,Mt.MAX_ALT_ERROR=30;var _t=i(2402),yt=i(9508);class xt extends u.c{constructor(){super(xt.PLUGIN_NAME),this.dependencies=[h.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=bt,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;if((null==t?void 0:t.apogee)-(null==t?void 0:t.perigee)>this.maxDifApogeeVsPerigee_)return f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=l.b.html`
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
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`,this.selectSatManager_=l.b.getPlugin(h.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("breakup").addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onSubmit_()))}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonActive&&(this.closeSideMenu(),f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonActive&&this.updateSccNumInMenu_()):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}updateSccNumInMenu_(){if(!this.isMenuButtonActive)return;const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);(null==e?void 0:e.isSatellite())&&((0,s.Gn)("hc-scc").value=e.sccNum)}onSubmit_(){const{simulationTimeObj:e}=l.b.getTimeManager(),t=l.b.getCatalogManager(),{satId:i,breakupCount:a,rascVariation:n,incVariation:s,meanmoVariation:o}=xt.getFormData_(t),r=t.getSat(i),c=r,d=it.$.calculateTimeVariables(e).gmst,u=(0,_.K7)(r.position,d),h=u.lat,g=u.lon,m=it.$.getDirection(r,e);"Error"===m&&f.x.warn("Cannot calculate direction of satellite. Try again later.");const p=_t.l.currentEpoch(e);if(r.tle1=r.tle1.substring(0,18)+p[0]+p[1]+r.tle1.substring(32),l.b.getMainCamera().isAutoPitchYawToTarget=!1,r.apogee-r.perigee>this.maxDifApogeeVsPerigee_)return void f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const b=r.apogee-r.perigee<300?0:u.alt,v=new Mt(r,h,g,m,e,b).rotateOrbitToLatLon(),S=v[0],M=v[1],y=new _.oZ(Object.assign(Object.assign({},r),{id:i,tle1:S,tle2:M,active:!0}));t.objectCache[i]=y,t.satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:i,tle1:S,tle2:M});const x=l.b.getOrbitManager();x.changeOrbitBufferData(i,S,M);const L=15e-5,C=r.eccentricity;let w=0;for(let i=0;i<=4&&!(w>=a);i++){const l=_.Ad.convert6DigitToA5((pt.g.ANALYST_START_ID+w).toString()),d=t.sccNum2Id(l);t.getObject(d);const p=c,b=-n/2+n*(i/4),v=r.apogee-r.perigee<300?0:u.alt;let S=new Mt(p,h,g,m,e,v,b).rotateOrbitToLatLon();if("Error"===S[0]&&(S=new Mt(p,h,g,m,new Date(e.getTime()+1),v,b).rotateOrbitToLatLon(),"Error"===S[0]))return void f.x.error(new Error(S[1]),"breakup.ts","Error creating breakup!");let y=S[0],E=S[1];for(;w<(i+1)*a/4;w++){let i=parseFloat(M.substring(8,16));i=i+Math.random()*s*2-s;const a=i.toFixed(4).padStart(8,"0");if(8!==a.length)throw new Error(`Inclination length is not 8 - ${a} - ${M}`);p.eccentricity=C,p.eccentricity+=Math.random()*L*2-L;let n=parseFloat(E.substring(52,62));n=n+Math.random()*o*2-o;const l=n.toFixed(8).padStart(11,"0");if(11!==l.length)throw new Error(`meanmo length is not 11 - ${l} - ${E}`);const r=_.Ad.convert6DigitToA5((pt.g.ANALYST_START_ID+w).toString()),c=t.sccNum2Id(r);if(y=`1 ${r}${y.substring(7)}`,E=`2 ${r} ${a} ${E.substring(17,52)}${l}${E.substring(63)}`,69!==y.length)throw new Error(`Invalid tle1: length is not 69 - ${y}`);if(69!==E.length)throw new Error(`Invalid tle1: length is not 69 - ${E}`);let d;try{d=new _.oZ(Object.assign(Object.assign({},t.objectCache[c]),{id:c,tle1:y,tle2:E,active:!0}))}catch(e){return void f.x.error(e,"breakup.ts","Error creating breakup!")}it.$.altitudeCheck(d.satrec,e)>1?(t.objectCache[c]=d,t.satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:c,active:!0,tle1:y,tle2:E}),x.changeOrbitBufferData(c,y,E)):f.x.warn("Breakup Generator Failed")}}a>settingsManager.searchLimit&&(settingsManager.searchLimit=a),l.b.getUiManager().doSearch(`${r.sccNum},Analyst`)}static getFormData_(e){const t=e.sccNum2Id((0,s.Gn)("hc-scc").value),i=parseFloat((0,s.Gn)("hc-per").value),a=parseFloat((0,s.Gn)("hc-inc").value),n=parseFloat((0,s.Gn)("hc-raan").value);return{satId:t,breakupCount:parseInt((0,s.Gn)("hc-count").value),rascVariation:n,incVariation:a,meanmoVariation:i}}}xt.PLUGIN_NAME="Breakup";class Lt{static getColors(e){let t,i;switch(e){case"Top Secret//SCI":t="#fce93a",i="black";break;case"Top Secret":t="#ff8c00",i="black";break;case"Secret":t="#ff0000",i="white";break;case"Confidential":t="#0033a0",i="white";break;case"CUI":t="#512b85",i="white";break;case"Unclassified":t="#007a33",i="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:i}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class Ct extends u.c{constructor(){super("Classification"),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1,this.containerDomId="classification-container",this.textStringDomId="classification-string",this.containerHeight=20}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateString(e=this.classificationString_,t="#ffffff",i="#000000"){this.isClassificationContainerLoaded_||this.createContainer_(),""===e?((0,s.Gn)(this.containerDomId).style.display="none",this.updateTopMenuHeight_(!1)):((0,s.Gn)(this.containerDomId).style.display="flex",this.updateTopMenuHeight_(!0)),(0,s.Gn)(this.textStringDomId).innerHTML=e;const a=(0,s.Gn)(this.containerDomId);if(a.style.fontWeight="500",Lt.isValidClassification(e)){const a=Lt.getColors(e);t=a.backgroundColor,i=a.color}a.style.backgroundColor=t,a.style.color=i,this.classificationString_=e}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:this.uiManagerInit_.bind(this)})}createContainer_(){const e=document.createElement("div");e.innerHTML=l.b.html`<span id="${this.textStringDomId}"></span>`,e.id=this.containerDomId,e.style.cssText=`\n      height: ${this.containerHeight}px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      `,l.b.containerRoot.insertBefore(e,l.b.containerRoot.firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr?(this.createContainer_(),this.updateString()):f.x.log("Classification string is empty so not loading classification bar")}updateTopMenuHeight_(e){this.isExpanded_!==e&&(document.documentElement.style.setProperty("--classification-bar-height",`${e?this.containerHeight:-this.containerHeight}px`),this.isExpanded_=e)}}new Ct;const wt=i.p+"../img/collisions.png";var Et=i(5701),Tt=i.n(Et),At=i(8236),Nt=i.n(At),kt=i(6080),Gt=i.n(kt),It=i(6850),Rt=i.n(It),Pt=i(7182),Ot=i.n(Pt),Dt=i(9213),Ft=i.n(Dt),$t=i(2378),Ut={};Ut.styleTagTransform=Ft(),Ut.setAttributes=Rt(),Ut.insert=Gt().bind(null,"head"),Ut.domAPI=Nt(),Ut.insertStyleElement=Ot(),Tt()($t.Z,Ut),$t.Z&&$t.Z.locals&&$t.Z.locals;class Bt extends u.c{constructor(){super(Bt.PLUGIN_NAME),this.collisionDataSrc="./tle/SOCRATES.json",this.selectSatIdOnCruncher_=null,this.collisionList_=[],this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=wt,this.bottomIconLabel="Collisions",this.sideMenuElementName="collisions-menu",this.sideMenuElementHtml=l.b.html`
  <div id="collisions-menu" class="side-menu-parent start-hidden text-select">
    <div id="collisions-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible Collisions</h5>
        <table id="collisions-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=l.b.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.dragOptions={isDraggable:!0,minWidth:540,maxWidth:650},this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.parseCollisionData_()}}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:this.uiManagerFinal_.bind(this)}),l.b.register({event:o.RL.onCruncherMessage,cbName:this.PLUGIN_NAME,cb:()=>{var e;null!==this.selectSatIdOnCruncher_&&(null===(e=l.b.getPlugin(h.P))||void 0===e||e.selectSat(this.selectSatIdOnCruncher_),this.selectSatIdOnCruncher_=null)}})}uiManagerFinal_(){(0,s.Gn)(this.sideMenuElementName).addEventListener("click",(e=>{(0,v.QP)((()=>{var t;const i=e.target.parentElement;if(!i.classList.contains("collisions-object"))return;const a=null===(t=i.dataset)||void 0===t?void 0:t.row;null!==a&&this.eventClicked_(parseInt(a))}))}))}parseCollisionData_(){0===this.collisionList_.length&&fetch(this.collisionDataSrc).then((e=>{e.json().then((e=>{this.collisionList_=e,this.createTable_(),0===this.collisionList_.length&&f.x.warn("No collisions data found!")}))}))}eventClicked_(e){const t=new Date;l.b.getTimeManager().changeStaticOffset(new Date(this.collisionList_[e].toca).getTime()-t.getTime()-3e4),l.b.getMainCamera().isAutoPitchYawToTarget=!1;const i=this.collisionList_[e].sat1.padStart(5,"0"),a=this.collisionList_[e].sat2.padStart(5,"0");l.b.getUiManager().doSearch(`${i},${a}`);const n=l.b.getCatalogManager();this.selectSatIdOnCruncher_=n.sccNum2Id(parseInt(i))}createTable_(){try{const e=(0,s.Gn)("collisions-table");e.innerHTML="",Bt.createHeaders_(e),this.createBody_(e)}catch(e){f.x.warn("Error processing SOCRATES data!")}}createBody_(e){for(let t=0;t<this.collisionList_.length;t++)this.createRow_(e,t)}static createHeaders_(e){const t=e.insertRow(),i=["TOCA","#1","#2","Max Prob","Min Range (km)","Rel Speed (km/s)"];for(const e of i){const i=t.insertCell();i.appendChild(document.createTextNode(e)),i.setAttribute("style","text-decoration: underline")}}createRow_(e,t){const i=e.insertRow();return i.setAttribute("class","collisions-object link"),i.setAttribute("data-row",t.toString()),Bt.createCell_(i,this.collisionList_[t].toca.slice(0,19).replace("T"," ")),Bt.createCell_(i,this.collisionList_[t].sat1),Bt.createCell_(i,this.collisionList_[t].sat2),Bt.createCell_(i,this.collisionList_[t].maxProb.toFixed(3)),Bt.createCell_(i,this.collisionList_[t].minRng.toString()),Bt.createCell_(i,this.collisionList_[t].relSpeed.toFixed(2)),i}static createCell_(e,t){e.insertCell().appendChild(document.createTextNode(t))}}Bt.PLUGIN_NAME="collisions";var zt=i(4990);const Ht=i.p+"../img/colors.png";class jt extends u.c{constructor(){super(jt.PLUGIN_NAME),this.bottomIconImg=Ht,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=l.b.html`
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
        <li class="menu-selectable" data-color="starlink">Starlink</li>
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
    <li id="colors-starlink-rmb"><a href="#">Starlink</a></li>
    <li id="colors-sunlight-rmb"><a href="#">Sunlight Status</a></li>
    <li id="colors-country-rmb"><a href="#">Country</a></li>
    <li id="colors-confidence-rmb"><a href="#">Confidence Level</a></li>
    <li id="colors-velocity-rmb"><a href="#">Velocity</a></li>
    <li id="colors-ageOfElset-rmb"><a href="#">Age of Elset</a></li>
  </ul>`,this.rmbCallback=e=>{switch(e){case"colors-confidence-rmb":jt.colorsMenuClick("confidence");break;case"colors-rcs-rmb":jt.colorsMenuClick("rcs");break;case"colors-density-rmb":jt.colorsMenuClick("neighbors");break;case"colors-starlink-rmb":jt.colorsMenuClick("starlink");break;case"colors-sunlight-rmb":jt.colorsMenuClick("sunlight");break;case"colors-country-rmb":jt.colorsMenuClick("countries");break;case"colors-velocity-rmb":jt.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":jt.colorsMenuClick("elset-age");break;default:jt.colorsMenuClick("default")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("colors-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.color;jt.colorsMenuClick(t)}))}))}})}}jt.PLUGIN_NAME="Color Menu",jt.colorsMenuClick=e=>{var t;const i=l.b.getCatalogManager(),a=l.b.getColorSchemeManager(),n=l.b.getUiManager();switch(null===(t=l.b.getPlugin(h.P))||void 0===t||t.selectSat(-1),"sunlight"!==e&&i.satCruncher.postMessage({isSunlightView:!1,typ:yt.Bi.SUNLIGHT_VIEW}),e){case"confidence":dt.j.change("confidence"),a.setColorScheme(a.confidence,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"velocity":dt.j.change("velocity"),a.setColorScheme(a.velocity,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"sunlight":i.satCruncher.postMessage({isSunlightView:!0,typ:yt.Bi.SUNLIGHT_VIEW}),dt.j.change("sunlight"),n.colorSchemeChangeAlert(a.sunlight),(0,zt.J)({cruncher:i.satCruncher,cb:()=>{a.setColorScheme(a.sunlight,!0)},validationFunc:e=>e.satInSun});break;case"near-earth":dt.j.change("near"),a.setColorScheme(a.leo,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"deep-space":dt.j.change("deep"),a.setColorScheme(a.geo,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"elset-age":(0,v.QP)((()=>{dt.j.change("ageOfElset"),a.setColorScheme(a.ageOfElset,!0),n.colorSchemeChangeAlert(a.currentColorScheme)}));break;case"lost-objects":(0,s.Gn)("search").value="",(0,v.QP)((()=>{settingsManager.lostSatStr="",a.setColorScheme(a.lostobjects,!0),(0,s.Gn)("search").value=settingsManager.lostSatStr,n.colorSchemeChangeAlert(a.currentColorScheme),n.doSearch((0,s.Gn)("search").value)}));break;case"rcs":dt.j.change("rcs"),a.setColorScheme(a.rcs,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"starlink":dt.j.change("starlink"),a.setColorScheme(a.starlink,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"smallsats":dt.j.change("small"),a.setColorScheme(a.smallsats,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"neighbors":dt.j.change("neighbors"),a.setColorScheme(a.neighbors,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"countries":dt.j.change("countries"),null!==l.b.getGroupsManager().selectedGroup?a.setColorScheme(a.groupCountries,!0):a.setColorScheme(a.countries,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;default:dt.j.change("default"),a.setColorScheme(a.default,!0),n.colorSchemeChangeAlert(a.currentColorScheme)}l.b.getUiManager().hideSideMenus()};const Vt=new jt;var Kt=i(3934),Xt=i(6279);const Yt=i.p+"../img/about.png";class Wt extends u.c{constructor(){super(Wt.PLUGIN_NAME),this.dependencies=[h.P.PLUGIN_NAME],this.bottomIconCallback=()=>{if(this.verifySatelliteSelected()&&this.isMenuButtonActive){const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);(0,s.Gn)(`${this.formPrefix_}-scc`).value=e.sccNum}},this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=Yt,this.bottomIconLabel="Debris Screening",this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=l.b.html`
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
`,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.helpTitle="Debris Screening",this.helpBody=l.b.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=l.b.html`<img src="${Yt}" />
  `,this.selectSatManager_=l.b.getPlugin(h.P)}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)(`${this.sideMenuElementName}-form`).addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onFormSubmit()))})),(0,s.Gn)(`${this.sideMenuElementName}-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onVisClick()))})),(0,s.Gn)(`${this.sideMenuElementName}-clear-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,v.QP)((()=>Wt.onClearVisClick()))}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled()}})}onVisClick(){const e=parseFloat((0,s.Gn)(`${this.formPrefix_}-u`).value),t=parseFloat((0,s.Gn)(`${this.formPrefix_}-v`).value),i=parseFloat((0,s.Gn)(`${this.formPrefix_}-w`).value);l.b.getScene().searchBox.setCubeSize(e,t,i)}static onClearVisClick(){l.b.getScene().searchBox.setCubeSize(0,0,0)}onFormSubmit(){const e=l.b.getCatalogManager().sccNum2Id(parseInt((0,s.Gn)(`${this.formPrefix_}-scc`).value)),t=parseFloat((0,s.Gn)(`${this.formPrefix_}-u`).value),i=parseFloat((0,s.Gn)(`${this.formPrefix_}-v`).value),a=parseFloat((0,s.Gn)(`${this.formPrefix_}-w`).value),n=parseFloat((0,s.Gn)(`${this.formPrefix_}-time`).value),r=l.b.getCatalogManager().getObject(e,o.C_.SKIP_POS_VEL),c=l.b.getCatalogManager().objectCache.filter((e=>{if(!e.isSatellite())return!1;const t=e;return!(t.perigee>r.apogee||r.perigee>t.apogee)})).map((e=>e.id));let d=0,u=[];for(let e=0;e<60*n;e++){d=1e3*e*60;const n=l.b.getTimeManager().getOffsetTimeObj(d),{m:s}=it.$.calculateTimeVariables(n,r.satrec),h=_.t2.propagate(r.satrec,s);for(let e=0;e<c.length;e++){const s=l.b.getCatalogManager().getObject(c[e],o.C_.SKIP_POS_VEL);if(!(null==s?void 0:s.isSatellite()))continue;const r=s,{m:d}=it.$.calculateTimeVariables(n,r.satrec),g=_.t2.propagate(r.satrec,d);if(!g){c.splice(e,1);break}const m=Xt.x.sat2ric({position:h.position,velocity:h.velocity},{position:g.position,velocity:g.velocity});if(Math.abs(m.position[0])<t&&Math.abs(m.position[1])<i&&Math.abs(m.position[2])<a){console.log(`${r.sccNum} at ${new Date(n)}`),u.push(r.sccNum),c.splice(e,1);break}}}u=u.filter(((e,t,i)=>i.indexOf(e)===t));let h=u.join(",");h=h.replace(/,\s*$/u,""),l.b.getUiManager().doSearch(h)}}Wt.PLUGIN_NAME="Debris Screening";var Jt=i(3833);const qt=i.p+"../img/debug.png";var Zt=i(5441),Qt=i(2509),ei=i.n(Qt);class ti extends u.c{constructor(){super(ti.PLUGIN_NAME),this.isErudaVisible=!1,this.bottomIconImg=qt,this.bottomIconElementName="menu-debug",this.bottomIconLabel="Debug",this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:500},this.helpTitle="Debug Menu",this.helpBody=l.b.html`The Debug Menu is used for debugging the app. It is probably not very useful unless you are assisting me with debugging an issue
  <br><br>
  Open Debug Menu allows you to access the console even when it is blocked by the browser. This is useful for debugging issues that only occur in the browser console.
  <br><br>
  Run Gremlins will run a series of tests to try to break the app. This kind of fuzz testing is useful for testing the app's robustness.`,this.sideMenuElementName="debug-menu",this.sideMenuElementHtml=l.b.html`
    <div id="debug-menu" class="side-menu-parent start-hidden text-select">
      <div id="debug-content" class="side-menu">
        <div class="row">
          <h5 class="center-align">Debug Menu</h5>
          <div class="center-align row">
            <button id="debug-console" class="btn btn-ui waves-effect waves-light" type="button">Open Debug Menu &#9658;</button>
          </div>
          <div class="center-align row">
            <button id="debug-gremlins" class="btn btn-ui waves-effect waves-light" type="button">Unleash Gremlins &#9658;</button>
          </div>
        </div>
        <div class="row">
          <h6 class="center-align">Camera</h5>
          <div class="center-align row">
            <span id="debug-camera-position-x"></span>
          </div>
          <div class="center-align row">
            <span id="debug-camera-position-y"></span>
          </div>
          <div class="center-align row">
            <span id="debug-camera-position-z"></span>
          </div>
          <div class="center-align row">
            <span id="debug-camera-distance-from-earth"></span>
          </div>
          <div class="center-align row">
            <button id="debug-cam-to-center" class="btn btn-ui waves-effect waves-light" type="button">Draw Cam to Center Line &#9658;</button>
          </div>
          <div class="center-align row">
            <button id="debug-cam-to-sat" class="btn btn-ui waves-effect waves-light" type="button">Draw Cam to Sat Line &#9658;</button>
          </div>
        </div>
        <div class="row">
          <h6 class="center-align">Satellite</h5>
          <div class="center-align row">
            <span id="debug-sat-position-x"></span>
          </div>
          <div class="center-align row">
            <span id="debug-sat-position-y"></span>
          </div>
          <div class="center-align row">
            <span id="debug-sat-position-z"></span>
          </div>
        </div>
    </div>
  `,this.gremlinsSettings={nb:1e5,delay:5},this.delayForCameraUpdates=1e3,this.lastCameraUpdate=0}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e,t,i,a;null===(e=(0,s.Gn)("debug-console"))||void 0===e||e.addEventListener("click",(()=>{this.isErudaVisible?(ei().hide(),this.isErudaVisible=!1):(ei().show(),this.isErudaVisible=!0)})),null===(t=(0,s.Gn)("debug-gremlins"))||void 0===t||t.addEventListener("click",(()=>{this.runGremlins()})),null===(i=(0,s.Gn)("debug-cam-to-sat"))||void 0===i||i.addEventListener("click",(()=>{var e;if(l.b.getMainCamera()){const t=null===(e=l.b.getPlugin(h.P))||void 0===e?void 0:e.selectedSat;if(!t||-1===t)return;const i=l.b.getCatalogManager().getObject(t);if(i){const e=l.b.getMainCamera().getCameraPosition(i.position,l.b.getMainCamera().getCameraOrientation()),a=[i.position.x+e[0],i.position.y+e[1],i.position.z+e[2]];Zt.Bz.create(Zt.jv.REF_TO_SAT,[t,a[0],a[1],a[2]],"o")}}})),null===(a=(0,s.Gn)("debug-cam-to-center"))||void 0===a||a.addEventListener("click",(()=>{const e=l.b.getMainCamera();if(e){const t=e.getCameraPosition();Zt.Bz.create(Zt.jv.CENTER_OF_EARTH_TO_REF,[t[0],t[1],t[2]],"r")}}))}})}addJs(){super.addJs(),l.b.register({event:o.RL.updateLoop,cbName:this.PLUGIN_NAME,cb:()=>{if((new Date).getTime()-this.lastCameraUpdate<this.delayForCameraUpdates)return;const e=l.b.getMainCamera(),t=l.b.getPlugin(h.P);if(e&&t){const i=t.selectedSat,a=-1!==i?l.b.getCatalogManager().getObject(i):null,n=e.getCameraPosition(null==a?void 0:a.position);(0,s.rE)("debug-camera-position-x",`X: ${n[0].toFixed(2)}`),(0,s.rE)("debug-camera-position-y",`Y: ${n[1].toFixed(2)}`),(0,s.rE)("debug-camera-position-z",`Z: ${n[2].toFixed(2)}`),(0,s.rE)("debug-camera-distance-from-earth",`Distance from Center: ${e.getCameraDistance().toFixed(2)} km`),this.lastCameraUpdate=(new Date).getTime()}if(t.selectedSat>=0){const e=l.b.getCatalogManager().getObject(t.selectedSat);if(!e)return void console.warn("Satellite not found");const i=e.position;(0,s.rE)("debug-sat-position-x",`X: ${i.x.toFixed(2)}`),(0,s.rE)("debug-sat-position-y",`Y: ${i.y.toFixed(2)}`),(0,s.rE)("debug-sat-position-z",`Z: ${i.z.toFixed(2)}`)}}});const e=l.b.getInputManager().keyboard;e.registerKeyDownEvent({key:"F12",callback:()=>{e.isShiftPressed&&(this.isErudaVisible?(ei().hide(),this.isErudaVisible=!1,l.b.getSoundManager().play(g.p.TOGGLE_OFF)):(ei().show(),this.isErudaVisible=!0,l.b.getSoundManager().play(g.p.TOGGLE_ON)))}})}static getRandomInt_(e,t){return e=Number.isNaN(e)?0:Math.ceil(e),t=Number.isNaN(t)?100:Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}static defaultPositionSelector_(){return[ti.getRandomInt_(0,Math.max(0,document.documentElement.clientWidth-1)),ti.getRandomInt_(Math.max(0,document.documentElement.clientHeight-100),Math.max(0,document.documentElement.clientHeight-1))]}static canClick_(e){return void 0===e.parentElement||null==e.parentElement?null:"bmenu-item"===e.parentElement.className}startGremlins(){const e=Jt.species.clicker({canClick:ti.canClick_,defaultPositionSelector:ti.defaultPositionSelector_}),t=Jt.species.toucher({touchTypes:["gesture"],defaultPositionSelector:ti.defaultPositionSelector_}),i=Jt.strategies.distribution({distribution:[.3,.3,.1,.1,.1,.1],delay:this.gremlinsSettings.delay});Jt.createHorde({species:[e,t,Jt.species.clicker(),Jt.species.toucher(),Jt.species.formFiller(),Jt.species.typer({log:!0,logger:console})],mogwais:[Jt.mogwais.alert(),Jt.mogwais.fps(),Jt.mogwais.gizmo({maxErrors:1e3})],strategies:[i]}).unleash()}runGremlins(){if(!(0,s.Gn)("nav-footer"))throw new Error("nav-footer is missing");if(!(0,s.Gn)("nav-footer-toggle"))throw new Error("nav-footer-toggle is missing");if(!(0,s.Gn)("bottom-icons-container"))throw new Error("bottom-icons-container is missing");if(!(0,s.Gn)("bottom-icons"))throw new Error("bottom-icons is missing");(0,s.Gn)("nav-footer").style.height="200px",(0,s.Gn)("nav-footer-toggle").style.display="none",(0,s.Gn)("bottom-icons-container").style.height="200px",(0,s.Gn)("bottom-icons").style.height="200px",this.startGremlins()}}ti.PLUGIN_NAME="Debug Menu";const ii=i.p+"../img/gps.png";var ai=i(8687),ni=i.n(ai),si=i(3268);class oi{static calculateDops(e){const t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},i=e.length;if(i<4)return t;const a=ni().rep([i,4],0);for(let t=1;t<=i;t++){const{az:i,el:n}=e[t-1],s=[Math.cos(n*_.qW)*Math.sin(i*_.qW),Math.cos(n*_.qW)*Math.cos(i*_.qW),Math.sin(n*_.qW),1];ni().setBlock(a,[t-1,0],[t-1,3],[s])}const n=ni().dot(ni().transpose(a),a),s=ni().inv(n),o=Math.sqrt(s[0][0]+s[1][1]+s[2][2]),l=Math.sqrt(s[0][0]+s[1][1]),r=Math.sqrt(s[0][0]+s[1][1]+s[2][2]+s[3][3]),c=Math.sqrt(s[2][2]),d=Math.sqrt(s[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,i,a,n,s=10){if(void 0===i||void 0===a)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};null!=n||(n=0);const{gmst:o}=it.$.calculateTimeVariables(e),l=[];return t.forEach((e=>{const t=(0,_.yv)({lon:a,lat:i,alt:n},(0,_.eV)(e.position,o)),r={az:t.az,el:t.el};r.el>s&&l.push(r)})),oi.calculateDops(l)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");const t=(0,s.Gn)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let i=t.insertRow(),a=i.insertCell();a.appendChild(document.createTextNode("Time"));let n=i.insertCell();n.appendChild(document.createTextNode("HDOP"));let o=i.insertCell();o.appendChild(document.createTextNode("PDOP"));let l=i.insertCell();l.appendChild(document.createTextNode("GDOP"));for(const s of e)i=t.insertRow(),a=i.insertCell(),a.appendChild(document.createTextNode((0,si.v)(s.time,"isoDateTime",!0))),n=i.insertCell(),n.appendChild(document.createTextNode(s.dops.hdop)),o=i.insertCell(),o.appendChild(document.createTextNode(s.dops.pdop)),l=i.insertCell(),l.appendChild(document.createTextNode(s.dops.gdop))}static getDopsList(e,t,i,a,n,s){const o=[];for(let l=0;l<1440;l++){const r=e(60*l*_.s9),c=oi.getDops(r,t,i,a,n,s);o.push({time:r,dops:c})}return o}}class li extends u.c{constructor(){super(li.PLUGIN_NAME),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=ii,this.bottomIconCallback=()=>{this.isMenuButtonActive&&(0,v.QP)(li.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=l.b.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
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
`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=l.b.getInputManager().mouse.latLon;const t=l.b.getInputManager().mouse.dragPosition;if(void 0===e||isNaN(e.lat)||isNaN(e.lon)){console.debug("latLon undefined!");const i=it.$.calculateTimeVariables(l.b.getTimeManager().simulationTimeObj).gmst;e=(0,_.K7)({x:t[0],y:t[1],z:t[2]},i)}const i=li.getGpsSats(l.b.getCatalogManager(),l.b.getGroupsManager()),a=oi.getDops(l.b.getTimeManager().simulationTimeObj,i,e.lat,e.lon,0,settingsManager.gpsElevationMask);l.b.getUiManager().toast(`HDOP: ${a.hdop}<br/>VDOP: ${a.vdop}<br/>PDOP: ${a.pdop}<br/>GDOP: ${a.gdop}<br/>TDOP: ${a.tdop}`,"normal",!0)}break;case"dops-24dops-rmb":{const e=l.b.getInputManager().mouse.latLon;if(this.isMenuButtonActive){(0,v.QP)(li.updateSideMenu),this.setBottomIconToEnabled();break}(0,s.Gn)("dops-lat").value=e.lat.toFixed(3),(0,s.Gn)("dops-lon").value=e.lon.toFixed(3),(0,s.Gn)("dops-alt").value="0",(0,s.Gn)("dops-el").value=settingsManager.gpsElevationMask.toString(),l.b.runEvent(o.RL.bottomMenuClick,this.bottomIconElementName)}}}}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("dops-form").addEventListener("submit",(e=>{e.preventDefault(),li.updateSideMenu()}))}})}static updateSideMenu(){const e=l.b.getGroupsManager(),t=l.b.getCatalogManager(),i=l.b.getTimeManager(),a=parseFloat((0,s.Gn)("dops-lat").value),n=parseFloat((0,s.Gn)("dops-lon").value),o=parseFloat((0,s.Gn)("dops-alt").value),r=parseFloat((0,s.Gn)("dops-el").value);settingsManager.gpsElevationMask=r;const c=li.getGpsSats(t,e),d=oi.getDopsList((e=>i.getOffsetTimeObj(e)),c,a,n,o,r);oi.updateDopsTable(d)}static getGpsSats(e,t){var i,a;const n=null!==(i=(a=t.groupList).GPSGroup)&&void 0!==i?i:a.GPSGroup=t.createGroup(r.Y.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),s=[];return n.ids.forEach((t=>{const i=e.getSat(t);i&&s.push(i)})),s}}li.PLUGIN_NAME="DOPs Plugin";const ri=new li,ci=i.p+"../img/edit.png";class di extends u.c{constructor(){super(di.PLUGIN_NAME),this.dependencies=[h.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=l.b.html`The Edit Satellite Menu is used to edit the satellite data.
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
              <input disabled value="AAAAA" id="${di.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${di.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${di.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${di.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${di.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${di.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${di.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${di.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${di.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${di.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${di.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${di.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${di.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${di.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${di.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${di.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${di.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${di.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${di.elementPrefix}-per" class="active">Period</label>
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
        <div id="${di.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=ci,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.populateSideMenu_()},this.dragOptions={isDraggable:!0},this.isRmbOnSat=!0,this.rmbMenuOrder=2,this.rmbL1ElementName="edit-rmb",this.rmbL1Html=l.b.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Edit Sat &#x27A4;</a></li>`,this.rmbCallback=(e,t)=>{if(null==t)throw new Error("clickedSat is undefined");switch(e){case"set-pri-sat-rmb":this.selectSatManager_.selectSat(t);break;case"set-sec-sat-rmb":this.selectSatManager_.setSecondarySat(t);break;case"edit-sat-rmb":this.selectSatManager_.selectSat(t),this.isMenuButtonActive||l.b.getUiManager().bottomIconPress({id:this.bottomIconElementName})}},this.rmbL2ElementName="edit-rmb-menu",this.rmbL2Html=l.b.html`
    <ul class='dropdown-contents'>
      <li id="set-pri-sat-rmb"><a href="#">Set as Primary Sat</a></li>
      <li id="set-sec-sat-rmb"><a href="#">Set as Secondary Sat</a></li>
      <li id="edit-sat-rmb"><a href="#">Edit Satellite</a></li>
    </ul>`,this.selectSatManager_=l.b.getPlugin(h.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"editSat",cb:()=>{(0,s.Gn)("editSat-newTLE").addEventListener("click",this.editSatNewTleClick_.bind(this)),(0,s.Gn)("editSat").addEventListener("submit",(e=>{e.preventDefault(),di.editSatSubmit()})),(0,s.Gn)(`${di.elementPrefix}-per`).addEventListener("change",(()=>{const e=(0,s.Gn)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,s.Gn)("es-meanmo").value=t.toFixed(8)})),(0,s.Gn)(`${di.elementPrefix}-meanmo`).addEventListener("change",(()=>{const e=(0,s.Gn)(`${di.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,s.Gn)(`${di.elementPrefix}-per`).value=t})),(0,s.Gn)("editSat-save").addEventListener("click",di.editSatSaveClick),(0,s.Gn)("editSat-open").addEventListener("click",(()=>{l.b.getSoundManager().play(g.p.MENU_BUTTON),(0,s.Gn)("editSat-file").click()})),(0,s.Gn)("editSat-file").addEventListener("change",(e=>{window.FileReader&&(di.doReaderActions_(e),e.preventDefault())})),(0,s.Gn)(`${di.elementPrefix}-error`).addEventListener("click",(()=>{(0,s.Gn)(`${di.elementPrefix}-error`).style.display="none"}))}})}addJs(){super.addJs(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e||(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}})}static doReaderActions_(e){try{const t=new FileReader;t.onload=di.readerOnLoad_,t.readAsText(e.target.files[0])}catch(e){f.x.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad_(e){if(2!==e.target.readyState)return;if(e.target.error)return void f.x.warn("Error while reading file!");const t=l.b.getTimeManager(),i=l.b.getOrbitManager(),a=l.b.getUiManager(),n=JSON.parse(e.target.result),s=parseInt(St.J.pad0(n.tle1.substr(2,5).trim(),5)),o=l.b.getCatalogManager().sccNum2Sat(s);let r;try{r=_.t2.createSatrec(n.tle1,n.tle2)}catch(e){return void f.x.error(e,"edit-sat.ts","Error creating satellite record!")}it.$.altitudeCheck(r,t.simulationTimeObj)>1?(l.b.getCatalogManager().satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:o.id,active:!0,tle1:n.tle1,tle2:n.tle2}),i.changeOrbitBufferData(o.id,n.tle1,n.tle2),o.active=!0):a.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}populateSideMenu_(){const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;(0,s.Gn)(`${di.elementPrefix}-scc`).value=t.sccNum;const i=t.inclination.toFixed(4).padStart(8,"0");(0,s.Gn)(`${di.elementPrefix}-inc`).value=i,(0,s.Gn)(`${di.elementPrefix}-year`).value=t.tle1.substr(18,2),(0,s.Gn)(`${di.elementPrefix}-day`).value=t.tle1.substr(20,12),(0,s.Gn)(`${di.elementPrefix}-meanmo`).value=t.tle2.substr(52,11),(0,s.Gn)(`${di.elementPrefix}-per`).value=(1440/parseFloat(t.tle2.substr(52,11))).toFixed(4);const a=t.rightAscension.toFixed(4).padStart(8,"0");(0,s.Gn)(`${di.elementPrefix}-rasc`).value=a,(0,s.Gn)(`${di.elementPrefix}-ecen`).value=t.eccentricity.toFixed(7).substr(2,7);const n=t.argOfPerigee.toFixed(4).padStart(8,"0");(0,s.Gn)(`${di.elementPrefix}-argPe`).value=St.J.pad0(n,8),(0,s.Gn)(`${di.elementPrefix}-meana`).value=t.tle2.substr(43,8)}editSatNewTleClick_(){(0,v.QP)(this.editSatNewTleClickFadeIn_.bind(this))}editSatNewTleClickFadeIn_(){const e=l.b.getTimeManager(),t=l.b.getUiManager();try{const i=l.b.getCatalogManager().sccNum2Id(parseInt((0,s.Gn)(`${di.elementPrefix}-scc`).value)),a=l.b.getCatalogManager().getObject(i);if(!a.isSatellite())return;const n=a,r=it.$.calculateTimeVariables(e.simulationTimeObj).gmst,c=(0,_.K7)(n.position,r),d=c.lon,u=c.lat,h=c.alt,g=it.$.getDirection(n,e.simulationTimeObj);"Error"===g&&t.toast("Cannot calculate direction of satellite. Try again later.","caution");const m=e.simulationTimeObj,p=_t.l.currentEpoch(m);let b;n.tle1=n.tle1.substr(0,18)+p[0]+p[1]+n.tle1.substr(32),l.b.getMainCamera().isAutoPitchYawToTarget=!1,b=n.apogee-n.perigee<300?new Mt(n,u,d,g,m).rotateOrbitToLatLon():new Mt(n,u,d,g,m,h).rotateOrbitToLatLon();const v=b[0],f=b[1];if("Error"===v)return void t.toast(`${f}`,"critical",!0);l.b.getCatalogManager().satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:i,tle1:v,tle2:f}),l.b.getOrbitManager().changeOrbitBufferData(i,v,f);const S=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!S.isSatellite())return;const M=S;(0,s.Gn)(`${di.elementPrefix}-scc`).value=M.sccNum;const y=M.inclination.toFixed(4).padStart(8,"0");(0,s.Gn)(`${di.elementPrefix}-inc`).value=St.J.pad0(y,8),(0,s.Gn)(`${di.elementPrefix}-year`).value=M.tle1.substr(18,2),(0,s.Gn)(`${di.elementPrefix}-day`).value=M.tle1.substr(20,12),(0,s.Gn)(`${di.elementPrefix}-meanmo`).value=M.tle2.substr(52,11),(0,s.Gn)(`${di.elementPrefix}-per`).value=(1440/parseFloat(M.tle2.substr(52,11))).toFixed(4);const x=M.rightAscension.toFixed(4).padStart(8,"0");(0,s.Gn)(`${di.elementPrefix}-rasc`).value=x,(0,s.Gn)(`${di.elementPrefix}-ecen`).value=M.eccentricity.toFixed(7).substr(2,7);const L=M.argOfPerigee.toFixed(4).padStart(8,"0");(0,s.Gn)(`${di.elementPrefix}-argPe`).value=L,(0,s.Gn)(`${di.elementPrefix}-meana`).value=M.tle2.substr(43,8)}catch(e){f.x.warn(e)}}static editSatSubmit(){l.b.getSoundManager().play(g.p.MENU_BUTTON);const e=l.b.getCatalogManager();(0,s.Gn)(`${di.elementPrefix}-error`).style.display="none";const t=(0,s.Gn)(`${di.elementPrefix}-scc`).value,i=e.sccNum2Id(parseInt(t));null===i&&f.x.info("Not a Real Satellite");const a=e.getObject(i,o.C_.EXTRA_ONLY);if(!a.isSatellite())return;const n=a,r=n.tle1.substr(9,8),c=(0,s.Gn)(`${di.elementPrefix}-inc`).value,d=(0,s.Gn)(`${di.elementPrefix}-meanmo`).value,u=(0,s.Gn)(`${di.elementPrefix}-rasc`).value,h=(0,s.Gn)(`${di.elementPrefix}-ecen`).value,m=(0,s.Gn)(`${di.elementPrefix}-argPe`).value,p=(0,s.Gn)(`${di.elementPrefix}-meana`).value,b=(0,s.Gn)(`${di.elementPrefix}-year`).value,v=(0,s.Gn)(`${di.elementPrefix}-day`).value,{tle1:S,tle2:M}=_.L.createTle({sat:n,inc:c,meanmo:d,rasc:u,argPe:m,meana:p,ecen:h,epochyr:b,epochday:v,intl:r,scc:t}),y=S,x=M;let L;try{L=_.t2.createSatrec(y,x)}catch(e){return void f.x.error(e,"edit-sat.ts","Error creating satellite record!")}it.$.altitudeCheck(L,l.b.getTimeManager().simulationTimeObj)>1?(e.satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:i,active:!0,tle1:y,tle2:x}),l.b.getOrbitManager().changeOrbitBufferData(i,y,x),n.active=!0,n.editTle(y,x),l.b.getMainCamera().zoomTarget=_.$R.GEO):l.b.getUiManager().toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static editSatSaveClick(e){const t=l.b.getCatalogManager();l.b.getSoundManager().play(g.p.EXPORT);try{const e=(0,s.Gn)(`${di.elementPrefix}-scc`).value,i=t.sccNum2Id(parseInt(e)),a=t.getObject(i,o.C_.EXTRA_ONLY),n={tle1:a.tle1,tle2:a.tle2},l=JSON.stringify(n),r=new Blob([l],{type:"text/plain;charset=utf-8"});(0,nt.saveAs)(r,`${e}.tle`)}catch(e){}e.preventDefault()}}di.PLUGIN_NAME="Edit Sat",di.elementPrefix="es";class ui{constructor(){this.PLUGIN_NAME="Gamepad",this.deadzone=.55,this.buttonsPressedHistory=[],this.buttonsPressed=[]}init(){window.addEventListener("gamepadconnected",(e=>{settingsManager.cruncherReady?this.initializeGamepad(e.gamepad):l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>this.initializeGamepad(e.gamepad)})})),window.addEventListener("gamepaddisconnected",(()=>{l.b.getUiManager().toast("Gamepad disconnected","critical"),this.currentController=null}))}initializeGamepad(e){l.b.getUiManager().toast("Gamepad connected","normal"),this.currentController||l.b.register({event:o.RL.updateLoop,cbName:this.PLUGIN_NAME,cb:this.updateGamepad.bind(this)}),this.currentController=e}updateGamepad(e){null!=e||(e=0);const t=ui.getController(e);null!==t&&(this.currentController=t,this.updateZoom_(),this.updateLeftStick_(),this.updateRightStick_(),this.updateButtons_())}updateButtons_(){this.currentController.buttons.forEach(((e,t)=>{if(e.pressed&&!this.buttonsPressed[t])switch(this.buttonsPressed[t]=!0,this.buttonsPressedHistory.push(t),this.buttonsPressedHistory.length>8&&this.buttonsPressedHistory.shift(),t){case 0:this.btnA_();break;case 1:this.btnB_();break;case 2:this.btnX_();break;case 3:this.btnY_();break;case 4:this.btnLeftBumper();break;case 5:this.btnRightBumper_();break;case 8:this.btnHome_();break;case 9:this.btnStart_();break;case 10:this.btnLeftStick_();break;case 11:this.btnRightStick_();break;case 12:this.btnDpadUp_();break;case 13:this.btnDpadDown_();break;case 14:this.btnDpadLeft_();break;case 15:this.btnDpadRight_();break;case 16:this.btnXbox()}else!e.pressed&&this.buttonsPressed[t]&&(this.buttonsPressed[t]=!1)}))}btnA_(){var e;settingsManager.isLimitedGamepadControls||(console.log("A"),null===(e=l.b.getPlugin(h.P))||void 0===e||e.selectSat(l.b.getHoverManager().hoveringSat))}btnB_(){var e;settingsManager.isLimitedGamepadControls||(console.log("B"),null===(e=l.b.getPlugin(h.P))||void 0===e||e.selectSat(-1),l.b.getMainCamera().zoomTarget=.8)}btnX_(){settingsManager.isLimitedGamepadControls||(console.log("X"),l.b.getMainCamera().autoRotate())}btnY_(){console.log("Y")}btnLeftBumper(){var e;settingsManager.isLimitedGamepadControls||(console.log("Left Bumper"),null===(e=l.b.getPlugin(h.P))||void 0===e||e.selectPrevSat())}btnRightBumper_(){var e;settingsManager.isLimitedGamepadControls||(console.log("Right Bumper"),null===(e=l.b.getPlugin(h.P))||void 0===e||e.selectNextSat())}btnHome_(){settingsManager.isLimitedGamepadControls||(console.log("Home"),l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,l.b.getMainCamera().ftsRotateReset=!0)}btnXbox(){console.log("Xbox Button")}btnStart_(){console.log("Start")}btnLeftStick_(){console.log("Left Stick")}btnRightStick_(){console.log("Right Stick")}btnDpadUp_(){console.log("D-Pad Up"),settingsManager.isAutoRotateD=!1,settingsManager.isAutoRotateU=!settingsManager.isAutoRotateU,l.b.getMainCamera().autoRotate(!0)}btnDpadDown_(){console.log("D-Pad Down"),settingsManager.isAutoRotateU=!1,settingsManager.isAutoRotateD=!settingsManager.isAutoRotateD,l.b.getMainCamera().autoRotate(!0)}btnDpadLeft_(){console.log("D-Pad Left"),settingsManager.isAutoRotateR=!1,settingsManager.isAutoRotateL=!settingsManager.isAutoRotateL,l.b.getMainCamera().autoRotate(!0)}btnDpadRight_(){console.log("Right"),settingsManager.isAutoRotateL=!1,settingsManager.isAutoRotateR=!settingsManager.isAutoRotateR,l.b.getMainCamera().autoRotate(!0)}updateZoom_(){const e=this.currentController.buttons[6].value,t=this.currentController.buttons[7].value;if(0===e&&0===t)return;const i=l.b.getRenderer();let a=l.b.getMainCamera().zoomLevel();switch(l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:a+=e/500*i.dt,a-=t/500*i.dt,l.b.getMainCamera().zoomTarget=a,l.b.getMainCamera().camZoomSnappedOnSat=!1,l.b.getMainCamera().isAutoPitchYawToTarget=!1,a<l.b.getMainCamera().zoomLevel()?l.b.getMainCamera().isZoomIn=!0:l.b.getMainCamera().isZoomIn=!1;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:0!==e&&(l.b.getMainCamera().fpsVertSpeed+=Math.pow(2*e,3)*i.dt*settingsManager.cameraMovementSpeed),0!==t&&(l.b.getMainCamera().fpsVertSpeed-=Math.pow(2*t,3)*i.dt*settingsManager.cameraMovementSpeed)}}updateLeftStick_(){const e=this.currentController.axes[0],t=this.currentController.axes[1];if(e>this.deadzone||e<-this.deadzone||t>this.deadzone||t<-this.deadzone){l.b.getMainCamera().autoRotate(!1);const i=l.b.getRenderer();switch(settingsManager.lastGamepadMovement=Date.now(),l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:l.b.getMainCamera().camAngleSnappedOnSat=!1,l.b.getMainCamera().isAutoPitchYawToTarget=!1,l.b.getMainCamera().camPitchSpeed-=Math.pow(t,3)/200*i.dt*settingsManager.cameraMovementSpeed,l.b.getMainCamera().camYawSpeed+=Math.pow(e,3)/200*i.dt*settingsManager.cameraMovementSpeed;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:(t>this.deadzone||t<-this.deadzone)&&(l.b.getMainCamera().fpsForwardSpeed=-Math.pow(t,3)*i.dt),(e>this.deadzone||e<-this.deadzone)&&(l.b.getMainCamera().fpsSideSpeed=Math.pow(e,3)*i.dt)}}}updateRightStick_(){if(settingsManager.isLimitedGamepadControls)return;const e=this.currentController.axes[2],t=this.currentController.axes[3],i=l.b.getRenderer();if(l.b.getMainCamera().isLocalRotateOverride=!1,t>this.deadzone||t<-this.deadzone||e>this.deadzone||e<-this.deadzone)switch(l.b.getMainCamera().autoRotate(!1),l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:l.b.getMainCamera().isLocalRotateOverride=!0,l.b.getMainCamera().localRotateDif.pitch=200*-t,l.b.getMainCamera().localRotateDif.yaw=200*-e;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:l.b.getMainCamera().camPitchSpeed+=t/100*i.dt*settingsManager.cameraMovementSpeed,l.b.getMainCamera().camYawSpeed-=e/100*i.dt*settingsManager.cameraMovementSpeed}}vibrate(e){this.currentController&&this.currentController.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})}static getController(e=0){const t=navigator.getGamepads().filter((e=>null!==e));return t.length>e&&null!==t[e]?t[e]:null}}const hi=new ui;var gi=i(2238);const mi=i.p+"../img/calendar.png";class pi extends u.c{constructor(){super("Launch Menu"),this.bottomIconElementName="menu-launches",this.bottomIconImg=mi,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonActive){settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3);const e=(new Date).getFullYear();(0,gi.Us)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonActive&&(this.isMenuButtonActive=!1,(0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const bi=new pi,vi=i.p+"../img/rocket.png";var fi=i(8568);class Si extends u.c{constructor(){super(Si.PLUGIN_NAME),this.dependencies=[h.P.PLUGIN_NAME],this.bottomIconCallback=()=>{if(!this.isMenuButtonActive)return;if(!this.verifySatelliteSelected())return;const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);(0,s.Gn)("nl-scc").value=e.sccNum,(0,s.Gn)("nl-inc").value=St.J.pad0(e.inclination.toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=vi,this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=l.b.html`
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
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=l.b.getTimeManager(),i=l.b.getCatalogManager(),a=l.b.getUiManager(),n=l.b.getColorSchemeManager();(0,v.wU)();const o=(0,s.Gn)("nl-scc").value,r=i.sccNum2Id(parseInt(o)),c=i.getObject(r),d=(0,s.Gn)("nl-updown").value,u=(0,s.Gn)("nl-facility").value;let h,m;if(!i.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in i.launchSites)i.launchSites[e].name===u&&(h=i.launchSites[e].lat,m=i.launchSites[e].lon);m>180&&(m-=360);const p=new Date,b=new Date(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate(),0,0,0);b.setUTCHours(0);const S=t.staticOffset;t.changeStaticOffset(b.getTime()-p.getTime()),n.setColorScheme(settingsManager.currentColorScheme,!0),l.b.getMainCamera().isAutoPitchYawToTarget=!1;const M=t.simulationTimeObj,y=new Mt(c,h,m,d,M).rotateOrbitToLatLon(),x=y[0],L=y[1];if("Error"===x||69!==x.length||69!==L.length)return"Error"===x?a.toast(`Failed to Create TLE: ${L}`,"critical"):69!==x.length?a.toast(`Invalid TLE1 Created: length is not 69 - ${x}`,"critical"):69!==L.length&&a.toast(`Invalid TLE2 Created: length is not 69 - ${L}`,"critical"),t.changeStaticOffset(S),this.isDoingCalculations=!1,void(0,v.Zk)();let C;a.toast("Time is now relative to launch time.","standby"),null===(e=l.b.getSoundManager())||void 0===e||e.play(g.p.LIFT_OFF),c.satrec=null;try{C=_.t2.createSatrec(x,L),c.satrec=C}catch(e){return void f.x.error(e,"new-launch.ts","Error creating satellite record!")}it.$.altitudeCheck(C,M)>1?(i.satCruncher.postMessage({typ:yt.Bi.SAT_EDIT,id:r,active:!0,tle1:x,tle2:L}),l.b.getOrbitManager().changeOrbitBufferData(r,x,L)):a.toast("Failed Altitude Test - Try a Different Satellite!","critical"),(0,zt.J)({cruncher:i.satCruncher,cb:()=>{this.isDoingCalculations=!1,(0,v.Zk)(),a.toast("Launch Nominal Created!","standby"),a.searchManager.doSearch(c.sccNum)},validationFunc:e=>void 0!==e.satPos,error:()=>{this.isDoingCalculations=!1,(0,v.Zk)(),a.toast("Cruncher failed to meet requirement after multiple tries! Is this launch even possible?","critical")}})},this.selectSatManager_=l.b.getPlugin(h.P)}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)(`${this.sideMenuElementName}-form`).addEventListener("change",(()=>{const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);e.isSatellite()&&this.preValidate_(e)}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(null==e?void 0:e.isSatellite()){const t=e;(0,s.Gn)("nl-scc").value=t.sccNum,(0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.preValidate_(t)}else(0,s.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0}})}preValidate_(e){const t=(0,s.Gn)("nl-facility").value,i=fi.E[t].lat;let a=e.inclination;a=a>90?180-a:a;const n=(0,s.Gn)(`${this.sideMenuElementName}-submit`);a<i?(n.disabled=!0,n.textContent="Inclination Too Low!"):(n.disabled=!1,n.textContent="Create Launch Nominal ▶")}}Si.PLUGIN_NAME="New Launch";const Mi=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown",_i=i.p+"../img/calendar2.png";class yi extends u.c{constructor(){super(yi.PLUGIN_NAME),this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.showTable()},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=_i,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=l.b.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=l.b.html`
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
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),i.e(246).then(i.bind(i,6246)).then((e=>e))}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("export-launch-info").addEventListener("click",(()=>{l.b.getSoundManager().play(g.p.EXPORT),(0,at.Eb)(this.launchList,"launchList")}))}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then((e=>e.json())).then((e=>this.processData(e))).catch((()=>f.x.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`))).finally((()=>{const e=(0,s.Gn)("nextLaunch-table");e&&""==e.innerHTML&&(yi.initTable(e,this.launchList),(0,s.Gn)("nextLaunch-table").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(0,gi.Us)(e.href)}))})))}))}}processData(e){var t,i,a,n,s,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(i=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===i?void 0:i.name.split(",",1)[0],c.locationURL=null===(a=r.pad)||void 0===a?void 0:a.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(n=r.rocket)||void 0===n?void 0:n.configuration.full_name,c.rocketConfig=null===(s=r.rocket)||void 0===s?void 0:s.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Launch Window")),i.setAttribute("style","text-decoration: underline; width: 120px;");const a=t.insertCell();a.appendChild(document.createTextNode("Mission")),a.setAttribute("style","text-decoration: underline; width: 140px;");const n=t.insertCell();n.appendChild(document.createTextNode("Location")),n.setAttribute("style","text-decoration: underline");const s=t.insertCell();s.appendChild(document.createTextNode("Agency")),s.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var i,a,n,s,o,l;yi.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),u=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":`${(0,si.v)(t[r].windowStart,"isoDateTime",!0)} UTC`;d.appendChild(document.createTextNode(u));const h=c.insertCell(),g=(null===(i=t[r])||void 0===i?void 0:i.missionName)||"Unknown",m=(null===(a=t[r])||void 0===a?void 0:a.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${Mi(g,15)}</a>`:`${Mi(g,15)}`,p=(null===(n=t[r])||void 0===n?void 0:n.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;h.innerHTML=`${m}<br />${p}`;const b=(null===(s=t[r])||void 0===s?void 0:s.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${Mi(t[r].location,25)}</a>`:`${Mi(t[r].location,25)}`;c.insertCell().innerHTML=b;const v=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${Mi(t[r].agency,30)}</a>`:`${Mi(t[r].agency,30)}`;c.insertCell().innerHTML=v,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}yi.PLUGIN_NAME="Next Launches";const xi=i.p+"../img/day-night.png";class Li extends u.c{constructor(){super("Night Toggle"),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=xi}addJs(){super.addJs(),l.b.register({event:o.RL.nightToggle,cbName:this.PLUGIN_NAME,cb:(e,t,i)=>{this.isMenuButtonActive?e.bindTexture(e.TEXTURE_2D,i):e.bindTexture(e.TEXTURE_2D,t)}}),l.b.getInputManager().keyboard.registerKeyUpEvent({key:"N",callback:()=>{this.isMenuButtonActive?(l.b.getSoundManager().play(g.p.TOGGLE_OFF),this.setBottomIconToUnselected()):(l.b.getSoundManager().play(g.p.TOGGLE_ON),this.setBottomIconToSelected())}})}}var Ci=i(9974);class wi extends u.c{constructor(){super(wi.PLUGIN_NAME),this.dependencies=[Ci.s.PLUGIN_NAME,h.P.PLUGIN_NAME],this.doOnce=!1,this.isReferenceSatsActive=!1,this.selectSatManager_=l.b.getPlugin(h.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e&&(this.doOnce||((0,s.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
                <div id="orbit-references-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,s.Gn)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0))}})}orbitReferencesLinkClick(){const e=l.b.getCatalogManager(),t=e.getSat(this.selectSatManager_.selectedSat);if(!t)return;let i=t.sccNum5.padStart(5,"0");const a=t.eccentricity.toString(),n=t.rightAscension.toString(),s=t.argOfPerigee.toString(),o=t.inclination.toString(),r=t.meanMotion.toString(),c=t.epochYear.toString(),d=t.epochDay.toString(),u=t.intlDes.split("-")[0].slice(2)+t.intlDes.split("-")[1],h=t.sccNum,g=1440/parseFloat(r);let m=0;for(let l=0;l<360;l++){const p=m.toFixed(4).padStart(8,"0"),{tle1:b,tle2:v}=_.L.createTle({sat:t,inc:o,meanmo:r,rasc:n,argPe:s,meana:p,ecen:a,epochyr:c,epochday:d,intl:u,scc:h}),f=_.Ad.convert6DigitToA5((pt.g.ANALYST_START_ID+l).toString().padStart(5,"0")),S=e.sccNum2Id(f),M=e.addAnalystSat(b,v,S,f);if(M&&(i+=`${M.sccNum.toString()},`),m+=360/g*4,m>=360)break}i=i.slice(0,-1),l.b.getUiManager().doSearch(i),this.isReferenceSatsActive=!0}}wi.PLUGIN_NAME="Orbit References";const Ei=i.p+"../img/polar.png";class Ti extends u.c{constructor(){super(Ti.PLUGIN_NAME),this.dependencies=[h.P.PLUGIN_NAME],this.plotDuration_=3,this.fontRatio_=.03,this.plotData_=[],this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconElementName="menu-polar-plot",this.bottomIconLabel="Polar Plot",this.bottomIconImg=Ei,this.bottomIconCallback=()=>{this.updatePlot_()},this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="polar-plot-menu",this.sideMenuElementHtml=l.b.html`
  <div id="polar-plot-menu" class="side-menu-parent start-hidden text-select">
    <div id="polar-plot-content" class="side-menu" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <span id="polar-plot-warning" class="text-center">Satellite is not in view for the next ${(24*this.plotDuration_).toFixed(0)} hours</span>
      <canvas id="polar-plot" class="w-96" width="1000" height="1000"></canvas>
      <button id="polar-plot-save" class="btn btn-primary">Save Image</button>
    </div>
  </div>
  `,this.helpTitle="Polar Plot Menu",this.helpBody=l.b.html`The Polar Plot Menu is used to generate a 2D polar plot of the satellite's azimuth and elevation over time.`,this.dragOptions={isDraggable:!0,minWidth:450,maxWidth:1e3},this.selectSatManager_=l.b.getPlugin(h.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("polar-plot-save").addEventListener("click",(()=>{const e=document.getElementById("polar-plot").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download=`sat-${this.selectSatManager_.getSelectedSat().sccNum6}-polar-plot.png`,t.click()}))}})}addJs(){super.addJs(),l.b.register({event:o.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.isMenuButtonActive&&this.updatePlot_()}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())&&l.b.getSensorManager().isSensorSelected()?((0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.isMenuButtonActive&&this.updatePlot_()):((0,s.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}}),l.b.getInputManager().keyboard.registerKeyUpEvent({key:"P",callback:()=>{-1!==l.b.getPlugin(h.P).selectedSat&&(this.isMenuButtonActive?(this.closeSideMenu(),this.setBottomIconToUnselected(),l.b.getSoundManager().play(g.p.TOGGLE_OFF)):(this.openSideMenu(),this.setBottomIconToSelected(),this.updatePlot_(),l.b.getSoundManager().play(g.p.TOGGLE_ON)))}})}updatePlot_(){this.generatePlotData_()?(this.drawPlot_(),(0,s.UT)("polar-plot-warning"),(0,s.K4)("polar-plot"),(0,s.K4)("polar-plot-save")):((0,s.K4)("polar-plot-warning"),(0,s.UT)("polar-plot"),(0,s.UT)("polar-plot-save"),(0,s.Gn)("polar-plot-warning").innerHTML=`Satellite is not in view for the next ${(24*this.plotDuration_).toFixed(0)} hours`)}generatePlotData_(){this.passStartTime_=null,this.passStopTime_=null;const e=l.b.getSensorManager().getSensor(),t=this.selectSatManager_.getSelectedSat();let i=!1;if(t.perigee>e.maxRng||t.apogee<e.minRng)return!1;this.plotData_=[];let a=null;for(let n=0;n<this.plotDuration_*_.bF;n++)if(a=l.b.getTimeManager().getOffsetTimeObj(n*_.s9),e.isSatInFov(t,a)){this.passStartTime_||(this.passStartTime_=a);const n=e.rae(t,a);this.plotData_.push([n.az,n.el]),i=!0}else if(i)break;return this.passStopTime_=a,i}drawPlot_(){this.setupCanvas_(),this.drawPlotBackground_(),this.drawOrbitLine_(),this.drawStartAndEnd_(),this.drawTitle_()}drawTitle_(){this.ctx_.font=.035*this.canvasSize_+"px consolas",this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.textAlign="center",this.ctx_.textBaseline="top",this.ctx_.fillText(`Satellite ${this.selectSatManager_.getSelectedSat().sccNum}: ${this.passStartTime_.toISOString().slice(11,19)} - ${this.passStopTime_.toISOString().slice(11,19)}`,this.centerX_,0)}setupCanvas_(){const e=document.getElementById("polar-plot");e&&(this.ctx_=e.getContext("2d"),this.canvasSize_=Math.min(this.ctx_.canvas.width,this.ctx_.canvas.height),this.ctx_.imageSmoothingEnabled=!0,this.centerX_=this.ctx_.canvas.width/2,this.centerY_=this.ctx_.canvas.height/2,this.distanceUnit_=this.canvasSize_/225,this.ctx_.clearRect(0,0,this.ctx_.canvas.width,this.ctx_.canvas.height))}drawElevationLines_(){let e=0,t=0;this.ctx_.beginPath();const i=[15,30,45,60,75,90];for(const a of i){e=a*this.distanceUnit_,this.ctx_.moveTo(this.centerX_+e,this.centerY_);for(let i=1;i<=360;i++)t=Math.PI/180*i,this.ctx_.lineTo(this.centerX_+e*Math.cos(t),this.centerY_+e*Math.sin(t))}this.ctx_.lineWidth=1,this.ctx_.stroke()}drawStartAndEnd_(){this.drawDot_(this.plotData_[0][1],this.plotData_[0][0],"lightgreen"),this.drawDot_(this.plotData_[this.plotData_.length-1][1],this.plotData_[this.plotData_.length-1][0],"red")}drawDot_(e,t,i="lightgreen"){t=Math.PI/180*(t-90),e=(90-e)*this.distanceUnit_,this.ctx_.beginPath(),this.ctx_.arc(this.centerX_+e*Math.cos(t),this.centerY_+e*Math.sin(t),15,0,2*Math.PI,!1),this.ctx_.fillStyle=i,this.ctx_.fill()}drawOrbitLine_(){this.ctx_.beginPath(),this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.lineWidth=2;const e=this.plotData_.length;let t=0;for(let i=0;i<e;i++){const e=Math.PI/180*(this.plotData_[i][0]-90);t=(90-this.plotData_[i][1])*this.distanceUnit_,0===i&&(this.ctx_.beginPath(),this.ctx_.moveTo(this.centerX_+t*Math.cos(e),this.centerY_+t*Math.sin(e))),this.ctx_.lineTo(this.centerX_+t*Math.cos(e),this.centerY_+t*Math.sin(e))}this.ctx_.stroke()}drawPlotBackground_(){this.drawElevationLines_(),this.drawPolarAxes_(),this.ctx_.font=this.canvasSize_*this.fontRatio_+"px serif",this.ctx_.strokeStyle="rgb(77, 172, 255)",this.ctx_.fillStyle="rgb(77, 172, 255)",this.ctx_.lineWidth=1,this.labelAzimuthAxis_(),this.labelElevationAxis_()}drawPolarAxes_(){const e=96*this.distanceUnit_;this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_,this.centerY_+e),this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_,this.centerY_-e),this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_+e,this.centerY_),this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_-e,this.centerY_)}labelElevationAxis_(){this.ctx_.textAlign="center",this.ctx_.textBaseline="middle";const e=this.canvasSize_/700;this.ctx_.fillText("90°",this.centerX_+18*e,this.centerY_-12*e),this.ctx_.fillText("75°",this.centerX_+44*e,this.centerY_-44*e),this.ctx_.fillText("60°",this.centerX_+76*e,this.centerY_-76*e),this.ctx_.fillText("45°",this.centerX_+108*e,this.centerY_-108*e),this.ctx_.fillText("30°",this.centerX_+143*e,this.centerY_-143*e),this.ctx_.fillText("15°",this.centerX_+175*e,this.centerY_-175*e),this.ctx_.fillText("0°",this.centerX_+206*e,this.centerY_-206*e),this.ctx_.stroke()}labelAzimuthAxis_(){const e=98*this.distanceUnit_;this.ctx_.font=this.canvasSize_*this.fontRatio_+"px serif",this.ctx_.textAlign="center",this.ctx_.textBaseline="bottom",this.ctx_.fillText(" 0°",this.centerX_,this.centerY_-e),this.ctx_.textBaseline="top",this.ctx_.fillText("180°",this.centerX_,this.centerY_+e),this.ctx_.textAlign="right",this.ctx_.textBaseline="middle",this.ctx_.fillText("270°",this.centerX_-e,this.centerY_),this.ctx_.textAlign="left",this.ctx_.fillText("90°",this.centerX_+e,this.centerY_),this.ctx_.stroke()}}Ti.PLUGIN_NAME="Polar Plot";const Ai=i.p+"../img/reports.png";class Ni extends u.c{constructor(){super(Ni.PLUGIN_NAME),this.dependencies=[h.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.bottomIconElementName="menu-reports",this.bottomIconLabel="Reports",this.bottomIconImg=Ai,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="reports-menu",this.sideMenuElementHtml=l.b.html`
  <div id="reports-menu" class="side-menu-parent start-hidden text-select">
    <div id="reports-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Reports</h5>
        <div class="divider"></div>
        <div class="center-align" style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px; margin-left: 10px; margin-right: 10px;">
          <button
              id="aer-report-btn" class="btn btn-ui waves-effect waves-light" type="button" name="action">Azimuth Elevation Range &#9658;
          </button>
          <button
              id="lla-report-btn" class="btn btn-ui waves-effect waves-light" type="button" name="action">Lattitude Longitude Altitude &#9658;
          </button>
          <button
              id="eci-report-btn" class="btn btn-ui waves-effect waves-light" type="button" name="action">Earth Centered Intertial &#9658;
          <button
              id="coes-report-btn" class="btn btn-ui waves-effect waves-light" type="button" name="action">Classical Orbital Elements &#9658;
          </button>
        </div>
      </div>
    </div>
  </div>
  `,this.helpTitle="Reports Menu",this.helpBody=l.b.html`The Reports Menu is a collection of tools to help you analyze and understand the data you are viewing.`,this.dragOptions={isDraggable:!1,minWidth:320},this.selectSatManager_=l.b.getPlugin(h.P)}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("aer-report-btn").addEventListener("click",(()=>this.generateAzElRng_())),(0,s.Gn)("coes-report-btn").addEventListener("click",(()=>this.generateClasicalOrbElJ2000_())),(0,s.Gn)("eci-report-btn").addEventListener("click",(()=>this.generateEci_())),(0,s.Gn)("lla-report-btn").addEventListener("click",(()=>this.generateLla_()))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())?((0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,s.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}generateAzElRng_(){const e=this.getSat_(),t=this.getSensor_();if(!e||!t)return;const i=`Azimuth Elevation Range Report\n-------------------------------\n${this.createHeader_(e,t)}`;let a="Time (UTC),Azimuth(°),Elevation(°),Range(km)\n",n=!1,s=this.getStartTime_();for(let i=0;i<259200;i+=30){s=new Date(s.getTime()+30*_.s9);const i=t.rae(e,s);i.el>0?(n=!0,a+=`${this.formatTime_(s)},${i.az.toFixed(3)},${i.el.toFixed(3)},${i.rng.toFixed(3)}\n`):n&&(a+="\n\n",n=!1)}"Time (UTC),Azimuth(°),Elevation(°),Range(km)\n"===a&&(a+="No passes found!"),this.writeReport_({filename:`aer-${e.sccNum}`,header:i,body:a})}formatTime_(e){const t=e.toISOString().split("T");return`${t[0]} ${t[1].split(".")[0]}`}generateLla_(){const e=this.getSat_();if(!e)return;const t=`Latitude Longitude Altitude Report\n-------------------------------\n${this.createHeader_(e)}`;let i="Time (UTC),Latitude(°),Longitude(°),Altitude(km)\n",a=this.getStartTime_();for(let t=0;t<259200;t+=30){a=new Date(a.getTime()+30*_.s9);const t=e.lla(a);i+=`${this.formatTime_(a)},${t.lat.toFixed(3)},${t.lon.toFixed(3)},${t.alt.toFixed(3)}\n`}this.writeReport_({filename:`lla-${e.sccNum}`,header:t,body:i})}generateEci_(){const e=this.getSat_();if(!e)return;const t=`Earth Centered Intertial Report\n-------------------------------\n${this.createHeader_(e)}`;let i="Time (UTC),Position X(km),Position Y(km),Position Z(km),Velocity X(km/s),Velocity Y(km/s),Velocity Z(km/s)\n",a=this.getStartTime_();for(let t=0;t<259200;t+=30){a=new Date(a.getTime()+30*_.s9);const t=e.eci(a);i+=`${this.formatTime_(a)},${t.position.x.toFixed(3)},${t.position.y.toFixed(3)},${t.position.z.toFixed(3)},${t.velocity.x.toFixed(3)},${t.velocity.y.toFixed(3)},${t.velocity.z.toFixed(3)}\n`}this.writeReport_({filename:`eci-${e.sccNum}`,header:t,body:i,columns:7,isHeaders:!0})}createHeader_(e,t){const i=`Date: ${(new Date).toISOString()}\nSatellite: ${e.name}\nNORAD ID: ${e.sccNum}\nAlternate ID: ${e.altId||"None"}\nInternational Designator: ${e.intlDes}\n\n`,a=`Sensor: ${t?t.name:"None"}\nType: ${t?t.getTypeString():"None"}\nLatitude: ${t?t.lat:"None"}\nLongitude: ${t?t.lon:"None"}\nAltitude: ${t?t.alt:"None"}\nMin Azimuth: ${t?t.minAz:"None"}\nMax Azimuth: ${t?t.maxAz:"None"}\nMin Elevation: ${t?t.minEl:"None"}\nMax Elevation: ${t?t.maxEl:"None"}\nMin Range: ${t?t.minRng:"None"}\nMax Range: ${t?t.maxRng:"None"}\n\n`;return t?`${i}${a}`:`${i}`}generateClasicalOrbElJ2000_(){const e=this.getSat_();if(!e)return;const t=`Classic Orbit Elements Report\n-------------------------------\n${this.createHeader_(e)}`,i=e.toJ2000().toClassicalElements(),a=`Epoch, ${i.epoch}\nApogee, ${i.apogee.toFixed(3)} km\nPerigee, ${i.perigee.toFixed(3)} km\nInclination, ${i.inclination.toFixed(3)}°\nRight Ascension, ${i.rightAscensionDegrees.toFixed(3)}°\nArgument of Perigee, ${i.argPerigeeDegrees.toFixed(3)}°\nTrue Anomaly, ${i.trueAnomalyDegrees.toFixed(3)}°\nEccentricity, ${i.eccentricity.toFixed(3)}\nPeriod, ${i.period.toFixed(3)} min\nSemi-Major Axis, ${i.semimajorAxis.toFixed(3)} km\nMean Motion, ${i.meanMotion.toFixed(3)} rev/day`;this.writeReport_({filename:`coes-${e.sccNum}`,header:t,body:a,columns:2,isHeaders:!1})}writeReport_({filename:e,header:t,body:i,columns:a=4,isHeaders:n=!0}){const s=window.open("text/plain",e),o=new Array(a).fill(0);if(s){const a=i.split("\n").map((e=>e.split(","))).map(((e,t)=>e.map(((e,i)=>(0===t&&(o[i]=0===i?Math.max((new Date).toISOString().length+5,e.trim().length+5):Math.max(10,e.trim().length+5)),e.trim().padEnd(o[i])))))).map(((e,t)=>{const i=e.join("   ");if(0===t&&n){const t=e.join("   "),i=t.replace(/./gu,"-");return`${t}\n${i}`}return i})).join("\n");s.document.write(`<a href="data:text/plain;charset=utf-8,${encodeURIComponent(t+a)}" download="${e}.txt">Download Report</a><br>`),s.document.write(`<plaintext>${t}${a}`),s.document.title=e,s.history.replaceState(null,e,`/${e}.txt`)}else alert("Please allow popups for this site")}getStartTime_(){const e=l.b.getTimeManager().getOffsetTimeObj(0);return e.setMilliseconds(0),e.setSeconds(0),e}getSat_(){const e=this.selectSatManager_.primarySatObj;return e?e instanceof _.oZ?e:(f.x.warn("Satellite is not DetailedSatellite!"),null):(f.x.warn("Select a satellite first!"),null)}getSensor_(){const e=l.b.getSensorManager();return e.isSensorSelected()?e.currentSensors[0]:(f.x.warn("Select a sensor first!"),null)}}Ni.PLUGIN_NAME="Reports";var ki=i(5890);const Gi=i.p+"../img/satchng.png";class Ii extends u.c{constructor(){super(Ii.PLUGIN_NAME),this.bottomIconImg=Gi,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=l.b.html`
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
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"constellations",cb:()=>{(0,s.Gn)("constellation-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(e=>{Ii.constellationMenuClick(e.target.dataset.group)}))}))}})}static constellationMenuClick(e){const t=l.b.getTimeManager(),i=l.b.getCatalogManager(),a=l.b.getGroupsManager();if(void 0!==a){switch(e){case"SpaceStations":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/NAVSTAR/u,e);break;case"iridium":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/IRIDIUM/u,e);break;case"orbcomm":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/ORBCOMM/u,e);break;case"globalstar":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GLOBALSTAR/u,e);break;case"ses":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/SES \d+/u,e);break;case"AmatuerRadio":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,i.id2satnum(i.satLinkManager.aehf),e),(0,v.QP)((()=>{Zt.Bz.clear(),i.satLinkManager.showLinks(Zt.Bz,ki.W6.Aehf,t)}));break;case"wgs":if(!a.groupList[e]){const t=i.satLinkManager.wgs.concat(i.satLinkManager.dscs);a.createGroup(r.Y.SCC_NUM,i.id2satnum(t),e)}(0,v.QP)((()=>{Zt.Bz.clear(),i.satLinkManager.showLinks(Zt.Bz,ki.W6.Wgs,t)}));break;case"starlink":a.groupList[e]||a.createGroup(r.Y.NAME_REGEX,/STARLINK/u,e);break;case"sbirs":if(!a.groupList[e]){const t=[...i.satLinkManager.sbirs,...i.satLinkManager.dsp];a.createGroup(r.Y.SCC_NUM,i.id2satnum(t),e)}break;default:throw new Error(`Unknown group name: ${e}`)}Ii.groupSelected(e)}}static groupSelected(e){var t;if(void 0===e)return;const i=l.b.getCatalogManager(),a=l.b.getGroupsManager();if(void 0===a.groupList[e])throw new Error(`Unknown group name: ${e}`);const n=(0,s.Gn)("search");a.selectGroup(a.groupList[e]),n.innerHTML=a.groupList[e].ids.reduce(((e,t)=>{var a;return`${e}${null===(a=i.getSat(t))||void 0===a?void 0:a.sccNum},`}),"").slice(0,-1),null===(t=l.b.getPlugin(h.P))||void 0===t||t.selectSat(-1);const o=l.b.getUiManager();o.searchManager.doSearch(a.groupList[e].ids.map((e=>{var t;return null===(t=i.getSat(e))||void 0===t?void 0:t.sccNum})).join(",")),settingsManager.isMobileModeEnabled&&o.searchManager.closeSearch(),o.hideSideMenus()}}Ii.PLUGIN_NAME="Sat Constellations";const Ri=new Ii;var Pi=i(1946);const Oi=i.p+"../img/sensor_occupied.png";class Di extends u.c{constructor(){super(Di.name),this.bottomIconElementName="menu-sat-fov",this.bottomIconLabel="Satellite FOV",this.bottomIconImg=Oi,this.dragOptions={isDraggable:!1,minWidth:350},this.helpBody=l.b.html`
    The Satellite Field of View plugin allows you to control the field of view of a satellite.`,this.sideMenuElementName="satellite-fov-menu",this.sideMenuTitle="Satellite Field of View",this.sideMenuElementHtml=l.b.html`
  <div>
    <div class="center">
      <button id="reset-sat-fov-cones-button" class="center-align btn btn-ui waves-effect waves-light menu-selectable" type="button"
      style="margin: -10px 0px 10px 0px;">
        Reset All FOV Cones &#9658;
      </button>
    </div>
  <form id="sat-fov-settings-default-form">
    <div class="row">
      ${Di.genH5Title_("Default Sensor Design")}
      <div class="row"></div>
      <div class="input-field col s12">
          <input id="sat-fov-default-fov-angle" value="3" type="text" data-position="bottom" data-delay="50" data-tooltip="Field of View of the Sensor"
            style="text-align: center;"
          />
          <label for="sat-fov-default-fov-angle" class="active">Field of View (Degrees)</label>
      </div>
      <div class="input-field col s12">
          <input id="sat-fov-default-range" value="Unlimited" type="text" data-position="bottom" data-delay="50" data-tooltip="Maximum Range of the Sensor" disabled
            style="text-align: center;"
          />
          <label for="sat-fov-default-fov-angle" class="active">Range (Kilometers)</label>
      </div>
    </div>
    <div class="row">
      ${Di.genH5Title_("Default Color Settings")}
      <div class="row"></div>
      <div class="input-field col s12">
        <input id="sat-fov-default-red" value="0.2" type="text" data-position="bottom" data-delay="50" data-tooltip="Red Color Value"
          style="text-align: center;"
        />
        <label for="sat-fov-default-red" class="active">Red</label>
      </div>
      <div class="input-field col s12">
        <input id="sat-fov-default-green" value="1.0" type="text" data-position="bottom" data-delay="50" data-tooltip="Green Color Value"
          style="text-align: center;"
        />
        <label for="sat-fov-default-green" class="active">Green</label>
      </div>
      <div class="input-field col s12">
        <input id="sat-fov-default-blue" value="1.0" type="text" data-position="bottom" data-delay="50" data-tooltip="Blue Color Value"
          style="text-align: center;"
        />
        <label for="sat-fov-default-blue" class="active">Blue</label>
      </div>
      <div class="input-field col s12">
        <input id="sat-fov-default-opacity" value="0.15" type="text" data-position="bottom" data-delay="50" data-tooltip="Opacity Value"
          style="text-align: center;"
        />
        <label for="sat-fov-default-opacity" class="active">Opacity</label>
      </div>
    </div>
  </form>
  </div>
  <div class="row">
    ${Di.genH5Title_("Active Sensors")}
    <div class="row"></div>
    <div id="sat-fov-active-cones" class="col s12">
    </div>
  </div>`,this.sideMenuSettingsHtml=l.b.html`
  <form id="sat-fov-settings-form">
    <div class="row">
      <div class="col s12">
        <h3>Sensor Design</h3>
      </div>
      <div class="input-field col s12">
          <input id="sat-fov-fov-angle" value="3" type="text" data-position="bottom" data-delay="50" data-tooltip="Field of View of the Sensor"
            style="text-align: center;"
          />
          <label for="sat-fov-fov-angle" class="active">Field of View (Degrees)</label>
      </div>
      <div class="input-field col s12">
          <input id="sat-fov-range" value="Unlimited" type="text" data-position="bottom" data-delay="50" data-tooltip="Maximum Range of the Sensor" disabled
            style="text-align: center;"
          />
          <label for="sat-fov-fov-angle" class="active">Range (Kilometers)</label>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="col s12">
        <h3>Color Settings</h3>
      </div>
      <div class="input-field col s12">
        <input id="sat-fov-red" value="0.2" type="text" data-position="bottom" data-delay="50" data-tooltip="Red Color Value"
          style="text-align: center;"
        />
        <label for="sat-fov-red" class="active">Red</label>
      </div>
      <div class="input-field col s12">
        <input id="sat-fov-green" value="1.0" type="text" data-position="bottom" data-delay="50" data-tooltip="Green Color Value"
          style="text-align: center;"
        />
        <label for="sat-fov-green" class="active">Green</label>
      </div>
      <div class="input-field col s12">
        <input id="sat-fov-blue" value="1.0" type="text" data-position="bottom" data-delay="50" data-tooltip="Blue Color Value"
          style="text-align: center;"
        />
        <label for="sat-fov-blue" class="active">Blue</label>
      </div>
      <div class="input-field col s12">
        <input id="sat-fov-opacity" value="1.0" type="text" data-position="bottom" data-delay="50" data-tooltip="Opacity Value"
          style="text-align: center;"
        />
        <label for="sat-fov-opacity" class="active">Opacity</label>
      </div>
    </div>
  </form>
  `}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("sat-fov-settings-form").addEventListener("change",this.handleFormChange.bind(this)),(0,s.Gn)("sat-fov-settings-form").addEventListener("submit",this.handleFormChange.bind(this)),(0,s.Gn)("sat-fov-settings-default-form").addEventListener("change",this.handleDefaultFormChange.bind(this)),(0,s.Gn)("sat-fov-settings-default-form").addEventListener("submit",this.handleDefaultFormChange.bind(this))}}),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("reset-sat-fov-cones-button").addEventListener("click",(()=>{l.b.getScene().coneFactory.clear(),l.b.getSoundManager().play(g.p.TOGGLE_OFF),(0,s.Gn)("reset-sat-fov-cones-button").setAttribute("disabled","true")}))}})}addJs(){super.addJs();const e=l.b.getInputManager().keyboard;e.registerKeyEvent({key:"C",callback:()=>{if(e.isShiftPressed){const e=l.b.getPlugin(h.P).getSelectedSat();if(e){const t=l.b.getScene().coneFactory,i=t.checkCacheForMesh_(e);i?(l.b.getSoundManager().play(g.p.TOGGLE_OFF),t.remove(i.id)):(l.b.getSoundManager().play(g.p.TOGGLE_ON),t.generateMesh(e))}}}}),l.b.register({event:o.RL.ConeMeshUpdate,cbName:Di.name,cb:()=>{this.updateListOfFovMeshes()}}),l.b.register({event:o.RL.selectSatData,cbName:Di.name,cb:e=>{this.updateListOfFovMeshes(),(null==e?void 0:e.isSatellite())?this.isSettingsMenuEnabled_=!0:this.isSettingsMenuEnabled_=!1}})}handleFormChange(){const e={fieldOfView:parseFloat((0,s.Gn)("sat-fov-fov-angle").value),color:[parseFloat((0,s.Gn)("sat-fov-red").value),parseFloat((0,s.Gn)("sat-fov-green").value),parseFloat((0,s.Gn)("sat-fov-blue").value),parseFloat((0,s.Gn)("sat-fov-opacity").value)]},t=l.b.getPlugin(h.P).getSelectedSat(),i=l.b.getScene().coneFactory;if(t){const a=i.checkCacheForMesh_(t);a&&a.editSettings(e)}}handleDefaultFormChange(){const e=parseFloat((0,s.Gn)("sat-fov-default-fov-angle").value),t=parseFloat((0,s.Gn)("sat-fov-default-red").value),i=parseFloat((0,s.Gn)("sat-fov-default-green").value),a=parseFloat((0,s.Gn)("sat-fov-default-blue").value),n=parseFloat((0,s.Gn)("sat-fov-default-opacity").value),o=l.b.getUiManager().toast.bind(l.b.getUiManager());if(isNaN(e)||e<=0||e>180)return o("Field of View must be a number between 0 and 180 degrees.","critical"),void((0,s.Gn)("sat-fov-default-fov-angle").value="3");if(isNaN(t)||t<0||t>1)return o("Red color value must be a number between 0 and 1.","critical"),void((0,s.Gn)("sat-fov-default-red").value="0.5");if(isNaN(i)||i<0||i>1)return o("Green color value must be a number between 0 and 1.","critical"),void((0,s.Gn)("sat-fov-default-green").value="0.5");if(isNaN(a)||a<0||a>1)return o("Blue color value must be a number between 0 and 1.","critical"),void((0,s.Gn)("sat-fov-default-blue").value="0.5");if(isNaN(n)||n<0||n>1)return o("Opacity value must be a number between 0 and 1.","critical"),void((0,s.Gn)("sat-fov-default-opacity").value="0.15");const r={fieldOfView:e,color:[t,i,a,n]};l.b.getScene().coneFactory.editSettings(r)}updateListOfFovMeshes(){const e=l.b.getScene().coneFactory.meshes;0===e.length?(0,s.Gn)("reset-sat-fov-cones-button").setAttribute("disabled","true"):(0,s.Gn)("reset-sat-fov-cones-button").removeAttribute("disabled"),(0,s.Gn)("sat-fov-active-cones").innerHTML=e.sort(((e,t)=>e.obj.id-t.obj.id)).map((e=>{const t=l.b.getPlugin(h.P).getSelectedSat();let i="";return i=t&&e.obj.id===t.id?l.b.html`<span style="color: var(--statusDarkStandby);">${e.obj.name}</span>`:l.b.html`<span>${e.obj.name}</span>`,l.b.html`
        <div class="link" style="
            display: flex;
            align-items: center;
        ">
            <div class="active-cone-sensor col s10 m10 l10" data-id="${e.obj.id.toString()}">
              ${i}
            </div>
            <div class="col s2 m2 l2 center-align remove-icon" style="display: flex; align-items: center; height: 100%;">
              <img class="remove-sensor" data-id="${e.obj.id.toString()}" src="${Pi}" style="cursor: pointer;"></img>
            </div>
        </div>
        `})).join("");const t=document.querySelectorAll(".remove-sensor"),i=document.querySelectorAll(".active-cone-sensor");t.forEach((e=>{e.addEventListener("click",(e=>{const t=parseInt(e.target.dataset.id,10);l.b.getScene().coneFactory.removeByObjectId(t),l.b.getSoundManager().play(g.p.TOGGLE_OFF)}))})),i.forEach((e=>{e.addEventListener("click",(e=>{let t=parseInt(e.target.dataset.id);t||(t=parseInt(e.target.parentElement.dataset.id)),t&&l.b.getPlugin(h.P).selectSat(t)}))}))}}var Fi=i(9696);const $i=i.p+"../img/photoManager.png";class Ui extends u.c{constructor(){super(Ui.PLUGIN_NAME),this.discvrPhotos_=[],this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="Satellite Photos",this.bottomIconImg=$i,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=l.b.html`
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
  Note - changes in the image API may cause the wrong satellite to be selected in KeepTrack.`}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("meteosat9-link").addEventListener("click",(()=>{Ui.loadPic(28912,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")})),(0,s.Gn)("meteosat11-link").addEventListener("click",(()=>{Ui.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")})),(0,s.Gn)("himawari8-link").addEventListener("click",(()=>{Ui.himawari8()})),(0,s.Gn)("goes16-link").addEventListener("click",(()=>{Ui.loadPic(41866,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")})),(0,s.Gn)("goes18-link").addEventListener("click",(()=>{Ui.loadPic(51850,"https://cdn.star.nesdis.noaa.gov/GOES18/ABI/FD/GEOCOLOR/latest.jpg")}))}}),l.b.register({event:o.RL.onKeepTrackReady,cbName:this.PLUGIN_NAME,cb:()=>{this.initDISCOVR_()}})}initDISCOVR_(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{if(e.status>=200&&e.status<400){JSON.parse(e.response).forEach((e=>{const t=e.image,i=e.identifier,a=i.slice(0,4),n=i.slice(4,6),s=i.slice(6,8),o=e.centroid_coordinates.lat,l=e.centroid_coordinates.lon;this.discvrPhotos_.push({imageUrl:`https://epic.gsfc.nasa.gov/archive/natural/${a}/${n}/${s}/png/${t}.png`,lat:o,lon:l})}));for(let e=1;e<this.discvrPhotos_.length+1;e++){const t=`<li id="discovr-link${e}" class="link satPhotoRow">DSCOVR Image ${e}</li>`;(0,s.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",t),(0,s.Gn)(`discovr-link${e}`).addEventListener("click",(()=>{Ui.loadPic(-1,this.discvrPhotos_[e-1].imageUrl),l.b.getMainCamera().camSnap((0,Fi.Lx)(this.discvrPhotos_[e-1].lat),(0,Fi.Zs)(this.discvrPhotos_[e-1].lon,l.b.getTimeManager().simulationTimeObj)),l.b.getMainCamera().changeZoom(.7)}))}}else{f.x.log("https://epic.gsfc.nasa.gov/ request failed!");const e='<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>';(0,s.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",e)}},e.onerror=function(){f.x.log("https://epic.gsfc.nasa.gov/ request failed!"),(0,s.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",'<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>')},e.send()}static loadPic(e,t){var i;l.b.getUiManager().searchManager.hideResults(),null===(i=l.b.getPlugin(h.P))||void 0===i||i.selectSat(l.b.getCatalogManager().sccNum2Id(e)),l.b.getMainCamera().changeZoom(.7),Ui.colorbox(t)}static himawari8(){var e;null===(e=l.b.getPlugin(h.P))||void 0===e||e.selectSat(l.b.getCatalogManager().sccNum2Id(40267)),l.b.getMainCamera().changeZoom(.7);let t=l.b.getTimeManager().simulationTimeObj;t.getTime()<Date.now()?t=new Date(t.getTime()-18e5):(l.b.getUiManager().toast("Can't load pictures from the future. Loading most recent photos.","caution"),t=new Date(Date.now()-18e5));const i=t.getUTCFullYear(),a=(t.getUTCMonth()+1).toString().padStart(2,"0"),n=t.getUTCDate().toString().padStart(2,"0"),s=t.getUTCHours().toString().padStart(2,"0"),o=(10*Math.floor(t.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3),(0,gi.Us)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${i}/${a}/${n}/${s}${o}00_0_0.png`,{image:!0})}}Ui.PLUGIN_NAME="Satellite Photos",Ui.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3),(0,gi.Us)(e,{image:!0})};const Bi=new Ui,zi=i.p+"../img/video.png";class Hi{constructor(e,t,i,a){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=i,this.onError_=a}static handleError(e){e.message.includes("Permission denied")?f.x.warn('Permission denied! Did you click "Share"?'):f.x.warn(`Error:${e}`)}getStream(e){return t=this,i=void 0,n=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch((e=>(Hi.handleError(e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch((e=>(Hi.handleError(e),null))):(f.x.warn("Compatibility Error with Recording"),this.onError_(),!1):(f.x.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((a=void 0)||(a=Promise))((function(e,s){function o(e){try{r(n.next(e))}catch(e){s(e)}}function l(e){try{r(n.throw(e))}catch(e){s(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(o,l)}r((n=n.apply(t,i||[])).next())}));var t,i,a,n}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(f.x.debug("Recorder stopped."),this.stream_.getTracks().forEach((e=>e.stop())),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,i=new Blob(this.recordedBlobs,{type:this.supportedType}),a=window.URL.createObjectURL(i),n=document.createElement("a");n.style.display="none",n.href=a,n.download=t,l.b.containerRoot.appendChild(n),n.click(),setTimeout((()=>{l.b.containerRoot.removeChild(n),window.URL.revokeObjectURL(a)}),100)}start(){this.getStream().then((e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;const t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(const e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&f.x.debug("No supported type found for MediaRecorder");const i={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||Hi.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,i)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}f.x.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${i}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),f.x.debug(`Created MediaRecorder ${this.mediaRecorder_}`)})).catch((()=>{}))}}Hi.BIT_RATE_30_MBPS=3e7,Hi.BIT_RATE_20_MBPS=2e7,Hi.BIT_RATE_10_MBPS=1e7,Hi.BIT_RATE_5_MBPS=5e6,Hi.BIT_RATE_2_MBPS=2e6,Hi.BIT_RATE_1_MBPS=1e6;class ji extends u.c{constructor(){super("Screen Recorder"),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return f.x.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){f.x.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=zi,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerOnReady,cbName:this.PLUGIN_NAME,cb:()=>{try{this.streamManagerInstance=new Hi(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save(ji.FILE_NAME),this.setBottomIconToUnselected()}}ji.FILE_NAME="keeptrack.webm";const Vi=new ji,Ki=i.p+"../img/camera.png";class Xi extends u.c{constructor(){super("Screenshot"),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=Ki,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.rmbL1ElementName="save-rmb",this.rmbL1Html=l.b.html`
    <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Save Image &#x27A4;</a></li>
  `,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.isRmbOnSat=!0,this.rmbL2ElementName="save-rmb-menu",this.rmbL2Html=l.b.html`
    <ul class='dropdown-contents'>
      <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
      <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
      <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
    </ul>
  `,this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),l.b.register({event:o.RL.altCanvasResize,cbName:this.PLUGIN_NAME,cb:()=>this.queuedScreenshot_}),l.b.register({event:o.RL.endOfDraw,cbName:this.PLUGIN_NAME,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){const e=document.createElement("a");e.download="keeptrack.png";const t=(new Date).getUTCFullYear(),i=settingsManager.copyrightOveride?"":`©${t} KEEPTRACK.SPACE`;e.href=Xi.watermarkedDataUrl(i),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=l.b.getRenderer().domElement,i=document.createElement("canvas"),a=i.getContext("2d"),n=i.width=t.width,s=i.height=t.height;a.drawImage(t,0,0),a.font="24px nasalization";let o=a.measureText(e).width;a.globalAlpha=1,a.fillStyle="white",a.fillText(e,n-o-30,s-30);const{classificationstr:r,classificationColor:c}=Xi.calculateClassificationText();""!==r&&(a.font="24px nasalization",a.globalAlpha=1,a.fillStyle=c,o=a.measureText(r).width,a.fillText(r,n/2-o,s-20),a.fillText(r,n/2-o,34)),l.b.containerRoot.appendChild(i);const d=i.toDataURL();return i.parentNode.removeChild(i),d}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:Lt.getColors(settingsManager.classificationStr).backgroundColor}}}const Yi=new Xi;var Wi=i(4118),Ji=i(1527),qi=i(658),Zi=i(3443);const Qi=i.p+"../img/radar.png";var ea=i(3862),ta={};ta.styleTagTransform=Ft(),ta.setAttributes=Rt(),ta.insert=Gt().bind(null,"head"),ta.domAPI=Nt(),ta.insertStyleElement=Ot(),Tt()(ea.Z,ta),ea.Z&&ea.Z.locals&&ea.Z.locals;class ia extends u.c{constructor(){super(ia.PLUGIN_NAME),this.dependencies=[Kt.s.PLUGIN_NAME],this.bottomIconCallback=()=>{var e;this.isMenuButtonActive&&((null===(e=l.b.getPlugin(gt))||void 0===e?void 0:e.isMenuButtonActive)?(0,qi.l)("sensor-top-link").forEach((e=>{e.style.display="none"})):(0,qi.l)("sensor-top-link").forEach((e=>{e.style.gridTemplateColumns="repeat(2,1fr)",e.style.display=""})))},this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.bottomIconElementName="sensor-list-icon",this.bottomIconLabel="Sensors",this.bottomIconImg=Qi,this.sideMenuElementName="sensor-list-menu",this.sideMenuElementHtml=l.b.html`
    <div id="sensor-list-menu" class="side-menu-parent start-hidden text-select">
        <div id="sensor-list-content" class="side-menu">
        <div class="row">
          <ul id="reset-sensor-text" class="sensor-reset-menu">
            <button id="reset-sensor-button" class="center-align btn btn-ui waves-effect waves-light menu-selectable" type="button">Reset Sensor &#9658;</button>
          </ul>
          <ul id="list-of-sensors">`+ia.ssnSensors_()+ia.mwSensors_()+ia.mdaSensors_()+ia.leoLabsSensors_()+ia.esocSensors_()+ia.russianSensors_()+ia.chineseSensors_()+ia.otherSensors_()+l.b.html`
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
  If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,s.Gn)("nav-mobile"))||void 0===e||e.insertAdjacentHTML("beforeend",l.b.html`
          <div id="sensor-selected-container">
            <div id="sensor-selected" class="waves-effect waves-light">

            </div>
          </div>
          `)}}),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,s.Gn)("sensor-selected-container"))||void 0===e||e.addEventListener("click",(()=>{var e;l.b.runEvent(o.RL.bottomMenuClick,this.bottomIconElementName),null===(e=l.b.getSoundManager())||void 0===e||e.play(g.p.CLICK)})),(0,s.Gn)("sensor-list-content").addEventListener("click",(e=>{var t;let i=e.target;if(!(null==i?void 0:i.classList.contains("menu-selectable"))&&(i=null==i?void 0:i.closest(".menu-selectable"),!(null==i?void 0:i.classList.contains("menu-selectable"))))return;if("reset-sensor-button"===i.id)return l.b.getSensorManager().resetSensorSelected(),void l.b.getSoundManager().play(g.p.MENU_BUTTON);null===(t=l.b.getSoundManager())||void 0===t||t.play(g.p.CLICK);const a=i.dataset.sensor;this.sensorListContentClick(a)}))}}),l.b.register({event:o.RL.selectSatData,cbName:"sensor",cb:e=>{null!=e&&(null===l.b.getPlugin(Ci.s)||this.isSensorLinksAdded||((0,s.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
                  <div id="sensors-in-fov-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                        data-tooltip="Visualize Sensor Coverage">Show All Sensors with FOV...</div>
                `),(0,s.Gn)("sensors-in-fov-link").addEventListener("click",(()=>{l.b.getSoundManager().play(g.p.CLICK);const e=l.b.getPlugin(h.P);if(!e)return;const t=e.getSelectedSat();t.isMissile()||Object.keys(Ji.T).forEach((e=>{const i=Ji.T[e];i.isSatInFov(t,l.b.getTimeManager().simulationTimeObj)&&l.b.getLineManager().create(Zt.jv.MULTI_SENSORS_TO_SAT,[t.id,l.b.getCatalogManager().getSensorFromSensorName(i.name)],"g")}))})),this.isSensorLinksAdded=!0))}})}addJs(){super.addJs(),l.b.register({event:o.RL.sensorDotSelected,cbName:this.PLUGIN_NAME,cb:e=>{if(settingsManager.isMobileModeEnabled)return;if(!e.isSensor())return;const t=e,i=l.b.getSensorManager();if(i.setSensor(null,t.sensorId),0===i.currentSensors.length)throw new Error("No sensors found");const a=l.b.getTimeManager();l.b.getMainCamera().lookAtLatLon(i.currentSensors[0].lat,i.currentSensors[0].lon,i.currentSensors[0].zoom,a.selectedDate)}}),l.b.register({event:o.RL.onCruncherReady,cbName:this.PLUGIN_NAME,cb:()=>{!settingsManager.disableUI&&settingsManager.isLoadLastSensor&&ia.reloadLastSensor_()}}),l.b.getInputManager().keyboard.registerKeyUpEvent({key:"Home",callback:()=>{if(l.b.getSensorManager().currentSensors.length>0&&l.b.getMainCamera().cameraType===V.i.DEFAULT){const e=l.b.getSensorManager().currentSensors[0];l.b.getMainCamera().lookAtLatLon(e.lat,e.lon,e.zoom,l.b.getTimeManager().selectedDate),l.b.getSoundManager().play(g.p.WHOOSH)}}})}sensorListContentClick(e){if(!this.isMenuButtonActive)return;const t=l.b.getSensorManager();if(void 0!==e){switch(t.clearSecondarySensors(),e){case"ssnAll":t.setSensor("SSN");break;case"mwAll":t.setSensor("NATO-MW");break;case"mdAll":t.setSensor("MD-ALL");break;case"esocAll":t.setSensor("ESOC-ALL");break;case"llAll":t.setSensor("LEO-LABS");break;case"rusAll":t.setSensor("RUS-ALL");break;case"prcAll":t.setSensor("PRC-ALL");break;default:t.setSensor(Ji.T[`${e}`])}if(-1===l.b.getPlugin(h.P).selectedSat)try{l.b.getMainCamera().lookAtLatLon(t.currentSensors[0].lat,t.currentSensors[0].lon,t.currentSensors[0].zoom,l.b.getTimeManager().selectedDate)}catch(e){f.x.warn(`Error in sensorListContentClick: ${e}`)}settingsManager.currentColorScheme==l.b.getColorSchemeManager().default&&dt.j.change("default")}else f.x.debug("The menu item was clicked but the menu was not defined.")}static createLiForSensor_(e){return l.b.html`
      <li class="menu-selectable" data-sensor="${e.objName}">
        <span>${e.uiName}</span>
        <span>${e.system}</span>
        <span class="badge dark-blue-badge" data-badge-caption="${e.operator}"></span>
      </li>
    `}static ssnSensors_(){return this.createSection_({header:"Space Surveillance Network Sensors",sensors:l.b.getSensorManager().sensorListSsn,topLinks:[{name:"All SSN Sensors",dataSensor:"ssnAll",badge:"COALITION"}]})}static mwSensors_(){return this.createSection_({header:"US Missile Warning Sensors",sensors:l.b.getSensorManager().sensorListMw,topLinks:[{name:"All MW Sensors",dataSensor:"mwAll",badge:"NORAD"}]})}static mdaSensors_(){return this.createSection_({header:"US Missile Defense Agency Sensors",sensors:l.b.getSensorManager().sensorListMda,topLinks:[{name:"All MDA Sensors",dataSensor:"mdAll",badge:"MDA"}]})}static createSection_(e){return l.b.html`
              ${this.genH5Title_(e.header)}
              ${e.topLinks.map((e=>l.b.html`<li class="menu-selectable sensor-top-link" data-sensor="${e.dataSensor}">
                <span>${e.name}</span>
                <span class="badge dark-blue-badge" data-badge-caption="${e.badge}"></span>
              </li>`)).join("")}
              ${e.sensors.map((e=>ia.createLiForSensor_(e))).join("")}
              `}static esocSensors_(){return this.createSection_({header:"ESA Space Operations Center Sensors",sensors:l.b.getSensorManager().sensorListEsoc,topLinks:[{name:"All ESOC Sensors",dataSensor:"esocAll",badge:"ESA"}]})}static leoLabsSensors_(){return this.createSection_({header:"Leo Labs Sensors",sensors:l.b.getSensorManager().sensorListLeoLabs,topLinks:[{name:"All Leo Labs Sensors",dataSensor:"llAll",badge:"LEOLABS"}]})}static otherSensors_(){return this.createSection_({header:"Other Sensors",sensors:l.b.getSensorManager().sensorListOther,topLinks:[]})}static russianSensors_(){return this.createSection_({header:"Russian Sensors",sensors:l.b.getSensorManager().sensorListRus,topLinks:[{name:"All Russian Sensors",dataSensor:"rusAll",badge:"RUS"}]})}static chineseSensors_(){return this.createSection_({header:"Chinese Sensors",sensors:l.b.getSensorManager().sensorListPrc,topLinks:[{name:"All Chinese Sensors",dataSensor:"prcAll",badge:"PRC"}]})}static reloadLastSensor_(){const e=Zi.p.getInstance().getItem(Zi.Q.CURRENT_SENSOR);if(!e)return;const t=JSON.parse(e);if(null!==t)try{const e=l.b.getSensorManager();void 0===t[0]||null==t[0]?(e.setSensor(null,t[1]),dt.j.change("default")):void 0===t[0].objName?(e.setSensor(t[0],t[1]),dt.j.change("default")):(e.setSensor(Ji.T[t[0].objName],t[1]),dt.j.change("default"))}catch(e){Zi.p.getInstance().removeItem(Zi.Q.CURRENT_SENSOR)}}}ia.PLUGIN_NAME="Sensor List";var aa=i(6886);const na=e=>{const t=new CustomEvent("customSubmit",{cancelable:!0});e.dispatchEvent(t)};var sa=i(6616);class oa{static updateSensorPosition(e){var t;const i=l.b.getTimeManager(),a=l.b.getCatalogManager(),n=l.b.getSensorManager(),{lon:s,lat:o,alt:r,minaz:c,maxaz:d,minel:u,maxel:g,minrange:m,maxrange:p}=oa.updateSettingsManager(e);n.whichRadar="CUSTOM",oa.updateCustomSensorUi_();const b={lat:o,lon:s,alt:r,minAz:c,maxAz:d,minEl:u,maxEl:g,minRng:m,maxRng:p};a.satCruncher.postMessage({typ:yt.Bi.SENSOR,sensor:b}),sa.w.updateSensorUiStyling([b]),null===(t=l.b.getPlugin(h.P))||void 0===t||t.selectSat(-1);const v=l.b.getMainCamera();p>6e3?v.changeZoom(_.$R.GEO):v.changeZoom(_.$R.LEO),v.camSnap((0,Fi.Lx)(o),(0,Fi.Zs)(s,i.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(oa.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,s.Gn)("cs-lat"),t=(0,s.Gn)("cs-lon"),i=(0,s.Gn)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),i.value=settingsManager.geolocation.alt.toString(),i.dispatchEvent(new Event("change")),(0,s.Gn)("cs-telescope").checked=!0,(0,s.Gn)("cs-minaz").disabled=!0,(0,s.Gn)("cs-maxaz").disabled=!0,(0,s.Gn)("cs-minel").disabled=!0,(0,s.Gn)("cs-maxel").disabled=!0,(0,s.Gn)("cs-minrange").disabled=!0,(0,s.Gn)("cs-maxrange").disabled=!0,(0,s.Gn)("cs-minaz-div").style.display="none",(0,s.Gn)("cs-maxaz-div").style.display="none",(0,s.Gn)("cs-minel-div").style.display="none",(0,s.Gn)("cs-maxel-div").style.display="none",(0,s.Gn)("cs-minrange-div").style.display="none",(0,s.Gn)("cs-maxrange-div").style.display="none",(0,s.Gn)("cs-minaz").value="0",(0,s.Gn)("cs-maxaz").value="360",(0,s.Gn)("cs-minel").value="10",(0,s.Gn)("cs-maxel").value="90",(0,s.Gn)("cs-minrange").value="100",(0,s.Gn)("cs-maxrange").value="50000",(0,s.Gn)("sensor-type").innerHTML="Telescope",(0,s.Gn)("sensor-info-title").innerHTML="Custom Sensor",(0,s.Gn)("sensor-country").innerHTML="Custom Sensor"}catch(e){f.x.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const la=i.p+"../img/custom.png";class ra extends u.c{constructor(){super(ra.name),this.bottomIconCallback=()=>{if(this.isMenuButtonActive){const e=l.b.getSensorManager();e.isSensorSelected()?((0,s.Gn)("cs-replace").style.display="",(0,s.Gn)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,s.Gn)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,s.Gn)("cs-hei").value=e.currentSensors[0].alt.toString()):(0,s.Gn)("cs-replace").style.display="none"}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=la,this.sideMenuElementName="custom-sensor-menu",this.sideMenuTitle="Custom Sensor",this.sideMenuElementHtml=l.b.html`
    <div class="row">
        <form id="customSensor">
        <div class="input-field col s12" data-position="top" data-delay="50" data-tooltip="Name of the Sensor">
            <input id="cs-uiName" type="text" value="Custom Sensor" />
            <label for="cs-uiName" class="active">Sensor Name</label>
        </div>
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
            <button id="cs-replace" class="btn btn-ui waves-effect waves-light" name="action">Replace Sensor &#9658;</button>
            <br />
            <br />
            <button id="cs-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Add Custom Sensor &#9658;</button>
            <br />
            <br />
            <button id="cs-clear" class="btn btn-ui waves-effect waves-light" name="action">Clear Custom Sensors &#9658;</button>
            <br />
            <br />
            <button id="cs-geolocation" class="btn btn-ui waves-effect waves-light" name="search">Use Geolocation &#9658;</button>
        </div>
        </form>
    </div>`,this.sideMenuSettingsHtml=l.b.html`
    <div class="row" style="margin: 0 10px;">
      <div id="custom-sensors-sensor-list">
      </div>
    </div>`,this.sideMenuSettingsOptions={width:450,leftOffset:null,zIndex:3},this.rmbL1ElementName="create-rmb",this.rmbL1Html=l.b.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Create &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbMenuOrder=10,this.rmbL2ElementName="create-rmb-menu",this.rmbL2Html=l.b.html`
  <ul class='dropdown-contents'>
    <li id="create-observer-rmb"><a href="#">Create Observer Here</a></li>
    <li id="create-sensor-rmb"><a href="#">Create Sensor Here</a></li>
  </ul>`,this.rmbCallback=e=>{const t=l.b.getSensorManager(),i=l.b.getColorSchemeManager(),a=l.b.getUiManager(),n=l.b.getCatalogManager(),o=l.b.getInputManager().mouse;switch(e){case"create-observer-rmb":(0,x.$k)((0,s.Gn)("custom-sensor-menu"),1e3),(0,s.Gn)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,s.Gn)("cs-telescope").checked||(0,s.Gn)("cs-telescope").click(),(0,s.Gn)("cs-uiName").value="Observer",(0,s.Gn)("cs-lat").value=o.latLon.lat.toString(),(0,s.Gn)("cs-lon").value=o.latLon.lon.toString(),(0,s.Gn)("cs-hei").value="0",(0,s.Gn)("cs-type").value="Observer",na((0,s.Gn)("customSensor")),n.satCruncher.postMessage({isSunlightView:!0,typ:yt.Bi.SUNLIGHT_VIEW}),dt.j.change("sunlight"),a.colorSchemeChangeAlert(i.sunlight),(0,zt.J)({cruncher:n.satCruncher,cb:()=>{i.setColorScheme(i.sunlight,!0)},validationFunc:e=>e.satInSun});break;case"create-sensor-rmb":(0,x.$k)((0,s.Gn)("custom-sensor-menu"),1e3),(0,s.Gn)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,s.Gn)("cs-telescope").checked&&(0,s.Gn)("cs-telescope").click(),(0,s.Gn)("cs-uiName").value="Custom Sensor",(0,s.Gn)("cs-lat").value=o.latLon.lat.toString(),(0,s.Gn)("cs-lon").value=o.latLon.lon.toString(),(0,s.Gn)("cs-hei").value="0",(0,s.Gn)("cs-type").value="Phased Array Radar",(0,s.Gn)("cs-minaz").value="0",(0,s.Gn)("cs-maxaz").value="360",(0,s.Gn)("cs-minel").value="10",(0,s.Gn)("cs-maxel").value="90",(0,s.Gn)("cs-minrange").value="0",(0,s.Gn)("cs-maxrange").value="5556",na((0,s.Gn)("customSensor")),dt.j.change("default"),i.setColorScheme(i.default,!0),a.colorSchemeChangeAlert(i.currentColorScheme),n.satCruncher.postMessage({isSunlightView:!1,typ:yt.Bi.SUNLIGHT_VIEW});break;case"colors-confidence-rmb":case"colors-rcs-rmb":case"colors-density-rmb":case"colors-starlink-rmb":case"colors-sunlight-rmb":case"colors-country-rmb":case"colors-velocity-rmb":case"colors-ageOfElset-rmb":case"colors-default-rmb":break;default:f.x.info(`Unknown RMB target: ${e}`)}},this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=l.b.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{ra.httpsCheck_(),ra.addCustomSensorFormSubmitListener(),ra.addTelescopeClickListener_(),ra.addCustomSensorBtnCLickListener_(),ra.addClearCustomSensorListener_()}})}static httpsCheck_(){"https:"!==location.protocol?(0,s.UT)("cs-geolocation"):ra.addUseGeolocationListener_()}static addCustomSensorFormSubmitListener(){(0,s.Gn)("customSensor").addEventListener("submit",(e=>{e.preventDefault()}))}static addUseGeolocationListener_(){var e;(0,s.Gn)("cs-geolocation").addEventListener("click",oa.useCurrentGeolocationAsSensor),null===(e=l.b.getSoundManager())||void 0===e||e.play(g.p.CLICK)}static addClearCustomSensorListener_(){(0,s.Gn)("cs-clear").addEventListener("click",(()=>{var e;l.b.getSensorManager().clearSecondarySensors(),null===(e=l.b.getSoundManager())||void 0===e||e.play(g.p.CLICK),ra.updateCustomSensorListDom()}))}static addCustomSensorBtnCLickListener_(){(0,s.Gn)("cs-submit").addEventListener("click",(()=>{var e;ra.processCustomSensorSubmit_(),null===(e=l.b.getSoundManager())||void 0===e||e.play(g.p.CLICK)})),(0,s.Gn)("cs-replace").addEventListener("click",(()=>{var e;ra.processCustomSensorSubmit_(!0),null===(e=l.b.getSoundManager())||void 0===e||e.play(g.p.CLICK)}))}static processCustomSensorSubmit_(e=!1){var t,i,a,n,o;null===(t=(0,s.Gn)("menu-sensor-info"))||void 0===t||t.classList.remove("bmenu-item-disabled"),null===(i=(0,s.Gn)("menu-fov-bubble"))||void 0===i||i.classList.remove("bmenu-item-disabled"),null===(a=(0,s.Gn)("menu-surveillance"))||void 0===a||a.classList.remove("bmenu-item-disabled"),null===(n=(0,s.Gn)("menu-planetarium"))||void 0===n||n.classList.remove("bmenu-item-disabled"),null===(o=(0,s.Gn)("menu-astronomy"))||void 0===o||o.classList.remove("bmenu-item-disabled"),(0,s.Gn)("sensor-type").value=(0,s.Gn)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,s.Gn)("sensor-info-title").innerHTML="Custom Sensor",(0,s.Gn)("sensor-country").innerHTML="Custom Sensor";const r=(0,s.Gn)("cs-uiName").value,c=ra.str2Deg((0,s.Gn)("cs-lon").value),d=ra.str2Deg((0,s.Gn)("cs-lat").value),u=(0,s.Gn)("cs-hei").value,h=(0,s.Gn)("cs-type").value,g=(0,s.Gn)("cs-minaz").value,m=(0,s.Gn)("cs-maxaz").value,p=(0,s.Gn)("cs-minel").value,b=(0,s.Gn)("cs-maxel").value,v=(0,s.Gn)("cs-minrange").value,S=(0,s.Gn)("cs-maxrange").value;let M=_.ge.OBSERVER;switch(h){case"Observer":M=_.ge.OBSERVER;break;case"Optical":M=_.ge.OPTICAL;break;case"Mechanical":M=_.ge.MECHANICAL;break;case"Phased Array Radar":M=_.ge.PHASED_ARRAY_RADAR;break;default:f.x.info(`Unknown sensor type: ${h}`),M=_.ge.OBSERVER}const y=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);l.b.getSensorManager().addSecondarySensor(new _.hs({id:null,lat:d,lon:c,alt:ra.str2Km(u),minAz:ra.str2Deg(g),maxAz:ra.str2Deg(m),minEl:ra.str2Deg(p),maxEl:ra.str2Deg(b),minRng:ra.str2Km(v),maxRng:ra.str2Km(S),type:M,name:"Custom Sensor",uiName:r,system:"Custom Sensor",country:"Custom Sensor",objName:`Custom Sensor-${y}`,operator:"Custom Sensor",zoom:ra.str2Km(S)>6e3?_.$R.GEO:_.$R.LEO,volume:!1}),e),ra.updateCustomSensorListDom()}static updateCustomSensorListDom(){var e;const t=((null===(e=l.b.getSensorManager().currentSensors[0])||void 0===e?void 0:e.objName.startsWith("Custom Sensor"))?[l.b.getSensorManager().currentSensors[0]]:[]).concat(l.b.getSensorManager().secondarySensors);(0,s.Gn)("custom-sensors-sensor-list").innerHTML=t.map((e=>`\n      <div class="row" style="height: 100%; display: flex; align-items: center; margin: 20px 0px;">\n        <div class="col s10 m10 l10">\n          <div><strong>Sensor Name:</strong> ${e.uiName}</div>\n          <div><strong>Latitude:</strong> ${e.lat.toFixed(0)}°</div>\n          <div><strong>Longitude:</strong> ${e.lon.toFixed(0)}°</div>\n          <div><strong>Elevation:</strong> ${e.alt.toFixed(0)} km</div>\n          <div><strong>Azimuth:</strong> ${e.minAz.toFixed(0)}° - ${e.maxAz.toFixed(0)}°</div>\n          <div><strong>Elevation:</strong> ${e.minEl.toFixed(0)}° - ${e.maxEl.toFixed(0)}°</div>\n          <div><strong>Range:</strong> ${e.minRng.toFixed(0)} km - ${e.maxRng.toFixed(0)} km</div>\n        </div>\n        <div class="col s2 m2 l2 center-align remove-icon" style="display: flex; align-items: center; height: 100%;">\n          <img class="remove-sensor" data-id="${e.objName}" src="${Pi}" style="cursor: pointer;"></img>\n        </div>\n      </div>\n      <div class="divider"></div>\n      `)).join(""),document.querySelectorAll(".remove-sensor").forEach((e=>{e.addEventListener("click",(e=>{var t;e.preventDefault(),null===(t=l.b.getSoundManager())||void 0===t||t.play(g.p.CLICK);const i=e.target.dataset.id,a=l.b.getSensorManager().getSensorByObjName(i);l.b.getSensorManager().removeSensor(a),ra.updateCustomSensorListDom()}))}))}static addTelescopeClickListener_(){(0,s.Gn)("cs-telescope").addEventListener("click",(()=>{if((0,s.Gn)("cs-telescope").checked)(0,s.Gn)("cs-minaz-div").style.display="none",(0,s.Gn)("cs-maxaz-div").style.display="none",(0,s.Gn)("cs-minel-div").style.display="none",(0,s.Gn)("cs-maxel-div").style.display="none",(0,s.Gn)("cs-minrange-div").style.display="none",(0,s.Gn)("cs-maxrange-div").style.display="none",(0,s.Gn)("cs-minaz").value="0",(0,s.Gn)("cs-maxaz").value="360",(0,s.Gn)("cs-minel").value="10",(0,s.Gn)("cs-maxel").value="90",(0,s.Gn)("cs-minrange").value="100",(0,s.Gn)("cs-maxrange").value="1000000";else{(0,s.Gn)("cs-minaz-div").style.display="block",(0,s.Gn)("cs-maxaz-div").style.display="block",(0,s.Gn)("cs-minel-div").style.display="block",(0,s.Gn)("cs-maxel-div").style.display="block",(0,s.Gn)("cs-minrange-div").style.display="block",(0,s.Gn)("cs-maxrange-div").style.display="block";const e=l.b.getSensorManager();e.isSensorSelected()&&((0,s.Gn)("cs-minaz").value=e.currentSensors[0].minAz.toString(),(0,s.Gn)("cs-maxaz").value=e.currentSensors[0].maxAz.toString(),(0,s.Gn)("cs-minel").value=e.currentSensors[0].minEl.toString(),(0,s.Gn)("cs-maxel").value=e.currentSensors[0].maxEl.toString(),(0,s.Gn)("cs-minrange").value=e.currentSensors[0].minRng.toString(),(0,s.Gn)("cs-maxrange").value=e.currentSensors[0].maxRng.toString())}}))}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}var ca=i(5058);const da=i.p+"../img/lookangles.png";class ua extends u.c{constructor(){super(ua.name),this.dependencies=[h.P.PLUGIN_NAME],this.isRiseSetOnly_=!0,this.angleCalculationInterval_=30,this.lengthOfLookAngles_=2,this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconElementName="look-angles-icon",this.bottomIconLabel="Look Angles",this.bottomIconImg=da,this.bottomIconCallback=()=>{this.refreshSideMenuData_()},this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:400,maxWidth:600},this.helpTitle="Look Angles Menu",this.helpBody=l.b.html`
    The Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a sensor and a satellite.
    A satellite and sensor must first be selected before the menu can be used.
    <br><br>
    The toggle only rise and set times will only calculate the rise and set times of the satellite.
    This is useful for quickly determining when a satellite will be visible to a sensor.
    <br><br>
    The search range can be modified by changing the length and interval options.`,this.sideMenuElementName="look-angles-menu",this.sideMenuTitle="Sensor Look Angles",this.sideMenuElementHtml=l.b.html`
    <div class="row"></div>
    <div class="row">
      <table id="looks" class="center-align striped-light centered"></table>
    </div>`,this.sideMenuSettingsHtml=l.b.html`
    <div class="switch row">
        <label>
            <input id="settings-riseset" type="checkbox" checked="true" />
            <span class="lever"></span>
            Show Only Rise and Set Times
        </label>
    </div>
    <div class="row">
      <div class="input-field col s12">
          <input id="look-angles-length" value="2" type="text" data-position="bottom" data-delay="50" data-tooltip="How Many Days of Look Angles Should be Calculated"
            style="text-align: center;"
          />
          <label for="look-anglesLength" class="active">Calculation Length (Days)</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
          <input id="look-angles-interval" value="30" type="text" data-position="bottom" data-delay="50" data-tooltip="Seconds Between Each Line of Look Angles"
            style="text-align: center;"
          />
          <label for="look-anglesInterval" class="active">Interval (Seconds)</label>
      </div>
    </div>`,this.downloadIconCb=()=>{var e,t;const i=l.b.getSensorManager().getSensor(),a=this.lastlooksArray_.map((e=>({Time:(0,si.v)(e.time,"isoDateTime",!1),Type:ua.tearrTypeToString_(e.type),Azimuth:e.az.toFixed(1),Elevation:e.el.toFixed(1),Range:e.rng.toFixed(0),Sensor:i.system?`${i.system} (${i.name})`:i.name})));(0,at.Eb)(a,`${null!==(t=null!==(e=i.shortName)&&void 0!==e?e:i.objName)&&void 0!==t?t:"unk"}-${this.selectSatManager_.getSelectedSat().sccNum6}-look-angles`)},this.sideMenuSettingsOptions={width:300,zIndex:3},this.refreshSideMenuData_=()=>{this.isMenuButtonActive&&(0,v.QP)((()=>{const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);e.isSatellite()&&this.getlookangles_(e)}))},this.selectSatManager_=l.b.getPlugin(h.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("look-angles-length").addEventListener("change",(()=>{this.lengthOfLookAngles_=parseFloat((0,s.Gn)("look-angles-length").value),this.refreshSideMenuData_()})),(0,s.Gn)("look-angles-interval").addEventListener("change",(()=>{this.angleCalculationInterval_=parseInt((0,s.Gn)("look-angles-interval").value),this.refreshSideMenuData_()})),(0,s.Gn)("settings-riseset").addEventListener("change",this.settingsRisesetChange_.bind(this));const e=this.selectSatManager_.getSelectedSat();this.checkIfCanBeEnabled_(e)}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}}),l.b.register({event:o.RL.resetSensor,cbName:this.PLUGIN_NAME,cb:()=>{this.checkIfCanBeEnabled_(null)}})}addJs(){super.addJs(),l.b.register({event:o.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData_()}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&l.b.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.getlookangles_(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}getlookangles_(e,t){const i=l.b.getTimeManager();if(!t){const e=l.b.getSensorManager();if(!e.isSensorSelected())return console.debug("satellite.getlookangles requires a sensor to be set!"),[];t=e.currentSensors}const a=this.isRiseSetOnly_?1:this.angleCalculationInterval_,n=[];let s=0,o=!1;for(let l=0;l<24*this.lengthOfLookAngles_*60*60;l+=a){s=1e3*l;const a=i.getOffsetTimeObj(s),r=ca.J.getTearData(a,e.satrec,t,this.isRiseSetOnly_,o);if(""!==r.time)switch(r.type){case ca.c.RISE:case ca.c.SET:o=!1,n.push(r);break;case ca.c.MAX_EL:o=!0,n.push(r);break;case ca.c.RISE_AND_MAX_EL:o=!0,n.push(Object.assign(Object.assign({},r),{type:ca.c.RISE})),n.push(Object.assign(Object.assign({},r),{type:ca.c.MAX_EL}));break;case ca.c.MAX_EL_AND_SET:o=!1,n.push(Object.assign(Object.assign({},r),{type:ca.c.MAX_EL})),n.push(Object.assign(Object.assign({},r),{type:ca.c.SET}));break;default:n.push(r)}if(n.length>=1500)break}return n.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),this.lastlooksArray_=n,ua.populateSideMenuTable_(n,i),n}static populateSideMenuTable_(e,t){const i=(0,s.Gn)("looks");i.innerHTML="";const a=i.insertRow(),n=a.insertCell();n.appendChild(document.createTextNode("Time")),n.setAttribute("style","text-decoration: underline");let o=null;e.length>0&&void 0!==e[0].type&&(o=a.insertCell(),o.appendChild(document.createTextNode("Type")),o.setAttribute("style","text-decoration: underline"));const l=a.insertCell();l.appendChild(document.createTextNode("El")),l.setAttribute("style","text-decoration: underline");const r=a.insertCell();r.appendChild(document.createTextNode("Az")),r.setAttribute("style","text-decoration: underline");const c=a.insertCell();c.appendChild(document.createTextNode("Rng")),c.setAttribute("style","text-decoration: underline");for(const a of e)ua.populateSideMenuRow_(i,n,a,t,l,r,c,o)}static populateSideMenuRow_(e,t,i,a,n,s,r,c){if(e.rows.length>0){const n=e.insertRow();n.setAttribute("class","link"),(t=n.insertCell()).appendChild(document.createTextNode((0,si.v)(i.time,"isoDateTime",!1))),t.addEventListener("click",(()=>{a.changeStaticOffset(new Date(`${(0,si.v)(i.time,"isoDateTime",!1)}z`).getTime()-a.realTime),a.calculateSimulationTime(),l.b.runEvent(o.RL.updateDateTime,new Date(a.dynamicOffsetEpoch+a.staticOffset))})),c&&(c=n.insertCell()).appendChild(document.createTextNode(this.tearrTypeToString_(i.type))),n.insertCell().appendChild(document.createTextNode(i.el.toFixed(1))),n.insertCell().appendChild(document.createTextNode(i.az.toFixed(0))),n.insertCell().appendChild(document.createTextNode(i.rng.toFixed(0)))}}static tearrTypeToString_(e){switch(e){case ca.c.RISE:return"Rise";case ca.c.SET:return"Set";case ca.c.MAX_EL:return"Max El";default:return"Unknown"}}settingsRisesetChange_(e,t){if(null==e)throw new Error("e is undefined");null!=t||(t=(0,s.Gn)("settings-riseset").checked),this.isRiseSetOnly_=!!t,this.refreshSideMenuData_()}}const ha=i.p+"../img/multi-site.png";class ga extends u.c{constructor(){super(ga.name),this.dependencies=[h.P.name],this.sensorList_=l.b.getSensorManager().sensorListSsn.concat(l.b.getSensorManager().sensorListMw,l.b.getSensorManager().sensorListMda,l.b.getSensorManager().sensorListLeoLabs,l.b.getSensorManager().sensorListEsoc,l.b.getSensorManager().sensorListRus,l.b.getSensorManager().sensorListPrc,l.b.getSensorManager().sensorListOther),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!1,this.lengthOfLookAngles_=1,this.angleCalculationInterval_=30,this.disabledSensors_=this.sensorList_.filter((e=>!l.b.getSensorManager().sensorListMw.includes(e))),this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)},this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=ha,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:750},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=l.b.html`
    The Multi-Site Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a satellite and multiple sensors.
    A satellite must first be selected before the menu can be used.
    <br><br>
    By default the menu will calculate the look angles for all sensors in the Space Surveillance Netowrk.
    If you would like to calculate the look angles for additional sensors, you can export a csv file at the bottom of the menu.
    The csv file will contain look angles for all sensors.
    <br><br>
    Clicking on a row in the table will select the sensor and change the simulation time to the time of the look angle.`,this.sideMenuElementName="multi-site-look-angles-menu",this.sideMenuTitle="Multi-Sensor Look Angles",this.sideMenuElementHtml=l.b.html`
    <div class="row"></div>
    <div class="row">
      <table id="multi-site-look-angles-table" class="center-align striped-light centered"></table>
    </div>`,this.sideMenuSettingsHtml=l.b.html`
    <div class="row" style="margin: 0 10px;">
      <div id="multi-site-look-angles-sensor-list">
      </div>
    </div>`,this.sideMenuSettingsWidth=350,this.downloadIconCb=()=>{l.b.getSoundManager().play(g.p.EXPORT);const e=l.b.getSensorManager().lastMultiSiteArray.map((e=>({time:e.time,sensor:e.objName,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)})));(0,at.Eb)(e,`multisite-${this.selectSatManager_.getSelectedSat().sccNum6}-look-angles`)},this.sideMenuSettingsOptions={width:300,leftOffset:null,zIndex:3},this.selectSatManager_=l.b.getPlugin(h.P),this.sensorList_=this.sensorList_.filter(((e,t,i)=>t===i.findIndex((t=>t.uiName===e.uiName))))}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&l.b.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.refreshSideMenuData(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}addJs(){super.addJs(),l.b.register({event:o.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)}})}refreshSideMenuData(e){this.isMenuButtonActive&&e&&(0,v.QP)((()=>{var t,i;const a=(0,s.Gn)("multi-site-look-angles-sensor-list");if(!a)return void f.x.warn("Could not find sensor list dom");a.innerHTML="";const n=[];for(const s of this.sensorList_){if(!s.objName)continue;const o=document.createElement("button");o.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors_.includes(s)&&o.classList.add("btn-red"),n.push(s),o.innerText=null!==(i=null!==(t=s.uiName)&&void 0!==t?t:s.shortName)&&void 0!==i?i:s.objName,o.addEventListener("click",(()=>{o.classList.contains("btn-red")?(o.classList.remove("btn-red"),this.disabledSensors_.splice(this.disabledSensors_.indexOf(s),1),l.b.getSoundManager().play(g.p.TOGGLE_ON)):(o.classList.add("btn-red"),this.disabledSensors_.push(s),l.b.getSoundManager().play(g.p.TOGGLE_OFF)),this.getlookanglesMultiSite_(e,n.filter((e=>!this.disabledSensors_.includes(e))))})),a.appendChild(o),a.appendChild(document.createTextNode(" "))}this.getlookanglesMultiSite_(e,n.filter((e=>!this.disabledSensors_.includes(e))))}))}getlookanglesMultiSite_(e,t){const i=l.b.getTimeManager(),a=l.b.getSensorManager(),n=l.b.getCatalogManager().staticSet;if(!t){t=[];for(const e in n){const i=n[e];t.push(i)}}const s=!a.isSensorSelected(),o=[...a.currentSensors],r=_.rE/(e.satrec.no*_.rE/_.gc),c=[];for(const a of t){if(a.maxRng<e.perigee&&(!a.maxRng2||a.maxRng2<e.perigee))continue;sa.w.updateSensorUiStyling([a]);let t=0;for(let n=0;n<24*this.lengthOfLookAngles_*60*60;n+=this.angleCalculationInterval_){t=1e3*n;const s=i.getOffsetTimeObj(t),o=ga.propagateMultiSite_(s,e.satrec,a);""!==o.time&&(c.push(o),n+=60*r*.75)}}c.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),a.lastMultiSiteArray=c,s?a.setCurrentSensor(null):a.setCurrentSensor(o),ga.populateMultiSiteTable_(c)}static propagateMultiSite_(e,t,i){const a=it.$.getRae(e,t,i);return it.$.checkIsInView(i,a)?{time:e.toISOString(),el:a.el,az:a.az,rng:a.rng,objName:i.objName}:{time:"",el:0,az:0,rng:0,objName:""}}static populateMultiSiteTable_(e){var t,i,a;const n=l.b.getSensorManager(),o=l.b.getCatalogManager().staticSet,r=(0,s.Gn)("multi-site-look-angles-table");r.innerHTML="";let c=r.insertRow(),d=c.insertCell();d.appendChild(document.createTextNode("Time")),d.setAttribute("style","text-decoration: underline");let u=c.insertCell();u.appendChild(document.createTextNode("El")),u.setAttribute("style","text-decoration: underline");let h=c.insertCell();h.appendChild(document.createTextNode("Az")),h.setAttribute("style","text-decoration: underline");let g=c.insertCell();g.appendChild(document.createTextNode("Rng")),g.setAttribute("style","text-decoration: underline");let m=c.insertCell();m.appendChild(document.createTextNode("Sensor")),m.setAttribute("style","text-decoration: underline");const p=l.b.getTimeManager();for(const s of e){const e=o.find((e=>e.objName===s.objName));e&&(c=r.insertRow(),c.setAttribute("class","link"),d=c.insertCell(),d.appendChild(document.createTextNode((0,si.v)(s.time,"isoDateTime",!0))),u=c.insertCell(),u.appendChild(document.createTextNode(s.el.toFixed(1))),h=c.insertCell(),h.appendChild(document.createTextNode(s.az.toFixed(0))),g=c.insertCell(),g.appendChild(document.createTextNode(s.rng.toFixed(0))),m=c.insertCell(),m.appendChild(document.createTextNode(null!==(a=null!==(i=null!==(t=e.uiName)&&void 0!==t?t:e.shortName)&&void 0!==i?i:e.objName)&&void 0!==a?a:"")),c.addEventListener("click",(()=>{p.changeStaticOffset(new Date(s.time).getTime()-(new Date).getTime()),n.setSensor(e,e.sensorId)})))}}}const ma=i.p+"../img/radio-tower.png";class pa extends u.c{constructor(){super(pa.PLUGIN_NAME),this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.getSensorInfo(),this.checkIfLinesVisible_(l.b.getLineManager())},this.bottomIconElementName="sensor-info-icon",this.bottomIconLabel="Sensor Info",this.bottomIconImg=ma,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="sensor-info-menu",this.sideMenuElementHtml=l.b.html`
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
    Additionally, lines can be quickly created from the sensor to the sun or moon from this menu.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.addSensorToSunBtnListener_(),this.addSensorToMoonBtnListener()}}),l.b.register({event:o.RL.onLineAdded,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfLinesVisible_(e)}})}checkIfLinesVisible_(e){this.isSunLineVisible_=e.drawLineList.some((e=>e.type===Zt.jv.SENSOR_TO_SUN)),this.isSunLineVisible_?((0,s.Gn)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0):((0,s.Gn)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1),this.isMonnLineVisible_=e.drawLineList.some((e=>e.type===Zt.jv.SENSOR_TO_MOON)),this.isMonnLineVisible_?((0,s.Gn)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0):((0,s.Gn)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1)}addSensorToMoonBtnListener(){(0,s.Gn)("sensor-moon-btn").addEventListener("click",(()=>{if(this.isMonnLineVisible_){const e=l.b.getLineManager();for(const t of e.drawLineList)if(t.type===Zt.jv.SENSOR_TO_MOON)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,s.Gn)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1,void l.b.getSoundManager().play(g.p.TOGGLE_OFF)}else{const e=l.b.getSensorManager().currentSensors;1!==e.length&&l.b.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.b.getScene(),i=l.b.getTimeManager().simulationTimeObj;l.b.getLineManager().create(Zt.jv.SENSOR_TO_MOON,[e[0].eci(i).x,e[0].eci(i).y,e[0].eci(i).z,t.moon.position[0],t.moon.position[1],t.moon.position[2]],"w"),(0,s.Gn)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0,l.b.getSoundManager().play(g.p.TOGGLE_ON)}}))}addSensorToSunBtnListener_(){(0,s.Gn)("sensor-sun-btn").addEventListener("click",(()=>{if(this.isSunLineVisible_){const e=l.b.getLineManager();for(const t of e.drawLineList)if(t.type===Zt.jv.SENSOR_TO_SUN)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,s.Gn)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1,void l.b.getSoundManager().play(g.p.TOGGLE_OFF)}else{const e=l.b.getSensorManager().currentSensors;1!==e.length&&l.b.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.b.getScene(),i=l.b.getTimeManager().simulationTimeObj;l.b.getLineManager().create(Zt.jv.SENSOR_TO_SUN,[e[0].eci(i).x,e[0].eci(i).y,e[0].eci(i).z,t.sun.position[0],t.sun.position[1],t.sun.position[2]],"o"),(0,s.Gn)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0,l.b.getSoundManager().play(g.p.TOGGLE_ON)}}))}getSensorInfo(){if(!this.isHtmlAdded)return;const e=l.b.getSensorManager().currentSensors[0];(0,s.Gn)("sensor-latitude").innerHTML=e.lat>0?`${e.lat.toFixed(2)}° N`:`${Math.abs(e.lat).toFixed(2)}° S`,(0,s.Gn)("sensor-longitude").innerHTML=e.lon>0?`${e.lon.toFixed(2)}° E`:`${Math.abs(e.lon).toFixed(2)}° W`,(0,s.Gn)("sensor-minazimuth").innerHTML=`${e.minAz.toFixed(1).toString()}°`,(0,s.Gn)("sensor-maxazimuth").innerHTML=`${e.maxAz.toFixed(1).toString()}°`,(0,s.Gn)("sensor-minelevation").innerHTML=`${e.minEl.toFixed(1).toString()}°`,(0,s.Gn)("sensor-maxelevation").innerHTML=`${e.maxEl.toFixed(1).toString()}°`,(0,s.Gn)("sensor-minrange").innerHTML=`${e.minRng.toFixed(1).toString()} km`,(0,s.Gn)("sensor-maxrange").innerHTML=`${e.maxRng.toFixed(1).toString()} km`,e.type===_.ge.OPTICAL||e.type===_.ge.OBSERVER?((0,s.UT)((0,s.Gn)("sensor-band").parentElement),(0,s.UT)((0,s.Gn)("sensor-beamwidth").parentElement)):((0,s.K4)((0,s.Gn)("sensor-band").parentElement),(0,s.Gn)("sensor-band").innerHTML=e.freqBand?e.freqBand:"Unknown",e instanceof _.n5?((0,s.K4)((0,s.Gn)("sensor-beamwidth").parentElement),(0,s.Gn)("sensor-beamwidth").innerHTML=e.beamwidth?`${e.beamwidth.toFixed(1).toString()}°`:"Unknown"):(0,s.UT)((0,s.Gn)("sensor-beamwidth").parentElement))}}pa.PLUGIN_NAME="Sensor Info";var ba=i(926);const va=i.p+"../img/search.png";class fa extends u.c{constructor(){super(fa.PLUGIN_NAME),this.dependencies=[Ci.s.PLUGIN_NAME,h.P.PLUGIN_NAME],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=va,this.isRequireSensorSelected=!0,this.isAddStfLinksOnce=!1,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=l.b.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
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
  </div>`,this.selectSatManager_=l.b.getPlugin(h.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{null!=e&&l.b.getPlugin(Ci.s)&&!this.isAddStfLinksOnce&&((0,s.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
            <div id="stf-on-object-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,s.Gn)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0)}})}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("stfForm").addEventListener("submit",(e=>{e.preventDefault(),l.b.getSoundManager().play(g.p.MENU_BUTTON),this.onSubmit.bind(this)()})),(0,s.Gn)("stf-remove-last").addEventListener("click",(()=>{l.b.getSoundManager().play(g.p.MENU_BUTTON),l.b.getSensorManager().removeStf()})),(0,s.Gn)("stf-clear-all").addEventListener("click",(()=>{l.b.getSoundManager().play(g.p.MENU_BUTTON),l.b.getSensorManager().clearStf()})),(0,s.Gn)("stf-azExt").addEventListener("blur",(()=>{const e=parseFloat((0,s.Gn)("stf-az").value),t=parseFloat((0,s.Gn)("stf-el").value),i=parseFloat((0,s.Gn)("stf-rng").value);let a=parseFloat((0,s.Gn)("stf-azExt").value);a>80&&(a=80,(0,s.Gn)("stf-azExt").value=a.toFixed(1));const n=_.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),o=l.b.getSensorManager().currentSensors[0].toGeodetic().toITRF(n).toJ2000(),r=new _.rv(n,i,(e-a/2)*_.qW,t*_.qW).position(o),c=new _.rv(_.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),i,(e+a/2)*_.qW,t*_.qW).position(o),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,s.Gn)("stf-azExtKm").value=d.toFixed(1)})),(0,s.Gn)("stf-elExt").addEventListener("blur",(()=>{const e=parseFloat((0,s.Gn)("stf-az").value),t=parseFloat((0,s.Gn)("stf-el").value),i=parseFloat((0,s.Gn)("stf-rng").value);let a=parseFloat((0,s.Gn)("stf-elExt").value);a>80&&(a=80,(0,s.Gn)("stf-elExt").value=a.toFixed(1));const n=_.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),o=l.b.getSensorManager().currentSensors[0].toGeodetic().toITRF(n).toJ2000(),r=new _.rv(n,i,e*_.qW,(t-a/2)*_.qW).position(o),c=new _.rv(_.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),i,e*_.qW,(t+a/2)*_.qW).position(o),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,s.Gn)("stf-elExtKm").value=d.toFixed(1)}))}}),l.b.register({event:o.RL.resetSensor,cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),l.b.register({event:o.RL.setSensor,cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,x.kW)((0,s.Gn)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonActive=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),l.b.getUiManager().hideSideMenus()}onSubmit(){if(!this.verifySensorSelected())return;const e=parseFloat((0,s.Gn)("stf-az").value),t=parseFloat((0,s.Gn)("stf-azExt").value),i=parseFloat((0,s.Gn)("stf-el").value),a=parseFloat((0,s.Gn)("stf-elExt").value),n=parseFloat((0,s.Gn)("stf-rng").value),o=parseFloat((0,s.Gn)("stf-rngExt").value),r=e-t/2<0?e-t/2+360:e-t/2,c=e+t/2>360?e+t/2-360:e+t/2,d=i-a/2,u=i+a/2,h=n-o/2,g=n+o/2,m=l.b.getSensorManager().currentSensors[0],p=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),b=new _.hs({objName:`STF-${p}`,lat:m.lat,lon:m.lon,alt:m.alt,minAz:r,maxAz:c,minEl:d,maxEl:u,minRng:h,maxRng:g,type:_.ge.SHORT_TERM_FENCE,name:"STF",uiName:"STF",zoom:g>6e3?_.$R.GEO:_.$R.LEO,volume:!0});m.isRaeInFov({az:r,el:d,rng:h})&&m.isRaeInFov({az:c,el:u,rng:g})?l.b.getSensorManager().addStf(b):f.x.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=l.b.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=l.b.getTimeManager().simulationTimeObj,i=(0,_.Zn)(t,this.selectSatManager_.primarySatObj.position,e.currentSensors[0]);(0,s.Gn)("stf-az").value=i.az.toFixed(1),(0,s.Gn)("stf-el").value=i.el.toFixed(1),(0,s.Gn)("stf-rng").value=i.rng.toFixed(1),l.b.getUiManager().hideSideMenus(),(0,x.$k)((0,s.Gn)("stf-menu"),1e3),this.isMenuButtonActive=!0,this.setBottomIconToSelected()}}fa.PLUGIN_NAME="Short Term Fences";const Sa=i.p+"../img/github.png";class Ma extends u.c{constructor(){super("Social Media"),this.dependencies=["Top Menu"]}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:Ma.uiManagerFinal_})}static uiManagerFinal_(){var e;const t=document.createElement("li");t.innerHTML=l.b.html`
          <a id="github-share1" class="top-menu-icons" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            src="${Sa}"
            />
          </a>
          `,null===(e=(0,s.Gn)("nav-mobile2",!0))||void 0===e||e.insertBefore(t,(0,s.Gn)("nav-mobile2").firstChild)}}var _a=i(5957),ya=i(2478);const xa=i.p+"../img/view_timeline2.png";var La=i(195);class Ca extends u.c{constructor(){super(Ca.name),this.dependencies=[h.P.PLUGIN_NAME],this.drawEvents_={},this.lengthOfLookAngles_=6,this.lengthOfBadPass_=120,this.lengthOfAvgPass_=240,this.angleCalculationInterval_=30,this.isRequireSensorSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.bottomIconElementName="menu-satellite-timeline",this.bottomIconImg=xa,this.bottomIconLabel="Satellite Timeline",this.bottomIconCallback=()=>{if(this.verifySensorSelected())return 0===l.b.getPlugin(La.y).watchlistList.length&&-1===l.b.getPlugin(h.P).selectedSat?(l.b.getUiManager().toast("Add Satellites to Watchlist or Select a Satellite","caution"),void(0,j.l)((0,s.Gn)(this.bottomIconElementName))):void(this.isMenuButtonActive&&this.resizeCanvas_())},this.helpTitle="Satellite Timeline",this.helpBody="The Satellite Timeline plugin shows the times when a sensor has visiblity of various satellites. The timeline is color-coded to show the quality of the\n    pass. Red is a bad pass, yellow is an average pass, and green is a good pass. Click on a pass to select that satellite and change the time to that pass.",this.sideMenuElementName="satellite-timeline-menu",this.sideMenuTitle="Satellite Timeline",this.sideMenuElementHtml=l.b.html`
    <div class="row"></div>
    <div class="row" style="margin: 0;">
      <canvas id="satellite-timeline-canvas"></canvas>
      <canvas id="satellite-timeline-canvas-static" style="display: none;"></canvas>
    </div>`,this.sideMenuSettingsHtml=l.b.html`
    <div class="row">
      <div class="input-field col s12">
        <input id="satellite-timeline-setting-total-length" value="${this.lengthOfLookAngles_.toString()}" type="text"
          style="text-align: center;"
        />
        <label for="satellite-timeline-setting-total-length" class="active">Calculation Length (Hours)</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="satellite-timeline-setting-interval" value="${this.angleCalculationInterval_.toString()}" type="text"
          style="text-align: center;"
        />
        <label for="satellite-timeline-setting-interval" class="active">Calculation Interval (Seconds)</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="satellite-timeline-setting-bad-length" value="${this.lengthOfBadPass_.toString()}" type="text"
          style="text-align: center;"
        />
        <label for="satellite-timeline-setting-bad-length" class="active">Bad Pass Length (Seconds)</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="satellite-timeline-setting-avg-length" value="${this.lengthOfAvgPass_.toString()}" type="text"
          style="text-align: center;"
        />
        <label for="satellite-timeline-setting-avg-length" class="active">Average Pass Length (Seconds)</label>
      </div>
    </div>`,this.sideMenuSettingsOptions={width:350,leftOffset:0,zIndex:10},this.downloadIconCb=()=>{const e=document.getElementById("satellite-timeline-canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download=`sensor-${l.b.getSensorManager().getSensor().uiName}-timeline.png`,t.click()}}addHtml(){super.addHtml(),i.e(215).then(i.bind(i,215)),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.canvas_=(0,s.Gn)("satellite-timeline-canvas"),this.canvasStatic_=(0,s.Gn)("satellite-timeline-canvas-static"),this.ctx_=this.canvas_.getContext("2d"),this.ctxStatic_=this.canvasStatic_.getContext("2d"),(0,s.Gn)("satellite-timeline-setting-total-length").addEventListener("change",(()=>{this.lengthOfLookAngles_=parseFloat((0,s.Gn)("satellite-timeline-setting-total-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,s.Gn)("satellite-timeline-setting-interval").addEventListener("change",(()=>{this.angleCalculationInterval_=parseFloat((0,s.Gn)("satellite-timeline-setting-interval").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,s.Gn)("satellite-timeline-setting-bad-length").addEventListener("change",(()=>{this.lengthOfBadPass_=parseFloat((0,s.Gn)("satellite-timeline-setting-bad-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,s.Gn)("satellite-timeline-setting-avg-length").addEventListener("change",(()=>{this.lengthOfAvgPass_=parseFloat((0,s.Gn)("satellite-timeline-setting-avg-length").value),this.ctxStatic_.reset(),this.updateTimeline()}))}})}addJs(){super.addJs(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e&&(this.ctxStatic_.reset(),this.updateTimeline(),this.canvas_.style.display="block"),e||0!==l.b.getPlugin(La.y).watchlistList.length?this.verifySensorSelected(!1)&&this.setBottomIconToEnabled():this.setBottomIconToDisabled()}}),l.b.register({event:o.RL.onWatchlistUpdated,cbName:this.PLUGIN_NAME,cb:this.onWatchlistUpdated_.bind(this)}),l.b.register({event:o.RL.resize,cbName:this.PLUGIN_NAME,cb:this.resizeCanvas_.bind(this)})}onWatchlistUpdated_(e){0===e.length&&-1===l.b.getPlugin(h.P).selectedSat?this.setBottomIconToDisabled():this.verifySensorSelected(!1)&&this.setBottomIconToEnabled()}updateTimeline(){try{if(!1===l.b.getSensorManager().isSensorSelected())return;if(!this.isMenuButtonActive)return;const e=this.calculatePasses_();this.drawTimeline_(e)}catch(e){f.x.info(e)}}calculatePasses_(){const e=[],t=l.b.getSensorManager().getSensor(),i=l.b.getPlugin(La.y).getSatellites().concat(l.b.getPlugin(h.P).selectedSat).filter((e=>-1!==e));for(const a of i){const i=l.b.getCatalogManager().getSat(a),n={satellite:i,passes:[]};if(t.maxRng<i.perigee&&(!t.maxRng2||t.maxRng2<i.perigee))continue;let s=0;const o=60*this.lengthOfLookAngles_*60;let r=!1,c=!1,d=!1,u=null;for(let e=0;e<o;e+=this.angleCalculationInterval_){s=1e3*e;const a=l.b.getTimeManager().getOffsetTimeObj(s),h=Ca.propagateMultiSite(a,i.satrec,t);h.time&&!r&&(u=new Date(h.time),r=!0,c=!0),!h.time&&r&&(d=!0,r=!1,e+=60*i.period*.75),(c&&d||c&&e===o-this.angleCalculationInterval_)&&(n.passes.push({start:u,end:a}),c=!1,d=!1)}e.push(n)}return e}static propagateMultiSite(e,t,i){const a=it.$.getRae(e,t,i);return it.$.checkIsInView(i,a)?{time:e,el:a.el,az:a.az,rng:a.rng,objName:null}:{time:null,el:0,az:0,rng:0,objName:null}}drawTimeline_(e){const t=this.canvas_,i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),this.canvas_=i,this.ctx_=this.canvas_.getContext("2d"),this.drawEvents_={};const a=.1*this.canvas_.width,n=.8*this.canvas_.width,s=.75*this.canvas_.height,r=l.b.getTimeManager(),c=r.simulationTimeObj.getTime(),d=c+60*this.lengthOfLookAngles_*60*1e3;this.ctx_.reset(),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(a,0,n,s-15);const u=s/(e.length+1),g=n/(d-c);this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(a,0+s-20),this.ctx_.lineTo(a+n,0+s-20),this.ctx_.stroke();for(let e=0;e<=this.lengthOfLookAngles_;e++){const t=a+60*e*60*1e3*g;this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+s-25),this.ctx_.lineTo(t,0+s-15),this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.stroke(),this.ctx_.lineWidth=1,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+s-15),this.ctx_.lineTo(t,0),this.ctx_.stroke();let i=r.simulationTimeObj.getUTCHours();i=(i+e)%24,this.ctx_.font="14px Consolas",this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(`${i}h`,t-10,0+s)}e.forEach(((e,t)=>{const i=0+(t+1)*u;if(this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.font="14px Consolas",this.ctx_.fillText(e.satellite.sccNum,a-150,i+5),e.passes.forEach((n=>{const s=n.start.getTime(),r=n.end.getTime(),d=a+(s-c)*g,u=a+(r-c)*g,m=(r-s)/_.s9;m<this.lengthOfBadPass_?this.ctx_.fillStyle="rgb(255, 42, 4)":m<this.lengthOfAvgPass_?this.ctx_.fillStyle="rgb(252, 232, 58)":this.ctx_.fillStyle="rgb(86, 240, 0)",this.ctx_.fillRect(d,i-10,u-d,20);const p=(t,a)=>{if(t>=d-10&&t<=u+10&&a>=i-10&&a<=i+10){const i=new Date(s).toISOString().slice(11,19),n=new Date(r).toISOString().slice(11,19),o=`${e.satellite.sccNum}: ${i} - ${n}`;this.ctx_.font="14px Consolas";const l=this.ctx_.measureText(o).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-l/2-6,a-30,l+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-l/2-3,a-27,l+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(o,t-l/2,a-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${s}-${r}`]=p,this.canvas_.addEventListener("click",(t=>{const i=this.canvas_.getBoundingClientRect(),a=t.clientX-i.left,n=t.clientY-i.top;if(p(a,n)){const t=l.b.getTimeManager();t.changeStaticOffset(new Date(s).getTime()-t.realTime),t.calculateSimulationTime(),l.b.runEvent(o.RL.updateDateTime,new Date(t.dynamicOffsetEpoch+t.staticOffset)),l.b.getPlugin(h.P).selectSat(e.satellite.id)}}))})),0===e.passes.length){this.ctx_.fillStyle="rgba(200, 200, 200, 0.2)",this.ctx_.fillRect(a,i-10,n,20);const s=(t,s)=>{if(t>=a&&t<=a+n&&s>=i-10&&s<=i+10){const i=`${e.satellite.sccNum}: No Passes`;this.ctx_.font="14px Consolas";const a=this.ctx_.measureText(i).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-a/2-6,s-30,a+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-a/2-3,s-27,a+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(i,t-a/2,s-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${e.satellite.id}-no-passes`]=s}})),this.canvas_.addEventListener("mousemove",(e=>{this.handleOnMouseMove_(e)})),this.ctxStatic_=this.canvasStatic_.getContext("2d"),this.ctxStatic_.drawImage(this.canvas_,0,0)}handleOnMouseMove_(e){this.ctx_.reset(),this.ctx_.drawImage(this.canvasStatic_,0,0);const t=this.canvas_.getBoundingClientRect(),i=e.clientX-t.left,a=e.clientY-t.top;let n=!1;for(const e in this.drawEvents_){const t=this.drawEvents_[e](i,a);n=n||t}n||(this.canvas_.style.cursor="default")}resizeCanvas_(e){null!=e||(e=!1);const t=(0,s.Gn)("satellite-timeline-menu");"none"!==t.style.display&&(e||window.innerWidth>window.innerHeight?(t.style.width=`${window.innerWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.height=window.innerHeight):(settingsManager.mapWidth=2*settingsManager.mapHeight,t.style.width=`${settingsManager.mapWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.style.width=`${window.innerWidth}px`,this.canvas_.height=window.innerHeight-100,this.canvas_.style.height=window.innerHeight-100+"px"),this.canvasStatic_.width=this.canvas_.width,this.canvasStatic_.height=this.canvas_.height,this.updateTimeline())}}const wa=i.p+"../img/view_timeline.png";class Ea extends u.c{constructor(){super(Ea.name),this.dependencies=[h.P.PLUGIN_NAME],this.drawEvents_={},this.allSensorLists_=l.b.getSensorManager().sensorListSsn.concat(l.b.getSensorManager().sensorListMw,l.b.getSensorManager().sensorListMda,l.b.getSensorManager().sensorListLeoLabs,l.b.getSensorManager().sensorListEsoc,l.b.getSensorManager().sensorListRus,l.b.getSensorManager().sensorListPrc,l.b.getSensorManager().sensorListOther),this.enabledSensors_=this.allSensorLists_.filter((e=>l.b.getSensorManager().sensorListMw.includes(e))),this.lengthOfLookAngles_=6,this.lengthOfBadPass_=120,this.lengthOfAvgPass_=240,this.angleCalculationInterval_=30,this.isRequireSatelliteSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.bottomIconElementName="menu-sensor-timeline",this.bottomIconImg=wa,this.bottomIconLabel="Sensor Timeline",this.bottomIconCallback=()=>{this.isMenuButtonActive&&(this.resizeCanvas_(),this.updateTimeline())},this.helpTitle="Sensor Timeline",this.helpBody="The Sensor Timeline plugin shows the times when a satellite is in view of various sensors. The timeline is color-coded to show the quality of the\n    pass. Red is a bad pass, yellow is an average pass, and green is a good pass. Click on a pass to change the sensor and time to that pass.",this.sideMenuElementName="sensor-timeline-menu",this.sideMenuTitle="Sensor Timeline",this.sideMenuElementHtml=l.b.html`
    <div class="row"></div>
    <div class="row" style="margin: 0;">
      <canvas id="sensor-timeline-canvas"></canvas>
      <canvas id="sensor-timeline-canvas-static" style="display: none;"></canvas>
    </div>`,this.sideMenuSettingsHtml=l.b.html`
    <!-- <div class="switch row">
      <label>
        <input id="settings-riseset" type="checkbox" checked="true" />
        <span class="lever"></span>
        Show Only Rise and Set Times
      </label>
    </div> -->
    <div class="row">
      <div class="input-field col s12">
        <input id="sensor-timeline-setting-total-length" value="${this.lengthOfLookAngles_.toString()}" type="text"
          style="text-align: center;"
        />
        <label for="sensor-timeline-setting-total-length" class="active">Calculation Length (Hours)</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="sensor-timeline-setting-interval" value="${this.angleCalculationInterval_.toString()}" type="text"
          style="text-align: center;"
        />
        <label for="sensor-timeline-setting-interval" class="active">Calculation Interval (Seconds)</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="sensor-timeline-setting-bad-length" value="${this.lengthOfBadPass_.toString()}" type="text"
          style="text-align: center;"
        />
        <label for="sensor-timeline-setting-bad-length" class="active">Bad Pass Length (Seconds)</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="sensor-timeline-setting-avg-length" value="${this.lengthOfAvgPass_.toString()}" type="text"
          style="text-align: center;"
        />
        <label for="sensor-timeline-setting-avg-length" class="active">Average Pass Length (Seconds)</label>
      </div>
    </div>
    <div class="row" style="margin: 0 10px;">
      <div id="sensor-timeline-sensor-list">
      </div>
    </div>`,this.sideMenuSettingsOptions={width:350,leftOffset:0,zIndex:10},this.downloadIconCb=()=>{const e=document.getElementById("sensor-timeline-canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download=`sat-${l.b.getPlugin(h.P).getSelectedSat().sccNum6}-timeline.png`,t.click()},this.allSensorLists_=this.allSensorLists_.filter(((e,t,i)=>t===i.findIndex((t=>t.uiName===e.uiName))))}addHtml(){super.addHtml(),i.e(940).then(i.bind(i,4940)),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.canvas_=(0,s.Gn)("sensor-timeline-canvas"),this.canvasStatic_=(0,s.Gn)("sensor-timeline-canvas-static"),this.ctx_=this.canvas_.getContext("2d"),this.ctxStatic_=this.canvasStatic_.getContext("2d"),(0,s.Gn)("sensor-timeline-setting-total-length").addEventListener("change",(()=>{this.lengthOfLookAngles_=parseFloat((0,s.Gn)("sensor-timeline-setting-total-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,s.Gn)("sensor-timeline-setting-interval").addEventListener("change",(()=>{this.angleCalculationInterval_=parseFloat((0,s.Gn)("sensor-timeline-setting-interval").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,s.Gn)("sensor-timeline-setting-bad-length").addEventListener("change",(()=>{this.lengthOfBadPass_=parseFloat((0,s.Gn)("sensor-timeline-setting-bad-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,s.Gn)("sensor-timeline-setting-avg-length").addEventListener("change",(()=>{this.lengthOfAvgPass_=parseFloat((0,s.Gn)("sensor-timeline-setting-avg-length").value),this.ctxStatic_.reset(),this.updateTimeline()}))}})}addJs(){super.addJs(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e&&(this.ctxStatic_.reset(),this.updateTimeline(),this.canvas_.style.display="block")}})}updateTimeline(){try{if(-1===l.b.getPlugin(h.P).selectedSat)return;if(!this.isMenuButtonActive)return;this.calculateSensors_();const e=this.calculatePasses_();this.drawTimeline_(e)}catch(e){f.x.info(e)}}calculateSensors_(){var e,t;const i=(0,s.Gn)("sensor-timeline-sensor-list");if(i){i.innerHTML="";for(const a of this.allSensorLists_){if(!a.objName)continue;const n=document.createElement("button");n.classList.add("btn","btn-ui","waves-effect","waves-light"),this.enabledSensors_.includes(a)||n.classList.add("btn-red"),n.innerText=null!==(t=null!==(e=a.uiName)&&void 0!==e?e:a.shortName)&&void 0!==t?t:a.objName,n.addEventListener("click",(()=>{n.classList.contains("btn-red")?(n.classList.remove("btn-red"),this.enabledSensors_.push(a),l.b.getSoundManager().play(g.p.TOGGLE_ON)):(n.classList.add("btn-red"),this.enabledSensors_.splice(this.enabledSensors_.indexOf(a),1),l.b.getSoundManager().play(g.p.TOGGLE_OFF)),this.ctxStatic_.reset(),this.updateTimeline()})),i.appendChild(n),i.appendChild(document.createTextNode(" "))}}else f.x.warn("Could not find sensor list dom")}calculatePasses_(){const e=[],t=l.b.getPlugin(h.P).getSelectedSat();for(const i of this.enabledSensors_){const a={sensor:i,passes:[]};if(i.maxRng<t.perigee&&(!i.maxRng2||i.maxRng2<t.perigee)){e.push(a);continue}sa.w.updateSensorUiStyling([i]);let n=0;const s=60*this.lengthOfLookAngles_*60;let o=!1,r=!1,c=!1,d=null;for(let e=0;e<s;e+=this.angleCalculationInterval_){n=1e3*e;const u=l.b.getTimeManager().getOffsetTimeObj(n),h=Ea.propagateMultiSite(u,t.satrec,i);h.time&&!o&&(d=new Date(h.time),o=!0,r=!0),!h.time&&o&&(c=!0,o=!1,e+=60*t.period*.75),(r&&c||r&&e===s-this.angleCalculationInterval_)&&(a.passes.push({start:d,end:u}),r=!1,c=!1)}e.push(a)}return e}static propagateMultiSite(e,t,i){const a=it.$.getRae(e,t,i);return it.$.checkIsInView(i,a)?{time:e,el:a.el,az:a.az,rng:a.rng,objName:null}:{time:null,el:0,az:0,rng:0,objName:null}}drawTimeline_(e){const t=this.canvas_,i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),this.canvas_=i,this.ctx_=this.canvas_.getContext("2d"),this.drawEvents_={};const a=.1*this.canvas_.width,n=.8*this.canvas_.width,s=.75*this.canvas_.height,r=l.b.getTimeManager(),c=r.simulationTimeObj.getTime(),d=c+60*this.lengthOfLookAngles_*60*1e3;this.ctx_.reset(),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(a,0,n,s-15);const u=s/(e.length+1),g=n/(d-c);this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(a,0+s-20),this.ctx_.lineTo(a+n,0+s-20),this.ctx_.stroke();for(let e=0;e<=this.lengthOfLookAngles_;e++){const t=a+60*e*60*1e3*g;this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+s-25),this.ctx_.lineTo(t,0+s-15),this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.stroke(),this.ctx_.lineWidth=1,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+s-15),this.ctx_.lineTo(t,0),this.ctx_.stroke();let i=r.simulationTimeObj.getUTCHours();i=(i+e)%24,this.ctx_.font="14px Consolas",this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(`${i}h`,t-10,0+s)}e.forEach(((e,t)=>{const i=0+(t+1)*u;if(this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.font="14px Consolas",this.ctx_.fillText(e.sensor.uiName,a-150,i+5),e.passes.forEach((n=>{const s=n.start.getTime(),r=n.end.getTime(),d=a+(s-c)*g,u=a+(r-c)*g,m=(r-s)/_.s9;m<this.lengthOfBadPass_?this.ctx_.fillStyle="rgb(255, 42, 4)":m<this.lengthOfAvgPass_?this.ctx_.fillStyle="rgb(252, 232, 58)":this.ctx_.fillStyle="rgb(86, 240, 0)",this.ctx_.fillRect(d,i-10,u-d,20);const p=(t,a)=>{if(t>=d-10&&t<=u+10&&a>=i-10&&a<=i+10){const i=new Date(s).toISOString().slice(11,19),n=new Date(r).toISOString().slice(11,19),o=`${e.sensor.uiName}: ${i} - ${n}`;this.ctx_.font="14px Consolas";const l=this.ctx_.measureText(o).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-l/2-6,a-30,l+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-l/2-3,a-27,l+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(o,t-l/2,a-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${s}-${r}`]=p,this.canvas_.addEventListener("click",(t=>{const i=this.canvas_.getBoundingClientRect(),a=t.clientX-i.left,n=t.clientY-i.top;if(p(a,n)){const t=l.b.getTimeManager();l.b.getSensorManager().setSensor(e.sensor),t.changeStaticOffset(new Date(s).getTime()-t.realTime),t.calculateSimulationTime(),l.b.runEvent(o.RL.updateDateTime,new Date(t.dynamicOffsetEpoch+t.staticOffset));const i=l.b.getPlugin(h.P),a=i.selectedSat;i.selectSat(null),i.selectSat(a)}}))})),0===e.passes.length){this.ctx_.fillStyle="rgba(200, 200, 200, 0.2)",this.ctx_.fillRect(a,i-10,n,20);const s=(t,s)=>{if(t>=a&&t<=a+n&&s>=i-10&&s<=i+10){const i=`${e.sensor.uiName}: No Passes`;this.ctx_.font="14px Consolas";const a=this.ctx_.measureText(i).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-a/2-6,s-30,a+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-a/2-3,s-27,a+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(i,t-a/2,s-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${e.sensor.id}-no-passes`]=s}})),this.canvas_.addEventListener("mousemove",(e=>{this.handleOnMouseMove_(e)})),this.ctxStatic_=this.canvasStatic_.getContext("2d"),this.ctxStatic_.drawImage(this.canvas_,0,0)}handleOnMouseMove_(e){this.ctx_.reset(),this.ctx_.drawImage(this.canvasStatic_,0,0);const t=this.canvas_.getBoundingClientRect(),i=e.clientX-t.left,a=e.clientY-t.top;let n=!1;for(const e in this.drawEvents_){const t=this.drawEvents_[e](i,a);n=n||t}n||(this.canvas_.style.cursor="default")}resizeCanvas_(e){null!=e||(e=!1);const t=(0,s.Gn)("sensor-timeline-menu");e||window.innerWidth>window.innerHeight?(t.style.width=`${window.innerWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.height=window.innerHeight):(settingsManager.mapWidth=2*settingsManager.mapHeight,t.style.width=`${settingsManager.mapWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.style.width=`${window.innerWidth}px`,this.canvas_.height=window.innerHeight-100,this.canvas_.style.height=window.innerHeight-100+"px"),this.canvasStatic_.width=this.canvas_.width,this.canvasStatic_.height=this.canvas_.height}}var Ta=i(409);class Aa extends u.c{constructor(){super(Aa.PLUGIN_NAME),this.isRotateL=!0,this.isRotateR=!1,this.isRotateU=!1,this.isRotateD=!1,this.bottomIconElementName="video-director-icon",this.bottomIconImg=Ta,this.bottomIconLabel="Video Director",this.sideMenuElementName="video-director-menu",this.sideMenuElementHtml=l.b.html`
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=l.b.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("video-director-form").addEventListener("change",Aa.onFormChange),(0,s.Gn)("video-director-form").addEventListener("submit",Aa.onSubmit),(0,s.Gn)("video-director-rotate").addEventListener("click",(()=>{var e;null===(e=l.b.getSoundManager())||void 0===e||e.play(g.p.BUTTON_CLICK),l.b.getMainCamera().autoRotate(!0)}))}})}static onFormChange(e){var t,i,a;if(null==e)throw new Error("e is undefined");switch(null===(t=e.target)||void 0===t?void 0:t.id){case"video-director-rotateL":case"video-director-rotateR":case"video-director-rotateU":case"video-director-rotateD":case"video-director-panL":case"video-director-panR":case"video-director-panU":case"video-director-panD":case"video-director-zoomIn":case"video-director-zoomOut":(0,s.Gn)(e.target.id).checked?null===(i=l.b.getSoundManager())||void 0===i||i.play(g.p.TOGGLE_ON):null===(a=l.b.getSoundManager())||void 0===a||a.play(g.p.TOGGLE_OFF)}(0,s.Gn)("video-director-selectedColor").checked&&0!==settingsManager.selectedColor[3]?(settingsManager.selectedColorFallback=settingsManager.selectedColor,settingsManager.selectedColor=[0,0,0,0]):settingsManager.selectedColor=settingsManager.selectedColorFallback,settingsManager.autoRotateSpeed=parseFloat((0,s.Gn)("video-director-rotateSpeed").value),settingsManager.autoPanSpeed=parseFloat((0,s.Gn)("video-director-panSpeed").value),settingsManager.autoZoomSpeed=parseFloat((0,s.Gn)("video-director-zoomSpeed").value);const n=(0,s.Gn)("video-director-rotateL").checked,o=(0,s.Gn)("video-director-rotateR").checked,r=(0,s.Gn)("video-director-rotateU").checked,c=(0,s.Gn)("video-director-rotateD").checked,d=(0,s.Gn)("video-director-panL").checked,u=(0,s.Gn)("video-director-panR").checked,h=(0,s.Gn)("video-director-panU").checked,m=(0,s.Gn)("video-director-panD").checked,p=(0,s.Gn)("video-director-zoomIn").checked,b=(0,s.Gn)("video-director-zoomOut").checked;n&&!settingsManager.isAutoRotateL&&((0,s.Gn)("video-director-rotateR").checked=!1),o&&!settingsManager.isAutoRotateR&&((0,s.Gn)("video-director-rotateL").checked=!1),r&&!settingsManager.isAutoRotateU&&((0,s.Gn)("video-director-rotateD").checked=!1),c&&!settingsManager.isAutoRotateD&&((0,s.Gn)("video-director-rotateU").checked=!1),d&&!settingsManager.isAutoPanL&&((0,s.Gn)("video-director-panR").checked=!1),u&&!settingsManager.isAutoPanR&&((0,s.Gn)("video-director-panL").checked=!1),h&&!settingsManager.isAutoPanU&&((0,s.Gn)("video-director-panD").checked=!1),m&&!settingsManager.isAutoPanD&&((0,s.Gn)("video-director-panU").checked=!1),p&&!settingsManager.isAutoZoomIn&&((0,s.Gn)("video-director-zoomOut").checked=!1),b&&!settingsManager.isAutoZoomOut&&((0,s.Gn)("video-director-zoomIn").checked=!1)}static onSubmit(e){var t;if(null==e)throw new Error("e is undefined");e.preventDefault(),null===(t=l.b.getSoundManager())||void 0===t||t.play(g.p.BUTTON_CLICK),settingsManager.isAutoRotateR=(0,s.Gn)("video-director-rotateR").checked,settingsManager.isAutoRotateL=(0,s.Gn)("video-director-rotateL").checked,settingsManager.isAutoRotateU=(0,s.Gn)("video-director-rotateU").checked,settingsManager.isAutoRotateD=(0,s.Gn)("video-director-rotateD").checked,settingsManager.isAutoPanR=(0,s.Gn)("video-director-panR").checked,settingsManager.isAutoPanL=(0,s.Gn)("video-director-panL").checked,settingsManager.isAutoPanU=(0,s.Gn)("video-director-panU").checked,settingsManager.isAutoPanD=(0,s.Gn)("video-director-panD").checked,settingsManager.isAutoZoomIn=(0,s.Gn)("video-director-zoomIn").checked,settingsManager.isAutoZoomOut=(0,s.Gn)("video-director-zoomOut").checked}}Aa.PLUGIN_NAME="Video Director";const Na=new Aa;var ka=i(2257);const Ga=(e,t)=>{null!=t||(t={});try{const i=[{init:()=>(new ti).init(),enabled:t.debug},{init:()=>(new h.P).init(),enabled:!0},{init:()=>(new et.F).init(),enabled:t.topMenu},{init:()=>(new Ci.s).init(),enabled:t.satInfoboxCore},{init:()=>(new Kt.s).init(),enabled:t.datetime},{init:()=>(new Ma).init(),enabled:t.social},{init:()=>(new Ct).init(),enabled:t.classificationBar},{init:()=>(new ia).init(),enabled:t.sensor},{init:()=>(new pa).init(),enabled:t.sensor},{init:()=>(new ra).init(),enabled:t.sensor},{init:()=>(new ua).init(),enabled:t.sensor},{init:()=>(new ga).init(),enabled:t.sensor},{init:()=>(new Ea).init(),enabled:t.timeline},{init:()=>(new Ca).init(),enabled:t.timelineAlt},{init:()=>(new La.y).init(),enabled:t.watchlist},{init:()=>(new ka._).init(),enabled:t.watchlist},{init:()=>(new Ni).init(),enabled:t.reports},{init:()=>(new Ti).init(),enabled:t.polarPlot},{init:()=>(new yi).init(),enabled:t.nextLaunch},{init:()=>(new y).init(),enabled:t.findSat},{init:()=>(new fa).init(),enabled:t.shortTermFences},{init:()=>(new wi).init(),enabled:t.orbitReferences},{init:()=>(new Bt).init(),enabled:t.collisions},{init:()=>(new xt).init(),enabled:t.breakup},{init:()=>(new Wt).init(),enabled:t.debrisScreening},{init:()=>(new di).init(),enabled:t.editSat},{init:()=>(new Si).init(),enabled:t.newLaunch},{init:()=>B(),enabled:t.missile},{init:()=>(new _a.k).init(),enabled:t.stereoMap},{init:()=>(new Wi.n).init(),enabled:t.sensorFov},{init:()=>(new aa.I).init(),enabled:t.sensorSurv},{init:()=>(new X).init(),enabled:t.satelliteView},{init:()=>(new Di).init(),enabled:t.satelliteFov},{init:()=>(new gt).init(),enabled:t.planetarium},{init:()=>(new mt).init(),enabled:t.astronomy},{init:()=>(new Li).init(),enabled:t.nightToggle},{init:()=>ri.init(),enabled:t.dops},{init:()=>Ri.init(),enabled:t.constellations},{init:()=>p.init(),enabled:t.countries},{init:()=>Vt.init(),enabled:t.colorsMenu},{init:()=>Yi.init(),enabled:t.screenshot},{init:()=>bi.init(),enabled:t.launchCalendar},{init:()=>ya.M.init(),enabled:t.timeMachine},{init:()=>Bi.init(),enabled:t.photoManager},{init:()=>Vi.init(),enabled:t.screenRecorder},{init:()=>ct.init(),enabled:t.analysis},{init:()=>ba.H.init(),enabled:t.settingsMenu},{init:()=>Qe.init(),enabled:t.soundManager},{init:()=>hi.init(),enabled:t.gamepad},{init:()=>Na.init(),enabled:t.videoDirector}];for(const{init:e,enabled:t}of i)t&&e();t.topMenu||document.documentElement.style.setProperty("--nav-bar-height","0px"),e.register({event:o.RL.uiManagerFinal,cbName:"core",cb:()=>{Ia(t)}})}catch(e){f.x.info(`Error loading core plugins:${e.message}`)}},Ia=e=>{const t=(0,s.Gn)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",`${e}px`)}else document.documentElement.style.setProperty("--bottom-menu-height","0px");(0,s.Gn)("bottom-icons")&&""==(0,s.Gn)("bottom-icons").innerText?((0,s.Gn)("nav-footer").style.visibility="hidden",(0,s.UT)("nav-footer")):(0,s.K4)("nav-footer");const i=(0,s.Gn)("bottom-icons-container");if(i){const e=i.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",`${e}px`)}e.aboutManager&&((0,s.Gn)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"keeptrack.space"!==window.location.hostname&&"www.keeptrack.space"!==window.location.hostname||Ra(),(0,s.Gn)("bottom-icons-container").addEventListener("mousewheel",(e=>{e.preventDefault(),((e,t)=>{const i=e.scrollTop+.15*t;e.scrollTop=i})(e.currentTarget,e.deltaY)}),{passive:!1})},Ra=()=>{const e=document.createElement("script");e.type="text/javascript",e.setAttribute("async","true"),e.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7"),document.documentElement.firstChild.appendChild(e),window.dataLayer=window.dataLayer||[];const t=function(e,t){window.dataLayer.push(arguments)};t("js",new Date),t("config","G-ENHWK6L0X7")}}}]);