(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{9642:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{Ul:function(){return i},gY:function(){return r},gK:function(){return o}})},9826:function(e,n,t){"use strict";t.d(n,{J:function(){return F}});var r,o=t(9642),u=t(7294),i=t(133),a=t(8529);function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,u.useRef)(n);return(0,u.useEffect)((function(){r.current=n}),[n]),(0,u.useCallback)((function(e){for(var n,t=(0,o.Ul)(r.current);!(n=t()).done;){var u=n.value;null!=u&&("function"===typeof u?u(e):u.current=e)}}),[r])}function l(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var u=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!u||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&u}!function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(r||(r={}));var s,f,d,p,v=t(2506),m=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function g(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(m))}function b(e,n){var t=Array.isArray(e)?e:g(e),r=document.activeElement,o=function(){if(n&(s.First|s.Next))return d.Next;if(n&(s.Previous|s.Last))return d.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),u=function(){if(n&s.First)return 0;if(n&s.Previous)return Math.max(0,t.indexOf(r))-1;if(n&s.Next)return Math.max(0,t.indexOf(r))+1;if(n&s.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=n&s.NoScroll?{preventScroll:!0}:{},a=0,c=t.length,l=void 0;do{var p;if(a>=c||a+c<=0)return f.Error;var v=u+a;if(n&s.WrapAround)v=(v+c)%c;else{if(v<0)return f.Underflow;if(v>=c)return f.Overflow}null==(p=l=t[v])||p.focus(i),a+=o}while(l!==document.activeElement);return l.hasAttribute("tabindex")||l.setAttribute("tabindex","0"),f.Success}function h(e,n,t){var r=(0,u.useRef)(n);r.current=n,(0,u.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(s||(s={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(f||(f={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(d||(d={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(p||(p={}));var y,E,w,C=t(3980),S=t(852);function O(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(E||(E={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(w||(w={}));var P=((y={})[w.TogglePopover]=function(e){var n;return(0,o.gY)({},e,{popoverState:(0,i.E)(e.popoverState,(n={},n[E.Open]=E.Closed,n[E.Closed]=E.Open,n))})},y[w.ClosePopover]=function(e){return e.popoverState===E.Closed?e:(0,o.gY)({},e,{popoverState:E.Closed})},y[w.SetButton]=function(e,n){return e.button===n.button?e:(0,o.gY)({},e,{button:n.button})},y[w.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:(0,o.gY)({},e,{buttonId:n.buttonId})},y[w.SetPanel]=function(e,n){return e.panel===n.panel?e:(0,o.gY)({},e,{panel:n.panel})},y[w.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:(0,o.gY)({},e,{panelId:n.panelId})},y),k=(0,u.createContext)(null);function x(e){var n=(0,u.useContext)(k);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+F.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return n}k.displayName="PopoverContext";var L=(0,u.createContext)(null);function M(e){var n=(0,u.useContext)(L);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+F.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return n}L.displayName="PopoverAPIContext";var T=(0,u.createContext)(null);function A(){return(0,u.useContext)(T)}T.displayName="PopoverGroupContext";var I=(0,u.createContext)(null);function j(e,n){return(0,i.E)(n.type,P,e,n)}I.displayName="PopoverPanelContext";function F(e){var n,t="headlessui-popover-button-"+(0,v.M)(),r="headlessui-popover-panel-"+(0,v.M)(),o=(0,u.useReducer)(j,{popoverState:E.Closed,button:null,buttonId:t,panel:null,panelId:r}),c=o[0],l=c.popoverState,s=c.button,f=c.panel,d=o[1];(0,u.useEffect)((function(){return d({type:w.SetButtonId,buttonId:t})}),[t,d]),(0,u.useEffect)((function(){return d({type:w.SetPanelId,panelId:r})}),[r,d]);var g=(0,u.useMemo)((function(){return{buttonId:t,panelId:r,close:function(){return d({type:w.ClosePopover})}}}),[t,r,d]),b=A(),y=null==b?void 0:b.registerPopover,S=(0,u.useCallback)((function(){var e;return null!=(e=null==b?void 0:b.isFocusWithinPopoverGroup())?e:(null==s?void 0:s.contains(document.activeElement))||(null==f?void 0:f.contains(document.activeElement))}),[b,s,f]);(0,u.useEffect)((function(){return null==y?void 0:y(g)}),[y,g]),h("focus",(function(){l===E.Open&&(S()||s&&f&&d({type:w.ClosePopover}))}),!0),h("mousedown",(function(e){var n=e.target;l===E.Open&&((null==s?void 0:s.contains(n))||(null==f?void 0:f.contains(n))||(d({type:w.ClosePopover}),function(e,n){var t;return void 0===n&&(n=p.Strict),e!==document.body&&(0,i.E)(n,((t={})[p.Strict]=function(){return e.matches(m)},t[p.Loose]=function(){for(var n=e;null!==n;){if(n.matches(m))return!0;n=n.parentElement}return!1},t))}(n,p.Loose)||(e.preventDefault(),null==s||s.focus())))}));var O=(0,u.useCallback)((function(e){d({type:w.ClosePopover});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:s:s;null==n||n.focus()}),[d,s]),P=(0,u.useMemo)((function(){return{close:O}}),[O]),x=(0,u.useMemo)((function(){return{open:l===E.Open,close:O}}),[l,O]);return u.createElement(k.Provider,{value:o},u.createElement(L.Provider,{value:P},u.createElement(C.up,{value:(0,i.E)(l,(n={},n[E.Open]=C.ZM.Open,n[E.Closed]=C.ZM.Closed,n))},(0,a.sY)({props:e,slot:x,defaultTag:"div",name:"Popover"}))))}var N=(0,a.yV)((function e(n,t){var i=x([F.name,e.name].join(".")),f=i[0],d=i[1],p=(0,u.useRef)(null),v=A(),m=null==v?void 0:v.closeOthers,y=(0,u.useContext)(I),C=null!==y&&y===f.panelId,P=c(p,t,C?null:function(e){return d({type:w.SetButton,button:e})}),k=c(p,t),L=(0,u.useRef)(null),M=(0,u.useRef)("undefined"===typeof window?null:document.activeElement);h("focus",(function(){M.current=L.current,L.current=document.activeElement}),!0);var T=(0,u.useCallback)((function(e){var n;if(C){if(f.popoverState===E.Closed)return;switch(e.key){case r.Space:case r.Enter:e.preventDefault(),e.stopPropagation(),d({type:w.ClosePopover}),null==(n=f.button)||n.focus()}}else switch(e.key){case r.Space:case r.Enter:e.preventDefault(),e.stopPropagation(),f.popoverState===E.Closed&&(null==m||m(f.buttonId)),d({type:w.TogglePopover});break;case r.Escape:if(f.popoverState!==E.Open)return null==m?void 0:m(f.buttonId);if(!p.current)return;if(!p.current.contains(document.activeElement))return;d({type:w.ClosePopover});break;case r.Tab:if(f.popoverState!==E.Open)return;if(!f.panel)return;if(!f.button)return;if(e.shiftKey){var t;if(!M.current)return;if(null==(t=f.button)?void 0:t.contains(M.current))return;if(f.panel.contains(M.current))return;var o=g(),u=o.indexOf(M.current);if(o.indexOf(f.button)>u)return;e.preventDefault(),e.stopPropagation(),b(f.panel,s.Last)}else e.preventDefault(),e.stopPropagation(),b(f.panel,s.First)}}),[d,f.popoverState,f.buttonId,f.button,f.panel,p,m,C]),j=(0,u.useCallback)((function(e){var n;if(!C&&(e.key===r.Space&&e.preventDefault(),f.popoverState===E.Open&&f.panel&&f.button))switch(e.key){case r.Tab:if(!M.current)return;if(null==(n=f.button)?void 0:n.contains(M.current))return;if(f.panel.contains(M.current))return;var t=g(),o=t.indexOf(M.current);if(t.indexOf(f.button)>o)return;e.preventDefault(),e.stopPropagation(),b(f.panel,s.Last)}}),[f.popoverState,f.panel,f.button,C]),N=(0,u.useCallback)((function(e){var t,r;l(e.currentTarget)||(n.disabled||(C?(d({type:w.ClosePopover}),null==(t=f.button)||t.focus()):(f.popoverState===E.Closed&&(null==m||m(f.buttonId)),null==(r=f.button)||r.focus(),d({type:w.TogglePopover}))))}),[d,f.button,f.popoverState,f.buttonId,n.disabled,m,C]),R=(0,u.useMemo)((function(){return{open:f.popoverState===E.Open}}),[f]),H=function(e,n){var t=(0,u.useState)((function(){return O(e)})),r=t[0],o=t[1];return(0,S.e)((function(){o(O(e))}),[e.type,e.as]),(0,S.e)((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")}),[r,n]),r}(n,p),U=n,B=C?{ref:k,type:H,onKeyDown:T,onClick:N}:{ref:P,id:f.buttonId,type:H,"aria-expanded":n.disabled?void 0:f.popoverState===E.Open,"aria-controls":f.panel?f.panelId:void 0,onKeyDown:T,onKeyUp:j,onClick:N};return(0,a.sY)({props:(0,o.gY)({},U,B),slot:R,defaultTag:"button",name:"Popover.Button"})})),R=a.AN.RenderStrategy|a.AN.Static,H=(0,a.yV)((function e(n,t){var r=x([F.name,e.name].join(".")),i=r[0].popoverState,s=r[1],f=c(t),d="headlessui-popover-overlay-"+(0,v.M)(),p=(0,C.oJ)(),m=null!==p?p===C.ZM.Open:i===E.Open,g=(0,u.useCallback)((function(e){if(l(e.currentTarget))return e.preventDefault();s({type:w.ClosePopover})}),[s]),b=(0,u.useMemo)((function(){return{open:i===E.Open}}),[i]),h={ref:f,id:d,"aria-hidden":!0,onClick:g},y=n;return(0,a.sY)({props:(0,o.gY)({},y,h),slot:b,defaultTag:"div",features:R,visible:m,name:"Popover.Overlay"})})),U=a.AN.RenderStrategy|a.AN.Static,B=(0,a.yV)((function e(n,t){var i=n.focus,l=void 0!==i&&i,d=(0,o.gK)(n,["focus"]),p=x([F.name,e.name].join(".")),v=p[0],m=p[1],y=M([F.name,e.name].join(".")).close,S=(0,u.useRef)(null),O=c(S,t,(function(e){m({type:w.SetPanel,panel:e})})),P=(0,C.oJ)(),k=null!==P?P===C.ZM.Open:v.popoverState===E.Open,L=(0,u.useCallback)((function(e){var n;switch(e.key){case r.Escape:if(v.popoverState!==E.Open)return;if(!S.current)return;if(!S.current.contains(document.activeElement))return;e.preventDefault(),m({type:w.ClosePopover}),null==(n=v.button)||n.focus()}}),[v,S,m]);(0,u.useEffect)((function(){return function(){return m({type:w.SetPanel,panel:null})}}),[m]),(0,u.useEffect)((function(){var e;v.popoverState!==E.Closed||null!=(e=n.unmount)&&!e||m({type:w.SetPanel,panel:null})}),[v.popoverState,n.unmount,m]),(0,u.useEffect)((function(){if(l&&v.popoverState===E.Open&&S.current){var e=document.activeElement;S.current.contains(e)||b(S.current,s.First)}}),[l,S,v.popoverState]),h("keydown",(function(e){if(v.popoverState===E.Open&&S.current&&e.key===r.Tab&&document.activeElement&&S.current&&S.current.contains(document.activeElement)){e.preventDefault();var n,t=b(S.current,e.shiftKey?s.Previous:s.Next);if(t===f.Underflow)return null==(n=v.button)?void 0:n.focus();if(t===f.Overflow){if(!v.button)return;var o=g(),u=o.indexOf(v.button);b(o.splice(u+1).filter((function(e){var n;return!(null==(n=S.current)?void 0:n.contains(e))})),s.First)===f.Error&&b(document.body,s.First)}}})),h("focus",(function(){var e;l&&v.popoverState===E.Open&&S.current&&((null==(e=S.current)?void 0:e.contains(document.activeElement))||m({type:w.ClosePopover}))}),!0);var T=(0,u.useMemo)((function(){return{open:v.popoverState===E.Open,close:y}}),[v,y]),A={ref:O,id:v.panelId,onKeyDown:L};return u.createElement(I.Provider,{value:v.panelId},(0,a.sY)({props:(0,o.gY)({},d,A),slot:T,defaultTag:"div",features:U,visible:k,name:"Popover.Panel"}))}));F.Button=N,F.Overlay=H,F.Panel=B,F.Group=function(e){var n=(0,u.useRef)(null),t=(0,u.useState)([]),r=t[0],i=t[1],c=(0,u.useCallback)((function(e){i((function(n){var t=n.indexOf(e);if(-1!==t){var r=n.slice();return r.splice(t,1),r}return n}))}),[i]),l=(0,u.useCallback)((function(e){return i((function(n){return[].concat(n,[e])})),function(){return c(e)}}),[i,c]),s=(0,u.useCallback)((function(){var e,t=document.activeElement;return!!(null==(e=n.current)?void 0:e.contains(t))||r.some((function(e){var n,r;return(null==(n=document.getElementById(e.buttonId))?void 0:n.contains(t))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(t))}))}),[n,r]),f=(0,u.useCallback)((function(e){for(var n,t=(0,o.Ul)(r);!(n=t()).done;){var u=n.value;u.buttonId!==e&&u.close()}}),[r]),d=(0,u.useMemo)((function(){return{registerPopover:l,unregisterPopover:c,isFocusWithinPopoverGroup:s,closeOthers:f}}),[l,c,s,f]),p=(0,u.useMemo)((function(){return{}}),[]),v={ref:n},m=e;return u.createElement(T.Provider,{value:d},(0,a.sY)({props:(0,o.gY)({},m,v),slot:p,defaultTag:"div",name:"Popover.Group"}))}},6867:function(e,n,t){"use strict";t.d(n,{u:function(){return L}});var r=t(9642),o=t(7294),u=t(133),i=t(8529),a=t(852),c=t(5989),l=t(2506);var s,f=t(3980);function d(){var e=(0,o.useRef)(!0);return(0,o.useEffect)((function(){e.current=!1}),[]),e.current}function p(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=(0,r.Ul)(e.splice(0));!(n=t()).done;){var o=n.value;o()}}};return n}function v(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function m(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function g(e,n,t,r,o,u){var i=p(),a=void 0!==u?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(u):function(){};return m.apply(void 0,[e].concat(o)),v.apply(void 0,[e].concat(n,t)),i.nextFrame((function(){m.apply(void 0,[e].concat(t)),v.apply(void 0,[e].concat(r)),i.add(function(e,n){var t=p();if(!e)return t.dispose;var r=getComputedStyle(e),o=[r.transitionDuration,r.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),u=o[0],i=o[1];return 0!==u?t.setTimeout((function(){n(s.Finished)}),u+i):n(s.Finished),t.add((function(){return n(s.Cancelled)})),t.dispose}(e,(function(t){return m.apply(void 0,[e].concat(r,n)),v.apply(void 0,[e].concat(o)),a(t)})))})),i.add((function(){return m.apply(void 0,[e].concat(n,t,r,o))})),i.add((function(){return a(s.Cancelled)})),i.dispose}function b(e){return void 0===e&&(e=""),(0,o.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(s||(s={}));var h,y=(0,o.createContext)(null);y.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(h||(h={}));var E=(0,o.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter((function(e){return e.state===h.Visible})).length>0}function C(e){var n=(0,o.useRef)(e),t=(0,o.useRef)([]),r=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,o.useEffect)((function(){n.current=e}),[e]);var a=(0,o.useCallback)((function(e,o){var a;void 0===o&&(o=i.l4.Hidden);var c=t.current.findIndex((function(n){return n.id===e}));-1!==c&&((0,u.E)(o,((a={})[i.l4.Unmount]=function(){t.current.splice(c,1)},a[i.l4.Hidden]=function(){t.current[c].state=h.Hidden},a)),!w(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),c=(0,o.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==h.Visible&&(n.state=h.Visible):t.current.push({id:e,state:h.Visible}),function(){return a(e,i.l4.Unmount)}}),[t,a]);return(0,o.useMemo)((function(){return{children:t,register:c,unregister:a}}),[c,a,t])}function S(){}E.displayName="NestingContext";var O=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){for(var n,t={},o=(0,r.Ul)(O);!(n=o()).done;){var u,i=n.value;t[i]=null!=(u=e[i])?u:S}return t}var k=i.AN.RenderStrategy;function x(e){var n,t=e.beforeEnter,p=e.afterEnter,v=e.beforeLeave,m=e.afterLeave,S=e.enter,O=e.enterFrom,x=e.enterTo,L=e.entered,M=e.leave,T=e.leaveFrom,A=e.leaveTo,I=(0,r.gK)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),j=(0,o.useRef)(null),F=(0,o.useState)(h.Visible),N=F[0],R=F[1],H=I.unmount?i.l4.Unmount:i.l4.Hidden,U=function(){var e=(0,o.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),B=U.show,D=U.appear,Y=function(){var e=(0,o.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),V=Y.register,K=Y.unregister,W=d(),_=(0,l.M)(),q=(0,o.useRef)(!1),Z=C((function(){q.current||(R(h.Hidden),K(_),ne.current.afterLeave())}));(0,a.e)((function(){if(_)return V(_)}),[V,_]),(0,a.e)((function(){var e;H===i.l4.Hidden&&_&&(B&&N!==h.Visible?R(h.Visible):(0,u.E)(N,((e={})[h.Hidden]=function(){return K(_)},e[h.Visible]=function(){return V(_)},e)))}),[N,_,V,K,B,H]);var z=b(S),J=b(O),G=b(x),$=b(L),Q=b(M),X=b(T),ee=b(A),ne=function(e){var n=(0,o.useRef)(P(e));return(0,o.useEffect)((function(){n.current=P(e)}),[e]),n}({beforeEnter:t,afterEnter:p,beforeLeave:v,afterLeave:m}),te=(0,c.H)();(0,o.useEffect)((function(){if(te&&N===h.Visible&&null===j.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[j,N,te]);var re=W&&!D;(0,a.e)((function(){var e=j.current;if(e&&!re)return q.current=!0,B&&ne.current.beforeEnter(),B||ne.current.beforeLeave(),B?g(e,z,J,G,$,(function(e){q.current=!1,e===s.Finished&&ne.current.afterEnter()})):g(e,Q,X,ee,$,(function(e){q.current=!1,e===s.Finished&&(w(Z)||(R(h.Hidden),K(_),ne.current.afterLeave()))}))}),[ne,_,q,K,Z,j,re,B,z,J,G,Q,X,ee]);var oe={ref:j},ue=I;return o.createElement(E.Provider,{value:Z},o.createElement(f.up,{value:(0,u.E)(N,(n={},n[h.Visible]=f.ZM.Open,n[h.Hidden]=f.ZM.Closed,n))},(0,i.sY)({props:(0,r.gY)({},ue,oe),defaultTag:"div",features:k,visible:N===h.Visible,name:"Transition.Child"})))}function L(e){var n,t=e.show,a=e.appear,c=void 0!==a&&a,l=e.unmount,s=(0,r.gK)(e,["show","appear","unmount"]),p=(0,f.oJ)();void 0===t&&null!==p&&(t=(0,u.E)(p,((n={})[f.ZM.Open]=!0,n[f.ZM.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var v=(0,o.useState)(t?h.Visible:h.Hidden),m=v[0],g=v[1],b=C((function(){g(h.Hidden)})),S=d(),O=(0,o.useMemo)((function(){return{show:t,appear:c||!S}}),[t,c,S]);(0,o.useEffect)((function(){t?g(h.Visible):w(b)||g(h.Hidden)}),[t,b]);var P={unmount:l};return o.createElement(E.Provider,{value:b},o.createElement(y.Provider,{value:O},(0,i.sY)({props:(0,r.gY)({},P,{as:o.Fragment,children:o.createElement(x,Object.assign({},P,s))}),defaultTag:o.Fragment,features:k,visible:m===h.Visible,name:"Transition"})))}L.Child=function(e){var n=null!==(0,o.useContext)(y),t=null!==(0,f.oJ)();return!n&&t?o.createElement(L,Object.assign({},e)):o.createElement(x,Object.assign({},e))},L.Root=L},2506:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(7294),o=t(852),u=t(5989),i=0;function a(){return++i}function c(){var e=(0,u.H)(),n=(0,r.useState)(e?a:null),t=n[0],i=n[1];return(0,o.e)((function(){null===t&&i(a())}),[t]),null!=t?""+t:void 0}},852:function(e,n,t){"use strict";t.d(n,{e:function(){return o}});var r=t(7294),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},5989:function(e,n,t){"use strict";t.d(n,{H:function(){return u}});var r=t(7294),o={serverHandoffComplete:!1};function u(){var e=(0,r.useState)(o.serverHandoffComplete),n=e[0],t=e[1];return(0,r.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,r.useEffect)((function(){!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),n}},3980:function(e,n,t){"use strict";t.d(n,{up:function(){return a},ZM:function(){return r},oJ:function(){return i}});var r,o=t(7294),u=(0,o.createContext)(null);function i(){return(0,o.useContext)(u)}function a(e){var n=e.value,t=e.children;return o.createElement(u.Provider,{value:n},t)}u.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={}))},133:function(e,n,t){"use strict";function r(e,n){if(e in n){for(var t=n[e],o=arguments.length,u=new Array(o>2?o-2:0),i=2;i<o;i++)u[i-2]=arguments[i];return"function"===typeof t?t.apply(void 0,u):t}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}t.d(n,{E:function(){return r}})},8529:function(e,n,t){"use strict";t.d(n,{AN:function(){return r},l4:function(){return o},yV:function(){return s},sY:function(){return c}});var r,o,u=t(9642),i=t(7294),a=t(133);function c(e){var n=e.props,t=e.slot,i=e.defaultTag,c=e.features,s=e.visible,f=void 0===s||s,d=e.name;if(f)return l(n,t,i,d);var p=null!=c?c:r.None;if(p&r.Static){var v=n.static,m=void 0!==v&&v,g=(0,u.gK)(n,["static"]);if(m)return l(g,t,i,d)}if(p&r.RenderStrategy){var b,h=n.unmount,y=void 0===h||h,E=(0,u.gK)(n,["unmount"]),w=y?o.Unmount:o.Hidden;return(0,a.E)(w,((b={})[o.Unmount]=function(){return null},b[o.Hidden]=function(){return l((0,u.gY)({},E,{hidden:!0,style:{display:"none"}}),t,i,d)},b))}return l(n,t,i,d)}function l(e,n,t,r){var o;void 0===n&&(n={});var a=f(e,["unmount","static"]),c=a.as,l=void 0===c?t:c,s=a.children,d=a.refName,p=void 0===d?"ref":d,v=(0,u.gK)(a,["as","children","refName"]),m=void 0!==e.ref?((o={})[p]=e.ref,o):{},g="function"===typeof s?s(n):s;if(v.className&&"function"===typeof v.className&&(v.className=v.className(n)),l===i.Fragment&&Object.keys(v).length>0){if(!(0,i.isValidElement)(g)||Array.isArray(g)&&g.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneElement)(g,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),i=function(){var t,u=r.value;void 0!==e[u]&&void 0!==n[u]&&Object.assign(o,((t={})[u]=function(t){t.defaultPrevented||e[u](t),t.defaultPrevented||n[u](t)},t))},a=(0,u.Ul)(t);!(r=a()).done;)i();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(f(v,["ref"])),g.props,["onClick"]),m))}return(0,i.createElement)(l,Object.assign({},f(v,["ref"]),l!==i.Fragment&&m),g)}function s(e){var n;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function f(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=(0,u.Ul)(n);!(t=o()).done;){var i=t.value;i in r&&delete r[i]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={}))},6049:function(e,n,t){"use strict";t.d(n,{OdW:function(){return o},$Ow:function(){return u},h_8:function(){return i},Oqj:function(){return a},Rdq:function(){return c},o5A:function(){return l},b0D:function(){return s}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))};var u=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))};var i=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}))};var a=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var c=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"}))};var l=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"}))};var s=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}},3802:function(e,n,t){"use strict";t.d(n,{v4q:function(){return o}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},e),r.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}},2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,u=(o=t(7294))&&o.__esModule?o:{default:o},i=t(1063),a=t(4651),c=t(7426);var l={};function s(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=a.useRouter(),f=u.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),t=r(n,2),u=t[0],a=t[1];return{href:u,as:e.as?i.resolveHref(o,e.as):a||u}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,g=e.shallow,b=e.scroll,h=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var y=(n=u.default.Children.only(v))&&"object"===typeof n&&n.ref,E=c.useIntersection({rootMargin:"200px"}),w=r(E,2),C=w[0],S=w[1],O=u.default.useCallback((function(e){C(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,C]);u.default.useEffect((function(){var e=S&&t&&i.isLocalURL(d),n="undefined"!==typeof h?h:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,S,h,t,o]);var P={ref:O,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,u,a,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),n[o?"replace":"push"](t,r,{shallow:u,locale:c,scroll:a}))}(e,o,d,p,m,g,b,h)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof h?h:o&&o.locale,x=o&&o.isLocaleDomain&&i.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);P.href=x||i.addBasePath(i.addLocale(p,k,o&&o.defaultLocale))}return u.default.cloneElement(n,P)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,c=o.useRef(),l=o.useState(!1),s=r(l,2),f=s[0],d=s[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,u=r.observer,i=r.elements;return i.set(e,n),u.observe(e),function(){i.delete(e),u.unobserve(e),0===i.size&&(u.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!i&&!f){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),u=t(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}}]);