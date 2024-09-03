/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u={},c=function(t){try{return!!t()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=!c((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),l=f,s=Function.prototype.call,p=l?s.bind(s):function(){return s.apply(s,arguments)},g={},y={}.propertyIsEnumerable,b=Object.getOwnPropertyDescriptor,d=b&&!y.call({1:2},1);g.f=d?function(t){var n=b(this,t);return!!n&&n.enumerable}:y;var h,m,v=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},w=f,S=Function.prototype,O=S.bind,j=S.call,P=w&&O.bind(j,j),T=w?function(t){return t&&P(t)}:function(t){return t&&function(){return j.apply(t,arguments)}},x=T,E=x({}.toString),A=x("".slice),C=function(t){return A(E(t),8,-1)},F=T,R=c,k=C,M=i.Object,I=F("".split),N=R((function(){return!M("z").propertyIsEnumerable(0)}))?function(t){return"String"==k(t)?I(t,""):M(t)}:M,L=i.TypeError,z=function(t){if(null==t)throw L("Can't call method on "+t);return t},D=N,G=z,H=function(t){return D(G(t))},_=function(t){return"function"==typeof t},q=_,B=function(t){return"object"==typeof t?null!==t:q(t)},U=i,V=_,K=function(t){return V(t)?t:void 0},W=function(t,n){return arguments.length<2?K(U[t]):U[t]&&U[t][n]},J=T({}.isPrototypeOf),Q=i,X=W("navigator","userAgent")||"",Y=Q.process,$=Q.Deno,Z=Y&&Y.versions||$&&$.version,tt=Z&&Z.v8;tt&&(m=(h=tt.split("."))[0]>0&&h[0]<4?1:+(h[0]+h[1])),!m&&X&&(!(h=X.match(/Edge\/(\d+)/))||h[1]>=74)&&(h=X.match(/Chrome\/(\d+)/))&&(m=+h[1]);var nt=m,rt=nt,et=c,ot=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=W,ct=_,at=J,ft=it,lt=i.Object,st=ft?function(t){return"symbol"==typeof t}:function(t){var n=ut("Symbol");return ct(n)&&at(n.prototype,lt(t))},pt=i.String,gt=_,yt=function(t){try{return pt(t)}catch(t){return"Object"}},bt=i.TypeError,dt=function(t){if(gt(t))return t;throw bt(yt(t)+" is not a function")},ht=p,mt=_,vt=B,wt=i.TypeError,St={exports:{}},Ot=i,jt=Object.defineProperty,Pt=function(t,n){try{jt(Ot,t,{value:n,configurable:!0,writable:!0})}catch(r){Ot[t]=n}return n},Tt=Pt,xt="__core-js_shared__",Et=i[xt]||Tt(xt,{}),At=Et;(St.exports=function(t,n){return At[t]||(At[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var Ct=z,Ft=i.Object,Rt=function(t){return Ft(Ct(t))},kt=Rt,Mt=T({}.hasOwnProperty),It=Object.hasOwn||function(t,n){return Mt(kt(t),n)},Nt=T,Lt=0,zt=Math.random(),Dt=Nt(1..toString),Gt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Dt(++Lt+zt,36)},Ht=i,_t=St.exports,qt=It,Bt=Gt,Ut=ot,Vt=it,Kt=_t("wks"),Wt=Ht.Symbol,Jt=Wt&&Wt.for,Qt=Vt?Wt:Wt&&Wt.withoutSetter||Bt,Xt=function(t){if(!qt(Kt,t)||!Ut&&"string"!=typeof Kt[t]){var n="Symbol."+t;Ut&&qt(Wt,t)?Kt[t]=Wt[t]:Kt[t]=Vt&&Jt?Jt(n):Qt(n)}return Kt[t]},Yt=p,$t=B,Zt=st,tn=function(t,n){var r=t[n];return null==r?void 0:dt(r)},nn=function(t,n){var r,e;if("string"===n&&mt(r=t.toString)&&!vt(e=ht(r,t)))return e;if(mt(r=t.valueOf)&&!vt(e=ht(r,t)))return e;if("string"!==n&&mt(r=t.toString)&&!vt(e=ht(r,t)))return e;throw wt("Can't convert object to primitive value")},rn=Xt,en=i.TypeError,on=rn("toPrimitive"),un=function(t,n){if(!$t(t)||Zt(t))return t;var r,e=tn(t,on);if(e){if(void 0===n&&(n="default"),r=Yt(e,t,n),!$t(r)||Zt(r))return r;throw en("Can't convert object to primitive value")}return void 0===n&&(n="number"),nn(t,n)},cn=st,an=function(t){var n=un(t,"string");return cn(n)?n:n+""},fn=B,ln=i.document,sn=fn(ln)&&fn(ln.createElement),pn=function(t){return sn?ln.createElement(t):{}},gn=!a&&!c((function(){return 7!=Object.defineProperty(pn("div"),"a",{get:function(){return 7}}).a})),yn=a,bn=p,dn=g,hn=v,mn=H,vn=an,wn=It,Sn=gn,On=Object.getOwnPropertyDescriptor;u.f=yn?On:function(t,n){if(t=mn(t),n=vn(n),Sn)try{return On(t,n)}catch(t){}if(wn(t,n))return hn(!bn(dn.f,t,n),t[n])};var jn={},Pn=a&&c((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Tn=i,xn=B,En=Tn.String,An=Tn.TypeError,Cn=function(t){if(xn(t))return t;throw An(En(t)+" is not an object")},Fn=a,Rn=gn,kn=Pn,Mn=Cn,In=an,Nn=i.TypeError,Ln=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Dn="enumerable",Gn="configurable",Hn="writable";jn.f=Fn?kn?function(t,n,r){if(Mn(t),n=In(n),Mn(r),"function"==typeof t&&"prototype"===n&&"value"in r&&Hn in r&&!r.writable){var e=zn(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:Gn in r?r.configurable:e.configurable,enumerable:Dn in r?r.enumerable:e.enumerable,writable:!1})}return Ln(t,n,r)}:Ln:function(t,n,r){if(Mn(t),n=In(n),Mn(r),Rn)try{return Ln(t,n,r)}catch(t){}if("get"in r||"set"in r)throw Nn("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var _n=jn,qn=v,Bn=a?function(t,n,r){return _n.f(t,n,qn(1,r))}:function(t,n,r){return t[n]=r,t},Un={exports:{}},Vn=a,Kn=It,Wn=Function.prototype,Jn=Vn&&Object.getOwnPropertyDescriptor,Qn=Kn(Wn,"name"),Xn={EXISTS:Qn,PROPER:Qn&&"something"===function(){}.name,CONFIGURABLE:Qn&&(!Vn||Vn&&Jn(Wn,"name").configurable)},Yn=_,$n=Et,Zn=T(Function.toString);Yn($n.inspectSource)||($n.inspectSource=function(t){return Zn(t)});var tr,nr,rr,er=$n.inspectSource,or=_,ir=er,ur=i.WeakMap,cr=or(ur)&&/native code/.test(ir(ur)),ar=St.exports,fr=Gt,lr=ar("keys"),sr={},pr=cr,gr=i,yr=T,br=B,dr=Bn,hr=It,mr=Et,vr=function(t){return lr[t]||(lr[t]=fr(t))},wr=sr,Sr="Object already initialized",Or=gr.TypeError,jr=gr.WeakMap;if(pr||mr.state){var Pr=mr.state||(mr.state=new jr),Tr=yr(Pr.get),xr=yr(Pr.has),Er=yr(Pr.set);tr=function(t,n){if(xr(Pr,t))throw new Or(Sr);return n.facade=t,Er(Pr,t,n),n},nr=function(t){return Tr(Pr,t)||{}},rr=function(t){return xr(Pr,t)}}else{var Ar=vr("state");wr[Ar]=!0,tr=function(t,n){if(hr(t,Ar))throw new Or(Sr);return n.facade=t,dr(t,Ar,n),n},nr=function(t){return hr(t,Ar)?t[Ar]:{}},rr=function(t){return hr(t,Ar)}}var Cr={set:tr,get:nr,has:rr,enforce:function(t){return rr(t)?nr(t):tr(t,{})},getterFor:function(t){return function(n){var r;if(!br(n)||(r=nr(n)).type!==t)throw Or("Incompatible receiver, "+t+" required");return r}}},Fr=c,Rr=_,kr=It,Mr=a,Ir=Xn.CONFIGURABLE,Nr=er,Lr=Cr.enforce,zr=Cr.get,Dr=Object.defineProperty,Gr=Mr&&!Fr((function(){return 8!==Dr((function(){}),"length",{value:8}).length})),Hr=String(String).split("String"),_r=Un.exports=function(t,n,r){if("Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!kr(t,"name")||Ir&&t.name!==n)&&Dr(t,"name",{value:n,configurable:!0}),Gr&&r&&kr(r,"arity")&&t.length!==r.arity&&Dr(t,"length",{value:r.arity}),r&&kr(r,"constructor")&&r.constructor){if(Mr)try{Dr(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var e=Lr(t);return kr(e,"source")||(e.source=Hr.join("string"==typeof n?n:"")),t};Function.prototype.toString=_r((function(){return Rr(this)&&zr(this).source||Nr(this)}),"toString");var qr=i,Br=_,Ur=Bn,Vr=Un.exports,Kr=Pt,Wr={},Jr=Math.ceil,Qr=Math.floor,Xr=function(t){var n=+t;return n!=n||0===n?0:(n>0?Qr:Jr)(n)},Yr=Xr,$r=Math.max,Zr=Math.min,te=Xr,ne=Math.min,re=function(t){return t>0?ne(te(t),9007199254740991):0},ee=function(t){return re(t.length)},oe=H,ie=function(t,n){var r=Yr(t);return r<0?$r(r+n,0):Zr(r,n)},ue=ee,ce=function(t){return function(n,r,e){var o,i=oe(n),u=ue(i),c=ie(e,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},ae={includes:ce(!0),indexOf:ce(!1)},fe=It,le=H,se=ae.indexOf,pe=sr,ge=T([].push),ye=function(t,n){var r,e=le(t),o=0,i=[];for(r in e)!fe(pe,r)&&fe(e,r)&&ge(i,r);for(;n.length>o;)fe(e,r=n[o++])&&(~se(i,r)||ge(i,r));return i},be=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Wr.f=Object.getOwnPropertyNames||function(t){return ye(t,be)};var de={};de.f=Object.getOwnPropertySymbols;var he=W,me=Wr,ve=de,we=Cn,Se=T([].concat),Oe=he("Reflect","ownKeys")||function(t){var n=me.f(we(t)),r=ve.f;return r?Se(n,r(t)):n},je=It,Pe=Oe,Te=u,xe=jn,Ee=c,Ae=_,Ce=/#|\.prototype\./,Fe=function(t,n){var r=ke[Re(t)];return r==Ie||r!=Me&&(Ae(n)?Ee(n):!!n)},Re=Fe.normalize=function(t){return String(t).replace(Ce,".").toLowerCase()},ke=Fe.data={},Me=Fe.NATIVE="N",Ie=Fe.POLYFILL="P",Ne=Fe,Le=i,ze=u.f,De=Bn,Ge=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet,c=e&&void 0!==e.name?e.name:n;return Br(r)&&Vr(r,c,e),t===qr?(i?t[n]=r:Kr(n,r),t):(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=r:Ur(t,n,r),t)},He=Pt,_e=function(t,n,r){for(var e=Pe(n),o=xe.f,i=Te.f,u=0;u<e.length;u++){var c=e[u];je(t,c)||r&&je(r,c)||o(t,c,i(n,c))}},qe=Ne,Be=C,Ue=Array.isArray||function(t){return"Array"==Be(t)},Ve=an,Ke=jn,We=v,Je={};Je[Xt("toStringTag")]="z";var Qe=i,Xe="[object z]"===String(Je),Ye=_,$e=C,Ze=Xt("toStringTag"),to=Qe.Object,no="Arguments"==$e(function(){return arguments}()),ro=T,eo=c,oo=_,io=Xe?$e:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=to(t),Ze))?r:no?$e(n):"Object"==(e=$e(n))&&Ye(n.callee)?"Arguments":e},uo=er,co=function(){},ao=[],fo=W("Reflect","construct"),lo=/^\s*(?:class|function)\b/,so=ro(lo.exec),po=!lo.exec(co),go=function(t){if(!oo(t))return!1;try{return fo(co,ao,t),!0}catch(t){return!1}},yo=function(t){if(!oo(t))return!1;switch(io(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return po||!!so(lo,uo(t))}catch(t){return!0}};yo.sham=!0;var bo=!fo||eo((function(){var t;return go(go.call)||!go(Object)||!go((function(){t=!0}))||t}))?yo:go,ho=i,mo=Ue,vo=bo,wo=B,So=Xt("species"),Oo=ho.Array,jo=function(t){var n;return mo(t)&&(n=t.constructor,(vo(n)&&(n===Oo||mo(n.prototype))||wo(n)&&null===(n=n[So]))&&(n=void 0)),void 0===n?Oo:n},Po=c,To=nt,xo=Xt("species"),Eo=function(t,n){var r,e,o,i,u,c=t.target,a=t.global,f=t.stat;if(r=a?Le:f?Le[c]||He(c,{}):(Le[c]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(u=ze(r,e))&&u.value:r[e],!qe(a?e:c+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_e(i,o)}(t.sham||o&&o.sham)&&De(i,"sham",!0),Ge(r,e,i,t)}},Ao=i,Co=c,Fo=Ue,Ro=B,ko=Rt,Mo=ee,Io=function(t,n,r){var e=Ve(n);e in t?Ke.f(t,e,We(0,r)):t[e]=r},No=function(t,n){return new(jo(t))(0===n?0:n)},Lo=function(t){return To>=51||!Po((function(){var n=[];return(n.constructor={})[xo]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},zo=nt,Do=Xt("isConcatSpreadable"),Go=9007199254740991,Ho="Maximum allowed index exceeded",_o=Ao.TypeError,qo=zo>=51||!Co((function(){var t=[];return t[Do]=!1,t.concat()[0]!==t})),Bo=Lo("concat"),Uo=function(t){if(!Ro(t))return!1;var n=t[Do];return void 0!==n?!!n:Fo(t)};Eo({target:"Array",proto:!0,arity:1,forced:!qo||!Bo},{concat:function(t){var n,r,e,o,i,u=ko(this),c=No(u,0),a=0;for(n=-1,e=arguments.length;n<e;n++)if(Uo(i=-1===n?u:arguments[n])){if(a+(o=Mo(i))>Go)throw _o(Ho);for(r=0;r<o;r++,a++)r in i&&Io(c,a,i[r])}else{if(a>=Go)throw _o(Ho);Io(c,a++,i)}return c.length=a,c}}),r.default.fn.bootstrapTable.locales["nb-NO"]=r.default.fn.bootstrapTable.locales.nb={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Oppdaterer, vennligst vent"},formatRecordsPerPage:function(t){return"".concat(t," poster pr side")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Viser ".concat(t," til ").concat(n," av ").concat(r," rekker (filtered from ").concat(e," total rows)"):"Viser ".concat(t," til ").concat(n," av ").concat(r," rekker")},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatClearSearch:function(){return"Clear Search"},formatSearch:function(){return"Søk"},formatNoMatches:function(){return"Ingen poster funnet"},formatPaginationSwitch:function(){return"Hide/Show pagination"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Oppdater"},formatToggle:function(){return"Endre"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Kolonner"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"All"},formatAutoRefresh:function(){return"Auto Refresh"},formatExport:function(){return"Export data"},formatJumpTo:function(){return"GO"},formatAdvancedSearch:function(){return"Advanced search"},formatAdvancedCloseButton:function(){return"Close"},formatFilterControlSwitch:function(){return"Hide/Show controls"},formatFilterControlSwitchHide:function(){return"Hide controls"},formatFilterControlSwitchShow:function(){return"Show controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["nb-NO"])}));
