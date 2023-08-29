/*! Package:geoview-swiper: 0.1.0 - "6d0c2c3a0f59d1418d0153263b65653b31c84b72" - 2023-08-29T15:05:05.858Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[426],{627:(e,t,n)=>{var r=n(38020),o=n(67275),a=n(51608),i=n(10598),u=n(19667),l=n(12317),c=n(92824),s=n(27510);const f=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Swiper Config Schema","type":"object","version":1,"comments":"Configuration for GeoView swiper package.","additionalProperties":false,"properties":{"orientation":{"type":"string","enum":["vertical","horizontal"],"description":"Orientation of the swiper bar.","default":"vertical"},"keyboardOffset":{"type":"number","minimum":10,"maximum":100,"description":"The offset value when swiper is moved from the keyboard.","default":10},"layers":{"type":"array","items":{"type":"string"}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["orientation","layers","suportedLanguages"]}'),d=JSON.parse('{"orientation":"vertical","keyboardOffset":10,"layers":[],"suportedLanguages":["en","fr"]}');var p=n(61108),g=n(91365),y=n(72755),h=n.n(y),v=n(43195),m=n(53629),b=n.n(m),w=n(29541),S={layerSwipe:{position:"absolute",width:"100%",height:"100%"},handle:{backgroundColor:"rgba(50,50,50,0.75)",color:"#fff",width:"24px",height:"24px"},bar:{position:"absolute",backgroundColor:"rgba(50,50,50,0.75)",zIndex:30,boxSizing:"content-box",margin:0,padding:"0!important"},vertical:{width:"8px",height:"100%",cursor:"col-resize",top:"0px!important","& .handleContainer":{position:"relative",width:"58px",height:"24px",zIndex:1,top:"50%",left:"-25px","& .handleR":{transform:"rotate(90deg)",float:"right"},"& .handleL":{transform:"rotate(90deg)",float:"left"}}},horizontal:{width:"100%",height:"8px",cursor:"col-resize",left:"0px!important","& .handleContainer":{position:"relative",height:"58px",width:"24px",zIndex:1,left:"50%",top:"-24px","& .handleL":{verticalAlign:"top",marginBottom:"8px"}}}},O=window;function D(e){var t,n,r=e.mapId,o=e.config,a=e.translations,i=O.cgpv,u=i.api,l=i.ui,c=i.react,s=c.useEffect,f=c.useState,d=c.useRef,y=l.elements,m=y.Box,D=y.Tooltip,x=y.HandleIcon,P=u.map(r).displayLanguage,j=f(u.map(r).map),E=(0,g.Z)(j,1)[0],T=d((null==E?void 0:E.getSize())||[0,0]),C=T.current[0]/2,M=T.current[1]/2,N=f(o.layers),k=(0,g.Z)(N,1)[0],R=f(u.map(r).layer.geoviewLayers),_=(0,g.Z)(R,1)[0],I=f([]),A=(0,g.Z)(I,2),L=A[0],X=A[1],Y=f(0),B=(0,g.Z)(Y,2),Z=B[0],W=B[1],U=f(o.orientation),V=(0,g.Z)(U,1)[0],z=d(50),H=d();function G(e){var t=e,n=t.context,r=(T.current[0]+6)*z.current/100,o=(T.current[1]+6)*z.current/100,a=(0,v.getRenderPixel)(t,[0,0]),i="vertical"===V?(0,v.getRenderPixel)(t,[r,0]):(0,v.getRenderPixel)(t,[T.current[0],0]),u="vertical"===V?(0,v.getRenderPixel)(t,[0,T.current[1]]):(0,v.getRenderPixel)(t,[0,o]),l="vertical"===V?(0,v.getRenderPixel)(t,[r,T.current[1]]):(0,v.getRenderPixel)(t,[T.current[0],o]);n.save(),n.beginPath(),n.moveTo(a[0],a[1]),n.lineTo(u[0],u[1]),n.lineTo(l[0],l[1]),n.lineTo(i[0],i[1]),n.closePath(),n.clip()}function F(e){var t=e,n=t.context;n instanceof WebGLRenderingContext?"postrender"===t.type&&n.disable(n.SCISSOR_TEST):t.target.getClassName&&"ol-layer"!==t.target.getClassName()&&t.target.get("declutter")?setTimeout((function(){n.restore()}),0):n.restore()}var J=function(){var e=window.getComputedStyle(H.current),t=new DOMMatrixReadOnly(e.transform);return[t.m41,t.m42]},$=b()((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];T.current=E.getSize()||[0,0];var n="vertical"===V?-E.getTargetElement().getBoundingClientRect().left+e.clientX:-E.getTargetElement().getBoundingClientRect().top+e.clientY,r="vertical"===V?T.current[0]:T.current[1];if(t){var o="vertical"===V?J()[0]:J()[1];z.current=o/r*100}else z.current=(n-Z)/r*100;L.forEach((function(e){null!==e&&"function"==typeof e.getImageRatio&&(null==e||e.changed())})),E.render()}),100),q=function(e){var t=_["".concat(e)].gvLayers;X((function(e){return[].concat((0,p.Z)(e),[t])})),null==t||t.on(["precompose","prerender"],G),null==t||t.on(["postcompose","postrender"],F),null!==t&&"function"==typeof t.getImageRatio&&(null==t||t.changed())};s((function(){return k.forEach((function(e){if(void 0!==_["".concat(e)])q(e);else var t=e,n=setInterval((function(){void 0!==_["".concat(t)]&&(q(e),clearInterval(n))}),1e3)})),function(){k.forEach((function(e){var t=_["".concat(e)].gvLayers;null==t||t.un(["precompose","prerender"],G),null==t||t.un(["postcompose","postrender"],F),X([])}))}}),[_]);var K=b()((function(e){if(e.ctrlKey&&"ArrowLeft ArrowRight ArrowUp ArrowDown".includes(e.key)){var t=J(),n="ArrowLeft"===e.key||"ArrowUp"===e.key?-10:10;t[0]=t[0]<=10?10:t[0]>=T.current[0]-10?T.current[0]-10:t[0],t[1]=t[1]<=10?10:t[1]>=T.current[1]-10?T.current[1]-10:t[1];var r="vertical"===V?{clientX:t[0]+n,clientY:0}:{clientX:0,clientY:t[1]+n};H.current.style.transform="vertical"===V?"translate(".concat(t[0]+n,"px, 0px)"):"translate(0px, ".concat(t[1]+n,"px)"),setTimeout((function(){return $(r,!0)}),75)}}),100);return null==H||null===(t=H.current)||void 0===t||t.addEventListener("focusin",(function(){var e;document.getElementById(r).classList.contains("map-focus-trap")&&(null==H||null===(e=H.current)||void 0===e||e.addEventListener("keydown",K))})),null==H||null===(n=H.current)||void 0===n||n.addEventListener("focusout",(function(){var e;null==H||null===(e=H.current)||void 0===e||e.removeEventListener("keydown",K)})),(0,w.jsx)(m,{sx:S.layerSwipe,children:(0,w.jsx)(h(),{axis:"vertical"===V?"x":"y",bounds:"parent",defaultPosition:{x:"vertical"===V?C:0,y:"vertical"===V?0:M},onMouseDown:function(e){return function(e){var t="vertical"===V?-E.getTargetElement().getBoundingClientRect().left+e.clientX:-E.getTargetElement().getBoundingClientRect().top+e.clientY;T.current=E.getSize()||[0,0];var n=t-("vertical"===V?T.current[0]:T.current[1])*z.current/100;W(n)}(e)},onStop:function(e){$(e)},onDrag:function(e){$(e)},nodeRef:H,children:(0,w.jsx)(m,{sx:["vertical"===V?S.vertical:S.horizontal,S.bar],tabIndex:0,ref:H,children:(0,w.jsx)(D,{title:a[P].tooltip,children:(0,w.jsxs)(m,{className:"handleContainer",children:[(0,w.jsx)(x,{sx:S.handle,className:"handleL"}),(0,w.jsx)(x,{sx:S.handle,className:"handleR"})]})})})})})}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var P=window,j=function(e){(0,i.Z)(n,e);var t=x(n);function n(e,o){var i;return(0,r.Z)(this,n),i=t.call(this,e,o),(0,c.Z)((0,a.Z)(i),"schema",(function(){return f})),(0,c.Z)((0,a.Z)(i),"defaultConfig",(function(){return(0,s.ZQJ)(d)})),(0,c.Z)((0,a.Z)(i),"translations",(0,s.ZQJ)({en:{tooltip:"Drag to see underlying layer",menu:"Swiper"},fr:{tooltip:"Faites glisser pour voir les couches sous-jacentes",menu:"Balayage"}})),(0,c.Z)((0,a.Z)(i),"added",(function(){var e=(0,a.Z)(i),t=e.configObj,n=e.pluginProps.mapId,r=P.cgpv,o=r.react,u=r.createRoot,l=o.createElement;if(r&&(null==t?void 0:t.layers).length>0){var c,s=document.createElement("div");s.setAttribute("id","".concat(n,"-swiper")),null===(c=document.getElementById("toplink-".concat(n)))||void 0===c||c.after(s);var f=l(D,{mapId:n,config:t,translations:i.translations});u(document.getElementById("".concat(n,"-swiper"))).render(f)}})),i}return(0,o.Z)(n,[{key:"removed",value:function(){P.cgpv}}]),n}(s.Vw$);P.plugins=P.plugins||{},P.plugins.swiper=(0,s.RFZ)(j)},19593:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return f.default}}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n(93981)),a=g(n(87094)),i=g(n(72997)),u=g(n(65881)),l=n(56034),c=n(77213),s=n(57672),f=g(n(58541)),d=g(n(75458)),p=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function g(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=j(e);if(t){var a=j(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}(this,n)}}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(s,e);var t,n,r,a=x(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),E(P(t=a.call(this,e)),"onDragStart",(function(e,n){if((0,d.default)("Draggable: onDragStart: %j",n),!1===t.props.onStart(e,(0,c.createDraggableData)(P(t),n)))return!1;t.setState({dragging:!0,dragged:!0})})),E(P(t),"onDrag",(function(e,n){if(!t.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",n);var r=(0,c.createDraggableData)(P(t),n),o={x:r.x,y:r.y};if(t.props.bounds){var a=o.x,i=o.y;o.x+=t.state.slackX,o.y+=t.state.slackY;var u=w((0,c.getBoundPosition)(P(t),o.x,o.y),2),l=u[0],s=u[1];o.x=l,o.y=s,o.slackX=t.state.slackX+(a-o.x),o.slackY=t.state.slackY+(i-o.y),r.x=o.x,r.y=o.y,r.deltaX=o.x-t.state.x,r.deltaY=o.y-t.state.y}if(!1===t.props.onDrag(e,r))return!1;t.setState(o)})),E(P(t),"onDragStop",(function(e,n){if(!t.state.dragging)return!1;if(!1===t.props.onStop(e,(0,c.createDraggableData)(P(t),n)))return!1;(0,d.default)("Draggable: onDragStop: %j",n);var r={dragging:!1,slackX:0,slackY:0};if(Boolean(t.props.position)){var o=t.props.position,a=o.x,i=o.y;r.x=a,r.y=i}t.setState(r)})),t.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:b({},e.position),slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),t}return t=s,r=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.position,r=t.prevPropsPosition;return!n||r&&n.x===r.x&&n.y===r.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:n,prevPropsPosition:r}),{x:n.x,y:n.y,prevPropsPosition:b({},n)})}}],(n=[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var e,t,n;return null!==(e=null===(t=this.props)||void 0===t||null===(n=t.nodeRef)||void 0===n?void 0:n.current)&&void 0!==e?e:i.default.findDOMNode(this)}},{key:"render",value:function(){var e,t=this.props,n=(t.axis,t.bounds,t.children),r=t.defaultPosition,a=t.defaultClassName,i=t.defaultClassNameDragging,s=t.defaultClassNameDragged,d=t.position,g=t.positionOffset,y=(t.scale,v(t,p)),m={},w=null,S=!Boolean(d)||this.state.dragging,O=d||r,D={x:(0,c.canDragX)(this)&&S?this.state.x:O.x,y:(0,c.canDragY)(this)&&S?this.state.y:O.y};this.state.isElementSVG?w=(0,l.createSVGTransform)(D,g):m=(0,l.createCSSTransform)(D,g);var x=(0,u.default)(n.props.className||"",a,(E(e={},i,this.state.dragging),E(e,s,this.state.dragged),e));return o.createElement(f.default,h({},y,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.cloneElement(o.Children.only(n),{className:x,style:b(b({},n.props.style),m),transform:w}))}}])&&O(t.prototype,n),r&&O(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.Component);t.default=T,E(T,"displayName","Draggable"),E(T,"propTypes",b(b({},f.default.propTypes),{},{axis:a.default.oneOf(["both","x","y","none"]),bounds:a.default.oneOfType([a.default.shape({left:a.default.number,right:a.default.number,top:a.default.number,bottom:a.default.number}),a.default.string,a.default.oneOf([!1])]),defaultClassName:a.default.string,defaultClassNameDragging:a.default.string,defaultClassNameDragged:a.default.string,defaultPosition:a.default.shape({x:a.default.number,y:a.default.number}),positionOffset:a.default.shape({x:a.default.oneOfType([a.default.number,a.default.string]),y:a.default.oneOfType([a.default.number,a.default.string])}),position:a.default.shape({x:a.default.number,y:a.default.number}),className:s.dontSetMe,style:s.dontSetMe,transform:s.dontSetMe})),E(T,"defaultProps",b(b({},f.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))},58541:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n(93981)),a=f(n(87094)),i=f(n(72997)),u=n(56034),l=n(77213),c=n(57672),s=f(n(75458));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S={start:"touchstart",move:"touchmove",stop:"touchend"},O={start:"mousedown",move:"mousemove",stop:"mouseup"},D=O,x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(c,e);var t,n,r,a=v(c);function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return w(m(e=a.call.apply(a,[this].concat(n))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),w(m(e),"mounted",!1),w(m(e),"handleDragStart",(function(t){if(e.props.onMouseDown(t),!e.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;var n=e.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var r=n.ownerDocument;if(!(e.props.disabled||!(t.target instanceof r.defaultView.Node)||e.props.handle&&!(0,u.matchesSelectorAndParentsTo)(t.target,e.props.handle,n)||e.props.cancel&&(0,u.matchesSelectorAndParentsTo)(t.target,e.props.cancel,n))){"touchstart"===t.type&&t.preventDefault();var o=(0,u.getTouchIdentifier)(t);e.setState({touchIdentifier:o});var a=(0,l.getControlPosition)(t,o,m(e));if(null!=a){var i=a.x,c=a.y,f=(0,l.createCoreData)(m(e),i,c);(0,s.default)("DraggableCore: handleDragStart: %j",f),(0,s.default)("calling",e.props.onStart),!1!==e.props.onStart(t,f)&&!1!==e.mounted&&(e.props.enableUserSelectHack&&(0,u.addUserSelectStyles)(r),e.setState({dragging:!0,lastX:i,lastY:c}),(0,u.addEvent)(r,D.move,e.handleDrag),(0,u.addEvent)(r,D.stop,e.handleDragStop))}}})),w(m(e),"handleDrag",(function(t){var n=(0,l.getControlPosition)(t,e.state.touchIdentifier,m(e));if(null!=n){var r=n.x,o=n.y;if(Array.isArray(e.props.grid)){var a=r-e.state.lastX,i=o-e.state.lastY,u=p((0,l.snapToGrid)(e.props.grid,a,i),2);if(a=u[0],i=u[1],!a&&!i)return;r=e.state.lastX+a,o=e.state.lastY+i}var c=(0,l.createCoreData)(m(e),r,o);if((0,s.default)("DraggableCore: handleDrag: %j",c),!1!==e.props.onDrag(t,c)&&!1!==e.mounted)e.setState({lastX:r,lastY:o});else try{e.handleDragStop(new MouseEvent("mouseup"))}catch(t){var f=document.createEvent("MouseEvents");f.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.handleDragStop(f)}}})),w(m(e),"handleDragStop",(function(t){if(e.state.dragging){var n=(0,l.getControlPosition)(t,e.state.touchIdentifier,m(e));if(null!=n){var r=n.x,o=n.y;if(Array.isArray(e.props.grid)){var a=r-e.state.lastX||0,i=o-e.state.lastY||0,c=p((0,l.snapToGrid)(e.props.grid,a,i),2);a=c[0],i=c[1],r=e.state.lastX+a,o=e.state.lastY+i}var f=(0,l.createCoreData)(m(e),r,o);if(!1===e.props.onStop(t,f)||!1===e.mounted)return!1;var d=e.findDOMNode();d&&e.props.enableUserSelectHack&&(0,u.removeUserSelectStyles)(d.ownerDocument),(0,s.default)("DraggableCore: handleDragStop: %j",f),e.setState({dragging:!1,lastX:NaN,lastY:NaN}),d&&((0,s.default)("DraggableCore: Removing handlers"),(0,u.removeEvent)(d.ownerDocument,D.move,e.handleDrag),(0,u.removeEvent)(d.ownerDocument,D.stop,e.handleDragStop))}}})),w(m(e),"onMouseDown",(function(t){return D=O,e.handleDragStart(t)})),w(m(e),"onMouseUp",(function(t){return D=O,e.handleDragStop(t)})),w(m(e),"onTouchStart",(function(t){return D=S,e.handleDragStart(t)})),w(m(e),"onTouchEnd",(function(t){return D=S,e.handleDragStop(t)})),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.findDOMNode();e&&(0,u.addEvent)(e,S.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var e=this.findDOMNode();if(e){var t=e.ownerDocument;(0,u.removeEvent)(t,O.move,this.handleDrag),(0,u.removeEvent)(t,S.move,this.handleDrag),(0,u.removeEvent)(t,O.stop,this.handleDragStop),(0,u.removeEvent)(t,S.stop,this.handleDragStop),(0,u.removeEvent)(e,S.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,u.removeUserSelectStyles)(t)}}},{key:"findDOMNode",value:function(){var e,t,n;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(n=t.nodeRef)||void 0===n?void 0:n.current:i.default.findDOMNode(this)}},{key:"render",value:function(){return o.cloneElement(o.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.Component);t.default=x,w(x,"displayName","DraggableCore"),w(x,"propTypes",{allowAnyClick:a.default.bool,disabled:a.default.bool,enableUserSelectHack:a.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:a.default.arrayOf(a.default.number),handle:a.default.string,cancel:a.default.string,nodeRef:a.default.object,onStart:a.default.func,onDrag:a.default.func,onStop:a.default.func,onMouseDown:a.default.func,scale:a.default.number,className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe}),w(x,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},72755:(e,t,n)=>{var r=n(19593),o=r.default,a=r.DraggableCore;e.exports=o,e.exports.default=o,e.exports.DraggableCore=a},56034:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.addClassName=p,t.addEvent=function(e,t,n,r){if(!e)return;var o=l({capture:!0},r);e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},t.addUserSelectStyles=function(e){if(!e)return;var t=e.getElementById("react-draggable-style-el");t||((t=e.createElement("style")).type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t));e.body&&p(e.body,"react-draggable-transparent-selection")},t.createCSSTransform=function(e,t){var n=d(e,t,"px");return c({},(0,a.browserPrefixToKey)("transform",a.default),n)},t.createSVGTransform=function(e,t){return d(e,t,"")},t.getTouch=function(e,t){return e.targetTouches&&(0,o.findInArray)(e.targetTouches,(function(e){return t===e.identifier}))||e.changedTouches&&(0,o.findInArray)(e.changedTouches,(function(e){return t===e.identifier}))},t.getTouchIdentifier=function(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier},t.getTranslation=d,t.innerHeight=function(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,o.int)(n.paddingTop),t-=(0,o.int)(n.paddingBottom)},t.innerWidth=function(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,o.int)(n.paddingLeft),t-=(0,o.int)(n.paddingRight)},t.matchesSelector=f,t.matchesSelectorAndParentsTo=function(e,t,n){var r=e;do{if(f(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1},t.offsetXYFromParent=function(e,t,n){var r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),o=(e.clientX+t.scrollLeft-r.left)/n,a=(e.clientY+t.scrollTop-r.top)/n;return{x:o,y:a}},t.outerHeight=function(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,o.int)(n.borderTopWidth),t+=(0,o.int)(n.borderBottomWidth)},t.outerWidth=function(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,o.int)(n.borderLeftWidth),t+=(0,o.int)(n.borderRightWidth)},t.removeClassName=g,t.removeEvent=function(e,t,n,r){if(!e)return;var o=l({capture:!0},r);e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},t.removeUserSelectStyles=function(e){if(!e)return;try{if(e.body&&g(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(e){}};var o=n(57672),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=e[u]}o.default=e,n&&n.set(e,o);return o}(n(4124));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s="";function f(e,t){return s||(s=(0,o.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,o.isFunction)(e[t])}))),!!(0,o.isFunction)(e[s])&&e[s](t)}function d(e,t,n){var r=e.x,o=e.y,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){var i="".concat("string"==typeof t.x?t.x:t.x+n),u="".concat("string"==typeof t.y?t.y:t.y+n);a="translate(".concat(i,", ").concat(u,")")+a}return a}function p(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function g(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},4124:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0,t.getPrefix=r;var n=["Moz","Webkit","O","ms"];function r(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";var a=null===(e=window.document)||void 0===e||null===(t=e.documentElement)||void 0===t?void 0:t.style;if(!a)return"";if(r in a)return"";for(var i=0;i<n.length;i++)if(o(r,n[i])in a)return n[i];return""}function o(e,t){return t?"".concat(t).concat(function(e){for(var t="",n=!0,r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):"-"===e[r]?n=!0:t+=e[r];return t}(e)):e}var a=r();t.default=a},75458:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0}},77213:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.createCoreData=function(e,t,n){var o=e.state,i=!(0,r.isNum)(o.lastX),u=a(e);return i?{node:u,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:u,deltaX:t-o.lastX,deltaY:n-o.lastY,lastX:o.lastX,lastY:o.lastY,x:t,y:n}},t.createDraggableData=function(e,t){var n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}},t.getBoundPosition=function(e,t,n){if(!e.props.bounds)return[t,n];var i=e.props.bounds;i="string"==typeof i?i:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(i);var u=a(e);if("string"==typeof i){var l,c=u.ownerDocument,s=c.defaultView;if(!((l="parent"===i?u.parentNode:c.querySelector(i))instanceof s.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');var f=l,d=s.getComputedStyle(u),p=s.getComputedStyle(f);i={left:-u.offsetLeft+(0,r.int)(p.paddingLeft)+(0,r.int)(d.marginLeft),top:-u.offsetTop+(0,r.int)(p.paddingTop)+(0,r.int)(d.marginTop),right:(0,o.innerWidth)(f)-(0,o.outerWidth)(u)-u.offsetLeft+(0,r.int)(p.paddingRight)-(0,r.int)(d.marginRight),bottom:(0,o.innerHeight)(f)-(0,o.outerHeight)(u)-u.offsetTop+(0,r.int)(p.paddingBottom)-(0,r.int)(d.marginBottom)}}(0,r.isNum)(i.right)&&(t=Math.min(t,i.right));(0,r.isNum)(i.bottom)&&(n=Math.min(n,i.bottom));(0,r.isNum)(i.left)&&(t=Math.max(t,i.left));(0,r.isNum)(i.top)&&(n=Math.max(n,i.top));return[t,n]},t.getControlPosition=function(e,t,n){var r="number"==typeof t?(0,o.getTouch)(e,t):null;if("number"==typeof t&&!r)return null;var i=a(n),u=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(r||e,u,n.props.scale)},t.snapToGrid=function(e,t,n){var r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]};var r=n(57672),o=n(56034);function a(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},57672:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dontSetMe=function(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))},t.findInArray=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]},t.int=function(e){return parseInt(e,10)},t.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"==typeof e&&!isNaN(e)}}},e=>{var t;t=627,e(e.s=t)}]);
//# sourceMappingURL=geoview-swiper.js.map