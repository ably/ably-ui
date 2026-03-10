import{j as r}from"./jsx-runtime-dqWd7f8W.js";import{r as s}from"./iframe-CNWbBzxM.js";import{C as At,p as Kn}from"./Code-CnQlApky.js";import{c as se}from"./cn-C1g8Q-pJ.js";import{I as z}from"./Icon-f8KVpqAy.js";import{r as Dt}from"./index-B9jjmq9N.js";import{u as ee,P as q,c as F,a as le,b as bt,d as Hn,e as Vn}from"./index-CAR7x13f.js";import{u as Wn,c as Bn}from"./index-DPbv_9JE.js";import{V as Fn,D as zn}from"./index-DGYFz5_A.js";import{u as ct}from"./index-BtqhwZnh.js";import{u as St}from"./index-BVIJaol3.js";import{R as qn,A as Un,P as Yn,c as Ot,C as $n,a as Gn,T as Mt}from"./Tooltip-rc-HzwM-.js";import{u as Xn}from"./index-CnYVMIGF.js";import{S as Kt}from"./SegmentedControl-AmmVGau1.js";import{B as Jn}from"./Badge-BoGVwmAB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fhXCZ0ZR.js";import"./index-CRdXOfTj.js";const Ht=["realtime","rest","client","agent"],Ct={javascript:{label:"JavaScript",icon:"icon-tech-javascript",syntaxHighlighterKey:"javascript"},typescript:{label:"TypeScript",icon:"icon-tech-typescript",syntaxHighlighterKey:"typescript"},java:{label:"Java",icon:"icon-tech-java",syntaxHighlighterKey:"java"},kotlin:{label:"Kotlin",icon:"icon-tech-kotlin",syntaxHighlighterKey:"kotlin"},python:{label:"Python",icon:"icon-tech-python",syntaxHighlighterKey:"python"},csharp:{label:"C#",icon:"icon-tech-csharp",syntaxHighlighterKey:"csharp"},go:{label:"Go",icon:"icon-tech-go",syntaxHighlighterKey:"go"},ruby:{label:"Ruby",icon:"icon-tech-ruby",syntaxHighlighterKey:"ruby"},php:{label:"PHP",icon:"icon-tech-php",syntaxHighlighterKey:"php"},nodejs:{label:"Node.js",icon:"icon-tech-nodejs",syntaxHighlighterKey:"javascript"},react:{label:"React",icon:"icon-tech-react",syntaxHighlighterKey:"javascript"},html:{label:"HTML",icon:"icon-tech-web",syntaxHighlighterKey:"xml"},shell:{label:"Shell",icon:"icon-tech-web",syntaxHighlighterKey:"bash"},json:{label:"JSON",icon:"icon-tech-json",syntaxHighlighterKey:"json"},laravel:{label:"Laravel",icon:"icon-tech-laravel-broadcast",syntaxHighlighterKey:"php"},xml:{label:"XML",icon:"icon-tech-web",syntaxHighlighterKey:"xml"},sql:{label:"SQL",icon:"icon-tech-postgres",syntaxHighlighterKey:"sql"},swift:{label:"Swift",icon:"icon-tech-swift",syntaxHighlighterKey:"swift"},cpp:{label:"C++",icon:"icon-tech-web",syntaxHighlighterKey:"cpp"},dart:{label:"Dart",icon:"icon-tech-web",syntaxHighlighterKey:"dart"},objc:{label:"Objective-C",icon:"icon-tech-objectivec",syntaxHighlighterKey:"objc"},android:{label:"Android",icon:"icon-tech-android-full",syntaxHighlighterKey:"kotlin"},flutter:{label:"Flutter",icon:"icon-tech-flutter",syntaxHighlighterKey:"dart"}},de=e=>{for(const t of Ht){const n=`${t}_`;if(e.startsWith(n))return e.slice(n.length)}return e},ne=e=>{const t=de(e).toLowerCase();return Ct[t]?Ct[t]:{label:e,icon:"icon-tech-web",syntaxHighlighterKey:e}};function wt(e,[t,n]){return Math.min(n,Math.max(t,e))}var tt=0;function Zn(){s.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??jt()),document.body.insertAdjacentElement("beforeend",e[1]??jt()),tt++,()=>{tt===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),tt--}},[])}function jt(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var nt="focusScope.autoFocusOnMount",rt="focusScope.autoFocusOnUnmount",Nt={bubbles:!1,cancelable:!0},Qn="FocusScope",Vt=s.forwardRef((e,t)=>{const{loop:n=!1,trapped:a=!1,onMountAutoFocus:l,onUnmountAutoFocus:c,...i}=e,[o,d]=s.useState(null),h=ct(l),b=ct(c),x=s.useRef(null),w=ee(t,u=>d(u)),S=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(a){let u=function(m){if(S.paused||!o)return;const T=m.target;o.contains(T)?x.current=T:oe(x.current,{select:!0})},g=function(m){if(S.paused||!o)return;const T=m.relatedTarget;T!==null&&(o.contains(T)||oe(x.current,{select:!0}))},f=function(m){if(document.activeElement===document.body)for(const j of m)j.removedNodes.length>0&&oe(o)};document.addEventListener("focusin",u),document.addEventListener("focusout",g);const p=new MutationObserver(f);return o&&p.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",g),p.disconnect()}}},[a,o,S.paused]),s.useEffect(()=>{if(o){kt.add(S);const u=document.activeElement;if(!o.contains(u)){const f=new CustomEvent(nt,Nt);o.addEventListener(nt,h),o.dispatchEvent(f),f.defaultPrevented||(er(sr(Wt(o)),{select:!0}),document.activeElement===u&&oe(o))}return()=>{o.removeEventListener(nt,h),setTimeout(()=>{const f=new CustomEvent(rt,Nt);o.addEventListener(rt,b),o.dispatchEvent(f),f.defaultPrevented||oe(u??document.body,{select:!0}),o.removeEventListener(rt,b),kt.remove(S)},0)}}},[o,h,b,S]);const E=s.useCallback(u=>{if(!n&&!a||S.paused)return;const g=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,f=document.activeElement;if(g&&f){const p=u.currentTarget,[m,T]=tr(p);m&&T?!u.shiftKey&&f===T?(u.preventDefault(),n&&oe(m,{select:!0})):u.shiftKey&&f===m&&(u.preventDefault(),n&&oe(T,{select:!0})):f===p&&u.preventDefault()}},[n,a,S.paused]);return r.jsx(q.div,{tabIndex:-1,...i,ref:w,onKeyDown:E})});Vt.displayName=Qn;function er(e,{select:t=!1}={}){const n=document.activeElement;for(const a of e)if(oe(a,{select:t}),document.activeElement!==n)return}function tr(e){const t=Wt(e),n=Et(t,e),a=Et(t.reverse(),e);return[n,a]}function Wt(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const l=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||l?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Et(e,t){for(const n of e)if(!nr(n,{upTo:t}))return n}function nr(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function rr(e){return e instanceof HTMLInputElement&&"select"in e}function oe(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&rr(e)&&t&&e.select()}}var kt=ar();function ar(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=Pt(e,t),e.unshift(t)},remove(t){e=Pt(e,t),e[0]?.resume()}}}function Pt(e,t){const n=[...e],a=n.indexOf(t);return a!==-1&&n.splice(a,1),n}function sr(e){return e.filter(t=>t.tagName!=="A")}var or=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},me=new WeakMap,Ve=new WeakMap,We={},at=0,Bt=function(e){return e&&(e.host||Bt(e.parentNode))},lr=function(e,t){return t.map(function(n){if(e.contains(n))return n;var a=Bt(n);return a&&e.contains(a)?a:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},ir=function(e,t,n,a){var l=lr(t,Array.isArray(e)?e:[e]);We[n]||(We[n]=new WeakMap);var c=We[n],i=[],o=new Set,d=new Set(l),h=function(x){!x||o.has(x)||(o.add(x),h(x.parentNode))};l.forEach(h);var b=function(x){!x||d.has(x)||Array.prototype.forEach.call(x.children,function(w){if(o.has(w))b(w);else try{var S=w.getAttribute(a),E=S!==null&&S!=="false",u=(me.get(w)||0)+1,g=(c.get(w)||0)+1;me.set(w,u),c.set(w,g),i.push(w),u===1&&E&&Ve.set(w,!0),g===1&&w.setAttribute(n,"true"),E||w.setAttribute(a,"true")}catch(f){console.error("aria-hidden: cannot operate on ",w,f)}})};return b(t),o.clear(),at++,function(){i.forEach(function(x){var w=me.get(x)-1,S=c.get(x)-1;me.set(x,w),c.set(x,S),w||(Ve.has(x)||x.removeAttribute(a),Ve.delete(x)),S||x.removeAttribute(n)}),at--,at||(me=new WeakMap,me=new WeakMap,Ve=new WeakMap,We={})}},cr=function(e,t,n){n===void 0&&(n="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),l=or(e);return l?(a.push.apply(a,Array.from(l.querySelectorAll("[aria-live], script"))),ir(a,l,n,"aria-hidden")):function(){return null}},re=function(){return re=Object.assign||function(t){for(var n,a=1,l=arguments.length;a<l;a++){n=arguments[a];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},re.apply(this,arguments)};function Ft(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n}function ur(e,t,n){if(n||arguments.length===2)for(var a=0,l=t.length,c;a<l;a++)(c||!(a in t))&&(c||(c=Array.prototype.slice.call(t,0,a)),c[a]=t[a]);return e.concat(c||Array.prototype.slice.call(t))}var qe="right-scroll-bar-position",Ue="width-before-scroll-bar",dr="with-scroll-bars-hidden",pr="--removed-body-scroll-bar-size";function st(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function gr(e,t){var n=s.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(a){var l=n.value;l!==a&&(n.value=a,n.callback(a,l))}}}})[0];return n.callback=t,n.facade}var hr=typeof window<"u"?s.useLayoutEffect:s.useEffect,Tt=new WeakMap;function mr(e,t){var n=gr(null,function(a){return e.forEach(function(l){return st(l,a)})});return hr(function(){var a=Tt.get(n);if(a){var l=new Set(a),c=new Set(e),i=n.current;l.forEach(function(o){c.has(o)||st(o,null)}),c.forEach(function(o){l.has(o)||st(o,i)})}Tt.set(n,e)},[e]),n}function fr(e){return e}function vr(e,t){t===void 0&&(t=fr);var n=[],a=!1,l={read:function(){if(a)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var i=t(c,a);return n.push(i),function(){n=n.filter(function(o){return o!==i})}},assignSyncMedium:function(c){for(a=!0;n.length;){var i=n;n=[],i.forEach(c)}n={push:function(o){return c(o)},filter:function(){return n}}},assignMedium:function(c){a=!0;var i=[];if(n.length){var o=n;n=[],o.forEach(c),i=n}var d=function(){var b=i;i=[],b.forEach(c)},h=function(){return Promise.resolve().then(d)};h(),n={push:function(b){i.push(b),h()},filter:function(b){return i=i.filter(b),n}}}};return l}function xr(e){e===void 0&&(e={});var t=vr(null);return t.options=re({async:!0,ssr:!1},e),t}var zt=function(e){var t=e.sideCar,n=Ft(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw new Error("Sidecar medium not found");return s.createElement(a,re({},n))};zt.isSideCarExport=!0;function Sr(e,t){return e.useMedium(t),zt}var qt=xr(),ot=function(){},Xe=s.forwardRef(function(e,t){var n=s.useRef(null),a=s.useState({onScrollCapture:ot,onWheelCapture:ot,onTouchMoveCapture:ot}),l=a[0],c=a[1],i=e.forwardProps,o=e.children,d=e.className,h=e.removeScrollBar,b=e.enabled,x=e.shards,w=e.sideCar,S=e.noRelative,E=e.noIsolation,u=e.inert,g=e.allowPinchZoom,f=e.as,p=f===void 0?"div":f,m=e.gapMode,T=Ft(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),j=w,H=mr([n,t]),P=re(re({},T),l);return s.createElement(s.Fragment,null,b&&s.createElement(j,{sideCar:qt,removeScrollBar:h,shards:x,noRelative:S,noIsolation:E,inert:u,setCallbacks:c,allowPinchZoom:!!g,lockRef:n,gapMode:m}),i?s.cloneElement(s.Children.only(o),re(re({},P),{ref:H})):s.createElement(p,re({},P,{className:d,ref:H}),o))});Xe.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Xe.classNames={fullWidth:Ue,zeroRight:qe};var yr=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function br(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=yr();return t&&e.setAttribute("nonce",t),e}function Cr(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function wr(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var jr=function(){var e=0,t=null;return{add:function(n){e==0&&(t=br())&&(Cr(t,n),wr(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Nr=function(){var e=jr();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ut=function(){var e=Nr(),t=function(n){var a=n.styles,l=n.dynamic;return e(a,l),null};return t},Er={left:0,top:0,right:0,gap:0},lt=function(e){return parseInt(e||"",10)||0},kr=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],a=t[e==="padding"?"paddingTop":"marginTop"],l=t[e==="padding"?"paddingRight":"marginRight"];return[lt(n),lt(a),lt(l)]},Pr=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Er;var t=kr(e),n=document.documentElement.clientWidth,a=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,a-n+t[2]-t[0])}},Tr=Ut(),xe="data-scroll-locked",Ir=function(e,t,n,a){var l=e.left,c=e.top,i=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(dr,` {
   overflow: hidden `).concat(a,`;
   padding-right: `).concat(o,"px ").concat(a,`;
  }
  body[`).concat(xe,`] {
    overflow: hidden `).concat(a,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(a,";"),n==="margin"&&`
    padding-left: `.concat(l,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(a,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(a,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(qe,` {
    right: `).concat(o,"px ").concat(a,`;
  }
  
  .`).concat(Ue,` {
    margin-right: `).concat(o,"px ").concat(a,`;
  }
  
  .`).concat(qe," .").concat(qe,` {
    right: 0 `).concat(a,`;
  }
  
  .`).concat(Ue," .").concat(Ue,` {
    margin-right: 0 `).concat(a,`;
  }
  
  body[`).concat(xe,`] {
    `).concat(pr,": ").concat(o,`px;
  }
`)},It=function(){var e=parseInt(document.body.getAttribute(xe)||"0",10);return isFinite(e)?e:0},_r=function(){s.useEffect(function(){return document.body.setAttribute(xe,(It()+1).toString()),function(){var e=It()-1;e<=0?document.body.removeAttribute(xe):document.body.setAttribute(xe,e.toString())}},[])},Lr=function(e){var t=e.noRelative,n=e.noImportant,a=e.gapMode,l=a===void 0?"margin":a;_r();var c=s.useMemo(function(){return Pr(l)},[l]);return s.createElement(Tr,{styles:Ir(c,!t,l,n?"":"!important")})},ut=!1;if(typeof window<"u")try{var Be=Object.defineProperty({},"passive",{get:function(){return ut=!0,!0}});window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch{ut=!1}var fe=ut?{passive:!1}:!1,Rr=function(e){return e.tagName==="TEXTAREA"},Yt=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Rr(e)&&n[t]==="visible")},Ar=function(e){return Yt(e,"overflowY")},Dr=function(e){return Yt(e,"overflowX")},_t=function(e,t){var n=t.ownerDocument,a=t;do{typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&(a=a.host);var l=$t(e,a);if(l){var c=Gt(e,a),i=c[1],o=c[2];if(i>o)return!0}a=a.parentNode}while(a&&a!==n.body);return!1},Or=function(e){var t=e.scrollTop,n=e.scrollHeight,a=e.clientHeight;return[t,n,a]},Mr=function(e){var t=e.scrollLeft,n=e.scrollWidth,a=e.clientWidth;return[t,n,a]},$t=function(e,t){return e==="v"?Ar(t):Dr(t)},Gt=function(e,t){return e==="v"?Or(t):Mr(t)},Kr=function(e,t){return e==="h"&&t==="rtl"?-1:1},Hr=function(e,t,n,a,l){var c=Kr(e,window.getComputedStyle(t).direction),i=c*a,o=n.target,d=t.contains(o),h=!1,b=i>0,x=0,w=0;do{if(!o)break;var S=Gt(e,o),E=S[0],u=S[1],g=S[2],f=u-g-c*E;(E||f)&&$t(e,o)&&(x+=f,w+=E);var p=o.parentNode;o=p&&p.nodeType===Node.DOCUMENT_FRAGMENT_NODE?p.host:p}while(!d&&o!==document.body||d&&(t.contains(o)||t===o));return(b&&Math.abs(x)<1||!b&&Math.abs(w)<1)&&(h=!0),h},Fe=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Lt=function(e){return[e.deltaX,e.deltaY]},Rt=function(e){return e&&"current"in e?e.current:e},Vr=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Wr=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Br=0,ve=[];function Fr(e){var t=s.useRef([]),n=s.useRef([0,0]),a=s.useRef(),l=s.useState(Br++)[0],c=s.useState(Ut)[0],i=s.useRef(e);s.useEffect(function(){i.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(l));var u=ur([e.lockRef.current],(e.shards||[]).map(Rt),!0).filter(Boolean);return u.forEach(function(g){return g.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),u.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(l))})}}},[e.inert,e.lockRef.current,e.shards]);var o=s.useCallback(function(u,g){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!i.current.allowPinchZoom;var f=Fe(u),p=n.current,m="deltaX"in u?u.deltaX:p[0]-f[0],T="deltaY"in u?u.deltaY:p[1]-f[1],j,H=u.target,P=Math.abs(m)>Math.abs(T)?"h":"v";if("touches"in u&&P==="h"&&H.type==="range")return!1;var k=window.getSelection(),W=k&&k.anchorNode,G=W?W===H||W.contains(H):!1;if(G)return!1;var K=_t(P,H);if(!K)return!0;if(K?j=P:(j=P==="v"?"h":"v",K=_t(P,H)),!K)return!1;if(!a.current&&"changedTouches"in u&&(m||T)&&(a.current=j),!j)return!0;var V=a.current||j;return Hr(V,g,u,V==="h"?m:T)},[]),d=s.useCallback(function(u){var g=u;if(!(!ve.length||ve[ve.length-1]!==c)){var f="deltaY"in g?Lt(g):Fe(g),p=t.current.filter(function(j){return j.name===g.type&&(j.target===g.target||g.target===j.shadowParent)&&Vr(j.delta,f)})[0];if(p&&p.should){g.cancelable&&g.preventDefault();return}if(!p){var m=(i.current.shards||[]).map(Rt).filter(Boolean).filter(function(j){return j.contains(g.target)}),T=m.length>0?o(g,m[0]):!i.current.noIsolation;T&&g.cancelable&&g.preventDefault()}}},[]),h=s.useCallback(function(u,g,f,p){var m={name:u,delta:g,target:f,should:p,shadowParent:zr(f)};t.current.push(m),setTimeout(function(){t.current=t.current.filter(function(T){return T!==m})},1)},[]),b=s.useCallback(function(u){n.current=Fe(u),a.current=void 0},[]),x=s.useCallback(function(u){h(u.type,Lt(u),u.target,o(u,e.lockRef.current))},[]),w=s.useCallback(function(u){h(u.type,Fe(u),u.target,o(u,e.lockRef.current))},[]);s.useEffect(function(){return ve.push(c),e.setCallbacks({onScrollCapture:x,onWheelCapture:x,onTouchMoveCapture:w}),document.addEventListener("wheel",d,fe),document.addEventListener("touchmove",d,fe),document.addEventListener("touchstart",b,fe),function(){ve=ve.filter(function(u){return u!==c}),document.removeEventListener("wheel",d,fe),document.removeEventListener("touchmove",d,fe),document.removeEventListener("touchstart",b,fe)}},[]);var S=e.removeScrollBar,E=e.inert;return s.createElement(s.Fragment,null,E?s.createElement(c,{styles:Wr(l)}):null,S?s.createElement(Lr,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function zr(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const qr=Sr(qt,Fr);var Xt=s.forwardRef(function(e,t){return s.createElement(Xe,re({},e,{ref:t,sideCar:qr}))});Xt.classNames=Xe.classNames;var Ur=[" ","Enter","ArrowUp","ArrowDown"],Yr=[" ","Enter"],pe="Select",[Je,Ze,$r]=Bn(pe),[Se]=Hn(pe,[$r,Ot]),Qe=Ot(),[Gr,ie]=Se(pe),[Xr,Jr]=Se(pe),Jt=e=>{const{__scopeSelect:t,children:n,open:a,defaultOpen:l,onOpenChange:c,value:i,defaultValue:o,onValueChange:d,dir:h,name:b,autoComplete:x,disabled:w,required:S,form:E}=e,u=Qe(t),[g,f]=s.useState(null),[p,m]=s.useState(null),[T,j]=s.useState(!1),H=Wn(h),[P,k]=bt({prop:a,defaultProp:l??!1,onChange:c,caller:pe}),[W,G]=bt({prop:i,defaultProp:o,onChange:d,caller:pe}),K=s.useRef(null),V=g?E||!!g.closest("form"):!0,[X,U]=s.useState(new Set),J=Array.from(X).map(B=>B.props.value).join(";");return r.jsx(qn,{...u,children:r.jsxs(Gr,{required:S,scope:t,trigger:g,onTriggerChange:f,valueNode:p,onValueNodeChange:m,valueNodeHasChildren:T,onValueNodeHasChildrenChange:j,contentId:St(),value:W,onValueChange:G,open:P,onOpenChange:k,dir:H,triggerPointerDownPosRef:K,disabled:w,children:[r.jsx(Je.Provider,{scope:t,children:r.jsx(Xr,{scope:e.__scopeSelect,onNativeOptionAdd:s.useCallback(B=>{U(Y=>new Set(Y).add(B))},[]),onNativeOptionRemove:s.useCallback(B=>{U(Y=>{const Z=new Set(Y);return Z.delete(B),Z})},[]),children:n})}),V?r.jsxs(Cn,{"aria-hidden":!0,required:S,tabIndex:-1,name:b,autoComplete:x,value:W,onChange:B=>G(B.target.value),disabled:w,form:E,children:[W===void 0?r.jsx("option",{value:""}):null,Array.from(X)]},J):null]})})};Jt.displayName=pe;var Zt="SelectTrigger",Qt=s.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:a=!1,...l}=e,c=Qe(n),i=ie(Zt,n),o=i.disabled||a,d=ee(t,i.onTriggerChange),h=Ze(n),b=s.useRef("touch"),[x,w,S]=jn(u=>{const g=h().filter(m=>!m.disabled),f=g.find(m=>m.value===i.value),p=Nn(g,u,f);p!==void 0&&i.onValueChange(p.value)}),E=u=>{o||(i.onOpenChange(!0),S()),u&&(i.triggerPointerDownPosRef.current={x:Math.round(u.pageX),y:Math.round(u.pageY)})};return r.jsx(Un,{asChild:!0,...c,children:r.jsx(q.button,{type:"button",role:"combobox","aria-controls":i.contentId,"aria-expanded":i.open,"aria-required":i.required,"aria-autocomplete":"none",dir:i.dir,"data-state":i.open?"open":"closed",disabled:o,"data-disabled":o?"":void 0,"data-placeholder":wn(i.value)?"":void 0,...l,ref:d,onClick:F(l.onClick,u=>{u.currentTarget.focus(),b.current!=="mouse"&&E(u)}),onPointerDown:F(l.onPointerDown,u=>{b.current=u.pointerType;const g=u.target;g.hasPointerCapture(u.pointerId)&&g.releasePointerCapture(u.pointerId),u.button===0&&u.ctrlKey===!1&&u.pointerType==="mouse"&&(E(u),u.preventDefault())}),onKeyDown:F(l.onKeyDown,u=>{const g=x.current!=="";!(u.ctrlKey||u.altKey||u.metaKey)&&u.key.length===1&&w(u.key),!(g&&u.key===" ")&&Ur.includes(u.key)&&(E(),u.preventDefault())})})})});Qt.displayName=Zt;var en="SelectValue",tn=s.forwardRef((e,t)=>{const{__scopeSelect:n,className:a,style:l,children:c,placeholder:i="",...o}=e,d=ie(en,n),{onValueNodeHasChildrenChange:h}=d,b=c!==void 0,x=ee(t,d.onValueNodeChange);return le(()=>{h(b)},[h,b]),r.jsx(q.span,{...o,ref:x,style:{pointerEvents:"none"},children:wn(d.value)?r.jsx(r.Fragment,{children:i}):c})});tn.displayName=en;var Zr="SelectIcon",nn=s.forwardRef((e,t)=>{const{__scopeSelect:n,children:a,...l}=e;return r.jsx(q.span,{"aria-hidden":!0,...l,ref:t,children:a||"▼"})});nn.displayName=Zr;var Qr="SelectPortal",rn=e=>r.jsx(Yn,{asChild:!0,...e});rn.displayName=Qr;var ge="SelectContent",an=s.forwardRef((e,t)=>{const n=ie(ge,e.__scopeSelect),[a,l]=s.useState();if(le(()=>{l(new DocumentFragment)},[]),!n.open){const c=a;return c?Dt.createPortal(r.jsx(sn,{scope:e.__scopeSelect,children:r.jsx(Je.Slot,{scope:e.__scopeSelect,children:r.jsx("div",{children:e.children})})}),c):null}return r.jsx(on,{...e,ref:t})});an.displayName=ge;var Q=10,[sn,ce]=Se(ge),ea="SelectContentImpl",ta=Vn("SelectContent.RemoveScroll"),on=s.forwardRef((e,t)=>{const{__scopeSelect:n,position:a="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:c,onPointerDownOutside:i,side:o,sideOffset:d,align:h,alignOffset:b,arrowPadding:x,collisionBoundary:w,collisionPadding:S,sticky:E,hideWhenDetached:u,avoidCollisions:g,...f}=e,p=ie(ge,n),[m,T]=s.useState(null),[j,H]=s.useState(null),P=ee(t,y=>T(y)),[k,W]=s.useState(null),[G,K]=s.useState(null),V=Ze(n),[X,U]=s.useState(!1),J=s.useRef(!1);s.useEffect(()=>{if(m)return cr(m)},[m]),Zn();const B=s.useCallback(y=>{const[_,...O]=V().map(M=>M.ref.current),[L]=O.slice(-1),R=document.activeElement;for(const M of y)if(M===R||(M?.scrollIntoView({block:"nearest"}),M===_&&j&&(j.scrollTop=0),M===L&&j&&(j.scrollTop=j.scrollHeight),M?.focus(),document.activeElement!==R))return},[V,j]),Y=s.useCallback(()=>B([k,m]),[B,k,m]);s.useEffect(()=>{X&&Y()},[X,Y]);const{onOpenChange:Z,triggerPointerDownPosRef:te}=p;s.useEffect(()=>{if(m){let y={x:0,y:0};const _=L=>{y={x:Math.abs(Math.round(L.pageX)-(te.current?.x??0)),y:Math.abs(Math.round(L.pageY)-(te.current?.y??0))}},O=L=>{y.x<=10&&y.y<=10?L.preventDefault():m.contains(L.target)||Z(!1),document.removeEventListener("pointermove",_),te.current=null};return te.current!==null&&(document.addEventListener("pointermove",_),document.addEventListener("pointerup",O,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",O,{capture:!0})}}},[m,Z,te]),s.useEffect(()=>{const y=()=>Z(!1);return window.addEventListener("blur",y),window.addEventListener("resize",y),()=>{window.removeEventListener("blur",y),window.removeEventListener("resize",y)}},[Z]);const[ye,ue]=jn(y=>{const _=V().filter(R=>!R.disabled),O=_.find(R=>R.ref.current===document.activeElement),L=Nn(_,y,O);L&&setTimeout(()=>L.ref.current.focus())}),be=s.useCallback((y,_,O)=>{const L=!J.current&&!O;(p.value!==void 0&&p.value===_||L)&&(W(y),L&&(J.current=!0))},[p.value]),v=s.useCallback(()=>m?.focus(),[m]),C=s.useCallback((y,_,O)=>{const L=!J.current&&!O;(p.value!==void 0&&p.value===_||L)&&K(y)},[p.value]),I=a==="popper"?dt:ln,A=I===dt?{side:o,sideOffset:d,align:h,alignOffset:b,arrowPadding:x,collisionBoundary:w,collisionPadding:S,sticky:E,hideWhenDetached:u,avoidCollisions:g}:{};return r.jsx(sn,{scope:n,content:m,viewport:j,onViewportChange:H,itemRefCallback:be,selectedItem:k,onItemLeave:v,itemTextRefCallback:C,focusSelectedItem:Y,selectedItemText:G,position:a,isPositioned:X,searchRef:ye,children:r.jsx(Xt,{as:ta,allowPinchZoom:!0,children:r.jsx(Vt,{asChild:!0,trapped:p.open,onMountAutoFocus:y=>{y.preventDefault()},onUnmountAutoFocus:F(l,y=>{p.trigger?.focus({preventScroll:!0}),y.preventDefault()}),children:r.jsx(zn,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:c,onPointerDownOutside:i,onFocusOutside:y=>y.preventDefault(),onDismiss:()=>p.onOpenChange(!1),children:r.jsx(I,{role:"listbox",id:p.contentId,"data-state":p.open?"open":"closed",dir:p.dir,onContextMenu:y=>y.preventDefault(),...f,...A,onPlaced:()=>U(!0),ref:P,style:{display:"flex",flexDirection:"column",outline:"none",...f.style},onKeyDown:F(f.onKeyDown,y=>{const _=y.ctrlKey||y.altKey||y.metaKey;if(y.key==="Tab"&&y.preventDefault(),!_&&y.key.length===1&&ue(y.key),["ArrowUp","ArrowDown","Home","End"].includes(y.key)){let L=V().filter(R=>!R.disabled).map(R=>R.ref.current);if(["ArrowUp","End"].includes(y.key)&&(L=L.slice().reverse()),["ArrowUp","ArrowDown"].includes(y.key)){const R=y.target,M=L.indexOf(R);L=L.slice(M+1)}setTimeout(()=>B(L)),y.preventDefault()}})})})})})})});on.displayName=ea;var na="SelectItemAlignedPosition",ln=s.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:a,...l}=e,c=ie(ge,n),i=ce(ge,n),[o,d]=s.useState(null),[h,b]=s.useState(null),x=ee(t,P=>b(P)),w=Ze(n),S=s.useRef(!1),E=s.useRef(!0),{viewport:u,selectedItem:g,selectedItemText:f,focusSelectedItem:p}=i,m=s.useCallback(()=>{if(c.trigger&&c.valueNode&&o&&h&&u&&g&&f){const P=c.trigger.getBoundingClientRect(),k=h.getBoundingClientRect(),W=c.valueNode.getBoundingClientRect(),G=f.getBoundingClientRect();if(c.dir!=="rtl"){const R=G.left-k.left,M=W.left-R,$=P.left-M,ae=P.width+$,Ce=Math.max(ae,k.width),he=window.innerWidth-Q,et=wt(M,[Q,Math.max(Q,he-Ce)]);o.style.minWidth=ae+"px",o.style.left=et+"px"}else{const R=k.right-G.right,M=window.innerWidth-W.right-R,$=window.innerWidth-P.right-M,ae=P.width+$,Ce=Math.max(ae,k.width),he=window.innerWidth-Q,et=wt(M,[Q,Math.max(Q,he-Ce)]);o.style.minWidth=ae+"px",o.style.right=et+"px"}const K=w(),V=window.innerHeight-Q*2,X=u.scrollHeight,U=window.getComputedStyle(h),J=parseInt(U.borderTopWidth,10),B=parseInt(U.paddingTop,10),Y=parseInt(U.borderBottomWidth,10),Z=parseInt(U.paddingBottom,10),te=J+B+X+Z+Y,ye=Math.min(g.offsetHeight*5,te),ue=window.getComputedStyle(u),be=parseInt(ue.paddingTop,10),v=parseInt(ue.paddingBottom,10),C=P.top+P.height/2-Q,I=V-C,A=g.offsetHeight/2,y=g.offsetTop+A,_=J+B+y,O=te-_;if(_<=C){const R=K.length>0&&g===K[K.length-1].ref.current;o.style.bottom="0px";const M=h.clientHeight-u.offsetTop-u.offsetHeight,$=Math.max(I,A+(R?v:0)+M+Y),ae=_+$;o.style.height=ae+"px"}else{const R=K.length>0&&g===K[0].ref.current;o.style.top="0px";const $=Math.max(C,J+u.offsetTop+(R?be:0)+A)+O;o.style.height=$+"px",u.scrollTop=_-C+u.offsetTop}o.style.margin=`${Q}px 0`,o.style.minHeight=ye+"px",o.style.maxHeight=V+"px",a?.(),requestAnimationFrame(()=>S.current=!0)}},[w,c.trigger,c.valueNode,o,h,u,g,f,c.dir,a]);le(()=>m(),[m]);const[T,j]=s.useState();le(()=>{h&&j(window.getComputedStyle(h).zIndex)},[h]);const H=s.useCallback(P=>{P&&E.current===!0&&(m(),p?.(),E.current=!1)},[m,p]);return r.jsx(aa,{scope:n,contentWrapper:o,shouldExpandOnScrollRef:S,onScrollButtonChange:H,children:r.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:T},children:r.jsx(q.div,{...l,ref:x,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}})})})});ln.displayName=na;var ra="SelectPopperPosition",dt=s.forwardRef((e,t)=>{const{__scopeSelect:n,align:a="start",collisionPadding:l=Q,...c}=e,i=Qe(n);return r.jsx($n,{...i,...c,ref:t,align:a,collisionPadding:l,style:{boxSizing:"border-box",...c.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});dt.displayName=ra;var[aa,yt]=Se(ge,{}),pt="SelectViewport",cn=s.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:a,...l}=e,c=ce(pt,n),i=yt(pt,n),o=ee(t,c.onViewportChange),d=s.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),r.jsx(Je.Slot,{scope:n,children:r.jsx(q.div,{"data-radix-select-viewport":"",role:"presentation",...l,ref:o,style:{position:"relative",flex:1,overflow:"hidden auto",...l.style},onScroll:F(l.onScroll,h=>{const b=h.currentTarget,{contentWrapper:x,shouldExpandOnScrollRef:w}=i;if(w?.current&&x){const S=Math.abs(d.current-b.scrollTop);if(S>0){const E=window.innerHeight-Q*2,u=parseFloat(x.style.minHeight),g=parseFloat(x.style.height),f=Math.max(u,g);if(f<E){const p=f+S,m=Math.min(E,p),T=p-m;x.style.height=m+"px",x.style.bottom==="0px"&&(b.scrollTop=T>0?T:0,x.style.justifyContent="flex-end")}}}d.current=b.scrollTop})})})]})});cn.displayName=pt;var un="SelectGroup",[sa,oa]=Se(un),dn=s.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e,l=St();return r.jsx(sa,{scope:n,id:l,children:r.jsx(q.div,{role:"group","aria-labelledby":l,...a,ref:t})})});dn.displayName=un;var pn="SelectLabel",gn=s.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e,l=oa(pn,n);return r.jsx(q.div,{id:l.id,...a,ref:t})});gn.displayName=pn;var Ye="SelectItem",[la,hn]=Se(Ye),mn=s.forwardRef((e,t)=>{const{__scopeSelect:n,value:a,disabled:l=!1,textValue:c,...i}=e,o=ie(Ye,n),d=ce(Ye,n),h=o.value===a,[b,x]=s.useState(c??""),[w,S]=s.useState(!1),E=ee(t,p=>d.itemRefCallback?.(p,a,l)),u=St(),g=s.useRef("touch"),f=()=>{l||(o.onValueChange(a),o.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return r.jsx(la,{scope:n,value:a,disabled:l,textId:u,isSelected:h,onItemTextChange:s.useCallback(p=>{x(m=>m||(p?.textContent??"").trim())},[]),children:r.jsx(Je.ItemSlot,{scope:n,value:a,disabled:l,textValue:b,children:r.jsx(q.div,{role:"option","aria-labelledby":u,"data-highlighted":w?"":void 0,"aria-selected":h&&w,"data-state":h?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1,...i,ref:E,onFocus:F(i.onFocus,()=>S(!0)),onBlur:F(i.onBlur,()=>S(!1)),onClick:F(i.onClick,()=>{g.current!=="mouse"&&f()}),onPointerUp:F(i.onPointerUp,()=>{g.current==="mouse"&&f()}),onPointerDown:F(i.onPointerDown,p=>{g.current=p.pointerType}),onPointerMove:F(i.onPointerMove,p=>{g.current=p.pointerType,l?d.onItemLeave?.():g.current==="mouse"&&p.currentTarget.focus({preventScroll:!0})}),onPointerLeave:F(i.onPointerLeave,p=>{p.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:F(i.onKeyDown,p=>{d.searchRef?.current!==""&&p.key===" "||(Yr.includes(p.key)&&f(),p.key===" "&&p.preventDefault())})})})})});mn.displayName=Ye;var He="SelectItemText",fn=s.forwardRef((e,t)=>{const{__scopeSelect:n,className:a,style:l,...c}=e,i=ie(He,n),o=ce(He,n),d=hn(He,n),h=Jr(He,n),[b,x]=s.useState(null),w=ee(t,f=>x(f),d.onItemTextChange,f=>o.itemTextRefCallback?.(f,d.value,d.disabled)),S=b?.textContent,E=s.useMemo(()=>r.jsx("option",{value:d.value,disabled:d.disabled,children:S},d.value),[d.disabled,d.value,S]),{onNativeOptionAdd:u,onNativeOptionRemove:g}=h;return le(()=>(u(E),()=>g(E)),[u,g,E]),r.jsxs(r.Fragment,{children:[r.jsx(q.span,{id:d.textId,...c,ref:w}),d.isSelected&&i.valueNode&&!i.valueNodeHasChildren?Dt.createPortal(c.children,i.valueNode):null]})});fn.displayName=He;var vn="SelectItemIndicator",xn=s.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e;return hn(vn,n).isSelected?r.jsx(q.span,{"aria-hidden":!0,...a,ref:t}):null});xn.displayName=vn;var gt="SelectScrollUpButton",Sn=s.forwardRef((e,t)=>{const n=ce(gt,e.__scopeSelect),a=yt(gt,e.__scopeSelect),[l,c]=s.useState(!1),i=ee(t,a.onScrollButtonChange);return le(()=>{if(n.viewport&&n.isPositioned){let o=function(){const h=d.scrollTop>0;c(h)};const d=n.viewport;return o(),d.addEventListener("scroll",o),()=>d.removeEventListener("scroll",o)}},[n.viewport,n.isPositioned]),l?r.jsx(bn,{...e,ref:i,onAutoScroll:()=>{const{viewport:o,selectedItem:d}=n;o&&d&&(o.scrollTop=o.scrollTop-d.offsetHeight)}}):null});Sn.displayName=gt;var ht="SelectScrollDownButton",yn=s.forwardRef((e,t)=>{const n=ce(ht,e.__scopeSelect),a=yt(ht,e.__scopeSelect),[l,c]=s.useState(!1),i=ee(t,a.onScrollButtonChange);return le(()=>{if(n.viewport&&n.isPositioned){let o=function(){const h=d.scrollHeight-d.clientHeight,b=Math.ceil(d.scrollTop)<h;c(b)};const d=n.viewport;return o(),d.addEventListener("scroll",o),()=>d.removeEventListener("scroll",o)}},[n.viewport,n.isPositioned]),l?r.jsx(bn,{...e,ref:i,onAutoScroll:()=>{const{viewport:o,selectedItem:d}=n;o&&d&&(o.scrollTop=o.scrollTop+d.offsetHeight)}}):null});yn.displayName=ht;var bn=s.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:a,...l}=e,c=ce("SelectScrollButton",n),i=s.useRef(null),o=Ze(n),d=s.useCallback(()=>{i.current!==null&&(window.clearInterval(i.current),i.current=null)},[]);return s.useEffect(()=>()=>d(),[d]),le(()=>{o().find(b=>b.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[o]),r.jsx(q.div,{"aria-hidden":!0,...l,ref:t,style:{flexShrink:0,...l.style},onPointerDown:F(l.onPointerDown,()=>{i.current===null&&(i.current=window.setInterval(a,50))}),onPointerMove:F(l.onPointerMove,()=>{c.onItemLeave?.(),i.current===null&&(i.current=window.setInterval(a,50))}),onPointerLeave:F(l.onPointerLeave,()=>{d()})})}),ia="SelectSeparator",ca=s.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e;return r.jsx(q.div,{"aria-hidden":!0,...a,ref:t})});ca.displayName=ia;var mt="SelectArrow",ua=s.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e,l=Qe(n),c=ie(mt,n),i=ce(mt,n);return c.open&&i.position==="popper"?r.jsx(Gn,{...l,...a,ref:t}):null});ua.displayName=mt;var da="SelectBubbleInput",Cn=s.forwardRef(({__scopeSelect:e,value:t,...n},a)=>{const l=s.useRef(null),c=ee(a,l),i=Xn(t);return s.useEffect(()=>{const o=l.current;if(!o)return;const d=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor(d,"value").set;if(i!==t&&b){const x=new Event("change",{bubbles:!0});b.call(o,t),o.dispatchEvent(x)}},[i,t]),r.jsx(q.select,{...n,style:{...Fn,...n.style},ref:c,defaultValue:t})});Cn.displayName=da;function wn(e){return e===""||e===void 0}function jn(e){const t=ct(e),n=s.useRef(""),a=s.useRef(0),l=s.useCallback(i=>{const o=n.current+i;t(o),(function d(h){n.current=h,window.clearTimeout(a.current),h!==""&&(a.current=window.setTimeout(()=>d(""),1e3))})(o)},[t]),c=s.useCallback(()=>{n.current="",window.clearTimeout(a.current)},[]);return s.useEffect(()=>()=>window.clearTimeout(a.current),[]),[n,l,c]}function Nn(e,t,n){const l=t.length>1&&Array.from(t).every(h=>h===t[0])?t[0]:t,c=n?e.indexOf(n):-1;let i=pa(e,Math.max(c,0));l.length===1&&(i=i.filter(h=>h!==n));const d=i.find(h=>h.textValue.toLowerCase().startsWith(l.toLowerCase()));return d!==n?d:void 0}function pa(e,t){return e.map((n,a)=>e[(t+a)%e.length])}var En=Jt,kn=Qt,Pn=tn,Tn=nn,In=rn,_n=an,Ln=cn,ga=dn,ha=gn,Rn=mn,An=fn,Dn=xn,On=Sn,Mn=yn;const $e=({tooltip:e,active:t=!1,onClick:n,icon:a,className:l,children:c,variant:i="segmented",size:o="sm",alwaysShowLabel:d=!1,tooltipRootProps:h})=>{const b=i==="segmented"&&!t||i==="icon-button",x=t||d,w=s.useMemo(()=>i==="segmented"?r.jsx(Kt,{size:o,active:t,onClick:n,leftIcon:a,className:se("focus-base transition-colors",t?"bg-neutral-000 dark:bg-neutral-1100":"bg-neutral-100 dark:bg-neutral-1200 hover:bg-neutral-200 dark:hover:bg-neutral-1100 active:bg-neutral-400 dark:active:bg-neutral-900",l),children:x?c:null}):r.jsx("div",{role:"button",className:se("w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 transition-colors focus-base",l),onClick:n,onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),n?.())},tabIndex:0,children:c}),[i,o,t,n,a,l,x,c]);return b?r.jsx(Mt,{triggerElement:w,rootProps:h,className:"ml-0",contentProps:{className:"px-2 py-1 bg-neutral-1100 dark:bg-neutral-200 text-neutral-300 dark:text-neutral-1000"},triggerProps:{className:"ml-0 h-auto"},children:e}):w};try{$e.displayName="TooltipButton",$e.__docgenInfo={description:"",displayName:"TooltipButton",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"ReactNode"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconName"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"segmented"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"segmented"'},{value:'"icon-button"'}]}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},alwaysShowLabel:{defaultValue:{value:"false"},description:"",name:"alwaysShowLabel",required:!1,type:{name:"boolean"}},tooltipRootProps:{defaultValue:null,description:"",name:"tooltipRootProps",required:!1,type:{name:"TooltipProps"}}}}}catch{}const ft=({languages:e,activeLanguage:t,onLanguageChange:n})=>{const a=s.useMemo(()=>e.map(i=>{const o=t===i,d=ne(i).label;return r.jsx($e,{tooltip:d,active:o,onClick:()=>n(i),icon:ne(i).icon,variant:"segmented",size:"xs",children:d},i)}),[e,t,n]),l=s.useMemo(()=>e.map(i=>r.jsxs(Rn,{value:i,className:"relative flex items-center rounded px-2 py-1.5 text-14 text-neutral-1300 dark:text-neutral-000 select-none hover:bg-neutral-100 dark:hover:bg-neutral-1200 data-[highlighted]:outline-none data-[highlighted]:bg-neutral-100 dark:data-[highlighted]:bg-neutral-1200 focus-base",children:[r.jsx(An,{asChild:!0,children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(z,{name:ne(i).icon,size:"20px"}),r.jsx("span",{children:ne(i).label})]})}),r.jsx(Dn,{className:"absolute right-2",children:r.jsx(z,{name:"icon-gui-check-outline",size:"16px"})})]},i)),[e]),c=s.useMemo(()=>t?r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(z,{name:ne(t).icon,size:"20px"}),r.jsx("span",{children:ne(t).label})]}):null,[t]);return r.jsxs("div",{className:"p-2 border-b border-neutral-300 dark:border-neutral-1000 overflow-x-auto",children:[r.jsx("div",{className:"hidden sm:flex gap-1",children:a}),r.jsx("div",{className:"sm:hidden w-full",children:r.jsxs(En,{value:t||void 0,onValueChange:n,children:[r.jsxs(kn,{className:"w-full inline-flex items-center justify-between rounded-lg px-3 py-2 text-14 text-neutral-1300 dark:text-neutral-000 bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 gap-1 border border-neutral-300 dark:border-neutral-900 focus-base","aria-label":"Select language",children:[r.jsx(Pn,{asChild:!0,children:c}),r.jsx(Tn,{children:r.jsx(z,{name:"icon-gui-chevron-down-outline",size:"16px"})})]}),r.jsx(In,{children:r.jsxs(_n,{className:"overflow-hidden rounded-md bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 shadow-md z-50 w-[var(--radix-select-trigger-width)]",position:"popper",children:[r.jsx(On,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(z,{name:"icon-gui-chevron-down-outline",size:"16px",additionalCSS:"rotate-180"})}),r.jsx(Ln,{className:"p-1",children:l}),r.jsx(Mn,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(z,{name:"icon-gui-chevron-down-outline",size:"16px"})})]})})]})})]})};try{ft.displayName="LanguageSelector",ft.__docgenInfo={description:"",displayName:"LanguageSelector",props:{languages:{defaultValue:null,description:"",name:"languages",required:!0,type:{name:"string[]"}},activeLanguage:{defaultValue:null,description:"",name:"activeLanguage",required:!0,type:{name:"string"}},onLanguageChange:{defaultValue:null,description:"",name:"onLanguageChange",required:!0,type:{name:"(language: string) => void"}}}}}catch{}const vt=({apiKeys:e,selectedApiKey:t,onApiKeyChange:n})=>{const a=s.useMemo(()=>e?.length===1&&e[0].app==="demo",[e]),l=s.useMemo(()=>r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Jn,{className:"ml-1 bg-neutral-200 dark:bg-neutral-1100",children:"DEMO ONLY"}),r.jsx(Mt,{className:"ml-0",triggerProps:{className:"h-5"},contentProps:{className:"bg-neutral-1100 dark:bg-neutral-200 text-neutral-300 dark:text-neutral-1000"},triggerElement:r.jsxs("div",{className:"group/code-snippet-tooltip-icon-hover flex items-center justify-center",children:[r.jsx(z,{name:"icon-gui-information-circle-outline",size:"20px",color:"text-neutral-700 dark:text-neutral-600",additionalCSS:"group-hover/code-snippet-tooltip-icon-hover:hidden"}),r.jsx(z,{name:"icon-gui-information-circle-solid",size:"20px",color:"text-neutral-1300 dark:text-neutral-000",additionalCSS:"group-hover/code-snippet-tooltip-icon-hover:flex hidden"})]}),children:"This code example uses a temporary key that is rate limited and expires in 4 hrs. Sign in to Ably to use your API keys instead."})]}),[]),c=s.useMemo(()=>a?l:e?.length?r.jsxs(En,{value:t,onValueChange:n,children:[r.jsxs(kn,{className:"font-sans inline-flex items-center justify-between rounded px-3 py-2 ml-1 text-14 text-neutral-1300 dark:text-neutral-000 bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 gap-2 focus-base border border-neutral-300 dark:border-neutral-1000 transition-colors","aria-label":"API Key",children:[r.jsx(Pn,{}),r.jsx(Tn,{className:"size-4",children:r.jsx(z,{name:"icon-gui-chevron-down-micro",size:"16px"})})]}),r.jsx(In,{children:r.jsxs(_n,{className:"overflow-hidden rounded-lg bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 shadow-md z-50",children:[r.jsx(On,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(z,{name:"icon-gui-chevron-down-outline",size:"16px",additionalCSS:"rotate-180"})}),r.jsx(Ln,{className:"rounded-lg font-sans",children:e.map(i=>r.jsxs(ga,{children:[e.length>1&&r.jsx(ha,{className:"text-neutral-700 rounded-none dark:text-neutral-600 p-1 bg-neutral-200 dark:bg-neutral-1100",children:i.app}),i.keys.map(({name:o,key:d})=>r.jsxs(Rn,{value:d,className:"relative flex items-center justify-between m-2 p-2 rounded-lg text-14 text-neutral-1300 dark:text-neutral-000 select-none hover:bg-neutral-100 dark:hover:bg-neutral-1200 data-[highlighted]:outline-none data-[highlighted]:bg-neutral-100 dark:data-[highlighted]:bg-neutral-1200 focus-base min-w-64",children:[r.jsxs(An,{children:[d.length>10?`${d.substring(0,10)}...`:d,r.jsx("span",{className:"font-light",children:o&&` - ${o}`})]}),r.jsx(Dn,{className:"size-4",children:r.jsx(z,{name:"icon-gui-check-micro",size:"16px"})})]},`${i.app}-${o}-${d}`))]},i.app))}),r.jsx(Mn,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(z,{name:"icon-gui-chevron-down-outline",size:"16px"})})]})})]}):null,[e,a,t,n,l]);return r.jsxs("div",{className:"flex items-center border-t border-neutral-300 dark:border-neutral-1000 px-3 py-3",children:[r.jsx("span",{className:"ui-text-label4 text-neutral-700 dark:text-neutral-600 mr-1",children:"API key:"}),c]})};try{vt.displayName="ApiKeySelector",vt.__docgenInfo={description:"",displayName:"ApiKeySelector",props:{apiKeys:{defaultValue:null,description:"",name:"apiKeys",required:!1,type:{name:"ApiKeysItem[]"}},selectedApiKey:{defaultValue:null,description:"",name:"selectedApiKey",required:!0,type:{name:"string"}},onApiKeyChange:{defaultValue:null,description:"",name:"onApiKeyChange",required:!0,type:{name:"(apiKey: string) => void"}}}}}catch{}const Ge=({onCopy:e,tooltip:t="Copy"})=>{const[n,a]=s.useState(!1),[l,c]=s.useState(!1);return r.jsx("div",{className:"absolute top-2 right-2 z-10 rounded-lg focus-base",role:"button",tabIndex:0,onMouseEnter:()=>c(!0),onMouseLeave:()=>{c(!1),setTimeout(()=>{a(!1)},250)},children:r.jsx($e,{tooltip:n?"Copied!":t,onClick:()=>{e(),a(!0)},tooltipRootProps:{open:l},variant:"icon-button",children:r.jsx(z,{name:"icon-gui-document-duplicate-outline",size:"20px",color:"text-neutral-1300 dark:text-neutral-000"})})})};try{Ge.displayName="CopyButton",Ge.__docgenInfo={description:"",displayName:"CopyButton",props:{onCopy:{defaultValue:null,description:"",name:"onCopy",required:!0,type:{name:"() => void"}},tooltip:{defaultValue:{value:"Copy"},description:"",name:"tooltip",required:!1,type:{name:"string"}}}}}catch{}const xt=({content:e,className:t,language:n,icon:a})=>{const l=s.useRef(null),[c,i]=s.useState(!1);return r.jsxs("div",{className:se("rounded-lg overflow-hidden bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 relative flex items-center",n==="shell"?"min-h-[3.375rem]":"min-h-12",t),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onFocus:()=>i(!0),onBlur:()=>i(!1),tabIndex:0,role:"button","aria-label":"Focusable code view area",ref:l,children:[a&&r.jsx("div",{className:"absolute top-2 left-2 z-10",children:r.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center bg-neutral-200 dark:bg-neutral-1100",children:r.jsx(z,{name:a,size:"20px",color:"text-neutral-1300 dark:text-neutral-000"})})}),r.jsx(At,{language:n,snippet:e,additionalCSS:se("w-full bg-neutral-000 text-neutral-1300 dark:bg-neutral-1300 dark:text-neutral-200 px-4 py-2",a&&"pl-14"),showLines:!1}),c&&r.jsx(Ge,{onCopy:()=>navigator.clipboard.writeText(e)})]})};try{xt.displayName="PlainCodeView",xt.__docgenInfo={description:"",displayName:"PlainCodeView",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},language:{defaultValue:null,description:"",name:"language",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"IconName | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const it=(e,t,n=!0)=>e.replace(/\{\{API_KEY\}\}/g,n?`${t.split(":")[0]}:*****`:t),D=({fixed:e=!1,headerRow:t=!1,title:n="Code",children:a,className:l,lang:c,onChange:i,apiKeys:o,sdk:d,showCodeLines:h=!0,languageOrdering:b,wrapCode:x=!1})=>{const w=s.useRef(null),[S,E]=s.useState(()=>o?.[0]?.keys?.[0]?.key??"");s.useEffect(()=>{!S&&o&&o.length>0&&E(o[0].keys?.[0]?.key)},[o]),s.useEffect(()=>{const v=w.current;if(!v)return;const C=(A,y)=>A.replace(/(['"]?)([^:'"]+):\*{5}\1/g,`$1${y}$1`),I=A=>{const y=window.getSelection();if(!y||y.rangeCount===0)return;const _=y.toString();if(!_)return;const O=y.getRangeAt(0);if(!v.contains(O.commonAncestorContainer))return;const L=C(_,S);A.clipboardData?.setData("text/plain",L),A.preventDefault()};return document.addEventListener("copy",I),()=>{document.removeEventListener("copy",I)}},[S]);const u=s.useCallback(v=>{if(!v||!v.props.className)return null;const I=v.props.className.split(" ").find(A=>A.startsWith("language-"));return I?I.substring(9):null},[]),g=s.useCallback(v=>{if(s.isValidElement(v))return v;if(Array.isArray(v)){const C=v.find(I=>s.isValidElement(I));return C&&s.isValidElement(C)?C:null}return null},[]),{codeData:f,languages:p,sdkTypes:m,isSinglePlainCommand:T}=s.useMemo(()=>{const v=s.Children.toArray(a),C=[],I=new Set,A=[],y=v.length===1&&["language-shell","language-text"].some(_=>s.isValidElement(v[0])?g(v[0].props.children)?.props.className?.includes(_):!1);return v.forEach(_=>{if(!s.isValidElement(_))return;const L=g(_.props.children);if(!L)return;const R=u(L);if(!R)return;const M=L.props?.["data-meta"],{lang:$,highlights:ae}=Kn(R,M);for(const he of Ht)if($.startsWith(`${he}_`)){I.add(he);break}C.includes($)||C.push($);const Ce=L.props.children;A.push({language:$,content:Ce,lineHighlights:ae})}),{codeData:A,languages:C,sdkTypes:I,isSinglePlainCommand:y}},[a,u,g]),j=s.useMemo(()=>m.size===1&&d&&!m.has(d)?Array.from(m)[0]:d,[d,m]),H=m.has("realtime")||m.has("rest"),P=s.useMemo(()=>{const v=!j||!H?[...p]:p.filter(C=>C.startsWith(`${j}_`));return b&&b.length>0&&v.sort((C,I)=>{const A=de(C),y=de(I),_=b.indexOf(A),O=b.indexOf(y);return _!==-1&&O!==-1?_-O:_!==-1?-1:O!==-1?1:0}),v},[j,H,p,b]),k=s.useMemo(()=>{if(j==="client"||j==="agent"){const v=`${j}_${c}`;if(p.includes(v))return v;const C=p.find(I=>I.startsWith(`${j}_`));if(C)return C}return j&&m.has(j)?`${j}_${c}`:c||(P.length>0?P[0]:p[0])},[j,m,c,P,p]),W=s.useMemo(()=>f.some(C=>C?.content.includes("{{API_KEY}}"))&&!!o&&o.length>0&&!!S,[f,o,S]),[G,K]=s.useState(!1),V=s.useMemo(()=>p.length===1&&p[0]==="json",[p]),X=s.useMemo(()=>{if(!k)return[];const v=V?"json":k;return f.filter(C=>C?.language===v).map(C=>{if(!C)return null;const I=V?"json":C.language,A=ne(I??"");if(typeof C.content=="string"||typeof C.content=="number"||typeof C.content=="boolean"){let y=String(C.content);return W&&(y=it(y,S)),!A.syntaxHighlighterKey||!I?null:r.jsx(At,{language:A.syntaxHighlighterKey||I,snippet:y,additionalCSS:"!bg-neutral-000 text-neutral-1300 dark:!bg-neutral-1300 dark:text-neutral-200 px-6 py-4",showLines:h,wrap:x,lineHighlights:Object.keys(C.lineHighlights).length>0?C.lineHighlights:void 0},C.language)}return null})},[k,V,f,W,h,x,S]),U=s.useMemo(()=>k?V?!0:f.some(v=>v?.language===k):!1,[k,V,f]),J=s.useCallback(v=>{const C=de(p.find(I=>I===`${v}_${de(k)}`)??p.find(I=>I.startsWith(`${v}_`))??k);i&&C&&i(de(k),v)},[k,p,i]),B=s.useCallback(v=>{i&&i(de(v),j)},[i,j]),Y=s.useMemo(()=>{if(!k)return null;const v=ne(k);return r.jsxs("div",{className:"px-16 py-6 ui-text-body2 text-neutral-800 dark:text-neutral-400 text-center flex flex-col gap-3 items-center",children:[r.jsx(z,{name:"icon-gui-exclamation-triangle-outline",color:"text-yellow-600 dark:text-yellow-400",size:"24px"}),r.jsxs("p",{className:"ui-text-p3 text-neutral-700 dark:text-neutral-600",children:["You're currently viewing the ",v.label," docs. There either isn't a ",v.label," code sample for this example, or this feature isn't supported in"," ",v.label,". Switch language to view this example in a different language, or check which SDKs support this feature."]})]})},[k]),Z=!e&&P.length>0,te=P.length>1,ye=e&&k,ue=(v,C)=>r.jsx("div",{className:se("border-b border-neutral-300 dark:border-neutral-1000 h-[2.125rem] inline-flex items-center px-3 w-full",{"rounded-t-lg":!t}),children:r.jsxs("div",{className:se("inline-flex items-center",C&&"cursor-pointer"),...C&&{onClick:C},children:[r.jsx(z,{name:ne(v).icon,size:"16px",additionalCSS:"mr-2"}),r.jsx("span",{className:"ui-text-label4 font-semibold text-neutral-800 dark:text-neutral-500 select-none",children:ne(v).label})]})}),be=s.useMemo(()=>k?U?X:Y:null,[k,U,X,Y]);if(T){const v=f[0];if(v){const C=v.content,I=v.language;if(!I||!C)return null;let A=String(C);return W&&(A=it(A,S)),r.jsx(xt,{content:A,className:l,language:I,icon:I==="shell"?"icon-gui-command-line-outline":null})}}return r.jsxs("div",{className:se("rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-1200 border border-neutral-300 dark:border-neutral-1000 min-h-[3.375rem]",l),children:[t&&r.jsxs("div",{className:"h-[2.375rem] bg-neutral-200 dark:bg-neutral-1100 border-b border-neutral-300 dark:border-neutral-1000 flex items-center py-1 px-3 rounded-t-lg",children:[r.jsxs("div",{className:"flex space-x-1.5",children:[r.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-500"}),r.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),r.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),r.jsx("div",{className:"flex-1 text-center ui-text-p3 font-bold text-neutral-1300 dark:text-neutral-000",children:n}),r.jsx("div",{className:"w-12"})]}),H&&r.jsx("div",{className:se("p-2 border-b border-neutral-300 dark:border-neutral-1000",m.size===1&&"p-1",t?"":"rounded-t-lg"),children:r.jsx("div",{className:"flex gap-1 justify-start",children:["realtime","rest"].map(v=>m.has(v)&&r.jsx(Kt,{onClick:()=>J(v),size:"xs",active:j===v,className:se("text-[11px] font-semibold px-2 py-1 h-auto",m.size===1&&"pointer-events-none bg-neutral-100 dark:bg-neutral-1200 !text-neutral-800 !dark:text-neutral-500",m.size>1&&j!==v&&"bg-neutral-100 dark:bg-neutral-1200 hover:bg-neutral-200 dark:hover:bg-neutral-1100 active:bg-neutral-400 dark:active:bg-neutral-900",m.size>1&&j===v&&"bg-neutral-000 dark:bg-neutral-1100"),children:v==="realtime"?"Realtime":"REST"},v))})}),ye&&ue(k),Z&&(te?r.jsx(ft,{languages:P,activeLanguage:k,onLanguageChange:B}):ue(P[0],()=>B(P[0]))),r.jsxs("div",{ref:w,className:"relative",onMouseEnter:()=>K(!0),onMouseLeave:()=>K(!1),onFocus:()=>K(!0),onBlur:()=>K(!1),children:[be,G&&k&&U&&r.jsx(Ge,{onCopy:()=>{const v=f.find(C=>C.language===k)?.content;v&&navigator.clipboard.writeText(it(v,S,!1))}})]}),W&&r.jsx(vt,{apiKeys:o,selectedApiKey:S,onApiKeyChange:E})]})};try{D.displayName="CodeSnippet",D.__docgenInfo={description:"CodeSnippet component that displays code with language switching capability",displayName:"CodeSnippet",props:{fixed:{defaultValue:{value:"false"},description:"If true, hides the language selector row completely",name:"fixed",required:!1,type:{name:"boolean"}},headerRow:{defaultValue:{value:"false"},description:"If true, renders a macOS-style window header with buttons and title",name:"headerRow",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"Code"},description:"Title to display in the header row (when headerRow is true)",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children elements with lang attribute",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:`Default language to display. If not found in available languages, first available is used.
If found in languages but no matching snippet exists, a message is displayed.`,name:"lang",required:!0,type:{name:"string | null"}},onChange:{defaultValue:null,description:"Callback fired when the active language changes",name:"onChange",required:!1,type:{name:'((language: string, sdk?: "rest" | "realtime" | "client" | "agent") => void)'}},apiKeys:{defaultValue:null,description:"List of API keys to display in a dropdown",name:"apiKeys",required:!1,type:{name:"ApiKeysItem[]"}},sdk:{defaultValue:null,description:"Default SDK type to use for the code snippet",name:"sdk",required:!1,type:{name:"enum",value:[{value:'"rest"'},{value:'"realtime"'},{value:'"client"'},{value:'"agent"'}]}},showCodeLines:{defaultValue:{value:"true"},description:"Whether to show line numbers in code snippets",name:"showCodeLines",required:!1,type:{name:"boolean"}},languageOrdering:{defaultValue:null,description:`Defines the order in which languages should be displayed.
Languages not in this array will be shown after those that are included.`,name:"languageOrdering",required:!1,type:{name:"string[]"}},wrapCode:{defaultValue:{value:"false"},description:"Whether to wrap code content instead of scrolling",name:"wrapCode",required:!1,type:{name:"boolean"}}}}}catch{}const N={javascript:`var ably = new Ably.Realtime('{{API_KEY}}');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`,typescript:`const ably = new Ably.Realtime('{{API_KEY}}');
const channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', (message: Ably.Types.Message) => {
  console.log(message.data);
});`,swift:`let ably = ARTRealtime(key: "{{API_KEY}}")
let channel = ably.channels.get("channel-name")

// Subscribe to messages on channel
channel.subscribe("event") { message in
  print("\\(message.data)")
}`,python:`ably = Ably.Realtime(key='{{API_KEY}}')
channel = ably.channels.get('channel-name')

# Subscribe to messages on channel
def on_message(message):
    print(message.data)

channel.subscribe('event', on_message)`,php:`var ably = new Ably.Rest('{{API_KEY}}');

// Publish a message
ably.channels.get('channel-name').publish('event', { text: 'Hello REST API!' }, function(err) {
  if (err) {
    console.log('Error publishing message:', err);
  } else {
    console.log('Message published successfully');
  }
});`,kotlin:`val ably = AblyRest("{{API_KEY}}")

// Publish a message
ably.channels.get("channel-name").publish(
  "event",
  "{"text":"Hello REST API!"}"
) { err ->
  println(
    if (err != null) "Error publishing message: $err"
    else "Message published successfully"
  )
}`,shellInstall:`npm install @ably/asset-tracking
# or
pnpm add @ably/asset-tracking`,shellStartServer:`cd server
npm run start`,shellComplex:`curl -X POST https://api.ably.io/keys \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer \${{API_KEY}}" \\
  -d '{
    "name": "My API Key",
    "capabilities": {
      "*": ["publish", "subscribe"]
    }
  }'`,json:`{
  "items": [
    {
      "id": "XeETKz24PM:0:0",
      "clientId": "user123",
      "connectionId": "hCD9Jksk28",
      "timestamp": 1654321098765,
      "name": "event",
      "data": {
        "text": "Hello world!",
        "id": 42,
        "metadata": {
          "source": "mobile-app",
          "priority": "high"
        }
      },
      "encoding": "json"
    }
  ],
  "hasNext": true
}`},Ra={title:"Components/Code Snippet",component:D,parameters:{layout:"padded",docs:{description:{component:`The CodeSnippet component displays code with language selector tabs.
It automatically extracts language information from its children and provides
UI controls to switch between different language versions.

