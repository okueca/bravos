/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u={},a=function(t){try{return!!t()}catch(t){return!0}},c=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=!a((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),l=f,s=Function.prototype.call,p=l?s.bind(s):function(){return s.apply(s,arguments)},g={},y={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,b=d&&!y.call({1:2},1);g.f=b?function(t){var n=d(this,t);return!!n&&n.enumerable}:y;var m,v,h=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},S=f,w=Function.prototype,j=w.bind,O=w.call,P=S&&j.bind(O,O),T=S?function(t){return t&&P(t)}:function(t){return t&&function(){return O.apply(t,arguments)}},k=T,x=k({}.toString),E=k("".slice),A=function(t){return E(x(t),8,-1)},C=T,R=a,F=A,z=i.Object,M=C("".split),I=R((function(){return!z("z").propertyIsEnumerable(0)}))?function(t){return"String"==F(t)?M(t,""):z(t)}:z,L=i.TypeError,N=function(t){if(null==t)throw L("Can't call method on "+t);return t},D=I,G=N,_=function(t){return D(G(t))},q=function(t){return"function"==typeof t},B=q,U=function(t){return"object"==typeof t?null!==t:B(t)},H=i,K=q,W=function(t){return K(t)?t:void 0},J=function(t,n){return arguments.length<2?W(H[t]):H[t]&&H[t][n]},Q=T({}.isPrototypeOf),V=i,X=J("navigator","userAgent")||"",Y=V.process,Z=V.Deno,$=Y&&Y.versions||Z&&Z.version,tt=$&&$.v8;tt&&(v=(m=tt.split("."))[0]>0&&m[0]<4?1:+(m[0]+m[1])),!v&&X&&(!(m=X.match(/Edge\/(\d+)/))||m[1]>=74)&&(m=X.match(/Chrome\/(\d+)/))&&(v=+m[1]);var nt=v,rt=nt,et=a,ot=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=J,at=q,ct=Q,ft=it,lt=i.Object,st=ft?function(t){return"symbol"==typeof t}:function(t){var n=ut("Symbol");return at(n)&&ct(n.prototype,lt(t))},pt=i.String,gt=q,yt=function(t){try{return pt(t)}catch(t){return"Object"}},dt=i.TypeError,bt=function(t){if(gt(t))return t;throw dt(yt(t)+" is not a function")},mt=p,vt=q,ht=U,St=i.TypeError,wt={exports:{}},jt=i,Ot=Object.defineProperty,Pt=function(t,n){try{Ot(jt,t,{value:n,configurable:!0,writable:!0})}catch(r){jt[t]=n}return n},Tt=Pt,kt="__core-js_shared__",xt=i[kt]||Tt(kt,{}),Et=xt;(wt.exports=function(t,n){return Et[t]||(Et[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var At=N,Ct=i.Object,Rt=function(t){return Ct(At(t))},Ft=Rt,zt=T({}.hasOwnProperty),Mt=Object.hasOwn||function(t,n){return zt(Ft(t),n)},It=T,Lt=0,Nt=Math.random(),Dt=It(1..toString),Gt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Dt(++Lt+Nt,36)},_t=i,qt=wt.exports,Bt=Mt,Ut=Gt,Ht=ot,Kt=it,Wt=qt("wks"),Jt=_t.Symbol,Qt=Jt&&Jt.for,Vt=Kt?Jt:Jt&&Jt.withoutSetter||Ut,Xt=function(t){if(!Bt(Wt,t)||!Ht&&"string"!=typeof Wt[t]){var n="Symbol."+t;Ht&&Bt(Jt,t)?Wt[t]=Jt[t]:Wt[t]=Kt&&Qt?Qt(n):Vt(n)}return Wt[t]},Yt=p,Zt=U,$t=st,tn=function(t,n){var r=t[n];return null==r?void 0:bt(r)},nn=function(t,n){var r,e;if("string"===n&&vt(r=t.toString)&&!ht(e=mt(r,t)))return e;if(vt(r=t.valueOf)&&!ht(e=mt(r,t)))return e;if("string"!==n&&vt(r=t.toString)&&!ht(e=mt(r,t)))return e;throw St("Can't convert object to primitive value")},rn=Xt,en=i.TypeError,on=rn("toPrimitive"),un=function(t,n){if(!Zt(t)||$t(t))return t;var r,e=tn(t,on);if(e){if(void 0===n&&(n="default"),r=Yt(e,t,n),!Zt(r)||$t(r))return r;throw en("Can't convert object to primitive value")}return void 0===n&&(n="number"),nn(t,n)},an=st,cn=function(t){var n=un(t,"string");return an(n)?n:n+""},fn=U,ln=i.document,sn=fn(ln)&&fn(ln.createElement),pn=function(t){return sn?ln.createElement(t):{}},gn=!c&&!a((function(){return 7!=Object.defineProperty(pn("div"),"a",{get:function(){return 7}}).a})),yn=c,dn=p,bn=g,mn=h,vn=_,hn=cn,Sn=Mt,wn=gn,jn=Object.getOwnPropertyDescriptor;u.f=yn?jn:function(t,n){if(t=vn(t),n=hn(n),wn)try{return jn(t,n)}catch(t){}if(Sn(t,n))return mn(!dn(bn.f,t,n),t[n])};var On={},Pn=c&&a((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Tn=i,kn=U,xn=Tn.String,En=Tn.TypeError,An=function(t){if(kn(t))return t;throw En(xn(t)+" is not an object")},Cn=c,Rn=gn,Fn=Pn,zn=An,Mn=cn,In=i.TypeError,Ln=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,Dn="enumerable",Gn="configurable",_n="writable";On.f=Cn?Fn?function(t,n,r){if(zn(t),n=Mn(n),zn(r),"function"==typeof t&&"prototype"===n&&"value"in r&&_n in r&&!r.writable){var e=Nn(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:Gn in r?r.configurable:e.configurable,enumerable:Dn in r?r.enumerable:e.enumerable,writable:!1})}return Ln(t,n,r)}:Ln:function(t,n,r){if(zn(t),n=Mn(n),zn(r),Rn)try{return Ln(t,n,r)}catch(t){}if("get"in r||"set"in r)throw In("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var qn=On,Bn=h,Un=c?function(t,n,r){return qn.f(t,n,Bn(1,r))}:function(t,n,r){return t[n]=r,t},Hn={exports:{}},Kn=c,Wn=Mt,Jn=Function.prototype,Qn=Kn&&Object.getOwnPropertyDescriptor,Vn=Wn(Jn,"name"),Xn={EXISTS:Vn,PROPER:Vn&&"something"===function(){}.name,CONFIGURABLE:Vn&&(!Kn||Kn&&Qn(Jn,"name").configurable)},Yn=q,Zn=xt,$n=T(Function.toString);Yn(Zn.inspectSource)||(Zn.inspectSource=function(t){return $n(t)});var tr,nr,rr,er=Zn.inspectSource,or=q,ir=er,ur=i.WeakMap,ar=or(ur)&&/native code/.test(ir(ur)),cr=wt.exports,fr=Gt,lr=cr("keys"),sr={},pr=ar,gr=i,yr=T,dr=U,br=Un,mr=Mt,vr=xt,hr=function(t){return lr[t]||(lr[t]=fr(t))},Sr=sr,wr="Object already initialized",jr=gr.TypeError,Or=gr.WeakMap;if(pr||vr.state){var Pr=vr.state||(vr.state=new Or),Tr=yr(Pr.get),kr=yr(Pr.has),xr=yr(Pr.set);tr=function(t,n){if(kr(Pr,t))throw new jr(wr);return n.facade=t,xr(Pr,t,n),n},nr=function(t){return Tr(Pr,t)||{}},rr=function(t){return kr(Pr,t)}}else{var Er=hr("state");Sr[Er]=!0,tr=function(t,n){if(mr(t,Er))throw new jr(wr);return n.facade=t,br(t,Er,n),n},nr=function(t){return mr(t,Er)?t[Er]:{}},rr=function(t){return mr(t,Er)}}var Ar={set:tr,get:nr,has:rr,enforce:function(t){return rr(t)?nr(t):tr(t,{})},getterFor:function(t){return function(n){var r;if(!dr(n)||(r=nr(n)).type!==t)throw jr("Incompatible receiver, "+t+" required");return r}}},Cr=a,Rr=q,Fr=Mt,zr=c,Mr=Xn.CONFIGURABLE,Ir=er,Lr=Ar.enforce,Nr=Ar.get,Dr=Object.defineProperty,Gr=zr&&!Cr((function(){return 8!==Dr((function(){}),"length",{value:8}).length})),_r=String(String).split("String"),qr=Hn.exports=function(t,n,r){if("Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!Fr(t,"name")||Mr&&t.name!==n)&&Dr(t,"name",{value:n,configurable:!0}),Gr&&r&&Fr(r,"arity")&&t.length!==r.arity&&Dr(t,"length",{value:r.arity}),r&&Fr(r,"constructor")&&r.constructor){if(zr)try{Dr(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var e=Lr(t);return Fr(e,"source")||(e.source=_r.join("string"==typeof n?n:"")),t};Function.prototype.toString=qr((function(){return Rr(this)&&Nr(this).source||Ir(this)}),"toString");var Br=i,Ur=q,Hr=Un,Kr=Hn.exports,Wr=Pt,Jr={},Qr=Math.ceil,Vr=Math.floor,Xr=function(t){var n=+t;return n!=n||0===n?0:(n>0?Vr:Qr)(n)},Yr=Xr,Zr=Math.max,$r=Math.min,te=Xr,ne=Math.min,re=function(t){return t>0?ne(te(t),9007199254740991):0},ee=function(t){return re(t.length)},oe=_,ie=function(t,n){var r=Yr(t);return r<0?Zr(r+n,0):$r(r,n)},ue=ee,ae=function(t){return function(n,r,e){var o,i=oe(n),u=ue(i),a=ie(e,u);if(t&&r!=r){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===r)return t||a||0;return!t&&-1}},ce={includes:ae(!0),indexOf:ae(!1)},fe=Mt,le=_,se=ce.indexOf,pe=sr,ge=T([].push),ye=function(t,n){var r,e=le(t),o=0,i=[];for(r in e)!fe(pe,r)&&fe(e,r)&&ge(i,r);for(;n.length>o;)fe(e,r=n[o++])&&(~se(i,r)||ge(i,r));return i},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Jr.f=Object.getOwnPropertyNames||function(t){return ye(t,de)};var be={};be.f=Object.getOwnPropertySymbols;var me=J,ve=Jr,he=be,Se=An,we=T([].concat),je=me("Reflect","ownKeys")||function(t){var n=ve.f(Se(t)),r=he.f;return r?we(n,r(t)):n},Oe=Mt,Pe=je,Te=u,ke=On,xe=a,Ee=q,Ae=/#|\.prototype\./,Ce=function(t,n){var r=Fe[Re(t)];return r==Me||r!=ze&&(Ee(n)?xe(n):!!n)},Re=Ce.normalize=function(t){return String(t).replace(Ae,".").toLowerCase()},Fe=Ce.data={},ze=Ce.NATIVE="N",Me=Ce.POLYFILL="P",Ie=Ce,Le=i,Ne=u.f,De=Un,Ge=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet,a=e&&void 0!==e.name?e.name:n;return Ur(r)&&Kr(r,a,e),t===Br?(i?t[n]=r:Wr(n,r),t):(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=r:Hr(t,n,r),t)},_e=Pt,qe=function(t,n,r){for(var e=Pe(n),o=ke.f,i=Te.f,u=0;u<e.length;u++){var a=e[u];Oe(t,a)||r&&Oe(r,a)||o(t,a,i(n,a))}},Be=Ie,Ue=A,He=Array.isArray||function(t){return"Array"==Ue(t)},Ke=cn,We=On,Je=h,Qe={};Qe[Xt("toStringTag")]="z";var Ve=i,Xe="[object z]"===String(Qe),Ye=q,Ze=A,$e=Xt("toStringTag"),to=Ve.Object,no="Arguments"==Ze(function(){return arguments}()),ro=T,eo=a,oo=q,io=Xe?Ze:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=to(t),$e))?r:no?Ze(n):"Object"==(e=Ze(n))&&Ye(n.callee)?"Arguments":e},uo=er,ao=function(){},co=[],fo=J("Reflect","construct"),lo=/^\s*(?:class|function)\b/,so=ro(lo.exec),po=!lo.exec(ao),go=function(t){if(!oo(t))return!1;try{return fo(ao,co,t),!0}catch(t){return!1}},yo=function(t){if(!oo(t))return!1;switch(io(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return po||!!so(lo,uo(t))}catch(t){return!0}};yo.sham=!0;var bo=!fo||eo((function(){var t;return go(go.call)||!go(Object)||!go((function(){t=!0}))||t}))?yo:go,mo=i,vo=He,ho=bo,So=U,wo=Xt("species"),jo=mo.Array,Oo=function(t){var n;return vo(t)&&(n=t.constructor,(ho(n)&&(n===jo||vo(n.prototype))||So(n)&&null===(n=n[wo]))&&(n=void 0)),void 0===n?jo:n},Po=a,To=nt,ko=Xt("species"),xo=function(t,n){var r,e,o,i,u,a=t.target,c=t.global,f=t.stat;if(r=c?Le:f?Le[a]||_e(a,{}):(Le[a]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(u=Ne(r,e))&&u.value:r[e],!Be(c?e:a+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;qe(i,o)}(t.sham||o&&o.sham)&&De(i,"sham",!0),Ge(r,e,i,t)}},Eo=i,Ao=a,Co=He,Ro=U,Fo=Rt,zo=ee,Mo=function(t,n,r){var e=Ke(n);e in t?We.f(t,e,Je(0,r)):t[e]=r},Io=function(t,n){return new(Oo(t))(0===n?0:n)},Lo=function(t){return To>=51||!Po((function(){var n=[];return(n.constructor={})[ko]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},No=nt,Do=Xt("isConcatSpreadable"),Go=9007199254740991,_o="Maximum allowed index exceeded",qo=Eo.TypeError,Bo=No>=51||!Ao((function(){var t=[];return t[Do]=!1,t.concat()[0]!==t})),Uo=Lo("concat"),Ho=function(t){if(!Ro(t))return!1;var n=t[Do];return void 0!==n?!!n:Co(t)};xo({target:"Array",proto:!0,arity:1,forced:!Bo||!Uo},{concat:function(t){var n,r,e,o,i,u=Fo(this),a=Io(u,0),c=0;for(n=-1,e=arguments.length;n<e;n++)if(Ho(i=-1===n?u:arguments[n])){if(c+(o=zo(i))>Go)throw qo(_o);for(r=0;r<o;r++,c++)r in i&&Mo(a,c,i[r])}else{if(c>=Go)throw qo(_o);Mo(a,c++,i)}return a.length=c,a}}),r.default.fn.bootstrapTable.locales["sr-Latn-RS"]={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Molim sačekaj"},formatRecordsPerPage:function(t){return"".concat(t," redova po strani")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Prikazano ".concat(t,". - ").concat(n,". od ukupnog broja redova ").concat(r," (filtrirano od ").concat(e,")"):"Prikazano ".concat(t,". - ").concat(n,". od ukupnog broja redova ").concat(r)},formatSRPaginationPreText:function(){return"prethodna strana"},formatSRPaginationPageText:function(t){return"na stranu ".concat(t)},formatSRPaginationNextText:function(){return"sledeća strana"},formatDetailPagination:function(t){return"Prikazano ".concat(t," redova")},formatClearSearch:function(){return"Obriši pretragu"},formatSearch:function(){return"Pronađi"},formatNoMatches:function(){return"Nije pronađen ni jedan podatak"},formatPaginationSwitch:function(){return"Prikaži/sakrij paginaciju"},formatPaginationSwitchDown:function(){return"Prikaži paginaciju"},formatPaginationSwitchUp:function(){return"Sakrij paginaciju"},formatRefresh:function(){return"Osveži"},formatToggle:function(){return"Promeni prikaz"},formatToggleOn:function(){return"Prikaži kartice"},formatToggleOff:function(){return"Sakrij kartice"},formatColumns:function(){return"Kolone"},formatColumnsToggleAll:function(){return"Prikaži/sakrij sve"},formatFullscreen:function(){return"Ceo ekran"},formatAllRows:function(){return"Sve"},formatAutoRefresh:function(){return"Automatsko osvežavanje"},formatExport:function(){return"Izvezi podatke"},formatJumpTo:function(){return"Idi"},formatAdvancedSearch:function(){return"Napredna pretraga"},formatAdvancedCloseButton:function(){return"Zatvori"},formatFilterControlSwitch:function(){return"Hide/Show controls"},formatFilterControlSwitchHide:function(){return"Hide controls"},formatFilterControlSwitchShow:function(){return"Show controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["sr-Latn-RS"])}));
