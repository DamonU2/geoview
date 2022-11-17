/*! Package:geoview-footer-panel: 0.1.0 - "5d91564e6405c43f06572a3bc788333708369d2f" - 2022-11-17T21:22:37.586Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{82922:(e,t,a)=>{var n=a(7886),r=a(1116),s=a(71120),i=a(33756),o=a(81770),u=a(23078),l=a(3),d=a(43337);const c=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":false,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","details","data-grid"]},"minItems":0,"default":["legend","details","data-grid"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),p=JSON.parse('{"tabs":{"defaultTabs":["legend","details","data-grid"],"customTabs":[]},"suportedLanguages":["en","fr"]}');function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,u.Z)(e);if(t){var r=(0,u.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,o.Z)(this,a)}}var g=window,m=function(e){(0,i.Z)(a,e);var t=f(a);function a(e,r){var i;return(0,n.Z)(this,a),i=t.call(this,e,r),(0,l.Z)((0,s.Z)(i),"schema",(function(){return c})),(0,l.Z)((0,s.Z)(i),"defaultConfig",(function(){return(0,d.ZQJ)(p)})),(0,l.Z)((0,s.Z)(i),"translations",(0,d.ZQJ)({en:{legend:"Legend",details:"Details",dataGrid:"Data"},fr:{legend:"Légende",details:"Détails",dataGrid:"Données"}})),(0,l.Z)((0,s.Z)(i),"added",(function(){var e=(0,s.Z)(i),t=e.configObj,a=e.pluginProps.mapId,n=g.cgpv;if(n){var r=n.api,o=r.map(a).displayLanguage,u=r.map(a).footerTabs,l=null==t?void 0:t.tabs.defaultTabs,d=0;l.includes("legend")&&(u.createFooterTab({value:d,label:i.translations[o].legend,content:r.map(a).legend.createLegend()}),d++),l.includes("details")&&(u.createFooterTab({value:d,label:i.translations[o].details,content:function(){return r.map(a).details.createDetails({layerId:"esriFeatureLYR4"})}}),d++),l.includes("data-grid")&&(u.createFooterTab({value:d,label:i.translations[o].dataGrid,content:function(){return r.map(a).dataGrid.createDataGrid({layerId:"esriFeatureLYR4"})}}),d++);for(var c=null==t?void 0:t.tabs.customTabs,p=0;p<c.length;p++){var f=c[p];u.createFooterTab({value:d,label:f.title,content:f.contentHTML}),d++}}})),i.buttonPanel=null,i}return(0,r.Z)(a,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=g.cgpv;if(t){var a=t.api;this.buttonPanel&&(a.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId),a.map(e).basemap.basemaps=[],a.map(e).basemap.loadDefaultBasemaps())}}}]),a}(d.Vw$);g.plugins=g.plugins||{},g.plugins["footer-panel"]=(0,d.RFZ)(m)}},e=>{var t;t=82922,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map