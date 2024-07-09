/*! Package:geoview-basemap-panel: 1.0.0 - "4284cb554723c68662c65f1c24ab55958dbb77b7" - 2024-07-09T16:40:56.108Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[300],{63245:(e,a,t)=>{var n=t(59682),r=t(41108),o=t(95947),i=t(89153),s=t(79778),p=t(74780),l=t(49278),d=t(67814),c=t(4253),m=t(32031),u=t(80180),b=t(1839),h=t(64417),f=t.n(h),g=t(2467),y=t(39462),v=t(25828),C=t(95729),P=t(97282);function w(e){var a=e.mapId,t=e.config,n=window.cgpv,r=n.api.maps[a],o=n.api,i=n.ui,s=n.react,p=i.elements,d=p.Select,c=p.Card,h=p.Box,w=s.useState,x=s.useEffect,j=function(e){return{basemapCard:{"& .MuiCard-root":{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"2px solid rgba(255,255,255,0.25)",borderRadius:"6px",boxShadow:"none",marginBottom:"16px",width:"300px",transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:"0px"},"&:hover":{border:"2px solid #FFFF00"},"&.active":{border:"2px solid #FFFFFF"}},"& .MuiCardHeader-root":{backgroundColor:"".concat(e.palette.geoViewColor.grey.dark[900]," !important"),color:e.palette.geoViewColor.grey.light[900],fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .basemapCardThumbnail":{position:"absolute",height:"100%",width:"100%",objectFit:"cover",top:0,left:0},"& .basemapCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.85),transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.palette.geoViewColor.primary.main,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.55)}}},"&.active":{borderColor:e.palette.geoViewColor.primary.light[200],"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:"transparent"}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}(i.useTheme()),B=w([]),A=(0,b.A)(B,2),I=A[0],k=A[1],S=w(""),T=(0,b.A)(S,2),N=T[0],L=T[1],M=w(t.canSwichProjection),O=(0,b.A)(M,1)[0],F=t.supportedProjections.map((function(e){return null==e?void 0:e.projectionCode}))||[],z=(0,g.HA)(),q=w(z),R=(0,b.A)(q,2),U=R[0],V=R[1],E=(0,y.t)();function $(e,a,t){for(var n=[],o=0;o<e.length;o++){var i,s,p,l,d,c=e[o];if("transport"===c)if(null!==(i=r.basemap.basemapsList[a].transport)&&void 0!==i&&i.url)n.push((null===(s=r.basemap.basemapsList[a].transport)||void 0===s?void 0:s.url).replace("{z}","8").replace("{y}",3978===a?"285":"91").replace("{x}",3978===a?"268":"74"));if("simple"===c)null!==(p=r.basemap.basemapsList[a].simple)&&void 0!==p&&p.url&&n.push(r.basemap.basemapsList[a].simple.url.replace("{z}","8").replace("{y}","285").replace("{x}","268"));if("shaded"===c)null!==(l=r.basemap.basemapsList[a].shaded)&&void 0!==l&&l.url&&n.push(r.basemap.basemapsList[a].shaded.url.replace("{z}","8").replace("{y}","285").replace("{x}","268"));if("label"===c)null!==(d=r.basemap.basemapsList[a].label)&&void 0!==d&&d.url&&n.push(r.basemap.basemapsList[a].label.url.replaceAll("xxxx","en"===t?"CBMT":"CBCT").replace("{z}","8").replace("{y}",3978===a?"285":"91").replace("{x}",3978===a?"268":"74"));"osm"===c&&n.push("https://tile.openstreetmap.org/0/0/0.png")}return n}function G(e){var a="",t="";return e.includes("osm")?a=(0,C.getLocalizedMessage)("basemapPanel.info.osm.name",E):e.includes("transport")?(a=(0,C.getLocalizedMessage)("basemapPanel.info.transport.name",E),t=(0,C.getLocalizedMessage)("basemapPanel.info.transport.description",E)):e.includes("simple")?a=(0,C.getLocalizedMessage)("basemapPanel.info.simple.name",E):e.includes("shaded")?(a=(0,C.getLocalizedMessage)("basemapPanel.info.shaded.name",E),t=(0,C.getLocalizedMessage)("basemapPanel.info.shaded.description",E)):e.includes("nogeom")&&(a=(0,C.getLocalizedMessage)("basemapPanel.info.nogeom.name",E)),e.includes("label")&&(a="".concat(a," ").concat((0,C.getLocalizedMessage)("basemapPanel.info.label.name",E))),{name:a,description:t}}var K=function(e){var a=I.find((function(a){return a.basemapId===e}));void 0!==a&&(r.basemap.setBasemap(a),L(e))},W=function(){var e=(0,u.A)(f().mark((function e(n){var r,i,s,p,d,c;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(0,l.NK)(t.supportedProjections.find((function(e){return e.projectionCode===n}))),i=!1,k([]),s=f().mark((function e(){var t,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.customBasemaps[p],(s=o.maps[a].basemap.createCustomBasemap(t,n))&&k((function(e){return[].concat((0,m.A)(e),[s])})),s&&0===p&&""===N&&(K(s.basemapId),i=!0);case 4:case"end":return e.stop()}}),e)})),p=0;case 5:if(!(p<r.customBasemaps.length)){e.next=10;break}return e.delegateYield(s(),"t0",7);case 7:p++,e.next=5;break;case 10:d=f().mark((function e(){var t,s,p,l,d,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.coreBasemaps[c],e.next=3,o.maps[a].basemap.createCoreBasemap(t,n);case 3:(s=e.sent)&&(p=G(s.type.split("-")),l=p.name,d=p.description,s.thumbnailUrl=$(s.type.split("-"),z,E),s.name=l,s.description=d,k((function(e){return[].concat((0,m.A)(e),[s])}))),u="".concat(t.shaded?"shaded":"").concat(t.id).concat(t.labeled?"label":""),s&&u===N&&!i&&(K(N),i=!0);case 7:case"end":return e.stop()}}),e)})),c=0;case 12:if(!(c<r.coreBasemaps.length)){e.next=17;break}return e.delegateYield(d(),"t1",14);case 14:c++,e.next=12;break;case 17:i||K(I[0]);case 18:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return x((function(){W(U).catch((function(e){v.vF.logPromiseFailed("createBasemapArray in useEffect in basemap-panel",e)}))}),[E]),(0,P.jsxs)(h,{sx:j.basemapCard,children:[O&&(0,P.jsx)(d,{fullWidth:!0,labelId:"projection-label",value:U,onChange:function(e){var a=e.target.value;K("nogeom"),V(a),W(a).then((function(){r.setProjection(a)})).catch((function(e){v.vF.logPromiseFailed("createBasemapArray in setSelectedProjection in basemap-panel",e)}))},label:"Projection",style:{display:t.canSwichProjection?"flex":"none",marginBottom:"8px"},inputLabel:{id:"projection-label"},menuItems:F.map((function(e){return{key:e,item:{value:e,children:"EPSG:".concat(e)}}})),variant:"standard"}),I.map((function(e){return(0,P.jsx)(c,{tabIndex:0,className:e.basemapId===N?"active":"",onClick:function(){return K(e.basemapId)},onKeyPress:function(){return K(e.basemapId)},title:e.name,contentCard:(0,P.jsxs)(P.Fragment,{children:["string"==typeof e.thumbnailUrl&&(0,P.jsx)(h,{component:"img",src:e.thumbnailUrl,alt:e.altText,className:"basemapCardThumbnail"}),Array.isArray(e.thumbnailUrl)&&e.thumbnailUrl.map((function(a,t){return(0,P.jsx)(h,{component:"img",src:a,alt:e.altText,className:"basemapCardThumbnail"},t)})),(0,P.jsx)(h,{className:e.basemapId!==N?"basemapCardThumbnailOverlay":""})]})},e.basemapId)}))]})}const x=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Basemap Panel Schema","type":"object","version":1,"comments":"Configuration for GeoView basemap panel package.","additionalProperties":false,"definitions":{"basemapNameNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The display name of the layer."},"basemapDescriptionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap description."},"thumbnailUrlNode":{"type":"object","properties":{"en":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"fr":{"type":"array","uniqueItems":true,"items":{"type":"string"}}},"description":"Basemap thumbnail urls."},"basemapLayerUrlNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The service endpoint of the basemap layer."},"basemapAttributionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap attribution text."},"basemapLayersNode":{"type":"object","properties":{"basemapId":{"type":"string","description":"the id of the basmap layer."},"url":{"$ref":"#/definitions/basemapLayerUrlNode"},"opacity":{"type":"number","description":"the opacity of this layer.","default":0}},"additionalItems":false,"required":["basemapId","url"]},"basemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id","enum":["transport","simple","shaded","osm","nogeom"]},"shaded":{"type":"boolean","description":"if a shaded layer should be included with this basemap.","default":false},"labeled":{"type":"boolean","description":"if labels should be enabled in this basemap.","default":false}},"additionalProperties":false,"required":["basemapId","shaded","labeled"]},"customBasemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id."},"name":{"$ref":"#/definitions/basemapNameNode"},"description":{"$ref":"#/definitions/basemapDescriptionNode"},"thumbnailUrl":{"$ref":"#/definitions/thumbnailUrlNode"},"layers":{"type":"array","description":"a list of basemap layers","items":{"$ref":"#/definitions/basemapLayersNode"},"minItems":1},"attribution":{"$ref":"#/definitions/basemapAttributionNode"},"zoomLevels":{"type":"object","description":"Zoom levels for the basemap","properties":{"min":{"type":"integer","minimum":0,"maximum":24,"default":0},"max":{"type":"integer","minimum":0,"maximum":24,"default":24}},"additionalProperties":false,"required":["min","max"]}},"additionalProperties":false,"required":["basemapId","name","description","layers"]}},"properties":{"isOpen":{"type":"boolean","description":"Specifies whether the basemap panel is initially open or closed","default":false},"canSwichProjection":{"type":"boolean","description":"Allow the user to switch projection from the basemap panel.","default":true},"supportedProjections":{"type":"array","items":{"type":"object","properties":{"projectionCode":{"type":"integer","enum":[3978,3857],"description":"Default projection to load on start."},"customBasemaps":{"type":"array","description":"A list of custom basemaps.","items":{"$ref":"#/definitions/customBasemap"},"minItems":0},"coreBasemaps":{"type":"array","description":"A list of basemaps available in the core to show in the panel.","items":{"$ref":"#/definitions/basemap"},"minItems":1}}},"minItems":1,"required":["coreBasemaps","customBasemaps"]},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["canSwichProjection","supportedProjections"]}'),j=JSON.parse('{"isOpen":false,"canSwichProjection":false,"supportedProjections":[{"projectionCode":3978,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]},{"projectionCode":3857,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]}]}');function B(e,a,t){return a=(0,i.A)(a),(0,o.A)(e,A()?Reflect.construct(a,t||[],(0,i.A)(e).constructor):a.apply(e,t))}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}var I=function(e){function a(){var e;(0,n.A)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e=B(this,a,[].concat(r)),(0,p.A)(e,"translations",(0,l.NK)({en:{basemapPanel:{title:"Basemaps",info:{transport:{name:"Transport",description:"The Canada Base Map - Transportation (CBMT). This web mapping service provides spatial reference context with an emphasis on transportation networks.\n                          It is designed especially for use as a background map in a web mapping application or geographic information system (GIS)."},simple:{name:"Simple"},shaded:{name:"Shaded relief",description:"The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada,\n                          is intended primarily for online mapping application users and developers"},osm:{name:"Open Street Maps"},nogeom:{name:"No geometry"},label:{name:"with labels"}}}},fr:{basemapPanel:{title:"Fond de carte",info:{transport:{name:"Transport",description:"Carte de base du Canada - Transport (CBCT). Ce service de cartographie Web offre un contexte de référence spatiale axé sur les réseaux de transport.\n                          Il est particulièrement conçu pour être utilisé comme fond de carte dans une application cartographique Web ou un système d'information géographique (SIG)."},simple:{name:"Simple"},shaded:{name:"Relief ombré",description:"Les services de cartographie Web de la carte de base du Canada - élévation (CBCE) du Secteur des sciences de la\n                          Terre de Ressources naturelles Canada sont destinés principalement aux utilisateurs et aux développeurs d'applications de cartographie en ligne."},osm:{name:"Carte - Open Street Maps"},nogeom:{name:"Pas de géométrie"},label:{name:"avec étiquettes"}}}}})),(0,p.A)(e,"onCreateContent",(function(){return(0,P.jsx)(w,{mapId:e.pluginProps.mapId,config:e.configObj||{}})})),e}return(0,s.A)(a,e),(0,r.A)(a,[{key:"schema",value:function(){return x}},{key:"defaultConfig",value:function(){return(0,l.NK)(j)}},{key:"onCreateButtonProps",value:function(){return{id:"basemap-panel",tooltip:"basemapPanel.title",tooltipPlacement:"right",children:(0,P.jsx)(c.A,{}),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"basemapPanel.title",icon:(0,P.jsx)(c.A,{}),width:350,status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onRemoved",value:function(){}}])}(d.i);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["basemap-panel"]=(0,l.KX)(I)},67814:(e,a,t)=>{t.d(a,{i:()=>c});var n=t(59682),r=t(41108),o=t(95947),i=t(89153),s=t(79778),p=t(74780);function l(e,a,t){return a=(0,i.A)(a),(0,o.A)(e,d()?Reflect.construct(a,t||[],(0,i.A)(e).constructor):a.apply(e,t))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}var c=function(e){function a(){var e;(0,n.A)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e=l(this,a,[].concat(r)),(0,p.A)(e,"buttonPanel",void 0),(0,p.A)(e,"buttonProps",void 0),(0,p.A)(e,"panelProps",void 0),e}return(0,s.A)(a,e),(0,r.A)(a,[{key:"onCreateButtonProps",value:function(){var e=window.cgpv.ui.elements.MapIcon;return{id:"somePluginButton",tooltip:"Some tooltip",tooltipPlacement:"right",children:this.react.createElement(e),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"Some title",icon:'<i class="material-icons">map</i>',width:"80vw",status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"Content for AppBar Plugin on map id ".concat(this.pluginProps.mapId," goes here..."))}},{key:"onAdd",value:function(){this.buttonProps=this.onCreateButtonProps(),this.panelProps=this.onCreateContentProps(),this.panelProps.content=this.onCreateContent(),this.buttonPanel=this.mapViewer().appBarApi.createAppbarPanel(this.buttonProps,this.panelProps,this.buttonProps.id)||void 0}},{key:"onRemove",value:function(){this.api&&this.buttonPanel&&this.mapViewer().appBarApi.removeAppbarPanel(this.buttonPanel.buttonPanelId,this.buttonProps.id)}}])}(t(79724).G)}},e=>{var a;a=63245,e(e.s=a)}]);
//# sourceMappingURL=geoview-basemap-panel.js.map