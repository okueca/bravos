/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t);function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=i(t);if(e){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}function a(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=a(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},l.apply(this,arguments)}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=function(t){return t&&t.Math==Math&&t},y=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof s&&s)||function(){return this}()||Function("return this")(),b={},v=function(t){try{return!!t()}catch(t){return!0}},h=!v((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),d=!v((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),g=d,m=Function.prototype.call,w=g?m.bind(m):function(){return m.apply(m,arguments)},O={},j={}.propertyIsEnumerable,S=Object.getOwnPropertyDescriptor,P=S&&!j.call({1:2},1);O.f=P?function(t){var e=S(this,t);return!!e&&e.enumerable}:j;var T,E,x=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},A=d,R=Function.prototype,_=R.bind,F=R.call,M=A&&_.bind(F,F),k=A?function(t){return t&&M(t)}:function(t){return t&&function(){return F.apply(t,arguments)}},C=k,I=C({}.toString),z=C("".slice),D=function(t){return z(I(t),8,-1)},L=k,B=v,N=D,G=y.Object,U=L("".split),q=B((function(){return!G("z").propertyIsEnumerable(0)}))?function(t){return"String"==N(t)?U(t,""):G(t)}:G,W=y.TypeError,K=function(t){if(null==t)throw W("Can't call method on "+t);return t},Q=q,V=K,X=function(t){return Q(V(t))},Y=function(t){return"function"==typeof t},$=Y,H=function(t){return"object"==typeof t?null!==t:$(t)},J=y,Z=Y,tt=function(t){return Z(t)?t:void 0},et=function(t,e){return arguments.length<2?tt(J[t]):J[t]&&J[t][e]},rt=k({}.isPrototypeOf),nt=y,ot=et("navigator","userAgent")||"",it=nt.process,ut=nt.Deno,ct=it&&it.versions||ut&&ut.version,ft=ct&&ct.v8;ft&&(E=(T=ft.split("."))[0]>0&&T[0]<4?1:+(T[0]+T[1])),!E&&ot&&(!(T=ot.match(/Edge\/(\d+)/))||T[1]>=74)&&(T=ot.match(/Chrome\/(\d+)/))&&(E=+T[1]);var at=E,lt=at,st=v,pt=!!Object.getOwnPropertySymbols&&!st((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&lt&&lt<41})),yt=pt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,bt=et,vt=Y,ht=rt,dt=yt,gt=y.Object,mt=dt?function(t){return"symbol"==typeof t}:function(t){var e=bt("Symbol");return vt(e)&&ht(e.prototype,gt(t))},wt=y.String,Ot=Y,jt=function(t){try{return wt(t)}catch(t){return"Object"}},St=y.TypeError,Pt=function(t){if(Ot(t))return t;throw St(jt(t)+" is not a function")},Tt=w,Et=Y,xt=H,At=y.TypeError,Rt={exports:{}},_t=y,Ft=Object.defineProperty,Mt=function(t,e){try{Ft(_t,t,{value:e,configurable:!0,writable:!0})}catch(r){_t[t]=e}return e},kt=Mt,Ct="__core-js_shared__",It=y[Ct]||kt(Ct,{}),zt=It;(Rt.exports=function(t,e){return zt[t]||(zt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var Dt=K,Lt=y.Object,Bt=function(t){return Lt(Dt(t))},Nt=Bt,Gt=k({}.hasOwnProperty),Ut=Object.hasOwn||function(t,e){return Gt(Nt(t),e)},qt=k,Wt=0,Kt=Math.random(),Qt=qt(1..toString),Vt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Qt(++Wt+Kt,36)},Xt=y,Yt=Rt.exports,$t=Ut,Ht=Vt,Jt=pt,Zt=yt,te=Yt("wks"),ee=Xt.Symbol,re=ee&&ee.for,ne=Zt?ee:ee&&ee.withoutSetter||Ht,oe=function(t){if(!$t(te,t)||!Jt&&"string"!=typeof te[t]){var e="Symbol."+t;Jt&&$t(ee,t)?te[t]=ee[t]:te[t]=Zt&&re?re(e):ne(e)}return te[t]},ie=w,ue=H,ce=mt,fe=function(t,e){var r=t[e];return null==r?void 0:Pt(r)},ae=function(t,e){var r,n;if("string"===e&&Et(r=t.toString)&&!xt(n=Tt(r,t)))return n;if(Et(r=t.valueOf)&&!xt(n=Tt(r,t)))return n;if("string"!==e&&Et(r=t.toString)&&!xt(n=Tt(r,t)))return n;throw At("Can't convert object to primitive value")},le=oe,se=y.TypeError,pe=le("toPrimitive"),ye=function(t,e){if(!ue(t)||ce(t))return t;var r,n=fe(t,pe);if(n){if(void 0===e&&(e="default"),r=ie(n,t,e),!ue(r)||ce(r))return r;throw se("Can't convert object to primitive value")}return void 0===e&&(e="number"),ae(t,e)},be=mt,ve=function(t){var e=ye(t,"string");return be(e)?e:e+""},he=H,de=y.document,ge=he(de)&&he(de.createElement),me=function(t){return ge?de.createElement(t):{}},we=!h&&!v((function(){return 7!=Object.defineProperty(me("div"),"a",{get:function(){return 7}}).a})),Oe=h,je=w,Se=O,Pe=x,Te=X,Ee=ve,xe=Ut,Ae=we,Re=Object.getOwnPropertyDescriptor;b.f=Oe?Re:function(t,e){if(t=Te(t),e=Ee(e),Ae)try{return Re(t,e)}catch(t){}if(xe(t,e))return Pe(!je(Se.f,t,e),t[e])};var _e={},Fe=h&&v((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Me=y,ke=H,Ce=Me.String,Ie=Me.TypeError,ze=function(t){if(ke(t))return t;throw Ie(Ce(t)+" is not an object")},De=h,Le=we,Be=Fe,Ne=ze,Ge=ve,Ue=y.TypeError,qe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Ke="enumerable",Qe="configurable",Ve="writable";_e.f=De?Be?function(t,e,r){if(Ne(t),e=Ge(e),Ne(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Ve in r&&!r.writable){var n=We(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:Qe in r?r.configurable:n.configurable,enumerable:Ke in r?r.enumerable:n.enumerable,writable:!1})}return qe(t,e,r)}:qe:function(t,e,r){if(Ne(t),e=Ge(e),Ne(r),Le)try{return qe(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Ue("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Xe=_e,Ye=x,$e=h?function(t,e,r){return Xe.f(t,e,Ye(1,r))}:function(t,e,r){return t[e]=r,t},He={exports:{}},Je=h,Ze=Ut,tr=Function.prototype,er=Je&&Object.getOwnPropertyDescriptor,rr=Ze(tr,"name"),nr={EXISTS:rr,PROPER:rr&&"something"===function(){}.name,CONFIGURABLE:rr&&(!Je||Je&&er(tr,"name").configurable)},or=Y,ir=It,ur=k(Function.toString);or(ir.inspectSource)||(ir.inspectSource=function(t){return ur(t)});var cr,fr,ar,lr=ir.inspectSource,sr=Y,pr=lr,yr=y.WeakMap,br=sr(yr)&&/native code/.test(pr(yr)),vr=Rt.exports,hr=Vt,dr=vr("keys"),gr={},mr=br,wr=y,Or=k,jr=H,Sr=$e,Pr=Ut,Tr=It,Er=function(t){return dr[t]||(dr[t]=hr(t))},xr=gr,Ar="Object already initialized",Rr=wr.TypeError,_r=wr.WeakMap;if(mr||Tr.state){var Fr=Tr.state||(Tr.state=new _r),Mr=Or(Fr.get),kr=Or(Fr.has),Cr=Or(Fr.set);cr=function(t,e){if(kr(Fr,t))throw new Rr(Ar);return e.facade=t,Cr(Fr,t,e),e},fr=function(t){return Mr(Fr,t)||{}},ar=function(t){return kr(Fr,t)}}else{var Ir=Er("state");xr[Ir]=!0,cr=function(t,e){if(Pr(t,Ir))throw new Rr(Ar);return e.facade=t,Sr(t,Ir,e),e},fr=function(t){return Pr(t,Ir)?t[Ir]:{}},ar=function(t){return Pr(t,Ir)}}var zr={set:cr,get:fr,has:ar,enforce:function(t){return ar(t)?fr(t):cr(t,{})},getterFor:function(t){return function(e){var r;if(!jr(e)||(r=fr(e)).type!==t)throw Rr("Incompatible receiver, "+t+" required");return r}}},Dr=v,Lr=Y,Br=Ut,Nr=h,Gr=nr.CONFIGURABLE,Ur=lr,qr=zr.enforce,Wr=zr.get,Kr=Object.defineProperty,Qr=Nr&&!Dr((function(){return 8!==Kr((function(){}),"length",{value:8}).length})),Vr=String(String).split("String"),Xr=He.exports=function(t,e,r){if("Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Br(t,"name")||Gr&&t.name!==e)&&Kr(t,"name",{value:e,configurable:!0}),Qr&&r&&Br(r,"arity")&&t.length!==r.arity&&Kr(t,"length",{value:r.arity}),r&&Br(r,"constructor")&&r.constructor){if(Nr)try{Kr(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var n=qr(t);return Br(n,"source")||(n.source=Vr.join("string"==typeof e?e:"")),t};Function.prototype.toString=Xr((function(){return Lr(this)&&Wr(this).source||Ur(this)}),"toString");var Yr=y,$r=Y,Hr=$e,Jr=He.exports,Zr=Mt,tn={},en=Math.ceil,rn=Math.floor,nn=function(t){var e=+t;return e!=e||0===e?0:(e>0?rn:en)(e)},on=nn,un=Math.max,cn=Math.min,fn=nn,an=Math.min,ln=function(t){return t>0?an(fn(t),9007199254740991):0},sn=function(t){return ln(t.length)},pn=X,yn=function(t,e){var r=on(t);return r<0?un(r+e,0):cn(r,e)},bn=sn,vn=function(t){return function(e,r,n){var o,i=pn(e),u=bn(i),c=yn(n,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},hn={includes:vn(!0),indexOf:vn(!1)},dn=Ut,gn=X,mn=hn.indexOf,wn=gr,On=k([].push),jn=function(t,e){var r,n=gn(t),o=0,i=[];for(r in n)!dn(wn,r)&&dn(n,r)&&On(i,r);for(;e.length>o;)dn(n,r=e[o++])&&(~mn(i,r)||On(i,r));return i},Sn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");tn.f=Object.getOwnPropertyNames||function(t){return jn(t,Sn)};var Pn={};Pn.f=Object.getOwnPropertySymbols;var Tn=et,En=tn,xn=Pn,An=ze,Rn=k([].concat),_n=Tn("Reflect","ownKeys")||function(t){var e=En.f(An(t)),r=xn.f;return r?Rn(e,r(t)):e},Fn=Ut,Mn=_n,kn=b,Cn=_e,In=v,zn=Y,Dn=/#|\.prototype\./,Ln=function(t,e){var r=Nn[Bn(t)];return r==Un||r!=Gn&&(zn(e)?In(e):!!e)},Bn=Ln.normalize=function(t){return String(t).replace(Dn,".").toLowerCase()},Nn=Ln.data={},Gn=Ln.NATIVE="N",Un=Ln.POLYFILL="P",qn=Ln,Wn=y,Kn=b.f,Qn=$e,Vn=function(t,e,r,n){var o=!!n&&!!n.unsafe,i=!!n&&!!n.enumerable,u=!!n&&!!n.noTargetGet,c=n&&void 0!==n.name?n.name:e;return $r(r)&&Jr(r,c,n),t===Yr?(i?t[e]=r:Zr(e,r),t):(o?!u&&t[e]&&(i=!0):delete t[e],i?t[e]=r:Hr(t,e,r),t)},Xn=Mt,Yn=function(t,e,r){for(var n=Mn(e),o=Cn.f,i=kn.f,u=0;u<n.length;u++){var c=n[u];Fn(t,c)||r&&Fn(r,c)||o(t,c,i(e,c))}},$n=qn,Hn=D,Jn=Array.isArray||function(t){return"Array"==Hn(t)},Zn=ve,to=_e,eo=x,ro={};ro[oe("toStringTag")]="z";var no=y,oo="[object z]"===String(ro),io=Y,uo=D,co=oe("toStringTag"),fo=no.Object,ao="Arguments"==uo(function(){return arguments}()),lo=k,so=v,po=Y,yo=oo?uo:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=fo(t),co))?r:ao?uo(e):"Object"==(n=uo(e))&&io(e.callee)?"Arguments":n},bo=lr,vo=function(){},ho=[],go=et("Reflect","construct"),mo=/^\s*(?:class|function)\b/,wo=lo(mo.exec),Oo=!mo.exec(vo),jo=function(t){if(!po(t))return!1;try{return go(vo,ho,t),!0}catch(t){return!1}},So=function(t){if(!po(t))return!1;switch(yo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Oo||!!wo(mo,bo(t))}catch(t){return!0}};So.sham=!0;var Po=!go||so((function(){var t;return jo(jo.call)||!jo(Object)||!jo((function(){t=!0}))||t}))?So:jo,To=y,Eo=Jn,xo=Po,Ao=H,Ro=oe("species"),_o=To.Array,Fo=function(t){var e;return Eo(t)&&(e=t.constructor,(xo(e)&&(e===_o||Eo(e.prototype))||Ao(e)&&null===(e=e[Ro]))&&(e=void 0)),void 0===e?_o:e},Mo=v,ko=at,Co=oe("species"),Io=function(t,e){var r,n,o,i,u,c=t.target,f=t.global,a=t.stat;if(r=f?Wn:a?Wn[c]||Xn(c,{}):(Wn[c]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(u=Kn(r,n))&&u.value:r[n],!$n(f?n:c+(a?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Yn(i,o)}(t.sham||o&&o.sham)&&Qn(i,"sham",!0),Vn(r,n,i,t)}},zo=y,Do=v,Lo=Jn,Bo=H,No=Bt,Go=sn,Uo=function(t,e,r){var n=Zn(e);n in t?to.f(t,n,eo(0,r)):t[n]=r},qo=function(t,e){return new(Fo(t))(0===e?0:e)},Wo=function(t){return ko>=51||!Mo((function(){var e=[];return(e.constructor={})[Co]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Ko=at,Qo=oe("isConcatSpreadable"),Vo=9007199254740991,Xo="Maximum allowed index exceeded",Yo=zo.TypeError,$o=Ko>=51||!Do((function(){var t=[];return t[Qo]=!1,t.concat()[0]!==t})),Ho=Wo("concat"),Jo=function(t){if(!Bo(t))return!1;var e=t[Qo];return void 0!==e?!!e:Lo(t)};Io({target:"Array",proto:!0,arity:1,forced:!$o||!Ho},{concat:function(t){var e,r,n,o,i,u=No(this),c=qo(u,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(Jo(i=-1===e?u:arguments[e])){if(f+(o=Go(i))>Vo)throw Yo(Xo);for(r=0;r<o;r++,f++)r in i&&Uo(c,f,i[r])}else{if(f>=Vo)throw Yo(Xo);Uo(c,f++,i)}return c.length=f,c}}),r.default.extend(r.default.fn.bootstrapTable.defaults,{deferUrl:void 0}),r.default.BootstrapTable=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(s,t);var e,r,c,a=f(s);function s(){return n(this,s),a.apply(this,arguments)}return e=s,r=[{key:"init",value:function(){for(var t,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];(t=l(i(s.prototype),"init",this)).call.apply(t,[this].concat(r)),this.options.deferUrl&&(this.options.url=this.options.deferUrl)}}],r&&o(e.prototype,r),c&&o(e,c),Object.defineProperty(e,"prototype",{writable:!1}),s}(r.default.BootstrapTable)}));