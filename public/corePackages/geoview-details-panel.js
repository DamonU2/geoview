/*! Package:geoview-details-panel: 0.1.0 - "f2576af3cdbd6d751d132b3f0dc3770d13c249a0" - 2022-11-10T14:55:40.621Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[138],{61916:(e,t,n)=>{var a=n(7886),r=n(1116),i=n(71120),l=n(33756),s=n(81770),o=n(23078),c=n(3),u=n(43337),f=n(74290),d=n(47502),p=n(93780),m=n(90755),y=n(10835),x=n.n(y),b=n(26458),g=n(45202),h=window;const v=function(e){var t=e.layersData,n=e.selectFeature,a=e.selectLayer,r=e.getSymbol,i=e.clickPos,l=e.mapId,s=h.cgpv,o=s.api,c=s.ui,f=o.eventNames,d=c.makeStyles((function(){return{layersContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},layerItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3,border:"none",width:"100%"},layerParentText:{fontSize:"16px",fontWeight:"bold"},layerCountTextContainer:{display:"flex",alignItems:"center",width:"100%"},layerFeatureCount:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",minWidth:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)",marginRight:"10px",color:"black",fontSize:"16px",fontWeight:"bold"},layerItemText:{fontSize:"14px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}}}))(),p=function(e,t){var i=e.listOfLayerEntryConfig[t],l=i.layerData,s=i.displayField,o=i.fieldAliases,c=i.renderer;if(a(e.listOfLayerEntryConfig[t]),1===l.length){var f,d=null===(f=l[0])||void 0===f?void 0:f.attributes;n((0,u.ZQJ)({attributes:d,displayField:s,fieldAliases:o,symbol:r(c,d),numOfEntries:1}))}};return(0,g.jsx)("div",{className:d.layersContainer,children:Object.keys(t).map((function(e){var n=t[e];return(0,g.jsx)("div",{children:Object.keys(n.layers).map((function(e,t){var a=n.layers[e],s=a.layer,c=a.layerData,u=a.groupLayer;return(0,g.jsx)("div",{tabIndex:c.length>0&&!u?0:-1,onKeyDown:function(t){"Enter"===t.key&&(u||(t.preventDefault(),p(n,e)))},role:"button",children:u?(0,g.jsx)("div",{className:d.layerParentText,title:s.name,children:s.name}):(0,g.jsx)("button",{type:"button",tabIndex:-1,className:d.layerItem,disabled:0===c.length,onClick:c.length>0?function(){p(n,e),o.event.emit((0,b.us)(f.MARKER_ICON.EVENT_MARKER_ICON_SHOW,l,i,r(n.layers[e].renderer,c[0].attributes)))}:void 0,children:(0,g.jsxs)("div",{className:d.layerCountTextContainer,children:[(0,g.jsx)("span",{className:d.layerFeatureCount,children:c.length}),(0,g.jsx)("div",{className:d.layerItemText,title:s.name,children:s.name})]})})},t)}))},n.id)}))})};var I=window;const k=function(e){var t=e.selectedLayer,n=e.selectLayer,a=e.selectFeature,r=e.setPanel,i=e.getSymbol,l=e.buttonPanel,s=I.cgpv,o=s.react,c=s.ui,f=s.useTranslation,d=o.useEffect,p=t,m=p.displayField,y=p.fieldAliases,x=p.layerData,b=p.renderer,h=c.makeStyles((function(){return{featuresContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},featureItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3},featureIconTextContainer:{display:"flex",alignItems:"center",width:"100%"},featureItemIconContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",minWidth:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)"},featureItemIcon:{},featureItemText:{display:"inline-block",width:"100%",fontWeight:400,marginLeft:"10px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"16px"}}}))(),v=f().t,k=function(e,t){var i;null===(i=l.panel)||void 0===i||i.addActionButton("back",v("action_back"),'<i class="material-icons">keyboard_backspace</i>',(function(){1===x.length?r(!0,!1,!1):n()})),a((0,u.ZQJ)({attributes:e,displayField:m,fieldAliases:y,symbol:t,numOfEntries:x.length}))};return d((function(){var e;null===(e=l.panel)||void 0===e||e.addActionButton("back",v("action_back"),'<i class="material-icons">keyboard_backspace</i>',(function(){r(!0,!1,!1)}))}),[]),x.length>0?(0,g.jsx)("div",{className:h.featuresContainer,children:x.map((function(e,t){var n=null==e?void 0:e.attributes,a=i(b,n),r=n[m],l=r&&r.length>0?"".concat(r):"".concat(n.OBJECTID);return(0,g.jsx)("div",{tabIndex:0,onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k(n,a))},role:"button",children:(0,g.jsx)("div",{className:h.featureItem,onClick:function(){k(n,a)},role:"button",children:(0,g.jsxs)("div",{className:h.featureIconTextContainer,children:[(0,g.jsx)("div",{className:h.featureItemIconContainer,children:a.imageData?(0,g.jsx)("img",{className:h.featureItemIcon,src:"data:".concat(a.contentType,";base64, ").concat(a.imageData),alt:""}):b.symbol.legendImageUrl?(0,g.jsx)("img",{className:h.featureItemIcon,src:b.symbol.legendImageUrl,alt:""}):(0,g.jsx)("div",{className:h.featureItemIcon})}),(0,g.jsx)("span",{className:h.featureItemText,title:l,children:l})]})})},t)}))}):(0,g.jsx)("div",{className:h.featureItemText,children:v("nothing_found")})};var w=window;const j=function(e){var t=e.buttonPanel,n=e.selectedFeature,a=e.setPanel,r=w.cgpv,i=r.react,l=r.ui,s=r.useTranslation,o=l.elements.ArrowBackIcon,c=i.useEffect,u=n.displayField,f=n.fieldAliases,d=n.attributes,p=n.symbol,m=n.numOfEntries,y=l.makeStyles((function(){return{featureInfoContainer:{width:"100%"},featureInfoHeader:{display:"flex",alignItems:"center"},featureInfoHeaderIconContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",minWidth:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)"},featureInfoHeaderIcon:{},featureInfoHeaderText:{marginLeft:"10px",width:"100%",fontSize:18},featureInfoItemsContainer:{display:"flex",flexDirection:"column",marginTop:20},featureInfoItem:{display:"flex",flexDirection:"column",margin:"5px 0"},featureInfoItemKey:{fontWeight:"bold",fontSize:16},featureInfoItemValue:{fontSize:16,backgroundColor:"#ddd"}}}))(),x=s().t;return c((function(){var e;null===(e=t.panel)||void 0===e||e.addActionButton("back",x("action_back"),(0,g.jsx)(o,{}),(function(){1===m?a(!0,!1,!1):a(!1,!0,!1)}))}),[]),(0,g.jsxs)("div",{className:y.featureInfoContainer,children:[(0,g.jsxs)("div",{className:y.featureInfoHeader,children:[(0,g.jsx)("div",{className:y.featureInfoHeaderIconContainer,children:p.imageData?(0,g.jsx)("img",{className:y.featureInfoHeaderIcon,src:"data:".concat(p.contentType,";base64, ").concat(p.imageData),alt:""}):p.legendImageUrl?(0,g.jsx)("img",{className:y.featureInfoHeaderIcon,src:p.legendImageUrl,alt:""}):(0,g.jsx)("div",{className:y.featureInfoHeaderIcon})}),(0,g.jsx)("span",{className:y.featureInfoHeaderText,children:d[u]&&d[u].length>0?"".concat(d[u]):"".concat(d.OBJECTID)})]}),(0,g.jsx)("div",{className:y.featureInfoItemsContainer,children:Object.keys(d).map((function(e){var t=f[e],n=d[e];return t||(t=e),n.length>0&&"OBJECTID"!==t&&"SHAPE"!==t&&"SHAPE_Length"!==t&&"SHAPE_Area"!==t&&(0,g.jsxs)("div",{className:y.featureInfoItem,tabIndex:0,children:[(0,g.jsx)("span",{className:y.featureInfoItemKey,children:t}),(0,g.jsx)("span",{className:y.featureInfoItemValue,children:n})]},e)}))})]})};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=window;const P=function(e){var t=e.buttonPanel,n=e.mapId,a=C.cgpv,r=a.api,i=a.react,l=a.ui,s=a.useTranslation,o=r.eventNames,f=i.useState,y=i.useCallback,b=i.useEffect,h=f({}),I=(0,m.Z)(h,2),w=I[0],E=I[1],P=f({}),O=(0,m.Z)(P,2),S=O[0],_=O[1],A=f({}),R=(0,m.Z)(A,2),Z=R[0],D=R[1],T=f(!1),L=(0,m.Z)(T,2),F=L[0],H=L[1],B=f(!1),z=(0,m.Z)(B,2),V=z[0],K=z[1],W=f(!1),J=(0,m.Z)(W,2),M=J[0],G=J[1],U=f(),q=(0,m.Z)(U,2),Q=q[0],Y=q[1],X=l.makeStyles((function(){return{mainContainer:{display:"flex",flexDirection:"row"}}}))(),$=s().t,ee=r.map(n).map,te=y((function(e,t){var n=null;return e&&e.symbol?n=(0,u.ZQJ)(e.symbol):e&&e.uniqueValueInfos&&e.uniqueValueInfos.length>0&&(n=e.uniqueValueInfos.filter((function(n){return n.value===(t[e.field1]||t[e.field2]||t[e.field3])}))[0].symbol),n}),[]),ne=function(){var e=(0,p.Z)(x().mark((function e(t){var n,a;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"?f=json"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=y((function(e,a,i){var l;null===(l=t.panel)||void 0===l||l.removeActionButton("back"),H(e),K(a),G(i),r.event.emit((0,u.pnW)(o.PANEL.EVENT_PANEL_CHANGE_CONTENT,n),t.buttonPanelId)}),[t.panel,n]),re=y((function(){ae(!0,!1,!1)}),[ae]),ie=y((function(e){_(e||{}),ae(!1,!0,!1)}),[_,ae]),le=y((function(e){D((0,u.RFZ)(e)),ae(!1,!1,!0)}),[D,ae]),se=function(e,t,n,a){var r,i,l,s=t[e.mapId].layers;s["".concat(n.layerPath,"-").concat(n.name.replace(/\s+/g,"-").toLowerCase())]=(0,u.RFZ)({layer:n,groupLayer:a,layerData:[],displayField:n.displayField||n.displayFieldName||"",fieldAliases:(i=n.fields,l={},i&&i.forEach((function(e){var t=e.name,n=e.alias;l[t]=n})),l),renderer:null===(r=n.drawingInfo)||void 0===r?void 0:r.renderer}),t[e.mapId].layers=s},oe=y((function(e,t){var n=w[e].layers;n[t].layerData=[],E((function(t){return N(N({},t),{},(0,c.Z)({},e,N(N({},t[e]),{},{layers:n})))}))}),[w]),ce=y(function(){var e=(0,p.Z)(x().mark((function e(a){var i,l,s,f,p,m,y;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=[],s=x().mark((function e(t){var i,s,o,f,p,m,y,b,g,h,v,I,k,j,C,P,O,S,_;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=Object.keys(w)[t],s=w[i],o=s.layer,f=s.layers,p=s.type,m=0;case 4:if(!(m<Object.keys(f).length)){e.next=34;break}if(y=Object.keys(f)[m],f[y].groupLayer){e.next=31;break}if(oe(i,y),b=r.map(n).map,g=b.getSize(),h=b.getView().calculateExtent(),v={xmin:h[0],ymin:h[1],xmax:h[2],ymax:h[3],spatialReference:{wkid:4326}},p!==u.bsR.WMS){e.next=21;break}return I=(0,u.RFZ)(o),k=null,e.next=17,I.getFeatureInfo(a);case 17:(k=e.sent)&&k.length>0&&(l.push((0,u.RFZ)({layer:f[y],entries:k})),(j=f[y].layerData).push.apply(j,(0,d.Z)(k)),E((function(e){return N(N({},e),{},(0,c.Z)({},i,N(N({},e[i]),{},{layers:f})))}))),e.next=31;break;case 21:if(p!==u.bsR.ESRI_FEATURE&&p!==u.bsR.ESRI_DYNAMIC){e.next=31;break}return C=(0,u.RFZ)(o),P="".concat(C.mapService.options.url,"identify?")+"f=json&tolerance=7"+"&mapExtent=".concat(v.xmin,",").concat(v.ymin,",").concat(v.xmax,",").concat(v.ymax)+"&imageDisplay=".concat(g[0],",").concat(g[1],",96")+"&layers=visible:".concat(f[y].layer.id)+"&returnFieldName=true&sr=4326&returnGeometry=true"+"&geometryType=esriGeometryPoint&geometry=".concat(a[0],",").concat(a[1]),e.next=26,fetch(P);case 26:return O=e.sent,e.next=29,O.json();case 29:(S=e.sent)&&S.results&&S.results.length>0&&(l.push((0,u.RFZ)({layer:f[y],entries:S.results})),(_=f[y].layerData).push.apply(_,(0,d.Z)(S.results)),E((function(e){return N(N({},e),{},(0,c.Z)({},i,N(N({},e[i]),{},{layers:f})))})));case 31:m++,e.next=4;break;case 34:case"end":return e.stop()}}),e)})),f=0;case 3:if(!(f<Object.keys(w).length)){e.next=8;break}return e.delegateYield(s(f),"t0",5);case 5:f++,e.next=3;break;case 8:p=null,1===l.length?(ie(l[0].layer),l[0]&&(p=te(l[0].layer.renderer,l[0].entries[0].attributes)),1===l[0].entries.length&&le((0,u.ZQJ)({attributes:l[0].entries[0].attributes,displayField:l[0].layer.displayField,fieldAliases:l[0].layer.fieldAliases,symbol:te(l[0].layer.renderer,l[0].entries[0].attributes),numOfEntries:1}))):(l.length>0&&(p=te(l[0].layer.renderer,l[0].entries[0].attributes)),re()),Y(a),null===(i=t.panel)||void 0===i||i.open(),m=document.querySelectorAll("[data-id=".concat(t.buttonPanelId,"]"))[0],r.event.emit((0,u.usG)(o.MARKER_ICON.EVENT_MARKER_ICON_SHOW,n,a,p)),m&&(y=m.querySelectorAll(".cgpv-panel-close")[0])&&y.focus();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,t.panel,t.buttonPanelId,w,oe,ie,te,le,re]);b((function(){var e=r.map(n).layer.geoviewLayers,t={};Object.keys(e).forEach(function(){var n=(0,p.Z)(x().mark((function n(a){var r,i,l,s,o,c,f,d,m;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e[a],t[r.mapId]=r,!(0,u.N61)(r)){n.next=19;break}if(!(i=r.entries)){n.next=17;break}l=0;case 6:if(!(l<i.length)){n.next=17;break}return s=i[l],n.next=10,ne(r.mapService.options.url+s);case 10:o=n.sent,c=r.getLegendGraphic(),o.drawingInfo&&o.drawingInfo.renderer&&o.drawingInfo.renderer.symbol&&Object.defineProperties(o.drawingInfo.renderer.symbol,{legendImageUrl:{value:c}}),se(r,t,o,!1);case 14:l++,n.next=6;break;case 17:n.next=27;break;case 19:if(!(0,u.Xvt)(r)){n.next=26;break}return n.next=22,ne(r.url);case 22:f=n.sent,se(r,t,f,!1),n.next=27;break;case 26:(0,u.YDG)(r)&&(d=r.entries,m={},null==d||d.forEach((function(e){m[e]=e})),r.layer.metadata(function(){var e=(0,p.Z)(x().mark((function e(n,a){var i,l,s,o,c,u;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:if(!a.layers){e.next=25;break}i=0;case 4:if(!(i<a.layers.length)){e.next=25;break}if(!((l=a.layers[i]).id in m)){e.next=22;break}return e.next=9,ne(r.layer.options.url+l.id);case 9:if(s=e.sent,se(r,t,s,null!==l.subLayerIds&&void 0!==l.subLayerIds),!l.subLayerIds){e.next=22;break}o=0;case 13:if(!(o<l.subLayerIds.length)){e.next=22;break}return c=l.subLayerIds[o],e.next=17,ne(r.layer.options.url+c);case 17:u=e.sent,se(r,t,u,!1);case 19:o++,e.next=13;break;case 22:i++,e.next=4;break;case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 27:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),E(t)}),[]);var ue=function(e){e.originalEvent.shiftKey||ce(e.coordinate)};return b((function(){return ee.on("click",ue),r.event.on(o.DETAILS_PANEL.EVENT_DETAILS_PANEL_CROSSHAIR_ENTER,(function(e){(0,u.ERy)(e)&&e.handlerName===n&&ce(e.lnglat)}),n),function(){ee.un("click",ue),r.event.off(o.DETAILS_PANEL.EVENT_DETAILS_PANEL_CROSSHAIR_ENTER,n)}}),[ce,n,ee]),(0,g.jsxs)("div",{className:X.mainContainer,children:[!F&&!V&&!M&&(0,g.jsx)("div",{children:$("click_map")}),F&&(0,g.jsx)(v,{clickPos:Q,layersData:w,selectFeature:le,selectLayer:ie,getSymbol:te,mapId:n}),V&&(0,g.jsx)(k,{getSymbol:te,buttonPanel:t,selectLayer:ie,selectedLayer:S,selectFeature:le,setPanel:ae}),M&&(0,g.jsx)(j,{buttonPanel:t,selectedFeature:Z,setPanel:ae})]})};function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,o.Z)(e);if(t){var r=(0,o.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var S=window,_=function(e){(0,l.Z)(n,e);var t=O(n);function n(e,r){var l;return(0,a.Z)(this,n),l=t.call(this,e,r),(0,c.Z)((0,i.Z)(l),"translations",(0,u.ZQJ)({en:{detailsPanel:"Details",nothing_found:"Nothing found",click_map:"Choose a point on the map to start",action_back:"Back"},fr:{detailsPanel:"Détails",nothing_found:"Aucun résultat",click_map:"Choisissez un point sur la carte pour commencer",action_back:"Retour"}})),(0,c.Z)((0,i.Z)(l),"added",(function(){var e,t,n=l.pluginProps.mapId,a=S.cgpv,r=a.api,i=a.ui.elements.DetailsIcon,s=r.map(n).displayLanguage,o={id:"detailsPanelButton",tooltip:l.translations[s].detailsPanel,tooltipPlacement:"right",children:(0,g.jsx)(i,{}),visible:!0},c={title:l.translations[s].detailsPanel,icon:'<i class="material-icons">details</i>',width:300};l.buttonPanel=r.map(n).appBarButtons.createAppbarPanel(o,c,null),null===(e=l.buttonPanel)||void 0===e||null===(t=e.panel)||void 0===t||t.changeContent((0,g.jsx)(P,{buttonPanel:l.buttonPanel,mapId:n}))})),l.buttonPanel=null,l}return(0,r.Z)(n,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=S.cgpv.api;this.buttonPanel&&(t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId),t.event.emit((0,f.p)(t.eventNames.MARKER_ICON.EVENT_MARKER_ICON_HIDE,e)))}}]),n}(u.Vw$);S.plugins=S.plugins||{},S.plugins["details-panel"]=(0,u.RFZ)(_)}},e=>{var t;t=61916,e(e.s=t)}]);
//# sourceMappingURL=geoview-details-panel.js.map