Features:
- Language selectors include both a label and an icon pulled from the language
  information defined in languages.tsx
- Content of each language div should be a string containing the code snippet
- Optional macOS-style window header when headerRow is true
- Default language can be set with the lang prop
- The onChange callback fires when the language changes (after initial render)
- API key selector shows when apiKeys are provided
- SDK type selector (Realtime/REST) appears when language attributes have
  "realtime_" or "rest_" prefixes
- Client/Agent SDK types for page-level controlled code snippets (e.g. AI Transport)
- Special shell command mode for terminal commands
- Copy to clipboard functionality`}}},tags:["autodocs"]},we={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:N.typescript})})]})}},je={render:()=>{const[e,t]=s.useState("javascript");return r.jsx(D,{lang:e,onChange:(n,a)=>{t(n)},children:r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})})})}},Ne={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{headerRow:!0,title:"Subscribe Example",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:N.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-swift",children:N.swift})})]})}},Ee={render:()=>{const[e,t]=s.useState("javascript");return r.jsx(D,{headerRow:!0,title:"JavaScript Example",lang:e,onChange:(n,a)=>{t(n)},children:r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})})})}},ke={render:()=>{const[e,t]=s.useState("swift");return r.jsxs(D,{headerRow:!0,title:"TypeScript Example",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:N.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-swift",children:N.swift})})]})}},Pe={render:()=>{const[e,t]=s.useState("ruby");return r.jsxs(D,{headerRow:!0,title:"Missing Language Example",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:N.typescript})})]})}},Te={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{headerRow:!0,title:"Demo API Keys",apiKeys:[{app:"demo",keys:[{name:"demo",key:"demokey:123456"}]}],lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:N.typescript})})]})}},Ie={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{headerRow:!0,title:"API Key Selection Example",apiKeys:[{app:"ably",keys:[{name:"Big Key",key:"bigkey:123456"},{name:"Small Key",key:"smallkey:123456"}]},{app:"bably",keys:[{name:"Big Key",key:"bigkey:654321"},{name:"Small Key",key:"smallkey:654321"}]}],lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:N.typescript})})]})}},_e={render:()=>{const[e,t]=s.useState("javascript"),[n,a]=s.useState("realtime");return r.jsxs(D,{headerRow:!0,title:"SDK Type Example",lang:e,sdk:n,onChange:(l,c)=>{t(l),a(c||"realtime")},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_typescript",children:N.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-rest_php",children:N.php})}),r.jsx("pre",{children:r.jsx("code",{className:"language-rest_kotlin",children:N.kotlin})})]})}},Le={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{headerRow:!0,title:"SDK Type Example (realtime only)",lang:e,sdk:"realtime",onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_typescript",children:N.typescript})})]})}},ze={render:()=>{const[e,t]=s.useState("javascript"),[n,a]=s.useState("realtime");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs(D,{headerRow:!0,title:"SDK Type Example (realtime only)",lang:e,sdk:n,onChange:(l,c)=>{t(l),a(c||"realtime")},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_typescript",children:N.typescript})})]}),r.jsxs(D,{headerRow:!0,title:"SDK Type Example (rest only)",lang:e,sdk:n,onChange:(l,c)=>{t(l),a(c||"realtime")},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-rest_php",children:N.php})}),r.jsx("pre",{children:r.jsx("code",{className:"language-rest_kotlin",children:N.kotlin})})]})]})}},Re={render:()=>{const[e,t]=s.useState("shell");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx("h4",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000",children:"Shell"}),r.jsx(D,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:N.shellInstall})})}),r.jsx("h4",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000",children:"Text"}),r.jsx(D,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-text",children:"It was the best of times, it was the blurst of times."})})})]})}},Ae={render:()=>{const[e,t]=s.useState("shell");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2",children:"Installation"}),r.jsx(D,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:N.shellInstall})})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2",children:"Starting the server"}),r.jsx(D,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:N.shellStartServer})})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2",children:"Complex command"}),r.jsx(D,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:N.shellComplex})})})]})]})}},De={render:()=>{const[e,t]=s.useState("javascript");return r.jsx(D,{fixed:!0,lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})})})}},Oe={render:()=>{const[e,t]=s.useState("ruby");return r.jsx(D,{headerRow:!0,title:"JSON-Only Example",lang:e,onChange:(n,a)=>{t(n)},children:r.jsx("pre",{children:r.jsx("code",{className:"language-json",children:N.json})})})}},Me={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{showCodeLines:!1,headerRow:!0,title:"No Line Numbers",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:N.typescript})})]})}},Ke={render:()=>{const[e,t]=s.useState("swift");return r.jsxs(D,{headerRow:!0,title:"Custom Language Order",languageOrdering:["swift","typescript","javascript"],lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:N.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:N.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-swift",children:N.swift})}),r.jsx("pre",{children:r.jsx("code",{className:"language-python",children:N.python})})]})}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    return <CodeSnippet lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>;
  }
}`,...we.parameters?.docs?.source},description:{story:"Default example showing JavaScript and TypeScript code with language selector.",...we.parameters?.docs?.description}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    return <CodeSnippet lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
      </CodeSnippet>;
  }
}`,...je.parameters?.docs?.source},description:{story:`CodeSnippet with a single language shows a simplified language selector
with just an icon and language name.`,...je.parameters?.docs?.description}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    return <CodeSnippet headerRow title="Subscribe Example" lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
        <pre>
          <code className="language-swift">{CODE_SNIPPETS.swift}</code>
        </pre>
      </CodeSnippet>;
  }
}`,...Ne.parameters?.docs?.source},description:{story:"CodeSnippet with a macOS-style window header showing title and window controls.",...Ne.parameters?.docs?.description}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    return <CodeSnippet headerRow title="JavaScript Example" lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
      </CodeSnippet>;
  }
}`,...Ee.parameters?.docs?.source},description:{story:`CodeSnippet with a single language and macOS-style window header.
A simplified language selector is shown with just the icon and name.`,...Ee.parameters?.docs?.description}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("swift");
    return <CodeSnippet headerRow title="TypeScript Example" lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
        <pre>
          <code className="language-swift">{CODE_SNIPPETS.swift}</code>
        </pre>
      </CodeSnippet>;
  }
}`,...ke.parameters?.docs?.source},description:{story:"CodeSnippet with a specified default language, which will be selected when the component mounts.",...ke.parameters?.docs?.description}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("ruby");
    return <CodeSnippet headerRow title="Missing Language Example" lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>;
  }
}`,...Pe.parameters?.docs?.source},description:{story:`CodeSnippet that shows a message when a requested language is not available.
When a language is specified that doesn't exist in the provided snippets,
a helpful message is shown prompting the user to switch languages.`,...Pe.parameters?.docs?.description}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    return <CodeSnippet headerRow title="Demo API Keys" apiKeys={[{
      app: "demo",
      keys: [{
        name: "demo",
        key: "demokey:123456"
      }]
    }]} lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>;
  }
}`,...Te.parameters?.docs?.source},description:{story:'CodeSnippet with demo API key mode, showing a "DEMO ONLY" badge and information tooltip.',...Te.parameters?.docs?.description}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    return <CodeSnippet headerRow title="API Key Selection Example" apiKeys={[{
      app: "ably",
      keys: [{
        name: "Big Key",
        key: "bigkey:123456"
      }, {
        name: "Small Key",
        key: "smallkey:123456"
      }]
    }, {
      app: "bably",
      keys: [{
        name: "Big Key",
        key: "bigkey:654321"
      }, {
        name: "Small Key",
        key: "smallkey:654321"
      }]
    }]} lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>;
  }
}`,...Ie.parameters?.docs?.source},description:{story:`CodeSnippet with selectable API keys from a dropdown menu.
The selected API key could be used to replace placeholders in the code.`,...Ie.parameters?.docs?.description}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    const [currentSdk, setCurrentSdk] = useState<SDKType>("realtime");
    return <CodeSnippet headerRow title="SDK Type Example" lang={currentLang} sdk={currentSdk} onChange={(lang, sdk) => {
      setCurrentLang(lang);
      setCurrentSdk(sdk || "realtime");
    }}>
        <pre>
          <code className="language-realtime_javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-realtime_typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
        <pre>
          <code className="language-rest_php">{CODE_SNIPPETS.php}</code>
        </pre>
        <pre>
          <code className="language-rest_kotlin">{CODE_SNIPPETS.kotlin}</code>
        </pre>
      </CodeSnippet>;
  }
}`,..._e.parameters?.docs?.source},description:{story:`CodeSnippet with SDK type selector (Realtime/REST) that filters language options
based on the selected SDK type. Languages must have appropriate prefixes to be filtered.`,..._e.parameters?.docs?.description}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    return <CodeSnippet headerRow title="SDK Type Example (realtime only)" lang={currentLang} sdk="realtime" onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-realtime_javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-realtime_typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>;
  }
}`,...Le.parameters?.docs?.source},description:{story:`CodeSnippet with a single SDK type ("realtime") and multiple languages.
The SDK selector shows the condensed form.`,...Le.parameters?.docs?.description}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    const [currentSdk, setCurrentSdk] = useState<SDKType>("realtime");
    return <div className="flex flex-col gap-4">
        <CodeSnippet headerRow title="SDK Type Example (realtime only)" lang={currentLang} sdk={currentSdk} onChange={(lang, sdk) => {
        setCurrentLang(lang);
        setCurrentSdk(sdk || "realtime");
      }}>
          <pre>
            <code className="language-realtime_javascript">
              {CODE_SNIPPETS.javascript}
            </code>
          </pre>
          <pre>
            <code className="language-realtime_typescript">
              {CODE_SNIPPETS.typescript}
            </code>
          </pre>
        </CodeSnippet>

        <CodeSnippet headerRow title="SDK Type Example (rest only)" lang={currentLang} sdk={currentSdk} onChange={(lang, sdk) => {
        setCurrentLang(lang);
        setCurrentSdk(sdk || "realtime");
      }}>
          <pre>
            <code className="language-rest_php">{CODE_SNIPPETS.php}</code>
          </pre>
          <pre>
            <code className="language-rest_kotlin">{CODE_SNIPPETS.kotlin}</code>
          </pre>
        </CodeSnippet>
      </div>;
  }
}`,...ze.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("shell");
    return <div className="flex flex-col gap-4">
        <h4 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000">
          Shell
        </h4>
        <CodeSnippet lang={currentLang} onChange={lang => setCurrentLang(lang)}>
          <pre>
            <code className="language-shell">{CODE_SNIPPETS.shellInstall}</code>
          </pre>
        </CodeSnippet>
        <h4 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000">
          Text
        </h4>
        <CodeSnippet lang={currentLang} onChange={lang => setCurrentLang(lang)}>
          <pre>
            <code className="language-text">
              It was the best of times, it was the blurst of times.
            </code>
          </pre>
        </CodeSnippet>
      </div>;
  }
}`,...Re.parameters?.docs?.source},description:{story:"Plain mode that displays plain code with a relevant icon, if supplied.",...Re.parameters?.docs?.description}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("shell");
    return <div className="flex flex-col gap-4">
        <div>
          <h3 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2">
            Installation
          </h3>
          <CodeSnippet lang={currentLang} onChange={lang => setCurrentLang(lang)}>
            <pre>
              <code className="language-shell">
                {CODE_SNIPPETS.shellInstall}
              </code>
            </pre>
          </CodeSnippet>
        </div>

        <div>
          <h3 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2">
            Starting the server
          </h3>
          <CodeSnippet lang={currentLang} onChange={lang => setCurrentLang(lang)}>
            <pre>
              <code className="language-shell">
                {CODE_SNIPPETS.shellStartServer}
              </code>
            </pre>
          </CodeSnippet>
        </div>

        <div>
          <h3 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2">
            Complex command
          </h3>
          <CodeSnippet lang={currentLang} onChange={lang => setCurrentLang(lang)}>
            <pre>
              <code className="language-shell">
                {CODE_SNIPPETS.shellComplex}
              </code>
            </pre>
          </CodeSnippet>
        </div>
      </div>;
  }
}`,...Ae.parameters?.docs?.source},description:{story:`Multiple shell command examples showing how to use the specialized shell mode
with different types of terminal commands.`,...Ae.parameters?.docs?.description}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    return <CodeSnippet fixed lang={currentLang} onChange={lang => setCurrentLang(lang)}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
      </CodeSnippet>;
  }
}`,...De.parameters?.docs?.source},description:{story:`CodeSnippet with fixed mode enabled, which hides the language selector completely
even when languages are provided.`,...De.parameters?.docs?.description}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("ruby");
    return <CodeSnippet headerRow title="JSON-Only Example" lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-json">{CODE_SNIPPETS.json}</code>
        </pre>
      </CodeSnippet>;
  }
}`,...Oe.parameters?.docs?.source},description:{story:`Demonstrates the special behavior for JSON-only snippets.
When only a JSON snippet is provided, it will be shown regardless of which language is selected,
instead of showing the NoSnippetMessage.`,...Oe.parameters?.docs?.description}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    return <CodeSnippet showCodeLines={false} headerRow title="No Line Numbers" lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>;
  }
}`,...Me.parameters?.docs?.source},description:{story:`CodeSnippet with line numbers disabled via the showCodeLines prop.
This demonstrates how to hide line numbers in code snippets when they're not needed.`,...Me.parameters?.docs?.description}}};Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("swift");
    return <CodeSnippet headerRow title="Custom Language Order" languageOrdering={["swift", "typescript", "javascript"]} lang={currentLang} onChange={(lang, _sdk) => {
      setCurrentLang(lang);
    }}>
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
        <pre>
          <code className="language-swift">{CODE_SNIPPETS.swift}</code>
        </pre>
        <pre>
          <code className="language-python">{CODE_SNIPPETS.python}</code>
        </pre>
      </CodeSnippet>;
  }
}`,...Ke.parameters?.docs?.source},description:{story:`CodeSnippet with custom language ordering that controls the display order
of languages in the selector tabs.`,...Ke.parameters?.docs?.description}}};const Aa=["Default","SingleLanguage","WithHeaderRow","SingleLanguageWithHeader","WithDefaultLanguage","WithMissingLanguageSnippet","WithDemoApiKeys","WithApiKeys","WithSDKTypes","WithSingleSDKType","WithFallbackSDKTypeAcrossInstances","PlainMode","MultipleShellExamples","FixedMode","JsonOnlySnippet","WithoutCodeLines","WithCustomLanguageOrder"];export{we as Default,De as FixedMode,Oe as JsonOnlySnippet,Ae as MultipleShellExamples,Re as PlainMode,je as SingleLanguage,Ee as SingleLanguageWithHeader,Ie as WithApiKeys,Ke as WithCustomLanguageOrder,ke as WithDefaultLanguage,Te as WithDemoApiKeys,ze as WithFallbackSDKTypeAcrossInstances,Ne as WithHeaderRow,Pe as WithMissingLanguageSnippet,_e as WithSDKTypes,Le as WithSingleSDKType,Me as WithoutCodeLines,Aa as __namedExportsOrder,Ra as default};
