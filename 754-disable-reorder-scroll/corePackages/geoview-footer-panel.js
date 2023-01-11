/*! Package:geoview-footer-panel: 0.1.0 - "068d8b96f750f0b70922de6cc3982c9e64fdcd86" - 2023-01-11T18:00:38.003Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{1559:(e,t,n)=>{var a=n(7886),r=n(1116),i=n(71120),o=n(33756),s=n(81770),u=n(23078),c=n(3),l=n(21144);const f=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":false,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","details","data-grid"]},"minItems":0,"default":["legend","details","data-grid"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),d=JSON.parse('{"tabs":{"defaultTabs":["legend","details","data-grid"],"customTabs":[]},"suportedLanguages":["en","fr"]}');var p=n(90755),v=n(45202),g=window;function m(e){var t=e.mapId,n=g.cgpv,a=n.api,r=n.react,i=r.useState,o=r.useEffect,s=i([]),u=(0,p.Z)(s,2),c=u[0],f=u[1],d=i(),m=(0,p.Z)(d,2),E=m[0],y=m[1];return o((function(){return a.event.on(a.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,l.gNW)(e)){var n=e.resultSets,r=[];Object.keys(n).forEach((function(e){var i=(0,l.dIw)(a.map(t).layer.registeredLayers[e].layerName,t),o=n[e];o.length>0&&r.push({layerPath:e,layerName:i,features:o})})),r.length>0?f(r):f([])}else f([])}),t,"".concat(t,"-DetailsAPI")),function(){a.event.off(a.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,t)}}),[]),o((function(){y(a.map(t).details.createDetails(t,c))}),[c]),(0,v.jsx)("div",{children:E})}var E=n(47502),y=window;function h(e){var t=e.mapId,n=y.cgpv,a=n.api,r=n.react,i=r.useState,o=r.useEffect,s=i(),u=(0,p.Z)(s,2),c=u[0],f=u[1],d=i([]),g=(0,p.Z)(d,2),m=g[0],h=g[1];return o((function(){return h(Object.keys(a.map(t).layer.geoviewLayers)),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,(function(e){var t;(0,l.UKz)(e)&&(t=e.geoviewLayer.geoviewLayerId,h((function(e){return e.filter((function(e){return e!==t}))})))}),t),a.event.on(a.eventNames.LAYER.EVENT_ADD_LAYER,(function(e){(0,l.riW)(e)&&a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){var n;n=e.layerConfig.geoviewLayerId,Object.keys(a.map(t).layer.geoviewLayers).includes(n)?h((function(e){return[n].concat((0,E.Z)(e))})):console.error("geoviewLayerId is not in the layers list"),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t,e.layerConfig.geoviewLayerId)}),t,e.layerConfig.geoviewLayerId)}),t),function(){a.event.off(a.eventNames.LAYER.EVENT_ADD_LAYER,t),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t)}}),[]),o((function(){f(a.map(t).legend.createLegend({layerIds:m}))}),[m]),(0,v.jsx)("div",{children:c})}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.Z)(e);if(t){var r=(0,u.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var L=window,T=function(e){(0,o.Z)(n,e);var t=b(n);function n(e,r){var o;return(0,a.Z)(this,n),o=t.call(this,e,r),(0,c.Z)((0,i.Z)(o),"schema",(function(){return f})),(0,c.Z)((0,i.Z)(o),"defaultConfig",(function(){return(0,l.ZQJ)(d)})),(0,c.Z)((0,i.Z)(o),"translations",(0,l.ZQJ)({en:{legend:"Legend",details:"Details",dataGrid:"Data"},fr:{legend:"Légende",details:"Détails",dataGrid:"Données"}})),(0,c.Z)((0,i.Z)(o),"added",(function(){var e=(0,i.Z)(o),t=e.configObj,n=e.pluginProps.mapId,a=L.cgpv;if(a){var r=a.api,s=r.map(n),u=s.displayLanguage,c=s.footerTabs,f=s.map.getTargetElement().parentElement;f&&(f.style.height="calc( 100% - 300px )");var d=null==t?void 0:t.tabs.defaultTabs,p=0;if(d.includes("legend")&&(c.createFooterTab({value:p,label:o.translations[u].legend,content:function(){return(0,v.jsx)(h,{mapId:n})}}),p++),d.includes("details")){var g=p;c.createFooterTab({value:g,label:o.translations[u].details,content:function(){return(0,v.jsx)(m,{mapId:n})}}),p++,r.event.on(r.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,l.gNW)(e)){var t=e.resultSets,n=[];Object.keys(t).forEach((function(e){n=n.concat(t[e])})),n.length>0&&c.selectFooterTab(g)}}),n,"".concat(n,"-DetailsAPI"))}d.includes("data-grid")&&(c.createFooterTab({value:p,label:o.translations[u].dataGrid,content:function(){return r.map(n).dataGrid.createDataGrid({layerId:"esriFeatureLYR4"})}}),p++);for(var E=null==t?void 0:t.tabs.customTabs,y=0;y<E.length;y++){var b=E[y];c.createFooterTab({value:p,label:b.title,content:b.contentHTML}),p++}}})),o.buttonPanel=null,o}return(0,r.Z)(n,[{key:"removed",value:function(){L.cgpv}}]),n}(l.Vw$);L.plugins=L.plugins||{},L.plugins["footer-panel"]=(0,l.RFZ)(T)}},e=>{var t;t=1559,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map