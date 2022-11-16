/*! Package:geoview-layers-panel: 0.1.0 - "4b922aee73a5fe258c5f5f667366f85e6d69dbd4" - 2022-11-16T18:55:42.402Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[763],{84385:(e,t,n)=>{var r=n(7886),a=n(1116),i=n(71120),o=n(33756),s=n(81770),c=n(23078),l=n(3),u=n(43337),d=n(90755),p=n(93780),f=n(10835),v=n.n(f),y=n(45202);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=window;const b=function(e){var t=e.mapId,n=e.setAddLayerVisible,r=h.cgpv,a=r.api,i=r.react,o=r.ui,s=a.layerTypes,c=s.ESRI_DYNAMIC,l=s.ESRI_FEATURE,f=s.GEOJSON,g=s.WMS,b=s.WFS,x=s.OGC_FEATURE,w=s.XYZ_TILES,j=i.useState,L=o.elements,O=L.Select,I=L.Stepper,E=L.TextField,S=L.Button,N=L.ButtonGroup,C=L.Typography,Z=L.Autocomplete,P=j(0),k=(0,d.Z)(P,2),A=k[0],T=k[1],R=j(""),B=(0,d.Z)(R,2),G=B[0],D=B[1],F=j(""),_=(0,d.Z)(F,2),W=_[0],V=_[1],M=j([]),U=(0,d.Z)(M,2),Y=U[0],J=U[1],z=j(""),K=(0,d.Z)(z,2),Q=K[0],q=K[1],X=j([]),$=(0,d.Z)(X,2),H=$[0],ee=$[1],te=o.makeStyles((function(){return{buttonGroup:{paddingTop:12,gap:6}}}))(),ne=function(){return W===c},re=[[c,"ESRI Dynamic Service"],[l,"ESRI Feature Service"],[f,"GeoJSON"],[g,"OGC Web Map Service (WMS)"],[b,"OGC Web Feature Service (WFS)"],[x,"OGC API Features"],[w,"XYZ Raster Tiles"]],ae=function(e){switch(e){case c:return{err:"ESRI Map",capability:"Map"};case l:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},ie=function(e){a.event.emit((0,u.ZuA)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"".concat(e," cannot be empty")}))},oe=function(e){a.event.emit((0,u.ZuA)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"URL is not a valid ".concat(e," Server")}))},se=function(e,n,r){a.event.emit((0,u.ZuA)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"".concat(e," does not support current map projection ").concat(n,", only ").concat(r.join(", "))}))},ce=function(){var e=(0,p.Z)(v().mark((function e(){var n,r,i,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.projection.projections[a.map(t).currentProjection].getCode(),r=[],e.prev=2,e.next=5,a.geoUtilities.getWMSServiceMetadata(G,"");case 5:if(i=e.sent,(r=i.Capability.Layer.CRS).includes(n)){e.next=9;break}throw new Error("proj");case 9:1===(o=i.Capability.Layer.Layer.map((function(e){return[e.Name,e.Title]}))).length?(q(o[0][1]),ee([{geoviewLayerId:o[0][0],geoviewLayerType:"ogcWms",listOfLayerEntryConfig:[]}])):J(o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(2),"proj"===e.t0?se("WMS",n,r):oe("WMS"),e.abrupt("return",!1);case 17:return e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=(0,p.Z)(v().mark((function e(){var t,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(G);case 3:t=e.sent,1===(n=t.FeatureTypeList.FeatureType.map((function(e){return[(0,u.ZQJ)(e.Name["#text"].split(":")[1]),e.Title["#text"]]}))).length?(q(n[0][1]),ee([{geoviewLayerId:n[0][0],geoviewLayerType:"ogcWms",listOfLayerEntryConfig:[]}])):J(n),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),oe("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,p.Z)(v().mark((function e(){var t,n,r,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["collections","links"],e.prev=1,e.next=4,fetch("".concat(G,"/collections?f=json"));case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,t.every((function(e){return Object.keys(r).includes(e)}))){e.next=11;break}throw new Error("err");case 11:1===(a=r.collections.map((function(e){return[e.id,e.title]}))).length?(q(a[0][1]),ee([{geoviewLayerId:a[0][0],geoviewLayerType:"ogcWms",listOfLayerEntryConfig:[]}])):J(a),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(1),oe("OGC API Feature"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,p.Z)(v().mark((function e(t){var n,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(G);case 3:if(!(n=e.sent).capabilities.includes(ae(t).capability)){e.next=8;break}"layers"in n?1===(r=n.layers.map((function(e){return[e.id,e.name]}))).length?(q(r[0][1]),ee([{geoviewLayerId:r[0][0],geoviewLayerType:"ogcWms",listOfLayerEntryConfig:[]}])):J(r):(q(n.name),ee([{geoviewLayerId:n.id,geoviewLayerType:"ogcWms",listOfLayerEntryConfig:[]}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),oe(ae(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){for(var e=a.projection.projections[a.map(t).currentProjection].getCode(),n=["{x}","{y}","{z}"],r=0;r<n.length;r+=1)if(!G.includes(n[r]))return oe("XYZ Tile"),!1;return"EPSG:3857"===e||(se("XYZ Tiles",e,["EPSG:3857"]),!1)},fe=function(){var e=(0,p.Z)(v().mark((function e(){var t,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(G);case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,["FeatureCollection","Feature"].includes(n.type)){e.next=9;break}throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),oe("GeoJSON"),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=(0,p.Z)(v().mark((function e(){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!0,void 0===W&&(t=!1,ie("Service Type")),W!==g){e.next=6;break}return e.next=5,ce();case 5:t=e.sent;case 6:if(W!==b){e.next=10;break}return e.next=9,le();case 9:t=e.sent;case 10:if(W!==x){e.next=16;break}return e.next=13,ue();case 13:t=e.sent,e.next=36;break;case 16:if(W!==w){e.next=20;break}t=pe(),e.next=36;break;case 20:if(W!==c){e.next=26;break}return e.next=23,de(c);case 23:t=e.sent,e.next=36;break;case 26:if(W!==l){e.next=32;break}return e.next=29,de(l);case 29:t=e.sent,e.next=36;break;case 32:if(W!==f){e.next=36;break}return e.next=35,fe();case 35:t=e.sent;case 36:t&&T(2);case 37:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=!0,r=Q,i=G,o=H;W===c?i=a.geoUtilities.getMapServerUrl(G):W===l&&(i="".concat(a.geoUtilities.getMapServerUrl(G),"/").concat(H[0].layerId),o=[]),""===Q&&(e=!1,ie(ne()?"Name":"Layer"));var s={geoviewLayerId:a.generateId(),geoviewLayerName:{en:r,fr:r},geoviewLayerType:W,metadataAccessPath:{en:i,fr:i},listOfLayerEntryConfig:o};e&&(a.map(t).layer.addGeoviewLayer(s),n(!1))},ge=function(){T((function(e){return e-1}))},me=function(e){q(e.target.value)};function he(e){var t=e.isFirst,n=void 0!==t&&t,r=e.isLast,a=void 0!==r&&r,i=e.handleNext;return(0,y.jsxs)(N,{className:te.buttonGroup,children:[(0,y.jsx)(S,{variant:"contained",type:"text",onClick:i,children:a?"Finish":"Continue"}),!n&&(0,y.jsx)(S,{variant:"contained",type:"text",onClick:ge,children:"Back"})]})}return(0,y.jsx)(I,{activeStep:A,orientation:"vertical",steps:[{stepLabel:{children:"Enter URL"},stepContent:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(E,{sx:{width:"100%"},label:"URL",variant:"standard",value:G,onChange:function(e){D(e.target.value),V(""),J([]),q(""),ee([])}}),(0,y.jsx)("br",{}),(0,y.jsx)(he,{isFirst:!0,handleNext:function(){var e=!0;""===G.trim()&&(e=!1,ie("URL")),e&&T(1)}})]})}},{stepLabel:{children:"Select format"},stepContent:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(O,{fullWidth:!0,labelId:"service-type-label",value:W,onChange:function(e){V(e.target.value),J([]),q(""),ee([])},label:"Service Type",inputLabel:{id:"service-type-label"},menuItems:re.map((function(e){var t=(0,d.Z)(e,2),n=t[0];return{key:n,item:{value:n,children:t[1]}}}))}),(0,y.jsx)(he,{handleNext:ve})]})}},{stepLabel:{children:"Configure layer"},stepContent:{children:(0,y.jsxs)(y.Fragment,{children:[0===Y.length&&0===H.length&&(0,y.jsx)(E,{label:"Name",variant:"standard",value:Q,onChange:me}),0===Y.length&&H.length>0&&(0,y.jsx)(C,{children:Q}),Y.length>1&&(0,y.jsx)(Z,{fullWidth:!0,multiple:ne(),disableCloseOnSelect:!0,disableClearable:!ne(),id:"service-layer-label",options:Y,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,y.jsx)("span",m(m({},e),{},{children:t[1]}))},onChange:function(e,t){ne()?(ee(t.map((function(e){return{layerId:e[0]}}))),q(t.map((function(e){return e[1]})).join(", "))):(ee([{layerId:t[0]}]),q(t[1]))},renderInput:function(e){return(0,y.jsx)(E,m(m({},e),{},{label:"Select Layer"}))}}),(0,y.jsx)("br",{}),(0,y.jsx)(he,{isLast:!ne(),handleNext:ne()?function(){var e=!0;0===H.length&&(e=!1,ie("Layer")),e&&T(3)}:ye})]})}},ne()?{stepLabel:{children:"Enter Name"},stepContent:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(E,{sx:{width:"100%"},label:"Name",variant:"standard",value:Q,onChange:me}),(0,y.jsx)("br",{}),(0,y.jsx)(he,{isLast:!0,handleNext:ye})]})}}:null]})};var x=n(47502);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=window;const O=function(e){var t=e.mapId,n=e.layers,r=e.displayLanguage,a=L.cgpv,i=a.ui,o=a.react,s=a.api,c=o.useState,f=o.useEffect,g=c(""),m=(0,d.Z)(g,2),h=m[0],b=m[1],w=c({}),O=(0,d.Z)(w,2),I=O[0],E=O[1],S=c({}),N=(0,d.Z)(S,2),C=N[0],Z=N[1],P=c([]),k=(0,d.Z)(P,2),A=k[0],T=k[1],R=c({}),B=(0,d.Z)(R,2),G=B[0],D=B[1],F=c({}),_=(0,d.Z)(F,2),W=_[0],V=_[1],M=c({}),U=(0,d.Z)(M,2),Y=U[0],J=U[1],z=i.elements,K=z.Button,Q=z.Slider,q=z.Tooltip,X=z.Checkbox,$=(0,u.ZQJ)({en:{bounds:"Toggle Bounds",zoom:"Zoom to Layer",remove:"Remove Layer",opacity:"Adjust Opacity",visibility:"Toggle Visibility"},fr:{bounds:"Basculer la limite",zoom:"Zoom sur la Couche",remove:"Supprimer la Couche",opacity:"Ajuster l'opacité",visibility:"Basculer la Visibilité"}}),H=i.makeStyles((function(){return{layersContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},layerItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3,border:"none",width:"100%"},layerParentText:{fontSize:"16px",fontWeight:"bold"},layerCountTextContainer:{display:"flex",alignItems:"center",width:"100%",height:"32px"},layerItemText:{fontSize:"14px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",marginLeft:"10px",display:"flex",alignItems:"center",gap:6},flexGroup:{display:"flex",justifyContent:"flex-end",alignItems:"baseline",gap:12},flexGroupButton:{height:38,minHeight:38,width:25,minWidth:25,"& > div":{textAlign:"center"}},slider:{width:"100%",paddingLeft:20,paddingRight:20},legendSubLayerGroup:{display:"flex",justifyContent:"space-between"}}})),ee=function(){var e=(0,p.Z)(v().mark((function e(){var t,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=v().mark((function e(t){var r,a,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.keys(n)[t],a=n[r],e.next=4,a.getBounds();case 4:i=e.sent,Z((function(e){return j(j({},e),{},(0,l.Z)({},a.geoviewLayerId,i))}));case 6:case"end":return e.stop()}}),e)})),r=0;case 2:if(!(r<Object.keys(n).length)){e.next=7;break}return e.delegateYield(t(r),"t0",4);case 4:r++,e.next=2;break;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();f((function(){var e=Object.values(n).reduce((function(e,t){return j(j({},e),{},(0,l.Z)({},t.geoviewLayerId,[]))}),{});E((function(t){return j(j({},e),t)})),Object.values(n).forEach(function(){var e=(0,p.Z)(v().mark((function e(t){var n,r,a,i,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,u.N61)(t)){e.next=9;break}return e.next=3,t.getLegendGraphic();case 3:n=e.sent,r=(0,u.dIw)(t.metadataAccessPath,t.mapId).includes("/MapServer")?t.geoviewLayerName:"",a=[{name:r,dataUrl:n}],E((function(e){return j(j({},e),{},(0,l.Z)({},t.geoviewLayerId,a))})),e.next=15;break;case 9:if(!(0,u.YDG)(t)&&!(0,u.Xvt)(t)){e.next=15;break}return e.next=12,t.getLegendJson();case 12:i=e.sent,o=Array.isArray(i)?i:[i],E((function(e){return j(j({},e),{},(0,l.Z)({},t.geoviewLayerId,o))}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var t=Object.values(n).reduce((function(e,t){return j(j({},e),{},(0,l.Z)({},t.geoviewLayerId,[]))}),{});Z((function(e){return j(j({},t),e)})),ee();var r=Object.values(n).reduce((function(e,t){return j(j({},e),{},(0,l.Z)({},t.geoviewLayerId,100))}),{});D((function(e){return j(j({},r),e)}));var a=Object.values(n).reduce((function(e,t){return j(j({},e),{},(0,l.Z)({},t.geoviewLayerId,!0))}),{});V((function(e){return j(j({},a),e)}));var i=Object.values(n).reduce((function(e,t){return j(j({},e),{},(0,l.Z)({},t.geoviewLayerId,t.entries))}),{});J((function(e){return j(j({},i),e)}))}),[n]);var te=H();return(0,y.jsx)("div",{className:te.layersContainer,children:Object.values(n).map((function(e){return(0,y.jsxs)("div",{children:[(0,y.jsx)("button",{type:"button",className:te.layerItem,onClick:function(){return t=e.geoviewLayerId,void b(t!==h?t:"");var t},children:(0,y.jsx)("div",{className:te.layerCountTextContainer,children:(0,y.jsx)("div",{className:te.layerItemText,title:e.geoviewLayerName,children:e.geoviewLayerName})})}),h===e.geoviewLayerId&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:te.flexGroup,children:[(0,y.jsx)(K,{className:te.flexGroupButton,tooltip:$[r].zoom,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">zoom_in</i>',onClick:function(){return function(e){return s.map(t).fitBounds(C[e.geoviewLayerId])}(e)}}),(0,y.jsx)(K,{className:te.flexGroupButton,tooltip:$[r].bounds,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">crop_free</i>',onClick:function(){return function(e){var n,r,a,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=[];if(e&&e.length>0){var r=e[0],a=e[1],i=e[2],o=e[3],s=[i,a],c=[r,a],l=[i,o],u=[r,o],d=i-r;n.push(c);for(var p=1;p<=t;p+=1){var f=r+d*(p/(t+1));n.push([f,a])}n.push(s),n.push(l);for(var v=1;v<=t;v+=1){var y=i-d*(v/(t+1));n.push([y,o])}n.push(u)}return n}(C[e.geoviewLayerId]);A.toString()===i.toString()?(null===(n=s.map(t).layer.vector)||void 0===n||n.deleteGeometry("layerBoundingBox"),T([])):(null===(r=s.map(t).layer.vector)||void 0===r||r.deleteGeometry("layerBoundingBox"),null===(a=s.map(t).layer.vector)||void 0===a||a.addPolygon([i],{style:{strokeColor:"red",fillColor:"red",fillOpacity:.2}},"layerBoundingBox"),T(i))}(e)}}),(0,y.jsx)(K,{className:te.flexGroupButton,tooltip:$[r].remove,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">remove</i>',onClick:function(){return function(e){var n;T([]),null===(n=s.map(t).layer.vector)||void 0===n||n.deleteGeometry("layerBoundingBox"),s.map(t).layer.removeGeoviewLayer(e)}(e)}})]}),(0,y.jsxs)("div",{className:te.flexGroup,children:[(0,y.jsx)(q,{title:$[r].opacity,children:(0,y.jsx)("i",{className:"material-icons",children:"contrast"})}),(0,y.jsx)("div",{className:te.slider,children:(0,y.jsx)(Q,{id:s.generateId(),min:0,max:100,size:"small",value:G[e.geoviewLayerId],valueLabelDisplay:"auto",customOnChange:function(t){return function(e,t){D((function(n){return j(j({},n),{},(0,l.Z)({},t.geoviewLayerId,e))}));var n=W[t.geoviewLayerId]?e/100:0;t.setOpacity(n)}(t,e)}})}),(0,y.jsx)(q,{title:$[r].visibility,children:(0,y.jsx)(X,{checked:W[e.geoviewLayerId],onChange:function(t){return function(e,t){V((function(n){return j(j({},n),{},(0,l.Z)({},t.geoviewLayerId,e))}));var n=e?G[t.geoviewLayerId]/100:0;t.setOpacity(n),e&&t.setEntries&&(J((function(e){return j(j({},e),{},(0,l.Z)({},t.geoviewLayerId,t.entries))})),t.setEntries(t.entries)),!e&&t.setEntries&&(J((function(e){return j(j({},e),{},(0,l.Z)({},t.geoviewLayerId,[]))})),t.setEntries([]))}(t.target.checked,e)}})})]}),I[e.geoviewLayerId].map((function(t,n){var a,i,o,s,c,u;return(0,y.jsxs)("div",{children:[t.legend&&(0,y.jsxs)("div",{className:te.legendSubLayerGroup,children:[(0,y.jsx)("div",{className:te.layerItemText,title:t.layerName,children:t.layerName}),(0,y.jsx)(q,{title:$[r].visibility,children:(0,y.jsx)(X,{checked:Y[e.geoviewLayerId].includes(t.layerId),onChange:function(n){return r=n.target.checked,a=e,i=t.layerId,o=Y[a.geoviewLayerId],s=r?(0,x.Z)(new Set([].concat((0,x.Z)(o),[i]))):o.filter((function(e){return e!==i})),0===o.length&&(V((function(e){return j(j({},e),{},(0,l.Z)({},a.geoviewLayerId,!0))})),a.setOpacity(G[a.geoviewLayerId]/100)),0===s.length&&(V((function(e){return j(j({},e),{},(0,l.Z)({},a.geoviewLayerId,!1))})),a.setOpacity(0)),J((function(e){return j(j({},e),{},(0,l.Z)({},a.geoviewLayerId,s))})),void(a.setEntries&&a.setEntries(s));var r,a,i,o,s}})})]}),"simple"===(null===(a=t.drawingInfo)||void 0===a?void 0:a.renderer.type)&&(null===(i=t.drawingInfo)||void 0===i?void 0:i.renderer.symbol.imageData)&&(0,y.jsxs)("div",{className:te.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:"data:".concat(null===(o=t.drawingInfo)||void 0===o?void 0:o.renderer.symbol.contentType,";base64,").concat(null===(s=t.drawingInfo)||void 0===s?void 0:s.renderer.symbol.imageData)}),(null===(c=t.drawingInfo)||void 0===c?void 0:c.renderer.label)||t.name]}),"uniqueValue"===(null===(u=t.drawingInfo)||void 0===u?void 0:u.renderer.type)&&t.drawingInfo.renderer.uniqueValueInfos[0].symbol.imageData&&t.drawingInfo.renderer.uniqueValueInfos.map((function(e,t){return(0,y.jsxs)("div",{className:te.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:"data:".concat(e.symbol.contentType,";base64,").concat(e.symbol.imageData)}),e.label]},t)})),t.legend&&t.legend.map((function(e,n){return(0,y.jsxs)("div",{className:te.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:"data:".concat(e.contentType,";base64,").concat(e.imageData)}),e.label||t.layerName]},n)})),t.dataUrl&&(0,y.jsxs)("div",{className:te.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:t.dataUrl}),t.name]})]},n)}))]})]},e.geoviewLayerId)}))})};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=window;const N=function(e){var t=e.mapId,n=e.buttonPanel,r=S.cgpv,a=r.api,i=r.react,o=r.ui,s=i.useState,c=i.useEffect,l=s(!1),p=(0,d.Z)(l,2),f=p[0],v=p[1],g=s({}),m=(0,d.Z)(g,2),h=m[0],x=m[1],w=o.elements.Button,j=a.map(t).displayLanguage,L=(0,u.ZQJ)({en:{addLayer:"Add Layer"},fr:{addLayer:"Ajouter Couche"}}),I=o.makeStyles((function(){return{mainContainer:{display:"flex",flexDirection:"row"},addLayerButton:{width:50,minWidth:50,"& > div":{textAlign:"center"}}}}))();return c((function(){return x((function(){return E({},a.map(t).layer.geoviewLayers)})),a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){return x((function(){return E({},a.map(t).layer.geoviewLayers)}))}),t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,(function(){return x((function(){return E({},a.map(t).layer.geoviewLayers)}))}),t),a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,(function(){v(!1)}),t,n.buttonPanelId),function(){a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t),a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,t,n.buttonPanelId)}}),[a,n.buttonPanelId,t]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:I.mainContainer,children:(0,y.jsx)(w,{className:I.addLayerButton,tooltip:L[j].addLayer,tooltipPlacement:"right",variant:"contained",type:"icon",icon:'<i class="material-icons">add</i>',onClick:function(){return v((function(e){return!e}))}})}),f&&(0,y.jsx)(b,{mapId:t,setAddLayerVisible:v}),(0,y.jsx)("div",{style:{display:f?"none":"inherit"},children:(0,y.jsx)(O,{mapId:t,layers:h,displayLanguage:j})})]})},C=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Layers/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"reorderable":{"type":"boolean","default":true,"description":"Specifies if the items in the legend can be reordered."},"allowImport":{"type":"boolean","default":true,"description":"Specifies if the user-added layers are allowed."},"isOpen":{"type":"object","description":"Specifies whether the legend is opened by default on initial loading of the map for small, medium, and large viewports.","properties":{"large":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for large viewports."},"medium":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for medium viewports."},"small":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for small viewports."}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),Z=JSON.parse('{"reorderable":true,"allowImport":true,"isOpen":{"small":false,"medium":false,"large":false},"suportedLanguages":["en","fr"]}');function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var k=window,A=function(e){(0,o.Z)(n,e);var t=P(n);function n(e,a){var o;return(0,r.Z)(this,n),o=t.call(this,e,a),(0,l.Z)((0,i.Z)(o),"schema",(function(){return C})),(0,l.Z)((0,i.Z)(o),"defaultConfig",(function(){return(0,u.ZQJ)(Z)})),(0,l.Z)((0,i.Z)(o),"translations",(0,u.ZQJ)({en:{layersPanel:"Layers"},fr:{layersPanel:"Couches"}})),(0,l.Z)((0,i.Z)(o),"added",(function(){var e,t,n,r,a,i=o.pluginProps.mapId,s=k.cgpv,c=s.api,l=s.ui.elements.LayersOutlinedIcon,u=c.map(i).displayLanguage;a=null===(e=o.configObj)||void 0===e||null===(t=e.isOpen)||void 0===t?void 0:t.large;var d={id:"layersPanelButton",tooltip:o.translations[u].layersPanel,tooltipPlacement:"right",children:(0,y.jsx)(l,{}),visible:!0},p={title:o.translations[u].layersPanel,icon:'<i class="material-icons">layers</i>',width:200,status:a};o.buttonPanel=c.map(i).appBarButtons.createAppbarPanel(d,p,null),null===(n=o.buttonPanel)||void 0===n||null===(r=n.panel)||void 0===r||r.changeContent((0,y.jsx)(N,{buttonPanel:o.buttonPanel,mapId:i}))})),o.buttonPanel=null,o}return(0,a.Z)(n,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=k.cgpv.api;this.buttonPanel&&t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId)}}]),n}(u.Vw$);k.plugins=k.plugins||{},k.plugins["layers-panel"]=(0,u.RFZ)(A)}},e=>{var t;t=84385,e(e.s=t)}]);
//# sourceMappingURL=geoview-layers-panel.js.map