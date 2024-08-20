/*! Package:geoview-swiper: 1.0.0 - "75ae27280d29cfb60e8564042507a5bcfe907bdc" - 2024-08-20T15:06:02.254Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[658],{55740:(e,t,n)=>{var r=n(36549),o=n(80085),a=n(95174),i=n(54111),s=n(42450),l=n(43021),u=n(24515),c=n(16896),d=n(17004),f=n(26666),p=n(64261),h=n(97282);function g(e,t,n){return t=(0,s.A)(t),(0,a.A)(e,m()?Reflect.construct(t,n||[],(0,s.A)(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}var v=function(e){function t(){return(0,r.A)(this,t),g(this,t,arguments)}return(0,l.A)(t,e),(0,o.A)(t,[{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"<div>Content for Map Plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>"))}},{key:"onAdd",value:function(){var e=document.createElement("div");e.setAttribute("id","".concat(this.pluginProps.mapId,"-").concat(this.pluginId));var t=document.getElementById("mapTargetElement-".concat(this.pluginProps.mapId));null==t||t.prepend(e);var n=this.onCreateContent();(0,d.H)(e).render((0,h.jsx)(p.w.Provider,{value:{mapId:this.pluginProps.mapId},children:n}))}},{key:"onRemove",value:function(){this.api}}])}(f.G),y=n(74501),b=n(6335);const w=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Swiper Config Schema","type":"object","version":1,"comments":"Configuration for GeoView swiper package.","additionalProperties":false,"properties":{"orientation":{"type":"string","enum":["vertical","horizontal"],"description":"Orientation of the swiper bar.","default":"vertical"},"keyboardOffset":{"type":"number","minimum":10,"maximum":100,"description":"The offset value when swiper is moved from the keyboard.","default":10},"layers":{"type":"array","items":{"type":"string"}},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["orientation","layers"]}'),S=JSON.parse('{"orientation":"vertical","keyboardOffset":10,"layers":[]}');var D=n(77156),x=n(74131),P=n(888),E=n(53732),O=n.n(E),T=n(24900),C=n.n(T),M=n(17849),N=n(44481),j=n.n(N),k=n(63083),A=n(72459),I=n(42360),L=n(42877),R={layerSwipe:{position:"absolute",width:"100%",height:"100%"},handle:{backgroundColor:"rgba(50,50,50,0.75)",color:"#fff",width:"24px",height:"24px"},bar:{position:"absolute",backgroundColor:"rgba(50,50,50,0.75)",zIndex:151,boxSizing:"content-box",margin:0,padding:"0!important"},vertical:{width:"8px",height:"100%",cursor:"col-resize",top:"0px!important","& .handleContainer":{position:"relative",width:"58px",height:"24px",zIndex:1,top:"50%",left:"-25px","& .handleR":{transform:"rotate(90deg)",float:"right"},"& .handleL":{transform:"rotate(90deg)",float:"left"}}},horizontal:{width:"100%",height:"8px",cursor:"col-resize",left:"0px!important","& .handleContainer":{position:"relative",height:"58px",width:"24px",zIndex:1,left:"50%",top:"-24px","& .handleL":{verticalAlign:"top",marginBottom:"8px"}}}};function W(e){var t,n=e.viewer,r=e.config,o=window.cgpv,a=o.ui,i=o.react,s=i.useEffect,l=i.useState,u=i.useRef,c=i.useCallback,d=a.elements,f=d.Box,p=d.Tooltip,g=d.HandleIcon,m=r.orientation,v=u((null===(t=n.map)||void 0===t?void 0:t.getSize())||[0,0]),y=u(50),w=u(),S=l([]),E=(0,P.A)(S,2),T=E[0],N=E[1],W=l(v.current[0]/2),X=(0,P.A)(W,2),Y=X[0],F=X[1],U=l(v.current[1]/2),_=(0,P.A)(U,2),V=_[0],B=_[1],G=(0,k.lT)(),H=(0,I.t)(),z=(0,L.wE)(),K=(0,L.Nt)(),Z=c((function(e){b.vF.logTraceUseCallback("GEOVIEW-SWIPER - prerender",e);var t=e,n=t.context,r=(v.current[0]+6)*y.current/100,o=(v.current[1]+6)*y.current/100,a=(0,M.getRenderPixel)(t,[0,0]),i="vertical"===m?(0,M.getRenderPixel)(t,[r,0]):(0,M.getRenderPixel)(t,[v.current[0],0]),s="vertical"===m?(0,M.getRenderPixel)(t,[0,v.current[1]]):(0,M.getRenderPixel)(t,[0,o]),l="vertical"===m?(0,M.getRenderPixel)(t,[r,v.current[1]]):(0,M.getRenderPixel)(t,[v.current[0],o]);n.save(),n.beginPath(),n.moveTo(a[0],a[1]),n.lineTo(s[0],s[1]),n.lineTo(l[0],l[1]),n.lineTo(i[0],i[1]),n.closePath(),n.clip()}),[m]);function q(e){var t=e,n=t.context;n instanceof WebGLRenderingContext?"postrender"===t.type&&n.disable(n.SCISSOR_TEST):t.target.getClassName&&"ol-layer"!==t.target.getClassName()&&t.target.get("declutter")?setTimeout((function(){n.restore()}),0):n.restore()}var J=function(){var e=window.getComputedStyle(w.current),t=new DOMMatrixReadOnly(e.transform);return[t.m41,t.m42]},$=j()((function(){if(G.length){v.current=n.map.getSize()||[0,0];var e="vertical"===m?v.current[0]:v.current[1],t="vertical"===m?J()[0]:J()[1];y.current=t/e*100,"vertical"===m&&F(t),"vertical"===m&&B(t),T.forEach((function(e){e.changed()}))}}),100);s((function(){b.vF.logTraceUseEffect("SWIPER - mapLoaded",K),setTimeout($,100)}),[K,$]);var Q=j()((function(e){if(e.ctrlKey&&"ArrowLeft ArrowRight ArrowUp ArrowDown".includes(e.key)&&G.length){var t=J(),n="ArrowLeft"===e.key||"ArrowUp"===e.key?-10:10;t[0]=t[0]<=10?10:t[0]>=v.current[0]-10?v.current[0]-10:t[0],t[1]=t[1]<=10?10:t[1]>=v.current[1]-10?v.current[1]-10:t[1],w.current.style.transform="vertical"===m?"translate(".concat(t[0]+n,"px, 0px)"):"translate(0px, ".concat(t[1]+n,"px)"),setTimeout((function(){return $()}),75)}}),100),ee=c(function(){var e=(0,x.A)(O().mark((function e(t){var r,o;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.layer.getOLLayerAsync(t);case 3:(r=e.sent)?(N((function(e){return[].concat((0,D.A)(e),[r])})),r.on(["precompose","prerender"],Z),r.on(["postcompose","postrender"],q),r.changed()):b.vF.logError("SWIPER - Failed to find layer to attach layer events",t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b.vF.logError("SWIPER - Failed to attach layer events",null===(o=n.layer)||void 0===o?void 0:o.geoviewLayers,t,e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[n,Z]);return s((function(){b.vF.logTraceUseEffect("GEOVIEW-SWIPER - layerPaths",G);var e=G.map((function(e){return z.filter((function(t){return t.includes(e)}))})).flat();return e.forEach((function(e){ee(e).catch((function(e){b.vF.logPromiseFailed("attachLayerEventsOnPath in useEffect in Swiper",e)}))})),function(){b.vF.logTraceUseEffectUnmount("GEOVIEW-SWIPER - layerPaths",G),e.forEach((function(e){try{var t=n.layer.getOLLayer(e);t?(t.un(["precompose","prerender"],Z),t.un(["postcompose","postrender"],q),t.changed()):b.vF.logError("SWIPER - Failed to find layer to un-attach layer events",e)}catch(t){b.vF.logError("SWIPER - Failed to un-attach layer events",e,t)}})),N([])}}),[n,G,ee,Z,z]),s((function(){b.vF.logTraceUseEffect("GEOVIEW-SWIPER - mount",n.mapId);var e=null==w?void 0:w.current,t=function(){document.getElementById(n.mapId).classList.contains("map-focus-trap")&&(null==e||e.addEventListener("keydown",Q))},r=function(){null==e||e.removeEventListener("keydown",Q)};return null==e||e.addEventListener("focusin",t),null==e||e.addEventListener("focusout",r),function(){b.vF.logTraceUseEffectUnmount("GEOVIEW-SWIPER - unmount",n.mapId),null==e||e.removeEventListener("focusout",r),null==e||e.removeEventListener("focusin",t)}}),[n.mapId,Q]),G.length>0?(0,h.jsx)(f,{sx:R.layerSwipe,children:(0,h.jsx)(C(),{axis:"vertical"===m?"x":"y",bounds:"parent",defaultPosition:{x:"vertical"===m?Y:0,y:"vertical"===m?0:V},onStop:function(){return $()},onDrag:function(){return $()},nodeRef:w,children:(0,h.jsx)(f,{sx:["vertical"===m?R.vertical:R.horizontal,R.bar],tabIndex:0,ref:w,children:(0,h.jsx)(p,{title:(0,A.getLocalizedMessage)("swiper.tooltip",H),children:(0,h.jsxs)(f,{className:"handleContainer",children:[(0,h.jsx)(g,{sx:R.handle,className:"handleL"}),(0,h.jsx)(g,{sx:R.handle,className:"handleR"})]})})})})}):(0,h.jsx)(f,{})}function X(e,t,n){return t=(0,s.A)(t),(0,a.A)(e,Y()?Reflect.construct(t,n||[],(0,s.A)(e).constructor):t.apply(e,n))}function Y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Y=function(){return!!e})()}var F=function(e){function t(){var e;(0,r.A)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=X(this,t,[].concat(o)),(0,u.A)(e,"translations",(0,c.NK)({en:{swiper:{tooltip:"Drag to see underlying layer",menu:"Swiper"}},fr:{swiper:{tooltip:"Faites glisser pour voir les couches sous-jacentes",menu:"Balayage"}}})),e}return(0,l.A)(t,e),(0,o.A)(t,[{key:"schema",value:function(){return w}},{key:"defaultConfig",value:function(){return(0,c.NK)(S)}},{key:"onAdd",value:function(){y.Z.setLayerPaths(this.pluginProps.mapId,this.configObj.layers),(0,i.A)((0,s.A)(t.prototype),"onAdd",this).call(this)}},{key:"onCreateContent",value:function(){return(0,h.jsx)(W,{viewer:this.pluginProps.viewer,config:this.configObj})}},{key:"activateForLayer",value:function(e){try{if(!this.mapViewer().layer.getOLLayer(e))throw new Error("Layer at path ".concat(e," not found."));y.Z.addLayerPath(this.pluginProps.mapId,e)}catch(e){b.vF.logError(e)}}},{key:"deActivateForLayer",value:function(e){y.Z.removeLayerPath(this.pluginProps.mapId,e)}},{key:"deActivateAll",value:function(){y.Z.removeAll(this.pluginProps.mapId)}}])}(v);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins.swiper=(0,c.KX)(F)},12663:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.r(t),n.d(t,{clsx:()=>o,default:()=>a});const a=o},72121:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(30538)),o=f(n(22300)),a=f(n(95491)),i=f(n(12663)),s=n(60715),l=n(44360),u=n(41918),c=f(n(45786)),d=f(n(60094));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function g(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class m extends r.Component{static getDerivedStateFromProps(e,t){let{position:n}=e,{prevPropsPosition:r}=t;return!n||r&&n.x===r.x&&n.y===r.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:n,prevPropsPosition:r}),{x:n.x,y:n.y,prevPropsPosition:{...n}})}constructor(e){super(e),g(this,"onDragStart",((e,t)=>{(0,d.default)("Draggable: onDragStart: %j",t);if(!1===this.props.onStart(e,(0,l.createDraggableData)(this,t)))return!1;this.setState({dragging:!0,dragged:!0})})),g(this,"onDrag",((e,t)=>{if(!this.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",t);const n=(0,l.createDraggableData)(this,t),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){const{x:e,y:t}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;const[o,a]=(0,l.getBoundPosition)(this,r.x,r.y);r.x=o,r.y=a,r.slackX=this.state.slackX+(e-r.x),r.slackY=this.state.slackY+(t-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(!1===this.props.onDrag(e,n))return!1;this.setState(r)})),g(this,"onDragStop",((e,t)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(e,(0,l.createDraggableData)(this,t)))return!1;(0,d.default)("Draggable: onDragStop: %j",t);const n={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:e,y:t}=this.props.position;n.x=e,n.y=t}this.setState(n)})),this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var e,t;return null!==(e=null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current)&&void 0!==e?e:a.default.findDOMNode(this)}render(){const{axis:e,bounds:t,children:n,defaultPosition:o,defaultClassName:a,defaultClassNameDragging:u,defaultClassNameDragged:d,position:f,positionOffset:p,scale:g,...m}=this.props;let v={},y=null;const b=!Boolean(f)||this.state.dragging,w=f||o,S={x:(0,l.canDragX)(this)&&b?this.state.x:w.x,y:(0,l.canDragY)(this)&&b?this.state.y:w.y};this.state.isElementSVG?y=(0,s.createSVGTransform)(S,p):v=(0,s.createCSSTransform)(S,p);const D=(0,i.default)(n.props.className||"",a,{[u]:this.state.dragging,[d]:this.state.dragged});return r.createElement(c.default,h({},m,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),r.cloneElement(r.Children.only(n),{className:D,style:{...n.props.style,...v},transform:y}))}}t.default=m,g(m,"displayName","Draggable"),g(m,"propTypes",{...c.default.propTypes,axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),g(m,"defaultProps",{...c.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},45786:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(30538)),o=c(n(22300)),a=c(n(95491)),i=n(60715),s=n(44360),l=n(41918),u=c(n(60094));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p={start:"touchstart",move:"touchmove",stop:"touchend"},h={start:"mousedown",move:"mousemove",stop:"mouseup"};let g=h;class m extends r.Component{constructor(){super(...arguments),f(this,"dragging",!1),f(this,"lastX",NaN),f(this,"lastY",NaN),f(this,"touchIdentifier",null),f(this,"mounted",!1),f(this,"handleDragStart",(e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1;const t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:n}=t;if(this.props.disabled||!(e.target instanceof n.defaultView.Node)||this.props.handle&&!(0,i.matchesSelectorAndParentsTo)(e.target,this.props.handle,t)||this.props.cancel&&(0,i.matchesSelectorAndParentsTo)(e.target,this.props.cancel,t))return;"touchstart"===e.type&&e.preventDefault();const r=(0,i.getTouchIdentifier)(e);this.touchIdentifier=r;const o=(0,s.getControlPosition)(e,r,this);if(null==o)return;const{x:a,y:l}=o,c=(0,s.createCoreData)(this,a,l);(0,u.default)("DraggableCore: handleDragStart: %j",c),(0,u.default)("calling",this.props.onStart);!1!==this.props.onStart(e,c)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,i.addUserSelectStyles)(n),this.dragging=!0,this.lastX=a,this.lastY=l,(0,i.addEvent)(n,g.move,this.handleDrag),(0,i.addEvent)(n,g.stop,this.handleDragStop))})),f(this,"handleDrag",(e=>{const t=(0,s.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX,t=r-this.lastY;if([e,t]=(0,s.snapToGrid)(this.props.grid,e,t),!e&&!t)return;n=this.lastX+e,r=this.lastY+t}const o=(0,s.createCoreData)(this,n,r);(0,u.default)("DraggableCore: handleDrag: %j",o);if(!1!==this.props.onDrag(e,o)&&!1!==this.mounted)this.lastX=n,this.lastY=r;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(e){const t=document.createEvent("MouseEvents");t.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(t)}})),f(this,"handleDragStop",(e=>{if(!this.dragging)return;const t=(0,s.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX||0,t=r-this.lastY||0;[e,t]=(0,s.snapToGrid)(this.props.grid,e,t),n=this.lastX+e,r=this.lastY+t}const o=(0,s.createCoreData)(this,n,r);if(!1===this.props.onStop(e,o)||!1===this.mounted)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(a.ownerDocument),(0,u.default)("DraggableCore: handleDragStop: %j",o),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,u.default)("DraggableCore: Removing handlers"),(0,i.removeEvent)(a.ownerDocument,g.move,this.handleDrag),(0,i.removeEvent)(a.ownerDocument,g.stop,this.handleDragStop))})),f(this,"onMouseDown",(e=>(g=h,this.handleDragStart(e)))),f(this,"onMouseUp",(e=>(g=h,this.handleDragStop(e)))),f(this,"onTouchStart",(e=>(g=p,this.handleDragStart(e)))),f(this,"onTouchEnd",(e=>(g=p,this.handleDragStop(e))))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,i.addEvent)(e,p.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:t}=e;(0,i.removeEvent)(t,h.move,this.handleDrag),(0,i.removeEvent)(t,p.move,this.handleDrag),(0,i.removeEvent)(t,h.stop,this.handleDragStop),(0,i.removeEvent)(t,p.stop,this.handleDragStop),(0,i.removeEvent)(e,p.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(t)}}findDOMNode(){var e,t;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current:a.default.findDOMNode(this)}render(){return r.cloneElement(r.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}t.default=m,f(m,"displayName","DraggableCore"),f(m,"propTypes",{allowAnyClick:o.default.bool,children:o.default.node.isRequired,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:o.default.arrayOf(o.default.number),handle:o.default.string,cancel:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),f(m,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},24900:(e,t,n)=>{const{default:r,DraggableCore:o}=n(72121);e.exports=r,e.exports.default=r,e.exports.DraggableCore=o},60715:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addClassName=u,t.addEvent=function(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},t.addUserSelectStyles=function(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t));e.body&&u(e.body,"react-draggable-transparent-selection")},t.createCSSTransform=function(e,t){const n=l(e,t,"px");return{[(0,o.browserPrefixToKey)("transform",o.default)]:n}},t.createSVGTransform=function(e,t){return l(e,t,"")},t.getTouch=function(e,t){return e.targetTouches&&(0,r.findInArray)(e.targetTouches,(e=>t===e.identifier))||e.changedTouches&&(0,r.findInArray)(e.changedTouches,(e=>t===e.identifier))},t.getTouchIdentifier=function(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier},t.getTranslation=l,t.innerHeight=function(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,r.int)(n.paddingTop),t-=(0,r.int)(n.paddingBottom),t},t.innerWidth=function(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,r.int)(n.paddingLeft),t-=(0,r.int)(n.paddingRight),t},t.matchesSelector=s,t.matchesSelectorAndParentsTo=function(e,t,n){let r=e;do{if(s(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1},t.offsetXYFromParent=function(e,t,n){const r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),o=(e.clientX+t.scrollLeft-r.left)/n,a=(e.clientY+t.scrollTop-r.top)/n;return{x:o,y:a}},t.outerHeight=function(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,r.int)(n.borderTopWidth),t+=(0,r.int)(n.borderBottomWidth),t},t.outerWidth=function(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,r.int)(n.borderLeftWidth),t+=(0,r.int)(n.borderRightWidth),t},t.removeClassName=c,t.removeEvent=function(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},t.removeUserSelectStyles=function(e){if(!e)return;try{if(e.body&&c(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(e){}};var r=n(41918),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(33748));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}let i="";function s(e,t){return i||(i=(0,r.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,r.isFunction)(e[t])}))),!!(0,r.isFunction)(e[i])&&e[i](t)}function l(e,t,n){let{x:r,y:o}=e,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){const e="".concat("string"==typeof t.x?t.x:t.x+n),r="".concat("string"==typeof t.y?t.y:t.y+n);a="translate(".concat(e,", ").concat(r,")")+a}return a}function u(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function c(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},33748:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0,t.getPrefix=r;const n=["Moz","Webkit","O","ms"];function r(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";const r=null===(e=window.document)||void 0===e||null===(e=e.documentElement)||void 0===e?void 0:e.style;if(!r)return"";if(t in r)return"";for(let e=0;e<n.length;e++)if(o(t,n[e])in r)return n[e];return""}function o(e,t){return t?"".concat(t).concat(function(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):"-"===e[r]?n=!0:t+=e[r];return t}(e)):e}t.default=r()},60094:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0}},44360:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.createCoreData=function(e,t,n){const o=!(0,r.isNum)(e.lastX),i=a(e);return o?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:i,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}},t.createDraggableData=function(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}},t.getBoundPosition=function(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:i}=e.props;i="string"==typeof i?i:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(i);const s=a(e);if("string"==typeof i){const{ownerDocument:e}=s,t=e.defaultView;let n;if(n="parent"===i?s.parentNode:e.querySelector(i),!(n instanceof t.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const a=n,l=t.getComputedStyle(s),u=t.getComputedStyle(a);i={left:-s.offsetLeft+(0,r.int)(u.paddingLeft)+(0,r.int)(l.marginLeft),top:-s.offsetTop+(0,r.int)(u.paddingTop)+(0,r.int)(l.marginTop),right:(0,o.innerWidth)(a)-(0,o.outerWidth)(s)-s.offsetLeft+(0,r.int)(u.paddingRight)-(0,r.int)(l.marginRight),bottom:(0,o.innerHeight)(a)-(0,o.outerHeight)(s)-s.offsetTop+(0,r.int)(u.paddingBottom)-(0,r.int)(l.marginBottom)}}(0,r.isNum)(i.right)&&(t=Math.min(t,i.right));(0,r.isNum)(i.bottom)&&(n=Math.min(n,i.bottom));(0,r.isNum)(i.left)&&(t=Math.max(t,i.left));(0,r.isNum)(i.top)&&(n=Math.max(n,i.top));return[t,n]},t.getControlPosition=function(e,t,n){const r="number"==typeof t?(0,o.getTouch)(e,t):null;if("number"==typeof t&&!r)return null;const i=a(n),s=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(r||e,s,n.props.scale)},t.snapToGrid=function(e,t,n){const r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]};var r=n(41918),o=n(60715);function a(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},41918:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dontSetMe=function(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))},t.findInArray=function(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]},t.int=function(e){return parseInt(e,10)},t.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"==typeof e&&!isNaN(e)}}},e=>{var t;t=55740,e(e.s=t)}]);
//# sourceMappingURL=geoview-swiper.js.map