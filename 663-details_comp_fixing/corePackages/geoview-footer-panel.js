/*! Package:geoview-footer-panel: 0.1.0 - "6c061a9862c6a558f05cb195811f40efe58eabc7" - 2022-12-19T22:07:04.088Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{98285:(e,t,a)=>{var n=a(7886),r=a(1116),i=a(71120),s=a(33756),o=a(81770),u=a(23078),l=a(3),c=a(21144);const d=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":false,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","details","data-grid"]},"minItems":0,"default":["legend","details","data-grid"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),f=JSON.parse('{"tabs":{"defaultTabs":["legend","details","data-grid"],"customTabs":[]},"suportedLanguages":["en","fr"]}');var p=a(90755),g=a(45202),m=window;function v(e){var t=e.mapId,a=m.cgpv,n=a.api,r=a.react,i=r.useState,s=r.useEffect,o=i([]),u=(0,p.Z)(o,2),l=u[0],d=u[1],f=i(),v=(0,p.Z)(f,2),h=v[0],b=v[1];return s((function(){return n.event.on(n.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,c.gNW)(e)){var a=e.resultSets,r=[];Object.keys(a).forEach((function(e){var i=(0,c.dIw)(n.map(t).layer.registeredLayers[e].layerName,t),s=a[e];s.length>0&&r.push({layerPath:e,layerName:i,features:s})})),r.length>0?d(r):d([])}else d([])}),t,"".concat(t,"-DetailsAPI")),function(){n.event.off(n.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,t)}}),[]),s((function(){b(n.map(t).details.createDetails(t,l))}),[l]),(0,g.jsx)("div",{children:h})}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,u.Z)(e);if(t){var r=(0,u.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,o.Z)(this,a)}}var b=window,y=function(e){(0,s.Z)(a,e);var t=h(a);function a(e,r){var s;return(0,n.Z)(this,a),s=t.call(this,e,r),(0,l.Z)((0,i.Z)(s),"schema",(function(){return d})),(0,l.Z)((0,i.Z)(s),"defaultConfig",(function(){return(0,c.ZQJ)(f)})),(0,l.Z)((0,i.Z)(s),"translations",(0,c.ZQJ)({en:{legend:"Legend",details:"Details",dataGrid:"Data"},fr:{legend:"Légende",details:"Détails",dataGrid:"Données"}})),(0,l.Z)((0,i.Z)(s),"added",(function(){var e=(0,i.Z)(s),t=e.configObj,a=e.pluginProps.mapId,n=b.cgpv;if(n){var r=n.api,o=r.map(a).displayLanguage,u=r.map(a).footerTabs,l=null==t?void 0:t.tabs.defaultTabs,c=0;l.includes("legend")&&(u.createFooterTab({value:c,label:s.translations[o].legend,content:function(){return r.map(a).legend.createLegend({layerIds:["esriFeatureLYR4"]})}}),c++),l.includes("details")&&(u.createFooterTab({value:c,label:s.translations[o].details,content:function(){return(0,g.jsx)(v,{mapId:a})}}),c++),l.includes("data-grid")&&(u.createFooterTab({value:c,label:s.translations[o].dataGrid,content:function(){return r.map(a).dataGrid.createDataGrid({layerId:"esriFeatureLYR4"})}}),c++);for(var d=null==t?void 0:t.tabs.customTabs,f=0;f<d.length;f++){var p=d[f];u.createFooterTab({value:c,label:p.title,content:p.contentHTML}),c++}}})),s.buttonPanel=null,s}return(0,r.Z)(a,[{key:"removed",value:function(){this.pluginProps.mapId;var e=b.cgpv;if(e)e.api}}]),a}(c.Vw$);b.plugins=b.plugins||{},b.plugins["footer-panel"]=(0,c.RFZ)(y)}},e=>{var t;t=98285,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map