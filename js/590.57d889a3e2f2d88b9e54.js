"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[590],{3685:(e,t,i)=>{i.r(t),i.d(t,{CanvasRecorder:()=>$i,catalogLoader:()=>Ue,initialOrbit:()=>a,loadCorePlugins:()=>Ua,missile:()=>s,omManager:()=>I,startGoogleAnalytics:()=>za,uiManagerFinal:()=>Ba});var a={};i.r(a),i.d(a,{bottomMenuClick:()=>B,hideSideMenus:()=>_,init:()=>O,obfitFormSubmit:()=>z,onHelpMenuClick:()=>R,uiManagerFinal:()=>U,uiManagerInit:()=>F});var s={};i.r(s),i.d(s,{bottomMenuClick:()=>Q,hideSideMenus:()=>q,init:()=>le,missileChange:()=>ee,missileSubmit:()=>ae,msAttackerChange:()=>ce,msErrorClick:()=>te,msTargetChange:()=>ie,onHelpMenuClick:()=>re,searchForRvs:()=>ne,uiManagerFinal:()=>oe,uiManagerInit:()=>se,updateLoop:()=>Z});var n=i(3092),o=i(5460);const l=i.p+"../img/flag.png";var r=i(9640),c=i(9703),d=i(2160),u=i(9959);class p extends u.c{constructor(){super(p.PLUGIN_NAME),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=l,this.bottomIconLabel="Countries",this.sideMenuElementHtml=r.bD.html`
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
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=r.bD.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)("country-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){var e;null===(e=r.bD.getSoundManager())||void 0===e||e.play("toggleOn"),p.countryMenuClick_(this.getAttribute("data-group"))}))})),(0,n.E)((0,o.G)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=r.bD.getGroupsManager(),i=d.n.getCountryCode(e);if(""===i)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(c.Y.COUNTRY,i,e),p.groupSelected_(e)}static groupSelected_(e){const t=r.bD.getGroupsManager(),i=r.bD.getCatalogManager(),a=r.bD.getUiManager(),s=(0,o.G)("search");void 0!==e&&void 0!==t.groupList[e]&&(t.selectGroup(t.groupList[e]),t.groupList[e].objects.length<settingsManager.searchLimit?a.searchManager.doSearch(t.groupList[e].objects.reduce(((e,t)=>`${e}${i.getSat(t).sccNum},`),"").slice(0,-1)):(s.value=t.groupList[e].objects.reduce(((e,t)=>`${e}${i.getSat(t).sccNum},`),"").slice(0,-1),a.searchManager.fillResultBox(t.groupList[e].objects.map((e=>({satId:e}))),i)),i.setSelectedSat(-1),settingsManager.isMobileModeEnabled&&a.searchManager.searchToggle(!0),a.hideSideMenus())}}p.PLUGIN_NAME="Countries Menu";const g=new p,h=i.p+"../img/iod.png";var m=i(7997),b=i(1874),v=i(7047),f=i(2171),S=i(3991),M=function(e,t,i,a){return new(i||(i=Promise))((function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}))};const y=6371e3,w=Math.PI,C=2*w,L=360/C,x={sat2sv:(e,t)=>[t.simulationTimeObj,e.position.x,e.position.y,e.position.z,e.velocity.x,e.velocity.y,e.velocity.z],sat2kp:(e,t)=>{const i=x.sat2sv(e,t);return x.sv2kp(i,t)},sat2tle:(e,t)=>{const i=x.sat2kp(e,t);return x.kp2tle(i,null,t)},sv2kp:e=>E({massPrimary:1,massSecondary:1,vector:e,massPrimaryU:"kg",massSecondaryU:"M_Earth",vectorU:"km",outputU:"km",outputU2:"m"}),kp2tle:(e,t,i)=>{const a=e.inclination,s=e.raan,n=e.eccentricity,o=e.argPe,l=e.mo,r=1440/e.period,c=(t=void 0===t||null==t?new Date(i.calculateSimulationTime()):t).getUTCFullYear()-2e3,d=k(t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds()),u=parseFloat(d)+1.15741e-8*t.getUTCMilliseconds();return{tle1:`1 80000U 58001A   ${c}${A(u.toFixed(8),12)} 0.00000000 +00000-0 +00000-0 0 99990`,tle2:`2 80000 ${A(a.toFixed(4),8)} ${A(s.toFixed(4),8)} ${n.toFixed(7).substr(2,7)} ${A(parseFloat(o).toFixed(4),8)} ${A(l.toFixed(4),8)} ${A(r.toFixed(8),11)}000010`}},iod:(e,t)=>M(void 0,void 0,void 0,(function*(){try{const i=x.svs2kps(e);e.sort((function(e,t){return e[0]-t[0]}));const a=new Date(e[0][0]);return x.fitTles(a,e,i,t)}catch(e){v.x.info(e)}})),svs2analyst:(e,t)=>M(void 0,void 0,void 0,(function*(){const i=r.bD.getCatalogManager();x.iod(e,t).then((e=>{i.insertNewAnalystSatellite(e.tle1,e.tle2,i.getIdFromObjNum(100500),"100500")})).catch((e=>{v.x.debug(e)}))})),fitTles:(e,t,i,a)=>M(void 0,void 0,void 0,(function*(){try{x.debug.closestApproach=0;const s=settingsManager.fitTleSteps,n=(i.max.raan-i.min.raan)/s,o=(i.max.argPe-i.min.argPe)/s,l=(i.max.mo-i.min.mo)/s;let r=[1e7];for(let c=-s/2;c<s/2;c++)for(let d=-s;d<s;d++)for(let u=2*-s;u<2*s;u++){const s={inclination:i.avg.inclination,raan:i.avg.raan+n*c,eccentricity:i.avg.eccentricity,argPe:i.avg.argPe+o*d,mo:i.avg.mo+l*u/2,period:i.avg.period},p=x.kp2tle(s,e,a);let g=0,h=0,m=0,b=0;for(let i=0;i<t.length;i++){let a;try{a=D(p.tle1,p.tle2,new Date(e+(t[i][0]-t[0][0]))),g+=Math.abs(a.position.x-t[i][1]),h+=Math.abs(a.position.y-t[i][2]),m+=Math.abs(a.position.z-t[i][3]),b+=Math.sqrt(Math.pow(g,2)+Math.pow(h,2)+Math.pow(m,2))}catch(e){v.x.info(e)}}b/=t.length,b<r[0]&&(r=[b,c,d,u])}v.x.debug(`Closest Approach: ${r[0]}`),x.debug.closestApproach+=r[0];const c={inclination:i.avg.inclination,raan:i.avg.raan+n*r[1],eccentricity:i.avg.eccentricity,argPe:i.avg.argPe+o*r[2],mo:i.avg.mo+l*r[3],period:i.avg.period};return x.kp2tle(c,e)}catch(e){v.x.debug(e)}})),testIod:e=>{fetch("/metObs.json").then((e=>e.json())).then((t=>{for(let i=0;i<t.length;i++){let a=t[i];x.svs2analyst(a,e)}x.debug.closestApproach/=t.length,v.x.log(`Average Approach: ${x.debug.closestApproach}`)})).catch((e=>{v.x.debug(e)}))},svs2kps:e=>{let t=[];for(let i=0;i<e.length;i++)e[i].length<3||t.push(x.sv2kp(e[i]));let i={max:{apogee:0,argPe:0,eccentricity:0,inclination:0,mo:0,perigee:0,period:0,raan:0,semiMajorAxis:0,ta:0,tl:0},min:{apogee:1e6,argPe:1e6,eccentricity:1e6,inclination:1e6,mo:1e6,perigee:1e6,period:1e6,raan:1e6,semiMajorAxis:1e6,ta:1e6,tl:1e6},avg:{apogee:0,argPe:0,eccentricity:0,inclination:0,mo:0,perigee:0,period:0,raan:0,semiMajorAxis:0,ta:0,tl:0}};for(let e=0;e<t.length;e++)t[e].apogee<i.min.apogee&&(i.min.apogee=t[e].apogee),t[e].apogee>i.max.apogee&&(i.max.apogee=t[e].apogee),i.avg.apogee+=t[e].apogee,t[e].argPe<i.min.argPe&&(i.min.argPe=t[e].argPe),t[e].argPe>i.max.argPe&&(i.max.argPe=t[e].argPe),i.avg.argPe+=t[e].argPe,t[e].eccentricity<i.min.eccentricity&&(i.min.eccentricity=t[e].eccentricity),t[e].eccentricity>i.max.eccentricity&&(i.max.eccentricity=t[e].eccentricity),i.avg.eccentricity+=t[e].eccentricity,t[e].inclination<i.min.inclination&&(i.min.inclination=t[e].inclination),t[e].inclination>i.max.inclination&&(i.max.inclination=t[e].inclination),i.avg.inclination+=t[e].inclination,t[e].mo<i.min.mo&&(i.min.mo=t[e].mo),t[e].mo>i.max.mo&&(i.max.mo=t[e].mo),i.avg.mo+=t[e].mo,t[e].perigee<i.min.perigee&&(i.min.perigee=t[e].perigee),t[e].perigee>i.max.perigee&&(i.max.perigee=t[e].perigee),i.avg.perigee+=t[e].perigee,t[e].period<i.min.period&&(i.min.period=t[e].period),t[e].period>i.max.period&&(i.max.period=t[e].period),i.avg.period+=t[e].period,t[e].raan<i.min.raan&&(i.min.raan=t[e].raan),t[e].raan>i.max.raan&&(i.max.raan=t[e].raan),i.avg.raan+=t[e].raan,t[e].semiMajorAxis<i.min.semiMajorAxis&&(i.min.semiMajorAxis=t[e].semiMajorAxis),t[e].semiMajorAxis>i.max.semiMajorAxis&&(i.max.semiMajorAxis=t[e].semiMajorAxis),i.avg.semiMajorAxis+=t[e].semiMajorAxis,t[e].ta<i.min.ta&&(i.min.ta=t[e].ta),t[e].ta>i.max.ta&&(i.max.ta=t[e].ta),i.avg.ta+=t[e].ta,t[e].tl<i.min.tl&&(i.min.tl=t[e].tl),t[e].tl>i.max.tl&&(i.max.tl=t[e].tl),i.avg.tl+=t[e].tl;return i.avg.apogee/=t.length,i.avg.argPe/=t.length,i.avg.eccentricity/=t.length,i.avg.inclination/=t.length,i.avg.mo/=t.length,i.avg.perigee/=t.length,i.avg.period/=t.length,i.avg.raan/=t.length,i.avg.semiMajorAxis/=t.length,i.avg.ta/=t.length,i.avg.tl/=t.length,i},debug:{closestApproach:0}},D=(e,t,i)=>{const a=S.Sgp4.createSatrec(e,t);return f.$.getEci({satrec:a},i)},E=({massPrimary:e,massSecondary:t,vector:i,massPrimaryU:a,massSecondaryU:s,vectorU:n,outputU:o,outputU2:l})=>{if(!i)throw new Error("vector is required");if(e<=0)throw new Error("massPrimary must be greater than 0");if(t<=0)throw new Error("massSecondary must be greater than 0");if(null!=n||(n="km"),"km"!==n&&"m"!==n)throw new Error('vectorU must be either "km" or "m"');const r="km"===n?1e3:1;let c=i[1]*r,d=i[2]*r,u=i[3]*r,p=i[4]*r,g=i[5]*r,h=i[6]*r;if(null!=s||(s="M_Earth"),"M_Earth"!==s)throw new Error("M_Earth is the only value currently supported.");if(t*=597378250603408e10,null!=a||(a="kg"),"kg"!==a)throw new Error("kg is the only value currently supported.");0===c&&(c=1e-15),0===d&&(d=1e-15),0===u&&(u=1e-15),0===p&&(p=1e-15),0===g&&(g=1e-15),0===h&&(h=1e-15);let m=b.fT*(e+t),v=Math.sqrt(c*c+d*d+u*u),f=Math.sqrt(p*p+g*g+h*h),S=1/(2/v-f*f/m),M=d*h-u*g,x=u*p-c*h,D=c*g-d*p,E=Math.sqrt(M*M+x*x+D*D),k=E*E/m,A=c*p+d*g+u*h,I=Math.sqrt(1-k/S),N=1-v/S,G=A/Math.sqrt(S*m),P=Math.acos(D/E),O=0;0!=P&&(O=T(M,-x));let R=T(E*A/(v*m),E*E/(v*m)-1),_=(c*Math.cos(O)+d*Math.sin(O))/v,F=0;F=0===P||P===w?(d*Math.cos(O)-c*Math.sin(O))/v:u/(v*Math.sin(P));let U=T(F,_)-R;U<0&&(U=C+U);let B=T(G,N),z=B-I*Math.sin(B),$=U+R+O;for(;$>=C;)$-=C;const H=S*I;let j=S-H-("km"===n?6371:y),V=S+H-("km"===n?6371:y),K=C*Math.sqrt(S*S*S/(b.fT*(e+t)));return null!=o||(o="m"),S="km"===o?S/1e3:S,V="km"===o?V/1e3:V,j="km"===o?j/1e3:j,null!=l||(l="s"),K="m"===l?K/60:K,P*=L,O*=L,U*=L,z*=L,R*=L,$*=L,{semiMajorAxis:S,eccentricity:I,inclination:P,raan:O,argPe:U,mo:z,ta:R,tl:$,perigee:j,apogee:V,period:K}},T=(e,t)=>{let i;return 0!=t?(i=Math.atan(e/t),t<0&&(i+=w),t>0&&e<0&&(i+=C)):(e<0&&(i=-w/2),0===e&&(i=0),e>0&&(i=w/2)),i},k=(e,t,i,a,s)=>(Math.floor(275*e/9)+t+((s/60+a)/60+i)/24).toFixed(5),A=(e,t)=>(null==e?void 0:e.length)<t?A("0"+e,t):e,I=x;var N=i(5179);const G=r.bD.html`The Initial Orbit Menu is used for generating TLEs using 1-3 state vectors.
<br><br>
Time is in unix time (seconds since 1970-01-01 00:00:00 UTC).
<br><br>
The first state vector is required. The second and third state vectors are optional.
`;let P=!1;const O=()=>{r.bD.register({event:"uiManagerInit",cbName:"initialOrbit",cb:F}),r.bD.register({event:"uiManagerFinal",cbName:"initialOrbit",cb:U}),r.bD.register({event:"bottomMenuClick",cbName:"initialOrbit",cb:B}),r.bD.register({event:"hideSideMenus",cbName:"initialOrbit",cb:_}),r.bD.register({event:"onHelpMenuClick",cbName:"initialOrbit",cb:R})},R=()=>!!P&&(N.v.showAdvice("Initial Orbit Menu",G),!0),_=()=>{(0,m.kW)((0,o.G)("obfit-menu"),1e3),(0,o.G)("menu-obfit").classList.remove("bmenu-item-selected"),P=!1},F=()=>{(0,o.G)("left-menus").insertAdjacentHTML("beforeend",r.bD.html`
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
  `),(0,o.G)("bottom-icons").insertAdjacentHTML("beforeend",r.bD.html`
    <div id="menu-obfit" class="bmenu-item">
      <img
        alt="obfit"
        src=""
        delayedsrc="${h}" />
      <span class="bmenu-title">Initial Orbit</span>
      <div class="status-icon"></div>
    </div>
  `)},U=()=>{(0,o.G)("obfit-form").addEventListener("submit",(function(e){z(e)}))},B=e=>{if("menu-obfit"===e){const e=r.bD.getUiManager();return P?(P=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.searchToggle(!1),e.hideSideMenus(),(0,m.$k)((0,o.G)("obfit-menu"),1e3),P=!0,void(0,o.G)("menu-obfit").classList.add("bmenu-item-selected"))}},z=e=>{const t=r.bD.getTimeManager(),i=r.bD.getUiManager();let a=!1,s=!1;const n=H("obfit-t1"),o=H("obfit-x1"),l=H("obfit-y1"),c=H("obfit-z1"),d=H("obfit-xd1"),u=H("obfit-yd1"),p=H("obfit-zd1"),g=H("obfit-t2"),h=H("obfit-x2"),m=H("obfit-y2"),b=H("obfit-z2"),v=H("obfit-xd2"),f=H("obfit-yd2"),S=H("obfit-zd2"),M=H("obfit-t3"),y=H("obfit-x3"),w=H("obfit-y3"),C=H("obfit-z3"),L=H("obfit-xd3"),x=H("obfit-yd3"),D=H("obfit-zd3"),E=[];let T=[];if(isNaN(n))return i.toast("Time 1 is Invalid!","critical"),!1;if(isNaN(o))return i.toast("X 1 is Invalid!","critical"),!1;if(isNaN(l))return i.toast("Y 1 is Invalid!","critical"),!1;if(isNaN(c))return i.toast("Z 1 is Invalid!","critical"),!1;if(isNaN(d))return i.toast("X Dot 1 is Invalid!","critical"),!1;if(isNaN(u))return i.toast("Y Dot 1 is Invalid!","critical"),!1;if(isNaN(p))return i.toast("Z Dot 1 is Invalid!","critical"),!1;T=[n,o,l,c,d,u,p],E.push(T);const{isOb:k,sv:A}=$({isOb:a,obNum:2,t:g,x:h,y:m,z:b,xd:v,yd:f,zd:S,uiManagerInstance:i});a=k,E.push(A),s=!!a&&s;const{isOb:N,sv:G}=$({isOb:s,obNum:3,t:M,x:y,y:w,z:C,xd:L,yd:x,zd:D,uiManagerInstance:i});return s=N,E.push(G),I.svs2analyst(E,t),e.preventDefault(),!0},$=({isOb:e,obNum:t,t:i,x:a,y:s,z:n,xd:o,yd:l,zd:r,uiManagerInstance:c})=>{let d=[];return e&&isNaN(i)&&(e=!1,c.toast(`Time ${t} is Invalid!`,"caution")),e&&isNaN(a)&&(e=!1,c.toast(`X ${t} is Invalid!`,"caution")),e&&isNaN(s)&&(e=!1,c.toast(`Y ${t} is Invalid!`,"caution")),e&&isNaN(n)&&(e=!1,c.toast(`Z ${t} is Invalid!`,"caution")),e&&isNaN(o)&&(e=!1,c.toast(`X Dot ${t} is Invalid!`,"caution")),e&&isNaN(l)&&(e=!1,c.toast(`Y Dot ${t} is Invalid!`,"caution")),e&&isNaN(r)&&(e=!1,c.toast(`Z Dot ${t} is Invalid!`,"caution")),e&&(d=[i,a,s,n,o,l,r]),{isOb:e,sv:d}},H=e=>{const t=(0,o.G)(e).value;return t.length>0?parseFloat(t):NaN},j=i.p+"../img/missile.png";var V=i(7644);const K=r.bD.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var W=i(4378);let Y=!1,J=!1,X=0;const Z=()=>{if(void 0!==W.CC&&W.CC.missileArray.length>0){const e=r.bD.getOrbitManager();for(X=0;X<W.CC.missileArray.length;X++)e.updateOrbitBuffer(W.CC.missileArray[X].id)}},q=()=>{(0,m.kW)((0,o.G)("missile-menu"),1e3),(0,o.G)("menu-missile").classList.remove("bmenu-item-selected"),Y=!1},Q=e=>{if("menu-missile"===e){const e=r.bD.getUiManager();return Y?(Y=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.searchToggle(!1),e.hideSideMenus(),(0,m.$k)((0,o.G)("missile-menu"),1e3),(0,o.G)("menu-missile").classList.add("bmenu-item-selected"),void(Y=!0))}},ee=()=>{0!==parseFloat((0,o.G)("ms-type").value)?(0,o.G)("ms-custom-opt").style.display="none":(0,o.G)("ms-custom-opt").style.display="block"},te=()=>{(0,o.G)("ms-error").style.display="none"},ie=()=>{-1!==parseInt((0,o.G)("ms-target").value)?((0,o.G)("ms-tgt-holder-lat").style.display="none",(0,o.G)("ms-tgt-holder-lon").style.display="none"):((0,o.G)("ms-tgt-holder-lat").style.display="block",(0,o.G)("ms-tgt-holder-lon").style.display="block")},ae=()=>{(0,V.QP)((()=>{const e=r.bD.getTimeManager(),t=r.bD.getUiManager();(0,o.G)("ms-error").style.display="none";const i=parseFloat((0,o.G)("ms-type").value),a=parseFloat((0,o.G)("ms-attacker").value);let s=parseFloat((0,o.G)("ms-lat-lau").value),n=parseFloat((0,o.G)("ms-lon-lau").value);const l=parseFloat((0,o.G)("ms-target").value);let c=parseFloat((0,o.G)("ms-lat").value),d=parseFloat((0,o.G)("ms-lon").value);const u=e.selectedDate.getTime();let p="";if(1===i&&(p="simulation/Russia2USA.json",W.CC.MassRaidPre(u,p)),2===i&&(p="simulation/Russia2USAalt.json",W.CC.MassRaidPre(u,p)),3===i&&(p="simulation/China2USA.json",W.CC.MassRaidPre(u,p)),4===i&&(p="simulation/NorthKorea2USA.json",W.CC.MassRaidPre(u,p)),5===i&&(p="simulation/USA2Russia.json",W.CC.MassRaidPre(u,p)),6===i&&(p="simulation/USA2China.json",W.CC.MassRaidPre(u,p)),7===i&&(p="simulation/USA2NorthKorea.json",W.CC.MassRaidPre(u,p)),0!==i&&t.toast(`${p} Loaded`,"standby",!0),0===i){if(-1===l){if(isNaN(c))return t.toast("Invalid Target Latitude!","critical"),void((0,o.G)("loading-screen").style.display="none");if(isNaN(d))return t.toast("Invalid Target Longitude!","critical"),void((0,o.G)("loading-screen").style.display="none")}else c=W.CC.globalBMTargets[3*l],d=W.CC.globalBMTargets[3*l+1];if(J){if(isNaN(s))return t.toast("Invalid Launch Latitude!","critical"),void((0,o.G)("loading-screen").style.display="none");if(isNaN(n))return t.toast("Invalid Launch Longitude!","critical"),void((0,o.G)("loading-screen").style.display="none")}let e,i;const p=r.bD.getCatalogManager();if(a<200){e=a-100,i=500-W.CC.missilesInUse;let t=1200;100!=a&&(s=W.CC.UsaICBM[4*e],n=W.CC.UsaICBM[4*e+1],t=1100),W.CC.Missile(s,n,c,d,3,p.missileSats-i,u,W.CC.UsaICBM[4*e+2],30,2.9,.07,W.CC.UsaICBM[4*e+3],"United States",t)}else if(a<300){e=a-200,i=500-W.CC.missilesInUse;const t=1120;213!=a&&214!=a&&215!=a&&(s=W.CC.RussianICBM[4*e],n=W.CC.RussianICBM[4*e+1]),W.CC.Missile(s,n,c,d,3,p.missileSats-i,u,W.CC.RussianICBM[4*e+2],30,2.9,.07,W.CC.RussianICBM[4*e+3],"Russia",t)}else if(a<400){e=a-300,i=500-W.CC.missilesInUse;const t=1120;321!=a&&(s=W.CC.ChinaICBM[4*e],n=W.CC.ChinaICBM[4*e+1]),W.CC.Missile(s,n,c,d,3,p.missileSats-i,u,W.CC.ChinaICBM[4*e+2],30,2.9,.07,W.CC.ChinaICBM[4*e+3],"China",t)}else if(a<500){e=a-400,i=500-W.CC.missilesInUse;const t=1120;400!=a&&(s=W.CC.NorthKoreanBM[4*e],n=W.CC.NorthKoreanBM[4*e+1]),W.CC.Missile(s,n,c,d,3,p.missileSats-i,u,W.CC.NorthKoreanBM[4*e+2],30,2.9,.07,W.CC.NorthKoreanBM[4*e+3],"North Korea",t)}else if(a<600){e=a-500,i=500-W.CC.missilesInUse;const t=1e3;500!=a&&(s=W.CC.FraSLBM[4*e],n=W.CC.FraSLBM[4*e+1]),W.CC.Missile(s,n,c,d,3,p.missileSats-i,u,W.CC.FraSLBM[4*e+2],30,2.9,.07,W.CC.FraSLBM[4*e+3],"France",t)}else if(a<700){e=a-600,i=500-W.CC.missilesInUse;const t=1200;600!=a&&(s=W.CC.ukSLBM[4*e],n=W.CC.ukSLBM[4*e+1]),W.CC.Missile(s,n,c,d,3,p.missileSats-i,u,W.CC.ukSLBM[4*e+2],30,2.9,.07,W.CC.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(W.CC.lastMissileError,W.CC.lastMissileErrorType),t.doSearch("RV_")}(0,o.G)("loading-screen").style.display="none"}))},se=()=>{(0,o.G)("left-menus").insertAdjacentHTML("beforeend",r.bD.html`
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
      `),(0,o.G)("bottom-icons").insertAdjacentHTML("beforeend",r.bD.html`
        <div id="menu-missile" class="bmenu-item">
          <img
            alt="missile"
            src="" delayedsrc=${j}
          />
          <span class="bmenu-title">Missile</span>
          <div class="status-icon"></div>
        </div>
        `)},ne=()=>{r.bD.getUiManager().doSearch("RV_")},oe=()=>{(0,n.E)((0,o.G)("missile-menu")),(0,o.G)("missile").addEventListener("submit",(e=>{e.preventDefault(),ae()})),(0,o.G)("ms-attacker").addEventListener("change",ce),(0,o.G)("ms-target").addEventListener("change",ie),(0,o.G)("ms-error").addEventListener("click",te),(0,o.G)("missile").addEventListener("change",ee),(0,o.G)("searchRvBtn").addEventListener("click",ne),ce(),ie()},le=()=>{r.bD.register({event:"uiManagerInit",cbName:"missile",cb:se}),r.bD.register({event:"uiManagerFinal",cbName:"missile",cb:oe}),r.bD.register({event:"bottomMenuClick",cbName:"missile",cb:Q}),r.bD.register({event:"hideSideMenus",cbName:"missile",cb:q}),r.bD.register({event:"updateLoop",cbName:"updateMissileOrbits",cb:Z}),r.bD.register({event:"onHelpMenuClick",cbName:"missile",cb:re})},re=()=>!!Y&&(N.v.showAdvice("Missile Menu",K),!0),ce=()=>{J=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,o.G)("ms-attacker").value)&&(J=!0);J?((0,o.G)("ms-lau-holder-lat").style.display="block",(0,o.G)("ms-lau-holder-lon").style.display="block"):((0,o.G)("ms-lau-holder-lat").style.display="none",(0,o.G)("ms-lau-holder-lon").style.display="none")},de=i.p+"../img/sat3.png";var ue=i(4579),pe=i(6156);class ge extends u.c{constructor(){super("Satellite View"),this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=de,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{r.bD.getMainCamera().cameraType===pe.iM.SATELLITE?(r.bD.getUiManager().hideSideMenus(),r.bD.getMainCamera().cameraType=pe.iM.FIXED_TO_SAT,(0,o.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")):-1!==r.bD.getCatalogManager().selectedSat?(r.bD.getMainCamera().cameraType=pe.iM.SATELLITE,(0,o.G)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(r.bD.getUiManager().toast("Select a Satellite First!","caution"),(0,ue.l)((0,o.G)(this.bottomIconElementName)))},this.lastLongAudioTime=0}}const he=new ge,me=i.p+"../audio/beep1.mp3",be=i.p+"../audio/button.mp3",ve=i.p+"../audio/error.mp3",fe=i.p+"../audio/genericBeep1.mp3",Se=i.p+"../audio/genericBeep2.mp3",Me=i.p+"../audio/genericBeep3.mp3",ye=i.p+"../audio/liftoff.mp3",we=i.p+"../audio/pop.mp3",Ce=i.p+"../audio/switch.mp3",Le=i.p+"../audio/toggle-off.mp3",xe=i.p+"../audio/toggle-on.mp3",De=i.p+"../audio/whoosh1.mp3",Ee=i.p+"../audio/whoosh2.mp3",Te=i.p+"../audio/whoosh3.mp3",ke=i.p+"../audio/whoosh4.mp3",Ae=i.p+"../audio/whoosh5.mp3",Ie=i.p+"../audio/whoosh6.mp3",Ne=i.p+"../audio/whoosh7.mp3",Ge=i.p+"../audio/whoosh8.mp3";var Pe=i(8461),Oe=i(2349);class Re extends u.c{constructor(){super("Sound Manager"),this.lastLongAudioTimne=0,this.isMute=!1,this.voices=[],this.sounds={standby:new Audio(we),error:new Audio(ve),click:new Audio(Ce),beep1:new Audio(me),genericBeep1:new Audio(fe),genericBeep2:new Audio(Se),genericBeep3:new Audio(Me),whoosh1:new Audio(De),whoosh2:new Audio(Ee),whoosh3:new Audio(Te),whoosh4:new Audio(ke),whoosh5:new Audio(Ae),whoosh6:new Audio(Ie),whoosh7:new Audio(Ne),whoosh8:new Audio(Ge),button:new Audio(be),toggleOn:new Audio(xe),toggleOff:new Audio(Le),liftoff:new Audio(ye)},this.addJs=()=>{super.addJs(),Pe.I.registerSingleton(Oe.Yv.SoundManager,this),r.bD.register({event:"uiManagerInit",cbName:this.PLUGIN_NAME,cb:()=>{this.voices=speechSynthesis.getVoices()}})}}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter((function(e){return"Google UK English Female"==e.name}))[0],window.speechSynthesis.speak(t)}play(e){if("complete"===document.readyState){if(this.isMute)return;if((0,o.G)("loading-screen").classList.contains("fullscreen"))return;let t=1;switch(e){case"genericBeep":return t=Math.floor(3*Math.random())+1,void this.sounds[`genericBeep${t}`].play();case"whoosh":return t=Math.floor(8*Math.random())+1,void this.sounds[`whoosh${t}`].play();case"error":if(this.lastLongAudioTimne+12e5>Date.now())return;return this.lastLongAudioTimne=Date.now(),void this.sounds.error.play();default:return void this.sounds[e].play()}}}}const _e=new Re;var Fe=i(6339),Ue=i(5661);const Be=i.p+"../img/about.png";class ze extends u.c{constructor(){super("About Menu"),this.bottomIconElementName="menu-about-icon",this.bottomIconImg=Be,this.bottomIconLabel="About Menu",this.sideMenuElementName="about-menu",this.sideMenuElementHtml=r.bD.html`
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
`,this.helpTitle="About Menu",this.helpBody=r.bD.html`The About Menu is a place to find information about KeepTrack.
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
  `}}const $e=new ze,He=i.p+"../img/analysis.png";var je=i(6382),Ve=i(6279),Ke=i(3162);class We{static exportTle2Csv(e,t=!0){try{const i=[],a=e.filter((e=>e.sccNum&&void 0!==e.TLE1&&void 0!==e.TLE2));if(0==a.length)return void v.x.info("No TLE data to export");a.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(let e=0;e<a.length;e++){const s=a[e];void 0!==s.TLE1&&void 0!==s.TLE2&&(t&&"ANALSAT"==s.country||i.push({satId:s.sccNum,name:s.name,TLE1:s.TLE1,TLE2:s.TLE2,inclination:s.inclination*b.I3,eccentricity:s.eccentricity,period:s.period,raan:s.raan*b.I3,apogee:s.apogee,perigee:s.perigee,country:s.country,site:s.launchSite,rocket:s.launchVehicle,rcs:s.rcs,visualMagnitude:s.vmag,user:s.user,mission:s.mission,purpose:s.purpose,contractor:s.manufacturer,dryMass:s.dryMass,liftMass:s.launchMass,lifeExpected:s.lifetime,power:s.power}))}(0,Ve.Eb)(i,"catalogInfo")}catch(e){}}static exportSatInFov2Csv(e){const t=e.filter((e=>{var t;return 1===(null===(t=r.bD.getDotsManager().inViewData)||void 0===t?void 0:t[e.id])&&e.sccNum&&void 0!==e.TLE1&&void 0!==e.TLE2})).map((e=>({satId:e.sccNum,name:e.name,country:e.country,apogee:e.apogee,perigee:e.perigee})));(0,Ve.Eb)(t,"satInView")}static exportTle2Txt(e,t=2,i=!0){try{const a=[],s=e.filter((e=>e.sccNum&&void 0!==e.TLE1&&void 0!==e.TLE2));if(0==s.length)return void v.x.info("No TLE data to export");s.sort(((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum)));for(let e=0;e<s.length;e++){const n=s[e];void 0!==n.TLE1&&void 0!==n.TLE2&&(i&&"ANALSAT"==n.country||(3==t&&a.push(n.name),n.TLE1.includes("NO TLE")&&console.log(n.sccNum),n.TLE2.includes("NO TLE")&&console.log(n.sccNum),a.push(n.TLE1),a.push(n.TLE2)))}const n=a.join("\n"),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,Ke.saveAs)(o,"TLE.txt")}catch(e){}}}var Ye=i(3235);class Je extends u.c{addHtml(){super.addHtml(),r.bD.register({event:"uiManagerFinal",cbName:"analysis",cb:()=>{var e,t,i,a,s,l,c,d,u;null===(e=(0,o.G)("analysis-bpt"))||void 0===e||e.addEventListener("submit",(function(e){e.preventDefault(),Je.analysisBptSumbit_()})),null===(t=(0,o.G)("findCsoBtn"))||void 0===t||t.addEventListener("click",(()=>{(0,V.QP)(this.findCsoBtnClick_.bind(this))})),null===(i=(0,o.G)("findReentries"))||void 0===i||i.addEventListener("click",(()=>{(0,V.QP)(Je.findRaBtnClick_)}));const p=r.bD.getCatalogManager().satData;null===(a=(0,o.G)("export-catalog-csv-btn"))||void 0===a||a.addEventListener("click",(()=>{We.exportTle2Csv(p)})),null===(s=(0,o.G)("export-sat-fov-csv-btn"))||void 0===s||s.addEventListener("click",(()=>{We.exportSatInFov2Csv(p)})),null===(l=(0,o.G)("export-catalog-txt-2a"))||void 0===l||l.addEventListener("click",(()=>{We.exportTle2Txt(p)})),null===(c=(0,o.G)("export-catalog-txt-2b"))||void 0===c||c.addEventListener("click",(()=>{We.exportTle2Txt(p,2,!1)})),null===(d=(0,o.G)("export-catalog-txt-3a"))||void 0===d||d.addEventListener("click",(()=>{We.exportTle2Txt(p,3)})),null===(u=(0,o.G)("export-catalog-txt-3b"))||void 0===u||u.addEventListener("click",(()=>{We.exportTle2Txt(p,3,!1)})),(0,n.E)((0,o.G)("analysis-menu"))}}),r.bD.register({event:r.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{Je.setSensor_(e)}})}findCloseObjects(){if(this.searchStrCache_)return this.searchStrCache_;let e=Je.getValidSats_();e=(0,je.d)(e),e.sort(((e,t)=>e.position.x-t.position.x));let t=Je.getPossibleCSOs_(e,50),i=(0,je.d)(t);const a=Je.getActualCSOs_(i,50),s=Array.from(new Set(a));let n="";for(let e=0;e<s.length;e++)e==s.length-1?n+=s[e]:n+=s[e]+",";return this.searchStrCache_=n,n}static getActualCSOs_(e,t){const i=[];for(const t of e){let e=t.sat1,i=f.$.getEci(e,new Date(Date.now()+18e5));i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(t.sat1.position=i.position,e=t.sat2,i=f.$.getEci(e,new Date(Date.now()+18e5)),i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(e.position=i.position,t.sat2.position=i.position))}for(const a of e){let e=a.sat1,s=e.position;if(void 0===s)continue;let n=s.x-t,o=s.x+t,l=s.y-t,r=s.y+t,c=s.z-t,d=s.z+t,u=a.sat2,p=u.position;void 0!==p&&p.x<o&&p.x>n&&p.y<r&&p.y>l&&p.z<d&&p.z>c&&(i.push(e.sccNum),i.push(u.sccNum))}return i}static getPossibleCSOs_(e,t){let i=[];for(let a=0;a<e.length;a++){const s=e[a],n=s.position,o=n.x-t,l=n.x+t,r=n.y-t,c=n.y+t,d=n.z-t,u=n.z+t;let p=0;for(p=Math.max(0,a-200);p<e.length;p++){const t=e[p];if(s==t)continue;const a=t.position;if(a.x>l)break;a.x<l&&a.x>o&&a.y<c&&a.y>r&&a.z<u&&a.z>d&&i.push({sat1:s,sat2:t})}}return i}static getValidSats_(){let e=[];for(let t=0;t<r.bD.getCatalogManager().orbitalSats;t++){const i=r.bD.getCatalogManager().getSat(t);void 0!==i.TLE1&&(void 0===i.position&&(i.position=f.$.getEci(i,new Date).position||{x:0,y:0,z:0}),isNaN(i.position.x)||isNaN(i.position.y)||isNaN(i.position.z)||i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||e.push(i))}return e}static findBestPass(e,t){const i=r.bD.getTimeManager();if(t.length<=0||!t[0]||void 0===t[0].obsminaz)return r.bD.getUiManager().toast("Sensor's format incorrect. Did you select a sensor first?","critical"),[];t[0].observerGd={lat:t[0].lat*b.qW,lon:t[0].lon*b.qW,alt:t[0].alt};const a=t[0];let s=0;const n=r.bD.getCatalogManager().calcSatrec(e),o=[];let l=b.rE/(n.no*b.rE/b.gc),c=0,d=null,u=null,p=null,g=null,h=a.obsmaxrange,m=0,v=!1,S=!1;const M=(e,t)=>{let n=f.$.getRae(e,t,a);if(f.$.checkIsInView(a,n)){const o=i.getOffsetTimeObj(s-5e3);let l=f.$.getRae(o,t,a),r=f.$.checkIsInView(a,l);if(r){let o=i.getOffsetTimeObj(s+5e3);if(l=f.$.getRae(o,t,a),r=f.$.checkIsInView(a,l),!r){if(S=n.el<=3.5,null==g)return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null};c=Math.min((e.getTime()-g.getTime())/1e3/60*10/8,10);let i=Math.min(m/50*10,10);i*=v&&S?2:1,c+=i,c+=Math.min(7500/h,10);let a=0;return a=(e.getTime()-g.getTime())/1e3||0,{sortTime:g.getTime(),scc:t.satnum,score:c,startDate:g,startTime:g,startAz:d,startEl:u,startrng:p,stopDate:e,stopTime:e,stopAz:n.az.toFixed(0),stopEl:n.el.toFixed(1),stoprng:n.rng.toFixed(0),tic:a,minrng:h.toFixed(0),passMaxEl:m.toFixed(1)}}}else n.el<=3.5&&(v=!0),g=e,d=n.az.toFixed(0),u=n.el.toFixed(1),p=n.rng.toFixed(0);m<n.el&&(m=n.el),h>n.rng&&(h=n.rng)}return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null}};for(let e=0;e<604800;e+=5){s=1e3*e;const t=i.getOffsetTimeObj(s);if(o.length<=5e3){const i=M(t,n);null!==i.score&&(o.push(i),c=0,d=null,u=null,p=null,g=null,h=a.obsmaxrange,m=0,v=!1,S=!1,e+=60*l*.75)}}return o}static findBestPasses(e,t){const i=(e=e.replace(/ /gu,",")).split(",");let a=[];for(const e of i)try{if(void 0===e||null==e||""===e||" "===e)continue;const i=r.bD.getCatalogManager().getSatFromObjNum(parseInt(e)),s=Je.findBestPass(i,[t]);for(const e of s)a.push(e)}catch(e){console.debug(e)}a.sort(((e,t)=>t.sortTime-e.sortTime)),a.reverse(),a.forEach((e=>{delete e.sortTime}));for(const e of a)e.startDate=e.startDate.toISOString().split("T")[0],e.startTime=e.startTime.toISOString().split("T")[1].split(".")[0],e.stopDate=e.stopDate.toISOString().split("T")[0],e.stopTime=e.stopTime.toISOString().split("T")[1].split(".")[0];(0,Ve.Eb)(a,"bestSatTimes")}findCsoBtnClick_(){const e=this.findCloseObjects();r.bD.getUiManager().doSearch(e)}static findRaBtnClick_(){const e=Ye.w.findReentry(r.bD.getCatalogManager().satData).join(",");r.bD.getUiManager().doSearch(e)}static analysisBptSumbit_(){const e=(0,o.G)("analysis-bpt-sats").value,t=r.bD.getSensorManager();t.isSensorSelected()?Je.findBestPasses(e,t.currentSensors[0]):r.bD.getUiManager().toast("You must select a sensor first!","critical")}static setSensor_(e){const t=(0,o.G)("analysis-bpt-submit");e?(t.disabled=!1,t.textContent="Generate Best Pass Times ▶"):(t.disabled=!0,t.textContent="Select Sensor First!")}constructor(){super("Analysis Menu"),this.bottomIconElementName="analysis-bottom-icon",this.bottomIconImg=He,this.bottomIconLabel="Analysis Menu",this.sideMenuElementName="analysis-menu",this.sideMenuElementHtml=r.bD.html`
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
`,this.helpTitle="Analysis Menu",this.helpBody=r.bD.html`The Analysis Menu provides a number of tools to help you analyze the data in the current view. The tools are:
  <ul style="margin-left: 40px;">
    <li>Export Official TLEs - Export real two line element sets.</li>
    <li>Export 3LES - Export three line element sets.</li>
    <li>Export KeepTrack TLEs - Export All KeepTrack two line element sets including analysts.</li>
    <li>Export KeepTrack 3LES - Export All KeepTrack three line element sets including analysts.</li>
    <li>Find Close Objects - Find objects that are close to each other.</li>
    <li>Find Reentries - Find objects that are likely to reenter the atmosphere.</li>
    <li>Best Passes - Find the best passes for a satellite based on the currently selected sensor.</li>
  </ul>`,this.searchStrCache_=null}}const Xe=new Je,Ze=i.p+"../img/constellation.png";var qe=i(2972);const Qe=i.p+"../img/planetarium.png";class et extends u.c{constructor(){super("Astronomy"),this.bottomIconElementName="menu-planetarium",this.bottomIconLabel="Planetarium View",this.bottomIconImg=Qe,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=r.bD.getRenderer(),i=r.bD.getUiManager();if(this.isMenuButtonEnabled){if(!this.verifySensorSelected())return;r.bD.getMainCamera().cameraType=pe.iM.PLANETARIUM;try{(0,o.G)("cspocAllSensor").style.display="none",(0,o.G)("mwAllSensor").style.display="none",(0,o.G)("mdAllSensor").style.display="none",(0,o.G)("esocAllSensor").style.display="none",(0,o.G)("llAllSensor").style.display="none",(0,o.G)("rusAllSensor").style.display="none",(0,o.G)("prcAllSensor").style.display="none"}catch(e){}qe.j.change("planetarium"),r.bD.getCatalogManager().isStarManagerLoaded&&r.bD.getStarManager().clearConstellations(),null===(e=r.bD.getPlugin(it))||void 0===e||e.setBottomIconToUnselected()}else r.bD.getMainCamera().isPanReset=!0,r.bD.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,t.glInit(),i.hideSideMenus(),r.bD.getOrbitManager().clearInViewOrbit(),r.bD.getMainCamera().cameraType=pe.iM.DEFAULT}}addJs(){super.addJs(),r.bD.register({event:"setSensor",cbName:this.PLUGIN_NAME,cb:e=>{e?((0,o.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,o.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}const tt=new et;class it extends u.c{constructor(){super(it.PLUGIN_NAME),this.bottomIconElementName="menu-astronomy",this.bottomIconLabel="Astronomy View",this.bottomIconImg=Ze,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=r.bD.getCatalogManager(),i=r.bD.getOrbitManager(),a=r.bD.getRenderer(),s=r.bD.getUiManager();if(this.isMenuButtonEnabled){if(!this.verifySensorSelected())return;t.isStarManagerLoaded&&r.bD.getStarManager().drawAllConstellations(),i.clearInViewOrbit(),r.bD.getMainCamera().cameraType=pe.iM.ASTRONOMY,qe.j.change("astronomy"),null===(e=r.bD.getPlugin(et))||void 0===e||e.setBottomIconToUnselected()}else r.bD.getMainCamera().isPanReset=!0,r.bD.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,a.glInit(),s.hideSideMenus(),r.bD.getMainCamera().cameraType=pe.iM.DEFAULT,qe.j.change("default"),t.isStarManagerLoaded&&r.bD.getStarManager().clearConstellations(),(0,o.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}}addJs(){super.addJs(),r.bD.register({event:r.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,o.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,o.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}it.PLUGIN_NAME="Astronomy";const at=new it,st=i.p+"../img/breakup.png";var nt,ot,lt=i(2575);!function(e){e[e.MeanAnomaly=1]="MeanAnomaly",e[e.RightAscensionOfAscendingNode=2]="RightAscensionOfAscendingNode",e[e.ArgumentOfPerigee=3]="ArgumentOfPerigee"}(nt||(nt={})),function(e){e[e.Near=0]="Near",e[e.Success=1]="Success",e[e.Error=2]="Error",e[e.Far=3]="Far"}(ot||(ot={}));class rt{constructor(e,t,i,a,s,n,o){this.sat=e,this.now=s,this.goalLat=t,this.goalLon=i,this.goalDirection=a,this.newMeana=null,this.newArgPer=null,this.goalAlt=n||null,this.raanOffset=o||0,this.lastLat=null,this.currentDirection=null,this.argPerCalcResults=null,this.meanACalcResults=null,this.raanCalcResults=null}rotateOrbitToLatLon(){return this.parseTle(),this.meanACalcResults=this.meanACalcLoop(this.now,this.goalDirection),this.meanACalcResults!==ot.Success?["Error","Failed to find a solution for Mean Anomaly"]:this.goalAlt>0&&this.argPerCalcLoop()!==ot.Success?["Error","Failed to find a solution for Argument of Perigee"]:(this.raanCalcResults=this.raanCalcLoop(this.raanOffset,this.now),this.raanCalcResults!==ot.Success?["Error","Failed to find a solution for Right Ascension of Ascending Node"]:[this.sat.TLE1,this.sat.TLE2])}argPerCalcLoop(){this.meanACalcResults=ot.Near;for(let e=0;e<3600;e+=1){let t=10*parseFloat(this.argPer)-100+e;if(t>3600&&(t-=3600),this.argPerCalcResults=this.argPerCalc(t.toString(),this.now),this.argPerCalcResults===ot.Success&&this.meanACalcResults===ot.Success&&this.currentDirection===this.goalDirection)break;if(this.argPerCalcResults===ot.Far&&(e+=49),this.argPerCalcResults===ot.Error)return ot.Error;if(this.meanACalcResults=this.meanACalcLoop2(),this.meanACalcResults===ot.Success)if(this.currentDirection!==this.goalDirection)e+=20;else if(this.argPerCalcResults===ot.Success)break;if(e=this.meanACalcResults===ot.Far?e+100:e,this.meanACalcResults===ot.Error)return ot.Error}return this.argPerCalcResults}meanACalcLoop2(){for(let e=0;e<5200;e+=1){if(this.meanACalcResults=this.meanACalc(e,this.now),this.meanACalcResults===ot.Success){if(this.currentDirection===this.goalDirection)break;e+=20}if(e=this.meanACalcResults===ot.Far?e+100:e,this.meanACalcResults===ot.Error)return ot.Error}return this.meanACalcResults}parseTle(){this.intl=this.sat.TLE1.substring(9,17),this.epochyr=this.sat.TLE1.substring(18,20),this.epochday=this.sat.TLE1.substring(20,32),this.meanmo=this.sat.TLE2.substring(52,63),this.argPer=lt.J.pad0((this.sat.argPe*b.I3).toFixed(4),8),this.inc=lt.J.pad0((this.sat.inclination*b.I3).toFixed(4),8),this.ecen=this.sat.eccentricity.toFixed(7).substring(2,9),this.TLE1Ending=this.sat.TLE1.substring(32,71)}meanACalcLoop(e,t){let i=ot.Near;for(let a=0;a<5200;a+=1){if(i=this.meanACalc(a,e),i===ot.Success){if(this.currentDirection===t)break;a+=20}i===ot.Far&&(a+=100)}return i}raanCalcLoop(e,t){let i=ot.Near;for(let a=0;a<52e3&&(i=this.raanCalc(a,e,t),i!==ot.Success);a+=1)i===ot.Far&&(a+=1e3);return i}meanACalc(e,t){const i=this.sat;let a=i.satrec||S.Sgp4.createSatrec(i.TLE1,i.TLE2);e/=10;const s=lt.J.pad0(e.toFixed(4),8),n=lt.J.pad0((i.raan*b.I3).toFixed(4),8),o=this.newArgPer?lt.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):lt.J.pad0((i.argPe*b.I3).toFixed(4),8),l=i.TLE1.substring(32,71),r="1 "+i.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+l,c="2 "+i.sccNum+" "+this.inc+" "+n+" "+this.ecen+" "+o+" "+s+" "+this.meanmo+"    10";a=S.Sgp4.createSatrec(r,c);const d=this.getOrbitByLatLonPropagate(t,a,nt.MeanAnomaly);return d===ot.Success&&(i.TLE1=r,i.TLE2=c,this.newMeana=s),d}getOrbitByLatLonPropagate(e,t,i){const{m:a,gmst:s}=f.$.calculateTimeVariables(e,t),n=S.Sgp4.propagate(t,a).position;if(isNaN(n.x)||isNaN(n.y)||isNaN(n.z))return ot.Error;const o=S.Transforms.eci2lla(n,s);let{lat:l,lon:r,alt:c}=o;const d=S.Transforms.getDegLat(l),u=S.Transforms.getDegLon(r);if(this.lastLat=this.lastLat?this.lastLat:d,i===nt.MeanAnomaly){if(d===this.lastLat)return 0;d>this.lastLat&&(this.currentDirection="N"),d<this.lastLat&&(this.currentDirection="S"),this.lastLat=d}return i===nt.MeanAnomaly&&d>this.goalLat-rt.MAX_LAT_ERROR&&d<this.goalLat+rt.MAX_LAT_ERROR||i===nt.RightAscensionOfAscendingNode&&u>this.goalLon-rt.MAX_LON_ERROR&&u<this.goalLon+rt.MAX_LON_ERROR||i===nt.ArgumentOfPerigee&&c>this.goalAlt-rt.MAX_ALT_ERROR&&c<this.goalAlt+rt.MAX_ALT_ERROR?ot.Success:(i!==nt.MeanAnomaly||d>this.goalLat-11&&d<this.goalLat+11)&&(i!==nt.RightAscensionOfAscendingNode||u>this.goalLon-11&&u<this.goalLon+11)?i===nt.ArgumentOfPerigee&&(c<this.goalAlt-100||c>this.goalAlt+100)?ot.Far:ot.Near:ot.Far}raanCalc(e,t,i){const a=e;e=(e/=100)>360?e-360:e;const s=lt.J.pad0(e.toFixed(4),8),n=this.newArgPer?lt.J.pad0((parseFloat(this.newArgPer)/10).toFixed(4),8):lt.J.pad0((this.sat.argPe*b.I3).toFixed(4),8),o="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,l="2 "+this.sat.sccNum+" "+this.inc+" "+s+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10",r=S.Sgp4.createSatrec(o,l),c=this.getOrbitByLatLonPropagate(i,r,nt.RightAscensionOfAscendingNode);if(c===ot.Success){e=(e=(e=a/100+t)>360?e-360:e)<0?e+360:e;const i=lt.J.pad0(e.toFixed(4),8),s="2 "+this.sat.sccNum+" "+this.inc+" "+i+" "+this.ecen+" "+n+" "+this.newMeana+" "+this.meanmo+"    10";this.sat.TLE1=o,this.sat.TLE2=s}return c}argPerCalc(e,t){const i=this.newMeana,a=lt.J.pad0((this.sat.raan*b.I3).toFixed(4),8);e=lt.J.pad0((parseFloat(e)/10).toFixed(4),8);const s="1 "+this.sat.sccNum+"U "+this.intl+" "+this.epochyr+this.epochday+this.TLE1Ending,n="2 "+this.sat.sccNum+" "+this.inc+" "+a+" "+this.ecen+" "+e+" "+i+" "+this.meanmo+"    10",o=S.Sgp4.createSatrec(s,n),l=this.getOrbitByLatLonPropagate(t,o,nt.ArgumentOfPerigee);return l===ot.Success&&(this.sat.TLE1=s,this.sat.TLE2=n,this.newArgPer=e),l}}rt.MAX_LAT_ERROR=.1,rt.MAX_LON_ERROR=.1,rt.MAX_ALT_ERROR=30;var ct=i(266),dt=i(7368);class ut extends u.c{constructor(){super(ut.PLUGIN_NAME),this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=st,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=r.bD.getCatalogManager().getSat(r.bD.getCatalogManager().selectedSat,Oe.C_.EXTRA_ONLY);if((null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_)return v.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=r.bD.html`
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
  </div>`,this.helpTitle="Breakup Menu",this.helpBody=r.bD.html`The Breakup Menu is a tool for simulating the breakup of a satellite.
  <br><br>
  By modifying duplicating and modifying a satellite's orbit we can model the breakup of a satellite.
  After selecting a satellite and opening the menu, the user can select:
  <ul style="margin-left: 40px;">
    <li>Inclination Variation</li>
    <li>RAAN Variation</li>
    <li>Period Variation</li>
    <li>Number of Breakup Pieces</li>
  </ul>
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`}updateSccNumInMenu_(){if(!this.isMenuButtonEnabled)return;const e=r.bD.getCatalogManager().getSat(r.bD.getCatalogManager().selectedSat,Oe.C_.EXTRA_ONLY);(0,o.G)("hc-scc").value=e.sccNum}addHtml(){super.addHtml(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)("breakup").addEventListener("submit",(e=>{e.preventDefault(),(0,V.QP)((()=>this.onSubmit()))}))}}),r.bD.register({event:r.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.TLE1)?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonEnabled&&(this.closeSideMenu(),v.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&this.updateSccNumInMenu_()):(this.isMenuButtonEnabled&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}onSubmit(){const e=r.bD.getTimeManager(),t=r.bD.getCatalogManager();let i=t.getIdFromObjNum(parseInt((0,o.G)("hc-scc").value));const a=t.getSat(i),s=a,n=dt.x.eci2lla(a.position,e.simulationTimeObj),l=n.lat,c=n.lon,d=e.simulationTimeObj,u=f.$.getDirection(a,e.simulationTimeObj);"Error"===u&&v.x.warn("Cannot calculate direction of satellite. Try again later.");const p=ct.l.currentEpoch(d);if(a.TLE1=a.TLE1.substr(0,18)+p[0]+p[1]+a.TLE1.substr(32),r.bD.getMainCamera().isAutoPitchYawToTarget=!1,a.apogee-a.perigee>this.maxDifApogeeVsPerigee_)return void v.x.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const g=a.apogee-a.perigee<300?0:n.alt;let h=new rt(a,l,c,u,d,g).rotateOrbitToLatLon();const m=h[0],b=h[1];t.satCruncher.postMessage({typ:"satEdit",id:i,TLE1:m,TLE2:b});const M=r.bD.getOrbitManager();M.changeOrbitBufferData(i,m,b);const y=parseFloat((0,o.G)("hc-per").value),w=parseFloat((0,o.G)("hc-inc").value),C=parseFloat((0,o.G)("hc-raan").value),L=parseInt((0,o.G)("hc-count").value),x=15e-5,D=a.eccentricity;let E=0;for(let o=0;o<=4&&!(E>=L);o++){i=t.getIdFromObjNum(9e4+E),t.getSat(i);let r=s;const p=-C/2+C*(o/4),g=a.apogee-a.perigee<300?0:n.alt;let h=new rt(r,l,c,u,d,g,p).rotateOrbitToLatLon();if("Error"===h[0]&&(h=new rt(r,l,c,u,new Date(d.getTime()+1),g,p).rotateOrbitToLatLon(),"Error"===h[0]))return void v.x.error(new Error(h[1]),"breakup.ts","Error creating breakup!");let m=h[0],T=h[1];for(;E<(o+1)*L/4;E++){let a=parseFloat(b.substr(8,8));a=a+Math.random()*w*2-w;const s=lt.J.pad0(a.toFixed(4),8);if(8!==s.length)throw new Error(`Inclination length is not 8 - ${s} - ${b}`);r.eccentricity=D,r.eccentricity+=Math.random()*x*2-x;let n=parseFloat(T.substr(52,10));n=n+Math.random()*y*2-y;const o=lt.J.pad0(n.toFixed(8),11);if(11!==o.length)throw new Error(`meanmo length is not 11 - ${o} - ${T}`);if(i=t.getIdFromObjNum(8e4+E),m=`1 ${8e4+E}`+m.substr(7),T=`2 ${8e4+E} ${s} ${T.substr(17,35)}${o}${T.substr(63)}`,69!==m.length)throw new Error(`Invalid TLE1: length is not 69 - ${m}`);if(69!==T.length)throw new Error(`Invalid TLE1: length is not 69 - ${T}`);let l;r=t.getSat(i),r.TLE1=m,r.TLE2=T,r.active=!0,r.satrec=null;try{l=S.Sgp4.createSatrec(m,T)}catch(e){return void v.x.error(e,"breakup.ts","Error creating breakup!")}f.$.altitudeCheck(l,e.simulationTimeObj)>1?(t.satCruncher.postMessage({typ:"satEdit",id:i,TLE1:m,TLE2:T}),M.changeOrbitBufferData(i,m,T)):v.x.warn("Breakup Generator Failed")}}r.bD.getUiManager().doSearch(`${a.sccNum},Analyst`)}}ut.PLUGIN_NAME="Breakup";const pt=new ut;class gt{static getColors(e){let t,i;switch(e){case"Top Secret//SCI":t="#fce93a",i="black";break;case"Top Secret":t="#ff8c00",i="black";break;case"Secret":t="#ff0000",i="white";break;case"Confidential":t="#0033a0",i="white";break;case"CUI":t="#512b85",i="white";break;case"Unclassified":t="#007a33",i="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:i}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class ht extends u.c{constructor(){super("Classification"),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateClassificationString(e=this.classificationString_,t="#ffffff",i="#000000"){this.isClassificationContainerLoaded_||this.loadClassificationContainer_(),""===e?((0,o.G)("classification-container").style.display="none",this.updateTopMenuHeight_(!1)):((0,o.G)("classification-container").style.display="flex",this.updateTopMenuHeight_(!0)),(0,o.G)("classification-string").innerHTML=e;const a=(0,o.G)("classification-container");if(a.style.fontWeight="500",gt.isValidClassification(e)){const a=gt.getColors(e);t=a.backgroundColor,i=a.color}a.style.backgroundColor=t,a.style.color=i,this.classificationString_=e}addHtml(){super.addHtml(),r.bD.register({event:"uiManagerInit",cbName:this.PLUGIN_NAME,cb:this.uiManagerInit_.bind(this)})}loadClassificationContainer_(){const e=document.createElement("div");e.innerHTML=r.bD.html`<span id="classification-string"></span>`,e.id="classification-container",e.style.cssText="\n      height: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      ",(0,o.G)("keeptrack-main-container").insertBefore(e,(0,o.G)("keeptrack-main-container").firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr&&(this.loadClassificationContainer_(),this.updateClassificationString())}updateTopMenuHeight_(e){if(this.isExpanded_===e)return;let t=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(t)&&(t=0),document.documentElement.style.setProperty("--top-menu-height",t+(e?20:-20)+"px"),this.isExpanded_=e}}const mt=new ht,bt=i.p+"../img/socrates.png";class vt extends u.c{constructor(){super(vt.PLUGIN_NAME),this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=bt,this.bottomIconLabel="Collisions",this.sideMenuElementName="socrates-menu",this.sideMenuElementHtml=r.bD.html`
  <div id="socrates-menu" class="side-menu-parent start-hidden text-select">
    <div id="socrates-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible collisions</h5>
        <table id="socrates-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=r.bD.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.socratesOnSatCruncher=null,this.collisionList=[],this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&this.parseCollisionData_()}}uiManagerFinal(){(0,o.G)("socrates-menu").addEventListener("click",(e=>{(0,V.QP)((()=>{const t=e.target.parentElement;if(!t.classList.contains("socrates-object"))return;const i=t.attributes.hiddenrow.value;null!==i&&this.eventClicked_(i)}))}))}addJs(){super.addJs(),r.bD.register({event:"uiManagerFinal",cbName:"collisions",cb:this.uiManagerFinal.bind(this)}),r.bD.register({event:"onCruncherMessage",cbName:"collisions",cb:()=>{null!==this.socratesOnSatCruncher&&(r.bD.getCatalogManager().setSelectedSat(this.socratesOnSatCruncher),this.socratesOnSatCruncher=null)}})}parseCollisionData_(){0===this.collisionList.length&&fetch("./SOCRATES.html").then((e=>{e.text().then((e=>{const t=(new DOMParser).parseFromString(e,"text/html");this.processSocratesHtm(t),0===this.collisionList.length&&v.x.warn("No collisions data found!")}))}))}eventClicked_(e){const t=new Date;r.bD.getTimeManager().changeStaticOffset(this.collisionList[e].toca.getTime()-t.getTime()-3e4),r.bD.getMainCamera().isAutoPitchYawToTarget=!1,r.bD.getUiManager().doSearch(`${this.collisionList[e].sat1},${this.collisionList[e].sat2}`);const i=r.bD.getCatalogManager();this.socratesOnSatCruncher=i.getIdFromObjNum(parseInt(this.collisionList[e].sat1))}processSocratesHtm(e){try{const t=e.getElementsByClassName("center outline")[0],i=Array.from(t.getElementsByTagName("tr")).filter((e=>!e.classList.contains("header"))),a=i.map((e=>Array.from(e.getElementsByTagName("td")))).map((e=>e.map((e=>e.innerText))));for(let e=0;e<a.length;e+=2){const t={sat1:a[e][1],sat2:a[e+1][1],toca:new Date(a[e][4]),minRng:parseFloat(a[e][5]),maxProb:parseFloat(a[e+1][5]),relSpeed:parseFloat(a[e][6])};this.collisionList.push(t)}const s=(0,o.G)("socrates-table");s.innerHTML="";let n=s.insertRow(),l=n.insertCell();l.appendChild(document.createTextNode("TOCA")),l.setAttribute("style","text-decoration: underline");let r=n.insertCell();r.appendChild(document.createTextNode("#1")),r.setAttribute("style","text-decoration: underline");let c=n.insertCell();c.appendChild(document.createTextNode("#2")),c.setAttribute("style","text-decoration: underline");let d=n.insertCell();d.appendChild(document.createTextNode("Probability")),d.setAttribute("style","text-decoration: underline");for(let e=0;e<this.collisionList.length;e++)n=s.insertRow(),n.setAttribute("class","socrates-object link"),n.setAttribute("hiddenrow",e.toString()),l=n.insertCell(),l.appendChild(document.createTextNode(this.collisionList[e].toca.toISOString().slice(0,19).replace("T"," "))),r=n.insertCell(),r.appendChild(document.createTextNode(this.collisionList[e].sat1)),c=n.insertCell(),c.appendChild(document.createTextNode(this.collisionList[e].sat2)),d=n.insertCell(),d.appendChild(document.createTextNode(this.collisionList[e].minRng.toString()))}catch(e){v.x.warn("Error parsing SOCRATES data!")}}}vt.PLUGIN_NAME="collisions";const ft=new vt,St=i.p+"../img/colors.png";var Mt=i(3825);class yt extends u.c{constructor(){super(yt.PLUGIN_NAME),this.bottomIconImg=St,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=r.bD.html`
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
  </div>`,this.helpTitle="Colors Menu",this.helpBody=r.bD.html`The Colors Menu is a place to change the color theme used to render the objects.
<br><br>
The various themes can change the colors based on the objects' orbits, objects' characteristics, or the objects' relation to sun and/or earth.
`,this.rmbL1ElementName="colors-rmb",this.rmbL1Html=r.bD.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Color Scheme &#x27A4;</a></li>`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.rmbMenuOrder=50,this.rmbL2ElementName="colors-rmb-menu",this.rmbL2Html=r.bD.html`
  <ul class='dropdown-contents'>
    <li id="colors-default-rmb"><a href="#">Object Types</a></li>
    <li id="colors-rcs-rmb"><a href="#">Radar Cross Section</a></li>
    <li id="colors-density-rmb"><a href="#">Orbit Density</a></li>
    <li id="colors-sunlight-rmb"><a href="#">Sunlight Status</a></li>
    <li id="colors-country-rmb"><a href="#">Country</a></li>
    <li id="colors-confidence-rmb"><a href="#">Confidence Level</a></li>
    <li id="colors-velocity-rmb"><a href="#">Velocity</a></li>
    <li id="colors-ageOfElset-rmb"><a href="#">Age of Elset</a></li>
  </ul>`,this.rmbCallback=e=>{try{super.rmbCallback(e)}catch(e){}switch(e){case"colors-default-rmb":yt.colorsMenuClick("default");break;case"colors-confidence-rmb":yt.colorsMenuClick("confidence");break;case"colors-rcs-rmb":yt.colorsMenuClick("rcs");break;case"colors-density-rmb":yt.colorsMenuClick("neighbors");break;case"colors-sunlight-rmb":yt.colorsMenuClick("sunlight");break;case"colors-country-rmb":yt.colorsMenuClick("countries");break;case"colors-velocity-rmb":yt.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":yt.colorsMenuClick("elset-age")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{document.getElementById("colors-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(){const e=this.dataset.color;yt.colorsMenuClick(e)}))}))}})}}yt.PLUGIN_NAME="Color Menu",yt.colorsMenuClick=e=>{const t=r.bD.getCatalogManager(),i=r.bD.getColorSchemeManager(),a=r.bD.getUiManager();switch(t.setSelectedSat(-1),"sunlight"!==e&&t.satCruncher.postMessage({isSunlightView:!1}),e){case"default":qe.j.change("default"),i.setColorScheme(i.default,!0),a.colorSchemeChangeAlert(i.currentColorScheme);break;case"confidence":qe.j.change("confidence"),i.setColorScheme(i.confidence,!0),a.colorSchemeChangeAlert(i.currentColorScheme);break;case"velocity":qe.j.change("velocity"),i.setColorScheme(i.velocity,!0),a.colorSchemeChangeAlert(i.currentColorScheme);break;case"sunlight":t.satCruncher.postMessage({isSunlightView:!0}),qe.j.change("sunlight"),a.colorSchemeChangeAlert(i.sunlight),(0,Mt.J)(t.satCruncher,(()=>{i.setColorScheme(i.sunlight,!0)}),(e=>e.satInSun));break;case"near-earth":qe.j.change("near"),i.setColorScheme(i.leo,!0),a.colorSchemeChangeAlert(i.currentColorScheme);break;case"deep-space":qe.j.change("deep"),i.setColorScheme(i.geo,!0),a.colorSchemeChangeAlert(i.currentColorScheme);break;case"elset-age":(0,V.QP)((()=>{qe.j.change("ageOfElset"),i.setColorScheme(i.ageOfElset,!0),a.colorSchemeChangeAlert(i.currentColorScheme)}));break;case"lost-objects":(0,o.G)("search").value="",(0,V.QP)((()=>{settingsManager.lostSatStr="",i.setColorScheme(i.lostobjects,!0),(0,o.G)("search").value=settingsManager.lostSatStr,a.colorSchemeChangeAlert(i.currentColorScheme),a.doSearch((0,o.G)("search").value)}));break;case"rcs":qe.j.change("rcs"),i.setColorScheme(i.rcs,!0),a.colorSchemeChangeAlert(i.currentColorScheme);break;case"smallsats":qe.j.change("small"),i.setColorScheme(i.smallsats,!0),a.colorSchemeChangeAlert(i.currentColorScheme);break;case"neighbors":qe.j.change("neighbors"),i.setColorScheme(i.neighbors,!0),a.colorSchemeChangeAlert(i.currentColorScheme);break;case"countries":qe.j.change("countries"),null!==r.bD.getGroupsManager().selectedGroup?i.setColorScheme(i.groupCountries,!0):i.setColorScheme(i.countries,!0),a.colorSchemeChangeAlert(i.currentColorScheme)}r.bD.getUiManager().hideSideMenus()};const wt=new yt;var Ct=i(9522);class Lt extends u.c{constructor(){super("Debris Screening"),this.bottomIconCallback=()=>{if(this.verifySatelliteSelected()&&this.isMenuButtonEnabled){const e=r.bD.getCatalogManager(),t=e.getSat(e.selectedSat,Oe.C_.EXTRA_ONLY);(0,o.G)(`${this.formPrefix_}-scc`).value=t.sccNum}},this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=Be,this.bottomIconLabel="Debris Screening",this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=r.bD.html`
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
`,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.helpTitle="Debris Screening",this.helpBody=r.bD.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=r.bD.html`<img src="${Be}" />
  `}addJs(){super.addJs(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)(`${this.sideMenuElementName}-form`).addEventListener("submit",(e=>{e.preventDefault(),(0,V.QP)((()=>this.onFormSubmit()))})),(0,o.G)(`${this.sideMenuElementName}-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,V.QP)((()=>this.onVisClick()))})),(0,o.G)(`${this.sideMenuElementName}-clear-vis`).addEventListener("click",(e=>{e.preventDefault(),(0,V.QP)((()=>Lt.onClearVisClick()))}))}}),r.bD.register({event:r.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled()}})}onVisClick(){const e=parseFloat((0,o.G)(`${this.formPrefix_}-u`).value),t=parseFloat((0,o.G)(`${this.formPrefix_}-v`).value),i=parseFloat((0,o.G)(`${this.formPrefix_}-w`).value);r.bD.getScene().searchBox.setCubeSize(e,t,i)}static onClearVisClick(){r.bD.getScene().searchBox.setCubeSize(0,0,0)}onFormSubmit(){let e=r.bD.getCatalogManager().getIdFromObjNum(parseInt((0,o.G)(`${this.formPrefix_}-scc`).value));const t=parseFloat((0,o.G)(`${this.formPrefix_}-u`).value),i=parseFloat((0,o.G)(`${this.formPrefix_}-v`).value),a=parseFloat((0,o.G)(`${this.formPrefix_}-w`).value),s=parseFloat((0,o.G)(`${this.formPrefix_}-time`).value),n=r.bD.getCatalogManager().getSat(e,Oe.C_.SKIP_POS_VEL),l=r.bD.getCatalogManager().satData.filter((e=>!(!e.satrec||e.perigee>n.apogee||n.perigee>e.apogee))).map((e=>e.id));let c=0,d=[];for(let e=0;e<60*s;e++){c=1e3*e*60;const s=r.bD.getTimeManager().getOffsetTimeObj(c),{m:o}=f.$.calculateTimeVariables(s,n.satrec),u=S.Sgp4.propagate(n.satrec,o);for(let e=0;e<l.length;e++){const n=r.bD.getCatalogManager().getSat(l[e],Oe.C_.SKIP_POS_VEL);if(!n||!n.satrec)continue;const{m:o}=f.$.calculateTimeVariables(s,n.satrec),c=S.Sgp4.propagate(n.satrec,o);if(!c){l.splice(e,1);break}const p=dt.x.sat2ric({position:u.position,velocity:u.velocity},{position:c.position,velocity:c.velocity});if(Math.abs(p.position[0])<t&&Math.abs(p.position[1])<i&&Math.abs(p.position[2])<a){console.log(`${n.sccNum} at ${new Date(s)}`),d.push(n.sccNum),l.splice(e,1);break}}}d=d.filter(((e,t,i)=>i.indexOf(e)===t));let u=d.join(",");u=u.replace(/,\s*$/u,""),r.bD.getUiManager().doSearch(u)}}const xt=new Lt;var Dt=i(769);const Et=i.p+"../img/gps.png";var Tt=i(4032),kt=i.n(Tt),At=i(2658);class It{static calculateDops(e){let t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},i=e.length;if(i<4)return t;const a=kt().rep([i,4],0);for(let t=1;t<=i;t++){const{az:i,el:s}=e[t-1],n=[Math.cos(s*b.qW)*Math.sin(i*b.qW),Math.cos(s*b.qW)*Math.cos(i*b.qW),Math.sin(s*b.qW),1];kt().setBlock(a,[t-1,0],[t-1,3],[n])}const s=kt().dot(kt().transpose(a),a),n=kt().inv(s),o=Math.sqrt(n[0][0]+n[1][1]+n[2][2]),l=Math.sqrt(n[0][0]+n[1][1]),r=Math.sqrt(n[0][0]+n[1][1]+n[2][2]+n[3][3]),c=Math.sqrt(n[2][2]),d=Math.sqrt(n[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,i,a,s,n=10){if(void 0===i||void 0===a)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};let o=i*b.qW,l=a*b.qW;null!=s||(s=0);const{gmst:r}=f.$.calculateTimeVariables(e);let c=[];return t.forEach((e=>{const t=S.Transforms.ecf2rae({lon:l,lat:o,alt:s},S.Transforms.eci2ecf(e.position,r)),i={az:t.az*b.I3,el:t.el*b.I3};i.el>n&&c.push(i)})),It.calculateDops(c)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");let t=(0,o.G)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let i=t.insertRow(),a=i.insertCell();a.appendChild(document.createTextNode("Time"));let s=i.insertCell();s.appendChild(document.createTextNode("HDOP"));let n=i.insertCell();n.appendChild(document.createTextNode("PDOP"));let l=i.insertCell();l.appendChild(document.createTextNode("GDOP"));for(let o of e)i=t.insertRow(),a=i.insertCell(),a.appendChild(document.createTextNode((0,At.v)(o.time,"isoDateTime",!0))),s=i.insertCell(),s.appendChild(document.createTextNode(o.dops.hdop)),n=i.insertCell(),n.appendChild(document.createTextNode(o.dops.pdop)),l=i.insertCell(),l.appendChild(document.createTextNode(o.dops.gdop))}static getDopsList(e,t,i,a,s,n){let o=[];for(let l=0;l<1440;l++){const r=e(60*l*b.s9);let c=It.getDops(r,t,i,a,s,n);o.push({time:r,dops:c})}return o}}class Nt extends u.c{constructor(){super(Nt.PLUGIN_NAME),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=Et,this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&(0,V.QP)(Nt.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=r.bD.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
    <br><br>
    HDOP is the Horizontal Dilution of Precision. It is a measure of the accuracy of the horizontal position.
    <br><br>
    PDOP is the Position Dilution of Precision. It is a measure of the accuracy of the position.
    <br><br>
    GDOP is the Geometric Dilution of Precision. It is a measure of the accuracy of the position.
  `,this.sideMenuElementName="dops-menu",this.sideMenuElementHtml=r.bD.html`
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
  </div>`,this.rmbL1ElementName="dops-rmb",this.rmbL1Html=r.bD.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">DOPs &#x27A4;</a></li>
`,this.isRmbOnEarth=!0,this.isRmbOffEarth=!1,this.isRmbOnSat=!1,this.rmbL2ElementName="dops-rmb-menu",this.rmbL2Html=r.bD.html`
  <ul class='dropdown-contents'>
    <li id="dops-curdops-rmb"><a href="#">Current GPS DOPs</a></li>
    <li id="dops-24dops-rmb"><a href="#">24 Hour GPS DOPs</a></li>
  </ul>
`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=r.bD.getInputManager().mouse.latLon;const i=r.bD.getInputManager().mouse.dragPosition;(void 0===e||isNaN(e.lat)||isNaN(e.lon))&&(console.debug("latLon undefined!"),e=dt.x.eci2lla({x:i[0],y:i[1],z:i[2]},r.bD.getTimeManager().simulationTimeObj));const a=Nt.getGpsSats(r.bD.getCatalogManager(),r.bD.getGroupsManager());var t=It.getDops(r.bD.getTimeManager().simulationTimeObj,a,e.lat,e.lon,0,settingsManager.gpsElevationMask);r.bD.getUiManager().toast(`HDOP: ${t.hdop}<br/>VDOP: ${t.vdop}<br/>PDOP: ${t.pdop}<br/>GDOP: ${t.gdop}<br/>TDOP: ${t.tdop}`,"normal",!0);break}case"dops-24dops-rmb":{const e=r.bD.getInputManager().mouse.latLon;if(this.isMenuButtonEnabled){(0,V.QP)(Nt.updateSideMenu),this.setBottomIconToEnabled();break}(0,o.G)("dops-lat").value=e.lat.toFixed(3),(0,o.G)("dops-lon").value=e.lon.toFixed(3),(0,o.G)("dops-alt").value="0",(0,o.G)("dops-el").value=settingsManager.gpsElevationMask.toString(),r.bD.methods.bottomMenuClick(this.bottomIconElementName)}}}}addJs(){super.addJs(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)("dops-form").addEventListener("submit",(e=>{e.preventDefault(),Nt.updateSideMenu()}))}})}static updateSideMenu(){const e=r.bD.getGroupsManager(),t=r.bD.getCatalogManager(),i=r.bD.getTimeManager(),a=parseFloat((0,o.G)("dops-lat").value),s=parseFloat((0,o.G)("dops-lon").value),n=parseFloat((0,o.G)("dops-alt").value),l=parseFloat((0,o.G)("dops-el").value);settingsManager.gpsElevationMask=l;const c=Nt.getGpsSats(t,e),d=It.getDopsList((e=>i.getOffsetTimeObj(e)),c,a,s,n,l);It.updateDopsTable(d)}static getGpsSats(e,t){var i,a;const s=null!==(i=(a=t.groupList).GPSGroup)&&void 0!==i?i:a.GPSGroup=t.createGroup(c.Y.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),n=[];return s.objects.forEach((t=>{const i=e.getSat(t);n.push(i)})),n}}Nt.PLUGIN_NAME="DOPs Plugin";const Gt=new Nt,Pt=i.p+"../img/edit.png";var Ot=i(4790);class Rt extends u.c{constructor(){super(Rt.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=r.bD.html`The Edit Satellite Menu is used to edit the satellite data.
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
    </ul>`,this.sideMenuElementName="editSat-menu",this.sideMenuElementHtml=r.bD.html`
    <div id="editSat-menu" class="side-menu-parent start-hidden text-select">
      <div id="editSat-content" class="side-menu">
        <div class="row">
          <h5 class="center-align">Edit Satellite</h5>
          <form id="editSat">
            <div class="input-field col s12">
              <input disabled value="AAAAA" id="${Rt.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${Rt.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${Rt.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${Rt.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${Rt.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Rt.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${Rt.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Rt.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${Rt.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${Rt.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${Rt.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${Rt.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${Rt.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Rt.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${Rt.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Rt.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${Rt.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${Rt.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${Rt.elementPrefix}-per" class="active">Period</label>
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
        <div id="${Rt.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=Pt,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&Rt.populateSideMenu()},this.dragOptions={isDraggable:!0},this.isRmbOnSat=!0,this.rmbMenuOrder=2,this.rmbL1ElementName="edit-rmb",this.rmbL1Html=r.bD.html`
  <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Edit Sat &#x27A4;</a></li>`,this.rmbCallback=(e,t)=>{if(null==t)throw new Error("clickedSat is undefined");switch(e){case"set-pri-sat-rmb":r.bD.getCatalogManager().selectSat(t);break;case"set-sec-sat-rmb":r.bD.getCatalogManager().setSecondarySat(t);break;case"edit-sat-rmb":r.bD.getCatalogManager().setSelectedSat(t),this.isMenuButtonEnabled||r.bD.getUiManager().bottomIconPress({id:"menu-editSat"})}},this.rmbL2ElementName="edit-rmb-menu",this.rmbL2Html=r.bD.html`
    <ul class='dropdown-contents'>
      <li id="set-pri-sat-rmb"><a href="#">Set as Primary Sat</a></li>
      <li id="set-sec-sat-rmb"><a href="#">Set as Secondary Sat</a></li>
      <li id="edit-sat-rmb"><a href="#">Edit Satellite</a></li>
    </ul>`}addHtml(){super.addHtml(),r.bD.register({event:r.RL.uiManagerFinal,cbName:"editSat",cb:()=>{(0,o.G)("editSat-newTLE").addEventListener("click",Rt.editSatNewTleClick),(0,o.G)("editSat").addEventListener("submit",(function(e){e.preventDefault(),Rt.editSatSubmit()})),(0,o.G)(`${Rt.elementPrefix}-per`).addEventListener("change",(function(){const e=(0,o.G)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,o.G)("es-meanmo").value=t.toFixed(8)})),(0,o.G)(`${Rt.elementPrefix}-meanmo`).addEventListener("change",(function(){const e=(0,o.G)(`${Rt.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,o.G)(`${Rt.elementPrefix}-per`).value=t})),(0,o.G)("editSat-save").addEventListener("click",Rt.editSatSaveClick),(0,o.G)("editSat-open").addEventListener("click",(function(){(0,o.G)("editSat-file").click()})),(0,o.G)("editSat-file").addEventListener("change",(function(e){window.FileReader&&(Rt.doReaderActions(e),e.preventDefault())})),(0,o.G)(`${Rt.elementPrefix}-error`).addEventListener("click",(function(){(0,o.G)(`${Rt.elementPrefix}-error`).style.display="none"}))}})}static doReaderActions(e){try{const t=new FileReader;t.onload=Rt.readerOnLoad,t.readAsText(e.target.files[0])}catch(e){v.x.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad(e){if(2!==e.target.readyState)return;if(e.target.error)return void v.x.warn("Error while reading file!");const t=r.bD.getTimeManager(),i=r.bD.getOrbitManager(),a=r.bD.getUiManager(),s=JSON.parse(e.target.result),n=parseInt(lt.J.pad0(s.TLE1.substr(2,5).trim(),5)),o=r.bD.getCatalogManager().getIdFromObjNum(n),l=r.bD.getCatalogManager().getSat(o,Oe.C_.EXTRA_ONLY);let c;try{c=S.Sgp4.createSatrec(s.TLE1,s.TLE2)}catch(e){return void v.x.error(e,"edit-sat.ts","Error creating satellite record!")}f.$.altitudeCheck(c,t.simulationTimeObj)>1?(r.bD.getCatalogManager().satCruncher.postMessage({typ:"satEdit",id:l.id,active:!0,TLE1:s.TLE1,TLE2:s.TLE2}),i.changeOrbitBufferData(l.id,s.TLE1,s.TLE2),l.active=!0):a.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static populateSideMenu(){const e=r.bD.getCatalogManager().getSat(r.bD.getCatalogManager().selectedSat,Oe.C_.EXTRA_ONLY);(0,o.G)(`${Rt.elementPrefix}-scc`).value=e.sccNum;const t=lt.J.pad0((e.inclination*b.I3).toFixed(4),8);(0,o.G)(`${Rt.elementPrefix}-inc`).value=lt.J.pad0(t,8),(0,o.G)(`${Rt.elementPrefix}-year`).value=e.TLE1.substr(18,2),(0,o.G)(`${Rt.elementPrefix}-day`).value=e.TLE1.substr(20,12),(0,o.G)(`${Rt.elementPrefix}-meanmo`).value=e.TLE2.substr(52,11),(0,o.G)(`${Rt.elementPrefix}-per`).value=(1440/parseFloat(e.TLE2.substr(52,11))).toFixed(4);const i=lt.J.pad0((e.raan*b.I3).toFixed(4),8);(0,o.G)(`${Rt.elementPrefix}-rasc`).value=lt.J.pad0(i,8),(0,o.G)(`${Rt.elementPrefix}-ecen`).value=e.eccentricity.toFixed(7).substr(2,7);const a=lt.J.pad0((e.argPe*b.I3).toFixed(4),8);(0,o.G)(`${Rt.elementPrefix}-argPe`).value=lt.J.pad0(a,8),(0,o.G)(`${Rt.elementPrefix}-meana`).value=e.TLE2.substr(43,8)}static editSatNewTleClick(){(0,V.QP)(Rt.editSatNewTleClickFadeIn)}static editSatNewTleClickFadeIn(){const e=r.bD.getTimeManager(),t=r.bD.getUiManager();try{const i=r.bD.getCatalogManager().getIdFromObjNum(parseInt((0,o.G)(`${Rt.elementPrefix}-scc`).value)),a=r.bD.getCatalogManager().getSat(i),s=dt.x.eci2lla(a.position,e.simulationTimeObj);let n=s.lon,l=s.lat,c=s.alt;const d=f.$.getDirection(a,e.simulationTimeObj);"Error"===d&&t.toast("Cannot calculate direction of satellite. Try again later.","caution");const u=e.simulationTimeObj,p=ct.l.currentEpoch(u);let g;a.TLE1=a.TLE1.substr(0,18)+p[0]+p[1]+a.TLE1.substr(32),r.bD.getMainCamera().isAutoPitchYawToTarget=!1,g=a.apogee-a.perigee<300?new rt(a,l,n,d,u).rotateOrbitToLatLon():new rt(a,l,n,d,u,c).rotateOrbitToLatLon();const h=g[0],m=g[1];if("Error"===h)return void t.toast(`${m}`,"critical",!0);r.bD.getCatalogManager().satCruncher.postMessage({typ:"satEdit",id:i,TLE1:h,TLE2:m}),r.bD.getOrbitManager().changeOrbitBufferData(i,h,m);const v=r.bD.getCatalogManager().getSat(r.bD.getCatalogManager().selectedSat,Oe.C_.EXTRA_ONLY);(0,o.G)(`${Rt.elementPrefix}-scc`).value=v.sccNum;const S=lt.J.pad0((v.inclination*b.I3).toFixed(4),8);(0,o.G)(`${Rt.elementPrefix}-inc`).value=lt.J.pad0(S,8),(0,o.G)(`${Rt.elementPrefix}-year`).value=v.TLE1.substr(18,2),(0,o.G)(`${Rt.elementPrefix}-day`).value=v.TLE1.substr(20,12),(0,o.G)(`${Rt.elementPrefix}-meanmo`).value=v.TLE2.substr(52,11),(0,o.G)(`${Rt.elementPrefix}-per`).value=(1440/parseFloat(v.TLE2.substr(52,11))).toFixed(4);const M=lt.J.pad0((v.raan*b.I3).toFixed(4),8);(0,o.G)(`${Rt.elementPrefix}-rasc`).value=lt.J.pad0(M,8),(0,o.G)(`${Rt.elementPrefix}-ecen`).value=v.eccentricity.toFixed(7).substr(2,7);const y=lt.J.pad0((v.argPe*b.I3).toFixed(4),8);(0,o.G)(`${Rt.elementPrefix}-argPe`).value=lt.J.pad0(y,8),(0,o.G)(`${Rt.elementPrefix}-meana`).value=v.TLE2.substr(43,8)}catch(e){v.x.warn(e)}}static editSatSubmit(){const e=r.bD.getCatalogManager(),t=r.bD.getTimeManager(),i=r.bD.getUiManager();(0,o.G)(`${Rt.elementPrefix}-error`).style.display="none";const a=(0,o.G)(`${Rt.elementPrefix}-scc`).value,s=e.getIdFromObjNum(parseInt(a));null===s&&v.x.info("Not a Real Satellite");const n=e.getSat(s,Oe.C_.EXTRA_ONLY),l=n.TLE1.substr(9,8);let c=(0,o.G)(`${Rt.elementPrefix}-inc`).value,d=(0,o.G)(`${Rt.elementPrefix}-meanmo`).value,u=(0,o.G)(`${Rt.elementPrefix}-rasc`).value;const p=(0,o.G)(`${Rt.elementPrefix}-ecen`).value;let g=(0,o.G)(`${Rt.elementPrefix}-argPe`).value,h=(0,o.G)(`${Rt.elementPrefix}-meana`).value;const m=(0,o.G)(`${Rt.elementPrefix}-year`).value,b=(0,o.G)(`${Rt.elementPrefix}-day`).value,{TLE1:M,TLE2:y}=Ot.L.createTle({sat:n,inc:c,meanmo:d,rasc:u,argPe:g,meana:h,ecen:p,epochyr:m,epochday:b,intl:l,scc:a});let w;try{w=S.Sgp4.createSatrec(M,y)}catch(e){return void v.x.error(e,"edit-sat.ts","Error creating satellite record!")}f.$.altitudeCheck(w,t.simulationTimeObj)>1?(e.satCruncher.postMessage({typ:"satEdit",id:s,active:!0,TLE1:M,TLE2:y}),r.bD.getOrbitManager().changeOrbitBufferData(s,M,y),n.active=!0,n.satrec=null):i.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static editSatSaveClick(e){const t=r.bD.getCatalogManager();try{const e=(0,o.G)(`${Rt.elementPrefix}-scc`).value,i=t.getIdFromObjNum(parseInt(e)),a=t.getSat(i,Oe.C_.EXTRA_ONLY),s={TLE1:a.TLE1,TLE2:a.TLE2},n=JSON.stringify(s),l=new Blob([n],{type:"text/plain;charset=utf-8"});(0,Ke.saveAs)(l,e+".tle")}catch(e){}e.preventDefault()}}Rt.PLUGIN_NAME="Edit Sat",Rt.elementPrefix="es";const _t=new Rt,Ft=i.p+"../img/find2.png";var Ut=i(5561),Bt=i(5326);class zt extends u.c{static checkAz(e,t,i){return e.filter((e=>e.az>=t&&e.az<=i))}static checkEl(e,t,i){return e.filter((e=>e.el>=t&&e.el<=i))}static checkInview(e){const t=r.bD.getDotsManager();return e.filter((e=>1===t.inViewData[e.id]))}static checkObjtype(e,t){return e.filter((e=>e.type===t))}static checkRange(e,t,i){return e.filter((e=>e.rng>=t&&e.rng<=i))}static limitPossibles(e,t){const i=r.bD.getUiManager();return e.length>=t&&i.toast(`Too many results, limited to ${t}`,"serious"),e.slice(0,t)}static searchSats(e){let{az:t,el:i,rng:a,countryCode:s,inc:n,azMarg:l,elMarg:c,rngMarg:d,incMarg:u,period:p,periodMarg:g,rcs:h,rcsMarg:m,objType:b,raan:v,raanMarg:f,argPe:S,argPeMarg:M,bus:y,shape:w,payload:C}=e;const L=!isNaN(t)&&isFinite(t),x=!isNaN(i)&&isFinite(i),D=!isNaN(a)&&isFinite(a),E=!isNaN(n)&&isFinite(n),T=!isNaN(v)&&isFinite(v),k=!isNaN(S)&&isFinite(S),A=!isNaN(p)&&isFinite(p),I=!isNaN(h)&&isFinite(h),N="All"!==s,G="All"!==y,P="All"!==w,O="All"!==C;if(l=!isNaN(l)&&isFinite(l)?l:5,c=!isNaN(c)&&isFinite(c)?c:5,d=!isNaN(d)&&isFinite(d)?d:200,u=!isNaN(u)&&isFinite(u)?u:1,g=!isNaN(g)&&isFinite(g)?g:.5,m=!isNaN(m)&&isFinite(m)?m:h/10,f=!isNaN(f)&&isFinite(f)?f:1,M=!isNaN(M)&&isFinite(M)?M:1,!(x||D||L||E||A||I||k||T||N||G||P||O))throw new Error("No Search Criteria Entered");let R=r.bD.getCatalogManager().getSatsFromSatData().filter((e=>!e.static&&!e.missile&&e.active)).map((e=>{var t;const i=r.bD.getSensorManager();if((null===(t=i.currentSensors)||void 0===t?void 0:t.length)>0){const t=Bt.J.getTearr(e,i.currentSensors);return Object.assign(Object.assign({},e),{az:t.az,el:t.el,rng:t.rng,inView:t.inView})}return e}));R=E||A||!(L||x||D)?R:zt.checkInview(R),R=0!==b?zt.checkObjtype(R,b):R,L&&(R=zt.checkAz(R,t-l,t+l)),x&&(R=zt.checkEl(R,i-c,i+c)),D&&(R=zt.checkRange(R,a-d,a+d)),E&&(R=zt.checkInc(R,n-u,n+u)),T&&(R=zt.checkRaan(R,v-f,v+f)),k&&(R=zt.checkArgPe(R,S-M,S+M)),A&&(R=zt.checkPeriod(R,p-g,p+g)),I&&(R=zt.checkRcs(R,h-m,h+m)),"All"!==s&&(R=R.filter((e=>s.split("|").includes(e.country)))),"All"!==y&&(R=R.filter((e=>e.bus===y))),"All"!==w&&(R=R.filter((e=>e.shape===w))),"All"!==C&&(R=R.filter((e=>{var t,i,a;return(null===(a=null===(i=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===i?void 0:i.split("-")[0])||void 0===a?void 0:a.replace(/[^a-zA-Z]/gu,""))===C}))),R=zt.limitPossibles(R,settingsManager.searchLimit);let _="";return R.forEach(((e,t)=>{_+=t<R.length-1?`${e.sccNum},`:`${e.sccNum}`})),(0,o.G)("search").value=_,r.bD.getUiManager().doSearch((0,o.G)("search").value),R}findByLooksSubmit(){return e=this,t=void 0,a=function*(){const e=r.bD.getUiManager(),t=parseFloat((0,o.G)("fbl-azimuth").value),i=parseFloat((0,o.G)("fbl-elevation").value),a=parseFloat((0,o.G)("fbl-range").value),s=parseFloat((0,o.G)("fbl-inc").value),n=parseFloat((0,o.G)("fbl-period").value),l=parseFloat((0,o.G)("fbl-rcs").value),c=parseFloat((0,o.G)("fbl-azimuth-margin").value),d=parseFloat((0,o.G)("fbl-elevation-margin").value),u=parseFloat((0,o.G)("fbl-range-margin").value),p=parseFloat((0,o.G)("fbl-inc-margin").value),g=parseFloat((0,o.G)("fbl-period-margin").value),h=parseFloat((0,o.G)("fbl-rcs-margin").value),m=parseInt((0,o.G)("fbl-type").value),b=parseFloat((0,o.G)("fbl-raan").value),v=parseFloat((0,o.G)("fbl-raan-margin").value),f=parseFloat((0,o.G)("fbl-argPe").value),S=parseFloat((0,o.G)("fbl-argPe-margin").value),M=(0,o.G)("fbl-country").value,y=(0,o.G)("fbl-bus").value,w=(0,o.G)("fbl-payload").value,C=(0,o.G)("fbl-shape").value;(0,o.G)("search").value="";try{const o={az:t,el:i,rng:a,inc:s,azMarg:c,elMarg:d,rngMarg:u,incMarg:p,period:n,periodMarg:g,rcs:l,rcsMarg:h,objType:m,raan:b,raanMarg:v,argPe:f,argPeMarg:S,countryCode:M,bus:y,payload:w,shape:C};this.lastResults=zt.searchSats(o),0===this.lastResults.length&&e.toast("No Satellites Found","critical")}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered","critical")}},new((i=void 0)||(i=Promise))((function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}));var e,t,i,a}addJs(){super.addJs(),r.bD.register({event:"uiManagerInit",cbName:"findSat",cb:()=>{(0,o.G)("fbl-error").addEventListener("click",(function(){(0,o.G)("fbl-error").style.display="none"}))}}),r.bD.register({event:"uiManagerFinal",cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}constructor(){super(zt.PLUGIN_NAME),this.lastResults=[],this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=r.bD.html`
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
  </div>`,this.bottomIconElementName="menu-find-sat",this.bottomIconImg=Ft,this.bottomIconLabel="Find Satellite",this.helpTitle="Find Satellite Menu",this.helpBody=r.bD.html`The Find Satellite Menu is used for finding satellites by orbital parameters or satellite characteristics.
<br><br>
For most parameters, you type in the target value on the left and then a margin of error on the right.
For example, if you wanted to find all satellites in a 51-52 degree inclination, you can type 51.5 in the left box and 0.5 in the right box.
The search will then find all satellites within those inclinations and display them in the search bar.
`}printLastResults(){v.x.info(this.lastResults.map((e=>e.name)).join("\n"))}uiManagerFinal(){const e=r.bD.getCatalogManager().getSatsFromSatData();(0,o.G)("findByLooks-form").addEventListener("submit",(e=>{e.preventDefault(),(0,V.QP)((()=>{this.findByLooksSubmit(),(0,V.Zk)()}))})),(0,je.d)(e.filter((e=>e.bus)).map((e=>e.bus))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,o.G)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})),Ut.hA.forEach((e=>{(0,o.G)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${Ut.cs[e]}">${e}</option>`)})),(0,je.d)(e.filter((e=>e.shape)).map((e=>e.shape))).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{(0,o.G)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}));const t=e.filter((e=>e.payload)).map((e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,""))).filter((e=>e.length>=3));(0,je.d)(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))).forEach((e=>{""!==e&&e.length>3&&(0,o.G)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}))}static checkArgPe(e,t,i){return e.filter((e=>e.argPe*b.I3<i&&e.argPe*b.I3>t))}static checkInc(e,t,i){return e.filter((e=>e.inclination*b.I3<i&&e.inclination*b.I3>t))}static checkPeriod(e,t,i){return e.filter((e=>e.period>t&&e.period<i))}static checkRaan(e,t,i){return e.filter((e=>e.raan*b.I3<i&&e.raan*b.I3>t))}static checkRcs(e,t,i){return e.filter((e=>parseFloat(e.R)>t&&parseFloat(e.R)<i))}}zt.PLUGIN_NAME="findSat";const $t=new zt;class Ht{constructor(){this.PLUGIN_NAME="Gamepad",this.deadzone=.55,this.buttonsPressedHistory=[],this.buttonsPressed=[]}init(){window.addEventListener("gamepadconnected",(e=>{settingsManager.cruncherReady?this.initializeGamepad(e.gamepad):r.bD.register({event:r.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>this.initializeGamepad(e.gamepad)})})),window.addEventListener("gamepaddisconnected",(()=>{r.bD.getUiManager().toast("Gamepad disconnected","critical"),this.currentController=null}))}initializeGamepad(e){r.bD.getUiManager().toast("Gamepad connected","normal"),this.currentController||r.bD.register({event:r.RL.updateLoop,cbName:this.PLUGIN_NAME,cb:this.updateGamepad.bind(this)}),this.currentController=e}updateGamepad(e){null!=e||(e=0);const t=Ht.getController(e);null!==t&&(this.currentController=t,this.updateZoom_(),this.updateLeftStick_(),this.updateRightStick_(),this.updateButtons_())}updateButtons_(){this.currentController.buttons.forEach(((e,t)=>{if(e.pressed&&!this.buttonsPressed[t])switch(this.buttonsPressed[t]=!0,this.buttonsPressedHistory.push(t),this.buttonsPressedHistory.length>8&&this.buttonsPressedHistory.shift(),t){case 0:this.btnA_();break;case 1:this.btnB_();break;case 2:this.btnX_();break;case 3:this.btnY_();break;case 4:this.btnLeftBumper();break;case 5:this.btnRightBumper_();break;case 8:this.btnHome_();break;case 9:this.btnStart_();break;case 10:this.btnLeftStick_();break;case 11:this.btnRightStick_();break;case 12:this.btnDpadUp_();break;case 13:this.btnDpadDown_();break;case 14:this.btnDpadLeft_();break;case 15:this.btnDpadRight_();break;case 16:this.btnXbox()}else!e.pressed&&this.buttonsPressed[t]&&(this.buttonsPressed[t]=!1)}))}btnA_(){settingsManager.isLimitedGamepadControls||(console.log("A"),r.bD.getCatalogManager().selectSat(r.bD.getHoverManager().hoveringSat))}btnB_(){settingsManager.isLimitedGamepadControls||(console.log("B"),r.bD.getCatalogManager().selectSat(-1),r.bD.getMainCamera().zoomTarget=.8)}btnX_(){settingsManager.isLimitedGamepadControls||(console.log("X"),r.bD.getMainCamera().autoRotate())}btnY_(){console.log("Y")}btnLeftBumper(){if(settingsManager.isLimitedGamepadControls)return;console.log("Left Bumper");const e=r.bD.getCatalogManager(),t=e.selectedSat-1;if(t>=0)e.selectSat(t);else{const t=e.satData.filter((e=>e.TLE1&&e.active)),i=t[t.length-1].id;e.selectSat(i)}}btnRightBumper_(){if(settingsManager.isLimitedGamepadControls)return;console.log("Right Bumper");const e=r.bD.getCatalogManager(),t=e.satData.filter((e=>e.TLE1&&e.active)),i=t[t.length-1].id,a=e.selectedSat+1;a<=i?e.selectSat(a):e.selectSat(0)}btnHome_(){settingsManager.isLimitedGamepadControls||(console.log("Home"),r.bD.getMainCamera().isPanReset=!0,r.bD.getMainCamera().isLocalRotateReset=!0,r.bD.getMainCamera().ftsRotateReset=!0)}btnXbox(){console.log("Xbox Button")}btnStart_(){console.log("Start")}btnLeftStick_(){console.log("Left Stick")}btnRightStick_(){console.log("Right Stick")}btnDpadUp_(){console.log("D-Pad Up"),settingsManager.isAutoRotateD=!1,settingsManager.isAutoRotateU=!settingsManager.isAutoRotateU,r.bD.getMainCamera().autoRotate(!0)}btnDpadDown_(){console.log("D-Pad Down"),settingsManager.isAutoRotateU=!1,settingsManager.isAutoRotateD=!settingsManager.isAutoRotateD,r.bD.getMainCamera().autoRotate(!0)}btnDpadLeft_(){console.log("D-Pad Left"),settingsManager.isAutoRotateR=!1,settingsManager.isAutoRotateL=!settingsManager.isAutoRotateL,r.bD.getMainCamera().autoRotate(!0)}btnDpadRight_(){console.log("Right"),settingsManager.isAutoRotateL=!1,settingsManager.isAutoRotateR=!settingsManager.isAutoRotateR,r.bD.getMainCamera().autoRotate(!0)}updateZoom_(){const e=this.currentController.buttons[6].value,t=this.currentController.buttons[7].value;if(0===e&&0===t)return;const i=r.bD.getRenderer();let a=r.bD.getMainCamera().zoomLevel();switch(r.bD.getMainCamera().cameraType){case pe.iM.DEFAULT:case pe.iM.OFFSET:case pe.iM.FIXED_TO_SAT:a+=e/500*i.dt,a-=t/500*i.dt,r.bD.getMainCamera().zoomTarget=a,r.bD.getMainCamera().camZoomSnappedOnSat=!1,r.bD.getMainCamera().isAutoPitchYawToTarget=!1,a<r.bD.getMainCamera().zoomLevel()?r.bD.getMainCamera().isZoomIn=!0:r.bD.getMainCamera().isZoomIn=!1;break;case pe.iM.FPS:case pe.iM.SATELLITE:case pe.iM.PLANETARIUM:case pe.iM.ASTRONOMY:0!==e&&(r.bD.getMainCamera().fpsVertSpeed+=Math.pow(2*e,3)*i.dt*settingsManager.cameraMovementSpeed),0!==t&&(r.bD.getMainCamera().fpsVertSpeed-=Math.pow(2*t,3)*i.dt*settingsManager.cameraMovementSpeed)}}updateLeftStick_(){const e=this.currentController.axes[0],t=this.currentController.axes[1];if(e>this.deadzone||e<-this.deadzone||t>this.deadzone||t<-this.deadzone){r.bD.getMainCamera().autoRotate(!1);const i=r.bD.getRenderer();switch(settingsManager.lastGamepadMovement=Date.now(),r.bD.getMainCamera().cameraType){case pe.iM.DEFAULT:case pe.iM.OFFSET:case pe.iM.FIXED_TO_SAT:r.bD.getMainCamera().camAngleSnappedOnSat=!1,r.bD.getMainCamera().isAutoPitchYawToTarget=!1,r.bD.getMainCamera().camPitchSpeed-=Math.pow(t,3)/200*i.dt*settingsManager.cameraMovementSpeed,r.bD.getMainCamera().camYawSpeed+=Math.pow(e,3)/200*i.dt*settingsManager.cameraMovementSpeed;break;case pe.iM.FPS:case pe.iM.SATELLITE:case pe.iM.PLANETARIUM:case pe.iM.ASTRONOMY:(t>this.deadzone||t<-this.deadzone)&&(r.bD.getMainCamera().fpsForwardSpeed=-Math.pow(t,3)*i.dt),(e>this.deadzone||e<-this.deadzone)&&(r.bD.getMainCamera().fpsSideSpeed=Math.pow(e,3)*i.dt)}}}updateRightStick_(){if(settingsManager.isLimitedGamepadControls)return;const e=this.currentController.axes[2],t=this.currentController.axes[3],i=r.bD.getRenderer();if(r.bD.getMainCamera().isLocalRotateOverride=!1,t>this.deadzone||t<-this.deadzone||e>this.deadzone||e<-this.deadzone)switch(r.bD.getMainCamera().autoRotate(!1),r.bD.getMainCamera().cameraType){case pe.iM.DEFAULT:case pe.iM.OFFSET:case pe.iM.FIXED_TO_SAT:r.bD.getMainCamera().isLocalRotateOverride=!0,r.bD.getMainCamera().localRotateDif.pitch=200*-t,r.bD.getMainCamera().localRotateDif.yaw=200*-e;break;case pe.iM.FPS:case pe.iM.SATELLITE:case pe.iM.PLANETARIUM:case pe.iM.ASTRONOMY:r.bD.getMainCamera().camPitchSpeed+=t/100*i.dt*settingsManager.cameraMovementSpeed,r.bD.getMainCamera().camYawSpeed-=e/100*i.dt*settingsManager.cameraMovementSpeed}}vibrate(e){this.currentController&&this.currentController.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})}static getController(e=0){const t=navigator.getGamepads().filter((e=>null!==e));return t.length>e&&null!==t[e]?t[e]:null}}const jt=new Ht;var Vt=i(5999);const Kt=i.p+"../img/calendar.png";class Wt extends u.c{constructor(){super("Launch Menu"),this.bottomIconElementName="menu-launches",this.bottomIconImg=Kt,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonEnabled){settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3);const e=(new Date).getFullYear();(0,Vt.Us)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonEnabled&&(this.isMenuButtonEnabled=!1,(0,o.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const Yt=new Wt,Jt=i.p+"../img/rocket.png";var Xt=i(7092);class Zt extends u.c{constructor(){super(Zt.PLUGIN_NAME),this.bottomIconCallback=()=>{if(!this.isMenuButtonEnabled)return;if(!this.verifySatelliteSelected())return;const e=r.bD.getCatalogManager().getSat(r.bD.getCatalogManager().selectedSat,Oe.C_.EXTRA_ONLY);(0,o.G)("nl-scc").value=e.sccNum,(0,o.G)("nl-inc").value=lt.J.pad0((e.inclination*b.I3).toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=Jt,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=r.bD.html`
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
  `,this.helpTitle="New Launch Menu",this.helpBody=r.bD.html`The New Launch Menu is used for generating notional orbital launches by modifying existing satellites with similar parameters.
    <br><br>
    After selecting a satellite, you can select a launch location and a north/south azimuth.
    The selected satellite will be modified to align it with the launch site.
    The clock is then changed to 00:00:00 to represent relative time after the launch.
    This can be helpful in calculating sensor coverage relative to launch time.
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=r.bD.getTimeManager(),i=r.bD.getCatalogManager(),a=r.bD.getUiManager(),s=r.bD.getColorSchemeManager();(0,V.wU)();const n=(0,o.G)("nl-scc").value,l=i.getIdFromObjNum(parseInt(n));let c=i.getSat(l);const d=(0,o.G)("nl-updown").value,u=(0,o.G)("nl-facility").value;let p,g;if(!i.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in i.launchSites)i.launchSites[e].name===u&&(p=i.launchSites[e].lat,g=i.launchSites[e].lon);g>180&&(g-=360);const h=new Date,m=new Date(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate(),0,0,0);m.setUTCHours(0);const b=t.staticOffset;t.changeStaticOffset(m.getTime()-h.getTime()),s.setColorScheme(settingsManager.currentColorScheme,!0),r.bD.getMainCamera().isAutoPitchYawToTarget=!1;const M=t.simulationTimeObj,y=new rt(c,p,g,d,M).rotateOrbitToLatLon(),w=y[0],C=y[1];if("Error"===w||69!==w.length||69!==C.length)return"Error"===w?a.toast(`Failed to Create TLE: ${C}`,"critical"):69!==w.length?a.toast(`Invalid TLE1 Created: length is not 69 - ${w}`,"critical"):69!==C.length&&a.toast(`Invalid TLE2 Created: length is not 69 - ${C}`,"critical"),t.changeStaticOffset(b),this.isDoingCalculations=!1,void(0,V.Zk)();let L;a.toast("Time is now relative to launch time.","standby"),null===(e=r.bD.getSoundManager())||void 0===e||e.play("liftoff"),c.satrec=null;try{L=S.Sgp4.createSatrec(w,C)}catch(e){return void v.x.error(e,"new-launch.ts","Error creating satellite record!")}f.$.altitudeCheck(L,M)>1?(i.satCruncher.postMessage({typ:"satEdit",id:l,active:!0,TLE1:w,TLE2:C}),r.bD.getOrbitManager().changeOrbitBufferData(l,w,C)):a.toast("Failed Altitude Test - Try a Different Satellite!","critical"),(0,Mt.J)(i.satCruncher,(()=>{this.isDoingCalculations=!1,(0,V.Zk)()}),(e=>void 0!==e.satPos),(()=>{this.isDoingCalculations=!1,(0,V.Zk)(),a.toast("Cruncher failed to meet requirement after two tries! Is this launch even possible?","critical")}))}}addJs(){super.addJs(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)(this.sideMenuElementName+"-form").addEventListener("change",(()=>{const e=r.bD.getCatalogManager().getSat(r.bD.getCatalogManager().selectedSat,Oe.C_.EXTRA_ONLY);this.preValidate_(e)}))}}),r.bD.register({event:r.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,o.G)("nl-scc").value=e.sccNum,(0,o.G)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.preValidate_(e)):((0,o.G)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}preValidate_(e){const t=(0,o.G)("nl-facility").value,i=Xt.E[t].lat;let a=e.inclination*b.I3;a=a>90?180-a:a;const s=(0,o.G)(this.sideMenuElementName+"-submit");a<i?(s.disabled=!0,s.textContent="Inclination Too Low!"):(s.disabled=!1,s.textContent="Create Launch Nominal ▶")}}Zt.PLUGIN_NAME="New Launch";const qt=new Zt,Qt=i.p+"../img/calendar2.png",ei=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown";class ti extends u.c{constructor(){super(ti.PLUGIN_NAME),this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&("localhost"===window.location.hostname&&r.bD.getUiManager().toast("This feature is a static table when in offline mode.","caution"),this.showTable())},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=Qt,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=r.bD.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=r.bD.html`
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
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),i.e(478).then(i.bind(i,6128)).then((e=>e))}addJs(){super.addJs(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)("export-launch-info").addEventListener("click",(()=>{(0,Ve.Eb)(this.launchList,"launchList")}))}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then((e=>e.json())).then((e=>this.processData(e))).catch((()=>v.x.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`))).finally((()=>{const e=(0,o.G)("nextLaunch-table");e&&""==e.innerHTML&&(ti.initTable(e,this.launchList),(0,o.G)("nextLaunch-table").querySelectorAll("a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(0,Vt.Us)(e.href)}))})))}))}}processData(e){var t,i,a,s,n,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(i=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===i?void 0:i.name.split(",",1)[0],c.locationURL=null===(a=r.pad)||void 0===a?void 0:a.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(s=r.rocket)||void 0===s?void 0:s.configuration.full_name,c.rocketConfig=null===(n=r.rocket)||void 0===n?void 0:n.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Launch Window")),i.setAttribute("style","text-decoration: underline; width: 120px;");const a=t.insertCell();a.appendChild(document.createTextNode("Mission")),a.setAttribute("style","text-decoration: underline; width: 140px;");const s=t.insertCell();s.appendChild(document.createTextNode("Location")),s.setAttribute("style","text-decoration: underline");const n=t.insertCell();n.appendChild(document.createTextNode("Agency")),n.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var i,a,s,n,o,l;ti.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),u=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":(0,At.v)(t[r].windowStart,"isoDateTime",!0)+" UTC";d.appendChild(document.createTextNode(u));const p=c.insertCell(),g=(null===(i=t[r])||void 0===i?void 0:i.missionName)||"Unknown",h=(null===(a=t[r])||void 0===a?void 0:a.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${ei(g,15)}</a>`:`${ei(g,15)}`,m=(null===(s=t[r])||void 0===s?void 0:s.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;p.innerHTML=`${h}<br />${m}`;const b=(null===(n=t[r])||void 0===n?void 0:n.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${ei(t[r].location,25)}</a>`:`${ei(t[r].location,25)}`;c.insertCell().innerHTML=b;const v=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${ei(t[r].agency,30)}</a>`:`${ei(t[r].agency,30)}`;c.insertCell().innerHTML=v,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}ti.PLUGIN_NAME="Next Launches";const ii=new ti,ai=i.p+"../img/day-night.png";class si extends u.c{constructor(){super("Night Toggle"),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=ai}addJs(){super.addJs(),r.bD.register({event:r.RL.nightToggle,cbName:this.PLUGIN_NAME,cb:(e,t,i)=>{this.isMenuButtonEnabled?e.bindTexture(e.TEXTURE_2D,i):e.bindTexture(e.TEXTURE_2D,t)}})}}const ni=new si;var oi=i(8028),li=i(5704);class ri extends u.c{constructor(){super(ri.PLUGIN_NAME),this.doOnce=!1,this.isReferenceSatsActive=!1,this.dependencies=[oi.H.PLUGIN_NAME,li.P.PLUGIN_NAME]}addHtml(){super.addHtml(),r.bD.register({event:"selectSatData",cbName:"orbitReferences",cb:e=>{null!=e&&(this.doOnce||((0,o.G)("sat-info-top-links").insertAdjacentHTML("beforeend",r.bD.html`
                <div id="orbit-references-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,o.G)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0))}})}orbitReferencesLinkClick(){const e=r.bD.getCatalogManager(),t=e.getSat(e.selectedSat);let i=e.analSatSet[0].id+2e4,a="";const s=S.Sgp4.createSatrec(t.TLE1,t.TLE2),n=s.ecco.toFixed(7).substr(2,7),o=(s.nodeo*b.I3).toString(),l=(s.argpo*b.I3).toString(),c=t.TLE2.substr(8,8),d=t.TLE2.substr(52,10),u=t.TLE1.substr(18,2),p=t.TLE1.substr(20,12),g=t.TLE1.substr(9,8),h=lt.J.pad0(t.TLE1.substr(2,5).trim(),5),m=1440/parseFloat(d);let v=0;for(let s=0;s<360;s++){const r=lt.J.pad0(v.toFixed(4),8),{TLE1:b,TLE2:f}=Ot.L.createTle({sat:t,inc:c,meanmo:d,rasc:o,argPe:l,meana:r,ecen:n,epochyr:u,epochday:p,intl:g,scc:h});if(a+=e.insertNewAnalystSatellite(b,f,i+s,(1e5+s).toString()).sccNum.toString()+",",v+=360/m*4,v>=360)break}a=a.substr(0,a.length-1),r.bD.getUiManager().doSearch(a),this.isReferenceSatsActive=!0}}ri.PLUGIN_NAME="Orbit References";const ci=new ri,di=i.p+"../img/scatter-plot3.png";var ui=i(3845),pi=i(8120);i(2322);class gi extends u.c{constructor(){super(gi.PLUGIN_NAME),this.dependencies=[li.P.PLUGIN_NAME],this.bottomIconElementName="ecf-plots-bottom-icon",this.bottomIconLabel="ECF Plots",this.bottomIconImg=di,this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&this.createPlot(gi.getPlotData(),(0,o.G)(this.plotCanvasId))},this.plotCanvasId="plot-analysis-chart-ecf",this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="ECF Plots Menu",this.helpBody=r.bD.html`
  <p>
    The ECF Plots menu allows you to plot the position of a satellite in Earth Centered Fixed (ECF) coordinates.
    This is useful for visualizing the position of a satellite in space.
  </p>`,this.sideMenuElementName="ecf-plots-menu",this.sideMenuElementHtml=r.bD.html`
  <div id="ecf-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`,this.dragOptions={minWidth:500,maxWidth:1200}}addHtml(){super.addHtml(),r.bD.register({event:r.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e?this.setBottomIconToEnabled():this.setBottomIconToDisabled(),this.isMenuButtonEnabled&&(e?this.createPlot(gi.getPlotData(),(0,o.G)(this.plotCanvasId)):this.hideSideMenus())}})}createPlot(e,t){if(!this.isMenuButtonEnabled)return;this.chart&&pi.B9(this.chart),this.chart=pi.S1(t);const i=gi.updateAppObject_("X","Y","Z");this.chart.setOption({title:{text:"Earth Centered Fixed (ECF) Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{formatter:e=>{const t=e.value;return`\n            <div style="display: flex; flex-direction: column; align-items: flex-start;">\n              <div style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: flex-end;">\n                <div style="width: 10px; height: 10px; background-color: ${e.color}; border-radius: 50%; margin-bottom: 5px;"></div>\n                <div style="font-weight: bold;"> ${e.seriesName}</div>\n              </div>\n              <div>X: ${t[0].toFixed(2)} km</div>\n              <div>Y: ${t[1].toFixed(2)} km</div>\n              <div>Z: ${t[2].toFixed(2)} km</div>\n            </div>\n          `}},legend:{show:!0,textStyle:{color:"#fff"}},xAxis3D:{name:i.config.xAxis3D,type:"value"},yAxis3D:{name:i.config.yAxis3D,type:"value"},zAxis3D:{name:i.config.zAxis3D,type:"value"},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:5,distance:200,zoomSensitivity:2}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[i.config.xAxis3D,i.config.yAxis3D,i.config.zAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[i.fieldIndices[i.config.xAxis3D]],t[i.fieldIndices[i.config.yAxis3D]],t[i.fieldIndices[i.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})}static updateAppObject_(e,t,i){const a={config:{xAxis3D:e,yAxis3D:t,zAxis3D:i},fieldIndices:{},configParameters:{}},s=[{name:e,index:0},{name:t,index:1},{name:i,index:2}],n=s.reduce((function(e,t){return e[t.name]=t.index,e}),{});let o=s.map((e=>e.name));return o=o.slice(2,o.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{a.configParameters[e]={options:o}})),a.fieldIndices=n,a}static getPlotData(){const e=[],t=r.bD.getCatalogManager(),i=t.getSat(t.selectedSat);e.push({name:i.name,value:ui.c.getEcfOfCurrentOrbit(i,100).map((e=>[e.x,e.y,e.z]))});const a=t.secondarySatObj;a&&e.push({name:a.name,value:ui.c.getEcfOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))});const s=t.lastSelectedSat();if(-1!==s){const i=t.getSat(s);e.push({name:i.name,value:ui.c.getEcfOfCurrentOrbit(i,100).map((e=>[e.x,e.y,e.z]))})}return e}}gi.PLUGIN_NAME="ECF Plots";const hi=new gi,mi=i.p+"../img/scatter-plot2.png";class bi extends u.c{constructor(){super(bi.PLUGIN_NAME),this.dependencies=[li.P.PLUGIN_NAME],this.bottomIconElementName="eci-plots-bottom-icon",this.bottomIconLabel="ECI Plots",this.bottomIconImg=mi,this.bottomIconCallback=()=>{this.isMenuButtonEnabled&&this.createPlot(bi.getPlotData(),(0,o.G)(this.plotCanvasId))},this.plotCanvasId="plot-analysis-chart-eci",this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="ECI Plots Menu",this.helpBody=r.bD.html`
  <p>
    The ECI Plots menu allows you to plot the position of a satellite in Earth Centered Inertial (ECI) coordinates.
    This is useful for visualizing the position of a satellite in space.
  </p>`,this.sideMenuElementName="eci-plots-menu",this.sideMenuElementHtml=r.bD.html`
  <div id="eci-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`,this.dragOptions={minWidth:500,maxWidth:1200}}addHtml(){super.addHtml(),r.bD.register({event:r.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(e?this.setBottomIconToEnabled():this.setBottomIconToDisabled(),this.isMenuButtonEnabled)if(e){const e=(0,o.G)(this.plotCanvasId);this.createPlot(bi.getPlotData(),e)}else this.hideSideMenus()}})}createPlot(e,t){if(!this.isMenuButtonEnabled)return;this.chart&&pi.B9(this.chart),this.chart=pi.S1(t);const i=bi.updateAppObject_("X","Y","Z"),a=e.reduce(((e,t)=>{const i=t.value.reduce(((e,t)=>Math.min(e,t[0])),1/0),a=t.value.reduce(((e,t)=>Math.max(e,t[0])),-1/0),s=t.value.reduce(((e,t)=>Math.min(e,t[1])),1/0),n=t.value.reduce(((e,t)=>Math.max(e,t[1])),-1/0),o=t.value.reduce(((e,t)=>Math.min(e,t[2])),1/0),l=t.value.reduce(((e,t)=>Math.max(e,t[2])),-1/0),r=1e3*Math.round(Math.min(i,s,o)/1e3),c=1e3*Math.round(Math.max(a,n,l)/1e3),d=Math.max(c,Math.abs(r));return Math.max(e,d)}),0);this.chart.setOption({title:{text:"Earth Centered Inertial (ECI) Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{formatter:e=>{const t=e.value;return`\n            <div style="display: flex; flex-direction: column; align-items: flex-start;">\n              <div style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: flex-end;">\n                <div style="width: 10px; height: 10px; background-color: ${e.color}; border-radius: 50%; margin-bottom: 5px;"></div>\n                <div style="font-weight: bold;"> ${e.seriesName}</div>\n              </div>\n              <div>X: ${t[0].toFixed(2)} km</div>\n              <div>Y: ${t[1].toFixed(2)} km</div>\n              <div>Z: ${t[2].toFixed(2)} km</div>\n            </div>\n          `}},legend:{show:!0,textStyle:{color:"#fff"}},xAxis3D:{name:i.config.xAxis3D,type:"value",min:-a,max:a},yAxis3D:{name:i.config.yAxis3D,type:"value",min:-a,max:a},zAxis3D:{name:i.config.zAxis3D,type:"value",min:-a,max:a},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:[5,15],zoomSensitivity:2}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[i.config.xAxis3D,i.config.yAxis3D,i.config.zAxis3D],data:e.value.map(((t,a)=>({itemStyle:{opacity:1-a/e.value.length},value:[t[i.fieldIndices[i.config.xAxis3D]],t[i.fieldIndices[i.config.yAxis3D]],t[i.fieldIndices[i.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})}static updateAppObject_(e,t,i){const a={config:{xAxis3D:e,yAxis3D:t,zAxis3D:i},fieldIndices:{},configParameters:{}},s=[{name:e,index:0},{name:t,index:1},{name:i,index:2}],n=s.reduce((function(e,t){return e[t.name]=t.index,e}),{});let o=s.map((e=>e.name));return o=o.slice(2,o.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{a.configParameters[e]={options:o}})),a.fieldIndices=n,a}static getPlotData(){const e=[],t=r.bD.getCatalogManager(),i=t.getSat(t.selectedSat);e.push({name:i.name,value:ui.c.getEciOfCurrentOrbit(i,100).map((e=>[e.x,e.y,e.z]))});const a=t.secondarySatObj;a&&e.push({name:a.name,value:ui.c.getEciOfCurrentOrbit(a,100).map((e=>[e.x,e.y,e.z]))});const s=t.lastSelectedSat();if(-1!==s){const i=t.getSat(s);e.push({name:i.name,value:ui.c.getEciOfCurrentOrbit(i,100).map((e=>[e.x,e.y,e.z]))})}return e}}bi.PLUGIN_NAME="ECI Plots";const vi=new bi,fi=i.p+"../img/scatter-plot.png";var Si=i(6349);class Mi extends u.c{constructor(){super(Mi.PLUGIN_NAME),this.dependencies=[li.P.PLUGIN_NAME],this.bottomIconElementName="inc2alt-plots-bottom-icon",this.bottomIconLabel="Inc vs Alt Plot",this.bottomIconImg=fi,this.bottomIconCallback=()=>{const e=(0,o.G)(this.plotCanvasId);this.createPlot(Mi.getPlotData(),e)},this.plotCanvasId="plot-analysis-chart-inc2alt",this.helpTitle="Inc vs Alt Plot Menu",this.helpBody=r.bD.html`
  <p>
  The Inc vs Alt Plot Menu is used for plotting the inclination vs altitude.
  </p>`,this.sideMenuElementName="inc2alt-plots-menu",this.sideMenuElementHtml=r.bD.html`
  <div id="inc2alt-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`}addHtml(){super.addHtml()}createPlot(e,t){this.isMenuButtonEnabled&&(this.chart||(this.chart=pi.S1(t),this.chart.on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&r.bD.getCatalogManager().selectSat(e.data.id)}))),this.chart.setOption({title:{text:"Inclination vs Altitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis:{name:"Inclination",type:"value",position:"bottom"},yAxis:{name:"Altitude",type:"value",position:"left"},zAxis:{name:"Period",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:65},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:65}],visualMap:[{left:"left",top:"10%",dimension:2,min:80,max:250,itemWidth:30,itemHeight:500,calculable:!0,precision:.05,text:["Period (min)"],textGap:30,textStyle:{color:"#fff"},inRange:{},outOfRange:{opacity:0,symbol:"none"},controller:{inRange:{color:["#41577c"]},outOfRange:{color:["#999"]}}}],series:e.map((e=>({type:"scatter",name:e.name,data:e.value.map((e=>({name:e[3],id:e[4],value:[e[1],e[0],e[2]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}))}static getPlotData(){const e=r.bD.getCatalogManager().satData,t=[],i=[],a=[],s=[];return e.forEach((e=>{if(!e.TLE1||e.type!==S.SpaceObjectType.PAYLOAD)return;if(e.period>250)return;e=r.bD.getCatalogManager().getSat(e.id,Oe.C_.POSITION_ONLY);const n=r.bD.getTimeManager().simulationTimeObj;let o=(0,Si.J0)(n.getUTCFullYear(),n.getUTCMonth()+1,n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds());o+=n.getUTCMilliseconds()*b.c1;const l=S.Sgp4.gstime(o);if(e=Object.assign(Object.assign({},e),S.Transforms.eci2lla(e.position,l)),!(f.$.getAlt(e.position,l)<80))switch(e.country){case"United States of America":case"United States":case"US":return void i.push([f.$.getAlt(e.position,l),e.inclination*b.I3,e.period,e.name,e.id]);case"Russian Federation":case"CIS":case"RU":case"SU":case"Russia":return void a.push([f.$.getAlt(e.position,l),e.inclination*b.I3,e.period,e.name,e.id]);case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":case"PRC":case"CN":return void t.push([f.$.getAlt(e.position,l),e.inclination*b.I3,e.period,e.name,e.id]);default:return void s.push([f.$.getAlt(e.position,l),e.inclination*b.I3,e.period,e.name,e.id])}})),[{name:"USA",value:i},{name:"Other",value:s},{name:"Russia",value:a},{name:"China",value:t}]}}Mi.PLUGIN_NAME="Time vs Lon Plots";const yi=new Mi;class wi extends u.c{constructor(){super(wi.PLUGIN_NAME),this.dependencies=[li.P.PLUGIN_NAME],this.bottomIconElementName="inc2lon-plots-bottom-icon",this.bottomIconLabel="Inc Vs Lon Plot",this.bottomIconImg=fi,this.bottomIconCallback=()=>{const e=(0,o.G)(this.plotCanvasId);this.createPlot(wi.getPlotData(),e)},this.plotCanvasId="plot-analysis-chart-inc2lon",this.helpTitle="Inc Vs Lon Plot Menu",this.helpBody=r.bD.html`
  <p>
    The Inc Vs Lon Plot Menu is used for plotting the inclination vs longitude in the GEO belt.
  </p>`,this.sideMenuElementName="inc2lon-plots-menu",this.sideMenuElementHtml=r.bD.html`
  <div id="inc2lon-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`}addHtml(){super.addHtml()}createPlot(e,t){this.isMenuButtonEnabled&&(this.chart||(this.chart=pi.S1(t),this.chart.on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&r.bD.getCatalogManager().selectSat(e.data.id)}))),this.chart.setOption({title:{text:"Inclination vs Longitude Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},legend:{show:!0,textStyle:{color:"#fff"}},tooltip:{},xAxis:{name:"Longitude",type:"value",position:"bottom"},yAxis:{name:"Inclination",type:"value",position:"left"},zAxis:{name:"Period",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:65},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:65}],visualMap:[{left:"left",top:"10%",dimension:2,min:1240,max:1640,itemWidth:30,itemHeight:500,calculable:!0,precision:.05,text:["Period (minutes)"],textGap:30,textStyle:{color:"#fff"},inRange:{},outOfRange:{opacity:0,symbol:"none"},controller:{inRange:{color:["#41577c"]},outOfRange:{color:["#999"]}}}],series:e.map((e=>({type:"scatter",name:e.name,data:e.value.map((e=>({name:e[3],id:e[4],value:[e[1],e[0],e[2]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))}))}static getPlotData(){const e=[],t=[],i=[],a=[];return r.bD.getCatalogManager().satData.forEach((s=>{if(s.TLE1&&s.type===S.SpaceObjectType.PAYLOAD&&!(s.eccentricity>.1||s.period<1240||s.period>1640||s.inclination*b.I3>17))switch(s=r.bD.getCatalogManager().getSat(s.id,Oe.C_.POSITION_ONLY),(s=Object.assign(Object.assign({},s),dt.x.eci2lla(s.position,r.bD.getTimeManager().simulationTimeObj))).country){case"United States of America":case"United States":case"US":return void t.push([s.inclination*b.I3,s.lon,s.period,s.name,s.id]);case"Russian Federation":case"CIS":case"Russia":return void i.push([s.inclination*b.I3,s.lon,s.period,s.name,s.id]);case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":return void e.push([s.inclination*b.I3,s.lon,s.period,s.name,s.id]);default:return void a.push([s.inclination*b.I3,s.lon,s.period,s.name,s.id])}})),[{name:"USA",value:t},{name:"Other",value:a},{name:"Russia",value:i},{name:"China",value:e}]}}wi.PLUGIN_NAME="Inc Vs Lon Plots";const Ci=new wi,Li=i.p+"../img/scatter-plot4.png";class xi extends u.c{constructor(){super(xi.PLUGIN_NAME),this.dependencies=[li.P.PLUGIN_NAME],this.bottomIconElementName="ric-plots-bottom-icon",this.bottomIconLabel="RIC Plot",this.bottomIconImg=Li,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{-1!==r.bD.getCatalogManager().selectedSat?r.bD.getCatalogManager().secondarySatObj?this.isMenuButtonEnabled&&this.createPlot(xi.getPlotData(),(0,o.G)(this.plotCanvasId)):r.bD.getUiManager().toast("Select a Secondary Satellite First!","critical"):r.bD.getUiManager().toast("Select a Satellite First!","critical")},this.plotCanvasId="plot-analysis-chart-ric",this.helpTitle="RIC Plot Menu",this.helpBody=r.bD.html`
  <p>
  The RIC Plot Menu is used for plotting the RIC position of a satellite over time.
  </p>`,this.sideMenuElementName="ric-plots-menu",this.sideMenuElementHtml=r.bD.html`
  <div id="ric-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`}addHtml(){super.addHtml(),r.bD.register({event:r.RL.setSecondarySat,cbName:this.PLUGIN_NAME,cb:e=>{e&&-1!==r.bD.getCatalogManager().selectedSat?this.setBottomIconToEnabled():(this.isMenuButtonEnabled&&this.hideSideMenus(),this.setBottomIconToDisabled())}}),r.bD.register({event:r.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e&&-1!==r.bD.getCatalogManager().secondarySat?this.setBottomIconToEnabled():(this.isMenuButtonEnabled&&this.hideSideMenus(),this.setBottomIconToDisabled())}})}createPlot(e,t){if(!this.isMenuButtonEnabled)return;this.chart&&pi.B9(this.chart),this.chart=pi.S1(t);const i="Radial",a="In-Track",s="Cross-Track",n=xi.updateAppObject_(i,a,s);this.chart.setOption({title:{text:"RIC Scatter Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{formatter:e=>{const t=e.value;return`\n            <div style="display: flex; flex-direction: column; align-items: flex-start;">\n              <div style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: flex-end;">\n                <div style="width: 10px; height: 10px; background-color: ${e.color}; border-radius: 50%; margin-bottom: 5px;"></div>\n                <div style="font-weight: bold;"> ${e.seriesName}</div>\n              </div>\n              <div>${i}: ${t[0].toFixed(2)} km</div>\n              <div>${a}: ${t[1].toFixed(2)} km</div>\n              <div>${s}: ${t[2].toFixed(2)} km</div>\n            </div>\n          `}},legend:{show:!0,textStyle:{color:"#fff"}},xAxis3D:{name:n.config.xAxis3D,type:"value"},yAxis3D:{name:n.config.yAxis3D,type:"value"},zAxis3D:{name:n.config.zAxis3D,type:"value"},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#ffbd67"}},viewControl:{rotateSensitivity:10,distance:600,zoomSensitivity:5}},series:e.map((e=>({type:"scatter3D",name:e.name,dimensions:[n.config.xAxis3D,n.config.yAxis3D,n.config.zAxis3D],data:e.value.map(((t,i)=>({itemStyle:{opacity:1-i/e.value.length},value:[t[n.fieldIndices[n.config.xAxis3D]],t[n.fieldIndices[n.config.yAxis3D]],t[n.fieldIndices[n.config.zAxis3D]]]}))),symbolSize:12,itemStyle:{borderWidth:1,borderColor:"rgba(255,255,255,0.8)"},emphasis:{itemStyle:{color:"#fff"}}})))})}static updateAppObject_(e,t,i){const a={config:{xAxis3D:e,yAxis3D:t,zAxis3D:i},fieldIndices:{},configParameters:{}},s=[{name:e,index:0},{name:t,index:1},{name:i,index:2}],n=s.reduce((function(e,t){return e[t.name]=t.index,e}),{});let o=s.map((e=>e.name));return o=o.slice(2,o.length-2),["xAxis3D","yAxis3D","zAxis3D","color","symbolSize"].forEach((e=>{a.configParameters[e]={options:o}})),a.fieldIndices=n,a}static getPlotData(){const e=[],t=r.bD.getCatalogManager();if(-1===t.selectedSat||-1===t.secondarySat)return[];const i=t.getSat(t.selectedSat),a=t.secondarySatObj;return e.push({name:i.name,value:[[0,0,0]]}),e.push({name:a.name,value:ui.c.getRicOfCurrentOrbit(a,i,100,1).map((e=>[e.x,e.y,e.z]))}),e}}xi.PLUGIN_NAME="RIC Plot";const Di=new xi,Ei=i.p+"../img/line-plot.png";class Ti extends u.c{constructor(){super(Ti.PLUGIN_NAME),this.dependencies=[li.P.PLUGIN_NAME],this.bottomIconElementName="time2lon-plots-bottom-icon",this.bottomIconLabel="Time vs Lon Plot",this.bottomIconImg=Ei,this.bottomIconCallback=()=>{const e=(0,o.G)(this.plotCanvasId);this.createPlot(Ti.getPlotData(),e)},this.plotCanvasId="plot-analysis-chart-time2lon",this.helpTitle="Time Vs Lon Plot Menu",this.helpBody=r.bD.html`
  <p>
    The Time vs Lon Plot Menu is used for plotting the time vs longitude in the GEO belt.
  </p>`,this.sideMenuElementName="time2lon-plots-menu",this.sideMenuElementHtml=r.bD.html`
  <div id="time2lon-plots-menu" class="side-menu-parent start-hidden text-select plot-analysis-menu-normal plot-analysis-menu-maximized">
    <div id="plot-analysis-content" class="side-menu">
      <div id="${this.plotCanvasId}" class="plot-analysis-chart plot-analysis-menu-maximized"></div>
    </div>
  </div>`}addHtml(){super.addHtml()}createPlot(e,t){this.isMenuButtonEnabled&&(this.chart||(this.chart=pi.S1(t),this.chart.on("click",(e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.id)&&r.bD.getCatalogManager().selectSat(e.data.id)}))),this.chart.setOption({title:{text:"Time vs Longitude Plot",textStyle:{fontSize:16,color:"#fff"}},tooltip:{},xAxis:{name:"Longitude",type:"value",position:"bottom"},yAxis:{name:"Time",type:"value",position:"left"},zAxis:{name:"Mean Motion",type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:-180,end:180},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:1440},{type:"inside",xAxisIndex:[0],start:-180,end:180},{type:"inside",yAxisIndex:[0],start:0,end:1440}],series:e.map((e=>({type:"line",name:e.name,data:e.data.map((t=>({name:e.country,id:e.satId,value:[t[1],t[0]]}))),emphasis:{itemStyle:{color:"#fff"}}})))}))}static getPlotData(){const e=r.bD.getCatalogManager().satData,t=r.bD.getTimeManager().simulationTimeObj.getTime(),i=[];return e.forEach((e=>{if(!e.TLE1||e.type!==S.SpaceObjectType.PAYLOAD)return;if(e.eccentricity>.1)return;if(e.period<1240)return;if(e.period>1640)return;switch(e.country){case"United States of America":case"United States":case"US":case"Russian Federation":case"CIS":case"Russia":case"China":case"China, People's Republic of":case"Hong Kong Special Administrative Region, China":case"China (Republic)":break;default:return}e=r.bD.getCatalogManager().getSat(e.id,Oe.C_.POSITION_ONLY);const a=ui.c.getLlaOfCurrentOrbit(e,24),s=[];a.forEach((e=>{const i=(e.time-t)/1e3/60;i>1440||i<0||s.push([i,e.lon*b.I3])})),i.push({name:e.name,satId:e.id,country:e.country,data:s})})),i}}Ti.PLUGIN_NAME="Time vs Lon Plots";const ki=new Ti,Ai=i.p+"../img/satchng.png";var Ii=i(6393),Ni=i(7727);class Gi extends u.c{constructor(){super(Gi.PLUGIN_NAME),this.bottomIconImg=Ai,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=r.bD.html`
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
  </div>`,this.helpTitle="Constellations Menu",this.helpBody=r.bD.html`The Constellations menu allows you to view groups of satellites.
  <br><br>
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),r.bD.register({event:"uiManagerFinal",cbName:"constellations",cb:()=>{(0,o.G)("constellation-menu").querySelectorAll("li").forEach((e=>{e.addEventListener("click",(function(e){Gi.constellationMenuClick(e.target.dataset.group)}))}))}})}static constellationMenuClick(e){const t=r.bD.getTimeManager(),i=r.bD.getCatalogManager(),a=r.bD.getGroupsManager();if(void 0!==a){switch(e){case"SpaceStations":a.groupList[e]||a.createGroup(c.Y.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":a.groupList[e]||a.createGroup(c.Y.NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":a.groupList[e]||a.createGroup(c.Y.NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":a.groupList[e]||a.createGroup(c.Y.NAME_REGEX,/NAVSTAR/u,e);break;case"AmatuerRadio":a.groupList[e]||a.createGroup(c.Y.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":a.groupList[e]||a.createGroup(c.Y.SCC_NUM,i.id2satnum(i.satLinkManager.aehf),e),(0,V.QP)((()=>{Ni.Bz.clear(),i.satLinkManager.showLinks(Ni.Bz,Ii.W6.Aehf,t)}));break;case"wgs":a.groupList[e]||a.createGroup(c.Y.SCC_NUM,i.id2satnum(i.satLinkManager.wgs.concat(i.satLinkManager.dscs)),e),(0,V.QP)((()=>{Ni.Bz.clear(),i.satLinkManager.showLinks(Ni.Bz,Ii.W6.Wgs,t)}));break;case"starlink":a.groupList[e]||a.createGroup(c.Y.NAME_REGEX,/STARLINK/u,e),(0,V.QP)((()=>{Ni.Bz.clear(),i.satLinkManager.showLinks(Ni.Bz,Ii.W6.Starlink,t)}));break;case"sbirs":a.groupList[e]||a.createGroup(c.Y.SCC_NUM,i.id2satnum(i.satLinkManager.sbirs),e),(0,V.QP)((()=>{Ni.Bz.clear(),i.satLinkManager.showLinks(Ni.Bz,Ii.W6.Sbirs,t)}));break;default:throw new Error("Unknown group name: "+e)}Gi.groupSelected(e)}}static groupSelected(e){if(void 0===e)return;const t=r.bD.getCatalogManager(),i=r.bD.getGroupsManager();if(void 0===i.groupList[e])throw new Error("Unknown group name: "+e);const a=(0,o.G)("search");i.selectGroup(i.groupList[e]),a.innerHTML=i.groupList[e].objects.reduce(((e,i)=>`${e}${t.getSat(i).sccNum},`),"").slice(0,-1),t.setSelectedSat(-1);const s=r.bD.getUiManager();s.searchManager.doSearch(i.groupList[e].objects.map((e=>t.getSat(e).sccNum)).join(",")),settingsManager.isMobileModeEnabled&&s.searchManager.searchToggle(!0),s.hideSideMenus()}}Gi.PLUGIN_NAME="Sat Constellations";const Pi=new Gi,Oi=i.p+"../img/sat2.png";class Ri extends u.c{constructor(){super("Satellite Field of View"),this.bottomIconCallback=()=>{this.isMenuButtonEnabled?(this.enableFovView_(),settingsManager.isSatOverflyModeOn=!0):(this.disableFovView_(),settingsManager.isSatOverflyModeOn=!1)},this.isRequireSatelliteSelected=!0,this.bottomIconElementName="menu-sat-fov",this.bottomIconLabel="Satellite FOV",this.bottomIconImg=Oi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0}addJs(){super.addJs(),r.bD.register({event:r.RL.changeSensorMarkers,cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,o.G)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}})}disableFovView_(){const e=r.bD.getCatalogManager();settingsManager.isSatOverflyModeOn=!1,this.setBottomIconToUnselected(),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}static getSatFieldOfView_(){const e=(0,o.G)("satFieldOfView",!0);if(!e)return 30;if(""===e.value)return v.x.warn("No Satellite FOV value entered. Using default value of 30 degrees."),30;const t=parseFloat(e.value);return isNaN(t)||t<0||t>180?(v.x.warn("Invalid Satellite FOV value. Using default value of 30 degrees."),30):t}enableFovView_(){const e=r.bD.getCatalogManager(),t=r.bD.getUiManager(),i=r.bD.getColorSchemeManager();r.bD.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isShowSurvFence=!1,settingsManager.isFOVBubbleModeOn=!1,settingsManager.isSatOverflyModeOn=!0,this.setBottomIconToSelected(),""!==(0,o.G)("search").value&&t.doSearch((0,o.G)("search").value);const a=Ri.getSatFieldOfView_();e.satCruncher.postMessage({isShowFOVBubble:"reset",isShowSurvFence:"disable"}),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"enable",selectedSatFOV:a}),i.setColorScheme(settingsManager.currentColorScheme,!0)}}const _i=new Ri,Fi=i.p+"../img/photoManager.png";class Ui extends u.c{constructor(){super(Ui.PLUGIN_NAME),this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="SatellitePhotos",this.bottomIconImg=Fi,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=r.bD.html`
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
  </div>`,this.helpTitle="Satellite Photos Menu",this.helpBody=r.bD.html`The Satellite Photos Menu is used for displaying live photos from select satellites.
  <br><br>
  Note - changes in the image API may cause the wrong satellite to be selected in KeepTrack.`}addJs(){super.addJs(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)("meteosat8-link").addEventListener("click",(()=>{Ui.loadPic(10489,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")})),(0,o.G)("meteosat11-link").addEventListener("click",(()=>{Ui.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")})),(0,o.G)("himawari8-link").addEventListener("click",(()=>{Ui.himawari8()})),(0,o.G)("discovr-link").addEventListener("click",(()=>{Ui.discovr()})),(0,o.G)("goes1-link").addEventListener("click",(()=>{Ui.loadPic(8366,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")}))}})}static discovr(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{Ui.dscovrLoaded(e)},e.onerror=function(){console.debug("https://epic.gsfc.nasa.gov/ request failed!")},r.bD.getCatalogManager().selectSat(-1),e.send()}static dscovrLoaded(e){if(e.status>=200&&e.status<400){const t=JSON.parse(e.response),i=t[0].image,a=t[0].identifier,s=a.slice(0,4),n=a.slice(4,6),o=a.slice(6,8),l=a.slice(8,10),c=a.slice(10,12),d=a.slice(12,14),u=new Date(Date.UTC(s,n-1,o,l-4,c,d));r.bD.getMainCamera().camSnap((0,Si.Lx)(t[0].centroid_coordinates.lat),(0,Si.Zs)(t[0].centroid_coordinates.lon,u)),r.bD.getMainCamera().changeZoom(.7),Ui.colorbox(`https://epic.gsfc.nasa.gov/archive/natural/${s}/${n}/${o}/png/${i}.png`)}}static loadPic(e,t){r.bD.getCatalogManager().selectSat(r.bD.getCatalogManager().getSatFromObjNum(e).id),r.bD.getMainCamera().changeZoom(.7),Ui.colorbox(t)}static himawari8(){r.bD.getCatalogManager().selectSat(r.bD.getCatalogManager().getSatFromObjNum(40267).id),r.bD.getMainCamera().changeZoom(.7);let e=r.bD.getTimeManager().simulationTimeObj;e.getTime()<Date.now()?e=new Date(e.getTime()-18e5):(r.bD.getUiManager().toast("Can't load pictures from the future. Loading most recent photos.","caution"),e=new Date(Date.now()-18e5));const t=e.getUTCFullYear(),i=(e.getUTCMonth()+1).toString().padStart(2,"0"),a=e.getUTCDate().toString().padStart(2,"0"),s=e.getUTCHours().toString().padStart(2,"0"),n=(10*Math.floor(e.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,Vt.Us)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${t}/${i}/${a}/${s}${n}00_0_0.png`,{image:!0})}}Ui.PLUGIN_NAME="Satellite Photos",Ui.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout((function(){settingsManager.isPreventColorboxClose=!1}),2e3),(0,Vt.Us)(e,{image:!0})};const Bi=new Ui,zi=i.p+"../img/video.png";class $i{constructor(e,t,i,a){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=i,this.onError_=a}static handleError(e){e.message.includes("Permission denied")?v.x.warn('Permission denied! Did you click "Share"?'):v.x.warn("Error:"+e)}getStream(e){return t=this,i=void 0,s=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch((e=>($i.handleError(e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch((e=>($i.handleError(e),null))):(v.x.warn("Compatibility Error with Recording"),this.onError_(),!1):(v.x.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((a=void 0)||(a=Promise))((function(e,n){function o(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(o,l)}r((s=s.apply(t,i||[])).next())}));var t,i,a,s}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(v.x.debug("Recorder stopped."),this.stream_.getTracks().forEach((e=>e.stop())),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,i=new Blob(this.recordedBlobs,{type:this.supportedType}),a=window.URL.createObjectURL(i),s=document.createElement("a");s.style.display="none",s.href=a,s.download=t,document.body.appendChild(s),s.click(),setTimeout((()=>{document.body.removeChild(s),window.URL.revokeObjectURL(a)}),100)}start(){this.getStream().then((e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;let t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(let e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&v.x.debug("No supported type found for MediaRecorder");let i={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||$i.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,i)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}v.x.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${i}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),v.x.debug(`Created MediaRecorder ${this.mediaRecorder_}`)})).catch((()=>{}))}}$i.BIT_RATE_30_MBPS=3e7,$i.BIT_RATE_20_MBPS=2e7,$i.BIT_RATE_10_MBPS=1e7,$i.BIT_RATE_5_MBPS=5e6,$i.BIT_RATE_2_MBPS=2e6,$i.BIT_RATE_1_MBPS=1e6;class Hi extends u.c{constructor(){super("Screen Recorder"),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return v.x.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){v.x.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=zi,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),r.bD.register({event:r.RL.uiManagerOnReady,cbName:this.PLUGIN_NAME,cb:()=>{try{this.streamManagerInstance=new $i(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save(Hi.FILE_NAME),this.setBottomIconToUnselected()}}Hi.FILE_NAME="keeptrack.webm";const ji=new Hi,Vi=i.p+"../img/camera.png";class Ki extends u.c{constructor(){super("Screenshot"),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=Vi,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.rmbL1ElementName="save-rmb",this.rmbL1Html=r.bD.html`
    <li class="rmb-menu-item" id=${this.rmbL1ElementName}><a href="#">Save Image &#x27A4;</a></li>
  `,this.isRmbOnEarth=!0,this.isRmbOffEarth=!0,this.isRmbOnSat=!0,this.rmbL2ElementName="save-rmb-menu",this.rmbL2Html=r.bD.html`
    <ul class='dropdown-contents'>
      <li id="save-hd-rmb"><a href="#">HD (1920 x 1080)</a></li>
      <li id="save-4k-rmb"><a href="#">4K (3840 x 2160)</a></li>
      <li id="save-8k-rmb"><a href="#">8K (7680 x 4320)</a></li>
    </ul>
  `,this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),r.bD.register({event:r.RL.altCanvasResize,cbName:this.PLUGIN_NAME,cb:()=>this.queuedScreenshot_}),r.bD.register({event:r.RL.endOfDraw,cbName:this.PLUGIN_NAME,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){let e=document.createElement("a");e.download="keeptrack.png";let t=(new Date).getUTCFullYear(),i=settingsManager.copyrightOveride?"":`©${t} KEEPTRACK.SPACE`;e.href=Ki.watermarkedDataUrl(i),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=r.bD.getRenderer().domElement,i=document.createElement("canvas"),a=i.getContext("2d");let s=i.width=t.width,n=i.height=t.height;a.drawImage(t,0,0),a.font="24px nasalization";let o=a.measureText(e).width;a.globalAlpha=1,a.fillStyle="white",a.fillText(e,s-o-30,n-30);const{classificationstr:l,classificationColor:c}=Ki.calculateClassificationText();""!==l&&(a.font="24px nasalization",a.globalAlpha=1,a.fillStyle=c,o=a.measureText(l).width,a.fillText(l,s/2-o,n-20),a.fillText(l,s/2-o,34)),document.body.appendChild(i);let d=i.toDataURL();return i.parentNode.removeChild(i),d}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:gt.getColors(settingsManager.classificationStr).backgroundColor}}}const Wi=new Ki,Yi=i.p+"../img/fov.png";class Ji extends u.c{constructor(){super("Sensor Field of View"),this.bottomIconCallback=()=>{this.verifySensorSelected()&&(settingsManager.isFOVBubbleModeOn&&!settingsManager.isShowSurvFence?this.disableFovView_():settingsManager.isFOVBubbleModeOn||this.enableFovView())},this.bottomIconElementName="menu-sensor-fov",this.bottomIconLabel="Sensor FOV",this.bottomIconImg=Yi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0}addJs(){super.addJs(),r.bD.register({event:r.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,o.G)(this.bottomIconElementName).classList.remove(u.c.iconDisabledClassString),this.isIconDisabled=!1):((0,o.G)(this.bottomIconElementName).classList.add(u.c.iconDisabledClassString),this.isIconDisabled=!0,this.isMenuButtonEnabled=!1,(0,o.G)(this.bottomIconElementName).classList.remove(u.c.iconSelectedClassString))}}),r.bD.register({event:r.RL.changeSensorMarkers,cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,o.G)(this.bottomIconElementName).classList.remove(u.c.iconSelectedClassString)}})}disableFovView_(){settingsManager.isFOVBubbleModeOn=!1,this.setBottomIconToUnselected(),r.bD.getCatalogManager().satCruncher.postMessage({isShowFOVBubble:"reset",isShowSurvFence:"disable"})}enableFovView(){r.bD.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isFOVBubbleModeOn=!0,settingsManager.isSatOverflyModeOn=!1,settingsManager.isShowSurvFence=!1,this.setBottomIconToSelected(),r.bD.getCatalogManager().satCruncher.postMessage({isShowFOVBubble:"enable",isShowSurvFence:"disable"}),r.bD.getCatalogManager().satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}}const Xi=new Ji,Zi=i.p+"../img/fence.png";class qi extends u.c{constructor(){super(qi.PLUGIN_NAME),this.bottomIconCallback=()=>{const e=r.bD.getCatalogManager();settingsManager.isShowSurvFence?this.disableSurvView_(e):this.enableSurvView_(e)},this.bottomIconElementName="menu-sensor-surv-fence",this.bottomIconLabel="Sensor Fence",this.bottomIconImg=Zi,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.isRequireSensorSelected=!0,settingsManager.isShowSurvFence=!1}disableSurvView_(e){settingsManager.isShowSurvFence=!1,(0,o.G)(this.bottomIconElementName).classList.remove(u.c.iconSelectedClassString),e.satCruncher.postMessage({isShowSurvFence:"disable",isShowFOVBubble:"reset"})}enableSurvView_(e){r.bD.methods.changeSensorMarkers(this.PLUGIN_NAME),settingsManager.isShowSurvFence=!0,settingsManager.isSatOverflyModeOn=!1,(0,o.G)(this.bottomIconElementName).classList.add(u.c.iconSelectedClassString),e.satCruncher.postMessage({isShowFOVBubble:"enable",isShowSurvFence:"enable"}),e.satCruncher.postMessage({typ:"isShowSatOverfly",isShowSatOverfly:"reset"})}addJs(){super.addJs(),r.bD.register({event:r.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,o.G)(this.bottomIconElementName).classList.remove(u.c.iconDisabledClassString),this.isIconDisabled=!1):((0,o.G)(this.bottomIconElementName).classList.add(u.c.iconDisabledClassString),this.isIconDisabled=!0,this.isMenuButtonEnabled=!1,(0,o.G)(this.bottomIconElementName).classList.remove(u.c.iconSelectedClassString))}}),r.bD.register({event:r.RL.changeSensorMarkers,cbName:this.PLUGIN_NAME,cb:e=>{e!==this.PLUGIN_NAME&&(0,o.G)(this.bottomIconElementName).classList.remove(u.c.iconSelectedClassString)}})}}qi.PLUGIN_NAME="Sensor Surveillance Fence";const Qi=new qi,ea=i.p+"../img/custom.png";var ta=i(3023);class ia{static updateSensorPosition(e){const t=r.bD.getTimeManager(),i=r.bD.getCatalogManager(),a=r.bD.getSensorManager(),{lon:s,lat:n,alt:o,minaz:l,maxaz:c,minel:d,maxel:u,minrange:p,maxrange:g}=ia.updateSettingsManager(e);a.whichRadar="CUSTOM",ia.updateCustomSensorUi_();const h={lat:n,lon:s,alt:o,obsminaz:l,obsmaxaz:c,obsminel:d,obsmaxel:u,obsminrange:p,obsmaxrange:g};i.satCruncher.postMessage({typ:"sensor",setlatlong:!0,sensor:h}),ta.E.updateSensorUiStyling([h]),i.setSelectedSat(-1);const m=r.bD.getMainCamera();g>6e3?m.changeZoom(pe.$R.GEO):m.changeZoom(pe.$R.LEO),m.camSnap((0,Si.Lx)(n),(0,Si.Zs)(s,t.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(ia.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,o.G)("cs-lat"),t=(0,o.G)("cs-lon"),i=(0,o.G)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),i.value=settingsManager.geolocation.alt.toString(),i.dispatchEvent(new Event("change")),(0,o.G)("cs-telescope").checked=!0,(0,o.G)("cs-minaz").disabled=!0,(0,o.G)("cs-maxaz").disabled=!0,(0,o.G)("cs-minel").disabled=!0,(0,o.G)("cs-maxel").disabled=!0,(0,o.G)("cs-minrange").disabled=!0,(0,o.G)("cs-maxrange").disabled=!0,(0,o.G)("cs-minaz-div").style.display="none",(0,o.G)("cs-maxaz-div").style.display="none",(0,o.G)("cs-minel-div").style.display="none",(0,o.G)("cs-maxel-div").style.display="none",(0,o.G)("cs-minrange-div").style.display="none",(0,o.G)("cs-maxrange-div").style.display="none",(0,o.G)("cs-minaz").value="0",(0,o.G)("cs-maxaz").value="360",(0,o.G)("cs-minel").value="10",(0,o.G)("cs-maxel").value="90",(0,o.G)("cs-minrange").value="100",(0,o.G)("cs-maxrange").value="50000",(0,o.G)("sensor-type").innerHTML="Telescope",(0,o.G)("sensor-info-title").innerHTML="Custom Sensor",(0,o.G)("sensor-country").innerHTML="Custom Sensor"}catch(e){v.x.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const aa=i.p+"../img/multi-site.png";class sa extends u.c{constructor(){super(sa.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!1,this.bottomIconCallback=()=>{this.refreshSideMenuData()},this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=aa,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=r.bD.html`
    The Multi-Site Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a satellite and multiple sensors.
    A satellite must first be selected before the menu can be used.
    <br><br>
    By default the menu will calculate the look angles for all sensors in the Space Surveillance Netowrk.
    If you would like to calculate the look angles for additional sensors, you can export a csv file at the bottom of the menu.
    The csv file will contain look angles for all sensors.
    <br><br>
    Clicking on a row in the table will select the sensor and change the simulation time to the time of the look angle.`,this.sideMenuElementName="multi-site-look-angles-menu",this.sideMenuElementHtml=r.bD.html`
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
    </div>`,this.disabledSensors=[],this.lookanglesLength=1,this.lookanglesInterval=30}addHtml(){super.addHtml(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,o.G)("multi-site-look-angles-export"))||void 0===e||e.addEventListener("click",(()=>{const e=r.bD.getSensorManager().lastMultiSiteArray.map((e=>({time:e.time,sensor:e.objName,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)})));(0,Ve.Eb)(e,"multiSiteLooks")}))}}),r.bD.register({event:r.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(!(!this.isMenuButtonEnabled||(null==e?void 0:e.TLE1)&&r.bD.getSensorManager().isSensorSelected()))return this.setBottomIconToDisabled(),void this.closeSideMenu();this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&this.refreshSideMenuData()}})}addJs(){super.addJs(),r.bD.register({event:r.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData()}})}refreshSideMenuData(){if(this.isMenuButtonEnabled){const e=r.bD.getCatalogManager().getSat(r.bD.getCatalogManager().selectedSat,Oe.C_.EXTRA_ONLY);e&&(0,V.QP)((()=>{const t=(0,o.G)("multi-site-look-angles-sensor-list");t.innerHTML="";const i=[];for(const a of r.bD.getSensorManager().sensorListUS){const s=document.createElement("button");s.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors.includes(a)&&s.classList.add("btn-red"),i.push(a),s.innerText=a.shortName,s.addEventListener("click",(()=>{s.classList.contains("btn-red")?(s.classList.remove("btn-red"),this.disabledSensors.splice(this.disabledSensors.indexOf(a),1)):(s.classList.add("btn-red"),this.disabledSensors.push(a)),this.getlookanglesMultiSite(e,i.filter((e=>!this.disabledSensors.includes(e))))})),t.appendChild(s),t.appendChild(document.createTextNode(" "))}this.getlookanglesMultiSite(e,i.filter((e=>!this.disabledSensors.includes(e))))}))}}getlookanglesMultiSite(e,t){const i=r.bD.getTimeManager(),a=r.bD.getSensorManager(),s=r.bD.getCatalogManager().staticSet;if(!t){t=[];for(const e in s){const i=s[e];t.push(i)}}const n=!a.isSensorSelected(),o=[...a.currentSensors],l=b.rE/(e.satrec.no*b.rE/b.gc),c=[];for(const a of t){if(a.obsmaxrange<e.perigee&&(!a.obsmaxrange2||a.obsmaxrange2<e.perigee))continue;ta.E.updateSensorUiStyling([a]);let t=0;for(let s=0;s<24*this.lookanglesLength*60*60;s+=this.lookanglesInterval){t=1e3*s;let n=i.getOffsetTimeObj(t),o=sa.propagateMultiSite_(n,e.satrec,a);""!==o.time&&(c.push(o),s+=60*l*.75)}}c.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),a.lastMultiSiteArray=c,n?a.setCurrentSensor(a.defaultSensor):a.setCurrentSensor(o),sa.populateMultiSiteTable(c)}static propagateMultiSite_(e,t,i){const a=f.$.getRae(e,t,i);return f.$.checkIsInView(i,a)?{time:e.toISOString(),el:a.el,az:a.az,rng:a.rng,objName:i.objName}:{time:"",el:0,az:0,rng:0,objName:""}}static populateMultiSiteTable(e){const t=r.bD.getSensorManager(),i=r.bD.getCatalogManager().staticSet,a=(0,o.G)("multi-site-look-angles-table");a.innerHTML="";let s=a.insertRow(),n=s.insertCell();n.appendChild(document.createTextNode("Time")),n.setAttribute("style","text-decoration: underline");let l=s.insertCell();l.appendChild(document.createTextNode("El")),l.setAttribute("style","text-decoration: underline");let c=s.insertCell();c.appendChild(document.createTextNode("Az")),c.setAttribute("style","text-decoration: underline");let d=s.insertCell();d.appendChild(document.createTextNode("Rng")),d.setAttribute("style","text-decoration: underline");let u=s.insertCell();u.appendChild(document.createTextNode("Sensor")),u.setAttribute("style","text-decoration: underline");const p=r.bD.getTimeManager();for(const o of e){const e=i.find((e=>e.objName===o.objName));e&&(s=a.insertRow(),s.setAttribute("class","link"),n=s.insertCell(),n.appendChild(document.createTextNode((0,At.v)(o.time,"isoDateTime",!0))),l=s.insertCell(),l.appendChild(document.createTextNode(o.el.toFixed(1))),c=s.insertCell(),c.appendChild(document.createTextNode(o.az.toFixed(0))),d=s.insertCell(),d.appendChild(document.createTextNode(o.rng.toFixed(0))),u=s.insertCell(),u.appendChild(document.createTextNode(e.shortName)),s.addEventListener("click",(()=>{p.changeStaticOffset(new Date(o.time).getTime()-(new Date).getTime()),t.setSensor(e,e.staticNum)})))}}}sa.PLUGIN_NAME="Multi Site Look Angles";const na=new sa;class oa extends u.c{constructor(){super(sa.PLUGIN_NAME),this.bottomIconCallback=()=>{if(this.isMenuButtonEnabled){const e=r.bD.getSensorManager();e.isSensorSelected()&&((0,o.G)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,o.G)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,o.G)("cs-hei").value=e.currentSensors[0].alt.toString())}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=ea,this.sideMenuElementName="custom-sensor-menu",this.sideMenuElementHtml=r.bD.html`
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
    </div>`,this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=r.bD.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{oa.addCustomSensorFormSubmitListener(),oa.addTelescopeClickListener_(),oa.addCustomSensorBtnCLickListener_(),oa.addClearCustomSensorListener_(),oa.addUseGeolocationListener_()}})}static addCustomSensorFormSubmitListener(){(0,o.G)("customSensor").addEventListener("submit",(e=>{e.preventDefault()}))}static addUseGeolocationListener_(){(0,o.G)("cs-geolocation").addEventListener("click",ia.useCurrentGeolocationAsSensor)}static addClearCustomSensorListener_(){(0,o.G)("cs-clear").addEventListener("click",(()=>{r.bD.getSensorManager().clearSecondarySensors()}))}static addCustomSensorBtnCLickListener_(){(0,o.G)("cs-submit").addEventListener("click",(()=>{oa.processCustomSensorSubmit_()}))}static processCustomSensorSubmit_(){var e,t,i,a,s;null===(e=(0,o.G)("menu-sensor-info"))||void 0===e||e.classList.remove("bmenu-item-disabled"),null===(t=(0,o.G)("menu-fov-bubble"))||void 0===t||t.classList.remove("bmenu-item-disabled"),null===(i=(0,o.G)("menu-surveillance"))||void 0===i||i.classList.remove("bmenu-item-disabled"),null===(a=(0,o.G)("menu-planetarium"))||void 0===a||a.classList.remove("bmenu-item-disabled"),null===(s=(0,o.G)("menu-astronomy"))||void 0===s||s.classList.remove("bmenu-item-disabled"),(0,o.G)("sensor-type").value=(0,o.G)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,o.G)("sensor-info-title").innerHTML="Custom Sensor",(0,o.G)("sensor-country").innerHTML="Custom Sensor";const n=oa.str2Deg((0,o.G)("cs-lon").value),l=oa.str2Deg((0,o.G)("cs-lat").value),c=(0,o.G)("cs-hei").value,d=(0,o.G)("cs-type").value,u=(0,o.G)("cs-minaz").value,p=(0,o.G)("cs-maxaz").value,g=(0,o.G)("cs-minel").value,h=(0,o.G)("cs-maxel").value,m=(0,o.G)("cs-minrange").value,b=(0,o.G)("cs-maxrange").value;let f=S.SpaceObjectType.OBSERVER;switch(d){case"Observer":f=S.SpaceObjectType.OBSERVER;break;case"Optical":f=S.SpaceObjectType.OPTICAL;break;case"Mechanical":f=S.SpaceObjectType.MECHANICAL;break;case"Phased Array Radar":f=S.SpaceObjectType.PHASED_ARRAY_RADAR;break;default:v.x.info("Unknown sensor type: "+d),f=S.SpaceObjectType.OBSERVER}r.bD.getSensorManager().addSecondarySensor({id:null,lat:l,lon:n,alt:oa.str2Km(c),obsminaz:oa.str2Deg(u),obsmaxaz:oa.str2Deg(p),obsminel:oa.str2Deg(g),obsmaxel:oa.str2Deg(h),obsminrange:oa.str2Km(m),obsmaxrange:oa.str2Km(b),type:f,name:"Custom Sensor",uiName:"Custom Sensor",system:"Custom Sensor",country:"Custom Sensor",objName:"Custom Sensor",operator:"Custom Sensor",zoom:oa.str2Km(b)>6e3?pe.$R.GEO:pe.$R.LEO,volume:!1})}static addTelescopeClickListener_(){(0,o.G)("cs-telescope").addEventListener("click",(()=>{if((0,o.G)("cs-telescope").checked)(0,o.G)("cs-minaz-div").style.display="none",(0,o.G)("cs-maxaz-div").style.display="none",(0,o.G)("cs-minel-div").style.display="none",(0,o.G)("cs-maxel-div").style.display="none",(0,o.G)("cs-minrange-div").style.display="none",(0,o.G)("cs-maxrange-div").style.display="none",(0,o.G)("cs-minaz").value="0",(0,o.G)("cs-maxaz").value="360",(0,o.G)("cs-minel").value="10",(0,o.G)("cs-maxel").value="90",(0,o.G)("cs-minrange").value="100",(0,o.G)("cs-maxrange").value="1000000";else{(0,o.G)("cs-minaz-div").style.display="block",(0,o.G)("cs-maxaz-div").style.display="block",(0,o.G)("cs-minel-div").style.display="block",(0,o.G)("cs-maxel-div").style.display="block",(0,o.G)("cs-minrange-div").style.display="block",(0,o.G)("cs-maxrange-div").style.display="block";const e=r.bD.getSensorManager();e.isSensorSelected()&&((0,o.G)("cs-minaz").value=e.currentSensors[0].obsminaz.toString(),(0,o.G)("cs-maxaz").value=e.currentSensors[0].obsmaxaz.toString(),(0,o.G)("cs-minel").value=e.currentSensors[0].obsminel.toString(),(0,o.G)("cs-maxel").value=e.currentSensors[0].obsmaxel.toString(),(0,o.G)("cs-minrange").value=e.currentSensors[0].obsminrange.toString(),(0,o.G)("cs-maxrange").value=e.currentSensors[0].obsmaxrange.toString())}}))}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}oa.PLUGIN_NAME="Custom Sensor";const la=new oa,ra=i.p+"../img/lookangles.png";class ca extends u.c{constructor(){super(ca.PLUGIN_NAME),this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.refreshSideMenuData()},this.bottomIconElementName="look-angles-icon",this.bottomIconLabel="Look Angles",this.bottomIconImg=ra,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:450},this.helpTitle="Look Angles Menu",this.helpBody=r.bD.html`
    The Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a sensor and a satellite.
    A satellite and sensor must first be selected before the menu can be used.
    <br><br>
    The toggle only rise and set times will only calculate the rise and set times of the satellite.
    This is useful for quickly determining when a satellite will be visible to a sensor.
    <br><br>
    The search range can be modified by changing the length and interval options.`,this.isRiseSetLookangles=!0,this.lookanglesInterval=30,this.lookanglesLength=2,this.sideMenuElementName="look-angles-menu",this.sideMenuElementHtml=r.bD.html`
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
    </div>`,this.refreshSideMenuData=()=>{this.isMenuButtonEnabled&&(0,V.QP)((()=>{const e=r.bD.getCatalogManager().getSat(r.bD.getCatalogManager().selectedSat,Oe.C_.EXTRA_ONLY);this.getlookangles(e)}))}}addHtml(){super.addHtml(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;(0,o.G)("look-angles-length").addEventListener("change",(()=>{this.lookanglesLength=parseInt((0,o.G)("look-angles-length").value),this.refreshSideMenuData()})),(0,o.G)("look-angles-interval").addEventListener("change",(()=>{this.lookanglesInterval=parseInt((0,o.G)("look-angles-interval").value),this.refreshSideMenuData()})),null===(e=(0,o.G)("export-look-angles"))||void 0===e||e.addEventListener("click",(()=>{(0,Ve.Eb)(this.lastlooksArray,"Look-Angles")})),(0,o.G)("settings-riseset").addEventListener("change",this.settingsRisesetChange.bind(this))}}),r.bD.register({event:r.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(!(!this.isMenuButtonEnabled||(null==e?void 0:e.TLE1)&&r.bD.getSensorManager().isSensorSelected()))return this.setBottomIconToDisabled(),void this.closeSideMenu();this.setBottomIconToEnabled(),this.isMenuButtonEnabled&&e&&this.getlookangles(e)}})}addJs(){super.addJs(),r.bD.register({event:r.RL.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{this.refreshSideMenuData()}})}getlookangles(e,t){const i=r.bD.getTimeManager();if(!t){const e=r.bD.getSensorManager();if(!e.isSensorSelected())return console.debug("satellite.getlookangles requires a sensor to be set!"),[];t=e.currentSensors}let a=this.isRiseSetLookangles?1:this.lookanglesInterval,s=[],n=0;for(let o=0;o<24*this.lookanglesLength*60*60;o+=a){n=1e3*o;let a=i.getOffsetTimeObj(n),l=Bt.J.getTearData(a,e.satrec,t,this.isRiseSetLookangles);if(""!==l.time&&s.push(l),s.length>=1500)break}return s.sort(((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime())),this.lastlooksArray=s,(()=>{let e=(0,o.G)("looks");e.innerHTML="";let t=e.insertRow(),a=t.insertCell();a.appendChild(document.createTextNode("Time")),a.setAttribute("style","text-decoration: underline");let n=t.insertCell();n.appendChild(document.createTextNode("El")),n.setAttribute("style","text-decoration: underline");let l=t.insertCell();l.appendChild(document.createTextNode("Az")),l.setAttribute("style","text-decoration: underline");let c=t.insertCell();c.appendChild(document.createTextNode("Rng")),c.setAttribute("style","text-decoration: underline");for(let t=0;t<s.length;t++)if(e.rows.length>0){const o=e.insertRow();o.setAttribute("class","link"),a=o.insertCell(),a.appendChild(document.createTextNode((0,At.v)(s[t].time,"isoDateTime",!1))),a.addEventListener("click",(()=>{i.changeStaticOffset(new Date((0,At.v)(s[t].time,"isoDateTime",!1)+"z").getTime()-i.realTime),i.calculateSimulationTime(),r.bD.methods.updateDateTime(new Date(i.dynamicOffsetEpoch+i.staticOffset))})),n=o.insertCell(),n.appendChild(document.createTextNode(s[t].el.toFixed(1))),l=o.insertCell(),l.appendChild(document.createTextNode(s[t].az.toFixed(0))),c=o.insertCell(),c.appendChild(document.createTextNode(s[t].rng.toFixed(0)))}})(),s}settingsRisesetChange(e,t){if(null==e)throw new Error("e is undefined");null!=t||(t=(0,o.G)("settings-riseset").checked),this.isRiseSetLookangles=!!t,this.refreshSideMenuData()}}ca.PLUGIN_NAME="Look Angles";const da=new ca,ua=i.p+"../img/radio-tower.png";class pa extends u.c{constructor(){super(pa.PLUGIN_NAME),this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.getSensorInfo(),this.checkIfLinesVisible_(r.bD.getLineManager())},this.bottomIconElementName="sensor-info-icon",this.bottomIconLabel="Sensor Info",this.bottomIconImg=ua,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="sensor-info-menu",this.sideMenuElementHtml=r.bD.html`
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
    </div>`,this.dragOptions={isDraggable:!0},this.isSunLineVisible_=!1,this.isMonnLineVisible_=!1,this.helpTitle="Sensor Info",this.helpBody=r.bD.html`
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
    Additionally, lines can be quickly created from the sensor to the sun or moon from this menu.`}addHtml(){super.addHtml(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.addSensorToSunBtnListener_(),this.addSensorToMoonBtnListener()}}),r.bD.register({event:r.RL.onLineAdded,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfLinesVisible_(e)}})}checkIfLinesVisible_(e){this.isSunLineVisible_=e.drawLineList.some((e=>e.type===Ni.jv.SENSOR_TO_SUN)),this.isSunLineVisible_?((0,o.G)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0):((0,o.G)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1),this.isMonnLineVisible_=e.drawLineList.some((e=>e.type===Ni.jv.SENSOR_TO_MOON)),this.isMonnLineVisible_?((0,o.G)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0):((0,o.G)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1)}addSensorToMoonBtnListener(){(0,o.G)("sensor-moon-btn").addEventListener("click",(()=>{if(this.isMonnLineVisible_){const e=r.bD.getLineManager();for(const t of e.drawLineList)if(t.type===Ni.jv.SENSOR_TO_MOON)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,o.G)("sensor-moon-btn").textContent="Add Line to Moon  ▶",void(this.isMonnLineVisible_=!1)}else{const e=r.bD.getSensorManager().currentSensors;1!==e.length&&r.bD.getUiManager().toast("Please Select Only One Sensor","caution");const t=r.bD.getScene();r.bD.getLineManager().create(Ni.jv.SENSOR_TO_MOON,[r.bD.getCatalogManager().getSensorFromSensorName(e[0].name),t.moon.position[0],t.moon.position[1],t.moon.position[2]],"w"),(0,o.G)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0}}))}addSensorToSunBtnListener_(){(0,o.G)("sensor-sun-btn").addEventListener("click",(()=>{if(this.isSunLineVisible_){const e=r.bD.getLineManager();for(const t of e.drawLineList)if(t.type===Ni.jv.SENSOR_TO_SUN)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,o.G)("sensor-sun-btn").textContent="Add Line to Sun  ▶",void(this.isSunLineVisible_=!1)}else{const e=r.bD.getSensorManager().currentSensors;1!==e.length&&r.bD.getUiManager().toast("Please Select Only One Sensor","caution");const t=r.bD.getScene();r.bD.getLineManager().create(Ni.jv.SENSOR_TO_SUN,[r.bD.getCatalogManager().getSensorFromSensorName(e[0].name),t.sun.position[0],t.sun.position[1],t.sun.position[2]],"o"),(0,o.G)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0}}))}getSensorInfo(){if(!this.isHtmlAdded)return;const e=r.bD.getSensorManager().currentSensors[0];(0,o.G)("sensor-latitude").innerHTML=e.lat.toString(),(0,o.G)("sensor-longitude").innerHTML=e.lon.toString(),(0,o.G)("sensor-minazimuth").innerHTML=e.obsminaz.toString(),(0,o.G)("sensor-maxazimuth").innerHTML=e.obsmaxaz.toString(),(0,o.G)("sensor-minelevation").innerHTML=e.obsminel.toString(),(0,o.G)("sensor-maxelevation").innerHTML=e.obsmaxel.toString(),(0,o.G)("sensor-minrange").innerHTML=e.obsminrange.toString(),(0,o.G)("sensor-maxrange").innerHTML=e.obsmaxrange.toString()}}pa.PLUGIN_NAME="Sensor Info";const ga=new pa,ha=i.p+"../img/radar.png";var ma=i(6246),ba=i(5623);class va extends u.c{constructor(){super(va.PLUGIN_NAME),this.dependencies=[Ct.s.PLUGIN_NAME],this.bottomIconCallback=()=>{var e;this.isMenuButtonEnabled&&((null===(e=r.bD.getPlugin(et))||void 0===e?void 0:e.isMenuButtonEnabled)?(0,ba.l)("sensor-top-link").forEach((e=>{e.style.display="none"})):(0,ba.l)("sensor-top-link").forEach((e=>{e.style.gridTemplateColumns="repeat(2,1fr)",e.style.display=""})))},this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.bottomIconElementName="sensor-list-icon",this.bottomIconLabel="Sensors",this.bottomIconImg=ha,this.sideMenuElementName="sensor-list-menu",this.sideMenuElementHtml=r.bD.html`
    <div id="sensor-list-menu" class="side-menu-parent start-hidden text-select">
        <div id="sensor-list-content" class="side-menu">
        <div class="row">
            <ul id="reset-sensor-text" class="sensor-reset-menu">
            <h5 id="reset-sensor-button" class="center-align menu-selectable">Reset Sensor</h5>
            <li class="divider"></li>
            </ul>
            <ul>`+va.ssnSensors_()+va.mwSensors_()+va.mdaSensors_()+va.leoLabsSensors_()+va.esocSensors_()+va.russianSensors_()+va.chineseSensors_()+va.otherSensors_()+r.bD.html`
            </ul>
        </div>
        </div>
    </div>`,this.isSensorLinksAdded=!1,this.helpTitle="Sensors Menu",this.helpBody=r.bD.html`The Sensors menu allows you to select a sensor for use in calculations and other menu's functions.
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
  If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.`}addHtml(){super.addHtml(),r.bD.register({event:r.RL.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)("nav-mobile").insertAdjacentHTML("beforeend",r.bD.html`<div id="sensor-selected" class="waves-effect waves-light"></div>`)}}),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)("sensor-selected").addEventListener("click",(()=>{r.bD.methods.bottomMenuClick(this.bottomIconElementName)})),(0,o.G)("sensor-list-content").addEventListener("click",(e=>{let t=e.target;if(!e.target.classList.contains("menu-selectable")&&(t=e.target.parentElement,!t.classList.contains("menu-selectable")))return;if("reset-sensor-button"===t.id)return void r.bD.getSensorManager().resetSensorSelected();const i=t.dataset.sensor;this.sensorListContentClick(i)}))}}),r.bD.register({event:"selectSatData",cbName:"sensor",cb:e=>{null!=e&&(null===r.bD.getPlugin(li.P)||this.isSensorLinksAdded||((0,o.G)("sat-info-top-links").insertAdjacentHTML("beforeend",r.bD.html`
                  <div id="sensors-in-fov-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                        data-tooltip="Visualize Sensor Coverage">Show All Sensors with FOV...</div>
                `),(0,o.G)("sensors-in-fov-link").addEventListener("click",(()=>{const e=r.bD.getCatalogManager();Object.keys(ma.T).forEach((t=>{const i=ma.T[t],a=e.getSat(e.selectedSat);Bt.J.getTearr(a,[i]).inView&&r.bD.getLineManager().create(Ni.jv.MULTI_SENSORS_TO_SAT,[a.id,e.getSensorFromSensorName(i.name)],"g")}))})),this.isSensorLinksAdded=!0))}}),r.bD.register({event:r.RL.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{(0,o.G)("reset-sensor-button").style.display=e?"block":"none"}})}sensorListContentClick(e){if(!this.isMenuButtonEnabled)return;const t=r.bD.getSensorManager();if(void 0!==e){switch(e){case"cspocAll":t.setSensor("SSN");break;case"mwAll":t.setSensor("NATO-MW");break;case"mdAll":t.setSensor("MD-ALL");break;case"esocAll":t.setSensor("ESOC-ALL");break;case"llAll":t.setSensor("LEO-LABS");break;case"rusAll":t.setSensor("RUS-ALL");break;case"prcAll":t.setSensor("PRC-ALL");break;default:t.setSensor(ma.T[`${e}`])}r.bD.getCatalogManager().setSelectedSat(-1);try{r.bD.getMainCamera().lookAtLatLon(t.currentSensors[0].lat,t.currentSensors[0].lon,t.currentSensors[0].zoom,r.bD.getTimeManager().selectedDate)}catch(e){v.x.warn("Error in sensorListContentClick: "+e)}settingsManager.currentColorScheme==r.bD.getColorSchemeManager().default&&qe.j.change("default")}else v.x.debug("The menu item was clicked but the menu was not defined.")}static createLiForSensor(e){return r.bD.html`
      <li class="menu-selectable" data-sensor="${e.objName}">
        <span>${e.uiName}</span>
        <span>${e.system}</span>
        <span class="badge dark-blue-badge" data-badge-caption="${e.operator}"></span>
      </li>
    `}static ssnSensors_(){return this.createSection({header:"Space Surveillance Network Sensors",sensors:[ma.T.EGLAFB,ma.T.KWAJSPF,ma.T.GEODDSDGC,ma.T.GEODDSMAU,ma.T.GEODDSSOC,ma.T.KWAJALT,ma.T.KWAJMMW,ma.T.KWAJALC,ma.T.KWAJTDX,ma.T.MITMIL,ma.T.RAFASC,ma.T.GLBII,ma.T.HOLCBAND,ma.T.HOLSST],topLinks:[{name:"All SSN Sensors",dataSensor:"ssnAll",badge:"COALITION"}]})}static mwSensors_(){return this.createSection({header:"US Missile Warning Sensors",sensors:[ma.T.BLEAFB,ma.T.CODSFS,ma.T.CAVSFS,ma.T.CLRSFS,ma.T.COBRADANE,ma.T.RAFFYL,ma.T.PITSB],topLinks:[{name:"All MW Sensors",dataSensor:"mwAll",badge:"NORAD"}]})}static mdaSensors_(){return this.createSection({header:"US Missile Defense Agency Sensors",sensors:[ma.T.HARTPY,ma.T.QTRTPY,ma.T.KURTPY,ma.T.SHATPY,ma.T.KCSTPY,ma.T.SBXRDR],topLinks:[{name:"All MDA Sensors",dataSensor:"mdAll",badge:"MDA"}]})}static createSection(e){return r.bD.html`
              <li class="divider"></li>
              <h5 class="center-align">${e.header}</h5>
              <li class="divider"></li>
              ${e.topLinks.map((e=>r.bD.html`<li class="menu-selectable sensor-top-link" data-sensor="${e.dataSensor}">
                <span>${e.name}</span>
                <span class="badge dark-blue-badge" data-badge-caption="${e.badge}"></span>
              </li>`)).join("")}
              ${e.sensors.map((e=>va.createLiForSensor(e))).join("")}
              `}static esocSensors_(){return this.createSection({header:"ESA Space Operations Center Sensors",sensors:[ma.T.GRV,ma.T.TIR,ma.T.GES,ma.T.NRC,ma.T.PDM,ma.T.TRO,ma.T.Tenerife,ma.T.ZimLAT,ma.T.ZimSMART,ma.T.Tromso,ma.T.Kiruna,ma.T.Sodankyla,ma.T.Svalbard],topLinks:[{name:"All ESOC Sensors",dataSensor:"esocAll",badge:"ESA"}]})}static leoLabsSensors_(){return this.createSection({header:"Leo Labs Sensors",sensors:[ma.T.LEOCRSR,ma.T.LEOAZORES,ma.T.LEOKSR,ma.T.LEOPFISR,ma.T.LEOMSR],topLinks:[{name:"All Leo Labs Sensors",dataSensor:"llAll",badge:"LEOLABS"}]})}static otherSensors_(){return this.createSection({header:"Other Sensors",sensors:[ma.T.ROC,ma.T.MLS,ma.T.PO,ma.T.LSO,ma.T.MAY],topLinks:[]})}static russianSensors_(){return this.createSection({header:"Russian Sensors",sensors:[ma.T.OLED,ma.T.OLEV,ma.T.PEC,ma.T.MISD,ma.T.MISV,ma.T.LEKV,ma.T.ARMV,ma.T.KALV,ma.T.BARV,ma.T.YENV,ma.T.ORSV,ma.T.STO,ma.T.NAK],topLinks:[{name:"All Russian Sensors",dataSensor:"rusAll",badge:"RUS"}]})}static chineseSensors_(){return this.createSection({header:"Chinese Sensors",sensors:[ma.T.SHD,ma.T.HEI,ma.T.ZHE,ma.T.XIN,ma.T.PMO],topLinks:[{name:"All Chinese Sensors",dataSensor:"prcAll",badge:"PRC"}]})}resetSensorButtonClick(){var e,t,i,a,s,n;this.isMenuButtonEnabled&&(null===(e=(0,o.G)("menu-sensor-info"))||void 0===e||e.classList.add("bmenu-item-disabled"),null===(t=(0,o.G)("menu-fov-bubble"))||void 0===t||t.classList.add("bmenu-item-disabled"),null===(i=(0,o.G)("menu-surveillance"))||void 0===i||i.classList.add("bmenu-item-disabled"),null===(a=(0,o.G)("menu-planetarium"))||void 0===a||a.classList.add("bmenu-item-disabled"),null===(s=(0,o.G)("menu-astronomy"))||void 0===s||s.classList.add("bmenu-item-disabled"),r.bD.getMainCamera().cameraType===pe.iM.PLANETARIUM)&&(null===(n=r.bD.getPlugin(et))||void 0===n||n.setBottomIconToUnselected(),r.bD.getMainCamera().isPanReset=!0,r.bD.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,r.bD.getRenderer().glInit(),r.bD.getUiManager().hideSideMenus(),r.bD.getOrbitManager().clearInViewOrbit(),r.bD.getMainCamera().cameraType=pe.iM.DEFAULT,(0,o.G)("menu-planetarium").classList.remove("bmenu-item-selected"))}}va.PLUGIN_NAME="Sensor List";const fa=new va,Sa=i.p+"../img/settings.png";var Ma=i(3643),ya=i(6303),wa=i(9755),Ca=i.n(wa),La=i(3392);class xa extends u.c{constructor(){super(xa.PLUGIN_NAME),this.bottomIconElementName="settings-menu-icon",this.bottomIconImg=Sa,this.bottomIconLabel="Settings Menu",this.sideMenuElementName="settings-menu",this.sideMenuElementHtml=r.bD.html`
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
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide notional satellites">
                <input id="settings-notionalSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show Notional Satellites
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide LEO satellites">
                <input id="settings-leoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show LEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label class="tooltipped" data-position="right" data-delay="50" data-tooltip="Disable to hide Starlink satellites">
                <input id="settings-starlinkSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show Starlink Satellites
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=r.bD.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e,t,i,a,s,n,l;(0,o.G)("settings-form").addEventListener("change",xa.onFormChange),(0,o.G)("settings-form").addEventListener("submit",xa.onSubmit),(0,o.G)("settings-reset").addEventListener("click",xa.resetToDefaults);const r=[(0,Ma.S)([1,0,0,1]),(0,Ma.S)([1,.75,0,1]),(0,Ma.S)([.85,.5,0,1]),(0,Ma.S)([1,1,0,1]),(0,Ma.S)([0,1,0,1]),(0,Ma.S)([.2,1,0,.5]),(0,Ma.S)([.2,1,1,1]),(0,Ma.S)([0,0,1,1]),(0,Ma.S)([.2,.4,1,1]),(0,Ma.S)([.64,0,.64,1]),(0,Ma.S)([1,0,.6,1]),(0,Ma.S)([.5,.5,.5,1]),(0,Ma.S)([1,1,1,1])],c=this;Ca()("#settings-color-payload").colorPick({initialColor:(0,Ma.S)((null===(e=settingsManager.colors)||void 0===e?void 0:e.payload)||[.2,1,0,.5]),palette:r,onColorSelected:function(){c.onColorSelected(this,"payload")}}),Ca()("#settings-color-rocketBody").colorPick({initialColor:(0,Ma.S)((null===(t=settingsManager.colors)||void 0===t?void 0:t.rocketBody)||[.2,.4,1,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"rocketBody")}}),Ca()("#settings-color-debris").colorPick({initialColor:(0,Ma.S)((null===(i=settingsManager.colors)||void 0===i?void 0:i.debris)||[.5,.5,.5,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"debris")}}),Ca()("#settings-color-inview").colorPick({initialColor:(0,Ma.S)((null===(a=settingsManager.colors)||void 0===a?void 0:a.inFOV)||[.85,.5,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"inview")}}),Ca()("#settings-color-missile").colorPick({initialColor:(0,Ma.S)((null===(s=settingsManager.colors)||void 0===s?void 0:s.missile)||[1,1,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"missile")}}),Ca()("#settings-color-missileInview").colorPick({initialColor:(0,Ma.S)((null===(n=settingsManager.colors)||void 0===n?void 0:n.missileInview)||[1,0,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"missileInview")}}),Ca()("#settings-color-special").colorPick({initialColor:(0,Ma.S)((null===(l=settingsManager.colors)||void 0===l?void 0:l.pink)||[1,0,.6,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"pink")}}),this.isNotColorPickerInitialSetup=!0}})}addJs(){super.addJs(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{xa.syncOnLoad()}})}onColorSelected(e,t){if(null==e)throw new Error("context is undefined");if(null==t)throw new Error("colorStr is undefined");if(e.element.css("cssText",`background-color: ${e.color} !important; color: ${e.color};`),this.isNotColorPickerInitialSetup){settingsManager.colors[t]=(e=>{let[t,i,a,s]=e.match(/(?<!\w)-?[\d.]+/gu);if(t=parseFloat(t)/255,i=parseFloat(i)/255,a=parseFloat(a)/255,s=parseFloat(s),t<0||t>1||i<0||i>1||a<0||a>1||s<0||s>1||isNaN(t)||isNaN(i)||isNaN(a)||isNaN(s))throw new Error("Invalid rgba input");return[t,i,a,s]})(e.color),qe.j.legendColorsChange();const i=r.bD.getColorSchemeManager();i.setColorScheme(i.currentColorScheme,!0),ya.p.getInstance().saveItem(ya.Q.SETTINGS_MANAGER_COLORS,JSON.stringify(settingsManager.colors))}}static onFormChange(e,t,i){var a,s,n;if(null==e)throw new Error("e is undefined");switch(null===(a=e.target)||void 0===a?void 0:a.id){case"settings-notionalSats":case"settings-leoSats":case"settings-starlinkSats":case"settings-heoSats":case"settings-meoSats":case"settings-geoSats":case"settings-showPayloads":case"settings-showRocketBodies":case"settings-showDebris":case"settings-showAgencies":case"settings-drawOrbits":case"settings-drawTrailingOrbits":case"settings-drawEcf":case"settings-isDrawInCoverageLines":case"settings-drawSun":case"settings-drawBlackEarth":case"settings-drawAtmosphere":case"settings-drawAurora":case"settings-drawMilkyWay":case"settings-graySkybox":case"settings-eciOnHover":case"settings-hos":case"settings-demo-mode":case"settings-sat-label-mode":case"settings-freeze-drag":case"settings-time-machine-toasts":case"settings-snp":(0,o.G)(e.target.id).checked?null===(s=r.bD.getSoundManager())||void 0===s||s.play("toggleOn"):null===(n=r.bD.getSoundManager())||void 0===n||n.play("toggleOff")}null!=t||(t=(0,o.G)("settings-demo-mode").checked),null!=i||(i=(0,o.G)("settings-sat-label-mode").checked),i&&"settings-demo-mode"===e.target.id&&((0,o.G)("settings-sat-label-mode").checked=!1,(0,o.G)("settings-demo-mode").classList.remove("lever:after")),t&&"settings-sat-label-mode"===e.target.id&&((0,o.G)("settings-demo-mode").checked=!1,(0,o.G)("settings-sat-label-mode").classList.remove("lever:after"))}static syncOnLoad(){(0,o.G)("settings-notionalSats").checked=settingsManager.isShowNotionalSats,(0,o.G)("settings-leoSats").checked=settingsManager.isShowLeoSats,(0,o.G)("settings-starlinkSats").checked=settingsManager.isShowStarlinkSats,(0,o.G)("settings-heoSats").checked=settingsManager.isShowHeoSats,(0,o.G)("settings-meoSats").checked=settingsManager.isShowMeoSats,(0,o.G)("settings-geoSats").checked=settingsManager.isShowGeoSats,(0,o.G)("settings-showPayloads").checked=settingsManager.isShowPayloads,(0,o.G)("settings-showRocketBodies").checked=settingsManager.isShowRocketBodies,(0,o.G)("settings-showDebris").checked=settingsManager.isShowDebris,(0,o.G)("settings-showAgencies").checked=settingsManager.isShowAgencies,(0,o.G)("settings-drawOrbits").checked=settingsManager.isDrawOrbits,(0,o.G)("settings-drawTrailingOrbits").checked=settingsManager.isDrawTrailingOrbits,(0,o.G)("settings-drawEcf").checked=settingsManager.isOrbitCruncherInEcf,(0,o.G)("settings-isDrawInCoverageLines").checked=settingsManager.isDrawInCoverageLines,(0,o.G)("settings-drawSun").checked=settingsManager.isDrawSun,(0,o.G)("settings-drawBlackEarth").checked=settingsManager.isBlackEarth,(0,o.G)("settings-drawAtmosphere").checked=settingsManager.isDrawAtmosphere,(0,o.G)("settings-drawAurora").checked=settingsManager.isDrawAurora,(0,o.G)("settings-drawMilkyWay").checked=settingsManager.isDrawMilkyWay,(0,o.G)("settings-graySkybox").checked=settingsManager.isGraySkybox,(0,o.G)("settings-eciOnHover").checked=settingsManager.isEciOnHover,(0,o.G)("settings-hos").checked=0===settingsManager.colors.transparent[3],(0,o.G)("settings-demo-mode").checked=settingsManager.isDemoModeOn,(0,o.G)("settings-sat-label-mode").checked=settingsManager.isSatLabelModeOn,(0,o.G)("settings-freeze-drag").checked=settingsManager.isFreezePropRateOnDrag,(0,o.G)("settings-time-machine-toasts").checked=settingsManager.isDisableTimeMachineToasts,(0,o.G)("maxSearchSats").value=settingsManager.searchLimit.toString()}static preserveSettings(){ya.p.getInstance().saveItem(ya.Q.SETTINGS_LEO_SATS,settingsManager.isShowLeoSats.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_STARLINK_SATS,settingsManager.isShowStarlinkSats.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_HEO_SATS,settingsManager.isShowHeoSats.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_MEO_SATS,settingsManager.isShowMeoSats.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_GEO_SATS,settingsManager.isShowGeoSats.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_PAYLOADS,settingsManager.isShowPayloads.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_ROCKET_BODIES,settingsManager.isShowRocketBodies.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DEBRIS,settingsManager.isShowDebris.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_AGENCIES,settingsManager.isShowAgencies.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DRAW_ORBITS,settingsManager.isDrawOrbits.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DRAW_TRAILING_ORBITS,settingsManager.isDrawTrailingOrbits.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DRAW_ECF,settingsManager.isOrbitCruncherInEcf.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DRAW_IN_COVERAGE_LINES,settingsManager.isDrawInCoverageLines.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DRAW_SUN,settingsManager.isDrawSun.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DRAW_BLACK_EARTH,settingsManager.isBlackEarth.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DRAW_ATMOSPHERE,settingsManager.isDrawAtmosphere.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DRAW_AURORA,settingsManager.isDrawAurora.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DRAW_MILKY_WAY,settingsManager.isDrawMilkyWay.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_GRAY_SKYBOX,settingsManager.isGraySkybox.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_ECI_ON_HOVER,settingsManager.isEciOnHover.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_HOS,0===settingsManager.colors.transparent[3]?"true":"false"),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DEMO_MODE,settingsManager.isDemoModeOn.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_SAT_LABEL_MODE,settingsManager.isSatLabelModeOn.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_FREEZE_PROP_RATE_ON_DRAG,settingsManager.isFreezePropRateOnDrag.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_DISABLE_TIME_MACHINE_TOASTS,settingsManager.isDisableTimeMachineToasts.toString()),ya.p.getInstance().saveItem(ya.Q.SETTINGS_SEARCH_LIMIT,settingsManager.searchLimit.toString())}static resetToDefaults(){settingsManager.isShowLeoSats=!0,settingsManager.isShowHeoSats=!0,settingsManager.isShowMeoSats=!0,settingsManager.isShowGeoSats=!0,settingsManager.isShowPayloads=!0,settingsManager.isShowRocketBodies=!0,settingsManager.isShowDebris=!0,settingsManager.isShowAgencies=!1,settingsManager.isDrawOrbits=!0,settingsManager.isDrawTrailingOrbits=!1,settingsManager.isOrbitCruncherInEcf=!1,settingsManager.isDrawInCoverageLines=!0,settingsManager.isDrawSun=!0,settingsManager.isBlackEarth=!1,settingsManager.isDrawAtmosphere=!0,settingsManager.isDrawAurora=!0,settingsManager.isDrawMilkyWay=!0,settingsManager.isGraySkybox=!1,settingsManager.isEciOnHover=!1,settingsManager.isDemoModeOn=!1,settingsManager.isSatLabelModeOn=!0,settingsManager.isFreezePropRateOnDrag=!1,settingsManager.isDisableTimeMachineToasts=!1,settingsManager.searchLimit=150,xa.preserveSettings(),xa.syncOnLoad()}static onSubmit(e){var t,i;if(null==e)throw new Error("e is undefined");e.preventDefault();const a=r.bD.getUiManager(),s=r.bD.getColorSchemeManager();null===(t=r.bD.getSoundManager())||void 0===t||t.play("button"),settingsManager.isShowNotionalSats=(0,o.G)("settings-notionalSats").checked,settingsManager.isShowLeoSats=(0,o.G)("settings-leoSats").checked,settingsManager.isShowStarlinkSats=(0,o.G)("settings-starlinkSats").checked,settingsManager.isShowHeoSats=(0,o.G)("settings-heoSats").checked,settingsManager.isShowMeoSats=(0,o.G)("settings-meoSats").checked,settingsManager.isShowGeoSats=(0,o.G)("settings-geoSats").checked,settingsManager.isShowPayloads=(0,o.G)("settings-showPayloads").checked,settingsManager.isShowRocketBodies=(0,o.G)("settings-showRocketBodies").checked,settingsManager.isShowDebris=(0,o.G)("settings-showDebris").checked,settingsManager.isShowAgencies=(0,o.G)("settings-showAgencies").checked,settingsManager.isOrbitCruncherInEcf=(0,o.G)("settings-drawEcf").checked,settingsManager.isDrawInCoverageLines=(0,o.G)("settings-isDrawInCoverageLines").checked,settingsManager.isDrawSun=(0,o.G)("settings-drawSun").checked;let n=settingsManager.isBlackEarth!==(0,o.G)("settings-drawBlackEarth").checked,l=settingsManager.isDrawAtmosphere!==(0,o.G)("settings-drawAtmosphere").checked,c=settingsManager.isDrawAurora!==(0,o.G)("settings-drawAurora").checked;settingsManager.isBlackEarth=(0,o.G)("settings-drawBlackEarth").checked,settingsManager.isDrawAtmosphere=(0,o.G)("settings-drawAtmosphere").checked,settingsManager.isDrawAurora=(0,o.G)("settings-drawAurora").checked,(n||l||c)&&r.bD.getScene().earth.reloadEarthHiResTextures(),settingsManager.isDrawOrbits=(0,o.G)("settings-drawOrbits").checked,settingsManager.isDrawTrailingOrbits=(0,o.G)("settings-drawTrailingOrbits").checked,r.bD.getOrbitManager().orbitWorker&&(settingsManager.isDrawTrailingOrbits?r.bD.getOrbitManager().orbitWorker.postMessage({orbitType:2}):r.bD.getOrbitManager().orbitWorker.postMessage({orbitType:1}));let d=settingsManager.isDrawMilkyWay!==(0,o.G)("settings-drawMilkyWay").checked,u=settingsManager.isGraySkybox!==(0,o.G)("settings-graySkybox").checked;settingsManager.isDrawMilkyWay=(0,o.G)("settings-drawMilkyWay").checked,settingsManager.isGraySkybox=(0,o.G)("settings-graySkybox").checked,(d||u)&&r.bD.getScene().skybox.init(settingsManager,r.bD.getRenderer().gl),settingsManager.isEciOnHover=(0,o.G)("settings-eciOnHover").checked;const p=(0,o.G)("settings-hos").checked;settingsManager.colors.transparent=p?[1,1,1,0]:[1,1,1,.1],settingsManager.isDemoModeOn=(0,o.G)("settings-demo-mode").checked,settingsManager.isSatLabelModeOn=(0,o.G)("settings-sat-label-mode").checked,settingsManager.isShowNextPass=(0,o.G)("settings-snp").checked,settingsManager.isFreezePropRateOnDrag=(0,o.G)("settings-freeze-drag").checked,settingsManager.isDisableTimeMachineToasts=(0,o.G)("settings-time-machine-toasts").checked,r.bD.getPlugin(La.i)&&(r.bD.getPlugin(La.i).isMenuButtonEnabled=!1),r.bD.getGroupsManager().clearSelect(),s.setColorScheme(s.default,!0),null===(i=(0,o.G)("menu-time-machine"))||void 0===i||i.classList.remove("bmenu-item-selected"),s.reloadColors();const g=parseInt((0,o.G)("satFieldOfView").value);isNaN(g)?((0,o.G)("satFieldOfView").value="30",a.toast("Invalid field of view value!","critical")):r.bD.getCatalogManager().satCruncher.postMessage({typ:"isShowSatOverfly",selectedSatFOV:g});const h=parseInt((0,o.G)("maxSearchSats").value);isNaN(h)?((0,o.G)("maxSearchSats").value=settingsManager.searchLimit.toString(),a.toast("Invalid max search sats value!","critical")):(settingsManager.searchLimit=h,a.searchManager.doSearch(a.searchManager.getCurrentSearch())),s.setColorScheme(s.currentColorScheme,!0),xa.preserveSettings()}}xa.PLUGIN_NAME="Settings Menu";const Da=new xa,Ea=i.p+"../img/search.png";class Ta extends u.c{constructor(){super(Ta.PLUGIN_NAME),this.dependencies=[oi.H.PLUGIN_NAME,li.P.PLUGIN_NAME],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=Ea,this.isRequireSensorSelected=!0,this.isIconDisabledOnLoad=!0,this.isAddStfLinksOnce=!1,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=r.bD.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
  <br><br>
  This is unlikely to be very helpful unless you own/operate a sensor with a search box functionality.`,this.sideMenuElementName="stf-menu",this.sideMenuElementHtml=r.bD.html`
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
  </div>`}addHtml(){super.addHtml(),r.bD.register({event:r.RL.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{null!=e&&(this.isAddStfLinksOnce||((0,o.G)("sat-info-top-links").insertAdjacentHTML("beforeend",r.bD.html`
            <div id="stf-on-object-link" class="link sat-infobox-links tooltipped" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,o.G)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0))}})}addJs(){super.addJs(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)("stfForm").addEventListener("submit",(e=>{e.preventDefault(),this.onSubmit.bind(this)()})),(0,o.G)("stf-remove-last").addEventListener("click",(()=>{r.bD.getSensorManager().removeStf()})),(0,o.G)("stf-clear-all").addEventListener("click",(()=>{r.bD.getSensorManager().clearStf()}))}}),r.bD.register({event:"resetSensor",cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),r.bD.register({event:"setSensor",cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,m.kW)((0,o.G)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonEnabled=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),r.bD.getUiManager().hideSideMenus()}onSubmit(){var e;if(!this.verifySensorSelected())return;const t=r.bD.getSensorManager(),{lat:i,lon:a,alt:s}=t.currentSensors[0],n=parseFloat((0,o.G)("stf-az").value),l=parseFloat((0,o.G)("stf-azExt").value),c=parseFloat((0,o.G)("stf-el").value),d=parseFloat((0,o.G)("stf-elExt").value),u=parseFloat((0,o.G)("stf-rng").value),p=parseFloat((0,o.G)("stf-rngExt").value),g=n-l<0?n-l+360:n-l/2,h=n+l>360?n+l-360:n+l/2,m=c-d/2,b=c+d/2,S=u-p/2,M=u+p/2,y={lat:i,lon:a,alt:s,obsminaz:g,obsmaxaz:h,obsminel:m,obsmaxel:b,obsminrange:S,obsmaxrange:M,type:"Short Range Fence"};f.$.checkIsInView(t.currentSensors[0],{az:g,el:m,rng:S})&&f.$.checkIsInView(t.currentSensors[0],{az:h,el:b,rng:M})?(t.addStf(y),null===(e=r.bD.getPlugin(Ji))||void 0===e||e.enableFovView()):v.x.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=r.bD.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=r.bD.getCatalogManager(),i=Bt.J.getTearr(t.getSat(t.selectedSat),e.currentSensors);(0,o.G)("stf-az").value=i.az.toFixed(1),(0,o.G)("stf-el").value=i.el.toFixed(1),(0,o.G)("stf-rng").value=i.rng.toFixed(1),r.bD.getUiManager().hideSideMenus(),(0,m.$k)((0,o.G)("stf-menu"),1e3),this.isMenuButtonEnabled=!0,this.setBottomIconToSelected()}}Ta.PLUGIN_NAME="Short Term Fences";const ka=new Ta;var Aa=i(3067);class Ia extends u.c{constructor(){super("Social Media"),this.dependencies=["Top Menu"]}addHtml(){super.addHtml(),r.bD.register({event:"uiManagerFinal",cbName:this.PLUGIN_NAME,cb:Ia.uiManagerFinal_})}static uiManagerFinal_(){const e=document.createElement("li");e.innerHTML=r.bD.html`
          <a id="github-share1" class="top-menu-btns" rel="noreferrer" href="https://github.com/thkruz/keeptrack.space/" target="_blank">
            <img
            width="22"
            height="22"
            style="margin-top: 1px;"
            src="${Aa}"
            />
          </a>
          `,(0,o.G)("nav-mobile2").insertBefore(e,(0,o.G)("nav-mobile2").firstChild)}}const Na=new Ia;var Ga=i(6492),Pa=i(4427);class Oa extends u.c{constructor(){super(Oa.PLUGIN_NAME),this.isRotateL=!0,this.isRotateR=!1,this.isRotateU=!1,this.isRotateD=!1,this.bottomIconElementName="video-director-icon",this.bottomIconImg=Sa,this.bottomIconLabel="Video Director",this.sideMenuElementName="video-director-menu",this.sideMenuElementHtml=r.bD.html`
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
  </div>`,this.helpTitle="Settings Menu",this.helpBody=r.bD.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),r.bD.register({event:r.RL.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,o.G)("video-director-form").addEventListener("change",Oa.onFormChange),(0,o.G)("video-director-form").addEventListener("submit",Oa.onSubmit),(0,o.G)("video-director-rotate").addEventListener("click",(()=>{var e;null===(e=r.bD.getSoundManager())||void 0===e||e.play("button"),r.bD.getMainCamera().autoRotate(!0)}))}})}static onFormChange(e){var t,i,a;if(null==e)throw new Error("e is undefined");switch(null===(t=e.target)||void 0===t?void 0:t.id){case"video-director-rotateL":case"video-director-rotateR":case"video-director-rotateU":case"video-director-rotateD":case"video-director-panL":case"video-director-panR":case"video-director-panU":case"video-director-panD":case"video-director-zoomIn":case"video-director-zoomOut":(0,o.G)(e.target.id).checked?null===(i=r.bD.getSoundManager())||void 0===i||i.play("toggleOn"):null===(a=r.bD.getSoundManager())||void 0===a||a.play("toggleOff")}(0,o.G)("video-director-selectedColor").checked&&0!==settingsManager.selectedColor[3]?(settingsManager.selectedColorFallback=settingsManager.selectedColor,settingsManager.selectedColor=[0,0,0,0]):settingsManager.selectedColor=settingsManager.selectedColorFallback,settingsManager.autoRotateSpeed=parseFloat((0,o.G)("video-director-rotateSpeed").value),settingsManager.autoPanSpeed=parseFloat((0,o.G)("video-director-panSpeed").value),settingsManager.autoZoomSpeed=parseFloat((0,o.G)("video-director-zoomSpeed").value);const s=(0,o.G)("video-director-rotateL").checked,n=(0,o.G)("video-director-rotateR").checked,l=(0,o.G)("video-director-rotateU").checked,c=(0,o.G)("video-director-rotateD").checked,d=(0,o.G)("video-director-panL").checked,u=(0,o.G)("video-director-panR").checked,p=(0,o.G)("video-director-panU").checked,g=(0,o.G)("video-director-panD").checked,h=(0,o.G)("video-director-zoomIn").checked,m=(0,o.G)("video-director-zoomOut").checked;s&&!settingsManager.isAutoRotateL&&((0,o.G)("video-director-rotateR").checked=!1),n&&!settingsManager.isAutoRotateR&&((0,o.G)("video-director-rotateL").checked=!1),l&&!settingsManager.isAutoRotateU&&((0,o.G)("video-director-rotateD").checked=!1),c&&!settingsManager.isAutoRotateD&&((0,o.G)("video-director-rotateU").checked=!1),d&&!settingsManager.isAutoPanL&&((0,o.G)("video-director-panR").checked=!1),u&&!settingsManager.isAutoPanR&&((0,o.G)("video-director-panL").checked=!1),p&&!settingsManager.isAutoPanU&&((0,o.G)("video-director-panD").checked=!1),g&&!settingsManager.isAutoPanD&&((0,o.G)("video-director-panU").checked=!1),h&&!settingsManager.isAutoZoomIn&&((0,o.G)("video-director-zoomOut").checked=!1),m&&!settingsManager.isAutoZoomOut&&((0,o.G)("video-director-zoomIn").checked=!1)}static onSubmit(e){var t;if(null==e)throw new Error("e is undefined");e.preventDefault(),null===(t=r.bD.getSoundManager())||void 0===t||t.play("button"),settingsManager.isAutoRotateR=(0,o.G)("video-director-rotateR").checked,settingsManager.isAutoRotateL=(0,o.G)("video-director-rotateL").checked,settingsManager.isAutoRotateU=(0,o.G)("video-director-rotateU").checked,settingsManager.isAutoRotateD=(0,o.G)("video-director-rotateD").checked,settingsManager.isAutoPanR=(0,o.G)("video-director-panR").checked,settingsManager.isAutoPanL=(0,o.G)("video-director-panL").checked,settingsManager.isAutoPanU=(0,o.G)("video-director-panU").checked,settingsManager.isAutoPanD=(0,o.G)("video-director-panD").checked,settingsManager.isAutoZoomIn=(0,o.G)("video-director-zoomIn").checked,settingsManager.isAutoZoomOut=(0,o.G)("video-director-zoomOut").checked}}Oa.PLUGIN_NAME="Video Director";const Ra=new Oa;var _a=i(2939),Fa=i(5474);const Ua=(e,t)=>{return i=void 0,a=void 0,n=function*(){null!=t||(t={});try{t.debug&&Dt.x.init();const i=new li.P;i.init(),Pe.I.registerSingleton(Oe.Yv.SelectSatManager,i),t.topMenu&&Fe.t.init(),t.satInfoboxCore&&oi.P.init(),t.updateSelectBoxCore&&Pa.i.init(),t.datetime&&Ct.t.init(),t.social&&Na.init(),t.classificationBar&&mt.init(),t.sensor&&(fa.init(),ga.init(),la.init(),da.init(),na.init()),t.watchlist&&(_a.P.init(),Fa.n.init()),t.nextLaunch&&ii.init(),t.findSat&&$t.init(),t.shortTermFences&&ka.init(),t.orbitReferences&&ci.init(),t.collisions&&ft.init(),t.breakup&&pt.init(),t.debrisScreening&&xt.init(),t.editSat&&_t.init(),t.newLaunch&&qt.init(),t.initialOrbit&&O(),t.missile&&le(),t.stereoMap&&Ga.M.init(),t.sensorFov&&Xi.init(),t.sensorSurv&&Qi.init(),t.satelliteView&&he.init(),t.satelliteFov&&_i.init(),t.planetarium&&tt.init(),t.astronomy&&at.init(),t.nightToggle&&ni.init(),t.dops&&Gt.init(),t.constellations&&Pi.init(),t.countries&&g.init(),t.colorsMenu&&wt.init(),t.screenshot&&Wi.init(),t.launchCalendar&&Yt.init(),t.timeMachine&&La.M.init(),t.photoManager&&Bi.init(),t.screenRecorder&&ji.init(),t.analysis&&Xe.init(),t.plotAnalysis&&vi.init(),t.plotAnalysis&&hi.init(),t.plotAnalysis&&Di.init(),t.plotAnalysis&&ki.init(),t.plotAnalysis&&yi.init(),t.plotAnalysis&&Ci.init(),t.aboutManager&&$e.init(),t.settingsMenu&&Da.init(),t.soundManager&&_e.init(),t.gamepad&&jt.init(),t.videoDirector&&Ra.init(),e.register({event:r.RL.uiManagerFinal,cbName:"core",cb:()=>{Ba(t)}})}catch(e){v.x.info("Error loading core plugins:"+e.message)}},new((s=void 0)||(s=Promise))((function(e,t){function o(e){try{r(n.next(e))}catch(e){t(e)}}function l(e){try{r(n.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(o,l)}r((n=n.apply(i,a||[])).next())}));var i,a,s,n},Ba=e=>{const t=(0,o.G)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",e+"px")}else document.documentElement.style.setProperty("--bottom-menu-height","0px");if(e.topMenu){let e=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(e)&&(e=0),settingsManager.isMobileModeEnabled?document.documentElement.style.setProperty("--top-menu-height",e+17+"px"):document.documentElement.style.setProperty("--top-menu-height",e+22+"px")}(0,o.G)("bottom-icons")&&""==(0,o.G)("bottom-icons").innerText&&((0,o.G)("nav-footer").style.visibility="hidden");const i=(0,o.G)("bottom-icons-container");if(i){const e=i.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",e+"px")}e.aboutManager&&((0,o.G)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"keeptrack.space"!==window.location.hostname&&"www.keeptrack.space"!==window.location.hostname||za(),(0,o.G)("bottom-icons-container").addEventListener("mousewheel",(e=>{e.preventDefault(),((e,t)=>{const i=e.scrollTop+.15*t;e.scrollTop=i})(e.currentTarget,e.deltaY)}),{passive:!1})},za=()=>{const e=document.createElement("script");e.type="text/javascript",e.setAttribute("async","true"),e.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7"),document.documentElement.firstChild.appendChild(e),window.dataLayer=window.dataLayer||[];const t=function(e,t){window.dataLayer.push(arguments)};t("js",new Date),t("config","G-ENHWK6L0X7")}}}]);