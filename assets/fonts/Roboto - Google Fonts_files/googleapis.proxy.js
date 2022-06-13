(function(){var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ba=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},ca=ba(this),g=function(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-
1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}},h=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
g("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=h(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});g("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
g("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});g("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==h(this,b,"includes").indexOf(b,c||0)}});window.gapi=window.gapi||{};window.gapi.l=(new Date).getTime();/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m=this||self,n="closure_uid_"+(1E9*Math.random()>>>0),da=0,t=function(a){return a};/*

 SPDX-License-Identifier: Apache-2.0
*/
/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var x=window,y=document,fa=x.location,ha=function(){},ia=/\[native code\]/,A=function(a,b,c){return a[b]=a[b]||c},ja=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b},D=function(){var a;if((a=Object.create)&&ia.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a},E=A(x,"gapi",{});var F={};F=A(x,"___jsl",D());A(F,"I",0);A(F,"hel",10);var H=function(){var a=fa.href;if(F.dpo)var b=F.h;else{b=F.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b},ka=function(a){var b=A(F,"PQ",[]);F.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},I=function(a){return A(A(F,"H",D()),a,D())};var J=A(F,"perf",D());A(J,"g",D());var la=A(J,"i",D());A(J,"r",[]);D();D();var N=function(a,b,c){b&&0<b.length&&(b=M(b),c&&0<c.length&&(b+="___"+M(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=A(la,"_p",D()),A(b,c,D())[a]=(new Date).getTime(),b=J.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))},M=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")};var O=D(),P=[],R=function(a){throw Error("Bad hint: "+a);};P.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?F[b]=A(F,b,[]).concat(c):A(F,b,c)}if(b=a.u)a=A(F,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var ma=/^(\/[a-zA-Z0-9_\-]+)+$/,S=[/\/amp\//,/\/amp$/,/^\/amp$/],na=/^[a-zA-Z0-9\-_\.,!]+$/,oa=/^gapi\.loaded_[0-9]+$/,pa=/^[a-zA-Z0-9,._-]+$/,ta=function(a,b,c,d,e){var f=a.split(";"),k=f.shift(),l=O[k],p=null;l?p=l(f,b,c,d):R("no hint processor for: "+k);p||R("failed to generate load url");b=p;c=b.match(qa);(d=b.match(ra))&&1===d.length&&sa.test(b)&&c&&1===c.length||R("failed sanity: "+a);try{a="?";if(e&&0<e.length){c=b=0;for(d={};c<e.length;){var q=e[c++];f=void 0;k=typeof q;f="object"==k&&null!=
q||"function"==k?"o"+(Object.prototype.hasOwnProperty.call(q,n)&&q[n]||(q[n]=++da)):(typeof q).charAt(0)+q;Object.prototype.hasOwnProperty.call(d,f)||(d[f]=!0,e[b++]=q)}e.length=b;p=p+"?le="+e.join(",");a="&"}if(F.rol){var z=F.ol;z&&z.length&&(p=""+p+a+"ol="+z.length)}}catch(G){}return p},va=function(a,b,c,d){a=ua(a);oa.test(c)||R("invalid_callback");b=T(b);d=d&&d.length?T(d):null;var e=function(f){return encodeURIComponent(f).replace(/%2C/g,",")};return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,
",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.g?"/am="+e(a.g):"",a.i?"/rs="+e(a.i):"",a.j?"/t="+e(a.j):"","/cb=",e(c)].join("")},ua=function(a){"/"!==a.charAt(0)&&R("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))R("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),k=decodeURIComponent(f[0]),l=
decodeURIComponent(f[1]);2==f.length&&k&&l&&(a[k]=a[k]||l)}b="/"+c.join("/");ma.test(b)||R("invalid_prefix");c=0;for(d=S.length;c<d;++c)S[c].test(b)&&R("invalid_prefix");c=U(a,"k",!0);d=U(a,"am");e=U(a,"rs");a=U(a,"t");return{pathPrefix:b,version:c,g:d,i:e,j:a}},T=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");pa.test(e)&&b.push(e)}return b.join(",")},U=function(a,b,c){a=a[b];!a&&c&&R("missing: "+b);if(a){if(na.test(a))return a;R("invalid: "+b)}return null},
sa=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ra=/\/cb=/g,qa=/\/\//g;O.m=function(a,b,c,d){(a=a[0])||R("missing_hint");return"https://apis.google.com"+va(a,b,c,d)};var V=decodeURI("%73cript"),W=/^[-+_0-9\/A-Za-z]+={0,2}$/,X=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c},wa=function(){var a=F.nonce;return void 0!==a?a&&a===String(a)&&a.match(W)?a:F.nonce=null:y.querySelector?(a=y.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(W)?F.nonce=a:F.nonce=null):null:null},ya=function(a){if("loading"!=y.readyState)xa(a);
else{var b=wa(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+V+' src="'+encodeURI(a)+'"'+c+"></"+V+">";y.write(Y?Y.createHTML(a):a)}},xa=function(a){var b=y.createElement(V);b.setAttribute("src",Y?Y.createScriptURL(a):a);a=wa();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=y.getElementsByTagName(V)[0])?a.parentNode.insertBefore(b,a):(y.head||y.body||y.documentElement).appendChild(b)},Aa=function(a,b,c){za(function(){var d=b===H()?A(E,"_",D()):D();d=A(I(b),"_",d);a(d)},c)},Ca=function(a,b){var c=
b||{};"function"==typeof b&&(c={},c.callback=b);var d=(b=c)&&b._c;if(d)for(var e=0;e<P.length;e++){var f=P[e][0],k=P[e][1];k&&Object.prototype.hasOwnProperty.call(d,f)&&k(d[f],a,b)}b=[];a?b=a.split(":"):c.features&&(b=c.features);if(!(a=c.h)&&(a=H(),!a))throw Error("Bad hint: !hint");Ba(b||[],c,a)},Ba=function(a,b,c){a=ja(a)||[];var d=b.callback,e=b.config,f=b.timeout,k=b.ontimeout,l=b.onerror,p=void 0;"function"==typeof l&&(p=l);var q=null,z=!1;if(f&&!k||!f&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";
l=A(I(c),"r",[]).sort();var G=A(I(c),"L",[]).sort(),Ga=F.le,K=[].concat(l),ea=function(w,B){if(z)return 0;x.clearTimeout(q);G.push.apply(G,r);var C=((E||{}).config||{}).update;C?C(e):e&&A(F,"cu",[]).push(e);if(B){N("me0",w,K);try{Aa(B,c,p)}finally{N("me1",w,K)}}return 1};0<f&&(q=x.setTimeout(function(){z=!0;k()},f));var r=X(a,G);if(r.length){r=X(a,l);var u=A(F,"CP",[]),v=u.length;u[v]=function(w){if(!w)return 0;N("ml1",r,K);var B=function(L){u[v]=null;ea(r,w)&&ka(function(){d&&d();L()})},C=function(){var L=
u[v+1];L&&L()};0<v&&u[v-1]?u[v]=function(){B(C)}:B(C)};if(r.length){var Q="loaded_"+F.I++;E[Q]=function(w){u[v](w);E[Q]=null};a=ta(c,r,"gapi."+Q,l,Ga);l.push.apply(l,r);N("ml0",r,K);b.sync||x.___gapisync?ya(a):xa(a)}else u[v](ha)}else ea(r)&&d&&d()},Da;var Ea=null,Z=m.trustedTypes;if(Z&&Z.createPolicy)try{Ea=Z.createPolicy("gapi#gapi",{createHTML:t,createScript:t,createScriptURL:t})}catch(a){m.console&&m.console.error(a.message)}Da=Ea;var Y=Da;var za=function(a,b){if(F.hee&&0<F.hel)try{return a()}catch(c){b&&b(c),F.hel--,Ca("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;}};var Fa=E.load;Fa&&A(F,"ol",[]).push(Fa);E.load=function(a,b){return za(function(){return Ca(a,b)})};P.unshift(["url",function(a,b,c){!a||b&&""!==b||!a.endsWith(".js")||(a=a.substring(0,a.length-3),b=a.lastIndexOf("/")+1,b>=a.length||(a=a.substr(b).split(":").filter(function(d){return!["api","platform"].includes(d)}),c.features=a))}]);window.gapi.load("",{callback:window["startup"],_c:{url:"https://apis.google.com/js/googleapis.proxy.js",jsl:{ci:{"oauth-flow":{authUrl:"https://accounts.google.com/o/oauth2/auth",proxyUrl:"https://accounts.google.com/o/oauth2/postmessageRelay",disableOpt:!0,idpIframeUrl:"https://accounts.google.com/o/oauth2/iframe",usegapi:!1},debug:{reportExceptionRate:1,forceIm:!1,rethrowException:!0,host:"https://apis.google.com"},enableMultilogin:!0,"googleapis.config":{auth:{useFirstPartyAuthV2:!0},root:"https://content.googleapis.com","root-1p":"https://clients6.google.com"},inline:{css:1},
disableRealtimeCallback:!1,drive_share:{skipInitCommand:!0},csi:{rate:.01},client:{cors:!1},signInDeprecation:{rate:0},include_granted_scopes:!0,llang:"ru",iframes:{youtube:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",methods:["scroll","openwindow"]},ytsubscribe:{url:"https://www.youtube.com/subscribe_embed?usegapi=1"},plus_circle:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"},plus_share:{params:{url:""},
url:":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"},rbr_s:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},":source:":"3p",playemm:{url:"https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"},savetoandroidpay:{url:"https://pay.google.com/gp/v/widget/save"},blogger:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",methods:["scroll","openwindow"]},evwidget:{params:{url:""},
url:":socialhost:/:session_prefix:_/events/widget?usegapi=1"},partnersbadge:{url:"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"},dataconnector:{url:"https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"},surveyoptin:{url:"https://www.google.com/shopping/customerreviews/optin?usegapi=1"},":socialhost:":"https://apis.google.com",shortlists:{url:""},hangout:{url:"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},plus_followers:{params:{url:""},
url:":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"},post:{params:{url:""},url:":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"},signin:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",methods:["onauth"]},rbr_i:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},share:{url:":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"},plusone:{params:{count:"",size:"",url:""},
url:":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"},comments:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",methods:["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com",backdrop:{url:"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"},visibility:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"},autocomplete:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/autocomplete"},
":signuphost:":"https://plus.google.com",ratingbadge:{url:"https://www.google.com/shopping/customerreviews/badge?usegapi=1"},appcirclepicker:{url:":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},follow:{url:":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"},community:{url:":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"},sharetoclassroom:{url:"https://classroom.google.com/sharewidget?usegapi=1"},ytshare:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"},
plus:{url:":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"},family_creation:{params:{url:""},url:"https://families.google.com/webcreation?usegapi=1&usegapi=1"},commentcount:{url:":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"},configurator:{url:":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"},zoomableimage:{url:"https://ssl.gstatic.com/microscope/embed/"},appfinder:{url:"https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"},savetowallet:{url:"https://pay.google.com/gp/v/widget/save"},
person:{url:":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"},savetodrive:{url:"https://drive.google.com/savetodrivebutton?usegapi=1",methods:["save"]},page:{url:":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"},card:{url:":socialhost:/:session_prefix:_/hovercard/card"}}},h:"m;/_/scs/abc-static/_/js/k=gapi.lb.ru.bmaOSvciWxg.O/d=1/rs=AHpOoo8A4sSPwdkJ6Od3FCcsU7wq25gUZg/m=__features__",u:"https://apis.google.com/js/googleapis.proxy.js",hee:!0,dpo:!1,le:["scs"]},platform:"backdrop blogger comments commentcount community donation family_creation follow hangout health page partnersbadge person playemm playreview plus plusone post ratingbadge savetoandroidpay savetodrive savetowallet sharetoclassroom shortlists signin2 surveyoptin visibility youtube ytsubscribe zoomableimage".split(" "),
annotation:["interactivepost","recobar","signin2","autocomplete","profile"]}});}).call(this);
