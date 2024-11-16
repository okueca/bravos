/*
 Copyright (C) Federico Zivolo 2020
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */var e='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator;const t=function(){const t=['Edge','Trident','Firefox'];for(let o=0;o<t.length;o+=1)if(e&&0<=navigator.userAgent.indexOf(t[o]))return 1;return 0}();function o(e){let t=!1;return()=>{t||(t=!0,window.Promise.resolve().then(()=>{t=!1,e()}))}}function n(e){let o=!1;return()=>{o||(o=!0,setTimeout(()=>{o=!1,e()},t))}}const i=e&&window.Promise;var r=i?o:n;function p(e){return e&&'[object Function]'==={}.toString.call(e)}function d(e,t){if(1!==e.nodeType)return[];const o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function s(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function f(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}const{overflow:t,overflowX:o,overflowY:n}=d(e);return /(auto|scroll|overlay)/.test(t+n+o)?e:f(s(e))}function a(e){return e&&e.referenceNode?e.referenceNode:e}const l=e&&!!(window.MSInputMethodContext&&document.documentMode),m=e&&/MSIE 10/.test(navigator.userAgent);function h(e){return 11===e?l:10===e?m:l||m}function c(e){if(!e)return document.documentElement;const t=h(10)?document.body:null;let o=e.offsetParent||null;for(;o===t&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;const n=o&&o.nodeName;return n&&'BODY'!==n&&'HTML'!==n?-1!==['TH','TD','TABLE'].indexOf(o.nodeName)&&'static'===d(o,'position')?c(o):o:e?e.ownerDocument.documentElement:document.documentElement}function u(e){const{nodeName:t}=e;return'BODY'!==t&&('HTML'===t||c(e.firstElementChild)===e)}function g(e){return null===e.parentNode?e:g(e.parentNode)}function b(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;const o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);const{commonAncestorContainer:p}=r;if(e!==p&&t!==p||n.contains(i))return u(p)?p:c(p);const d=g(e);return d.host?b(d.host,t):b(e,g(t).host)}function w(e,t='top'){const o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){const t=e.ownerDocument.documentElement,n=e.ownerDocument.scrollingElement||t;return n[o]}return e[o]}function y(e,t,o=!1){const n=w(t,'top'),i=w(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function E(e,t){const o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e[`border${o}Width`])+parseFloat(e[`border${n}Width`])}function x(e,t,o,n){return Math.max(t[`offset${e}`],t[`scroll${e}`],o[`client${e}`],o[`offset${e}`],o[`scroll${e}`],h(10)?parseInt(o[`offset${e}`])+parseInt(n[`margin${'Height'===e?'Top':'Left'}`])+parseInt(n[`margin${'Height'===e?'Bottom':'Right'}`]):0)}function v(e){const t=e.body,o=e.documentElement,n=h(10)&&getComputedStyle(o);return{height:x('Height',t,o,n),width:x('Width',t,o,n)}}var O=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};function L(e){return O({},e,{right:e.left+e.width,bottom:e.top+e.height})}function S(e){let t={};try{if(h(10)){t=e.getBoundingClientRect();const o=w(e,'top'),n=w(e,'left');t.top+=o,t.left+=n,t.bottom+=o,t.right+=n}else t=e.getBoundingClientRect()}catch(t){}const o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},n='HTML'===e.nodeName?v(e.ownerDocument):{},i=n.width||e.clientWidth||o.width,r=n.height||e.clientHeight||o.height;let p=e.offsetWidth-i,s=e.offsetHeight-r;if(p||s){const t=d(e);p-=E(t,'x'),s-=E(t,'y'),o.width-=p,o.height-=s}return L(o)}function T(e,t,o=!1){var n=Math.max;const i=h(10),r='HTML'===t.nodeName,p=S(e),s=S(t),a=f(e),l=d(t),m=parseFloat(l.borderTopWidth),c=parseFloat(l.borderLeftWidth);o&&r&&(s.top=n(s.top,0),s.left=n(s.left,0));let u=L({top:p.top-s.top-m,left:p.left-s.left-c,width:p.width,height:p.height});if(u.marginTop=0,u.marginLeft=0,!i&&r){const e=parseFloat(l.marginTop),t=parseFloat(l.marginLeft);u.top-=m-e,u.bottom-=m-e,u.left-=c-t,u.right-=c-t,u.marginTop=e,u.marginLeft=t}return(i&&!o?t.contains(a):t===a&&'BODY'!==a.nodeName)&&(u=y(u,t)),u}function D(e,t=!1){var o=Math.max;const n=e.ownerDocument.documentElement,i=T(e,n),r=o(n.clientWidth,window.innerWidth||0),p=o(n.clientHeight,window.innerHeight||0),d=t?0:w(n),s=t?0:w(n,'left'),f={top:d-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:r,height:p};return L(f)}function C(e){const t=e.nodeName;if('BODY'===t||'HTML'===t)return!1;if('fixed'===d(e,'position'))return!0;const o=s(e);return!!o&&C(o)}function N(e){if(!e||!e.parentElement||h())return document.documentElement;let t=e.parentElement;for(;t&&'none'===d(t,'transform');)t=t.parentElement;return t||document.documentElement}function P(e,t,o,n,i=!1){let r={top:0,left:0};const p=i?N(e):b(e,a(t));if('viewport'===n)r=D(p,i);else{let o;'scrollParent'===n?(o=f(s(t)),'BODY'===o.nodeName&&(o=e.ownerDocument.documentElement)):'window'===n?o=e.ownerDocument.documentElement:o=n;const d=T(o,p,i);if('HTML'===o.nodeName&&!C(p)){const{height:t,width:o}=v(e.ownerDocument);r.top+=d.top-d.marginTop,r.bottom=t+d.top,r.left+=d.left-d.marginLeft,r.right=o+d.left}else r=d}o=o||0;const d='number'==typeof o;return r.left+=d?o:o.left||0,r.top+=d?o:o.top||0,r.right-=d?o:o.right||0,r.bottom-=d?o:o.bottom||0,r}function B({width:e,height:t}){return e*t}function H(e,t,o,n,i,r=0){if(-1===e.indexOf('auto'))return e;const p=P(o,n,r,i),d={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},s=Object.keys(d).map((e)=>O({key:e},d[e],{area:B(d[e])})).sort((e,t)=>t.area-e.area),f=s.filter(({width:e,height:t})=>e>=o.clientWidth&&t>=o.clientHeight),a=0<f.length?f[0].key:s[0].key,l=e.split('-')[1];return a+(l?`-${l}`:'')}function W(e,t,o,n=null){const i=n?N(t):b(t,a(o));return T(o,i,n)}function k(e){const t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function A(e){const t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,(e)=>t[e])}function M(e,t,o){o=o.split('-')[0];const n=k(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',d=r?'left':'top',s=r?'height':'width',f=r?'width':'height';return i[p]=t[p]+t[s]/2-n[s]/2,i[d]=o===d?t[d]-n[f]:t[A(d)],i}function F(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function I(e,t,o){if(Array.prototype.findIndex)return e.findIndex((e)=>e[t]===o);const n=F(e,(e)=>e[t]===o);return e.indexOf(n)}function R(e,t,o){const n=void 0===o?e:e.slice(0,I(e,'name',o));return n.forEach((e)=>{e['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');const o=e['function']||e.fn;e.enabled&&p(o)&&(t.offsets.popper=L(t.offsets.popper),t.offsets.reference=L(t.offsets.reference),t=o(t,e))}),t}function U(){if(this.state.isDestroyed)return;let e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=W(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=H(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=M(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=R(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}function Y(e,t){return e.some(({name:e,enabled:o})=>o&&e===t)}function V(e){const t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1);for(let n=0;n<t.length;n++){const i=t[n],r=i?`${i}${o}`:e;if('undefined'!=typeof document.body.style[r])return r}return null}function j(){return this.state.isDestroyed=!0,Y(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[V('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function K(e){const t=e.ownerDocument;return t?t.defaultView:window}function q(e,t,o,n){const i='BODY'===e.nodeName,r=i?e.ownerDocument.defaultView:e;r.addEventListener(t,o,{passive:!0}),i||q(f(r.parentNode),t,o,n),n.push(r)}function z(e,t,o,n){o.updateBound=n,K(e).addEventListener('resize',o.updateBound,{passive:!0});const i=f(e);return q(i,'scroll',o.updateBound,o.scrollParents),o.scrollElement=i,o.eventsEnabled=!0,o}function G(){this.state.eventsEnabled||(this.state=z(this.reference,this.options,this.state,this.scheduleUpdate))}function _(e,t){return K(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach((e)=>{e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function X(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=_(this.reference,this.state))}function J(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Q(e,t){Object.keys(t).forEach((o)=>{let n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&J(t[o])&&(n='px'),e.style[o]=t[o]+n})}function Z(e,t){Object.keys(t).forEach(function(o){const n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function $(e){return Q(e.instance.popper,e.styles),Z(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Q(e.arrowElement,e.arrowStyles),e}function ee(e,t,o,n,i){const r=W(i,t,e,o.positionFixed),p=H(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Q(t,{position:o.positionFixed?'fixed':'absolute'}),o}function te(e,t){const{popper:o,reference:n}=e.offsets,{round:i,floor:r}=Math,p=(e)=>e,d=i(n.width),s=i(o.width),f=-1!==['left','right'].indexOf(e.placement),a=-1!==e.placement.indexOf('-'),l=t?f||a||d%2==s%2?i:r:p,m=t?i:p;return{left:l(1==d%2&&1==s%2&&!a&&t?o.left-1:o.left),top:m(o.top),bottom:m(o.bottom),right:l(o.right)}}const oe=e&&/Firefox/i.test(navigator.userAgent);function ne(e,t){const{x:o,y:n}=t,{popper:i}=e.offsets,r=F(e.instance.modifiers,(e)=>'applyStyle'===e.name).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');const p=void 0===r?t.gpuAcceleration:r,d=c(e.instance.popper),s=S(d),f={position:i.position},a=te(e,2>window.devicePixelRatio||!oe),l='bottom'===o?'top':'bottom',m='right'===n?'left':'right',h=V('transform');let u,g;if(g='bottom'==l?'HTML'===d.nodeName?-d.clientHeight+a.bottom:-s.height+a.bottom:a.top,u='right'==m?'HTML'===d.nodeName?-d.clientWidth+a.right:-s.width+a.right:a.left,p&&h)f[h]=`translate3d(${u}px, ${g}px, 0)`,f[l]=0,f[m]=0,f.willChange='transform';else{const e='bottom'==l?-1:1,t='right'==m?-1:1;f[l]=g*e,f[m]=u*t,f.willChange=`${l}, ${m}`}const b={"x-placement":e.placement};return e.attributes=O({},b,e.attributes),e.styles=O({},f,e.styles),e.arrowStyles=O({},e.offsets.arrow,e.arrowStyles),e}function ie(e,t,o){const n=F(e,({name:e})=>e===t),i=!!n&&e.some((e)=>e.name===o&&e.enabled&&e.order<n.order);if(!i){const e=`\`${t}\``,n=`\`${o}\``;console.warn(`${n} modifier is required by ${e} modifier in order to work, be sure to include it before ${e}!`)}return i}function re(e,t){if(!ie(e.instance.modifiers,'arrow','keepTogether'))return e;let o=t.element;if('string'==typeof o){if(o=e.instance.popper.querySelector(o),!o)return e;}else if(!e.instance.popper.contains(o))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;const n=e.placement.split('-')[0],{popper:i,reference:r}=e.offsets,p=-1!==['left','right'].indexOf(n),s=p?'height':'width',f=p?'Top':'Left',a=f.toLowerCase(),l=p?'left':'top',m=p?'bottom':'right',h=k(o)[s];r[m]-h<i[a]&&(e.offsets.popper[a]-=i[a]-(r[m]-h)),r[a]+h>i[m]&&(e.offsets.popper[a]+=r[a]+h-i[m]),e.offsets.popper=L(e.offsets.popper);const c=r[a]+r[s]/2-h/2,u=d(e.instance.popper),g=parseFloat(u[`margin${f}`]),b=parseFloat(u[`border${f}Width`]);let w=c-e.offsets.popper[a]-g-b;return w=Math.max(Math.min(i[s]-h,w),0),e.arrowElement=o,e.offsets.arrow={[a]:Math.round(w),[l]:''},e}function pe(e){if('end'===e)return'start';return'start'===e?'end':e}var de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'];const se=de.slice(3);function fe(e,t=!1){const o=se.indexOf(e),n=se.slice(o+1).concat(se.slice(0,o));return t?n.reverse():n}const ae={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'};function le(e,t){if(Y(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;const o=P(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed);let n=e.placement.split('-')[0],i=A(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ae.FLIP:p=[n,i];break;case ae.CLOCKWISE:p=fe(n);break;case ae.COUNTERCLOCKWISE:p=fe(n,!0);break;default:p=t.behavior;}return p.forEach((d,s)=>{if(n!==d||p.length===s+1)return e;n=e.placement.split('-')[0],i=A(n);const f=e.offsets.popper,a=e.offsets.reference,l=Math.floor,m='left'===n&&l(f.right)>l(a.left)||'right'===n&&l(f.left)<l(a.right)||'top'===n&&l(f.bottom)>l(a.top)||'bottom'===n&&l(f.top)<l(a.bottom),h=l(f.left)<l(o.left),c=l(f.right)>l(o.right),u=l(f.top)<l(o.top),g=l(f.bottom)>l(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&u||'bottom'===n&&g,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&u||!w&&'end'===r&&g),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&g||!w&&'end'===r&&u),x=y||E;(m||b||x)&&(e.flipped=!0,(m||b)&&(n=p[s+1]),x&&(r=pe(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=O({},e.offsets.popper,M(e.instance.popper,e.offsets.reference,e.placement)),e=R(e.instance.modifiers,e,'flip'))}),e}function me(e){const{popper:t,reference:o}=e.offsets,n=e.placement.split('-')[0],i=Math.floor,r=-1!==['top','bottom'].indexOf(n),p=r?'right':'bottom',d=r?'left':'top',s=r?'width':'height';return t[p]<i(o[d])&&(e.offsets.popper[d]=i(o[d])-t[s]),t[d]>i(o[p])&&(e.offsets.popper[d]=i(o[p])),e}function he(e,t,o,n){var i=Math.max;const r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),p=+r[1],d=r[2];if(!p)return e;if(0===d.indexOf('%')){let e;switch(d){case'%p':e=o;break;case'%':case'%r':default:e=n;}const i=L(e);return i[t]/100*p}if('vh'===d||'vw'===d){let e;return e='vh'===d?i(document.documentElement.clientHeight,window.innerHeight||0):i(document.documentElement.clientWidth,window.innerWidth||0),e/100*p}return p}function ce(e,t,o,n){const i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map((e)=>e.trim()),d=p.indexOf(F(p,(e)=>-1!==e.search(/,|\s/)));p[d]&&-1===p[d].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');const s=/\s*,\s*|\s+/;let f=-1===d?[p]:[p.slice(0,d).concat([p[d].split(s)[0]]),[p[d].split(s)[1]].concat(p.slice(d+1))];return f=f.map((e,n)=>{const i=(1===n?!r:r)?'height':'width';let p=!1;return e.reduce((e,t)=>''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t),[]).map((e)=>he(e,i,t,o))}),f.forEach((e,t)=>{e.forEach((o,n)=>{J(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function ue(e,{offset:t}){const{placement:o,offsets:{popper:n,reference:i}}=e,r=o.split('-')[0];let p;return p=J(+t)?[+t,0]:ce(t,n,i,r),'left'===r?(n.top+=p[0],n.left-=p[1]):'right'===r?(n.top+=p[0],n.left+=p[1]):'top'===r?(n.left+=p[0],n.top-=p[1]):'bottom'===r&&(n.left+=p[0],n.top+=p[1]),e.popper=n,e}function ge(e,t){let o=t.boundariesElement||c(e.instance.popper);e.instance.reference===o&&(o=c(o));const n=V('transform'),i=e.instance.popper.style,{top:r,left:p,[n]:d}=i;i.top='',i.left='',i[n]='';const s=P(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=p,i[n]=d,t.boundaries=s;const f=t.priority;let a=e.offsets.popper;const l={primary(e){let o=a[e];return a[e]<s[e]&&!t.escapeWithReference&&(o=Math.max(a[e],s[e])),{[e]:o}},secondary(e){const o='right'===e?'left':'top';let n=a[o];return a[e]>s[e]&&!t.escapeWithReference&&(n=Math.min(a[o],s[e]-('right'===e?a.width:a.height))),{[o]:n}}};return f.forEach((e)=>{const t=-1===['left','top'].indexOf(e)?'secondary':'primary';a=O({},a,l[t](e))}),e.offsets.popper=a,e}function be(e){const t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){const{reference:t,popper:i}=e.offsets,r=-1!==['bottom','top'].indexOf(o),p=r?'left':'top',d=r?'width':'height',s={start:{[p]:t[p]},end:{[p]:t[p]+t[d]-i[d]}};e.offsets.popper=O({},i,s[n])}return e}function we(e){if(!ie(e.instance.modifiers,'hide','preventOverflow'))return e;const t=e.offsets.reference,o=F(e.instance.modifiers,(e)=>'preventOverflow'===e.name).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}function ye(e){const t=e.placement,o=t.split('-')[0],{popper:n,reference:i}=e.offsets,r=-1!==['left','right'].indexOf(o),p=-1===['top','left'].indexOf(o);return n[r?'left':'top']=i[o]-(p?n[r?'width':'height']:0),e.placement=A(t),e.offsets.popper=L(n),e}var Ee={shift:{order:100,enabled:!0,fn:be},offset:{order:200,enabled:!0,fn:ue,offset:0},preventOverflow:{order:300,enabled:!0,fn:ge,priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:me},arrow:{order:500,enabled:!0,fn:re,element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:le,behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:ye},hide:{order:800,enabled:!0,fn:we},computeStyle:{order:850,enabled:!0,fn:ne,gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:$,onLoad:ee,gpuAcceleration:void 0}},xe={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:()=>{},onUpdate:()=>{},modifiers:Ee};class ve{constructor(e,t,o={}){this.scheduleUpdate=()=>requestAnimationFrame(this.update),this.update=r(this.update.bind(this)),this.options=O({},ve.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(O({},ve.Defaults.modifiers,o.modifiers)).forEach((e)=>{this.options.modifiers[e]=O({},ve.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map((e)=>O({name:e},this.options.modifiers[e])).sort((e,t)=>e.order-t.order),this.modifiers.forEach((e)=>{e.enabled&&p(e.onLoad)&&e.onLoad(this.reference,this.popper,this.options,e,this.state)}),this.update();const n=this.options.eventsEnabled;n&&this.enableEventListeners(),this.state.eventsEnabled=n}update(){return U.call(this)}destroy(){return j.call(this)}enableEventListeners(){return G.call(this)}disableEventListeners(){return X.call(this)}}ve.Utils=('undefined'==typeof window?global:window).PopperUtils,ve.placements=de,ve.Defaults=xe;export default ve;

