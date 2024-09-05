/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u={},c=function(t){try{return!!t()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=!c((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),l=f,s=Function.prototype.call,p=l?s.bind(s):function(){return s.apply(s,arguments)},y={},g={}.propertyIsEnumerable,b=Object.getOwnPropertyDescriptor,d=b&&!g.call({1:2},1);y.f=d?function(t){var n=b(this,t);return!!n&&n.enumerable}:g;var v,h,m=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},w=f,S=Function.prototype,O=S.bind,j=S.call,P=w&&O.bind(j,j),T=w?function(t){return t&&P(t)}:function(t){return t&&function(){return j.apply(t,arguments)}},x=T,E=x({}.toString),A=x("".slice),F=function(t){return A(E(t),8,-1)},C=T,R=c,k=F,M=i.Object,I=C("".split),N=R((function(){return!M("z").propertyIsEnumerable(0)}))?function(t){return"String"==k(t)?I(t,""):M(t)}:M,L=i.TypeError,z=function(t){if(null==t)throw L("Can't call method on "+t);return t},D=N,G=z,H=function(t){return D(G(t))},_=function(t){return"function"==typeof t},q=_,B=function(t){return"object"==typeof t?null!==t:q(t)},U=i,V=_,K=function(t){return V(t)?t:void 0},W=function(t,n){return arguments.length<2?K(U[t]):U[t]&&U[t][n]},J=T({}.isPrototypeOf),Q=i,X=W("navigator","userAgent")||"",Y=Q.process,$=Q.Deno,Z=Y&&Y.versions||$&&$.version,tt=Z&&Z.v8;tt&&(h=(v=tt.split("."))[0]>0&&v[0]<4?1:+(v[0]+v[1])),!h&&X&&(!(v=X.match(/Edge\/(\d+)/))||v[1]>=74)&&(v=X.match(/Chrome\/(\d+)/))&&(h=+v[1]);var nt=h,rt=nt,et=c,ot=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=W,ct=_,at=J,ft=it,lt=i.Object,st=ft?function(t){return"symbol"==typeof t}:function(t){var n=ut("Symbol");return ct(n)&&at(n.prototype,lt(t))},pt=i.String,yt=_,gt=function(t){try{return pt(t)}catch(t){return"Object"}},bt=i.TypeError,dt=function(t){if(yt(t))return t;throw bt(gt(t)+" is not a function")},vt=p,ht=_,mt=B,wt=i.TypeError,St={exports:{}},Ot=i,jt=Object.defineProperty,Pt=function(t,n){try{jt(Ot,t,{value:n,configurable:!0,writable:!0})}catch(r){Ot[t]=n}return n},Tt=Pt,xt="__core-js_shared__",Et=i[xt]||Tt(xt,{}),At=Et;(St.exports=function(t,n){return At[t]||(At[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var Ft=z,Ct=i.Object,Rt=function(t){return Ct(Ft(t))},kt=Rt,Mt=T({}.hasOwnProperty),It=Object.hasOwn||function(t,n){return Mt(kt(t),n)},Nt=T,Lt=0,zt=Math.random(),Dt=Nt(1..toString),Gt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Dt(++Lt+zt,36)},Ht=i,_t=St.exports,qt=It,Bt=Gt,Ut=ot,Vt=it,Kt=_t("wks"),Wt=Ht.Symbol,Jt=Wt&&Wt.for,Qt=Vt?Wt:Wt&&Wt.withoutSetter||Bt,Xt=function(t){if(!qt(Kt,t)||!Ut&&"string"!=typeof Kt[t]){var n="Symbol."+t;Ut&&qt(Wt,t)?Kt[t]=Wt[t]:Kt[t]=Vt&&Jt?Jt(n):Qt(n)}return Kt[t]},Yt=p,$t=B,Zt=st,tn=function(t,n){var r=t[n];return null==r?void 0:dt(r)},nn=function(t,n){var r,e;if("string"===n&&ht(r=t.toString)&&!mt(e=vt(r,t)))return e;if(ht(r=t.valueOf)&&!mt(e=vt(r,t)))return e;if("string"!==n&&ht(r=t.toString)&&!mt(e=vt(r,t)))return e;throw wt("Can't convert object to primitive value")},rn=Xt,en=i.TypeError,on=rn("toPrimitive"),un=function(t,n){if(!$t(t)||Zt(t))return t;var r,e=tn(t,on);if(e){if(void 0===n&&(n="default"),r=Yt(e,t,n),!$t(r)||Zt(r))return r;throw en("Can't convert object to primitive value")}return void 0===n&&(n="number"),nn(t,n)},cn=st,an=function(t){var n=un(t,"string");return cn(n)?n:n+""},fn=B,ln=i.document,sn=fn(ln)&&fn(ln.createElement),pn=function(t){return sn?ln.createElement(t):{}},yn=!a&&!c((function(){return 7!=Object.defineProperty(pn("div"),"a",{get:function(){return 7}}).a})),gn=a,bn=p,dn=y,vn=m,hn=H,mn=an,wn=It,Sn=yn,On=Object.getOwnPropertyDescriptor;u.f=gn?On:function(t,n){if(t=hn(t),n=mn(n),Sn)try{return On(t,n)}catch(t){}if(wn(t,n))return vn(!bn(dn.f,t,n),t[n])};var jn={},Pn=a&&c((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Tn=i,xn=B,En=Tn.String,An=Tn.TypeError,Fn=function(t){if(xn(t))return t;throw An(En(t)+" is not an object")},Cn=a,Rn=yn,kn=Pn,Mn=Fn,In=an,Nn=i.TypeError,Ln=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Dn="enumerable",Gn="configurable",Hn="writable";jn.f=Cn?kn?function(t,n,r){if(Mn(t),n=In(n),Mn(r),"function"==typeof t&&"prototype"===n&&"value"in r&&Hn in r&&!r.writable){var e=zn(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:Gn in r?r.configurable:e.configurable,enumerable:Dn in r?r.enumerable:e.enumerable,writable:!1})}return Ln(t,n,r)}:Ln:function(t,n,r){if(Mn(t),n=In(n),Mn(r),Rn)try{return Ln(t,n,r)}catch(t){}if("get"in r||"set"in r)throw Nn("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var _n=jn,qn=m,Bn=a?function(t,n,r){return _n.f(t,n,qn(1,r))}:function(t,n,r){return t[n]=r,t},Un={exports:{}},Vn=a,Kn=It,Wn=Function.prototype,Jn=Vn&&Object.getOwnPropertyDescriptor,Qn=Kn(Wn,"name"),Xn={EXISTS:Qn,PROPER:Qn&&"something"===function(){}.name,CONFIGURABLE:Qn&&(!Vn||Vn&&Jn(Wn,"name").configurable)},Yn=_,$n=Et,Zn=T(Function.toString);Yn($n.inspectSource)||($n.inspectSource=function(t){return Zn(t)});var tr,nr,rr,er=$n.inspectSource,or=_,ir=er,ur=i.WeakMap,cr=or(ur)&&/native code/.test(ir(ur)),ar=St.exports,fr=Gt,lr=ar("keys"),sr={},pr=cr,yr=i,gr=T,br=B,dr=Bn,vr=It,hr=Et,mr=function(t){return lr[t]||(lr[t]=fr(t))},wr=sr,Sr="Object already initialized",Or=yr.TypeError,jr=yr.WeakMap;if(pr||hr.state){var Pr=hr.state||(hr.state=new jr),Tr=gr(Pr.get),xr=gr(Pr.has),Er=gr(Pr.set);tr=function(t,n){if(xr(Pr,t))throw new Or(Sr);return n.facade=t,Er(Pr,t,n),n},nr=function(t){return Tr(Pr,t)||{}},rr=function(t){return xr(Pr,t)}}else{var Ar=mr("state");wr[Ar]=!0,tr=function(t,n){if(vr(t,Ar))throw new Or(Sr);return n.facade=t,dr(t,Ar,n),n},nr=function(t){return vr(t,Ar)?t[Ar]:{}},rr=function(t){return vr(t,Ar)}}var Fr={set:tr,get:nr,has:rr,enforce:function(t){return rr(t)?nr(t):tr(t,{})},getterFor:function(t){return function(n){var r;if(!br(n)||(r=nr(n)).type!==t)throw Or("Incompatible receiver, "+t+" required");return r}}},Cr=c,Rr=_,kr=It,Mr=a,Ir=Xn.CONFIGURABLE,Nr=er,Lr=Fr.enforce,zr=Fr.get,Dr=Object.defineProperty,Gr=Mr&&!Cr((function(){return 8!==Dr((function(){}),"length",{value:8}).length})),Hr=String(String).split("String"),_r=Un.exports=function(t,n,r){if("Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!kr(t,"name")||Ir&&t.name!==n)&&Dr(t,"name",{value:n,configurable:!0}),Gr&&r&&kr(r,"arity")&&t.length!==r.arity&&Dr(t,"length",{value:r.arity}),r&&kr(r,"constructor")&&r.constructor){if(Mr)try{Dr(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var e=Lr(t);return kr(e,"source")||(e.source=Hr.join("string"==typeof n?n:"")),t};Function.prototype.toString=_r((function(){return Rr(this)&&zr(this).source||Nr(this)}),"toString");var qr=i,Br=_,Ur=Bn,Vr=Un.exports,Kr=Pt,Wr={},Jr=Math.ceil,Qr=Math.floor,Xr=function(t){var n=+t;return n!=n||0===n?0:(n>0?Qr:Jr)(n)},Yr=Xr,$r=Math.max,Zr=Math.min,te=Xr,ne=Math.min,re=function(t){return t>0?ne(te(t),9007199254740991):0},ee=function(t){return re(t.length)},oe=H,ie=function(t,n){var r=Yr(t);return r<0?$r(r+n,0):Zr(r,n)},ue=ee,ce=function(t){return function(n,r,e){var o,i=oe(n),u=ue(i),c=ie(e,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},ae={includes:ce(!0),indexOf:ce(!1)},fe=It,le=H,se=ae.indexOf,pe=sr,ye=T([].push),ge=function(t,n){var r,e=le(t),o=0,i=[];for(r in e)!fe(pe,r)&&fe(e,r)&&ye(i,r);for(;n.length>o;)fe(e,r=n[o++])&&(~se(i,r)||ye(i,r));return i},be=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Wr.f=Object.getOwnPropertyNames||function(t){return ge(t,be)};var de={};de.f=Object.getOwnPropertySymbols;var ve=W,he=Wr,me=de,we=Fn,Se=T([].concat),Oe=ve("Reflect","ownKeys")||function(t){var n=he.f(we(t)),r=me.f;return r?Se(n,r(t)):n},je=It,Pe=Oe,Te=u,xe=jn,Ee=c,Ae=_,Fe=/#|\.prototype\./,Ce=function(t,n){var r=ke[Re(t)];return r==Ie||r!=Me&&(Ae(n)?Ee(n):!!n)},Re=Ce.normalize=function(t){return String(t).replace(Fe,".").toLowerCase()},ke=Ce.data={},Me=Ce.NATIVE="N",Ie=Ce.POLYFILL="P",Ne=Ce,Le=i,ze=u.f,De=Bn,Ge=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet,c=e&&void 0!==e.name?e.name:n;return Br(r)&&Vr(r,c,e),t===qr?(i?t[n]=r:Kr(n,r),t):(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=r:Ur(t,n,r),t)},He=Pt,_e=function(t,n,r){for(var e=Pe(n),o=xe.f,i=Te.f,u=0;u<e.length;u++){var c=e[u];je(t,c)||r&&je(r,c)||o(t,c,i(n,c))}},qe=Ne,Be=F,Ue=Array.isArray||function(t){return"Array"==Be(t)},Ve=an,Ke=jn,We=m,Je={};Je[Xt("toStringTag")]="z";var Qe=i,Xe="[object z]"===String(Je),Ye=_,$e=F,Ze=Xt("toStringTag"),to=Qe.Object,no="Arguments"==$e(function(){return arguments}()),ro=T,eo=c,oo=_,io=Xe?$e:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=to(t),Ze))?r:no?$e(n):"Object"==(e=$e(n))&&Ye(n.callee)?"Arguments":e},uo=er,co=function(){},ao=[],fo=W("Reflect","construct"),lo=/^\s*(?:class|function)\b/,so=ro(lo.exec),po=!lo.exec(co),yo=function(t){if(!oo(t))return!1;try{return fo(co,ao,t),!0}catch(t){return!1}},go=function(t){if(!oo(t))return!1;switch(io(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return po||!!so(lo,uo(t))}catch(t){return!0}};go.sham=!0;var bo=!fo||eo((function(){var t;return yo(yo.call)||!yo(Object)||!yo((function(){t=!0}))||t}))?go:yo,vo=i,ho=Ue,mo=bo,wo=B,So=Xt("species"),Oo=vo.Array,jo=function(t){var n;return ho(t)&&(n=t.constructor,(mo(n)&&(n===Oo||ho(n.prototype))||wo(n)&&null===(n=n[So]))&&(n=void 0)),void 0===n?Oo:n},Po=c,To=nt,xo=Xt("species"),Eo=function(t,n){var r,e,o,i,u,c=t.target,a=t.global,f=t.stat;if(r=a?Le:f?Le[c]||He(c,{}):(Le[c]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(u=ze(r,e))&&u.value:r[e],!qe(a?e:c+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_e(i,o)}(t.sham||o&&o.sham)&&De(i,"sham",!0),Ge(r,e,i,t)}},Ao=i,Fo=c,Co=Ue,Ro=B,ko=Rt,Mo=ee,Io=function(t,n,r){var e=Ve(n);e in t?Ke.f(t,e,We(0,r)):t[e]=r},No=function(t,n){return new(jo(t))(0===n?0:n)},Lo=function(t){return To>=51||!Po((function(){var n=[];return(n.constructor={})[xo]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},zo=nt,Do=Xt("isConcatSpreadable"),Go=9007199254740991,Ho="Maximum allowed index exceeded",_o=Ao.TypeError,qo=zo>=51||!Fo((function(){var t=[];return t[Do]=!1,t.concat()[0]!==t})),Bo=Lo("concat"),Uo=function(t){if(!Ro(t))return!1;var n=t[Do];return void 0!==n?!!n:Co(t)};Eo({target:"Array",proto:!0,arity:1,forced:!qo||!Bo},{concat:function(t){var n,r,e,o,i,u=ko(this),c=No(u,0),a=0;for(n=-1,e=arguments.length;n<e;n++)if(Uo(i=-1===n?u:arguments[n])){if(a+(o=Mo(i))>Go)throw _o(Ho);for(r=0;r<o;r++,a++)r in i&&Io(c,a,i[r])}else{if(a>=Go)throw _o(Ho);Io(c,a++,i)}return c.length=a,c}}),r.default.fn.bootstrapTable.locales["fi-FI"]=r.default.fn.bootstrapTable.locales.fi={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Ladataan, ole hyvä ja odota"},formatRecordsPerPage:function(t){return"".concat(t," riviä sivulla")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Näytetään rivit ".concat(t," - ").concat(n," / ").concat(r," (filtered from ").concat(e," total rows)"):"Näytetään rivit ".concat(t," - ").concat(n," / ").concat(r)},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatClearSearch:function(){return"Poista suodattimet"},formatSearch:function(){return"Hae"},formatNoMatches:function(){return"Hakuehtoja vastaavia tuloksia ei löytynyt"},formatPaginationSwitch:function(){return"Näytä/Piilota sivutus"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Päivitä"},formatToggle:function(){return"Valitse"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Sarakkeet"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"Kaikki"},formatAutoRefresh:function(){return"Auto Refresh"},formatExport:function(){return"Vie tiedot"},formatJumpTo:function(){return"GO"},formatAdvancedSearch:function(){return"Advanced search"},formatAdvancedCloseButton:function(){return"Close"},formatFilterControlSwitch:function(){return"Hide/Show controls"},formatFilterControlSwitchHide:function(){return"Hide controls"},formatFilterControlSwitchShow:function(){return"Show controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["fi-FI"])}));