"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[665],{2378:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(3835),n=i.n(a),s=i(8645),o=i.n(s)()(n());o.push([e.id,"#collisions-table {\n  line-height: 0.05;\n  font-size: 13px;\n}\n\n#collisions-table td {\n  text-align: center;\n}\n",""]);const l=o},3862:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(3835),n=i.n(a),s=i(8645),o=i.n(s)()(n());o.push([e.id,"#reset-sensor-button {\n  margin: 10px 0px;\n}\n\n#reset-sensor-text {\n  text-align: center;\n}\n\n#list-of-sensors li:first-child {\n  display: none;\n}\n\n#sensor-list-content ul li {\n  padding: 2px !important;\n  overflow: hidden !important;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n/* First span goes left */\n#sensor-list-content ul li span:first-child {\n  float: left;\n  text-align: left;\n}\n\n/* Second span is centered */\n#sensor-list-content ul li span:nth-child(2) {\n  text-align: center;\n}\n\n/* Third span goes right */\n#sensor-list-content ul li span:last-child {\n  float: right;\n  text-align: right;\n}\n",""]);const l=o},6743:(e,t,i)=>{i.r(t),i.d(t,{CanvasRecorder:()=>Ii,catalogLoader:()=>tt,loadPlugins:()=>fa,missile:()=>a,startGoogleAnalytics:()=>Ca,uiManagerFinal:()=>Ma});var a={};i.r(a),i.d(a,{bottomMenuClick:()=>I,hideSideMenus:()=>_,init:()=>B,missileChange:()=>R,missileSubmit:()=>D,msAttackerChange:()=>H,msErrorClick:()=>P,msTargetChange:()=>O,onHelpMenuClick:()=>z,searchForRvs:()=>U,uiManagerFinal:()=>$,uiManagerInit:()=>F,updateLoop:()=>G});var n=i(8386),s=i(165),o=i(2833),l=i(3938),r=i(1520),c=i(8104);const d=i.p+"../img/flag.png";var u=i(8475),p=i(9085),m=i(5514);class h extends u.c{constructor(){super(h.PLUGIN_NAME),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=d,this.bottomIconLabel="Countries",this.sideMenuElementHtml=l.b.html`
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
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=l.b.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("country-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>{var t;null===(t=l.b.getSoundManager())||void 0===t||t.play(m.p.CLICK),h.countryMenuClick_(e.getAttribute("data-group"))}))})),(0,n.E)((0,s.Gn)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=l.b.getGroupsManager(),i=c.n.getCountryCode(e);if(""===i)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(r.Y.COUNTRY,i,e),h.groupSelected_(e)}static groupSelected_(e){var t;const i=l.b.getGroupsManager(),a=l.b.getCatalogManager(),n=l.b.getUiManager(),o=(0,s.Gn)("search");void 0!==e&&void 0!==i.groupList[e]&&(i.selectGroup(i.groupList[e]),i.groupList[e].ids.length<settingsManager.searchLimit?n.searchManager.doSearch(i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1)):(o.value=i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1),n.searchManager.fillResultBox(i.groupList[e].ids.map((e=>({id:e}))),a)),null===(t=l.b.getPlugin(p.P))||void 0===t||t.selectSat(-1),settingsManager.isMobileModeEnabled&&n.searchManager.closeSearch(),n.hideSideMenus())}}h.PLUGIN_NAME="Countries Menu";const g=new h;var b=i(2376),v=i(3384),f=i(6002);const S=i.p+"../img/find2.png";var M=i(9772),C=i(5347);class L extends u.c{static checkAz(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,C.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.az>=t&&a.az<=i}))}static checkEl(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,C.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.el>=t&&a.el<=i}))}static checkInview(e){const t=l.b.getDotsManager();return e.filter((e=>1===t.inViewData[e.id]))}static checkObjtype(e,t){return e.filter((e=>e.type===t))}static checkRange(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,C.Zn)(l.b.getTimeManager().simulationTimeObj,l.b.getCatalogManager().getSat(e.id,o.C_.POSITION_ONLY).position,l.b.getSensorManager().currentSensors[0]);return a.rng>=t&&a.rng<=i}))}static limitPossibles(e,t){const i=l.b.getUiManager();return e.length>=t&&i.toast(`Too many results, limited to ${t}`,"serious"),e.slice(0,t)}static searchSats(e){let{az:t,el:i,rng:a,countryCode:n,inc:o,azMarg:r,elMarg:c,rngMarg:d,incMarg:u,period:p,periodMarg:m,rcs:h,rcsMarg:g,objType:b,raan:v,raanMarg:f,argPe:S,argPeMarg:C,bus:y,shape:A,payload:T}=e;const E=!isNaN(t)&&isFinite(t),w=!isNaN(i)&&isFinite(i),k=!isNaN(a)&&isFinite(a),x=!isNaN(o)&&isFinite(o),N=!isNaN(v)&&isFinite(v),G=!isNaN(S)&&isFinite(S),_=!isNaN(p)&&isFinite(p),I=!isNaN(h)&&isFinite(h),R="All"!==n,P="All"!==y,O="All"!==A,D="All"!==T;if(r=!isNaN(r)&&isFinite(r)?r:5,c=!isNaN(c)&&isFinite(c)?c:5,d=!isNaN(d)&&isFinite(d)?d:200,u=!isNaN(u)&&isFinite(u)?u:1,m=!isNaN(m)&&isFinite(m)?m:.5,g=!isNaN(g)&&isFinite(g)?g:h/10,f=!isNaN(f)&&isFinite(f)?f:1,C=!isNaN(C)&&isFinite(C)?C:1,!(w||k||E||x||_||I||G||N||R||P||O||D))throw new Error("No Search Criteria Entered");let F=l.b.getCatalogManager().getSats();if(F=x||_||!(E||w||k)?F:L.checkInview(F),F=0!==b?L.checkObjtype(F,b):F,E&&(F=L.checkAz(F,t-r,t+r)),w&&(F=L.checkEl(F,i-c,i+c)),k&&(F=L.checkRange(F,a-d,a+d)),x&&(F=L.checkInc(F,o-u,o+u)),N&&(F=L.checkRightAscension(F,v-f,v+f)),G&&(F=L.checkArgPe(F,S-C,S+C)),_&&(F=L.checkPeriod(F,p-m,p+m)),I&&(F=L.checkRcs(F,h-g,h+g)),"All"!==n){let e=n.split("|").map((e=>M.Aj[e]));e=e.filter(((t,i)=>t&&e.indexOf(t)===i)),F=F.filter((t=>e.includes(t.country)))}"All"!==y&&(F=F.filter((e=>e.bus===y))),"All"!==A&&(F=F.filter((e=>e.shape===A))),"All"!==T&&(F=F.filter((e=>{var t,i,a;return(null===(a=null===(i=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===i?void 0:i.split("-")[0])||void 0===a?void 0:a.replace(/[^a-zA-Z]/gu,""))===T}))),F=L.limitPossibles(F,settingsManager.searchLimit);let U="";return F.forEach(((e,t)=>{U+=t<F.length-1?`${e.sccNum},`:`${e.sccNum}`})),(0,s.Gn)("search").value=U,l.b.getUiManager().doSearch((0,s.Gn)("search").value),F}findByLooksSubmit(){return e=this,t=void 0,a=function*(){const e=l.b.getUiManager(),t=parseFloat((0,s.Gn)("fbl-azimuth").value),i=parseFloat((0,s.Gn)("fbl-elevation").value),a=parseFloat((0,s.Gn)("fbl-range").value),n=parseFloat((0,s.Gn)("fbl-inc").value),o=parseFloat((0,s.Gn)("fbl-period").value),r=parseFloat((0,s.Gn)("fbl-rcs").value),c=parseFloat((0,s.Gn)("fbl-azimuth-margin").value),d=parseFloat((0,s.Gn)("fbl-elevation-margin").value),u=parseFloat((0,s.Gn)("fbl-range-margin").value),p=parseFloat((0,s.Gn)("fbl-inc-margin").value),m=parseFloat((0,s.Gn)("fbl-period-margin").value),h=parseFloat((0,s.Gn)("fbl-rcs-margin").value),g=parseInt((0,s.Gn)("fbl-type").value),b=parseFloat((0,s.Gn)("fbl-raan").value),v=parseFloat((0,s.Gn)("fbl-raan-margin").value),f=parseFloat((0,s.Gn)("fbl-argPe").value),S=parseFloat((0,s.Gn)("fbl-argPe-margin").value),M=(0,s.Gn)("fbl-country").value,C=(0,s.Gn)("fbl-bus").value,y=(0,s.Gn)("fbl-payload").value,A=(0,s.Gn)("fbl-shape").value;(0,s.Gn)("search").value="";try{const s={az:t,el:i,rng:a,inc:n,azMarg:c,elMarg:d,rngMarg:u,incMarg:p,period:o,periodMarg:m,rcs:r,rcsMarg:h,objType:g,raan:b,raanMarg:v,argPe:f,argPeMarg:S,countryCode:M,bus:C,payload:y,shape:A};this.lastResults=L.searchSats(s),0===this.lastResults.length&&e.toast("No Satellites Found","critical")}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered","critical")}},new((i=void 0)||(i=Promise))((function(n,s){function o(e){try{r(a.next(e))}catch(e){s(e)}}function l(e){try{r(a.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}));var e,t,i,a}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerInit,cbName:"findSat",cb:()=>{(0,s.Gn)("fbl-error").addEventListener("click",(()=>{(0,s.Gn)("fbl-error").style.display="none"}))}}),l.b.register({event:o.RL.uiManagerFinal,cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}constructor(){super(L.PLUGIN_NAME),this.lastResults=[],this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=l.b.html`
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
`}printLastResults(){f.x.info(this.lastResults.map((e=>e.name)).join("\n"))}uiManagerFinal(){const e=l.b.getCatalogManager().objectCache;(0,s.Gn)("findByLooks-form").addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>{this.findByLooksSubmit(),(0,v.Zk)()}))})),(0,b.d)(e.filter((e=>null==e?void 0:e.bus)).map((e=>e.bus))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,s.Gn)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})),M.hA.forEach((e=>{(0,s.Gn)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${M.cs[e]}">${e}</option>`)})),(0,b.d)(e.filter((e=>null==e?void 0:e.shape)).map((e=>e.shape))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,s.Gn)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}));const t=e.filter((e=>null==e?void 0:e.payload)).map((e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,""))).filter((e=>e.length>=3));(0,b.d)(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{""!==e&&e.length>3&&(0,s.Gn)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}))}static checkArgPe(e,t,i){return e.filter((e=>e.argOfPerigee<i&&e.argOfPerigee>t))}static checkInc(e,t,i){return e.filter((e=>e.inclination<i&&e.inclination>t))}static checkPeriod(e,t,i){return e.filter((e=>e.period>t&&e.period<i))}static checkRightAscension(e,t,i){return e.filter((e=>e.rightAscension<i&&e.rightAscension>t))}static checkRcs(e,t,i){return e.filter((e=>e.rcs>t&&e.rcs<i))}}L.PLUGIN_NAME="findSat";var y=i(6633);const A=i.p+"../img/missile.png";var T=i(8437);const E=l.b.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var w=i(2869);let k=!1,x=!1,N=0;const G=()=>{if(void 0!==w.CC&&w.CC.missileArray.length>0){const e=l.b.getOrbitManager();for(N=0;N<w.CC.missileArray.length;N++)e.updateOrbitBuffer(w.CC.missileArray[N].id)}},_=()=>{(0,y.kW)((0,s.Gn)("missile-menu"),1e3),(0,s.Gn)("menu-missile").classList.remove("bmenu-item-selected"),k=!1},I=e=>{if("menu-missile"===e){const e=l.b.getUiManager();k?(k=!1,e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.closeSearch(),e.hideSideMenus(),(0,y.$k)((0,s.Gn)("missile-menu"),1e3),(0,s.Gn)("menu-missile").classList.add("bmenu-item-selected"),k=!0)}},R=()=>{0!==parseFloat((0,s.Gn)("ms-type").value)?(0,s.Gn)("ms-custom-opt").style.display="none":(0,s.Gn)("ms-custom-opt").style.display="block"},P=()=>{(0,s.Gn)("ms-error").style.display="none"},O=()=>{-1!==parseInt((0,s.Gn)("ms-target").value)?((0,s.Gn)("ms-tgt-holder-lat").style.display="none",(0,s.Gn)("ms-tgt-holder-lon").style.display="none"):((0,s.Gn)("ms-tgt-holder-lat").style.display="block",(0,s.Gn)("ms-tgt-holder-lon").style.display="block")},D=()=>{(0,v.QP)((()=>{const e=l.b.getTimeManager(),t=l.b.getUiManager();(0,s.Gn)("ms-error").style.display="none";const i=parseFloat((0,s.Gn)("ms-type").value),a=parseFloat((0,s.Gn)("ms-attacker").value);let n=parseFloat((0,s.Gn)("ms-lat-lau").value),o=parseFloat((0,s.Gn)("ms-lon-lau").value);const r=parseFloat((0,s.Gn)("ms-target").value);let c=parseFloat((0,s.Gn)("ms-lat").value),d=parseFloat((0,s.Gn)("ms-lon").value);const u=e.selectedDate.getTime();let p="";if(1===i&&(p="simulation/Russia2USA.json",w.CC.MassRaidPre(u,p)),2===i&&(p="simulation/Russia2USAalt.json",w.CC.MassRaidPre(u,p)),3===i&&(p="simulation/China2USA.json",w.CC.MassRaidPre(u,p)),4===i&&(p="simulation/NorthKorea2USA.json",w.CC.MassRaidPre(u,p)),5===i&&(p="simulation/USA2Russia.json",w.CC.MassRaidPre(u,p)),6===i&&(p="simulation/USA2China.json",w.CC.MassRaidPre(u,p)),7===i&&(p="simulation/USA2NorthKorea.json",w.CC.MassRaidPre(u,p)),0!==i&&t.toast(`${p} Loaded`,"standby",!0),0===i){if(-1===r){if(isNaN(c))return t.toast("Invalid Target Latitude!","critical"),void((0,s.Gn)("loading-screen").style.display="none");if(isNaN(d))return t.toast("Invalid Target Longitude!","critical"),void((0,s.Gn)("loading-screen").style.display="none")}else c=w.CC.globalBMTargets[3*r],d=w.CC.globalBMTargets[3*r+1];if(x){if(isNaN(n))return t.toast("Invalid Launch Latitude!","critical"),void((0,s.Gn)("loading-screen").style.display="none");if(isNaN(o))return t.toast("Invalid Launch Longitude!","critical"),void((0,s.Gn)("loading-screen").style.display="none")}let e,i;const p=l.b.getCatalogManager();if(a<200){e=a-100,i=500-w.CC.missilesInUse;let t=1200;100!=a&&(n=w.CC.UsaICBM[4*e],o=w.CC.UsaICBM[4*e+1],t=1100),w.CC.createMissile(n,o,c,d,3,p.missileSats-i,u,w.CC.UsaICBM[4*e+2],30,2.9,.07,w.CC.UsaICBM[4*e+3],"United States",t)}else if(a<300){e=a-200,i=500-w.CC.missilesInUse;const t=1120;213!=a&&214!=a&&215!=a&&(n=w.CC.RussianICBM[4*e],o=w.CC.RussianICBM[4*e+1]),w.CC.createMissile(n,o,c,d,3,p.missileSats-i,u,w.CC.RussianICBM[4*e+2],30,2.9,.07,w.CC.RussianICBM[4*e+3],"Russia",t)}else if(a<400){e=a-300,i=500-w.CC.missilesInUse;const t=1120;321!=a&&(n=w.CC.ChinaICBM[4*e],o=w.CC.ChinaICBM[4*e+1]),w.CC.createMissile(n,o,c,d,3,p.missileSats-i,u,w.CC.ChinaICBM[4*e+2],30,2.9,.07,w.CC.ChinaICBM[4*e+3],"China",t)}else if(a<500){e=a-400,i=500-w.CC.missilesInUse;const t=1120;400!=a&&(n=w.CC.NorthKoreanBM[4*e],o=w.CC.NorthKoreanBM[4*e+1]),w.CC.createMissile(n,o,c,d,3,p.missileSats-i,u,w.CC.NorthKoreanBM[4*e+2],30,2.9,.07,w.CC.NorthKoreanBM[4*e+3],"North Korea",t)}else if(a<600){e=a-500,i=500-w.CC.missilesInUse;const t=1e3;500!=a&&(n=w.CC.FraSLBM[4*e],o=w.CC.FraSLBM[4*e+1]),w.CC.createMissile(n,o,c,d,3,p.missileSats-i,u,w.CC.FraSLBM[4*e+2],30,2.9,.07,w.CC.FraSLBM[4*e+3],"France",t)}else if(a<700){e=a-600,i=500-w.CC.missilesInUse;const t=1200;600!=a&&(n=w.CC.ukSLBM[4*e],o=w.CC.ukSLBM[4*e+1]),w.CC.createMissile(n,o,c,d,3,p.missileSats-i,u,w.CC.ukSLBM[4*e+2],30,2.9,.07,w.CC.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(w.CC.lastMissileError,w.CC.lastMissileErrorType),t.doSearch("RV_")}(0,s.Gn)("loading-screen").style.display="none"}))},F=()=>{(0,s.Gn)("left-menus").insertAdjacentHTML("beforeend",l.b.html`
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
            src="" delayedsrc=${A}
          />
          <span class="bmenu-title">Missile</span>
          <div class="status-icon"></div>
        </div>
        `)},U=()=>{l.b.getUiManager().doSearch("RV_")},$=()=>{(0,n.E)((0,s.Gn)("missile-menu")),(0,s.Gn)("missile").addEventListener("submit",(e=>{e.preventDefault(),D()})),(0,s.Gn)("ms-attacker").addEventListener("change",H),(0,s.Gn)("ms-target").addEventListener("change",O),(0,s.Gn)("ms-error").addEventListener("click",P),(0,s.Gn)("missile").addEventListener("change",R),(0,s.Gn)("searchRvBtn").addEventListener("click",U),H(),O()},B=()=>{l.b.register({event:o.RL.uiManagerInit,cbName:"missile",cb:F}),l.b.register({event:o.RL.uiManagerFinal,cbName:"missile",cb:$}),l.b.register({event:o.RL.bottomMenuClick,cbName:"missile",cb:I}),l.b.register({event:o.RL.hideSideMenus,cbName:"missile",cb:_}),l.b.register({event:o.RL.updateLoop,cbName:"updateMissileOrbits",cb:G}),l.b.register({event:o.RL.onHelpMenuClick,cbName:"missile",cb:z})},z=()=>!!k&&(T.v.showAdvice("Missile Menu",E),!0),H=()=>{x=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,s.Gn)("ms-attacker").value)&&(x=!0);x?((0,s.Gn)("ms-lau-holder-lat").style.display="block",(0,s.Gn)("ms-lau-holder-lon").style.display="block"):((0,s.Gn)("ms-lau-holder-lat").style.display="none",(0,s.Gn)("ms-lau-holder-lon").style.display="none")};var j=i(3786),V=i(6731);const K=i.p+"../img/sat3.png";class Y extends u.c{constructor(){super(Y.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=K,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{l.b.getMainCamera().cameraType===V.i.SATELLITE?(l.b.getUiManager().hideSideMenus(),l.b.getMainCamera().cameraType=V.i.FIXED_TO_SAT,(0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected")):-1!==this.selectSatManager_.selectedSat?(l.b.getMainCamera().cameraType=V.i.SATELLITE,(0,s.Gn)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(l.b.getUiManager().toast("Select a Satellite First!","caution"),(0,j.l)((0,s.Gn)(this.bottomIconElementName)))},this.lastLongAudioTime=0,this.selectSatManager_=l.b.getPlugin(p.P)}}Y.PLUGIN_NAME="Satellite View";var J=i(8769);const X=i.p+"../audio/beep1.mp3",W=i.p+"../audio/button.mp3",q=i.p+"../audio/button2.mp3",Z=i.p+"../audio/chatter1.mp3",Q=i.p+"../audio/chatter2.mp3",ee=i.p+"../audio/chatter3.mp3",te=i.p+"../audio/chatter4.mp3",ie=i.p+"../audio/chatter5.mp3",ae=i.p+"../audio/chatter6.mp3",ne=i.p+"../audio/chatter7.mp3",se=i.p+"../audio/chatter8.mp3",oe=i.p+"../audio/click10.mp3",le=i.p+"../audio/click11.mp3",re=i.p+"../audio/click12.mp3",ce=i.p+"../audio/click13.mp3",de=i.p+"../audio/click14.mp3",ue=i.p+"../audio/click15.mp3",pe=i.p+"../audio/click16.mp3",me=i.p+"../audio/click17.mp3",he=i.p+"../audio/click18.mp3",ge=i.p+"../audio/click19.mp3",be=i.p+"../audio/click2.mp3",ve=i.p+"../audio/click20.mp3",fe=i.p+"../audio/click21.mp3",Se=i.p+"../audio/click22.mp3",Me=i.p+"../audio/click23.mp3",Ce=i.p+"../audio/click24.mp3",Le=i.p+"../audio/click25.mp3",ye=i.p+"../audio/click26.mp3",Ae=i.p+"../audio/click27.mp3",Te=i.p+"../audio/click28.mp3",Ee=i.p+"../audio/click29.mp3",we=i.p+"../audio/click3.mp3",ke=i.p+"../audio/click30.mp3",xe=i.p+"../audio/click4.mp3",Ne=i.p+"../audio/click7.mp3",Ge=i.p+"../audio/click8.mp3",_e=i.p+"../audio/error.mp3",Ie=i.p+"../audio/error2.mp3",Re=i.p+"../audio/export.wav",Pe=i.p+"../audio/genericBeep1.mp3",Oe=i.p+"../audio/genericBeep2.mp3",De=i.p+"../audio/genericBeep3.mp3",Fe=i.p+"../audio/liftoff.mp3",Ue=i.p+"../audio/loading.wav",$e=i.p+"../audio/pop.mp3",Be=i.p+"../audio/switch.mp3",ze=i.p+"../audio/toggle-off.mp3",He=i.p+"../audio/toggle-on.mp3",je=i.p+"../audio/whoosh1.mp3",Ve=i.p+"../audio/whoosh2.mp3",Ke=i.p+"../audio/whoosh3.mp3",Ye=i.p+"../audio/whoosh4.mp3",Je=i.p+"../audio/whoosh5.mp3",Xe=i.p+"../audio/whoosh6.mp3",We=i.p+"../audio/whoosh7.mp3",qe=i.p+"../audio/whoosh8.mp3";class Ze extends u.c{constructor(){super("Sound Manager"),this.lastLongAudioTime=0,this.isMute=!1,this.currentChatterClip_=0,this.voices=[],this.maxClickClip_=0,this.sounds={standby:new Audio($e),error1:new Audio(_e),error2:new Audio(Ie),export:new Audio(Re),click:new Audio(Be),beep1:new Audio(X),genericBeep1:new Audio(Pe),genericBeep2:new Audio(Oe),genericBeep3:new Audio(De),whoosh1:new Audio(je),whoosh2:new Audio(Ve),whoosh3:new Audio(Ke),whoosh4:new Audio(Ye),whoosh5:new Audio(Je),whoosh6:new Audio(Xe),whoosh7:new Audio(We),whoosh8:new Audio(qe),click1:new Audio(ke),click2:new Audio(be),click3:new Audio(we),click4:new Audio(xe),click5:new Audio(Ee),click6:new Audio(Ae),click7:new Audio(Ne),click8:new Audio(Ge),click9:new Audio(Te),click10:new Audio(oe),click11:new Audio(le),click12:new Audio(re),click13:new Audio(ce),click14:new Audio(de),click15:new Audio(ue),click16:new Audio(pe),click17:new Audio(me),click18:new Audio(he),click19:new Audio(ge),click20:new Audio(ve),click21:new Audio(fe),click22:new Audio(Se),click23:new Audio(Me),click24:new Audio(Ce),click25:new Audio(Le),click26:new Audio(ye),chatter1:new Audio(Z),chatter2:new Audio(Q),chatter3:new Audio(ee),chatter4:new Audio(te),chatter5:new Audio(ie),chatter6:new Audio(ae),chatter7:new Audio(ne),chatter8:new Audio(se),loading:new Audio(Ue),button:new Audio(W),menuButton:new Audio(q),toggleOn:new Audio(He),toggleOff:new Audio(ze),liftoff:new Audio(Fe)},this.addJs=()=>{super.addJs(),J.I.registerSingleton(o.Yv.SoundManager,this),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{this.voices=speechSynthesis.getVoices()}}),this.sounds.loading.volume=.25,this.sounds.export.volume=.3,this.sounds.error2.volume=.5},Object.keys(this.sounds).forEach((e=>{if(e.startsWith("click")){const t=parseInt(e.replace("click",""));t>this.maxClickClip_&&(this.maxClickClip_=t)}}))}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter((e=>"Google UK English Female"==e.name))[0],window.speechSynthesis.speak(t)}stop(e,t=!0){if(e===m.p.CHATTER){clearTimeout(this.nextChatter);for(let e=1;e<=8;e++)this.stop(`chatter${e}`,t);return}const i=this.sounds[e];t&&Ze.fadeOut_(i)}static fadeOut_(e,t=1e3){const i=e.volume,a=t/10,n=e.volume/a;let s=0;const o=setInterval((()=>{s++,e.volume>.05&&(e.volume-=n),s===a&&(e.pause(),e.currentTime=0,clearInterval(o),e.volume=i)}),10)}play(e){var t;if(!(null===(t=navigator.userActivation)||void 0===t?void 0:t.hasBeenActive))return;if(this.isMute)return;if((0,s.Gn)("loading-screen").classList.contains("fullscreen"))return;let i,a=1;switch(e){case m.p.BEEP:return a=Math.floor(3*Math.random())+1,i=this.sounds[`genericBeep${a}`],void i.play();case m.p.WHOOSH:return a=Math.floor(8*Math.random())+1,i=this.sounds[`whoosh${a}`],void i.play();case m.p.ERROR:if(this.lastLongAudioTime+12e5>Date.now())return;return this.lastLongAudioTime=Date.now(),a=Math.floor(2*Math.random())+1,i=this.sounds[`error${a}`],void i.play();case m.p.CLICK:return a=Math.floor(Math.random()*this.maxClickClip_)+1,i=this.sounds[`click${a}`],i.volume=.25,void i.play();case m.p.CHATTER:return a=Math.floor(8*Math.random())+1,a===this.currentChatterClip_&&(a++,a>8&&(a=1)),i=this.sounds[`chatter${a}`],i.volume=.15,this.stop(m.p.CHATTER,!1),i.play(),void(this.nextChatter=setTimeout((()=>{this.play(m.p.CHATTER)}),1e3*i.duration+1e4));default:i=this.sounds[e],i.play()}}}const Qe=new Ze;var et=i(4601),tt=i(3447),it=i(5459),at=i(1352),nt=i(3967);class st{static exportTle2Csv(e,t=!0){try{const i=[],a=e.filter((e=>e.isSatellite()&&e.tle1));if(0===a.length)return void f.x.info("No TLE data to export");a.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of a)void 0!==e.tle1&&void 0!==e.tle2&&(t&&"ANALSAT"===e.country||i.push({satId:e.sccNum,name:e.name,tle1:e.tle1,tle2:e.tle2,inclination:e.inclination,eccentricity:e.eccentricity,period:e.period,raan:e.rightAscension,apogee:e.apogee,perigee:e.perigee,country:e.country,site:e.launchSite,rocket:e.launchVehicle,rcs:e.rcs,visualMagnitude:e.vmag,user:e.user,mission:e.mission,purpose:e.purpose,contractor:e.manufacturer,dryMass:e.dryMass,liftMass:e.launchMass,lifeExpected:e.lifetime,power:e.power}));(0,at.Eb)(i,"catalogInfo")}catch(e){}}static exportSatInFov2Csv(e){const t=e.filter((e=>{var t;return e.isSatellite()&&e.tle1&&1===(null===(t=l.b.getDotsManager().inViewData)||void 0===t?void 0:t[e.id])})).map((e=>{const t=e;return{satId:t.sccNum,name:t.name,country:t.country,apogee:t.apogee,perigee:t.perigee}}));(0,at.Eb)(t,"satInView")}static exportTle2Txt(e,t=2,i=!0){try{const a=[],n=e.filter((e=>e.isSatellite()&&e.tle1));if(0===n.length)return void f.x.info("No TLE data to export");n.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of n)void 0!==e.tle1&&void 0!==e.tle2&&(i&&"ANALSAT"===e.country||(3===t&&a.push(e.name),e.tle1.includes("NO TLE")&&console.log(e.sccNum),e.tle2.includes("NO TLE")&&console.log(e.sccNum),a.push(e.tle1),a.push(e.tle2)));const s=a.join("\n"),o=new Blob([s],{type:"text/plain;charset=utf-8"});(0,nt.saveAs)(o,"TLE.txt")}catch(e){}}}var ot=i(9991);const lt=i.p+"../img/analysis.png";class rt extends u.c{addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"analysis",cb:()=>{var e,t,i,a,o,r,c,d,u;null===(e=(0,s.Gn)("analysis-bpt"))||void 0===e||e.addEventListener("submit",(e=>{e.preventDefault(),rt.analysisBptSumbit_()})),null===(t=(0,s.Gn)("findCsoBtn"))||void 0===t||t.addEventListener("click",(()=>{(0,v.QP)(this.findCsoBtnClick_.bind(this))})),null===(i=(0,s.Gn)("findReentries"))||void 0===i||i.addEventListener("click",(()=>{(0,v.QP)(rt.findRaBtnClick_)}));const p=l.b.getCatalogManager().objectCache;null===(a=(0,s.Gn)("export-catalog-csv-btn"))||void 0===a||a.addEventListener("click",(()=>{st.exportTle2Csv(p)})),null===(o=(0,s.Gn)("export-sat-fov-csv-btn"))||void 0===o||o.addEventListener("click",(()=>{st.exportSatInFov2Csv(p)})),null===(r=(0,s.Gn)("export-catalog-txt-2a"))||void 0===r||r.addEventListener("click",(()=>{st.exportTle2Txt(p)})),null===(c=(0,s.Gn)("export-catalog-txt-2b"))||void 0===c||c.addEventListener("click",(()=>{st.exportTle2Txt(p,2,!1)})),null===(d=(0,s.Gn)("export-catalog-txt-3a"))||void 0===d||d.addEventListener("click",(()=>{st.exportTle2Txt(p,3)})),null===(u=(0,s.Gn)("export-catalog-txt-3b"))||void 0===u||u.addEventListener("click",(()=>{st.exportTle2Txt(p,3,!1)})),(0,n.E)((0,s.Gn)("analysis-menu"))}}),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{rt.setSensor_(e)}})}findCloseObjects(){if(this.searchStrCache_)return this.searchStrCache_;let e=rt.getValidSats_();e=(0,b.d)(e),e.sort(((e,t)=>e.position.x-t.position.x));const t=rt.getPossibleCSOs_(e,50),i=(0,b.d)(t),a=rt.getActualCSOs_(i,50),n=Array.from(new Set(a));let s="";for(let e=0;e<n.length;e++)e==n.length-1?s+=n[e]:s+=`${n[e]},`;return this.searchStrCache_=s,s}static getActualCSOs_(e,t){const i=[];for(const t of e){let e=t.sat1,i=it.$.getEci(e,new Date(Date.now()+18e5));i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(t.sat1.position=i.position,e=t.sat2,i=it.$.getEci(e,new Date(Date.now()+18e5)),i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(e.position=i.position,t.sat2.position=i.position))}for(const a of e){const e=a.sat1,n=e.position;if(void 0===n)continue;const s=n.x-t,o=n.x+t,l=n.y-t,r=n.y+t,c=n.z-t,d=n.z+t,u=a.sat2,p=u.position;void 0!==p&&p.x<o&&p.x>s&&p.y<r&&p.y>l&&p.z<d&&p.z>c&&(i.push(e.sccNum),i.push(u.sccNum))}return i}static getPossibleCSOs_(e,t){const i=[];for(let a=0;a<e.length;a++){const n=e[a],s=n.position,o=s.x-t,l=s.x+t,r=s.y-t,c=s.y+t,d=s.z-t,u=s.z+t;let p=0;for(p=Math.max(0,a-200);p<e.length;p++){const t=e[p];if(n==t)continue;const a=t.position;if(a.x>l)break;a.x<l&&a.x>o&&a.y<c&&a.y>r&&a.z<u&&a.z>d&&i.push({sat1:n,sat2:t})}}return i}static getValidSats_(){const e=[];for(let t=0;t<l.b.getCatalogManager().orbitalSats;t++){const i=l.b.getCatalogManager().getSat(t);i&&(void 0===i.position&&(i.position=it.$.getEci(i,new Date).position||{x:0,y:0,z:0}),isNaN(i.position.x)||isNaN(i.position.y)||isNaN(i.position.z)||i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||e.push(i))}return e}static findBestPass(e,t){const i=l.b.getTimeManager();if(t.length<=0||!t[0]||void 0===t[0].minAz)return l.b.getUiManager().toast("Sensor's format incorrect. Did you select a sensor first?","critical"),[];const a=t[0];let n=0;const s=l.b.getCatalogManager().calcSatrec(e),o=[],r=C.rE/(s.no*C.rE/C.gc);let c=0,d=null,u=null,p=null,m=null,h=a.maxRng,g=0,b=!1,v=!1;const f=(e,t)=>{const s=it.$.getRae(e,t,a);if(it.$.checkIsInView(a,s)){const o=i.getOffsetTimeObj(n-5e3);let l=it.$.getRae(o,t,a),r=it.$.checkIsInView(a,l);if(r){const o=i.getOffsetTimeObj(n+5e3);if(l=it.$.getRae(o,t,a),r=it.$.checkIsInView(a,l),!r){if(v=s.el<=3.5,null==m)return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null};c=Math.min((e.getTime()-m.getTime())/1e3/60*10/8,10);let i=Math.min(g/50*10,10);i*=b&&v?2:1,c+=i,c+=Math.min(7500/h,10);let a=0;return a=(e.getTime()-m.getTime())/1e3||0,{sortTime:m.getTime(),scc:t.satnum,score:c,startDate:m,startTime:m,startAz:d,startEl:u,startrng:p,stopDate:e,stopTime:e,stopAz:s.az.toFixed(0),stopEl:s.el.toFixed(1),stoprng:s.rng.toFixed(0),tic:a,minrng:h.toFixed(0),passMaxEl:g.toFixed(1)}}}else s.el<=3.5&&(b=!0),m=e,d=s.az.toFixed(0),u=s.el.toFixed(1),p=s.rng.toFixed(0);g<s.el&&(g=s.el),h>s.rng&&(h=s.rng)}return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null}};for(let e=0;e<604800;e+=5){n=1e3*e;const t=i.getOffsetTimeObj(n);if(o.length<=5e3){const i=f(t,s);null!==i.score&&(o.push(i),c=0,d=null,u=null,p=null,m=null,h=a.maxRng,g=0,b=!1,v=!1,e+=60*r*.75)}}return o}static findBestPasses(e,t){const i=(e=e.replace(/ /gu,",")).split(","),a=[];for(const e of i)try{if(void 0===e||null==e||""===e||" "===e)continue;const i=l.b.getCatalogManager().sccNum2Sat(parseInt(e)),n=rt.findBestPass(i,[t]);for(const e of n)a.push(e)}catch(e){console.debug(e)}a.sort(((e,t)=>t.sortTime-e.sortTime)),a.reverse(),a.forEach((e=>{delete e.sortTime}));for(const e of a)e.startDate=e.startDate.toISOString().split("T")[0],e.startTime=e.startTime.toISOString().split("T")[1].split(".")[0],e.stopDate=e.stopDate.toISOString().split("T")[0],e.stopTime=e.stopTime.toISOString().split("T")[1].split(".")[0];(0,at.Eb)(a,"bestSatTimes")}findCsoBtnClick_(){const e=this.findCloseObjects();l.b.getUiManager().doSearch(e)}static findRaBtnClick_(){const e=ot.w.findReentry(l.b.getCatalogManager().objectCache).join(",");l.b.getUiManager().doSearch(e)}static analysisBptSumbit_(){const e=(0,s.Gn)("analysis-bpt-sats").value,t=l.b.getSensorManager();t.isSensorSelected()?rt.findBestPasses(e,t.currentSensors[0]):l.b.getUiManager().toast("You must select a sensor first!","critical")}static setSensor_(e){const t=(0,s.Gn)("analysis-bpt-submit");e?(t.disabled=!1,t.textContent="Generate Best Pass Times ▶"):(t.disabled=!0,t.textContent="Select Sensor First!")}constructor(){super("Analysis Menu"),this.bottomIconElementName="analysis-bottom-icon",this.bottomIconImg=lt,this.bottomIconLabel="Analysis Menu",this.sideMenuElementName="analysis-menu",this.sideMenuElementHtml=l.b.html`
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
  </ul>`,this.searchStrCache_=null}}const ct=new rt;var dt=i(149);const ut=i.p+"../img/constellation.png",pt=i.p+"../img/planetarium.png";class mt extends u.c{constructor(){super(mt.PLUGIN_NAME),this.bottomIconElementName="menu-planetarium",this.bottomIconLabel="Planetarium View",this.bottomIconImg=pt,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.b.getRenderer(),i=l.b.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;l.b.getMainCamera().cameraType=V.i.PLANETARIUM;try{(0,s.Gn)("cspocAllSensor").style.display="none",(0,s.Gn)("mwAllSensor").style.display="none",(0,s.Gn)("mdAllSensor").style.display="none",(0,s.Gn)("esocAllSensor").style.display="none",(0,s.Gn)("llAllSensor").style.display="none",(0,s.Gn)("rusAllSensor").style.display="none",(0,s.Gn)("prcAllSensor").style.display="none"}catch(e){}dt.j.change("planetarium"),l.b.getCatalogManager().isStarManagerLoaded&&l.b.getStarManager().clearConstellations(),null===(e=l.b.getPlugin(ht))||void 0===e||e.setBottomIconToUnselected()}else l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,t.glInit(),i.hideSideMenus(),l.b.getOrbitManager().clearInViewOrbit(),l.b.getMainCamera().cameraType=V.i.DEFAULT}}addJs(){super.addJs(),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,s.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}mt.PLUGIN_NAME="Planetarium";class ht extends u.c{constructor(){super(ht.PLUGIN_NAME),this.bottomIconElementName="menu-astronomy",this.bottomIconLabel="Astronomy View",this.bottomIconImg=ut,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.b.getCatalogManager(),i=l.b.getOrbitManager(),a=l.b.getRenderer(),n=l.b.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;t.isStarManagerLoaded&&l.b.getStarManager().drawAllConstellations(),i.clearInViewOrbit(),l.b.getMainCamera().cameraType=V.i.ASTRONOMY,dt.j.change("astronomy"),null===(e=l.b.getPlugin(mt))||void 0===e||e.setBottomIconToUnselected()}else l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,a.glInit(),n.hideSideMenus(),l.b.getMainCamera().cameraType=V.i.DEFAULT,dt.j.change("default"),t.isStarManagerLoaded&&l.b.getStarManager().clearConstellations(),(0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}}addJs(){super.addJs(),l.b.register({event:o.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,s.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}ht.PLUGIN_NAME="Astronomy";var gt=i(2579);const bt=i.p+"../img/breakup.png";var vt,ft,St=i(5032);!function(e){e[e.MeanAnomaly=1]="MeanAnomaly",e[e.RightAscensionOfAscendingNode=2]="RightAscensionOfAscendingNode",e[e.ArgumentOfPerigee=3]="ArgumentOfPerigee"}(vt||(vt={})),function(e){e[e.Near=0]="Near",e[e.Success=1]="Success",e[e.Error=2]="Error",e[e.Far=3]="Far"}(ft||(ft={}));class Mt{constructor(e,t,i,a,n,s,o){this.sat=e,this.now=n,this.goalLat=t,this.goalLon=i,this.goalDirection=a,this.newMeana=null,this.newArgPer=null,this.goalAlt=s||null,this.raanOffset=o||0,this.lastLat=null,this.currentDirection=null,this.argPerCalcResults=null,this.meanACalcResults=null,this.raanCalcResults=null}rotateOrbitToLatLon(){return this.parseTle(),this.meanACalcResults=this.meanACalcLoop(this.now,this.goalDirection),this.meanACalcResults!==ft.Success?["Error","Failed to find a solution for Mean Anomaly"]:this.goalAlt>0&&this.argPerCalcLoop()!==ft.Success?["Error","Failed to find a solution for Argument of Perigee"]:(this.raanCalcResults=this.raanCalcLoop(this.raanOffset,this.now),this.raanCalcResults!==ft.Success?["Error","Failed to find a solution for Right Ascension of Ascending Node"]:[this.sat.tle1,this.sat.tle2])}argPerCalcLoop(){this.meanACalcResults=ft.Near;for(let e=0;e<3600;e+=1){let t=10*parseFloat(this.argPer)-100+e;if(t>3600&&(t-=3600),this.argPerCalcResults=this.argPerCalc(t.toString(),this.now),this.argPerCalcResults===ft.Success&&this.meanACalcResults===ft.Success&&this.currentDirection===this.goalDirection)break;if(this.argPerCalcResults===ft.Far&&(e+=49),this.argPerCalcResults===ft.Error)return ft.Error;if(this.meanACalcResults=this.meanACalcLoop2(),this.meanACalcResults===ft.Success)if(this.currentDirection!==this.goalDirection)e+=20;else if(this.argPerCalcResults===ft.Success)break;if(e=this.meanACalcResults===ft.Far?e+100:e,this.meanACalcResults===ft.Error)return ft.Error}return this.argPerCalcResults}meanACalcLoop2(){for(let e=0;e<5200;e+=1){if(this.meanACalcResults=this.meanACalc(e,this.now),this.meanACalcResults===ft.Success){if(this.currentDirection===this.goalDirection)break;e+=20}if(e=this.meanACalcResults===ft.Far?e+100:e,this.meanACalcResults===ft.Error)return ft.Error}return this.meanACalcResults}parseTle(){this.intl=this.sat.tle1.substring(9,17),this.epochyr=this.sat.tle1.substring(18,20),this.epochday=this.sat.tle1.substring(20,32),this.meanmo=this.sat.tle2.substring(52,63),this.argPer=St.J.pad0(this.sat.argOfPerigee.toFixed(4),8),this.inc=St.J.pad0(this.sat.inclination.toFixed(4),8),this.ecen=this.sat.eccentricity.toFixed(7).substring(2,9),this.TLE1Ending=this.sat.tle1.substring(32,71)}meanACalcLoop(e,t){let i=ft.Near;for(let a=0;a<5200;a+=1){if(i=this.meanACalc(a,e),i===ft.Success){if(this.currentDirection===t)break;a+=20}i===ft.Far&&(a+=100)}return i}raanCalcLoop(e,t){let i=ft.Near;for(let a=0;a<52e3&&(i=this.raanCalc(a,e,t),i!==ft.Success);a+=1)i===ft.Far&&(a+=1e3);return i}meanACalc(e,t){const i=this.sat;let a=i.satrec||C.t2.createSatrec(i.tle1,i.tle2);e/=10;const n=St.J.pad0(e.toFixed(4),8),s=St.J.pad0(i.rightAscension.toFixed(4),8),o=this.newArgPer?St.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):St.J.pad0(i.argOfPerigee.toFixed(4),8),l=i.tle1.substring(32,71),r=`1 ${i.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${l}`,c=`2 ${i.sccNum} ${this.inc} ${s} ${this.ecen} ${o} ${n} ${this.meanmo}    10`;a=C.t2.createSatrec(r,c);const d=this.getOrbitByLatLonPropagate(t,a,vt.MeanAnomaly);return d===ft.Success&&(i.tle1=r,i.tle2=c,this.newMeana=n),d}getOrbitByLatLonPropagate(e,t,i){const{m:a,gmst:n}=it.$.calculateTimeVariables(e,t),s=C.t2.propagate(t,a).position;if(isNaN(s.x)||isNaN(s.y)||isNaN(s.z))return ft.Error;const o=(0,C.K7)(s,n),{lat:l,lon:r,alt:c}=o;if(this.lastLat=this.lastLat?this.lastLat:l,i===vt.MeanAnomaly){if(l===this.lastLat)return 0;l>this.lastLat&&(this.currentDirection="N"),l<this.lastLat&&(this.currentDirection="S"),this.lastLat=l}return i===vt.MeanAnomaly&&l>this.goalLat-Mt.MAX_LAT_ERROR&&l<this.goalLat+Mt.MAX_LAT_ERROR||i===vt.RightAscensionOfAscendingNode&&r>this.goalLon-Mt.MAX_LON_ERROR&&r<this.goalLon+Mt.MAX_LON_ERROR||i===vt.ArgumentOfPerigee&&c>this.goalAlt-Mt.MAX_ALT_ERROR&&c<this.goalAlt+Mt.MAX_ALT_ERROR?ft.Success:(i!==vt.MeanAnomaly||l>this.goalLat-11&&l<this.goalLat+11)&&(i!==vt.RightAscensionOfAscendingNode||r>this.goalLon-11&&r<this.goalLon+11)?i===vt.ArgumentOfPerigee&&(c<this.goalAlt-100||c>this.goalAlt+100)?ft.Far:ft.Near:ft.Far}raanCalc(e,t,i){const a=e;e=(e/=100)>360?e-360:e;const n=St.J.pad0(e.toFixed(4),8),s=this.newArgPer?St.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):St.J.pad0(this.sat.argOfPerigee.toFixed(4),8),o=`1 ${this.sat.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${this.TLE1Ending}`,l=`2 ${this.sat.sccNum} ${this.inc} ${n} ${this.ecen} ${s} ${this.newMeana} ${this.meanmo}    10`,r=C.t2.createSatrec(o,l),c=this.getOrbitByLatLonPropagate(i,r,vt.RightAscensionOfAscendingNode);if(c===ft.Success){e=(e=(e=a/100+t)>360?e-360:e)<0?e+360:e;const i=St.J.pad0(e.toFixed(4),8),n=`2 ${this.sat.sccNum} ${this.inc} ${i} ${this.ecen} ${s} ${this.newMeana} ${this.meanmo}    10`;this.sat.tle1=o,this.sat.tle2=n}return c}argPerCalc(e,t){const i=this.newMeana,a=St.J.pad0(this.sat.rightAscension.toFixed(4),8);e=St.J.pad0((parseFloat(e)/10).toFixed(4),8);const n=`1 ${this.sat.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${this.TLE1Ending}`,s=`2 ${this.sat.sccNum} ${this.inc} ${a} ${this.ecen} ${e} ${i} ${this.meanmo}    10`,o=C.t2.createSatrec(n,s),l=this.getOrbitByLatLonPropagate(t,o,vt.ArgumentOfPerigee);return l===ft.Success&&(this.sat.tle1=n,this.sat.tle2=s,this.newArgPer=e),l}}Mt.MAX_LAT_ERROR=.1,Mt.MAX_LON_ERROR=.1,Mt.MAX_ALT_ERROR=30;var Ct=i(2402),Lt=i(9508);class yt extends u.c{constructor(){super(yt.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=bt,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;if((null==t?void 0:t.apogee)-(null==t?void 0:t.perigee)>this.maxDifApogeeVsPerigee_)return f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=l.b.html`
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
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("breakup").addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onSubmit_()))}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonActive&&(this.closeSideMenu(),f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonActive&&this.updateSccNumInMenu_()):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}updateSccNumInMenu_(){if(!this.isMenuButtonActive)return;const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);(null==e?void 0:e.isSatellite())&&((0,s.Gn)("hc-scc").value=e.sccNum)}onSubmit_(){const{simulationTimeObj:e}=l.b.getTimeManager(),t=l.b.getCatalogManager(),{satId:i,breakupCount:a,rascVariation:n,incVariation:s,meanmoVariation:o}=yt.getFormData_(t),r=t.getSat(i),c=r,d=it.$.calculateTimeVariables(e).gmst,u=(0,C.K7)(r.position,d),p=u.lat,m=u.lon,h=it.$.getDirection(r,e);"Error"===h&&f.x.warn("Cannot calculate direction of satellite. Try again later.");const g=Ct.l.currentEpoch(e);if(r.tle1=r.tle1.substring(0,18)+g[0]+g[1]+r.tle1.substring(32),l.b.getMainCamera().isAutoPitchYawToTarget=!1,r.apogee-r.perigee>this.maxDifApogeeVsPerigee_)return void f.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const b=r.apogee-r.perigee<300?0:u.alt,v=new Mt(r,p,m,h,e,b).rotateOrbitToLatLon(),S=v[0],M=v[1],L=new C.oZ(Object.assign(Object.assign({},r),{id:i,tle1:S,tle2:M,active:!0}));t.objectCache[i]=L,t.satCruncher.postMessage({typ:Lt.Bi.SAT_EDIT,id:i,tle1:S,tle2:M});const y=l.b.getOrbitManager();y.changeOrbitBufferData(i,S,M);const A=15e-5,T=r.eccentricity;let E=0;for(let i=0;i<=4&&!(E>=a);i++){const l=C.Ad.convert6DigitToA5((gt.g.ANALYST_START_ID+E).toString()),d=t.sccNum2Id(l);t.getObject(d);const g=c,b=-n/2+n*(i/4),v=r.apogee-r.perigee<300?0:u.alt;let S=new Mt(g,p,m,h,e,v,b).rotateOrbitToLatLon();if("Error"===S[0]&&(S=new Mt(g,p,m,h,new Date(e.getTime()+1),v,b).rotateOrbitToLatLon(),"Error"===S[0]))return void f.x.error(new Error(S[1]),"breakup.ts","Error creating breakup!");let L=S[0],w=S[1];for(;E<(i+1)*a/4;E++){let i=parseFloat(M.substring(8,16));i=i+Math.random()*s*2-s;const a=i.toFixed(4).padStart(8,"0");if(8!==a.length)throw new Error(`Inclination length is not 8 - ${a} - ${M}`);g.eccentricity=T,g.eccentricity+=Math.random()*A*2-A;let n=parseFloat(w.substring(52,62));n=n+Math.random()*o*2-o;const l=n.toFixed(8).padStart(11,"0");if(11!==l.length)throw new Error(`meanmo length is not 11 - ${l} - ${w}`);const r=C.Ad.convert6DigitToA5((gt.g.ANALYST_START_ID+E).toString()),c=t.sccNum2Id(r);if(L=`1 ${r}${L.substring(7)}`,w=`2 ${r} ${a} ${w.substring(17,52)}${l}${w.substring(63)}`,69!==L.length)throw new Error(`Invalid tle1: length is not 69 - ${L}`);if(69!==w.length)throw new Error(`Invalid tle1: length is not 69 - ${w}`);let d;try{d=new C.oZ(Object.assign(Object.assign({},t.objectCache[c]),{id:c,tle1:L,tle2:w,active:!0}))}catch(e){return void f.x.error(e,"breakup.ts","Error creating breakup!")}it.$.altitudeCheck(d.satrec,e)>1?(t.objectCache[c]=d,t.satCruncher.postMessage({typ:Lt.Bi.SAT_EDIT,id:c,active:!0,tle1:L,tle2:w}),y.changeOrbitBufferData(c,L,w)):f.x.warn("Breakup Generator Failed")}}a>settingsManager.searchLimit&&(settingsManager.searchLimit=a),l.b.getUiManager().doSearch(`${r.sccNum},Analyst`)}static getFormData_(e){const t=e.sccNum2Id((0,s.Gn)("hc-scc").value),i=parseFloat((0,s.Gn)("hc-per").value),a=parseFloat((0,s.Gn)("hc-inc").value),n=parseFloat((0,s.Gn)("hc-raan").value);return{satId:t,breakupCount:parseInt((0,s.Gn)("hc-count").value),rascVariation:n,incVariation:a,meanmoVariation:i}}}yt.PLUGIN_NAME="Breakup";class At{static getColors(e){let t,i;switch(e){case"Top Secret//SCI":t="#fce93a",i="black";break;case"Top Secret":t="#ff8c00",i="black";break;case"Secret":t="#ff0000",i="white";break;case"Confidential":t="#0033a0",i="white";break;case"CUI":t="#512b85",i="white";break;case"Unclassified":t="#007a33",i="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:i}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class Tt extends u.c{constructor(){super("Classification"),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1,this.containerDomId="classification-container",this.textStringDomId="classification-string",this.containerHeight=20}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateString(e=this.classificationString_,t="#ffffff",i="#000000"){this.isClassificationContainerLoaded_||this.createContainer_(),""===e?((0,s.Gn)(this.containerDomId).style.display="none",this.updateTopMenuHeight_(!1)):((0,s.Gn)(this.containerDomId).style.display="flex",this.updateTopMenuHeight_(!0)),(0,s.Gn)(this.textStringDomId).innerHTML=e;const a=(0,s.Gn)(this.containerDomId);if(a.style.fontWeight="500",At.isValidClassification(e)){const a=At.getColors(e);t=a.backgroundColor,i=a.color}a.style.backgroundColor=t,a.style.color=i,this.classificationString_=e}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:this.uiManagerInit_.bind(this)})}createContainer_(){const e=document.createElement("div");e.innerHTML=l.b.html`<span id="${this.textStringDomId}"></span>`,e.id=this.containerDomId,e.style.cssText=`\n      height: ${this.containerHeight}px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      `,l.b.containerRoot.insertBefore(e,l.b.containerRoot.firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr?(this.createContainer_(),this.updateString()):f.x.log("Classification string is empty so not loading classification bar")}updateTopMenuHeight_(e){this.isExpanded_!==e&&(document.documentElement.style.setProperty("--classification-bar-height",`${e?this.containerHeight:-this.containerHeight}px`),this.isExpanded_=e)}}new Tt;const Et=i.p+"../img/collisions.png";var wt=i(5701),kt=i.n(wt),xt=i(8236),Nt=i.n(xt),Gt=i(6080),_t=i.n(Gt),It=i(6850),Rt=i.n(It),Pt=i(7182),Ot=i.n(Pt),Dt=i(9213),Ft=i.n(Dt),Ut=i(2378),$t={};$t.styleTagTransform=Ft(),$t.setAttributes=Rt(),$t.insert=_t().bind(null,"head"),$t.domAPI=Nt(),$t.insertStyleElement=Ot(),kt()(Ut.Z,$t),Ut.Z&&Ut.Z.locals&&Ut.Z.locals;class Bt extends u.c{constructor(){super(Bt.PLUGIN_NAME),this.collisionDataSrc="./tle/SOCRATES.json",this.selectSatIdOnCruncher_=null,this.collisionList_=[],this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=Et,this.bottomIconLabel="Collisions",this.sideMenuElementName="collisions-menu",this.sideMenuElementHtml=l.b.html`
  <div id="collisions-menu" class="side-menu-parent start-hidden text-select">
    <div id="collisions-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible Collisions</h5>
        <table id="collisions-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=l.b.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.dragOptions={isDraggable:!0,minWidth:540,maxWidth:650},this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.parseCollisionData_()}}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:this.uiManagerFinal_.bind(this)}),l.b.register({event:o.RL.onCruncherMessage,cbName:this.PLUGIN_NAME,cb:()=>{var e;null!==this.selectSatIdOnCruncher_&&(null===(e=l.b.getPlugin(p.P))||void 0===e||e.selectSat(this.selectSatIdOnCruncher_),this.selectSatIdOnCruncher_=null)}})}uiManagerFinal_(){(0,s.Gn)(this.sideMenuElementName).addEventListener("click",(e=>{(0,v.QP)((()=>{var t;const i=e.target.parentElement;if(!i.classList.contains("collisions-object"))return;const a=null===(t=i.dataset)||void 0===t?void 0:t.row;null!==a&&this.eventClicked_(parseInt(a))}))}))}parseCollisionData_(){0===this.collisionList_.length&&fetch(this.collisionDataSrc).then((e=>{e.json().then((e=>{this.collisionList_=e,this.createTable_(),0===this.collisionList_.length&&f.x.warn("No collisions data found!")}))}))}eventClicked_(e){const t=new Date;l.b.getTimeManager().changeStaticOffset(new Date(this.collisionList_[e].toca).getTime()-t.getTime()-3e4),l.b.getMainCamera().isAutoPitchYawToTarget=!1;const i=this.collisionList_[e].sat1.padStart(5,"0"),a=this.collisionList_[e].sat2.padStart(5,"0");l.b.getUiManager().doSearch(`${i},${a}`);const n=l.b.getCatalogManager();this.selectSatIdOnCruncher_=n.sccNum2Id(parseInt(i))}createTable_(){try{const e=(0,s.Gn)("collisions-table");e.innerHTML="",Bt.createHeaders_(e),this.createBody_(e)}catch(e){f.x.warn("Error processing SOCRATES data!")}}createBody_(e){for(let t=0;t<this.collisionList_.length;t++)this.createRow_(e,t)}static createHeaders_(e){const t=e.insertRow(),i=["TOCA","#1","#2","Max Prob","Min Range (km)","Rel Speed (km/s)"];for(const e of i){const i=t.insertCell();i.appendChild(document.createTextNode(e)),i.setAttribute("style","text-decoration: underline")}}createRow_(e,t){const i=e.insertRow();return i.setAttribute("class","collisions-object link"),i.setAttribute("data-row",t.toString()),Bt.createCell_(i,this.collisionList_[t].toca.slice(0,19).replace("T"," ")),Bt.createCell_(i,this.collisionList_[t].sat1),Bt.createCell_(i,this.collisionList_[t].sat2),Bt.createCell_(i,this.collisionList_[t].maxProb.toFixed(3)),Bt.createCell_(i,this.collisionList_[t].minRng.toString()),Bt.createCell_(i,this.collisionList_[t].relSpeed.toFixed(2)),i}static createCell_(e,t){e.insertCell().appendChild(document.createTextNode(t))}}Bt.PLUGIN_NAME="collisions";var zt=i(4990);const Ht=i.p+"../img/colors.png";class jt extends u.c{constructor(){super(jt.PLUGIN_NAME),this.bottomIconImg=Ht,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=l.b.html`
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
  </ul>`,this.rmbCallback=e=>{switch(e){case"colors-confidence-rmb":jt.colorsMenuClick("confidence");break;case"colors-rcs-rmb":jt.colorsMenuClick("rcs");break;case"colors-density-rmb":jt.colorsMenuClick("neighbors");break;case"colors-starlink-rmb":jt.colorsMenuClick("starlink");break;case"colors-sunlight-rmb":jt.colorsMenuClick("sunlight");break;case"colors-country-rmb":jt.colorsMenuClick("countries");break;case"colors-velocity-rmb":jt.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":jt.colorsMenuClick("elset-age");break;default:jt.colorsMenuClick("default")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("colors-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.color;jt.colorsMenuClick(t)}))}))}})}}jt.PLUGIN_NAME="Color Menu",jt.colorsMenuClick=e=>{var t;const i=l.b.getCatalogManager(),a=l.b.getColorSchemeManager(),n=l.b.getUiManager();switch(null===(t=l.b.getPlugin(p.P))||void 0===t||t.selectSat(-1),"sunlight"!==e&&i.satCruncher.postMessage({isSunlightView:!1,typ:Lt.Bi.SUNLIGHT_VIEW}),e){case"confidence":dt.j.change("confidence"),a.setColorScheme(a.confidence,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"velocity":dt.j.change("velocity"),a.setColorScheme(a.velocity,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"sunlight":i.satCruncher.postMessage({isSunlightView:!0,typ:Lt.Bi.SUNLIGHT_VIEW}),dt.j.change("sunlight"),n.colorSchemeChangeAlert(a.sunlight),(0,zt.J)(i.satCruncher,(()=>{a.setColorScheme(a.sunlight,!0)}),(e=>e.satInSun));break;case"near-earth":dt.j.change("near"),a.setColorScheme(a.leo,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"deep-space":dt.j.change("deep"),a.setColorScheme(a.geo,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"elset-age":(0,v.QP)((()=>{dt.j.change("ageOfElset"),a.setColorScheme(a.ageOfElset,!0),n.colorSchemeChangeAlert(a.currentColorScheme)}));break;case"lost-objects":(0,s.Gn)("search").value="",(0,v.QP)((()=>{settingsManager.lostSatStr="",a.setColorScheme(a.lostobjects,!0),(0,s.Gn)("search").value=settingsManager.lostSatStr,n.colorSchemeChangeAlert(a.currentColorScheme),n.doSearch((0,s.Gn)("search").value)}));break;case"rcs":dt.j.change("rcs"),a.setColorScheme(a.rcs,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"starlink":dt.j.change("starlink"),a.setColorScheme(a.starlink,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"smallsats":dt.j.change("small"),a.setColorScheme(a.smallsats,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"neighbors":dt.j.change("neighbors"),a.setColorScheme(a.neighbors,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"countries":dt.j.change("countries"),null!==l.b.getGroupsManager().selectedGroup?a.setColorScheme(a.groupCountries,!0):a.setColorScheme(a.countries,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;default:dt.j.change("default"),a.setColorScheme(a.default,!0),n.colorSchemeChangeAlert(a.currentColorScheme)}l.b.getUiManager().hideSideMenus()};const Vt=new jt;var Kt=i(3934),Yt=i(6279);const Jt=i.p+"../img/about.png";class Xt extends u.c{constructor(){super(Xt.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconCallback=()=>{if(this.verifySatelliteSelected()&&this.isMenuButtonActive){const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);(0,s.Gn)(`${this.formPrefix_}-scc`).value=e.sccNum}},this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=Jt,this.bottomIconLabel="Debris Screening",this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=l.b.html`
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
`,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.helpTitle="Debris Screening",this.helpBody=l.b.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=l.b.html`<img src="${Jt}" />
  `,this.selectSatManager_=l.b.getPlugin(p.P)}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)(`${this.sideMenuElementName}-form`).addEventListener("submit",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onFormSubmit()))})),(0,s.Gn)(`${this.sideMenuElementName}-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,v.QP)((()=>this.onVisClick()))})),(0,s.Gn)(`${this.sideMenuElementName}-clear-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,v.QP)((()=>Xt.onClearVisClick()))}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled()}})}onVisClick(){const e=parseFloat((0,s.Gn)(`${this.formPrefix_}-u`).value),t=parseFloat((0,s.Gn)(`${this.formPrefix_}-v`).value),i=parseFloat((0,s.Gn)(`${this.formPrefix_}-w`).value);l.b.getScene().searchBox.setCubeSize(e,t,i)}static onClearVisClick(){l.b.getScene().searchBox.setCubeSize(0,0,0)}onFormSubmit(){const e=l.b.getCatalogManager().sccNum2Id(parseInt((0,s.Gn)(`${this.formPrefix_}-scc`).value)),t=parseFloat((0,s.Gn)(`${this.formPrefix_}-u`).value),i=parseFloat((0,s.Gn)(`${this.formPrefix_}-v`).value),a=parseFloat((0,s.Gn)(`${this.formPrefix_}-w`).value),n=parseFloat((0,s.Gn)(`${this.formPrefix_}-time`).value),r=l.b.getCatalogManager().getObject(e,o.C_.SKIP_POS_VEL),c=l.b.getCatalogManager().objectCache.filter((e=>{if(!e.isSatellite())return!1;const t=e;return!(t.perigee>r.apogee||r.perigee>t.apogee)})).map((e=>e.id));let d=0,u=[];for(let e=0;e<60*n;e++){d=1e3*e*60;const n=l.b.getTimeManager().getOffsetTimeObj(d),{m:s}=it.$.calculateTimeVariables(n,r.satrec),p=C.t2.propagate(r.satrec,s);for(let e=0;e<c.length;e++){const s=l.b.getCatalogManager().getObject(c[e],o.C_.SKIP_POS_VEL);if(!(null==s?void 0:s.isSatellite()))continue;const r=s,{m:d}=it.$.calculateTimeVariables(n,r.satrec),m=C.t2.propagate(r.satrec,d);if(!m){c.splice(e,1);break}const h=Yt.x.sat2ric({position:p.position,velocity:p.velocity},{position:m.position,velocity:m.velocity});if(Math.abs(h.position[0])<t&&Math.abs(h.position[1])<i&&Math.abs(h.position[2])<a){console.log(`${r.sccNum} at ${new Date(n)}`),u.push(r.sccNum),c.splice(e,1);break}}}u=u.filter(((e,t,i)=>i.indexOf(e)===t));let p=u.join(",");p=p.replace(/,\s*$/u,""),l.b.getUiManager().doSearch(p)}}Xt.PLUGIN_NAME="Debris Screening";var Wt=i(2809);const qt=i.p+"../img/gps.png";var Zt=i(8687),Qt=i.n(Zt),ei=i(3268);class ti{static calculateDops(e){const t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},i=e.length;if(i<4)return t;const a=Qt().rep([i,4],0);for(let t=1;t<=i;t++){const{az:i,el:n}=e[t-1],s=[Math.cos(n*C.qW)*Math.sin(i*C.qW),Math.cos(n*C.qW)*Math.cos(i*C.qW),Math.sin(n*C.qW),1];Qt().setBlock(a,[t-1,0],[t-1,3],[s])}const n=Qt().dot(Qt().transpose(a),a),s=Qt().inv(n),o=Math.sqrt(s[0][0]+s[1][1]+s[2][2]),l=Math.sqrt(s[0][0]+s[1][1]),r=Math.sqrt(s[0][0]+s[1][1]+s[2][2]+s[3][3]),c=Math.sqrt(s[2][2]),d=Math.sqrt(s[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,i,a,n,s=10){if(void 0===i||void 0===a)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};null!=n||(n=0);const{gmst:o}=it.$.calculateTimeVariables(e),l=[];return t.forEach((e=>{const t=(0,C.yv)({lon:a,lat:i,alt:n},(0,C.eV)(e.position,o)),r={az:t.az,el:t.el};r.el>s&&l.push(r)})),ti.calculateDops(l)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");const t=(0,s.Gn)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let i=t.insertRow(),a=i.insertCell();a.appendChild(document.createTextNode("Time"));let n=i.insertCell();n.appendChild(document.createTextNode("HDOP"));let o=i.insertCell();o.appendChild(document.createTextNode("PDOP"));let l=i.insertCell();l.appendChild(document.createTextNode("GDOP"));for(const s of e)i=t.insertRow(),a=i.insertCell(),a.appendChild(document.createTextNode((0,ei.v)(s.time,"isoDateTime",!0))),n=i.insertCell(),n.appendChild(document.createTextNode(s.dops.hdop)),o=i.insertCell(),o.appendChild(document.createTextNode(s.dops.pdop)),l=i.insertCell(),l.appendChild(document.createTextNode(s.dops.gdop))}static getDopsList(e,t,i,a,n,s){const o=[];for(let l=0;l<1440;l++){const r=e(60*l*C.s9),c=ti.getDops(r,t,i,a,n,s);o.push({time:r,dops:c})}return o}}class ii extends u.c{constructor(){super(ii.PLUGIN_NAME),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=qt,this.bottomIconCallback=()=>{this.isMenuButtonActive&&(0,v.QP)(ii.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=l.b.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
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
`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=l.b.getInputManager().mouse.latLon;const t=l.b.getInputManager().mouse.dragPosition;if(void 0===e||isNaN(e.lat)||isNaN(e.lon)){console.debug("latLon undefined!");const i=it.$.calculateTimeVariables(l.b.getTimeManager().simulationTimeObj).gmst;e=(0,C.K7)({x:t[0],y:t[1],z:t[2]},i)}const i=ii.getGpsSats(l.b.getCatalogManager(),l.b.getGroupsManager()),a=ti.getDops(l.b.getTimeManager().simulationTimeObj,i,e.lat,e.lon,0,settingsManager.gpsElevationMask);l.b.getUiManager().toast(`HDOP: ${a.hdop}<br/>VDOP: ${a.vdop}<br/>PDOP: ${a.pdop}<br/>GDOP: ${a.gdop}<br/>TDOP: ${a.tdop}`,"normal",!0)}break;case"dops-24dops-rmb":{const e=l.b.getInputManager().mouse.latLon;if(this.isMenuButtonActive){(0,v.QP)(ii.updateSideMenu),this.setBottomIconToEnabled();break}(0,s.Gn)("dops-lat").value=e.lat.toFixed(3),(0,s.Gn)("dops-lon").value=e.lon.toFixed(3),(0,s.Gn)("dops-alt").value="0",(0,s.Gn)("dops-el").value=settingsManager.gpsElevationMask.toString(),l.b.runEvent(o.RL.bottomMenuClick,this.bottomIconElementName)}}}}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("dops-form").addEventListener("submit",(e=>{e.preventDefault(),ii.updateSideMenu()}))}})}static updateSideMenu(){const e=l.b.getGroupsManager(),t=l.b.getCatalogManager(),i=l.b.getTimeManager(),a=parseFloat((0,s.Gn)("dops-lat").value),n=parseFloat((0,s.Gn)("dops-lon").value),o=parseFloat((0,s.Gn)("dops-alt").value),r=parseFloat((0,s.Gn)("dops-el").value);settingsManager.gpsElevationMask=r;const c=ii.getGpsSats(t,e),d=ti.getDopsList((e=>i.getOffsetTimeObj(e)),c,a,n,o,r);ti.updateDopsTable(d)}static getGpsSats(e,t){var i,a;const n=null!==(i=(a=t.groupList).GPSGroup)&&void 0!==i?i:a.GPSGroup=t.createGroup(r.Y.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),s=[];return n.ids.forEach((t=>{const i=e.getSat(t);i&&s.push(i)})),s}}ii.PLUGIN_NAME="DOPs Plugin";const ai=new ii,ni=i.p+"../img/edit.png";class si extends u.c{constructor(){super(si.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=l.b.html`The Edit Satellite Menu is used to edit the satellite data.
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
              <input disabled value="AAAAA" id="${si.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${si.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${si.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${si.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${si.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${si.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${si.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${si.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${si.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${si.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${si.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${si.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${si.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${si.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${si.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${si.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${si.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${si.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${si.elementPrefix}-per" class="active">Period</label>
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
        <div id="${si.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=ni,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.populateSideMenu_()},this.dragOptions={isDraggable:!0},this.isRmbOnSat=!0,this.rmbMenuOrder=2,this.rmbL1ElementName="edit-rmb",this.rmbL1Html=l.b.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Edit Sat &#x27A4;</a></li>`,this.rmbCallback=(e,t)=>{if(null==t)throw new Error("clickedSat is undefined");switch(e){case"set-pri-sat-rmb":this.selectSatManager_.selectSat(t);break;case"set-sec-sat-rmb":this.selectSatManager_.setSecondarySat(t);break;case"edit-sat-rmb":this.selectSatManager_.selectSat(t),this.isMenuButtonActive||l.b.getUiManager().bottomIconPress({id:this.bottomIconElementName})}},this.rmbL2ElementName="edit-rmb-menu",this.rmbL2Html=l.b.html`
    <ul class='dropdown-contents'>
      <li id="set-pri-sat-rmb"><a href="#">Set as Primary Sat</a></li>
      <li id="set-sec-sat-rmb"><a href="#">Set as Secondary Sat</a></li>
      <li id="edit-sat-rmb"><a href="#">Edit Satellite</a></li>
    </ul>`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"editSat",cb:()=>{(0,s.Gn)("editSat-newTLE").addEventListener("click",this.editSatNewTleClick_.bind(this)),(0,s.Gn)("editSat").addEventListener("submit",(e=>{e.preventDefault(),si.editSatSubmit()})),(0,s.Gn)(`${si.elementPrefix}-per`).addEventListener("change",(()=>{const e=(0,s.Gn)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,s.Gn)("es-meanmo").value=t.toFixed(8)})),(0,s.Gn)(`${si.elementPrefix}-meanmo`).addEventListener("change",(()=>{const e=(0,s.Gn)(`${si.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,s.Gn)(`${si.elementPrefix}-per`).value=t})),(0,s.Gn)("editSat-save").addEventListener("click",si.editSatSaveClick),(0,s.Gn)("editSat-open").addEventListener("click",(()=>{l.b.getSoundManager().play(m.p.MENU_BUTTON),(0,s.Gn)("editSat-file").click()})),(0,s.Gn)("editSat-file").addEventListener("change",(e=>{window.FileReader&&(si.doReaderActions_(e),e.preventDefault())})),(0,s.Gn)(`${si.elementPrefix}-error`).addEventListener("click",(()=>{(0,s.Gn)(`${si.elementPrefix}-error`).style.display="none"}))}})}addJs(){super.addJs(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e||(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}})}static doReaderActions_(e){try{const t=new FileReader;t.onload=si.readerOnLoad_,t.readAsText(e.target.files[0])}catch(e){f.x.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad_(e){if(2!==e.target.readyState)return;if(e.target.error)return void f.x.warn("Error while reading file!");const t=l.b.getTimeManager(),i=l.b.getOrbitManager(),a=l.b.getUiManager(),n=JSON.parse(e.target.result),s=parseInt(St.J.pad0(n.tle1.substr(2,5).trim(),5)),o=l.b.getCatalogManager().sccNum2Sat(s);let r;try{r=C.t2.createSatrec(n.tle1,n.tle2)}catch(e){return void f.x.error(e,"edit-sat.ts","Error creating satellite record!")}it.$.altitudeCheck(r,t.simulationTimeObj)>1?(l.b.getCatalogManager().satCruncher.postMessage({typ:Lt.Bi.SAT_EDIT,id:o.id,active:!0,tle1:n.tle1,tle2:n.tle2}),i.changeOrbitBufferData(o.id,n.tle1,n.tle2),o.active=!0):a.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}populateSideMenu_(){const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;(0,s.Gn)(`${si.elementPrefix}-scc`).value=t.sccNum;const i=t.inclination.toFixed(4).padStart(8,"0");(0,s.Gn)(`${si.elementPrefix}-inc`).value=i,(0,s.Gn)(`${si.elementPrefix}-year`).value=t.tle1.substr(18,2),(0,s.Gn)(`${si.elementPrefix}-day`).value=t.tle1.substr(20,12),(0,s.Gn)(`${si.elementPrefix}-meanmo`).value=t.tle2.substr(52,11),(0,s.Gn)(`${si.elementPrefix}-per`).value=(1440/parseFloat(t.tle2.substr(52,11))).toFixed(4);const a=t.rightAscension.toFixed(4).padStart(8,"0");(0,s.Gn)(`${si.elementPrefix}-rasc`).value=a,(0,s.Gn)(`${si.elementPrefix}-ecen`).value=t.eccentricity.toFixed(7).substr(2,7);const n=t.argOfPerigee.toFixed(4).padStart(8,"0");(0,s.Gn)(`${si.elementPrefix}-argPe`).value=St.J.pad0(n,8),(0,s.Gn)(`${si.elementPrefix}-meana`).value=t.tle2.substr(43,8)}editSatNewTleClick_(){(0,v.QP)(this.editSatNewTleClickFadeIn_.bind(this))}editSatNewTleClickFadeIn_(){const e=l.b.getTimeManager(),t=l.b.getUiManager();try{const i=l.b.getCatalogManager().sccNum2Id(parseInt((0,s.Gn)(`${si.elementPrefix}-scc`).value)),a=l.b.getCatalogManager().getObject(i);if(!a.isSatellite())return;const n=a,r=it.$.calculateTimeVariables(e.simulationTimeObj).gmst,c=(0,C.K7)(n.position,r),d=c.lon,u=c.lat,p=c.alt,m=it.$.getDirection(n,e.simulationTimeObj);"Error"===m&&t.toast("Cannot calculate direction of satellite. Try again later.","caution");const h=e.simulationTimeObj,g=Ct.l.currentEpoch(h);let b;n.tle1=n.tle1.substr(0,18)+g[0]+g[1]+n.tle1.substr(32),l.b.getMainCamera().isAutoPitchYawToTarget=!1,b=n.apogee-n.perigee<300?new Mt(n,u,d,m,h).rotateOrbitToLatLon():new Mt(n,u,d,m,h,p).rotateOrbitToLatLon();const v=b[0],f=b[1];if("Error"===v)return void t.toast(`${f}`,"critical",!0);l.b.getCatalogManager().satCruncher.postMessage({typ:Lt.Bi.SAT_EDIT,id:i,tle1:v,tle2:f}),l.b.getOrbitManager().changeOrbitBufferData(i,v,f);const S=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);if(!S.isSatellite())return;const M=S;(0,s.Gn)(`${si.elementPrefix}-scc`).value=M.sccNum;const L=M.inclination.toFixed(4).padStart(8,"0");(0,s.Gn)(`${si.elementPrefix}-inc`).value=St.J.pad0(L,8),(0,s.Gn)(`${si.elementPrefix}-year`).value=M.tle1.substr(18,2),(0,s.Gn)(`${si.elementPrefix}-day`).value=M.tle1.substr(20,12),(0,s.Gn)(`${si.elementPrefix}-meanmo`).value=M.tle2.substr(52,11),(0,s.Gn)(`${si.elementPrefix}-per`).value=(1440/parseFloat(M.tle2.substr(52,11))).toFixed(4);const y=M.rightAscension.toFixed(4).padStart(8,"0");(0,s.Gn)(`${si.elementPrefix}-rasc`).value=y,(0,s.Gn)(`${si.elementPrefix}-ecen`).value=M.eccentricity.toFixed(7).substr(2,7);const A=M.argOfPerigee.toFixed(4).padStart(8,"0");(0,s.Gn)(`${si.elementPrefix}-argPe`).value=A,(0,s.Gn)(`${si.elementPrefix}-meana`).value=M.tle2.substr(43,8)}catch(e){f.x.warn(e)}}static editSatSubmit(){l.b.getSoundManager().play(m.p.MENU_BUTTON);const e=l.b.getCatalogManager();(0,s.Gn)(`${si.elementPrefix}-error`).style.display="none";const t=(0,s.Gn)(`${si.elementPrefix}-scc`).value,i=e.sccNum2Id(parseInt(t));null===i&&f.x.info("Not a Real Satellite");const a=e.getObject(i,o.C_.EXTRA_ONLY);if(!a.isSatellite())return;const n=a,r=n.tle1.substr(9,8),c=(0,s.Gn)(`${si.elementPrefix}-inc`).value,d=(0,s.Gn)(`${si.elementPrefix}-meanmo`).value,u=(0,s.Gn)(`${si.elementPrefix}-rasc`).value,p=(0,s.Gn)(`${si.elementPrefix}-ecen`).value,h=(0,s.Gn)(`${si.elementPrefix}-argPe`).value,g=(0,s.Gn)(`${si.elementPrefix}-meana`).value,b=(0,s.Gn)(`${si.elementPrefix}-year`).value,v=(0,s.Gn)(`${si.elementPrefix}-day`).value,{tle1:S,tle2:M}=C.L.createTle({sat:n,inc:c,meanmo:d,rasc:u,argPe:h,meana:g,ecen:p,epochyr:b,epochday:v,intl:r,scc:t}),L=S,y=M;let A;try{A=C.t2.createSatrec(L,y)}catch(e){return void f.x.error(e,"edit-sat.ts","Error creating satellite record!")}it.$.altitudeCheck(A,l.b.getTimeManager().simulationTimeObj)>1?(e.satCruncher.postMessage({typ:Lt.Bi.SAT_EDIT,id:i,active:!0,tle1:L,tle2:y}),l.b.getOrbitManager().changeOrbitBufferData(i,L,y),n.active=!0,n.editTle(L,y),l.b.getMainCamera().zoomTarget=C.$R.GEO):l.b.getUiManager().toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static editSatSaveClick(e){const t=l.b.getCatalogManager();l.b.getSoundManager().play(m.p.EXPORT);try{const e=(0,s.Gn)(`${si.elementPrefix}-scc`).value,i=t.sccNum2Id(parseInt(e)),a=t.getObject(i,o.C_.EXTRA_ONLY),n={tle1:a.tle1,tle2:a.tle2},l=JSON.stringify(n),r=new Blob([l],{type:"text/plain;charset=utf-8"});(0,nt.saveAs)(r,`${e}.tle`)}catch(e){}e.preventDefault()}}si.PLUGIN_NAME="Edit Sat",si.elementPrefix="es";class oi{constructor(){this.PLUGIN_NAME="Gamepad",this.deadzone=.55,this.buttonsPressedHistory=[],this.buttonsPressed=[]}init(){window.addEventListener("gamepadconnected",(e=>{settingsManager.cruncherReady?this.initializeGamepad(e.gamepad):l.b.register({event:o.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>this.initializeGamepad(e.gamepad)})})),window.addEventListener("gamepaddisconnected",(()=>{l.b.getUiManager().toast("Gamepad disconnected","critical"),this.currentController=null}))}initializeGamepad(e){l.b.getUiManager().toast("Gamepad connected","normal"),this.currentController||l.b.register({event:o.RL.updateLoop,cbName:this.PLUGIN_NAME,cb:this.updateGamepad.bind(this)}),this.currentController=e}updateGamepad(e){null!=e||(e=0);const t=oi.getController(e);null!==t&&(this.currentController=t,this.updateZoom_(),this.updateLeftStick_(),this.updateRightStick_(),this.updateButtons_())}updateButtons_(){this.currentController.buttons.forEach(((e,t)=>{if(e.pressed&&!this.buttonsPressed[t])switch(this.buttonsPressed[t]=!0,this.buttonsPressedHistory.push(t),this.buttonsPressedHistory.length>8&&this.buttonsPressedHistory.shift(),t){case 0:this.btnA_();break;case 1:this.btnB_();break;case 2:this.btnX_();break;case 3:this.btnY_();break;case 4:this.btnLeftBumper();break;case 5:this.btnRightBumper_();break;case 8:this.btnHome_();break;case 9:this.btnStart_();break;case 10:this.btnLeftStick_();break;case 11:this.btnRightStick_();break;case 12:this.btnDpadUp_();break;case 13:this.btnDpadDown_();break;case 14:this.btnDpadLeft_();break;case 15:this.btnDpadRight_();break;case 16:this.btnXbox()}else!e.pressed&&this.buttonsPressed[t]&&(this.buttonsPressed[t]=!1)}))}btnA_(){var e;settingsManager.isLimitedGamepadControls||(console.log("A"),null===(e=l.b.getPlugin(p.P))||void 0===e||e.selectSat(l.b.getHoverManager().hoveringSat))}btnB_(){var e;settingsManager.isLimitedGamepadControls||(console.log("B"),null===(e=l.b.getPlugin(p.P))||void 0===e||e.selectSat(-1),l.b.getMainCamera().zoomTarget=.8)}btnX_(){settingsManager.isLimitedGamepadControls||(console.log("X"),l.b.getMainCamera().autoRotate())}btnY_(){console.log("Y")}btnLeftBumper(){if(settingsManager.isLimitedGamepadControls)return;console.log("Left Bumper");const e=l.b.getPlugin(p.P);if(!e)return;const t=e.selectedSat-1;if(t>=0)e.selectSat(t);else{const t=l.b.getCatalogManager().getActiveSats(),i=t[t.length-1].id;e.selectSat(i)}}btnRightBumper_(){if(settingsManager.isLimitedGamepadControls)return;console.log("Right Bumper");const e=l.b.getPlugin(p.P);if(!e)return;const t=l.b.getCatalogManager().getActiveSats(),i=t[t.length-1].id,a=e.selectedSat+1;a<=i?e.selectSat(a):e.selectSat(0)}btnHome_(){settingsManager.isLimitedGamepadControls||(console.log("Home"),l.b.getMainCamera().isPanReset=!0,l.b.getMainCamera().isLocalRotateReset=!0,l.b.getMainCamera().ftsRotateReset=!0)}btnXbox(){console.log("Xbox Button")}btnStart_(){console.log("Start")}btnLeftStick_(){console.log("Left Stick")}btnRightStick_(){console.log("Right Stick")}btnDpadUp_(){console.log("D-Pad Up"),settingsManager.isAutoRotateD=!1,settingsManager.isAutoRotateU=!settingsManager.isAutoRotateU,l.b.getMainCamera().autoRotate(!0)}btnDpadDown_(){console.log("D-Pad Down"),settingsManager.isAutoRotateU=!1,settingsManager.isAutoRotateD=!settingsManager.isAutoRotateD,l.b.getMainCamera().autoRotate(!0)}btnDpadLeft_(){console.log("D-Pad Left"),settingsManager.isAutoRotateR=!1,settingsManager.isAutoRotateL=!settingsManager.isAutoRotateL,l.b.getMainCamera().autoRotate(!0)}btnDpadRight_(){console.log("Right"),settingsManager.isAutoRotateL=!1,settingsManager.isAutoRotateR=!settingsManager.isAutoRotateR,l.b.getMainCamera().autoRotate(!0)}updateZoom_(){const e=this.currentController.buttons[6].value,t=this.currentController.buttons[7].value;if(0===e&&0===t)return;const i=l.b.getRenderer();let a=l.b.getMainCamera().zoomLevel();switch(l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:a+=e/500*i.dt,a-=t/500*i.dt,l.b.getMainCamera().zoomTarget=a,l.b.getMainCamera().camZoomSnappedOnSat=!1,l.b.getMainCamera().isAutoPitchYawToTarget=!1,a<l.b.getMainCamera().zoomLevel()?l.b.getMainCamera().isZoomIn=!0:l.b.getMainCamera().isZoomIn=!1;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:0!==e&&(l.b.getMainCamera().fpsVertSpeed+=Math.pow(2*e,3)*i.dt*settingsManager.cameraMovementSpeed),0!==t&&(l.b.getMainCamera().fpsVertSpeed-=Math.pow(2*t,3)*i.dt*settingsManager.cameraMovementSpeed)}}updateLeftStick_(){const e=this.currentController.axes[0],t=this.currentController.axes[1];if(e>this.deadzone||e<-this.deadzone||t>this.deadzone||t<-this.deadzone){l.b.getMainCamera().autoRotate(!1);const i=l.b.getRenderer();switch(settingsManager.lastGamepadMovement=Date.now(),l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:l.b.getMainCamera().camAngleSnappedOnSat=!1,l.b.getMainCamera().isAutoPitchYawToTarget=!1,l.b.getMainCamera().camPitchSpeed-=Math.pow(t,3)/200*i.dt*settingsManager.cameraMovementSpeed,l.b.getMainCamera().camYawSpeed+=Math.pow(e,3)/200*i.dt*settingsManager.cameraMovementSpeed;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:(t>this.deadzone||t<-this.deadzone)&&(l.b.getMainCamera().fpsForwardSpeed=-Math.pow(t,3)*i.dt),(e>this.deadzone||e<-this.deadzone)&&(l.b.getMainCamera().fpsSideSpeed=Math.pow(e,3)*i.dt)}}}updateRightStick_(){if(settingsManager.isLimitedGamepadControls)return;const e=this.currentController.axes[2],t=this.currentController.axes[3],i=l.b.getRenderer();if(l.b.getMainCamera().isLocalRotateOverride=!1,t>this.deadzone||t<-this.deadzone||e>this.deadzone||e<-this.deadzone)switch(l.b.getMainCamera().autoRotate(!1),l.b.getMainCamera().cameraType){case V.i.DEFAULT:case V.i.OFFSET:case V.i.FIXED_TO_SAT:l.b.getMainCamera().isLocalRotateOverride=!0,l.b.getMainCamera().localRotateDif.pitch=200*-t,l.b.getMainCamera().localRotateDif.yaw=200*-e;break;case V.i.FPS:case V.i.SATELLITE:case V.i.PLANETARIUM:case V.i.ASTRONOMY:l.b.getMainCamera().camPitchSpeed+=t/100*i.dt*settingsManager.cameraMovementSpeed,l.b.getMainCamera().camYawSpeed-=e/100*i.dt*settingsManager.cameraMovementSpeed}}vibrate(e){this.currentController&&this.currentController.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})}static getController(e=0){const t=navigator.getGamepads().filter((e=>null!==e));return t.length>e&&null!==t[e]?t[e]:null}}const li=new oi;var ri=i(2238);const ci=i.p+"../img/calendar.png";class di extends u.c{constructor(){super("Launch Menu"),this.bottomIconElementName="menu-launches",this.bottomIconImg=ci,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonActive){settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3);const e=(new Date).getFullYear();(0,ri.Us)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonActive&&(this.isMenuButtonActive=!1,(0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const ui=new di,pi=i.p+"../img/rocket.png";var mi=i(8568);class hi extends u.c{constructor(){super(hi.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.bottomIconCallback=()=>{if(!this.isMenuButtonActive)return;if(!this.verifySatelliteSelected())return;const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);(0,s.Gn)("nl-scc").value=e.sccNum,(0,s.Gn)("nl-inc").value=St.J.pad0(e.inclination.toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=pi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=l.b.html`
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
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=l.b.getTimeManager(),i=l.b.getCatalogManager(),a=l.b.getUiManager(),n=l.b.getColorSchemeManager();(0,v.wU)();const o=(0,s.Gn)("nl-scc").value,r=i.sccNum2Id(parseInt(o)),c=i.getObject(r),d=(0,s.Gn)("nl-updown").value,u=(0,s.Gn)("nl-facility").value;let p,h;if(!i.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in i.launchSites)i.launchSites[e].name===u&&(p=i.launchSites[e].lat,h=i.launchSites[e].lon);h>180&&(h-=360);const g=new Date,b=new Date(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate(),0,0,0);b.setUTCHours(0);const S=t.staticOffset;t.changeStaticOffset(b.getTime()-g.getTime()),n.setColorScheme(settingsManager.currentColorScheme,!0),l.b.getMainCamera().isAutoPitchYawToTarget=!1;const M=t.simulationTimeObj,L=new Mt(c,p,h,d,M).rotateOrbitToLatLon(),y=L[0],A=L[1];if("Error"===y||69!==y.length||69!==A.length)return"Error"===y?a.toast(`Failed to Create TLE: ${A}`,"critical"):69!==y.length?a.toast(`Invalid TLE1 Created: length is not 69 - ${y}`,"critical"):69!==A.length&&a.toast(`Invalid TLE2 Created: length is not 69 - ${A}`,"critical"),t.changeStaticOffset(S),this.isDoingCalculations=!1,void(0,v.Zk)();let T;a.toast("Time is now relative to launch time.","standby"),null===(e=l.b.getSoundManager())||void 0===e||e.play(m.p.LIFT_OFF),c.satrec=null;try{T=C.t2.createSatrec(y,A)}catch(e){return void f.x.error(e,"new-launch.ts","Error creating satellite record!")}it.$.altitudeCheck(T,M)>1?(i.satCruncher.postMessage({typ:Lt.Bi.SAT_EDIT,id:r,active:!0,TLE1:y,TLE2:A}),l.b.getOrbitManager().changeOrbitBufferData(r,y,A)):a.toast("Failed Altitude Test - Try a Different Satellite!","critical"),(0,zt.J)(i.satCruncher,(()=>{this.isDoingCalculations=!1,(0,v.Zk)(),l.b.getUiManager().searchManager.doSearch(c.sccNum)}),(e=>void 0!==e.satPos),(()=>{this.isDoingCalculations=!1,(0,v.Zk)(),a.toast("Cruncher failed to meet requirement after multiple tries! Is this launch even possible?","critical")}))},this.selectSatManager_=l.b.getPlugin(p.P)}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)(`${this.sideMenuElementName}-form`).addEventListener("change",(()=>{const e=l.b.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.C_.EXTRA_ONLY);e.isSatellite()&&this.preValidate_(e)}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(null==e?void 0:e.isSatellite()){const t=e;(0,s.Gn)("nl-scc").value=t.sccNum,(0,s.Gn)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.preValidate_(t)}else(0,s.Gn)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0}})}preValidate_(e){const t=(0,s.Gn)("nl-facility").value,i=mi.E[t].lat;let a=e.inclination;a=a>90?180-a:a;const n=(0,s.Gn)(`${this.sideMenuElementName}-submit`);a<i?(n.disabled=!0,n.textContent="Inclination Too Low!"):(n.disabled=!1,n.textContent="Create Launch Nominal ▶")}}hi.PLUGIN_NAME="New Launch";const gi=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown",bi=i.p+"../img/calendar2.png";class vi extends u.c{constructor(){super(vi.PLUGIN_NAME),this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.showTable()},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=bi,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=l.b.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=l.b.html`
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
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),i.e(246).then(i.bind(i,6246)).then((e=>e))}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("export-launch-info").addEventListener("click",(()=>{l.b.getSoundManager().play(m.p.EXPORT),(0,at.Eb)(this.launchList,"launchList")}))}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then((e=>e.json())).then((e=>this.processData(e))).catch((()=>f.x.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`))).finally((()=>{const e=(0,s.Gn)("nextLaunch-table");e&&""==e.innerHTML&&(vi.initTable(e,this.launchList),(0,s.Gn)("nextLaunch-table").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(0,ri.Us)(e.href)}))})))}))}}processData(e){var t,i,a,n,s,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(i=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===i?void 0:i.name.split(",",1)[0],c.locationURL=null===(a=r.pad)||void 0===a?void 0:a.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(n=r.rocket)||void 0===n?void 0:n.configuration.full_name,c.rocketConfig=null===(s=r.rocket)||void 0===s?void 0:s.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Launch Window")),i.setAttribute("style","text-decoration: underline; width: 120px;");const a=t.insertCell();a.appendChild(document.createTextNode("Mission")),a.setAttribute("style","text-decoration: underline; width: 140px;");const n=t.insertCell();n.appendChild(document.createTextNode("Location")),n.setAttribute("style","text-decoration: underline");const s=t.insertCell();s.appendChild(document.createTextNode("Agency")),s.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var i,a,n,s,o,l;vi.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),u=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":`${(0,ei.v)(t[r].windowStart,"isoDateTime",!0)} UTC`;d.appendChild(document.createTextNode(u));const p=c.insertCell(),m=(null===(i=t[r])||void 0===i?void 0:i.missionName)||"Unknown",h=(null===(a=t[r])||void 0===a?void 0:a.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${gi(m,15)}</a>`:`${gi(m,15)}`,g=(null===(n=t[r])||void 0===n?void 0:n.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;p.innerHTML=`${h}<br />${g}`;const b=(null===(s=t[r])||void 0===s?void 0:s.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${gi(t[r].location,25)}</a>`:`${gi(t[r].location,25)}`;c.insertCell().innerHTML=b;const v=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${gi(t[r].agency,30)}</a>`:`${gi(t[r].agency,30)}`;c.insertCell().innerHTML=v,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}vi.PLUGIN_NAME="Next Launches";const fi=i.p+"../img/day-night.png";class Si extends u.c{constructor(){super("Night Toggle"),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=fi}addJs(){super.addJs(),l.b.register({event:o.RL.nightToggle,cbName:this.PLUGIN_NAME,cb:(e,t,i)=>{this.isMenuButtonActive?e.bindTexture(e.TEXTURE_2D,i):e.bindTexture(e.TEXTURE_2D,t)}})}}var Mi=i(9974);class Ci extends u.c{constructor(){super(Ci.PLUGIN_NAME),this.dependencies=[Mi.s.PLUGIN_NAME,p.P.PLUGIN_NAME],this.doOnce=!1,this.isReferenceSatsActive=!1,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e&&(this.doOnce||((0,s.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
                <div id="orbit-references-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,s.Gn)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0))}})}orbitReferencesLinkClick(){const e=l.b.getCatalogManager(),t=e.getSat(this.selectSatManager_.selectedSat);if(!t)return;let i=t.sccNum5.padStart(5,"0");const a=t.eccentricity.toString(),n=t.rightAscension.toString(),s=t.argOfPerigee.toString(),o=t.inclination.toString(),r=t.meanMotion.toString(),c=t.epochYear.toString(),d=t.epochDay.toString(),u=t.intlDes.split("-")[0].slice(2)+t.intlDes.split("-")[1],p=t.sccNum,m=1440/parseFloat(r);let h=0;for(let l=0;l<360;l++){const g=h.toFixed(4).padStart(8,"0"),{tle1:b,tle2:v}=C.L.createTle({sat:t,inc:o,meanmo:r,rasc:n,argPe:s,meana:g,ecen:a,epochyr:c,epochday:d,intl:u,scc:p}),f=C.Ad.convert6DigitToA5((gt.g.ANALYST_START_ID+l).toString().padStart(5,"0")),S=e.sccNum2Id(f),M=e.addAnalystSat(b,v,S,f);if(M&&(i+=`${M.sccNum.toString()},`),h+=360/m*4,h>=360)break}i=i.slice(0,-1),l.b.getUiManager().doSearch(i),this.isReferenceSatsActive=!0}}Ci.PLUGIN_NAME="Orbit References";var Li=i(5890),yi=i(5441);const Ai=i.p+"../img/satchng.png";class Ti extends u.c{constructor(){super(Ti.PLUGIN_NAME),this.bottomIconImg=Ai,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=l.b.html`
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
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:"constellations",cb:()=>{(0,s.Gn)("constellation-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(e=>{Ti.constellationMenuClick(e.target.dataset.group)}))}))}})}static constellationMenuClick(e){const t=l.b.getTimeManager(),i=l.b.getCatalogManager(),a=l.b.getGroupsManager();if(void 0!==a){switch(e){case"SpaceStations":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/NAVSTAR/u,e);break;case"iridium":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/IRIDIUM/u,e);break;case"orbcomm":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/ORBCOMM/u,e);break;case"globalstar":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/GLOBALSTAR/u,e);break;case"ses":a.groupList[e]||a.createGroup(r.Y.PAYLOAD_NAME_REGEX,/SES \d+/u,e);break;case"AmatuerRadio":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":a.groupList[e]||a.createGroup(r.Y.SCC_NUM,i.id2satnum(i.satLinkManager.aehf),e),(0,v.QP)((()=>{yi.Bz.clear(),i.satLinkManager.showLinks(yi.Bz,Li.W6.Aehf,t)}));break;case"wgs":if(!a.groupList[e]){const t=i.satLinkManager.wgs.concat(i.satLinkManager.dscs);a.createGroup(r.Y.SCC_NUM,i.id2satnum(t),e)}(0,v.QP)((()=>{yi.Bz.clear(),i.satLinkManager.showLinks(yi.Bz,Li.W6.Wgs,t)}));break;case"starlink":a.groupList[e]||a.createGroup(r.Y.NAME_REGEX,/STARLINK/u,e);break;case"sbirs":if(!a.groupList[e]){const t=[...i.satLinkManager.sbirs,...i.satLinkManager.dsp];a.createGroup(r.Y.SCC_NUM,i.id2satnum(t),e)}break;default:throw new Error(`Unknown group name: ${e}`)}Ti.groupSelected(e)}}static groupSelected(e){var t;if(void 0===e)return;const i=l.b.getCatalogManager(),a=l.b.getGroupsManager();if(void 0===a.groupList[e])throw new Error(`Unknown group name: ${e}`);const n=(0,s.Gn)("search");a.selectGroup(a.groupList[e]),n.innerHTML=a.groupList[e].ids.reduce(((e,t)=>{var a;return`${e}${null===(a=i.getSat(t))||void 0===a?void 0:a.sccNum},`}),"").slice(0,-1),null===(t=l.b.getPlugin(p.P))||void 0===t||t.selectSat(-1);const o=l.b.getUiManager();o.searchManager.doSearch(a.groupList[e].ids.map((e=>{var t;return null===(t=i.getSat(e))||void 0===t?void 0:t.sccNum})).join(",")),settingsManager.isMobileModeEnabled&&o.searchManager.closeSearch(),o.hideSideMenus()}}Ti.PLUGIN_NAME="Sat Constellations";const Ei=new Ti;var wi=i(1965),ki=i(9696);const xi=i.p+"../img/photoManager.png";class Ni extends u.c{constructor(){super(Ni.PLUGIN_NAME),this.discvrPhotos_=[],this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="Satellite Photos",this.bottomIconImg=xi,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=l.b.html`
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
  Note - changes in the image API may cause the wrong satellite to be selected in KeepTrack.`}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("meteosat9-link").addEventListener("click",(()=>{Ni.loadPic(28912,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")})),(0,s.Gn)("meteosat11-link").addEventListener("click",(()=>{Ni.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")})),(0,s.Gn)("himawari8-link").addEventListener("click",(()=>{Ni.himawari8()})),(0,s.Gn)("goes16-link").addEventListener("click",(()=>{Ni.loadPic(41866,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")})),(0,s.Gn)("goes18-link").addEventListener("click",(()=>{Ni.loadPic(51850,"https://cdn.star.nesdis.noaa.gov/GOES18/ABI/FD/GEOCOLOR/latest.jpg")}))}}),l.b.register({event:o.RL.onKeepTrackReady,cbName:this.PLUGIN_NAME,cb:()=>{this.initDISCOVR_()}})}initDISCOVR_(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{if(e.status>=200&&e.status<400){JSON.parse(e.response).forEach((e=>{const t=e.image,i=e.identifier,a=i.slice(0,4),n=i.slice(4,6),s=i.slice(6,8),o=e.centroid_coordinates.lat,l=e.centroid_coordinates.lon;this.discvrPhotos_.push({imageUrl:`https://epic.gsfc.nasa.gov/archive/natural/${a}/${n}/${s}/png/${t}.png`,lat:o,lon:l})}));for(let e=1;e<this.discvrPhotos_.length+1;e++){const t=`<li id="discovr-link${e}" class="link satPhotoRow">DSCOVR Image ${e}</li>`;(0,s.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",t),(0,s.Gn)(`discovr-link${e}`).addEventListener("click",(()=>{Ni.loadPic(-1,this.discvrPhotos_[e-1].imageUrl),l.b.getMainCamera().camSnap((0,ki.Lx)(this.discvrPhotos_[e-1].lat),(0,ki.Zs)(this.discvrPhotos_[e-1].lon,l.b.getTimeManager().simulationTimeObj)),l.b.getMainCamera().changeZoom(.7)}))}}else{f.x.log("https://epic.gsfc.nasa.gov/ request failed!");const e='<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>';(0,s.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",e)}},e.onerror=function(){f.x.log("https://epic.gsfc.nasa.gov/ request failed!"),(0,s.Gn)("sat-photo-menu-list").insertAdjacentHTML("beforeend",'<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>')},e.send()}static loadPic(e,t){var i;l.b.getUiManager().searchManager.hideResults(),null===(i=l.b.getPlugin(p.P))||void 0===i||i.selectSat(l.b.getCatalogManager().sccNum2Id(e)),l.b.getMainCamera().changeZoom(.7),Ni.colorbox(t)}static himawari8(){var e;null===(e=l.b.getPlugin(p.P))||void 0===e||e.selectSat(l.b.getCatalogManager().sccNum2Id(40267)),l.b.getMainCamera().changeZoom(.7);let t=l.b.getTimeManager().simulationTimeObj;t.getTime()<Date.now()?t=new Date(t.getTime()-18e5):(l.b.getUiManager().toast("Can't load pictures from the future. Loading most recent photos.","caution"),t=new Date(Date.now()-18e5));const i=t.getUTCFullYear(),a=(t.getUTCMonth()+1).toString().padStart(2,"0"),n=t.getUTCDate().toString().padStart(2,"0"),s=t.getUTCHours().toString().padStart(2,"0"),o=(10*Math.floor(t.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3),(0,ri.Us)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${i}/${a}/${n}/${s}${o}00_0_0.png`,{image:!0})}}Ni.PLUGIN_NAME="Satellite Photos",Ni.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3),(0,ri.Us)(e,{image:!0})};const Gi=new Ni,_i=i.p+"../img/video.png";class Ii{constructor(e,t,i,a){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=i,this.onError_=a}static handleError(e){e.message.includes("Permission denied")?f.x.warn('Permission denied! Did you click "Share"?'):f.x.warn(`Error:${e}`)}getStream(e){return t=this,i=void 0,n=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch((e=>(Ii.handleError(e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch((e=>(Ii.handleError(e),null))):(f.x.warn("Compatibility Error with Recording"),this.onError_(),!1):(f.x.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((a=void 0)||(a=Promise))((function(e,s){function o(e){try{r(n.next(e))}catch(e){s(e)}}function l(e){try{r(n.throw(e))}catch(e){s(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(o,l)}r((n=n.apply(t,i||[])).next())}));var t,i,a,n}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(f.x.debug("Recorder stopped."),this.stream_.getTracks().forEach((e=>e.stop())),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,i=new Blob(this.recordedBlobs,{type:this.supportedType}),a=window.URL.createObjectURL(i),n=document.createElement("a");n.style.display="none",n.href=a,n.download=t,l.b.containerRoot.appendChild(n),n.click(),setTimeout((()=>{l.b.containerRoot.removeChild(n),window.URL.revokeObjectURL(a)}),100)}start(){this.getStream().then((e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;const t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(const e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&f.x.debug("No supported type found for MediaRecorder");const i={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||Ii.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,i)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}f.x.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${i}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),f.x.debug(`Created MediaRecorder ${this.mediaRecorder_}`)})).catch((()=>{}))}}Ii.BIT_RATE_30_MBPS=3e7,Ii.BIT_RATE_20_MBPS=2e7,Ii.BIT_RATE_10_MBPS=1e7,Ii.BIT_RATE_5_MBPS=5e6,Ii.BIT_RATE_2_MBPS=2e6,Ii.BIT_RATE_1_MBPS=1e6;class Ri extends u.c{constructor(){super("Screen Recorder"),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return f.x.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){f.x.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=_i,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerOnReady,cbName:this.PLUGIN_NAME,cb:()=>{try{this.streamManagerInstance=new Ii(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save(Ri.FILE_NAME),this.setBottomIconToUnselected()}}Ri.FILE_NAME="keeptrack.webm";const Pi=new Ri,Oi=i.p+"../img/camera.png";class Di extends u.c{constructor(){super("Screenshot"),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=Oi,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.rmbL1ElementName="save-rmb",this.rmbL1Html=l.b.html`
    <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Save Image &#x27A4;</a></li>
  `,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.isRmbOnSat=!0,this.rmbL2ElementName="save-rmb-menu",this.rmbL2Html=l.b.html`
    <ul class='dropdown-contents'>
      <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
      <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
      <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
    </ul>
  `,this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),l.b.register({event:o.RL.altCanvasResize,cbName:this.PLUGIN_NAME,cb:()=>this.queuedScreenshot_}),l.b.register({event:o.RL.endOfDraw,cbName:this.PLUGIN_NAME,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){const e=document.createElement("a");e.download="keeptrack.png";const t=(new Date).getUTCFullYear(),i=settingsManager.copyrightOveride?"":`©${t} KEEPTRACK.SPACE`;e.href=Di.watermarkedDataUrl(i),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=l.b.getRenderer().domElement,i=document.createElement("canvas"),a=i.getContext("2d"),n=i.width=t.width,s=i.height=t.height;a.drawImage(t,0,0),a.font="24px nasalization";let o=a.measureText(e).width;a.globalAlpha=1,a.fillStyle="white",a.fillText(e,n-o-30,s-30);const{classificationstr:r,classificationColor:c}=Di.calculateClassificationText();""!==r&&(a.font="24px nasalization",a.globalAlpha=1,a.fillStyle=c,o=a.measureText(r).width,a.fillText(r,n/2-o,s-20),a.fillText(r,n/2-o,34)),l.b.containerRoot.appendChild(i);const d=i.toDataURL();return i.parentNode.removeChild(i),d}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:At.getColors(settingsManager.classificationStr).backgroundColor}}}const Fi=new Di;var Ui=i(4118),$i=i(1527),Bi=i(658),zi=i(3443);const Hi=i.p+"../img/radar.png";var ji=i(3862),Vi={};Vi.styleTagTransform=Ft(),Vi.setAttributes=Rt(),Vi.insert=_t().bind(null,"head"),Vi.domAPI=Nt(),Vi.insertStyleElement=Ot(),kt()(ji.Z,Vi),ji.Z&&ji.Z.locals&&ji.Z.locals;class Ki extends u.c{constructor(){super(Ki.PLUGIN_NAME),this.dependencies=[Kt.s.PLUGIN_NAME],this.bottomIconCallback=()=>{var e;this.isMenuButtonActive&&((null===(e=l.b.getPlugin(mt))||void 0===e?void 0:e.isMenuButtonActive)?(0,Bi.l)("sensor-top-link").forEach((e=>{e.style.display="none"})):(0,Bi.l)("sensor-top-link").forEach((e=>{e.style.gridTemplateColumns="repeat(2,1fr)",e.style.display=""})))},this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.bottomIconElementName="sensor-list-icon",this.bottomIconLabel="Sensors",this.bottomIconImg=Hi,this.sideMenuElementName="sensor-list-menu",this.sideMenuElementHtml=l.b.html`
    <div id="sensor-list-menu" class="side-menu-parent start-hidden text-select">
        <div id="sensor-list-content" class="side-menu">
        <div class="row">
          <ul id="reset-sensor-text" class="sensor-reset-menu">
            <button id="reset-sensor-button" class="center-align btn btn-ui waves-effect waves-light menu-selectable" type="button">Reset Sensor &#9658;</button>
            <li class="divider"></li>
          </ul>
          <ul id="list-of-sensors">`+Ki.ssnSensors_()+Ki.mwSensors_()+Ki.mdaSensors_()+Ki.leoLabsSensors_()+Ki.esocSensors_()+Ki.russianSensors_()+Ki.chineseSensors_()+Ki.otherSensors_()+l.b.html`
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
          `)}}),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,s.Gn)("sensor-selected-container"))||void 0===e||e.addEventListener("click",(()=>{var e;l.b.runEvent(o.RL.bottomMenuClick,this.bottomIconElementName),null===(e=l.b.getSoundManager())||void 0===e||e.play(m.p.CLICK)})),(0,s.Gn)("sensor-list-content").addEventListener("click",(e=>{var t;let i=e.target;if(!(null==i?void 0:i.classList.contains("menu-selectable"))&&(i=null==i?void 0:i.closest(".menu-selectable"),!(null==i?void 0:i.classList.contains("menu-selectable"))))return;if("reset-sensor-button"===i.id)return l.b.getSensorManager().resetSensorSelected(),void l.b.getSoundManager().play(m.p.MENU_BUTTON);null===(t=l.b.getSoundManager())||void 0===t||t.play(m.p.CLICK);const a=i.dataset.sensor;this.sensorListContentClick(a)}))}}),l.b.register({event:o.RL.selectSatData,cbName:"sensor",cb:e=>{null!=e&&(null===l.b.getPlugin(Mi.s)||this.isSensorLinksAdded||((0,s.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
                  <div id="sensors-in-fov-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                        data-tooltip="Visualize Sensor Coverage">Show All Sensors with FOV...</div>
                `),(0,s.Gn)("sensors-in-fov-link").addEventListener("click",(()=>{l.b.getSoundManager().play(m.p.CLICK);const e=l.b.getPlugin(p.P);if(!e)return;const t=e.getSelectedSat();t.isMissile()||Object.keys($i.T).forEach((e=>{const i=$i.T[e];i.isSatInFov(t,l.b.getTimeManager().simulationTimeObj)&&l.b.getLineManager().create(yi.jv.MULTI_SENSORS_TO_SAT,[t.id,l.b.getCatalogManager().getSensorFromSensorName(i.name)],"g")}))})),this.isSensorLinksAdded=!0))}})}addJs(){super.addJs(),l.b.register({event:o.RL.sensorDotSelected,cbName:this.PLUGIN_NAME,cb:e=>{if(settingsManager.isMobileModeEnabled)return;if(!e.isSensor())return;const t=e,i=l.b.getSensorManager();if(i.setSensor(null,t.sensorId),0===i.currentSensors.length)throw new Error("No sensors found");const a=l.b.getTimeManager();l.b.getMainCamera().lookAtLatLon(i.currentSensors[0].lat,i.currentSensors[0].lon,i.currentSensors[0].zoom,a.selectedDate)}}),l.b.register({event:o.RL.onCruncherReady,cbName:this.PLUGIN_NAME,cb:()=>{!settingsManager.disableUI&&settingsManager.isLoadLastSensor&&Ki.reloadLastSensor_()}})}sensorListContentClick(e){var t;if(!this.isMenuButtonActive)return;const i=l.b.getSensorManager();if(void 0!==e){switch(e){case"ssnAll":i.setSensor("SSN");break;case"mwAll":i.setSensor("NATO-MW");break;case"mdAll":i.setSensor("MD-ALL");break;case"esocAll":i.setSensor("ESOC-ALL");break;case"llAll":i.setSensor("LEO-LABS");break;case"rusAll":i.setSensor("RUS-ALL");break;case"prcAll":i.setSensor("PRC-ALL");break;default:i.setSensor($i.T[`${e}`])}null===(t=l.b.getPlugin(p.P))||void 0===t||t.selectSat(-1);try{l.b.getMainCamera().lookAtLatLon(i.currentSensors[0].lat,i.currentSensors[0].lon,i.currentSensors[0].zoom,l.b.getTimeManager().selectedDate)}catch(e){f.x.warn(`Error in sensorListContentClick: ${e}`)}settingsManager.currentColorScheme==l.b.getColorSchemeManager().default&&dt.j.change("default")}else f.x.debug("The menu item was clicked but the menu was not defined.")}static createLiForSensor_(e){return l.b.html`
      <li class="menu-selectable" data-sensor="${e.objName}">
        <span>${e.uiName}</span>
        <span>${e.system}</span>
        <span class="badge dark-blue-badge" data-badge-caption="${e.operator}"></span>
      </li>
    `}static ssnSensors_(){return this.createSection_({header:"Space Surveillance Network Sensors",sensors:[$i.T.EGLAFB,$i.T.KWAJSPF,$i.T.GEODDSDGC,$i.T.GEODDSMAU,$i.T.GEODDSSOC,$i.T.KWAJALT,$i.T.KWAJMMW,$i.T.KWAJALC,$i.T.KWAJTDX,$i.T.MITMIL,$i.T.RAFASC,$i.T.GLBII,$i.T.HOLCBAND,$i.T.HOLSST],topLinks:[{name:"All SSN Sensors",dataSensor:"ssnAll",badge:"COALITION"}]})}static mwSensors_(){return this.createSection_({header:"US Missile Warning Sensors",sensors:[$i.T.BLEAFB,$i.T.CODSFS,$i.T.CAVSFS,$i.T.CLRSFS,$i.T.COBRADANE,$i.T.RAFFYL,$i.T.PITSB],topLinks:[{name:"All MW Sensors",dataSensor:"mwAll",badge:"NORAD"}]})}static mdaSensors_(){return this.createSection_({header:"US Missile Defense Agency Sensors",sensors:[$i.T.HARTPY,$i.T.QTRTPY,$i.T.KURTPY,$i.T.SHATPY,$i.T.KCSTPY,$i.T.SBXRDR],topLinks:[{name:"All MDA Sensors",dataSensor:"mdAll",badge:"MDA"}]})}static createSection_(e){return l.b.html`
              <li class="divider"></li>
              <h5 class="center-align">${e.header}</h5>
              <li class="divider"></li>
              ${e.topLinks.map((e=>l.b.html`<li class="menu-selectable sensor-top-link" data-sensor="${e.dataSensor}">
                <span>${e.name}</span>
                <span class="badge dark-blue-badge" data-badge-caption="${e.badge}"></span>
              </li>`)).join("")}
              ${e.sensors.map((e=>Ki.createLiForSensor_(e))).join("")}
              `}static esocSensors_(){return this.createSection_({header:"ESA Space Operations Center Sensors",sensors:[$i.T.GRV,$i.T.TIR,$i.T.GES,$i.T.NRC,$i.T.PDM,$i.T.TRO,$i.T.Tenerife,$i.T.ZimLAT,$i.T.ZimSMART,$i.T.Tromso,$i.T.Kiruna,$i.T.Sodankyla,$i.T.Svalbard],topLinks:[{name:"All ESOC Sensors",dataSensor:"esocAll",badge:"ESA"}]})}static leoLabsSensors_(){return this.createSection_({header:"Leo Labs Sensors",sensors:[$i.T.LEOCRSR,$i.T.LEOAZORES,$i.T.LEOKSR,$i.T.LEOPFISR,$i.T.LEOMSR],topLinks:[{name:"All Leo Labs Sensors",dataSensor:"llAll",badge:"LEOLABS"}]})}static otherSensors_(){return this.createSection_({header:"Other Sensors",sensors:[$i.T.ROC,$i.T.MLS,$i.T.PO,$i.T.LSO,$i.T.MAY],topLinks:[]})}static russianSensors_(){return this.createSection_({header:"Russian Sensors",sensors:[$i.T.OLED,$i.T.OLEV,$i.T.PEC,$i.T.MISD,$i.T.MISV,$i.T.LEKV,$i.T.ARMV,$i.T.KALV,$i.T.BARV,$i.T.YENV,$i.T.ORSV,$i.T.STO,$i.T.NAK],topLinks:[{name:"All Russian Sensors",dataSensor:"rusAll",badge:"RUS"}]})}static chineseSensors_(){return this.createSection_({header:"Chinese Sensors",sensors:[$i.T.SHD,$i.T.HEI,$i.T.ZHE,$i.T.XIN,$i.T.PMO],topLinks:[{name:"All Chinese Sensors",dataSensor:"prcAll",badge:"PRC"}]})}static reloadLastSensor_(){const e=zi.p.getInstance().getItem(zi.Q.CURRENT_SENSOR);if(!e)return;const t=JSON.parse(e);if(null!==t)try{const e=l.b.getSensorManager();void 0===t[0]||null==t[0]?(e.setSensor(null,t[1]),dt.j.change("default")):void 0===t[0].objName?(e.setSensor(t[0],t[1]),dt.j.change("default")):(e.setSensor($i.T[t[0].objName],t[1]),dt.j.change("default"))}catch(e){zi.p.getInstance().removeItem(zi.Q.CURRENT_SENSOR)}}}Ki.PLUGIN_NAME="Sensor List";var Yi=i(6886);const Ji=e=>{const t=new CustomEvent("customSubmit",{cancelable:!0});e.dispatchEvent(t)};var Xi=i(6616);class Wi{static updateSensorPosition(e){var t;const i=l.b.getTimeManager(),a=l.b.getCatalogManager(),n=l.b.getSensorManager(),{lon:s,lat:o,alt:r,minaz:c,maxaz:d,minel:u,maxel:m,minrange:h,maxrange:g}=Wi.updateSettingsManager(e);n.whichRadar="CUSTOM",Wi.updateCustomSensorUi_();const b={lat:o,lon:s,alt:r,minAz:c,maxAz:d,minEl:u,maxEl:m,minRng:h,maxRng:g};a.satCruncher.postMessage({typ:Lt.Bi.SENSOR,sensor:b}),Xi.w.updateSensorUiStyling([b]),null===(t=l.b.getPlugin(p.P))||void 0===t||t.selectSat(-1);const v=l.b.getMainCamera();g>6e3?v.changeZoom(C.$R.GEO):v.changeZoom(C.$R.LEO),v.camSnap((0,ki.Lx)(o),(0,ki.Zs)(s,i.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(Wi.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,s.Gn)("cs-lat"),t=(0,s.Gn)("cs-lon"),i=(0,s.Gn)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),i.value=settingsManager.geolocation.alt.toString(),i.dispatchEvent(new Event("change")),(0,s.Gn)("cs-telescope").checked=!0,(0,s.Gn)("cs-minaz").disabled=!0,(0,s.Gn)("cs-maxaz").disabled=!0,(0,s.Gn)("cs-minel").disabled=!0,(0,s.Gn)("cs-maxel").disabled=!0,(0,s.Gn)("cs-minrange").disabled=!0,(0,s.Gn)("cs-maxrange").disabled=!0,(0,s.Gn)("cs-minaz-div").style.display="none",(0,s.Gn)("cs-maxaz-div").style.display="none",(0,s.Gn)("cs-minel-div").style.display="none",(0,s.Gn)("cs-maxel-div").style.display="none",(0,s.Gn)("cs-minrange-div").style.display="none",(0,s.Gn)("cs-maxrange-div").style.display="none",(0,s.Gn)("cs-minaz").value="0",(0,s.Gn)("cs-maxaz").value="360",(0,s.Gn)("cs-minel").value="10",(0,s.Gn)("cs-maxel").value="90",(0,s.Gn)("cs-minrange").value="100",(0,s.Gn)("cs-maxrange").value="50000",(0,s.Gn)("sensor-type").innerHTML="Telescope",(0,s.Gn)("sensor-info-title").innerHTML="Custom Sensor",(0,s.Gn)("sensor-country").innerHTML="Custom Sensor"}catch(e){f.x.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const qi=i.p+"../img/custom.png",Zi=i.p+"../img/multi-site.png";class Qi extends u.c{constructor(){super(Qi.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!1,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)},this.lookanglesLength=1,this.lookanglesInterval=30,this.disabledSensors=[],this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=Zi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=l.b.html`
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
    </div>`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,s.Gn)("multi-site-look-angles-export"))||void 0===e||e.addEventListener("click",(()=>{l.b.getSoundManager().play(m.p.EXPORT);const e=l.b.getSensorManager().lastMultiSiteArray.map((e=>({time:e.time,sensor:e.objName,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)})));(0,at.Eb)(e,"multiSiteLooks")}))}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&l.b.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.refreshSideMenuData(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}addJs(){super.addJs(),l.b.register({event:o.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)}})}refreshSideMenuData(e){this.isMenuButtonActive&&e&&(0,v.QP)((()=>{const t=(0,s.Gn)("multi-site-look-angles-sensor-list");if(!t)return void f.x.warn("Could not find sensor list dom");t.innerHTML="";const i=[];for(const a of l.b.getSensorManager().sensorListUS){if(!a.shortName)continue;const n=document.createElement("button");n.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors.includes(a)&&n.classList.add("btn-red"),i.push(a),n.innerText=a.shortName,n.addEventListener("click",(()=>{n.classList.contains("btn-red")?(n.classList.remove("btn-red"),this.disabledSensors.splice(this.disabledSensors.indexOf(a),1),l.b.getSoundManager().play(m.p.TOGGLE_ON)):(n.classList.add("btn-red"),this.disabledSensors.push(a),l.b.getSoundManager().play(m.p.TOGGLE_OFF)),this.getlookanglesMultiSite_(e,i.filter((e=>!this.disabledSensors.includes(e))))})),t.appendChild(n),t.appendChild(document.createTextNode(" "))}this.getlookanglesMultiSite_(e,i.filter((e=>!this.disabledSensors.includes(e))))}))}getlookanglesMultiSite_(e,t){const i=l.b.getTimeManager(),a=l.b.getSensorManager(),n=l.b.getCatalogManager().staticSet;if(!t){t=[];for(const e in n){const i=n[e];t.push(i)}}const s=!a.isSensorSelected(),o=[...a.currentSensors],r=C.rE/(e.satrec.no*C.rE/C.gc),c=[];for(const a of t){if(a.maxRng<e.perigee&&(!a.maxRng2||a.maxRng2<e.perigee))continue;Xi.w.updateSensorUiStyling([a]);let t=0;for(let n=0;n<24*this.lookanglesLength*60*60;n+=this.lookanglesInterval){t=1e3*n;const s=i.getOffsetTimeObj(t),o=Qi.propagateMultiSite_(s,e.satrec,a);""!==o.time&&(c.push(o),n+=60*r*.75)}}c.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),a.lastMultiSiteArray=c,s?a.setCurrentSensor(null):a.setCurrentSensor(o),Qi.populateMultiSiteTable_(c)}static propagateMultiSite_(e,t,i){const a=it.$.getRae(e,t,i);return it.$.checkIsInView(i,a)?{time:e.toISOString(),el:a.el,az:a.az,rng:a.rng,objName:i.objName}:{time:"",el:0,az:0,rng:0,objName:""}}static populateMultiSiteTable_(e){var t;const i=l.b.getSensorManager(),a=l.b.getCatalogManager().staticSet,n=(0,s.Gn)("multi-site-look-angles-table");n.innerHTML="";let o=n.insertRow(),r=o.insertCell();r.appendChild(document.createTextNode("Time")),r.setAttribute("style","text-decoration: underline");let c=o.insertCell();c.appendChild(document.createTextNode("El")),c.setAttribute("style","text-decoration: underline");let d=o.insertCell();d.appendChild(document.createTextNode("Az")),d.setAttribute("style","text-decoration: underline");let u=o.insertCell();u.appendChild(document.createTextNode("Rng")),u.setAttribute("style","text-decoration: underline");let p=o.insertCell();p.appendChild(document.createTextNode("Sensor")),p.setAttribute("style","text-decoration: underline");const m=l.b.getTimeManager();for(const s of e){const e=a.find((e=>e.objName===s.objName));e&&(o=n.insertRow(),o.setAttribute("class","link"),r=o.insertCell(),r.appendChild(document.createTextNode((0,ei.v)(s.time,"isoDateTime",!0))),c=o.insertCell(),c.appendChild(document.createTextNode(s.el.toFixed(1))),d=o.insertCell(),d.appendChild(document.createTextNode(s.az.toFixed(0))),u=o.insertCell(),u.appendChild(document.createTextNode(s.rng.toFixed(0))),p=o.insertCell(),p.appendChild(document.createTextNode(null!==(t=e.shortName)&&void 0!==t?t:"")),o.addEventListener("click",(()=>{m.changeStaticOffset(new Date(s.time).getTime()-(new Date).getTime()),i.setSensor(e,e.sensorId)})))}}}Qi.PLUGIN_NAME="Multi Site Look Angles";class ea extends u.c{constructor(){super(Qi.PLUGIN_NAME),this.bottomIconCallback=()=>{if(this.isMenuButtonActive){const e=l.b.getSensorManager();e.isSensorSelected()&&((0,s.Gn)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,s.Gn)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,s.Gn)("cs-hei").value=e.currentSensors[0].alt.toString())}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=qi,this.sideMenuElementName="custom-sensor-menu",this.sideMenuElementHtml=l.b.html`
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
  </ul>`,this.rmbCallback=e=>{const t=l.b.getSensorManager(),i=l.b.getColorSchemeManager(),a=l.b.getUiManager(),n=l.b.getCatalogManager(),o=l.b.getInputManager().mouse;switch(e){case"create-observer-rmb":(0,y.$k)((0,s.Gn)("custom-sensor-menu"),1e3),(0,s.Gn)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,s.Gn)("cs-telescope").checked||(0,s.Gn)("cs-telescope").click(),(0,s.Gn)("cs-lat").value=o.latLon.lat.toString(),(0,s.Gn)("cs-lon").value=o.latLon.lon.toString(),(0,s.Gn)("cs-hei").value="0",(0,s.Gn)("cs-type").value="Observer",Ji((0,s.Gn)("customSensor")),n.satCruncher.postMessage({isSunlightView:!0,typ:Lt.Bi.SUNLIGHT_VIEW}),dt.j.change("sunlight"),a.colorSchemeChangeAlert(i.sunlight),(0,zt.J)(n.satCruncher,(()=>{i.setColorScheme(i.sunlight,!0)}),(e=>e.satInSun));break;case"create-sensor-rmb":(0,y.$k)((0,s.Gn)("custom-sensor-menu"),1e3),(0,s.Gn)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,s.Gn)("cs-telescope").checked&&(0,s.Gn)("cs-telescope").click(),(0,s.Gn)("cs-lat").value=o.latLon.lat.toString(),(0,s.Gn)("cs-lon").value=o.latLon.lon.toString(),(0,s.Gn)("cs-hei").value="0",(0,s.Gn)("cs-type").value="Phased Array Radar",(0,s.Gn)("cs-minaz").value="0",(0,s.Gn)("cs-maxaz").value="360",(0,s.Gn)("cs-minel").value="10",(0,s.Gn)("cs-maxel").value="90",(0,s.Gn)("cs-minrange").value="0",(0,s.Gn)("cs-maxrange").value="5556",Ji((0,s.Gn)("customSensor")),dt.j.change("default"),i.setColorScheme(i.default,!0),a.colorSchemeChangeAlert(settingsManager.currentColorScheme),n.satCruncher.postMessage({isSunlightView:!1,typ:Lt.Bi.SUNLIGHT_VIEW})}},this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=l.b.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{ea.httpsCheck_(),ea.addCustomSensorFormSubmitListener(),ea.addTelescopeClickListener_(),ea.addCustomSensorBtnCLickListener_(),ea.addClearCustomSensorListener_()}})}static httpsCheck_(){"https:"!==location.protocol?(0,s.UT)("cs-geolocation"):ea.addUseGeolocationListener_()}static addCustomSensorFormSubmitListener(){(0,s.Gn)("customSensor").addEventListener("submit",(e=>{e.preventDefault()}))}static addUseGeolocationListener_(){(0,s.Gn)("cs-geolocation").addEventListener("click",Wi.useCurrentGeolocationAsSensor)}static addClearCustomSensorListener_(){(0,s.Gn)("cs-clear").addEventListener("click",(()=>{l.b.getSensorManager().clearSecondarySensors()}))}static addCustomSensorBtnCLickListener_(){(0,s.Gn)("cs-submit").addEventListener("click",(()=>{ea.processCustomSensorSubmit_()}))}static processCustomSensorSubmit_(){var e,t,i,a,n;null===(e=(0,s.Gn)("menu-sensor-info"))||void 0===e||e.classList.remove("bmenu-item-disabled"),null===(t=(0,s.Gn)("menu-fov-bubble"))||void 0===t||t.classList.remove("bmenu-item-disabled"),null===(i=(0,s.Gn)("menu-surveillance"))||void 0===i||i.classList.remove("bmenu-item-disabled"),null===(a=(0,s.Gn)("menu-planetarium"))||void 0===a||a.classList.remove("bmenu-item-disabled"),null===(n=(0,s.Gn)("menu-astronomy"))||void 0===n||n.classList.remove("bmenu-item-disabled"),(0,s.Gn)("sensor-type").value=(0,s.Gn)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,s.Gn)("sensor-info-title").innerHTML="Custom Sensor",(0,s.Gn)("sensor-country").innerHTML="Custom Sensor";const o=ea.str2Deg((0,s.Gn)("cs-lon").value),r=ea.str2Deg((0,s.Gn)("cs-lat").value),c=(0,s.Gn)("cs-hei").value,d=(0,s.Gn)("cs-type").value,u=(0,s.Gn)("cs-minaz").value,p=(0,s.Gn)("cs-maxaz").value,m=(0,s.Gn)("cs-minel").value,h=(0,s.Gn)("cs-maxel").value,g=(0,s.Gn)("cs-minrange").value,b=(0,s.Gn)("cs-maxrange").value;let v=C.ge.OBSERVER;switch(d){case"Observer":v=C.ge.OBSERVER;break;case"Optical":v=C.ge.OPTICAL;break;case"Mechanical":v=C.ge.MECHANICAL;break;case"Phased Array Radar":v=C.ge.PHASED_ARRAY_RADAR;break;default:f.x.info(`Unknown sensor type: ${d}`),v=C.ge.OBSERVER}l.b.getSensorManager().addSecondarySensor(new C.hs({id:null,lat:r,lon:o,alt:ea.str2Km(c),minAz:ea.str2Deg(u),maxAz:ea.str2Deg(p),minEl:ea.str2Deg(m),maxEl:ea.str2Deg(h),minRng:ea.str2Km(g),maxRng:ea.str2Km(b),type:v,name:"Custom Sensor",uiName:"Custom Sensor",system:"Custom Sensor",country:"Custom Sensor",objName:"Custom Sensor",operator:"Custom Sensor",zoom:ea.str2Km(b)>6e3?C.$R.GEO:C.$R.LEO,volume:!1}))}static addTelescopeClickListener_(){(0,s.Gn)("cs-telescope").addEventListener("click",(()=>{if((0,s.Gn)("cs-telescope").checked)(0,s.Gn)("cs-minaz-div").style.display="none",(0,s.Gn)("cs-maxaz-div").style.display="none",(0,s.Gn)("cs-minel-div").style.display="none",(0,s.Gn)("cs-maxel-div").style.display="none",(0,s.Gn)("cs-minrange-div").style.display="none",(0,s.Gn)("cs-maxrange-div").style.display="none",(0,s.Gn)("cs-minaz").value="0",(0,s.Gn)("cs-maxaz").value="360",(0,s.Gn)("cs-minel").value="10",(0,s.Gn)("cs-maxel").value="90",(0,s.Gn)("cs-minrange").value="100",(0,s.Gn)("cs-maxrange").value="1000000";else{(0,s.Gn)("cs-minaz-div").style.display="block",(0,s.Gn)("cs-maxaz-div").style.display="block",(0,s.Gn)("cs-minel-div").style.display="block",(0,s.Gn)("cs-maxel-div").style.display="block",(0,s.Gn)("cs-minrange-div").style.display="block",(0,s.Gn)("cs-maxrange-div").style.display="block";const e=l.b.getSensorManager();e.isSensorSelected()&&((0,s.Gn)("cs-minaz").value=e.currentSensors[0].minAz.toString(),(0,s.Gn)("cs-maxaz").value=e.currentSensors[0].maxAz.toString(),(0,s.Gn)("cs-minel").value=e.currentSensors[0].minEl.toString(),(0,s.Gn)("cs-maxel").value=e.currentSensors[0].maxEl.toString(),(0,s.Gn)("cs-minrange").value=e.currentSensors[0].minRng.toString(),(0,s.Gn)("cs-maxrange").value=e.currentSensors[0].maxRng.toString())}}))}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}ea.PLUGIN_NAME="Custom Sensor";var ta=i(5058);const ia=i.p+"../img/lookangles.png";class aa extends u.c{constructor(){super(aa.PLUGIN_NAME),this.dependencies=[p.P.PLUGIN_NAME],this.isRiseSetLookangles_=!0,this.lookanglesInterval_=30,this.lookanglesLength_=2,this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconElementName="look-angles-icon",this.bottomIconLabel="Look Angles",this.bottomIconImg=ia,this.bottomIconCallback=()=>{this.refreshSideMenuData_()},this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:450},this.helpTitle="Look Angles Menu",this.helpBody=l.b.html`
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
    </div>`,this.refreshSideMenuData_=()=>{this.isMenuButtonActive&&(0,v.QP)((()=>{const e=this.selectSatManager_.getSelectedSat(o.C_.EXTRA_ONLY);e.isSatellite()&&this.getlookangles_(e)}))},this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;(0,s.Gn)("look-angles-length").addEventListener("change",(()=>{this.lookanglesLength_=parseFloat((0,s.Gn)("look-angles-length").value),this.refreshSideMenuData_()})),(0,s.Gn)("look-angles-interval").addEventListener("change",(()=>{this.lookanglesInterval_=parseInt((0,s.Gn)("look-angles-interval").value),this.refreshSideMenuData_()})),null===(e=(0,s.Gn)("export-look-angles"))||void 0===e||e.addEventListener("click",(()=>{l.b.getSoundManager().play(m.p.EXPORT),(0,at.Eb)(this.lastlooksArray_,"Look-Angles")})),(0,s.Gn)("settings-riseset").addEventListener("change",this.settingsRisesetChange_.bind(this));const t=this.selectSatManager_.getSelectedSat();this.checkIfCanBeEnabled_(t)}}),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}}),l.b.register({event:o.RL.resetSensor,cbName:this.PLUGIN_NAME,cb:()=>{this.checkIfCanBeEnabled_(null)}})}addJs(){super.addJs(),l.b.register({event:o.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData_()}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&l.b.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.getlookangles_(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}getlookangles_(e,t){const i=l.b.getTimeManager();if(!t){const e=l.b.getSensorManager();if(!e.isSensorSelected())return console.debug("satellite.getlookangles requires a sensor to be set!"),[];t=e.currentSensors}const a=this.isRiseSetLookangles_?1:this.lookanglesInterval_,n=[];let s=0;for(let o=0;o<24*this.lookanglesLength_*60*60;o+=a){s=1e3*o;const a=i.getOffsetTimeObj(s),l=ta.J.getTearData(a,e.satrec,t,this.isRiseSetLookangles_);if(""!==l.time&&n.push(l),n.length>=1500)break}return n.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),this.lastlooksArray_=n,aa.populateSideMenuTable_(n,i),n}static populateSideMenuTable_(e,t){const i=(0,s.Gn)("looks");i.innerHTML="";const a=i.insertRow(),n=a.insertCell();n.appendChild(document.createTextNode("Time")),n.setAttribute("style","text-decoration: underline");const o=a.insertCell();o.appendChild(document.createTextNode("El")),o.setAttribute("style","text-decoration: underline");const l=a.insertCell();l.appendChild(document.createTextNode("Az")),l.setAttribute("style","text-decoration: underline");const r=a.insertCell();r.appendChild(document.createTextNode("Rng")),r.setAttribute("style","text-decoration: underline");for(const a of e)aa.populateSideMenuRow_(i,n,a,t,o,l,r)}static populateSideMenuRow_(e,t,i,a,n,s,r){if(e.rows.length>0){const n=e.insertRow();n.setAttribute("class","link"),(t=n.insertCell()).appendChild(document.createTextNode((0,ei.v)(i.time,"isoDateTime",!1))),t.addEventListener("click",(()=>{a.changeStaticOffset(new Date(`${(0,ei.v)(i.time,"isoDateTime",!1)}z`).getTime()-a.realTime),a.calculateSimulationTime(),l.b.runEvent(o.RL.updateDateTime,new Date(a.dynamicOffsetEpoch+a.staticOffset))})),n.insertCell().appendChild(document.createTextNode(i.el.toFixed(1))),n.insertCell().appendChild(document.createTextNode(i.az.toFixed(0))),n.insertCell().appendChild(document.createTextNode(i.rng.toFixed(0)))}}settingsRisesetChange_(e,t){if(null==e)throw new Error("e is undefined");null!=t||(t=(0,s.Gn)("settings-riseset").checked),this.isRiseSetLookangles_=!!t,this.refreshSideMenuData_()}}aa.PLUGIN_NAME="Look Angles";const na=i.p+"../img/radio-tower.png";class sa extends u.c{constructor(){super(sa.PLUGIN_NAME),this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.getSensorInfo(),this.checkIfLinesVisible_(l.b.getLineManager())},this.bottomIconElementName="sensor-info-icon",this.bottomIconLabel="Sensor Info",this.bottomIconImg=na,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="sensor-info-menu",this.sideMenuElementHtml=l.b.html`
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
    Additionally, lines can be quickly created from the sensor to the sun or moon from this menu.`}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.addSensorToSunBtnListener_(),this.addSensorToMoonBtnListener()}}),l.b.register({event:o.RL.onLineAdded,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfLinesVisible_(e)}})}checkIfLinesVisible_(e){this.isSunLineVisible_=e.drawLineList.some((e=>e.type===yi.jv.SENSOR_TO_SUN)),this.isSunLineVisible_?((0,s.Gn)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0):((0,s.Gn)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1),this.isMonnLineVisible_=e.drawLineList.some((e=>e.type===yi.jv.SENSOR_TO_MOON)),this.isMonnLineVisible_?((0,s.Gn)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0):((0,s.Gn)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1)}addSensorToMoonBtnListener(){(0,s.Gn)("sensor-moon-btn").addEventListener("click",(()=>{if(this.isMonnLineVisible_){const e=l.b.getLineManager();for(const t of e.drawLineList)if(t.type===yi.jv.SENSOR_TO_MOON)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,s.Gn)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1,void l.b.getSoundManager().play(m.p.TOGGLE_OFF)}else{const e=l.b.getSensorManager().currentSensors;1!==e.length&&l.b.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.b.getScene();l.b.getLineManager().create(yi.jv.SENSOR_TO_MOON,[l.b.getCatalogManager().getSensorFromSensorName(e[0].name),t.moon.position[0],t.moon.position[1],t.moon.position[2]],"w"),(0,s.Gn)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0,l.b.getSoundManager().play(m.p.TOGGLE_ON)}}))}addSensorToSunBtnListener_(){(0,s.Gn)("sensor-sun-btn").addEventListener("click",(()=>{if(this.isSunLineVisible_){const e=l.b.getLineManager();for(const t of e.drawLineList)if(t.type===yi.jv.SENSOR_TO_SUN)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,s.Gn)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1,void l.b.getSoundManager().play(m.p.TOGGLE_OFF)}else{const e=l.b.getSensorManager().currentSensors;1!==e.length&&l.b.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.b.getScene();l.b.getLineManager().create(yi.jv.SENSOR_TO_SUN,[l.b.getCatalogManager().getSensorFromSensorName(e[0].name),t.sun.position[0],t.sun.position[1],t.sun.position[2]],"o"),(0,s.Gn)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0,l.b.getSoundManager().play(m.p.TOGGLE_ON)}}))}getSensorInfo(){if(!this.isHtmlAdded)return;const e=l.b.getSensorManager().currentSensors[0];(0,s.Gn)("sensor-latitude").innerHTML=e.lat>0?`${e.lat.toFixed(2)}° N`:`${Math.abs(e.lat).toFixed(2)}° S`,(0,s.Gn)("sensor-longitude").innerHTML=e.lon>0?`${e.lon.toFixed(2)}° E`:`${Math.abs(e.lon).toFixed(2)}° W`,(0,s.Gn)("sensor-minazimuth").innerHTML=`${e.minAz.toFixed(1).toString()}°`,(0,s.Gn)("sensor-maxazimuth").innerHTML=`${e.maxAz.toFixed(1).toString()}°`,(0,s.Gn)("sensor-minelevation").innerHTML=`${e.minEl.toFixed(1).toString()}°`,(0,s.Gn)("sensor-maxelevation").innerHTML=`${e.maxEl.toFixed(1).toString()}°`,(0,s.Gn)("sensor-minrange").innerHTML=`${e.minRng.toFixed(1).toString()} km`,(0,s.Gn)("sensor-maxrange").innerHTML=`${e.maxRng.toFixed(1).toString()} km`,e.type===C.ge.OPTICAL||e.type===C.ge.OBSERVER?((0,s.UT)((0,s.Gn)("sensor-band").parentElement),(0,s.UT)((0,s.Gn)("sensor-beamwidth").parentElement)):((0,s.K4)((0,s.Gn)("sensor-band").parentElement),(0,s.Gn)("sensor-band").innerHTML=e.freqBand?e.freqBand:"Unknown",e instanceof C.n5?((0,s.K4)((0,s.Gn)("sensor-beamwidth").parentElement),(0,s.Gn)("sensor-beamwidth").innerHTML=e.beamwidth?`${e.beamwidth.toFixed(1).toString()}°`:"Unknown"):(0,s.UT)((0,s.Gn)("sensor-beamwidth").parentElement))}}sa.PLUGIN_NAME="Sensor Info";var oa=i(926);const la=i.p+"../img/search.png";class ra extends u.c{constructor(){super(ra.PLUGIN_NAME),this.dependencies=[Mi.s.PLUGIN_NAME,p.P.PLUGIN_NAME],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=la,this.isRequireSensorSelected=!0,this.isAddStfLinksOnce=!1,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=l.b.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
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
  </div>`,this.selectSatManager_=l.b.getPlugin(p.P)}addHtml(){super.addHtml(),l.b.register({event:o.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{null!=e&&l.b.getPlugin(Mi.s)&&!this.isAddStfLinksOnce&&((0,s.Gn)("sat-info-top-links").insertAdjacentHTML("beforeend",l.b.html`
            <div id="stf-on-object-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,s.Gn)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0)}})}addJs(){super.addJs(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("stfForm").addEventListener("submit",(e=>{e.preventDefault(),l.b.getSoundManager().play(m.p.MENU_BUTTON),this.onSubmit.bind(this)()})),(0,s.Gn)("stf-remove-last").addEventListener("click",(()=>{l.b.getSoundManager().play(m.p.MENU_BUTTON),l.b.getSensorManager().removeStf()})),(0,s.Gn)("stf-clear-all").addEventListener("click",(()=>{l.b.getSoundManager().play(m.p.MENU_BUTTON),l.b.getSensorManager().clearStf()})),(0,s.Gn)("stf-azExt").addEventListener("blur",(()=>{const e=parseFloat((0,s.Gn)("stf-az").value),t=parseFloat((0,s.Gn)("stf-el").value),i=parseFloat((0,s.Gn)("stf-rng").value);let a=parseFloat((0,s.Gn)("stf-azExt").value);a>80&&(a=80,(0,s.Gn)("stf-azExt").value=a.toFixed(1));const n=C.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),o=l.b.getSensorManager().currentSensors[0].toGeodetic().toITRF(n).toJ2000(),r=new C.rv(n,i,(e-a/2)*C.qW,t*C.qW).position(o),c=new C.rv(C.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),i,(e+a/2)*C.qW,t*C.qW).position(o),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,s.Gn)("stf-azExtKm").value=d.toFixed(1)})),(0,s.Gn)("stf-elExt").addEventListener("blur",(()=>{const e=parseFloat((0,s.Gn)("stf-az").value),t=parseFloat((0,s.Gn)("stf-el").value),i=parseFloat((0,s.Gn)("stf-rng").value);let a=parseFloat((0,s.Gn)("stf-elExt").value);a>80&&(a=80,(0,s.Gn)("stf-elExt").value=a.toFixed(1));const n=C.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),o=l.b.getSensorManager().currentSensors[0].toGeodetic().toITRF(n).toJ2000(),r=new C.rv(n,i,e*C.qW,(t-a/2)*C.qW).position(o),c=new C.rv(C.Fk.fromDateTime(l.b.getTimeManager().simulationTimeObj),i,e*C.qW,(t+a/2)*C.qW).position(o),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,s.Gn)("stf-elExtKm").value=d.toFixed(1)}))}}),l.b.register({event:o.RL.resetSensor,cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),l.b.register({event:o.RL.setSensor,cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,y.kW)((0,s.Gn)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonActive=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),l.b.getUiManager().hideSideMenus()}onSubmit(){var e;if(!this.verifySensorSelected())return;const t=parseFloat((0,s.Gn)("stf-az").value),i=parseFloat((0,s.Gn)("stf-azExt").value),a=parseFloat((0,s.Gn)("stf-el").value),n=parseFloat((0,s.Gn)("stf-elExt").value),o=parseFloat((0,s.Gn)("stf-rng").value),r=parseFloat((0,s.Gn)("stf-rngExt").value),c=t-i/2<0?t-i/2+360:t-i/2,d=t+i/2>360?t+i/2-360:t+i/2,u=a-n/2,p=a+n/2,m=o-r/2,h=o+r/2,g=l.b.getSensorManager().currentSensors[0],b=new C.hs({lat:g.lat,lon:g.lon,alt:g.alt,minAz:c,maxAz:d,minEl:u,maxEl:p,minRng:m,maxRng:h,type:C.ge.SHORT_TERM_FENCE,name:"STF",uiName:"STF",zoom:h>6e3?C.$R.GEO:C.$R.LEO,volume:!0});g.isRaeInFov({az:c,el:u,rng:m})&&g.isRaeInFov({az:d,el:p,rng:h})?(l.b.getSensorManager().addStf(b),null===(e=l.b.getPlugin(Ui.n))||void 0===e||e.enableFovView()):f.x.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=l.b.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=l.b.getTimeManager().simulationTimeObj,i=(0,C.Zn)(t,this.selectSatManager_.primarySatObj.position,e.currentSensors[0]);(0,s.Gn)("stf-az").value=i.az.toFixed(1),(0,s.Gn)("stf-el").value=i.el.toFixed(1),(0,s.Gn)("stf-rng").value=i.rng.toFixed(1),l.b.getUiManager().hideSideMenus(),(0,y.$k)((0,s.Gn)("stf-menu"),1e3),this.isMenuButtonActive=!0,this.setBottomIconToSelected()}}ra.PLUGIN_NAME="Short Term Fences";const ca=i.p+"../img/github.png";class da extends u.c{constructor(){super("Social Media"),this.dependencies=["Top Menu"]}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:da.uiManagerFinal_})}static uiManagerFinal_(){var e;const t=document.createElement("li");t.innerHTML=l.b.html`
          <a id="github-share1" class="top-menu-icons" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            src="${ca}"
            />
          </a>
          `,null===(e=(0,s.Gn)("nav-mobile2",!0))||void 0===e||e.insertBefore(t,(0,s.Gn)("nav-mobile2").firstChild)}}var ua=i(5957),pa=i(2478),ma=i(409);class ha extends u.c{constructor(){super(ha.PLUGIN_NAME),this.isRotateL=!0,this.isRotateR=!1,this.isRotateU=!1,this.isRotateD=!1,this.bottomIconElementName="video-director-icon",this.bottomIconImg=ma,this.bottomIconLabel="Video Director",this.sideMenuElementName="video-director-menu",this.sideMenuElementHtml=l.b.html`
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=l.b.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),l.b.register({event:o.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,s.Gn)("video-director-form").addEventListener("change",ha.onFormChange),(0,s.Gn)("video-director-form").addEventListener("submit",ha.onSubmit),(0,s.Gn)("video-director-rotate").addEventListener("click",(()=>{var e;null===(e=l.b.getSoundManager())||void 0===e||e.play(m.p.BUTTON_CLICK),l.b.getMainCamera().autoRotate(!0)}))}})}static onFormChange(e){var t,i,a;if(null==e)throw new Error("e is undefined");switch(null===(t=e.target)||void 0===t?void 0:t.id){case"video-director-rotateL":case"video-director-rotateR":case"video-director-rotateU":case"video-director-rotateD":case"video-director-panL":case"video-director-panR":case"video-director-panU":case"video-director-panD":case"video-director-zoomIn":case"video-director-zoomOut":(0,s.Gn)(e.target.id).checked?null===(i=l.b.getSoundManager())||void 0===i||i.play(m.p.TOGGLE_ON):null===(a=l.b.getSoundManager())||void 0===a||a.play(m.p.TOGGLE_OFF)}(0,s.Gn)("video-director-selectedColor").checked&&0!==settingsManager.selectedColor[3]?(settingsManager.selectedColorFallback=settingsManager.selectedColor,settingsManager.selectedColor=[0,0,0,0]):settingsManager.selectedColor=settingsManager.selectedColorFallback,settingsManager.autoRotateSpeed=parseFloat((0,s.Gn)("video-director-rotateSpeed").value),settingsManager.autoPanSpeed=parseFloat((0,s.Gn)("video-director-panSpeed").value),settingsManager.autoZoomSpeed=parseFloat((0,s.Gn)("video-director-zoomSpeed").value);const n=(0,s.Gn)("video-director-rotateL").checked,o=(0,s.Gn)("video-director-rotateR").checked,r=(0,s.Gn)("video-director-rotateU").checked,c=(0,s.Gn)("video-director-rotateD").checked,d=(0,s.Gn)("video-director-panL").checked,u=(0,s.Gn)("video-director-panR").checked,p=(0,s.Gn)("video-director-panU").checked,h=(0,s.Gn)("video-director-panD").checked,g=(0,s.Gn)("video-director-zoomIn").checked,b=(0,s.Gn)("video-director-zoomOut").checked;n&&!settingsManager.isAutoRotateL&&((0,s.Gn)("video-director-rotateR").checked=!1),o&&!settingsManager.isAutoRotateR&&((0,s.Gn)("video-director-rotateL").checked=!1),r&&!settingsManager.isAutoRotateU&&((0,s.Gn)("video-director-rotateD").checked=!1),c&&!settingsManager.isAutoRotateD&&((0,s.Gn)("video-director-rotateU").checked=!1),d&&!settingsManager.isAutoPanL&&((0,s.Gn)("video-director-panR").checked=!1),u&&!settingsManager.isAutoPanR&&((0,s.Gn)("video-director-panL").checked=!1),p&&!settingsManager.isAutoPanU&&((0,s.Gn)("video-director-panD").checked=!1),h&&!settingsManager.isAutoPanD&&((0,s.Gn)("video-director-panU").checked=!1),g&&!settingsManager.isAutoZoomIn&&((0,s.Gn)("video-director-zoomOut").checked=!1),b&&!settingsManager.isAutoZoomOut&&((0,s.Gn)("video-director-zoomIn").checked=!1)}static onSubmit(e){var t;if(null==e)throw new Error("e is undefined");e.preventDefault(),null===(t=l.b.getSoundManager())||void 0===t||t.play(m.p.BUTTON_CLICK),settingsManager.isAutoRotateR=(0,s.Gn)("video-director-rotateR").checked,settingsManager.isAutoRotateL=(0,s.Gn)("video-director-rotateL").checked,settingsManager.isAutoRotateU=(0,s.Gn)("video-director-rotateU").checked,settingsManager.isAutoRotateD=(0,s.Gn)("video-director-rotateD").checked,settingsManager.isAutoPanR=(0,s.Gn)("video-director-panR").checked,settingsManager.isAutoPanL=(0,s.Gn)("video-director-panL").checked,settingsManager.isAutoPanU=(0,s.Gn)("video-director-panU").checked,settingsManager.isAutoPanD=(0,s.Gn)("video-director-panD").checked,settingsManager.isAutoZoomIn=(0,s.Gn)("video-director-zoomIn").checked,settingsManager.isAutoZoomOut=(0,s.Gn)("video-director-zoomOut").checked}}ha.PLUGIN_NAME="Video Director";const ga=new ha;var ba=i(195),va=i(2257);const fa=(e,t)=>{return i=void 0,a=void 0,s=function*(){null!=t||(t={});try{Sa(t),t.classificationBar&&(new Tt).init(),t.sensor&&((new Ki).init(),(new sa).init(),(new ea).init(),(new aa).init(),(new Qi).init()),t.watchlist&&((new ba.y).init(),(new va._).init()),t.nextLaunch&&(new vi).init(),t.findSat&&(new L).init(),t.shortTermFences&&(new ra).init(),t.orbitReferences&&(new Ci).init(),t.collisions&&(new Bt).init(),t.breakup&&(new yt).init(),t.debrisScreening&&(new Xt).init(),t.editSat&&(new si).init(),t.newLaunch&&(new hi).init(),t.missile&&B(),t.stereoMap&&(new ua.k).init(),t.sensorFov&&(new Ui.n).init(),t.sensorSurv&&(new Yi.I).init(),t.satelliteView&&(new Y).init(),t.satelliteFov&&(new wi.F).init(),t.planetarium&&(new mt).init(),t.astronomy&&(new ht).init(),t.nightToggle&&(new Si).init(),t.dops&&ai.init(),t.constellations&&Ei.init(),t.countries&&g.init(),t.colorsMenu&&Vt.init(),t.screenshot&&Fi.init(),t.launchCalendar&&ui.init(),t.timeMachine&&pa.M.init(),t.photoManager&&Gi.init(),t.screenRecorder&&Pi.init(),t.analysis&&ct.init(),t.settingsMenu&&oa.H.init(),t.soundManager&&Qe.init(),t.gamepad&&li.init(),t.videoDirector&&ga.init(),e.register({event:o.RL.uiManagerFinal,cbName:"core",cb:()=>{Ma(t)}})}catch(e){f.x.info(`Error loading core plugins:${e.message}`)}},new((n=void 0)||(n=Promise))((function(e,t){function o(e){try{r(s.next(e))}catch(e){t(e)}}function l(e){try{r(s.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(o,l)}r((s=s.apply(i,a||[])).next())}));var i,a,n,s},Sa=e=>{e.debug&&(new Wt.s).init(),(new p.P).init(),e.topMenu?(new et.F).init():document.documentElement.style.setProperty("--nav-bar-height","0px"),e.satInfoboxCore&&(new Mi.s).init(),e.datetime&&(new Kt.s).init(),e.social&&(new da).init()},Ma=e=>{const t=(0,s.Gn)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",`${e}px`)}else document.documentElement.style.setProperty("--bottom-menu-height","0px");(0,s.Gn)("bottom-icons")&&""==(0,s.Gn)("bottom-icons").innerText?((0,s.Gn)("nav-footer").style.visibility="hidden",(0,s.UT)("nav-footer")):(0,s.K4)("nav-footer");const i=(0,s.Gn)("bottom-icons-container");if(i){const e=i.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",`${e}px`)}e.aboutManager&&((0,s.Gn)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"keeptrack.space"!==window.location.hostname&&"www.keeptrack.space"!==window.location.hostname||Ca(),(0,s.Gn)("bottom-icons-container").addEventListener("mousewheel",(e=>{e.preventDefault(),((e,t)=>{const i=e.scrollTop+.15*t;e.scrollTop=i})(e.currentTarget,e.deltaY)}),{passive:!1})},Ca=()=>{const e=document.createElement("script");e.type="text/javascript",e.setAttribute("async","true"),e.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7"),document.documentElement.firstChild.appendChild(e),window.dataLayer=window.dataLayer||[];const t=function(e,t){window.dataLayer.push(arguments)};t("js",new Date),t("config","G-ENHWK6L0X7")}}}]);