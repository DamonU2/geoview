/*! Package:geoview-footer-panel: 0.1.0 - "f2576af3cdbd6d751d132b3f0dc3770d13c249a0" - 2022-11-10T14:55:40.621Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{82922:(e,t,a)=>{var n=a(7886),r=a(1116),i=a(71120),o=a(33756),s=a(81770),u=a(23078),l=a(3),d=a(43337);const c=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":false,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","details","data-grid"]},"minItems":0,"default":["legend","details","data-grid"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),p=JSON.parse('{"tabs":{"defaultTabs":["legend","details","data-grid"],"customTabs":[]},"suportedLanguages":["en","fr"]}');function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,u.Z)(e);if(t){var r=(0,u.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,s.Z)(this,a)}}var g=window,m=function(e){(0,o.Z)(a,e);var t=f(a);function a(e,r){var o;return(0,n.Z)(this,a),o=t.call(this,e,r),(0,l.Z)((0,i.Z)(o),"schema",(function(){return c})),(0,l.Z)((0,i.Z)(o),"defaultConfig",(function(){return(0,d.ZQJ)(p)})),(0,l.Z)((0,i.Z)(o),"translations",(0,d.ZQJ)({en:{legend:"Legend",details:"Detail",dataGrid:"Data"},fr:{legend:"Légende",details:"Détail",dataGrid:"Données"}})),(0,l.Z)((0,i.Z)(o),"added",(function(){var e=(0,i.Z)(o),t=e.configObj,a=e.pluginProps.mapId,n=g.cgpv;if(n){var r=n.api,s=r.map(a).displayLanguage,u=r.map(a).footerTabs,l=null==t?void 0:t.tabs.defaultTabs,d=0;l.includes("legend")&&(u.createFooterTab({value:d,label:o.translations[s].legend,content:r.map(a).legend.createLegend()}),d++),l.includes("data-grid")&&(u.createFooterTab({value:d,label:o.translations[s].dataGrid,content:function(){return r.map(a).dataGrid.createDataGrid({layerId:"esriFeatureLYR4"})}}),d++);for(var c=null==t?void 0:t.tabs.customTabs,p=0;p<c.length;p++){var f=c[p];u.createFooterTab({value:d,label:f.title,content:f.contentHTML}),d++}}})),o.buttonPanel=null,o}return(0,r.Z)(a,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=g.cgpv;if(t){var a=t.api;this.buttonPanel&&(a.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId),a.map(e).basemap.basemaps=[],a.map(e).basemap.loadDefaultBasemaps())}}}]),a}(d.Vw$);g.plugins=g.plugins||{},g.plugins["footer-panel"]=(0,d.RFZ)(m)}},e=>{var t;t=82922,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map