var a1=Object.create;var F0=Object.defineProperty;var f1=Object.getOwnPropertyDescriptor;var l1=Object.getOwnPropertyNames;var c1=Object.getPrototypeOf,d1=Object.prototype.hasOwnProperty;var p1=(i,f)=>()=>(f||i((f={exports:{}}).exports,f),f.exports);var h1=(i,f,h,d)=>{if(f&&typeof f=="object"||typeof f=="function")for(let _ of l1(f))!d1.call(i,_)&&_!==h&&F0(i,_,{get:()=>f[_],enumerable:!(d=f1(f,_))||d.enumerable});return i};var Ge=(i,f,h)=>(h=i!=null?a1(c1(i)):{},h1(f||!i||!i.__esModule?F0(h,"default",{value:i,enumerable:!0}):h,i));var xe=p1((Ke,gt)=>{(function(){var i,f="4.18.1",h=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",_="Expected a function",w="Invalid `variable` option passed into `_.template`",x="Invalid `imports` option passed into `_.template`",C="__lodash_hash_undefined__",H=500,O="__lodash_placeholder__",L=1,Y=2,z=4,mn=1,_n=2,nn=1,zn=2,ro=4,Fn=8,Ee=16,Dn=32,Te=64,Xn=128,Xe=256,vr=512,hs=30,gs="...",ms=800,_s=16,io=1,vs=2,Ss=3,he=1/0,re=9007199254740991,ys=17976931348623157e292,vt=NaN,Bn=4294967295,ws=Bn-1,Os=Bn>>>1,Us=[["ary",Xn],["bind",nn],["bindKey",zn],["curry",Fn],["curryRight",Ee],["flip",vr],["partial",Dn],["partialRight",Te],["rearg",Xe]],He="[object Arguments]",St="[object Array]",xs="[object AsyncFunction]",Ye="[object Boolean]",qe="[object Date]",Es="[object DOMException]",yt="[object Error]",wt="[object Function]",oo="[object GeneratorFunction]",Nn="[object Map]",Ze="[object Number]",Ts="[object Null]",Yn="[object Object]",uo="[object Promise]",Hs="[object Proxy]",Ve="[object RegExp]",In="[object Set]",Je="[object String]",Ot="[object Symbol]",Rs="[object Undefined]",Qe="[object WeakMap]",As="[object WeakSet]",je="[object ArrayBuffer]",Re="[object DataView]",Sr="[object Float32Array]",yr="[object Float64Array]",wr="[object Int8Array]",Or="[object Int16Array]",Ur="[object Int32Array]",xr="[object Uint8Array]",Er="[object Uint8ClampedArray]",Tr="[object Uint16Array]",Hr="[object Uint32Array]",Ws=/\b__p \+= '';/g,Cs=/\b(__p \+=) '' \+/g,Ns=/(__e\(.*?\)|\b__t\)) \+\n'';/g,so=/&(?:amp|lt|gt|quot|#39);/g,ao=/[&<>"']/g,Is=RegExp(so.source),bs=RegExp(ao.source),Ls=/<%-([\s\S]+?)%>/g,Ps=/<%([\s\S]+?)%>/g,fo=/<%=([\s\S]+?)%>/g,ks=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ms=/^\w*$/,Fs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rr=/[\\^$.*+?()[\]{}|]/g,Ds=RegExp(Rr.source),Ar=/^\s+/,Bs=/\s/,Gs=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ks=/\{\n\/\* \[wrapped with (.+)\] \*/,$s=/,? & /,zs=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,lo=/[()=,{}\[\]\/\s]/,Xs=/\\(\\)?/g,Ys=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,co=/\w*$/,qs=/^[-+]0x[0-9a-f]+$/i,Zs=/^0b[01]+$/i,Vs=/^\[object .+?Constructor\]$/,Js=/^0o[0-7]+$/i,Qs=/^(?:0|[1-9]\d*)$/,js=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ut=/($^)/,na=/['\n\r\u2028\u2029\\]/g,xt="\\ud800-\\udfff",ea="\\u0300-\\u036f",ta="\\ufe20-\\ufe2f",ra="\\u20d0-\\u20ff",po=ea+ta+ra,ho="\\u2700-\\u27bf",go="a-z\\xdf-\\xf6\\xf8-\\xff",ia="\\xac\\xb1\\xd7\\xf7",oa="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ua="\\u2000-\\u206f",sa=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",mo="A-Z\\xc0-\\xd6\\xd8-\\xde",_o="\\ufe0e\\ufe0f",vo=ia+oa+ua+sa,Wr="['\u2019]",aa="["+xt+"]",So="["+vo+"]",Et="["+po+"]",yo="\\d+",fa="["+ho+"]",wo="["+go+"]",Oo="[^"+xt+vo+yo+ho+go+mo+"]",Cr="\\ud83c[\\udffb-\\udfff]",la="(?:"+Et+"|"+Cr+")",Uo="[^"+xt+"]",Nr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ir="[\\ud800-\\udbff][\\udc00-\\udfff]",Ae="["+mo+"]",xo="\\u200d",Eo="(?:"+wo+"|"+Oo+")",ca="(?:"+Ae+"|"+Oo+")",To="(?:"+Wr+"(?:d|ll|m|re|s|t|ve))?",Ho="(?:"+Wr+"(?:D|LL|M|RE|S|T|VE))?",Ro=la+"?",Ao="["+_o+"]?",da="(?:"+xo+"(?:"+[Uo,Nr,Ir].join("|")+")"+Ao+Ro+")*",pa="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ha="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wo=Ao+Ro+da,ga="(?:"+[fa,Nr,Ir].join("|")+")"+Wo,ma="(?:"+[Uo+Et+"?",Et,Nr,Ir,aa].join("|")+")",_a=RegExp(Wr,"g"),va=RegExp(Et,"g"),br=RegExp(Cr+"(?="+Cr+")|"+ma+Wo,"g"),Sa=RegExp([Ae+"?"+wo+"+"+To+"(?="+[So,Ae,"$"].join("|")+")",ca+"+"+Ho+"(?="+[So,Ae+Eo,"$"].join("|")+")",Ae+"?"+Eo+"+"+To,Ae+"+"+Ho,ha,pa,yo,ga].join("|"),"g"),ya=RegExp("["+xo+xt+po+_o+"]"),wa=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Oa=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ua=-1,q={};q[Sr]=q[yr]=q[wr]=q[Or]=q[Ur]=q[xr]=q[Er]=q[Tr]=q[Hr]=!0,q[He]=q[St]=q[je]=q[Ye]=q[Re]=q[qe]=q[yt]=q[wt]=q[Nn]=q[Ze]=q[Yn]=q[Ve]=q[In]=q[Je]=q[Qe]=!1;var X={};X[He]=X[St]=X[je]=X[Re]=X[Ye]=X[qe]=X[Sr]=X[yr]=X[wr]=X[Or]=X[Ur]=X[Nn]=X[Ze]=X[Yn]=X[Ve]=X[In]=X[Je]=X[Ot]=X[xr]=X[Er]=X[Tr]=X[Hr]=!0,X[yt]=X[wt]=X[Qe]=!1;var xa={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ea={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ta={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ha={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ra=parseFloat,Aa=parseInt,Co=typeof global=="object"&&global&&global.Object===Object&&global,Wa=typeof self=="object"&&self&&self.Object===Object&&self,rn=Co||Wa||Function("return this")(),Lr=typeof Ke=="object"&&Ke&&!Ke.nodeType&&Ke,ge=Lr&&typeof gt=="object"&&gt&&!gt.nodeType&&gt,No=ge&&ge.exports===Lr,Pr=No&&Co.process,En=(function(){try{var c=ge&&ge.require&&ge.require("util").types;return c||Pr&&Pr.binding&&Pr.binding("util")}catch{}})(),Io=En&&En.isArrayBuffer,bo=En&&En.isDate,Lo=En&&En.isMap,Po=En&&En.isRegExp,ko=En&&En.isSet,Mo=En&&En.isTypedArray;function vn(c,m,g){switch(g.length){case 0:return c.call(m);case 1:return c.call(m,g[0]);case 2:return c.call(m,g[0],g[1]);case 3:return c.call(m,g[0],g[1],g[2])}return c.apply(m,g)}function Ca(c,m,g,E){for(var N=-1,B=c==null?0:c.length;++N<B;){var en=c[N];m(E,en,g(en),c)}return E}function Sn(c,m){for(var g=-1,E=c==null?0:c.length;++g<E&&m(c[g],g,c)!==!1;);return c}function Na(c,m){for(var g=c==null?0:c.length;g--&&m(c[g],g,c)!==!1;);return c}function Fo(c,m){for(var g=-1,E=c==null?0:c.length;++g<E;)if(!m(c[g],g,c))return!1;return!0}function ie(c,m){for(var g=-1,E=c==null?0:c.length,N=0,B=[];++g<E;){var en=c[g];m(en,g,c)&&(B[N++]=en)}return B}function Tt(c,m){var g=c==null?0:c.length;return!!g&&We(c,m,0)>-1}function kr(c,m,g){for(var E=-1,N=c==null?0:c.length;++E<N;)if(g(m,c[E]))return!0;return!1}function Z(c,m){for(var g=-1,E=c==null?0:c.length,N=Array(E);++g<E;)N[g]=m(c[g],g,c);return N}function oe(c,m){for(var g=-1,E=m.length,N=c.length;++g<E;)c[N+g]=m[g];return c}function Mr(c,m,g,E){var N=-1,B=c==null?0:c.length;for(E&&B&&(g=c[++N]);++N<B;)g=m(g,c[N],N,c);return g}function Ia(c,m,g,E){var N=c==null?0:c.length;for(E&&N&&(g=c[--N]);N--;)g=m(g,c[N],N,c);return g}function Fr(c,m){for(var g=-1,E=c==null?0:c.length;++g<E;)if(m(c[g],g,c))return!0;return!1}var ba=Dr("length");function La(c){return c.split("")}function Pa(c){return c.match(zs)||[]}function Do(c,m,g){var E;return g(c,function(N,B,en){if(m(N,B,en))return E=B,!1}),E}function Ht(c,m,g,E){for(var N=c.length,B=g+(E?1:-1);E?B--:++B<N;)if(m(c[B],B,c))return B;return-1}function We(c,m,g){return m===m?qa(c,m,g):Ht(c,Bo,g)}function ka(c,m,g,E){for(var N=g-1,B=c.length;++N<B;)if(E(c[N],m))return N;return-1}function Bo(c){return c!==c}function Go(c,m){var g=c==null?0:c.length;return g?Gr(c,m)/g:vt}function Dr(c){return function(m){return m==null?i:m[c]}}function Br(c){return function(m){return c==null?i:c[m]}}function Ko(c,m,g,E,N){return N(c,function(B,en,$){g=E?(E=!1,B):m(g,B,en,$)}),g}function Ma(c,m){var g=c.length;for(c.sort(m);g--;)c[g]=c[g].value;return c}function Gr(c,m){for(var g,E=-1,N=c.length;++E<N;){var B=m(c[E]);B!==i&&(g=g===i?B:g+B)}return g}function Kr(c,m){for(var g=-1,E=Array(c);++g<c;)E[g]=m(g);return E}function Fa(c,m){return Z(m,function(g){return[g,c[g]]})}function $o(c){return c&&c.slice(0,qo(c)+1).replace(Ar,"")}function yn(c){return function(m){return c(m)}}function $r(c,m){return Z(m,function(g){return c[g]})}function nt(c,m){return c.has(m)}function zo(c,m){for(var g=-1,E=c.length;++g<E&&We(m,c[g],0)>-1;);return g}function Xo(c,m){for(var g=c.length;g--&&We(m,c[g],0)>-1;);return g}function Da(c,m){for(var g=c.length,E=0;g--;)c[g]===m&&++E;return E}var Ba=Br(xa),Ga=Br(Ea);function Ka(c){return"\\"+Ha[c]}function $a(c,m){return c==null?i:c[m]}function Ce(c){return ya.test(c)}function za(c){return wa.test(c)}function Xa(c){for(var m,g=[];!(m=c.next()).done;)g.push(m.value);return g}function zr(c){var m=-1,g=Array(c.size);return c.forEach(function(E,N){g[++m]=[N,E]}),g}function Yo(c,m){return function(g){return c(m(g))}}function ue(c,m){for(var g=-1,E=c.length,N=0,B=[];++g<E;){var en=c[g];(en===m||en===O)&&(c[g]=O,B[N++]=g)}return B}function Rt(c){var m=-1,g=Array(c.size);return c.forEach(function(E){g[++m]=E}),g}function Ya(c){var m=-1,g=Array(c.size);return c.forEach(function(E){g[++m]=[E,E]}),g}function qa(c,m,g){for(var E=g-1,N=c.length;++E<N;)if(c[E]===m)return E;return-1}function Za(c,m,g){for(var E=g+1;E--;)if(c[E]===m)return E;return E}function Ne(c){return Ce(c)?Ja(c):ba(c)}function bn(c){return Ce(c)?Qa(c):La(c)}function qo(c){for(var m=c.length;m--&&Bs.test(c.charAt(m)););return m}var Va=Br(Ta);function Ja(c){for(var m=br.lastIndex=0;br.test(c);)++m;return m}function Qa(c){return c.match(br)||[]}function ja(c){return c.match(Sa)||[]}var nf=(function c(m){m=m==null?rn:se.defaults(rn.Object(),m,se.pick(rn,Oa));var g=m.Array,E=m.Date,N=m.Error,B=m.Function,en=m.Math,$=m.Object,Xr=m.RegExp,ef=m.String,Tn=m.TypeError,At=g.prototype,tf=B.prototype,Ie=$.prototype,Wt=m["__core-js_shared__"],Ct=tf.toString,G=Ie.hasOwnProperty,rf=0,Zo=(function(){var n=/[^.]+$/.exec(Wt&&Wt.keys&&Wt.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Nt=Ie.toString,of=Ct.call($),uf=rn._,sf=Xr("^"+Ct.call(G).replace(Rr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),It=No?m.Buffer:i,ae=m.Symbol,bt=m.Uint8Array,Vo=It?It.allocUnsafe:i,Lt=Yo($.getPrototypeOf,$),Jo=$.create,Qo=Ie.propertyIsEnumerable,Pt=At.splice,jo=ae?ae.isConcatSpreadable:i,et=ae?ae.iterator:i,me=ae?ae.toStringTag:i,kt=(function(){try{var n=we($,"defineProperty");return n({},"",{}),n}catch{}})(),af=m.clearTimeout!==rn.clearTimeout&&m.clearTimeout,ff=E&&E.now!==rn.Date.now&&E.now,lf=m.setTimeout!==rn.setTimeout&&m.setTimeout,Mt=en.ceil,Ft=en.floor,Yr=$.getOwnPropertySymbols,cf=It?It.isBuffer:i,nu=m.isFinite,df=At.join,pf=Yo($.keys,$),tn=en.max,sn=en.min,hf=E.now,gf=m.parseInt,eu=en.random,mf=At.reverse,qr=we(m,"DataView"),tt=we(m,"Map"),Zr=we(m,"Promise"),be=we(m,"Set"),rt=we(m,"WeakMap"),it=we($,"create"),Dt=rt&&new rt,Le={},_f=Oe(qr),vf=Oe(tt),Sf=Oe(Zr),yf=Oe(be),wf=Oe(rt),Bt=ae?ae.prototype:i,ot=Bt?Bt.valueOf:i,tu=Bt?Bt.toString:i;function u(n){if(J(n)&&!I(n)&&!(n instanceof F)){if(n instanceof Hn)return n;if(G.call(n,"__wrapped__"))return r0(n)}return new Hn(n)}var Pe=(function(){function n(){}return function(e){if(!V(e))return{};if(Jo)return Jo(e);n.prototype=e;var t=new n;return n.prototype=i,t}})();function Gt(){}function Hn(n,e){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=i}u.templateSettings={escape:Ls,evaluate:Ps,interpolate:fo,variable:"",imports:{_:u}},u.prototype=Gt.prototype,u.prototype.constructor=u,Hn.prototype=Pe(Gt.prototype),Hn.prototype.constructor=Hn;function F(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Bn,this.__views__=[]}function Of(){var n=new F(this.__wrapped__);return n.__actions__=dn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=dn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=dn(this.__views__),n}function Uf(){if(this.__filtered__){var n=new F(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function xf(){var n=this.__wrapped__.value(),e=this.__dir__,t=I(n),r=e<0,o=t?n.length:0,s=Pl(0,o,this.__views__),a=s.start,l=s.end,p=l-a,v=r?l:a-1,S=this.__iteratees__,y=S.length,U=0,T=sn(p,this.__takeCount__);if(!t||!r&&o==p&&T==p)return Tu(n,this.__actions__);var W=[];n:for(;p--&&U<T;){v+=e;for(var P=-1,R=n[v];++P<y;){var M=S[P],D=M.iteratee,Un=M.type,cn=D(R);if(Un==vs)R=cn;else if(!cn){if(Un==io)continue n;break n}}W[U++]=R}return W}F.prototype=Pe(Gt.prototype),F.prototype.constructor=F;function _e(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}function Ef(){this.__data__=it?it(null):{},this.size=0}function Tf(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}function Hf(n){var e=this.__data__;if(it){var t=e[n];return t===C?i:t}return G.call(e,n)?e[n]:i}function Rf(n){var e=this.__data__;return it?e[n]!==i:G.call(e,n)}function Af(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=it&&e===i?C:e,this}_e.prototype.clear=Ef,_e.prototype.delete=Tf,_e.prototype.get=Hf,_e.prototype.has=Rf,_e.prototype.set=Af;function qn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}function Wf(){this.__data__=[],this.size=0}function Cf(n){var e=this.__data__,t=Kt(e,n);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():Pt.call(e,t,1),--this.size,!0}function Nf(n){var e=this.__data__,t=Kt(e,n);return t<0?i:e[t][1]}function If(n){return Kt(this.__data__,n)>-1}function bf(n,e){var t=this.__data__,r=Kt(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this}qn.prototype.clear=Wf,qn.prototype.delete=Cf,qn.prototype.get=Nf,qn.prototype.has=If,qn.prototype.set=bf;function Zn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}function Lf(){this.size=0,this.__data__={hash:new _e,map:new(tt||qn),string:new _e}}function Pf(n){var e=er(this,n).delete(n);return this.size-=e?1:0,e}function kf(n){return er(this,n).get(n)}function Mf(n){return er(this,n).has(n)}function Ff(n,e){var t=er(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this}Zn.prototype.clear=Lf,Zn.prototype.delete=Pf,Zn.prototype.get=kf,Zn.prototype.has=Mf,Zn.prototype.set=Ff;function ve(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new Zn;++e<t;)this.add(n[e])}function Df(n){return this.__data__.set(n,C),this}function Bf(n){return this.__data__.has(n)}ve.prototype.add=ve.prototype.push=Df,ve.prototype.has=Bf;function Ln(n){var e=this.__data__=new qn(n);this.size=e.size}function Gf(){this.__data__=new qn,this.size=0}function Kf(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function $f(n){return this.__data__.get(n)}function zf(n){return this.__data__.has(n)}function Xf(n,e){var t=this.__data__;if(t instanceof qn){var r=t.__data__;if(!tt||r.length<h-1)return r.push([n,e]),this.size=++t.size,this;t=this.__data__=new Zn(r)}return t.set(n,e),this.size=t.size,this}Ln.prototype.clear=Gf,Ln.prototype.delete=Kf,Ln.prototype.get=$f,Ln.prototype.has=zf,Ln.prototype.set=Xf;function ru(n,e){var t=I(n),r=!t&&Ue(n),o=!t&&!r&&pe(n),s=!t&&!r&&!o&&De(n),a=t||r||o||s,l=a?Kr(n.length,ef):[],p=l.length;for(var v in n)(e||G.call(n,v))&&!(a&&(v=="length"||o&&(v=="offset"||v=="parent")||s&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Qn(v,p)))&&l.push(v);return l}function iu(n){var e=n.length;return e?n[ui(0,e-1)]:i}function Yf(n,e){return tr(dn(n),Se(e,0,n.length))}function qf(n){return tr(dn(n))}function Vr(n,e,t){(t!==i&&!kn(n[e],t)||t===i&&!(e in n))&&Gn(n,e,t)}function ut(n,e,t){var r=n[e];(!(G.call(n,e)&&kn(r,t))||t===i&&!(e in n))&&Gn(n,e,t)}function Kt(n,e){for(var t=n.length;t--;)if(kn(n[t][0],e))return t;return-1}function Zf(n,e,t,r){return fe(n,function(o,s,a){e(r,o,t(o),a)}),r}function ou(n,e){return n&&$n(e,on(e),n)}function Vf(n,e){return n&&$n(e,hn(e),n)}function Gn(n,e,t){e=="__proto__"&&kt?kt(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}function Jr(n,e){for(var t=-1,r=e.length,o=g(r),s=n==null;++t<r;)o[t]=s?i:Ni(n,e[t]);return o}function Se(n,e,t){return n===n&&(t!==i&&(n=n<=t?n:t),e!==i&&(n=n>=e?n:e)),n}function Rn(n,e,t,r,o,s){var a,l=e&L,p=e&Y,v=e&z;if(t&&(a=o?t(n,r,o,s):t(n)),a!==i)return a;if(!V(n))return n;var S=I(n);if(S){if(a=Ml(n),!l)return dn(n,a)}else{var y=an(n),U=y==wt||y==oo;if(pe(n))return Au(n,l);if(y==Yn||y==He||U&&!o){if(a=p||U?{}:qu(n),!l)return p?Hl(n,Vf(a,n)):Tl(n,ou(a,n))}else{if(!X[y])return o?n:{};a=Fl(n,y,l)}}s||(s=new Ln);var T=s.get(n);if(T)return T;s.set(n,a),U0(n)?n.forEach(function(R){a.add(Rn(R,e,t,R,n,s))}):w0(n)&&n.forEach(function(R,M){a.set(M,Rn(R,e,t,M,n,s))});var W=v?p?_i:mi:p?hn:on,P=S?i:W(n);return Sn(P||n,function(R,M){P&&(M=R,R=n[M]),ut(a,M,Rn(R,e,t,M,n,s))}),a}function Jf(n){var e=on(n);return function(t){return uu(t,n,e)}}function uu(n,e,t){var r=t.length;if(n==null)return!r;for(n=$(n);r--;){var o=t[r],s=e[o],a=n[o];if(a===i&&!(o in n)||!s(a))return!1}return!0}function su(n,e,t){if(typeof n!="function")throw new Tn(_);return pt(function(){n.apply(i,t)},e)}function st(n,e,t,r){var o=-1,s=Tt,a=!0,l=n.length,p=[],v=e.length;if(!l)return p;t&&(e=Z(e,yn(t))),r?(s=kr,a=!1):e.length>=h&&(s=nt,a=!1,e=new ve(e));n:for(;++o<l;){var S=n[o],y=t==null?S:t(S);if(S=r||S!==0?S:0,a&&y===y){for(var U=v;U--;)if(e[U]===y)continue n;p.push(S)}else s(e,y,r)||p.push(S)}return p}var fe=bu(Kn),au=bu(jr,!0);function Qf(n,e){var t=!0;return fe(n,function(r,o,s){return t=!!e(r,o,s),t}),t}function $t(n,e,t){for(var r=-1,o=n.length;++r<o;){var s=n[r],a=e(s);if(a!=null&&(l===i?a===a&&!On(a):t(a,l)))var l=a,p=s}return p}function jf(n,e,t,r){var o=n.length;for(t=b(t),t<0&&(t=-t>o?0:o+t),r=r===i||r>o?o:b(r),r<0&&(r+=o),r=t>r?0:E0(r);t<r;)n[t++]=e;return n}function fu(n,e){var t=[];return fe(n,function(r,o,s){e(r,o,s)&&t.push(r)}),t}function un(n,e,t,r,o){var s=-1,a=n.length;for(t||(t=Bl),o||(o=[]);++s<a;){var l=n[s];e>0&&t(l)?e>1?un(l,e-1,t,r,o):oe(o,l):r||(o[o.length]=l)}return o}var Qr=Lu(),lu=Lu(!0);function Kn(n,e){return n&&Qr(n,e,on)}function jr(n,e){return n&&lu(n,e,on)}function zt(n,e){return ie(e,function(t){return jn(n[t])})}function ye(n,e){e=ce(e,n);for(var t=0,r=e.length;n!=null&&t<r;)n=n[Pn(e[t++])];return t&&t==r?n:i}function cu(n,e,t){var r=e(n);return I(n)?r:oe(r,t(n))}function fn(n){return n==null?n===i?Rs:Ts:me&&me in $(n)?Ll(n):ql(n)}function ni(n,e){return n>e}function nl(n,e){return n!=null&&G.call(n,e)}function el(n,e){return n!=null&&e in $(n)}function tl(n,e,t){return n>=sn(e,t)&&n<tn(e,t)}function ei(n,e,t){for(var r=t?kr:Tt,o=n[0].length,s=n.length,a=s,l=g(s),p=1/0,v=[];a--;){var S=n[a];a&&e&&(S=Z(S,yn(e))),p=sn(S.length,p),l[a]=!t&&(e||o>=120&&S.length>=120)?new ve(a&&S):i}S=n[0];var y=-1,U=l[0];n:for(;++y<o&&v.length<p;){var T=S[y],W=e?e(T):T;if(T=t||T!==0?T:0,!(U?nt(U,W):r(v,W,t))){for(a=s;--a;){var P=l[a];if(!(P?nt(P,W):r(n[a],W,t)))continue n}U&&U.push(W),v.push(T)}}return v}function rl(n,e,t,r){return Kn(n,function(o,s,a){e(r,t(o),s,a)}),r}function at(n,e,t){e=ce(e,n),n=Qu(n,e);var r=n==null?n:n[Pn(Wn(e))];return r==null?i:vn(r,n,t)}function du(n){return J(n)&&fn(n)==He}function il(n){return J(n)&&fn(n)==je}function ol(n){return J(n)&&fn(n)==qe}function ft(n,e,t,r,o){return n===e?!0:n==null||e==null||!J(n)&&!J(e)?n!==n&&e!==e:ul(n,e,t,r,ft,o)}function ul(n,e,t,r,o,s){var a=I(n),l=I(e),p=a?St:an(n),v=l?St:an(e);p=p==He?Yn:p,v=v==He?Yn:v;var S=p==Yn,y=v==Yn,U=p==v;if(U&&pe(n)){if(!pe(e))return!1;a=!0,S=!1}if(U&&!S)return s||(s=new Ln),a||De(n)?zu(n,e,t,r,o,s):Il(n,e,p,t,r,o,s);if(!(t&mn)){var T=S&&G.call(n,"__wrapped__"),W=y&&G.call(e,"__wrapped__");if(T||W){var P=T?n.value():n,R=W?e.value():e;return s||(s=new Ln),o(P,R,t,r,s)}}return U?(s||(s=new Ln),bl(n,e,t,r,o,s)):!1}function sl(n){return J(n)&&an(n)==Nn}function ti(n,e,t,r){var o=t.length,s=o,a=!r;if(n==null)return!s;for(n=$(n);o--;){var l=t[o];if(a&&l[2]?l[1]!==n[l[0]]:!(l[0]in n))return!1}for(;++o<s;){l=t[o];var p=l[0],v=n[p],S=l[1];if(a&&l[2]){if(v===i&&!(p in n))return!1}else{var y=new Ln;if(r)var U=r(v,S,p,n,e,y);if(!(U===i?ft(S,v,mn|_n,r,y):U))return!1}}return!0}function pu(n){if(!V(n)||Kl(n))return!1;var e=jn(n)?sf:Vs;return e.test(Oe(n))}function al(n){return J(n)&&fn(n)==Ve}function fl(n){return J(n)&&an(n)==In}function ll(n){return J(n)&&ar(n.length)&&!!q[fn(n)]}function hu(n){return typeof n=="function"?n:n==null?gn:typeof n=="object"?I(n)?_u(n[0],n[1]):mu(n):k0(n)}function ri(n){if(!dt(n))return pf(n);var e=[];for(var t in $(n))G.call(n,t)&&t!="constructor"&&e.push(t);return e}function cl(n){if(!V(n))return Yl(n);var e=dt(n),t=[];for(var r in n)r=="constructor"&&(e||!G.call(n,r))||t.push(r);return t}function ii(n,e){return n<e}function gu(n,e){var t=-1,r=pn(n)?g(n.length):[];return fe(n,function(o,s,a){r[++t]=e(o,s,a)}),r}function mu(n){var e=Si(n);return e.length==1&&e[0][2]?Vu(e[0][0],e[0][1]):function(t){return t===n||ti(t,n,e)}}function _u(n,e){return wi(n)&&Zu(e)?Vu(Pn(n),e):function(t){var r=Ni(t,n);return r===i&&r===e?Ii(t,n):ft(e,r,mn|_n)}}function Xt(n,e,t,r,o){n!==e&&Qr(e,function(s,a){if(o||(o=new Ln),V(s))dl(n,e,a,t,Xt,r,o);else{var l=r?r(Ui(n,a),s,a+"",n,e,o):i;l===i&&(l=s),Vr(n,a,l)}},hn)}function dl(n,e,t,r,o,s,a){var l=Ui(n,t),p=Ui(e,t),v=a.get(p);if(v){Vr(n,t,v);return}var S=s?s(l,p,t+"",n,e,a):i,y=S===i;if(y){var U=I(p),T=!U&&pe(p),W=!U&&!T&&De(p);S=p,U||T||W?I(l)?S=l:Q(l)?S=dn(l):T?(y=!1,S=Au(p,!0)):W?(y=!1,S=Wu(p,!0)):S=[]:ht(p)||Ue(p)?(S=l,Ue(l)?S=T0(l):(!V(l)||jn(l))&&(S=qu(p))):y=!1}y&&(a.set(p,S),o(S,p,r,s,a),a.delete(p)),Vr(n,t,S)}function vu(n,e){var t=n.length;if(t)return e+=e<0?t:0,Qn(e,t)?n[e]:i}function Su(n,e,t){e.length?e=Z(e,function(s){return I(s)?function(a){return ye(a,s.length===1?s[0]:s)}:s}):e=[gn];var r=-1;e=Z(e,yn(A()));var o=gu(n,function(s,a,l){var p=Z(e,function(v){return v(s)});return{criteria:p,index:++r,value:s}});return Ma(o,function(s,a){return El(s,a,t)})}function pl(n,e){return yu(n,e,function(t,r){return Ii(n,r)})}function yu(n,e,t){for(var r=-1,o=e.length,s={};++r<o;){var a=e[r],l=ye(n,a);t(l,a)&&lt(s,ce(a,n),l)}return s}function hl(n){return function(e){return ye(e,n)}}function oi(n,e,t,r){var o=r?ka:We,s=-1,a=e.length,l=n;for(n===e&&(e=dn(e)),t&&(l=Z(n,yn(t)));++s<a;)for(var p=0,v=e[s],S=t?t(v):v;(p=o(l,S,p,r))>-1;)l!==n&&Pt.call(l,p,1),Pt.call(n,p,1);return n}function wu(n,e){for(var t=n?e.length:0,r=t-1;t--;){var o=e[t];if(t==r||o!==s){var s=o;Qn(o)?Pt.call(n,o,1):fi(n,o)}}return n}function ui(n,e){return n+Ft(eu()*(e-n+1))}function gl(n,e,t,r){for(var o=-1,s=tn(Mt((e-n)/(t||1)),0),a=g(s);s--;)a[r?s:++o]=n,n+=t;return a}function si(n,e){var t="";if(!n||e<1||e>re)return t;do e%2&&(t+=n),e=Ft(e/2),e&&(n+=n);while(e);return t}function k(n,e){return xi(Ju(n,e,gn),n+"")}function ml(n){return iu(Be(n))}function _l(n,e){var t=Be(n);return tr(t,Se(e,0,t.length))}function lt(n,e,t,r){if(!V(n))return n;e=ce(e,n);for(var o=-1,s=e.length,a=s-1,l=n;l!=null&&++o<s;){var p=Pn(e[o]),v=t;if(p==="__proto__"||p==="constructor"||p==="prototype")return n;if(o!=a){var S=l[p];v=r?r(S,p,l):i,v===i&&(v=V(S)?S:Qn(e[o+1])?[]:{})}ut(l,p,v),l=l[p]}return n}var Ou=Dt?function(n,e){return Dt.set(n,e),n}:gn,vl=kt?function(n,e){return kt(n,"toString",{configurable:!0,enumerable:!1,value:Li(e),writable:!0})}:gn;function Sl(n){return tr(Be(n))}function An(n,e,t){var r=-1,o=n.length;e<0&&(e=-e>o?0:o+e),t=t>o?o:t,t<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var s=g(o);++r<o;)s[r]=n[r+e];return s}function yl(n,e){var t;return fe(n,function(r,o,s){return t=e(r,o,s),!t}),!!t}function Yt(n,e,t){var r=0,o=n==null?r:n.length;if(typeof e=="number"&&e===e&&o<=Os){for(;r<o;){var s=r+o>>>1,a=n[s];a!==null&&!On(a)&&(t?a<=e:a<e)?r=s+1:o=s}return o}return ai(n,e,gn,t)}function ai(n,e,t,r){var o=0,s=n==null?0:n.length;if(s===0)return 0;e=t(e);for(var a=e!==e,l=e===null,p=On(e),v=e===i;o<s;){var S=Ft((o+s)/2),y=t(n[S]),U=y!==i,T=y===null,W=y===y,P=On(y);if(a)var R=r||W;else v?R=W&&(r||U):l?R=W&&U&&(r||!T):p?R=W&&U&&!T&&(r||!P):T||P?R=!1:R=r?y<=e:y<e;R?o=S+1:s=S}return sn(s,ws)}function Uu(n,e){for(var t=-1,r=n.length,o=0,s=[];++t<r;){var a=n[t],l=e?e(a):a;if(!t||!kn(l,p)){var p=l;s[o++]=a===0?0:a}}return s}function xu(n){return typeof n=="number"?n:On(n)?vt:+n}function wn(n){if(typeof n=="string")return n;if(I(n))return Z(n,wn)+"";if(On(n))return tu?tu.call(n):"";var e=n+"";return e=="0"&&1/n==-he?"-0":e}function le(n,e,t){var r=-1,o=Tt,s=n.length,a=!0,l=[],p=l;if(t)a=!1,o=kr;else if(s>=h){var v=e?null:Cl(n);if(v)return Rt(v);a=!1,o=nt,p=new ve}else p=e?[]:l;n:for(;++r<s;){var S=n[r],y=e?e(S):S;if(S=t||S!==0?S:0,a&&y===y){for(var U=p.length;U--;)if(p[U]===y)continue n;e&&p.push(y),l.push(S)}else o(p,y,t)||(p!==l&&p.push(y),l.push(S))}return l}function fi(n,e){e=ce(e,n);var t=-1,r=e.length;if(!r)return!0;for(;++t<r;){var o=Pn(e[t]);if(o==="__proto__"&&!G.call(n,"__proto__")||(o==="constructor"||o==="prototype")&&t<r-1)return!1}var s=Qu(n,e);return s==null||delete s[Pn(Wn(e))]}function Eu(n,e,t,r){return lt(n,e,t(ye(n,e)),r)}function qt(n,e,t,r){for(var o=n.length,s=r?o:-1;(r?s--:++s<o)&&e(n[s],s,n););return t?An(n,r?0:s,r?s+1:o):An(n,r?s+1:0,r?o:s)}function Tu(n,e){var t=n;return t instanceof F&&(t=t.value()),Mr(e,function(r,o){return o.func.apply(o.thisArg,oe([r],o.args))},t)}function li(n,e,t){var r=n.length;if(r<2)return r?le(n[0]):[];for(var o=-1,s=g(r);++o<r;)for(var a=n[o],l=-1;++l<r;)l!=o&&(s[o]=st(s[o]||a,n[l],e,t));return le(un(s,1),e,t)}function Hu(n,e,t){for(var r=-1,o=n.length,s=e.length,a={};++r<o;){var l=r<s?e[r]:i;t(a,n[r],l)}return a}function ci(n){return Q(n)?n:[]}function di(n){return typeof n=="function"?n:gn}function ce(n,e){return I(n)?n:wi(n,e)?[n]:t0(K(n))}var wl=k;function de(n,e,t){var r=n.length;return t=t===i?r:t,!e&&t>=r?n:An(n,e,t)}var Ru=af||function(n){return rn.clearTimeout(n)};function Au(n,e){if(e)return n.slice();var t=n.length,r=Vo?Vo(t):new n.constructor(t);return n.copy(r),r}function pi(n){var e=new n.constructor(n.byteLength);return new bt(e).set(new bt(n)),e}function Ol(n,e){var t=e?pi(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}function Ul(n){var e=new n.constructor(n.source,co.exec(n));return e.lastIndex=n.lastIndex,e}function xl(n){return ot?$(ot.call(n)):{}}function Wu(n,e){var t=e?pi(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}function Cu(n,e){if(n!==e){var t=n!==i,r=n===null,o=n===n,s=On(n),a=e!==i,l=e===null,p=e===e,v=On(e);if(!l&&!v&&!s&&n>e||s&&a&&p&&!l&&!v||r&&a&&p||!t&&p||!o)return 1;if(!r&&!s&&!v&&n<e||v&&t&&o&&!r&&!s||l&&t&&o||!a&&o||!p)return-1}return 0}function El(n,e,t){for(var r=-1,o=n.criteria,s=e.criteria,a=o.length,l=t.length;++r<a;){var p=Cu(o[r],s[r]);if(p){if(r>=l)return p;var v=t[r];return p*(v=="desc"?-1:1)}}return n.index-e.index}function Nu(n,e,t,r){for(var o=-1,s=n.length,a=t.length,l=-1,p=e.length,v=tn(s-a,0),S=g(p+v),y=!r;++l<p;)S[l]=e[l];for(;++o<a;)(y||o<s)&&(S[t[o]]=n[o]);for(;v--;)S[l++]=n[o++];return S}function Iu(n,e,t,r){for(var o=-1,s=n.length,a=-1,l=t.length,p=-1,v=e.length,S=tn(s-l,0),y=g(S+v),U=!r;++o<S;)y[o]=n[o];for(var T=o;++p<v;)y[T+p]=e[p];for(;++a<l;)(U||o<s)&&(y[T+t[a]]=n[o++]);return y}function dn(n,e){var t=-1,r=n.length;for(e||(e=g(r));++t<r;)e[t]=n[t];return e}function $n(n,e,t,r){var o=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var l=e[s],p=r?r(t[l],n[l],l,t,n):i;p===i&&(p=n[l]),o?Gn(t,l,p):ut(t,l,p)}return t}function Tl(n,e){return $n(n,yi(n),e)}function Hl(n,e){return $n(n,Xu(n),e)}function Zt(n,e){return function(t,r){var o=I(t)?Ca:Zf,s=e?e():{};return o(t,n,A(r,2),s)}}function ke(n){return k(function(e,t){var r=-1,o=t.length,s=o>1?t[o-1]:i,a=o>2?t[2]:i;for(s=n.length>3&&typeof s=="function"?(o--,s):i,a&&ln(t[0],t[1],a)&&(s=o<3?i:s,o=1),e=$(e);++r<o;){var l=t[r];l&&n(e,l,r,s)}return e})}function bu(n,e){return function(t,r){if(t==null)return t;if(!pn(t))return n(t,r);for(var o=t.length,s=e?o:-1,a=$(t);(e?s--:++s<o)&&r(a[s],s,a)!==!1;);return t}}function Lu(n){return function(e,t,r){for(var o=-1,s=$(e),a=r(e),l=a.length;l--;){var p=a[n?l:++o];if(t(s[p],p,s)===!1)break}return e}}function Rl(n,e,t){var r=e&nn,o=ct(n);function s(){var a=this&&this!==rn&&this instanceof s?o:n;return a.apply(r?t:this,arguments)}return s}function Pu(n){return function(e){e=K(e);var t=Ce(e)?bn(e):i,r=t?t[0]:e.charAt(0),o=t?de(t,1).join(""):e.slice(1);return r[n]()+o}}function Me(n){return function(e){return Mr(L0(b0(e).replace(_a,"")),n,"")}}function ct(n){return function(){var e=arguments;switch(e.length){case 0:return new n;case 1:return new n(e[0]);case 2:return new n(e[0],e[1]);case 3:return new n(e[0],e[1],e[2]);case 4:return new n(e[0],e[1],e[2],e[3]);case 5:return new n(e[0],e[1],e[2],e[3],e[4]);case 6:return new n(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new n(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var t=Pe(n.prototype),r=n.apply(t,e);return V(r)?r:t}}function Al(n,e,t){var r=ct(n);function o(){for(var s=arguments.length,a=g(s),l=s,p=Fe(o);l--;)a[l]=arguments[l];var v=s<3&&a[0]!==p&&a[s-1]!==p?[]:ue(a,p);if(s-=v.length,s<t)return Bu(n,e,Vt,o.placeholder,i,a,v,i,i,t-s);var S=this&&this!==rn&&this instanceof o?r:n;return vn(S,this,a)}return o}function ku(n){return function(e,t,r){var o=$(e);if(!pn(e)){var s=A(t,3);e=on(e),t=function(l){return s(o[l],l,o)}}var a=n(e,t,r);return a>-1?o[s?e[a]:a]:i}}function Mu(n){return Jn(function(e){var t=e.length,r=t,o=Hn.prototype.thru;for(n&&e.reverse();r--;){var s=e[r];if(typeof s!="function")throw new Tn(_);if(o&&!a&&nr(s)=="wrapper")var a=new Hn([],!0)}for(r=a?r:t;++r<t;){s=e[r];var l=nr(s),p=l=="wrapper"?vi(s):i;p&&Oi(p[0])&&p[1]==(Xn|Fn|Dn|Xe)&&!p[4].length&&p[9]==1?a=a[nr(p[0])].apply(a,p[3]):a=s.length==1&&Oi(s)?a[l]():a.thru(s)}return function(){var v=arguments,S=v[0];if(a&&v.length==1&&I(S))return a.plant(S).value();for(var y=0,U=t?e[y].apply(this,v):S;++y<t;)U=e[y].call(this,U);return U}})}function Vt(n,e,t,r,o,s,a,l,p,v){var S=e&Xn,y=e&nn,U=e&zn,T=e&(Fn|Ee),W=e&vr,P=U?i:ct(n);function R(){for(var M=arguments.length,D=g(M),Un=M;Un--;)D[Un]=arguments[Un];if(T)var cn=Fe(R),xn=Da(D,cn);if(r&&(D=Nu(D,r,o,T)),s&&(D=Iu(D,s,a,T)),M-=xn,T&&M<v){var j=ue(D,cn);return Bu(n,e,Vt,R.placeholder,t,D,j,l,p,v-M)}var Mn=y?t:this,ee=U?Mn[n]:n;return M=D.length,l?D=Zl(D,l):W&&M>1&&D.reverse(),S&&p<M&&(D.length=p),this&&this!==rn&&this instanceof R&&(ee=P||ct(ee)),ee.apply(Mn,D)}return R}function Fu(n,e){return function(t,r){return rl(t,n,e(r),{})}}function Jt(n,e){return function(t,r){var o;if(t===i&&r===i)return e;if(t!==i&&(o=t),r!==i){if(o===i)return r;typeof t=="string"||typeof r=="string"?(t=wn(t),r=wn(r)):(t=xu(t),r=xu(r)),o=n(t,r)}return o}}function hi(n){return Jn(function(e){return e=Z(e,yn(A())),k(function(t){var r=this;return n(e,function(o){return vn(o,r,t)})})})}function Qt(n,e){e=e===i?" ":wn(e);var t=e.length;if(t<2)return t?si(e,n):e;var r=si(e,Mt(n/Ne(e)));return Ce(e)?de(bn(r),0,n).join(""):r.slice(0,n)}function Wl(n,e,t,r){var o=e&nn,s=ct(n);function a(){for(var l=-1,p=arguments.length,v=-1,S=r.length,y=g(S+p),U=this&&this!==rn&&this instanceof a?s:n;++v<S;)y[v]=r[v];for(;p--;)y[v++]=arguments[++l];return vn(U,o?t:this,y)}return a}function Du(n){return function(e,t,r){return r&&typeof r!="number"&&ln(e,t,r)&&(t=r=i),e=ne(e),t===i?(t=e,e=0):t=ne(t),r=r===i?e<t?1:-1:ne(r),gl(e,t,r,n)}}function jt(n){return function(e,t){return typeof e=="string"&&typeof t=="string"||(e=Cn(e),t=Cn(t)),n(e,t)}}function Bu(n,e,t,r,o,s,a,l,p,v){var S=e&Fn,y=S?a:i,U=S?i:a,T=S?s:i,W=S?i:s;e|=S?Dn:Te,e&=~(S?Te:Dn),e&ro||(e&=~(nn|zn));var P=[n,e,o,T,y,W,U,l,p,v],R=t.apply(i,P);return Oi(n)&&ju(R,P),R.placeholder=r,n0(R,n,e)}function gi(n){var e=en[n];return function(t,r){if(t=Cn(t),r=r==null?0:sn(b(r),292),r&&nu(t)){var o=(K(t)+"e").split("e"),s=e(o[0]+"e"+(+o[1]+r));return o=(K(s)+"e").split("e"),+(o[0]+"e"+(+o[1]-r))}return e(t)}}var Cl=be&&1/Rt(new be([,-0]))[1]==he?function(n){return new be(n)}:Mi;function Gu(n){return function(e){var t=an(e);return t==Nn?zr(e):t==In?Ya(e):Fa(e,n(e))}}function Vn(n,e,t,r,o,s,a,l){var p=e&zn;if(!p&&typeof n!="function")throw new Tn(_);var v=r?r.length:0;if(v||(e&=~(Dn|Te),r=o=i),a=a===i?a:tn(b(a),0),l=l===i?l:b(l),v-=o?o.length:0,e&Te){var S=r,y=o;r=o=i}var U=p?i:vi(n),T=[n,e,t,r,o,S,y,s,a,l];if(U&&Xl(T,U),n=T[0],e=T[1],t=T[2],r=T[3],o=T[4],l=T[9]=T[9]===i?p?0:n.length:tn(T[9]-v,0),!l&&e&(Fn|Ee)&&(e&=~(Fn|Ee)),!e||e==nn)var W=Rl(n,e,t);else e==Fn||e==Ee?W=Al(n,e,l):(e==Dn||e==(nn|Dn))&&!o.length?W=Wl(n,e,t,r):W=Vt.apply(i,T);var P=U?Ou:ju;return n0(P(W,T),n,e)}function Ku(n,e,t,r){return n===i||kn(n,Ie[t])&&!G.call(r,t)?e:n}function $u(n,e,t,r,o,s){return V(n)&&V(e)&&(s.set(e,n),Xt(n,e,i,$u,s),s.delete(e)),n}function Nl(n){return ht(n)?i:n}function zu(n,e,t,r,o,s){var a=t&mn,l=n.length,p=e.length;if(l!=p&&!(a&&p>l))return!1;var v=s.get(n),S=s.get(e);if(v&&S)return v==e&&S==n;var y=-1,U=!0,T=t&_n?new ve:i;for(s.set(n,e),s.set(e,n);++y<l;){var W=n[y],P=e[y];if(r)var R=a?r(P,W,y,e,n,s):r(W,P,y,n,e,s);if(R!==i){if(R)continue;U=!1;break}if(T){if(!Fr(e,function(M,D){if(!nt(T,D)&&(W===M||o(W,M,t,r,s)))return T.push(D)})){U=!1;break}}else if(!(W===P||o(W,P,t,r,s))){U=!1;break}}return s.delete(n),s.delete(e),U}function Il(n,e,t,r,o,s,a){switch(t){case Re:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case je:return!(n.byteLength!=e.byteLength||!s(new bt(n),new bt(e)));case Ye:case qe:case Ze:return kn(+n,+e);case yt:return n.name==e.name&&n.message==e.message;case Ve:case Je:return n==e+"";case Nn:var l=zr;case In:var p=r&mn;if(l||(l=Rt),n.size!=e.size&&!p)return!1;var v=a.get(n);if(v)return v==e;r|=_n,a.set(n,e);var S=zu(l(n),l(e),r,o,s,a);return a.delete(n),S;case Ot:if(ot)return ot.call(n)==ot.call(e)}return!1}function bl(n,e,t,r,o,s){var a=t&mn,l=mi(n),p=l.length,v=mi(e),S=v.length;if(p!=S&&!a)return!1;for(var y=p;y--;){var U=l[y];if(!(a?U in e:G.call(e,U)))return!1}var T=s.get(n),W=s.get(e);if(T&&W)return T==e&&W==n;var P=!0;s.set(n,e),s.set(e,n);for(var R=a;++y<p;){U=l[y];var M=n[U],D=e[U];if(r)var Un=a?r(D,M,U,e,n,s):r(M,D,U,n,e,s);if(!(Un===i?M===D||o(M,D,t,r,s):Un)){P=!1;break}R||(R=U=="constructor")}if(P&&!R){var cn=n.constructor,xn=e.constructor;cn!=xn&&"constructor"in n&&"constructor"in e&&!(typeof cn=="function"&&cn instanceof cn&&typeof xn=="function"&&xn instanceof xn)&&(P=!1)}return s.delete(n),s.delete(e),P}function Jn(n){return xi(Ju(n,i,u0),n+"")}function mi(n){return cu(n,on,yi)}function _i(n){return cu(n,hn,Xu)}var vi=Dt?function(n){return Dt.get(n)}:Mi;function nr(n){for(var e=n.name+"",t=Le[e],r=G.call(Le,e)?t.length:0;r--;){var o=t[r],s=o.func;if(s==null||s==n)return o.name}return e}function Fe(n){var e=G.call(u,"placeholder")?u:n;return e.placeholder}function A(){var n=u.iteratee||Pi;return n=n===Pi?hu:n,arguments.length?n(arguments[0],arguments[1]):n}function er(n,e){var t=n.__data__;return Gl(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Si(n){for(var e=on(n),t=e.length;t--;){var r=e[t],o=n[r];e[t]=[r,o,Zu(o)]}return e}function we(n,e){var t=$a(n,e);return pu(t)?t:i}function Ll(n){var e=G.call(n,me),t=n[me];try{n[me]=i;var r=!0}catch{}var o=Nt.call(n);return r&&(e?n[me]=t:delete n[me]),o}var yi=Yr?function(n){return n==null?[]:(n=$(n),ie(Yr(n),function(e){return Qo.call(n,e)}))}:Fi,Xu=Yr?function(n){for(var e=[];n;)oe(e,yi(n)),n=Lt(n);return e}:Fi,an=fn;(qr&&an(new qr(new ArrayBuffer(1)))!=Re||tt&&an(new tt)!=Nn||Zr&&an(Zr.resolve())!=uo||be&&an(new be)!=In||rt&&an(new rt)!=Qe)&&(an=function(n){var e=fn(n),t=e==Yn?n.constructor:i,r=t?Oe(t):"";if(r)switch(r){case _f:return Re;case vf:return Nn;case Sf:return uo;case yf:return In;case wf:return Qe}return e});function Pl(n,e,t){for(var r=-1,o=t.length;++r<o;){var s=t[r],a=s.size;switch(s.type){case"drop":n+=a;break;case"dropRight":e-=a;break;case"take":e=sn(e,n+a);break;case"takeRight":n=tn(n,e-a);break}}return{start:n,end:e}}function kl(n){var e=n.match(Ks);return e?e[1].split($s):[]}function Yu(n,e,t){e=ce(e,n);for(var r=-1,o=e.length,s=!1;++r<o;){var a=Pn(e[r]);if(!(s=n!=null&&t(n,a)))break;n=n[a]}return s||++r!=o?s:(o=n==null?0:n.length,!!o&&ar(o)&&Qn(a,o)&&(I(n)||Ue(n)))}function Ml(n){var e=n.length,t=new n.constructor(e);return e&&typeof n[0]=="string"&&G.call(n,"index")&&(t.index=n.index,t.input=n.input),t}function qu(n){return typeof n.constructor=="function"&&!dt(n)?Pe(Lt(n)):{}}function Fl(n,e,t){var r=n.constructor;switch(e){case je:return pi(n);case Ye:case qe:return new r(+n);case Re:return Ol(n,t);case Sr:case yr:case wr:case Or:case Ur:case xr:case Er:case Tr:case Hr:return Wu(n,t);case Nn:return new r;case Ze:case Je:return new r(n);case Ve:return Ul(n);case In:return new r;case Ot:return xl(n)}}function Dl(n,e){var t=e.length;if(!t)return n;var r=t-1;return e[r]=(t>1?"& ":"")+e[r],e=e.join(t>2?", ":" "),n.replace(Gs,`{
/* [wrapped with `+e+`] */
`)}function Bl(n){return I(n)||Ue(n)||!!(jo&&n&&n[jo])}function Qn(n,e){var t=typeof n;return e=e??re,!!e&&(t=="number"||t!="symbol"&&Qs.test(n))&&n>-1&&n%1==0&&n<e}function ln(n,e,t){if(!V(t))return!1;var r=typeof e;return(r=="number"?pn(t)&&Qn(e,t.length):r=="string"&&e in t)?kn(t[e],n):!1}function wi(n,e){if(I(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||On(n)?!0:Ms.test(n)||!ks.test(n)||e!=null&&n in $(e)}function Gl(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Oi(n){var e=nr(n),t=u[e];if(typeof t!="function"||!(e in F.prototype))return!1;if(n===t)return!0;var r=vi(t);return!!r&&n===r[0]}function Kl(n){return!!Zo&&Zo in n}var $l=Wt?jn:Di;function dt(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||Ie;return n===t}function Zu(n){return n===n&&!V(n)}function Vu(n,e){return function(t){return t==null?!1:t[n]===e&&(e!==i||n in $(t))}}function zl(n){var e=ur(n,function(r){return t.size===H&&t.clear(),r}),t=e.cache;return e}function Xl(n,e){var t=n[1],r=e[1],o=t|r,s=o<(nn|zn|Xn),a=r==Xn&&t==Fn||r==Xn&&t==Xe&&n[7].length<=e[8]||r==(Xn|Xe)&&e[7].length<=e[8]&&t==Fn;if(!(s||a))return n;r&nn&&(n[2]=e[2],o|=t&nn?0:ro);var l=e[3];if(l){var p=n[3];n[3]=p?Nu(p,l,e[4]):l,n[4]=p?ue(n[3],O):e[4]}return l=e[5],l&&(p=n[5],n[5]=p?Iu(p,l,e[6]):l,n[6]=p?ue(n[5],O):e[6]),l=e[7],l&&(n[7]=l),r&Xn&&(n[8]=n[8]==null?e[8]:sn(n[8],e[8])),n[9]==null&&(n[9]=e[9]),n[0]=e[0],n[1]=o,n}function Yl(n){var e=[];if(n!=null)for(var t in $(n))e.push(t);return e}function ql(n){return Nt.call(n)}function Ju(n,e,t){return e=tn(e===i?n.length-1:e,0),function(){for(var r=arguments,o=-1,s=tn(r.length-e,0),a=g(s);++o<s;)a[o]=r[e+o];o=-1;for(var l=g(e+1);++o<e;)l[o]=r[o];return l[e]=t(a),vn(n,this,l)}}function Qu(n,e){return e.length<2?n:ye(n,An(e,0,-1))}function Zl(n,e){for(var t=n.length,r=sn(e.length,t),o=dn(n);r--;){var s=e[r];n[r]=Qn(s,t)?o[s]:i}return n}function Ui(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}var ju=e0(Ou),pt=lf||function(n,e){return rn.setTimeout(n,e)},xi=e0(vl);function n0(n,e,t){var r=e+"";return xi(n,Dl(r,Vl(kl(r),t)))}function e0(n){var e=0,t=0;return function(){var r=hf(),o=_s-(r-t);if(t=r,o>0){if(++e>=ms)return arguments[0]}else e=0;return n.apply(i,arguments)}}function tr(n,e){var t=-1,r=n.length,o=r-1;for(e=e===i?r:e;++t<e;){var s=ui(t,o),a=n[s];n[s]=n[t],n[t]=a}return n.length=e,n}var t0=zl(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(Fs,function(t,r,o,s){e.push(o?s.replace(Xs,"$1"):r||t)}),e});function Pn(n){if(typeof n=="string"||On(n))return n;var e=n+"";return e=="0"&&1/n==-he?"-0":e}function Oe(n){if(n!=null){try{return Ct.call(n)}catch{}try{return n+""}catch{}}return""}function Vl(n,e){return Sn(Us,function(t){var r="_."+t[0];e&t[1]&&!Tt(n,r)&&n.push(r)}),n.sort()}function r0(n){if(n instanceof F)return n.clone();var e=new Hn(n.__wrapped__,n.__chain__);return e.__actions__=dn(n.__actions__),e.__index__=n.__index__,e.__values__=n.__values__,e}function Jl(n,e,t){(t?ln(n,e,t):e===i)?e=1:e=tn(b(e),0);var r=n==null?0:n.length;if(!r||e<1)return[];for(var o=0,s=0,a=g(Mt(r/e));o<r;)a[s++]=An(n,o,o+=e);return a}function Ql(n){for(var e=-1,t=n==null?0:n.length,r=0,o=[];++e<t;){var s=n[e];s&&(o[r++]=s)}return o}function jl(){var n=arguments.length;if(!n)return[];for(var e=g(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return oe(I(t)?dn(t):[t],un(e,1))}var nc=k(function(n,e){return Q(n)?st(n,un(e,1,Q,!0)):[]}),ec=k(function(n,e){var t=Wn(e);return Q(t)&&(t=i),Q(n)?st(n,un(e,1,Q,!0),A(t,2)):[]}),tc=k(function(n,e){var t=Wn(e);return Q(t)&&(t=i),Q(n)?st(n,un(e,1,Q,!0),i,t):[]});function rc(n,e,t){var r=n==null?0:n.length;return r?(e=t||e===i?1:b(e),An(n,e<0?0:e,r)):[]}function ic(n,e,t){var r=n==null?0:n.length;return r?(e=t||e===i?1:b(e),e=r-e,An(n,0,e<0?0:e)):[]}function oc(n,e){return n&&n.length?qt(n,A(e,3),!0,!0):[]}function uc(n,e){return n&&n.length?qt(n,A(e,3),!0):[]}function sc(n,e,t,r){var o=n==null?0:n.length;return o?(t&&typeof t!="number"&&ln(n,e,t)&&(t=0,r=o),jf(n,e,t,r)):[]}function i0(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=t==null?0:b(t);return o<0&&(o=tn(r+o,0)),Ht(n,A(e,3),o)}function o0(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=r-1;return t!==i&&(o=b(t),o=t<0?tn(r+o,0):sn(o,r-1)),Ht(n,A(e,3),o,!0)}function u0(n){var e=n==null?0:n.length;return e?un(n,1):[]}function ac(n){var e=n==null?0:n.length;return e?un(n,he):[]}function fc(n,e){var t=n==null?0:n.length;return t?(e=e===i?1:b(e),un(n,e)):[]}function lc(n){for(var e=-1,t=n==null?0:n.length,r={};++e<t;){var o=n[e];Gn(r,o[0],o[1])}return r}function s0(n){return n&&n.length?n[0]:i}function cc(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=t==null?0:b(t);return o<0&&(o=tn(r+o,0)),We(n,e,o)}function dc(n){var e=n==null?0:n.length;return e?An(n,0,-1):[]}var pc=k(function(n){var e=Z(n,ci);return e.length&&e[0]===n[0]?ei(e):[]}),hc=k(function(n){var e=Wn(n),t=Z(n,ci);return e===Wn(t)?e=i:t.pop(),t.length&&t[0]===n[0]?ei(t,A(e,2)):[]}),gc=k(function(n){var e=Wn(n),t=Z(n,ci);return e=typeof e=="function"?e:i,e&&t.pop(),t.length&&t[0]===n[0]?ei(t,i,e):[]});function mc(n,e){return n==null?"":df.call(n,e)}function Wn(n){var e=n==null?0:n.length;return e?n[e-1]:i}function _c(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=r;return t!==i&&(o=b(t),o=o<0?tn(r+o,0):sn(o,r-1)),e===e?Za(n,e,o):Ht(n,Bo,o,!0)}function vc(n,e){return n&&n.length?vu(n,b(e)):i}var Sc=k(a0);function a0(n,e){return n&&n.length&&e&&e.length?oi(n,e):n}function yc(n,e,t){return n&&n.length&&e&&e.length?oi(n,e,A(t,2)):n}function wc(n,e,t){return n&&n.length&&e&&e.length?oi(n,e,i,t):n}var Oc=Jn(function(n,e){var t=n==null?0:n.length,r=Jr(n,e);return wu(n,Z(e,function(o){return Qn(o,t)?+o:o}).sort(Cu)),r});function Uc(n,e){var t=[];if(!(n&&n.length))return t;var r=-1,o=[],s=n.length;for(e=A(e,3);++r<s;){var a=n[r];e(a,r,n)&&(t.push(a),o.push(r))}return wu(n,o),t}function Ei(n){return n==null?n:mf.call(n)}function xc(n,e,t){var r=n==null?0:n.length;return r?(t&&typeof t!="number"&&ln(n,e,t)?(e=0,t=r):(e=e==null?0:b(e),t=t===i?r:b(t)),An(n,e,t)):[]}function Ec(n,e){return Yt(n,e)}function Tc(n,e,t){return ai(n,e,A(t,2))}function Hc(n,e){var t=n==null?0:n.length;if(t){var r=Yt(n,e);if(r<t&&kn(n[r],e))return r}return-1}function Rc(n,e){return Yt(n,e,!0)}function Ac(n,e,t){return ai(n,e,A(t,2),!0)}function Wc(n,e){var t=n==null?0:n.length;if(t){var r=Yt(n,e,!0)-1;if(kn(n[r],e))return r}return-1}function Cc(n){return n&&n.length?Uu(n):[]}function Nc(n,e){return n&&n.length?Uu(n,A(e,2)):[]}function Ic(n){var e=n==null?0:n.length;return e?An(n,1,e):[]}function bc(n,e,t){return n&&n.length?(e=t||e===i?1:b(e),An(n,0,e<0?0:e)):[]}function Lc(n,e,t){var r=n==null?0:n.length;return r?(e=t||e===i?1:b(e),e=r-e,An(n,e<0?0:e,r)):[]}function Pc(n,e){return n&&n.length?qt(n,A(e,3),!1,!0):[]}function kc(n,e){return n&&n.length?qt(n,A(e,3)):[]}var Mc=k(function(n){return le(un(n,1,Q,!0))}),Fc=k(function(n){var e=Wn(n);return Q(e)&&(e=i),le(un(n,1,Q,!0),A(e,2))}),Dc=k(function(n){var e=Wn(n);return e=typeof e=="function"?e:i,le(un(n,1,Q,!0),i,e)});function Bc(n){return n&&n.length?le(n):[]}function Gc(n,e){return n&&n.length?le(n,A(e,2)):[]}function Kc(n,e){return e=typeof e=="function"?e:i,n&&n.length?le(n,i,e):[]}function Ti(n){if(!(n&&n.length))return[];var e=0;return n=ie(n,function(t){if(Q(t))return e=tn(t.length,e),!0}),Kr(e,function(t){return Z(n,Dr(t))})}function f0(n,e){if(!(n&&n.length))return[];var t=Ti(n);return e==null?t:Z(t,function(r){return vn(e,i,r)})}var $c=k(function(n,e){return Q(n)?st(n,e):[]}),zc=k(function(n){return li(ie(n,Q))}),Xc=k(function(n){var e=Wn(n);return Q(e)&&(e=i),li(ie(n,Q),A(e,2))}),Yc=k(function(n){var e=Wn(n);return e=typeof e=="function"?e:i,li(ie(n,Q),i,e)}),qc=k(Ti);function Zc(n,e){return Hu(n||[],e||[],ut)}function Vc(n,e){return Hu(n||[],e||[],lt)}var Jc=k(function(n){var e=n.length,t=e>1?n[e-1]:i;return t=typeof t=="function"?(n.pop(),t):i,f0(n,t)});function l0(n){var e=u(n);return e.__chain__=!0,e}function Qc(n,e){return e(n),n}function rr(n,e){return e(n)}var jc=Jn(function(n){var e=n.length,t=e?n[0]:0,r=this.__wrapped__,o=function(s){return Jr(s,n)};return e>1||this.__actions__.length||!(r instanceof F)||!Qn(t)?this.thru(o):(r=r.slice(t,+t+(e?1:0)),r.__actions__.push({func:rr,args:[o],thisArg:i}),new Hn(r,this.__chain__).thru(function(s){return e&&!s.length&&s.push(i),s}))});function nd(){return l0(this)}function ed(){return new Hn(this.value(),this.__chain__)}function td(){this.__values__===i&&(this.__values__=x0(this.value()));var n=this.__index__>=this.__values__.length,e=n?i:this.__values__[this.__index__++];return{done:n,value:e}}function rd(){return this}function id(n){for(var e,t=this;t instanceof Gt;){var r=r0(t);r.__index__=0,r.__values__=i,e?o.__wrapped__=r:e=r;var o=r;t=t.__wrapped__}return o.__wrapped__=n,e}function od(){var n=this.__wrapped__;if(n instanceof F){var e=n;return this.__actions__.length&&(e=new F(this)),e=e.reverse(),e.__actions__.push({func:rr,args:[Ei],thisArg:i}),new Hn(e,this.__chain__)}return this.thru(Ei)}function ud(){return Tu(this.__wrapped__,this.__actions__)}var sd=Zt(function(n,e,t){G.call(n,t)?++n[t]:Gn(n,t,1)});function ad(n,e,t){var r=I(n)?Fo:Qf;return t&&ln(n,e,t)&&(e=i),r(n,A(e,3))}function fd(n,e){var t=I(n)?ie:fu;return t(n,A(e,3))}var ld=ku(i0),cd=ku(o0);function dd(n,e){return un(ir(n,e),1)}function pd(n,e){return un(ir(n,e),he)}function hd(n,e,t){return t=t===i?1:b(t),un(ir(n,e),t)}function c0(n,e){var t=I(n)?Sn:fe;return t(n,A(e,3))}function d0(n,e){var t=I(n)?Na:au;return t(n,A(e,3))}var gd=Zt(function(n,e,t){G.call(n,t)?n[t].push(e):Gn(n,t,[e])});function md(n,e,t,r){n=pn(n)?n:Be(n),t=t&&!r?b(t):0;var o=n.length;return t<0&&(t=tn(o+t,0)),fr(n)?t<=o&&n.indexOf(e,t)>-1:!!o&&We(n,e,t)>-1}var _d=k(function(n,e,t){var r=-1,o=typeof e=="function",s=pn(n)?g(n.length):[];return fe(n,function(a){s[++r]=o?vn(e,a,t):at(a,e,t)}),s}),vd=Zt(function(n,e,t){Gn(n,t,e)});function ir(n,e){var t=I(n)?Z:gu;return t(n,A(e,3))}function Sd(n,e,t,r){return n==null?[]:(I(e)||(e=e==null?[]:[e]),t=r?i:t,I(t)||(t=t==null?[]:[t]),Su(n,e,t))}var yd=Zt(function(n,e,t){n[t?0:1].push(e)},function(){return[[],[]]});function wd(n,e,t){var r=I(n)?Mr:Ko,o=arguments.length<3;return r(n,A(e,4),t,o,fe)}function Od(n,e,t){var r=I(n)?Ia:Ko,o=arguments.length<3;return r(n,A(e,4),t,o,au)}function Ud(n,e){var t=I(n)?ie:fu;return t(n,sr(A(e,3)))}function xd(n){var e=I(n)?iu:ml;return e(n)}function Ed(n,e,t){(t?ln(n,e,t):e===i)?e=1:e=b(e);var r=I(n)?Yf:_l;return r(n,e)}function Td(n){var e=I(n)?qf:Sl;return e(n)}function Hd(n){if(n==null)return 0;if(pn(n))return fr(n)?Ne(n):n.length;var e=an(n);return e==Nn||e==In?n.size:ri(n).length}function Rd(n,e,t){var r=I(n)?Fr:yl;return t&&ln(n,e,t)&&(e=i),r(n,A(e,3))}var Ad=k(function(n,e){if(n==null)return[];var t=e.length;return t>1&&ln(n,e[0],e[1])?e=[]:t>2&&ln(e[0],e[1],e[2])&&(e=[e[0]]),Su(n,un(e,1),[])}),or=ff||function(){return rn.Date.now()};function Wd(n,e){if(typeof e!="function")throw new Tn(_);return n=b(n),function(){if(--n<1)return e.apply(this,arguments)}}function p0(n,e,t){return e=t?i:e,e=n&&e==null?n.length:e,Vn(n,Xn,i,i,i,i,e)}function h0(n,e){var t;if(typeof e!="function")throw new Tn(_);return n=b(n),function(){return--n>0&&(t=e.apply(this,arguments)),n<=1&&(e=i),t}}var Hi=k(function(n,e,t){var r=nn;if(t.length){var o=ue(t,Fe(Hi));r|=Dn}return Vn(n,r,e,t,o)}),g0=k(function(n,e,t){var r=nn|zn;if(t.length){var o=ue(t,Fe(g0));r|=Dn}return Vn(e,r,n,t,o)});function m0(n,e,t){e=t?i:e;var r=Vn(n,Fn,i,i,i,i,i,e);return r.placeholder=m0.placeholder,r}function _0(n,e,t){e=t?i:e;var r=Vn(n,Ee,i,i,i,i,i,e);return r.placeholder=_0.placeholder,r}function v0(n,e,t){var r,o,s,a,l,p,v=0,S=!1,y=!1,U=!0;if(typeof n!="function")throw new Tn(_);e=Cn(e)||0,V(t)&&(S=!!t.leading,y="maxWait"in t,s=y?tn(Cn(t.maxWait)||0,e):s,U="trailing"in t?!!t.trailing:U);function T(j){var Mn=r,ee=o;return r=o=i,v=j,a=n.apply(ee,Mn),a}function W(j){return v=j,l=pt(M,e),S?T(j):a}function P(j){var Mn=j-p,ee=j-v,M0=e-Mn;return y?sn(M0,s-ee):M0}function R(j){var Mn=j-p,ee=j-v;return p===i||Mn>=e||Mn<0||y&&ee>=s}function M(){var j=or();if(R(j))return D(j);l=pt(M,P(j))}function D(j){return l=i,U&&r?T(j):(r=o=i,a)}function Un(){l!==i&&Ru(l),v=0,r=p=o=l=i}function cn(){return l===i?a:D(or())}function xn(){var j=or(),Mn=R(j);if(r=arguments,o=this,p=j,Mn){if(l===i)return W(p);if(y)return Ru(l),l=pt(M,e),T(p)}return l===i&&(l=pt(M,e)),a}return xn.cancel=Un,xn.flush=cn,xn}var Cd=k(function(n,e){return su(n,1,e)}),Nd=k(function(n,e,t){return su(n,Cn(e)||0,t)});function Id(n){return Vn(n,vr)}function ur(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new Tn(_);var t=function(){var r=arguments,o=e?e.apply(this,r):r[0],s=t.cache;if(s.has(o))return s.get(o);var a=n.apply(this,r);return t.cache=s.set(o,a)||s,a};return t.cache=new(ur.Cache||Zn),t}ur.Cache=Zn;function sr(n){if(typeof n!="function")throw new Tn(_);return function(){var e=arguments;switch(e.length){case 0:return!n.call(this);case 1:return!n.call(this,e[0]);case 2:return!n.call(this,e[0],e[1]);case 3:return!n.call(this,e[0],e[1],e[2])}return!n.apply(this,e)}}function bd(n){return h0(2,n)}var Ld=wl(function(n,e){e=e.length==1&&I(e[0])?Z(e[0],yn(A())):Z(un(e,1),yn(A()));var t=e.length;return k(function(r){for(var o=-1,s=sn(r.length,t);++o<s;)r[o]=e[o].call(this,r[o]);return vn(n,this,r)})}),Ri=k(function(n,e){var t=ue(e,Fe(Ri));return Vn(n,Dn,i,e,t)}),S0=k(function(n,e){var t=ue(e,Fe(S0));return Vn(n,Te,i,e,t)}),Pd=Jn(function(n,e){return Vn(n,Xe,i,i,i,e)});function kd(n,e){if(typeof n!="function")throw new Tn(_);return e=e===i?e:b(e),k(n,e)}function Md(n,e){if(typeof n!="function")throw new Tn(_);return e=e==null?0:tn(b(e),0),k(function(t){var r=t[e],o=de(t,0,e);return r&&oe(o,r),vn(n,this,o)})}function Fd(n,e,t){var r=!0,o=!0;if(typeof n!="function")throw new Tn(_);return V(t)&&(r="leading"in t?!!t.leading:r,o="trailing"in t?!!t.trailing:o),v0(n,e,{leading:r,maxWait:e,trailing:o})}function Dd(n){return p0(n,1)}function Bd(n,e){return Ri(di(e),n)}function Gd(){if(!arguments.length)return[];var n=arguments[0];return I(n)?n:[n]}function Kd(n){return Rn(n,z)}function $d(n,e){return e=typeof e=="function"?e:i,Rn(n,z,e)}function zd(n){return Rn(n,L|z)}function Xd(n,e){return e=typeof e=="function"?e:i,Rn(n,L|z,e)}function Yd(n,e){return e==null||uu(n,e,on(e))}function kn(n,e){return n===e||n!==n&&e!==e}var qd=jt(ni),Zd=jt(function(n,e){return n>=e}),Ue=du((function(){return arguments})())?du:function(n){return J(n)&&G.call(n,"callee")&&!Qo.call(n,"callee")},I=g.isArray,Vd=Io?yn(Io):il;function pn(n){return n!=null&&ar(n.length)&&!jn(n)}function Q(n){return J(n)&&pn(n)}function Jd(n){return n===!0||n===!1||J(n)&&fn(n)==Ye}var pe=cf||Di,Qd=bo?yn(bo):ol;function jd(n){return J(n)&&n.nodeType===1&&!ht(n)}function np(n){if(n==null)return!0;if(pn(n)&&(I(n)||typeof n=="string"||typeof n.splice=="function"||pe(n)||De(n)||Ue(n)))return!n.length;var e=an(n);if(e==Nn||e==In)return!n.size;if(dt(n))return!ri(n).length;for(var t in n)if(G.call(n,t))return!1;return!0}function ep(n,e){return ft(n,e)}function tp(n,e,t){t=typeof t=="function"?t:i;var r=t?t(n,e):i;return r===i?ft(n,e,i,t):!!r}function Ai(n){if(!J(n))return!1;var e=fn(n);return e==yt||e==Es||typeof n.message=="string"&&typeof n.name=="string"&&!ht(n)}function rp(n){return typeof n=="number"&&nu(n)}function jn(n){if(!V(n))return!1;var e=fn(n);return e==wt||e==oo||e==xs||e==Hs}function y0(n){return typeof n=="number"&&n==b(n)}function ar(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=re}function V(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}function J(n){return n!=null&&typeof n=="object"}var w0=Lo?yn(Lo):sl;function ip(n,e){return n===e||ti(n,e,Si(e))}function op(n,e,t){return t=typeof t=="function"?t:i,ti(n,e,Si(e),t)}function up(n){return O0(n)&&n!=+n}function sp(n){if($l(n))throw new N(d);return pu(n)}function ap(n){return n===null}function fp(n){return n==null}function O0(n){return typeof n=="number"||J(n)&&fn(n)==Ze}function ht(n){if(!J(n)||fn(n)!=Yn)return!1;var e=Lt(n);if(e===null)return!0;var t=G.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Ct.call(t)==of}var Wi=Po?yn(Po):al;function lp(n){return y0(n)&&n>=-re&&n<=re}var U0=ko?yn(ko):fl;function fr(n){return typeof n=="string"||!I(n)&&J(n)&&fn(n)==Je}function On(n){return typeof n=="symbol"||J(n)&&fn(n)==Ot}var De=Mo?yn(Mo):ll;function cp(n){return n===i}function dp(n){return J(n)&&an(n)==Qe}function pp(n){return J(n)&&fn(n)==As}var hp=jt(ii),gp=jt(function(n,e){return n<=e});function x0(n){if(!n)return[];if(pn(n))return fr(n)?bn(n):dn(n);if(et&&n[et])return Xa(n[et]());var e=an(n),t=e==Nn?zr:e==In?Rt:Be;return t(n)}function ne(n){if(!n)return n===0?n:0;if(n=Cn(n),n===he||n===-he){var e=n<0?-1:1;return e*ys}return n===n?n:0}function b(n){var e=ne(n),t=e%1;return e===e?t?e-t:e:0}function E0(n){return n?Se(b(n),0,Bn):0}function Cn(n){if(typeof n=="number")return n;if(On(n))return vt;if(V(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=V(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=$o(n);var t=Zs.test(n);return t||Js.test(n)?Aa(n.slice(2),t?2:8):qs.test(n)?vt:+n}function T0(n){return $n(n,hn(n))}function mp(n){return n?Se(b(n),-re,re):n===0?n:0}function K(n){return n==null?"":wn(n)}var _p=ke(function(n,e){if(dt(e)||pn(e)){$n(e,on(e),n);return}for(var t in e)G.call(e,t)&&ut(n,t,e[t])}),H0=ke(function(n,e){$n(e,hn(e),n)}),R0=ke(function(n,e,t,r){$n(e,hn(e),n,r)}),Ci=ke(function(n,e,t,r){$n(e,on(e),n,r)}),vp=Jn(Jr);function Sp(n,e){var t=Pe(n);return e==null?t:ou(t,e)}var yp=k(function(n,e){n=$(n);var t=-1,r=e.length,o=r>2?e[2]:i;for(o&&ln(e[0],e[1],o)&&(r=1);++t<r;)for(var s=e[t],a=hn(s),l=-1,p=a.length;++l<p;){var v=a[l],S=n[v];(S===i||kn(S,Ie[v])&&!G.call(n,v))&&(n[v]=s[v])}return n}),wp=k(function(n){return n.push(i,$u),vn(A0,i,n)});function Op(n,e){return Do(n,A(e,3),Kn)}function Up(n,e){return Do(n,A(e,3),jr)}function xp(n,e){return n==null?n:Qr(n,A(e,3),hn)}function Ep(n,e){return n==null?n:lu(n,A(e,3),hn)}function Tp(n,e){return n&&Kn(n,A(e,3))}function Hp(n,e){return n&&jr(n,A(e,3))}function Rp(n){return n==null?[]:zt(n,on(n))}function Ap(n){return n==null?[]:zt(n,hn(n))}function Ni(n,e,t){var r=n==null?i:ye(n,e);return r===i?t:r}function Wp(n,e){return n!=null&&Yu(n,e,nl)}function Ii(n,e){return n!=null&&Yu(n,e,el)}var Cp=Fu(function(n,e,t){e!=null&&typeof e.toString!="function"&&(e=Nt.call(e)),n[e]=t},Li(gn)),Np=Fu(function(n,e,t){e!=null&&typeof e.toString!="function"&&(e=Nt.call(e)),G.call(n,e)?n[e].push(t):n[e]=[t]},A),Ip=k(at);function on(n){return pn(n)?ru(n):ri(n)}function hn(n){return pn(n)?ru(n,!0):cl(n)}function bp(n,e){var t={};return e=A(e,3),Kn(n,function(r,o,s){Gn(t,e(r,o,s),r)}),t}function Lp(n,e){var t={};return e=A(e,3),Kn(n,function(r,o,s){Gn(t,o,e(r,o,s))}),t}var Pp=ke(function(n,e,t){Xt(n,e,t)}),A0=ke(function(n,e,t,r){Xt(n,e,t,r)}),kp=Jn(function(n,e){var t={};if(n==null)return t;var r=!1;e=Z(e,function(s){return s=ce(s,n),r||(r=s.length>1),s}),$n(n,_i(n),t),r&&(t=Rn(t,L|Y|z,Nl));for(var o=e.length;o--;)fi(t,e[o]);return t});function Mp(n,e){return W0(n,sr(A(e)))}var Fp=Jn(function(n,e){return n==null?{}:pl(n,e)});function W0(n,e){if(n==null)return{};var t=Z(_i(n),function(r){return[r]});return e=A(e),yu(n,t,function(r,o){return e(r,o[0])})}function Dp(n,e,t){e=ce(e,n);var r=-1,o=e.length;for(o||(o=1,n=i);++r<o;){var s=n==null?i:n[Pn(e[r])];s===i&&(r=o,s=t),n=jn(s)?s.call(n):s}return n}function Bp(n,e,t){return n==null?n:lt(n,e,t)}function Gp(n,e,t,r){return r=typeof r=="function"?r:i,n==null?n:lt(n,e,t,r)}var C0=Gu(on),N0=Gu(hn);function Kp(n,e,t){var r=I(n),o=r||pe(n)||De(n);if(e=A(e,4),t==null){var s=n&&n.constructor;o?t=r?new s:[]:V(n)?t=jn(s)?Pe(Lt(n)):{}:t={}}return(o?Sn:Kn)(n,function(a,l,p){return e(t,a,l,p)}),t}function $p(n,e){return n==null?!0:fi(n,e)}function zp(n,e,t){return n==null?n:Eu(n,e,di(t))}function Xp(n,e,t,r){return r=typeof r=="function"?r:i,n==null?n:Eu(n,e,di(t),r)}function Be(n){return n==null?[]:$r(n,on(n))}function Yp(n){return n==null?[]:$r(n,hn(n))}function qp(n,e,t){return t===i&&(t=e,e=i),t!==i&&(t=Cn(t),t=t===t?t:0),e!==i&&(e=Cn(e),e=e===e?e:0),Se(Cn(n),e,t)}function Zp(n,e,t){return e=ne(e),t===i?(t=e,e=0):t=ne(t),n=Cn(n),tl(n,e,t)}function Vp(n,e,t){if(t&&typeof t!="boolean"&&ln(n,e,t)&&(e=t=i),t===i&&(typeof e=="boolean"?(t=e,e=i):typeof n=="boolean"&&(t=n,n=i)),n===i&&e===i?(n=0,e=1):(n=ne(n),e===i?(e=n,n=0):e=ne(e)),n>e){var r=n;n=e,e=r}if(t||n%1||e%1){var o=eu();return sn(n+o*(e-n+Ra("1e-"+((o+"").length-1))),e)}return ui(n,e)}var Jp=Me(function(n,e,t){return e=e.toLowerCase(),n+(t?I0(e):e)});function I0(n){return bi(K(n).toLowerCase())}function b0(n){return n=K(n),n&&n.replace(js,Ba).replace(va,"")}function Qp(n,e,t){n=K(n),e=wn(e);var r=n.length;t=t===i?r:Se(b(t),0,r);var o=t;return t-=e.length,t>=0&&n.slice(t,o)==e}function jp(n){return n=K(n),n&&bs.test(n)?n.replace(ao,Ga):n}function nh(n){return n=K(n),n&&Ds.test(n)?n.replace(Rr,"\\$&"):n}var eh=Me(function(n,e,t){return n+(t?"-":"")+e.toLowerCase()}),th=Me(function(n,e,t){return n+(t?" ":"")+e.toLowerCase()}),rh=Pu("toLowerCase");function ih(n,e,t){n=K(n),e=b(e);var r=e?Ne(n):0;if(!e||r>=e)return n;var o=(e-r)/2;return Qt(Ft(o),t)+n+Qt(Mt(o),t)}function oh(n,e,t){n=K(n),e=b(e);var r=e?Ne(n):0;return e&&r<e?n+Qt(e-r,t):n}function uh(n,e,t){n=K(n),e=b(e);var r=e?Ne(n):0;return e&&r<e?Qt(e-r,t)+n:n}function sh(n,e,t){return t||e==null?e=0:e&&(e=+e),gf(K(n).replace(Ar,""),e||0)}function ah(n,e,t){return(t?ln(n,e,t):e===i)?e=1:e=b(e),si(K(n),e)}function fh(){var n=arguments,e=K(n[0]);return n.length<3?e:e.replace(n[1],n[2])}var lh=Me(function(n,e,t){return n+(t?"_":"")+e.toLowerCase()});function ch(n,e,t){return t&&typeof t!="number"&&ln(n,e,t)&&(e=t=i),t=t===i?Bn:t>>>0,t?(n=K(n),n&&(typeof e=="string"||e!=null&&!Wi(e))&&(e=wn(e),!e&&Ce(n))?de(bn(n),0,t):n.split(e,t)):[]}var dh=Me(function(n,e,t){return n+(t?" ":"")+bi(e)});function ph(n,e,t){return n=K(n),t=t==null?0:Se(b(t),0,n.length),e=wn(e),n.slice(t,t+e.length)==e}function hh(n,e,t){var r=u.templateSettings;t&&ln(n,e,t)&&(e=i),n=K(n),e=Ci({},e,r,Ku);var o=Ci({},e.imports,r.imports,Ku),s=on(o),a=$r(o,s);Sn(s,function(R){if(lo.test(R))throw new N(x)});var l,p,v=0,S=e.interpolate||Ut,y="__p += '",U=Xr((e.escape||Ut).source+"|"+S.source+"|"+(S===fo?Ys:Ut).source+"|"+(e.evaluate||Ut).source+"|$","g"),T="//# sourceURL="+(G.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ua+"]")+`
`;n.replace(U,function(R,M,D,Un,cn,xn){return D||(D=Un),y+=n.slice(v,xn).replace(na,Ka),M&&(l=!0,y+=`' +
__e(`+M+`) +
'`),cn&&(p=!0,y+=`';
`+cn+`;
__p += '`),D&&(y+=`' +
((__t = (`+D+`)) == null ? '' : __t) +
'`),v=xn+R.length,R}),y+=`';
`;var W=G.call(e,"variable")&&e.variable;if(!W)y=`with (obj) {
`+y+`
}
`;else if(lo.test(W))throw new N(w);y=(p?y.replace(Ws,""):y).replace(Cs,"$1").replace(Ns,"$1;"),y="function("+(W||"obj")+`) {
`+(W?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(l?", __e = _.escape":"")+(p?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+y+`return __p
}`;var P=P0(function(){return B(s,T+"return "+y).apply(i,a)});if(P.source=y,Ai(P))throw P;return P}function gh(n){return K(n).toLowerCase()}function mh(n){return K(n).toUpperCase()}function _h(n,e,t){if(n=K(n),n&&(t||e===i))return $o(n);if(!n||!(e=wn(e)))return n;var r=bn(n),o=bn(e),s=zo(r,o),a=Xo(r,o)+1;return de(r,s,a).join("")}function vh(n,e,t){if(n=K(n),n&&(t||e===i))return n.slice(0,qo(n)+1);if(!n||!(e=wn(e)))return n;var r=bn(n),o=Xo(r,bn(e))+1;return de(r,0,o).join("")}function Sh(n,e,t){if(n=K(n),n&&(t||e===i))return n.replace(Ar,"");if(!n||!(e=wn(e)))return n;var r=bn(n),o=zo(r,bn(e));return de(r,o).join("")}function yh(n,e){var t=hs,r=gs;if(V(e)){var o="separator"in e?e.separator:o;t="length"in e?b(e.length):t,r="omission"in e?wn(e.omission):r}n=K(n);var s=n.length;if(Ce(n)){var a=bn(n);s=a.length}if(t>=s)return n;var l=t-Ne(r);if(l<1)return r;var p=a?de(a,0,l).join(""):n.slice(0,l);if(o===i)return p+r;if(a&&(l+=p.length-l),Wi(o)){if(n.slice(l).search(o)){var v,S=p;for(o.global||(o=Xr(o.source,K(co.exec(o))+"g")),o.lastIndex=0;v=o.exec(S);)var y=v.index;p=p.slice(0,y===i?l:y)}}else if(n.indexOf(wn(o),l)!=l){var U=p.lastIndexOf(o);U>-1&&(p=p.slice(0,U))}return p+r}function wh(n){return n=K(n),n&&Is.test(n)?n.replace(so,Va):n}var Oh=Me(function(n,e,t){return n+(t?" ":"")+e.toUpperCase()}),bi=Pu("toUpperCase");function L0(n,e,t){return n=K(n),e=t?i:e,e===i?za(n)?ja(n):Pa(n):n.match(e)||[]}var P0=k(function(n,e){try{return vn(n,i,e)}catch(t){return Ai(t)?t:new N(t)}}),Uh=Jn(function(n,e){return Sn(e,function(t){t=Pn(t),Gn(n,t,Hi(n[t],n))}),n});function xh(n){var e=n==null?0:n.length,t=A();return n=e?Z(n,function(r){if(typeof r[1]!="function")throw new Tn(_);return[t(r[0]),r[1]]}):[],k(function(r){for(var o=-1;++o<e;){var s=n[o];if(vn(s[0],this,r))return vn(s[1],this,r)}})}function Eh(n){return Jf(Rn(n,L))}function Li(n){return function(){return n}}function Th(n,e){return n==null||n!==n?e:n}var Hh=Mu(),Rh=Mu(!0);function gn(n){return n}function Pi(n){return hu(typeof n=="function"?n:Rn(n,L))}function Ah(n){return mu(Rn(n,L))}function Wh(n,e){return _u(n,Rn(e,L))}var Ch=k(function(n,e){return function(t){return at(t,n,e)}}),Nh=k(function(n,e){return function(t){return at(n,t,e)}});function ki(n,e,t){var r=on(e),o=zt(e,r);t==null&&!(V(e)&&(o.length||!r.length))&&(t=e,e=n,n=this,o=zt(e,on(e)));var s=!(V(t)&&"chain"in t)||!!t.chain,a=jn(n);return Sn(o,function(l){var p=e[l];n[l]=p,a&&(n.prototype[l]=function(){var v=this.__chain__;if(s||v){var S=n(this.__wrapped__),y=S.__actions__=dn(this.__actions__);return y.push({func:p,args:arguments,thisArg:n}),S.__chain__=v,S}return p.apply(n,oe([this.value()],arguments))})}),n}function Ih(){return rn._===this&&(rn._=uf),this}function Mi(){}function bh(n){return n=b(n),k(function(e){return vu(e,n)})}var Lh=hi(Z),Ph=hi(Fo),kh=hi(Fr);function k0(n){return wi(n)?Dr(Pn(n)):hl(n)}function Mh(n){return function(e){return n==null?i:ye(n,e)}}var Fh=Du(),Dh=Du(!0);function Fi(){return[]}function Di(){return!1}function Bh(){return{}}function Gh(){return""}function Kh(){return!0}function $h(n,e){if(n=b(n),n<1||n>re)return[];var t=Bn,r=sn(n,Bn);e=A(e),n-=Bn;for(var o=Kr(r,e);++t<n;)e(t);return o}function zh(n){return I(n)?Z(n,Pn):On(n)?[n]:dn(t0(K(n)))}function Xh(n){var e=++rf;return K(n)+e}var Yh=Jt(function(n,e){return n+e},0),qh=gi("ceil"),Zh=Jt(function(n,e){return n/e},1),Vh=gi("floor");function Jh(n){return n&&n.length?$t(n,gn,ni):i}function Qh(n,e){return n&&n.length?$t(n,A(e,2),ni):i}function jh(n){return Go(n,gn)}function n1(n,e){return Go(n,A(e,2))}function e1(n){return n&&n.length?$t(n,gn,ii):i}function t1(n,e){return n&&n.length?$t(n,A(e,2),ii):i}var r1=Jt(function(n,e){return n*e},1),i1=gi("round"),o1=Jt(function(n,e){return n-e},0);function u1(n){return n&&n.length?Gr(n,gn):0}function s1(n,e){return n&&n.length?Gr(n,A(e,2)):0}return u.after=Wd,u.ary=p0,u.assign=_p,u.assignIn=H0,u.assignInWith=R0,u.assignWith=Ci,u.at=vp,u.before=h0,u.bind=Hi,u.bindAll=Uh,u.bindKey=g0,u.castArray=Gd,u.chain=l0,u.chunk=Jl,u.compact=Ql,u.concat=jl,u.cond=xh,u.conforms=Eh,u.constant=Li,u.countBy=sd,u.create=Sp,u.curry=m0,u.curryRight=_0,u.debounce=v0,u.defaults=yp,u.defaultsDeep=wp,u.defer=Cd,u.delay=Nd,u.difference=nc,u.differenceBy=ec,u.differenceWith=tc,u.drop=rc,u.dropRight=ic,u.dropRightWhile=oc,u.dropWhile=uc,u.fill=sc,u.filter=fd,u.flatMap=dd,u.flatMapDeep=pd,u.flatMapDepth=hd,u.flatten=u0,u.flattenDeep=ac,u.flattenDepth=fc,u.flip=Id,u.flow=Hh,u.flowRight=Rh,u.fromPairs=lc,u.functions=Rp,u.functionsIn=Ap,u.groupBy=gd,u.initial=dc,u.intersection=pc,u.intersectionBy=hc,u.intersectionWith=gc,u.invert=Cp,u.invertBy=Np,u.invokeMap=_d,u.iteratee=Pi,u.keyBy=vd,u.keys=on,u.keysIn=hn,u.map=ir,u.mapKeys=bp,u.mapValues=Lp,u.matches=Ah,u.matchesProperty=Wh,u.memoize=ur,u.merge=Pp,u.mergeWith=A0,u.method=Ch,u.methodOf=Nh,u.mixin=ki,u.negate=sr,u.nthArg=bh,u.omit=kp,u.omitBy=Mp,u.once=bd,u.orderBy=Sd,u.over=Lh,u.overArgs=Ld,u.overEvery=Ph,u.overSome=kh,u.partial=Ri,u.partialRight=S0,u.partition=yd,u.pick=Fp,u.pickBy=W0,u.property=k0,u.propertyOf=Mh,u.pull=Sc,u.pullAll=a0,u.pullAllBy=yc,u.pullAllWith=wc,u.pullAt=Oc,u.range=Fh,u.rangeRight=Dh,u.rearg=Pd,u.reject=Ud,u.remove=Uc,u.rest=kd,u.reverse=Ei,u.sampleSize=Ed,u.set=Bp,u.setWith=Gp,u.shuffle=Td,u.slice=xc,u.sortBy=Ad,u.sortedUniq=Cc,u.sortedUniqBy=Nc,u.split=ch,u.spread=Md,u.tail=Ic,u.take=bc,u.takeRight=Lc,u.takeRightWhile=Pc,u.takeWhile=kc,u.tap=Qc,u.throttle=Fd,u.thru=rr,u.toArray=x0,u.toPairs=C0,u.toPairsIn=N0,u.toPath=zh,u.toPlainObject=T0,u.transform=Kp,u.unary=Dd,u.union=Mc,u.unionBy=Fc,u.unionWith=Dc,u.uniq=Bc,u.uniqBy=Gc,u.uniqWith=Kc,u.unset=$p,u.unzip=Ti,u.unzipWith=f0,u.update=zp,u.updateWith=Xp,u.values=Be,u.valuesIn=Yp,u.without=$c,u.words=L0,u.wrap=Bd,u.xor=zc,u.xorBy=Xc,u.xorWith=Yc,u.zip=qc,u.zipObject=Zc,u.zipObjectDeep=Vc,u.zipWith=Jc,u.entries=C0,u.entriesIn=N0,u.extend=H0,u.extendWith=R0,ki(u,u),u.add=Yh,u.attempt=P0,u.camelCase=Jp,u.capitalize=I0,u.ceil=qh,u.clamp=qp,u.clone=Kd,u.cloneDeep=zd,u.cloneDeepWith=Xd,u.cloneWith=$d,u.conformsTo=Yd,u.deburr=b0,u.defaultTo=Th,u.divide=Zh,u.endsWith=Qp,u.eq=kn,u.escape=jp,u.escapeRegExp=nh,u.every=ad,u.find=ld,u.findIndex=i0,u.findKey=Op,u.findLast=cd,u.findLastIndex=o0,u.findLastKey=Up,u.floor=Vh,u.forEach=c0,u.forEachRight=d0,u.forIn=xp,u.forInRight=Ep,u.forOwn=Tp,u.forOwnRight=Hp,u.get=Ni,u.gt=qd,u.gte=Zd,u.has=Wp,u.hasIn=Ii,u.head=s0,u.identity=gn,u.includes=md,u.indexOf=cc,u.inRange=Zp,u.invoke=Ip,u.isArguments=Ue,u.isArray=I,u.isArrayBuffer=Vd,u.isArrayLike=pn,u.isArrayLikeObject=Q,u.isBoolean=Jd,u.isBuffer=pe,u.isDate=Qd,u.isElement=jd,u.isEmpty=np,u.isEqual=ep,u.isEqualWith=tp,u.isError=Ai,u.isFinite=rp,u.isFunction=jn,u.isInteger=y0,u.isLength=ar,u.isMap=w0,u.isMatch=ip,u.isMatchWith=op,u.isNaN=up,u.isNative=sp,u.isNil=fp,u.isNull=ap,u.isNumber=O0,u.isObject=V,u.isObjectLike=J,u.isPlainObject=ht,u.isRegExp=Wi,u.isSafeInteger=lp,u.isSet=U0,u.isString=fr,u.isSymbol=On,u.isTypedArray=De,u.isUndefined=cp,u.isWeakMap=dp,u.isWeakSet=pp,u.join=mc,u.kebabCase=eh,u.last=Wn,u.lastIndexOf=_c,u.lowerCase=th,u.lowerFirst=rh,u.lt=hp,u.lte=gp,u.max=Jh,u.maxBy=Qh,u.mean=jh,u.meanBy=n1,u.min=e1,u.minBy=t1,u.stubArray=Fi,u.stubFalse=Di,u.stubObject=Bh,u.stubString=Gh,u.stubTrue=Kh,u.multiply=r1,u.nth=vc,u.noConflict=Ih,u.noop=Mi,u.now=or,u.pad=ih,u.padEnd=oh,u.padStart=uh,u.parseInt=sh,u.random=Vp,u.reduce=wd,u.reduceRight=Od,u.repeat=ah,u.replace=fh,u.result=Dp,u.round=i1,u.runInContext=c,u.sample=xd,u.size=Hd,u.snakeCase=lh,u.some=Rd,u.sortedIndex=Ec,u.sortedIndexBy=Tc,u.sortedIndexOf=Hc,u.sortedLastIndex=Rc,u.sortedLastIndexBy=Ac,u.sortedLastIndexOf=Wc,u.startCase=dh,u.startsWith=ph,u.subtract=o1,u.sum=u1,u.sumBy=s1,u.template=hh,u.times=$h,u.toFinite=ne,u.toInteger=b,u.toLength=E0,u.toLower=gh,u.toNumber=Cn,u.toSafeInteger=mp,u.toString=K,u.toUpper=mh,u.trim=_h,u.trimEnd=vh,u.trimStart=Sh,u.truncate=yh,u.unescape=wh,u.uniqueId=Xh,u.upperCase=Oh,u.upperFirst=bi,u.each=c0,u.eachRight=d0,u.first=s0,ki(u,(function(){var n={};return Kn(u,function(e,t){G.call(u.prototype,t)||(n[t]=e)}),n})(),{chain:!1}),u.VERSION=f,Sn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){u[n].placeholder=u}),Sn(["drop","take"],function(n,e){F.prototype[n]=function(t){t=t===i?1:tn(b(t),0);var r=this.__filtered__&&!e?new F(this):this.clone();return r.__filtered__?r.__takeCount__=sn(t,r.__takeCount__):r.__views__.push({size:sn(t,Bn),type:n+(r.__dir__<0?"Right":"")}),r},F.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Sn(["filter","map","takeWhile"],function(n,e){var t=e+1,r=t==io||t==Ss;F.prototype[n]=function(o){var s=this.clone();return s.__iteratees__.push({iteratee:A(o,3),type:t}),s.__filtered__=s.__filtered__||r,s}}),Sn(["head","last"],function(n,e){var t="take"+(e?"Right":"");F.prototype[n]=function(){return this[t](1).value()[0]}}),Sn(["initial","tail"],function(n,e){var t="drop"+(e?"":"Right");F.prototype[n]=function(){return this.__filtered__?new F(this):this[t](1)}}),F.prototype.compact=function(){return this.filter(gn)},F.prototype.find=function(n){return this.filter(n).head()},F.prototype.findLast=function(n){return this.reverse().find(n)},F.prototype.invokeMap=k(function(n,e){return typeof n=="function"?new F(this):this.map(function(t){return at(t,n,e)})}),F.prototype.reject=function(n){return this.filter(sr(A(n)))},F.prototype.slice=function(n,e){n=b(n);var t=this;return t.__filtered__&&(n>0||e<0)?new F(t):(n<0?t=t.takeRight(-n):n&&(t=t.drop(n)),e!==i&&(e=b(e),t=e<0?t.dropRight(-e):t.take(e-n)),t)},F.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},F.prototype.toArray=function(){return this.take(Bn)},Kn(F.prototype,function(n,e){var t=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),o=u[r?"take"+(e=="last"?"Right":""):e],s=r||/^find/.test(e);o&&(u.prototype[e]=function(){var a=this.__wrapped__,l=r?[1]:arguments,p=a instanceof F,v=l[0],S=p||I(a),y=function(M){var D=o.apply(u,oe([M],l));return r&&U?D[0]:D};S&&t&&typeof v=="function"&&v.length!=1&&(p=S=!1);var U=this.__chain__,T=!!this.__actions__.length,W=s&&!U,P=p&&!T;if(!s&&S){a=P?a:new F(this);var R=n.apply(a,l);return R.__actions__.push({func:rr,args:[y],thisArg:i}),new Hn(R,U)}return W&&P?n.apply(this,l):(R=this.thru(y),W?r?R.value()[0]:R.value():R)})}),Sn(["pop","push","shift","sort","splice","unshift"],function(n){var e=At[n],t=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",r=/^(?:pop|shift)$/.test(n);u.prototype[n]=function(){var o=arguments;if(r&&!this.__chain__){var s=this.value();return e.apply(I(s)?s:[],o)}return this[t](function(a){return e.apply(I(a)?a:[],o)})}}),Kn(F.prototype,function(n,e){var t=u[e];if(t){var r=t.name+"";G.call(Le,r)||(Le[r]=[]),Le[r].push({name:e,func:t})}}),Le[Vt(i,zn).name]=[{name:"wrapper",func:i}],F.prototype.clone=Of,F.prototype.reverse=Uf,F.prototype.value=xf,u.prototype.at=jc,u.prototype.chain=nd,u.prototype.commit=ed,u.prototype.next=td,u.prototype.plant=id,u.prototype.reverse=od,u.prototype.toJSON=u.prototype.valueOf=u.prototype.value=ud,u.prototype.first=u.prototype.head,et&&(u.prototype[et]=rd),u}),se=nf();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(rn._=se,define(function(){return se})):ge?((ge.exports=se)._=se,Lr._=se):rn._=se}).call(Ke)});var _r=Ge(xe());var mr=Ge(xe(),1);var D0=[{repeat:!0,minTime:0,name:"repeating intervals"},{pattern:[{group:"a",interval:[4,1]},{group:"b",interval:[2,2]},{group:"c",interval:[1,4]},{group:"b",interval:[2,2]},{group:"a",interval:[4,1]}],repeat:!1,minTime:400,intervalSize:4,name:"100 pyramid"},{pattern:[{group:"a",interval:[2,4]},{group:"b",interval:[1,8]},{group:"c",interval:[2,4]}],repeat:!1,minTime:480,intervalSize:4,name:"Short 200 pyramid"},{pattern:[{group:"a",interval:[6,2]},{group:"b",interval:[3,4]},{group:"c",interval:[2,6]},{group:"b",interval:[3,4]},{group:"a",interval:[6,2]}],repeat:!1,minTime:1200,intervalSize:12,name:"150 pyramid"},{pattern:[{group:"a",interval:[4,1]},{group:"b",interval:[2,2]},{group:"a",interval:[4,1]},{group:"c",interval:[1,4]},{group:"a",interval:[4,1]},{group:"b",interval:[2,2]},{group:"a",interval:[4,1]}],repeat:!1,minTime:560,intervalSize:4,name:"200 binary"},{pattern:[{group:"a",interval:[3,2]},{group:"b",interval:[2,3]},{group:"a",interval:[3,2]},{group:"c",interval:[1,6]},{group:"a",interval:[3,2]},{group:"b",interval:[2,3]},{group:"a",interval:[3,2]}],repeat:!1,minTime:840,intervalSize:6,name:"300 binary"},{pattern:[{group:"a",interval:[2,4]},{group:"a",interval:[2,3]},{group:"a",interval:[2,2]},{group:"a",interval:[2,1]}],repeat:!1,minTime:400,intervalSize:5,name:"decline"},{pattern:[{group:"a",interval:[1,8]},{group:"b",interval:[2,4]},{group:"c",interval:[4,2]}],repeat:!1,minTime:480,intervalSize:5,name:"short decline"},{pattern:[{group:"a",interval:[4,4]},{group:"b",interval:[4,4]},{group:"a",interval:[4,4]},{group:"b",interval:[4,4]}],repeat:!1,minTime:1600,intervalSize:8,name:"4x4"},{pattern:[{group:"a",interval:[3,4]},{group:"b",interval:[4,3]},{group:"a",interval:[3,4]},{group:"b",interval:[4,3]},{group:"a",interval:[3,4]},{group:"b",interval:[4,3]}],repeat:!1,minTime:1440,intervalSize:8,name:"100's and 75's"},{pattern:[{group:"a",interval:[1,8]},{group:"b",interval:[4,2]},{group:"a",interval:[1,8]},{group:"b",interval:[4,2]},{group:"a",interval:[1,8]},{group:"b",interval:[4,2]},{group:"a",interval:[1,8]},{group:"b",interval:[4,2]}],repeat:!1,minTime:1280,intervalSize:8,name:"200's and 50's"},{pattern:[{group:"a",interval:[10,4]}],repeat:!1,minTime:1e3,intervalSize:40,name:"10x100"}];var Bi=[{desc:"200 no fins, 200 w fins swim",dist:400,type:"swim"},{desc:"400 warmup (75 kick, 25 under)",dist:400,type:"kick"},{desc:"250 pull warmup, 250 swim warmup",dist:500,type:"pull/swim"},{desc:"250 warmup",dist:250,type:"general"},{desc:"200 warm up",dist:200,type:"general"},{desc:"500 warmup",dist:500,type:"general"},{desc:"300 warm up",dist:300,type:"general"},{desc:"150 warm up",dist:150,type:"general"}],lr={desc:"No warmup bitches",dist:0,type:"none"};function m1(){return Math.random()>.1?Bi[Math.floor(Math.random()*Bi.length)]:lr}function B0(i,f){let h;if(i<f)h={...lr,desc:"No warmup (short workout)"};else if(h=m1(),h&&h.dist>0){let _=i-200;if(_=Math.min(_,i*.4),_<0&&i>0&&(_=i*.4),_<50&&i>=50&&(_=50),_<0&&(_=0),h.dist>_){let w=Bi.filter(x=>x.dist<=_&&x.dist>0);w.length>0?h=w[Math.floor(Math.random()*w.length)]:h=lr}}else(!h||h.dist===0)&&(h=lr);return h}var $0=Ge(xe(),1);function $e(i){if(typeof i!="string")return null;let f=i.split(":");if(f.length===2){let h=parseInt(f[0],10),d=parseFloat(f[1]);return isNaN(h)||isNaN(d)?null:h*60+d}return null}function ze(i){let f=Math.ceil(i),h=Math.floor(f/60),d=f%60;return`${h}:${d.toString().padStart(2,"0")}`}function G0(i,f,h=0){if(!f||typeof i!="number")return i;let _=(f.offset||0)+h;return f.operator==="+"?i+_:f.operator==="-"?i-_:i}function _1(i,f){if(typeof i!="number"||!f)return"CSS";let h=f.randomRange||0,d=G0(i,f,0),_=h>0?G0(i,f,h):d;if(h>0&&d!==_){let w=Math.min(d,_),x=Math.max(d,_);return`${ze(w)}-${ze(x)}`}return ze(d)}function Gi(i,f){if(!f||typeof i!="number")return i;let h=i,d=f.offset||0,_=f.randomRange||0,w=0;_>0&&(w=Math.random()*_);let x=d+w;return f.operator==="+"?h+=x:f.operator==="-"&&(h-=x),h}function K0(i,f){if(!i)return"No descriptive message template provided.";let h=i;for(let d in f)f[d]!==void 0&&(h=h.replace(new RegExp(`{${d}}`,"g"),f[d]));return h=h.replace(/{[^}]+}/g,""),h.trim()}function v1(i,f,h){let d=h.baseStructure||"{reps}x{dist} {activity} ({energySystem} focus) {rest}";return d=d.replace("{reps}",i.reps),d=d.replace("{dist}",i.dist),d=d.replace("{activity}",i.activity||h.defaultActivity||"swim"),d=d.replace("{energySystem}",f),d=d.replace("{rest}",i.restString||""),d=d.replace("{paceDesc}",i.paceDesc||""),d=d.replace("{notes}",i.notes||""),d=d.trim().replace(/\s\s+/g," ").replace(/\s\(@/g," @").replace(/\s\(\s*,/g," (").replace(/,\s*\)/g,")").replace(/\(\s*\)/g,""),i.setRest==="rest 0 seconds"?d:d+`
  - `+i.setRest}function Ki(i,f,h,d){let _=[],w=0,x=0,C="";if(!d)return{sets:_,mainSetTotalDist:w,targetPacePer100:x,descriptiveMessage:"Error: Workout configuration not provided."};x=Gi(f,d.paceConfig);let H=S1(d,h),O=_1(f,d.paceConfig);return H&&H.generatedSets&&H.generatedSets.length>0&&H.totalDistance>0?(w=H.totalDistance,H.generatedSets.forEach(L=>{L.paceDesc=O,_.push(v1(L,i,d.setFormatting))}),C=K0(d.descriptiveMessages.success,{workoutTypeName:d.workoutTypeName,setSummary:H.strategySpecificSummary||"Set generated",energySystem:i,totalDistance:String(w),paceDescription:O})):(w=0,C=K0(d.descriptiveMessages.fail,{workoutTypeName:d.workoutTypeName,energySystem:i,totalDistance:String(h),setSummary:H?.strategySpecificSummary||"No sets generated by strategy.",paceDescription:O})),{sets:_,mainSetTotalDist:w,targetPacePer100:x,descriptiveMessage:C}}function S1(i,f){let h=f,{setDefinitions:d}=i,_=$0.default.shuffle(d),w={generatedSets:[],totalDistance:0,strategySpecificSummary:""};for(let x of _){let C=x.distance;if(x.repScheme.type==="dynamic"&&h>=C){let H=Math.floor(h/C);if(H===0)continue;let O=x.repScheme.maxReps||1/0;if(H=Math.min(H,O),H>0){let L=H*C;h-=L;let Y=`r${x.rest}`,z={reps:H,dist:x.distance,restString:Y,activity:x.activity||i.setFormatting.defaultActivity||"kick",setRest:`rest ${i.setRest} seconds`,rest:Y};w.generatedSets.push(z),w.totalDistance+=L,w.strategySpecificSummary+=`${H}x${x.distance}
`}}}return w.generatedSets.length?w:{generatedSets:[],totalDistance:0,strategySpecificSummary:"No suitable reps found."}}var y1={workoutTypeName:"EN1",minTotalDistanceForSet:500,paceConfig:{baseMetric:"css",offset:5,randomRange:10,operator:"+"},setDefinitions:[{distance:500,repScheme:{type:"dynamic",maxReps:8},activity:"swim/kick",rest:60},{distance:600,repScheme:{type:"dynamic",maxReps:6},activity:"swim/kick",rest:60},{distance:700,repScheme:{type:"dynamic",maxReps:5},activity:"swim/kick",rest:60},{distance:800,repScheme:{type:"dynamic",maxReps:4},activity:"swim/kick",rest:60},{distance:900,repScheme:{type:"dynamic",maxReps:3},activity:"swim/kick",rest:60},{distance:1e3,repScheme:{type:"dynamic",maxReps:2},activity:"swim/kick",rest:60}],setRest:0,setFormatting:{baseStructure:"{reps}x{dist} {activity} ({energySystem} focus) {rest}",defaultActivity:"swim/kick"},descriptiveMessages:{success:'EN1: {setSummary} ({energySystem}), {paceDescription} pace guide, 60" rest.',tooShort:"EN1: Too short. Min rep distance {minRepDistForType}, available: {remainingDistance}.",fail:"EN1: Could not fit EN1 reps for {energySystem}. Available: {remainingDistance}."}},w1={workoutTypeName:"General Endurance",paceConfig:{baseMetric:"css",offset:0,operator:"+"},setDefinitions:[{distance:500,repScheme:{type:"dynamic",maxReps:1/0},rest:60},{distance:400,repScheme:{type:"dynamic",maxReps:1/0},rest:60},{distance:300,repScheme:{type:"dynamic",maxReps:1/0},rest:45},{distance:200,repScheme:{type:"dynamic",maxReps:1/0},rest:30},{distance:100,repScheme:{type:"dynamic",maxReps:1/0},rest:20},{distance:50,repScheme:{type:"dynamic",maxReps:1/0},rest:15}],setRest:0,setFormatting:{baseStructure:"{reps}x{dist} swim ({energySystem} focus) {rest}",defaultActivity:"swim"},descriptiveMessages:{success:"General Endurance ({energySystem}) default set. {setSummary}",tooShort:"General Endurance ({energySystem}) set - too short. Available: {remainingDistance}.",fail:"General Endurance ({energySystem}): Could not fit set. Available: {remainingDistance}."}},O1={workoutTypeName:"SP2",paceConfig:{baseMetric:"css",offset:10,randomRange:5,operator:"-"},setDefinitions:[{distance:25,repScheme:{type:"dynamic",maxReps:20},activity:"UW sprint",notes:"breath at wall",rest:60},{distance:50,repScheme:{type:"dynamic",maxReps:10},activity:"UW sprint",notes:"breath at wall",rest:120}],setRest:300,setFormatting:{baseStructure:"{reps}x{dist} {activity} ({energySystem} focus, {notes}) {rest}",defaultActivity:"UW sprint"},descriptiveMessages:{success:"SP2: Lactate Production ({energySystem}), Near Max Effort. Set: {setSummary}. Total ~{totalDistance}yds.",tooShort:"SP2: Too short. Min rep 25. Available: {remainingDistance}.",fail:"SP2: Could not fit SP2 set. Available: {remainingDistance} (target yardage for SP2 is typically 300-600)."}},$i={workoutTypeName:"SP1",paceConfig:{baseMetric:"css",offset:3,randomRange:2,operator:"-"},setDefinitions:[{distance:25,repScheme:{type:"dynamic",maxReps:32},rest:20},{distance:50,repScheme:{type:"dynamic",maxReps:16},rest:30},{distance:75,repScheme:{type:"dynamic",maxReps:12},rest:40},{distance:100,repScheme:{type:"dynamic",maxReps:8},rest:45},{distance:200,repScheme:{type:"dynamic",maxReps:4},rest:60}],setRest:90,setFormatting:{baseStructure:"{reps}x{dist} {activity} ({energySystem} focus) {rest}"},descriptiveMessages:{success:"SP1: Lactate Tolerance ({energySystem}), {paceDescription}. Total ~{totalDistance}yds.",tooShort:"SP1: Too short. Min rep 25. Available: {remainingDistance}.",fail:"SP1: Could not fit SP1 set. Available: {remainingDistance} (target yardage for SP1 is typically 400-800)."}},U1={workoutTypeName:"EN3",paceConfig:{baseMetric:"css",offset:1,randomRange:1,operator:"-"},setDefinitions:[{id:"Nx400_css_r50",distance:400,repScheme:{type:"dynamic",maxReps:18},rest:50},{id:"Nx500_css_r60",distance:500,repScheme:{type:"dynamic",maxReps:14},rest:60},{id:"Nx600_css_r90",distance:600,repScheme:{type:"dynamic",maxReps:12},rest:90}],setRest:0,setFormatting:{baseStructure:"{reps}x{dist} {energySystem} focus swim @ {paceDesc} {rest}",defaultActivity:"swim"},descriptiveMessages:{success:"EN3: {setSummary} ({energySystem}) @ {paceDescription}.",tooShort:"EN3: Too short for EN3 sets (min rep {minRepDistForType}). Available: {remainingDistance}.",fail:"EN3: Could not fit standard or fallback EN3 set for {energySystem}. Available: {remainingDistance}."}},zi={workoutTypeName:"EN2",paceConfig:{baseMetric:"css",offset:0,operator:"+"},setDefinitions:[{id:"18x100_css_r10",distance:100,repScheme:{type:"dynamic",maxReps:18},rest:10},{id:"10x200_css_r20",distance:200,repScheme:{type:"dynamic",maxReps:10},rest:20},{id:"Nx400_css_r40",distance:400,repScheme:{type:"dynamic",maxReps:18},rest:40},{id:"Nx500_css_r50",distance:500,repScheme:{type:"dynamic",maxReps:14},rest:50},{id:"Nx600_css_r60",distance:600,repScheme:{type:"dynamic",maxReps:12},rest:60},{id:"Nx800_css_r90",distance:800,repScheme:{type:"dynamic",maxReps:8},rest:90},{id:"Nx1000_css_r90",distance:1e3,repScheme:{type:"dynamic",maxReps:6},rest:90}],setRest:150,setFormatting:{baseStructure:"{reps}x{dist} {energySystem} focus swim @ {paceDesc} {rest}",defaultActivity:"swim"},descriptiveMessages:{success:"EN2: {setSummary} ({energySystem}) @ {paceDescription}.",tooShort:"EN2: Too short for EN2 sets. Available: {remainingDistance}.",fail:"EN2: Could not fit standard EN2 set for {energySystem}. Available: {remainingDistance}."}},cr={ENDURANCE_BASE:y1,GENERAL_ENDURANCE:w1,MAX_SPRINT:O1,SPEED_ENDURANCE:$i,THRESHOLD_DEVELOPMENT:U1,THRESHOLD_SUSTAINED:zi};var mt=[{desc:"200 w fins (or combo)",dist:200,type:"fins"},{desc:"200 swim cooldown",dist:200,type:"swim"},{desc:"100 cool down",dist:100,type:"general"},{desc:"300 CD",dist:300,type:"general"},{desc:"200 CD",dist:200,type:"general"},{desc:"450 cooldown (300 swim, 150 under)",dist:450,type:"swim/under"},{desc:"100 cool",dist:100,type:"general"},{desc:"150 cooldown and 20 minutes of stick skills",dist:150,type:"general"},{desc:"100 fin swim cooldown",dist:100,type:"fin swim"},{desc:"250 cool down",dist:250,type:"general"}];var x1={desc:"No cooldown (short workout)",dist:0,type:"none"};function E1(){return mt&&mt.length>0?mt[Math.floor(Math.random()*mt.length)]:x1}function T1(i,f,h,d){let _=cr[i],w;_||(w=`Unknown workout type: ${i}. Defaulting to general endurance.`,_=cr.GENERAL_ENDURANCE);let x=Ki(f,h,d,_);if(x.mainSetTotalDist<100&&d>100&&i!=="GENERAL_ENDURANCE"){let C="(Fallback to general endurance due to low generated distance for selected workout type).",H=x.descriptiveMessage;x=Ki(f,h,d,cr.GENERAL_ENDURANCE);let O=C;H?O=H+" "+C:x.descriptiveMessage&&(O=C+" "+x.descriptiveMessage),x.descriptiveMessage=O}else w?x.descriptiveMessage?x.descriptiveMessage=w+" Original generator message: "+x.descriptiveMessage:x.descriptiveMessage=w:i==="GENERAL_ENDURANCE"&&!x.descriptiveMessage&&(x.descriptiveMessage=`General Endurance (${f}) set.`);return x}var H1={generateCooldown:E1,generateMainSet:T1},Xi=H1;var R1=600,z0="yards";function _t(i,f,h,d){let _=$e(h);if(_===null)return"Error: Invalid CSS time format. Please use MM:SS (e.g., '1:10').";let w=[],x=0,C=B0(i,R1);w.push(C.desc),x+=C.dist;let H=Xi.generateCooldown();x+=H.dist;let O="Main Set:",L=[],Y=0,z,mn=i-x,_n=A1(f,d),nn=Xi.generateMainSet(_n,f,_,mn);return L=nn.sets,Y=nn.mainSetTotalDist,z=nn.targetPacePer100,nn.descriptiveMessage&&(O+=` ${nn.descriptiveMessage}`),w.push(O),L.forEach(zn=>{w.push(`  - ${zn}`)}),x+=Y,w.push(`CD: ${H.desc}`),w.push(`
Total estimated distance: ${x} ${z0}`),w.push(`CSS: ${h}`),w.push(`Workout Type: ${_n||d||"GENERAL_ENDURANCE"}`),w.push(`Energy System Focus: ${f.toUpperCase()}`),w.push(`Estimated AVG pace for main set: ${ze(z)} / 100 ${z0}`),w.join(`
`)}function A1(i,f){let d={EN1:"ENDURANCE_BASE",EN2:"THRESHOLD_SUSTAINED",EN3:"THRESHOLD_DEVELOPMENT",SP1:"SPEED_ENDURANCE",SP2:"MAX_SPRINT"}[i.toUpperCase()];return d||f&&(d=f),d}var Yi=Ge(xe(),1);function dr(i,f,h,d=1){let _=Yi.default.filter(h,w=>w[i]*d<=f);return Yi.default.sample(_)}var X0=Ge(xe(),1);var pr=[{name:"HUHO",interval:1,time:25},{name:"HOHU",interval:1,time:25},{name:"FU",interval:1,time:30},{name:"Swim",interval:1,time:20},{name:"Kick",interval:2,time:45},{name:"OU",interval:2,time:50},{name:"UO",interval:2,time:50},{name:"OUO",interval:3,time:70},{name:"UOU",interval:3,time:75},{name:"TOFU",interval:4,time:100}];function Y0(i,f){if(i<20)return f;let h=0,d=dr("time",i,pr);for(;h+d.time<=i;){let _=i-h,w=Math.floor(_/d.time);w=w*d.interval>40?Math.floor(40/d.interval):w;let x=X0.default.random(1,w),C=d.time*x;h+=C,f.seconds+=C,f.intervals.push({type:d.name,length:d.interval*25*x,number:1,time:C})}return f}var te=Ge(xe(),1);function C1(i,f,h){if(i<20*h)return null;let d,_=0,w=te.default.cloneDeep(pr);for(;!d;)if(_++,d=te.default.sample(w),d.time*h>i?(w=te.default.filter(w,x=>x.time<d.time),d=null):(d.interval>f||f%d.interval!==0)&&(w=te.default.filter(w,x=>x.interval<d.interval),d=null),_>20)throw new Error(`fuck ${i} ${f} ${h}`);return d}function N1(i){return te.default.reduce(i.pattern,(f,h)=>{let d=h.interval[1];return f[h.group]?(f[h.group].number+=1,f[h.group].intervalLength=te.default.min([f[h.group].intervalLength,d])):f[h.group]={number:1,intervalLength:d},f},{})}function I1(i,f,h){let d={},_=f.pattern.length;return te.default.forEach(h,(w,x)=>{let C=f.intervalSize,H=(_-w.number)*C*20,O=C1(i-H,w.intervalLength,w.number*C);d[x]=O}),d}function q0(i,f,h){if(i<20)return f;let d=N1(h),_=I1(i,h,d);return te.default.forEach(h.pattern,w=>{let x=_[w.group],C=w.interval[0],H=w.interval[1],O=H/x.interval,L=x.time*C*O;f.seconds+=L,f.intervals.push({type:x.name,length:H*25,number:C,time:x.time*O})}),f}var Z0=`Warm-up (300-500 yds)\u20286 x 50 Kick @ 0:45\u20283 x 100 Huho @ 1:30\u20283 x 100 HoHu @ 1:30\u20286 x 50 Kick @ 0:45\u2028Cooldown (300-500 yds)
*If this is too easy, add the following intervals between the 100\u2032s:\u2028\u20282 x 150 Swim @ 2:15\u20281 x 300 Kick @ 5:00\u20282 x 150 Swim @ 2:15
Total: 1800-2200 Yds (2700-3100 w/ extras)

\f
Warm-up (300-500 yds) \u2028\u20284 x 100 Swim @ 1:30\u20281 min rest\u20284 x 100 Kick @ 1:30\u20281 min rest\u20284 x 100 Huho @ 1:30
Cooldown (300-500 yds)
Goal Time If You\u2019re Fit: Under 1:03.\u2028Goal Time If You\u2019re Not: Under 1:10
To make harder:
	\u2022	Change all the intervals to HUHO\u2019s
	\u2022	Add another 4 x 100 Huho @ 1:30 w/ 2 min rest as your second set. 
	\u2022	Change all the intervals to HUHO Kick (no arms) 
Total: 1800-2200 yds (2200-3000 w/ extras) 

\f
Warm-up (300-500 yds)
Set: 
	\u2022	2\xD7100 Kick @ 1:30
	\u2022	1\xD7150 Swim @ 2:15
	\u2022	1\xD7100 UOUO @ 1:45
3 Sets, No Rest between Sets
Cooldown (300-500 yds)
All hundred\u2019s should be swum at around the same speed.
To make harder:
	\u2022	Add 4th Set
	\u2022	Add 5th Set
	\u2022	Drop the UOUO\u2019s to 1:30
Total: 1950-2350 yds (2400-3250 w/ extras)

\f
Warm-up (300-500 yds)\u20283\xD7100 Kick \xA0 @ 1:30\u20282\xD775 \xA0 Huho @ 1:10\u20283\xD7100 Kick \xA0 @ 1:30\u20282\xD775 \xA0 OUO \xA0 @ 1:10\u20283\xD7100 Kick \xA0 @ 1:30\u20282\xD775 \xA0 UOU \xA0 @ 1:10\u2028Cooldown (300-500 yds)
If you need more, add these two the end of the set:
3\xD7100 Kick \xA0 @ 1:30\u20282\xD775 \xA0 FU \xA0 \xA0 \xA0@ 1:20
If you need more than that, do 4\xD775 instead of 2\xD775.
Total: 1950-2350 Yds (w/ extras 2400-3400 yds)

\f
Warm-up (300-500 yds)
4\xD750 HUHO @ 0:45\u20282\xD7100 Kick @ 1:30\u20284\xD750 HUHO @ 0:45\u2028200 Swim @ 3:00\u20284\xD750 HOHU @ 0:45\u20282\xD7100 Kick @ 1:30\u20284\xD750 HOHU @ 0:45
Cooldown (300-500 yds)
Add to the end of the set for extra:\u2028\u2028200 Swim @ 3:00\u20284\xD750 HOHU @ 0:45\u20282\xD7100 Kick @ 1:30\u20284\xD750 HOHU @ 0:45
Total: 2000-2400 yds (2800-3200 w/ extras) 

\f
Warm-up (300-500 yds)
100 UOOO @ 1:30\u2028100 OUOO @ 1:30\u2028100 OOUO @ 1:30\u2028100 OOOU @ 1:30
4\xD750 Swim @ :45
100 UOUO @ 1:40\u2028100 OUOU @ 1:40\u2028100 UOOU @ 1:40
4\xD750 Swim @ :45
100 UUOO @ 1:45\u2028100 OUUO @ 1:45\u2028100 OOUU @ 1:45
4\xD750 Swim @ :45
Cooldown (300-500 yds)
For a bit extra, add this to the end:
\u2028100 UUUO @ 2:00\u2028100 UUOU @ 2:00\u2028100 UOUU @ 2:00\u2028100 OUUU @ 2:00
4\xD750 Swim @ :45
100 FU
2100-2500 yds (2800-3200 yds w/ extras)

Warm-up (300-500 yds)
4\xD775 HUHO @ 1:15 (Descend Times)\u20284\xD725 FU Sprints (Full Recovery) (Goal Time: < 0:12)
20\xD750 Swim Sprints @ 1:00\u2028\u2028Keep track of your times.\u2028Keep going until your time is more than 2 seconds off of the first sprint.\u2028Record how many you achieved, and your time range.\u2028\u2028Cooldown (300-500 yds)

\f
This workout is more to stretch your legs out than kill them. Do it appropriately.
Warm-up (300-500 yds) 
200 Flutter w/ kick board (Medium Pace) + 15 seconds rest\u20284\xD750 (HUHO, HOHU, OU, UO) @ :45\u2028200 dolphin w/ kick board (Medium Pace) + 15 seconds rest\u20284\xD750 (HUHO, HOHU, OU, UO) @ :45\u2028200 flutter on back (Medium Pace) + 15 seconds rest\u20284\xD750 (HUHO, HOHU, OU, UO) @ :45\u2028200 dolphin on back (Medium Pace) + 15 seconds rest\u20284\xD750 (HUHO, HOHU, OU, UO) @ :45
Cooldown (300-500 yds)

\f
Warm-up (300-500)
6\xD750 @ 0:50 
Swim, HUHO, HOHU, OU, UO, FU
3\xD7100 @ 1:40\u2028Swim, HUHO\u2028HOHU, OU\u2028UO, FU
2\xD7150 @ 2:30\u2028Swim, HUHO, HOHU\u2028OU, UO, FU
3\xD7100 @ 1:40\u2028Swim, HUHO\u2028HOHU, OU\u2028UO, FU
6\xD750 @ 0:50\u2028Swim, HUHO, HOHU, OU, UO, FU
Cooldown (300-500)
If you need more, add these intervals after the 150\u2032s:
1\xD7300 @ 5:00\u2028swim, HUHO, HOHU, OU, UO, FU
2\xD7150 @ 2:30\u2028swim, HUHO, HOHU\u2028OU, UO, FU

Warm-up (300-500)
Set: 
200 Swim @ 2:45 
3\xD7100 Huho @ 1:30
3\xD750 UO @ 0:45
Repeat 4 Times
Cooldown (300-500)\u2028\u2028If you need more, add another set.

\f
Warm-up (300-500)
4\xD7100 HUHO @ 1:30\u20284\xD7100 TOFU @ 1:40\u20284\xD7100 OUOU @ 1:50\u20284\xD7100 FU @ 2:00
Cooldown (300-500)
If you need more:
The original set was each interval x6. 
If you need more, go to 5 or 6 for each type of swim.

\f
Warm-up (300-500)
6\xD750 UO @ 0:40
\u20283\xD7100 HUHO @ 1:20
\u20281\xD7300 Swim @ 4:30 
This should be barely faster than 3x your best 100
\u20283\xD7100 HOHU @ 1:30 
Match or descend your previous 100\u2032s
\u20286\xD750 OU @ 0:45 
Try to descend all 4, each one faster than half  your fastest 100

Cooldown (300-500)

If you need more, add to the end:
3\xD7100 BOGDAT @ 1:50\u20286\xD750 FU @ 1:00

\f
Warm-up (300-500)
200 HUHO @ 3:15 (Goal < 2:12)\u2028100 OUOU @ 2:00 (Goal < 1:03)\u2028200 HOHU @ 3:15 (Goal < 2:12)\u2028100 OUOU @ 2:00 (Goal < 1:01)\u2028200 TOFU @ 3:15 (Goal < 2:12)\u2028100 OUOU @ 1:15 (Goal < 1:00)
3:00 Rest
200 HUHO @ 3:15 (Goal < 2:10)\u2028100 FU @ 2:00 (Goal < 1:12)\u2028200 HOHU @ 3:15 (Goal < 2:10)\u2028100 FU @ 2:00 (Goal < 1:10)\u2028200 TOFU @ 3:15 (Goal < 2:10)\u2028100 FU @ 1:15 (Goal < 1:08)
Cooldown (300-500)

\f
Warm-up (300-500)
3\xD7100 HUHO @ 1:30 Descending\u2028
5\xD7200 @ 3:15
[HUHO, Swim, OUOU, Kick, HUHO]
\u20283\xD7100 BUBU @ 2:15 
Cooldown (300-500)

\f
Warm-up (300-500)
4\xD775 OUO @ 1:15\u20283\xD7100 HUHO @ 1:45\u20284\xD775 UOU @ 1:15\u2028300 Swim @ 4:30\u20284\xD775 OUO @ 1:30\u20283\xD7100 HUHO @ 1:45\u20284\xD775 BUBU @ 1:30
Cooldown (300-500)

\f
Warm-up (300-500)
1000 Kick
Full Recovery
50 UO @ 1:00\u202850 OU @ 1:00\u20282\xD725 ASAP @ 1:00\u20282\xD725 FU Sprint @ :45
5\xD7100 FU @ 2:10

\f
Warm-up (300-500)
200 Swim @ 2:45\u20284\xD750 OU @ :45\u2028200 Kick @ 3:00\u20284\xD750 UO @ :45
400 Swim @ 6:00
4\xD750 BUBU @ 1:00\u2028200 HUHO @ 3:00\u20284\xD750 FU @ 1:15\u2028200 HOHU @ 3:30
Cooldown (300-500)

\f
Warm-up (300-500)
10\xD7100 HUHO @ 1:20
Full Recovery
50 UO @ 1:00\u202850 OU @ 1:00\u20282\xD725 ASAP @ 1:00\u20282\xD725 FU Sprint @ :45
6\xD7100 FU @ 2:10
`,V0=`Warm-up (300-500 yds)\u20286 x 50 Kick @ 0:45\u20283 x 100 Huho @ 1:30\u20283 x 100 HoHu @ 1:30\u20286 x 50 Kick @ 0:45\u2028Cooldown (300-500 yds)
*If this is too easy, add the following intervals between the 100\u2032s:\u2028\u20282 x 150 Swim @ 2:15\u20281 x 300 Kick @ 5:00\u20282 x 150 Swim @ 2:15
Total: 1800-2200 Yds (2700-3100 w/ extras)

\f
Warm-up (300-500 yds) \u2028\u20284 x 100 Swim @ 1:30\u20281 min rest\u20284 x 100 Kick @ 1:30\u20281 min rest\u20284 x 100 Huho @ 1:30
Cooldown (300-500 yds)
Goal Time If You\u2019re Fit: Under 1:03.\u2028Goal Time If You\u2019re Not: Under 1:10
To make harder:
	\u2022	Change all the intervals to HUHO\u2019s
	\u2022	Add another 4 x 100 Huho @ 1:30 w/ 2 min rest as your second set. 
	\u2022	Change all the intervals to HUHO Kick (no arms) 
Total: 1800-2200 yds (2200-3000 w/ extras) 

\f
Warm-up (300-500 yds)
Set: 
	\u2022	2\xD7100 Kick @ 1:30
	\u2022	1\xD7150 Swim @ 2:15
	\u2022	1\xD7100 UOUO @ 1:45
3 Sets, No Rest between Sets
Cooldown (300-500 yds)
All hundred\u2019s should be swum at around the same speed.
To make harder:
	\u2022	Add 4th Set
	\u2022	Add 5th Set
	\u2022	Drop the UOUO\u2019s to 1:30
Total: 1950-2350 yds (2400-3250 w/ extras)

\f
Warm-up (300-500 yds)\u20283\xD7100 Kick \xA0 @ 1:30\u20282\xD775 \xA0 Huho @ 1:10\u20283\xD7100 Kick \xA0 @ 1:30\u20282\xD775 \xA0 OUO \xA0 @ 1:10\u20283\xD7100 Kick \xA0 @ 1:30\u20282\xD775 \xA0 UOU \xA0 @ 1:10\u2028Cooldown (300-500 yds)
If you need more, add these two the end of the set:
3\xD7100 Kick \xA0 @ 1:30\u20282\xD775 \xA0 FU \xA0 \xA0 \xA0@ 1:20
If you need more than that, do 4\xD775 instead of 2\xD775.
Total: 1950-2350 Yds (w/ extras 2400-3400 yds)

\f
Warm-up (300-500 yds)
4\xD750 HUHO @ 0:45\u20282\xD7100 Kick @ 1:30\u20284\xD750 HUHO @ 0:45\u2028200 Swim @ 3:00\u20284\xD750 HOHU @ 0:45\u20282\xD7100 Kick @ 1:30\u20284\xD750 HOHU @ 0:45
Cooldown (300-500 yds)
Add to the end of the set for extra:\u2028\u2028200 Swim @ 3:00\u20284\xD750 HOHU @ 0:45\u20282\xD7100 Kick @ 1:30\u20284\xD750 HOHU @ 0:45
Total: 2000-2400 yds (2800-3200 w/ extras) 

\f
Warm-up (300-500 yds)
100 UOOO @ 1:30\u2028100 OUOO @ 1:30\u2028100 OOUO @ 1:30\u2028100 OOOU @ 1:30
4\xD750 Swim @ :45
100 UOUO @ 1:40\u2028100 OUOU @ 1:40\u2028100 UOOU @ 1:40
4\xD750 Swim @ :45
100 UUOO @ 1:45\u2028100 OUUO @ 1:45\u2028100 OOUU @ 1:45
4\xD750 Swim @ :45
Cooldown (300-500 yds)
For a bit extra, add this to the end:
\u2028100 UUUO @ 2:00\u2028100 UUOU @ 2:00\u2028100 UOUU @ 2:00\u2028100 OUUU @ 2:00
4\xD750 Swim @ :45
100 FU
2100-2500 yds (2800-3200 yds w/ extras)

Warm-up (300-500 yds)
4\xD775 HUHO @ 1:15 (Descend Times)\u20284\xD725 FU Sprints (Full Recovery) (Goal Time: < 0:12)
20\xD750 Swim Sprints @ 1:00\u2028\u2028Keep track of your times.\u2028Keep going until your time is more than 2 seconds off of the first sprint.\u2028Record how many you achieved, and your time range.\u2028\u2028Cooldown (300-500 yds)

\f
This workout is more to stretch your legs out than kill them. Do it appropriately.
Warm-up (300-500 yds) 
200 Flutter w/ kick board (Medium Pace) + 15 seconds rest\u20284\xD750 (HUHO, HOHU, OU, UO) @ :45\u2028200 dolphin w/ kick board (Medium Pace) + 15 seconds rest\u20284\xD750 (HUHO, HOHU, OU, UO) @ :45\u2028200 flutter on back (Medium Pace) + 15 seconds rest\u20284\xD750 (HUHO, HOHU, OU, UO) @ :45\u2028200 dolphin on back (Medium Pace) + 15 seconds rest\u20284\xD750 (HUHO, HOHU, OU, UO) @ :45
Cooldown (300-500 yds)

\f
Warm-up (300-500)
6\xD750 @ 0:50 
Swim, HUHO, HOHU, OU, UO, FU
3\xD7100 @ 1:40\u2028Swim, HUHO\u2028HOHU, OU\u2028UO, FU
2\xD7150 @ 2:30\u2028Swim, HUHO, HOHU\u2028OU, UO, FU
3\xD7100 @ 1:40\u2028Swim, HUHO\u2028HOHU, OU\u2028UO, FU
6\xD750 @ 0:50\u2028Swim, HUHO, HOHU, OU, UO, FU
Cooldown (300-500)
If you need more, add these intervals after the 150\u2032s:
1\xD7300 @ 5:00\u2028swim, HUHO, HOHU, OU, UO, FU
2\xD7150 @ 2:30\u2028swim, HUHO, HOHU\u2028OU, UO, FU

Warm-up (300-500)
Set: 
200 Swim @ 2:45 
3\xD7100 Huho @ 1:30
3\xD750 UO @ 0:45
Repeat 4 Times
Cooldown (300-500)\u2028\u2028If you need more, add another set.

\f
Warm-up (300-500)
4\xD7100 HUHO @ 1:30\u20284\xD7100 TOFU @ 1:40\u20284\xD7100 OUOU @ 1:50\u20284\xD7100 FU @ 2:00
Cooldown (300-500)
If you need more:
The original set was each interval x6. 
If you need more, go to 5 or 6 for each type of swim.

\f
Warm-up (300-500)
6\xD750 UO @ 0:40
\u20283\xD7100 HUHO @ 1:20
\u20281\xD7300 Swim @ 4:30 
This should be barely faster than 3x your best 100
\u20283\xD7100 HOHU @ 1:30 
Match or descend your previous 100\u2032s
\u20286\xD750 OU @ 0:45 
Try to descend all 4, each one faster than half  your fastest 100

Cooldown (300-500)

If you need more, add to the end:
3\xD7100 BOGDAT @ 1:50\u20286\xD750 FU @ 1:00

\f
Warm-up (300-500)
200 HUHO @ 3:15 (Goal < 2:12)\u2028100 OUOU @ 2:00 (Goal < 1:03)\u2028200 HOHU @ 3:15 (Goal < 2:12)\u2028100 OUOU @ 2:00 (Goal < 1:01)\u2028200 TOFU @ 3:15 (Goal < 2:12)\u2028100 OUOU @ 1:15 (Goal < 1:00)
3:00 Rest
200 HUHO @ 3:15 (Goal < 2:10)\u2028100 FU @ 2:00 (Goal < 1:12)\u2028200 HOHU @ 3:15 (Goal < 2:10)\u2028100 FU @ 2:00 (Goal < 1:10)\u2028200 TOFU @ 3:15 (Goal < 2:10)\u2028100 FU @ 1:15 (Goal < 1:08)
Cooldown (300-500)

\f
Warm-up (300-500)
3\xD7100 HUHO @ 1:30 Descending\u2028
5\xD7200 @ 3:15
[HUHO, Swim, OUOU, Kick, HUHO]
\u20283\xD7100 BUBU @ 2:15 
Cooldown (300-500)

\f
Warm-up (300-500)
4\xD775 OUO @ 1:15\u20283\xD7100 HUHO @ 1:45\u20284\xD775 UOU @ 1:15\u2028300 Swim @ 4:30\u20284\xD775 OUO @ 1:30\u20283\xD7100 HUHO @ 1:45\u20284\xD775 BUBU @ 1:30
Cooldown (300-500)

\f
Warm-up (300-500)
1000 Kick
Full Recovery
50 UO @ 1:00\u202850 OU @ 1:00\u20282\xD725 ASAP @ 1:00\u20282\xD725 FU Sprint @ :45
5\xD7100 FU @ 2:10

\f
Warm-up (300-500)
200 Swim @ 2:45\u20284\xD750 OU @ :45\u2028200 Kick @ 3:00\u20284\xD750 UO @ :45
400 Swim @ 6:00
4\xD750 BUBU @ 1:00\u2028200 HUHO @ 3:00\u20284\xD750 FU @ 1:15\u2028200 HOHU @ 3:30
Cooldown (300-500)

\f
Warm-up (300-500)
10\xD7100 HUHO @ 1:20
Full Recovery
50 UO @ 1:00\u202850 OU @ 1:00\u20282\xD725 ASAP @ 1:00\u20282\xD725 FU Sprint @ :45
6\xD7100 FU @ 2:10
`,J0=`Workout 1b
Warm\xADup (300-500 yds)

2 x 150 HUHO @ 2:10
100 VKick +30
2 x 150 HOHU @ 2:10
100 VKick +30
2 x 150 HUHO @ 2:10
100 VKick +30
2 x 150 HOHU @ 2:10
100 VKick +30

Cooldown (300-500 yds)\f
Workout 2b
Warm\xADup (300-500 yds)

200 Swim @ 2:40
3 x 100 UOUO @ 1:30
200 Kick @ 2:40
3 x 100 UOUO @ 1:30
200 HUHO @ 2:40
3 x 100 UOUO @ 1:30
200 TOFU @ 2:40
3 x 100 UOUO @ 1:30

Cooldown (300-500 yds)\f
Workout 3b
Warm\xADup (300-500 yds)

1 x 400 HUHO @ 5:30 < 4:45
2 x 200 HUHO @ 2:45 < 2:16
4 x 100 HUHO @ 1:30 < 1:03
8 x 50  HUHO @ 0:45 < 0:30

Cooldown (300-500 yds)\f
Workout 4b
Warm\xADup (300-500 yds)

1 x 400 OUOU @ 6:30 < 4:45
2 x 200 OUOU @ 3:30 < 2:16
4 x 100 OUOU @ 1:45 < 1:03
8 x 50  OUOU @ 1:00 < 0:30

Cooldown (300-500 yds)\f
Workout 5b
Warm\xADup (300-500 yds)

400 HUHO @ 6:00 < 4:45
4 x 100 Kick @ 1:30
200 HUHO @ 3:00 < 2:16
2 x 100 Kick @ 1:30
200 HUHO @ 3:00 < 2:16
2 x 100 Kick @ 1:30

Cooldown (300-500 yds)\f
Workout 6b
Warm\xADup (300-500 yds)

4 x 100 HUHO @ 1:30 < 1:10
4 x 100 HUHO @ 1:25 < 1:10
4 x 100 HUHO @ 1:20 < 1:10
1 min rest
4 x 100 HUHO @ 1:15 < 1:10

Cooldown (300-500 yds)\f
Workout 7b
Warm\xADup (300-500 yds)

2 x 300 Swim @ 4:00
4 x 100 UOUK @ 1:30
2 x 300 Swim @ 4:00
4 x 100 UOUK @ 1:30

Cooldown (300-500 yds)\f
Workout 8b
Warm-up (300-500)

4\xD775 VKick +20 \u20283\xD7100 HUHO @ 1:30\u20284\xD775 VKick +20 \u2028300 Swim @ 4:30\u20284\xD775 VKick +20 \u20283\xD7100 HUHO @ 1:30\u20284\xD775 VKick +20 
\u2028Cooldown (300-500)
\f
Workout 9b
Warm\xADup (300-500 yds)

500 Kick @ 7:00 < 5:20
500 Swim @ 7:00 < 5:20
500 Kick @ 7:00 < 5:20
500 Swim @ 7:00 < 5:20

Cooldown (300-500 yds)\f
Workout 10b
Warm\xADup (300-500 yds)

3 x 300 HUHO @ 4:30 < 3:10
3 x 200 HUHO @ 3:00 < 2:06
3 x 100 HUHO @ 1:45 < 1:00
1 min rest
3 x 100 FU @ 1:40 

Cooldown (300-500 yds)\f
Workout 11b
Warm\xADup (300-500 yds)

6 x 100 HUHO on 1:30 < 1:03
6 x 100 TOFU on 1:40 < 1:03
6 x 100 OUOU on 1:40 < 1:03
6 x 100 FU on 2:00 < 1:05

Cooldown (300-500 yds)\f
Workout 12b
Warm\xADup (300-500 yds)

5 Sets:
1x150 HUHO @ 2:00
2x100 HOHU @ 1:30
1x100 OUOU @ 1:45

Cooldown (300-500 yds)\f
Workout 13b
Warm\xADup (300-500 yds)

10x150 HUHO @ 2:15
5x100 HOHU @ 1:30

Cooldown (300-500 yds)\f
Workout 14b
Warm\xADup (300-500 yds)

4x125 UOUOU @ 2:00
5x100 UOUO @ 1:40
4x100 HUHO @ 1:30
3x100 HUHO @ 1:20
2x100 HUHO @ 1:10
1x100 HUHO @ sprint

Cooldown (300-500 yds)\f
Workout 15b
Warm\xADup (300-500 yds)

200 HUHO @ 3:10
100 VKick +30
200 HOHU @ 3:10
100 VKick +30
200 HUHO @ 3:10
100 VKick +30
200 HOHU @ 3:10
100 VKick +30
200 HUHO @ 3:10
100 VKick +30
5x100 UOUO @ 1:40

Cooldown (300-500 yds)\f
Workout 16b
Warm\xADup (300-500 yds)

250 Kick +45, 50 FU +15
2 x 100 HUHO +20, 50 OU +15
250 Kick +45, 50 FU +15
2 x 100 HUHO +20, 50 OU +15
250 Kick +45, 50 FU +15
2 x 100 HUHO +20, 50 OU +15
250 Kick +45, 50 FU+15
2 x 100 HUHO +20, 50 OU +15

Cooldown (300-500 yds)\f
Workout 17b
Warm\xADup (300-500 yds)

5 Sets
200 HUHO @ 3:00
3x100 OUOU @ 1:40

Cooldown (300-500 yds)\f
Workout 18b
Warm\xADup (300-500 yds)

500 Swim +45
5x100 HUHO @ 1:20
500 KB +45
5x100 HUHO @ 1:20

Cooldown (300-500 yds)\f
Workout 19b
Warm\xADup (300-500 yds)

4x100 UOUO @ 1:30
2x200 TOFU @ 3:00
1x400 HUHO @ 6:00
2x200 TOFU @ 3:00
4x100 OUOU @ 1:30

Cooldown (300-500 yds)\f
Workout 20b
Warm\xADup (300-500 yds)

7 Sets
100 Swim @ 1:20
100 VKick +20
50 Swim @ 0:40
50 VKick +15

Cooldown (300-500 yds)\f
Workout 21b
Warm\xADup (300-500 yds)

5 Sets
2x100 HUHO @ 1:30
100 OUOU @ 1:30
100 BUBU @ 2:15

Cooldown (300-500 yds)\f
Workout 22b
Warm\xADup (300-500 yds)

10x100 @ 1:30 
HUHO, HOHU, TOFU, OUOU, OUOU, TOFU, HOHU, HUHO, FU, FU
2 min rest
10x100 @ 1:30 
HUHO, HOHU, TOFU, OUOU, OUOU, TOFU, HOHU, HUHO, FU, FU

Cooldown (300-500 yds)\f
Workout 23b
Warm\xADup (300-500 yds)

200 HUHO @ 2:45\u20284\xD750 VKick +20\u2028200 HOHU @ 2:45\u20284\xD750 VKick +20
400 Swim @ 5:00
4\xD750 VKick +20
200 HUHO @ 2:45\u20284\xD750 VKick +20
200 HOHU @ 2:45

Cooldown (300-500 yds)
Workout 24b
Warm\xADup (300-500 yds)

10x100 OUOU @ 1:40
+30 Rest
10x75 OUO @ 1:10
+30 Rest
10x50 OU @ :50
+1:00 Rest
10x25 FU @ :25

Cooldown (300-500 yds)
`,Q0=`10 weeks program for speed development



Week 1\xA0:



Monday
Tuesday
Wednesday
Thursday
Friday
Swim 1
4000 EN1
4700 EN2
4500 EN1
4300 EN2
4200 EN1
Swim 2
2000 EN3

3000 SP1

2200 EN2

Swimming\xA0:
EN1\xA0: Basic endurance training 65-75% MHR
EN2\xA0: Threshold endurance training 75-80% MHR
EN3\xA0: Overload endurance training 80-85% MHR
SP1\xA0: Lactate tolerance training 85-90% MHR
SP2\xA0: Lactate production training + 90% MHR





Week 2\xA0:



Monday
Tuesday
Wednesday
Thursday
Friday
Swim 1
4000 EN1
4700 EN2
4500 EN1
4300 EN2
4200 EN1
Swim 2
2000 EN3

3000 SP1

2200 EN2

Swimming\xA0:
EN1\xA0: Basic endurance training
EN2\xA0: Threshold endurance training
EN3\xA0: Overload endurance training
SP1\xA0: Lactate tolerance training
SP2\xA0: Lactate production training






Week 3\xA0:



Monday
Tuesday
Wednesday
Thursday
Friday
Swim 1
3600 EN2
4000 EN3
4200 SP1
3600 EN2
4000 SP1
Swim 2
3200 EN3

2200 SP1

2200 SP2

Swimming\xA0:
EN1\xA0: Basic endurance training
EN2\xA0: Threshold endurance training
EN3\xA0: Overload endurance training
SP1\xA0: Lactate tolerance training
SP2\xA0: Lactate production training




Week 4\xA0:



Monday
Tuesday
Wednesday
Thursday
Friday
Swim 1
3600 EN2
4000 EN3
4200 SP1
3600 EN2
4000 SP1
Swim 2
3200 EN3

2200 SP1

2200 SP2

Swimming\xA0:
EN1\xA0: Basic endurance training
EN2\xA0: Threshold endurance training
EN3\xA0: Overload endurance training
SP1\xA0: Lactate tolerance training
SP2\xA0: Lactate production training








Week 5\xA0:



Monday
Tuesday
Wednesday
Thursday
Friday
Swim 1
3600 EN2
4000 EN3
4200 SP1
3600 EN2
4000 SP1
Swim 2
3200 EN3

2200 SP1

2200 SP2

Swimming\xA0:
EN1\xA0: Basic endurance training
EN2\xA0: Threshold endurance training
EN3\xA0: Overload endurance training
SP1\xA0: Lactate tolerance training
SP2\xA0: Lactate production training



Week 6\xA0:



Monday
Tuesday
Wednesday
Thursday
Friday
Swim 1
4000 EN2
3400 EN3
3800 SP1
4000 EN3
3800 SP1


Swimming\xA0:
EN1\xA0: Basic endurance training
EN2\xA0: Threshold endurance training
EN3\xA0: Overload endurance training
SP1\xA0: Lactate tolerance training
SP2\xA0: Lactate production training













Week 7:


Monday
Tuesday
Wednesday
Thursday
Friday
Swim 1
4000 EN2
3600 EN3
3800 SP2
4000 EN3
3800 SP1


Swimming\xA0:
EN1\xA0: Basic endurance training
EN2\xA0: Threshold endurance training
EN3\xA0: Overload endurance training
SP1\xA0: Lactate tolerance training
SP2\xA0: Lactate production training


Week 8:


Monday
Tuesday
Wednesday
Thursday
Friday
Swim 1
3600 EN3
3500 SP1
3200 SP2
3800 EN3
3400 SP2


Swimming\xA0:
EN1\xA0: Basic endurance training
EN2\xA0: Threshold endurance training
EN3\xA0: Overload endurance training
SP1\xA0: Lactate tolerance training
SP2\xA0: Lactate production training


Week 9:


Monday
Tuesday
Wednesday
Thursday
Friday
Swim 1
3600 EN3
3500 SP1
3200 SP2
3800 EN3
3400 SP2


Swimming\xA0:
EN1\xA0: Basic endurance training
EN2\xA0: Threshold endurance training
EN3\xA0: Overload endurance training
SP1\xA0: Lactate tolerance training
SP2\xA0: Lactate production training


Week 10:


Monday
Tuesday
Wednesday
Thursday
Friday
Swim 1
3000 EN2
3000 EN3
REST
REST
REST

Swimming\xA0:
EN1\xA0: Basic endurance training
EN2\xA0: Threshold endurance training
EN3\xA0: Overload endurance training
SP1\xA0: Lactate tolerance training
SP2\xA0: Lactate production training


Description:


EN1: Basic endurance training.
Long swim sets, not too hard on the speed. Think about technique. Different strokes.
8X500 with 60\u201DR 

EN2: Threshold endurance training.
Calculate CSS (critical swim speed).
Sets like:
10X200 with 20\u201Dr at CSS
5X400 with 40\u201Dr at CSS
18X100 with 10\u201Dr at CSS
3X600 with 60\u201Dr at CSS

EN3: Overload endurance training.
1\u201D to 2\u201D faster than CSS.
4X500 with 60\u201Dr
4X400 with 45\u201Dr

SP1: Lactate tolerance training.
3\u201D to 5\u201D faster than CSS.
Set distances between 25 to 100yd with 15\u201D to 2\u2019 r between sets
Set distances between 100 to 200yd with 3\u2019 to 10\u2019 r between sets
Sets of 400 to 800yd.

SP2: Lactate production training.
Speed: Near max.
Set distances between 25 to 50yd with 1\u2019 to 3\u2019 for 25yds set and 3\u2019 to 5\u2019 for 50yds set.
Set length: 300 to 600yds


CSS test: 
http://www.swimsmooth.com/training.html


`;var qi={FOUR_WEEK_4X:{id:"FOUR_WEEK_4X",name:"4-Week Plan (4 swims/week)",swimsPerWeek:4,weeks:4,sourceText:Z0},NINE_WEEK_2X:{id:"NINE_WEEK_2X",name:"9-Week Plan (2 swims/week)",swimsPerWeek:2,weeks:9,sourceText:V0},TEN_WEEK_SPEED:{id:"TEN_WEEK_SPEED",name:"10-Week Speed Development",kind:"macro",weeks:10,sourceText:Q0},LIBRARY_24:{id:"LIBRARY_24",name:"24 Swim Workouts",sourceText:J0}};function hr(i){return qi[i]||null}function b1(i){return i.replace(/\u00ad/g,"-").replace(/\u2013/g,"-").replace(/\u2014/g,"-").replace(/\u00a0/g," ").replace(/\r\n/g,`
`).replace(/\u2028/g,`
`).replace(/\u2029/g,`
`).replace(/(\d+)\s*,?\s*zzz★?\s*[x×]\s+/gi,"$1 x ")}var L1=/^[\u2022•\-\s]*(\d+)\s*[x×]\s*(\d+)\s*(.*?)\s*(?:@|on)\s*(\d*:?\d+(?:\.\d+)?)\s*(.*)$/i,P1=/^[\u2022•\-\s]*(\d+)\s+(.+?)\s*(?:@|on)\s*(\d*:?\d+(?:\.\d+)?)\s*(.*)$/i,gr=/(?:\(Goal\s*)?<\s*(\d*:?\d+(?:\.\d+)?)\s*\)?\s*$/i,k1=/Goal Time If You(?:'|'|\u2019)re Fit:\s*Under\s*(\d*:?\d+)/i,M1=/Goal Time If You(?:'|'|\u2019)re Not:\s*Under\s*(\d*:?\d+)/i;function j0(i){return i.replace(/\s*(?:\(Goal\s*)?<\s*\d*:?\d+(?:\.\d+)?\s*\)?\s*$/i,"").replace(/\s*\([^)]*Descend[^)]*\)\s*$/i,"").replace(/\s+Descending\s*$/i,"").trim()}function F1(i){let f=i.trim();if(!f)return{kind:"blank"};if(/^warm[-\s]?up/i.test(f))return{kind:"warmup",text:f};if(/^cool\s?down/i.test(f))return{kind:"cooldown",text:f};if(/^if you need more|^to make harder|^for a bit extra|^add to the end|^add these|^for extra|^the original set was/i.test(f))return{kind:"extraStart",text:f};if(/^\*if this is too easy/i.test(f))return{kind:"extraStart",text:f};let h=f.match(L1);if(h){let[,x,C,H,O,L]=h,Y=gr.test(L)||gr.test(f);return{kind:"interval",reps:parseInt(x,10),distance:parseInt(C,10),activity:j0(H)||"swim",hasSendOff:!0,hasGoalTime:Y,originalSendOff:O.trim()}}let d=f.match(P1);if(d&&!/^[x×]/i.test(f)){let[,x,C,H,O]=d,L=gr.test(O)||gr.test(f);return{kind:"interval",reps:1,distance:parseInt(x,10),activity:j0(C)||"swim",hasSendOff:!0,hasGoalTime:L,originalSendOff:H.trim()}}return/\+\s*\d+\s*(?:seconds rest|sec|$)/i.test(f)||/\+\d+/.test(f)&&/v?kick|flutter|dolphin/i.test(f)?{kind:"fixedRest",text:f}:/full recovery|^\d+\s*min rest|^\d+:\d+\s*rest/i.test(f)?{kind:"fixedRest",text:f}:f.match(k1)?{kind:"proseGoal",text:f,goalVariant:"fit",goalDistance:100}:f.match(M1)?{kind:"proseGoal",text:f,goalVariant:"not",goalDistance:100}:/^repeat\s+\d+/i.test(f)||/^\d+\s*sets?,/i.test(f)||/^set:/i.test(f)?{kind:"note",text:f}:/^total:/i.test(f)?{kind:"note",text:f}:{kind:"note",text:f}}function D1(i){let f=b1(i);if(/^workout\s+\d+/im.test(f))return f.split(/\f|\n(?=Workout\s+\d+)/i).map(_=>_.trim()).filter(Boolean);let h=f.split(/\f+/).flatMap(_=>_.split(/\n(?=Warm[-\s]?up)/i)).map(_=>_.trim()).filter(Boolean),d=[];for(let _ of h){if(!/^warm[-\s]?up/im.test(_)){d.length&&(d[d.length-1]+=`
${_}`);continue}d.push(_)}return d}function B1(i){let f=i.split(`
`).map(H=>H.trim()).filter(H=>H.length>0),d=f[0]?.match(/^Workout\s+(\S+)/i)?f[0]:null,_=d?f.slice(1):f,w=[],x=!1,C=null;for(let H of _){let O=F1(H);if(O.kind!=="blank"){if(O.kind==="extraStart"){x=!0,w.push({type:"extra",text:O.text,isExtra:!0}),C=null;continue}if(x){O.kind==="interval"?w.push({type:"interval",reps:O.reps,distance:O.distance,activity:O.activity,hasSendOff:O.hasSendOff,hasGoalTime:O.hasGoalTime,originalSendOff:O.originalSendOff,isExtra:!0}):w.push({type:"extra",text:O.text,isExtra:!0}),C=null;continue}if(O.kind==="interval"){C={type:"interval",reps:O.reps,distance:O.distance,activity:O.activity,hasSendOff:O.hasSendOff,hasGoalTime:O.hasGoalTime,originalSendOff:O.originalSendOff,activityLines:[]},w.push(C);continue}if(C&&O.kind==="note"&&!/^total:/i.test(O.text)&&/^[A-Z,[\]\s/]+$/i.test(O.text)&&O.text.length<80){C.activityLines.push(O.text);continue}C=null,O.kind==="warmup"?w.push({type:"warmup",text:O.text}):O.kind==="cooldown"?w.push({type:"cooldown",text:O.text}):O.kind==="fixedRest"?w.push({type:"fixedRest",text:O.text}):O.kind==="proseGoal"?w.push({type:"proseGoal",text:O.text,goalVariant:O.goalVariant,goalDistance:O.goalDistance}):w.push({type:"note",text:O.text})}}return{title:d,sections:w}}function ns(i){return D1(i).map(B1)}var G1=200;function K1(i){return Math.round(i/15)*15}function es(i){return i<=G1?$i:zi}function $1(i){if(!i)return null;let{baseMetric:f,offset:h,operator:d}=i;return{baseMetric:f,offset:h||0,operator:d}}function z1(i,f){let h=[...f.setDefinitions].sort((_,w)=>_.distance-w.distance),d=h.filter(_=>_.distance<=i).pop();return d||(d=h[0]),d.rest}function ts(i,f){let h=es(i),d=Gi(f,$1(h.paceConfig));return i/100*d}function rs(i,f){let h=es(i),d=ts(i,f),_=z1(i,h);return K1(d+_)}function Zi(i,f){return ts(i,f)}function X1(i){let f=Math.round(i),h=Math.floor(f/60),d=f%60;return`${h}:${d.toString().padStart(2,"0")}`}function Vi(i){let f=Math.ceil(i);if(f<60)return`:${f.toString().padStart(f<10?2:1,"0")}`;let h=Math.floor(f/60),d=f%60;return`${h}:${d.toString().padStart(2,"0")}`}function Y1(i){let f=i.reps>1?`${i.reps}x`:i.reps===1?"1x":"",h=i.activity||"swim",d=`${f}${i.distance} ${h}`;return i.hasSendOff&&i.sendOffSeconds!=null?d+=` @ ${X1(i.sendOffSeconds)}`:i.originalSendOff&&(d+=` @ ${i.originalSendOff}`),i.hasGoalTime&&i.goalSeconds!=null&&(/\(Goal/i.test(i.originalText||"")?d+=` (Goal < ${Vi(i.goalSeconds)})`:d+=` < ${Vi(i.goalSeconds)}`),i.activityLines&&i.activityLines.length?[d,...i.activityLines].join(`
`):d}function q1(i){let f=Vi(i.goalSeconds);return i.goalVariant==="not"?`Goal Time If You're Not: Under ${f}`:`Goal Time If You're Fit: Under ${f}`}function Z1(i,f){let h=i.sections.map(d=>{if(d.type==="interval"){let _={...d};return d.hasSendOff&&(_.sendOffSeconds=rs(d.distance,f)),d.hasGoalTime&&(_.goalSeconds=Zi(d.distance,f)),_}if(d.type==="proseGoal"){let _=d.goalDistance||100;return{...d,goalSeconds:Zi(_,f)}}return d});return{...i,sections:h}}function V1(i,f={}){let{includeExtras:h=!0}=f,d=[];i.title&&(d.push(i.title),d.push(""));for(let _ of i.sections)_.isExtra&&!h||(_.type==="interval"?d.push(Y1(_)):_.type==="proseGoal"?d.push(q1(_)):_.text&&d.push(_.text));return d.join(`
`)}function is(i,f,h={}){let d=$e(f);if(d===null)return"Error: Invalid CSS time format. Please use MM:SS (e.g., '1:20').";let _=Z1(i,d);return V1(_,h)}var os=["Monday","Tuesday","Wednesday","Thursday","Friday"],J1=[0,2,4],ss=/^(\d+)\s+(EN[123]|SP[12])$/i,Ji=/^REST$/i;function us(i){let f=i.match(ss);return f?{yards:parseInt(f[1],10),energySystem:f[2].toUpperCase()}:null}function Q1(i,f){let d=f.split(/\n(?:Swimming\s*:|Description:)/i,1)[0].split(`
`).map(L=>L.trim()).filter(Boolean),_=d.indexOf("Monday");if(_===-1||d[_+4]!=="Friday")return[];let w=d.indexOf("Swim 1",_);if(w===-1)return[];let x=[],C=[],H="swim1";for(let L=w+1;L<d.length;L+=1){let Y=d[L];if(Y==="Swim 2"){H="swim2";continue}(ss.test(Y)||Ji.test(Y))&&(H==="swim2"?C:x).push(Y)}let O=[];return x.forEach((L,Y)=>{if(Ji.test(L))return;let z=us(L);z&&O.push({week:i,day:os[Y],slot:1,yards:z.yards,energySystem:z.energySystem})}),C.forEach((L,Y)=>{if(Ji.test(L))return;let z=us(L);z&&O.push({week:i,day:os[J1[Y]],slot:2,yards:z.yards,energySystem:z.energySystem})}),O}function as(i){let f=i.split(/Week\s+(\d+)\s*:/i),h=[];for(let d=1;d<f.length;d+=2){let _=parseInt(f[d],10),w=f[d+1]||"";h.push(...Q1(_,w))}return h}function fs(i){return`Week ${i.week}, ${i.day} (Swim ${i.slot}) \u2014 ${i.yards} ${i.energySystem}`}var Qi=new Map,ji=new Map;function j1(i){if(Qi.has(i))return Qi.get(i);let f=hr(i);if(!f)return null;let h=ns(f.sourceText);return Qi.set(i,h),h}function ng(i){if(ji.has(i))return ji.get(i);let f=hr(i);if(!f)return null;let h=as(f.sourceText);return ji.set(i,h),h}function eg(i,f){if(i.swimsPerWeek){let h=Math.floor(f/i.swimsPerWeek)+1,d=f%i.swimsPerWeek+1;return`Week ${h}, Swim ${d}`}return null}function tg(i,f){let h=ng(i.id);return!h||h.length===0?`Error: No workouts found for plan "${i.id}".`:h.map(_=>{let w=fs(_),x=_t(_.yards,_.energySystem,f);return`${w}
${x}`}).join(`

`)}function no(){return Object.values(qi).map(({id:i,name:f})=>({id:i,name:f}))}function eo(i,f,h={}){let d=hr(i);if(!d)return`Error: Unknown preset plan "${i}".`;if($e(f)===null)return"Error: Invalid CSS time format. Please use MM:SS (e.g., '1:20').";if(d.kind==="macro")return tg(d,f);let _=j1(i);return!_||_.length===0?`Error: No workouts found for plan "${i}".`:_.map((x,C)=>{let H=eg(d,C),O=is(x,f,h);return H?`${H}
${O}`:O}).join(`

`)}function rg(i,f){return i.type===f.type&&i.length===f.length&&i.time===f.time}function ig(i){i.seconds*=2,mr.default.forEach(i.intervals,f=>{f.length*=2,f.time*=2})}function og(i){i.seconds*=2,mr.default.forEach(i.intervals,f=>{f.number*=2})}function ug(i){return i.intervals=i.intervals.reduce((f,h)=>{let d=f.length;return d===0?(f.push(h),f):(rg(f[d-1],h)?f[d-1].number+=h.number:f.push(h),f)},[]),i}function to(i,f={seconds:0,intervals:[]}){if(i<20)return f;let h=i-f.seconds,d=dr("minTime",h,D0);return d.repeat===!0?Y0(h,f):q0(h,f,d)}function ls(i){if(!i)throw new Error("Give me time!");let f=to(i);for(;f.seconds<i/2&&f.seconds>=20;)switch(mr.default.random(1,3)){case 1:ig(f);break;case 2:og(f);break;case 3:to(i,f);break}for(;i-f.seconds>=20;)to(i,f);return f=ug(f),f}var sg="<li><%- number %>x<%- length %> <%- type %> @ <%- formatTime(time) %></li>",ag=_r.default.template(sg);function cs(i){let f=Math.floor(i/60),h=i-f*60;return(0,_r.default)([f,h]).map(d=>d<10?"0"+d:d).join(":")}function ds(i,f){let h=document.createElement("pre");h.textContent=f,i.appendChild(h)}function ps(){let i=document.getElementById("workoutTypeSelect"),f=document.querySelector(".swim-generator--time-input"),h=document.getElementById("cssInputsContainer"),d=document.getElementById("presetInputsContainer"),_=document.getElementById("presetPlanSelect"),w=document.getElementById("swimGenerateBtn");function x(){_.innerHTML="",no().forEach(H=>{let O=document.createElement("option");O.value=H.id,O.textContent=H.name,_.appendChild(O)})}function C(){let H=i.value;f.style.display=H==="MIXED_UNDERWATERS"?"":"none",h.style.display=H!=="MIXED_UNDERWATERS"&&H!=="PRESET_PLAN"?"":"none",d.style.display=H==="PRESET_PLAN"?"":"none",H==="PRESET_PLAN"&&x()}i.addEventListener("change",C),C(),w.addEventListener("click",()=>{let H=i.value,O=document.getElementById("time"),L=document.getElementById("workout");if(L.innerHTML="",H==="MIXED_UNDERWATERS"){let Y=document.getElementById("timeInput").value*60,z=ls(Y);O.innerHTML="Total Time: "+cs(z.seconds);let mn=_r.default.map(z.intervals,_n=>ag({..._n,formatTime:cs})).join(" ");L.innerHTML=mn}else if(H==="PRESET_PLAN"){let Y=document.getElementById("presetCssInput").value,z=_.value,mn=document.getElementById("presetIncludeExtras").checked,_n=eo(z,Y,{includeExtras:mn});ds(L,_n),O.innerHTML=""}else{let Y=parseInt(document.getElementById("distanceInput").value,10),z=document.getElementById("cssInput").value,_n=i.options[i.selectedIndex].text.split(" ")[0];ds(L,_t(Y,H,z,_n)),O.innerHTML=""}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ps):ps();
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=app.js.map
