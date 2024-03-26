/*! Package:geoview-time-slider: 0.1.0 - "3b206d1b99f0d4b22d7f85de11412c6d5441289f" - 2024-03-26T21:01:37.984Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{52568:(e,t,i)=>{i.d(t,{b:()=>m});var n=i(80669),r=i(23133),o=i(82734),l=i(59290),a=i(17089),s=i(99317),c=i(73963),u=i(18755),d=i(78330);function p(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,f()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var m=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=p(this,t,[].concat(r)),(0,c.A)((0,a.A)(e),"value",void 0),(0,c.A)((0,a.A)(e),"footerProps",void 0),e}return(0,s.A)(t,e),(0,r.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBarApi.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){d.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}]),t}(u.G)},45093:(e,t,i)=>{var n=i(23133),r=i(80669),o=i(82734),l=i(59290),a=i(17089),s=i(99317),c=i(73963),u=i(15303),d=i(9613),p=i(52568),f=i(40048),m=i(41955),g=i(3761),h=i(44315),v=i(78330),y=i(98459),x=i(67201),A=i(91808),w=i(30227),j=i(26166),b=i(20027),S=i(32777),P=i(54279),D=i(80038),L=i(9028),T=i(18554),k=i(62423),O=i(17173),I=i(69983),C=i(80678);const F=["className","children","classes","IconComponent","input","inputProps","variant"],E=["root"],R=(0,C.jsx)(k.A,{}),V=j.forwardRef((function(e,t){const i=(0,O.A)({name:"MuiNativeSelect",props:e}),{className:n,children:r,classes:o={},IconComponent:l=T.A,input:a=R,inputProps:s}=i,c=(0,w.A)(i,F),u=(0,L.A)(),d=(0,D.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,S.A)({root:["root"]},I.w,t)})((0,A.A)({},i,{classes:o})),f=(0,w.A)(o,E);return(0,C.jsx)(j.Fragment,{children:j.cloneElement(a,(0,A.A)({inputComponent:P.Ay,inputProps:(0,A.A)({children:r,classes:f,IconComponent:l,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,b.A)(p.root,a.props.className,n)}))})}));V.muiName="Select";const M=V;var N=i(27994),z=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function B(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function H(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?B(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function G(e){var t=window.cgpv,i=e.config,n=e.layerPath,r=e.mapId,o=t.react,l=t.ui,a=o.useState,s=o.useRef,c=o.useEffect,u=l.elements,d=u.Grid,p=u.Slider,g=u.Typography,v=u.Checkbox,A=u.Tooltip,w=u.IconButton,j=u.LockIcon,b=u.LockOpenIcon,S=u.ArrowLeftIcon,P=u.PlayArrowIcon,D=u.PauseIcon,L=u.ArrowRightIcon,T=u.SwitchRightIcon,k=u.SwitchLeftIcon,O=(0,m.A)(),I=z(O),F=a(!1),E=(0,f.A)(F,2),R=E[0],V=E[1],B=s(),G=s(),U=s(),J=(0,h.Gg)(),Q=J.setTitle,q=J.setDefaultValue,K=J.setDescription,Y=J.setValues,W=J.setLocked,_=J.setReversed,X=J.setDelay,$=J.setFiltering,Z=(0,h.ky)()[n],ee=Z.title,te=Z.description,ie=Z.name,ne=Z.defaultValue,re=Z.discreteValues,oe=Z.range,le=Z.minAndMax,ae=Z.field,se=Z.fieldAlias,ce=Z.filtering,ue=Z.singleHandle,de=Z.values,pe=Z.delay,fe=Z.locked,me=Z.reversed;c((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));void 0===ee&&Q(n,(0,N.getLocalizedValue)(null==t?void 0:t.title,r)||""),void 0===te&&K(n,(0,N.getLocalizedValue)(null==t?void 0:t.description,r)||""),void 0===fe&&W(n,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===me&&_(n,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===ne&&q(n,(null==t?void 0:t.defaultValue)||"")}),[]),c((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?Y(n,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):oe.includes(null==t?void 0:t.defaultValue)?Y(n,[new Date(null==t?void 0:t.defaultValue).getTime()]):Y(n,[new Date(oe[0]).getTime()]))}),[i,n,oe,$,Y]);var ge,he=oe.map((function(e){return new Date(e).getTime()})),ve=le[1]-le[0],ye=new Date(le[1]).getDate()-new Date(le[0]).getDate(),xe=new Date(le[1]).getFullYear()-new Date(le[0]).getFullYear();0===ye&&ve<864e5?ge="day":0===xe&&(ge="year");var Ae=[];if(oe.length<4&&re){var we=(new Date(oe[oe.length-1]).getTime()-new Date(oe[0]).getTime())/4;Ae=[le[0],le[0]+we,le[0]+2*we,le[0]+3*we,le[1]]}else Ae=oe.length<6||ue?he:[le[0],new Date(oe[Math.round(oe.length/4)]).getTime(),new Date(oe[Math.round(oe.length/2)]).getTime(),new Date(oe[Math.round(3*oe.length/4)]).getTime(),le[1]];for(var je=[],be=0;be<Ae.length;be++)je.push({value:Ae[be],label:ge?"".concat("day"===ge?new Date(Ae[be]).toTimeString().split(" ")[0]:new Date(Ae[be]).toISOString().slice(5,10)):new Date(Ae[be]).toISOString().slice(0,10)});function Se(){if(ue&&!re){var e,t=he.indexOf(de[0]);e=he[t]===le[0]?he.length-1:t-1,Y(n,[he[e]])}else if(ue){var i=(le[1]-le[0])/20,r=de[0]-i<le[0]?le[1]:de[0]-i;Y(n,[r])}else{var o=(0,f.A)(de,2),l=o[0],a=o[1];if(!U.current){if(a-l>(le[1]-le[0])/5)return U.current=(le[1]-le[0])/5,void Y(n,[a-U.current,a]);U.current=a-l}if(fe&&me){if(l===le[0]&&(l=a),(l-=U.current)<le[0])l=(0,f.A)(le,1)[0]}else if(fe){if((a-=U.current)<l&&(a=l),a===l)a=(0,f.A)(le,2)[1]}else{if(a>G.current&&l===G.current?a=G.current:a-=U.current,a<=le[0])a=(0,f.A)(le,2)[1];if((l=a-U.current)<le[0])l=(0,f.A)(le,1)[0];l<G.current&&a>G.current&&(l=G.current)}Y(n,[l,a])}}function Pe(){if(ue&&!re){var e,t=he.indexOf(de[0]);e=he[t]===le[1]?0:t+1,Y(n,[he[e]])}else if(ue){var i=(le[1]-le[0])/20,r=de[0]+i>le[1]?le[0]:de[0]+i;Y(n,[r])}else{var o=(0,f.A)(de,2),l=o[0],a=o[1];if(!U.current){if(a-l>(le[1]-le[0])/5)return U.current=(le[1]-le[0])/5,void Y(n,[l,l+U.current]);U.current=a-l}if(fe&&me){if((l+=U.current)>=a)l=(0,f.A)(le,1)[0]}else if(fe){if(a===le[1]&&(a=l),(a+=U.current)>le[1])a=(0,f.A)(le,2)[1]}else{if(l<G.current&&a===G.current?l=G.current:l+=U.current,l>=le[1])l=(0,f.A)(le,1)[0];if((a=l+U.current)>le[1])a=(0,f.A)(le,2)[1];a>G.current&&l<G.current&&(a=G.current)}Y(n,[l,a])}}function De(){return me?fe?(0,N.getLocalizedMessage)(r,"timeSlider.slider.unlockRight"):(0,N.getLocalizedMessage)(r,"timeSlider.slider.lockRight"):fe?(0,N.getLocalizedMessage)(r,"timeSlider.slider.unlockLeft"):(0,N.getLocalizedMessage)(r,"timeSlider.slider.lockLeft")}return c((function(){R&&(B.current=me?window.setTimeout((function(){return Se()}),pe):window.setTimeout((function(){return Pe()}),pe))}),[de,ce,me,fe]),c((function(){R&&(me?Se():Pe())}),[R]),(0,C.jsx)(d,{children:(0,C.jsxs)("div",{style:I.rightPanelContainer,children:[(0,C.jsxs)(d,{container:!0,sx:I.rightPanelBtnHolder,children:[(0,C.jsx)(d,{item:!0,xs:9,children:(0,C.jsxs)(g,{component:"div",sx:H(H({},I.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(ee||ie),void 0!==ge&&" (".concat("day"===ge?new Date(ne).toLocaleDateString():new Date(ne).getFullYear(),")")]})}),(0,C.jsx)(d,{item:!0,xs:3,children:(0,C.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,C.jsx)(A,{title:ce?(0,N.getLocalizedMessage)(r,"timeSlider.slider.disableFilter"):(0,N.getLocalizedMessage)(r,"timeSlider.slider.enableFilter"),placement:"top",enterDelay:1e3,children:(0,C.jsx)(v,{checked:ce,onChange:function(e,t){return $(n,i=t),void(i||(clearInterval(B.current),V(!1)));var i}})})})})]}),(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,C.jsx)(p,{sliderId:n,mapId:r,style:{width:"80%",color:"primary"},min:le[0],max:le[1],value:de,valueLabelFormat:function(e){return function(e){return"day"===ge?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===ge?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}(e)},marks:je,step:re?.1:null,customOnChange:function(e){return function(e){clearTimeout(B.current),V(!1),U.current=void 0,Y(n,e)}(e)}},de[1]?de[1]+de[0]:de[0])})}),(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!ue&&(0,C.jsx)(w,{className:"style1","aria-label":De(),tooltip:De(),tooltipPlacement:"top",onClick:function(){return clearTimeout(B.current),void W(n,!fe)},children:fe?(0,C.jsx)(j,{}):(0,C.jsx)(b,{})}),(0,C.jsx)(w,{className:"style1","aria-label":(0,N.getLocalizedMessage)(r,"timeSlider.slider.back"),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:R||!ce,onClick:function(){return G.current=me?de[1]:de[0],void Se()},children:(0,C.jsx)(S,{})}),(0,C.jsx)(w,{className:"style1","aria-label":R?(0,N.getLocalizedMessage)(r,"timeSlider.slider.pauseAnimation"):(0,N.getLocalizedMessage)(r,"timeSlider.slider.playAnimation"),tooltip:R?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!ce,onClick:function(){return clearTimeout(B.current),G.current=me?de[1]:de[0],void V(!R)},children:R?(0,C.jsx)(D,{}):(0,C.jsx)(P,{})}),(0,C.jsx)(w,{className:"style1","aria-label":(0,N.getLocalizedMessage)(r,"timeSlider.slider.forward"),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:R||!ce,onClick:function(){return e=(0,f.A)(de,1),G.current=e[0],void Pe();var e},children:(0,C.jsx)(L,{})}),(0,C.jsx)(w,{className:"style1","aria-label":(0,N.getLocalizedMessage)(r,"timeSlider.slider.changeDirection"),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(B.current),_(n,!me),void(R&&(me?Se():Pe()))},children:me?(0,C.jsx)(T,{}):(0,C.jsx)(k,{})}),(0,C.jsxs)(y.A,{sx:{width:"150px"},children:[(0,C.jsx)(x.A,{variant:"standard",children:(0,N.getLocalizedMessage)(r,"timeSlider.slider.timeDelay")}),(0,C.jsxs)(M,{defaultValue:pe,inputProps:{name:"timeDelay",onChange:function(e){return function(e){X(n,e.target.value)}(e)}},children:[(0,C.jsx)("option",{value:500,children:"0.5s"}),(0,C.jsx)("option",{value:750,children:"0.75s"}),(0,C.jsx)("option",{value:1e3,children:"1.0s"}),(0,C.jsx)("option",{value:1500,children:"1.5s"}),(0,C.jsx)("option",{value:2e3,children:"2.0s"}),(0,C.jsx)("option",{value:3e3,children:"3.0s"}),(0,C.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),te&&(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:te})}),se&&(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(se," (").concat(ae,")")})})]})})}function U(e){var t=e.mapId,i=e.configObj,n=window.cgpv.react,r=n.useState,o=n.useCallback,l=n.useMemo,a=n.useEffect,s=(0,m.A)(),c=z(s),p=r(),y=(0,f.A)(p,2),x=y[0],A=y[1],w=(0,h.wE)(),j=(0,h.ky)(),b=o((function(e){v.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),A(e.layerPath)}),[]),S=l((function(){return v.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",j),w.map((function(e){return{layerPath:e,timeSliderLayerInfo:j[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,tooltip:e.timeSliderLayerInfo.name,layerStatus:"loaded",queryStatus:"processed"}}))}),[w,j]);return a((function(){v.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",S,x),x&&!S.map((function(e){return e.layerPath})).includes(x)&&A("")}),[S,x]),(0,C.jsxs)(g.PE,{selectedLayerPath:x,onLayerListClicked:b,layerList:S,children:[x&&(0,C.jsx)(G,{mapId:t,config:i,layerPath:x},x),!x&&(0,C.jsxs)(d.Paper,{sx:{padding:"2rem"},children:[(0,C.jsx)(d.Typography,{variant:"h3",gutterBottom:!0,sx:c.timeSliderInstructionsTitle,children:(0,u.Jv8)(t,"timeSlider.instructions")}),(0,C.jsx)(d.Typography,{component:"p",sx:c.timeSliderInstructionsBody,children:(0,u.Jv8)(t,"timeSlider.instructions")})]})]})}const J=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),Q=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function K(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Y(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,W()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function W(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(W=function(){return!!e})()}var _=function(e){function t(){var e;(0,r.A)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=Y(this,t,[].concat(n)),(0,c.A)((0,a.A)(e),"schema",(function(){return J})),(0,c.A)((0,a.A)(e),"defaultConfig",(function(){return(0,u.NKs)(Q)})),(0,c.A)((0,a.A)(e),"translations",(0,u.NKs)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"},instructions:"Time Slider Instructions"}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"},instructions:"Instructions Curseur Temporel"}}})),(0,c.A)((0,a.A)(e),"onCreateContentProps",(function(){return e.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:u.FHQ.dateUtilities.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var n=t.layerPaths[0],r=u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(n).layerTemporalDimension[n];u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(n).setTemporalDimension(n,K(K({},r),{},{default:t.defaultValue}))}})),{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,C.jsx)(d.TimeSliderIcon,{}),content:(0,C.jsx)(U,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,s.A)(t,e),(0,n.A)(t)}(p.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KXH)(_)}},e=>{var t;t=45093,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map