/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=f(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},l.apply(this,arguments)}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=function(t){return t&&t.Math==Math&&t},y=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof s&&s)||function(){return this}()||Function("return this")(),b={},d=function(t){try{return!!t()}catch(t){return!0}},v=!d((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),h=!d((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),g=h,m=Function.prototype.call,w=g?m.bind(m):function(){return m.apply(m,arguments)},O={},j={}.propertyIsEnumerable,S=Object.getOwnPropertyDescriptor,P=S&&!j.call({1:2},1);O.f=P?function(t){var e=S(this,t);return!!e&&e.enumerable}:j;var T,E,x=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},A=h,R=Function.prototype,F=R.bind,_=R.call,k=A&&F.bind(_,_),C=A?function(t){return t&&k(t)}:function(t){return t&&function(){return _.apply(t,arguments)}},I=C,M=I({}.toString),z=I("".slice),B=function(t){return z(M(t),8,-1)},N=C,D=d,G=B,L=y.Object,J=N("".split),q=D((function(){return!L("z").propertyIsEnumerable(0)}))?function(t){return"String"==G(t)?J(t,""):L(t)}:L,W=y.TypeError,U=function(t){if(null==t)throw W("Can't call method on "+t);return t},X=q,$=U,K=function(t){return X($(t))},Q=function(t){return"function"==typeof t},V=Q,Y=function(t){return"object"==typeof t?null!==t:V(t)},H=y,Z=Q,tt=function(t){return Z(t)?t:void 0},et=function(t,e){return arguments.length<2?tt(H[t]):H[t]&&H[t][e]},nt=C({}.isPrototypeOf),rt=y,ot=et("navigator","userAgent")||"",it=rt.process,ut=rt.Deno,ct=it&&it.versions||ut&&ut.version,at=ct&&ct.v8;at&&(E=(T=at.split("."))[0]>0&&T[0]<4?1:+(T[0]+T[1])),!E&&ot&&(!(T=ot.match(/Edge\/(\d+)/))||T[1]>=74)&&(T=ot.match(/Chrome\/(\d+)/))&&(E=+T[1]);var ft=E,lt=ft,st=d,pt=!!Object.getOwnPropertySymbols&&!st((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&lt&&lt<41})),yt=pt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,bt=et,dt=Q,vt=nt,ht=yt,gt=y.Object,mt=ht?function(t){return"symbol"==typeof t}:function(t){var e=bt("Symbol");return dt(e)&&vt(e.prototype,gt(t))},wt=y.String,Ot=Q,jt=function(t){try{return wt(t)}catch(t){return"Object"}},St=y.TypeError,Pt=function(t){if(Ot(t))return t;throw St(jt(t)+" is not a function")},Tt=Pt,Et=w,xt=Q,At=Y,Rt=y.TypeError,Ft={exports:{}},_t=y,kt=Object.defineProperty,Ct=function(t,e){try{kt(_t,t,{value:e,configurable:!0,writable:!0})}catch(n){_t[t]=e}return e},It=Ct,Mt="__core-js_shared__",zt=y[Mt]||It(Mt,{}),Bt=zt;(Ft.exports=function(t,e){return Bt[t]||(Bt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var Nt=U,Dt=y.Object,Gt=function(t){return Dt(Nt(t))},Lt=Gt,Jt=C({}.hasOwnProperty),qt=Object.hasOwn||function(t,e){return Jt(Lt(t),e)},Wt=C,Ut=0,Xt=Math.random(),$t=Wt(1..toString),Kt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+$t(++Ut+Xt,36)},Qt=y,Vt=Ft.exports,Yt=qt,Ht=Kt,Zt=pt,te=yt,ee=Vt("wks"),ne=Qt.Symbol,re=ne&&ne.for,oe=te?ne:ne&&ne.withoutSetter||Ht,ie=function(t){if(!Yt(ee,t)||!Zt&&"string"!=typeof ee[t]){var e="Symbol."+t;Zt&&Yt(ne,t)?ee[t]=ne[t]:ee[t]=te&&re?re(e):oe(e)}return ee[t]},ue=w,ce=Y,ae=mt,fe=function(t,e){var n=t[e];return null==n?void 0:Tt(n)},le=function(t,e){var n,r;if("string"===e&&xt(n=t.toString)&&!At(r=Et(n,t)))return r;if(xt(n=t.valueOf)&&!At(r=Et(n,t)))return r;if("string"!==e&&xt(n=t.toString)&&!At(r=Et(n,t)))return r;throw Rt("Can't convert object to primitive value")},se=ie,pe=y.TypeError,ye=se("toPrimitive"),be=function(t,e){if(!ce(t)||ae(t))return t;var n,r=fe(t,ye);if(r){if(void 0===e&&(e="default"),n=ue(r,t,e),!ce(n)||ae(n))return n;throw pe("Can't convert object to primitive value")}return void 0===e&&(e="number"),le(t,e)},de=mt,ve=function(t){var e=be(t,"string");return de(e)?e:e+""},he=Y,ge=y.document,me=he(ge)&&he(ge.createElement),we=function(t){return me?ge.createElement(t):{}},Oe=we,je=!v&&!d((function(){return 7!=Object.defineProperty(Oe("div"),"a",{get:function(){return 7}}).a})),Se=v,Pe=w,Te=O,Ee=x,xe=K,Ae=ve,Re=qt,Fe=je,_e=Object.getOwnPropertyDescriptor;b.f=Se?_e:function(t,e){if(t=xe(t),e=Ae(e),Fe)try{return _e(t,e)}catch(t){}if(Re(t,e))return Ee(!Pe(Te.f,t,e),t[e])};var ke={},Ce=v&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Ie=y,Me=Y,ze=Ie.String,Be=Ie.TypeError,Ne=function(t){if(Me(t))return t;throw Be(ze(t)+" is not an object")},De=v,Ge=je,Le=Ce,Je=Ne,qe=ve,We=y.TypeError,Ue=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,$e="enumerable",Ke="configurable",Qe="writable";ke.f=De?Le?function(t,e,n){if(Je(t),e=qe(e),Je(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Qe in n&&!n.writable){var r=Xe(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Ke in n?n.configurable:r.configurable,enumerable:$e in n?n.enumerable:r.enumerable,writable:!1})}return Ue(t,e,n)}:Ue:function(t,e,n){if(Je(t),e=qe(e),Je(n),Ge)try{return Ue(t,e,n)}catch(t){}if("get"in n||"set"in n)throw We("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Ve=ke,Ye=x,He=v?function(t,e,n){return Ve.f(t,e,Ye(1,n))}:function(t,e,n){return t[e]=n,t},Ze={exports:{}},tn=v,en=qt,nn=Function.prototype,rn=tn&&Object.getOwnPropertyDescriptor,on=en(nn,"name"),un={EXISTS:on,PROPER:on&&"something"===function(){}.name,CONFIGURABLE:on&&(!tn||tn&&rn(nn,"name").configurable)},cn=Q,an=zt,fn=C(Function.toString);cn(an.inspectSource)||(an.inspectSource=function(t){return fn(t)});var ln,sn,pn,yn=an.inspectSource,bn=Q,dn=yn,vn=y.WeakMap,hn=bn(vn)&&/native code/.test(dn(vn)),gn=Ft.exports,mn=Kt,wn=gn("keys"),On=function(t){return wn[t]||(wn[t]=mn(t))},jn={},Sn=hn,Pn=y,Tn=C,En=Y,xn=He,An=qt,Rn=zt,Fn=On,_n=jn,kn="Object already initialized",Cn=Pn.TypeError,In=Pn.WeakMap;if(Sn||Rn.state){var Mn=Rn.state||(Rn.state=new In),zn=Tn(Mn.get),Bn=Tn(Mn.has),Nn=Tn(Mn.set);ln=function(t,e){if(Bn(Mn,t))throw new Cn(kn);return e.facade=t,Nn(Mn,t,e),e},sn=function(t){return zn(Mn,t)||{}},pn=function(t){return Bn(Mn,t)}}else{var Dn=Fn("state");_n[Dn]=!0,ln=function(t,e){if(An(t,Dn))throw new Cn(kn);return e.facade=t,xn(t,Dn,e),e},sn=function(t){return An(t,Dn)?t[Dn]:{}},pn=function(t){return An(t,Dn)}}var Gn={set:ln,get:sn,has:pn,enforce:function(t){return pn(t)?sn(t):ln(t,{})},getterFor:function(t){return function(e){var n;if(!En(e)||(n=sn(e)).type!==t)throw Cn("Incompatible receiver, "+t+" required");return n}}},Ln=d,Jn=Q,qn=qt,Wn=v,Un=un.CONFIGURABLE,Xn=yn,$n=Gn.enforce,Kn=Gn.get,Qn=Object.defineProperty,Vn=Wn&&!Ln((function(){return 8!==Qn((function(){}),"length",{value:8}).length})),Yn=String(String).split("String"),Hn=Ze.exports=function(t,e,n){if("Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!qn(t,"name")||Un&&t.name!==e)&&Qn(t,"name",{value:e,configurable:!0}),Vn&&n&&qn(n,"arity")&&t.length!==n.arity&&Qn(t,"length",{value:n.arity}),n&&qn(n,"constructor")&&n.constructor){if(Wn)try{Qn(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var r=$n(t);return qn(r,"source")||(r.source=Yn.join("string"==typeof e?e:"")),t};Function.prototype.toString=Hn((function(){return Jn(this)&&Kn(this).source||Xn(this)}),"toString");var Zn=y,tr=Q,er=He,nr=Ze.exports,rr=Ct,or=function(t,e,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:e;return tr(n)&&nr(n,c,r),t===Zn?(i?t[e]=n:rr(e,n),t):(o?!u&&t[e]&&(i=!0):delete t[e],i?t[e]=n:er(t,e,n),t)},ir={},ur=Math.ceil,cr=Math.floor,ar=function(t){var e=+t;return e!=e||0===e?0:(e>0?cr:ur)(e)},fr=ar,lr=Math.max,sr=Math.min,pr=ar,yr=Math.min,br=function(t){return t>0?yr(pr(t),9007199254740991):0},dr=function(t){return br(t.length)},vr=K,hr=function(t,e){var n=fr(t);return n<0?lr(n+e,0):sr(n,e)},gr=dr,mr=function(t){return function(e,n,r){var o,i=vr(e),u=gr(i),c=hr(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},wr={includes:mr(!0),indexOf:mr(!1)},Or=qt,jr=K,Sr=wr.indexOf,Pr=jn,Tr=C([].push),Er=function(t,e){var n,r=jr(t),o=0,i=[];for(n in r)!Or(Pr,n)&&Or(r,n)&&Tr(i,n);for(;e.length>o;)Or(r,n=e[o++])&&(~Sr(i,n)||Tr(i,n));return i},xr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ar=Er,Rr=xr.concat("length","prototype");ir.f=Object.getOwnPropertyNames||function(t){return Ar(t,Rr)};var Fr={};Fr.f=Object.getOwnPropertySymbols;var _r=et,kr=ir,Cr=Fr,Ir=Ne,Mr=C([].concat),zr=_r("Reflect","ownKeys")||function(t){var e=kr.f(Ir(t)),n=Cr.f;return n?Mr(e,n(t)):e},Br=qt,Nr=zr,Dr=b,Gr=ke,Lr=d,Jr=Q,qr=/#|\.prototype\./,Wr=function(t,e){var n=Xr[Ur(t)];return n==Kr||n!=$r&&(Jr(e)?Lr(e):!!e)},Ur=Wr.normalize=function(t){return String(t).replace(qr,".").toLowerCase()},Xr=Wr.data={},$r=Wr.NATIVE="N",Kr=Wr.POLYFILL="P",Qr=Wr,Vr=y,Yr=b.f,Hr=He,Zr=or,to=Ct,eo=function(t,e,n){for(var r=Nr(e),o=Gr.f,i=Dr.f,u=0;u<r.length;u++){var c=r[u];Br(t,c)||n&&Br(n,c)||o(t,c,i(e,c))}},no=Qr,ro=function(t,e){var n,r,o,i,u,c=t.target,a=t.global,f=t.stat;if(n=a?Vr:f?Vr[c]||to(c,{}):(Vr[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(u=Yr(n,r))&&u.value:n[r],!no(a?r:c+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;eo(i,o)}(t.sham||o&&o.sham)&&Hr(i,"sham",!0),Zr(n,r,i,t)}},oo=B,io=Array.isArray||function(t){return"Array"==oo(t)},uo=ve,co=ke,ao=x,fo={};fo[ie("toStringTag")]="z";var lo="[object z]"===String(fo),so=y,po=lo,yo=Q,bo=B,vo=ie("toStringTag"),ho=so.Object,go="Arguments"==bo(function(){return arguments}()),mo=po?bo:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=ho(t),vo))?n:go?bo(e):"Object"==(r=bo(e))&&yo(e.callee)?"Arguments":r},wo=C,Oo=d,jo=Q,So=mo,Po=yn,To=function(){},Eo=[],xo=et("Reflect","construct"),Ao=/^\s*(?:class|function)\b/,Ro=wo(Ao.exec),Fo=!Ao.exec(To),_o=function(t){if(!jo(t))return!1;try{return xo(To,Eo,t),!0}catch(t){return!1}},ko=function(t){if(!jo(t))return!1;switch(So(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Fo||!!Ro(Ao,Po(t))}catch(t){return!0}};ko.sham=!0;var Co=!xo||Oo((function(){var t;return _o(_o.call)||!_o(Object)||!_o((function(){t=!0}))||t}))?ko:_o,Io=y,Mo=io,zo=Co,Bo=Y,No=ie("species"),Do=Io.Array,Go=function(t){var e;return Mo(t)&&(e=t.constructor,(zo(e)&&(e===Do||Mo(e.prototype))||Bo(e)&&null===(e=e[No]))&&(e=void 0)),void 0===e?Do:e},Lo=function(t,e){return new(Go(t))(0===e?0:e)},Jo=d,qo=ft,Wo=ie("species"),Uo=ro,Xo=y,$o=d,Ko=io,Qo=Y,Vo=Gt,Yo=dr,Ho=function(t,e,n){var r=uo(e);r in t?co.f(t,r,ao(0,n)):t[r]=n},Zo=Lo,ti=function(t){return qo>=51||!Jo((function(){var e=[];return(e.constructor={})[Wo]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},ei=ft,ni=ie("isConcatSpreadable"),ri=9007199254740991,oi="Maximum allowed index exceeded",ii=Xo.TypeError,ui=ei>=51||!$o((function(){var t=[];return t[ni]=!1,t.concat()[0]!==t})),ci=ti("concat"),ai=function(t){if(!Qo(t))return!1;var e=t[ni];return void 0!==e?!!e:Ko(t)};Uo({target:"Array",proto:!0,arity:1,forced:!ui||!ci},{concat:function(t){var e,n,r,o,i,u=Vo(this),c=Zo(u,0),a=0;for(e=-1,r=arguments.length;e<r;e++)if(ai(i=-1===e?u:arguments[e])){if(a+(o=Yo(i))>ri)throw ii(oi);for(n=0;n<o;n++,a++)n in i&&Ho(c,a,i[n])}else{if(a>=ri)throw ii(oi);Ho(c,a++,i)}return c.length=a,c}});var fi=Pt,li=h,si=C(C.bind),pi=function(t,e){return fi(t),void 0===e?t:li?si(t,e):function(){return t.apply(e,arguments)}},yi=q,bi=Gt,di=dr,vi=Lo,hi=C([].push),gi=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,u=7==t,c=5==t||i;return function(a,f,l,s){for(var p,y,b=bi(a),d=yi(b),v=pi(f,l),h=di(d),g=0,m=s||vi,w=e?m(a,h):n||u?m(a,0):void 0;h>g;g++)if((c||g in d)&&(y=v(p=d[g],g,b),t))if(e)w[g]=y;else if(y)switch(t){case 3:return!0;case 5:return p;case 6:return g;case 2:hi(w,p)}else switch(t){case 4:return!1;case 7:hi(w,p)}return i?-1:r||o?o:w}},mi={forEach:gi(0),map:gi(1),filter:gi(2),some:gi(3),every:gi(4),find:gi(5),findIndex:gi(6),filterReject:gi(7)},wi={},Oi=Er,ji=xr,Si=Object.keys||function(t){return Oi(t,ji)},Pi=v,Ti=Ce,Ei=ke,xi=Ne,Ai=K,Ri=Si;wi.f=Pi&&!Ti?Object.defineProperties:function(t,e){xi(t);for(var n,r=Ai(e),o=Ri(e),i=o.length,u=0;i>u;)Ei.f(t,n=o[u++],r[n]);return t};var Fi,_i=et("document","documentElement"),ki=Ne,Ci=wi,Ii=xr,Mi=jn,zi=_i,Bi=we,Ni=On("IE_PROTO"),Di=function(){},Gi=function(t){return"<script>"+t+"</"+"script>"},Li=function(t){t.write(Gi("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ji=function(){try{Fi=new ActiveXObject("htmlfile")}catch(t){}var t,e;Ji="undefined"!=typeof document?document.domain&&Fi?Li(Fi):((e=Bi("iframe")).style.display="none",zi.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Gi("document.F=Object")),t.close(),t.F):Li(Fi);for(var n=Ii.length;n--;)delete Ji.prototype[Ii[n]];return Ji()};Mi[Ni]=!0;var qi=Object.create||function(t,e){var n;return null!==t?(Di.prototype=ki(t),n=new Di,Di.prototype=null,n[Ni]=t):n=Ji(),void 0===e?n:Ci.f(n,e)},Wi=ke,Ui=ie("unscopables"),Xi=Array.prototype;null==Xi[Ui]&&Wi.f(Xi,Ui,{configurable:!0,value:qi(null)});var $i=ro,Ki=mi.find,Qi=function(t){Xi[Ui][t]=!0},Vi="find",Yi=!0;Vi in[]&&Array(1).find((function(){Yi=!1})),$i({target:"Array",proto:!0,forced:Yi},{find:function(t){return Ki(this,t,arguments.length>1?arguments[1]:void 0)}}),Qi(Vi);var Hi=mo,Zi=lo?{}.toString:function(){return"[object "+Hi(this)+"]"};lo||or(Object.prototype,"toString",Zi,{unsafe:!0});var tu=n.default.fn.bootstrapTable.utils;n.default.extend(n.default.fn.bootstrapTable.defaults,{showJumpTo:!1,showJumpToByPages:0}),n.default.extend(n.default.fn.bootstrapTable.locales,{formatJumpTo:function(){return"GO"}}),n.default.extend(n.default.fn.bootstrapTable.defaults,n.default.fn.bootstrapTable.locales),n.default.BootstrapTable=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(p,t);var e,c,f,s=a(p);function p(){return r(this,p),s.apply(this,arguments)}return e=p,c=[{key:"initPagination",value:function(){for(var t,e=this,r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];if((t=l(i(p.prototype),"initPagination",this)).call.apply(t,[this].concat(o)),this.options.showJumpTo&&this.totalPages>=this.options.showJumpToByPages){var c=this.$pagination.find("> .pagination"),a=c.find(".page-jump-to");if(!a.length){var f=(a=n.default(tu.sprintf(this.constants.html.inputGroup,'<input type="number"\n            class="'.concat(this.constants.classes.input).concat(tu.sprintf(" %s%s",this.constants.classes.inputPrefix,this.options.iconSize),'"\n            value="').concat(this.options.pageNumber,'"\n            min="1"\n            max="').concat(this.totalPages,'">'),'<button class="'.concat(this.constants.buttonsClass,'"  type="button">\n          ').concat(this.options.formatJumpTo(),"\n          </button>"))).addClass("page-jump-to").appendTo(c)).find("input");a.find("button").click((function(){e.selectPage(+f.val())})),f.keyup((function(t){""!==f.val()&&(13!==t.keyCode?+f.val()<+f.attr("min")?f.val(f.attr("min")):+f.val()>+f.attr("max")&&f.val(f.attr("max")):e.selectPage(+f.val()))})),f.blur((function(){""===f.val()&&f.val(e.options.pageNumber)}))}}}}],c&&o(e.prototype,c),f&&o(e,f),Object.defineProperty(e,"prototype",{writable:!1}),p}(n.default.BootstrapTable)}));
