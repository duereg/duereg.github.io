var fh=Object.create;var Mu=Object.defineProperty;var lh=Object.getOwnPropertyDescriptor;var ch=Object.getOwnPropertyNames;var dh=Object.getPrototypeOf,ph=Object.prototype.hasOwnProperty;var hh=(i,f)=>()=>(f||i((f={exports:{}}).exports,f),f.exports);var gh=(i,f,h,d)=>{if(f&&typeof f=="object"||typeof f=="function")for(let _ of ch(f))!ph.call(i,_)&&_!==h&&Mu(i,_,{get:()=>f[_],enumerable:!(d=lh(f,_))||d.enumerable});return i};var Ke=(i,f,h)=>(h=i!=null?fh(dh(i)):{},gh(f||!i||!i.__esModule?Mu(h,"default",{value:i,enumerable:!0}):h,i));var xe=hh((Ge,pt)=>{(function(){var i,f="4.18.1",h=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",_="Expected a function",y="Invalid `variable` option passed into `_.template`",x="Invalid `imports` option passed into `_.template`",C="__lodash_hash_undefined__",T=500,S="__lodash_placeholder__",b=1,V=2,z=4,mn=1,_n=2,nn=1,zn=2,r0=4,Mn=8,He=16,Dn=32,Ee=64,Yn=128,$e=256,Or=512,gs=30,ms="...",_s=800,Os=16,i0=1,Us=2,vs=3,he=1/0,re=9007199254740991,ys=17976931348623157e292,Ot=NaN,Bn=4294967295,Ss=Bn-1,ws=Bn>>>1,xs=[["ary",Yn],["bind",nn],["bindKey",zn],["curry",Mn],["curryRight",He],["flip",Or],["partial",Dn],["partialRight",Ee],["rearg",$e]],Te="[object Arguments]",Ut="[object Array]",Hs="[object AsyncFunction]",ze="[object Boolean]",Ye="[object Date]",Es="[object DOMException]",vt="[object Error]",yt="[object Function]",o0="[object GeneratorFunction]",kn="[object Map]",Ve="[object Number]",Ts="[object Null]",Vn="[object Object]",u0="[object Promise]",Rs="[object Proxy]",Xe="[object RegExp]",Nn="[object Set]",qe="[object String]",St="[object Symbol]",Ws="[object Undefined]",Ze="[object WeakMap]",As="[object WeakSet]",Je="[object ArrayBuffer]",Re="[object DataView]",Ur="[object Float32Array]",vr="[object Float64Array]",yr="[object Int8Array]",Sr="[object Int16Array]",wr="[object Int32Array]",xr="[object Uint8Array]",Hr="[object Uint8ClampedArray]",Er="[object Uint16Array]",Tr="[object Uint32Array]",Cs=/\b__p \+= '';/g,ks=/\b(__p \+=) '' \+/g,Ns=/(__e\(.*?\)|\b__t\)) \+\n'';/g,s0=/&(?:amp|lt|gt|quot|#39);/g,a0=/[&<>"']/g,Is=RegExp(s0.source),bs=RegExp(a0.source),Ls=/<%-([\s\S]+?)%>/g,Fs=/<%([\s\S]+?)%>/g,f0=/<%=([\s\S]+?)%>/g,Ps=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ms=/^\w*$/,Ds=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rr=/[\\^$.*+?()[\]{}|]/g,Bs=RegExp(Rr.source),Wr=/^\s+/,Ks=/\s/,Gs=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,$s=/\{\n\/\* \[wrapped with (.+)\] \*/,zs=/,? & /,Ys=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,l0=/[()=,{}\[\]\/\s]/,Vs=/\\(\\)?/g,Xs=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,c0=/\w*$/,qs=/^[-+]0x[0-9a-f]+$/i,Zs=/^0b[01]+$/i,Js=/^\[object .+?Constructor\]$/,Qs=/^0o[0-7]+$/i,js=/^(?:0|[1-9]\d*)$/,na=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wt=/($^)/,ea=/['\n\r\u2028\u2029\\]/g,xt="\\ud800-\\udfff",ta="\\u0300-\\u036f",ra="\\ufe20-\\ufe2f",ia="\\u20d0-\\u20ff",d0=ta+ra+ia,p0="\\u2700-\\u27bf",h0="a-z\\xdf-\\xf6\\xf8-\\xff",oa="\\xac\\xb1\\xd7\\xf7",ua="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",sa="\\u2000-\\u206f",aa=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",g0="A-Z\\xc0-\\xd6\\xd8-\\xde",m0="\\ufe0e\\ufe0f",_0=oa+ua+sa+aa,Ar="['\u2019]",fa="["+xt+"]",O0="["+_0+"]",Ht="["+d0+"]",U0="\\d+",la="["+p0+"]",v0="["+h0+"]",y0="[^"+xt+_0+U0+p0+h0+g0+"]",Cr="\\ud83c[\\udffb-\\udfff]",ca="(?:"+Ht+"|"+Cr+")",S0="[^"+xt+"]",kr="(?:\\ud83c[\\udde6-\\uddff]){2}",Nr="[\\ud800-\\udbff][\\udc00-\\udfff]",We="["+g0+"]",w0="\\u200d",x0="(?:"+v0+"|"+y0+")",da="(?:"+We+"|"+y0+")",H0="(?:"+Ar+"(?:d|ll|m|re|s|t|ve))?",E0="(?:"+Ar+"(?:D|LL|M|RE|S|T|VE))?",T0=ca+"?",R0="["+m0+"]?",pa="(?:"+w0+"(?:"+[S0,kr,Nr].join("|")+")"+R0+T0+")*",ha="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ga="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",W0=R0+T0+pa,ma="(?:"+[la,kr,Nr].join("|")+")"+W0,_a="(?:"+[S0+Ht+"?",Ht,kr,Nr,fa].join("|")+")",Oa=RegExp(Ar,"g"),Ua=RegExp(Ht,"g"),Ir=RegExp(Cr+"(?="+Cr+")|"+_a+W0,"g"),va=RegExp([We+"?"+v0+"+"+H0+"(?="+[O0,We,"$"].join("|")+")",da+"+"+E0+"(?="+[O0,We+x0,"$"].join("|")+")",We+"?"+x0+"+"+H0,We+"+"+E0,ga,ha,U0,ma].join("|"),"g"),ya=RegExp("["+w0+xt+d0+m0+"]"),Sa=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,wa=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],xa=-1,X={};X[Ur]=X[vr]=X[yr]=X[Sr]=X[wr]=X[xr]=X[Hr]=X[Er]=X[Tr]=!0,X[Te]=X[Ut]=X[Je]=X[ze]=X[Re]=X[Ye]=X[vt]=X[yt]=X[kn]=X[Ve]=X[Vn]=X[Xe]=X[Nn]=X[qe]=X[Ze]=!1;var Y={};Y[Te]=Y[Ut]=Y[Je]=Y[Re]=Y[ze]=Y[Ye]=Y[Ur]=Y[vr]=Y[yr]=Y[Sr]=Y[wr]=Y[kn]=Y[Ve]=Y[Vn]=Y[Xe]=Y[Nn]=Y[qe]=Y[St]=Y[xr]=Y[Hr]=Y[Er]=Y[Tr]=!0,Y[vt]=Y[yt]=Y[Ze]=!1;var Ha={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ea={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ta={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ra={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Wa=parseFloat,Aa=parseInt,A0=typeof global=="object"&&global&&global.Object===Object&&global,Ca=typeof self=="object"&&self&&self.Object===Object&&self,rn=A0||Ca||Function("return this")(),br=typeof Ge=="object"&&Ge&&!Ge.nodeType&&Ge,ge=br&&typeof pt=="object"&&pt&&!pt.nodeType&&pt,C0=ge&&ge.exports===br,Lr=C0&&A0.process,Hn=(function(){try{var c=ge&&ge.require&&ge.require("util").types;return c||Lr&&Lr.binding&&Lr.binding("util")}catch{}})(),k0=Hn&&Hn.isArrayBuffer,N0=Hn&&Hn.isDate,I0=Hn&&Hn.isMap,b0=Hn&&Hn.isRegExp,L0=Hn&&Hn.isSet,F0=Hn&&Hn.isTypedArray;function On(c,m,g){switch(g.length){case 0:return c.call(m);case 1:return c.call(m,g[0]);case 2:return c.call(m,g[0],g[1]);case 3:return c.call(m,g[0],g[1],g[2])}return c.apply(m,g)}function ka(c,m,g,H){for(var k=-1,B=c==null?0:c.length;++k<B;){var en=c[k];m(H,en,g(en),c)}return H}function Un(c,m){for(var g=-1,H=c==null?0:c.length;++g<H&&m(c[g],g,c)!==!1;);return c}function Na(c,m){for(var g=c==null?0:c.length;g--&&m(c[g],g,c)!==!1;);return c}function P0(c,m){for(var g=-1,H=c==null?0:c.length;++g<H;)if(!m(c[g],g,c))return!1;return!0}function ie(c,m){for(var g=-1,H=c==null?0:c.length,k=0,B=[];++g<H;){var en=c[g];m(en,g,c)&&(B[k++]=en)}return B}function Et(c,m){var g=c==null?0:c.length;return!!g&&Ae(c,m,0)>-1}function Fr(c,m,g){for(var H=-1,k=c==null?0:c.length;++H<k;)if(g(m,c[H]))return!0;return!1}function q(c,m){for(var g=-1,H=c==null?0:c.length,k=Array(H);++g<H;)k[g]=m(c[g],g,c);return k}function oe(c,m){for(var g=-1,H=m.length,k=c.length;++g<H;)c[k+g]=m[g];return c}function Pr(c,m,g,H){var k=-1,B=c==null?0:c.length;for(H&&B&&(g=c[++k]);++k<B;)g=m(g,c[k],k,c);return g}function Ia(c,m,g,H){var k=c==null?0:c.length;for(H&&k&&(g=c[--k]);k--;)g=m(g,c[k],k,c);return g}function Mr(c,m){for(var g=-1,H=c==null?0:c.length;++g<H;)if(m(c[g],g,c))return!0;return!1}var ba=Dr("length");function La(c){return c.split("")}function Fa(c){return c.match(Ys)||[]}function M0(c,m,g){var H;return g(c,function(k,B,en){if(m(k,B,en))return H=B,!1}),H}function Tt(c,m,g,H){for(var k=c.length,B=g+(H?1:-1);H?B--:++B<k;)if(m(c[B],B,c))return B;return-1}function Ae(c,m,g){return m===m?qa(c,m,g):Tt(c,D0,g)}function Pa(c,m,g,H){for(var k=g-1,B=c.length;++k<B;)if(H(c[k],m))return k;return-1}function D0(c){return c!==c}function B0(c,m){var g=c==null?0:c.length;return g?Kr(c,m)/g:Ot}function Dr(c){return function(m){return m==null?i:m[c]}}function Br(c){return function(m){return c==null?i:c[m]}}function K0(c,m,g,H,k){return k(c,function(B,en,$){g=H?(H=!1,B):m(g,B,en,$)}),g}function Ma(c,m){var g=c.length;for(c.sort(m);g--;)c[g]=c[g].value;return c}function Kr(c,m){for(var g,H=-1,k=c.length;++H<k;){var B=m(c[H]);B!==i&&(g=g===i?B:g+B)}return g}function Gr(c,m){for(var g=-1,H=Array(c);++g<c;)H[g]=m(g);return H}function Da(c,m){return q(m,function(g){return[g,c[g]]})}function G0(c){return c&&c.slice(0,V0(c)+1).replace(Wr,"")}function vn(c){return function(m){return c(m)}}function $r(c,m){return q(m,function(g){return c[g]})}function Qe(c,m){return c.has(m)}function $0(c,m){for(var g=-1,H=c.length;++g<H&&Ae(m,c[g],0)>-1;);return g}function z0(c,m){for(var g=c.length;g--&&Ae(m,c[g],0)>-1;);return g}function Ba(c,m){for(var g=c.length,H=0;g--;)c[g]===m&&++H;return H}var Ka=Br(Ha),Ga=Br(Ea);function $a(c){return"\\"+Ra[c]}function za(c,m){return c==null?i:c[m]}function Ce(c){return ya.test(c)}function Ya(c){return Sa.test(c)}function Va(c){for(var m,g=[];!(m=c.next()).done;)g.push(m.value);return g}function zr(c){var m=-1,g=Array(c.size);return c.forEach(function(H,k){g[++m]=[k,H]}),g}function Y0(c,m){return function(g){return c(m(g))}}function ue(c,m){for(var g=-1,H=c.length,k=0,B=[];++g<H;){var en=c[g];(en===m||en===S)&&(c[g]=S,B[k++]=g)}return B}function Rt(c){var m=-1,g=Array(c.size);return c.forEach(function(H){g[++m]=H}),g}function Xa(c){var m=-1,g=Array(c.size);return c.forEach(function(H){g[++m]=[H,H]}),g}function qa(c,m,g){for(var H=g-1,k=c.length;++H<k;)if(c[H]===m)return H;return-1}function Za(c,m,g){for(var H=g+1;H--;)if(c[H]===m)return H;return H}function ke(c){return Ce(c)?Qa(c):ba(c)}function In(c){return Ce(c)?ja(c):La(c)}function V0(c){for(var m=c.length;m--&&Ks.test(c.charAt(m)););return m}var Ja=Br(Ta);function Qa(c){for(var m=Ir.lastIndex=0;Ir.test(c);)++m;return m}function ja(c){return c.match(Ir)||[]}function nf(c){return c.match(va)||[]}var ef=(function c(m){m=m==null?rn:se.defaults(rn.Object(),m,se.pick(rn,wa));var g=m.Array,H=m.Date,k=m.Error,B=m.Function,en=m.Math,$=m.Object,Yr=m.RegExp,tf=m.String,En=m.TypeError,Wt=g.prototype,rf=B.prototype,Ne=$.prototype,At=m["__core-js_shared__"],Ct=rf.toString,K=Ne.hasOwnProperty,of=0,X0=(function(){var n=/[^.]+$/.exec(At&&At.keys&&At.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),kt=Ne.toString,uf=Ct.call($),sf=rn._,af=Yr("^"+Ct.call(K).replace(Rr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Nt=C0?m.Buffer:i,ae=m.Symbol,It=m.Uint8Array,q0=Nt?Nt.allocUnsafe:i,bt=Y0($.getPrototypeOf,$),Z0=$.create,J0=Ne.propertyIsEnumerable,Lt=Wt.splice,Q0=ae?ae.isConcatSpreadable:i,je=ae?ae.iterator:i,me=ae?ae.toStringTag:i,Ft=(function(){try{var n=ye($,"defineProperty");return n({},"",{}),n}catch{}})(),ff=m.clearTimeout!==rn.clearTimeout&&m.clearTimeout,lf=H&&H.now!==rn.Date.now&&H.now,cf=m.setTimeout!==rn.setTimeout&&m.setTimeout,Pt=en.ceil,Mt=en.floor,Vr=$.getOwnPropertySymbols,df=Nt?Nt.isBuffer:i,j0=m.isFinite,pf=Wt.join,hf=Y0($.keys,$),tn=en.max,sn=en.min,gf=H.now,mf=m.parseInt,no=en.random,_f=Wt.reverse,Xr=ye(m,"DataView"),nt=ye(m,"Map"),qr=ye(m,"Promise"),Ie=ye(m,"Set"),et=ye(m,"WeakMap"),tt=ye($,"create"),Dt=et&&new et,be={},Of=Se(Xr),Uf=Se(nt),vf=Se(qr),yf=Se(Ie),Sf=Se(et),Bt=ae?ae.prototype:i,rt=Bt?Bt.valueOf:i,eo=Bt?Bt.toString:i;function u(n){if(J(n)&&!N(n)&&!(n instanceof M)){if(n instanceof Tn)return n;if(K.call(n,"__wrapped__"))return ru(n)}return new Tn(n)}var Le=(function(){function n(){}return function(e){if(!Z(e))return{};if(Z0)return Z0(e);n.prototype=e;var t=new n;return n.prototype=i,t}})();function Kt(){}function Tn(n,e){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=i}u.templateSettings={escape:Ls,evaluate:Fs,interpolate:f0,variable:"",imports:{_:u}},u.prototype=Kt.prototype,u.prototype.constructor=u,Tn.prototype=Le(Kt.prototype),Tn.prototype.constructor=Tn;function M(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Bn,this.__views__=[]}function wf(){var n=new M(this.__wrapped__);return n.__actions__=dn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=dn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=dn(this.__views__),n}function xf(){if(this.__filtered__){var n=new M(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Hf(){var n=this.__wrapped__.value(),e=this.__dir__,t=N(n),r=e<0,o=t?n.length:0,s=Fl(0,o,this.__views__),a=s.start,l=s.end,p=l-a,O=r?l:a-1,U=this.__iteratees__,v=U.length,w=0,E=sn(p,this.__takeCount__);if(!t||!r&&o==p&&E==p)return Eo(n,this.__actions__);var A=[];n:for(;p--&&w<E;){O+=e;for(var L=-1,R=n[O];++L<v;){var P=U[L],D=P.iteratee,wn=P.type,cn=D(R);if(wn==Us)R=cn;else if(!cn){if(wn==i0)continue n;break n}}A[w++]=R}return A}M.prototype=Le(Kt.prototype),M.prototype.constructor=M;function _e(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}function Ef(){this.__data__=tt?tt(null):{},this.size=0}function Tf(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}function Rf(n){var e=this.__data__;if(tt){var t=e[n];return t===C?i:t}return K.call(e,n)?e[n]:i}function Wf(n){var e=this.__data__;return tt?e[n]!==i:K.call(e,n)}function Af(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=tt&&e===i?C:e,this}_e.prototype.clear=Ef,_e.prototype.delete=Tf,_e.prototype.get=Rf,_e.prototype.has=Wf,_e.prototype.set=Af;function Xn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}function Cf(){this.__data__=[],this.size=0}function kf(n){var e=this.__data__,t=Gt(e,n);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():Lt.call(e,t,1),--this.size,!0}function Nf(n){var e=this.__data__,t=Gt(e,n);return t<0?i:e[t][1]}function If(n){return Gt(this.__data__,n)>-1}function bf(n,e){var t=this.__data__,r=Gt(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this}Xn.prototype.clear=Cf,Xn.prototype.delete=kf,Xn.prototype.get=Nf,Xn.prototype.has=If,Xn.prototype.set=bf;function qn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}function Lf(){this.size=0,this.__data__={hash:new _e,map:new(nt||Xn),string:new _e}}function Ff(n){var e=er(this,n).delete(n);return this.size-=e?1:0,e}function Pf(n){return er(this,n).get(n)}function Mf(n){return er(this,n).has(n)}function Df(n,e){var t=er(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this}qn.prototype.clear=Lf,qn.prototype.delete=Ff,qn.prototype.get=Pf,qn.prototype.has=Mf,qn.prototype.set=Df;function Oe(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new qn;++e<t;)this.add(n[e])}function Bf(n){return this.__data__.set(n,C),this}function Kf(n){return this.__data__.has(n)}Oe.prototype.add=Oe.prototype.push=Bf,Oe.prototype.has=Kf;function bn(n){var e=this.__data__=new Xn(n);this.size=e.size}function Gf(){this.__data__=new Xn,this.size=0}function $f(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function zf(n){return this.__data__.get(n)}function Yf(n){return this.__data__.has(n)}function Vf(n,e){var t=this.__data__;if(t instanceof Xn){var r=t.__data__;if(!nt||r.length<h-1)return r.push([n,e]),this.size=++t.size,this;t=this.__data__=new qn(r)}return t.set(n,e),this.size=t.size,this}bn.prototype.clear=Gf,bn.prototype.delete=$f,bn.prototype.get=zf,bn.prototype.has=Yf,bn.prototype.set=Vf;function to(n,e){var t=N(n),r=!t&&we(n),o=!t&&!r&&pe(n),s=!t&&!r&&!o&&De(n),a=t||r||o||s,l=a?Gr(n.length,tf):[],p=l.length;for(var O in n)(e||K.call(n,O))&&!(a&&(O=="length"||o&&(O=="offset"||O=="parent")||s&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||Qn(O,p)))&&l.push(O);return l}function ro(n){var e=n.length;return e?n[ui(0,e-1)]:i}function Xf(n,e){return tr(dn(n),Ue(e,0,n.length))}function qf(n){return tr(dn(n))}function Zr(n,e,t){(t!==i&&!Fn(n[e],t)||t===i&&!(e in n))&&Kn(n,e,t)}function it(n,e,t){var r=n[e];(!(K.call(n,e)&&Fn(r,t))||t===i&&!(e in n))&&Kn(n,e,t)}function Gt(n,e){for(var t=n.length;t--;)if(Fn(n[t][0],e))return t;return-1}function Zf(n,e,t,r){return fe(n,function(o,s,a){e(r,o,t(o),a)}),r}function io(n,e){return n&&$n(e,on(e),n)}function Jf(n,e){return n&&$n(e,hn(e),n)}function Kn(n,e,t){e=="__proto__"&&Ft?Ft(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}function Jr(n,e){for(var t=-1,r=e.length,o=g(r),s=n==null;++t<r;)o[t]=s?i:ki(n,e[t]);return o}function Ue(n,e,t){return n===n&&(t!==i&&(n=n<=t?n:t),e!==i&&(n=n>=e?n:e)),n}function Rn(n,e,t,r,o,s){var a,l=e&b,p=e&V,O=e&z;if(t&&(a=o?t(n,r,o,s):t(n)),a!==i)return a;if(!Z(n))return n;var U=N(n);if(U){if(a=Ml(n),!l)return dn(n,a)}else{var v=an(n),w=v==yt||v==o0;if(pe(n))return Wo(n,l);if(v==Vn||v==Te||w&&!o){if(a=p||w?{}:Xo(n),!l)return p?Rl(n,Jf(a,n)):Tl(n,io(a,n))}else{if(!Y[v])return o?n:{};a=Dl(n,v,l)}}s||(s=new bn);var E=s.get(n);if(E)return E;s.set(n,a),wu(n)?n.forEach(function(R){a.add(Rn(R,e,t,R,n,s))}):yu(n)&&n.forEach(function(R,P){a.set(P,Rn(R,e,t,P,n,s))});var A=O?p?_i:mi:p?hn:on,L=U?i:A(n);return Un(L||n,function(R,P){L&&(P=R,R=n[P]),it(a,P,Rn(R,e,t,P,n,s))}),a}function Qf(n){var e=on(n);return function(t){return oo(t,n,e)}}function oo(n,e,t){var r=t.length;if(n==null)return!r;for(n=$(n);r--;){var o=t[r],s=e[o],a=n[o];if(a===i&&!(o in n)||!s(a))return!1}return!0}function uo(n,e,t){if(typeof n!="function")throw new En(_);return ct(function(){n.apply(i,t)},e)}function ot(n,e,t,r){var o=-1,s=Et,a=!0,l=n.length,p=[],O=e.length;if(!l)return p;t&&(e=q(e,vn(t))),r?(s=Fr,a=!1):e.length>=h&&(s=Qe,a=!1,e=new Oe(e));n:for(;++o<l;){var U=n[o],v=t==null?U:t(U);if(U=r||U!==0?U:0,a&&v===v){for(var w=O;w--;)if(e[w]===v)continue n;p.push(U)}else s(e,v,r)||p.push(U)}return p}var fe=Io(Gn),so=Io(jr,!0);function jf(n,e){var t=!0;return fe(n,function(r,o,s){return t=!!e(r,o,s),t}),t}function $t(n,e,t){for(var r=-1,o=n.length;++r<o;){var s=n[r],a=e(s);if(a!=null&&(l===i?a===a&&!Sn(a):t(a,l)))var l=a,p=s}return p}function nl(n,e,t,r){var o=n.length;for(t=I(t),t<0&&(t=-t>o?0:o+t),r=r===i||r>o?o:I(r),r<0&&(r+=o),r=t>r?0:Hu(r);t<r;)n[t++]=e;return n}function ao(n,e){var t=[];return fe(n,function(r,o,s){e(r,o,s)&&t.push(r)}),t}function un(n,e,t,r,o){var s=-1,a=n.length;for(t||(t=Kl),o||(o=[]);++s<a;){var l=n[s];e>0&&t(l)?e>1?un(l,e-1,t,r,o):oe(o,l):r||(o[o.length]=l)}return o}var Qr=bo(),fo=bo(!0);function Gn(n,e){return n&&Qr(n,e,on)}function jr(n,e){return n&&fo(n,e,on)}function zt(n,e){return ie(e,function(t){return jn(n[t])})}function ve(n,e){e=ce(e,n);for(var t=0,r=e.length;n!=null&&t<r;)n=n[Ln(e[t++])];return t&&t==r?n:i}function lo(n,e,t){var r=e(n);return N(n)?r:oe(r,t(n))}function fn(n){return n==null?n===i?Ws:Ts:me&&me in $(n)?Ll(n):ql(n)}function ni(n,e){return n>e}function el(n,e){return n!=null&&K.call(n,e)}function tl(n,e){return n!=null&&e in $(n)}function rl(n,e,t){return n>=sn(e,t)&&n<tn(e,t)}function ei(n,e,t){for(var r=t?Fr:Et,o=n[0].length,s=n.length,a=s,l=g(s),p=1/0,O=[];a--;){var U=n[a];a&&e&&(U=q(U,vn(e))),p=sn(U.length,p),l[a]=!t&&(e||o>=120&&U.length>=120)?new Oe(a&&U):i}U=n[0];var v=-1,w=l[0];n:for(;++v<o&&O.length<p;){var E=U[v],A=e?e(E):E;if(E=t||E!==0?E:0,!(w?Qe(w,A):r(O,A,t))){for(a=s;--a;){var L=l[a];if(!(L?Qe(L,A):r(n[a],A,t)))continue n}w&&w.push(A),O.push(E)}}return O}function il(n,e,t,r){return Gn(n,function(o,s,a){e(r,t(o),s,a)}),r}function ut(n,e,t){e=ce(e,n),n=Qo(n,e);var r=n==null?n:n[Ln(An(e))];return r==null?i:On(r,n,t)}function co(n){return J(n)&&fn(n)==Te}function ol(n){return J(n)&&fn(n)==Je}function ul(n){return J(n)&&fn(n)==Ye}function st(n,e,t,r,o){return n===e?!0:n==null||e==null||!J(n)&&!J(e)?n!==n&&e!==e:sl(n,e,t,r,st,o)}function sl(n,e,t,r,o,s){var a=N(n),l=N(e),p=a?Ut:an(n),O=l?Ut:an(e);p=p==Te?Vn:p,O=O==Te?Vn:O;var U=p==Vn,v=O==Vn,w=p==O;if(w&&pe(n)){if(!pe(e))return!1;a=!0,U=!1}if(w&&!U)return s||(s=new bn),a||De(n)?zo(n,e,t,r,o,s):Il(n,e,p,t,r,o,s);if(!(t&mn)){var E=U&&K.call(n,"__wrapped__"),A=v&&K.call(e,"__wrapped__");if(E||A){var L=E?n.value():n,R=A?e.value():e;return s||(s=new bn),o(L,R,t,r,s)}}return w?(s||(s=new bn),bl(n,e,t,r,o,s)):!1}function al(n){return J(n)&&an(n)==kn}function ti(n,e,t,r){var o=t.length,s=o,a=!r;if(n==null)return!s;for(n=$(n);o--;){var l=t[o];if(a&&l[2]?l[1]!==n[l[0]]:!(l[0]in n))return!1}for(;++o<s;){l=t[o];var p=l[0],O=n[p],U=l[1];if(a&&l[2]){if(O===i&&!(p in n))return!1}else{var v=new bn;if(r)var w=r(O,U,p,n,e,v);if(!(w===i?st(U,O,mn|_n,r,v):w))return!1}}return!0}function po(n){if(!Z(n)||$l(n))return!1;var e=jn(n)?af:Js;return e.test(Se(n))}function fl(n){return J(n)&&fn(n)==Xe}function ll(n){return J(n)&&an(n)==Nn}function cl(n){return J(n)&&ar(n.length)&&!!X[fn(n)]}function ho(n){return typeof n=="function"?n:n==null?gn:typeof n=="object"?N(n)?_o(n[0],n[1]):mo(n):Fu(n)}function ri(n){if(!lt(n))return hf(n);var e=[];for(var t in $(n))K.call(n,t)&&t!="constructor"&&e.push(t);return e}function dl(n){if(!Z(n))return Xl(n);var e=lt(n),t=[];for(var r in n)r=="constructor"&&(e||!K.call(n,r))||t.push(r);return t}function ii(n,e){return n<e}function go(n,e){var t=-1,r=pn(n)?g(n.length):[];return fe(n,function(o,s,a){r[++t]=e(o,s,a)}),r}function mo(n){var e=Ui(n);return e.length==1&&e[0][2]?Zo(e[0][0],e[0][1]):function(t){return t===n||ti(t,n,e)}}function _o(n,e){return yi(n)&&qo(e)?Zo(Ln(n),e):function(t){var r=ki(t,n);return r===i&&r===e?Ni(t,n):st(e,r,mn|_n)}}function Yt(n,e,t,r,o){n!==e&&Qr(e,function(s,a){if(o||(o=new bn),Z(s))pl(n,e,a,t,Yt,r,o);else{var l=r?r(wi(n,a),s,a+"",n,e,o):i;l===i&&(l=s),Zr(n,a,l)}},hn)}function pl(n,e,t,r,o,s,a){var l=wi(n,t),p=wi(e,t),O=a.get(p);if(O){Zr(n,t,O);return}var U=s?s(l,p,t+"",n,e,a):i,v=U===i;if(v){var w=N(p),E=!w&&pe(p),A=!w&&!E&&De(p);U=p,w||E||A?N(l)?U=l:Q(l)?U=dn(l):E?(v=!1,U=Wo(p,!0)):A?(v=!1,U=Ao(p,!0)):U=[]:dt(p)||we(p)?(U=l,we(l)?U=Eu(l):(!Z(l)||jn(l))&&(U=Xo(p))):v=!1}v&&(a.set(p,U),o(U,p,r,s,a),a.delete(p)),Zr(n,t,U)}function Oo(n,e){var t=n.length;if(t)return e+=e<0?t:0,Qn(e,t)?n[e]:i}function Uo(n,e,t){e.length?e=q(e,function(s){return N(s)?function(a){return ve(a,s.length===1?s[0]:s)}:s}):e=[gn];var r=-1;e=q(e,vn(W()));var o=go(n,function(s,a,l){var p=q(e,function(O){return O(s)});return{criteria:p,index:++r,value:s}});return Ma(o,function(s,a){return El(s,a,t)})}function hl(n,e){return vo(n,e,function(t,r){return Ni(n,r)})}function vo(n,e,t){for(var r=-1,o=e.length,s={};++r<o;){var a=e[r],l=ve(n,a);t(l,a)&&at(s,ce(a,n),l)}return s}function gl(n){return function(e){return ve(e,n)}}function oi(n,e,t,r){var o=r?Pa:Ae,s=-1,a=e.length,l=n;for(n===e&&(e=dn(e)),t&&(l=q(n,vn(t)));++s<a;)for(var p=0,O=e[s],U=t?t(O):O;(p=o(l,U,p,r))>-1;)l!==n&&Lt.call(l,p,1),Lt.call(n,p,1);return n}function yo(n,e){for(var t=n?e.length:0,r=t-1;t--;){var o=e[t];if(t==r||o!==s){var s=o;Qn(o)?Lt.call(n,o,1):fi(n,o)}}return n}function ui(n,e){return n+Mt(no()*(e-n+1))}function ml(n,e,t,r){for(var o=-1,s=tn(Pt((e-n)/(t||1)),0),a=g(s);s--;)a[r?s:++o]=n,n+=t;return a}function si(n,e){var t="";if(!n||e<1||e>re)return t;do e%2&&(t+=n),e=Mt(e/2),e&&(n+=n);while(e);return t}function F(n,e){return xi(Jo(n,e,gn),n+"")}function _l(n){return ro(Be(n))}function Ol(n,e){var t=Be(n);return tr(t,Ue(e,0,t.length))}function at(n,e,t,r){if(!Z(n))return n;e=ce(e,n);for(var o=-1,s=e.length,a=s-1,l=n;l!=null&&++o<s;){var p=Ln(e[o]),O=t;if(p==="__proto__"||p==="constructor"||p==="prototype")return n;if(o!=a){var U=l[p];O=r?r(U,p,l):i,O===i&&(O=Z(U)?U:Qn(e[o+1])?[]:{})}it(l,p,O),l=l[p]}return n}var So=Dt?function(n,e){return Dt.set(n,e),n}:gn,Ul=Ft?function(n,e){return Ft(n,"toString",{configurable:!0,enumerable:!1,value:bi(e),writable:!0})}:gn;function vl(n){return tr(Be(n))}function Wn(n,e,t){var r=-1,o=n.length;e<0&&(e=-e>o?0:o+e),t=t>o?o:t,t<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var s=g(o);++r<o;)s[r]=n[r+e];return s}function yl(n,e){var t;return fe(n,function(r,o,s){return t=e(r,o,s),!t}),!!t}function Vt(n,e,t){var r=0,o=n==null?r:n.length;if(typeof e=="number"&&e===e&&o<=ws){for(;r<o;){var s=r+o>>>1,a=n[s];a!==null&&!Sn(a)&&(t?a<=e:a<e)?r=s+1:o=s}return o}return ai(n,e,gn,t)}function ai(n,e,t,r){var o=0,s=n==null?0:n.length;if(s===0)return 0;e=t(e);for(var a=e!==e,l=e===null,p=Sn(e),O=e===i;o<s;){var U=Mt((o+s)/2),v=t(n[U]),w=v!==i,E=v===null,A=v===v,L=Sn(v);if(a)var R=r||A;else O?R=A&&(r||w):l?R=A&&w&&(r||!E):p?R=A&&w&&!E&&(r||!L):E||L?R=!1:R=r?v<=e:v<e;R?o=U+1:s=U}return sn(s,Ss)}function wo(n,e){for(var t=-1,r=n.length,o=0,s=[];++t<r;){var a=n[t],l=e?e(a):a;if(!t||!Fn(l,p)){var p=l;s[o++]=a===0?0:a}}return s}function xo(n){return typeof n=="number"?n:Sn(n)?Ot:+n}function yn(n){if(typeof n=="string")return n;if(N(n))return q(n,yn)+"";if(Sn(n))return eo?eo.call(n):"";var e=n+"";return e=="0"&&1/n==-he?"-0":e}function le(n,e,t){var r=-1,o=Et,s=n.length,a=!0,l=[],p=l;if(t)a=!1,o=Fr;else if(s>=h){var O=e?null:kl(n);if(O)return Rt(O);a=!1,o=Qe,p=new Oe}else p=e?[]:l;n:for(;++r<s;){var U=n[r],v=e?e(U):U;if(U=t||U!==0?U:0,a&&v===v){for(var w=p.length;w--;)if(p[w]===v)continue n;e&&p.push(v),l.push(U)}else o(p,v,t)||(p!==l&&p.push(v),l.push(U))}return l}function fi(n,e){e=ce(e,n);var t=-1,r=e.length;if(!r)return!0;for(;++t<r;){var o=Ln(e[t]);if(o==="__proto__"&&!K.call(n,"__proto__")||(o==="constructor"||o==="prototype")&&t<r-1)return!1}var s=Qo(n,e);return s==null||delete s[Ln(An(e))]}function Ho(n,e,t,r){return at(n,e,t(ve(n,e)),r)}function Xt(n,e,t,r){for(var o=n.length,s=r?o:-1;(r?s--:++s<o)&&e(n[s],s,n););return t?Wn(n,r?0:s,r?s+1:o):Wn(n,r?s+1:0,r?o:s)}function Eo(n,e){var t=n;return t instanceof M&&(t=t.value()),Pr(e,function(r,o){return o.func.apply(o.thisArg,oe([r],o.args))},t)}function li(n,e,t){var r=n.length;if(r<2)return r?le(n[0]):[];for(var o=-1,s=g(r);++o<r;)for(var a=n[o],l=-1;++l<r;)l!=o&&(s[o]=ot(s[o]||a,n[l],e,t));return le(un(s,1),e,t)}function To(n,e,t){for(var r=-1,o=n.length,s=e.length,a={};++r<o;){var l=r<s?e[r]:i;t(a,n[r],l)}return a}function ci(n){return Q(n)?n:[]}function di(n){return typeof n=="function"?n:gn}function ce(n,e){return N(n)?n:yi(n,e)?[n]:tu(G(n))}var Sl=F;function de(n,e,t){var r=n.length;return t=t===i?r:t,!e&&t>=r?n:Wn(n,e,t)}var Ro=ff||function(n){return rn.clearTimeout(n)};function Wo(n,e){if(e)return n.slice();var t=n.length,r=q0?q0(t):new n.constructor(t);return n.copy(r),r}function pi(n){var e=new n.constructor(n.byteLength);return new It(e).set(new It(n)),e}function wl(n,e){var t=e?pi(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}function xl(n){var e=new n.constructor(n.source,c0.exec(n));return e.lastIndex=n.lastIndex,e}function Hl(n){return rt?$(rt.call(n)):{}}function Ao(n,e){var t=e?pi(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}function Co(n,e){if(n!==e){var t=n!==i,r=n===null,o=n===n,s=Sn(n),a=e!==i,l=e===null,p=e===e,O=Sn(e);if(!l&&!O&&!s&&n>e||s&&a&&p&&!l&&!O||r&&a&&p||!t&&p||!o)return 1;if(!r&&!s&&!O&&n<e||O&&t&&o&&!r&&!s||l&&t&&o||!a&&o||!p)return-1}return 0}function El(n,e,t){for(var r=-1,o=n.criteria,s=e.criteria,a=o.length,l=t.length;++r<a;){var p=Co(o[r],s[r]);if(p){if(r>=l)return p;var O=t[r];return p*(O=="desc"?-1:1)}}return n.index-e.index}function ko(n,e,t,r){for(var o=-1,s=n.length,a=t.length,l=-1,p=e.length,O=tn(s-a,0),U=g(p+O),v=!r;++l<p;)U[l]=e[l];for(;++o<a;)(v||o<s)&&(U[t[o]]=n[o]);for(;O--;)U[l++]=n[o++];return U}function No(n,e,t,r){for(var o=-1,s=n.length,a=-1,l=t.length,p=-1,O=e.length,U=tn(s-l,0),v=g(U+O),w=!r;++o<U;)v[o]=n[o];for(var E=o;++p<O;)v[E+p]=e[p];for(;++a<l;)(w||o<s)&&(v[E+t[a]]=n[o++]);return v}function dn(n,e){var t=-1,r=n.length;for(e||(e=g(r));++t<r;)e[t]=n[t];return e}function $n(n,e,t,r){var o=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var l=e[s],p=r?r(t[l],n[l],l,t,n):i;p===i&&(p=n[l]),o?Kn(t,l,p):it(t,l,p)}return t}function Tl(n,e){return $n(n,vi(n),e)}function Rl(n,e){return $n(n,Yo(n),e)}function qt(n,e){return function(t,r){var o=N(t)?ka:Zf,s=e?e():{};return o(t,n,W(r,2),s)}}function Fe(n){return F(function(e,t){var r=-1,o=t.length,s=o>1?t[o-1]:i,a=o>2?t[2]:i;for(s=n.length>3&&typeof s=="function"?(o--,s):i,a&&ln(t[0],t[1],a)&&(s=o<3?i:s,o=1),e=$(e);++r<o;){var l=t[r];l&&n(e,l,r,s)}return e})}function Io(n,e){return function(t,r){if(t==null)return t;if(!pn(t))return n(t,r);for(var o=t.length,s=e?o:-1,a=$(t);(e?s--:++s<o)&&r(a[s],s,a)!==!1;);return t}}function bo(n){return function(e,t,r){for(var o=-1,s=$(e),a=r(e),l=a.length;l--;){var p=a[n?l:++o];if(t(s[p],p,s)===!1)break}return e}}function Wl(n,e,t){var r=e&nn,o=ft(n);function s(){var a=this&&this!==rn&&this instanceof s?o:n;return a.apply(r?t:this,arguments)}return s}function Lo(n){return function(e){e=G(e);var t=Ce(e)?In(e):i,r=t?t[0]:e.charAt(0),o=t?de(t,1).join(""):e.slice(1);return r[n]()+o}}function Pe(n){return function(e){return Pr(bu(Iu(e).replace(Oa,"")),n,"")}}function ft(n){return function(){var e=arguments;switch(e.length){case 0:return new n;case 1:return new n(e[0]);case 2:return new n(e[0],e[1]);case 3:return new n(e[0],e[1],e[2]);case 4:return new n(e[0],e[1],e[2],e[3]);case 5:return new n(e[0],e[1],e[2],e[3],e[4]);case 6:return new n(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new n(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var t=Le(n.prototype),r=n.apply(t,e);return Z(r)?r:t}}function Al(n,e,t){var r=ft(n);function o(){for(var s=arguments.length,a=g(s),l=s,p=Me(o);l--;)a[l]=arguments[l];var O=s<3&&a[0]!==p&&a[s-1]!==p?[]:ue(a,p);if(s-=O.length,s<t)return Bo(n,e,Zt,o.placeholder,i,a,O,i,i,t-s);var U=this&&this!==rn&&this instanceof o?r:n;return On(U,this,a)}return o}function Fo(n){return function(e,t,r){var o=$(e);if(!pn(e)){var s=W(t,3);e=on(e),t=function(l){return s(o[l],l,o)}}var a=n(e,t,r);return a>-1?o[s?e[a]:a]:i}}function Po(n){return Jn(function(e){var t=e.length,r=t,o=Tn.prototype.thru;for(n&&e.reverse();r--;){var s=e[r];if(typeof s!="function")throw new En(_);if(o&&!a&&nr(s)=="wrapper")var a=new Tn([],!0)}for(r=a?r:t;++r<t;){s=e[r];var l=nr(s),p=l=="wrapper"?Oi(s):i;p&&Si(p[0])&&p[1]==(Yn|Mn|Dn|$e)&&!p[4].length&&p[9]==1?a=a[nr(p[0])].apply(a,p[3]):a=s.length==1&&Si(s)?a[l]():a.thru(s)}return function(){var O=arguments,U=O[0];if(a&&O.length==1&&N(U))return a.plant(U).value();for(var v=0,w=t?e[v].apply(this,O):U;++v<t;)w=e[v].call(this,w);return w}})}function Zt(n,e,t,r,o,s,a,l,p,O){var U=e&Yn,v=e&nn,w=e&zn,E=e&(Mn|He),A=e&Or,L=w?i:ft(n);function R(){for(var P=arguments.length,D=g(P),wn=P;wn--;)D[wn]=arguments[wn];if(E)var cn=Me(R),xn=Ba(D,cn);if(r&&(D=ko(D,r,o,E)),s&&(D=No(D,s,a,E)),P-=xn,E&&P<O){var j=ue(D,cn);return Bo(n,e,Zt,R.placeholder,t,D,j,l,p,O-P)}var Pn=v?t:this,ee=w?Pn[n]:n;return P=D.length,l?D=Zl(D,l):A&&P>1&&D.reverse(),U&&p<P&&(D.length=p),this&&this!==rn&&this instanceof R&&(ee=L||ft(ee)),ee.apply(Pn,D)}return R}function Mo(n,e){return function(t,r){return il(t,n,e(r),{})}}function Jt(n,e){return function(t,r){var o;if(t===i&&r===i)return e;if(t!==i&&(o=t),r!==i){if(o===i)return r;typeof t=="string"||typeof r=="string"?(t=yn(t),r=yn(r)):(t=xo(t),r=xo(r)),o=n(t,r)}return o}}function hi(n){return Jn(function(e){return e=q(e,vn(W())),F(function(t){var r=this;return n(e,function(o){return On(o,r,t)})})})}function Qt(n,e){e=e===i?" ":yn(e);var t=e.length;if(t<2)return t?si(e,n):e;var r=si(e,Pt(n/ke(e)));return Ce(e)?de(In(r),0,n).join(""):r.slice(0,n)}function Cl(n,e,t,r){var o=e&nn,s=ft(n);function a(){for(var l=-1,p=arguments.length,O=-1,U=r.length,v=g(U+p),w=this&&this!==rn&&this instanceof a?s:n;++O<U;)v[O]=r[O];for(;p--;)v[O++]=arguments[++l];return On(w,o?t:this,v)}return a}function Do(n){return function(e,t,r){return r&&typeof r!="number"&&ln(e,t,r)&&(t=r=i),e=ne(e),t===i?(t=e,e=0):t=ne(t),r=r===i?e<t?1:-1:ne(r),ml(e,t,r,n)}}function jt(n){return function(e,t){return typeof e=="string"&&typeof t=="string"||(e=Cn(e),t=Cn(t)),n(e,t)}}function Bo(n,e,t,r,o,s,a,l,p,O){var U=e&Mn,v=U?a:i,w=U?i:a,E=U?s:i,A=U?i:s;e|=U?Dn:Ee,e&=~(U?Ee:Dn),e&r0||(e&=~(nn|zn));var L=[n,e,o,E,v,A,w,l,p,O],R=t.apply(i,L);return Si(n)&&jo(R,L),R.placeholder=r,nu(R,n,e)}function gi(n){var e=en[n];return function(t,r){if(t=Cn(t),r=r==null?0:sn(I(r),292),r&&j0(t)){var o=(G(t)+"e").split("e"),s=e(o[0]+"e"+(+o[1]+r));return o=(G(s)+"e").split("e"),+(o[0]+"e"+(+o[1]-r))}return e(t)}}var kl=Ie&&1/Rt(new Ie([,-0]))[1]==he?function(n){return new Ie(n)}:Pi;function Ko(n){return function(e){var t=an(e);return t==kn?zr(e):t==Nn?Xa(e):Da(e,n(e))}}function Zn(n,e,t,r,o,s,a,l){var p=e&zn;if(!p&&typeof n!="function")throw new En(_);var O=r?r.length:0;if(O||(e&=~(Dn|Ee),r=o=i),a=a===i?a:tn(I(a),0),l=l===i?l:I(l),O-=o?o.length:0,e&Ee){var U=r,v=o;r=o=i}var w=p?i:Oi(n),E=[n,e,t,r,o,U,v,s,a,l];if(w&&Vl(E,w),n=E[0],e=E[1],t=E[2],r=E[3],o=E[4],l=E[9]=E[9]===i?p?0:n.length:tn(E[9]-O,0),!l&&e&(Mn|He)&&(e&=~(Mn|He)),!e||e==nn)var A=Wl(n,e,t);else e==Mn||e==He?A=Al(n,e,l):(e==Dn||e==(nn|Dn))&&!o.length?A=Cl(n,e,t,r):A=Zt.apply(i,E);var L=w?So:jo;return nu(L(A,E),n,e)}function Go(n,e,t,r){return n===i||Fn(n,Ne[t])&&!K.call(r,t)?e:n}function $o(n,e,t,r,o,s){return Z(n)&&Z(e)&&(s.set(e,n),Yt(n,e,i,$o,s),s.delete(e)),n}function Nl(n){return dt(n)?i:n}function zo(n,e,t,r,o,s){var a=t&mn,l=n.length,p=e.length;if(l!=p&&!(a&&p>l))return!1;var O=s.get(n),U=s.get(e);if(O&&U)return O==e&&U==n;var v=-1,w=!0,E=t&_n?new Oe:i;for(s.set(n,e),s.set(e,n);++v<l;){var A=n[v],L=e[v];if(r)var R=a?r(L,A,v,e,n,s):r(A,L,v,n,e,s);if(R!==i){if(R)continue;w=!1;break}if(E){if(!Mr(e,function(P,D){if(!Qe(E,D)&&(A===P||o(A,P,t,r,s)))return E.push(D)})){w=!1;break}}else if(!(A===L||o(A,L,t,r,s))){w=!1;break}}return s.delete(n),s.delete(e),w}function Il(n,e,t,r,o,s,a){switch(t){case Re:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case Je:return!(n.byteLength!=e.byteLength||!s(new It(n),new It(e)));case ze:case Ye:case Ve:return Fn(+n,+e);case vt:return n.name==e.name&&n.message==e.message;case Xe:case qe:return n==e+"";case kn:var l=zr;case Nn:var p=r&mn;if(l||(l=Rt),n.size!=e.size&&!p)return!1;var O=a.get(n);if(O)return O==e;r|=_n,a.set(n,e);var U=zo(l(n),l(e),r,o,s,a);return a.delete(n),U;case St:if(rt)return rt.call(n)==rt.call(e)}return!1}function bl(n,e,t,r,o,s){var a=t&mn,l=mi(n),p=l.length,O=mi(e),U=O.length;if(p!=U&&!a)return!1;for(var v=p;v--;){var w=l[v];if(!(a?w in e:K.call(e,w)))return!1}var E=s.get(n),A=s.get(e);if(E&&A)return E==e&&A==n;var L=!0;s.set(n,e),s.set(e,n);for(var R=a;++v<p;){w=l[v];var P=n[w],D=e[w];if(r)var wn=a?r(D,P,w,e,n,s):r(P,D,w,n,e,s);if(!(wn===i?P===D||o(P,D,t,r,s):wn)){L=!1;break}R||(R=w=="constructor")}if(L&&!R){var cn=n.constructor,xn=e.constructor;cn!=xn&&"constructor"in n&&"constructor"in e&&!(typeof cn=="function"&&cn instanceof cn&&typeof xn=="function"&&xn instanceof xn)&&(L=!1)}return s.delete(n),s.delete(e),L}function Jn(n){return xi(Jo(n,i,uu),n+"")}function mi(n){return lo(n,on,vi)}function _i(n){return lo(n,hn,Yo)}var Oi=Dt?function(n){return Dt.get(n)}:Pi;function nr(n){for(var e=n.name+"",t=be[e],r=K.call(be,e)?t.length:0;r--;){var o=t[r],s=o.func;if(s==null||s==n)return o.name}return e}function Me(n){var e=K.call(u,"placeholder")?u:n;return e.placeholder}function W(){var n=u.iteratee||Li;return n=n===Li?ho:n,arguments.length?n(arguments[0],arguments[1]):n}function er(n,e){var t=n.__data__;return Gl(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Ui(n){for(var e=on(n),t=e.length;t--;){var r=e[t],o=n[r];e[t]=[r,o,qo(o)]}return e}function ye(n,e){var t=za(n,e);return po(t)?t:i}function Ll(n){var e=K.call(n,me),t=n[me];try{n[me]=i;var r=!0}catch{}var o=kt.call(n);return r&&(e?n[me]=t:delete n[me]),o}var vi=Vr?function(n){return n==null?[]:(n=$(n),ie(Vr(n),function(e){return J0.call(n,e)}))}:Mi,Yo=Vr?function(n){for(var e=[];n;)oe(e,vi(n)),n=bt(n);return e}:Mi,an=fn;(Xr&&an(new Xr(new ArrayBuffer(1)))!=Re||nt&&an(new nt)!=kn||qr&&an(qr.resolve())!=u0||Ie&&an(new Ie)!=Nn||et&&an(new et)!=Ze)&&(an=function(n){var e=fn(n),t=e==Vn?n.constructor:i,r=t?Se(t):"";if(r)switch(r){case Of:return Re;case Uf:return kn;case vf:return u0;case yf:return Nn;case Sf:return Ze}return e});function Fl(n,e,t){for(var r=-1,o=t.length;++r<o;){var s=t[r],a=s.size;switch(s.type){case"drop":n+=a;break;case"dropRight":e-=a;break;case"take":e=sn(e,n+a);break;case"takeRight":n=tn(n,e-a);break}}return{start:n,end:e}}function Pl(n){var e=n.match($s);return e?e[1].split(zs):[]}function Vo(n,e,t){e=ce(e,n);for(var r=-1,o=e.length,s=!1;++r<o;){var a=Ln(e[r]);if(!(s=n!=null&&t(n,a)))break;n=n[a]}return s||++r!=o?s:(o=n==null?0:n.length,!!o&&ar(o)&&Qn(a,o)&&(N(n)||we(n)))}function Ml(n){var e=n.length,t=new n.constructor(e);return e&&typeof n[0]=="string"&&K.call(n,"index")&&(t.index=n.index,t.input=n.input),t}function Xo(n){return typeof n.constructor=="function"&&!lt(n)?Le(bt(n)):{}}function Dl(n,e,t){var r=n.constructor;switch(e){case Je:return pi(n);case ze:case Ye:return new r(+n);case Re:return wl(n,t);case Ur:case vr:case yr:case Sr:case wr:case xr:case Hr:case Er:case Tr:return Ao(n,t);case kn:return new r;case Ve:case qe:return new r(n);case Xe:return xl(n);case Nn:return new r;case St:return Hl(n)}}function Bl(n,e){var t=e.length;if(!t)return n;var r=t-1;return e[r]=(t>1?"& ":"")+e[r],e=e.join(t>2?", ":" "),n.replace(Gs,`{
/* [wrapped with `+e+`] */
`)}function Kl(n){return N(n)||we(n)||!!(Q0&&n&&n[Q0])}function Qn(n,e){var t=typeof n;return e=e??re,!!e&&(t=="number"||t!="symbol"&&js.test(n))&&n>-1&&n%1==0&&n<e}function ln(n,e,t){if(!Z(t))return!1;var r=typeof e;return(r=="number"?pn(t)&&Qn(e,t.length):r=="string"&&e in t)?Fn(t[e],n):!1}function yi(n,e){if(N(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||Sn(n)?!0:Ms.test(n)||!Ps.test(n)||e!=null&&n in $(e)}function Gl(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Si(n){var e=nr(n),t=u[e];if(typeof t!="function"||!(e in M.prototype))return!1;if(n===t)return!0;var r=Oi(t);return!!r&&n===r[0]}function $l(n){return!!X0&&X0 in n}var zl=At?jn:Di;function lt(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||Ne;return n===t}function qo(n){return n===n&&!Z(n)}function Zo(n,e){return function(t){return t==null?!1:t[n]===e&&(e!==i||n in $(t))}}function Yl(n){var e=ur(n,function(r){return t.size===T&&t.clear(),r}),t=e.cache;return e}function Vl(n,e){var t=n[1],r=e[1],o=t|r,s=o<(nn|zn|Yn),a=r==Yn&&t==Mn||r==Yn&&t==$e&&n[7].length<=e[8]||r==(Yn|$e)&&e[7].length<=e[8]&&t==Mn;if(!(s||a))return n;r&nn&&(n[2]=e[2],o|=t&nn?0:r0);var l=e[3];if(l){var p=n[3];n[3]=p?ko(p,l,e[4]):l,n[4]=p?ue(n[3],S):e[4]}return l=e[5],l&&(p=n[5],n[5]=p?No(p,l,e[6]):l,n[6]=p?ue(n[5],S):e[6]),l=e[7],l&&(n[7]=l),r&Yn&&(n[8]=n[8]==null?e[8]:sn(n[8],e[8])),n[9]==null&&(n[9]=e[9]),n[0]=e[0],n[1]=o,n}function Xl(n){var e=[];if(n!=null)for(var t in $(n))e.push(t);return e}function ql(n){return kt.call(n)}function Jo(n,e,t){return e=tn(e===i?n.length-1:e,0),function(){for(var r=arguments,o=-1,s=tn(r.length-e,0),a=g(s);++o<s;)a[o]=r[e+o];o=-1;for(var l=g(e+1);++o<e;)l[o]=r[o];return l[e]=t(a),On(n,this,l)}}function Qo(n,e){return e.length<2?n:ve(n,Wn(e,0,-1))}function Zl(n,e){for(var t=n.length,r=sn(e.length,t),o=dn(n);r--;){var s=e[r];n[r]=Qn(s,t)?o[s]:i}return n}function wi(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}var jo=eu(So),ct=cf||function(n,e){return rn.setTimeout(n,e)},xi=eu(Ul);function nu(n,e,t){var r=e+"";return xi(n,Bl(r,Jl(Pl(r),t)))}function eu(n){var e=0,t=0;return function(){var r=gf(),o=Os-(r-t);if(t=r,o>0){if(++e>=_s)return arguments[0]}else e=0;return n.apply(i,arguments)}}function tr(n,e){var t=-1,r=n.length,o=r-1;for(e=e===i?r:e;++t<e;){var s=ui(t,o),a=n[s];n[s]=n[t],n[t]=a}return n.length=e,n}var tu=Yl(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(Ds,function(t,r,o,s){e.push(o?s.replace(Vs,"$1"):r||t)}),e});function Ln(n){if(typeof n=="string"||Sn(n))return n;var e=n+"";return e=="0"&&1/n==-he?"-0":e}function Se(n){if(n!=null){try{return Ct.call(n)}catch{}try{return n+""}catch{}}return""}function Jl(n,e){return Un(xs,function(t){var r="_."+t[0];e&t[1]&&!Et(n,r)&&n.push(r)}),n.sort()}function ru(n){if(n instanceof M)return n.clone();var e=new Tn(n.__wrapped__,n.__chain__);return e.__actions__=dn(n.__actions__),e.__index__=n.__index__,e.__values__=n.__values__,e}function Ql(n,e,t){(t?ln(n,e,t):e===i)?e=1:e=tn(I(e),0);var r=n==null?0:n.length;if(!r||e<1)return[];for(var o=0,s=0,a=g(Pt(r/e));o<r;)a[s++]=Wn(n,o,o+=e);return a}function jl(n){for(var e=-1,t=n==null?0:n.length,r=0,o=[];++e<t;){var s=n[e];s&&(o[r++]=s)}return o}function nc(){var n=arguments.length;if(!n)return[];for(var e=g(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return oe(N(t)?dn(t):[t],un(e,1))}var ec=F(function(n,e){return Q(n)?ot(n,un(e,1,Q,!0)):[]}),tc=F(function(n,e){var t=An(e);return Q(t)&&(t=i),Q(n)?ot(n,un(e,1,Q,!0),W(t,2)):[]}),rc=F(function(n,e){var t=An(e);return Q(t)&&(t=i),Q(n)?ot(n,un(e,1,Q,!0),i,t):[]});function ic(n,e,t){var r=n==null?0:n.length;return r?(e=t||e===i?1:I(e),Wn(n,e<0?0:e,r)):[]}function oc(n,e,t){var r=n==null?0:n.length;return r?(e=t||e===i?1:I(e),e=r-e,Wn(n,0,e<0?0:e)):[]}function uc(n,e){return n&&n.length?Xt(n,W(e,3),!0,!0):[]}function sc(n,e){return n&&n.length?Xt(n,W(e,3),!0):[]}function ac(n,e,t,r){var o=n==null?0:n.length;return o?(t&&typeof t!="number"&&ln(n,e,t)&&(t=0,r=o),nl(n,e,t,r)):[]}function iu(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=t==null?0:I(t);return o<0&&(o=tn(r+o,0)),Tt(n,W(e,3),o)}function ou(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=r-1;return t!==i&&(o=I(t),o=t<0?tn(r+o,0):sn(o,r-1)),Tt(n,W(e,3),o,!0)}function uu(n){var e=n==null?0:n.length;return e?un(n,1):[]}function fc(n){var e=n==null?0:n.length;return e?un(n,he):[]}function lc(n,e){var t=n==null?0:n.length;return t?(e=e===i?1:I(e),un(n,e)):[]}function cc(n){for(var e=-1,t=n==null?0:n.length,r={};++e<t;){var o=n[e];Kn(r,o[0],o[1])}return r}function su(n){return n&&n.length?n[0]:i}function dc(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=t==null?0:I(t);return o<0&&(o=tn(r+o,0)),Ae(n,e,o)}function pc(n){var e=n==null?0:n.length;return e?Wn(n,0,-1):[]}var hc=F(function(n){var e=q(n,ci);return e.length&&e[0]===n[0]?ei(e):[]}),gc=F(function(n){var e=An(n),t=q(n,ci);return e===An(t)?e=i:t.pop(),t.length&&t[0]===n[0]?ei(t,W(e,2)):[]}),mc=F(function(n){var e=An(n),t=q(n,ci);return e=typeof e=="function"?e:i,e&&t.pop(),t.length&&t[0]===n[0]?ei(t,i,e):[]});function _c(n,e){return n==null?"":pf.call(n,e)}function An(n){var e=n==null?0:n.length;return e?n[e-1]:i}function Oc(n,e,t){var r=n==null?0:n.length;if(!r)return-1;var o=r;return t!==i&&(o=I(t),o=o<0?tn(r+o,0):sn(o,r-1)),e===e?Za(n,e,o):Tt(n,D0,o,!0)}function Uc(n,e){return n&&n.length?Oo(n,I(e)):i}var vc=F(au);function au(n,e){return n&&n.length&&e&&e.length?oi(n,e):n}function yc(n,e,t){return n&&n.length&&e&&e.length?oi(n,e,W(t,2)):n}function Sc(n,e,t){return n&&n.length&&e&&e.length?oi(n,e,i,t):n}var wc=Jn(function(n,e){var t=n==null?0:n.length,r=Jr(n,e);return yo(n,q(e,function(o){return Qn(o,t)?+o:o}).sort(Co)),r});function xc(n,e){var t=[];if(!(n&&n.length))return t;var r=-1,o=[],s=n.length;for(e=W(e,3);++r<s;){var a=n[r];e(a,r,n)&&(t.push(a),o.push(r))}return yo(n,o),t}function Hi(n){return n==null?n:_f.call(n)}function Hc(n,e,t){var r=n==null?0:n.length;return r?(t&&typeof t!="number"&&ln(n,e,t)?(e=0,t=r):(e=e==null?0:I(e),t=t===i?r:I(t)),Wn(n,e,t)):[]}function Ec(n,e){return Vt(n,e)}function Tc(n,e,t){return ai(n,e,W(t,2))}function Rc(n,e){var t=n==null?0:n.length;if(t){var r=Vt(n,e);if(r<t&&Fn(n[r],e))return r}return-1}function Wc(n,e){return Vt(n,e,!0)}function Ac(n,e,t){return ai(n,e,W(t,2),!0)}function Cc(n,e){var t=n==null?0:n.length;if(t){var r=Vt(n,e,!0)-1;if(Fn(n[r],e))return r}return-1}function kc(n){return n&&n.length?wo(n):[]}function Nc(n,e){return n&&n.length?wo(n,W(e,2)):[]}function Ic(n){var e=n==null?0:n.length;return e?Wn(n,1,e):[]}function bc(n,e,t){return n&&n.length?(e=t||e===i?1:I(e),Wn(n,0,e<0?0:e)):[]}function Lc(n,e,t){var r=n==null?0:n.length;return r?(e=t||e===i?1:I(e),e=r-e,Wn(n,e<0?0:e,r)):[]}function Fc(n,e){return n&&n.length?Xt(n,W(e,3),!1,!0):[]}function Pc(n,e){return n&&n.length?Xt(n,W(e,3)):[]}var Mc=F(function(n){return le(un(n,1,Q,!0))}),Dc=F(function(n){var e=An(n);return Q(e)&&(e=i),le(un(n,1,Q,!0),W(e,2))}),Bc=F(function(n){var e=An(n);return e=typeof e=="function"?e:i,le(un(n,1,Q,!0),i,e)});function Kc(n){return n&&n.length?le(n):[]}function Gc(n,e){return n&&n.length?le(n,W(e,2)):[]}function $c(n,e){return e=typeof e=="function"?e:i,n&&n.length?le(n,i,e):[]}function Ei(n){if(!(n&&n.length))return[];var e=0;return n=ie(n,function(t){if(Q(t))return e=tn(t.length,e),!0}),Gr(e,function(t){return q(n,Dr(t))})}function fu(n,e){if(!(n&&n.length))return[];var t=Ei(n);return e==null?t:q(t,function(r){return On(e,i,r)})}var zc=F(function(n,e){return Q(n)?ot(n,e):[]}),Yc=F(function(n){return li(ie(n,Q))}),Vc=F(function(n){var e=An(n);return Q(e)&&(e=i),li(ie(n,Q),W(e,2))}),Xc=F(function(n){var e=An(n);return e=typeof e=="function"?e:i,li(ie(n,Q),i,e)}),qc=F(Ei);function Zc(n,e){return To(n||[],e||[],it)}function Jc(n,e){return To(n||[],e||[],at)}var Qc=F(function(n){var e=n.length,t=e>1?n[e-1]:i;return t=typeof t=="function"?(n.pop(),t):i,fu(n,t)});function lu(n){var e=u(n);return e.__chain__=!0,e}function jc(n,e){return e(n),n}function rr(n,e){return e(n)}var nd=Jn(function(n){var e=n.length,t=e?n[0]:0,r=this.__wrapped__,o=function(s){return Jr(s,n)};return e>1||this.__actions__.length||!(r instanceof M)||!Qn(t)?this.thru(o):(r=r.slice(t,+t+(e?1:0)),r.__actions__.push({func:rr,args:[o],thisArg:i}),new Tn(r,this.__chain__).thru(function(s){return e&&!s.length&&s.push(i),s}))});function ed(){return lu(this)}function td(){return new Tn(this.value(),this.__chain__)}function rd(){this.__values__===i&&(this.__values__=xu(this.value()));var n=this.__index__>=this.__values__.length,e=n?i:this.__values__[this.__index__++];return{done:n,value:e}}function id(){return this}function od(n){for(var e,t=this;t instanceof Kt;){var r=ru(t);r.__index__=0,r.__values__=i,e?o.__wrapped__=r:e=r;var o=r;t=t.__wrapped__}return o.__wrapped__=n,e}function ud(){var n=this.__wrapped__;if(n instanceof M){var e=n;return this.__actions__.length&&(e=new M(this)),e=e.reverse(),e.__actions__.push({func:rr,args:[Hi],thisArg:i}),new Tn(e,this.__chain__)}return this.thru(Hi)}function sd(){return Eo(this.__wrapped__,this.__actions__)}var ad=qt(function(n,e,t){K.call(n,t)?++n[t]:Kn(n,t,1)});function fd(n,e,t){var r=N(n)?P0:jf;return t&&ln(n,e,t)&&(e=i),r(n,W(e,3))}function ld(n,e){var t=N(n)?ie:ao;return t(n,W(e,3))}var cd=Fo(iu),dd=Fo(ou);function pd(n,e){return un(ir(n,e),1)}function hd(n,e){return un(ir(n,e),he)}function gd(n,e,t){return t=t===i?1:I(t),un(ir(n,e),t)}function cu(n,e){var t=N(n)?Un:fe;return t(n,W(e,3))}function du(n,e){var t=N(n)?Na:so;return t(n,W(e,3))}var md=qt(function(n,e,t){K.call(n,t)?n[t].push(e):Kn(n,t,[e])});function _d(n,e,t,r){n=pn(n)?n:Be(n),t=t&&!r?I(t):0;var o=n.length;return t<0&&(t=tn(o+t,0)),fr(n)?t<=o&&n.indexOf(e,t)>-1:!!o&&Ae(n,e,t)>-1}var Od=F(function(n,e,t){var r=-1,o=typeof e=="function",s=pn(n)?g(n.length):[];return fe(n,function(a){s[++r]=o?On(e,a,t):ut(a,e,t)}),s}),Ud=qt(function(n,e,t){Kn(n,t,e)});function ir(n,e){var t=N(n)?q:go;return t(n,W(e,3))}function vd(n,e,t,r){return n==null?[]:(N(e)||(e=e==null?[]:[e]),t=r?i:t,N(t)||(t=t==null?[]:[t]),Uo(n,e,t))}var yd=qt(function(n,e,t){n[t?0:1].push(e)},function(){return[[],[]]});function Sd(n,e,t){var r=N(n)?Pr:K0,o=arguments.length<3;return r(n,W(e,4),t,o,fe)}function wd(n,e,t){var r=N(n)?Ia:K0,o=arguments.length<3;return r(n,W(e,4),t,o,so)}function xd(n,e){var t=N(n)?ie:ao;return t(n,sr(W(e,3)))}function Hd(n){var e=N(n)?ro:_l;return e(n)}function Ed(n,e,t){(t?ln(n,e,t):e===i)?e=1:e=I(e);var r=N(n)?Xf:Ol;return r(n,e)}function Td(n){var e=N(n)?qf:vl;return e(n)}function Rd(n){if(n==null)return 0;if(pn(n))return fr(n)?ke(n):n.length;var e=an(n);return e==kn||e==Nn?n.size:ri(n).length}function Wd(n,e,t){var r=N(n)?Mr:yl;return t&&ln(n,e,t)&&(e=i),r(n,W(e,3))}var Ad=F(function(n,e){if(n==null)return[];var t=e.length;return t>1&&ln(n,e[0],e[1])?e=[]:t>2&&ln(e[0],e[1],e[2])&&(e=[e[0]]),Uo(n,un(e,1),[])}),or=lf||function(){return rn.Date.now()};function Cd(n,e){if(typeof e!="function")throw new En(_);return n=I(n),function(){if(--n<1)return e.apply(this,arguments)}}function pu(n,e,t){return e=t?i:e,e=n&&e==null?n.length:e,Zn(n,Yn,i,i,i,i,e)}function hu(n,e){var t;if(typeof e!="function")throw new En(_);return n=I(n),function(){return--n>0&&(t=e.apply(this,arguments)),n<=1&&(e=i),t}}var Ti=F(function(n,e,t){var r=nn;if(t.length){var o=ue(t,Me(Ti));r|=Dn}return Zn(n,r,e,t,o)}),gu=F(function(n,e,t){var r=nn|zn;if(t.length){var o=ue(t,Me(gu));r|=Dn}return Zn(e,r,n,t,o)});function mu(n,e,t){e=t?i:e;var r=Zn(n,Mn,i,i,i,i,i,e);return r.placeholder=mu.placeholder,r}function _u(n,e,t){e=t?i:e;var r=Zn(n,He,i,i,i,i,i,e);return r.placeholder=_u.placeholder,r}function Ou(n,e,t){var r,o,s,a,l,p,O=0,U=!1,v=!1,w=!0;if(typeof n!="function")throw new En(_);e=Cn(e)||0,Z(t)&&(U=!!t.leading,v="maxWait"in t,s=v?tn(Cn(t.maxWait)||0,e):s,w="trailing"in t?!!t.trailing:w);function E(j){var Pn=r,ee=o;return r=o=i,O=j,a=n.apply(ee,Pn),a}function A(j){return O=j,l=ct(P,e),U?E(j):a}function L(j){var Pn=j-p,ee=j-O,Pu=e-Pn;return v?sn(Pu,s-ee):Pu}function R(j){var Pn=j-p,ee=j-O;return p===i||Pn>=e||Pn<0||v&&ee>=s}function P(){var j=or();if(R(j))return D(j);l=ct(P,L(j))}function D(j){return l=i,w&&r?E(j):(r=o=i,a)}function wn(){l!==i&&Ro(l),O=0,r=p=o=l=i}function cn(){return l===i?a:D(or())}function xn(){var j=or(),Pn=R(j);if(r=arguments,o=this,p=j,Pn){if(l===i)return A(p);if(v)return Ro(l),l=ct(P,e),E(p)}return l===i&&(l=ct(P,e)),a}return xn.cancel=wn,xn.flush=cn,xn}var kd=F(function(n,e){return uo(n,1,e)}),Nd=F(function(n,e,t){return uo(n,Cn(e)||0,t)});function Id(n){return Zn(n,Or)}function ur(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new En(_);var t=function(){var r=arguments,o=e?e.apply(this,r):r[0],s=t.cache;if(s.has(o))return s.get(o);var a=n.apply(this,r);return t.cache=s.set(o,a)||s,a};return t.cache=new(ur.Cache||qn),t}ur.Cache=qn;function sr(n){if(typeof n!="function")throw new En(_);return function(){var e=arguments;switch(e.length){case 0:return!n.call(this);case 1:return!n.call(this,e[0]);case 2:return!n.call(this,e[0],e[1]);case 3:return!n.call(this,e[0],e[1],e[2])}return!n.apply(this,e)}}function bd(n){return hu(2,n)}var Ld=Sl(function(n,e){e=e.length==1&&N(e[0])?q(e[0],vn(W())):q(un(e,1),vn(W()));var t=e.length;return F(function(r){for(var o=-1,s=sn(r.length,t);++o<s;)r[o]=e[o].call(this,r[o]);return On(n,this,r)})}),Ri=F(function(n,e){var t=ue(e,Me(Ri));return Zn(n,Dn,i,e,t)}),Uu=F(function(n,e){var t=ue(e,Me(Uu));return Zn(n,Ee,i,e,t)}),Fd=Jn(function(n,e){return Zn(n,$e,i,i,i,e)});function Pd(n,e){if(typeof n!="function")throw new En(_);return e=e===i?e:I(e),F(n,e)}function Md(n,e){if(typeof n!="function")throw new En(_);return e=e==null?0:tn(I(e),0),F(function(t){var r=t[e],o=de(t,0,e);return r&&oe(o,r),On(n,this,o)})}function Dd(n,e,t){var r=!0,o=!0;if(typeof n!="function")throw new En(_);return Z(t)&&(r="leading"in t?!!t.leading:r,o="trailing"in t?!!t.trailing:o),Ou(n,e,{leading:r,maxWait:e,trailing:o})}function Bd(n){return pu(n,1)}function Kd(n,e){return Ri(di(e),n)}function Gd(){if(!arguments.length)return[];var n=arguments[0];return N(n)?n:[n]}function $d(n){return Rn(n,z)}function zd(n,e){return e=typeof e=="function"?e:i,Rn(n,z,e)}function Yd(n){return Rn(n,b|z)}function Vd(n,e){return e=typeof e=="function"?e:i,Rn(n,b|z,e)}function Xd(n,e){return e==null||oo(n,e,on(e))}function Fn(n,e){return n===e||n!==n&&e!==e}var qd=jt(ni),Zd=jt(function(n,e){return n>=e}),we=co((function(){return arguments})())?co:function(n){return J(n)&&K.call(n,"callee")&&!J0.call(n,"callee")},N=g.isArray,Jd=k0?vn(k0):ol;function pn(n){return n!=null&&ar(n.length)&&!jn(n)}function Q(n){return J(n)&&pn(n)}function Qd(n){return n===!0||n===!1||J(n)&&fn(n)==ze}var pe=df||Di,jd=N0?vn(N0):ul;function n1(n){return J(n)&&n.nodeType===1&&!dt(n)}function e1(n){if(n==null)return!0;if(pn(n)&&(N(n)||typeof n=="string"||typeof n.splice=="function"||pe(n)||De(n)||we(n)))return!n.length;var e=an(n);if(e==kn||e==Nn)return!n.size;if(lt(n))return!ri(n).length;for(var t in n)if(K.call(n,t))return!1;return!0}function t1(n,e){return st(n,e)}function r1(n,e,t){t=typeof t=="function"?t:i;var r=t?t(n,e):i;return r===i?st(n,e,i,t):!!r}function Wi(n){if(!J(n))return!1;var e=fn(n);return e==vt||e==Es||typeof n.message=="string"&&typeof n.name=="string"&&!dt(n)}function i1(n){return typeof n=="number"&&j0(n)}function jn(n){if(!Z(n))return!1;var e=fn(n);return e==yt||e==o0||e==Hs||e==Rs}function vu(n){return typeof n=="number"&&n==I(n)}function ar(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=re}function Z(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}function J(n){return n!=null&&typeof n=="object"}var yu=I0?vn(I0):al;function o1(n,e){return n===e||ti(n,e,Ui(e))}function u1(n,e,t){return t=typeof t=="function"?t:i,ti(n,e,Ui(e),t)}function s1(n){return Su(n)&&n!=+n}function a1(n){if(zl(n))throw new k(d);return po(n)}function f1(n){return n===null}function l1(n){return n==null}function Su(n){return typeof n=="number"||J(n)&&fn(n)==Ve}function dt(n){if(!J(n)||fn(n)!=Vn)return!1;var e=bt(n);if(e===null)return!0;var t=K.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Ct.call(t)==uf}var Ai=b0?vn(b0):fl;function c1(n){return vu(n)&&n>=-re&&n<=re}var wu=L0?vn(L0):ll;function fr(n){return typeof n=="string"||!N(n)&&J(n)&&fn(n)==qe}function Sn(n){return typeof n=="symbol"||J(n)&&fn(n)==St}var De=F0?vn(F0):cl;function d1(n){return n===i}function p1(n){return J(n)&&an(n)==Ze}function h1(n){return J(n)&&fn(n)==As}var g1=jt(ii),m1=jt(function(n,e){return n<=e});function xu(n){if(!n)return[];if(pn(n))return fr(n)?In(n):dn(n);if(je&&n[je])return Va(n[je]());var e=an(n),t=e==kn?zr:e==Nn?Rt:Be;return t(n)}function ne(n){if(!n)return n===0?n:0;if(n=Cn(n),n===he||n===-he){var e=n<0?-1:1;return e*ys}return n===n?n:0}function I(n){var e=ne(n),t=e%1;return e===e?t?e-t:e:0}function Hu(n){return n?Ue(I(n),0,Bn):0}function Cn(n){if(typeof n=="number")return n;if(Sn(n))return Ot;if(Z(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Z(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=G0(n);var t=Zs.test(n);return t||Qs.test(n)?Aa(n.slice(2),t?2:8):qs.test(n)?Ot:+n}function Eu(n){return $n(n,hn(n))}function _1(n){return n?Ue(I(n),-re,re):n===0?n:0}function G(n){return n==null?"":yn(n)}var O1=Fe(function(n,e){if(lt(e)||pn(e)){$n(e,on(e),n);return}for(var t in e)K.call(e,t)&&it(n,t,e[t])}),Tu=Fe(function(n,e){$n(e,hn(e),n)}),Ru=Fe(function(n,e,t,r){$n(e,hn(e),n,r)}),Ci=Fe(function(n,e,t,r){$n(e,on(e),n,r)}),U1=Jn(Jr);function v1(n,e){var t=Le(n);return e==null?t:io(t,e)}var y1=F(function(n,e){n=$(n);var t=-1,r=e.length,o=r>2?e[2]:i;for(o&&ln(e[0],e[1],o)&&(r=1);++t<r;)for(var s=e[t],a=hn(s),l=-1,p=a.length;++l<p;){var O=a[l],U=n[O];(U===i||Fn(U,Ne[O])&&!K.call(n,O))&&(n[O]=s[O])}return n}),S1=F(function(n){return n.push(i,$o),On(Wu,i,n)});function w1(n,e){return M0(n,W(e,3),Gn)}function x1(n,e){return M0(n,W(e,3),jr)}function H1(n,e){return n==null?n:Qr(n,W(e,3),hn)}function E1(n,e){return n==null?n:fo(n,W(e,3),hn)}function T1(n,e){return n&&Gn(n,W(e,3))}function R1(n,e){return n&&jr(n,W(e,3))}function W1(n){return n==null?[]:zt(n,on(n))}function A1(n){return n==null?[]:zt(n,hn(n))}function ki(n,e,t){var r=n==null?i:ve(n,e);return r===i?t:r}function C1(n,e){return n!=null&&Vo(n,e,el)}function Ni(n,e){return n!=null&&Vo(n,e,tl)}var k1=Mo(function(n,e,t){e!=null&&typeof e.toString!="function"&&(e=kt.call(e)),n[e]=t},bi(gn)),N1=Mo(function(n,e,t){e!=null&&typeof e.toString!="function"&&(e=kt.call(e)),K.call(n,e)?n[e].push(t):n[e]=[t]},W),I1=F(ut);function on(n){return pn(n)?to(n):ri(n)}function hn(n){return pn(n)?to(n,!0):dl(n)}function b1(n,e){var t={};return e=W(e,3),Gn(n,function(r,o,s){Kn(t,e(r,o,s),r)}),t}function L1(n,e){var t={};return e=W(e,3),Gn(n,function(r,o,s){Kn(t,o,e(r,o,s))}),t}var F1=Fe(function(n,e,t){Yt(n,e,t)}),Wu=Fe(function(n,e,t,r){Yt(n,e,t,r)}),P1=Jn(function(n,e){var t={};if(n==null)return t;var r=!1;e=q(e,function(s){return s=ce(s,n),r||(r=s.length>1),s}),$n(n,_i(n),t),r&&(t=Rn(t,b|V|z,Nl));for(var o=e.length;o--;)fi(t,e[o]);return t});function M1(n,e){return Au(n,sr(W(e)))}var D1=Jn(function(n,e){return n==null?{}:hl(n,e)});function Au(n,e){if(n==null)return{};var t=q(_i(n),function(r){return[r]});return e=W(e),vo(n,t,function(r,o){return e(r,o[0])})}function B1(n,e,t){e=ce(e,n);var r=-1,o=e.length;for(o||(o=1,n=i);++r<o;){var s=n==null?i:n[Ln(e[r])];s===i&&(r=o,s=t),n=jn(s)?s.call(n):s}return n}function K1(n,e,t){return n==null?n:at(n,e,t)}function G1(n,e,t,r){return r=typeof r=="function"?r:i,n==null?n:at(n,e,t,r)}var Cu=Ko(on),ku=Ko(hn);function $1(n,e,t){var r=N(n),o=r||pe(n)||De(n);if(e=W(e,4),t==null){var s=n&&n.constructor;o?t=r?new s:[]:Z(n)?t=jn(s)?Le(bt(n)):{}:t={}}return(o?Un:Gn)(n,function(a,l,p){return e(t,a,l,p)}),t}function z1(n,e){return n==null?!0:fi(n,e)}function Y1(n,e,t){return n==null?n:Ho(n,e,di(t))}function V1(n,e,t,r){return r=typeof r=="function"?r:i,n==null?n:Ho(n,e,di(t),r)}function Be(n){return n==null?[]:$r(n,on(n))}function X1(n){return n==null?[]:$r(n,hn(n))}function q1(n,e,t){return t===i&&(t=e,e=i),t!==i&&(t=Cn(t),t=t===t?t:0),e!==i&&(e=Cn(e),e=e===e?e:0),Ue(Cn(n),e,t)}function Z1(n,e,t){return e=ne(e),t===i?(t=e,e=0):t=ne(t),n=Cn(n),rl(n,e,t)}function J1(n,e,t){if(t&&typeof t!="boolean"&&ln(n,e,t)&&(e=t=i),t===i&&(typeof e=="boolean"?(t=e,e=i):typeof n=="boolean"&&(t=n,n=i)),n===i&&e===i?(n=0,e=1):(n=ne(n),e===i?(e=n,n=0):e=ne(e)),n>e){var r=n;n=e,e=r}if(t||n%1||e%1){var o=no();return sn(n+o*(e-n+Wa("1e-"+((o+"").length-1))),e)}return ui(n,e)}var Q1=Pe(function(n,e,t){return e=e.toLowerCase(),n+(t?Nu(e):e)});function Nu(n){return Ii(G(n).toLowerCase())}function Iu(n){return n=G(n),n&&n.replace(na,Ka).replace(Ua,"")}function j1(n,e,t){n=G(n),e=yn(e);var r=n.length;t=t===i?r:Ue(I(t),0,r);var o=t;return t-=e.length,t>=0&&n.slice(t,o)==e}function np(n){return n=G(n),n&&bs.test(n)?n.replace(a0,Ga):n}function ep(n){return n=G(n),n&&Bs.test(n)?n.replace(Rr,"\\$&"):n}var tp=Pe(function(n,e,t){return n+(t?"-":"")+e.toLowerCase()}),rp=Pe(function(n,e,t){return n+(t?" ":"")+e.toLowerCase()}),ip=Lo("toLowerCase");function op(n,e,t){n=G(n),e=I(e);var r=e?ke(n):0;if(!e||r>=e)return n;var o=(e-r)/2;return Qt(Mt(o),t)+n+Qt(Pt(o),t)}function up(n,e,t){n=G(n),e=I(e);var r=e?ke(n):0;return e&&r<e?n+Qt(e-r,t):n}function sp(n,e,t){n=G(n),e=I(e);var r=e?ke(n):0;return e&&r<e?Qt(e-r,t)+n:n}function ap(n,e,t){return t||e==null?e=0:e&&(e=+e),mf(G(n).replace(Wr,""),e||0)}function fp(n,e,t){return(t?ln(n,e,t):e===i)?e=1:e=I(e),si(G(n),e)}function lp(){var n=arguments,e=G(n[0]);return n.length<3?e:e.replace(n[1],n[2])}var cp=Pe(function(n,e,t){return n+(t?"_":"")+e.toLowerCase()});function dp(n,e,t){return t&&typeof t!="number"&&ln(n,e,t)&&(e=t=i),t=t===i?Bn:t>>>0,t?(n=G(n),n&&(typeof e=="string"||e!=null&&!Ai(e))&&(e=yn(e),!e&&Ce(n))?de(In(n),0,t):n.split(e,t)):[]}var pp=Pe(function(n,e,t){return n+(t?" ":"")+Ii(e)});function hp(n,e,t){return n=G(n),t=t==null?0:Ue(I(t),0,n.length),e=yn(e),n.slice(t,t+e.length)==e}function gp(n,e,t){var r=u.templateSettings;t&&ln(n,e,t)&&(e=i),n=G(n),e=Ci({},e,r,Go);var o=Ci({},e.imports,r.imports,Go),s=on(o),a=$r(o,s);Un(s,function(R){if(l0.test(R))throw new k(x)});var l,p,O=0,U=e.interpolate||wt,v="__p += '",w=Yr((e.escape||wt).source+"|"+U.source+"|"+(U===f0?Xs:wt).source+"|"+(e.evaluate||wt).source+"|$","g"),E="//# sourceURL="+(K.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++xa+"]")+`
`;n.replace(w,function(R,P,D,wn,cn,xn){return D||(D=wn),v+=n.slice(O,xn).replace(ea,$a),P&&(l=!0,v+=`' +
__e(`+P+`) +
'`),cn&&(p=!0,v+=`';
`+cn+`;
__p += '`),D&&(v+=`' +
((__t = (`+D+`)) == null ? '' : __t) +
'`),O=xn+R.length,R}),v+=`';
`;var A=K.call(e,"variable")&&e.variable;if(!A)v=`with (obj) {
`+v+`
}
`;else if(l0.test(A))throw new k(y);v=(p?v.replace(Cs,""):v).replace(ks,"$1").replace(Ns,"$1;"),v="function("+(A||"obj")+`) {
`+(A?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(l?", __e = _.escape":"")+(p?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+v+`return __p
}`;var L=Lu(function(){return B(s,E+"return "+v).apply(i,a)});if(L.source=v,Wi(L))throw L;return L}function mp(n){return G(n).toLowerCase()}function _p(n){return G(n).toUpperCase()}function Op(n,e,t){if(n=G(n),n&&(t||e===i))return G0(n);if(!n||!(e=yn(e)))return n;var r=In(n),o=In(e),s=$0(r,o),a=z0(r,o)+1;return de(r,s,a).join("")}function Up(n,e,t){if(n=G(n),n&&(t||e===i))return n.slice(0,V0(n)+1);if(!n||!(e=yn(e)))return n;var r=In(n),o=z0(r,In(e))+1;return de(r,0,o).join("")}function vp(n,e,t){if(n=G(n),n&&(t||e===i))return n.replace(Wr,"");if(!n||!(e=yn(e)))return n;var r=In(n),o=$0(r,In(e));return de(r,o).join("")}function yp(n,e){var t=gs,r=ms;if(Z(e)){var o="separator"in e?e.separator:o;t="length"in e?I(e.length):t,r="omission"in e?yn(e.omission):r}n=G(n);var s=n.length;if(Ce(n)){var a=In(n);s=a.length}if(t>=s)return n;var l=t-ke(r);if(l<1)return r;var p=a?de(a,0,l).join(""):n.slice(0,l);if(o===i)return p+r;if(a&&(l+=p.length-l),Ai(o)){if(n.slice(l).search(o)){var O,U=p;for(o.global||(o=Yr(o.source,G(c0.exec(o))+"g")),o.lastIndex=0;O=o.exec(U);)var v=O.index;p=p.slice(0,v===i?l:v)}}else if(n.indexOf(yn(o),l)!=l){var w=p.lastIndexOf(o);w>-1&&(p=p.slice(0,w))}return p+r}function Sp(n){return n=G(n),n&&Is.test(n)?n.replace(s0,Ja):n}var wp=Pe(function(n,e,t){return n+(t?" ":"")+e.toUpperCase()}),Ii=Lo("toUpperCase");function bu(n,e,t){return n=G(n),e=t?i:e,e===i?Ya(n)?nf(n):Fa(n):n.match(e)||[]}var Lu=F(function(n,e){try{return On(n,i,e)}catch(t){return Wi(t)?t:new k(t)}}),xp=Jn(function(n,e){return Un(e,function(t){t=Ln(t),Kn(n,t,Ti(n[t],n))}),n});function Hp(n){var e=n==null?0:n.length,t=W();return n=e?q(n,function(r){if(typeof r[1]!="function")throw new En(_);return[t(r[0]),r[1]]}):[],F(function(r){for(var o=-1;++o<e;){var s=n[o];if(On(s[0],this,r))return On(s[1],this,r)}})}function Ep(n){return Qf(Rn(n,b))}function bi(n){return function(){return n}}function Tp(n,e){return n==null||n!==n?e:n}var Rp=Po(),Wp=Po(!0);function gn(n){return n}function Li(n){return ho(typeof n=="function"?n:Rn(n,b))}function Ap(n){return mo(Rn(n,b))}function Cp(n,e){return _o(n,Rn(e,b))}var kp=F(function(n,e){return function(t){return ut(t,n,e)}}),Np=F(function(n,e){return function(t){return ut(n,t,e)}});function Fi(n,e,t){var r=on(e),o=zt(e,r);t==null&&!(Z(e)&&(o.length||!r.length))&&(t=e,e=n,n=this,o=zt(e,on(e)));var s=!(Z(t)&&"chain"in t)||!!t.chain,a=jn(n);return Un(o,function(l){var p=e[l];n[l]=p,a&&(n.prototype[l]=function(){var O=this.__chain__;if(s||O){var U=n(this.__wrapped__),v=U.__actions__=dn(this.__actions__);return v.push({func:p,args:arguments,thisArg:n}),U.__chain__=O,U}return p.apply(n,oe([this.value()],arguments))})}),n}function Ip(){return rn._===this&&(rn._=sf),this}function Pi(){}function bp(n){return n=I(n),F(function(e){return Oo(e,n)})}var Lp=hi(q),Fp=hi(P0),Pp=hi(Mr);function Fu(n){return yi(n)?Dr(Ln(n)):gl(n)}function Mp(n){return function(e){return n==null?i:ve(n,e)}}var Dp=Do(),Bp=Do(!0);function Mi(){return[]}function Di(){return!1}function Kp(){return{}}function Gp(){return""}function $p(){return!0}function zp(n,e){if(n=I(n),n<1||n>re)return[];var t=Bn,r=sn(n,Bn);e=W(e),n-=Bn;for(var o=Gr(r,e);++t<n;)e(t);return o}function Yp(n){return N(n)?q(n,Ln):Sn(n)?[n]:dn(tu(G(n)))}function Vp(n){var e=++of;return G(n)+e}var Xp=Jt(function(n,e){return n+e},0),qp=gi("ceil"),Zp=Jt(function(n,e){return n/e},1),Jp=gi("floor");function Qp(n){return n&&n.length?$t(n,gn,ni):i}function jp(n,e){return n&&n.length?$t(n,W(e,2),ni):i}function nh(n){return B0(n,gn)}function eh(n,e){return B0(n,W(e,2))}function th(n){return n&&n.length?$t(n,gn,ii):i}function rh(n,e){return n&&n.length?$t(n,W(e,2),ii):i}var ih=Jt(function(n,e){return n*e},1),oh=gi("round"),uh=Jt(function(n,e){return n-e},0);function sh(n){return n&&n.length?Kr(n,gn):0}function ah(n,e){return n&&n.length?Kr(n,W(e,2)):0}return u.after=Cd,u.ary=pu,u.assign=O1,u.assignIn=Tu,u.assignInWith=Ru,u.assignWith=Ci,u.at=U1,u.before=hu,u.bind=Ti,u.bindAll=xp,u.bindKey=gu,u.castArray=Gd,u.chain=lu,u.chunk=Ql,u.compact=jl,u.concat=nc,u.cond=Hp,u.conforms=Ep,u.constant=bi,u.countBy=ad,u.create=v1,u.curry=mu,u.curryRight=_u,u.debounce=Ou,u.defaults=y1,u.defaultsDeep=S1,u.defer=kd,u.delay=Nd,u.difference=ec,u.differenceBy=tc,u.differenceWith=rc,u.drop=ic,u.dropRight=oc,u.dropRightWhile=uc,u.dropWhile=sc,u.fill=ac,u.filter=ld,u.flatMap=pd,u.flatMapDeep=hd,u.flatMapDepth=gd,u.flatten=uu,u.flattenDeep=fc,u.flattenDepth=lc,u.flip=Id,u.flow=Rp,u.flowRight=Wp,u.fromPairs=cc,u.functions=W1,u.functionsIn=A1,u.groupBy=md,u.initial=pc,u.intersection=hc,u.intersectionBy=gc,u.intersectionWith=mc,u.invert=k1,u.invertBy=N1,u.invokeMap=Od,u.iteratee=Li,u.keyBy=Ud,u.keys=on,u.keysIn=hn,u.map=ir,u.mapKeys=b1,u.mapValues=L1,u.matches=Ap,u.matchesProperty=Cp,u.memoize=ur,u.merge=F1,u.mergeWith=Wu,u.method=kp,u.methodOf=Np,u.mixin=Fi,u.negate=sr,u.nthArg=bp,u.omit=P1,u.omitBy=M1,u.once=bd,u.orderBy=vd,u.over=Lp,u.overArgs=Ld,u.overEvery=Fp,u.overSome=Pp,u.partial=Ri,u.partialRight=Uu,u.partition=yd,u.pick=D1,u.pickBy=Au,u.property=Fu,u.propertyOf=Mp,u.pull=vc,u.pullAll=au,u.pullAllBy=yc,u.pullAllWith=Sc,u.pullAt=wc,u.range=Dp,u.rangeRight=Bp,u.rearg=Fd,u.reject=xd,u.remove=xc,u.rest=Pd,u.reverse=Hi,u.sampleSize=Ed,u.set=K1,u.setWith=G1,u.shuffle=Td,u.slice=Hc,u.sortBy=Ad,u.sortedUniq=kc,u.sortedUniqBy=Nc,u.split=dp,u.spread=Md,u.tail=Ic,u.take=bc,u.takeRight=Lc,u.takeRightWhile=Fc,u.takeWhile=Pc,u.tap=jc,u.throttle=Dd,u.thru=rr,u.toArray=xu,u.toPairs=Cu,u.toPairsIn=ku,u.toPath=Yp,u.toPlainObject=Eu,u.transform=$1,u.unary=Bd,u.union=Mc,u.unionBy=Dc,u.unionWith=Bc,u.uniq=Kc,u.uniqBy=Gc,u.uniqWith=$c,u.unset=z1,u.unzip=Ei,u.unzipWith=fu,u.update=Y1,u.updateWith=V1,u.values=Be,u.valuesIn=X1,u.without=zc,u.words=bu,u.wrap=Kd,u.xor=Yc,u.xorBy=Vc,u.xorWith=Xc,u.zip=qc,u.zipObject=Zc,u.zipObjectDeep=Jc,u.zipWith=Qc,u.entries=Cu,u.entriesIn=ku,u.extend=Tu,u.extendWith=Ru,Fi(u,u),u.add=Xp,u.attempt=Lu,u.camelCase=Q1,u.capitalize=Nu,u.ceil=qp,u.clamp=q1,u.clone=$d,u.cloneDeep=Yd,u.cloneDeepWith=Vd,u.cloneWith=zd,u.conformsTo=Xd,u.deburr=Iu,u.defaultTo=Tp,u.divide=Zp,u.endsWith=j1,u.eq=Fn,u.escape=np,u.escapeRegExp=ep,u.every=fd,u.find=cd,u.findIndex=iu,u.findKey=w1,u.findLast=dd,u.findLastIndex=ou,u.findLastKey=x1,u.floor=Jp,u.forEach=cu,u.forEachRight=du,u.forIn=H1,u.forInRight=E1,u.forOwn=T1,u.forOwnRight=R1,u.get=ki,u.gt=qd,u.gte=Zd,u.has=C1,u.hasIn=Ni,u.head=su,u.identity=gn,u.includes=_d,u.indexOf=dc,u.inRange=Z1,u.invoke=I1,u.isArguments=we,u.isArray=N,u.isArrayBuffer=Jd,u.isArrayLike=pn,u.isArrayLikeObject=Q,u.isBoolean=Qd,u.isBuffer=pe,u.isDate=jd,u.isElement=n1,u.isEmpty=e1,u.isEqual=t1,u.isEqualWith=r1,u.isError=Wi,u.isFinite=i1,u.isFunction=jn,u.isInteger=vu,u.isLength=ar,u.isMap=yu,u.isMatch=o1,u.isMatchWith=u1,u.isNaN=s1,u.isNative=a1,u.isNil=l1,u.isNull=f1,u.isNumber=Su,u.isObject=Z,u.isObjectLike=J,u.isPlainObject=dt,u.isRegExp=Ai,u.isSafeInteger=c1,u.isSet=wu,u.isString=fr,u.isSymbol=Sn,u.isTypedArray=De,u.isUndefined=d1,u.isWeakMap=p1,u.isWeakSet=h1,u.join=_c,u.kebabCase=tp,u.last=An,u.lastIndexOf=Oc,u.lowerCase=rp,u.lowerFirst=ip,u.lt=g1,u.lte=m1,u.max=Qp,u.maxBy=jp,u.mean=nh,u.meanBy=eh,u.min=th,u.minBy=rh,u.stubArray=Mi,u.stubFalse=Di,u.stubObject=Kp,u.stubString=Gp,u.stubTrue=$p,u.multiply=ih,u.nth=Uc,u.noConflict=Ip,u.noop=Pi,u.now=or,u.pad=op,u.padEnd=up,u.padStart=sp,u.parseInt=ap,u.random=J1,u.reduce=Sd,u.reduceRight=wd,u.repeat=fp,u.replace=lp,u.result=B1,u.round=oh,u.runInContext=c,u.sample=Hd,u.size=Rd,u.snakeCase=cp,u.some=Wd,u.sortedIndex=Ec,u.sortedIndexBy=Tc,u.sortedIndexOf=Rc,u.sortedLastIndex=Wc,u.sortedLastIndexBy=Ac,u.sortedLastIndexOf=Cc,u.startCase=pp,u.startsWith=hp,u.subtract=uh,u.sum=sh,u.sumBy=ah,u.template=gp,u.times=zp,u.toFinite=ne,u.toInteger=I,u.toLength=Hu,u.toLower=mp,u.toNumber=Cn,u.toSafeInteger=_1,u.toString=G,u.toUpper=_p,u.trim=Op,u.trimEnd=Up,u.trimStart=vp,u.truncate=yp,u.unescape=Sp,u.uniqueId=Vp,u.upperCase=wp,u.upperFirst=Ii,u.each=cu,u.eachRight=du,u.first=su,Fi(u,(function(){var n={};return Gn(u,function(e,t){K.call(u.prototype,t)||(n[t]=e)}),n})(),{chain:!1}),u.VERSION=f,Un(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){u[n].placeholder=u}),Un(["drop","take"],function(n,e){M.prototype[n]=function(t){t=t===i?1:tn(I(t),0);var r=this.__filtered__&&!e?new M(this):this.clone();return r.__filtered__?r.__takeCount__=sn(t,r.__takeCount__):r.__views__.push({size:sn(t,Bn),type:n+(r.__dir__<0?"Right":"")}),r},M.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Un(["filter","map","takeWhile"],function(n,e){var t=e+1,r=t==i0||t==vs;M.prototype[n]=function(o){var s=this.clone();return s.__iteratees__.push({iteratee:W(o,3),type:t}),s.__filtered__=s.__filtered__||r,s}}),Un(["head","last"],function(n,e){var t="take"+(e?"Right":"");M.prototype[n]=function(){return this[t](1).value()[0]}}),Un(["initial","tail"],function(n,e){var t="drop"+(e?"":"Right");M.prototype[n]=function(){return this.__filtered__?new M(this):this[t](1)}}),M.prototype.compact=function(){return this.filter(gn)},M.prototype.find=function(n){return this.filter(n).head()},M.prototype.findLast=function(n){return this.reverse().find(n)},M.prototype.invokeMap=F(function(n,e){return typeof n=="function"?new M(this):this.map(function(t){return ut(t,n,e)})}),M.prototype.reject=function(n){return this.filter(sr(W(n)))},M.prototype.slice=function(n,e){n=I(n);var t=this;return t.__filtered__&&(n>0||e<0)?new M(t):(n<0?t=t.takeRight(-n):n&&(t=t.drop(n)),e!==i&&(e=I(e),t=e<0?t.dropRight(-e):t.take(e-n)),t)},M.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},M.prototype.toArray=function(){return this.take(Bn)},Gn(M.prototype,function(n,e){var t=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),o=u[r?"take"+(e=="last"?"Right":""):e],s=r||/^find/.test(e);o&&(u.prototype[e]=function(){var a=this.__wrapped__,l=r?[1]:arguments,p=a instanceof M,O=l[0],U=p||N(a),v=function(P){var D=o.apply(u,oe([P],l));return r&&w?D[0]:D};U&&t&&typeof O=="function"&&O.length!=1&&(p=U=!1);var w=this.__chain__,E=!!this.__actions__.length,A=s&&!w,L=p&&!E;if(!s&&U){a=L?a:new M(this);var R=n.apply(a,l);return R.__actions__.push({func:rr,args:[v],thisArg:i}),new Tn(R,w)}return A&&L?n.apply(this,l):(R=this.thru(v),A?r?R.value()[0]:R.value():R)})}),Un(["pop","push","shift","sort","splice","unshift"],function(n){var e=Wt[n],t=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",r=/^(?:pop|shift)$/.test(n);u.prototype[n]=function(){var o=arguments;if(r&&!this.__chain__){var s=this.value();return e.apply(N(s)?s:[],o)}return this[t](function(a){return e.apply(N(a)?a:[],o)})}}),Gn(M.prototype,function(n,e){var t=u[e];if(t){var r=t.name+"";K.call(be,r)||(be[r]=[]),be[r].push({name:e,func:t})}}),be[Zt(i,zn).name]=[{name:"wrapper",func:i}],M.prototype.clone=wf,M.prototype.reverse=xf,M.prototype.value=Hf,u.prototype.at=nd,u.prototype.chain=ed,u.prototype.commit=td,u.prototype.next=rd,u.prototype.plant=od,u.prototype.reverse=ud,u.prototype.toJSON=u.prototype.valueOf=u.prototype.value=sd,u.prototype.first=u.prototype.head,je&&(u.prototype[je]=id),u}),se=ef();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(rn._=se,define(function(){return se})):ge?((ge.exports=se)._=se,br._=se):rn._=se}).call(Ge)});var _r=Ke(xe());var mr=Ke(xe(),1);var Du=[{repeat:!0,minTime:0,name:"repeating intervals"},{pattern:[{group:"a",interval:[4,1]},{group:"b",interval:[2,2]},{group:"c",interval:[1,4]},{group:"b",interval:[2,2]},{group:"a",interval:[4,1]}],repeat:!1,minTime:400,intervalSize:4,name:"100 pyramid"},{pattern:[{group:"a",interval:[2,4]},{group:"b",interval:[1,8]},{group:"c",interval:[2,4]}],repeat:!1,minTime:480,intervalSize:4,name:"Short 200 pyramid"},{pattern:[{group:"a",interval:[6,2]},{group:"b",interval:[3,4]},{group:"c",interval:[2,6]},{group:"b",interval:[3,4]},{group:"a",interval:[6,2]}],repeat:!1,minTime:1200,intervalSize:12,name:"150 pyramid"},{pattern:[{group:"a",interval:[4,1]},{group:"b",interval:[2,2]},{group:"a",interval:[4,1]},{group:"c",interval:[1,4]},{group:"a",interval:[4,1]},{group:"b",interval:[2,2]},{group:"a",interval:[4,1]}],repeat:!1,minTime:560,intervalSize:4,name:"200 binary"},{pattern:[{group:"a",interval:[3,2]},{group:"b",interval:[2,3]},{group:"a",interval:[3,2]},{group:"c",interval:[1,6]},{group:"a",interval:[3,2]},{group:"b",interval:[2,3]},{group:"a",interval:[3,2]}],repeat:!1,minTime:840,intervalSize:6,name:"300 binary"},{pattern:[{group:"a",interval:[2,4]},{group:"a",interval:[2,3]},{group:"a",interval:[2,2]},{group:"a",interval:[2,1]}],repeat:!1,minTime:400,intervalSize:5,name:"decline"},{pattern:[{group:"a",interval:[1,8]},{group:"b",interval:[2,4]},{group:"c",interval:[4,2]}],repeat:!1,minTime:480,intervalSize:5,name:"short decline"},{pattern:[{group:"a",interval:[4,4]},{group:"b",interval:[4,4]},{group:"a",interval:[4,4]},{group:"b",interval:[4,4]}],repeat:!1,minTime:1600,intervalSize:8,name:"4x4"},{pattern:[{group:"a",interval:[3,4]},{group:"b",interval:[4,3]},{group:"a",interval:[3,4]},{group:"b",interval:[4,3]},{group:"a",interval:[3,4]},{group:"b",interval:[4,3]}],repeat:!1,minTime:1440,intervalSize:8,name:"100's and 75's"},{pattern:[{group:"a",interval:[1,8]},{group:"b",interval:[4,2]},{group:"a",interval:[1,8]},{group:"b",interval:[4,2]},{group:"a",interval:[1,8]},{group:"b",interval:[4,2]},{group:"a",interval:[1,8]},{group:"b",interval:[4,2]}],repeat:!1,minTime:1280,intervalSize:8,name:"200's and 50's"},{pattern:[{group:"a",interval:[10,4]}],repeat:!1,minTime:1e3,intervalSize:40,name:"10x100"}];var Bi=[{desc:"200 no fins, 200 w fins swim",dist:400,type:"swim"},{desc:"400 warmup (75 kick, 25 under)",dist:400,type:"kick"},{desc:"250 pull warmup, 250 swim warmup",dist:500,type:"pull/swim"},{desc:"250 warmup",dist:250,type:"general"},{desc:"200 warm up",dist:200,type:"general"},{desc:"500 warmup",dist:500,type:"general"},{desc:"300 warm up",dist:300,type:"general"},{desc:"150 warm up",dist:150,type:"general"}],lr={desc:"No warmup bitches",dist:0,type:"none"};function _h(){return Math.random()>.1?Bi[Math.floor(Math.random()*Bi.length)]:lr}function Bu(i,f){let h;if(i<f)h={...lr,desc:"No warmup (short workout)"};else if(h=_h(),h&&h.dist>0){let _=i-200;if(_=Math.min(_,i*.4),_<0&&i>0&&(_=i*.4),_<50&&i>=50&&(_=50),_<0&&(_=0),h.dist>_){let y=Bi.filter(x=>x.dist<=_&&x.dist>0);y.length>0?h=y[Math.floor(Math.random()*y.length)]:h=lr}}else(!h||h.dist===0)&&(h=lr);return h}var $u=Ke(xe(),1);function Ku(i,f,h=0){if(!f||typeof i!="number")return i;let _=(f.offset||0)+h;return f.operator==="+"?i+_:f.operator==="-"?i-_:i}function Oh(i,f){if(typeof i!="number"||!f)return"CSS";let h=f.randomRange||0,d=Ku(i,f,0),_=h>0?Ku(i,f,h):d;if(h>0&&d!==_){let y=Math.min(d,_),x=Math.max(d,_);return`${ht(y)}-${ht(x)}`}return ht(d)}function Ki(i,f){if(!f||typeof i!="number")return i;let h=i,d=f.offset||0,_=f.randomRange||0,y=0;_>0&&(y=Math.random()*_);let x=d+y;return f.operator==="+"?h+=x:f.operator==="-"&&(h-=x),h}function Gu(i,f){if(!i)return"No descriptive message template provided.";let h=i;for(let d in f)f[d]!==void 0&&(h=h.replace(new RegExp(`{${d}}`,"g"),f[d]));return h=h.replace(/{[^}]+}/g,""),h.trim()}function Uh(i,f,h){let d=h.baseStructure||"{reps}x{dist} {activity} ({energySystem} focus) {rest}";return d=d.replace("{reps}",i.reps),d=d.replace("{dist}",i.dist),d=d.replace("{activity}",i.activity||h.defaultActivity||"swim"),d=d.replace("{energySystem}",f),d=d.replace("{rest}",i.restString||""),d=d.replace("{paceDesc}",i.paceDesc||""),d=d.replace("{notes}",i.notes||""),d=d.trim().replace(/\s\s+/g," ").replace(/\s\(@/g," @").replace(/\s\(\s*,/g," (").replace(/,\s*\)/g,")").replace(/\(\s*\)/g,""),i.setRest==="rest 0 seconds"?d:d+`
  - `+i.setRest}function Gi(i,f,h,d){let _=[],y=0,x=0,C="";if(!d)return{sets:_,mainSetTotalDist:y,targetPacePer100:x,descriptiveMessage:"Error: Workout configuration not provided."};x=Ki(f,d.paceConfig);let T=vh(d,h),S=Oh(f,d.paceConfig);return T&&T.generatedSets&&T.generatedSets.length>0&&T.totalDistance>0?(y=T.totalDistance,T.generatedSets.forEach(b=>{b.paceDesc=S,_.push(Uh(b,i,d.setFormatting))}),C=Gu(d.descriptiveMessages.success,{workoutTypeName:d.workoutTypeName,setSummary:T.strategySpecificSummary||"Set generated",energySystem:i,totalDistance:String(y),paceDescription:S})):(y=0,C=Gu(d.descriptiveMessages.fail,{workoutTypeName:d.workoutTypeName,energySystem:i,totalDistance:String(h),setSummary:T?.strategySpecificSummary||"No sets generated by strategy.",paceDescription:S})),{sets:_,mainSetTotalDist:y,targetPacePer100:x,descriptiveMessage:C}}function vh(i,f){let h=f,{setDefinitions:d}=i,_=$u.default.shuffle(d),y={generatedSets:[],totalDistance:0,strategySpecificSummary:""};for(let x of _){let C=x.distance;if(x.repScheme.type==="dynamic"&&h>=C){let T=Math.floor(h/C);if(T===0)continue;let S=x.repScheme.maxReps||1/0;if(T=Math.min(T,S),T>0){let b=T*C;h-=b;let V=`r${x.rest}`,z={reps:T,dist:x.distance,restString:V,activity:x.activity||i.setFormatting.defaultActivity||"kick",setRest:`rest ${i.setRest} seconds`,rest:V};y.generatedSets.push(z),y.totalDistance+=b,y.strategySpecificSummary+=`${T}x${x.distance}
`}}}return y.generatedSets.length?y:{generatedSets:[],totalDistance:0,strategySpecificSummary:"No suitable reps found."}}var yh={workoutTypeName:"EN1",minTotalDistanceForSet:500,paceConfig:{baseMetric:"css",offset:5,randomRange:10,operator:"+"},setDefinitions:[{distance:500,repScheme:{type:"dynamic",maxReps:8},activity:"swim/kick",rest:60},{distance:600,repScheme:{type:"dynamic",maxReps:6},activity:"swim/kick",rest:60},{distance:700,repScheme:{type:"dynamic",maxReps:5},activity:"swim/kick",rest:60},{distance:800,repScheme:{type:"dynamic",maxReps:4},activity:"swim/kick",rest:60},{distance:900,repScheme:{type:"dynamic",maxReps:3},activity:"swim/kick",rest:60},{distance:1e3,repScheme:{type:"dynamic",maxReps:2},activity:"swim/kick",rest:60}],setRest:0,setFormatting:{baseStructure:"{reps}x{dist} {activity} ({energySystem} focus) {rest}",defaultActivity:"swim/kick"},descriptiveMessages:{success:'EN1: {setSummary} ({energySystem}), {paceDescription} pace guide, 60" rest.',tooShort:"EN1: Too short. Min rep distance {minRepDistForType}, available: {remainingDistance}.",fail:"EN1: Could not fit EN1 reps for {energySystem}. Available: {remainingDistance}."}},Sh={workoutTypeName:"General Endurance",paceConfig:{baseMetric:"css",offset:0,operator:"+"},setDefinitions:[{distance:500,repScheme:{type:"dynamic",maxReps:1/0},rest:60},{distance:400,repScheme:{type:"dynamic",maxReps:1/0},rest:60},{distance:300,repScheme:{type:"dynamic",maxReps:1/0},rest:45},{distance:200,repScheme:{type:"dynamic",maxReps:1/0},rest:30},{distance:100,repScheme:{type:"dynamic",maxReps:1/0},rest:20},{distance:50,repScheme:{type:"dynamic",maxReps:1/0},rest:15}],setRest:0,setFormatting:{baseStructure:"{reps}x{dist} swim ({energySystem} focus) {rest}",defaultActivity:"swim"},descriptiveMessages:{success:"General Endurance ({energySystem}) default set. {setSummary}",tooShort:"General Endurance ({energySystem}) set - too short. Available: {remainingDistance}.",fail:"General Endurance ({energySystem}): Could not fit set. Available: {remainingDistance}."}},wh={workoutTypeName:"SP2",paceConfig:{baseMetric:"css",offset:10,randomRange:5,operator:"-"},setDefinitions:[{distance:25,repScheme:{type:"dynamic",maxReps:20},activity:"UW sprint",notes:"breath at wall",rest:60},{distance:50,repScheme:{type:"dynamic",maxReps:10},activity:"UW sprint",notes:"breath at wall",rest:120}],setRest:300,setFormatting:{baseStructure:"{reps}x{dist} {activity} ({energySystem} focus, {notes}) {rest}",defaultActivity:"UW sprint"},descriptiveMessages:{success:"SP2: Lactate Production ({energySystem}), Near Max Effort. Set: {setSummary}. Total ~{totalDistance}yds.",tooShort:"SP2: Too short. Min rep 25. Available: {remainingDistance}.",fail:"SP2: Could not fit SP2 set. Available: {remainingDistance} (target yardage for SP2 is typically 300-600)."}},$i={workoutTypeName:"SP1",paceConfig:{baseMetric:"css",offset:3,randomRange:2,operator:"-"},setDefinitions:[{distance:25,repScheme:{type:"dynamic",maxReps:32},rest:20},{distance:50,repScheme:{type:"dynamic",maxReps:16},rest:30},{distance:75,repScheme:{type:"dynamic",maxReps:12},rest:40},{distance:100,repScheme:{type:"dynamic",maxReps:8},rest:45},{distance:200,repScheme:{type:"dynamic",maxReps:4},rest:60}],setRest:90,setFormatting:{baseStructure:"{reps}x{dist} {activity} ({energySystem} focus) {rest}"},descriptiveMessages:{success:"SP1: Lactate Tolerance ({energySystem}), {paceDescription}. Total ~{totalDistance}yds.",tooShort:"SP1: Too short. Min rep 25. Available: {remainingDistance}.",fail:"SP1: Could not fit SP1 set. Available: {remainingDistance} (target yardage for SP1 is typically 400-800)."}},xh={workoutTypeName:"EN3",paceConfig:{baseMetric:"css",offset:1,randomRange:1,operator:"-"},setDefinitions:[{id:"Nx400_css_r50",distance:400,repScheme:{type:"dynamic",maxReps:18},rest:50},{id:"Nx500_css_r60",distance:500,repScheme:{type:"dynamic",maxReps:14},rest:60},{id:"Nx600_css_r90",distance:600,repScheme:{type:"dynamic",maxReps:12},rest:90}],setRest:0,setFormatting:{baseStructure:"{reps}x{dist} {energySystem} focus swim @ {paceDesc} {rest}",defaultActivity:"swim"},descriptiveMessages:{success:"EN3: {setSummary} ({energySystem}) @ {paceDescription}.",tooShort:"EN3: Too short for EN3 sets (min rep {minRepDistForType}). Available: {remainingDistance}.",fail:"EN3: Could not fit standard or fallback EN3 set for {energySystem}. Available: {remainingDistance}."}},zi={workoutTypeName:"EN2",paceConfig:{baseMetric:"css",offset:0,operator:"+"},setDefinitions:[{id:"18x100_css_r10",distance:100,repScheme:{type:"dynamic",maxReps:18},rest:10},{id:"10x200_css_r20",distance:200,repScheme:{type:"dynamic",maxReps:10},rest:20},{id:"Nx400_css_r40",distance:400,repScheme:{type:"dynamic",maxReps:18},rest:40},{id:"Nx500_css_r50",distance:500,repScheme:{type:"dynamic",maxReps:14},rest:50},{id:"Nx600_css_r60",distance:600,repScheme:{type:"dynamic",maxReps:12},rest:60},{id:"Nx800_css_r90",distance:800,repScheme:{type:"dynamic",maxReps:8},rest:90},{id:"Nx1000_css_r90",distance:1e3,repScheme:{type:"dynamic",maxReps:6},rest:90}],setRest:150,setFormatting:{baseStructure:"{reps}x{dist} {energySystem} focus swim @ {paceDesc} {rest}",defaultActivity:"swim"},descriptiveMessages:{success:"EN2: {setSummary} ({energySystem}) @ {paceDescription}.",tooShort:"EN2: Too short for EN2 sets. Available: {remainingDistance}.",fail:"EN2: Could not fit standard EN2 set for {energySystem}. Available: {remainingDistance}."}},cr={ENDURANCE_BASE:yh,GENERAL_ENDURANCE:Sh,MAX_SPRINT:wh,SPEED_ENDURANCE:$i,THRESHOLD_DEVELOPMENT:xh,THRESHOLD_SUSTAINED:zi};var gt=[{desc:"200 w fins (or combo)",dist:200,type:"fins"},{desc:"200 swim cooldown",dist:200,type:"swim"},{desc:"100 cool down",dist:100,type:"general"},{desc:"300 CD",dist:300,type:"general"},{desc:"200 CD",dist:200,type:"general"},{desc:"450 cooldown (300 swim, 150 under)",dist:450,type:"swim/under"},{desc:"100 cool",dist:100,type:"general"},{desc:"150 cooldown and 20 minutes of stick skills",dist:150,type:"general"},{desc:"100 fin swim cooldown",dist:100,type:"fin swim"},{desc:"250 cool down",dist:250,type:"general"}];var Hh={desc:"No cooldown (short workout)",dist:0,type:"none"};function Eh(){return gt&&gt.length>0?gt[Math.floor(Math.random()*gt.length)]:Hh}function Th(i,f,h,d){let _=cr[i],y;_||(y=`Unknown workout type: ${i}. Defaulting to general endurance.`,_=cr.GENERAL_ENDURANCE);let x=Gi(f,h,d,_);if(x.mainSetTotalDist<100&&d>100&&i!=="GENERAL_ENDURANCE"){let C="(Fallback to general endurance due to low generated distance for selected workout type).",T=x.descriptiveMessage;x=Gi(f,h,d,cr.GENERAL_ENDURANCE);let S=C;T?S=T+" "+C:x.descriptiveMessage&&(S=C+" "+x.descriptiveMessage),x.descriptiveMessage=S}else y?x.descriptiveMessage?x.descriptiveMessage=y+" Original generator message: "+x.descriptiveMessage:x.descriptiveMessage=y:i==="GENERAL_ENDURANCE"&&!x.descriptiveMessage&&(x.descriptiveMessage=`General Endurance (${f}) set.`);return x}var Rh={generateCooldown:Eh,generateMainSet:Th},Yi=Rh;var Wh=600,zu="yards";function mt(i){if(typeof i!="string")return null;let f=i.split(":");if(f.length===2){let h=parseInt(f[0],10),d=parseFloat(f[1]);return isNaN(h)||isNaN(d)?null:h*60+d}return null}function ht(i){let f=Math.ceil(i),h=Math.floor(f/60),d=f%60;return`${h}:${d.toString().padStart(2,"0")}`}function _t(i,f,h,d){let _=mt(h);if(_===null)return"Error: Invalid CSS time format. Please use MM:SS (e.g., '1:10').";let y=[],x=0,C=Bu(i,Wh);y.push(C.desc),x+=C.dist;let T=Yi.generateCooldown();x+=T.dist;let S="Main Set:",b=[],V=0,z,mn=i-x,_n=Ah(f,d),nn=Yi.generateMainSet(_n,f,_,mn);return b=nn.sets,V=nn.mainSetTotalDist,z=nn.targetPacePer100,nn.descriptiveMessage&&(S+=` ${nn.descriptiveMessage}`),y.push(S),b.forEach(zn=>{y.push(`  - ${zn}`)}),x+=V,y.push(`CD: ${T.desc}`),y.push(`
Total estimated distance: ${x} ${zu}`),y.push(`CSS: ${h}`),y.push(`Workout Type: ${_n||d||"GENERAL_ENDURANCE"}`),y.push(`Energy System Focus: ${f.toUpperCase()}`),y.push(`Estimated AVG pace for main set: ${ht(z)} / 100 ${zu}`),y.join(`
`)}function Ah(i,f){let d={EN1:"ENDURANCE_BASE",EN2:"THRESHOLD_SUSTAINED",EN3:"THRESHOLD_DEVELOPMENT",SP1:"SPEED_ENDURANCE",SP2:"MAX_SPRINT"}[i.toUpperCase()];return d||f&&(d=f),d}var Vi=Ke(xe(),1);function dr(i,f,h,d=1){let _=Vi.default.filter(h,y=>y[i]*d<=f);return Vi.default.sample(_)}var Yu=Ke(xe(),1);var pr=[{name:"HUHO",interval:1,time:25},{name:"HOHU",interval:1,time:25},{name:"FU",interval:1,time:30},{name:"Swim",interval:1,time:20},{name:"Kick",interval:2,time:45},{name:"OU",interval:2,time:50},{name:"UO",interval:2,time:50},{name:"OUO",interval:3,time:70},{name:"UOU",interval:3,time:75},{name:"TOFU",interval:4,time:100}];function Vu(i,f){if(i<20)return f;let h=0,d=dr("time",i,pr);for(;h+d.time<=i;){let _=i-h,y=Math.floor(_/d.time);y=y*d.interval>40?Math.floor(40/d.interval):y;let x=Yu.default.random(1,y),C=d.time*x;h+=C,f.seconds+=C,f.intervals.push({type:d.name,length:d.interval*25*x,number:1,time:C})}return f}var te=Ke(xe(),1);function kh(i,f,h){if(i<20*h)return null;let d,_=0,y=te.default.cloneDeep(pr);for(;!d;)if(_++,d=te.default.sample(y),d.time*h>i?(y=te.default.filter(y,x=>x.time<d.time),d=null):(d.interval>f||f%d.interval!==0)&&(y=te.default.filter(y,x=>x.interval<d.interval),d=null),_>20)throw new Error(`fuck ${i} ${f} ${h}`);return d}function Nh(i){return te.default.reduce(i.pattern,(f,h)=>{let d=h.interval[1];return f[h.group]?(f[h.group].number+=1,f[h.group].intervalLength=te.default.min([f[h.group].intervalLength,d])):f[h.group]={number:1,intervalLength:d},f},{})}function Ih(i,f,h){let d={},_=f.pattern.length;return te.default.forEach(h,(y,x)=>{let C=f.intervalSize,T=(_-y.number)*C*20,S=kh(i-T,y.intervalLength,y.number*C);d[x]=S}),d}function Xu(i,f,h){if(i<20)return f;let d=Nh(h),_=Ih(i,h,d);return te.default.forEach(h.pattern,y=>{let x=_[y.group],C=y.interval[0],T=y.interval[1],S=T/x.interval,b=x.time*C*S;f.seconds+=b,f.intervals.push({type:x.name,length:T*25,number:C,time:x.time*S})}),f}var qu=`Warm-up (300-500 yds)\u20286 x 50 Kick @ 0:45\u20283 x 100 Huho @ 1:30\u20283 x 100 HoHu @ 1:30\u20286 x 50 Kick @ 0:45\u2028Cooldown (300-500 yds)
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
`,Zu=`Warm-up (300-500 yds)\u20286 x 50 Kick @ 0:45\u20283 x 100 Huho @ 1:30\u20283 x 100 HoHu @ 1:30\u20286 x 50 Kick @ 0:45\u2028Cooldown (300-500 yds)
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
`,Ju=`Workout 1b
Warm\xADup (300\xAD500 yds)

2 x 150 HUHO @ 2:10
100 VKick +30
2 x 150 HOHU @ 2:10
100 VKick +30
2 x 150 HUHO @ 2:10
100 VKick +30
2 x 150 HOHU @ 2:10
100 VKick +30

Cooldown (300\xAD500 yds)\f
Workout 2b
Warm\xADup (300\xAD500 yds)

200 Swim @ 2:40
3 x 100 UOUO @ 1:30
200 Kick @ 2:40
3 x 100 UOUO @ 1:30
200 HUHO @ 2:40
3 x 100 UOUO @ 1:30
200 TOFU @ 2:40
3 x 100 UOUO @ 1:30


Cooldown (300\xAD500 yds)\f
Workout 3b
Warm\xADup (300\xAD500 yds)

1 x 400 HUHO @ 5:30 < 4:45
2 x 200 HUHO @ 2:45 < 2:16
4 x 100 HUHO @ 1:30 < 1:03
8 x 50  HUHO @ 0:45 < 0:30

Cooldown (300\xAD500 yds)\f
Workout 4b
Warm\xADup (300\xAD500 yds)

1 x 400 OUOU @ 6:30 < 4:45
2 x 200 OUOU @ 3:30 < 2:16
4 x 100 OUOU @ 1:45 < 1:03
8 x 50  OUOU @ 1:00 < 0:30

Cooldown (300\xAD500 yds)\f
Workout 5b
Warm\xADup (300\xAD500 yds)

400 HUHO @ 6:00 < 4:45
4 x 100 Kick @ 1:30
200 HUHO @ 3:00 < 2:16
2 x 100 Kick @ 1:30
200 HUHO @ 3:00 < 2:16
2 x 100 Kick @ 1:30

Cooldown (300\xAD500 yds)\f
Workout 6b
Warm\xADup (300\xAD500 yds)

4 x 100 HUHO @ 1:30 < 1:10
4 x 100 HUHO @ 1:25 < 1:10
4 x 100 HUHO @ 1:20 < 1:10
1 min rest
4 x 100 HUHO @ 1:15 < 1:10

Cooldown (300\xAD500 yds)\f
Workout 7b
Warm\xADup (300\xAD500 yds)

2 x 300 Swim @ 4:00
4 x 100 UOUK @ 1:30
2 x 300 Swim @ 4:00
4 x 100 UOUK @ 1:30

Cooldown (300\xAD500 yds)\f
Workout 8b
Warm-up (300-500)

4\xD775 VKick +20 \u20283\xD7100 HUHO @ 1:30\u20284\xD775 VKick +20 \u2028300 Swim @ 4:30\u20284\xD775 VKick +20 \u20283\xD7100 HUHO @ 1:30\u20284\xD775 VKick +20 
\u2028Cooldown (300-500)
\f
Workout 9b
Warm\xADup (300\xAD500 yds)

500 Kick @ 7:00 < 5:20
500 Swim @ 7:00 < 5:20
500 Kick @ 7:00 < 5:20
500 Swim @ 7:00 < 5:20

Cooldown (300\xAD500 yds)\f
Workout 10b
Warm\xADup (300\xAD500 yds)

3 x 300 HUHO @ 4:30 < 3:10
3 x 200 HUHO @ 3:00 < 2:06
3 x 100 HUHO @ 1:45 < 1:00
1 min rest
3 x 100 FU @ 1:40 

Cooldown (300\xAD500 yds)\f
Workout 11b
Warm\xADup (300\xAD500 yds)

6 x 100 HUHO on 1:30 < 1:03
6 x 100 TOFU on 1:40 < 1:03
6 x 100 OUOU on 1:40 < 1:03
6 x 100 FU on 2:00 < 1:05

Cooldown (300\xAD500 yds)\f
Workout 12b
Warm\xADup (300\xAD500 yds)

5 Sets:
1x150 HUHO @ 2:00
2x100 HOHU @ 1:30
1x100 OUOU @ 1:45

Cooldown (300\xAD500 yds)\f
Workout 13b
Warm\xADup (300\xAD500 yds)

10x150 HUHO @ 2:15
5x100 HOHU @ 1:30

Cooldown (300\xAD500 yds)\f
Workout 14b
Warm\xADup (300\xAD500 yds)

4x125 UOUOU @ 2:00
5x100 UOUO @ 1:40
4x100 HUHO @ 1:30
3x100 HUHO @ 1:20
2x100 HUHO @ 1:10
1x100 HUHO @ sprint

Cooldown (300\xAD500 yds)\f
Workout 15b
Warm\xADup (300\xAD500 yds)

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

Cooldown (300\xAD500 yds)\f
Workout 16b
Warm\xADup (300\xAD500 yds)

250 kick +45, 50 FU +15
2 x 100 HUHO +20, 50 FU +15
250 kick +45, 50 FU +15
2 x 100 HOHU +20, 50 FU +15
250 kick +45, 50 FU +15
2 x 100 OUOU +20, 50 FU +15
250 Kick +45, 50 FU+15
2 x 100 UOUO +20, 50 FU +15

Cooldown (300\xAD500 yds)\f
Workout 17b
Warm\xADup (300\xAD500 yds)

5 Sets
200 HUHO @ 3:00
3x100 OUOU @ 1:40

Cooldown (300\xAD500 yds)\f
Workout 18b
Warm\xADup (300\xAD500 yds)

500 Swim +45
5x100 HUHO @ 1:20
500 KB +45
5x100 HUHO @ 1:20

Cooldown (300\xAD500 yds)\f
Workout 19b
Warm\xADup (300\xAD500 yds)

4x100 UOUO @ 1:30
2x200 TOFU @ 3:00
1x400 HUHO @ 6:00
2x200 TOFU @ 3:00
4x100 OUOU @ 1:30

Cooldown (300\xAD500 yds)\f
Workout 20b
Warm\xADup (300\xAD500 yds)

7 Sets
100 Swim @ 1:20
100 VKick +20
50 Swim @ 0:40
50 VKick +15

Cooldown (300\xAD500 yds)\f
Workout 21b
Warm\xADup (300\xAD500 yds)

5 Sets
2x100 HUHO @ 1:30
100 OUOU @ 1:30
100 BUBU @ 2:15

Cooldown (300\xAD500 yds)\f
Workout 22b
Warm\xADup (300\xAD500 yds)

10x100 @ 1:30 
HUHO, HOHU, TOFU, OUOU, OUOU, TOFU, HOHU, HUHO, FU, FU
2 min rest
10x100 @ 1:30 
HUHO, HOHU, TOFU, OUOU, OUOU, TOFU, HOHU, HUHO, FU, FU

Cooldown (300\xAD500 yds)\f
Workout 23b
Warm\xADup (300\xAD500 yds)

200 HUHO @ 2:45\u20284\xD750 VKick +20\u2028200 HOHU @ 2:45\u20284\xD750 VKick +20
400 Swim @ 5:00
4\xD750 VKick +20
200 HUHO @ 2:45\u20284\xD750 VKick +20
200 HOHU @ 2:45

Cooldown (300\xAD500 yds)
`,Qu=`Workout 1b
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
`,ju=`10 weeks program for speed development



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


`;var Xi={FOUR_WEEK_4X:{id:"FOUR_WEEK_4X",name:"4-Week Plan (4 swims/week)",swimsPerWeek:4,weeks:4,sourceText:qu},NINE_WEEK_2X:{id:"NINE_WEEK_2X",name:"9-Week Plan (2 swims/week)",swimsPerWeek:2,weeks:9,sourceText:Zu},TEN_WEEK_SPEED:{id:"TEN_WEEK_SPEED",name:"10-Week Speed Development",kind:"macro",weeks:10,sourceText:ju},LIBRARY_23:{id:"LIBRARY_23",name:"23 Swim Workouts",sourceText:Ju},LIBRARY_24:{id:"LIBRARY_24",name:"24 Swim Workouts",sourceText:Qu}};function hr(i){return Xi[i]||null}function bh(i){return i.replace(/\u00ad/g,"-").replace(/\u2013/g,"-").replace(/\u2014/g,"-").replace(/\u00a0/g," ").replace(/\r\n/g,`
`).replace(/\u2028/g,`
`).replace(/\u2029/g,`
`).replace(/(\d+)\s*,?\s*zzz★?\s*[x×]\s+/gi,"$1 x ")}var Lh=/^[\u2022•\-\s]*(\d+)\s*[x×]\s*(\d+)\s*(.*?)\s*(?:@|on)\s*(\d*:?\d+(?:\.\d+)?)\s*(.*)$/i,Fh=/^[\u2022•\-\s]*(\d+)\s+(.+?)\s*(?:@|on)\s*(\d*:?\d+(?:\.\d+)?)\s*(.*)$/i,gr=/(?:\(Goal\s*)?<\s*(\d*:?\d+(?:\.\d+)?)\s*\)?\s*$/i,Ph=/Goal Time If You(?:'|'|\u2019)re Fit:\s*Under\s*(\d*:?\d+)/i,Mh=/Goal Time If You(?:'|'|\u2019)re Not:\s*Under\s*(\d*:?\d+)/i;function ns(i){return i.replace(/\s*(?:\(Goal\s*)?<\s*\d*:?\d+(?:\.\d+)?\s*\)?\s*$/i,"").replace(/\s*\([^)]*Descend[^)]*\)\s*$/i,"").replace(/\s+Descending\s*$/i,"").trim()}function Dh(i){let f=i.trim();if(!f)return{kind:"blank"};if(/^warm[-\s]?up/i.test(f))return{kind:"warmup",text:f};if(/^cool\s?down/i.test(f))return{kind:"cooldown",text:f};if(/^if you need more|^to make harder|^for a bit extra|^add to the end|^add these|^for extra|^the original set was/i.test(f))return{kind:"extraStart",text:f};if(/^\*if this is too easy/i.test(f))return{kind:"extraStart",text:f};let h=f.match(Lh);if(h){let[,x,C,T,S,b]=h,V=gr.test(b)||gr.test(f);return{kind:"interval",reps:parseInt(x,10),distance:parseInt(C,10),activity:ns(T)||"swim",hasSendOff:!0,hasGoalTime:V,originalSendOff:S.trim()}}let d=f.match(Fh);if(d&&!/^[x×]/i.test(f)){let[,x,C,T,S]=d,b=gr.test(S)||gr.test(f);return{kind:"interval",reps:1,distance:parseInt(x,10),activity:ns(C)||"swim",hasSendOff:!0,hasGoalTime:b,originalSendOff:T.trim()}}return/\+\s*\d+\s*(?:seconds rest|sec|$)/i.test(f)||/\+\d+/.test(f)&&/v?kick|flutter|dolphin/i.test(f)?{kind:"fixedRest",text:f}:/full recovery|^\d+\s*min rest|^\d+:\d+\s*rest/i.test(f)?{kind:"fixedRest",text:f}:f.match(Ph)?{kind:"proseGoal",text:f,goalVariant:"fit",goalDistance:100}:f.match(Mh)?{kind:"proseGoal",text:f,goalVariant:"not",goalDistance:100}:/^repeat\s+\d+/i.test(f)||/^\d+\s*sets?,/i.test(f)||/^set:/i.test(f)?{kind:"note",text:f}:/^total:/i.test(f)?{kind:"note",text:f}:{kind:"note",text:f}}function Bh(i){let f=bh(i);if(/^workout\s+\d+/im.test(f))return f.split(/\f|\n(?=Workout\s+\d+)/i).map(_=>_.trim()).filter(Boolean);let h=f.split(/\f+/).flatMap(_=>_.split(/\n(?=Warm[-\s]?up)/i)).map(_=>_.trim()).filter(Boolean),d=[];for(let _ of h){if(!/^warm[-\s]?up/im.test(_)){d.length&&(d[d.length-1]+=`
${_}`);continue}d.push(_)}return d}function Kh(i){let f=i.split(`
`).map(T=>T.trim()).filter(T=>T.length>0),d=f[0]?.match(/^Workout\s+(\S+)/i)?f[0]:null,_=d?f.slice(1):f,y=[],x=!1,C=null;for(let T of _){let S=Dh(T);if(S.kind!=="blank"){if(S.kind==="extraStart"){x=!0,y.push({type:"extra",text:S.text,isExtra:!0}),C=null;continue}if(x){S.kind==="interval"?y.push({type:"interval",reps:S.reps,distance:S.distance,activity:S.activity,hasSendOff:S.hasSendOff,hasGoalTime:S.hasGoalTime,originalSendOff:S.originalSendOff,isExtra:!0}):y.push({type:"extra",text:S.text,isExtra:!0}),C=null;continue}if(S.kind==="interval"){C={type:"interval",reps:S.reps,distance:S.distance,activity:S.activity,hasSendOff:S.hasSendOff,hasGoalTime:S.hasGoalTime,originalSendOff:S.originalSendOff,activityLines:[]},y.push(C);continue}if(C&&S.kind==="note"&&!/^total:/i.test(S.text)&&/^[A-Z,[\]\s/]+$/i.test(S.text)&&S.text.length<80){C.activityLines.push(S.text);continue}C=null,S.kind==="warmup"?y.push({type:"warmup",text:S.text}):S.kind==="cooldown"?y.push({type:"cooldown",text:S.text}):S.kind==="fixedRest"?y.push({type:"fixedRest",text:S.text}):S.kind==="proseGoal"?y.push({type:"proseGoal",text:S.text,goalVariant:S.goalVariant,goalDistance:S.goalDistance}):y.push({type:"note",text:S.text})}}return{title:d,sections:y}}function es(i){return Bh(i).map(Kh)}var Gh=200;function $h(i){return Math.round(i/15)*15}function ts(i){return i<=Gh?$i:zi}function zh(i){if(!i)return null;let{baseMetric:f,offset:h,operator:d}=i;return{baseMetric:f,offset:h||0,operator:d}}function Yh(i,f){let h=[...f.setDefinitions].sort((_,y)=>_.distance-y.distance),d=h.filter(_=>_.distance<=i).pop();return d||(d=h[0]),d.rest}function rs(i,f){let h=ts(i),d=Ki(f,zh(h.paceConfig));return i/100*d}function is(i,f){let h=ts(i),d=rs(i,f),_=Yh(i,h);return $h(d+_)}function qi(i,f){return rs(i,f)}function Vh(i){let f=Math.round(i),h=Math.floor(f/60),d=f%60;return`${h}:${d.toString().padStart(2,"0")}`}function Zi(i){let f=Math.ceil(i);if(f<60)return`:${f.toString().padStart(f<10?2:1,"0")}`;let h=Math.floor(f/60),d=f%60;return`${h}:${d.toString().padStart(2,"0")}`}function Xh(i){let f=i.reps>1?`${i.reps}x`:i.reps===1?"1x":"",h=i.activity||"swim",d=`${f}${i.distance} ${h}`;return i.hasSendOff&&i.sendOffSeconds!=null?d+=` @ ${Vh(i.sendOffSeconds)}`:i.originalSendOff&&(d+=` @ ${i.originalSendOff}`),i.hasGoalTime&&i.goalSeconds!=null&&(/\(Goal/i.test(i.originalText||"")?d+=` (Goal < ${Zi(i.goalSeconds)})`:d+=` < ${Zi(i.goalSeconds)}`),i.activityLines&&i.activityLines.length?[d,...i.activityLines].join(`
`):d}function qh(i){let f=Zi(i.goalSeconds);return i.goalVariant==="not"?`Goal Time If You're Not: Under ${f}`:`Goal Time If You're Fit: Under ${f}`}function Zh(i,f){let h=i.sections.map(d=>{if(d.type==="interval"){let _={...d};return d.hasSendOff&&(_.sendOffSeconds=is(d.distance,f)),d.hasGoalTime&&(_.goalSeconds=qi(d.distance,f)),_}if(d.type==="proseGoal"){let _=d.goalDistance||100;return{...d,goalSeconds:qi(_,f)}}return d});return{...i,sections:h}}function Jh(i,f={}){let{includeExtras:h=!0}=f,d=[];i.title&&(d.push(i.title),d.push(""));for(let _ of i.sections)_.isExtra&&!h||(_.type==="interval"?d.push(Xh(_)):_.type==="proseGoal"?d.push(qh(_)):_.text&&d.push(_.text));return d.join(`
`)}function os(i,f,h={}){let d=mt(f);if(d===null)return"Error: Invalid CSS time format. Please use MM:SS (e.g., '1:20').";let _=Zh(i,d);return Jh(_,h)}var us=["Monday","Tuesday","Wednesday","Thursday","Friday"],Qh=[0,2,4],as=/^(\d+)\s+(EN[123]|SP[12])$/i,Ji=/^REST$/i;function ss(i){let f=i.match(as);return f?{yards:parseInt(f[1],10),energySystem:f[2].toUpperCase()}:null}function jh(i,f){let d=f.split(/\n(?:Swimming\s*:|Description:)/i,1)[0].split(`
`).map(b=>b.trim()).filter(Boolean),_=d.indexOf("Monday");if(_===-1||d[_+4]!=="Friday")return[];let y=d.indexOf("Swim 1",_);if(y===-1)return[];let x=[],C=[],T="swim1";for(let b=y+1;b<d.length;b+=1){let V=d[b];if(V==="Swim 2"){T="swim2";continue}(as.test(V)||Ji.test(V))&&(T==="swim2"?C:x).push(V)}let S=[];return x.forEach((b,V)=>{if(Ji.test(b))return;let z=ss(b);z&&S.push({week:i,day:us[V],slot:1,yards:z.yards,energySystem:z.energySystem})}),C.forEach((b,V)=>{if(Ji.test(b))return;let z=ss(b);z&&S.push({week:i,day:us[Qh[V]],slot:2,yards:z.yards,energySystem:z.energySystem})}),S}function fs(i){let f=i.split(/Week\s+(\d+)\s*:/i),h=[];for(let d=1;d<f.length;d+=2){let _=parseInt(f[d],10),y=f[d+1]||"";h.push(...jh(_,y))}return h}function ls(i){return`Week ${i.week}, ${i.day} (Swim ${i.slot}) \u2014 ${i.yards} ${i.energySystem}`}var Qi=new Map,ji=new Map;function ng(i){if(Qi.has(i))return Qi.get(i);let f=hr(i);if(!f)return null;let h=es(f.sourceText);return Qi.set(i,h),h}function eg(i){if(ji.has(i))return ji.get(i);let f=hr(i);if(!f)return null;let h=fs(f.sourceText);return ji.set(i,h),h}function tg(i,f){if(i.swimsPerWeek){let h=Math.floor(f/i.swimsPerWeek)+1,d=f%i.swimsPerWeek+1;return`Week ${h}, Swim ${d}`}return null}function rg(i,f){let h=eg(i.id);return!h||h.length===0?`Error: No workouts found for plan "${i.id}".`:h.map(_=>{let y=ls(_),x=_t(_.yards,_.energySystem,f);return`${y}
${x}`}).join(`

`)}function n0(){return Object.values(Xi).map(({id:i,name:f})=>({id:i,name:f}))}function e0(i,f,h={}){let d=hr(i);if(!d)return`Error: Unknown preset plan "${i}".`;if(mt(f)===null)return"Error: Invalid CSS time format. Please use MM:SS (e.g., '1:20').";if(d.kind==="macro")return rg(d,f);let _=ng(i);return!_||_.length===0?`Error: No workouts found for plan "${i}".`:_.map((x,C)=>{let T=tg(d,C),S=os(x,f,h);return T?`${T}
${S}`:S}).join(`

`)}function ig(i,f){return i.type===f.type&&i.length===f.length&&i.time===f.time}function og(i){i.seconds*=2,mr.default.forEach(i.intervals,f=>{f.length*=2,f.time*=2})}function ug(i){i.seconds*=2,mr.default.forEach(i.intervals,f=>{f.number*=2})}function sg(i){return i.intervals=i.intervals.reduce((f,h)=>{let d=f.length;return d===0?(f.push(h),f):(ig(f[d-1],h)?f[d-1].number+=h.number:f.push(h),f)},[]),i}function t0(i,f={seconds:0,intervals:[]}){if(i<20)return f;let h=i-f.seconds,d=dr("minTime",h,Du);return d.repeat===!0?Vu(h,f):Xu(h,f,d)}function cs(i){if(!i)throw new Error("Give me time!");let f=t0(i);for(;f.seconds<i/2&&f.seconds>=20;)switch(mr.default.random(1,3)){case 1:og(f);break;case 2:ug(f);break;case 3:t0(i,f);break}for(;i-f.seconds>=20;)t0(i,f);return f=sg(f),f}var ag="<li><%- number %>x<%- length %> <%- type %> @ <%- formatTime(time) %></li>",fg=_r.default.template(ag);function ds(i){let f=Math.floor(i/60),h=i-f*60;return(0,_r.default)([f,h]).map(d=>d<10?"0"+d:d).join(":")}function ps(i,f){let h=document.createElement("pre");h.textContent=f,i.appendChild(h)}function hs(){let i=document.getElementById("workoutTypeSelect"),f=document.querySelector(".swim-generator--time-input"),h=document.getElementById("cssInputsContainer"),d=document.getElementById("presetInputsContainer"),_=document.getElementById("presetPlanSelect"),y=document.getElementById("swimGenerateBtn");function x(){_.innerHTML="",n0().forEach(T=>{let S=document.createElement("option");S.value=T.id,S.textContent=T.name,_.appendChild(S)})}function C(){let T=i.value;f.style.display=T==="MIXED_UNDERWATERS"?"":"none",h.style.display=T!=="MIXED_UNDERWATERS"&&T!=="PRESET_PLAN"?"":"none",d.style.display=T==="PRESET_PLAN"?"":"none",T==="PRESET_PLAN"&&x()}i.addEventListener("change",C),C(),y.addEventListener("click",()=>{let T=i.value,S=document.getElementById("time"),b=document.getElementById("workout");if(b.innerHTML="",T==="MIXED_UNDERWATERS"){let V=document.getElementById("timeInput").value*60,z=cs(V);S.innerHTML="Total Time: "+ds(z.seconds);let mn=_r.default.map(z.intervals,_n=>fg({..._n,formatTime:ds})).join(" ");b.innerHTML=mn}else if(T==="PRESET_PLAN"){let V=document.getElementById("presetCssInput").value,z=_.value,mn=document.getElementById("presetIncludeExtras").checked,_n=e0(z,V,{includeExtras:mn});ps(b,_n),S.innerHTML=""}else{let V=parseInt(document.getElementById("distanceInput").value,10),z=document.getElementById("cssInput").value,_n=i.options[i.selectedIndex].text.split(" ")[0];ps(b,_t(V,T,z,_n)),S.innerHTML=""}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hs):hs();
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
