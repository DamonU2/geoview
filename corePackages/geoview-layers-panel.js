/*! Package:geoview-layers-panel: 0.1.0 - "699e1b7d4dca32c364ed6d5ba11f0f28b497bc36" - 2024-02-08T19:09:54.749Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[596],{42160:(e,t,r)=>{r.d(t,{c:()=>d});var n=r(81144),a=r(9332),o=r(51112),i=r(61992),s=r(36704),c=r(38424),l=r(6976);function u(e,t,r){return t=(0,i.c)(t),(0,o.c)(e,p()?Reflect.construct(t,r||[],(0,i.c)(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var d=function(e){function t(){var e;(0,n.c)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=u(this,t,[].concat(a)),(0,l.c)((0,s.c)(e),"buttonPanel",void 0),(0,l.c)((0,s.c)(e),"buttonProps",void 0),(0,l.c)((0,s.c)(e),"panelProps",void 0),e}return(0,c.c)(t,e),(0,a.c)(t,[{key:"onCreateButtonProps",value:function(){var e=window.cgpv.ui.elements.MapIcon;return{id:"somePluginButton",tooltip:"Some tooltip",tooltipPlacement:"right",children:this.react.createElement(e),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"Some title",icon:'<i class="material-icons">map</i>',width:"80vw",status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"Content for AppBar Plugin on map id ".concat(this.pluginProps.mapId," goes here..."))}},{key:"onAdd",value:function(){var e,t;this.buttonProps=this.onCreateButtonProps(),this.panelProps=this.onCreateContentProps(),this.buttonPanel=(null===(e=this.map())||void 0===e?void 0:e.appBarButtons.createAppbarPanel(this.buttonProps,this.panelProps,null))||void 0;var r=this.onCreateContent();null===(t=this.buttonPanel)||void 0===t||null===(t=t.panel)||void 0===t||t.changeContent(r)}},{key:"onRemove",value:function(){var e;this.api&&this.buttonPanel&&(null===(e=this.map())||void 0===e||e.appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId))}}]),t}(r(19515).k)},28304:(e,t,r)=>{var n=r(81144),a=r(9332),o=r(51112),i=r(61992),s=r(36704),c=r(38424),l=r(6976),u=r(78424),p=r(42160),d=r(62808),f=r(21211),h=r(89568),v=r(25336),y=r(24792),x=r.n(y),g=r(46315);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,l.c)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const j=function(e){var t=e.mapId,r=e.setAddLayerVisible,n=window.cgpv,a=n.api,o=n.ui,i=n.react,s=a.maps[t].getDisplayLanguage(),c=a.layerTypes,l=c.ESRI_DYNAMIC,p=c.ESRI_FEATURE,d=c.GEOJSON,f=c.GEOPACKAGE,y=c.WMS,m=c.WFS,j=c.OGC_FEATURE,E=c.XYZ_TILES,C=c.GEOCORE,w=i.useState,I=i.useEffect,P=i.useRef,O=o.elements,L=O.Select,S=O.Stepper,k=O.TextField,A=O.Button,N=O.ButtonGroup,R=O.Autocomplete,D=O.CircularProgressBase,T=O.Box,U=O.IconButton,G=O.CloseIcon,F=O.FileUploadIcon,B=w(0),M=(0,h.c)(B,2),_=M[0],W=M[1],V=w(""),z=(0,h.c)(V,2),Y=z[0],J=z[1],K=w(""),X=(0,h.c)(K,2),Z=X[0],H=X[1],q=w(""),Q=(0,h.c)(q,2),$=Q[0],ee=Q[1],te=w([]),re=(0,h.c)(te,2),ne=re[0],ae=re[1],oe=w(""),ie=(0,h.c)(oe,2),se=ie[0],ce=ie[1],le=w([]),ue=(0,h.c)(le,2),pe=ue[0],de=ue[1],fe=w(!1),he=(0,h.c)(fe,2),ve=he[0],ye=he[1],xe=w(!1),ge=(0,h.c)(xe,2),me=ge[0],be=ge[1],je=P(null),Ee={buttonGroup:{paddingTop:12,gap:6}},Ce=function(){return $===l||$===m||$===y},we=[[l,"ESRI Dynamic Service"],[p,"ESRI Feature Service"],[d,"GeoJSON"],[f,"GeoPackage"],[y,"OGC Web Map Service (WMS)"],[m,"OGC Web Feature Service (WFS)"],[j,"OGC API Features"],[E,"XYZ Raster Tiles"],[C,"GeoCore"]],Ie={en:{finish:"Finish",continue:"Continue",back:"Back",or:"or",dropzone:"Drop Here",upload:"Choose a File",drop:"Drop the file to upload",url:"Enter URL or UUID",layer:"Layer",stepOne:"Upload a File or enter URL/UUID",stepTwo:"Select format",stepThree:"Configure layer",stepFour:"Enter Name",service:"Service Type",name:"Name",layerSelect:"Select Layer",errorEmpty:"cannot be empty",errorNone:"No file or source added",errorFile:"Only geoJSON and GeoPackage files can be used",errorServer:"source is not valid",errorProj:"does not support current map projection",only:"only"},fr:{finish:"Finir",continue:"Continuer",back:"Retour",or:"ou",dropzone:"Déposez ici",upload:"Choisir un fichier",drop:"Déposez le fichier à télécharger",url:"Entrer l'URL ou l'UUID",layer:"Couche",stepOne:"Ajouter un fichier ou entrer l'URL/UUID",stepTwo:"Sélectionnez le format",stepThree:"Configurer la couche",stepFour:"Entrez le nom",service:"Type de service",name:"Nom",layerSelect:"Sélectionner la couche",errorEmpty:"ne peut être vide",errorNone:"Pas de fichier ou de source ajouté",errorFile:"Seuls les fichiers geoJSON et GeoPackage peuvent être utilisés",errorServer:"source n'est pas valide",errorProj:"ne prend pas en charge la projection cartographique actuelle",only:"seulement"}},Pe=function(e){(0,u.uke)(e)&&e.message&&"validation.layer.loadfailed"===e.message.value&&ye(!1)};I((function(){return a.event.on(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,Pe,t),function(){a.event.off(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,Pe)}}),[]);var Oe=function(e){switch(e){case l:return{err:"ESRI Map",capability:"Map"};case p:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},Le=function(e){ye(!1),a.utilities.showError(t,"".concat(e," ").concat(Ie[s].errorEmpty),!1)},Se=function(e){ye(!1),a.utilities.showError(t,"".concat(e," ").concat(Ie[s].errorServer),!1)},ke=function(e,r,n){ye(!1);var o="".concat(e," ").concat(Ie[s].errorProj," ").concat(r,", ").concat(Ie[s].only," ").concat(n.join(", "));a.utilities.showError(t,o,!1)},Ae=function(){var e=(0,v.c)(x().mark((function e(){var r,n,o,i,s,c,l,u,p,d,f,v;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.projection.projections[a.maps[t].getMapState().currentProjection].getCode(),n=[],e.prev=2,i=Y.split("?"),s=(0,h.c)(i,2),c=s[0],l=s[1],u=new URLSearchParams(l),p=(null===(o=u.get("layers"))||void 0===o?void 0:o.split(","))||[""],e.next=8,a.geoUtilities.getWMSServiceMetadata(c,"");case 8:if(d=e.sent,(n=d.Capability.Layer.CRS).includes(r)){e.next=12;break}throw new Error("proj");case 12:f=[],v=function e(t){if(t.Layer&&t.Layer.length>0)t.Layer.forEach((function(t){e(t)}));else for(var r=0;r<p.length;r++)t.Name===p[r]&&f.push([t.Name,t.Title])},d.Capability.Layer&&v(d.Capability.Layer),1===f.length?(ce(f[0][1]),de([{layerId:f[0][0]}])):ae(f),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(2),"proj"===e.t0.message?ke("WMS",r,n):Se("WMS"),e.abrupt("return",!1);case 22:return e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=(0,v.c)(x().mark((function e(){var t,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(Y);case 3:t=e.sent,1===(r=t.FeatureTypeList.FeatureType.map((function(e){return[e.Name["#text"].split(":")[1],e.Title["#text"]]}))).length?(ce(r[0][1]),de([{layerId:r[0][0]}])):ae(r),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),Se("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=(0,v.c)(x().mark((function e(){var t,r,n,a,o,i,s;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["id","title"],e.next=3,fetch("".concat(Y,"/?f=json"));case 3:if(200===(r=e.sent).status){e.next=7;break}return Se("OGC API Feature"),e.abrupt("return",!1);case 7:return e.next=9,r.json();case 9:if(n=e.sent,!t.every((function(e){return Object.keys(n).includes(e)}))){e.next=15;break}return de([{layerId:n.id}]),ce(n.title),e.abrupt("return",!0);case 15:return e.prev=15,a=["collections","links"],e.next=19,fetch("".concat(Y,"/collections?f=json"));case 19:return o=e.sent,e.next=22,o.json();case 22:if(i=e.sent,a.every((function(e){return Object.keys(i).includes(e)}))){e.next=26;break}throw new Error("err");case 26:1===(s=i.collections.map((function(e){return[e.id,e.title]}))).length?(ce(s[0][1]),de([{layerId:s[0][0]}])):ae(s),e.next=34;break;case 30:return e.prev=30,e.t0=e.catch(15),Se("OGC API Feature"),e.abrupt("return",!1);case 34:return e.abrupt("return",!0);case 35:case"end":return e.stop()}}),e,null,[[15,30]])})));return function(){return e.apply(this,arguments)}}(),De=function(){try{if(!(-1===Y.indexOf("/")&&32===Y.replaceAll("-","").length))throw new Error("err");ce(""),de([{layerId:Y}])}catch(e){return Se("GeoCore UUID"),!1}return!0},Te=function(){var e=(0,v.c)(x().mark((function e(t){var r,n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(Y);case 3:if(!(r=e.sent).capabilities.includes(Oe(t).capability)){e.next=8;break}"layers"in r?1===(n=r.layers.map((function(e){return[e.id,e.name]}))).length?(ce(n[0][1]),de([{layerId:n[0][0]}])):ae(n):(ce(r.name),de([{layerId:r.id}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),Se(Oe(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),Ue=function(){for(var e=["{x}","{y}","{z}"],t=0;t<e.length;t+=1)if(!Y.includes(e[t]))return Se("XYZ Tile"),!1;var r=Y;return ce(""),de([{layerId:Y,source:{dataAccessPath:{en:r,fr:r}}}]),!0},Ge=function(){var e=(0,v.c)(x().mark((function e(){var t,r,n,a;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(Y);case 3:return t=e.sent,e.next=6,t.json();case 6:if(r=e.sent,["FeatureCollection","Feature"].includes(r.type)){e.next=9;break}throw new Error("err");case 9:n=Y.split("/").pop(),a=Y.replace(n,""),se||ce(n),de([{layerId:n,source:{dataAccessPath:{en:a,fr:a}}}]),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),Se("GeoJSON"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=(0,v.c)(x().mark((function e(){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ye(!0),t=!0,void 0!==$){e.next=8;break}t=!1,ye(!1),Le(Ie[s].service),e.next=49;break;case 8:if($!==y){e.next=14;break}return e.next=11,Ae();case 11:t=e.sent,e.next=49;break;case 14:if($!==m){e.next=20;break}return e.next=17,Ne();case 17:t=e.sent,e.next=49;break;case 20:if($!==j){e.next=26;break}return e.next=23,Re();case 23:t=e.sent,e.next=49;break;case 26:if($!==E){e.next=30;break}t=Ue(),e.next=49;break;case 30:if($!==l){e.next=36;break}return e.next=33,Te(l);case 33:t=e.sent,e.next=49;break;case 36:if($!==p){e.next=42;break}return e.next=39,Te(p);case 39:t=e.sent,e.next=49;break;case 42:if($!==d){e.next=48;break}return e.next=45,Ge();case 45:t=e.sent,e.next=49;break;case 48:$===f?(r=void 0,n=void 0,r=Y.split("/").pop(),n=Y.replace(r,""),se||ce(r),de([{layerId:r,source:{dataAccessPath:{en:n,fr:n}}}]),t=!0):$===C&&(t=De());case 49:t&&(ye(!1),W(2));case 50:case"end":return e.stop()}var r,n}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){ye(!0);var e=a.generateId();a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t),ye(!1),r(!1)}),"".concat(t,"/").concat(e));var n=!0,o=se,i=Y;if($!==l&&$!==p||(i=a.geoUtilities.getMapServerUrl(Y)),$===y){var c=Y.split("?");i=(0,h.c)(c,1)[0]}""===se&&(n=!1,Le(Ce()?Ie[s].layer:Ie[s].name));var u={geoviewLayerId:e,geoviewLayerName:{en:o,fr:o},geoviewLayerType:$,metadataAccessPath:{en:i,fr:i},listOfLayerEntryConfig:pe};$!==d&&$!==E&&$!==f||(u.metadataAccessPath={en:"",fr:""}),$===C&&delete u.metadataAccessPath,$===j&&(u.metadataAccessPath={en:a.geoUtilities.getOGCServerUrl(Y),fr:a.geoUtilities.getOGCServerUrl(Y)}),n&&($===C&&setTimeout((function(){ye(!1),r(!1)}),3e3),u.geoviewLayerId?a.maps[t].layer.layerOrder.push(u.geoviewLayerId):void 0!==u.listOfLayerEntryConfig&&u.listOfLayerEntryConfig.forEach((function(e){e.layerId&&a.maps[t].layer.layerOrder.unshift(e.layerId)})),a.maps[t].layer.addGeoviewLayer(u))},Me=function(){W((function(e){return e-1}))},_e=function(e){var t=URL.createObjectURL(e);H(e.name),J(t);var r=e.name.split(".")[0];ee(""),ae([]),ce(r),de([])},We=function(e){ce(e.target.value)},Ve=function(e){var r;if(e.preventDefault(),e.stopPropagation(),be(!1),null!==(r=e.dataTransfer)&&void 0!==r&&r.files){var n=e.dataTransfer.files[0],o=n.name.toUpperCase();o.endsWith(".JSON")||o.endsWith(".GEOJSON")||o.endsWith(".GPKG")||o.endsWith(".CSV")?_e(n):a.utilities.showError(t,Ie[s].errorFile,!1)}};function ze(e){var t=e.isFirst,r=void 0!==t&&t,n=e.isLast,a=void 0!==n&&n,o=e.handleNext;return ve?(0,g.jsx)(T,{sx:{padding:10},children:(0,g.jsx)(D,{})}):(0,g.jsxs)(N,{sx:Ee.buttonGroup,children:[(0,g.jsx)(A,{variant:"contained",type:"text",onClick:o,children:a?Ie[s].finish:Ie[s].continue}),!r&&(0,g.jsx)(A,{variant:"contained",type:"text",onClick:Me,children:Ie[s].back})]})}return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(T,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,g.jsx)(U,{color:"primary",onClick:function(){return r(!1)},children:(0,g.jsx)(G,{})})}),(0,g.jsx)(S,{sx:{position:"relative",top:"-30px",zIndex:1},activeStep:_,orientation:"vertical",steps:[{stepLabel:{children:Ie[s].stepOne},stepContent:{children:(0,g.jsxs)("div",{className:"dropzone",style:{position:"relative"},onDrop:function(e){return Ve(e)},onDragOver:function(e){return(t=e).preventDefault(),void t.stopPropagation();var t},onDragEnter:function(e){return(t=e).preventDefault(),t.stopPropagation(),void(t.target!==je.current&&be(!0));var t},onDragLeave:function(e){return(t=e).preventDefault(),t.stopPropagation(),void(t.target===je.current&&be(!1));var t},children:[me&&(0,g.jsx)("div",{ref:je,style:{backgroundColor:"rgba(128,128,128,.95)",position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:9999,textAlign:"center",color:"black",fontSize:24},children:(0,g.jsxs)("h3",{children:[(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),Ie[s].dropzone]})}),(0,g.jsx)("div",{children:(0,g.jsx)("input",{type:"file",id:"fileUpload",style:{display:"none"},onChange:function(e){e.target.files&&_e(e.target.files[0])},accept:".gpkg, .json, .geojson, .csv"})}),(0,g.jsxs)(A,{type:"text",onClick:function(){var e;return null===(e=document.getElementById("fileUpload"))||void 0===e?void 0:e.click()},className:"",children:[(0,g.jsx)(F,{}),(0,g.jsx)("span",{children:Ie[s].upload})]}),(0,g.jsx)("p",{style:{textAlign:"center"},children:(0,g.jsx)("small",{children:Ie[s].drop})}),(0,g.jsx)("p",{style:{textAlign:"center"},children:Ie[s].or}),(0,g.jsx)(k,{sx:{width:"100%"},label:Ie[s].url,variant:"standard",value:Z,onChange:function(e){H(e.target.value.trim()),J(e.target.value.trim()),ee(""),ae([]),ce(""),de([])},multiline:!0}),(0,g.jsx)("br",{}),(0,g.jsx)(ze,{isFirst:!0,handleNext:function(){var e,r,n=!0;""===Y.trim()&&(n=!1,ye(!1),a.utilities.showError(t,Ie[s].errorNone,!1)),n&&(e=Z.toUpperCase().split("/"),r=parseInt(e[e.length-1],10),Z.toUpperCase().endsWith("MAPSERVER")||Z.toUpperCase().endsWith("MAPSERVER/")?ee(l):-1!==Z.toUpperCase().indexOf("FEATURESERVER")||-1!==Z.toUpperCase().indexOf("MAPSERVER")&&!Number.isNaN(r)?ee(p):-1!==e.indexOf("WFS")?ee(m):Z.toUpperCase().endsWith(".JSON")||Z.toUpperCase().endsWith(".GEOJSON")?ee(d):Z.toUpperCase().endsWith(".GPKG")?ee(f):-1!==Z.toUpperCase().indexOf("{Z}/{X}/{Y}")||-1!==Z.toUpperCase().indexOf("{Z}/{Y}/{X}")?ee(E):-1===Z.indexOf("/")&&32===Z.replaceAll("-","").length?ee(C):-1!==Z.toUpperCase().indexOf("WMS")&&ee(y),W(1))}})]})}},{stepLabel:{children:Ie[s].stepTwo},stepContent:{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(L,{fullWidth:!0,labelId:"service-type-label",value:$,onChange:function(e){ee(e.target.value),ae([]),de([])},label:Ie[s].service,inputLabel:{id:"service-type-label"},menuItems:we.map((function(e){var t=(0,h.c)(e,2),r=t[0];return{key:r,item:{value:r,children:t[1]}}}))}),(0,g.jsx)(ze,{handleNext:Fe})]})}},{stepLabel:{children:Ie[s].stepThree},stepContent:{children:(0,g.jsxs)(g.Fragment,{children:[0===ne.length&&(0,g.jsx)(k,{label:Ie[s].name,variant:"standard",value:se,onChange:We}),ne.length>1&&(0,g.jsx)(R,{fullWidth:!0,multiple:Ce(),disableClearable:!Ce(),id:"service-layer-label",options:ne,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,g.jsx)("span",b(b({},e),{},{children:t[1]}))},onChange:function(e,t){Ce()?(de(t.map((function(e){return{layerId:"".concat(e[0])}}))),ce(t.map((function(e){return e[1]})).join(", "))):(de([{layerId:"".concat(t[0])}]),ce(t[1]))},renderInput:function(e){return(0,g.jsx)(k,b(b({},e),{},{label:Ie[s].layerSelect}))}}),(0,g.jsx)("br",{}),(0,g.jsx)(ze,{isLast:!Ce(),handleNext:Ce()?function(){var e=!0;0===pe.length&&(e=!1,Le(Ie[s].layer)),e&&W(3)}:Be})]})}},Ce()?{stepLabel:{children:Ie[s].stepFour},stepContent:{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k,{sx:{width:"100%"},label:Ie[s].name,variant:"standard",value:se,onChange:We}),(0,g.jsx)("br",{}),(0,g.jsx)(ze,{isLast:!0,handleNext:Be})]})}}:null]})]})};var E=r(34400);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,l.c)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const I=function(e){var t=e.mapId,r=e.title,n=e.layerIds,a=e.setReorderLayersVisible,o=e.setMapLayers,i=window.cgpv,s=i.api,c=i.ui.elements,l=c.List,u=c.ListItem,p=c.ListItemButton,d=c.ListItemIcon,v=c.HandleIcon,y=c.ListItemText,x=c.Box,m=c.IconButton,b=c.CloseIcon,j=s.maps[t].displayLanguage,C={titleBar:{position:"relative",top:"-30px",zIndex:1},draggableList:{top:"-30px"},regularListItem:{color:"text.primary",padding:0},draggingListItem:{color:"text.primary",padding:0,background:"rgb(235,235,235,0.5)"},listItemText:{fontSize:14,noWrap:!0},handleIcon:{margin:"8px 0px"}},I=function(e){return s.maps[t].layer.geoviewLayers[e].geoviewLayerName[j]};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,g.jsx)(m,{color:"primary",onClick:function(){return a(!1)},children:(0,g.jsx)(b,{})})}),(0,g.jsx)(x,{sx:C.titleBar,children:r}),(0,g.jsx)(E._y,{onDragEnd:function(e){var r=e.destination,a=e.source;if(r){var i=(0,f.c)(n),c=i.splice(a.index,1),l=(0,h.c)(c,1)[0];i.splice(r.index,0,l),s.maps[t].layer.moveLayer(l,r.index),o(i)}},children:(0,g.jsx)(E.SS,{droppableId:"droppable",children:function(e){return(0,g.jsxs)(l,w(w({sx:C.draggableList},e.droppableProps),{},{innerref:e.innerRef,children:[n.map((function(e,t){return(0,g.jsx)(E.wf,{draggableId:e,index:t,children:function(t,r){return(0,g.jsx)(u,w(w(w({innerref:t.innerRef,sx:r.isDragging?C.draggingListItem:C.regularListItem},t.draggableProps),t.dragHandleProps),{},{children:(0,g.jsxs)(p,{children:[(0,g.jsx)(d,{children:(0,g.jsx)(v,{sx:C.handleIcon})}),(0,g.jsx)(y,{primaryTypographyProps:C.listItemText,primary:I(e)})]})}))}},e)})),e.placeholder]}))}})})]})};const P=function(e){var t=e.mapId,r=e.buttonPanel,n=window.cgpv,a=n.api,o=n.ui,i=n.react,s=i.useState,c=i.useEffect,l=s(!1),p=(0,h.c)(l,2),d=p[0],v=p[1],y=s(!1),x=(0,h.c)(y,2),m=x[0],b=x[1],E=s([]),C=(0,h.c)(E,2),w=C[0],P=C[1],O=s(),L=(0,h.c)(O,2),S=L[0],k=L[1],A=s(null),N=(0,h.c)(A,2),R=N[0],D=N[1],T=s(!1),U=(0,h.c)(T,2),G=U[0],F=U[1],B=s(!1),M=(0,h.c)(B,2),_=M[0],W=M[1],V=o.elements,z=V.IconButton,Y=V.AddIcon,J=V.Box,K=V.ExpandMoreIcon,X=V.ExpandLessIcon,Z=V.VisibilityIcon,H=V.VisibilityOffIcon,q=V.Menu,Q=V.MenuItem,$=V.MenuIcon,ee=V.ListItemIcon,te=V.ListItemText,re=V.ReorderIcon,ne=a.maps[t].getDisplayLanguage(),ae=(0,u.Itl)({en:{addLayer:"Add Layer",expandAll:"Expand Groups",collapseAll:"Collapse Groups",showAll:"Show All",hideAll:"Hide All",reorderLayers:"Reorder Layers"},fr:{addLayer:"Ajouter Couche",expandAll:"Élargir les groupes",collapseAll:"Réduire les groupes",showAll:"Montrer tout",hideAll:"Cacher tout",reorderLayers:"Réorganiser les couches"}}),oe={mainContainer:{display:"flex",flexDirection:"column",height:"inherit"},topControls:{display:"flex",flexDirection:"row",justifyContent:"space-between"},addLayerSection:{display:"flex",alignItems:"center",marginTop:"auto",justifyContent:"end"}},ie=Boolean(R),se=function(){var e;void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&P((0,f.c)(a.maps[t].layer.layerOrder).reverse())};c((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,se,t),a.event.on(a.eventNames.GET_LEGENDS.LEGENDS_LAYERSET_UPDATED,se,"".concat(t,"/LegendsLayerSet")),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,se),a.event.off(a.eventNames.GET_LEGENDS.LEGENDS_LAYERSET_UPDATED,t,se)}}),[]),c((function(){}),[w]),c((function(){var e=function(){return v(!1)};return a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,e,"".concat(t,"/").concat(r.buttonPanelId)),function(){a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,"".concat(t,"/").concat(r.buttonPanelId),e)}}),[a,r.buttonPanelId,t]),c((function(){k(null)}),[G]),c((function(){k(null)}),[_]);var ce=function(){D(null)},le=function(e){F(e),ce()},ue=function(e){W(!e),ce()};return c((function(){if(m){var e=window.scrollX,t=window.scrollY;window.onscroll=function(){window.scrollTo(e,t)}}else window.onscroll=function(){}}),[m]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(q,{anchorEl:R,open:ie,onClose:ce,children:[(0,g.jsxs)(Q,{onClick:function(){return le(!0)},children:[(0,g.jsx)(ee,{children:(0,g.jsx)(K,{})}),(0,g.jsx)(te,{children:ae[ne].expandAll})]}),(0,g.jsxs)(Q,{onClick:function(){return le(!1)},children:[(0,g.jsx)(ee,{children:(0,g.jsx)(X,{})}),(0,g.jsx)(te,{children:ae[ne].collapseAll})]}),(0,g.jsxs)(Q,{onClick:function(){return ue(!0)},children:[(0,g.jsx)(ee,{children:(0,g.jsx)(Z,{})}),(0,g.jsx)(te,{children:ae[ne].showAll})]}),(0,g.jsxs)(Q,{onClick:function(){return ue(!1)},children:[(0,g.jsx)(ee,{children:(0,g.jsx)(H,{})}),(0,g.jsx)(te,{children:ae[ne].hideAll})]}),(0,g.jsxs)(Q,{onClick:function(){return b(!0),void ce()},children:[(0,g.jsx)(ee,{children:(0,g.jsx)(re,{})}),(0,g.jsx)(te,{children:ae[ne].reorderLayers})]})]}),(0,g.jsxs)(J,{sx:oe.mainContainer,children:[d&&(0,g.jsx)(j,{mapId:t,setAddLayerVisible:v}),m&&(0,g.jsx)(I,{mapId:t,title:ae[ne].reorderLayers,layerIds:w,setMapLayers:P,setReorderLayersVisible:b}),(0,g.jsxs)(J,{sx:oe.topControls,style:{display:d||m?"none":"flex"},children:[(0,g.jsx)("div",{children:(0,g.jsx)(z,{color:"primary",onClick:function(e){D(e.currentTarget)},children:(0,g.jsx)($,{})})}),(0,g.jsxs)(J,{onClick:function(){v((function(e){return!e}))},children:[ae[ne].addLayer,(0,g.jsx)(z,{children:(0,g.jsx)(Y,{})})]})]}),(0,g.jsx)("div",{style:{display:d||m?"none":"block"},children:S})]})]})},O=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Layers/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"reorderable":{"type":"boolean","default":true,"description":"Specifies if the items in the legend can be reordered."},"allowImport":{"type":"boolean","default":true,"description":"Specifies if the user-added layers are allowed."},"isOpen":{"type":"object","description":"Specifies whether the legend is opened by default on initial loading of the map for small, medium, and large viewports.","properties":{"large":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for large viewports."},"medium":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for medium viewports."},"small":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for small viewports."}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),L=JSON.parse('{"reorderable":true,"allowImport":true,"isOpen":{"small":false,"medium":false,"large":false},"suportedLanguages":["en","fr"]}');function S(e,t,r){return t=(0,i.c)(t),(0,o.c)(e,k()?Reflect.construct(t,r||[],(0,i.c)(e).constructor):t.apply(e,r))}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}var A=function(e){function t(){var e;(0,n.c)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=S(this,t,[].concat(a)),(0,l.c)((0,s.c)(e),"schema",(function(){return O})),(0,l.c)((0,s.c)(e),"defaultConfig",(function(){return(0,u.Itl)(L)})),(0,l.c)((0,s.c)(e),"translations",(0,u.Itl)({en:{layersPanel:{title:"Layers"}},fr:{layersPanel:{title:"Couches"}}})),e}return(0,c.c)(t,e),(0,a.c)(t,[{key:"onCreateButtonProps",value:function(){return{id:"layersPanelButton",tooltip:"layersPanel.title",tooltipPlacement:"right",children:(0,g.jsx)(d.LayersOutlinedIcon,{}),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"layersPanel.title",icon:(0,g.jsx)(d.LayersOutlinedIcon,{}),width:350,status:null===(e=this.configObj)||void 0===e||null===(e=e.isOpen)||void 0===e?void 0:e.large}}},{key:"onCreateContent",value:function(){return(0,g.jsx)(P,{buttonPanel:this.buttonPanel,mapId:this.pluginProps.mapId})}}]),t}(p.c);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["layers-panel"]=(0,u.Utj)(A)}},e=>{var t;t=28304,e(e.s=t)}]);
//# sourceMappingURL=geoview-layers-panel.js.map