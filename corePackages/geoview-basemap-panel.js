/*! Package:geoview-basemap-panel: 0.1.0 - "add75aea40161f200380d636fb373c3c04149432" - 2023-06-28T16:07:11.845Z */
(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[286],{28954:e=>{"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in a=Object(arguments[u]))r.call(a,c)&&(s[c]=a[c]);if(t){i=t(a);for(var l=0;l<i.length;l++)n.call(a,i[l])&&(s[i[l]]=a[i[l]])}}return s}},80881:(e,t,r)=>{"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */r(28954);var n=r(46393),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:i.current}}t.jsx=c,t.jsxs=c},86956:(e,t,r)=>{"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(28954),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,u=60112;t.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),i=p("react.provider"),s=p("react.context"),u=p("react.forward_ref"),t.Suspense=p("react.suspense"),c=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var g=v.prototype=new b;g.constructor=v,n(g,h.prototype),g.isPureReactComponent=!0;var w={current:null},j=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!_.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];a.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+S(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=n+S(s=e[c],c);u+=C(s,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(s=e.next()).done;)u+=C(s=s.value,t,r,l=n+S(s,c++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var k={current:null};function Z(){var e=k.current;if(null===e)throw Error(d(321));return e}var L={ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),i=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){c=Array(l);for(var p=0;p<l;p++)c[p]=arguments[p+2];a.children=c}return{$$typeof:o,type:e.type,key:i,ref:s,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return Z().useCallback(e,t)},t.useContext=function(e,t){return Z().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return Z().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return Z().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return Z().useLayoutEffect(e,t)},t.useMemo=function(e,t){return Z().useMemo(e,t)},t.useReducer=function(e,t,r){return Z().useReducer(e,t,r)},t.useRef=function(e){return Z().useRef(e)},t.useState=function(e){return Z().useState(e)},t.version="17.0.2"},46393:(e,t,r)=>{"use strict";e.exports=r(86956)},45202:(e,t,r)=>{"use strict";e.exports=r(80881)},80593:(e,t,r)=>{"use strict";var n=r(28990),o=r(34839),a=r(28815),i=r(66301),s=r(3806),u=r(42251),c=r(26800),l=r(36696),p=r(51615),f=r(83139),d=r(63460),m=r(1853),y=r.n(m),h=r(45202),b=window;function v(e){var t=e.mapId,r=e.config,n=b.cgpv,o=n.api.map(t),a=n.api,i=n.ui,s=n.react,u=i.elements,c=u.Select,m=u.Card,v=s.useState,g=s.useEffect,w=v([]),j=(0,d.Z)(w,2),_=j[0],x=j[1],P=v(""),O=(0,d.Z)(P,2),S=O[0],C=O[1],E=v(r.canSwichProjection),I=(0,d.Z)(E,1)[0],k=i.makeStyles((function(e){return{basemapCard:{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"1px solid ".concat(e.basemapPanel.borderDefault),borderRadius:6,boxShadow:"none",marginBottom:16,transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:0},"& .MuiCardHeader-root":{backgroundColor:e.palette.grey.A700,color:e.basemapPanel.header,fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .basemapCardThumbnail":{position:"absolute",height:"100%",width:"100%",objectFit:"cover",top:0,left:0},"& .basemapCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.basemapPanel.overlayDefault,transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.basemapPanel.borderHover,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayHover}}},"&.active":{borderColor:e.basemapPanel.borderActive,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayActive}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}))(),Z=r.supportedProjections.map((function(e){return null==e?void 0:e.projectionCode}))||[],L=v(o.mapFeaturesConfig.map.viewSettings.projection),N=(0,d.Z)(L,2),A=N[0],B=N[1],R=function(e){o.basemap.setBasemap(e),C(e)},T=function(){var e=(0,f.Z)(y().mark((function e(n){var i,s,u,c,f,d;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=(0,l.ZQJ)(r.supportedProjections.find((function(e){return e.projectionCode===n}))),s=!1,a.map(t).basemap.basemaps=[],x([]),u=y().mark((function e(){var r,n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=i.customBasemaps[c],(n=a.map(t).basemap.createCustomBasemap(r))&&x((function(e){return[].concat((0,p.Z)(e),[n])})),n&&0===c&&""===S&&(R(n.basemapId),s=!0);case 4:case"end":return e.stop()}}),e)})),c=0;case 6:if(!(c<i.customBasemaps.length)){e.next=11;break}return e.delegateYield(u(),"t0",8);case 8:c++,e.next=6;break;case 11:f=y().mark((function e(){var r,o,u;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.coreBasemaps[d],e.next=3,a.map(t).basemap.createCoreBasemap(r,n);case 3:(o=e.sent)&&x((function(e){return[].concat((0,p.Z)(e),[o])})),u="".concat(r.shaded?"shaded":"").concat(r.id).concat(r.labeled?"label":""),o&&u===S&&!s&&(R(S),s=!0);case 7:case"end":return e.stop()}}),e)})),d=0;case 13:if(!(d<i.coreBasemaps.length)){e.next=18;break}return e.delegateYield(f(),"t1",15);case 15:d++,e.next=13;break;case 18:s||R(o.basemap.basemaps[0].basemapId);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return g((function(){T(A)}),[]),(0,h.jsxs)("div",{children:[I&&(0,h.jsx)(c,{fullWidth:!0,labelId:"projection-label",value:A,onChange:function(e){var r=e.target.value;R("nogeom"),B(r);var n=o.getView(),i=n.getCenter(),s=n.getProjection().getCode(),u=a.projection.transformPoints(i,s,"EPSG:4326")[0],c=e.target.value,p={zoom:n.getZoom(),minZoom:n.getMinZoom(),maxZoom:n.getMaxZoom(),center:u,projection:c};o.setView(p),T(r),a.event.emit((0,l.ltv)(a.eventNames.MAP.EVENT_MAP_VIEW_PROJECTION_CHANGE,t,r))},label:"Projection",style:{display:r.canSwichProjection?"flex":"none"},inputLabel:{id:"projection-label"},menuItems:Z.map((function(e){return{key:e,item:{value:e,children:"EPSG:".concat(e)}}}))}),_.map((function(e){return(0,h.jsx)(m,{tabIndex:0,classes:{root:k.basemapCard},className:"".concat(e.basemapId===S?"active":""),onClick:function(){return R(e.basemapId)},onKeyPress:function(){return R(e.basemapId)},title:e.name,contentCard:(0,h.jsxs)(h.Fragment,{children:["string"==typeof e.thumbnailUrl&&(0,h.jsx)("img",{src:e.thumbnailUrl,alt:e.altText,className:"basemapCardThumbnail"}),Array.isArray(e.thumbnailUrl)&&e.thumbnailUrl.map((function(t,r){return(0,h.jsx)("img",{src:t,alt:e.altText,className:"basemapCardThumbnail"},r)})),(0,h.jsx)("div",{className:"basemapCardThumbnailOverlay"})]})},e.basemapId)}))]})}const g=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Basemap Panel Schema","type":"object","version":1,"comments":"Configuration for GeoView basemap panel package.","additionalProperties":false,"definitions":{"basemapNameNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The display name of the layer."},"basemapDescriptionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap description."},"thumbnailUrlNode":{"type":"object","properties":{"en":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"fr":{"type":"array","uniqueItems":true,"items":{"type":"string"}}},"description":"Basemap thumbnail urls."},"basemapLayerUrlNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The service endpoint of the basemap layer."},"basemapAttributionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap attribution text."},"basemapLayersNode":{"type":"object","properties":{"basemapId":{"type":"string","description":"the id of the basmap layer."},"url":{"$ref":"#/definitions/basemapLayerUrlNode"},"opacity":{"type":"number","description":"the opacity of this layer.","default":0}},"additionalItems":false,"required":["basemapId","url"]},"basemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id","enum":["transport","simple","shaded","osm","nogeom"]},"shaded":{"type":"boolean","description":"if a shaded layer should be included with this basemap.","default":false},"labeled":{"type":"boolean","description":"if labels should be enabled in this basemap.","default":false}},"additionalProperties":false,"required":["basemapId","shaded","labeled"]},"customBasemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id."},"name":{"$ref":"#/definitions/basemapNameNode"},"description":{"$ref":"#/definitions/basemapDescriptionNode"},"thumbnailUrl":{"$ref":"#/definitions/thumbnailUrlNode"},"layers":{"type":"array","description":"a list of basemap layers","items":{"$ref":"#/definitions/basemapLayersNode"},"minItems":1},"attribution":{"$ref":"#/definitions/basemapAttributionNode"},"zoomLevels":{"type":"object","description":"Zoom levels for the basemap","properties":{"min":{"type":"integer","minimum":0,"maximum":24,"default":0},"max":{"type":"integer","minimum":0,"maximum":24,"default":24}},"additionalProperties":false,"required":["min","max"]}},"additionalProperties":false,"required":["basemapId","name","description","layers"]}},"properties":{"isOpen":{"type":"boolean","description":"Specifies whether the basemap panel is initially open or closed","default":false},"canSwichProjection":{"type":"boolean","description":"Allow the user to switch projection from the basemap panel.","default":true},"supportedProjections":{"type":"array","items":{"type":"object","properties":{"projectionCode":{"type":"integer","enum":[3978,3857],"description":"Default projection to load on start."},"customBasemaps":{"type":"array","description":"A list of custom basemaps.","items":{"$ref":"#/definitions/customBasemap"},"minItems":0},"coreBasemaps":{"type":"array","description":"A list of basemaps available in the core to show in the panel.","items":{"$ref":"#/definitions/basemap"},"minItems":1}}},"minItems":1,"required":["coreBasemaps","customBasemaps"]},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["canSwichProjection","supportedProjections","suportedLanguages"]}'),w=JSON.parse('{"isOpen":false,"canSwichProjection":false,"supportedProjections":[{"projectionCode":3978,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]},{"projectionCode":3857,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]}],"suportedLanguages":["en","fr"]}');function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var _=window,x=function(e){(0,i.Z)(r,e);var t=j(r);function r(e,o){var i;return(0,n.Z)(this,r),i=t.call(this,e,o),(0,c.Z)((0,a.Z)(i),"schema",(function(){return g})),(0,c.Z)((0,a.Z)(i),"defaultConfig",(function(){return(0,l.ZQJ)(w)})),(0,c.Z)((0,a.Z)(i),"translations",(0,l.ZQJ)({en:{basemapPanel:"Basemaps"},fr:{basemapPanel:"Fond de carte"}})),(0,c.Z)((0,a.Z)(i),"added",(function(){var e=(0,a.Z)(i),t=e.configObj,r=e.pluginProps.mapId,n=_.cgpv;if(n){var o,s,u=n.api,c=n.ui.elements.MapIcon,l=u.map(r).displayLanguage,p={id:"basemapPanelButton",tooltip:i.translations[l].basemapPanel,tooltipPlacement:"right",children:(0,h.jsx)(c,{}),visible:!0},f={title:i.translations[l].basemapPanel,icon:'<i class="material-icons">map</i>',width:350,status:null==t?void 0:t.isOpen};i.buttonPanel=u.map(r).appBarButtons.createAppbarPanel(p,f,null),null===(o=i.buttonPanel)||void 0===o||null===(s=o.panel)||void 0===s||s.changeContent((0,h.jsx)(v,{mapId:r,config:t||{}}))}})),i.buttonPanel=null,i}return(0,o.Z)(r,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=_.cgpv;if(t){var r=t.api;this.buttonPanel&&(r.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId),r.map(e).basemap.basemaps=[],r.map(e).basemap.loadDefaultBasemaps())}}}]),r}(l.Vw$);_.plugins=_.plugins||{},_.plugins["basemap-panel"]=(0,l.RFZ)(x)},54598:(e,t,r)=>{var n=r(32426).default;function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function p(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(e){p=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),s=new E(n||[]);return i(a,"_invoke",{value:P(e,r,s)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var m={};function y(){}function h(){}function b(){}var v={};p(v,u,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(I([])));w&&w!==r&&a.call(w,u)&&(v=w);var j=b.prototype=y.prototype=Object.create(v);function _(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,i,s,u){var c=d(e[o],e,i);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==n(p)&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,s,u)}),(function(e){r("throw",e,s,u)})):t.resolve(p).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,u)}))}u(c.arg)}var o;i(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}})}function P(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=O(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=d(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function I(e){if(e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=b,i(j,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:h,configurable:!0}),h.displayName=p(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,p(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},_(x.prototype),p(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(j),p(j,l,"Generator"),p(j,u,(function(){return this})),p(j,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:I(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},32426:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1853:(e,t,r)=>{var n=r(54598)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},58104:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:()=>n})},28815:(e,t,r)=>{"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:()=>n})},83139:(e,t,r)=>{"use strict";function n(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,u,"next",e)}function u(e){n(i,o,a,s,u,"throw",e)}s(void 0)}))}}r.d(t,{Z:()=>o})},28990:(e,t,r)=>{"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:()=>n})},34839:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(5216);function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,n.Z)(o.key),o)}}function a(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}},26800:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(5216);function o(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},42251:(e,t,r)=>{"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}r.d(t,{Z:()=>n})},66301:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(97453);function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,n.Z)(e,t)}},3806:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(55484),o=r(28815);function a(e,t){if(t&&("object"===(0,n.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}},97453:(e,t,r)=>{"use strict";function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}r.d(t,{Z:()=>n})},63460:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(49520);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,s=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},51615:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(58104);var o=r(49520);function a(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},5216:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(55484);function o(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}},55484:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:()=>n})},49520:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(58104);function o(e,t){if(e){if("string"==typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},e=>{var t;t=80593,e(e.s=t)}]);
//# sourceMappingURL=geoview-basemap-panel.js.map