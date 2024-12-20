/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=f(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},l.apply(this,arguments)}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=function(t){return t&&t.Math==Math&&t},y=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof s&&s)||function(){return this}()||Function("return this")(),d={},b=function(t){try{return!!t()}catch(t){return!0}},h=!b((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),v=!b((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),g=v,m=Function.prototype.call,w=g?m.bind(m):function(){return m.apply(m,arguments)},O={},j={}.propertyIsEnumerable,S=Object.getOwnPropertyDescriptor,T=S&&!j.call({1:2},1);O.f=T?function(t){var e=S(this,t);return!!e&&e.enumerable}:j;var P,C,E=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},R=v,x=Function.prototype,A=x.bind,F=x.call,_=R&&A.bind(F,F),k=R?function(t){return t&&_(t)}:function(t){return t&&function(){return F.apply(t,arguments)}},B=k,I=B({}.toString),D=B("".slice),M=function(t){return D(I(t),8,-1)},z=k,N=b,L=M,W=y.Object,G=z("".split),q=N((function(){return!W("z").propertyIsEnumerable(0)}))?function(t){return"String"==L(t)?G(t,""):W(t)}:W,$=y.TypeError,H=function(t){if(null==t)throw $("Can't call method on "+t);return t},U=q,V=H,X=function(t){return U(V(t))},K=function(t){return"function"==typeof t},Q=K,Y=function(t){return"object"==typeof t?null!==t:Q(t)},J=y,Z=K,tt=function(t){return Z(t)?t:void 0},et=function(t,e){return arguments.length<2?tt(J[t]):J[t]&&J[t][e]},nt=k({}.isPrototypeOf),rt=y,ot=et("navigator","userAgent")||"",it=rt.process,ut=rt.Deno,ct=it&&it.versions||ut&&ut.version,at=ct&&ct.v8;at&&(C=(P=at.split("."))[0]>0&&P[0]<4?1:+(P[0]+P[1])),!C&&ot&&(!(P=ot.match(/Edge\/(\d+)/))||P[1]>=74)&&(P=ot.match(/Chrome\/(\d+)/))&&(C=+P[1]);var ft=C,lt=ft,st=b,pt=!!Object.getOwnPropertySymbols&&!st((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&lt&&lt<41})),yt=pt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,dt=et,bt=K,ht=nt,vt=yt,gt=y.Object,mt=vt?function(t){return"symbol"==typeof t}:function(t){var e=dt("Symbol");return bt(e)&&ht(e.prototype,gt(t))},wt=y.String,Ot=K,jt=function(t){try{return wt(t)}catch(t){return"Object"}},St=y.TypeError,Tt=function(t){if(Ot(t))return t;throw St(jt(t)+" is not a function")},Pt=Tt,Ct=w,Et=K,Rt=Y,xt=y.TypeError,At={exports:{}},Ft=y,_t=Object.defineProperty,kt=function(t,e){try{_t(Ft,t,{value:e,configurable:!0,writable:!0})}catch(n){Ft[t]=e}return e},Bt=kt,It="__core-js_shared__",Dt=y[It]||Bt(It,{}),Mt=Dt;(At.exports=function(t,e){return Mt[t]||(Mt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var zt=H,Nt=y.Object,Lt=function(t){return Nt(zt(t))},Wt=Lt,Gt=k({}.hasOwnProperty),qt=Object.hasOwn||function(t,e){return Gt(Wt(t),e)},$t=k,Ht=0,Ut=Math.random(),Vt=$t(1..toString),Xt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Vt(++Ht+Ut,36)},Kt=y,Qt=At.exports,Yt=qt,Jt=Xt,Zt=pt,te=yt,ee=Qt("wks"),ne=Kt.Symbol,re=ne&&ne.for,oe=te?ne:ne&&ne.withoutSetter||Jt,ie=function(t){if(!Yt(ee,t)||!Zt&&"string"!=typeof ee[t]){var e="Symbol."+t;Zt&&Yt(ne,t)?ee[t]=ne[t]:ee[t]=te&&re?re(e):oe(e)}return ee[t]},ue=w,ce=Y,ae=mt,fe=function(t,e){var n=t[e];return null==n?void 0:Pt(n)},le=function(t,e){var n,r;if("string"===e&&Et(n=t.toString)&&!Rt(r=Ct(n,t)))return r;if(Et(n=t.valueOf)&&!Rt(r=Ct(n,t)))return r;if("string"!==e&&Et(n=t.toString)&&!Rt(r=Ct(n,t)))return r;throw xt("Can't convert object to primitive value")},se=ie,pe=y.TypeError,ye=se("toPrimitive"),de=function(t,e){if(!ce(t)||ae(t))return t;var n,r=fe(t,ye);if(r){if(void 0===e&&(e="default"),n=ue(r,t,e),!ce(n)||ae(n))return n;throw pe("Can't convert object to primitive value")}return void 0===e&&(e="number"),le(t,e)},be=mt,he=function(t){var e=de(t,"string");return be(e)?e:e+""},ve=Y,ge=y.document,me=ve(ge)&&ve(ge.createElement),we=function(t){return me?ge.createElement(t):{}},Oe=we,je=!h&&!b((function(){return 7!=Object.defineProperty(Oe("div"),"a",{get:function(){return 7}}).a})),Se=h,Te=w,Pe=O,Ce=E,Ee=X,Re=he,xe=qt,Ae=je,Fe=Object.getOwnPropertyDescriptor;d.f=Se?Fe:function(t,e){if(t=Ee(t),e=Re(e),Ae)try{return Fe(t,e)}catch(t){}if(xe(t,e))return Ce(!Te(Pe.f,t,e),t[e])};var _e={},ke=h&&b((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Be=y,Ie=Y,De=Be.String,Me=Be.TypeError,ze=function(t){if(Ie(t))return t;throw Me(De(t)+" is not an object")},Ne=h,Le=je,We=ke,Ge=ze,qe=he,$e=y.TypeError,He=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,Ve="enumerable",Xe="configurable",Ke="writable";_e.f=Ne?We?function(t,e,n){if(Ge(t),e=qe(e),Ge(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Ke in n&&!n.writable){var r=Ue(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Xe in n?n.configurable:r.configurable,enumerable:Ve in n?n.enumerable:r.enumerable,writable:!1})}return He(t,e,n)}:He:function(t,e,n){if(Ge(t),e=qe(e),Ge(n),Le)try{return He(t,e,n)}catch(t){}if("get"in n||"set"in n)throw $e("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Qe=_e,Ye=E,Je=h?function(t,e,n){return Qe.f(t,e,Ye(1,n))}:function(t,e,n){return t[e]=n,t},Ze={exports:{}},tn=h,en=qt,nn=Function.prototype,rn=tn&&Object.getOwnPropertyDescriptor,on=en(nn,"name"),un={EXISTS:on,PROPER:on&&"something"===function(){}.name,CONFIGURABLE:on&&(!tn||tn&&rn(nn,"name").configurable)},cn=K,an=Dt,fn=k(Function.toString);cn(an.inspectSource)||(an.inspectSource=function(t){return fn(t)});var ln,sn,pn,yn=an.inspectSource,dn=K,bn=yn,hn=y.WeakMap,vn=dn(hn)&&/native code/.test(bn(hn)),gn=At.exports,mn=Xt,wn=gn("keys"),On=function(t){return wn[t]||(wn[t]=mn(t))},jn={},Sn=vn,Tn=y,Pn=k,Cn=Y,En=Je,Rn=qt,xn=Dt,An=On,Fn=jn,_n="Object already initialized",kn=Tn.TypeError,Bn=Tn.WeakMap;if(Sn||xn.state){var In=xn.state||(xn.state=new Bn),Dn=Pn(In.get),Mn=Pn(In.has),zn=Pn(In.set);ln=function(t,e){if(Mn(In,t))throw new kn(_n);return e.facade=t,zn(In,t,e),e},sn=function(t){return Dn(In,t)||{}},pn=function(t){return Mn(In,t)}}else{var Nn=An("state");Fn[Nn]=!0,ln=function(t,e){if(Rn(t,Nn))throw new kn(_n);return e.facade=t,En(t,Nn,e),e},sn=function(t){return Rn(t,Nn)?t[Nn]:{}},pn=function(t){return Rn(t,Nn)}}var Ln={set:ln,get:sn,has:pn,enforce:function(t){return pn(t)?sn(t):ln(t,{})},getterFor:function(t){return function(e){var n;if(!Cn(e)||(n=sn(e)).type!==t)throw kn("Incompatible receiver, "+t+" required");return n}}},Wn=b,Gn=K,qn=qt,$n=h,Hn=un.CONFIGURABLE,Un=yn,Vn=Ln.enforce,Xn=Ln.get,Kn=Object.defineProperty,Qn=$n&&!Wn((function(){return 8!==Kn((function(){}),"length",{value:8}).length})),Yn=String(String).split("String"),Jn=Ze.exports=function(t,e,n){if("Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!qn(t,"name")||Hn&&t.name!==e)&&Kn(t,"name",{value:e,configurable:!0}),Qn&&n&&qn(n,"arity")&&t.length!==n.arity&&Kn(t,"length",{value:n.arity}),n&&qn(n,"constructor")&&n.constructor){if($n)try{Kn(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var r=Vn(t);return qn(r,"source")||(r.source=Yn.join("string"==typeof e?e:"")),t};Function.prototype.toString=Jn((function(){return Gn(this)&&Xn(this).source||Un(this)}),"toString");var Zn=y,tr=K,er=Je,nr=Ze.exports,rr=kt,or=function(t,e,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:e;return tr(n)&&nr(n,c,r),t===Zn?(i?t[e]=n:rr(e,n),t):(o?!u&&t[e]&&(i=!0):delete t[e],i?t[e]=n:er(t,e,n),t)},ir={},ur=Math.ceil,cr=Math.floor,ar=function(t){var e=+t;return e!=e||0===e?0:(e>0?cr:ur)(e)},fr=ar,lr=Math.max,sr=Math.min,pr=ar,yr=Math.min,dr=function(t){return t>0?yr(pr(t),9007199254740991):0},br=function(t){return dr(t.length)},hr=X,vr=function(t,e){var n=fr(t);return n<0?lr(n+e,0):sr(n,e)},gr=br,mr=function(t){return function(e,n,r){var o,i=hr(e),u=gr(i),c=vr(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},wr={includes:mr(!0),indexOf:mr(!1)},Or=qt,jr=X,Sr=wr.indexOf,Tr=jn,Pr=k([].push),Cr=function(t,e){var n,r=jr(t),o=0,i=[];for(n in r)!Or(Tr,n)&&Or(r,n)&&Pr(i,n);for(;e.length>o;)Or(r,n=e[o++])&&(~Sr(i,n)||Pr(i,n));return i},Er=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Rr=Cr,xr=Er.concat("length","prototype");ir.f=Object.getOwnPropertyNames||function(t){return Rr(t,xr)};var Ar={};Ar.f=Object.getOwnPropertySymbols;var Fr=et,_r=ir,kr=Ar,Br=ze,Ir=k([].concat),Dr=Fr("Reflect","ownKeys")||function(t){var e=_r.f(Br(t)),n=kr.f;return n?Ir(e,n(t)):e},Mr=qt,zr=Dr,Nr=d,Lr=_e,Wr=b,Gr=K,qr=/#|\.prototype\./,$r=function(t,e){var n=Ur[Hr(t)];return n==Xr||n!=Vr&&(Gr(e)?Wr(e):!!e)},Hr=$r.normalize=function(t){return String(t).replace(qr,".").toLowerCase()},Ur=$r.data={},Vr=$r.NATIVE="N",Xr=$r.POLYFILL="P",Kr=$r,Qr=y,Yr=d.f,Jr=Je,Zr=or,to=kt,eo=function(t,e,n){for(var r=zr(e),o=Lr.f,i=Nr.f,u=0;u<r.length;u++){var c=r[u];Mr(t,c)||n&&Mr(n,c)||o(t,c,i(e,c))}},no=Kr,ro=function(t,e){var n,r,o,i,u,c=t.target,a=t.global,f=t.stat;if(n=a?Qr:f?Qr[c]||to(c,{}):(Qr[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(u=Yr(n,r))&&u.value:n[r],!no(a?r:c+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;eo(i,o)}(t.sham||o&&o.sham)&&Jr(i,"sham",!0),Zr(n,r,i,t)}},oo=Cr,io=Er,uo=Object.keys||function(t){return oo(t,io)},co=h,ao=k,fo=w,lo=b,so=uo,po=Ar,yo=O,bo=Lt,ho=q,vo=Object.assign,go=Object.defineProperty,mo=ao([].concat),wo=!vo||lo((function(){if(co&&1!==vo({b:1},vo(go({},"a",{enumerable:!0,get:function(){go(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=vo({},t)[n]||so(vo({},e)).join("")!=r}))?function(t,e){for(var n=bo(t),r=arguments.length,o=1,i=po.f,u=yo.f;r>o;)for(var c,a=ho(arguments[o++]),f=i?mo(so(a),i(a)):so(a),l=f.length,s=0;l>s;)c=f[s++],co&&!fo(u,a,c)||(n[c]=a[c]);return n}:vo,Oo=wo;ro({target:"Object",stat:!0,arity:2,forced:Object.assign!==Oo},{assign:Oo});var jo=M,So=Array.isArray||function(t){return"Array"==jo(t)},To=he,Po=_e,Co=E,Eo={};Eo[ie("toStringTag")]="z";var Ro="[object z]"===String(Eo),xo=y,Ao=Ro,Fo=K,_o=M,ko=ie("toStringTag"),Bo=xo.Object,Io="Arguments"==_o(function(){return arguments}()),Do=Ao?_o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Bo(t),ko))?n:Io?_o(e):"Object"==(r=_o(e))&&Fo(e.callee)?"Arguments":r},Mo=k,zo=b,No=K,Lo=Do,Wo=yn,Go=function(){},qo=[],$o=et("Reflect","construct"),Ho=/^\s*(?:class|function)\b/,Uo=Mo(Ho.exec),Vo=!Ho.exec(Go),Xo=function(t){if(!No(t))return!1;try{return $o(Go,qo,t),!0}catch(t){return!1}},Ko=function(t){if(!No(t))return!1;switch(Lo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Vo||!!Uo(Ho,Wo(t))}catch(t){return!0}};Ko.sham=!0;var Qo=!$o||zo((function(){var t;return Xo(Xo.call)||!Xo(Object)||!Xo((function(){t=!0}))||t}))?Ko:Xo,Yo=y,Jo=So,Zo=Qo,ti=Y,ei=ie("species"),ni=Yo.Array,ri=function(t){var e;return Jo(t)&&(e=t.constructor,(Zo(e)&&(e===ni||Jo(e.prototype))||ti(e)&&null===(e=e[ei]))&&(e=void 0)),void 0===e?ni:e},oi=function(t,e){return new(ri(t))(0===e?0:e)},ii=b,ui=ft,ci=ie("species"),ai=ro,fi=y,li=b,si=So,pi=Y,yi=Lt,di=br,bi=function(t,e,n){var r=To(e);r in t?Po.f(t,r,Co(0,n)):t[r]=n},hi=oi,vi=function(t){return ui>=51||!ii((function(){var e=[];return(e.constructor={})[ci]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},gi=ft,mi=ie("isConcatSpreadable"),wi=9007199254740991,Oi="Maximum allowed index exceeded",ji=fi.TypeError,Si=gi>=51||!li((function(){var t=[];return t[mi]=!1,t.concat()[0]!==t})),Ti=vi("concat"),Pi=function(t){if(!pi(t))return!1;var e=t[mi];return void 0!==e?!!e:si(t)};ai({target:"Array",proto:!0,arity:1,forced:!Si||!Ti},{concat:function(t){var e,n,r,o,i,u=yi(this),c=hi(u,0),a=0;for(e=-1,r=arguments.length;e<r;e++)if(Pi(i=-1===e?u:arguments[e])){if(a+(o=di(i))>wi)throw ji(Oi);for(n=0;n<o;n++,a++)n in i&&bi(c,a,i[n])}else{if(a>=wi)throw ji(Oi);bi(c,a++,i)}return c.length=a,c}});var Ci=Tt,Ei=v,Ri=k(k.bind),xi=function(t,e){return Ci(t),void 0===e?t:Ei?Ri(t,e):function(){return t.apply(e,arguments)}},Ai=q,Fi=Lt,_i=br,ki=oi,Bi=k([].push),Ii=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,u=7==t,c=5==t||i;return function(a,f,l,s){for(var p,y,d=Fi(a),b=Ai(d),h=xi(f,l),v=_i(b),g=0,m=s||ki,w=e?m(a,v):n||u?m(a,0):void 0;v>g;g++)if((c||g in b)&&(y=h(p=b[g],g,d),t))if(e)w[g]=y;else if(y)switch(t){case 3:return!0;case 5:return p;case 6:return g;case 2:Bi(w,p)}else switch(t){case 4:return!1;case 7:Bi(w,p)}return i?-1:r||o?o:w}},Di={forEach:Ii(0),map:Ii(1),filter:Ii(2),some:Ii(3),every:Ii(4),find:Ii(5),findIndex:Ii(6),filterReject:Ii(7)},Mi={},zi=h,Ni=ke,Li=_e,Wi=ze,Gi=X,qi=uo;Mi.f=zi&&!Ni?Object.defineProperties:function(t,e){Wi(t);for(var n,r=Gi(e),o=qi(e),i=o.length,u=0;i>u;)Li.f(t,n=o[u++],r[n]);return t};var $i,Hi=et("document","documentElement"),Ui=ze,Vi=Mi,Xi=Er,Ki=jn,Qi=Hi,Yi=we,Ji=On("IE_PROTO"),Zi=function(){},tu=function(t){return"<script>"+t+"</"+"script>"},eu=function(t){t.write(tu("")),t.close();var e=t.parentWindow.Object;return t=null,e},nu=function(){try{$i=new ActiveXObject("htmlfile")}catch(t){}var t,e;nu="undefined"!=typeof document?document.domain&&$i?eu($i):((e=Yi("iframe")).style.display="none",Qi.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(tu("document.F=Object")),t.close(),t.F):eu($i);for(var n=Xi.length;n--;)delete nu.prototype[Xi[n]];return nu()};Ki[Ji]=!0;var ru=Object.create||function(t,e){var n;return null!==t?(Zi.prototype=Ui(t),n=new Zi,Zi.prototype=null,n[Ji]=t):n=nu(),void 0===e?n:Vi.f(n,e)},ou=_e,iu=ie("unscopables"),uu=Array.prototype;null==uu[iu]&&ou.f(uu,iu,{configurable:!0,value:ru(null)});var cu=ro,au=Di.find,fu=function(t){uu[iu][t]=!0},lu="find",su=!0;lu in[]&&Array(1).find((function(){su=!1})),cu({target:"Array",proto:!0,forced:su},{find:function(t){return au(this,t,arguments.length>1?arguments[1]:void 0)}}),fu(lu);var pu=Do,yu=Ro?{}.toString:function(){return"[object "+pu(this)+"]"};Ro||or(Object.prototype,"toString",yu,{unsafe:!0});var du=b,bu=ro,hu=q,vu=X,gu=function(t,e){var n=[][t];return!!n&&du((function(){n.call(null,e||function(){return 1},1)}))},mu=k([].join),wu=hu!=Object,Ou=gu("join",",");bu({target:"Array",proto:!0,forced:wu||!Ou},{join:function(t){return mu(vu(this),void 0===t?",":t)}});var ju=n.default.fn.bootstrapTable.utils;n.default.extend(n.default.fn.bootstrapTable.locales,{formatCopyRows:function(){return"Copy Rows"}}),n.default.extend(n.default.fn.bootstrapTable.defaults,n.default.fn.bootstrapTable.locales),n.default.extend(n.default.fn.bootstrapTable.defaults.icons,{copy:{bootstrap3:"glyphicon-copy icon-pencil",bootstrap5:"bi-clipboard",materialize:"content_copy","bootstrap-table":"icon-copy"}[n.default.fn.bootstrapTable.theme]||"fa-copy"});n.default.extend(n.default.fn.bootstrapTable.defaults,{showCopyRows:!1,copyWithHidden:!1,copyDelimiter:", ",copyNewline:"\n"}),n.default.extend(n.default.fn.bootstrapTable.columnDefaults,{ignoreCopy:!1,rawCopy:!1}),n.default.fn.bootstrapTable.methods.push("copyColumnsToClipboard"),n.default.BootstrapTable=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(p,t);var e,c,f,s=a(p);function p(){return r(this,p),s.apply(this,arguments)}return e=p,c=[{key:"initToolbar",value:function(){var t;this.options.showCopyRows&&this.header.stateField&&(this.buttons=Object.assign(this.buttons,{copyRows:{text:this.options.formatCopyRows(),icon:this.options.icons.copy,event:this.copyColumnsToClipboard,attributes:{"aria-label":this.options.formatCopyRows(),title:this.options.formatCopyRows()}}}));for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];(t=l(i(p.prototype),"initToolbar",this)).call.apply(t,[this].concat(n)),this.$copyButton=this.$toolbar.find('>.columns [name="copyRows"]'),this.options.showCopyRows&&this.header.stateField&&this.updateCopyButton()}},{key:"copyColumnsToClipboard",value:function(){var t=this,e=[];n.default.each(this.getSelections(),(function(r,o){var i=[];n.default.each(t.options.columns[0],(function(e,n){if(n.field!==t.header.stateField&&(!t.options.copyWithHidden||t.options.copyWithHidden&&n.visible)&&!n.ignoreCopy&&null!==o[n.field]){var u=n.rawCopy?o[n.field]:ju.calculateObjectValue(n,t.header.formatters[e],[o[n.field],o,r],o[n.field]);i.push(u)}})),e.push(i.join(t.options.copyDelimiter))})),function(t){var e=document.createElement("textarea");n.default(e).html(t),document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch(t){console.warn("Oops, unable to copy")}n.default(e).remove()}(e.join(this.options.copyNewline))}},{key:"updateSelected",value:function(){l(i(p.prototype),"updateSelected",this).call(this),this.updateCopyButton()}},{key:"updateCopyButton",value:function(){this.options.showCopyRows&&this.header.stateField&&this.$copyButton&&this.$copyButton.prop("disabled",!this.getSelections().length)}}],c&&o(e.prototype,c),f&&o(e,f),Object.defineProperty(e,"prototype",{writable:!1}),p}(n.default.BootstrapTable)}));
