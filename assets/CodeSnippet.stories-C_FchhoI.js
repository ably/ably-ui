import{j as r}from"./jsx-runtime-CyWY-2fp.js";import{r as s}from"./iframe-BNJdjDsv.js";import{C as Dt,p as Vn}from"./Code-CySvxGwt.js";import{c as re}from"./cn-B2SrrX3i.js";import{I as W}from"./Icon-B5tBaJAs.js";import{r as Ot}from"./index-BbS3Dd1g.js";import{b as Z,P as q,c as H,d as le,u as Ct,a as Hn,g as Bn}from"./index-DA_QPUcn.js";import{u as Wn,c as Fn}from"./index-D48cKScb.js";import{V as zn,D as qn}from"./index-CrYqcZE8.js";import{u as ct}from"./index-BFj4dNTt.js";import{u as St}from"./index-3mW0fxvG.js";import{R as Un,A as Yn,P as $n,c as Mt,C as Gn,a as Xn,T as Kt}from"./Tooltip-DVsSrb0f.js";import{u as Jn}from"./index-Bt-FgyDn.js";import{S as Vt}from"./SegmentedControl-FhWG8cvQ.js";import{B as Zn}from"./Badge-pgP8tmEg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqkO6OhS.js";import"./index-0YzGhp3V.js";const Ht=["realtime","rest","client","agent"],wt={javascript:{label:"JavaScript",icon:"icon-tech-javascript",syntaxHighlighterKey:"javascript"},typescript:{label:"TypeScript",icon:"icon-tech-typescript",syntaxHighlighterKey:"typescript"},java:{label:"Java",icon:"icon-tech-java",syntaxHighlighterKey:"java"},kotlin:{label:"Kotlin",icon:"icon-tech-kotlin",syntaxHighlighterKey:"kotlin"},python:{label:"Python",icon:"icon-tech-python",syntaxHighlighterKey:"python"},csharp:{label:"C#",icon:"icon-tech-csharp",syntaxHighlighterKey:"csharp"},go:{label:"Go",icon:"icon-tech-go",syntaxHighlighterKey:"go"},ruby:{label:"Ruby",icon:"icon-tech-ruby",syntaxHighlighterKey:"ruby"},php:{label:"PHP",icon:"icon-tech-php",syntaxHighlighterKey:"php"},nodejs:{label:"Node.js",icon:"icon-tech-nodejs",syntaxHighlighterKey:"javascript"},react:{label:"React",icon:"icon-tech-react",syntaxHighlighterKey:"javascript"},html:{label:"HTML",icon:"icon-tech-web",syntaxHighlighterKey:"xml"},shell:{label:"Shell",icon:"icon-tech-web",syntaxHighlighterKey:"bash"},json:{label:"JSON",icon:"icon-tech-json",syntaxHighlighterKey:"json"},laravel:{label:"Laravel",icon:"icon-tech-laravel-broadcast",syntaxHighlighterKey:"php"},xml:{label:"XML",icon:"icon-tech-web",syntaxHighlighterKey:"xml"},sql:{label:"SQL",icon:"icon-tech-postgres",syntaxHighlighterKey:"sql"},swift:{label:"Swift",icon:"icon-tech-swift",syntaxHighlighterKey:"swift"},cpp:{label:"C++",icon:"icon-tech-web",syntaxHighlighterKey:"cpp"},dart:{label:"Dart",icon:"icon-tech-web",syntaxHighlighterKey:"dart"},objc:{label:"Objective-C",icon:"icon-tech-objectivec",syntaxHighlighterKey:"objc"},android:{label:"Android",icon:"icon-tech-android-full",syntaxHighlighterKey:"kotlin"},flutter:{label:"Flutter",icon:"icon-tech-flutter",syntaxHighlighterKey:"dart"}},ue=e=>{for(const t of Ht){const n=`${t}_`;if(e.startsWith(n))return e.slice(n.length)}return e},ee=e=>{const t=ue(e).toLowerCase();return wt[t]?wt[t]:{label:e,icon:"icon-tech-web",syntaxHighlighterKey:e}};function Nt(e,[t,n]){return Math.min(n,Math.max(t,e))}var tt=0;function Qn(){s.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??jt()),document.body.insertAdjacentElement("beforeend",e[1]??jt()),tt++,()=>{tt===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),tt--}},[])}function jt(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var nt="focusScope.autoFocusOnMount",rt="focusScope.autoFocusOnUnmount",Et={bubbles:!1,cancelable:!0},er="FocusScope",Bt=s.forwardRef((e,t)=>{const{loop:n=!1,trapped:a=!1,onMountAutoFocus:l,onUnmountAutoFocus:c,...i}=e,[o,d]=s.useState(null),m=ct(l),y=ct(c),x=s.useRef(null),w=Z(t,u=>d(u)),S=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(a){let u=function(v){if(S.paused||!o)return;const N=v.target;o.contains(N)?x.current=N:oe(x.current,{select:!0})},p=function(v){if(S.paused||!o)return;const N=v.relatedTarget;N!==null&&(o.contains(N)||oe(x.current,{select:!0}))},b=function(v){if(document.activeElement===document.body)for(const j of v)j.removedNodes.length>0&&oe(o)};document.addEventListener("focusin",u),document.addEventListener("focusout",p);const h=new MutationObserver(b);return o&&h.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",p),h.disconnect()}}},[a,o,S.paused]),s.useEffect(()=>{if(o){Tt.add(S);const u=document.activeElement;if(!o.contains(u)){const b=new CustomEvent(nt,Et);o.addEventListener(nt,m),o.dispatchEvent(b),b.defaultPrevented||(tr(or(Wt(o)),{select:!0}),document.activeElement===u&&oe(o))}return()=>{o.removeEventListener(nt,m),setTimeout(()=>{const b=new CustomEvent(rt,Et);o.addEventListener(rt,y),o.dispatchEvent(b),b.defaultPrevented||oe(u??document.body,{select:!0}),o.removeEventListener(rt,y),Tt.remove(S)},0)}}},[o,m,y,S]);const L=s.useCallback(u=>{if(!n&&!a||S.paused)return;const p=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,b=document.activeElement;if(p&&b){const h=u.currentTarget,[v,N]=nr(h);v&&N?!u.shiftKey&&b===N?(u.preventDefault(),n&&oe(v,{select:!0})):u.shiftKey&&b===v&&(u.preventDefault(),n&&oe(N,{select:!0})):b===h&&u.preventDefault()}},[n,a,S.paused]);return r.jsx(q.div,{tabIndex:-1,...i,ref:w,onKeyDown:L})});Bt.displayName=er;function tr(e,{select:t=!1}={}){const n=document.activeElement;for(const a of e)if(oe(a,{select:t}),document.activeElement!==n)return}function nr(e){const t=Wt(e),n=kt(t,e),a=kt(t.reverse(),e);return[n,a]}function Wt(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const l=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||l?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function kt(e,t){for(const n of e)if(!rr(n,{upTo:t}))return n}function rr(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function ar(e){return e instanceof HTMLInputElement&&"select"in e}function oe(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&ar(e)&&t&&e.select()}}var Tt=sr();function sr(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=Lt(e,t),e.unshift(t)},remove(t){e=Lt(e,t),e[0]?.resume()}}}function Lt(e,t){const n=[...e],a=n.indexOf(t);return a!==-1&&n.splice(a,1),n}function or(e){return e.filter(t=>t.tagName!=="A")}var lr=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},me=new WeakMap,Be=new WeakMap,We={},at=0,Ft=function(e){return e&&(e.host||Ft(e.parentNode))},ir=function(e,t){return t.map(function(n){if(e.contains(n))return n;var a=Ft(n);return a&&e.contains(a)?a:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},cr=function(e,t,n,a){var l=ir(t,Array.isArray(e)?e:[e]);We[n]||(We[n]=new WeakMap);var c=We[n],i=[],o=new Set,d=new Set(l),m=function(x){!x||o.has(x)||(o.add(x),m(x.parentNode))};l.forEach(m);var y=function(x){!x||d.has(x)||Array.prototype.forEach.call(x.children,function(w){if(o.has(w))y(w);else try{var S=w.getAttribute(a),L=S!==null&&S!=="false",u=(me.get(w)||0)+1,p=(c.get(w)||0)+1;me.set(w,u),c.set(w,p),i.push(w),u===1&&L&&Be.set(w,!0),p===1&&w.setAttribute(n,"true"),L||w.setAttribute(a,"true")}catch(b){console.error("aria-hidden: cannot operate on ",w,b)}})};return y(t),o.clear(),at++,function(){i.forEach(function(x){var w=me.get(x)-1,S=c.get(x)-1;me.set(x,w),c.set(x,S),w||(Be.has(x)||x.removeAttribute(a),Be.delete(x)),S||x.removeAttribute(n)}),at--,at||(me=new WeakMap,me=new WeakMap,Be=new WeakMap,We={})}},ur=function(e,t,n){n===void 0&&(n="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),l=lr(e);return l?(a.push.apply(a,Array.from(l.querySelectorAll("[aria-live], script"))),cr(a,l,n,"aria-hidden")):function(){return null}},te=function(){return te=Object.assign||function(t){for(var n,a=1,l=arguments.length;a<l;a++){n=arguments[a];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},te.apply(this,arguments)};function zt(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n}function dr(e,t,n){if(n||arguments.length===2)for(var a=0,l=t.length,c;a<l;a++)(c||!(a in t))&&(c||(c=Array.prototype.slice.call(t,0,a)),c[a]=t[a]);return e.concat(c||Array.prototype.slice.call(t))}var Ue="right-scroll-bar-position",Ye="width-before-scroll-bar",pr="with-scroll-bars-hidden",gr="--removed-body-scroll-bar-size";function st(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function hr(e,t){var n=s.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(a){var l=n.value;l!==a&&(n.value=a,n.callback(a,l))}}}})[0];return n.callback=t,n.facade}var mr=typeof window<"u"?s.useLayoutEffect:s.useEffect,Pt=new WeakMap;function fr(e,t){var n=hr(null,function(a){return e.forEach(function(l){return st(l,a)})});return mr(function(){var a=Pt.get(n);if(a){var l=new Set(a),c=new Set(e),i=n.current;l.forEach(function(o){c.has(o)||st(o,null)}),c.forEach(function(o){l.has(o)||st(o,i)})}Pt.set(n,e)},[e]),n}function vr(e){return e}function xr(e,t){t===void 0&&(t=vr);var n=[],a=!1,l={read:function(){if(a)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var i=t(c,a);return n.push(i),function(){n=n.filter(function(o){return o!==i})}},assignSyncMedium:function(c){for(a=!0;n.length;){var i=n;n=[],i.forEach(c)}n={push:function(o){return c(o)},filter:function(){return n}}},assignMedium:function(c){a=!0;var i=[];if(n.length){var o=n;n=[],o.forEach(c),i=n}var d=function(){var y=i;i=[],y.forEach(c)},m=function(){return Promise.resolve().then(d)};m(),n={push:function(y){i.push(y),m()},filter:function(y){return i=i.filter(y),n}}}};return l}function Sr(e){e===void 0&&(e={});var t=xr(null);return t.options=te({async:!0,ssr:!1},e),t}var qt=function(e){var t=e.sideCar,n=zt(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw new Error("Sidecar medium not found");return s.createElement(a,te({},n))};qt.isSideCarExport=!0;function yr(e,t){return e.useMedium(t),qt}var Ut=Sr(),ot=function(){},Je=s.forwardRef(function(e,t){var n=s.useRef(null),a=s.useState({onScrollCapture:ot,onWheelCapture:ot,onTouchMoveCapture:ot}),l=a[0],c=a[1],i=e.forwardProps,o=e.children,d=e.className,m=e.removeScrollBar,y=e.enabled,x=e.shards,w=e.sideCar,S=e.noRelative,L=e.noIsolation,u=e.inert,p=e.allowPinchZoom,b=e.as,h=b===void 0?"div":b,v=e.gapMode,N=zt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),j=w,B=fr([n,t]),E=te(te({},N),l);return s.createElement(s.Fragment,null,y&&s.createElement(j,{sideCar:Ut,removeScrollBar:m,shards:x,noRelative:S,noIsolation:L,inert:u,setCallbacks:c,allowPinchZoom:!!p,lockRef:n,gapMode:v}),i?s.cloneElement(s.Children.only(o),te(te({},E),{ref:B})):s.createElement(h,te({},E,{className:d,ref:B}),o))});Je.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Je.classNames={fullWidth:Ye,zeroRight:Ue};var br=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Cr(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=br();return t&&e.setAttribute("nonce",t),e}function wr(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Nr(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var jr=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Cr())&&(wr(t,n),Nr(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Er=function(){var e=jr();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Yt=function(){var e=Er(),t=function(n){var a=n.styles,l=n.dynamic;return e(a,l),null};return t},kr={left:0,top:0,right:0,gap:0},lt=function(e){return parseInt(e||"",10)||0},Tr=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],a=t[e==="padding"?"paddingTop":"marginTop"],l=t[e==="padding"?"paddingRight":"marginRight"];return[lt(n),lt(a),lt(l)]},Lr=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return kr;var t=Tr(e),n=document.documentElement.clientWidth,a=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,a-n+t[2]-t[0])}},Pr=Yt(),xe="data-scroll-locked",Ir=function(e,t,n,a){var l=e.left,c=e.top,i=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(pr,` {
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
  
  .`).concat(Ue,` {
    right: `).concat(o,"px ").concat(a,`;
  }
  
  .`).concat(Ye,` {
    margin-right: `).concat(o,"px ").concat(a,`;
  }
  
  .`).concat(Ue," .").concat(Ue,` {
    right: 0 `).concat(a,`;
  }
  
  .`).concat(Ye," .").concat(Ye,` {
    margin-right: 0 `).concat(a,`;
  }
  
  body[`).concat(xe,`] {
    `).concat(gr,": ").concat(o,`px;
  }
`)},It=function(){var e=parseInt(document.body.getAttribute(xe)||"0",10);return isFinite(e)?e:0},_r=function(){s.useEffect(function(){return document.body.setAttribute(xe,(It()+1).toString()),function(){var e=It()-1;e<=0?document.body.removeAttribute(xe):document.body.setAttribute(xe,e.toString())}},[])},Rr=function(e){var t=e.noRelative,n=e.noImportant,a=e.gapMode,l=a===void 0?"margin":a;_r();var c=s.useMemo(function(){return Lr(l)},[l]);return s.createElement(Pr,{styles:Ir(c,!t,l,n?"":"!important")})},ut=!1;if(typeof window<"u")try{var Fe=Object.defineProperty({},"passive",{get:function(){return ut=!0,!0}});window.addEventListener("test",Fe,Fe),window.removeEventListener("test",Fe,Fe)}catch{ut=!1}var fe=ut?{passive:!1}:!1,Ar=function(e){return e.tagName==="TEXTAREA"},$t=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Ar(e)&&n[t]==="visible")},Dr=function(e){return $t(e,"overflowY")},Or=function(e){return $t(e,"overflowX")},_t=function(e,t){var n=t.ownerDocument,a=t;do{typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&(a=a.host);var l=Gt(e,a);if(l){var c=Xt(e,a),i=c[1],o=c[2];if(i>o)return!0}a=a.parentNode}while(a&&a!==n.body);return!1},Mr=function(e){var t=e.scrollTop,n=e.scrollHeight,a=e.clientHeight;return[t,n,a]},Kr=function(e){var t=e.scrollLeft,n=e.scrollWidth,a=e.clientWidth;return[t,n,a]},Gt=function(e,t){return e==="v"?Dr(t):Or(t)},Xt=function(e,t){return e==="v"?Mr(t):Kr(t)},Vr=function(e,t){return e==="h"&&t==="rtl"?-1:1},Hr=function(e,t,n,a,l){var c=Vr(e,window.getComputedStyle(t).direction),i=c*a,o=n.target,d=t.contains(o),m=!1,y=i>0,x=0,w=0;do{if(!o)break;var S=Xt(e,o),L=S[0],u=S[1],p=S[2],b=u-p-c*L;(L||b)&&Gt(e,o)&&(x+=b,w+=L);var h=o.parentNode;o=h&&h.nodeType===Node.DOCUMENT_FRAGMENT_NODE?h.host:h}while(!d&&o!==document.body||d&&(t.contains(o)||t===o));return(y&&Math.abs(x)<1||!y&&Math.abs(w)<1)&&(m=!0),m},ze=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Rt=function(e){return[e.deltaX,e.deltaY]},At=function(e){return e&&"current"in e?e.current:e},Br=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Wr=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Fr=0,ve=[];function zr(e){var t=s.useRef([]),n=s.useRef([0,0]),a=s.useRef(),l=s.useState(Fr++)[0],c=s.useState(Yt)[0],i=s.useRef(e);s.useEffect(function(){i.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(l));var u=dr([e.lockRef.current],(e.shards||[]).map(At),!0).filter(Boolean);return u.forEach(function(p){return p.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),u.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(l))})}}},[e.inert,e.lockRef.current,e.shards]);var o=s.useCallback(function(u,p){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!i.current.allowPinchZoom;var b=ze(u),h=n.current,v="deltaX"in u?u.deltaX:h[0]-b[0],N="deltaY"in u?u.deltaY:h[1]-b[1],j,B=u.target,E=Math.abs(v)>Math.abs(N)?"h":"v";if("touches"in u&&E==="h"&&B.type==="range")return!1;var V=window.getSelection(),O=V&&V.anchorNode,I=O?O===B||O.contains(B):!1;if(I)return!1;var M=_t(E,B);if(!M)return!0;if(M?j=E:(j=E==="v"?"h":"v",M=_t(E,B)),!M)return!1;if(!a.current&&"changedTouches"in u&&(v||N)&&(a.current=j),!j)return!0;var z=a.current||j;return Hr(z,p,u,z==="h"?v:N)},[]),d=s.useCallback(function(u){var p=u;if(!(!ve.length||ve[ve.length-1]!==c)){var b="deltaY"in p?Rt(p):ze(p),h=t.current.filter(function(j){return j.name===p.type&&(j.target===p.target||p.target===j.shadowParent)&&Br(j.delta,b)})[0];if(h&&h.should){p.cancelable&&p.preventDefault();return}if(!h){var v=(i.current.shards||[]).map(At).filter(Boolean).filter(function(j){return j.contains(p.target)}),N=v.length>0?o(p,v[0]):!i.current.noIsolation;N&&p.cancelable&&p.preventDefault()}}},[]),m=s.useCallback(function(u,p,b,h){var v={name:u,delta:p,target:b,should:h,shadowParent:qr(b)};t.current.push(v),setTimeout(function(){t.current=t.current.filter(function(N){return N!==v})},1)},[]),y=s.useCallback(function(u){n.current=ze(u),a.current=void 0},[]),x=s.useCallback(function(u){m(u.type,Rt(u),u.target,o(u,e.lockRef.current))},[]),w=s.useCallback(function(u){m(u.type,ze(u),u.target,o(u,e.lockRef.current))},[]);s.useEffect(function(){return ve.push(c),e.setCallbacks({onScrollCapture:x,onWheelCapture:x,onTouchMoveCapture:w}),document.addEventListener("wheel",d,fe),document.addEventListener("touchmove",d,fe),document.addEventListener("touchstart",y,fe),function(){ve=ve.filter(function(u){return u!==c}),document.removeEventListener("wheel",d,fe),document.removeEventListener("touchmove",d,fe),document.removeEventListener("touchstart",y,fe)}},[]);var S=e.removeScrollBar,L=e.inert;return s.createElement(s.Fragment,null,L?s.createElement(c,{styles:Wr(l)}):null,S?s.createElement(Rr,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function qr(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Ur=yr(Ut,zr);var Jt=s.forwardRef(function(e,t){return s.createElement(Je,te({},e,{ref:t,sideCar:Ur}))});Jt.classNames=Je.classNames;var Yr=[" ","Enter","ArrowUp","ArrowDown"],$r=[" ","Enter"],de="Select",[Ze,Qe,Gr]=Fn(de),[Se]=Hn(de,[Gr,Mt]),et=Mt(),[Xr,ie]=Se(de),[Jr,Zr]=Se(de),Zt=e=>{const{__scopeSelect:t,children:n,open:a,defaultOpen:l,onOpenChange:c,value:i,defaultValue:o,onValueChange:d,dir:m,name:y,autoComplete:x,disabled:w,required:S,form:L}=e,u=et(t),[p,b]=s.useState(null),[h,v]=s.useState(null),[N,j]=s.useState(!1),B=Wn(m),[E,V]=Ct({prop:a,defaultProp:l??!1,onChange:c,caller:de}),[O,I]=Ct({prop:i,defaultProp:o,onChange:d,caller:de}),M=s.useRef(null),z=p?L||!!p.closest("form"):!0,[U,F]=s.useState(new Set),Y=Array.from(U).map(K=>K.props.value).join(";");return r.jsx(Un,{...u,children:r.jsxs(Xr,{required:S,scope:t,trigger:p,onTriggerChange:b,valueNode:h,onValueNodeChange:v,valueNodeHasChildren:N,onValueNodeHasChildrenChange:j,contentId:St(),value:O,onValueChange:I,open:E,onOpenChange:V,dir:B,triggerPointerDownPosRef:M,disabled:w,children:[r.jsx(Ze.Provider,{scope:t,children:r.jsx(Jr,{scope:e.__scopeSelect,onNativeOptionAdd:s.useCallback(K=>{F($=>new Set($).add(K))},[]),onNativeOptionRemove:s.useCallback(K=>{F($=>{const G=new Set($);return G.delete(K),G})},[]),children:n})}),z?r.jsxs(wn,{"aria-hidden":!0,required:S,tabIndex:-1,name:y,autoComplete:x,value:O,onChange:K=>I(K.target.value),disabled:w,form:L,children:[O===void 0?r.jsx("option",{value:""}):null,Array.from(U)]},Y):null]})})};Zt.displayName=de;var Qt="SelectTrigger",en=s.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:a=!1,...l}=e,c=et(n),i=ie(Qt,n),o=i.disabled||a,d=Z(t,i.onTriggerChange),m=Qe(n),y=s.useRef("touch"),[x,w,S]=jn(u=>{const p=m().filter(v=>!v.disabled),b=p.find(v=>v.value===i.value),h=En(p,u,b);h!==void 0&&i.onValueChange(h.value)}),L=u=>{o||(i.onOpenChange(!0),S()),u&&(i.triggerPointerDownPosRef.current={x:Math.round(u.pageX),y:Math.round(u.pageY)})};return r.jsx(Yn,{asChild:!0,...c,children:r.jsx(q.button,{type:"button",role:"combobox","aria-controls":i.contentId,"aria-expanded":i.open,"aria-required":i.required,"aria-autocomplete":"none",dir:i.dir,"data-state":i.open?"open":"closed",disabled:o,"data-disabled":o?"":void 0,"data-placeholder":Nn(i.value)?"":void 0,...l,ref:d,onClick:H(l.onClick,u=>{u.currentTarget.focus(),y.current!=="mouse"&&L(u)}),onPointerDown:H(l.onPointerDown,u=>{y.current=u.pointerType;const p=u.target;p.hasPointerCapture(u.pointerId)&&p.releasePointerCapture(u.pointerId),u.button===0&&u.ctrlKey===!1&&u.pointerType==="mouse"&&(L(u),u.preventDefault())}),onKeyDown:H(l.onKeyDown,u=>{const p=x.current!=="";!(u.ctrlKey||u.altKey||u.metaKey)&&u.key.length===1&&w(u.key),!(p&&u.key===" ")&&Yr.includes(u.key)&&(L(),u.preventDefault())})})})});en.displayName=Qt;var tn="SelectValue",nn=s.forwardRef((e,t)=>{const{__scopeSelect:n,className:a,style:l,children:c,placeholder:i="",...o}=e,d=ie(tn,n),{onValueNodeHasChildrenChange:m}=d,y=c!==void 0,x=Z(t,d.onValueNodeChange);return le(()=>{m(y)},[m,y]),r.jsx(q.span,{...o,ref:x,style:{pointerEvents:"none"},children:Nn(d.value)?r.jsx(r.Fragment,{children:i}):c})});nn.displayName=tn;var Qr="SelectIcon",rn=s.forwardRef((e,t)=>{const{__scopeSelect:n,children:a,...l}=e;return r.jsx(q.span,{"aria-hidden":!0,...l,ref:t,children:a||"▼"})});rn.displayName=Qr;var ea="SelectPortal",an=e=>r.jsx($n,{asChild:!0,...e});an.displayName=ea;var pe="SelectContent",sn=s.forwardRef((e,t)=>{const n=ie(pe,e.__scopeSelect),[a,l]=s.useState();if(le(()=>{l(new DocumentFragment)},[]),!n.open){const c=a;return c?Ot.createPortal(r.jsx(on,{scope:e.__scopeSelect,children:r.jsx(Ze.Slot,{scope:e.__scopeSelect,children:r.jsx("div",{children:e.children})})}),c):null}return r.jsx(ln,{...e,ref:t})});sn.displayName=pe;var J=10,[on,ce]=Se(pe),ta="SelectContentImpl",na=Bn("SelectContent.RemoveScroll"),ln=s.forwardRef((e,t)=>{const{__scopeSelect:n,position:a="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:c,onPointerDownOutside:i,side:o,sideOffset:d,align:m,alignOffset:y,arrowPadding:x,collisionBoundary:w,collisionPadding:S,sticky:L,hideWhenDetached:u,avoidCollisions:p,...b}=e,h=ie(pe,n),[v,N]=s.useState(null),[j,B]=s.useState(null),E=Z(t,g=>N(g)),[V,O]=s.useState(null),[I,M]=s.useState(null),z=Qe(n),[U,F]=s.useState(!1),Y=s.useRef(!1);s.useEffect(()=>{if(v)return ur(v)},[v]),Qn();const K=s.useCallback(g=>{const[k,...R]=z().map(A=>A.ref.current),[P]=R.slice(-1),_=document.activeElement;for(const A of g)if(A===_||(A?.scrollIntoView({block:"nearest"}),A===k&&j&&(j.scrollTop=0),A===P&&j&&(j.scrollTop=j.scrollHeight),A?.focus(),document.activeElement!==_))return},[z,j]),$=s.useCallback(()=>K([V,v]),[K,V,v]);s.useEffect(()=>{U&&$()},[U,$]);const{onOpenChange:G,triggerPointerDownPosRef:X}=h;s.useEffect(()=>{if(v){let g={x:0,y:0};const k=P=>{g={x:Math.abs(Math.round(P.pageX)-(X.current?.x??0)),y:Math.abs(Math.round(P.pageY)-(X.current?.y??0))}},R=P=>{g.x<=10&&g.y<=10?P.preventDefault():v.contains(P.target)||G(!1),document.removeEventListener("pointermove",k),X.current=null};return X.current!==null&&(document.addEventListener("pointermove",k),document.addEventListener("pointerup",R,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",k),document.removeEventListener("pointerup",R,{capture:!0})}}},[v,G,X]),s.useEffect(()=>{const g=()=>G(!1);return window.addEventListener("blur",g),window.addEventListener("resize",g),()=>{window.removeEventListener("blur",g),window.removeEventListener("resize",g)}},[G]);const[ye,ge]=jn(g=>{const k=z().filter(_=>!_.disabled),R=k.find(_=>_.ref.current===document.activeElement),P=En(k,g,R);P&&setTimeout(()=>P.ref.current.focus())}),be=s.useCallback((g,k,R)=>{const P=!Y.current&&!R;(h.value!==void 0&&h.value===k||P)&&(O(g),P&&(Y.current=!0))},[h.value]),he=s.useCallback(()=>v?.focus(),[v]),ae=s.useCallback((g,k,R)=>{const P=!Y.current&&!R;(h.value!==void 0&&h.value===k||P)&&M(g)},[h.value]),f=a==="popper"?dt:cn,C=f===dt?{side:o,sideOffset:d,align:m,alignOffset:y,arrowPadding:x,collisionBoundary:w,collisionPadding:S,sticky:L,hideWhenDetached:u,avoidCollisions:p}:{};return r.jsx(on,{scope:n,content:v,viewport:j,onViewportChange:B,itemRefCallback:be,selectedItem:V,onItemLeave:he,itemTextRefCallback:ae,focusSelectedItem:$,selectedItemText:I,position:a,isPositioned:U,searchRef:ye,children:r.jsx(Jt,{as:na,allowPinchZoom:!0,children:r.jsx(Bt,{asChild:!0,trapped:h.open,onMountAutoFocus:g=>{g.preventDefault()},onUnmountAutoFocus:H(l,g=>{h.trigger?.focus({preventScroll:!0}),g.preventDefault()}),children:r.jsx(qn,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:c,onPointerDownOutside:i,onFocusOutside:g=>g.preventDefault(),onDismiss:()=>h.onOpenChange(!1),children:r.jsx(f,{role:"listbox",id:h.contentId,"data-state":h.open?"open":"closed",dir:h.dir,onContextMenu:g=>g.preventDefault(),...b,...C,onPlaced:()=>F(!0),ref:E,style:{display:"flex",flexDirection:"column",outline:"none",...b.style},onKeyDown:H(b.onKeyDown,g=>{const k=g.ctrlKey||g.altKey||g.metaKey;if(g.key==="Tab"&&g.preventDefault(),!k&&g.key.length===1&&ge(g.key),["ArrowUp","ArrowDown","Home","End"].includes(g.key)){let P=z().filter(_=>!_.disabled).map(_=>_.ref.current);if(["ArrowUp","End"].includes(g.key)&&(P=P.slice().reverse()),["ArrowUp","ArrowDown"].includes(g.key)){const _=g.target,A=P.indexOf(_);P=P.slice(A+1)}setTimeout(()=>K(P)),g.preventDefault()}})})})})})})});ln.displayName=ta;var ra="SelectItemAlignedPosition",cn=s.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:a,...l}=e,c=ie(pe,n),i=ce(pe,n),[o,d]=s.useState(null),[m,y]=s.useState(null),x=Z(t,E=>y(E)),w=Qe(n),S=s.useRef(!1),L=s.useRef(!0),{viewport:u,selectedItem:p,selectedItemText:b,focusSelectedItem:h}=i,v=s.useCallback(()=>{if(c.trigger&&c.valueNode&&o&&m&&u&&p&&b){const E=c.trigger.getBoundingClientRect(),V=m.getBoundingClientRect(),O=c.valueNode.getBoundingClientRect(),I=b.getBoundingClientRect();if(c.dir!=="rtl"){const _=I.left-V.left,A=O.left-_,Q=E.left-A,ne=E.width+Q,se=Math.max(ne,V.width),Ce=window.innerWidth-J,we=Nt(A,[J,Math.max(J,Ce-se)]);o.style.minWidth=ne+"px",o.style.left=we+"px"}else{const _=V.right-I.right,A=window.innerWidth-O.right-_,Q=window.innerWidth-E.right-A,ne=E.width+Q,se=Math.max(ne,V.width),Ce=window.innerWidth-J,we=Nt(A,[J,Math.max(J,Ce-se)]);o.style.minWidth=ne+"px",o.style.right=we+"px"}const M=w(),z=window.innerHeight-J*2,U=u.scrollHeight,F=window.getComputedStyle(m),Y=parseInt(F.borderTopWidth,10),K=parseInt(F.paddingTop,10),$=parseInt(F.borderBottomWidth,10),G=parseInt(F.paddingBottom,10),X=Y+K+U+G+$,ye=Math.min(p.offsetHeight*5,X),ge=window.getComputedStyle(u),be=parseInt(ge.paddingTop,10),he=parseInt(ge.paddingBottom,10),ae=E.top+E.height/2-J,f=z-ae,C=p.offsetHeight/2,g=p.offsetTop+C,k=Y+K+g,R=X-k;if(k<=ae){const _=M.length>0&&p===M[M.length-1].ref.current;o.style.bottom="0px";const A=m.clientHeight-u.offsetTop-u.offsetHeight,Q=Math.max(f,C+(_?he:0)+A+$),ne=k+Q;o.style.height=ne+"px"}else{const _=M.length>0&&p===M[0].ref.current;o.style.top="0px";const Q=Math.max(ae,Y+u.offsetTop+(_?be:0)+C)+R;o.style.height=Q+"px",u.scrollTop=k-ae+u.offsetTop}o.style.margin=`${J}px 0`,o.style.minHeight=ye+"px",o.style.maxHeight=z+"px",a?.(),requestAnimationFrame(()=>S.current=!0)}},[w,c.trigger,c.valueNode,o,m,u,p,b,c.dir,a]);le(()=>v(),[v]);const[N,j]=s.useState();le(()=>{m&&j(window.getComputedStyle(m).zIndex)},[m]);const B=s.useCallback(E=>{E&&L.current===!0&&(v(),h?.(),L.current=!1)},[v,h]);return r.jsx(sa,{scope:n,contentWrapper:o,shouldExpandOnScrollRef:S,onScrollButtonChange:B,children:r.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:N},children:r.jsx(q.div,{...l,ref:x,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}})})})});cn.displayName=ra;var aa="SelectPopperPosition",dt=s.forwardRef((e,t)=>{const{__scopeSelect:n,align:a="start",collisionPadding:l=J,...c}=e,i=et(n);return r.jsx(Gn,{...i,...c,ref:t,align:a,collisionPadding:l,style:{boxSizing:"border-box",...c.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});dt.displayName=aa;var[sa,yt]=Se(pe,{}),pt="SelectViewport",un=s.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:a,...l}=e,c=ce(pt,n),i=yt(pt,n),o=Z(t,c.onViewportChange),d=s.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),r.jsx(Ze.Slot,{scope:n,children:r.jsx(q.div,{"data-radix-select-viewport":"",role:"presentation",...l,ref:o,style:{position:"relative",flex:1,overflow:"hidden auto",...l.style},onScroll:H(l.onScroll,m=>{const y=m.currentTarget,{contentWrapper:x,shouldExpandOnScrollRef:w}=i;if(w?.current&&x){const S=Math.abs(d.current-y.scrollTop);if(S>0){const L=window.innerHeight-J*2,u=parseFloat(x.style.minHeight),p=parseFloat(x.style.height),b=Math.max(u,p);if(b<L){const h=b+S,v=Math.min(L,h),N=h-v;x.style.height=v+"px",x.style.bottom==="0px"&&(y.scrollTop=N>0?N:0,x.style.justifyContent="flex-end")}}}d.current=y.scrollTop})})})]})});un.displayName=pt;var dn="SelectGroup",[oa,la]=Se(dn),pn=s.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e,l=St();return r.jsx(oa,{scope:n,id:l,children:r.jsx(q.div,{role:"group","aria-labelledby":l,...a,ref:t})})});pn.displayName=dn;var gn="SelectLabel",hn=s.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e,l=la(gn,n);return r.jsx(q.div,{id:l.id,...a,ref:t})});hn.displayName=gn;var $e="SelectItem",[ia,mn]=Se($e),fn=s.forwardRef((e,t)=>{const{__scopeSelect:n,value:a,disabled:l=!1,textValue:c,...i}=e,o=ie($e,n),d=ce($e,n),m=o.value===a,[y,x]=s.useState(c??""),[w,S]=s.useState(!1),L=Z(t,h=>d.itemRefCallback?.(h,a,l)),u=St(),p=s.useRef("touch"),b=()=>{l||(o.onValueChange(a),o.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return r.jsx(ia,{scope:n,value:a,disabled:l,textId:u,isSelected:m,onItemTextChange:s.useCallback(h=>{x(v=>v||(h?.textContent??"").trim())},[]),children:r.jsx(Ze.ItemSlot,{scope:n,value:a,disabled:l,textValue:y,children:r.jsx(q.div,{role:"option","aria-labelledby":u,"data-highlighted":w?"":void 0,"aria-selected":m&&w,"data-state":m?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1,...i,ref:L,onFocus:H(i.onFocus,()=>S(!0)),onBlur:H(i.onBlur,()=>S(!1)),onClick:H(i.onClick,()=>{p.current!=="mouse"&&b()}),onPointerUp:H(i.onPointerUp,()=>{p.current==="mouse"&&b()}),onPointerDown:H(i.onPointerDown,h=>{p.current=h.pointerType}),onPointerMove:H(i.onPointerMove,h=>{p.current=h.pointerType,l?d.onItemLeave?.():p.current==="mouse"&&h.currentTarget.focus({preventScroll:!0})}),onPointerLeave:H(i.onPointerLeave,h=>{h.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:H(i.onKeyDown,h=>{d.searchRef?.current!==""&&h.key===" "||($r.includes(h.key)&&b(),h.key===" "&&h.preventDefault())})})})})});fn.displayName=$e;var He="SelectItemText",vn=s.forwardRef((e,t)=>{const{__scopeSelect:n,className:a,style:l,...c}=e,i=ie(He,n),o=ce(He,n),d=mn(He,n),m=Zr(He,n),[y,x]=s.useState(null),w=Z(t,b=>x(b),d.onItemTextChange,b=>o.itemTextRefCallback?.(b,d.value,d.disabled)),S=y?.textContent,L=s.useMemo(()=>r.jsx("option",{value:d.value,disabled:d.disabled,children:S},d.value),[d.disabled,d.value,S]),{onNativeOptionAdd:u,onNativeOptionRemove:p}=m;return le(()=>(u(L),()=>p(L)),[u,p,L]),r.jsxs(r.Fragment,{children:[r.jsx(q.span,{id:d.textId,...c,ref:w}),d.isSelected&&i.valueNode&&!i.valueNodeHasChildren?Ot.createPortal(c.children,i.valueNode):null]})});vn.displayName=He;var xn="SelectItemIndicator",Sn=s.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e;return mn(xn,n).isSelected?r.jsx(q.span,{"aria-hidden":!0,...a,ref:t}):null});Sn.displayName=xn;var gt="SelectScrollUpButton",yn=s.forwardRef((e,t)=>{const n=ce(gt,e.__scopeSelect),a=yt(gt,e.__scopeSelect),[l,c]=s.useState(!1),i=Z(t,a.onScrollButtonChange);return le(()=>{if(n.viewport&&n.isPositioned){let o=function(){const m=d.scrollTop>0;c(m)};const d=n.viewport;return o(),d.addEventListener("scroll",o),()=>d.removeEventListener("scroll",o)}},[n.viewport,n.isPositioned]),l?r.jsx(Cn,{...e,ref:i,onAutoScroll:()=>{const{viewport:o,selectedItem:d}=n;o&&d&&(o.scrollTop=o.scrollTop-d.offsetHeight)}}):null});yn.displayName=gt;var ht="SelectScrollDownButton",bn=s.forwardRef((e,t)=>{const n=ce(ht,e.__scopeSelect),a=yt(ht,e.__scopeSelect),[l,c]=s.useState(!1),i=Z(t,a.onScrollButtonChange);return le(()=>{if(n.viewport&&n.isPositioned){let o=function(){const m=d.scrollHeight-d.clientHeight,y=Math.ceil(d.scrollTop)<m;c(y)};const d=n.viewport;return o(),d.addEventListener("scroll",o),()=>d.removeEventListener("scroll",o)}},[n.viewport,n.isPositioned]),l?r.jsx(Cn,{...e,ref:i,onAutoScroll:()=>{const{viewport:o,selectedItem:d}=n;o&&d&&(o.scrollTop=o.scrollTop+d.offsetHeight)}}):null});bn.displayName=ht;var Cn=s.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:a,...l}=e,c=ce("SelectScrollButton",n),i=s.useRef(null),o=Qe(n),d=s.useCallback(()=>{i.current!==null&&(window.clearInterval(i.current),i.current=null)},[]);return s.useEffect(()=>()=>d(),[d]),le(()=>{o().find(y=>y.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[o]),r.jsx(q.div,{"aria-hidden":!0,...l,ref:t,style:{flexShrink:0,...l.style},onPointerDown:H(l.onPointerDown,()=>{i.current===null&&(i.current=window.setInterval(a,50))}),onPointerMove:H(l.onPointerMove,()=>{c.onItemLeave?.(),i.current===null&&(i.current=window.setInterval(a,50))}),onPointerLeave:H(l.onPointerLeave,()=>{d()})})}),ca="SelectSeparator",ua=s.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e;return r.jsx(q.div,{"aria-hidden":!0,...a,ref:t})});ua.displayName=ca;var mt="SelectArrow",da=s.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e,l=et(n),c=ie(mt,n),i=ce(mt,n);return c.open&&i.position==="popper"?r.jsx(Xn,{...l,...a,ref:t}):null});da.displayName=mt;var pa="SelectBubbleInput",wn=s.forwardRef(({__scopeSelect:e,value:t,...n},a)=>{const l=s.useRef(null),c=Z(a,l),i=Jn(t);return s.useEffect(()=>{const o=l.current;if(!o)return;const d=window.HTMLSelectElement.prototype,y=Object.getOwnPropertyDescriptor(d,"value").set;if(i!==t&&y){const x=new Event("change",{bubbles:!0});y.call(o,t),o.dispatchEvent(x)}},[i,t]),r.jsx(q.select,{...n,style:{...zn,...n.style},ref:c,defaultValue:t})});wn.displayName=pa;function Nn(e){return e===""||e===void 0}function jn(e){const t=ct(e),n=s.useRef(""),a=s.useRef(0),l=s.useCallback(i=>{const o=n.current+i;t(o),(function d(m){n.current=m,window.clearTimeout(a.current),m!==""&&(a.current=window.setTimeout(()=>d(""),1e3))})(o)},[t]),c=s.useCallback(()=>{n.current="",window.clearTimeout(a.current)},[]);return s.useEffect(()=>()=>window.clearTimeout(a.current),[]),[n,l,c]}function En(e,t,n){const l=t.length>1&&Array.from(t).every(m=>m===t[0])?t[0]:t,c=n?e.indexOf(n):-1;let i=ga(e,Math.max(c,0));l.length===1&&(i=i.filter(m=>m!==n));const d=i.find(m=>m.textValue.toLowerCase().startsWith(l.toLowerCase()));return d!==n?d:void 0}function ga(e,t){return e.map((n,a)=>e[(t+a)%e.length])}var kn=Zt,Tn=en,Ln=nn,Pn=rn,In=an,_n=sn,Rn=un,ha=pn,ma=hn,An=fn,Dn=vn,On=Sn,Mn=yn,Kn=bn;const Ge=({tooltip:e,active:t=!1,onClick:n,icon:a,className:l,children:c,variant:i="segmented",size:o="sm",alwaysShowLabel:d=!1,tooltipRootProps:m})=>{const y=i==="segmented"&&!t||i==="icon-button",x=t||d,w=s.useMemo(()=>i==="segmented"?r.jsx(Vt,{size:o,active:t,onClick:n,leftIcon:a,className:re("focus-base transition-colors",t?"bg-neutral-000 dark:bg-neutral-1100":"bg-neutral-100 dark:bg-neutral-1200 hover:bg-neutral-200 dark:hover:bg-neutral-1100 active:bg-neutral-400 dark:active:bg-neutral-900",l),children:x?c:null}):r.jsx("div",{role:"button",className:re("w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 transition-colors focus-base",l),onClick:n,onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),n?.())},tabIndex:0,children:c}),[i,o,t,n,a,l,x,c]);return y?r.jsx(Kt,{triggerElement:w,rootProps:m,className:"ml-0",contentProps:{className:"px-2 py-1 bg-neutral-1100 dark:bg-neutral-200 text-neutral-300 dark:text-neutral-1000"},triggerProps:{className:"ml-0 h-auto"},children:e}):w};try{Ge.displayName="TooltipButton",Ge.__docgenInfo={description:"",displayName:"TooltipButton",filePath:"/home/runner/work/website/website/packages/ui/src/core/CodeSnippet/TooltipButton.tsx",methods:[],props:{tooltip:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/TooltipButton.tsx",name:"TypeLiteral"}],description:"",name:"tooltip",required:!0,tags:{},type:{name:"ReactNode"}},active:{defaultValue:{value:"false"},declarations:[{fileName:"ui/src/core/CodeSnippet/TooltipButton.tsx",name:"TypeLiteral"}],description:"",name:"active",required:!1,tags:{},type:{name:"boolean"}},onClick:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/TooltipButton.tsx",name:"TypeLiteral"}],description:"",name:"onClick",required:!0,tags:{},type:{name:"() => void"}},icon:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/TooltipButton.tsx",name:"TypeLiteral"}],description:"",name:"icon",required:!1,tags:{},type:{name:"IconName"}},className:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/TooltipButton.tsx",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}},variant:{defaultValue:{value:"segmented"},declarations:[{fileName:"ui/src/core/CodeSnippet/TooltipButton.tsx",name:"TypeLiteral"}],description:"",name:"variant",required:!1,tags:{},type:{name:"enum",raw:'"segmented" | "icon-button"',value:[{value:'"segmented"'},{value:'"icon-button"'}]}},size:{defaultValue:{value:"sm"},declarations:[{fileName:"ui/src/core/CodeSnippet/TooltipButton.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"enum",raw:"SegmentedControlSize",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'}]}},alwaysShowLabel:{defaultValue:{value:"false"},declarations:[{fileName:"ui/src/core/CodeSnippet/TooltipButton.tsx",name:"TypeLiteral"}],description:"",name:"alwaysShowLabel",required:!1,tags:{},type:{name:"boolean"}},tooltipRootProps:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/TooltipButton.tsx",name:"TypeLiteral"}],description:"",name:"tooltipRootProps",required:!1,tags:{},type:{name:"TooltipProps"}}},tags:{}}}catch{}const ft=({languages:e,activeLanguage:t,onLanguageChange:n})=>{const a=s.useMemo(()=>e.map(i=>{const o=t===i,d=ee(i).label;return r.jsx(Ge,{tooltip:d,active:o,onClick:()=>n(i),icon:ee(i).icon,variant:"segmented",size:"xs",children:d},i)}),[e,t,n]),l=s.useMemo(()=>e.map(i=>r.jsxs(An,{value:i,className:"relative flex items-center rounded px-2 py-1.5 text-14 text-neutral-1300 dark:text-neutral-000 select-none hover:bg-neutral-100 dark:hover:bg-neutral-1200 data-[highlighted]:outline-none data-[highlighted]:bg-neutral-100 dark:data-[highlighted]:bg-neutral-1200 focus-base",children:[r.jsx(Dn,{asChild:!0,children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(W,{name:ee(i).icon,size:"20px"}),r.jsx("span",{children:ee(i).label})]})}),r.jsx(On,{className:"absolute right-2",children:r.jsx(W,{name:"icon-gui-check-outline",size:"16px"})})]},i)),[e]),c=s.useMemo(()=>t?r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(W,{name:ee(t).icon,size:"20px"}),r.jsx("span",{children:ee(t).label})]}):null,[t]);return r.jsxs("div",{className:"p-2 border-b border-neutral-300 dark:border-neutral-1000 overflow-x-auto",children:[r.jsx("div",{className:"hidden sm:flex gap-1",children:a}),r.jsx("div",{className:"sm:hidden w-full",children:r.jsxs(kn,{value:t||void 0,onValueChange:n,children:[r.jsxs(Tn,{className:"w-full inline-flex items-center justify-between rounded-lg px-3 py-2 text-14 text-neutral-1300 dark:text-neutral-000 bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 gap-1 border border-neutral-300 dark:border-neutral-900 focus-base","aria-label":"Select language",children:[r.jsx(Ln,{asChild:!0,children:c}),r.jsx(Pn,{children:r.jsx(W,{name:"icon-gui-chevron-down-outline",size:"16px"})})]}),r.jsx(In,{children:r.jsxs(_n,{className:"overflow-hidden rounded-md bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 shadow-md z-50 w-[var(--radix-select-trigger-width)]",position:"popper",children:[r.jsx(Mn,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(W,{name:"icon-gui-chevron-down-outline",size:"16px",additionalCSS:"rotate-180"})}),r.jsx(Rn,{className:"p-1",children:l}),r.jsx(Kn,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(W,{name:"icon-gui-chevron-down-outline",size:"16px"})})]})})]})})]})};try{ft.displayName="LanguageSelector",ft.__docgenInfo={description:"",displayName:"LanguageSelector",filePath:"/home/runner/work/website/website/packages/ui/src/core/CodeSnippet/LanguageSelector.tsx",methods:[],props:{languages:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/LanguageSelector.tsx",name:"TypeLiteral"}],description:"",name:"languages",required:!0,tags:{},type:{name:"string[]"}},activeLanguage:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/LanguageSelector.tsx",name:"TypeLiteral"}],description:"",name:"activeLanguage",required:!0,tags:{},type:{name:"string"}},onLanguageChange:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/LanguageSelector.tsx",name:"TypeLiteral"}],description:"",name:"onLanguageChange",required:!0,tags:{},type:{name:"(language: string) => void"}}},tags:{}}}catch{}const vt=({apiKeys:e,selectedApiKey:t,onApiKeyChange:n})=>{const a=s.useMemo(()=>e?.length===1&&e[0].app==="demo",[e]),l=s.useMemo(()=>r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Zn,{className:"ml-1 bg-neutral-200 dark:bg-neutral-1100",children:"DEMO ONLY"}),r.jsx(Kt,{className:"ml-0",triggerProps:{className:"h-5"},contentProps:{className:"bg-neutral-1100 dark:bg-neutral-200 text-neutral-300 dark:text-neutral-1000"},triggerElement:r.jsxs("div",{className:"group/code-snippet-tooltip-icon-hover flex items-center justify-center",children:[r.jsx(W,{name:"icon-gui-information-circle-outline",size:"20px",color:"text-neutral-700 dark:text-neutral-600",additionalCSS:"group-hover/code-snippet-tooltip-icon-hover:hidden"}),r.jsx(W,{name:"icon-gui-information-circle-solid",size:"20px",color:"text-neutral-1300 dark:text-neutral-000",additionalCSS:"group-hover/code-snippet-tooltip-icon-hover:flex hidden"})]}),children:"This code example uses a temporary key that is rate limited and expires in 4 hrs. Sign in to Ably to use your API keys instead."})]}),[]),c=s.useMemo(()=>a?l:e?.length?r.jsxs(kn,{value:t,onValueChange:n,children:[r.jsxs(Tn,{className:"font-sans inline-flex items-center justify-between rounded px-3 py-2 ml-1 text-14 text-neutral-1300 dark:text-neutral-000 bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 gap-2 focus-base border border-neutral-300 dark:border-neutral-1000 transition-colors","aria-label":"API Key",children:[r.jsx(Ln,{}),r.jsx(Pn,{className:"size-4",children:r.jsx(W,{name:"icon-gui-chevron-down-micro",size:"16px"})})]}),r.jsx(In,{children:r.jsxs(_n,{className:"overflow-hidden rounded-lg bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 shadow-md z-50",children:[r.jsx(Mn,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(W,{name:"icon-gui-chevron-down-outline",size:"16px",additionalCSS:"rotate-180"})}),r.jsx(Rn,{className:"rounded-lg font-sans",children:e.map(i=>r.jsxs(ha,{children:[e.length>1&&r.jsx(ma,{className:"text-neutral-700 rounded-none dark:text-neutral-600 p-1 bg-neutral-200 dark:bg-neutral-1100",children:i.app}),i.keys.map(({name:o,key:d})=>r.jsxs(An,{value:d,className:"relative flex items-center justify-between m-2 p-2 rounded-lg text-14 text-neutral-1300 dark:text-neutral-000 select-none hover:bg-neutral-100 dark:hover:bg-neutral-1200 data-[highlighted]:outline-none data-[highlighted]:bg-neutral-100 dark:data-[highlighted]:bg-neutral-1200 focus-base min-w-64",children:[r.jsxs(Dn,{children:[d.length>10?`${d.substring(0,10)}...`:d,r.jsx("span",{className:"font-light",children:o&&` - ${o}`})]}),r.jsx(On,{className:"size-4",children:r.jsx(W,{name:"icon-gui-check-micro",size:"16px"})})]},`${i.app}-${o}-${d}`))]},i.app))}),r.jsx(Kn,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(W,{name:"icon-gui-chevron-down-outline",size:"16px"})})]})})]}):null,[e,a,t,n,l]);return r.jsxs("div",{className:"flex items-center border-t border-neutral-300 dark:border-neutral-1000 px-3 py-3",children:[r.jsx("span",{className:"ui-text-label4 text-neutral-700 dark:text-neutral-600 mr-1",children:"API key:"}),c]})};try{vt.displayName="ApiKeySelector",vt.__docgenInfo={description:"",displayName:"ApiKeySelector",filePath:"/home/runner/work/website/website/packages/ui/src/core/CodeSnippet/ApiKeySelector.tsx",methods:[],props:{apiKeys:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/ApiKeySelector.tsx",name:"TypeLiteral"}],description:"",name:"apiKeys",required:!1,tags:{},type:{name:"ApiKeysItem[]"}},selectedApiKey:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/ApiKeySelector.tsx",name:"TypeLiteral"}],description:"",name:"selectedApiKey",required:!0,tags:{},type:{name:"string"}},onApiKeyChange:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/ApiKeySelector.tsx",name:"TypeLiteral"}],description:"",name:"onApiKeyChange",required:!0,tags:{},type:{name:"(apiKey: string) => void"}}},tags:{}}}catch{}const Xe=({onCopy:e,tooltip:t="Copy"})=>{const[n,a]=s.useState(!1),[l,c]=s.useState(!1);return r.jsx("div",{className:"absolute top-2 right-2 z-10 rounded-lg focus-base",role:"button",tabIndex:0,onMouseEnter:()=>c(!0),onMouseLeave:()=>{c(!1),setTimeout(()=>{a(!1)},250)},children:r.jsx(Ge,{tooltip:n?"Copied!":t,onClick:()=>{e(),a(!0)},tooltipRootProps:{open:l},variant:"icon-button",children:r.jsx(W,{name:"icon-gui-document-duplicate-outline",size:"20px",color:"text-neutral-1300 dark:text-neutral-000"})})})};try{Xe.displayName="CopyButton",Xe.__docgenInfo={description:"",displayName:"CopyButton",filePath:"/home/runner/work/website/website/packages/ui/src/core/CodeSnippet/CopyButton.tsx",methods:[],props:{onCopy:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/CopyButton.tsx",name:"TypeLiteral"}],description:"",name:"onCopy",required:!0,tags:{},type:{name:"() => void"}},tooltip:{defaultValue:{value:"Copy"},declarations:[{fileName:"ui/src/core/CodeSnippet/CopyButton.tsx",name:"TypeLiteral"}],description:"",name:"tooltip",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const xt=({content:e,className:t,language:n,icon:a})=>{const l=s.useRef(null),[c,i]=s.useState(!1);return r.jsxs("div",{className:re("rounded-lg overflow-hidden bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 relative flex items-center",n==="shell"?"min-h-[3.375rem]":"min-h-12",t),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onFocus:()=>i(!0),onBlur:()=>i(!1),tabIndex:0,role:"button","aria-label":"Focusable code view area",ref:l,children:[a&&r.jsx("div",{className:"absolute top-2 left-2 z-10",children:r.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center bg-neutral-200 dark:bg-neutral-1100",children:r.jsx(W,{name:a,size:"20px",color:"text-neutral-1300 dark:text-neutral-000"})})}),r.jsx(Dt,{language:n,snippet:e,additionalCSS:re("w-full bg-neutral-000 text-neutral-1300 dark:bg-neutral-1300 dark:text-neutral-200 px-4 py-2",a&&"pl-14"),showLines:!1}),c&&r.jsx(Xe,{onCopy:()=>navigator.clipboard.writeText(e)})]})};try{xt.displayName="PlainCodeView",xt.__docgenInfo={description:"",displayName:"PlainCodeView",filePath:"/home/runner/work/website/website/packages/ui/src/core/CodeSnippet/PlainCodeView.tsx",methods:[],props:{content:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/PlainCodeView.tsx",name:"TypeLiteral"}],description:"",name:"content",required:!0,tags:{},type:{name:"string"}},language:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/PlainCodeView.tsx",name:"TypeLiteral"}],description:"",name:"language",required:!0,tags:{},type:{name:"string"}},icon:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/PlainCodeView.tsx",name:"TypeLiteral"}],description:"",name:"icon",required:!0,tags:{},type:{name:"IconName | null"}},className:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet/PlainCodeView.tsx",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const it=(e,t,n=!0)=>e.replace(/\{\{API_KEY\}\}/g,n?`${t.split(":")[0]}:*****`:t),D=({fixed:e=!1,headerRow:t=!1,title:n="Code",children:a,className:l,lang:c,onChange:i,apiKeys:o,sdk:d,showCodeLines:m=!0,languageOrdering:y,wrapCode:x=!1})=>{const w=s.useRef(null),[S,L]=s.useState(()=>o?.[0]?.keys?.[0]?.key??""),[u,p]=s.useState(o);u!==o&&(p(o),!S&&o&&o.length>0&&L(o[0].keys?.[0]?.key??"")),s.useEffect(()=>{const f=w.current;if(!f)return;const C=(k,R)=>k.replace(/(['"]?)([^:'"]+):\*{5}\1/g,`$1${R}$1`),g=k=>{const R=window.getSelection();if(!R||R.rangeCount===0)return;const P=R.toString();if(!P)return;const _=R.getRangeAt(0);if(!f.contains(_.commonAncestorContainer))return;const A=C(P,S);k.clipboardData?.setData("text/plain",A),k.preventDefault()};return document.addEventListener("copy",g),()=>{document.removeEventListener("copy",g)}},[S]);const b=s.useCallback(f=>{if(!f||!f.props.className)return null;const g=f.props.className.split(" ").find(k=>k.startsWith("language-"));return g?g.substring(9):null},[]),h=s.useCallback(f=>{if(s.isValidElement(f))return f;if(Array.isArray(f)){const C=f.find(g=>s.isValidElement(g));return C&&s.isValidElement(C)?C:null}return null},[]),{codeData:v,languages:N,sdkTypes:j,isSinglePlainCommand:B}=s.useMemo(()=>{const f=s.Children.toArray(a),C=[],g=new Set,k=[],R=f.length===1&&["language-shell","language-text"].some(P=>s.isValidElement(f[0])?h(f[0].props.children)?.props.className?.includes(P):!1);return f.forEach(P=>{if(!s.isValidElement(P))return;const A=h(P.props.children);if(!A)return;const Q=b(A);if(!Q)return;const ne=A.props?.["data-meta"],{lang:se,highlights:Ce}=Vn(Q,ne);for(const bt of Ht)if(se.startsWith(`${bt}_`)){g.add(bt);break}C.includes(se)||C.push(se);const we=A.props.children;k.push({language:se,content:we,lineHighlights:Ce})}),{codeData:k,languages:C,sdkTypes:g,isSinglePlainCommand:R}},[a,b,h]),E=s.useMemo(()=>j.size===1&&d&&!j.has(d)?Array.from(j)[0]:d,[d,j]),V=j.has("realtime")||j.has("rest"),O=s.useMemo(()=>{const f=!E||!V?[...N]:N.filter(C=>C.startsWith(`${E}_`));return y&&y.length>0&&f.sort((C,g)=>{const k=ue(C),R=ue(g),P=y.indexOf(k),_=y.indexOf(R);return P!==-1&&_!==-1?P-_:P!==-1?-1:_!==-1?1:0}),f},[E,V,N,y]),I=s.useMemo(()=>{if(E==="client"||E==="agent"){const f=`${E}_${c}`;if(N.includes(f))return f;const C=N.find(g=>g.startsWith(`${E}_`));if(C)return C}return E&&j.has(E)?`${E}_${c}`:c||(O.length>0?O[0]:N[0])},[E,j,c,O,N]),M=s.useMemo(()=>v.some(C=>C?.content.includes("{{API_KEY}}"))&&!!o&&o.length>0&&!!S,[v,o,S]),[z,U]=s.useState(!1),F=s.useMemo(()=>N.length===1&&N[0]==="json",[N]),Y=s.useMemo(()=>{if(!I)return[];const f=F?"json":I;return v.filter(C=>C?.language===f).map(C=>{if(!C)return null;const g=F?"json":C.language,k=ee(g??"");if(typeof C.content=="string"||typeof C.content=="number"||typeof C.content=="boolean"){let R=String(C.content);return M&&(R=it(R,S)),!k.syntaxHighlighterKey||!g?null:r.jsx(Dt,{language:k.syntaxHighlighterKey||g,snippet:R,additionalCSS:"!bg-neutral-000 text-neutral-1300 dark:!bg-neutral-1300 dark:text-neutral-200 px-6 py-4",showLines:m,wrap:x,lineHighlights:Object.keys(C.lineHighlights).length>0?C.lineHighlights:void 0},C.language)}return null})},[I,F,v,M,m,x,S]),K=s.useMemo(()=>I?F?!0:v.some(f=>f?.language===I):!1,[I,F,v]),$=s.useCallback(f=>{const C=ue(N.find(g=>g===`${f}_${ue(I)}`)??N.find(g=>g.startsWith(`${f}_`))??I);i&&C&&i(ue(I),f)},[I,N,i]),G=s.useCallback(f=>{i&&i(ue(f),E)},[i,E]),X=s.useMemo(()=>{if(!I)return null;const f=ee(I);return r.jsxs("div",{className:"px-16 py-6 ui-text-body2 text-neutral-800 dark:text-neutral-400 text-center flex flex-col gap-3 items-center",children:[r.jsx(W,{name:"icon-gui-exclamation-triangle-outline",color:"text-yellow-600 dark:text-yellow-400",size:"24px"}),r.jsxs("p",{className:"ui-text-p3 text-neutral-700 dark:text-neutral-600",children:["You're currently viewing the ",f.label," docs. There either isn't a ",f.label," code sample for this example, or this feature isn't supported in"," ",f.label,". Switch language to view this example in a different language, or check which SDKs support this feature."]})]})},[I]),ye=!e&&O.length>0,ge=O.length>1,be=e&&I,he=(f,C)=>r.jsx("div",{className:re("border-b border-neutral-300 dark:border-neutral-1000 h-[2.125rem] inline-flex items-center px-3 w-full",{"rounded-t-lg":!t}),children:r.jsxs("div",{className:re("inline-flex items-center",C&&"cursor-pointer"),...C&&{onClick:C},children:[r.jsx(W,{name:ee(f).icon,size:"16px",additionalCSS:"mr-2"}),r.jsx("span",{className:"ui-text-label4 font-semibold text-neutral-800 dark:text-neutral-500 select-none",children:ee(f).label})]})}),ae=s.useMemo(()=>I?K?Y:X:null,[I,K,Y,X]);if(B){const f=v[0];if(f){const C=f.content,g=f.language;if(!g||!C)return null;let k=String(C);return M&&(k=it(k,S)),r.jsx(xt,{content:k,className:l,language:g,icon:g==="shell"?"icon-gui-command-line-outline":null})}}return r.jsxs("div",{className:re("rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-1200 border border-neutral-300 dark:border-neutral-1000 min-h-[3.375rem]",l),children:[t&&r.jsxs("div",{className:"h-[2.375rem] bg-neutral-200 dark:bg-neutral-1100 border-b border-neutral-300 dark:border-neutral-1000 flex items-center py-1 px-3 rounded-t-lg",children:[r.jsxs("div",{className:"flex space-x-1.5",children:[r.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-500"}),r.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),r.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),r.jsx("div",{className:"flex-1 text-center ui-text-p3 font-bold text-neutral-1300 dark:text-neutral-000",children:n}),r.jsx("div",{className:"w-12"})]}),V&&r.jsx("div",{className:re("p-2 border-b border-neutral-300 dark:border-neutral-1000",j.size===1&&"p-1",t?"":"rounded-t-lg"),children:r.jsx("div",{className:"flex gap-1 justify-start",children:["realtime","rest"].map(f=>j.has(f)&&r.jsx(Vt,{onClick:()=>$(f),size:"xs",active:E===f,className:re("text-[11px] font-semibold px-2 py-1 h-auto",j.size===1&&"pointer-events-none bg-neutral-100 dark:bg-neutral-1200 !text-neutral-800 !dark:text-neutral-500",j.size>1&&E!==f&&"bg-neutral-100 dark:bg-neutral-1200 hover:bg-neutral-200 dark:hover:bg-neutral-1100 active:bg-neutral-400 dark:active:bg-neutral-900",j.size>1&&E===f&&"bg-neutral-000 dark:bg-neutral-1100"),children:f==="realtime"?"Realtime":"REST"},f))})}),be&&he(I),ye&&(ge?r.jsx(ft,{languages:O,activeLanguage:I,onLanguageChange:G}):he(O[0],()=>G(O[0]))),r.jsxs("div",{ref:w,className:"relative",onMouseEnter:()=>U(!0),onMouseLeave:()=>U(!1),onFocus:()=>U(!0),onBlur:()=>U(!1),children:[ae,z&&I&&K&&r.jsx(Xe,{onCopy:()=>{const f=v.find(C=>C.language===I)?.content;f&&navigator.clipboard.writeText(it(f,S,!1))}})]}),M&&r.jsx(vt,{apiKeys:o,selectedApiKey:S,onApiKeyChange:L})]})};try{D.displayName="CodeSnippet",D.__docgenInfo={description:"CodeSnippet component that displays code with language switching capability",displayName:"CodeSnippet",filePath:"/home/runner/work/website/website/packages/ui/src/core/CodeSnippet.tsx",methods:[],props:{fixed:{defaultValue:{value:"false"},declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:"If true, hides the language selector row completely",name:"fixed",required:!1,tags:{},type:{name:"boolean"}},headerRow:{defaultValue:{value:"false"},declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:"If true, renders a macOS-style window header with buttons and title",name:"headerRow",required:!1,tags:{},type:{name:"boolean"}},title:{defaultValue:{value:"Code"},declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:"Title to display in the header row (when headerRow is true)",name:"title",required:!1,tags:{},type:{name:"string"}},children:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:"Children elements with lang attribute",name:"children",required:!0,tags:{},type:{name:"ReactNode"}},className:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:"Additional CSS classes",name:"className",required:!1,tags:{},type:{name:"string"}},lang:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:`Default language to display. If not found in available languages, first available is used.
If found in languages but no matching snippet exists, a message is displayed.`,name:"lang",required:!0,tags:{},type:{name:"string | null"}},onChange:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:"Callback fired when the active language changes",name:"onChange",required:!1,tags:{},type:{name:'((language: string, sdk?: "rest" | "realtime" | "client" | "agent") => void)'}},apiKeys:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:"List of API keys to display in a dropdown",name:"apiKeys",required:!1,tags:{},type:{name:"ApiKeysItem[]"}},sdk:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:"Default SDK type to use for the code snippet",name:"sdk",required:!1,tags:{},type:{name:"enum",raw:'"rest" | "realtime" | "client" | "agent"',value:[{value:'"rest"'},{value:'"realtime"'},{value:'"client"'},{value:'"agent"'}]}},showCodeLines:{defaultValue:{value:"true"},declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:"Whether to show line numbers in code snippets",name:"showCodeLines",required:!1,tags:{},type:{name:"boolean"}},languageOrdering:{defaultValue:null,declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:`Defines the order in which languages should be displayed.
Languages not in this array will be shown after those that are included.`,name:"languageOrdering",required:!1,tags:{},type:{name:"string[]"}},wrapCode:{defaultValue:{value:"false"},declarations:[{fileName:"ui/src/core/CodeSnippet.tsx",name:"TypeLiteral"}],description:"Whether to wrap code content instead of scrolling",name:"wrapCode",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const T={javascript:`var ably = new Ably.Realtime('{{API_KEY}}');
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
}`},Aa={title:"Components/Code Snippet",component:D,parameters:{layout:"padded",docs:{description:{component:`The CodeSnippet component displays code with language selector tabs.
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
- Copy to clipboard functionality`}}},tags:["autodocs"]},Ne={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:T.typescript})})]})}},je={render:()=>{const[e,t]=s.useState("javascript");return r.jsx(D,{lang:e,onChange:(n,a)=>{t(n)},children:r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})})})}},Ee={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{headerRow:!0,title:"Subscribe Example",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:T.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-swift",children:T.swift})})]})}},ke={render:()=>{const[e,t]=s.useState("javascript");return r.jsx(D,{headerRow:!0,title:"JavaScript Example",lang:e,onChange:(n,a)=>{t(n)},children:r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})})})}},Te={render:()=>{const[e,t]=s.useState("swift");return r.jsxs(D,{headerRow:!0,title:"TypeScript Example",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:T.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-swift",children:T.swift})})]})}},Le={render:()=>{const[e,t]=s.useState("ruby");return r.jsxs(D,{headerRow:!0,title:"Missing Language Example",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:T.typescript})})]})}},Pe={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{headerRow:!0,title:"Demo API Keys",apiKeys:[{app:"demo",keys:[{name:"demo",key:"demokey:123456"}]}],lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:T.typescript})})]})}},Ie={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{headerRow:!0,title:"API Key Selection Example",apiKeys:[{app:"ably",keys:[{name:"Big Key",key:"bigkey:123456"},{name:"Small Key",key:"smallkey:123456"}]},{app:"bably",keys:[{name:"Big Key",key:"bigkey:654321"},{name:"Small Key",key:"smallkey:654321"}]}],lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:T.typescript})})]})}},_e={render:()=>{const[e,t]=s.useState("javascript"),[n,a]=s.useState("realtime");return r.jsxs(D,{headerRow:!0,title:"SDK Type Example",lang:e,sdk:n,onChange:(l,c)=>{t(l),a(c||"realtime")},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_typescript",children:T.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-rest_php",children:T.php})}),r.jsx("pre",{children:r.jsx("code",{className:"language-rest_kotlin",children:T.kotlin})})]})}},Re={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{headerRow:!0,title:"SDK Type Example (realtime only)",lang:e,sdk:"realtime",onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_typescript",children:T.typescript})})]})}},qe={render:()=>{const[e,t]=s.useState("javascript"),[n,a]=s.useState("realtime");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs(D,{headerRow:!0,title:"SDK Type Example (realtime only)",lang:e,sdk:n,onChange:(l,c)=>{t(l),a(c||"realtime")},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_typescript",children:T.typescript})})]}),r.jsxs(D,{headerRow:!0,title:"SDK Type Example (rest only)",lang:e,sdk:n,onChange:(l,c)=>{t(l),a(c||"realtime")},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-rest_php",children:T.php})}),r.jsx("pre",{children:r.jsx("code",{className:"language-rest_kotlin",children:T.kotlin})})]})]})}},Ae={render:()=>{const[e,t]=s.useState("shell");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx("h4",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000",children:"Shell"}),r.jsx(D,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:T.shellInstall})})}),r.jsx("h4",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000",children:"Text"}),r.jsx(D,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-text",children:"It was the best of times, it was the blurst of times."})})})]})}},De={render:()=>{const[e,t]=s.useState("shell");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2",children:"Installation"}),r.jsx(D,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:T.shellInstall})})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2",children:"Starting the server"}),r.jsx(D,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:T.shellStartServer})})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2",children:"Complex command"}),r.jsx(D,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:T.shellComplex})})})]})]})}},Oe={render:()=>{const[e,t]=s.useState("javascript");return r.jsx(D,{fixed:!0,lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})})})}},Me={render:()=>{const[e,t]=s.useState("ruby");return r.jsx(D,{headerRow:!0,title:"JSON-Only Example",lang:e,onChange:(n,a)=>{t(n)},children:r.jsx("pre",{children:r.jsx("code",{className:"language-json",children:T.json})})})}},Ke={render:()=>{const[e,t]=s.useState("javascript");return r.jsxs(D,{showCodeLines:!1,headerRow:!0,title:"No Line Numbers",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:T.typescript})})]})}},Ve={render:()=>{const[e,t]=s.useState("swift");return r.jsxs(D,{headerRow:!0,title:"Custom Language Order",languageOrdering:["swift","typescript","javascript"],lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:T.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:T.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-swift",children:T.swift})}),r.jsx("pre",{children:r.jsx("code",{className:"language-python",children:T.python})})]})}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
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
}`,...Ne.parameters?.docs?.source},description:{story:"Default example showing JavaScript and TypeScript code with language selector.",...Ne.parameters?.docs?.description}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`{
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
with just an icon and language name.`,...je.parameters?.docs?.description}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
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
}`,...Ee.parameters?.docs?.source},description:{story:"CodeSnippet with a macOS-style window header showing title and window controls.",...Ee.parameters?.docs?.description}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
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
}`,...ke.parameters?.docs?.source},description:{story:`CodeSnippet with a single language and macOS-style window header.
A simplified language selector is shown with just the icon and name.`,...ke.parameters?.docs?.description}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
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
}`,...Te.parameters?.docs?.source},description:{story:"CodeSnippet with a specified default language, which will be selected when the component mounts.",...Te.parameters?.docs?.description}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
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
}`,...Le.parameters?.docs?.source},description:{story:`CodeSnippet that shows a message when a requested language is not available.
When a language is specified that doesn't exist in the provided snippets,
a helpful message is shown prompting the user to switch languages.`,...Le.parameters?.docs?.description}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
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
}`,...Pe.parameters?.docs?.source},description:{story:'CodeSnippet with demo API key mode, showing a "DEMO ONLY" badge and information tooltip.',...Pe.parameters?.docs?.description}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
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
based on the selected SDK type. Languages must have appropriate prefixes to be filtered.`,..._e.parameters?.docs?.description}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`{
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
}`,...Re.parameters?.docs?.source},description:{story:`CodeSnippet with a single SDK type ("realtime") and multiple languages.
The SDK selector shows the condensed form.`,...Re.parameters?.docs?.description}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
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
}`,...qe.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
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
}`,...Ae.parameters?.docs?.source},description:{story:"Plain mode that displays plain code with a relevant icon, if supplied.",...Ae.parameters?.docs?.description}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
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
}`,...De.parameters?.docs?.source},description:{story:`Multiple shell command examples showing how to use the specialized shell mode
with different types of terminal commands.`,...De.parameters?.docs?.description}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`{
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
}`,...Oe.parameters?.docs?.source},description:{story:`CodeSnippet with fixed mode enabled, which hides the language selector completely
even when languages are provided.`,...Oe.parameters?.docs?.description}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`{
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
}`,...Me.parameters?.docs?.source},description:{story:`Demonstrates the special behavior for JSON-only snippets.
When only a JSON snippet is provided, it will be shown regardless of which language is selected,
instead of showing the NoSnippetMessage.`,...Me.parameters?.docs?.description}}};Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`{
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
}`,...Ke.parameters?.docs?.source},description:{story:`CodeSnippet with line numbers disabled via the showCodeLines prop.
This demonstrates how to hide line numbers in code snippets when they're not needed.`,...Ke.parameters?.docs?.description}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
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
}`,...Ve.parameters?.docs?.source},description:{story:`CodeSnippet with custom language ordering that controls the display order
of languages in the selector tabs.`,...Ve.parameters?.docs?.description}}};const Da=["Default","SingleLanguage","WithHeaderRow","SingleLanguageWithHeader","WithDefaultLanguage","WithMissingLanguageSnippet","WithDemoApiKeys","WithApiKeys","WithSDKTypes","WithSingleSDKType","WithFallbackSDKTypeAcrossInstances","PlainMode","MultipleShellExamples","FixedMode","JsonOnlySnippet","WithoutCodeLines","WithCustomLanguageOrder"];export{Ne as Default,Oe as FixedMode,Me as JsonOnlySnippet,De as MultipleShellExamples,Ae as PlainMode,je as SingleLanguage,ke as SingleLanguageWithHeader,Ie as WithApiKeys,Ve as WithCustomLanguageOrder,Te as WithDefaultLanguage,Pe as WithDemoApiKeys,qe as WithFallbackSDKTypeAcrossInstances,Ee as WithHeaderRow,Le as WithMissingLanguageSnippet,_e as WithSDKTypes,Re as WithSingleSDKType,Ke as WithoutCodeLines,Da as __namedExportsOrder,Aa as default};
