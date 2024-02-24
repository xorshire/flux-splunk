"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[27],{71941:(t,e,s)=>{s.r(e),s.d(e,{default:()=>Z});var a=function(){var t=this,e=t._self._c;return e("div",[e("b-card",{attrs:{title:"Welcome to Flux network - The biggest decentralyzed computational network"}},[e("list-entry",{attrs:{title:"Dasboard",data:t.dashboard}}),e("list-entry",{attrs:{title:"Applications",data:t.applications}}),e("list-entry",{attrs:{title:"XDAO",data:t.xdao}}),e("list-entry",{attrs:{title:"Administration",data:t.administration}})],1),"none"===t.privilege?e("b-card",[e("b-card-title",[t._v("Log In")]),e("dl",{staticClass:"row"},[e("dd",{staticClass:"col-sm-4"},[e("b-card-text",{staticClass:"text-center"},[t._v(" Please log in using ")]),e("div",{staticClass:"loginRow"},[e("a",{attrs:{href:`zel:?action=sign&message=${t.loginPhrase}&icon=https%3A%2F%2Fraw.githubusercontent.com%2Frunonflux%2Fflux%2Fmaster%2FzelID.svg&callback=${t.callbackValue}`},on:{click:t.initiateLoginWS}},[e("img",{staticClass:"zelidLogin",attrs:{src:s(94452),alt:"Zel ID",height:"100%",width:"100%"}})]),e("a",{on:{click:t.initSSP}},[e("img",{staticClass:"sspLogin",attrs:{src:"dark"===t.skin?s(56070):s(58962),alt:"SSP",height:"100%",width:"100%"}})])]),e("div",{staticClass:"loginRow"},[e("a",{on:{click:t.initWalletConnect}},[e("img",{staticClass:"walletconnectLogin",attrs:{src:s(47622),alt:"WalletConnect",height:"100%",width:"100%"}})]),e("a",{on:{click:t.initMetamask}},[e("img",{staticClass:"metamaskLogin",attrs:{src:s(28125),alt:"Metamask",height:"100%",width:"100%"}})])])],1),e("dd",{staticClass:"col-sm-8"},[e("b-card-text",{staticClass:"text-center"},[t._v(" or sign the following message with any ZelID / SSP Wallet ID / Bitcoin / Ethereum address ")]),e("br"),e("br"),e("b-form",{staticClass:"mx-5",on:{submit:function(t){t.preventDefault()}}},[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Message","label-for":"h-message","label-cols-md":"3"}},[e("b-form-input",{attrs:{id:"h-message",placeholder:"Insert Login Phrase"},model:{value:t.loginForm.loginPhrase,callback:function(e){t.$set(t.loginForm,"loginPhrase",e)},expression:"loginForm.loginPhrase"}})],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Address","label-for":"h-address","label-cols-md":"3"}},[e("b-form-input",{attrs:{id:"h-address",placeholder:"Insert ZelID or Bitcoin address"},model:{value:t.loginForm.zelid,callback:function(e){t.$set(t.loginForm,"zelid",e)},expression:"loginForm.zelid"}})],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Signature","label-for":"h-signature","label-cols-md":"3"}},[e("b-form-input",{attrs:{id:"h-signature",placeholder:"Insert Signature"},model:{value:t.loginForm.signature,callback:function(e){t.$set(t.loginForm,"signature",e)},expression:"loginForm.signature"}})],1)],1),e("b-col",{attrs:{"offset-md":"5"}},[e("b-button",{staticClass:"mr-1",attrs:{type:"submit",variant:"primary"},on:{click:t.login}},[t._v(" Login ")])],1)],1)],1)],1)])],1):t._e()],1)},o=[],r=s(86855),n=s(64206),i=s(49379),l=s(15193),c=s(54909),g=s(50725),u=s(26253),d=s(22183),h=s(46709),f=s(20629),p=s(38511),m=s(62693),w=s(94145),b=s(34547),y=s(51748),v=s(37307),P=s(34369),x=s(48764)["lW"];const k="df787edc6839c7de49d527bba9199eaa",S={projectId:k,metadata:{name:"Flux Cloud",description:"Flux, Your Gateway to a Decentralized World",url:"https://home.runonflux.io",icons:["https://home.runonflux.io/img/logo.png"]}},O=new m.u(S),C={enableDebug:!0},T=new w.MetaMaskSDK(C);let z;const j=s(80129),F=s(58971),M={components:{BCard:r._,BCardText:n.j,BCardTitle:i._,BButton:l.T,BForm:c.e,BCol:g.l,BRow:u.T,BFormInput:d.e,BFormGroup:h.x,ListEntry:y.Z,ToastificationContent:b.Z},data(){return{dashboard:"Check our network information, resources available or a map with our infrastructure location.",xdao:"See the list of change proposals to our network, create new ones, vote.",applications:"Marketplace, register your own app, manage your active apps.",administration:"Tools for the infrastructe administrator",websocket:null,errorMessage:"",loginPhrase:"",loginForm:{zelid:"",signature:"",loginPhrase:""},signClient:null}},computed:{...(0,f.rn)("flux",["userconfig","config","privilege"]),skin(){return(0,v.Z)().skin.value},callbackValue(){const t=this.backendURL(),e=`${t}/id/verifylogin`;return encodeURI(e)}},mounted(){this.getZelIdLoginPhrase(),this.initMMSDK()},methods:{async initMMSDK(){try{await T.init(),z=T.getProvider()}catch(t){console.log(t)}},backendURL(){const{protocol:t,hostname:e,port:s}=window.location;let a="";a+=t,a+="//";const o=/[A-Za-z]/g;if(e.match(o)){const t=e.split(".");t[0]="api",a+=t.join(".")}else{if("string"===typeof e&&this.$store.commit("flux/setUserIp",e),+s>16100){const t=+s+1;this.$store.commit("flux/setFluxPort",t)}a+=e,a+=":",a+=this.config.apiPort}return F.get("backendURL")||a},initiateLoginWS(){const t=this;let e=this.backendURL();e=e.replace("https://","wss://"),e=e.replace("http://","ws://");const s=`${e}/ws/id/${this.loginPhrase}`,a=new WebSocket(s);this.websocket=a,a.onopen=e=>{t.onOpen(e)},a.onclose=e=>{t.onClose(e)},a.onmessage=e=>{t.onMessage(e)},a.onerror=e=>{t.onError(e)}},onError(t){console.log(t)},onMessage(t){const e=j.parse(t.data);if(console.log(e),"success"===e.status&&e.data){const t={zelid:e.data.zelid,signature:e.data.signature,loginPhrase:e.data.loginPhrase};this.$store.commit("flux/setPrivilege",e.data.privilage),this.$store.commit("flux/setZelid",t.zelid),localStorage.setItem("zelidauth",j.stringify(t)),this.showToast("success",e.data.message)}console.log(e),console.log(t)},onClose(t){console.log(t)},onOpen(t){console.log(t)},showToast(t,e){this.$toast({component:b.Z,props:{title:e,icon:"BellIcon",variant:t}})},getZelIdLoginPhrase(){P.Z.loginPhrase().then((t=>{console.log(t),"error"===t.data.status?this.getEmergencyLoginPhrase():(this.loginPhrase=t.data.data,this.loginForm.loginPhrase=t.data.data)})).catch((t=>{console.log(t),this.showToast("danger",t)}))},getEmergencyLoginPhrase(){P.Z.emergencyLoginPhrase().then((t=>{console.log(t),"error"===t.data.status?this.showToast("danger",t.data.data.message):(this.loginPhrase=t.data.data,this.loginForm.loginPhrase=t.data.data)})).catch((t=>{console.log(t),this.showToast("danger",t)}))},getVariant(t){return"error"===t?"danger":"message"===t?"info":t},login(){console.log(this.loginForm),P.Z.verifyLogin(this.loginForm).then((t=>{if(console.log(t),"success"===t.data.status){const e={zelid:this.loginForm.zelid,signature:this.loginForm.signature,loginPhrase:this.loginForm.loginPhrase};this.$store.commit("flux/setPrivilege",t.data.data.privilage),this.$store.commit("flux/setZelid",e.zelid),localStorage.setItem("zelidauth",j.stringify(e)),this.showToast("success",t.data.data.message)}else this.showToast(this.getVariant(t.data.status),t.data.data.message||t.data.data)})).catch((t=>{console.log(t),this.showToast("danger",t.toString())}))},async onSessionConnect(t){console.log(t);const e=await this.signClient.request({topic:t.topic,chainId:"eip155:1",request:{method:"personal_sign",params:[this.loginPhrase,t.namespaces.eip155.accounts[0].split(":")[2]]}});console.log(e);const s={zelid:t.namespaces.eip155.accounts[0].split(":")[2],signature:e,loginPhrase:this.loginPhrase},a=await P.Z.verifyLogin(s);if(console.log(a),"success"===a.data.status){const t=s;this.$store.commit("flux/setPrivilege",a.data.data.privilage),this.$store.commit("flux/setZelid",t.zelid),localStorage.setItem("zelidauth",j.stringify(t)),this.showToast("success",a.data.data.message)}else this.showToast(this.getVariant(a.data.status),a.data.data.message||a.data.data)},onSessionUpdate(t){console.log(t)},async initWalletConnect(){const t=this;try{const e=await p.ZP.init(S);this.signClient=e,e.on("session_event",(({event:t})=>{console.log(t)})),e.on("session_update",(({topic:s,params:a})=>{const{namespaces:o}=a,r=e.session.get(s),n={...r,namespaces:o};t.onSessionUpdate(n)})),e.on("session_delete",(()=>{}));const{uri:s,approval:a}=await e.connect({requiredNamespaces:{eip155:{methods:["personal_sign"],chains:["eip155:1"],events:["chainChanged","accountsChanged"]}}});if(s){O.openModal({uri:s});const t=await a();this.onSessionConnect(t),O.closeModal()}}catch(e){console.error(e),this.showToast("danger",e.message)}},async siwe(t,e){try{const s=`0x${x.from(t,"utf8").toString("hex")}`,a=await z.request({method:"personal_sign",params:[s,e]});console.log(a);const o={zelid:e,signature:a,loginPhrase:this.loginPhrase},r=await P.Z.verifyLogin(o);if(console.log(r),"success"===r.data.status){const t=o;this.$store.commit("flux/setPrivilege",r.data.data.privilage),this.$store.commit("flux/setZelid",t.zelid),localStorage.setItem("zelidauth",j.stringify(t)),this.showToast("success",r.data.data.message)}else this.showToast(this.getVariant(r.data.status),r.data.data.message||r.data.data)}catch(s){console.error(s),this.showToast("danger",s.message)}},async initMetamask(){try{if(!z)return void this.showToast("danger","Metamask not detected");let t;if(z&&!z.selectedAddress){const e=await z.request({method:"eth_requestAccounts",params:[]});console.log(e),t=e[0]}else t=z.selectedAddress;this.siwe(this.loginPhrase,t)}catch(t){this.showToast("danger",t.message)}},async initSSP(){try{if(!window.ssp)return void this.showToast("danger","SSP Wallet not installed");const t=await window.ssp.request("sspwid_sign_message",{message:this.loginPhrase});if("ERROR"===t.status)throw new Error(t.data||t.result);const e={zelid:t.address,signature:t.signature,loginPhrase:this.loginPhrase},s=await P.Z.verifyLogin(e);if(console.log(s),"success"===s.data.status){const t=e;this.$store.commit("flux/setPrivilege",s.data.data.privilage),this.$store.commit("flux/setZelid",t.zelid),localStorage.setItem("zelidauth",j.stringify(t)),this.showToast("success",s.data.data.message)}else this.showToast(this.getVariant(s.data.status),s.data.data.message||s.data.data)}catch(t){this.showToast("danger",t.message)}}}},L=M;var E=s(1001),I=(0,E.Z)(L,a,o,!1,null,null,null);const Z=I.exports},84328:(t,e,s)=>{var a=s(65290),o=s(27578),r=s(6310),n=function(t){return function(e,s,n){var i,l=a(e),c=r(l),g=o(n,c);if(t&&s!==s){while(c>g)if(i=l[g++],i!==i)return!0}else for(;c>g;g++)if((t||g in l)&&l[g]===s)return t||g||0;return!t&&-1}};t.exports={includes:n(!0),indexOf:n(!1)}},5649:(t,e,s)=>{var a=s(67697),o=s(92297),r=TypeError,n=Object.getOwnPropertyDescriptor,i=a&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=i?function(t,e){if(o(t)&&!n(t,"length").writable)throw new r("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},8758:(t,e,s)=>{var a=s(36812),o=s(19152),r=s(82474),n=s(72560);t.exports=function(t,e,s){for(var i=o(e),l=n.f,c=r.f,g=0;g<i.length;g++){var u=i[g];a(t,u)||s&&a(s,u)||l(t,u,c(e,u))}}},55565:t=>{var e=TypeError,s=9007199254740991;t.exports=function(t){if(t>s)throw e("Maximum allowed index exceeded");return t}},72739:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79989:(t,e,s)=>{var a=s(19037),o=s(82474).f,r=s(75773),n=s(11880),i=s(95014),l=s(8758),c=s(35266);t.exports=function(t,e){var s,g,u,d,h,f,p=t.target,m=t.global,w=t.stat;if(g=m?a:w?a[p]||i(p,{}):(a[p]||{}).prototype,g)for(u in e){if(h=e[u],t.dontCallGetSet?(f=o(g,u),d=f&&f.value):d=g[u],s=c(m?u:p+(w?".":"#")+u,t.forced),!s&&void 0!==d){if(typeof h==typeof d)continue;l(h,d)}(t.sham||d&&d.sham)&&r(h,"sham",!0),n(g,u,h,t)}}},94413:(t,e,s)=>{var a=s(68844),o=s(3689),r=s(6648),n=Object,i=a("".split);t.exports=o((function(){return!n("z").propertyIsEnumerable(0)}))?function(t){return"String"===r(t)?i(t,""):n(t)}:n},92297:(t,e,s)=>{var a=s(6648);t.exports=Array.isArray||function(t){return"Array"===a(t)}},35266:(t,e,s)=>{var a=s(3689),o=s(69985),r=/#|\.prototype\./,n=function(t,e){var s=l[i(t)];return s===g||s!==c&&(o(e)?a(e):!!e)},i=n.normalize=function(t){return String(t).replace(r,".").toLowerCase()},l=n.data={},c=n.NATIVE="N",g=n.POLYFILL="P";t.exports=n},6310:(t,e,s)=>{var a=s(43126);t.exports=function(t){return a(t.length)}},58828:t=>{var e=Math.ceil,s=Math.floor;t.exports=Math.trunc||function(t){var a=+t;return(a>0?s:e)(a)}},82474:(t,e,s)=>{var a=s(67697),o=s(22615),r=s(49556),n=s(75684),i=s(65290),l=s(18360),c=s(36812),g=s(68506),u=Object.getOwnPropertyDescriptor;e.f=a?u:function(t,e){if(t=i(t),e=l(e),g)try{return u(t,e)}catch(s){}if(c(t,e))return n(!o(r.f,t,e),t[e])}},72741:(t,e,s)=>{var a=s(54948),o=s(72739),r=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},7518:(t,e)=>{e.f=Object.getOwnPropertySymbols},54948:(t,e,s)=>{var a=s(68844),o=s(36812),r=s(65290),n=s(84328).indexOf,i=s(57248),l=a([].push);t.exports=function(t,e){var s,a=r(t),c=0,g=[];for(s in a)!o(i,s)&&o(a,s)&&l(g,s);while(e.length>c)o(a,s=e[c++])&&(~n(g,s)||l(g,s));return g}},49556:(t,e)=>{var s={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,o=a&&!s.call({1:2},1);e.f=o?function(t){var e=a(this,t);return!!e&&e.enumerable}:s},19152:(t,e,s)=>{var a=s(76058),o=s(68844),r=s(72741),n=s(7518),i=s(85027),l=o([].concat);t.exports=a("Reflect","ownKeys")||function(t){var e=r.f(i(t)),s=n.f;return s?l(e,s(t)):e}},27578:(t,e,s)=>{var a=s(68700),o=Math.max,r=Math.min;t.exports=function(t,e){var s=a(t);return s<0?o(s+e,0):r(s,e)}},65290:(t,e,s)=>{var a=s(94413),o=s(74684);t.exports=function(t){return a(o(t))}},68700:(t,e,s)=>{var a=s(58828);t.exports=function(t){var e=+t;return e!==e||0===e?0:a(e)}},43126:(t,e,s)=>{var a=s(68700),o=Math.min;t.exports=function(t){return t>0?o(a(t),9007199254740991):0}},70560:(t,e,s)=>{var a=s(79989),o=s(90690),r=s(6310),n=s(5649),i=s(55565),l=s(3689),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),g=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},u=c||!g();a({target:"Array",proto:!0,arity:1,forced:u},{push:function(t){var e=o(this),s=r(e),a=arguments.length;i(s+a);for(var l=0;l<a;l++)e[s]=arguments[l],s++;return n(e,s),s}})},17832:(t,e,s)=>{s.d(e,{sj:()=>f,CO:()=>m,Ld:()=>p});Symbol();const a=Symbol();const o=Object.getPrototypeOf,r=new WeakMap,n=t=>t&&(r.has(t)?r.get(t):o(t)===Object.prototype||o(t)===Array.prototype),i=t=>n(t)&&t[a]||null,l=(t,e=!0)=>{r.set(t,e)},c=t=>"object"===typeof t&&null!==t,g=new WeakMap,u=new WeakSet,d=(t=Object.is,e=((t,e)=>new Proxy(t,e)),s=(t=>c(t)&&!u.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer)),a=(t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}}),o=new WeakMap,r=((t,e,s=a)=>{const n=o.get(t);if((null==n?void 0:n[0])===e)return n[1];const i=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return l(i,!0),o.set(t,[e,i]),Reflect.ownKeys(t).forEach((e=>{if(Object.getOwnPropertyDescriptor(i,e))return;const a=Reflect.get(t,e),o={value:a,enumerable:!0,configurable:!0};if(u.has(a))l(a,!1);else if(a instanceof Promise)delete o.value,o.get=()=>s(a);else if(g.has(a)){const[t,e]=g.get(a);o.value=r(t,e(),s)}Object.defineProperty(i,e,o)})),Object.preventExtensions(i)}),n=new WeakMap,d=[1,1],h=(a=>{if(!c(a))throw new Error("object required");const o=n.get(a);if(o)return o;let l=d[0];const f=new Set,p=(t,e=++d[0])=>{l!==e&&(l=e,f.forEach((s=>s(t,e))))};let m=d[1];const w=(t=++d[1])=>(m===t||f.size||(m=t,y.forEach((([e])=>{const s=e[1](t);s>l&&(l=s)}))),l),b=t=>(e,s)=>{const a=[...e];a[1]=[t,...a[1]],p(a,s)},y=new Map,v=(t,e)=>{if(y.has(t))throw new Error("prop listener already exists");if(f.size){const s=e[3](b(t));y.set(t,[e,s])}else y.set(t,[e])},P=t=>{var e;const s=y.get(t);s&&(y.delete(t),null==(e=s[1])||e.call(s))},x=t=>{f.add(t),1===f.size&&y.forEach((([t,e],s)=>{if(e)throw new Error("remove already exists");const a=t[3](b(s));y.set(s,[t,a])}));const e=()=>{f.delete(t),0===f.size&&y.forEach((([t,e],s)=>{e&&(e(),y.set(s,[t]))}))};return e},k=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),S={deleteProperty(t,e){const s=Reflect.get(t,e);P(e);const a=Reflect.deleteProperty(t,e);return a&&p(["delete",[e],s]),a},set(e,a,o,r){const l=Reflect.has(e,a),d=Reflect.get(e,a,r);if(l&&(t(d,o)||n.has(o)&&t(d,n.get(o))))return!0;P(a),c(o)&&(o=i(o)||o);let f=o;if(o instanceof Promise)o.then((t=>{o.status="fulfilled",o.value=t,p(["resolve",[a],t])})).catch((t=>{o.status="rejected",o.reason=t,p(["reject",[a],t])}));else{!g.has(o)&&s(o)&&(f=h(o));const t=!u.has(f)&&g.get(f);t&&v(a,t)}return Reflect.set(e,a,f,r),p(["set",[a],o,d]),!0}},O=e(k,S);n.set(a,O);const C=[k,w,r,x];return g.set(O,C),Reflect.ownKeys(a).forEach((t=>{const e=Object.getOwnPropertyDescriptor(a,t);"value"in e&&(O[t]=a[t],delete e.value,delete e.writable),Object.defineProperty(k,t,e)})),O}))=>[h,g,u,t,e,s,a,o,r,n,d],[h]=d();function f(t={}){return h(t)}function p(t,e,s){const a=g.get(t);let o;a||console.warn("Please use proxy object");const r=[],n=a[3];let i=!1;const l=t=>{r.push(t),s?e(r.splice(0)):o||(o=Promise.resolve().then((()=>{o=void 0,i&&e(r.splice(0))})))},c=n(l);return i=!0,()=>{i=!1,c()}}function m(t,e){const s=g.get(t);s||console.warn("Please use proxy object");const[a,o,r]=s;return r(a,o(),e)}}}]);