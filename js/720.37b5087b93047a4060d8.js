"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[720],{2359:(e,t,i)=>{i.d(t,{A:()=>l});var a=i(7420),s=i.n(a),n=i(1605),o=i.n(n)()(s());o.push([e.id,"#collisions-table {\n  line-height: 0.05;\n  font-size: 13px;\n}\n\n#collisions-table td {\n  text-align: center;\n}\n",""]);const l=o},1659:(e,t,i)=>{i.d(t,{A:()=>l});var a=i(7420),s=i.n(a),n=i(1605),o=i.n(n)()(s());o.push([e.id,"#collisions-table {\n  line-height: 0.05;\n  font-size: 13px;\n}\n\n#collisions-table td {\n  text-align: center;\n}\n",""]);const l=o},9632:(e,t,i)=>{i.r(t),i.d(t,{CanvasRecorder:()=>Yi,catalogLoader:()=>tt,loadPlugins:()=>Aa,missile:()=>a,uiManagerFinal:()=>$a});var a={};i.r(a),i.d(a,{bottomMenuClick:()=>I,hideSideMenus:()=>R,init:()=>H,missileChange:()=>N,missileSubmit:()=>D,msAttackerChange:()=>j,msErrorClick:()=>O,msTargetChange:()=>P,onHelpMenuClick:()=>z,searchForRvs:()=>U,uiManagerFinal:()=>B,uiManagerInit:()=>F,updateLoop:()=>L});var s=i(6109),n=i(2792),o=i(1167),l=i(5285),r=i(7299),c=i(1315);const d=i.p+"../img/flag.png";var u=i(9137),g=i(4409),h=i(3794);class p extends u.s{constructor(){super(...arguments),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=d,this.bottomIconLabel="Countries",this.sideMenuElementHtml=s.$.html`
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
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=s.$.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("country-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>{var t;null===(t=s.$.getSoundManager())||void 0===t||t.play(h.A.CLICK),p.countryMenuClick_(e.getAttribute("data-group"))}))})),(0,n.m)((0,o.gE)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=s.$.getGroupsManager(),i=c.o.getCountryCode(e);if(""===i)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(r.M.COUNTRY,i,e),p.groupSelected_(e)}static groupSelected_(e){var t;const i=s.$.getGroupsManager(),a=s.$.getCatalogManager(),n=s.$.getUiManager(),l=(0,o.gE)("search");void 0!==e&&void 0!==i.groupList[e]&&(i.selectGroup(i.groupList[e]),i.groupList[e].ids.length<settingsManager.searchLimit?n.searchManager.doSearch(i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1)):(l.value=i.groupList[e].ids.reduce(((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`}),"").slice(0,-1),n.searchManager.fillResultBox(i.groupList[e].ids.map((e=>({id:e}))),a)),null===(t=s.$.getPlugin(g.A))||void 0===t||t.selectSat(-1),settingsManager.isMobileModeEnabled&&n.searchManager.closeSearch(),n.hideSideMenus())}}const m=new p;var v=i(3181),b=i(4272),f=i(2511);const S=i.p+"../img/find2.png";var E=i(2908),M=i(5375);class _ extends u.s{constructor(){super(...arguments),this.lastResults=[],this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=s.$.html`
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
  </div>`,this.bottomIconElementName="menu-find-sat",this.bottomIconImg=S,this.bottomIconLabel="Find Satellite",this.helpTitle="Find Satellite Menu",this.helpBody=s.$.html`The Find Satellite Menu is used for finding satellites by orbital parameters or satellite characteristics.
<br><br>
For most parameters, you type in the target value on the left and then a margin of error on the right.
For example, if you wanted to find all satellites in a 51-52 degree inclination, you can type 51.5 in the left box and 0.5 in the right box.
The search will then find all satellites within those inclinations and display them in the search bar.
`}static checkAz(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,M.Eg)(s.$.getTimeManager().simulationTimeObj,s.$.getCatalogManager().getSat(e.id,l.Z.POSITION_ONLY).position,s.$.getSensorManager().currentSensors[0]);return a.az>=t&&a.az<=i}))}static checkEl(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,M.Eg)(s.$.getTimeManager().simulationTimeObj,s.$.getCatalogManager().getSat(e.id,l.Z.POSITION_ONLY).position,s.$.getSensorManager().currentSensors[0]);return a.el>=t&&a.el<=i}))}static checkInview(e){const t=s.$.getDotsManager();return e.filter((e=>1===t.inViewData[e.id]))}static checkObjtype(e,t){return e.filter((e=>e.type===t))}static checkRange(e,t,i){return e.filter((e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,M.Eg)(s.$.getTimeManager().simulationTimeObj,s.$.getCatalogManager().getSat(e.id,l.Z.POSITION_ONLY).position,s.$.getSensorManager().currentSensors[0]);return a.rng>=t&&a.rng<=i}))}static limitPossibles(e,t){const i=s.$.getUiManager();return e.length>=t&&i.toast(`Too many results, limited to ${t}`,l.pc.serious),e.slice(0,t)}static searchSats(e){let{az:t,el:i,rng:a,countryCode:n,inc:l,azMarg:r,elMarg:c,rngMarg:d,incMarg:u,period:g,periodMarg:h,rcs:p,rcsMarg:m,objType:v,raan:b,raanMarg:f,argPe:S,argPeMarg:M,bus:y,shape:x,payload:w}=e;const C=!isNaN(t)&&isFinite(t),T=!isNaN(i)&&isFinite(i),A=!isNaN(a)&&isFinite(a),$=!isNaN(l)&&isFinite(l),k=!isNaN(b)&&isFinite(b),L=!isNaN(S)&&isFinite(S),R=!isNaN(g)&&isFinite(g),I=!isNaN(p)&&isFinite(p),N="All"!==n,O="All"!==y,P="All"!==x,D="All"!==w;if(r=!isNaN(r)&&isFinite(r)?r:5,c=!isNaN(c)&&isFinite(c)?c:5,d=!isNaN(d)&&isFinite(d)?d:200,u=!isNaN(u)&&isFinite(u)?u:1,h=!isNaN(h)&&isFinite(h)?h:.5,m=!isNaN(m)&&isFinite(m)?m:p/10,f=!isNaN(f)&&isFinite(f)?f:1,M=!isNaN(M)&&isFinite(M)?M:1,!(T||A||C||$||R||I||L||k||N||O||P||D))throw new Error("No Search Criteria Entered");let F=s.$.getCatalogManager().getSats();if(F=$||R||!(C||T||A)?F:_.checkInview(F),F=0!==v?_.checkObjtype(F,v):F,C&&(F=_.checkAz(F,t-r,t+r)),T&&(F=_.checkEl(F,i-c,i+c)),A&&(F=_.checkRange(F,a-d,a+d)),$&&(F=_.checkInc(F,l-u,l+u)),k&&(F=_.checkRightAscension(F,b-f,b+f)),L&&(F=_.checkArgPe(F,S-M,S+M)),R&&(F=_.checkPeriod(F,g-h,g+h)),I&&(F=_.checkRcs(F,p-m,p+m)),"All"!==n){let e=n.split("|").map((e=>E.$5[e]));e=e.filter(((t,i)=>t&&e.indexOf(t)===i)),F=F.filter((t=>e.includes(t.country)))}"All"!==y&&(F=F.filter((e=>e.bus===y))),"All"!==x&&(F=F.filter((e=>e.shape===x))),"All"!==w&&(F=F.filter((e=>{var t,i,a;return(null===(a=null===(i=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===i?void 0:i.split("-")[0])||void 0===a?void 0:a.replace(/[^a-zA-Z]/gu,""))===w}))),F=_.limitPossibles(F,settingsManager.searchLimit);let U="";return F.forEach(((e,t)=>{U+=t<F.length-1?`${e.sccNum},`:`${e.sccNum}`})),(0,o.gE)("search").value=U,s.$.getUiManager().doSearch((0,o.gE)("search").value),F}findByLooksSubmit(){return e=this,t=void 0,a=function*(){const e=s.$.getUiManager(),t=parseFloat((0,o.gE)("fbl-azimuth").value),i=parseFloat((0,o.gE)("fbl-elevation").value),a=parseFloat((0,o.gE)("fbl-range").value),n=parseFloat((0,o.gE)("fbl-inc").value),r=parseFloat((0,o.gE)("fbl-period").value),c=parseFloat((0,o.gE)("fbl-rcs").value),d=parseFloat((0,o.gE)("fbl-azimuth-margin").value),u=parseFloat((0,o.gE)("fbl-elevation-margin").value),g=parseFloat((0,o.gE)("fbl-range-margin").value),h=parseFloat((0,o.gE)("fbl-inc-margin").value),p=parseFloat((0,o.gE)("fbl-period-margin").value),m=parseFloat((0,o.gE)("fbl-rcs-margin").value),v=parseInt((0,o.gE)("fbl-type").value),b=parseFloat((0,o.gE)("fbl-raan").value),f=parseFloat((0,o.gE)("fbl-raan-margin").value),S=parseFloat((0,o.gE)("fbl-argPe").value),E=parseFloat((0,o.gE)("fbl-argPe-margin").value),M=(0,o.gE)("fbl-country").value,y=(0,o.gE)("fbl-bus").value,x=(0,o.gE)("fbl-payload").value,w=(0,o.gE)("fbl-shape").value;(0,o.gE)("search").value="";try{const s={az:t,el:i,rng:a,inc:n,azMarg:d,elMarg:u,rngMarg:g,incMarg:h,period:r,periodMarg:p,rcs:c,rcsMarg:m,objType:v,raan:b,raanMarg:f,argPe:S,argPeMarg:E,countryCode:M,bus:y,payload:x,shape:w};this.lastResults=_.searchSats(s),0===this.lastResults.length&&e.toast("No Satellites Found",l.pc.critical)}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered",l.pc.critical)}},new((i=void 0)||(i=Promise))((function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}));var e,t,i,a}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerInit,cbName:"findSat",cb:()=>{(0,o.gE)("fbl-error").addEventListener("click",(()=>{(0,o.gE)("fbl-error").style.display="none"}))}}),s.$.register({event:l.kR.uiManagerFinal,cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}printLastResults(){f.J.info(this.lastResults.map((e=>e.name)).join("\n"))}uiManagerFinal(){const e=s.$.getCatalogManager().objectCache;(0,o.gE)("findByLooks-form").addEventListener("submit",(e=>{e.preventDefault(),(0,b.Cs)((()=>{this.findByLooksSubmit(),(0,b.RZ)()}))})),(0,v.c)(e.filter((e=>null==e?void 0:e.bus)).map((e=>e.bus))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,o.gE)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})),E.QK.forEach((e=>{(0,o.gE)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${E.kj[e]}">${e}</option>`)})),(0,v.c)(e.filter((e=>null==e?void 0:e.shape)).map((e=>e.shape))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,o.gE)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}));const t=e.filter((e=>null==e?void 0:e.payload)).map((e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,""))).filter((e=>e.length>=3));(0,v.c)(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{""!==e&&e.length>3&&(0,o.gE)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}))}static checkArgPe(e,t,i){return e.filter((e=>e.argOfPerigee<i&&e.argOfPerigee>t))}static checkInc(e,t,i){return e.filter((e=>e.inclination<i&&e.inclination>t))}static checkPeriod(e,t,i){return e.filter((e=>e.period>t&&e.period<i))}static checkRightAscension(e,t,i){return e.filter((e=>e.rightAscension<i&&e.rightAscension>t))}static checkRcs(e,t,i){return e.filter((e=>e.rcs>t&&e.rcs<i))}}var y=i(6232);const x=i.p+"../img/missile.png";var w=i(7027);const C=s.$.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var T=i(5581);let A=!1,$=!1,k=0;const L=()=>{if(void 0!==T.Uu&&T.Uu.missileArray.length>0){const e=s.$.getOrbitManager();for(k=0;k<T.Uu.missileArray.length;k++)e.updateOrbitBuffer(T.Uu.missileArray[k].id)}},R=()=>{(0,y.pz)((0,o.gE)("missile-menu"),1e3),(0,o.gE)("menu-missile").classList.remove("bmenu-item-selected"),A=!1},I=e=>{if("menu-missile"===e){const e=s.$.getUiManager();A?(A=!1,e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.closeSearch(),e.hideSideMenus(),(0,y.xA)((0,o.gE)("missile-menu"),1e3),(0,o.gE)("menu-missile").classList.add("bmenu-item-selected"),A=!0)}},N=()=>{0!==parseFloat((0,o.gE)("ms-type").value)?(0,o.gE)("ms-custom-opt").style.display="none":(0,o.gE)("ms-custom-opt").style.display="block"},O=()=>{(0,o.gE)("ms-error").style.display="none"},P=()=>{-1!==parseInt((0,o.gE)("ms-target").value)?((0,o.gE)("ms-tgt-holder-lat").style.display="none",(0,o.gE)("ms-tgt-holder-lon").style.display="none"):((0,o.gE)("ms-tgt-holder-lat").style.display="block",(0,o.gE)("ms-tgt-holder-lon").style.display="block")},D=()=>{(0,b.Cs)((()=>{const e=s.$.getTimeManager(),t=s.$.getUiManager();(0,o.gE)("ms-error").style.display="none";const i=parseFloat((0,o.gE)("ms-type").value),a=parseFloat((0,o.gE)("ms-attacker").value);let n=parseFloat((0,o.gE)("ms-lat-lau").value),r=parseFloat((0,o.gE)("ms-lon-lau").value);const c=parseFloat((0,o.gE)("ms-target").value);let d=parseFloat((0,o.gE)("ms-lat").value),u=parseFloat((0,o.gE)("ms-lon").value);const g=e.selectedDate.getTime();let h="";if(1===i&&(h="simulation/Russia2USA.json",T.Uu.MassRaidPre(g,h)),2===i&&(h="simulation/Russia2USAalt.json",T.Uu.MassRaidPre(g,h)),3===i&&(h="simulation/China2USA.json",T.Uu.MassRaidPre(g,h)),4===i&&(h="simulation/NorthKorea2USA.json",T.Uu.MassRaidPre(g,h)),5===i&&(h="simulation/USA2Russia.json",T.Uu.MassRaidPre(g,h)),6===i&&(h="simulation/USA2China.json",T.Uu.MassRaidPre(g,h)),7===i&&(h="simulation/USA2NorthKorea.json",T.Uu.MassRaidPre(g,h)),0!==i&&t.toast(`${h} Loaded`,l.pc.standby,!0),0===i){if(-1===c){if(isNaN(d))return t.toast("Invalid Target Latitude!",l.pc.critical),void((0,o.gE)("loading-screen").style.display="none");if(isNaN(u))return t.toast("Invalid Target Longitude!",l.pc.critical),void((0,o.gE)("loading-screen").style.display="none")}else d=T.Uu.globalBMTargets[3*c],u=T.Uu.globalBMTargets[3*c+1];if($){if(isNaN(n))return t.toast("Invalid Launch Latitude!",l.pc.critical),void((0,o.gE)("loading-screen").style.display="none");if(isNaN(r))return t.toast("Invalid Launch Longitude!",l.pc.critical),void((0,o.gE)("loading-screen").style.display="none")}let e,i;const h=s.$.getCatalogManager();if(a<200){e=a-100,i=500-T.Uu.missilesInUse;let t=1200;100!=a&&(n=T.Uu.UsaICBM[4*e],r=T.Uu.UsaICBM[4*e+1],t=1100),T.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,T.Uu.UsaICBM[4*e+2],30,2.9,.07,T.Uu.UsaICBM[4*e+3],"United States",t)}else if(a<300){e=a-200,i=500-T.Uu.missilesInUse;const t=1120;213!=a&&214!=a&&215!=a&&(n=T.Uu.RussianICBM[4*e],r=T.Uu.RussianICBM[4*e+1]),T.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,T.Uu.RussianICBM[4*e+2],30,2.9,.07,T.Uu.RussianICBM[4*e+3],"Russia",t)}else if(a<400){e=a-300,i=500-T.Uu.missilesInUse;const t=1120;321!=a&&(n=T.Uu.ChinaICBM[4*e],r=T.Uu.ChinaICBM[4*e+1]),T.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,T.Uu.ChinaICBM[4*e+2],30,2.9,.07,T.Uu.ChinaICBM[4*e+3],"China",t)}else if(a<500){e=a-400,i=500-T.Uu.missilesInUse;const t=1120;400!=a&&(n=T.Uu.NorthKoreanBM[4*e],r=T.Uu.NorthKoreanBM[4*e+1]),T.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,T.Uu.NorthKoreanBM[4*e+2],30,2.9,.07,T.Uu.NorthKoreanBM[4*e+3],"North Korea",t)}else if(a<600){e=a-500,i=500-T.Uu.missilesInUse;const t=1e3;500!=a&&(n=T.Uu.FraSLBM[4*e],r=T.Uu.FraSLBM[4*e+1]),T.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,T.Uu.FraSLBM[4*e+2],30,2.9,.07,T.Uu.FraSLBM[4*e+3],"France",t)}else if(a<700){e=a-600,i=500-T.Uu.missilesInUse;const t=1200;600!=a&&(n=T.Uu.ukSLBM[4*e],r=T.Uu.ukSLBM[4*e+1]),T.Uu.createMissile(n,r,d,u,3,h.missileSats-i,g,T.Uu.ukSLBM[4*e+2],30,2.9,.07,T.Uu.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(T.Uu.lastMissileError,T.Uu.lastMissileErrorType),t.doSearch("RV_")}(0,o.gE)("loading-screen").style.display="none"}))},F=()=>{(0,o.gE)("left-menus").insertAdjacentHTML("beforeend",s.$.html`
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
      `),(0,o.gE)("bottom-icons").insertAdjacentHTML("beforeend",s.$.html`
        <div id="menu-missile" class="bmenu-item">
          <img
            alt="missile"
            src="" delayedsrc=${x}
          />
          <span class="bmenu-title">Missile</span>
          <div class="status-icon"></div>
        </div>
        `)},U=()=>{s.$.getUiManager().doSearch("RV_")},B=()=>{(0,n.m)((0,o.gE)("missile-menu")),(0,o.gE)("missile").addEventListener("submit",(e=>{e.preventDefault(),D()})),(0,o.gE)("ms-attacker").addEventListener("change",j),(0,o.gE)("ms-target").addEventListener("change",P),(0,o.gE)("ms-error").addEventListener("click",O),(0,o.gE)("missile").addEventListener("change",N),(0,o.gE)("searchRvBtn").addEventListener("click",U),j(),P()},H=()=>{s.$.register({event:l.kR.uiManagerInit,cbName:"missile",cb:F}),s.$.register({event:l.kR.uiManagerFinal,cbName:"missile",cb:B}),s.$.register({event:l.kR.bottomMenuClick,cbName:"missile",cb:I}),s.$.register({event:l.kR.hideSideMenus,cbName:"missile",cb:R}),s.$.register({event:l.kR.updateLoop,cbName:"updateMissileOrbits",cb:L}),s.$.register({event:l.kR.onHelpMenuClick,cbName:"missile",cb:z})},z=()=>!!A&&(w.Z.showAdvice("Missile Menu",C),!0),j=()=>{$=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,o.gE)("ms-attacker").value)&&($=!0);$?((0,o.gE)("ms-lau-holder-lat").style.display="block",(0,o.gE)("ms-lau-holder-lon").style.display="block"):((0,o.gE)("ms-lau-holder-lat").style.display="none",(0,o.gE)("ms-lau-holder-lon").style.display="none")};var G=i(187),V=i(6833);const X=i.p+"../img/sat3.png";class J extends u.s{constructor(){super(),this.dependencies_=[g.A.name],this.isRequireSatelliteSelected=!0,this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=X,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{s.$.getMainCamera().cameraType===V.A.SATELLITE?(s.$.getUiManager().hideSideMenus(),s.$.getMainCamera().cameraType=V.A.FIXED_TO_SAT,(0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-selected")):-1!==this.selectSatManager_.selectedSat?(s.$.getMainCamera().cameraType=V.A.SATELLITE,(0,o.gE)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(s.$.getUiManager().toast("Select a Satellite First!",l.pc.caution),(0,G.h)((0,o.gE)(this.bottomIconElementName)))},this.lastLongAudioTime=0,this.selectSatManager_=s.$.getPlugin(g.A)}}var Y=i(1386);const K=i.p+"../audio/beep1.mp3",W=i.p+"../audio/button.mp3",Z=i.p+"../audio/button2.mp3",q=i.p+"../audio/chatter1.mp3",Q=i.p+"../audio/chatter2.mp3",ee=i.p+"../audio/chatter3.mp3",te=i.p+"../audio/chatter4.mp3",ie=i.p+"../audio/chatter5.mp3",ae=i.p+"../audio/chatter6.mp3",se=i.p+"../audio/chatter7.mp3",ne=i.p+"../audio/chatter8.mp3",oe=i.p+"../audio/click10.mp3",le=i.p+"../audio/click11.mp3",re=i.p+"../audio/click12.mp3",ce=i.p+"../audio/click13.mp3",de=i.p+"../audio/click14.mp3",ue=i.p+"../audio/click15.mp3",ge=i.p+"../audio/click16.mp3",he=i.p+"../audio/click17.mp3",pe=i.p+"../audio/click18.mp3",me=i.p+"../audio/click19.mp3",ve=i.p+"../audio/click2.mp3",be=i.p+"../audio/click20.mp3",fe=i.p+"../audio/click21.mp3",Se=i.p+"../audio/click22.mp3",Ee=i.p+"../audio/click23.mp3",Me=i.p+"../audio/click24.mp3",_e=i.p+"../audio/click25.mp3",ye=i.p+"../audio/click26.mp3",xe=i.p+"../audio/click27.mp3",we=i.p+"../audio/click28.mp3",Ce=i.p+"../audio/click29.mp3",Te=i.p+"../audio/click3.mp3",Ae=i.p+"../audio/click30.mp3",$e=i.p+"../audio/click4.mp3",ke=i.p+"../audio/click7.mp3",Le=i.p+"../audio/click8.mp3",Re=i.p+"../audio/error.mp3",Ie=i.p+"../audio/error2.mp3",Ne=i.p+"../audio/export.wav",Oe=i.p+"../audio/genericBeep1.mp3",Pe=i.p+"../audio/genericBeep2.mp3",De=i.p+"../audio/genericBeep3.mp3",Fe=i.p+"../audio/liftoff.mp3",Ue=i.p+"../audio/loading.wav",Be=i.p+"../audio/pop.mp3",He=i.p+"../audio/switch.mp3",ze=i.p+"../audio/toggle-off.mp3",je=i.p+"../audio/toggle-on.mp3",Ge=i.p+"../audio/whoosh1.mp3",Ve=i.p+"../audio/whoosh2.mp3",Xe=i.p+"../audio/whoosh3.mp3",Je=i.p+"../audio/whoosh4.mp3",Ye=i.p+"../audio/whoosh5.mp3",Ke=i.p+"../audio/whoosh6.mp3",We=i.p+"../audio/whoosh7.mp3",Ze=i.p+"../audio/whoosh8.mp3";class qe extends u.s{constructor(){super(),this.lastLongAudioTime=0,this.isMute=!1,this.currentChatterClip_=0,this.voices=[],this.maxClickClip_=0,this.sounds={standby:new Audio(Be),error1:new Audio(Re),error2:new Audio(Ie),export:new Audio(Ne),click:new Audio(He),beep1:new Audio(K),genericBeep1:new Audio(Oe),genericBeep2:new Audio(Pe),genericBeep3:new Audio(De),whoosh1:new Audio(Ge),whoosh2:new Audio(Ve),whoosh3:new Audio(Xe),whoosh4:new Audio(Je),whoosh5:new Audio(Ye),whoosh6:new Audio(Ke),whoosh7:new Audio(We),whoosh8:new Audio(Ze),click1:new Audio(Ae),click2:new Audio(ve),click3:new Audio(Te),click4:new Audio($e),click5:new Audio(Ce),click6:new Audio(xe),click7:new Audio(ke),click8:new Audio(Le),click9:new Audio(we),click10:new Audio(oe),click11:new Audio(le),click12:new Audio(re),click13:new Audio(ce),click14:new Audio(de),click15:new Audio(ue),click16:new Audio(ge),click17:new Audio(he),click18:new Audio(pe),click19:new Audio(me),click20:new Audio(be),click21:new Audio(fe),click22:new Audio(Se),click23:new Audio(Ee),click24:new Audio(Me),click25:new Audio(_e),click26:new Audio(ye),chatter1:new Audio(q),chatter2:new Audio(Q),chatter3:new Audio(ee),chatter4:new Audio(te),chatter5:new Audio(ie),chatter6:new Audio(ae),chatter7:new Audio(se),chatter8:new Audio(ne),loading:new Audio(Ue),button:new Audio(W),menuButton:new Audio(Z),toggleOn:new Audio(je),toggleOff:new Audio(ze),liftoff:new Audio(Fe)},this.addJs=()=>{super.addJs(),Y.M.registerSingleton(l.dz.SoundManager,this),s.$.register({event:l.kR.uiManagerInit,cbName:this.constructor.name,cb:()=>{this.voices=speechSynthesis.getVoices()}}),this.sounds.loading.volume=.25,this.sounds.export.volume=.3,this.sounds.error2.volume=.5},Object.keys(this.sounds).forEach((e=>{if(e.startsWith("click")){const t=parseInt(e.replace("click",""));t>this.maxClickClip_&&(this.maxClickClip_=t)}}))}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter((e=>"Google UK English Female"==e.name))[0],window.speechSynthesis.speak(t)}stop(e,t=!0){if(e===h.A.CHATTER){clearTimeout(this.nextChatter);for(let e=1;e<=8;e++)this.stop(`chatter${e}`,t);return}const i=this.sounds[e];t&&qe.fadeOut_(i)}static fadeOut_(e,t=1e3){const i=e.volume,a=t/10,s=e.volume/a;let n=0;const o=setInterval((()=>{n++,e.volume>.05&&(e.volume-=s),n===a&&(e.pause(),e.currentTime=0,clearInterval(o),e.volume=i)}),10)}play(e){var t;if(!(null===(t=navigator.userActivation)||void 0===t?void 0:t.hasBeenActive))return;if(this.isMute)return;if((0,o.gE)("loading-screen").classList.contains("fullscreen"))return;let i,a=1;switch(e){case h.A.BEEP:return a=Math.floor(3*Math.random())+1,i=this.sounds[`genericBeep${a}`],void i.play();case h.A.WHOOSH:return a=Math.floor(8*Math.random())+1,i=this.sounds[`whoosh${a}`],void i.play();case h.A.ERROR:if(this.lastLongAudioTime+12e5>Date.now())return;return this.lastLongAudioTime=Date.now(),a=Math.floor(2*Math.random())+1,i=this.sounds[`error${a}`],void i.play();case h.A.CLICK:return a=Math.floor(Math.random()*this.maxClickClip_)+1,i=this.sounds[`click${a}`],i.volume=.25,void i.play();case h.A.CHATTER:return a=Math.floor(8*Math.random())+1,a===this.currentChatterClip_&&(a++,a>8&&(a=1)),i=this.sounds[`chatter${a}`],i.volume=.15,this.stop(h.A.CHATTER,!1),i.play(),void(this.nextChatter=setTimeout((()=>{this.play(h.A.CHATTER)}),1e3*i.duration+1e4));default:i=this.sounds[e],i.play()}}}const Qe=new qe;var et=i(6081),tt=i(6251),it=i(8899),at=i(680),st=i(1722);class nt{static exportTle2Csv(e,t=!0){try{const i=[],a=e.filter((e=>e.isSatellite()&&e.tle1));if(0===a.length)return void f.J.info("No TLE data to export");a.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of a)void 0!==e.tle1&&void 0!==e.tle2&&(t&&"ANALSAT"===e.country||i.push({satId:e.sccNum,name:e.name,tle1:e.tle1,tle2:e.tle2,inclination:e.inclination,eccentricity:e.eccentricity,period:e.period,raan:e.rightAscension,apogee:e.apogee,perigee:e.perigee,country:e.country,site:e.launchSite,rocket:e.launchVehicle,rcs:e.rcs,visualMagnitude:e.vmag,user:e.user,mission:e.mission,purpose:e.purpose,contractor:e.manufacturer,dryMass:e.dryMass,liftMass:e.launchMass,lifeExpected:e.lifetime,power:e.power}));(0,at.g3)(i,"catalogInfo")}catch(e){}}static exportSatInFov2Csv(e){const t=e.filter((e=>{var t;return e.isSatellite()&&e.tle1&&1===(null===(t=s.$.getDotsManager().inViewData)||void 0===t?void 0:t[e.id])})).map((e=>{const t=e;return{satId:t.sccNum,name:t.name,country:t.country,apogee:t.apogee,perigee:t.perigee}}));(0,at.g3)(t,"satInView")}static exportTle2Txt(e,t=2,i=!0){try{const a=[],s=e.filter((e=>e.isSatellite()&&e.tle1));if(0===s.length)return void f.J.info("No TLE data to export");s.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(const e of s)void 0!==e.tle1&&void 0!==e.tle2&&(i&&"ANALSAT"===e.country||(3===t&&a.push(e.name),e.tle1.includes("NO TLE")&&console.log(e.sccNum),e.tle2.includes("NO TLE")&&console.log(e.sccNum),a.push(e.tle1),a.push(e.tle2)));const n=a.join("\n"),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,st.saveAs)(o,"TLE.txt")}catch(e){}}}var ot=i(3376);const lt=i.p+"../img/analysis.png";class rt extends u.s{constructor(){super(...arguments),this.bottomIconElementName="analysis-bottom-icon",this.bottomIconImg=lt,this.bottomIconLabel="Analysis Menu",this.sideMenuElementName="analysis-menu",this.sideMenuElementHtml=s.$.html`
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
`,this.helpTitle="Analysis Menu",this.helpBody=s.$.html`The Analysis Menu provides a number of tools to help you analyze the data in the current view. The tools are:
  <ul style="margin-left: 40px;">
    <li>Export Official TLEs - Export real two line element sets.</li>
    <li>Export 3LES - Export three line element sets.</li>
    <li>Export KeepTrack TLEs - Export All KeepTrack two line element sets including analysts.</li>
    <li>Export KeepTrack 3LES - Export All KeepTrack three line element sets including analysts.</li>
    <li>Find Close Objects - Find objects that are close to each other.</li>
    <li>Find Reentries - Find objects that are likely to reenter the atmosphere.</li>
    <li>Best Passes - Find the best passes for a satellite based on the currently selected sensor.</li>
  </ul>`,this.searchStrCache_=null}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:"analysis",cb:()=>{var e,t,i,a,l,r,c,d,u;null===(e=(0,o.gE)("analysis-bpt"))||void 0===e||e.addEventListener("submit",(e=>{e.preventDefault(),rt.analysisBptSumbit_()})),null===(t=(0,o.gE)("findCsoBtn"))||void 0===t||t.addEventListener("click",(()=>{(0,b.Cs)(this.findCsoBtnClick_.bind(this))})),null===(i=(0,o.gE)("findReentries"))||void 0===i||i.addEventListener("click",(()=>{(0,b.Cs)(rt.findRaBtnClick_)}));const g=s.$.getCatalogManager().objectCache;null===(a=(0,o.gE)("export-catalog-csv-btn"))||void 0===a||a.addEventListener("click",(()=>{nt.exportTle2Csv(g)})),null===(l=(0,o.gE)("export-sat-fov-csv-btn"))||void 0===l||l.addEventListener("click",(()=>{nt.exportSatInFov2Csv(g)})),null===(r=(0,o.gE)("export-catalog-txt-2a"))||void 0===r||r.addEventListener("click",(()=>{nt.exportTle2Txt(g)})),null===(c=(0,o.gE)("export-catalog-txt-2b"))||void 0===c||c.addEventListener("click",(()=>{nt.exportTle2Txt(g,2,!1)})),null===(d=(0,o.gE)("export-catalog-txt-3a"))||void 0===d||d.addEventListener("click",(()=>{nt.exportTle2Txt(g,3)})),null===(u=(0,o.gE)("export-catalog-txt-3b"))||void 0===u||u.addEventListener("click",(()=>{nt.exportTle2Txt(g,3,!1)})),(0,n.m)((0,o.gE)("analysis-menu"))}}),s.$.register({event:l.kR.setSensor,cbName:this.constructor.name,cb:e=>{rt.setSensor_(e)}})}findCloseObjects(){if(this.searchStrCache_)return this.searchStrCache_;let e=rt.getValidSats_();e=(0,v.c)(e),e.sort(((e,t)=>e.position.x-t.position.x));const t=rt.getPossibleCSOs_(e,50),i=(0,v.c)(t),a=rt.getActualCSOs_(i,50),s=Array.from(new Set(a));let n="";for(let e=0;e<s.length;e++)e==s.length-1?n+=s[e]:n+=`${s[e]},`;return this.searchStrCache_=n,n}static getActualCSOs_(e,t){const i=[];for(const t of e){let e=t.sat1,i=it.h.getEci(e,new Date(Date.now()+18e5));i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(t.sat1.position=i.position,e=t.sat2,i=it.h.getEci(e,new Date(Date.now()+18e5)),i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(e.position=i.position,t.sat2.position=i.position))}for(const a of e){const e=a.sat1,s=e.position;if(void 0===s)continue;const n=s.x-t,o=s.x+t,l=s.y-t,r=s.y+t,c=s.z-t,d=s.z+t,u=a.sat2,g=u.position;void 0!==g&&g.x<o&&g.x>n&&g.y<r&&g.y>l&&g.z<d&&g.z>c&&(i.push(e.sccNum),i.push(u.sccNum))}return i}static getPossibleCSOs_(e,t){const i=[];for(let a=0;a<e.length;a++){const s=e[a],n=s.position,o=n.x-t,l=n.x+t,r=n.y-t,c=n.y+t,d=n.z-t,u=n.z+t;let g=0;for(g=Math.max(0,a-200);g<e.length;g++){const t=e[g];if(s==t)continue;const a=t.position;if(a.x>l)break;a.x<l&&a.x>o&&a.y<c&&a.y>r&&a.z<u&&a.z>d&&i.push({sat1:s,sat2:t})}}return i}static getValidSats_(){const e=[];for(let t=0;t<s.$.getCatalogManager().orbitalSats;t++){const i=s.$.getCatalogManager().getSat(t);i&&(void 0===i.position&&(i.position=it.h.getEci(i,new Date).position||{x:0,y:0,z:0}),isNaN(i.position.x)||isNaN(i.position.y)||isNaN(i.position.z)||i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||e.push(i))}return e}static findBestPass(e,t){const i=s.$.getTimeManager();if(t.length<=0||!t[0]||void 0===t[0].minAz)return s.$.getUiManager().toast("Sensor's format incorrect. Did you select a sensor first?",l.pc.critical),[];const a=t[0];let n=0;const o=s.$.getCatalogManager().calcSatrec(e),r=[],c=M.hJ/(o.no*M.hJ/M.DD);let d=0,u=null,g=null,h=null,p=null,m=a.maxRng,v=0,b=!1,f=!1;const S=(e,t)=>{const o=it.h.getRae(e,t,a);if(it.h.checkIsInView(a,o)){const l=i.getOffsetTimeObj(n-5e3);let r=it.h.getRae(l,t,a),c=it.h.checkIsInView(a,r);if(c){const l=i.getOffsetTimeObj(n+5e3);if(r=it.h.getRae(l,t,a),c=it.h.checkIsInView(a,r),!c){if(f=o.el<=3.5,null==p)return{sortTime:null,SATELLITE_ID:null,PASS_SCORE:null,START_DATE:null,START_TIME:null,START_AZIMUTH:null,START_ELEVATION:null,START_RANGE:null,STOP_DATE:null,STOP_TIME:null,STOP_AZIMTUH:null,STOP_ELEVATION:null,STOP_RANGE:null,TIME_IN_COVERAGE_SECONDS:null,MINIMUM_RANGE:null,MAXIMUM_ELEVATION:null,SENSOR_TO_SUN_AZIMUTH:null,SENSOR_TO_SUN_ELEVATION:null};d=Math.min((e.getTime()-p.getTime())/1e3/60*10/8,10);let i=Math.min(v/50*10,10);i*=b&&f?2:1,d+=i,d+=Math.min(7500/m,10);let n=0;n=(e.getTime()-p.getTime())/1e3||0;const l=s.$.getScene(),r=(0,M.Eg)(e,{x:l.sun.position[0],y:l.sun.position[1],z:l.sun.position[2]},a);return{sortTime:p.getTime(),SATELLITE_ID:parseInt(t.satnum).toString(),PASS_SCORE:d.toFixed(1),START_DATE:p,START_TIME:p,START_AZIMUTH:u,START_ELEVATION:g,START_RANGE:h,STOP_DATE:e,STOP_TIME:e,STOP_AZIMTUH:o.az.toFixed(0),STOP_ELEVATION:o.el.toFixed(1),STOP_RANGE:o.rng.toFixed(0),TIME_IN_COVERAGE_SECONDS:n,MINIMUM_RANGE:m.toFixed(0),MAXIMUM_ELEVATION:v.toFixed(1),SENSOR_TO_SUN_AZIMUTH:r.az.toFixed(1),SENSOR_TO_SUN_ELEVATION:r.el.toFixed(1)}}}else o.el<=3.5&&(b=!0),p=e,u=o.az.toFixed(0),g=o.el.toFixed(1),h=o.rng.toFixed(0);v<o.el&&(v=o.el),m>o.rng&&(m=o.rng)}return{sortTime:null,SATELLITE_ID:null,PASS_SCORE:null,START_DATE:null,START_TIME:null,START_AZIMUTH:null,START_ELEVATION:null,START_RANGE:null,STOP_DATE:null,STOP_TIME:null,STOP_AZIMTUH:null,STOP_ELEVATION:null,STOP_RANGE:null,TIME_IN_COVERAGE_SECONDS:null,MINIMUM_RANGE:null,MAXIMUM_ELEVATION:null,SENSOR_TO_SUN_AZIMUTH:null,SENSOR_TO_SUN_ELEVATION:null}};for(let e=0;e<604800;e+=5){n=1e3*e;const t=i.getOffsetTimeObj(n);if(r.length<=5e3){const i=S(t,o);null!==i.PASS_SCORE&&(r.push(i),d=0,u=null,g=null,h=null,p=null,m=a.maxRng,v=0,b=!1,f=!1,e+=60*c*.75)}}return r}static findBestPasses(e,t){const i=(e=e.replace(/ /gu,",")).split(","),a=[];for(const e of i)try{if(void 0===e||null==e||""===e||" "===e)continue;const i=s.$.getCatalogManager().sccNum2Sat(parseInt(e)),n=rt.findBestPass(i,[t]);for(const e of n)a.push(e)}catch(e){console.debug(e)}a.sort(((e,t)=>t.sortTime-e.sortTime)),a.reverse(),a.forEach((e=>{delete e.sortTime}));for(const e of a)e.START_DATE=e.START_DATE.toISOString().split("T")[0],e.START_TIME=e.START_TIME.toISOString().split("T")[1].split(".")[0],e.STOP_DATE=e.STOP_DATE.toISOString().split("T")[0],e.STOP_TIME=e.STOP_TIME.toISOString().split("T")[1].split(".")[0];(0,at.g3)(a,"bestSatTimes")}findCsoBtnClick_(){const e=this.findCloseObjects();s.$.getUiManager().doSearch(e)}static findRaBtnClick_(){const e=ot.g.findReentry(s.$.getCatalogManager().objectCache).join(",");s.$.getUiManager().doSearch(e)}static analysisBptSumbit_(){const e=(0,o.gE)("analysis-bpt-sats").value,t=s.$.getSensorManager();t.isSensorSelected()?rt.findBestPasses(e,t.getSensor()):s.$.getUiManager().toast("You must select a sensor first!",l.pc.critical)}static setSensor_(e){const t=(0,o.gE)("analysis-bpt-submit");e?(t.disabled=!1,t.textContent="Generate Best Pass Times ▶"):(t.disabled=!0,t.textContent="Select Sensor First!")}}const ct=new rt;var dt=i(707),ut=i(5338);const gt=i.p+"../img/breakup.png";var ht,pt,mt=i(1579);!function(e){e[e.MeanAnomaly=1]="MeanAnomaly",e[e.RightAscensionOfAscendingNode=2]="RightAscensionOfAscendingNode",e[e.ArgumentOfPerigee=3]="ArgumentOfPerigee"}(ht||(ht={})),function(e){e[e.Near=0]="Near",e[e.Success=1]="Success",e[e.Error=2]="Error",e[e.Far=3]="Far"}(pt||(pt={}));class vt{constructor(e,t,i,a,s,n,o){this.sat=e,this.now=s,this.goalLat=t,this.goalLon=i,this.goalDirection=a,this.newMeana=null,this.newArgPer=null,this.goalAlt=n||null,this.raanOffset=o||0,this.lastLat=null,this.currentDirection=null,this.argPerCalcResults=null,this.meanACalcResults=null,this.raanCalcResults=null}rotateOrbitToLatLon(){return this.parseTle(),this.meanACalcResults=this.meanACalcLoop(this.now,this.goalDirection),this.meanACalcResults!==pt.Success?["Error","Failed to find a solution for Mean Anomaly"]:this.goalAlt>0&&this.argPerCalcLoop()!==pt.Success?["Error","Failed to find a solution for Argument of Perigee"]:(this.raanCalcResults=this.raanCalcLoop(this.raanOffset,this.now),this.raanCalcResults!==pt.Success?["Error","Failed to find a solution for Right Ascension of Ascending Node"]:[this.sat.tle1,this.sat.tle2])}argPerCalcLoop(){this.meanACalcResults=pt.Near;for(let e=0;e<3600;e+=1){let t=10*parseFloat(this.argPer)-100+e;if(t>3600&&(t-=3600),this.argPerCalcResults=this.argPerCalc(t.toString(),this.now),this.argPerCalcResults===pt.Success&&this.meanACalcResults===pt.Success&&this.currentDirection===this.goalDirection)break;if(this.argPerCalcResults===pt.Far&&(e+=49),this.argPerCalcResults===pt.Error)return pt.Error;if(this.meanACalcResults=this.meanACalcLoop2(),this.meanACalcResults===pt.Success)if(this.currentDirection!==this.goalDirection)e+=20;else if(this.argPerCalcResults===pt.Success)break;if(e=this.meanACalcResults===pt.Far?e+100:e,this.meanACalcResults===pt.Error)return pt.Error}return this.argPerCalcResults}meanACalcLoop2(){for(let e=0;e<5200;e+=1){if(this.meanACalcResults=this.meanACalc(e,this.now),this.meanACalcResults===pt.Success){if(this.currentDirection===this.goalDirection)break;e+=20}if(e=this.meanACalcResults===pt.Far?e+100:e,this.meanACalcResults===pt.Error)return pt.Error}return this.meanACalcResults}parseTle(){this.intl=this.sat.tle1.substring(9,17),this.epochyr=this.sat.tle1.substring(18,20),this.epochday=this.sat.tle1.substring(20,32),this.meanmo=this.sat.tle2.substring(52,63),this.argPer=mt.V.pad0(this.sat.argOfPerigee.toFixed(4),8),this.inc=mt.V.pad0(this.sat.inclination.toFixed(4),8),this.ecen=this.sat.eccentricity.toFixed(7).substring(2,9),this.TLE1Ending=this.sat.tle1.substring(32,71)}meanACalcLoop(e,t){let i=pt.Near;for(let a=0;a<5200;a+=1){if(i=this.meanACalc(a,e),i===pt.Success){if(this.currentDirection===t)break;a+=20}i===pt.Far&&(a+=100)}return i}raanCalcLoop(e,t){let i=pt.Near;for(let a=0;a<52e3&&(i=this.raanCalc(a,e,t),i!==pt.Success);a+=1)i===pt.Far&&(a+=1e3);return i}meanACalc(e,t){const i=this.sat;let a=i.satrec||M.j0.createSatrec(i.tle1,i.tle2);e/=10;const s=mt.V.pad0(e.toFixed(4),8),n=mt.V.pad0(i.rightAscension.toFixed(4),8),o=this.newArgPer?mt.V.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):mt.V.pad0(i.argOfPerigee.toFixed(4),8),l=i.tle1.substring(32,71),r=`1 ${i.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${l}`,c=`2 ${i.sccNum} ${this.inc} ${n} ${this.ecen} ${o} ${s} ${this.meanmo}    10`;a=M.j0.createSatrec(r,c);const d=this.getOrbitByLatLonPropagate(t,a,ht.MeanAnomaly);return d===pt.Success&&(i.tle1=r,i.tle2=c,this.newMeana=s),d}getOrbitByLatLonPropagate(e,t,i){const{m:a,gmst:s}=it.h.calculateTimeVariables(e,t),n=M.j0.propagate(t,a).position;if(isNaN(n.x)||isNaN(n.y)||isNaN(n.z))return pt.Error;const o=(0,M.tc)(n,s),{lat:l,lon:r,alt:c}=o;if(this.lastLat=this.lastLat?this.lastLat:l,i===ht.MeanAnomaly){if(l===this.lastLat)return 0;l>this.lastLat&&(this.currentDirection="N"),l<this.lastLat&&(this.currentDirection="S"),this.lastLat=l}return i===ht.MeanAnomaly&&l>this.goalLat-vt.MAX_LAT_ERROR&&l<this.goalLat+vt.MAX_LAT_ERROR||i===ht.RightAscensionOfAscendingNode&&r>this.goalLon-vt.MAX_LON_ERROR&&r<this.goalLon+vt.MAX_LON_ERROR||i===ht.ArgumentOfPerigee&&c>this.goalAlt-vt.MAX_ALT_ERROR&&c<this.goalAlt+vt.MAX_ALT_ERROR?pt.Success:(i!==ht.MeanAnomaly||l>this.goalLat-11&&l<this.goalLat+11)&&(i!==ht.RightAscensionOfAscendingNode||r>this.goalLon-11&&r<this.goalLon+11)?i===ht.ArgumentOfPerigee&&(c<this.goalAlt-100||c>this.goalAlt+100)?pt.Far:pt.Near:pt.Far}raanCalc(e,t,i){const a=e;e=(e/=100)>360?e-360:e;const s=mt.V.pad0(e.toFixed(4),8),n=this.newArgPer?mt.V.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):mt.V.pad0(this.sat.argOfPerigee.toFixed(4),8),o=`1 ${this.sat.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${this.TLE1Ending}`,l=`2 ${this.sat.sccNum} ${this.inc} ${s} ${this.ecen} ${n} ${this.newMeana} ${this.meanmo}    10`,r=M.j0.createSatrec(o,l),c=this.getOrbitByLatLonPropagate(i,r,ht.RightAscensionOfAscendingNode);if(c===pt.Success){e=(e=(e=a/100+t)>360?e-360:e)<0?e+360:e;const i=mt.V.pad0(e.toFixed(4),8),s=`2 ${this.sat.sccNum} ${this.inc} ${i} ${this.ecen} ${n} ${this.newMeana} ${this.meanmo}    10`;this.sat.tle1=o,this.sat.tle2=s}return c}argPerCalc(e,t){const i=this.newMeana,a=mt.V.pad0(this.sat.rightAscension.toFixed(4),8);e=mt.V.pad0((parseFloat(e)/10).toFixed(4),8);const s=`1 ${this.sat.sccNum}U ${this.intl} ${this.epochyr}${this.epochday}${this.TLE1Ending}`,n=`2 ${this.sat.sccNum} ${this.inc} ${a} ${this.ecen} ${e} ${i} ${this.meanmo}    10`,o=M.j0.createSatrec(s,n),l=this.getOrbitByLatLonPropagate(t,o,ht.ArgumentOfPerigee);return l===pt.Success&&(this.sat.tle1=s,this.sat.tle2=n,this.newArgPer=e),l}}vt.MAX_LAT_ERROR=.1,vt.MAX_LON_ERROR=.1,vt.MAX_ALT_ERROR=30;var bt=i(5897),ft=i(8240);class St extends u.s{constructor(){super(),this.dependencies_=[g.A.name],this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=gt,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat(l.Z.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;if((null==t?void 0:t.apogee)-(null==t?void 0:t.perigee)>this.maxDifApogeeVsPerigee_)return f.J.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=s.$.html`
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
  </div>`,this.helpTitle="Breakup Menu",this.helpBody=s.$.html`The Breakup Menu is a tool for simulating the breakup of a satellite.
  <br><br>
  By modifying duplicating and modifying a satellite's orbit we can model the breakup of a satellite.
  After selecting a satellite and opening the menu, the user can select:
  <ul style="margin-left: 40px;">
    <li>Inclination Variation</li>
    <li>RAAN Variation</li>
    <li>Period Variation</li>
    <li>Number of Breakup Pieces</li>
  </ul>
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`,this.selectSatManager_=s.$.getPlugin(g.A)}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("breakup").addEventListener("submit",(e=>{e.preventDefault(),(0,b.Cs)((()=>this.onSubmit_()))}))}}),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{(null==e?void 0:e.isSatellite())?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonActive&&(this.closeSideMenu(),f.J.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonActive&&this.updateSccNumInMenu_()):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}updateSccNumInMenu_(){if(!this.isMenuButtonActive)return;const e=this.selectSatManager_.getSelectedSat(l.Z.EXTRA_ONLY);(null==e?void 0:e.isSatellite())&&((0,o.gE)("hc-scc").value=e.sccNum)}onSubmit_(){const{simulationTimeObj:e}=s.$.getTimeManager(),t=s.$.getCatalogManager(),{satId:i,breakupCount:a,rascVariation:n,incVariation:o,meanmoVariation:l}=St.getFormData_(t),r=t.getSat(i),c=r,d=it.h.calculateTimeVariables(e).gmst,u=(0,M.tc)(r.position,d),g=u.lat,h=u.lon,p=it.h.getDirection(r,e);"Error"===p&&f.J.warn("Cannot calculate direction of satellite. Try again later.");const m=bt.V.currentEpoch(e);if(r.tle1=r.tle1.substring(0,18)+m[0]+m[1]+r.tle1.substring(32),s.$.getMainCamera().isAutoPitchYawToTarget=!1,r.apogee-r.perigee>this.maxDifApogeeVsPerigee_)return void f.J.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const v=r.apogee-r.perigee<300?0:u.alt,b=new vt(r,g,h,p,e,v).rotateOrbitToLatLon(),S=b[0],E=b[1],_=new M.mJ(Object.assign(Object.assign({},r),{id:i,tle1:S,tle2:E,active:!0}));t.objectCache[i]=_,t.satCruncher.postMessage({typ:ft.XY.SAT_EDIT,id:i,tle1:S,tle2:E});const y=s.$.getOrbitManager();y.changeOrbitBufferData(i,S,E);const x=15e-5,w=r.eccentricity;let C=0;for(let i=0;i<=4&&!(C>=a);i++){const s=M.e2.convert6DigitToA5((ut.v.ANALYST_START_ID+C).toString()),d=t.sccNum2Id(s);t.getObject(d);const m=c,v=-n/2+n*(i/4),b=r.apogee-r.perigee<300?0:u.alt;let S=new vt(m,g,h,p,e,b,v).rotateOrbitToLatLon();if("Error"===S[0]&&(S=new vt(m,g,h,p,new Date(e.getTime()+1),b,v).rotateOrbitToLatLon(),"Error"===S[0]))return void f.J.error(new Error(S[1]),"breakup.ts","Error creating breakup!");let _=S[0],T=S[1];for(;C<(i+1)*a/4;C++){let i=parseFloat(E.substring(8,16));i=i+Math.random()*o*2-o;const a=i.toFixed(4).padStart(8,"0");if(8!==a.length)throw new Error(`Inclination length is not 8 - ${a} - ${E}`);m.eccentricity=w,m.eccentricity+=Math.random()*x*2-x;let s=parseFloat(T.substring(52,62));s=s+Math.random()*l*2-l;const n=s.toFixed(8).padStart(11,"0");if(11!==n.length)throw new Error(`meanmo length is not 11 - ${n} - ${T}`);const r=M.e2.convert6DigitToA5((ut.v.ANALYST_START_ID+C).toString()),c=t.sccNum2Id(r);if(_=`1 ${r}${_.substring(7)}`,T=`2 ${r} ${a} ${T.substring(17,52)}${n}${T.substring(63)}`,69!==_.length)throw new Error(`Invalid tle1: length is not 69 - ${_}`);if(69!==T.length)throw new Error(`Invalid tle1: length is not 69 - ${T}`);let d;try{d=new M.mJ(Object.assign(Object.assign({},t.objectCache[c]),{id:c,tle1:_,tle2:T,active:!0}))}catch(e){return void f.J.error(e,"breakup.ts","Error creating breakup!")}it.h.altitudeCheck(d.satrec,e)>1?(t.objectCache[c]=d,t.satCruncher.postMessage({typ:ft.XY.SAT_EDIT,id:c,active:!0,tle1:_,tle2:T}),y.changeOrbitBufferData(c,_,T)):f.J.warn("Breakup Generator Failed")}}a>settingsManager.searchLimit&&(settingsManager.searchLimit=a),s.$.getUiManager().doSearch(`${r.sccNum},Analyst`)}static getFormData_(e){const t=e.sccNum2Id((0,o.gE)("hc-scc").value),i=parseFloat((0,o.gE)("hc-per").value),a=parseFloat((0,o.gE)("hc-inc").value),s=parseFloat((0,o.gE)("hc-raan").value);return{satId:t,breakupCount:parseInt((0,o.gE)("hc-count").value),rascVariation:s,incVariation:a,meanmoVariation:i}}}class Et{static getColors(e){let t,i;switch(e){case"Top Secret//SCI":t="#fce93a",i="black";break;case"Top Secret":t="#ff8c00",i="black";break;case"Secret":t="#ff0000",i="white";break;case"Confidential":t="#0033a0",i="white";break;case"CUI":t="#512b85",i="white";break;case"Unclassified":t="#007a33",i="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:i}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class Mt extends u.s{constructor(){super(...arguments),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1,this.containerDomId="classification-container",this.textStringDomId="classification-string",this.containerHeight=20}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateString(e=this.classificationString_,t="#ffffff",i="#000000"){this.isClassificationContainerLoaded_||this.createContainer_(),""===e?((0,o.gE)(this.containerDomId).style.display="none",this.updateTopMenuHeight_(!1)):((0,o.gE)(this.containerDomId).style.display="flex",this.updateTopMenuHeight_(!0)),(0,o.gE)(this.textStringDomId).innerHTML=e;const a=(0,o.gE)(this.containerDomId);if(a.style.fontWeight="500",Et.isValidClassification(e)){const a=Et.getColors(e);t=a.backgroundColor,i=a.color}a.style.backgroundColor=t,a.style.color=i,this.classificationString_=e}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerInit,cbName:this.constructor.name,cb:this.uiManagerInit_.bind(this)})}createContainer_(){const e=document.createElement("div");e.innerHTML=s.$.html`<span id="${this.textStringDomId}"></span>`,e.id=this.containerDomId,e.style.cssText=`\n      height: ${this.containerHeight}px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      `,s.$.containerRoot.insertBefore(e,s.$.containerRoot.firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr?(this.createContainer_(),this.updateString()):f.J.log("Classification string is empty so not loading classification bar")}updateTopMenuHeight_(e){this.isExpanded_!==e&&(document.documentElement.style.setProperty("--classification-bar-height",`${e?this.containerHeight:-this.containerHeight}px`),this.isExpanded_=e)}}new Mt;const _t=i.p+"../img/collisions.png";var yt=i(6186),xt=i.n(yt),wt=i(2155),Ct=i.n(wt),Tt=i(7433),At=i.n(Tt),$t=i(8626),kt=i.n($t),Lt=i(8990),Rt=i.n(Lt),It=i(9827),Nt=i.n(It),Ot=i(2359),Pt={};Pt.styleTagTransform=Nt(),Pt.setAttributes=kt(),Pt.insert=At().bind(null,"head"),Pt.domAPI=Ct(),Pt.insertStyleElement=Rt(),xt()(Ot.A,Pt),Ot.A&&Ot.A.locals&&Ot.A.locals;class Dt extends u.s{constructor(){super(...arguments),this.collisionDataSrc="./tle/SOCRATES.json",this.selectSatIdOnCruncher_=null,this.collisionList_=[],this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=_t,this.bottomIconLabel="Collisions",this.sideMenuElementName="collisions-menu",this.sideMenuElementHtml=s.$.html`
  <div id="collisions-menu" class="side-menu-parent start-hidden text-select">
    <div id="collisions-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible Collisions</h5>
        <table id="collisions-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=s.$.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.dragOptions={isDraggable:!0,minWidth:540,maxWidth:650},this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.parseCollisionData_()}}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:this.uiManagerFinal_.bind(this)}),s.$.register({event:l.kR.onCruncherMessage,cbName:this.constructor.name,cb:()=>{var e;null!==this.selectSatIdOnCruncher_&&(null===(e=s.$.getPlugin(g.A))||void 0===e||e.selectSat(this.selectSatIdOnCruncher_),this.selectSatIdOnCruncher_=null)}})}uiManagerFinal_(){(0,o.gE)(this.sideMenuElementName).addEventListener("click",(e=>{(0,b.Cs)((()=>{var t;const i=e.target.parentElement;if(!i.classList.contains("collisions-object"))return;const a=null===(t=i.dataset)||void 0===t?void 0:t.row;null!==a&&this.eventClicked_(parseInt(a))}))}))}parseCollisionData_(){0===this.collisionList_.length&&fetch(this.collisionDataSrc).then((e=>{e.json().then((e=>{this.collisionList_=e,this.createTable_(),0===this.collisionList_.length&&f.J.warn("No collisions data found!")}))}))}eventClicked_(e){const t=new Date;s.$.getTimeManager().changeStaticOffset(new Date(this.collisionList_[e].toca).getTime()-t.getTime()-3e4),s.$.getMainCamera().isAutoPitchYawToTarget=!1;const i=this.collisionList_[e].sat1.padStart(5,"0"),a=this.collisionList_[e].sat2.padStart(5,"0");s.$.getUiManager().doSearch(`${i},${a}`);const n=s.$.getCatalogManager();this.selectSatIdOnCruncher_=n.sccNum2Id(parseInt(i))}createTable_(){try{const e=(0,o.gE)("collisions-table");e.innerHTML="",Dt.createHeaders_(e),this.createBody_(e)}catch(e){f.J.warn("Error processing SOCRATES data!")}}createBody_(e){for(let t=0;t<this.collisionList_.length;t++)this.createRow_(e,t)}static createHeaders_(e){const t=e.insertRow(),i=["TOCA","#1","#2","Max Prob","Min Range (km)","Rel Speed (km/s)"];for(const e of i){const i=t.insertCell();i.appendChild(document.createTextNode(e)),i.setAttribute("style","text-decoration: underline")}}createRow_(e,t){const i=e.insertRow();return i.setAttribute("class","collisions-object link"),i.setAttribute("data-row",t.toString()),Dt.createCell_(i,this.collisionList_[t].toca.slice(0,19).replace("T"," ")),Dt.createCell_(i,this.collisionList_[t].sat1),Dt.createCell_(i,this.collisionList_[t].sat2),Dt.createCell_(i,this.collisionList_[t].maxProb.toFixed(3)),Dt.createCell_(i,this.collisionList_[t].minRng.toString()),Dt.createCell_(i,this.collisionList_[t].relSpeed.toFixed(2)),i}static createCell_(e,t){e.insertCell().appendChild(document.createTextNode(t))}}var Ft=i(4711),Ut=i(1548);const Bt=i.p+"../img/colors.png";class Ht extends u.s{constructor(){super(...arguments),this.bottomIconImg=Bt,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=s.$.html`
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
  </div>`,this.helpTitle="Colors Menu",this.helpBody=s.$.html`The Colors Menu is a place to change the color theme used to render the objects.
<br><br>
The various themes can change the colors based on the objects' orbits, objects' characteristics, or the objects' relation to sun and/or earth.
`,this.rmbL1ElementName="colors-rmb",this.rmbL1Html=s.$.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Color Scheme &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.rmbMenuOrder=50,this.rmbL2ElementName="colors-rmb-menu",this.rmbL2Html=s.$.html`
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
  </ul>`,this.rmbCallback=e=>{switch(e){case"colors-confidence-rmb":Ht.colorsMenuClick("confidence");break;case"colors-rcs-rmb":Ht.colorsMenuClick("rcs");break;case"colors-density-rmb":Ht.colorsMenuClick("neighbors");break;case"colors-starlink-rmb":Ht.colorsMenuClick("starlink");break;case"colors-sunlight-rmb":Ht.colorsMenuClick("sunlight");break;case"colors-country-rmb":Ht.colorsMenuClick("countries");break;case"colors-velocity-rmb":Ht.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":Ht.colorsMenuClick("elset-age");break;default:Ht.colorsMenuClick("default")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("colors-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.color;Ht.colorsMenuClick(t)}))}))}})}}Ht.colorsMenuClick=e=>{var t;const i=s.$.getCatalogManager(),a=s.$.getColorSchemeManager(),n=s.$.getUiManager();switch(null===(t=s.$.getPlugin(g.A))||void 0===t||t.selectSat(-1),"sunlight"!==e&&i.satCruncher.postMessage({isSunlightView:!1,typ:ft.XY.SUNLIGHT_VIEW}),e){case"confidence":Ut.b.change("confidence"),a.setColorScheme(a.confidence,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"velocity":Ut.b.change("velocity"),a.setColorScheme(a.velocity,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"sunlight":i.satCruncher.postMessage({isSunlightView:!0,typ:ft.XY.SUNLIGHT_VIEW}),Ut.b.change("sunlight"),n.colorSchemeChangeAlert(a.sunlight),(0,Ft.p)({cruncher:i.satCruncher,cb:()=>{a.setColorScheme(a.sunlight,!0)},validationFunc:e=>e.satInSun});break;case"near-earth":Ut.b.change("near"),a.setColorScheme(a.leo,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"deep-space":Ut.b.change("deep"),a.setColorScheme(a.geo,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"elset-age":(0,b.Cs)((()=>{Ut.b.change("ageOfElset"),a.setColorScheme(a.ageOfElset,!0),n.colorSchemeChangeAlert(a.currentColorScheme)}));break;case"lost-objects":(0,o.gE)("search").value="",(0,b.Cs)((()=>{settingsManager.lostSatStr="",a.setColorScheme(a.lostobjects,!0),(0,o.gE)("search").value=settingsManager.lostSatStr,n.colorSchemeChangeAlert(a.currentColorScheme),n.doSearch((0,o.gE)("search").value)}));break;case"rcs":Ut.b.change("rcs"),a.setColorScheme(a.rcs,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"starlink":Ut.b.change("starlink"),a.setColorScheme(a.starlink,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"smallsats":Ut.b.change("small"),a.setColorScheme(a.smallsats,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"neighbors":Ut.b.change("neighbors"),a.setColorScheme(a.neighbors,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;case"countries":Ut.b.change("countries"),null!==s.$.getGroupsManager().selectedGroup?a.setColorScheme(a.groupCountries,!0):a.setColorScheme(a.countries,!0),n.colorSchemeChangeAlert(a.currentColorScheme);break;default:Ut.b.change("default"),a.setColorScheme(a.default,!0),n.colorSchemeChangeAlert(a.currentColorScheme)}s.$.getUiManager().hideSideMenus()};const zt=new Ht;var jt=i(4193),Gt=i(1944);const Vt=i.p+"../img/about.png";class Xt extends u.s{constructor(){super(),this.dependencies_=[g.A.name],this.bottomIconCallback=()=>{if(this.verifySatelliteSelected()&&this.isMenuButtonActive){const e=s.$.getCatalogManager().getObject(this.selectSatManager_.selectedSat,l.Z.EXTRA_ONLY);(0,o.gE)(`${this.formPrefix_}-scc`).value=e.sccNum}},this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=Vt,this.bottomIconLabel="Debris Screening",this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=s.$.html`
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
`,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.helpTitle="Debris Screening",this.helpBody=s.$.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=s.$.html`<img src="${Vt}" />
  `,this.selectSatManager_=s.$.getPlugin(g.A)}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)(`${this.sideMenuElementName}-form`).addEventListener("submit",(e=>{e.preventDefault(),(0,b.Cs)((()=>this.onFormSubmit()))})),(0,o.gE)(`${this.sideMenuElementName}-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,b.Cs)((()=>this.onVisClick()))})),(0,o.gE)(`${this.sideMenuElementName}-clear-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,b.Cs)((()=>Xt.onClearVisClick()))}))}}),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled()}})}onVisClick(){const e=parseFloat((0,o.gE)(`${this.formPrefix_}-u`).value),t=parseFloat((0,o.gE)(`${this.formPrefix_}-v`).value),i=parseFloat((0,o.gE)(`${this.formPrefix_}-w`).value);s.$.getScene().searchBox.setCubeSize(e,t,i)}static onClearVisClick(){s.$.getScene().searchBox.setCubeSize(0,0,0)}onFormSubmit(){const e=s.$.getCatalogManager().sccNum2Id(parseInt((0,o.gE)(`${this.formPrefix_}-scc`).value)),t=parseFloat((0,o.gE)(`${this.formPrefix_}-u`).value),i=parseFloat((0,o.gE)(`${this.formPrefix_}-v`).value),a=parseFloat((0,o.gE)(`${this.formPrefix_}-w`).value),n=parseFloat((0,o.gE)(`${this.formPrefix_}-time`).value),r=s.$.getCatalogManager().getObject(e,l.Z.SKIP_POS_VEL),c=s.$.getCatalogManager().objectCache.filter((e=>{if(!e.isSatellite())return!1;const t=e;return!(t.perigee>r.apogee||r.perigee>t.apogee)})).map((e=>e.id));let d=0,u=[];for(let e=0;e<60*n;e++){d=1e3*e*60;const n=s.$.getTimeManager().getOffsetTimeObj(d),{m:o}=it.h.calculateTimeVariables(n,r.satrec),g=M.j0.propagate(r.satrec,o);for(let e=0;e<c.length;e++){const o=s.$.getCatalogManager().getObject(c[e],l.Z.SKIP_POS_VEL);if(!(null==o?void 0:o.isSatellite()))continue;const r=o,{m:d}=it.h.calculateTimeVariables(n,r.satrec),h=M.j0.propagate(r.satrec,d);if(!h){c.splice(e,1);break}const p=Gt.i.sat2ric({position:g.position,velocity:g.velocity},{position:h.position,velocity:h.velocity});if(Math.abs(p.position[0])<t&&Math.abs(p.position[1])<i&&Math.abs(p.position[2])<a){console.log(`${r.sccNum} at ${new Date(n)}`),u.push(r.sccNum),c.splice(e,1);break}}}u=u.filter(((e,t,i)=>i.indexOf(e)===t));let g=u.join(",");g=g.replace(/,\s*$/u,""),s.$.getUiManager().doSearch(g)}}var Jt=i(5740);const Yt=i.p+"../img/debug.png";var Kt=i(6750),Wt=i(9786),Zt=i(7176),qt=i.n(Zt);class Qt extends u.s{constructor(){super(...arguments),this.isErudaVisible=!1,this.bottomIconImg=Yt,this.bottomIconElementName="menu-debug",this.bottomIconLabel="Debug",this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:500},this.helpTitle="Debug Menu",this.helpBody=s.$.html`The Debug Menu is used for debugging the app. It is probably not very useful unless you are assisting me with debugging an issue
  <br><br>
  Open Debug Menu allows you to access the console even when it is blocked by the browser. This is useful for debugging issues that only occur in the browser console.
  <br><br>
  Run Gremlins will run a series of tests to try to break the app. This kind of fuzz testing is useful for testing the app's robustness.`,this.sideMenuElementName="debug-menu",this.sideMenuElementHtml=s.$.html`
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
  `,this.gremlinsSettings={nb:1e5,delay:5},this.delayForCameraUpdates=1e3,this.lastCameraUpdate=0}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{var e,t,i,a;null===(e=(0,o.gE)("debug-console"))||void 0===e||e.addEventListener("click",(()=>{this.isErudaVisible?(qt().hide(),this.isErudaVisible=!1):(qt().show(),this.isErudaVisible=!0)})),null===(t=(0,o.gE)("debug-gremlins"))||void 0===t||t.addEventListener("click",(()=>{this.runGremlins()})),null===(i=(0,o.gE)("debug-cam-to-sat"))||void 0===i||i.addEventListener("click",(()=>{var e;if(s.$.getMainCamera()){const t=null===(e=s.$.getPlugin(g.A))||void 0===e?void 0:e.selectedSat;if(!t||-1===t)return;const i=s.$.getCatalogManager().getObject(t);if(i){const e=s.$.getMainCamera().getCameraPosition(i.position,s.$.getMainCamera().getCameraOrientation()),t=[i.position.x+e[0],i.position.y+e[1],i.position.z+e[2]];Kt.B.createRef2Ref([t[0],t[1],t[2]],[i.position.x,i.position.y,i.position.z],Wt.j.PURPLE)}}})),null===(a=(0,o.gE)("debug-cam-to-center"))||void 0===a||a.addEventListener("click",(()=>{const e=s.$.getMainCamera();if(e){const t=e.getCameraPosition();Kt.B.createRef2Ref(t,[0,0,0],Wt.j.PURPLE)}}))}})}addJs(){super.addJs(),s.$.register({event:l.kR.updateLoop,cbName:this.constructor.name,cb:()=>{if((new Date).getTime()-this.lastCameraUpdate<this.delayForCameraUpdates)return;const e=s.$.getMainCamera(),t=s.$.getPlugin(g.A);if(e&&t){const i=t.selectedSat,a=-1!==i?s.$.getCatalogManager().getObject(i):null,n=e.getCameraPosition(null==a?void 0:a.position);(0,o.AL)("debug-camera-position-x",`X: ${n[0].toFixed(2)}`),(0,o.AL)("debug-camera-position-y",`Y: ${n[1].toFixed(2)}`),(0,o.AL)("debug-camera-position-z",`Z: ${n[2].toFixed(2)}`),(0,o.AL)("debug-camera-distance-from-earth",`Distance from Center: ${e.getCameraDistance().toFixed(2)} km`),this.lastCameraUpdate=(new Date).getTime()}if(t.selectedSat>=0){const e=s.$.getCatalogManager().getObject(t.selectedSat);if(!e)return void console.warn("Satellite not found");const i=e.position;(0,o.AL)("debug-sat-position-x",`X: ${i.x.toFixed(2)}`),(0,o.AL)("debug-sat-position-y",`Y: ${i.y.toFixed(2)}`),(0,o.AL)("debug-sat-position-z",`Z: ${i.z.toFixed(2)}`)}}});const e=s.$.getInputManager().keyboard;e.registerKeyDownEvent({key:"F12",callback:()=>{e.isShiftPressed&&(this.isErudaVisible?(qt().hide(),this.isErudaVisible=!1,s.$.getSoundManager().play(h.A.TOGGLE_OFF)):(qt().show(),this.isErudaVisible=!0,s.$.getSoundManager().play(h.A.TOGGLE_ON)))}})}static getRandomInt_(e,t){return e=Number.isNaN(e)?0:Math.ceil(e),t=Number.isNaN(t)?100:Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}static defaultPositionSelector_(){return[Qt.getRandomInt_(0,Math.max(0,document.documentElement.clientWidth-1)),Qt.getRandomInt_(Math.max(0,document.documentElement.clientHeight-100),Math.max(0,document.documentElement.clientHeight-1))]}static canClick_(e){return void 0===e.parentElement||null==e.parentElement?null:"bmenu-item"===e.parentElement.className}startGremlins(){const e=Jt.species.clicker({canClick:Qt.canClick_,defaultPositionSelector:Qt.defaultPositionSelector_}),t=Jt.species.toucher({touchTypes:["gesture"],defaultPositionSelector:Qt.defaultPositionSelector_}),i=Jt.strategies.distribution({distribution:[.3,.3,.1,.1,.1,.1],delay:this.gremlinsSettings.delay});Jt.createHorde({species:[e,t,Jt.species.clicker(),Jt.species.toucher(),Jt.species.formFiller(),Jt.species.typer({log:!0,logger:console})],mogwais:[Jt.mogwais.alert(),Jt.mogwais.fps(),Jt.mogwais.gizmo({maxErrors:1e3})],strategies:[i]}).unleash()}runGremlins(){if(!(0,o.gE)("nav-footer"))throw new Error("nav-footer is missing");if(!(0,o.gE)("nav-footer-toggle"))throw new Error("nav-footer-toggle is missing");if(!(0,o.gE)("bottom-icons-container"))throw new Error("bottom-icons-container is missing");if(!(0,o.gE)("bottom-icons"))throw new Error("bottom-icons is missing");(0,o.gE)("nav-footer").style.height="200px",(0,o.gE)("nav-footer-toggle").style.display="none",(0,o.gE)("bottom-icons-container").style.height="200px",(0,o.gE)("bottom-icons").style.height="200px",this.startGremlins()}}const ei=i.p+"../img/gps.png";var ti=i(610),ii=i.n(ti),ai=i(8754);class si{static calculateDops(e){const t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},i=e.length;if(i<4)return t;const a=ii().rep([i,4],0);for(let t=1;t<=i;t++){const{az:i,el:s}=e[t-1],n=[Math.cos(s*M.up)*Math.sin(i*M.up),Math.cos(s*M.up)*Math.cos(i*M.up),Math.sin(s*M.up),1];ii().setBlock(a,[t-1,0],[t-1,3],[n])}const s=ii().dot(ii().transpose(a),a),n=ii().inv(s),o=Math.sqrt(n[0][0]+n[1][1]+n[2][2]),l=Math.sqrt(n[0][0]+n[1][1]),r=Math.sqrt(n[0][0]+n[1][1]+n[2][2]+n[3][3]),c=Math.sqrt(n[2][2]),d=Math.sqrt(n[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,i,a,s,n=10){if(void 0===i||void 0===a)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};null!=s||(s=0);const{gmst:o}=it.h.calculateTimeVariables(e),l=[];return t.forEach((e=>{const t=(0,M.Xm)({lon:a,lat:i,alt:s},(0,M.yW)(e.position,o)),r={az:t.az,el:t.el};r.el>n&&l.push(r)})),si.calculateDops(l)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");const t=(0,o.gE)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let i=t.insertRow(),a=i.insertCell();a.appendChild(document.createTextNode("Time"));let s=i.insertCell();s.appendChild(document.createTextNode("HDOP"));let n=i.insertCell();n.appendChild(document.createTextNode("PDOP"));let l=i.insertCell();l.appendChild(document.createTextNode("GDOP"));for(const o of e)i=t.insertRow(),a=i.insertCell(),a.appendChild(document.createTextNode((0,ai.i)(o.time,"isoDateTime",!0))),s=i.insertCell(),s.appendChild(document.createTextNode(o.dops.hdop)),n=i.insertCell(),n.appendChild(document.createTextNode(o.dops.pdop)),l=i.insertCell(),l.appendChild(document.createTextNode(o.dops.gdop))}static getDopsList(e,t,i,a,s,n){const o=[];for(let l=0;l<1440;l++){const r=e(60*l*M.If),c=si.getDops(r,t,i,a,s,n);o.push({time:r,dops:c})}return o}}class ni extends u.s{constructor(){super(...arguments),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=ei,this.bottomIconCallback=()=>{this.isMenuButtonActive&&(0,b.Cs)(ni.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=s.$.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
    <br><br>
    HDOP is the Horizontal Dilution of Precision. It is a measure of the accuracy of the horizontal position.
    <br><br>
    PDOP is the Position Dilution of Precision. It is a measure of the accuracy of the position.
    <br><br>
    GDOP is the Geometric Dilution of Precision. It is a measure of the accuracy of the position.
  `,this.sideMenuElementName="dops-menu",this.sideMenuElementHtml=s.$.html`
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
  </div>`,this.rmbL1ElementName="dops-rmb",this.rmbL1Html=s.$.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">DOPs &#x27A4;</a></li>
`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbL2ElementName="dops-rmb-menu",this.rmbL2Html=s.$.html`
  <ul class='dropdown-contents'>
    <li id="dops-curdops-rmb"><a href="#">Current GPS DOPs</a></li>
    <li id="dops-24dops-rmb"><a href="#">24 Hour GPS DOPs</a></li>
  </ul>
`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=s.$.getInputManager().mouse.latLon;const t=s.$.getInputManager().mouse.dragPosition;if(void 0===e||isNaN(e.lat)||isNaN(e.lon)){console.debug("latLon undefined!");const i=it.h.calculateTimeVariables(s.$.getTimeManager().simulationTimeObj).gmst;e=(0,M.tc)({x:t[0],y:t[1],z:t[2]},i)}const i=ni.getGpsSats(s.$.getCatalogManager(),s.$.getGroupsManager()),a=si.getDops(s.$.getTimeManager().simulationTimeObj,i,e.lat,e.lon,0,settingsManager.gpsElevationMask);s.$.getUiManager().toast(`HDOP: ${a.hdop}<br/>VDOP: ${a.vdop}<br/>PDOP: ${a.pdop}<br/>GDOP: ${a.gdop}<br/>TDOP: ${a.tdop}`,l.pc.normal,!0)}break;case"dops-24dops-rmb":{const e=s.$.getInputManager().mouse.latLon;if(this.isMenuButtonActive){(0,b.Cs)(ni.updateSideMenu),this.setBottomIconToEnabled();break}(0,o.gE)("dops-lat").value=e.lat.toFixed(3),(0,o.gE)("dops-lon").value=e.lon.toFixed(3),(0,o.gE)("dops-alt").value="0",(0,o.gE)("dops-el").value=settingsManager.gpsElevationMask.toString(),s.$.runEvent(l.kR.bottomMenuClick,this.bottomIconElementName)}}}}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("dops-form").addEventListener("submit",(e=>{e.preventDefault(),ni.updateSideMenu()}))}})}static updateSideMenu(){const e=s.$.getGroupsManager(),t=s.$.getCatalogManager(),i=s.$.getTimeManager(),a=parseFloat((0,o.gE)("dops-lat").value),n=parseFloat((0,o.gE)("dops-lon").value),l=parseFloat((0,o.gE)("dops-alt").value),r=parseFloat((0,o.gE)("dops-el").value);settingsManager.gpsElevationMask=r;const c=ni.getGpsSats(t,e),d=si.getDopsList((e=>i.getOffsetTimeObj(e)),c,a,n,l,r);si.updateDopsTable(d)}static getGpsSats(e,t){var i,a;const s=null!==(i=(a=t.groupList).GPSGroup)&&void 0!==i?i:a.GPSGroup=t.createGroup(r.M.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),n=[];return s.ids.forEach((t=>{const i=e.getSat(t);i&&n.push(i)})),n}}const oi=new ni,li=i.p+"../img/edit.png";class ri extends u.s{constructor(){super(),this.dependencies_=[g.A.name],this.isRequireSatelliteSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=s.$.html`The Edit Satellite Menu is used to edit the satellite data.
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
    </ul>`,this.sideMenuElementName="editSat-menu",this.sideMenuElementHtml=s.$.html`
    <div id="editSat-menu" class="side-menu-parent start-hidden text-select">
      <div id="editSat-content" class="side-menu">
        <div class="row">
          <h5 class="center-align">Edit Satellite</h5>
          <form id="editSat">
            <div class="input-field col s12">
              <input disabled value="AAAAA" id="${ri.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${ri.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${ri.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${ri.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${ri.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ri.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${ri.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ri.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${ri.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${ri.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${ri.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${ri.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${ri.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ri.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${ri.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${ri.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${ri.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${ri.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${ri.elementPrefix}-per" class="active">Period</label>
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
        <div id="${ri.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=li,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.populateSideMenu_()},this.dragOptions={isDraggable:!0},this.isRmbOnSat=!0,this.rmbMenuOrder=2,this.rmbL1ElementName="edit-rmb",this.rmbL1Html=s.$.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Edit Sat &#x27A4;</a></li>`,this.rmbCallback=(e,t)=>{if(null==t)throw new Error("clickedSat is undefined");switch(e){case"set-pri-sat-rmb":this.selectSatManager_.selectSat(t);break;case"set-sec-sat-rmb":this.selectSatManager_.setSecondarySat(t);break;case"edit-sat-rmb":this.selectSatManager_.selectSat(t),this.isMenuButtonActive||s.$.getUiManager().bottomIconPress({id:this.bottomIconElementName})}},this.rmbL2ElementName="edit-rmb-menu",this.rmbL2Html=s.$.html`
    <ul class='dropdown-contents'>
      <li id="set-pri-sat-rmb"><a href="#">Set as Primary Sat</a></li>
      <li id="set-sec-sat-rmb"><a href="#">Set as Secondary Sat</a></li>
      <li id="edit-sat-rmb"><a href="#">Edit Satellite</a></li>
    </ul>`,this.selectSatManager_=s.$.getPlugin(g.A)}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:"editSat",cb:()=>{(0,o.gE)("editSat-newTLE").addEventListener("click",this.editSatNewTleClick_.bind(this)),(0,o.gE)("editSat").addEventListener("submit",(e=>{e.preventDefault(),ri.editSatSubmit()})),(0,o.gE)(`${ri.elementPrefix}-per`).addEventListener("change",(()=>{const e=(0,o.gE)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,o.gE)("es-meanmo").value=t.toFixed(8)})),(0,o.gE)(`${ri.elementPrefix}-meanmo`).addEventListener("change",(()=>{const e=(0,o.gE)(`${ri.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,o.gE)(`${ri.elementPrefix}-per`).value=t})),(0,o.gE)("editSat-save").addEventListener("click",ri.editSatSaveClick),(0,o.gE)("editSat-open").addEventListener("click",(()=>{s.$.getSoundManager().play(h.A.MENU_BUTTON),(0,o.gE)("editSat-file").click()})),(0,o.gE)("editSat-file").addEventListener("change",(e=>{window.FileReader&&(ri.doReaderActions_(e),e.preventDefault())})),(0,o.gE)(`${ri.elementPrefix}-error`).addEventListener("click",(()=>{(0,o.gE)(`${ri.elementPrefix}-error`).style.display="none"}))}})}addJs(){super.addJs(),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{e||(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}})}static doReaderActions_(e){try{const t=new FileReader;t.onload=ri.readerOnLoad_,t.readAsText(e.target.files[0])}catch(e){f.J.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad_(e){if(2!==e.target.readyState)return;if(e.target.error)return void f.J.warn("Error while reading file!");const t=s.$.getTimeManager(),i=s.$.getOrbitManager(),a=s.$.getUiManager(),n=JSON.parse(e.target.result),o=parseInt(mt.V.pad0(n.tle1.substr(2,5).trim(),5)),r=s.$.getCatalogManager().sccNum2Sat(o);let c;try{c=M.j0.createSatrec(n.tle1,n.tle2)}catch(e){return void f.J.error(e,"edit-sat.ts","Error creating satellite record!")}it.h.altitudeCheck(c,t.simulationTimeObj)>1?(s.$.getCatalogManager().satCruncher.postMessage({typ:ft.XY.SAT_EDIT,id:r.id,active:!0,tle1:n.tle1,tle2:n.tle2}),i.changeOrbitBufferData(r.id,n.tle1,n.tle2),r.active=!0):a.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.",l.pc.caution,!0)}populateSideMenu_(){const e=this.selectSatManager_.getSelectedSat(l.Z.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;(0,o.gE)(`${ri.elementPrefix}-scc`).value=t.sccNum;const i=t.inclination.toFixed(4).padStart(8,"0");(0,o.gE)(`${ri.elementPrefix}-inc`).value=i,(0,o.gE)(`${ri.elementPrefix}-year`).value=t.tle1.substr(18,2),(0,o.gE)(`${ri.elementPrefix}-day`).value=t.tle1.substr(20,12),(0,o.gE)(`${ri.elementPrefix}-meanmo`).value=t.tle2.substr(52,11),(0,o.gE)(`${ri.elementPrefix}-per`).value=(1440/parseFloat(t.tle2.substr(52,11))).toFixed(4);const a=t.rightAscension.toFixed(4).padStart(8,"0");(0,o.gE)(`${ri.elementPrefix}-rasc`).value=a,(0,o.gE)(`${ri.elementPrefix}-ecen`).value=t.eccentricity.toFixed(7).substr(2,7);const s=t.argOfPerigee.toFixed(4).padStart(8,"0");(0,o.gE)(`${ri.elementPrefix}-argPe`).value=mt.V.pad0(s,8),(0,o.gE)(`${ri.elementPrefix}-meana`).value=t.tle2.substr(43,8)}editSatNewTleClick_(){(0,b.Cs)(this.editSatNewTleClickFadeIn_.bind(this))}editSatNewTleClickFadeIn_(){const e=s.$.getTimeManager(),t=s.$.getUiManager();try{const i=s.$.getCatalogManager().sccNum2Id(parseInt((0,o.gE)(`${ri.elementPrefix}-scc`).value)),a=s.$.getCatalogManager().getObject(i);if(!a.isSatellite())return;const n=a,r=it.h.calculateTimeVariables(e.simulationTimeObj).gmst,c=(0,M.tc)(n.position,r),d=c.lon,u=c.lat,g=c.alt,h=it.h.getDirection(n,e.simulationTimeObj);"Error"===h&&t.toast("Cannot calculate direction of satellite. Try again later.",l.pc.caution);const p=e.simulationTimeObj,m=bt.V.currentEpoch(p);let v;n.tle1=n.tle1.substr(0,18)+m[0]+m[1]+n.tle1.substr(32),s.$.getMainCamera().isAutoPitchYawToTarget=!1,v=n.apogee-n.perigee<300?new vt(n,u,d,h,p).rotateOrbitToLatLon():new vt(n,u,d,h,p,g).rotateOrbitToLatLon();const b=v[0],f=v[1];if("Error"===b)return void t.toast(`${f}`,l.pc.critical,!0);s.$.getCatalogManager().satCruncher.postMessage({typ:ft.XY.SAT_EDIT,id:i,tle1:b,tle2:f}),s.$.getOrbitManager().changeOrbitBufferData(i,b,f);const S=this.selectSatManager_.getSelectedSat(l.Z.EXTRA_ONLY);if(!S.isSatellite())return;const E=S;(0,o.gE)(`${ri.elementPrefix}-scc`).value=E.sccNum;const _=E.inclination.toFixed(4).padStart(8,"0");(0,o.gE)(`${ri.elementPrefix}-inc`).value=mt.V.pad0(_,8),(0,o.gE)(`${ri.elementPrefix}-year`).value=E.tle1.substr(18,2),(0,o.gE)(`${ri.elementPrefix}-day`).value=E.tle1.substr(20,12),(0,o.gE)(`${ri.elementPrefix}-meanmo`).value=E.tle2.substr(52,11),(0,o.gE)(`${ri.elementPrefix}-per`).value=(1440/parseFloat(E.tle2.substr(52,11))).toFixed(4);const y=E.rightAscension.toFixed(4).padStart(8,"0");(0,o.gE)(`${ri.elementPrefix}-rasc`).value=y,(0,o.gE)(`${ri.elementPrefix}-ecen`).value=E.eccentricity.toFixed(7).substr(2,7);const x=E.argOfPerigee.toFixed(4).padStart(8,"0");(0,o.gE)(`${ri.elementPrefix}-argPe`).value=x,(0,o.gE)(`${ri.elementPrefix}-meana`).value=E.tle2.substr(43,8)}catch(e){f.J.warn(e)}}static editSatSubmit(){s.$.getSoundManager().play(h.A.MENU_BUTTON);const e=s.$.getCatalogManager();(0,o.gE)(`${ri.elementPrefix}-error`).style.display="none";const t=(0,o.gE)(`${ri.elementPrefix}-scc`).value,i=e.sccNum2Id(parseInt(t));null===i&&f.J.info("Not a Real Satellite");const a=e.getObject(i,l.Z.EXTRA_ONLY);if(!a.isSatellite())return;const n=a,r=n.tle1.substr(9,8),c=(0,o.gE)(`${ri.elementPrefix}-inc`).value,d=(0,o.gE)(`${ri.elementPrefix}-meanmo`).value,u=(0,o.gE)(`${ri.elementPrefix}-rasc`).value,g=(0,o.gE)(`${ri.elementPrefix}-ecen`).value,p=(0,o.gE)(`${ri.elementPrefix}-argPe`).value,m=(0,o.gE)(`${ri.elementPrefix}-meana`).value,v=(0,o.gE)(`${ri.elementPrefix}-year`).value,b=(0,o.gE)(`${ri.elementPrefix}-day`).value,{tle1:S,tle2:E}=M.rX.createTle({sat:n,inc:c,meanmo:d,rasc:u,argPe:p,meana:m,ecen:g,epochyr:v,epochday:b,intl:r,scc:t}),_=S,y=E;let x;try{x=M.j0.createSatrec(_,y)}catch(e){return void f.J.error(e,"edit-sat.ts","Error creating satellite record!")}it.h.altitudeCheck(x,s.$.getTimeManager().simulationTimeObj)>1?(e.satCruncher.postMessage({typ:ft.XY.SAT_EDIT,id:i,active:!0,tle1:_,tle2:y}),s.$.getOrbitManager().changeOrbitBufferData(i,_,y),n.active=!0,n.editTle(_,y),s.$.getMainCamera().zoomTarget=M.N$.GEO):s.$.getUiManager().toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.",l.pc.caution,!0)}static editSatSaveClick(e){const t=s.$.getCatalogManager();s.$.getSoundManager().play(h.A.EXPORT);try{const e=(0,o.gE)(`${ri.elementPrefix}-scc`).value,i=t.sccNum2Id(parseInt(e)),a=t.getObject(i,l.Z.EXTRA_ONLY),s={tle1:a.tle1,tle2:a.tle2},n=JSON.stringify(s),r=new Blob([n],{type:"text/plain;charset=utf-8"});(0,st.saveAs)(r,`${e}.tle`)}catch(e){}e.preventDefault()}}ri.elementPrefix="es";class ci{constructor(){this.dependencies_=[],this.deadzone=.55,this.buttonsPressedHistory=[],this.buttonsPressed=[]}init(){window.addEventListener("gamepadconnected",(e=>{settingsManager.cruncherReady?this.initializeGamepad(e.gamepad):s.$.register({event:l.kR.uiManagerInit,cbName:this.constructor.name,cb:()=>this.initializeGamepad(e.gamepad)})})),window.addEventListener("gamepaddisconnected",(()=>{s.$.getUiManager().toast("Gamepad disconnected",l.pc.critical),this.currentController=null}))}initializeGamepad(e){s.$.getUiManager().toast("Gamepad connected",l.pc.normal),this.currentController||s.$.register({event:l.kR.updateLoop,cbName:this.constructor.name,cb:this.updateGamepad.bind(this)}),this.currentController=e}updateGamepad(e){null!=e||(e=0);const t=ci.getController(e);null!==t&&(this.currentController=t,this.updateZoom_(),this.updateLeftStick_(),this.updateRightStick_(),this.updateButtons_())}updateButtons_(){this.currentController.buttons.forEach(((e,t)=>{if(e.pressed&&!this.buttonsPressed[t])switch(this.buttonsPressed[t]=!0,this.buttonsPressedHistory.push(t),this.buttonsPressedHistory.length>8&&this.buttonsPressedHistory.shift(),t){case 0:this.btnA_();break;case 1:this.btnB_();break;case 2:this.btnX_();break;case 3:this.btnY_();break;case 4:this.btnLeftBumper();break;case 5:this.btnRightBumper_();break;case 8:this.btnHome_();break;case 9:this.btnStart_();break;case 10:this.btnLeftStick_();break;case 11:this.btnRightStick_();break;case 12:this.btnDpadUp_();break;case 13:this.btnDpadDown_();break;case 14:this.btnDpadLeft_();break;case 15:this.btnDpadRight_();break;case 16:this.btnXbox()}else!e.pressed&&this.buttonsPressed[t]&&(this.buttonsPressed[t]=!1)}))}btnA_(){var e;settingsManager.isLimitedGamepadControls||(console.log("A"),null===(e=s.$.getPlugin(g.A))||void 0===e||e.selectSat(s.$.getHoverManager().hoveringSat))}btnB_(){var e;settingsManager.isLimitedGamepadControls||(console.log("B"),null===(e=s.$.getPlugin(g.A))||void 0===e||e.selectSat(-1),s.$.getMainCamera().zoomTarget=.8)}btnX_(){settingsManager.isLimitedGamepadControls||(console.log("X"),s.$.getMainCamera().autoRotate())}btnY_(){console.log("Y")}btnLeftBumper(){var e;settingsManager.isLimitedGamepadControls||(console.log("Left Bumper"),null===(e=s.$.getPlugin(g.A))||void 0===e||e.selectPrevSat())}btnRightBumper_(){var e;settingsManager.isLimitedGamepadControls||(console.log("Right Bumper"),null===(e=s.$.getPlugin(g.A))||void 0===e||e.selectNextSat())}btnHome_(){settingsManager.isLimitedGamepadControls||(console.log("Home"),s.$.getMainCamera().isPanReset=!0,s.$.getMainCamera().isLocalRotateReset=!0,s.$.getMainCamera().ftsRotateReset=!0)}btnXbox(){console.log("Xbox Button")}btnStart_(){console.log("Start")}btnLeftStick_(){console.log("Left Stick")}btnRightStick_(){console.log("Right Stick")}btnDpadUp_(){console.log("D-Pad Up"),settingsManager.isAutoRotateD=!1,settingsManager.isAutoRotateU=!settingsManager.isAutoRotateU,s.$.getMainCamera().autoRotate(!0)}btnDpadDown_(){console.log("D-Pad Down"),settingsManager.isAutoRotateU=!1,settingsManager.isAutoRotateD=!settingsManager.isAutoRotateD,s.$.getMainCamera().autoRotate(!0)}btnDpadLeft_(){console.log("D-Pad Left"),settingsManager.isAutoRotateR=!1,settingsManager.isAutoRotateL=!settingsManager.isAutoRotateL,s.$.getMainCamera().autoRotate(!0)}btnDpadRight_(){console.log("Right"),settingsManager.isAutoRotateL=!1,settingsManager.isAutoRotateR=!settingsManager.isAutoRotateR,s.$.getMainCamera().autoRotate(!0)}updateZoom_(){const e=this.currentController.buttons[6].value,t=this.currentController.buttons[7].value;if(0===e&&0===t)return;const i=s.$.getRenderer();let a=s.$.getMainCamera().zoomLevel();switch(s.$.getMainCamera().cameraType){case V.A.DEFAULT:case V.A.OFFSET:case V.A.FIXED_TO_SAT:a+=e/500*i.dt,a-=t/500*i.dt,s.$.getMainCamera().zoomTarget=a,s.$.getMainCamera().camZoomSnappedOnSat=!1,s.$.getMainCamera().isAutoPitchYawToTarget=!1,a<s.$.getMainCamera().zoomLevel()?s.$.getMainCamera().isZoomIn=!0:s.$.getMainCamera().isZoomIn=!1;break;case V.A.FPS:case V.A.SATELLITE:case V.A.PLANETARIUM:case V.A.ASTRONOMY:0!==e&&(s.$.getMainCamera().fpsVertSpeed+=Math.pow(2*e,3)*i.dt*settingsManager.cameraMovementSpeed),0!==t&&(s.$.getMainCamera().fpsVertSpeed-=Math.pow(2*t,3)*i.dt*settingsManager.cameraMovementSpeed)}}updateLeftStick_(){const e=this.currentController.axes[0],t=this.currentController.axes[1];if(e>this.deadzone||e<-this.deadzone||t>this.deadzone||t<-this.deadzone){s.$.getMainCamera().autoRotate(!1);const i=s.$.getRenderer();switch(settingsManager.lastGamepadMovement=Date.now(),s.$.getMainCamera().cameraType){case V.A.DEFAULT:case V.A.OFFSET:case V.A.FIXED_TO_SAT:s.$.getMainCamera().camAngleSnappedOnSat=!1,s.$.getMainCamera().isAutoPitchYawToTarget=!1,s.$.getMainCamera().camPitchSpeed-=Math.pow(t,3)/200*i.dt*settingsManager.cameraMovementSpeed,s.$.getMainCamera().camYawSpeed+=Math.pow(e,3)/200*i.dt*settingsManager.cameraMovementSpeed;break;case V.A.FPS:case V.A.SATELLITE:case V.A.PLANETARIUM:case V.A.ASTRONOMY:(t>this.deadzone||t<-this.deadzone)&&(s.$.getMainCamera().fpsForwardSpeed=-Math.pow(t,3)*i.dt),(e>this.deadzone||e<-this.deadzone)&&(s.$.getMainCamera().fpsSideSpeed=Math.pow(e,3)*i.dt)}}}updateRightStick_(){if(settingsManager.isLimitedGamepadControls)return;const e=this.currentController.axes[2],t=this.currentController.axes[3],i=s.$.getRenderer();if(s.$.getMainCamera().isLocalRotateOverride=!1,t>this.deadzone||t<-this.deadzone||e>this.deadzone||e<-this.deadzone)switch(s.$.getMainCamera().autoRotate(!1),s.$.getMainCamera().cameraType){case V.A.DEFAULT:case V.A.OFFSET:case V.A.FIXED_TO_SAT:s.$.getMainCamera().isLocalRotateOverride=!0,s.$.getMainCamera().localRotateDif.pitch=200*-t,s.$.getMainCamera().localRotateDif.yaw=200*-e;break;case V.A.FPS:case V.A.SATELLITE:case V.A.PLANETARIUM:case V.A.ASTRONOMY:s.$.getMainCamera().camPitchSpeed+=t/100*i.dt*settingsManager.cameraMovementSpeed,s.$.getMainCamera().camYawSpeed-=e/100*i.dt*settingsManager.cameraMovementSpeed}}vibrate(e){this.currentController&&this.currentController.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})}static getController(e=0){const t=navigator.getGamepads().filter((e=>null!==e));return t.length>e&&null!==t[e]?t[e]:null}}const di=new ci;var ui=i(7765);const gi=i.p+"../img/calendar.png";class hi extends u.s{constructor(){super(...arguments),this.bottomIconElementName="menu-launches",this.bottomIconImg=gi,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonActive){settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3);const e=(new Date).getFullYear();(0,ui.r9)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonActive&&(this.isMenuButtonActive=!1,(0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const pi=new hi,mi=i.p+"../img/rocket.png";var vi=i(4602);class bi extends u.s{constructor(){super(),this.dependencies_=[g.A.name],this.bottomIconCallback=()=>{if(!this.isMenuButtonActive)return;if(!this.verifySatelliteSelected())return;const e=s.$.getCatalogManager().getObject(this.selectSatManager_.selectedSat,l.Z.EXTRA_ONLY);(0,o.gE)("nl-scc").value=e.sccNum,(0,o.gE)("nl-inc").value=mt.V.pad0(e.inclination.toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=mi,this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=s.$.html`
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
  `,this.helpTitle="New Launch Menu",this.helpBody=s.$.html`The New Launch Menu is used for generating notional orbital launches by modifying existing satellites with similar parameters.
    <br><br>
    After selecting a satellite, you can select a launch location and a north/south azimuth.
    The selected satellite will be modified to align it with the launch site.
    The clock is then changed to 00:00:00 to represent relative time after the launch.
    This can be helpful in calculating sensor coverage relative to launch time.
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=s.$.getTimeManager(),i=s.$.getCatalogManager(),a=s.$.getUiManager(),n=s.$.getColorSchemeManager();(0,b.p$)();const r=(0,o.gE)("nl-scc").value,c=i.sccNum2Id(parseInt(r)),d=i.getObject(c),u=(0,o.gE)("nl-updown").value,g=(0,o.gE)("nl-facility").value;let p,m;if(!i.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in i.launchSites)i.launchSites[e].name===g&&(p=i.launchSites[e].lat,m=i.launchSites[e].lon);m>180&&(m-=360);const v=new Date,S=new Date(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate(),0,0,0);S.setUTCHours(0);const E=t.staticOffset;t.changeStaticOffset(S.getTime()-v.getTime()),n.setColorScheme(settingsManager.currentColorScheme,!0),s.$.getMainCamera().isAutoPitchYawToTarget=!1;const _=t.simulationTimeObj,y=new vt(d,p,m,u,_).rotateOrbitToLatLon(),x=y[0],w=y[1];if("Error"===x||69!==x.length||69!==w.length)return"Error"===x?a.toast(`Failed to Create TLE: ${w}`,l.pc.critical):69!==x.length?a.toast(`Invalid TLE1 Created: length is not 69 - ${x}`,l.pc.critical):69!==w.length&&a.toast(`Invalid TLE2 Created: length is not 69 - ${w}`,l.pc.critical),t.changeStaticOffset(E),this.isDoingCalculations=!1,void(0,b.RZ)();let C;a.toast("Time is now relative to launch time.",l.pc.standby),null===(e=s.$.getSoundManager())||void 0===e||e.play(h.A.LIFT_OFF),d.satrec=null;try{C=M.j0.createSatrec(x,w),d.satrec=C}catch(e){return void f.J.error(e,"new-launch.ts","Error creating satellite record!")}it.h.altitudeCheck(C,_)>1?(i.satCruncher.postMessage({typ:ft.XY.SAT_EDIT,id:c,active:!0,tle1:x,tle2:w}),s.$.getOrbitManager().changeOrbitBufferData(c,x,w)):a.toast("Failed Altitude Test - Try a Different Satellite!",l.pc.critical),(0,Ft.p)({cruncher:i.satCruncher,cb:()=>{this.isDoingCalculations=!1,(0,b.RZ)(),a.toast("Launch Nominal Created!",l.pc.standby),a.searchManager.doSearch(d.sccNum)},validationFunc:e=>void 0!==e.satPos,error:()=>{this.isDoingCalculations=!1,(0,b.RZ)(),a.toast("Cruncher failed to meet requirement after multiple tries! Is this launch even possible?",l.pc.critical)}})},this.selectSatManager_=s.$.getPlugin(g.A)}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)(`${this.sideMenuElementName}-form`).addEventListener("change",(()=>{const e=s.$.getCatalogManager().getObject(this.selectSatManager_.selectedSat,l.Z.EXTRA_ONLY);e.isSatellite()&&this.preValidate_(e)}))}}),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{if(null==e?void 0:e.isSatellite()){const t=e;(0,o.gE)("nl-scc").value=t.sccNum,(0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.preValidate_(t)}else(0,o.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0}})}preValidate_(e){const t=(0,o.gE)("nl-facility").value,i=vi.g[t].lat;let a=e.inclination;a=a>90?180-a:a;const s=(0,o.gE)(`${this.sideMenuElementName}-submit`);a<i?(s.disabled=!0,s.textContent="Inclination Too Low!"):(s.disabled=!1,s.textContent="Create Launch Nominal ▶")}}const fi=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown",Si=i.p+"../img/calendar2.png";class Ei extends u.s{constructor(){super(...arguments),this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.showTable()},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=Si,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=s.$.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=s.$.html`
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
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),i.e(608).then(i.bind(i,6608)).then((e=>e))}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("export-launch-info").addEventListener("click",(()=>{s.$.getSoundManager().play(h.A.EXPORT),(0,at.g3)(this.launchList,"launchList")}))}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then((e=>e.json())).then((e=>this.processData(e))).catch((()=>f.J.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`))).finally((()=>{const e=(0,o.gE)("nextLaunch-table");e&&""==e.innerHTML&&(Ei.initTable(e,this.launchList),(0,o.gE)("nextLaunch-table").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(0,ui.r9)(e.href)}))})))}))}}processData(e){var t,i,a,s,n,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(i=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===i?void 0:i.name.split(",",1)[0],c.locationURL=null===(a=r.pad)||void 0===a?void 0:a.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(s=r.rocket)||void 0===s?void 0:s.configuration.full_name,c.rocketConfig=null===(n=r.rocket)||void 0===n?void 0:n.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Launch Window")),i.setAttribute("style","text-decoration: underline; width: 120px;");const a=t.insertCell();a.appendChild(document.createTextNode("Mission")),a.setAttribute("style","text-decoration: underline; width: 140px;");const s=t.insertCell();s.appendChild(document.createTextNode("Location")),s.setAttribute("style","text-decoration: underline");const n=t.insertCell();n.appendChild(document.createTextNode("Agency")),n.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var i,a,s,n,o,l;Ei.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),u=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":`${(0,ai.i)(t[r].windowStart,"isoDateTime",!0)} UTC`;d.appendChild(document.createTextNode(u));const g=c.insertCell(),h=(null===(i=t[r])||void 0===i?void 0:i.missionName)||"Unknown",p=(null===(a=t[r])||void 0===a?void 0:a.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${fi(h,15)}</a>`:`${fi(h,15)}`,m=(null===(s=t[r])||void 0===s?void 0:s.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;g.innerHTML=`${p}<br />${m}`;const v=(null===(n=t[r])||void 0===n?void 0:n.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${fi(t[r].location,25)}</a>`:`${fi(t[r].location,25)}`;c.insertCell().innerHTML=v;const b=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${fi(t[r].agency,30)}</a>`:`${fi(t[r].agency,30)}`;c.insertCell().innerHTML=b,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}const Mi=i.p+"../img/day-night.png";class _i extends u.s{constructor(){super(...arguments),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=Mi}addJs(){super.addJs(),s.$.register({event:l.kR.nightToggle,cbName:this.constructor.name,cb:(e,t,i)=>{this.isMenuButtonActive?e.bindTexture(e.TEXTURE_2D,i):e.bindTexture(e.TEXTURE_2D,t)}}),s.$.getInputManager().keyboard.registerKeyUpEvent({key:"N",callback:()=>{this.isMenuButtonActive?(s.$.getSoundManager().play(h.A.TOGGLE_OFF),this.setBottomIconToUnselected()):(s.$.getSoundManager().play(h.A.TOGGLE_ON),this.setBottomIconToSelected())}})}}var yi=i(2136);class xi extends u.s{constructor(){super(),this.dependencies_=[yi.c.name,g.A.name],this.doOnce=!1,this.isReferenceSatsActive=!1,this.selectSatManager_=s.$.getPlugin(g.A)}addHtml(){super.addHtml(),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{(null==e?void 0:e.isSatellite())?((0,o.FG)("orbit-references-link"),this.doOnce||((0,o.gE)("sat-info-top-links").insertAdjacentHTML("beforeend",s.$.html`
                <div id="orbit-references-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,o.gE)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0)):(0,o.ys)("orbit-references-link")}})}orbitReferencesLinkClick(){const e=s.$.getCatalogManager(),t=e.getSat(this.selectSatManager_.selectedSat);if(!t)return;let i=t.sccNum5.padStart(5,"0");const a=t.eccentricity.toString(),n=t.rightAscension.toString(),o=t.argOfPerigee.toString(),l=t.inclination.toString(),r=t.meanMotion.toString(),c=t.epochYear.toString(),d=t.epochDay.toString(),u=t.intlDes.split("-")[0].slice(2)+t.intlDes.split("-")[1],g=t.sccNum,h=1440/parseFloat(r);let p=0;for(let s=0;s<360;s++){const m=p.toFixed(4).padStart(8,"0"),{tle1:v,tle2:b}=M.rX.createTle({sat:t,inc:l,meanmo:r,rasc:n,argPe:o,meana:m,ecen:a,epochyr:c,epochday:d,intl:u,scc:g}),f=M.e2.convert6DigitToA5((ut.v.ANALYST_START_ID+s).toString().padStart(5,"0")),S=e.sccNum2Id(f),E=e.addAnalystSat(v,b,S,f);if(E&&(i+=`${E.sccNum.toString()},`),p+=360/h*4,p>=360)break}i=i.slice(0,-1),s.$.getUiManager().doSearch(i),this.isReferenceSatsActive=!0}}var wi=i(9618);const Ci=i.p+"../img/sputnick.png";var Ti=i(1659),Ai={};Ai.styleTagTransform=Nt(),Ai.setAttributes=kt(),Ai.insert=At().bind(null,"head"),Ai.domAPI=Ct(),Ai.insertStyleElement=Rt(),xt()(Ti.A,Ai),Ti.A&&Ti.A.locals&&Ti.A.locals;class $i extends u.s{constructor(){super(...arguments),this.tipDataSrc="./data/tip.json",this.selectSatIdOnCruncher_=null,this.tipList_=[],this.bottomIconElementName="menu-satellite-tip",this.bottomIconImg=Ci,this.bottomIconLabel="Reentry Prediction",this.sideMenuElementName="tip-menu",this.sideMenuElementHtml=s.$.html`
  <div id="tip-menu" class="side-menu-parent start-hidden text-select">
    <div id="tip-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Tracking and Impact Messages</h5>
        <table id="tip-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Tracking and Impact Prediction",this.helpBody=s.$.html`The Tracking and Impact Prediction (tip) menu displays the latest tracking and impact prediction messages for satellites.
  The table shows the following columns:<br><br>
  <b>NORAD</b>: The NORAD catalog ID of the satellite.<br><br>
  <b>Decay Date</b>: The date of the predicted decay of the satellite.<br><br>
  <b>Latitude</b>: The latitude of the satellite.<br><br>
  <b>Longitude</b>: The longitude of the satellite.<br><br>
  <b>Window (min)</b>: The time window in minutes for the prediction.<br><br>
  <b>Next Report</b>: The date of the next report.<br><br>
  <b>High Interest?</b>: Whether the satellite is of high interest.<br><br>

  All data for reentries is sourced from the Tracking and Impact Prediction (TIP) messages provided by the US Space Command (USSPACECOM).
  `,this.dragOptions={isDraggable:!0,minWidth:700,maxWidth:850},this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.parsetipData_()}}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:this.uiManagerFinal_.bind(this)}),s.$.register({event:l.kR.onCruncherMessage,cbName:this.constructor.name,cb:()=>{var e;null!==this.selectSatIdOnCruncher_&&(null===(e=s.$.getPlugin(g.A))||void 0===e||e.selectSat(this.selectSatIdOnCruncher_),this.selectSatIdOnCruncher_=null)}})}uiManagerFinal_(){(0,o.gE)(this.sideMenuElementName).addEventListener("click",(e=>{(0,b.Cs)((()=>{var t;const i=e.target.parentElement;if(!i.classList.contains("tip-object"))return;const a=null===(t=i.dataset)||void 0===t?void 0:t.row;null!==a&&this.eventClicked_(parseInt(a))}))}))}parsetipData_(){0===this.tipList_.length&&fetch(this.tipDataSrc).then((e=>{e.json().then((e=>{this.setTipList_(e),this.createTable_(),0===this.tipList_.length&&f.J.warn("No tip data found!")}))}))}setTipList_(e){this.tipList_=e,this.tipList_.sort(((e,t)=>new Date(t.MSG_EPOCH).getTime()-new Date(e.MSG_EPOCH).getTime())),this.tipList_=this.tipList_.filter(((e,t,i)=>i.findIndex((t=>t.NORAD_CAT_ID===e.NORAD_CAT_ID))===t)),this.tipList_.sort(((e,t)=>new Date(t.DECAY_EPOCH).getTime()-new Date(e.DECAY_EPOCH).getTime()))}eventClicked_(e){const t=s.$.getCatalogManager().sccNum2Sat(parseInt(this.tipList_[e].NORAD_CAT_ID));if(!t)return void s.$.getUiManager().toast("Satellite appears to have decayed!",l.pc.caution);const i=new Date,a=new Date(Date.UTC(parseInt(this.tipList_[e].DECAY_EPOCH.substring(0,4)),parseInt(this.tipList_[e].DECAY_EPOCH.substring(5,7))-1,parseInt(this.tipList_[e].DECAY_EPOCH.substring(8,10)),parseInt(this.tipList_[e].DECAY_EPOCH.substring(11,13)),parseInt(this.tipList_[e].DECAY_EPOCH.substring(14,16)),parseInt(this.tipList_[e].DECAY_EPOCH.substring(17,19))));s.$.getTimeManager().changeStaticOffset(a.getTime()-i.getTime()),s.$.getMainCamera().isAutoPitchYawToTarget=!1,s.$.getUiManager().doSearch(`${t.sccNum5}`),this.selectSatIdOnCruncher_=t.id}createTable_(){try{const e=(0,o.gE)("tip-table");e.innerHTML="",$i.createHeaders_(e),this.createBody_(e)}catch(e){f.J.warn("Error processing SOCRATES data!")}}createBody_(e){for(let t=0;t<this.tipList_.length;t++)this.createRow_(e,t)}static createHeaders_(e){const t=e.insertRow(),i=["NORAD","Decay Date","Latitude","Longitude","Window (min)","Next Report","High Interest?"];for(const e of i){const i=t.insertCell();i.appendChild(document.createTextNode(e)),i.setAttribute("style","text-decoration: underline"),i.setAttribute("class","center")}}createRow_(e,t){const i=e.insertRow();return i.setAttribute("class","tip-object link"),i.setAttribute("data-row",t.toString()),$i.createCell_(i,this.tipList_[t].NORAD_CAT_ID),$i.createCell_(i,this.tipList_[t].DECAY_EPOCH),$i.createCell_(i,this.tipList_[t].LAT),$i.createCell_(i,this.tipList_[t].LON),$i.createCell_(i,this.tipList_[t].WINDOW),$i.createCell_(i,this.tipList_[t].NEXT_REPORT),$i.createCell_(i,this.tipList_[t].HIGH_INTEREST),i}static createCell_(e,t){e.insertCell().appendChild(document.createTextNode(t))}}var ki=i(9506),Li=i(5526);const Ri=i.p+"../img/polar.png";class Ii extends u.s{constructor(){super(),this.dependencies_=[g.A.name],this.plotDuration_=3,this.fontRatio_=.03,this.plotData_=[],this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconElementName="menu-polar-plot",this.bottomIconLabel="Polar Plot",this.bottomIconImg=Ri,this.bottomIconCallback=()=>{this.updatePlot_()},this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="polar-plot-menu",this.sideMenuElementHtml=s.$.html`
  <div id="polar-plot-menu" class="side-menu-parent start-hidden text-select">
    <div id="polar-plot-content" class="side-menu" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <span id="polar-plot-warning" class="text-center">Satellite is not in view for the next ${(24*this.plotDuration_).toFixed(0)} hours</span>
      <canvas id="polar-plot" class="w-96" width="1000" height="1000"></canvas>
      <button id="polar-plot-save" class="btn btn-primary">Save Image</button>
    </div>
  </div>
  `,this.helpTitle="Polar Plot Menu",this.helpBody=s.$.html`The Polar Plot Menu is used to generate a 2D polar plot of the satellite's azimuth and elevation over time.`,this.dragOptions={isDraggable:!0,minWidth:450,maxWidth:1e3},this.selectSatManager_=s.$.getPlugin(g.A)}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("polar-plot-save").addEventListener("click",(()=>{const e=document.getElementById("polar-plot").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download=`sat-${this.selectSatManager_.getSelectedSat().sccNum6}-polar-plot.png`,t.click()}))}})}addJs(){super.addJs(),s.$.register({event:l.kR.staticOffsetChange,cbName:this.constructor.name,cb:()=>{this.isMenuButtonActive&&this.updatePlot_()}}),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{(null==e?void 0:e.isSatellite())&&s.$.getSensorManager().isSensorSelected()?((0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.isMenuButtonActive&&this.updatePlot_()):((0,o.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}}),s.$.getInputManager().keyboard.registerKeyUpEvent({key:"P",callback:()=>{-1!==s.$.getPlugin(g.A).selectedSat&&(this.isMenuButtonActive?(this.closeSideMenu(),this.setBottomIconToUnselected(),s.$.getSoundManager().play(h.A.TOGGLE_OFF)):(this.openSideMenu(),this.setBottomIconToSelected(),this.updatePlot_(),s.$.getSoundManager().play(h.A.TOGGLE_ON)))}})}updatePlot_(){this.generatePlotData_()?(this.drawPlot_(),(0,o.ys)("polar-plot-warning"),(0,o.FG)("polar-plot"),(0,o.FG)("polar-plot-save")):((0,o.FG)("polar-plot-warning"),(0,o.ys)("polar-plot"),(0,o.ys)("polar-plot-save"),(0,o.gE)("polar-plot-warning").innerHTML=`Satellite is not in view for the next ${(24*this.plotDuration_).toFixed(0)} hours`)}generatePlotData_(){this.passStartTime_=null,this.passStopTime_=null;const e=s.$.getSensorManager().getSensor(),t=this.selectSatManager_.getSelectedSat();let i=!1;if(t.perigee>e.maxRng||t.apogee<e.minRng)return!1;this.plotData_=[];let a=null;for(let n=0;n<this.plotDuration_*M.Vw;n++)if(a=s.$.getTimeManager().getOffsetTimeObj(n*M.If),e.isSatInFov(t,a)){this.passStartTime_||(this.passStartTime_=a);const s=e.rae(t,a);this.plotData_.push([s.az,s.el]),i=!0}else if(i)break;return this.passStopTime_=a,i}drawPlot_(){this.setupCanvas_(),this.drawPlotBackground_(),this.drawOrbitLine_(),this.drawStartAndEnd_(),this.drawTitle_()}drawTitle_(){this.ctx_.font=.035*this.canvasSize_+"px consolas",this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.textAlign="center",this.ctx_.textBaseline="top",this.ctx_.fillText(`Satellite ${this.selectSatManager_.getSelectedSat().sccNum}: ${this.passStartTime_.toISOString().slice(11,19)} - ${this.passStopTime_.toISOString().slice(11,19)}`,this.centerX_,0)}setupCanvas_(){const e=document.getElementById("polar-plot");e&&(this.ctx_=e.getContext("2d"),this.canvasSize_=Math.min(this.ctx_.canvas.width,this.ctx_.canvas.height),this.ctx_.imageSmoothingEnabled=!0,this.centerX_=this.ctx_.canvas.width/2,this.centerY_=this.ctx_.canvas.height/2,this.distanceUnit_=this.canvasSize_/225,this.ctx_.clearRect(0,0,this.ctx_.canvas.width,this.ctx_.canvas.height))}drawElevationLines_(){let e=0,t=0;this.ctx_.beginPath();const i=[15,30,45,60,75,90];for(const a of i){e=a*this.distanceUnit_,this.ctx_.moveTo(this.centerX_+e,this.centerY_);for(let i=1;i<=360;i++)t=Math.PI/180*i,this.ctx_.lineTo(this.centerX_+e*Math.cos(t),this.centerY_+e*Math.sin(t))}this.ctx_.lineWidth=1,this.ctx_.stroke()}drawStartAndEnd_(){this.drawDot_(this.plotData_[0][1],this.plotData_[0][0],"lightgreen"),this.drawDot_(this.plotData_[this.plotData_.length-1][1],this.plotData_[this.plotData_.length-1][0],"red")}drawDot_(e,t,i="lightgreen"){t=Math.PI/180*(t-90),e=(90-e)*this.distanceUnit_,this.ctx_.beginPath(),this.ctx_.arc(this.centerX_+e*Math.cos(t),this.centerY_+e*Math.sin(t),15,0,2*Math.PI,!1),this.ctx_.fillStyle=i,this.ctx_.fill()}drawOrbitLine_(){this.ctx_.beginPath(),this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.lineWidth=2;const e=this.plotData_.length;let t=0;for(let i=0;i<e;i++){const e=Math.PI/180*(this.plotData_[i][0]-90);t=(90-this.plotData_[i][1])*this.distanceUnit_,0===i&&(this.ctx_.beginPath(),this.ctx_.moveTo(this.centerX_+t*Math.cos(e),this.centerY_+t*Math.sin(e))),this.ctx_.lineTo(this.centerX_+t*Math.cos(e),this.centerY_+t*Math.sin(e))}this.ctx_.stroke()}drawPlotBackground_(){this.drawElevationLines_(),this.drawPolarAxes_(),this.ctx_.font=this.canvasSize_*this.fontRatio_+"px serif",this.ctx_.strokeStyle="rgb(77, 172, 255)",this.ctx_.fillStyle="rgb(77, 172, 255)",this.ctx_.lineWidth=1,this.labelAzimuthAxis_(),this.labelElevationAxis_()}drawPolarAxes_(){const e=96*this.distanceUnit_;this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_,this.centerY_+e),this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_,this.centerY_-e),this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_+e,this.centerY_),this.ctx_.moveTo(this.centerX_,this.centerY_),this.ctx_.lineTo(this.centerX_-e,this.centerY_)}labelElevationAxis_(){this.ctx_.textAlign="center",this.ctx_.textBaseline="middle";const e=this.canvasSize_/700;this.ctx_.fillText("90°",this.centerX_+18*e,this.centerY_-12*e),this.ctx_.fillText("75°",this.centerX_+44*e,this.centerY_-44*e),this.ctx_.fillText("60°",this.centerX_+76*e,this.centerY_-76*e),this.ctx_.fillText("45°",this.centerX_+108*e,this.centerY_-108*e),this.ctx_.fillText("30°",this.centerX_+143*e,this.centerY_-143*e),this.ctx_.fillText("15°",this.centerX_+175*e,this.centerY_-175*e),this.ctx_.fillText("0°",this.centerX_+206*e,this.centerY_-206*e),this.ctx_.stroke()}labelAzimuthAxis_(){const e=98*this.distanceUnit_;this.ctx_.font=this.canvasSize_*this.fontRatio_+"px serif",this.ctx_.textAlign="center",this.ctx_.textBaseline="bottom",this.ctx_.fillText(" 0°",this.centerX_,this.centerY_-e),this.ctx_.textBaseline="top",this.ctx_.fillText("180°",this.centerX_,this.centerY_+e),this.ctx_.textAlign="right",this.ctx_.textBaseline="middle",this.ctx_.fillText("270°",this.centerX_-e,this.centerY_),this.ctx_.textAlign="left",this.ctx_.fillText("90°",this.centerX_+e,this.centerY_),this.ctx_.stroke()}}const Ni=i.p+"../img/reports.png";class Oi extends u.s{constructor(){super(),this.dependencies_=[g.A.name],this.isRequireSatelliteSelected=!0,this.bottomIconElementName="menu-reports",this.bottomIconLabel="Reports",this.bottomIconImg=Ni,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="reports-menu",this.sideMenuElementHtml=s.$.html`
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
  `,this.helpTitle="Reports Menu",this.helpBody=s.$.html`The Reports Menu is a collection of tools to help you analyze and understand the data you are viewing.`,this.dragOptions={isDraggable:!1,minWidth:320},this.selectSatManager_=s.$.getPlugin(g.A)}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("aer-report-btn").addEventListener("click",(()=>this.generateAzElRng_())),(0,o.gE)("coes-report-btn").addEventListener("click",(()=>this.generateClasicalOrbElJ2000_())),(0,o.gE)("eci-report-btn").addEventListener("click",(()=>this.generateEci_())),(0,o.gE)("lla-report-btn").addEventListener("click",(()=>this.generateLla_()))}}),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{(null==e?void 0:e.isSatellite())?((0,o.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,o.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}generateAzElRng_(){const e=this.getSat_(),t=this.getSensor_();if(!e||!t)return;const i=`Azimuth Elevation Range Report\n-------------------------------\n${this.createHeader_(e,t)}`;let a="Time (UTC),Azimuth(°),Elevation(°),Range(km)\n",s=!1,n=this.getStartTime_();for(let i=0;i<259200;i+=30){n=new Date(n.getTime()+30*M.If);const i=t.rae(e,n);i.el>0?(s=!0,a+=`${this.formatTime_(n)},${i.az.toFixed(3)},${i.el.toFixed(3)},${i.rng.toFixed(3)}\n`):s&&(a+="\n\n",s=!1)}"Time (UTC),Azimuth(°),Elevation(°),Range(km)\n"===a&&(a+="No passes found!"),this.writeReport_({filename:`aer-${e.sccNum}`,header:i,body:a})}formatTime_(e){const t=e.toISOString().split("T");return`${t[0]} ${t[1].split(".")[0]}`}generateLla_(){const e=this.getSat_();if(!e)return;const t=`Latitude Longitude Altitude Report\n-------------------------------\n${this.createHeader_(e)}`;let i="Time (UTC),Latitude(°),Longitude(°),Altitude(km)\n",a=this.getStartTime_();for(let t=0;t<259200;t+=30){a=new Date(a.getTime()+30*M.If);const t=e.lla(a);i+=`${this.formatTime_(a)},${t.lat.toFixed(3)},${t.lon.toFixed(3)},${t.alt.toFixed(3)}\n`}this.writeReport_({filename:`lla-${e.sccNum}`,header:t,body:i})}generateEci_(){const e=this.getSat_();if(!e)return;const t=`Earth Centered Intertial Report\n-------------------------------\n${this.createHeader_(e)}`;let i="Time (UTC),Position X(km),Position Y(km),Position Z(km),Velocity X(km/s),Velocity Y(km/s),Velocity Z(km/s)\n",a=this.getStartTime_();for(let t=0;t<259200;t+=30){a=new Date(a.getTime()+30*M.If);const t=e.eci(a);i+=`${this.formatTime_(a)},${t.position.x.toFixed(3)},${t.position.y.toFixed(3)},${t.position.z.toFixed(3)},${t.velocity.x.toFixed(3)},${t.velocity.y.toFixed(3)},${t.velocity.z.toFixed(3)}\n`}this.writeReport_({filename:`eci-${e.sccNum}`,header:t,body:i,columns:7,isHeaders:!0})}createHeader_(e,t){const i=`Date: ${(new Date).toISOString()}\nSatellite: ${e.name}\nNORAD ID: ${e.sccNum}\nAlternate ID: ${e.altId||"None"}\nInternational Designator: ${e.intlDes}\n\n`,a=`Sensor: ${t?t.name:"None"}\nType: ${t?t.getTypeString():"None"}\nLatitude: ${t?t.lat:"None"}\nLongitude: ${t?t.lon:"None"}\nAltitude: ${t?t.alt:"None"}\nMin Azimuth: ${t?t.minAz:"None"}\nMax Azimuth: ${t?t.maxAz:"None"}\nMin Elevation: ${t?t.minEl:"None"}\nMax Elevation: ${t?t.maxEl:"None"}\nMin Range: ${t?t.minRng:"None"}\nMax Range: ${t?t.maxRng:"None"}\n\n`;return t?`${i}${a}`:`${i}`}generateClasicalOrbElJ2000_(){const e=this.getSat_();if(!e)return;const t=`Classic Orbit Elements Report\n-------------------------------\n${this.createHeader_(e)}`,i=e.toJ2000().toClassicalElements(),a=`Epoch, ${i.epoch}\nApogee, ${i.apogee.toFixed(3)} km\nPerigee, ${i.perigee.toFixed(3)} km\nInclination, ${i.inclination.toFixed(3)}°\nRight Ascension, ${i.rightAscensionDegrees.toFixed(3)}°\nArgument of Perigee, ${i.argPerigeeDegrees.toFixed(3)}°\nTrue Anomaly, ${i.trueAnomalyDegrees.toFixed(3)}°\nEccentricity, ${i.eccentricity.toFixed(3)}\nPeriod, ${i.period.toFixed(3)} min\nSemi-Major Axis, ${i.semimajorAxis.toFixed(3)} km\nMean Motion, ${i.meanMotion.toFixed(3)} rev/day`;this.writeReport_({filename:`coes-${e.sccNum}`,header:t,body:a,columns:2,isHeaders:!1})}writeReport_({filename:e,header:t,body:i,columns:a=4,isHeaders:s=!0}){const n=window.open("text/plain",e),o=new Array(a).fill(0);if(n){const a=i.split("\n").map((e=>e.split(","))).map(((e,t)=>e.map(((e,i)=>(0===t&&(o[i]=0===i?Math.max((new Date).toISOString().length+5,e.trim().length+5):Math.max(10,e.trim().length+5)),e.trim().padEnd(o[i])))))).map(((e,t)=>{const i=e.join("   ");if(0===t&&s){const t=e.join("   "),i=t.replace(/./gu,"-");return`${t}\n${i}`}return i})).join("\n");n.document.write(`<a href="data:text/plain;charset=utf-8,${encodeURIComponent(t+a)}" download="${e}.txt">Download Report</a><br>`),n.document.write(`<plaintext>${t}${a}`),n.document.title=e,n.history.replaceState(null,e,`/${e}.txt`)}else alert("Please allow popups for this site")}getStartTime_(){const e=s.$.getTimeManager().getOffsetTimeObj(0);return e.setMilliseconds(0),e.setSeconds(0),e}getSat_(){const e=this.selectSatManager_.primarySatObj;return e?e instanceof M.mJ?e:(f.J.warn("Satellite is not DetailedSatellite!"),null):(f.J.warn("Select a satellite first!"),null)}getSensor_(){const e=s.$.getSensorManager();return e.isSensorSelected()?e.currentSensors[0]:(f.J.warn("Select a sensor first!"),null)}}var Pi=i(9543);const Di=i.p+"../img/satchng.png";class Fi extends u.s{constructor(){super(...arguments),this.dependencies_=[g.A.name],this.bottomIconImg=Di,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=s.$.html`
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
  </div>`,this.helpTitle="Constellations Menu",this.helpBody=s.$.html`The Constellations menu allows you to view groups of satellites.
  <br><br>
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:"constellations",cb:()=>{(0,o.gE)("constellation-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(e=>{Fi.constellationMenuClick(e.target.dataset.group)}))}))}})}static constellationMenuClick(e){const t=s.$.getTimeManager(),i=s.$.getCatalogManager(),a=s.$.getGroupsManager();if(void 0!==a&&e){switch(e){case"SpaceStations":a.groupList[e]||a.createGroup(r.M.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/NAVSTAR/u,e);break;case"iridium":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/IRIDIUM/u,e);break;case"orbcomm":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/ORBCOMM/u,e);break;case"globalstar":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/GLOBALSTAR/u,e);break;case"ses":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/SES \d+/u,e);break;case"AmatuerRadio":a.groupList[e]||a.createGroup(r.M.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":a.groupList[e]||a.createGroup(r.M.SCC_NUM,i.id2satnum(i.satLinkManager.aehf),e),(0,b.Cs)((()=>{Kt.B.clear(),i.satLinkManager.showLinks(Kt.B,Pi.PU.Aehf,t)}));break;case"wgs":if(!a.groupList[e]){const t=i.satLinkManager.wgs.concat(i.satLinkManager.dscs);a.createGroup(r.M.SCC_NUM,i.id2satnum(t),e)}(0,b.Cs)((()=>{Kt.B.clear(),i.satLinkManager.showLinks(Kt.B,Pi.PU.Wgs,t)}));break;case"starlink":a.groupList[e]||a.createGroup(r.M.NAME_REGEX,/STARLINK/u,e);break;case"sbirs":if(!a.groupList[e]){const t=[...i.satLinkManager.sbirs,...i.satLinkManager.dsp];a.createGroup(r.M.SCC_NUM,i.id2satnum(t),e)}break;default:throw new Error(`Unknown group name: ${e}`)}Fi.groupSelected(e)}}static groupSelected(e){var t;if(void 0===e)return;const i=s.$.getCatalogManager(),a=s.$.getGroupsManager();if(void 0===a.groupList[e])throw new Error(`Unknown group name: ${e}`);const n=(0,o.gE)("search");a.selectGroup(a.groupList[e]),n.innerHTML=a.groupList[e].ids.reduce(((e,t)=>{var a;return`${e}${null===(a=i.getSat(t))||void 0===a?void 0:a.sccNum},`}),"").slice(0,-1),null===(t=s.$.getPlugin(g.A))||void 0===t||t.selectSat(-1);const l=s.$.getUiManager();l.searchManager.doSearch(a.groupList[e].ids.map((e=>{var t;return null===(t=i.getSat(e))||void 0===t?void 0:t.sccNum})).join(",")),settingsManager.isMobileModeEnabled&&l.searchManager.closeSearch(),l.hideSideMenus()}}const Ui=new Fi;var Bi=i(8143);const Hi=i.p+"../img/sensor_occupied.png";class zi extends u.s{constructor(){super(...arguments),this.dependencies_=[g.A.name],this.bottomIconElementName="menu-sat-fov",this.bottomIconLabel="Satellite FOV",this.bottomIconImg=Hi,this.dragOptions={isDraggable:!1,minWidth:350},this.helpBody=s.$.html`
    The Satellite Field of View plugin allows you to control the field of view of a satellite.`,this.sideMenuElementName="satellite-fov-menu",this.sideMenuTitle="Satellite Field of View",this.sideMenuElementHtml=s.$.html`
  <div>
    <div class="center">
      <button id="reset-sat-fov-cones-button" class="center-align btn btn-ui waves-effect waves-light menu-selectable" type="button"
      style="margin: -10px 0px 10px 0px;">
        Reset All FOV Cones &#9658;
      </button>
    </div>
  <form id="sat-fov-settings-default-form">
    <div class="row">
      ${zi.genH5Title_("Default Sensor Design")}
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
      ${zi.genH5Title_("Default Color Settings")}
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
    ${zi.genH5Title_("Active Sensors")}
    <div class="row"></div>
    <div id="sat-fov-active-cones" class="col s12">
    </div>
  </div>`,this.sideMenuSettingsHtml=s.$.html`
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
  `}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("sat-fov-settings-form").addEventListener("change",this.handleFormChange.bind(this)),(0,o.gE)("sat-fov-settings-form").addEventListener("submit",this.handleFormChange.bind(this)),(0,o.gE)("sat-fov-settings-default-form").addEventListener("change",this.handleDefaultFormChange.bind(this)),(0,o.gE)("sat-fov-settings-default-form").addEventListener("submit",this.handleDefaultFormChange.bind(this))}}),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("reset-sat-fov-cones-button").addEventListener("click",(()=>{s.$.getScene().coneFactory.clear(),s.$.getSoundManager().play(h.A.TOGGLE_OFF),(0,o.gE)("reset-sat-fov-cones-button").setAttribute("disabled","true")}))}})}addJs(){super.addJs();const e=s.$.getInputManager().keyboard;e.registerKeyEvent({key:"C",callback:()=>{if(e.isShiftPressed){const e=s.$.getPlugin(g.A).getSelectedSat();if(e){const t=s.$.getScene().coneFactory,i=t.checkCacheForMesh_(e);i?(s.$.getSoundManager().play(h.A.TOGGLE_OFF),t.remove(i.id)):(s.$.getSoundManager().play(h.A.TOGGLE_ON),t.generateMesh(e))}}}}),s.$.register({event:l.kR.ConeMeshUpdate,cbName:zi.name,cb:()=>{this.updateListOfFovMeshes()}}),s.$.register({event:l.kR.selectSatData,cbName:zi.name,cb:e=>{this.updateListOfFovMeshes(),(null==e?void 0:e.isSatellite())?this.isSettingsMenuEnabled_=!0:this.isSettingsMenuEnabled_=!1}})}handleFormChange(){const e={fieldOfView:parseFloat((0,o.gE)("sat-fov-fov-angle").value),color:[parseFloat((0,o.gE)("sat-fov-red").value),parseFloat((0,o.gE)("sat-fov-green").value),parseFloat((0,o.gE)("sat-fov-blue").value),parseFloat((0,o.gE)("sat-fov-opacity").value)]},t=s.$.getPlugin(g.A).getSelectedSat(),i=s.$.getScene().coneFactory;if(t){const a=i.checkCacheForMesh_(t);a&&a.editSettings(e)}}handleDefaultFormChange(){const e=parseFloat((0,o.gE)("sat-fov-default-fov-angle").value),t=parseFloat((0,o.gE)("sat-fov-default-red").value),i=parseFloat((0,o.gE)("sat-fov-default-green").value),a=parseFloat((0,o.gE)("sat-fov-default-blue").value),n=parseFloat((0,o.gE)("sat-fov-default-opacity").value),r=s.$.getUiManager().toast.bind(s.$.getUiManager());if(isNaN(e)||e<=0||e>180)return r("Field of View must be a number between 0 and 180 degrees.",l.pc.critical),void((0,o.gE)("sat-fov-default-fov-angle").value="3");if(isNaN(t)||t<0||t>1)return r("Red color value must be a number between 0 and 1.",l.pc.critical),void((0,o.gE)("sat-fov-default-red").value="0.5");if(isNaN(i)||i<0||i>1)return r("Green color value must be a number between 0 and 1.",l.pc.critical),void((0,o.gE)("sat-fov-default-green").value="0.5");if(isNaN(a)||a<0||a>1)return r("Blue color value must be a number between 0 and 1.",l.pc.critical),void((0,o.gE)("sat-fov-default-blue").value="0.5");if(isNaN(n)||n<0||n>1)return r("Opacity value must be a number between 0 and 1.",l.pc.critical),void((0,o.gE)("sat-fov-default-opacity").value="0.15");const c={fieldOfView:e,color:[t,i,a,n]};s.$.getScene().coneFactory.editSettings(c)}updateListOfFovMeshes(){const e=s.$.getScene().coneFactory.meshes;0===e.length?(0,o.gE)("reset-sat-fov-cones-button").setAttribute("disabled","true"):(0,o.gE)("reset-sat-fov-cones-button").removeAttribute("disabled"),(0,o.gE)("sat-fov-active-cones").innerHTML=e.sort(((e,t)=>e.obj.id-t.obj.id)).map((e=>{const t=s.$.getPlugin(g.A).getSelectedSat();let i="";return i=t&&e.obj.id===t.id?s.$.html`<span style="color: var(--statusDarkStandby);">${e.obj.name}</span>`:s.$.html`<span>${e.obj.name}</span>`,s.$.html`
        <div class="link" style="
            display: flex;
            align-items: center;
        ">
            <div class="active-cone-sensor col s10 m10 l10" data-id="${e.obj.id.toString()}">
              ${i}
            </div>
            <div class="col s2 m2 l2 center-align remove-icon" style="display: flex; align-items: center; height: 100%;">
              <img class="remove-sensor" data-id="${e.obj.id.toString()}" src="${Bi}" style="cursor: pointer;"></img>
            </div>
        </div>
        `})).join("");const t=document.querySelectorAll(".remove-sensor"),i=document.querySelectorAll(".active-cone-sensor");t.forEach((e=>{e.addEventListener("click",(e=>{const t=parseInt(e.target.dataset.id,10);s.$.getScene().coneFactory.removeByObjectId(t),s.$.getSoundManager().play(h.A.TOGGLE_OFF)}))})),i.forEach((e=>{e.addEventListener("click",(e=>{let t=parseInt(e.target.dataset.id);t||(t=parseInt(e.target.parentElement.dataset.id)),t&&s.$.getPlugin(g.A).selectSat(t)}))}))}}var ji=i(8616);const Gi=i.p+"../img/photoManager.png";class Vi extends u.s{constructor(){super(...arguments),this.dependencies_=[g.A.name],this.discvrPhotos_=[],this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="Satellite Photos",this.bottomIconImg=Gi,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=s.$.html`
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
  </div>`,this.helpTitle="Satellite Photos Menu",this.helpBody=s.$.html`The Satellite Photos Menu is used for displaying live photos from select satellites.
  <br><br>
  Note - changes in the image API may cause the wrong satellite to be selected in KeepTrack.`}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("meteosat9-link").addEventListener("click",(()=>{Vi.loadPic(28912,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")})),(0,o.gE)("meteosat11-link").addEventListener("click",(()=>{Vi.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")})),(0,o.gE)("himawari8-link").addEventListener("click",(()=>{Vi.himawari8()})),(0,o.gE)("goes16-link").addEventListener("click",(()=>{Vi.loadPic(41866,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")})),(0,o.gE)("goes18-link").addEventListener("click",(()=>{Vi.loadPic(51850,"https://cdn.star.nesdis.noaa.gov/GOES18/ABI/FD/GEOCOLOR/latest.jpg")}))}}),s.$.register({event:l.kR.onKeepTrackReady,cbName:this.constructor.name,cb:()=>{this.initDISCOVR_()}})}initDISCOVR_(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{if(e.status>=200&&e.status<400){JSON.parse(e.response).forEach((e=>{const t=e.image,i=e.identifier,a=i.slice(0,4),s=i.slice(4,6),n=i.slice(6,8),o=e.centroid_coordinates.lat,l=e.centroid_coordinates.lon;this.discvrPhotos_.push({imageUrl:`https://epic.gsfc.nasa.gov/archive/natural/${a}/${s}/${n}/png/${t}.png`,lat:o,lon:l})}));for(let e=1;e<this.discvrPhotos_.length+1;e++){const t=`<li id="discovr-link${e}" class="link satPhotoRow">DSCOVR Image ${e}</li>`;(0,o.gE)("sat-photo-menu-list").insertAdjacentHTML("beforeend",t),(0,o.gE)(`discovr-link${e}`).addEventListener("click",(()=>{Vi.loadPic(-1,this.discvrPhotos_[e-1].imageUrl),s.$.getMainCamera().camSnap((0,ji.sk)(this.discvrPhotos_[e-1].lat),(0,ji.fq)(this.discvrPhotos_[e-1].lon,s.$.getTimeManager().simulationTimeObj)),s.$.getMainCamera().changeZoom(.7)}))}}else{f.J.log("https://epic.gsfc.nasa.gov/ request failed!");const e='<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>';(0,o.gE)("sat-photo-menu-list").insertAdjacentHTML("beforeend",e)}},e.onerror=function(){f.J.log("https://epic.gsfc.nasa.gov/ request failed!"),(0,o.gE)("sat-photo-menu-list").insertAdjacentHTML("beforeend",'<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>')},e.send()}static loadPic(e,t){var i;s.$.getUiManager().searchManager.hideResults(),null===(i=s.$.getPlugin(g.A))||void 0===i||i.selectSat(s.$.getCatalogManager().sccNum2Id(e)),s.$.getMainCamera().changeZoom(.7),Vi.colorbox(t)}static himawari8(){var e;null===(e=s.$.getPlugin(g.A))||void 0===e||e.selectSat(s.$.getCatalogManager().sccNum2Id(40267)),s.$.getMainCamera().changeZoom(.7);let t=s.$.getTimeManager().simulationTimeObj;t.getTime()<Date.now()?t=new Date(t.getTime()-18e5):(s.$.getUiManager().toast("Can't load pictures from the future. Loading most recent photos.",l.pc.caution),t=new Date(Date.now()-18e5));const i=t.getUTCFullYear(),a=(t.getUTCMonth()+1).toString().padStart(2,"0"),n=t.getUTCDate().toString().padStart(2,"0"),o=t.getUTCHours().toString().padStart(2,"0"),r=(10*Math.floor(t.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3),(0,ui.r9)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${i}/${a}/${n}/${o}${r}00_0_0.png`,{image:!0})}}Vi.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout((()=>{settingsManager.isPreventColorboxClose=!1}),2e3),(0,ui.r9)(e,{image:!0})};const Xi=new Vi,Ji=i.p+"../img/video.png";class Yi{constructor(e,t,i,a){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=i,this.onError_=a}static handleError(e){e.message.includes("Permission denied")?f.J.warn('Permission denied! Did you click "Share"?'):f.J.warn(`Error:${e}`)}getStream(e){return t=this,i=void 0,s=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch((e=>(Yi.handleError(e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch((e=>(Yi.handleError(e),null))):(f.J.warn("Compatibility Error with Recording"),this.onError_(),!1):(f.J.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((a=void 0)||(a=Promise))((function(e,n){function o(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(o,l)}r((s=s.apply(t,i||[])).next())}));var t,i,a,s}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(f.J.debug("Recorder stopped."),this.stream_.getTracks().forEach((e=>e.stop())),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,i=new Blob(this.recordedBlobs,{type:this.supportedType}),a=window.URL.createObjectURL(i),n=document.createElement("a");n.style.display="none",n.href=a,n.download=t,s.$.containerRoot.appendChild(n),n.click(),setTimeout((()=>{s.$.containerRoot.removeChild(n),window.URL.revokeObjectURL(a)}),100)}start(){this.getStream().then((e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;const t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(const e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&f.J.debug("No supported type found for MediaRecorder");const i={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||Yi.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,i)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}f.J.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${i}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),f.J.debug(`Created MediaRecorder ${this.mediaRecorder_}`)})).catch((()=>{}))}}Yi.BIT_RATE_30_MBPS=3e7,Yi.BIT_RATE_20_MBPS=2e7,Yi.BIT_RATE_10_MBPS=1e7,Yi.BIT_RATE_5_MBPS=5e6,Yi.BIT_RATE_2_MBPS=2e6,Yi.BIT_RATE_1_MBPS=1e6;class Ki extends u.s{constructor(){super(...arguments),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return f.J.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){f.J.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=Ji,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerOnReady,cbName:this.constructor.name,cb:()=>{try{this.streamManagerInstance=new Yi(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save(Ki.FILE_NAME),this.setBottomIconToUnselected()}}Ki.FILE_NAME="keeptrack.webm";const Wi=new Ki,Zi=i.p+"../img/camera.png";class qi extends u.s{constructor(){super(...arguments),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=Zi,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.rmbL1ElementName="save-rmb",this.rmbL1Html=s.$.html`
    <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Save Image &#x27A4;</a></li>
  `,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.isRmbOnSat=!0,this.rmbL2ElementName="save-rmb-menu",this.rmbL2Html=s.$.html`
    <ul class='dropdown-contents'>
      <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
      <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
      <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
    </ul>
  `,this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),s.$.register({event:l.kR.altCanvasResize,cbName:this.constructor.name,cb:()=>this.queuedScreenshot_}),s.$.register({event:l.kR.endOfDraw,cbName:this.constructor.name,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){const e=document.createElement("a");e.download="keeptrack.png";const t=(new Date).getUTCFullYear(),i=settingsManager.copyrightOveride?"":`©${t} KEEPTRACK.SPACE`;e.href=qi.watermarkedDataUrl(i),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=s.$.getRenderer().domElement,i=document.createElement("canvas"),a=i.getContext("2d"),n=i.width=t.width,o=i.height=t.height;a.drawImage(t,0,0),a.font="24px nasalization";let l=a.measureText(e).width;a.globalAlpha=1,a.fillStyle="white",a.fillText(e,n-l-30,o-30);const{classificationstr:r,classificationColor:c}=qi.calculateClassificationText();""!==r&&(a.font="24px nasalization",a.globalAlpha=1,a.fillStyle=c,l=a.measureText(r).width,a.fillText(r,n/2-l,o-20),a.fillText(r,n/2-l,34)),s.$.containerRoot.appendChild(i);const d=i.toDataURL();return i.parentNode.removeChild(i),d}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:Et.getColors(settingsManager.classificationStr).backgroundColor}}}const Qi=new qi;var ea=i(3056),ta=i(3978),ia=i(1112);const aa=e=>{const t=new CustomEvent("customSubmit",{cancelable:!0});e.dispatchEvent(t)};var sa=i(1332);class na{static updateSensorPosition(e){var t;const i=s.$.getTimeManager(),a=s.$.getCatalogManager(),n=s.$.getSensorManager(),{lon:o,lat:l,alt:r,minaz:c,maxaz:d,minel:u,maxel:h,minrange:p,maxrange:m}=na.updateSettingsManager(e);n.whichRadar="CUSTOM",na.updateCustomSensorUi_();const v={lat:l,lon:o,alt:r,minAz:c,maxAz:d,minEl:u,maxEl:h,minRng:p,maxRng:m};a.satCruncher.postMessage({typ:ft.XY.SENSOR,sensor:v}),sa.g.updateSensorUiStyling([v]),null===(t=s.$.getPlugin(g.A))||void 0===t||t.selectSat(-1);const b=s.$.getMainCamera();m>6e3?b.changeZoom(M.N$.GEO):b.changeZoom(M.N$.LEO),b.camSnap((0,ji.sk)(l),(0,ji.fq)(o,i.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(na.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,o.gE)("cs-lat"),t=(0,o.gE)("cs-lon"),i=(0,o.gE)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),i.value=settingsManager.geolocation.alt.toString(),i.dispatchEvent(new Event("change")),(0,o.gE)("cs-telescope").checked=!0,(0,o.gE)("cs-minaz").disabled=!0,(0,o.gE)("cs-maxaz").disabled=!0,(0,o.gE)("cs-minel").disabled=!0,(0,o.gE)("cs-maxel").disabled=!0,(0,o.gE)("cs-minrange").disabled=!0,(0,o.gE)("cs-maxrange").disabled=!0,(0,o.gE)("cs-minaz-div").style.display="none",(0,o.gE)("cs-maxaz-div").style.display="none",(0,o.gE)("cs-minel-div").style.display="none",(0,o.gE)("cs-maxel-div").style.display="none",(0,o.gE)("cs-minrange-div").style.display="none",(0,o.gE)("cs-maxrange-div").style.display="none",(0,o.gE)("cs-minaz").value="0",(0,o.gE)("cs-maxaz").value="360",(0,o.gE)("cs-minel").value="10",(0,o.gE)("cs-maxel").value="90",(0,o.gE)("cs-minrange").value="100",(0,o.gE)("cs-maxrange").value="50000",(0,o.gE)("sensor-type").innerHTML="Telescope",(0,o.gE)("sensor-info-title").innerHTML="Custom Sensor",(0,o.gE)("sensor-country").innerHTML="Custom Sensor"}catch(e){f.J.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const oa=i.p+"../img/custom.png";var la=i(1582);class ra extends u.s{constructor(){super(...arguments),this.bottomIconCallback=()=>{if(this.isMenuButtonActive){const e=s.$.getSensorManager();e.isSensorSelected()?((0,o.gE)("cs-replace").style.display="",(0,o.gE)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,o.gE)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,o.gE)("cs-hei").value=e.currentSensors[0].alt.toString()):(0,o.gE)("cs-replace").style.display="none"}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=oa,this.sideMenuElementName="custom-sensor-menu",this.sideMenuTitle="Custom Sensor",this.sideMenuElementHtml=s.$.html`
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
    </div>`,this.sideMenuSettingsHtml=s.$.html`
    <div class="row" style="margin: 0 10px;">
      <div id="custom-sensors-sensor-list">
      </div>
    </div>`,this.sideMenuSettingsOptions={width:450,leftOffset:null,zIndex:3},this.rmbL1ElementName="create-rmb",this.rmbL1Html=s.$.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Create &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbMenuOrder=10,this.rmbL2ElementName="create-rmb-menu",this.rmbL2Html=s.$.html`
  <ul class='dropdown-contents'>
    <li id="create-observer-rmb"><a href="#">Create Observer Here</a></li>
    <li id="create-sensor-rmb"><a href="#">Create Sensor Here</a></li>
  </ul>`,this.rmbCallback=e=>{const t=s.$.getSensorManager(),i=s.$.getColorSchemeManager(),a=s.$.getUiManager(),n=s.$.getCatalogManager(),l=s.$.getInputManager().mouse;switch(e){case"create-observer-rmb":(0,y.xA)((0,o.gE)("custom-sensor-menu"),1e3),(0,o.gE)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,o.gE)("cs-telescope").checked||(0,o.gE)("cs-telescope").click(),(0,o.gE)("cs-uiName").value="Observer",(0,o.gE)("cs-lat").value=l.latLon.lat.toString(),(0,o.gE)("cs-lon").value=l.latLon.lon.toString(),(0,o.gE)("cs-hei").value="0",(0,o.gE)("cs-type").value="Observer",aa((0,o.gE)("customSensor")),n.satCruncher.postMessage({isSunlightView:!0,typ:ft.XY.SUNLIGHT_VIEW}),Ut.b.change("sunlight"),a.colorSchemeChangeAlert(i.sunlight),(0,Ft.p)({cruncher:n.satCruncher,cb:()=>{i.setColorScheme(i.sunlight,!0)},validationFunc:e=>e.satInSun});break;case"create-sensor-rmb":(0,y.xA)((0,o.gE)("custom-sensor-menu"),1e3),(0,o.gE)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,o.gE)("cs-telescope").checked&&(0,o.gE)("cs-telescope").click(),(0,o.gE)("cs-uiName").value="Custom Sensor",(0,o.gE)("cs-lat").value=l.latLon.lat.toString(),(0,o.gE)("cs-lon").value=l.latLon.lon.toString(),(0,o.gE)("cs-hei").value="0",(0,o.gE)("cs-type").value="Phased Array Radar",(0,o.gE)("cs-minaz").value="0",(0,o.gE)("cs-maxaz").value="360",(0,o.gE)("cs-minel").value="10",(0,o.gE)("cs-maxel").value="90",(0,o.gE)("cs-minrange").value="0",(0,o.gE)("cs-maxrange").value="5556",aa((0,o.gE)("customSensor")),Ut.b.change("default"),i.setColorScheme(i.default,!0),a.colorSchemeChangeAlert(i.currentColorScheme),n.satCruncher.postMessage({isSunlightView:!1,typ:ft.XY.SUNLIGHT_VIEW});break;case"colors-confidence-rmb":case"colors-rcs-rmb":case"colors-density-rmb":case"colors-starlink-rmb":case"colors-sunlight-rmb":case"colors-country-rmb":case"colors-velocity-rmb":case"colors-ageOfElset-rmb":case"colors-default-rmb":break;default:f.J.info(`Unknown RMB target: ${e}`)}},this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=s.$.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{ra.httpsCheck_(),ra.addCustomSensorFormSubmitListener(),ra.addTelescopeClickListener_(),ra.addCustomSensorBtnCLickListener_(),ra.addClearCustomSensorListener_()}})}static httpsCheck_(){"https:"!==location.protocol?(0,o.ys)("cs-geolocation"):ra.addUseGeolocationListener_()}static addCustomSensorFormSubmitListener(){(0,o.gE)("customSensor").addEventListener("submit",(e=>{e.preventDefault()}))}static addUseGeolocationListener_(){var e;(0,o.gE)("cs-geolocation").addEventListener("click",na.useCurrentGeolocationAsSensor),null===(e=s.$.getSoundManager())||void 0===e||e.play(h.A.CLICK)}static addClearCustomSensorListener_(){(0,o.gE)("cs-clear").addEventListener("click",(()=>{var e;s.$.getSensorManager().clearSecondarySensors(),null===(e=s.$.getSoundManager())||void 0===e||e.play(h.A.CLICK),ra.updateCustomSensorListDom()}))}static addCustomSensorBtnCLickListener_(){(0,o.gE)("cs-submit").addEventListener("click",(()=>{var e;ra.processCustomSensorSubmit_(),null===(e=s.$.getSoundManager())||void 0===e||e.play(h.A.CLICK)})),(0,o.gE)("cs-replace").addEventListener("click",(()=>{var e;ra.processCustomSensorSubmit_(!0),null===(e=s.$.getSoundManager())||void 0===e||e.play(h.A.CLICK)}))}static processCustomSensorSubmit_(e=!1){var t,i,a,n,l;null===(t=s.$.getPlugin(la.o))||void 0===t||t.setBottomIconToUnselected(),null===(i=s.$.getPlugin(ea.a))||void 0===i||i.setBottomIconToUnselected(),null===(a=s.$.getPlugin(ia.q))||void 0===a||a.setBottomIconToUnselected(),null===(n=s.$.getPlugin(wi.H))||void 0===n||n.setBottomIconToUnselected(),null===(l=s.$.getPlugin(dt.j))||void 0===l||l.setBottomIconToUnselected(),(0,o.gE)("sensor-type").value=(0,o.gE)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,o.gE)("sensor-info-title").innerHTML="Custom Sensor",(0,o.gE)("sensor-country").innerHTML="Custom Sensor";const r=(0,o.gE)("cs-uiName").value,c=ra.str2Deg((0,o.gE)("cs-lon").value),d=ra.str2Deg((0,o.gE)("cs-lat").value),u=(0,o.gE)("cs-hei").value,g=(0,o.gE)("cs-type").value,h=(0,o.gE)("cs-minaz").value,p=(0,o.gE)("cs-maxaz").value,m=(0,o.gE)("cs-minel").value,v=(0,o.gE)("cs-maxel").value,b=(0,o.gE)("cs-minrange").value,S=(0,o.gE)("cs-maxrange").value;let E=M._V.OBSERVER;switch(g){case"Observer":E=M._V.OBSERVER;break;case"Optical":E=M._V.OPTICAL;break;case"Mechanical":E=M._V.MECHANICAL;break;case"Phased Array Radar":E=M._V.PHASED_ARRAY_RADAR;break;default:f.J.info(`Unknown sensor type: ${g}`),E=M._V.OBSERVER}const _=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);s.$.getSensorManager().addSecondarySensor(new M.tn({id:null,lat:d,lon:c,alt:ra.str2Km(u),minAz:ra.str2Deg(h),maxAz:ra.str2Deg(p),minEl:ra.str2Deg(m),maxEl:ra.str2Deg(v),minRng:ra.str2Km(b),maxRng:ra.str2Km(S),type:E,name:"Custom Sensor",uiName:r,system:"Custom Sensor",country:"Custom Sensor",objName:`Custom Sensor-${_}`,operator:"Custom Sensor",zoom:ra.str2Km(S)>6e3?M.N$.GEO:M.N$.LEO,volume:!1}),e),ra.updateCustomSensorListDom()}static updateCustomSensorListDom(){var e;const t=((null===(e=s.$.getSensorManager().currentSensors[0])||void 0===e?void 0:e.objName.startsWith("Custom Sensor"))?[s.$.getSensorManager().currentSensors[0]]:[]).concat(s.$.getSensorManager().secondarySensors);(0,o.gE)("custom-sensors-sensor-list").innerHTML=t.map((e=>`\n      <div class="row" style="height: 100%; display: flex; align-items: center; margin: 20px 0px;">\n        <div class="col s10 m10 l10">\n          <div><strong>Sensor Name:</strong> ${e.uiName}</div>\n          <div><strong>Latitude:</strong> ${e.lat.toFixed(0)}°</div>\n          <div><strong>Longitude:</strong> ${e.lon.toFixed(0)}°</div>\n          <div><strong>Elevation:</strong> ${e.alt.toFixed(0)} km</div>\n          <div><strong>Azimuth:</strong> ${e.minAz.toFixed(0)}° - ${e.maxAz.toFixed(0)}°</div>\n          <div><strong>Elevation:</strong> ${e.minEl.toFixed(0)}° - ${e.maxEl.toFixed(0)}°</div>\n          <div><strong>Range:</strong> ${e.minRng.toFixed(0)} km - ${e.maxRng.toFixed(0)} km</div>\n        </div>\n        <div class="col s2 m2 l2 center-align remove-icon" style="display: flex; align-items: center; height: 100%;">\n          <img class="remove-sensor" data-id="${e.objName}" src="${Bi}" style="cursor: pointer;"></img>\n        </div>\n      </div>\n      <div class="divider"></div>\n      `)).join(""),document.querySelectorAll(".remove-sensor").forEach((e=>{e.addEventListener("click",(e=>{var t;e.preventDefault(),null===(t=s.$.getSoundManager())||void 0===t||t.play(h.A.CLICK);const i=e.target.dataset.id,a=s.$.getSensorManager().getSensorByObjName(i);s.$.getSensorManager().removeSensor(a),ra.updateCustomSensorListDom()}))}))}static addTelescopeClickListener_(){(0,o.gE)("cs-telescope").addEventListener("click",(()=>{if((0,o.gE)("cs-telescope").checked)(0,o.gE)("cs-minaz-div").style.display="none",(0,o.gE)("cs-maxaz-div").style.display="none",(0,o.gE)("cs-minel-div").style.display="none",(0,o.gE)("cs-maxel-div").style.display="none",(0,o.gE)("cs-minrange-div").style.display="none",(0,o.gE)("cs-maxrange-div").style.display="none",(0,o.gE)("cs-minaz").value="0",(0,o.gE)("cs-maxaz").value="360",(0,o.gE)("cs-minel").value="10",(0,o.gE)("cs-maxel").value="90",(0,o.gE)("cs-minrange").value="100",(0,o.gE)("cs-maxrange").value="1000000";else{(0,o.gE)("cs-minaz-div").style.display="block",(0,o.gE)("cs-maxaz-div").style.display="block",(0,o.gE)("cs-minel-div").style.display="block",(0,o.gE)("cs-maxel-div").style.display="block",(0,o.gE)("cs-minrange-div").style.display="block",(0,o.gE)("cs-maxrange-div").style.display="block";const e=s.$.getSensorManager();e.isSensorSelected()&&((0,o.gE)("cs-minaz").value=e.currentSensors[0].minAz.toString(),(0,o.gE)("cs-maxaz").value=e.currentSensors[0].maxAz.toString(),(0,o.gE)("cs-minel").value=e.currentSensors[0].minEl.toString(),(0,o.gE)("cs-maxel").value=e.currentSensors[0].maxEl.toString(),(0,o.gE)("cs-minrange").value=e.currentSensors[0].minRng.toString(),(0,o.gE)("cs-maxrange").value=e.currentSensors[0].maxRng.toString())}}))}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}var ca=i(7133);const da=i.p+"../img/multi-site.png";class ua extends u.s{constructor(){super(),this.dependencies_=[g.A.name],this.sensorList_=s.$.getSensorManager().sensorListSsn.concat(s.$.getSensorManager().sensorListMw,s.$.getSensorManager().sensorListMda,s.$.getSensorManager().sensorListLeoLabs,s.$.getSensorManager().sensorListEsoc,s.$.getSensorManager().sensorListRus,s.$.getSensorManager().sensorListPrc,s.$.getSensorManager().sensorListOther),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!1,this.lengthOfLookAngles_=1,this.angleCalculationInterval_=30,this.disabledSensors_=this.sensorList_.filter((e=>!s.$.getSensorManager().sensorListMw.includes(e))),this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)},this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=da,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:750},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=s.$.html`
    The Multi-Site Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a satellite and multiple sensors.
    A satellite must first be selected before the menu can be used.
    <br><br>
    By default the menu will calculate the look angles for all sensors in the Space Surveillance Netowrk.
    If you would like to calculate the look angles for additional sensors, you can export a csv file at the bottom of the menu.
    The csv file will contain look angles for all sensors.
    <br><br>
    Clicking on a row in the table will select the sensor and change the simulation time to the time of the look angle.`,this.sideMenuElementName="multi-site-look-angles-menu",this.sideMenuTitle="Multi-Sensor Look Angles",this.sideMenuElementHtml=s.$.html`
    <div class="row"></div>
    <div class="row">
      <table id="multi-site-look-angles-table" class="center-align striped-light centered"></table>
    </div>`,this.sideMenuSettingsHtml=s.$.html`
    <div class="row" style="margin: 0 10px;">
      <div id="multi-site-look-angles-sensor-list">
      </div>
    </div>`,this.sideMenuSettingsWidth=350,this.downloadIconCb=()=>{s.$.getSoundManager().play(h.A.EXPORT);const e=s.$.getSensorManager().lastMultiSiteArray.map((e=>({time:e.time,sensor:e.objName,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)})));(0,at.g3)(e,`multisite-${this.selectSatManager_.getSelectedSat().sccNum6}-look-angles`)},this.sideMenuSettingsOptions={width:300,leftOffset:null,zIndex:3},this.selectSatManager_=s.$.getPlugin(g.A),this.sensorList_=this.sensorList_.filter(((e,t,i)=>t===i.findIndex((t=>t.uiName===e.uiName))))}addHtml(){super.addHtml(),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{this.checkIfCanBeEnabled_(e)}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&s.$.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.refreshSideMenuData(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}addJs(){super.addJs(),s.$.register({event:l.kR.staticOffsetChange,cbName:this.constructor.name,cb:()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)}})}refreshSideMenuData(e){this.isMenuButtonActive&&e&&(0,b.Cs)((()=>{var t,i;const a=(0,o.gE)("multi-site-look-angles-sensor-list");if(!a)return void f.J.warn("Could not find sensor list dom");a.innerHTML="";const n=[];for(const o of this.sensorList_){if(!o.objName)continue;const l=document.createElement("button");l.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors_.includes(o)&&l.classList.add("btn-red"),n.push(o),l.innerText=null!==(i=null!==(t=o.uiName)&&void 0!==t?t:o.shortName)&&void 0!==i?i:o.objName,l.addEventListener("click",(()=>{l.classList.contains("btn-red")?(l.classList.remove("btn-red"),this.disabledSensors_.splice(this.disabledSensors_.indexOf(o),1),s.$.getSoundManager().play(h.A.TOGGLE_ON)):(l.classList.add("btn-red"),this.disabledSensors_.push(o),s.$.getSoundManager().play(h.A.TOGGLE_OFF)),this.getlookanglesMultiSite_(e,n.filter((e=>!this.disabledSensors_.includes(e))))})),a.appendChild(l),a.appendChild(document.createTextNode(" "))}this.getlookanglesMultiSite_(e,n.filter((e=>!this.disabledSensors_.includes(e))))}))}getlookanglesMultiSite_(e,t){const i=s.$.getTimeManager(),a=s.$.getSensorManager(),n=s.$.getCatalogManager().staticSet;if(!t){t=[];for(const e in n){const i=n[e];t.push(i)}}const o=!a.isSensorSelected(),l=[...a.currentSensors],r=M.hJ/(e.satrec.no*M.hJ/M.DD),c=[];for(const a of t){if(a.maxRng<e.perigee&&(!a.maxRng2||a.maxRng2<e.perigee))continue;sa.g.updateSensorUiStyling([a]);let t=0;for(let s=0;s<24*this.lengthOfLookAngles_*60*60;s+=this.angleCalculationInterval_){t=1e3*s;const n=i.getOffsetTimeObj(t),o=ua.propagateMultiSite_(n,e.satrec,a);""!==o.time&&(c.push(o),s+=60*r*.75)}}c.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),a.lastMultiSiteArray=c,o?a.setCurrentSensor(null):a.setCurrentSensor(l),ua.populateMultiSiteTable_(c)}static propagateMultiSite_(e,t,i){const a=it.h.getRae(e,t,i);return it.h.checkIsInView(i,a)?{time:e.toISOString(),el:a.el,az:a.az,rng:a.rng,objName:i.objName}:{time:"",el:0,az:0,rng:0,objName:""}}static populateMultiSiteTable_(e){var t,i,a;const n=s.$.getSensorManager(),l=s.$.getCatalogManager().staticSet,r=(0,o.gE)("multi-site-look-angles-table");r.innerHTML="";let c=r.insertRow(),d=c.insertCell();d.appendChild(document.createTextNode("Time")),d.setAttribute("style","text-decoration: underline");let u=c.insertCell();u.appendChild(document.createTextNode("El")),u.setAttribute("style","text-decoration: underline");let g=c.insertCell();g.appendChild(document.createTextNode("Az")),g.setAttribute("style","text-decoration: underline");let h=c.insertCell();h.appendChild(document.createTextNode("Rng")),h.setAttribute("style","text-decoration: underline");let p=c.insertCell();p.appendChild(document.createTextNode("Sensor")),p.setAttribute("style","text-decoration: underline");const m=s.$.getTimeManager();for(const s of e){const e=l.find((e=>e.objName===s.objName));e&&(c=r.insertRow(),c.setAttribute("class","link"),d=c.insertCell(),d.appendChild(document.createTextNode((0,ai.i)(s.time,"isoDateTime",!0))),u=c.insertCell(),u.appendChild(document.createTextNode(s.el.toFixed(1))),g=c.insertCell(),g.appendChild(document.createTextNode(s.az.toFixed(0))),h=c.insertCell(),h.appendChild(document.createTextNode(s.rng.toFixed(0))),p=c.insertCell(),p.appendChild(document.createTextNode(null!==(a=null!==(i=null!==(t=e.uiName)&&void 0!==t?t:e.shortName)&&void 0!==i?i:e.objName)&&void 0!==a?a:"")),c.addEventListener("click",(()=>{m.changeStaticOffset(new Date(s.time).getTime()-(new Date).getTime()),n.setSensor(e,e.sensorId)})))}}}var ga=i(9996);const ha=i.p+"../img/search.png";class pa extends u.s{constructor(){super(),this.dependencies_=[yi.c.name,g.A.name],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=ha,this.isRequireSensorSelected=!0,this.isAddStfLinksOnce=!1,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=s.$.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
  <br><br>
  This is unlikely to be very helpful unless you own/operate a sensor with a search box functionality.`,this.sideMenuElementName="stf-menu",this.sideMenuElementHtml=s.$.html`
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
  </div>`,this.selectSatManager_=s.$.getPlugin(g.A)}addHtml(){super.addHtml(),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{(null==e?void 0:e.isSatellite())?((0,o.FG)("stf-on-object-link"),s.$.getPlugin(yi.c)&&!this.isAddStfLinksOnce&&((0,o.gE)("sat-info-top-links").insertAdjacentHTML("beforeend",s.$.html`
            <div id="stf-on-object-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,o.gE)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0)):(0,o.ys)("stf-on-object-link")}})}addJs(){super.addJs(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("stfForm").addEventListener("submit",(e=>{e.preventDefault(),s.$.getSoundManager().play(h.A.MENU_BUTTON),this.onSubmit.bind(this)()})),(0,o.gE)("stf-remove-last").addEventListener("click",(()=>{s.$.getSoundManager().play(h.A.MENU_BUTTON),s.$.getSensorManager().removeStf()})),(0,o.gE)("stf-clear-all").addEventListener("click",(()=>{s.$.getSoundManager().play(h.A.MENU_BUTTON),s.$.getSensorManager().clearStf()})),(0,o.gE)("stf-azExt").addEventListener("blur",(()=>{const e=parseFloat((0,o.gE)("stf-az").value),t=parseFloat((0,o.gE)("stf-el").value),i=parseFloat((0,o.gE)("stf-rng").value);let a=parseFloat((0,o.gE)("stf-azExt").value);a>80&&(a=80,(0,o.gE)("stf-azExt").value=a.toFixed(1));const n=M.kp.fromDateTime(s.$.getTimeManager().simulationTimeObj),l=s.$.getSensorManager().currentSensors[0].toGeodetic().toITRF(n).toJ2000(),r=new M.Jf(n,i,(e-a/2)*M.up,t*M.up).position(l),c=new M.Jf(M.kp.fromDateTime(s.$.getTimeManager().simulationTimeObj),i,(e+a/2)*M.up,t*M.up).position(l),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,o.gE)("stf-azExtKm").value=d.toFixed(1)})),(0,o.gE)("stf-elExt").addEventListener("blur",(()=>{const e=parseFloat((0,o.gE)("stf-az").value),t=parseFloat((0,o.gE)("stf-el").value),i=parseFloat((0,o.gE)("stf-rng").value);let a=parseFloat((0,o.gE)("stf-elExt").value);a>80&&(a=80,(0,o.gE)("stf-elExt").value=a.toFixed(1));const n=M.kp.fromDateTime(s.$.getTimeManager().simulationTimeObj),l=s.$.getSensorManager().currentSensors[0].toGeodetic().toITRF(n).toJ2000(),r=new M.Jf(n,i,e*M.up,(t-a/2)*M.up).position(l),c=new M.Jf(M.kp.fromDateTime(s.$.getTimeManager().simulationTimeObj),i,e*M.up,(t+a/2)*M.up).position(l),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,o.gE)("stf-elExtKm").value=d.toFixed(1)}))}}),s.$.register({event:l.kR.resetSensor,cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),s.$.register({event:l.kR.setSensor,cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,y.pz)((0,o.gE)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonActive=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),s.$.getUiManager().hideSideMenus()}onSubmit(){if(!this.verifySensorSelected())return;const e=parseFloat((0,o.gE)("stf-az").value),t=parseFloat((0,o.gE)("stf-azExt").value),i=parseFloat((0,o.gE)("stf-el").value),a=parseFloat((0,o.gE)("stf-elExt").value),n=parseFloat((0,o.gE)("stf-rng").value),l=parseFloat((0,o.gE)("stf-rngExt").value),r=e-t/2<0?e-t/2+360:e-t/2,c=e+t/2>360?e+t/2-360:e+t/2,d=i-a/2,u=i+a/2,g=n-l/2,h=n+l/2,p=s.$.getSensorManager().currentSensors[0],m=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),v=new M.tn({objName:`STF-${m}`,lat:p.lat,lon:p.lon,alt:p.alt,minAz:r,maxAz:c,minEl:d,maxEl:u,minRng:g,maxRng:h,type:M._V.SHORT_TERM_FENCE,name:"STF",uiName:"STF",zoom:h>6e3?M.N$.GEO:M.N$.LEO,volume:!0});p.isRaeInFov({az:r,el:d,rng:g})&&p.isRaeInFov({az:c,el:u,rng:h})?s.$.getSensorManager().addStf(v):f.J.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=s.$.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=s.$.getTimeManager().simulationTimeObj,i=(0,M.Eg)(t,this.selectSatManager_.primarySatObj.position,e.currentSensors[0]);(0,o.gE)("stf-az").value=i.az.toFixed(1),(0,o.gE)("stf-el").value=i.el.toFixed(1),(0,o.gE)("stf-rng").value=i.rng.toFixed(1),s.$.getUiManager().hideSideMenus(),(0,y.xA)((0,o.gE)("stf-menu"),1e3),this.isMenuButtonActive=!0,this.setBottomIconToSelected()}}const ma=i.p+"../img/github.png";class va extends u.s{constructor(){super(...arguments),this.dependencies_=[et.p.name]}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:va.uiManagerFinal_})}static uiManagerFinal_(){var e;const t=document.createElement("li");t.innerHTML=s.$.html`
          <a id="github-share1" class="top-menu-icons" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            src="${ma}"
            />
          </a>
          `,null===(e=(0,o.gE)("nav-mobile2",!0))||void 0===e||e.insertBefore(t,(0,o.gE)("nav-mobile2").firstChild)}}var ba=i(4986),fa=i(4183);const Sa=i.p+"../img/view_timeline2.png";var Ea=i(4455);class Ma extends u.s{constructor(){super(...arguments),this.dependencies_=[g.A.name],this.drawEvents_={},this.lengthOfLookAngles_=6,this.lengthOfBadPass_=120,this.lengthOfAvgPass_=240,this.angleCalculationInterval_=30,this.isRequireSensorSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.bottomIconElementName="menu-satellite-timeline",this.bottomIconImg=Sa,this.bottomIconLabel="Satellite Timeline",this.bottomIconCallback=()=>{if(this.verifySensorSelected())return 0===s.$.getPlugin(Ea.P).watchlistList.length&&-1===s.$.getPlugin(g.A).selectedSat?(s.$.getUiManager().toast("Add Satellites to Watchlist or Select a Satellite",l.pc.caution),void(0,G.h)((0,o.gE)(this.bottomIconElementName))):void(this.isMenuButtonActive&&this.resizeCanvas_())},this.helpTitle="Satellite Timeline",this.helpBody="The Satellite Timeline plugin shows the times when a sensor has visiblity of various satellites. The timeline is color-coded to show the quality of the\n    pass. Red is a bad pass, yellow is an average pass, and green is a good pass. Click on a pass to select that satellite and change the time to that pass.",this.sideMenuElementName="satellite-timeline-menu",this.sideMenuTitle="Satellite Timeline",this.sideMenuElementHtml=s.$.html`
    <div class="row"></div>
    <div class="row" style="margin: 0;">
      <canvas id="satellite-timeline-canvas"></canvas>
      <canvas id="satellite-timeline-canvas-static" style="display: none;"></canvas>
    </div>`,this.sideMenuSettingsHtml=s.$.html`
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
    </div>`,this.sideMenuSettingsOptions={width:350,leftOffset:0,zIndex:10},this.downloadIconCb=()=>{const e=document.getElementById("satellite-timeline-canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download=`sensor-${s.$.getSensorManager().getSensor().uiName}-timeline.png`,t.click()}}addHtml(){super.addHtml(),i.e(700).then(i.bind(i,1700)),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{this.canvas_=(0,o.gE)("satellite-timeline-canvas"),this.canvasStatic_=(0,o.gE)("satellite-timeline-canvas-static"),this.ctx_=this.canvas_.getContext("2d"),this.ctxStatic_=this.canvasStatic_.getContext("2d"),(0,o.gE)("satellite-timeline-setting-total-length").addEventListener("change",(()=>{this.lengthOfLookAngles_=parseFloat((0,o.gE)("satellite-timeline-setting-total-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("satellite-timeline-setting-interval").addEventListener("change",(()=>{this.angleCalculationInterval_=parseFloat((0,o.gE)("satellite-timeline-setting-interval").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("satellite-timeline-setting-bad-length").addEventListener("change",(()=>{this.lengthOfBadPass_=parseFloat((0,o.gE)("satellite-timeline-setting-bad-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("satellite-timeline-setting-avg-length").addEventListener("change",(()=>{this.lengthOfAvgPass_=parseFloat((0,o.gE)("satellite-timeline-setting-avg-length").value),this.ctxStatic_.reset(),this.updateTimeline()}))}})}addJs(){super.addJs(),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{this.isMenuButtonActive&&(e&&(this.ctxStatic_.reset(),this.updateTimeline(),this.canvas_.style.display="block"),e||0!==s.$.getPlugin(Ea.P).watchlistList.length?this.verifySensorSelected(!1)&&this.setBottomIconToEnabled():this.setBottomIconToDisabled())}}),s.$.register({event:l.kR.onWatchlistUpdated,cbName:this.constructor.name,cb:this.onWatchlistUpdated_.bind(this)}),s.$.register({event:l.kR.resize,cbName:this.constructor.name,cb:this.resizeCanvas_.bind(this)})}onWatchlistUpdated_(e){0===e.length&&-1===s.$.getPlugin(g.A).selectedSat?this.setBottomIconToDisabled():this.verifySensorSelected(!1)&&this.setBottomIconToEnabled()}updateTimeline(){try{if(!1===s.$.getSensorManager().isSensorSelected())return;if(!this.isMenuButtonActive)return;const e=this.calculatePasses_();this.drawTimeline_(e)}catch(e){f.J.info(e)}}calculatePasses_(){const e=[],t=s.$.getSensorManager().getSensor(),i=s.$.getPlugin(Ea.P).getSatellites().concat(s.$.getPlugin(g.A).selectedSat).filter((e=>-1!==e));for(const a of i){const i=s.$.getCatalogManager().getSat(a),n={satellite:i,passes:[]};if(t.maxRng<i.perigee&&(!t.maxRng2||t.maxRng2<i.perigee))continue;let o=0;const l=60*this.lengthOfLookAngles_*60;let r=!1,c=!1,d=!1,u=null;for(let e=0;e<l;e+=this.angleCalculationInterval_){o=1e3*e;const a=s.$.getTimeManager().getOffsetTimeObj(o),g=Ma.propagateMultiSite(a,i.satrec,t);g.time&&!r&&(u=new Date(g.time),r=!0,c=!0),!g.time&&r&&(d=!0,r=!1,e+=60*i.period*.75),(c&&d||c&&e===l-this.angleCalculationInterval_)&&(n.passes.push({start:u,end:a}),c=!1,d=!1)}e.push(n)}return e}static propagateMultiSite(e,t,i){const a=it.h.getRae(e,t,i);return it.h.checkIsInView(i,a)?{time:e,el:a.el,az:a.az,rng:a.rng,objName:null}:{time:null,el:0,az:0,rng:0,objName:null}}drawTimeline_(e){const t=this.canvas_,i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),this.canvas_=i,this.ctx_=this.canvas_.getContext("2d"),this.drawEvents_={};const a=.1*this.canvas_.width,n=.8*this.canvas_.width,o=.75*this.canvas_.height,r=s.$.getTimeManager(),c=r.simulationTimeObj.getTime(),d=c+60*this.lengthOfLookAngles_*60*1e3;this.ctx_.reset(),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(a,0,n,o-15);const u=o/(e.length+1),h=n/(d-c);this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(a,0+o-20),this.ctx_.lineTo(a+n,0+o-20),this.ctx_.stroke();for(let e=0;e<=this.lengthOfLookAngles_;e++){const t=a+60*e*60*1e3*h;this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+o-25),this.ctx_.lineTo(t,0+o-15),this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.stroke(),this.ctx_.lineWidth=1,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+o-15),this.ctx_.lineTo(t,0),this.ctx_.stroke();let i=r.simulationTimeObj.getUTCHours();i=(i+e)%24,this.ctx_.font="14px Consolas",this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(`${i}h`,t-10,0+o)}e.forEach(((e,t)=>{const i=0+(t+1)*u;if(this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.font="14px Consolas",this.ctx_.fillText(e.satellite.sccNum,a-150,i+5),e.passes.forEach((n=>{const o=n.start.getTime(),r=n.end.getTime(),d=a+(o-c)*h,u=a+(r-c)*h,p=(r-o)/M.If;p<this.lengthOfBadPass_?this.ctx_.fillStyle="rgb(255, 42, 4)":p<this.lengthOfAvgPass_?this.ctx_.fillStyle="rgb(252, 232, 58)":this.ctx_.fillStyle="rgb(86, 240, 0)",this.ctx_.fillRect(d,i-10,u-d,20);const m=(t,a)=>{if(t>=d-10&&t<=u+10&&a>=i-10&&a<=i+10){const i=new Date(o).toISOString().slice(11,19),s=new Date(r).toISOString().slice(11,19),n=`${e.satellite.sccNum}: ${i} - ${s}`;this.ctx_.font="14px Consolas";const l=this.ctx_.measureText(n).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-l/2-6,a-30,l+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-l/2-3,a-27,l+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(n,t-l/2,a-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${o}-${r}`]=m,this.canvas_.addEventListener("click",(t=>{const i=this.canvas_.getBoundingClientRect(),a=t.clientX-i.left,n=t.clientY-i.top;if(m(a,n)){const t=s.$.getTimeManager();t.changeStaticOffset(new Date(o).getTime()-t.realTime),t.calculateSimulationTime(),s.$.runEvent(l.kR.updateDateTime,new Date(t.dynamicOffsetEpoch+t.staticOffset)),s.$.getPlugin(g.A).selectSat(e.satellite.id)}}))})),0===e.passes.length){this.ctx_.fillStyle="rgba(200, 200, 200, 0.2)",this.ctx_.fillRect(a,i-10,n,20);const s=(t,s)=>{if(t>=a&&t<=a+n&&s>=i-10&&s<=i+10){const i=`${e.satellite.sccNum}: No Passes`;this.ctx_.font="14px Consolas";const a=this.ctx_.measureText(i).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-a/2-6,s-30,a+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-a/2-3,s-27,a+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(i,t-a/2,s-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${e.satellite.id}-no-passes`]=s}})),this.canvas_.addEventListener("mousemove",(e=>{this.handleOnMouseMove_(e)})),this.ctxStatic_=this.canvasStatic_.getContext("2d"),this.ctxStatic_.drawImage(this.canvas_,0,0)}handleOnMouseMove_(e){this.ctx_.reset(),this.ctx_.drawImage(this.canvasStatic_,0,0);const t=this.canvas_.getBoundingClientRect(),i=e.clientX-t.left,a=e.clientY-t.top;let s=!1;for(const e in this.drawEvents_){const t=this.drawEvents_[e](i,a);s=s||t}s||(this.canvas_.style.cursor="default")}resizeCanvas_(e){null!=e||(e=!1);const t=(0,o.gE)("satellite-timeline-menu");"none"!==t.style.display&&(e||window.innerWidth>window.innerHeight?(t.style.width=`${window.innerWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.height=window.innerHeight):(settingsManager.mapWidth=2*settingsManager.mapHeight,t.style.width=`${settingsManager.mapWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.style.width=`${window.innerWidth}px`,this.canvas_.height=window.innerHeight-100,this.canvas_.style.height=window.innerHeight-100+"px"),this.canvasStatic_.width=this.canvas_.width,this.canvasStatic_.height=this.canvas_.height,this.updateTimeline())}}const _a=i.p+"../img/view_timeline.png";class ya extends u.s{constructor(){super(),this.dependencies_=[g.A.name],this.drawEvents_={},this.allSensorLists_=s.$.getSensorManager().sensorListSsn.concat(s.$.getSensorManager().sensorListMw,s.$.getSensorManager().sensorListMda,s.$.getSensorManager().sensorListLeoLabs,s.$.getSensorManager().sensorListEsoc,s.$.getSensorManager().sensorListRus,s.$.getSensorManager().sensorListPrc,s.$.getSensorManager().sensorListOther),this.enabledSensors_=this.allSensorLists_.filter((e=>s.$.getSensorManager().sensorListMw.includes(e))),this.lengthOfLookAngles_=6,this.lengthOfBadPass_=120,this.lengthOfAvgPass_=240,this.angleCalculationInterval_=30,this.isRequireSatelliteSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.bottomIconElementName="menu-sensor-timeline",this.bottomIconImg=_a,this.bottomIconLabel="Sensor Timeline",this.bottomIconCallback=()=>{this.isMenuButtonActive&&(this.resizeCanvas_(),this.updateTimeline())},this.helpTitle="Sensor Timeline",this.helpBody="The Sensor Timeline plugin shows the times when a satellite is in view of various sensors. The timeline is color-coded to show the quality of the\n    pass. Red is a bad pass, yellow is an average pass, and green is a good pass. Click on a pass to change the sensor and time to that pass.",this.sideMenuElementName="sensor-timeline-menu",this.sideMenuTitle="Sensor Timeline",this.sideMenuElementHtml=s.$.html`
    <div class="row"></div>
    <div class="row" style="margin: 0;">
      <canvas id="sensor-timeline-canvas"></canvas>
      <canvas id="sensor-timeline-canvas-static" style="display: none;"></canvas>
    </div>`,this.sideMenuSettingsHtml=s.$.html`
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
    </div>`,this.sideMenuSettingsOptions={width:350,leftOffset:0,zIndex:10},this.downloadIconCb=()=>{const e=document.getElementById("sensor-timeline-canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download=`sat-${s.$.getPlugin(g.A).getSelectedSat().sccNum6}-timeline.png`,t.click()},this.allSensorLists_=this.allSensorLists_.filter(((e,t,i)=>t===i.findIndex((t=>t.uiName===e.uiName))))}addHtml(){super.addHtml(),i.e(42).then(i.bind(i,2042)),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{this.canvas_=(0,o.gE)("sensor-timeline-canvas"),this.canvasStatic_=(0,o.gE)("sensor-timeline-canvas-static"),this.ctx_=this.canvas_.getContext("2d"),this.ctxStatic_=this.canvasStatic_.getContext("2d"),(0,o.gE)("sensor-timeline-setting-total-length").addEventListener("change",(()=>{this.lengthOfLookAngles_=parseFloat((0,o.gE)("sensor-timeline-setting-total-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("sensor-timeline-setting-interval").addEventListener("change",(()=>{this.angleCalculationInterval_=parseFloat((0,o.gE)("sensor-timeline-setting-interval").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("sensor-timeline-setting-bad-length").addEventListener("change",(()=>{this.lengthOfBadPass_=parseFloat((0,o.gE)("sensor-timeline-setting-bad-length").value),this.ctxStatic_.reset(),this.updateTimeline()})),(0,o.gE)("sensor-timeline-setting-avg-length").addEventListener("change",(()=>{this.lengthOfAvgPass_=parseFloat((0,o.gE)("sensor-timeline-setting-avg-length").value),this.ctxStatic_.reset(),this.updateTimeline()}))}})}addJs(){super.addJs(),s.$.register({event:l.kR.selectSatData,cbName:this.constructor.name,cb:e=>{this.isMenuButtonActive&&e&&(this.ctxStatic_.reset(),this.updateTimeline(),this.canvas_.style.display="block")}})}updateTimeline(){try{if(-1===s.$.getPlugin(g.A).selectedSat)return;if(!this.isMenuButtonActive)return;this.calculateSensors_();const e=this.calculatePasses_();this.drawTimeline_(e)}catch(e){f.J.info(e)}}calculateSensors_(){var e,t;const i=(0,o.gE)("sensor-timeline-sensor-list");if(i){i.innerHTML="";for(const a of this.allSensorLists_){if(!a.objName)continue;const n=document.createElement("button");n.classList.add("btn","btn-ui","waves-effect","waves-light"),this.enabledSensors_.includes(a)||n.classList.add("btn-red"),n.innerText=null!==(t=null!==(e=a.uiName)&&void 0!==e?e:a.shortName)&&void 0!==t?t:a.objName,n.addEventListener("click",(()=>{n.classList.contains("btn-red")?(n.classList.remove("btn-red"),this.enabledSensors_.push(a),s.$.getSoundManager().play(h.A.TOGGLE_ON)):(n.classList.add("btn-red"),this.enabledSensors_.splice(this.enabledSensors_.indexOf(a),1),s.$.getSoundManager().play(h.A.TOGGLE_OFF)),this.ctxStatic_.reset(),this.updateTimeline()})),i.appendChild(n),i.appendChild(document.createTextNode(" "))}}else f.J.warn("Could not find sensor list dom")}calculatePasses_(){const e=[],t=s.$.getPlugin(g.A).getSelectedSat();for(const i of this.enabledSensors_){const a={sensor:i,passes:[]};if(i.maxRng<t.perigee&&(!i.maxRng2||i.maxRng2<t.perigee)){e.push(a);continue}sa.g.updateSensorUiStyling([i]);let n=0;const o=60*this.lengthOfLookAngles_*60;let l=!1,r=!1,c=!1,d=null;for(let e=0;e<o;e+=this.angleCalculationInterval_){n=1e3*e;const u=s.$.getTimeManager().getOffsetTimeObj(n),g=ya.propagateMultiSite(u,t.satrec,i);g.time&&!l&&(d=new Date(g.time),l=!0,r=!0),!g.time&&l&&(c=!0,l=!1,e+=60*t.period*.75),(r&&c||r&&e===o-this.angleCalculationInterval_)&&(a.passes.push({start:d,end:u}),r=!1,c=!1)}e.push(a)}return e}static propagateMultiSite(e,t,i){const a=it.h.getRae(e,t,i);return it.h.checkIsInView(i,a)?{time:e,el:a.el,az:a.az,rng:a.rng,objName:null}:{time:null,el:0,az:0,rng:0,objName:null}}drawTimeline_(e){const t=this.canvas_,i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),this.canvas_=i,this.ctx_=this.canvas_.getContext("2d"),this.drawEvents_={};const a=.1*this.canvas_.width,n=.8*this.canvas_.width,o=.75*this.canvas_.height,r=s.$.getTimeManager(),c=r.simulationTimeObj.getTime(),d=c+60*this.lengthOfLookAngles_*60*1e3;this.ctx_.reset(),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(a,0,n,o-15);const u=o/(e.length+1),h=n/(d-c);this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(a,0+o-20),this.ctx_.lineTo(a+n,0+o-20),this.ctx_.stroke();for(let e=0;e<=this.lengthOfLookAngles_;e++){const t=a+60*e*60*1e3*h;this.ctx_.lineWidth=5,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+o-25),this.ctx_.lineTo(t,0+o-15),this.ctx_.strokeStyle="rgb(255, 255, 255)",this.ctx_.stroke(),this.ctx_.lineWidth=1,this.ctx_.beginPath(),this.ctx_.moveTo(t,0+o-15),this.ctx_.lineTo(t,0),this.ctx_.stroke();let i=r.simulationTimeObj.getUTCHours();i=(i+e)%24,this.ctx_.font="14px Consolas",this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(`${i}h`,t-10,0+o)}e.forEach(((e,t)=>{const i=0+(t+1)*u;if(this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.font="14px Consolas",this.ctx_.fillText(e.sensor.uiName,a-150,i+5),e.passes.forEach((n=>{const o=n.start.getTime(),r=n.end.getTime(),d=a+(o-c)*h,u=a+(r-c)*h,p=(r-o)/M.If;p<this.lengthOfBadPass_?this.ctx_.fillStyle="rgb(255, 42, 4)":p<this.lengthOfAvgPass_?this.ctx_.fillStyle="rgb(252, 232, 58)":this.ctx_.fillStyle="rgb(86, 240, 0)",this.ctx_.fillRect(d,i-10,u-d,20);const m=(t,a)=>{if(t>=d-10&&t<=u+10&&a>=i-10&&a<=i+10){const i=new Date(o).toISOString().slice(11,19),s=new Date(r).toISOString().slice(11,19),n=`${e.sensor.uiName}: ${i} - ${s}`;this.ctx_.font="14px Consolas";const l=this.ctx_.measureText(n).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-l/2-6,a-30,l+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-l/2-3,a-27,l+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(n,t-l/2,a-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${o}-${r}`]=m,this.canvas_.addEventListener("click",(t=>{const i=this.canvas_.getBoundingClientRect(),a=t.clientX-i.left,n=t.clientY-i.top;if(m(a,n)){const t=s.$.getTimeManager();s.$.getSensorManager().setSensor(e.sensor),t.changeStaticOffset(new Date(o).getTime()-t.realTime),t.calculateSimulationTime(),s.$.runEvent(l.kR.updateDateTime,new Date(t.dynamicOffsetEpoch+t.staticOffset));const i=s.$.getPlugin(g.A),a=i.selectedSat;i.selectSat(null),i.selectSat(a)}}))})),0===e.passes.length){this.ctx_.fillStyle="rgba(200, 200, 200, 0.2)",this.ctx_.fillRect(a,i-10,n,20);const s=(t,s)=>{if(t>=a&&t<=a+n&&s>=i-10&&s<=i+10){const i=`${e.sensor.uiName}: No Passes`;this.ctx_.font="14px Consolas";const a=this.ctx_.measureText(i).width;return this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillRect(t-a/2-6,s-30,a+12,24),this.ctx_.fillStyle="rgb(31, 51, 71)",this.ctx_.fillRect(t-a/2-3,s-27,a+6,18),this.ctx_.fillStyle="rgb(255, 255, 255)",this.ctx_.fillText(i,t-a/2,s-15),this.canvas_.style.cursor="pointer",!0}return!1};this.drawEvents_[`${t}-${e.sensor.id}-no-passes`]=s}})),this.canvas_.addEventListener("mousemove",(e=>{this.handleOnMouseMove_(e)})),this.ctxStatic_=this.canvasStatic_.getContext("2d"),this.ctxStatic_.drawImage(this.canvas_,0,0)}handleOnMouseMove_(e){this.ctx_.reset(),this.ctx_.drawImage(this.canvasStatic_,0,0);const t=this.canvas_.getBoundingClientRect(),i=e.clientX-t.left,a=e.clientY-t.top;let s=!1;for(const e in this.drawEvents_){const t=this.drawEvents_[e](i,a);s=s||t}s||(this.canvas_.style.cursor="default")}resizeCanvas_(e){null!=e||(e=!1);const t=(0,o.gE)("sensor-timeline-menu");e||window.innerWidth>window.innerHeight?(t.style.width=`${window.innerWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.height=window.innerHeight):(settingsManager.mapWidth=2*settingsManager.mapHeight,t.style.width=`${settingsManager.mapWidth}px`,this.canvas_.width=window.innerWidth,this.canvas_.style.width=`${window.innerWidth}px`,this.canvas_.height=window.innerHeight-100,this.canvas_.style.height=window.innerHeight-100+"px"),this.canvasStatic_.width=this.canvas_.width,this.canvasStatic_.height=this.canvas_.height}}var xa=i(5264);class wa extends u.s{constructor(){super(...arguments),this.isRotateL=!0,this.isRotateR=!1,this.isRotateU=!1,this.isRotateD=!1,this.bottomIconElementName="video-director-icon",this.bottomIconImg=xa,this.bottomIconLabel="Video Director",this.sideMenuElementName="video-director-menu",this.sideMenuElementHtml=s.$.html`
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=s.$.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),s.$.register({event:l.kR.uiManagerFinal,cbName:this.constructor.name,cb:()=>{(0,o.gE)("video-director-form").addEventListener("change",wa.onFormChange),(0,o.gE)("video-director-form").addEventListener("submit",wa.onSubmit),(0,o.gE)("video-director-rotate").addEventListener("click",(()=>{var e;null===(e=s.$.getSoundManager())||void 0===e||e.play(h.A.BUTTON_CLICK),s.$.getMainCamera().autoRotate(!0)}))}})}static onFormChange(e){var t,i,a;if(null==e)throw new Error("e is undefined");switch(null===(t=e.target)||void 0===t?void 0:t.id){case"video-director-rotateL":case"video-director-rotateR":case"video-director-rotateU":case"video-director-rotateD":case"video-director-panL":case"video-director-panR":case"video-director-panU":case"video-director-panD":case"video-director-zoomIn":case"video-director-zoomOut":(0,o.gE)(e.target.id).checked?null===(i=s.$.getSoundManager())||void 0===i||i.play(h.A.TOGGLE_ON):null===(a=s.$.getSoundManager())||void 0===a||a.play(h.A.TOGGLE_OFF)}(0,o.gE)("video-director-selectedColor").checked&&0!==settingsManager.selectedColor[3]?(settingsManager.selectedColorFallback=settingsManager.selectedColor,settingsManager.selectedColor=[0,0,0,0]):settingsManager.selectedColor=settingsManager.selectedColorFallback,settingsManager.autoRotateSpeed=parseFloat((0,o.gE)("video-director-rotateSpeed").value),settingsManager.autoPanSpeed=parseFloat((0,o.gE)("video-director-panSpeed").value),settingsManager.autoZoomSpeed=parseFloat((0,o.gE)("video-director-zoomSpeed").value);const n=(0,o.gE)("video-director-rotateL").checked,l=(0,o.gE)("video-director-rotateR").checked,r=(0,o.gE)("video-director-rotateU").checked,c=(0,o.gE)("video-director-rotateD").checked,d=(0,o.gE)("video-director-panL").checked,u=(0,o.gE)("video-director-panR").checked,g=(0,o.gE)("video-director-panU").checked,p=(0,o.gE)("video-director-panD").checked,m=(0,o.gE)("video-director-zoomIn").checked,v=(0,o.gE)("video-director-zoomOut").checked;n&&!settingsManager.isAutoRotateL&&((0,o.gE)("video-director-rotateR").checked=!1),l&&!settingsManager.isAutoRotateR&&((0,o.gE)("video-director-rotateL").checked=!1),r&&!settingsManager.isAutoRotateU&&((0,o.gE)("video-director-rotateD").checked=!1),c&&!settingsManager.isAutoRotateD&&((0,o.gE)("video-director-rotateU").checked=!1),d&&!settingsManager.isAutoPanL&&((0,o.gE)("video-director-panR").checked=!1),u&&!settingsManager.isAutoPanR&&((0,o.gE)("video-director-panL").checked=!1),g&&!settingsManager.isAutoPanU&&((0,o.gE)("video-director-panD").checked=!1),p&&!settingsManager.isAutoPanD&&((0,o.gE)("video-director-panU").checked=!1),m&&!settingsManager.isAutoZoomIn&&((0,o.gE)("video-director-zoomOut").checked=!1),v&&!settingsManager.isAutoZoomOut&&((0,o.gE)("video-director-zoomIn").checked=!1)}static onSubmit(e){var t;if(null==e)throw new Error("e is undefined");e.preventDefault(),null===(t=s.$.getSoundManager())||void 0===t||t.play(h.A.BUTTON_CLICK),settingsManager.isAutoRotateR=(0,o.gE)("video-director-rotateR").checked,settingsManager.isAutoRotateL=(0,o.gE)("video-director-rotateL").checked,settingsManager.isAutoRotateU=(0,o.gE)("video-director-rotateU").checked,settingsManager.isAutoRotateD=(0,o.gE)("video-director-rotateD").checked,settingsManager.isAutoPanR=(0,o.gE)("video-director-panR").checked,settingsManager.isAutoPanL=(0,o.gE)("video-director-panL").checked,settingsManager.isAutoPanU=(0,o.gE)("video-director-panU").checked,settingsManager.isAutoPanD=(0,o.gE)("video-director-panD").checked,settingsManager.isAutoZoomIn=(0,o.gE)("video-director-zoomIn").checked,settingsManager.isAutoZoomOut=(0,o.gE)("video-director-zoomOut").checked}}const Ca=new wa;var Ta=i(3224);const Aa=(e,t)=>{null!=t||(t={});try{const i=[{init:()=>(new Qt).init(),enabled:t.debug},{init:()=>(new g.A).init(),enabled:!0},{init:()=>(new et.p).init(),enabled:t.topMenu},{init:()=>(new yi.c).init(),enabled:t.satInfoboxCore},{init:()=>(new jt.l).init(),enabled:t.datetime},{init:()=>(new va).init(),enabled:t.social},{init:()=>(new Mt).init(),enabled:t.classificationBar},{init:()=>(new ta.g).init(),enabled:t.sensor},{init:()=>(new la.o).init(),enabled:t.sensor},{init:()=>(new ra).init(),enabled:t.sensor},{init:()=>(new ca.Z).init(),enabled:t.sensor},{init:()=>(new ua).init(),enabled:t.sensor},{init:()=>(new ya).init(),enabled:t.timeline},{init:()=>(new Ma).init(),enabled:t.timelineAlt},{init:()=>(new Ea.P).init(),enabled:t.watchlist},{init:()=>(new Ta.m).init(),enabled:t.watchlist},{init:()=>(new Oi).init(),enabled:t.reports},{init:()=>(new Ii).init(),enabled:t.polarPlot},{init:()=>(new Ei).init(),enabled:t.nextLaunch},{init:()=>(new _).init(),enabled:t.findSat},{init:()=>(new pa).init(),enabled:t.shortTermFences},{init:()=>(new xi).init(),enabled:t.orbitReferences},{init:()=>(new Dt).init(),enabled:t.collisions},{init:()=>(new $i).init(),enabled:t.trackingImpactPredict},{init:()=>(new St).init(),enabled:t.breakup},{init:()=>(new Xt).init(),enabled:t.debrisScreening},{init:()=>(new ri).init(),enabled:t.editSat},{init:()=>(new bi).init(),enabled:t.newLaunch},{init:()=>H(),enabled:t.missile},{init:()=>(new ba.b).init(),enabled:t.stereoMap},{init:()=>(new ea.a).init(),enabled:t.sensorFov},{init:()=>(new ia.q).init(),enabled:t.sensorSurv},{init:()=>(new J).init(),enabled:t.satelliteView},{init:()=>(new zi).init(),enabled:t.satelliteFov},{init:()=>(new wi.H).init(),enabled:t.planetarium},{init:()=>(new dt.j).init(),enabled:t.astronomy},{init:()=>(new _i).init(),enabled:t.nightToggle},{init:()=>oi.init(),enabled:t.dops},{init:()=>Ui.init(),enabled:t.constellations},{init:()=>m.init(),enabled:t.countries},{init:()=>zt.init(),enabled:t.colorsMenu},{init:()=>Qi.init(),enabled:t.screenshot},{init:()=>pi.init(),enabled:t.launchCalendar},{init:()=>fa.g.init(),enabled:t.timeMachine},{init:()=>Xi.init(),enabled:t.photoManager},{init:()=>Wi.init(),enabled:t.screenRecorder},{init:()=>ct.init(),enabled:t.analysis},{init:()=>ga.K.init(),enabled:t.settingsMenu},{init:()=>Qe.init(),enabled:t.soundManager},{init:()=>di.init(),enabled:t.gamepad},{init:()=>Ca.init(),enabled:t.videoDirector}];for(const{init:e,enabled:t}of i)t&&e();t.topMenu||document.documentElement.style.setProperty("--nav-bar-height","0px"),e.register({event:l.kR.uiManagerFinal,cbName:"core",cb:()=>{$a(t)}})}catch(e){f.J.info(`Error loading core plugins:${e.message}`)}},$a=e=>{const t=(0,o.gE)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",`${e}px`)}else document.documentElement.style.setProperty("--bottom-menu-height","0px");(0,o.gE)("bottom-icons")&&""==(0,o.gE)("bottom-icons").innerText?((0,o.gE)("nav-footer").style.visibility="hidden",(0,o.ys)("nav-footer")):(0,o.FG)("nav-footer");const i=(0,o.gE)("bottom-icons-container");if(i){const e=i.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",`${e}px`)}e.aboutManager&&((0,o.gE)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"keeptrack.space"!==window.location.hostname&&"www.keeptrack.space"!==window.location.hostname||(s.$.analytics=(0,Li.Ay)({app:"KeepTrack",version:100,plugins:[(0,ki.A)({measurementIds:"G-ENHWK6L0X7"})]}),s.$.analytics.page()),(0,o.gE)("bottom-icons-container").addEventListener("mousewheel",(e=>{e.preventDefault(),((e,t)=>{const i=e.scrollTop+.15*t;e.scrollTop=i})(e.currentTarget,e.deltaY)}),{passive:!1})}}}]);