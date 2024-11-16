/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u={},c=function(t){try{return!!t()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=!c((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),l=f,s=Function.prototype.call,p=l?s.bind(s):function(){return s.apply(s,arguments)},g={},h={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!h.call({1:2},1);g.f=m?function(t){var n=y(this,t);return!!n&&n.enumerable}:h;var b,v,d=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},w=f,S=Function.prototype,O=S.bind,j=S.call,P=w&&O.bind(j,j),T=w?function(t){return t&&P(t)}:function(t){return t&&function(){return j.apply(t,arguments)}},A=T,E=A({}.toString),C=A("".slice),x=function(t){return C(E(t),8,-1)},R=T,F=c,M=x,I=i.Object,L=R("".split),N=F((function(){return!I("z").propertyIsEnumerable(0)}))?function(t){return"String"==M(t)?L(t,""):I(t)}:I,k=i.TypeError,z=function(t){if(null==t)throw k("Can't call method on "+t);return t},D=N,B=z,G=function(t){return D(B(t))},_=function(t){return"function"==typeof t},q=_,U=function(t){return"object"==typeof t?null!==t:q(t)},W=i,H=_,J=function(t){return H(t)?t:void 0},K=function(t,n){return arguments.length<2?J(W[t]):W[t]&&W[t][n]},Q=T({}.isPrototypeOf),V=i,X=K("navigator","userAgent")||"",Y=V.process,$=V.Deno,Z=Y&&Y.versions||$&&$.version,tt=Z&&Z.v8;tt&&(v=(b=tt.split("."))[0]>0&&b[0]<4?1:+(b[0]+b[1])),!v&&X&&(!(b=X.match(/Edge\/(\d+)/))||b[1]>=74)&&(b=X.match(/Chrome\/(\d+)/))&&(v=+b[1]);var nt=v,rt=nt,et=c,ot=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=K,ct=_,at=Q,ft=it,lt=i.Object,st=ft?function(t){return"symbol"==typeof t}:function(t){var n=ut("Symbol");return ct(n)&&at(n.prototype,lt(t))},pt=i.String,gt=_,ht=function(t){try{return pt(t)}catch(t){return"Object"}},yt=i.TypeError,mt=function(t){if(gt(t))return t;throw yt(ht(t)+" is not a function")},bt=p,vt=_,dt=U,wt=i.TypeError,St={exports:{}},Ot=i,jt=Object.defineProperty,Pt=function(t,n){try{jt(Ot,t,{value:n,configurable:!0,writable:!0})}catch(r){Ot[t]=n}return n},Tt=Pt,At="__core-js_shared__",Et=i[At]||Tt(At,{}),Ct=Et;(St.exports=function(t,n){return Ct[t]||(Ct[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var xt=z,Rt=i.Object,Ft=function(t){return Rt(xt(t))},Mt=Ft,It=T({}.hasOwnProperty),Lt=Object.hasOwn||function(t,n){return It(Mt(t),n)},Nt=T,kt=0,zt=Math.random(),Dt=Nt(1..toString),Bt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Dt(++kt+zt,36)},Gt=i,_t=St.exports,qt=Lt,Ut=Bt,Wt=ot,Ht=it,Jt=_t("wks"),Kt=Gt.Symbol,Qt=Kt&&Kt.for,Vt=Ht?Kt:Kt&&Kt.withoutSetter||Ut,Xt=function(t){if(!qt(Jt,t)||!Wt&&"string"!=typeof Jt[t]){var n="Symbol."+t;Wt&&qt(Kt,t)?Jt[t]=Kt[t]:Jt[t]=Ht&&Qt?Qt(n):Vt(n)}return Jt[t]},Yt=p,$t=U,Zt=st,tn=function(t,n){var r=t[n];return null==r?void 0:mt(r)},nn=function(t,n){var r,e;if("string"===n&&vt(r=t.toString)&&!dt(e=bt(r,t)))return e;if(vt(r=t.valueOf)&&!dt(e=bt(r,t)))return e;if("string"!==n&&vt(r=t.toString)&&!dt(e=bt(r,t)))return e;throw wt("Can't convert object to primitive value")},rn=Xt,en=i.TypeError,on=rn("toPrimitive"),un=function(t,n){if(!$t(t)||Zt(t))return t;var r,e=tn(t,on);if(e){if(void 0===n&&(n="default"),r=Yt(e,t,n),!$t(r)||Zt(r))return r;throw en("Can't convert object to primitive value")}return void 0===n&&(n="number"),nn(t,n)},cn=st,an=function(t){var n=un(t,"string");return cn(n)?n:n+""},fn=U,ln=i.document,sn=fn(ln)&&fn(ln.createElement),pn=function(t){return sn?ln.createElement(t):{}},gn=!a&&!c((function(){return 7!=Object.defineProperty(pn("div"),"a",{get:function(){return 7}}).a})),hn=a,yn=p,mn=g,bn=d,vn=G,dn=an,wn=Lt,Sn=gn,On=Object.getOwnPropertyDescriptor;u.f=hn?On:function(t,n){if(t=vn(t),n=dn(n),Sn)try{return On(t,n)}catch(t){}if(wn(t,n))return bn(!yn(mn.f,t,n),t[n])};var jn={},Pn=a&&c((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Tn=i,An=U,En=Tn.String,Cn=Tn.TypeError,xn=function(t){if(An(t))return t;throw Cn(En(t)+" is not an object")},Rn=a,Fn=gn,Mn=Pn,In=xn,Ln=an,Nn=i.TypeError,kn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Dn="enumerable",Bn="configurable",Gn="writable";jn.f=Rn?Mn?function(t,n,r){if(In(t),n=Ln(n),In(r),"function"==typeof t&&"prototype"===n&&"value"in r&&Gn in r&&!r.writable){var e=zn(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:Bn in r?r.configurable:e.configurable,enumerable:Dn in r?r.enumerable:e.enumerable,writable:!1})}return kn(t,n,r)}:kn:function(t,n,r){if(In(t),n=Ln(n),In(r),Fn)try{return kn(t,n,r)}catch(t){}if("get"in r||"set"in r)throw Nn("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var _n=jn,qn=d,Un=a?function(t,n,r){return _n.f(t,n,qn(1,r))}:function(t,n,r){return t[n]=r,t},Wn={exports:{}},Hn=a,Jn=Lt,Kn=Function.prototype,Qn=Hn&&Object.getOwnPropertyDescriptor,Vn=Jn(Kn,"name"),Xn={EXISTS:Vn,PROPER:Vn&&"something"===function(){}.name,CONFIGURABLE:Vn&&(!Hn||Hn&&Qn(Kn,"name").configurable)},Yn=_,$n=Et,Zn=T(Function.toString);Yn($n.inspectSource)||($n.inspectSource=function(t){return Zn(t)});var tr,nr,rr,er=$n.inspectSource,or=_,ir=er,ur=i.WeakMap,cr=or(ur)&&/native code/.test(ir(ur)),ar=St.exports,fr=Bt,lr=ar("keys"),sr={},pr=cr,gr=i,hr=T,yr=U,mr=Un,br=Lt,vr=Et,dr=function(t){return lr[t]||(lr[t]=fr(t))},wr=sr,Sr="Object already initialized",Or=gr.TypeError,jr=gr.WeakMap;if(pr||vr.state){var Pr=vr.state||(vr.state=new jr),Tr=hr(Pr.get),Ar=hr(Pr.has),Er=hr(Pr.set);tr=function(t,n){if(Ar(Pr,t))throw new Or(Sr);return n.facade=t,Er(Pr,t,n),n},nr=function(t){return Tr(Pr,t)||{}},rr=function(t){return Ar(Pr,t)}}else{var Cr=dr("state");wr[Cr]=!0,tr=function(t,n){if(br(t,Cr))throw new Or(Sr);return n.facade=t,mr(t,Cr,n),n},nr=function(t){return br(t,Cr)?t[Cr]:{}},rr=function(t){return br(t,Cr)}}var xr={set:tr,get:nr,has:rr,enforce:function(t){return rr(t)?nr(t):tr(t,{})},getterFor:function(t){return function(n){var r;if(!yr(n)||(r=nr(n)).type!==t)throw Or("Incompatible receiver, "+t+" required");return r}}},Rr=c,Fr=_,Mr=Lt,Ir=a,Lr=Xn.CONFIGURABLE,Nr=er,kr=xr.enforce,zr=xr.get,Dr=Object.defineProperty,Br=Ir&&!Rr((function(){return 8!==Dr((function(){}),"length",{value:8}).length})),Gr=String(String).split("String"),_r=Wn.exports=function(t,n,r){if("Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!Mr(t,"name")||Lr&&t.name!==n)&&Dr(t,"name",{value:n,configurable:!0}),Br&&r&&Mr(r,"arity")&&t.length!==r.arity&&Dr(t,"length",{value:r.arity}),r&&Mr(r,"constructor")&&r.constructor){if(Ir)try{Dr(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var e=kr(t);return Mr(e,"source")||(e.source=Gr.join("string"==typeof n?n:"")),t};Function.prototype.toString=_r((function(){return Fr(this)&&zr(this).source||Nr(this)}),"toString");var qr=i,Ur=_,Wr=Un,Hr=Wn.exports,Jr=Pt,Kr={},Qr=Math.ceil,Vr=Math.floor,Xr=function(t){var n=+t;return n!=n||0===n?0:(n>0?Vr:Qr)(n)},Yr=Xr,$r=Math.max,Zr=Math.min,te=Xr,ne=Math.min,re=function(t){return t>0?ne(te(t),9007199254740991):0},ee=function(t){return re(t.length)},oe=G,ie=function(t,n){var r=Yr(t);return r<0?$r(r+n,0):Zr(r,n)},ue=ee,ce=function(t){return function(n,r,e){var o,i=oe(n),u=ue(i),c=ie(e,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},ae={includes:ce(!0),indexOf:ce(!1)},fe=Lt,le=G,se=ae.indexOf,pe=sr,ge=T([].push),he=function(t,n){var r,e=le(t),o=0,i=[];for(r in e)!fe(pe,r)&&fe(e,r)&&ge(i,r);for(;n.length>o;)fe(e,r=n[o++])&&(~se(i,r)||ge(i,r));return i},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Kr.f=Object.getOwnPropertyNames||function(t){return he(t,ye)};var me={};me.f=Object.getOwnPropertySymbols;var be=K,ve=Kr,de=me,we=xn,Se=T([].concat),Oe=be("Reflect","ownKeys")||function(t){var n=ve.f(we(t)),r=de.f;return r?Se(n,r(t)):n},je=Lt,Pe=Oe,Te=u,Ae=jn,Ee=c,Ce=_,xe=/#|\.prototype\./,Re=function(t,n){var r=Me[Fe(t)];return r==Le||r!=Ie&&(Ce(n)?Ee(n):!!n)},Fe=Re.normalize=function(t){return String(t).replace(xe,".").toLowerCase()},Me=Re.data={},Ie=Re.NATIVE="N",Le=Re.POLYFILL="P",Ne=Re,ke=i,ze=u.f,De=Un,Be=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet,c=e&&void 0!==e.name?e.name:n;return Ur(r)&&Hr(r,c,e),t===qr?(i?t[n]=r:Jr(n,r),t):(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=r:Wr(t,n,r),t)},Ge=Pt,_e=function(t,n,r){for(var e=Pe(n),o=Ae.f,i=Te.f,u=0;u<e.length;u++){var c=e[u];je(t,c)||r&&je(r,c)||o(t,c,i(n,c))}},qe=Ne,Ue=x,We=Array.isArray||function(t){return"Array"==Ue(t)},He=an,Je=jn,Ke=d,Qe={};Qe[Xt("toStringTag")]="z";var Ve=i,Xe="[object z]"===String(Qe),Ye=_,$e=x,Ze=Xt("toStringTag"),to=Ve.Object,no="Arguments"==$e(function(){return arguments}()),ro=T,eo=c,oo=_,io=Xe?$e:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=to(t),Ze))?r:no?$e(n):"Object"==(e=$e(n))&&Ye(n.callee)?"Arguments":e},uo=er,co=function(){},ao=[],fo=K("Reflect","construct"),lo=/^\s*(?:class|function)\b/,so=ro(lo.exec),po=!lo.exec(co),go=function(t){if(!oo(t))return!1;try{return fo(co,ao,t),!0}catch(t){return!1}},ho=function(t){if(!oo(t))return!1;switch(io(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return po||!!so(lo,uo(t))}catch(t){return!0}};ho.sham=!0;var yo=!fo||eo((function(){var t;return go(go.call)||!go(Object)||!go((function(){t=!0}))||t}))?ho:go,mo=i,bo=We,vo=yo,wo=U,So=Xt("species"),Oo=mo.Array,jo=function(t){var n;return bo(t)&&(n=t.constructor,(vo(n)&&(n===Oo||bo(n.prototype))||wo(n)&&null===(n=n[So]))&&(n=void 0)),void 0===n?Oo:n},Po=c,To=nt,Ao=Xt("species"),Eo=function(t,n){var r,e,o,i,u,c=t.target,a=t.global,f=t.stat;if(r=a?ke:f?ke[c]||Ge(c,{}):(ke[c]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(u=ze(r,e))&&u.value:r[e],!qe(a?e:c+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_e(i,o)}(t.sham||o&&o.sham)&&De(i,"sham",!0),Be(r,e,i,t)}},Co=i,xo=c,Ro=We,Fo=U,Mo=Ft,Io=ee,Lo=function(t,n,r){var e=He(n);e in t?Je.f(t,e,Ke(0,r)):t[e]=r},No=function(t,n){return new(jo(t))(0===n?0:n)},ko=function(t){return To>=51||!Po((function(){var n=[];return(n.constructor={})[Ao]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},zo=nt,Do=Xt("isConcatSpreadable"),Bo=9007199254740991,Go="Maximum allowed index exceeded",_o=Co.TypeError,qo=zo>=51||!xo((function(){var t=[];return t[Do]=!1,t.concat()[0]!==t})),Uo=ko("concat"),Wo=function(t){if(!Fo(t))return!1;var n=t[Do];return void 0!==n?!!n:Ro(t)};Eo({target:"Array",proto:!0,arity:1,forced:!qo||!Uo},{concat:function(t){var n,r,e,o,i,u=Mo(this),c=No(u,0),a=0;for(n=-1,e=arguments.length;n<e;n++)if(Wo(i=-1===n?u:arguments[n])){if(a+(o=Io(i))>Bo)throw _o(Go);for(r=0;r<o;r++,a++)r in i&&Lo(c,a,i[r])}else{if(a>=Bo)throw _o(Go);Lo(c,a++,i)}return c.length=a,c}}),r.default.fn.bootstrapTable.locales["fr-BE"]={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Chargement en cours"},formatRecordsPerPage:function(t){return"".concat(t," lignes par page")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Affiche de ".concat(t," à ").concat(n," sur ").concat(r," lignes (filtrés à partir de ").concat(e," lignes)"):"Affiche de ".concat(t," à ").concat(n," sur ").concat(r," lignes")},formatSRPaginationPreText:function(){return"page précédente"},formatSRPaginationPageText:function(t){return"vers la page ".concat(t)},formatSRPaginationNextText:function(){return"page suivante"},formatDetailPagination:function(t){return"Affiche ".concat(t," lignes")},formatClearSearch:function(){return"Effacer la recherche"},formatSearch:function(){return"Recherche"},formatNoMatches:function(){return"Pas de lignes trouvés"},formatPaginationSwitch:function(){return"Cacher/Afficher pagination"},formatPaginationSwitchDown:function(){return"Afficher pagination"},formatPaginationSwitchUp:function(){return"Cacher pagination"},formatRefresh:function(){return"Rafraichir"},formatToggle:function(){return"Basculer"},formatToggleOn:function(){return"Afficher vue carte"},formatToggleOff:function(){return"Cacher vue carte"},formatColumns:function(){return"Colonnes"},formatColumnsToggleAll:function(){return"Tout basculer"},formatFullscreen:function(){return"Plein écran"},formatAllRows:function(){return"Tout"},formatAutoRefresh:function(){return"Rafraîchissement automatique"},formatExport:function(){return"Exporter les données"},formatJumpTo:function(){return"Aller à"},formatAdvancedSearch:function(){return"Recherche avancée"},formatAdvancedCloseButton:function(){return"Fermer"},formatFilterControlSwitch:function(){return"Cacher/Afficher controls"},formatFilterControlSwitchHide:function(){return"Cacher controls"},formatFilterControlSwitchShow:function(){return"Afficher controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["fr-BE"])}));
