/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.20.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=r(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u={},c=function(t){try{return!!t()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=!c((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),l=f,s=Function.prototype.call,p=l?s.bind(s):function(){return s.apply(s,arguments)},g={},h={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!h.call({1:2},1);g.f=m?function(t){var r=y(this,t);return!!r&&r.enumerable}:h;var b,v,d=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},w=f,S=Function.prototype,O=S.bind,j=S.call,P=w&&O.bind(j,j),T=w?function(t){return t&&P(t)}:function(t){return t&&function(){return j.apply(t,arguments)}},A=T,C=A({}.toString),E=A("".slice),x=function(t){return E(C(t),8,-1)},R=T,F=c,M=x,I=i.Object,L=R("".split),N=F((function(){return!I("z").propertyIsEnumerable(0)}))?function(t){return"String"==M(t)?L(t,""):I(t)}:I,k=i.TypeError,z=function(t){if(null==t)throw k("Can't call method on "+t);return t},D=N,G=z,U=function(t){return D(G(t))},_=function(t){return"function"==typeof t},q=_,B=function(t){return"object"==typeof t?null!==t:q(t)},W=i,H=_,J=function(t){return H(t)?t:void 0},K=function(t,r){return arguments.length<2?J(W[t]):W[t]&&W[t][r]},Q=T({}.isPrototypeOf),V=i,X=K("navigator","userAgent")||"",Y=V.process,$=V.Deno,Z=Y&&Y.versions||$&&$.version,tt=Z&&Z.v8;tt&&(v=(b=tt.split("."))[0]>0&&b[0]<4?1:+(b[0]+b[1])),!v&&X&&(!(b=X.match(/Edge\/(\d+)/))||b[1]>=74)&&(b=X.match(/Chrome\/(\d+)/))&&(v=+b[1]);var rt=v,nt=rt,et=c,ot=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&nt&&nt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=K,ct=_,at=Q,ft=it,lt=i.Object,st=ft?function(t){return"symbol"==typeof t}:function(t){var r=ut("Symbol");return ct(r)&&at(r.prototype,lt(t))},pt=i.String,gt=_,ht=function(t){try{return pt(t)}catch(t){return"Object"}},yt=i.TypeError,mt=function(t){if(gt(t))return t;throw yt(ht(t)+" is not a function")},bt=p,vt=_,dt=B,wt=i.TypeError,St={exports:{}},Ot=i,jt=Object.defineProperty,Pt=function(t,r){try{jt(Ot,t,{value:r,configurable:!0,writable:!0})}catch(n){Ot[t]=r}return r},Tt=Pt,At="__core-js_shared__",Ct=i[At]||Tt(At,{}),Et=Ct;(St.exports=function(t,r){return Et[t]||(Et[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var xt=z,Rt=i.Object,Ft=function(t){return Rt(xt(t))},Mt=Ft,It=T({}.hasOwnProperty),Lt=Object.hasOwn||function(t,r){return It(Mt(t),r)},Nt=T,kt=0,zt=Math.random(),Dt=Nt(1..toString),Gt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Dt(++kt+zt,36)},Ut=i,_t=St.exports,qt=Lt,Bt=Gt,Wt=ot,Ht=it,Jt=_t("wks"),Kt=Ut.Symbol,Qt=Kt&&Kt.for,Vt=Ht?Kt:Kt&&Kt.withoutSetter||Bt,Xt=function(t){if(!qt(Jt,t)||!Wt&&"string"!=typeof Jt[t]){var r="Symbol."+t;Wt&&qt(Kt,t)?Jt[t]=Kt[t]:Jt[t]=Ht&&Qt?Qt(r):Vt(r)}return Jt[t]},Yt=p,$t=B,Zt=st,tr=function(t,r){var n=t[r];return null==n?void 0:mt(n)},rr=function(t,r){var n,e;if("string"===r&&vt(n=t.toString)&&!dt(e=bt(n,t)))return e;if(vt(n=t.valueOf)&&!dt(e=bt(n,t)))return e;if("string"!==r&&vt(n=t.toString)&&!dt(e=bt(n,t)))return e;throw wt("Can't convert object to primitive value")},nr=Xt,er=i.TypeError,or=nr("toPrimitive"),ir=function(t,r){if(!$t(t)||Zt(t))return t;var n,e=tr(t,or);if(e){if(void 0===r&&(r="default"),n=Yt(e,t,r),!$t(n)||Zt(n))return n;throw er("Can't convert object to primitive value")}return void 0===r&&(r="number"),rr(t,r)},ur=st,cr=function(t){var r=ir(t,"string");return ur(r)?r:r+""},ar=B,fr=i.document,lr=ar(fr)&&ar(fr.createElement),sr=function(t){return lr?fr.createElement(t):{}},pr=!a&&!c((function(){return 7!=Object.defineProperty(sr("div"),"a",{get:function(){return 7}}).a})),gr=a,hr=p,yr=g,mr=d,br=U,vr=cr,dr=Lt,wr=pr,Sr=Object.getOwnPropertyDescriptor;u.f=gr?Sr:function(t,r){if(t=br(t),r=vr(r),wr)try{return Sr(t,r)}catch(t){}if(dr(t,r))return mr(!hr(yr.f,t,r),t[r])};var Or={},jr=a&&c((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Pr=i,Tr=B,Ar=Pr.String,Cr=Pr.TypeError,Er=function(t){if(Tr(t))return t;throw Cr(Ar(t)+" is not an object")},xr=a,Rr=pr,Fr=jr,Mr=Er,Ir=cr,Lr=i.TypeError,Nr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,zr="enumerable",Dr="configurable",Gr="writable";Or.f=xr?Fr?function(t,r,n){if(Mr(t),r=Ir(r),Mr(n),"function"==typeof t&&"prototype"===r&&"value"in n&&Gr in n&&!n.writable){var e=kr(t,r);e&&e.writable&&(t[r]=n.value,n={configurable:Dr in n?n.configurable:e.configurable,enumerable:zr in n?n.enumerable:e.enumerable,writable:!1})}return Nr(t,r,n)}:Nr:function(t,r,n){if(Mr(t),r=Ir(r),Mr(n),Rr)try{return Nr(t,r,n)}catch(t){}if("get"in n||"set"in n)throw Lr("Accessors not supported");return"value"in n&&(t[r]=n.value),t};var Ur=Or,_r=d,qr=a?function(t,r,n){return Ur.f(t,r,_r(1,n))}:function(t,r,n){return t[r]=n,t},Br={exports:{}},Wr=a,Hr=Lt,Jr=Function.prototype,Kr=Wr&&Object.getOwnPropertyDescriptor,Qr=Hr(Jr,"name"),Vr={EXISTS:Qr,PROPER:Qr&&"something"===function(){}.name,CONFIGURABLE:Qr&&(!Wr||Wr&&Kr(Jr,"name").configurable)},Xr=_,Yr=Ct,$r=T(Function.toString);Xr(Yr.inspectSource)||(Yr.inspectSource=function(t){return $r(t)});var Zr,tn,rn,nn=Yr.inspectSource,en=_,on=nn,un=i.WeakMap,cn=en(un)&&/native code/.test(on(un)),an=St.exports,fn=Gt,ln=an("keys"),sn={},pn=cn,gn=i,hn=T,yn=B,mn=qr,bn=Lt,vn=Ct,dn=function(t){return ln[t]||(ln[t]=fn(t))},wn=sn,Sn="Object already initialized",On=gn.TypeError,jn=gn.WeakMap;if(pn||vn.state){var Pn=vn.state||(vn.state=new jn),Tn=hn(Pn.get),An=hn(Pn.has),Cn=hn(Pn.set);Zr=function(t,r){if(An(Pn,t))throw new On(Sn);return r.facade=t,Cn(Pn,t,r),r},tn=function(t){return Tn(Pn,t)||{}},rn=function(t){return An(Pn,t)}}else{var En=dn("state");wn[En]=!0,Zr=function(t,r){if(bn(t,En))throw new On(Sn);return r.facade=t,mn(t,En,r),r},tn=function(t){return bn(t,En)?t[En]:{}},rn=function(t){return bn(t,En)}}var xn={set:Zr,get:tn,has:rn,enforce:function(t){return rn(t)?tn(t):Zr(t,{})},getterFor:function(t){return function(r){var n;if(!yn(r)||(n=tn(r)).type!==t)throw On("Incompatible receiver, "+t+" required");return n}}},Rn=c,Fn=_,Mn=Lt,In=a,Ln=Vr.CONFIGURABLE,Nn=nn,kn=xn.enforce,zn=xn.get,Dn=Object.defineProperty,Gn=In&&!Rn((function(){return 8!==Dn((function(){}),"length",{value:8}).length})),Un=String(String).split("String"),_n=Br.exports=function(t,r,n){if("Symbol("===String(r).slice(0,7)&&(r="["+String(r).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(r="get "+r),n&&n.setter&&(r="set "+r),(!Mn(t,"name")||Ln&&t.name!==r)&&Dn(t,"name",{value:r,configurable:!0}),Gn&&n&&Mn(n,"arity")&&t.length!==n.arity&&Dn(t,"length",{value:n.arity}),n&&Mn(n,"constructor")&&n.constructor){if(In)try{Dn(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var e=kn(t);return Mn(e,"source")||(e.source=Un.join("string"==typeof r?r:"")),t};Function.prototype.toString=_n((function(){return Fn(this)&&zn(this).source||Nn(this)}),"toString");var qn=i,Bn=_,Wn=qr,Hn=Br.exports,Jn=Pt,Kn={},Qn=Math.ceil,Vn=Math.floor,Xn=function(t){var r=+t;return r!=r||0===r?0:(r>0?Vn:Qn)(r)},Yn=Xn,$n=Math.max,Zn=Math.min,te=Xn,re=Math.min,ne=function(t){return t>0?re(te(t),9007199254740991):0},ee=function(t){return ne(t.length)},oe=U,ie=function(t,r){var n=Yn(t);return n<0?$n(n+r,0):Zn(n,r)},ue=ee,ce=function(t){return function(r,n,e){var o,i=oe(r),u=ue(i),c=ie(e,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},ae={includes:ce(!0),indexOf:ce(!1)},fe=Lt,le=U,se=ae.indexOf,pe=sn,ge=T([].push),he=function(t,r){var n,e=le(t),o=0,i=[];for(n in e)!fe(pe,n)&&fe(e,n)&&ge(i,n);for(;r.length>o;)fe(e,n=r[o++])&&(~se(i,n)||ge(i,n));return i},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Kn.f=Object.getOwnPropertyNames||function(t){return he(t,ye)};var me={};me.f=Object.getOwnPropertySymbols;var be=K,ve=Kn,de=me,we=Er,Se=T([].concat),Oe=be("Reflect","ownKeys")||function(t){var r=ve.f(we(t)),n=de.f;return n?Se(r,n(t)):r},je=Lt,Pe=Oe,Te=u,Ae=Or,Ce=c,Ee=_,xe=/#|\.prototype\./,Re=function(t,r){var n=Me[Fe(t)];return n==Le||n!=Ie&&(Ee(r)?Ce(r):!!r)},Fe=Re.normalize=function(t){return String(t).replace(xe,".").toLowerCase()},Me=Re.data={},Ie=Re.NATIVE="N",Le=Re.POLYFILL="P",Ne=Re,ke=i,ze=u.f,De=qr,Ge=function(t,r,n,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet,c=e&&void 0!==e.name?e.name:r;return Bn(n)&&Hn(n,c,e),t===qn?(i?t[r]=n:Jn(r,n),t):(o?!u&&t[r]&&(i=!0):delete t[r],i?t[r]=n:Wn(t,r,n),t)},Ue=Pt,_e=function(t,r,n){for(var e=Pe(r),o=Ae.f,i=Te.f,u=0;u<e.length;u++){var c=e[u];je(t,c)||n&&je(n,c)||o(t,c,i(r,c))}},qe=Ne,Be=x,We=Array.isArray||function(t){return"Array"==Be(t)},He=cr,Je=Or,Ke=d,Qe={};Qe[Xt("toStringTag")]="z";var Ve=i,Xe="[object z]"===String(Qe),Ye=_,$e=x,Ze=Xt("toStringTag"),to=Ve.Object,ro="Arguments"==$e(function(){return arguments}()),no=T,eo=c,oo=_,io=Xe?$e:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=to(t),Ze))?n:ro?$e(r):"Object"==(e=$e(r))&&Ye(r.callee)?"Arguments":e},uo=nn,co=function(){},ao=[],fo=K("Reflect","construct"),lo=/^\s*(?:class|function)\b/,so=no(lo.exec),po=!lo.exec(co),go=function(t){if(!oo(t))return!1;try{return fo(co,ao,t),!0}catch(t){return!1}},ho=function(t){if(!oo(t))return!1;switch(io(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return po||!!so(lo,uo(t))}catch(t){return!0}};ho.sham=!0;var yo=!fo||eo((function(){var t;return go(go.call)||!go(Object)||!go((function(){t=!0}))||t}))?ho:go,mo=i,bo=We,vo=yo,wo=B,So=Xt("species"),Oo=mo.Array,jo=function(t){var r;return bo(t)&&(r=t.constructor,(vo(r)&&(r===Oo||bo(r.prototype))||wo(r)&&null===(r=r[So]))&&(r=void 0)),void 0===r?Oo:r},Po=c,To=rt,Ao=Xt("species"),Co=function(t,r){var n,e,o,i,u,c=t.target,a=t.global,f=t.stat;if(n=a?ke:f?ke[c]||Ue(c,{}):(ke[c]||{}).prototype)for(e in r){if(i=r[e],o=t.noTargetGet?(u=ze(n,e))&&u.value:n[e],!qe(a?e:c+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_e(i,o)}(t.sham||o&&o.sham)&&De(i,"sham",!0),Ge(n,e,i,t)}},Eo=i,xo=c,Ro=We,Fo=B,Mo=Ft,Io=ee,Lo=function(t,r,n){var e=He(r);e in t?Je.f(t,e,Ke(0,n)):t[e]=n},No=function(t,r){return new(jo(t))(0===r?0:r)},ko=function(t){return To>=51||!Po((function(){var r=[];return(r.constructor={})[Ao]=function(){return{foo:1}},1!==r[t](Boolean).foo}))},zo=rt,Do=Xt("isConcatSpreadable"),Go=9007199254740991,Uo="Maximum allowed index exceeded",_o=Eo.TypeError,qo=zo>=51||!xo((function(){var t=[];return t[Do]=!1,t.concat()[0]!==t})),Bo=ko("concat"),Wo=function(t){if(!Fo(t))return!1;var r=t[Do];return void 0!==r?!!r:Ro(t)};Co({target:"Array",proto:!0,arity:1,forced:!qo||!Bo},{concat:function(t){var r,n,e,o,i,u=Mo(this),c=No(u,0),a=0;for(r=-1,e=arguments.length;r<e;r++)if(Wo(i=-1===r?u:arguments[r])){if(a+(o=Io(i))>Go)throw _o(Uo);for(n=0;n<o;n++,a++)n in i&&Lo(c,a,i[n])}else{if(a>=Go)throw _o(Uo);Lo(c,a++,i)}return c.length=a,c}}),n.default.fn.bootstrapTable.locales["fr-LU"]={formatCopyRows:function(){return"Copier les lignes"},formatPrint:function(){return"Imprimer"},formatLoadingMessage:function(){return"Chargement en cours"},formatRecordsPerPage:function(t){return"".concat(t," lignes par page")},formatShowingRows:function(t,r,n,e){return void 0!==e&&e>0&&e>n?"Affiche de ".concat(t," à ").concat(r," sur ").concat(n," lignes (filtrés à partir de ").concat(e," lignes)"):"Affiche de ".concat(t," à ").concat(r," sur ").concat(n," lignes")},formatSRPaginationPreText:function(){return"page précédente"},formatSRPaginationPageText:function(t){return"vers la page ".concat(t)},formatSRPaginationNextText:function(){return"page suivante"},formatDetailPagination:function(t){return"Affiche ".concat(t," lignes")},formatClearSearch:function(){return"Effacer la recherche"},formatSearch:function(){return"Recherche"},formatNoMatches:function(){return"Pas de lignes trouvés"},formatPaginationSwitch:function(){return"Cacher/Afficher pagination"},formatPaginationSwitchDown:function(){return"Afficher pagination"},formatPaginationSwitchUp:function(){return"Cacher pagination"},formatRefresh:function(){return"Rafraichir"},formatToggle:function(){return"Basculer"},formatToggleOn:function(){return"Afficher vue carte"},formatToggleOff:function(){return"Cacher vue carte"},formatColumns:function(){return"Colonnes"},formatColumnsToggleAll:function(){return"Tout basculer"},formatFullscreen:function(){return"Plein écran"},formatAllRows:function(){return"Tout"},formatAutoRefresh:function(){return"Rafraîchissement automatique"},formatExport:function(){return"Exporter les données"},formatJumpTo:function(){return"Aller à"},formatAdvancedSearch:function(){return"Recherche avancée"},formatAdvancedCloseButton:function(){return"Fermer"},formatFilterControlSwitch:function(){return"Cacher/Afficher controls"},formatFilterControlSwitchHide:function(){return"Cacher controls"},formatFilterControlSwitchShow:function(){return"Afficher controls"}},n.default.extend(n.default.fn.bootstrapTable.defaults,n.default.fn.bootstrapTable.locales["fr-LU"])}));