/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u={},c=function(t){try{return!!t()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=!c((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),l=f,s=Function.prototype.call,p=l?s.bind(s):function(){return s.apply(s,arguments)},y={},g={}.propertyIsEnumerable,b=Object.getOwnPropertyDescriptor,d=b&&!g.call({1:2},1);y.f=d?function(t){var n=b(this,t);return!!n&&n.enumerable}:g;var h,m,v=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},w=f,S=Function.prototype,O=S.bind,j=S.call,P=w&&O.bind(j,j),T=w?function(t){return t&&P(t)}:function(t){return t&&function(){return j.apply(t,arguments)}},x=T,E=x({}.toString),A=x("".slice),C=function(t){return A(E(t),8,-1)},R=T,F=c,k=C,M=i.Object,I=R("".split),D=F((function(){return!M("z").propertyIsEnumerable(0)}))?function(t){return"String"==k(t)?I(t,""):M(t)}:M,L=i.TypeError,N=function(t){if(null==t)throw L("Can't call method on "+t);return t},z=D,G=N,H=function(t){return z(G(t))},_=function(t){return"function"==typeof t},q=_,B=function(t){return"object"==typeof t?null!==t:q(t)},U=i,Y=_,W=function(t){return Y(t)?t:void 0},J=function(t,n){return arguments.length<2?W(U[t]):U[t]&&U[t][n]},K=T({}.isPrototypeOf),Q=i,V=J("navigator","userAgent")||"",X=Q.process,$=Q.Deno,Z=X&&X.versions||$&&$.version,tt=Z&&Z.v8;tt&&(m=(h=tt.split("."))[0]>0&&h[0]<4?1:+(h[0]+h[1])),!m&&V&&(!(h=V.match(/Edge\/(\d+)/))||h[1]>=74)&&(h=V.match(/Chrome\/(\d+)/))&&(m=+h[1]);var nt=m,rt=nt,et=c,ot=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=J,ct=_,at=K,ft=it,lt=i.Object,st=ft?function(t){return"symbol"==typeof t}:function(t){var n=ut("Symbol");return ct(n)&&at(n.prototype,lt(t))},pt=i.String,yt=_,gt=function(t){try{return pt(t)}catch(t){return"Object"}},bt=i.TypeError,dt=function(t){if(yt(t))return t;throw bt(gt(t)+" is not a function")},ht=p,mt=_,vt=B,wt=i.TypeError,St={exports:{}},Ot=i,jt=Object.defineProperty,Pt=function(t,n){try{jt(Ot,t,{value:n,configurable:!0,writable:!0})}catch(r){Ot[t]=n}return n},Tt=Pt,xt="__core-js_shared__",Et=i[xt]||Tt(xt,{}),At=Et;(St.exports=function(t,n){return At[t]||(At[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var Ct=N,Rt=i.Object,Ft=function(t){return Rt(Ct(t))},kt=Ft,Mt=T({}.hasOwnProperty),It=Object.hasOwn||function(t,n){return Mt(kt(t),n)},Dt=T,Lt=0,Nt=Math.random(),zt=Dt(1..toString),Gt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+zt(++Lt+Nt,36)},Ht=i,_t=St.exports,qt=It,Bt=Gt,Ut=ot,Yt=it,Wt=_t("wks"),Jt=Ht.Symbol,Kt=Jt&&Jt.for,Qt=Yt?Jt:Jt&&Jt.withoutSetter||Bt,Vt=function(t){if(!qt(Wt,t)||!Ut&&"string"!=typeof Wt[t]){var n="Symbol."+t;Ut&&qt(Jt,t)?Wt[t]=Jt[t]:Wt[t]=Yt&&Kt?Kt(n):Qt(n)}return Wt[t]},Xt=p,$t=B,Zt=st,tn=function(t,n){var r=t[n];return null==r?void 0:dt(r)},nn=function(t,n){var r,e;if("string"===n&&mt(r=t.toString)&&!vt(e=ht(r,t)))return e;if(mt(r=t.valueOf)&&!vt(e=ht(r,t)))return e;if("string"!==n&&mt(r=t.toString)&&!vt(e=ht(r,t)))return e;throw wt("Can't convert object to primitive value")},rn=Vt,en=i.TypeError,on=rn("toPrimitive"),un=function(t,n){if(!$t(t)||Zt(t))return t;var r,e=tn(t,on);if(e){if(void 0===n&&(n="default"),r=Xt(e,t,n),!$t(r)||Zt(r))return r;throw en("Can't convert object to primitive value")}return void 0===n&&(n="number"),nn(t,n)},cn=st,an=function(t){var n=un(t,"string");return cn(n)?n:n+""},fn=B,ln=i.document,sn=fn(ln)&&fn(ln.createElement),pn=function(t){return sn?ln.createElement(t):{}},yn=!a&&!c((function(){return 7!=Object.defineProperty(pn("div"),"a",{get:function(){return 7}}).a})),gn=a,bn=p,dn=y,hn=v,mn=H,vn=an,wn=It,Sn=yn,On=Object.getOwnPropertyDescriptor;u.f=gn?On:function(t,n){if(t=mn(t),n=vn(n),Sn)try{return On(t,n)}catch(t){}if(wn(t,n))return hn(!bn(dn.f,t,n),t[n])};var jn={},Pn=a&&c((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Tn=i,xn=B,En=Tn.String,An=Tn.TypeError,Cn=function(t){if(xn(t))return t;throw An(En(t)+" is not an object")},Rn=a,Fn=yn,kn=Pn,Mn=Cn,In=an,Dn=i.TypeError,Ln=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,zn="enumerable",Gn="configurable",Hn="writable";jn.f=Rn?kn?function(t,n,r){if(Mn(t),n=In(n),Mn(r),"function"==typeof t&&"prototype"===n&&"value"in r&&Hn in r&&!r.writable){var e=Nn(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:Gn in r?r.configurable:e.configurable,enumerable:zn in r?r.enumerable:e.enumerable,writable:!1})}return Ln(t,n,r)}:Ln:function(t,n,r){if(Mn(t),n=In(n),Mn(r),Fn)try{return Ln(t,n,r)}catch(t){}if("get"in r||"set"in r)throw Dn("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var _n=jn,qn=v,Bn=a?function(t,n,r){return _n.f(t,n,qn(1,r))}:function(t,n,r){return t[n]=r,t},Un={exports:{}},Yn=a,Wn=It,Jn=Function.prototype,Kn=Yn&&Object.getOwnPropertyDescriptor,Qn=Wn(Jn,"name"),Vn={EXISTS:Qn,PROPER:Qn&&"something"===function(){}.name,CONFIGURABLE:Qn&&(!Yn||Yn&&Kn(Jn,"name").configurable)},Xn=_,$n=Et,Zn=T(Function.toString);Xn($n.inspectSource)||($n.inspectSource=function(t){return Zn(t)});var tr,nr,rr,er=$n.inspectSource,or=_,ir=er,ur=i.WeakMap,cr=or(ur)&&/native code/.test(ir(ur)),ar=St.exports,fr=Gt,lr=ar("keys"),sr={},pr=cr,yr=i,gr=T,br=B,dr=Bn,hr=It,mr=Et,vr=function(t){return lr[t]||(lr[t]=fr(t))},wr=sr,Sr="Object already initialized",Or=yr.TypeError,jr=yr.WeakMap;if(pr||mr.state){var Pr=mr.state||(mr.state=new jr),Tr=gr(Pr.get),xr=gr(Pr.has),Er=gr(Pr.set);tr=function(t,n){if(xr(Pr,t))throw new Or(Sr);return n.facade=t,Er(Pr,t,n),n},nr=function(t){return Tr(Pr,t)||{}},rr=function(t){return xr(Pr,t)}}else{var Ar=vr("state");wr[Ar]=!0,tr=function(t,n){if(hr(t,Ar))throw new Or(Sr);return n.facade=t,dr(t,Ar,n),n},nr=function(t){return hr(t,Ar)?t[Ar]:{}},rr=function(t){return hr(t,Ar)}}var Cr={set:tr,get:nr,has:rr,enforce:function(t){return rr(t)?nr(t):tr(t,{})},getterFor:function(t){return function(n){var r;if(!br(n)||(r=nr(n)).type!==t)throw Or("Incompatible receiver, "+t+" required");return r}}},Rr=c,Fr=_,kr=It,Mr=a,Ir=Vn.CONFIGURABLE,Dr=er,Lr=Cr.enforce,Nr=Cr.get,zr=Object.defineProperty,Gr=Mr&&!Rr((function(){return 8!==zr((function(){}),"length",{value:8}).length})),Hr=String(String).split("String"),_r=Un.exports=function(t,n,r){if("Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!kr(t,"name")||Ir&&t.name!==n)&&zr(t,"name",{value:n,configurable:!0}),Gr&&r&&kr(r,"arity")&&t.length!==r.arity&&zr(t,"length",{value:r.arity}),r&&kr(r,"constructor")&&r.constructor){if(Mr)try{zr(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var e=Lr(t);return kr(e,"source")||(e.source=Hr.join("string"==typeof n?n:"")),t};Function.prototype.toString=_r((function(){return Fr(this)&&Nr(this).source||Dr(this)}),"toString");var qr=i,Br=_,Ur=Bn,Yr=Un.exports,Wr=Pt,Jr={},Kr=Math.ceil,Qr=Math.floor,Vr=function(t){var n=+t;return n!=n||0===n?0:(n>0?Qr:Kr)(n)},Xr=Vr,$r=Math.max,Zr=Math.min,te=Vr,ne=Math.min,re=function(t){return t>0?ne(te(t),9007199254740991):0},ee=function(t){return re(t.length)},oe=H,ie=function(t,n){var r=Xr(t);return r<0?$r(r+n,0):Zr(r,n)},ue=ee,ce=function(t){return function(n,r,e){var o,i=oe(n),u=ue(i),c=ie(e,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},ae={includes:ce(!0),indexOf:ce(!1)},fe=It,le=H,se=ae.indexOf,pe=sr,ye=T([].push),ge=function(t,n){var r,e=le(t),o=0,i=[];for(r in e)!fe(pe,r)&&fe(e,r)&&ye(i,r);for(;n.length>o;)fe(e,r=n[o++])&&(~se(i,r)||ye(i,r));return i},be=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Jr.f=Object.getOwnPropertyNames||function(t){return ge(t,be)};var de={};de.f=Object.getOwnPropertySymbols;var he=J,me=Jr,ve=de,we=Cn,Se=T([].concat),Oe=he("Reflect","ownKeys")||function(t){var n=me.f(we(t)),r=ve.f;return r?Se(n,r(t)):n},je=It,Pe=Oe,Te=u,xe=jn,Ee=c,Ae=_,Ce=/#|\.prototype\./,Re=function(t,n){var r=ke[Fe(t)];return r==Ie||r!=Me&&(Ae(n)?Ee(n):!!n)},Fe=Re.normalize=function(t){return String(t).replace(Ce,".").toLowerCase()},ke=Re.data={},Me=Re.NATIVE="N",Ie=Re.POLYFILL="P",De=Re,Le=i,Ne=u.f,ze=Bn,Ge=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet,c=e&&void 0!==e.name?e.name:n;return Br(r)&&Yr(r,c,e),t===qr?(i?t[n]=r:Wr(n,r),t):(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=r:Ur(t,n,r),t)},He=Pt,_e=function(t,n,r){for(var e=Pe(n),o=xe.f,i=Te.f,u=0;u<e.length;u++){var c=e[u];je(t,c)||r&&je(r,c)||o(t,c,i(n,c))}},qe=De,Be=C,Ue=Array.isArray||function(t){return"Array"==Be(t)},Ye=an,We=jn,Je=v,Ke={};Ke[Vt("toStringTag")]="z";var Qe=i,Ve="[object z]"===String(Ke),Xe=_,$e=C,Ze=Vt("toStringTag"),to=Qe.Object,no="Arguments"==$e(function(){return arguments}()),ro=T,eo=c,oo=_,io=Ve?$e:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=to(t),Ze))?r:no?$e(n):"Object"==(e=$e(n))&&Xe(n.callee)?"Arguments":e},uo=er,co=function(){},ao=[],fo=J("Reflect","construct"),lo=/^\s*(?:class|function)\b/,so=ro(lo.exec),po=!lo.exec(co),yo=function(t){if(!oo(t))return!1;try{return fo(co,ao,t),!0}catch(t){return!1}},go=function(t){if(!oo(t))return!1;switch(io(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return po||!!so(lo,uo(t))}catch(t){return!0}};go.sham=!0;var bo=!fo||eo((function(){var t;return yo(yo.call)||!yo(Object)||!yo((function(){t=!0}))||t}))?go:yo,ho=i,mo=Ue,vo=bo,wo=B,So=Vt("species"),Oo=ho.Array,jo=function(t){var n;return mo(t)&&(n=t.constructor,(vo(n)&&(n===Oo||mo(n.prototype))||wo(n)&&null===(n=n[So]))&&(n=void 0)),void 0===n?Oo:n},Po=c,To=nt,xo=Vt("species"),Eo=function(t,n){var r,e,o,i,u,c=t.target,a=t.global,f=t.stat;if(r=a?Le:f?Le[c]||He(c,{}):(Le[c]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(u=Ne(r,e))&&u.value:r[e],!qe(a?e:c+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_e(i,o)}(t.sham||o&&o.sham)&&ze(i,"sham",!0),Ge(r,e,i,t)}},Ao=i,Co=c,Ro=Ue,Fo=B,ko=Ft,Mo=ee,Io=function(t,n,r){var e=Ye(n);e in t?We.f(t,e,Je(0,r)):t[e]=r},Do=function(t,n){return new(jo(t))(0===n?0:n)},Lo=function(t){return To>=51||!Po((function(){var n=[];return(n.constructor={})[xo]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},No=nt,zo=Vt("isConcatSpreadable"),Go=9007199254740991,Ho="Maximum allowed index exceeded",_o=Ao.TypeError,qo=No>=51||!Co((function(){var t=[];return t[zo]=!1,t.concat()[0]!==t})),Bo=Lo("concat"),Uo=function(t){if(!Fo(t))return!1;var n=t[zo];return void 0!==n?!!n:Ro(t)};Eo({target:"Array",proto:!0,arity:1,forced:!qo||!Bo},{concat:function(t){var n,r,e,o,i,u=ko(this),c=Do(u,0),a=0;for(n=-1,e=arguments.length;n<e;n++)if(Uo(i=-1===n?u:arguments[n])){if(a+(o=Mo(i))>Go)throw _o(Ho);for(r=0;r<o;r++,a++)r in i&&Io(c,a,i[r])}else{if(a>=Go)throw _o(Ho);Io(c,a++,i)}return c.length=a,c}}),r.default.fn.bootstrapTable.locales["tr-TR"]=r.default.fn.bootstrapTable.locales.tr={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Yükleniyor, lütfen bekleyin"},formatRecordsPerPage:function(t){return"Sayfa başına ".concat(t," kayıt.")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"".concat(r," kayıttan ").concat(t,"-").concat(n," arası gösteriliyor (filtered from ").concat(e," total rows)."):"".concat(r," kayıttan ").concat(t,"-").concat(n," arası gösteriliyor.")},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatClearSearch:function(){return"Clear Search"},formatSearch:function(){return"Ara"},formatNoMatches:function(){return"Eşleşen kayıt bulunamadı."},formatPaginationSwitch:function(){return"Hide/Show pagination"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Yenile"},formatToggle:function(){return"Değiştir"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Sütunlar"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"Tüm Satırlar"},formatAutoRefresh:function(){return"Auto Refresh"},formatExport:function(){return"Export data"},formatJumpTo:function(){return"GO"},formatAdvancedSearch:function(){return"Advanced search"},formatAdvancedCloseButton:function(){return"Close"},formatFilterControlSwitch:function(){return"Hide/Show controls"},formatFilterControlSwitchHide:function(){return"Hide controls"},formatFilterControlSwitchShow:function(){return"Show controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["tr-TR"])}));