/*! Package:geoview-layers-panel: 0.1.0 - "f2b3fdf702c0938a3c5216865a16b3a1f9799ff8" - 2022-12-07T16:40:27.056Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[763],{925:(e,t,n)=>{var r=n(7886),a=n(1116),i=n(71120),o=n(33756),s=n(81770),c=n(23078),u=n(3),l=n(21144),p=n(90755),d=n(93780),f=n(10835),h=n.n(f),v=n(45202);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=window;const g=function(e){var t=e.mapId,n=e.setAddLayerVisible,r=m.cgpv,a=r.api,i=r.react,o=r.ui,s=a.layerTypes,c=s.ESRI_DYNAMIC,u=s.ESRI_FEATURE,f=s.GEOJSON,y=s.WMS,g=s.WFS,x=s.OGC_FEATURE,j=s.XYZ_TILES,E=s.GEOCORE,O=i.useState,S=i.useEffect,w=o.elements,C=w.Select,P=w.Stepper,N=w.TextField,L=w.Button,A=w.ButtonGroup,k=w.Autocomplete,I=w.CircularProgressBase,Z=w.Box,R=O(0),T=(0,p.Z)(R,2),U=T[0],F=T[1],B=O(""),_=(0,p.Z)(B,2),W=_[0],D=_[1],G=O(""),V=(0,p.Z)(G,2),M=V[0],Y=V[1],J=O([]),K=(0,p.Z)(J,2),X=K[0],Q=K[1],q=O(""),$=(0,p.Z)(q,2),z=$[0],H=$[1],ee=O([]),te=(0,p.Z)(ee,2),ne=te[0],re=te[1],ae=O(!1),ie=(0,p.Z)(ae,2),oe=ie[0],se=ie[1],ce={buttonGroup:{paddingTop:12,gap:6}},ue=function(){return M===c||M===g},le=[[c,"ESRI Dynamic Service"],[u,"ESRI Feature Service"],[f,"GeoJSON"],[y,"OGC Web Map Service (WMS)"],[g,"OGC Web Feature Service (WFS)"],[x,"OGC API Features"],[j,"XYZ Raster Tiles"],[E,"GeoCore"]];S((function(){return a.event.on(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,(function(e){e.message&&"validation.layer.loadfailed"===e.message.value&&se(!1)}),t),function(){a.event.off(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t)}}),[]);var pe=function(e){switch(e){case c:return{err:"ESRI Map",capability:"Map"};case u:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},de=function(e){se(!1),a.event.emit((0,l.ZuA)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"".concat(e," cannot be empty")}))},fe=function(e){se(!1),a.event.emit((0,l.ZuA)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"URL is not a valid ".concat(e," Server")}))},he=function(e,n,r){se(!1),a.event.emit((0,l.ZuA)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"".concat(e," does not support current map projection ").concat(n,", only ").concat(r.join(", "))}))},ve=function(){var e=(0,d.Z)(h().mark((function e(){var n,r,i,o,s,c,u,l,d,f,v;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.projection.projections[a.map(t).currentProjection].getCode(),r=[],e.prev=2,i=W.split("?"),o=(0,p.Z)(i,2),s=o[0],c=o[1],u=new URLSearchParams(c),l=u.get("layers"),e.next=8,a.geoUtilities.getWMSServiceMetadata(s,null!=l?l:"");case 8:if(d=e.sent,(r=d.Capability.Layer.CRS).includes(n)){e.next=12;break}throw new Error("proj");case 12:f=[],v=function e(t){t.Layer&&t.Layer.length>0?t.Layer.forEach((function(t){e(t)})):f.push([t.Name,t.Title])},d.Capability.Layer&&v(d.Capability.Layer),1===f.length?(H(f[0][1]),re([{layerId:null!=l?l:f[0][0]}])):Q(f),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(2),"proj"===e.t0.message?he("WMS",n,r):fe("WMS"),e.abrupt("return",!1);case 22:return e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=(0,d.Z)(h().mark((function e(){var t,n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(W);case 3:t=e.sent,1===(n=t.FeatureTypeList.FeatureType.map((function(e){return[e.Name["#text"].split(":")[1],e.Title["#text"]]}))).length?(H(n[0][1]),re([{layerId:n[0][0]}])):Q(n),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),fe("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=(0,d.Z)(h().mark((function e(){var t,n,r,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["collections","links"],e.prev=1,e.next=4,fetch("".concat(W,"/collections?f=json"));case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,t.every((function(e){return Object.keys(r).includes(e)}))){e.next=11;break}throw new Error("err");case 11:1===(a=r.collections.map((function(e){return[e.id,e.title]}))).length?(H(a[0][1]),re([{layerId:a[0][0]}])):Q(a),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(1),fe("OGC API Feature"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,d.Z)(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,-1===W.indexOf("/")&&32===W.replaceAll("-","").length){e.next=4;break}throw new Error("err");case 4:H(""),re([{layerId:W}]),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),fe("GeoCore UUID"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=(0,d.Z)(h().mark((function e(t){var n,r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(W);case 3:if(!(n=e.sent).capabilities.includes(pe(t).capability)){e.next=8;break}"layers"in n?1===(r=n.layers.map((function(e){return[e.id,e.name]}))).length?(H(r[0][1]),re([{layerId:r[0][0]}])):Q(r):(H(n.name),re([{layerId:n.id}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),fe(pe(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),xe=function(){for(var e=a.projection.projections[a.map(t).currentProjection].getCode(),n=["{x}","{y}","{z}"],r=0;r<n.length;r+=1)if(!W.includes(n[r]))return fe("XYZ Tile"),!1;if("EPSG:3857"!==e)return he("XYZ Tiles",e,["EPSG:3857"]),!1;var i=W;return H(""),re([{layerId:W,source:{dataAccessPath:{en:i,fr:i}}}]),!0},je=function(){var e=(0,d.Z)(h().mark((function e(){var t,n,r,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(W);case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,["FeatureCollection","Feature"].includes(n.type)){e.next=9;break}throw new Error("err");case 9:r=W.split("/").pop(),a=W.replace(r,""),H(r),re([{layerId:r,source:{dataAccessPath:{en:a,fr:a}}}]),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),fe("GeoJSON"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=(0,d.Z)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(se(!0),t=!0,void 0!==M){e.next=8;break}t=!1,se(!1),de("Service Type"),e.next=52;break;case 8:if(M!==y){e.next=14;break}return e.next=11,ve();case 11:t=e.sent,e.next=52;break;case 14:if(M!==g){e.next=20;break}return e.next=17,ye();case 17:t=e.sent,e.next=52;break;case 20:if(M!==x){e.next=26;break}return e.next=23,be();case 23:t=e.sent,e.next=52;break;case 26:if(M!==j){e.next=30;break}t=xe(),e.next=52;break;case 30:if(M!==c){e.next=36;break}return e.next=33,ge(c);case 33:t=e.sent,e.next=52;break;case 36:if(M!==u){e.next=42;break}return e.next=39,ge(u);case 39:t=e.sent,e.next=52;break;case 42:if(M!==f){e.next=48;break}return e.next=45,je();case 45:t=e.sent,e.next=52;break;case 48:if(M!==E){e.next=52;break}return e.next=51,me();case 51:t=e.sent;case 52:t&&(se(!1),F(2));case 53:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){se(!0);var e=a.generateId();a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t),se(!1),n(!1)}),t,e);var r=!0,i=z,o=W;if(M!==c&&M!==u||(o=a.geoUtilities.getMapServerUrl(W)),M===y){var s=W.split("?");o=(0,p.Z)(s,1)[0]}""===z&&(r=!1,de(ue()?"Name":"Layer"));var l={geoviewLayerId:e,geoviewLayerName:{en:i,fr:i},geoviewLayerType:M,metadataAccessPath:{en:o,fr:o},listOfLayerEntryConfig:ne};M!==f&&M!==j||(l.metadataAccessPath={en:"",fr:""}),M===E&&delete l.metadataAccessPath,r&&(M===E&&setTimeout((function(){se(!1),n(!1)}),3e3),a.map(t).layer.addGeoviewLayer(l))},Se=function(){F((function(e){return e-1}))},we=function(e){H(e.target.value)};function Ce(e){var t=e.isFirst,n=void 0!==t&&t,r=e.isLast,a=void 0!==r&&r,i=e.handleNext;return oe?(0,v.jsx)(Z,{sx:{padding:10},children:(0,v.jsx)(I,{})}):(0,v.jsxs)(A,{sx:ce.buttonGroup,children:[(0,v.jsx)(L,{variant:"contained",type:"text",onClick:i,children:a?"Finish":"Continue"}),!n&&(0,v.jsx)(L,{variant:"contained",type:"text",onClick:Se,children:"Back"})]})}return(0,v.jsx)(P,{activeStep:U,orientation:"vertical",steps:[{stepLabel:{children:"Enter URL / UUID"},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(N,{sx:{width:"100%"},label:"URL",variant:"standard",value:W,onChange:function(e){D(e.target.value.trim()),Y(""),Q([]),H(""),re([])},multiline:!0}),(0,v.jsx)("br",{}),(0,v.jsx)(Ce,{isFirst:!0,handleNext:function(){var e,t,n=!0;""===W.trim()&&(n=!1,de("URL")),n&&(e=W.toUpperCase().split("/"),t=parseInt(e[e.length-1],10),W.toUpperCase().endsWith("MAPSERVER")||W.toUpperCase().endsWith("MAPSERVER/")?Y(c):-1!==W.toUpperCase().indexOf("FEATURESERVER")||-1!==W.toUpperCase().indexOf("MAPSERVER")&&!Number.isNaN(t)?Y(u):-1!==e.indexOf("WFS")?Y(g):W.toUpperCase().endsWith(".JSON")||W.toUpperCase().endsWith(".GEOJSON")?Y(f):-1!==W.toUpperCase().indexOf("{Z}/{X}/{Y}")||-1!==W.toUpperCase().indexOf("{Z}/{Y}/{X}")?Y(j):-1===W.indexOf("/")&&32===W.replaceAll("-","").length?Y(E):-1!==W.toUpperCase().indexOf("WMS")&&Y(y),F(1))}})]})}},{stepLabel:{children:"Select format"},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(C,{fullWidth:!0,labelId:"service-type-label",value:M,onChange:function(e){Y(e.target.value),Q([]),H(""),re([])},label:"Service Type",inputLabel:{id:"service-type-label"},menuItems:le.map((function(e){var t=(0,p.Z)(e,2),n=t[0];return{key:n,item:{value:n,children:t[1]}}}))}),(0,v.jsx)(Ce,{handleNext:Ee})]})}},{stepLabel:{children:"Configure layer"},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[0===X.length&&(0,v.jsx)(N,{label:"Name",variant:"standard",value:z,onChange:we}),X.length>1&&(0,v.jsx)(k,{fullWidth:!0,multiple:ue(),disableCloseOnSelect:!0,disableClearable:!ue(),id:"service-layer-label",options:X,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,v.jsx)("span",b(b({},e),{},{children:t[1]}))},onChange:function(e,t){ue()?(re(t.map((function(e){return{layerId:"".concat(e[0])}}))),H(t.map((function(e){return e[1]})).join(", "))):(re([{layerId:"".concat(t[0])}]),H(t[1]))},renderInput:function(e){return(0,v.jsx)(N,b(b({},e),{},{label:"Select Layer"}))}}),(0,v.jsx)("br",{}),(0,v.jsx)(Ce,{isLast:!ue(),handleNext:ue()?function(){var e=!0;0===ne.length&&(e=!1,de("Layer")),e&&F(3)}:Oe})]})}},ue()?{stepLabel:{children:"Enter Name"},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(N,{sx:{width:"100%"},label:"Name",variant:"standard",value:z,onChange:we}),(0,v.jsx)("br",{}),(0,v.jsx)(Ce,{isLast:!0,handleNext:Oe})]})}}:null]})};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var j=window;const E=function(e){var t=e.mapId,n=e.buttonPanel,r=j.cgpv,a=r.api,i=r.react,o=r.ui,s=i.useState,c=i.useEffect,d=s(!1),f=(0,p.Z)(d,2),h=f[0],y=f[1],b=s({}),m=(0,p.Z)(b,2),E=(m[0],m[1]),O=o.elements,S=O.Typography,w=O.IconButton,C=O.AddIcon,P=O.Box,N=a.map(t).displayLanguage,L=(0,l.ZQJ)({en:{addLayer:"Add Layer"},fr:{addLayer:"Ajouter Couche"}}),A={mainContainer:{display:"flex",flexDirection:"column",height:"inherit"},topControls:{display:"flex",flexDirection:"row",justifyContent:"space-between"},addLayerSection:{display:"flex",alignItems:"center",marginTop:"auto",justifyContent:"end"}},k=a.map(t).legend.createLegend();return c((function(){return E((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a.map(t).layer.geoviewLayers)})),a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,(function(){y(!1)}),t,n.buttonPanelId),function(){a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,t,n.buttonPanelId)}}),[a,n.buttonPanelId,t]),(0,v.jsxs)(P,{sx:A.mainContainer,children:[h&&(0,v.jsx)(g,{mapId:t,setAddLayerVisible:y}),(0,v.jsx)("div",{style:{display:h?"none":"block"},children:(0,v.jsx)(k,{})}),(0,v.jsxs)(P,{sx:A.addLayerSection,onClick:function(){return y((function(e){return!e}))},children:[(0,v.jsx)(S,{children:L[N].addLayer}),(0,v.jsx)(w,{children:(0,v.jsx)(C,{})})]})]})},O=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Layers/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"reorderable":{"type":"boolean","default":true,"description":"Specifies if the items in the legend can be reordered."},"allowImport":{"type":"boolean","default":true,"description":"Specifies if the user-added layers are allowed."},"isOpen":{"type":"object","description":"Specifies whether the legend is opened by default on initial loading of the map for small, medium, and large viewports.","properties":{"large":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for large viewports."},"medium":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for medium viewports."},"small":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for small viewports."}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),S=JSON.parse('{"reorderable":true,"allowImport":true,"isOpen":{"small":false,"medium":false,"large":false},"suportedLanguages":["en","fr"]}');function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var C=window,P=function(e){(0,o.Z)(n,e);var t=w(n);function n(e,a){var o;return(0,r.Z)(this,n),o=t.call(this,e,a),(0,u.Z)((0,i.Z)(o),"schema",(function(){return O})),(0,u.Z)((0,i.Z)(o),"defaultConfig",(function(){return(0,l.ZQJ)(S)})),(0,u.Z)((0,i.Z)(o),"translations",(0,l.ZQJ)({en:{layersPanel:"Layers"},fr:{layersPanel:"Couches"}})),(0,u.Z)((0,i.Z)(o),"added",(function(){var e,t,n,r,a,i=o.pluginProps.mapId,s=C.cgpv,c=s.api,u=s.ui.elements.LayersOutlinedIcon,l=c.map(i).displayLanguage;a=null===(e=o.configObj)||void 0===e||null===(t=e.isOpen)||void 0===t?void 0:t.large;var p={id:"layersPanelButton",tooltip:o.translations[l].layersPanel,tooltipPlacement:"right",children:(0,v.jsx)(u,{}),visible:!0},d={title:o.translations[l].layersPanel,icon:'<i class="material-icons">layers</i>',width:200,status:a};o.buttonPanel=c.map(i).appBarButtons.createAppbarPanel(p,d,null),null===(n=o.buttonPanel)||void 0===n||null===(r=n.panel)||void 0===r||r.changeContent((0,v.jsx)(E,{buttonPanel:o.buttonPanel,mapId:i}))})),o.buttonPanel=null,o}return(0,a.Z)(n,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=C.cgpv.api;this.buttonPanel&&t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId)}}]),n}(l.Vw$);C.plugins=C.plugins||{},C.plugins["layers-panel"]=(0,l.RFZ)(P)}},e=>{var t;t=925,e(e.s=t)}]);
//# sourceMappingURL=geoview-layers-panel.js.map