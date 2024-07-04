/*! Package:geoview-aoi-panel: 1.0.0 - "5df5682b793585f98baf507a377a7473d47c383f" - 2024-07-04T20:21:50.464Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[206],{26725:(e,t,n)=>{var o=n(59682),i=n(41108),r=n(95947),a=n(89153),s=n(79778),l=n(74780),u=n(49278),c=n(67814),p=n(56290),h=n(97282);function v(){return(0,h.jsx)("div",{})}const f=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Area of Interest Panel Schema","type":"object","version":1,"comments":"Configuration for GeoView Area of interest package.","additionalProperties":false,"properties":{"isOpen":{"type":"boolean","description":"Specifies whether the area of interest panel is initially open or closed","default":false},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["isOpen"]}'),d={isOpen:!1};function P(e,t,n){return t=(0,a.A)(t),(0,r.A)(e,A()?Reflect.construct(t,n||[],(0,a.A)(e).constructor):t.apply(e,n))}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}var m=function(e){function t(){var e;(0,o.A)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=P(this,t,[].concat(i)),(0,l.A)(e,"translations",(0,u.NK)({en:{AoiPanel:{title:"Area of Interest"}},fr:{AoiPanel:{title:"Région d'intérêt"}}})),(0,l.A)(e,"onCreateContent",(function(){return(0,h.jsx)(v,{})})),e}return(0,s.A)(t,e),(0,i.A)(t,[{key:"schema",value:function(){return f}},{key:"defaultConfig",value:function(){return(0,u.NK)(d)}},{key:"onCreateButtonProps",value:function(){return{id:"".concat(this.pluginProps.mapId,"-AoiPanelButton"),tooltip:"AoiPanel.title",tooltipPlacement:"right",children:(0,h.jsx)(p.A,{}),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"AoiPanel.title",icon:(0,h.jsx)(p.A,{}),width:350,status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onRemoved",value:function(){}}])}(c.i);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["aoi-panel"]=(0,u.KX)(m)},67814:(e,t,n)=>{n.d(t,{i:()=>p});var o=n(59682),i=n(41108),r=n(95947),a=n(89153),s=n(79778),l=n(74780);function u(e,t,n){return t=(0,a.A)(t),(0,r.A)(e,c()?Reflect.construct(t,n||[],(0,a.A)(e).constructor):t.apply(e,n))}function c(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(c=function(){return!!e})()}var p=function(e){function t(){var e;(0,o.A)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=u(this,t,[].concat(i)),(0,l.A)(e,"buttonPanel",void 0),(0,l.A)(e,"buttonProps",void 0),(0,l.A)(e,"panelProps",void 0),e}return(0,s.A)(t,e),(0,i.A)(t,[{key:"onCreateButtonProps",value:function(){var e=window.cgpv.ui.elements.MapIcon;return{id:"somePluginButton",tooltip:"Some tooltip",tooltipPlacement:"right",children:this.react.createElement(e),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"Some title",icon:'<i class="material-icons">map</i>',width:"80vw",status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"Content for AppBar Plugin on map id ".concat(this.pluginProps.mapId," goes here..."))}},{key:"onAdd",value:function(){this.buttonProps=this.onCreateButtonProps(),this.panelProps=this.onCreateContentProps(),this.panelProps.content=this.onCreateContent(),this.buttonPanel=this.mapViewer().appBarApi.createAppbarPanel(this.buttonProps,this.panelProps,null)||void 0}},{key:"onRemove",value:function(){this.api&&this.buttonPanel&&this.mapViewer().appBarApi.removeAppbarPanel(this.buttonPanel.buttonPanelId)}}])}(n(79724).G)}},e=>{var t;t=26725,e(e.s=t)}]);
//# sourceMappingURL=geoview-aoi-panel.js.map