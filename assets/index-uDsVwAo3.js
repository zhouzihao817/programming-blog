function Rm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ra(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $f={exports:{}},Dl={},Vf={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var di=Symbol.for("react.element"),Dm=Symbol.for("react.portal"),Am=Symbol.for("react.fragment"),Fm=Symbol.for("react.strict_mode"),Om=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),Um=Symbol.for("react.forward_ref"),$m=Symbol.for("react.suspense"),Vm=Symbol.for("react.memo"),Hm=Symbol.for("react.lazy"),Ts=Symbol.iterator;function Wm(e){return e===null||typeof e!="object"?null:(e=Ts&&e[Ts]||e["@@iterator"],typeof e=="function"?e:null)}var Hf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wf=Object.assign,Qf={};function fr(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Hf}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gf(){}Gf.prototype=fr.prototype;function ia(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Hf}var la=ia.prototype=new Gf;la.constructor=ia;Wf(la,fr.prototype);la.isPureReactComponent=!0;var Is=Array.isArray,Jf=Object.prototype.hasOwnProperty,oa={current:null},qf={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Jf.call(t,r)&&!qf.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:di,type:e,key:l,ref:o,props:i,_owner:oa.current}}function Qm(e,t){return{$$typeof:di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===di}function Gm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zs=/\/+/g;function io(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gm(""+e.key):t.toString(36)}function Wi(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case di:case Dm:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+io(o,0):r,Is(i)?(n="",e!=null&&(n=e.replace(zs,"$&/")+"/"),Wi(i,t,n,"",function(s){return s})):i!=null&&(ua(i)&&(i=Qm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zs,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Is(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+io(l,u);o+=Wi(l,t,n,a,i)}else if(a=Wm(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+io(l,u++),o+=Wi(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Pi(e,t,n){if(e==null)return e;var r=[],i=0;return Wi(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Jm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},Qi={transition:null},qm={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Qi,ReactCurrentOwner:oa};function Yf(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Pi,forEach:function(e,t,n){Pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pi(e,function(){t++}),t},toArray:function(e){return Pi(e,function(t){return t})||[]},only:function(e){if(!ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=fr;H.Fragment=Am;H.Profiler=Om;H.PureComponent=ia;H.StrictMode=Fm;H.Suspense=$m;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm;H.act=Yf;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wf({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=oa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Jf.call(t,a)&&!qf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:di,type:e.type,key:i,ref:l,props:r,_owner:o}};H.createContext=function(e){return e={$$typeof:Bm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mm,_context:e},e.Consumer=e};H.createElement=Kf;H.createFactory=function(e){var t=Kf.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Um,render:e}};H.isValidElement=ua;H.lazy=function(e){return{$$typeof:Hm,_payload:{_status:-1,_result:e},_init:Jm}};H.memo=function(e,t){return{$$typeof:Vm,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Qi.transition;Qi.transition={};try{e()}finally{Qi.transition=t}};H.unstable_act=Yf;H.useCallback=function(e,t){return Ae.current.useCallback(e,t)};H.useContext=function(e){return Ae.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ae.current.useEffect(e,t)};H.useId=function(){return Ae.current.useId()};H.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ae.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};H.useRef=function(e){return Ae.current.useRef(e)};H.useState=function(e){return Ae.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ae.current.useTransition()};H.version="18.3.1";Vf.exports=H;var j=Vf.exports;const Xf=ra(j),Km=Rm({__proto__:null,default:Xf},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=j,Xm=Symbol.for("react.element"),Zm=Symbol.for("react.fragment"),eg=Object.prototype.hasOwnProperty,tg=Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ng={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)eg.call(t,r)&&!ng.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Xm,type:e,key:l,ref:o,props:i,_owner:tg.current}}Dl.Fragment=Zm;Dl.jsx=Zf;Dl.jsxs=Zf;$f.exports=Dl;var k=$f.exports,Jo={},ep={exports:{}},Xe={},tp={exports:{}},np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,B){var v=R.length;R.push(B);e:for(;0<v;){var q=v-1>>>1,X=R[q];if(0<i(X,B))R[q]=B,R[v]=X,v=q;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var B=R[0],v=R.pop();if(v!==B){R[0]=v;e:for(var q=0,X=R.length,w=X>>>1;q<w;){var ve=2*(q+1)-1,ut=R[ve],ie=ve+1,yt=R[ie];if(0>i(ut,v))ie<X&&0>i(yt,ut)?(R[q]=yt,R[ie]=v,q=ie):(R[q]=ut,R[ve]=v,q=ve);else if(ie<X&&0>i(yt,v))R[q]=yt,R[ie]=v,q=ie;else break e}}return B}function i(R,B){var v=R.sortIndex-B.sortIndex;return v!==0?v:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],f=1,c=null,p=3,d=!1,g=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var B=n(s);B!==null;){if(B.callback===null)r(s);else if(B.startTime<=R)r(s),B.sortIndex=B.expirationTime,t(a,B);else break;B=n(s)}}function E(R){if(x=!1,y(R),!g)if(n(a)!==null)g=!0,he(T);else{var B=n(s);B!==null&&pe(E,B.startTime-R)}}function T(R,B){g=!1,x&&(x=!1,h(N),N=-1),d=!0;var v=p;try{for(y(B),c=n(a);c!==null&&(!(c.expirationTime>B)||R&&!D());){var q=c.callback;if(typeof q=="function"){c.callback=null,p=c.priorityLevel;var X=q(c.expirationTime<=B);B=e.unstable_now(),typeof X=="function"?c.callback=X:c===n(a)&&r(a),y(B)}else r(a);c=n(a)}if(c!==null)var w=!0;else{var ve=n(s);ve!==null&&pe(E,ve.startTime-B),w=!1}return w}finally{c=null,p=v,d=!1}}var C=!1,_=null,N=-1,M=5,P=-1;function D(){return!(e.unstable_now()-P<M)}function F(){if(_!==null){var R=e.unstable_now();P=R;var B=!0;try{B=_(!0,R)}finally{B?J():(C=!1,_=null)}}else C=!1}var J;if(typeof m=="function")J=function(){m(F)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,W=ne.port2;ne.port1.onmessage=F,J=function(){W.postMessage(null)}}else J=function(){S(F,0)};function he(R){_=R,C||(C=!0,J())}function pe(R,B){N=S(function(){R(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){g||d||(g=!0,he(T))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var B=3;break;default:B=p}var v=p;p=B;try{return R()}finally{p=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var v=p;p=R;try{return B()}finally{p=v}},e.unstable_scheduleCallback=function(R,B,v){var q=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?q+v:q):v=q,R){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=v+X,R={id:f++,callback:B,priorityLevel:R,startTime:v,expirationTime:X,sortIndex:-1},v>q?(R.sortIndex=v,t(s,R),n(a)===null&&R===n(s)&&(x?(h(N),N=-1):x=!0,pe(E,v-q))):(R.sortIndex=X,t(a,R),g||d||(g=!0,he(T))),R},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(R){var B=p;return function(){var v=p;p=B;try{return R.apply(this,arguments)}finally{p=v}}}})(np);tp.exports=np;var rg=tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig=j,Ye=rg;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rp=new Set,Qr={};function zn(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Qr[e]=t,e=0;e<t.length;e++)rp.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=Object.prototype.hasOwnProperty,lg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_s={},js={};function og(e){return qo.call(js,e)?!0:qo.call(_s,e)?!1:lg.test(e)?js[e]=!0:(_s[e]=!0,!1)}function ug(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ag(e,t,n,r){if(t===null||typeof t>"u"||ug(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var aa=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(aa,sa);be[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(aa,sa);be[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(aa,sa);be[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ca(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ag(t,n,i,r)&&(n=null),r||i===null?og(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),fa=Symbol.for("react.strict_mode"),Ko=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),lp=Symbol.for("react.context"),pa=Symbol.for("react.forward_ref"),Yo=Symbol.for("react.suspense"),Xo=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),op=Symbol.for("react.offscreen"),Ns=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=Ns&&e[Ns]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,lo;function _r(e){if(lo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);lo=t&&t[1]||""}return`
`+lo+e}var oo=!1;function uo(e,t){if(!e||oo)return"";oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{oo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_r(e):""}function sg(e){switch(e.tag){case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 2:case 15:return e=uo(e.type,!1),e;case 11:return e=uo(e.type.render,!1),e;case 1:return e=uo(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Mn:return"Portal";case Ko:return"Profiler";case fa:return"StrictMode";case Yo:return"Suspense";case Xo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lp:return(e.displayName||"Context")+".Consumer";case ip:return(e._context.displayName||"Context")+".Provider";case pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return t=e.displayName||null,t!==null?t:Zo(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return Zo(e(t))}catch{}}return null}function cg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(t);case 8:return t===fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function up(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fg(e){var t=up(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){e._valueTracker||(e._valueTracker=fg(e))}function ap(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=up(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function eu(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ls(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sp(e,t){t=t.checked,t!=null&&ca(e,"checked",t,!1)}function tu(e,t){sp(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nu(e,t.type,n):t.hasOwnProperty("defaultValue")&&nu(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nu(e,t,n){(t!=="number"||ol(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jr=Array.isArray;function Yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ru(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ds(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(jr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function cp(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function As(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function iu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ti,pp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ti=Ti||document.createElement("div"),Ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pg=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){pg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function dp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function hp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dg=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lu(e,t){if(t){if(dg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uu=null;function ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var au=null,Xn=null,Zn=null;function Fs(e){if(e=gi(e)){if(typeof au!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Bl(t),au(e.stateNode,e.type,t))}}function mp(e){Xn?Zn?Zn.push(e):Zn=[e]:Xn=e}function gp(){if(Xn){var e=Xn,t=Zn;if(Zn=Xn=null,Fs(e),t)for(e=0;e<t.length;e++)Fs(t[e])}}function yp(e,t){return e(t)}function vp(){}var ao=!1;function xp(e,t,n){if(ao)return e(t,n);ao=!0;try{return yp(e,t,n)}finally{ao=!1,(Xn!==null||Zn!==null)&&(vp(),gp())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var su=!1;if(Lt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){su=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{su=!1}function hg(e,t,n,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(f){this.onError(f)}}var Dr=!1,ul=null,al=!1,cu=null,mg={onError:function(e){Dr=!0,ul=e}};function gg(e,t,n,r,i,l,o,u,a){Dr=!1,ul=null,hg.apply(mg,arguments)}function yg(e,t,n,r,i,l,o,u,a){if(gg.apply(this,arguments),Dr){if(Dr){var s=ul;Dr=!1,ul=null}else throw Error(I(198));al||(al=!0,cu=s)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Os(e){if(_n(e)!==e)throw Error(I(188))}function vg(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Os(i),e;if(l===r)return Os(i),t;l=l.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function wp(e){return e=vg(e),e!==null?Sp(e):null}function Sp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sp(e);if(t!==null)return t;e=e.sibling}return null}var Cp=Ye.unstable_scheduleCallback,Ms=Ye.unstable_cancelCallback,xg=Ye.unstable_shouldYield,kg=Ye.unstable_requestPaint,de=Ye.unstable_now,wg=Ye.unstable_getCurrentPriorityLevel,ma=Ye.unstable_ImmediatePriority,Pp=Ye.unstable_UserBlockingPriority,sl=Ye.unstable_NormalPriority,Sg=Ye.unstable_LowPriority,Ep=Ye.unstable_IdlePriority,Al=null,St=null;function Cg(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:bg,Pg=Math.log,Eg=Math.LN2;function bg(e){return e>>>=0,e===0?32:31-(Pg(e)/Eg|0)|0}var Ii=64,zi=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~i;u!==0?r=Nr(u):(l&=o,l!==0&&(r=Nr(l)))}else o=n&~i,o!==0?r=Nr(o):l!==0&&(r=Nr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Tg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ig(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-dt(l),u=1<<o,a=i[o];a===-1?(!(u&n)||u&r)&&(i[o]=Tg(u,t)):a<=t&&(e.expiredLanes|=u),l&=~u}}function fu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bp(){var e=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),e}function so(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function zg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function Tp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ip,ya,zp,_p,jp,pu=!1,_i=[],qt=null,Kt=null,Yt=null,qr=new Map,Kr=new Map,Ht=[],_g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bs(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function Sr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=gi(t),t!==null&&ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function jg(e,t,n,r,i){switch(t){case"focusin":return qt=Sr(qt,e,t,n,r,i),!0;case"dragenter":return Kt=Sr(Kt,e,t,n,r,i),!0;case"mouseover":return Yt=Sr(Yt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return qr.set(l,Sr(qr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Kr.set(l,Sr(Kr.get(l)||null,e,t,n,r,i)),!0}return!1}function Np(e){var t=yn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=kp(n),t!==null){e.blockedOn=t,jp(e.priority,function(){zp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=du(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uu=r,n.target.dispatchEvent(r),uu=null}else return t=gi(n),t!==null&&ya(t),e.blockedOn=n,!1;t.shift()}return!0}function Us(e,t,n){Gi(e)&&n.delete(t)}function Ng(){pu=!1,qt!==null&&Gi(qt)&&(qt=null),Kt!==null&&Gi(Kt)&&(Kt=null),Yt!==null&&Gi(Yt)&&(Yt=null),qr.forEach(Us),Kr.forEach(Us)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,pu||(pu=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Ng)))}function Yr(e){function t(i){return Cr(i,e)}if(0<_i.length){Cr(_i[0],e);for(var n=1;n<_i.length;n++){var r=_i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Cr(qt,e),Kt!==null&&Cr(Kt,e),Yt!==null&&Cr(Yt,e),qr.forEach(t),Kr.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Np(n),n.blockedOn===null&&Ht.shift()}var er=Ft.ReactCurrentBatchConfig,fl=!0;function Lg(e,t,n,r){var i=Y,l=er.transition;er.transition=null;try{Y=1,va(e,t,n,r)}finally{Y=i,er.transition=l}}function Rg(e,t,n,r){var i=Y,l=er.transition;er.transition=null;try{Y=4,va(e,t,n,r)}finally{Y=i,er.transition=l}}function va(e,t,n,r){if(fl){var i=du(e,t,n,r);if(i===null)ko(e,t,r,pl,n),Bs(e,r);else if(jg(i,e,t,n,r))r.stopPropagation();else if(Bs(e,r),t&4&&-1<_g.indexOf(e)){for(;i!==null;){var l=gi(i);if(l!==null&&Ip(l),l=du(e,t,n,r),l===null&&ko(e,t,r,pl,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else ko(e,t,r,null,n)}}var pl=null;function du(e,t,n,r){if(pl=null,e=ha(r),e=yn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pl=e,null}function Lp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wg()){case ma:return 1;case Pp:return 4;case sl:case Sg:return 16;case Ep:return 536870912;default:return 16}default:return 16}}var Qt=null,xa=null,Ji=null;function Rp(){if(Ji)return Ji;var e,t=xa,n=t.length,r,i="value"in Qt?Qt.value:Qt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Ji=i.slice(e,1<r?1-r:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function $s(){return!1}function Ze(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ji:$s,this.isPropagationStopped=$s,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Ze(pr),mi=ce({},pr,{view:0,detail:0}),Dg=Ze(mi),co,fo,Pr,Fl=ce({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(co=e.screenX-Pr.screenX,fo=e.screenY-Pr.screenY):fo=co=0,Pr=e),co)},movementY:function(e){return"movementY"in e?e.movementY:fo}}),Vs=Ze(Fl),Ag=ce({},Fl,{dataTransfer:0}),Fg=Ze(Ag),Og=ce({},mi,{relatedTarget:0}),po=Ze(Og),Mg=ce({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=Ze(Mg),Ug=ce({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$g=Ze(Ug),Vg=ce({},pr,{data:0}),Hs=Ze(Vg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qg[e])?!!t[e]:!1}function wa(){return Gg}var Jg=ce({},mi,{key:function(e){if(e.key){var t=Hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qg=Ze(Jg),Kg=ce({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ws=Ze(Kg),Yg=ce({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),Xg=Ze(Yg),Zg=ce({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ey=Ze(Zg),ty=ce({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=Ze(ty),ry=[9,13,27,32],Sa=Lt&&"CompositionEvent"in window,Ar=null;Lt&&"documentMode"in document&&(Ar=document.documentMode);var iy=Lt&&"TextEvent"in window&&!Ar,Dp=Lt&&(!Sa||Ar&&8<Ar&&11>=Ar),Qs=" ",Gs=!1;function Ap(e,t){switch(e){case"keyup":return ry.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function ly(e,t){switch(e){case"compositionend":return Fp(t);case"keypress":return t.which!==32?null:(Gs=!0,Qs);case"textInput":return e=t.data,e===Qs&&Gs?null:e;default:return null}}function oy(e,t){if(Un)return e==="compositionend"||!Sa&&Ap(e,t)?(e=Rp(),Ji=xa=Qt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dp&&t.locale!=="ko"?null:t.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uy[e.type]:t==="textarea"}function Op(e,t,n,r){mp(r),t=dl(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Xr=null;function ay(e){qp(e,0)}function Ol(e){var t=Hn(e);if(ap(t))return e}function sy(e,t){if(e==="change")return t}var Mp=!1;if(Lt){var ho;if(Lt){var mo="oninput"in document;if(!mo){var qs=document.createElement("div");qs.setAttribute("oninput","return;"),mo=typeof qs.oninput=="function"}ho=mo}else ho=!1;Mp=ho&&(!document.documentMode||9<document.documentMode)}function Ks(){Fr&&(Fr.detachEvent("onpropertychange",Bp),Xr=Fr=null)}function Bp(e){if(e.propertyName==="value"&&Ol(Xr)){var t=[];Op(t,Xr,e,ha(e)),xp(ay,t)}}function cy(e,t,n){e==="focusin"?(Ks(),Fr=t,Xr=n,Fr.attachEvent("onpropertychange",Bp)):e==="focusout"&&Ks()}function fy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ol(Xr)}function py(e,t){if(e==="click")return Ol(t)}function dy(e,t){if(e==="input"||e==="change")return Ol(t)}function hy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:hy;function Zr(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qo.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xs(e,t){var n=Ys(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ys(n)}}function Up(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Up(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $p(){for(var e=window,t=ol();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ol(e.document)}return t}function Ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function my(e){var t=$p(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Up(n.ownerDocument.documentElement,n)){if(r!==null&&Ca(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Xs(n,l);var o=Xs(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gy=Lt&&"documentMode"in document&&11>=document.documentMode,$n=null,hu=null,Or=null,mu=!1;function Zs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mu||$n==null||$n!==ol(r)||(r=$n,"selectionStart"in r&&Ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&Zr(Or,r)||(Or=r,r=dl(hu,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$n)))}function Ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vn={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionend:Ni("Transition","TransitionEnd")},go={},Vp={};Lt&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function Ml(e){if(go[e])return go[e];if(!Vn[e])return e;var t=Vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vp)return go[e]=t[n];return e}var Hp=Ml("animationend"),Wp=Ml("animationiteration"),Qp=Ml("animationstart"),Gp=Ml("transitionend"),Jp=new Map,ec="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Jp.set(e,t),zn(t,[e])}for(var yo=0;yo<ec.length;yo++){var vo=ec[yo],yy=vo.toLowerCase(),vy=vo[0].toUpperCase()+vo.slice(1);un(yy,"on"+vy)}un(Hp,"onAnimationEnd");un(Wp,"onAnimationIteration");un(Qp,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Gp,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function tc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yg(r,t,void 0,e),e.currentTarget=null}function qp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;tc(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;tc(i,u,s),l=a}}}if(al)throw e=cu,al=!1,cu=null,e}function le(e,t){var n=t[ku];n===void 0&&(n=t[ku]=new Set);var r=e+"__bubble";n.has(r)||(Kp(t,e,2,!1),n.add(r))}function xo(e,t,n){var r=0;t&&(r|=4),Kp(n,e,r,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function ei(e){if(!e[Li]){e[Li]=!0,rp.forEach(function(n){n!=="selectionchange"&&(xy.has(n)||xo(n,!1,e),xo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,xo("selectionchange",!1,t))}}function Kp(e,t,n,r){switch(Lp(t)){case 1:var i=Lg;break;case 4:i=Rg;break;default:i=va}n=i.bind(null,t,n,e),i=void 0,!su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ko(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=yn(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}xp(function(){var s=l,f=ha(n),c=[];e:{var p=Jp.get(e);if(p!==void 0){var d=ka,g=e;switch(e){case"keypress":if(qi(n)===0)break e;case"keydown":case"keyup":d=qg;break;case"focusin":g="focus",d=po;break;case"focusout":g="blur",d=po;break;case"beforeblur":case"afterblur":d=po;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Xg;break;case Hp:case Wp:case Qp:d=Bg;break;case Gp:d=ey;break;case"scroll":d=Dg;break;case"wheel":d=ny;break;case"copy":case"cut":case"paste":d=$g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Ws}var x=(t&4)!==0,S=!x&&e==="scroll",h=x?p!==null?p+"Capture":null:p;x=[];for(var m=s,y;m!==null;){y=m;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,h!==null&&(E=Jr(m,h),E!=null&&x.push(ti(m,E,y)))),S)break;m=m.return}0<x.length&&(p=new d(p,g,null,n,f),c.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",p&&n!==uu&&(g=n.relatedTarget||n.fromElement)&&(yn(g)||g[Rt]))break e;if((d||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=s,g=g?yn(g):null,g!==null&&(S=_n(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=s),d!==g)){if(x=Vs,E="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ws,E="onPointerLeave",h="onPointerEnter",m="pointer"),S=d==null?p:Hn(d),y=g==null?p:Hn(g),p=new x(E,m+"leave",d,n,f),p.target=S,p.relatedTarget=y,E=null,yn(f)===s&&(x=new x(h,m+"enter",g,n,f),x.target=y,x.relatedTarget=S,E=x),S=E,d&&g)t:{for(x=d,h=g,m=0,y=x;y;y=An(y))m++;for(y=0,E=h;E;E=An(E))y++;for(;0<m-y;)x=An(x),m--;for(;0<y-m;)h=An(h),y--;for(;m--;){if(x===h||h!==null&&x===h.alternate)break t;x=An(x),h=An(h)}x=null}else x=null;d!==null&&nc(c,p,d,x,!1),g!==null&&S!==null&&nc(c,S,g,x,!0)}}e:{if(p=s?Hn(s):window,d=p.nodeName&&p.nodeName.toLowerCase(),d==="select"||d==="input"&&p.type==="file")var T=sy;else if(Js(p))if(Mp)T=dy;else{T=fy;var C=cy}else(d=p.nodeName)&&d.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=py);if(T&&(T=T(e,s))){Op(c,T,n,f);break e}C&&C(e,p,s),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&nu(p,"number",p.value)}switch(C=s?Hn(s):window,e){case"focusin":(Js(C)||C.contentEditable==="true")&&($n=C,hu=s,Or=null);break;case"focusout":Or=hu=$n=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Zs(c,n,f);break;case"selectionchange":if(gy)break;case"keydown":case"keyup":Zs(c,n,f)}var _;if(Sa)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Un?Ap(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Dp&&n.locale!=="ko"&&(Un||N!=="onCompositionStart"?N==="onCompositionEnd"&&Un&&(_=Rp()):(Qt=f,xa="value"in Qt?Qt.value:Qt.textContent,Un=!0)),C=dl(s,N),0<C.length&&(N=new Hs(N,e,null,n,f),c.push({event:N,listeners:C}),_?N.data=_:(_=Fp(n),_!==null&&(N.data=_)))),(_=iy?ly(e,n):oy(e,n))&&(s=dl(s,"onBeforeInput"),0<s.length&&(f=new Hs("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:s}),f.data=_))}qp(c,t)})}function ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Jr(e,n),l!=null&&r.unshift(ti(e,l,i)),l=Jr(e,t),l!=null&&r.push(ti(e,l,i))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nc(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var u=n,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Jr(n,l),a!=null&&o.unshift(ti(n,a,u))):i||(a=Jr(n,l),a!=null&&o.push(ti(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ky=/\r\n?/g,wy=/\u0000|\uFFFD/g;function rc(e){return(typeof e=="string"?e:""+e).replace(ky,`
`).replace(wy,"")}function Ri(e,t,n){if(t=rc(t),rc(e)!==t&&n)throw Error(I(425))}function hl(){}var gu=null,yu=null;function vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,ic=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof ic<"u"?function(e){return ic.resolve(null).then(e).catch(Py)}:xu;function Py(e){setTimeout(function(){throw e})}function wo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yr(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),wt="__reactFiber$"+dr,ni="__reactProps$"+dr,Rt="__reactContainer$"+dr,ku="__reactEvents$"+dr,Ey="__reactListeners$"+dr,by="__reactHandles$"+dr;function yn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lc(e);e!==null;){if(n=e[wt])return n;e=lc(e)}return t}e=n,n=e.parentNode}return null}function gi(e){return e=e[wt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Bl(e){return e[ni]||null}var wu=[],Wn=-1;function an(e){return{current:e}}function oe(e){0>Wn||(e.current=wu[Wn],wu[Wn]=null,Wn--)}function re(e,t){Wn++,wu[Wn]=e.current,e.current=t}var on={},je=an(on),Ue=an(!1),Cn=on;function ir(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function ml(){oe(Ue),oe(je)}function oc(e,t,n){if(je.current!==on)throw Error(I(168));re(je,t),re(Ue,n)}function Yp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,cg(e)||"Unknown",i));return ce({},n,r)}function gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,Cn=je.current,re(je,e),re(Ue,Ue.current),!0}function uc(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Yp(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,oe(Ue),oe(je),re(je,e)):oe(Ue),re(Ue,n)}var zt=null,Ul=!1,So=!1;function Xp(e){zt===null?zt=[e]:zt.push(e)}function Ty(e){Ul=!0,Xp(e)}function sn(){if(!So&&zt!==null){So=!0;var e=0,t=Y;try{var n=zt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,Ul=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),Cp(ma,sn),i}finally{Y=t,So=!1}}return null}var Qn=[],Gn=0,yl=null,vl=0,et=[],tt=0,Pn=null,_t=1,jt="";function hn(e,t){Qn[Gn++]=vl,Qn[Gn++]=yl,yl=e,vl=t}function Zp(e,t,n){et[tt++]=_t,et[tt++]=jt,et[tt++]=Pn,Pn=e;var r=_t;e=jt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var l=32-dt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_t=1<<32-dt(t)+i|n<<i|r,jt=l+e}else _t=1<<l|n<<i|r,jt=e}function Pa(e){e.return!==null&&(hn(e,1),Zp(e,1,0))}function Ea(e){for(;e===yl;)yl=Qn[--Gn],Qn[Gn]=null,vl=Qn[--Gn],Qn[Gn]=null;for(;e===Pn;)Pn=et[--tt],et[tt]=null,jt=et[--tt],et[tt]=null,_t=et[--tt],et[tt]=null}var qe=null,Je=null,ue=!1,pt=null;function ed(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ac(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Je=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:_t,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Je=null,!0):!1;default:return!1}}function Su(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cu(e){if(ue){var t=Je;if(t){var n=t;if(!ac(e,t)){if(Su(e))throw Error(I(418));t=Xt(n.nextSibling);var r=qe;t&&ac(e,t)?ed(r,n):(e.flags=e.flags&-4097|2,ue=!1,qe=e)}}else{if(Su(e))throw Error(I(418));e.flags=e.flags&-4097|2,ue=!1,qe=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Di(e){if(e!==qe)return!1;if(!ue)return sc(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vu(e.type,e.memoizedProps)),t&&(t=Je)){if(Su(e))throw td(),Error(I(418));for(;t;)ed(e,t),t=Xt(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=qe?Xt(e.stateNode.nextSibling):null;return!0}function td(){for(var e=Je;e;)e=Xt(e.nextSibling)}function lr(){Je=qe=null,ue=!1}function ba(e){pt===null?pt=[e]:pt.push(e)}var Iy=Ft.ReactCurrentBatchConfig;function Er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ai(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cc(e){var t=e._init;return t(e._payload)}function nd(e){function t(h,m){if(e){var y=h.deletions;y===null?(h.deletions=[m],h.flags|=16):y.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=nn(h,m),h.index=0,h.sibling=null,h}function l(h,m,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<m?(h.flags|=2,m):y):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,m,y,E){return m===null||m.tag!==6?(m=zo(y,h.mode,E),m.return=h,m):(m=i(m,y),m.return=h,m)}function a(h,m,y,E){var T=y.type;return T===Bn?f(h,m,y.props.children,E,y.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$t&&cc(T)===m.type)?(E=i(m,y.props),E.ref=Er(h,m,y),E.return=h,E):(E=nl(y.type,y.key,y.props,null,h.mode,E),E.ref=Er(h,m,y),E.return=h,E)}function s(h,m,y,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=_o(y,h.mode,E),m.return=h,m):(m=i(m,y.children||[]),m.return=h,m)}function f(h,m,y,E,T){return m===null||m.tag!==7?(m=wn(y,h.mode,E,T),m.return=h,m):(m=i(m,y),m.return=h,m)}function c(h,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=zo(""+m,h.mode,y),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ei:return y=nl(m.type,m.key,m.props,null,h.mode,y),y.ref=Er(h,null,m),y.return=h,y;case Mn:return m=_o(m,h.mode,y),m.return=h,m;case $t:var E=m._init;return c(h,E(m._payload),y)}if(jr(m)||kr(m))return m=wn(m,h.mode,y,null),m.return=h,m;Ai(h,m)}return null}function p(h,m,y,E){var T=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:u(h,m,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ei:return y.key===T?a(h,m,y,E):null;case Mn:return y.key===T?s(h,m,y,E):null;case $t:return T=y._init,p(h,m,T(y._payload),E)}if(jr(y)||kr(y))return T!==null?null:f(h,m,y,E,null);Ai(h,y)}return null}function d(h,m,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(y)||null,u(m,h,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ei:return h=h.get(E.key===null?y:E.key)||null,a(m,h,E,T);case Mn:return h=h.get(E.key===null?y:E.key)||null,s(m,h,E,T);case $t:var C=E._init;return d(h,m,y,C(E._payload),T)}if(jr(E)||kr(E))return h=h.get(y)||null,f(m,h,E,T,null);Ai(m,E)}return null}function g(h,m,y,E){for(var T=null,C=null,_=m,N=m=0,M=null;_!==null&&N<y.length;N++){_.index>N?(M=_,_=null):M=_.sibling;var P=p(h,_,y[N],E);if(P===null){_===null&&(_=M);break}e&&_&&P.alternate===null&&t(h,_),m=l(P,m,N),C===null?T=P:C.sibling=P,C=P,_=M}if(N===y.length)return n(h,_),ue&&hn(h,N),T;if(_===null){for(;N<y.length;N++)_=c(h,y[N],E),_!==null&&(m=l(_,m,N),C===null?T=_:C.sibling=_,C=_);return ue&&hn(h,N),T}for(_=r(h,_);N<y.length;N++)M=d(_,h,N,y[N],E),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?N:M.key),m=l(M,m,N),C===null?T=M:C.sibling=M,C=M);return e&&_.forEach(function(D){return t(h,D)}),ue&&hn(h,N),T}function x(h,m,y,E){var T=kr(y);if(typeof T!="function")throw Error(I(150));if(y=T.call(y),y==null)throw Error(I(151));for(var C=T=null,_=m,N=m=0,M=null,P=y.next();_!==null&&!P.done;N++,P=y.next()){_.index>N?(M=_,_=null):M=_.sibling;var D=p(h,_,P.value,E);if(D===null){_===null&&(_=M);break}e&&_&&D.alternate===null&&t(h,_),m=l(D,m,N),C===null?T=D:C.sibling=D,C=D,_=M}if(P.done)return n(h,_),ue&&hn(h,N),T;if(_===null){for(;!P.done;N++,P=y.next())P=c(h,P.value,E),P!==null&&(m=l(P,m,N),C===null?T=P:C.sibling=P,C=P);return ue&&hn(h,N),T}for(_=r(h,_);!P.done;N++,P=y.next())P=d(_,h,N,P.value,E),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?N:P.key),m=l(P,m,N),C===null?T=P:C.sibling=P,C=P);return e&&_.forEach(function(F){return t(h,F)}),ue&&hn(h,N),T}function S(h,m,y,E){if(typeof y=="object"&&y!==null&&y.type===Bn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ei:e:{for(var T=y.key,C=m;C!==null;){if(C.key===T){if(T=y.type,T===Bn){if(C.tag===7){n(h,C.sibling),m=i(C,y.props.children),m.return=h,h=m;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$t&&cc(T)===C.type){n(h,C.sibling),m=i(C,y.props),m.ref=Er(h,C,y),m.return=h,h=m;break e}n(h,C);break}else t(h,C);C=C.sibling}y.type===Bn?(m=wn(y.props.children,h.mode,E,y.key),m.return=h,h=m):(E=nl(y.type,y.key,y.props,null,h.mode,E),E.ref=Er(h,m,y),E.return=h,h=E)}return o(h);case Mn:e:{for(C=y.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(h,m.sibling),m=i(m,y.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=_o(y,h.mode,E),m.return=h,h=m}return o(h);case $t:return C=y._init,S(h,m,C(y._payload),E)}if(jr(y))return g(h,m,y,E);if(kr(y))return x(h,m,y,E);Ai(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(h,m.sibling),m=i(m,y),m.return=h,h=m):(n(h,m),m=zo(y,h.mode,E),m.return=h,h=m),o(h)):n(h,m)}return S}var or=nd(!0),rd=nd(!1),xl=an(null),kl=null,Jn=null,Ta=null;function Ia(){Ta=Jn=kl=null}function za(e){var t=xl.current;oe(xl),e._currentValue=t}function Pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){kl=e,Ta=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(kl===null)throw Error(I(308));Jn=e,kl.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var vn=null;function _a(e){vn===null?vn=[e]:vn.push(e)}function id(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_a(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dt(e,n)}return i=r.interleaved,i===null?(t.next=t,_a(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dt(e,n)}function Ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}function fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wl(e,t,n,r){var i=e.updateQueue;Vt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==o&&(u===null?f.firstBaseUpdate=s:u.next=s,f.lastBaseUpdate=a))}if(l!==null){var c=i.baseState;o=0,f=s=a=null,u=l;do{var p=u.lane,d=u.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:d,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,x=u;switch(p=t,d=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){c=g.call(d,c,p);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,p=typeof g=="function"?g.call(d,c,p):g,p==null)break e;c=ce({},c,p);break e;case 2:Vt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else d={eventTime:d,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(s=f=d,a=c):f=f.next=d,o|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);bn|=o,e.lanes=o,e.memoizedState=c}}function pc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var yi={},Ct=an(yi),ri=an(yi),ii=an(yi);function xn(e){if(e===yi)throw Error(I(174));return e}function Na(e,t){switch(re(ii,t),re(ri,e),re(Ct,yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:iu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=iu(t,e)}oe(Ct),re(Ct,t)}function ur(){oe(Ct),oe(ri),oe(ii)}function od(e){xn(ii.current);var t=xn(Ct.current),n=iu(t,e.type);t!==n&&(re(ri,e),re(Ct,n))}function La(e){ri.current===e&&(oe(Ct),oe(ri))}var ae=an(0);function Sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Co=[];function Ra(){for(var e=0;e<Co.length;e++)Co[e]._workInProgressVersionPrimary=null;Co.length=0}var Yi=Ft.ReactCurrentDispatcher,Po=Ft.ReactCurrentBatchConfig,En=0,se=null,xe=null,Se=null,Cl=!1,Mr=!1,li=0,zy=0;function Te(){throw Error(I(321))}function Da(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Aa(e,t,n,r,i,l){if(En=l,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yi.current=e===null||e.memoizedState===null?Ly:Ry,e=n(r,i),Mr){l=0;do{if(Mr=!1,li=0,25<=l)throw Error(I(301));l+=1,Se=xe=null,t.updateQueue=null,Yi.current=Dy,e=n(r,i)}while(Mr)}if(Yi.current=Pl,t=xe!==null&&xe.next!==null,En=0,Se=xe=se=null,Cl=!1,t)throw Error(I(300));return e}function Fa(){var e=li!==0;return li=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?se.memoizedState=Se=e:Se=Se.next=e,Se}function ot(){if(xe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Se===null?se.memoizedState:Se.next;if(t!==null)Se=t,xe=e;else{if(e===null)throw Error(I(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Se===null?se.memoizedState=Se=e:Se=Se.next=e}return Se}function oi(e,t){return typeof t=="function"?t(e):t}function Eo(e){var t=ot(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=xe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var f=s.lane;if((En&f)===f)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var c={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=c,o=r):a=a.next=c,se.lanes|=f,bn|=f}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,gt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,se.lanes|=l,bn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bo(e){var t=ot(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);gt(l,t.memoizedState)||(Be=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ud(){}function ad(e,t){var n=se,r=ot(),i=t(),l=!gt(r.memoizedState,i);if(l&&(r.memoizedState=i,Be=!0),r=r.queue,Oa(fd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,ui(9,cd.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(I(349));En&30||sd(n,t,i)}return i}function sd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cd(e,t,n,r){t.value=n,t.getSnapshot=r,pd(t)&&dd(e)}function fd(e,t,n){return n(function(){pd(t)&&dd(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function dd(e){var t=Dt(e,1);t!==null&&ht(t,e,1,-1)}function dc(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oi,lastRenderedState:e},t.queue=e,e=e.dispatch=Ny.bind(null,se,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hd(){return ot().memoizedState}function Xi(e,t,n,r){var i=xt();se.flags|=e,i.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function $l(e,t,n,r){var i=ot();r=r===void 0?null:r;var l=void 0;if(xe!==null){var o=xe.memoizedState;if(l=o.destroy,r!==null&&Da(r,o.deps)){i.memoizedState=ui(t,n,l,r);return}}se.flags|=e,i.memoizedState=ui(1|t,n,l,r)}function hc(e,t){return Xi(8390656,8,e,t)}function Oa(e,t){return $l(2048,8,e,t)}function md(e,t){return $l(4,2,e,t)}function gd(e,t){return $l(4,4,e,t)}function yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vd(e,t,n){return n=n!=null?n.concat([e]):null,$l(4,4,yd.bind(null,t,e),n)}function Ma(){}function xd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wd(e,t,n){return En&21?(gt(n,t)||(n=bp(),se.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function _y(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Po.transition;Po.transition={};try{e(!1),t()}finally{Y=n,Po.transition=r}}function Sd(){return ot().memoizedState}function jy(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cd(e))Pd(t,n);else if(n=id(e,t,n,r),n!==null){var i=De();ht(n,e,r,i),Ed(n,t,r)}}function Ny(e,t,n){var r=tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cd(e))Pd(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,u=l(o,n);if(i.hasEagerState=!0,i.eagerState=u,gt(u,o)){var a=t.interleaved;a===null?(i.next=i,_a(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=id(e,t,i,r),n!==null&&(i=De(),ht(n,e,r,i),Ed(n,t,r))}}function Cd(e){var t=e.alternate;return e===se||t!==null&&t===se}function Pd(e,t){Mr=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ed(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}var Pl={readContext:lt,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},Ly={readContext:lt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:hc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4194308,4,yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xi(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jy.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:dc,useDebugValue:Ma,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=dc(!1),t=e[0];return e=_y.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=xt();if(ue){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Ce===null)throw Error(I(349));En&30||sd(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,hc(fd.bind(null,r,l,e),[e]),r.flags|=2048,ui(9,cd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=xt(),t=Ce.identifierPrefix;if(ue){var n=jt,r=_t;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ry={readContext:lt,useCallback:xd,useContext:lt,useEffect:Oa,useImperativeHandle:vd,useInsertionEffect:md,useLayoutEffect:gd,useMemo:kd,useReducer:Eo,useRef:hd,useState:function(){return Eo(oi)},useDebugValue:Ma,useDeferredValue:function(e){var t=ot();return wd(t,xe.memoizedState,e)},useTransition:function(){var e=Eo(oi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:ad,useId:Sd,unstable_isNewReconciler:!1},Dy={readContext:lt,useCallback:xd,useContext:lt,useEffect:Oa,useImperativeHandle:vd,useInsertionEffect:md,useLayoutEffect:gd,useMemo:kd,useReducer:bo,useRef:hd,useState:function(){return bo(oi)},useDebugValue:Ma,useDeferredValue:function(e){var t=ot();return xe===null?t.memoizedState=e:wd(t,xe.memoizedState,e)},useTransition:function(){var e=bo(oi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:ad,useId:Sd,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Eu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vl={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=tn(e),l=Nt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Zt(e,l,i),t!==null&&(ht(t,e,i,r),Ki(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=tn(e),l=Nt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Zt(e,l,i),t!==null&&(ht(t,e,i,r),Ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=tn(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Zt(e,i,r),t!==null&&(ht(t,e,r,n),Ki(t,e,r))}};function mc(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(i,l):!0}function bd(e,t,n){var r=!1,i=on,l=t.contextType;return typeof l=="object"&&l!==null?l=lt(l):(i=$e(t)?Cn:je.current,r=t.contextTypes,l=(r=r!=null)?ir(e,i):on),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vl.enqueueReplaceState(t,t.state,null)}function bu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ja(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=lt(l):(l=$e(t)?Cn:je.current,i.context=ir(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Eu(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vl.enqueueReplaceState(i,i.state,null),wl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t){try{var n="",r=t;do n+=sg(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function To(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ay=typeof WeakMap=="function"?WeakMap:Map;function Td(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bl||(bl=!0,Fu=r),Tu(e,t)},n}function Id(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Tu(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Tu(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function yc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ay;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ky.bind(null,e,t,n),t.then(e,e))}function vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var Fy=Ft.ReactCurrentOwner,Be=!1;function Le(e,t,n,r){t.child=e===null?rd(t,null,n,r):or(t,e.child,n,r)}function kc(e,t,n,r,i){n=n.render;var l=t.ref;return tr(t,i),r=Aa(e,t,n,r,l,i),n=Fa(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(ue&&n&&Pa(t),t.flags|=1,Le(e,t,r,i),t.child)}function wc(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Ga(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,zd(e,t,l,r,i)):(e=nl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Zr,n(o,r)&&e.ref===t.ref)return At(e,t,i)}return t.flags|=1,e=nn(l,r),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Zr(l,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,At(e,t,i)}return Iu(e,t,n,r,i)}function _d(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Kn,Ge),Ge|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Kn,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,re(Kn,Ge),Ge|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,re(Kn,Ge),Ge|=r;return Le(e,t,i,n),t.child}function jd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Iu(e,t,n,r,i){var l=$e(n)?Cn:je.current;return l=ir(t,l),tr(t,i),n=Aa(e,t,n,r,l,i),r=Fa(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(ue&&r&&Pa(t),t.flags|=1,Le(e,t,n,i),t.child)}function Sc(e,t,n,r,i){if($e(n)){var l=!0;gl(t)}else l=!1;if(tr(t,i),t.stateNode===null)Zi(e,t),bd(t,n,r),bu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,s=n.contextType;typeof s=="object"&&s!==null?s=lt(s):(s=$e(n)?Cn:je.current,s=ir(t,s));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&gc(t,o,r,s),Vt=!1;var p=t.memoizedState;o.state=p,wl(t,r,o,i),a=t.memoizedState,u!==r||p!==a||Ue.current||Vt?(typeof f=="function"&&(Eu(t,n,f,r),a=t.memoizedState),(u=Vt||mc(t,n,u,r,p,a,s))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ld(e,t),u=t.memoizedProps,s=t.type===t.elementType?u:ct(t.type,u),o.props=s,c=t.pendingProps,p=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=lt(a):(a=$e(n)?Cn:je.current,a=ir(t,a));var d=n.getDerivedStateFromProps;(f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==c||p!==a)&&gc(t,o,r,a),Vt=!1,p=t.memoizedState,o.state=p,wl(t,r,o,i);var g=t.memoizedState;u!==c||p!==g||Ue.current||Vt?(typeof d=="function"&&(Eu(t,n,d,r),g=t.memoizedState),(s=Vt||mc(t,n,s,r,p,g,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return zu(e,t,n,r,l,i)}function zu(e,t,n,r,i,l){jd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&uc(t,n,!1),At(e,t,l);r=t.stateNode,Fy.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=or(t,e.child,null,l),t.child=or(t,null,u,l)):Le(e,t,u,l),t.memoizedState=r.state,i&&uc(t,n,!0),t.child}function Nd(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),Na(e,t.containerInfo)}function Cc(e,t,n,r,i){return lr(),ba(i),t.flags|=256,Le(e,t,n,r),t.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function ju(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ld(e,t,n){var r=t.pendingProps,i=ae.current,l=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(ae,i&1),e===null)return Cu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ql(o,r,0,null),e=wn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ju(n),t.memoizedState=_u,e):Ba(t,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Oy(e,t,o,r,u,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=nn(u,l):(l=wn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ju(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=_u,r}return l=e.child,e=l.sibling,r=nn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ba(e,t){return t=Ql({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&ba(r),or(t,e.child,null,n),e=Ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oy(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=To(Error(I(422))),Fi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ql({mode:"visible",children:r.children},i,0,null),l=wn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&or(t,e.child,null,o),t.child.memoizedState=ju(o),t.memoizedState=_u,l);if(!(t.mode&1))return Fi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(I(419)),r=To(l,r,void 0),Fi(e,t,o,r)}if(u=(o&e.childLanes)!==0,Be||u){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Dt(e,i),ht(r,e,i,-1))}return Qa(),r=To(Error(I(421))),Fi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yy.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Je=Xt(i.nextSibling),qe=t,ue=!0,pt=null,e!==null&&(et[tt++]=_t,et[tt++]=jt,et[tt++]=Pn,_t=e.id,jt=e.overflow,Pn=t),t=Ba(t,r.children),t.flags|=4096,t)}function Pc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pu(e.return,t,n)}function Io(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Rd(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Le(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,n,t);else if(e.tag===19)Pc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Sl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Io(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Sl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Io(t,!0,n,null,l);break;case"together":Io(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function My(e,t,n){switch(t.tag){case 3:Nd(t),lr();break;case 5:od(t);break;case 1:$e(t.type)&&gl(t);break;case 4:Na(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(xl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?Ld(e,t,n):(re(ae,ae.current&1),e=At(e,t,n),e!==null?e.sibling:null);re(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,_d(e,t,n)}return At(e,t,n)}var Dd,Nu,Ad,Fd;Dd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nu=function(){};Ad=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(Ct.current);var l=null;switch(n){case"input":i=eu(e,i),r=eu(e,r),l=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),l=[];break;case"textarea":i=ru(e,i),r=ru(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hl)}lu(n,r);var o;n=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(s,n)),n=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&le("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}n&&(l=l||[]).push("style",n);var s=l;(t.updateQueue=s)&&(t.flags|=4)}};Fd=function(e,t,n,r){n!==r&&(t.flags|=4)};function br(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function By(e,t,n){var r=t.pendingProps;switch(Ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return $e(t.type)&&ml(),Ie(t),null;case 3:return r=t.stateNode,ur(),oe(Ue),oe(je),Ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Di(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(Bu(pt),pt=null))),Nu(e,t),Ie(t),null;case 5:La(t);var i=xn(ii.current);if(n=t.type,e!==null&&t.stateNode!=null)Ad(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Ie(t),null}if(e=xn(Ct.current),Di(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[wt]=t,r[ni]=l,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)le(Lr[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Ls(r,l),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},le("invalid",r);break;case"textarea":Ds(r,l),le("invalid",r)}lu(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Ri(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Ri(r.textContent,u,e),i=["children",""+u]):Qr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":bi(r),Rs(r,l,!0);break;case"textarea":bi(r),As(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=hl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[wt]=t,e[ni]=r,Dd(e,t,!1,!1),t.stateNode=e;e:{switch(o=ou(n,r),n){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)le(Lr[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":Ls(e,r),i=eu(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),le("invalid",e);break;case"textarea":Ds(e,r),i=ru(e,r),le("invalid",e);break;default:i=r}lu(n,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?hp(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pp(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Gr(e,a):typeof a=="number"&&Gr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Qr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&le("scroll",e):a!=null&&ca(e,l,a,o))}switch(n){case"input":bi(e),Rs(e,r,!1);break;case"textarea":bi(e),As(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Yn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Fd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=xn(ii.current),xn(Ct.current),Di(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(l=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Ri(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ri(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Ie(t),null;case 13:if(oe(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Je!==null&&t.mode&1&&!(t.flags&128))td(),lr(),t.flags|=98560,l=!1;else if(l=Di(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(I(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(I(317));l[wt]=t}else lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),l=!1}else pt!==null&&(Bu(pt),pt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?we===0&&(we=3):Qa())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return ur(),Nu(e,t),e===null&&ei(t.stateNode.containerInfo),Ie(t),null;case 10:return za(t.type._context),Ie(t),null;case 17:return $e(t.type)&&ml(),Ie(t),null;case 19:if(oe(ae),l=t.memoizedState,l===null)return Ie(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)br(l,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Sl(e),o!==null){for(t.flags|=128,br(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(ae,ae.current&1|2),t.child}e=e.sibling}l.tail!==null&&de()>sr&&(t.flags|=128,r=!0,br(l,!1),t.lanes=4194304)}else{if(!r)if(e=Sl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),br(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ue)return Ie(t),null}else 2*de()-l.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,br(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=de(),t.sibling=null,n=ae.current,re(ae,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return Wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function Uy(e,t){switch(Ea(t),t.tag){case 1:return $e(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),oe(Ue),oe(je),Ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return La(t),null;case 13:if(oe(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ae),null;case 4:return ur(),null;case 10:return za(t.type._context),null;case 22:case 23:return Wa(),null;case 24:return null;default:return null}}var Oi=!1,ze=!1,$y=typeof WeakSet=="function"?WeakSet:Set,A=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Lu(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Ec=!1;function Vy(e,t){if(gu=fl,e=$p(),Ca(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,s=0,f=0,c=e,p=null;t:for(;;){for(var d;c!==n||i!==0&&c.nodeType!==3||(u=o+i),c!==l||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(d=c.firstChild)!==null;)p=c,c=d;for(;;){if(c===e)break t;if(p===n&&++s===i&&(u=o),p===l&&++f===r&&(a=o),(d=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=d}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(yu={focusedElem:e,selectionRange:n},fl=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,S=g.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:ct(t.type,x),S);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(E){fe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return g=Ec,Ec=!1,g}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Lu(t,n,l)}i=i.next}while(i!==r)}}function Hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ru(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[ni],delete t[ku],delete t[Ey],delete t[by])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Md(e){return e.tag===5||e.tag===3||e.tag===4}function bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hl));else if(r!==4&&(e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}function Au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Au(e,t,n),e=e.sibling;e!==null;)Au(e,t,n),e=e.sibling}var Pe=null,ft=!1;function Bt(e,t,n){for(n=n.child;n!==null;)Bd(e,t,n),n=n.sibling}function Bd(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:ze||qn(n,t);case 6:var r=Pe,i=ft;Pe=null,Bt(e,t,n),Pe=r,ft=i,Pe!==null&&(ft?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(ft?(e=Pe,n=n.stateNode,e.nodeType===8?wo(e.parentNode,n):e.nodeType===1&&wo(e,n),Yr(e)):wo(Pe,n.stateNode));break;case 4:r=Pe,i=ft,Pe=n.stateNode.containerInfo,ft=!0,Bt(e,t,n),Pe=r,ft=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Lu(n,t,o),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!ze&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){fe(n,t,u)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Bt(e,t,n),ze=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function Tc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $y),t.forEach(function(r){var i=Xy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:Pe=u.stateNode,ft=!1;break e;case 3:Pe=u.stateNode.containerInfo,ft=!0;break e;case 4:Pe=u.stateNode.containerInfo,ft=!0;break e}u=u.return}if(Pe===null)throw Error(I(160));Bd(l,o,i),Pe=null,ft=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){fe(i,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ud(t,e),t=t.sibling}function Ud(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),vt(e),r&4){try{Br(3,e,e.return),Hl(3,e)}catch(x){fe(e,e.return,x)}try{Br(5,e,e.return)}catch(x){fe(e,e.return,x)}}break;case 1:st(t,e),vt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(st(t,e),vt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{Gr(i,"")}catch(x){fe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&sp(i,l),ou(u,o);var s=ou(u,l);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?hp(i,c):f==="dangerouslySetInnerHTML"?pp(i,c):f==="children"?Gr(i,c):ca(i,f,c,s)}switch(u){case"input":tu(i,l);break;case"textarea":cp(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var d=l.value;d!=null?Yn(i,!!l.multiple,d,!1):p!==!!l.multiple&&(l.defaultValue!=null?Yn(i,!!l.multiple,l.defaultValue,!0):Yn(i,!!l.multiple,l.multiple?[]:"",!1))}i[ni]=l}catch(x){fe(e,e.return,x)}}break;case 6:if(st(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){fe(e,e.return,x)}}break;case 3:if(st(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(x){fe(e,e.return,x)}break;case 4:st(t,e),vt(e);break;case 13:st(t,e),vt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Va=de())),r&4&&Tc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(s=ze)||f,st(t,e),ze=s):st(t,e),vt(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(c=A=f;A!==null;){switch(p=A,d=p.child,p.tag){case 0:case 11:case 14:case 15:Br(4,p,p.return);break;case 1:qn(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){fe(r,n,x)}}break;case 5:qn(p,p.return);break;case 22:if(p.memoizedState!==null){zc(c);continue}}d!==null?(d.return=p,A=d):zc(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=dp("display",o))}catch(x){fe(e,e.return,x)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(x){fe(e,e.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:st(t,e),vt(e),r&4&&Tc(e);break;case 21:break;default:st(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Md(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gr(i,""),r.flags&=-33);var l=bc(e);Au(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=bc(e);Du(e,u,o);break;default:throw Error(I(161))}}catch(a){fe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hy(e,t,n){A=e,$d(e)}function $d(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oi;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||ze;u=Oi;var s=ze;if(Oi=o,(ze=a)&&!s)for(A=i;A!==null;)o=A,a=o.child,o.tag===22&&o.memoizedState!==null?_c(i):a!==null?(a.return=o,A=a):_c(i);for(;l!==null;)A=l,$d(l),l=l.sibling;A=i,Oi=u,ze=s}Ic(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,A=l):Ic(e)}}function Ic(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||Hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&pc(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pc(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Yr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ze||t.flags&512&&Ru(t)}catch(p){fe(t,t.return,p)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function zc(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function _c(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hl(4,t)}catch(a){fe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){fe(t,i,a)}}var l=t.return;try{Ru(t)}catch(a){fe(t,l,a)}break;case 5:var o=t.return;try{Ru(t)}catch(a){fe(t,o,a)}}}catch(a){fe(t,t.return,a)}if(t===e){A=null;break}var u=t.sibling;if(u!==null){u.return=t.return,A=u;break}A=t.return}}var Wy=Math.ceil,El=Ft.ReactCurrentDispatcher,Ua=Ft.ReactCurrentOwner,it=Ft.ReactCurrentBatchConfig,K=0,Ce=null,ge=null,Ee=0,Ge=0,Kn=an(0),we=0,ai=null,bn=0,Wl=0,$a=0,Ur=null,Me=null,Va=0,sr=1/0,It=null,bl=!1,Fu=null,en=null,Mi=!1,Gt=null,Tl=0,$r=0,Ou=null,el=-1,tl=0;function De(){return K&6?de():el!==-1?el:el=de()}function tn(e){return e.mode&1?K&2&&Ee!==0?Ee&-Ee:Iy.transition!==null?(tl===0&&(tl=bp()),tl):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Lp(e.type)),e):1}function ht(e,t,n,r){if(50<$r)throw $r=0,Ou=null,Error(I(185));hi(e,n,r),(!(K&2)||e!==Ce)&&(e===Ce&&(!(K&2)&&(Wl|=n),we===4&&Wt(e,Ee)),Ve(e,r),n===1&&K===0&&!(t.mode&1)&&(sr=de()+500,Ul&&sn()))}function Ve(e,t){var n=e.callbackNode;Ig(e,t);var r=cl(e,e===Ce?Ee:0);if(r===0)n!==null&&Ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ms(n),t===1)e.tag===0?Ty(jc.bind(null,e)):Xp(jc.bind(null,e)),Cy(function(){!(K&6)&&sn()}),n=null;else{switch(Tp(r)){case 1:n=ma;break;case 4:n=Pp;break;case 16:n=sl;break;case 536870912:n=Ep;break;default:n=sl}n=Kd(n,Vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vd(e,t){if(el=-1,tl=0,K&6)throw Error(I(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=cl(e,e===Ce?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Il(e,r);else{t=r;var i=K;K|=2;var l=Wd();(Ce!==e||Ee!==t)&&(It=null,sr=de()+500,kn(e,t));do try{Jy();break}catch(u){Hd(e,u)}while(!0);Ia(),El.current=l,K=i,ge!==null?t=0:(Ce=null,Ee=0,t=we)}if(t!==0){if(t===2&&(i=fu(e),i!==0&&(r=i,t=Mu(e,i))),t===1)throw n=ai,kn(e,0),Wt(e,r),Ve(e,de()),n;if(t===6)Wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qy(i)&&(t=Il(e,r),t===2&&(l=fu(e),l!==0&&(r=l,t=Mu(e,l))),t===1))throw n=ai,kn(e,0),Wt(e,r),Ve(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:mn(e,Me,It);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Va+500-de(),10<t)){if(cl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xu(mn.bind(null,e,Me,It),t);break}mn(e,Me,It);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-dt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wy(r/1960))-r,10<r){e.timeoutHandle=xu(mn.bind(null,e,Me,It),r);break}mn(e,Me,It);break;case 5:mn(e,Me,It);break;default:throw Error(I(329))}}}return Ve(e,de()),e.callbackNode===n?Vd.bind(null,e):null}function Mu(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Il(e,t),e!==2&&(t=Me,Me=n,t!==null&&Bu(t)),e}function Bu(e){Me===null?Me=e:Me.push.apply(Me,e)}function Qy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!gt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~$a,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if(K&6)throw Error(I(327));nr();var t=cl(e,0);if(!(t&1))return Ve(e,de()),null;var n=Il(e,t);if(e.tag!==0&&n===2){var r=fu(e);r!==0&&(t=r,n=Mu(e,r))}if(n===1)throw n=ai,kn(e,0),Wt(e,t),Ve(e,de()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Me,It),Ve(e,de()),null}function Ha(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(sr=de()+500,Ul&&sn())}}function Tn(e){Gt!==null&&Gt.tag===0&&!(K&6)&&nr();var t=K;K|=1;var n=it.transition,r=Y;try{if(it.transition=null,Y=1,e)return e()}finally{Y=r,it.transition=n,K=t,!(K&6)&&sn()}}function Wa(){Ge=Kn.current,oe(Kn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sy(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:ur(),oe(Ue),oe(je),Ra();break;case 5:La(r);break;case 4:ur();break;case 13:oe(ae);break;case 19:oe(ae);break;case 10:za(r.type._context);break;case 22:case 23:Wa()}n=n.return}if(Ce=e,ge=e=nn(e.current,null),Ee=Ge=t,we=0,ai=null,$a=Wl=bn=0,Me=Ur=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}vn=null}return e}function Hd(e,t){do{var n=ge;try{if(Ia(),Yi.current=Pl,Cl){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(En=0,Se=xe=se=null,Mr=!1,li=0,Ua.current=null,n===null||n.return===null){we=1,ai=t,ge=null;break}e:{var l=e,o=n.return,u=n,a=t;if(t=Ee,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,f=u,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var d=vc(o);if(d!==null){d.flags&=-257,xc(d,o,u,l,t),d.mode&1&&yc(l,s,t),t=d,a=s;var g=t.updateQueue;if(g===null){var x=new Set;x.add(a),t.updateQueue=x}else g.add(a);break e}else{if(!(t&1)){yc(l,s,t),Qa();break e}a=Error(I(426))}}else if(ue&&u.mode&1){var S=vc(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),xc(S,o,u,l,t),ba(ar(a,u));break e}}l=a=ar(a,u),we!==4&&(we=2),Ur===null?Ur=[l]:Ur.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=Td(l,a,t);fc(l,h);break e;case 1:u=a;var m=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(en===null||!en.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var E=Id(l,u,t);fc(l,E);break e}}l=l.return}while(l!==null)}Gd(n)}catch(T){t=T,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Wd(){var e=El.current;return El.current=Pl,e===null?Pl:e}function Qa(){(we===0||we===3||we===2)&&(we=4),Ce===null||!(bn&268435455)&&!(Wl&268435455)||Wt(Ce,Ee)}function Il(e,t){var n=K;K|=2;var r=Wd();(Ce!==e||Ee!==t)&&(It=null,kn(e,t));do try{Gy();break}catch(i){Hd(e,i)}while(!0);if(Ia(),K=n,El.current=r,ge!==null)throw Error(I(261));return Ce=null,Ee=0,we}function Gy(){for(;ge!==null;)Qd(ge)}function Jy(){for(;ge!==null&&!xg();)Qd(ge)}function Qd(e){var t=qd(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?Gd(e):ge=t,Ua.current=null}function Gd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uy(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}else if(n=By(n,t,Ge),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function mn(e,t,n){var r=Y,i=it.transition;try{it.transition=null,Y=1,qy(e,t,n,r)}finally{it.transition=i,Y=r}return null}function qy(e,t,n,r){do nr();while(Gt!==null);if(K&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(zg(e,l),e===Ce&&(ge=Ce=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mi||(Mi=!0,Kd(sl,function(){return nr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=it.transition,it.transition=null;var o=Y;Y=1;var u=K;K|=4,Ua.current=null,Vy(e,n),Ud(n,e),my(yu),fl=!!gu,yu=gu=null,e.current=n,Hy(n),kg(),K=u,Y=o,it.transition=l}else e.current=n;if(Mi&&(Mi=!1,Gt=e,Tl=i),l=e.pendingLanes,l===0&&(en=null),Cg(n.stateNode),Ve(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bl)throw bl=!1,e=Fu,Fu=null,e;return Tl&1&&e.tag!==0&&nr(),l=e.pendingLanes,l&1?e===Ou?$r++:($r=0,Ou=e):$r=0,sn(),null}function nr(){if(Gt!==null){var e=Tp(Tl),t=it.transition,n=Y;try{if(it.transition=null,Y=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Tl=0,K&6)throw Error(I(331));var i=K;for(K|=4,A=e.current;A!==null;){var l=A,o=l.child;if(A.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(A=s;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:Br(8,f,l)}var c=f.child;if(c!==null)c.return=f,A=c;else for(;A!==null;){f=A;var p=f.sibling,d=f.return;if(Od(f),f===s){A=null;break}if(p!==null){p.return=d,A=p;break}A=d}}}var g=l.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}A=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,A=o;else e:for(;A!==null;){if(l=A,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Br(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,A=h;break e}A=l.return}}var m=e.current;for(A=m;A!==null;){o=A;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,A=y;else e:for(o=m;A!==null;){if(u=A,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Hl(9,u)}}catch(T){fe(u,u.return,T)}if(u===o){A=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,A=E;break e}A=u.return}}if(K=i,sn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{Y=n,it.transition=t}}return!1}function Nc(e,t,n){t=ar(n,t),t=Td(e,t,1),e=Zt(e,t,1),t=De(),e!==null&&(hi(e,1,t),Ve(e,t))}function fe(e,t,n){if(e.tag===3)Nc(e,e,n);else for(;t!==null;){if(t.tag===3){Nc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=ar(n,e),e=Id(t,e,1),t=Zt(t,e,1),e=De(),t!==null&&(hi(t,1,e),Ve(t,e));break}}t=t.return}}function Ky(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Ee&n)===n&&(we===4||we===3&&(Ee&130023424)===Ee&&500>de()-Va?kn(e,0):$a|=n),Ve(e,t)}function Jd(e,t){t===0&&(e.mode&1?(t=zi,zi<<=1,!(zi&130023424)&&(zi=4194304)):t=1);var n=De();e=Dt(e,t),e!==null&&(hi(e,t,n),Ve(e,n))}function Yy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jd(e,n)}function Xy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Jd(e,n)}var qd;qd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,My(e,t,n);Be=!!(e.flags&131072)}else Be=!1,ue&&t.flags&1048576&&Zp(t,vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zi(e,t),e=t.pendingProps;var i=ir(t,je.current);tr(t,n),i=Aa(null,t,r,e,i,n);var l=Fa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(l=!0,gl(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ja(t),i.updater=Vl,t.stateNode=i,i._reactInternals=t,bu(t,r,e,n),t=zu(null,t,r,!0,l,n)):(t.tag=0,ue&&l&&Pa(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=e1(r),e=ct(r,e),i){case 0:t=Iu(null,t,r,e,n);break e;case 1:t=Sc(null,t,r,e,n);break e;case 11:t=kc(null,t,r,e,n);break e;case 14:t=wc(null,t,r,ct(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Iu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Sc(e,t,r,i,n);case 3:e:{if(Nd(t),e===null)throw Error(I(387));r=t.pendingProps,l=t.memoizedState,i=l.element,ld(e,t),wl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=ar(Error(I(423)),t),t=Cc(e,t,r,n,i);break e}else if(r!==i){i=ar(Error(I(424)),t),t=Cc(e,t,r,n,i);break e}else for(Je=Xt(t.stateNode.containerInfo.firstChild),qe=t,ue=!0,pt=null,n=rd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lr(),r===i){t=At(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return od(t),e===null&&Cu(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,vu(r,i)?o=null:l!==null&&vu(r,l)&&(t.flags|=32),jd(e,t),Le(e,t,o,n),t.child;case 6:return e===null&&Cu(t),null;case 13:return Ld(e,t,n);case 4:return Na(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),kc(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,re(xl,r._currentValue),r._currentValue=o,l!==null)if(gt(l.value,o)){if(l.children===i.children&&!Ue.current){t=At(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Nt(-1,n&-n),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?a.next=a:(a.next=f.next,f.next=a),s.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Pu(l.return,n,t),u.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(I(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Pu(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,tr(t,n),i=lt(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),wc(e,t,r,i,n);case 15:return zd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Zi(e,t),t.tag=1,$e(r)?(e=!0,gl(t)):e=!1,tr(t,n),bd(t,r,i),bu(t,r,i,n),zu(null,t,r,!0,e,n);case 19:return Rd(e,t,n);case 22:return _d(e,t,n)}throw Error(I(156,t.tag))};function Kd(e,t){return Cp(e,t)}function Zy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new Zy(e,t,n,r)}function Ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function e1(e){if(typeof e=="function")return Ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pa)return 11;if(e===da)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nl(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Ga(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Bn:return wn(n.children,i,l,t);case fa:o=8,i|=8;break;case Ko:return e=rt(12,n,t,i|2),e.elementType=Ko,e.lanes=l,e;case Yo:return e=rt(13,n,t,i),e.elementType=Yo,e.lanes=l,e;case Xo:return e=rt(19,n,t,i),e.elementType=Xo,e.lanes=l,e;case op:return Ql(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ip:o=10;break e;case lp:o=9;break e;case pa:o=11;break e;case da:o=14;break e;case $t:o=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=rt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function wn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=rt(22,e,r,t),e.elementType=op,e.lanes=n,e.stateNode={isHidden:!1},e}function zo(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function _o(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function t1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=so(0),this.expirationTimes=so(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ja(e,t,n,r,i,l,o,u,a){return e=new t1(e,t,n,u,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=rt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ja(l),e}function n1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yd(e){if(!e)return on;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if($e(n))return Yp(e,n,t)}return t}function Xd(e,t,n,r,i,l,o,u,a){return e=Ja(n,r,!0,e,i,l,o,u,a),e.context=Yd(null),n=e.current,r=De(),i=tn(n),l=Nt(r,i),l.callback=t??null,Zt(n,l,i),e.current.lanes=i,hi(e,i,r),Ve(e,r),e}function Gl(e,t,n,r){var i=t.current,l=De(),o=tn(i);return n=Yd(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(i,t,o),e!==null&&(ht(e,i,o,l),Ki(e,i,o)),o}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qa(e,t){Lc(e,t),(e=e.alternate)&&Lc(e,t)}function r1(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ka(e){this._internalRoot=e}Jl.prototype.render=Ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Gl(e,t,null,null)};Jl.prototype.unmount=Ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){Gl(null,e,null,null)}),t[Rt]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=_p();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&Np(e)}};function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rc(){}function i1(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=zl(o);l.call(s)}}var o=Xd(t,r,e,0,null,!1,!1,"",Rc);return e._reactRootContainer=o,e[Rt]=o.current,ei(e.nodeType===8?e.parentNode:e),Tn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=zl(a);u.call(s)}}var a=Ja(e,0,!1,null,null,!1,!1,"",Rc);return e._reactRootContainer=a,e[Rt]=a.current,ei(e.nodeType===8?e.parentNode:e),Tn(function(){Gl(t,a,n,r)}),a}function Kl(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=zl(o);u.call(a)}}Gl(t,o,e,i)}else o=i1(n,t,e,i,r);return zl(o)}Ip=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(ga(t,n|1),Ve(t,de()),!(K&6)&&(sr=de()+500,sn()))}break;case 13:Tn(function(){var r=Dt(e,1);if(r!==null){var i=De();ht(r,e,1,i)}}),qa(e,1)}};ya=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=De();ht(t,e,134217728,n)}qa(e,134217728)}};zp=function(e){if(e.tag===13){var t=tn(e),n=Dt(e,t);if(n!==null){var r=De();ht(n,e,t,r)}qa(e,t)}};_p=function(){return Y};jp=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};au=function(e,t,n){switch(t){case"input":if(tu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bl(r);if(!i)throw Error(I(90));ap(r),tu(r,i)}}}break;case"textarea":cp(e,n);break;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}};yp=Ha;vp=Tn;var l1={usingClientEntryPoint:!1,Events:[gi,Hn,Bl,mp,gp,Ha]},Tr={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o1={bundleType:Tr.bundleType,version:Tr.version,rendererPackageName:Tr.rendererPackageName,rendererConfig:Tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wp(e),e===null?null:e.stateNode},findFiberByHostInstance:Tr.findFiberByHostInstance||r1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{Al=Bi.inject(o1),St=Bi}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l1;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ya(t))throw Error(I(200));return n1(e,t,null,n)};Xe.createRoot=function(e,t){if(!Ya(e))throw Error(I(299));var n=!1,r="",i=Zd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ja(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,ei(e.nodeType===8?e.parentNode:e),new Ka(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=wp(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Tn(e)};Xe.hydrate=function(e,t,n){if(!ql(t))throw Error(I(200));return Kl(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!Ya(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Zd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Xd(t,null,e,1,n??null,i,!1,l,o),e[Rt]=t.current,ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Jl(t)};Xe.render=function(e,t,n){if(!ql(t))throw Error(I(200));return Kl(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!ql(e))throw Error(I(40));return e._reactRootContainer?(Tn(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Ha;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ql(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Kl(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function eh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eh)}catch(e){console.error(e)}}eh(),ep.exports=Xe;var u1=ep.exports,Dc=u1;Jo.createRoot=Dc.createRoot,Jo.hydrateRoot=Dc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(null,arguments)}var Jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Jt||(Jt={}));const Ac="popstate";function a1(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:u}=r.location;return Uu("",{pathname:l,search:o,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_l(i)}return c1(t,n,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function s1(){return Math.random().toString(36).substr(2,8)}function Fc(e,t){return{usr:e.state,key:e.key,idx:t}}function Uu(e,t,n,r){return n===void 0&&(n=null),si({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hr(t):t,{state:n,key:t&&t.key||r||s1()})}function _l(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function c1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,u=Jt.Pop,a=null,s=f();s==null&&(s=0,o.replaceState(si({},o.state,{idx:s}),""));function f(){return(o.state||{idx:null}).idx}function c(){u=Jt.Pop;let S=f(),h=S==null?null:S-s;s=S,a&&a({action:u,location:x.location,delta:h})}function p(S,h){u=Jt.Push;let m=Uu(x.location,S,h);s=f()+1;let y=Fc(m,s),E=x.createHref(m);try{o.pushState(y,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}l&&a&&a({action:u,location:x.location,delta:1})}function d(S,h){u=Jt.Replace;let m=Uu(x.location,S,h);s=f();let y=Fc(m,s),E=x.createHref(m);o.replaceState(y,"",E),l&&a&&a({action:u,location:x.location,delta:0})}function g(S){let h=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:_l(S);return m=m.replace(/ $/,"%20"),ye(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let x={get action(){return u},get location(){return e(i,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Ac,c),a=S,()=>{i.removeEventListener(Ac,c),a=null}},createHref(S){return t(i,S)},createURL:g,encodeLocation(S){let h=g(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:d,go(S){return o.go(S)}};return x}var Oc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Oc||(Oc={}));function f1(e,t,n){return n===void 0&&(n="/"),p1(e,t,n)}function p1(e,t,n,r){let i=typeof t=="string"?hr(t):t,l=Za(i.pathname||"/",n);if(l==null)return null;let o=th(e);d1(o);let u=null,a=E1(l);for(let s=0;u==null&&s<o.length;++s)u=S1(o[s],a);return u}function th(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,u)=>{let a={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(ye(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let s=rn([r,a.relativePath]),f=n.concat(a);l.children&&l.children.length>0&&(ye(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),th(l.children,t,f,s)),!(l.path==null&&!l.index)&&t.push({path:s,score:k1(s,l.index),routesMeta:f})};return e.forEach((l,o)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))i(l,o);else for(let a of nh(l.path))i(l,o,a)}),t}function nh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=nh(r.join("/")),u=[];return u.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&u.push(...o),u.map(a=>e.startsWith("/")&&a===""?"/":a)}function d1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:w1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const h1=/^:[\w-]+$/,m1=3,g1=2,y1=1,v1=10,x1=-2,Mc=e=>e==="*";function k1(e,t){let n=e.split("/"),r=n.length;return n.some(Mc)&&(r+=x1),t&&(r+=g1),n.filter(i=>!Mc(i)).reduce((i,l)=>i+(h1.test(l)?m1:l===""?y1:v1),r)}function w1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function S1(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let u=0;u<r.length;++u){let a=r[u],s=u===r.length-1,f=l==="/"?t:t.slice(l.length)||"/",c=C1({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},f),p=a.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:rn([l,c.pathname]),pathnameBase:_1(rn([l,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(l=rn([l,c.pathnameBase]))}return o}function C1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=P1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((s,f,c)=>{let{paramName:p,isOptional:d}=f;if(p==="*"){let x=u[c]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const g=u[c];return d&&!g?s[p]=void 0:s[p]=(g||"").replace(/%2F/g,"/"),s},{}),pathname:l,pathnameBase:o,pattern:e}}function P1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,a)=>(r.push({paramName:u,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function E1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Za(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const b1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,T1=e=>b1.test(e);function I1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?hr(e):e,l;if(n)if(T1(n))l=n;else{if(n.includes("//")){let o=n;n=lh(n),Xa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=Bc(n.substring(1),"/"):l=Bc(n,t)}else l=t;return{pathname:l,search:j1(r),hash:N1(i)}}function Bc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rh(e,t){let n=z1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ih(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=hr(e):(i=si({},e),ye(!i.pathname||!i.pathname.includes("?"),jo("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),jo("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),jo("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,u;if(o==null)u=n;else{let c=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),c-=1;i.pathname=p.join("/")}u=c>=0?t[c]:"/"}let a=I1(i,u),s=o&&o!=="/"&&o.endsWith("/"),f=(l||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(s||f)&&(a.pathname+="/"),a}const lh=e=>e.replace(/\/\/+/g,"/"),rn=e=>lh(e.join("/")),_1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),j1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,N1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function L1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const oh=["post","put","patch","delete"];new Set(oh);const R1=["get",...oh];new Set(R1);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ci.apply(null,arguments)}const es=j.createContext(null),D1=j.createContext(null),jn=j.createContext(null),Yl=j.createContext(null),cn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),uh=j.createContext(null);function A1(e,t){let{relative:n}=t===void 0?{}:t;vi()||ye(!1);let{basename:r,navigator:i}=j.useContext(jn),{hash:l,pathname:o,search:u}=ch(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:rn([r,o])),i.createHref({pathname:a,search:u,hash:l})}function vi(){return j.useContext(Yl)!=null}function xi(){return vi()||ye(!1),j.useContext(Yl).location}function ah(e){j.useContext(jn).static||j.useLayoutEffect(e)}function ts(){let{isDataRoute:e}=j.useContext(cn);return e?q1():F1()}function F1(){vi()||ye(!1);let e=j.useContext(es),{basename:t,future:n,navigator:r}=j.useContext(jn),{matches:i}=j.useContext(cn),{pathname:l}=xi(),o=JSON.stringify(rh(i,n.v7_relativeSplatPath)),u=j.useRef(!1);return ah(()=>{u.current=!0}),j.useCallback(function(s,f){if(f===void 0&&(f={}),!u.current)return;if(typeof s=="number"){r.go(s);return}let c=ih(s,JSON.parse(o),l,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:rn([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,o,l,e])}function sh(){let{matches:e}=j.useContext(cn),t=e[e.length-1];return t?t.params:{}}function ch(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(jn),{matches:i}=j.useContext(cn),{pathname:l}=xi(),o=JSON.stringify(rh(i,r.v7_relativeSplatPath));return j.useMemo(()=>ih(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function O1(e,t){return M1(e,t)}function M1(e,t,n,r){vi()||ye(!1);let{navigator:i}=j.useContext(jn),{matches:l}=j.useContext(cn),o=l[l.length-1],u=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=xi(),f;if(t){var c;let S=typeof t=="string"?hr(t):t;a==="/"||(c=S.pathname)!=null&&c.startsWith(a)||ye(!1),f=S}else f=s;let p=f.pathname||"/",d=p;if(a!=="/"){let S=a.replace(/^\//,"").split("/");d="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let g=f1(e,{pathname:d}),x=H1(g&&g.map(S=>Object.assign({},S,{params:Object.assign({},u,S.params),pathname:rn([a,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:rn([a,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,n,r);return t&&x?j.createElement(Yl.Provider,{value:{location:ci({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Jt.Pop}},x):x}function B1(){let e=J1(),t=L1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const U1=j.createElement(B1,null);class $1 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(cn.Provider,{value:this.props.routeContext},j.createElement(uh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function V1(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(es);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(cn.Provider,{value:t},r)}function H1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,u=(i=n)==null?void 0:i.errors;if(u!=null){let f=o.findIndex(c=>c.route.id&&(u==null?void 0:u[c.route.id])!==void 0);f>=0||ye(!1),o=o.slice(0,Math.min(o.length,f+1))}let a=!1,s=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let c=o[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(s=f),c.route.id){let{loaderData:p,errors:d}=n,g=c.route.loader&&p[c.route.id]===void 0&&(!d||d[c.route.id]===void 0);if(c.route.lazy||g){a=!0,s>=0?o=o.slice(0,s+1):o=[o[0]];break}}}return o.reduceRight((f,c,p)=>{let d,g=!1,x=null,S=null;n&&(d=u&&c.route.id?u[c.route.id]:void 0,x=c.route.errorElement||U1,a&&(s<0&&p===0?(K1("route-fallback"),g=!0,S=null):s===p&&(g=!0,S=c.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,p+1)),m=()=>{let y;return d?y=x:g?y=S:c.route.Component?y=j.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=f,j.createElement(V1,{match:c,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?j.createElement($1,{location:n.location,revalidation:n.revalidation,component:x,error:d,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var fh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fh||{}),ph=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ph||{});function W1(e){let t=j.useContext(es);return t||ye(!1),t}function Q1(e){let t=j.useContext(D1);return t||ye(!1),t}function G1(e){let t=j.useContext(cn);return t||ye(!1),t}function dh(e){let t=G1(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function J1(){var e;let t=j.useContext(uh),n=Q1(),r=dh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function q1(){let{router:e}=W1(fh.UseNavigateStable),t=dh(ph.UseNavigateStable),n=j.useRef(!1);return ah(()=>{n.current=!0}),j.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ci({fromRouteId:t},l)))},[e,t])}const Uc={};function K1(e,t,n){Uc[e]||(Uc[e]=!0)}function Y1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Tt(e){ye(!1)}function X1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Jt.Pop,navigator:l,static:o=!1,future:u}=e;vi()&&ye(!1);let a=t.replace(/^\/*/,"/"),s=j.useMemo(()=>({basename:a,navigator:l,static:o,future:ci({v7_relativeSplatPath:!1},u)}),[a,u,l,o]);typeof r=="string"&&(r=hr(r));let{pathname:f="/",search:c="",hash:p="",state:d=null,key:g="default"}=r,x=j.useMemo(()=>{let S=Za(f,a);return S==null?null:{location:{pathname:S,search:c,hash:p,state:d,key:g},navigationType:i}},[a,f,c,p,d,g,i]);return x==null?null:j.createElement(jn.Provider,{value:s},j.createElement(Yl.Provider,{children:n,value:x}))}function Z1(e){let{children:t,location:n}=e;return O1($u(t),n)}new Promise(()=>{});function $u(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let l=[...t,i];if(r.type===j.Fragment){n.push.apply(n,$u(r.props.children,l));return}r.type!==Tt&&ye(!1),!r.props.index||!r.props.children||ye(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$u(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vu(){return Vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vu.apply(null,arguments)}function e0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function t0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n0(e,t){return e.button===0&&(!t||t==="_self")&&!t0(e)}const r0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],i0="6";try{window.__reactRouterVersion=i0}catch{}const l0="startTransition",$c=Km[l0];function o0(e){let{basename:t,children:n,future:r,window:i}=e,l=j.useRef();l.current==null&&(l.current=a1({window:i,v5Compat:!0}));let o=l.current,[u,a]=j.useState({action:o.action,location:o.location}),{v7_startTransition:s}=r||{},f=j.useCallback(c=>{s&&$c?$c(()=>a(c)):a(c)},[a,s]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.useEffect(()=>Y1(r),[r]),j.createElement(X1,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:o,future:r})}const u0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",a0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ke=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:u,target:a,to:s,preventScrollReset:f,viewTransition:c}=t,p=e0(t,r0),{basename:d}=j.useContext(jn),g,x=!1;if(typeof s=="string"&&a0.test(s)&&(g=s,u0))try{let y=new URL(window.location.href),E=s.startsWith("//")?new URL(y.protocol+s):new URL(s),T=Za(E.pathname,d);E.origin===y.origin&&T!=null?s=T+E.search+E.hash:x=!0}catch{}let S=A1(s,{relative:i}),h=s0(s,{replace:o,state:u,target:a,preventScrollReset:f,relative:i,viewTransition:c});function m(y){r&&r(y),y.defaultPrevented||h(y)}return j.createElement("a",Vu({},p,{href:g||S,onClick:x||l?r:m,ref:n,target:a}))});var Vc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Vc||(Vc={}));var Hc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hc||(Hc={}));function s0(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:u}=t===void 0?{}:t,a=ts(),s=xi(),f=ch(e,{relative:o});return j.useCallback(c=>{if(n0(c,n)){c.preventDefault();let p=r!==void 0?r:_l(s)===_l(f);a(e,{replace:p,state:i,preventScrollReset:l,relative:o,viewTransition:u})}},[s,a,f,r,i,n,e,l,o,u])}const hh="blog_users",mh="blog_articles";function gh(){try{return JSON.parse(localStorage.getItem(hh)||"[]")}catch{return[]}}function c0(e){localStorage.setItem(hh,JSON.stringify(e))}function f0(){try{return JSON.parse(localStorage.getItem(mh)||"[]")}catch{return[]}}function Hu(e){localStorage.setItem(mh,JSON.stringify(e))}const yh=j.createContext(null),vh=[{slug:"sorting-algorithms",title:"排序算法详解",date:"2026-06-13",tags:["算法","排序","快排","归并","堆排序"],summary:"深入讲解常用的排序算法：快速排序、归并排序、堆排序的原理、实现和时间复杂度分析。",status:"approved",authorId:"zhou",authorName:"zhou"},{slug:"search-algorithms",title:"查找算法详解",date:"2026-06-13",tags:["算法","查找","二分","哈希"],summary:"深入讲解常用的查找算法：顺序查找、二分查找、哈希查找的原理、实现和应用场景。",status:"approved",authorId:"zhou",authorName:"zhou"},{slug:"graph-theory-basics",title:"图论基础",date:"2026-06-13",tags:["算法","图论","DFS","BFS","最短路"],summary:"图论是算法竞赛的核心内容，本文讲解图的基本概念、存储方式和基础算法。",status:"approved",authorId:"zhou",authorName:"zhou"},{slug:"problem-bank-luogu-nowcoder",title:"大题库：洛谷+牛客题目导航",date:"2026-06-13",tags:["题库","洛谷","牛客","题目","练习"],summary:"汇总洛谷和牛客上的优质题目，按知识点分类，方便系统性刷题和查漏补缺。",status:"approved",authorId:"zhou",authorName:"zhou"},{slug:"csp-guide",title:"CSP 考级完全指南",date:"2026-06-13",tags:["CSP","考级","信息学奥赛","C++"],summary:"CSP-J/S 完全指南，包含考试介绍、知识点、备考方法和历年真题解析。",status:"approved",authorId:"zhou",authorName:"zhou"},{slug:"gesp-guide",title:"GESP 考级完全指南",date:"2026-06-13",tags:["GESP","考级","编程","C++"],summary:"GESP 青少年软件编程等级考试完全指南，包含考试介绍、各级别知识点、备考方法。",status:"approved",authorId:"zhou",authorName:"zhou"},{slug:"algorithm-advanced-greedy-dp-dfs",title:"算法进阶：贪心、DP、DFS",date:"2026-06-13",tags:["算法","贪心","动态规划","DFS","搜索"],summary:"深入讲解三种重要的算法思想：贪心算法、动态规划和深度优先搜索。",status:"approved",authorId:"zhou",authorName:"zhou"},{slug:"algorithm-basics-branch-loop",title:"算法基础：分支与循环",date:"2026-06-13",tags:["算法","基础","分支","循环","C++"],summary:"掌握编程最基础的两个概念：分支结构和循环结构，这是所有算法的基石。",status:"approved",authorId:"zhou",authorName:"zhou"},{slug:"getting-started-with-react",title:"React 入门指南",date:"2024-01-15",tags:["React","前端"],summary:"React 是一个用于构建用户界面的 JavaScript 库...",status:"approved",authorId:"system",authorName:"系统"},{slug:"understanding-typescript",title:"TypeScript 完全指南",date:"2024-02-20",tags:["TypeScript","前端"],summary:"TypeScript 是 JavaScript 的超集...",status:"approved",authorId:"system",authorName:"系统"},{slug:"git-essential-commands",title:"Git 常用命令速查",date:"2024-03-10",tags:["Git","工具"],summary:"Git 是目前最流行的版本控制系统...",status:"approved",authorId:"system",authorName:"系统"}],p0=gh();p0.length===0&&Hu(vh);function d0(e){const t=new Set(e.map(r=>r.slug));return[...vh.filter(r=>!t.has(r.slug)),...e]}function h0({children:e}){const[t,n]=j.useState(null),[r,i]=j.useState(gh),[l,o]=j.useState(()=>d0(f0())),u=(t==null?void 0:t.role)==="admin",a=j.useCallback((d,g)=>{const x=r.find(S=>S.username===d&&S.password===g);return x?(n(x),!0):!1},[r]),s=j.useCallback((d,g)=>{if(r.find(m=>m.username===d))return!1;const x=r.length===0?"admin":"user",S={id:Date.now().toString(),username:d,password:g,role:x,createdAt:new Date().toISOString().split("T")[0]},h=[...r,S];return i(h),c0(h),n(S),!0},[r]),f=j.useCallback(()=>n(null),[]),c=j.useCallback((d,g,x)=>{o(S=>{const h=S.map(m=>m.slug===d?{...m,status:g,reviewedBy:t==null?void 0:t.username,reviewedAt:new Date().toISOString(),reviewNote:x||""}:m);return Hu(h),h})},[t]),p=j.useCallback(d=>{o(g=>{const x=[...g,d];return Hu(x),x})},[]);return k.jsx(yh.Provider,{value:{user:t,users:r,articles:l,login:a,register:s,logout:f,isAdmin:u,updateArticleStatus:c,addArticle:p},children:e})}function mr(){return j.useContext(yh)}function m0(){const{user:e,isAdmin:t,articles:n}=mr(),r=t?n:n.filter(i=>i.status==="approved");return k.jsxs("div",{className:"container",children:[k.jsxs("section",{style:{marginBottom:"2rem"},children:[k.jsx("h1",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:"最新文章"}),k.jsx("p",{style:{color:"var(--text-secondary)"},children:"分享编程知识、开发经验和学习心得"}),!e&&k.jsxs("p",{style:{marginTop:"0.8rem",fontSize:"0.9rem",color:"var(--primary)"},children:["💡 ",k.jsx(ke,{to:"/login",children:"登录"})," 后可以发布文章，第一个注册的用户将成为管理员！"]})]}),r.length===0&&k.jsx("p",{style:{color:"var(--text-secondary)"},children:"暂无文章，快去发布一篇吧！"}),r.map(i=>k.jsxs("article",{className:"post-card",children:[k.jsxs("h2",{children:[k.jsx(ke,{to:`/post/${i.slug}`,children:i.title}),i.status!=="approved"&&k.jsx("span",{style:{fontSize:"0.7rem",marginLeft:"0.5rem",padding:"0.1rem 0.4rem",borderRadius:"4px",background:i.status==="pending"?"#fef3c7":"#fee2e2",color:i.status==="pending"?"#92400e":"#991b1b"},children:i.status==="pending"?"待审核":"已拒绝"})]}),k.jsxs("div",{className:"post-meta",children:[k.jsx("span",{children:i.date}),k.jsx("span",{children:i.summary})]}),k.jsx("div",{className:"post-tags",children:i.tags.map(l=>k.jsx(ke,{to:`/tags/${l}`,className:"tag",children:l},l))})]},i.slug))]})}function g0(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const y0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,v0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,x0={};function Wc(e,t){return(x0.jsx?v0:y0).test(e)}const k0=/[ \t\n\f\r]/g;function w0(e){return typeof e=="object"?e.type==="text"?Qc(e.value):!1:Qc(e)}function Qc(e){return e.replace(k0,"")===""}class ki{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ki.prototype.normal={};ki.prototype.property={};ki.prototype.space=void 0;function xh(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ki(n,r,t)}function Wu(e){return e.toLowerCase()}class He{constructor(t,n){this.attribute=n,this.property=t}}He.prototype.attribute="";He.prototype.booleanish=!1;He.prototype.boolean=!1;He.prototype.commaOrSpaceSeparated=!1;He.prototype.commaSeparated=!1;He.prototype.defined=!1;He.prototype.mustUseProperty=!1;He.prototype.number=!1;He.prototype.overloadedBoolean=!1;He.prototype.property="";He.prototype.spaceSeparated=!1;He.prototype.space=void 0;let S0=0;const U=Nn(),me=Nn(),Qu=Nn(),z=Nn(),ee=Nn(),Sn=Nn(),Qe=Nn();function Nn(){return 2**++S0}const Gu=Object.freeze(Object.defineProperty({__proto__:null,boolean:U,booleanish:me,commaOrSpaceSeparated:Qe,commaSeparated:Sn,number:z,overloadedBoolean:Qu,spaceSeparated:ee},Symbol.toStringTag,{value:"Module"})),No=Object.keys(Gu);class ns extends He{constructor(t,n,r,i){let l=-1;if(super(t,n),Gc(this,"space",i),typeof r=="number")for(;++l<No.length;){const o=No[l];Gc(this,No[l],(r&Gu[o])===Gu[o])}}}ns.prototype.defined=!0;function Gc(e,t,n){n&&(e[t]=n)}function gr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const l=new ns(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),t[r]=l,n[Wu(r)]=r,n[Wu(l.attribute)]=r}return new ki(t,n,e.space)}const kh=gr({properties:{ariaActiveDescendant:null,ariaAtomic:me,ariaAutoComplete:null,ariaBusy:me,ariaChecked:me,ariaColCount:z,ariaColIndex:z,ariaColSpan:z,ariaControls:ee,ariaCurrent:null,ariaDescribedBy:ee,ariaDetails:null,ariaDisabled:me,ariaDropEffect:ee,ariaErrorMessage:null,ariaExpanded:me,ariaFlowTo:ee,ariaGrabbed:me,ariaHasPopup:null,ariaHidden:me,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ee,ariaLevel:z,ariaLive:null,ariaModal:me,ariaMultiLine:me,ariaMultiSelectable:me,ariaOrientation:null,ariaOwns:ee,ariaPlaceholder:null,ariaPosInSet:z,ariaPressed:me,ariaReadOnly:me,ariaRelevant:null,ariaRequired:me,ariaRoleDescription:ee,ariaRowCount:z,ariaRowIndex:z,ariaRowSpan:z,ariaSelected:me,ariaSetSize:z,ariaSort:null,ariaValueMax:z,ariaValueMin:z,ariaValueNow:z,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function wh(e,t){return t in e?e[t]:t}function Sh(e,t){return wh(e,t.toLowerCase())}const C0=gr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Sn,acceptCharset:ee,accessKey:ee,action:null,allow:null,allowFullScreen:U,allowPaymentRequest:U,allowUserMedia:U,alpha:U,alt:null,as:null,async:U,autoCapitalize:null,autoComplete:ee,autoFocus:U,autoPlay:U,blocking:ee,capture:null,charSet:null,checked:U,cite:null,className:ee,closedBy:null,colorSpace:null,cols:z,colSpan:z,command:null,commandFor:null,content:null,contentEditable:me,controls:U,controlsList:ee,coords:z|Sn,crossOrigin:null,data:null,dateTime:null,decoding:null,default:U,defer:U,dir:null,dirName:null,disabled:U,download:Qu,draggable:me,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:U,formTarget:null,headers:ee,height:z,hidden:Qu,high:z,href:null,hrefLang:null,htmlFor:ee,httpEquiv:ee,id:null,imageSizes:null,imageSrcSet:null,inert:U,inputMode:null,integrity:null,is:null,isMap:U,itemId:null,itemProp:ee,itemRef:ee,itemScope:U,itemType:ee,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:U,low:z,manifest:null,max:null,maxLength:z,media:null,method:null,min:null,minLength:z,multiple:U,muted:U,name:null,nonce:null,noModule:U,noValidate:U,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:U,optimum:z,pattern:null,ping:ee,placeholder:null,playsInline:U,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:U,referrerPolicy:null,rel:ee,required:U,reversed:U,rows:z,rowSpan:z,sandbox:ee,scope:null,scoped:U,seamless:U,selected:U,shadowRootClonable:U,shadowRootCustomElementRegistry:U,shadowRootDelegatesFocus:U,shadowRootMode:null,shadowRootSerializable:U,shape:null,size:z,sizes:null,slot:null,span:z,spellCheck:me,src:null,srcDoc:null,srcLang:null,srcSet:null,start:z,step:null,style:null,tabIndex:z,target:null,title:null,translate:null,type:null,typeMustMatch:U,useMap:null,value:me,width:z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ee,axis:null,background:null,bgColor:null,border:z,borderColor:null,bottomMargin:z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:U,declare:U,event:null,face:null,frame:null,frameBorder:null,hSpace:z,leftMargin:z,link:null,longDesc:null,lowSrc:null,marginHeight:z,marginWidth:z,noResize:U,noHref:U,noShade:U,noWrap:U,object:null,profile:null,prompt:null,rev:null,rightMargin:z,rules:null,scheme:null,scrolling:me,standby:null,summary:null,text:null,topMargin:z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:z,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:U,disablePictureInPicture:U,disableRemotePlayback:U,exportParts:Sn,part:ee,prefix:null,property:null,results:z,security:null,unselectable:null},space:"html",transform:Sh}),P0=gr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Qe,accentHeight:z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:z,amplitude:z,arabicForm:null,ascent:z,attributeName:null,attributeType:null,azimuth:z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:z,by:null,calcMode:null,capHeight:z,className:ee,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:z,diffuseConstant:z,direction:null,display:null,dur:null,divisor:z,dominantBaseline:null,download:U,dx:null,dy:null,edgeMode:null,editable:null,elevation:z,enableBackground:null,end:null,event:null,exponent:z,externalResourcesRequired:null,fill:null,fillOpacity:z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Sn,g2:Sn,glyphName:Sn,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:z,horizOriginX:z,horizOriginY:z,id:null,ideographic:z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:z,k:z,k1:z,k2:z,k3:z,k4:z,kernelMatrix:Qe,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:z,overlineThickness:z,paintOrder:null,panose1:null,path:null,pathLength:z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ee,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:z,pointsAtY:z,pointsAtZ:z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Qe,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Qe,rev:Qe,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Qe,requiredFeatures:Qe,requiredFonts:Qe,requiredFormats:Qe,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:z,specularExponent:z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:z,strikethroughThickness:z,string:null,stroke:null,strokeDashArray:Qe,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:z,strokeOpacity:z,strokeWidth:null,style:null,surfaceScale:z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Qe,tabIndex:z,tableValues:null,target:null,targetX:z,targetY:z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Qe,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:z,underlineThickness:z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:z,values:null,vAlphabetic:z,vMathematical:z,vectorEffect:null,vHanging:z,vIdeographic:z,version:null,vertAdvY:z,vertOriginX:z,vertOriginY:z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:wh}),Ch=gr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Ph=gr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Sh}),Eh=gr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),E0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},b0=/[A-Z]/g,Jc=/-[a-z]/g,T0=/^data[-\w.:]+$/i;function I0(e,t){const n=Wu(t);let r=t,i=He;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&T0.test(t)){if(t.charAt(4)==="-"){const l=t.slice(5).replace(Jc,_0);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=t.slice(4);if(!Jc.test(l)){let o=l.replace(b0,z0);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=ns}return new i(r,t)}function z0(e){return"-"+e.toLowerCase()}function _0(e){return e.charAt(1).toUpperCase()}const j0=xh([kh,C0,Ch,Ph,Eh],"html"),rs=xh([kh,P0,Ch,Ph,Eh],"svg");function N0(e){return e.join(" ").trim()}var is={},qc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,L0=/\n/g,R0=/^\s*/,D0=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,A0=/^:\s*/,F0=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,O0=/^[;\s]*/,M0=/^\s+|\s+$/g,B0=`
`,Kc="/",Yc="*",gn="",U0="comment",$0="declaration";function V0(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var x=g.match(L0);x&&(n+=x.length);var S=g.lastIndexOf(B0);r=~S?g.length-S:r+g.length}function l(){var g={line:n,column:r};return function(x){return x.position=new o(g),s(),x}}function o(g){this.start=g,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function u(g){var x=new Error(t.source+":"+n+":"+r+": "+g);if(x.reason=g,x.filename=t.source,x.line=n,x.column=r,x.source=e,!t.silent)throw x}function a(g){var x=g.exec(e);if(x){var S=x[0];return i(S),e=e.slice(S.length),x}}function s(){a(R0)}function f(g){var x;for(g=g||[];x=c();)x!==!1&&g.push(x);return g}function c(){var g=l();if(!(Kc!=e.charAt(0)||Yc!=e.charAt(1))){for(var x=2;gn!=e.charAt(x)&&(Yc!=e.charAt(x)||Kc!=e.charAt(x+1));)++x;if(x+=2,gn===e.charAt(x-1))return u("End of comment missing");var S=e.slice(2,x-2);return r+=2,i(S),e=e.slice(x),r+=2,g({type:U0,comment:S})}}function p(){var g=l(),x=a(D0);if(x){if(c(),!a(A0))return u("property missing ':'");var S=a(F0),h=g({type:$0,property:Xc(x[0].replace(qc,gn)),value:S?Xc(S[0].replace(qc,gn)):gn});return a(O0),h}}function d(){var g=[];f(g);for(var x;x=p();)x!==!1&&(g.push(x),f(g));return g}return s(),d()}function Xc(e){return e?e.replace(M0,gn):gn}var H0=V0,W0=ll&&ll.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(is,"__esModule",{value:!0});is.default=G0;const Q0=W0(H0);function G0(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Q0.default)(e),i=typeof t=="function";return r.forEach(l=>{if(l.type!=="declaration")return;const{property:o,value:u}=l;i?t(o,u,l):u&&(n=n||{},n[o]=u)}),n}var Xl={};Object.defineProperty(Xl,"__esModule",{value:!0});Xl.camelCase=void 0;var J0=/^--[a-zA-Z0-9_-]+$/,q0=/-([a-z])/g,K0=/^[^-]+$/,Y0=/^-(webkit|moz|ms|o|khtml)-/,X0=/^-(ms)-/,Z0=function(e){return!e||K0.test(e)||J0.test(e)},ev=function(e,t){return t.toUpperCase()},Zc=function(e,t){return"".concat(t,"-")},tv=function(e,t){return t===void 0&&(t={}),Z0(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(X0,Zc):e=e.replace(Y0,Zc),e.replace(q0,ev))};Xl.camelCase=tv;var nv=ll&&ll.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},rv=nv(is),iv=Xl;function Ju(e,t){var n={};return!e||typeof e!="string"||(0,rv.default)(e,function(r,i){r&&i&&(n[(0,iv.camelCase)(r,t)]=i)}),n}Ju.default=Ju;var lv=Ju;const ov=ra(lv),bh=Th("end"),ls=Th("start");function Th(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function uv(e){const t=ls(e),n=bh(e);if(t&&n)return{start:t,end:n}}function Vr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ef(e.position):"start"in e||"end"in e?ef(e):"line"in e||"column"in e?qu(e):""}function qu(e){return tf(e&&e.line)+":"+tf(e&&e.column)}function ef(e){return qu(e&&e.start)+"-"+qu(e&&e.end)}function tf(e){return e&&typeof e=="number"?e:1}class Ne extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",l={},o=!1;if(n&&("line"in n&&"column"in n?l={place:n}:"start"in n&&"end"in n?l={place:n}:"type"in n?l={ancestors:[n],place:n.position}:l={...n}),typeof t=="string"?i=t:!l.cause&&t&&(o=!0,i=t.message,l.cause=t),!l.ruleId&&!l.source&&typeof r=="string"){const a=r.indexOf(":");a===-1?l.ruleId=r:(l.source=r.slice(0,a),l.ruleId=r.slice(a+1))}if(!l.place&&l.ancestors&&l.ancestors){const a=l.ancestors[l.ancestors.length-1];a&&(l.place=a.position)}const u=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=u?u.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=u?u.line:void 0,this.name=Vr(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ne.prototype.file="";Ne.prototype.name="";Ne.prototype.reason="";Ne.prototype.message="";Ne.prototype.stack="";Ne.prototype.column=void 0;Ne.prototype.line=void 0;Ne.prototype.ancestors=void 0;Ne.prototype.cause=void 0;Ne.prototype.fatal=void 0;Ne.prototype.place=void 0;Ne.prototype.ruleId=void 0;Ne.prototype.source=void 0;const os={}.hasOwnProperty,av=new Map,sv=/[A-Z]/g,cv=new Set(["table","tbody","thead","tfoot","tr"]),fv=new Set(["td","th"]),Ih="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function pv(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=kv(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=xv(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?rs:j0,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},l=zh(i,e,void 0);return l&&typeof l!="string"?l:i.create(e,i.Fragment,{children:l||void 0},void 0)}function zh(e,t,n){if(t.type==="element")return dv(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return hv(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return gv(e,t,n);if(t.type==="mdxjsEsm")return mv(e,t);if(t.type==="root")return yv(e,t,n);if(t.type==="text")return vv(e,t)}function dv(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=rs,e.schema=i),e.ancestors.push(t);const l=jh(e,t.tagName,!1),o=wv(e,t);let u=as(e,t);return cv.has(t.tagName)&&(u=u.filter(function(a){return typeof a=="string"?!w0(a):!0})),_h(e,o,l,t),us(o,u),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}function hv(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}fi(e,t.position)}function mv(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);fi(e,t.position)}function gv(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=rs,e.schema=i),e.ancestors.push(t);const l=t.name===null?e.Fragment:jh(e,t.name,!0),o=Sv(e,t),u=as(e,t);return _h(e,o,l,t),us(o,u),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}function yv(e,t,n){const r={};return us(r,as(e,t)),e.create(t,e.Fragment,r,n)}function vv(e,t){return t.value}function _h(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function us(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function xv(e,t,n){return r;function r(i,l,o,u){const s=Array.isArray(o.children)?n:t;return u?s(l,o,u):s(l,o)}}function kv(e,t){return n;function n(r,i,l,o){const u=Array.isArray(l.children),a=ls(r);return t(i,l,o,u,{columnNumber:a?a.column-1:void 0,fileName:e,lineNumber:a?a.line:void 0},void 0)}}function wv(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&os.call(t.properties,i)){const l=Cv(e,i,t.properties[i]);if(l){const[o,u]=l;e.tableCellAlignToStyle&&o==="align"&&typeof u=="string"&&fv.has(t.tagName)?r=u:n[o]=u}}if(r){const l=n.style||(n.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Sv(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const l=r.data.estree.body[0];l.type;const o=l.expression;o.type;const u=o.properties[0];u.type,Object.assign(n,e.evaluater.evaluateExpression(u.argument))}else fi(e,t.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const u=r.value.data.estree.body[0];u.type,l=e.evaluater.evaluateExpression(u.expression)}else fi(e,t.position);else l=r.value===null?!0:r.value;n[i]=l}return n}function as(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:av;for(;++r<t.children.length;){const l=t.children[r];let o;if(e.passKeys){const a=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(a){const s=i.get(a)||0;o=a+"-"+s,i.set(a,s+1)}}const u=zh(e,l,o);u!==void 0&&n.push(u)}return n}function Cv(e,t,n){const r=I0(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?g0(n):N0(n)),r.property==="style"){let i=typeof n=="object"?n:Pv(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Ev(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?E0[r.property]||r.property:r.attribute,n]}}function Pv(e,t){try{return ov(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Ne("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Ih+"#cannot-parse-style-attribute",i}}function jh(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let l=-1,o;for(;++l<i.length;){const u=Wc(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};o=o?{type:"MemberExpression",object:o,property:u,computed:!!(l&&u.type==="Literal"),optional:!1}:u}r=o}else r=Wc(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return os.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);fi(e)}function fi(e,t){const n=new Ne("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Ih+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Ev(e){const t={};let n;for(n in e)os.call(e,n)&&(t[bv(n)]=e[n]);return t}function bv(e){let t=e.replace(sv,Tv);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Tv(e){return"-"+e.toLowerCase()}const Lo={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Iv={};function ss(e,t){const n=Iv,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Nh(e,r,i)}function Nh(e,t,n){if(zv(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return nf(e.children,t,n)}return Array.isArray(e)?nf(e,t,n):""}function nf(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Nh(e[i],t,n);return r.join("")}function zv(e){return!!(e&&typeof e=="object")}const rf=document.createElement("i");function cs(e){const t="&"+e+";";rf.innerHTML=t;const n=rf.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Ke(e,t,n,r){const i=e.length;let l=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);l<r.length;)o=r.slice(l,l+1e4),o.unshift(t,0),e.splice(...o),l+=1e4,t+=1e4}function nt(e,t){return e.length>0?(Ke(e,e.length,0,t),e):t}const lf={}.hasOwnProperty;function Lh(e){const t={};let n=-1;for(;++n<e.length;)_v(t,e[n]);return t}function _v(e,t){let n;for(n in t){const i=(lf.call(e,n)?e[n]:void 0)||(e[n]={}),l=t[n];let o;if(l)for(o in l){lf.call(i,o)||(i[o]=[]);const u=l[o];jv(i[o],Array.isArray(u)?u:u?[u]:[])}}}function jv(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Ke(e,0,0,r)}function Rh(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function mt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Re=fn(/[A-Za-z]/),_e=fn(/[\dA-Za-z]/),Nv=fn(/[#-'*+\--9=?A-Z^-~]/);function jl(e){return e!==null&&(e<32||e===127)}const Ku=fn(/\d/),Lv=fn(/[\dA-Fa-f]/),Rv=fn(/[!-/:-@[-`{-~]/);function O(e){return e!==null&&e<-2}function te(e){return e!==null&&(e<0||e===32)}function V(e){return e===-2||e===-1||e===32}const Zl=fn(new RegExp("\\p{P}|\\p{S}","u")),In=fn(/\s/);function fn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function yr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const l=e.charCodeAt(n);let o="";if(l===37&&_e(e.charCodeAt(n+1))&&_e(e.charCodeAt(n+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const u=e.charCodeAt(n+1);l<56320&&u>56319&&u<57344?(o=String.fromCharCode(l,u),i=1):o="�"}else o=String.fromCharCode(l);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function G(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(a){return V(a)?(e.enter(n),u(a)):t(a)}function u(a){return V(a)&&l++<i?(e.consume(a),u):(e.exit(n),t(a))}}const Dv={tokenize:Av};function Av(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),G(e,t,"linePrefix")}function i(u){return e.enter("paragraph"),l(u)}function l(u){const a=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=a),n=a,o(u)}function o(u){if(u===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(u);return}return O(u)?(e.consume(u),e.exit("chunkText"),l):(e.consume(u),o)}}const Fv={tokenize:Ov},of={tokenize:Mv};function Ov(e){const t=this,n=[];let r=0,i,l,o;return u;function u(y){if(r<n.length){const E=n[r];return t.containerState=E[1],e.attempt(E[0].continuation,a,s)(y)}return s(y)}function a(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const E=t.events.length;let T=E,C;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){C=t.events[T][1].end;break}h(r);let _=E;for(;_<t.events.length;)t.events[_][1].end={...C},_++;return Ke(t.events,T+1,0,t.events.slice(E)),t.events.length=_,s(y)}return u(y)}function s(y){if(r===n.length){if(!i)return p(y);if(i.currentConstruct&&i.currentConstruct.concrete)return g(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(of,f,c)(y)}function f(y){return i&&m(),h(r),p(y)}function c(y){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,g(y)}function p(y){return t.containerState={},e.attempt(of,d,g)(y)}function d(y){return r++,n.push([t.currentConstruct,t.containerState]),p(y)}function g(y){if(y===null){i&&m(),h(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),x(y)}function x(y){if(y===null){S(e.exit("chunkFlow"),!0),h(0),e.consume(y);return}return O(y)?(e.consume(y),S(e.exit("chunkFlow")),r=0,t.interrupt=void 0,u):(e.consume(y),x)}function S(y,E){const T=t.sliceStream(y);if(E&&T.push(null),y.previous=l,l&&(l.next=y),l=y,i.defineSkip(y.start),i.write(T),t.parser.lazy[y.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<o&&(!i.events[C][1].end||i.events[C][1].end.offset>o))return;const _=t.events.length;let N=_,M,P;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){if(M){P=t.events[N][1].end;break}M=!0}for(h(r),C=_;C<t.events.length;)t.events[C][1].end={...P},C++;Ke(t.events,N+1,0,t.events.slice(_)),t.events.length=C}}function h(y){let E=n.length;for(;E-- >y;){const T=n[E];t.containerState=T[1],T[0].exit.call(t,e)}n.length=y}function m(){i.write([null]),l=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Mv(e,t,n){return G(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function cr(e){if(e===null||te(e)||In(e))return 1;if(Zl(e))return 2}function eo(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(t=l(t,n),r.push(l))}return t}const Yu={name:"attention",resolveAll:Bv,tokenize:Uv};function Bv(e,t){let n=-1,r,i,l,o,u,a,s,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;a=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},p={...e[n][1].start};uf(c,-a),uf(p,a),o={type:a>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},u={type:a>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},l={type:a>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:a>1?"strong":"emphasis",start:{...o.start},end:{...u.end}},e[r][1].end={...o.start},e[n][1].start={...u.end},s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=nt(s,[["enter",e[r][1],t],["exit",e[r][1],t]])),s=nt(s,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",l,t]]),s=nt(s,eo(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),s=nt(s,[["exit",l,t],["enter",u,t],["exit",u,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,s=nt(s,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,Ke(e,r-1,n-r+3,s),n=r+s.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Uv(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=cr(r);let l;return o;function o(a){return l=a,e.enter("attentionSequence"),u(a)}function u(a){if(a===l)return e.consume(a),u;const s=e.exit("attentionSequence"),f=cr(a),c=!f||f===2&&i||n.includes(a),p=!i||i===2&&f||n.includes(r);return s._open=!!(l===42?c:c&&(i||!p)),s._close=!!(l===42?p:p&&(f||!c)),t(a)}}function uf(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const $v={name:"autolink",tokenize:Vv};function Vv(e,t,n){let r=0;return i;function i(d){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(d){return Re(d)?(e.consume(d),o):d===64?n(d):s(d)}function o(d){return d===43||d===45||d===46||_e(d)?(r=1,u(d)):s(d)}function u(d){return d===58?(e.consume(d),r=0,a):(d===43||d===45||d===46||_e(d))&&r++<32?(e.consume(d),u):(r=0,s(d))}function a(d){return d===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),t):d===null||d===32||d===60||jl(d)?n(d):(e.consume(d),a)}function s(d){return d===64?(e.consume(d),f):Nv(d)?(e.consume(d),s):n(d)}function f(d){return _e(d)?c(d):n(d)}function c(d){return d===46?(e.consume(d),r=0,f):d===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),t):p(d)}function p(d){if((d===45||_e(d))&&r++<63){const g=d===45?p:c;return e.consume(d),g}return n(d)}}const wi={partial:!0,tokenize:Hv};function Hv(e,t,n){return r;function r(l){return V(l)?G(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||O(l)?t(l):n(l)}}const Dh={continuation:{tokenize:Qv},exit:Gv,name:"blockQuote",tokenize:Wv};function Wv(e,t,n){const r=this;return i;function i(o){if(o===62){const u=r.containerState;return u.open||(e.enter("blockQuote",{_container:!0}),u.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return n(o)}function l(o){return V(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function Qv(e,t,n){const r=this;return i;function i(o){return V(o)?G(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(Dh,t,n)(o)}}function Gv(e){e.exit("blockQuote")}const Ah={name:"characterEscape",tokenize:Jv};function Jv(e,t,n){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return Rv(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(l)}}const Fh={name:"characterReference",tokenize:qv};function qv(e,t,n){const r=this;let i=0,l,o;return u;function u(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),a}function a(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),l=31,o=_e,f(c))}function s(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=Lv,f):(e.enter("characterReferenceValue"),l=7,o=Ku,f(c))}function f(c){if(c===59&&i){const p=e.exit("characterReferenceValue");return o===_e&&!cs(r.sliceSerialize(p))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(c)&&i++<l?(e.consume(c),f):n(c)}}const af={partial:!0,tokenize:Yv},sf={concrete:!0,name:"codeFenced",tokenize:Kv};function Kv(e,t,n){const r=this,i={partial:!0,tokenize:T};let l=0,o=0,u;return a;function a(C){return s(C)}function s(C){const _=r.events[r.events.length-1];return l=_&&_[1].type==="linePrefix"?_[2].sliceSerialize(_[1],!0).length:0,u=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(C)}function f(C){return C===u?(o++,e.consume(C),f):o<3?n(C):(e.exit("codeFencedFenceSequence"),V(C)?G(e,c,"whitespace")(C):c(C))}function c(C){return C===null||O(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(af,x,E)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(C))}function p(C){return C===null||O(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(C)):V(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),G(e,d,"whitespace")(C)):C===96&&C===u?n(C):(e.consume(C),p)}function d(C){return C===null||O(C)?c(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(C))}function g(C){return C===null||O(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(C)):C===96&&C===u?n(C):(e.consume(C),g)}function x(C){return e.attempt(i,E,S)(C)}function S(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),h}function h(C){return l>0&&V(C)?G(e,m,"linePrefix",l+1)(C):m(C)}function m(C){return C===null||O(C)?e.check(af,x,E)(C):(e.enter("codeFlowValue"),y(C))}function y(C){return C===null||O(C)?(e.exit("codeFlowValue"),m(C)):(e.consume(C),y)}function E(C){return e.exit("codeFenced"),t(C)}function T(C,_,N){let M=0;return P;function P(W){return C.enter("lineEnding"),C.consume(W),C.exit("lineEnding"),D}function D(W){return C.enter("codeFencedFence"),V(W)?G(C,F,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(W):F(W)}function F(W){return W===u?(C.enter("codeFencedFenceSequence"),J(W)):N(W)}function J(W){return W===u?(M++,C.consume(W),J):M>=o?(C.exit("codeFencedFenceSequence"),V(W)?G(C,ne,"whitespace")(W):ne(W)):N(W)}function ne(W){return W===null||O(W)?(C.exit("codeFencedFence"),_(W)):N(W)}}}function Yv(e,t,n){const r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const Ro={name:"codeIndented",tokenize:Zv},Xv={partial:!0,tokenize:ex};function Zv(e,t,n){const r=this;return i;function i(s){return e.enter("codeIndented"),G(e,l,"linePrefix",5)(s)}function l(s){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?o(s):n(s)}function o(s){return s===null?a(s):O(s)?e.attempt(Xv,o,a)(s):(e.enter("codeFlowValue"),u(s))}function u(s){return s===null||O(s)?(e.exit("codeFlowValue"),o(s)):(e.consume(s),u)}function a(s){return e.exit("codeIndented"),t(s)}}function ex(e,t,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):O(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):G(e,l,"linePrefix",5)(o)}function l(o){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?t(o):O(o)?i(o):n(o)}}const tx={name:"codeText",previous:rx,resolve:nx,tokenize:ix};function nx(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function rx(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ix(e,t,n){let r=0,i,l;return o;function o(c){return e.enter("codeText"),e.enter("codeTextSequence"),u(c)}function u(c){return c===96?(e.consume(c),r++,u):(e.exit("codeTextSequence"),a(c))}function a(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),a):c===96?(l=e.enter("codeTextSequence"),i=0,f(c)):O(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),a):(e.enter("codeTextData"),s(c))}function s(c){return c===null||c===32||c===96||O(c)?(e.exit("codeTextData"),a(c)):(e.consume(c),s)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(l.type="codeTextData",s(c))}}class lx{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ir(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ir(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ir(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ir(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ir(this.left,n.reverse())}}}function Ir(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Oh(e){const t={};let n=-1,r,i,l,o,u,a,s;const f=new lx(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,l=0,l<a.length&&a[l][1].type==="lineEndingBlank"&&(l+=2),l<a.length&&a[l][1].type==="content"))for(;++l<a.length&&a[l][1].type!=="content";)a[l][1].type==="chunkText"&&(a[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,ox(f,n)),n=t[n],s=!0);else if(r[1]._container){for(l=n,i=void 0;l--;)if(o=f.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},u=f.slice(i,n),u.unshift(r),f.splice(i,n-i+1,u))}}return Ke(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!s}function ox(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const l=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const u=o.events,a=[],s={};let f,c,p=-1,d=n,g=0,x=0;const S=[x];for(;d;){for(;e.get(++i)[1]!==d;);l.push(i),d._tokenizer||(f=r.sliceStream(d),d.next||f.push(null),c&&o.defineSkip(d.start),d._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),d._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=d,d=d.next}for(d=n;++p<u.length;)u[p][0]==="exit"&&u[p-1][0]==="enter"&&u[p][1].type===u[p-1][1].type&&u[p][1].start.line!==u[p][1].end.line&&(x=p+1,S.push(x),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(o.events=[],d?(d._tokenizer=void 0,d.previous=void 0):S.pop(),p=S.length;p--;){const h=u.slice(S[p],S[p+1]),m=l.pop();a.push([m,m+h.length-1]),e.splice(m,2,h)}for(a.reverse(),p=-1;++p<a.length;)s[g+a[p][0]]=g+a[p][1],g+=a[p][1]-a[p][0]-1;return s}const ux={resolve:sx,tokenize:cx},ax={partial:!0,tokenize:fx};function sx(e){return Oh(e),e}function cx(e,t){let n;return r;function r(u){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(u)}function i(u){return u===null?l(u):O(u)?e.check(ax,o,l)(u):(e.consume(u),i)}function l(u){return e.exit("chunkContent"),e.exit("content"),t(u)}function o(u){return e.consume(u),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function fx(e,t,n){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),G(e,l,"linePrefix")}function l(o){if(o===null||O(o))return n(o);const u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Mh(e,t,n,r,i,l,o,u,a){const s=a||Number.POSITIVE_INFINITY;let f=0;return c;function c(h){return h===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(h),e.exit(l),p):h===null||h===32||h===41||jl(h)?n(h):(e.enter(r),e.enter(o),e.enter(u),e.enter("chunkString",{contentType:"string"}),x(h))}function p(h){return h===62?(e.enter(l),e.consume(h),e.exit(l),e.exit(i),e.exit(r),t):(e.enter(u),e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===62?(e.exit("chunkString"),e.exit(u),p(h)):h===null||h===60||O(h)?n(h):(e.consume(h),h===92?g:d)}function g(h){return h===60||h===62||h===92?(e.consume(h),d):d(h)}function x(h){return!f&&(h===null||h===41||te(h))?(e.exit("chunkString"),e.exit(u),e.exit(o),e.exit(r),t(h)):f<s&&h===40?(e.consume(h),f++,x):h===41?(e.consume(h),f--,x):h===null||h===32||h===40||jl(h)?n(h):(e.consume(h),h===92?S:x)}function S(h){return h===40||h===41||h===92?(e.consume(h),x):x(h)}}function Bh(e,t,n,r,i,l){const o=this;let u=0,a;return s;function s(d){return e.enter(r),e.enter(i),e.consume(d),e.exit(i),e.enter(l),f}function f(d){return u>999||d===null||d===91||d===93&&!a||d===94&&!u&&"_hiddenFootnoteSupport"in o.parser.constructs?n(d):d===93?(e.exit(l),e.enter(i),e.consume(d),e.exit(i),e.exit(r),t):O(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(d))}function c(d){return d===null||d===91||d===93||O(d)||u++>999?(e.exit("chunkString"),f(d)):(e.consume(d),a||(a=!V(d)),d===92?p:c)}function p(d){return d===91||d===92||d===93?(e.consume(d),u++,c):c(d)}}function Uh(e,t,n,r,i,l){let o;return u;function u(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),o=p===40?41:p,a):n(p)}function a(p){return p===o?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(l),s(p))}function s(p){return p===o?(e.exit(l),a(o)):p===null?n(p):O(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),G(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===o||p===null||O(p)?(e.exit("chunkString"),s(p)):(e.consume(p),p===92?c:f)}function c(p){return p===o||p===92?(e.consume(p),f):f(p)}}function Hr(e,t){let n;return r;function r(i){return O(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):V(i)?G(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const px={name:"definition",tokenize:hx},dx={partial:!0,tokenize:mx};function hx(e,t,n){const r=this;let i;return l;function l(d){return e.enter("definition"),o(d)}function o(d){return Bh.call(r,e,u,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(d)}function u(d){return i=mt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),d===58?(e.enter("definitionMarker"),e.consume(d),e.exit("definitionMarker"),a):n(d)}function a(d){return te(d)?Hr(e,s)(d):s(d)}function s(d){return Mh(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(d)}function f(d){return e.attempt(dx,c,c)(d)}function c(d){return V(d)?G(e,p,"whitespace")(d):p(d)}function p(d){return d===null||O(d)?(e.exit("definition"),r.parser.defined.push(i),t(d)):n(d)}}function mx(e,t,n){return r;function r(u){return te(u)?Hr(e,i)(u):n(u)}function i(u){return Uh(e,l,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function l(u){return V(u)?G(e,o,"whitespace")(u):o(u)}function o(u){return u===null||O(u)?t(u):n(u)}}const gx={name:"hardBreakEscape",tokenize:yx};function yx(e,t,n){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return O(l)?(e.exit("hardBreakEscape"),t(l)):n(l)}}const vx={name:"headingAtx",resolve:xx,tokenize:kx};function xx(e,t){let n=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},l={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Ke(e,r,n-r+1,[["enter",i,t],["enter",l,t],["exit",l,t],["exit",i,t]])),e}function kx(e,t,n){let r=0;return i;function i(f){return e.enter("atxHeading"),l(f)}function l(f){return e.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&r++<6?(e.consume(f),o):f===null||te(f)?(e.exit("atxHeadingSequence"),u(f)):n(f)}function u(f){return f===35?(e.enter("atxHeadingSequence"),a(f)):f===null||O(f)?(e.exit("atxHeading"),t(f)):V(f)?G(e,u,"whitespace")(f):(e.enter("atxHeadingText"),s(f))}function a(f){return f===35?(e.consume(f),a):(e.exit("atxHeadingSequence"),u(f))}function s(f){return f===null||f===35||te(f)?(e.exit("atxHeadingText"),u(f)):(e.consume(f),s)}}const wx=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],cf=["pre","script","style","textarea"],Sx={concrete:!0,name:"htmlFlow",resolveTo:Ex,tokenize:bx},Cx={partial:!0,tokenize:Ix},Px={partial:!0,tokenize:Tx};function Ex(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function bx(e,t,n){const r=this;let i,l,o,u,a;return s;function s(w){return f(w)}function f(w){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(w),c}function c(w){return w===33?(e.consume(w),p):w===47?(e.consume(w),l=!0,x):w===63?(e.consume(w),i=3,r.interrupt?t:v):Re(w)?(e.consume(w),o=String.fromCharCode(w),S):n(w)}function p(w){return w===45?(e.consume(w),i=2,d):w===91?(e.consume(w),i=5,u=0,g):Re(w)?(e.consume(w),i=4,r.interrupt?t:v):n(w)}function d(w){return w===45?(e.consume(w),r.interrupt?t:v):n(w)}function g(w){const ve="CDATA[";return w===ve.charCodeAt(u++)?(e.consume(w),u===ve.length?r.interrupt?t:F:g):n(w)}function x(w){return Re(w)?(e.consume(w),o=String.fromCharCode(w),S):n(w)}function S(w){if(w===null||w===47||w===62||te(w)){const ve=w===47,ut=o.toLowerCase();return!ve&&!l&&cf.includes(ut)?(i=1,r.interrupt?t(w):F(w)):wx.includes(o.toLowerCase())?(i=6,ve?(e.consume(w),h):r.interrupt?t(w):F(w)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(w):l?m(w):y(w))}return w===45||_e(w)?(e.consume(w),o+=String.fromCharCode(w),S):n(w)}function h(w){return w===62?(e.consume(w),r.interrupt?t:F):n(w)}function m(w){return V(w)?(e.consume(w),m):P(w)}function y(w){return w===47?(e.consume(w),P):w===58||w===95||Re(w)?(e.consume(w),E):V(w)?(e.consume(w),y):P(w)}function E(w){return w===45||w===46||w===58||w===95||_e(w)?(e.consume(w),E):T(w)}function T(w){return w===61?(e.consume(w),C):V(w)?(e.consume(w),T):y(w)}function C(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),a=w,_):V(w)?(e.consume(w),C):N(w)}function _(w){return w===a?(e.consume(w),a=null,M):w===null||O(w)?n(w):(e.consume(w),_)}function N(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||te(w)?T(w):(e.consume(w),N)}function M(w){return w===47||w===62||V(w)?y(w):n(w)}function P(w){return w===62?(e.consume(w),D):n(w)}function D(w){return w===null||O(w)?F(w):V(w)?(e.consume(w),D):n(w)}function F(w){return w===45&&i===2?(e.consume(w),he):w===60&&i===1?(e.consume(w),pe):w===62&&i===4?(e.consume(w),q):w===63&&i===3?(e.consume(w),v):w===93&&i===5?(e.consume(w),B):O(w)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Cx,X,J)(w)):w===null||O(w)?(e.exit("htmlFlowData"),J(w)):(e.consume(w),F)}function J(w){return e.check(Px,ne,X)(w)}function ne(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),W}function W(w){return w===null||O(w)?J(w):(e.enter("htmlFlowData"),F(w))}function he(w){return w===45?(e.consume(w),v):F(w)}function pe(w){return w===47?(e.consume(w),o="",R):F(w)}function R(w){if(w===62){const ve=o.toLowerCase();return cf.includes(ve)?(e.consume(w),q):F(w)}return Re(w)&&o.length<8?(e.consume(w),o+=String.fromCharCode(w),R):F(w)}function B(w){return w===93?(e.consume(w),v):F(w)}function v(w){return w===62?(e.consume(w),q):w===45&&i===2?(e.consume(w),v):F(w)}function q(w){return w===null||O(w)?(e.exit("htmlFlowData"),X(w)):(e.consume(w),q)}function X(w){return e.exit("htmlFlow"),t(w)}}function Tx(e,t,n){const r=this;return i;function i(o){return O(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):n(o)}function l(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function Ix(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(wi,t,n)}}const zx={name:"htmlText",tokenize:_x};function _x(e,t,n){const r=this;let i,l,o;return u;function u(v){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(v),a}function a(v){return v===33?(e.consume(v),s):v===47?(e.consume(v),T):v===63?(e.consume(v),y):Re(v)?(e.consume(v),N):n(v)}function s(v){return v===45?(e.consume(v),f):v===91?(e.consume(v),l=0,g):Re(v)?(e.consume(v),m):n(v)}function f(v){return v===45?(e.consume(v),d):n(v)}function c(v){return v===null?n(v):v===45?(e.consume(v),p):O(v)?(o=c,pe(v)):(e.consume(v),c)}function p(v){return v===45?(e.consume(v),d):c(v)}function d(v){return v===62?he(v):v===45?p(v):c(v)}function g(v){const q="CDATA[";return v===q.charCodeAt(l++)?(e.consume(v),l===q.length?x:g):n(v)}function x(v){return v===null?n(v):v===93?(e.consume(v),S):O(v)?(o=x,pe(v)):(e.consume(v),x)}function S(v){return v===93?(e.consume(v),h):x(v)}function h(v){return v===62?he(v):v===93?(e.consume(v),h):x(v)}function m(v){return v===null||v===62?he(v):O(v)?(o=m,pe(v)):(e.consume(v),m)}function y(v){return v===null?n(v):v===63?(e.consume(v),E):O(v)?(o=y,pe(v)):(e.consume(v),y)}function E(v){return v===62?he(v):y(v)}function T(v){return Re(v)?(e.consume(v),C):n(v)}function C(v){return v===45||_e(v)?(e.consume(v),C):_(v)}function _(v){return O(v)?(o=_,pe(v)):V(v)?(e.consume(v),_):he(v)}function N(v){return v===45||_e(v)?(e.consume(v),N):v===47||v===62||te(v)?M(v):n(v)}function M(v){return v===47?(e.consume(v),he):v===58||v===95||Re(v)?(e.consume(v),P):O(v)?(o=M,pe(v)):V(v)?(e.consume(v),M):he(v)}function P(v){return v===45||v===46||v===58||v===95||_e(v)?(e.consume(v),P):D(v)}function D(v){return v===61?(e.consume(v),F):O(v)?(o=D,pe(v)):V(v)?(e.consume(v),D):M(v)}function F(v){return v===null||v===60||v===61||v===62||v===96?n(v):v===34||v===39?(e.consume(v),i=v,J):O(v)?(o=F,pe(v)):V(v)?(e.consume(v),F):(e.consume(v),ne)}function J(v){return v===i?(e.consume(v),i=void 0,W):v===null?n(v):O(v)?(o=J,pe(v)):(e.consume(v),J)}function ne(v){return v===null||v===34||v===39||v===60||v===61||v===96?n(v):v===47||v===62||te(v)?M(v):(e.consume(v),ne)}function W(v){return v===47||v===62||te(v)?M(v):n(v)}function he(v){return v===62?(e.consume(v),e.exit("htmlTextData"),e.exit("htmlText"),t):n(v)}function pe(v){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),R}function R(v){return V(v)?G(e,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):B(v)}function B(v){return e.enter("htmlTextData"),o(v)}}const fs={name:"labelEnd",resolveAll:Rx,resolveTo:Dx,tokenize:Ax},jx={tokenize:Fx},Nx={tokenize:Ox},Lx={tokenize:Mx};function Rx(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Ke(e,0,e.length,n),e}function Dx(e,t){let n=e.length,r=0,i,l,o,u;for(;n--;)if(i=e[n][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const a={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},s={type:"label",start:{...e[l][1].start},end:{...e[o][1].end}},f={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[o-2][1].start}};return u=[["enter",a,t],["enter",s,t]],u=nt(u,e.slice(l+1,l+r+3)),u=nt(u,[["enter",f,t]]),u=nt(u,eo(t.parser.constructs.insideSpan.null,e.slice(l+r+4,o-3),t)),u=nt(u,[["exit",f,t],e[o-2],e[o-1],["exit",s,t]]),u=nt(u,e.slice(o+1)),u=nt(u,[["exit",a,t]]),Ke(e,l,e.length,u),e}function Ax(e,t,n){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return u;function u(p){return l?l._inactive?c(p):(o=r.parser.defined.includes(mt(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),a):n(p)}function a(p){return p===40?e.attempt(jx,f,o?f:c)(p):p===91?e.attempt(Nx,f,o?s:c)(p):o?f(p):c(p)}function s(p){return e.attempt(Lx,f,c)(p)}function f(p){return t(p)}function c(p){return l._balanced=!0,n(p)}}function Fx(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return te(c)?Hr(e,l)(c):l(c)}function l(c){return c===41?f(c):Mh(e,o,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return te(c)?Hr(e,a)(c):f(c)}function u(c){return n(c)}function a(c){return c===34||c===39||c===40?Uh(e,s,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function s(c){return te(c)?Hr(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function Ox(e,t,n){const r=this;return i;function i(u){return Bh.call(r,e,l,o,"reference","referenceMarker","referenceString")(u)}function l(u){return r.parser.defined.includes(mt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(u):n(u)}function o(u){return n(u)}}function Mx(e,t,n){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),t):n(l)}}const Bx={name:"labelStartImage",resolveAll:fs.resolveAll,tokenize:Ux};function Ux(e,t,n){const r=this;return i;function i(u){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(u),e.exit("labelImageMarker"),l}function l(u){return u===91?(e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelImage"),o):n(u)}function o(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(u):t(u)}}const $x={name:"labelStartLink",resolveAll:fs.resolveAll,tokenize:Vx};function Vx(e,t,n){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const Do={name:"lineEnding",tokenize:Hx};function Hx(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),G(e,t,"linePrefix")}}const rl={name:"thematicBreak",tokenize:Wx};function Wx(e,t,n){let r=0,i;return l;function l(s){return e.enter("thematicBreak"),o(s)}function o(s){return i=s,u(s)}function u(s){return s===i?(e.enter("thematicBreakSequence"),a(s)):r>=3&&(s===null||O(s))?(e.exit("thematicBreak"),t(s)):n(s)}function a(s){return s===i?(e.consume(s),r++,a):(e.exit("thematicBreakSequence"),V(s)?G(e,u,"whitespace")(s):u(s))}}const Oe={continuation:{tokenize:qx},exit:Yx,name:"list",tokenize:Jx},Qx={partial:!0,tokenize:Xx},Gx={partial:!0,tokenize:Kx};function Jx(e,t,n){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(d){const g=r.containerState.type||(d===42||d===43||d===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||d===r.containerState.marker:Ku(d)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),d===42||d===45?e.check(rl,n,s)(d):s(d);if(!r.interrupt||d===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(d)}return n(d)}function a(d){return Ku(d)&&++o<10?(e.consume(d),a):(!r.interrupt||o<2)&&(r.containerState.marker?d===r.containerState.marker:d===41||d===46)?(e.exit("listItemValue"),s(d)):n(d)}function s(d){return e.enter("listItemMarker"),e.consume(d),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||d,e.check(wi,r.interrupt?n:f,e.attempt(Qx,p,c))}function f(d){return r.containerState.initialBlankLine=!0,l++,p(d)}function c(d){return V(d)?(e.enter("listItemPrefixWhitespace"),e.consume(d),e.exit("listItemPrefixWhitespace"),p):n(d)}function p(d){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(d)}}function qx(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(wi,i,l);function i(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,G(e,t,"listItemIndent",r.containerState.size+1)(u)}function l(u){return r.containerState.furtherBlankLines||!V(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Gx,t,o)(u))}function o(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,G(e,e.attempt(Oe,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function Kx(e,t,n){const r=this;return G(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(l):n(l)}}function Yx(e){e.exit(this.containerState.type)}function Xx(e,t,n){const r=this;return G(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!V(l)&&o&&o[1].type==="listItemPrefixWhitespace"?t(l):n(l)}}const ff={name:"setextUnderline",resolveTo:Zx,tokenize:ek};function Zx(e,t){let n=e.length,r,i,l;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!l&&e[n][1].type==="definition"&&(l=n);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",o,t]),e.splice(l+1,0,["exit",e[r][1],t]),e[r][1].end={...e[l][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function ek(e,t,n){const r=this;let i;return l;function l(s){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=s,o(s)):n(s)}function o(s){return e.enter("setextHeadingLineSequence"),u(s)}function u(s){return s===i?(e.consume(s),u):(e.exit("setextHeadingLineSequence"),V(s)?G(e,a,"lineSuffix")(s):a(s))}function a(s){return s===null||O(s)?(e.exit("setextHeadingLine"),t(s)):n(s)}}const tk={tokenize:nk};function nk(e){const t=this,n=e.attempt(wi,r,e.attempt(this.parser.constructs.flowInitial,i,G(e,e.attempt(this.parser.constructs.flow,i,e.attempt(ux,i)),"linePrefix")));return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const rk={resolveAll:Vh()},ik=$h("string"),lk=$h("text");function $h(e){return{resolveAll:Vh(e==="text"?ok:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],l=n.attempt(i,o,u);return o;function o(f){return s(f)?l(f):u(f)}function u(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),a}function a(f){return s(f)?(n.exit("data"),l(f)):(n.consume(f),a)}function s(f){if(f===null)return!0;const c=i[f];let p=-1;if(c)for(;++p<c.length;){const d=c[p];if(!d.previous||d.previous.call(r,r.previous))return!0}return!1}}}function Vh(e){return t;function t(n,r){let i=-1,l;for(;++i<=n.length;)l===void 0?n[i]&&n[i][1].type==="data"&&(l=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==l+2&&(n[l][1].end=n[i-1][1].end,n.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(n,r):n}}function ok(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let l=i.length,o=-1,u=0,a;for(;l--;){const s=i[l];if(typeof s=="string"){for(o=s.length;s.charCodeAt(o-1)===32;)u++,o--;if(o)break;o=-1}else if(s===-2)a=!0,u++;else if(s!==-1){l++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(u=0),u){const s={type:n===e.length||a||u<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:r.start._bufferIndex+o,_index:r.start._index+l,line:r.end.line,column:r.end.column-u,offset:r.end.offset-u},end:{...r.end}};r.end={...s.start},r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(n,0,["enter",s,t],["exit",s,t]),n+=2)}n++}return e}const uk={42:Oe,43:Oe,45:Oe,48:Oe,49:Oe,50:Oe,51:Oe,52:Oe,53:Oe,54:Oe,55:Oe,56:Oe,57:Oe,62:Dh},ak={91:px},sk={[-2]:Ro,[-1]:Ro,32:Ro},ck={35:vx,42:rl,45:[ff,rl],60:Sx,61:ff,95:rl,96:sf,126:sf},fk={38:Fh,92:Ah},pk={[-5]:Do,[-4]:Do,[-3]:Do,33:Bx,38:Fh,42:Yu,60:[$v,zx],91:$x,92:[gx,Ah],93:fs,95:Yu,96:tx},dk={null:[Yu,rk]},hk={null:[42,95]},mk={null:[]},gk=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:hk,contentInitial:ak,disable:mk,document:uk,flow:ck,flowInitial:sk,insideSpan:dk,string:fk,text:pk},Symbol.toStringTag,{value:"Module"}));function yk(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},l=[];let o=[],u=[];const a={attempt:_(T),check:_(C),consume:m,enter:y,exit:E,interrupt:_(C,{interrupt:!0})},s={code:null,containerState:{},defineSkip:x,events:[],now:g,parser:e,previous:null,sliceSerialize:p,sliceStream:d,write:c};let f=t.tokenize.call(s,a);return t.resolveAll&&l.push(t),s;function c(D){return o=nt(o,D),S(),o[o.length-1]!==null?[]:(N(t,0),s.events=eo(l,s.events,s),s.events)}function p(D,F){return xk(d(D),F)}function d(D){return vk(o,D)}function g(){const{_bufferIndex:D,_index:F,line:J,column:ne,offset:W}=r;return{_bufferIndex:D,_index:F,line:J,column:ne,offset:W}}function x(D){i[D.line]=D.column,P()}function S(){let D;for(;r._index<o.length;){const F=o[r._index];if(typeof F=="string")for(D=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===D&&r._bufferIndex<F.length;)h(F.charCodeAt(r._bufferIndex));else h(F)}}function h(D){f=f(D)}function m(D){O(D)?(r.line++,r.column=1,r.offset+=D===-3?2:1,P()):D!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=D}function y(D,F){const J=F||{};return J.type=D,J.start=g(),s.events.push(["enter",J,s]),u.push(J),J}function E(D){const F=u.pop();return F.end=g(),s.events.push(["exit",F,s]),F}function T(D,F){N(D,F.from)}function C(D,F){F.restore()}function _(D,F){return J;function J(ne,W,he){let pe,R,B,v;return Array.isArray(ne)?X(ne):"tokenize"in ne?X([ne]):q(ne);function q(ie){return yt;function yt(Mt){const Ln=Mt!==null&&ie[Mt],Rn=Mt!==null&&ie.null,Ci=[...Array.isArray(Ln)?Ln:Ln?[Ln]:[],...Array.isArray(Rn)?Rn:Rn?[Rn]:[]];return X(Ci)(Mt)}}function X(ie){return pe=ie,R=0,ie.length===0?he:w(ie[R])}function w(ie){return yt;function yt(Mt){return v=M(),B=ie,ie.partial||(s.currentConstruct=ie),ie.name&&s.parser.constructs.disable.null.includes(ie.name)?ut():ie.tokenize.call(F?Object.assign(Object.create(s),F):s,a,ve,ut)(Mt)}}function ve(ie){return D(B,v),W}function ut(ie){return v.restore(),++R<pe.length?w(pe[R]):he}}}function N(D,F){D.resolveAll&&!l.includes(D)&&l.push(D),D.resolve&&Ke(s.events,F,s.events.length-F,D.resolve(s.events.slice(F),s)),D.resolveTo&&(s.events=D.resolveTo(s.events,s))}function M(){const D=g(),F=s.previous,J=s.currentConstruct,ne=s.events.length,W=Array.from(u);return{from:ne,restore:he};function he(){r=D,s.previous=F,s.currentConstruct=J,s.events.length=ne,u=W,P()}}function P(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function vk(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,l=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(r,l)];else{if(o=e.slice(n,i),r>-1){const u=o[0];typeof u=="string"?o[0]=u.slice(r):o.shift()}l>0&&o.push(e[i].slice(0,l))}return o}function xk(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const l=e[n];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function kk(e){const r={constructs:Lh([gk,...(e||{}).extensions||[]]),content:i(Dv),defined:[],document:i(Fv),flow:i(tk),lazy:{},string:i(ik),text:i(lk)};return r;function i(l){return o;function o(u){return yk(r,l,u)}}}function wk(e){for(;!Oh(e););return e}const pf=/[\0\t\n\r]/g;function Sk(){let e=1,t="",n=!0,r;return i;function i(l,o,u){const a=[];let s,f,c,p,d;for(l=t+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),c=0,t="",n&&(l.charCodeAt(0)===65279&&c++,n=void 0);c<l.length;){if(pf.lastIndex=c,s=pf.exec(l),p=s&&s.index!==void 0?s.index:l.length,d=l.charCodeAt(p),!s){t=l.slice(c);break}if(d===10&&c===p&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),c<p&&(a.push(l.slice(c,p)),e+=p-c),d){case 0:{a.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,a.push(-2);e++<f;)a.push(-1);break}case 10:{a.push(-4),e=1;break}default:r=!0,e=1}c=p+1}return u&&(r&&a.push(-5),t&&a.push(t),a.push(null)),a}}const Ck=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Pk(e){return e.replace(Ck,Ek)}function Ek(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),l=i===120||i===88;return Rh(n.slice(l?2:1),l?16:10)}return cs(n)||e}const Hh={}.hasOwnProperty;function bk(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Tk(n)(wk(kk(n).document().write(Sk()(e,t,!0))))}function Tk(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(Es),autolinkProtocol:M,autolinkEmail:M,atxHeading:l(Ss),blockQuote:l(Rn),characterEscape:M,characterReference:M,codeFenced:l(Ci),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l(Ci,o),codeText:l(Em,o),codeTextData:M,data:M,codeFlowValue:M,definition:l(bm),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(Tm),hardBreakEscape:l(Cs),hardBreakTrailing:l(Cs),htmlFlow:l(Ps,o),htmlFlowData:M,htmlText:l(Ps,o),htmlTextData:M,image:l(Im),label:o,link:l(Es),listItem:l(zm),listItemValue:p,listOrdered:l(bs,c),listUnordered:l(bs),paragraph:l(_m),reference:w,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(Ss),strong:l(jm),thematicBreak:l(Lm)},exit:{atxHeading:a(),atxHeadingSequence:T,autolink:a(),autolinkEmail:Ln,autolinkProtocol:Mt,blockQuote:a(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:ut,characterReferenceMarkerNumeric:ut,characterReferenceValue:ie,characterReference:yt,codeFenced:a(S),codeFencedFence:x,codeFencedFenceInfo:d,codeFencedFenceMeta:g,codeFlowValue:P,codeIndented:a(h),codeText:a(W),codeTextData:P,data:P,definition:a(),definitionDestinationString:E,definitionLabelString:m,definitionTitleString:y,emphasis:a(),hardBreakEscape:a(F),hardBreakTrailing:a(F),htmlFlow:a(J),htmlFlowData:P,htmlText:a(ne),htmlTextData:P,image:a(pe),label:B,labelText:R,lineEnding:D,link:a(he),listItem:a(),listOrdered:a(),listUnordered:a(),paragraph:a(),referenceString:ve,resourceDestinationString:v,resourceTitleString:q,resource:X,setextHeading:a(N),setextHeadingLineSequence:_,setextHeadingText:C,strong:a(),thematicBreak:a()}};Wh(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(b){let L={type:"root",children:[]};const $={stack:[L],tokenStack:[],config:t,enter:u,exit:s,buffer:o,resume:f,data:n},Q=[];let Z=-1;for(;++Z<b.length;)if(b[Z][1].type==="listOrdered"||b[Z][1].type==="listUnordered")if(b[Z][0]==="enter")Q.push(Z);else{const at=Q.pop();Z=i(b,at,Z)}for(Z=-1;++Z<b.length;){const at=t[b[Z][0]];Hh.call(at,b[Z][1].type)&&at[b[Z][1].type].call(Object.assign({sliceSerialize:b[Z][2].sliceSerialize},$),b[Z][1])}if($.tokenStack.length>0){const at=$.tokenStack[$.tokenStack.length-1];(at[1]||df).call($,void 0,at[0])}for(L.position={start:Ut(b.length>0?b[0][1].start:{line:1,column:1,offset:0}),end:Ut(b.length>0?b[b.length-2][1].end:{line:1,column:1,offset:0})},Z=-1;++Z<t.transforms.length;)L=t.transforms[Z](L)||L;return L}function i(b,L,$){let Q=L-1,Z=-1,at=!1,pn,Et,vr,xr;for(;++Q<=$;){const We=b[Q];switch(We[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{We[0]==="enter"?Z++:Z--,xr=void 0;break}case"lineEndingBlank":{We[0]==="enter"&&(pn&&!xr&&!Z&&!vr&&(vr=Q),xr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:xr=void 0}if(!Z&&We[0]==="enter"&&We[1].type==="listItemPrefix"||Z===-1&&We[0]==="exit"&&(We[1].type==="listUnordered"||We[1].type==="listOrdered")){if(pn){let Dn=Q;for(Et=void 0;Dn--;){const bt=b[Dn];if(bt[1].type==="lineEnding"||bt[1].type==="lineEndingBlank"){if(bt[0]==="exit")continue;Et&&(b[Et][1].type="lineEndingBlank",at=!0),bt[1].type="lineEnding",Et=Dn}else if(!(bt[1].type==="linePrefix"||bt[1].type==="blockQuotePrefix"||bt[1].type==="blockQuotePrefixWhitespace"||bt[1].type==="blockQuoteMarker"||bt[1].type==="listItemIndent"))break}vr&&(!Et||vr<Et)&&(pn._spread=!0),pn.end=Object.assign({},Et?b[Et][1].start:We[1].end),b.splice(Et||Q,0,["exit",pn,We[2]]),Q++,$++}if(We[1].type==="listItemPrefix"){const Dn={type:"listItem",_spread:!1,start:Object.assign({},We[1].start),end:void 0};pn=Dn,b.splice(Q,0,["enter",Dn,We[2]]),Q++,$++,vr=void 0,xr=!0}}}return b[L][1]._spread=at,$}function l(b,L){return $;function $(Q){u.call(this,b(Q),Q),L&&L.call(this,Q)}}function o(){this.stack.push({type:"fragment",children:[]})}function u(b,L,$){this.stack[this.stack.length-1].children.push(b),this.stack.push(b),this.tokenStack.push([L,$||void 0]),b.position={start:Ut(L.start),end:void 0}}function a(b){return L;function L($){b&&b.call(this,$),s.call(this,$)}}function s(b,L){const $=this.stack.pop(),Q=this.tokenStack.pop();if(Q)Q[0].type!==b.type&&(L?L.call(this,b,Q[0]):(Q[1]||df).call(this,b,Q[0]));else throw new Error("Cannot close `"+b.type+"` ("+Vr({start:b.start,end:b.end})+"): it’s not open");$.position.end=Ut(b.end)}function f(){return ss(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function p(b){if(this.data.expectingFirstListItemValue){const L=this.stack[this.stack.length-2];L.start=Number.parseInt(this.sliceSerialize(b),10),this.data.expectingFirstListItemValue=void 0}}function d(){const b=this.resume(),L=this.stack[this.stack.length-1];L.lang=b}function g(){const b=this.resume(),L=this.stack[this.stack.length-1];L.meta=b}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const b=this.resume(),L=this.stack[this.stack.length-1];L.value=b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const b=this.resume(),L=this.stack[this.stack.length-1];L.value=b.replace(/(\r?\n|\r)$/g,"")}function m(b){const L=this.resume(),$=this.stack[this.stack.length-1];$.label=L,$.identifier=mt(this.sliceSerialize(b)).toLowerCase()}function y(){const b=this.resume(),L=this.stack[this.stack.length-1];L.title=b}function E(){const b=this.resume(),L=this.stack[this.stack.length-1];L.url=b}function T(b){const L=this.stack[this.stack.length-1];if(!L.depth){const $=this.sliceSerialize(b).length;L.depth=$}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function _(b){const L=this.stack[this.stack.length-1];L.depth=this.sliceSerialize(b).codePointAt(0)===61?1:2}function N(){this.data.setextHeadingSlurpLineEnding=void 0}function M(b){const $=this.stack[this.stack.length-1].children;let Q=$[$.length-1];(!Q||Q.type!=="text")&&(Q=Nm(),Q.position={start:Ut(b.start),end:void 0},$.push(Q)),this.stack.push(Q)}function P(b){const L=this.stack.pop();L.value+=this.sliceSerialize(b),L.position.end=Ut(b.end)}function D(b){const L=this.stack[this.stack.length-1];if(this.data.atHardBreak){const $=L.children[L.children.length-1];$.position.end=Ut(b.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(L.type)&&(M.call(this,b),P.call(this,b))}function F(){this.data.atHardBreak=!0}function J(){const b=this.resume(),L=this.stack[this.stack.length-1];L.value=b}function ne(){const b=this.resume(),L=this.stack[this.stack.length-1];L.value=b}function W(){const b=this.resume(),L=this.stack[this.stack.length-1];L.value=b}function he(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const L=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=L,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function pe(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const L=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=L,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function R(b){const L=this.sliceSerialize(b),$=this.stack[this.stack.length-2];$.label=Pk(L),$.identifier=mt(L).toLowerCase()}function B(){const b=this.stack[this.stack.length-1],L=this.resume(),$=this.stack[this.stack.length-1];if(this.data.inReference=!0,$.type==="link"){const Q=b.children;$.children=Q}else $.alt=L}function v(){const b=this.resume(),L=this.stack[this.stack.length-1];L.url=b}function q(){const b=this.resume(),L=this.stack[this.stack.length-1];L.title=b}function X(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function ve(b){const L=this.resume(),$=this.stack[this.stack.length-1];$.label=L,$.identifier=mt(this.sliceSerialize(b)).toLowerCase(),this.data.referenceType="full"}function ut(b){this.data.characterReferenceType=b.type}function ie(b){const L=this.sliceSerialize(b),$=this.data.characterReferenceType;let Q;$?(Q=Rh(L,$==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Q=cs(L);const Z=this.stack[this.stack.length-1];Z.value+=Q}function yt(b){const L=this.stack.pop();L.position.end=Ut(b.end)}function Mt(b){P.call(this,b);const L=this.stack[this.stack.length-1];L.url=this.sliceSerialize(b)}function Ln(b){P.call(this,b);const L=this.stack[this.stack.length-1];L.url="mailto:"+this.sliceSerialize(b)}function Rn(){return{type:"blockquote",children:[]}}function Ci(){return{type:"code",lang:null,meta:null,value:""}}function Em(){return{type:"inlineCode",value:""}}function bm(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Tm(){return{type:"emphasis",children:[]}}function Ss(){return{type:"heading",depth:0,children:[]}}function Cs(){return{type:"break"}}function Ps(){return{type:"html",value:""}}function Im(){return{type:"image",title:null,url:"",alt:null}}function Es(){return{type:"link",title:null,url:"",children:[]}}function bs(b){return{type:"list",ordered:b.type==="listOrdered",start:null,spread:b._spread,children:[]}}function zm(b){return{type:"listItem",spread:b._spread,checked:null,children:[]}}function _m(){return{type:"paragraph",children:[]}}function jm(){return{type:"strong",children:[]}}function Nm(){return{type:"text",value:""}}function Lm(){return{type:"thematicBreak"}}}function Ut(e){return{line:e.line,column:e.column,offset:e.offset}}function Wh(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Wh(e,r):Ik(e,r)}}function Ik(e,t){let n;for(n in t)if(Hh.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function df(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Vr({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Vr({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Vr({start:t.start,end:t.end})+") is still open")}function zk(e){const t=this;t.parser=n;function n(r){return bk(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function _k(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function jk(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Nk(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(l.data={meta:t.meta}),e.patch(t,l),l=e.applyData(t,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(t,l),l}function Lk(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Rk(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Dk(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=yr(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let o,u=e.footnoteCounts.get(r);u===void 0?(u=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=l+1,u+=1,e.footnoteCounts.set(r,u);const a={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(u>1?"-"+u:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,a);const s={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(t,s),e.applyData(t,s)}function Ak(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Fk(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Qh(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Ok(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Qh(e,t);const i={src:yr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,l),e.applyData(t,l)}function Mk(e,t){const n={src:yr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Bk(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Uk(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Qh(e,t);const i={href:yr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}function $k(e,t){const n={href:yr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Vk(e,t,n){const r=e.all(t),i=n?Hk(n):Gh(t),l={},o=[];if(typeof t.checked=="boolean"){const f=r[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let u=-1;for(;++u<r.length;){const f=r[u];(i||u!==0||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?o.push(...f.children):o.push(f)}const a=r[r.length-1];a&&(i||a.type!=="element"||a.tagName!=="p")&&o.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:l,children:o};return e.patch(t,s),e.applyData(t,s)}function Hk(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Gh(n[r])}return t}function Gh(e){const t=e.spread;return t??e.children.length>1}function Wk(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const l={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,l),e.applyData(t,l)}function Qk(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Gk(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Jk(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qk(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},u=ls(t.children[1]),a=bh(t.children[t.children.length-1]);u&&a&&(o.position={start:u,end:a}),i.push(o)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,l),e.applyData(t,l)}function Kk(e,t,n){const r=n?n.children:void 0,l=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,u=o?o.length:t.children.length;let a=-1;const s=[];for(;++a<u;){const c=t.children[a],p={},d=o?o[a]:void 0;d&&(p.align=d);let g={type:"element",tagName:l,properties:p,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),s.push(g)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,f),e.applyData(t,f)}function Yk(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const hf=9,mf=32;function Xk(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const l=[];for(;r;)l.push(gf(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return l.push(gf(t.slice(i),i>0,!1)),l.join("")}function gf(e,t,n){let r=0,i=e.length;if(t){let l=e.codePointAt(r);for(;l===hf||l===mf;)r++,l=e.codePointAt(r)}if(n){let l=e.codePointAt(i-1);for(;l===hf||l===mf;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Zk(e,t){const n={type:"text",value:Xk(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function ew(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const tw={blockquote:_k,break:jk,code:Nk,delete:Lk,emphasis:Rk,footnoteReference:Dk,heading:Ak,html:Fk,imageReference:Ok,image:Mk,inlineCode:Bk,linkReference:Uk,link:$k,listItem:Vk,list:Wk,paragraph:Qk,root:Gk,strong:Jk,table:qk,tableCell:Yk,tableRow:Kk,text:Zk,thematicBreak:ew,toml:Ui,yaml:Ui,definition:Ui,footnoteDefinition:Ui};function Ui(){}const Jh=-1,to=0,Wr=1,Nl=2,ps=3,ds=4,hs=5,ms=6,qh=7,Kh=8,nw=typeof self=="object"?self:globalThis,yf=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new nw[e](t)},rw=(e,t)=>{const n=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,o]=t[i];switch(l){case to:case Jh:return n(o,i);case Wr:{const u=n([],i);for(const a of o)u.push(r(a));return u}case Nl:{const u=n({},i);for(const[a,s]of o)u[r(a)]=r(s);return u}case ps:return n(new Date(o),i);case ds:{const{source:u,flags:a}=o;return n(new RegExp(u,a),i)}case hs:{const u=n(new Map,i);for(const[a,s]of o)u.set(r(a),r(s));return u}case ms:{const u=n(new Set,i);for(const a of o)u.add(r(a));return u}case qh:{const{name:u,message:a}=o;return n(yf(u,a),i)}case Kh:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:u}=new Uint8Array(o);return n(new DataView(u),o)}}return n(yf(l,o),i)};return r},vf=e=>rw(new Map,e)(0),Fn="",{toString:iw}={},{keys:lw}=Object,zr=e=>{const t=typeof e;if(t!=="object"||!e)return[to,t];const n=iw.call(e).slice(8,-1);switch(n){case"Array":return[Wr,Fn];case"Object":return[Nl,Fn];case"Date":return[ps,Fn];case"RegExp":return[ds,Fn];case"Map":return[hs,Fn];case"Set":return[ms,Fn];case"DataView":return[Wr,n]}return n.includes("Array")?[Wr,n]:n.includes("Error")?[qh,n]:[Nl,n]},$i=([e,t])=>e===to&&(t==="function"||t==="symbol"),ow=(e,t,n,r)=>{const i=(o,u)=>{const a=r.push(o)-1;return n.set(u,a),a},l=o=>{if(n.has(o))return n.get(o);let[u,a]=zr(o);switch(u){case to:{let f=o;switch(a){case"bigint":u=Kh,f=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+a);f=null;break;case"undefined":return i([Jh],o)}return i([u,f],o)}case Wr:{if(a){let p=o;return a==="DataView"?p=new Uint8Array(o.buffer):a==="ArrayBuffer"&&(p=new Uint8Array(o)),i([a,[...p]],o)}const f=[],c=i([u,f],o);for(const p of o)f.push(l(p));return c}case Nl:{if(a)switch(a){case"BigInt":return i([a,o.toString()],o);case"Boolean":case"Number":case"String":return i([a,o.valueOf()],o)}if(t&&"toJSON"in o)return l(o.toJSON());const f=[],c=i([u,f],o);for(const p of lw(o))(e||!$i(zr(o[p])))&&f.push([l(p),l(o[p])]);return c}case ps:return i([u,o.toISOString()],o);case ds:{const{source:f,flags:c}=o;return i([u,{source:f,flags:c}],o)}case hs:{const f=[],c=i([u,f],o);for(const[p,d]of o)(e||!($i(zr(p))||$i(zr(d))))&&f.push([l(p),l(d)]);return c}case ms:{const f=[],c=i([u,f],o);for(const p of o)(e||!$i(zr(p)))&&f.push(l(p));return c}}const{message:s}=o;return i([u,{name:a,message:s}],o)};return l},xf=(e,{json:t,lossy:n}={})=>{const r=[];return ow(!(t||n),!!t,new Map,r)(e),r},Ll=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?vf(xf(e,t)):structuredClone(e):(e,t)=>vf(xf(e,t));function uw(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function aw(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function sw(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||uw,r=e.options.footnoteBackLabel||aw,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},u=[];let a=-1;for(;++a<e.footnoteOrder.length;){const s=e.footnoteById.get(e.footnoteOrder[a]);if(!s)continue;const f=e.all(s),c=String(s.identifier).toUpperCase(),p=yr(c.toLowerCase());let d=0;const g=[],x=e.footnoteCounts.get(c);for(;x!==void 0&&++d<=x;){g.length>0&&g.push({type:"text",value:" "});let m=typeof n=="string"?n:n(a,d);typeof m=="string"&&(m={type:"text",value:m}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(d>1?"-"+d:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(a,d),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const S=f[f.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const m=S.children[S.children.length-1];m&&m.type==="text"?m.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...g)}else f.push(...g);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(f,!0)};e.patch(s,h),u.push(h)}if(u.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...Ll(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(u,!0)},{type:"text",value:`
`}]}}const no=function(e){if(e==null)return dw;if(typeof e=="function")return ro(e);if(typeof e=="object")return Array.isArray(e)?cw(e):fw(e);if(typeof e=="string")return pw(e);throw new Error("Expected function, string, or object as test")};function cw(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=no(e[n]);return ro(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].apply(this,i))return!0;return!1}}function fw(e){const t=e;return ro(n);function n(r){const i=r;let l;for(l in e)if(i[l]!==t[l])return!1;return!0}}function pw(e){return ro(t);function t(n){return n&&n.type===e}}function ro(e){return t;function t(n,r,i){return!!(hw(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function dw(){return!0}function hw(e){return e!==null&&typeof e=="object"&&"type"in e}const Yh=[],mw=!0,Xu=!1,gw="skip";function Xh(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const l=no(i),o=r?-1:1;u(e,void 0,[])();function u(a,s,f){const c=a&&typeof a=="object"?a:{};if(typeof c.type=="string"){const d=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(a.type+(d?"<"+d+">":""))+")"})}return p;function p(){let d=Yh,g,x,S;if((!t||l(a,s,f[f.length-1]||void 0))&&(d=yw(n(a,f)),d[0]===Xu))return d;if("children"in a&&a.children){const h=a;if(h.children&&d[0]!==gw)for(x=(r?h.children.length:-1)+o,S=f.concat(h);x>-1&&x<h.children.length;){const m=h.children[x];if(g=u(m,x,S)(),g[0]===Xu)return g;x=typeof g[1]=="number"?g[1]:x+o}}return d}}}function yw(e){return Array.isArray(e)?e:typeof e=="number"?[mw,e]:e==null?Yh:[e]}function gs(e,t,n,r){let i,l,o;typeof t=="function"&&typeof n!="function"?(l=void 0,o=t,i=n):(l=t,o=n,i=r),Xh(e,l,u,i);function u(a,s){const f=s[s.length-1],c=f?f.children.indexOf(a):void 0;return o(a,c,f)}}const Zu={}.hasOwnProperty,vw={};function xw(e,t){const n=t||vw,r=new Map,i=new Map,l=new Map,o={...tw,...n.handlers},u={all:s,applyData:ww,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:o,one:a,options:n,patch:kw,wrap:Cw};return gs(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?r:i,p=String(f.identifier).toUpperCase();c.has(p)||c.set(p,f)}}),u;function a(f,c){const p=f.type,d=u.handlers[p];if(Zu.call(u.handlers,p)&&d)return d(u,f,c);if(u.options.passThrough&&u.options.passThrough.includes(p)){if("children"in f){const{children:x,...S}=f,h=Ll(S);return h.children=u.all(f),h}return Ll(f)}return(u.options.unknownHandler||Sw)(u,f,c)}function s(f){const c=[];if("children"in f){const p=f.children;let d=-1;for(;++d<p.length;){const g=u.one(p[d],f);if(g){if(d&&p[d-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=kf(g.value)),!Array.isArray(g)&&g.type==="element")){const x=g.children[0];x&&x.type==="text"&&(x.value=kf(x.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function kw(e,t){e.position&&(t.position=uv(e))}function ww(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&l&&Object.assign(n.properties,Ll(l)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Sw(e,t){const n=t.data||{},r="value"in t&&!(Zu.call(n,"hProperties")||Zu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Cw(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function kf(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function wf(e,t){const n=xw(e,t),r=n.one(e,void 0),i=sw(n),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function Pw(e,t){return e&&"run"in e?async function(n,r){const i=wf(n,{file:r,...t});await e.run(i,r)}:function(n,r){return wf(n,{file:r,...e||t})}}function Sf(e){if(e)throw e}var il=Object.prototype.hasOwnProperty,Zh=Object.prototype.toString,Cf=Object.defineProperty,Pf=Object.getOwnPropertyDescriptor,Ef=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Zh.call(t)==="[object Array]"},bf=function(t){if(!t||Zh.call(t)!=="[object Object]")return!1;var n=il.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&il.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||il.call(t,i)},Tf=function(t,n){Cf&&n.name==="__proto__"?Cf(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},If=function(t,n){if(n==="__proto__")if(il.call(t,n)){if(Pf)return Pf(t,n).value}else return;return t[n]},Ew=function e(){var t,n,r,i,l,o,u=arguments[0],a=1,s=arguments.length,f=!1;for(typeof u=="boolean"&&(f=u,u=arguments[1]||{},a=2),(u==null||typeof u!="object"&&typeof u!="function")&&(u={});a<s;++a)if(t=arguments[a],t!=null)for(n in t)r=If(u,n),i=If(t,n),u!==i&&(f&&i&&(bf(i)||(l=Ef(i)))?(l?(l=!1,o=r&&Ef(r)?r:[]):o=r&&bf(r)?r:{},Tf(u,{name:n,newValue:e(f,o,i)})):typeof i<"u"&&Tf(u,{name:n,newValue:i}));return u};const Ao=ra(Ew);function ea(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function bw(){const e=[],t={run:n,use:r};return t;function n(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);u(null,...i);function u(a,...s){const f=e[++l];let c=-1;if(a){o(a);return}for(;++c<i.length;)(s[c]===null||s[c]===void 0)&&(s[c]=i[c]);i=s,f?Tw(f,u)(...s):o(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Tw(e,t){let n;return r;function r(...o){const u=e.length>o.length;let a;u&&o.push(i);try{a=e.apply(this,o)}catch(s){const f=s;if(u&&n)throw f;return i(f)}u||(a&&a.then&&typeof a.then=="function"?a.then(l,i):a instanceof Error?i(a):l(a))}function i(o,...u){n||(n=!0,t(o,...u))}function l(o){i(null,o)}}const kt={basename:Iw,dirname:zw,extname:_w,join:jw,sep:"/"};function Iw(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Si(e);let n=0,r=-1,i=e.length,l;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,u=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else o<0&&(l=!0,o=i+1),u>-1&&(e.codePointAt(i)===t.codePointAt(u--)?u<0&&(r=i):(u=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function zw(e){if(Si(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function _w(e){Si(e);let t=e.length,n=-1,r=0,i=-1,l=0,o;for(;t--;){const u=e.codePointAt(t);if(u===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),u===46?i<0?i=t:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||n<0||l===0||l===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function jw(...e){let t=-1,n;for(;++t<e.length;)Si(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Nw(n)}function Nw(e){Si(e);const t=e.codePointAt(0)===47;let n=Lw(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Lw(e,t){let n="",r=0,i=-1,l=0,o=-1,u,a;for(;++o<=e.length;){if(o<e.length)u=e.codePointAt(o);else{if(u===47)break;u=47}if(u===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(a=n.lastIndexOf("/"),a!==n.length-1){a<0?(n="",r=0):(n=n.slice(0,a),r=n.length-1-n.lastIndexOf("/")),i=o,l=0;continue}}else if(n.length>0){n="",r=0,i=o,l=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,l=0}else u===46&&l>-1?l++:l=-1}return n}function Si(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Rw={cwd:Dw};function Dw(){return"/"}function ta(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Aw(e){if(typeof e=="string")e=new URL(e);else if(!ta(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Fw(e)}function Fw(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Fo=["history","path","basename","stem","extname","dirname"];class em{constructor(t){let n;t?ta(t)?n={path:t}:typeof t=="string"||Ow(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Rw.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Fo.length;){const l=Fo[r];l in n&&n[l]!==void 0&&n[l]!==null&&(this[l]=l==="history"?[...n[l]]:n[l])}let i;for(i in n)Fo.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?kt.basename(this.path):void 0}set basename(t){Mo(t,"basename"),Oo(t,"basename"),this.path=kt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?kt.dirname(this.path):void 0}set dirname(t){zf(this.basename,"dirname"),this.path=kt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?kt.extname(this.path):void 0}set extname(t){if(Oo(t,"extname"),zf(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=kt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){ta(t)&&(t=Aw(t)),Mo(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?kt.basename(this.path,this.extname):void 0}set stem(t){Mo(t,"stem"),Oo(t,"stem"),this.path=kt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Ne(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Oo(e,t){if(e&&e.includes(kt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+kt.sep+"`")}function Mo(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function zf(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Ow(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Mw=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},Bw={}.hasOwnProperty;class ys extends Mw{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=bw()}copy(){const t=new ys;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ao(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?($o("data",this.frozen),this.namespace[t]=n,this):Bw.call(this.namespace,t)&&this.namespace[t]||void 0:t?($o("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Vi(t),r=this.parser||this.Parser;return Bo("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Bo("process",this.parser||this.Parser),Uo("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(l,o){const u=Vi(t),a=r.parse(u);r.run(a,u,function(f,c,p){if(f||!c||!p)return s(f);const d=c,g=r.stringify(d,p);Vw(g)?p.value=g:p.result=g,s(f,p)});function s(f,c){f||!c?o(f):l?l(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),Bo("processSync",this.parser||this.Parser),Uo("processSync",this.compiler||this.Compiler),this.process(t,i),jf("processSync","process",n),r;function i(l,o){n=!0,Sf(l),r=o}}run(t,n,r){_f(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?l(void 0,r):new Promise(l);function l(o,u){const a=Vi(n);i.run(t,a,s);function s(f,c,p){const d=c||t;f?u(f):o?o(d):r(void 0,d,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,l),jf("runSync","run",r),i;function l(o,u){Sf(o),i=u,r=!0}}stringify(t,n){this.freeze();const r=Vi(n),i=this.compiler||this.Compiler;return Uo("stringify",i),_f(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if($o("use",this.frozen),t!=null)if(typeof t=="function")a(t,n);else if(typeof t=="object")Array.isArray(t)?u(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function l(s){if(typeof s=="function")a(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[f,...c]=s;a(f,c)}else o(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function o(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");u(s.plugins),s.settings&&(i.settings=Ao(!0,i.settings,s.settings))}function u(s){let f=-1;if(s!=null)if(Array.isArray(s))for(;++f<s.length;){const c=s[f];l(c)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function a(s,f){let c=-1,p=-1;for(;++c<r.length;)if(r[c][0]===s){p=c;break}if(p===-1)r.push([s,...f]);else if(f.length>0){let[d,...g]=f;const x=r[p][1];ea(x)&&ea(d)&&(d=Ao(!0,x,d)),r[p]=[s,d,...g]}}}}const Uw=new ys().freeze();function Bo(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Uo(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function $o(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function _f(e){if(!ea(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function jf(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Vi(e){return $w(e)?e:new em(e)}function $w(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Vw(e){return typeof e=="string"||Hw(e)}function Hw(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ww="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Nf=[],Lf={allowDangerousHtml:!0},Qw=/^(https?|ircs?|mailto|xmpp)$/i,Gw=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function tm(e){const t=Jw(e),n=qw(e);return Kw(t.runSync(t.parse(n),n),e)}function Jw(e){const t=e.rehypePlugins||Nf,n=e.remarkPlugins||Nf,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Lf}:Lf;return Uw().use(zk).use(n).use(Pw,r).use(t)}function qw(e){const t=e.children||"",n=new em;return typeof t=="string"&&(n.value=t),n}function Kw(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,l=t.disallowedElements,o=t.skipHtml,u=t.unwrapDisallowed,a=t.urlTransform||Yw;for(const f of Gw)Object.hasOwn(t,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+Ww+f.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),gs(e,s),pv(e,{Fragment:k.Fragment,components:i,ignoreInvalidStyle:!0,jsx:k.jsx,jsxs:k.jsxs,passKeys:!0,passNode:!0});function s(f,c,p){if(f.type==="raw"&&p&&typeof c=="number")return o?p.children.splice(c,1):p.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let d;for(d in Lo)if(Object.hasOwn(Lo,d)&&Object.hasOwn(f.properties,d)){const g=f.properties[d],x=Lo[d];(x===null||x.includes(f.tagName))&&(f.properties[d]=a(String(g||""),d,f))}}if(f.type==="element"){let d=n?!n.includes(f.tagName):l?l.includes(f.tagName):!1;if(!d&&r&&typeof c=="number"&&(d=!r(f,c,p)),d&&p&&typeof c=="number")return u&&f.children?p.children.splice(c,1,...f.children):p.children.splice(c,1),c}}}function Yw(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Qw.test(e.slice(0,t))?e:""}function Rf(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Xw(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Zw(e,t,n){const i=no((n||{}).ignore||[]),l=eS(t);let o=-1;for(;++o<l.length;)Xh(e,"text",u);function u(s,f){let c=-1,p;for(;++c<f.length;){const d=f[c],g=p?p.children:void 0;if(i(d,g?g.indexOf(d):void 0,p))return;p=d}if(p)return a(s,f)}function a(s,f){const c=f[f.length-1],p=l[o][0],d=l[o][1];let g=0;const S=c.children.indexOf(s);let h=!1,m=[];p.lastIndex=0;let y=p.exec(s.value);for(;y;){const E=y.index,T={index:y.index,input:y.input,stack:[...f,s]};let C=d(...y,T);if(typeof C=="string"&&(C=C.length>0?{type:"text",value:C}:void 0),C===!1?p.lastIndex=E+1:(g!==E&&m.push({type:"text",value:s.value.slice(g,E)}),Array.isArray(C)?m.push(...C):C&&m.push(C),g=E+y[0].length,h=!0),!p.global)break;y=p.exec(s.value)}return h?(g<s.value.length&&m.push({type:"text",value:s.value.slice(g)}),c.children.splice(S,1,...m)):m=[s],S+m.length}}function eS(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([tS(i[0]),nS(i[1])])}return t}function tS(e){return typeof e=="string"?new RegExp(Xw(e),"g"):e}function nS(e){return typeof e=="function"?e:function(){return e}}const Vo="phrasing",Ho=["autolink","link","image","label"];function rS(){return{transforms:[cS],enter:{literalAutolink:lS,literalAutolinkEmail:Wo,literalAutolinkHttp:Wo,literalAutolinkWww:Wo},exit:{literalAutolink:sS,literalAutolinkEmail:aS,literalAutolinkHttp:oS,literalAutolinkWww:uS}}}function iS(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Vo,notInConstruct:Ho},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Vo,notInConstruct:Ho},{character:":",before:"[ps]",after:"\\/",inConstruct:Vo,notInConstruct:Ho}]}}function lS(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Wo(e){this.config.enter.autolinkProtocol.call(this,e)}function oS(e){this.config.exit.autolinkProtocol.call(this,e)}function uS(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function aS(e){this.config.exit.autolinkEmail.call(this,e)}function sS(e){this.exit(e)}function cS(e){Zw(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,fS],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),pS]],{ignore:["link","linkReference"]})}function fS(e,t,n,r,i){let l="";if(!nm(i)||(/^w/i.test(t)&&(n=t+n,t="",l="http://"),!dS(n)))return!1;const o=hS(n+r);if(!o[0])return!1;const u={type:"link",title:null,url:l+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[u,{type:"text",value:o[1]}]:u}function pS(e,t,n,r){return!nm(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function dS(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function hS(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=Rf(e,"(");let l=Rf(e,")");for(;r!==-1&&i>l;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),l++;return[e,n]}function nm(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||In(n)||Zl(n))&&(!t||n!==47)}rm.peek=CS;function mS(){this.buffer()}function gS(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function yS(){this.buffer()}function vS(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function xS(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=mt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function kS(e){this.exit(e)}function wS(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=mt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function SS(e){this.exit(e)}function CS(){return"["}function rm(e,t,n,r){const i=n.createTracker(r);let l=i.move("[^");const o=n.enter("footnoteReference"),u=n.enter("reference");return l+=i.move(n.safe(n.associationId(e),{after:"]",before:l})),u(),o(),l+=i.move("]"),l}function PS(){return{enter:{gfmFootnoteCallString:mS,gfmFootnoteCall:gS,gfmFootnoteDefinitionLabelString:yS,gfmFootnoteDefinition:vS},exit:{gfmFootnoteCallString:xS,gfmFootnoteCall:kS,gfmFootnoteDefinitionLabelString:wS,gfmFootnoteDefinition:SS}}}function ES(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:rm},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,l,o){const u=l.createTracker(o);let a=u.move("[^");const s=l.enter("footnoteDefinition"),f=l.enter("label");return a+=u.move(l.safe(l.associationId(r),{before:a,after:"]"})),f(),a+=u.move("]:"),r.children&&r.children.length>0&&(u.shift(4),a+=u.move((t?`
`:" ")+l.indentLines(l.containerFlow(r,u.current()),t?im:bS))),s(),a}}function bS(e,t,n){return t===0?e:im(e,t,n)}function im(e,t,n){return(n?"":"    ")+e}const TS=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];lm.peek=NS;function IS(){return{canContainEols:["delete"],enter:{strikethrough:_S},exit:{strikethrough:jS}}}function zS(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:TS}],handlers:{delete:lm}}}function _S(e){this.enter({type:"delete",children:[]},e)}function jS(e){this.exit(e)}function lm(e,t,n,r){const i=n.createTracker(r),l=n.enter("strikethrough");let o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),l(),o}function NS(){return"~"}function LS(e){return e.length}function RS(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||LS,l=[],o=[],u=[],a=[];let s=0,f=-1;for(;++f<e.length;){const x=[],S=[];let h=-1;for(e[f].length>s&&(s=e[f].length);++h<e[f].length;){const m=DS(e[f][h]);if(n.alignDelimiters!==!1){const y=i(m);S[h]=y,(a[h]===void 0||y>a[h])&&(a[h]=y)}x.push(m)}o[f]=x,u[f]=S}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<s;)l[c]=Df(r[c]);else{const x=Df(r);for(;++c<s;)l[c]=x}c=-1;const p=[],d=[];for(;++c<s;){const x=l[c];let S="",h="";x===99?(S=":",h=":"):x===108?S=":":x===114&&(h=":");let m=n.alignDelimiters===!1?1:Math.max(1,a[c]-S.length-h.length);const y=S+"-".repeat(m)+h;n.alignDelimiters!==!1&&(m=S.length+m+h.length,m>a[c]&&(a[c]=m),d[c]=m),p[c]=y}o.splice(1,0,p),u.splice(1,0,d),f=-1;const g=[];for(;++f<o.length;){const x=o[f],S=u[f];c=-1;const h=[];for(;++c<s;){const m=x[c]||"";let y="",E="";if(n.alignDelimiters!==!1){const T=a[c]-(S[c]||0),C=l[c];C===114?y=" ".repeat(T):C===99?T%2?(y=" ".repeat(T/2+.5),E=" ".repeat(T/2-.5)):(y=" ".repeat(T/2),E=y):E=" ".repeat(T)}n.delimiterStart!==!1&&!c&&h.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&m==="")&&(n.delimiterStart!==!1||c)&&h.push(" "),n.alignDelimiters!==!1&&h.push(y),h.push(m),n.alignDelimiters!==!1&&h.push(E),n.padding!==!1&&h.push(" "),(n.delimiterEnd!==!1||c!==s-1)&&h.push("|")}g.push(n.delimiterEnd===!1?h.join("").replace(/ +$/,""):h.join(""))}return g.join(`
`)}function DS(e){return e==null?"":String(e)}function Df(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function AS(e,t,n,r){const i=n.enter("blockquote"),l=n.createTracker(r);l.move("> "),l.shift(2);const o=n.indentLines(n.containerFlow(e,l.current()),FS);return i(),o}function FS(e,t,n){return">"+(n?"":" ")+e}function OS(e,t){return Af(e,t.inConstruct,!0)&&!Af(e,t.notInConstruct,!1)}function Af(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Ff(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&OS(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function MS(e,t){const n=String(e);let r=n.indexOf(t),i=r,l=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++l>o&&(o=l):l=1,i=r+t.length,r=n.indexOf(t,i);return o}function BS(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function US(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function $S(e,t,n,r){const i=US(n),l=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(BS(e,n)){const c=n.enter("codeIndented"),p=n.indentLines(l,VS);return c(),p}const u=n.createTracker(r),a=i.repeat(Math.max(MS(l,i)+1,3)),s=n.enter("codeFenced");let f=u.move(a);if(e.lang){const c=n.enter(`codeFencedLang${o}`);f+=u.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...u.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${o}`);f+=u.move(" "),f+=u.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...u.current()})),c()}return f+=u.move(`
`),l&&(f+=u.move(l+`
`)),f+=u.move(a),s(),f}function VS(e,t,n){return(n?"":"    ")+e}function vs(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function HS(e,t,n,r){const i=vs(n),l=i==='"'?"Quote":"Apostrophe",o=n.enter("definition");let u=n.enter("label");const a=n.createTracker(r);let s=a.move("[");return s+=a.move(n.safe(n.associationId(e),{before:s,after:"]",...a.current()})),s+=a.move("]: "),u(),!e.url||/[\0- \u007F]/.test(e.url)?(u=n.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(n.safe(e.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=n.enter("destinationRaw"),s+=a.move(n.safe(e.url,{before:s,after:e.title?" ":`
`,...a.current()}))),u(),e.title&&(u=n.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(n.safe(e.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),o(),s}function WS(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function pi(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Rl(e,t,n){const r=cr(e),i=cr(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}om.peek=QS;function om(e,t,n,r){const i=WS(n),l=n.enter("emphasis"),o=n.createTracker(r),u=o.move(i);let a=o.move(n.containerPhrasing(e,{after:i,before:u,...o.current()}));const s=a.charCodeAt(0),f=Rl(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(a=pi(s)+a.slice(1));const c=a.charCodeAt(a.length-1),p=Rl(r.after.charCodeAt(0),c,i);p.inside&&(a=a.slice(0,-1)+pi(c));const d=o.move(i);return l(),n.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},u+a+d}function QS(e,t,n){return n.options.emphasis||"*"}function GS(e,t){let n=!1;return gs(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Xu}),!!((!e.depth||e.depth<3)&&ss(e)&&(t.options.setext||n))}function JS(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),l=n.createTracker(r);if(GS(e,n)){const f=n.enter("headingSetext"),c=n.enter("phrasing"),p=n.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return c(),f(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const o="#".repeat(i),u=n.enter("headingAtx"),a=n.enter("phrasing");l.move(o+" ");let s=n.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(s)&&(s=pi(s.charCodeAt(0))+s.slice(1)),s=s?o+" "+s:o,n.options.closeAtx&&(s+=" "+o),a(),u(),s}um.peek=qS;function um(e){return e.value||""}function qS(){return"<"}am.peek=KS;function am(e,t,n,r){const i=vs(n),l=i==='"'?"Quote":"Apostrophe",o=n.enter("image");let u=n.enter("label");const a=n.createTracker(r);let s=a.move("![");return s+=a.move(n.safe(e.alt,{before:s,after:"]",...a.current()})),s+=a.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=n.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(n.safe(e.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=n.enter("destinationRaw"),s+=a.move(n.safe(e.url,{before:s,after:e.title?" ":")",...a.current()}))),u(),e.title&&(u=n.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(n.safe(e.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),s+=a.move(")"),o(),s}function KS(){return"!"}sm.peek=YS;function sm(e,t,n,r){const i=e.referenceType,l=n.enter("imageReference");let o=n.enter("label");const u=n.createTracker(r);let a=u.move("![");const s=n.safe(e.alt,{before:a,after:"]",...u.current()});a+=u.move(s+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(e),{before:a,after:"]",...u.current()});return o(),n.stack=f,l(),i==="full"||!s||s!==c?a+=u.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=u.move("]"),a}function YS(){return"!"}cm.peek=XS;function cm(e,t,n){let r=e.value||"",i="`",l=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<n.unsafe.length;){const o=n.unsafe[l],u=n.compilePattern(o);let a;if(o.atBreak)for(;a=u.exec(r);){let s=a.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(a.index+1)}}return i+r+i}function XS(){return"`"}function fm(e,t){const n=ss(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}pm.peek=ZS;function pm(e,t,n,r){const i=vs(n),l=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r);let u,a;if(fm(e,n)){const f=n.stack;n.stack=[],u=n.enter("autolink");let c=o.move("<");return c+=o.move(n.containerPhrasing(e,{before:c,after:">",...o.current()})),c+=o.move(">"),u(),n.stack=f,c}u=n.enter("link"),a=n.enter("label");let s=o.move("[");return s+=o.move(n.containerPhrasing(e,{before:s,after:"](",...o.current()})),s+=o.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),s+=o.move("<"),s+=o.move(n.safe(e.url,{before:s,after:">",...o.current()})),s+=o.move(">")):(a=n.enter("destinationRaw"),s+=o.move(n.safe(e.url,{before:s,after:e.title?" ":")",...o.current()}))),a(),e.title&&(a=n.enter(`title${l}`),s+=o.move(" "+i),s+=o.move(n.safe(e.title,{before:s,after:i,...o.current()})),s+=o.move(i),a()),s+=o.move(")"),u(),s}function ZS(e,t,n){return fm(e,n)?"<":"["}dm.peek=eC;function dm(e,t,n,r){const i=e.referenceType,l=n.enter("linkReference");let o=n.enter("label");const u=n.createTracker(r);let a=u.move("[");const s=n.containerPhrasing(e,{before:a,after:"]",...u.current()});a+=u.move(s+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(e),{before:a,after:"]",...u.current()});return o(),n.stack=f,l(),i==="full"||!s||s!==c?a+=u.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=u.move("]"),a}function eC(){return"["}function xs(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function tC(e){const t=xs(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function nC(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function hm(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function rC(e,t,n,r){const i=n.enter("list"),l=n.bulletCurrent;let o=e.ordered?nC(n):xs(n);const u=e.ordered?o==="."?")":".":tC(n);let a=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(a=!0),hm(n)===o&&f){let c=-1;for(;++c<e.children.length;){const p=e.children[c];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){a=!0;break}}}}a&&(o=u),n.bulletCurrent=o;const s=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=l,i(),s}function iC(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function lC(e,t,n,r){const i=iC(n);let l=n.bulletCurrent||xs(n);t&&t.type==="list"&&t.ordered&&(l=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+l);let o=l.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);const u=n.createTracker(r);u.move(l+" ".repeat(o-l.length)),u.shift(o);const a=n.enter("listItem"),s=n.indentLines(n.containerFlow(e,u.current()),f);return a(),s;function f(c,p,d){return p?(d?"":" ".repeat(o))+c:(d?l:l+" ".repeat(o-l.length))+c}}function oC(e,t,n,r){const i=n.enter("paragraph"),l=n.enter("phrasing"),o=n.containerPhrasing(e,r);return l(),i(),o}const uC=no(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function aC(e,t,n,r){return(e.children.some(function(o){return uC(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function sC(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}mm.peek=cC;function mm(e,t,n,r){const i=sC(n),l=n.enter("strong"),o=n.createTracker(r),u=o.move(i+i);let a=o.move(n.containerPhrasing(e,{after:i,before:u,...o.current()}));const s=a.charCodeAt(0),f=Rl(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(a=pi(s)+a.slice(1));const c=a.charCodeAt(a.length-1),p=Rl(r.after.charCodeAt(0),c,i);p.inside&&(a=a.slice(0,-1)+pi(c));const d=o.move(i+i);return l(),n.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},u+a+d}function cC(e,t,n){return n.options.strong||"*"}function fC(e,t,n,r){return n.safe(e.value,r)}function pC(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function dC(e,t,n){const r=(hm(n)+(n.options.ruleSpaces?" ":"")).repeat(pC(n));return n.options.ruleSpaces?r.slice(0,-1):r}const gm={blockquote:AS,break:Ff,code:$S,definition:HS,emphasis:om,hardBreak:Ff,heading:JS,html:um,image:am,imageReference:sm,inlineCode:cm,link:pm,linkReference:dm,list:rC,listItem:lC,paragraph:oC,root:aC,strong:mm,text:fC,thematicBreak:dC};function hC(){return{enter:{table:mC,tableData:Of,tableHeader:Of,tableRow:yC},exit:{codeText:vC,table:gC,tableData:Qo,tableHeader:Qo,tableRow:Qo}}}function mC(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function gC(e){this.exit(e),this.data.inTable=void 0}function yC(e){this.enter({type:"tableRow",children:[]},e)}function Qo(e){this.exit(e)}function Of(e){this.enter({type:"tableCell",children:[]},e)}function vC(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,xC));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function xC(e,t){return t==="|"?t:e}function kC(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,l=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:o,tableCell:a,tableRow:u}};function o(d,g,x,S){return s(f(d,x,S),d.align)}function u(d,g,x,S){const h=c(d,x,S),m=s([h]);return m.slice(0,m.indexOf(`
`))}function a(d,g,x,S){const h=x.enter("tableCell"),m=x.enter("phrasing"),y=x.containerPhrasing(d,{...S,before:l,after:l});return m(),h(),y}function s(d,g){return RS(d,{align:g,alignDelimiters:r,padding:n,stringLength:i})}function f(d,g,x){const S=d.children;let h=-1;const m=[],y=g.enter("table");for(;++h<S.length;)m[h]=c(S[h],g,x);return y(),m}function c(d,g,x){const S=d.children;let h=-1;const m=[],y=g.enter("tableRow");for(;++h<S.length;)m[h]=a(S[h],d,g,x);return y(),m}function p(d,g,x){let S=gm.inlineCode(d,g,x);return x.stack.includes("tableCell")&&(S=S.replace(/\|/g,"\\$&")),S}}function wC(){return{exit:{taskListCheckValueChecked:Mf,taskListCheckValueUnchecked:Mf,paragraph:CC}}}function SC(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:PC}}}function Mf(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function CC(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let l=-1,o;for(;++l<i.length;){const u=i[l];if(u.type==="paragraph"){o=u;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function PC(e,t,n,r){const i=e.children[0],l=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",u=n.createTracker(r);l&&u.move(o);let a=gm.listItem(e,t,n,{...r,...u.current()});return l&&(a=a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),a;function s(f){return f+o}}function EC(){return[rS(),PS(),IS(),hC(),wC()]}function bC(e){return{extensions:[iS(),ES(e),zS(),kC(e),SC()]}}const TC={tokenize:LC,partial:!0},ym={tokenize:RC,partial:!0},vm={tokenize:DC,partial:!0},xm={tokenize:AC,partial:!0},IC={tokenize:FC,partial:!0},km={name:"wwwAutolink",tokenize:jC,previous:Sm},wm={name:"protocolAutolink",tokenize:NC,previous:Cm},Ot={name:"emailAutolink",tokenize:_C,previous:Pm},Pt={};function zC(){return{text:Pt}}let dn=48;for(;dn<123;)Pt[dn]=Ot,dn++,dn===58?dn=65:dn===91&&(dn=97);Pt[43]=Ot;Pt[45]=Ot;Pt[46]=Ot;Pt[95]=Ot;Pt[72]=[Ot,wm];Pt[104]=[Ot,wm];Pt[87]=[Ot,km];Pt[119]=[Ot,km];function _C(e,t,n){const r=this;let i,l;return o;function o(c){return!na(c)||!Pm.call(r,r.previous)||ks(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),u(c))}function u(c){return na(c)?(e.consume(c),u):c===64?(e.consume(c),a):n(c)}function a(c){return c===46?e.check(IC,f,s)(c):c===45||c===95||_e(c)?(l=!0,e.consume(c),a):f(c)}function s(c){return e.consume(c),i=!0,a}function f(c){return l&&i&&Re(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function jC(e,t,n){const r=this;return i;function i(o){return o!==87&&o!==119||!Sm.call(r,r.previous)||ks(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(TC,e.attempt(ym,e.attempt(vm,l),n),n)(o))}function l(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function NC(e,t,n){const r=this;let i="",l=!1;return o;function o(c){return(c===72||c===104)&&Cm.call(r,r.previous)&&!ks(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),u):n(c)}function u(c){if(Re(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),u;if(c===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(c),a}return n(c)}function a(c){return c===47?(e.consume(c),l?s:(l=!0,a)):n(c)}function s(c){return c===null||jl(c)||te(c)||In(c)||Zl(c)?n(c):e.attempt(ym,e.attempt(vm,f),n)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function LC(e,t,n){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),l):n(o)}function l(o){return o===null?n(o):t(o)}}function RC(e,t,n){let r,i,l;return o;function o(s){return s===46||s===95?e.check(xm,a,u)(s):s===null||te(s)||In(s)||s!==45&&Zl(s)?a(s):(l=!0,e.consume(s),o)}function u(s){return s===95?r=!0:(i=r,r=void 0),e.consume(s),o}function a(s){return i||r||!l?n(s):t(s)}}function DC(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?l(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(xm,t,l)(o):o===null||te(o)||In(o)?t(o):(e.consume(o),i)}function l(o){return o===41&&r++,e.consume(o),i}}function AC(e,t,n){return r;function r(u){return u===33||u===34||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===63||u===95||u===126?(e.consume(u),r):u===38?(e.consume(u),l):u===93?(e.consume(u),i):u===60||u===null||te(u)||In(u)?t(u):n(u)}function i(u){return u===null||u===40||u===91||te(u)||In(u)?t(u):r(u)}function l(u){return Re(u)?o(u):n(u)}function o(u){return u===59?(e.consume(u),r):Re(u)?(e.consume(u),o):n(u)}}function FC(e,t,n){return r;function r(l){return e.consume(l),i}function i(l){return _e(l)?n(l):t(l)}}function Sm(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||te(e)}function Cm(e){return!Re(e)}function Pm(e){return!(e===47||na(e))}function na(e){return e===43||e===45||e===46||e===95||_e(e)}function ks(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const OC={tokenize:QC,partial:!0};function MC(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:VC,continuation:{tokenize:HC},exit:WC}},text:{91:{name:"gfmFootnoteCall",tokenize:$C},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:BC,resolveTo:UC}}}}function BC(e,t,n){const r=this;let i=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const a=r.events[i][1];if(a.type==="labelImage"){o=a;break}if(a.type==="gfmFootnoteCall"||a.type==="labelLink"||a.type==="label"||a.type==="image"||a.type==="link")break}return u;function u(a){if(!o||!o._balanced)return n(a);const s=mt(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!l.includes(s.slice(1))?n(a):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(a),e.exit("gfmFootnoteCallLabelMarker"),t(a))}}function UC(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},u=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",l,t],["enter",o,t],["exit",o,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...u),e}function $C(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,o;return u;function u(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),a}function a(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(c){if(l>999||c===93&&!o||c===null||c===91||te(c))return n(c);if(c===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(mt(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return te(c)||(o=!0),l++,e.consume(c),c===92?f:s}function f(c){return c===91||c===92||c===93?(e.consume(c),l++,s):s(c)}}function VC(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,o=0,u;return a;function a(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),s}function s(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(g)}function f(g){if(o>999||g===93&&!u||g===null||g===91||te(g))return n(g);if(g===93){e.exit("chunkString");const x=e.exit("gfmFootnoteDefinitionLabelString");return l=mt(r.sliceSerialize(x)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return te(g)||(u=!0),o++,e.consume(g),g===92?c:f}function c(g){return g===91||g===92||g===93?(e.consume(g),o++,f):f(g)}function p(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(l)||i.push(l),G(e,d,"gfmFootnoteDefinitionWhitespace")):n(g)}function d(g){return t(g)}}function HC(e,t,n){return e.check(wi,t,e.attempt(OC,t,n))}function WC(e){e.exit("gfmFootnoteDefinition")}function QC(e,t,n){const r=this;return G(e,i,"gfmFootnoteDefinitionIndent",5);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(l):n(l)}}function GC(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:l,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,u){let a=-1;for(;++a<o.length;)if(o[a][0]==="enter"&&o[a][1].type==="strikethroughSequenceTemporary"&&o[a][1]._close){let s=a;for(;s--;)if(o[s][0]==="exit"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._open&&o[a][1].end.offset-o[a][1].start.offset===o[s][1].end.offset-o[s][1].start.offset){o[a][1].type="strikethroughSequence",o[s][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[s][1].start),end:Object.assign({},o[a][1].end)},c={type:"strikethroughText",start:Object.assign({},o[s][1].end),end:Object.assign({},o[a][1].start)},p=[["enter",f,u],["enter",o[s][1],u],["exit",o[s][1],u],["enter",c,u]],d=u.parser.constructs.insideSpan.null;d&&Ke(p,p.length,0,eo(d,o.slice(s+1,a),u)),Ke(p,p.length,0,[["exit",c,u],["enter",o[a][1],u],["exit",o[a][1],u],["exit",f,u]]),Ke(o,s-1,a-s+3,p),a=s+p.length-2;break}}for(a=-1;++a<o.length;)o[a][1].type==="strikethroughSequenceTemporary"&&(o[a][1].type="data");return o}function l(o,u,a){const s=this.previous,f=this.events;let c=0;return p;function p(g){return s===126&&f[f.length-1][1].type!=="characterEscape"?a(g):(o.enter("strikethroughSequenceTemporary"),d(g))}function d(g){const x=cr(s);if(g===126)return c>1?a(g):(o.consume(g),c++,d);if(c<2&&!n)return a(g);const S=o.exit("strikethroughSequenceTemporary"),h=cr(g);return S._open=!h||h===2&&!!x,S._close=!x||x===2&&!!h,u(g)}}}class JC{constructor(){this.map=[]}add(t,n,r){qC(this,t,n,r)}consume(t){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const l of i)t.push(l);i=r.pop()}this.map.length=0}}function qC(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function KC(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function YC(){return{flow:{null:{name:"table",tokenize:XC,resolveAll:ZC}}}}function XC(e,t,n){const r=this;let i=0,l=0,o;return u;function u(P){let D=r.events.length-1;for(;D>-1;){const ne=r.events[D][1].type;if(ne==="lineEnding"||ne==="linePrefix")D--;else break}const F=D>-1?r.events[D][1].type:null,J=F==="tableHead"||F==="tableRow"?C:a;return J===C&&r.parser.lazy[r.now().line]?n(P):J(P)}function a(P){return e.enter("tableHead"),e.enter("tableRow"),s(P)}function s(P){return P===124||(o=!0,l+=1),f(P)}function f(P){return P===null?n(P):O(P)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),d):n(P):V(P)?G(e,f,"whitespace")(P):(l+=1,o&&(o=!1,i+=1),P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),o=!0,f):(e.enter("data"),c(P)))}function c(P){return P===null||P===124||te(P)?(e.exit("data"),f(P)):(e.consume(P),P===92?p:c)}function p(P){return P===92||P===124?(e.consume(P),c):c(P)}function d(P){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(P):(e.enter("tableDelimiterRow"),o=!1,V(P)?G(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):g(P))}function g(P){return P===45||P===58?S(P):P===124?(o=!0,e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),x):T(P)}function x(P){return V(P)?G(e,S,"whitespace")(P):S(P)}function S(P){return P===58?(l+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),h):P===45?(l+=1,h(P)):P===null||O(P)?E(P):T(P)}function h(P){return P===45?(e.enter("tableDelimiterFiller"),m(P)):T(P)}function m(P){return P===45?(e.consume(P),m):P===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),y):(e.exit("tableDelimiterFiller"),y(P))}function y(P){return V(P)?G(e,E,"whitespace")(P):E(P)}function E(P){return P===124?g(P):P===null||O(P)?!o||i!==l?T(P):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(P)):T(P)}function T(P){return n(P)}function C(P){return e.enter("tableRow"),_(P)}function _(P){return P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),_):P===null||O(P)?(e.exit("tableRow"),t(P)):V(P)?G(e,_,"whitespace")(P):(e.enter("data"),N(P))}function N(P){return P===null||P===124||te(P)?(e.exit("data"),_(P)):(e.consume(P),P===92?M:N)}function M(P){return P===92||P===124?(e.consume(P),N):N(P)}}function ZC(e,t){let n=-1,r=!0,i=0,l=[0,0,0,0],o=[0,0,0,0],u=!1,a=0,s,f,c;const p=new JC;for(;++n<e.length;){const d=e[n],g=d[1];d[0]==="enter"?g.type==="tableHead"?(u=!1,a!==0&&(Bf(p,t,a,s,f),f=void 0,a=0),s={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(n,0,[["enter",s,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,l=[0,0,0,0],o=[0,n+1,0,0],u&&(u=!1,f={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(n,0,[["enter",f,t]])),i=g.type==="tableDelimiterRow"?2:f?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(l[1]!==0&&(o[0]=o[1],c=Hi(p,t,l,i,void 0,c),l=[0,0,0,0]),o[2]=n)):g.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(o[0]=o[1],c=Hi(p,t,l,i,void 0,c)),l=o,o=[l[1],n,0,0])):g.type==="tableHead"?(u=!0,a=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(a=n,l[1]!==0?(o[0]=o[1],c=Hi(p,t,l,i,n,c)):o[1]!==0&&(c=Hi(p,t,o,i,n,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=n)}for(a!==0&&Bf(p,t,a,s,f),p.consume(t.events),n=-1;++n<t.events.length;){const d=t.events[n];d[0]==="enter"&&d[1].type==="table"&&(d[1]._align=KC(t.events,n))}return e}function Hi(e,t,n,r,i,l){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",u="tableContent";n[0]!==0&&(l.end=Object.assign({},On(t.events,n[0])),e.add(n[0],0,[["exit",l,t]]));const a=On(t.events,n[1]);if(l={type:o,start:Object.assign({},a),end:Object.assign({},a)},e.add(n[1],0,[["enter",l,t]]),n[2]!==0){const s=On(t.events,n[2]),f=On(t.events,n[3]),c={type:u,start:Object.assign({},s),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const p=t.events[n[2]],d=t.events[n[3]];if(p[1].end=Object.assign({},d[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,x=n[3]-n[2]-1;e.add(g,x,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(l.end=Object.assign({},On(t.events,i)),e.add(i,0,[["exit",l,t]]),l=void 0),l}function Bf(e,t,n,r,i){const l=[],o=On(t.events,n);i&&(i.end=Object.assign({},o),l.push(["exit",i,t])),r.end=Object.assign({},o),l.push(["exit",r,t]),e.add(n+1,0,l)}function On(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const eP={name:"tasklistCheck",tokenize:nP};function tP(){return{text:{91:eP}}}function nP(e,t,n){const r=this;return i;function i(a){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(a):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),l)}function l(a){return te(a)?(e.enter("taskListCheckValueUnchecked"),e.consume(a),e.exit("taskListCheckValueUnchecked"),o):a===88||a===120?(e.enter("taskListCheckValueChecked"),e.consume(a),e.exit("taskListCheckValueChecked"),o):n(a)}function o(a){return a===93?(e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),u):n(a)}function u(a){return O(a)?t(a):V(a)?e.check({tokenize:rP},t,n)(a):n(a)}}function rP(e,t,n){return G(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function iP(e){return Lh([zC(),MC(),GC(e),YC(),tP()])}const lP={};function oP(e){const t=this,n=e||lP,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),l=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(iP(n)),l.push(EC()),o.push(bC(n))}const uP={"problem-bank-luogu-nowcoder":`---
title: 大题库：洛谷+牛客题目导航
date: 2026-06-13
tags: [题库, 洛谷, 牛客, 题目, 练习]
description: 汇总洛谷和牛客上的优质题目，按知识点分类，方便系统性刷题和查漏补缺。
---

# 大题库：洛谷+牛客题目导航

这篇文章汇总洛谷和牛客两个平台上的优质题目，按知识点分类，帮助你系统性刷题。

## 一、洛谷（Luogu）题目导航

洛谷是国内最大的算法竞赛在线评测平台，题目质量高，社区活跃。

**官网**：https://www.luogu.com.cn

### 1. 入门题库

#### 语法基础

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P5708 | 【深基2.习2】三角形面积 | 入门 | 顺序结构 | [打开](https://www.luogu.com.cn/problem/P5708) |
| P5709 | 【深基2.习6】Apples Prologue / 苹果和虫子 | 入门 | 顺序结构 | [打开](https://www.luogu.com.cn/problem/P5709) |
| P5710 | 【深基3.例2】数的性质 | 入门 | 分支结构 | [打开](https://www.luogu.com.cn/problem/P5710) |
| P5711 | 【深基3.例3】闰年判断 | 入门 | 分支结构 | [打开](https://www.luogu.com.cn/problem/P5711) |
| P5712 | 【深基3.例4】Apples | 入门 | 分支结构 | [打开](https://www.luogu.com.cn/problem/P5712) |
| P5713 | 【深基3.例6】Apples Prologue（改） | 入门 | 循环结构 | [打开](https://www.luogu.com.cn/problem/P5713) |
| P5714 | 【深基3.例7】肥胖 BMI | 入门 | 顺序结构 | [打开](https://www.luogu.com.cn/problem/P5714) |
| P5715 | 【深基3.例8】三位数排序 | 入门 | 分支结构 | [打开](https://www.luogu.com.cn/problem/P5715) |
| P5716 | 【深基3.例9】Apples Prologue（再改） | 入门 | 循环结构 | [打开](https://www.luogu.com.cn/problem/P5716) |
| P5717 | 【深基3.例20】三角决斗 | 入门 | 分支结构 | [打开](https://www.luogu.com.cn/problem/P5717) |

#### 数组与字符串

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P5727 | 【深基5.例3】冰雹猜想 | 入门 | 数组 | [打开](https://www.luogu.com.cn/problem/P5727) |
| P5728 | 【深基5.例5】旗鼓相当的对手 | 入门 | 数组 | [打开](https://www.luogu.com.cn/problem/P5728) |
| P5729 | 【深基5.例7】手工课 | 入门 | 二维数组 | [打开](https://www.luogu.com.cn/problem/P5729) |
| P5730 | 【深基5.例10】显示屏 | 入门 | 字符串 | [打开](https://www.luogu.com.cn/problem/P5730) |
| P5731 | 【深基5.例13】蛇形方阵 | 入门 | 二维数组 | [打开](https://www.luogu.com.cn/problem/P5731) |

### 2. 普及-题库

#### 枚举与模拟

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P1200 | [USACO1.1] Your Ride Is Here | 普及- | 枚举 | [打开](https://www.luogu.com.cn/problem/P1200) |
| P1201 | [USACO1.1] Greedy Gift Givers | 普及- | 模拟 | [打开](https://www.luogu.com.cn/problem/P1201) |
| P1202 | [USACO1.1] Friday the Thirteenth | 普及- | 模拟 | [打开](https://www.luogu.com.cn/problem/P1202) |
| P1203 | [USACO1.1] Broken Necklace | 普及- | 模拟 | [打开](https://www.luogu.com.cn/problem/P1203) |

#### 排序与查找

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P1177 | 【模板】快速排序 | 普及- | 排序 | [打开](https://www.luogu.com.cn/problem/P1177) |
| P1059 | 明明的随机数 | 普及- | 排序、去重 | [打开](https://www.luogu.com.cn/problem/P1059) |
| P1104 | 生日 | 普及- | 排序 | [打开](https://www.luogu.com.cn/problem/P1104) |

### 3. 普及/提高-题库

#### 贪心算法

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P1208 | [USACO1.3] Mixing Milk | 普及/提高- | 贪心 | [打开](https://www.luogu.com.cn/problem/P1208) |
| P1223 | 排队接水 | 普及/提高- | 贪心 | [打开](https://www.luogu.com.cn/problem/P1223) |
| P1803 | 凌乱的yyy / 线段覆盖 | 普及/提高- | 贪心、活动选择 | [打开](https://www.luogu.com.cn/problem/P1803) |
| P1090 | 合并果子 | 普及/提高- | 贪心、堆 | [打开](https://www.luogu.com.cn/problem/P1090) |

#### 动态规划（入门）

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P1048 | [NOIP2005] 采药 | 普及/提高- | 0-1背包 | [打开](https://www.luogu.com.cn/problem/P1048) |
| P1616 | 疯狂的采药 | 普及/提高- | 完全背包 | [打开](https://www.luogu.com.cn/problem/P1616) |
| P1020 | [NOIP1999] 导弹拦截 | 普及/提高- | LIS | [打开](https://www.luogu.com.cn/problem/P1020) |
| P1880 | [NOI1995] 石子合并 | 普及/提高- | 区间DP | [打开](https://www.luogu.com.cn/problem/P1880) |

#### 搜索（DFS/BFS）

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P1706 | 全排列问题 | 普及/提高- | DFS、回溯 | [打开](https://www.luogu.com.cn/problem/P1706) |
| P1219 | [USACO1.5] 八皇后 | 普及/提高- | DFS、回溯 | [打开](https://www.luogu.com.cn/problem/P1219) |
| P1443 | 马的遍历 | 普及/提高- | BFS | [打开](https://www.luogu.com.cn/problem/P1443) |
| P1135 | 奇怪的电梯 | 普及/提高- | BFS最短路 | [打开](https://www.luogu.com.cn/problem/P1135) |

### 4. 提高/省选-题库

#### 动态规划（进阶）

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P1412 | 诊断问题 | 提高/省选- | 状压DP | [打开](https://www.luogu.com.cn/problem/P1412) |
| P2365 | 任务安排 | 提高/省选- | 线性DP | [打开](https://www.luogu.com.cn/problem/P2365) |
| P2501 | [HAOI2006] 数字序列 | 提高/省选- | DP | [打开](https://www.luogu.com.cn/problem/P2501) |

#### 图论

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P3371 | 【模板】单源最短路径（弱化版） | 提高/省选- | Dijkstra | [打开](https://www.luogu.com.cn/problem/P3371) |
| P4779 | 【模板】单源最短路径（标准版） | 提高/省选- | Dijkstra+堆优化 | [打开](https://www.luogu.com.cn/problem/P4779) |
| P3366 | 【模板】最小生成树 | 提高/省选- | Kruskal/Prim | [打开](https://www.luogu.com.cn/problem/P3366) |
| P2661 | 信息传递 | 提高/省选- | 图论、拓扑排序 | [打开](https://www.luogu.com.cn/problem/P2661) |

#### 数据结构

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P3372 | 【模板】线段树 1 | 提高/省选- | 线段树 | [打开](https://www.luogu.com.cn/problem/P3372) |
| P3374 | 【模板】树状数组 1 | 提高/省选- | 树状数组 | [打开](https://www.luogu.com.cn/problem/P3374) |
| P3367 | 【模板】并查集 | 提高/省选- | 并查集 | [打开](https://www.luogu.com.cn/problem/P3367) |

### 5. 省选/NOI-题库

| 题目编号 | 题目名称 | 难度 | 知识点 | 链接 |
|----------|----------|--------|----------|------|
| P1005 | [NOIP2007] 矩阵取数游戏 | 省选/NOI- | 高精度+DP | [打开](https://www.luogu.com.cn/problem/P1005) |
| P1541 | [NOIP2010] 乌龟棋 | 省选/NOI- | DP | [打开](https://www.luogu.com.cn/problem/P1541) |
| P2015 | 二叉苹果树 | 省选/NOI- | 树形DP | [打开](https://www.luogu.com.cn/problem/P2015) |
| P2470 | [SDOI2010] 魔法猪学院 | 省选/NOI- | K短路 | [打开](https://www.luogu.com.cn/problem/P2470) |

## 二、牛客（Nowcoder）题目导航

牛客网是国内知名的 IT 学习平台，有丰富的编程竞赛和面试题库。

**官网**：https://www.nowcoder.com

### 1. 牛客竞赛（OI 题库）

牛客的 OI 题库质量也很高，很多题目适合 NOIP 训练。

#### 入门题库

| 比赛名称 | 题目数量 | 难度 | 链接 |
|----------|----------|--------|------|
| 牛客OI周赛 入门组 | 4题/场 | 入门-普及 | [打开](https://ac.nowcoder.com/acm/contest/vip-oj/problem) |
| 牛客小白月赛 | 6-8题/场 | 入门-普及 | [打开](https://ac.nowcoder.com/acm/contest/vip-oj/problem) |

#### 提高题库

| 比赛名称 | 题目数量 | 难度 | 链接 |
|----------|----------|--------|------|
| 牛客OI周赛 提高组 | 4题/场 | 普及-提高 | [打开](https://ac.nowcoder.com/acm/contest/vip-oj/problem) |
| 牛客NOIP模拟赛 | 4题/场 | 普及/提高- | [打开](https://ac.nowcoder.com/acm/contest/vip-oj/problem) |

### 2. 牛客经典题目推荐

由于牛客题目编号较复杂，我直接给出搜索和访问方式：

#### 如何找题目

1. **访问牛客 OJ**：https://ac.nowcoder.com/acm/contest/vip-oj/problem
2. **按难度筛选**：
   - 入门：适合 CSP-J 入门
   - 普及：适合 CSP-J 提高
   - 提高：适合 CSP-S 入门
   - 省选：适合 CSP-S 提高

3. **按标签筛选**：
   - 模拟
   - 贪心
   - 动态规划
   - 搜索
   - 图论
   - 数据结构

#### 推荐题目（手动搜索）

在牛客 OJ 搜索以下关键词：

**贪心**：
- 搜索"贪心"
- 难度：普及-
- 推荐：活动选择、排队接水类题目

**动态规划**：
- 搜索"背包"
- 搜索"最长上升子序列"
- 难度：普及/提高-

**搜索**：
- 搜索"DFS"
- 搜索"BFS"
- 难度：普及/提高-

**图论**：
- 搜索"最短路"
- 搜索"最小生成树"
- 难度：提高/省选-

## 三、刷题路线推荐

### 路线 1：CSP-J 备考路线

\`\`\`
第 1 阶段：语法基础（1-2 个月）
  - 洛谷 P5708-P5717（入门题库）
  - 目标：熟练掌握语法

第 2 阶段：基础算法（2-3 个月）
  - 洛谷 P1200-P1203（枚举与模拟）
  - 洛谷 P1177（排序）
  - 目标：掌握枚举、模拟、排序

第 3 阶段：算法入门（3-4 个月）
  - 洛谷 P1048（背包）
  - 洛谷 P1803（贪心）
  - 洛谷 P1706（DFS）
  - 目标：掌握基础算法

第 4 阶段：真题训练（2-3 个月）
  - 近 5 年 CSP-J 第二轮真题
  - 牛客 CSP-J 模拟赛题目
  - 目标：熟悉考试，提高速度
\`\`\`

### 路线 2：CSP-S 备考路线

\`\`\`
第 1 阶段：CSP-J 水平（1 年）
  - 先完成 CSP-J 备考路线

第 2 阶段：基础算法（6-8 个月）
  - 洛谷 P1090（堆+贪心）
  - 洛谷 P1880（区间DP）
  - 洛谷 P3371（最短路）
  - 洛谷 P3366（最小生成树）
  - 目标：掌握提高级算法

第 3 阶段：高级算法（6-8 个月）
  - 洛谷 P3372（线段树）
  - 洛谷 P3374（树状数组）
  - 洛谷 P2015（树形DP）
  - 目标：掌握高级数据结构

第 4 阶段：竞赛训练（6-12 个月）
  - 近 5 年 CSP-S 第二轮真题
  - 近 5 年 NOIP 提高组真题
  - 牛客省选模拟赛题目
  - 目标：冲击一等奖
\`\`\`

## 四、刷题技巧

### 1. 如何高效刷题

- **按知识点刷题**：不要随机刷题，要系统性地学习每个知识点
- **从简单到困难**：先刷入门题，再刷提高题
- **多做真题**：真题质量最高，最接近考试难度
- **总结错题**：把做错的题目记录下来，定期复习

### 2. 如何 Debug

- **小数据测试**：先用小数据手动计算，再对比程序输出
- **输出中间变量**：用 \`cout\` 输出关键变量的值
- **画图理解**：对于搜索和图论题，画图帮助理解
- **看题解**：实在想不出来，可以看题解，但一定要自己再写一遍

### 3. 如何提高速度

- **盲打**：提高打字速度
- **模板熟练**：常用算法（快排、二分、DFS）要能背出来
- **模拟考试**：参加在线模拟赛，锻炼时间分配能力

## 五、常用资源

### 洛谷

- **官网**：https://www.luogu.com.cn
- **题解区**：每道题都有大量题解，质量很高
- **讨论区**：可以提问，大佬会回答
- **日报**：每周精选题目和题解

### 牛客

- **官网**：https://www.nowcoder.com
- **OJ**：https://ac.nowcoder.com
- **题解区**：每场比赛都有题解
- **竞赛日历**：查看近期比赛

### 其他平台

- **OpenJudge**：http://openjudge.cn（北大 POJ）
- **Codeforces**：https://codeforces.com（国际平台，英文）
- **AtCoder**：https://atcoder.jp（日本平台，英文）

## 六、总结

刷题是提高编程能力的最有效方法，但要讲究方法：

1. **系统性强**：按知识点刷题，不要随机刷
2. **循序渐进**：从简单到困难，不要跳级
3. **多思考**：做题时要思考为什么，而不是背答案
4. **坚持**：每天刷 1-2 道题，长期积累才会有质的飞跃

> **一句话**：刷题不是为了刷题而刷题，而是为了掌握算法思想，提高解决问题的能力！

希望这份题库导航能帮助你高效刷题，顺利通过考级！
`,"algorithm-basics-branch-loop":`---
title: 算法基础：分支与循环
date: 2026-06-13
tags: [算法, 基础, 分支, 循环, C++]
description: 掌握编程最基础的两个概念：分支结构和循环结构，这是所有算法的基石。
---

# 算法基础：分支与循环

分支和循环是编程的两种基本控制结构，几乎所有算法都由它们组合而成。

## 一、分支结构

分支结构让程序能够根据条件选择不同的执行路径。

### 1. if-else 语句

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int score;
    cin >> score;
    
    if (score >= 90) {
        cout << "优秀" << endl;
    } else if (score >= 60) {
        cout << "及格" << endl;
    } else {
        cout << "不及格" << endl;
    }
    
    return 0;
}
\`\`\`

### 2. switch 语句

当需要判断多个固定值时，switch 更清晰：

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int day;
    cin >> day;
    
    switch (day) {
        case 1: cout << "星期一"; break;
        case 2: cout << "星期二"; break;
        case 3: cout << "星期三"; break;
        case 4: cout << "星期四"; break;
        case 5: cout << "星期五"; break;
        case 6: cout << "星期六"; break;
        case 7: cout << "星期日"; break;
        default: cout << "输入错误";
    }
    
    return 0;
}
\`\`\`

### 3. 三元运算符

简单的二选一可以用三元运算符：

\`\`\`cpp
int max = (a > b) ? a : b;
\`\`\`

## 二、循环结构

循环结构让程序能够重复执行某段代码。

### 1. for 循环

适用于已知循环次数的情况：

\`\`\`cpp
// 计算 1 到 100 的和
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
cout << "总和：" << sum << endl;
\`\`\`

### 2. while 循环

适用于未知循环次数，但知道循环条件的情况：

\`\`\`cpp
// 猜数字游戏
int target = 42;
int guess;
while (true) {
    cin >> guess;
    if (guess == target) {
        cout << "猜对了！" << endl;
        break;
    } else if (guess < target) {
        cout << "太小了" << endl;
    } else {
        cout << "太大了" << endl;
    }
}
\`\`\`

### 3. do-while 循环

至少执行一次的情况：

\`\`\`cpp
// 菜单选择
int choice;
do {
    cout << "1. 开始游戏" << endl;
    cout << "2. 查看排名" << endl;
    cout << "3. 退出" << endl;
    cin >> choice;
} while (choice != 3);
\`\`\`

## 三、循环控制语句

### 1. break

立即跳出整个循环：

\`\`\`cpp
for (int i = 1; i <= 100; i++) {
    if (i == 50) {
        break;  // 当 i=50 时退出循环
    }
    cout << i << " ";
}
\`\`\`

### 2. continue

跳过本次循环，继续下一次：

\`\`\`cpp
// 输出 1-100 中的所有奇数
for (int i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        continue;  // 跳过偶数
    }
    cout << i << " ";
}
\`\`\`

## 四、嵌套循环

循环里面可以再套循环，用于处理多维问题：

\`\`\`cpp
// 打印九九乘法表
for (int i = 1; i <= 9; i++) {
    for (int j = 1; j <= i; j++) {
        cout << j << "×" << i << "=" << i*j << " ";
    }
    cout << endl;
}
\`\`\`

## 五、经典例题

### 例题 1：判断素数

\`\`\`cpp
#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int n;
    cin >> n;
    if (isPrime(n)) {
        cout << "是素数" << endl;
    } else {
        cout << "不是素数" << endl;
    }
    return 0;
}
\`\`\`

### 例题 2：百钱百鸡问题

\`\`\`cpp
// 公鸡5元/只，母鸡3元/只，小鸡1元/3只
// 用100元买100只鸡，问各多少只？
for (int x = 0; x <= 20; x++) {        // 公鸡
    for (int y = 0; y <= 33; y++) {    // 母鸡
        int z = 100 - x - y;             // 小鸡
        if (z % 3 == 0 && 5*x + 3*y + z/3 == 100) {
            cout << "公鸡：" << x << " 母鸡：" << y << " 小鸡：" << z << endl;
        }
    }
}
\`\`\`

## 六、常见错误

1. **死循环**：循环条件永远为 true
   \`\`\`cpp
   while (1) {  // 死循环！
       cout << "hello" << endl;
   }
   \`\`\`

2. **off-by-one 错误**：循环边界错误
   \`\`\`cpp
   for (int i = 0; i < 10; i++) {  // 0-9，共10次
   for (int i = 1; i <= 10; i++) {  // 1-10，共10次
   \`\`\`

3. **忘记更新循环变量**
   \`\`\`cpp
   int i = 0;
   while (i < 10) {
       cout << i << endl;
       // 忘记 i++，死循环！
   }
   \`\`\`

## 七、练习题推荐

- **洛谷 P5708 【深基2.习2】三角形面积**：简单的分支+数学
- **洛谷 P5709 【深基2.习6】Apples Prologue / 苹果和虫子**：循环入门
- **洛谷 P5710 【深基3.例2】数的性质**：if-else 综合练习
- **洛谷 P5711 【深基3.例3】闰年判断**：分支结构经典题

> **小贴士**：分支和循环是编程的基础中的基础，多写多练才能熟练掌握！

希望这篇文章能帮助你打好算法基础！
`,"algorithm-advanced-greedy-dp-dfs":`---
title: 算法进阶：贪心、DP、DFS
date: 2026-06-13
tags: [算法, 贪心, 动态规划, DFS, 搜索]
description: 深入讲解三种重要的算法思想：贪心算法、动态规划和深度优先搜索，掌握它们的解题思路。
---

# 算法进阶：贪心、DP、DFS

这篇文章介绍三种核心算法思想，它们是解决复杂问题的利器。

## 一、贪心算法

贪心算法的核心是：**每一步都做出当前看起来最优的选择**，希望最终得到全局最优解。

### 适用条件

贪心算法只有当问题具有**贪心选择性质**和**最优子结构**时才有效。

### 经典例题

#### 例题 1：活动选择问题

有 n 个活动，每个活动有开始时间 s[i] 和结束时间 e[i]，同一时间只能参加一个活动，问最多能参加多少个活动？

**贪心策略**：按结束时间从小到大排序，每次选择结束时间最早且与已选活动不冲突的活动。

\`\`\`cpp
#include <iostream>
#include <algorithm>
using namespace std;

struct Activity {
    int s, e;
};

bool cmp(Activity a, Activity b) {
    return a.e < b.e;  // 按结束时间排序
}

int main() {
    int n;
    cin >> n;
    Activity a[n];
    for (int i = 0; i < n; i++) {
        cin >> a[i].s >> a[i].e;
    }
    
    sort(a, a + n, cmp);
    
    int count = 1;  // 选第一个活动
    int lastEnd = a[0].e;
    
    for (int i = 1; i < n; i++) {
        if (a[i].s >= lastEnd) {  // 不冲突
            count++;
            lastEnd = a[i].e;
        }
    }
    
    cout << count << endl;
    return 0;
}
\`\`\`

#### 例题 2：贪心背包问题

有 n 个物品，每个物品有重量 w[i] 和价值 v[i]，背包容量为 C，问最多能装多少价值？

**贪心策略**：按价值密度（v[i]/w[i]）从大到小排序，优先装价值密度高的物品。

> **注意**：分数背包（可以装一部分）可以用贪心，但 0-1 背包（必须整件装）不能用贪心，需要用动态规划！

### 常见贪心问题

- **区间调度**：选择最多的不重叠区间
- **哈夫曼编码**：构造最优前缀码
- **最小生成树**：Prim 和 Kruskal 算法
- **最短路径**：Dijkstra 算法

## 二、动态规划（DP）

动态规划的核心思想：**把大问题分解成小问题，记录小问题的答案，避免重复计算**。

### 动态规划三要素

1. **状态定义**：dp[i] 或 dp[i][j] 表示什么？
2. **状态转移方程**：如何从小问题推导出大问题？
3. **初始条件**：最简单的子问题是什么？

### 经典例题

#### 例题 1：斐波那契数列

**暴力递归**（低效）：
\`\`\`cpp
int fib(int n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);  // 重复计算太多
}
\`\`\`

**动态规划**（高效）：
\`\`\`cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    vector<long long> dp(n+1);
    dp[1] = dp[2] = 1;
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    cout << dp[n] << endl;
    return 0;
}
\`\`\`

#### 例题 2：0-1 背包问题

有 n 个物品，每个物品有重量 w[i] 和价值 v[i]，背包容量为 C，每个物品只能选一次，问最大价值是多少？

**状态定义**：dp[i][j] 表示前 i 个物品，背包容量为 j 时的最大价值

**状态转移方程**：
\`\`\`
dp[i][j] = max(dp[i-1][j], dp[i-1][j-w[i]] + v[i])
             ↑ 不选第i个物品      ↑ 选第i个物品
\`\`\`

**代码实现**：
\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, C;
    cin >> n >> C;
    
    vector<int> w(n+1), v(n+1);
    for (int i = 1; i <= n; i++) {
        cin >> w[i] >> v[i];
    }
    
    vector<vector<int>> dp(n+1, vector<int>(C+1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= C; j++) {
            dp[i][j] = dp[i-1][j];  // 不选第i个物品
            if (j >= w[i]) {
                dp[i][j] = max(dp[i][j], dp[i-1][j-w[i]] + v[i]);
            }
        }
    }
    
    cout << dp[n][C] << endl;
    return 0;
}
\`\`\`

**空间优化**（滚动数组）：
\`\`\`cpp
vector<int> dp(C+1, 0);
for (int i = 1; i <= n; i++) {
    for (int j = C; j >= w[i]; j--) {  // 逆序！
        dp[j] = max(dp[j], dp[j-w[i]] + v[i]);
    }
}
\`\`\`

#### 例题 3：最长上升子序列（LIS）

给定一个序列，求最长的严格上升子序列的长度。

**状态定义**：dp[i] 表示以第 i 个元素结尾的最长上升子序列长度

**状态转移方程**：
\`\`\`
dp[i] = max(dp[j]) + 1, 其中 j < i 且 a[j] < a[i]
\`\`\`

**代码实现**：
\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    vector<int> a(n), dp(n, 1);
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    int ans = 1;
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (a[j] < a[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        ans = max(ans, dp[i]);
    }
    
    cout << ans << endl;
    return 0;
}
\`\`\`

**O(n log n) 优化**（耐心排序）：
\`\`\`cpp
vector<int> d;  // d[i] 表示长度为i+1的LIS的最小结尾元素
d.push_back(a[0]);

for (int i = 1; i < n; i++) {
    if (a[i] > d.back()) {
        d.push_back(a[i]);
    } else {
        *lower_bound(d.begin(), d.end(), a[i]) = a[i];
    }
}

cout << d.size() << endl;
\`\`\`

### 常见 DP 问题

- **线性 DP**：最长上升子序列、最长公共子序列
- **背包 DP**：0-1 背包、完全背包、多重背包
- **区间 DP**：矩阵链乘法、石子合并
- **树形 DP**：树上最大独立集
- **状压 DP**：旅行商问题（TSP）

## 三、深度优先搜索（DFS）

DFS 是一种**穷举**算法，它会沿着一条路径走到头，然后回溯尝试其他路径。

### 基本模板

\`\`\`cpp
#include <iostream>
using namespace std;

int n;
int vis[100];  // 访问标记

void dfs(int step) {
    // 1. 判断边界（递归终止条件）
    if (step == n + 1) {
        // 输出结果或更新答案
        return;
    }
    
    // 2. 尝试每一种可能
    for (int i = 1; i <= n; i++) {
        if (!vis[i]) {  // 如果没有访问过
            vis[i] = 1;  // 标记访问
            
            // 3. 继续下一步
            dfs(step + 1);
            
            // 4. 回溯（撤销标记）
            vis[i] = 0;
        }
    }
}

int main() {
    cin >> n;
    dfs(1);
    return 0;
}
\`\`\`

### 经典例题

#### 例题 1：全排列问题

输出 1~n 的所有全排列。

\`\`\`cpp
#include <iostream>
using namespace std;

int n;
int a[100], vis[100];

void dfs(int step) {
    if (step == n + 1) {
        for (int i = 1; i <= n; i++) {
            cout << a[i] << " ";
        }
        cout << endl;
        return;
    }
    
    for (int i = 1; i <= n; i++) {
        if (!vis[i]) {
            a[step] = i;
            vis[i] = 1;
            dfs(step + 1);
            vis[i] = 0;
        }
    }
}

int main() {
    cin >> n;
    dfs(1);
    return 0;
}
\`\`\`

#### 例题 2：迷宫问题

给定一个迷宫，求从起点到终点的最短路径。

\`\`\`cpp
#include <iostream>
#include <queue>
using namespace std;

int n, m;
int maze[100][100];
int dist[100][100];
int dx[4] = {0, 0, 1, -1};
int dy[4] = {1, -1, 0, 0};

struct Point {
    int x, y;
};

int bfs(int sx, int sy, int ex, int ey) {
    queue<Point> q;
    q.push({sx, sy});
    dist[sx][sy] = 0;
    
    while (!q.empty()) {
        Point p = q.front();
        q.pop();
        
        if (p.x == ex && p.y == ey) {
            return dist[p.x][p.y];
        }
        
        for (int i = 0; i < 4; i++) {
            int nx = p.x + dx[i];
            int ny = p.y + dy[i];
            
            if (nx >= 1 && nx <= n && ny >= 1 && ny <= m 
                && maze[nx][ny] == 0 && dist[nx][ny] == -1) {
                dist[nx][ny] = dist[p.x][p.y] + 1;
                q.push({nx, ny});
            }
        }
    }
    
    return -1;  // 无法到达
}

int main() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            cin >> maze[i][j];
            dist[i][j] = -1;
        }
    }
    
    int sx, sy, ex, ey;
    cin >> sx >> sy >> ex >> ey;
    
    int ans = bfs(sx, sy, ex, ey);
    cout << ans << endl;
    
    return 0;
}
\`\`\`

> **注意**：最短路径问题通常用 BFS（广度优先搜索）而不是 DFS！

### DFS vs BFS

| 特点 | DFS | BFS |
|------|-----|-----|
| 数据结构 | 栈（递归） | 队列 |
| 空间复杂度 | O(深度) | O(宽度) |
| 适用场景 | 所有解、路径数 | 最短路径 |
| 剪枝 | 容易 | 困难 |

## 四、练习题推荐

### 贪心

- **洛谷 P1208 [USACO1.3] Mixing Milk**：贪心入门
- **洛谷 P1223 排队接水**：按时间排序
- **洛谷 P1803 凌乱的yyy / 线段覆盖**：活动选择问题

### 动态规划

- **洛谷 P1048 [NOIP2005] 采药**：0-1 背包入门
- **洛谷 P1616 疯狂的采药**：完全背包
- **洛谷 P1020 [NOIP1999] 导弹拦截**：LIS 经典题
- **洛谷 P1880 [NOI1995] 石子合并**：区间 DP

### DFS/BFS

- **洛谷 P1706 全排列问题**：DFS 模板题
- **洛谷 P1219 [USACO1.5] 八皇后**：DFS + 回溯
- **洛谷 P1443 马的遍历**：BFS 模板题
- **洛谷 P1135 奇怪的电梯**：BFS 最短路

## 五、学习建议

1. **贪心**：先证明贪心正确性，再写代码
2. **DP**：多刷题，总结状态定义和转移方程的模式
3. **搜索**：先画递归搜索树，再写代码，注意剪枝优化

> **一句话总结**：贪心看得近，DP 看得全，搜索看得深！

希望这篇文章能帮助你掌握这三种重要的算法思想！
`,"gesp-guide":`---
title: GESP 考级完全指南
date: 2026-06-13
tags: [GESP, 考级, 编程, C++]
description: GESP（青少年软件编程等级考试）完全指南，包含考试介绍、各级别知识点、备考方法和真题解析。
---

# GESP 考级完全指南

GESP（青少年软件编程等级考试）是由中国计算机学会（CCF）主办的编程能力等级考试，分为 1-8 级。

## 一、GESP 考试介绍

### 考试概况

- **主办方**：中国计算机学会（CCF）
- **考试语言**：C++、Python、Scratch（1-4 级）
- **考试级别**：1-8 级
- **考试频率**：每年 4 次（3月、6月、9月、12月）
- **考试形式**：上机考试，全部为编程题
- **通过标准**：60 分及格

### 各级别关系

| 级别 | 相当于 CSP 能力 | 适合人群 |
|------|-----------------|----------|
| 1-2 级 | 入门 | 小学 3-4 年级 |
| 3-4 级 | CSP-J 入门组普及 | 小学 5-6 年级 |
| 5-6 级 | CSP-J 提高 | 初中 |
| 7-8 级 | CSP-S 提高组 | 高中 |

> **重要**：GESP 7 级认证 80 分以上，可免 CSP-J 第一轮；GESP 8 级认证 80 分以上，可免 CSP-S 第一轮！

## 二、各级别知识点

### 1 级（入门）

**知识点**：
- 基本语法：变量、数据类型、输入输出
- 分支结构：if-else
- 循环结构：for、while
- 简单数学运算

**示例题**：
\`\`\`cpp
// 输入两个数，输出它们的和
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}
\`\`\`

### 2 级（基础）

**知识点**：
- 一维数组
- 字符串基础
- 嵌套循环
- 简单排序（冒泡、选择）
- 进制转换

**示例题**：
\`\`\`cpp
// 输入 n 个数，输出它们的和与平均值
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[100];
    int sum = 0;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        sum += a[i];
    }
    
    cout << "Sum: " << sum << endl;
    cout << "Average: " << sum / n << endl;
    
    return 0;
}
\`\`\`

### 3 级（进阶）

**知识点**：
- 二维数组
- 函数与参数传递
- 递推与递归
- 枚举算法
- 简单模拟

**示例题**：
\`\`\`cpp
// 斐波那契数列第 n 项
#include <iostream>
using namespace std;

int fib(int n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

int main() {
    int n;
    cin >> n;
    cout << fib(n) << endl;
    return 0;
}
\`\`\`

### 4 级（提高）

**知识点**：
- 结构体
- 模拟算法
- 简单排序（插入、快排思想）
- 贪心算法入门
- 二分查找

**示例题**：
\`\`\`cpp
// 二分查找
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n, x;
    int a[1000];
    
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    cin >> x;
    
    // 先排序
    sort(a, a + n);
    
    // 二分查找
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (a[mid] == x) {
            cout << "Found at position " << mid << endl;
            return 0;
        } else if (a[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    cout << "Not found" << endl;
    return 0;
}
\`\`\`

### 5 级（高阶）

**知识点**：
- 动态规划入门（背包、LIS）
- 深度优先搜索（DFS）
- 宽度优先搜索（BFS）
- 线性数据结构（栈、队列）
- 树与图的基础概念

### 6 级（精英）

**知识点**：
- 动态规划进阶
- 搜索剪枝
- 图论基础（最短路、最小生成树）
- 数论基础（质数、最大公约数）

### 7-8 级（大师）

**知识点**：
- 高级数据结构（线段树、树状数组）
- 动态规划优化
- 图论进阶
- 组合数学

## 三、备考方法

### 1. 学习路径

\`\`\`
1 级 → 2 级：1-2 个月（每周 2-3 次课）
2 级 → 3 级：2-3 个月
3 级 → 4 级：3-4 个月
4 级 → 5 级：4-6 个月
\`\`\`

### 2. 推荐学习资源

**教材**：
- 《CCF 青少年计算机软件编程等级考试指南》（官方教材）
- 《信息学奥赛一本通》（提升用）
- 《算法竞赛入门经典》（进阶用）

**在线评测**：
- **洛谷**：https://www.luogu.com.cn
- **计蒜客**：https://www.jisuanke.com
- **Codeforces**：https://codeforces.com（英文）

**视频课程**：
- B站搜索"GESP 考级"
- CCF 官方培训课程

### 3. 刷题策略

**阶段一（1-2 级）**：
- 每天刷 2-3 道基础题
- 重点：语法熟练度

**阶段二（3-4 级）**：
- 每天刷 3-5 道算法题
- 重点：模拟 + 简单算法

**阶段三（5-6 级）**：
- 每天刷 1-2 道提高题
- 重点：DP + 搜索 + 图论

### 4. 考试技巧

1. **时间分配**：
   - 选择题：10-15 分钟
   - 编程题：每题 20-30 分钟
   - 预留 10 分钟检查

2. **做题顺序**：
   - 先做有把握的题
   - 遇到难题先跳过
   - 最后再攻难题

3. **调试技巧**：
   - 多用 \`cout\` 输出中间变量
   - 用小数据测试
   - 注意边界条件

## 四、真题解析

### 2025 年 3 月 GESP 3 级真题（节选）

**题目**：输入 n 个整数，输出其中偶数的个数。

**解题思路**：
- 遍历数组，判断每个数是否为偶数
- 如果是偶数，计数器加 1

**参考代码**：
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int count = 0;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        if (x % 2 == 0) {
            count++;
        }
    }
    
    cout << count << endl;
    return 0;
}
\`\`\`

## 五、常见问题

### Q1：GESP 和 CSP 有什么区别？

| 项目 | GESP | CSP |
|------|------|------|
| 主办方 | CCF | CCF |
| 考试频率 | 每年 4 次 | 每年 1 次 |
| 考试形式 | 上机 | 笔试 + 上机 |
| 难度梯度 | 8 级，梯度平缓 | J/S 两组，跳跃大 |
| 含金量 | 较高 | 很高 |

### Q2：应该先考 GESP 还是 CSP？

**建议**：
- 小学 4-5 年级：先考 GESP 1-3 级
- 小学 6 年级：GESP 4 级 → CSP-J
- 初中：GESP 5-6 级 → CSP-J/S
- 高中：直接 CSP-S

### Q3：GESP 证书有用吗？

- **小升初**：可作为科技特长生申请材料
- **中考**：部分地区有加分或自主招生政策
- **高考**：强基计划、综合评价的参考材料
- **出国**：证明编程能力

## 六、练习题推荐

### GESP 1-2 级

- **洛谷 P5708 【深基2.习2】三角形面积**
- **洛谷 P5709 【深基2.习6】Apples Prologue**
- **洛谷 P5710 【深基3.例2】数的性质**

### GESP 3-4 级

- **洛谷 P1200 [USACO1.1] Your Ride Is Here**
- **洛谷 P1217 [USACO1.5] Prime Palindromes**
- **洛谷 P1304 [NOIP2011] 数字反转**

### GESP 5-6 级

- **洛谷 P1048 [NOIP2005] 采药**（背包）
- **洛谷 P1216 [USACO1.5] 数字三角形**（DP）
- **洛谷 P1506 拯救oibh总部**（BFS）

## 七、学习规划建议

### 小学阶段（1-2 级）

- **时间**：每周 2-3 次，每次 1-1.5 小时
- **重点**：培养兴趣，掌握基础语法
- **目标**：1 年内通过 2 级

### 初中阶段（3-5 级）

- **时间**：每周 3-4 次，每次 1.5-2 小时
- **重点**：算法思想，刷题训练
- **目标**：2 年内通过 5 级，尝试 CSP-J

### 高中阶段（6-8 级）

- **时间**：每周 4-5 次，每次 2-3 小时
- **重点**：高级算法，竞赛训练
- **目标**：通过 GESP 8 级，冲刺 CSP-S 一等奖

## 八、总结

GESP 是一条相对平缓的编程学习路径，适合循序渐进地提升编程能力。

**学习建议**：
1. 不要跳级，扎实掌握每一级的知识点
2. 多刷题，理论结合实践
3. 参加模拟考试，熟悉考试环境
4. 保持兴趣，编程是长期积累的过程

> **加油**：GESP 只是起点，不是终点。坚持学习，你一定能成为编程高手！

希望这篇指南能帮助你顺利通过 GESP 考级！
`,"csp-guide":`---
title: CSP 考级完全指南
date: 2026-06-13
tags: [CSP, 考级, 信息学奥赛, C++]
description: CSP-J/S（CCF非专业级软件能力认证）完全指南，包含考试介绍、知识点、备考方法和历年真题解析。
---

# CSP 考级完全指南

CSP（CCF非专业级软件能力认证）是由中国计算机学会（CCF）主办的全国性编程能力认证考试，是信息学奥赛的重要组成部分。

## 一、CSP 考试介绍

### 考试概况

- **主办方**：中国计算机学会（CCF）
- **考试语言**：C++、C、Pascal（逐步淘汰）
- **考试分组**：CSP-J（入门组）、CSP-S（提高组）
- **考试频率**：每年 1 次（9 月第一轮，10 月第二轮）
- **考试形式**：
  - 第一轮：笔试（选择题 + 填空题）
  - 第二轮：上机编程（4 道编程题）
- **通过标准**：第一轮约 20-30% 通过率，第二轮约 60-70% 通过率

### CSP-J vs CSP-S

| 项目 | CSP-J（入门组） | CSP-S（提高组） |
|------|------------------|------------------|
| 难度 | 普及级 | 提高级 |
| 适合人群 | 小学高年级、初中 | 初中、高中 |
| 知识点 | 基础算法、简单数据结构 | 高级算法、复杂数据结构 |
| 获奖难度 | 相对较低 | 较高 |
| 含金量 | 中等 | 很高 |

### 考试流程

\`\`\`
9 月中旬：第一轮（笔试）
  ↓ 通过约 20-30%
10 月中旬：第二轮（上机）
  ↓ 通过约 60-70%
获得 CSP-J/S 认证证书
\`\`\`

> **重要**：GESP 7 级 80 分以上可免 CSP-J 第一轮；GESP 8 级 80 分以上可免 CSP-S 第一轮！

## 二、CSP-J 知识点

### 1. 语法基础（必会）

- 变量、数据类型、运算符
- 分支结构（if-else、switch）
- 循环结构（for、while、do-while）
- 数组（一维、二维）
- 字符串基础
- 函数与递归

**示例题**：
\`\`\`cpp
// 输入 n，输出 1+2+...+n 的和
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << n * (n + 1) / 2 << endl;
    return 0;
}
\`\`\`

### 2. 基础算法（重点）

**枚举**：
\`\`\`cpp
// 百钱百鸡问题
for (int x = 0; x <= 20; x++) {
    for (int y = 0; y <= 33; y++) {
        int z = 100 - x - y;
        if (z % 3 == 0 && 5*x + 3*y + z/3 == 100) {
            cout << x << " " << y << " " << z << endl;
        }
    }
}
\`\`\`

**模拟**：
\`\`\`cpp
// 高精度加法
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string add(string a, string b) {
    reverse(a.begin(), a.end());
    reverse(b.begin(), b.end());
    
    string ans = "";
    int carry = 0;
    
    for (int i = 0; i < max(a.length(), b.length()); i++) {
        int x = i < a.length() ? a[i] - '0' : 0;
        int y = i < b.length() ? b[i] - '0' : 0;
        int sum = x + y + carry;
        ans += (sum % 10) + '0';
        carry = sum / 10;
    }
    
    if (carry) ans += '1';
    reverse(ans.begin(), ans.end());
    return ans;
}
\`\`\`

**排序**：
- 冒泡排序、选择排序（必会）
- 快速排序、归并排序（了解思想）

\`\`\`cpp
// 快速排序
void quickSort(int a[], int left, int right) {
    if (left >= right) return;
    
    int i = left, j = right;
    int pivot = a[left];
    
    while (i < j) {
        while (i < j && a[j] >= pivot) j--;
        a[i] = a[j];
        while (i < j && a[i] <= pivot) i++;
        a[j] = a[i];
    }
    
    a[i] = pivot;
    quickSort(a, left, i - 1);
    quickSort(a, i + 1, right);
}
\`\`\`

### 3. 简单数据结构

- 栈（stack）：后进先出
- 队列（queue）：先进先出
- 链表（了解）

\`\`\`cpp
// 栈的应用：括号匹配
#include <iostream>
#include <stack>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top();
            st.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                return false;
            }
        }
    }
    return st.empty();
}
\`\`\`

### 4. 基础算法思想

**贪心算法**：
\`\`\`cpp
// 活动选择问题
#include <algorithm>
using namespace std;

struct Activity {
    int s, e;
};

bool cmp(Activity a, Activity b) {
    return a.e < b.e;
}

int main() {
    // ...（代码见"算法进阶"文章）
}
\`\`\`

**二分查找**：
\`\`\`cpp
// 在有序数组中查找 x
int binarySearch(int a[], int n, int x) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (a[mid] == x) return mid;
        else if (a[mid] < x) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
\`\`\`

### 5. 基础数论

- 质数判断
- 最大公约数（GCD）
- 最小公倍数（LCM）

\`\`\`cpp
// 欧几里得算法（辗转相除法）
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

// 最小公倍数
int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}
\`\`\`

## 三、CSP-S 知识点

### 1. 动态规划（DP）

**0-1 背包**：
\`\`\`cpp
// 见"算法进阶"文章
\`\`\`

**最长上升子序列（LIS）**：
\`\`\`cpp
// 见"算法进阶"文章
\`\`\`

**最长公共子序列（LCS）**：
\`\`\`cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;
    
    int n = a.length(), m = b.length();
    int dp[n + 1][m + 1];
    
    for (int i = 0; i <= n; i++) dp[i][0] = 0;
    for (int j = 0; j <= m; j++) dp[0][j] = 0;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    cout << dp[n][m] << endl;
    return 0;
}
\`\`\`

### 2. 搜索算法

**深度优先搜索（DFS）**：
\`\`\`cpp
// 见"算法进阶"文章
\`\`\`

**广度优先搜索（BFS）**：
\`\`\`cpp
// 见"算法进阶"文章
\`\`\`

**搜索剪枝**：
- 可行性剪枝
- 最优性剪枝
- 记忆化搜索

### 3. 图论

**最短路**：
- Dijkstra 算法（正权图）
- Floyd 算法（多源最短路）
- SPFA 算法（Bellman-Ford 队列优化）

\`\`\`cpp
// Dijkstra 算法
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int INF = 1e9;

void dijkstra(int s, vector<vector<pair<int, int>>> &graph, vector<int> &dist) {
    dist.assign(graph.size(), INF);
    dist[s] = 0;
    
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, s});
    
    while (!pq.empty()) {
        int d = pq.top().first;
        int u = pq.top().second;
        pq.pop();
        
        if (d > dist[u]) continue;
        
        for (auto &edge : graph[u]) {
            int v = edge.first;
            int w = edge.second;
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
}
\`\`\`

**最小生成树**：
- Prim 算法
- Kruskal 算法（并查集）

\`\`\`cpp
// Kruskal 算法
#include <iostream>
#include <algorithm>
using namespace std;

struct Edge {
    int u, v, w;
};

bool cmp(Edge a, Edge b) {
    return a.w < b.w;
}

int parent[1000];

int find(int x) {
    if (parent[x] != x) {
        parent[x] = find(parent[x]);
    }
    return parent[x];
}

bool unite(int x, int y) {
    int px = find(x), py = find(y);
    if (px == py) return false;
    parent[px] = py;
    return true;
}

int main() {
    int n, m;
    cin >> n >> m;
    
    Edge edges[m];
    for (int i = 0; i < m; i++) {
        cin >> edges[i].u >> edges[i].v >> edges[i].w;
    }
    
    sort(edges, edges + m, cmp);
    
    for (int i = 1; i <= n; i++) {
        parent[i] = i;
    }
    
    int ans = 0;
    for (int i = 0; i < m; i++) {
        if (unite(edges[i].u, edges[i].v)) {
            ans += edges[i].w;
        }
    }
    
    cout << ans << endl;
    return 0;
}
\`\`\`

### 4. 高级数据结构

- 并查集（Union-Find）
- 线段树（Segment Tree）
- 树状数组（Fenwick Tree）
- RMQ（区间最值查询）

### 5. 数学

- 组合数学（排列组合）
- 容斥原理
- 扩展欧几里得算法
- 快速幂

\`\`\`cpp
// 快速幂
long long fastPow(long long a, long long b, long long mod) {
    long long ans = 1;
    while (b) {
        if (b & 1) ans = ans * a % mod;
        a = a * a % mod;
        b >>= 1;
    }
    return ans;
}
\`\`\`

## 四、备考方法

### 1. 学习路径（CSP-J）

\`\`\`
第 1-2 个月：语法基础
  - 掌握 C++ 基础语法
  - 刷题：洛谷入门题库

第 3-4 个月：基础算法
  - 枚举、模拟、排序
  - 简单数据结构（栈、队列）

第 5-6 个月：算法进阶
  - 贪心、二分、DFS/BFS
  - 基础数论

第 7-8 个月：真题训练
  - 刷近 5 年 CSP-J 真题
  - 参加模拟考试
\`\`\`

### 2. 学习路径（CSP-S）

\`\`\`
第 1 年：CSP-J 水平
  - 先通过 CSP-J

第 2 年：基础算法
  - 动态规划（背包、LIS、LCS）
  - 图论基础（最短路、最小生成树）

第 3 年：高级算法
  - 高级数据结构
  - 动态规划优化
  - 图论进阶

第 4 年：竞赛训练
  - 刷 NOIP 提高组真题
  - 参加省选、NOI 模拟赛
\`\`\`

### 3. 推荐学习资源

**教材**：
- 《信息学奥赛一本通》（C++版）
- 《算法竞赛入门经典》（刘汝佳）
- 《算法竞赛进阶指南》（李煜东）

**在线评测**：
- **洛谷**：https://www.luogu.com.cn（最重要！）
- **OpenJudge**：http://openjudge.cn
- **Codeforces**：https://codeforces.com（国际平台）

**视频课程**：
- B站搜索"CSP 备考"
- 洛谷题库题解视频

### 4. 刷题策略

**CSP-J**：
- 每天刷 3-5 道题
- 重点：模拟、枚举、简单 DP
- 目标：刷完洛谷"普及-"和"普及"难度题目

**CSP-S**：
- 每天刷 1-2 道难题
- 重点：DP、图论、高级数据结构
- 目标：刷完洛谷"普及/提高-"到"省选/"难度题目

### 5. 考试技巧

**第一轮（笔试）**：
- 时间：2 小时
- 题型：选择题（15 道）、填空题（5 道）、阅读程序题（3 道）、完善程序题（2 道）
- 技巧：
  - 选择题：先排除明显错误选项
  - 阅读程序题：手动模拟程序运行
  - 时间分配：选择题 30 分钟，其余 90 分钟

**第二轮（上机）**：
- 时间：3.5 小时
- 题型：4 道编程题（100 分/道，共 400 分）
- 技巧：
  - 先读所有题目，从最简单的开始
  - 每题至少留 30 分钟调试
  - 文件操作（freopen）不要写错
  - 边界条件要多测试

**文件操作模板**：
\`\`\`cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // 考试时一定要用文件操作
    freopen("problem.in", "r", stdin);
    freopen("problem.out", "w", stdout);
    
    // 你的代码
    
    fclose(stdin);
    fclose(stdout);
    return 0;
}
\`\`\`

## 五、历年真题解析

### CSP-J 2025 第二轮 第 1 题（节选）

**题目**：输入 n 个正整数，输出它们的和。

**解题思路**：签到题，直接求和。

**参考代码**：
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    freopen("sum.in", "r", stdin);
    freopen("sum.out", "w", stdout);
    
    int n;
    cin >> n;
    
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        sum += x;
    }
    
    cout << sum << endl;
    
    return 0;
}
\`\`\`

### CSP-S 2025 第二轮 第 2 题（节选）

**题目**：给定一棵 n 个节点的树，每个节点有一个权值，求树上任意两点路径上权值之和的最大值。

**解题思路**：树形 DP，类似树的直径。

**参考代码**（核心部分）：
\`\`\`cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> tree;
vector<int> val;
int ans = 0;

int dfs(int u, int parent) {
    int max1 = 0, max2 = 0;  // 最长路径和次长路径
    
    for (int v : tree[u]) {
        if (v == parent) continue;
        
        int dist = dfs(v, u) + val[v];  // 从 v 到 u 的路径长度
        
        if (dist > max1) {
            max2 = max1;
            max1 = dist;
        } else if (dist > max2) {
            max2 = dist;
        }
    }
    
    ans = max(ans, max1 + max2);  // 更新答案
    return max1;  // 返回从 u 向下的最长路径
}
\`\`\`

## 六、常见问题

### Q1：CSP-J/S 有什么用？

- **小升初**：科技特长生申请材料
- **中考**：部分地区有加分或自主招生政策
- **高考**：
  - 强基计划（985/211 高校）
  - 综合评价录取
  - 保送生资格（NOI 金牌）
- **出国**：证明算法和编程能力

### Q2：CSP-J 和 CSP-S 可以同时考吗？

可以，但建议：
- 初中及以下：先考 CSP-J，通过后再考 CSP-S
- 高中：直接考 CSP-S

### Q3：第一轮没通过怎么办？

- 分析薄弱知识点，针对性补强
- 多刷选择题和阅读程序题
- 明年再战（每年只有一次机会）

### Q4：第二轮没通过怎么办？

- 继续刷题，提高编程能力
- 参加模拟赛，熟悉考试环境
- 明年再战

## 七、练习题推荐

### CSP-J

**入门**：
- **洛谷 P5708-P5715**：语法基础题
- **洛谷 P1200-P1210**：普及-难度

**提高**：
- **洛谷 P1001-P1020**：普及/提高-难度
- **洛谷 P1500-P1520**：普及/提高-难度

**真题**：
- 近 5 年 CSP-J 第二轮真题（必刷！）

### CSP-S

**提高**：
- **洛谷 P1500-P1550**：普及/提高-到提高/省选-难度
- **洛谷 P2000-P2050**：提高/省选-难度

**进阶**：
- **洛谷 P3000-P3050**：省选/NOI-难度

**真题**：
- 近 5 年 CSP-S 第二轮真题（必刷！）
- 近 5 年 NOIP 提高组真题

## 八、学习规划建议

### 小学阶段

- **4-5 年级**：学习 C++ 语法，通过 CSP-J 第一轮
- **6 年级**：冲击 CSP-J 第二轮奖项

### 初中阶段

- **初一**：CSP-J 第二轮高分，开始准备 CSP-S
- **初二**：通过 CSP-S 第一轮，冲击 CSP-S 第二轮奖项
- **初三**：CSP-S 提高组一等奖，开始准备 NOIP 提高组

### 高中阶段

- **高一**：CSP-S 二等奖以上，冲击 NOIP 提高组一等奖
- **高二**：冲击 NOI 银牌/金牌，争取保送或强基计划
- **高三**：如果已有奖项，专注于高考；否则最后一次机会

## 九、总结

CSP 是信息学奥赛的重要里程碑，需要长期积累和系统训练。

**学习建议**：
1. 早起步，但不要太早（建议 4 年级开始）
2. 重基础，语法要扎实
3. 多刷题，理论结合实践
4. 参加比赛，积累经验
5. 保持兴趣，不要功利心太强

> **一句话**：CSP 不是终点，而是起点。坚持学习，你一定能走得更远！

希望这篇指南能帮助你顺利通过 CSP 考级！
`,"getting-started-with-react":`---
title: React 入门指南
date: 2026-03-15
tags: [React, JavaScript, 前端]
description: 从零开始学习 React，掌握组件化开发和现代前端开发模式。
---

# React 入门指南

React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发并维护。它采用组件化的开发模式，让前端开发变得更加模块化和可维护。

## 为什么选择 React？

- **组件化开发**：将 UI 拆分成独立的可复用组件
- **虚拟 DOM**：高效的 DOM 更新机制
- **单向数据流**：让数据流向更可预测
- **丰富的生态**：庞大的社区和第三方库支持

## 快速开始

首先，使用 Vite 创建一个 React 项目：

\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

## 第一个组件

\`\`\`tsx
function Hello() {
  return <h1>你好，React！</h1>
}

export default Hello
\`\`\`

## 状态管理

使用 \`useState\` 管理组件状态：

\`\`\`tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      点击了 {count} 次
    </button>
  )
}
\`\`\`

> React 的哲学是：用组件构建界面，让数据驱动渲染。

希望这篇入门指南能帮助你快速上手 React 开发！
`,"git-essential-commands":`---
title: Git 必备命令速查表
date: 2026-01-10
tags: [Git, 工具, 版本控制]
description: 汇总最常用的 Git 命令，助你高效进行版本控制与团队协作。
---

# Git 必备命令速查表

Git 是现代软件开发不可或缺的版本控制工具。掌握常用命令，能大幅提升开发效率。

## 基础配置

\`\`\`bash
git config --global user.name "你的名字"
git config --global user.email "your@email.com"
git config --global core.editor "code"
\`\`\`

## 日常工作流

\`\`\`bash
# 查看状态
git status

# 添加文件到暂存区
git add .
git add src/

# 提交
git commit -m "feat: 添加新功能"

# 推送到远程
git push origin main
\`\`\`

## 分支管理

\`\`\`bash
# 创建并切换分支
git checkout -b feature/login

# 合并分支
git merge feature/login

# 删除分支
git branch -d feature/login
\`\`\`

## 撤销操作

| 场景 | 命令 |
|------|------|
| 撤销工作区修改 | \`git restore .\` |
| 撤销暂存区 | \`git restore --staged .\` |
| 修改上次提交 | \`git commit --amend\` |
| 回退到某次提交 | \`git reset --hard <commit>\` |

> 记住：已经推送到远程的提交，谨慎使用 \`git reset\`！

熟练使用 Git 是每位开发者的基本功，建议结合实际操作多加练习。
`,"understanding-typescript":`---
title: TypeScript 类型系统详解
date: 2026-02-20
tags: [TypeScript, JavaScript, 类型系统]
description: 深入理解 TypeScript 的类型系统，掌握类型安全和高级类型技巧。
---

# TypeScript 类型系统详解

TypeScript 是 JavaScript 的超集，为其添加了静态类型检查。强大的类型系统是 TypeScript 最核心的价值所在。

## 基础类型

\`\`\`typescript
let name: string = '张三'
let age: number = 25
let isStudent: boolean = false
let hobbies: string[] = ['编程', '阅读']
\`\`\`

## 接口与类型别名

\`\`\`typescript
interface User {
  id: number
  name: string
  email?: string  // 可选属性
}

type ID = number | string
\`\`\`

## 泛型

泛型让类型更加灵活和可复用：

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg
}

const result = identity<string>("hello")
\`\`\`

## 实用技巧

1. **利用类型推导** — 让 TypeScript 自动推断类型
2. **严格模式** — 在 \`tsconfig.json\` 中启用 \`strict: true\`
3. **类型守卫** — 使用 \`typeof\`、\`instanceof\` 缩小类型范围

> 好的类型设计能让 Bug 在编译阶段就被发现，而不是在生产环境崩溃。

TypeScript 的学习曲线可能稍陡，但投入的时间会在项目维护阶段得到丰厚回报。
`};function aP(){const{slug:e}=sh(),{articles:t}=mr(),[n,r]=j.useState(null),[i,l]=j.useState(!0),o=t.find(u=>u.slug===e);return j.useEffect(()=>{if(!e)return;l(!0);const u=uP[e];if(u){r(u),l(!1);return}fetch(`/programming-blog/articles/${e}.md`).then(a=>a.ok?a.text():Promise.reject("not found")).then(a=>{r(a),l(!1)}).catch(()=>{r(null),l(!1)})},[e]),i?k.jsx("div",{className:"container",children:k.jsx("p",{children:"加载中..."})}):o?k.jsxs("div",{className:"container",children:[k.jsx("a",{href:"/",style:{display:"inline-block",marginBottom:"1rem",fontSize:"0.9rem"},children:"← 返回首页"}),k.jsxs("article",{className:"post-detail",children:[k.jsx("h1",{children:o.title}),k.jsxs("div",{className:"post-meta",children:[k.jsx("span",{children:o.date}),k.jsx("span",{children:" · "}),k.jsxs("span",{children:["作者：",o.authorName]}),o.status!=="approved"&&k.jsxs("span",{style:{color:"#f59e0b",marginLeft:"0.5rem"},children:["（",o.status==="pending"?"待审核":"已拒绝","）"]})]}),k.jsx("div",{className:"post-tags",style:{marginBottom:"1rem"},children:o.tags.map(u=>k.jsx(ke,{to:`/tags/${u}`,className:"tag",children:u},u))}),k.jsx("div",{className:"post-body",children:n?k.jsx(tm,{remarkPlugins:[oP],children:n.replace(/^---[\s\S]*?---\n*/,"")}):k.jsx("p",{style:{color:"var(--text-secondary)"},children:"文章内容暂不可用。"})})]})]}):k.jsx("div",{className:"container",children:k.jsxs("p",{children:["文章未找到。",k.jsx(ke,{to:"/",children:"返回首页"})]})})}const ws=[{slug:"sorting-algorithms",title:"排序算法详解",date:"2026-06-13",tags:["算法","排序","快排","归并","堆排序"],description:"深入讲解常用的排序算法：快速排序、归并排序、堆排序的原理、实现和时间复杂度分析。"},{slug:"search-algorithms",title:"查找算法详解",date:"2026-06-13",tags:["算法","查找","二分","哈希"],description:"深入讲解常用的查找算法：顺序查找、二分查找、哈希查找的原理、实现和应用场景。"},{slug:"graph-theory-basics",title:"图论基础",date:"2026-06-13",tags:["算法","图论","DFS","BFS","最短路"],description:"图论是算法竞赛的核心内容，本文讲解图的基本概念、存储方式和基础算法。"},{slug:"problem-bank-luogu-nowcoder",title:"大题库：洛谷+牛客题目导航",date:"2026-06-13",tags:["题库","洛谷","牛客","题目","练习"],description:"汇总洛谷和牛客上的优质题目，按知识点分类，方便系统性刷题和查漏补缺。"},{slug:"csp-guide",title:"CSP 考级完全指南",date:"2026-06-13",tags:["CSP","考级","信息学奥赛","C++"],description:"CSP-J/S（CCF非专业级软件能力认证）完全指南，包含考试介绍、知识点、备考方法和历年真题解析。"},{slug:"gesp-guide",title:"GESP 考级完全指南",date:"2026-06-13",tags:["GESP","考级","编程","C++"],description:"GESP（青少年软件编程等级考试）完全指南，包含考试介绍、各级别知识点、备考方法和真题解析。"},{slug:"algorithm-advanced-greedy-dp-dfs",title:"算法进阶：贪心、DP、DFS",date:"2026-06-13",tags:["算法","贪心","动态规划","DFS","搜索"],description:"深入讲解三种重要的算法思想：贪心算法、动态规划和深度优先搜索，掌握它们的解题思路。"},{slug:"algorithm-basics-branch-loop",title:"算法基础：分支与循环",date:"2026-06-13",tags:["算法","基础","分支","循环","C++"],description:"掌握编程最基础的两个概念：分支结构和循环结构，这是所有算法的基石。"},{slug:"getting-started-with-react",title:"React 入门指南",date:"2026-03-15",tags:["React","JavaScript","前端"],description:"从零开始学习 React，掌握组件化开发和现代前端开发模式。"},{slug:"understanding-typescript",title:"TypeScript 类型系统详解",date:"2026-02-20",tags:["TypeScript","JavaScript","类型系统"],description:"深入理解 TypeScript 的类型系统，掌握类型安全和高级类型技巧。"},{slug:"git-essential-commands",title:"Git 必备命令速查表",date:"2026-01-10",tags:["Git","工具","版本控制"],description:"汇总最常用的 Git 命令，助你高效进行版本控制与团队协作。"}];ws.sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime());const sP=()=>{const e=new Set;return ws.forEach(t=>t.tags.forEach(n=>e.add(n))),Array.from(e).sort()},Go=e=>ws.filter(t=>t.tags.includes(e));function Uf(){const{tag:e}=sh(),t=sP();if(e){const n=Go(e);return k.jsxs("div",{className:"container",children:[k.jsx("a",{href:"/",style:{display:"inline-block",marginBottom:"1rem",fontSize:"0.9rem"},children:"← 返回首页"}),k.jsxs("h1",{style:{fontSize:"1.5rem",marginBottom:"0.25rem"},children:["标签：",e]}),k.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"1.5rem"},children:["共 ",n.length," 篇文章"]}),n.map(r=>k.jsxs("article",{className:"post-card",children:[k.jsx("h2",{children:k.jsx(ke,{to:`/post/${r.slug}`,children:r.title})}),k.jsx("div",{className:"post-meta",children:k.jsx("span",{children:r.date})}),k.jsx("div",{className:"post-tags",children:r.tags.map(i=>k.jsx(ke,{to:`/tags/${i}`,className:"tag",children:i},i))})]},r.slug)),n.length===0&&k.jsx("p",{style:{color:"var(--text-secondary)"},children:"该标签下暂无文章。"})]})}return k.jsxs("div",{className:"container tags-page",children:[k.jsx("h1",{children:"标签分类"}),k.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem",marginBottom:"2rem",marginTop:"1rem"},children:t.map(n=>{const r=Go(n).length;return k.jsxs(ke,{to:`/tags/${n}`,style:{background:"var(--tag-bg)",color:"var(--tag-text)",padding:"0.4rem 1rem",borderRadius:"6px",fontWeight:500,fontSize:"0.9rem"},children:[n," (",r,")"]},n)})}),t.map(n=>k.jsxs("div",{className:"tag-section",children:[k.jsx("h2",{children:n}),k.jsx("ul",{children:Go(n).map(r=>k.jsxs("li",{children:[k.jsx(ke,{to:`/post/${r.slug}`,children:r.title}),k.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginLeft:"0.5rem"},children:r.date})]},r.slug))})]},n))]})}function cP(){return k.jsxs("div",{className:"container",children:[k.jsx("a",{href:"/",style:{display:"inline-block",marginBottom:"1rem",fontSize:"0.9rem"},children:"← 返回首页"}),k.jsxs("div",{className:"about-page",children:[k.jsx("h1",{children:"关于这个博客"}),k.jsx("p",{children:"欢迎来到我的编程博客！这里是我分享编程知识、开发经验和学习心得的地方。"}),k.jsxs("p",{children:["博客基于 ",k.jsx("strong",{children:"React + TypeScript + Vite"})," 构建，支持 Markdown 渲染， 文章涵盖前端开发、后端技术、工具使用等编程相关主题。"]}),k.jsx("h2",{style:{fontSize:"1.2rem",marginTop:"1.5rem",marginBottom:"0.75rem"},children:"技术栈"}),k.jsxs("ul",{children:[k.jsxs("li",{children:[k.jsx("strong",{children:"框架"}),"：React 18"]}),k.jsxs("li",{children:[k.jsx("strong",{children:"语言"}),"：TypeScript"]}),k.jsxs("li",{children:[k.jsx("strong",{children:"构建工具"}),"：Vite"]}),k.jsxs("li",{children:[k.jsx("strong",{children:"路由"}),"：React Router"]}),k.jsxs("li",{children:[k.jsx("strong",{children:"Markdown 渲染"}),"：react-markdown + remark-gfm"]}),k.jsxs("li",{children:[k.jsx("strong",{children:"部署"}),"：GitHub Pages"]})]}),k.jsx("h2",{style:{fontSize:"1.2rem",marginTop:"1.5rem",marginBottom:"0.75rem"},children:"联系方式"}),k.jsx("p",{children:"如果你对博客内容有任何疑问或建议，欢迎通过以下方式联系我："}),k.jsxs("ul",{children:[k.jsxs("li",{children:["GitHub：",k.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:"@yourusername"})]}),k.jsx("li",{children:"邮箱：your@email.com"})]}),k.jsx("p",{style:{marginTop:"1.5rem",color:"var(--text-secondary)",fontSize:"0.9rem"},children:"© 2026 编程博客 — 用代码改变世界 🚀"})]})]})}const fP="http://127.0.0.1:8765";function pP(){const{user:e,addArticle:t}=mr(),n=ts(),[r,i]=j.useState(""),[l,o]=j.useState(""),[u,a]=j.useState(""),[s,f]=j.useState(""),[c,p]=j.useState(!1),[d,g]=j.useState("");if(!e)return k.jsxs("p",{style:{padding:"2rem"},children:["请先",k.jsx("a",{href:"/login",children:"登录"}),"。"]});const x=new Date().toISOString().slice(0,10),S=r.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g,"-").replace(/^-|-$/g,""),h=async()=>{if(!r||!s){g("❌ 请填写标题和内容");return}if(!S){g("❌ 标题无法生成有效文件名，请更换标题");return}p(!0),g("");try{try{const y=`C:\\Users\\Administrator\\WorkBuddy\\2026-06-07-18-54-05\\programming-blog\\public\\articles\\${S}.md`;await fetch(`${fP}/api/file/write`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:y,content:s})})}catch{}const m=l.split(/,|，/).map(y=>y.trim()).filter(Boolean);t({slug:S,title:r,date:x,tags:m,summary:u,status:"pending",authorId:e.id,authorName:e.username}),g("✅ 发布成功！文章已进入审核队列，审核通过后会自动展示。"),setTimeout(()=>n("/"),1800)}catch(m){const y=m instanceof Error?m.message:String(m);g("❌ "+y)}finally{p(!1)}};return k.jsxs("div",{className:"container",style:{maxWidth:900,margin:"0 auto",padding:"1rem"},children:[k.jsx("h1",{style:{fontSize:"1.5rem",marginBottom:"1rem"},children:"📝 发布新文章"}),k.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"1rem"},children:["👤 发布者：",e.username," | 📌 文章发布后需管理员审核通过才会展示"]}),d&&k.jsx("div",{style:{padding:"0.75rem 1rem",borderRadius:6,marginBottom:"1rem",background:d.startsWith("✅")?"#dcfce7":"#fee2e2",color:d.startsWith("✅")?"#166534":"#991b1b"},children:d}),k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"},children:[k.jsxs("div",{children:[k.jsx("label",{style:{display:"block",fontWeight:600,marginBottom:4},children:"标题 *"}),k.jsx("input",{value:r,onChange:m=>i(m.target.value),placeholder:"文章标题",style:{width:"100%",padding:"0.5rem",borderRadius:6,border:"1px solid #d1d5db",boxSizing:"border-box"}})]}),k.jsxs("div",{children:[k.jsx("label",{style:{display:"block",fontWeight:600,marginBottom:4},children:"日期"}),k.jsx("input",{value:x,disabled:!0,style:{width:"100%",padding:"0.5rem",borderRadius:6,border:"1px solid #d1d5db",background:"#f3f4f6",boxSizing:"border-box"}})]})]}),k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"},children:[k.jsxs("div",{children:[k.jsx("label",{style:{display:"block",fontWeight:600,marginBottom:4},children:"标签（逗号分隔）"}),k.jsx("input",{value:l,onChange:m=>o(m.target.value),placeholder:"React, TypeScript, 前端",style:{width:"100%",padding:"0.5rem",borderRadius:6,border:"1px solid #d1d5db",boxSizing:"border-box"}})]}),k.jsxs("div",{children:[k.jsx("label",{style:{display:"block",fontWeight:600,marginBottom:4},children:"简介"}),k.jsx("input",{value:u,onChange:m=>a(m.target.value),placeholder:"文章简短描述",style:{width:"100%",padding:"0.5rem",borderRadius:6,border:"1px solid #d1d5db",boxSizing:"border-box"}})]})]}),k.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",minHeight:400},children:[k.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[k.jsx("label",{style:{display:"block",fontWeight:600,marginBottom:4},children:"内容（Markdown）*"}),k.jsx("textarea",{value:s,onChange:m=>f(m.target.value),placeholder:"写点什么...",style:{flex:1,padding:"0.75rem",borderRadius:6,border:"1px solid #d1d5db",fontFamily:"monospace",fontSize:14,resize:"none"}})]}),k.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[k.jsx("label",{style:{display:"block",fontWeight:600,marginBottom:4},children:"预览"}),k.jsx("div",{className:"markdown-body",style:{flex:1,padding:"0.75rem",borderRadius:6,border:"1px solid #d1d5db",overflow:"auto",background:"#fafafa"},children:s?k.jsx(tm,{children:s}):k.jsx("span",{style:{color:"#9ca3af"},children:"预览将在此显示..."})})]})]}),k.jsxs("div",{style:{marginTop:"1rem",display:"flex",gap:"0.75rem"},children:[k.jsx("button",{onClick:h,disabled:c,style:{padding:"0.6rem 1.5rem",borderRadius:6,border:"none",background:c?"#9ca3af":"#2563eb",color:"#fff",cursor:c?"not-allowed":"pointer",fontWeight:600},children:c?"发布中...":"🚀 发布文章"}),k.jsx("button",{onClick:()=>n("/"),style:{padding:"0.6rem 1.5rem",borderRadius:6,border:"1px solid #d1d5db",background:"#fff",cursor:"pointer"},children:"取消"})]}),S&&k.jsxs("div",{style:{marginTop:"0.75rem",fontSize:13,color:"#6b7280"},children:["文件将保存为：",k.jsxs("code",{style:{background:"#f3f4f6",padding:"0.15rem 0.4rem",borderRadius:4},children:[S,".md"]})]})]})}function dP(){const{login:e,register:t}=mr(),n=ts(),[r,i]=j.useState("login"),[l,o]=j.useState(""),[u,a]=j.useState(""),[s,f]=j.useState(""),c=p=>{if(p.preventDefault(),!l.trim()||!u){f("❌ 请填写用户名和密码");return}r==="login"?e(l.trim(),u)?n("/"):f("❌ 用户名或密码错误"):t(l.trim(),u)?n("/"):f("❌ 用户名已存在")};return k.jsx("div",{className:"login-page",children:k.jsxs("div",{className:"login-card",children:[k.jsx("h1",{children:"📝 编程博客"}),k.jsxs("div",{className:"mode-tabs",children:[k.jsx("button",{className:r==="login"?"active":"",onClick:()=>{i("login"),f("")},children:"登录"}),k.jsx("button",{className:r==="register"?"active":"",onClick:()=>{i("register"),f("")},children:"注册"})]}),k.jsxs("form",{onSubmit:c,children:[k.jsxs("label",{children:["用户名",k.jsx("input",{value:l,onChange:p=>o(p.target.value),placeholder:"请输入用户名",autoFocus:!0})]}),k.jsxs("label",{children:["密码",k.jsx("input",{type:"password",value:u,onChange:p=>a(p.target.value),placeholder:"请输入密码"})]}),s&&k.jsx("p",{className:"msg",children:s}),k.jsx("button",{type:"submit",className:"btn-submit",children:r==="login"?"🚀 登录":"✨ 注册"})]}),r==="register"&&k.jsx("p",{className:"hint",children:"💡 第一个注册的用户将成为管理员！"}),k.jsx(ke,{to:"/",className:"back-link",children:"← 返回首页"})]})})}function hP(){const{user:e,isAdmin:t,articles:n,updateArticleStatus:r,logout:i}=mr(),[l,o]=j.useState("pending"),[u,a]=j.useState(""),[s,f]=j.useState(null);if(!e)return k.jsxs("p",{style:{padding:"2rem"},children:["请先",k.jsx("a",{href:"/login",children:"登录"}),"。"]});if(!t)return k.jsxs("p",{style:{padding:"2rem"},children:["⚠️ 仅管理员可访问。",k.jsx(ke,{to:"/",children:"返回首页"})]});const c=l==="all"?n:n.filter(S=>S.status===l),p={all:n.length,pending:n.filter(S=>S.status==="pending").length,approved:n.filter(S=>S.status==="approved").length,rejected:n.filter(S=>S.status==="rejected").length},d=(S,h)=>{r(S,h,u),f(null),a("")},g={pending:"⏳ 待审核",approved:"✅ 已通过",rejected:"❌ 已拒绝"},x={pending:"#f59e0b",approved:"#10b981",rejected:"#ef4444"};return k.jsxs("div",{children:[k.jsxs("header",{style:{background:"#1f2937",padding:"0.75rem 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",color:"#fff"},children:[k.jsx("h1",{style:{fontSize:"1.1rem",fontWeight:600},children:"⚙️ 管理员后台"}),k.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[k.jsxs("span",{style:{fontSize:"0.85rem",color:"#9ca3af"},children:["👤 ",e.username,"（管理员）"]}),k.jsx("button",{onClick:i,style:{background:"#ef4444",color:"#fff",border:"none",padding:"0.35rem 0.8rem",borderRadius:"6px",cursor:"pointer",fontSize:"0.85rem"},children:"退出"})]})]}),k.jsxs("div",{style:{display:"flex",minHeight:"calc(100vh - 52px)"},children:[k.jsxs("aside",{style:{width:"220px",background:"#f9fafb",borderRight:"1px solid #e5e7eb",padding:"1rem"},children:[["all","pending","approved","rejected"].map(S=>k.jsxs("button",{onClick:()=>o(S),style:{display:"block",width:"100%",textAlign:"left",padding:"0.6rem 0.8rem",background:l===S?"#6366f1":"transparent",color:l===S?"#fff":"#374151",border:"none",borderRadius:"8px",cursor:"pointer",marginBottom:"0.3rem",fontSize:"0.9rem"},children:[S==="all"?"📋 全部":g[S],"（",p[S],"）"]},S)),k.jsx(ke,{to:"/",style:{display:"block",marginTop:"1rem",fontSize:"0.85rem",color:"#6366f1"},children:"← 返回博客"})]}),k.jsx("main",{style:{flex:1,padding:"1.5rem",overflowY:"auto"},children:c.length===0?k.jsx("p",{style:{color:"#9ca3af",fontSize:"0.95rem"},children:"暂无文章"}):k.jsx("div",{style:{display:"grid",gap:"1rem"},children:c.map(S=>{var h;return k.jsxs("div",{style:{background:"#fff",border:"1px solid #e5e7eb",borderRadius:"10px",padding:"1.2rem"},children:[k.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:k.jsxs("div",{children:[k.jsx("h3",{style:{margin:"0 0 0.3rem",fontSize:"1.05rem"},children:S.title}),k.jsxs("p",{style:{margin:"0 0 0.3rem",fontSize:"0.8rem",color:"#9ca3af"},children:["作者：",S.authorName," | 日期：",S.date]}),k.jsx("span",{style:{fontSize:"0.75rem",padding:"0.15rem 0.5rem",borderRadius:"999px",color:"#fff",background:x[S.status]},children:g[S.status]})]})}),S.status==="pending"&&k.jsxs("div",{style:{marginTop:"0.8rem",display:"flex",gap:"0.5rem",alignItems:"center",flexWrap:"wrap"},children:[k.jsx("button",{onClick:()=>d(S.slug,"approved"),style:{background:"#10b981",color:"#fff",border:"none",padding:"0.35rem 0.8rem",borderRadius:"6px",cursor:"pointer",fontSize:"0.85rem"},children:"✅ 通过"}),k.jsx("button",{onClick:()=>f(s===S.slug?null:S.slug),style:{background:"#ef4444",color:"#fff",border:"none",padding:"0.35rem 0.8rem",borderRadius:"6px",cursor:"pointer",fontSize:"0.85rem"},children:"❌ 拒绝"}),s===S.slug&&k.jsxs(k.Fragment,{children:[k.jsx("input",{value:u,onChange:m=>a(m.target.value),placeholder:"拒绝原因（可选）",style:{padding:"0.35rem 0.6rem",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"0.85rem",flex:"1"}}),k.jsx("button",{onClick:()=>d(S.slug,"rejected"),style:{background:"#dc2626",color:"#fff",border:"none",padding:"0.35rem 0.8rem",borderRadius:"6px",cursor:"pointer"},children:"确认拒绝"})]})]}),S.status!=="pending"&&k.jsxs("p",{style:{margin:"0.5rem 0 0",fontSize:"0.8rem",color:"#9ca3af"},children:["审核人：",S.reviewedBy," | 时间：",(h=S.reviewedAt)==null?void 0:h.split("T")[0],S.reviewNote&&k.jsxs(k.Fragment,{children:[" | 备注：",S.reviewNote]})]})]},S.slug)})})})]})]})}const mP=()=>{const e=xi(),{user:t,isAdmin:n,logout:r}=mr(),i=l=>!!(l==="/"&&e.pathname==="/"||l!=="/"&&e.pathname.startsWith(l));return k.jsx("nav",{className:"navbar",children:k.jsxs("div",{className:"navbar-inner",children:[k.jsxs(ke,{to:"/",className:"navbar-logo",children:["编程",k.jsx("span",{children:"博客"})]}),k.jsxs("ul",{className:"navbar-links",children:[k.jsx("li",{children:k.jsx(ke,{to:"/",className:i("/")?"active":"",children:"首页"})}),k.jsx("li",{children:k.jsx(ke,{to:"/tags",className:i("/tags")?"active":"",children:"标签"})}),k.jsx("li",{children:k.jsx(ke,{to:"/about",className:i("/about")?"active":"",children:"关于"})}),t&&k.jsx("li",{children:k.jsx(ke,{to:"/new",className:"nav-btn-new",children:"✏️ 写文章"})}),n&&k.jsx("li",{children:k.jsx(ke,{to:"/admin",className:"nav-btn-admin",children:"⚙️ 管理"})}),t?k.jsxs("li",{className:"nav-user",children:[k.jsxs("span",{children:["👤 ",t.username]}),k.jsx("button",{onClick:r,className:"nav-logout-btn",children:"退出"})]}):k.jsx("li",{children:k.jsx(ke,{to:"/login",className:"nav-btn-login",children:"🔐 登录"})})]})]})})};function gP(){return k.jsxs(h0,{children:[k.jsx(mP,{}),k.jsxs(Z1,{children:[k.jsx(Tt,{path:"/",element:k.jsx(m0,{})}),k.jsx(Tt,{path:"/post/:slug",element:k.jsx(aP,{})}),k.jsx(Tt,{path:"/tags",element:k.jsx(Uf,{})}),k.jsx(Tt,{path:"/tags/:tag",element:k.jsx(Uf,{})}),k.jsx(Tt,{path:"/about",element:k.jsx(cP,{})}),k.jsx(Tt,{path:"/new",element:k.jsx(pP,{})}),k.jsx(Tt,{path:"/login",element:k.jsx(dP,{})}),k.jsx(Tt,{path:"/admin",element:k.jsx(hP,{})})]})]})}Jo.createRoot(document.getElementById("root")).render(k.jsx(Xf.StrictMode,{children:k.jsx(o0,{basename:"/programming-blog",children:k.jsx(gP,{})})}));
