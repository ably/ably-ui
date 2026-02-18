import{j as r}from"./jsx-runtime-CZ2sIMGp.js";import{r as o}from"./iframe-uAgQpGx3.js";import{C as Dt}from"./Code-FhEspOJP.js";import{c as se}from"./cn-Dw6GJglA.js";import{I as U}from"./Icon-CQE5WZJ9.js";import{r as Mt}from"./index-Bzo3cPUs.js";import{c as q}from"./index-Dc_FVRD7.js";import{c as Gn,u as Jn}from"./index-Ci-9SAUS.js";import{u as Q,P as Y,c as Kt,a as oe,b as wt,d as Zn}from"./index-lgKs4crG.js";import{D as Qn}from"./index-COr2rAEY.js";import{u as qe}from"./index-BdM_rrNv.js";import{u as yt}from"./index-D9u9lzdr.js";import{u as er,o as tr,s as nr,f as rr,a as ar,b as or,h as sr,l as lr,c as ir,R as cr,P as dr,T as Ht}from"./Tooltip-D-QD1YQH.js";import{u as ur}from"./index-9tPVViyS.js";import{u as pr}from"./index-BBoUUYOJ.js";import{V as gr}from"./index-qtbVXCE4.js";import{S as Vt}from"./SegmentedControl-BFqgYm3t.js";import{B as hr}from"./Badge-CONoLHaS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzbfqyAr.js";import"./index-CKHHARbv.js";const Wt=["realtime","rest","client","agent"],jt={javascript:{label:"JavaScript",icon:"icon-tech-javascript",syntaxHighlighterKey:"javascript"},typescript:{label:"TypeScript",icon:"icon-tech-typescript",syntaxHighlighterKey:"typescript"},java:{label:"Java",icon:"icon-tech-java",syntaxHighlighterKey:"java"},kotlin:{label:"Kotlin",icon:"icon-tech-kotlin",syntaxHighlighterKey:"kotlin"},python:{label:"Python",icon:"icon-tech-python",syntaxHighlighterKey:"python"},csharp:{label:"C#",icon:"icon-tech-csharp",syntaxHighlighterKey:"csharp"},go:{label:"Go",icon:"icon-tech-go",syntaxHighlighterKey:"go"},ruby:{label:"Ruby",icon:"icon-tech-ruby",syntaxHighlighterKey:"ruby"},php:{label:"PHP",icon:"icon-tech-php",syntaxHighlighterKey:"php"},nodejs:{label:"Node.js",icon:"icon-tech-nodejs",syntaxHighlighterKey:"javascript"},react:{label:"React",icon:"icon-tech-react",syntaxHighlighterKey:"javascript"},html:{label:"HTML",icon:"icon-tech-web",syntaxHighlighterKey:"xml"},shell:{label:"Shell",icon:"icon-tech-web",syntaxHighlighterKey:"bash"},json:{label:"JSON",icon:"icon-tech-json",syntaxHighlighterKey:"json"},laravel:{label:"Laravel",icon:"icon-tech-laravel-broadcast",syntaxHighlighterKey:"php"},xml:{label:"XML",icon:"icon-tech-web",syntaxHighlighterKey:"xml"},sql:{label:"SQL",icon:"icon-tech-postgres",syntaxHighlighterKey:"sql"},swift:{label:"Swift",icon:"icon-tech-swift",syntaxHighlighterKey:"swift"},cpp:{label:"C++",icon:"icon-tech-web",syntaxHighlighterKey:"cpp"},dart:{label:"Dart",icon:"icon-tech-web",syntaxHighlighterKey:"dart"},objc:{label:"Objective-C",icon:"icon-tech-objectivec",syntaxHighlighterKey:"objc"},android:{label:"Android",icon:"icon-tech-android-full",syntaxHighlighterKey:"kotlin"},flutter:{label:"Flutter",icon:"icon-tech-flutter",syntaxHighlighterKey:"dart"}},ge=e=>{for(const t of Wt){const n=`${t}_`;if(e.startsWith(n))return e.slice(n.length)}return e},re=e=>{const t=ge(e).toLowerCase();return jt[t]?jt[t]:{label:e,icon:"icon-tech-web",syntaxHighlighterKey:e}};function Nt(e,[t,n]){return Math.min(n,Math.max(t,e))}var nt=0;function mr(){o.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Et()),document.body.insertAdjacentElement("beforeend",e[1]??Et()),nt++,()=>{nt===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),nt--}},[])}function Et(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var rt="focusScope.autoFocusOnMount",at="focusScope.autoFocusOnUnmount",Pt={bubbles:!1,cancelable:!0},fr="FocusScope",Bt=o.forwardRef((e,t)=>{const{loop:n=!1,trapped:a=!1,onMountAutoFocus:l,onUnmountAutoFocus:c,...i}=e,[s,u]=o.useState(null),g=qe(l),y=qe(c),f=o.useRef(null),C=Q(t,d=>u(d)),S=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(a){let d=function(m){if(S.paused||!s)return;const k=m.target;s.contains(k)?f.current=k:le(f.current,{select:!0})},h=function(m){if(S.paused||!s)return;const k=m.relatedTarget;k!==null&&(s.contains(k)||le(f.current,{select:!0}))},v=function(m){if(document.activeElement===document.body)for(const j of m)j.removedNodes.length>0&&le(s)};document.addEventListener("focusin",d),document.addEventListener("focusout",h);const p=new MutationObserver(v);return s&&p.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",d),document.removeEventListener("focusout",h),p.disconnect()}}},[a,s,S.paused]),o.useEffect(()=>{if(s){_t.add(S);const d=document.activeElement;if(!s.contains(d)){const v=new CustomEvent(rt,Pt);s.addEventListener(rt,g),s.dispatchEvent(v),v.defaultPrevented||(vr(Cr(Ft(s)),{select:!0}),document.activeElement===d&&le(s))}return()=>{s.removeEventListener(rt,g),setTimeout(()=>{const v=new CustomEvent(at,Pt);s.addEventListener(at,y),s.dispatchEvent(v),v.defaultPrevented||le(d??document.body,{select:!0}),s.removeEventListener(at,y),_t.remove(S)},0)}}},[s,g,y,S]);const N=o.useCallback(d=>{if(!n&&!a||S.paused)return;const h=d.key==="Tab"&&!d.altKey&&!d.ctrlKey&&!d.metaKey,v=document.activeElement;if(h&&v){const p=d.currentTarget,[m,k]=xr(p);m&&k?!d.shiftKey&&v===k?(d.preventDefault(),n&&le(m,{select:!0})):d.shiftKey&&v===m&&(d.preventDefault(),n&&le(k,{select:!0})):v===p&&d.preventDefault()}},[n,a,S.paused]);return r.jsx(Y.div,{tabIndex:-1,...i,ref:C,onKeyDown:N})});Bt.displayName=fr;function vr(e,{select:t=!1}={}){const n=document.activeElement;for(const a of e)if(le(a,{select:t}),document.activeElement!==n)return}function xr(e){const t=Ft(e),n=kt(t,e),a=kt(t.reverse(),e);return[n,a]}function Ft(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const l=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||l?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function kt(e,t){for(const n of e)if(!yr(n,{upTo:t}))return n}function yr(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Sr(e){return e instanceof HTMLInputElement&&"select"in e}function le(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Sr(e)&&t&&e.select()}}var _t=br();function br(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=It(e,t),e.unshift(t)},remove(t){e=It(e,t),e[0]?.resume()}}}function It(e,t){const n=[...e],a=n.indexOf(t);return a!==-1&&n.splice(a,1),n}function Cr(e){return e.filter(t=>t.tagName!=="A")}var St="Popper",[zt,qt]=Kt(St),[wr,$t]=zt(St),Ut=e=>{const{__scopePopper:t,children:n}=e,[a,l]=o.useState(null);return r.jsx(wr,{scope:t,anchor:a,onAnchorChange:l,children:n})};Ut.displayName=St;var Yt="PopperAnchor",Xt=o.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:a,...l}=e,c=$t(Yt,n),i=o.useRef(null),s=Q(t,i);return o.useEffect(()=>{c.onAnchorChange(a?.current||i.current)}),a?null:r.jsx(Y.div,{...l,ref:s})});Xt.displayName=Yt;var bt="PopperContent",[jr,Nr]=zt(bt),Gt=o.forwardRef((e,t)=>{const{__scopePopper:n,side:a="bottom",sideOffset:l=0,align:c="center",alignOffset:i=0,arrowPadding:s=0,avoidCollisions:u=!0,collisionBoundary:g=[],collisionPadding:y=0,sticky:f="partial",hideWhenDetached:C=!1,updatePositionStrategy:S="optimized",onPlaced:N,...d}=e,h=$t(bt,n),[v,p]=o.useState(null),m=Q(t,x=>p(x)),[k,j]=o.useState(null),K=ur(k),_=K?.width??0,E=K?.height??0,V=a+(c!=="center"?"-"+c:""),ee=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},F=Array.isArray(g)?g:[g],z=F.length>0,$={padding:ee,boundary:F.filter(Pr),altBoundary:z},{refs:X,floatingStyles:J,placement:H,isPositioned:W,middlewareData:B}=er({strategy:"fixed",placement:V,whileElementsMounted:(...x)=>ir(...x,{animationFrame:S==="always"}),elements:{reference:h.anchor},middleware:[tr({mainAxis:l+E,alignmentAxis:i}),u&&nr({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?lr():void 0,...$}),u&&rr({...$}),ar({...$,apply:({elements:x,rects:I,availableWidth:D,availableHeight:L})=>{const{width:R,height:M}=I.reference,G=x.floating.style;G.setProperty("--radix-popper-available-width",`${D}px`),G.setProperty("--radix-popper-available-height",`${L}px`),G.setProperty("--radix-popper-anchor-width",`${R}px`),G.setProperty("--radix-popper-anchor-height",`${M}px`)}}),k&&or({element:k,padding:s}),kr({arrowWidth:_,arrowHeight:E}),C&&sr({strategy:"referenceHidden",...$})]}),[Z,de]=Qt(H),ne=qe(N);oe(()=>{W&&ne?.()},[W,ne]);const ue=B.arrow?.x,b=B.arrow?.y,w=B.arrow?.centerOffset!==0,[T,A]=o.useState();return oe(()=>{v&&A(window.getComputedStyle(v).zIndex)},[v]),r.jsx("div",{ref:X.setFloating,"data-radix-popper-content-wrapper":"",style:{...J,transform:W?J.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:T,"--radix-popper-transform-origin":[B.transformOrigin?.x,B.transformOrigin?.y].join(" "),...B.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:r.jsx(jr,{scope:n,placedSide:Z,onArrowChange:j,arrowX:ue,arrowY:b,shouldHideArrow:w,children:r.jsx(Y.div,{"data-side":Z,"data-align":de,...d,ref:m,style:{...d.style,animation:W?void 0:"none"}})})})});Gt.displayName=bt;var Jt="PopperArrow",Er={top:"bottom",right:"left",bottom:"top",left:"right"},Zt=o.forwardRef(function(t,n){const{__scopePopper:a,...l}=t,c=Nr(Jt,a),i=Er[c.placedSide];return r.jsx("span",{ref:c.onArrowChange,style:{position:"absolute",left:c.arrowX,top:c.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[c.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[c.placedSide],visibility:c.shouldHideArrow?"hidden":void 0},children:r.jsx(cr,{...l,ref:n,style:{...l.style,display:"block"}})})});Zt.displayName=Jt;function Pr(e){return e!==null}var kr=e=>({name:"transformOrigin",options:e,fn(t){const{placement:n,rects:a,middlewareData:l}=t,i=l.arrow?.centerOffset!==0,s=i?0:e.arrowWidth,u=i?0:e.arrowHeight,[g,y]=Qt(n),f={start:"0%",center:"50%",end:"100%"}[y],C=(l.arrow?.x??0)+s/2,S=(l.arrow?.y??0)+u/2;let N="",d="";return g==="bottom"?(N=i?f:`${C}px`,d=`${-u}px`):g==="top"?(N=i?f:`${C}px`,d=`${a.floating.height+u}px`):g==="right"?(N=`${-u}px`,d=i?f:`${S}px`):g==="left"&&(N=`${a.floating.width+u}px`,d=i?f:`${S}px`),{data:{x:N,y:d}}}});function Qt(e){const[t,n="center"]=e.split("-");return[t,n]}var _r=Ut,Ir=Xt,Tr=Gt,Lr=Zt,Rr=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},fe=new WeakMap,Ke=new WeakMap,He={},ot=0,en=function(e){return e&&(e.host||en(e.parentNode))},Ar=function(e,t){return t.map(function(n){if(e.contains(n))return n;var a=en(n);return a&&e.contains(a)?a:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Or=function(e,t,n,a){var l=Ar(t,Array.isArray(e)?e:[e]);He[n]||(He[n]=new WeakMap);var c=He[n],i=[],s=new Set,u=new Set(l),g=function(f){!f||s.has(f)||(s.add(f),g(f.parentNode))};l.forEach(g);var y=function(f){!f||u.has(f)||Array.prototype.forEach.call(f.children,function(C){if(s.has(C))y(C);else try{var S=C.getAttribute(a),N=S!==null&&S!=="false",d=(fe.get(C)||0)+1,h=(c.get(C)||0)+1;fe.set(C,d),c.set(C,h),i.push(C),d===1&&N&&Ke.set(C,!0),h===1&&C.setAttribute(n,"true"),N||C.setAttribute(a,"true")}catch(v){console.error("aria-hidden: cannot operate on ",C,v)}})};return y(t),s.clear(),ot++,function(){i.forEach(function(f){var C=fe.get(f)-1,S=c.get(f)-1;fe.set(f,C),c.set(f,S),C||(Ke.has(f)||f.removeAttribute(a),Ke.delete(f)),S||f.removeAttribute(n)}),ot--,ot||(fe=new WeakMap,fe=new WeakMap,Ke=new WeakMap,He={})}},Dr=function(e,t,n){n===void 0&&(n="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),l=Rr(e);return l?(a.push.apply(a,Array.from(l.querySelectorAll("[aria-live], script"))),Or(a,l,n,"aria-hidden")):function(){return null}},ae=function(){return ae=Object.assign||function(t){for(var n,a=1,l=arguments.length;a<l;a++){n=arguments[a];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},ae.apply(this,arguments)};function tn(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n}function Mr(e,t,n){if(n||arguments.length===2)for(var a=0,l=t.length,c;a<l;a++)(c||!(a in t))&&(c||(c=Array.prototype.slice.call(t,0,a)),c[a]=t[a]);return e.concat(c||Array.prototype.slice.call(t))}var Fe="right-scroll-bar-position",ze="width-before-scroll-bar",Kr="with-scroll-bars-hidden",Hr="--removed-body-scroll-bar-size";function st(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Vr(e,t){var n=o.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(a){var l=n.value;l!==a&&(n.value=a,n.callback(a,l))}}}})[0];return n.callback=t,n.facade}var Wr=typeof window<"u"?o.useLayoutEffect:o.useEffect,Tt=new WeakMap;function Br(e,t){var n=Vr(null,function(a){return e.forEach(function(l){return st(l,a)})});return Wr(function(){var a=Tt.get(n);if(a){var l=new Set(a),c=new Set(e),i=n.current;l.forEach(function(s){c.has(s)||st(s,null)}),c.forEach(function(s){l.has(s)||st(s,i)})}Tt.set(n,e)},[e]),n}function Fr(e){return e}function zr(e,t){t===void 0&&(t=Fr);var n=[],a=!1,l={read:function(){if(a)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var i=t(c,a);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(c){for(a=!0;n.length;){var i=n;n=[],i.forEach(c)}n={push:function(s){return c(s)},filter:function(){return n}}},assignMedium:function(c){a=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(c),i=n}var u=function(){var y=i;i=[],y.forEach(c)},g=function(){return Promise.resolve().then(u)};g(),n={push:function(y){i.push(y),g()},filter:function(y){return i=i.filter(y),n}}}};return l}function qr(e){e===void 0&&(e={});var t=zr(null);return t.options=ae({async:!0,ssr:!1},e),t}var nn=function(e){var t=e.sideCar,n=tn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw new Error("Sidecar medium not found");return o.createElement(a,ae({},n))};nn.isSideCarExport=!0;function $r(e,t){return e.useMedium(t),nn}var rn=qr(),lt=function(){},Xe=o.forwardRef(function(e,t){var n=o.useRef(null),a=o.useState({onScrollCapture:lt,onWheelCapture:lt,onTouchMoveCapture:lt}),l=a[0],c=a[1],i=e.forwardProps,s=e.children,u=e.className,g=e.removeScrollBar,y=e.enabled,f=e.shards,C=e.sideCar,S=e.noRelative,N=e.noIsolation,d=e.inert,h=e.allowPinchZoom,v=e.as,p=v===void 0?"div":v,m=e.gapMode,k=tn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),j=C,K=Br([n,t]),_=ae(ae({},k),l);return o.createElement(o.Fragment,null,y&&o.createElement(j,{sideCar:rn,removeScrollBar:g,shards:f,noRelative:S,noIsolation:N,inert:d,setCallbacks:c,allowPinchZoom:!!h,lockRef:n,gapMode:m}),i?o.cloneElement(o.Children.only(s),ae(ae({},_),{ref:K})):o.createElement(p,ae({},_,{className:u,ref:K}),s))});Xe.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Xe.classNames={fullWidth:ze,zeroRight:Fe};var Ur=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Yr(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ur();return t&&e.setAttribute("nonce",t),e}function Xr(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Gr(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Jr=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Yr())&&(Xr(t,n),Gr(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Zr=function(){var e=Jr();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},an=function(){var e=Zr(),t=function(n){var a=n.styles,l=n.dynamic;return e(a,l),null};return t},Qr={left:0,top:0,right:0,gap:0},it=function(e){return parseInt(e||"",10)||0},ea=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],a=t[e==="padding"?"paddingTop":"marginTop"],l=t[e==="padding"?"paddingRight":"marginRight"];return[it(n),it(a),it(l)]},ta=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Qr;var t=ea(e),n=document.documentElement.clientWidth,a=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,a-n+t[2]-t[0])}},na=an(),ye="data-scroll-locked",ra=function(e,t,n,a){var l=e.left,c=e.top,i=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Kr,` {
   overflow: hidden `).concat(a,`;
   padding-right: `).concat(s,"px ").concat(a,`;
  }
  body[`).concat(ye,`] {
    overflow: hidden `).concat(a,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(a,";"),n==="margin"&&`
    padding-left: `.concat(l,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(a,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(a,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Fe,` {
    right: `).concat(s,"px ").concat(a,`;
  }
  
  .`).concat(ze,` {
    margin-right: `).concat(s,"px ").concat(a,`;
  }
  
  .`).concat(Fe," .").concat(Fe,` {
    right: 0 `).concat(a,`;
  }
  
  .`).concat(ze," .").concat(ze,` {
    margin-right: 0 `).concat(a,`;
  }
  
  body[`).concat(ye,`] {
    `).concat(Hr,": ").concat(s,`px;
  }
`)},Lt=function(){var e=parseInt(document.body.getAttribute(ye)||"0",10);return isFinite(e)?e:0},aa=function(){o.useEffect(function(){return document.body.setAttribute(ye,(Lt()+1).toString()),function(){var e=Lt()-1;e<=0?document.body.removeAttribute(ye):document.body.setAttribute(ye,e.toString())}},[])},oa=function(e){var t=e.noRelative,n=e.noImportant,a=e.gapMode,l=a===void 0?"margin":a;aa();var c=o.useMemo(function(){return ta(l)},[l]);return o.createElement(na,{styles:ra(c,!t,l,n?"":"!important")})},dt=!1;if(typeof window<"u")try{var Ve=Object.defineProperty({},"passive",{get:function(){return dt=!0,!0}});window.addEventListener("test",Ve,Ve),window.removeEventListener("test",Ve,Ve)}catch{dt=!1}var ve=dt?{passive:!1}:!1,sa=function(e){return e.tagName==="TEXTAREA"},on=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!sa(e)&&n[t]==="visible")},la=function(e){return on(e,"overflowY")},ia=function(e){return on(e,"overflowX")},Rt=function(e,t){var n=t.ownerDocument,a=t;do{typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&(a=a.host);var l=sn(e,a);if(l){var c=ln(e,a),i=c[1],s=c[2];if(i>s)return!0}a=a.parentNode}while(a&&a!==n.body);return!1},ca=function(e){var t=e.scrollTop,n=e.scrollHeight,a=e.clientHeight;return[t,n,a]},da=function(e){var t=e.scrollLeft,n=e.scrollWidth,a=e.clientWidth;return[t,n,a]},sn=function(e,t){return e==="v"?la(t):ia(t)},ln=function(e,t){return e==="v"?ca(t):da(t)},ua=function(e,t){return e==="h"&&t==="rtl"?-1:1},pa=function(e,t,n,a,l){var c=ua(e,window.getComputedStyle(t).direction),i=c*a,s=n.target,u=t.contains(s),g=!1,y=i>0,f=0,C=0;do{if(!s)break;var S=ln(e,s),N=S[0],d=S[1],h=S[2],v=d-h-c*N;(N||v)&&sn(e,s)&&(f+=v,C+=N);var p=s.parentNode;s=p&&p.nodeType===Node.DOCUMENT_FRAGMENT_NODE?p.host:p}while(!u&&s!==document.body||u&&(t.contains(s)||t===s));return(y&&Math.abs(f)<1||!y&&Math.abs(C)<1)&&(g=!0),g},We=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},At=function(e){return[e.deltaX,e.deltaY]},Ot=function(e){return e&&"current"in e?e.current:e},ga=function(e,t){return e[0]===t[0]&&e[1]===t[1]},ha=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},ma=0,xe=[];function fa(e){var t=o.useRef([]),n=o.useRef([0,0]),a=o.useRef(),l=o.useState(ma++)[0],c=o.useState(an)[0],i=o.useRef(e);o.useEffect(function(){i.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(l));var d=Mr([e.lockRef.current],(e.shards||[]).map(Ot),!0).filter(Boolean);return d.forEach(function(h){return h.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),d.forEach(function(h){return h.classList.remove("allow-interactivity-".concat(l))})}}},[e.inert,e.lockRef.current,e.shards]);var s=o.useCallback(function(d,h){if("touches"in d&&d.touches.length===2||d.type==="wheel"&&d.ctrlKey)return!i.current.allowPinchZoom;var v=We(d),p=n.current,m="deltaX"in d?d.deltaX:p[0]-v[0],k="deltaY"in d?d.deltaY:p[1]-v[1],j,K=d.target,_=Math.abs(m)>Math.abs(k)?"h":"v";if("touches"in d&&_==="h"&&K.type==="range")return!1;var E=Rt(_,K);if(!E)return!0;if(E?j=_:(j=_==="v"?"h":"v",E=Rt(_,K)),!E)return!1;if(!a.current&&"changedTouches"in d&&(m||k)&&(a.current=j),!j)return!0;var V=a.current||j;return pa(V,h,d,V==="h"?m:k)},[]),u=o.useCallback(function(d){var h=d;if(!(!xe.length||xe[xe.length-1]!==c)){var v="deltaY"in h?At(h):We(h),p=t.current.filter(function(j){return j.name===h.type&&(j.target===h.target||h.target===j.shadowParent)&&ga(j.delta,v)})[0];if(p&&p.should){h.cancelable&&h.preventDefault();return}if(!p){var m=(i.current.shards||[]).map(Ot).filter(Boolean).filter(function(j){return j.contains(h.target)}),k=m.length>0?s(h,m[0]):!i.current.noIsolation;k&&h.cancelable&&h.preventDefault()}}},[]),g=o.useCallback(function(d,h,v,p){var m={name:d,delta:h,target:v,should:p,shadowParent:va(v)};t.current.push(m),setTimeout(function(){t.current=t.current.filter(function(k){return k!==m})},1)},[]),y=o.useCallback(function(d){n.current=We(d),a.current=void 0},[]),f=o.useCallback(function(d){g(d.type,At(d),d.target,s(d,e.lockRef.current))},[]),C=o.useCallback(function(d){g(d.type,We(d),d.target,s(d,e.lockRef.current))},[]);o.useEffect(function(){return xe.push(c),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:C}),document.addEventListener("wheel",u,ve),document.addEventListener("touchmove",u,ve),document.addEventListener("touchstart",y,ve),function(){xe=xe.filter(function(d){return d!==c}),document.removeEventListener("wheel",u,ve),document.removeEventListener("touchmove",u,ve),document.removeEventListener("touchstart",y,ve)}},[]);var S=e.removeScrollBar,N=e.inert;return o.createElement(o.Fragment,null,N?o.createElement(c,{styles:ha(l)}):null,S?o.createElement(oa,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function va(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const xa=$r(rn,fa);var cn=o.forwardRef(function(e,t){return o.createElement(Xe,ae({},e,{ref:t,sideCar:xa}))});cn.classNames=Xe.classNames;var ya=[" ","Enter","ArrowUp","ArrowDown"],Sa=[" ","Enter"],he="Select",[Ge,Je,ba]=Gn(he),[Se]=Kt(he,[ba,qt]),Ze=qt(),[Ca,ie]=Se(he),[wa,ja]=Se(he),dn=e=>{const{__scopeSelect:t,children:n,open:a,defaultOpen:l,onOpenChange:c,value:i,defaultValue:s,onValueChange:u,dir:g,name:y,autoComplete:f,disabled:C,required:S,form:N}=e,d=Ze(t),[h,v]=o.useState(null),[p,m]=o.useState(null),[k,j]=o.useState(!1),K=Jn(g),[_,E]=wt({prop:a,defaultProp:l??!1,onChange:c,caller:he}),[V,ee]=wt({prop:i,defaultProp:s,onChange:u,caller:he}),F=o.useRef(null),z=h?N||!!h.closest("form"):!0,[$,X]=o.useState(new Set),J=Array.from($).map(H=>H.props.value).join(";");return r.jsx(_r,{...d,children:r.jsxs(Ca,{required:S,scope:t,trigger:h,onTriggerChange:v,valueNode:p,onValueNodeChange:m,valueNodeHasChildren:k,onValueNodeHasChildrenChange:j,contentId:yt(),value:V,onValueChange:ee,open:_,onOpenChange:E,dir:K,triggerPointerDownPosRef:F,disabled:C,children:[r.jsx(Ge.Provider,{scope:t,children:r.jsx(wa,{scope:e.__scopeSelect,onNativeOptionAdd:o.useCallback(H=>{X(W=>new Set(W).add(H))},[]),onNativeOptionRemove:o.useCallback(H=>{X(W=>{const B=new Set(W);return B.delete(H),B})},[]),children:n})}),z?r.jsxs(An,{"aria-hidden":!0,required:S,tabIndex:-1,name:y,autoComplete:f,value:V,onChange:H=>ee(H.target.value),disabled:C,form:N,children:[V===void 0?r.jsx("option",{value:""}):null,Array.from($)]},J):null]})})};dn.displayName=he;var un="SelectTrigger",pn=o.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:a=!1,...l}=e,c=Ze(n),i=ie(un,n),s=i.disabled||a,u=Q(t,i.onTriggerChange),g=Je(n),y=o.useRef("touch"),[f,C,S]=Dn(d=>{const h=g().filter(m=>!m.disabled),v=h.find(m=>m.value===i.value),p=Mn(h,d,v);p!==void 0&&i.onValueChange(p.value)}),N=d=>{s||(i.onOpenChange(!0),S()),d&&(i.triggerPointerDownPosRef.current={x:Math.round(d.pageX),y:Math.round(d.pageY)})};return r.jsx(Ir,{asChild:!0,...c,children:r.jsx(Y.button,{type:"button",role:"combobox","aria-controls":i.contentId,"aria-expanded":i.open,"aria-required":i.required,"aria-autocomplete":"none",dir:i.dir,"data-state":i.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":On(i.value)?"":void 0,...l,ref:u,onClick:q(l.onClick,d=>{d.currentTarget.focus(),y.current!=="mouse"&&N(d)}),onPointerDown:q(l.onPointerDown,d=>{y.current=d.pointerType;const h=d.target;h.hasPointerCapture(d.pointerId)&&h.releasePointerCapture(d.pointerId),d.button===0&&d.ctrlKey===!1&&d.pointerType==="mouse"&&(N(d),d.preventDefault())}),onKeyDown:q(l.onKeyDown,d=>{const h=f.current!=="";!(d.ctrlKey||d.altKey||d.metaKey)&&d.key.length===1&&C(d.key),!(h&&d.key===" ")&&ya.includes(d.key)&&(N(),d.preventDefault())})})})});pn.displayName=un;var gn="SelectValue",hn=o.forwardRef((e,t)=>{const{__scopeSelect:n,className:a,style:l,children:c,placeholder:i="",...s}=e,u=ie(gn,n),{onValueNodeHasChildrenChange:g}=u,y=c!==void 0,f=Q(t,u.onValueNodeChange);return oe(()=>{g(y)},[g,y]),r.jsx(Y.span,{...s,ref:f,style:{pointerEvents:"none"},children:On(u.value)?r.jsx(r.Fragment,{children:i}):c})});hn.displayName=gn;var Na="SelectIcon",mn=o.forwardRef((e,t)=>{const{__scopeSelect:n,children:a,...l}=e;return r.jsx(Y.span,{"aria-hidden":!0,...l,ref:t,children:a||"▼"})});mn.displayName=Na;var Ea="SelectPortal",fn=e=>r.jsx(dr,{asChild:!0,...e});fn.displayName=Ea;var me="SelectContent",vn=o.forwardRef((e,t)=>{const n=ie(me,e.__scopeSelect),[a,l]=o.useState();if(oe(()=>{l(new DocumentFragment)},[]),!n.open){const c=a;return c?Mt.createPortal(r.jsx(xn,{scope:e.__scopeSelect,children:r.jsx(Ge.Slot,{scope:e.__scopeSelect,children:r.jsx("div",{children:e.children})})}),c):null}return r.jsx(yn,{...e,ref:t})});vn.displayName=me;var te=10,[xn,ce]=Se(me),Pa="SelectContentImpl",ka=Zn("SelectContent.RemoveScroll"),yn=o.forwardRef((e,t)=>{const{__scopeSelect:n,position:a="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:c,onPointerDownOutside:i,side:s,sideOffset:u,align:g,alignOffset:y,arrowPadding:f,collisionBoundary:C,collisionPadding:S,sticky:N,hideWhenDetached:d,avoidCollisions:h,...v}=e,p=ie(me,n),[m,k]=o.useState(null),[j,K]=o.useState(null),_=Q(t,x=>k(x)),[E,V]=o.useState(null),[ee,F]=o.useState(null),z=Je(n),[$,X]=o.useState(!1),J=o.useRef(!1);o.useEffect(()=>{if(m)return Dr(m)},[m]),mr();const H=o.useCallback(x=>{const[I,...D]=z().map(M=>M.ref.current),[L]=D.slice(-1),R=document.activeElement;for(const M of x)if(M===R||(M?.scrollIntoView({block:"nearest"}),M===I&&j&&(j.scrollTop=0),M===L&&j&&(j.scrollTop=j.scrollHeight),M?.focus(),document.activeElement!==R))return},[z,j]),W=o.useCallback(()=>H([E,m]),[H,E,m]);o.useEffect(()=>{$&&W()},[$,W]);const{onOpenChange:B,triggerPointerDownPosRef:Z}=p;o.useEffect(()=>{if(m){let x={x:0,y:0};const I=L=>{x={x:Math.abs(Math.round(L.pageX)-(Z.current?.x??0)),y:Math.abs(Math.round(L.pageY)-(Z.current?.y??0))}},D=L=>{x.x<=10&&x.y<=10?L.preventDefault():m.contains(L.target)||B(!1),document.removeEventListener("pointermove",I),Z.current=null};return Z.current!==null&&(document.addEventListener("pointermove",I),document.addEventListener("pointerup",D,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",D,{capture:!0})}}},[m,B,Z]),o.useEffect(()=>{const x=()=>B(!1);return window.addEventListener("blur",x),window.addEventListener("resize",x),()=>{window.removeEventListener("blur",x),window.removeEventListener("resize",x)}},[B]);const[de,ne]=Dn(x=>{const I=z().filter(R=>!R.disabled),D=I.find(R=>R.ref.current===document.activeElement),L=Mn(I,x,D);L&&setTimeout(()=>L.ref.current.focus())}),ue=o.useCallback((x,I,D)=>{const L=!J.current&&!D;(p.value!==void 0&&p.value===I||L)&&(V(x),L&&(J.current=!0))},[p.value]),b=o.useCallback(()=>m?.focus(),[m]),w=o.useCallback((x,I,D)=>{const L=!J.current&&!D;(p.value!==void 0&&p.value===I||L)&&F(x)},[p.value]),T=a==="popper"?ut:Sn,A=T===ut?{side:s,sideOffset:u,align:g,alignOffset:y,arrowPadding:f,collisionBoundary:C,collisionPadding:S,sticky:N,hideWhenDetached:d,avoidCollisions:h}:{};return r.jsx(xn,{scope:n,content:m,viewport:j,onViewportChange:K,itemRefCallback:ue,selectedItem:E,onItemLeave:b,itemTextRefCallback:w,focusSelectedItem:W,selectedItemText:ee,position:a,isPositioned:$,searchRef:de,children:r.jsx(cn,{as:ka,allowPinchZoom:!0,children:r.jsx(Bt,{asChild:!0,trapped:p.open,onMountAutoFocus:x=>{x.preventDefault()},onUnmountAutoFocus:q(l,x=>{p.trigger?.focus({preventScroll:!0}),x.preventDefault()}),children:r.jsx(Qn,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:c,onPointerDownOutside:i,onFocusOutside:x=>x.preventDefault(),onDismiss:()=>p.onOpenChange(!1),children:r.jsx(T,{role:"listbox",id:p.contentId,"data-state":p.open?"open":"closed",dir:p.dir,onContextMenu:x=>x.preventDefault(),...v,...A,onPlaced:()=>X(!0),ref:_,style:{display:"flex",flexDirection:"column",outline:"none",...v.style},onKeyDown:q(v.onKeyDown,x=>{const I=x.ctrlKey||x.altKey||x.metaKey;if(x.key==="Tab"&&x.preventDefault(),!I&&x.key.length===1&&ne(x.key),["ArrowUp","ArrowDown","Home","End"].includes(x.key)){let L=z().filter(R=>!R.disabled).map(R=>R.ref.current);if(["ArrowUp","End"].includes(x.key)&&(L=L.slice().reverse()),["ArrowUp","ArrowDown"].includes(x.key)){const R=x.target,M=L.indexOf(R);L=L.slice(M+1)}setTimeout(()=>H(L)),x.preventDefault()}})})})})})})});yn.displayName=Pa;var _a="SelectItemAlignedPosition",Sn=o.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:a,...l}=e,c=ie(me,n),i=ce(me,n),[s,u]=o.useState(null),[g,y]=o.useState(null),f=Q(t,_=>y(_)),C=Je(n),S=o.useRef(!1),N=o.useRef(!0),{viewport:d,selectedItem:h,selectedItemText:v,focusSelectedItem:p}=i,m=o.useCallback(()=>{if(c.trigger&&c.valueNode&&s&&g&&d&&h&&v){const _=c.trigger.getBoundingClientRect(),E=g.getBoundingClientRect(),V=c.valueNode.getBoundingClientRect(),ee=v.getBoundingClientRect();if(c.dir!=="rtl"){const R=ee.left-E.left,M=V.left-R,G=_.left-M,pe=_.width+G,Qe=Math.max(pe,E.width),et=window.innerWidth-te,tt=Nt(M,[te,Math.max(te,et-Qe)]);s.style.minWidth=pe+"px",s.style.left=tt+"px"}else{const R=E.right-ee.right,M=window.innerWidth-V.right-R,G=window.innerWidth-_.right-M,pe=_.width+G,Qe=Math.max(pe,E.width),et=window.innerWidth-te,tt=Nt(M,[te,Math.max(te,et-Qe)]);s.style.minWidth=pe+"px",s.style.right=tt+"px"}const F=C(),z=window.innerHeight-te*2,$=d.scrollHeight,X=window.getComputedStyle(g),J=parseInt(X.borderTopWidth,10),H=parseInt(X.paddingTop,10),W=parseInt(X.borderBottomWidth,10),B=parseInt(X.paddingBottom,10),Z=J+H+$+B+W,de=Math.min(h.offsetHeight*5,Z),ne=window.getComputedStyle(d),ue=parseInt(ne.paddingTop,10),b=parseInt(ne.paddingBottom,10),w=_.top+_.height/2-te,T=z-w,A=h.offsetHeight/2,x=h.offsetTop+A,I=J+H+x,D=Z-I;if(I<=w){const R=F.length>0&&h===F[F.length-1].ref.current;s.style.bottom="0px";const M=g.clientHeight-d.offsetTop-d.offsetHeight,G=Math.max(T,A+(R?b:0)+M+W),pe=I+G;s.style.height=pe+"px"}else{const R=F.length>0&&h===F[0].ref.current;s.style.top="0px";const G=Math.max(w,J+d.offsetTop+(R?ue:0)+A)+D;s.style.height=G+"px",d.scrollTop=I-w+d.offsetTop}s.style.margin=`${te}px 0`,s.style.minHeight=de+"px",s.style.maxHeight=z+"px",a?.(),requestAnimationFrame(()=>S.current=!0)}},[C,c.trigger,c.valueNode,s,g,d,h,v,c.dir,a]);oe(()=>m(),[m]);const[k,j]=o.useState();oe(()=>{g&&j(window.getComputedStyle(g).zIndex)},[g]);const K=o.useCallback(_=>{_&&N.current===!0&&(m(),p?.(),N.current=!1)},[m,p]);return r.jsx(Ta,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:S,onScrollButtonChange:K,children:r.jsx("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:k},children:r.jsx(Y.div,{...l,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}})})})});Sn.displayName=_a;var Ia="SelectPopperPosition",ut=o.forwardRef((e,t)=>{const{__scopeSelect:n,align:a="start",collisionPadding:l=te,...c}=e,i=Ze(n);return r.jsx(Tr,{...i,...c,ref:t,align:a,collisionPadding:l,style:{boxSizing:"border-box",...c.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});ut.displayName=Ia;var[Ta,Ct]=Se(me,{}),pt="SelectViewport",bn=o.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:a,...l}=e,c=ce(pt,n),i=Ct(pt,n),s=Q(t,c.onViewportChange),u=o.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),r.jsx(Ge.Slot,{scope:n,children:r.jsx(Y.div,{"data-radix-select-viewport":"",role:"presentation",...l,ref:s,style:{position:"relative",flex:1,overflow:"hidden auto",...l.style},onScroll:q(l.onScroll,g=>{const y=g.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:C}=i;if(C?.current&&f){const S=Math.abs(u.current-y.scrollTop);if(S>0){const N=window.innerHeight-te*2,d=parseFloat(f.style.minHeight),h=parseFloat(f.style.height),v=Math.max(d,h);if(v<N){const p=v+S,m=Math.min(N,p),k=p-m;f.style.height=m+"px",f.style.bottom==="0px"&&(y.scrollTop=k>0?k:0,f.style.justifyContent="flex-end")}}}u.current=y.scrollTop})})})]})});bn.displayName=pt;var Cn="SelectGroup",[La,Ra]=Se(Cn),wn=o.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e,l=yt();return r.jsx(La,{scope:n,id:l,children:r.jsx(Y.div,{role:"group","aria-labelledby":l,...a,ref:t})})});wn.displayName=Cn;var jn="SelectLabel",Nn=o.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e,l=Ra(jn,n);return r.jsx(Y.div,{id:l.id,...a,ref:t})});Nn.displayName=jn;var $e="SelectItem",[Aa,En]=Se($e),Pn=o.forwardRef((e,t)=>{const{__scopeSelect:n,value:a,disabled:l=!1,textValue:c,...i}=e,s=ie($e,n),u=ce($e,n),g=s.value===a,[y,f]=o.useState(c??""),[C,S]=o.useState(!1),N=Q(t,p=>u.itemRefCallback?.(p,a,l)),d=yt(),h=o.useRef("touch"),v=()=>{l||(s.onValueChange(a),s.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return r.jsx(Aa,{scope:n,value:a,disabled:l,textId:d,isSelected:g,onItemTextChange:o.useCallback(p=>{f(m=>m||(p?.textContent??"").trim())},[]),children:r.jsx(Ge.ItemSlot,{scope:n,value:a,disabled:l,textValue:y,children:r.jsx(Y.div,{role:"option","aria-labelledby":d,"data-highlighted":C?"":void 0,"aria-selected":g&&C,"data-state":g?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1,...i,ref:N,onFocus:q(i.onFocus,()=>S(!0)),onBlur:q(i.onBlur,()=>S(!1)),onClick:q(i.onClick,()=>{h.current!=="mouse"&&v()}),onPointerUp:q(i.onPointerUp,()=>{h.current==="mouse"&&v()}),onPointerDown:q(i.onPointerDown,p=>{h.current=p.pointerType}),onPointerMove:q(i.onPointerMove,p=>{h.current=p.pointerType,l?u.onItemLeave?.():h.current==="mouse"&&p.currentTarget.focus({preventScroll:!0})}),onPointerLeave:q(i.onPointerLeave,p=>{p.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:q(i.onKeyDown,p=>{u.searchRef?.current!==""&&p.key===" "||(Sa.includes(p.key)&&v(),p.key===" "&&p.preventDefault())})})})})});Pn.displayName=$e;var Me="SelectItemText",kn=o.forwardRef((e,t)=>{const{__scopeSelect:n,className:a,style:l,...c}=e,i=ie(Me,n),s=ce(Me,n),u=En(Me,n),g=ja(Me,n),[y,f]=o.useState(null),C=Q(t,v=>f(v),u.onItemTextChange,v=>s.itemTextRefCallback?.(v,u.value,u.disabled)),S=y?.textContent,N=o.useMemo(()=>r.jsx("option",{value:u.value,disabled:u.disabled,children:S},u.value),[u.disabled,u.value,S]),{onNativeOptionAdd:d,onNativeOptionRemove:h}=g;return oe(()=>(d(N),()=>h(N)),[d,h,N]),r.jsxs(r.Fragment,{children:[r.jsx(Y.span,{id:u.textId,...c,ref:C}),u.isSelected&&i.valueNode&&!i.valueNodeHasChildren?Mt.createPortal(c.children,i.valueNode):null]})});kn.displayName=Me;var _n="SelectItemIndicator",In=o.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e;return En(_n,n).isSelected?r.jsx(Y.span,{"aria-hidden":!0,...a,ref:t}):null});In.displayName=_n;var gt="SelectScrollUpButton",Tn=o.forwardRef((e,t)=>{const n=ce(gt,e.__scopeSelect),a=Ct(gt,e.__scopeSelect),[l,c]=o.useState(!1),i=Q(t,a.onScrollButtonChange);return oe(()=>{if(n.viewport&&n.isPositioned){let s=function(){const g=u.scrollTop>0;c(g)};const u=n.viewport;return s(),u.addEventListener("scroll",s),()=>u.removeEventListener("scroll",s)}},[n.viewport,n.isPositioned]),l?r.jsx(Rn,{...e,ref:i,onAutoScroll:()=>{const{viewport:s,selectedItem:u}=n;s&&u&&(s.scrollTop=s.scrollTop-u.offsetHeight)}}):null});Tn.displayName=gt;var ht="SelectScrollDownButton",Ln=o.forwardRef((e,t)=>{const n=ce(ht,e.__scopeSelect),a=Ct(ht,e.__scopeSelect),[l,c]=o.useState(!1),i=Q(t,a.onScrollButtonChange);return oe(()=>{if(n.viewport&&n.isPositioned){let s=function(){const g=u.scrollHeight-u.clientHeight,y=Math.ceil(u.scrollTop)<g;c(y)};const u=n.viewport;return s(),u.addEventListener("scroll",s),()=>u.removeEventListener("scroll",s)}},[n.viewport,n.isPositioned]),l?r.jsx(Rn,{...e,ref:i,onAutoScroll:()=>{const{viewport:s,selectedItem:u}=n;s&&u&&(s.scrollTop=s.scrollTop+u.offsetHeight)}}):null});Ln.displayName=ht;var Rn=o.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:a,...l}=e,c=ce("SelectScrollButton",n),i=o.useRef(null),s=Je(n),u=o.useCallback(()=>{i.current!==null&&(window.clearInterval(i.current),i.current=null)},[]);return o.useEffect(()=>()=>u(),[u]),oe(()=>{s().find(y=>y.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[s]),r.jsx(Y.div,{"aria-hidden":!0,...l,ref:t,style:{flexShrink:0,...l.style},onPointerDown:q(l.onPointerDown,()=>{i.current===null&&(i.current=window.setInterval(a,50))}),onPointerMove:q(l.onPointerMove,()=>{c.onItemLeave?.(),i.current===null&&(i.current=window.setInterval(a,50))}),onPointerLeave:q(l.onPointerLeave,()=>{u()})})}),Oa="SelectSeparator",Da=o.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e;return r.jsx(Y.div,{"aria-hidden":!0,...a,ref:t})});Da.displayName=Oa;var mt="SelectArrow",Ma=o.forwardRef((e,t)=>{const{__scopeSelect:n,...a}=e,l=Ze(n),c=ie(mt,n),i=ce(mt,n);return c.open&&i.position==="popper"?r.jsx(Lr,{...l,...a,ref:t}):null});Ma.displayName=mt;var Ka="SelectBubbleInput",An=o.forwardRef(({__scopeSelect:e,value:t,...n},a)=>{const l=o.useRef(null),c=Q(a,l),i=pr(t);return o.useEffect(()=>{const s=l.current;if(!s)return;const u=window.HTMLSelectElement.prototype,y=Object.getOwnPropertyDescriptor(u,"value").set;if(i!==t&&y){const f=new Event("change",{bubbles:!0});y.call(s,t),s.dispatchEvent(f)}},[i,t]),r.jsx(Y.select,{...n,style:{...gr,...n.style},ref:c,defaultValue:t})});An.displayName=Ka;function On(e){return e===""||e===void 0}function Dn(e){const t=qe(e),n=o.useRef(""),a=o.useRef(0),l=o.useCallback(i=>{const s=n.current+i;t(s),(function u(g){n.current=g,window.clearTimeout(a.current),g!==""&&(a.current=window.setTimeout(()=>u(""),1e3))})(s)},[t]),c=o.useCallback(()=>{n.current="",window.clearTimeout(a.current)},[]);return o.useEffect(()=>()=>window.clearTimeout(a.current),[]),[n,l,c]}function Mn(e,t,n){const l=t.length>1&&Array.from(t).every(g=>g===t[0])?t[0]:t,c=n?e.indexOf(n):-1;let i=Ha(e,Math.max(c,0));l.length===1&&(i=i.filter(g=>g!==n));const u=i.find(g=>g.textValue.toLowerCase().startsWith(l.toLowerCase()));return u!==n?u:void 0}function Ha(e,t){return e.map((n,a)=>e[(t+a)%e.length])}var Kn=dn,Hn=pn,Vn=hn,Wn=mn,Bn=fn,Fn=vn,zn=bn,Va=wn,Wa=Nn,qn=Pn,$n=kn,Un=In,Yn=Tn,Xn=Ln;const Ue=({tooltip:e,active:t=!1,onClick:n,icon:a,className:l,children:c,variant:i="segmented",size:s="sm",alwaysShowLabel:u=!1,tooltipRootProps:g})=>{const y=i==="segmented"&&!t||i==="icon-button",f=t||u,C=o.useMemo(()=>i==="segmented"?r.jsx(Vt,{size:s,active:t,onClick:n,leftIcon:a,className:se("focus-base transition-colors",t?"bg-neutral-000 dark:bg-neutral-1100":"bg-neutral-100 dark:bg-neutral-1200 hover:bg-neutral-200 dark:hover:bg-neutral-1100 active:bg-neutral-400 dark:active:bg-neutral-900",l),children:f?c:null}):r.jsx("div",{role:"button",className:se("w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 transition-colors focus-base",l),onClick:n,onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),n?.())},tabIndex:0,children:c}),[i,s,t,n,a,l,f,c]);return y?r.jsx(Ht,{triggerElement:C,rootProps:g,className:"ml-0",contentProps:{className:"px-2 py-1 bg-neutral-1100 dark:bg-neutral-200 text-neutral-300 dark:text-neutral-1000"},triggerProps:{className:"ml-0 h-auto"},children:e}):C};try{Ue.displayName="TooltipButton",Ue.__docgenInfo={description:"",displayName:"TooltipButton",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"ReactNode"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconName"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"segmented"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"segmented"'},{value:'"icon-button"'}]}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'}]}},alwaysShowLabel:{defaultValue:{value:"false"},description:"",name:"alwaysShowLabel",required:!1,type:{name:"boolean"}},tooltipRootProps:{defaultValue:null,description:"",name:"tooltipRootProps",required:!1,type:{name:"TooltipProps"}}}}}catch{}const ft=({languages:e,activeLanguage:t,onLanguageChange:n})=>{const a=o.useMemo(()=>e.map(i=>{const s=t===i,u=re(i).label;return r.jsx(Ue,{tooltip:u,active:s,onClick:()=>n(i),icon:re(i).icon,variant:"segmented",size:"xs",children:u},i)}),[e,t,n]),l=o.useMemo(()=>e.map(i=>r.jsxs(qn,{value:i,className:"relative flex items-center rounded px-2 py-1.5 text-14 text-neutral-1300 dark:text-neutral-000 select-none hover:bg-neutral-100 dark:hover:bg-neutral-1200 data-[highlighted]:outline-none data-[highlighted]:bg-neutral-100 dark:data-[highlighted]:bg-neutral-1200 focus-base",children:[r.jsx($n,{asChild:!0,children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(U,{name:re(i).icon,size:"20px"}),r.jsx("span",{children:re(i).label})]})}),r.jsx(Un,{className:"absolute right-2",children:r.jsx(U,{name:"icon-gui-check-outline",size:"16px"})})]},i)),[e]),c=o.useMemo(()=>t?r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(U,{name:re(t).icon,size:"20px"}),r.jsx("span",{children:re(t).label})]}):null,[t]);return r.jsxs("div",{className:"p-2 border-b border-neutral-300 dark:border-neutral-1000 overflow-x-auto",children:[r.jsx("div",{className:"hidden sm:flex gap-1",children:a}),r.jsx("div",{className:"sm:hidden w-full",children:r.jsxs(Kn,{value:t||void 0,onValueChange:n,children:[r.jsxs(Hn,{className:"w-full inline-flex items-center justify-between rounded-lg px-3 py-2 text-14 text-neutral-1300 dark:text-neutral-000 bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 gap-1 border border-neutral-300 dark:border-neutral-900 focus-base","aria-label":"Select language",children:[r.jsx(Vn,{asChild:!0,children:c}),r.jsx(Wn,{children:r.jsx(U,{name:"icon-gui-chevron-down-outline",size:"16px"})})]}),r.jsx(Bn,{children:r.jsxs(Fn,{className:"overflow-hidden rounded-md bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 shadow-md z-50 w-[var(--radix-select-trigger-width)]",position:"popper",children:[r.jsx(Yn,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(U,{name:"icon-gui-chevron-down-outline",size:"16px",additionalCSS:"rotate-180"})}),r.jsx(zn,{className:"p-1",children:l}),r.jsx(Xn,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(U,{name:"icon-gui-chevron-down-outline",size:"16px"})})]})})]})})]})};try{ft.displayName="LanguageSelector",ft.__docgenInfo={description:"",displayName:"LanguageSelector",props:{languages:{defaultValue:null,description:"",name:"languages",required:!0,type:{name:"string[]"}},activeLanguage:{defaultValue:null,description:"",name:"activeLanguage",required:!0,type:{name:"string"}},onLanguageChange:{defaultValue:null,description:"",name:"onLanguageChange",required:!0,type:{name:"(language: string) => void"}}}}}catch{}const vt=({apiKeys:e,selectedApiKey:t,onApiKeyChange:n})=>{const a=o.useMemo(()=>e?.length===1&&e[0].app==="demo",[e]),l=o.useMemo(()=>r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(hr,{className:"ml-1 bg-neutral-200 dark:bg-neutral-1100",children:"DEMO ONLY"}),r.jsx(Ht,{className:"ml-0",triggerProps:{className:"h-5"},contentProps:{className:"bg-neutral-1100 dark:bg-neutral-200 text-neutral-300 dark:text-neutral-1000"},triggerElement:r.jsxs("div",{className:"group/code-snippet-tooltip-icon-hover flex items-center justify-center",children:[r.jsx(U,{name:"icon-gui-information-circle-outline",size:"20px",color:"text-neutral-700 dark:text-neutral-600",additionalCSS:"group-hover/code-snippet-tooltip-icon-hover:hidden"}),r.jsx(U,{name:"icon-gui-information-circle-solid",size:"20px",color:"text-neutral-1300 dark:text-neutral-000",additionalCSS:"group-hover/code-snippet-tooltip-icon-hover:flex hidden"})]}),children:"This code example uses a temporary key that is rate limited and expires in 4 hrs. Sign in to Ably to use your API keys instead."})]}),[]),c=o.useMemo(()=>a?l:e?.length?r.jsxs(Kn,{value:t,onValueChange:n,children:[r.jsxs(Hn,{className:"font-sans inline-flex items-center justify-between rounded px-3 py-2 ml-1 text-14 text-neutral-1300 dark:text-neutral-000 bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 gap-2 focus-base border border-neutral-300 dark:border-neutral-1000 transition-colors","aria-label":"API Key",children:[r.jsx(Vn,{}),r.jsx(Wn,{className:"size-4",children:r.jsx(U,{name:"icon-gui-chevron-down-micro",size:"16px"})})]}),r.jsx(Bn,{children:r.jsxs(Fn,{className:"overflow-hidden rounded-lg bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 shadow-md z-50",children:[r.jsx(Yn,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(U,{name:"icon-gui-chevron-down-outline",size:"16px",additionalCSS:"rotate-180"})}),r.jsx(zn,{className:"rounded-lg font-sans",children:e.map(i=>r.jsxs(Va,{children:[e.length>1&&r.jsx(Wa,{className:"text-neutral-700 rounded-none dark:text-neutral-600 p-1 bg-neutral-200 dark:bg-neutral-1100",children:i.app}),i.keys.map(({name:s,key:u})=>r.jsxs(qn,{value:u,className:"relative flex items-center justify-between m-2 p-2 rounded-lg text-14 text-neutral-1300 dark:text-neutral-000 select-none hover:bg-neutral-100 dark:hover:bg-neutral-1200 data-[highlighted]:outline-none data-[highlighted]:bg-neutral-100 dark:data-[highlighted]:bg-neutral-1200 focus-base min-w-64",children:[r.jsxs($n,{children:[u.length>10?`${u.substring(0,10)}...`:u,r.jsx("span",{className:"font-light",children:s&&` - ${s}`})]}),r.jsx(Un,{className:"size-4",children:r.jsx(U,{name:"icon-gui-check-micro",size:"16px"})})]},`${i.app}-${s}-${u}`))]},i.app))}),r.jsx(Xn,{className:"flex items-center justify-center h-6 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base",children:r.jsx(U,{name:"icon-gui-chevron-down-outline",size:"16px"})})]})})]}):null,[e,a,t,n,l]);return r.jsxs("div",{className:"flex items-center border-t border-neutral-300 dark:border-neutral-1000 px-3 py-3",children:[r.jsx("span",{className:"ui-text-label4 text-neutral-700 dark:text-neutral-600 mr-1",children:"API key:"}),c]})};try{vt.displayName="ApiKeySelector",vt.__docgenInfo={description:"",displayName:"ApiKeySelector",props:{apiKeys:{defaultValue:null,description:"",name:"apiKeys",required:!1,type:{name:"ApiKeysItem[]"}},selectedApiKey:{defaultValue:null,description:"",name:"selectedApiKey",required:!0,type:{name:"string"}},onApiKeyChange:{defaultValue:null,description:"",name:"onApiKeyChange",required:!0,type:{name:"(apiKey: string) => void"}}}}}catch{}const Ye=({onCopy:e,tooltip:t="Copy"})=>{const[n,a]=o.useState(!1),[l,c]=o.useState(!1);return r.jsx("div",{className:"absolute top-2 right-2 z-10 rounded-lg focus-base",role:"button",tabIndex:0,onMouseEnter:()=>c(!0),onMouseLeave:()=>{c(!1),setTimeout(()=>{a(!1)},250)},children:r.jsx(Ue,{tooltip:n?"Copied!":t,onClick:()=>{e(),a(!0)},tooltipRootProps:{open:l},variant:"icon-button",children:r.jsx(U,{name:"icon-gui-document-duplicate-outline",size:"20px",color:"text-neutral-1300 dark:text-neutral-000"})})})};try{Ye.displayName="CopyButton",Ye.__docgenInfo={description:"",displayName:"CopyButton",props:{onCopy:{defaultValue:null,description:"",name:"onCopy",required:!0,type:{name:"() => void"}},tooltip:{defaultValue:{value:"Copy"},description:"",name:"tooltip",required:!1,type:{name:"string"}}}}}catch{}const xt=({content:e,className:t,language:n,icon:a})=>{const l=o.useRef(null),[c,i]=o.useState(!1);return r.jsxs("div",{className:se("rounded-lg overflow-hidden bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 relative flex items-center",n==="shell"?"min-h-[3.375rem]":"min-h-12",t),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onFocus:()=>i(!0),onBlur:()=>i(!1),tabIndex:0,role:"button","aria-label":"Focusable code view area",ref:l,children:[a&&r.jsx("div",{className:"absolute top-2 left-2 z-10",children:r.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center bg-neutral-200 dark:bg-neutral-1100",children:r.jsx(U,{name:a,size:"20px",color:"text-neutral-1300 dark:text-neutral-000"})})}),r.jsx(Dt,{language:n,snippet:e,additionalCSS:se("w-full bg-neutral-000 text-neutral-1300 dark:bg-neutral-1300 dark:text-neutral-200 px-4 py-2",a&&"pl-14"),showLines:!1}),c&&r.jsx(Ye,{onCopy:()=>navigator.clipboard.writeText(e)})]})};try{xt.displayName="PlainCodeView",xt.__docgenInfo={description:"",displayName:"PlainCodeView",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},language:{defaultValue:null,description:"",name:"language",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"IconName | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ct=(e,t,n=!0)=>e.replace(/\{\{API_KEY\}\}/g,n?`${t.split(":")[0]}:*****`:t),O=({fixed:e=!1,headerRow:t=!1,title:n="Code",children:a,className:l,lang:c,onChange:i,apiKeys:s,sdk:u,showCodeLines:g=!0,languageOrdering:y,wrapCode:f=!1})=>{const C=o.useRef(null),[S,N]=o.useState(()=>s?.[0]?.keys?.[0]?.key??"");o.useEffect(()=>{!S&&s&&s.length>0&&N(s[0].keys?.[0]?.key)},[s]),o.useEffect(()=>{const b=C.current;if(!b)return;const w=(A,x)=>A.replace(/(['"]?)([^:'"]+):\*{5}\1/g,`$1${x}$1`),T=A=>{const x=window.getSelection();if(!x||x.rangeCount===0)return;const I=x.toString();if(!I)return;const D=x.getRangeAt(0);if(!b.contains(D.commonAncestorContainer))return;const L=w(I,S);A.clipboardData?.setData("text/plain",L),A.preventDefault()};return document.addEventListener("copy",T),()=>{document.removeEventListener("copy",T)}},[S]);const d=o.useCallback(b=>{if(!b||!b.props.className)return null;const T=b.props.className.split(" ").find(A=>A.startsWith("language-"));return T?T.substring(9):null},[]),h=o.useCallback(b=>{if(o.isValidElement(b))return b;if(Array.isArray(b)){const w=b.find(T=>o.isValidElement(T));return w&&o.isValidElement(w)?w:null}return null},[]),{codeData:v,languages:p,sdkTypes:m,isSinglePlainCommand:k}=o.useMemo(()=>{const b=o.Children.toArray(a),w=[],T=new Set,A=[],x=b.length===1&&["language-shell","language-text"].some(I=>o.isValidElement(b[0])?h(b[0].props.children)?.props.className?.includes(I):!1);return b.forEach(I=>{if(!o.isValidElement(I))return;const L=h(I.props.children);if(!L)return;const R=d(L);if(!R)return;for(const G of Wt)if(R.startsWith(`${G}_`)){T.add(G);break}w.includes(R)||w.push(R);const M=L.props.children;A.push({language:R,content:M})}),{codeData:A,languages:w,sdkTypes:T,isSinglePlainCommand:x}},[a,d,h]),j=o.useMemo(()=>m.size===1&&u&&!m.has(u)?Array.from(m)[0]:u,[u,m]),K=m.has("realtime")||m.has("rest"),_=o.useMemo(()=>{const b=!j||!K?[...p]:p.filter(w=>w.startsWith(`${j}_`));return y&&y.length>0&&b.sort((w,T)=>{const A=ge(w),x=ge(T),I=y.indexOf(A),D=y.indexOf(x);return I!==-1&&D!==-1?I-D:I!==-1?-1:D!==-1?1:0}),b},[j,K,p,y]),E=o.useMemo(()=>{if(j==="client"||j==="agent"){const b=`${j}_${c}`;if(p.includes(b))return b;const w=p.find(T=>T.startsWith(`${j}_`));if(w)return w}return j&&m.has(j)?`${j}_${c}`:c||(_.length>0?_[0]:p[0])},[j,m,c,_,p]),V=o.useMemo(()=>v.some(w=>w?.content.includes("{{API_KEY}}"))&&!!s&&s.length>0&&!!S,[v,s,S]),[ee,F]=o.useState(!1),z=o.useMemo(()=>p.length===1&&p[0]==="json",[p]),$=o.useMemo(()=>{if(!E)return[];const b=z?"json":E;return v.filter(w=>w?.language===b).map(w=>{if(!w)return null;const T=z?"json":w.language,A=re(T??"");if(typeof w.content=="string"||typeof w.content=="number"||typeof w.content=="boolean"){let x=String(w.content);return V&&(x=ct(x,S)),!A.syntaxHighlighterKey||!T?null:r.jsx(Dt,{language:A.syntaxHighlighterKey||T,snippet:x,additionalCSS:"!bg-neutral-000 text-neutral-1300 dark:!bg-neutral-1300 dark:text-neutral-200 px-6 py-4",showLines:g,wrap:f},w.language)}return null})},[E,z,v,V,g,f,S]),X=o.useMemo(()=>E?z?!0:v.some(b=>b?.language===E):!1,[E,z,v]),J=o.useCallback(b=>{const w=ge(p.find(T=>T===`${b}_${ge(E)}`)??p.find(T=>T.startsWith(`${b}_`))??E);i&&w&&i(ge(E),b)},[E,p,i]),H=o.useCallback(b=>{i&&i(ge(b),j)},[i,j]),W=o.useMemo(()=>{if(!E)return null;const b=re(E);return r.jsxs("div",{className:"px-16 py-6 ui-text-body2 text-neutral-800 dark:text-neutral-400 text-center flex flex-col gap-3 items-center",children:[r.jsx(U,{name:"icon-gui-exclamation-triangle-outline",color:"text-yellow-600 dark:text-yellow-400",size:"24px"}),r.jsxs("p",{className:"ui-text-p3 text-neutral-700 dark:text-neutral-600",children:["You're currently viewing the ",b.label," docs. There either isn't a ",b.label," code sample for this example, or this feature isn't supported in"," ",b.label,". Switch language to view this example in a different language, or check which SDKs support this feature."]})]})},[E]),B=!e&&_.length>0,Z=_.length>1,de=e&&E,ne=(b,w)=>r.jsx("div",{className:se("border-b border-neutral-300 dark:border-neutral-1000 h-[2.125rem] inline-flex items-center px-3 w-full",{"rounded-t-lg":!t}),children:r.jsxs("div",{className:se("inline-flex items-center",w&&"cursor-pointer"),...w&&{onClick:w},children:[r.jsx(U,{name:re(b).icon,size:"16px",additionalCSS:"mr-2"}),r.jsx("span",{className:"ui-text-label4 font-semibold text-neutral-800 dark:text-neutral-500 select-none",children:re(b).label})]})}),ue=o.useMemo(()=>E?X?$:W:null,[E,X,$,W]);if(k){const b=v[0];if(b){const w=b.content,T=b.language;if(!T||!w)return null;let A=String(w);return V&&(A=ct(A,S)),r.jsx(xt,{content:A,className:l,language:T,icon:T==="shell"?"icon-gui-command-line-outline":null})}}return r.jsxs("div",{className:se("rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-1200 border border-neutral-300 dark:border-neutral-1000 min-h-[3.375rem]",l),children:[t&&r.jsxs("div",{className:"h-[2.375rem] bg-neutral-200 dark:bg-neutral-1100 border-b border-neutral-300 dark:border-neutral-1000 flex items-center py-1 px-3 rounded-t-lg",children:[r.jsxs("div",{className:"flex space-x-1.5",children:[r.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-500"}),r.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),r.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),r.jsx("div",{className:"flex-1 text-center ui-text-p3 font-bold text-neutral-1300 dark:text-neutral-000",children:n}),r.jsx("div",{className:"w-12"})]}),K&&r.jsx("div",{className:se("p-2 border-b border-neutral-300 dark:border-neutral-1000",m.size===1&&"p-1",t?"":"rounded-t-lg"),children:r.jsx("div",{className:"flex gap-1 justify-start",children:["realtime","rest"].map(b=>m.has(b)&&r.jsx(Vt,{onClick:()=>J(b),size:"xs",active:j===b,className:se("text-[11px] font-semibold px-2 py-1 h-auto",m.size===1&&"pointer-events-none bg-neutral-100 dark:bg-neutral-1200 !text-neutral-800 !dark:text-neutral-500",m.size>1&&j!==b&&"bg-neutral-100 dark:bg-neutral-1200 hover:bg-neutral-200 dark:hover:bg-neutral-1100 active:bg-neutral-400 dark:active:bg-neutral-900",m.size>1&&j===b&&"bg-neutral-000 dark:bg-neutral-1100"),children:b==="realtime"?"Realtime":"REST"},b))})}),de&&ne(E),B&&(Z?r.jsx(ft,{languages:_,activeLanguage:E,onLanguageChange:H}):ne(_[0],()=>H(_[0]))),r.jsxs("div",{ref:C,className:"relative",onMouseEnter:()=>F(!0),onMouseLeave:()=>F(!1),onFocus:()=>F(!0),onBlur:()=>F(!1),children:[ue,ee&&E&&X&&r.jsx(Ye,{onCopy:()=>{const b=v.find(w=>w.language===E)?.content;b&&navigator.clipboard.writeText(ct(b,S,!1))}})]}),V&&r.jsx(vt,{apiKeys:s,selectedApiKey:S,onApiKeyChange:N})]})};try{O.displayName="CodeSnippet",O.__docgenInfo={description:"CodeSnippet component that displays code with language switching capability",displayName:"CodeSnippet",props:{fixed:{defaultValue:{value:"false"},description:"If true, hides the language selector row completely",name:"fixed",required:!1,type:{name:"boolean"}},headerRow:{defaultValue:{value:"false"},description:"If true, renders a macOS-style window header with buttons and title",name:"headerRow",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"Code"},description:"Title to display in the header row (when headerRow is true)",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children elements with lang attribute",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:`Default language to display. If not found in available languages, first available is used.
If found in languages but no matching snippet exists, a message is displayed.`,name:"lang",required:!0,type:{name:"string | null"}},onChange:{defaultValue:null,description:"Callback fired when the active language changes",name:"onChange",required:!1,type:{name:'((language: string, sdk?: "rest" | "realtime" | "client" | "agent") => void)'}},apiKeys:{defaultValue:null,description:"List of API keys to display in a dropdown",name:"apiKeys",required:!1,type:{name:"ApiKeysItem[]"}},sdk:{defaultValue:null,description:"Default SDK type to use for the code snippet",name:"sdk",required:!1,type:{name:"enum",value:[{value:'"rest"'},{value:'"realtime"'},{value:'"client"'},{value:'"agent"'}]}},showCodeLines:{defaultValue:{value:"true"},description:"Whether to show line numbers in code snippets",name:"showCodeLines",required:!1,type:{name:"boolean"}},languageOrdering:{defaultValue:null,description:`Defines the order in which languages should be displayed.
Languages not in this array will be shown after those that are included.`,name:"languageOrdering",required:!1,type:{name:"string[]"}},wrapCode:{defaultValue:{value:"false"},description:"Whether to wrap code content instead of scrolling",name:"wrapCode",required:!1,type:{name:"boolean"}}}}}catch{}const P={javascript:`var ably = new Ably.Realtime('{{API_KEY}}');
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
}`},co={title:"Components/Code Snippet",component:O,parameters:{layout:"padded",docs:{description:{component:`The CodeSnippet component displays code with language selector tabs.
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
- Copy to clipboard functionality`}}},tags:["autodocs"]},be={render:()=>{const[e,t]=o.useState("javascript");return r.jsxs(O,{lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:P.typescript})})]})}},Ce={render:()=>{const[e,t]=o.useState("javascript");return r.jsx(O,{lang:e,onChange:(n,a)=>{t(n)},children:r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})})})}},we={render:()=>{const[e,t]=o.useState("javascript");return r.jsxs(O,{headerRow:!0,title:"Subscribe Example",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:P.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-swift",children:P.swift})})]})}},je={render:()=>{const[e,t]=o.useState("javascript");return r.jsx(O,{headerRow:!0,title:"JavaScript Example",lang:e,onChange:(n,a)=>{t(n)},children:r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})})})}},Ne={render:()=>{const[e,t]=o.useState("swift");return r.jsxs(O,{headerRow:!0,title:"TypeScript Example",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:P.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-swift",children:P.swift})})]})}},Ee={render:()=>{const[e,t]=o.useState("ruby");return r.jsxs(O,{headerRow:!0,title:"Missing Language Example",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:P.typescript})})]})}},Pe={render:()=>{const[e,t]=o.useState("javascript");return r.jsxs(O,{headerRow:!0,title:"Demo API Keys",apiKeys:[{app:"demo",keys:[{name:"demo",key:"demokey:123456"}]}],lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:P.typescript})})]})}},ke={render:()=>{const[e,t]=o.useState("javascript");return r.jsxs(O,{headerRow:!0,title:"API Key Selection Example",apiKeys:[{app:"ably",keys:[{name:"Big Key",key:"bigkey:123456"},{name:"Small Key",key:"smallkey:123456"}]},{app:"bably",keys:[{name:"Big Key",key:"bigkey:654321"},{name:"Small Key",key:"smallkey:654321"}]}],lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:P.typescript})})]})}},_e={render:()=>{const[e,t]=o.useState("javascript"),[n,a]=o.useState("realtime");return r.jsxs(O,{headerRow:!0,title:"SDK Type Example",lang:e,sdk:n,onChange:(l,c)=>{t(l),a(c||"realtime")},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_typescript",children:P.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-rest_php",children:P.php})}),r.jsx("pre",{children:r.jsx("code",{className:"language-rest_kotlin",children:P.kotlin})})]})}},Ie={render:()=>{const[e,t]=o.useState("javascript");return r.jsxs(O,{headerRow:!0,title:"SDK Type Example (realtime only)",lang:e,sdk:"realtime",onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_typescript",children:P.typescript})})]})}},Be={render:()=>{const[e,t]=o.useState("javascript"),[n,a]=o.useState("realtime");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs(O,{headerRow:!0,title:"SDK Type Example (realtime only)",lang:e,sdk:n,onChange:(l,c)=>{t(l),a(c||"realtime")},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-realtime_typescript",children:P.typescript})})]}),r.jsxs(O,{headerRow:!0,title:"SDK Type Example (rest only)",lang:e,sdk:n,onChange:(l,c)=>{t(l),a(c||"realtime")},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-rest_php",children:P.php})}),r.jsx("pre",{children:r.jsx("code",{className:"language-rest_kotlin",children:P.kotlin})})]})]})}},Te={render:()=>{const[e,t]=o.useState("shell");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx("h4",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000",children:"Shell"}),r.jsx(O,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:P.shellInstall})})}),r.jsx("h4",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000",children:"Text"}),r.jsx(O,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-text",children:"It was the best of times, it was the blurst of times."})})})]})}},Le={render:()=>{const[e,t]=o.useState("shell");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2",children:"Installation"}),r.jsx(O,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:P.shellInstall})})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2",children:"Starting the server"}),r.jsx(O,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:P.shellStartServer})})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2",children:"Complex command"}),r.jsx(O,{lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-shell",children:P.shellComplex})})})]})]})}},Re={render:()=>{const[e,t]=o.useState("javascript");return r.jsx(O,{fixed:!0,lang:e,onChange:n=>t(n),children:r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})})})}},Ae={render:()=>{const[e,t]=o.useState("ruby");return r.jsx(O,{headerRow:!0,title:"JSON-Only Example",lang:e,onChange:(n,a)=>{t(n)},children:r.jsx("pre",{children:r.jsx("code",{className:"language-json",children:P.json})})})}},Oe={render:()=>{const[e,t]=o.useState("javascript");return r.jsxs(O,{showCodeLines:!1,headerRow:!0,title:"No Line Numbers",lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:P.typescript})})]})}},De={render:()=>{const[e,t]=o.useState("swift");return r.jsxs(O,{headerRow:!0,title:"Custom Language Order",languageOrdering:["swift","typescript","javascript"],lang:e,onChange:(n,a)=>{t(n)},children:[r.jsx("pre",{children:r.jsx("code",{className:"language-javascript",children:P.javascript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-typescript",children:P.typescript})}),r.jsx("pre",{children:r.jsx("code",{className:"language-swift",children:P.swift})}),r.jsx("pre",{children:r.jsx("code",{className:"language-python",children:P.python})})]})}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
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
}`,...be.parameters?.docs?.source},description:{story:"Default example showing JavaScript and TypeScript code with language selector.",...be.parameters?.docs?.description}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
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
}`,...Ce.parameters?.docs?.source},description:{story:`CodeSnippet with a single language shows a simplified language selector
with just an icon and language name.`,...Ce.parameters?.docs?.description}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
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
}`,...we.parameters?.docs?.source},description:{story:"CodeSnippet with a macOS-style window header showing title and window controls.",...we.parameters?.docs?.description}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`{
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
}`,...je.parameters?.docs?.source},description:{story:`CodeSnippet with a single language and macOS-style window header.
A simplified language selector is shown with just the icon and name.`,...je.parameters?.docs?.description}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
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
}`,...Ne.parameters?.docs?.source},description:{story:"CodeSnippet with a specified default language, which will be selected when the component mounts.",...Ne.parameters?.docs?.description}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
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
}`,...Ee.parameters?.docs?.source},description:{story:`CodeSnippet that shows a message when a requested language is not available.
When a language is specified that doesn't exist in the provided snippets,
a helpful message is shown prompting the user to switch languages.`,...Ee.parameters?.docs?.description}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
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
}`,...Pe.parameters?.docs?.source},description:{story:'CodeSnippet with demo API key mode, showing a "DEMO ONLY" badge and information tooltip.',...Pe.parameters?.docs?.description}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
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
}`,...ke.parameters?.docs?.source},description:{story:`CodeSnippet with selectable API keys from a dropdown menu.
The selected API key could be used to replace placeholders in the code.`,...ke.parameters?.docs?.description}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`{
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
based on the selected SDK type. Languages must have appropriate prefixes to be filtered.`,..._e.parameters?.docs?.description}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
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
}`,...Ie.parameters?.docs?.source},description:{story:`CodeSnippet with a single SDK type ("realtime") and multiple languages.
The SDK selector shows the condensed form.`,...Ie.parameters?.docs?.description}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
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
}`,...Be.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
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
}`,...Te.parameters?.docs?.source},description:{story:"Plain mode that displays plain code with a relevant icon, if supplied.",...Te.parameters?.docs?.description}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
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
}`,...Le.parameters?.docs?.source},description:{story:`Multiple shell command examples showing how to use the specialized shell mode
with different types of terminal commands.`,...Le.parameters?.docs?.description}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`{
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
}`,...Re.parameters?.docs?.source},description:{story:`CodeSnippet with fixed mode enabled, which hides the language selector completely
even when languages are provided.`,...Re.parameters?.docs?.description}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
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
}`,...Ae.parameters?.docs?.source},description:{story:`Demonstrates the special behavior for JSON-only snippets.
When only a JSON snippet is provided, it will be shown regardless of which language is selected,
instead of showing the NoSnippetMessage.`,...Ae.parameters?.docs?.description}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`{
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
}`,...Oe.parameters?.docs?.source},description:{story:`CodeSnippet with line numbers disabled via the showCodeLines prop.
This demonstrates how to hide line numbers in code snippets when they're not needed.`,...Oe.parameters?.docs?.description}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
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
}`,...De.parameters?.docs?.source},description:{story:`CodeSnippet with custom language ordering that controls the display order
of languages in the selector tabs.`,...De.parameters?.docs?.description}}};const uo=["Default","SingleLanguage","WithHeaderRow","SingleLanguageWithHeader","WithDefaultLanguage","WithMissingLanguageSnippet","WithDemoApiKeys","WithApiKeys","WithSDKTypes","WithSingleSDKType","WithFallbackSDKTypeAcrossInstances","PlainMode","MultipleShellExamples","FixedMode","JsonOnlySnippet","WithoutCodeLines","WithCustomLanguageOrder"];export{be as Default,Re as FixedMode,Ae as JsonOnlySnippet,Le as MultipleShellExamples,Te as PlainMode,Ce as SingleLanguage,je as SingleLanguageWithHeader,ke as WithApiKeys,De as WithCustomLanguageOrder,Ne as WithDefaultLanguage,Pe as WithDemoApiKeys,Be as WithFallbackSDKTypeAcrossInstances,we as WithHeaderRow,Ee as WithMissingLanguageSnippet,_e as WithSDKTypes,Ie as WithSingleSDKType,Oe as WithoutCodeLines,uo as __namedExportsOrder,co as default};
