/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u={},c=function(t){try{return!!t()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=!c((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),l=f,s=Function.prototype.call,p=l?s.bind(s):function(){return s.apply(s,arguments)},g={},y={}.propertyIsEnumerable,b=Object.getOwnPropertyDescriptor,h=b&&!y.call({1:2},1);g.f=h?function(t){var n=b(this,t);return!!n&&n.enumerable}:y;var m,d,v=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},w=f,S=Function.prototype,j=S.bind,O=S.call,P=w&&j.bind(O,O),T=w?function(t){return t&&P(t)}:function(t){return t&&function(){return O.apply(t,arguments)}},x=T,E=x({}.toString),A=x("".slice),C=function(t){return A(E(t),8,-1)},R=T,F=c,k=C,z=i.Object,M=R("".split),I=F((function(){return!z("z").propertyIsEnumerable(0)}))?function(t){return"String"==k(t)?M(t,""):z(t)}:z,N=i.TypeError,L=function(t){if(null==t)throw N("Can't call method on "+t);return t},D=I,G=L,H=function(t){return D(G(t))},_=function(t){return"function"==typeof t},q=_,B=function(t){return"object"==typeof t?null!==t:q(t)},U=i,K=_,W=function(t){return K(t)?t:void 0},J=function(t,n){return arguments.length<2?W(U[t]):U[t]&&U[t][n]},Q=T({}.isPrototypeOf),V=i,X=J("navigator","userAgent")||"",Y=V.process,$=V.Deno,Z=Y&&Y.versions||$&&$.version,tt=Z&&Z.v8;tt&&(d=(m=tt.split("."))[0]>0&&m[0]<4?1:+(m[0]+m[1])),!d&&X&&(!(m=X.match(/Edge\/(\d+)/))||m[1]>=74)&&(m=X.match(/Chrome\/(\d+)/))&&(d=+m[1]);var nt=d,rt=nt,et=c,ot=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=J,ct=_,at=Q,ft=it,lt=i.Object,st=ft?function(t){return"symbol"==typeof t}:function(t){var n=ut("Symbol");return ct(n)&&at(n.prototype,lt(t))},pt=i.String,gt=_,yt=function(t){try{return pt(t)}catch(t){return"Object"}},bt=i.TypeError,ht=function(t){if(gt(t))return t;throw bt(yt(t)+" is not a function")},mt=p,dt=_,vt=B,wt=i.TypeError,St={exports:{}},jt=i,Ot=Object.defineProperty,Pt=function(t,n){try{Ot(jt,t,{value:n,configurable:!0,writable:!0})}catch(r){jt[t]=n}return n},Tt=Pt,xt="__core-js_shared__",Et=i[xt]||Tt(xt,{}),At=Et;(St.exports=function(t,n){return At[t]||(At[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var Ct=L,Rt=i.Object,Ft=function(t){return Rt(Ct(t))},kt=Ft,zt=T({}.hasOwnProperty),Mt=Object.hasOwn||function(t,n){return zt(kt(t),n)},It=T,Nt=0,Lt=Math.random(),Dt=It(1..toString),Gt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Dt(++Nt+Lt,36)},Ht=i,_t=St.exports,qt=Mt,Bt=Gt,Ut=ot,Kt=it,Wt=_t("wks"),Jt=Ht.Symbol,Qt=Jt&&Jt.for,Vt=Kt?Jt:Jt&&Jt.withoutSetter||Bt,Xt=function(t){if(!qt(Wt,t)||!Ut&&"string"!=typeof Wt[t]){var n="Symbol."+t;Ut&&qt(Jt,t)?Wt[t]=Jt[t]:Wt[t]=Kt&&Qt?Qt(n):Vt(n)}return Wt[t]},Yt=p,$t=B,Zt=st,tn=function(t,n){var r=t[n];return null==r?void 0:ht(r)},nn=function(t,n){var r,e;if("string"===n&&dt(r=t.toString)&&!vt(e=mt(r,t)))return e;if(dt(r=t.valueOf)&&!vt(e=mt(r,t)))return e;if("string"!==n&&dt(r=t.toString)&&!vt(e=mt(r,t)))return e;throw wt("Can't convert object to primitive value")},rn=Xt,en=i.TypeError,on=rn("toPrimitive"),un=function(t,n){if(!$t(t)||Zt(t))return t;var r,e=tn(t,on);if(e){if(void 0===n&&(n="default"),r=Yt(e,t,n),!$t(r)||Zt(r))return r;throw en("Can't convert object to primitive value")}return void 0===n&&(n="number"),nn(t,n)},cn=st,an=function(t){var n=un(t,"string");return cn(n)?n:n+""},fn=B,ln=i.document,sn=fn(ln)&&fn(ln.createElement),pn=function(t){return sn?ln.createElement(t):{}},gn=!a&&!c((function(){return 7!=Object.defineProperty(pn("div"),"a",{get:function(){return 7}}).a})),yn=a,bn=p,hn=g,mn=v,dn=H,vn=an,wn=Mt,Sn=gn,jn=Object.getOwnPropertyDescriptor;u.f=yn?jn:function(t,n){if(t=dn(t),n=vn(n),Sn)try{return jn(t,n)}catch(t){}if(wn(t,n))return mn(!bn(hn.f,t,n),t[n])};var On={},Pn=a&&c((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Tn=i,xn=B,En=Tn.String,An=Tn.TypeError,Cn=function(t){if(xn(t))return t;throw An(En(t)+" is not an object")},Rn=a,Fn=gn,kn=Pn,zn=Cn,Mn=an,In=i.TypeError,Nn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,Dn="enumerable",Gn="configurable",Hn="writable";On.f=Rn?kn?function(t,n,r){if(zn(t),n=Mn(n),zn(r),"function"==typeof t&&"prototype"===n&&"value"in r&&Hn in r&&!r.writable){var e=Ln(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:Gn in r?r.configurable:e.configurable,enumerable:Dn in r?r.enumerable:e.enumerable,writable:!1})}return Nn(t,n,r)}:Nn:function(t,n,r){if(zn(t),n=Mn(n),zn(r),Fn)try{return Nn(t,n,r)}catch(t){}if("get"in r||"set"in r)throw In("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var _n=On,qn=v,Bn=a?function(t,n,r){return _n.f(t,n,qn(1,r))}:function(t,n,r){return t[n]=r,t},Un={exports:{}},Kn=a,Wn=Mt,Jn=Function.prototype,Qn=Kn&&Object.getOwnPropertyDescriptor,Vn=Wn(Jn,"name"),Xn={EXISTS:Vn,PROPER:Vn&&"something"===function(){}.name,CONFIGURABLE:Vn&&(!Kn||Kn&&Qn(Jn,"name").configurable)},Yn=_,$n=Et,Zn=T(Function.toString);Yn($n.inspectSource)||($n.inspectSource=function(t){return Zn(t)});var tr,nr,rr,er=$n.inspectSource,or=_,ir=er,ur=i.WeakMap,cr=or(ur)&&/native code/.test(ir(ur)),ar=St.exports,fr=Gt,lr=ar("keys"),sr={},pr=cr,gr=i,yr=T,br=B,hr=Bn,mr=Mt,dr=Et,vr=function(t){return lr[t]||(lr[t]=fr(t))},wr=sr,Sr="Object already initialized",jr=gr.TypeError,Or=gr.WeakMap;if(pr||dr.state){var Pr=dr.state||(dr.state=new Or),Tr=yr(Pr.get),xr=yr(Pr.has),Er=yr(Pr.set);tr=function(t,n){if(xr(Pr,t))throw new jr(Sr);return n.facade=t,Er(Pr,t,n),n},nr=function(t){return Tr(Pr,t)||{}},rr=function(t){return xr(Pr,t)}}else{var Ar=vr("state");wr[Ar]=!0,tr=function(t,n){if(mr(t,Ar))throw new jr(Sr);return n.facade=t,hr(t,Ar,n),n},nr=function(t){return mr(t,Ar)?t[Ar]:{}},rr=function(t){return mr(t,Ar)}}var Cr={set:tr,get:nr,has:rr,enforce:function(t){return rr(t)?nr(t):tr(t,{})},getterFor:function(t){return function(n){var r;if(!br(n)||(r=nr(n)).type!==t)throw jr("Incompatible receiver, "+t+" required");return r}}},Rr=c,Fr=_,kr=Mt,zr=a,Mr=Xn.CONFIGURABLE,Ir=er,Nr=Cr.enforce,Lr=Cr.get,Dr=Object.defineProperty,Gr=zr&&!Rr((function(){return 8!==Dr((function(){}),"length",{value:8}).length})),Hr=String(String).split("String"),_r=Un.exports=function(t,n,r){if("Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!kr(t,"name")||Mr&&t.name!==n)&&Dr(t,"name",{value:n,configurable:!0}),Gr&&r&&kr(r,"arity")&&t.length!==r.arity&&Dr(t,"length",{value:r.arity}),r&&kr(r,"constructor")&&r.constructor){if(zr)try{Dr(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var e=Nr(t);return kr(e,"source")||(e.source=Hr.join("string"==typeof n?n:"")),t};Function.prototype.toString=_r((function(){return Fr(this)&&Lr(this).source||Ir(this)}),"toString");var qr=i,Br=_,Ur=Bn,Kr=Un.exports,Wr=Pt,Jr={},Qr=Math.ceil,Vr=Math.floor,Xr=function(t){var n=+t;return n!=n||0===n?0:(n>0?Vr:Qr)(n)},Yr=Xr,$r=Math.max,Zr=Math.min,te=Xr,ne=Math.min,re=function(t){return t>0?ne(te(t),9007199254740991):0},ee=function(t){return re(t.length)},oe=H,ie=function(t,n){var r=Yr(t);return r<0?$r(r+n,0):Zr(r,n)},ue=ee,ce=function(t){return function(n,r,e){var o,i=oe(n),u=ue(i),c=ie(e,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},ae={includes:ce(!0),indexOf:ce(!1)},fe=Mt,le=H,se=ae.indexOf,pe=sr,ge=T([].push),ye=function(t,n){var r,e=le(t),o=0,i=[];for(r in e)!fe(pe,r)&&fe(e,r)&&ge(i,r);for(;n.length>o;)fe(e,r=n[o++])&&(~se(i,r)||ge(i,r));return i},be=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Jr.f=Object.getOwnPropertyNames||function(t){return ye(t,be)};var he={};he.f=Object.getOwnPropertySymbols;var me=J,de=Jr,ve=he,we=Cn,Se=T([].concat),je=me("Reflect","ownKeys")||function(t){var n=de.f(we(t)),r=ve.f;return r?Se(n,r(t)):n},Oe=Mt,Pe=je,Te=u,xe=On,Ee=c,Ae=_,Ce=/#|\.prototype\./,Re=function(t,n){var r=ke[Fe(t)];return r==Me||r!=ze&&(Ae(n)?Ee(n):!!n)},Fe=Re.normalize=function(t){return String(t).replace(Ce,".").toLowerCase()},ke=Re.data={},ze=Re.NATIVE="N",Me=Re.POLYFILL="P",Ie=Re,Ne=i,Le=u.f,De=Bn,Ge=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet,c=e&&void 0!==e.name?e.name:n;return Br(r)&&Kr(r,c,e),t===qr?(i?t[n]=r:Wr(n,r),t):(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=r:Ur(t,n,r),t)},He=Pt,_e=function(t,n,r){for(var e=Pe(n),o=xe.f,i=Te.f,u=0;u<e.length;u++){var c=e[u];Oe(t,c)||r&&Oe(r,c)||o(t,c,i(n,c))}},qe=Ie,Be=C,Ue=Array.isArray||function(t){return"Array"==Be(t)},Ke=an,We=On,Je=v,Qe={};Qe[Xt("toStringTag")]="z";var Ve=i,Xe="[object z]"===String(Qe),Ye=_,$e=C,Ze=Xt("toStringTag"),to=Ve.Object,no="Arguments"==$e(function(){return arguments}()),ro=T,eo=c,oo=_,io=Xe?$e:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=to(t),Ze))?r:no?$e(n):"Object"==(e=$e(n))&&Ye(n.callee)?"Arguments":e},uo=er,co=function(){},ao=[],fo=J("Reflect","construct"),lo=/^\s*(?:class|function)\b/,so=ro(lo.exec),po=!lo.exec(co),go=function(t){if(!oo(t))return!1;try{return fo(co,ao,t),!0}catch(t){return!1}},yo=function(t){if(!oo(t))return!1;switch(io(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return po||!!so(lo,uo(t))}catch(t){return!0}};yo.sham=!0;var bo=!fo||eo((function(){var t;return go(go.call)||!go(Object)||!go((function(){t=!0}))||t}))?yo:go,ho=i,mo=Ue,vo=bo,wo=B,So=Xt("species"),jo=ho.Array,Oo=function(t){var n;return mo(t)&&(n=t.constructor,(vo(n)&&(n===jo||mo(n.prototype))||wo(n)&&null===(n=n[So]))&&(n=void 0)),void 0===n?jo:n},Po=c,To=nt,xo=Xt("species"),Eo=function(t,n){var r,e,o,i,u,c=t.target,a=t.global,f=t.stat;if(r=a?Ne:f?Ne[c]||He(c,{}):(Ne[c]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(u=Le(r,e))&&u.value:r[e],!qe(a?e:c+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_e(i,o)}(t.sham||o&&o.sham)&&De(i,"sham",!0),Ge(r,e,i,t)}},Ao=i,Co=c,Ro=Ue,Fo=B,ko=Ft,zo=ee,Mo=function(t,n,r){var e=Ke(n);e in t?We.f(t,e,Je(0,r)):t[e]=r},Io=function(t,n){return new(Oo(t))(0===n?0:n)},No=function(t){return To>=51||!Po((function(){var n=[];return(n.constructor={})[xo]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},Lo=nt,Do=Xt("isConcatSpreadable"),Go=9007199254740991,Ho="Maximum allowed index exceeded",_o=Ao.TypeError,qo=Lo>=51||!Co((function(){var t=[];return t[Do]=!1,t.concat()[0]!==t})),Bo=No("concat"),Uo=function(t){if(!Fo(t))return!1;var n=t[Do];return void 0!==n?!!n:Ro(t)};Eo({target:"Array",proto:!0,arity:1,forced:!qo||!Bo},{concat:function(t){var n,r,e,o,i,u=ko(this),c=Io(u,0),a=0;for(n=-1,e=arguments.length;n<e;n++)if(Uo(i=-1===n?u:arguments[n])){if(a+(o=zo(i))>Go)throw _o(Ho);for(r=0;r<o;r++,a++)r in i&&Mo(c,a,i[r])}else{if(a>=Go)throw _o(Ho);Mo(c,a++,i)}return c.length=a,c}}),r.default.fn.bootstrapTable.locales["hr-HR"]=r.default.fn.bootstrapTable.locales.hr={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Molimo pričekajte"},formatRecordsPerPage:function(t){return"".concat(t," broj zapisa po stranici")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Prikazujem ".concat(t,". - ").concat(n,". od ukupnog broja zapisa ").concat(r," (filtered from ").concat(e," total rows)"):"Prikazujem ".concat(t,". - ").concat(n,". od ukupnog broja zapisa ").concat(r)},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatClearSearch:function(){return"Clear Search"},formatSearch:function(){return"Pretraži"},formatNoMatches:function(){return"Nije pronađen niti jedan zapis"},formatPaginationSwitch:function(){return"Prikaži/sakrij stranice"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Osvježi"},formatToggle:function(){return"Promijeni prikaz"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Kolone"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"Sve"},formatAutoRefresh:function(){return"Auto Refresh"},formatExport:function(){return"Export data"},formatJumpTo:function(){return"GO"},formatAdvancedSearch:function(){return"Advanced search"},formatAdvancedCloseButton:function(){return"Close"},formatFilterControlSwitch:function(){return"Hide/Show controls"},formatFilterControlSwitchHide:function(){return"Hide controls"},formatFilterControlSwitchShow:function(){return"Show controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["hr-HR"])}));
