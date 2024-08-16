"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[303],{2359:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(7420),a=i.n(s),n=i(1605),o=i.n(n)()(a());o.push([e.id,"#collisions-table {\n  line-height: 0.05;\n  font-size: 13px;\n}\n\n#collisions-table td {\n  text-align: center;\n}\n",""]);const l=o},1703:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(7420),a=i.n(s),n=i(1605),o=i.n(n)()(a());o.push([e.id,"#reset-sensor-button {\n  margin: 10px 0px;\n}\n\n#reset-sensor-text {\n  text-align: center;\n}\n\n#list-of-sensors li:first-child {\n  display: none;\n}\n\n#sensor-list-content ul li {\n  padding: 2px !important;\n  overflow: hidden !important;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n/* First span goes left */\n#sensor-list-content ul li span:first-child {\n  float: left;\n  text-align: left;\n}\n\n/* Second span is centered */\n#sensor-list-content ul li span:nth-child(2) {\n  text-align: center;\n}\n\n/* Third span goes right */\n#sensor-list-content ul li span:last-child {\n  float: right;\n  text-align: right;\n}\n",""]);const l=o},1659:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(7420),a=i.n(s),n=i(1605),o=i.n(n)()(a());o.push([e.id,"#collisions-table {\n  line-height: 0.05;\n  font-size: 13px;\n}\n\n#collisions-table td {\n  text-align: center;\n}\n",""]);const l=o},1010:(e,t,i)=>{i.r(t),i.d(t,{CanvasRecorder:()=>Wi,catalogLoader:()=>tt,loadPlugins:()=>Gs,missile:()=>s,uiManagerFinal:()=>Hs});var s={};i.r(s),i.d(s,{bottomMenuClick:()=>I,hideSideMenus:()=>N,init:()=>G,missileChange:()=>R,missileSubmit:()=>D,msAttackerChange:()=>z,msErrorClick:()=>P,msTargetChange:()=>O,onHelpMenuClick:()=>H,searchForRvs:()=>F,uiManagerFinal:()=>B,uiManagerInit:()=>U,updateLoop:()=>$});var a=i(6109),n=i(2792),o=i(1167),l=i(5285),r=i(7299),c=i(1315);const d=i.p+"../img/flag.png";var u=i(9137),g=i(4409),h=i(3794);class m extends u.s{constructor(){super(m.PLUGIN_NAME),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=d,this.bottomIconLabel="Countries",this.sideMenuElementHtml=a.$.html`
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
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=a.$.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("country-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>{var t;null===(t=a.$.getSoundManager())||void 0===t||t.play(h.A.CLICK),m.countryMenuClick_(e.getAttribute("data-group"))}))})),(0,n.m)((0,o.gE)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=a.$.getGroupsManager(),i=c.o.getCountryCode(e);if(""===i)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(r.M.COUNTRY,i,e),m.groupSelected_(e)}static groupSelected_(e){var t;const i=a.$.getGroupsManager(),s=a.$.getCatalogManager(),n=a.$.getUiManager(),l=(0,o.gE)("search");void 0!==e&&void 0!==i.groupList[e]&&(i.selectGroup(i.groupList[e]),i.groupList[e].ids.length<settingsManager.searchLimit?n.searchManager.doSearch(i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=s.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1)):(l.value=i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=s.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1),n.searchManager.fillResultBox(i.groupList[e].ids.map((e=>({id:e}))),s)),null===(t=a.$.getPlugin(g.A))||void 0===t||t.selectSat(-1),settingsManager.isMobileModeEnabled&&n.searchManager.closeSearch(),n.hideSideMenus())}}m.PLUGIN_NAME="Countries Menu";const p=new m;var v=i(3181),b=i(4272),f=i(2511);const S=i.p+"../img/find2.png";var E=i(2908),M=i(5375);class _ extends u.s{static checkAz(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const s=(0,M.Eg)(a.$.getTimeManager().simulationTimeObj,a.$.getCatalogManager().getSat(e.id,l.Z.POSITION_ONLY).position,a.$.getSensorManager().currentSensors[0]);return s.az>=t&&s.az<=i}))}static checkEl(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const s=(0,M.Eg)(a.$.getTimeManager().simulationTimeObj,a.$.getCatalogManager().getSat(e.id,l.Z.POSITION_ONLY).position,a.$.getSensorManager().currentSensors[0]);return s.el>=t&&s.el<=i}))}static checkInview(e){const t=a.$.getDotsManager();return e.filter((e=>1===t.inViewData[e.id]))}static checkObjtype(e,t){return e.filter((e=>e.type===t))}static checkRange(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const s=(0,M.Eg)(a.$.getTimeManager().simulationTimeObj,a.$.getCatalogManager().getSat(e.id,l.Z.POSITION_ONLY).position,a.$.getSensorManager().currentSensors[0]);return s.rng>=t&&s.rng<=i}))}static limitPossibles(e,t){const i=a.$.getUiManager();return e.length>=t&&i.toast(`Too many results, limited to ${t}`,l.pc.serious),e.slice(0,t)}static searchSats(e){let{az:t,el:i,rng:s,countryCode:n,inc:l,azMarg:r,elMarg:c,rngMarg:d,incMarg:u,period:g,periodMarg:h,rcs:m,rcsMarg:p,objType:v,raan:b,raanMarg:f,argPe:S,argPeMarg:M,bus:y,shape:A,payload:x}=e;const L=!isNaN(t)&&isFinite(t),w=!isNaN(i)&&isFinite(i),T=!isNaN(s)&&isFinite(s),C=!isNaN(l)&&isFinite(l),k=!isNaN(b)&&isFinite(b),$=!isNaN(S)&&isFinite(S),N=!isNaN(g)&&isFinite(g),I=!isNaN(m)&&isFinite(m),R="All"!==n,P="All"!==y,O="All"!==A,D="All"!==x;if(r=!isNaN(r)&&isFinite(r)?r:5,c=!isNaN(c)&&isFinite(c)?c:5,d=!isNaN(d)&&isFinite(d)?d:200,u=!isNaN(u)&&isFinite(u)?u:1,h=!isNaN(h)&&isFinite(h)?h:.5,p=!isNaN(p)&&isFinite(p)?p:m/10,f=!isNaN(f)&&isFinite(f)?f:1,M=!isNaN(M)&&isFinite(M)?M:1,!(w||T||L||C||N||I||$||k||R||P||O||D))throw new Error("No Search Criteria Entered");let U=a.$.getCatalogManager().getSats();if(U=C||N||!(L||w||T)?U:_.checkInview(U),U=0!==v?_.checkObjtype(U,v):U,L&&(U=_.checkAz(U,t-r,t+r)),w&&(U=_.checkEl(U,i-c,i+c)),T&&(U=_.checkRange(U,s-d,s+d)),C&&(U=_.checkInc(U,l-u,l+u)),k&&(U=_.checkRightAscension(U,b-f,b+f)),$&&(U=_.checkArgPe(U,S-M,S+M)),N&&(U=_.checkPeriod(U,g-h,g+h)),I&&(U=_.checkRcs(U,m-p,m+p)),"All"!==n){let e=n.split("|").map((e=>E.$5[e]));e=e.filter(((t,i)=>t&&e.indexOf(t)===i)),U=U.filter((t=>e.includes(t.country)))}"All"!==y&&(U=U.filter((e=>e.bus===y))),"All"!==A&&(U=U.filter((e=>e.shape===A))),"All"!==x&&(U=U.filter((e=>{var t,i,s;return(null===(s=null===(i=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===i?void 0:i.split("-")[0])||void 0===s?void 0:s.replace(/[^a-zA-Z]/gu,""))===x}))),U=_.limitPossibles(U,settingsManager.searchLimit);let F="";return U.forEach(((e,t)=>{F+=t<U.length-1?`${e.sccNum},`:`${e.sccNum}`})),(0,o.gE)("search").value=F,a.$.getUiManager().doSearch((0,o.gE)("search").value),U}findByLooksSubmit(){return e=this,t=void 0,s=function*(){const e=a.$.getUiManager(),t=parseFloat((0,o.gE)("fbl-azimuth").value),i=parseFloat((0,o.gE)("fbl-elevation").value),s=parseFloat((0,o.gE)("fbl-range").value),n=parseFloat((0,o.gE)("fbl-inc").value),r=parseFloat((0,o.gE)("fbl-period").value),c=parseFloat((0,o.gE)("fbl-rcs").value),d=parseFloat((0,o.gE)("fbl-azimuth-margin").value),u=parseFloat((0,o.gE)("fbl-elevation-margin").value),g=parseFloat((0,o.gE)("fbl-range-margin").value),h=parseFloat((0,o.gE)("fbl-inc-margin").value),m=parseFloat((0,o.gE)("fbl-period-margin").value),p=parseFloat((0,o.gE)("fbl-rcs-margin").value),v=parseInt((0,o.gE)("fbl-type").value),b=parseFloat((0,o.gE)("fbl-raan").value),f=parseFloat((0,o.gE)("fbl-raan-margin").value),S=parseFloat((0,o.gE)("fbl-argPe").value),E=parseFloat((0,o.gE)("fbl-argPe-margin").value),M=(0,o.gE)("fbl-country").value,y=(0,o.gE)("fbl-bus").value,A=(0,o.gE)("fbl-payload").value,x=(0,o.gE)("fbl-shape").value;(0,o.gE)("search").value="";try{const a={az:t,el:i,rng:s,inc:n,azMarg:d,elMarg:u,rngMarg:g,incMarg:h,period:r,periodMarg:m,rcs:c,rcsMarg:p,objType:v,raan:b,raanMarg:f,argPe:S,argPeMarg:E,countryCode:M,bus:y,payload:A,shape:x};this.lastResults=_.searchSats(a),0===this.lastResults.length&&e.toast("No Satellites Found",l.pc.critical)}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered",l.pc.critical)}},new((i=void 0)||(i=Promise))((function(a,n){function o(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((s=s.apply(e,t||[])).next())}));var e,t,i,s}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerInit,cbName:"findSat",cb:()=>{(0,o.gE)("fbl-error").addEventListener("click",(()=>{(0,o.gE)("fbl-error").style.display="none"}))}}),a.$.register({event:l.kR.uiManagerFinal,cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}constructor(){super(_.PLUGIN_NAME),this.lastResults=[],this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=a.$.html`
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
  </div>`,this.bottomIconElementName="menu-find-sat",this.bottomIconImg=S,this.bottomIconLabel="Find Satellite",this.helpTitle="Find Satellite Menu",this.helpBody=a.$.html`The Find Satellite Menu is used for finding satellites by orbital parameters or satellite characteristics.
<br><br>
For most parameters, you type in the target value on the left and then a margin of error on the right.
For example, if you wanted to find all satellites in a 51-52 degree inclination, you can type 51.5 in the left box and 0.5 in the right box.
The search will then find all satellites within those inclinations and display them in the search bar.
`}printLastResults(){f.J.info(this.lastResults.map((e=>e.name)).join("\n"))}uiManagerFinal(){const e=a.$.getCatalogManager().objectCache;(0,o.gE)("findByLooks-form").addEventListener("submit",(e=>{e.preventDefault(),(0,b.Cs)((()=>{this.findByLooksSubmit(),(0,b.RZ)()}))})),(0,v.c)(e.filter((e=>null==e?void 0:e.bus)).map((e=>e.bus))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,o.gE)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})),E.QK.forEach((e=>{(0,o.gE)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${E.kj[e]}">${e}</option>`)})),(0,v.c)(e.filter((e=>null==e?void 0:e.shape)).map((e=>e.shape))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,o.gE)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}));const t=e.filter((e=>null==e?void 0:e.payload)).map((e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,""))).filter((e=>e.length>=3));(0,v.c)(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{""!==e&&e.length>3&&(0,o.gE)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}))}static checkArgPe(e,t,i){return e.filter((e=>e.argOfPerigee<i&&e.argOfPerigee>t))}static checkInc(e,t,i){return e.filter((e=>e.inclination<i&&e.inclination>t))}static checkPeriod(e,t,i){return e.filter((e=>e.period>t&&e.period<i))}static checkRightAscension(e,t,i){return e.filter((e=>e.rightAscension<i&&e.rightAscension>t))}static checkRcs(e,t,i){return e.filter((e=>e.rcs>t&&e.rcs<i))}}_.PLUGIN_NAME="findSat";var y=i(6232);const A=i.p+"../img/missile.png";var x=i(7027);const L=a.$.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var w=i(5581);let T=!1,C=!1,k=0;const $=()=>{if(void 0!==w.Uu&&w.Uu.missileArray.length>0){const e=a.$.getOrbitManager();for(k=0;k<w.Uu.missileArray.length;k++)e.updateOrbitBuffer(w.Uu.missileArray[k].id)}},N=()=>{(0,y.pz)((0,o.gE)("missile-menu"),1e3),(0,o.gE)("menu-missile").classList.remove("bmenu-item-selected"),T=!1},I=e=>{if("menu-missile"===e){const e=a.$.getUiManager();T?(T=!1,e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.closeSearch(),e.hideSideMenus(),(0,y.xA)((0,o.gE)("missile-menu"),1e3),(0,o.gE)("menu-missile").classList.add("bmenu-item-selected"),T=!0)}},R=()=>{0!==parseFloat((0,o.gE)("ms-type").value)?(0,o.gE)("ms-custom-opt").style.display="none":(0,o.gE)("ms-custom-opt").style.display="block"},P=()=>{(0,o.gE)("ms-error").style.display="none"},O=()=>{-1!==parseInt((0,o.gE)("ms-target").value)?((0,o.gE)("ms-tgt-holder-lat").style.display="none",(0,o.gE)("ms-tgt-holder-lon").style.display="none"):((0,o.gE)("ms-tgt-holder-lat").style.display="block",(0,o.gE)("ms-tgt-holder-lon").style.display="block")},D=()=>{(0,b.Cs)((()=>{const e=a.$.getTimeManager(),t=a.$.getUiManager();(0,o.gE)("ms-error").style.display="none";const i=parseFloat((0,o.gE)("ms-type").value),s=parseFloat((0,o.gE)("ms-attacker").value);let n=parseFloat((0,o.gE)("ms-lat-lau").value),r=parseFloat((0,o.gE)("ms-lon-lau").value);const c=parseFloat((0,o.gE)("ms-target").value);let d=parseFloat((0,o.gE)("ms-lat").value),u=parseFloat((0,o.gE)("ms-lon").value);const g=e.selectedDate.getTime();let h="";if(1===i&&(h="simulation/Russia2USA.json",w.Uu.MassRaidPre(g,h)),2===i&&(h="simulation/Russia2USAalt.json",w.Uu.MassRaidPre(g,h)),3===i&&(h="simulation/China2USA.json",w.Uu.MassRaidPre(g,h)),4===i&&(h="simulation/NorthKorea2USA.json",w.Uu.MassRaidPre(g,h)),5===i&&(h="simulation/USA2Russia.json",w.Uu.MassRaidPre(g,h)),6===i&&(h="simulation/USA2China.json",w.Uu.MassRaidPre(g,h)),7===i&&(h="simulation/USA2NorthKorea.json",w.Uu.MassRaidPre(g,h)),0!==i&&t.toast(`${h} Loaded`,l.pc.standby,!0),0===i){if(-1===c){if(isNaN(d))return t.toast("Invalid Target Latitude!",l.pc.critical),void((0,o.gE)("loading-screen").style.display="none");if(isNaN(u))return t.toast("Invalid Target Longitude!",l.pc.critical),void((0,o.gE)("loading-screen").style.display="none")}else d=w.Uu.globalBMTargets[3*c],u=w.Uu.globalBMTargets[3*c+1];if(C){if(isNaN(n))return t.toast("Invalid Launch Latitude!",l.pc.critical),void((0,o.gE)("loading-screen").style.display="none");if(isNaN(r))return t.toast("Invalid Launch Longitude!",l.pc.critical),void((0,o.gE)("loading-screen").style.display="none")}let e,i;const h=a.$.getCatalogManager();if(s<200){e=s-100,i=500-w.Uu.missilesInUse;let t=1200;100!=s&&(n=w.Uu.UsaICBM[4*e],r=w.Uu.UsaICBM[4*e+1],t=1100),w.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,w.Uu.UsaICBM[4*e+2],30,2.9,.07,w.Uu.UsaICBM[4*e+3],"United States",t)}else if(s<300){e=s-200,i=500-w.Uu.missilesInUse;const t=1120;213!=s&&214!=s&&215!=s&&(n=w.Uu.RussianICBM[4*e],r=w.Uu.RussianICBM[4*e+1]),w.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,w.Uu.RussianICBM[4*e+2],30,2.9,.07,w.Uu.RussianICBM[4*e+3],"Russia",t)}else if(s<400){e=s-300,i=500-w.Uu.missilesInUse;const t=1120;321!=s&&(n=w.Uu.ChinaICBM[4*e],r=w.Uu.ChinaICBM[4*e+1]),w.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,w.Uu.ChinaICBM[4*e+2],30,2.9,.07,w.Uu.ChinaICBM[4*e+3],"China",t)}else if(s<500){e=s-400,i=500-w.Uu.missilesInUse;const t=1120;400!=s&&(n=w.Uu.NorthKoreanBM[4*e],r=w.Uu.NorthKoreanBM[4*e+1]),w.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,w.Uu.NorthKoreanBM[4*e+2],30,2.9,.07,w.Uu.NorthKoreanBM[4*e+3],"North Korea",t)}else if(s<600){e=s-500,i=500-w.Uu.missilesInUse;const t=1e3;500!=s&&(n=w.Uu.FraSLBM[4*e],r=w.Uu.FraSLBM[4*e+1]),w.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,w.Uu.FraSLBM[4*e+2],30,2.9,.07,w.Uu.FraSLBM[4*e+3],"France",t)}else if(s<700){e=s-600,i=500-w.Uu.missilesInUse;const t=1200;600!=s&&(n=w.Uu.ukSLBM[4*e],r=w.Uu.ukSLBM[4*e+1]),w.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,w.Uu.ukSLBM[4*e+2],30,2.9,.07,w.Uu.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(w.Uu.lastMissileError,w.Uu.lastMissileErrorType),t.doSearch("RV_")}(0,o.gE)("loading-screen").style.display="none"}))},U=()=>{(0,o.gE)("left-menus").insertAdjacentHTML("beforeend",a.$.html`
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
      `),(0,o.gE)("bottom-icons").insertAdjacentHTML("beforeend",a.$.html`
        <div id="menu-missile" class="bmenu-item">
          <img
            alt="missile"
            src="" delayedsrc=${A}
          />
          <span class="bmenu-title">Missile</span>
          <div class="status-icon"></div>
        </div>
        `)},F=()=>{a.$.getUiManager().doSearch("RV_")},B=()=>{(0,n.m)((0,o.gE)("missile-menu")),(0,o.gE)("missile").addEventListener("submit",(e=>{e.preventDefault(),D()})),(0,o.gE)("ms-attacker").addEventListener("change",z),(0,o.gE)("ms-target").addEventListener("change",O),(0,o.gE)("ms-error").addEventListener("click",P),(0,o.gE)("missile").addEventListener("change",R),(0,o.gE)("searchRvBtn").addEventListener("click",F),z(),O()},G=()=>{a.$.register({event:l.kR.uiManagerInit,cbName:"missile",cb:U}),a.$.register({event:l.kR.uiManagerFinal,cbName:"missile",cb:B}),a.$.register({event:l.kR.bottomMenuClick,cbName:"missile",cb:I}),a.$.register({event:l.kR.hideSideMenus,cbName:"missile",cb:N}),a.$.register({event:l.kR.updateLoop,cbName:"updateMissileOrbits",cb:$}),a.$.register({event:l.kR.onHelpMenuClick,cbName:"missile",cb:H})},H=()=>!!T&&(x.Z.showAdvice("Missile Menu",L),!0),z=()=>{C=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,o.gE)("ms-attacker").value)&&(C=!0);C?((0,o.gE)("ms-lau-holder-lat").style.display="block",(0,o.gE)("ms-lau-holder-lon").style.display="block"):((0,o.gE)("ms-lau-holder-lat").style.display="none",(0,o.gE)("ms-lau-holder-lon").style.display="none")};var j=i(187),V=i(6833);const J=i.p+"../img/sat3.png";class X extends u.s{constructor(){super(X.name),this.dependencies=[g.A.name],this.isRequireSatelliteSelected=!0,this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=J,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{a.$.getMainCamera().cameraType===V.A.SATELLITE?(a.$.getUiManager().hideSideMenus(),a.$.getMainCamera().cameraType=V.A.FIXED_TO_SAT,(0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-selected")):-1!==this.selectSatManager_.selectedSat?(a.$.getMainCamera().cameraType=V.A.SATELLITE,(0,o.gE)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(a.$.getUiManager().toast("Select a Satellite First!",l.pc.caution),(0,j.h)((0,o.gE)(this.bottomIconElementName)))},this.lastLongAudioTime=0,this.selectSatManager_=a.$.getPlugin(g.A)}}var Y=i(1386);const K=i.p+"../audio/beep1.mp3",W=i.p+"../audio/button.mp3",Z=i.p+"../audio/button2.mp3",q=i.p+"../audio/chatter1.mp3",Q=i.p+"../audio/chatter2.mp3",ee=i.p+"../audio/chatter3.mp3",te=i.p+"../audio/chatter4.mp3",ie=i.p+"../audio/chatter5.mp3",se=i.p+"../audio/chatter6.mp3",ae=i.p+"../audio/chatter7.mp3",ne=i.p+"../audio/chatter8.mp3",oe=i.p+"../audio/click10.mp3",le=i.p+"../audio/click11.mp3",re=i.p+"../audio/click12.mp3",ce=i.p+"../audio/click13.mp3",de=i.p+"../audio/click14.mp3",ue=i.p+"../audio/click15.mp3",ge=i.p+"../audio/click16.mp3",he=i.p+"../audio/click17.mp3",me=i.p+"../audio/click18.mp3",pe=i.p+"../audio/click19.mp3",ve=i.p+"../audio/click2.mp3",be=i.p+"../audio/click20.mp3",fe=i.p+"../audio/click21.mp3",Se=i.p+"../audio/click22.mp3",Ee=i.p+"../audio/click23.mp3",Me=i.p+"../audio/click24.mp3",_e=i.p+"../audio/click25.mp3",ye=i.p+"../audio/click26.mp3",Ae=i.p+"../audio/click27.mp3",xe=i.p+"../audio/click28.mp3",Le=i.p+"../audio/click29.mp3",we=i.p+"../audio/click3.mp3",Te=i.p+"../audio/click30.mp3",Ce=i.p+"../audio/click4.mp3",ke=i.p+"../audio/click7.mp3",$e=i.p+"../audio/click8.mp3",Ne=i.p+"../audio/error.mp3",Ie=i.p+"../audio/error2.mp3",Re=i.p+"../audio/export.wav",Pe=i.p+"../audio/genericBeep1.mp3",Oe=i.p+"../audio/genericBeep2.mp3",De=i.p+"../audio/genericBeep3.mp3",Ue=i.p+"../audio/liftoff.mp3",Fe=i.p+"../audio/loading.wav",Be=i.p+"../audio/pop.mp3",Ge=i.p+"../audio/switch.mp3",He=i.p+"../audio/toggle-off.mp3",ze=i.p+"../audio/toggle-on.mp3",je=i.p+"../audio/whoosh1.mp3",Ve=i.p+"../audio/whoosh2.mp3",Je=i.p+"../audio/whoosh3.mp3",Xe=i.p+"../audio/whoosh4.mp3",Ye=i.p+"../audio/whoosh5.mp3",Ke=i.p+"../audio/whoosh6.mp3",We=i.p+"../audio/whoosh7.mp3",Ze=i.p+"../audio/whoosh8.mp3";class qe extends u.s{constructor(){super("Sound Manager"),this.lastLongAudioTime=0,this.isMute=!1,this.currentChatterClip_=0,this.voices=[],this.maxClickClip_=0,this.sounds={standby:new Audio(Be),error1:new Audio(Ne),error2:new Audio(Ie),export:new Audio(Re),click:new Audio(Ge),beep1:new Audio(K),genericBeep1:new Audio(Pe),genericBeep2:new Audio(Oe),genericBeep3:new Audio(De),whoosh1:new Audio(je),whoosh2:new Audio(Ve),whoosh3:new Audio(Je),whoosh4:new Audio(Xe),whoosh5:new Audio(Ye),whoosh6:new Audio(Ke),whoosh7:new Audio(We),whoosh8:new Audio(Ze),click1:new Audio(Te),click2:new Audio(ve),click3:new Audio(we),click4:new Audio(Ce),click5:new Audio(Le),click6:new Audio(Ae),click7:new Audio(ke),click8:new Audio($e),click9:new Audio(xe),click10:new Audio(oe),click11:new Audio(le),click12:new Audio(re),click13:new Audio(ce),click14:new Audio(de),click15:new Audio(ue),click16:new Audio(ge),click17:new Audio(he),click18:new Audio(me),click19:new Audio(pe),click20:new Audio(be),click21:new Audio(fe),click22:new Audio(Se),click23:new Audio(Ee),click24:new Audio(Me),click25:new Audio(_e),click26:new Audio(ye),chatter1:new Audio(q),chatter2:new Audio(Q),chatter3:new Audio(ee),chatter4:new Audio(te),chatter5:new Audio(ie),chatter6:new Audio(se),chatter7:new Audio(ae),chatter8:new Audio(ne),loading:new Audio(Fe),button:new Audio(W),menuButton:new Audio(Z),toggleOn:new Audio(ze),toggleOff:new Audio(He),liftoff:new Audio(Ue)},this.addJs=()=>{super.addJs(),Y.M.registerSingleton(l.dz.SoundManager,this),a.$.register({event:l.kR.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{this.voices=speechSynthesis.getVoices()}}),this.sounds.loading.volume=.25,this.sounds.export.volume=.3,this.sounds.error2.volume=.5},Object.keys(this.sounds).forEach((e=>{if(e.startsWith("click")){const t=parseInt(e.replace("click",""));t>this.maxClickClip_&&(this.maxClickClip_=t)}}))}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter((e=>"Google UK English Female"==e.name))[0],window.speechSynthesis.speak(t)}stop(e,t=!0){if(e===h.A.CHATTER){clearTimeout(this.nextChatter);for(let e=1;e<=8;e++)this.stop(`chatter${e}`,t);return}const i=this.sounds[e];t&&qe.fadeOut_(i)}static fadeOut_(e,t=1e3){const i=e.volume,s=t/10,a=e.volume/s;let n=0;const o=setInterval((()=>{n++,e.volume>.05&&(e.volume-=a),n===s&&(e.pause(),e.currentTime=0,clearInterval(o),e.volume=i)}),10)}play(e){var t;if(!(null===(t=navigator.userActivation)||void 0===t?void 0:t.hasBeenActive))return;if(this.isMute)return;if((0,o.gE)("loading-screen").classList.contains("fullscreen"))return;let i,s=1;switch(e){case h.A.BEEP:return s=Math.floor(3*Math.random())+1,i=this.sounds[`genericBeep${s}`],void i.play();case h.A.WHOOSH:return s=Math.floor(8*Math.random())+1,i=this.sounds[`whoosh${s}`],void i.play();case h.A.ERROR:if(this.lastLongAudioTime+12e5>Date.now())return;return this.lastLongAudioTime=Date.now(),s=Math.floor(2*Math.random())+1,i=this.sounds[`error${s}`],void i.play();case h.A.CLICK:return s=Math.floor(Math.random()*this.maxClickClip_)+1,i=this.sounds[`click${s}`],i.volume=.25,void i.play();case h.A.CHATTER:return s=Math.floor(8*Math.random())+1,s===this.currentChatterClip_&&(s++,s>8&&(s=1)),i=this.sounds[`chatter${s}`],i.volume=.15,this.stop(h.A.CHATTER,!1),i.play(),void(this.nextChatter=setTimeout((()=>{this.play(h.A.CHATTER)}),1e3*i.duration+1e4));default:i=this.sounds[e],i.play()}}}const Qe=new qe;var et=i(6081),tt=i(6251),it=i(8899),st=i(680),at=i(1722);class nt{static exportTle2Csv(e,t=!0){try{const i=[],s=e.filter((e=>e.isSatellite()&&e.tle1));if(0===s.length)return void f.J.info("No TLE data to export");s.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of s)void 0!==e.tle1&&void 0!==e.tle2&&(t&&"ANALSAT"===e.country||i.push({satId:e.sccNum,name:e.name,tle1:e.tle1,tle2:e.tle2,inclination:e.inclination,eccentricity:e.eccentricity,period:e.period,raan:e.rightAscension,apogee:e.apogee,perigee:e.perigee,country:e.country,site:e.launchSite,rocket:e.launchVehicle,rcs:e.rcs,visualMagnitude:e.vmag,user:e.user,mission:e.mission,purpose:e.purpose,contractor:e.manufacturer,dryMass:e.dryMass,liftMass:e.launchMass,lifeExpected:e.lifetime,power:e.power}));(0,st.g3)(i,"catalogInfo")}catch(e){}}static exportSatInFov2Csv(e){const t=e.filter((e=>{var t;return e.isSatellite()&&e.tle1&&1===(null===(t=a.$.getDotsManager().inViewData)||void 0===t?void 0:t[e.id])})).map((e=>{const t=e;return{satId:t.sccNum,name:t.name,country:t.country,apogee:t.apogee,perigee:t.perigee}}));(0,st.g3)(t,"satInView")}static exportTle2Txt(e,t=2,i=!0){try{const s=[],a=e.filter((e=>e.isSatellite()&&e.tle1));if(0===a.length)return void f.J.info("No TLE data to export");a.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of a)void 0!==e.tle1&&void 0!==e.tle2&&(i&&"ANALSAT"===e.country||(3===t&&s.push(e.name),e.tle1.includes("NO TLE")&&console.log(e.sccNum),e.tle2.includes("NO TLE")&&console.log(e.sccNum),s.push(e.tle1),s.push(e.tle2)));const n=s.join("\n"),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,at.saveAs)(o,"TLE.txt")}catch(e){}}}var ot=i(3376);const lt=i.p+"../img/analysis.png";class rt extends u.s{addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:"analysis",cb:()=>{var e,t,i,s,l,r,c,d,u;null===(e=(0,o.gE)("analysis-bpt"))||void 0===e||e.addEventListener("submit",(e=>{e.preventDefault(),rt.analysisBptSumbit_()})),null===(t=(0,o.gE)("findCsoBtn"))||void 0===t||t.addEventListener("click",(()=>{(0,b.Cs)(this.findCsoBtnClick_.bind(this))})),null===(i=(0,o.gE)("findReentries"))||void 0===i||i.addEventListener("click",(()=>{(0,b.Cs)(rt.findRaBtnClick_)}));const g=a.$.getCatalogManager().objectCache;null===(s=(0,o.gE)("export-catalog-csv-btn"))||void 0===s||s.addEventListener("click",(()=>{nt.exportTle2Csv(g)})),null===(l=(0,o.gE)("export-sat-fov-csv-btn"))||void 0===l||l.addEventListener("click",(()=>{nt.exportSatInFov2Csv(g)})),null===(r=(0,o.gE)("export-catalog-txt-2a"))||void 0===r||r.addEventListener("click",(()=>{nt.exportTle2Txt(g)})),null===(c=(0,o.gE)("export-catalog-txt-2b"))||void 0===c||c.addEventListener("click",(()=>{nt.exportTle2Txt(g,2,!1)})),null===(d=(0,o.gE)("export-catalog-txt-3a"))||void 0===d||d.addEventListener("click",(()=>{nt.exportTle2Txt(g,3)})),null===(u=(0,o.gE)("export-catalog-txt-3b"))||void 0===u||u.addEventListener("click",(()=>{nt.exportTle2Txt(g,3,!1)})),(0,n.m)((0,o.gE)("analysis-menu"))}}),a.$.register({event:l.kR.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{rt.setSensor_(e)}})}findCloseObjects(){if(this.searchStrCache_)return this.searchStrCache_;let e=rt.getValidSats_();e=(0,v.c)(e),e.sort(((e,t)=>e.position.x-t.position.x));const t=rt.getPossibleCSOs_(e,50),i=(0,v.c)(t),s=rt.getActualCSOs_(i,50),a=Array.from(new Set(s));let n="";for(let e=0;e<a.length;e++)e==a.length-1?n+=a[e]:n+=`${a[e]},`;return this.searchStrCache_=n,n}static getActualCSOs_(e,t){const i=[];for(const t of e){let e=t.sat1,i=it.h.getEci(e,new Date(Date.now()+18e5));i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(t.sat1.position=i.position,e=t.sat2,i=it.h.getEci(e,new Date(Date.now()+18e5)),i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(e.position=i.position,t.sat2.position=i.position))}for(const s of e){const e=s.sat1,a=e.position;if(void 0===a)continue;const n=a.x-t,o=a.x+t,l=a.y-t,r=a.y+t,c=a.z-t,d=a.z+t,u=s.sat2,g=u.position;void 0!==g&&g.x<o&&g.x>n&&g.y<r&&g.y>l&&g.z<d&&g.z>c&&(i.push(e.sccNum),i.push(u.sccNum))}return i}static getPossibleCSOs_(e,t){const i=[];for(let s=0;s<e.length;s++){const a=e[s],n=a.position,o=n.x-t,l=n.x+t,r=n.y-t,c=n.y+t,d=n.z-t,u=n.z+t;let g=0;for(g=Math.max(0,s-200);g<e.length;g++){const t=e[g];if(a==t)continue;const s=t.position;if(s.x>l)break;s.x<l&&s.x>o&&s.y<c&&s.y>r&&s.z<u&&s.z>d&&i.push({sat1:a,sat2:t})}}return i}static getValidSats_(){const e=[];for(let t=0;t<a.$.getCatalogManager().orbitalSats;t++){const i=a.$.getCatalogManager().getSat(t);i&&(void 0===i.position&&(i.position=it.h.getEci(i,new Date).position||{x:0,y:0,z:0}),isNaN(i.position.x)||isNaN(i.position.y)||isNaN(i.position.z)||i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||e.push(i))}return e}static findBestPass(e,t){const i=a.$.getTimeManager();if(t.length<=0||!t[0]||void 0===t[0].minAz)return a.$.getUiManager().toast("Sensor's format incorrect. Did you select a sensor first?",l.pc.critical),[];const s=t[0];let n=0;const o=a.$.getCatalogManager().calcSatrec(e),r=[],c=M.hJ/(o.no*M.hJ/M.DD);let d=0,u=null,g=null,h=null,m=null,p=s.maxRng,v=0,b=!1,f=!1;const S=(e,t)=>{const o=it.h.getRae(e,t,s);if(it.h.checkIsInView(s,o)){const l=i.getOffsetTimeObj(n-5e3);let r=it.h.getRae(l,t,s),c=it.h.checkIsInView(s,r);if(c){const l=i.getOffsetTimeObj(n+5e3);if(r=it.h.getRae(l,t,s),c=it.h.checkIsInView(s,r),!c){if(f=o.el<=3.5,null==m)return{sortTime:null,SATELLITE_ID:null,PASS_SCORE:null,START_DATE:null,START_TIME:null,START_AZIMUTH:null,START_ELEVATION:null,START_RANGE:null,STOP_DATE:null,STOP_TIME:null,STOP_AZIMTUH:null,STOP_ELEVATION:null,STOP_RANGE:null,TIME_IN_COVERAGE_SECONDS:null,MINIMUM_RANGE:null,MAXIMUM_ELEVATION:null,SENSOR_TO_SUN_AZIMUTH:null,SENSOR_TO_SUN_ELEVATION:null};d=Math.min((e.getTime()-m.getTime())/1e3/60*10/8,10);let i=Math.min(v/50*10,10);i*=b&&f?2:1,d+=i,d+=Math.min(7500/p,10);let n=0;n=(e.getTime()-m.getTime())/1e3||0;const l=a.$.getScene(),r=(0,M.Eg)(e,{x:l.sun.position[0],y:l.sun.position[1],z:l.sun.position[2]},s);return{sortTime:m.getTime(),SATELLITE_ID:parseInt(t.satnum).toString(),PASS_SCORE:d.toFixed(1),START_DATE:m,START_TIME:m,START_AZIMUTH:u,START_ELEVATION:g,START_RANGE:h,STOP_DATE:e,STOP_TIME:e,STOP_AZIMTUH:o.az.toFixed(0),STOP_ELEVATION:o.el.toFixed(1),STOP_RANGE:o.rng.toFixed(0),TIME_IN_COVERAGE_SECONDS:n,MINIMUM_RANGE:p.toFixed(0),MAXIMUM_ELEVATION:v.toFixed(1),SENSOR_TO_SUN_AZIMUTH:r.az.toFixed(1),SENSOR_TO_SUN_ELEVATION:r.el.toFixed(1)}}}else o.el<=3.5&&(b=!0),m=e,u=o.az.toFixed(0),g=o.el.toFixed(1),h=o.rng.toFixed(0);v<o.el&&(v=o.el),p>o.rng&&(p=o.rng)}return{sortTime:null,SATELLITE_ID:null,PASS_SCORE:null,START_DATE:null,START_TIME:null,START_AZIMUTH:null,START_ELEVATION:null,START_RANGE:null,STOP_DATE:null,STOP_TIME:null,STOP_AZIMTUH:null,STOP_ELEVATION:null,STOP_RANGE:null,TIME_IN_COVERAGE_SECONDS:null,MINIMUM_RANGE:null,MAXIMUM_ELEVATION:null,SENSOR_TO_SUN_AZIMUTH:null,SENSOR_TO_SUN_ELEVATION:null}};for(let e=0;e<604800;e+=5){n=1e3*e;const t=i.getOffsetTimeObj(n);if(r.length<=5e3){const i=S(t,o);null!==i.PASS_SCORE&&(r.push(i),d=0,u=null,g=null,h=null,m=null,p=s.maxRng,v=0,b=!1,f=!1,e+=60*c*.75)}}return r}static findBestPasses(e,t){const i=(e=e.replace(/ /gu,",")).split(","),s=[];for(const e of i)try{if(void 0===e||null==e||""===e||" "===e)continue;const i=a.$.getCatalogManager().sccNum2Sat(parseInt(e)),n=rt.findBestPass(i,[t]);for(const e of n)s.push(e)}catch(e){console.debug(e)}s.sort(((e,t)=>t.sortTime-e.sortTime)),s.reverse(),s.forEach((e=>{delete e.sortTime}));for(const e of s)e.START_DATE=e.START_DATE.toISOString().split("T")[0],e.START_TIME=e.START_TIME.toISOString().split("T")[1].split(".")[0],e.STOP_DATE=e.STOP_DATE.toISOString().split("T")[0],e.STOP_TIME=e.STOP_TIME.toISOString().split("T")[1].split(".")[0];(0,st.g3)(s,"bestSatTimes")}findCsoBtnClick_(){const e=this.findCloseObjects();a.$.getUiManager().doSearch(e)}static findRaBtnClick_(){const e=ot.g.findReentry(a.$.getCatalogManager().objectCache).join(",");a.$.getUiManager().doSearch(e)}static analysisBptSumbit_(){const e=(0,o.gE)("analysis-bpt-sats").value,t=a.$.getSensorManager();t.isSensorSelected()?rt.findBestPasses(e,t.getSensor()):a.$.getUiManager().toast("You must select a sensor first!",l.pc.critical)}static setSensor_(e){const t=(0,o.gE)("analysis-bpt-submit");e?(t.disabled=!1,t.textContent="Generate Best Pass Times ▶"):(t.disabled=!0,t.textContent="Select Sensor First!")}constructor(){super("Analysis Menu"),this.bottomIconElementName="analysis-bottom-icon",this.bottomIconImg=lt,this.bottomIconLabel="Analysis Menu",this.sideMenuElementName="analysis-menu",this.sideMenuElementHtml=a.$.html`
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
`,this.helpTitle="Analysis Menu",this.helpBody=a.$.html`The Analysis Menu provides a number of tools to help you analyze the data in the current view. The tools are:
  <ul style="margin-left: 40px;">
    <li>Export Official TLEs - Export real two line element sets.</li>
    <li>Export 3LES - Export three line element sets.</li>
    <li>Export KeepTrack TLEs - Export All KeepTrack two line element sets including analysts.</li>
    <li>Export KeepTrack 3LES - Export All KeepTrack three line element sets including analysts.</li>
    <li>Find Close Objects - Find objects that are close to each other.</li>
    <li>Find Reentries - Find objects that are likely to reenter the atmosphere.</li>
    <li>Best Passes - Find the best passes for a satellite based on the currently selected sensor.</li>
  </ul>`,this.searchStrCache_=null}}const ct=new rt;var dt=i(1548);const ut=i.p+"../img/constellation.png",gt=i.p+"../img/planetarium.png";class ht extends u.s{constructor(){super(ht.PLUGIN_NAME),this.bottomIconElementName="menu-planetarium",this.bottomIconLabel="Planetarium View",this.bottomIconImg=gt,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=a.$.getRenderer(),i=a.$.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;a.$.getMainCamera().cameraType=V.A.PLANETARIUM;try{(0,o.gE)("cspocAllSensor").style.display="none",(0,o.gE)("mwAllSensor").style.display="none",(0,o.gE)("mdAllSensor").style.display="none",(0,o.gE)("esocAllSensor").style.display="none",(0,o.gE)("llAllSensor").style.display="none",(0,o.gE)("rusAllSensor").style.display="none",(0,o.gE)("prcAllSensor").style.display="none"}catch(e){}dt.b.change("planetarium"),null===(e=a.$.getPlugin(mt))||void 0===e||e.setBottomIconToUnselected()}else a.$.getMainCamera().isPanReset=!0,a.$.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,t.glInit(),i.hideSideMenus(),a.$.getOrbitManager().clearInViewOrbit(),a.$.getMainCamera().cameraType=V.A.DEFAULT}}addJs(){super.addJs(),a.$.register({event:l.kR.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,o.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}ht.PLUGIN_NAME="Planetarium";class mt extends u.s{constructor(){super(mt.PLUGIN_NAME),this.bottomIconElementName="menu-astronomy",this.bottomIconLabel="Astronomy View",this.bottomIconImg=ut,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=a.$.getOrbitManager(),i=a.$.getRenderer(),s=a.$.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;t.clearInViewOrbit(),a.$.getMainCamera().cameraType=V.A.ASTRONOMY,dt.b.change("astronomy"),null===(e=a.$.getPlugin(ht))||void 0===e||e.setBottomIconToUnselected()}else a.$.getMainCamera().isPanReset=!0,a.$.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,i.glInit(),s.hideSideMenus(),a.$.getMainCamera().cameraType=V.A.DEFAULT,dt.b.change("default"),(0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}}addJs(){super.addJs(),a.$.register({event:l.kR.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,o.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}mt.PLUGIN_NAME="Astronomy";var pt=i(5338);const vt=i.p+"../img/breakup.png";var bt,ft,St=i(1579);!function(e){e[e.MeanAnomaly=1]="MeanAnomaly",e[e.RightAscensionOfAscendingNode=2]="RightAscensionOfAscendingNode",e[e.ArgumentOfPerigee=3]="ArgumentOfPerigee"}(bt||(bt={})),function(e){e[e.Near=0]="Near",e[e.Success=1]="Success",e[e.Error=2]="Error",e[e.Far=3]="Far"}(ft||(ft={}));class Et{constructor(e,t,i,s,a,n,o){this.sat=e,this.now=a,this.goalLat=t,this.goalLon=i,this.goalDirection=s,this.newMeana=null,this.newArgPer=null,this.goalAlt=n||null,this.raanOffset=o||0,this.lastLat=null,this.currentDirection=null,this.argPerCalcResults=null,this.meanACalcResults=null,this.raanCalcResults=null}rotateOrbitToLatLon(){return this.parseTle(),this.meanACalcResults=this.meanACalcLoop(this.now,this.goalDirection),this.meanACalcResults!==ft.Success?["Error","Failed to find a solution for Mean Anomaly"]:this.goalAlt>0&&this.argPerCalcLoop()!==ft.Success?["Error","Failed to find a solution for Argument of Perigee"]:(this.raanCalcResults=this.raanCalcLoop(this.raanOffset,this.now),this.raanCalcResults!==ft.Success?["Error","Failed to find a solution for Right Ascension of Ascending Node"]:[this.sat.tle1,this.sat.tle2])}argPerCalcLoop(){this.meanACalcResults=ft.Near;for(let e=0;e<3600;e+=1){let t=10*parseFloat(this.argPer)-100+e;if(t>3600&&(t-=3600),this.argPerCalcResults=this.argPerCalc(t.toString(),this.now),this.argPerCalcResults===ft.Success&&this.meanACalcResults===ft.Success&&this.currentDirection===this.goalDirection)break;if(this.argPerCalcResults===ft.Far&&(e+=49),this.argPerCalcResults===ft.Error)return ft.Error;if(this.meanACalcResults=this.meanACalcLoop2(),this.meanACalcResults===ft.Success)if(this.currentDirection!==this.goalDirection)e+=20;else if(this.argPerCalcResults===ft.Success)break;if(e=this.meanACalcResults===ft.Far?e+100:e,this.meanACalcResults===ft.Error)return ft.Error}return this.argPerCalcResults}meanACalcLoop2(){for(let e=0;e<5200;e+=1){if(this.meanACalcResults=this.meanACalc(e,this.now),this.meanACalcResults===ft.Success){if(this.currentDirection===this.goalDirection)break;e+=20}if(e=this.meanACalcResults===ft.Far?e+100:e,this.meanACalcResults===ft.Error)return ft.Error}return this.meanACalcResults}parseTle(){this.intl=this.sat.tle1.substring(9,17),this.epochyr=this.sat.tle1.substring(18,20),this.epochday=this.sat.tle1.substring(20,32),this.meanmo=this.sat.tle2.substring(52,63),this.argPer=St.V.pad0(this.sat.argOfPerigee.toFixed(4),8),this.inc=St.V.pad0(this.sat.inclination.toFixed(4),8),this.ecen=this.sat.eccentricity.toFixed(7).substring(2,9),this.TLE1Ending=this.sat.tle1.substring(32,71)}meanACalcLoop(e,t){let i=ft.Near;for(let s=0;s<5200;s+=1){if(i=this.meanACalc(s,e),i===ft.Success){if(this.currentDirection===t)break;s+=20}i===ft.Far&&(s+=100)}return i}raanCalcLoop(e,t){let i=ft.Near;for(let s=0;s<52e3&&(i=this.raanCalc(s,e,t),i!==ft.Success);s+=1)i===ft.Far&&(s+=1e3);return i}meanACalc(e,t){const i=this.sat;let s=i.satrec||M.j0.createSatrec(i.tle1,i.tle2);e/=10;const a=St.V.pad0(e.toFixed(4),8),n=St.V.pad0(i.rightAscension.toFixed(4),8),o=this.newArgPer?St.V.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):St.V.pad0(i.argOfPerigee.toFixed(4),8),l=i.tle1.substring(32,71),r=`1 ${i.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${l}`,c=`2 ${i.sccNum} ${this.inc} ${n} ${this.ecen} ${o} ${a} ${this.meanmo}    10`;s=M.j0.createSatrec(r,c);const d=this.getOrbitByLatLonPropagate(t,s,bt.MeanAnomaly);return d===ft.Success&&(i.tle1=r,i.tle2=c,this.newMeana=a),d}getOrbitByLatLonPropagate(e,t,i){const{m:s,gmst:a}=it.h.calculateTimeVariables(e,t),n=M.j0.propagate(t,s).position;if(isNaN(n.x)||isNaN(n.y)||isNaN(n.z))return ft.Error;const o=(0,M.tc)(n,a),{lat:l,lon:r,alt:c}=o;if(this.lastLat=this.lastLat?this.lastLat:l,i===bt.MeanAnomaly){if(l===this.lastLat)return 0;l>this.lastLat&&(this.currentDirection="N"),l<this.lastLat&&(this.currentDirection="S"),this.lastLat=l}return i===bt.MeanAnomaly&&l>this.goalLat-Et.MAX_LAT_ERROR&&l<this.goalLat+Et.MAX_LAT_ERROR||i===bt.RightAscensionOfAscendingNode&&r>this.goalLon-Et.MAX_LON_ERROR&&r<this.goalLon+Et.MAX_LON_ERROR||i===bt.ArgumentOfPerigee&&c>this.goalAlt-Et.MAX_ALT_ERROR&&c<this.goalAlt+Et.MAX_ALT_ERROR?ft.Success:(i!==bt.MeanAnomaly||l>this.goalLat-11&&l<this.goalLat+11)&&(i!==bt.RightAscensionOfAscendingNode||r>this.goalLon-11&&r<this.goalLon+11)?i===bt.ArgumentOfPerigee&&(c<this.goalAlt-100||c>this.goalAlt+100)?ft.Far:ft.Near:ft.Far}raanCalc(e,t,i){const s=e;e=(e/=100)>360?e-360:e;const a=St.V.pad0(e.toFixed(4),8),n=this.newArgPer?St.V.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):St.V.pad0(this.sat.argOfPerigee.toFixed(4),8),o=`1 ${this.sat.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${this.TLE1Ending}`,l=`2 ${this.sat.sccNum} ${this.inc} ${a} ${this.ecen} ${n} ${this.newMeana} ${this.meanmo}    10`,r=M.j0.createSatrec(o,l),c=this.getOrbitByLatLonPropagate(i,r,bt.RightAscensionOfAscendingNode);if(c===ft.Success){e=(e=(e=s/100+t)>360?e-360:e)<0?e+360:e;const i=St.V.pad0(e.toFixed(4),8),a=`2 ${this.sat.sccNum} ${this.inc} ${i} ${this.ecen} ${n} ${this.newMeana} ${this.meanmo}    10`;this.sat.tle1=o,this.sat.tle2=a}return c}argPerCalc(e,t){const i=this.newMeana,s=St.V.pad0(this.sat.rightAscension.toFixed(4),8);e=St.V.pad0((parseFloat(e)/10).toFixed(4),8);const a=`1 ${this.sat.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${this.TLE1Ending}`,n=`2 ${this.sat.sccNum} ${this.inc} ${s} ${this.ecen} ${e} ${i} ${this.meanmo}    10`,o=M.j0.createSatrec(a,n),l=this.getOrbitByLatLonPropagate(t,o,bt.ArgumentOfPerigee);return l===ft.Success&&(this.sat.tle1=a,this.sat.tle2=n,this.newArgPer=e),l}}Et.MAX_LAT_ERROR=.1,Et.MAX_LON_ERROR=.1,Et.MAX_ALT_ERROR=30;var Mt=i(5897),_t=i(8240);class yt extends u.s{constructor(){super(yt.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=vt,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat(l.Z.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;if((null==t?void 0:t.apogee)-(null==t?void 0:t.perigee)>this.maxDifApogeeVsPerigee_)return f.J.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=a.$.html`
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
  </div>`,this.helpTitle="Breakup Menu",this.helpBody=a.$.html`The Breakup Menu is a tool for simulating the breakup of a satellite.
  <br><br>
  By modifying duplicating and modifying a satellite's orbit we can model the breakup of a satellite.
  After selecting a satellite and opening the menu, the user can select:
  <ul style="margin-left: 40px;">
    <li>Inclination Variation</li>
    <li>RAAN Variation</li>
    <li>Period Variation</li>
    <li>Number of Breakup Pieces</li>
  </ul>
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`,this.selectSatManager_=a.$.getPlugin(g.A)}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("breakup").addEventListener("submit",(e=>{e.preventDefault(),(0,b.Cs)((()=>this.onSubmit_()))}))}}),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonActive&&(this.closeSideMenu(),f.J.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonActive&&this.updateSccNumInMenu_()):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}updateSccNumInMenu_(){if(!this.isMenuButtonActive)return;const e=this.selectSatManager_.getSelectedSat(l.Z.EXTRA_ONLY);(null==e?void 0:e.isSatellite())&&((0,o.gE)("hc-scc").value=e.sccNum)}onSubmit_(){const{simulationTimeObj:e}=a.$.getTimeManager(),t=a.$.getCatalogManager(),{satId:i,breakupCount:s,rascVariation:n,incVariation:o,meanmoVariation:l}=yt.getFormData_(t),r=t.getSat(i),c=r,d=it.h.calculateTimeVariables(e).gmst,u=(0,M.tc)(r.position,d),g=u.lat,h=u.lon,m=it.h.getDirection(r,e);"Error"===m&&f.J.warn("Cannot calculate direction of satellite. Try again later.");const p=Mt.V.currentEpoch(e);if(r.tle1=r.tle1.substring(0,18)+p[0]+p[1]+r.tle1.substring(32),a.$.getMainCamera().isAutoPitchYawToTarget=!1,r.apogee-r.perigee>this.maxDifApogeeVsPerigee_)return void f.J.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const v=r.apogee-r.perigee<300?0:u.alt,b=new Et(r,g,h,m,e,v).rotateOrbitToLatLon(),S=b[0],E=b[1],_=new M.mJ(Object.assign(Object.assign({},r),{id:i,tle1:S,tle2:E,active:!0}));t.objectCache[i]=_,t.satCruncher.postMessage({typ:_t.XY.SAT_EDIT,id:i,tle1:S,tle2:E});const y=a.$.getOrbitManager();y.changeOrbitBufferData(i,S,E);const A=15e-5,x=r.eccentricity;let L=0;for(let i=0;i<=4&&!(L>=s);i++){const a=M.e2.convert6DigitToA5((pt.v.ANALYST_START_ID+L).toString()),d=t.sccNum2Id(a);t.getObject(d);const p=c,v=-n/2+n*(i/4),b=r.apogee-r.perigee<300?0:u.alt;let S=new Et(p,g,h,m,e,b,v).rotateOrbitToLatLon();if("Error"===S[0]&&(S=new Et(p,g,h,m,new Date(e.getTime()+1),b,v).rotateOrbitToLatLon(),"Error"===S[0]))return void f.J.error(new Error(S[1]),"breakup.ts","Error creating breakup!");let _=S[0],w=S[1];for(;L<(i+1)*s/4;L++){let i=parseFloat(E.substring(8,16));i=i+Math.random()*o*2-o;const s=i.toFixed(4).padStart(8,"0");if(8!==s.length)throw new Error(`Inclination length is not 8 - ${s} - ${E}`);p.eccentricity=x,p.eccentricity+=Math.random()*A*2-A;let a=parseFloat(w.substring(52,62));a=a+Math.random()*l*2-l;const n=a.toFixed(8).padStart(11,"0");if(11!==n.length)throw new Error(`meanmo length is not 11 - ${n} - ${w}`);const r=M.e2.convert6DigitToA5((pt.v.ANALYST_START_ID+L).toString()),c=t.sccNum2Id(r);if(_=`1 ${r}${_.substring(7)}`,w=`2 ${r} ${s} ${w.substring(17,52)}${n}${w.substring(63)}`,69!==_.length)throw new Error(`Invalid tle1: length is not 69 - ${_}`);if(69!==w.length)throw new Error(`Invalid tle1: length is not 69 - ${w}`);let d;try{d=new M.mJ(Object.assign(Object.assign({},t.objectCache[c]),{id:c,tle1:_,tle2:w,active:!0}))}catch(e){return void f.J.error(e,"breakup.ts","Error creating breakup!")}it.h.altitudeCheck(d.satrec,e)>1?(t.objectCache[c]=d,t.satCruncher.postMessage({typ:_t.XY.SAT_EDIT,id:c,active:!0,tle1:_,tle2:w}),y.changeOrbitBufferData(c,_,w)):f.J.warn("Breakup Generator Failed")}}s>settingsManager.searchLimit&&(settingsManager.searchLimit=s),a.$.getUiManager().doSearch(`${r.sccNum},Analyst`)}static getFormData_(e){const t=e.sccNum2Id((0,o.gE)("hc-scc").value),i=parseFloat((0,o.gE)("hc-per").value),s=parseFloat((0,o.gE)("hc-inc").value),a=parseFloat((0,o.gE)("hc-raan").value);return{satId:t,breakupCount:parseInt((0,o.gE)("hc-count").value),rascVariation:a,incVariation:s,meanmoVariation:i}}}yt.PLUGIN_NAME="Breakup";class At{static getColors(e){let t,i;switch(e){case"Top Secret//SCI":t="#fce93a",i="black";break;case"Top Secret":t="#ff8c00",i="black";break;case"Secret":t="#ff0000",i="white";break;case"Confidential":t="#0033a0",i="white";break;case"CUI":t="#512b85",i="white";break;case"Unclassified":t="#007a33",i="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:i}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class xt extends u.s{constructor(){super("Classification"),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1,this.containerDomId="classification-container",this.textStringDomId="classification-string",this.containerHeight=20}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateString(e=this.classificationString_,t="#ffffff",i="#000000"){this.isClassificationContainerLoaded_||this.createContainer_(),""===e?((0,o.gE)(this.containerDomId).style.display="none",this.updateTopMenuHeight_(!1)):((0,o.gE)(this.containerDomId).style.display="flex",this.updateTopMenuHeight_(!0)),(0,o.gE)(this.textStringDomId).innerHTML=e;const s=(0,o.gE)(this.containerDomId);if(s.style.fontWeight="500",At.isValidClassification(e)){const s=At.getColors(e);t=s.backgroundColor,i=s.color}s.style.backgroundColor=t,s.style.color=i,this.classificationString_=e}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerInit,cbName:this.PLUGIN_NAME,cb:this.uiManagerInit_.bind(this)})}createContainer_(){const e=document.createElement("div");e.innerHTML=a.$.html`<span id="${this.textStringDomId}"></span>`,e.id=this.containerDomId,e.style.cssText=`\n      height: ${this.containerHeight}px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      `,a.$.containerRoot.insertBefore(e,a.$.containerRoot.firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr?(this.createContainer_(),this.updateString()):f.J.log("Classification string is empty so not loading classification bar")}updateTopMenuHeight_(e){this.isExpanded_!==e&&(document.documentElement.style.setProperty("--classification-bar-height",`${e?this.containerHeight:-this.containerHeight}px`),this.isExpanded_=e)}}new xt;const Lt=i.p+"../img/collisions.png";var wt=i(6186),Tt=i.n(wt),Ct=i(2155),kt=i.n(Ct),$t=i(7433),Nt=i.n($t),It=i(8626),Rt=i.n(It),Pt=i(8990),Ot=i.n(Pt),Dt=i(9827),Ut=i.n(Dt),Ft=i(2359),Bt={};Bt.styleTagTransform=Ut(),Bt.setAttributes=Rt(),Bt.insert=Nt().bind(null,"head"),Bt.domAPI=kt(),Bt.insertStyleElement=Ot(),Tt()(Ft.A,Bt),Ft.A&&Ft.A.locals&&Ft.A.locals;class Gt extends u.s{constructor(){super(Gt.PLUGIN_NAME),this.collisionDataSrc="./tle/SOCRATES.json",this.selectSatIdOnCruncher_=null,this.collisionList_=[],this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=Lt,this.bottomIconLabel="Collisions",this.sideMenuElementName="collisions-menu",this.sideMenuElementHtml=a.$.html`
  <div id="collisions-menu" class="side-menu-parent start-hidden text-select">
    <div id="collisions-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible Collisions</h5>
        <table id="collisions-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=a.$.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.dragOptions={isDraggable:!0,minWidth:540,maxWidth:650},this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.parseCollisionData_()}}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:this.uiManagerFinal_.bind(this)}),a.$.register({event:l.kR.onCruncherMessage,cbName:this.PLUGIN_NAME,cb:()=>{var e;null!==this.selectSatIdOnCruncher_&&(null===(e=a.$.getPlugin(g.A))||void 0===e||e.selectSat(this.selectSatIdOnCruncher_),this.selectSatIdOnCruncher_=null)}})}uiManagerFinal_(){(0,o.gE)(this.sideMenuElementName).addEventListener("click",(e=>{(0,b.Cs)((()=>{var t;const i=e.target.parentElement;if(!i.classList.contains("collisions-object"))return;const s=null===(t=i.dataset)||void 0===t?void 0:t.row;null!==s&&this.eventClicked_(parseInt(s))}))}))}parseCollisionData_(){0===this.collisionList_.length&&fetch(this.collisionDataSrc).then((e=>{e.json().then((e=>{this.collisionList_=e,this.createTable_(),0===this.collisionList_.length&&f.J.warn("No collisions data found!")}))}))}eventClicked_(e){const t=new Date;a.$.getTimeManager().changeStaticOffset(new Date(this.collisionList_[e].toca).getTime()-t.getTime()-3e4),a.$.getMainCamera().isAutoPitchYawToTarget=!1;const i=this.collisionList_[e].sat1.padStart(5,"0"),s=this.collisionList_[e].sat2.padStart(5,"0");a.$.getUiManager().doSearch(`${i},${s}`);const n=a.$.getCatalogManager();this.selectSatIdOnCruncher_=n.sccNum2Id(parseInt(i))}createTable_(){try{const e=(0,o.gE)("collisions-table");e.innerHTML="",Gt.createHeaders_(e),this.createBody_(e)}catch(e){f.J.warn("Error processing SOCRATES data!")}}createBody_(e){for(let t=0;t<this.collisionList_.length;t++)this.createRow_(e,t)}static createHeaders_(e){const t=e.insertRow(),i=["TOCA","#1","#2","Max Prob","Min Range (km)","Rel Speed (km/s)"];for(const e of i){const i=t.insertCell();i.appendChild(document.createTextNode(e)),i.setAttribute("style","text-decoration: underline")}}createRow_(e,t){const i=e.insertRow();return i.setAttribute("class","collisions-object link"),i.setAttribute("data-row",t.toString()),Gt.createCell_(i,this.collisionList_[t].toca.slice(0,19).replace("T"," ")),Gt.createCell_(i,this.collisionList_[t].sat1),Gt.createCell_(i,this.collisionList_[t].sat2),Gt.createCell_(i,this.collisionList_[t].maxProb.toFixed(3)),Gt.createCell_(i,this.collisionList_[t].minRng.toString()),Gt.createCell_(i,this.collisionList_[t].relSpeed.toFixed(2)),i}static createCell_(e,t){e.insertCell().appendChild(document.createTextNode(t))}}Gt.PLUGIN_NAME="collisions";var Ht=i(4711);const zt=i.p+"../img/colors.png";class jt extends u.s{constructor(){super(jt.PLUGIN_NAME),this.bottomIconImg=zt,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=a.$.html`
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
  </div>`,this.helpTitle="Colors Menu",this.helpBody=a.$.html`The Colors Menu is a place to change the color theme used to render the objects.
<br><br>
The various themes can change the colors based on the objects' orbits, objects' characteristics, or the objects' relation to sun and/or earth.
`,this.rmbL1ElementName="colors-rmb",this.rmbL1Html=a.$.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Color Scheme &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.rmbMenuOrder=50,this.rmbL2ElementName="colors-rmb-menu",this.rmbL2Html=a.$.html`
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
  </ul>`,this.rmbCallback=e=>{switch(e){case"colors-confidence-rmb":jt.colorsMenuClick("confidence");break;case"colors-rcs-rmb":jt.colorsMenuClick("rcs");break;case"colors-density-rmb":jt.colorsMenuClick("neighbors");break;case"colors-starlink-rmb":jt.colorsMenuClick("starlink");break;case"colors-sunlight-rmb":jt.colorsMenuClick("sunlight");break;case"colors-country-rmb":jt.colorsMenuClick("countries");break;case"colors-velocity-rmb":jt.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":jt.colorsMenuClick("elset-age");break;default:jt.colorsMenuClick("default")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("colors-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.color;jt.colorsMenuClick(t)}))}))}})}}jt.PLUGIN_NAME="Color Menu",jt.colorsMenuClick=e=>{var t;const i=a.$.getCatalogManager(),s=a.$.getColorSchemeManager(),n=a.$.getUiManager();switch(null===(t=a.$.getPlugin(g.A))||void 0===t||t.selectSat(-1),"sunlight"!==e&&i.satCruncher.postMessage({isSunlightView:!1,typ:_t.XY.SUNLIGHT_VIEW}),e){case"confidence":dt.b.change("confidence"),s.setColorScheme(s.confidence,!0),n.colorSchemeChangeAlert(s.currentColorScheme);break;case"velocity":dt.b.change("velocity"),s.setColorScheme(s.velocity,!0),n.colorSchemeChangeAlert(s.currentColorScheme);break;case"sunlight":i.satCruncher.postMessage({isSunlightView:!0,typ:_t.XY.SUNLIGHT_VIEW}),dt.b.change("sunlight"),n.colorSchemeChangeAlert(s.sunlight),(0,Ht.p)({cruncher:i.satCruncher,cb:()=>{s.setColorScheme(s.sunlight,!0)},validationFunc:e=>e.satInSun});break;case"near-earth":dt.b.change("near"),s.setColorScheme(s.leo,!0),n.colorSchemeChangeAlert(s.currentColorScheme);break;case"deep-space":dt.b.change("deep"),s.setColorScheme(s.geo,!0),n.colorSchemeChangeAlert(s.currentColorScheme);break;case"elset-age":(0,b.Cs)((()=>{dt.b.change("ageOfElset"),s.setColorScheme(s.ageOfElset,!0),n.colorSchemeChangeAlert(s.currentColorScheme)}));break;case"lost-objects":(0,o.gE)("search").value="",(0,b.Cs)((()=>{settingsManager.lostSatStr="",s.setColorScheme(s.lostobjects,!0),(0,o.gE)("search").value=settingsManager.lostSatStr,n.colorSchemeChangeAlert(s.currentColorScheme),n.doSearch((0,o.gE)("search").value)}));break;case"rcs":dt.b.change("rcs"),s.setColorScheme(s.rcs,!0),n.colorSchemeChangeAlert(s.currentColorScheme);break;case"starlink":dt.b.change("starlink"),s.setColorScheme(s.starlink,!0),n.colorSchemeChangeAlert(s.currentColorScheme);break;case"smallsats":dt.b.change("small"),s.setColorScheme(s.smallsats,!0),n.colorSchemeChangeAlert(s.currentColorScheme);break;case"neighbors":dt.b.change("neighbors"),s.setColorScheme(s.neighbors,!0),n.colorSchemeChangeAlert(s.currentColorScheme);break;case"countries":dt.b.change("countries"),null!==a.$.getGroupsManager().selectedGroup?s.setColorScheme(s.groupCountries,!0):s.setColorScheme(s.countries,!0),n.colorSchemeChangeAlert(s.currentColorScheme);break;default:dt.b.change("default"),s.setColorScheme(s.default,!0),n.colorSchemeChangeAlert(s.currentColorScheme)}a.$.getUiManager().hideSideMenus()};const Vt=new jt;var Jt=i(4193),Xt=i(1944);const Yt=i.p+"../img/about.png";class Kt extends u.s{constructor(){super(Kt.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.bottomIconCallback=()=>{if(this.verifySatelliteSelected()&&this.isMenuButtonActive){const e=a.$.getCatalogManager().getObject(this.selectSatManager_.selectedSat,l.Z.EXTRA_ONLY);(0,o.gE)(`${this.formPrefix_}-scc`).value=e.sccNum}},this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=Yt,this.bottomIconLabel="Debris Screening",this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=a.$.html`
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
`,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.helpTitle="Debris Screening",this.helpBody=a.$.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=a.$.html`<img src="${Yt}" />
  `,this.selectSatManager_=a.$.getPlugin(g.A)}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)(`${this.sideMenuElementName}-form`).addEventListener("submit",(e=>{e.preventDefault(),(0,b.Cs)((()=>this.onFormSubmit()))})),(0,o.gE)(`${this.sideMenuElementName}-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,b.Cs)((()=>this.onVisClick()))})),(0,o.gE)(`${this.sideMenuElementName}-clear-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,b.Cs)((()=>Kt.onClearVisClick()))}))}}),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled()}})}onVisClick(){const e=parseFloat((0,o.gE)(`${this.formPrefix_}-u`).value),t=parseFloat((0,o.gE)(`${this.formPrefix_}-v`).value),i=parseFloat((0,o.gE)(`${this.formPrefix_}-w`).value);a.$.getScene().searchBox.setCubeSize(e,t,i)}static onClearVisClick(){a.$.getScene().searchBox.setCubeSize(0,0,0)}onFormSubmit(){const e=a.$.getCatalogManager().sccNum2Id(parseInt((0,o.gE)(`${this.formPrefix_}-scc`).value)),t=parseFloat((0,o.gE)(`${this.formPrefix_}-u`).value),i=parseFloat((0,o.gE)(`${this.formPrefix_}-v`).value),s=parseFloat((0,o.gE)(`${this.formPrefix_}-w`).value),n=parseFloat((0,o.gE)(`${this.formPrefix_}-time`).value),r=a.$.getCatalogManager().getObject(e,l.Z.SKIP_POS_VEL),c=a.$.getCatalogManager().objectCache.filter((e=>{if(!e.isSatellite())return!1;const t=e;return!(t.perigee>r.apogee||r.perigee>t.apogee)})).map((e=>e.id));let d=0,u=[];for(let e=0;e<60*n;e++){d=1e3*e*60;const n=a.$.getTimeManager().getOffsetTimeObj(d),{m:o}=it.h.calculateTimeVariables(n,r.satrec),g=M.j0.propagate(r.satrec,o);for(let e=0;e<c.length;e++){const o=a.$.getCatalogManager().getObject(c[e],l.Z.SKIP_POS_VEL);if(!(null==o?void 0:o.isSatellite()))continue;const r=o,{m:d}=it.h.calculateTimeVariables(n,r.satrec),h=M.j0.propagate(r.satrec,d);if(!h){c.splice(e,1);break}const m=Xt.i.sat2ric({position:g.position,velocity:g.velocity},{position:h.position,velocity:h.velocity});if(Math.abs(m.position[0])<t&&Math.abs(m.position[1])<i&&Math.abs(m.position[2])<s){console.log(`${r.sccNum} at ${new Date(n)}`),u.push(r.sccNum),c.splice(e,1);break}}}u=u.filter(((e,t,i)=>i.indexOf(e)===t));let g=u.join(",");g=g.replace(/,\s*$/u,""),a.$.getUiManager().doSearch(g)}}Kt.PLUGIN_NAME="Debris Screening";var Wt=i(5740);const Zt=i.p+"../img/debug.png";var qt=i(6750),Qt=i(9786),ei=i(7176),ti=i.n(ei);class ii extends u.s{constructor(){super(ii.PLUGIN_NAME),this.isErudaVisible=!1,this.bottomIconImg=Zt,this.bottomIconElementName="menu-debug",this.bottomIconLabel="Debug",this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:500},this.helpTitle="Debug Menu",this.helpBody=a.$.html`The Debug Menu is used for debugging the app. It is probably not very useful unless you are assisting me with debugging an issue
  <br><br>
  Open Debug Menu allows you to access the console even when it is blocked by the browser. This is useful for debugging issues that only occur in the browser console.
  <br><br>
  Run Gremlins will run a series of tests to try to break the app. This kind of fuzz testing is useful for testing the app's robustness.`,this.sideMenuElementName="debug-menu",this.sideMenuElementHtml=a.$.html`
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
  `,this.gremlinsSettings={nb:1e5,delay:5},this.delayForCameraUpdates=1e3,this.lastCameraUpdate=0}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e,t,i,s;null===(e=(0,o.gE)("debug-console"))||void 0===e||e.addEventListener("click",(()=>{this.isErudaVisible?(ti().hide(),this.isErudaVisible=!1):(ti().show(),this.isErudaVisible=!0)})),null===(t=(0,o.gE)("debug-gremlins"))||void 0===t||t.addEventListener("click",(()=>{this.runGremlins()})),null===(i=(0,o.gE)("debug-cam-to-sat"))||void 0===i||i.addEventListener("click",(()=>{var e;if(a.$.getMainCamera()){const t=null===(e=a.$.getPlugin(g.A))||void 0===e?void 0:e.selectedSat;if(!t||-1===t)return;const i=a.$.getCatalogManager().getObject(t);if(i){const e=a.$.getMainCamera().getCameraPosition(i.position,a.$.getMainCamera().getCameraOrientation()),t=[i.position.x+e[0],i.position.y+e[1],i.position.z+e[2]];qt.B.createRef2Ref([t[0],t[1],t[2]],[i.position.x,i.position.y,i.position.z],Qt.j.PURPLE)}}})),null===(s=(0,o.gE)("debug-cam-to-center"))||void 0===s||s.addEventListener("click",(()=>{const e=a.$.getMainCamera();if(e){const t=e.getCameraPosition();qt.B.createRef2Ref(t,[0,0,0],Qt.j.PURPLE)}}))}})}addJs(){super.addJs(),a.$.register({event:l.kR.updateLoop,cbName:this.PLUGIN_NAME,cb:()=>{if((new Date).getTime()-this.lastCameraUpdate<this.delayForCameraUpdates)return;const e=a.$.getMainCamera(),t=a.$.getPlugin(g.A);if(e&&t){const i=t.selectedSat,s=-1!==i?a.$.getCatalogManager().getObject(i):null,n=e.getCameraPosition(null==s?void 0:s.position);(0,o.AL)("debug-camera-position-x",`X: ${n[0].toFixed(2)}`),(0,o.AL)("debug-camera-position-y",`Y: ${n[1].toFixed(2)}`),(0,o.AL)("debug-camera-position-z",`Z: ${n[2].toFixed(2)}`),(0,o.AL)("debug-camera-distance-from-earth",`Distance from Center: ${e.getCameraDistance().toFixed(2)} km`),this.lastCameraUpdate=(new Date).getTime()}if(t.selectedSat>=0){const e=a.$.getCatalogManager().getObject(t.selectedSat);if(!e)return void console.warn("Satellite not found");const i=e.position;(0,o.AL)("debug-sat-position-x",`X: ${i.x.toFixed(2)}`),(0,o.AL)("debug-sat-position-y",`Y: ${i.y.toFixed(2)}`),(0,o.AL)("debug-sat-position-z",`Z: ${i.z.toFixed(2)}`)}}});const e=a.$.getInputManager().keyboard;e.registerKeyDownEvent({key:"F12",callback:()=>{e.isShiftPressed&&(this.isErudaVisible?(ti().hide(),this.isErudaVisible=!1,a.$.getSoundManager().play(h.A.TOGGLE_OFF)):(ti().show(),this.isErudaVisible=!0,a.$.getSoundManager().play(h.A.TOGGLE_ON)))}})}static getRandomInt_(e,t){return e=Number.isNaN(e)?0:Math.ceil(e),t=Number.isNaN(t)?100:Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}static defaultPositionSelector_(){return[ii.getRandomInt_(0,Math.max(0,document.documentElement.clientWidth-1)),ii.getRandomInt_(Math.max(0,document.documentElement.clientHeight-100),Math.max(0,document.documentElement.clientHeight-1))]}static canClick_(e){return void 0===e.parentElement||null==e.parentElement?null:"bmenu-item"===e.parentElement.className}startGremlins(){const e=Wt.species.clicker({canClick:ii.canClick_,defaultPositionSelector:ii.defaultPositionSelector_}),t=Wt.species.toucher({touchTypes:["gesture"],defaultPositionSelector:ii.defaultPositionSelector_}),i=Wt.strategies.distribution({distribution:[.3,.3,.1,.1,.1,.1],delay:this.gremlinsSettings.delay});Wt.createHorde({species:[e,t,Wt.species.clicker(),Wt.species.toucher(),Wt.species.formFiller(),Wt.species.typer({log:!0,logger:console})],mogwais:[Wt.mogwais.alert(),Wt.mogwais.fps(),Wt.mogwais.gizmo({maxErrors:1e3})],strategies:[i]}).unleash()}runGremlins(){if(!(0,o.gE)("nav-footer"))throw new Error("nav-footer is missing");if(!(0,o.gE)("nav-footer-toggle"))throw new Error("nav-footer-toggle is missing");if(!(0,o.gE)("bottom-icons-container"))throw new Error("bottom-icons-container is missing");if(!(0,o.gE)("bottom-icons"))throw new Error("bottom-icons is missing");(0,o.gE)("nav-footer").style.height="200px",(0,o.gE)("nav-footer-toggle").style.display="none",(0,o.gE)("bottom-icons-container").style.height="200px",(0,o.gE)("bottom-icons").style.height="200px",this.startGremlins()}}ii.PLUGIN_NAME="Debug Menu";const si=i.p+"../img/gps.png";var ai=i(610),ni=i.n(ai),oi=i(8754);class li{static calculateDops(e){const t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},i=e.length;if(i<4)return t;const s=ni().rep([i,4],0);for(let t=1;t<=i;t++){const{az:i,el:a}=e[t-1],n=[Math.cos(a*M.up)*Math.sin(i*M.up),Math.cos(a*M.up)*Math.cos(i*M.up),Math.sin(a*M.up),1];ni().setBlock(s,[t-1,0],[t-1,3],[n])}const a=ni().dot(ni().transpose(s),s),n=ni().inv(a),o=Math.sqrt(n[0][0]+n[1][1]+n[2][2]),l=Math.sqrt(n[0][0]+n[1][1]),r=Math.sqrt(n[0][0]+n[1][1]+n[2][2]+n[3][3]),c=Math.sqrt(n[2][2]),d=Math.sqrt(n[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,i,s,a,n=10){if(void 0===i||void 0===s)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};null!=a||(a=0);const{gmst:o}=it.h.calculateTimeVariables(e),l=[];return t.forEach((e=>{const t=(0,M.Xm)({lon:s,lat:i,alt:a},(0,M.yW)(e.position,o)),r={az:t.az,el:t.el};r.el>n&&l.push(r)})),li.calculateDops(l)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");const t=(0,o.gE)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let i=t.insertRow(),s=i.insertCell();s.appendChild(document.createTextNode("Time"));let a=i.insertCell();a.appendChild(document.createTextNode("HDOP"));let n=i.insertCell();n.appendChild(document.createTextNode("PDOP"));let l=i.insertCell();l.appendChild(document.createTextNode("GDOP"));for(const o of e)i=t.insertRow(),s=i.insertCell(),s.appendChild(document.createTextNode((0,oi.i)(o.time,"isoDateTime",!0))),a=i.insertCell(),a.appendChild(document.createTextNode(o.dops.hdop)),n=i.insertCell(),n.appendChild(document.createTextNode(o.dops.pdop)),l=i.insertCell(),l.appendChild(document.createTextNode(o.dops.gdop))}static getDopsList(e,t,i,s,a,n){const o=[];for(let l=0;l<1440;l++){const r=e(60*l*M.If),c=li.getDops(r,t,i,s,a,n);o.push({time:r,dops:c})}return o}}class ri extends u.s{constructor(){super(ri.PLUGIN_NAME),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=si,this.bottomIconCallback=()=>{this.isMenuButtonActive&&(0,b.Cs)(ri.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=a.$.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
    <br><br>
    HDOP is the Horizontal Dilution of Precision. It is a measure of the accuracy of the horizontal position.
    <br><br>
    PDOP is the Position Dilution of Precision. It is a measure of the accuracy of the position.
    <br><br>
    GDOP is the Geometric Dilution of Precision. It is a measure of the accuracy of the position.
  `,this.sideMenuElementName="dops-menu",this.sideMenuElementHtml=a.$.html`
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
  </div>`,this.rmbL1ElementName="dops-rmb",this.rmbL1Html=a.$.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">DOPs &#x27A4;</a></li>
`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbL2ElementName="dops-rmb-menu",this.rmbL2Html=a.$.html`
  <ul class='dropdown-contents'>
    <li id="dops-curdops-rmb"><a href="#">Current GPS DOPs</a></li>
    <li id="dops-24dops-rmb"><a href="#">24 Hour GPS DOPs</a></li>
  </ul>
`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=a.$.getInputManager().mouse.latLon;const t=a.$.getInputManager().mouse.dragPosition;if(void 0===e||isNaN(e.lat)||isNaN(e.lon)){console.debug("latLon undefined!");const i=it.h.calculateTimeVariables(a.$.getTimeManager().simulationTimeObj).gmst;e=(0,M.tc)({x:t[0],y:t[1],z:t[2]},i)}const i=ri.getGpsSats(a.$.getCatalogManager(),a.$.getGroupsManager()),s=li.getDops(a.$.getTimeManager().simulationTimeObj,i,e.lat,e.lon,0,settingsManager.gpsElevationMask);a.$.getUiManager().toast(`HDOP: ${s.hdop}<br/>VDOP: ${s.vdop}<br/>PDOP: ${s.pdop}<br/>GDOP: ${s.gdop}<br/>TDOP: ${s.tdop}`,l.pc.normal,!0)}break;case"dops-24dops-rmb":{const e=a.$.getInputManager().mouse.latLon;if(this.isMenuButtonActive){(0,b.Cs)(ri.updateSideMenu),this.setBottomIconToEnabled();break}(0,o.gE)("dops-lat").value=e.lat.toFixed(3),(0,o.gE)("dops-lon").value=e.lon.toFixed(3),(0,o.gE)("dops-alt").value="0",(0,o.gE)("dops-el").value=settingsManager.gpsElevationMask.toString(),a.$.runEvent(l.kR.bottomMenuClick,this.bottomIconElementName)}}}}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("dops-form").addEventListener("submit",(e=>{e.preventDefault(),ri.updateSideMenu()}))}})}static updateSideMenu(){const e=a.$.getGroupsManager(),t=a.$.getCatalogManager(),i=a.$.getTimeManager(),s=parseFloat((0,o.gE)("dops-lat").value),n=parseFloat((0,o.gE)("dops-lon").value),l=parseFloat((0,o.gE)("dops-alt").value),r=parseFloat((0,o.gE)("dops-el").value);settingsManager.gpsElevationMask=r;const c=ri.getGpsSats(t,e),d=li.getDopsList((e=>i.getOffsetTimeObj(e)),c,s,n,l,r);li.updateDopsTable(d)}static getGpsSats(e,t){var i,s;const a=null!==(i=(s=t.groupList).GPSGroup)&&void 0!==i?i:s.GPSGroup=t.createGroup(r.M.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),n=[];return a.ids.forEach((t=>{const i=e.getSat(t);i&&n.push(i)})),n}}ri.PLUGIN_NAME="DOPs Plugin";const ci=new ri,di=i.p+"../img/edit.png";class ui extends u.s{constructor(){super(ui.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=a.$.html`The Edit Satellite Menu is used to edit the satellite data.
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
    </ul>`,this.sideMenuElementName="editSat-menu",this.sideMenuElementHtml=a.$.html`
    <div id="editSat-menu" class="side-menu-parent start-hidden text-select">
      <div id="editSat-content" class="side-menu">
        <div class="row">
          <h5 class="center-align">Edit Satellite</h5>
          <form id="editSat">
            <div class="input-field col s12">
              <input disabled value="AAAAA" id="${ui.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${ui.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${ui.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${ui.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${ui.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ui.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${ui.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ui.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${ui.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${ui.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${ui.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${ui.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${ui.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ui.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${ui.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ui.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${ui.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${ui.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${ui.elementPrefix}-per" class="active">Period</label>
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
        <div id="${ui.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=di,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.populateSideMenu_()},this.dragOptions={isDraggable:!0},this.isRmbOnSat=!0,this.rmbMenuOrder=2,this.rmbL1ElementName="edit-rmb",this.rmbL1Html=a.$.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Edit Sat &#x27A4;</a></li>`,this.rmbCallback=(e,t)=>{if(null==t)throw new Error("clickedSat is undefined");switch(e){case"set-pri-sat-rmb":this.selectSatManager_.selectSat(t);break;case"set-sec-sat-rmb":this.selectSatManager_.setSecondarySat(t);break;case"edit-sat-rmb":this.selectSatManager_.selectSat(t),this.isMenuButtonActive||a.$.getUiManager().bottomIconPress({id:this.bottomIconElementName})}},this.rmbL2ElementName="edit-rmb-menu",this.rmbL2Html=a.$.html`
    <ul class='dropdown-contents'>
      <li id="set-pri-sat-rmb"><a href="#">Set as Primary Sat</a></li>
      <li id="set-sec-sat-rmb"><a href="#">Set as Secondary Sat</a></li>
      <li id="edit-sat-rmb"><a href="#">Edit Satellite</a></li>
    </ul>`,this.selectSatManager_=a.$.getPlugin(g.A)}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:"editSat",cb:()=>{(0,o.gE)("editSat-newTLE").addEventListener("click",this.editSatNewTleClick_.bind(this)),(0,o.gE)("editSat").addEventListener("submit",(e=>{e.preventDefault(),ui.editSatSubmit()})),(0,o.gE)(`${ui.elementPrefix}-per`).addEventListener("change",(()=>{const e=(0,o.gE)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,o.gE)("es-meanmo").value=t.toFixed(8)})),(0,o.gE)(`${ui.elementPrefix}-meanmo`).addEventListener("change",(()=>{const e=(0,o.gE)(`${ui.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,o.gE)(`${ui.elementPrefix}-per`).value=t})),(0,o.gE)("editSat-save").addEventListener("click",ui.editSatSaveClick),(0,o.gE)("editSat-open").addEventListener("click",(()=>{a.$.getSoundManager().play(h.A.MENU_BUTTON),(0,o.gE)("editSat-file").click()})),(0,o.gE)("editSat-file").addEventListener("change",(e=>{window.FileReader&&(ui.doReaderActions_(e),e.preventDefault())})),(0,o.gE)(`${ui.elementPrefix}-error`).addEventListener("click",(()=>{(0,o.gE)(`${ui.elementPrefix}-error`).style.display="none"}))}})}addJs(){super.addJs(),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e||(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}})}static doReaderActions_(e){try{const t=new FileReader;t.onload=ui.readerOnLoad_,t.readAsText(e.target.files[0])}catch(e){f.J.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad_(e){if(2!==e.target.readyState)return;if(e.target.error)return void f.J.warn("Error while reading file!");const t=a.$.getTimeManager(),i=a.$.getOrbitManager(),s=a.$.getUiManager(),n=JSON.parse(e.target.result),o=parseInt(St.V.pad0(n.tle1.substr(2,5).trim(),5)),r=a.$.getCatalogManager().sccNum2Sat(o);let c;try{c=M.j0.createSatrec(n.tle1,n.tle2)}catch(e){return void f.J.error(e,"edit-sat.ts","Error creating satellite record!")}it.h.altitudeCheck(c,t.simulationTimeObj)>1?(a.$.getCatalogManager().satCruncher.postMessage({typ:_t.XY.SAT_EDIT,id:r.id,active:!0,tle1:n.tle1,tle2:n.tle2}),i.changeOrbitBufferData(r.id,n.tle1,n.tle2),r.active=!0):s.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.",l.pc.caution,!0)}populateSideMenu_(){const e=this.selectSatManager_.getSelectedSat(l.Z.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;(0,o.gE)(`${ui.elementPrefix}-scc`).value=t.sccNum;const i=t.inclination.toFixed(4).padStart(8,"0");(0,o.gE)(`${ui.elementPrefix}-inc`).value=i,(0,o.gE)(`${ui.elementPrefix}-year`).value=t.tle1.substr(18,2),(0,o.gE)(`${ui.elementPrefix}-day`).value=t.tle1.substr(20,12),(0,o.gE)(`${ui.elementPrefix}-meanmo`).value=t.tle2.substr(52,11),(0,o.gE)(`${ui.elementPrefix}-per`).value=(1440/parseFloat(t.tle2.substr(52,11))).toFixed(4);const s=t.rightAscension.toFixed(4).padStart(8,"0");(0,o.gE)(`${ui.elementPrefix}-rasc`).value=s,(0,o.gE)(`${ui.elementPrefix}-ecen`).value=t.eccentricity.toFixed(7).substr(2,7);const a=t.argOfPerigee.toFixed(4).padStart(8,"0");(0,o.gE)(`${ui.elementPrefix}-argPe`).value=St.V.pad0(a,8),(0,o.gE)(`${ui.elementPrefix}-meana`).value=t.tle2.substr(43,8)}editSatNewTleClick_(){(0,b.Cs)(this.editSatNewTleClickFadeIn_.bind(this))}editSatNewTleClickFadeIn_(){const e=a.$.getTimeManager(),t=a.$.getUiManager();try{const i=a.$.getCatalogManager().sccNum2Id(parseInt((0,o.gE)(`${ui.elementPrefix}-scc`).value)),s=a.$.getCatalogManager().getObject(i);if(!s.isSatellite())return;const n=s,r=it.h.calculateTimeVariables(e.simulationTimeObj).gmst,c=(0,M.tc)(n.position,r),d=c.lon,u=c.lat,g=c.alt,h=it.h.getDirection(n,e.simulationTimeObj);"Error"===h&&t.toast("Cannot calculate direction of satellite. Try again later.",l.pc.caution);const m=e.simulationTimeObj,p=Mt.V.currentEpoch(m);let v;n.tle1=n.tle1.substr(0,18)+p[0]+p[1]+n.tle1.substr(32),a.$.getMainCamera().isAutoPitchYawToTarget=!1,v=n.apogee-n.perigee<300?new Et(n,u,d,h,m).rotateOrbitToLatLon():new Et(n,u,d,h,m,g).rotateOrbitToLatLon();const b=v[0],f=v[1];if("Error"===b)return void t.toast(`${f}`,l.pc.critical,!0);a.$.getCatalogManager().satCruncher.postMessage({typ:_t.XY.SAT_EDIT,id:i,tle1:b,tle2:f}),a.$.getOrbitManager().changeOrbitBufferData(i,b,f);const S=this.selectSatManager_.getSelectedSat(l.Z.EXTRA_ONLY);if(!S.isSatellite())return;const E=S;(0,o.gE)(`${ui.elementPrefix}-scc`).value=E.sccNum;const _=E.inclination.toFixed(4).padStart(8,"0");(0,o.gE)(`${ui.elementPrefix}-inc`).value=St.V.pad0(_,8),(0,o.gE)(`${ui.elementPrefix}-year`).value=E.tle1.substr(18,2),(0,o.gE)(`${ui.elementPrefix}-day`).value=E.tle1.substr(20,12),(0,o.gE)(`${ui.elementPrefix}-meanmo`).value=E.tle2.substr(52,11),(0,o.gE)(`${ui.elementPrefix}-per`).value=(1440/parseFloat(E.tle2.substr(52,11))).toFixed(4);const y=E.rightAscension.toFixed(4).padStart(8,"0");(0,o.gE)(`${ui.elementPrefix}-rasc`).value=y,(0,o.gE)(`${ui.elementPrefix}-ecen`).value=E.eccentricity.toFixed(7).substr(2,7);const A=E.argOfPerigee.toFixed(4).padStart(8,"0");(0,o.gE)(`${ui.elementPrefix}-argPe`).value=A,(0,o.gE)(`${ui.elementPrefix}-meana`).value=E.tle2.substr(43,8)}catch(e){f.J.warn(e)}}static editSatSubmit(){a.$.getSoundManager().play(h.A.MENU_BUTTON);const e=a.$.getCatalogManager();(0,o.gE)(`${ui.elementPrefix}-error`).style.display="none";const t=(0,o.gE)(`${ui.elementPrefix}-scc`).value,i=e.sccNum2Id(parseInt(t));null===i&&f.J.info("Not a Real Satellite");const s=e.getObject(i,l.Z.EXTRA_ONLY);if(!s.isSatellite())return;const n=s,r=n.tle1.substr(9,8),c=(0,o.gE)(`${ui.elementPrefix}-inc`).value,d=(0,o.gE)(`${ui.elementPrefix}-meanmo`).value,u=(0,o.gE)(`${ui.elementPrefix}-rasc`).value,g=(0,o.gE)(`${ui.elementPrefix}-ecen`).value,m=(0,o.gE)(`${ui.elementPrefix}-argPe`).value,p=(0,o.gE)(`${ui.elementPrefix}-meana`).value,v=(0,o.gE)(`${ui.elementPrefix}-year`).value,b=(0,o.gE)(`${ui.elementPrefix}-day`).value,{tle1:S,tle2:E}=M.rX.createTle({sat:n,inc:c,meanmo:d,rasc:u,argPe:m,meana:p,ecen:g,epochyr:v,epochday:b,intl:r,scc:t}),_=S,y=E;let A;try{A=M.j0.createSatrec(_,y)}catch(e){return void f.J.error(e,"edit-sat.ts","Error creating satellite record!")}it.h.altitudeCheck(A,a.$.getTimeManager().simulationTimeObj)>1?(e.satCruncher.postMessage({typ:_t.XY.SAT_EDIT,id:i,active:!0,tle1:_,tle2:y}),a.$.getOrbitManager().changeOrbitBufferData(i,_,y),n.active=!0,n.editTle(_,y),a.$.getMainCamera().zoomTarget=M.N$.GEO):a.$.getUiManager().toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.",l.pc.caution,!0)}static editSatSaveClick(e){const t=a.$.getCatalogManager();a.$.getSoundManager().play(h.A.EXPORT);try{const e=(0,o.gE)(`${ui.elementPrefix}-scc`).value,i=t.sccNum2Id(parseInt(e)),s=t.getObject(i,l.Z.EXTRA_ONLY),a={tle1:s.tle1,tle2:s.tle2},n=JSON.stringify(a),r=new Blob([n],{type:"text/plain;charset=utf-8"});(0,at.saveAs)(r,`${e}.tle`)}catch(e){}e.preventDefault()}}ui.PLUGIN_NAME="Edit Sat",ui.elementPrefix="es";class gi{constructor(){this.PLUGIN_NAME="Gamepad",this.deadzone=.55,this.buttonsPressedHistory=[],this.buttonsPressed=[]}init(){window.addEventListener("gamepadconnected",(e=>{settingsManager.cruncherReady?this.initializeGamepad(e.gamepad):a.$.register({event:l.kR.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>this.initializeGamepad(e.gamepad)})})),window.addEventListener("gamepaddisconnected",(()=>{a.$.getUiManager().toast("Gamepad disconnected",l.pc.critical),this.currentController=null}))}initializeGamepad(e){a.$.getUiManager().toast("Gamepad connected",l.pc.normal),this.currentController||a.$.register({event:l.kR.updateLoop,cbName:this.PLUGIN_NAME,cb:this.updateGamepad.bind(this)}),this.currentController=e}updateGamepad(e){null!=e||(e=0);const t=gi.getController(e);null!==t&&(this.currentController=t,this.updateZoom_(),this.updateLeftStick_(),this.updateRightStick_(),this.updateButtons_())}updateButtons_(){this.currentController.buttons.forEach(((e,t)=>{if(e.pressed&&!this.buttonsPressed[t])switch(this.buttonsPressed[t]=!0,this.buttonsPressedHistory.push(t),this.buttonsPressedHistory.length>8&&this.buttonsPressedHistory.shift(),t){case 0:this.btnA_();break;case 1:this.btnB_();break;case 2:this.btnX_();break;case 3:this.btnY_();break;case 4:this.btnLeftBumper();break;case 5:this.btnRightBumper_();break;case 8:this.btnHome_();break;case 9:this.btnStart_();break;case 10:this.btnLeftStick_();break;case 11:this.btnRightStick_();break;case 12:this.btnDpadUp_();break;case 13:this.btnDpadDown_();break;case 14:this.btnDpadLeft_();break;case 15:this.btnDpadRight_();break;case 16:this.btnXbox()}else!e.pressed&&this.buttonsPressed[t]&&(this.buttonsPressed[t]=!1)}))}btnA_(){var e;settingsManager.isLimitedGamepadControls||(console.log("A"),null===(e=a.$.getPlugin(g.A))||void 0===e||e.selectSat(a.$.getHoverManager().hoveringSat))}btnB_(){var e;settingsManager.isLimitedGamepadControls||(console.log("B"),null===(e=a.$.getPlugin(g.A))||void 0===e||e.selectSat(-1),a.$.getMainCamera().zoomTarget=.8)}btnX_(){settingsManager.isLimitedGamepadControls||(console.log("X"),a.$.getMainCamera().autoRotate())}btnY_(){console.log("Y")}btnLeftBumper(){var e;settingsManager.isLimitedGamepadControls||(console.log("Left Bumper"),null===(e=a.$.getPlugin(g.A))||void 0===e||e.selectPrevSat())}btnRightBumper_(){var e;settingsManager.isLimitedGamepadControls||(console.log("Right Bumper"),null===(e=a.$.getPlugin(g.A))||void 0===e||e.selectNextSat())}btnHome_(){settingsManager.isLimitedGamepadControls||(console.log("Home"),a.$.getMainCamera().isPanReset=!0,a.$.getMainCamera().isLocalRotateReset=!0,a.$.getMainCamera().ftsRotateReset=!0)}btnXbox(){console.log("Xbox Button")}btnStart_(){console.log("Start")}btnLeftStick_(){console.log("Left Stick")}btnRightStick_(){console.log("Right Stick")}btnDpadUp_(){console.log("D-Pad Up"),settingsManager.isAutoRotateD=!1,settingsManager.isAutoRotateU=!settingsManager.isAutoRotateU,a.$.getMainCamera().autoRotate(!0)}btnDpadDown_(){console.log("D-Pad Down"),settingsManager.isAutoRotateU=!1,settingsManager.isAutoRotateD=!settingsManager.isAutoRotateD,a.$.getMainCamera().autoRotate(!0)}btnDpadLeft_(){console.log("D-Pad Left"),settingsManager.isAutoRotateR=!1,settingsManager.isAutoRotateL=!settingsManager.isAutoRotateL,a.$.getMainCamera().autoRotate(!0)}btnDpadRight_(){console.log("Right"),settingsManager.isAutoRotateL=!1,settingsManager.isAutoRotateR=!settingsManager.isAutoRotateR,a.$.getMainCamera().autoRotate(!0)}updateZoom_(){const e=this.currentController.buttons[6].value,t=this.currentController.buttons[7].value;if(0===e&&0===t)return;const i=a.$.getRenderer();let s=a.$.getMainCamera().zoomLevel();switch(a.$.getMainCamera().cameraType){case V.A.DEFAULT:case V.A.OFFSET:case V.A.FIXED_TO_SAT:s+=e/500*i.dt,s-=t/500*i.dt,a.$.getMainCamera().zoomTarget=s,a.$.getMainCamera().camZoomSnappedOnSat=!1,a.$.getMainCamera().isAutoPitchYawToTarget=!1,s<a.$.getMainCamera().zoomLevel()?a.$.getMainCamera().isZoomIn=!0:a.$.getMainCamera().isZoomIn=!1;break;case V.A.FPS:case V.A.SATELLITE:case V.A.PLANETARIUM:case V.A.ASTRONOMY:0!==e&&(a.$.getMainCamera().fpsVertSpeed+=Math.pow(2*e,3)*i.dt*settingsManager.cameraMovementSpeed),0!==t&&(a.$.getMainCamera().fpsVertSpeed-=Math.pow(2*t,3)*i.dt*settingsManager.cameraMovementSpeed)}}updateLeftStick_(){const e=this.currentController.axes[0],t=this.currentController.axes[1];if(e>this.deadzone||e<-this.deadzone||t>this.deadzone||t<-this.deadzone){a.$.getMainCamera().autoRotate(!1);const i=a.$.getRenderer();switch(settingsManager.lastGamepadMovement=Date.now(),a.$.getMainCamera().cameraType){case V.A.DEFAULT:case V.A.OFFSET:case V.A.FIXED_TO_SAT:a.$.getMainCamera().camAngleSnappedOnSat=!1,a.$.getMainCamera().isAutoPitchYawToTarget=!1,a.$.getMainCamera().camPitchSpeed-=Math.pow(t,3)/200*i.dt*settingsManager.cameraMovementSpeed,a.$.getMainCamera().camYawSpeed+=Math.pow(e,3)/200*i.dt*settingsManager.cameraMovementSpeed;break;case V.A.FPS:case V.A.SATELLITE:case V.A.PLANETARIUM:case V.A.ASTRONOMY:(t>this.deadzone||t<-this.deadzone)&&(a.$.getMainCamera().fpsForwardSpeed=-Math.pow(t,3)*i.dt),(e>this.deadzone||e<-this.deadzone)&&(a.$.getMainCamera().fpsSideSpeed=Math.pow(e,3)*i.dt)}}}updateRightStick_(){if(settingsManager.isLimitedGamepadControls)return;const e=this.currentController.axes[2],t=this.currentController.axes[3],i=a.$.getRenderer();if(a.$.getMainCamera().isLocalRotateOverride=!1,t>this.deadzone||t<-this.deadzone||e>this.deadzone||e<-this.deadzone)switch(a.$.getMainCamera().autoRotate(!1),a.$.getMainCamera().cameraType){case V.A.DEFAULT:case V.A.OFFSET:case V.A.FIXED_TO_SAT:a.$.getMainCamera().isLocalRotateOverride=!0,a.$.getMainCamera().localRotateDif.pitch=200*-t,a.$.getMainCamera().localRotateDif.yaw=200*-e;break;case V.A.FPS:case V.A.SATELLITE:case V.A.PLANETARIUM:case V.A.ASTRONOMY:a.$.getMainCamera().camPitchSpeed+=t/100*i.dt*settingsManager.cameraMovementSpeed,a.$.getMainCamera().camYawSpeed-=e/100*i.dt*settingsManager.cameraMovementSpeed}}vibrate(e){this.currentController&&this.currentController.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})}static getController(e=0){const t=navigator.getGamepads().filter((e=>null!==e));return t.length>e&&null!==t[e]?t[e]:null}}const hi=new gi;var mi=i(7765);const pi=i.p+"../img/calendar.png";class vi extends u.s{constructor(){super("Launch Menu"),this.bottomIconElementName="menu-launches",this.bottomIconImg=pi,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonActive){settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3);const e=(new Date).getFullYear();(0,mi.r9)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonActive&&(this.isMenuButtonActive=!1,(0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const bi=new vi,fi=i.p+"../img/rocket.png";var Si=i(4602);class Ei extends u.s{constructor(){super(Ei.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.bottomIconCallback=()=>{if(!this.isMenuButtonActive)return;if(!this.verifySatelliteSelected())return;const e=a.$.getCatalogManager().getObject(this.selectSatManager_.selectedSat,l.Z.EXTRA_ONLY);(0,o.gE)("nl-scc").value=e.sccNum,(0,o.gE)("nl-inc").value=St.V.pad0(e.inclination.toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=fi,this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=a.$.html`
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
  `,this.helpTitle="New Launch Menu",this.helpBody=a.$.html`The New Launch Menu is used for generating notional orbital launches by modifying existing satellites with similar parameters.
    <br><br>
    After selecting a satellite, you can select a launch location and a north/south azimuth.
    The selected satellite will be modified to align it with the launch site.
    The clock is then changed to 00:00:00 to represent relative time after the launch.
    This can be helpful in calculating sensor coverage relative to launch time.
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=a.$.getTimeManager(),i=a.$.getCatalogManager(),s=a.$.getUiManager(),n=a.$.getColorSchemeManager();(0,b.p$)();const r=(0,o.gE)("nl-scc").value,c=i.sccNum2Id(parseInt(r)),d=i.getObject(c),u=(0,o.gE)("nl-updown").value,g=(0,o.gE)("nl-facility").value;let m,p;if(!i.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in i.launchSites)i.launchSites[e].name===g&&(m=i.launchSites[e].lat,p=i.launchSites[e].lon);p>180&&(p-=360);const v=new Date,S=new Date(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate(),0,0,0);S.setUTCHours(0);const E=t.staticOffset;t.changeStaticOffset(S.getTime()-v.getTime()),n.setColorScheme(settingsManager.currentColorScheme,!0),a.$.getMainCamera().isAutoPitchYawToTarget=!1;const _=t.simulationTimeObj,y=new Et(d,m,p,u,_).rotateOrbitToLatLon(),A=y[0],x=y[1];if("Error"===A||69!==A.length||69!==x.length)return"Error"===A?s.toast(`Failed to Create TLE: ${x}`,l.pc.critical):69!==A.length?s.toast(`Invalid TLE1 Created: length is not 69 - ${A}`,l.pc.critical):69!==x.length&&s.toast(`Invalid TLE2 Created: length is not 69 - ${x}`,l.pc.critical),t.changeStaticOffset(E),this.isDoingCalculations=!1,void(0,b.RZ)();let L;s.toast("Time is now relative to launch time.",l.pc.standby),null===(e=a.$.getSoundManager())||void 0===e||e.play(h.A.LIFT_OFF),d.satrec=null;try{L=M.j0.createSatrec(A,x),d.satrec=L}catch(e){return void f.J.error(e,"new-launch.ts","Error creating satellite record!")}it.h.altitudeCheck(L,_)>1?(i.satCruncher.postMessage({typ:_t.XY.SAT_EDIT,id:c,active:!0,tle1:A,tle2:x}),a.$.getOrbitManager().changeOrbitBufferData(c,A,x)):s.toast("Failed Altitude Test - Try a Different Satellite!",l.pc.critical),(0,Ht.p)({cruncher:i.satCruncher,cb:()=>{this.isDoingCalculations=!1,(0,b.RZ)(),s.toast("Launch Nominal Created!",l.pc.standby),s.searchManager.doSearch(d.sccNum)},validationFunc:e=>void 0!==e.satPos,error:()=>{this.isDoingCalculations=!1,(0,b.RZ)(),s.toast("Cruncher failed to meet requirement after multiple tries! Is this launch even possible?",l.pc.critical)}})},this.selectSatManager_=a.$.getPlugin(g.A)}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)(`${this.sideMenuElementName}-form`).addEventListener("change",(()=>{const e=a.$.getCatalogManager().getObject(this.selectSatManager_.selectedSat,l.Z.EXTRA_ONLY);e.isSatellite()&&this.preValidate_(e)}))}}),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(null==e?void 0:e.isSatellite()){const t=e;(0,o.gE)("nl-scc").value=t.sccNum,(0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.preValidate_(t)}else(0,o.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0}})}preValidate_(e){const t=(0,o.gE)("nl-facility").value,i=Si.g[t].lat;let s=e.inclination;s=s>90?180-s:s;const a=(0,o.gE)(`${this.sideMenuElementName}-submit`);s<i?(a.disabled=!0,a.textContent="Inclination Too Low!"):(a.disabled=!1,a.textContent="Create Launch Nominal ▶")}}Ei.PLUGIN_NAME="New Launch";const Mi=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown",_i=i.p+"../img/calendar2.png";class yi extends u.s{constructor(){super(yi.PLUGIN_NAME),this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.showTable()},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=_i,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=a.$.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=a.$.html`
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
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),i.e(608).then(i.bind(i,6608)).then((e=>e))}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("export-launch-info").addEventListener("click",(()=>{a.$.getSoundManager().play(h.A.EXPORT),(0,st.g3)(this.launchList,"launchList")}))}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then((e=>e.json())).then((e=>this.processData(e))).catch((()=>f.J.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`))).finally((()=>{const e=(0,o.gE)("nextLaunch-table");e&&""==e.innerHTML&&(yi.initTable(e,this.launchList),(0,o.gE)("nextLaunch-table").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(0,mi.r9)(e.href)}))})))}))}}processData(e){var t,i,s,a,n,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(i=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===i?void 0:i.name.split(",",1)[0],c.locationURL=null===(s=r.pad)||void 0===s?void 0:s.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(a=r.rocket)||void 0===a?void 0:a.configuration.full_name,c.rocketConfig=null===(n=r.rocket)||void 0===n?void 0:n.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Launch Window")),i.setAttribute("style","text-decoration: underline; width: 120px;");const s=t.insertCell();s.appendChild(document.createTextNode("Mission")),s.setAttribute("style","text-decoration: underline; width: 140px;");const a=t.insertCell();a.appendChild(document.createTextNode("Location")),a.setAttribute("style","text-decoration: underline");const n=t.insertCell();n.appendChild(document.createTextNode("Agency")),n.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var i,s,a,n,o,l;yi.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),u=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":`${(0,oi.i)(t[r].windowStart,"isoDateTime",!0)} UTC`;d.appendChild(document.createTextNode(u));const g=c.insertCell(),h=(null===(i=t[r])||void 0===i?void 0:i.missionName)||"Unknown",m=(null===(s=t[r])||void 0===s?void 0:s.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${Mi(h,15)}</a>`:`${Mi(h,15)}`,p=(null===(a=t[r])||void 0===a?void 0:a.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;g.innerHTML=`${m}<br />${p}`;const v=(null===(n=t[r])||void 0===n?void 0:n.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${Mi(t[r].location,25)}</a>`:`${Mi(t[r].location,25)}`;c.insertCell().innerHTML=v;const b=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${Mi(t[r].agency,30)}</a>`:`${Mi(t[r].agency,30)}`;c.insertCell().innerHTML=b,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}yi.PLUGIN_NAME="Next Launches";const Ai=i.p+"../img/day-night.png";class xi extends u.s{constructor(){super("Night Toggle"),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=Ai}addJs(){super.addJs(),a.$.register({event:l.kR.nightToggle,cbName:this.PLUGIN_NAME,cb:(e,t,i)=>{this.isMenuButtonActive?e.bindTexture(e.TEXTURE_2D,i):e.bindTexture(e.TEXTURE_2D,t)}}),a.$.getInputManager().keyboard.registerKeyUpEvent({key:"N",callback:()=>{this.isMenuButtonActive?(a.$.getSoundManager().play(h.A.TOGGLE_OFF),this.setBottomIconToUnselected()):(a.$.getSoundManager().play(h.A.TOGGLE_ON),this.setBottomIconToSelected())}})}}var Li=i(2136);class wi extends u.s{constructor(){super(wi.PLUGIN_NAME),this.dependencies=[Li.c.PLUGIN_NAME,g.A.PLUGIN_NAME],this.doOnce=!1,this.isReferenceSatsActive=!1,this.selectSatManager_=a.$.getPlugin(g.A)}addHtml(){super.addHtml(),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())?((0,o.FG)("orbit-references-link"),this.doOnce||((0,o.gE)("sat-info-top-links").insertAdjacentHTML("beforeend",a.$.html`
                <div id="orbit-references-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,o.gE)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0)):(0,o.ys)("orbit-references-link")}})}orbitReferencesLinkClick(){const e=a.$.getCatalogManager(),t=e.getSat(this.selectSatManager_.selectedSat);if(!t)return;let i=t.sccNum5.padStart(5,"0");const s=t.eccentricity.toString(),n=t.rightAscension.toString(),o=t.argOfPerigee.toString(),l=t.inclination.toString(),r=t.meanMotion.toString(),c=t.epochYear.toString(),d=t.epochDay.toString(),u=t.intlDes.split("-")[0].slice(2)+t.intlDes.split("-")[1],g=t.sccNum,h=1440/parseFloat(r);let m=0;for(let a=0;a<360;a++){const p=m.toFixed(4).padStart(8,"0"),{tle1:v,tle2:b}=M.rX.createTle({sat:t,inc:l,meanmo:r,rasc:n,argPe:o,meana:p,ecen:s,epochyr:c,epochday:d,intl:u,scc:g}),f=M.e2.convert6DigitToA5((pt.v.ANALYST_START_ID+a).toString().padStart(5,"0")),S=e.sccNum2Id(f),E=e.addAnalystSat(v,b,S,f);if(E&&(i+=`${E.sccNum.toString()},`),m+=360/h*4,m>=360)break}i=i.slice(0,-1),a.$.getUiManager().doSearch(i),this.isReferenceSatsActive=!0}}wi.PLUGIN_NAME="Orbit References";const Ti=i.p+"../img/sputnick.png";var Ci=i(1659),ki={};ki.styleTagTransform=Ut(),ki.setAttributes=Rt(),ki.insert=Nt().bind(null,"head"),ki.domAPI=kt(),ki.insertStyleElement=Ot(),Tt()(Ci.A,ki),Ci.A&&Ci.A.locals&&Ci.A.locals;class $i extends u.s{constructor(){super($i.name),this.tipDataSrc="./data/tip.json",this.selectSatIdOnCruncher_=null,this.tipList_=[],this.bottomIconElementName="menu-satellite-tip",this.bottomIconImg=Ti,this.bottomIconLabel="Reentry Prediction",this.sideMenuElementName="tip-menu",this.sideMenuElementHtml=a.$.html`
  <div id="tip-menu" class="side-menu-parent start-hidden text-select">
    <div id="tip-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Tracking and Impact Messages</h5>
        <table id="tip-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Tracking and Impact Prediction",this.helpBody=a.$.html`The Tracking and Impact Prediction (tip) menu displays the latest tracking and impact prediction messages for satellites.
  The table shows the following columns:<br><br>
  <b>NORAD</b>: The NORAD catalog ID of the satellite.<br><br>
  <b>Decay Date</b>: The date of the predicted decay of the satellite.<br><br>
  <b>Latitude</b>: The latitude of the satellite.<br><br>
  <b>Longitude</b>: The longitude of the satellite.<br><br>
  <b>Window (min)</b>: The time window in minutes for the prediction.<br><br>
  <b>Next Report</b>: The date of the next report.<br><br>
  <b>High Interest?</b>: Whether the satellite is of high interest.<br><br>

  All data for reentries is sourced from the Tracking and Impact Prediction (TIP) messages provided by the US Space Command (USSPACECOM).
  `,this.dragOptions={isDraggable:!0,minWidth:700,maxWidth:850},this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.parsetipData_()}}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:this.uiManagerFinal_.bind(this)}),a.$.register({event:l.kR.onCruncherMessage,cbName:this.PLUGIN_NAME,cb:()=>{var e;null!==this.selectSatIdOnCruncher_&&(null===(e=a.$.getPlugin(g.A))||void 0===e||e.selectSat(this.selectSatIdOnCruncher_),this.selectSatIdOnCruncher_=null)}})}uiManagerFinal_(){(0,o.gE)(this.sideMenuElementName).addEventListener("click",(e=>{(0,b.Cs)((()=>{var t;const i=e.target.parentElement;if(!i.classList.contains("tip-object"))return;const s=null===(t=i.dataset)||void 0===t?void 0:t.row;null!==s&&this.eventClicked_(parseInt(s))}))}))}parsetipData_(){0===this.tipList_.length&&fetch(this.tipDataSrc).then((e=>{e.json().then((e=>{this.setTipList_(e),this.createTable_(),0===this.tipList_.length&&f.J.warn("No tip data found!")}))}))}setTipList_(e){this.tipList_=e,this.tipList_.sort(((e,t)=>new Date(t.MSG_EPOCH).getTime()-new Date(e.MSG_EPOCH).getTime())),this.tipList_=this.tipList_.filter(((e,t,i)=>i.findIndex((t=>t.NORAD_CAT_ID===e.NORAD_CAT_ID))===t)),this.tipList_.sort(((e,t)=>new Date(t.DECAY_EPOCH).getTime()-new Date(e.DECAY_EPOCH).getTime()))}eventClicked_(e){const t=a.$.getCatalogManager().sccNum2Sat(parseInt(this.tipList_[e].NORAD_CAT_ID));if(!t)return void a.$.getUiManager().toast("Satellite appears to have decayed!",l.pc.caution);const i=new Date,s=new Date(Date.UTC(parseInt(this.tipList_[e].DECAY_EPOCH.substring(0,4)),parseInt(this.tipList_[e].DECAY_EPOCH.substring(5,7))-1,parseInt(this.tipList_[e].DECAY_EPOCH.substring(8,10)),parseInt(this.tipList_[e].DECAY_EPOCH.substring(11,13)),parseInt(this.tipList_[e].DECAY_EPOCH.substring(14,16)),parseInt(this.tipList_[e].DECAY_EPOCH.substring(17,19))));a.$.getTimeManager().changeStaticOffset(s.getTime()-i.getTime()),a.$.getMainCamera().isAutoPitchYawToTarget=!1,a.$.getUiManager().doSearch(`${t.sccNum5}`),this.selectSatIdOnCruncher_=t.id}createTable_(){try{const e=(0,o.gE)("tip-table");e.innerHTML="",$i.createHeaders_(e),this.createBody_(e)}catch(e){f.J.warn("Error processing SOCRATES data!")}}createBody_(e){for(let t=0;t<this.tipList_.length;t++)this.createRow_(e,t)}static createHeaders_(e){const t=e.insertRow(),i=["NORAD","Decay Date","Latitude","Longitude","Window (min)","Next Report","High Interest?"];for(const e of i){const i=t.insertCell();i.appendChild(document.createTextNode(e)),i.setAttribute("style","text-decoration: underline"),i.setAttribute("class","center")}}createRow_(e,t){const i=e.insertRow();return i.setAttribute("class","tip-object link"),i.setAttribute("data-row",t.toString()),$i.createCell_(i,this.tipList_[t].NORAD_CAT_ID),$i.createCell_(i,this.tipList_[t].DECAY_EPOCH),$i.createCell_(i,this.tipList_[t].LAT),$i.createCell_(i,this.tipList_[t].LON),$i.createCell_(i,this.tipList_[t].WINDOW),$i.createCell_(i,this.tipList_[t].NEXT_REPORT),$i.createCell_(i,this.tipList_[t].HIGH_INTEREST),i}static createCell_(e,t){e.insertCell().appendChild(document.createTextNode(t))}}var Ni=i(9506),Ii=i(5526);const Ri=i.p+"../img/polar.png";class Pi extends u.s{constructor(){super(Pi.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.plotDuration_=3,this.fontRatio_=.03,this.plotData_=[],this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconElementName="menu-polar-plot",this.bottomIconLabel="Polar Plot",this.bottomIconImg=Ri,this.bottomIconCallback=()=>{this.updatePlot_()},this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="polar-plot-menu",this.sideMenuElementHtml=a.$.html`
  <div id="polar-plot-menu" class="side-menu-parent start-hidden text-select">
    <div id="polar-plot-content" class="side-menu" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <span id="polar-plot-warning" class="text-center">Satellite is not in view for the next ${(24*this.plotDuration_).toFixed(0)} hours</span>
      <canvas id="polar-plot" class="w-96" width="1000" height="1000"></canvas>
      <button id="polar-plot-save" class="btn btn-primary">Save Image</button>
    </div>
  </div>
  `,this.helpTitle="Polar Plot Menu",this.helpBody=a.$.html`The Polar Plot Menu is used to generate a 2D polar plot of the satellite's azimuth and elevation over time.`,this.dragOptions={isDraggable:!0,minWidth:450,maxWidth:1e3},this.selectSatManager_=a.$.getPlugin(g.A)}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("polar-plot-save").addEventListener("click",(()=>{const e=document.getElementById("polar-plot").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download=`sat-${this.selectSatManager_.getSelectedSat().sccNum6}-polar-plot.png`,t.click()}))}})}addJs(){super.addJs(),a.$.register({event:l.kR.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.isMenuButtonActive&&this.updatePlot_()}}),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())&&a.$.getSensorManager().isSensorSelected()?((0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.isMenuButtonActive&&this.updatePlot_()):((0,o.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}}),a.$.getInputManager().keyboard.registerKeyUpEvent({key:"P",callback:()=>{-1!==a.$.getPlugin(g.A).selectedSat&&(this.isMenuButtonActive?(this.closeSideMenu(),this.setBottomIconToUnselected(),a.$.getSoundManager().play(h.A.TOGGLE_OFF)):(this.openSideMenu(),this.setBottomIconToSelected(),this.updatePlot_(),a.$.getSoundManager().play(h.A.TOGGLE_ON)))}})}updatePlot_(){this.generatePlotData_()?(this.drawPlot_(),(0,o.ys)("polar-plot-warning"),(0,o.FG)("polar-plot"),(0,o.FG)("polar-plot-save")):((0,o.FG)("polar-plot-warning"),(0,o.ys)("polar-plot"),(0,o.ys)("polar-plot-save"),(0,o.gE)("polar-plot-warning").innerHTML=`Satellite is not in view for the next ${(24*this.plotDuration_).toFixed(0)} hours`)}generatePlotData_(){this.passStartTime_=null,this.passStopTime_=null;const e=a.$.getSensorManager().getSensor(),t=this.selectSatManager_.getSelectedSat();let i=!1;if(t.perigee>e.maxRng||t.apogee<e.minRng)return!1;this.plotData_=[];let s=null;for(let n=0;n<this.plotDuration_*M.Vw;n++)if(s=a.$.getTimeManager().getOffsetTimeObj(n*M.If),e.isSatInFov(t,s)){this.passStartTime_||(this.passStartTime_=s);const a=e.rae(t,s);this.plotData_.push([a.az,a.el]),i=!0}else if(i)break;return this.passStopTime_=s,i}drawPlot_(){this.setupCanvas_(),this.drawPlotBackground_(),this.drawOrbitLine_(),this.drawStartAndEnd_(),this.drawTitle_()}drawTitle_(){this.ctx_.font=.035*this.canvasSize_+"px consolas",this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.textAlign="center",this.ctx_.textBaseline="top",this.ctx_.fillText(`Satellite ${this.selectSatManager_.getSelectedSat().sccNum}: ${this.passStartTime_.toISOString().slice(11,19)} - ${this.passStopTime_.toISOString().slice(11,19)}`,this.centerX_,0)}setupCanvas_(){const e=document.getElementById("polar-plot");e&&(this.ctx_=e.getContext("2d"),this.canvasSize_=Math.min(this.ctx_.canvas.width,this.ctx_.canvas.height),this.ctx_.imageSmoothingEnabled=!0,this.centerX_=this.ctx_.canvas.width/2,this.centerY_=this.ctx_.canvas.height/2,this.distanceUnit_=this.canvasSize_/225,this.ctx_.clearRect(0,0,this.ctx_.canvas.width,this.ctx_.canvas.height))}drawElevationLines_(){let e=0,t=0;this.ctx_.beginPath();const i=[15,30,45,60,75,90];for(const s of i){e=s*this.distanceUnit_,this.ctx_.moveTo(this.centerX_+e,this.centerY_);for(let i=1;i<=360;i++)t=Math.PI/180*i,this.ctx_.lineTo(this.centerX_+e*Math.cos(t),this.centerY_+e*Math.sin(t))}this.ctx_.lineWidth=1,this.ctx_.stroke()}drawStartAndEnd_(){this.drawDot_(this.plotData_[0][1],this.plotData_[0][0],"lightgreen"),this.drawDot_(this.plotData_[this.plotData_.length-1][1],this.plotData_[this.plotData_.length-1][0],"red")}drawDot_(e,t,i="lightgreen"){t=Math.PI/180*(t-90),e=(90-e)*this.distanceUnit_,this.ctx_.beginPath(),this.ctx_.arc(this.centerX_+e*Math.cos(t),this.centerY_+e*Math.sin(t),15,0,2*Math.PI,!1),this.ctx_.fillStyle=i,this.ctx_.fill()}drawOrbitLine_(){this.ctx_.beginPath(),this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.lineWidth=2;const e=this.plotData_.length;let t=0;for(let i=0;i<e;i++){const e=Math.PI/180*(this.plotData_[i][0]-90);t=(90-this.plotData_[i][1])*this.distanceUnit_,0===i&&(this.ctx_.beginPath(),this.ctx_.moveTo(this.centerX_+t*Math.cos(e),this.centerY_+t*Math.sin(e))),this.ctx_.lineTo(this.centerX_+t*Math.cos(e),this.centerY_+t*Math.sin(e))}this.ctx_.stroke()}drawPlotBackground_(){this.drawElevationLines_(),this.drawPolarAxes_(),this.ctx_.font=this.canvasSize_*this.fontRatio_+"px serif",this.ctx_.strokeStyle="rgb(77, 172, 255)",this.ctx_.fillStyle="rgb(77, 172, 255)",this.ctx_.lineWidth=1,this.labelAzimuthAxis_(),this.labelElevationAxis_()}drawPolarAxes_(){const e=96*this.distanceUnit_;this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_,this.centerY_+e),this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_,this.centerY_-e),this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_+e,this.centerY_),this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_-e,this.centerY_)}labelElevationAxis_(){this.ctx_.textAlign="center",this.ctx_.textBaseline="middle";const e=this.canvasSize_/700;this.ctx_.fillText("90°",this.centerX_+18*e,this.centerY_-12*e),this.ctx_.fillText("75°",this.centerX_+44*e,this.centerY_-44*e),this.ctx_.fillText("60°",this.centerX_+76*e,this.centerY_-76*e),this.ctx_.fillText("45°",this.centerX_+108*e,this.centerY_-108*e),this.ctx_.fillText("30°",this.centerX_+143*e,this.centerY_-143*e),this.ctx_.fillText("15°",this.centerX_+175*e,this.centerY_-175*e),this.ctx_.fillText("0°",this.centerX_+206*e,this.centerY_-206*e),this.ctx_.stroke()}labelAzimuthAxis_(){const e=98*this.distanceUnit_;this.ctx_.font=this.canvasSize_*this.fontRatio_+"px serif",this.ctx_.textAlign="center",this.ctx_.textBaseline="bottom",this.ctx_.fillText(" 0°",this.centerX_,this.centerY_-e),this.ctx_.textBaseline="top",this.ctx_.fillText("180°",this.centerX_,this.centerY_+e),this.ctx_.textAlign="right",this.ctx_.textBaseline="middle",this.ctx_.fillText("270°",this.centerX_-e,this.centerY_),this.ctx_.textAlign="left",this.ctx_.fillText("90°",this.centerX_+e,this.centerY_),this.ctx_.stroke()}}Pi.PLUGIN_NAME="Polar Plot";const Oi=i.p+"../img/reports.png";class Di extends u.s{constructor(){super(Di.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.bottomIconElementName="menu-reports",this.bottomIconLabel="Reports",this.bottomIconImg=Oi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="reports-menu",this.sideMenuElementHtml=a.$.html`
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
  `,this.helpTitle="Reports Menu",this.helpBody=a.$.html`The Reports Menu is a collection of tools to help you analyze and understand the data you are viewing.`,this.dragOptions={isDraggable:!1,minWidth:320},this.selectSatManager_=a.$.getPlugin(g.A)}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("aer-report-btn").addEventListener("click",(()=>this.generateAzElRng_())),(0,o.gE)("coes-report-btn").addEventListener("click",(()=>this.generateClasicalOrbElJ2000_())),(0,o.gE)("eci-report-btn").addEventListener("click",(()=>this.generateEci_())),(0,o.gE)("lla-report-btn").addEventListener("click",(()=>this.generateLla_()))}}),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())?((0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,o.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}generateAzElRng_(){const e=this.getSat_(),t=this.getSensor_();if(!e||!t)return;const i=`Azimuth Elevation Range Report\n-------------------------------\n${this.createHeader_(e,t)}`;let s="Time (UTC),Azimuth(°),Elevation(°),Range(km)\n",a=!1,n=this.getStartTime_();for(let i=0;i<259200;i+=30){n=new Date(n.getTime()+30*M.If);const i=t.rae(e,n);i.el>0?(a=!0,s+=`${this.formatTime_(n)},${i.az.toFixed(3)},${i.el.toFixed(3)},${i.rng.toFixed(3)}\n`):a&&(s+="\n\n",a=!1)}"Time (UTC),Azimuth(°),Elevation(°),Range(km)\n"===s&&(s+="No passes found!"),this.writeReport_({filename:`aer-${e.sccNum}`,header:i,body:s})}formatTime_(e){const t=e.toISOString().split("T");return`${t[0]} ${t[1].split(".")[0]}`}generateLla_(){const e=this.getSat_();if(!e)return;const t=`Latitude Longitude Altitude Report\n-------------------------------\n${this.createHeader_(e)}`;let i="Time (UTC),Latitude(°),Longitude(°),Altitude(km)\n",s=this.getStartTime_();for(let t=0;t<259200;t+=30){s=new Date(s.getTime()+30*M.If);const t=e.lla(s);i+=`${this.formatTime_(s)},${t.lat.toFixed(3)},${t.lon.toFixed(3)},${t.alt.toFixed(3)}\n`}this.writeReport_({filename:`lla-${e.sccNum}`,header:t,body:i})}generateEci_(){const e=this.getSat_();if(!e)return;const t=`Earth Centered Intertial Report\n-------------------------------\n${this.createHeader_(e)}`;let i="Time (UTC),Position X(km),Position Y(km),Position Z(km),Velocity X(km/s),Velocity Y(km/s),Velocity Z(km/s)\n",s=this.getStartTime_();for(let t=0;t<259200;t+=30){s=new Date(s.getTime()+30*M.If);const t=e.eci(s);i+=`${this.formatTime_(s)},${t.position.x.toFixed(3)},${t.position.y.toFixed(3)},${t.position.z.toFixed(3)},${t.velocity.x.toFixed(3)},${t.velocity.y.toFixed(3)},${t.velocity.z.toFixed(3)}\n`}this.writeReport_({filename:`eci-${e.sccNum}`,header:t,body:i,columns:7,isHeaders:!0})}createHeader_(e,t){const i=`Date: ${(new Date).toISOString()}\nSatellite: ${e.name}\nNORAD ID: ${e.sccNum}\nAlternate ID: ${e.altId||"None"}\nInternational Designator: ${e.intlDes}\n\n`,s=`Sensor: ${t?t.name:"None"}\nType: ${t?t.getTypeString():"None"}\nLatitude: ${t?t.lat:"None"}\nLongitude: ${t?t.lon:"None"}\nAltitude: ${t?t.alt:"None"}\nMin Azimuth: ${t?t.minAz:"None"}\nMax Azimuth: ${t?t.maxAz:"None"}\nMin Elevation: ${t?t.minEl:"None"}\nMax Elevation: ${t?t.maxEl:"None"}\nMin Range: ${t?t.minRng:"None"}\nMax Range: ${t?t.maxRng:"None"}\n\n`;return t?`${i}${s}`:`${i}`}generateClasicalOrbElJ2000_(){const e=this.getSat_();if(!e)return;const t=`Classic Orbit Elements Report\n-------------------------------\n${this.createHeader_(e)}`,i=e.toJ2000().toClassicalElements(),s=`Epoch, ${i.epoch}\nApogee, ${i.apogee.toFixed(3)} km\nPerigee, ${i.perigee.toFixed(3)} km\nInclination, ${i.inclination.toFixed(3)}°\nRight Ascension, ${i.rightAscensionDegrees.toFixed(3)}°\nArgument of Perigee, ${i.argPerigeeDegrees.toFixed(3)}°\nTrue Anomaly, ${i.trueAnomalyDegrees.toFixed(3)}°\nEccentricity, ${i.eccentricity.toFixed(3)}\nPeriod, ${i.period.toFixed(3)} min\nSemi-Major Axis, ${i.semimajorAxis.toFixed(3)} km\nMean Motion, ${i.meanMotion.toFixed(3)} rev/day`;this.writeReport_({filename:`coes-${e.sccNum}`,header:t,body:s,columns:2,isHeaders:!1})}writeReport_({filename:e,header:t,body:i,columns:s=4,isHeaders:a=!0}){const n=window.open("text/plain",e),o=new Array(s).fill(0);if(n){const s=i.split("\n").map((e=>e.split(","))).map(((e,t)=>e.map(((e,i)=>(0===t&&(o[i]=0===i?Math.max((new Date).toISOString().length+5,e.trim().length+5):Math.max(10,e.trim().length+5)),e.trim().padEnd(o[i])))))).map(((e,t)=>{const i=e.join("   ");if(0===t&&a){const t=e.join("   "),i=t.replace(/./gu,"-");return`${t}\n${i}`}return i})).join("\n");n.document.write(`<a href="data:text/plain;charset=utf-8,${encodeURIComponent(t+s)}" download="${e}.txt">Download Report</a><br>`),n.document.write(`<plaintext>${t}${s}`),n.document.title=e,n.history.replaceState(null,e,`/${e}.txt`)}else alert("Please allow popups for this site")}getStartTime_(){const e=a.$.getTimeManager().getOffsetTimeObj(0);return e.setMilliseconds(0),e.setSeconds(0),e}getSat_(){const e=this.selectSatManager_.primarySatObj;return e?e instanceof M.mJ?e:(f.J.warn("Satellite is not DetailedSatellite!"),null):(f.J.warn("Select a satellite first!"),null)}getSensor_(){const e=a.$.getSensorManager();return e.isSensorSelected()?e.currentSensors[0]:(f.J.warn("Select a sensor first!"),null)}}Di.PLUGIN_NAME="Reports";var Ui=i(9543);const Fi=i.p+"../img/satchng.png";class Bi extends u.s{constructor(){super(Bi.PLUGIN_NAME),this.bottomIconImg=Fi,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=a.$.html`
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
  </div>`,this.helpTitle="Constellations Menu",this.helpBody=a.$.html`The Constellations menu allows you to view groups of satellites.
  <br><br>
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:"constellations",cb:()=>{(0,o.gE)("constellation-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(e=>{Bi.constellationMenuClick(e.target.dataset.group)}))}))}})}static constellationMenuClick(e){const t=a.$.getTimeManager(),i=a.$.getCatalogManager(),s=a.$.getGroupsManager();if(void 0!==s){switch(e){case"SpaceStations":s.groupList[e]||s.createGroup(r.M.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":s.groupList[e]||s.createGroup(r.M.PAYLOAD_NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":s.groupList[e]||s.createGroup(r.M.PAYLOAD_NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":s.groupList[e]||s.createGroup(r.M.PAYLOAD_NAME_REGEX,/NAVSTAR/u,e);break;case"iridium":s.groupList[e]||s.createGroup(r.M.PAYLOAD_NAME_REGEX,/IRIDIUM/u,e);break;case"orbcomm":s.groupList[e]||s.createGroup(r.M.PAYLOAD_NAME_REGEX,/ORBCOMM/u,e);break;case"globalstar":s.groupList[e]||s.createGroup(r.M.PAYLOAD_NAME_REGEX,/GLOBALSTAR/u,e);break;case"ses":s.groupList[e]||s.createGroup(r.M.PAYLOAD_NAME_REGEX,/SES \d+/u,e);break;case"AmatuerRadio":s.groupList[e]||s.createGroup(r.M.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":s.groupList[e]||s.createGroup(r.M.SCC_NUM,i.id2satnum(i.satLinkManager.aehf),e),(0,b.Cs)((()=>{qt.B.clear(),i.satLinkManager.showLinks(qt.B,Ui.PU.Aehf,t)}));break;case"wgs":if(!s.groupList[e]){const t=i.satLinkManager.wgs.concat(i.satLinkManager.dscs);s.createGroup(r.M.SCC_NUM,i.id2satnum(t),e)}(0,b.Cs)((()=>{qt.B.clear(),i.satLinkManager.showLinks(qt.B,Ui.PU.Wgs,t)}));break;case"starlink":s.groupList[e]||s.createGroup(r.M.NAME_REGEX,/STARLINK/u,e);break;case"sbirs":if(!s.groupList[e]){const t=[...i.satLinkManager.sbirs,...i.satLinkManager.dsp];s.createGroup(r.M.SCC_NUM,i.id2satnum(t),e)}break;default:throw new Error(`Unknown group name: ${e}`)}Bi.groupSelected(e)}}static groupSelected(e){var t;if(void 0===e)return;const i=a.$.getCatalogManager(),s=a.$.getGroupsManager();if(void 0===s.groupList[e])throw new Error(`Unknown group name: ${e}`);const n=(0,o.gE)("search");s.selectGroup(s.groupList[e]),n.innerHTML=s.groupList[e].ids.reduce(((e,t)=>{var s;return`${e}${null===(s=i.getSat(t))||void 0===s?void 0:s.sccNum},`}),"").slice(0,-1),null===(t=a.$.getPlugin(g.A))||void 0===t||t.selectSat(-1);const l=a.$.getUiManager();l.searchManager.doSearch(s.groupList[e].ids.map((e=>{var t;return null===(t=i.getSat(e))||void 0===t?void 0:t.sccNum})).join(",")),settingsManager.isMobileModeEnabled&&l.searchManager.closeSearch(),l.hideSideMenus()}}Bi.PLUGIN_NAME="Sat Constellations";const Gi=new Bi;var Hi=i(8143);const zi=i.p+"../img/sensor_occupied.png";class ji extends u.s{constructor(){super(ji.name),this.bottomIconElementName="menu-sat-fov",this.bottomIconLabel="Satellite FOV",this.bottomIconImg=zi,this.dragOptions={isDraggable:!1,minWidth:350},this.helpBody=a.$.html`
    The Satellite Field of View plugin allows you to control the field of view of a satellite.`,this.sideMenuElementName="satellite-fov-menu",this.sideMenuTitle="Satellite Field of View",this.sideMenuElementHtml=a.$.html`
  <div>
    <div class="center">
      <button id="reset-sat-fov-cones-button" class="center-align btn btn-ui waves-effect waves-light menu-selectable" type="button"
      style="margin: -10px 0px 10px 0px;">
        Reset All FOV Cones &#9658;
      </button>
    </div>
  <form id="sat-fov-settings-default-form">
    <div class="row">
      ${ji.genH5Title_("Default Sensor Design")}
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
      ${ji.genH5Title_("Default Color Settings")}
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
    ${ji.genH5Title_("Active Sensors")}
    <div class="row"></div>
    <div id="sat-fov-active-cones" class="col s12">
    </div>
  </div>`,this.sideMenuSettingsHtml=a.$.html`
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
  `}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("sat-fov-settings-form").addEventListener("change",this.handleFormChange.bind(this)),(0,o.gE)("sat-fov-settings-form").addEventListener("submit",this.handleFormChange.bind(this)),(0,o.gE)("sat-fov-settings-default-form").addEventListener("change",this.handleDefaultFormChange.bind(this)),(0,o.gE)("sat-fov-settings-default-form").addEventListener("submit",this.handleDefaultFormChange.bind(this))}}),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("reset-sat-fov-cones-button").addEventListener("click",(()=>{a.$.getScene().coneFactory.clear(),a.$.getSoundManager().play(h.A.TOGGLE_OFF),(0,o.gE)("reset-sat-fov-cones-button").setAttribute("disabled","true")}))}})}addJs(){super.addJs();const e=a.$.getInputManager().keyboard;e.registerKeyEvent({key:"C",callback:()=>{if(e.isShiftPressed){const e=a.$.getPlugin(g.A).getSelectedSat();if(e){const t=a.$.getScene().coneFactory,i=t.checkCacheForMesh_(e);i?(a.$.getSoundManager().play(h.A.TOGGLE_OFF),t.remove(i.id)):(a.$.getSoundManager().play(h.A.TOGGLE_ON),t.generateMesh(e))}}}}),a.$.register({event:l.kR.ConeMeshUpdate,cbName:ji.name,cb:()=>{this.updateListOfFovMeshes()}}),a.$.register({event:l.kR.selectSatData,cbName:ji.name,cb:e=>{this.updateListOfFovMeshes(),(null==e?void 0:e.isSatellite())?this.isSettingsMenuEnabled_=!0:this.isSettingsMenuEnabled_=!1}})}handleFormChange(){const e={fieldOfView:parseFloat((0,o.gE)("sat-fov-fov-angle").value),color:[parseFloat((0,o.gE)("sat-fov-red").value),parseFloat((0,o.gE)("sat-fov-green").value),parseFloat((0,o.gE)("sat-fov-blue").value),parseFloat((0,o.gE)("sat-fov-opacity").value)]},t=a.$.getPlugin(g.A).getSelectedSat(),i=a.$.getScene().coneFactory;if(t){const s=i.checkCacheForMesh_(t);s&&s.editSettings(e)}}handleDefaultFormChange(){const e=parseFloat((0,o.gE)("sat-fov-default-fov-angle").value),t=parseFloat((0,o.gE)("sat-fov-default-red").value),i=parseFloat((0,o.gE)("sat-fov-default-green").value),s=parseFloat((0,o.gE)("sat-fov-default-blue").value),n=parseFloat((0,o.gE)("sat-fov-default-opacity").value),r=a.$.getUiManager().toast.bind(a.$.getUiManager());if(isNaN(e)||e<=0||e>180)return r("Field of View must be a number between 0 and 180 degrees.",l.pc.critical),void((0,o.gE)("sat-fov-default-fov-angle").value="3");if(isNaN(t)||t<0||t>1)return r("Red color value must be a number between 0 and 1.",l.pc.critical),void((0,o.gE)("sat-fov-default-red").value="0.5");if(isNaN(i)||i<0||i>1)return r("Green color value must be a number between 0 and 1.",l.pc.critical),void((0,o.gE)("sat-fov-default-green").value="0.5");if(isNaN(s)||s<0||s>1)return r("Blue color value must be a number between 0 and 1.",l.pc.critical),void((0,o.gE)("sat-fov-default-blue").value="0.5");if(isNaN(n)||n<0||n>1)return r("Opacity value must be a number between 0 and 1.",l.pc.critical),void((0,o.gE)("sat-fov-default-opacity").value="0.15");const c={fieldOfView:e,color:[t,i,s,n]};a.$.getScene().coneFactory.editSettings(c)}updateListOfFovMeshes(){const e=a.$.getScene().coneFactory.meshes;0===e.length?(0,o.gE)("reset-sat-fov-cones-button").setAttribute("disabled","true"):(0,o.gE)("reset-sat-fov-cones-button").removeAttribute("disabled"),(0,o.gE)("sat-fov-active-cones").innerHTML=e.sort(((e,t)=>e.obj.id-t.obj.id)).map((e=>{const t=a.$.getPlugin(g.A).getSelectedSat();let i="";return i=t&&e.obj.id===t.id?a.$.html`<span style="color: var(--statusDarkStandby);">${e.obj.name}</span>`:a.$.html`<span>${e.obj.name}</span>`,a.$.html`
        <div class="link" style="
            display: flex;
            align-items: center;
        ">
            <div class="active-cone-sensor col s10 m10 l10" data-id="${e.obj.id.toString()}">
              ${i}
            </div>
            <div class="col s2 m2 l2 center-align remove-icon" style="display: flex; align-items: center; height: 100%;">
              <img class="remove-sensor" data-id="${e.obj.id.toString()}" src="${Hi}" style="cursor: pointer;"></img>
            </div>
        </div>
        `})).join("");const t=document.querySelectorAll(".remove-sensor"),i=document.querySelectorAll(".active-cone-sensor");t.forEach((e=>{e.addEventListener("click",(e=>{const t=parseInt(e.target.dataset.id,10);a.$.getScene().coneFactory.removeByObjectId(t),a.$.getSoundManager().play(h.A.TOGGLE_OFF)}))})),i.forEach((e=>{e.addEventListener("click",(e=>{let t=parseInt(e.target.dataset.id);t||(t=parseInt(e.target.parentElement.dataset.id)),t&&a.$.getPlugin(g.A).selectSat(t)}))}))}}var Vi=i(8616);const Ji=i.p+"../img/photoManager.png";class Xi extends u.s{constructor(){super(Xi.PLUGIN_NAME),this.discvrPhotos_=[],this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="Satellite Photos",this.bottomIconImg=Ji,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=a.$.html`
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
  </div>`,this.helpTitle="Satellite Photos Menu",this.helpBody=a.$.html`The Satellite Photos Menu is used for displaying live photos from select satellites.
  <br><br>
  Note - changes in the image API may cause the wrong satellite to be selected in KeepTrack.`}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("meteosat9-link").addEventListener("click",(()=>{Xi.loadPic(28912,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")})),(0,o.gE)("meteosat11-link").addEventListener("click",(()=>{Xi.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")})),(0,o.gE)("himawari8-link").addEventListener("click",(()=>{Xi.himawari8()})),(0,o.gE)("goes16-link").addEventListener("click",(()=>{Xi.loadPic(41866,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")})),(0,o.gE)("goes18-link").addEventListener("click",(()=>{Xi.loadPic(51850,"https://cdn.star.nesdis.noaa.gov/GOES18/ABI/FD/GEOCOLOR/latest.jpg")}))}}),a.$.register({event:l.kR.onKeepTrackReady,cbName:this.PLUGIN_NAME,cb:()=>{this.initDISCOVR_()}})}initDISCOVR_(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{if(e.status>=200&&e.status<400){JSON.parse(e.response).forEach((e=>{const t=e.image,i=e.identifier,s=i.slice(0,4),a=i.slice(4,6),n=i.slice(6,8),o=e.centroid_coordinates.lat,l=e.centroid_coordinates.lon;this.discvrPhotos_.push({imageUrl:`https://epic.gsfc.nasa.gov/archive/natural/${s}/${a}/${n}/png/${t}.png`,lat:o,lon:l})}));for(let e=1;e<this.discvrPhotos_.length+1;e++){const t=`<li id="discovr-link${e}" class="link satPhotoRow">DSCOVR Image ${e}</li>`;(0,o.gE)("sat-photo-menu-list").insertAdjacentHTML("beforeend",t),(0,o.gE)(`discovr-link${e}`).addEventListener("click",(()=>{Xi.loadPic(-1,this.discvrPhotos_[e-1].imageUrl),a.$.getMainCamera().camSnap((0,Vi.sk)(this.discvrPhotos_[e-1].lat),(0,Vi.fq)(this.discvrPhotos_[e-1].lon,a.$.getTimeManager().simulationTimeObj)),a.$.getMainCamera().changeZoom(.7)}))}}else{f.J.log("https://epic.gsfc.nasa.gov/ request failed!");const e='<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>';(0,o.gE)("sat-photo-menu-list").insertAdjacentHTML("beforeend",e)}},e.onerror=function(){f.J.log("https://epic.gsfc.nasa.gov/ request failed!"),(0,o.gE)("sat-photo-menu-list").insertAdjacentHTML("beforeend",'<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>')},e.send()}static loadPic(e,t){var i;a.$.getUiManager().searchManager.hideResults(),null===(i=a.$.getPlugin(g.A))||void 0===i||i.selectSat(a.$.getCatalogManager().sccNum2Id(e)),a.$.getMainCamera().changeZoom(.7),Xi.colorbox(t)}static himawari8(){var e;null===(e=a.$.getPlugin(g.A))||void 0===e||e.selectSat(a.$.getCatalogManager().sccNum2Id(40267)),a.$.getMainCamera().changeZoom(.7);let t=a.$.getTimeManager().simulationTimeObj;t.getTime()<Date.now()?t=new Date(t.getTime()-18e5):(a.$.getUiManager().toast("Can't load pictures from the future. Loading most recent photos.",l.pc.caution),t=new Date(Date.now()-18e5));const i=t.getUTCFullYear(),s=(t.getUTCMonth()+1).toString().padStart(2,"0"),n=t.getUTCDate().toString().padStart(2,"0"),o=t.getUTCHours().toString().padStart(2,"0"),r=(10*Math.floor(t.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3),(0,mi.r9)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${i}/${s}/${n}/${o}${r}00_0_0.png`,{image:!0})}}Xi.PLUGIN_NAME="Satellite Photos",Xi.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3),(0,mi.r9)(e,{image:!0})};const Yi=new Xi,Ki=i.p+"../img/video.png";class Wi{constructor(e,t,i,s){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=i,this.onError_=s}static handleError(e){e.message.includes("Permission denied")?f.J.warn('Permission denied! Did you click "Share"?'):f.J.warn(`Error:${e}`)}getStream(e){return t=this,i=void 0,a=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch((e=>(Wi.handleError(e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch((e=>(Wi.handleError(e),null))):(f.J.warn("Compatibility Error with Recording"),this.onError_(),!1):(f.J.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((s=void 0)||(s=Promise))((function(e,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(o,l)}r((a=a.apply(t,i||[])).next())}));var t,i,s,a}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(f.J.debug("Recorder stopped."),this.stream_.getTracks().forEach((e=>e.stop())),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,i=new Blob(this.recordedBlobs,{type:this.supportedType}),s=window.URL.createObjectURL(i),n=document.createElement("a");n.style.display="none",n.href=s,n.download=t,a.$.containerRoot.appendChild(n),n.click(),setTimeout((()=>{a.$.containerRoot.removeChild(n),window.URL.revokeObjectURL(s)}),100)}start(){this.getStream().then((e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;const t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(const e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&f.J.debug("No supported type found for MediaRecorder");const i={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||Wi.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,i)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}f.J.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${i}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),f.J.debug(`Created MediaRecorder ${this.mediaRecorder_}`)})).catch((()=>{}))}}Wi.BIT_RATE_30_MBPS=3e7,Wi.BIT_RATE_20_MBPS=2e7,Wi.BIT_RATE_10_MBPS=1e7,Wi.BIT_RATE_5_MBPS=5e6,Wi.BIT_RATE_2_MBPS=2e6,Wi.BIT_RATE_1_MBPS=1e6;class Zi extends u.s{constructor(){super("Screen Recorder"),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return f.J.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){f.J.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=Ki,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerOnReady,cbName:this.PLUGIN_NAME,cb:()=>{try{this.streamManagerInstance=new Wi(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save(Zi.FILE_NAME),this.setBottomIconToUnselected()}}Zi.FILE_NAME="keeptrack.webm";const qi=new Zi,Qi=i.p+"../img/camera.png";class es extends u.s{constructor(){super("Screenshot"),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=Qi,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.rmbL1ElementName="save-rmb",this.rmbL1Html=a.$.html`
    <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Save Image &#x27A4;</a></li>
  `,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.isRmbOnSat=!0,this.rmbL2ElementName="save-rmb-menu",this.rmbL2Html=a.$.html`
    <ul class='dropdown-contents'>
      <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
      <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
      <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
    </ul>
  `,this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),a.$.register({event:l.kR.altCanvasResize,cbName:this.PLUGIN_NAME,cb:()=>this.queuedScreenshot_}),a.$.register({event:l.kR.endOfDraw,cbName:this.PLUGIN_NAME,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){const e=document.createElement("a");e.download="keeptrack.png";const t=(new Date).getUTCFullYear(),i=settingsManager.copyrightOveride?"":`©${t} KEEPTRACK.SPACE`;e.href=es.watermarkedDataUrl(i),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=a.$.getRenderer().domElement,i=document.createElement("canvas"),s=i.getContext("2d"),n=i.width=t.width,o=i.height=t.height;s.drawImage(t,0,0),s.font="24px nasalization";let l=s.measureText(e).width;s.globalAlpha=1,s.fillStyle="white",s.fillText(e,n-l-30,o-30);const{classificationstr:r,classificationColor:c}=es.calculateClassificationText();""!==r&&(s.font="24px nasalization",s.globalAlpha=1,s.fillStyle=c,l=s.measureText(r).width,s.fillText(r,n/2-l,o-20),s.fillText(r,n/2-l,34)),a.$.containerRoot.appendChild(i);const d=i.toDataURL();return i.parentNode.removeChild(i),d}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:At.getColors(settingsManager.classificationStr).backgroundColor}}}const ts=new es;var is=i(3056),ss=i(7169),as=i(7096),ns=i(5189);const os=i.p+"../img/radar.png";var ls=i(1703),rs={};rs.styleTagTransform=Ut(),rs.setAttributes=Rt(),rs.insert=Nt().bind(null,"head"),rs.domAPI=kt(),rs.insertStyleElement=Ot(),Tt()(ls.A,rs),ls.A&&ls.A.locals&&ls.A.locals;class cs extends u.s{constructor(){super(cs.PLUGIN_NAME),this.dependencies=[Jt.l.PLUGIN_NAME],this.bottomIconCallback=()=>{var e;this.isMenuButtonActive&&((null===(e=a.$.getPlugin(ht))||void 0===e?void 0:e.isMenuButtonActive)?(0,as.t)("sensor-top-link").forEach((e=>{e.style.display="none"})):(0,as.t)("sensor-top-link").forEach((e=>{e.style.gridTemplateColumns="repeat(2,1fr)",e.style.display=""})))},this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.bottomIconElementName="sensor-list-icon",this.bottomIconLabel="Sensors",this.bottomIconImg=os,this.sideMenuElementName="sensor-list-menu",this.sideMenuElementHtml=a.$.html`
    <div id="sensor-list-menu" class="side-menu-parent start-hidden text-select">
        <div id="sensor-list-content" class="side-menu">
        <div class="row">
          <ul id="reset-sensor-text" class="sensor-reset-menu">
            <button id="reset-sensor-button" class="center-align btn btn-ui waves-effect waves-light menu-selectable" type="button">Reset Sensor &#9658;</button>
          </ul>
          <ul id="list-of-sensors">`+cs.ssnSensors_()+cs.mwSensors_()+cs.mdaSensors_()+cs.leoLabsSensors_()+cs.esocSensors_()+cs.russianSensors_()+cs.chineseSensors_()+cs.otherSensors_()+a.$.html`
          </ul>
        </div>
      </div>
    </div>`,this.isSensorLinksAdded=!1,this.helpTitle="Sensors Menu",this.helpBody=a.$.html`The Sensors menu allows you to select a sensor for use in calculations and other menu's functions.
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
  If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.`}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,o.gE)("nav-mobile"))||void 0===e||e.insertAdjacentHTML("beforeend",a.$.html`
          <div id="sensor-selected-container">
            <div id="sensor-selected" class="waves-effect waves-light">

            </div>
          </div>
          `)}}),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,o.gE)("sensor-selected-container"))||void 0===e||e.addEventListener("click",(()=>{var e;a.$.runEvent(l.kR.bottomMenuClick,this.bottomIconElementName),null===(e=a.$.getSoundManager())||void 0===e||e.play(h.A.CLICK)})),(0,o.gE)("sensor-list-content").addEventListener("click",(e=>{var t;let i=e.target;if(!(null==i?void 0:i.classList.contains("menu-selectable"))&&(i=null==i?void 0:i.closest(".menu-selectable"),!(null==i?void 0:i.classList.contains("menu-selectable"))))return;if("reset-sensor-button"===i.id)return a.$.getSensorManager().resetSensorSelected(),void a.$.getSoundManager().play(h.A.MENU_BUTTON);null===(t=a.$.getSoundManager())||void 0===t||t.play(h.A.CLICK);const s=i.dataset.sensor;this.sensorListContentClick(s)}))}}),a.$.register({event:l.kR.selectSatData,cbName:"sensor",cb:e=>{(null==e?void 0:e.isSatellite())?((0,o.FG)("sensors-in-fov-link"),null===a.$.getPlugin(Li.c)||this.isSensorLinksAdded||((0,o.gE)("sat-info-top-links").insertAdjacentHTML("beforeend",a.$.html`
                  <div id="sensors-in-fov-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                        data-tooltip="Visualize Sensor Coverage">Show All Sensors with FOV...</div>
                `),(0,o.gE)("sensors-in-fov-link").addEventListener("click",(()=>{a.$.getSoundManager().play(h.A.CLICK);const e=a.$.getPlugin(g.A);if(!e)return;const t=e.getSelectedSat();t.isSatellite()&&a.$.getLineManager().createSensorsToSatFovOnly(t)})),this.isSensorLinksAdded=!0)):(0,o.ys)("sensors-in-fov-link")}})}addJs(){super.addJs(),a.$.register({event:l.kR.sensorDotSelected,cbName:this.PLUGIN_NAME,cb:e=>{if(settingsManager.isMobileModeEnabled)return;if(!e.isSensor())return;const t=e,i=a.$.getSensorManager();if(i.setSensor(null,t.sensorId),0===i.currentSensors.length)throw new Error("No sensors found");const s=a.$.getTimeManager();a.$.getMainCamera().lookAtLatLon(i.currentSensors[0].lat,i.currentSensors[0].lon,i.currentSensors[0].zoom,s.selectedDate)}}),a.$.register({event:l.kR.onCruncherReady,cbName:this.PLUGIN_NAME,cb:()=>{!settingsManager.disableUI&&settingsManager.isLoadLastSensor&&cs.reloadLastSensor_()}}),a.$.getInputManager().keyboard.registerKeyUpEvent({key:"Home",callback:()=>{if(a.$.getSensorManager().currentSensors.length>0&&a.$.getMainCamera().cameraType===V.A.DEFAULT){const e=a.$.getSensorManager().currentSensors[0];a.$.getMainCamera().lookAtLatLon(e.lat,e.lon,e.zoom,a.$.getTimeManager().selectedDate),a.$.getSoundManager().play(h.A.WHOOSH)}}})}sensorListContentClick(e){if(!this.isMenuButtonActive)return;const t=a.$.getSensorManager();if(void 0!==e){switch(t.clearSecondarySensors(),e){case"ssnAll":t.setSensor("SSN");break;case"mwAll":t.setSensor("NATO-MW");break;case"mdAll":t.setSensor("MD-ALL");break;case"esocAll":t.setSensor("ESOC-ALL");break;case"llAll":t.setSensor("LEO-LABS");break;case"rusAll":t.setSensor("RUS-ALL");break;case"prcAll":t.setSensor("PRC-ALL");break;default:t.setSensor(ss.a[`${e}`])}if(-1===a.$.getPlugin(g.A).selectedSat)try{a.$.getMainCamera().lookAtLatLon(t.currentSensors[0].lat,t.currentSensors[0].lon,t.currentSensors[0].zoom,a.$.getTimeManager().selectedDate)}catch(e){f.J.warn(`Error in sensorListContentClick: ${e}`)}settingsManager.currentColorScheme==a.$.getColorSchemeManager().default&&dt.b.change("default")}else f.J.debug("The menu item was clicked but the menu was not defined.")}static createLiForSensor_(e){return a.$.html`
      <li class="menu-selectable" data-sensor="${e.objName}">
        <span>${e.uiName}</span>
        <span>${e.system}</span>
        <span class="badge dark-blue-badge" data-badge-caption="${e.operator}"></span>
      </li>
    `}static ssnSensors_(){return this.createSection_({header:"Space Surveillance Network Sensors",sensors:a.$.getSensorManager().sensorListSsn,topLinks:[{name:"All SSN Sensors",dataSensor:"ssnAll",badge:"COALITION"}]})}static mwSensors_(){return this.createSection_({header:"US Missile Warning Sensors",sensors:a.$.getSensorManager().sensorListMw,topLinks:[{name:"All MW Sensors",dataSensor:"mwAll",badge:"NORAD"}]})}static mdaSensors_(){return this.createSection_({header:"US Missile Defense Agency Sensors",sensors:a.$.getSensorManager().sensorListMda,topLinks:[{name:"All MDA Sensors",dataSensor:"mdAll",badge:"MDA"}]})}static createSection_(e){return a.$.html`
              ${this.genH5Title_(e.header)}
              ${e.topLinks.map((e=>a.$.html`<li class="menu-selectable sensor-top-link" data-sensor="${e.dataSensor}">
                <span>${e.name}</span>
                <span class="badge dark-blue-badge" data-badge-caption="${e.badge}"></span>
              </li>`)).join("")}
              ${e.sensors.map((e=>cs.createLiForSensor_(e))).join("")}
              `}static esocSensors_(){return this.createSection_({header:"ESA Space Operations Center Sensors",sensors:a.$.getSensorManager().sensorListEsoc,topLinks:[{name:"All ESOC Sensors",dataSensor:"esocAll",badge:"ESA"}]})}static leoLabsSensors_(){return this.createSection_({header:"Leo Labs Sensors",sensors:a.$.getSensorManager().sensorListLeoLabs,topLinks:[{name:"All Leo Labs Sensors",dataSensor:"llAll",badge:"LEOLABS"}]})}static otherSensors_(){return this.createSection_({header:"Other Sensors",sensors:a.$.getSensorManager().sensorListOther,topLinks:[]})}static russianSensors_(){return this.createSection_({header:"Russian Sensors",sensors:a.$.getSensorManager().sensorListRus,topLinks:[{name:"All Russian Sensors",dataSensor:"rusAll",badge:"RUS"}]})}static chineseSensors_(){return this.createSection_({header:"Chinese Sensors",sensors:a.$.getSensorManager().sensorListPrc,topLinks:[{name:"All Chinese Sensors",dataSensor:"prcAll",badge:"PRC"}]})}static reloadLastSensor_(){const e=ns.l.getInstance().getItem(ns.Z.CURRENT_SENSOR);if(!e)return;const t=JSON.parse(e);if(null!==t)try{const e=a.$.getSensorManager();void 0===t[0]||null==t[0]?(e.setSensor(null,t[1]),dt.b.change("default")):void 0===t[0].objName?(e.setSensor(t[0],t[1]),dt.b.change("default")):(e.setSensor(ss.a[t[0].objName],t[1]),dt.b.change("default"))}catch(e){ns.l.getInstance().removeItem(ns.Z.CURRENT_SENSOR)}}}cs.PLUGIN_NAME="Sensor List";var ds=i(1112);const us=e=>{const t=new CustomEvent("customSubmit",{cancelable:!0});e.dispatchEvent(t)};var gs=i(1332);class hs{static updateSensorPosition(e){var t;const i=a.$.getTimeManager(),s=a.$.getCatalogManager(),n=a.$.getSensorManager(),{lon:o,lat:l,alt:r,minaz:c,maxaz:d,minel:u,maxel:h,minrange:m,maxrange:p}=hs.updateSettingsManager(e);n.whichRadar="CUSTOM",hs.updateCustomSensorUi_();const v={lat:l,lon:o,alt:r,minAz:c,maxAz:d,minEl:u,maxEl:h,minRng:m,maxRng:p};s.satCruncher.postMessage({typ:_t.XY.SENSOR,sensor:v}),gs.g.updateSensorUiStyling([v]),null===(t=a.$.getPlugin(g.A))||void 0===t||t.selectSat(-1);const b=a.$.getMainCamera();p>6e3?b.changeZoom(M.N$.GEO):b.changeZoom(M.N$.LEO),b.camSnap((0,Vi.sk)(l),(0,Vi.fq)(o,i.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(hs.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,o.gE)("cs-lat"),t=(0,o.gE)("cs-lon"),i=(0,o.gE)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),i.value=settingsManager.geolocation.alt.toString(),i.dispatchEvent(new Event("change")),(0,o.gE)("cs-telescope").checked=!0,(0,o.gE)("cs-minaz").disabled=!0,(0,o.gE)("cs-maxaz").disabled=!0,(0,o.gE)("cs-minel").disabled=!0,(0,o.gE)("cs-maxel").disabled=!0,(0,o.gE)("cs-minrange").disabled=!0,(0,o.gE)("cs-maxrange").disabled=!0,(0,o.gE)("cs-minaz-div").style.display="none",(0,o.gE)("cs-maxaz-div").style.display="none",(0,o.gE)("cs-minel-div").style.display="none",(0,o.gE)("cs-maxel-div").style.display="none",(0,o.gE)("cs-minrange-div").style.display="none",(0,o.gE)("cs-maxrange-div").style.display="none",(0,o.gE)("cs-minaz").value="0",(0,o.gE)("cs-maxaz").value="360",(0,o.gE)("cs-minel").value="10",(0,o.gE)("cs-maxel").value="90",(0,o.gE)("cs-minrange").value="100",(0,o.gE)("cs-maxrange").value="50000",(0,o.gE)("sensor-type").innerHTML="Telescope",(0,o.gE)("sensor-info-title").innerHTML="Custom Sensor",(0,o.gE)("sensor-country").innerHTML="Custom Sensor"}catch(e){f.J.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const ms=i.p+"../img/custom.png";class ps extends u.s{constructor(){super(ps.name),this.bottomIconCallback=()=>{if(this.isMenuButtonActive){const e=a.$.getSensorManager();e.isSensorSelected()?((0,o.gE)("cs-replace").style.display="",(0,o.gE)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,o.gE)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,o.gE)("cs-hei").value=e.currentSensors[0].alt.toString()):(0,o.gE)("cs-replace").style.display="none"}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=ms,this.sideMenuElementName="custom-sensor-menu",this.sideMenuTitle="Custom Sensor",this.sideMenuElementHtml=a.$.html`
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
    </div>`,this.sideMenuSettingsHtml=a.$.html`
    <div class="row" style="margin: 0 10px;">
      <div id="custom-sensors-sensor-list">
      </div>
    </div>`,this.sideMenuSettingsOptions={width:450,leftOffset:null,zIndex:3},this.rmbL1ElementName="create-rmb",this.rmbL1Html=a.$.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Create &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbMenuOrder=10,this.rmbL2ElementName="create-rmb-menu",this.rmbL2Html=a.$.html`
  <ul class='dropdown-contents'>
    <li id="create-observer-rmb"><a href="#">Create Observer Here</a></li>
    <li id="create-sensor-rmb"><a href="#">Create Sensor Here</a></li>
  </ul>`,this.rmbCallback=e=>{const t=a.$.getSensorManager(),i=a.$.getColorSchemeManager(),s=a.$.getUiManager(),n=a.$.getCatalogManager(),l=a.$.getInputManager().mouse;switch(e){case"create-observer-rmb":(0,y.xA)((0,o.gE)("custom-sensor-menu"),1e3),(0,o.gE)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,o.gE)("cs-telescope").checked||(0,o.gE)("cs-telescope").click(),(0,o.gE)("cs-uiName").value="Observer",(0,o.gE)("cs-lat").value=l.latLon.lat.toString(),(0,o.gE)("cs-lon").value=l.latLon.lon.toString(),(0,o.gE)("cs-hei").value="0",(0,o.gE)("cs-type").value="Observer",us((0,o.gE)("customSensor")),n.satCruncher.postMessage({isSunlightView:!0,typ:_t.XY.SUNLIGHT_VIEW}),dt.b.change("sunlight"),s.colorSchemeChangeAlert(i.sunlight),(0,Ht.p)({cruncher:n.satCruncher,cb:()=>{i.setColorScheme(i.sunlight,!0)},validationFunc:e=>e.satInSun});break;case"create-sensor-rmb":(0,y.xA)((0,o.gE)("custom-sensor-menu"),1e3),(0,o.gE)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,o.gE)("cs-telescope").checked&&(0,o.gE)("cs-telescope").click(),(0,o.gE)("cs-uiName").value="Custom Sensor",(0,o.gE)("cs-lat").value=l.latLon.lat.toString(),(0,o.gE)("cs-lon").value=l.latLon.lon.toString(),(0,o.gE)("cs-hei").value="0",(0,o.gE)("cs-type").value="Phased Array Radar",(0,o.gE)("cs-minaz").value="0",(0,o.gE)("cs-maxaz").value="360",(0,o.gE)("cs-minel").value="10",(0,o.gE)("cs-maxel").value="90",(0,o.gE)("cs-minrange").value="0",(0,o.gE)("cs-maxrange").value="5556",us((0,o.gE)("customSensor")),dt.b.change("default"),i.setColorScheme(i.default,!0),s.colorSchemeChangeAlert(i.currentColorScheme),n.satCruncher.postMessage({isSunlightView:!1,typ:_t.XY.SUNLIGHT_VIEW});break;case"colors-confidence-rmb":case"colors-rcs-rmb":case"colors-density-rmb":case"colors-starlink-rmb":case"colors-sunlight-rmb":case"colors-country-rmb":case"colors-velocity-rmb":case"colors-ageOfElset-rmb":case"colors-default-rmb":break;default:f.J.info(`Unknown RMB target: ${e}`)}},this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=a.$.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{ps.httpsCheck_(),ps.addCustomSensorFormSubmitListener(),ps.addTelescopeClickListener_(),ps.addCustomSensorBtnCLickListener_(),ps.addClearCustomSensorListener_()}})}static httpsCheck_(){"https:"!==location.protocol?(0,o.ys)("cs-geolocation"):ps.addUseGeolocationListener_()}static addCustomSensorFormSubmitListener(){(0,o.gE)("customSensor").addEventListener("submit",(e=>{e.preventDefault()}))}static addUseGeolocationListener_(){var e;(0,o.gE)("cs-geolocation").addEventListener("click",hs.useCurrentGeolocationAsSensor),null===(e=a.$.getSoundManager())||void 0===e||e.play(h.A.CLICK)}static addClearCustomSensorListener_(){(0,o.gE)("cs-clear").addEventListener("click",(()=>{var e;a.$.getSensorManager().clearSecondarySensors(),null===(e=a.$.getSoundManager())||void 0===e||e.play(h.A.CLICK),ps.updateCustomSensorListDom()}))}static addCustomSensorBtnCLickListener_(){(0,o.gE)("cs-submit").addEventListener("click",(()=>{var e;ps.processCustomSensorSubmit_(),null===(e=a.$.getSoundManager())||void 0===e||e.play(h.A.CLICK)})),(0,o.gE)("cs-replace").addEventListener("click",(()=>{var e;ps.processCustomSensorSubmit_(!0),null===(e=a.$.getSoundManager())||void 0===e||e.play(h.A.CLICK)}))}static processCustomSensorSubmit_(e=!1){var t,i,s,n,l;null===(t=(0,o.gE)("menu-sensor-info"))||void 0===t||t.classList.remove("bmenu-item-disabled"),null===(i=(0,o.gE)("menu-fov-bubble"))||void 0===i||i.classList.remove("bmenu-item-disabled"),null===(s=(0,o.gE)("menu-surveillance"))||void 0===s||s.classList.remove("bmenu-item-disabled"),null===(n=(0,o.gE)("menu-planetarium"))||void 0===n||n.classList.remove("bmenu-item-disabled"),null===(l=(0,o.gE)("menu-astronomy"))||void 0===l||l.classList.remove("bmenu-item-disabled"),(0,o.gE)("sensor-type").value=(0,o.gE)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,o.gE)("sensor-info-title").innerHTML="Custom Sensor",(0,o.gE)("sensor-country").innerHTML="Custom Sensor";const r=(0,o.gE)("cs-uiName").value,c=ps.str2Deg((0,o.gE)("cs-lon").value),d=ps.str2Deg((0,o.gE)("cs-lat").value),u=(0,o.gE)("cs-hei").value,g=(0,o.gE)("cs-type").value,h=(0,o.gE)("cs-minaz").value,m=(0,o.gE)("cs-maxaz").value,p=(0,o.gE)("cs-minel").value,v=(0,o.gE)("cs-maxel").value,b=(0,o.gE)("cs-minrange").value,S=(0,o.gE)("cs-maxrange").value;let E=M._V.OBSERVER;switch(g){case"Observer":E=M._V.OBSERVER;break;case"Optical":E=M._V.OPTICAL;break;case"Mechanical":E=M._V.MECHANICAL;break;case"Phased Array Radar":E=M._V.PHASED_ARRAY_RADAR;break;default:f.J.info(`Unknown sensor type: ${g}`),E=M._V.OBSERVER}const _=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);a.$.getSensorManager().addSecondarySensor(new M.tn({id:null,lat:d,lon:c,alt:ps.str2Km(u),minAz:ps.str2Deg(h),maxAz:ps.str2Deg(m),minEl:ps.str2Deg(p),maxEl:ps.str2Deg(v),minRng:ps.str2Km(b),maxRng:ps.str2Km(S),type:E,name:"Custom Sensor",uiName:r,system:"Custom Sensor",country:"Custom Sensor",objName:`Custom Sensor-${_}`,operator:"Custom Sensor",zoom:ps.str2Km(S)>6e3?M.N$.GEO:M.N$.LEO,volume:!1}),e),ps.updateCustomSensorListDom()}static updateCustomSensorListDom(){var e;const t=((null===(e=a.$.getSensorManager().currentSensors[0])||void 0===e?void 0:e.objName.startsWith("Custom Sensor"))?[a.$.getSensorManager().currentSensors[0]]:[]).concat(a.$.getSensorManager().secondarySensors);(0,o.gE)("custom-sensors-sensor-list").innerHTML=t.map((e=>`\n      <div class="row" style="height: 100%; display: flex; align-items: center; margin: 20px 0px;">\n        <div class="col s10 m10 l10">\n          <div><strong>Sensor Name:</strong> ${e.uiName}</div>\n          <div><strong>Latitude:</strong> ${e.lat.toFixed(0)}°</div>\n          <div><strong>Longitude:</strong> ${e.lon.toFixed(0)}°</div>\n          <div><strong>Elevation:</strong> ${e.alt.toFixed(0)} km</div>\n          <div><strong>Azimuth:</strong> ${e.minAz.toFixed(0)}° - ${e.maxAz.toFixed(0)}°</div>\n          <div><strong>Elevation:</strong> ${e.minEl.toFixed(0)}° - ${e.maxEl.toFixed(0)}°</div>\n          <div><strong>Range:</strong> ${e.minRng.toFixed(0)} km - ${e.maxRng.toFixed(0)} km</div>\n        </div>\n        <div class="col s2 m2 l2 center-align remove-icon" style="display: flex; align-items: center; height: 100%;">\n          <img class="remove-sensor" data-id="${e.objName}" src="${Hi}" style="cursor: pointer;"></img>\n        </div>\n      </div>\n      <div class="divider"></div>\n      `)).join(""),document.querySelectorAll(".remove-sensor").forEach((e=>{e.addEventListener("click",(e=>{var t;e.preventDefault(),null===(t=a.$.getSoundManager())||void 0===t||t.play(h.A.CLICK);const i=e.target.dataset.id,s=a.$.getSensorManager().getSensorByObjName(i);a.$.getSensorManager().removeSensor(s),ps.updateCustomSensorListDom()}))}))}static addTelescopeClickListener_(){(0,o.gE)("cs-telescope").addEventListener("click",(()=>{if((0,o.gE)("cs-telescope").checked)(0,o.gE)("cs-minaz-div").style.display="none",(0,o.gE)("cs-maxaz-div").style.display="none",(0,o.gE)("cs-minel-div").style.display="none",(0,o.gE)("cs-maxel-div").style.display="none",(0,o.gE)("cs-minrange-div").style.display="none",(0,o.gE)("cs-maxrange-div").style.display="none",(0,o.gE)("cs-minaz").value="0",(0,o.gE)("cs-maxaz").value="360",(0,o.gE)("cs-minel").value="10",(0,o.gE)("cs-maxel").value="90",(0,o.gE)("cs-minrange").value="100",(0,o.gE)("cs-maxrange").value="1000000";else{(0,o.gE)("cs-minaz-div").style.display="block",(0,o.gE)("cs-maxaz-div").style.display="block",(0,o.gE)("cs-minel-div").style.display="block",(0,o.gE)("cs-maxel-div").style.display="block",(0,o.gE)("cs-minrange-div").style.display="block",(0,o.gE)("cs-maxrange-div").style.display="block";const e=a.$.getSensorManager();e.isSensorSelected()&&((0,o.gE)("cs-minaz").value=e.currentSensors[0].minAz.toString(),(0,o.gE)("cs-maxaz").value=e.currentSensors[0].maxAz.toString(),(0,o.gE)("cs-minel").value=e.currentSensors[0].minEl.toString(),(0,o.gE)("cs-maxel").value=e.currentSensors[0].maxEl.toString(),(0,o.gE)("cs-minrange").value=e.currentSensors[0].minRng.toString(),(0,o.gE)("cs-maxrange").value=e.currentSensors[0].maxRng.toString())}}))}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}var vs=i(5299);const bs=i.p+"../img/lookangles.png";class fs extends u.s{constructor(){super(fs.name),this.dependencies=[g.A.PLUGIN_NAME],this.isRiseSetOnly_=!0,this.angleCalculationInterval_=30,this.lengthOfLookAngles_=2,this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconElementName="look-angles-icon",this.bottomIconLabel="Look Angles",this.bottomIconImg=bs,this.bottomIconCallback=()=>{this.refreshSideMenuData_()},this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:400,maxWidth:600},this.helpTitle="Look Angles Menu",this.helpBody=a.$.html`
    The Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a sensor and a satellite.
    A satellite and sensor must first be selected before the menu can be used.
    <br><br>
    The toggle only rise and set times will only calculate the rise and set times of the satellite.
    This is useful for quickly determining when a satellite will be visible to a sensor.
    <br><br>
    The search range can be modified by changing the length and interval options.`,this.sideMenuElementName="look-angles-menu",this.sideMenuTitle="Sensor Look Angles",this.sideMenuElementHtml=a.$.html`
    <div class="row"></div>
    <div class="row">
      <table id="looks" class="center-align striped-light centered"></table>
    </div>`,this.sideMenuSettingsHtml=a.$.html`
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
    </div>`,this.downloadIconCb=()=>{var e,t;const i=a.$.getSensorManager().getSensor(),s=this.lastlooksArray_.map((e=>({Time:(0,oi.i)(e.time,"isoDateTime",!1),Type:fs.tearrTypeToString_(e.type),Azimuth:e.az.toFixed(1),Elevation:e.el.toFixed(1),Range:e.rng.toFixed(0),Sensor:i.system?`${i.system} (${i.name})`:i.name})));(0,st.g3)(s,`${null!==(t=null!==(e=i.shortName)&&void 0!==e?e:i.objName)&&void 0!==t?t:"unk"}-${this.selectSatManager_.getSelectedSat().sccNum6}-look-angles`)},this.sideMenuSettingsOptions={width:300,zIndex:3},this.refreshSideMenuData_=()=>{this.isMenuButtonActive&&(0,b.Cs)((()=>{const e=this.selectSatManager_.getSelectedSat(l.Z.EXTRA_ONLY);e.isSatellite()&&this.getlookangles_(e)}))},this.selectSatManager_=a.$.getPlugin(g.A)}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("look-angles-length").addEventListener("change",(()=>{this.lengthOfLookAngles_=parseFloat((0,o.gE)("look-angles-length").value),this.refreshSideMenuData_()})),(0,o.gE)("look-angles-interval").addEventListener("change",(()=>{this.angleCalculationInterval_=parseInt((0,o.gE)("look-angles-interval").value),this.refreshSideMenuData_()})),(0,o.gE)("settings-riseset").addEventListener("change",this.settingsRisesetChange_.bind(this));const e=this.selectSatManager_.getSelectedSat();this.checkIfCanBeEnabled_(e)}}),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}}),a.$.register({event:l.kR.resetSensor,cbName:this.PLUGIN_NAME,cb:()=>{this.checkIfCanBeEnabled_(null)}})}addJs(){super.addJs(),a.$.register({event:l.kR.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData_()}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&a.$.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.getlookangles_(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}getlookangles_(e,t){const i=a.$.getTimeManager();if(!t){const e=a.$.getSensorManager();if(!e.isSensorSelected())return console.debug("satellite.getlookangles requires a sensor to be set!"),[];t=e.currentSensors}const s=this.isRiseSetOnly_?1:this.angleCalculationInterval_,n=[];let o=0,l=!1;for(let a=0;a<24*this.lengthOfLookAngles_*60*60;a+=s){o=1e3*a;const s=i.getOffsetTimeObj(o),r=vs.z.getTearData(s,e.satrec,t,this.isRiseSetOnly_,l);if(""!==r.time)switch(r.type){case vs.Z.RISE:case vs.Z.SET:l=!1,n.push(r);break;case vs.Z.MAX_EL:l=!0,n.push(r);break;case vs.Z.RISE_AND_MAX_EL:l=!0,n.push(Object.assign(Object.assign({},r),{type:vs.Z.RISE})),n.push(Object.assign(Object.assign({},r),{type:vs.Z.MAX_EL}));break;case vs.Z.MAX_EL_AND_SET:l=!1,n.push(Object.assign(Object.assign({},r),{type:vs.Z.MAX_EL})),n.push(Object.assign(Object.assign({},r),{type:vs.Z.SET}));break;default:n.push(r)}if(n.length>=1500)break}return n.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),this.lastlooksArray_=n,fs.populateSideMenuTable_(n,i),n}static populateSideMenuTable_(e,t){const i=(0,o.gE)("looks");i.innerHTML="";const s=i.insertRow(),a=s.insertCell();a.appendChild(document.createTextNode("Time")),a.setAttribute("style","text-decoration: underline");let n=null;e.length>0&&void 0!==e[0].type&&(n=s.insertCell(),n.appendChild(document.createTextNode("Type")),n.setAttribute("style","text-decoration: underline"));const l=s.insertCell();l.appendChild(document.createTextNode("El")),l.setAttribute("style","text-decoration: underline");const r=s.insertCell();r.appendChild(document.createTextNode("Az")),r.setAttribute("style","text-decoration: underline");const c=s.insertCell();c.appendChild(document.createTextNode("Rng")),c.setAttribute("style","text-decoration: underline");for(const s of e)fs.populateSideMenuRow_(i,a,s,t,l,r,c,n)}static populateSideMenuRow_(e,t,i,s,n,o,r,c){if(e.rows.length>0){const n=e.insertRow();n.setAttribute("class","link"),(t=n.insertCell()).appendChild(document.createTextNode((0,oi.i)(i.time,"isoDateTime",!1))),t.addEventListener("click",(()=>{s.changeStaticOffset(new Date(`${(0,oi.i)(i.time,"isoDateTime",!1)}z`).getTime()-s.realTime),s.calculateSimulationTime(),a.$.runEvent(l.kR.updateDateTime,new Date(s.dynamicOffsetEpoch+s.staticOffset))})),c&&(c=n.insertCell()).appendChild(document.createTextNode(this.tearrTypeToString_(i.type))),n.insertCell().appendChild(document.createTextNode(i.el.toFixed(1))),n.insertCell().appendChild(document.createTextNode(i.az.toFixed(0))),n.insertCell().appendChild(document.createTextNode(i.rng.toFixed(0)))}}static tearrTypeToString_(e){switch(e){case vs.Z.RISE:return"Rise";case vs.Z.SET:return"Set";case vs.Z.MAX_EL:return"Max El";default:return"Unknown"}}settingsRisesetChange_(e,t){if(null==e)throw new Error("e is undefined");null!=t||(t=(0,o.gE)("settings-riseset").checked),this.isRiseSetOnly_=!!t,this.refreshSideMenuData_()}}const Ss=i.p+"../img/multi-site.png";class Es extends u.s{constructor(){super(Es.name),this.dependencies=[g.A.name],this.sensorList_=a.$.getSensorManager().sensorListSsn.concat(a.$.getSensorManager().sensorListMw,a.$.getSensorManager().sensorListMda,a.$.getSensorManager().sensorListLeoLabs,a.$.getSensorManager().sensorListEsoc,a.$.getSensorManager().sensorListRus,a.$.getSensorManager().sensorListPrc,a.$.getSensorManager().sensorListOther),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!1,this.lengthOfLookAngles_=1,this.angleCalculationInterval_=30,this.disabledSensors_=this.sensorList_.filter((e=>!a.$.getSensorManager().sensorListMw.includes(e))),this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)},this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=Ss,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:750},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=a.$.html`
    The Multi-Site Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a satellite and multiple sensors.
    A satellite must first be selected before the menu can be used.
    <br><br>
    By default the menu will calculate the look angles for all sensors in the Space Surveillance Netowrk.
    If you would like to calculate the look angles for additional sensors, you can export a csv file at the bottom of the menu.
    The csv file will contain look angles for all sensors.
    <br><br>
    Clicking on a row in the table will select the sensor and change the simulation time to the time of the look angle.`,this.sideMenuElementName="multi-site-look-angles-menu",this.sideMenuTitle="Multi-Sensor Look Angles",this.sideMenuElementHtml=a.$.html`
    <div class="row"></div>
    <div class="row">
      <table id="multi-site-look-angles-table" class="center-align striped-light centered"></table>
    </div>`,this.sideMenuSettingsHtml=a.$.html`
    <div class="row" style="margin: 0 10px;">
      <div id="multi-site-look-angles-sensor-list">
      </div>
    </div>`,this.sideMenuSettingsWidth=350,this.downloadIconCb=()=>{a.$.getSoundManager().play(h.A.EXPORT);const e=a.$.getSensorManager().lastMultiSiteArray.map((e=>({time:e.time,sensor:e.objName,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)})));(0,st.g3)(e,`multisite-${this.selectSatManager_.getSelectedSat().sccNum6}-look-angles`)},this.sideMenuSettingsOptions={width:300,leftOffset:null,zIndex:3},this.selectSatManager_=a.$.getPlugin(g.A),this.sensorList_=this.sensorList_.filter(((e,t,i)=>t===i.findIndex((t=>t.uiName===e.uiName))))}addHtml(){super.addHtml(),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&a.$.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.refreshSideMenuData(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}addJs(){super.addJs(),a.$.register({event:l.kR.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)}})}refreshSideMenuData(e){this.isMenuButtonActive&&e&&(0,b.Cs)((()=>{var t,i;const s=(0,o.gE)("multi-site-look-angles-sensor-list");if(!s)return void f.J.warn("Could not find sensor list dom");s.innerHTML="";const n=[];for(const o of this.sensorList_){if(!o.objName)continue;const l=document.createElement("button");l.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors_.includes(o)&&l.classList.add("btn-red"),n.push(o),l.innerText=null!==(i=null!==(t=o.uiName)&&void 0!==t?t:o.shortName)&&void 0!==i?i:o.objName,l.addEventListener("click",(()=>{l.classList.contains("btn-red")?(l.classList.remove("btn-red"),this.disabledSensors_.splice(this.disabledSensors_.indexOf(o),1),a.$.getSoundManager().play(h.A.TOGGLE_ON)):(l.classList.add("btn-red"),this.disabledSensors_.push(o),a.$.getSoundManager().play(h.A.TOGGLE_OFF)),this.getlookanglesMultiSite_(e,n.filter((e=>!this.disabledSensors_.includes(e))))})),s.appendChild(l),s.appendChild(document.createTextNode(" "))}this.getlookanglesMultiSite_(e,n.filter((e=>!this.disabledSensors_.includes(e))))}))}getlookanglesMultiSite_(e,t){const i=a.$.getTimeManager(),s=a.$.getSensorManager(),n=a.$.getCatalogManager().staticSet;if(!t){t=[];for(const e in n){const i=n[e];t.push(i)}}const o=!s.isSensorSelected(),l=[...s.currentSensors],r=M.hJ/(e.satrec.no*M.hJ/M.DD),c=[];for(const s of t){if(s.maxRng<e.perigee&&(!s.maxRng2||s.maxRng2<e.perigee))continue;gs.g.updateSensorUiStyling([s]);let t=0;for(let a=0;a<24*this.lengthOfLookAngles_*60*60;a+=this.angleCalculationInterval_){t=1e3*a;const n=i.getOffsetTimeObj(t),o=Es.propagateMultiSite_(n,e.satrec,s);""!==o.time&&(c.push(o),a+=60*r*.75)}}c.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),s.lastMultiSiteArray=c,o?s.setCurrentSensor(null):s.setCurrentSensor(l),Es.populateMultiSiteTable_(c)}static propagateMultiSite_(e,t,i){const s=it.h.getRae(e,t,i);return it.h.checkIsInView(i,s)?{time:e.toISOString(),el:s.el,az:s.az,rng:s.rng,objName:i.objName}:{time:"",el:0,az:0,rng:0,objName:""}}static populateMultiSiteTable_(e){var t,i,s;const n=a.$.getSensorManager(),l=a.$.getCatalogManager().staticSet,r=(0,o.gE)("multi-site-look-angles-table");r.innerHTML="";let c=r.insertRow(),d=c.insertCell();d.appendChild(document.createTextNode("Time")),d.setAttribute("style","text-decoration: underline");let u=c.insertCell();u.appendChild(document.createTextNode("El")),u.setAttribute("style","text-decoration: underline");let g=c.insertCell();g.appendChild(document.createTextNode("Az")),g.setAttribute("style","text-decoration: underline");let h=c.insertCell();h.appendChild(document.createTextNode("Rng")),h.setAttribute("style","text-decoration: underline");let m=c.insertCell();m.appendChild(document.createTextNode("Sensor")),m.setAttribute("style","text-decoration: underline");const p=a.$.getTimeManager();for(const a of e){const e=l.find((e=>e.objName===a.objName));e&&(c=r.insertRow(),c.setAttribute("class","link"),d=c.insertCell(),d.appendChild(document.createTextNode((0,oi.i)(a.time,"isoDateTime",!0))),u=c.insertCell(),u.appendChild(document.createTextNode(a.el.toFixed(1))),g=c.insertCell(),g.appendChild(document.createTextNode(a.az.toFixed(0))),h=c.insertCell(),h.appendChild(document.createTextNode(a.rng.toFixed(0))),m=c.insertCell(),m.appendChild(document.createTextNode(null!==(s=null!==(i=null!==(t=e.uiName)&&void 0!==t?t:e.shortName)&&void 0!==i?i:e.objName)&&void 0!==s?s:"")),c.addEventListener("click",(()=>{p.changeStaticOffset(new Date(a.time).getTime()-(new Date).getTime()),n.setSensor(e,e.sensorId)})))}}}var Ms=i(8117),_s=i(3616);const ys=i.p+"../img/radio-tower.png";class As extends u.s{constructor(){super(As.PLUGIN_NAME),this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.getSensorInfo(),this.checkIfLinesVisible_(a.$.getLineManager())},this.bottomIconElementName="sensor-info-icon",this.bottomIconLabel="Sensor Info",this.bottomIconImg=ys,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="sensor-info-menu",this.sideMenuElementHtml=a.$.html`
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
    </div>`,this.dragOptions={isDraggable:!0},this.isSunLineVisible_=!1,this.isMonnLineVisible_=!1,this.helpTitle="Sensor Info",this.helpBody=a.$.html`
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
    Additionally, lines can be quickly created from the sensor to the sun or moon from this menu.`}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.addSensorToSunBtnListener_(),this.addSensorToMoonBtnListener()}}),a.$.register({event:l.kR.onLineAdded,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfLinesVisible_(e)}})}checkIfLinesVisible_(e){this.isSunLineVisible_=e.lines.some((e=>e instanceof _s.E)),this.isSunLineVisible_?((0,o.gE)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0):((0,o.gE)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1),this.isMonnLineVisible_=e.lines.some((e=>e instanceof Ms.N)),this.isMonnLineVisible_?((0,o.gE)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0):((0,o.gE)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1)}addSensorToMoonBtnListener(){(0,o.gE)("sensor-moon-btn").addEventListener("click",(()=>{if(this.isMonnLineVisible_){const e=a.$.getLineManager();for(const t of e.lines)if(t instanceof Ms.N)return t.isGarbage=!0,(0,o.gE)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1,void a.$.getSoundManager().play(h.A.TOGGLE_OFF)}else 1!==a.$.getSensorManager().currentSensors.length&&a.$.getUiManager().toast("Please Select Only One Sensor",l.pc.caution),a.$.getLineManager().createSensorToMoon(a.$.getSensorManager().currentSensors[0]),(0,o.gE)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0,a.$.getSoundManager().play(h.A.TOGGLE_ON)}))}addSensorToSunBtnListener_(){(0,o.gE)("sensor-sun-btn").addEventListener("click",(()=>{if(this.isSunLineVisible_){const e=a.$.getLineManager();for(const t of e.lines)if(t instanceof _s.E)return t.isGarbage=!0,(0,o.gE)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1,void a.$.getSoundManager().play(h.A.TOGGLE_OFF)}else 1!==a.$.getSensorManager().currentSensors.length&&a.$.getUiManager().toast("Please Select Only One Sensor",l.pc.caution),a.$.getLineManager().createSensorToSun(a.$.getSensorManager().currentSensors[0]),(0,o.gE)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0,a.$.getSoundManager().play(h.A.TOGGLE_ON)}))}getSensorInfo(){if(!this.isHtmlAdded)return;const e=a.$.getSensorManager().currentSensors[0];(0,o.gE)("sensor-latitude").innerHTML=e.lat>0?`${e.lat.toFixed(2)}° N`:`${Math.abs(e.lat).toFixed(2)}° S`,(0,o.gE)("sensor-longitude").innerHTML=e.lon>0?`${e.lon.toFixed(2)}° E`:`${Math.abs(e.lon).toFixed(2)}° W`,(0,o.gE)("sensor-minazimuth").innerHTML=`${e.minAz.toFixed(1).toString()}°`,(0,o.gE)("sensor-maxazimuth").innerHTML=`${e.maxAz.toFixed(1).toString()}°`,(0,o.gE)("sensor-minelevation").innerHTML=`${e.minEl.toFixed(1).toString()}°`,(0,o.gE)("sensor-maxelevation").innerHTML=`${e.maxEl.toFixed(1).toString()}°`,(0,o.gE)("sensor-minrange").innerHTML=`${e.minRng.toFixed(1).toString()} km`,(0,o.gE)("sensor-maxrange").innerHTML=`${e.maxRng.toFixed(1).toString()} km`,e.type===M._V.OPTICAL||e.type===M._V.OBSERVER?((0,o.ys)((0,o.gE)("sensor-band").parentElement),(0,o.ys)((0,o.gE)("sensor-beamwidth").parentElement)):((0,o.FG)((0,o.gE)("sensor-band").parentElement),(0,o.gE)("sensor-band").innerHTML=e.freqBand?e.freqBand:"Unknown",e instanceof M.x9?((0,o.FG)((0,o.gE)("sensor-beamwidth").parentElement),(0,o.gE)("sensor-beamwidth").innerHTML=e.beamwidth?`${e.beamwidth.toFixed(1).toString()}°`:"Unknown"):(0,o.ys)((0,o.gE)("sensor-beamwidth").parentElement))}}As.PLUGIN_NAME="Sensor Info";var xs=i(9996);const Ls=i.p+"../img/search.png";class ws extends u.s{constructor(){super(ws.PLUGIN_NAME),this.dependencies=[Li.c.PLUGIN_NAME,g.A.PLUGIN_NAME],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=Ls,this.isRequireSensorSelected=!0,this.isAddStfLinksOnce=!1,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=a.$.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
  <br><br>
  This is unlikely to be very helpful unless you own/operate a sensor with a search box functionality.`,this.sideMenuElementName="stf-menu",this.sideMenuElementHtml=a.$.html`
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
  </div>`,this.selectSatManager_=a.$.getPlugin(g.A)}addHtml(){super.addHtml(),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())?((0,o.FG)("stf-on-object-link"),a.$.getPlugin(Li.c)&&!this.isAddStfLinksOnce&&((0,o.gE)("sat-info-top-links").insertAdjacentHTML("beforeend",a.$.html`
            <div id="stf-on-object-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,o.gE)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0)):(0,o.ys)("stf-on-object-link")}})}addJs(){super.addJs(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("stfForm").addEventListener("submit",(e=>{e.preventDefault(),a.$.getSoundManager().play(h.A.MENU_BUTTON),this.onSubmit.bind(this)()})),(0,o.gE)("stf-remove-last").addEventListener("click",(()=>{a.$.getSoundManager().play(h.A.MENU_BUTTON),a.$.getSensorManager().removeStf()})),(0,o.gE)("stf-clear-all").addEventListener("click",(()=>{a.$.getSoundManager().play(h.A.MENU_BUTTON),a.$.getSensorManager().clearStf()})),(0,o.gE)("stf-azExt").addEventListener("blur",(()=>{const e=parseFloat((0,o.gE)("stf-az").value),t=parseFloat((0,o.gE)("stf-el").value),i=parseFloat((0,o.gE)("stf-rng").value);let s=parseFloat((0,o.gE)("stf-azExt").value);s>80&&(s=80,(0,o.gE)("stf-azExt").value=s.toFixed(1));const n=M.kp.fromDateTime(a.$.getTimeManager().simulationTimeObj),l=a.$.getSensorManager().currentSensors[0].toGeodetic().toITRF(n).toJ2000(),r=new M.Jf(n,i,(e-s/2)*M.up,t*M.up).position(l),c=new M.Jf(M.kp.fromDateTime(a.$.getTimeManager().simulationTimeObj),i,(e+s/2)*M.up,t*M.up).position(l),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,o.gE)("stf-azExtKm").value=d.toFixed(1)})),(0,o.gE)("stf-elExt").addEventListener("blur",(()=>{const e=parseFloat((0,o.gE)("stf-az").value),t=parseFloat((0,o.gE)("stf-el").value),i=parseFloat((0,o.gE)("stf-rng").value);let s=parseFloat((0,o.gE)("stf-elExt").value);s>80&&(s=80,(0,o.gE)("stf-elExt").value=s.toFixed(1));const n=M.kp.fromDateTime(a.$.getTimeManager().simulationTimeObj),l=a.$.getSensorManager().currentSensors[0].toGeodetic().toITRF(n).toJ2000(),r=new M.Jf(n,i,e*M.up,(t-s/2)*M.up).position(l),c=new M.Jf(M.kp.fromDateTime(a.$.getTimeManager().simulationTimeObj),i,e*M.up,(t+s/2)*M.up).position(l),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,o.gE)("stf-elExtKm").value=d.toFixed(1)}))}}),a.$.register({event:l.kR.resetSensor,cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),a.$.register({event:l.kR.setSensor,cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,y.pz)((0,o.gE)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonActive=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),a.$.getUiManager().hideSideMenus()}onSubmit(){if(!this.verifySensorSelected())return;const e=parseFloat((0,o.gE)("stf-az").value),t=parseFloat((0,o.gE)("stf-azExt").value),i=parseFloat((0,o.gE)("stf-el").value),s=parseFloat((0,o.gE)("stf-elExt").value),n=parseFloat((0,o.gE)("stf-rng").value),l=parseFloat((0,o.gE)("stf-rngExt").value),r=e-t/2<0?e-t/2+360:e-t/2,c=e+t/2>360?e+t/2-360:e+t/2,d=i-s/2,u=i+s/2,g=n-l/2,h=n+l/2,m=a.$.getSensorManager().currentSensors[0],p=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),v=new M.tn({objName:`STF-${p}`,lat:m.lat,lon:m.lon,alt:m.alt,minAz:r,maxAz:c,minEl:d,maxEl:u,minRng:g,maxRng:h,type:M._V.SHORT_TERM_FENCE,name:"STF",uiName:"STF",zoom:h>6e3?M.N$.GEO:M.N$.LEO,volume:!0});m.isRaeInFov({az:r,el:d,rng:g})&&m.isRaeInFov({az:c,el:u,rng:h})?a.$.getSensorManager().addStf(v):f.J.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=a.$.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=a.$.getTimeManager().simulationTimeObj,i=(0,M.Eg)(t,this.selectSatManager_.primarySatObj.position,e.currentSensors[0]);(0,o.gE)("stf-az").value=i.az.toFixed(1),(0,o.gE)("stf-el").value=i.el.toFixed(1),(0,o.gE)("stf-rng").value=i.rng.toFixed(1),a.$.getUiManager().hideSideMenus(),(0,y.xA)((0,o.gE)("stf-menu"),1e3),this.isMenuButtonActive=!0,this.setBottomIconToSelected()}}ws.PLUGIN_NAME="Short Term Fences";const Ts=i.p+"../img/github.png";class Cs extends u.s{constructor(){super("Social Media"),this.dependencies=["Top Menu"]}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:Cs.uiManagerFinal_})}static uiManagerFinal_(){var e;const t=document.createElement("li");t.innerHTML=a.$.html`
          <a id="github-share1" class="top-menu-icons" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            src="${Ts}"
            />
          </a>
          `,null===(e=(0,o.gE)("nav-mobile2",!0))||void 0===e||e.insertBefore(t,(0,o.gE)("nav-mobile2").firstChild)}}var ks=i(4986),$s=i(4183);const Ns=i.p+"../img/view_timeline2.png";var Is=i(4455);class Rs extends u.s{constructor(){super(Rs.name),this.dependencies=[g.A.PLUGIN_NAME],this.drawEvents_={},this.lengthOfLookAngles_=6,this.lengthOfBadPass_=120,this.lengthOfAvgPass_=240,this.angleCalculationInterval_=30,this.isRequireSensorSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.bottomIconElementName="menu-satellite-timeline",this.bottomIconImg=Ns,this.bottomIconLabel="Satellite Timeline",this.bottomIconCallback=()=>{if(this.verifySensorSelected())return 0===a.$.getPlugin(Is.P).watchlistList.length&&-1===a.$.getPlugin(g.A).selectedSat?(a.$.getUiManager().toast("Add Satellites to Watchlist or Select a Satellite",l.pc.caution),void(0,j.h)((0,o.gE)(this.bottomIconElementName))):void(this.isMenuButtonActive&&this.resizeCanvas_())},this.helpTitle="Satellite Timeline",this.helpBody="The Satellite Timeline plugin shows the times when a sensor has visiblity of various satellites. The timeline is color-coded to show the quality of the\n    pass. Red is a bad pass, yellow is an average pass, and green is a good pass. Click on a pass to select that satellite and change the time to that pass.",this.sideMenuElementName="satellite-timeline-menu",this.sideMenuTitle="Satellite Timeline",this.sideMenuElementHtml=a.$.html`
    <div class="row"></div>
    <div class="row" style="margin: 0;">
      <canvas id="satellite-timeline-canvas"></canvas>
      <canvas id="satellite-timeline-canvas-static" style="display: none;"></canvas>
    </div>`,this.sideMenuSettingsHtml=a.$.html`
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
    </div>`,this.sideMenuSettingsOptions={width:350,leftOffset:0,zIndex:10},this.downloadIconCb=()=>{const e=document.getElementById("satellite-timeline-canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download=`sensor-${a.$.getSensorManager().getSensor().uiName}-timeline.png`,t.click()}}addHtml(){super.addHtml(),i.e(700).then(i.bind(i,1700)),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.canvas_=(0,o.gE)("satellite-timeline-canvas"),this.canvasStatic_=(0,o.gE)("satellite-timeline-canvas-static"),this.ctx_=this.canvas_.getContext("2d"),this.ctxStatic_=this.canvasStatic_.getContext("2d"),(0,o.gE)("satellite-timeline-setting-total-length").addEventListener("change",(()=>{this.lengthOfLookAngles_=parseFloat((0,o.gE)("satellite-timeline-setting-total-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("satellite-timeline-setting-interval").addEventListener("change",(()=>{this.angleCalculationInterval_=parseFloat((0,o.gE)("satellite-timeline-setting-interval").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("satellite-timeline-setting-bad-length").addEventListener("change",(()=>{this.lengthOfBadPass_=parseFloat((0,o.gE)("satellite-timeline-setting-bad-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("satellite-timeline-setting-avg-length").addEventListener("change",(()=>{this.lengthOfAvgPass_=parseFloat((0,o.gE)("satellite-timeline-setting-avg-length").value),this.ctxStatic_.reset(),this.updateTimeline()}))}})}addJs(){super.addJs(),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.isMenuButtonActive&&(e&&(this.ctxStatic_.reset(),this.updateTimeline(),this.canvas_.style.display="block"),e||0!==a.$.getPlugin(Is.P).watchlistList.length?this.verifySensorSelected(!1)&&this.setBottomIconToEnabled():this.setBottomIconToDisabled())}}),a.$.register({event:l.kR.onWatchlistUpdated,cbName:this.PLUGIN_NAME,cb:this.onWatchlistUpdated_.bind(this)}),a.$.register({event:l.kR.resize,cbName:this.PLUGIN_NAME,cb:this.resizeCanvas_.bind(this)})}onWatchlistUpdated_(e){0===e.length&&-1===a.$.getPlugin(g.A).selectedSat?this.setBottomIconToDisabled():this.verifySensorSelected(!1)&&this.setBottomIconToEnabled()}updateTimeline(){try{if(!1===a.$.getSensorManager().isSensorSelected())return;if(!this.isMenuButtonActive)return;const e=this.calculatePasses_();this.drawTimeline_(e)}catch(e){f.J.info(e)}}calculatePasses_(){const e=[],t=a.$.getSensorManager().getSensor(),i=a.$.getPlugin(Is.P).getSatellites().concat(a.$.getPlugin(g.A).selectedSat).filter((e=>-1!==e));for(const s of i){const i=a.$.getCatalogManager().getSat(s),n={satellite:i,passes:[]};if(t.maxRng<i.perigee&&(!t.maxRng2||t.maxRng2<i.perigee))continue;let o=0;const l=60*this.lengthOfLookAngles_*60;let r=!1,c=!1,d=!1,u=null;for(let e=0;e<l;e+=this.angleCalculationInterval_){o=1e3*e;const s=a.$.getTimeManager().getOffsetTimeObj(o),g=Rs.propagateMultiSite(s,i.satrec,t);g.time&&!r&&(u=new Date(g.time),r=!0,c=!0),!g.time&&r&&(d=!0,r=!1,e+=60*i.period*.75),(c&&d||c&&e===l-this.angleCalculationInterval_)&&(n.passes.push({start:u,end:s}),c=!1,d=!1)}e.push(n)}return e}static propagateMultiSite(e,t,i){const s=it.h.getRae(e,t,i);return it.h.checkIsInView(i,s)?{time:e,el:s.el,az:s.az,rng:s.rng,objName:null}:{time:null,el:0,az:0,rng:0,objName:null}}drawTimeline_(e){const t=this.canvas_,i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),this.canvas_=i,this.ctx_=this.canvas_.getContext("2d"),this.drawEvents_={};const s=.1*this.canvas_.width,n=.8*this.canvas_.width,o=.75*this.canvas_.height,r=a.$.getTimeManager(),c=r.simulationTimeObj.getTime(),d=c+60*this.lengthOfLookAngles_*60*1e3;this.ctx_.reset(),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(s,0,n,o-15);const u=o/(e.length+1),h=n/(d-c);this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(s,0+o-20),this.ctx_.lineTo(s+n,0+o-20),this.ctx_.stroke();for(let e=0;e<=this.lengthOfLookAngles_;e++){const t=s+60*e*60*1e3*h;this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+o-25),this.ctx_.lineTo(t,0+o-15),this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.stroke(),this.ctx_.lineWidth=1,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+o-15),this.ctx_.lineTo(t,0),this.ctx_.stroke();let i=r.simulationTimeObj.getUTCHours();i=(i+e)%24,this.ctx_.font="14px Consolas",this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(`${i}h`,t-10,0+o)}e.forEach(((e,t)=>{const i=0+(t+1)*u;if(this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.font="14px Consolas",this.ctx_.fillText(e.satellite.sccNum,s-150,i+5),e.passes.forEach((n=>{const o=n.start.getTime(),r=n.end.getTime(),d=s+(o-c)*h,u=s+(r-c)*h,m=(r-o)/M.If;m<this.lengthOfBadPass_?this.ctx_.fillStyle="rgb(255, 42, 4)":m<this.lengthOfAvgPass_?this.ctx_.fillStyle="rgb(252, 232, 58)":this.ctx_.fillStyle="rgb(86, 240, 0)",this.ctx_.fillRect(d,i-10,u-d,20);const p=(t,s)=>{if(t>=d-10&&t<=u+10&&s>=i-10&&s<=i+10){const i=new Date(o).toISOString().slice(11,19),a=new Date(r).toISOString().slice(11,19),n=`${e.satellite.sccNum}: ${i} - ${a}`;this.ctx_.font="14px Consolas";const l=this.ctx_.measureText(n).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-l/2-6,s-30,l+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-l/2-3,s-27,l+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(n,t-l/2,s-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${o}-${r}`]=p,this.canvas_.addEventListener("click",(t=>{const i=this.canvas_.getBoundingClientRect(),s=t.clientX-i.left,n=t.clientY-i.top;if(p(s,n)){const t=a.$.getTimeManager();t.changeStaticOffset(new Date(o).getTime()-t.realTime),t.calculateSimulationTime(),a.$.runEvent(l.kR.updateDateTime,new Date(t.dynamicOffsetEpoch+t.staticOffset)),a.$.getPlugin(g.A).selectSat(e.satellite.id)}}))})),0===e.passes.length){this.ctx_.fillStyle="rgba(200, 200, 200, 0.2)",this.ctx_.fillRect(s,i-10,n,20);const a=(t,a)=>{if(t>=s&&t<=s+n&&a>=i-10&&a<=i+10){const i=`${e.satellite.sccNum}: No Passes`;this.ctx_.font="14px Consolas";const s=this.ctx_.measureText(i).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-s/2-6,a-30,s+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-s/2-3,a-27,s+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(i,t-s/2,a-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${e.satellite.id}-no-passes`]=a}})),this.canvas_.addEventListener("mousemove",(e=>{this.handleOnMouseMove_(e)})),this.ctxStatic_=this.canvasStatic_.getContext("2d"),this.ctxStatic_.drawImage(this.canvas_,0,0)}handleOnMouseMove_(e){this.ctx_.reset(),this.ctx_.drawImage(this.canvasStatic_,0,0);const t=this.canvas_.getBoundingClientRect(),i=e.clientX-t.left,s=e.clientY-t.top;let a=!1;for(const e in this.drawEvents_){const t=this.drawEvents_[e](i,s);a=a||t}a||(this.canvas_.style.cursor="default")}resizeCanvas_(e){null!=e||(e=!1);const t=(0,o.gE)("satellite-timeline-menu");"none"!==t.style.display&&(e||window.innerWidth>window.innerHeight?(t.style.width=`${window.innerWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.height=window.innerHeight):(settingsManager.mapWidth=2*settingsManager.mapHeight,t.style.width=`${settingsManager.mapWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.style.width=`${window.innerWidth}px`,this.canvas_.height=window.innerHeight-100,this.canvas_.style.height=window.innerHeight-100+"px"),this.canvasStatic_.width=this.canvas_.width,this.canvasStatic_.height=this.canvas_.height,this.updateTimeline())}}const Ps=i.p+"../img/view_timeline.png";class Os extends u.s{constructor(){super(Os.name),this.dependencies=[g.A.PLUGIN_NAME],this.drawEvents_={},this.allSensorLists_=a.$.getSensorManager().sensorListSsn.concat(a.$.getSensorManager().sensorListMw,a.$.getSensorManager().sensorListMda,a.$.getSensorManager().sensorListLeoLabs,a.$.getSensorManager().sensorListEsoc,a.$.getSensorManager().sensorListRus,a.$.getSensorManager().sensorListPrc,a.$.getSensorManager().sensorListOther),this.enabledSensors_=this.allSensorLists_.filter((e=>a.$.getSensorManager().sensorListMw.includes(e))),this.lengthOfLookAngles_=6,this.lengthOfBadPass_=120,this.lengthOfAvgPass_=240,this.angleCalculationInterval_=30,this.isRequireSatelliteSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.bottomIconElementName="menu-sensor-timeline",this.bottomIconImg=Ps,this.bottomIconLabel="Sensor Timeline",this.bottomIconCallback=()=>{this.isMenuButtonActive&&(this.resizeCanvas_(),this.updateTimeline())},this.helpTitle="Sensor Timeline",this.helpBody="The Sensor Timeline plugin shows the times when a satellite is in view of various sensors. The timeline is color-coded to show the quality of the\n    pass. Red is a bad pass, yellow is an average pass, and green is a good pass. Click on a pass to change the sensor and time to that pass.",this.sideMenuElementName="sensor-timeline-menu",this.sideMenuTitle="Sensor Timeline",this.sideMenuElementHtml=a.$.html`
    <div class="row"></div>
    <div class="row" style="margin: 0;">
      <canvas id="sensor-timeline-canvas"></canvas>
      <canvas id="sensor-timeline-canvas-static" style="display: none;"></canvas>
    </div>`,this.sideMenuSettingsHtml=a.$.html`
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
    </div>`,this.sideMenuSettingsOptions={width:350,leftOffset:0,zIndex:10},this.downloadIconCb=()=>{const e=document.getElementById("sensor-timeline-canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download=`sat-${a.$.getPlugin(g.A).getSelectedSat().sccNum6}-timeline.png`,t.click()},this.allSensorLists_=this.allSensorLists_.filter(((e,t,i)=>t===i.findIndex((t=>t.uiName===e.uiName))))}addHtml(){super.addHtml(),i.e(42).then(i.bind(i,2042)),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.canvas_=(0,o.gE)("sensor-timeline-canvas"),this.canvasStatic_=(0,o.gE)("sensor-timeline-canvas-static"),this.ctx_=this.canvas_.getContext("2d"),this.ctxStatic_=this.canvasStatic_.getContext("2d"),(0,o.gE)("sensor-timeline-setting-total-length").addEventListener("change",(()=>{this.lengthOfLookAngles_=parseFloat((0,o.gE)("sensor-timeline-setting-total-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("sensor-timeline-setting-interval").addEventListener("change",(()=>{this.angleCalculationInterval_=parseFloat((0,o.gE)("sensor-timeline-setting-interval").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("sensor-timeline-setting-bad-length").addEventListener("change",(()=>{this.lengthOfBadPass_=parseFloat((0,o.gE)("sensor-timeline-setting-bad-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("sensor-timeline-setting-avg-length").addEventListener("change",(()=>{this.lengthOfAvgPass_=parseFloat((0,o.gE)("sensor-timeline-setting-avg-length").value),this.ctxStatic_.reset(),this.updateTimeline()}))}})}addJs(){super.addJs(),a.$.register({event:l.kR.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.isMenuButtonActive&&e&&(this.ctxStatic_.reset(),this.updateTimeline(),this.canvas_.style.display="block")}})}updateTimeline(){try{if(-1===a.$.getPlugin(g.A).selectedSat)return;if(!this.isMenuButtonActive)return;this.calculateSensors_();const e=this.calculatePasses_();this.drawTimeline_(e)}catch(e){f.J.info(e)}}calculateSensors_(){var e,t;const i=(0,o.gE)("sensor-timeline-sensor-list");if(i){i.innerHTML="";for(const s of this.allSensorLists_){if(!s.objName)continue;const n=document.createElement("button");n.classList.add("btn","btn-ui","waves-effect","waves-light"),this.enabledSensors_.includes(s)||n.classList.add("btn-red"),n.innerText=null!==(t=null!==(e=s.uiName)&&void 0!==e?e:s.shortName)&&void 0!==t?t:s.objName,n.addEventListener("click",(()=>{n.classList.contains("btn-red")?(n.classList.remove("btn-red"),this.enabledSensors_.push(s),a.$.getSoundManager().play(h.A.TOGGLE_ON)):(n.classList.add("btn-red"),this.enabledSensors_.splice(this.enabledSensors_.indexOf(s),1),a.$.getSoundManager().play(h.A.TOGGLE_OFF)),this.ctxStatic_.reset(),this.updateTimeline()})),i.appendChild(n),i.appendChild(document.createTextNode(" "))}}else f.J.warn("Could not find sensor list dom")}calculatePasses_(){const e=[],t=a.$.getPlugin(g.A).getSelectedSat();for(const i of this.enabledSensors_){const s={sensor:i,passes:[]};if(i.maxRng<t.perigee&&(!i.maxRng2||i.maxRng2<t.perigee)){e.push(s);continue}gs.g.updateSensorUiStyling([i]);let n=0;const o=60*this.lengthOfLookAngles_*60;let l=!1,r=!1,c=!1,d=null;for(let e=0;e<o;e+=this.angleCalculationInterval_){n=1e3*e;const u=a.$.getTimeManager().getOffsetTimeObj(n),g=Os.propagateMultiSite(u,t.satrec,i);g.time&&!l&&(d=new Date(g.time),l=!0,r=!0),!g.time&&l&&(c=!0,l=!1,e+=60*t.period*.75),(r&&c||r&&e===o-this.angleCalculationInterval_)&&(s.passes.push({start:d,end:u}),r=!1,c=!1)}e.push(s)}return e}static propagateMultiSite(e,t,i){const s=it.h.getRae(e,t,i);return it.h.checkIsInView(i,s)?{time:e,el:s.el,az:s.az,rng:s.rng,objName:null}:{time:null,el:0,az:0,rng:0,objName:null}}drawTimeline_(e){const t=this.canvas_,i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),this.canvas_=i,this.ctx_=this.canvas_.getContext("2d"),this.drawEvents_={};const s=.1*this.canvas_.width,n=.8*this.canvas_.width,o=.75*this.canvas_.height,r=a.$.getTimeManager(),c=r.simulationTimeObj.getTime(),d=c+60*this.lengthOfLookAngles_*60*1e3;this.ctx_.reset(),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(s,0,n,o-15);const u=o/(e.length+1),h=n/(d-c);this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(s,0+o-20),this.ctx_.lineTo(s+n,0+o-20),this.ctx_.stroke();for(let e=0;e<=this.lengthOfLookAngles_;e++){const t=s+60*e*60*1e3*h;this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+o-25),this.ctx_.lineTo(t,0+o-15),this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.stroke(),this.ctx_.lineWidth=1,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+o-15),this.ctx_.lineTo(t,0),this.ctx_.stroke();let i=r.simulationTimeObj.getUTCHours();i=(i+e)%24,this.ctx_.font="14px Consolas",this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(`${i}h`,t-10,0+o)}e.forEach(((e,t)=>{const i=0+(t+1)*u;if(this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.font="14px Consolas",this.ctx_.fillText(e.sensor.uiName,s-150,i+5),e.passes.forEach((n=>{const o=n.start.getTime(),r=n.end.getTime(),d=s+(o-c)*h,u=s+(r-c)*h,m=(r-o)/M.If;m<this.lengthOfBadPass_?this.ctx_.fillStyle="rgb(255, 42, 4)":m<this.lengthOfAvgPass_?this.ctx_.fillStyle="rgb(252, 232, 58)":this.ctx_.fillStyle="rgb(86, 240, 0)",this.ctx_.fillRect(d,i-10,u-d,20);const p=(t,s)=>{if(t>=d-10&&t<=u+10&&s>=i-10&&s<=i+10){const i=new Date(o).toISOString().slice(11,19),a=new Date(r).toISOString().slice(11,19),n=`${e.sensor.uiName}: ${i} - ${a}`;this.ctx_.font="14px Consolas";const l=this.ctx_.measureText(n).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-l/2-6,s-30,l+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-l/2-3,s-27,l+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(n,t-l/2,s-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${o}-${r}`]=p,this.canvas_.addEventListener("click",(t=>{const i=this.canvas_.getBoundingClientRect(),s=t.clientX-i.left,n=t.clientY-i.top;if(p(s,n)){const t=a.$.getTimeManager();a.$.getSensorManager().setSensor(e.sensor),t.changeStaticOffset(new Date(o).getTime()-t.realTime),t.calculateSimulationTime(),a.$.runEvent(l.kR.updateDateTime,new Date(t.dynamicOffsetEpoch+t.staticOffset));const i=a.$.getPlugin(g.A),s=i.selectedSat;i.selectSat(null),i.selectSat(s)}}))})),0===e.passes.length){this.ctx_.fillStyle="rgba(200, 200, 200, 0.2)",this.ctx_.fillRect(s,i-10,n,20);const a=(t,a)=>{if(t>=s&&t<=s+n&&a>=i-10&&a<=i+10){const i=`${e.sensor.uiName}: No Passes`;this.ctx_.font="14px Consolas";const s=this.ctx_.measureText(i).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-s/2-6,a-30,s+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-s/2-3,a-27,s+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(i,t-s/2,a-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${e.sensor.id}-no-passes`]=a}})),this.canvas_.addEventListener("mousemove",(e=>{this.handleOnMouseMove_(e)})),this.ctxStatic_=this.canvasStatic_.getContext("2d"),this.ctxStatic_.drawImage(this.canvas_,0,0)}handleOnMouseMove_(e){this.ctx_.reset(),this.ctx_.drawImage(this.canvasStatic_,0,0);const t=this.canvas_.getBoundingClientRect(),i=e.clientX-t.left,s=e.clientY-t.top;let a=!1;for(const e in this.drawEvents_){const t=this.drawEvents_[e](i,s);a=a||t}a||(this.canvas_.style.cursor="default")}resizeCanvas_(e){null!=e||(e=!1);const t=(0,o.gE)("sensor-timeline-menu");e||window.innerWidth>window.innerHeight?(t.style.width=`${window.innerWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.height=window.innerHeight):(settingsManager.mapWidth=2*settingsManager.mapHeight,t.style.width=`${settingsManager.mapWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.style.width=`${window.innerWidth}px`,this.canvas_.height=window.innerHeight-100,this.canvas_.style.height=window.innerHeight-100+"px"),this.canvasStatic_.width=this.canvas_.width,this.canvasStatic_.height=this.canvas_.height}}var Ds=i(5264);class Us extends u.s{constructor(){super(Us.PLUGIN_NAME),this.isRotateL=!0,this.isRotateR=!1,this.isRotateU=!1,this.isRotateD=!1,this.bottomIconElementName="video-director-icon",this.bottomIconImg=Ds,this.bottomIconLabel="Video Director",this.sideMenuElementName="video-director-menu",this.sideMenuElementHtml=a.$.html`
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=a.$.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),a.$.register({event:l.kR.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.gE)("video-director-form").addEventListener("change",Us.onFormChange),(0,o.gE)("video-director-form").addEventListener("submit",Us.onSubmit),(0,o.gE)("video-director-rotate").addEventListener("click",(()=>{var e;null===(e=a.$.getSoundManager())||void 0===e||e.play(h.A.BUTTON_CLICK),a.$.getMainCamera().autoRotate(!0)}))}})}static onFormChange(e){var t,i,s;if(null==e)throw new Error("e is undefined");switch(null===(t=e.target)||void 0===t?void 0:t.id){case"video-director-rotateL":case"video-director-rotateR":case"video-director-rotateU":case"video-director-rotateD":case"video-director-panL":case"video-director-panR":case"video-director-panU":case"video-director-panD":case"video-director-zoomIn":case"video-director-zoomOut":(0,o.gE)(e.target.id).checked?null===(i=a.$.getSoundManager())||void 0===i||i.play(h.A.TOGGLE_ON):null===(s=a.$.getSoundManager())||void 0===s||s.play(h.A.TOGGLE_OFF)}(0,o.gE)("video-director-selectedColor").checked&&0!==settingsManager.selectedColor[3]?(settingsManager.selectedColorFallback=settingsManager.selectedColor,settingsManager.selectedColor=[0,0,0,0]):settingsManager.selectedColor=settingsManager.selectedColorFallback,settingsManager.autoRotateSpeed=parseFloat((0,o.gE)("video-director-rotateSpeed").value),settingsManager.autoPanSpeed=parseFloat((0,o.gE)("video-director-panSpeed").value),settingsManager.autoZoomSpeed=parseFloat((0,o.gE)("video-director-zoomSpeed").value);const n=(0,o.gE)("video-director-rotateL").checked,l=(0,o.gE)("video-director-rotateR").checked,r=(0,o.gE)("video-director-rotateU").checked,c=(0,o.gE)("video-director-rotateD").checked,d=(0,o.gE)("video-director-panL").checked,u=(0,o.gE)("video-director-panR").checked,g=(0,o.gE)("video-director-panU").checked,m=(0,o.gE)("video-director-panD").checked,p=(0,o.gE)("video-director-zoomIn").checked,v=(0,o.gE)("video-director-zoomOut").checked;n&&!settingsManager.isAutoRotateL&&((0,o.gE)("video-director-rotateR").checked=!1),l&&!settingsManager.isAutoRotateR&&((0,o.gE)("video-director-rotateL").checked=!1),r&&!settingsManager.isAutoRotateU&&((0,o.gE)("video-director-rotateD").checked=!1),c&&!settingsManager.isAutoRotateD&&((0,o.gE)("video-director-rotateU").checked=!1),d&&!settingsManager.isAutoPanL&&((0,o.gE)("video-director-panR").checked=!1),u&&!settingsManager.isAutoPanR&&((0,o.gE)("video-director-panL").checked=!1),g&&!settingsManager.isAutoPanU&&((0,o.gE)("video-director-panD").checked=!1),m&&!settingsManager.isAutoPanD&&((0,o.gE)("video-director-panU").checked=!1),p&&!settingsManager.isAutoZoomIn&&((0,o.gE)("video-director-zoomOut").checked=!1),v&&!settingsManager.isAutoZoomOut&&((0,o.gE)("video-director-zoomIn").checked=!1)}static onSubmit(e){var t;if(null==e)throw new Error("e is undefined");e.preventDefault(),null===(t=a.$.getSoundManager())||void 0===t||t.play(h.A.BUTTON_CLICK),settingsManager.isAutoRotateR=(0,o.gE)("video-director-rotateR").checked,settingsManager.isAutoRotateL=(0,o.gE)("video-director-rotateL").checked,settingsManager.isAutoRotateU=(0,o.gE)("video-director-rotateU").checked,settingsManager.isAutoRotateD=(0,o.gE)("video-director-rotateD").checked,settingsManager.isAutoPanR=(0,o.gE)("video-director-panR").checked,settingsManager.isAutoPanL=(0,o.gE)("video-director-panL").checked,settingsManager.isAutoPanU=(0,o.gE)("video-director-panU").checked,settingsManager.isAutoPanD=(0,o.gE)("video-director-panD").checked,settingsManager.isAutoZoomIn=(0,o.gE)("video-director-zoomIn").checked,settingsManager.isAutoZoomOut=(0,o.gE)("video-director-zoomOut").checked}}Us.PLUGIN_NAME="Video Director";const Fs=new Us;var Bs=i(3224);const Gs=(e,t)=>{null!=t||(t={});try{const i=[{init:()=>(new ii).init(),enabled:t.debug},{init:()=>(new g.A).init(),enabled:!0},{init:()=>(new et.p).init(),enabled:t.topMenu},{init:()=>(new Li.c).init(),enabled:t.satInfoboxCore},{init:()=>(new Jt.l).init(),enabled:t.datetime},{init:()=>(new Cs).init(),enabled:t.social},{init:()=>(new xt).init(),enabled:t.classificationBar},{init:()=>(new cs).init(),enabled:t.sensor},{init:()=>(new As).init(),enabled:t.sensor},{init:()=>(new ps).init(),enabled:t.sensor},{init:()=>(new fs).init(),enabled:t.sensor},{init:()=>(new Es).init(),enabled:t.sensor},{init:()=>(new Os).init(),enabled:t.timeline},{init:()=>(new Rs).init(),enabled:t.timelineAlt},{init:()=>(new Is.P).init(),enabled:t.watchlist},{init:()=>(new Bs.m).init(),enabled:t.watchlist},{init:()=>(new Di).init(),enabled:t.reports},{init:()=>(new Pi).init(),enabled:t.polarPlot},{init:()=>(new yi).init(),enabled:t.nextLaunch},{init:()=>(new _).init(),enabled:t.findSat},{init:()=>(new ws).init(),enabled:t.shortTermFences},{init:()=>(new wi).init(),enabled:t.orbitReferences},{init:()=>(new Gt).init(),enabled:t.collisions},{init:()=>(new $i).init(),enabled:t.trackingImpactPredict},{init:()=>(new yt).init(),enabled:t.breakup},{init:()=>(new Kt).init(),enabled:t.debrisScreening},{init:()=>(new ui).init(),enabled:t.editSat},{init:()=>(new Ei).init(),enabled:t.newLaunch},{init:()=>G(),enabled:t.missile},{init:()=>(new ks.b).init(),enabled:t.stereoMap},{init:()=>(new is.a).init(),enabled:t.sensorFov},{init:()=>(new ds.q).init(),enabled:t.sensorSurv},{init:()=>(new X).init(),enabled:t.satelliteView},{init:()=>(new ji).init(),enabled:t.satelliteFov},{init:()=>(new ht).init(),enabled:t.planetarium},{init:()=>(new mt).init(),enabled:t.astronomy},{init:()=>(new xi).init(),enabled:t.nightToggle},{init:()=>ci.init(),enabled:t.dops},{init:()=>Gi.init(),enabled:t.constellations},{init:()=>p.init(),enabled:t.countries},{init:()=>Vt.init(),enabled:t.colorsMenu},{init:()=>ts.init(),enabled:t.screenshot},{init:()=>bi.init(),enabled:t.launchCalendar},{init:()=>$s.g.init(),enabled:t.timeMachine},{init:()=>Yi.init(),enabled:t.photoManager},{init:()=>qi.init(),enabled:t.screenRecorder},{init:()=>ct.init(),enabled:t.analysis},{init:()=>xs.K.init(),enabled:t.settingsMenu},{init:()=>Qe.init(),enabled:t.soundManager},{init:()=>hi.init(),enabled:t.gamepad},{init:()=>Fs.init(),enabled:t.videoDirector}];for(const{init:e,enabled:t}of i)t&&e();t.topMenu||document.documentElement.style.setProperty("--nav-bar-height","0px"),e.register({event:l.kR.uiManagerFinal,cbName:"core",cb:()=>{Hs(t)}})}catch(e){f.J.info(`Error loading core plugins:${e.message}`)}},Hs=e=>{const t=(0,o.gE)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",`${e}px`)}else document.documentElement.style.setProperty("--bottom-menu-height","0px");(0,o.gE)("bottom-icons")&&""==(0,o.gE)("bottom-icons").innerText?((0,o.gE)("nav-footer").style.visibility="hidden",(0,o.ys)("nav-footer")):(0,o.FG)("nav-footer");const i=(0,o.gE)("bottom-icons-container");if(i){const e=i.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",`${e}px`)}e.aboutManager&&((0,o.gE)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"localhost"!==window.location.hostname&&"keeptrack.space"!==window.location.hostname&&"www.keeptrack.space"!==window.location.hostname||(a.$.analytics=(0,Ii.Ay)({app:"KeepTrack",version:100,plugins:[(0,Ni.A)({measurementIds:"G-ENHWK6L0X7"})]}),a.$.analytics.page()),(0,o.gE)("bottom-icons-container").addEventListener("mousewheel",(e=>{e.preventDefault(),((e,t)=>{const i=e.scrollTop+.15*t;e.scrollTop=i})(e.currentTarget,e.deltaY)}),{passive:!1})}}}]);