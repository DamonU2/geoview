/*! Package:geoview-footer-panel: 0.1.0 - "591787879bf3ca2417e28bb4526cb36b64448b47" - 2023-07-26T17:02:25.037Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{28954:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))r.call(a,l)&&(u[l]=a[l]);if(t){i=t(a);for(var f=0;f<i.length;f++)n.call(a,i[f])&&(u[i[f]]=a[i[f]])}}return u}},80881:(e,t,r)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
r(28954);var n=r(46393),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,f=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:f,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},86956:(e,t,r)=>{
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n=r(28954),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,u=60110,c=60112;t.Suspense=60113;var l=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),i=s("react.provider"),u=s("react.context"),c=s("react.forward_ref"),t.Suspense=s("react.suspense"),l=s("react.memo"),f=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var h=g.prototype=new b;h.constructor=g,n(h,m.prototype),h.isPureReactComponent=!0;var E={current:null},_=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,a={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];a.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:u,props:a,_owner:E.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function Z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,r,n,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+Z(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),A(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var f=n+Z(u=e[l],l);c+=A(u,t,r,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),l=0;!(u=e.next()).done;)c+=A(u=u.value,t,r,f=n+Z(u,l++),i);else if("object"===u)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function L(e,t,r){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function N(){var e=R.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:L,forEach:function(e,t,r){L(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=E.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)_.call(t,f)&&!w.hasOwnProperty(f)&&(a[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)a.children=r;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];a.children=l}return{$$typeof:o,type:e.type,key:i,ref:u,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return N().useCallback(e,t)},t.useContext=function(e,t){return N().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return N().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return N().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return N().useLayoutEffect(e,t)},t.useMemo=function(e,t){return N().useMemo(e,t)},t.useReducer=function(e,t,r){return N().useReducer(e,t,r)},t.useRef=function(e){return N().useRef(e)},t.useState=function(e){return N().useState(e)},t.version="17.0.2"},46393:(e,t,r)=>{e.exports=r(86956)},45202:(e,t,r)=>{e.exports=r(80881)},89867:(e,t,r)=>{var n=r(28990),o=r(34839),a=r(28815),i=r(66301),u=r(3806),c=r(42251),l=r(26800),f=r(36696);const s=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":true,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","details","data-grid"]},"minItems":0,"default":["legend","details","data-grid"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."},"collapsed":{"type":"boolean","default":true,"description":"State of footer panel when map is loaded"}},"required":["suportedLanguages","tabs"]}'),p=JSON.parse('{"tabs":{"defaultTabs":["legend","details","data-grid"],"customTabs":[]},"suportedLanguages":["en","fr"]}');var d=r(63460),y=r(45202),v=window;function m(e){var t=e.mapId,r=v.cgpv,n=r.api,o=r.react,a=o.useState,i=o.useEffect,u=a([]),c=(0,d.Z)(u,2),l=c[0],s=c[1],p=a(),m=(0,d.Z)(p,2),b=m[0],g=m[1],h=a([]),E=(0,d.Z)(h,2),_=E[0],w=E[1],O=a(null),S=(0,d.Z)(O,2),j=S[0],Z=S[1];return i((function(){return n.event.on(n.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,f.gNW)(e)){var r=e.resultSets,o=[];Object.keys(r).forEach((function(e){var a=(0,f.dIw)(n.map(t).layer.registeredLayers[e].layerName,t),i=r[e];i.length>0&&o.push({layerPath:e,layerName:a,features:i})})),o.length>0?s(o):s([])}else s([])}),"".concat(t,"/$FeatureInfoLayerSet$")),n.event.on(n.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,(function(e){if((0,f.gux)(e)){var t=e.coordinates;Z(e.handlerName),w(t.lnglat)}else w([])}),t),function(){n.event.off(n.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,t),n.event.off(n.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,t)}}),[]),i((function(){g(n.map(t).details.createDetails(t,l,{mapId:t,location:_,handlerName:j}))}),[l,_]),(0,y.jsx)("div",{children:b})}var b=r(51615),g=window;function h(e){var t=e.mapId,r=g.cgpv,n=r.api,o=r.react,a=o.useState,i=o.useEffect,u=a(),c=(0,d.Z)(u,2),l=c[0],s=c[1],p=a([]),v=(0,d.Z)(p,2),m=v[0],h=v[1],E=function(){var e;void 0!==(null===(e=n.map(t).layer)||void 0===e?void 0:e.layerOrder)&&h((0,b.Z)(n.map(t).layer.layerOrder).reverse())};return i((function(){return n.event.on(n.eventNames.MAP.EVENT_MAP_LOADED,(function(){E()}),t),n.event.on(n.eventNames.LAYER.EVENT_REMOVE_LAYER,(function(e){(0,f.UKz)(e)&&h((function(t){return t.filter((function(t){return t!==e.geoviewLayer.geoviewLayerId}))}))}),t),n.event.on(n.eventNames.LAYER.EVENT_ADD_LAYER,(function(e){(0,f.riW)(e)&&n.event.on(n.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){E(),n.event.off(n.eventNames.LAYER.EVENT_LAYER_ADDED,"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),t),function(){n.event.off(n.eventNames.MAP.EVENT_MAP_LOADED,t),n.event.off(n.eventNames.LAYER.EVENT_ADD_LAYER,t),n.event.off(n.eventNames.LAYER.EVENT_REMOVE_LAYER,t)}}),[]),i((function(){s(n.map(t).legend.createLegend({layerIds:m,isRemoveable:!1,canSetOpacity:!0,canZoomTo:!0}))}),[m]),(0,y.jsx)("div",{children:l})}var E=window;function _(e){var t=e.mapId,r=E.cgpv,n=r.api,o=r.ui,a=r.react,i=o.elements.Tabs,u=a.useState,c=a.useEffect,l=u([]),s=(0,d.Z)(l,2),p=s[0],v=s[1];return c((function(){v(Object.keys(n.map(t).layer.geoviewLayers))}),[n,t]),setTimeout((function(){p.forEach((function(e){var t=document.getElementById("".concat(e,"-groupLayerSelection"));t&&t.addEventListener("change",(function(){var t=this.selectedIndex,r=document.getElementsByClassName("".concat(e,"-layer-datagrid-table"));if(r.length>0)for(var n=0;n<r.length;n++)r[n].setAttribute("style","display:".concat(n!==t?"none":"block"))}))}))}),2e3),(0,y.jsx)(i,{tabsProps:{variant:"scrollable"},tabs:p.map((function(e,r){var o=n.map(t).layer.geoviewLayers[e],a=(0,f.dIw)(o.geoviewLayerName,t);return{value:r,label:void 0!==a?a:"data-".concat(r),content:function(){return n.map(t).dataGrid.createDataGrid({layerId:e})}}}))})}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var o=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,u.Z)(this,r)}}var O=window,S=function(e){(0,i.Z)(r,e);var t=w(r);function r(e,o){var i;return(0,n.Z)(this,r),i=t.call(this,e,o),(0,l.Z)((0,a.Z)(i),"schema",(function(){return s})),(0,l.Z)((0,a.Z)(i),"defaultConfig",(function(){return(0,f.ZQJ)(p)})),(0,l.Z)((0,a.Z)(i),"translations",(0,f.ZQJ)({en:{legend:"Legend",details:"Details",dataGrid:"Data"},fr:{legend:"Légende",details:"Détails",dataGrid:"Données"}})),(0,l.Z)((0,a.Z)(i),"added",(function(){var e=(0,a.Z)(i),t=e.configObj,r=e.pluginProps.mapId,n=O.cgpv;if(n){var o=n.api,u=o.map(r),c=u.displayLanguage,l=u.footerTabs,s=u.map.getTargetElement().parentElement;s&&(!1===(null==t?void 0:t.collapsed)?s.style.height="calc( 100% - 300px )":s.style.height="calc( 100% - 55px )");var p=null==t?void 0:t.tabs.defaultTabs,d=0;if(p.includes("legend")&&(l.createFooterTab({value:d,label:i.translations[c].legend,content:function(){return(0,y.jsx)(h,{mapId:r})}}),d++),p.includes("details")){var v=d;l.createFooterTab({value:v,label:i.translations[c].details,content:function(){return(0,y.jsx)(m,{mapId:r})}}),d++,o.event.on(o.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,f.gNW)(e)){var t=e.resultSets,r=[];Object.keys(t).forEach((function(e){r=r.concat(t[e])})),r.length>0&&l.selectFooterTab(v)}}),"".concat(r,"/$FeatureInfoLayerSet$"))}p.includes("data-grid")&&(l.createFooterTab({value:d,label:i.translations[c].dataGrid,content:function(){return(0,y.jsx)(_,{mapId:r})}}),d++);for(var b=null==t?void 0:t.tabs.customTabs,g=0;g<b.length;g++){var E=b[g];l.createFooterTab({value:d,label:E.title,content:E.contentHTML}),d++}}})),i.buttonPanel=null,i}return(0,o.Z)(r,[{key:"removed",value:function(){O.cgpv}}]),r}(f.Vw$);O.plugins=O.plugins||{},O.plugins["footer-panel"]=(0,f.RFZ)(S)},58104:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:()=>n})},28815:(e,t,r)=>{function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:()=>n})},28990:(e,t,r)=>{function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:()=>n})},34839:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(5216);function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,n.Z)(o.key),o)}}function a(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}},26800:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(5216);function o(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},42251:(e,t,r)=>{function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}r.d(t,{Z:()=>n})},66301:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(97453);function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,n.Z)(e,t)}},3806:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(55484),o=r(28815);function a(e,t){if(t&&("object"===(0,n.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}},97453:(e,t,r)=>{function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}r.d(t,{Z:()=>n})},63460:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(49520);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},51615:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(58104);var o=r(49520);function a(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},5216:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(55484);function o(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}},55484:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:()=>n})},49520:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(58104);function o(e,t){if(e){if("string"==typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},e=>{var t;t=89867,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map