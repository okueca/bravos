/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u={},a=function(t){try{return!!t()}catch(t){return!0}},c=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=!a((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),l=f,s=Function.prototype.call,p=l?s.bind(s):function(){return s.apply(s,arguments)},y={},b={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,v=g&&!b.call({1:2},1);y.f=v?function(t){var n=g(this,t);return!!n&&n.enumerable}:b;var d,m,h=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},S=f,w=Function.prototype,O=w.bind,j=w.call,P=S&&O.bind(j,j),T=S?function(t){return t&&P(t)}:function(t){return t&&function(){return j.apply(t,arguments)}},k=T,z=k({}.toString),x=k("".slice),E=function(t){return x(z(t),8,-1)},A=T,C=a,F=E,R=i.Object,Z=A("".split),M=C((function(){return!R("z").propertyIsEnumerable(0)}))?function(t){return"String"==F(t)?Z(t,""):R(t)}:R,I=i.TypeError,N=function(t){if(null==t)throw I("Can't call method on "+t);return t},L=M,D=N,G=function(t){return L(D(t))},_=function(t){return"function"==typeof t},q=_,B=function(t){return"object"==typeof t?null!==t:q(t)},U=i,V=_,K=function(t){return V(t)?t:void 0},W=function(t,n){return arguments.length<2?K(U[t]):U[t]&&U[t][n]},H=T({}.isPrototypeOf),J=i,Q=W("navigator","userAgent")||"",X=J.process,Y=J.Deno,$=X&&X.versions||Y&&Y.version,tt=$&&$.v8;tt&&(m=(d=tt.split("."))[0]>0&&d[0]<4?1:+(d[0]+d[1])),!m&&Q&&(!(d=Q.match(/Edge\/(\d+)/))||d[1]>=74)&&(d=Q.match(/Chrome\/(\d+)/))&&(m=+d[1]);var nt=m,rt=nt,et=a,ot=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=W,at=_,ct=H,ft=it,lt=i.Object,st=ft?function(t){return"symbol"==typeof t}:function(t){var n=ut("Symbol");return at(n)&&ct(n.prototype,lt(t))},pt=i.String,yt=_,bt=function(t){try{return pt(t)}catch(t){return"Object"}},gt=i.TypeError,vt=function(t){if(yt(t))return t;throw gt(bt(t)+" is not a function")},dt=p,mt=_,ht=B,St=i.TypeError,wt={exports:{}},Ot=i,jt=Object.defineProperty,Pt=function(t,n){try{jt(Ot,t,{value:n,configurable:!0,writable:!0})}catch(r){Ot[t]=n}return n},Tt=Pt,kt="__core-js_shared__",zt=i[kt]||Tt(kt,{}),xt=zt;(wt.exports=function(t,n){return xt[t]||(xt[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var Et=N,At=i.Object,Ct=function(t){return At(Et(t))},Ft=Ct,Rt=T({}.hasOwnProperty),Zt=Object.hasOwn||function(t,n){return Rt(Ft(t),n)},Mt=T,It=0,Nt=Math.random(),Lt=Mt(1..toString),Dt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Lt(++It+Nt,36)},Gt=i,_t=wt.exports,qt=Zt,Bt=Dt,Ut=ot,Vt=it,Kt=_t("wks"),Wt=Gt.Symbol,Ht=Wt&&Wt.for,Jt=Vt?Wt:Wt&&Wt.withoutSetter||Bt,Qt=function(t){if(!qt(Kt,t)||!Ut&&"string"!=typeof Kt[t]){var n="Symbol."+t;Ut&&qt(Wt,t)?Kt[t]=Wt[t]:Kt[t]=Vt&&Ht?Ht(n):Jt(n)}return Kt[t]},Xt=p,Yt=B,$t=st,tn=function(t,n){var r=t[n];return null==r?void 0:vt(r)},nn=function(t,n){var r,e;if("string"===n&&mt(r=t.toString)&&!ht(e=dt(r,t)))return e;if(mt(r=t.valueOf)&&!ht(e=dt(r,t)))return e;if("string"!==n&&mt(r=t.toString)&&!ht(e=dt(r,t)))return e;throw St("Can't convert object to primitive value")},rn=Qt,en=i.TypeError,on=rn("toPrimitive"),un=function(t,n){if(!Yt(t)||$t(t))return t;var r,e=tn(t,on);if(e){if(void 0===n&&(n="default"),r=Xt(e,t,n),!Yt(r)||$t(r))return r;throw en("Can't convert object to primitive value")}return void 0===n&&(n="number"),nn(t,n)},an=st,cn=function(t){var n=un(t,"string");return an(n)?n:n+""},fn=B,ln=i.document,sn=fn(ln)&&fn(ln.createElement),pn=function(t){return sn?ln.createElement(t):{}},yn=!c&&!a((function(){return 7!=Object.defineProperty(pn("div"),"a",{get:function(){return 7}}).a})),bn=c,gn=p,vn=y,dn=h,mn=G,hn=cn,Sn=Zt,wn=yn,On=Object.getOwnPropertyDescriptor;u.f=bn?On:function(t,n){if(t=mn(t),n=hn(n),wn)try{return On(t,n)}catch(t){}if(Sn(t,n))return dn(!gn(vn.f,t,n),t[n])};var jn={},Pn=c&&a((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Tn=i,kn=B,zn=Tn.String,xn=Tn.TypeError,En=function(t){if(kn(t))return t;throw xn(zn(t)+" is not an object")},An=c,Cn=yn,Fn=Pn,Rn=En,Zn=cn,Mn=i.TypeError,In=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,Ln="enumerable",Dn="configurable",Gn="writable";jn.f=An?Fn?function(t,n,r){if(Rn(t),n=Zn(n),Rn(r),"function"==typeof t&&"prototype"===n&&"value"in r&&Gn in r&&!r.writable){var e=Nn(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:Dn in r?r.configurable:e.configurable,enumerable:Ln in r?r.enumerable:e.enumerable,writable:!1})}return In(t,n,r)}:In:function(t,n,r){if(Rn(t),n=Zn(n),Rn(r),Cn)try{return In(t,n,r)}catch(t){}if("get"in r||"set"in r)throw Mn("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var _n=jn,qn=h,Bn=c?function(t,n,r){return _n.f(t,n,qn(1,r))}:function(t,n,r){return t[n]=r,t},Un={exports:{}},Vn=c,Kn=Zt,Wn=Function.prototype,Hn=Vn&&Object.getOwnPropertyDescriptor,Jn=Kn(Wn,"name"),Qn={EXISTS:Jn,PROPER:Jn&&"something"===function(){}.name,CONFIGURABLE:Jn&&(!Vn||Vn&&Hn(Wn,"name").configurable)},Xn=_,Yn=zt,$n=T(Function.toString);Xn(Yn.inspectSource)||(Yn.inspectSource=function(t){return $n(t)});var tr,nr,rr,er=Yn.inspectSource,or=_,ir=er,ur=i.WeakMap,ar=or(ur)&&/native code/.test(ir(ur)),cr=wt.exports,fr=Dt,lr=cr("keys"),sr={},pr=ar,yr=i,br=T,gr=B,vr=Bn,dr=Zt,mr=zt,hr=function(t){return lr[t]||(lr[t]=fr(t))},Sr=sr,wr="Object already initialized",Or=yr.TypeError,jr=yr.WeakMap;if(pr||mr.state){var Pr=mr.state||(mr.state=new jr),Tr=br(Pr.get),kr=br(Pr.has),zr=br(Pr.set);tr=function(t,n){if(kr(Pr,t))throw new Or(wr);return n.facade=t,zr(Pr,t,n),n},nr=function(t){return Tr(Pr,t)||{}},rr=function(t){return kr(Pr,t)}}else{var xr=hr("state");Sr[xr]=!0,tr=function(t,n){if(dr(t,xr))throw new Or(wr);return n.facade=t,vr(t,xr,n),n},nr=function(t){return dr(t,xr)?t[xr]:{}},rr=function(t){return dr(t,xr)}}var Er={set:tr,get:nr,has:rr,enforce:function(t){return rr(t)?nr(t):tr(t,{})},getterFor:function(t){return function(n){var r;if(!gr(n)||(r=nr(n)).type!==t)throw Or("Incompatible receiver, "+t+" required");return r}}},Ar=a,Cr=_,Fr=Zt,Rr=c,Zr=Qn.CONFIGURABLE,Mr=er,Ir=Er.enforce,Nr=Er.get,Lr=Object.defineProperty,Dr=Rr&&!Ar((function(){return 8!==Lr((function(){}),"length",{value:8}).length})),Gr=String(String).split("String"),_r=Un.exports=function(t,n,r){if("Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!Fr(t,"name")||Zr&&t.name!==n)&&Lr(t,"name",{value:n,configurable:!0}),Dr&&r&&Fr(r,"arity")&&t.length!==r.arity&&Lr(t,"length",{value:r.arity}),r&&Fr(r,"constructor")&&r.constructor){if(Rr)try{Lr(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var e=Ir(t);return Fr(e,"source")||(e.source=Gr.join("string"==typeof n?n:"")),t};Function.prototype.toString=_r((function(){return Cr(this)&&Nr(this).source||Mr(this)}),"toString");var qr=i,Br=_,Ur=Bn,Vr=Un.exports,Kr=Pt,Wr={},Hr=Math.ceil,Jr=Math.floor,Qr=function(t){var n=+t;return n!=n||0===n?0:(n>0?Jr:Hr)(n)},Xr=Qr,Yr=Math.max,$r=Math.min,te=Qr,ne=Math.min,re=function(t){return t>0?ne(te(t),9007199254740991):0},ee=function(t){return re(t.length)},oe=G,ie=function(t,n){var r=Xr(t);return r<0?Yr(r+n,0):$r(r,n)},ue=ee,ae=function(t){return function(n,r,e){var o,i=oe(n),u=ue(i),a=ie(e,u);if(t&&r!=r){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===r)return t||a||0;return!t&&-1}},ce={includes:ae(!0),indexOf:ae(!1)},fe=Zt,le=G,se=ce.indexOf,pe=sr,ye=T([].push),be=function(t,n){var r,e=le(t),o=0,i=[];for(r in e)!fe(pe,r)&&fe(e,r)&&ye(i,r);for(;n.length>o;)fe(e,r=n[o++])&&(~se(i,r)||ye(i,r));return i},ge=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Wr.f=Object.getOwnPropertyNames||function(t){return be(t,ge)};var ve={};ve.f=Object.getOwnPropertySymbols;var de=W,me=Wr,he=ve,Se=En,we=T([].concat),Oe=de("Reflect","ownKeys")||function(t){var n=me.f(Se(t)),r=he.f;return r?we(n,r(t)):n},je=Zt,Pe=Oe,Te=u,ke=jn,ze=a,xe=_,Ee=/#|\.prototype\./,Ae=function(t,n){var r=Fe[Ce(t)];return r==Ze||r!=Re&&(xe(n)?ze(n):!!n)},Ce=Ae.normalize=function(t){return String(t).replace(Ee,".").toLowerCase()},Fe=Ae.data={},Re=Ae.NATIVE="N",Ze=Ae.POLYFILL="P",Me=Ae,Ie=i,Ne=u.f,Le=Bn,De=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet,a=e&&void 0!==e.name?e.name:n;return Br(r)&&Vr(r,a,e),t===qr?(i?t[n]=r:Kr(n,r),t):(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=r:Ur(t,n,r),t)},Ge=Pt,_e=function(t,n,r){for(var e=Pe(n),o=ke.f,i=Te.f,u=0;u<e.length;u++){var a=e[u];je(t,a)||r&&je(r,a)||o(t,a,i(n,a))}},qe=Me,Be=E,Ue=Array.isArray||function(t){return"Array"==Be(t)},Ve=cn,Ke=jn,We=h,He={};He[Qt("toStringTag")]="z";var Je=i,Qe="[object z]"===String(He),Xe=_,Ye=E,$e=Qt("toStringTag"),to=Je.Object,no="Arguments"==Ye(function(){return arguments}()),ro=T,eo=a,oo=_,io=Qe?Ye:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=to(t),$e))?r:no?Ye(n):"Object"==(e=Ye(n))&&Xe(n.callee)?"Arguments":e},uo=er,ao=function(){},co=[],fo=W("Reflect","construct"),lo=/^\s*(?:class|function)\b/,so=ro(lo.exec),po=!lo.exec(ao),yo=function(t){if(!oo(t))return!1;try{return fo(ao,co,t),!0}catch(t){return!1}},bo=function(t){if(!oo(t))return!1;switch(io(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return po||!!so(lo,uo(t))}catch(t){return!0}};bo.sham=!0;var go=!fo||eo((function(){var t;return yo(yo.call)||!yo(Object)||!yo((function(){t=!0}))||t}))?bo:yo,vo=i,mo=Ue,ho=go,So=B,wo=Qt("species"),Oo=vo.Array,jo=function(t){var n;return mo(t)&&(n=t.constructor,(ho(n)&&(n===Oo||mo(n.prototype))||So(n)&&null===(n=n[wo]))&&(n=void 0)),void 0===n?Oo:n},Po=a,To=nt,ko=Qt("species"),zo=function(t,n){var r,e,o,i,u,a=t.target,c=t.global,f=t.stat;if(r=c?Ie:f?Ie[a]||Ge(a,{}):(Ie[a]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(u=Ne(r,e))&&u.value:r[e],!qe(c?e:a+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_e(i,o)}(t.sham||o&&o.sham)&&Le(i,"sham",!0),De(r,e,i,t)}},xo=i,Eo=a,Ao=Ue,Co=B,Fo=Ct,Ro=ee,Zo=function(t,n,r){var e=Ve(n);e in t?Ke.f(t,e,We(0,r)):t[e]=r},Mo=function(t,n){return new(jo(t))(0===n?0:n)},Io=function(t){return To>=51||!Po((function(){var n=[];return(n.constructor={})[ko]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},No=nt,Lo=Qt("isConcatSpreadable"),Do=9007199254740991,Go="Maximum allowed index exceeded",_o=xo.TypeError,qo=No>=51||!Eo((function(){var t=[];return t[Lo]=!1,t.concat()[0]!==t})),Bo=Io("concat"),Uo=function(t){if(!Co(t))return!1;var n=t[Lo];return void 0!==n?!!n:Ao(t)};zo({target:"Array",proto:!0,arity:1,forced:!qo||!Bo},{concat:function(t){var n,r,e,o,i,u=Fo(this),a=Mo(u,0),c=0;for(n=-1,e=arguments.length;n<e;n++)if(Uo(i=-1===n?u:arguments[n])){if(c+(o=Ro(i))>Do)throw _o(Go);for(r=0;r<o;r++,c++)r in i&&Zo(a,c,i[r])}else{if(c>=Do)throw _o(Go);Zo(a,c++,i)}return a.length=c,a}}),r.default.fn.bootstrapTable.locales["cs-CZ"]=r.default.fn.bootstrapTable.locales.cs={formatCopyRows:function(){return"Kopírovat řádky"},formatPrint:function(){return"Tisk"},formatLoadingMessage:function(){return"Čekejte, prosím"},formatRecordsPerPage:function(t){return"".concat(t," položek na stránku")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Zobrazena ".concat(t,". - ").concat(n," . položka z celkových ").concat(r," (filtered from ").concat(e," total rows)"):"Zobrazena ".concat(t,". - ").concat(n," . položka z celkových ").concat(r)},formatSRPaginationPreText:function(){return"předchozí strana"},formatSRPaginationPageText:function(t){return"na stranu ".concat(t)},formatSRPaginationNextText:function(){return"další strana"},formatDetailPagination:function(t){return"Zobrazuji ".concat(t," řádek")},formatClearSearch:function(){return"Smazat hledání"},formatSearch:function(){return"Vyhledávání"},formatNoMatches:function(){return"Nenalezena žádná vyhovující položka"},formatPaginationSwitch:function(){return"Skrýt/Zobrazit stránkování"},formatPaginationSwitchDown:function(){return"Zobrazit stránkování"},formatPaginationSwitchUp:function(){return"Skrýt stránkování"},formatRefresh:function(){return"Aktualizovat"},formatToggle:function(){return"Přepni"},formatToggleOn:function(){return"Zobrazit karty"},formatToggleOff:function(){return"Zobrazit tabulku"},formatColumns:function(){return"Sloupce"},formatColumnsToggleAll:function(){return"Zobrazit/Skrýt vše"},formatFullscreen:function(){return"Zapnout/Vypnout fullscreen"},formatAllRows:function(){return"Vše"},formatAutoRefresh:function(){return"Automatické obnovení"},formatExport:function(){return"Export dat"},formatJumpTo:function(){return"GO"},formatAdvancedSearch:function(){return"Pokročilé hledání"},formatAdvancedCloseButton:function(){return"Zavřít"},formatFilterControlSwitch:function(){return"Skrýt/Zobrazit ovladače"},formatFilterControlSwitchHide:function(){return"Skrýt ovladače"},formatFilterControlSwitchShow:function(){return"Zobrazit ovladače"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["cs-CZ"])}));
